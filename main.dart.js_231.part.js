((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,F,B={
cc2(){return new B.CR(null)},
CR:function CR(d){this.a=d},
aEP:function aEP(d,e,f){this.a=d
this.b=e
this.c=f},
aER:function aER(){},
aEQ:function aEQ(d){this.a=d},
aEO:function aEO(d){this.a=d},
aES:function aES(d,e,f){this.a=d
this.b=e
this.c=f},
aEB:function aEB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aEK:function aEK(d,e,f){this.a=d
this.b=e
this.c=f},
aEJ:function aEJ(d,e,f){this.a=d
this.b=e
this.c=f},
aEG:function aEG(d,e){this.a=d
this.b=e},
aEF:function aEF(d,e){this.a=d
this.b=e},
aEH:function aEH(d){this.a=d},
aEI:function aEI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aEC:function aEC(d){this.a=d},
aED:function aED(d){this.a=d},
aEE:function aEE(d){this.a=d},
aEN:function aEN(d,e){this.a=d
this.b=e},
aEL:function aEL(d,e){this.a=d
this.b=e},
aEM:function aEM(d){this.a=d},
aEA:function aEA(d,e){this.a=d
this.b=e},
aEy:function aEy(d){this.a=d},
aEz:function aEz(d){this.a=d},
NY:function NY(d){this.a=d},
bgx:function bgx(){},
bZj:function bZj(){},
bZk:function bZk(){},
csP(d){var x,w="last_used_at",v="revoked_at",u=A.U(d.h(0,"id")),t=A.U(d.h(0,"name")),s=A.U(d.h(0,"key_prefix")),r=J.bX(y.j.a(d.h(0,"scopes")),new B.aEx(),y.N)
r=A.K(r,r.$ti.i("ai.E"))
A.dY(A.U(d.h(0,"created_at")))
x=d.h(0,w)==null?null:A.dY(A.U(d.h(0,w)))
return new B.oZ(u,t,s,r,x,d.h(0,v)==null?null:A.dY(A.U(d.h(0,v))))},
oZ:function oZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i},
aEx:function aEx(){},
acP:function acP(d,e){this.a=d
this.b=e}},D,H,I
J=c[1]
A=c[0]
C=c[2]
E=c[63]
G=c[75]
F=c[84]
B=a.updateHolder(c[33],B)
D=c[91]
H=c[93]
I=c[92]
B.CR.prototype={
cc(d,e){var x=null,w=e.S($.aCR(),y.E)
return A.hy(A.m_(x,x,x,x,x,x,x,x,C.a7n),x,A.dK(w,new B.aEP(this,d,e),new B.aEQ(e),new B.aER(),!1,!0,!1),x,G.c5v(C.p8,D.fyn,D.frw,new B.aES(this,d,e)))},
aOt(d,e,f){var x,w=null,v=A.d(d).ok,u=A.d(d).ax.a===C.p?C.bZ:C.M,t=v.Q
if(t==null)t=w
else t=t.U(A.d(d).ax.a===C.p?C.B:C.C)
u=A.c([A.fa(new A.Y(C.aD,A.o("API keys authenticate against the public API gateway (x-api-key header). Keys inherit your room access; read scope allows GET requests, write scope additionally allows creating evidence metadata. Rate limit: 100 requests/minute per key.",w,w,w,w,w,t,w,w,w),w),u,w,w,w,C.a4),C.aV],y.p)
t=J.av(f)
if(t.gW(f)){x=v.z
if(x==null)x=w
else x=x.U(A.d(d).ax.a===C.p?C.B:C.C)
u.push(A.bQ(new A.Y(D.ajR,A.o("No API keys yet.",w,w,w,w,w,x,w,w,w),w),w,w))}for(t=t.gV(f);t.q();)u.push(this.b3C(d,e,t.gI()))
return A.hh(u,w,C.bo,w,C.a6,!1)},
b3C(d,e,f){var x,w,v,u,t,s,r,q,p,o=null,n=A.d(d).ok,m=f.a,l=y.O,k=A.d(d).ax.a===C.p?C.bZ:C.M,j=n.x
j=j==null?o:j.cR(C.aP)
x=y.p
j=A.c([A.aA(A.o(f.b,o,o,o,o,o,j,o,o,o),1,o)],x)
w=f.r==null
if(!w){v=A.d(d).ax
u=v.id
j.push(F.ti(o,u==null?v.fy:u,D.fuT,o,C.bL))}j=A.an(j,C.y,o,C.r,C.u,0,o,o)
v=n.Q
u=v==null
if(u)t=o
else t=v.lm(A.d(d).ax.a===C.p?C.B:C.C,"monospace")
t=A.o(f.c+"\u2026",o,o,o,o,o,t,o,o,o)
s=A.c([],x)
for(r=f.d,q=r.length,p=0;p<r.length;r.length===q||(0,A.F)(r),++p)s.push(F.ti(o,o,A.o(r[p]==="write"?"Write":"Read",o,o,o,o,o,o,o,o,o),o,C.bL))
s=A.hC(s,C.cF,0,8)
r=f.f
r=r==null?"Never used":"Last used "+this.aWB(r)
if(u)v=o
else v=v.U(A.d(d).ax.a===C.p?C.B:C.C)
x=A.c([j,C.ah,t,C.Q,s,C.Q,A.o(r,o,o,o,o,o,v,o,o,o)],x)
if(w)x.push(new A.et(C.dG,o,o,A.bw(D.a7f,new A.L("api-key-revoke-"+m,l),o,o,new B.aEB(this,d,e,f),o,o),o))
return A.fa(new A.Y(C.aD,A.a2(x,C.S,o,C.r,C.u,0,C.x),o),k,new A.L("api-key-"+m,l),o,o,C.a4)},
aWB(d){var x,w=new A.aE(Date.now(),0,!1).d6().eD(d.d6()).a,v=C.f.ao(w,6e7)
if(v<1)return"just now"
x=C.f.ao(w,36e8)
if(x<1)return""+v+"m ago"
w=C.f.ao(w,864e8)
if(w<1)return""+x+"h ago"
return""+w+"d ago"},
Hu(d,e){return this.be0(d,e)},
be0(d,e){var x=0,w=A.m(y.H),v=this,u,t,s,r
var $async$Hu=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:t={}
s=$.ae()
r=t.a=t.b=!1
t.c=null
x=2
return A.e(A.cV(null,null,!0,null,new B.aEK(t,new A.bV(C.aL,s),e),d,null,!0,!0,y.S),$async$Hu)
case 2:u=g
x=(u!=null?d.e!=null:r)?3:4
break
case 3:e.bq($.aCR())
x=5
return A.e(v.bea(d,u),$async$Hu)
case 5:case 4:return A.k(null,w)}})
return A.l($async$Hu,w)},
bea(d,e){var x=null
return A.cV(x,x,!1,x,new B.aEN(d,e),d,x,!0,!0,y.H)},
HR(d,e,f){return this.aRW(d,e,f)},
aRW(d,e,f){var x=0,w=A.m(y.H),v=1,u=[],t,s
var $async$HR=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:x=4
return A.e(A.cV(null,null,!0,null,new B.aEA(f,d),d,null,!0,!0,y.y),$async$HR)
case 4:x=h===!0&&d.e!=null?2:3
break
case 2:v=6
x=9
return A.e(e.X($.c3M(),y.k).Z9(f.a),$async$HR)
case 9:e.bq($.aCR())
v=1
x=8
break
case 6:v=5
s=u.pop()
if(d.e!=null)d.T(y.q).f.aS(D.flH)
x=8
break
case 5:x=1
break
case 8:case 3:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$HR,w)}}
B.NY.prototype={
Xq(){var x=0,w=A.m(y.s),v,u=this,t,s,r
var $async$Xq=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=J
r=y.j
x=3
return A.e(u.a.aAw("list_api_keys",y.z),$async$Xq)
case 3:t=s.bX(r.a(e),new B.bgx(),y.I)
t=A.K(t,t.$ti.i("ai.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Xq,w)},
Vl(d,e){return this.bmZ(d,e)},
bmZ(d,e){var x=0,w=A.m(y.S),v,u=this,t,s,r,q,p,o,n
var $async$Vl=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:s=y.N
r=y.z
q=A
p=y.f
o=J
n=y.j
x=3
return A.e(u.a.d5("create_api_key",A.Q(["p_name",d,"p_scopes",e],s,r),r),$async$Vl)
case 3:r=q.aM(p.a(o.k2(n.a(g))),s,r)
s=A.U(r.h(0,"key_id"))
t=A.U(r.h(0,"api_key"))
A.U(r.h(0,"key_prefix"))
v=new B.acP(s,t)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Vl,w)},
Z9(d){return this.byM(d)},
byM(d){var x=0,w=A.m(y.H),v=this,u
var $async$Z9=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:u=y.z
x=2
return A.e(v.a.d5("revoke_api_key",A.Q(["p_id",d],y.N,u),u),$async$Z9)
case 2:return A.k(null,w)}})
return A.l($async$Z9,w)},
$icc1:1}
B.oZ.prototype={
gbE(){return this.a}}
B.acP.prototype={
gbE(){return this.a}}
var z=a.updateTypes(["h(v<oZ>)","oZ(@)","NY(al)","N<v<oZ>>(al)"])
B.aEP.prototype={
$1(d){return this.a.aOt(this.b,this.c,d)},
$S:z+0}
B.aER.prototype={
$0(){return C.bd},
$S:24}
B.aEQ.prototype={
$2(d,e){var x=null
return A.bQ(A.a2(A.c([D.fvj,C.Z,A.d_(C.eE,D.fyo,new B.aEO(this.a),x)],y.p),C.y,x,C.r,C.W,0,C.x),x,x)},
$S:44}
B.aEO.prototype={
$0(){return this.a.bq($.aCR())},
$S:0}
B.aES.prototype={
$0(){return this.a.Hu(this.b,this.c)},
$S:0}
B.aEB.prototype={
$0(){var x=this
return x.a.HR(x.b,x.c,x.d)},
$S:0}
B.aEK.prototype={
$1(d){return new A.mv(new B.aEJ(this.a,this.b,this.c),null)},
$S:66}
B.aEJ.prototype={
$2(d,e){var x,w=null,v=this.b,u=this.a,t=y.p,s=A.c([A.cX(w,C.as,!0,w,!0,C.D,w,A.d1(),v,w,w,w,w,w,2,D.e3x,C.T,!0,w,!0,w,!1,w,C.aQ,w,w,w,D.fAQ,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aO,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.af,w,C.aG,w,w,w,w),C.Z,E.c4M(C.ab,w,!0,D.fzn,w,D.frv,D.fss,!0),E.c4M(C.ab,w,!0,D.fyR,new B.aEG(u,e),D.fsd,D.ft_,u.b)],t),r=u.c
if(r!=null){x=A.d(d).ok.Q
s.push(new A.Y(I.ee,A.o(r,w,w,w,w,w,x==null?w:x.U(A.d(d).ax.fy),w,w,w),w))}s=A.a2(s,C.S,w,C.r,C.W,0,C.x)
r=u.a
x=A.bw(C.br,w,w,w,r?w:new B.aEH(d),w,w)
v=r?w:new B.aEI(u,v,e,this.c,d)
return A.dt(A.c([x,A.d_(r?C.eC:D.fux,D.fA5,v,w)],t),s,D.fy2,D.fvf)},
$S:104}
B.aEG.prototype={
$1(d){return this.b.$1(new B.aEF(this.a,d))},
$S:130}
B.aEF.prototype={
$0(){return this.a.b=this.b===!0},
$S:0}
B.aEH.prototype={
$0(){return A.ao(this.a,!1).by()},
$S:0}
B.aEI.prototype={
$0(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$$0=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=C.n.aI(s.b.a.a)
if(J.aY(l)===0){s.c.$1(new B.aEC(s.a))
x=1
break}o=s.c
n=s.a
o.$1(new B.aED(n))
u=4
r=A.c(["read"],y.T)
if(n.b)J.ds(r,"write")
q=r
x=7
return A.e(s.d.X($.c3M(),y.k).Vl(l,q),$async$$0)
case 7:p=e
r=s.e
if(r.e!=null)A.ao(r,!1).b1(p)
u=2
x=6
break
case 4:u=3
k=t.pop()
o.$1(new B.aEE(n))
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$0,w)},
$S:2}
B.aEC.prototype={
$0(){return this.a.c="Give the key a name."},
$S:0}
B.aED.prototype={
$0(){var x=this.a
x.a=!0
x.c=null},
$S:0}
B.aEE.prototype={
$0(){var x=this.a
x.a=!1
x.c="Could not create the key. Try again."},
$S:0}
B.aEN.prototype={
$1(d){var x,w=null,v=A.d(this.a).ax.a===C.p?C.cP:C.cQ,u=A.b2(8),t=this.b,s=A.d(d).ok.z
s=s==null?w:s.Vd("monospace")
u=A.ar(w,A.Nr(t.b,D.fBN,s),C.F,w,w,new A.aB(v,w,w,u,w,w,C.X),w,w,w,w,C.cS,w,w,w)
v=A.aT(H.CO,A.d(d).ax.fy,w,w,18)
s=A.d(d).ok.Q
x=y.p
s=A.a2(A.c([u,C.Z,A.an(A.c([v,C.b6,A.aA(A.o("You won't see this key again. Copy it now \u2014 it cannot be recovered later.",w,w,w,w,w,s==null?w:s.U(A.d(d).ax.fy),w,w,w),1,w)],x),C.y,w,C.r,C.u,0,w,w)],x),C.S,w,C.r,C.W,0,C.x)
return A.dt(A.c([A.pO(D.e1C,D.fAP,C.a7e,new B.aEL(t,d),w),A.d_(D.frz,D.fzY,new B.aEM(d),w)],x),s,D.fB5,D.ftm)},
$S:14}
B.aEL.prototype={
$0(){A.qy(new A.nT(this.a.b))
this.b.T(y.q).f.aS(D.fm1)},
$S:0}
B.aEM.prototype={
$0(){return A.ao(this.a,!1).by()},
$S:0}
B.aEA.prototype={
$1(d){var x=null,w=this.a
w=A.o("\u201c"+w.b+"\u201d ("+w.c+"\u2026) will stop working immediately. This cannot be undone.",x,x,x,x,x,x,x,x,x)
return A.dt(A.c([A.bw(D.fsF,x,x,x,new B.aEy(d),x,x),A.d_(D.a7f,D.fB7,new B.aEz(d),A.vN(A.d(this.b).ax.fy,x,x,x,x,x,x))],y.p),w,D.fzr,D.fvn)},
$S:14}
B.aEy.prototype={
$0(){return A.ao(this.a,!1).b1(!1)},
$S:0}
B.aEz.prototype={
$0(){return A.ao(this.a,!1).b1(!0)},
$S:0}
B.bgx.prototype={
$1(d){return B.csP(A.aM(y.f.a(d),y.N,y.z))},
$S:z+1}
B.bZj.prototype={
$1(d){return new B.NY(d.S($.dB(),y.A))},
$S:z+2}
B.bZk.prototype={
$1(d){d.S($.dA(),y.L)
return d.S($.c3M(),y.k).Xq()},
$S:z+3}
B.aEx.prototype={
$1(d){return A.U(d)},
$S:47};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.CR,A.bA)
w(A.cg,[B.aEP,B.aEK,B.aEG,B.aEN,B.aEA,B.bgx,B.bZj,B.bZk,B.aEx])
w(A.dg,[B.aER,B.aEO,B.aES,B.aEB,B.aEF,B.aEH,B.aEI,B.aEC,B.aED,B.aEE,B.aEL,B.aEM,B.aEy,B.aEz])
w(A.dj,[B.aEQ,B.aEJ])
w(A.E,[B.NY,B.oZ,B.acP])})()
A.cC(b.typeUniverse,JSON.parse('{"CR":{"bA":[],"O":[],"h":[]},"NY":{"cc1":[]}}'))
var y=(function rtii(){var x=A.J
return{I:x("oZ"),k:x("cc1"),E:x("aS<v<oZ>>"),L:x("aS<fW?>"),S:x("acP"),T:x("x<f>"),p:x("x<h>"),s:x("v<oZ>"),j:x("v<@>"),f:x("ad<@,@>"),N:x("f"),A:x("h6"),O:x("L<f>"),q:x("h8"),y:x("B"),z:x("@"),H:x("~")}})();(function constants(){D.ajR=new A.aj(0,32,0,32)
D.e05=new A.ah(61311,"MaterialIcons",null,!1)
D.e1C=new A.aL(D.e05,null,null,null,null)
D.e3x=new A.cp(null,null,null,"Key name",null,null,null,null,null,null,"e.g. Zapier integration",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.fuO=new A.a0("Could not revoke the key.",null,null,null,null,null,null,null,null,null,null)
D.flH=new A.d8(D.fuO,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.D,null)
D.fu1=new A.a0("API key copied.",null,null,null,null,null,null,null,null,null,null)
D.fm1=new A.d8(D.fu1,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.D,null)
D.frv=new A.a0("List rooms and evidence (GET)",null,null,null,null,null,null,null,null,null,null)
D.frw=new A.a0("New key",null,null,null,null,null,null,null,null,null,null)
D.a7f=new A.a0("Revoke",null,null,null,null,null,null,null,null,null,null)
D.frz=new A.a0("I've saved it",null,null,null,null,null,null,null,null,null,null)
D.fsd=new A.a0("Create evidence metadata rows (POST)",null,null,null,null,null,null,null,null,null,null)
D.fss=new A.a0("Read",null,null,null,null,null,null,null,null,null,null)
D.fsF=new A.a0("Keep key",null,null,null,null,null,null,null,null,null,null)
D.ft_=new A.a0("Write",null,null,null,null,null,null,null,null,null,null)
D.ftm=new A.a0("Copy your key",null,null,null,null,null,null,null,null,null,null)
D.fux=new A.a0("Create key",null,null,null,null,null,null,null,null,null,null)
D.fuT=new A.a0("Revoked",null,null,null,null,null,null,null,null,null,null)
D.fvf=new A.a0("New API key",null,null,null,null,null,null,null,null,null,null)
D.fvj=new A.a0("Could not load your API keys.",null,null,null,null,null,null,null,null,null,null)
D.fvn=new A.a0("Revoke key?",null,null,null,null,null,null,null,null,null,null)
D.fy2=new A.L("api-keys-create-dialog",y.O)
D.fyn=new A.L("api-keys-new",y.O)
D.fyo=new A.L("api-keys-retry",y.O)
D.fyR=new A.L("api-keys-scope-write",y.O)
D.fzn=new A.L("api-keys-scope-read",y.O)
D.fzr=new A.L("api-keys-revoke-dialog",y.O)
D.fzY=new A.L("api-keys-one-time-done",y.O)
D.fA5=new A.L("api-keys-create-confirm",y.O)
D.fAP=new A.L("api-keys-copy",y.O)
D.fAQ=new A.L("api-keys-name-field",y.O)
D.fB5=new A.L("api-keys-one-time",y.O)
D.fB7=new A.L("api-keys-revoke-confirm",y.O)
D.fBN=new A.L("api-keys-plaintext",y.O)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cVS","c3M",()=>A.er(new B.bZj(),y.k))
x($,"cVT","aCR",()=>A.lu(new B.bZk(),y.s))})()};
(a=>{a["bg0ge4oSZsB/cWGmJ4eshmmH4LQ="]=a.current})($__dart_deferred_initializers__);