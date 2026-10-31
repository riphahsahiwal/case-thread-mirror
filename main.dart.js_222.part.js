((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,E,M,N,O,P,Q,R,S,H,T,C={c_J:function c_J(){},c_E:function c_E(){},c_C:function c_C(d){this.a=d},c_D:function c_D(d){this.a=d},c_K:function c_K(){},
cEG(){return new C.C6()},
MT:function MT(d){this.a=d},
b8q:function b8q(){},
b8p:function b8p(){},
b8o:function b8o(){},
c0q:function c0q(){},
c0p:function c0p(){},
c0o:function c0o(d){this.a=d},
C6:function C6(){this.b=null},
rh:function rh(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
b89:function b89(d){this.a=d},
b8a:function b8a(){},
c0n:function c0n(){},
c0m:function c0m(){},
cgt(d){return""+A.b2(d)+"-"+B.o.bF(B.f.j(A.b7(d)),2,"0")+"-"+B.o.bF(B.f.j(A.bJ(d)),2,"0")},
cBO(d){var x,w,v,u,t=new C.bjj(),s=d.h(0,"room_id")
s=J.bd(s==null?"":s)
x=d.h(0,"user_id")
x=J.bd(x==null?"":x)
w=d.h(0,"description")
J.bd(w==null?"":w)
w=t.$1(d.h(0,"started_at"))
if(w==null)w=new A.aE(Date.now(),0,!1)
t=t.$1(d.h(0,"ended_at"))
v=J.p(d.h(0,"billable"),!1)
A.df(d.h(0,"hourly_rate"))
u=d.h(0,"invoice_id")
u=u==null?null:J.bd(u)
return new C.pO(s,x,w,t,!v,u)},
c86(d,e){var x,w,v,u,t,s=y.N,r=y.i,q=A.C(s,r)
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.E)(d),++w){v=d[w]
if(!v.f)continue
u=v.a
t=q.h(0,u)
if(t==null)t=0
q.l(0,u,t+v.WS(e))}return C.c7X(q,s,r)},
c85(d,e){var x,w,v,u,t,s=y.N,r=y.i,q=A.C(s,r)
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.E)(d),++w){v=d[w]
if(!v.f)continue
u=v.b
t=q.h(0,u)
if(t==null)t=0
q.l(0,u,t+v.WS(e))}return C.c7X(q,s,r)},
c8P(d,e){return new A.ah(d,new C.c23(),A.a6(d).i("ah<1>")).io(0,0,new C.c24(e))},
cmL(d,e){return new A.ah(d,new C.c29(),A.a6(d).i("ah<1>")).io(0,0,new C.c2a(e))},
c8M(d){var x,w,v,u,t,s,r,q
for(x=d.length,w=0,v=0,u=0;u<x;++u){t=d[u]
s=t.c
r=s.toLowerCase()
if(r==="void"||r==="cancelled"||r==="canceled")continue
q=t.d
w+=q
r=s.toLowerCase()
if(r==="draft"||r==="sent")v+=q}return new A.avu(w,v)},
cMk(d){var x,w,v,u,t=y.N,s=y.r,r=A.C(t,s)
for(x=J.aK(d);x.q();){w=x.gI()
v=w.h(0,"room_id")
u=v==null?null:J.bd(v)
if(u==null||u.length===0)continue
v=r.h(0,u)
if(v==null)v=0
w=A.df(w.h(0,"file_size_bytes"))
w=w==null?null:B.l.F(w)
r.l(0,u,v+(w==null?0:w))}return C.c7X(r,t,s)},
c7X(d,e,f){var x,w,v,u,t=A.t(d).i("bE<1>"),s=A.K(new A.bE(d,t),t.i("z.E"))
B.i.ed(s,new C.bY8(d,e))
t=A.C(e,f)
for(x=s.length,w=0;w<s.length;s.length===x||(0,A.E)(s),++w){v=s[w]
u=d.h(0,v)
t.l(0,v,u==null?f.a(u):u)}return t},
Cq(d){var x=B.l.aM(d*10)/10
return x===(x<0?Math.ceil(x):Math.floor(x))?""+B.l.F(x)+" h":B.l.aq(x,1)+" h"},
bZS(d){var x=Math.abs(d),w=B.f.ao(x,100),v=B.o.bF(B.f.j(B.f.aF(x,100)),2,"0"),u=A.aC_(B.f.j(w),A.ca("(\\d)(?=(\\d{3})+(?!\\d))",!0,!1),new C.bZT(),null)
return(d<0?"-":"")+"$"+u+"."+v},
c8p(d){if(d>=1073741824)return B.l.aq(d/1073741824,1)+" GB"
if(d>=1048576)return B.l.aq(d/1048576,0)+" MB"
if(d>=1024)return B.l.aq(d/1024,0)+" KB"
return""+d+" B"},
ri:function ri(d,e){this.a=d
this.b=e},
u8:function u8(d,e,f){this.a=d
this.b=e
this.c=f},
pO:function pO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h
_.w=i},
bjj:function bjj(){},
Au:function Au(d,e,f){this.a=d
this.c=e
this.d=f},
uh:function uh(d,e,f){this.a=d
this.b=e
this.$ti=f},
c23:function c23(){},
c24:function c24(d){this.a=d},
c29:function c29(){},
c2a:function c2a(d){this.a=d},
bY8:function bY8(d,e){this.a=d
this.b=e},
bZT:function bZT(){},
cgu(d){var x
switch(d.a){case 0:x="Open"
break
case 1:x="Under investigation"
break
case 2:x="In review"
break
case 3:x="Closed"
break
default:x=null}return x},
ak2:function ak2(d){this.a=d},
b8K:function b8K(){},
b8J:function b8J(d,e,f){this.a=d
this.b=e
this.c=f},
b8H:function b8H(d){this.a=d},
b8I:function b8I(d,e,f){this.a=d
this.b=e
this.c=f},
b8G:function b8G(){},
b8F:function b8F(d,e,f){this.a=d
this.b=e
this.c=f},
b8D:function b8D(d){this.a=d},
b8E:function b8E(d,e,f){this.a=d
this.b=e
this.c=f},
b8C:function b8C(d,e){this.a=d
this.b=e},
b8y:function b8y(){},
b8z:function b8z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8A:function b8A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8B:function b8B(){},
b8v:function b8v(){},
b8x:function b8x(){},
b8w:function b8w(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
b8s:function b8s(d,e){this.a=d
this.b=e},
b8t:function b8t(d,e){this.a=d
this.b=e},
b8u:function b8u(d,e){this.a=d
this.b=e},
b8r:function b8r(d){this.a=d},
ci1(){return new C.H8(null)},
cCe(d){if(d>=1073741824)return B.l.aq(d/1073741824,1)+" GB"
if(d>=1048576)return B.l.aq(d/1048576,0)+" MB"
if(d>=1024)return B.l.aq(d/1024,0)+" KB"
return B.l.aq(d,0)+" B"},
cCf(d){var x=B.l.F(d)
return d===x?""+x:B.l.aq(d,1)},
H8:function H8(d){this.a=d},
bkw:function bkw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bkt:function bkt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bkv:function bkv(){},
bku:function bku(d,e){this.a=d
this.b=e},
bky:function bky(){},
bkx:function bkx(d,e){this.a=d
this.b=e},
bkr:function bkr(d){this.a=d},
bks:function bks(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c8K(d,e,f){return C.cMa(d,e,f)},
cMa(d,e,f){var x=0,w=A.m(y.aQ),v,u,t
var $async$c8K=A.i(function(g,h){if(g===1)return A.j(h,w)
for(;;)switch(x){case 0:t={}
e=A.ch(A.b2(e),A.b7(e),A.bJ(e),0,0)
f=A.ch(A.b2(f),A.b7(f),A.bJ(f),0,0)
u=new A.aE(Date.now(),0,!1)
t.a=new C.TT(null,e,f,A.ch(A.b2(u),A.b7(u),A.bJ(u),0,0),B.eO,null,null,null,null,null,null,null,null,null,null,null,B.lu,null,null,null,B.Ic,null)
v=A.cV(null,null,!0,null,new C.c1D(t,null),d,null,!0,!1,y.T)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$c8K,w)},
cki(d,e,f,g){var x
if(f==null)x="Start Date"
else x=g==null||A.b2(f)===A.b2(g)?d.awg(f):d.awf(f)
return x},
ckh(d,e,f,g,h){var x
if(g==null)x="End Date"
else x=f!=null&&A.b2(f)===A.b2(g)&&A.b2(f)===A.b2(h)?d.awg(g):d.awf(g)
return x},
c1D:function c1D(d,e){this.a=d
this.b=e},
TT:function TT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.at=o
_.ax=p
_.ay=q
_.ch=r
_.CW=s
_.cx=t
_.db=u
_.dx=v
_.dy=w
_.fr=x
_.a=a0},
a2j:function a2j(d,e,f,g,h,i,j,k){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=e
_.x=f
_.bV$=g
_.fz$=h
_.mG$=i
_.e8$=j
_.fA$=k
_.c=_.a=null},
btO:function btO(d){this.a=d},
btN:function btN(d){this.a=d},
btP:function btP(d,e){this.a=d
this.b=e},
btM:function btM(d,e){this.a=d
this.b=e},
btQ:function btQ(d){this.a=d},
aoU:function aoU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.at=o
_.ax=p
_.ay=q
_.a=r},
a1r:function a1r(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.a=m},
a1s:function a1s(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.w=0
_.y=_.x=$
_.c=_.a=null},
bpe:function bpe(d){this.a=d},
bpf:function bpf(d){this.a=d},
bpg:function bpg(d,e){this.a=d
this.b=e},
bph:function bph(d){this.a=d},
bpi:function bpi(d){this.a=d},
a1t:function a1t(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a1u:function a1u(){var _=this
_.f=_.e=$
_.c=_.a=_.w=_.r=null},
bpk:function bpk(d,e){this.a=d
this.b=e},
bpj:function bpj(d,e){this.a=d
this.b=e},
a3k:function a3k(d,e,f,g,h){var _=this
_.f=d
_.r=e
_.w=f
_.b=g
_.a=h},
aqi:function aqi(d){this.a=d},
bGJ:function bGJ(){},
bGN:function bGN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4j:function a4j(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.a=m},
a4k:function a4k(){this.d=$
this.c=this.a=null},
a2m:function a2m(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.at=o
_.ax=p
_.a=q},
aqj:function aqj(d){this.d=d
this.c=this.a=null},
btX:function btX(d,e){this.a=d
this.b=e},
btY:function btY(d){this.a=d},
btZ:function btZ(d,e,f){this.a=d
this.b=e
this.c=f},
btS:function btS(){},
btT:function btT(){},
btW:function btW(d,e){this.a=d
this.b=e},
btR:function btR(d,e){this.a=d
this.b=e},
btU:function btU(){},
btV:function btV(d){this.a=d},
PD:function PD(d,e){this.a=d
this.b=e},
a3J:function a3J(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
asy:function asy(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.a=o},
bDW:function bDW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a3Z:function a3Z(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=t
_.db=u
_.a=v},
PJ:function PJ(){var _=this
_.e=_.d=$
_.r=_.f=null
_.x=_.w=$
_.z=_.y=null
_.Q=!1
_.c=_.a=null},
bDZ:function bDZ(d,e,f){this.a=d
this.b=e
this.c=f},
bDY:function bDY(d,e){this.a=d
this.b=e},
bDX:function bDX(d,e){this.a=d
this.b=e},
bW8:function bW8(){},
a8c:function a8c(){},
aiI:function aiI(d,e,f){this.c=d
this.d=e
this.a=f},
acG:function acG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var _=this
_.dx=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.as=o
_.at=p
_.ax=q
_.ay=r
_.ch=s
_.CW=t
_.cx=u
_.cy=v
_.a=w},
ch7(d,e,f){return new A.a_g(new A.GE(d,e,!0,!0,!0,0,A.c1h(),null),f)}},D,I,K,U,L
J=c[1]
A=c[0]
B=c[2]
F=c[41]
G=c[102]
E=c[70]
M=c[103]
N=c[100]
O=c[98]
P=c[99]
Q=c[82]
R=c[101]
S=c[105]
H=c[52]
T=c[104]
C=a.updateHolder(c[32],C)
D=c[97]
I=c[80]
K=c[81]
U=c[55]
L=c[96]
C.MT.prototype={
OP(d,e,f){return this.aCZ(d,e,f)},
aCZ(d,e,f){var x=0,w=A.m(y.W),v,u=2,t=[],s=this,r,q,p,o,n
var $async$OP=A.i(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(e.length===0){v=D.a6O
x=1
break}u=4
p=s.a.az("time_entries").bn("room_id, user_id, description, started_at, ended_at, billable, hourly_rate, invoice_id, created_at").qj("room_id",e)
x=7
return A.e(A.jg(p.hc(p.hf("started_at","lt."+d.d_())),p.$ti.c).aav("ended_at.is.null,ended_at.gte."+f.d_()).fE("started_at",!1),$async$OP)
case 7:r=h
p=J.bX(r,new C.b8q(),y.cn)
p=A.K(p,p.$ti.i("aj.E"))
v=new C.uh(p,!1,y.W)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.G(n)
p=q
if(p instanceof A.r9&&p.b==="42P01"){v=D.fmw
x=1
break}throw n
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$OP,w)},
Ot(d){return this.aCk(d)},
aCk(d){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Ot=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=D.a6P
x=1
break}u=4
x=7
return A.e(s.a.az("invoices").tl().qj("room_id",d).fE("created_at",!1),$async$Ot)
case 7:r=f
p=J.bX(r,new C.b8p(),y.aa)
p=A.K(p,p.$ti.i("aj.E"))
v=new C.uh(p,!1,y.H)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.G(n)
p=q
if(p instanceof A.r9&&p.b==="42P01"){v=D.fmv
x=1
break}throw n
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Ot,w)},
On(d){return this.aCb(d)},
aCb(d){var x=0,w=A.m(y.E),v,u=this,t,s
var $async$On=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:if(d.length===0){v=O.UY
x=1
break}s=J
x=3
return A.e(u.a.az("evidence_items").bn("room_id, file_size_bytes").qj("room_id",d),$async$On)
case 3:t=s.bX(f,new C.b8o(),y.P)
t=A.K(t,t.$ti.i("aj.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$On,w)},
Ow(d){return this.aCq(d)},
aCq(d){var x=0,w=A.m(y.aN),v,u=this,t,s,r,q,p,o,n
var $async$Ow=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:if(d.length===0){v=B.cD
x=1
break}t=y.N
t=A.C(t,t)
n=J
x=3
return A.e(u.a.az("profiles").bn("id, display_name").qj("id",d),$async$Ow)
case 3:s=n.aK(f),r=y.f
case 4:if(!s.q()){x=5
break}q=r.a(s.gI())
p=J.bd(q.h(0,"id"))
o=A.a8(q.h(0,"display_name"))
o=o==null?null:B.o.aI(o).length!==0
t.l(0,p,o===!0?B.o.aI(A.U(q.h(0,"display_name"))):"Member")
x=4
break
case 5:v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Ow,w)}}
C.C6.prototype={
cP(){return D.fhG}}
C.rh.prototype={
FT(d){var x=J.eA(this.d,new C.b89(d))
x=A.it(new A.dE(x,new C.b8a(),x.$ti.i("dE<1,f>")))
return x==null?"Room":x},
btv(d){var x=this.w.h(0,d)
return x==null?"Member":x}}
C.ri.prototype={
H(){return"ReportPeriodPreset."+this.b}}
C.u8.prototype={
a_(d){var x,w,v,u
switch(this.a.a){case 0:x=A.ch(A.b2(d),A.b7(d),A.bJ(d),0,0).kp(0-A.ea(A.Y3(d)-1,0,0,0,0).a)
return new A.C4(x.kp(6048e8),x)
case 1:w=A.ch(A.b2(d),A.b7(d),1,0,0)
return new A.C4(A.b7(d)===12?A.ch(A.b2(d)+1,1,1,0,0):A.ch(A.b2(d),A.b7(d)+1,1,0,0),w)
case 2:return new A.C4(d,d.kp(-2592e9))
case 3:v=this.b
v.toString
u=this.c
u.toString
v=A.ch(A.b2(v),A.b7(v),A.bJ(v),0,0)
return new A.C4(A.ch(A.b2(u),A.b7(u),A.bJ(u),0,0).kp(864e8),v)}},
gkH(){var x,w
switch(this.a.a){case 0:x="This week"
break
case 1:x="This month"
break
case 2:x="Last 30 days"
break
case 3:x=this.b
x.toString
x=C.cgt(x)
w=this.c
w.toString
w=x+" \u2013 "+C.cgt(w)
x=w
break
default:x=null}return x},
k(d,e){if(e==null)return!1
return e instanceof C.u8&&e.a===this.a&&J.p(e.b,this.b)&&J.p(e.c,this.c)},
gt(d){return A.aa(this.a,this.b,this.c,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b)}}
C.pO.prototype={
WS(d){var x,w=this.e
if(w==null)w=d
x=B.f.ao(w.eD(this.d).a,1e6)
return x<=0?0:x/3600}}
C.Au.prototype={
gbE(){return this.a}}
C.uh.prototype={}
C.ak2.prototype={
cb(d,e){var x=null,w=e.S($.c34(),y.Z),v=A.d(d).ok.at
if(v==null)v=x
else v=v.ft(A.d(d).ax.a===B.p?B.B:B.C,B.aj,1.5)
return A.a2(A.c([A.o("REPORTS",x,x,x,x,x,v,x,x,x),B.Q,A.dK(w,new C.b8I(this,d,e),new C.b8J(this,d,e),new C.b8K(),!1,!0,!1)],y.p),B.S,D.fBi,B.r,B.u,0,B.x)},
baF(d,e){var x=e.S($.cau(),y.a)
return A.a2(A.c([this.b8z(d,e),B.Q,A.dK(x,new C.b8E(this,d,e),new C.b8F(this,d,e),new C.b8G(),!1,!0,!1)],y.p),B.S,null,B.r,B.u,0,B.x)},
b8z(d,e){var x,w,v=null,u=e.S($.aCC(),y.j),t=y.af
t=I.bbk(D.fyZ,new C.b8C(d,e),D.eYx,A.dn([u.a],t),t)
x=u.gkH()
w=A.d(d).ok.Q
if(w==null)w=v
else w=w.U(A.d(d).ax.a===B.p?B.B:B.C)
return A.a2(A.c([t,B.bS,A.o("Window: "+x,v,v,v,v,v,w,v,v,v)],y.p),B.S,v,B.r,B.u,0,B.x)},
aOw(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.d(d).ok,f=e.e
if(f.b)return i.al3(d,D.e0z,"Time tracking data unavailable","The time-tracking module is not enabled on this workspace yet. Billable-hours reporting appears once it ships.")
x=f.a
if(x==null)x=D.rt
w=new A.aE(Date.now(),0,!1)
v=C.c8P(x,w)
u=C.cmL(x,w)
t=C.c86(x,w)
s=C.c85(x,w)
r=g.at
if(r==null)r=h
else r=r.ft(A.d(d).ax.a===B.p?B.B:B.C,B.aj,1.2)
r=A.o("BILLABLE HOURS",h,h,h,h,h,r,h,h,h)
q=C.Cq(v)
p=g.f
q=A.o(q,h,h,h,h,h,p==null?h:p.cT(B.aj),h,h,h)
p=e.a.gkH()
o=g.Q
n=o==null
if(n)m=h
else m=o.U(A.d(d).ax.a===B.p?B.B:B.C)
l=y.p
m=A.an(A.c([q,B.b6,new A.X(D.ajC,A.o("billable \xb7 "+p.toLowerCase(),h,h,h,h,h,m,h,h,h),h)],l),B.fi,h,B.r,B.u,0,h,h)
q=u>0
if(q)p=A.d(d).ax.fy
else p=A.d(d).ax.a===B.p?B.B:B.C
p=A.aT(B.r1,p,h,h,16)
k=q?C.Cq(u)+" unbilled":"Everything is invoiced"
if(n)q=h
else{if(q)j=A.d(d).ax.fy
else j=A.d(d).ax.a===B.p?B.B:B.C
j=o.du(j,q?B.aR:h)
q=j}q=A.c([r,B.ak,m,B.ak,A.an(A.c([p,B.ls,A.aA(A.o(k,h,h,h,h,h,q,h,h,h),1,h)],l),B.y,h,B.r,B.u,0,h,h)],l)
if(t.a!==0){r=A.c([B.Q,i.apQ(d,"By room")],l)
for(p=A.t(t).i("d3<1,2>"),p=A.rv(new A.d3(t,p),5,p.i("z.E")),p=new A.B8(J.aK(p.a),p.b,A.t(p).i("B8<1>"));p.q();){m=p.gI()
r.push(i.a3z(d,e.FT(m.a),C.Cq(m.b)))}B.i.K(q,r)}if(s.a!==0){r=A.c([B.Q,i.apQ(d,"By member")],l)
for(p=A.t(s).i("d3<1,2>"),p=A.rv(new A.d3(s,p),5,p.i("z.E")),p=new A.B8(J.aK(p.a),p.b,A.t(p).i("B8<1>")),m=e.w;p.q();){l=p.gI()
k=m.h(0,l.a)
if(k==null)k="Member"
r.push(i.a3z(d,k,C.Cq(l.b)))}B.i.K(q,r)}if(x.length===0){if(n)r=h
else r=o.U(A.d(d).ax.a===B.p?B.B:B.C)
q.push(new A.X(P.qM,A.o("No time entries in this window.",h,h,h,h,h,r,h,h,h),h))}r=A.a2(q,B.S,h,B.r,B.u,0,B.x)
q=A.d(d).ax.a===B.p?B.bP:B.M
return A.f9(new A.X(B.aB,r,h),q,h,h,h,B.a4)},
aQ5(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=A.d(d).ok,m=A.C(y.cN,y.r)
for(x=0;x<4;++x)m.l(0,B.DY[x],0)
for(w=J.aK(e.d);w.q();){v=w.gI().f
u=m.h(0,v)
m.l(0,v,(u==null?0:u)+1)}w=n.at
if(w==null)w=o
else w=w.ft(A.d(d).ax.a===B.p?B.B:B.C,B.aj,1.2)
w=A.o("CASE STATUS OVERVIEW",o,o,o,o,o,w,o,o,o)
v=y.p
u=A.c([],v)
for(t=n.Q,x=0;x<4;++x){s=B.DY[x]
r=C.cgu(s)
q=m.h(0,s)
p=t==null?o:t.cT(B.cB)
p=A.o(r+" \xb7 "+A.q(q),o,o,o,o,o,p,o,o,o)
r=A.d(d).ax.a===B.p?B.cP:B.cQ
u.push(Q.td(o,r,p,new A.b1(A.d(d).ax.a===B.p?B.aE:B.cA,1,B.P,-1),B.bI))}m=A.a2(A.c([w,B.ak,A.i0(u,B.cN,8,8)],v),B.S,o,B.r,B.u,0,B.x)
w=A.d(d).ax.a===B.p?B.bP:B.M
return A.f9(new A.X(B.aB,m,o),w,o,o,o,B.a4)},
beo(d,e){var x,w,v=null,u=A.d(d).ok,t=e.r,s=u.at
if(s==null)s=v
else s=s.ft(A.d(d).ax.a===B.p?B.B:B.C,B.aj,1.2)
s=A.c([A.o("STORAGE BY ROOM",v,v,v,v,v,s,v,v,v),B.ak],y.p)
if(t.gW(t)){x=u.Q
if(x==null)x=v
else x=x.U(A.d(d).ax.a===B.p?B.B:B.C)
s.push(A.o("No evidence files stored yet.",v,v,v,v,v,x,v,v,v))}else for(x=t.gek(),x=x.n5(x,8),x=x.gV(x);x.q();){w=x.gI()
s.push(this.a3z(d,e.FT(w.a),C.c8p(w.b)))}s=A.a2(s,B.S,v,B.r,B.u,0,B.x)
x=A.d(d).ax.a===B.p?B.bP:B.M
return A.f9(new A.X(B.aB,s,v),x,v,v,v,B.a4)},
aV7(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.d(d).ok,m=Date.now(),l=f.e,k=l.a
if(k==null)k=D.rt
x=l.b?o:C.c8P(k,new A.aE(m,0,!1))
m=f.f
l=m.b
if(l)w=o
else{m=m.a
w=C.c8M(m==null?D.xb:m)}m=f.r.geJ()
v=m.io(m,0,new C.b8y())
m=n.at
if(m==null)m=o
else m=m.ft(A.d(d).ax.a===B.p?B.B:B.C,B.aj,1.2)
m=A.o("EXECUTIVE SUMMARY",o,o,o,o,o,m,o,o,o)
u=p.a5l(d,"Billable hours",x==null?"\u2014":C.Cq(x))
t=w==null
s=p.a5l(d,"Invoiced",t?"\u2014":C.bZS(w.a))
r=t?"\u2014":C.bZS(w.b)
q=y.p
r=A.c([m,B.ak,A.c4I(2.2,A.c([u,s,p.apM(d,"Outstanding",r,!t&&w.b>0),p.a5l(d,"Storage used",C.c8p(v))],q),2,8,8,B.xI,!0)],q)
if(l){m=n.Q
if(m==null)m=o
else m=m.U(A.d(d).ax.a===B.p?B.B:B.C)
r.push(new A.X(B.eq,A.o("Invoicing module not enabled yet \u2014 invoiced / outstanding are unavailable.",o,o,o,o,o,m,o,o,o),o))}r.push(B.Q)
r.push(A.an(A.c([A.aA(A.hJ(D.e2h,D.fyM,D.fsf,new C.b8z(p,d,e,f),o),1,o),B.bf,A.aA(A.hJ(D.e2x,D.fyN,D.ft8,new C.b8A(p,d,e,f),o),1,o)],q),B.y,o,B.r,B.u,0,o,o))
m=A.a2(r,B.S,o,B.r,B.u,0,B.x)
l=A.d(d).ax.a===B.p?B.bP:B.M
return A.f9(new A.X(B.aB,m,o),l,o,o,o,B.a4)},
apM(d,e,f,g){var x,w=null,v=A.d(d).ok,u=A.d(d).ax.a===B.p?B.cP:B.cQ,t=A.b3(8),s=A.bW(A.d(d).ax.a===B.p?B.aE:B.cA,B.P,1),r=v.Q
if(r==null)r=w
else r=r.U(A.d(d).ax.a===B.p?B.B:B.C)
r=A.o(e,w,1,B.ar,w,w,r,w,w,w)
x=v.w
if(x==null)x=w
else x=x.du(g?A.d(d).ax.fy:w,B.aj)
return A.ar(w,A.a2(A.c([r,B.dC,A.o(f,w,1,B.ar,w,w,x,w,w,w)],y.p),B.S,w,B.ey,B.u,0,B.x),B.F,w,w,new A.aB(u,w,s,t,w,w,B.X),w,w,w,w,B.cS,w,w,w)},
a5l(d,e,f){return this.apM(d,e,f,!1)},
Ih(d,e,f){return this.aVh(d,e,f)},
aVh(d,e,f){var x=0,w=A.m(y.n),v=1,u=[],t=this,s,r,q,p
var $async$Ih=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.e(t.Hw(f),$async$Ih)
case 6:s=h
r=B.o.a6(new A.aE(Date.now(),0,!1).d_(),0,10)
x=7
return A.e($.y2().iz(K.AW(null,A.c([K.BD(new Uint8Array(A.b5(s)),"application/pdf","casethread-report-"+A.q(r)+".pdf")],y.S),"CaseThread executive summary \u2014 "+f.a.gkH())),$async$Ih)
case 7:v=1
x=5
break
case 3:v=2
p=u.pop()
if(d.e!=null)d.T(y.q).f.aS(A.bR(null,null,null,null,null,B.D,null,A.o("PDF export failed.",null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$Ih,w)},
QX(d,e,f){return this.aVg(d,e,f)},
aVg(a4,a5,a6){var x=0,w=A.m(y.n),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$QX=A.i(function(a7,a8){if(a7===1){u.push(a8)
x=v}for(;;)switch(x){case 0:v=3
t=new A.aE(Date.now(),0,!1)
i=a6.e.a
s=i==null?D.rt:i
r=C.c86(s,t)
q=C.c85(s,t)
h=new A.dN("")
h.a="section,key,value\n"
g=a6.a
h.a="section,key,value\n"+('meta,period,"'+g.gkH()+" ("+B.o.a6(a6.b.d_(),0,10)+" to "+B.o.a6(a6.c.d_(),0,10)+')"\n')
p=h
o=new C.b8B()
for(f=r,f=new A.d3(f,A.t(f).i("d3<1,2>")).gV(0);f.q();){e=f.d
e.toString
n=e
e=p
d="billable_hours_by_room,"+A.q(o.$1(a6.FT(n.a)))+","+B.l.aq(n.b,2)+"\n"
e.a+=d}for(f=q,f=new A.d3(f,A.t(f).i("d3<1,2>")).gV(0),e=a6.w;f.q();){d=f.d
d.toString
m=d
d=p
a0=e.h(0,m.a)
if(a0==null)a0="Member"
a0="billable_hours_by_member,"+A.q(o.$1(a0))+","+B.l.aq(m.b,2)+"\n"
d.a+=a0}for(f=a6.r.gek(),f=f.gV(f);f.q();){l=f.gI()
e=p
d="storage_bytes_by_room,"+A.q(o.$1(a6.FT(l.a)))+","+l.b+"\n"
e.a+=d}f=a6.f
if(f.b)a1=null
else{f=f.a
a1=C.c8M(f==null?D.xb:f)}k=a1
if(k!=null){f=p
e="executive_summary,invoiced_cents,"+k.a+"\n"
f.a+=e
e=p
f="executive_summary,outstanding_cents,"+k.b+"\n"
e.a+=f}j=B.o.a6(new A.aE(Date.now(),0,!1).d_(),0,10)
f=$.y2()
e=p.a
x=6
return A.e(f.iz(K.AW(null,A.c([K.BD(new Uint8Array(A.b5(B.bw.b9(e.charCodeAt(0)==0?e:e))),"text/csv","casethread-report-"+A.q(j)+".csv")],y.S),"CaseThread report \u2014 "+g.gkH())),$async$QX)
case 6:v=1
x=5
break
case 3:v=2
a3=u.pop()
if(a4.e!=null)a4.T(y.q).f.aS(A.bR(null,null,null,null,null,B.D,null,A.o("CSV export failed.",null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$QX,w)},
Hw(d){return this.aPk(d)},
aPk(d){var x=0,w=A.m(y.aH),v,u,t,s,r,q,p,o,n
var $async$Hw=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(A.cv("pdf.1",""),$async$Hw)
case 3:x=4
return A.e(A.cv("pw.1",""),$async$Hw)
case 4:A.F("pw.1")
u=F.c4d(null,null,null,null,null,null,null)
t=new A.aE(Date.now(),0,!1)
s=d.e
r=s.a
if(r==null)r=D.rt
s=s.b
q=s?null:C.c8P(r,t)
p=s?null:C.cmL(r,t)
s=d.f
if(s.b)o=null
else{s=s.a
o=C.c8M(s==null?D.xb:s)}s=d.r.geJ()
n=s.io(s,0,new C.b8v())
A.F("pw.1")
A.F("pdf.1")
u.a6p(F.cfl(new C.b8w(d,t,new C.b8x(),q,p,o,n,r),null,null,N.I8,null,null,null))
v=u.iw()
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Hw,w)},
apQ(d,e){var x=null,w=A.d(d).ok.Q
if(w==null)w=x
else w=w.du(A.d(d).ax.a===B.p?B.B:B.C,B.aR)
return new A.X(B.B3,A.o(e,x,x,x,x,x,w,x,x,x),x)},
a3z(d,e,f){var x=null,w=A.d(d).ok.Q,v=A.aA(A.o(e,x,1,B.ar,x,x,w,x,x,x),1,x)
return new A.X(B.Kb,A.an(A.c([v,A.o(f,x,x,x,x,x,w==null?x:w.cT(B.aR),x,x,x)],y.p),B.y,x,B.r,B.u,0,x,x),x)},
al3(d,e,f,g){var x,w,v=null,u=A.d(d).ok,t=A.aT(e,A.d(d).ax.a===B.p?B.B:B.C,v,v,v),s=u.z
s=A.o(f,v,v,v,v,v,s==null?v:s.cT(B.aR),v,v,v)
x=u.Q
if(x==null)x=v
else x=x.U(A.d(d).ax.a===B.p?B.B:B.C)
w=y.p
w=A.an(A.c([t,B.bf,A.aA(A.a2(A.c([s,B.dC,A.o(g,v,v,v,v,v,x,v,v,v)],w),B.S,v,B.r,B.u,0,B.x),1,v)],w),B.S,v,B.r,B.u,0,v,v)
t=A.d(d).ax.a===B.p?B.bP:B.M
return A.f9(new A.X(B.aB,w,v),t,v,v,v,B.a4)},
aiB(d,e,f){var x,w=null,v=A.d(d).ok.z
v=A.an(A.c([A.aA(A.o(e,w,w,w,w,w,v==null?w:v.U(A.d(d).ax.fy),w,w,w),1,w),A.bz(B.eE,w,w,w,f,w,w)],y.p),B.y,w,B.r,B.u,0,w,w)
x=A.d(d).ax.a===B.p?B.bP:B.M
return A.f9(new A.X(B.aB,v,w),x,w,w,w,B.a4)}}
C.H8.prototype={
cb(d,e){var x=null,w=e.S($.cqH(),y.u),v=e.S($.cqK(),y.F)
return A.hy(A.lY(x,x,x,x,x,x,x,x,B.a7q),x,A.dK(w,new C.bkw(this,v,d,e),new C.bkx(this,d),new C.bky(),!1,!0,!1),x,x)},
arK(d,e){var x=null,w=A.d(d).ok.z
return A.bS(A.o(e,x,x,x,x,x,w==null?x:w.U(A.d(d).ax.fy),x,x,x),x,x)},
b8L(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=A.d(d).ok,g=e.S($.c32(),y.X).gp()
if(g==null)g=D.eVy
x=J.eA(g,new C.bkr(f))
w=A.K(x,x.$ti.i("z.E"))
if(w.length===0)return B.aJ
x=h.at
if(x==null)x=i
else x=x.ft(A.d(d).ax.a===B.p?B.B:B.C,B.aj,1.5)
v=y.p
x=A.c([A.o("CHANGE PLAN",i,i,i,i,i,x,i,i,i),B.Q],v)
for(u=w.length,t=f.c,s=y.O,r=h.Q,q=h.z,p=0;p<w.length;w.length===u||(0,A.E)(w),++p){o=w[p]
n=A.d(d).ax.a===B.p?B.bP:B.M
m=q==null?i:q.cT(B.aR)
m=A.o(o.b,i,i,i,i,i,m,i,i,i)
l=o.a
if(l==="enterprise")k="Custom pricing \u2014 contact us"
else{k=o.c
k=k===0?"Free":"$"+B.l.aq(k/100,0)+"/month"}if(r==null)j=i
else j=r.U(A.d(d).ax.a===B.p?B.B:B.C)
j=A.a2(A.c([m,A.o(k,i,i,i,i,i,j,i,i,i)],v),B.S,i,B.r,B.u,0,B.x)
x.push(new A.v1(n,B.a4,i,i,new A.X(B.aB,new A.hX(B.b8,B.r,B.u,B.y,i,B.x,i,0,A.c([new A.hf(1,B.d4,j,i),A.d1(A.o(o.c<t?"Downgrade":"Switch",i,i,i,i,i,i,i,i,i),new A.L("plan-switch-"+l,s),new C.bks(this,d,e,o),i)],v),i),i),i))}return A.a2(x,B.S,i,B.r,B.u,0,B.x)},
TA(d,e,f){return this.beU(d,e,f)},
beU(d,e,f){var x=0,w=A.m(y.n),v
var $async$TA=A.i(function(g,h){if(g===1)return A.j(h,w)
for(;;)switch(x){case 0:x=f.a==="enterprise"||f.c>0?3:4
break
case 3:x=5
return A.e(U.a9p(d,e,f),$async$TA)
case 5:x=1
break
case 4:d.T(y.q).f.aS(D.flb)
case 1:return A.k(v,w)}})
return A.l($async$TA,w)},
TY(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=A.d(d).ok,k=f.a.h(0,g.c)
if(k==null)k=0
x=e.aaO(g)
w=x>0
v=w?B.l.aw(k/x,0,1):0
w=k>=x&&w
u=A.d(d).ax.a===B.p?B.bP:B.M
t=l.z
t=A.aA(A.o(h,m,m,m,m,m,t==null?m:t.cT(B.cB),m,m,m),1,m)
s=A.q(i.$1(k))
r=A.q(i.$1(x))
q=l.Q
p=q==null
if(p)o=m
else{if(w)o=A.d(d).ax.fy
else o=A.d(d).ax.a===B.p?B.B:B.C
o=q.du(o,w?B.aR:m)}n=y.p
o=A.an(A.c([t,A.o(s+" / "+r,m,m,m,m,m,o,m,m,m)],n),B.y,m,B.r,B.u,0,m,m)
t=A.d(d).ax.a===B.p?B.aE:B.cA
if(w)s=A.d(d).ax.fy
else s=A.d(d).ax.a===B.p?B.bQ:B.ac
s=A.c([o,B.ak,A.aWT(t,s,m,v,m)],n)
if(w)B.i.K(s,A.c([B.te,A.o("Limit reached \u2014 upgrades unlock more.",m,m,m,m,m,p?m:q.U(A.d(d).ax.fy),m,m,m)],n))
return A.f9(new A.X(B.aB,A.a2(s,B.S,m,B.r,B.u,0,B.x),m),u,m,m,m,B.a4)},
alG(d,e,f){var x,w,v=null,u=A.d(d),t=A.d(d).ax.a===B.p?B.bP:B.M
u=u.ok.z
x=A.aA(A.o(e,v,v,v,v,v,u,v,v,v),1,v)
w=f>=2147483647?"Unlimited":""+f
return A.f9(new A.X(B.nv,A.an(A.c([x,A.o(w,v,v,v,v,v,u==null?v:u.cT(B.cB),v,v,v)],y.p),B.y,v,B.r,B.u,0,v,v),v),t,v,v,v,B.a4)}}
C.TT.prototype={
gauz(){var x=this.f
return A.ch(A.b2(x),A.b7(x),A.bJ(x),0,0)},
Y(){var x=null
return new C.a2j(new A.px(!1,$.ad()),new A.bq(x,y.B),new A.bq(x,y.t),x,A.C(y.bw,y.aI),x,!0,x)}}
C.a2j.prototype={
gml(){var x=this.d
return x===$?this.d=new A.a5U(this.a.r,$.ad()):x},
gw8(){var x,w=this.e
if(w===$){x=this.a.c
x=x==null?null:x.a
w=this.e=new A.MV(x,$.ad())}return w},
gpQ(){var x,w=this.f
if(w===$){x=this.a.c
x=x==null?null:x.b
w=this.f=new A.MV(x,$.ad())}return w},
ghD(){this.a.toString
return null},
hp(d,e){var x=this
x.f9(x.gml(),"entry_mode")
x.f9(x.gw8(),"selected_start")
x.f9(x.gpQ(),"selected_end")
x.f9(x.r,"autovalidate")},
m(){var x=this
x.gml().m()
x.gw8().m()
x.gpQ().m()
x.r.m()
x.aKR()},
a37(){var x,w=this,v=w.gml(),u=v.y,t=u==null
if((t?A.t(v).i("aN.T").a(u):u)!==B.ep)v=(t?A.t(v).i("aN.T").a(u):u)===B.lc
else v=!0
if(v)if(!w.x.gaf().kS()){w.v(new C.btO(w))
return}if(w.gakP()){v=w.gw8()
u=v.y
v=u==null?A.t(v).i("aN.T").a(u):u
v.toString
u=w.gpQ()
t=u.y
u=t==null?A.t(u).i("aN.T").a(t):t
u.toString
x=new A.K2(v,u,y.T)}else x=null
v=w.c
v.toString
A.ao(v,!1).b1(x)},
a2O(){var x=this.c
x.toString
A.ao(x,!1).b1(null)},
a31(){this.v(new C.btN(this))},
RZ(d){var x=this.a
if(d.jq(x.d)||d.kF(x.e))return!1
return!0},
b10(d){this.v(new C.btP(this,d))},
aYS(d){this.v(new C.btM(this,d))},
gakP(){var x=this.gw8(),w=x.y
if((w==null?A.t(x).i("aN.T").a(w):w)!=null){x=this.gpQ()
w=x.y
x=(w==null?A.t(x).i("aN.T").a(w):w)!=null}else x=!1
return x},
C(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2="Select range",b3={}
A.d(b4)
x=y.w
w=A.ay(b4,B.dU,x).w.geH()
A.c8(b4,B.aA,y.y).toString
v=A.qs(b4)
A.d(b4)
u=A.oH(b4)
b3.a=null
t=b0.gml()
s=t.y
r=s==null
if((r?A.t(t).i("aN.T").a(s):s)!==B.eO)q=(r?A.t(t).i("aN.T").a(s):s)===B.ep
else q=!0
switch(r?A.t(t).i("aN.T").a(s):s){case B.eO:case B.no:t=b0.a.fr
s=b0.gw8()
r=s.y
s=r==null?A.t(s).i("aN.T").a(r):r
r=b0.gpQ()
p=r.y
r=p==null?A.t(r).i("aN.T").a(p):p
p=b0.a
o=p.d
n=p.e
m=p.dy
p=p.gauz()
l=b0.gakP()?b0.gRE():b1
if(q){k=b0.a.db
k=A.aT(B.lU,b1,b1,b1,b1)
k=A.bB(b1,b1,b1,k,b1,b1,b0.gIA(),B.aa,b1,b1,"Switch to input",b1)}else k=b1
b0.a.toString
b3.a=new C.aoU(s,r,o,n,m,p,b0.gaky(),b0.gakd(),l,b0.gRx(),"Save",b2,t,k,b0.w)
j=A.ay(b4,B.f4,x).w.a
i=v.fx
if(i==null){x=u.fx
x.toString
i=x}h=v.fy
if(h==null)h=u.gNg()
g=v.go
if(g==null)g=u.gNh()
f=v.id
if(f==null)f=u.id
e=B.aa
break
case B.ep:case B.lc:x=b0.a.fr
t=b0.gw8()
s=t.y
if(s==null)s=A.t(t).i("aN.T").a(s)
r=b0.gpQ()
p=r.y
if(p==null)p=A.t(r).i("aN.T").a(p)
o=b0.a.gauz()
n=w===B.d6
m=n?98:108
l=b0.a
k=l.fr
d=t.y
t=d==null?A.t(t).i("aN.T").a(d):d
d=r.y
r=d==null?A.t(r).i("aN.T").a(d):d
d=l.d
a0=l.e
a1=l.dy
a2=b0.r
a3=a2.y
a2=a3==null?A.t(a2).i("aN.T").a(a3):a3
a3=l.Q
a4=l.as
a5=l.at
a6=l.ax
a7=l.ay
a8=l.ch
a9=l.CW
l=l.cx
t=t==null?b1:A.ch(A.b2(t),A.b7(t),A.bJ(t),0,0)
r=r==null?b1:A.ch(A.b2(r),A.b7(r),A.bJ(r),0,0)
k=A.a2(A.c([B.dl,new C.a3Z(t,r,A.ch(A.b2(d),A.b7(d),A.bJ(d),0,0),A.ch(A.b2(a0),A.b7(a0),A.bJ(a0),0,0),b0.gaky(),b0.gakd(),a4,a5,a3,a6,a7,a8,a9,!0,a2,l,a1,k,b0.x),B.dl],y.p),B.y,b1,B.r,B.u,0,B.x)
if(q){b0.a.toString
t=A.bB(b1,b1,b1,B.Ot,b1,b1,b0.gIA(),B.aa,b1,b1,"Switch to calendar",b1)}else t=b1
b0.a.toString
b3.a=new C.asy(s,p,o,new A.aO(b1,m,new A.X(B.B7,k,b1),b1),b0.gRE(),b0.gRx(),"OK","Cancel",b2,t,x,b1)
if(n)j=B.FX
else j=D.fkx
x=v.b
if(x==null){x=u.b
x.toString
i=x}else i=x
h=v.c
if(h==null)h=u.gbU()
g=v.d
if(g==null)g=u.gc8()
x=v.e
f=x==null?u.e:x
e=B.Ke
break
default:e=b1
f=e
g=f
h=g
i=h
j=i}x=v.a
if(x==null)x=u.gbB()
t=j.a
s=j.b
return A.Dx(b1,x,A.aE0(A.Lx(new A.ej(new C.btQ(b3),b1),1.3),b1,B.eo,b1,B.al,b1,s,t),B.cK,b1,i,e,B.o9,h,f,g)}}
C.aoU.prototype={
C(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null
A.d(a3)
x=A.c8(a3,B.aA,y.y)
x.toString
w=y.w
v=A.ay(a3,B.dU,w).w.geH()
u=A.qs(a3)
A.d(a3)
t=A.oH(a3)
s=u.fr
if(s==null)s=t.fr
r=u.k1
if(r==null)r=t.gNc()
q=u.k2
if(q==null)q=t.gNd()
p=q.b3(0.38)
o=u.k3
if(o==null)o=t.gNe()
n=u.k4
if(n==null)n=t.gNf()
m=n==null?a2:n.lf(q)
n=a1.ax
l=a1.c
k=a1.d
j=C.cki(x,n,l,k)
i=C.ckh(x,n,l,k,new A.aE(Date.now(),0,!1))
x=o==null
if(x)h=a2
else h=o.lf(l!=null?q:p)
if(x)g=a2
else g=o.lf(k!=null?q:p)
f=A.oz(a2,a2,a2,a2,p,a2,a2,a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)
e=new A.ec(a2,a2,a2,a2,a2,q,a2,a2,a2)
x=y.p
d=A.c([],x)
if(v===B.ez&&a1.ay!=null){a0=a1.ay
a0.toString
d.push(a0)}d.push(A.bz(A.o(a1.as,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a1.z,a2,f))
d.push(B.b6)
w=A.ay(a3,B.ol,w).w.a.a<360?42:72
a0=a1.at
x=A.c([new A.aO(w,a2,a2,a2),A.aA(A.br(a2,a2,a2,A.a2(A.c([A.o(a0,a2,1,B.ar,a2,a2,m,a2,a2,a2),B.ak,A.an(A.c([A.o(j,a2,1,B.ar,a2,a2,h,a2,a2,a2),A.o(" \u2013 ",a2,a2,a2,a2,a2,h,a2,a2,a2),new A.fA(1,B.cj,A.o(i,a2,1,B.ar,a2,a2,g,a2,a2,a2),a2)],x),B.y,a2,B.r,B.u,0,a2,a2),B.a0],x),B.S,a2,B.r,B.u,0,B.x),!1,a2,a2,a2,!0,a2,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a0+" "+j+" to "+i,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,B.a7,a2),1,a2)],x)
if(v===B.d6&&a1.ay!=null){w=a1.ay
w.toString
x.push(new A.X(B.fk,A.vO(w,e,a2),a2))}x=A.lY(d,e,r,new C.aiI(A.an(x,B.y,a2,B.r,B.u,0,a2,a2),D.fkd,a2),0,e,new A.Tm(B.a6z,a2,a2,a2,a2,B.II,a2,a1.Q,a2,a2,a2,a2,B.q2,a2),0,a2)
w=a1.e
d=a1.f
a0=a1.w
l=l!=null?A.ch(A.b2(l),A.b7(l),A.bJ(l),0,0):a2
k=k!=null?A.ch(A.b2(k),A.b7(k),A.bJ(k),0,0):a2
w=A.ch(A.b2(w),A.b7(w),A.bJ(w),0,0)
d=A.ch(A.b2(d),A.b7(d),A.bJ(d),0,0)
return A.f3(!0,A.hy(x,s,new C.a1r(l,k,w,d,a1.r,A.ch(A.b2(a0),A.b7(a0),A.bJ(a0),0,0),a1.x,a1.y,n,a2),a2,a2),!1,B.aa,!1,!1)}}
C.a1r.prototype={
Y(){return new C.a1s(new A.bq(null,y.B),new A.rB())}}
C.a1s.prototype={
au(){var x,w,v,u=this
u.aQ()
x=A.AG(0,null,null)
u.x=x
x.aa(u.gbc0())
x=u.a
w=u.f=x.c
u.r=x.d
if(w==null)w=x.w
v=x.e
if(!w.jq(v)&&!w.kF(x.f))u.w=A.acU(v,w)
u.y=u.w!==0},
m(){var x=this.x
x===$&&A.b()
x.m()
this.al()},
bc1(){var x,w=this,v=w.x
v===$&&A.b()
v=v.gbu().at
v.toString
x=B.i.gdg(w.x.f).z
x.toString
if(v<=x)w.v(new C.bpe(w))
else{v=w.y
v===$&&A.b()
if(!v)w.v(new C.bpf(w))}},
bhz(){var x=this.c
x.toString
switch(A.d(x).w.a){case 0:case 1:A.KR()
break
case 2:case 3:case 4:case 5:break}},
bgW(d){this.bhz()
this.v(new C.bpg(this,d))},
ag3(d,e,f){var x,w,v=this,u=v.w,t=f?u-e-1:u+e
u=v.a.e
x=A.ch(A.b2(u),A.b7(u)+t,1,0,0)
u=v.a
w=u.z
return new C.a4j(v.f,v.r,u.w,v.gbgV(),u.e,u.f,x,u.r,w,null)},
C(d){var x,w,v,u,t,s,r=this,q=null,p=y.p,o=A.c([D.fD9],p),n=r.y
n===$&&A.b()
if(n)o.push(D.aiO)
n=r.a
x=n.z
w=n.e
v=n.f
u=r.f
if(u==null)u=n.c
n=u==null?n.w:u
u=r.x
u===$&&A.b()
t=r.e
s=r.w
p=A.c([C.ch7(new C.bph(r),s,q),C.ch7(new C.bpi(r),A.acU(w,v)+1-s,t)],p)
o.push(A.aA(new C.a1t(new C.acG(p,B.a6,!1,u,q,q,q,!1,t,0,q,q,q,B.mN,B.T,q,q,B.D,B.c3,r.d),w,v,n,x,q),1,q))
return A.a2(o,B.y,q,B.r,B.u,0,B.x)}}
C.a1t.prototype={
Y(){return new C.a1u()}}
C.a1u.prototype={
au(){var x,w,v=this
v.aQ()
x=y.k
w=y.bc
v.e=A.Q([B.GB,new A.dW(v.gaZk(),new A.c5(A.c([],x),w),y.d),B.GC,new A.dW(v.gaZm(),new A.c5(A.c([],x),w),y.e),B.yK,new A.dW(v.gaYv(),new A.c5(A.c([],x),w),y.c)],y.bv,y.V)
v.f=A.kb(!0,"Day Grid",!0,!0,null,null,!1)},
m(){var x=this.f
x===$&&A.b()
x.m()
this.al()},
aZj(d){this.v(new C.bpk(this,d))},
aZl(d){var x,w=this.f
w===$&&A.b()
w.fS()
w=this.f
x=w.e
x.toString
A.nZ(x).pM(w,!0)},
aZn(d){var x,w=this.f
w===$&&A.b()
w.fS()
w=this.f
x=w.e
x.toString
A.nZ(x).pM(w,!1)},
aYw(d){this.v(new C.bpj(this,d))},
b4H(d,e){var x,w,v,u=this.c.T(y.I).w
this.a.toString
if(u===B.c5)if(e===B.mc)x=B.mS
else x=e===B.mS?B.mc:e
else x=e
w=B.a_E.h(0,x)
w.toString
v=A.ch(A.b2(d),A.b7(d),A.bJ(d)+w,0,0)
w=this.a
if(!v.jq(w.d)&&!v.kF(w.e))return v
return null},
C(d){var x,w,v,u,t=this,s=null,r=t.e
r===$&&A.b()
x=t.f
x===$&&A.b()
w=t.a.r
v=x.gck()?t.w:s
u=t.f.gck()?t.r:s
return A.aet(r,!1,new C.a3k(w,v,u,t.a.c,s),!0,x,!0,B.cd,t.gaZi(),s,s,B.a_s)}}
C.a3k.prototype={
dj(d){return!this.f.AQ(this.r,d.r)||this.w!=d.w}}
C.aqi.prototype={
aWH(d,e){var x,w=null,v=A.c([],y.p)
for(x=0;v.length<7;x=(x+1)%7)v.push(new A.kI(!0,new A.fw(B.ah,w,w,A.o(B.V2[x],w,w,w,w,w,d,w,w,w),w),w))
return v},
C(d){var x,w=A.d(d),v=w.ok.x.lf(w.ax.k3),u=A.c8(d,B.aA,y.y)
u.toString
x=this.aWH(v,u)
B.i.hy(x,0,B.aJ)
x.push(B.aJ)
u=A.ay(d,B.dU,y.w).w.geH()===B.ez?384:480
return new A.e7(new A.av(0,u,0,42),A.c4J(A.a_e(x,!0,!1,!0),D.Ir,null,!0),null)}}
C.bGJ.prototype={
Gq(d){return new C.bGN(9,Math.max((d.w-16)/7,0),8,A.xV(d.x))},
mf(d){return!1}}
C.bGN.prototype={
act(d){return this.a*B.l.ao(d,50)},
acr(d){return Math.max(0,this.a*B.l.dS(d/50)-1)},
aWF(d,e){var x,w,v,u=this
if(u.d){x=u.b
w=u.c
v=e?w:x
return(u.a-2)*x+2*w-d-v}return d},
Oq(d){var x,w=this,v=w.a,u=B.f.aF(d,v),t=u===0||u===v-1,s=w.b,r=w.c,q=Math.max(0,(u-1)*s+r)
v=B.f.ev(d,v)
x=w.aWF(q,t)
if(t)s=r
return new A.alq(v*50,x,42,s)},
a7d(d){return 50*(B.f.ev(d-1,this.a)+1)-8}}
C.a4j.prototype={
Y(){return new C.a4k()}}
C.a4k.prototype={
au(){var x,w,v,u,t
this.aQ()
x=this.a.x
w=A.TU(A.b2(x),A.b7(x))
v=J.hh(w,y.J)
for(u=0;u<w;u=t){t=u+1
v[u]=A.kb(!0,"Day "+t,!0,!0,null,null,!0)}this.d=v},
bC(){var x,w,v=this
v.d1()
x=v.c.T(y.Q)
w=x==null?null:x.r
if(w!=null){x=v.a
x=x.z.AR(x.x,w)}else x=!1
if(x){x=v.d
x===$&&A.b()
x[A.bJ(w)-1].fS()}},
m(){var x,w,v,u,t=this.d
t===$&&A.b()
x=t.length
w=0
for(;w<t.length;t.length===x||(0,A.E)(t),++w){v=t[w]
u=v.ax
if(u!=null)u.aX()
v.f3()}this.al()},
aSo(d){var x,w,v
if(d){x=this.c.T(y.Q)
w=x==null?null:x.w
if(w!=null){switch(w.a){case 0:case 3:v=B.lp
break
case 1:case 2:v=B.lo
break
default:v=B.Fs}x=$.at.aP$.d.c.e
x.toString
A.bb3(x,0,v,B.cf,B.al)}}},
C(b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.d(b5),b4=A.c8(b5,B.aA,y.y)
b4.toString
x=b1.a.x
w=A.b2(x)
v=A.b7(x)
u=A.TU(w,v)
b1.a.toString
t=A.ccj(w,v,b4)
s=B.l.dS((u+t)/7)
x=y.p
r=A.c([],x)
for(q=0-t+1,p=b1.gaSn(),o=y.x;q<=u;++q)if(q<1)r.push(B.r8)
else{b1.a.toString
n=A.ch(w,v,q,0,0)
m=b1.a
l=m.w
k=n.a
j=l.a
if(k<=j)l=k===j&&n.b>l.b
else l=!0
i=!0
if(!l){l=m.r
j=l.a
if(k>=j){l=k===j&&n.b<l.b
i=l}}l=m.c
j=l!=null
h=j&&m.d!=null
g=j&&k===l.a&&n.b===l.b
m=m.d
f=m!=null&&k===m.a&&n.b===m.b
e=!1
if(h){j=l.a
if(k<=j)j=k===j&&n.b>l.b
else j=!0
if(j){j=m.a
if(k>=j)k=k===j&&n.b<m.b
else k=!0
e=k}}d=h&&l.k(0,m)
m=b1.a
a0=m.z.AQ(m.e,n)
m=b1.a
l=m.z
k=b1.d
k===$&&A.b()
k=k[A.bJ(n)-1]
m=m.f
b5.T(o)
j=A.d(b5)
j=j.b7.ok
if(j==null){A.d(b5)
j=A.oH(b5)
j=j.gBd()}r.push(new C.a2m(n,k,m,p,j,i,h,g,f,e,d,a0,l,b2))}a1=A.c([],x)
for(p=t>0,a2=0;a2<s;++a2){a3=a2*7
a4=Math.min(a3+7,r.length)
a5=B.i.dt(r,a3,a4)
b1.a.toString
a6=A.ch(w,v,a3-t+1,0,0)
a7=!1
if(!(p&&a2===0)){m=b1.a
l=m.c
if(l!=null){m=m.d
if(m!=null){k=a6.a
j=l.a
if(k<=j)l=k===j&&a6.b>l.b
else l=!0
if(l){l=m.a
if(k<=l)m=k===l&&a6.b>m.b
else m=!0
m=!m}else m=a7}else m=a7
a7=m}}if(a7){b5.T(o)
m=A.d(b5)
m=m.b7.ok
if(m==null){A.d(b5)
m=A.oH(b5)
m=m.gBd()}m=new A.JM(m,!0,B.r8,b2)}else m=B.r8
B.i.hy(a5,0,m)
m=r.length
if(!(a4<m))m=a4===m&&B.f.aF(m,7)===0
else m=!0
if(m){b1.a.toString
a8=A.ch(w,v,a4-t,0,0)
m=b1.a
l=m.c
a9=!1
if(l!=null){m=m.d
if(m!=null){k=a8.a
j=l.a
if(k>=j)l=k===j&&a8.b<l.b
else l=!0
if(!l){l=m.a
if(k>=l)m=k===l&&a8.b<m.b
else m=!0}else m=a9
a9=m}}if(a9){b5.T(o)
m=A.d(b5)
m=m.b7.ok
if(m==null){A.d(b5)
m=A.oH(b5)
m=m.gBd()}m=new A.JM(m,!0,B.r8,b2)}else m=B.r8
a5.push(m)}B.i.K(a1,a5)}b0=A.ay(b5,B.dU,y.w).w.geH()===B.ez?384:480
return A.a2(A.c([new A.e7(new A.av(0,b0,0,1/0).Zg(58),new A.X(B.ed,new A.em(B.d9,b2,b2,new A.kI(!0,A.o(b4.Wo(b1.a.x),b2,b2,b2,b2,b2,b3.ok.z.lf(b3.ax.k3),b2,b2,b2),b2),b2),b2),b2),new A.e7(new A.av(0,b0,0,s*42+(s-1)*8),A.c4J(A.a_e(a1,!0,!1,!0),D.Ir,B.xI,!1),b2),B.Q],x),B.y,b2,B.r,B.u,0,B.x)}}
C.a2m.prototype={
Y(){return new C.aqj(A.BB())},
rZ(d){return this.e.$1(d)}}
C.aqj.prototype={
m(){var x=this.d
x.R$=$.ad()
x.N$=0
this.al()},
C(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=A.d(a4),a2=a1.ax,a3=A.c8(a4,B.aA,y.y)
a3.toString
x=A.qs(a4)
A.d(a4)
w=A.oH(a4)
v=a4.T(y.I).w
u=d.a
t=u.r
s=a1.ok.z
r=new C.btX(x,w)
q=new C.btY(r)
p=A.aQ(y.cD)
if(u.w)p.B(0,B.a5)
u=d.a
if(u.y||u.z)p.B(0,B.ab)
u=d.d
u.sp(p)
o=y._
n=q.$1$2(new C.btS(),p,o)
m=q.$1$2(new C.btT(),p,o)
l=q.$1$2(new C.btU(),p,y.b8)
if(l==null)l=B.l4
q=d.a
k=a0
if(q.y||q.z){s=s==null?a0:s.lf(n)
j=new A.jk(m,a0,a0,a0,l)
q=d.a
if(q.x&&!q.as)k=new C.a3J(t,q.y?D.GW:D.a91,v,a0)}else{j=a0
i=a0
if(q.Q){k=new C.a3J(t,D.a92,v,a0)
if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.lf(A.ax(97,q.A()>>>16&255,q.A()>>>8&255,q.A()&255))}}else if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.lf(A.ax(97,q.A()>>>16&255,q.A()>>>8&255,q.A()&255))}else if(q.at){s=s==null?a0:s.lf(a2.b)
q=x.CW
if(q==null)q=w.gBw()
j=new A.jk(a0,a0,a0,a0,l.jl(q.U(a2.b)))}}h=a3.LM(A.bJ(d.a.c))
q=d.a
g=q.at?", Today":""
f=h+", "+a3.Wn(q.c)+g
a3=d.a
q=a3.y
if(q)f="Start date "+f
else if(a3.z)f="End date "+f
q=q||a3.z
e=A.ar(B.ah,A.br(a0,a0,a0,new A.kI(!0,A.o(h,a0,a0,a0,a0,a0,s,a0,a0,a0),a0),!1,a0,a0,a0,!1,a0,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,f,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,q,a0,a0,a0,a0,a0,a0,B.a7,a0),B.F,a0,a0,j,a0,a0,a0,a0,a0,a0,a0,a0)
if(k!=null)e=A.hH(e,a0,a0,k,B.aS)
return!a3.w?A.ce1(!1,a0,!0,e,!0,l,!0,!1,a0,a3.d,a0,B.bV,a0,a0,a0,a0,a0,a3.f,a0,a0,a0,a0,a0,a0,a0,a0,new C.btV(d),a0,a0,a0,new A.b9(new C.btW(d,r),y.cS),a0,a0,a0,u):e}}
C.PD.prototype={
H(){return"_HighlightPainterStyle."+this.b}}
C.a3J.prototype={
b_(d,e){var x,w,v,u,t,s,r=this.c
if(r===D.fDG)return
$.as()
x=A.bm()
x.r=this.b.gp()
x.b=B.ct
w=this.d
A:{if(B.c5===w){v=!0
break A}if(B.bg===w){v=!1
break A}v=null}B:{u=D.a91===r
t=!(u&&v)
if(t){s=D.GW===r
v=s&&!v}else{s=null
v=!0}if(v){r=e.a/2
d.j3(new A.Y(r,0,r+r,0+e.b),x)
break B}if(!u)v=t?s:D.GW===r
else v=!0
if(v){d.j3(new A.Y(0,0,0+e.a/2,0+e.b),x)
break B}if(D.a92===r){d.j3(new A.Y(0,0,0+e.a,0+e.b),x)
break B}break B}},
fc(d){return!1}}
C.asy.prototype={
aWb(d,e,f,g){var x,w,v,u=A.c8(d,B.aA,y.y)
u.toString
x=this.as
w=C.cki(u,x,e,f)
v=C.ckh(u,x,e,f,g)
if(e==null||f==null)return"Date Range"
switch(d.T(y.I).w.a){case 0:u=v+" \u2013 "+w
break
case 1:u=w+" \u2013 "+v
break
default:u=null}return u},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
A.d(d)
x=A.c8(d,B.aA,y.y)
x.toString
w=A.ay(d,B.dU,y.w).w.geH()
v=A.qs(d)
A.d(d)
u=A.oH(d)
if(w===B.d6){t=v.w
s=t==null?u.gF_():t}else s=A.d(d).ok.f
r=v.r
if(r==null)r=u.gAH()
s=s==null?j:s.U(r)
t=k.c
q=k.d
p=k.aWb(d,t,q,k.e)
o=t!=null&&q!=null?x.a8M(t)+" \u2013 "+x.a8M(q):""
n=A.ciA(k.Q,k.z,w===B.ez,w,o,s,p)
x=A.bz(A.o(k.y,j,j,j,j,j,j,j,j,j),j,j,j,k.w,j,j)
t=y.p
m=new A.e7(B.HX,new A.X(B.fk,new A.em(B.qb,j,j,A.b1p(j,A.c([x,A.bz(A.o(k.x,j,j,j,j,j,j,j,j,j),j,j,j,k.r,j,j)],t),B.a09,B.x,0,8),j),j),j)
x=A.bO(d,B.bk)
x=x==null?j:x.gci()
x=(x==null?B.aW:x).k8(0,1.3).b5(14)
l=B.FX.aE(0,x/14)
switch(w.a){case 0:return A.mg(new C.bDW(k,!0,l,n,m))
case 1:return A.an(A.c([n,new A.fA(1,B.cj,A.a2(A.c([A.aA(k.f,1,j),m],t),B.b3,j,B.r,B.W,0,B.x),j)],t),B.b3,j,B.r,B.W,0,j,j)}}}
C.a3Z.prototype={
Y(){return new C.PJ()}}
C.PJ.prototype={
au(){var x,w,v=this
v.aQ()
x=v.a
v.f=x.c
w=$.ad()
v.w=new A.bV(B.aK,w)
v.r=x.d
v.x=new A.bV(B.aK,w)},
m(){var x,w=this.w
w===$&&A.b()
x=$.ad()
w.R$=x
w.N$=0
w=this.x
w===$&&A.b()
w.R$=x
w.N$=0
this.al()},
bC(){var x,w,v,u,t=this
t.d1()
x=t.c
x.toString
x=A.c8(x,B.aA,y.y)
x.toString
w=t.f
if(w!=null){t.a.toString
w=x.a8L(w)
t.d=w
t.a.toString
v=!t.Q
u=t.w
u===$&&A.b()
t.aqY(u,w,v)
t.Q=v}w=t.r
if(w!=null){t.a.toString
x=x.a8L(w)
t.e=x
w=t.x
w===$&&A.b()
t.aqY(w,x,!1)}},
kS(){var x,w,v,u=this,t={},s=u.arP(u.f)
t.a=s
x=u.arP(u.r)
if(s==null&&x==null){w=u.f
w.toString
v=u.r
v.toString
if(w.kF(v)){u.a.toString
w=u.c
w.toString
A.c8(w,B.aA,y.y).toString
t.a="Invalid range."}}u.v(new C.bDZ(t,u,x))
return t.a==null&&x==null},
amS(d){var x=this.c
x.toString
x=A.c8(x,B.aA,y.y)
x.toString
this.a.toString
return x.az_(d)},
arP(d){var x,w=this
if(d==null){w.a.toString
x=w.c
x.toString
A.c8(x,B.aA,y.y).toString
return"Invalid format."}else if(!w.RZ(d)){w.a.toString
x=w.c
x.toString
A.c8(x,B.aA,y.y).toString
return"Out of range."}return null},
RZ(d){var x=this.a
if(d.jq(x.e)||d.kF(x.f))return!1
return!0},
aqY(d,e,f){var x=d.a.au8(e)
d.fd(f?x.mB(A.ee(B.Z,0,e.length,!1)):x)},
b1_(d){var x=this
x.v(new C.bDY(x,d))
if(x.a.CW)x.kS()},
aYR(d){var x=this
x.v(new C.bDX(x,d))
if(x.a.CW)x.kS()},
C(d){var x,w,v,u,t,s,r=this,q=null,p="mm/dd/yyyy"
A.d(d)
A.c8(d,B.aA,y.y).toString
x=A.zp(d)
w=x.p1
if(w==null)w=B.c9
v=r.w
v===$&&A.b()
u=x.dy
t=r.a
t.toString
v=A.aA(A.cX(q,B.as,!0,q,!0,B.D,q,A.d0(),v,q,q,q,q,q,2,A.kP(q,w,q,q,q,q,q,q,!0,q,q,q,q,q,r.y,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q,q,"Start Date",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.T,!0,q,!0,q,!1,q,B.aP,q,q,q,q,q,t.cx,q,q,q,1,q,q,!1,"\u2022",q,r.gb0Z(),q,q,q,!1,q,q,!1,q,!0,q,B.aO,q,q,q,q,q,q,q,q,q,q,q,q,!0,B.af,q,B.aG,q,q,q,q),1,q)
t=r.x
t===$&&A.b()
s=r.a
s.toString
return A.an(A.c([v,B.b6,A.aA(A.cX(q,B.as,!1,q,!0,B.D,q,A.d0(),t,q,q,q,q,q,2,A.kP(q,w,q,q,q,q,q,q,!0,q,q,q,q,q,r.z,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q,q,"End Date",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.T,!0,q,!0,q,!1,q,B.aP,q,q,q,q,q,s.cx,q,q,q,1,q,q,!1,"\u2022",q,r.gaYQ(),q,q,q,!1,q,q,!1,q,!0,q,B.aO,q,q,q,q,q,q,q,q,q,q,q,q,!0,B.af,q,B.aG,q,q,q,q),1,q)],y.p),B.S,q,B.r,B.u,0,q,q)}}
C.a8c.prototype={
b0(d){this.be(d)
this.nH()},
bC(){var x,w,v,u,t=this
t.d1()
x=t.bV$
w=t.gkO()
v=t.c
v.toString
v=A.nk(v)
t.fA$=v
u=t.mt(v,w)
if(w){t.hp(x,t.e8$)
t.e8$=!1}if(u)if(x!=null)x.m()},
m(){var x,w=this
w.fz$.aZ(0,new C.bW8())
x=w.bV$
if(x!=null)x.m()
w.bV$=null
w.al()}}
C.aiI.prototype={
C(d){return this.c},
$iFJ:1,
guP(){return this.d}}
C.acG.prototype={
at8(d){return this.dx}}
var z=a.updateTypes(["~()","B(fD)","B(pO)","Z(Z,pO)","ua(aX<f,Z>)","~(aE?)","~(B)","~(f)","f(Z)","N<B6?>(al)","N<fD>(al)","fD()","N<uq>(al)","pO(@)","Au(@)","MT(al)","u8()","f(f)","N<rh>(al)","h(rh)","N<~>(bl<ri>)","ua(f,f)","JN(m4)","ua(qN)","h?(fD)","h(uq)","~(aE)","~(og)","~(on)","~(lq)","C6()"])
C.c_J.prototype={
$1(d){d.S($.dA(),y.L)
return d.S($.c2T(),y.C).OB()},
$S:z+9}
C.c_E.prototype={
$1(d){return this.aBz(d)},
aBz(d){var x=0,w=A.m(y.m),v,u,t,s,r
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(d.S($.c32().glO(),y.ao),$async$$1)
case 3:u=f
t=J
s=u
r=C
x=4
return A.e(d.S($.cqJ().glO(),y.U),$async$$1)
case 4:v=t.crg(s,new r.c_C(f),new C.c_D(u))
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+10}
C.c_C.prototype={
$1(d){var x=this.a
x=x==null?null:x.a
if(x==null)x="free"
return d.a===x},
$S:z+1}
C.c_D.prototype={
$0(){return J.k0(this.a)},
$S:z+11}
C.c_K.prototype={
$1(d){d.S($.dA(),y.L)
return d.S($.c2T(),y.C).OC()},
$S:z+12}
C.b8q.prototype={
$1(d){return C.cBO(A.aM(y.f.a(d),y.N,y.z))},
$S:z+13}
C.b8p.prototype={
$1(d){var x,w,v=A.aM(y.f.a(d),y.N,y.z),u=v.h(0,"id")
u=J.bd(u==null?"":u)
x=v.h(0,"room_id")
if(x!=null)J.bd(x)
x=v.h(0,"status")
x=J.bd(x==null?"draft":x)
w=v.h(0,"total_cents")
v=w==null?v.h(0,"amount_cents"):w
return new C.Au(u,x,B.l.F(A.dP(v==null?0:v)))},
$S:z+14}
C.b8o.prototype={
$1(d){return A.aM(y.f.a(d),y.N,y.z)},
$S:165}
C.c0q.prototype={
$1(d){return new C.MT(d.S($.dB(),y.cx))},
$S:z+15}
C.c0p.prototype={
$1(d){return this.aBG(d)},
aBG(d){var x=0,w=A.m(y.D),v,u,t,s,r,q,p
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:d.S($.dA(),y.L)
q=A
p=J
x=4
return A.e(d.S($.iI(),y.h).Gu(),$async$$1)
case 4:x=3
return A.e(q.jG(p.bX(f,new C.c0o(d),y.as),!1,y.v),$async$$1)
case 3:u=f
t=A.c([],y.cR)
for(s=J.aK(u);s.q();){r=s.gI()
if(r.b)t.push(r.a)}v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:387}
C.c0o.prototype={
$1(d){return this.aBF(d)},
aBF(d){var x=0,w=A.m(y.v),v,u=this,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=A
s=d
x=3
return A.e(u.a.S($.j3().$1(d.a).glO(),y.g),$async$$1)
case 3:v=new t.avA(s,f.iI(B.a0u))
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:1154}
C.b89.prototype={
$1(d){return d.a===this.a},
$S:60}
C.b8a.prototype={
$1(d){return d.b},
$S:370}
C.c0n.prototype={
$1(d){return this.aBE(d)},
aBE(d){var x=0,w=A.m(y.s),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.i(function(a0,a1){if(a0===1)return A.j(a1,w)
for(;;)switch(x){case 0:d.S($.dA(),y.L)
x=3
return A.e(d.S($.c34().glO(),y.ch),$async$$1)
case 3:u=a1
t=d.S($.aCC(),y.j)
s=t.a_(new A.aE(Date.now(),0,!1))
r=y.N
q=J.bX(u,new C.c0m(),r)
p=A.K(q,q.$ti.i("aj.E"))
o=d.S($.cqT(),y.A)
if(p.length===0){v=new C.rh(t,s.b,s.a,B.DU,D.a6O,D.a6P,B.a_y,B.cD)
x=1
break}q=s.b
n=s.a
x=4
return A.e(A.jG(A.c([o.OP(n,p,q),o.Ot(p),o.On(p)],y.a9),!1,y.K),$async$$1)
case 4:m=a1
l=J.aw(m)
k=y.W.a(l.h(m,0))
j=y.H.a(l.h(m,1))
i=y.E.a(l.h(m,2))
r=A.aQ(r)
l=k.a
if(l==null)l=A.c([],y.Y)
h=l.length
g=0
for(;g<l.length;l.length===h||(0,A.E)(l),++g)r.B(0,l[g].b)
f=A.K(r,r.$ti.c)
x=5
return A.e(o.Ow(f),$async$$1)
case 5:e=a1
v=new C.rh(t,q,n,u,k,j,C.cMk(i),e)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+18}
C.c0m.prototype={
$1(d){return d.a},
$S:370}
C.bjj.prototype={
$1(d){return d==null?null:A.kG(J.bd(d))},
$S:168}
C.c23.prototype={
$1(d){return d.f},
$S:z+2}
C.c24.prototype={
$2(d,e){return d+e.WS(this.a)},
$S:z+3}
C.c29.prototype={
$1(d){return d.f&&d.w==null},
$S:z+2}
C.c2a.prototype={
$2(d,e){return d+e.WS(this.a)},
$S:z+3}
C.bY8.prototype={
$2(d,e){var x=this.a,w=x.h(0,e)
w.toString
x=x.h(0,d)
x.toString
return B.l.bo(w,x)},
$S(){return this.b.i("v(0,0)")}}
C.bZT.prototype={
$1(d){return A.q(d.h(0,1))+","},
$S:87}
C.b8K.prototype={
$0(){return B.bc},
$S:24}
C.b8J.prototype={
$2(d,e){return this.a.aiB(this.b,"Could not load reports.",new C.b8H(this.c))},
$S:111}
C.b8H.prototype={
$0(){return this.a.bq($.c34())},
$S:0}
C.b8I.prototype={
$1(d){var x=this
if(J.eU(d))return x.a.al3(x.b,R.Ob,"No billing visibility","Reports cover rooms you own or where your role grants billing access.")
return x.a.baF(x.b,x.c)},
$S:1156}
C.b8G.prototype={
$0(){return B.bc},
$S:24}
C.b8F.prototype={
$2(d,e){return this.a.aiB(this.b,"Could not load report data.",new C.b8D(this.c))},
$S:111}
C.b8D.prototype={
$0(){return this.a.bq($.cau())},
$S:0}
C.b8E.prototype={
$1(d){var x=this.a,w=this.b
return A.a2(A.c([x.aOw(w,d),B.Q,x.aQ5(w,d),B.Q,x.beo(w,d),B.Q,x.aV7(w,this.c,d)],y.p),B.S,null,B.r,B.u,0,B.x)},
$S:z+19}
C.b8C.prototype={
$1(d){return this.aBl(d)},
aBl(d){var x=0,w=A.m(y.n),v,u=this,t,s,r,q
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:q=d.ga9(d)
x=q===D.Fk?3:5
break
case 3:x=6
return A.e(C.c8K(u.a,A.ch(2020,1,1,0,0),new A.aE(Date.now(),0,!1)),$async$$1)
case 6:t=f
if(t==null){x=1
break}s=t.a
r=t.b
u.b.X($.aCC().gce(),y.M).saV(new C.u8(D.Fk,s,r))
x=4
break
case 5:u.b.X($.aCC().gce(),y.M).saV(new C.u8(q,null,null))
case 4:case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+20}
C.b8y.prototype={
$2(d,e){return d+e},
$S:89}
C.b8z.prototype={
$0(){var x=this
return x.a.Ih(x.b,x.c,x.d)},
$S:0}
C.b8A.prototype={
$0(){var x=this
return x.a.QX(x.b,x.c,x.d)},
$S:0}
C.b8B.prototype={
$1(d){return'"'+A.cz(d,'"','""')+'"'},
$S:18}
C.b8v.prototype={
$2(d,e){return d+e},
$S:89}
C.b8x.prototype={
$2(d,e){var x,w="pw.1",v=null
A.F(w)
A.F(w)
A.F(w)
A.F(w)
x=E.ct(d,F.co(v,v,v,v,v,v,v,v,v,G.aC,v,v,11,v,v,v,!0,v,v,v,v))
A.F(w)
A.F(w)
A.F(w)
return E.N5(A.c([x,E.ct(e,F.co(v,v,v,v,v,v,v,v,v,G.aC,v,v,11,v,G.e9,v,!0,v,v,v,v))],y.o),M.nm,M.zN)},
$S:z+21}
C.b8w.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="pw.1",h=null,g="n/a"
A.F(i)
A.F(i)
A.F(i)
A.F(i)
A.F(i)
A.F(i)
x=H.af3(E.ct("CaseThread \u2014 Executive Summary",F.co(h,h,h,h,h,h,h,h,h,G.aC,h,h,20,h,G.e9,h,!0,h,h,h,h)),0,h)
A.F(i)
w=j.a
v=w.a.gkH()
u=j.b
t=B.o.a6(u.i_().j(0),0,16)
A.F(i)
A.F("pdf.1")
t=E.ct("Window: "+v+" \xb7 Generated "+t,F.co(h,T.acV,h,h,h,h,h,h,h,G.aC,h,h,10,h,h,h,!0,h,h,h,h))
A.F(i)
v=E.fl(h,16,h)
A.F(i)
s=H.af3(h,2,"Totals")
r=j.c
q=j.d
q=r.$2("Billable hours",q==null?g:C.Cq(q))
p=j.e
p=r.$2("Unbilled hours",p==null?g:C.Cq(p))
o=j.f
n=o==null
m=r.$2("Invoiced",n?g:C.bZS(o.a))
o=r.$2("Outstanding (draft + sent)",n?g:C.bZS(o.b))
l=r.$2("Storage used",C.c8p(j.r))
A.F(i)
k=E.fl(h,16,h)
A.F(i)
k=A.c([x,t,v,s,q,p,m,o,l,k,H.af3(h,2,"Billable hours by room")],y.o)
l=j.w
o=C.c86(l,u)
m=A.t(o).i("d3<1,2>")
m=A.rv(new A.d3(o,m),10,m.i("z.E"))
o=y.l
B.i.K(k,A.ib(m,new C.b8s(r,w),A.t(m).i("z.E"),o))
A.F(i)
k.push(E.fl(h,16,h))
A.F(i)
k.push(H.af3(h,2,"Billable hours by member"))
u=C.c85(l,u)
l=A.t(u).i("d3<1,2>")
l=A.rv(new A.d3(u,l),10,l.i("z.E"))
B.i.K(k,A.ib(l,new C.b8t(r,w),A.t(l).i("z.E"),o))
A.F(i)
k.push(E.fl(h,16,h))
A.F(i)
k.push(H.af3(h,2,"Case status"))
B.i.K(k,new A.a9(B.DY,new C.b8u(r,w),y.b))
return E.Di(k,M.mm)},
$S:z+22}
C.b8s.prototype={
$1(d){return this.a.$2(this.b.FT(d.a),C.Cq(d.b))},
$S:z+4}
C.b8t.prototype={
$1(d){return this.a.$2(this.b.btv(d.a),C.Cq(d.b))},
$S:z+4}
C.b8u.prototype={
$1(d){return this.a.$2(C.cgu(d),""+J.eA(this.b.d,new C.b8r(d)).gu(0))},
$S:z+23}
C.b8r.prototype={
$1(d){return d.f===this.a},
$S:60}
C.bkw.prototype={
$1(d){var x=this,w=x.a,v=x.c
return A.dK(x.b,new C.bkt(w,v,x.d,d),new C.bku(w,v),new C.bkv(),!1,!0,!1)},
$S:z+24}
C.bkt.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=r.d,m=A.d(o).ok,l=A.d(o).ax.a===B.p?B.bP:B.M,k=A.aT(S.CN,A.d(o).ax.a===B.p?B.B:B.C,q,q,28),j=m.w
j=j==null?q:j.cT(B.aR)
j=A.o(n.b+" plan",q,q,q,q,q,j,q,q,q)
x=n.c
x=x===0?"Free forever":"$"+B.l.aq(x/100,0)+"/month"
w=m.Q
if(w==null)w=q
else w=w.U(A.d(o).ax.a===B.p?B.B:B.C)
v=y.p
l=A.f9(new A.X(B.aB,A.an(A.c([k,B.bf,A.aA(A.a2(A.c([j,A.o(x,q,q,q,q,q,w,q,q,q)],v),B.S,q,B.r,B.u,0,B.x),1,q)],v),B.y,q,B.r,B.u,0,q,q),q),l,q,q,q,B.a4)
w=m.at
k=w==null
if(k)j=q
else j=w.ft(A.d(o).ax.a===B.p?B.B:B.C,B.aj,1.5)
j=A.o("THIS MONTH",q,q,q,q,q,j,q,q,q)
x=p.TY(o,n,d,L.a8m,"Evidence storage",C.cMT())
u=p.TY(o,n,d,L.a8j,"AI analyses",C.c8R())
t=p.TY(o,n,d,L.a8k,"Transcription minutes",C.c8R())
s=p.TY(o,n,d,L.a8l,"OSINT lookups",C.c8R())
if(k)k=q
else k=w.ft(A.d(o).ax.a===B.p?B.B:B.C,B.aj,1.5)
return A.fN(A.c([l,B.aY,j,B.Q,x,u,t,s,B.aY,A.o("CASE LIMITS",q,q,q,q,q,k,q,q,q),B.Q,p.alG(o,"Case rooms",n.d),p.alG(o,"Members per room",n.e),B.aY,p.b8L(o,r.c,n),B.aY,D.fhI],v),q,B.bq,q,B.a6,!1)},
$S:z+25}
C.bkv.prototype={
$0(){return B.bc},
$S:24}
C.bku.prototype={
$2(d,e){return this.a.arK(this.b,"Could not load usage.")},
$S:111}
C.bky.prototype={
$0(){return B.bc},
$S:24}
C.bkx.prototype={
$2(d,e){return this.a.arK(this.b,"Could not load your plan.")},
$S:111}
C.bkr.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.bks.prototype={
$0(){var x=this
return x.a.TA(x.b,x.c,x.d)},
$S:0}
C.c1D.prototype={
$1(d){var x=this.a.a
return x},
$S:17}
C.btO.prototype={
$0(){this.a.r.oo(!0)},
$S:0}
C.btN.prototype={
$0(){var x,w,v,u,t=null,s=this.a,r=s.gml(),q=r.y
switch(q==null?A.t(r).i("aN.T").a(q):q){case B.eO:s.r.oo(!1)
r.sp(B.ep)
break
case B.ep:q=s.gw8()
x=q.y
w=!1
if((x==null?A.t(q).i("aN.T").a(x):x)!=null){x=s.gpQ()
v=x.y
u=v==null
if((u?A.t(x).i("aN.T").a(v):v)!=null){w=q.y
if(w==null)w=A.t(q).i("aN.T").a(w)
w.toString
x=u?A.t(x).i("aN.T").a(v):v
x.toString
x=w.kF(x)}else x=w}else x=w
if(x)s.gpQ().sp(t)
x=q.y
w=x==null
if((w?A.t(q).i("aN.T").a(x):x)!=null){if(w)x=A.t(q).i("aN.T").a(x)
x.toString
x=!s.RZ(x)}else x=!1
if(x){q.sp(t)
s.gpQ().sp(t)}else{q=s.gpQ()
x=q.y
w=x==null
if((w?A.t(q).i("aN.T").a(x):x)!=null){if(w)x=A.t(q).i("aN.T").a(x)
x.toString
x=!s.RZ(x)
s=x}else s=!1
if(s)q.sp(t)}r.sp(B.eO)
break
case B.no:case B.lc:break}},
$S:0}
C.btP.prototype={
$0(){var x=this.b
this.a.gw8().sp(x)
return x},
$S:0}
C.btM.prototype={
$0(){var x=this.b
this.a.gpQ().sp(x)
return x},
$S:0}
C.btQ.prototype={
$1(d){return this.a.a},
$S:17}
C.bpe.prototype={
$0(){this.a.y=!1},
$S:0}
C.bpf.prototype={
$0(){this.a.y=!0},
$S:0}
C.bpg.prototype={
$0(){var x,w=this.a,v=w.f
v=v!=null&&w.r==null&&!this.b.jq(v)
x=this.b
if(v){w.r=x
w.a.y.$1(x)}else{w.f=x
w.a.x.$1(x)
if(w.r!=null){w.r=null
w.a.y.$1(null)}}},
$S:0}
C.bph.prototype={
$2(d,e){return this.a.ag3(d,e,!0)},
$S:50}
C.bpi.prototype={
$2(d,e){return this.a.ag3(d,e,!1)},
$S:50}
C.bpk.prototype={
$0(){if(this.b){var x=this.a
if(x.w==null)x.w=x.a.f}},
$S:0}
C.bpj.prototype={
$0(){var x,w,v=this.a,u=v.w
u.toString
x=this.b.a
w=v.b4H(u,x)
if(w!=null){v.w=w
v.r=x}},
$S:0}
C.btX.prototype={
$1$1(d,e){var x=d.$1(this.a)
return x==null?d.$1(this.b):x},
$1(d){return this.$1$1(d,y.z)},
$S:201}
C.btY.prototype={
$1$2(d,e,f){return this.a.$1$1(new C.btZ(d,e,f),f)},
$2(d,e){return this.$1$2(d,e,y.z)},
$S:188}
C.btZ.prototype={
$1(d){var x=this.a.$1(d)
return x==null?null:x.a_(this.b)},
$S(){return this.c.i("0?(jb?)")}}
C.btS.prototype={
$1(d){var x=d.gEf()
return x},
$S:94}
C.btT.prototype={
$1(d){var x=d.gzZ()
return x},
$S:94}
C.btW.prototype={
$1(d){return this.b.$1$1(new C.btR(this.a,d),y.G)},
$S:21}
C.btR.prototype={
$1(d){var x,w=null
if(this.a.a.Q){x=d.gNi()
w=x==null?null:x.a_(this.b)}else{x=d.gEg()
w=x==null?null:x.a_(this.b)}return w},
$S:189}
C.btU.prototype={
$1(d){return d.ax},
$S:190}
C.btV.prototype={
$0(){var x=this.a.a
return x.rZ(x.c)},
$S:0}
C.bDW.prototype={
$2(d,e){var x=this,w=Math.min(x.c.b,270),v=A.c([],y.p)
if(e.d>=w)v.push(x.d)
v.push(A.aA(x.a.f,1,null))
v.push(x.e)
return A.a2(v,B.b3,null,B.r,B.W,0,B.x)},
$S:1157}
C.bDZ.prototype={
$0(){var x=this.b
x.y=this.a.a
x.z=this.c},
$S:0}
C.bDY.prototype={
$0(){var x=this.a,w=this.b
x.d=w
w=x.amS(w)
x.f=w
x.a.r.$1(w)},
$S:0}
C.bDX.prototype={
$0(){var x=this.a,w=this.b
x.e=w
w=x.amS(w)
x.r=w
x.a.w.$1(w)},
$S:0}
C.bW8.prototype={
$2(d,e){if(!d.a)d.P(e)},
$S:47};(function aliases(){var x=C.a8c.prototype
x.aKR=x.m})();(function installTearOffs(){var x=a._static_0,w=a._instance_0u,v=a._instance_1u,u=a._static_1
x(C,"cLO","cEG",30)
w(C.C6.prototype,"gjk","cP",16)
v(C.rh.prototype,"gBr","FT",17)
u(C,"cMT","cCe",8)
u(C,"c8R","cCf",8)
var t
w(t=C.a2j.prototype,"gRE","a37",0)
w(t,"gRx","a2O",0)
w(t,"gIA","a31",0)
v(t,"gaky","b10",5)
v(t,"gakd","aYS",5)
w(t=C.a1s.prototype,"gbc0","bc1",0)
v(t,"gbgV","bgW",26)
v(t=C.a1u.prototype,"gaZi","aZj",6)
v(t,"gaZk","aZl",27)
v(t,"gaZm","aZn",28)
v(t,"gaYv","aYw",29)
v(C.a4k.prototype,"gaSn","aSo",6)
v(t=C.PJ.prototype,"gb0Z","b1_",7)
v(t,"gaYQ","aYR",7)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.cg,[C.c_J,C.c_E,C.c_C,C.c_K,C.b8q,C.b8p,C.b8o,C.c0q,C.c0p,C.c0o,C.b89,C.b8a,C.c0n,C.c0m,C.bjj,C.c23,C.c29,C.bZT,C.b8I,C.b8E,C.b8C,C.b8B,C.b8w,C.b8s,C.b8t,C.b8u,C.b8r,C.bkw,C.bkt,C.bkr,C.c1D,C.btQ,C.btX,C.btY,C.btZ,C.btS,C.btT,C.btW,C.btR,C.btU])
w(A.di,[C.c_D,C.b8K,C.b8H,C.b8G,C.b8D,C.b8z,C.b8A,C.bkv,C.bky,C.bks,C.btO,C.btN,C.btP,C.btM,C.bpe,C.bpf,C.bpg,C.bpk,C.bpj,C.btV,C.bDZ,C.bDY,C.bDX])
w(A.D,[C.MT,C.rh,C.u8,C.pO,C.Au,C.uh])
v(C.C6,A.f_)
w(A.h7,[C.ri,C.PD])
w(A.dm,[C.c24,C.c2a,C.bY8,C.b8J,C.b8F,C.b8y,C.b8v,C.b8x,C.bku,C.bkx,C.bph,C.bpi,C.bDW,C.bW8])
w(A.by,[C.ak2,C.H8])
w(A.O,[C.TT,C.a1r,C.a1t,C.a4j,C.a2m,C.a3Z])
w(A.a_,[C.a8c,C.a1s,C.a1u,C.a4k,C.aqj,C.PJ])
v(C.a2j,C.a8c)
w(A.a5,[C.aoU,C.aqi,C.asy,C.aiI])
v(C.a3k,A.bD)
v(C.bGJ,A.alp)
v(C.bGN,A.alr)
v(C.a3J,A.yE)
v(C.acG,A.Zz)
x(C.a8c,A.kl)})()
A.cD(b.typeUniverse,JSON.parse('{"C6":{"f_":["u8"]},"ak2":{"by":[],"O":[],"h":[]},"H8":{"by":[],"O":[],"h":[]},"TT":{"O":[],"h":[]},"a1r":{"O":[],"h":[]},"a1t":{"O":[],"h":[]},"a3k":{"bD":[],"bu":[],"h":[]},"a4j":{"O":[],"h":[]},"a2m":{"O":[],"h":[]},"a3Z":{"O":[],"h":[]},"PJ":{"a_":["a3Z"]},"a2j":{"a_":["TT"]},"aoU":{"a5":[],"h":[]},"a1s":{"a_":["a1r"]},"a1u":{"a_":["a1t"]},"aqi":{"a5":[],"h":[]},"a4k":{"a_":["a4j"]},"aqj":{"a_":["a2m"]},"a3J":{"aG":[]},"asy":{"a5":[],"h":[]},"aiI":{"a5":[],"FJ":[],"h":[]},"acG":{"a5":[],"h":[]}}'))
var y=(function rtii(){var x=A.J
return{V:x("ck<c3>"),Z:x("aR<w<eB>>"),X:x("aR<w<fD>>"),u:x("aR<fD>"),a:x("aR<rh>"),F:x("aR<uq>"),L:x("aR<fW?>"),C:x("CY"),R:x("i5<ri>"),c:x("dW<lq>"),d:x("dW<og>"),e:x("dW<on>"),G:x("P"),x:x("cch"),T:x("K2<aE>"),I:x("jE"),J:x("eX"),ch:x("N<w<eB>>"),ao:x("N<w<fD>>"),as:x("N<+room,visible(eB,B)>"),g:x("N<h2>"),U:x("N<B6?>"),cN:x("qN"),cR:x("x<eB>"),a9:x("x<N<D>>"),Y:x("x<pO>"),p:x("x<h>"),o:x("x<ef>"),S:x("x<mD>"),k:x("x<~(ck<c3>)>"),B:x("bq<a_<O>>"),t:x("bq<PJ>"),D:x("w<eB>"),E:x("w<ac<f,@>>"),aH:x("w<v>"),aN:x("ac<f,f>"),P:x("ac<f,@>"),f:x("ac<@,@>"),b:x("a9<qN,ef>"),y:x("zK"),w:x("ic"),K:x("D"),bc:x("c5<~(ck<c3>)>"),m:x("fD"),v:x("+room,visible(eB,B)"),s:x("rh"),aa:x("Au"),j:x("u8"),af:x("ri"),A:x("MT"),bw:x("fk<D?>"),h:x("G9"),N:x("f"),cx:x("h5"),H:x("uh<w<Au>>"),W:x("uh<w<pO>>"),cn:x("pO"),bv:x("jp"),O:x("L<f>"),l:x("ef"),cD:x("dy"),Q:x("a3k"),M:x("C6"),q:x("h8"),cS:x("b9<P?>"),i:x("Z"),z:x("@"),r:x("v"),_:x("P?"),aQ:x("K2<aE>?"),b8:x("fq?"),n:x("~"),aI:x("~()")}})();(function constants(){var x=a.makeConstList
D.Ir=new C.bGJ()
D.aiO=new A.yK(0,null,null,null,null,null,null)
D.ajC=new A.ai(0,0,0,3)
D.e0z=new A.ag(62537,"MaterialIcons",null,!1)
D.e2h=new A.aL(B.CJ,null,null,null,null)
D.e2x=new A.aL(B.Oe,null,null,null,null)
D.eVy=x([],A.J("x<fD>"))
D.xb=x([],A.J("x<Au>"))
D.rt=x([],y.Y)
D.fhE=new C.ri(0,"thisWeek")
D.fua=new A.a0("Week",null,null,null,null,null,null,null,null,null,null)
D.acn=new I.i5(D.fhE,null,D.fua,y.R)
D.a53=new C.ri(1,"thisMonth")
D.fsI=new A.a0("Month",null,null,null,null,null,null,null,null,null,null)
D.ack=new I.i5(D.a53,null,D.fsI,y.R)
D.fhF=new C.ri(2,"last30Days")
D.frG=new A.a0("30 days",null,null,null,null,null,null,null,null,null,null)
D.acr=new I.i5(D.fhF,null,D.frG,y.R)
D.Fk=new C.ri(3,"custom")
D.fsv=new A.a0("Custom",null,null,null,null,null,null,null,null,null,null)
D.aco=new I.i5(D.Fk,null,D.fsv,y.R)
D.eYx=x([D.acn,D.ack,D.acr,D.aco],A.J("x<i5<ri>>"))
D.fhG=new C.u8(D.a53,null,null)
D.fhI=new C.ak2(null)
D.fkd=new A.S(1/0,64)
D.fkx=new A.S(496,164)
D.frn=new A.a0("To move back to Free, cancel your subscription from your receipt email \u2014 we\u2019ll handle the rest.",null,null,null,null,null,null,null,null,null,null)
D.flb=new A.d8(D.frn,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.D,null)
D.a6P=new C.uh(D.xb,!1,y.H)
D.a6O=new C.uh(D.rt,!1,y.W)
D.fmv=new C.uh(null,!0,y.H)
D.fmw=new C.uh(null,!0,y.W)
D.fsf=new A.a0("Export PDF",null,null,null,null,null,null,null,null,null,null)
D.ft8=new A.a0("Export CSV",null,null,null,null,null,null,null,null,null,null)
D.fyN=new A.L("reports-export-csv",y.O)
D.fyM=new A.L("reports-export-pdf",y.O)
D.fyZ=new A.L("reports-period-selector",y.O)
D.fBi=new A.L("reports-section",y.O)
D.fD9=new C.aqi(null)
D.fDG=new C.PD(0,"none")
D.a91=new C.PD(1,"highlightLeading")
D.GW=new C.PD(2,"highlightTrailing")
D.a92=new C.PD(3,"highlightAll")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cVO","cqJ",()=>A.ls(new C.c_J(),A.J("B6?")))
x($,"cVK","cqH",()=>A.ls(new C.c_E(),y.m))
x($,"cVP","cqK",()=>A.ls(new C.c_K(),A.J("uq")))
x($,"cWf","cqT",()=>A.ep(new C.c0q(),y.A))
x($,"cWe","c34",()=>A.ls(new C.c0p(),y.D))
x($,"cWd","aCC",()=>A.pn(C.cLO(),y.M,y.j))
x($,"cWc","cau",()=>A.ls(new C.c0n(),y.s))})()};
(a=>{a["BWPSCaznEoBcowcafnoOhYhhkSs="]=a.current})($__dart_deferred_initializers__);