((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,M,E,L,N,O,P,Q,R,C={bYn:function bYn(){},bYi:function bYi(){},bYg:function bYg(d){this.a=d},bYh:function bYh(d){this.a=d},bYo:function bYo(){},
cBT(){return new C.Bz()},
M6:function M6(d){this.a=d},
b6I:function b6I(){},
b6H:function b6H(){},
b6G:function b6G(){},
bZ0:function bZ0(){},
bZ_:function bZ_(){},
bYZ:function bYZ(d){this.a=d},
Bz:function Bz(){this.b=null},
qZ:function qZ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
b6E:function b6E(d){this.a=d},
b6F:function b6F(){},
bYY:function bYY(){},
bYX:function bYX(){},
cdM(d){return""+A.b6(d)+"-"+B.o.cC(B.f.j(A.bk(d)),2,"0")+"-"+B.o.cC(B.f.j(A.c_(d)),2,"0")},
cz1(d){var x,w,v,u,t=new C.bhv(),s=d.h(0,"room_id")
s=J.bg(s==null?"":s)
x=d.h(0,"user_id")
x=J.bg(x==null?"":x)
w=d.h(0,"description")
J.bg(w==null?"":w)
w=t.$1(d.h(0,"started_at"))
if(w==null)w=new A.aI(Date.now(),0,!1)
t=t.$1(d.h(0,"ended_at"))
v=J.p(d.h(0,"billable"),!1)
A.dB(d.h(0,"hourly_rate"))
u=d.h(0,"invoice_id")
u=u==null?null:J.bg(u)
return new C.pA(s,x,w,t,!v,u)},
c5w(d,e){var x,w,v,u,t,s=y.N,r=y.i,q=A.D(s,r)
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.H)(d),++w){v=d[w]
if(!v.f)continue
u=v.a
t=q.h(0,u)
if(t==null)t=0
q.m(0,u,t+v.Wz(e))}return C.c5m(q,s,r)},
c5v(d,e){var x,w,v,u,t,s=y.N,r=y.i,q=A.D(s,r)
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.H)(d),++w){v=d[w]
if(!v.f)continue
u=v.b
t=q.h(0,u)
if(t==null)t=0
q.m(0,u,t+v.Wz(e))}return C.c5m(q,s,r)},
c6e(d,e){return new A.al(d,new C.c_B(),A.a6(d).i("al<1>")).jm(0,0,new C.c_C(e))},
ck2(d,e){return new A.al(d,new C.c_H(),A.a6(d).i("al<1>")).jm(0,0,new C.c_I(e))},
c6b(d){var x,w,v,u,t,s,r,q
for(x=d.length,w=0,v=0,u=0;u<x;++u){t=d[u]
s=t.c
r=s.toLowerCase()
if(r==="void"||r==="cancelled"||r==="canceled")continue
q=t.d
w+=q
r=s.toLowerCase()
if(r==="draft"||r==="sent")v+=q}return new A.aum(w,v)},
cJq(d){var x,w,v,u,t=y.N,s=y.r,r=A.D(t,s)
for(x=J.aJ(d);x.q();){w=x.gI()
v=w.h(0,"room_id")
u=v==null?null:J.bg(v)
if(u==null||u.length===0)continue
v=r.h(0,u)
if(v==null)v=0
w=A.dB(w.h(0,"file_size_bytes"))
w=w==null?null:B.m.F(w)
r.m(0,u,v+(w==null?0:w))}return C.c5m(r,t,s)},
c5m(d,e,f){var x,w,v,u,t=A.t(d).i("bD<1>"),s=A.J(new A.bD(d,t),t.i("z.E"))
B.i.ez(s,new C.bVP(d,e))
t=A.D(e,f)
for(x=s.length,w=0;w<s.length;s.length===x||(0,A.H)(s),++w){v=s[w]
u=d.h(0,v)
t.m(0,v,u==null?f.a(u):u)}return t},
BS(d){var x=B.m.aM(d*10)/10
return x===(x<0?Math.ceil(x):Math.floor(x))?""+B.m.F(x)+" h":B.m.ar(x,1)+" h"},
bXv(d){var x=Math.abs(d),w=B.f.ap(x,100),v=B.o.cC(B.f.j(B.f.aK(x,100)),2,"0"),u=A.aAM(B.f.j(w),A.ck("(\\d)(?=(\\d{3})+(?!\\d))",!0,!1),new C.bXw(),null)
return(d<0?"-":"")+"$"+u+"."+v},
c5P(d){if(d>=1073741824)return B.m.ar(d/1073741824,1)+" GB"
if(d>=1048576)return B.m.ar(d/1048576,0)+" MB"
if(d>=1024)return B.m.ar(d/1024,0)+" KB"
return""+d+" B"},
r_:function r_(d,e){this.a=d
this.b=e},
tN:function tN(d,e,f){this.a=d
this.b=e
this.c=f},
pA:function pA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h
_.w=i},
bhv:function bhv(){},
zZ:function zZ(d,e,f){this.a=d
this.c=e
this.d=f},
tV:function tV(d,e,f){this.a=d
this.b=e
this.$ti=f},
c_B:function c_B(){},
c_C:function c_C(d){this.a=d},
c_H:function c_H(){},
c_I:function c_I(d){this.a=d},
bVP:function bVP(d,e){this.a=d
this.b=e},
bXw:function bXw(){},
cdN(d){var x
switch(d.a){case 0:x="Open"
break
case 1:x="Under investigation"
break
case 2:x="In review"
break
case 3:x="Closed"
break
default:x=null}return x},
aiZ:function aiZ(d){this.a=d},
b71:function b71(){},
b70:function b70(d,e,f){this.a=d
this.b=e
this.c=f},
b6Z:function b6Z(d){this.a=d},
b7_:function b7_(d,e,f){this.a=d
this.b=e
this.c=f},
b6Y:function b6Y(){},
b6X:function b6X(d,e,f){this.a=d
this.b=e
this.c=f},
b6V:function b6V(d){this.a=d},
b6W:function b6W(d,e,f){this.a=d
this.b=e
this.c=f},
b6U:function b6U(d,e){this.a=d
this.b=e},
b6Q:function b6Q(){},
b6R:function b6R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b6S:function b6S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b6T:function b6T(){},
b6N:function b6N(){},
b6P:function b6P(){},
b6O:function b6O(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
b6K:function b6K(d,e){this.a=d
this.b=e},
b6L:function b6L(d,e){this.a=d
this.b=e},
b6M:function b6M(d,e){this.a=d
this.b=e},
b6J:function b6J(d){this.a=d},
cfn(){return new C.Gs(null)},
czs(d){if(d>=1073741824)return B.m.ar(d/1073741824,1)+" GB"
if(d>=1048576)return B.m.ar(d/1048576,0)+" MB"
if(d>=1024)return B.m.ar(d/1024,0)+" KB"
return B.m.ar(d,0)+" B"},
czt(d){var x=B.m.F(d)
return d===x?""+x:B.m.ar(d,1)},
Gs:function Gs(d){this.a=d},
biC:function biC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
biz:function biz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
biB:function biB(){},
biA:function biA(d,e){this.a=d
this.b=e},
biE:function biE(){},
biD:function biD(d,e){this.a=d
this.b=e},
bix:function bix(d){this.a=d},
biy:function biy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c69(d,e,f){return C.cJg(d,e,f)},
cJg(d,e,f){var x=0,w=A.m(y.aQ),v,u,t
var $async$c69=A.i(function(g,h){if(g===1)return A.j(h,w)
for(;;)switch(x){case 0:t={}
e=A.cb(A.b6(e),A.bk(e),A.c_(e),0,0)
f=A.cb(A.b6(f),A.bk(f),A.c_(f),0,0)
u=new A.aI(Date.now(),0,!1)
t.a=new C.SZ(null,e,f,A.cb(A.b6(u),A.bk(u),A.c_(u),0,0),B.eI,null,null,null,null,null,null,null,null,null,null,null,B.lk,null,null,null,B.I0,null)
v=A.cU(null,null,!0,null,new C.c_c(t,null),d,null,!0,!1,y.T)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$c69,w)},
chC(d,e,f,g){var x
if(f==null)x="Start Date"
else x=g==null||A.b6(f)===A.b6(g)?d.avJ(f):d.avI(f)
return x},
chB(d,e,f,g,h){var x
if(g==null)x="End Date"
else x=f!=null&&A.b6(f)===A.b6(g)&&A.b6(f)===A.b6(h)?d.avJ(g):d.avI(g)
return x},
c_c:function c_c(d,e){this.a=d
this.b=e},
SZ:function SZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){var _=this
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
a1p:function a1p(d,e,f,g,h,i,j,k){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=e
_.x=f
_.bU$=g
_.fu$=h
_.my$=i
_.e7$=j
_.fv$=k
_.c=_.a=null},
brO:function brO(d){this.a=d},
brN:function brN(d){this.a=d},
brP:function brP(d,e){this.a=d
this.b=e},
brM:function brM(d,e){this.a=d
this.b=e},
brQ:function brQ(d){this.a=d},
anK:function anK(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
a0x:function a0x(d,e,f,g,h,i,j,k,l,m){var _=this
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
a0y:function a0y(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.w=0
_.y=_.x=$
_.c=_.a=null},
bnn:function bnn(d){this.a=d},
bno:function bno(d){this.a=d},
bnp:function bnp(d,e){this.a=d
this.b=e},
bnq:function bnq(d){this.a=d},
bnr:function bnr(d){this.a=d},
a0z:function a0z(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a0A:function a0A(){var _=this
_.f=_.e=$
_.c=_.a=_.w=_.r=null},
bnt:function bnt(d,e){this.a=d
this.b=e},
bns:function bns(d,e){this.a=d
this.b=e},
a2q:function a2q(d,e,f,g,h){var _=this
_.f=d
_.r=e
_.w=f
_.b=g
_.a=h},
ap8:function ap8(d){this.a=d},
bEE:function bEE(){},
bEI:function bEI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3p:function a3p(d,e,f,g,h,i,j,k,l,m){var _=this
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
a3q:function a3q(){this.d=$
this.c=this.a=null},
a1s:function a1s(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
ap9:function ap9(d){this.d=d
this.c=this.a=null},
brX:function brX(d,e){this.a=d
this.b=e},
brY:function brY(d){this.a=d},
brZ:function brZ(d,e,f){this.a=d
this.b=e
this.c=f},
brS:function brS(){},
brT:function brT(){},
brW:function brW(d,e){this.a=d
this.b=e},
brR:function brR(d,e){this.a=d
this.b=e},
brU:function brU(){},
brV:function brV(d){this.a=d},
OQ:function OQ(d,e){this.a=d
this.b=e},
a2P:function a2P(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
arq:function arq(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bBR:function bBR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a34:function a34(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
OW:function OW(){var _=this
_.e=_.d=$
_.r=_.f=null
_.x=_.w=$
_.z=_.y=null
_.Q=!1
_.c=_.a=null},
bBU:function bBU(d,e,f){this.a=d
this.b=e
this.c=f},
bBT:function bBT(d,e){this.a=d
this.b=e},
bBS:function bBS(d,e){this.a=d
this.b=e},
bTR:function bTR(){},
a7h:function a7h(){},
ahH:function ahH(d,e,f){this.c=d
this.d=e
this.a=f},
abM:function abM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var _=this
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
cer(d,e,f){return new A.Zm(new A.FZ(d,e,!0,!0,!0,0,A.bZR(),null),f)}},D,H,I,S,K
J=c[1]
A=c[0]
B=c[2]
F=c[41]
G=c[99]
M=c[97]
E=c[68]
L=c[100]
N=c[101]
O=c[96]
P=c[80]
Q=c[98]
R=c[102]
C=a.updateHolder(c[32],C)
D=c[95]
H=c[79]
I=c[75]
S=c[53]
K=c[94]
C.M6.prototype={
Os(d,e,f){return this.aCk(d,e,f)},
aCk(d,e,f){var x=0,w=A.m(y.W),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Os=A.i(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(e.length===0){v=D.a6D
x=1
break}u=4
p=s.a.aA("time_entries").bn("room_id, user_id, description, started_at, ended_at, billable, hourly_rate, invoice_id, created_at").qa("room_id",e)
x=7
return A.e(A.ja(p.h6(p.h9("started_at","lt."+d.d_())),p.$ti.c).aa9("ended_at.is.null,ended_at.gte."+f.d_()).fB("started_at",!1),$async$Os)
case 7:r=h
p=J.bM(r,new C.b6I(),y.cn)
p=A.J(p,p.$ti.i("aj.E"))
v=new C.tV(p,!1,y.W)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.E(n)
p=q
if(p instanceof A.qR&&p.b==="42P01"){v=D.flS
x=1
break}throw n
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Os,w)},
O6(d){return this.aBH(d)},
aBH(d){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$O6=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=D.a6E
x=1
break}u=4
x=7
return A.e(s.a.aA("invoices").tc().qa("room_id",d).fB("created_at",!1),$async$O6)
case 7:r=f
p=J.bM(r,new C.b6H(),y.aa)
p=A.J(p,p.$ti.i("aj.E"))
v=new C.tV(p,!1,y.H)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.E(n)
p=q
if(p instanceof A.qR&&p.b==="42P01"){v=D.flR
x=1
break}throw n
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$O6,w)},
O0(d){return this.aBy(d)},
aBy(d){var x=0,w=A.m(y.E),v,u=this,t,s
var $async$O0=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:if(d.length===0){v=D.eVi
x=1
break}s=J
x=3
return A.e(u.a.aA("evidence_items").bn("room_id, file_size_bytes").qa("room_id",d),$async$O0)
case 3:t=s.bM(f,new C.b6G(),y.P)
t=A.J(t,t.$ti.i("aj.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$O0,w)},
O9(d){return this.aBN(d)},
aBN(d){var x=0,w=A.m(y.aN),v,u=this,t,s,r,q,p,o,n
var $async$O9=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:if(d.length===0){v=B.cx
x=1
break}t=y.N
t=A.D(t,t)
n=J
x=3
return A.e(u.a.aA("profiles").bn("id, display_name").qa("id",d),$async$O9)
case 3:s=n.aJ(f),r=y.f
case 4:if(!s.q()){x=5
break}q=r.a(s.gI())
p=J.bg(q.h(0,"id"))
o=A.a7(q.h(0,"display_name"))
o=o==null?null:B.o.aJ(o).length!==0
t.m(0,p,o===!0?B.o.aJ(A.T(q.h(0,"display_name"))):"Member")
x=4
break
case 5:v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$O9,w)}}
C.Bz.prototype={
dk(){return D.fh8}}
C.qZ.prototype={
FB(d){var x=J.el(this.d,new C.b6E(d))
x=A.im(new A.dG(x,new C.b6F(),x.$ti.i("dG<1,h>")))
return x==null?"Room":x},
bsw(d){var x=this.w.h(0,d)
return x==null?"Member":x}}
C.r_.prototype={
H(){return"ReportPeriodPreset."+this.b}}
C.tN.prototype={
a_(d){var x,w,v,u
switch(this.a.a){case 0:x=A.cb(A.b6(d),A.bk(d),A.c_(d),0,0).kp(0-A.e3(A.ahK(d)-1,0,0,0,0).a)
return new A.Bx(x.kp(6048e8),x)
case 1:w=A.cb(A.b6(d),A.bk(d),1,0,0)
return new A.Bx(A.bk(d)===12?A.cb(A.b6(d)+1,1,1,0,0):A.cb(A.b6(d),A.bk(d)+1,1,0,0),w)
case 2:return new A.Bx(d,d.kp(-2592e9))
case 3:v=this.b
v.toString
u=this.c
u.toString
v=A.cb(A.b6(v),A.bk(v),A.c_(v),0,0)
return new A.Bx(A.cb(A.b6(u),A.bk(u),A.c_(u),0,0).kp(864e8),v)}},
gk9(){var x,w
switch(this.a.a){case 0:x="This week"
break
case 1:x="This month"
break
case 2:x="Last 30 days"
break
case 3:x=this.b
x.toString
x=C.cdM(x)
w=this.c
w.toString
w=x+" \u2013 "+C.cdM(w)
x=w
break
default:x=null}return x},
k(d,e){if(e==null)return!1
return e instanceof C.tN&&e.a===this.a&&J.p(e.b,this.b)&&J.p(e.c,this.c)},
gt(d){return A.a8(this.a,this.b,this.c,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b)}}
C.pA.prototype={
Wz(d){var x,w=this.e
if(w==null)w=d
x=B.f.ap(w.eA(this.d).a,1e6)
return x<=0?0:x/3600}}
C.zZ.prototype={
gbG(){return this.a}}
C.tV.prototype={}
C.aiZ.prototype={
cl(d,e){var x=null,w=e.S($.c0A(),y.Z),v=A.d(d).ok.at
if(v==null)v=x
else v=v.fM(A.d(d).ax.a===B.p?B.B:B.D,B.ao,1.5)
return A.a1(A.c([A.o("REPORTS",x,x,x,x,x,v,x,x,x),B.R,A.e_(w,new C.b7_(this,d,e),new C.b70(this,d,e),new C.b71(),!1,!0,!1)],y.p),B.S,D.fAv,B.r,B.v,0,B.x)},
b9G(d,e){var x=e.S($.c7S(),y.a)
return A.a1(A.c([this.b7C(d,e),B.R,A.e_(x,new C.b6W(this,d,e),new C.b6X(this,d,e),new C.b6Y(),!1,!0,!1)],y.p),B.S,null,B.r,B.v,0,B.x)},
b7C(d,e){var x,w,v=null,u=e.S($.aBo(),y.j),t=y.af
t=H.b9F(D.fyh,new C.b6U(d,e),D.eYi,A.dh([u.a],t),t)
x=u.gk9()
w=A.d(d).ok.Q
if(w==null)w=v
else w=w.U(A.d(d).ax.a===B.p?B.B:B.D)
return A.a1(A.c([t,B.bV,A.o("Window: "+x,v,v,v,v,v,w,v,v,v)],y.p),B.S,v,B.r,B.v,0,B.x)},
aNQ(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.d(d).ok,f=e.e
if(f.b)return i.akB(d,D.e0i,"Time tracking data unavailable","The time-tracking module is not enabled on this workspace yet. Billable-hours reporting appears once it ships.")
x=f.a
if(x==null)x=D.rj
w=new A.aI(Date.now(),0,!1)
v=C.c6e(x,w)
u=C.ck2(x,w)
t=C.c5w(x,w)
s=C.c5v(x,w)
r=g.at
if(r==null)r=h
else r=r.fM(A.d(d).ax.a===B.p?B.B:B.D,B.ao,1.2)
r=A.o("BILLABLE HOURS",h,h,h,h,h,r,h,h,h)
q=C.BS(v)
p=g.f
q=A.o(q,h,h,h,h,h,p==null?h:p.cX(B.ao),h,h,h)
p=e.a.gk9()
o=g.Q
n=o==null
if(n)m=h
else m=o.U(A.d(d).ax.a===B.p?B.B:B.D)
l=y.p
m=A.am(A.c([q,B.b8,new A.V(D.ajp,A.o("billable \xb7 "+p.toLowerCase(),h,h,h,h,h,m,h,h,h),h)],l),B.fc,h,B.r,B.v,0,h,h)
q=u>0
if(q)p=A.d(d).ax.fy
else p=A.d(d).ax.a===B.p?B.B:B.D
p=A.aW(B.qR,p,h,h,16)
k=q?C.BS(u)+" unbilled":"Everything is invoiced"
if(n)q=h
else{if(q)j=A.d(d).ax.fy
else j=A.d(d).ax.a===B.p?B.B:B.D
j=o.e0(j,q?B.aT:h)
q=j}q=A.c([r,B.ag,m,B.ag,A.am(A.c([p,B.li,A.aA(A.o(k,h,h,h,h,h,q,h,h,h),1,h)],l),B.y,h,B.r,B.v,0,h,h)],l)
if(t.a!==0){r=A.c([B.R,i.apo(d,"By room")],l)
for(p=A.t(t).i("cR<1,2>"),p=A.rb(new A.cR(t,p),5,p.i("z.E")),p=new A.AA(J.aJ(p.a),p.b,A.t(p).i("AA<1>"));p.q();){m=p.gI()
r.push(i.a3h(d,e.FB(m.a),C.BS(m.b)))}B.i.L(q,r)}if(s.a!==0){r=A.c([B.R,i.apo(d,"By member")],l)
for(p=A.t(s).i("cR<1,2>"),p=A.rb(new A.cR(s,p),5,p.i("z.E")),p=new A.AA(J.aJ(p.a),p.b,A.t(p).i("AA<1>")),m=e.w;p.q();){l=p.gI()
k=m.h(0,l.a)
if(k==null)k="Member"
r.push(i.a3h(d,k,C.BS(l.b)))}B.i.L(q,r)}if(x.length===0){if(n)r=h
else r=o.U(A.d(d).ax.a===B.p?B.B:B.D)
q.push(new A.V(O.qA,A.o("No time entries in this window.",h,h,h,h,h,r,h,h,h),h))}r=A.a1(q,B.S,h,B.r,B.v,0,B.x)
q=A.d(d).ax.a===B.p?B.bB:B.L
return A.eZ(new A.V(B.aB,r,h),q,h,h,h,B.a6)},
aPn(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=A.d(d).ok,m=A.D(y.cN,y.r)
for(x=0;x<4;++x)m.m(0,B.DN[x],0)
for(w=J.aJ(e.d);w.q();){v=w.gI().f
u=m.h(0,v)
m.m(0,v,(u==null?0:u)+1)}w=n.at
if(w==null)w=o
else w=w.fM(A.d(d).ax.a===B.p?B.B:B.D,B.ao,1.2)
w=A.o("CASE STATUS OVERVIEW",o,o,o,o,o,w,o,o,o)
v=y.p
u=A.c([],v)
for(t=n.Q,x=0;x<4;++x){s=B.DN[x]
r=C.cdN(s)
q=m.h(0,s)
p=t==null?o:t.cX(B.cp)
p=A.o(r+" \xb7 "+A.q(q),o,o,o,o,o,p,o,o,o)
r=A.d(d).ax.a===B.p?B.cN:B.cO
u.push(P.rR(o,r,p,new A.b_(A.d(d).ax.a===B.p?B.az:B.cv,1,B.O,-1),B.bH))}m=A.a1(A.c([w,B.ag,A.hE(u,B.cG,8,8)],v),B.S,o,B.r,B.v,0,B.x)
w=A.d(d).ax.a===B.p?B.bB:B.L
return A.eZ(new A.V(B.aB,m,o),w,o,o,o,B.a6)},
bdo(d,e){var x,w,v=null,u=A.d(d).ok,t=e.r,s=u.at
if(s==null)s=v
else s=s.fM(A.d(d).ax.a===B.p?B.B:B.D,B.ao,1.2)
s=A.c([A.o("STORAGE BY ROOM",v,v,v,v,v,s,v,v,v),B.ag],y.p)
if(t.gW(t)){x=u.Q
if(x==null)x=v
else x=x.U(A.d(d).ax.a===B.p?B.B:B.D)
s.push(A.o("No evidence files stored yet.",v,v,v,v,v,x,v,v,v))}else for(x=t.geC(),x=x.mY(x,8),x=x.gV(x);x.q();){w=x.gI()
s.push(this.a3h(d,e.FB(w.a),C.c5P(w.b)))}s=A.a1(s,B.S,v,B.r,B.v,0,B.x)
x=A.d(d).ax.a===B.p?B.bB:B.L
return A.eZ(new A.V(B.aB,s,v),x,v,v,v,B.a6)},
aUl(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.d(d).ok,m=Date.now(),l=f.e,k=l.a
if(k==null)k=D.rj
x=l.b?o:C.c6e(k,new A.aI(m,0,!1))
m=f.f
l=m.b
if(l)w=o
else{m=m.a
w=C.c6b(m==null?D.x_:m)}m=f.r.gey()
v=m.jm(m,0,new C.b6Q())
m=n.at
if(m==null)m=o
else m=m.fM(A.d(d).ax.a===B.p?B.B:B.D,B.ao,1.2)
m=A.o("EXECUTIVE SUMMARY",o,o,o,o,o,m,o,o,o)
u=p.a50(d,"Billable hours",x==null?"\u2014":C.BS(x))
t=w==null
s=p.a50(d,"Invoiced",t?"\u2014":C.bXv(w.a))
r=t?"\u2014":C.bXv(w.b)
q=y.p
r=A.c([m,B.ag,A.c2b(2.2,A.c([u,s,p.apk(d,"Outstanding",r,!t&&w.b>0),p.a50(d,"Storage used",C.c5P(v))],q),2,8,8,B.xw,!0)],q)
if(l){m=n.Q
if(m==null)m=o
else m=m.U(A.d(d).ax.a===B.p?B.B:B.D)
r.push(new A.V(B.em,A.o("Invoicing module not enabled yet \u2014 invoiced / outstanding are unavailable.",o,o,o,o,o,m,o,o,o),o))}r.push(B.R)
r.push(A.am(A.c([A.aA(A.i7(D.e24,D.fy3,D.frA,new C.b6R(p,d,e,f),o),1,o),B.bo,A.aA(A.i7(D.e2l,D.fy4,D.fss,new C.b6S(p,d,e,f),o),1,o)],q),B.y,o,B.r,B.v,0,o,o))
m=A.a1(r,B.S,o,B.r,B.v,0,B.x)
l=A.d(d).ax.a===B.p?B.bB:B.L
return A.eZ(new A.V(B.aB,m,o),l,o,o,o,B.a6)},
apk(d,e,f,g){var x,w=null,v=A.d(d).ok,u=A.d(d).ax.a===B.p?B.cN:B.cO,t=A.b1(8),s=A.bU(A.d(d).ax.a===B.p?B.az:B.cv,B.O,1),r=v.Q
if(r==null)r=w
else r=r.U(A.d(d).ax.a===B.p?B.B:B.D)
r=A.o(e,w,1,B.at,w,w,r,w,w,w)
x=v.w
if(x==null)x=w
else x=x.e0(g?A.d(d).ax.fy:w,B.ao)
return A.au(w,A.a1(A.c([r,B.dO,A.o(f,w,1,B.at,w,w,x,w,w,w)],y.p),B.S,w,B.et,B.v,0,B.x),B.F,w,w,new A.aC(u,w,s,t,w,w,B.X),w,w,w,w,B.cQ,w,w,w)},
a50(d,e,f){return this.apk(d,e,f,!1)},
HZ(d,e,f){return this.aUv(d,e,f)},
aUv(d,e,f){var x=0,w=A.m(y.n),v=1,u=[],t=this,s,r,q,p
var $async$HZ=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.e(t.Hf(f),$async$HZ)
case 6:s=h
r=B.o.a8(new A.aI(Date.now(),0,!1).d_(),0,10)
x=7
return A.e($.BY().iQ(I.FT(null,A.c([I.GF(new Uint8Array(A.b4(s)),"application/pdf","casethread-report-"+A.q(r)+".pdf")],y.S),"CaseThread executive summary \u2014 "+f.a.gk9())),$async$HZ)
case 7:v=1
x=5
break
case 3:v=2
p=u.pop()
if(d.e!=null)d.T(y.q).f.aS(A.bO(null,null,null,null,null,B.C,null,A.o("PDF export failed.",null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$HZ,w)},
QB(d,e,f){return this.aUu(d,e,f)},
aUu(a4,a5,a6){var x=0,w=A.m(y.n),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$QB=A.i(function(a7,a8){if(a7===1){u.push(a8)
x=v}for(;;)switch(x){case 0:v=3
t=new A.aI(Date.now(),0,!1)
i=a6.e.a
s=i==null?D.rj:i
r=C.c5w(s,t)
q=C.c5v(s,t)
h=new A.dN("")
h.a="section,key,value\n"
g=a6.a
h.a="section,key,value\n"+('meta,period,"'+g.gk9()+" ("+B.o.a8(a6.b.d_(),0,10)+" to "+B.o.a8(a6.c.d_(),0,10)+')"\n')
p=h
o=new C.b6T()
for(f=r,f=new A.cR(f,A.t(f).i("cR<1,2>")).gV(0);f.q();){e=f.d
e.toString
n=e
e=p
d="billable_hours_by_room,"+A.q(o.$1(a6.FB(n.a)))+","+B.m.ar(n.b,2)+"\n"
e.a+=d}for(f=q,f=new A.cR(f,A.t(f).i("cR<1,2>")).gV(0),e=a6.w;f.q();){d=f.d
d.toString
m=d
d=p
a0=e.h(0,m.a)
if(a0==null)a0="Member"
a0="billable_hours_by_member,"+A.q(o.$1(a0))+","+B.m.ar(m.b,2)+"\n"
d.a+=a0}for(f=a6.r.geC(),f=f.gV(f);f.q();){l=f.gI()
e=p
d="storage_bytes_by_room,"+A.q(o.$1(a6.FB(l.a)))+","+l.b+"\n"
e.a+=d}f=a6.f
if(f.b)a1=null
else{f=f.a
a1=C.c6b(f==null?D.x_:f)}k=a1
if(k!=null){f=p
e="executive_summary,invoiced_cents,"+k.a+"\n"
f.a+=e
e=p
f="executive_summary,outstanding_cents,"+k.b+"\n"
e.a+=f}j=B.o.a8(new A.aI(Date.now(),0,!1).d_(),0,10)
f=$.BY()
e=p.a
x=6
return A.e(f.iQ(I.FT(null,A.c([I.GF(new Uint8Array(A.b4(B.bA.bc(e.charCodeAt(0)==0?e:e))),"text/csv","casethread-report-"+A.q(j)+".csv")],y.S),"CaseThread report \u2014 "+g.gk9())),$async$QB)
case 6:v=1
x=5
break
case 3:v=2
a3=u.pop()
if(a4.e!=null)a4.T(y.q).f.aS(A.bO(null,null,null,null,null,B.C,null,A.o("CSV export failed.",null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$QB,w)},
Hf(d){return this.aOE(d)},
aOE(d){var x=0,w=A.m(y.aH),v,u,t,s,r,q,p,o,n
var $async$Hf=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(A.cp("pdf.1",""),$async$Hf)
case 3:x=4
return A.e(A.cp("pw.1",""),$async$Hf)
case 4:A.an("pw.1")
u=F.c1J()
t=new A.aI(Date.now(),0,!1)
s=d.e
r=s.a
if(r==null)r=D.rj
s=s.b
q=s?null:C.c6e(r,t)
p=s?null:C.ck2(r,t)
s=d.f
if(s.b)o=null
else{s=s.a
o=C.c6b(s==null?D.x_:s)}s=d.r.gey()
n=s.jm(s,0,new C.b6N())
A.an("pw.1")
A.an("pdf.1")
u.a64(F.ccH(new C.b6O(d,t,new C.b6P(),q,p,o,n,r),null,null,M.HW,null,null,null))
v=u.it()
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Hf,w)},
apo(d,e){var x=null,w=A.d(d).ok.Q
if(w==null)w=x
else w=w.e0(A.d(d).ax.a===B.p?B.B:B.D,B.aT)
return new A.V(B.AS,A.o(e,x,x,x,x,x,w,x,x,x),x)},
a3h(d,e,f){var x=null,w=A.d(d).ok.Q,v=A.aA(A.o(e,x,1,B.at,x,x,w,x,x,x),1,x)
return new A.V(B.JZ,A.am(A.c([v,A.o(f,x,x,x,x,x,w==null?x:w.cX(B.aT),x,x,x)],y.p),B.y,x,B.r,B.v,0,x,x),x)},
akB(d,e,f,g){var x,w,v=null,u=A.d(d).ok,t=A.aW(e,A.d(d).ax.a===B.p?B.B:B.D,v,v,v),s=u.z
s=A.o(f,v,v,v,v,v,s==null?v:s.cX(B.aT),v,v,v)
x=u.Q
if(x==null)x=v
else x=x.U(A.d(d).ax.a===B.p?B.B:B.D)
w=y.p
w=A.am(A.c([t,B.bo,A.aA(A.a1(A.c([s,B.dO,A.o(g,v,v,v,v,v,x,v,v,v)],w),B.S,v,B.r,B.v,0,B.x),1,v)],w),B.S,v,B.r,B.v,0,v,v)
t=A.d(d).ax.a===B.p?B.bB:B.L
return A.eZ(new A.V(B.aB,w,v),t,v,v,v,B.a6)},
ai9(d,e,f){var x,w=null,v=A.d(d).ok.z
v=A.am(A.c([A.aA(A.o(e,w,w,w,w,w,v==null?w:v.U(A.d(d).ax.fy),w,w,w),1,w),A.bx(B.ef,w,w,w,f,w,w)],y.p),B.y,w,B.r,B.v,0,w,w)
x=A.d(d).ax.a===B.p?B.bB:B.L
return A.eZ(new A.V(B.aB,v,w),x,w,w,w,B.a6)}}
C.Gs.prototype={
cl(d,e){var x=null,w=e.S($.cnZ(),y.u),v=e.S($.co1(),y.F)
return A.hp(A.lM(x,x,x,x,x,x,x,x,B.a7f),x,A.e_(w,new C.biC(this,v,d,e),new C.biD(this,d),new C.biE(),!1,!0,!1),x,x)},
ari(d,e){var x=null,w=A.d(d).ok.z
return A.bS(A.o(e,x,x,x,x,x,w==null?x:w.U(A.d(d).ax.fy),x,x,x),x,x)},
b7O(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=A.d(d).ok,g=e.S($.c0y(),y.X).gp()
if(g==null)g=D.eVj
x=J.el(g,new C.bix(f))
w=A.J(x,x.$ti.i("z.E"))
if(w.length===0)return B.aM
x=h.at
if(x==null)x=i
else x=x.fM(A.d(d).ax.a===B.p?B.B:B.D,B.ao,1.5)
v=y.p
x=A.c([A.o("CHANGE PLAN",i,i,i,i,i,x,i,i,i),B.R],v)
for(u=w.length,t=f.c,s=y.O,r=h.Q,q=h.z,p=0;p<w.length;w.length===u||(0,A.H)(w),++p){o=w[p]
n=A.d(d).ax.a===B.p?B.bB:B.L
m=q==null?i:q.cX(B.aT)
m=A.o(o.b,i,i,i,i,i,m,i,i,i)
l=o.a
if(l==="enterprise")k="Custom pricing \u2014 contact us"
else{k=o.c
k=k===0?"Free":"$"+B.m.ar(k/100,0)+"/month"}if(r==null)j=i
else j=r.U(A.d(d).ax.a===B.p?B.B:B.D)
j=A.a1(A.c([m,A.o(k,i,i,i,i,i,j,i,i,i)],v),B.S,i,B.r,B.v,0,B.x)
x.push(new A.uE(n,B.a6,i,i,new A.V(B.aB,new A.ib(B.b2,B.r,B.v,B.y,i,B.x,i,0,A.c([new A.fO(1,B.d_,j,i),A.d2(A.o(o.c<t?"Downgrade":"Switch",i,i,i,i,i,i,i,i,i),new A.K("plan-switch-"+l,s),new C.biy(this,d,e,o),i)],v),i),i),i))}return A.a1(x,B.S,i,B.r,B.v,0,B.x)},
Td(d,e,f){return this.bdU(d,e,f)},
bdU(d,e,f){var x=0,w=A.m(y.n),v
var $async$Td=A.i(function(g,h){if(g===1)return A.j(h,w)
for(;;)switch(x){case 0:x=f.a==="enterprise"||f.c>0?3:4
break
case 3:x=5
return A.e(S.a8t(d,e,f),$async$Td)
case 5:x=1
break
case 4:d.T(y.q).f.aS(D.fkn)
case 1:return A.k(v,w)}})
return A.l($async$Td,w)},
TB(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=A.d(d).ok,k=f.a.h(0,g.c)
if(k==null)k=0
x=e.aar(g)
w=x>0
v=w?B.m.az(k/x,0,1):0
w=k>=x&&w
u=A.d(d).ax.a===B.p?B.bB:B.L
t=l.z
t=A.aA(A.o(h,m,m,m,m,m,t==null?m:t.cX(B.cp),m,m,m),1,m)
s=A.q(i.$1(k))
r=A.q(i.$1(x))
q=l.Q
p=q==null
if(p)o=m
else{if(w)o=A.d(d).ax.fy
else o=A.d(d).ax.a===B.p?B.B:B.D
o=q.e0(o,w?B.aT:m)}n=y.p
o=A.am(A.c([t,A.o(s+" / "+r,m,m,m,m,m,o,m,m,m)],n),B.y,m,B.r,B.v,0,m,m)
t=A.d(d).ax.a===B.p?B.az:B.cv
if(w)s=A.d(d).ax.fy
else s=A.d(d).ax.a===B.p?B.c3:B.ad
s=A.c([o,B.ag,A.aVm(t,s,m,v,m)],n)
if(w)B.i.L(s,A.c([B.t2,A.o("Limit reached \u2014 upgrades unlock more.",m,m,m,m,m,p?m:q.U(A.d(d).ax.fy),m,m,m)],n))
return A.eZ(new A.V(B.aB,A.a1(s,B.S,m,B.r,B.v,0,B.x),m),u,m,m,m,B.a6)},
alb(d,e,f){var x,w,v=null,u=A.d(d),t=A.d(d).ax.a===B.p?B.bB:B.L
u=u.ok.z
x=A.aA(A.o(e,v,v,v,v,v,u,v,v,v),1,v)
w=f>=2147483647?"Unlimited":""+f
return A.eZ(new A.V(B.mq,A.am(A.c([x,A.o(w,v,v,v,v,v,u==null?v:u.cX(B.cp),v,v,v)],y.p),B.y,v,B.r,B.v,0,v,v),v),t,v,v,v,B.a6)}}
C.SZ.prototype={
gau6(){var x=this.f
return A.cb(A.b6(x),A.bk(x),A.c_(x),0,0)},
Y(){var x=null
return new C.a1p(new A.pj(!1,$.ab()),new A.bq(x,y.B),new A.bq(x,y.t),x,A.D(y.bw,y.aI),x,!0,x)}}
C.a1p.prototype={
gmd(){var x=this.d
return x===$?this.d=new A.a5_(this.a.r,$.ab()):x},
gvZ(){var x,w=this.e
if(w===$){x=this.a.c
x=x==null?null:x.a
w=this.e=new A.M8(x,$.ab())}return w},
gpG(){var x,w=this.f
if(w===$){x=this.a.c
x=x==null?null:x.b
w=this.f=new A.M8(x,$.ab())}return w},
ghB(){this.a.toString
return null},
hj(d,e){var x=this
x.f6(x.gmd(),"entry_mode")
x.f6(x.gvZ(),"selected_start")
x.f6(x.gpG(),"selected_end")
x.f6(x.r,"autovalidate")},
l(){var x=this
x.gmd().l()
x.gvZ().l()
x.gpG().l()
x.r.l()
x.aKe()},
a2Q(){var x,w=this,v=w.gmd(),u=v.y,t=u==null
if((t?A.t(v).i("aM.T").a(u):u)!==B.el)v=(t?A.t(v).i("aM.T").a(u):u)===B.l4
else v=!0
if(v)if(!w.x.gaf().kO()){w.v(new C.brO(w))
return}if(w.gakn()){v=w.gvZ()
u=v.y
v=u==null?A.t(v).i("aM.T").a(u):u
v.toString
u=w.gpG()
t=u.y
u=t==null?A.t(u).i("aM.T").a(t):t
u.toString
x=new A.Ji(v,u,y.T)}else x=null
v=w.c
v.toString
A.ap(v,!1).b1(x)},
a2w(){var x=this.c
x.toString
A.ap(x,!1).b1(null)},
a2K(){this.v(new C.brN(this))},
RC(d){var x=this.a
if(d.jo(x.d)||d.kE(x.e))return!1
return!0},
b0d(d){this.v(new C.brP(this,d))},
aY4(d){this.v(new C.brM(this,d))},
gakn(){var x=this.gvZ(),w=x.y
if((w==null?A.t(x).i("aM.T").a(w):w)!=null){x=this.gpG()
w=x.y
x=(w==null?A.t(x).i("aM.T").a(w):w)!=null}else x=!1
return x},
C(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2="Select range",b3={}
A.d(b4)
x=y.w
w=A.az(b4,B.dR,x).w.geF()
A.c8(b4,B.aF,y.y).toString
v=A.qe(b4)
A.d(b4)
u=A.ot(b4)
b3.a=null
t=b0.gmd()
s=t.y
r=s==null
if((r?A.t(t).i("aM.T").a(s):s)!==B.eI)q=(r?A.t(t).i("aM.T").a(s):s)===B.el
else q=!0
switch(r?A.t(t).i("aM.T").a(s):s){case B.eI:case B.ni:t=b0.a.fr
s=b0.gvZ()
r=s.y
s=r==null?A.t(s).i("aM.T").a(r):r
r=b0.gpG()
p=r.y
r=p==null?A.t(r).i("aM.T").a(p):p
p=b0.a
o=p.d
n=p.e
m=p.dy
p=p.gau6()
l=b0.gakn()?b0.gRi():b1
if(q){k=b0.a.db
k=A.aW(B.lO,b1,b1,b1,b1)
k=A.bw(b1,b1,b1,k,b1,b1,b0.gIi(),B.a9,b1,b1,"Switch to input",b1)}else k=b1
b0.a.toString
b3.a=new C.anK(s,r,o,n,m,p,b0.gak6(),b0.gajM(),l,b0.gRb(),"Save",b2,t,k,b0.w)
j=A.az(b4,B.eZ,x).w.a
i=v.fx
if(i==null){x=u.fx
x.toString
i=x}h=v.fy
if(h==null)h=u.gMU()
g=v.go
if(g==null)g=u.gMV()
f=v.id
if(f==null)f=u.id
e=B.a9
break
case B.el:case B.l4:x=b0.a.fr
t=b0.gvZ()
s=t.y
if(s==null)s=A.t(t).i("aM.T").a(s)
r=b0.gpG()
p=r.y
if(p==null)p=A.t(r).i("aM.T").a(p)
o=b0.a.gau6()
n=w===B.d3
m=n?98:108
l=b0.a
k=l.fr
d=t.y
t=d==null?A.t(t).i("aM.T").a(d):d
d=r.y
r=d==null?A.t(r).i("aM.T").a(d):d
d=l.d
a0=l.e
a1=l.dy
a2=b0.r
a3=a2.y
a2=a3==null?A.t(a2).i("aM.T").a(a3):a3
a3=l.Q
a4=l.as
a5=l.at
a6=l.ax
a7=l.ay
a8=l.ch
a9=l.CW
l=l.cx
t=t==null?b1:A.cb(A.b6(t),A.bk(t),A.c_(t),0,0)
r=r==null?b1:A.cb(A.b6(r),A.bk(r),A.c_(r),0,0)
k=A.a1(A.c([B.d5,new C.a34(t,r,A.cb(A.b6(d),A.bk(d),A.c_(d),0,0),A.cb(A.b6(a0),A.bk(a0),A.c_(a0),0,0),b0.gak6(),b0.gajM(),a4,a5,a3,a6,a7,a8,a9,!0,a2,l,a1,k,b0.x),B.d5],y.p),B.y,b1,B.r,B.v,0,B.x)
if(q){b0.a.toString
t=A.bw(b1,b1,b1,B.Ok,b1,b1,b0.gIi(),B.a9,b1,b1,"Switch to calendar",b1)}else t=b1
b0.a.toString
b3.a=new C.arq(s,p,o,new A.aN(b1,m,new A.V(B.uT,k,b1),b1),b0.gRi(),b0.gRb(),"OK","Cancel",b2,t,x,b1)
if(n)j=B.FK
else j=D.fjL
x=v.b
if(x==null){x=u.b
x.toString
i=x}else i=x
h=v.c
if(h==null)h=u.gbT()
g=v.d
if(g==null)g=u.gc7()
x=v.e
f=x==null?u.e:x
e=B.K2
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
return A.CZ(b1,x,A.aCI(A.KQ(new A.ed(new C.brQ(b3),b1),1.3),b1,B.ek,b1,B.ak,b1,s,t),B.cM,b1,i,e,B.nZ,h,f,g)}}
C.anK.prototype={
C(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null
A.d(a3)
x=A.c8(a3,B.aF,y.y)
x.toString
w=y.w
v=A.az(a3,B.dR,w).w.geF()
u=A.qe(a3)
A.d(a3)
t=A.ot(a3)
s=u.fr
if(s==null)s=t.fr
r=u.k1
if(r==null)r=t.gMQ()
q=u.k2
if(q==null)q=t.gMR()
p=q.b3(0.38)
o=u.k3
if(o==null)o=t.gMS()
n=u.k4
if(n==null)n=t.gMT()
m=n==null?a2:n.lb(q)
n=a1.ax
l=a1.c
k=a1.d
j=C.chC(x,n,l,k)
i=C.chB(x,n,l,k,new A.aI(Date.now(),0,!1))
x=o==null
if(x)h=a2
else h=o.lb(l!=null?q:p)
if(x)g=a2
else g=o.lb(k!=null?q:p)
f=A.ol(a2,a2,a2,a2,p,a2,a2,a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)
e=new A.e5(a2,a2,a2,a2,a2,q,a2,a2,a2)
x=y.p
d=A.c([],x)
if(v===B.eu&&a1.ay!=null){a0=a1.ay
a0.toString
d.push(a0)}d.push(A.bx(A.o(a1.as,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a1.z,a2,f))
d.push(B.b8)
w=A.az(a3,B.o9,w).w.a.a<360?42:72
a0=a1.at
x=A.c([new A.aN(w,a2,a2,a2),A.aA(A.bA(a2,a2,a2,A.a1(A.c([A.o(a0,a2,1,B.at,a2,a2,m,a2,a2,a2),B.ag,A.am(A.c([A.o(j,a2,1,B.at,a2,a2,h,a2,a2,a2),A.o(" \u2013 ",a2,a2,a2,a2,a2,h,a2,a2,a2),new A.fi(1,B.cd,A.o(i,a2,1,B.at,a2,a2,g,a2,a2,a2),a2)],x),B.y,a2,B.r,B.v,0,a2,a2),B.a1],x),B.S,a2,B.r,B.v,0,B.x),!1,a2,a2,a2,!0,a2,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a0+" "+j+" to "+i,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,B.aa,a2),1,a2)],x)
if(v===B.d3&&a1.ay!=null){w=a1.ay
w.toString
x.push(new A.V(B.fe,A.vn(w,e,a2),a2))}x=A.lM(d,e,r,new C.ahH(A.am(x,B.y,a2,B.r,B.v,0,a2,a2),D.fjr,a2),0,e,new A.St(B.a6o,a2,a2,a2,a2,B.Iw,a2,a1.Q,a2,a2,a2,a2,B.pR,a2),0,a2)
w=a1.e
d=a1.f
a0=a1.w
l=l!=null?A.cb(A.b6(l),A.bk(l),A.c_(l),0,0):a2
k=k!=null?A.cb(A.b6(k),A.bk(k),A.c_(k),0,0):a2
w=A.cb(A.b6(w),A.bk(w),A.c_(w),0,0)
d=A.cb(A.b6(d),A.bk(d),A.c_(d),0,0)
return A.eY(!0,A.hp(x,s,new C.a0x(l,k,w,d,a1.r,A.cb(A.b6(a0),A.bk(a0),A.c_(a0),0,0),a1.x,a1.y,n,a2),a2,a2),!1,B.a9,!1,!1)}}
C.a0x.prototype={
Y(){return new C.a0y(new A.bq(null,y.B),new A.rg())}}
C.a0y.prototype={
au(){var x,w,v,u=this
u.aP()
x=A.A7(0,null,null)
u.x=x
x.a9(u.gbb0())
x=u.a
w=u.f=x.c
u.r=x.d
if(w==null)w=x.w
v=x.e
if(!w.jo(v)&&!w.kE(x.f))u.w=A.ac_(v,w)
u.y=u.w!==0},
l(){var x=this.x
x===$&&A.b()
x.l()
this.al()},
bb1(){var x,w=this,v=w.x
v===$&&A.b()
v=v.gbv().at
v.toString
x=B.i.gde(w.x.f).z
x.toString
if(v<=x)w.v(new C.bnn(w))
else{v=w.y
v===$&&A.b()
if(!v)w.v(new C.bno(w))}},
bgx(){var x=this.c
x.toString
switch(A.d(x).w.a){case 0:case 1:A.K7()
break
case 2:case 3:case 4:case 5:break}},
bfU(d){this.bgx()
this.v(new C.bnp(this,d))},
afE(d,e,f){var x,w,v=this,u=v.w,t=f?u-e-1:u+e
u=v.a.e
x=A.cb(A.b6(u),A.bk(u)+t,1,0,0)
u=v.a
w=u.z
return new C.a3p(v.f,v.r,u.w,v.gbfT(),u.e,u.f,x,u.r,w,null)},
C(d){var x,w,v,u,t,s,r=this,q=null,p=y.p,o=A.c([D.fCr],p),n=r.y
n===$&&A.b()
if(n)o.push(D.aiB)
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
p=A.c([C.cer(new C.bnq(r),s,q),C.cer(new C.bnr(r),A.ac_(w,v)+1-s,t)],p)
o.push(A.aA(new C.a0z(new C.abM(p,B.a5,!1,u,q,q,q,!1,t,0,q,q,q,B.mJ,B.T,q,q,B.C,B.bZ,r.d),w,v,n,x,q),1,q))
return A.a1(o,B.y,q,B.r,B.v,0,B.x)}}
C.a0z.prototype={
Y(){return new C.a0A()}}
C.a0A.prototype={
au(){var x,w,v=this
v.aP()
x=y.k
w=y.bc
v.e=A.Q([B.Go,new A.dP(v.gaYx(),new A.c4(A.c([],x),w),y.d),B.Gp,new A.dP(v.gaYz(),new A.c4(A.c([],x),w),y.e),B.yx,new A.dP(v.gaXI(),new A.c4(A.c([],x),w),y.c)],y.bv,y.V)
v.f=A.k4(!0,"Day Grid",!0,!0,null,null,!1)},
l(){var x=this.f
x===$&&A.b()
x.l()
this.al()},
aYw(d){this.v(new C.bnt(this,d))},
aYy(d){var x,w=this.f
w===$&&A.b()
w.fP()
w=this.f
x=w.e
x.toString
A.nM(x).pC(w,!0)},
aYA(d){var x,w=this.f
w===$&&A.b()
w.fP()
w=this.f
x=w.e
x.toString
A.nM(x).pC(w,!1)},
aXJ(d){this.v(new C.bns(this,d))},
b3T(d,e){var x,w,v,u=this.c.T(y.I).w
this.a.toString
if(u===B.c0)if(e===B.m5)x=B.mP
else x=e===B.mP?B.m5:e
else x=e
w=B.a_u.h(0,x)
w.toString
v=A.cb(A.b6(d),A.bk(d),A.c_(d)+w,0,0)
w=this.a
if(!v.jo(w.d)&&!v.kE(w.e))return v
return null},
C(d){var x,w,v,u,t=this,s=null,r=t.e
r===$&&A.b()
x=t.f
x===$&&A.b()
w=t.a.r
v=x.gci()?t.w:s
u=t.f.gci()?t.r:s
return A.adv(r,!1,new C.a2q(w,v,u,t.a.c,s),!0,x,!0,B.ca,t.gaYv(),s,s,B.a_j)}}
C.a2q.prototype={
dg(d){return!this.f.AD(this.r,d.r)||this.w!=d.w}}
C.ap8.prototype={
aVU(d,e){var x,w=null,v=A.c([],y.p)
for(x=0;v.length<7;x=(x+1)%7)v.push(new A.li(!0,new A.fg(B.ah,w,w,A.o(B.US[x],w,w,w,w,w,d,w,w,w),w),w))
return v},
C(d){var x,w=A.d(d),v=w.ok.x.lb(w.ax.k3),u=A.c8(d,B.aF,y.y)
u.toString
x=this.aVU(v,u)
B.i.hw(x,0,B.aM)
x.push(B.aM)
u=A.az(d,B.dR,y.w).w.geF()===B.eu?384:480
return new A.e0(new A.av(0,u,0,42),A.c2c(A.Zk(x,!0,!1,!0),D.If,null,!0),null)}}
C.bEE.prototype={
G8(d){return new C.bEI(9,Math.max((d.w-16)/7,0),8,A.xt(d.x))},
m7(d){return!1}}
C.bEI.prototype={
ac7(d){return this.a*B.m.ap(d,50)},
ac5(d){return Math.max(0,this.a*B.m.dQ(d/50)-1)},
aVS(d,e){var x,w,v,u=this
if(u.d){x=u.b
w=u.c
v=e?w:x
return(u.a-2)*x+2*w-d-v}return d},
O3(d){var x,w=this,v=w.a,u=B.f.aK(d,v),t=u===0||u===v-1,s=w.b,r=w.c,q=Math.max(0,(u-1)*s+r)
v=B.f.eq(d,v)
x=w.aVS(q,t)
if(t)s=r
return new A.akl(v*50,x,42,s)},
a6T(d){return 50*(B.f.eq(d-1,this.a)+1)-8}}
C.a3p.prototype={
Y(){return new C.a3q()}}
C.a3q.prototype={
au(){var x,w,v,u,t
this.aP()
x=this.a.x
w=A.T_(A.b6(x),A.bk(x))
v=J.h7(w,y.J)
for(u=0;u<w;u=t){t=u+1
v[u]=A.k4(!0,"Day "+t,!0,!0,null,null,!0)}this.d=v},
bC(){var x,w,v=this
v.d1()
x=v.c.T(y.Q)
w=x==null?null:x.r
if(w!=null){x=v.a
x=x.z.AE(x.x,w)}else x=!1
if(x){x=v.d
x===$&&A.b()
x[A.c_(w)-1].fP()}},
l(){var x,w,v,u,t=this.d
t===$&&A.b()
x=t.length
w=0
for(;w<t.length;t.length===x||(0,A.H)(t),++w){v=t[w]
u=v.ax
if(u!=null)u.aX()
v.f0()}this.al()},
aRF(d){var x,w,v
if(d){x=this.c.T(y.Q)
w=x==null?null:x.w
if(w!=null){switch(w.a){case 0:case 3:v=B.lg
break
case 1:case 2:v=B.lf
break
default:v=B.Fe}x=$.as.aO$.d.c.e
x.toString
A.b9o(x,0,v,B.cc,B.ak)}}},
C(b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.d(b5),b4=A.c8(b5,B.aF,y.y)
b4.toString
x=b1.a.x
w=A.b6(x)
v=A.bk(x)
u=A.T_(w,v)
b1.a.toString
t=A.c9H(w,v,b4)
s=B.m.dQ((u+t)/7)
x=y.p
r=A.c([],x)
for(q=0-t+1,p=b1.gaRE(),o=y.x;q<=u;++q)if(q<1)r.push(B.qY)
else{b1.a.toString
n=A.cb(w,v,q,0,0)
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
a0=m.z.AD(m.e,n)
m=b1.a
l=m.z
k=b1.d
k===$&&A.b()
k=k[A.c_(n)-1]
m=m.f
b5.T(o)
j=A.d(b5)
j=j.b6.ok
if(j==null){A.d(b5)
j=A.ot(b5)
j=j.gB0()}r.push(new C.a1s(n,k,m,p,j,i,h,g,f,e,d,a0,l,b2))}a1=A.c([],x)
for(p=t>0,a2=0;a2<s;++a2){a3=a2*7
a4=Math.min(a3+7,r.length)
a5=B.i.du(r,a3,a4)
b1.a.toString
a6=A.cb(w,v,a3-t+1,0,0)
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
m=m.b6.ok
if(m==null){A.d(b5)
m=A.ot(b5)
m=m.gB0()}m=new A.J2(m,!0,B.qY,b2)}else m=B.qY
B.i.hw(a5,0,m)
m=r.length
if(!(a4<m))m=a4===m&&B.f.aK(m,7)===0
else m=!0
if(m){b1.a.toString
a8=A.cb(w,v,a4-t,0,0)
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
m=m.b6.ok
if(m==null){A.d(b5)
m=A.ot(b5)
m=m.gB0()}m=new A.J2(m,!0,B.qY,b2)}else m=B.qY
a5.push(m)}B.i.L(a1,a5)}b0=A.az(b5,B.dR,y.w).w.geF()===B.eu?384:480
return A.a1(A.c([new A.e0(new A.av(0,b0,0,1/0).YX(58),new A.V(B.e9,new A.dY(B.d7,b2,b2,new A.li(!0,A.o(b4.W5(b1.a.x),b2,b2,b2,b2,b2,b3.ok.z.lb(b3.ax.k3),b2,b2,b2),b2),b2),b2),b2),new A.e0(new A.av(0,b0,0,s*42+(s-1)*8),A.c2c(A.Zk(a1,!0,!1,!0),D.If,B.xw,!1),b2),B.R],x),B.y,b2,B.r,B.v,0,B.x)}}
C.a1s.prototype={
Y(){return new C.ap9(A.B3())},
rQ(d){return this.e.$1(d)}}
C.ap9.prototype={
l(){var x=this.d
x.R$=$.ab()
x.N$=0
this.al()},
C(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=A.d(a4),a2=a1.ax,a3=A.c8(a4,B.aF,y.y)
a3.toString
x=A.qe(a4)
A.d(a4)
w=A.ot(a4)
v=a4.T(y.I).w
u=d.a
t=u.r
s=a1.ok.z
r=new C.brX(x,w)
q=new C.brY(r)
p=A.aS(y.cD)
if(u.w)p.B(0,B.a4)
u=d.a
if(u.y||u.z)p.B(0,B.ab)
u=d.d
u.sp(p)
o=y._
n=q.$1$2(new C.brS(),p,o)
m=q.$1$2(new C.brT(),p,o)
l=q.$1$2(new C.brU(),p,y.b8)
if(l==null)l=B.l_
q=d.a
k=a0
if(q.y||q.z){s=s==null?a0:s.lb(n)
j=new A.je(m,a0,a0,a0,l)
q=d.a
if(q.x&&!q.as)k=new C.a2P(t,q.y?D.GJ:D.a8S,v,a0)}else{j=a0
i=a0
if(q.Q){k=new C.a2P(t,D.a8T,v,a0)
if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.lb(A.ax(97,q.A()>>>16&255,q.A()>>>8&255,q.A()&255))}}else if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.lb(A.ax(97,q.A()>>>16&255,q.A()>>>8&255,q.A()&255))}else if(q.at){s=s==null?a0:s.lb(a2.b)
q=x.CW
if(q==null)q=w.gBh()
j=new A.je(a0,a0,a0,a0,l.jj(q.U(a2.b)))}}h=a3.Lq(A.c_(d.a.c))
q=d.a
g=q.at?", Today":""
f=h+", "+a3.W4(q.c)+g
a3=d.a
q=a3.y
if(q)f="Start date "+f
else if(a3.z)f="End date "+f
q=q||a3.z
e=A.au(B.ah,A.bA(a0,a0,a0,new A.li(!0,A.o(h,a0,a0,a0,a0,a0,s,a0,a0,a0),a0),!1,a0,a0,a0,!1,a0,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,f,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,q,a0,a0,a0,a0,a0,a0,B.aa,a0),B.F,a0,a0,j,a0,a0,a0,a0,a0,a0,a0,a0)
if(k!=null)e=A.hj(e,a0,a0,k,B.aP)
return!a3.w?A.cbo(!1,a0,!0,e,!0,l,!0,!1,a0,a3.d,a0,B.c8,a0,a0,a0,a0,a0,a3.f,a0,a0,a0,a0,a0,a0,a0,a0,new C.brV(d),a0,a0,a0,new A.b8(new C.brW(d,r),y.cS),a0,a0,a0,u):e}}
C.OQ.prototype={
H(){return"_HighlightPainterStyle."+this.b}}
C.a2P.prototype={
aZ(d,e){var x,w,v,u,t,s,r=this.c
if(r===D.fCY)return
$.ar()
x=A.bi()
x.r=this.b.gp()
x.b=B.cq
w=this.d
A:{if(B.c0===w){v=!0
break A}if(B.bd===w){v=!1
break A}v=null}B:{u=D.a8S===r
t=!(u&&v)
if(t){s=D.GJ===r
v=s&&!v}else{s=null
v=!0}if(v){r=e.a/2
d.j1(new A.X(r,0,r+r,0+e.b),x)
break B}if(!u)v=t?s:D.GJ===r
else v=!0
if(v){d.j1(new A.X(0,0,0+e.a/2,0+e.b),x)
break B}if(D.a8T===r){d.j1(new A.X(0,0,0+e.a,0+e.b),x)
break B}break B}},
eZ(d){return!1}}
C.arq.prototype={
aVo(d,e,f,g){var x,w,v,u=A.c8(d,B.aF,y.y)
u.toString
x=this.as
w=C.chC(u,x,e,f)
v=C.chB(u,x,e,f,g)
if(e==null||f==null)return"Date Range"
switch(d.T(y.I).w.a){case 0:u=v+" \u2013 "+w
break
case 1:u=w+" \u2013 "+v
break
default:u=null}return u},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
A.d(d)
x=A.c8(d,B.aF,y.y)
x.toString
w=A.az(d,B.dR,y.w).w.geF()
v=A.qe(d)
A.d(d)
u=A.ot(d)
if(w===B.d3){t=v.w
s=t==null?u.gEI():t}else s=A.d(d).ok.f
r=v.r
if(r==null)r=u.gAu()
s=s==null?j:s.U(r)
t=k.c
q=k.d
p=k.aVo(d,t,q,k.e)
o=t!=null&&q!=null?x.a8s(t)+" \u2013 "+x.a8s(q):""
n=A.cfW(k.Q,k.z,w===B.eu,w,o,s,p)
x=A.bx(A.o(k.y,j,j,j,j,j,j,j,j,j),j,j,j,k.w,j,j)
t=y.p
m=new A.e0(B.HK,new A.V(B.fe,new A.dY(B.q0,j,j,A.b_T(j,A.c([x,A.bx(A.o(k.x,j,j,j,j,j,j,j,j,j),j,j,j,k.r,j,j)],t),B.a0_,B.x,0,8),j),j),j)
x=A.bN(d,B.bi)
x=x==null?j:x.gcf()
x=(x==null?B.aU:x).k6(0,1.3).b4(14)
l=B.FK.aG(0,x/14)
switch(w.a){case 0:return A.nW(new C.bBR(k,!0,l,n,m))
case 1:return A.am(A.c([n,new A.fi(1,B.cd,A.a1(A.c([A.aA(k.f,1,j),m],t),B.b4,j,B.r,B.W,0,B.x),j)],t),B.b4,j,B.r,B.W,0,j,j)}}}
C.a34.prototype={
Y(){return new C.OW()}}
C.OW.prototype={
au(){var x,w,v=this
v.aP()
x=v.a
v.f=x.c
w=$.ab()
v.w=new A.bR(B.aH,w)
v.r=x.d
v.x=new A.bR(B.aH,w)},
l(){var x,w=this.w
w===$&&A.b()
x=$.ab()
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
x=A.c8(x,B.aF,y.y)
x.toString
w=t.f
if(w!=null){t.a.toString
w=x.a8r(w)
t.d=w
t.a.toString
v=!t.Q
u=t.w
u===$&&A.b()
t.aqw(u,w,v)
t.Q=v}w=t.r
if(w!=null){t.a.toString
x=x.a8r(w)
t.e=x
w=t.x
w===$&&A.b()
t.aqw(w,x,!1)}},
kO(){var x,w,v,u=this,t={},s=u.arn(u.f)
t.a=s
x=u.arn(u.r)
if(s==null&&x==null){w=u.f
w.toString
v=u.r
v.toString
if(w.kE(v)){u.a.toString
w=u.c
w.toString
A.c8(w,B.aF,y.y).toString
t.a="Invalid range."}}u.v(new C.bBU(t,u,x))
return t.a==null&&x==null},
amp(d){var x=this.c
x.toString
x=A.c8(x,B.aF,y.y)
x.toString
this.a.toString
return x.ayo(d)},
arn(d){var x,w=this
if(d==null){w.a.toString
x=w.c
x.toString
A.c8(x,B.aF,y.y).toString
return"Invalid format."}else if(!w.RC(d)){w.a.toString
x=w.c
x.toString
A.c8(x,B.aF,y.y).toString
return"Out of range."}return null},
RC(d){var x=this.a
if(d.jo(x.e)||d.kE(x.f))return!1
return!0},
aqw(d,e,f){var x=d.a.atI(e)
d.fg(f?x.mt(A.e8(B.Z,0,e.length,!1)):x)},
b0c(d){var x=this
x.v(new C.bBT(x,d))
if(x.a.CW)x.kO()},
aY3(d){var x=this
x.v(new C.bBS(x,d))
if(x.a.CW)x.kO()},
C(d){var x,w,v,u,t,s,r=this,q=null,p="mm/dd/yyyy"
A.d(d)
A.c8(d,B.aF,y.y).toString
x=A.yV(d)
w=x.p1
if(w==null)w=B.c5
v=r.w
v===$&&A.b()
u=x.dy
t=r.a
t.toString
v=A.aA(A.cS(q,B.as,!0,q,!0,B.C,q,A.cX(),v,q,q,q,q,q,2,A.kH(q,w,q,q,q,q,q,q,!0,q,q,q,q,q,r.y,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q,q,"Start Date",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.T,!0,q,!0,q,!1,q,B.aQ,q,q,q,q,q,t.cx,q,q,q,1,q,q,!1,"\u2022",q,r.gb0b(),q,q,q,!1,q,q,!1,q,!0,q,B.aO,q,q,q,q,q,q,q,q,q,q,q,q,!0,B.af,q,B.aE,q,q,q,q),1,q)
t=r.x
t===$&&A.b()
s=r.a
s.toString
return A.am(A.c([v,B.b8,A.aA(A.cS(q,B.as,!1,q,!0,B.C,q,A.cX(),t,q,q,q,q,q,2,A.kH(q,w,q,q,q,q,q,q,!0,q,q,q,q,q,r.z,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q,q,"End Date",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.T,!0,q,!0,q,!1,q,B.aQ,q,q,q,q,q,s.cx,q,q,q,1,q,q,!1,"\u2022",q,r.gaY2(),q,q,q,!1,q,q,!1,q,!0,q,B.aO,q,q,q,q,q,q,q,q,q,q,q,q,!0,B.af,q,B.aE,q,q,q,q),1,q)],y.p),B.S,q,B.r,B.v,0,q,q)}}
C.a7h.prototype={
b_(d){this.bd(d)
this.nw()},
bC(){var x,w,v,u,t=this
t.d1()
x=t.bU$
w=t.gkK()
v=t.c
v.toString
v=A.n5(v)
t.fv$=v
u=t.ml(v,w)
if(w){t.hj(x,t.e7$)
t.e7$=!1}if(u)if(x!=null)x.l()},
l(){var x,w=this
w.fu$.aY(0,new C.bTR())
x=w.bU$
if(x!=null)x.l()
w.bU$=null
w.al()}}
C.ahH.prototype={
C(d){return this.c},
$iF5:1,
guE(){return this.d}}
C.abM.prototype={
asH(d){return this.dx}}
var z=a.updateTypes(["~()","B(fu)","B(pA)","Z(Z,pA)","tP(b3<h,Z>)","~(aI?)","~(B)","~(h)","h(Z)","M<Ay?>(ah)","M<fu>(ah)","fu()","M<u3>(ah)","pA(@)","zZ(@)","M6(ah)","tN()","h(h)","M<qZ>(ah)","f(qZ)","M<~>(bm<r_>)","tP(h,h)","y4(nE)","tP(qy)","f?(fu)","f(u3)","~(aI)","~(o4)","~(o9)","~(lh)","Bz()"])
C.bYn.prototype={
$1(d){d.S($.dq(),y.L)
return d.S($.c0p(),y.C).Oe()},
$S:z+9}
C.bYi.prototype={
$1(d){return this.aAX(d)},
aAX(d){var x=0,w=A.m(y.m),v,u,t,s,r
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(d.S($.c0y().glJ(),y.ao),$async$$1)
case 3:u=f
t=J
s=u
r=C
x=4
return A.e(d.S($.co0().glJ(),y.U),$async$$1)
case 4:v=t.coy(s,new r.bYg(f),new C.bYh(u))
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+10}
C.bYg.prototype={
$1(d){var x=this.a
x=x==null?null:x.a
if(x==null)x="free"
return d.a===x},
$S:z+1}
C.bYh.prototype={
$0(){return J.ks(this.a)},
$S:z+11}
C.bYo.prototype={
$1(d){d.S($.dq(),y.L)
return d.S($.c0p(),y.C).Of()},
$S:z+12}
C.b6I.prototype={
$1(d){return C.cz1(A.aP(y.f.a(d),y.N,y.z))},
$S:z+13}
C.b6H.prototype={
$1(d){var x,w,v=A.aP(y.f.a(d),y.N,y.z),u=v.h(0,"id")
u=J.bg(u==null?"":u)
x=v.h(0,"room_id")
if(x!=null)J.bg(x)
x=v.h(0,"status")
x=J.bg(x==null?"draft":x)
w=v.h(0,"total_cents")
v=w==null?v.h(0,"amount_cents"):w
return new C.zZ(u,x,B.m.F(A.dI(v==null?0:v)))},
$S:z+14}
C.b6G.prototype={
$1(d){return A.aP(y.f.a(d),y.N,y.z)},
$S:357}
C.bZ0.prototype={
$1(d){return new C.M6(d.S($.du(),y.cx))},
$S:z+15}
C.bZ_.prototype={
$1(d){return this.aB3(d)},
aB3(d){var x=0,w=A.m(y.D),v,u,t,s,r,q,p
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:d.S($.dq(),y.L)
q=A
p=J
x=4
return A.e(d.S($.iX(),y.h).Gc(),$async$$1)
case 4:x=3
return A.e(q.jB(p.bM(f,new C.bYZ(d),y.as),!1,y.v),$async$$1)
case 3:u=f
t=A.c([],y.cR)
for(s=J.aJ(u);s.q();){r=s.gI()
if(r.b)t.push(r.a)}v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:312}
C.bYZ.prototype={
$1(d){return this.aB2(d)},
aB2(d){var x=0,w=A.m(y.v),v,u=this,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=A
s=d
x=3
return A.e(u.a.S($.iW().$1(d.a).glJ(),y.g),$async$$1)
case 3:v=new t.aus(s,f.iD(B.a0h))
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:1139}
C.b6E.prototype={
$1(d){return d.a===this.a},
$S:59}
C.b6F.prototype={
$1(d){return d.b},
$S:394}
C.bYY.prototype={
$1(d){return this.aB1(d)},
aB1(d){var x=0,w=A.m(y.s),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.i(function(a0,a1){if(a0===1)return A.j(a1,w)
for(;;)switch(x){case 0:d.S($.dq(),y.L)
x=3
return A.e(d.S($.c0A().glJ(),y.ch),$async$$1)
case 3:u=a1
t=d.S($.aBo(),y.j)
s=t.a_(new A.aI(Date.now(),0,!1))
r=y.N
q=J.bM(u,new C.bYX(),r)
p=A.J(q,q.$ti.i("aj.E"))
o=d.S($.coa(),y.A)
if(p.length===0){v=new C.qZ(t,s.b,s.a,B.DJ,D.a6D,D.a6E,B.a_p,B.cx)
x=1
break}q=s.b
n=s.a
x=4
return A.e(A.jB(A.c([o.Os(n,p,q),o.O6(p),o.O0(p)],y.a9),!1,y.K),$async$$1)
case 4:m=a1
l=J.aw(m)
k=y.W.a(l.h(m,0))
j=y.H.a(l.h(m,1))
i=y.E.a(l.h(m,2))
r=A.aS(r)
l=k.a
if(l==null)l=A.c([],y.Y)
h=l.length
g=0
for(;g<l.length;l.length===h||(0,A.H)(l),++g)r.B(0,l[g].b)
f=A.J(r,r.$ti.c)
x=5
return A.e(o.O9(f),$async$$1)
case 5:e=a1
v=new C.qZ(t,q,n,u,k,j,C.cJq(i),e)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+18}
C.bYX.prototype={
$1(d){return d.a},
$S:394}
C.bhv.prototype={
$1(d){return d==null?null:A.lW(J.bg(d))},
$S:165}
C.c_B.prototype={
$1(d){return d.f},
$S:z+2}
C.c_C.prototype={
$2(d,e){return d+e.Wz(this.a)},
$S:z+3}
C.c_H.prototype={
$1(d){return d.f&&d.w==null},
$S:z+2}
C.c_I.prototype={
$2(d,e){return d+e.Wz(this.a)},
$S:z+3}
C.bVP.prototype={
$2(d,e){var x=this.a,w=x.h(0,e)
w.toString
x=x.h(0,d)
x.toString
return B.m.bp(w,x)},
$S(){return this.b.i("w(0,0)")}}
C.bXw.prototype={
$1(d){return A.q(d.h(0,1))+","},
$S:79}
C.b71.prototype={
$0(){return B.bf},
$S:22}
C.b70.prototype={
$2(d,e){return this.a.ai9(this.b,"Could not load reports.",new C.b6Z(this.c))},
$S:100}
C.b6Z.prototype={
$0(){return this.a.br($.c0A())},
$S:0}
C.b7_.prototype={
$1(d){var x=this
if(J.f2(d))return x.a.akB(x.b,Q.O0,"No billing visibility","Reports cover rooms you own or where your role grants billing access.")
return x.a.b9G(x.b,x.c)},
$S:1141}
C.b6Y.prototype={
$0(){return B.bf},
$S:22}
C.b6X.prototype={
$2(d,e){return this.a.ai9(this.b,"Could not load report data.",new C.b6V(this.c))},
$S:100}
C.b6V.prototype={
$0(){return this.a.br($.c7S())},
$S:0}
C.b6W.prototype={
$1(d){var x=this.a,w=this.b
return A.a1(A.c([x.aNQ(w,d),B.R,x.aPn(w,d),B.R,x.bdo(w,d),B.R,x.aUl(w,this.c,d)],y.p),B.S,null,B.r,B.v,0,B.x)},
$S:z+19}
C.b6U.prototype={
$1(d){return this.aAJ(d)},
aAJ(d){var x=0,w=A.m(y.n),v,u=this,t,s,r,q
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:q=d.ga7(d)
x=q===D.F6?3:5
break
case 3:x=6
return A.e(C.c69(u.a,A.cb(2020,1,1,0,0),new A.aI(Date.now(),0,!1)),$async$$1)
case 6:t=f
if(t==null){x=1
break}s=t.a
r=t.b
u.b.X($.aBo().gce(),y.M).saV(new C.tN(D.F6,s,r))
x=4
break
case 5:u.b.X($.aBo().gce(),y.M).saV(new C.tN(q,null,null))
case 4:case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+20}
C.b6Q.prototype={
$2(d,e){return d+e},
$S:83}
C.b6R.prototype={
$0(){var x=this
return x.a.HZ(x.b,x.c,x.d)},
$S:0}
C.b6S.prototype={
$0(){var x=this
return x.a.QB(x.b,x.c,x.d)},
$S:0}
C.b6T.prototype={
$1(d){return'"'+A.d0(d,'"','""')+'"'},
$S:25}
C.b6N.prototype={
$2(d,e){return d+e},
$S:83}
C.b6P.prototype={
$2(d,e){var x,w="pw.1",v=null
A.an(w)
A.an(w)
A.an(w)
A.an(w)
x=E.u_(d,F.pw(v,v,v,v,v,v,v,v,v,G.eR,v,v,11,v,v,v,!0,v,v,v,v),v)
A.an(w)
A.an(w)
A.an(w)
return E.ce_(A.c([x,E.u_(e,F.pw(v,v,v,v,v,v,v,v,v,G.eR,v,v,11,v,G.tP,v,!0,v,v,v,v),v)],y.o),L.ahM,L.acK)},
$S:z+21}
C.b6O.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="pw.1",h=null,g="n/a"
A.an(i)
A.an(i)
A.an(i)
A.an(i)
A.an(i)
A.an(i)
x=E.K9(E.u_("CaseThread \u2014 Executive Summary",F.pw(h,h,h,h,h,h,h,h,h,G.eR,h,h,20,h,G.tP,h,!0,h,h,h,h),h),0,h,h)
A.an(i)
w=j.a
v=w.a.gk9()
u=j.b
t=B.o.a8(u.hm().j(0),0,16)
A.an(i)
A.an("pdf.1")
t=E.u_("Window: "+v+" \xb7 Generated "+t,F.pw(h,N.HX,h,h,h,h,h,h,h,G.eR,h,h,10,h,h,h,!0,h,h,h,h),h)
A.an(i)
v=E.Zf(h,16,h)
A.an(i)
s=E.K9(h,2,"Totals",h)
r=j.c
q=j.d
q=r.$2("Billable hours",q==null?g:C.BS(q))
p=j.e
p=r.$2("Unbilled hours",p==null?g:C.BS(p))
o=j.f
n=o==null
m=r.$2("Invoiced",n?g:C.bXv(o.a))
o=r.$2("Outstanding (draft + sent)",n?g:C.bXv(o.b))
l=r.$2("Storage used",C.c5P(j.r))
A.an(i)
k=E.Zf(h,16,h)
A.an(i)
k=A.c([x,t,v,s,q,p,m,o,l,k,E.K9(h,2,"Billable hours by room",h)],y.o)
l=j.w
o=C.c5w(l,u)
m=A.t(o).i("cR<1,2>")
m=A.rb(new A.cR(o,m),10,m.i("z.E"))
o=y.l
B.i.L(k,A.i3(m,new C.b6K(r,w),A.t(m).i("z.E"),o))
A.an(i)
k.push(E.Zf(h,16,h))
A.an(i)
k.push(E.K9(h,2,"Billable hours by member",h))
u=C.c5v(l,u)
l=A.t(u).i("cR<1,2>")
l=A.rb(new A.cR(u,l),10,l.i("z.E"))
B.i.L(k,A.i3(l,new C.b6L(r,w),A.t(l).i("z.E"),o))
A.an(i)
k.push(E.Zf(h,16,h))
A.an(i)
k.push(E.K9(h,2,"Case status",h))
B.i.L(k,new A.aa(B.DN,new C.b6M(r,w),y.b))
return E.c1o(k,L.zz)},
$S:z+22}
C.b6K.prototype={
$1(d){return this.a.$2(this.b.FB(d.a),C.BS(d.b))},
$S:z+4}
C.b6L.prototype={
$1(d){return this.a.$2(this.b.bsw(d.a),C.BS(d.b))},
$S:z+4}
C.b6M.prototype={
$1(d){return this.a.$2(C.cdN(d),""+J.el(this.b.d,new C.b6J(d)).gu(0))},
$S:z+23}
C.b6J.prototype={
$1(d){return d.f===this.a},
$S:59}
C.biC.prototype={
$1(d){var x=this,w=x.a,v=x.c
return A.e_(x.b,new C.biz(w,v,x.d,d),new C.biA(w,v),new C.biB(),!1,!0,!1)},
$S:z+24}
C.biz.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=r.d,m=A.d(o).ok,l=A.d(o).ax.a===B.p?B.bB:B.L,k=A.aW(R.CD,A.d(o).ax.a===B.p?B.B:B.D,q,q,28),j=m.w
j=j==null?q:j.cX(B.aT)
j=A.o(n.b+" plan",q,q,q,q,q,j,q,q,q)
x=n.c
x=x===0?"Free forever":"$"+B.m.ar(x/100,0)+"/month"
w=m.Q
if(w==null)w=q
else w=w.U(A.d(o).ax.a===B.p?B.B:B.D)
v=y.p
l=A.eZ(new A.V(B.aB,A.am(A.c([k,B.bo,A.aA(A.a1(A.c([j,A.o(x,q,q,q,q,q,w,q,q,q)],v),B.S,q,B.r,B.v,0,B.x),1,q)],v),B.y,q,B.r,B.v,0,q,q),q),l,q,q,q,B.a6)
w=m.at
k=w==null
if(k)j=q
else j=w.fM(A.d(o).ax.a===B.p?B.B:B.D,B.ao,1.5)
j=A.o("THIS MONTH",q,q,q,q,q,j,q,q,q)
x=p.TB(o,n,d,K.a8b,"Evidence storage",C.cJZ())
u=p.TB(o,n,d,K.a88,"AI analyses",C.c6g())
t=p.TB(o,n,d,K.a89,"Transcription minutes",C.c6g())
s=p.TB(o,n,d,K.a8a,"OSINT lookups",C.c6g())
if(k)k=q
else k=w.fM(A.d(o).ax.a===B.p?B.B:B.D,B.ao,1.5)
return A.ft(A.c([l,B.aY,j,B.R,x,u,t,s,B.aY,A.o("CASE LIMITS",q,q,q,q,q,k,q,q,q),B.R,p.alb(o,"Case rooms",n.d),p.alb(o,"Members per room",n.e),B.aY,p.b7O(o,r.c,n),B.aY,D.fh9],v),q,B.bv,q,B.a5,!1)},
$S:z+25}
C.biB.prototype={
$0(){return B.bf},
$S:22}
C.biA.prototype={
$2(d,e){return this.a.ari(this.b,"Could not load usage.")},
$S:100}
C.biE.prototype={
$0(){return B.bf},
$S:22}
C.biD.prototype={
$2(d,e){return this.a.ari(this.b,"Could not load your plan.")},
$S:100}
C.bix.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.biy.prototype={
$0(){var x=this
return x.a.Td(x.b,x.c,x.d)},
$S:0}
C.c_c.prototype={
$1(d){var x=this.a.a
return x},
$S:17}
C.brO.prototype={
$0(){this.a.r.ob(!0)},
$S:0}
C.brN.prototype={
$0(){var x,w,v,u,t=null,s=this.a,r=s.gmd(),q=r.y
switch(q==null?A.t(r).i("aM.T").a(q):q){case B.eI:s.r.ob(!1)
r.sp(B.el)
break
case B.el:q=s.gvZ()
x=q.y
w=!1
if((x==null?A.t(q).i("aM.T").a(x):x)!=null){x=s.gpG()
v=x.y
u=v==null
if((u?A.t(x).i("aM.T").a(v):v)!=null){w=q.y
if(w==null)w=A.t(q).i("aM.T").a(w)
w.toString
x=u?A.t(x).i("aM.T").a(v):v
x.toString
x=w.kE(x)}else x=w}else x=w
if(x)s.gpG().sp(t)
x=q.y
w=x==null
if((w?A.t(q).i("aM.T").a(x):x)!=null){if(w)x=A.t(q).i("aM.T").a(x)
x.toString
x=!s.RC(x)}else x=!1
if(x){q.sp(t)
s.gpG().sp(t)}else{q=s.gpG()
x=q.y
w=x==null
if((w?A.t(q).i("aM.T").a(x):x)!=null){if(w)x=A.t(q).i("aM.T").a(x)
x.toString
x=!s.RC(x)
s=x}else s=!1
if(s)q.sp(t)}r.sp(B.eI)
break
case B.ni:case B.l4:break}},
$S:0}
C.brP.prototype={
$0(){var x=this.b
this.a.gvZ().sp(x)
return x},
$S:0}
C.brM.prototype={
$0(){var x=this.b
this.a.gpG().sp(x)
return x},
$S:0}
C.brQ.prototype={
$1(d){return this.a.a},
$S:17}
C.bnn.prototype={
$0(){this.a.y=!1},
$S:0}
C.bno.prototype={
$0(){this.a.y=!0},
$S:0}
C.bnp.prototype={
$0(){var x,w=this.a,v=w.f
v=v!=null&&w.r==null&&!this.b.jo(v)
x=this.b
if(v){w.r=x
w.a.y.$1(x)}else{w.f=x
w.a.x.$1(x)
if(w.r!=null){w.r=null
w.a.y.$1(null)}}},
$S:0}
C.bnq.prototype={
$2(d,e){return this.a.afE(d,e,!0)},
$S:52}
C.bnr.prototype={
$2(d,e){return this.a.afE(d,e,!1)},
$S:52}
C.bnt.prototype={
$0(){if(this.b){var x=this.a
if(x.w==null)x.w=x.a.f}},
$S:0}
C.bns.prototype={
$0(){var x,w,v=this.a,u=v.w
u.toString
x=this.b.a
w=v.b3T(u,x)
if(w!=null){v.w=w
v.r=x}},
$S:0}
C.brX.prototype={
$1$1(d,e){var x=d.$1(this.a)
return x==null?d.$1(this.b):x},
$1(d){return this.$1$1(d,y.z)},
$S:177}
C.brY.prototype={
$1$2(d,e,f){return this.a.$1$1(new C.brZ(d,e,f),f)},
$2(d,e){return this.$1$2(d,e,y.z)},
$S:178}
C.brZ.prototype={
$1(d){var x=this.a.$1(d)
return x==null?null:x.a_(this.b)},
$S(){return this.c.i("0?(j4?)")}}
C.brS.prototype={
$1(d){var x=d.gDX()
return x},
$S:109}
C.brT.prototype={
$1(d){var x=d.gzN()
return x},
$S:109}
C.brW.prototype={
$1(d){return this.b.$1$1(new C.brR(this.a,d),y.G)},
$S:20}
C.brR.prototype={
$1(d){var x,w=null
if(this.a.a.Q){x=d.gMW()
w=x==null?null:x.a_(this.b)}else{x=d.gDY()
w=x==null?null:x.a_(this.b)}return w},
$S:157}
C.brU.prototype={
$1(d){return d.ax},
$S:180}
C.brV.prototype={
$0(){var x=this.a.a
return x.rQ(x.c)},
$S:0}
C.bBR.prototype={
$2(d,e){var x=this,w=Math.min(x.c.b,270),v=A.c([],y.p)
if(e.d>=w)v.push(x.d)
v.push(A.aA(x.a.f,1,null))
v.push(x.e)
return A.a1(v,B.b4,null,B.r,B.W,0,B.x)},
$S:1142}
C.bBU.prototype={
$0(){var x=this.b
x.y=this.a.a
x.z=this.c},
$S:0}
C.bBT.prototype={
$0(){var x=this.a,w=this.b
x.d=w
w=x.amp(w)
x.f=w
x.a.r.$1(w)},
$S:0}
C.bBS.prototype={
$0(){var x=this.a,w=this.b
x.e=w
w=x.amp(w)
x.r=w
x.a.w.$1(w)},
$S:0}
C.bTR.prototype={
$2(d,e){if(!d.a)d.P(e)},
$S:48};(function aliases(){var x=C.a7h.prototype
x.aKe=x.l})();(function installTearOffs(){var x=a._static_0,w=a._instance_0u,v=a._instance_1u,u=a._static_1
x(C,"cIU","cBT",30)
w(C.Bz.prototype,"gji","dk",16)
v(C.qZ.prototype,"guO","FB",17)
u(C,"cJZ","czs",8)
u(C,"c6g","czt",8)
var t
w(t=C.a1p.prototype,"gRi","a2Q",0)
w(t,"gRb","a2w",0)
w(t,"gIi","a2K",0)
v(t,"gak6","b0d",5)
v(t,"gajM","aY4",5)
w(t=C.a0y.prototype,"gbb0","bb1",0)
v(t,"gbfT","bfU",26)
v(t=C.a0A.prototype,"gaYv","aYw",6)
v(t,"gaYx","aYy",27)
v(t,"gaYz","aYA",28)
v(t,"gaXI","aXJ",29)
v(C.a3q.prototype,"gaRE","aRF",6)
v(t=C.OW.prototype,"gb0b","b0c",7)
v(t,"gaY2","aY3",7)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.ca,[C.bYn,C.bYi,C.bYg,C.bYo,C.b6I,C.b6H,C.b6G,C.bZ0,C.bZ_,C.bYZ,C.b6E,C.b6F,C.bYY,C.bYX,C.bhv,C.c_B,C.c_H,C.bXw,C.b7_,C.b6W,C.b6U,C.b6T,C.b6O,C.b6K,C.b6L,C.b6M,C.b6J,C.biC,C.biz,C.bix,C.c_c,C.brQ,C.brX,C.brY,C.brZ,C.brS,C.brT,C.brW,C.brR,C.brU])
w(A.dd,[C.bYh,C.b71,C.b6Z,C.b6Y,C.b6V,C.b6R,C.b6S,C.biB,C.biE,C.biy,C.brO,C.brN,C.brP,C.brM,C.bnn,C.bno,C.bnp,C.bnt,C.bns,C.brV,C.bBU,C.bBT,C.bBS])
w(A.C,[C.M6,C.qZ,C.tN,C.pA,C.zZ,C.tV])
v(C.Bz,A.eU)
w(A.hs,[C.r_,C.OQ])
w(A.dj,[C.c_C,C.c_I,C.bVP,C.b70,C.b6X,C.b6Q,C.b6N,C.b6P,C.biA,C.biD,C.bnq,C.bnr,C.bBR,C.bTR])
w(A.i_,[C.aiZ,C.Gs])
w(A.N,[C.SZ,C.a0x,C.a0z,C.a3p,C.a1s,C.a34])
w(A.Y,[C.a7h,C.a0y,C.a0A,C.a3q,C.ap9,C.OW])
v(C.a1p,C.a7h)
w(A.a4,[C.anK,C.ap8,C.arq,C.ahH])
v(C.a2q,A.bC)
v(C.bEE,A.akk)
v(C.bEI,A.akm)
v(C.a2P,A.y9)
v(C.abM,A.YE)
x(C.a7h,A.kf)})()
A.cD(b.typeUniverse,JSON.parse('{"Bz":{"eU":["tN"]},"aiZ":{"N":[],"f":[]},"Gs":{"N":[],"f":[]},"SZ":{"N":[],"f":[]},"a0x":{"N":[],"f":[]},"a0z":{"N":[],"f":[]},"a2q":{"bC":[],"bs":[],"f":[]},"a3p":{"N":[],"f":[]},"a1s":{"N":[],"f":[]},"a34":{"N":[],"f":[]},"OW":{"Y":["a34"]},"a1p":{"Y":["SZ"]},"anK":{"a4":[],"f":[]},"a0y":{"Y":["a0x"]},"a0A":{"Y":["a0z"]},"ap8":{"a4":[],"f":[]},"a3q":{"Y":["a3p"]},"ap9":{"Y":["a1s"]},"a2P":{"aE":[]},"arq":{"a4":[],"f":[]},"ahH":{"a4":[],"F5":[],"f":[]},"abM":{"a4":[],"f":[]}}'))
var y=(function rtii(){var x=A.I
return{V:x("cf<c2>"),Z:x("aR<v<ev>>"),X:x("aR<v<fu>>"),u:x("aR<fu>"),a:x("aR<qZ>"),F:x("aR<u3>"),L:x("aR<fM?>"),C:x("Cq"),R:x("hX<r_>"),c:x("dP<lh>"),d:x("dP<o4>"),e:x("dP<o9>"),G:x("O"),x:x("c9F"),T:x("Ji<aI>"),I:x("jz"),J:x("eP"),ch:x("M<v<ev>>"),ao:x("M<v<fu>>"),as:x("M<+room,visible(ev,B)>"),g:x("M<fU>"),U:x("M<Ay?>"),cN:x("qy"),cR:x("x<ev>"),a9:x("x<M<C>>"),Y:x("x<pA>"),p:x("x<f>"),o:x("x<eB>"),S:x("x<nf>"),k:x("x<~(cf<c2>)>"),B:x("bq<Y<N>>"),t:x("bq<OW>"),D:x("v<ev>"),E:x("v<ac<h,@>>"),aH:x("v<w>"),aN:x("ac<h,h>"),P:x("ac<h,@>"),f:x("ac<@,@>"),b:x("aa<qy,eB>"),y:x("zf"),w:x("i4"),K:x("C"),bc:x("c4<~(cf<c2>)>"),m:x("fu"),v:x("+room,visible(ev,B)"),s:x("qZ"),aa:x("zZ"),j:x("tN"),af:x("r_"),A:x("M6"),bw:x("fd<C?>"),h:x("Fu"),N:x("h"),cx:x("fY"),H:x("tV<v<zZ>>"),W:x("tV<v<pA>>"),cn:x("pA"),bv:x("jj"),O:x("K<h>"),l:x("eB"),cD:x("dp"),Q:x("a2q"),M:x("Bz"),q:x("h_"),cS:x("b8<O?>"),i:x("Z"),z:x("@"),r:x("w"),_:x("O?"),aQ:x("Ji<aI>?"),b8:x("fl?"),n:x("~"),aI:x("~()")}})();(function constants(){var x=a.makeConstList
D.If=new C.bEE()
D.aiB=new A.yf(0,null,null,null,null,null,null)
D.ajp=new A.ag(0,0,0,3)
D.e0i=new A.af(62537,"MaterialIcons",null,!1)
D.e24=new A.aG(B.Cz,null,null,null,null)
D.e2l=new A.aG(B.O4,null,null,null,null)
D.eVi=x([],A.I("x<ac<h,@>>"))
D.eVj=x([],A.I("x<fu>"))
D.x_=x([],A.I("x<zZ>"))
D.rj=x([],y.Y)
D.fh6=new C.r_(0,"thisWeek")
D.fts=new A.a0("Week",null,null,null,null,null,null,null,null,null,null)
D.acg=new H.hX(D.fh6,null,D.fts,y.R)
D.a4T=new C.r_(1,"thisMonth")
D.fs1=new A.a0("Month",null,null,null,null,null,null,null,null,null,null)
D.acd=new H.hX(D.a4T,null,D.fs1,y.R)
D.fh7=new C.r_(2,"last30Days")
D.fr2=new A.a0("30 days",null,null,null,null,null,null,null,null,null,null)
D.ack=new H.hX(D.fh7,null,D.fr2,y.R)
D.F6=new C.r_(3,"custom")
D.frQ=new A.a0("Custom",null,null,null,null,null,null,null,null,null,null)
D.ach=new H.hX(D.F6,null,D.frQ,y.R)
D.eYi=x([D.acg,D.acd,D.ack,D.ach],A.I("x<hX<r_>>"))
D.fh8=new C.tN(D.a4T,null,null)
D.fh9=new C.aiZ(null)
D.fjr=new A.R(1/0,64)
D.fjL=new A.R(496,164)
D.fqK=new A.a0("To move back to Free, cancel your subscription from your receipt email \u2014 we\u2019ll handle the rest.",null,null,null,null,null,null,null,null,null,null)
D.fkn=new A.d8(D.fqK,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.C,null)
D.a6E=new C.tV(D.x_,!1,y.H)
D.a6D=new C.tV(D.rj,!1,y.W)
D.flR=new C.tV(null,!0,y.H)
D.flS=new C.tV(null,!0,y.W)
D.frA=new A.a0("Export PDF",null,null,null,null,null,null,null,null,null,null)
D.fss=new A.a0("Export CSV",null,null,null,null,null,null,null,null,null,null)
D.fy4=new A.K("reports-export-csv",y.O)
D.fy3=new A.K("reports-export-pdf",y.O)
D.fyh=new A.K("reports-period-selector",y.O)
D.fAv=new A.K("reports-section",y.O)
D.fCr=new C.ap8(null)
D.fCY=new C.OQ(0,"none")
D.a8S=new C.OQ(1,"highlightLeading")
D.GJ=new C.OQ(2,"highlightTrailing")
D.a8T=new C.OQ(3,"highlightAll")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cSN","co0",()=>A.lk(new C.bYn(),A.I("Ay?")))
x($,"cSJ","cnZ",()=>A.lk(new C.bYi(),y.m))
x($,"cSO","co1",()=>A.lk(new C.bYo(),A.I("u3")))
x($,"cTe","coa",()=>A.eg(new C.bZ0(),y.A))
x($,"cTd","c0A",()=>A.lk(new C.bZ_(),y.D))
x($,"cTc","aBo",()=>A.p9(C.cIU(),y.M,y.j))
x($,"cTb","c7S",()=>A.lk(new C.bYY(),y.s))})()};
(a=>{a["kQcHMMHa6MwPluDWcfaWJffySxk="]=a.current})($__dart_deferred_initializers__);