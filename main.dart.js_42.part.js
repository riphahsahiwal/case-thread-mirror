((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={Cq:function Cq(d){this.a=d},aFc:function aFc(){},aFb:function aFb(){},bWf:function bWf(){},bYB:function bYB(){},
czj(d){var x,w,v,u=A.D(y.N,y.i)
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.H)(d),++w){v=d[w]
u.m(0,A.T(v.h(0,"resource")),A.dI(v.h(0,"used")))}return new B.u3(u)},
AW:function AW(d,e,f){this.c=d
this.a=e
this.b=f},
fu:function fu(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Ay:function Ay(d){this.a=d},
u3:function u3(d){this.a=d},
a8s(d,e,f){return B.cJe(d,e,f)},
cJe(d,e,f){var x=0,w=A.m(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$a8s=A.i(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:j=d.S(y.q).f
i=f.a
if(i==="enterprise"){j.aS(D.fkU)
x=1
break}j.aS(D.fky)
u=4
s=e.X($.dx(),y.A)
m=s.ax
m===$&&A.b()
l=y.N
x=7
return A.e(m.jn("creem-checkout",A.Q(["plan_id",i],l,l)),$async$a8s)
case 7:r=a0
q=y.h.a(r.a)
l=q
p=A.a7(l==null?null:J.A(l,"checkout_url"))
if(p==null||p.length===0){i=A.at("no url")
throw A.n(i)}x=8
return A.e(A.HJ(A.cT(p,0,null),C.oW),$async$a8s)
case 8:u=2
x=6
break
case 4:u=3
h=t.pop()
o=A.E(h)
n=J.bg(o).toLowerCase()
j.aS(A.bN(null,null,null,null,null,C.C,null,A.o(J.jv(n,"not configured")?"Online payments aren\u2019t enabled yet \u2014 check back soon.":"Could not start checkout. Please try again.",null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$a8s,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[53],B)
D=c[94]
B.Cq.prototype={
Oh(){var x=0,w=A.m(y.L),v,u=this,t,s
var $async$Oh=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
x=3
return A.e(u.a.aA("plans").tc().b0("is_active",!0).p6("price_monthly_cents"),$async$Oh)
case 3:t=s.bL(e,new B.aFc(),y.m)
t=A.J(t,t.$ti.i("ai.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Oh,w)},
Oe(){var x=0,w=A.m(y.s),v,u=this,t,s,r
var $async$Oe=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.a
r=s.aA("subscriptions").bo("plan_id, status")
s=s.gca().e.a
x=3
return A.e(r.b0("owner_id",(s==null?null:s.r).a).jP(),$async$Oe)
case 3:t=e
if(t==null){v=null
x=1
break}s=A.aP(t,y.N,y.z)
r=A.T(s.h(0,"plan_id"))
A.T(s.h(0,"status"))
v=new B.Ay(r)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Oe,w)},
Of(){var x=0,w=A.m(y.o),v,u=this,t,s,r,q
var $async$Of=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=C.o.a8(A.cb(A.b6(new A.aH(Date.now(),0,!1).eb()),A.bk(new A.aH(Date.now(),0,!1).eb()),1,0,0).cY(),0,10)
s=u.a
r=s.aA("usage_counters").bo("resource, used")
s=s.gca().e.a
q=J
x=3
return A.e(r.b0("owner_id",(s==null?null:s.r).a).b0("period_start",t),$async$Of)
case 3:s=q.bL(e,new B.aFb(),y.P)
s=A.J(s,s.$ti.i("ai.E"))
v=B.czj(s)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Of,w)}}
B.AW.prototype={
H(){return"UsageResource."+this.b}}
B.fu.prototype={
aao(d){var x,w=this
switch(d.a){case 0:x=w.f
break
case 1:x=w.r
break
case 2:x=w.w
break
case 3:x=w.x
break
default:x=null}return x},
gbG(){return this.a}}
B.Ay.prototype={}
B.u3.prototype={}
var z=a.updateTypes(["fu(aa<h,@>)","Cq(al)","M<v<fu>>(al)"])
B.aFc.prototype={
$1(d){var x=A.aP(d,y.N,y.z)
return new B.fu(A.T(x.h(0,"id")),A.T(x.h(0,"display_name")),C.m.F(A.dI(x.h(0,"price_monthly_cents"))),C.m.F(A.dI(x.h(0,"max_rooms"))),C.m.F(A.dI(x.h(0,"max_members_per_room"))),C.m.F(A.dI(x.h(0,"storage_bytes"))),C.m.F(A.dI(x.h(0,"ai_analyses_monthly"))),A.dI(x.h(0,"transcription_minutes_monthly")),C.m.F(A.dI(x.h(0,"osint_lookups_monthly"))))},
$S:z+0}
B.aFb.prototype={
$1(d){return A.aP(d,y.N,y.z)},
$S:1135}
B.bWf.prototype={
$1(d){return new B.Cq(d.T($.dx(),y.A))},
$S:z+1}
B.bYB.prototype={
$1(d){d.T($.dt(),y.I)
return d.T($.c0g(),y.C).Oh()},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.C,[B.Cq,B.fu,B.Ay,B.u3])
x(A.ca,[B.aFc,B.aFb,B.bWf,B.bYB])
w(B.AW,A.hs)})()
var y=(function rtii(){var x=A.I
return{I:x("aR<fM?>"),C:x("Cq"),L:x("v<fu>"),P:x("aa<h,@>"),m:x("fu"),N:x("h"),A:x("fY"),o:x("u3"),q:x("h_"),i:x("Z"),z:x("@"),h:x("aa<h,@>?"),s:x("Ay?"),H:x("~")}})();(function constants(){D.fuu=new A.a0("Starting secure checkout\u2026",null,null,null,null,null,null,null,null,null,null)
D.fky=new A.db(D.fuu,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.C,null)
D.ftS=new A.a0("Enterprise is custom \u2014 reply to any CaseThread email and we\u2019ll set it up.",null,null,null,null,null,null,null,null,null,null)
D.fkU=new A.db(D.ftS,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.C,null)
D.a86=new B.AW("ai_analyses",1,"aiAnalyses")
D.a87=new B.AW("transcription_minutes",2,"transcriptionMinutes")
D.a88=new B.AW("osint_lookups",3,"osintLookups")
D.a89=new B.AW("storage_bytes",0,"storageBytes")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cRx","c0g",()=>A.ej(new B.bWf(),y.C))
x($,"cSR","c0p",()=>A.lk(new B.bYB(),y.L))})()};
(a=>{a["vbBhwIUp32JMXHAJpsH8fSaKKps="]=a.current})($__dart_deferred_initializers__);