((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,F,B={
cbc(){return new B.CL(null)},
CL:function CL(d){this.a=d},
aEt:function aEt(d,e,f){this.a=d
this.b=e
this.c=f},
aEv:function aEv(){},
aEu:function aEu(d){this.a=d},
aEs:function aEs(d){this.a=d},
aEw:function aEw(d,e,f){this.a=d
this.b=e
this.c=f},
aEf:function aEf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aEo:function aEo(d,e,f){this.a=d
this.b=e
this.c=f},
aEn:function aEn(d,e,f){this.a=d
this.b=e
this.c=f},
aEk:function aEk(d,e){this.a=d
this.b=e},
aEj:function aEj(d,e){this.a=d
this.b=e},
aEl:function aEl(d){this.a=d},
aEm:function aEm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aEg:function aEg(d){this.a=d},
aEh:function aEh(d){this.a=d},
aEi:function aEi(d){this.a=d},
aEr:function aEr(d,e){this.a=d
this.b=e},
aEp:function aEp(d,e){this.a=d
this.b=e},
aEq:function aEq(d){this.a=d},
aEe:function aEe(d,e){this.a=d
this.b=e},
aEc:function aEc(d){this.a=d},
aEd:function aEd(d){this.a=d},
NQ:function NQ(d){this.a=d},
bg_:function bg_(){},
bYA:function bYA(){},
bYB:function bYB(){},
crU(d){var x,w="last_used_at",v="revoked_at",u=A.U(d.h(0,"id")),t=A.U(d.h(0,"name")),s=A.U(d.h(0,"key_prefix")),r=J.bX(y.j.a(d.h(0,"scopes")),new B.aEb(),y.N)
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
aEb:function aEb(){},
acz:function acz(d,e){this.a=d
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
cc(d,e){var x=null,w=e.T($.aCv(),y.E)
return A.hx(A.lY(x,x,x,x,x,x,x,x,C.a7k),x,A.dK(w,new B.aEt(this,d,e),new B.aEu(e),new B.aEv(),!1,!0,!1),x,G.c4G(C.p6,D.fyf,D.frq,new B.aEw(this,d,e)))},
aO7(d,e,f){var x,w=null,v=A.d(d).ok,u=A.d(d).ax.a===C.p?C.bQ:C.M,t=v.Q
if(t==null)t=w
else t=t.U(A.d(d).ax.a===C.p?C.B:C.C)
u=A.c([A.fa(new A.X(C.aC,A.o("API keys authenticate against the public API gateway (x-api-key header). Keys inherit your room access; read scope allows GET requests, write scope additionally allows creating evidence metadata. Rate limit: 100 requests/minute per key.",w,w,w,w,w,t,w,w,w),w),u,w,w,w,C.a4),C.aV],y.p)
t=J.aw(f)
if(t.gW(f)){x=v.z
if(x==null)x=w
else x=x.U(A.d(d).ax.a===C.p?C.B:C.C)
u.push(A.bR(new A.X(D.ajM,A.o("No API keys yet.",w,w,w,w,w,x,w,w,w),w),w,w))}for(t=t.gV(f);t.q();)u.push(this.b3f(d,e,t.gI()))
return A.hh(u,w,C.bo,w,C.a6,!1)},
b3f(d,e,f){var x,w,v,u,t,s,r,q,p,o=null,n=A.d(d).ok,m=f.a,l=y.O,k=A.d(d).ax.a===C.p?C.bQ:C.M,j=n.x
j=j==null?o:j.cT(C.aR)
x=y.p
j=A.c([A.ay(A.o(f.b,o,o,o,o,o,j,o,o,o),1,o)],x)
w=f.r==null
if(!w){v=A.d(d).ax
u=v.id
j.push(F.tf(o,u==null?v.fy:u,D.fuM,o,C.bK))}j=A.an(j,C.y,o,C.r,C.u,0,o,o)
v=n.Q
u=v==null
if(u)t=o
else t=v.lm(A.d(d).ax.a===C.p?C.B:C.C,"monospace")
t=A.o(f.c+"\u2026",o,o,o,o,o,t,o,o,o)
s=A.c([],x)
for(r=f.d,q=r.length,p=0;p<r.length;r.length===q||(0,A.F)(r),++p)s.push(F.tf(o,o,A.o(r[p]==="write"?"Write":"Read",o,o,o,o,o,o,o,o,o),o,C.bK))
s=A.hB(s,C.cF,0,8)
r=f.f
r=r==null?"Never used":"Last used "+this.aWh(r)
if(u)v=o
else v=v.U(A.d(d).ax.a===C.p?C.B:C.C)
x=A.c([j,C.ah,t,C.Q,s,C.Q,A.o(r,o,o,o,o,o,v,o,o,o)],x)
if(w)x.push(new A.er(C.dG,o,o,A.bx(D.a7c,new A.L("api-key-revoke-"+m,l),o,o,new B.aEf(this,d,e,f),o,o),o))
return A.fa(new A.X(C.aC,A.a2(x,C.S,o,C.r,C.u,0,C.x),o),k,new A.L("api-key-"+m,l),o,o,C.a4)},
aWh(d){var x,w=new A.aE(Date.now(),0,!1).d6().eD(d.d6()).a,v=C.f.ao(w,6e7)
if(v<1)return"just now"
x=C.f.ao(w,36e8)
if(x<1)return""+v+"m ago"
w=C.f.ao(w,864e8)
if(w<1)return""+x+"h ago"
return""+w+"d ago"},
Hp(d,e){return this.bdD(d,e)},
bdD(d,e){var x=0,w=A.m(y.H),v=this,u,t,s,r
var $async$Hp=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:t={}
s=$.ae()
r=t.a=t.b=!1
t.c=null
x=2
return A.e(A.cV(null,null,!0,null,new B.aEo(t,new A.bV(C.aK,s),e),d,null,!0,!0,y.S),$async$Hp)
case 2:u=g
x=(u!=null?d.e!=null:r)?3:4
break
case 3:e.bq($.aCv())
x=5
return A.e(v.bdN(d,u),$async$Hp)
case 5:case 4:return A.k(null,w)}})
return A.l($async$Hp,w)},
bdN(d,e){var x=null
return A.cV(x,x,!1,x,new B.aEr(d,e),d,x,!0,!0,y.H)},
HM(d,e,f){return this.aRB(d,e,f)},
aRB(d,e,f){var x=0,w=A.m(y.H),v=1,u=[],t,s
var $async$HM=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:x=4
return A.e(A.cV(null,null,!0,null,new B.aEe(f,d),d,null,!0,!0,y.y),$async$HM)
case 4:x=h===!0&&d.e!=null?2:3
break
case 2:v=6
x=9
return A.e(e.X($.c3_(),y.k).Z6(f.a),$async$HM)
case 9:e.bq($.aCv())
v=1
x=8
break
case 6:v=5
s=u.pop()
if(d.e!=null)d.S(y.q).f.aS(D.flB)
x=8
break
case 5:x=1
break
case 8:case 3:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$HM,w)}}
B.NQ.prototype={
Xn(){var x=0,w=A.m(y.s),v,u=this,t,s,r
var $async$Xn=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
r=y.j
x=3
return A.e(u.a.aAi("list_api_keys",y.z),$async$Xn)
case 3:t=s.bX(r.a(e),new B.bg_(),y.I)
t=A.K(t,t.$ti.i("aj.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Xn,w)},
Vi(d,e){return this.bmz(d,e)},
bmz(d,e){var x=0,w=A.m(y.S),v,u=this,t,s,r,q,p,o,n
var $async$Vi=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:s=y.N
r=y.z
q=A
p=y.f
o=J
n=y.j
x=3
return A.e(u.a.d5("create_api_key",A.Q(["p_name",d,"p_scopes",e],s,r),r),$async$Vi)
case 3:r=q.aM(p.a(o.k0(n.a(g))),s,r)
s=A.U(r.h(0,"key_id"))
t=A.U(r.h(0,"api_key"))
A.U(r.h(0,"key_prefix"))
v=new B.acz(s,t)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Vi,w)},
Z6(d){return this.byg(d)},
byg(d){var x=0,w=A.m(y.H),v=this,u
var $async$Z6=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:u=y.z
x=2
return A.e(v.a.d5("revoke_api_key",A.Q(["p_id",d],y.N,u),u),$async$Z6)
case 2:return A.k(null,w)}})
return A.l($async$Z6,w)},
$icbb:1}
B.oV.prototype={
gbE(){return this.a}}
B.acz.prototype={
gbE(){return this.a}}
var z=a.updateTypes(["h(w<oV>)","oV(@)","NQ(al)","N<w<oV>>(al)"])
B.aEt.prototype={
$1(d){return this.a.aO7(this.b,this.c,d)},
$S:z+0}
B.aEv.prototype={
$0(){return C.bd},
$S:24}
B.aEu.prototype={
$2(d,e){var x=null
return A.bR(A.a2(A.c([D.fvb,C.Z,A.d_(C.eD,D.fyg,new B.aEs(this.a),x)],y.p),C.y,x,C.r,C.W,0,C.x),x,x)},
$S:44}
B.aEs.prototype={
$0(){return this.a.bq($.aCv())},
$S:0}
B.aEw.prototype={
$0(){return this.a.Hp(this.b,this.c)},
$S:0}
B.aEf.prototype={
$0(){var x=this
return x.a.HM(x.b,x.c,x.d)},
$S:0}
B.aEo.prototype={
$1(d){return new A.mt(new B.aEn(this.a,this.b,this.c),null)},
$S:64}
B.aEn.prototype={
$2(d,e){var x,w=null,v=this.b,u=this.a,t=y.p,s=A.c([A.cX(w,C.as,!0,w,!0,C.D,w,A.d1(),v,w,w,w,w,w,2,D.e3r,C.T,!0,w,!0,w,!1,w,C.aP,w,w,w,D.fAG,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aO,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.af,w,C.aG,w,w,w,w),C.Z,E.c3Y(C.aa,w,!0,D.fze,w,D.frp,D.fsl,!0),E.c3Y(C.aa,w,!0,D.fyJ,new B.aEk(u,e),D.fs7,D.fsT,u.b)],t),r=u.c
if(r!=null){x=A.d(d).ok.Q
s.push(new A.X(I.ec,A.o(r,w,w,w,w,w,x==null?w:x.U(A.d(d).ax.fy),w,w,w),w))}s=A.a2(s,C.S,w,C.r,C.W,0,C.x)
r=u.a
x=A.bx(C.br,w,w,w,r?w:new B.aEl(d),w,w)
v=r?w:new B.aEm(u,v,e,this.c,d)
return A.dt(A.c([x,A.d_(r?C.eB:D.fuq,D.fzW,v,w)],t),s,D.fxV,D.fv7)},
$S:109}
B.aEk.prototype={
$1(d){return this.b.$1(new B.aEj(this.a,d))},
$S:129}
B.aEj.prototype={
$0(){return this.a.b=this.b===!0},
$S:0}
B.aEl.prototype={
$0(){return A.ao(this.a,!1).by()},
$S:0}
B.aEm.prototype={
$0(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$$0=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=C.n.aH(s.b.a.a)
if(J.aY(l)===0){s.c.$1(new B.aEg(s.a))
x=1
break}o=s.c
n=s.a
o.$1(new B.aEh(n))
u=4
r=A.c(["read"],y.T)
if(n.b)J.ds(r,"write")
q=r
x=7
return A.e(s.d.X($.c3_(),y.k).Vi(l,q),$async$$0)
case 7:p=e
r=s.e
if(r.e!=null)A.ao(r,!1).b1(p)
u=2
x=6
break
case 4:u=3
k=t.pop()
o.$1(new B.aEi(n))
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$0,w)},
$S:2}
B.aEg.prototype={
$0(){return this.a.c="Give the key a name."},
$S:0}
B.aEh.prototype={
$0(){var x=this.a
x.a=!0
x.c=null},
$S:0}
B.aEi.prototype={
$0(){var x=this.a
x.a=!1
x.c="Could not create the key. Try again."},
$S:0}
B.aEr.prototype={
$1(d){var x,w=null,v=A.d(this.a).ax.a===C.p?C.cQ:C.cR,u=A.b0(8),t=this.b,s=A.d(d).ok.z
s=s==null?w:s.Va("monospace")
u=A.aq(w,A.Nj(t.b,D.fBC,s),C.F,w,w,new A.aB(v,w,w,u,w,w,C.X),w,w,w,w,C.cT,w,w,w)
v=A.aS(H.CM,A.d(d).ax.fy,w,w,18)
s=A.d(d).ok.Q
x=y.p
s=A.a2(A.c([u,C.Z,A.an(A.c([v,C.b6,A.ay(A.o("You won't see this key again. Copy it now \u2014 it cannot be recovered later.",w,w,w,w,w,s==null?w:s.U(A.d(d).ax.fy),w,w,w),1,w)],x),C.y,w,C.r,C.u,0,w,w)],x),C.S,w,C.r,C.W,0,C.x)
return A.dt(A.c([A.pL(D.e1w,D.fAF,C.a7b,new B.aEp(t,d),w),A.d_(D.frt,D.fzO,new B.aEq(d),w)],x),s,D.fAW,D.ftf)},
$S:14}
B.aEp.prototype={
$0(){A.qu(new A.nQ(this.a.b))
this.b.S(y.q).f.aS(D.flW)},
$S:0}
B.aEq.prototype={
$0(){return A.ao(this.a,!1).by()},
$S:0}
B.aEe.prototype={
$1(d){var x=null,w=this.a
w=A.o("\u201c"+w.b+"\u201d ("+w.c+"\u2026) will stop working immediately. This cannot be undone.",x,x,x,x,x,x,x,x,x)
return A.dt(A.c([A.bx(D.fsy,x,x,x,new B.aEc(d),x,x),A.d_(D.a7c,D.fAY,new B.aEd(d),A.vH(A.d(this.b).ax.fy,x,x,x,x,x,x))],y.p),w,D.fzi,D.fvf)},
$S:14}
B.aEc.prototype={
$0(){return A.ao(this.a,!1).b1(!1)},
$S:0}
B.aEd.prototype={
$0(){return A.ao(this.a,!1).b1(!0)},
$S:0}
B.bg_.prototype={
$1(d){return B.crU(A.aM(y.f.a(d),y.N,y.z))},
$S:z+1}
B.bYA.prototype={
$1(d){return new B.NQ(d.T($.dB(),y.A))},
$S:z+2}
B.bYB.prototype={
$1(d){d.T($.dA(),y.L)
return d.T($.c3_(),y.k).Xn()},
$S:z+3}
B.aEb.prototype={
$1(d){return A.U(d)},
$S:47};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.CL,A.bA)
w(A.ci,[B.aEt,B.aEo,B.aEk,B.aEr,B.aEe,B.bg_,B.bYA,B.bYB,B.aEb])
w(A.di,[B.aEv,B.aEs,B.aEw,B.aEf,B.aEj,B.aEl,B.aEm,B.aEg,B.aEh,B.aEi,B.aEp,B.aEq,B.aEc,B.aEd])
w(A.dn,[B.aEu,B.aEn])
w(A.E,[B.NQ,B.oV,B.acz])})()
A.cD(b.typeUniverse,JSON.parse('{"CL":{"bA":[],"O":[],"h":[]},"NQ":{"cbb":[]}}'))
var y=(function rtii(){var x=A.J
return{I:x("oV"),k:x("cbb"),E:x("aT<w<oV>>"),L:x("aT<fV?>"),S:x("acz"),T:x("x<f>"),p:x("x<h>"),s:x("w<oV>"),j:x("w<@>"),f:x("ac<@,@>"),N:x("f"),A:x("h4"),O:x("L<f>"),q:x("h7"),y:x("B"),z:x("@"),H:x("~")}})();(function constants(){D.ajM=new A.ai(0,32,0,32)
D.e00=new A.ah(61311,"MaterialIcons",null,!1)
D.e1w=new A.aL(D.e00,null,null,null,null)
D.e3r=new A.co(null,null,null,"Key name",null,null,null,null,null,null,"e.g. Zapier integration",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.fuH=new A.a0("Could not revoke the key.",null,null,null,null,null,null,null,null,null,null)
D.flB=new A.d8(D.fuH,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.D,null)
D.ftV=new A.a0("API key copied.",null,null,null,null,null,null,null,null,null,null)
D.flW=new A.d8(D.ftV,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.D,null)
D.frp=new A.a0("List rooms and evidence (GET)",null,null,null,null,null,null,null,null,null,null)
D.frq=new A.a0("New key",null,null,null,null,null,null,null,null,null,null)
D.a7c=new A.a0("Revoke",null,null,null,null,null,null,null,null,null,null)
D.frt=new A.a0("I've saved it",null,null,null,null,null,null,null,null,null,null)
D.fs7=new A.a0("Create evidence metadata rows (POST)",null,null,null,null,null,null,null,null,null,null)
D.fsl=new A.a0("Read",null,null,null,null,null,null,null,null,null,null)
D.fsy=new A.a0("Keep key",null,null,null,null,null,null,null,null,null,null)
D.fsT=new A.a0("Write",null,null,null,null,null,null,null,null,null,null)
D.ftf=new A.a0("Copy your key",null,null,null,null,null,null,null,null,null,null)
D.fuq=new A.a0("Create key",null,null,null,null,null,null,null,null,null,null)
D.fuM=new A.a0("Revoked",null,null,null,null,null,null,null,null,null,null)
D.fv7=new A.a0("New API key",null,null,null,null,null,null,null,null,null,null)
D.fvb=new A.a0("Could not load your API keys.",null,null,null,null,null,null,null,null,null,null)
D.fvf=new A.a0("Revoke key?",null,null,null,null,null,null,null,null,null,null)
D.fxV=new A.L("api-keys-create-dialog",y.O)
D.fyf=new A.L("api-keys-new",y.O)
D.fyg=new A.L("api-keys-retry",y.O)
D.fyJ=new A.L("api-keys-scope-write",y.O)
D.fze=new A.L("api-keys-scope-read",y.O)
D.fzi=new A.L("api-keys-revoke-dialog",y.O)
D.fzO=new A.L("api-keys-one-time-done",y.O)
D.fzW=new A.L("api-keys-create-confirm",y.O)
D.fAF=new A.L("api-keys-copy",y.O)
D.fAG=new A.L("api-keys-name-field",y.O)
D.fAW=new A.L("api-keys-one-time",y.O)
D.fAY=new A.L("api-keys-revoke-confirm",y.O)
D.fBC=new A.L("api-keys-plaintext",y.O)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cUK","c3_",()=>A.eo(new B.bYA(),y.k))
x($,"cUL","aCv",()=>A.ls(new B.bYB(),y.s))})()};
(a=>{a["vlEUBLBSKe7jyYyfuQ/yT+gbFlo="]=a.current})($__dart_deferred_initializers__);