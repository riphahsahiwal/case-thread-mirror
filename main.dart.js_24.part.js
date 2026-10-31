((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cvw(d){var x,w,v,u=d.h(0,"permissions"),t=A.D(y.w,y.e)
if(y.y.b(u))for(x=u.geq(),x=x.gT(x);x.q();){w=x.gK()
t.l(0,w.a,J.o(w.b,!0))}x=A.Z(d.h(0,"id"))
A.Z(d.h(0,"case_type"))
w=A.Z(d.h(0,"display_name"))
v=A.hp(d.h(0,"is_lead_tier"))
return new B.fv(x,w,v===!0,t)},
uK:function uK(d){this.a=d},
fv:function fv(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
N9:function N9(d){this.a=d},
bdZ:function bdZ(){},
be_:function be_(){},
be0:function be0(){},
bVs:function bVs(){},
alW:function alW(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[65],B)
B.uK.prototype={
gbS(){return this.a}}
B.fv.prototype={
Lz(d){var x=this.e.h(0,d.c)
return x===!0},
gbS(){return this.a}}
B.N9.prototype={
ND(){var x=0,w=A.n(y.u),v,u=this,t,s
var $async$ND=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=J
x=3
return A.d(u.a.aM("case_types").bz("id, display_name, description, is_active").b7("is_active",!0).rR("display_name"),$async$ND)
case 3:t=s.c7(e,new B.bdZ(),y.j)
t=A.J(t,t.$ti.i("al.E"))
v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$ND,w)},
O8(d){return this.aBJ(d)},
aBJ(d){var x=0,w=A.n(y.x),v,u=this,t,s,r
var $async$O8=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(u.a.aM("roles").bz("id, case_type, display_name, is_lead_tier, permissions").b7("case_type",d).rR("display_name"),$async$O8)
case 3:s=f
r=J.av(s)
if(r.gU(s))throw A.i(new B.alW('Case type "'+d+'" is not available.'))
r=r.dS(s,new B.be_(),y.D)
t=A.J(r,r.$ti.i("al.E"))
C.i.e7(t,new B.be0())
v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$O8,w)},
$iaGq:1}
B.alW.prototype={}
var z=a.updateTypes(["uK(@)","fv(af<f,@>)","v(fv,fv)","N9(as)"])
B.bdZ.prototype={
$1(d){var x=A.aS(d,y.w,y.b),w=A.Z(x.h(0,"id"))
A.Z(x.h(0,"display_name"))
A.ab(x.h(0,"description"))
A.hp(x.h(0,"is_active"))
return new B.uK(w)},
$S:z+0}
B.be_.prototype={
$1(d){return B.cvw(A.aS(d,y.w,y.b))},
$S:z+1}
B.be0.prototype={
$2(d,e){var x,w,v=d.a
v=v==="other"||C.o.bf(v,"other_")?1:0
x=e.a
w=C.f.bn(v,x==="other"||C.o.bf(x,"other_")?1:0)
if(w!==0)return w
return C.o.bn(d.c,e.c)},
$S:z+2}
B.bVs.prototype={
$1(d){return new B.N9(d.V($.e_(),y.k))},
$S:z+3};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.C,[B.uK,B.fv,B.N9])
x(A.cy,[B.bdZ,B.be_,B.bVs])
w(B.be0,A.dA)
w(B.alW,A.eh)})()
A.d1(b.typeUniverse,JSON.parse('{"N9":{"aGq":[]},"alW":{"aG":[]}}'))
var y={j:A.L("uK"),u:A.L("w<uK>"),x:A.L("w<fv>"),y:A.L("af<f,@>"),D:A.L("fv"),w:A.L("f"),k:A.L("ir"),e:A.L("B"),b:A.L("@")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cQp","c6e",()=>A.eY(new B.bVs(),A.L("aGq")))})()};
(a=>{a["ej97WlA9cb9S3wpcSRzqh7nftUw="]=a.current})($__dart_deferred_initializers__);