((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={Cq:function Cq(d){this.a=d},aFg:function aFg(){},aFf:function aFf(){},bWx:function bWx(){},bYT:function bYT(){},
czC(d){var x,w,v,u=A.D(y.N,y.i)
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
a8w(d,e,f){return B.cJx(d,e,f)},
cJx(d,e,f){var x=0,w=A.m(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$a8w=A.i(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:j=d.S(y.q).f
i=f.a
if(i==="enterprise"){j.aS(D.fkR)
x=1
break}j.aS(D.fkv)
u=4
s=e.X($.dx(),y.A)
m=s.ax
m===$&&A.b()
l=y.N
x=7
return A.e(m.jn("creem-checkout",A.Q(["plan_id",i],l,l)),$async$a8w)
case 7:r=a0
q=y.h.a(r.a)
l=q
p=A.a7(l==null?null:J.A(l,"checkout_url"))
if(p==null||p.length===0){i=A.at("no url")
throw A.n(i)}x=8
return A.e(A.HK(A.cU(p,0,null),C.oW),$async$a8w)
case 8:u=2
x=6
break
case 4:u=3
h=t.pop()
o=A.E(h)
n=J.bg(o).toLowerCase()
j.aS(A.bN(null,null,null,null,null,C.B,null,A.o(J.jv(n,"not configured")?"Online payments aren\u2019t enabled yet \u2014 check back soon.":"Could not start checkout. Please try again.",null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$a8w,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[53],B)
D=c[94]
B.Cq.prototype={
Oi(){var x=0,w=A.m(y.L),v,u=this,t,s
var $async$Oi=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
x=3
return A.e(u.a.aA("plans").tc().b0("is_active",!0).p6("price_monthly_cents"),$async$Oi)
case 3:t=s.bL(e,new B.aFg(),y.m)
t=A.J(t,t.$ti.i("ai.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Oi,w)},
Of(){var x=0,w=A.m(y.s),v,u=this,t,s,r
var $async$Of=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.a
r=s.aA("subscriptions").bo("plan_id, status")
s=s.gca().e.a
x=3
return A.e(r.b0("owner_id",(s==null?null:s.r).a).jP(),$async$Of)
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
return A.l($async$Of,w)},
Og(){var x=0,w=A.m(y.o),v,u=this,t,s,r,q
var $async$Og=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=C.o.a8(A.cb(A.b6(new A.aH(Date.now(),0,!1).eb()),A.bk(new A.aH(Date.now(),0,!1).eb()),1,0,0).cY(),0,10)
s=u.a
r=s.aA("usage_counters").bo("resource, used")
s=s.gca().e.a
q=J
x=3
return A.e(r.b0("owner_id",(s==null?null:s.r).a).b0("period_start",t),$async$Og)
case 3:s=q.bL(e,new B.aFf(),y.P)
s=A.J(s,s.$ti.i("ai.E"))
v=B.czC(s)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Og,w)}}
B.AW.prototype={
H(){return"UsageResource."+this.b}}
B.fu.prototype={
aar(d){var x,w=this
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
B.aFg.prototype={
$1(d){var x=A.aP(d,y.N,y.z)
return new B.fu(A.T(x.h(0,"id")),A.T(x.h(0,"display_name")),C.m.F(A.dI(x.h(0,"price_monthly_cents"))),C.m.F(A.dI(x.h(0,"max_rooms"))),C.m.F(A.dI(x.h(0,"max_members_per_room"))),C.m.F(A.dI(x.h(0,"storage_bytes"))),C.m.F(A.dI(x.h(0,"ai_analyses_monthly"))),A.dI(x.h(0,"transcription_minutes_monthly")),C.m.F(A.dI(x.h(0,"osint_lookups_monthly"))))},
$S:z+0}
B.aFf.prototype={
$1(d){return A.aP(d,y.N,y.z)},
$S:1138}
B.bWx.prototype={
$1(d){return new B.Cq(d.T($.dx(),y.A))},
$S:z+1}
B.bYT.prototype={
$1(d){d.T($.dt(),y.I)
return d.T($.c0y(),y.C).Oi()},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.C,[B.Cq,B.fu,B.Ay,B.u3])
x(A.ca,[B.aFg,B.aFf,B.bWx,B.bYT])
w(B.AW,A.hs)})()
var y=(function rtii(){var x=A.I
return{I:x("aR<fM?>"),C:x("Cq"),L:x("v<fu>"),P:x("aa<h,@>"),m:x("fu"),N:x("h"),A:x("fY"),o:x("u3"),q:x("h_"),i:x("Z"),z:x("@"),h:x("aa<h,@>?"),s:x("Ay?"),H:x("~")}})();(function constants(){D.fuA=new A.a_("Starting secure checkout\u2026",null,null,null,null,null,null,null,null,null,null)
D.fkv=new A.d8(D.fuA,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.B,null)
D.ftW=new A.a_("Enterprise is custom \u2014 reply to any CaseThread email and we\u2019ll set it up.",null,null,null,null,null,null,null,null,null,null)
D.fkR=new A.d8(D.ftW,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.B,null)
D.a85=new B.AW("ai_analyses",1,"aiAnalyses")
D.a86=new B.AW("transcription_minutes",2,"transcriptionMinutes")
D.a87=new B.AW("osint_lookups",3,"osintLookups")
D.a88=new B.AW("storage_bytes",0,"storageBytes")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cRQ","c0y",()=>A.ej(new B.bWx(),y.C))
x($,"cT9","c0H",()=>A.lk(new B.bYT(),y.L))})()};
(a=>{a["pnCOchFCQn9ttWKfjCnsDqMYp8A="]=a.current})($__dart_deferred_initializers__);