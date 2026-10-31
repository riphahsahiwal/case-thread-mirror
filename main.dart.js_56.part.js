((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cAP(d){var x,w,v,u=d.h(0,"permissions"),t=A.D(y.w,y.e)
if(y.y.b(u))for(x=u.gek(),x=x.gV(x);x.q();){w=x.gI()
t.l(0,w.a,J.p(w.b,!0))}x=A.U(d.h(0,"id"))
A.U(d.h(0,"case_type"))
w=A.U(d.h(0,"display_name"))
v=A.hj(d.h(0,"is_lead_tier"))
return new B.fF(x,w,v===!0,t)},
va:function va(d){this.a=d},
fF:function fF(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
O_:function O_(d){this.a=d},
bgD:function bgD(){},
bgE:function bgE(){},
bgF:function bgF(){},
bZJ:function bZJ(){},
anc:function anc(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
B.va.prototype={
gbE(){return this.a}}
B.fF.prototype={
LY(d){var x=this.e.h(0,d.c)
return x===!0},
gbE(){return this.a}}
B.O_.prototype={
O6(){var x=0,w=A.m(y.u),v,u=this,t,s
var $async$O6=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
x=3
return A.e(u.a.az("case_types").bn("id, display_name, description, is_active").aY("is_active",!0).o2("display_name"),$async$O6)
case 3:t=s.bX(e,new B.bgD(),y.j)
t=A.K(t,t.$ti.i("ai.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$O6,w)},
OI(d){return this.aD8(d)},
aD8(d){var x=0,w=A.m(y.x),v,u=this,t,s,r
var $async$OI=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(u.a.az("roles").bn("id, case_type, display_name, is_lead_tier, permissions").aY("case_type",d).o2("display_name"),$async$OI)
case 3:s=f
r=J.av(s)
if(r.gW(s))throw A.n(new B.anc('Case type "'+d+'" is not available.'))
r=r.dY(s,new B.bgE(),y.D)
t=A.K(r,r.$ti.i("ai.E"))
C.h.ed(t,new B.bgF())
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$OI,w)},
$iaIe:1}
B.anc.prototype={}
var z=a.updateTypes(["va(@)","fF(ad<f,@>)","w(fF,fF)","O_(al)"])
B.bgD.prototype={
$1(d){var x=A.aM(d,y.w,y.b),w=A.U(x.h(0,"id"))
A.U(x.h(0,"display_name"))
A.a9(x.h(0,"description"))
A.hj(x.h(0,"is_active"))
return new B.va(w)},
$S:z+0}
B.bgE.prototype={
$1(d){return B.cAP(A.aM(d,y.w,y.b))},
$S:z+1}
B.bgF.prototype={
$2(d,e){var x,w,v=d.a
v=v==="other"||C.n.bh(v,"other_")?1:0
x=e.a
w=C.f.bo(v,x==="other"||C.n.bh(x,"other_")?1:0)
if(w!==0)return w
return C.n.bo(d.c,e.c)},
$S:z+2}
B.bZJ.prototype={
$1(d){return new B.O_(d.S($.dB(),y.k))},
$S:z+3};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.E,[B.va,B.fF,B.O_])
x(A.cg,[B.bgD,B.bgE,B.bZJ])
w(B.bgF,A.dj)
w(B.anc,A.e6)})()
A.cC(b.typeUniverse,JSON.parse('{"O_":{"aIe":[]},"anc":{"aI":[]}}'))
var y={j:A.J("va"),u:A.J("v<va>"),x:A.J("v<fF>"),y:A.J("ad<f,@>"),D:A.J("fF"),w:A.J("f"),k:A.J("h6"),e:A.J("B"),b:A.J("@")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cW7","cb8",()=>A.er(new B.bZJ(),A.J("aIe")))})()};
(a=>{a["FBOW5V43tkz4Fp3+0cbKtnwdTCg="]=a.current})($__dart_deferred_initializers__);