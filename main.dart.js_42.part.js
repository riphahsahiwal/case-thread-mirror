((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={CQ:function CQ(d){this.a=d},aG6:function aG6(){},aG5:function aG5(){},bXL:function bXL(){},c_7:function c_7(){},
cBb(d){var x,w,v,u=A.C(y.N,y.i)
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.E)(d),++w){v=d[w]
u.l(0,A.U(v.h(0,"resource")),A.dN(v.h(0,"used")))}return new B.ul(u)},
Bm:function Bm(d,e,f){this.c=d
this.a=e
this.b=f},
fC:function fC(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
B_:function B_(d){this.a=d},
ul:function ul(d){this.a=d},
a99(d,e,f){return B.cLe(d,e,f)},
cLe(d,e,f){var x=0,w=A.m(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$a99=A.i(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:j=d.S(y.q).f
i=f.a
if(i==="enterprise"){j.aS(D.fln)
x=1
break}j.aS(D.fl0)
u=4
s=e.X($.dD(),y.A)
m=s.ax
m===$&&A.b()
l=y.N
x=7
return A.e(m.jo("creem-checkout",A.Q(["plan_id",i],l,l)),$async$a99)
case 7:r=a0
q=y.h.a(r.a)
l=q
p=A.a8(l==null?null:J.A(l,"checkout_url"))
if(p==null||p.length===0){i=A.au("no url")
throw A.n(i)}x=8
return A.e(A.Ih(A.cY(p,0,null),C.p8),$async$a99)
case 8:u=2
x=6
break
case 4:u=3
h=t.pop()
o=A.G(h)
n=J.bd(o).toLowerCase()
j.aS(A.bO(null,null,null,null,null,C.B,null,A.p(J.j5(n,"not configured")?"Online payments aren\u2019t enabled yet \u2014 check back soon.":"Could not start checkout. Please try again.",null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$a99,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[55],B)
D=c[96]
B.CQ.prototype={
OC(){var x=0,w=A.m(y.L),v,u=this,t,s
var $async$OC=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
x=3
return A.e(u.a.aA("plans").tj().b0("is_active",!0).pf("price_monthly_cents"),$async$OC)
case 3:t=s.bW(e,new B.aG6(),y.m)
t=A.K(t,t.$ti.i("ak.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$OC,w)},
Oz(){var x=0,w=A.m(y.s),v,u=this,t,s,r
var $async$Oz=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.a
r=s.aA("subscriptions").bo("plan_id, status")
s=s.gcb().e.a
x=3
return A.e(r.b0("owner_id",(s==null?null:s.r).a).jR(),$async$Oz)
case 3:t=e
if(t==null){v=null
x=1
break}s=A.aM(t,y.N,y.z)
r=A.U(s.h(0,"plan_id"))
A.U(s.h(0,"status"))
v=new B.B_(r)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Oz,w)},
OA(){var x=0,w=A.m(y.o),v,u=this,t,s,r,q
var $async$OA=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=C.o.a6(A.cg(A.b2(new A.aE(Date.now(),0,!1).d9()),A.b8(new A.aE(Date.now(),0,!1).d9()),1,0,0).cZ(),0,10)
s=u.a
r=s.aA("usage_counters").bo("resource, used")
s=s.gcb().e.a
q=J
x=3
return A.e(r.b0("owner_id",(s==null?null:s.r).a).b0("period_start",t),$async$OA)
case 3:s=q.bW(e,new B.aG5(),y.P)
s=A.K(s,s.$ti.i("ak.E"))
v=B.cBb(s)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$OA,w)}}
B.Bm.prototype={
H(){return"UsageResource."+this.b}}
B.fC.prototype={
aaO(d){var x,w=this
switch(d.a){case 0:x=w.f
break
case 1:x=w.r
break
case 2:x=w.w
break
case 3:x=w.x
break
default:x=null}return x},
gbE(){return this.a}}
B.B_.prototype={}
B.ul.prototype={}
var z=a.updateTypes(["fC(ab<f,@>)","CQ(am)","N<v<fC>>(am)"])
B.aG6.prototype={
$1(d){var x=A.aM(d,y.N,y.z)
return new B.fC(A.U(x.h(0,"id")),A.U(x.h(0,"display_name")),C.l.F(A.dN(x.h(0,"price_monthly_cents"))),C.l.F(A.dN(x.h(0,"max_rooms"))),C.l.F(A.dN(x.h(0,"max_members_per_room"))),C.l.F(A.dN(x.h(0,"storage_bytes"))),C.l.F(A.dN(x.h(0,"ai_analyses_monthly"))),A.dN(x.h(0,"transcription_minutes_monthly")),C.l.F(A.dN(x.h(0,"osint_lookups_monthly"))))},
$S:z+0}
B.aG5.prototype={
$1(d){return A.aM(d,y.N,y.z)},
$S:1136}
B.bXL.prototype={
$1(d){return new B.CQ(d.T($.dD(),y.A))},
$S:z+1}
B.c_7.prototype={
$1(d){d.T($.dy(),y.I)
return d.T($.c1U(),y.C).OC()},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.D,[B.CQ,B.fC,B.B_,B.ul])
x(A.cf,[B.aG6,B.aG5,B.bXL,B.c_7])
w(B.Bm,A.h7)})()
var y=(function rtii(){var x=A.J
return{I:x("aS<fV?>"),C:x("CQ"),L:x("v<fC>"),P:x("ab<f,@>"),m:x("fC"),N:x("f"),A:x("h5"),o:x("ul"),q:x("h8"),i:x("Y"),z:x("@"),h:x("ab<f,@>?"),s:x("B_?"),H:x("~")}})();(function constants(){D.fv4=new A.a0("Starting secure checkout\u2026",null,null,null,null,null,null,null,null,null,null)
D.fl0=new A.d6(D.fv4,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.B,null)
D.fuq=new A.a0("Enterprise is custom \u2014 reply to any CaseThread email and we\u2019ll set it up.",null,null,null,null,null,null,null,null,null,null)
D.fln=new A.d6(D.fuq,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.B,null)
D.a8j=new B.Bm("ai_analyses",1,"aiAnalyses")
D.a8k=new B.Bm("transcription_minutes",2,"transcriptionMinutes")
D.a8l=new B.Bm("osint_lookups",3,"osintLookups")
D.a8m=new B.Bm("storage_bytes",0,"storageBytes")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cTF","c1U",()=>A.eo(new B.bXL(),y.C))
x($,"cUZ","c23",()=>A.lr(new B.c_7(),y.L))})()};
(a=>{a["6hjBtjct9ltB2d2jzN7fT+dFlCA="]=a.current})($__dart_deferred_initializers__);