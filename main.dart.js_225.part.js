((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,F,B={
cb5(){return new B.CL(null)},
CL:function CL(d){this.a=d},
aEr:function aEr(d,e,f){this.a=d
this.b=e
this.c=f},
aEt:function aEt(){},
aEs:function aEs(d){this.a=d},
aEq:function aEq(d){this.a=d},
aEu:function aEu(d,e,f){this.a=d
this.b=e
this.c=f},
aEd:function aEd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aEm:function aEm(d,e,f){this.a=d
this.b=e
this.c=f},
aEl:function aEl(d,e,f){this.a=d
this.b=e
this.c=f},
aEi:function aEi(d,e){this.a=d
this.b=e},
aEh:function aEh(d,e){this.a=d
this.b=e},
aEj:function aEj(d){this.a=d},
aEk:function aEk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aEe:function aEe(d){this.a=d},
aEf:function aEf(d){this.a=d},
aEg:function aEg(d){this.a=d},
aEp:function aEp(d,e){this.a=d
this.b=e},
aEn:function aEn(d,e){this.a=d
this.b=e},
aEo:function aEo(d){this.a=d},
aEc:function aEc(d,e){this.a=d
this.b=e},
aEa:function aEa(d){this.a=d},
aEb:function aEb(d){this.a=d},
NP:function NP(d){this.a=d},
bfY:function bfY(){},
bYt:function bYt(){},
bYu:function bYu(){},
crN(d){var x,w="last_used_at",v="revoked_at",u=A.U(d.h(0,"id")),t=A.U(d.h(0,"name")),s=A.U(d.h(0,"key_prefix")),r=J.bX(y.j.a(d.h(0,"scopes")),new B.aE9(),y.N)
r=A.K(r,r.$ti.i("aj.E"))
A.dX(A.U(d.h(0,"created_at")))
x=d.h(0,w)==null?null:A.dX(A.U(d.h(0,w)))
return new B.oV(u,t,s,r,x,d.h(0,v)==null?null:A.dX(A.U(d.h(0,v))))},
oV:function oV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i},
aE9:function aE9(){},
acx:function acx(d,e){this.a=d
this.b=e}},D,H,I
J=c[1]
A=c[0]
C=c[2]
E=c[63]
G=c[75]
F=c[83]
B=a.updateHolder(c[33],B)
D=c[90]
H=c[92]
I=c[91]
B.CL.prototype={
cc(d,e){var x=null,w=e.T($.aCt(),y.E)
return A.hx(A.lY(x,x,x,x,x,x,x,x,C.a7k),x,A.dK(w,new B.aEr(this,d,e),new B.aEs(e),new B.aEt(),!1,!0,!1),x,G.c4z(C.p6,D.fy7,D.fri,new B.aEu(this,d,e)))},
aO6(d,e,f){var x,w=null,v=A.d(d).ok,u=A.d(d).ax.a===C.p?C.bQ:C.M,t=v.Q
if(t==null)t=w
else t=t.U(A.d(d).ax.a===C.p?C.B:C.C)
u=A.c([A.fa(new A.X(C.aC,A.o("API keys authenticate against the public API gateway (x-api-key header). Keys inherit your room access; read scope allows GET requests, write scope additionally allows creating evidence metadata. Rate limit: 100 requests/minute per key.",w,w,w,w,w,t,w,w,w),w),u,w,w,w,C.a4),C.aY],y.p)
t=J.aw(f)
if(t.gW(f)){x=v.z
if(x==null)x=w
else x=x.U(A.d(d).ax.a===C.p?C.B:C.C)
u.push(A.bR(new A.X(D.ajK,A.o("No API keys yet.",w,w,w,w,w,x,w,w,w),w),w,w))}for(t=t.gV(f);t.q();)u.push(this.b3d(d,e,t.gI()))
return A.fN(u,w,C.bq,w,C.a6,!1)},
b3d(d,e,f){var x,w,v,u,t,s,r,q,p,o=null,n=A.d(d).ok,m=f.a,l=y.O,k=A.d(d).ax.a===C.p?C.bQ:C.M,j=n.x
j=j==null?o:j.cT(C.aR)
x=y.p
j=A.c([A.aA(A.o(f.b,o,o,o,o,o,j,o,o,o),1,o)],x)
w=f.r==null
if(!w){v=A.d(d).ax
u=v.id
j.push(F.te(o,u==null?v.fy:u,D.fuF,o,C.bI))}j=A.an(j,C.y,o,C.r,C.u,0,o,o)
v=n.Q
u=v==null
if(u)t=o
else t=v.lm(A.d(d).ax.a===C.p?C.B:C.C,"monospace")
t=A.o(f.c+"\u2026",o,o,o,o,o,t,o,o,o)
s=A.c([],x)
for(r=f.d,q=r.length,p=0;p<r.length;r.length===q||(0,A.F)(r),++p)s.push(F.te(o,o,A.o(r[p]==="write"?"Write":"Read",o,o,o,o,o,o,o,o,o),o,C.bI))
s=A.i0(s,C.cN,0,8)
r=f.f
r=r==null?"Never used":"Last used "+this.aWf(r)
if(u)v=o
else v=v.U(A.d(d).ax.a===C.p?C.B:C.C)
x=A.c([j,C.ah,t,C.Q,s,C.Q,A.o(r,o,o,o,o,o,v,o,o,o)],x)
if(w)x.push(new A.em(C.dG,o,o,A.bx(D.a7c,new A.L("api-key-revoke-"+m,l),o,o,new B.aEd(this,d,e,f),o,o),o))
return A.fa(new A.X(C.aC,A.a2(x,C.S,o,C.r,C.u,0,C.x),o),k,new A.L("api-key-"+m,l),o,o,C.a4)},
aWf(d){var x,w=new A.aE(Date.now(),0,!1).d6().eD(d.d6()).a,v=C.f.ao(w,6e7)
if(v<1)return"just now"
x=C.f.ao(w,36e8)
if(x<1)return""+v+"m ago"
w=C.f.ao(w,864e8)
if(w<1)return""+x+"h ago"
return""+w+"d ago"},
Hp(d,e){return this.bdA(d,e)},
bdA(d,e){var x=0,w=A.m(y.H),v=this,u,t,s,r
var $async$Hp=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:t={}
s=$.ad()
r=t.a=t.b=!1
t.c=null
x=2
return A.e(A.cV(null,null,!0,null,new B.aEm(t,new A.bV(C.aK,s),e),d,null,!0,!0,y.S),$async$Hp)
case 2:u=g
x=(u!=null?d.e!=null:r)?3:4
break
case 3:e.bq($.aCt())
x=5
return A.e(v.bdK(d,u),$async$Hp)
case 5:case 4:return A.k(null,w)}})
return A.l($async$Hp,w)},
bdK(d,e){var x=null
return A.cV(x,x,!1,x,new B.aEp(d,e),d,x,!0,!0,y.H)},
HM(d,e,f){return this.aRz(d,e,f)},
aRz(d,e,f){var x=0,w=A.m(y.H),v=1,u=[],t,s
var $async$HM=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:x=4
return A.e(A.cV(null,null,!0,null,new B.aEc(f,d),d,null,!0,!0,y.y),$async$HM)
case 4:x=h===!0&&d.e!=null?2:3
break
case 2:v=6
x=9
return A.e(e.X($.c2T(),y.k).Z5(f.a),$async$HM)
case 9:e.bq($.aCt())
v=1
x=8
break
case 6:v=5
s=u.pop()
if(d.e!=null)d.S(y.q).f.aS(D.flt)
x=8
break
case 5:x=1
break
case 8:case 3:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$HM,w)}}
B.NP.prototype={
Xm(){var x=0,w=A.m(y.s),v,u=this,t,s,r
var $async$Xm=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
r=y.j
x=3
return A.e(u.a.aAh("list_api_keys",y.z),$async$Xm)
case 3:t=s.bX(r.a(e),new B.bfY(),y.I)
t=A.K(t,t.$ti.i("aj.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Xm,w)},
Vh(d,e){return this.bmw(d,e)},
bmw(d,e){var x=0,w=A.m(y.S),v,u=this,t,s,r,q,p,o,n
var $async$Vh=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:s=y.N
r=y.z
q=A
p=y.f
o=J
n=y.j
x=3
return A.e(u.a.d5("create_api_key",A.Q(["p_name",d,"p_scopes",e],s,r),r),$async$Vh)
case 3:r=q.aM(p.a(o.k0(n.a(g))),s,r)
s=A.U(r.h(0,"key_id"))
t=A.U(r.h(0,"api_key"))
A.U(r.h(0,"key_prefix"))
v=new B.acx(s,t)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Vh,w)},
Z5(d){return this.byd(d)},
byd(d){var x=0,w=A.m(y.H),v=this,u
var $async$Z5=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:u=y.z
x=2
return A.e(v.a.d5("revoke_api_key",A.Q(["p_id",d],y.N,u),u),$async$Z5)
case 2:return A.k(null,w)}})
return A.l($async$Z5,w)},
$icb4:1}
B.oV.prototype={
gbE(){return this.a}}
B.acx.prototype={
gbE(){return this.a}}
var z=a.updateTypes(["h(w<oV>)","oV(@)","NP(al)","N<w<oV>>(al)"])
B.aEr.prototype={
$1(d){return this.a.aO6(this.b,this.c,d)},
$S:z+0}
B.aEt.prototype={
$0(){return C.bc},
$S:24}
B.aEs.prototype={
$2(d,e){var x=null
return A.bR(A.a2(A.c([D.fv4,C.a0,A.d1(C.eE,D.fy8,new B.aEq(this.a),x)],y.p),C.y,x,C.r,C.W,0,C.x),x,x)},
$S:44}
B.aEq.prototype={
$0(){return this.a.bq($.aCt())},
$S:0}
B.aEu.prototype={
$0(){return this.a.Hp(this.b,this.c)},
$S:0}
B.aEd.prototype={
$0(){var x=this
return x.a.HM(x.b,x.c,x.d)},
$S:0}
B.aEm.prototype={
$1(d){return new A.mt(new B.aEl(this.a,this.b,this.c),null)},
$S:64}
B.aEl.prototype={
$2(d,e){var x,w=null,v=this.b,u=this.a,t=y.p,s=A.c([A.cX(w,C.as,!0,w,!0,C.D,w,A.d0(),v,w,w,w,w,w,2,D.e3q,C.T,!0,w,!0,w,!1,w,C.aP,w,w,w,D.fAw,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aO,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.af,w,C.aG,w,w,w,w),C.a0,E.c3R(C.aa,w,!0,D.fz5,w,D.frh,D.fsd,!0),E.c3R(C.aa,w,!0,D.fyB,new B.aEi(u,e),D.fs_,D.fsL,u.b)],t),r=u.c
if(r!=null){x=A.d(d).ok.Q
s.push(new A.X(I.ec,A.o(r,w,w,w,w,w,x==null?w:x.U(A.d(d).ax.fy),w,w,w),w))}s=A.a2(s,C.S,w,C.r,C.W,0,C.x)
r=u.a
x=A.bx(C.br,w,w,w,r?w:new B.aEj(d),w,w)
v=r?w:new B.aEk(u,v,e,this.c,d)
return A.dt(A.c([x,A.d1(r?C.eC:D.fuj,D.fzM,v,w)],t),s,D.fxO,D.fv0)},
$S:109}
B.aEi.prototype={
$1(d){return this.b.$1(new B.aEh(this.a,d))},
$S:129}
B.aEh.prototype={
$0(){return this.a.b=this.b===!0},
$S:0}
B.aEj.prototype={
$0(){return A.ao(this.a,!1).by()},
$S:0}
B.aEk.prototype={
$0(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$$0=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=C.o.aH(s.b.a.a)
if(J.aY(l)===0){s.c.$1(new B.aEe(s.a))
x=1
break}o=s.c
n=s.a
o.$1(new B.aEf(n))
u=4
r=A.c(["read"],y.T)
if(n.b)J.ds(r,"write")
q=r
x=7
return A.e(s.d.X($.c2T(),y.k).Vh(l,q),$async$$0)
case 7:p=e
r=s.e
if(r.e!=null)A.ao(r,!1).b1(p)
u=2
x=6
break
case 4:u=3
k=t.pop()
o.$1(new B.aEg(n))
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$0,w)},
$S:2}
B.aEe.prototype={
$0(){return this.a.c="Give the key a name."},
$S:0}
B.aEf.prototype={
$0(){var x=this.a
x.a=!0
x.c=null},
$S:0}
B.aEg.prototype={
$0(){var x=this.a
x.a=!1
x.c="Could not create the key. Try again."},
$S:0}
B.aEp.prototype={
$1(d){var x,w=null,v=A.d(this.a).ax.a===C.p?C.cP:C.cQ,u=A.b3(8),t=this.b,s=A.d(d).ok.z
s=s==null?w:s.V9("monospace")
u=A.ar(w,A.Nh(t.b,D.fBs,s),C.F,w,w,new A.aB(v,w,w,u,w,w,C.X),w,w,w,w,C.cS,w,w,w)
v=A.aT(H.CN,A.d(d).ax.fy,w,w,18)
s=A.d(d).ok.Q
x=y.p
s=A.a2(A.c([u,C.a0,A.an(A.c([v,C.b6,A.aA(A.o("You won't see this key again. Copy it now \u2014 it cannot be recovered later.",w,w,w,w,w,s==null?w:s.U(A.d(d).ax.fy),w,w,w),1,w)],x),C.y,w,C.r,C.u,0,w,w)],x),C.S,w,C.r,C.W,0,C.x)
return A.dt(A.c([A.pL(D.e1v,D.fAv,C.a7b,new B.aEn(t,d),w),A.d1(D.frl,D.fzE,new B.aEo(d),w)],x),s,D.fAM,D.ft7)},
$S:14}
B.aEn.prototype={
$0(){A.qt(new A.nQ(this.a.b))
this.b.S(y.q).f.aS(D.flO)},
$S:0}
B.aEo.prototype={
$0(){return A.ao(this.a,!1).by()},
$S:0}
B.aEc.prototype={
$1(d){var x=null,w=this.a
w=A.o("\u201c"+w.b+"\u201d ("+w.c+"\u2026) will stop working immediately. This cannot be undone.",x,x,x,x,x,x,x,x,x)
return A.dt(A.c([A.bx(D.fsq,x,x,x,new B.aEa(d),x,x),A.d1(D.a7c,D.fAO,new B.aEb(d),A.vH(A.d(this.b).ax.fy,x,x,x,x,x,x))],y.p),w,D.fz9,D.fv8)},
$S:14}
B.aEa.prototype={
$0(){return A.ao(this.a,!1).b1(!1)},
$S:0}
B.aEb.prototype={
$0(){return A.ao(this.a,!1).b1(!0)},
$S:0}
B.bfY.prototype={
$1(d){return B.crN(A.aM(y.f.a(d),y.N,y.z))},
$S:z+1}
B.bYt.prototype={
$1(d){return new B.NP(d.T($.dB(),y.A))},
$S:z+2}
B.bYu.prototype={
$1(d){d.T($.dA(),y.L)
return d.T($.c2T(),y.k).Xm()},
$S:z+3}
B.aE9.prototype={
$1(d){return A.U(d)},
$S:47};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.CL,A.bA)
w(A.ci,[B.aEr,B.aEm,B.aEi,B.aEp,B.aEc,B.bfY,B.bYt,B.bYu,B.aE9])
w(A.dj,[B.aEt,B.aEq,B.aEu,B.aEd,B.aEh,B.aEj,B.aEk,B.aEe,B.aEf,B.aEg,B.aEn,B.aEo,B.aEa,B.aEb])
w(A.dn,[B.aEs,B.aEl])
w(A.E,[B.NP,B.oV,B.acx])})()
A.cD(b.typeUniverse,JSON.parse('{"CL":{"bA":[],"O":[],"h":[]},"NP":{"cb4":[]}}'))
var y=(function rtii(){var x=A.J
return{I:x("oV"),k:x("cb4"),E:x("aS<w<oV>>"),L:x("aS<fW?>"),S:x("acx"),T:x("x<f>"),p:x("x<h>"),s:x("w<oV>"),j:x("w<@>"),f:x("ac<@,@>"),N:x("f"),A:x("h5"),O:x("L<f>"),q:x("h8"),y:x("B"),z:x("@"),H:x("~")}})();(function constants(){D.ajK=new A.ai(0,32,0,32)
D.e0_=new A.ah(61311,"MaterialIcons",null,!1)
D.e1v=new A.aL(D.e0_,null,null,null,null)
D.e3q=new A.co(null,null,null,"Key name",null,null,null,null,null,null,"e.g. Zapier integration",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.fuA=new A.a0("Could not revoke the key.",null,null,null,null,null,null,null,null,null,null)
D.flt=new A.d8(D.fuA,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.D,null)
D.ftO=new A.a0("API key copied.",null,null,null,null,null,null,null,null,null,null)
D.flO=new A.d8(D.ftO,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.D,null)
D.frh=new A.a0("List rooms and evidence (GET)",null,null,null,null,null,null,null,null,null,null)
D.fri=new A.a0("New key",null,null,null,null,null,null,null,null,null,null)
D.a7c=new A.a0("Revoke",null,null,null,null,null,null,null,null,null,null)
D.frl=new A.a0("I've saved it",null,null,null,null,null,null,null,null,null,null)
D.fs_=new A.a0("Create evidence metadata rows (POST)",null,null,null,null,null,null,null,null,null,null)
D.fsd=new A.a0("Read",null,null,null,null,null,null,null,null,null,null)
D.fsq=new A.a0("Keep key",null,null,null,null,null,null,null,null,null,null)
D.fsL=new A.a0("Write",null,null,null,null,null,null,null,null,null,null)
D.ft7=new A.a0("Copy your key",null,null,null,null,null,null,null,null,null,null)
D.fuj=new A.a0("Create key",null,null,null,null,null,null,null,null,null,null)
D.fuF=new A.a0("Revoked",null,null,null,null,null,null,null,null,null,null)
D.fv0=new A.a0("New API key",null,null,null,null,null,null,null,null,null,null)
D.fv4=new A.a0("Could not load your API keys.",null,null,null,null,null,null,null,null,null,null)
D.fv8=new A.a0("Revoke key?",null,null,null,null,null,null,null,null,null,null)
D.fxO=new A.L("api-keys-create-dialog",y.O)
D.fy7=new A.L("api-keys-new",y.O)
D.fy8=new A.L("api-keys-retry",y.O)
D.fyB=new A.L("api-keys-scope-write",y.O)
D.fz5=new A.L("api-keys-scope-read",y.O)
D.fz9=new A.L("api-keys-revoke-dialog",y.O)
D.fzE=new A.L("api-keys-one-time-done",y.O)
D.fzM=new A.L("api-keys-create-confirm",y.O)
D.fAv=new A.L("api-keys-copy",y.O)
D.fAw=new A.L("api-keys-name-field",y.O)
D.fAM=new A.L("api-keys-one-time",y.O)
D.fAO=new A.L("api-keys-revoke-confirm",y.O)
D.fBs=new A.L("api-keys-plaintext",y.O)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cUB","c2T",()=>A.ep(new B.bYt(),y.k))
x($,"cUC","aCt",()=>A.ls(new B.bYu(),y.s))})()};
(a=>{a["OewOm2FPbaDFolPxIy5VsKnI3OU="]=a.current})($__dart_deferred_initializers__);