((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cwY(d){var x,w,v,u=d.h(0,"permissions"),t=A.D(y.w,y.e)
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
N3:function N3(d){this.a=d},
be7:function be7(){},
be8:function be8(){},
be9:function be9(){},
bWC:function bWC(){},
alJ:function alJ(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[71],B)
B.uG.prototype={
gbG(){return this.a}}
B.fw.prototype={
Ly(d){var x=this.e.h(0,d.c)
return x===!0},
gbG(){return this.a}}
B.N3.prototype={
NK(){var x=0,w=A.m(y.u),v,u=this,t,s
var $async$NK=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
x=3
return A.e(u.a.aA("case_types").bo("id, display_name, description, is_active").b0("is_active",!0).p7("display_name"),$async$NK)
case 3:t=s.bL(e,new B.be7(),y.j)
t=A.J(t,t.$ti.i("ai.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$NK,w)},
Ol(d){return this.aC6(d)},
aC6(d){var x=0,w=A.m(y.x),v,u=this,t,s,r
var $async$Ol=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(u.a.aA("roles").bo("id, case_type, display_name, is_lead_tier, permissions").b0("case_type",d).p7("display_name"),$async$Ol)
case 3:s=f
r=J.aw(s)
if(r.gW(s))throw A.n(new B.alJ('Case type "'+d+'" is not available.'))
r=r.dY(s,new B.be8(),y.D)
t=A.J(r,r.$ti.i("ai.E"))
C.i.eA(t,new B.be9())
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Ol,w)},
$iaGB:1}
B.alJ.prototype={}
var z=a.updateTypes(["uG(@)","fw(aa<h,@>)","w(fw,fw)","N3(al)"])
B.be7.prototype={
$1(d){var x=A.aP(d,y.w,y.b),w=A.T(x.h(0,"id"))
A.T(x.h(0,"display_name"))
A.a7(x.h(0,"description"))
A.hu(x.h(0,"is_active"))
return new B.uG(w)},
$S:z+0}
B.be8.prototype={
$1(d){return B.cwY(A.aP(d,y.w,y.b))},
$S:z+1}
B.be9.prototype={
$2(d,e){var x,w,v=d.a
v=v==="other"||C.o.bj(v,"other_")?1:0
x=e.a
w=C.f.bp(v,x==="other"||C.o.bj(x,"other_")?1:0)
if(w!==0)return w
return C.o.bp(d.c,e.c)},
$S:z+2}
B.bWC.prototype={
$1(d){return new B.N3(d.T($.dx(),y.k))},
$S:z+3};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.C,[B.uG,B.fw,B.N3])
x(A.ca,[B.be7,B.be8,B.bWC])
w(B.be9,A.dk)
w(B.alJ,A.dZ)})()
A.cD(b.typeUniverse,JSON.parse('{"N3":{"aGB":[]},"alJ":{"aK":[]}}'))
var y={j:A.I("uG"),u:A.I("v<uG>"),x:A.I("v<fw>"),y:A.I("aa<h,@>"),D:A.I("fw"),w:A.I("h"),k:A.I("fY"),e:A.I("B"),b:A.I("@")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cRO","c7B",()=>A.ej(new B.bWC(),A.I("aGB")))})()};
(a=>{a["EY8gj5buSNwPG9qSx2kSzngDe+U="]=a.current})($__dart_deferred_initializers__);