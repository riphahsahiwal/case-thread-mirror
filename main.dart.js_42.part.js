((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={CW:function CW(d){this.a=d},aGw:function aGw(){},aGv:function aGv(){},bYH:function bYH(){},c07:function c07(){},
cCh(d){var x,w,v,u=A.C(y.N,y.i)
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.F)(d),++w){v=d[w]
u.l(0,A.U(v.h(0,"resource")),A.dO(v.h(0,"used")))}return new B.ur(u)},
Bt:function Bt(d,e,f){this.c=d
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
B6:function B6(d){this.a=d},
ur:function ur(d){this.a=d},
a9p(d,e,f){return B.cMk(d,e,f)},
cMk(d,e,f){var x=0,w=A.m(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$a9p=A.i(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:j=d.S(y.q).f
i=f.a
if(i==="enterprise"){j.aS(D.flK)
x=1
break}j.aS(D.fln)
u=4
s=e.X($.dB(),y.A)
m=s.ax
m===$&&A.b()
l=y.N
x=7
return A.e(m.jp("creem-checkout",A.Q(["plan_id",i],l,l)),$async$a9p)
case 7:r=a0
q=y.h.a(r.a)
l=q
p=A.a8(l==null?null:J.A(l,"checkout_url"))
if(p==null||p.length===0){i=A.au("no url")
throw A.n(i)}x=8
return A.e(A.Ip(A.cY(p,0,null),C.p9),$async$a9p)
case 8:u=2
x=6
break
case 4:u=3
h=t.pop()
o=A.G(h)
n=J.bd(o).toLowerCase()
j.aS(A.bQ(null,null,null,null,null,C.D,null,A.o(J.iJ(n,"not configured")?"Online payments aren\u2019t enabled yet \u2014 check back soon.":"Could not start checkout. Please try again.",null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$a9p,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[55],B)
D=c[96]
B.CW.prototype={
OD(){var x=0,w=A.m(y.L),v,u=this,t,s
var $async$OD=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
x=3
return A.e(u.a.az("plans").tl().aY("is_active",!0).o0("price_monthly_cents"),$async$OD)
case 3:t=s.bX(e,new B.aGw(),y.m)
t=A.K(t,t.$ti.i("aj.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$OD,w)},
OA(){var x=0,w=A.m(y.s),v,u=this,t,s,r
var $async$OA=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.a
r=s.az("subscriptions").bn("plan_id, status")
s=s.gcb().e.a
x=3
return A.e(r.aY("owner_id",(s==null?null:s.r).a).jt(),$async$OA)
case 3:t=e
if(t==null){v=null
x=1
break}s=A.aM(t,y.N,y.z)
r=A.U(s.h(0,"plan_id"))
A.U(s.h(0,"status"))
v=new B.B6(r)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$OA,w)},
OB(){var x=0,w=A.m(y.o),v,u=this,t,s,r,q
var $async$OB=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=C.o.a6(A.cj(A.b0(new A.aE(Date.now(),0,!1).d6()),A.b7(new A.aE(Date.now(),0,!1).d6()),1,0,0).d_(),0,10)
s=u.a
r=s.az("usage_counters").bn("resource, used")
s=s.gcb().e.a
q=J
x=3
return A.e(r.aY("owner_id",(s==null?null:s.r).a).aY("period_start",t),$async$OB)
case 3:s=q.bX(e,new B.aGv(),y.P)
s=A.K(s,s.$ti.i("aj.E"))
v=B.cCh(s)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$OB,w)}}
B.Bt.prototype={
H(){return"UsageResource."+this.b}}
B.fD.prototype={
aaP(d){var x,w=this
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
B.B6.prototype={}
B.ur.prototype={}
var z=a.updateTypes(["fD(ac<f,@>)","CW(al)","N<w<fD>>(al)"])
B.aGw.prototype={
$1(d){var x=A.aM(d,y.N,y.z)
return new B.fD(A.U(x.h(0,"id")),A.U(x.h(0,"display_name")),C.l.F(A.dO(x.h(0,"price_monthly_cents"))),C.l.F(A.dO(x.h(0,"max_rooms"))),C.l.F(A.dO(x.h(0,"max_members_per_room"))),C.l.F(A.dO(x.h(0,"storage_bytes"))),C.l.F(A.dO(x.h(0,"ai_analyses_monthly"))),A.dO(x.h(0,"transcription_minutes_monthly")),C.l.F(A.dO(x.h(0,"osint_lookups_monthly"))))},
$S:z+0}
B.aGv.prototype={
$1(d){return A.aM(d,y.N,y.z)},
$S:1153}
B.bYH.prototype={
$1(d){return new B.CW(d.T($.dB(),y.A))},
$S:z+1}
B.c07.prototype={
$1(d){d.T($.dA(),y.I)
return d.T($.c2V(),y.C).OD()},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.E,[B.CW,B.fD,B.B6,B.ur])
x(A.ci,[B.aGw,B.aGv,B.bYH,B.c07])
w(B.Bt,A.h7)})()
var y=(function rtii(){var x=A.J
return{I:x("aS<fW?>"),C:x("CW"),L:x("w<fD>"),P:x("ac<f,@>"),m:x("fD"),N:x("f"),A:x("h5"),o:x("ur"),q:x("h8"),i:x("Z"),z:x("@"),h:x("ac<f,@>?"),s:x("B6?"),H:x("~")}})();(function constants(){D.fvh=new A.a0("Starting secure checkout\u2026",null,null,null,null,null,null,null,null,null,null)
D.fln=new A.d8(D.fvh,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.D,null)
D.fuD=new A.a0("Enterprise is custom \u2014 reply to any CaseThread email and we\u2019ll set it up.",null,null,null,null,null,null,null,null,null,null)
D.flK=new A.d8(D.fuD,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.D,null)
D.a8j=new B.Bt("ai_analyses",1,"aiAnalyses")
D.a8k=new B.Bt("transcription_minutes",2,"transcriptionMinutes")
D.a8l=new B.Bt("osint_lookups",3,"osintLookups")
D.a8m=new B.Bt("storage_bytes",0,"storageBytes")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cUL","c2V",()=>A.ep(new B.bYH(),y.C))
x($,"cW5","c34",()=>A.ls(new B.c07(),y.L))})()};
(a=>{a["U9wKfpHwEHxPRK7yVM3flCzYN3I="]=a.current})($__dart_deferred_initializers__);