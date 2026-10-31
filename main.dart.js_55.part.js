((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
czL(d){var x,w,v,u=d.h(0,"permissions"),t=A.C(y.w,y.e)
if(y.y.b(u))for(x=u.gek(),x=x.gV(x);x.q();){w=x.gI()
t.l(0,w.a,J.p(w.b,!0))}x=A.U(d.h(0,"id"))
A.U(d.h(0,"case_type"))
w=A.U(d.h(0,"display_name"))
v=A.hk(d.h(0,"is_lead_tier"))
return new B.fF(x,w,v===!0,t)},
v4:function v4(d){this.a=d},
fF:function fF(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
NR:function NR(d){this.a=d},
bfZ:function bfZ(){},
bg_:function bg_(){},
bg0:function bg0(){},
bYU:function bYU(){},
amR:function amR(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
B.v4.prototype={
gbE(){return this.a}}
B.fF.prototype={
LT(d){var x=this.e.h(0,d.c)
return x===!0},
gbE(){return this.a}}
B.NR.prototype={
O5(){var x=0,w=A.m(y.u),v,u=this,t,s
var $async$O5=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
x=3
return A.e(u.a.az("case_types").bn("id, display_name, description, is_active").aY("is_active",!0).o0("display_name"),$async$O5)
case 3:t=s.bX(e,new B.bfZ(),y.j)
t=A.K(t,t.$ti.i("aj.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$O5,w)},
OH(d){return this.aCM(d)},
aCM(d){var x=0,w=A.m(y.x),v,u=this,t,s,r
var $async$OH=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(u.a.az("roles").bn("id, case_type, display_name, is_lead_tier, permissions").aY("case_type",d).o0("display_name"),$async$OH)
case 3:s=f
r=J.aw(s)
if(r.gW(s))throw A.n(new B.amR('Case type "'+d+'" is not available.'))
r=r.dX(s,new B.bg_(),y.D)
t=A.K(r,r.$ti.i("aj.E"))
C.i.ed(t,new B.bg0())
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$OH,w)},
$iaHR:1}
B.amR.prototype={}
var z=a.updateTypes(["v4(@)","fF(ac<f,@>)","v(fF,fF)","NR(al)"])
B.bfZ.prototype={
$1(d){var x=A.aM(d,y.w,y.b),w=A.U(x.h(0,"id"))
A.U(x.h(0,"display_name"))
A.a8(x.h(0,"description"))
A.hk(x.h(0,"is_active"))
return new B.v4(w)},
$S:z+0}
B.bg_.prototype={
$1(d){return B.czL(A.aM(d,y.w,y.b))},
$S:z+1}
B.bg0.prototype={
$2(d,e){var x,w,v=d.a
v=v==="other"||C.o.bh(v,"other_")?1:0
x=e.a
w=C.f.bo(v,x==="other"||C.o.bh(x,"other_")?1:0)
if(w!==0)return w
return C.o.bo(d.c,e.c)},
$S:z+2}
B.bYU.prototype={
$1(d){return new B.NR(d.S($.dB(),y.k))},
$S:z+3};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.D,[B.v4,B.fF,B.NR])
x(A.cg,[B.bfZ,B.bg_,B.bYU])
w(B.bg0,A.dm)
w(B.amR,A.e6)})()
A.cD(b.typeUniverse,JSON.parse('{"NR":{"aHR":[]},"amR":{"aI":[]}}'))
var y={j:A.J("v4"),u:A.J("w<v4>"),x:A.J("w<fF>"),y:A.J("ac<f,@>"),D:A.J("fF"),w:A.J("f"),k:A.J("h5"),e:A.J("B"),b:A.J("@")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cUS","cac",()=>A.ep(new B.bYU(),A.J("aHR")))})()};
(a=>{a["MKcHdPcEqQ9qwHOVoCsjytiirsg="]=a.current})($__dart_deferred_initializers__);