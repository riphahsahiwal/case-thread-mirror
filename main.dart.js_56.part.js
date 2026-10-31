((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
czT(d){var x,w,v,u=d.h(0,"permissions"),t=A.C(y.w,y.e)
if(y.y.b(u))for(x=u.gek(),x=x.gV(x);x.q();){w=x.gI()
t.l(0,w.a,J.p(w.b,!0))}x=A.U(d.h(0,"id"))
A.U(d.h(0,"case_type"))
w=A.U(d.h(0,"display_name"))
v=A.hj(d.h(0,"is_lead_tier"))
return new B.fF(x,w,v===!0,t)},
v5:function v5(d){this.a=d},
fF:function fF(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
NS:function NS(d){this.a=d},
bg7:function bg7(){},
bg8:function bg8(){},
bg9:function bg9(){},
bZ1:function bZ1(){},
amT:function amT(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
B.v5.prototype={
gbE(){return this.a}}
B.fF.prototype={
LS(d){var x=this.e.h(0,d.c)
return x===!0},
gbE(){return this.a}}
B.NS.prototype={
O4(){var x=0,w=A.m(y.u),v,u=this,t,s
var $async$O4=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
x=3
return A.e(u.a.az("case_types").bn("id, display_name, description, is_active").aY("is_active",!0).o0("display_name"),$async$O4)
case 3:t=s.bX(e,new B.bg7(),y.j)
t=A.K(t,t.$ti.i("aj.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$O4,w)},
OG(d){return this.aCS(d)},
aCS(d){var x=0,w=A.m(y.x),v,u=this,t,s,r
var $async$OG=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(u.a.az("roles").bn("id, case_type, display_name, is_lead_tier, permissions").aY("case_type",d).o0("display_name"),$async$OG)
case 3:s=f
r=J.aw(s)
if(r.gW(s))throw A.n(new B.amT('Case type "'+d+'" is not available.'))
r=r.dY(s,new B.bg8(),y.D)
t=A.K(r,r.$ti.i("aj.E"))
C.i.ed(t,new B.bg9())
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$OG,w)},
$iaHS:1}
B.amT.prototype={}
var z=a.updateTypes(["v5(@)","fF(ac<f,@>)","v(fF,fF)","NS(al)"])
B.bg7.prototype={
$1(d){var x=A.aM(d,y.w,y.b),w=A.U(x.h(0,"id"))
A.U(x.h(0,"display_name"))
A.a8(x.h(0,"description"))
A.hj(x.h(0,"is_active"))
return new B.v5(w)},
$S:z+0}
B.bg8.prototype={
$1(d){return B.czT(A.aM(d,y.w,y.b))},
$S:z+1}
B.bg9.prototype={
$2(d,e){var x,w,v=d.a
v=v==="other"||C.n.bh(v,"other_")?1:0
x=e.a
w=C.f.bo(v,x==="other"||C.n.bh(x,"other_")?1:0)
if(w!==0)return w
return C.n.bo(d.c,e.c)},
$S:z+2}
B.bZ1.prototype={
$1(d){return new B.NS(d.T($.dB(),y.k))},
$S:z+3};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.E,[B.v5,B.fF,B.NS])
x(A.ci,[B.bg7,B.bg8,B.bZ1])
w(B.bg9,A.dn)
w(B.amT,A.e5)})()
A.cD(b.typeUniverse,JSON.parse('{"NS":{"aHS":[]},"amT":{"aI":[]}}'))
var y={j:A.J("v5"),u:A.J("w<v5>"),x:A.J("w<fF>"),y:A.J("ac<f,@>"),D:A.J("fF"),w:A.J("f"),k:A.J("h4"),e:A.J("B"),b:A.J("@")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cV1","cal",()=>A.eo(new B.bZ1(),A.J("aHS")))})()};
(a=>{a["VrIc7gzaam4AmChIYXD05QKqRDo="]=a.current})($__dart_deferred_initializers__);