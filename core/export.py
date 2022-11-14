import os
import pdb
import numpy as np
from matplotlib.collections import PatchCollection
import matplotlib
import matplotlib.pyplot as plt
from shapely.geometry import Polygon as shpPolygon
from shapely.geometry.polygon import orient
from shapely.ops import unary_union
import pandas as pd
from geojson import Feature, Polygon, MultiPolygon, FeatureCollection, dump


def export(cells, borders, geo, projected_geo, topo, radius):
    csv_to_geo(cells, borders, geo, radius)
    geo_to_projection(geo, projected_geo)
    geo_to_topo(projected_geo, topo)


def csv_to_geo(cell_filename, border_filename, geo_filename, radius):
    """
    :param cell_filename: CSV file of the format: X,Y,CountryCode
    :param border_filename: Export to filename for borders of format: X,Y,PolygonID,CountryCode,BorderType
    :param geo_filename: Export to Geo JSON file name
    :param radius: Radius of the cell
    :return:
    """
    population_df = pd.read_csv('../data/population/unpd.csv')
    cells_df = pd.read_csv(cell_filename)
    iso_df = pd.read_csv('../data/iso-3166-1.csv')
    iso_df = iso_df.rename(columns={'Alpha-3 code':'CountryCode'})
    iso_df = iso_df.drop(columns=['English short name', 'French short name', 'Alpha-2 code'])
    map = dict(zip(iso_df['Numeric'], iso_df['CountryCode']))
    cells_df['CountryCode'] = cells_df['CountryCode'].map(map)
    cells_df = pd.merge(cells_df, iso_df)
    country_code_list = pd.unique(cells_df['CountryCode'])
    feature_list = []
    polygon_id = 0
    borders_df = pd.DataFrame()

    for countryCode in country_code_list:
        country_cells_df = cells_df.loc[cells_df['CountryCode'] == countryCode]
        country_poly_df = country_cells_df.apply(create_polygon, radius=radius, axis=1)
        union_polygon = unary_union(country_poly_df.tolist())

        current = 0
        if not population_df.loc[population_df['code'] == countryCode].empty:
            print("{} present".format(countryCode))
            # Current population here refers to the base cartogram: 2018
            current = population_df.loc[population_df['code']
                                        == countryCode].values[0][4]
        else:
            print("Country {} code not present: ".format(countryCode))

        if union_polygon.geom_type == 'Polygon':
            union_polygon = orient(union_polygon, -1)
            polygon_id = polygon_id + 1

            border_df = pd.DataFrame(
                union_polygon.exterior.coords[:], columns=["X", "Y"])
            border_df['PolygonID'] = polygon_id
            border_df['CountryCode'] = countryCode
            border_df['BorderType'] = "Exterior"

            polygon_borders = []

            each_border = df_to_tuple(border_df)
            polygon_borders.append(each_border)

            if len(union_polygon.interiors) > 0:
                for int_poly in union_polygon.interiors:
                    polygon_id = polygon_id + 1
                    int_border_df = pd.DataFrame(
                        int_poly.coords[:], columns=["X", "Y"])
                    int_border_df['PolygonID'] = polygon_id
                    int_border_df['CountryCode'] = countryCode
                    int_border_df['BorderType'] = "Interior"
                    border_df = pd.concat([border_df, int_border_df])
                    inner_border = df_to_tuple(int_border_df)
                    polygon_borders.append(inner_border)

            new_border_df = border_df
            new_polygon = Polygon(polygon_borders)
            new_feature = Feature(geometry=new_polygon,
                                  properties={"id": str(countryCode),
                                              "polygon-id": str(countryCode) + '-' + str(polygon_id),
                                              "count": current})

        else:
            all_border_df = pd.DataFrame()
            multi_polygons = []

            for geom in union_polygon.geoms:
                geom = orient(geom, -1)
                polygon_id = polygon_id + 1
                border_df = pd.DataFrame(
                    geom.exterior.coords[:], columns=["X", "Y"])
                border_df['PolygonID'] = polygon_id
                border_df['CountryCode'] = countryCode
                border_df['BorderType'] = "Exterior"

                polygon_borders = []

                each_border = df_to_tuple(border_df)
                polygon_borders.append(each_border)

                if len(geom.interiors) > 0:
                    for int_poly in geom.interiors:
                        polygon_id = polygon_id + 1
                        int_border_df = pd.DataFrame(
                            int_poly.coords[:], columns=["X", "Y"])
                        int_border_df['PolygonID'] = polygon_id
                        int_border_df['CountryCode'] = countryCode
                        int_border_df['BorderType'] = "Interior"
                        border_df = pd.concat([border_df, int_border_df])
                        inner_border = df_to_tuple(int_border_df)
                        polygon_borders.append(inner_border)
                all_border_df = pd.concat([all_border_df, border_df])
                multi_polygons.append(polygon_borders)

            new_border_df = all_border_df
            multi_polygon = MultiPolygon(multi_polygons)
            new_feature = Feature(geometry=multi_polygon,
                                  properties={"id": str(countryCode),
                                              "polygon-id": str(countryCode) + '-' + str(polygon_id),
                                              "count": current})

        borders_df = pd.concat([borders_df, new_border_df])
        feature_list.append(new_feature)

    borders_df.to_csv(border_filename, index=False)
    feature_collection = FeatureCollection(feature_list)

    with open(geo_filename, 'w', encoding='utf8') as geojson_file:
        dump(feature_collection, geojson_file)


def geo_to_projection(geo_filename, projected_geo_filename):

    # Using Javascript libraries instead of python bundles.
    os.system(
        "npx geoproject 'd3.geoNaturalEarth1().fitSize([1250, 750], d)' < " + geo_filename + " > " + projected_geo_filename)


def geo_to_topo(projected_geo_filename, topo_filename):

    # Using Javascript libraries instead of python bundles.
    os.system("npx geo2topo tiles=" + projected_geo_filename + " \
                | npx toposimplify -p 0.00005 \
                | npx topoquantize 1e9 > " + topo_filename)


def create_polygon(row, radius):
    diameter = radius * 2
    return shpPolygon([(row['X'], row['Y']),
                       (row['X'] + diameter, row['Y']),
                       (row['X'] + diameter, row['Y'] + diameter),
                       (row['X'], row['Y'] + diameter)])


def generate_plot(cell_filename, border_filename):
    borders = pd.read_csv(border_filename)
    cells = pd.read_csv(cell_filename)

    fig = plt.figure()
    ax = fig.add_subplot(111, aspect='equal')
    plt.xlim([0, max(cells["X"] + 1)])
    plt.ylim([0, max(cells["Y"] + 1)])
    n = cells.shape[0]
    patches = []

    for i in range(0, n):
        patches.append(matplotlib.patches.Rectangle(
            (cells.loc[i, "X"] + .5, cells.loc[i, "Y"] + .5), 0.2, 0.2, color="#111111"))
    ax.add_collection(PatchCollection(patches, alpha=0.1))

    for p in np.unique(borders["PolygonID"]):
        ax.plot(borders.loc[borders["PolygonID"] == p, "X"],
                borders.loc[borders["PolygonID"] == p, "Y"])
    plt.show()


def df_to_tuple(border_df):
    border = tuple((zip(border_df.X / 1000, border_df.Y / 1000)))
    return border


def main():
    cells = '../data/output/v1/cells.csv'
    borders = '../data/output/v1/borders.csv'
    geo = '../data/output/v1/geo.json'
    projected_geo = '../data/output/v1/projected_geo.json'
    topo = '../data/output/v1/topo.json'

    export(cells, borders, geo, projected_geo, topo, 12)


if __name__ == "__main__":
    main()
