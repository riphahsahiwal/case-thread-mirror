((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,F,B={
ca2(){return new B.CF(null)},
CF:function CF(d){this.a=d},
aE1:function aE1(d,e,f){this.a=d
this.b=e
this.c=f},
aE3:function aE3(){},
aE2:function aE2(d){this.a=d},
aE0:function aE0(d){this.a=d},
aE4:function aE4(d,e,f){this.a=d
this.b=e
this.c=f},
aDO:function aDO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDX:function aDX(d,e,f){this.a=d
this.b=e
this.c=f},
aDW:function aDW(d,e,f){this.a=d
this.b=e
this.c=f},
aDT:function aDT(d,e){this.a=d
this.b=e},
aDS:function aDS(d,e){this.a=d
this.b=e},
aDU:function aDU(d){this.a=d},
aDV:function aDV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aDP:function aDP(d){this.a=d},
aDQ:function aDQ(d){this.a=d},
aDR:function aDR(d){this.a=d},
aE_:function aE_(d,e){this.a=d
this.b=e},
aDY:function aDY(d,e){this.a=d
this.b=e},
aDZ:function aDZ(d){this.a=d},
aDN:function aDN(d,e){this.a=d
this.b=e},
aDL:function aDL(d){this.a=d},
aDM:function aDM(d){this.a=d},
NC:function NC(d){this.a=d},
beV:function beV(){},
bXx:function bXx(){},
bXy:function bXy(){},
cqN(d){var x,w="last_used_at",v="revoked_at",u=A.U(d.h(0,"id")),t=A.U(d.h(0,"name")),s=A.U(d.h(0,"key_prefix")),r=J.bW(y.j.a(d.h(0,"scopes")),new B.aDK(),y.N)
r=A.K(r,r.$ti.i("ak.E"))
A.dV(A.U(d.h(0,"created_at")))
x=d.h(0,w)==null?null:A.dV(A.U(d.h(0,w)))
return new B.oQ(u,t,s,r,x,d.h(0,v)==null?null:A.dV(A.U(d.h(0,v))))},
oQ:function oQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i},
aDK:function aDK(){},
acg:function acg(d,e){this.a=d
this.b=e}},D,H,I
J=c[1]
A=c[0]
C=c[2]
E=c[63]
G=c[75]
F=c[82]
B=a.updateHolder(c[33],B)
D=c[90]
H=c[92]
I=c[91]
B.CF.prototype={
ct(d,e){var x=null,w=e.T($.aC8(),y.E)
return A.hx(A.lW(x,x,x,x,x,x,x,x,C.a7k),x,A.ei(w,new B.aE1(this,d,e),new B.aE2(e),new B.aE3(),!1,!0,!1),x,G.c3z(C.p5,D.fxX,D.fr6,new B.aE4(this,d,e)))},
aNZ(d,e,f){var x,w=null,v=A.d(d).ok,u=A.d(d).ax.a===C.p?C.bE:C.M,t=v.Q
if(t==null)t=w
else t=t.V(A.d(d).ax.a===C.p?C.C:C.D)
u=A.c([A.f8(new A.X(C.aC,A.p("API keys authenticate against the public API gateway (x-api-key header). Keys inherit your room access; read scope allows GET requests, write scope additionally allows creating evidence metadata. Rate limit: 100 requests/minute per key.",w,w,w,w,w,t,w,w,w),w),u,w,w,w,C.a5),C.b_],y.p)
t=J.aw(f)
if(t.gW(f)){x=v.z
if(x==null)x=w
else x=x.V(A.d(d).ax.a===C.p?C.C:C.D)
u.push(A.bQ(new A.X(D.ajJ,A.p("No API keys yet.",w,w,w,w,w,x,w,w,w),w),w,w))}for(t=t.gU(f);t.q();)u.push(this.b33(d,e,t.gI()))
return A.fM(u,w,C.bt,w,C.a6,!1)},
b33(d,e,f){var x,w,v,u,t,s,r,q,p,o=null,n=A.d(d).ok,m=f.a,l=y.O,k=A.d(d).ax.a===C.p?C.bE:C.M,j=n.x
j=j==null?o:j.d6(C.aU)
x=y.p
j=A.c([A.aD(A.p(f.b,o,o,o,o,o,j,o,o,o),1,o)],x)
w=f.r==null
if(!w){v=A.d(d).ax
u=v.id
j.push(F.t9(o,u==null?v.fy:u,D.fus,o,C.bI))}j=A.ao(j,C.y,o,C.r,C.v,0,o,o)
v=n.Q
u=v==null
if(u)t=o
else t=v.ln(A.d(d).ax.a===C.p?C.C:C.D,"monospace")
t=A.p(f.c+"\u2026",o,o,o,o,o,t,o,o,o)
s=A.c([],x)
for(r=f.d,q=r.length,p=0;p<r.length;r.length===q||(0,A.E)(r),++p)s.push(F.t9(o,o,A.p(r[p]==="write"?"Write":"Read",o,o,o,o,o,o,o,o,o),o,C.bI))
s=A.i0(s,C.cM,0,8)
r=f.f
r=r==null?"Never used":"Last used "+this.aW5(r)
if(u)v=o
else v=v.V(A.d(d).ax.a===C.p?C.C:C.D)
x=A.c([j,C.ai,t,C.R,s,C.R,A.p(r,o,o,o,o,o,v,o,o,o)],x)
if(w)x.push(new A.eh(C.dI,o,o,A.bA(D.a7c,new A.L("api-key-revoke-"+m,l),o,o,new B.aDO(this,d,e,f),o,o),o))
return A.f8(new A.X(C.aC,A.a2(x,C.S,o,C.r,C.v,0,C.x),o),k,new A.L("api-key-"+m,l),o,o,C.a5)},
aW5(d){var x,w=new A.aE(Date.now(),0,!1).d9().eE(d.d9()).a,v=C.f.ao(w,6e7)
if(v<1)return"just now"
x=C.f.ao(w,36e8)
if(x<1)return""+v+"m ago"
w=C.f.ao(w,864e8)
if(w<1)return""+x+"h ago"
return""+w+"d ago"},
Hq(d,e){return this.bdp(d,e)},
bdp(d,e){var x=0,w=A.m(y.H),v=this,u,t,s,r
var $async$Hq=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:t={}
s=$.ad()
r=t.a=t.b=!1
t.c=null
x=2
return A.e(A.cU(null,null,!0,null,new B.aDX(t,new A.bT(C.aK,s),e),d,null,!0,!0,y.S),$async$Hq)
case 2:u=g
x=(u!=null?d.e!=null:r)?3:4
break
case 3:e.bz($.aC8())
x=5
return A.e(v.bdz(d,u),$async$Hq)
case 5:case 4:return A.k(null,w)}})
return A.l($async$Hq,w)},
bdz(d,e){var x=null
return A.cU(x,x,!1,x,new B.aE_(d,e),d,x,!0,!0,y.H)},
HN(d,e,f){return this.aRr(d,e,f)},
aRr(d,e,f){var x=0,w=A.m(y.H),v=1,u=[],t,s
var $async$HN=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:x=4
return A.e(A.cU(null,null,!0,null,new B.aDN(f,d),d,null,!0,!0,y.y),$async$HN)
case 4:x=h===!0&&d.e!=null?2:3
break
case 2:v=6
x=9
return A.e(e.X($.c1S(),y.k).Z6(f.a),$async$HN)
case 9:e.bz($.aC8())
v=1
x=8
break
case 6:v=5
s=u.pop()
if(d.e!=null)d.S(y.q).f.aS(D.fl6)
x=8
break
case 5:x=1
break
case 8:case 3:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$HN,w)}}
B.NC.prototype={
Xn(){var x=0,w=A.m(y.s),v,u=this,t,s,r
var $async$Xn=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
r=y.j
x=3
return A.e(u.a.aAa("list_api_keys",y.z),$async$Xn)
case 3:t=s.bW(r.a(e),new B.beV(),y.I)
t=A.K(t,t.$ti.i("ak.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Xn,w)},
Vh(d,e){return this.bmm(d,e)},
bmm(d,e){var x=0,w=A.m(y.S),v,u=this,t,s,r,q,p,o,n
var $async$Vh=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:s=y.N
r=y.z
q=A
p=y.f
o=J
n=y.j
x=3
return A.e(u.a.d4("create_api_key",A.Q(["p_name",d,"p_scopes",e],s,r),r),$async$Vh)
case 3:r=q.aM(p.a(o.kA(n.a(g))),s,r)
s=A.U(r.h(0,"key_id"))
t=A.U(r.h(0,"api_key"))
A.U(r.h(0,"key_prefix"))
v=new B.acg(s,t)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Vh,w)},
Z6(d){return this.by3(d)},
by3(d){var x=0,w=A.m(y.H),v=this,u
var $async$Z6=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:u=y.z
x=2
return A.e(v.a.d4("revoke_api_key",A.Q(["p_id",d],y.N,u),u),$async$Z6)
case 2:return A.k(null,w)}})
return A.l($async$Z6,w)},
$ica1:1}
B.oQ.prototype={
gbE(){return this.a}}
B.acg.prototype={
gbE(){return this.a}}
var z=a.updateTypes(["h(v<oQ>)","oQ(@)","NC(am)","N<v<oQ>>(am)"])
B.aE1.prototype={
$1(d){return this.a.aNZ(this.b,this.c,d)},
$S:z+0}
B.aE3.prototype={
$0(){return C.be},
$S:23}
B.aE2.prototype={
$2(d,e){var x=null
return A.bQ(A.a2(A.c([D.fuS,C.a1,A.d2(C.eE,D.fxY,new B.aE0(this.a),x)],y.p),C.y,x,C.r,C.W,0,C.x),x,x)},
$S:43}
B.aE0.prototype={
$0(){return this.a.bz($.aC8())},
$S:0}
B.aE4.prototype={
$0(){return this.a.Hq(this.b,this.c)},
$S:0}
B.aDO.prototype={
$0(){var x=this
return x.a.HN(x.b,x.c,x.d)},
$S:0}
B.aDX.prototype={
$1(d){return new A.mp(new B.aDW(this.a,this.b,this.c),null)},
$S:69}
B.aDW.prototype={
$2(d,e){var x,w=null,v=this.b,u=this.a,t=y.p,s=A.c([A.cX(w,C.as,!0,w,!0,C.B,w,A.d1(),v,w,w,w,w,w,2,D.e3r,C.T,!0,w,!0,w,!1,w,C.aQ,w,w,w,D.fAq,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aO,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.af,w,C.aG,w,w,w,w),C.a1,E.c2Q(C.aa,w,!0,D.fyW,w,D.fr5,D.fs1,!0),E.c2Q(C.aa,w,!0,D.fyq,new B.aDT(u,e),D.frO,D.fsz,u.b)],t),r=u.c
if(r!=null){x=A.d(d).ok.Q
s.push(new A.X(I.ec,A.p(r,w,w,w,w,w,x==null?w:x.V(A.d(d).ax.fy),w,w,w),w))}s=A.a2(s,C.S,w,C.r,C.W,0,C.x)
r=u.a
x=A.bA(C.bq,w,w,w,r?w:new B.aDU(d),w,w)
v=r?w:new B.aDV(u,v,e,this.c,d)
return A.dq(A.c([x,A.d2(r?C.eC:D.fu7,D.fzE,v,w)],t),s,D.fxB,D.fuO)},
$S:102}
B.aDT.prototype={
$1(d){return this.b.$1(new B.aDS(this.a,d))},
$S:144}
B.aDS.prototype={
$0(){return this.a.b=this.b===!0},
$S:0}
B.aDU.prototype={
$0(){return A.an(this.a,!1).bx()},
$S:0}
B.aDV.prototype={
$0(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$$0=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=C.o.aI(s.b.a.a)
if(J.aX(l)===0){s.c.$1(new B.aDP(s.a))
x=1
break}o=s.c
n=s.a
o.$1(new B.aDQ(n))
u=4
r=A.c(["read"],y.T)
if(n.b)J.dz(r,"write")
q=r
x=7
return A.e(s.d.X($.c1S(),y.k).Vh(l,q),$async$$0)
case 7:p=e
r=s.e
if(r.e!=null)A.an(r,!1).b1(p)
u=2
x=6
break
case 4:u=3
k=t.pop()
o.$1(new B.aDR(n))
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$0,w)},
$S:2}
B.aDP.prototype={
$0(){return this.a.c="Give the key a name."},
$S:0}
B.aDQ.prototype={
$0(){var x=this.a
x.a=!0
x.c=null},
$S:0}
B.aDR.prototype={
$0(){var x=this.a
x.a=!1
x.c="Could not create the key. Try again."},
$S:0}
B.aE_.prototype={
$1(d){var x,w=null,v=A.d(this.a).ax.a===C.p?C.d_:C.d0,u=A.b1(8),t=this.b,s=A.d(d).ok.z
s=s==null?w:s.V9("monospace")
u=A.at(w,A.N4(t.b,D.fBm,s),C.F,w,w,new A.az(v,w,w,u,w,w,C.X),w,w,w,w,C.cQ,w,w,w)
v=A.aT(H.CL,A.d(d).ax.fy,w,w,18)
s=A.d(d).ok.Q
x=y.p
s=A.a2(A.c([u,C.a1,A.ao(A.c([v,C.b6,A.aD(A.p("You won't see this key again. Copy it now \u2014 it cannot be recovered later.",w,w,w,w,w,s==null?w:s.V(A.d(d).ax.fy),w,w,w),1,w)],x),C.y,w,C.r,C.v,0,w,w)],x),C.S,w,C.r,C.W,0,C.x)
return A.dq(A.c([A.pG(D.e1w,D.fAp,C.a7b,new B.aDY(t,d),w),A.d2(D.fr9,D.fzw,new B.aDZ(d),w)],x),s,D.fAG,D.fsW)},
$S:14}
B.aDY.prototype={
$0(){A.qo(new A.nN(this.a.b))
this.b.S(y.q).f.aS(D.flr)},
$S:0}
B.aDZ.prototype={
$0(){return A.an(this.a,!1).bx()},
$S:0}
B.aDN.prototype={
$1(d){var x=null,w=this.a
w=A.p("\u201c"+w.b+"\u201d ("+w.c+"\u2026) will stop working immediately. This cannot be undone.",x,x,x,x,x,x,x,x,x)
return A.dq(A.c([A.bA(D.fse,x,x,x,new B.aDL(d),x,x),A.d2(D.a7c,D.fAI,new B.aDM(d),A.vA(A.d(this.b).ax.fy,x,x,x,x,x,x))],y.p),w,D.fz0,D.fuW)},
$S:14}
B.aDL.prototype={
$0(){return A.an(this.a,!1).b1(!1)},
$S:0}
B.aDM.prototype={
$0(){return A.an(this.a,!1).b1(!0)},
$S:0}
B.beV.prototype={
$1(d){return B.cqN(A.aM(y.f.a(d),y.N,y.z))},
$S:z+1}
B.bXx.prototype={
$1(d){return new B.NC(d.T($.dD(),y.A))},
$S:z+2}
B.bXy.prototype={
$1(d){d.T($.dy(),y.L)
return d.T($.c1S(),y.k).Xn()},
$S:z+3}
B.aDK.prototype={
$1(d){return A.U(d)},
$S:49};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.CF,A.i8)
w(A.cf,[B.aE1,B.aDX,B.aDT,B.aE_,B.aDN,B.beV,B.bXx,B.bXy,B.aDK])
w(A.dg,[B.aE3,B.aE0,B.aE4,B.aDO,B.aDS,B.aDU,B.aDV,B.aDP,B.aDQ,B.aDR,B.aDY,B.aDZ,B.aDL,B.aDM])
w(A.dk,[B.aE2,B.aDW])
w(A.D,[B.NC,B.oQ,B.acg])})()
A.cC(b.typeUniverse,JSON.parse('{"CF":{"O":[],"h":[]},"NC":{"ca1":[]}}'))
var y=(function rtii(){var x=A.J
return{I:x("oQ"),k:x("ca1"),E:x("aS<v<oQ>>"),L:x("aS<fV?>"),S:x("acg"),T:x("x<f>"),p:x("x<h>"),s:x("v<oQ>"),j:x("v<@>"),f:x("ab<@,@>"),N:x("f"),A:x("h5"),O:x("L<f>"),q:x("h8"),y:x("B"),z:x("@"),H:x("~")}})();(function constants(){D.ajJ=new A.ah(0,32,0,32)
D.e_Y=new A.ag(61311,"MaterialIcons",null,!1)
D.e1w=new A.aK(D.e_Y,null,null,null,null)
D.e3r=new A.cm(null,null,null,"Key name",null,null,null,null,null,null,"e.g. Zapier integration",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.fun=new A.a0("Could not revoke the key.",null,null,null,null,null,null,null,null,null,null)
D.fl6=new A.d6(D.fun,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.B,null)
D.ftC=new A.a0("API key copied.",null,null,null,null,null,null,null,null,null,null)
D.flr=new A.d6(D.ftC,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.B,null)
D.fr5=new A.a0("List rooms and evidence (GET)",null,null,null,null,null,null,null,null,null,null)
D.fr6=new A.a0("New key",null,null,null,null,null,null,null,null,null,null)
D.a7c=new A.a0("Revoke",null,null,null,null,null,null,null,null,null,null)
D.fr9=new A.a0("I've saved it",null,null,null,null,null,null,null,null,null,null)
D.frO=new A.a0("Create evidence metadata rows (POST)",null,null,null,null,null,null,null,null,null,null)
D.fs1=new A.a0("Read",null,null,null,null,null,null,null,null,null,null)
D.fse=new A.a0("Keep key",null,null,null,null,null,null,null,null,null,null)
D.fsz=new A.a0("Write",null,null,null,null,null,null,null,null,null,null)
D.fsW=new A.a0("Copy your key",null,null,null,null,null,null,null,null,null,null)
D.fu7=new A.a0("Create key",null,null,null,null,null,null,null,null,null,null)
D.fus=new A.a0("Revoked",null,null,null,null,null,null,null,null,null,null)
D.fuO=new A.a0("New API key",null,null,null,null,null,null,null,null,null,null)
D.fuS=new A.a0("Could not load your API keys.",null,null,null,null,null,null,null,null,null,null)
D.fuW=new A.a0("Revoke key?",null,null,null,null,null,null,null,null,null,null)
D.fxB=new A.L("api-keys-create-dialog",y.O)
D.fxX=new A.L("api-keys-new",y.O)
D.fxY=new A.L("api-keys-retry",y.O)
D.fyq=new A.L("api-keys-scope-write",y.O)
D.fyW=new A.L("api-keys-scope-read",y.O)
D.fz0=new A.L("api-keys-revoke-dialog",y.O)
D.fzw=new A.L("api-keys-one-time-done",y.O)
D.fzE=new A.L("api-keys-create-confirm",y.O)
D.fAp=new A.L("api-keys-copy",y.O)
D.fAq=new A.L("api-keys-name-field",y.O)
D.fAG=new A.L("api-keys-one-time",y.O)
D.fAI=new A.L("api-keys-revoke-confirm",y.O)
D.fBm=new A.L("api-keys-plaintext",y.O)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cTv","c1S",()=>A.eo(new B.bXx(),y.k))
x($,"cTw","aC8",()=>A.lr(new B.bXy(),y.s))})()};
(a=>{a["J66PtwjFSnW6D4cj7EvYdSg59QQ="]=a.current})($__dart_deferred_initializers__);