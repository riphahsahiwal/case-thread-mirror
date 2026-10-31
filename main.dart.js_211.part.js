((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,F,B={
c8i(){return new B.Cf(null)},
Cf:function Cf(d){this.a=d},
aD7:function aD7(d,e,f){this.a=d
this.b=e
this.c=f},
aD9:function aD9(){},
aD8:function aD8(d){this.a=d},
aD6:function aD6(d){this.a=d},
aDa:function aDa(d,e,f){this.a=d
this.b=e
this.c=f},
aCU:function aCU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aD2:function aD2(d,e,f){this.a=d
this.b=e
this.c=f},
aD1:function aD1(d,e,f){this.a=d
this.b=e
this.c=f},
aCZ:function aCZ(d,e){this.a=d
this.b=e},
aCY:function aCY(d,e){this.a=d
this.b=e},
aD_:function aD_(d){this.a=d},
aD0:function aD0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aCV:function aCV(d){this.a=d},
aCW:function aCW(d){this.a=d},
aCX:function aCX(d){this.a=d},
aD5:function aD5(d,e){this.a=d
this.b=e},
aD3:function aD3(d,e){this.a=d
this.b=e},
aD4:function aD4(d){this.a=d},
aCT:function aCT(d,e){this.a=d
this.b=e},
aCR:function aCR(d){this.a=d},
aCS:function aCS(d){this.a=d},
MZ:function MZ(d){this.a=d},
be_:function be_(){},
bW1:function bW1(){},
bW2:function bW2(){},
coT(d){var x,w="last_used_at",v="revoked_at",u=A.T(d.h(0,"id")),t=A.T(d.h(0,"name")),s=A.T(d.h(0,"key_prefix")),r=J.bL(y.j.a(d.h(0,"scopes")),new B.aCQ(),y.N)
r=A.J(r,r.$ti.i("ai.E"))
A.dE(A.T(d.h(0,"created_at")))
x=d.h(0,w)==null?null:A.dE(A.T(d.h(0,w)))
return new B.oE(u,t,s,r,x,d.h(0,v)==null?null:A.dE(A.T(d.h(0,v))))},
oE:function oE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i},
aCQ:function aCQ(){},
abC:function abC(d,e){this.a=d
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
cq(d,e){var x=null,w=e.T($.aBf(),y.E)
return A.hp(A.lM(x,x,x,x,x,x,x,x,C.a77),x,A.ec(w,new B.aD7(this,d,e),new B.aD8(e),new B.aD9(),!1,!0,!1),x,G.c1U(C.nB,D.fxm,D.fqD,new B.aDa(this,d,e)))},
aNT(d,e,f){var x,w=null,v=A.d(d).ok,u=A.d(d).ax.a===C.p?C.bB:C.L,t=v.Q
if(t==null)t=w
else t=t.V(A.d(d).ax.a===C.p?C.B:C.D)
u=A.c([A.f4(new A.W(C.aB,A.o("API keys authenticate against the public API gateway (x-api-key header). Keys inherit your room access; read scope allows GET requests, write scope additionally allows creating evidence metadata. Rate limit: 100 requests/minute per key.",w,w,w,w,w,t,w,w,w),w),u,w,w,w,C.a6),C.b0],y.p)
t=J.aw(f)
if(t.gW(f)){x=v.z
if(x==null)x=w
else x=x.V(A.d(d).ax.a===C.p?C.B:C.D)
u.push(A.bS(new A.W(D.ajw,A.o("No API keys yet.",w,w,w,w,w,x,w,w,w),w),w,w))}for(t=t.gU(f);t.q();)u.push(this.b2f(d,e,t.gI()))
return A.ft(u,w,C.bv,w,C.a5,!1)},
b2f(d,e,f){var x,w,v,u,t,s,r,q,p,o=null,n=A.d(d).ok,m=f.a,l=y.O,k=A.d(d).ax.a===C.p?C.bB:C.L,j=n.x
j=j==null?o:j.d5(C.aT)
x=y.p
j=A.c([A.aD(A.o(f.b,o,o,o,o,o,j,o,o,o),1,o)],x)
w=f.r==null
if(!w){v=A.d(d).ax
u=v.id
j.push(F.rQ(o,u==null?v.fy:u,D.ftU,o,C.bG))}j=A.an(j,C.y,o,C.r,C.v,0,o,o)
v=n.Q
u=v==null
if(u)t=o
else t=v.lh(A.d(d).ax.a===C.p?C.B:C.D,"monospace")
t=A.o(f.c+"\u2026",o,o,o,o,o,t,o,o,o)
s=A.c([],x)
for(r=f.d,q=r.length,p=0;p<r.length;r.length===q||(0,A.H)(r),++p)s.push(F.rQ(o,o,A.o(r[p]==="write"?"Write":"Read",o,o,o,o,o,o,o,o,o),o,C.bG))
s=A.hD(s,C.cG,0,8)
r=f.f
r=r==null?"Never used":"Last used "+this.aVh(r)
if(u)v=o
else v=v.V(A.d(d).ax.a===C.p?C.B:C.D)
x=A.c([j,C.ai,t,C.R,s,C.R,A.o(r,o,o,o,o,o,v,o,o,o)],x)
if(w)x.push(new A.dY(C.dR,o,o,A.by(D.a7_,new A.K("api-key-revoke-"+m,l),o,o,new B.aCU(this,d,e,f),o,o),o))
return A.f4(new A.W(C.aB,A.a2(x,C.S,o,C.r,C.v,0,C.x),o),k,new A.K("api-key-"+m,l),o,o,C.a6)},
aVh(d){var x,w=new A.aH(Date.now(),0,!1).eb().eA(d.eb()).a,v=C.f.ap(w,6e7)
if(v<1)return"just now"
x=C.f.ap(w,36e8)
if(x<1)return""+v+"m ago"
w=C.f.ap(w,864e8)
if(w<1)return""+x+"h ago"
return""+w+"d ago"},
H9(d,e){return this.bcp(d,e)},
bcp(d,e){var x=0,w=A.m(y.H),v=this,u,t,s,r
var $async$H9=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:t={}
s=$.ac()
r=t.a=t.b=!1
t.c=null
x=2
return A.e(A.cU(null,null,!0,null,new B.aD2(t,new A.bR(C.aH,s),e),d,null,!0,!0,y.S),$async$H9)
case 2:u=g
x=(u!=null?d.e!=null:r)?3:4
break
case 3:e.bs($.aBf())
x=5
return A.e(v.bcz(d,u),$async$H9)
case 5:case 4:return A.k(null,w)}})
return A.l($async$H9,w)},
bcz(d,e){var x=null
return A.cU(x,x,!1,x,new B.aD5(d,e),d,x,!0,!0,y.H)},
Hu(d,e,f){return this.aQI(d,e,f)},
aQI(d,e,f){var x=0,w=A.m(y.H),v=1,u=[],t,s
var $async$Hu=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:x=4
return A.e(A.cU(null,null,!0,null,new B.aCT(f,d),d,null,!0,!0,y.y),$async$Hu)
case 4:x=h===!0&&d.e!=null?2:3
break
case 2:v=6
x=9
return A.e(e.X($.c0e(),y.k).YL(f.a),$async$Hu)
case 9:e.bs($.aBf())
v=1
x=8
break
case 6:v=5
s=u.pop()
if(d.e!=null)d.S(y.q).f.aS(D.fkE)
x=8
break
case 5:x=1
break
case 8:case 3:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$Hu,w)}}
B.MZ.prototype={
X1(){var x=0,w=A.m(y.s),v,u=this,t,s,r
var $async$X1=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
r=y.j
x=3
return A.e(u.a.azz("list_api_keys",y.z),$async$X1)
case 3:t=s.bL(r.a(e),new B.be_(),y.I)
t=A.J(t,t.$ti.i("ai.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$X1,w)},
UV(d,e){return this.blj(d,e)},
blj(d,e){var x=0,w=A.m(y.S),v,u=this,t,s,r,q,p,o,n
var $async$UV=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:s=y.N
r=y.z
q=A
p=y.f
o=J
n=y.j
x=3
return A.e(u.a.d3("create_api_key",A.Q(["p_name",d,"p_scopes",e],s,r),r),$async$UV)
case 3:r=q.aP(p.a(o.ks(n.a(g))),s,r)
s=A.T(r.h(0,"key_id"))
t=A.T(r.h(0,"api_key"))
A.T(r.h(0,"key_prefix"))
v=new B.abC(s,t)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$UV,w)},
YL(d){return this.bx_(d)},
bx_(d){var x=0,w=A.m(y.H),v=this,u
var $async$YL=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:u=y.z
x=2
return A.e(v.a.d3("revoke_api_key",A.Q(["p_id",d],y.N,u),u),$async$YL)
case 2:return A.k(null,w)}})
return A.l($async$YL,w)},
$ic8h:1}
B.oE.prototype={
gbG(){return this.a}}
B.abC.prototype={
gbG(){return this.a}}
var z=a.updateTypes(["f(v<oE>)","oE(@)","MZ(al)","M<v<oE>>(al)"])
B.aD7.prototype={
$1(d){return this.a.aNT(this.b,this.c,d)},
$S:z+0}
B.aD9.prototype={
$0(){return C.bf},
$S:23}
B.aD8.prototype={
$2(d,e){var x=null
return A.bS(A.a2(A.c([D.fuh,C.a1,A.d2(C.ey,D.fxn,new B.aD6(this.a),x)],y.p),C.y,x,C.r,C.W,0,C.x),x,x)},
$S:46}
B.aD6.prototype={
$0(){return this.a.bs($.aBf())},
$S:0}
B.aDa.prototype={
$0(){return this.a.H9(this.b,this.c)},
$S:0}
B.aCU.prototype={
$0(){var x=this
return x.a.Hu(x.b,x.c,x.d)},
$S:0}
B.aD2.prototype={
$1(d){return new A.me(new B.aD1(this.a,this.b,this.c),null)},
$S:65}
B.aD1.prototype={
$2(d,e){var x,w=null,v=this.b,u=this.a,t=y.p,s=A.c([A.cS(w,C.as,!0,w,!0,C.C,w,A.cX(),v,w,w,w,w,w,2,D.e3e,C.T,!0,w,!0,w,!1,w,C.aP,w,w,w,D.fzI,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aN,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.af,w,C.aE,w,w,w,w),C.a1,E.c19(C.a9,w,!0,D.fyk,w,D.fqC,D.frw,!0),E.c19(C.a9,w,!0,D.fxP,new B.aCZ(u,e),D.frj,D.fs2,u.b)],t),r=u.c
if(r!=null){x=A.d(d).ok.Q
s.push(new A.W(I.e8,A.o(r,w,w,w,w,w,x==null?w:x.V(A.d(d).ax.fy),w,w,w),w))}s=A.a2(s,C.S,w,C.r,C.W,0,C.x)
r=u.a
x=A.by(C.bs,w,w,w,r?w:new B.aD_(d),w,w)
v=r?w:new B.aD0(u,v,e,this.c,d)
return A.dq(A.c([x,A.d2(r?C.ew:D.ftz,D.fz_,v,w)],t),s,D.fx0,D.fud)},
$S:102}
B.aCZ.prototype={
$1(d){return this.b.$1(new B.aCY(this.a,d))},
$S:132}
B.aCY.prototype={
$0(){return this.a.b=this.b===!0},
$S:0}
B.aD_.prototype={
$0(){return A.ap(this.a,!1).by()},
$S:0}
B.aD0.prototype={
$0(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$$0=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=C.o.aJ(s.b.a.a)
if(J.aX(l)===0){s.c.$1(new B.aCV(s.a))
x=1
break}o=s.c
n=s.a
o.$1(new B.aCW(n))
u=4
r=A.c(["read"],y.T)
if(n.b)J.du(r,"write")
q=r
x=7
return A.e(s.d.X($.c0e(),y.k).UV(l,q),$async$$0)
case 7:p=e
r=s.e
if(r.e!=null)A.ap(r,!1).b1(p)
u=2
x=6
break
case 4:u=3
k=t.pop()
o.$1(new B.aCX(n))
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$0,w)},
$S:2}
B.aCV.prototype={
$0(){return this.a.c="Give the key a name."},
$S:0}
B.aCW.prototype={
$0(){var x=this.a
x.a=!0
x.c=null},
$S:0}
B.aCX.prototype={
$0(){var x=this.a
x.a=!1
x.c="Could not create the key. Try again."},
$S:0}
B.aD5.prototype={
$1(d){var x,w=null,v=A.d(this.a).ax.a===C.p?C.cN:C.cO,u=A.b1(8),t=this.b,s=A.d(d).ok.z
s=s==null?w:s.UN("monospace")
u=A.au(w,A.YL(t.b,D.fAE,s),C.F,w,w,new A.aA(v,w,w,u,w,w,C.X),w,w,w,w,C.cQ,w,w,w)
v=A.aW(H.CC,A.d(d).ax.fy,w,w,18)
s=A.d(d).ok.Q
x=y.p
s=A.a2(A.c([u,C.a1,A.an(A.c([v,C.b8,A.aD(A.o("You won't see this key again. Copy it now \u2014 it cannot be recovered later.",w,w,w,w,w,s==null?w:s.V(A.d(d).ax.fy),w,w,w),1,w)],x),C.y,w,C.r,C.v,0,w,w)],x),C.S,w,C.r,C.W,0,C.x)
return A.dq(A.c([A.pu(D.e1g,D.fzH,C.a6Z,new B.aD3(t,d),w),A.d2(D.fqG,D.fyU,new B.aD4(d),w)],x),s,D.fzW,D.fsp)},
$S:13}
B.aD3.prototype={
$0(){A.rR(new A.oM(this.a.b))
this.b.S(y.q).f.aS(D.fkY)},
$S:0}
B.aD4.prototype={
$0(){return A.ap(this.a,!1).by()},
$S:0}
B.aCT.prototype={
$1(d){var x=null,w=this.a
w=A.o("\u201c"+w.b+"\u201d ("+w.c+"\u2026) will stop working immediately. This cannot be undone.",x,x,x,x,x,x,x,x,x)
return A.dq(A.c([A.by(D.frJ,x,x,x,new B.aCR(d),x,x),A.d2(D.a7_,D.fzY,new B.aCS(d),A.vf(A.d(this.b).ax.fy,x,x,x,x,x,x))],y.p),w,D.fyp,D.ful)},
$S:13}
B.aCR.prototype={
$0(){return A.ap(this.a,!1).b1(!1)},
$S:0}
B.aCS.prototype={
$0(){return A.ap(this.a,!1).b1(!0)},
$S:0}
B.be_.prototype={
$1(d){return B.coT(A.aP(y.f.a(d),y.N,y.z))},
$S:z+1}
B.bW1.prototype={
$1(d){return new B.MZ(d.T($.dx(),y.A))},
$S:z+2}
B.bW2.prototype={
$1(d){d.T($.dt(),y.L)
return d.T($.c0e(),y.k).X1()},
$S:z+3}
B.aCQ.prototype={
$1(d){return A.T(d)},
$S:33};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Cf,A.i_)
w(A.ca,[B.aD7,B.aD2,B.aCZ,B.aD5,B.aCT,B.be_,B.bW1,B.bW2,B.aCQ])
w(A.dd,[B.aD9,B.aD6,B.aDa,B.aCU,B.aCY,B.aD_,B.aD0,B.aCV,B.aCW,B.aCX,B.aD3,B.aD4,B.aCR,B.aCS])
w(A.dj,[B.aD8,B.aD1])
w(A.C,[B.MZ,B.oE,B.abC])})()
A.cD(b.typeUniverse,JSON.parse('{"Cf":{"N":[],"f":[]},"MZ":{"c8h":[]}}'))
var y=(function rtii(){var x=A.I
return{I:x("oE"),k:x("c8h"),E:x("aR<v<oE>>"),L:x("aR<fM?>"),S:x("abC"),T:x("x<h>"),p:x("x<f>"),s:x("v<oE>"),j:x("v<@>"),f:x("aa<@,@>"),N:x("h"),A:x("fY"),O:x("K<h>"),q:x("h_"),y:x("B"),z:x("@"),H:x("~")}})();(function constants(){D.ajw=new A.af(0,32,0,32)
D.e_K=new A.ag(61311,"MaterialIcons",null,!1)
D.e1g=new A.aJ(D.e_K,null,null,null,null)
D.e3e=new A.cj(null,null,null,"Key name",null,null,null,null,null,null,"e.g. Zapier integration",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ftP=new A.a0("Could not revoke the key.",null,null,null,null,null,null,null,null,null,null)
D.fkE=new A.db(D.ftP,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.C,null)
D.ft3=new A.a0("API key copied.",null,null,null,null,null,null,null,null,null,null)
D.fkY=new A.db(D.ft3,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.C,null)
D.fqC=new A.a0("List rooms and evidence (GET)",null,null,null,null,null,null,null,null,null,null)
D.fqD=new A.a0("New key",null,null,null,null,null,null,null,null,null,null)
D.a7_=new A.a0("Revoke",null,null,null,null,null,null,null,null,null,null)
D.fqG=new A.a0("I've saved it",null,null,null,null,null,null,null,null,null,null)
D.frj=new A.a0("Create evidence metadata rows (POST)",null,null,null,null,null,null,null,null,null,null)
D.frw=new A.a0("Read",null,null,null,null,null,null,null,null,null,null)
D.frJ=new A.a0("Keep key",null,null,null,null,null,null,null,null,null,null)
D.fs2=new A.a0("Write",null,null,null,null,null,null,null,null,null,null)
D.fsp=new A.a0("Copy your key",null,null,null,null,null,null,null,null,null,null)
D.ftz=new A.a0("Create key",null,null,null,null,null,null,null,null,null,null)
D.ftU=new A.a0("Revoked",null,null,null,null,null,null,null,null,null,null)
D.fud=new A.a0("New API key",null,null,null,null,null,null,null,null,null,null)
D.fuh=new A.a0("Could not load your API keys.",null,null,null,null,null,null,null,null,null,null)
D.ful=new A.a0("Revoke key?",null,null,null,null,null,null,null,null,null,null)
D.fx0=new A.K("api-keys-create-dialog",y.O)
D.fxm=new A.K("api-keys-new",y.O)
D.fxn=new A.K("api-keys-retry",y.O)
D.fxP=new A.K("api-keys-scope-write",y.O)
D.fyk=new A.K("api-keys-scope-read",y.O)
D.fyp=new A.K("api-keys-revoke-dialog",y.O)
D.fyU=new A.K("api-keys-one-time-done",y.O)
D.fz_=new A.K("api-keys-create-confirm",y.O)
D.fzH=new A.K("api-keys-copy",y.O)
D.fzI=new A.K("api-keys-name-field",y.O)
D.fzW=new A.K("api-keys-one-time",y.O)
D.fzY=new A.K("api-keys-revoke-confirm",y.O)
D.fAE=new A.K("api-keys-plaintext",y.O)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cRn","c0e",()=>A.ej(new B.bW1(),y.k))
x($,"cRo","aBf",()=>A.lk(new B.bW2(),y.s))})()};
(a=>{a["R6BcrfdJWDkTgIQioPyWNUjApcM="]=a.current})($__dart_deferred_initializers__);