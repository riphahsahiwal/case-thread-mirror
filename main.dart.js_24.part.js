((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cvc(d){var x,w,v,u=d.h(0,"permissions"),t=A.D(y.w,y.e)
if(y.y.b(u))for(x=u.geq(),x=x.gT(x);x.q();){w=x.gK()
t.l(0,w.a,J.o(w.b,!0))}x=A.Y(d.h(0,"id"))
A.Y(d.h(0,"case_type"))
w=A.Y(d.h(0,"display_name"))
v=A.ho(d.h(0,"is_lead_tier"))
return new B.fu(x,w,v===!0,t)},
uH:function uH(d){this.a=d},
fu:function fu(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
N7:function N7(d){this.a=d},
bdP:function bdP(){},
bdQ:function bdQ(){},
bdR:function bdR(){},
bVe:function bVe(){},
alR:function alR(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[65],B)
B.uH.prototype={
gbS(){return this.a}}
B.fu.prototype={
Lw(d){var x=this.e.h(0,d.c)
return x===!0},
gbS(){return this.a}}
B.N7.prototype={
NA(){var x=0,w=A.n(y.u),v,u=this,t,s
var $async$NA=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=J
x=3
return A.d(u.a.aN("case_types").bD("id, display_name, description, is_active").bb("is_active",!0).rR("display_name"),$async$NA)
case 3:t=s.c7(e,new B.bdP(),y.j)
t=A.J(t,t.$ti.i("al.E"))
v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$NA,w)},
O5(d){return this.aBB(d)},
aBB(d){var x=0,w=A.n(y.x),v,u=this,t,s,r
var $async$O5=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(u.a.aN("roles").bD("id, case_type, display_name, is_lead_tier, permissions").bb("case_type",d).rR("display_name"),$async$O5)
case 3:s=f
r=J.av(s)
if(r.gU(s))throw A.i(new B.alR('Case type "'+d+'" is not available.'))
r=r.dP(s,new B.bdQ(),y.D)
t=A.J(r,r.$ti.i("al.E"))
C.i.eh(t,new B.bdR())
v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$O5,w)},
$iaGj:1}
B.alR.prototype={}
var z=a.updateTypes(["uH(@)","fu(af<f,@>)","v(fu,fu)","N7(as)"])
B.bdP.prototype={
$1(d){var x=A.aR(d,y.w,y.b),w=A.Y(x.h(0,"id"))
A.Y(x.h(0,"display_name"))
A.ab(x.h(0,"description"))
A.ho(x.h(0,"is_active"))
return new B.uH(w)},
$S:z+0}
B.bdQ.prototype={
$1(d){return B.cvc(A.aR(d,y.w,y.b))},
$S:z+1}
B.bdR.prototype={
$2(d,e){var x,w,v=d.a
v=v==="other"||C.o.bf(v,"other_")?1:0
x=e.a
w=C.f.bo(v,x==="other"||C.o.bf(x,"other_")?1:0)
if(w!==0)return w
return C.o.bo(d.c,e.c)},
$S:z+2}
B.bVe.prototype={
$1(d){return new B.N7(d.V($.dZ(),y.k))},
$S:z+3};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.C,[B.uH,B.fu,B.N7])
x(A.cx,[B.bdP,B.bdQ,B.bVe])
w(B.bdR,A.dA)
w(B.alR,A.e6)})()
A.d1(b.typeUniverse,JSON.parse('{"N7":{"aGj":[]},"alR":{"aG":[]}}'))
var y={j:A.L("uH"),u:A.L("w<uH>"),x:A.L("w<fu>"),y:A.L("af<f,@>"),D:A.L("fu"),w:A.L("f"),k:A.L("iq"),e:A.L("B"),b:A.L("@")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cQ5","c5U",()=>A.eW(new B.bVe(),A.L("aGj")))})()};
(a=>{a["d1yfeOK6yf0BP/vLBtJf42JY7VY="]=a.current})($__dart_deferred_initializers__);