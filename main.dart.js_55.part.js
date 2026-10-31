((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cx4(d){var x,w,v,u=d.h(0,"permissions"),t=A.D(y.w,y.e)
if(y.y.b(u))for(x=u.geD(),x=x.gU(x);x.q();){w=x.gI()
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
N4:function N4(d){this.a=d},
be6:function be6(){},
be7:function be7(){},
be8:function be8(){},
bWG:function bWG(){},
alH:function alH(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[72],B)
B.uG.prototype={
gbG(){return this.a}}
B.fw.prototype={
Lw(d){var x=this.e.h(0,d.c)
return x===!0},
gbG(){return this.a}}
B.N4.prototype={
NI(){var x=0,w=A.m(y.u),v,u=this,t,s
var $async$NI=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
x=3
return A.e(u.a.aA("case_types").bo("id, display_name, description, is_active").b0("is_active",!0).p6("display_name"),$async$NI)
case 3:t=s.bL(e,new B.be6(),y.j)
t=A.J(t,t.$ti.i("ai.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$NI,w)},
Oj(d){return this.aC4(d)},
aC4(d){var x=0,w=A.m(y.x),v,u=this,t,s,r
var $async$Oj=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(u.a.aA("roles").bo("id, case_type, display_name, is_lead_tier, permissions").b0("case_type",d).p6("display_name"),$async$Oj)
case 3:s=f
r=J.aw(s)
if(r.gW(s))throw A.n(new B.alH('Case type "'+d+'" is not available.'))
r=r.dY(s,new B.be7(),y.D)
t=A.J(r,r.$ti.i("ai.E"))
C.i.eA(t,new B.be8())
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Oj,w)},
$iaGB:1}
B.alH.prototype={}
var z=a.updateTypes(["uG(@)","fw(aa<h,@>)","w(fw,fw)","N4(al)"])
B.be6.prototype={
$1(d){var x=A.aP(d,y.w,y.b),w=A.T(x.h(0,"id"))
A.T(x.h(0,"display_name"))
A.a7(x.h(0,"description"))
A.hu(x.h(0,"is_active"))
return new B.uG(w)},
$S:z+0}
B.be7.prototype={
$1(d){return B.cx4(A.aP(d,y.w,y.b))},
$S:z+1}
B.be8.prototype={
$2(d,e){var x,w,v=d.a
v=v==="other"||C.o.bj(v,"other_")?1:0
x=e.a
w=C.f.bp(v,x==="other"||C.o.bj(x,"other_")?1:0)
if(w!==0)return w
return C.o.bp(d.c,e.c)},
$S:z+2}
B.bWG.prototype={
$1(d){return new B.N4(d.T($.dx(),y.k))},
$S:z+3};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.C,[B.uG,B.fw,B.N4])
x(A.ca,[B.be6,B.be7,B.bWG])
w(B.be8,A.dj)
w(B.alH,A.dZ)})()
A.cD(b.typeUniverse,JSON.parse('{"N4":{"aGB":[]},"alH":{"aJ":[]}}'))
var y={j:A.I("uG"),u:A.I("v<uG>"),x:A.I("v<fw>"),y:A.I("aa<h,@>"),D:A.I("fw"),w:A.I("h"),k:A.I("fY"),e:A.I("B"),b:A.I("@")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cRV","c7I",()=>A.ej(new B.bWG(),A.I("aGB")))})()};
(a=>{a["TXij88ymQpfsXL+2gfV7wYVtzMk="]=a.current})($__dart_deferred_initializers__);