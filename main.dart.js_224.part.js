((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,E,M,N,O,P,Q,R,S,H,T,C={c_L:function c_L(){},c_G:function c_G(){},c_E:function c_E(d){this.a=d},c_F:function c_F(d){this.a=d},c_M:function c_M(){},
cEH(){return new C.C6()},
MU:function MU(d){this.a=d},
b8u:function b8u(){},
b8t:function b8t(){},
b8s:function b8s(){},
c0s:function c0s(){},
c0r:function c0r(){},
c0q:function c0q(d){this.a=d},
C6:function C6(){this.b=null},
rj:function rj(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
b8d:function b8d(d){this.a=d},
b8e:function b8e(){},
c0p:function c0p(){},
c0o:function c0o(){},
cgu(d){return""+A.b0(d)+"-"+B.o.bF(B.f.j(A.b7(d)),2,"0")+"-"+B.o.bF(B.f.j(A.bG(d)),2,"0")},
cBP(d){var x,w,v,u,t=new C.bjq(),s=d.h(0,"room_id")
s=J.bd(s==null?"":s)
x=d.h(0,"user_id")
x=J.bd(x==null?"":x)
w=d.h(0,"description")
J.bd(w==null?"":w)
w=t.$1(d.h(0,"started_at"))
if(w==null)w=new A.aE(Date.now(),0,!1)
t=t.$1(d.h(0,"ended_at"))
v=J.p(d.h(0,"billable"),!1)
A.dg(d.h(0,"hourly_rate"))
u=d.h(0,"invoice_id")
u=u==null?null:J.bd(u)
return new C.pQ(s,x,w,t,!v,u)},
c88(d,e){var x,w,v,u,t,s=y.N,r=y.i,q=A.C(s,r)
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.F)(d),++w){v=d[w]
if(!v.f)continue
u=v.a
t=q.h(0,u)
if(t==null)t=0
q.l(0,u,t+v.WR(e))}return C.c7Z(q,s,r)},
c87(d,e){var x,w,v,u,t,s=y.N,r=y.i,q=A.C(s,r)
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.F)(d),++w){v=d[w]
if(!v.f)continue
u=v.b
t=q.h(0,u)
if(t==null)t=0
q.l(0,u,t+v.WR(e))}return C.c7Z(q,s,r)},
c8R(d,e){return new A.ag(d,new C.c25(),A.a6(d).i("ag<1>")).io(0,0,new C.c26(e))},
cmL(d,e){return new A.ag(d,new C.c2b(),A.a6(d).i("ag<1>")).io(0,0,new C.c2c(e))},
c8O(d){var x,w,v,u,t,s,r,q
for(x=d.length,w=0,v=0,u=0;u<x;++u){t=d[u]
s=t.c
r=s.toLowerCase()
if(r==="void"||r==="cancelled"||r==="canceled")continue
q=t.d
w+=q
r=s.toLowerCase()
if(r==="draft"||r==="sent")v+=q}return new A.avt(w,v)},
cMl(d){var x,w,v,u,t=y.N,s=y.r,r=A.C(t,s)
for(x=J.aK(d);x.q();){w=x.gI()
v=w.h(0,"room_id")
u=v==null?null:J.bd(v)
if(u==null||u.length===0)continue
v=r.h(0,u)
if(v==null)v=0
w=A.dg(w.h(0,"file_size_bytes"))
w=w==null?null:B.l.F(w)
r.l(0,u,v+(w==null?0:w))}return C.c7Z(r,t,s)},
c7Z(d,e,f){var x,w,v,u,t=A.t(d).i("bE<1>"),s=A.K(new A.bE(d,t),t.i("z.E"))
B.i.ed(s,new C.bY9(d,e))
t=A.C(e,f)
for(x=s.length,w=0;w<s.length;s.length===x||(0,A.F)(s),++w){v=s[w]
u=d.h(0,v)
t.l(0,v,u==null?f.a(u):u)}return t},
Cp(d){var x=B.l.aM(d*10)/10
return x===(x<0?Math.ceil(x):Math.floor(x))?""+B.l.F(x)+" h":B.l.aq(x,1)+" h"},
bZU(d){var x=Math.abs(d),w=B.f.ao(x,100),v=B.o.bF(B.f.j(B.f.aF(x,100)),2,"0"),u=A.aBZ(B.f.j(w),A.cc("(\\d)(?=(\\d{3})+(?!\\d))",!0,!1),new C.bZV(),null)
return(d<0?"-":"")+"$"+u+"."+v},
c8r(d){if(d>=1073741824)return B.l.aq(d/1073741824,1)+" GB"
if(d>=1048576)return B.l.aq(d/1048576,0)+" MB"
if(d>=1024)return B.l.aq(d/1024,0)+" KB"
return""+d+" B"},
rk:function rk(d,e){this.a=d
this.b=e},
u9:function u9(d,e,f){this.a=d
this.b=e
this.c=f},
pQ:function pQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h
_.w=i},
bjq:function bjq(){},
Au:function Au(d,e,f){this.a=d
this.c=e
this.d=f},
ui:function ui(d,e,f){this.a=d
this.b=e
this.$ti=f},
c25:function c25(){},
c26:function c26(d){this.a=d},
c2b:function c2b(){},
c2c:function c2c(d){this.a=d},
bY9:function bY9(d,e){this.a=d
this.b=e},
bZV:function bZV(){},
cgv(d){var x
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
b8O:function b8O(){},
b8N:function b8N(d,e,f){this.a=d
this.b=e
this.c=f},
b8L:function b8L(d){this.a=d},
b8M:function b8M(d,e,f){this.a=d
this.b=e
this.c=f},
b8K:function b8K(){},
b8J:function b8J(d,e,f){this.a=d
this.b=e
this.c=f},
b8H:function b8H(d){this.a=d},
b8I:function b8I(d,e,f){this.a=d
this.b=e
this.c=f},
b8G:function b8G(d,e){this.a=d
this.b=e},
b8C:function b8C(){},
b8D:function b8D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8E:function b8E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8F:function b8F(){},
b8z:function b8z(){},
b8B:function b8B(){},
b8A:function b8A(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
b8w:function b8w(d,e){this.a=d
this.b=e},
b8x:function b8x(d,e){this.a=d
this.b=e},
b8y:function b8y(d,e){this.a=d
this.b=e},
b8v:function b8v(d){this.a=d},
ci2(){return new C.H7(null)},
cCf(d){if(d>=1073741824)return B.l.aq(d/1073741824,1)+" GB"
if(d>=1048576)return B.l.aq(d/1048576,0)+" MB"
if(d>=1024)return B.l.aq(d/1024,0)+" KB"
return B.l.aq(d,0)+" B"},
cCg(d){var x=B.l.F(d)
return d===x?""+x:B.l.aq(d,1)},
H7:function H7(d){this.a=d},
bkD:function bkD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bkA:function bkA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bkC:function bkC(){},
bkB:function bkB(d,e){this.a=d
this.b=e},
bkF:function bkF(){},
bkE:function bkE(d,e){this.a=d
this.b=e},
bky:function bky(d){this.a=d},
bkz:function bkz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c8M(d,e,f){return C.cMb(d,e,f)},
cMb(d,e,f){var x=0,w=A.m(y.aQ),v,u,t
var $async$c8M=A.i(function(g,h){if(g===1)return A.j(h,w)
for(;;)switch(x){case 0:t={}
e=A.cj(A.b0(e),A.b7(e),A.bG(e),0,0)
f=A.cj(A.b0(f),A.b7(f),A.bG(f),0,0)
u=new A.aE(Date.now(),0,!1)
t.a=new C.TU(null,e,f,A.cj(A.b0(u),A.b7(u),A.bG(u),0,0),B.eO,null,null,null,null,null,null,null,null,null,null,null,B.lu,null,null,null,B.Id,null)
v=A.cV(null,null,!0,null,new C.c1F(t,null),d,null,!0,!1,y.T)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$c8M,w)},
cki(d,e,f,g){var x
if(f==null)x="Start Date"
else x=g==null||A.b0(f)===A.b0(g)?d.awj(f):d.awi(f)
return x},
ckh(d,e,f,g,h){var x
if(g==null)x="End Date"
else x=f!=null&&A.b0(f)===A.b0(g)&&A.b0(f)===A.b0(h)?d.awj(g):d.awi(g)
return x},
c1F:function c1F(d,e){this.a=d
this.b=e},
TU:function TU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){var _=this
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
a2k:function a2k(d,e,f,g,h,i,j,k){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=e
_.x=f
_.bV$=g
_.fz$=h
_.mH$=i
_.e8$=j
_.fA$=k
_.c=_.a=null},
btN:function btN(d){this.a=d},
btM:function btM(d){this.a=d},
btO:function btO(d,e){this.a=d
this.b=e},
btL:function btL(d,e){this.a=d
this.b=e},
btP:function btP(d){this.a=d},
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
a1s:function a1s(d,e,f,g,h,i,j,k,l,m){var _=this
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
a1t:function a1t(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.w=0
_.y=_.x=$
_.c=_.a=null},
bpl:function bpl(d){this.a=d},
bpm:function bpm(d){this.a=d},
bpn:function bpn(d,e){this.a=d
this.b=e},
bpo:function bpo(d){this.a=d},
bpp:function bpp(d){this.a=d},
a1u:function a1u(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a1v:function a1v(){var _=this
_.f=_.e=$
_.c=_.a=_.w=_.r=null},
bpr:function bpr(d,e){this.a=d
this.b=e},
bpq:function bpq(d,e){this.a=d
this.b=e},
a3l:function a3l(d,e,f,g,h){var _=this
_.f=d
_.r=e
_.w=f
_.b=g
_.a=h},
aqh:function aqh(d){this.a=d},
bGI:function bGI(){},
bGM:function bGM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4k:function a4k(d,e,f,g,h,i,j,k,l,m){var _=this
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
a4l:function a4l(){this.d=$
this.c=this.a=null},
a2n:function a2n(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
aqi:function aqi(d){this.d=d
this.c=this.a=null},
btW:function btW(d,e){this.a=d
this.b=e},
btX:function btX(d){this.a=d},
btY:function btY(d,e,f){this.a=d
this.b=e
this.c=f},
btR:function btR(){},
btS:function btS(){},
btV:function btV(d,e){this.a=d
this.b=e},
btQ:function btQ(d,e){this.a=d
this.b=e},
btT:function btT(){},
btU:function btU(d){this.a=d},
PD:function PD(d,e){this.a=d
this.b=e},
a3K:function a3K(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
asx:function asx(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bDV:function bDV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4_:function a4_(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
bDY:function bDY(d,e,f){this.a=d
this.b=e
this.c=f},
bDX:function bDX(d,e){this.a=d
this.b=e},
bDW:function bDW(d,e){this.a=d
this.b=e},
bW8:function bW8(){},
a8d:function a8d(){},
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
ch8(d,e,f){return new A.a_h(new A.GD(d,e,!0,!0,!0,0,A.c1j(),null),f)}},D,I,K,U,L
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
Q=c[83]
R=c[101]
S=c[105]
H=c[52]
T=c[104]
C=a.updateHolder(c[32],C)
D=c[97]
I=c[80]
K=c[82]
U=c[55]
L=c[96]
C.MU.prototype={
OO(d,e,f){return this.aD3(d,e,f)},
aD3(d,e,f){var x=0,w=A.m(y.W),v,u=2,t=[],s=this,r,q,p,o,n
var $async$OO=A.i(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(e.length===0){v=D.a6O
x=1
break}u=4
p=s.a.az("time_entries").bn("room_id, user_id, description, started_at, ended_at, billable, hourly_rate, invoice_id, created_at").qk("room_id",e)
x=7
return A.e(A.jg(p.hc(p.hf("started_at","lt."+d.d_())),p.$ti.c).aaw("ended_at.is.null,ended_at.gte."+f.d_()).fE("started_at",!1),$async$OO)
case 7:r=h
p=J.bX(r,new C.b8u(),y.cn)
p=A.K(p,p.$ti.i("aj.E"))
v=new C.ui(p,!1,y.W)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.G(n)
p=q
if(p instanceof A.rb&&p.b==="42P01"){v=D.fmt
x=1
break}throw n
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$OO,w)},
Os(d){return this.aCp(d)},
aCp(d){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Os=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=D.a6P
x=1
break}u=4
x=7
return A.e(s.a.az("invoices").tl().qk("room_id",d).fE("created_at",!1),$async$Os)
case 7:r=f
p=J.bX(r,new C.b8t(),y.aa)
p=A.K(p,p.$ti.i("aj.E"))
v=new C.ui(p,!1,y.H)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.G(n)
p=q
if(p instanceof A.rb&&p.b==="42P01"){v=D.fms
x=1
break}throw n
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Os,w)},
Om(d){return this.aCg(d)},
aCg(d){var x=0,w=A.m(y.E),v,u=this,t,s
var $async$Om=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:if(d.length===0){v=O.UY
x=1
break}s=J
x=3
return A.e(u.a.az("evidence_items").bn("room_id, file_size_bytes").qk("room_id",d),$async$Om)
case 3:t=s.bX(f,new C.b8s(),y.P)
t=A.K(t,t.$ti.i("aj.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Om,w)},
Ov(d){return this.aCv(d)},
aCv(d){var x=0,w=A.m(y.aN),v,u=this,t,s,r,q,p,o,n
var $async$Ov=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:if(d.length===0){v=B.cD
x=1
break}t=y.N
t=A.C(t,t)
n=J
x=3
return A.e(u.a.az("profiles").bn("id, display_name").qk("id",d),$async$Ov)
case 3:s=n.aK(f),r=y.f
case 4:if(!s.q()){x=5
break}q=r.a(s.gI())
p=J.bd(q.h(0,"id"))
o=A.a8(q.h(0,"display_name"))
o=o==null?null:B.o.aH(o).length!==0
t.l(0,p,o===!0?B.o.aH(A.U(q.h(0,"display_name"))):"Member")
x=4
break
case 5:v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Ov,w)}}
C.C6.prototype={
cP(){return D.fhD}}
C.rj.prototype={
FS(d){var x=J.er(this.d,new C.b8d(d))
x=A.ia(new A.dE(x,new C.b8e(),x.$ti.i("dE<1,f>")))
return x==null?"Room":x},
btB(d){var x=this.w.h(0,d)
return x==null?"Member":x}}
C.rk.prototype={
H(){return"ReportPeriodPreset."+this.b}}
C.u9.prototype={
a_(d){var x,w,v,u
switch(this.a.a){case 0:x=A.cj(A.b0(d),A.b7(d),A.bG(d),0,0).kp(0-A.ea(A.Y4(d)-1,0,0,0,0).a)
return new A.C4(x.kp(6048e8),x)
case 1:w=A.cj(A.b0(d),A.b7(d),1,0,0)
return new A.C4(A.b7(d)===12?A.cj(A.b0(d)+1,1,1,0,0):A.cj(A.b0(d),A.b7(d)+1,1,0,0),w)
case 2:return new A.C4(d,d.kp(-2592e9))
case 3:v=this.b
v.toString
u=this.c
u.toString
v=A.cj(A.b0(v),A.b7(v),A.bG(v),0,0)
return new A.C4(A.cj(A.b0(u),A.b7(u),A.bG(u),0,0).kp(864e8),v)}},
gkH(){var x,w
switch(this.a.a){case 0:x="This week"
break
case 1:x="This month"
break
case 2:x="Last 30 days"
break
case 3:x=this.b
x.toString
x=C.cgu(x)
w=this.c
w.toString
w=x+" \u2013 "+C.cgu(w)
x=w
break
default:x=null}return x},
k(d,e){if(e==null)return!1
return e instanceof C.u9&&e.a===this.a&&J.p(e.b,this.b)&&J.p(e.c,this.c)},
gt(d){return A.aa(this.a,this.b,this.c,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b)}}
C.pQ.prototype={
WR(d){var x,w=this.e
if(w==null)w=d
x=B.f.ao(w.eD(this.d).a,1e6)
return x<=0?0:x/3600}}
C.Au.prototype={
gbE(){return this.a}}
C.ui.prototype={}
C.ak2.prototype={
cc(d,e){var x=null,w=e.T($.c36(),y.Z),v=A.d(d).ok.at
if(v==null)v=x
else v=v.ft(A.d(d).ax.a===B.p?B.B:B.C,B.ak,1.5)
return A.a2(A.c([A.o("REPORTS",x,x,x,x,x,v,x,x,x),B.Q,A.dK(w,new C.b8M(this,d,e),new C.b8N(this,d,e),new C.b8O(),!1,!0,!1)],y.p),B.S,D.fBg,B.r,B.u,0,B.x)},
baM(d,e){var x=e.T($.caw(),y.a)
return A.a2(A.c([this.b8G(d,e),B.Q,A.dK(x,new C.b8I(this,d,e),new C.b8J(this,d,e),new C.b8K(),!1,!0,!1)],y.p),B.S,null,B.r,B.u,0,B.x)},
b8G(d,e){var x,w,v=null,u=e.T($.aCB(),y.j),t=y.af
t=I.bbo(D.fyX,new C.b8G(d,e),D.eYu,A.dp([u.a],t),t)
x=u.gkH()
w=A.d(d).ok.Q
if(w==null)w=v
else w=w.U(A.d(d).ax.a===B.p?B.B:B.C)
return A.a2(A.c([t,B.bN,A.o("Window: "+x,v,v,v,v,v,w,v,v,v)],y.p),B.S,v,B.r,B.u,0,B.x)},
aOB(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.d(d).ok,f=e.e
if(f.b)return i.al3(d,D.e0w,"Time tracking data unavailable","The time-tracking module is not enabled on this workspace yet. Billable-hours reporting appears once it ships.")
x=f.a
if(x==null)x=D.rs
w=new A.aE(Date.now(),0,!1)
v=C.c8R(x,w)
u=C.cmL(x,w)
t=C.c88(x,w)
s=C.c87(x,w)
r=g.at
if(r==null)r=h
else r=r.ft(A.d(d).ax.a===B.p?B.B:B.C,B.ak,1.2)
r=A.o("BILLABLE HOURS",h,h,h,h,h,r,h,h,h)
q=C.Cp(v)
p=g.f
q=A.o(q,h,h,h,h,h,p==null?h:p.cT(B.ak),h,h,h)
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
p=A.aT(B.r2,p,h,h,16)
k=q?C.Cp(u)+" unbilled":"Everything is invoiced"
if(n)q=h
else{if(q)j=A.d(d).ax.fy
else j=A.d(d).ax.a===B.p?B.B:B.C
j=o.du(j,q?B.aR:h)
q=j}q=A.c([r,B.ah,m,B.ah,A.an(A.c([p,B.ls,A.aA(A.o(k,h,h,h,h,h,q,h,h,h),1,h)],l),B.y,h,B.r,B.u,0,h,h)],l)
if(t.a!==0){r=A.c([B.Q,i.apQ(d,"By room")],l)
for(p=A.t(t).i("d3<1,2>"),p=A.rx(new A.d3(t,p),5,p.i("z.E")),p=new A.B8(J.aK(p.a),p.b,A.t(p).i("B8<1>"));p.q();){m=p.gI()
r.push(i.a3z(d,e.FS(m.a),C.Cp(m.b)))}B.i.J(q,r)}if(s.a!==0){r=A.c([B.Q,i.apQ(d,"By member")],l)
for(p=A.t(s).i("d3<1,2>"),p=A.rx(new A.d3(s,p),5,p.i("z.E")),p=new A.B8(J.aK(p.a),p.b,A.t(p).i("B8<1>")),m=e.w;p.q();){l=p.gI()
k=m.h(0,l.a)
if(k==null)k="Member"
r.push(i.a3z(d,k,C.Cp(l.b)))}B.i.J(q,r)}if(x.length===0){if(n)r=h
else r=o.U(A.d(d).ax.a===B.p?B.B:B.C)
q.push(new A.X(P.qN,A.o("No time entries in this window.",h,h,h,h,h,r,h,h,h),h))}r=A.a2(q,B.S,h,B.r,B.u,0,B.x)
q=A.d(d).ax.a===B.p?B.bQ:B.M
return A.fa(new A.X(B.aC,r,h),q,h,h,h,B.a4)},
aQa(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=A.d(d).ok,m=A.C(y.cN,y.r)
for(x=0;x<4;++x)m.l(0,B.DZ[x],0)
for(w=J.aK(e.d);w.q();){v=w.gI().f
u=m.h(0,v)
m.l(0,v,(u==null?0:u)+1)}w=n.at
if(w==null)w=o
else w=w.ft(A.d(d).ax.a===B.p?B.B:B.C,B.ak,1.2)
w=A.o("CASE STATUS OVERVIEW",o,o,o,o,o,w,o,o,o)
v=y.p
u=A.c([],v)
for(t=n.Q,x=0;x<4;++x){s=B.DZ[x]
r=C.cgv(s)
q=m.h(0,s)
p=t==null?o:t.cT(B.cB)
p=A.o(r+" \xb7 "+A.q(q),o,o,o,o,o,p,o,o,o)
r=A.d(d).ax.a===B.p?B.cP:B.cQ
u.push(Q.te(o,r,p,new A.b2(A.d(d).ax.a===B.p?B.aE:B.cA,1,B.P,-1),B.bI))}m=A.a2(A.c([w,B.ah,A.i0(u,B.cN,8,8)],v),B.S,o,B.r,B.u,0,B.x)
w=A.d(d).ax.a===B.p?B.bQ:B.M
return A.fa(new A.X(B.aC,m,o),w,o,o,o,B.a4)},
bev(d,e){var x,w,v=null,u=A.d(d).ok,t=e.r,s=u.at
if(s==null)s=v
else s=s.ft(A.d(d).ax.a===B.p?B.B:B.C,B.ak,1.2)
s=A.c([A.o("STORAGE BY ROOM",v,v,v,v,v,s,v,v,v),B.ah],y.p)
if(t.gW(t)){x=u.Q
if(x==null)x=v
else x=x.U(A.d(d).ax.a===B.p?B.B:B.C)
s.push(A.o("No evidence files stored yet.",v,v,v,v,v,x,v,v,v))}else for(x=t.gek(),x=x.n6(x,8),x=x.gV(x);x.q();){w=x.gI()
s.push(this.a3z(d,e.FS(w.a),C.c8r(w.b)))}s=A.a2(s,B.S,v,B.r,B.u,0,B.x)
x=A.d(d).ax.a===B.p?B.bQ:B.M
return A.fa(new A.X(B.aC,s,v),x,v,v,v,B.a4)},
aVc(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.d(d).ok,m=Date.now(),l=f.e,k=l.a
if(k==null)k=D.rs
x=l.b?o:C.c8R(k,new A.aE(m,0,!1))
m=f.f
l=m.b
if(l)w=o
else{m=m.a
w=C.c8O(m==null?D.xb:m)}m=f.r.geJ()
v=m.io(m,0,new C.b8C())
m=n.at
if(m==null)m=o
else m=m.ft(A.d(d).ax.a===B.p?B.B:B.C,B.ak,1.2)
m=A.o("EXECUTIVE SUMMARY",o,o,o,o,o,m,o,o,o)
u=p.a5m(d,"Billable hours",x==null?"\u2014":C.Cp(x))
t=w==null
s=p.a5m(d,"Invoiced",t?"\u2014":C.bZU(w.a))
r=t?"\u2014":C.bZU(w.b)
q=y.p
r=A.c([m,B.ah,A.c4J(2.2,A.c([u,s,p.apM(d,"Outstanding",r,!t&&w.b>0),p.a5m(d,"Storage used",C.c8r(v))],q),2,8,8,B.xI,!0)],q)
if(l){m=n.Q
if(m==null)m=o
else m=m.U(A.d(d).ax.a===B.p?B.B:B.C)
r.push(new A.X(B.er,A.o("Invoicing module not enabled yet \u2014 invoiced / outstanding are unavailable.",o,o,o,o,o,m,o,o,o),o))}r.push(B.Q)
r.push(A.an(A.c([A.aA(A.hI(D.e2e,D.fyK,D.fsc,new C.b8D(p,d,e,f),o),1,o),B.be,A.aA(A.hI(D.e2u,D.fyL,D.ft5,new C.b8E(p,d,e,f),o),1,o)],q),B.y,o,B.r,B.u,0,o,o))
m=A.a2(r,B.S,o,B.r,B.u,0,B.x)
l=A.d(d).ax.a===B.p?B.bQ:B.M
return A.fa(new A.X(B.aC,m,o),l,o,o,o,B.a4)},
apM(d,e,f,g){var x,w=null,v=A.d(d).ok,u=A.d(d).ax.a===B.p?B.cP:B.cQ,t=A.b3(8),s=A.bW(A.d(d).ax.a===B.p?B.aE:B.cA,B.P,1),r=v.Q
if(r==null)r=w
else r=r.U(A.d(d).ax.a===B.p?B.B:B.C)
r=A.o(e,w,1,B.ar,w,w,r,w,w,w)
x=v.w
if(x==null)x=w
else x=x.du(g?A.d(d).ax.fy:w,B.ak)
return A.ar(w,A.a2(A.c([r,B.dC,A.o(f,w,1,B.ar,w,w,x,w,w,w)],y.p),B.S,w,B.ey,B.u,0,B.x),B.F,w,w,new A.aB(u,w,s,t,w,w,B.X),w,w,w,w,B.cS,w,w,w)},
a5m(d,e,f){return this.apM(d,e,f,!1)},
Ig(d,e,f){return this.aVm(d,e,f)},
aVm(d,e,f){var x=0,w=A.m(y.n),v=1,u=[],t=this,s,r,q,p
var $async$Ig=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.e(t.Hv(f),$async$Ig)
case 6:s=h
r=B.o.a6(new A.aE(Date.now(),0,!1).d_(),0,10)
x=7
return A.e($.y2().iz(K.AW(null,A.c([K.BD(new Uint8Array(A.b5(s)),"application/pdf","casethread-report-"+A.q(r)+".pdf")],y.S),"CaseThread executive summary \u2014 "+f.a.gkH())),$async$Ig)
case 7:v=1
x=5
break
case 3:v=2
p=u.pop()
if(d.e!=null)d.S(y.q).f.aS(A.bQ(null,null,null,null,null,B.D,null,A.o("PDF export failed.",null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$Ig,w)},
QW(d,e,f){return this.aVl(d,e,f)},
aVl(a4,a5,a6){var x=0,w=A.m(y.n),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$QW=A.i(function(a7,a8){if(a7===1){u.push(a8)
x=v}for(;;)switch(x){case 0:v=3
t=new A.aE(Date.now(),0,!1)
i=a6.e.a
s=i==null?D.rs:i
r=C.c88(s,t)
q=C.c87(s,t)
h=new A.dM("")
h.a="section,key,value\n"
g=a6.a
h.a="section,key,value\n"+('meta,period,"'+g.gkH()+" ("+B.o.a6(a6.b.d_(),0,10)+" to "+B.o.a6(a6.c.d_(),0,10)+')"\n')
p=h
o=new C.b8F()
for(f=r,f=new A.d3(f,A.t(f).i("d3<1,2>")).gV(0);f.q();){e=f.d
e.toString
n=e
e=p
d="billable_hours_by_room,"+A.q(o.$1(a6.FS(n.a)))+","+B.l.aq(n.b,2)+"\n"
e.a+=d}for(f=q,f=new A.d3(f,A.t(f).i("d3<1,2>")).gV(0),e=a6.w;f.q();){d=f.d
d.toString
m=d
d=p
a0=e.h(0,m.a)
if(a0==null)a0="Member"
a0="billable_hours_by_member,"+A.q(o.$1(a0))+","+B.l.aq(m.b,2)+"\n"
d.a+=a0}for(f=a6.r.gek(),f=f.gV(f);f.q();){l=f.gI()
e=p
d="storage_bytes_by_room,"+A.q(o.$1(a6.FS(l.a)))+","+l.b+"\n"
e.a+=d}f=a6.f
if(f.b)a1=null
else{f=f.a
a1=C.c8O(f==null?D.xb:f)}k=a1
if(k!=null){f=p
e="executive_summary,invoiced_cents,"+k.a+"\n"
f.a+=e
e=p
f="executive_summary,outstanding_cents,"+k.b+"\n"
e.a+=f}j=B.o.a6(new A.aE(Date.now(),0,!1).d_(),0,10)
f=$.y2()
e=p.a
x=6
return A.e(f.iz(K.AW(null,A.c([K.BD(new Uint8Array(A.b5(B.bw.b9(e.charCodeAt(0)==0?e:e))),"text/csv","casethread-report-"+A.q(j)+".csv")],y.S),"CaseThread report \u2014 "+g.gkH())),$async$QW)
case 6:v=1
x=5
break
case 3:v=2
a3=u.pop()
if(a4.e!=null)a4.S(y.q).f.aS(A.bQ(null,null,null,null,null,B.D,null,A.o("CSV export failed.",null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$QW,w)},
Hv(d){return this.aPp(d)},
aPp(d){var x=0,w=A.m(y.aH),v,u,t,s,r,q,p,o,n
var $async$Hv=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(A.cv("pdf.1",""),$async$Hv)
case 3:x=4
return A.e(A.cv("pw.1",""),$async$Hv)
case 4:A.D("pw.1")
u=F.c4f(null,null,null,null,null,null,null)
t=new A.aE(Date.now(),0,!1)
s=d.e
r=s.a
if(r==null)r=D.rs
s=s.b
q=s?null:C.c8R(r,t)
p=s?null:C.cmL(r,t)
s=d.f
if(s.b)o=null
else{s=s.a
o=C.c8O(s==null?D.xb:s)}s=d.r.geJ()
n=s.io(s,0,new C.b8z())
A.D("pw.1")
A.D("pdf.1")
u.a6q(F.cfm(new C.b8A(d,t,new C.b8B(),q,p,o,n,r),null,null,N.I9,null,null,null))
v=u.iw()
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Hv,w)},
apQ(d,e){var x=null,w=A.d(d).ok.Q
if(w==null)w=x
else w=w.du(A.d(d).ax.a===B.p?B.B:B.C,B.aR)
return new A.X(B.B3,A.o(e,x,x,x,x,x,w,x,x,x),x)},
a3z(d,e,f){var x=null,w=A.d(d).ok.Q,v=A.aA(A.o(e,x,1,B.ar,x,x,w,x,x,x),1,x)
return new A.X(B.Kc,A.an(A.c([v,A.o(f,x,x,x,x,x,w==null?x:w.cT(B.aR),x,x,x)],y.p),B.y,x,B.r,B.u,0,x,x),x)},
al3(d,e,f,g){var x,w,v=null,u=A.d(d).ok,t=A.aT(e,A.d(d).ax.a===B.p?B.B:B.C,v,v,v),s=u.z
s=A.o(f,v,v,v,v,v,s==null?v:s.cT(B.aR),v,v,v)
x=u.Q
if(x==null)x=v
else x=x.U(A.d(d).ax.a===B.p?B.B:B.C)
w=y.p
w=A.an(A.c([t,B.be,A.aA(A.a2(A.c([s,B.dC,A.o(g,v,v,v,v,v,x,v,v,v)],w),B.S,v,B.r,B.u,0,B.x),1,v)],w),B.S,v,B.r,B.u,0,v,v)
t=A.d(d).ax.a===B.p?B.bQ:B.M
return A.fa(new A.X(B.aC,w,v),t,v,v,v,B.a4)},
aiC(d,e,f){var x,w=null,v=A.d(d).ok.z
v=A.an(A.c([A.aA(A.o(e,w,w,w,w,w,v==null?w:v.U(A.d(d).ax.fy),w,w,w),1,w),A.bx(B.eE,w,w,w,f,w,w)],y.p),B.y,w,B.r,B.u,0,w,w)
x=A.d(d).ax.a===B.p?B.bQ:B.M
return A.fa(new A.X(B.aC,v,w),x,w,w,w,B.a4)}}
C.H7.prototype={
cc(d,e){var x=null,w=e.T($.cqH(),y.u),v=e.T($.cqK(),y.F)
return A.hx(A.lY(x,x,x,x,x,x,x,x,B.a7q),x,A.dK(w,new C.bkD(this,v,d,e),new C.bkE(this,d),new C.bkF(),!1,!0,!1),x,x)},
arK(d,e){var x=null,w=A.d(d).ok.z
return A.bR(A.o(e,x,x,x,x,x,w==null?x:w.U(A.d(d).ax.fy),x,x,x),x,x)},
b8S(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=A.d(d).ok,g=e.T($.c34(),y.X).gp()
if(g==null)g=D.eVv
x=J.er(g,new C.bky(f))
w=A.K(x,x.$ti.i("z.E"))
if(w.length===0)return B.aJ
x=h.at
if(x==null)x=i
else x=x.ft(A.d(d).ax.a===B.p?B.B:B.C,B.ak,1.5)
v=y.p
x=A.c([A.o("CHANGE PLAN",i,i,i,i,i,x,i,i,i),B.Q],v)
for(u=w.length,t=f.c,s=y.O,r=h.Q,q=h.z,p=0;p<w.length;w.length===u||(0,A.F)(w),++p){o=w[p]
n=A.d(d).ax.a===B.p?B.bQ:B.M
m=q==null?i:q.cT(B.aR)
m=A.o(o.b,i,i,i,i,i,m,i,i,i)
l=o.a
if(l==="enterprise")k="Custom pricing \u2014 contact us"
else{k=o.c
k=k===0?"Free":"$"+B.l.aq(k/100,0)+"/month"}if(r==null)j=i
else j=r.U(A.d(d).ax.a===B.p?B.B:B.C)
j=A.a2(A.c([m,A.o(k,i,i,i,i,i,j,i,i,i)],v),B.S,i,B.r,B.u,0,B.x)
x.push(new A.v2(n,B.a4,i,i,new A.X(B.aC,new A.hX(B.b8,B.r,B.u,B.y,i,B.x,i,0,A.c([new A.he(1,B.d4,j,i),A.d1(A.o(o.c<t?"Downgrade":"Switch",i,i,i,i,i,i,i,i,i),new A.L("plan-switch-"+l,s),new C.bkz(this,d,e,o),i)],v),i),i),i))}return A.a2(x,B.S,i,B.r,B.u,0,B.x)},
Tz(d,e,f){return this.bf_(d,e,f)},
bf_(d,e,f){var x=0,w=A.m(y.n),v
var $async$Tz=A.i(function(g,h){if(g===1)return A.j(h,w)
for(;;)switch(x){case 0:x=f.a==="enterprise"||f.c>0?3:4
break
case 3:x=5
return A.e(U.a9p(d,e,f),$async$Tz)
case 5:x=1
break
case 4:d.S(y.q).f.aS(D.fl8)
case 1:return A.k(v,w)}})
return A.l($async$Tz,w)},
TX(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=A.d(d).ok,k=f.a.h(0,g.c)
if(k==null)k=0
x=e.aaP(g)
w=x>0
v=w?B.l.aw(k/x,0,1):0
w=k>=x&&w
u=A.d(d).ax.a===B.p?B.bQ:B.M
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
else s=A.d(d).ax.a===B.p?B.bW:B.ac
s=A.c([o,B.ah,A.aWX(t,s,m,v,m)],n)
if(w)B.i.J(s,A.c([B.tc,A.o("Limit reached \u2014 upgrades unlock more.",m,m,m,m,m,p?m:q.U(A.d(d).ax.fy),m,m,m)],n))
return A.fa(new A.X(B.aC,A.a2(s,B.S,m,B.r,B.u,0,B.x),m),u,m,m,m,B.a4)},
alG(d,e,f){var x,w,v=null,u=A.d(d),t=A.d(d).ax.a===B.p?B.bQ:B.M
u=u.ok.z
x=A.aA(A.o(e,v,v,v,v,v,u,v,v,v),1,v)
w=f>=2147483647?"Unlimited":""+f
return A.fa(new A.X(B.nw,A.an(A.c([x,A.o(w,v,v,v,v,v,u==null?v:u.cT(B.cB),v,v,v)],y.p),B.y,v,B.r,B.u,0,v,v),v),t,v,v,v,B.a4)}}
C.TU.prototype={
gauz(){var x=this.f
return A.cj(A.b0(x),A.b7(x),A.bG(x),0,0)},
Y(){var x=null
return new C.a2k(new A.pz(!1,$.ad()),new A.bq(x,y.B),new A.bq(x,y.t),x,A.C(y.bw,y.aI),x,!0,x)}}
C.a2k.prototype={
gml(){var x=this.d
return x===$?this.d=new A.a5V(this.a.r,$.ad()):x},
gw8(){var x,w=this.e
if(w===$){x=this.a.c
x=x==null?null:x.a
w=this.e=new A.MW(x,$.ad())}return w},
gpQ(){var x,w=this.f
if(w===$){x=this.a.c
x=x==null?null:x.b
w=this.f=new A.MW(x,$.ad())}return w},
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
x.aKW()},
a36(){var x,w=this,v=w.gml(),u=v.y,t=u==null
if((t?A.t(v).i("aN.T").a(u):u)!==B.eq)v=(t?A.t(v).i("aN.T").a(u):u)===B.lc
else v=!0
if(v)if(!w.x.gaf().kS()){w.v(new C.btN(w))
return}if(w.gakQ()){v=w.gw8()
u=v.y
v=u==null?A.t(v).i("aN.T").a(u):u
v.toString
u=w.gpQ()
t=u.y
u=t==null?A.t(u).i("aN.T").a(t):t
u.toString
x=new A.K3(v,u,y.T)}else x=null
v=w.c
v.toString
A.ao(v,!1).b1(x)},
a2N(){var x=this.c
x.toString
A.ao(x,!1).b1(null)},
a30(){this.v(new C.btM(this))},
RY(d){var x=this.a
if(d.jq(x.d)||d.kF(x.e))return!1
return!0},
b17(d){this.v(new C.btO(this,d))},
aYZ(d){this.v(new C.btL(this,d))},
gakQ(){var x=this.gw8(),w=x.y
if((w==null?A.t(x).i("aN.T").a(w):w)!=null){x=this.gpQ()
w=x.y
x=(w==null?A.t(x).i("aN.T").a(w):w)!=null}else x=!1
return x},
C(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2="Select range",b3={}
A.d(b4)
x=y.w
w=A.ay(b4,B.dU,x).w.geH()
A.ca(b4,B.aB,y.y).toString
v=A.qu(b4)
A.d(b4)
u=A.oH(b4)
b3.a=null
t=b0.gml()
s=t.y
r=s==null
if((r?A.t(t).i("aN.T").a(s):s)!==B.eO)q=(r?A.t(t).i("aN.T").a(s):s)===B.eq
else q=!0
switch(r?A.t(t).i("aN.T").a(s):s){case B.eO:case B.np:t=b0.a.fr
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
l=b0.gakQ()?b0.gRD():b1
if(q){k=b0.a.db
k=A.aT(B.lV,b1,b1,b1,b1)
k=A.bB(b1,b1,b1,k,b1,b1,b0.gIz(),B.aa,b1,b1,"Switch to input",b1)}else k=b1
b0.a.toString
b3.a=new C.aoU(s,r,o,n,m,p,b0.gakz(),b0.gake(),l,b0.gRw(),"Save",b2,t,k,b0.w)
j=A.ay(b4,B.f4,x).w.a
i=v.fx
if(i==null){x=u.fx
x.toString
i=x}h=v.fy
if(h==null)h=u.gNf()
g=v.go
if(g==null)g=u.gNg()
f=v.id
if(f==null)f=u.id
e=B.aa
break
case B.eq:case B.lc:x=b0.a.fr
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
t=t==null?b1:A.cj(A.b0(t),A.b7(t),A.bG(t),0,0)
r=r==null?b1:A.cj(A.b0(r),A.b7(r),A.bG(r),0,0)
k=A.a2(A.c([B.dl,new C.a4_(t,r,A.cj(A.b0(d),A.b7(d),A.bG(d),0,0),A.cj(A.b0(a0),A.b7(a0),A.bG(a0),0,0),b0.gakz(),b0.gake(),a4,a5,a3,a6,a7,a8,a9,!0,a2,l,a1,k,b0.x),B.dl],y.p),B.y,b1,B.r,B.u,0,B.x)
if(q){b0.a.toString
t=A.bB(b1,b1,b1,B.Ot,b1,b1,b0.gIz(),B.aa,b1,b1,"Switch to calendar",b1)}else t=b1
b0.a.toString
b3.a=new C.asx(s,p,o,new A.aO(b1,m,new A.X(B.B7,k,b1),b1),b0.gRD(),b0.gRw(),"OK","Cancel",b2,t,x,b1)
if(n)j=B.FY
else j=D.fku
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
e=B.Kf
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
return A.Dv(b1,x,A.aE_(A.Ly(new A.ej(new C.btP(b3),b1),1.3),b1,B.ep,b1,B.al,b1,s,t),B.cK,b1,i,e,B.oa,h,f,g)}}
C.aoU.prototype={
C(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null
A.d(a3)
x=A.ca(a3,B.aB,y.y)
x.toString
w=y.w
v=A.ay(a3,B.dU,w).w.geH()
u=A.qu(a3)
A.d(a3)
t=A.oH(a3)
s=u.fr
if(s==null)s=t.fr
r=u.k1
if(r==null)r=t.gNb()
q=u.k2
if(q==null)q=t.gNc()
p=q.b3(0.38)
o=u.k3
if(o==null)o=t.gNd()
n=u.k4
if(n==null)n=t.gNe()
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
d.push(a0)}d.push(A.bx(A.o(a1.as,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a1.z,a2,f))
d.push(B.b6)
w=A.ay(a3,B.om,w).w.a.a<360?42:72
a0=a1.at
x=A.c([new A.aO(w,a2,a2,a2),A.aA(A.br(a2,a2,a2,A.a2(A.c([A.o(a0,a2,1,B.ar,a2,a2,m,a2,a2,a2),B.ah,A.an(A.c([A.o(j,a2,1,B.ar,a2,a2,h,a2,a2,a2),A.o(" \u2013 ",a2,a2,a2,a2,a2,h,a2,a2,a2),new A.fA(1,B.cj,A.o(i,a2,1,B.ar,a2,a2,g,a2,a2,a2),a2)],x),B.y,a2,B.r,B.u,0,a2,a2),B.a0],x),B.S,a2,B.r,B.u,0,B.x),!1,a2,a2,a2,!0,a2,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a0+" "+j+" to "+i,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,B.a7,a2),1,a2)],x)
if(v===B.d6&&a1.ay!=null){w=a1.ay
w.toString
x.push(new A.X(B.fk,A.vP(w,e,a2),a2))}x=A.lY(d,e,r,new C.aiI(A.an(x,B.y,a2,B.r,B.u,0,a2,a2),D.fka,a2),0,e,new A.Tn(B.a6z,a2,a2,a2,a2,B.IJ,a2,a1.Q,a2,a2,a2,a2,B.q4,a2),0,a2)
w=a1.e
d=a1.f
a0=a1.w
l=l!=null?A.cj(A.b0(l),A.b7(l),A.bG(l),0,0):a2
k=k!=null?A.cj(A.b0(k),A.b7(k),A.bG(k),0,0):a2
w=A.cj(A.b0(w),A.b7(w),A.bG(w),0,0)
d=A.cj(A.b0(d),A.b7(d),A.bG(d),0,0)
return A.f4(!0,A.hx(x,s,new C.a1s(l,k,w,d,a1.r,A.cj(A.b0(a0),A.b7(a0),A.bG(a0),0,0),a1.x,a1.y,n,a2),a2,a2),!1,B.aa,!1,!1)}}
C.a1s.prototype={
Y(){return new C.a1t(new A.bq(null,y.B),new A.rD())}}
C.a1t.prototype={
au(){var x,w,v,u=this
u.aQ()
x=A.AG(0,null,null)
u.x=x
x.aa(u.gbc7())
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
bc8(){var x,w=this,v=w.x
v===$&&A.b()
v=v.gbu().at
v.toString
x=B.i.gdg(w.x.f).z
x.toString
if(v<=x)w.v(new C.bpl(w))
else{v=w.y
v===$&&A.b()
if(!v)w.v(new C.bpm(w))}},
bhF(){var x=this.c
x.toString
switch(A.d(x).w.a){case 0:case 1:A.KS()
break
case 2:case 3:case 4:case 5:break}},
bh1(d){this.bhF()
this.v(new C.bpn(this,d))},
ag4(d,e,f){var x,w,v=this,u=v.w,t=f?u-e-1:u+e
u=v.a.e
x=A.cj(A.b0(u),A.b7(u)+t,1,0,0)
u=v.a
w=u.z
return new C.a4k(v.f,v.r,u.w,v.gbh0(),u.e,u.f,x,u.r,w,null)},
C(d){var x,w,v,u,t,s,r=this,q=null,p=y.p,o=A.c([D.fD8],p),n=r.y
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
p=A.c([C.ch8(new C.bpo(r),s,q),C.ch8(new C.bpp(r),A.acU(w,v)+1-s,t)],p)
o.push(A.aA(new C.a1u(new C.acG(p,B.a6,!1,u,q,q,q,!1,t,0,q,q,q,B.mO,B.T,q,q,B.D,B.c3,r.d),w,v,n,x,q),1,q))
return A.a2(o,B.y,q,B.r,B.u,0,B.x)}}
C.a1u.prototype={
Y(){return new C.a1v()}}
C.a1v.prototype={
au(){var x,w,v=this
v.aQ()
x=y.k
w=y.bc
v.e=A.Q([B.GC,new A.dW(v.gaZr(),new A.c6(A.c([],x),w),y.d),B.GD,new A.dW(v.gaZt(),new A.c6(A.c([],x),w),y.e),B.yK,new A.dW(v.gaYC(),new A.c6(A.c([],x),w),y.c)],y.bv,y.V)
v.f=A.kb(!0,"Day Grid",!0,!0,null,null,!1)},
m(){var x=this.f
x===$&&A.b()
x.m()
this.al()},
aZq(d){this.v(new C.bpr(this,d))},
aZs(d){var x,w=this.f
w===$&&A.b()
w.fS()
w=this.f
x=w.e
x.toString
A.nZ(x).pM(w,!0)},
aZu(d){var x,w=this.f
w===$&&A.b()
w.fS()
w=this.f
x=w.e
x.toString
A.nZ(x).pM(w,!1)},
aYD(d){this.v(new C.bpq(this,d))},
b4O(d,e){var x,w,v,u=this.c.S(y.I).w
this.a.toString
if(u===B.c5)if(e===B.md)x=B.mT
else x=e===B.mT?B.md:e
else x=e
w=B.a_E.h(0,x)
w.toString
v=A.cj(A.b0(d),A.b7(d),A.bG(d)+w,0,0)
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
return A.aet(r,!1,new C.a3l(w,v,u,t.a.c,s),!0,x,!0,B.cd,t.gaZp(),s,s,B.a_s)}}
C.a3l.prototype={
dj(d){return!this.f.AQ(this.r,d.r)||this.w!=d.w}}
C.aqh.prototype={
aWO(d,e){var x,w=null,v=A.c([],y.p)
for(x=0;v.length<7;x=(x+1)%7)v.push(new A.kI(!0,new A.fw(B.ai,w,w,A.o(B.V2[x],w,w,w,w,w,d,w,w,w),w),w))
return v},
C(d){var x,w=A.d(d),v=w.ok.x.lf(w.ax.k3),u=A.ca(d,B.aB,y.y)
u.toString
x=this.aWO(v,u)
B.i.hy(x,0,B.aJ)
x.push(B.aJ)
u=A.ay(d,B.dU,y.w).w.geH()===B.ez?384:480
return new A.e7(new A.av(0,u,0,42),A.c4K(A.a_f(x,!0,!1,!0),D.Is,null,!0),null)}}
C.bGI.prototype={
Gp(d){return new C.bGM(9,Math.max((d.w-16)/7,0),8,A.xV(d.x))},
mf(d){return!1}}
C.bGM.prototype={
acu(d){return this.a*B.l.ao(d,50)},
acs(d){return Math.max(0,this.a*B.l.dT(d/50)-1)},
aWM(d,e){var x,w,v,u=this
if(u.d){x=u.b
w=u.c
v=e?w:x
return(u.a-2)*x+2*w-d-v}return d},
Op(d){var x,w=this,v=w.a,u=B.f.aF(d,v),t=u===0||u===v-1,s=w.b,r=w.c,q=Math.max(0,(u-1)*s+r)
v=B.f.ev(d,v)
x=w.aWM(q,t)
if(t)s=r
return new A.alq(v*50,x,42,s)},
a7e(d){return 50*(B.f.ev(d-1,this.a)+1)-8}}
C.a4k.prototype={
Y(){return new C.a4l()}}
C.a4l.prototype={
au(){var x,w,v,u,t
this.aQ()
x=this.a.x
w=A.TV(A.b0(x),A.b7(x))
v=J.hg(w,y.J)
for(u=0;u<w;u=t){t=u+1
v[u]=A.kb(!0,"Day "+t,!0,!0,null,null,!0)}this.d=v},
bC(){var x,w,v=this
v.d1()
x=v.c.S(y.Q)
w=x==null?null:x.r
if(w!=null){x=v.a
x=x.z.AR(x.x,w)}else x=!1
if(x){x=v.d
x===$&&A.b()
x[A.bG(w)-1].fS()}},
m(){var x,w,v,u,t=this.d
t===$&&A.b()
x=t.length
w=0
for(;w<t.length;t.length===x||(0,A.F)(t),++w){v=t[w]
u=v.ax
if(u!=null)u.aX()
v.f3()}this.al()},
aSt(d){var x,w,v
if(d){x=this.c.S(y.Q)
w=x==null?null:x.w
if(w!=null){switch(w.a){case 0:case 3:v=B.lp
break
case 1:case 2:v=B.lo
break
default:v=B.Ft}x=$.at.aP$.d.c.e
x.toString
A.bb7(x,0,v,B.cf,B.al)}}},
C(b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.d(b5),b4=A.ca(b5,B.aB,y.y)
b4.toString
x=b1.a.x
w=A.b0(x)
v=A.b7(x)
u=A.TV(w,v)
b1.a.toString
t=A.cck(w,v,b4)
s=B.l.dT((u+t)/7)
x=y.p
r=A.c([],x)
for(q=0-t+1,p=b1.gaSs(),o=y.x;q<=u;++q)if(q<1)r.push(B.r8)
else{b1.a.toString
n=A.cj(w,v,q,0,0)
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
k=k[A.bG(n)-1]
m=m.f
b5.S(o)
j=A.d(b5)
j=j.b7.ok
if(j==null){A.d(b5)
j=A.oH(b5)
j=j.gBd()}r.push(new C.a2n(n,k,m,p,j,i,h,g,f,e,d,a0,l,b2))}a1=A.c([],x)
for(p=t>0,a2=0;a2<s;++a2){a3=a2*7
a4=Math.min(a3+7,r.length)
a5=B.i.dt(r,a3,a4)
b1.a.toString
a6=A.cj(w,v,a3-t+1,0,0)
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
a7=m}}if(a7){b5.S(o)
m=A.d(b5)
m=m.b7.ok
if(m==null){A.d(b5)
m=A.oH(b5)
m=m.gBd()}m=new A.JN(m,!0,B.r8,b2)}else m=B.r8
B.i.hy(a5,0,m)
m=r.length
if(!(a4<m))m=a4===m&&B.f.aF(m,7)===0
else m=!0
if(m){b1.a.toString
a8=A.cj(w,v,a4-t,0,0)
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
a9=m}}if(a9){b5.S(o)
m=A.d(b5)
m=m.b7.ok
if(m==null){A.d(b5)
m=A.oH(b5)
m=m.gBd()}m=new A.JN(m,!0,B.r8,b2)}else m=B.r8
a5.push(m)}B.i.J(a1,a5)}b0=A.ay(b5,B.dU,y.w).w.geH()===B.ez?384:480
return A.a2(A.c([new A.e7(new A.av(0,b0,0,1/0).Zf(58),new A.X(B.ed,new A.em(B.d9,b2,b2,new A.kI(!0,A.o(b4.Wn(b1.a.x),b2,b2,b2,b2,b2,b3.ok.z.lf(b3.ax.k3),b2,b2,b2),b2),b2),b2),b2),new A.e7(new A.av(0,b0,0,s*42+(s-1)*8),A.c4K(A.a_f(a1,!0,!1,!0),D.Is,B.xI,!1),b2),B.Q],x),B.y,b2,B.r,B.u,0,B.x)}}
C.a2n.prototype={
Y(){return new C.aqi(A.BB())},
rZ(d){return this.e.$1(d)}}
C.aqi.prototype={
m(){var x=this.d
x.R$=$.ad()
x.N$=0
this.al()},
C(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=A.d(a4),a2=a1.ax,a3=A.ca(a4,B.aB,y.y)
a3.toString
x=A.qu(a4)
A.d(a4)
w=A.oH(a4)
v=a4.S(y.I).w
u=d.a
t=u.r
s=a1.ok.z
r=new C.btW(x,w)
q=new C.btX(r)
p=A.aQ(y.cD)
if(u.w)p.B(0,B.a5)
u=d.a
if(u.y||u.z)p.B(0,B.ab)
u=d.d
u.sp(p)
o=y._
n=q.$1$2(new C.btR(),p,o)
m=q.$1$2(new C.btS(),p,o)
l=q.$1$2(new C.btT(),p,y.b8)
if(l==null)l=B.l4
q=d.a
k=a0
if(q.y||q.z){s=s==null?a0:s.lf(n)
j=new A.jk(m,a0,a0,a0,l)
q=d.a
if(q.x&&!q.as)k=new C.a3K(t,q.y?D.GX:D.a91,v,a0)}else{j=a0
i=a0
if(q.Q){k=new C.a3K(t,D.a92,v,a0)
if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.lf(A.ax(97,q.A()>>>16&255,q.A()>>>8&255,q.A()&255))}}else if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.lf(A.ax(97,q.A()>>>16&255,q.A()>>>8&255,q.A()&255))}else if(q.at){s=s==null?a0:s.lf(a2.b)
q=x.CW
if(q==null)q=w.gBw()
j=new A.jk(a0,a0,a0,a0,l.jl(q.U(a2.b)))}}h=a3.LL(A.bG(d.a.c))
q=d.a
g=q.at?", Today":""
f=h+", "+a3.Wm(q.c)+g
a3=d.a
q=a3.y
if(q)f="Start date "+f
else if(a3.z)f="End date "+f
q=q||a3.z
e=A.ar(B.ai,A.br(a0,a0,a0,new A.kI(!0,A.o(h,a0,a0,a0,a0,a0,s,a0,a0,a0),a0),!1,a0,a0,a0,!1,a0,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,f,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,q,a0,a0,a0,a0,a0,a0,B.a7,a0),B.F,a0,a0,j,a0,a0,a0,a0,a0,a0,a0,a0)
if(k!=null)e=A.hG(e,a0,a0,k,B.aS)
return!a3.w?A.ce2(!1,a0,!0,e,!0,l,!0,!1,a0,a3.d,a0,B.bU,a0,a0,a0,a0,a0,a3.f,a0,a0,a0,a0,a0,a0,a0,a0,new C.btU(d),a0,a0,a0,new A.b9(new C.btV(d,r),y.cS),a0,a0,a0,u):e}}
C.PD.prototype={
H(){return"_HighlightPainterStyle."+this.b}}
C.a3K.prototype={
b_(d,e){var x,w,v,u,t,s,r=this.c
if(r===D.fDF)return
$.as()
x=A.bm()
x.r=this.b.gp()
x.b=B.ct
w=this.d
A:{if(B.c5===w){v=!0
break A}if(B.bf===w){v=!1
break A}v=null}B:{u=D.a91===r
t=!(u&&v)
if(t){s=D.GX===r
v=s&&!v}else{s=null
v=!0}if(v){r=e.a/2
d.j3(new A.Y(r,0,r+r,0+e.b),x)
break B}if(!u)v=t?s:D.GX===r
else v=!0
if(v){d.j3(new A.Y(0,0,0+e.a/2,0+e.b),x)
break B}if(D.a92===r){d.j3(new A.Y(0,0,0+e.a,0+e.b),x)
break B}break B}},
fc(d){return!1}}
C.asx.prototype={
aWi(d,e,f,g){var x,w,v,u=A.ca(d,B.aB,y.y)
u.toString
x=this.as
w=C.cki(u,x,e,f)
v=C.ckh(u,x,e,f,g)
if(e==null||f==null)return"Date Range"
switch(d.S(y.I).w.a){case 0:u=v+" \u2013 "+w
break
case 1:u=w+" \u2013 "+v
break
default:u=null}return u},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
A.d(d)
x=A.ca(d,B.aB,y.y)
x.toString
w=A.ay(d,B.dU,y.w).w.geH()
v=A.qu(d)
A.d(d)
u=A.oH(d)
if(w===B.d6){t=v.w
s=t==null?u.gEZ():t}else s=A.d(d).ok.f
r=v.r
if(r==null)r=u.gAH()
s=s==null?j:s.U(r)
t=k.c
q=k.d
p=k.aWi(d,t,q,k.e)
o=t!=null&&q!=null?x.a8N(t)+" \u2013 "+x.a8N(q):""
n=A.ciB(k.Q,k.z,w===B.ez,w,o,s,p)
x=A.bx(A.o(k.y,j,j,j,j,j,j,j,j,j),j,j,j,k.w,j,j)
t=y.p
m=new A.e7(B.HY,new A.X(B.fk,new A.em(B.qd,j,j,A.b1t(j,A.c([x,A.bx(A.o(k.x,j,j,j,j,j,j,j,j,j),j,j,j,k.r,j,j)],t),B.a09,B.x,0,8),j),j),j)
x=A.bO(d,B.bk)
x=x==null?j:x.gci()
x=(x==null?B.aW:x).k8(0,1.3).b5(14)
l=B.FY.aE(0,x/14)
switch(w.a){case 0:return A.mh(new C.bDV(k,!0,l,n,m))
case 1:return A.an(A.c([n,new A.fA(1,B.cj,A.a2(A.c([A.aA(k.f,1,j),m],t),B.b3,j,B.r,B.W,0,B.x),j)],t),B.b3,j,B.r,B.W,0,j,j)}}}
C.a4_.prototype={
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
x=A.ca(x,B.aB,y.y)
x.toString
w=t.f
if(w!=null){t.a.toString
w=x.a8M(w)
t.d=w
t.a.toString
v=!t.Q
u=t.w
u===$&&A.b()
t.aqY(u,w,v)
t.Q=v}w=t.r
if(w!=null){t.a.toString
x=x.a8M(w)
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
A.ca(w,B.aB,y.y).toString
t.a="Invalid range."}}u.v(new C.bDY(t,u,x))
return t.a==null&&x==null},
amS(d){var x=this.c
x.toString
x=A.ca(x,B.aB,y.y)
x.toString
this.a.toString
return x.az2(d)},
arP(d){var x,w=this
if(d==null){w.a.toString
x=w.c
x.toString
A.ca(x,B.aB,y.y).toString
return"Invalid format."}else if(!w.RY(d)){w.a.toString
x=w.c
x.toString
A.ca(x,B.aB,y.y).toString
return"Out of range."}return null},
RY(d){var x=this.a
if(d.jq(x.e)||d.kF(x.f))return!1
return!0},
aqY(d,e,f){var x=d.a.au8(e)
d.fd(f?x.mC(A.ee(B.Z,0,e.length,!1)):x)},
b16(d){var x=this
x.v(new C.bDX(x,d))
if(x.a.CW)x.kS()},
aYY(d){var x=this
x.v(new C.bDW(x,d))
if(x.a.CW)x.kS()},
C(d){var x,w,v,u,t,s,r=this,q=null,p="mm/dd/yyyy"
A.d(d)
A.ca(d,B.aB,y.y).toString
x=A.zp(d)
w=x.p1
if(w==null)w=B.c9
v=r.w
v===$&&A.b()
u=x.dy
t=r.a
t.toString
v=A.aA(A.cX(q,B.as,!0,q,!0,B.D,q,A.d0(),v,q,q,q,q,q,2,A.kP(q,w,q,q,q,q,q,q,!0,q,q,q,q,q,r.y,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q,q,"Start Date",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.T,!0,q,!0,q,!1,q,B.aP,q,q,q,q,q,t.cx,q,q,q,1,q,q,!1,"\u2022",q,r.gb15(),q,q,q,!1,q,q,!1,q,!0,q,B.aO,q,q,q,q,q,q,q,q,q,q,q,q,!0,B.af,q,B.aG,q,q,q,q),1,q)
t=r.x
t===$&&A.b()
s=r.a
s.toString
return A.an(A.c([v,B.b6,A.aA(A.cX(q,B.as,!1,q,!0,B.D,q,A.d0(),t,q,q,q,q,q,2,A.kP(q,w,q,q,q,q,q,q,!0,q,q,q,q,q,r.z,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q,q,"End Date",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.T,!0,q,!0,q,!1,q,B.aP,q,q,q,q,q,s.cx,q,q,q,1,q,q,!1,"\u2022",q,r.gaYX(),q,q,q,!1,q,q,!1,q,!0,q,B.aO,q,q,q,q,q,q,q,q,q,q,q,q,!0,B.af,q,B.aG,q,q,q,q),1,q)],y.p),B.S,q,B.r,B.u,0,q,q)}}
C.a8d.prototype={
b0(d){this.be(d)
this.nH()},
bC(){var x,w,v,u,t=this
t.d1()
x=t.bV$
w=t.gkO()
v=t.c
v.toString
v=A.nl(v)
t.fA$=v
u=t.mu(v,w)
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
$iFH:1,
guP(){return this.d}}
C.acG.prototype={
at8(d){return this.dx}}
var z=a.updateTypes(["~()","B(fD)","B(pQ)","Z(Z,pQ)","ub(aX<f,Z>)","~(aE?)","~(B)","~(f)","f(Z)","N<B6?>(al)","N<fD>(al)","fD()","N<ur>(al)","pQ(@)","Au(@)","MU(al)","u9()","f(f)","N<rj>(al)","h(rj)","N<~>(bl<rk>)","ub(f,f)","JO(m5)","ub(qP)","h?(fD)","h(ur)","~(aE)","~(og)","~(on)","~(lq)","C6()"])
C.c_L.prototype={
$1(d){d.T($.dA(),y.L)
return d.T($.c2V(),y.C).OA()},
$S:z+9}
C.c_G.prototype={
$1(d){return this.aBE(d)},
aBE(d){var x=0,w=A.m(y.m),v,u,t,s,r
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(d.T($.c34().glO(),y.ao),$async$$1)
case 3:u=f
t=J
s=u
r=C
x=4
return A.e(d.T($.cqJ().glO(),y.U),$async$$1)
case 4:v=t.crh(s,new r.c_E(f),new C.c_F(u))
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+10}
C.c_E.prototype={
$1(d){var x=this.a
x=x==null?null:x.a
if(x==null)x="free"
return d.a===x},
$S:z+1}
C.c_F.prototype={
$0(){return J.k0(this.a)},
$S:z+11}
C.c_M.prototype={
$1(d){d.T($.dA(),y.L)
return d.T($.c2V(),y.C).OB()},
$S:z+12}
C.b8u.prototype={
$1(d){return C.cBP(A.aM(y.f.a(d),y.N,y.z))},
$S:z+13}
C.b8t.prototype={
$1(d){var x,w,v=A.aM(y.f.a(d),y.N,y.z),u=v.h(0,"id")
u=J.bd(u==null?"":u)
x=v.h(0,"room_id")
if(x!=null)J.bd(x)
x=v.h(0,"status")
x=J.bd(x==null?"draft":x)
w=v.h(0,"total_cents")
v=w==null?v.h(0,"amount_cents"):w
return new C.Au(u,x,B.l.F(A.dO(v==null?0:v)))},
$S:z+14}
C.b8s.prototype={
$1(d){return A.aM(y.f.a(d),y.N,y.z)},
$S:167}
C.c0s.prototype={
$1(d){return new C.MU(d.T($.dB(),y.cx))},
$S:z+15}
C.c0r.prototype={
$1(d){return this.aBL(d)},
aBL(d){var x=0,w=A.m(y.D),v,u,t,s,r,q,p
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:d.T($.dA(),y.L)
q=A
p=J
x=4
return A.e(d.T($.iI(),y.h).Gt(),$async$$1)
case 4:x=3
return A.e(q.jG(p.bX(f,new C.c0q(d),y.as),!1,y.v),$async$$1)
case 3:u=f
t=A.c([],y.cR)
for(s=J.aK(u);s.q();){r=s.gI()
if(r.b)t.push(r.a)}v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:417}
C.c0q.prototype={
$1(d){return this.aBK(d)},
aBK(d){var x=0,w=A.m(y.v),v,u=this,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=A
s=d
x=3
return A.e(u.a.T($.j3().$1(d.a).glO(),y.g),$async$$1)
case 3:v=new t.avz(s,f.iI(B.a0u))
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:1154}
C.b8d.prototype={
$1(d){return d.a===this.a},
$S:60}
C.b8e.prototype={
$1(d){return d.b},
$S:397}
C.c0p.prototype={
$1(d){return this.aBJ(d)},
aBJ(d){var x=0,w=A.m(y.s),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.i(function(a0,a1){if(a0===1)return A.j(a1,w)
for(;;)switch(x){case 0:d.T($.dA(),y.L)
x=3
return A.e(d.T($.c36().glO(),y.ch),$async$$1)
case 3:u=a1
t=d.T($.aCB(),y.j)
s=t.a_(new A.aE(Date.now(),0,!1))
r=y.N
q=J.bX(u,new C.c0o(),r)
p=A.K(q,q.$ti.i("aj.E"))
o=d.T($.cqT(),y.A)
if(p.length===0){v=new C.rj(t,s.b,s.a,B.DV,D.a6O,D.a6P,B.a_y,B.cD)
x=1
break}q=s.b
n=s.a
x=4
return A.e(A.jG(A.c([o.OO(n,p,q),o.Os(p),o.Om(p)],y.a9),!1,y.K),$async$$1)
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
for(;g<l.length;l.length===h||(0,A.F)(l),++g)r.B(0,l[g].b)
f=A.K(r,r.$ti.c)
x=5
return A.e(o.Ov(f),$async$$1)
case 5:e=a1
v=new C.rj(t,q,n,u,k,j,C.cMl(i),e)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+18}
C.c0o.prototype={
$1(d){return d.a},
$S:397}
C.bjq.prototype={
$1(d){return d==null?null:A.kG(J.bd(d))},
$S:172}
C.c25.prototype={
$1(d){return d.f},
$S:z+2}
C.c26.prototype={
$2(d,e){return d+e.WR(this.a)},
$S:z+3}
C.c2b.prototype={
$1(d){return d.f&&d.w==null},
$S:z+2}
C.c2c.prototype={
$2(d,e){return d+e.WR(this.a)},
$S:z+3}
C.bY9.prototype={
$2(d,e){var x=this.a,w=x.h(0,e)
w.toString
x=x.h(0,d)
x.toString
return B.l.bo(w,x)},
$S(){return this.b.i("v(0,0)")}}
C.bZV.prototype={
$1(d){return A.q(d.h(0,1))+","},
$S:79}
C.b8O.prototype={
$0(){return B.bc},
$S:24}
C.b8N.prototype={
$2(d,e){return this.a.aiC(this.b,"Could not load reports.",new C.b8L(this.c))},
$S:107}
C.b8L.prototype={
$0(){return this.a.bq($.c36())},
$S:0}
C.b8M.prototype={
$1(d){var x=this
if(J.eV(d))return x.a.al3(x.b,R.Ob,"No billing visibility","Reports cover rooms you own or where your role grants billing access.")
return x.a.baM(x.b,x.c)},
$S:1156}
C.b8K.prototype={
$0(){return B.bc},
$S:24}
C.b8J.prototype={
$2(d,e){return this.a.aiC(this.b,"Could not load report data.",new C.b8H(this.c))},
$S:107}
C.b8H.prototype={
$0(){return this.a.bq($.caw())},
$S:0}
C.b8I.prototype={
$1(d){var x=this.a,w=this.b
return A.a2(A.c([x.aOB(w,d),B.Q,x.aQa(w,d),B.Q,x.bev(w,d),B.Q,x.aVc(w,this.c,d)],y.p),B.S,null,B.r,B.u,0,B.x)},
$S:z+19}
C.b8G.prototype={
$1(d){return this.aBq(d)},
aBq(d){var x=0,w=A.m(y.n),v,u=this,t,s,r,q
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:q=d.ga9(d)
x=q===D.Fl?3:5
break
case 3:x=6
return A.e(C.c8M(u.a,A.cj(2020,1,1,0,0),new A.aE(Date.now(),0,!1)),$async$$1)
case 6:t=f
if(t==null){x=1
break}s=t.a
r=t.b
u.b.X($.aCB().gce(),y.M).saV(new C.u9(D.Fl,s,r))
x=4
break
case 5:u.b.X($.aCB().gce(),y.M).saV(new C.u9(q,null,null))
case 4:case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+20}
C.b8C.prototype={
$2(d,e){return d+e},
$S:85}
C.b8D.prototype={
$0(){var x=this
return x.a.Ig(x.b,x.c,x.d)},
$S:0}
C.b8E.prototype={
$0(){var x=this
return x.a.QW(x.b,x.c,x.d)},
$S:0}
C.b8F.prototype={
$1(d){return'"'+A.cz(d,'"','""')+'"'},
$S:18}
C.b8z.prototype={
$2(d,e){return d+e},
$S:85}
C.b8B.prototype={
$2(d,e){var x,w="pw.1",v=null
A.D(w)
A.D(w)
A.D(w)
A.D(w)
x=E.c8(d,F.c4(v,v,v,v,v,v,v,v,v,G.at,v,v,11,v,v,v,!0,v,v,v,v))
A.D(w)
A.D(w)
A.D(w)
return E.Ga(A.c([x,E.c8(e,F.c4(v,v,v,v,v,v,v,v,v,G.at,v,v,11,v,G.dX,v,!0,v,v,v,v))],y.o),M.nn,M.zN)},
$S:z+21}
C.b8A.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="pw.1",h=null,g="n/a"
A.D(i)
A.D(i)
A.D(i)
A.D(i)
A.D(i)
A.D(i)
x=H.af3(E.c8("CaseThread \u2014 Executive Summary",F.c4(h,h,h,h,h,h,h,h,h,G.at,h,h,20,h,G.dX,h,!0,h,h,h,h)),0,h)
A.D(i)
w=j.a
v=w.a.gkH()
u=j.b
t=B.o.a6(u.hF().j(0),0,16)
A.D(i)
A.D("pdf.1")
t=E.c8("Window: "+v+" \xb7 Generated "+t,F.c4(h,T.acV,h,h,h,h,h,h,h,G.at,h,h,10,h,h,h,!0,h,h,h,h))
A.D(i)
v=E.ez(h,16,h)
A.D(i)
s=H.af3(h,2,"Totals")
r=j.c
q=j.d
q=r.$2("Billable hours",q==null?g:C.Cp(q))
p=j.e
p=r.$2("Unbilled hours",p==null?g:C.Cp(p))
o=j.f
n=o==null
m=r.$2("Invoiced",n?g:C.bZU(o.a))
o=r.$2("Outstanding (draft + sent)",n?g:C.bZU(o.b))
l=r.$2("Storage used",C.c8r(j.r))
A.D(i)
k=E.ez(h,16,h)
A.D(i)
k=A.c([x,t,v,s,q,p,m,o,l,k,H.af3(h,2,"Billable hours by room")],y.o)
l=j.w
o=C.c88(l,u)
m=A.t(o).i("d3<1,2>")
m=A.rx(new A.d3(o,m),10,m.i("z.E"))
o=y.l
B.i.J(k,A.ic(m,new C.b8w(r,w),A.t(m).i("z.E"),o))
A.D(i)
k.push(E.ez(h,16,h))
A.D(i)
k.push(H.af3(h,2,"Billable hours by member"))
u=C.c87(l,u)
l=A.t(u).i("d3<1,2>")
l=A.rx(new A.d3(u,l),10,l.i("z.E"))
B.i.J(k,A.ic(l,new C.b8x(r,w),A.t(l).i("z.E"),o))
A.D(i)
k.push(E.ez(h,16,h))
A.D(i)
k.push(H.af3(h,2,"Case status"))
B.i.J(k,new A.a9(B.DZ,new C.b8y(r,w),y.b))
return E.Dg(k,M.lB)},
$S:z+22}
C.b8w.prototype={
$1(d){return this.a.$2(this.b.FS(d.a),C.Cp(d.b))},
$S:z+4}
C.b8x.prototype={
$1(d){return this.a.$2(this.b.btB(d.a),C.Cp(d.b))},
$S:z+4}
C.b8y.prototype={
$1(d){return this.a.$2(C.cgv(d),""+J.er(this.b.d,new C.b8v(d)).gu(0))},
$S:z+23}
C.b8v.prototype={
$1(d){return d.f===this.a},
$S:60}
C.bkD.prototype={
$1(d){var x=this,w=x.a,v=x.c
return A.dK(x.b,new C.bkA(w,v,x.d,d),new C.bkB(w,v),new C.bkC(),!1,!0,!1)},
$S:z+24}
C.bkA.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=r.d,m=A.d(o).ok,l=A.d(o).ax.a===B.p?B.bQ:B.M,k=A.aT(S.CO,A.d(o).ax.a===B.p?B.B:B.C,q,q,28),j=m.w
j=j==null?q:j.cT(B.aR)
j=A.o(n.b+" plan",q,q,q,q,q,j,q,q,q)
x=n.c
x=x===0?"Free forever":"$"+B.l.aq(x/100,0)+"/month"
w=m.Q
if(w==null)w=q
else w=w.U(A.d(o).ax.a===B.p?B.B:B.C)
v=y.p
l=A.fa(new A.X(B.aC,A.an(A.c([k,B.be,A.aA(A.a2(A.c([j,A.o(x,q,q,q,q,q,w,q,q,q)],v),B.S,q,B.r,B.u,0,B.x),1,q)],v),B.y,q,B.r,B.u,0,q,q),q),l,q,q,q,B.a4)
w=m.at
k=w==null
if(k)j=q
else j=w.ft(A.d(o).ax.a===B.p?B.B:B.C,B.ak,1.5)
j=A.o("THIS MONTH",q,q,q,q,q,j,q,q,q)
x=p.TX(o,n,d,L.a8m,"Evidence storage",C.cMU())
u=p.TX(o,n,d,L.a8j,"AI analyses",C.c8T())
t=p.TX(o,n,d,L.a8k,"Transcription minutes",C.c8T())
s=p.TX(o,n,d,L.a8l,"OSINT lookups",C.c8T())
if(k)k=q
else k=w.ft(A.d(o).ax.a===B.p?B.B:B.C,B.ak,1.5)
return A.fN(A.c([l,B.aY,j,B.Q,x,u,t,s,B.aY,A.o("CASE LIMITS",q,q,q,q,q,k,q,q,q),B.Q,p.alG(o,"Case rooms",n.d),p.alG(o,"Members per room",n.e),B.aY,p.b8S(o,r.c,n),B.aY,D.fhF],v),q,B.bq,q,B.a6,!1)},
$S:z+25}
C.bkC.prototype={
$0(){return B.bc},
$S:24}
C.bkB.prototype={
$2(d,e){return this.a.arK(this.b,"Could not load usage.")},
$S:107}
C.bkF.prototype={
$0(){return B.bc},
$S:24}
C.bkE.prototype={
$2(d,e){return this.a.arK(this.b,"Could not load your plan.")},
$S:107}
C.bky.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.bkz.prototype={
$0(){var x=this
return x.a.Tz(x.b,x.c,x.d)},
$S:0}
C.c1F.prototype={
$1(d){var x=this.a.a
return x},
$S:17}
C.btN.prototype={
$0(){this.a.r.oo(!0)},
$S:0}
C.btM.prototype={
$0(){var x,w,v,u,t=null,s=this.a,r=s.gml(),q=r.y
switch(q==null?A.t(r).i("aN.T").a(q):q){case B.eO:s.r.oo(!1)
r.sp(B.eq)
break
case B.eq:q=s.gw8()
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
x=!s.RY(x)}else x=!1
if(x){q.sp(t)
s.gpQ().sp(t)}else{q=s.gpQ()
x=q.y
w=x==null
if((w?A.t(q).i("aN.T").a(x):x)!=null){if(w)x=A.t(q).i("aN.T").a(x)
x.toString
x=!s.RY(x)
s=x}else s=!1
if(s)q.sp(t)}r.sp(B.eO)
break
case B.np:case B.lc:break}},
$S:0}
C.btO.prototype={
$0(){var x=this.b
this.a.gw8().sp(x)
return x},
$S:0}
C.btL.prototype={
$0(){var x=this.b
this.a.gpQ().sp(x)
return x},
$S:0}
C.btP.prototype={
$1(d){return this.a.a},
$S:17}
C.bpl.prototype={
$0(){this.a.y=!1},
$S:0}
C.bpm.prototype={
$0(){this.a.y=!0},
$S:0}
C.bpn.prototype={
$0(){var x,w=this.a,v=w.f
v=v!=null&&w.r==null&&!this.b.jq(v)
x=this.b
if(v){w.r=x
w.a.y.$1(x)}else{w.f=x
w.a.x.$1(x)
if(w.r!=null){w.r=null
w.a.y.$1(null)}}},
$S:0}
C.bpo.prototype={
$2(d,e){return this.a.ag4(d,e,!0)},
$S:52}
C.bpp.prototype={
$2(d,e){return this.a.ag4(d,e,!1)},
$S:52}
C.bpr.prototype={
$0(){if(this.b){var x=this.a
if(x.w==null)x.w=x.a.f}},
$S:0}
C.bpq.prototype={
$0(){var x,w,v=this.a,u=v.w
u.toString
x=this.b.a
w=v.b4O(u,x)
if(w!=null){v.w=w
v.r=x}},
$S:0}
C.btW.prototype={
$1$1(d,e){var x=d.$1(this.a)
return x==null?d.$1(this.b):x},
$1(d){return this.$1$1(d,y.z)},
$S:180}
C.btX.prototype={
$1$2(d,e,f){return this.a.$1$1(new C.btY(d,e,f),f)},
$2(d,e){return this.$1$2(d,e,y.z)},
$S:181}
C.btY.prototype={
$1(d){var x=this.a.$1(d)
return x==null?null:x.a_(this.b)},
$S(){return this.c.i("0?(jb?)")}}
C.btR.prototype={
$1(d){var x=d.gEe()
return x},
$S:95}
C.btS.prototype={
$1(d){var x=d.gzZ()
return x},
$S:95}
C.btV.prototype={
$1(d){return this.b.$1$1(new C.btQ(this.a,d),y.G)},
$S:21}
C.btQ.prototype={
$1(d){var x,w=null
if(this.a.a.Q){x=d.gNh()
w=x==null?null:x.a_(this.b)}else{x=d.gEf()
w=x==null?null:x.a_(this.b)}return w},
$S:182}
C.btT.prototype={
$1(d){return d.ax},
$S:183}
C.btU.prototype={
$0(){var x=this.a.a
return x.rZ(x.c)},
$S:0}
C.bDV.prototype={
$2(d,e){var x=this,w=Math.min(x.c.b,270),v=A.c([],y.p)
if(e.d>=w)v.push(x.d)
v.push(A.aA(x.a.f,1,null))
v.push(x.e)
return A.a2(v,B.b3,null,B.r,B.W,0,B.x)},
$S:1157}
C.bDY.prototype={
$0(){var x=this.b
x.y=this.a.a
x.z=this.c},
$S:0}
C.bDX.prototype={
$0(){var x=this.a,w=this.b
x.d=w
w=x.amS(w)
x.f=w
x.a.r.$1(w)},
$S:0}
C.bDW.prototype={
$0(){var x=this.a,w=this.b
x.e=w
w=x.amS(w)
x.r=w
x.a.w.$1(w)},
$S:0}
C.bW8.prototype={
$2(d,e){if(!d.a)d.P(e)},
$S:48};(function aliases(){var x=C.a8d.prototype
x.aKW=x.m})();(function installTearOffs(){var x=a._static_0,w=a._instance_0u,v=a._instance_1u,u=a._static_1
x(C,"cLP","cEH",30)
w(C.C6.prototype,"gjk","cP",16)
v(C.rj.prototype,"gBr","FS",17)
u(C,"cMU","cCf",8)
u(C,"c8T","cCg",8)
var t
w(t=C.a2k.prototype,"gRD","a36",0)
w(t,"gRw","a2N",0)
w(t,"gIz","a30",0)
v(t,"gakz","b17",5)
v(t,"gake","aYZ",5)
w(t=C.a1t.prototype,"gbc7","bc8",0)
v(t,"gbh0","bh1",26)
v(t=C.a1v.prototype,"gaZp","aZq",6)
v(t,"gaZr","aZs",27)
v(t,"gaZt","aZu",28)
v(t,"gaYC","aYD",29)
v(C.a4l.prototype,"gaSs","aSt",6)
v(t=C.PJ.prototype,"gb15","b16",7)
v(t,"gaYX","aYY",7)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.ci,[C.c_L,C.c_G,C.c_E,C.c_M,C.b8u,C.b8t,C.b8s,C.c0s,C.c0r,C.c0q,C.b8d,C.b8e,C.c0p,C.c0o,C.bjq,C.c25,C.c2b,C.bZV,C.b8M,C.b8I,C.b8G,C.b8F,C.b8A,C.b8w,C.b8x,C.b8y,C.b8v,C.bkD,C.bkA,C.bky,C.c1F,C.btP,C.btW,C.btX,C.btY,C.btR,C.btS,C.btV,C.btQ,C.btT])
w(A.dj,[C.c_F,C.b8O,C.b8L,C.b8K,C.b8H,C.b8D,C.b8E,C.bkC,C.bkF,C.bkz,C.btN,C.btM,C.btO,C.btL,C.bpl,C.bpm,C.bpn,C.bpr,C.bpq,C.btU,C.bDY,C.bDX,C.bDW])
w(A.E,[C.MU,C.rj,C.u9,C.pQ,C.Au,C.ui])
v(C.C6,A.f0)
w(A.h7,[C.rk,C.PD])
w(A.dn,[C.c26,C.c2c,C.bY9,C.b8N,C.b8J,C.b8C,C.b8z,C.b8B,C.bkB,C.bkE,C.bpo,C.bpp,C.bDV,C.bW8])
w(A.bA,[C.ak2,C.H7])
w(A.O,[C.TU,C.a1s,C.a1u,C.a4k,C.a2n,C.a4_])
w(A.a_,[C.a8d,C.a1t,C.a1v,C.a4l,C.aqi,C.PJ])
v(C.a2k,C.a8d)
w(A.a5,[C.aoU,C.aqh,C.asx,C.aiI])
v(C.a3l,A.bD)
v(C.bGI,A.alp)
v(C.bGM,A.alr)
v(C.a3K,A.yE)
v(C.acG,A.ZA)
x(C.a8d,A.kl)})()
A.cD(b.typeUniverse,JSON.parse('{"C6":{"f0":["u9"]},"ak2":{"bA":[],"O":[],"h":[]},"H7":{"bA":[],"O":[],"h":[]},"TU":{"O":[],"h":[]},"a1s":{"O":[],"h":[]},"a1u":{"O":[],"h":[]},"a3l":{"bD":[],"bu":[],"h":[]},"a4k":{"O":[],"h":[]},"a2n":{"O":[],"h":[]},"a4_":{"O":[],"h":[]},"PJ":{"a_":["a4_"]},"a2k":{"a_":["TU"]},"aoU":{"a5":[],"h":[]},"a1t":{"a_":["a1s"]},"a1v":{"a_":["a1u"]},"aqh":{"a5":[],"h":[]},"a4l":{"a_":["a4k"]},"aqi":{"a_":["a2n"]},"a3K":{"aG":[]},"asx":{"a5":[],"h":[]},"aiI":{"a5":[],"FH":[],"h":[]},"acG":{"a5":[],"h":[]}}'))
var y=(function rtii(){var x=A.J
return{V:x("cm<c3>"),Z:x("aS<w<eC>>"),X:x("aS<w<fD>>"),u:x("aS<fD>"),a:x("aS<rj>"),F:x("aS<ur>"),L:x("aS<fW?>"),C:x("CW"),R:x("i5<rk>"),c:x("dW<lq>"),d:x("dW<og>"),e:x("dW<on>"),G:x("P"),x:x("cci"),T:x("K3<aE>"),I:x("jE"),J:x("eY"),ch:x("N<w<eC>>"),ao:x("N<w<fD>>"),as:x("N<+room,visible(eC,B)>"),g:x("N<h2>"),U:x("N<B6?>"),cN:x("qP"),cR:x("x<eC>"),a9:x("x<N<E>>"),Y:x("x<pQ>"),p:x("x<h>"),o:x("x<ef>"),S:x("x<mE>"),k:x("x<~(cm<c3>)>"),B:x("bq<a_<O>>"),t:x("bq<PJ>"),D:x("w<eC>"),E:x("w<ac<f,@>>"),aH:x("w<v>"),aN:x("ac<f,f>"),P:x("ac<f,@>"),f:x("ac<@,@>"),b:x("a9<qP,ef>"),y:x("zK"),w:x("id"),K:x("E"),bc:x("c6<~(cm<c3>)>"),m:x("fD"),v:x("+room,visible(eC,B)"),s:x("rj"),aa:x("Au"),j:x("u9"),af:x("rk"),A:x("MU"),bw:x("fl<E?>"),h:x("G7"),N:x("f"),cx:x("h5"),H:x("ui<w<Au>>"),W:x("ui<w<pQ>>"),cn:x("pQ"),bv:x("jp"),O:x("L<f>"),l:x("ef"),cD:x("dz"),Q:x("a3l"),M:x("C6"),q:x("h8"),cS:x("b9<P?>"),i:x("Z"),z:x("@"),r:x("v"),_:x("P?"),aQ:x("K3<aE>?"),b8:x("fq?"),n:x("~"),aI:x("~()")}})();(function constants(){var x=a.makeConstList
D.Is=new C.bGI()
D.aiO=new A.yK(0,null,null,null,null,null,null)
D.ajC=new A.ai(0,0,0,3)
D.e0w=new A.ah(62537,"MaterialIcons",null,!1)
D.e2e=new A.aL(B.CK,null,null,null,null)
D.e2u=new A.aL(B.Oe,null,null,null,null)
D.eVv=x([],A.J("x<fD>"))
D.xb=x([],A.J("x<Au>"))
D.rs=x([],y.Y)
D.fhB=new C.rk(0,"thisWeek")
D.fu7=new A.a0("Week",null,null,null,null,null,null,null,null,null,null)
D.acn=new I.i5(D.fhB,null,D.fu7,y.R)
D.a53=new C.rk(1,"thisMonth")
D.fsF=new A.a0("Month",null,null,null,null,null,null,null,null,null,null)
D.ack=new I.i5(D.a53,null,D.fsF,y.R)
D.fhC=new C.rk(2,"last30Days")
D.frD=new A.a0("30 days",null,null,null,null,null,null,null,null,null,null)
D.acr=new I.i5(D.fhC,null,D.frD,y.R)
D.Fl=new C.rk(3,"custom")
D.fss=new A.a0("Custom",null,null,null,null,null,null,null,null,null,null)
D.aco=new I.i5(D.Fl,null,D.fss,y.R)
D.eYu=x([D.acn,D.ack,D.acr,D.aco],A.J("x<i5<rk>>"))
D.fhD=new C.u9(D.a53,null,null)
D.fhF=new C.ak2(null)
D.fka=new A.S(1/0,64)
D.fku=new A.S(496,164)
D.frk=new A.a0("To move back to Free, cancel your subscription from your receipt email \u2014 we\u2019ll handle the rest.",null,null,null,null,null,null,null,null,null,null)
D.fl8=new A.d8(D.frk,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.D,null)
D.a6P=new C.ui(D.xb,!1,y.H)
D.a6O=new C.ui(D.rs,!1,y.W)
D.fms=new C.ui(null,!0,y.H)
D.fmt=new C.ui(null,!0,y.W)
D.fsc=new A.a0("Export PDF",null,null,null,null,null,null,null,null,null,null)
D.ft5=new A.a0("Export CSV",null,null,null,null,null,null,null,null,null,null)
D.fyL=new A.L("reports-export-csv",y.O)
D.fyK=new A.L("reports-export-pdf",y.O)
D.fyX=new A.L("reports-period-selector",y.O)
D.fBg=new A.L("reports-section",y.O)
D.fD8=new C.aqh(null)
D.fDF=new C.PD(0,"none")
D.a91=new C.PD(1,"highlightLeading")
D.GX=new C.PD(2,"highlightTrailing")
D.a92=new C.PD(3,"highlightAll")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cVP","cqJ",()=>A.ls(new C.c_L(),A.J("B6?")))
x($,"cVL","cqH",()=>A.ls(new C.c_G(),y.m))
x($,"cVQ","cqK",()=>A.ls(new C.c_M(),A.J("ur")))
x($,"cWg","cqT",()=>A.ep(new C.c0s(),y.A))
x($,"cWf","c36",()=>A.ls(new C.c0r(),y.D))
x($,"cWe","aCB",()=>A.pp(C.cLP(),y.M,y.j))
x($,"cWd","caw",()=>A.ls(new C.c0p(),y.s))})()};
(a=>{a["C+k8Z0BdG47xjaYyJcy39iMJKIQ="]=a.current})($__dart_deferred_initializers__);