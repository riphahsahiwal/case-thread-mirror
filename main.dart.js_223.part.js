((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,F,B={
cb4(){return new B.CN(null)},
CN:function CN(d){this.a=d},
aEs:function aEs(d,e,f){this.a=d
this.b=e
this.c=f},
aEu:function aEu(){},
aEt:function aEt(d){this.a=d},
aEr:function aEr(d){this.a=d},
aEv:function aEv(d,e,f){this.a=d
this.b=e
this.c=f},
aEe:function aEe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aEn:function aEn(d,e,f){this.a=d
this.b=e
this.c=f},
aEm:function aEm(d,e,f){this.a=d
this.b=e
this.c=f},
aEj:function aEj(d,e){this.a=d
this.b=e},
aEi:function aEi(d,e){this.a=d
this.b=e},
aEk:function aEk(d){this.a=d},
aEl:function aEl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aEf:function aEf(d){this.a=d},
aEg:function aEg(d){this.a=d},
aEh:function aEh(d){this.a=d},
aEq:function aEq(d,e){this.a=d
this.b=e},
aEo:function aEo(d,e){this.a=d
this.b=e},
aEp:function aEp(d){this.a=d},
aEd:function aEd(d,e){this.a=d
this.b=e},
aEb:function aEb(d){this.a=d},
aEc:function aEc(d){this.a=d},
NP:function NP(d){this.a=d},
bfR:function bfR(){},
bYs:function bYs(){},
bYt:function bYt(){},
crM(d){var x,w="last_used_at",v="revoked_at",u=A.U(d.h(0,"id")),t=A.U(d.h(0,"name")),s=A.U(d.h(0,"key_prefix")),r=J.bX(y.j.a(d.h(0,"scopes")),new B.aEa(),y.N)
r=A.K(r,r.$ti.i("aj.E"))
A.dX(A.U(d.h(0,"created_at")))
x=d.h(0,w)==null?null:A.dX(A.U(d.h(0,w)))
return new B.oT(u,t,s,r,x,d.h(0,v)==null?null:A.dX(A.U(d.h(0,v))))},
oT:function oT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i},
aEa:function aEa(){},
acx:function acx(d,e){this.a=d
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
B.CN.prototype={
cb(d,e){var x=null,w=e.S($.aCu(),y.E)
return A.hy(A.lY(x,x,x,x,x,x,x,x,C.a7k),x,A.dK(w,new B.aEs(this,d,e),new B.aEt(e),new B.aEu(),!1,!0,!1),x,G.c4y(C.p5,D.fy9,D.frl,new B.aEv(this,d,e)))},
aO1(d,e,f){var x,w=null,v=A.d(d).ok,u=A.d(d).ax.a===C.p?C.bP:C.M,t=v.Q
if(t==null)t=w
else t=t.U(A.d(d).ax.a===C.p?C.B:C.C)
u=A.c([A.f9(new A.X(C.aB,A.o("API keys authenticate against the public API gateway (x-api-key header). Keys inherit your room access; read scope allows GET requests, write scope additionally allows creating evidence metadata. Rate limit: 100 requests/minute per key.",w,w,w,w,w,t,w,w,w),w),u,w,w,w,C.a4),C.aY],y.p)
t=J.aw(f)
if(t.gW(f)){x=v.z
if(x==null)x=w
else x=x.U(A.d(d).ax.a===C.p?C.B:C.C)
u.push(A.bS(new A.X(D.ajK,A.o("No API keys yet.",w,w,w,w,w,x,w,w,w),w),w,w))}for(t=t.gV(f);t.q();)u.push(this.b36(d,e,t.gI()))
return A.fN(u,w,C.bq,w,C.a6,!1)},
b36(d,e,f){var x,w,v,u,t,s,r,q,p,o=null,n=A.d(d).ok,m=f.a,l=y.O,k=A.d(d).ax.a===C.p?C.bP:C.M,j=n.x
j=j==null?o:j.cT(C.aR)
x=y.p
j=A.c([A.aA(A.o(f.b,o,o,o,o,o,j,o,o,o),1,o)],x)
w=f.r==null
if(!w){v=A.d(d).ax
u=v.id
j.push(F.td(o,u==null?v.fy:u,D.fuH,o,C.bI))}j=A.an(j,C.y,o,C.r,C.u,0,o,o)
v=n.Q
u=v==null
if(u)t=o
else t=v.lm(A.d(d).ax.a===C.p?C.B:C.C,"monospace")
t=A.o(f.c+"\u2026",o,o,o,o,o,t,o,o,o)
s=A.c([],x)
for(r=f.d,q=r.length,p=0;p<r.length;r.length===q||(0,A.E)(r),++p)s.push(F.td(o,o,A.o(r[p]==="write"?"Write":"Read",o,o,o,o,o,o,o,o,o),o,C.bI))
s=A.i0(s,C.cN,0,8)
r=f.f
r=r==null?"Never used":"Last used "+this.aW8(r)
if(u)v=o
else v=v.U(A.d(d).ax.a===C.p?C.B:C.C)
x=A.c([j,C.ak,t,C.Q,s,C.Q,A.o(r,o,o,o,o,o,v,o,o,o)],x)
if(w)x.push(new A.em(C.dG,o,o,A.bz(D.a7c,new A.L("api-key-revoke-"+m,l),o,o,new B.aEe(this,d,e,f),o,o),o))
return A.f9(new A.X(C.aB,A.a2(x,C.S,o,C.r,C.u,0,C.x),o),k,new A.L("api-key-"+m,l),o,o,C.a4)},
aW8(d){var x,w=new A.aE(Date.now(),0,!1).d6().eD(d.d6()).a,v=C.f.ao(w,6e7)
if(v<1)return"just now"
x=C.f.ao(w,36e8)
if(x<1)return""+v+"m ago"
w=C.f.ao(w,864e8)
if(w<1)return""+x+"h ago"
return""+w+"d ago"},
Hq(d,e){return this.bdt(d,e)},
bdt(d,e){var x=0,w=A.m(y.H),v=this,u,t,s,r
var $async$Hq=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:t={}
s=$.ad()
r=t.a=t.b=!1
t.c=null
x=2
return A.e(A.cV(null,null,!0,null,new B.aEn(t,new A.bV(C.aK,s),e),d,null,!0,!0,y.S),$async$Hq)
case 2:u=g
x=(u!=null?d.e!=null:r)?3:4
break
case 3:e.bq($.aCu())
x=5
return A.e(v.bdD(d,u),$async$Hq)
case 5:case 4:return A.k(null,w)}})
return A.l($async$Hq,w)},
bdD(d,e){var x=null
return A.cV(x,x,!1,x,new B.aEq(d,e),d,x,!0,!0,y.H)},
HN(d,e,f){return this.aRu(d,e,f)},
aRu(d,e,f){var x=0,w=A.m(y.H),v=1,u=[],t,s
var $async$HN=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:x=4
return A.e(A.cV(null,null,!0,null,new B.aEd(f,d),d,null,!0,!0,y.y),$async$HN)
case 4:x=h===!0&&d.e!=null?2:3
break
case 2:v=6
x=9
return A.e(e.X($.c2R(),y.k).Z6(f.a),$async$HN)
case 9:e.bq($.aCu())
v=1
x=8
break
case 6:v=5
s=u.pop()
if(d.e!=null)d.T(y.q).f.aS(D.flw)
x=8
break
case 5:x=1
break
case 8:case 3:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$HN,w)}}
B.NP.prototype={
Xn(){var x=0,w=A.m(y.s),v,u=this,t,s,r
var $async$Xn=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
r=y.j
x=3
return A.e(u.a.aAc("list_api_keys",y.z),$async$Xn)
case 3:t=s.bX(r.a(e),new B.bfR(),y.I)
t=A.K(t,t.$ti.i("aj.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Xn,w)},
Vi(d,e){return this.bmq(d,e)},
bmq(d,e){var x=0,w=A.m(y.S),v,u=this,t,s,r,q,p,o,n
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
v=new B.acx(s,t)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Vi,w)},
Z6(d){return this.by7(d)},
by7(d){var x=0,w=A.m(y.H),v=this,u
var $async$Z6=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:u=y.z
x=2
return A.e(v.a.d5("revoke_api_key",A.Q(["p_id",d],y.N,u),u),$async$Z6)
case 2:return A.k(null,w)}})
return A.l($async$Z6,w)},
$icb3:1}
B.oT.prototype={
gbE(){return this.a}}
B.acx.prototype={
gbE(){return this.a}}
var z=a.updateTypes(["h(w<oT>)","oT(@)","NP(al)","N<w<oT>>(al)"])
B.aEs.prototype={
$1(d){return this.a.aO1(this.b,this.c,d)},
$S:z+0}
B.aEu.prototype={
$0(){return C.bc},
$S:24}
B.aEt.prototype={
$2(d,e){var x=null
return A.bS(A.a2(A.c([D.fv6,C.a0,A.d1(C.eE,D.fya,new B.aEr(this.a),x)],y.p),C.y,x,C.r,C.W,0,C.x),x,x)},
$S:40}
B.aEr.prototype={
$0(){return this.a.bq($.aCu())},
$S:0}
B.aEv.prototype={
$0(){return this.a.Hq(this.b,this.c)},
$S:0}
B.aEe.prototype={
$0(){var x=this
return x.a.HN(x.b,x.c,x.d)},
$S:0}
B.aEn.prototype={
$1(d){return new A.ms(new B.aEm(this.a,this.b,this.c),null)},
$S:67}
B.aEm.prototype={
$2(d,e){var x,w=null,v=this.b,u=this.a,t=y.p,s=A.c([A.cX(w,C.as,!0,w,!0,C.D,w,A.d0(),v,w,w,w,w,w,2,D.e3t,C.T,!0,w,!0,w,!1,w,C.aP,w,w,w,D.fAy,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aO,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.af,w,C.aG,w,w,w,w),C.a0,E.c3P(C.aa,w,!0,D.fz7,w,D.frk,D.fsg,!0),E.c3P(C.aa,w,!0,D.fyD,new B.aEj(u,e),D.fs2,D.fsO,u.b)],t),r=u.c
if(r!=null){x=A.d(d).ok.Q
s.push(new A.X(I.ec,A.o(r,w,w,w,w,w,x==null?w:x.U(A.d(d).ax.fy),w,w,w),w))}s=A.a2(s,C.S,w,C.r,C.W,0,C.x)
r=u.a
x=A.bz(C.br,w,w,w,r?w:new B.aEk(d),w,w)
v=r?w:new B.aEl(u,v,e,this.c,d)
return A.ds(A.c([x,A.d1(r?C.eC:D.fum,D.fzO,v,w)],t),s,D.fxQ,D.fv2)},
$S:103}
B.aEj.prototype={
$1(d){return this.b.$1(new B.aEi(this.a,d))},
$S:134}
B.aEi.prototype={
$0(){return this.a.b=this.b===!0},
$S:0}
B.aEk.prototype={
$0(){return A.ao(this.a,!1).by()},
$S:0}
B.aEl.prototype={
$0(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$$0=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=C.o.aI(s.b.a.a)
if(J.aY(l)===0){s.c.$1(new B.aEf(s.a))
x=1
break}o=s.c
n=s.a
o.$1(new B.aEg(n))
u=4
r=A.c(["read"],y.T)
if(n.b)J.dr(r,"write")
q=r
x=7
return A.e(s.d.X($.c2R(),y.k).Vi(l,q),$async$$0)
case 7:p=e
r=s.e
if(r.e!=null)A.ao(r,!1).b1(p)
u=2
x=6
break
case 4:u=3
k=t.pop()
o.$1(new B.aEh(n))
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$0,w)},
$S:2}
B.aEf.prototype={
$0(){return this.a.c="Give the key a name."},
$S:0}
B.aEg.prototype={
$0(){var x=this.a
x.a=!0
x.c=null},
$S:0}
B.aEh.prototype={
$0(){var x=this.a
x.a=!1
x.c="Could not create the key. Try again."},
$S:0}
B.aEq.prototype={
$1(d){var x,w=null,v=A.d(this.a).ax.a===C.p?C.cP:C.cQ,u=A.b3(8),t=this.b,s=A.d(d).ok.z
s=s==null?w:s.Va("monospace")
u=A.ar(w,A.Nh(t.b,D.fBu,s),C.F,w,w,new A.aB(v,w,w,u,w,w,C.X),w,w,w,w,C.cS,w,w,w)
v=A.aT(H.CM,A.d(d).ax.fy,w,w,18)
s=A.d(d).ok.Q
x=y.p
s=A.a2(A.c([u,C.a0,A.an(A.c([v,C.b6,A.aA(A.o("You won't see this key again. Copy it now \u2014 it cannot be recovered later.",w,w,w,w,w,s==null?w:s.U(A.d(d).ax.fy),w,w,w),1,w)],x),C.y,w,C.r,C.u,0,w,w)],x),C.S,w,C.r,C.W,0,C.x)
return A.ds(A.c([A.pJ(D.e1y,D.fAx,C.a7b,new B.aEo(t,d),w),A.d1(D.fro,D.fzG,new B.aEp(d),w)],x),s,D.fAO,D.fta)},
$S:14}
B.aEo.prototype={
$0(){A.qr(new A.nQ(this.a.b))
this.b.T(y.q).f.aS(D.flR)},
$S:0}
B.aEp.prototype={
$0(){return A.ao(this.a,!1).by()},
$S:0}
B.aEd.prototype={
$1(d){var x=null,w=this.a
w=A.o("\u201c"+w.b+"\u201d ("+w.c+"\u2026) will stop working immediately. This cannot be undone.",x,x,x,x,x,x,x,x,x)
return A.ds(A.c([A.bz(D.fst,x,x,x,new B.aEb(d),x,x),A.d1(D.a7c,D.fAQ,new B.aEc(d),A.vG(A.d(this.b).ax.fy,x,x,x,x,x,x))],y.p),w,D.fzb,D.fva)},
$S:14}
B.aEb.prototype={
$0(){return A.ao(this.a,!1).b1(!1)},
$S:0}
B.aEc.prototype={
$0(){return A.ao(this.a,!1).b1(!0)},
$S:0}
B.bfR.prototype={
$1(d){return B.crM(A.aM(y.f.a(d),y.N,y.z))},
$S:z+1}
B.bYs.prototype={
$1(d){return new B.NP(d.S($.dB(),y.A))},
$S:z+2}
B.bYt.prototype={
$1(d){d.S($.dA(),y.L)
return d.S($.c2R(),y.k).Xn()},
$S:z+3}
B.aEa.prototype={
$1(d){return A.U(d)},
$S:49};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.CN,A.by)
w(A.cg,[B.aEs,B.aEn,B.aEj,B.aEq,B.aEd,B.bfR,B.bYs,B.bYt,B.aEa])
w(A.di,[B.aEu,B.aEr,B.aEv,B.aEe,B.aEi,B.aEk,B.aEl,B.aEf,B.aEg,B.aEh,B.aEo,B.aEp,B.aEb,B.aEc])
w(A.dm,[B.aEt,B.aEm])
w(A.D,[B.NP,B.oT,B.acx])})()
A.cD(b.typeUniverse,JSON.parse('{"CN":{"by":[],"O":[],"h":[]},"NP":{"cb3":[]}}'))
var y=(function rtii(){var x=A.J
return{I:x("oT"),k:x("cb3"),E:x("aR<w<oT>>"),L:x("aR<fW?>"),S:x("acx"),T:x("x<f>"),p:x("x<h>"),s:x("w<oT>"),j:x("w<@>"),f:x("ac<@,@>"),N:x("f"),A:x("h5"),O:x("L<f>"),q:x("h8"),y:x("B"),z:x("@"),H:x("~")}})();(function constants(){D.ajK=new A.ai(0,32,0,32)
D.e0_=new A.ag(61311,"MaterialIcons",null,!1)
D.e1y=new A.aL(D.e0_,null,null,null,null)
D.e3t=new A.cm(null,null,null,"Key name",null,null,null,null,null,null,"e.g. Zapier integration",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.fuC=new A.a0("Could not revoke the key.",null,null,null,null,null,null,null,null,null,null)
D.flw=new A.d8(D.fuC,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.D,null)
D.ftR=new A.a0("API key copied.",null,null,null,null,null,null,null,null,null,null)
D.flR=new A.d8(D.ftR,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.D,null)
D.frk=new A.a0("List rooms and evidence (GET)",null,null,null,null,null,null,null,null,null,null)
D.frl=new A.a0("New key",null,null,null,null,null,null,null,null,null,null)
D.a7c=new A.a0("Revoke",null,null,null,null,null,null,null,null,null,null)
D.fro=new A.a0("I've saved it",null,null,null,null,null,null,null,null,null,null)
D.fs2=new A.a0("Create evidence metadata rows (POST)",null,null,null,null,null,null,null,null,null,null)
D.fsg=new A.a0("Read",null,null,null,null,null,null,null,null,null,null)
D.fst=new A.a0("Keep key",null,null,null,null,null,null,null,null,null,null)
D.fsO=new A.a0("Write",null,null,null,null,null,null,null,null,null,null)
D.fta=new A.a0("Copy your key",null,null,null,null,null,null,null,null,null,null)
D.fum=new A.a0("Create key",null,null,null,null,null,null,null,null,null,null)
D.fuH=new A.a0("Revoked",null,null,null,null,null,null,null,null,null,null)
D.fv2=new A.a0("New API key",null,null,null,null,null,null,null,null,null,null)
D.fv6=new A.a0("Could not load your API keys.",null,null,null,null,null,null,null,null,null,null)
D.fva=new A.a0("Revoke key?",null,null,null,null,null,null,null,null,null,null)
D.fxQ=new A.L("api-keys-create-dialog",y.O)
D.fy9=new A.L("api-keys-new",y.O)
D.fya=new A.L("api-keys-retry",y.O)
D.fyD=new A.L("api-keys-scope-write",y.O)
D.fz7=new A.L("api-keys-scope-read",y.O)
D.fzb=new A.L("api-keys-revoke-dialog",y.O)
D.fzG=new A.L("api-keys-one-time-done",y.O)
D.fzO=new A.L("api-keys-create-confirm",y.O)
D.fAx=new A.L("api-keys-copy",y.O)
D.fAy=new A.L("api-keys-name-field",y.O)
D.fAO=new A.L("api-keys-one-time",y.O)
D.fAQ=new A.L("api-keys-revoke-confirm",y.O)
D.fBu=new A.L("api-keys-plaintext",y.O)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cUA","c2R",()=>A.ep(new B.bYs(),y.k))
x($,"cUB","aCu",()=>A.ls(new B.bYt(),y.s))})()};
(a=>{a["wbTNj4w5QK4apYacNjYoqclAsUM="]=a.current})($__dart_deferred_initializers__);