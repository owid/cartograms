const t=["#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e","#16a085","#27ae60","#2980b9","#8e44ad","#2c3e50","#f1c40f","#e67e22","#e74c3c","#ecf0f1","#95a5a6","#f39c12","#d35400","#c0392b","#bdc3c7","#7f8c8d"],n=15,e=15,r=10,o=1350-r-10,i=750-n-e,u="Add",a="Remove",l="Hexagon",c="Square",s="SVG",f="GeoJSON";function p(t,n){var e,r,o,i,u="cartogram"+n;switch(t){case f:e=exportJson,r=u,o="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),(i=document.createElement("a")).setAttribute("href",o),i.setAttribute("download",r+".json"),document.body.appendChild(i),i.click(),i.remove();case s:d3.select("#download").each((function(){d3.select(this).attr("href","data:application/octet-stream;base64,"+btoa(d3.select("#container").html())).attr("download",u+".svg")}))}}var h=Math.PI/3,d=[0,h,2*h,3*h,4*h,5*h];function v(t){return t[0]}function g(t){return t[1]}class y{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const n=this._partials;let e=0;for(let r=0;r<this._n&&r<32;r++){const o=n[r],i=t+o,u=Math.abs(t)<Math.abs(o)?t-(i-o):o-(i-t);u&&(n[e++]=u),t=i}return n[e]=t,this._n=e+1,this}valueOf(){const t=this._partials;let n,e,r,o=this._n,i=0;if(o>0){for(i=t[--o];o>0&&(n=i,e=t[--o],i=n+e,r=e-(i-n),!r););o>0&&(r<0&&t[o-1]<0||r>0&&t[o-1]>0)&&(e=2*r,n=i+e,e==n-i&&(i=n))}return i}}function m(t){return Array.from(function*(t){for(const n of t)yield*n}(t))}function S(t,n){let e=0;if(void 0===n)for(let n of t)(n=+n)&&(e+=n);else{let r=-1;for(let o of t)(o=+n(o,++r,t))&&(e+=o)}return e}var E=t=>t;function M(t,n){t&&w.hasOwnProperty(t.type)&&w[t.type](t,n)}var x={Feature:function(t,n){M(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,o=e.length;++r<o;)M(e[r].geometry,n)}},w={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,o=e.length;++r<o;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){_(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,o=e.length;++r<o;)_(e[r],n,0)},Polygon:function(t,n){b(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,o=e.length;++r<o;)b(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,o=e.length;++r<o;)M(e[r],n)}};function _(t,n,e){var r,o=-1,i=t.length-e;for(n.lineStart();++o<i;)r=t[o],n.point(r[0],r[1],r[2]);n.lineEnd()}function b(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)_(t[e],n,1);n.polygonEnd()}function k(t,n){t&&x.hasOwnProperty(t.type)?x[t.type](t,n):M(t,n)}var q=Math.PI,N=q/2,P=q/4,j=2*q,A=180/q,L=q/180,C=Math.abs,z=Math.atan,F=Math.atan2,R=Math.cos,G=(Math.ceil,Math.exp,Math.floor,Math.hypot,Math.log,Math.pow,Math.sin),O=Math.sign||function(t){return t>0?1:t<0?-1:0},I=Math.sqrt;Math.tan;function J(t){return t>1?N:t<-1?-N:Math.asin(t)}function T(){}var H,$,U,V,W=new y,X=new y,Y={point:T,lineStart:T,lineEnd:T,polygonStart:function(){Y.lineStart=Z,Y.lineEnd=K},polygonEnd:function(){Y.lineStart=Y.lineEnd=Y.point=T,W.add(C(X)),X=new y},result:function(){var t=W/2;return W=new y,t}};function Z(){Y.point=B}function B(t,n){Y.point=D,H=U=t,$=V=n}function D(t,n){X.add(V*t-U*n),U=t,V=n}function K(){D(H,$)}var Q=Y,tt=1/0,nt=tt,et=-tt,rt=et;var ot,it,ut,at,lt={point:function(t,n){t<tt&&(tt=t);t>et&&(et=t);n<nt&&(nt=n);n>rt&&(rt=n)},lineStart:T,lineEnd:T,polygonStart:T,polygonEnd:T,result:function(){var t=[[tt,nt],[et,rt]];return et=rt=-(nt=tt=1/0),t}},ct=0,st=0,ft=0,pt=0,ht=0,dt=0,vt=0,gt=0,yt=0,mt={point:St,lineStart:Et,lineEnd:wt,polygonStart:function(){mt.lineStart=_t,mt.lineEnd=bt},polygonEnd:function(){mt.point=St,mt.lineStart=Et,mt.lineEnd=wt},result:function(){var t=yt?[vt/yt,gt/yt]:dt?[pt/dt,ht/dt]:ft?[ct/ft,st/ft]:[NaN,NaN];return ct=st=ft=pt=ht=dt=vt=gt=yt=0,t}};function St(t,n){ct+=t,st+=n,++ft}function Et(){mt.point=Mt}function Mt(t,n){mt.point=xt,St(ut=t,at=n)}function xt(t,n){var e=t-ut,r=n-at,o=I(e*e+r*r);pt+=o*(ut+t)/2,ht+=o*(at+n)/2,dt+=o,St(ut=t,at=n)}function wt(){mt.point=St}function _t(){mt.point=kt}function bt(){qt(ot,it)}function kt(t,n){mt.point=qt,St(ot=ut=t,it=at=n)}function qt(t,n){var e=t-ut,r=n-at,o=I(e*e+r*r);pt+=o*(ut+t)/2,ht+=o*(at+n)/2,dt+=o,vt+=(o=at*t-ut*n)*(ut+t),gt+=o*(at+n),yt+=3*o,St(ut=t,at=n)}var Nt=mt;function Pt(t){this._context=t}Pt.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,j)}},result:T};var jt,At,Lt,Ct,zt,Ft=new y,Rt={point:T,lineStart:function(){Rt.point=Gt},lineEnd:function(){jt&&Ot(At,Lt),Rt.point=T},polygonStart:function(){jt=!0},polygonEnd:function(){jt=null},result:function(){var t=+Ft;return Ft=new y,t}};function Gt(t,n){Rt.point=Ot,At=Ct=t,Lt=zt=n}function Ot(t,n){Ct-=t,zt-=n,Ft.add(I(Ct*Ct+zt*zt)),Ct=t,zt=n}var It=Rt;function Jt(){this._string=[]}function Tt(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function Ht(t,n){var e,r,o=4.5;function i(t){return t&&("function"==typeof o&&r.pointRadius(+o.apply(this,arguments)),k(t,e(r))),r.result()}return i.area=function(t){return k(t,e(Q)),Q.result()},i.measure=function(t){return k(t,e(It)),It.result()},i.bounds=function(t){return k(t,e(lt)),lt.result()},i.centroid=function(t){return k(t,e(Nt)),Nt.result()},i.projection=function(n){return arguments.length?(e=null==n?(t=null,E):(t=n).stream,i):t},i.context=function(t){return arguments.length?(r=null==t?(n=null,new Jt):new Pt(n=t),"function"!=typeof o&&r.pointRadius(o),i):n},i.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(r.pointRadius(+t),+t),i):o},i.projection(t).context(n)}function $t(){var t,n=[];return{point:function(n,e,r){t.push([n,e,r])},lineStart:function(){n.push(t=[])},lineEnd:T,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}function Ut(t,n){return C(t[0]-n[0])<1e-6&&C(t[1]-n[1])<1e-6}function Vt(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Wt(t,n,e,r,o){var i,u,a=[],l=[];if(t.forEach((function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],u=t[n];if(Ut(r,u)){if(!r[2]&&!u[2]){for(o.lineStart(),i=0;i<n;++i)o.point((r=t[i])[0],r[1]);return void o.lineEnd()}u[0]+=2e-6}a.push(e=new Vt(r,t,null,!0)),l.push(e.o=new Vt(r,null,e,!1)),a.push(e=new Vt(u,t,null,!1)),l.push(e.o=new Vt(u,null,e,!0))}})),a.length){for(l.sort(n),Xt(a),Xt(l),i=0,u=l.length;i<u;++i)l[i].e=e=!e;for(var c,s,f=a[0];;){for(var p=f,h=!0;p.v;)if((p=p.n)===f)return;c=p.z,o.lineStart();do{if(p.v=p.o.v=!0,p.e){if(h)for(i=0,u=c.length;i<u;++i)o.point((s=c[i])[0],s[1]);else r(p.x,p.n.x,1,o);p=p.n}else{if(h)for(c=p.p.z,i=c.length-1;i>=0;--i)o.point((s=c[i])[0],s[1]);else r(p.x,p.p.x,-1,o);p=p.p}c=(p=p.o).z,h=!h}while(!p.v);o.lineEnd()}}}function Xt(t){if(n=t.length){for(var n,e,r=0,o=t[0];++r<n;)o.n=e=t[r],e.p=o,o=e;o.n=e=t[0],e.p=o}}function Yt(t){return[F(t[1],t[0]),J(t[2])]}function Zt(t){var n=t[0],e=t[1],r=R(e);return[r*R(n),r*G(n),G(e)]}function Bt(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Dt(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function Kt(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function Qt(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function tn(t){var n=I(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n}function nn(t){return C(t[0])<=q?t[0]:O(t[0])*((C(t[0])+q)%j-q)}function en(t,n,e,r){return function(o){var i,u,a,l=n(o),c=$t(),s=n(c),f=!1,p={point:h,lineStart:v,lineEnd:g,polygonStart:function(){p.point=S,p.lineStart=E,p.lineEnd=M,u=[],i=[]},polygonEnd:function(){p.point=h,p.lineStart=v,p.lineEnd=g,u=m(u);var t=function(t,n){var e=nn(n),r=n[1],o=G(r),i=[G(e),-R(e),0],u=0,a=0,l=new y;1===o?r=N+1e-6:-1===o&&(r=-N-1e-6);for(var c=0,s=t.length;c<s;++c)if(p=(f=t[c]).length)for(var f,p,h=f[p-1],d=nn(h),v=h[1]/2+P,g=G(v),m=R(v),S=0;S<p;++S,d=M,g=w,m=_,h=E){var E=f[S],M=nn(E),x=E[1]/2+P,w=G(x),_=R(x),b=M-d,k=b>=0?1:-1,A=k*b,L=A>q,C=g*w;if(l.add(F(C*k*G(A),m*_+C*R(A))),u+=L?b+k*j:b,L^d>=e^M>=e){var z=Dt(Zt(h),Zt(E));tn(z);var O=Dt(i,z);tn(O);var I=(L^b>=0?-1:1)*J(O[2]);(r>I||r===I&&(z[0]||z[1]))&&(a+=L^b>=0?1:-1)}}return(u<-1e-6||u<1e-6&&l<-1e-12)^1&a}(i,r);u.length?(f||(o.polygonStart(),f=!0),Wt(u,on,t,e,o)):t&&(f||(o.polygonStart(),f=!0),o.lineStart(),e(null,null,1,o),o.lineEnd()),f&&(o.polygonEnd(),f=!1),u=i=null},sphere:function(){o.polygonStart(),o.lineStart(),e(null,null,1,o),o.lineEnd(),o.polygonEnd()}};function h(n,e){t(n,e)&&o.point(n,e)}function d(t,n){l.point(t,n)}function v(){p.point=d,l.lineStart()}function g(){p.point=h,l.lineEnd()}function S(t,n){a.push([t,n]),s.point(t,n)}function E(){s.lineStart(),a=[]}function M(){S(a[0][0],a[0][1]),s.lineEnd();var t,n,e,r,l=s.clean(),p=c.result(),h=p.length;if(a.pop(),i.push(a),a=null,h)if(1&l){if((n=(e=p[0]).length-1)>0){for(f||(o.polygonStart(),f=!0),o.lineStart(),t=0;t<n;++t)o.point((r=e[t])[0],r[1]);o.lineEnd()}}else h>1&&2&l&&p.push(p.pop().concat(p.shift())),u.push(p.filter(rn))}return p}}function rn(t){return t.length>1}function on(t,n){return((t=t.x)[0]<0?t[1]-N-1e-6:N-t[1])-((n=n.x)[0]<0?n[1]-N-1e-6:N-n[1])}Jt.prototype={_radius:4.5,_circle:Tt(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:null==this._circle&&(this._circle=Tt(this._radius)),this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}return null}};var un=en((function(){return!0}),(function(t){var n,e=NaN,r=NaN,o=NaN;return{lineStart:function(){t.lineStart(),n=1},point:function(i,u){var a=i>0?q:-q,l=C(i-e);C(l-q)<1e-6?(t.point(e,r=(r+u)/2>0?N:-N),t.point(o,r),t.lineEnd(),t.lineStart(),t.point(a,r),t.point(i,r),n=0):o!==a&&l>=q&&(C(e-o)<1e-6&&(e-=1e-6*o),C(i-a)<1e-6&&(i-=1e-6*a),r=function(t,n,e,r){var o,i,u=G(t-e);return C(u)>1e-6?z((G(n)*(i=R(r))*G(e)-G(r)*(o=R(n))*G(t))/(o*i*u)):(n+r)/2}(e,r,i,u),t.point(o,r),t.lineEnd(),t.lineStart(),t.point(a,r),n=0),t.point(e=i,r=u),o=a},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}}),(function(t,n,e,r){var o;if(null==t)o=e*N,r.point(-q,o),r.point(0,o),r.point(q,o),r.point(q,0),r.point(q,-o),r.point(0,-o),r.point(-q,-o),r.point(-q,0),r.point(-q,o);else if(C(t[0]-n[0])>1e-6){var i=t[0]<n[0]?q:-q;o=e*i/2,r.point(-i,o),r.point(0,o),r.point(i,o)}else r.point(n[0],n[1])}),[-q,-N]);function an(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return(e=n.invert(e,r))&&t.invert(e[0],e[1])}),e}function ln(t,n){return[C(t)>q?t+Math.round(-t/j)*j:t,n]}function cn(t,n,e){return(t%=j)?n||e?an(fn(t),pn(n,e)):fn(t):n||e?pn(n,e):ln}function sn(t){return function(n,e){return[(n+=t)>q?n-j:n<-q?n+j:n,e]}}function fn(t){var n=sn(t);return n.invert=sn(-t),n}function pn(t,n){var e=R(t),r=G(t),o=R(n),i=G(n);function u(t,n){var u=R(n),a=R(t)*u,l=G(t)*u,c=G(n),s=c*e+a*r;return[F(l*o-s*i,a*e-c*r),J(s*o+l*i)]}return u.invert=function(t,n){var u=R(n),a=R(t)*u,l=G(t)*u,c=G(n),s=c*o-l*i;return[F(l*o+c*i,a*e+s*r),J(s*e-a*r)]},u}function hn(t,n,e,r,o,i){if(e){var u=R(n),a=G(n),l=r*e;null==o?(o=n+r*j,i=n-l/2):(o=dn(u,o),i=dn(u,i),(r>0?o<i:o>i)&&(o+=r*j));for(var c,s=o;r>0?s>i:s<i;s-=l)c=Yt([u,-a*R(s),-a*G(s)]),t.point(c[0],c[1])}}function dn(t,n){(n=Zt(n))[0]-=t,tn(n);var e,r=(e=-n[1])>1?0:e<-1?q:Math.acos(e);return((-n[2]<0?-r:r)+j-1e-6)%j}function vn(t){var n=R(t),e=6*L,r=n>0,o=C(n)>1e-6;function i(t,e){return R(t)*R(e)>n}function u(t,e,r){var o=[1,0,0],i=Dt(Zt(t),Zt(e)),u=Bt(i,i),a=i[0],l=u-a*a;if(!l)return!r&&t;var c=n*u/l,s=-n*a/l,f=Dt(o,i),p=Qt(o,c);Kt(p,Qt(i,s));var h=f,d=Bt(p,h),v=Bt(h,h),g=d*d-v*(Bt(p,p)-1);if(!(g<0)){var y=I(g),m=Qt(h,(-d-y)/v);if(Kt(m,p),m=Yt(m),!r)return m;var S,E=t[0],M=e[0],x=t[1],w=e[1];M<E&&(S=E,E=M,M=S);var _=M-E,b=C(_-q)<1e-6;if(!b&&w<x&&(S=x,x=w,w=S),b||_<1e-6?b?x+w>0^m[1]<(C(m[0]-E)<1e-6?x:w):x<=m[1]&&m[1]<=w:_>q^(E<=m[0]&&m[0]<=M)){var k=Qt(h,(-d+y)/v);return Kt(k,p),[m,Yt(k)]}}}function a(n,e){var o=r?t:q-t,i=0;return n<-o?i|=1:n>o&&(i|=2),e<-o?i|=4:e>o&&(i|=8),i}return en(i,(function(t){var n,e,l,c,s;return{lineStart:function(){c=l=!1,s=1},point:function(f,p){var h,d=[f,p],v=i(f,p),g=r?v?0:a(f,p):v?a(f+(f<0?q:-q),p):0;if(!n&&(c=l=v)&&t.lineStart(),v!==l&&(!(h=u(n,d))||Ut(n,h)||Ut(d,h))&&(d[2]=1),v!==l)s=0,v?(t.lineStart(),h=u(d,n),t.point(h[0],h[1])):(h=u(n,d),t.point(h[0],h[1],2),t.lineEnd()),n=h;else if(o&&n&&r^v){var y;g&e||!(y=u(d,n,!0))||(s=0,r?(t.lineStart(),t.point(y[0][0],y[0][1]),t.point(y[1][0],y[1][1]),t.lineEnd()):(t.point(y[1][0],y[1][1]),t.lineEnd(),t.lineStart(),t.point(y[0][0],y[0][1],3)))}!v||n&&Ut(n,d)||t.point(d[0],d[1]),n=d,l=v,e=g},lineEnd:function(){l&&t.lineEnd(),n=null},clean:function(){return s|(c&&l)<<1}}}),(function(n,r,o,i){hn(i,t,e,o,n,r)}),r?[0,-t]:[-q,t-q])}ln.invert=ln;function gn(t,n,e,r){function o(o,i){return t<=o&&o<=e&&n<=i&&i<=r}function i(o,i,a,c){var s=0,f=0;if(null==o||(s=u(o,a))!==(f=u(i,a))||l(o,i)<0^a>0)do{c.point(0===s||3===s?t:e,s>1?r:n)}while((s=(s+a+4)%4)!==f);else c.point(i[0],i[1])}function u(r,o){return C(r[0]-t)<1e-6?o>0?0:3:C(r[0]-e)<1e-6?o>0?2:1:C(r[1]-n)<1e-6?o>0?1:0:o>0?3:2}function a(t,n){return l(t.x,n.x)}function l(t,n){var e=u(t,1),r=u(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(u){var l,c,s,f,p,h,d,v,g,y,S,E=u,M=$t(),x={point:w,lineStart:function(){x.point=_,c&&c.push(s=[]);y=!0,g=!1,d=v=NaN},lineEnd:function(){l&&(_(f,p),h&&g&&M.rejoin(),l.push(M.result()));x.point=w,g&&E.lineEnd()},polygonStart:function(){E=M,l=[],c=[],S=!0},polygonEnd:function(){var n=function(){for(var n=0,e=0,o=c.length;e<o;++e)for(var i,u,a=c[e],l=1,s=a.length,f=a[0],p=f[0],h=f[1];l<s;++l)i=p,u=h,p=(f=a[l])[0],h=f[1],u<=r?h>r&&(p-i)*(r-u)>(h-u)*(t-i)&&++n:h<=r&&(p-i)*(r-u)<(h-u)*(t-i)&&--n;return n}(),e=S&&n,o=(l=m(l)).length;(e||o)&&(u.polygonStart(),e&&(u.lineStart(),i(null,null,1,u),u.lineEnd()),o&&Wt(l,a,n,i,u),u.polygonEnd());E=u,l=c=s=null}};function w(t,n){o(t,n)&&E.point(t,n)}function _(i,u){var a=o(i,u);if(c&&s.push([i,u]),y)f=i,p=u,h=a,y=!1,a&&(E.lineStart(),E.point(i,u));else if(a&&g)E.point(i,u);else{var l=[d=Math.max(-1e9,Math.min(1e9,d)),v=Math.max(-1e9,Math.min(1e9,v))],m=[i=Math.max(-1e9,Math.min(1e9,i)),u=Math.max(-1e9,Math.min(1e9,u))];!function(t,n,e,r,o,i){var u,a=t[0],l=t[1],c=0,s=1,f=n[0]-a,p=n[1]-l;if(u=e-a,f||!(u>0)){if(u/=f,f<0){if(u<c)return;u<s&&(s=u)}else if(f>0){if(u>s)return;u>c&&(c=u)}if(u=o-a,f||!(u<0)){if(u/=f,f<0){if(u>s)return;u>c&&(c=u)}else if(f>0){if(u<c)return;u<s&&(s=u)}if(u=r-l,p||!(u>0)){if(u/=p,p<0){if(u<c)return;u<s&&(s=u)}else if(p>0){if(u>s)return;u>c&&(c=u)}if(u=i-l,p||!(u<0)){if(u/=p,p<0){if(u>s)return;u>c&&(c=u)}else if(p>0){if(u<c)return;u<s&&(s=u)}return c>0&&(t[0]=a+c*f,t[1]=l+c*p),s<1&&(n[0]=a+s*f,n[1]=l+s*p),!0}}}}}(l,m,t,n,e,r)?a&&(E.lineStart(),E.point(i,u),S=!1):(g||(E.lineStart(),E.point(l[0],l[1])),E.point(m[0],m[1]),a||E.lineEnd(),S=!1)}d=i,v=u,g=a}return x}}function yn(t){return function(n){var e=new mn;for(var r in t)e[r]=t[r];return e.stream=n,e}}function mn(){}function Sn(t,n,e){var r=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),k(e,t.stream(lt)),n(lt.result()),null!=r&&t.clipExtent(r),t}function En(t,n,e){return Sn(t,(function(e){var r=n[1][0]-n[0][0],o=n[1][1]-n[0][1],i=Math.min(r/(e[1][0]-e[0][0]),o/(e[1][1]-e[0][1])),u=+n[0][0]+(r-i*(e[1][0]+e[0][0]))/2,a=+n[0][1]+(o-i*(e[1][1]+e[0][1]))/2;t.scale(150*i).translate([u,a])}),e)}mn.prototype={constructor:mn,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var Mn=R(30*L);function xn(t,n){return+n?function(t,n){function e(r,o,i,u,a,l,c,s,f,p,h,d,v,g){var y=c-r,m=s-o,S=y*y+m*m;if(S>4*n&&v--){var E=u+p,M=a+h,x=l+d,w=I(E*E+M*M+x*x),_=J(x/=w),b=C(C(x)-1)<1e-6||C(i-f)<1e-6?(i+f)/2:F(M,E),k=t(b,_),q=k[0],N=k[1],P=q-r,j=N-o,A=m*P-y*j;(A*A/S>n||C((y*P+m*j)/S-.5)>.3||u*p+a*h+l*d<Mn)&&(e(r,o,i,u,a,l,q,N,b,E/=w,M/=w,x,v,g),g.point(q,N),e(q,N,b,E,M,x,c,s,f,p,h,d,v,g))}}return function(n){var r,o,i,u,a,l,c,s,f,p,h,d,v={point:g,lineStart:y,lineEnd:S,polygonStart:function(){n.polygonStart(),v.lineStart=E},polygonEnd:function(){n.polygonEnd(),v.lineStart=y}};function g(e,r){e=t(e,r),n.point(e[0],e[1])}function y(){s=NaN,v.point=m,n.lineStart()}function m(r,o){var i=Zt([r,o]),u=t(r,o);e(s,f,c,p,h,d,s=u[0],f=u[1],c=r,p=i[0],h=i[1],d=i[2],16,n),n.point(s,f)}function S(){v.point=g,n.lineEnd()}function E(){y(),v.point=M,v.lineEnd=x}function M(t,n){m(r=t,n),o=s,i=f,u=p,a=h,l=d,v.point=m}function x(){e(s,f,c,p,h,d,o,i,r,u,a,l,16,n),v.lineEnd=S,S()}return v}}(t,n):function(t){return yn({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}(t)}var wn=yn({point:function(t,n){this.stream.point(t*L,n*L)}});function _n(t,n,e,r,o,i){if(!i)return function(t,n,e,r,o){function i(i,u){return[n+t*(i*=r),e-t*(u*=o)]}return i.invert=function(i,u){return[(i-n)/t*r,(e-u)/t*o]},i}(t,n,e,r,o);var u=R(i),a=G(i),l=u*t,c=a*t,s=u/t,f=a/t,p=(a*e-u*n)/t,h=(a*n+u*e)/t;function d(t,i){return[l*(t*=r)-c*(i*=o)+n,e-c*t-l*i]}return d.invert=function(t,n){return[r*(s*t-f*n+p),o*(h-f*t-s*n)]},d}function bn(t){var n,e,r,o,i,u,a,l,c,s,f=150,p=480,h=250,d=0,v=0,g=0,y=0,m=0,S=0,M=1,x=1,w=null,_=un,b=null,k=E,q=.5;function N(t){return l(t[0]*L,t[1]*L)}function P(t){return(t=l.invert(t[0],t[1]))&&[t[0]*A,t[1]*A]}function j(){var t=_n(f,0,0,M,x,S).apply(null,n(d,v)),r=_n(f,p-t[0],h-t[1],M,x,S);return e=cn(g,y,m),a=an(n,r),l=an(e,a),u=xn(a,q),C()}function C(){return c=s=null,N}return N.stream=function(t){return c&&s===t?c:c=wn(function(t){return yn({point:function(n,e){var r=t(n,e);return this.stream.point(r[0],r[1])}})}(e)(_(u(k(s=t)))))},N.preclip=function(t){return arguments.length?(_=t,w=void 0,C()):_},N.postclip=function(t){return arguments.length?(k=t,b=r=o=i=null,C()):k},N.clipAngle=function(t){return arguments.length?(_=+t?vn(w=t*L):(w=null,un),C()):w*A},N.clipExtent=function(t){return arguments.length?(k=null==t?(b=r=o=i=null,E):gn(b=+t[0][0],r=+t[0][1],o=+t[1][0],i=+t[1][1]),C()):null==b?null:[[b,r],[o,i]]},N.scale=function(t){return arguments.length?(f=+t,j()):f},N.translate=function(t){return arguments.length?(p=+t[0],h=+t[1],j()):[p,h]},N.center=function(t){return arguments.length?(d=t[0]%360*L,v=t[1]%360*L,j()):[d*A,v*A]},N.rotate=function(t){return arguments.length?(g=t[0]%360*L,y=t[1]%360*L,m=t.length>2?t[2]%360*L:0,j()):[g*A,y*A,m*A]},N.angle=function(t){return arguments.length?(S=t%360*L,j()):S*A},N.reflectX=function(t){return arguments.length?(M=t?-1:1,j()):M<0},N.reflectY=function(t){return arguments.length?(x=t?-1:1,j()):x<0},N.precision=function(t){return arguments.length?(u=xn(a,q=t*t),C()):I(q)},N.fitExtent=function(t,n){return En(N,t,n)},N.fitSize=function(t,n){return function(t,n,e){return En(t,[[0,0],n],e)}(N,t,n)},N.fitWidth=function(t,n){return function(t,n,e){return Sn(t,(function(e){var r=+n,o=r/(e[1][0]-e[0][0]),i=(r-o*(e[1][0]+e[0][0]))/2,u=-o*e[0][1];t.scale(150*o).translate([i,u])}),e)}(N,t,n)},N.fitHeight=function(t,n){return function(t,n,e){return Sn(t,(function(e){var r=+n,o=r/(e[1][1]-e[0][1]),i=-o*e[0][0],u=(r-o*(e[1][1]+e[0][1]))/2;t.scale(150*o).translate([i,u])}),e)}(N,t,n)},function(){return n=t.apply(this,arguments),N.invert=n.invert&&P,j()}}function kn(t,n){var e=G(t),r=(e+G(n))/2;if(C(r)<1e-6)return function(t){var n=R(t);function e(t,e){return[t*n,G(e)/n]}return e.invert=function(t,e){return[t/n,J(e*n)]},e}(t);var o=1+e*(2*r-e),i=I(o)/r;function u(t,n){var e=I(o-2*r*G(n))/r;return[e*G(t*=r),i-e*R(t)]}return u.invert=function(t,n){var e=i-n,u=F(t,C(e))*O(e);return e*r<0&&(u-=q*O(t)*O(e)),[u/r,J((o-(t*t+e*e)*r*r)/(2*r))]},u}function qn(){return(t=kn,n=0,e=q/3,r=bn(t),o=r(n,e),o.parallels=function(t){return arguments.length?r(n=t[0]*L,e=t[1]*L):[n*A,e*A]},o).scale(155.424).center([0,33.6442]);var t,n,e,r,o}function Nn(t){return t}function Pn(t){if(null==t)return Nn;var n,e,r=t.scale[0],o=t.scale[1],i=t.translate[0],u=t.translate[1];return function(t,a){a||(n=e=0);var l=2,c=t.length,s=new Array(c);for(s[0]=(n+=t[0])*r+i,s[1]=(e+=t[1])*o+u;l<c;)s[l]=t[l],++l;return s}}function jn(t,n){return"string"==typeof n&&(n=t.objects[n]),"GeometryCollection"===n.type?{type:"FeatureCollection",features:n.geometries.map((function(n){return An(t,n)}))}:An(t,n)}function An(t,n){var e=n.id,r=n.bbox,o=null==n.properties?{}:n.properties,i=Ln(t,n);return null==e&&null==r?{type:"Feature",properties:o,geometry:i}:null==r?{type:"Feature",id:e,properties:o,geometry:i}:{type:"Feature",id:e,bbox:r,properties:o,geometry:i}}function Ln(t,n){var e=Pn(t.transform),r=t.arcs;function o(t,n){n.length&&n.pop();for(var o=r[t<0?~t:t],i=0,u=o.length;i<u;++i)n.push(e(o[i],i));t<0&&function(t,n){for(var e,r=t.length,o=r-n;o<--r;)e=t[o],t[o++]=t[r],t[r]=e}(n,u)}function i(t){return e(t)}function u(t){for(var n=[],e=0,r=t.length;e<r;++e)o(t[e],n);return n.length<2&&n.push(n[0]),n}function a(t){for(var n=u(t);n.length<4;)n.push(n[0]);return n}function l(t){return t.map(a)}return function t(n){var e,r=n.type;switch(r){case"GeometryCollection":return{type:r,geometries:n.geometries.map(t)};case"Point":e=i(n.coordinates);break;case"MultiPoint":e=n.coordinates.map(i);break;case"LineString":e=u(n.arcs);break;case"MultiLineString":e=n.arcs.map(u);break;case"Polygon":e=l(n.arcs);break;case"MultiPolygon":e=n.arcs.map(l);break;default:return null}return{type:r,coordinates:e}}(n)}function Cn(){var t=8,n=qn().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7]),e=function(t){return{}},r=function(t){return 1};function o(o,l){o=a(o);for(var s,f,p,h=c(o.transform),d=o.arcs.length,v=0,g=new Array(d);v<d;){for(s=0,f=0,w=o.arcs[v].length,_=0,p=new Array(w);_<w;)o.arcs[v][_][0]=s+=o.arcs[v][_][0],o.arcs[v][_][1]=f+=o.arcs[v][_][1],p[_]=null===n?h(o.arcs[v][_]):n(h(o.arcs[v][_])),_++;g[v++]=p}var y=Ht().projection(null),m=function(t,n){function e(n,e){e.length&&e.pop();for(var r=t[n<0?~n:n],o=0,i=r.length;o<i;++o)e.push(r[o]);n<0&&function(t,n){var e,r=t.length,o=r-n;for(;o<--r;)e=t[o],t[o++]=t[r],t[r]=e}(e,i)}function r(t){for(var n=[],r=0,o=t.length;r<o;++r)e(t[r],n);return n}function o(t){return t.map(r)}function i(t){return(t=Object.create(t)).coordinates=u[t.type](t.arcs),t}var u={LineString:r,MultiLineString:o,Polygon:o,MultiPolygon:function(t){return t.map(o)}};return"GeometryCollection"===n.type?((n=Object.create(n)).geometries=n.geometries.map(i),n):i(n)}(g,{type:"GeometryCollection",geometries:l}).geometries.map((function(t){return{type:"Feature",id:t.id,properties:e.call(null,t,o),geometry:t}})),E=m.map(r),M=S(E);if(t<=0)return m;for(var x=0;x++<t;){var w,_,b,k,q,N,P,j,A,L,C,z,F,R,G=m.map(y.area),O=S(G),I=0,J=0,T=m.map((function(t,n){var e=Math.abs(G[n]),r=+E[n],o=O*r/M,i=Math.sqrt(e/Math.PI),u=Math.sqrt(o/Math.PI)-i,a=Math.max(e,o)/Math.min(e,o);return I+=a,J++,{id:t.id,area:e,centroid:y.centroid(t),value:r,desired:o,radius:i,mass:u,sizeError:a}})),H=I/J,$=1/(1+H);for(d=g.length,v=0;v<d;){for(w=g[v].length,_=0;_<w;){for(b=[0,0],k=T.length,q=0;q<k;)N=T[q].centroid,P=T[q].mass,A=(j=T[q].radius)*j,z=(L=g[v][_][0]-N[0])*L+(C=g[v][_][1]-N[1])*C,R=(F=Math.sqrt(z))>j?P*j/F:P*(z/A)*(4-3*F/j),b[0]+=R*i(C,L),b[1]+=R*u(C,L),q++;g[v][_][0]+=b[0]*$,g[v][_][1]+=b[1]*$,_++}v++}if(H<=1)break}return{features:m,arcs:g}}function i(t,n){if(0===n)return 0;var e=t/n;return n>0?1/Math.sqrt(1+e*e):-1/Math.sqrt(1+e*e)}function u(t,n){if(0===n)return 1;var e=t/n;return n>0?e/Math.sqrt(1+e*e):-e/Math.sqrt(1+e*e)}function a(t){return t instanceof Array?t.map(a):"string"==typeof t||"number"==typeof t?t:function(t){var n={};for(var e in t)n[e]=a(t[e]);return n}(t)}function l(t){return function(){return t}}o.path=Ht().projection(null),o.iterations=function(n){return arguments.length?(t=n,o):t},o.value=function(t){return arguments.length?(r="function"==typeof t?t:l(t),o):r},o.projection=function(t){return arguments.length?(n=t,o):n},o.feature=function(t,n){return{type:"Feature",id:n.id,properties:e.call(null,n,t),geometry:{type:n.type,coordinates:jn(t,n).geometry.coordinates}}},o.features=function(t,n){return n.map((function(n){return o.feature(t,n)}))},o.properties=function(t){return arguments.length?(e="function"==typeof t?t:l(t),o):e};var c=o.transformer=function(t){var n=t.scale[0],e=t.scale[1],r=t.translate[0],o=t.translate[1];function i(t){return[t[0]*n+r,t[1]*e+o]}return i.invert=function(t){return[(t[0]-r)/n,(t[1]-o)/e]},i};return o}function zn(t,n,e){switch(t){case l:return n(e);case c:return e}}function Fn(t,n,e){switch(t){case l:return n.hexagon();case c:return function(t){return n=t.x/2,r=t.y/2,"M"+n+","+r+"h"+((o=e)-(i=0))+"a"+i+","+i+" 0 0 1 "+i+","+i+"v"+(e-2*i)+"a"+i+","+i+" 0 0 1 "+-i+","+i+"h"+(i-o)+"z";var n,r,o,i}}}function Rn(t){switch(t){case l:return function(t){return"translate("+t.x+", "+t.y+")"};case c:return function(t){return"translate("+t.x/2+", "+t.y/2+")"}}}function Gn(t){d3.selectAll("."+this.getAttribute("class")).transition().duration(10).style("fill-opacity",.9)}function On(t){d3.selectAll("."+this.getAttribute("class")).transition().duration(10).style("fill-opacity",1)}function In(t){switch(document.querySelector("#cell-option").value){case a:d3.select(this).style("fill","#fff").style("stroke","#e0e0e0").style("stroke-width",.5).lower();break;case u:let t=document.querySelector("#color-option");d3.select(this).style("stroke-width",.5).style("fill",t.value).style("stroke","#000").on("mouseover",Gn).on("mouseout",On).call(d3.drag().on("start",Tn).on("drag",Hn).on("end",$n)).raise()}}function Jn(t){switch(document.querySelector("#cell-option").value){case a:d3.select(this).remove();break;case u:let t=document.querySelector("#color-option");d3.select(this).style("stroke-width",.5).style("fill",t.value).style("stroke","#000").on("mouseover",Gn).on("mouseout",On).call(d3.drag().on("start",Tn).on("drag",Hn).on("end",$n)).raise()}}function Tn(t,n){n.fixed=!1,d3.select(this).raise().style("stroke-width",1).style("stroke","#000")}function Hn(t,n){let e=document.querySelector("#cell-shape-option").value,r=document.querySelector("input#radius").value;var o=function(t,n,e,r){switch(r){case l:var o=Math.sqrt(3)/2,i=2*e,u=i*o;return n%(f=3*e)<e?(s=n-n%f,a=t-t%u):(s=n+(i-e*o/2)-n%f,a=t+e*o-t%u),[a,s];case c:var a,s,f;return[a=t-t%(u=2*e),s=n-n%(f=2*e)]}}(t.x,t.y,r,e);d3.select(this).attr("x",n.x=o[0]).attr("y",n.y=o[1]).attr("transform",Rn(e))}function $n(t,n){n.fixed=!0,d3.select(this).style("stroke-width",.5).style("stroke","#000")}var Un={type:"FeatureCollection",features:[]};function Vn(u,a,s,f,p){let y=function(t,n){switch(n){case l:return 1.5*t;case c:return 2*t}}(s,f),m=o/y,S=i/y,E=d3.range(S*m).map((function(t,n){return{x:Math.floor(n%m)*y,y:Math.floor(n/m)*y,datapoint:0}}));var M=function(t){var n={};for(var e in t)n[t[e].code]=t[e];return n}(a),x=Cn().projection(null).properties((function(t){return t.properties})).value((function(t){return+t.properties.count}));x.features(u,u.objects.tiles.geometries),x.value((function(t){return+M[t.properties.id][p]}));var w=x(u,u.objects.tiles.geometries).features;!function(t){for(let n=0;n<t.length;n++)"MultiPolygon"==t[n].geometry.type?(Un.features[n]=t[n],Un.features[n].geometry.type="MultiPolygon"):(Un.features[n]=t[n],Un.features[n].geometry.type="Polygon")}(w);let _=function(){var t,n,e,r=0,o=0,i=1,u=1,a=v,l=g;function c(t){var r,o={},i=[],u=t.length;for(r=0;r<u;++r)if(!isNaN(s=+a.call(null,c=t[r],r,t))&&!isNaN(f=+l.call(null,c,r,t))){var c,s,f,p=Math.round(f/=e),h=Math.round(s=s/n-(1&p)/2),d=f-p;if(3*Math.abs(d)>1){var v=s-h,g=h+(s<h?-1:1)/2,y=p+(f<p?-1:1),m=s-g,S=f-y;v*v+d*d>m*m+S*S&&(h=g+(1&p?1:-1)/2,p=y)}var E=h+"-"+p,M=o[E];M?M.push(c):(i.push(M=o[E]=[c]),M.x=(h+(1&p)/2)*n,M.y=p*e)}return i}function s(t){var n=0,e=0;return d.map((function(r){var o=Math.sin(r)*t,i=-Math.cos(r)*t,u=o-n,a=i-e;return n=o,e=i,[u,a]}))}return c.hexagon=function(n){return"m"+s(null==n?t:+n).join("l")+"z"},c.centers=function(){for(var a=[],l=Math.round(o/e),c=Math.round(r/n),s=l*e;s<u+t;s+=e,++l)for(var f=c*n+(1&l)*n/2;f<i+n/2;f+=n)a.push([f,s]);return a},c.mesh=function(){var n=s(t).slice(0,4).join("l");return c.centers().map((function(t){return"M"+t+"m"+n})).join("")},c.x=function(t){return arguments.length?(a=t,c):a},c.y=function(t){return arguments.length?(l=t,c):l},c.radius=function(r){return arguments.length?(n=2*(t=+r)*Math.sin(h),e=1.5*t,c):t},c.size=function(t){return arguments.length?(r=o=0,i=+t[0],u=+t[1],c):[i-r,u-o]},c.extent=function(t){return arguments.length?(r=+t[0][0],o=+t[0][1],i=+t[1][0],u=+t[1][1],c):[[r,o],[i,u]]},c.radius(1)}().radius(s).x((function(t){return t.x})).y((function(t){return t.y}));d3.select("#container").selectAll("*").remove();const b=d3.select("#container").append("svg").attr("width",o+r+n).attr("height",i+n+e).append("g").attr("transform",`translate(${r} ${n})`);b.append("g").attr("id","hexes").selectAll(".hex").data(zn(f,_,E)).enter().append("path").attr("class","hex").attr("transform",Rn(f)).attr("d",Fn(f,_,y)).style("fill","#fff").style("stroke","#e0e0e0").style("stroke-width",.5).on("click",In);let k=function(t){let n=[];for(let r=0;r<t.length;r++){var e=[];if("MultiPolygon"==t[r].geometry.type)for(let n=0;n<t[r].geometry.coordinates.length;n++)e[n]=t[r].geometry.coordinates[n][0];else"Polygon"==t[r].geometry.type&&(e[0]=t[r].geometry.coordinates[0]);n[r]={coordinates:e,properties:t[r].properties}}return n}(w);for(let n=0;n<k.length;n++)for(let e=0;e<k[n].coordinates.length;e++){var q=k[n].coordinates[e];let r=E.reduce((function(t,n){return d3.polygonContains(q,[n.x,n.y])&&t.push(n),t}),[]);b.append("g").attr("id","hexes").selectAll(".hex").data(zn(f,_,r)).enter().append("path").attr("class","hex"+k[n].properties.id).attr("transform",Rn(f)).attr("x",(function(t){return t.x})).attr("y",(function(t){return t.y})).attr("d",Fn(f,_,y)).style("fill",t[n%19]).style("stroke","#000").style("stroke-width",.5).on("click",Jn).on("mouseover",Gn).on("mouseout",On).call(d3.drag().on("start",Tn).on("drag",Hn).on("end",$n))}}document.querySelector("#loader").classList.add("hide");let Wn=document.querySelector("input#radius"),Xn=document.querySelector("input#select-radius"),Yn=document.querySelector("#download"),Zn=document.querySelector("#cell-shape"),Bn=document.querySelector("#cell-shape-option"),Dn=document.querySelector("input#year"),Kn=document.querySelector("input#select-year");function Qn(){let t=Wn.value,n=Bn.value,e=Dn.value;const r=d3.json("https://raw.githubusercontent.com/owid/cartograms/feature/square-grid/data/base/2018/v2/topo.json"),o=d3.csv("https://raw.githubusercontent.com/owid/cartograms/feature/square-grid/data/population/unpd-flat.csv");Promise.all([r,o]).then((r=>{let[o,i]=r;Vn(o,i,t,n,e),document.querySelector("#loader").classList.add("hide")}))}Xn.addEventListener("click",(()=>{Wn=document.querySelector("input#radius"),document.querySelector("#loader").classList.remove("hide"),Qn()})),Kn.addEventListener("click",(()=>{Dn=document.querySelector("input#year"),document.querySelector("#loader").classList.remove("hide"),Qn()})),Yn.addEventListener("click",(()=>{p(document.querySelector("#download-option").value,Dn.value)})),Zn.addEventListener("click",(()=>{Bn=document.querySelector("#cell-shape-option"),document.querySelector("#loader").classList.remove("hide"),Qn()})),Qn();
//# sourceMappingURL=index.979c05f2.js.map
