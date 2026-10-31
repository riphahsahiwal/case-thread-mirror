((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cvP(d){var x,w,v,u=d.h(0,"permissions"),t=A.D(y.w,y.e)
if(y.y.b(u))for(x=u.geq(),x=x.gT(x);x.q();){w=x.gJ()
t.l(0,w.a,J.o(w.b,!0))}x=A.Y(d.h(0,"id"))
A.Y(d.h(0,"case_type"))
w=A.Y(d.h(0,"display_name"))
v=A.hp(d.h(0,"is_lead_tier"))
return new B.fw(x,w,v===!0,t)},
uL:function uL(d){this.a=d},
fw:function fw(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
Nd:function Nd(d){this.a=d},
be3:function be3(){},
be4:function be4(){},
be5:function be5(){},
bVJ:function bVJ(){},
am0:function am0(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[65],B)
B.uL.prototype={
gbS(){return this.a}}
B.fw.prototype={
LC(d){var x=this.e.h(0,d.c)
return x===!0},
gbS(){return this.a}}
B.Nd.prototype={
NK(){var x=0,w=A.n(y.u),v,u=this,t,s
var $async$NK=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=J
x=3
return A.d(u.a.aL("case_types").by("id, display_name, description, is_active").b7("is_active",!0).rS("display_name"),$async$NK)
case 3:t=s.c2(e,new B.be3(),y.j)
t=A.J(t,t.$ti.i("ak.E"))
v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$NK,w)},
Oe(d){return this.aBQ(d)},
aBQ(d){var x=0,w=A.n(y.x),v,u=this,t,s,r
var $async$Oe=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(u.a.aL("roles").by("id, case_type, display_name, is_lead_tier, permissions").b7("case_type",d).rS("display_name"),$async$Oe)
case 3:s=f
r=J.av(s)
if(r.gU(s))throw A.i(new B.am0('Case type "'+d+'" is not available.'))
r=r.dE(s,new B.be4(),y.D)
t=A.J(r,r.$ti.i("ak.E"))
C.i.e7(t,new B.be5())
v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Oe,w)},
$iaGv:1}
B.am0.prototype={}
var z=a.updateTypes(["uL(@)","fw(af<f,@>)","v(fw,fw)","Nd(as)"])
B.be3.prototype={
$1(d){var x=A.aU(d,y.w,y.b),w=A.Y(x.h(0,"id"))
A.Y(x.h(0,"display_name"))
A.ab(x.h(0,"description"))
A.hp(x.h(0,"is_active"))
return new B.uL(w)},
$S:z+0}
B.be4.prototype={
$1(d){return B.cvP(A.aU(d,y.w,y.b))},
$S:z+1}
B.be5.prototype={
$2(d,e){var x,w,v=d.a
v=v==="other"||C.o.bf(v,"other_")?1:0
x=e.a
w=C.f.bn(v,x==="other"||C.o.bf(x,"other_")?1:0)
if(w!==0)return w
return C.o.bn(d.c,e.c)},
$S:z+2}
B.bVJ.prototype={
$1(d){return new B.Nd(d.V($.e0(),y.k))},
$S:z+3};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.C,[B.uL,B.fw,B.Nd])
x(A.cB,[B.be3,B.be4,B.bVJ])
w(B.be5,A.dE)
w(B.am0,A.ej)})()
A.d1(b.typeUniverse,JSON.parse('{"Nd":{"aGv":[]},"am0":{"aG":[]}}'))
var y={j:A.L("uL"),u:A.L("w<uL>"),x:A.L("w<fw>"),y:A.L("af<f,@>"),D:A.L("fw"),w:A.L("f"),k:A.L("ir"),e:A.L("B"),b:A.L("@")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cQI","c6x",()=>A.eY(new B.bVJ(),A.L("aGv")))})()};
(a=>{a["HDZGwDzjdV8ae6LPCxs5Fv99pm4="]=a.current})($__dart_deferred_initializers__);