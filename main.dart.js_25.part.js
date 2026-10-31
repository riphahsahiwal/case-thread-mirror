((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cvV(d){var x,w,v,u=d.h(0,"permissions"),t=A.D(y.w,y.e)
if(y.y.b(u))for(x=u.geq(),x=x.gT(x);x.q();){w=x.gJ()
t.l(0,w.a,J.o(w.b,!0))}x=A.Z(d.h(0,"id"))
A.Z(d.h(0,"case_type"))
w=A.Z(d.h(0,"display_name"))
v=A.hp(d.h(0,"is_lead_tier"))
return new B.fw(x,w,v===!0,t)},
uM:function uM(d){this.a=d},
fw:function fw(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
Ng:function Ng(d){this.a=d},
be5:function be5(){},
be6:function be6(){},
be7:function be7(){},
bVP:function bVP(){},
am3:function am3(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[65],B)
B.uM.prototype={
gbS(){return this.a}}
B.fw.prototype={
LD(d){var x=this.e.h(0,d.c)
return x===!0},
gbS(){return this.a}}
B.Ng.prototype={
NL(){var x=0,w=A.n(y.u),v,u=this,t,s
var $async$NL=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=J
x=3
return A.d(u.a.aL("case_types").bz("id, display_name, description, is_active").b7("is_active",!0).rS("display_name"),$async$NL)
case 3:t=s.c2(e,new B.be5(),y.j)
t=A.J(t,t.$ti.i("ak.E"))
v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$NL,w)},
Of(d){return this.aBR(d)},
aBR(d){var x=0,w=A.n(y.x),v,u=this,t,s,r
var $async$Of=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(u.a.aL("roles").bz("id, case_type, display_name, is_lead_tier, permissions").b7("case_type",d).rS("display_name"),$async$Of)
case 3:s=f
r=J.av(s)
if(r.gU(s))throw A.i(new B.am3('Case type "'+d+'" is not available.'))
r=r.dE(s,new B.be6(),y.D)
t=A.J(r,r.$ti.i("ak.E"))
C.i.e7(t,new B.be7())
v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Of,w)},
$iaGx:1}
B.am3.prototype={}
var z=a.updateTypes(["uM(@)","fw(af<f,@>)","v(fw,fw)","Ng(as)"])
B.be5.prototype={
$1(d){var x=A.aU(d,y.w,y.b),w=A.Z(x.h(0,"id"))
A.Z(x.h(0,"display_name"))
A.ab(x.h(0,"description"))
A.hp(x.h(0,"is_active"))
return new B.uM(w)},
$S:z+0}
B.be6.prototype={
$1(d){return B.cvV(A.aU(d,y.w,y.b))},
$S:z+1}
B.be7.prototype={
$2(d,e){var x,w,v=d.a
v=v==="other"||C.o.bf(v,"other_")?1:0
x=e.a
w=C.f.bn(v,x==="other"||C.o.bf(x,"other_")?1:0)
if(w!==0)return w
return C.o.bn(d.c,e.c)},
$S:z+2}
B.bVP.prototype={
$1(d){return new B.Ng(d.V($.e0(),y.k))},
$S:z+3};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.C,[B.uM,B.fw,B.Ng])
x(A.cz,[B.be5,B.be6,B.bVP])
w(B.be7,A.dA)
w(B.am3,A.eb)})()
A.cY(b.typeUniverse,JSON.parse('{"Ng":{"aGx":[]},"am3":{"aG":[]}}'))
var y={j:A.L("uM"),u:A.L("w<uM>"),x:A.L("w<fw>"),y:A.L("af<f,@>"),D:A.L("fw"),w:A.L("f"),k:A.L("is"),e:A.L("B"),b:A.L("@")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cQO","c6D",()=>A.eY(new B.bVP(),A.L("aGx")))})()};
(a=>{a["8eHUNRNYfci5d4dDe+9ACD5JDxQ="]=a.current})($__dart_deferred_initializers__);