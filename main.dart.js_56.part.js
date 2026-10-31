((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cyH(d){var x,w,v,u=d.h(0,"permissions"),t=A.C(y.w,y.e)
if(y.y.b(u))for(x=u.gev(),x=x.gU(x);x.q();){w=x.gI()
t.l(0,w.a,J.o(w.b,!0))}x=A.U(d.h(0,"id"))
A.U(d.h(0,"case_type"))
w=A.U(d.h(0,"display_name"))
v=A.hB(d.h(0,"is_lead_tier"))
return new B.fE(x,w,v===!0,t)},
uZ:function uZ(d){this.a=d},
fE:function fE(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
NE:function NE(d){this.a=d},
bf2:function bf2(){},
bf3:function bf3(){},
bf4:function bf4(){},
bXZ:function bXZ(){},
amy:function amy(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
B.uZ.prototype={
gbE(){return this.a}}
B.fE.prototype={
LR(d){var x=this.e.h(0,d.c)
return x===!0},
gbE(){return this.a}}
B.NE.prototype={
O3(){var x=0,w=A.m(y.u),v,u=this,t,s
var $async$O3=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
x=3
return A.e(u.a.aA("case_types").bo("id, display_name, description, is_active").b0("is_active",!0).pf("display_name"),$async$O3)
case 3:t=s.bW(e,new B.bf2(),y.j)
t=A.K(t,t.$ti.i("ak.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$O3,w)},
OF(d){return this.aCJ(d)},
aCJ(d){var x=0,w=A.m(y.x),v,u=this,t,s,r
var $async$OF=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(u.a.aA("roles").bo("id, case_type, display_name, is_lead_tier, permissions").b0("case_type",d).pf("display_name"),$async$OF)
case 3:s=f
r=J.aw(s)
if(r.gW(s))throw A.n(new B.amy('Case type "'+d+'" is not available.'))
r=r.dW(s,new B.bf3(),y.D)
t=A.K(r,r.$ti.i("ak.E"))
C.i.es(t,new B.bf4())
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$OF,w)},
$iaHl:1}
B.amy.prototype={}
var z=a.updateTypes(["uZ(@)","fE(ab<f,@>)","w(fE,fE)","NE(am)"])
B.bf2.prototype={
$1(d){var x=A.aM(d,y.w,y.b),w=A.U(x.h(0,"id"))
A.U(x.h(0,"display_name"))
A.a8(x.h(0,"description"))
A.hB(x.h(0,"is_active"))
return new B.uZ(w)},
$S:z+0}
B.bf3.prototype={
$1(d){return B.cyH(A.aM(d,y.w,y.b))},
$S:z+1}
B.bf4.prototype={
$2(d,e){var x,w,v=d.a
v=v==="other"||C.o.bh(v,"other_")?1:0
x=e.a
w=C.f.bp(v,x==="other"||C.o.bh(x,"other_")?1:0)
if(w!==0)return w
return C.o.bp(d.c,e.c)},
$S:z+2}
B.bXZ.prototype={
$1(d){return new B.NE(d.T($.dD(),y.k))},
$S:z+3};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.D,[B.uZ,B.fE,B.NE])
x(A.cf,[B.bf2,B.bf3,B.bXZ])
w(B.bf4,A.dk)
w(B.amy,A.e4)})()
A.cC(b.typeUniverse,JSON.parse('{"NE":{"aHl":[]},"amy":{"aI":[]}}'))
var y={j:A.J("uZ"),u:A.J("v<uZ>"),x:A.J("v<fE>"),y:A.J("ab<f,@>"),D:A.J("fE"),w:A.J("f"),k:A.J("h5"),e:A.J("B"),b:A.J("@")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cTN","c9c",()=>A.eo(new B.bXZ(),A.J("aHl")))})()};
(a=>{a["YVeQRRJzHAWhrhNk0GBkSB/Mvfc="]=a.current})($__dart_deferred_initializers__);