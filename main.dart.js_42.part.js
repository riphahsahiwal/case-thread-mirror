((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={D1:function D1(d){this.a=d},aGU:function aGU(){},aGT:function aGT(){},bZv:function bZv(){},c0Y:function c0Y(){},
cDk(d){var x,w,v,u=A.D(y.N,y.i)
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.F)(d),++w){v=d[w]
u.l(0,A.U(v.h(0,"resource")),A.dO(v.h(0,"used")))}return new B.uv(u)},
Bz:function Bz(d,e,f){this.c=d
this.a=e
this.b=f},
fD:function fD(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Bc:function Bc(d){this.a=d},
uv:function uv(d){this.a=d},
a9J(d,e,f){return B.cNx(d,e,f)},
cNx(d,e,f){var x=0,w=A.m(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$a9J=A.i(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:j=d.T(y.q).f
i=f.a
if(i==="enterprise"){j.aS(D.flX)
x=1
break}j.aS(D.flA)
u=4
s=e.X($.dB(),y.A)
m=s.ax
m===$&&A.b()
l=y.N
x=7
return A.e(m.jp("creem-checkout",A.Q(["plan_id",i],l,l)),$async$a9J)
case 7:r=a0
q=y.h.a(r.a)
l=q
p=A.a9(l==null?null:J.A(l,"checkout_url"))
if(p==null||p.length===0){i=A.at("no url")
throw A.n(i)}x=8
return A.e(A.Iy(A.cY(p,0,null),C.pb),$async$a9J)
case 8:u=2
x=6
break
case 4:u=3
h=t.pop()
o=A.G(h)
n=J.be(o).toLowerCase()
j.aS(A.bR(null,null,null,null,null,C.D,null,A.o(J.iL(n,"not configured")?"Online payments aren\u2019t enabled yet \u2014 check back soon.":"Could not start checkout. Please try again.",null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$a9J,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[55],B)
D=c[96]
B.D1.prototype={
OF(){var x=0,w=A.m(y.L),v,u=this,t,s
var $async$OF=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
x=3
return A.e(u.a.az("plans").tm().aY("is_active",!0).o2("price_monthly_cents"),$async$OF)
case 3:t=s.bX(e,new B.aGU(),y.m)
t=A.K(t,t.$ti.i("ai.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$OF,w)},
OC(){var x=0,w=A.m(y.s),v,u=this,t,s,r
var $async$OC=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.a
r=s.az("subscriptions").bn("plan_id, status")
s=s.gcb().e.a
x=3
return A.e(r.aY("owner_id",(s==null?null:s.r).a).jt(),$async$OC)
case 3:t=e
if(t==null){v=null
x=1
break}s=A.aM(t,y.N,y.z)
r=A.U(s.h(0,"plan_id"))
A.U(s.h(0,"status"))
v=new B.Bc(r)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$OC,w)},
OD(){var x=0,w=A.m(y.o),v,u=this,t,s,r,q
var $async$OD=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=C.n.a7(A.ck(A.b0(new A.aE(Date.now(),0,!1).d6()),A.b7(new A.aE(Date.now(),0,!1).d6()),1,0,0).d_(),0,10)
s=u.a
r=s.az("usage_counters").bn("resource, used")
s=s.gcb().e.a
q=J
x=3
return A.e(r.aY("owner_id",(s==null?null:s.r).a).aY("period_start",t),$async$OD)
case 3:s=q.bX(e,new B.aGT(),y.P)
s=A.K(s,s.$ti.i("ai.E"))
v=B.cDk(s)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$OD,w)}}
B.Bz.prototype={
H(){return"UsageResource."+this.b}}
B.fD.prototype={
aaW(d){var x,w=this
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
B.Bc.prototype={}
B.uv.prototype={}
var z=a.updateTypes(["fD(ad<f,@>)","D1(al)","N<v<fD>>(al)"])
B.aGU.prototype={
$1(d){var x=A.aM(d,y.N,y.z)
return new B.fD(A.U(x.h(0,"id")),A.U(x.h(0,"display_name")),C.l.F(A.dO(x.h(0,"price_monthly_cents"))),C.l.F(A.dO(x.h(0,"max_rooms"))),C.l.F(A.dO(x.h(0,"max_members_per_room"))),C.l.F(A.dO(x.h(0,"storage_bytes"))),C.l.F(A.dO(x.h(0,"ai_analyses_monthly"))),A.dO(x.h(0,"transcription_minutes_monthly")),C.l.F(A.dO(x.h(0,"osint_lookups_monthly"))))},
$S:z+0}
B.aGT.prototype={
$1(d){return A.aM(d,y.N,y.z)},
$S:1155}
B.bZv.prototype={
$1(d){return new B.D1(d.S($.dB(),y.A))},
$S:z+1}
B.c0Y.prototype={
$1(d){d.S($.dA(),y.I)
return d.S($.c3M(),y.C).OF()},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.E,[B.D1,B.fD,B.Bc,B.uv])
x(A.cg,[B.aGU,B.aGT,B.bZv,B.c0Y])
w(B.Bz,A.fU)})()
var y=(function rtii(){var x=A.J
return{I:x("aS<fW?>"),C:x("D1"),L:x("v<fD>"),P:x("ad<f,@>"),m:x("fD"),N:x("f"),A:x("h6"),o:x("uv"),q:x("h8"),i:x("X"),z:x("@"),h:x("ad<f,@>?"),s:x("Bc?"),H:x("~")}})();(function constants(){D.fvt=new A.a0("Starting secure checkout\u2026",null,null,null,null,null,null,null,null,null,null)
D.flA=new A.d8(D.fvt,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.D,null)
D.fuP=new A.a0("Enterprise is custom \u2014 reply to any CaseThread email and we\u2019ll set it up.",null,null,null,null,null,null,null,null,null,null)
D.flX=new A.d8(D.fuP,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.D,null)
D.a8m=new B.Bz("ai_analyses",1,"aiAnalyses")
D.a8n=new B.Bz("transcription_minutes",2,"transcriptionMinutes")
D.a8o=new B.Bz("osint_lookups",3,"osintLookups")
D.a8p=new B.Bz("storage_bytes",0,"storageBytes")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cW_","c3M",()=>A.er(new B.bZv(),y.C))
x($,"cXk","c3W",()=>A.lu(new B.c0Y(),y.L))})()};
(a=>{a["6ceJZ8rfGdJjDY4zPE6upJwsvk4="]=a.current})($__dart_deferred_initializers__);