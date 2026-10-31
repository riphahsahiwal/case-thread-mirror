((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cvD(d){var x,w,v,u=d.h(0,"permissions"),t=A.D(y.w,y.e)
if(y.y.b(u))for(x=u.geq(),x=x.gT(x);x.q();){w=x.gJ()
t.l(0,w.a,J.o(w.b,!0))}x=A.Y(d.h(0,"id"))
A.Y(d.h(0,"case_type"))
w=A.Y(d.h(0,"display_name"))
v=A.hp(d.h(0,"is_lead_tier"))
return new B.fv(x,w,v===!0,t)},
uJ:function uJ(d){this.a=d},
fv:function fv(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
Nd:function Nd(d){this.a=d},
be5:function be5(){},
be6:function be6(){},
be7:function be7(){},
bVG:function bVG(){},
alW:function alW(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[66],B)
B.uJ.prototype={
gbT(){return this.a}}
B.fv.prototype={
LA(d){var x=this.e.h(0,d.c)
return x===!0},
gbT(){return this.a}}
B.Nd.prototype={
NF(){var x=0,w=A.n(y.u),v,u=this,t,s
var $async$NF=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=J
x=3
return A.d(u.a.aM("case_types").bz("id, display_name, description, is_active").b6("is_active",!0).rT("display_name"),$async$NF)
case 3:t=s.c7(e,new B.be5(),y.j)
t=A.J(t,t.$ti.i("al.E"))
v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$NF,w)},
Oa(d){return this.aBO(d)},
aBO(d){var x=0,w=A.n(y.x),v,u=this,t,s,r
var $async$Oa=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(u.a.aM("roles").bz("id, case_type, display_name, is_lead_tier, permissions").b6("case_type",d).rT("display_name"),$async$Oa)
case 3:s=f
r=J.av(s)
if(r.gU(s))throw A.i(new B.alW('Case type "'+d+'" is not available.'))
r=r.dQ(s,new B.be6(),y.D)
t=A.J(r,r.$ti.i("al.E"))
C.i.eh(t,new B.be7())
v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Oa,w)},
$iaGp:1}
B.alW.prototype={}
var z=a.updateTypes(["uJ(@)","fv(af<f,@>)","v(fv,fv)","Nd(as)"])
B.be5.prototype={
$1(d){var x=A.aR(d,y.w,y.b),w=A.Y(x.h(0,"id"))
A.Y(x.h(0,"display_name"))
A.ab(x.h(0,"description"))
A.hp(x.h(0,"is_active"))
return new B.uJ(w)},
$S:z+0}
B.be6.prototype={
$1(d){return B.cvD(A.aR(d,y.w,y.b))},
$S:z+1}
B.be7.prototype={
$2(d,e){var x,w,v=d.a
v=v==="other"||C.o.bf(v,"other_")?1:0
x=e.a
w=C.f.bo(v,x==="other"||C.o.bf(x,"other_")?1:0)
if(w!==0)return w
return C.o.bo(d.c,e.c)},
$S:z+2}
B.bVG.prototype={
$1(d){return new B.Nd(d.V($.dZ(),y.k))},
$S:z+3};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.C,[B.uJ,B.fv,B.Nd])
x(A.cw,[B.be5,B.be6,B.bVG])
w(B.be7,A.dw)
w(B.alW,A.e_)})()
A.cZ(b.typeUniverse,JSON.parse('{"Nd":{"aGp":[]},"alW":{"aG":[]}}'))
var y={j:A.L("uJ"),u:A.L("w<uJ>"),x:A.L("w<fv>"),y:A.L("af<f,@>"),D:A.L("fv"),w:A.L("f"),k:A.L("iq"),e:A.L("B"),b:A.L("@")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cQz","c6m",()=>A.eM(new B.bVG(),A.L("aGp")))})()};
(a=>{a["fbDiBx8BFA1+wb+Cb17TdqpsaZc="]=a.current})($__dart_deferred_initializers__);