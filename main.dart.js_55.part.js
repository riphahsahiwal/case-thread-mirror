((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cx_(d){var x,w,v,u=d.h(0,"permissions"),t=A.D(y.w,y.e)
if(y.y.b(u))for(x=u.geC(),x=x.gV(x);x.q();){w=x.gI()
t.m(0,w.a,J.p(w.b,!0))}x=A.T(d.h(0,"id"))
A.T(d.h(0,"case_type"))
w=A.T(d.h(0,"display_name"))
v=A.hu(d.h(0,"is_lead_tier"))
return new B.fw(x,w,v===!0,t)},
uG:function uG(d){this.a=d},
fw:function fw(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
N2:function N2(d){this.a=d},
bee:function bee(){},
bef:function bef(){},
beg:function beg(){},
bWA:function bWA(){},
alJ:function alJ(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[71],B)
B.uG.prototype={
gbG(){return this.a}}
B.fw.prototype={
Lx(d){var x=this.e.h(0,d.c)
return x===!0},
gbG(){return this.a}}
B.N2.prototype={
NJ(){var x=0,w=A.m(y.u),v,u=this,t,s
var $async$NJ=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
x=3
return A.e(u.a.aA("case_types").bn("id, display_name, description, is_active").b0("is_active",!0).p6("display_name"),$async$NJ)
case 3:t=s.bM(e,new B.bee(),y.j)
t=A.J(t,t.$ti.i("aj.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$NJ,w)},
Ok(d){return this.aC7(d)},
aC7(d){var x=0,w=A.m(y.x),v,u=this,t,s,r
var $async$Ok=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(u.a.aA("roles").bn("id, case_type, display_name, is_lead_tier, permissions").b0("case_type",d).p6("display_name"),$async$Ok)
case 3:s=f
r=J.aw(s)
if(r.gW(s))throw A.n(new B.alJ('Case type "'+d+'" is not available.'))
r=r.dY(s,new B.bef(),y.D)
t=A.J(r,r.$ti.i("aj.E"))
C.i.ez(t,new B.beg())
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Ok,w)},
$iaGB:1}
B.alJ.prototype={}
var z=a.updateTypes(["uG(@)","fw(ac<h,@>)","w(fw,fw)","N2(ah)"])
B.bee.prototype={
$1(d){var x=A.aP(d,y.w,y.b),w=A.T(x.h(0,"id"))
A.T(x.h(0,"display_name"))
A.a7(x.h(0,"description"))
A.hu(x.h(0,"is_active"))
return new B.uG(w)},
$S:z+0}
B.bef.prototype={
$1(d){return B.cx_(A.aP(d,y.w,y.b))},
$S:z+1}
B.beg.prototype={
$2(d,e){var x,w,v=d.a
v=v==="other"||C.o.bj(v,"other_")?1:0
x=e.a
w=C.f.bp(v,x==="other"||C.o.bj(x,"other_")?1:0)
if(w!==0)return w
return C.o.bp(d.c,e.c)},
$S:z+2}
B.bWA.prototype={
$1(d){return new B.N2(d.S($.du(),y.k))},
$S:z+3};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.C,[B.uG,B.fw,B.N2])
x(A.ca,[B.bee,B.bef,B.bWA])
w(B.beg,A.dj)
w(B.alJ,A.dZ)})()
A.cD(b.typeUniverse,JSON.parse('{"N2":{"aGB":[]},"alJ":{"aK":[]}}'))
var y={j:A.I("uG"),u:A.I("v<uG>"),x:A.I("v<fw>"),y:A.I("ac<h,@>"),D:A.I("fw"),w:A.I("h"),k:A.I("fY"),e:A.I("B"),b:A.I("@")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cRQ","c7B",()=>A.eg(new B.bWA(),A.I("aGB")))})()};
(a=>{a["la1F8/E78a48hgCRVjq58LBl1W4="]=a.current})($__dart_deferred_initializers__);