((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,F,B={
c8s(){return new B.Cf(null)},
Cf:function Cf(d){this.a=d},
aD9:function aD9(d,e,f){this.a=d
this.b=e
this.c=f},
aDb:function aDb(){},
aDa:function aDa(d){this.a=d},
aD8:function aD8(d){this.a=d},
aDc:function aDc(d,e,f){this.a=d
this.b=e
this.c=f},
aCW:function aCW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aD4:function aD4(d,e,f){this.a=d
this.b=e
this.c=f},
aD3:function aD3(d,e,f){this.a=d
this.b=e
this.c=f},
aD0:function aD0(d,e){this.a=d
this.b=e},
aD_:function aD_(d,e){this.a=d
this.b=e},
aD1:function aD1(d){this.a=d},
aD2:function aD2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aCX:function aCX(d){this.a=d},
aCY:function aCY(d){this.a=d},
aCZ:function aCZ(d){this.a=d},
aD7:function aD7(d,e){this.a=d
this.b=e},
aD5:function aD5(d,e){this.a=d
this.b=e},
aD6:function aD6(d){this.a=d},
aCV:function aCV(d,e){this.a=d
this.b=e},
aCT:function aCT(d){this.a=d},
aCU:function aCU(d){this.a=d},
N0:function N0(d){this.a=d},
be6:function be6(){},
bW8:function bW8(){},
bW9:function bW9(){},
cp3(d){var x,w="last_used_at",v="revoked_at",u=A.T(d.h(0,"id")),t=A.T(d.h(0,"name")),s=A.T(d.h(0,"key_prefix")),r=J.bM(y.j.a(d.h(0,"scopes")),new B.aCS(),y.N)
r=A.J(r,r.$ti.i("aj.E"))
A.dE(A.T(d.h(0,"created_at")))
x=d.h(0,w)==null?null:A.dE(A.T(d.h(0,w)))
return new B.oF(u,t,s,r,x,d.h(0,v)==null?null:A.dE(A.T(d.h(0,v))))},
oF:function oF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i},
aCS:function aCS(){},
abD:function abD(d,e){this.a=d
this.b=e}},D,H,I
J=c[1]
A=c[0]
C=c[2]
E=c[61]
G=c[72]
F=c[80]
B=a.updateHolder(c[33],B)
D=c[88]
H=c[90]
I=c[89]
B.Cf.prototype={
cl(d,e){var x=null,w=e.S($.aBh(),y.E)
return A.hp(A.lM(x,x,x,x,x,x,x,x,C.a79),x,A.e_(w,new B.aD9(this,d,e),new B.aDa(e),new B.aDb(),!1,!0,!1),x,G.c22(C.nC,D.fxs,D.fqI,new B.aDc(this,d,e)))},
aNW(d,e,f){var x,w=null,v=A.d(d).ok,u=A.d(d).ax.a===C.p?C.bB:C.L,t=v.Q
if(t==null)t=w
else t=t.U(A.d(d).ax.a===C.p?C.B:C.D)
u=A.c([A.eZ(new A.V(C.aB,A.o("API keys authenticate against the public API gateway (x-api-key header). Keys inherit your room access; read scope allows GET requests, write scope additionally allows creating evidence metadata. Rate limit: 100 requests/minute per key.",w,w,w,w,w,t,w,w,w),w),u,w,w,w,C.a6),C.aY],y.p)
t=J.aw(f)
if(t.gW(f)){x=v.z
if(x==null)x=w
else x=x.U(A.d(d).ax.a===C.p?C.B:C.D)
u.push(A.bS(new A.V(D.ajx,A.o("No API keys yet.",w,w,w,w,w,x,w,w,w),w),w,w))}for(t=t.gV(f);t.q();)u.push(this.b2j(d,e,t.gI()))
return A.ft(u,w,C.bv,w,C.a5,!1)},
b2j(d,e,f){var x,w,v,u,t,s,r,q,p,o=null,n=A.d(d).ok,m=f.a,l=y.O,k=A.d(d).ax.a===C.p?C.bB:C.L,j=n.x
j=j==null?o:j.cX(C.aT)
x=y.p
j=A.c([A.aA(A.o(f.b,o,o,o,o,o,j,o,o,o),1,o)],x)
w=f.r==null
if(!w){v=A.d(d).ax
u=v.id
j.push(F.rR(o,u==null?v.fy:u,D.fu_,o,C.bH))}j=A.am(j,C.y,o,C.r,C.v,0,o,o)
v=n.Q
u=v==null
if(u)t=o
else t=v.lh(A.d(d).ax.a===C.p?C.B:C.D,"monospace")
t=A.o(f.c+"\u2026",o,o,o,o,o,t,o,o,o)
s=A.c([],x)
for(r=f.d,q=r.length,p=0;p<r.length;r.length===q||(0,A.H)(r),++p)s.push(F.rR(o,o,A.o(r[p]==="write"?"Write":"Read",o,o,o,o,o,o,o,o,o),o,C.bH))
s=A.hE(s,C.cG,0,8)
r=f.f
r=r==null?"Never used":"Last used "+this.aVl(r)
if(u)v=o
else v=v.U(A.d(d).ax.a===C.p?C.B:C.D)
x=A.c([j,C.ag,t,C.R,s,C.R,A.o(r,o,o,o,o,o,v,o,o,o)],x)
if(w)x.push(new A.dY(C.dS,o,o,A.bx(D.a71,new A.K("api-key-revoke-"+m,l),o,o,new B.aCW(this,d,e,f),o,o),o))
return A.eZ(new A.V(C.aB,A.a1(x,C.S,o,C.r,C.v,0,C.x),o),k,new A.K("api-key-"+m,l),o,o,C.a6)},
aVl(d){var x,w=new A.aI(Date.now(),0,!1).eb().eA(d.eb()).a,v=C.f.ap(w,6e7)
if(v<1)return"just now"
x=C.f.ap(w,36e8)
if(x<1)return""+v+"m ago"
w=C.f.ap(w,864e8)
if(w<1)return""+x+"h ago"
return""+w+"d ago"},
H9(d,e){return this.bct(d,e)},
bct(d,e){var x=0,w=A.m(y.H),v=this,u,t,s,r
var $async$H9=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:t={}
s=$.ab()
r=t.a=t.b=!1
t.c=null
x=2
return A.e(A.cU(null,null,!0,null,new B.aD4(t,new A.bR(C.aH,s),e),d,null,!0,!0,y.S),$async$H9)
case 2:u=g
x=(u!=null?d.e!=null:r)?3:4
break
case 3:e.br($.aBh())
x=5
return A.e(v.bcD(d,u),$async$H9)
case 5:case 4:return A.k(null,w)}})
return A.l($async$H9,w)},
bcD(d,e){var x=null
return A.cU(x,x,!1,x,new B.aD7(d,e),d,x,!0,!0,y.H)},
Hu(d,e,f){return this.aQL(d,e,f)},
aQL(d,e,f){var x=0,w=A.m(y.H),v=1,u=[],t,s
var $async$Hu=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:x=4
return A.e(A.cU(null,null,!0,null,new B.aCV(f,d),d,null,!0,!0,y.y),$async$Hu)
case 4:x=h===!0&&d.e!=null?2:3
break
case 2:v=6
x=9
return A.e(e.X($.c0n(),y.k).YO(f.a),$async$Hu)
case 9:e.br($.aBh())
v=1
x=8
break
case 6:v=5
s=u.pop()
if(d.e!=null)d.T(y.q).f.aS(D.fkJ)
x=8
break
case 5:x=1
break
case 8:case 3:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$Hu,w)}}
B.N0.prototype={
X4(){var x=0,w=A.m(y.s),v,u=this,t,s,r
var $async$X4=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
r=y.j
x=3
return A.e(u.a.azB("list_api_keys",y.z),$async$X4)
case 3:t=s.bM(r.a(e),new B.be6(),y.I)
t=A.J(t,t.$ti.i("aj.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$X4,w)},
UW(d,e){return this.bln(d,e)},
bln(d,e){var x=0,w=A.m(y.S),v,u=this,t,s,r,q,p,o,n
var $async$UW=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:s=y.N
r=y.z
q=A
p=y.f
o=J
n=y.j
x=3
return A.e(u.a.cZ("create_api_key",A.Q(["p_name",d,"p_scopes",e],s,r),r),$async$UW)
case 3:r=q.aP(p.a(o.ks(n.a(g))),s,r)
s=A.T(r.h(0,"key_id"))
t=A.T(r.h(0,"api_key"))
A.T(r.h(0,"key_prefix"))
v=new B.abD(s,t)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$UW,w)},
YO(d){return this.bx5(d)},
bx5(d){var x=0,w=A.m(y.H),v=this,u
var $async$YO=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:u=y.z
x=2
return A.e(v.a.cZ("revoke_api_key",A.Q(["p_id",d],y.N,u),u),$async$YO)
case 2:return A.k(null,w)}})
return A.l($async$YO,w)},
$ic8r:1}
B.oF.prototype={
gbG(){return this.a}}
B.abD.prototype={
gbG(){return this.a}}
var z=a.updateTypes(["f(v<oF>)","oF(@)","N0(ah)","M<v<oF>>(ah)"])
B.aD9.prototype={
$1(d){return this.a.aNW(this.b,this.c,d)},
$S:z+0}
B.aDb.prototype={
$0(){return C.bf},
$S:22}
B.aDa.prototype={
$2(d,e){var x=null
return A.bS(A.a1(A.c([D.fun,C.a1,A.d2(C.ef,D.fxt,new B.aD8(this.a),x)],y.p),C.y,x,C.r,C.W,0,C.x),x,x)},
$S:44}
B.aD8.prototype={
$0(){return this.a.br($.aBh())},
$S:0}
B.aDc.prototype={
$0(){return this.a.H9(this.b,this.c)},
$S:0}
B.aCW.prototype={
$0(){var x=this
return x.a.Hu(x.b,x.c,x.d)},
$S:0}
B.aD4.prototype={
$1(d){return new A.me(new B.aD3(this.a,this.b,this.c),null)},
$S:66}
B.aD3.prototype={
$2(d,e){var x,w=null,v=this.b,u=this.a,t=y.p,s=A.c([A.cS(w,C.as,!0,w,!0,C.C,w,A.cX(),v,w,w,w,w,w,2,D.e3h,C.T,!0,w,!0,w,!1,w,C.aQ,w,w,w,D.fzO,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aO,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.af,w,C.aE,w,w,w,w),C.a1,E.c1i(C.a9,w,!0,D.fyq,w,D.fqH,D.frB,!0),E.c1i(C.a9,w,!0,D.fxV,new B.aD0(u,e),D.frp,D.fs7,u.b)],t),r=u.c
if(r!=null){x=A.d(d).ok.Q
s.push(new A.V(I.e8,A.o(r,w,w,w,w,w,x==null?w:x.U(A.d(d).ax.fy),w,w,w),w))}s=A.a1(s,C.S,w,C.r,C.W,0,C.x)
r=u.a
x=A.bx(C.bs,w,w,w,r?w:new B.aD1(d),w,w)
v=r?w:new B.aD2(u,v,e,this.c,d)
return A.dr(A.c([x,A.d2(r?C.ex:D.ftE,D.fz5,v,w)],t),s,D.fx6,D.fuj)},
$S:93}
B.aD0.prototype={
$1(d){return this.b.$1(new B.aD_(this.a,d))},
$S:128}
B.aD_.prototype={
$0(){return this.a.b=this.b===!0},
$S:0}
B.aD1.prototype={
$0(){return A.ap(this.a,!1).by()},
$S:0}
B.aD2.prototype={
$0(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$$0=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=C.o.aJ(s.b.a.a)
if(J.aX(l)===0){s.c.$1(new B.aCX(s.a))
x=1
break}o=s.c
n=s.a
o.$1(new B.aCY(n))
u=4
r=A.c(["read"],y.T)
if(n.b)J.dv(r,"write")
q=r
x=7
return A.e(s.d.X($.c0n(),y.k).UW(l,q),$async$$0)
case 7:p=e
r=s.e
if(r.e!=null)A.ap(r,!1).b1(p)
u=2
x=6
break
case 4:u=3
k=t.pop()
o.$1(new B.aCZ(n))
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$0,w)},
$S:2}
B.aCX.prototype={
$0(){return this.a.c="Give the key a name."},
$S:0}
B.aCY.prototype={
$0(){var x=this.a
x.a=!0
x.c=null},
$S:0}
B.aCZ.prototype={
$0(){var x=this.a
x.a=!1
x.c="Could not create the key. Try again."},
$S:0}
B.aD7.prototype={
$1(d){var x,w=null,v=A.d(this.a).ax.a===C.p?C.cN:C.cO,u=A.b1(8),t=this.b,s=A.d(d).ok.z
s=s==null?w:s.UO("monospace")
u=A.au(w,A.Mt(t.b,D.fAK,s),C.F,w,w,new A.aC(v,w,w,u,w,w,C.X),w,w,w,w,C.cQ,w,w,w)
v=A.aW(H.CC,A.d(d).ax.fy,w,w,18)
s=A.d(d).ok.Q
x=y.p
s=A.a1(A.c([u,C.a1,A.am(A.c([v,C.b8,A.aA(A.o("You won't see this key again. Copy it now \u2014 it cannot be recovered later.",w,w,w,w,w,s==null?w:s.U(A.d(d).ax.fy),w,w,w),1,w)],x),C.y,w,C.r,C.v,0,w,w)],x),C.S,w,C.r,C.W,0,C.x)
return A.dr(A.c([A.pu(D.e1h,D.fzN,C.a70,new B.aD5(t,d),w),A.d2(D.fqL,D.fz_,new B.aD6(d),w)],x),s,D.fA1,D.fsu)},
$S:13}
B.aD5.prototype={
$0(){A.qd(new A.nB(this.a.b))
this.b.T(y.q).f.aS(D.fl2)},
$S:0}
B.aD6.prototype={
$0(){return A.ap(this.a,!1).by()},
$S:0}
B.aCV.prototype={
$1(d){var x=null,w=this.a
w=A.o("\u201c"+w.b+"\u201d ("+w.c+"\u2026) will stop working immediately. This cannot be undone.",x,x,x,x,x,x,x,x,x)
return A.dr(A.c([A.bx(D.frO,x,x,x,new B.aCT(d),x,x),A.d2(D.a71,D.fA3,new B.aCU(d),A.vf(A.d(this.b).ax.fy,x,x,x,x,x,x))],y.p),w,D.fyv,D.fur)},
$S:13}
B.aCT.prototype={
$0(){return A.ap(this.a,!1).b1(!1)},
$S:0}
B.aCU.prototype={
$0(){return A.ap(this.a,!1).b1(!0)},
$S:0}
B.be6.prototype={
$1(d){return B.cp3(A.aP(y.f.a(d),y.N,y.z))},
$S:z+1}
B.bW8.prototype={
$1(d){return new B.N0(d.S($.du(),y.A))},
$S:z+2}
B.bW9.prototype={
$1(d){d.S($.dq(),y.L)
return d.S($.c0n(),y.k).X4()},
$S:z+3}
B.aCS.prototype={
$1(d){return A.T(d)},
$S:33};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Cf,A.i_)
w(A.ca,[B.aD9,B.aD4,B.aD0,B.aD7,B.aCV,B.be6,B.bW8,B.bW9,B.aCS])
w(A.dd,[B.aDb,B.aD8,B.aDc,B.aCW,B.aD_,B.aD1,B.aD2,B.aCX,B.aCY,B.aCZ,B.aD5,B.aD6,B.aCT,B.aCU])
w(A.dj,[B.aDa,B.aD3])
w(A.C,[B.N0,B.oF,B.abD])})()
A.cD(b.typeUniverse,JSON.parse('{"Cf":{"N":[],"f":[]},"N0":{"c8r":[]}}'))
var y=(function rtii(){var x=A.I
return{I:x("oF"),k:x("c8r"),E:x("aR<v<oF>>"),L:x("aR<fM?>"),S:x("abD"),T:x("x<h>"),p:x("x<f>"),s:x("v<oF>"),j:x("v<@>"),f:x("ac<@,@>"),N:x("h"),A:x("fY"),O:x("K<h>"),q:x("h_"),y:x("B"),z:x("@"),H:x("~")}})();(function constants(){D.ajx=new A.ag(0,32,0,32)
D.e1h=new A.aG(C.NQ,null,null,null,null)
D.e3h=new A.cj(null,null,null,"Key name",null,null,null,null,null,null,"e.g. Zapier integration",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ftV=new A.a0("Could not revoke the key.",null,null,null,null,null,null,null,null,null,null)
D.fkJ=new A.d8(D.ftV,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.C,null)
D.ft8=new A.a0("API key copied.",null,null,null,null,null,null,null,null,null,null)
D.fl2=new A.d8(D.ft8,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.C,null)
D.fqH=new A.a0("List rooms and evidence (GET)",null,null,null,null,null,null,null,null,null,null)
D.fqI=new A.a0("New key",null,null,null,null,null,null,null,null,null,null)
D.a71=new A.a0("Revoke",null,null,null,null,null,null,null,null,null,null)
D.fqL=new A.a0("I've saved it",null,null,null,null,null,null,null,null,null,null)
D.frp=new A.a0("Create evidence metadata rows (POST)",null,null,null,null,null,null,null,null,null,null)
D.frB=new A.a0("Read",null,null,null,null,null,null,null,null,null,null)
D.frO=new A.a0("Keep key",null,null,null,null,null,null,null,null,null,null)
D.fs7=new A.a0("Write",null,null,null,null,null,null,null,null,null,null)
D.fsu=new A.a0("Copy your key",null,null,null,null,null,null,null,null,null,null)
D.ftE=new A.a0("Create key",null,null,null,null,null,null,null,null,null,null)
D.fu_=new A.a0("Revoked",null,null,null,null,null,null,null,null,null,null)
D.fuj=new A.a0("New API key",null,null,null,null,null,null,null,null,null,null)
D.fun=new A.a0("Could not load your API keys.",null,null,null,null,null,null,null,null,null,null)
D.fur=new A.a0("Revoke key?",null,null,null,null,null,null,null,null,null,null)
D.fx6=new A.K("api-keys-create-dialog",y.O)
D.fxs=new A.K("api-keys-new",y.O)
D.fxt=new A.K("api-keys-retry",y.O)
D.fxV=new A.K("api-keys-scope-write",y.O)
D.fyq=new A.K("api-keys-scope-read",y.O)
D.fyv=new A.K("api-keys-revoke-dialog",y.O)
D.fz_=new A.K("api-keys-one-time-done",y.O)
D.fz5=new A.K("api-keys-create-confirm",y.O)
D.fzN=new A.K("api-keys-copy",y.O)
D.fzO=new A.K("api-keys-name-field",y.O)
D.fA1=new A.K("api-keys-one-time",y.O)
D.fA3=new A.K("api-keys-revoke-confirm",y.O)
D.fAK=new A.K("api-keys-plaintext",y.O)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cRy","c0n",()=>A.eg(new B.bW8(),y.k))
x($,"cRz","aBh",()=>A.lk(new B.bW9(),y.s))})()};
(a=>{a["gGUmTS0cYL83+mwBwXLV6lKKcdQ="]=a.current})($__dart_deferred_initializers__);