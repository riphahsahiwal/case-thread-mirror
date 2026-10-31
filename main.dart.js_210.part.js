((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,M,E,L,N,O,P,Q,R,C={bYe:function bYe(){},bY9:function bY9(){},bY7:function bY7(d){this.a=d},bY8:function bY8(d){this.a=d},bYf:function bYf(){},
cBI(){return new C.Bz()},
M6:function M6(d){this.a=d},
b6B:function b6B(){},
b6A:function b6A(){},
b6z:function b6z(){},
bYS:function bYS(){},
bYR:function bYR(){},
bYQ:function bYQ(d){this.a=d},
Bz:function Bz(){this.b=null},
qY:function qY(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
b6x:function b6x(d){this.a=d},
b6y:function b6y(){},
bYP:function bYP(){},
bYO:function bYO(){},
cdC(d){return""+A.b6(d)+"-"+B.o.cC(B.f.j(A.bk(d)),2,"0")+"-"+B.o.cC(B.f.j(A.c_(d)),2,"0")},
cyR(d){var x,w,v,u,t=new C.bho(),s=d.h(0,"room_id")
s=J.bg(s==null?"":s)
x=d.h(0,"user_id")
x=J.bg(x==null?"":x)
w=d.h(0,"description")
J.bg(w==null?"":w)
w=t.$1(d.h(0,"started_at"))
if(w==null)w=new A.aH(Date.now(),0,!1)
t=t.$1(d.h(0,"ended_at"))
v=J.p(d.h(0,"billable"),!1)
A.dB(d.h(0,"hourly_rate"))
u=d.h(0,"invoice_id")
u=u==null?null:J.bg(u)
return new C.pA(s,x,w,t,!v,u)},
c5n(d,e){var x,w,v,u,t,s=y.N,r=y.i,q=A.D(s,r)
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.H)(d),++w){v=d[w]
if(!v.f)continue
u=v.a
t=q.h(0,u)
if(t==null)t=0
q.m(0,u,t+v.Ww(e))}return C.c5d(q,s,r)},
c5m(d,e){var x,w,v,u,t,s=y.N,r=y.i,q=A.D(s,r)
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.H)(d),++w){v=d[w]
if(!v.f)continue
u=v.b
t=q.h(0,u)
if(t==null)t=0
q.m(0,u,t+v.Ww(e))}return C.c5d(q,s,r)},
c65(d,e){return new A.ak(d,new C.c_s(),A.a6(d).i("ak<1>")).jm(0,0,new C.c_t(e))},
cjT(d,e){return new A.ak(d,new C.c_y(),A.a6(d).i("ak<1>")).jm(0,0,new C.c_z(e))},
c62(d){var x,w,v,u,t,s,r,q
for(x=d.length,w=0,v=0,u=0;u<x;++u){t=d[u]
s=t.c
r=s.toLowerCase()
if(r==="void"||r==="cancelled"||r==="canceled")continue
q=t.d
w+=q
r=s.toLowerCase()
if(r==="draft"||r==="sent")v+=q}return new A.auk(w,v)},
cJf(d){var x,w,v,u,t=y.N,s=y.r,r=A.D(t,s)
for(x=J.aI(d);x.q();){w=x.gI()
v=w.h(0,"room_id")
u=v==null?null:J.bg(v)
if(u==null||u.length===0)continue
v=r.h(0,u)
if(v==null)v=0
w=A.dB(w.h(0,"file_size_bytes"))
w=w==null?null:B.m.F(w)
r.m(0,u,v+(w==null?0:w))}return C.c5d(r,t,s)},
c5d(d,e,f){var x,w,v,u,t=A.t(d).i("bD<1>"),s=A.J(new A.bD(d,t),t.i("z.E"))
B.i.eA(s,new C.bVI(d,e))
t=A.D(e,f)
for(x=s.length,w=0;w<s.length;s.length===x||(0,A.H)(s),++w){v=s[w]
u=d.h(0,v)
t.m(0,v,u==null?f.a(u):u)}return t},
BS(d){var x=B.m.aM(d*10)/10
return x===(x<0?Math.ceil(x):Math.floor(x))?""+B.m.F(x)+" h":B.m.ar(x,1)+" h"},
bXn(d){var x=Math.abs(d),w=B.f.ap(x,100),v=B.o.cC(B.f.j(B.f.aK(x,100)),2,"0"),u=A.aAK(B.f.j(w),A.ck("(\\d)(?=(\\d{3})+(?!\\d))",!0,!1),new C.bXo(),null)
return(d<0?"-":"")+"$"+u+"."+v},
c5G(d){if(d>=1073741824)return B.m.ar(d/1073741824,1)+" GB"
if(d>=1048576)return B.m.ar(d/1048576,0)+" MB"
if(d>=1024)return B.m.ar(d/1024,0)+" KB"
return""+d+" B"},
qZ:function qZ(d,e){this.a=d
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
bho:function bho(){},
zZ:function zZ(d,e,f){this.a=d
this.c=e
this.d=f},
tV:function tV(d,e,f){this.a=d
this.b=e
this.$ti=f},
c_s:function c_s(){},
c_t:function c_t(d){this.a=d},
c_y:function c_y(){},
c_z:function c_z(d){this.a=d},
bVI:function bVI(d,e){this.a=d
this.b=e},
bXo:function bXo(){},
cdD(d){var x
switch(d.a){case 0:x="Open"
break
case 1:x="Under investigation"
break
case 2:x="In review"
break
case 3:x="Closed"
break
default:x=null}return x},
aiX:function aiX(d){this.a=d},
b6V:function b6V(){},
b6U:function b6U(d,e,f){this.a=d
this.b=e
this.c=f},
b6S:function b6S(d){this.a=d},
b6T:function b6T(d,e,f){this.a=d
this.b=e
this.c=f},
b6R:function b6R(){},
b6Q:function b6Q(d,e,f){this.a=d
this.b=e
this.c=f},
b6O:function b6O(d){this.a=d},
b6P:function b6P(d,e,f){this.a=d
this.b=e
this.c=f},
b6N:function b6N(d,e){this.a=d
this.b=e},
b6J:function b6J(){},
b6K:function b6K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b6L:function b6L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b6M:function b6M(){},
b6G:function b6G(){},
b6I:function b6I(){},
b6H:function b6H(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
b6D:function b6D(d,e){this.a=d
this.b=e},
b6E:function b6E(d,e){this.a=d
this.b=e},
b6F:function b6F(d,e){this.a=d
this.b=e},
b6C:function b6C(d){this.a=d},
cfd(){return new C.Gs(null)},
czh(d){if(d>=1073741824)return B.m.ar(d/1073741824,1)+" GB"
if(d>=1048576)return B.m.ar(d/1048576,0)+" MB"
if(d>=1024)return B.m.ar(d/1024,0)+" KB"
return B.m.ar(d,0)+" B"},
czi(d){var x=B.m.F(d)
return d===x?""+x:B.m.ar(d,1)},
Gs:function Gs(d){this.a=d},
biv:function biv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bis:function bis(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
biu:function biu(){},
bit:function bit(d,e){this.a=d
this.b=e},
bix:function bix(){},
biw:function biw(d,e){this.a=d
this.b=e},
biq:function biq(d){this.a=d},
bir:function bir(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c60(d,e,f){return C.cJ5(d,e,f)},
cJ5(d,e,f){var x=0,w=A.m(y.aQ),v,u,t
var $async$c60=A.i(function(g,h){if(g===1)return A.j(h,w)
for(;;)switch(x){case 0:t={}
e=A.cb(A.b6(e),A.bk(e),A.c_(e),0,0)
f=A.cb(A.b6(f),A.bk(f),A.c_(f),0,0)
u=new A.aH(Date.now(),0,!1)
t.a=new C.SY(null,e,f,A.cb(A.b6(u),A.bk(u),A.c_(u),0,0),B.eI,null,null,null,null,null,null,null,null,null,null,null,B.lk,null,null,null,B.I0,null)
v=A.cU(null,null,!0,null,new C.c_3(t,null),d,null,!0,!1,y.T)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$c60,w)},
chs(d,e,f,g){var x
if(f==null)x="Start Date"
else x=g==null||A.b6(f)===A.b6(g)?d.avI(f):d.avH(f)
return x},
chr(d,e,f,g,h){var x
if(g==null)x="End Date"
else x=f!=null&&A.b6(f)===A.b6(g)&&A.b6(f)===A.b6(h)?d.avI(g):d.avH(g)
return x},
c_3:function c_3(d,e){this.a=d
this.b=e},
SY:function SY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){var _=this
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
brH:function brH(d){this.a=d},
brG:function brG(d){this.a=d},
brI:function brI(d,e){this.a=d
this.b=e},
brF:function brF(d,e){this.a=d
this.b=e},
brJ:function brJ(d){this.a=d},
anI:function anI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bng:function bng(d){this.a=d},
bnh:function bnh(d){this.a=d},
bni:function bni(d,e){this.a=d
this.b=e},
bnj:function bnj(d){this.a=d},
bnk:function bnk(d){this.a=d},
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
bnm:function bnm(d,e){this.a=d
this.b=e},
bnl:function bnl(d,e){this.a=d
this.b=e},
a2q:function a2q(d,e,f,g,h){var _=this
_.f=d
_.r=e
_.w=f
_.b=g
_.a=h},
ap6:function ap6(d){this.a=d},
bEx:function bEx(){},
bEB:function bEB(d,e,f,g){var _=this
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
ap7:function ap7(d){this.d=d
this.c=this.a=null},
brQ:function brQ(d,e){this.a=d
this.b=e},
brR:function brR(d){this.a=d},
brS:function brS(d,e,f){this.a=d
this.b=e
this.c=f},
brL:function brL(){},
brM:function brM(){},
brP:function brP(d,e){this.a=d
this.b=e},
brK:function brK(d,e){this.a=d
this.b=e},
brN:function brN(){},
brO:function brO(d){this.a=d},
OP:function OP(d,e){this.a=d
this.b=e},
a2P:function a2P(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aro:function aro(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bBK:function bBK(d,e,f,g,h){var _=this
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
OV:function OV(){var _=this
_.e=_.d=$
_.r=_.f=null
_.x=_.w=$
_.z=_.y=null
_.Q=!1
_.c=_.a=null},
bBN:function bBN(d,e,f){this.a=d
this.b=e
this.c=f},
bBM:function bBM(d,e){this.a=d
this.b=e},
bBL:function bBL(d,e){this.a=d
this.b=e},
bTK:function bTK(){},
a7h:function a7h(){},
ahF:function ahF(d,e,f){this.c=d
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
ceh(d,e,f){return new A.Zm(new A.FZ(d,e,!0,!0,!0,0,A.bZI(),null),f)}},D,H,I,S,K
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
Os(d,e,f){return this.aCi(d,e,f)},
aCi(d,e,f){var x=0,w=A.m(y.W),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Os=A.i(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(e.length===0){v=D.a6B
x=1
break}u=4
p=s.a.aA("time_entries").bo("room_id, user_id, description, started_at, ended_at, billable, hourly_rate, invoice_id, created_at").qa("room_id",e)
x=7
return A.e(A.ja(p.h6(p.h9("started_at","lt."+d.cY())),p.$ti.c).aa6("ended_at.is.null,ended_at.gte."+f.cY()).fB("started_at",!1),$async$Os)
case 7:r=h
p=J.bL(r,new C.b6B(),y.cn)
p=A.J(p,p.$ti.i("ai.E"))
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
if(p instanceof A.qQ&&p.b==="42P01"){v=D.flN
x=1
break}throw n
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Os,w)},
O6(d){return this.aBF(d)},
aBF(d){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$O6=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=D.a6C
x=1
break}u=4
x=7
return A.e(s.a.aA("invoices").tc().qa("room_id",d).fB("created_at",!1),$async$O6)
case 7:r=f
p=J.bL(r,new C.b6A(),y.aa)
p=A.J(p,p.$ti.i("ai.E"))
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
if(p instanceof A.qQ&&p.b==="42P01"){v=D.flM
x=1
break}throw n
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$O6,w)},
O0(d){return this.aBw(d)},
aBw(d){var x=0,w=A.m(y.E),v,u=this,t,s
var $async$O0=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:if(d.length===0){v=D.eVf
x=1
break}s=J
x=3
return A.e(u.a.aA("evidence_items").bo("room_id, file_size_bytes").qa("room_id",d),$async$O0)
case 3:t=s.bL(f,new C.b6z(),y.P)
t=A.J(t,t.$ti.i("ai.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$O0,w)},
O9(d){return this.aBL(d)},
aBL(d){var x=0,w=A.m(y.aN),v,u=this,t,s,r,q,p,o,n
var $async$O9=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:if(d.length===0){v=B.cx
x=1
break}t=y.N
t=A.D(t,t)
n=J
x=3
return A.e(u.a.aA("profiles").bo("id, display_name").qa("id",d),$async$O9)
case 3:s=n.aI(f),r=y.f
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
dk(){return D.fh4}}
C.qY.prototype={
FC(d){var x=J.el(this.d,new C.b6x(d))
x=A.im(new A.dG(x,new C.b6y(),x.$ti.i("dG<1,h>")))
return x==null?"Room":x},
bsr(d){var x=this.w.h(0,d)
return x==null?"Member":x}}
C.qZ.prototype={
H(){return"ReportPeriodPreset."+this.b}}
C.tN.prototype={
a_(d){var x,w,v,u
switch(this.a.a){case 0:x=A.cb(A.b6(d),A.bk(d),A.c_(d),0,0).kp(0-A.e2(A.ahI(d)-1,0,0,0,0).a)
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
x=C.cdC(x)
w=this.c
w.toString
w=x+" \u2013 "+C.cdC(w)
x=w
break
default:x=null}return x},
k(d,e){if(e==null)return!1
return e instanceof C.tN&&e.a===this.a&&J.p(e.b,this.b)&&J.p(e.c,this.c)},
gt(d){return A.a8(this.a,this.b,this.c,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b)}}
C.pA.prototype={
Ww(d){var x,w=this.e
if(w==null)w=d
x=B.f.ap(w.eB(this.d).a,1e6)
return x<=0?0:x/3600}}
C.zZ.prototype={
gbG(){return this.a}}
C.tV.prototype={}
C.aiX.prototype={
cq(d,e){var x=null,w=e.T($.c0r(),y.Z),v=A.d(d).ok.at
if(v==null)v=x
else v=v.fM(A.d(d).ax.a===B.p?B.B:B.D,B.ao,1.5)
return A.a2(A.c([A.o("REPORTS",x,x,x,x,x,v,x,x,x),B.R,A.ec(w,new C.b6T(this,d,e),new C.b6U(this,d,e),new C.b6V(),!1,!0,!1)],y.p),B.S,D.fAp,B.r,B.v,0,B.x)},
b9D(d,e){var x=e.T($.c7I(),y.a)
return A.a2(A.c([this.b7z(d,e),B.R,A.ec(x,new C.b6P(this,d,e),new C.b6Q(this,d,e),new C.b6R(),!1,!0,!1)],y.p),B.S,null,B.r,B.v,0,B.x)},
b7z(d,e){var x,w,v=null,u=e.T($.aBm(),y.j),t=y.af
t=H.b9y(D.fyb,new C.b6N(d,e),D.eYf,A.dh([u.a],t),t)
x=u.gk9()
w=A.d(d).ok.Q
if(w==null)w=v
else w=w.V(A.d(d).ax.a===B.p?B.B:B.D)
return A.a2(A.c([t,B.bV,A.o("Window: "+x,v,v,v,v,v,w,v,v,v)],y.p),B.S,v,B.r,B.v,0,B.x)},
aNO(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.d(d).ok,f=e.e
if(f.b)return i.aky(d,D.e0h,"Time tracking data unavailable","The time-tracking module is not enabled on this workspace yet. Billable-hours reporting appears once it ships.")
x=f.a
if(x==null)x=D.rj
w=new A.aH(Date.now(),0,!1)
v=C.c65(x,w)
u=C.cjT(x,w)
t=C.c5n(x,w)
s=C.c5m(x,w)
r=g.at
if(r==null)r=h
else r=r.fM(A.d(d).ax.a===B.p?B.B:B.D,B.ao,1.2)
r=A.o("BILLABLE HOURS",h,h,h,h,h,r,h,h,h)
q=C.BS(v)
p=g.f
q=A.o(q,h,h,h,h,h,p==null?h:p.d5(B.ao),h,h,h)
p=e.a.gk9()
o=g.Q
n=o==null
if(n)m=h
else m=o.V(A.d(d).ax.a===B.p?B.B:B.D)
l=y.p
m=A.an(A.c([q,B.b8,new A.W(D.ajo,A.o("billable \xb7 "+p.toLowerCase(),h,h,h,h,h,m,h,h,h),h)],l),B.fc,h,B.r,B.v,0,h,h)
q=u>0
if(q)p=A.d(d).ax.fy
else p=A.d(d).ax.a===B.p?B.B:B.D
p=A.aW(B.qR,p,h,h,16)
k=q?C.BS(u)+" unbilled":"Everything is invoiced"
if(n)q=h
else{if(q)j=A.d(d).ax.fy
else j=A.d(d).ax.a===B.p?B.B:B.D
j=o.e0(j,q?B.aT:h)
q=j}q=A.c([r,B.ai,m,B.ai,A.an(A.c([p,B.li,A.aD(A.o(k,h,h,h,h,h,q,h,h,h),1,h)],l),B.y,h,B.r,B.v,0,h,h)],l)
if(t.a!==0){r=A.c([B.R,i.apm(d,"By room")],l)
for(p=A.t(t).i("cR<1,2>"),p=A.ra(new A.cR(t,p),5,p.i("z.E")),p=new A.AA(J.aI(p.a),p.b,A.t(p).i("AA<1>"));p.q();){m=p.gI()
r.push(i.a3e(d,e.FC(m.a),C.BS(m.b)))}B.i.L(q,r)}if(s.a!==0){r=A.c([B.R,i.apm(d,"By member")],l)
for(p=A.t(s).i("cR<1,2>"),p=A.ra(new A.cR(s,p),5,p.i("z.E")),p=new A.AA(J.aI(p.a),p.b,A.t(p).i("AA<1>")),m=e.w;p.q();){l=p.gI()
k=m.h(0,l.a)
if(k==null)k="Member"
r.push(i.a3e(d,k,C.BS(l.b)))}B.i.L(q,r)}if(x.length===0){if(n)r=h
else r=o.V(A.d(d).ax.a===B.p?B.B:B.D)
q.push(new A.W(O.qA,A.o("No time entries in this window.",h,h,h,h,h,r,h,h,h),h))}r=A.a2(q,B.S,h,B.r,B.v,0,B.x)
q=A.d(d).ax.a===B.p?B.bB:B.L
return A.f4(new A.W(B.aB,r,h),q,h,h,h,B.a6)},
aPl(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=A.d(d).ok,m=A.D(y.cN,y.r)
for(x=0;x<4;++x)m.m(0,B.DN[x],0)
for(w=J.aI(e.d);w.q();){v=w.gI().f
u=m.h(0,v)
m.m(0,v,(u==null?0:u)+1)}w=n.at
if(w==null)w=o
else w=w.fM(A.d(d).ax.a===B.p?B.B:B.D,B.ao,1.2)
w=A.o("CASE STATUS OVERVIEW",o,o,o,o,o,w,o,o,o)
v=y.p
u=A.c([],v)
for(t=n.Q,x=0;x<4;++x){s=B.DN[x]
r=C.cdD(s)
q=m.h(0,s)
p=t==null?o:t.d5(B.cv)
p=A.o(r+" \xb7 "+A.q(q),o,o,o,o,o,p,o,o,o)
r=A.d(d).ax.a===B.p?B.cN:B.cO
u.push(P.rQ(o,r,p,new A.b_(A.d(d).ax.a===B.p?B.az:B.cu,1,B.O,-1),B.bG))}m=A.a2(A.c([w,B.ai,A.hD(u,B.cG,8,8)],v),B.S,o,B.r,B.v,0,B.x)
w=A.d(d).ax.a===B.p?B.bB:B.L
return A.f4(new A.W(B.aB,m,o),w,o,o,o,B.a6)},
bdl(d,e){var x,w,v=null,u=A.d(d).ok,t=e.r,s=u.at
if(s==null)s=v
else s=s.fM(A.d(d).ax.a===B.p?B.B:B.D,B.ao,1.2)
s=A.c([A.o("STORAGE BY ROOM",v,v,v,v,v,s,v,v,v),B.ai],y.p)
if(t.gW(t)){x=u.Q
if(x==null)x=v
else x=x.V(A.d(d).ax.a===B.p?B.B:B.D)
s.push(A.o("No evidence files stored yet.",v,v,v,v,v,x,v,v,v))}else for(x=t.geD(),x=x.mY(x,8),x=x.gU(x);x.q();){w=x.gI()
s.push(this.a3e(d,e.FC(w.a),C.c5G(w.b)))}s=A.a2(s,B.S,v,B.r,B.v,0,B.x)
x=A.d(d).ax.a===B.p?B.bB:B.L
return A.f4(new A.W(B.aB,s,v),x,v,v,v,B.a6)},
aUi(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.d(d).ok,m=Date.now(),l=f.e,k=l.a
if(k==null)k=D.rj
x=l.b?o:C.c65(k,new A.aH(m,0,!1))
m=f.f
l=m.b
if(l)w=o
else{m=m.a
w=C.c62(m==null?D.x_:m)}m=f.r.gey()
v=m.jm(m,0,new C.b6J())
m=n.at
if(m==null)m=o
else m=m.fM(A.d(d).ax.a===B.p?B.B:B.D,B.ao,1.2)
m=A.o("EXECUTIVE SUMMARY",o,o,o,o,o,m,o,o,o)
u=p.a4Y(d,"Billable hours",x==null?"\u2014":C.BS(x))
t=w==null
s=p.a4Y(d,"Invoiced",t?"\u2014":C.bXn(w.a))
r=t?"\u2014":C.bXn(w.b)
q=y.p
r=A.c([m,B.ai,A.c22(2.2,A.c([u,s,p.api(d,"Outstanding",r,!t&&w.b>0),p.a4Y(d,"Storage used",C.c5G(v))],q),2,8,8,B.xw,!0)],q)
if(l){m=n.Q
if(m==null)m=o
else m=m.V(A.d(d).ax.a===B.p?B.B:B.D)
r.push(new A.W(B.el,A.o("Invoicing module not enabled yet \u2014 invoiced / outstanding are unavailable.",o,o,o,o,o,m,o,o,o),o))}r.push(B.R)
r.push(A.an(A.c([A.aD(A.i7(D.e21,D.fxY,D.frv,new C.b6K(p,d,e,f),o),1,o),B.br,A.aD(A.i7(D.e2i,D.fxZ,D.fsn,new C.b6L(p,d,e,f),o),1,o)],q),B.y,o,B.r,B.v,0,o,o))
m=A.a2(r,B.S,o,B.r,B.v,0,B.x)
l=A.d(d).ax.a===B.p?B.bB:B.L
return A.f4(new A.W(B.aB,m,o),l,o,o,o,B.a6)},
api(d,e,f,g){var x,w=null,v=A.d(d).ok,u=A.d(d).ax.a===B.p?B.cN:B.cO,t=A.b1(8),s=A.bU(A.d(d).ax.a===B.p?B.az:B.cu,B.O,1),r=v.Q
if(r==null)r=w
else r=r.V(A.d(d).ax.a===B.p?B.B:B.D)
r=A.o(e,w,1,B.at,w,w,r,w,w,w)
x=v.w
if(x==null)x=w
else x=x.e0(g?A.d(d).ax.fy:w,B.ao)
return A.au(w,A.a2(A.c([r,B.dN,A.o(f,w,1,B.at,w,w,x,w,w,w)],y.p),B.S,w,B.es,B.v,0,B.x),B.F,w,w,new A.aA(u,w,s,t,w,w,B.X),w,w,w,w,B.cQ,w,w,w)},
a4Y(d,e,f){return this.api(d,e,f,!1)},
HZ(d,e,f){return this.aUs(d,e,f)},
aUs(d,e,f){var x=0,w=A.m(y.n),v=1,u=[],t=this,s,r,q,p
var $async$HZ=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.e(t.Hf(f),$async$HZ)
case 6:s=h
r=B.o.a8(new A.aH(Date.now(),0,!1).cY(),0,10)
x=7
return A.e($.BY().iQ(I.FT(null,A.c([I.GF(new Uint8Array(A.b4(s)),"application/pdf","casethread-report-"+A.q(r)+".pdf")],y.S),"CaseThread executive summary \u2014 "+f.a.gk9())),$async$HZ)
case 7:v=1
x=5
break
case 3:v=2
p=u.pop()
if(d.e!=null)d.S(y.q).f.aS(A.bN(null,null,null,null,null,B.C,null,A.o("PDF export failed.",null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$HZ,w)},
QA(d,e,f){return this.aUr(d,e,f)},
aUr(a4,a5,a6){var x=0,w=A.m(y.n),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$QA=A.i(function(a7,a8){if(a7===1){u.push(a8)
x=v}for(;;)switch(x){case 0:v=3
t=new A.aH(Date.now(),0,!1)
i=a6.e.a
s=i==null?D.rj:i
r=C.c5n(s,t)
q=C.c5m(s,t)
h=new A.dN("")
h.a="section,key,value\n"
g=a6.a
h.a="section,key,value\n"+('meta,period,"'+g.gk9()+" ("+B.o.a8(a6.b.cY(),0,10)+" to "+B.o.a8(a6.c.cY(),0,10)+')"\n')
p=h
o=new C.b6M()
for(f=r,f=new A.cR(f,A.t(f).i("cR<1,2>")).gU(0);f.q();){e=f.d
e.toString
n=e
e=p
d="billable_hours_by_room,"+A.q(o.$1(a6.FC(n.a)))+","+B.m.ar(n.b,2)+"\n"
e.a+=d}for(f=q,f=new A.cR(f,A.t(f).i("cR<1,2>")).gU(0),e=a6.w;f.q();){d=f.d
d.toString
m=d
d=p
a0=e.h(0,m.a)
if(a0==null)a0="Member"
a0="billable_hours_by_member,"+A.q(o.$1(a0))+","+B.m.ar(m.b,2)+"\n"
d.a+=a0}for(f=a6.r.geD(),f=f.gU(f);f.q();){l=f.gI()
e=p
d="storage_bytes_by_room,"+A.q(o.$1(a6.FC(l.a)))+","+l.b+"\n"
e.a+=d}f=a6.f
if(f.b)a1=null
else{f=f.a
a1=C.c62(f==null?D.x_:f)}k=a1
if(k!=null){f=p
e="executive_summary,invoiced_cents,"+k.a+"\n"
f.a+=e
e=p
f="executive_summary,outstanding_cents,"+k.b+"\n"
e.a+=f}j=B.o.a8(new A.aH(Date.now(),0,!1).cY(),0,10)
f=$.BY()
e=p.a
x=6
return A.e(f.iQ(I.FT(null,A.c([I.GF(new Uint8Array(A.b4(B.bA.bc(e.charCodeAt(0)==0?e:e))),"text/csv","casethread-report-"+A.q(j)+".csv")],y.S),"CaseThread report \u2014 "+g.gk9())),$async$QA)
case 6:v=1
x=5
break
case 3:v=2
a3=u.pop()
if(a4.e!=null)a4.S(y.q).f.aS(A.bN(null,null,null,null,null,B.C,null,A.o("CSV export failed.",null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$QA,w)},
Hf(d){return this.aOC(d)},
aOC(d){var x=0,w=A.m(y.aH),v,u,t,s,r,q,p,o,n
var $async$Hf=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(A.cp("pdf.1",""),$async$Hf)
case 3:x=4
return A.e(A.cp("pw.1",""),$async$Hf)
case 4:A.am("pw.1")
u=F.c1A()
t=new A.aH(Date.now(),0,!1)
s=d.e
r=s.a
if(r==null)r=D.rj
s=s.b
q=s?null:C.c65(r,t)
p=s?null:C.cjT(r,t)
s=d.f
if(s.b)o=null
else{s=s.a
o=C.c62(s==null?D.x_:s)}s=d.r.gey()
n=s.jm(s,0,new C.b6G())
A.am("pw.1")
A.am("pdf.1")
u.a61(F.ccx(new C.b6H(d,t,new C.b6I(),q,p,o,n,r),null,null,M.HW,null,null,null))
v=u.it()
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Hf,w)},
apm(d,e){var x=null,w=A.d(d).ok.Q
if(w==null)w=x
else w=w.e0(A.d(d).ax.a===B.p?B.B:B.D,B.aT)
return new A.W(B.AS,A.o(e,x,x,x,x,x,w,x,x,x),x)},
a3e(d,e,f){var x=null,w=A.d(d).ok.Q,v=A.aD(A.o(e,x,1,B.at,x,x,w,x,x,x),1,x)
return new A.W(B.JY,A.an(A.c([v,A.o(f,x,x,x,x,x,w==null?x:w.d5(B.aT),x,x,x)],y.p),B.y,x,B.r,B.v,0,x,x),x)},
aky(d,e,f,g){var x,w,v=null,u=A.d(d).ok,t=A.aW(e,A.d(d).ax.a===B.p?B.B:B.D,v,v,v),s=u.z
s=A.o(f,v,v,v,v,v,s==null?v:s.d5(B.aT),v,v,v)
x=u.Q
if(x==null)x=v
else x=x.V(A.d(d).ax.a===B.p?B.B:B.D)
w=y.p
w=A.an(A.c([t,B.br,A.aD(A.a2(A.c([s,B.dN,A.o(g,v,v,v,v,v,x,v,v,v)],w),B.S,v,B.r,B.v,0,B.x),1,v)],w),B.S,v,B.r,B.v,0,v,v)
t=A.d(d).ax.a===B.p?B.bB:B.L
return A.f4(new A.W(B.aB,w,v),t,v,v,v,B.a6)},
ai6(d,e,f){var x,w=null,v=A.d(d).ok.z
v=A.an(A.c([A.aD(A.o(e,w,w,w,w,w,v==null?w:v.V(A.d(d).ax.fy),w,w,w),1,w),A.by(B.ey,w,w,w,f,w,w)],y.p),B.y,w,B.r,B.v,0,w,w)
x=A.d(d).ax.a===B.p?B.bB:B.L
return A.f4(new A.W(B.aB,v,w),x,w,w,w,B.a6)}}
C.Gs.prototype={
cq(d,e){var x=null,w=e.T($.cnO(),y.u),v=e.T($.cnR(),y.F)
return A.hp(A.lM(x,x,x,x,x,x,x,x,B.a7d),x,A.ec(w,new C.biv(this,v,d,e),new C.biw(this,d),new C.bix(),!1,!0,!1),x,x)},
arg(d,e){var x=null,w=A.d(d).ok.z
return A.bS(A.o(e,x,x,x,x,x,w==null?x:w.V(A.d(d).ax.fy),x,x,x),x,x)},
b7L(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=A.d(d).ok,g=e.T($.c0p(),y.X).gp()
if(g==null)g=D.eVg
x=J.el(g,new C.biq(f))
w=A.J(x,x.$ti.i("z.E"))
if(w.length===0)return B.aM
x=h.at
if(x==null)x=i
else x=x.fM(A.d(d).ax.a===B.p?B.B:B.D,B.ao,1.5)
v=y.p
x=A.c([A.o("CHANGE PLAN",i,i,i,i,i,x,i,i,i),B.R],v)
for(u=w.length,t=f.c,s=y.O,r=h.Q,q=h.z,p=0;p<w.length;w.length===u||(0,A.H)(w),++p){o=w[p]
n=A.d(d).ax.a===B.p?B.bB:B.L
m=q==null?i:q.d5(B.aT)
m=A.o(o.b,i,i,i,i,i,m,i,i,i)
l=o.a
if(l==="enterprise")k="Custom pricing \u2014 contact us"
else{k=o.c
k=k===0?"Free":"$"+B.m.ar(k/100,0)+"/month"}if(r==null)j=i
else j=r.V(A.d(d).ax.a===B.p?B.B:B.D)
j=A.a2(A.c([m,A.o(k,i,i,i,i,i,j,i,i,i)],v),B.S,i,B.r,B.v,0,B.x)
x.push(new A.uE(n,B.a6,i,i,new A.W(B.aB,new A.ib(B.b2,B.r,B.v,B.y,i,B.x,i,0,A.c([new A.fO(1,B.d_,j,i),A.d2(A.o(o.c<t?"Downgrade":"Switch",i,i,i,i,i,i,i,i,i),new A.K("plan-switch-"+l,s),new C.bir(this,d,e,o),i)],v),i),i),i))}return A.a2(x,B.S,i,B.r,B.v,0,B.x)},
Tc(d,e,f){return this.bdR(d,e,f)},
bdR(d,e,f){var x=0,w=A.m(y.n),v
var $async$Tc=A.i(function(g,h){if(g===1)return A.j(h,w)
for(;;)switch(x){case 0:x=f.a==="enterprise"||f.c>0?3:4
break
case 3:x=5
return A.e(S.a8t(d,e,f),$async$Tc)
case 5:x=1
break
case 4:d.S(y.q).f.aS(D.fkj)
case 1:return A.k(v,w)}})
return A.l($async$Tc,w)},
TA(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=A.d(d).ok,k=f.a.h(0,g.c)
if(k==null)k=0
x=e.aao(g)
w=x>0
v=w?B.m.az(k/x,0,1):0
w=k>=x&&w
u=A.d(d).ax.a===B.p?B.bB:B.L
t=l.z
t=A.aD(A.o(h,m,m,m,m,m,t==null?m:t.d5(B.cv),m,m,m),1,m)
s=A.q(i.$1(k))
r=A.q(i.$1(x))
q=l.Q
p=q==null
if(p)o=m
else{if(w)o=A.d(d).ax.fy
else o=A.d(d).ax.a===B.p?B.B:B.D
o=q.e0(o,w?B.aT:m)}n=y.p
o=A.an(A.c([t,A.o(s+" / "+r,m,m,m,m,m,o,m,m,m)],n),B.y,m,B.r,B.v,0,m,m)
t=A.d(d).ax.a===B.p?B.az:B.cu
if(w)s=A.d(d).ax.fy
else s=A.d(d).ax.a===B.p?B.c3:B.ad
s=A.c([o,B.ai,A.aVf(t,s,m,v,m)],n)
if(w)B.i.L(s,A.c([B.t2,A.o("Limit reached \u2014 upgrades unlock more.",m,m,m,m,m,p?m:q.V(A.d(d).ax.fy),m,m,m)],n))
return A.f4(new A.W(B.aB,A.a2(s,B.S,m,B.r,B.v,0,B.x),m),u,m,m,m,B.a6)},
al9(d,e,f){var x,w,v=null,u=A.d(d),t=A.d(d).ax.a===B.p?B.bB:B.L
u=u.ok.z
x=A.aD(A.o(e,v,v,v,v,v,u,v,v,v),1,v)
w=f>=2147483647?"Unlimited":""+f
return A.f4(new A.W(B.mp,A.an(A.c([x,A.o(w,v,v,v,v,v,u==null?v:u.d5(B.cv),v,v,v)],y.p),B.y,v,B.r,B.v,0,v,v),v),t,v,v,v,B.a6)}}
C.SY.prototype={
gau4(){var x=this.f
return A.cb(A.b6(x),A.bk(x),A.c_(x),0,0)},
Y(){var x=null
return new C.a1p(new A.pj(!1,$.ac()),new A.bq(x,y.B),new A.bq(x,y.t),x,A.D(y.bw,y.aI),x,!0,x)}}
C.a1p.prototype={
gmd(){var x=this.d
return x===$?this.d=new A.a5_(this.a.r,$.ac()):x},
gvZ(){var x,w=this.e
if(w===$){x=this.a.c
x=x==null?null:x.a
w=this.e=new A.M8(x,$.ac())}return w},
gpG(){var x,w=this.f
if(w===$){x=this.a.c
x=x==null?null:x.b
w=this.f=new A.M8(x,$.ac())}return w},
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
x.aKc()},
a2N(){var x,w=this,v=w.gmd(),u=v.y,t=u==null
if((t?A.t(v).i("aM.T").a(u):u)!==B.ek)v=(t?A.t(v).i("aM.T").a(u):u)===B.l4
else v=!0
if(v)if(!w.x.gaf().kO()){w.v(new C.brH(w))
return}if(w.gakk()){v=w.gvZ()
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
a2t(){var x=this.c
x.toString
A.ap(x,!1).b1(null)},
a2H(){this.v(new C.brG(this))},
RB(d){var x=this.a
if(d.jo(x.d)||d.kE(x.e))return!1
return!0},
b0a(d){this.v(new C.brI(this,d))},
aY1(d){this.v(new C.brF(this,d))},
gakk(){var x=this.gvZ(),w=x.y
if((w==null?A.t(x).i("aM.T").a(w):w)!=null){x=this.gpG()
w=x.y
x=(w==null?A.t(x).i("aM.T").a(w):w)!=null}else x=!1
return x},
C(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2="Select range",b3={}
A.d(b4)
x=y.w
w=A.az(b4,B.dQ,x).w.geG()
A.c8(b4,B.aF,y.y).toString
v=A.qd(b4)
A.d(b4)
u=A.os(b4)
b3.a=null
t=b0.gmd()
s=t.y
r=s==null
if((r?A.t(t).i("aM.T").a(s):s)!==B.eI)q=(r?A.t(t).i("aM.T").a(s):s)===B.ek
else q=!0
switch(r?A.t(t).i("aM.T").a(s):s){case B.eI:case B.nh:t=b0.a.fr
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
p=p.gau4()
l=b0.gakk()?b0.gRh():b1
if(q){k=b0.a.db
k=A.aW(B.lO,b1,b1,b1,b1)
k=A.bx(b1,b1,b1,k,b1,b1,b0.gIi(),B.a9,b1,b1,"Switch to input",b1)}else k=b1
b0.a.toString
b3.a=new C.anI(s,r,o,n,m,p,b0.gak3(),b0.gajJ(),l,b0.gRa(),"Save",b2,t,k,b0.w)
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
case B.ek:case B.l4:x=b0.a.fr
t=b0.gvZ()
s=t.y
if(s==null)s=A.t(t).i("aM.T").a(s)
r=b0.gpG()
p=r.y
if(p==null)p=A.t(r).i("aM.T").a(p)
o=b0.a.gau4()
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
k=A.a2(A.c([B.d5,new C.a34(t,r,A.cb(A.b6(d),A.bk(d),A.c_(d),0,0),A.cb(A.b6(a0),A.bk(a0),A.c_(a0),0,0),b0.gak3(),b0.gajJ(),a4,a5,a3,a6,a7,a8,a9,!0,a2,l,a1,k,b0.x),B.d5],y.p),B.y,b1,B.r,B.v,0,B.x)
if(q){b0.a.toString
t=A.bx(b1,b1,b1,B.Oi,b1,b1,b0.gIi(),B.a9,b1,b1,"Switch to calendar",b1)}else t=b1
b0.a.toString
b3.a=new C.aro(s,p,o,new A.aN(b1,m,new A.W(B.uT,k,b1),b1),b0.gRh(),b0.gRa(),"OK","Cancel",b2,t,x,b1)
if(n)j=B.FK
else j=D.fjH
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
e=B.K1
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
return A.CZ(b1,x,A.aCG(A.KQ(new A.ed(new C.brJ(b3),b1),1.3),b1,B.ej,b1,B.ak,b1,s,t),B.cM,b1,i,e,B.nY,h,f,g)}}
C.anI.prototype={
C(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null
A.d(a3)
x=A.c8(a3,B.aF,y.y)
x.toString
w=y.w
v=A.az(a3,B.dQ,w).w.geG()
u=A.qd(a3)
A.d(a3)
t=A.os(a3)
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
j=C.chs(x,n,l,k)
i=C.chr(x,n,l,k,new A.aH(Date.now(),0,!1))
x=o==null
if(x)h=a2
else h=o.lb(l!=null?q:p)
if(x)g=a2
else g=o.lb(k!=null?q:p)
f=A.ok(a2,a2,a2,a2,p,a2,a2,a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)
e=new A.e4(a2,a2,a2,a2,a2,q,a2,a2,a2)
x=y.p
d=A.c([],x)
if(v===B.et&&a1.ay!=null){a0=a1.ay
a0.toString
d.push(a0)}d.push(A.by(A.o(a1.as,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a1.z,a2,f))
d.push(B.b8)
w=A.az(a3,B.o8,w).w.a.a<360?42:72
a0=a1.at
x=A.c([new A.aN(w,a2,a2,a2),A.aD(A.bA(a2,a2,a2,A.a2(A.c([A.o(a0,a2,1,B.at,a2,a2,m,a2,a2,a2),B.ai,A.an(A.c([A.o(j,a2,1,B.at,a2,a2,h,a2,a2,a2),A.o(" \u2013 ",a2,a2,a2,a2,a2,h,a2,a2,a2),new A.fi(1,B.cd,A.o(i,a2,1,B.at,a2,a2,g,a2,a2,a2),a2)],x),B.y,a2,B.r,B.v,0,a2,a2),B.a1],x),B.S,a2,B.r,B.v,0,B.x),!1,a2,a2,a2,!0,a2,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a0+" "+j+" to "+i,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,B.aa,a2),1,a2)],x)
if(v===B.d3&&a1.ay!=null){w=a1.ay
w.toString
x.push(new A.W(B.fe,A.vn(w,e,a2),a2))}x=A.lM(d,e,r,new C.ahF(A.an(x,B.y,a2,B.r,B.v,0,a2,a2),D.fjn,a2),0,e,new A.Ss(B.a6m,a2,a2,a2,a2,B.Iv,a2,a1.Q,a2,a2,a2,a2,B.pR,a2),0,a2)
w=a1.e
d=a1.f
a0=a1.w
l=l!=null?A.cb(A.b6(l),A.bk(l),A.c_(l),0,0):a2
k=k!=null?A.cb(A.b6(k),A.bk(k),A.c_(k),0,0):a2
w=A.cb(A.b6(w),A.bk(w),A.c_(w),0,0)
d=A.cb(A.b6(d),A.bk(d),A.c_(d),0,0)
return A.eY(!0,A.hp(x,s,new C.a0x(l,k,w,d,a1.r,A.cb(A.b6(a0),A.bk(a0),A.c_(a0),0,0),a1.x,a1.y,n,a2),a2,a2),!1,B.a9,!1,!1)}}
C.a0x.prototype={
Y(){return new C.a0y(new A.bq(null,y.B),new A.rf())}}
C.a0y.prototype={
au(){var x,w,v,u=this
u.aP()
x=A.A7(0,null,null)
u.x=x
x.a9(u.gbaY())
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
baZ(){var x,w=this,v=w.x
v===$&&A.b()
v=v.gbv().at
v.toString
x=B.i.gde(w.x.f).z
x.toString
if(v<=x)w.v(new C.bng(w))
else{v=w.y
v===$&&A.b()
if(!v)w.v(new C.bnh(w))}},
bgu(){var x=this.c
x.toString
switch(A.d(x).w.a){case 0:case 1:A.K7()
break
case 2:case 3:case 4:case 5:break}},
bfR(d){this.bgu()
this.v(new C.bni(this,d))},
afB(d,e,f){var x,w,v=this,u=v.w,t=f?u-e-1:u+e
u=v.a.e
x=A.cb(A.b6(u),A.bk(u)+t,1,0,0)
u=v.a
w=u.z
return new C.a3p(v.f,v.r,u.w,v.gbfQ(),u.e,u.f,x,u.r,w,null)},
C(d){var x,w,v,u,t,s,r=this,q=null,p=y.p,o=A.c([D.fCl],p),n=r.y
n===$&&A.b()
if(n)o.push(D.aiA)
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
p=A.c([C.ceh(new C.bnj(r),s,q),C.ceh(new C.bnk(r),A.ac_(w,v)+1-s,t)],p)
o.push(A.aD(new C.a0z(new C.abM(p,B.a5,!1,u,q,q,q,!1,t,0,q,q,q,B.mI,B.T,q,q,B.C,B.bZ,r.d),w,v,n,x,q),1,q))
return A.a2(o,B.y,q,B.r,B.v,0,B.x)}}
C.a0z.prototype={
Y(){return new C.a0A()}}
C.a0A.prototype={
au(){var x,w,v=this
v.aP()
x=y.k
w=y.bc
v.e=A.Q([B.Go,new A.dP(v.gaYu(),new A.c4(A.c([],x),w),y.d),B.Gp,new A.dP(v.gaYw(),new A.c4(A.c([],x),w),y.e),B.yx,new A.dP(v.gaXF(),new A.c4(A.c([],x),w),y.c)],y.bv,y.V)
v.f=A.k4(!0,"Day Grid",!0,!0,null,null,!1)},
l(){var x=this.f
x===$&&A.b()
x.l()
this.al()},
aYt(d){this.v(new C.bnm(this,d))},
aYv(d){var x,w=this.f
w===$&&A.b()
w.fP()
w=this.f
x=w.e
x.toString
A.nL(x).pC(w,!0)},
aYx(d){var x,w=this.f
w===$&&A.b()
w.fP()
w=this.f
x=w.e
x.toString
A.nL(x).pC(w,!1)},
aXG(d){this.v(new C.bnl(this,d))},
b3Q(d,e){var x,w,v,u=this.c.S(y.I).w
this.a.toString
if(u===B.c0)if(e===B.m5)x=B.mO
else x=e===B.mO?B.m5:e
else x=e
w=B.a_s.h(0,x)
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
return A.adt(r,!1,new C.a2q(w,v,u,t.a.c,s),!0,x,!0,B.ca,t.gaYs(),s,s,B.a_h)}}
C.a2q.prototype={
dg(d){return!this.f.AD(this.r,d.r)||this.w!=d.w}}
C.ap6.prototype={
aVR(d,e){var x,w=null,v=A.c([],y.p)
for(x=0;v.length<7;x=(x+1)%7)v.push(new A.li(!0,new A.fg(B.ag,w,w,A.o(B.UQ[x],w,w,w,w,w,d,w,w,w),w),w))
return v},
C(d){var x,w=A.d(d),v=w.ok.x.lb(w.ax.k3),u=A.c8(d,B.aF,y.y)
u.toString
x=this.aVR(v,u)
B.i.hw(x,0,B.aM)
x.push(B.aM)
u=A.az(d,B.dQ,y.w).w.geG()===B.et?384:480
return new A.e_(new A.av(0,u,0,42),A.c23(A.Zk(x,!0,!1,!0),D.If,null,!0),null)}}
C.bEx.prototype={
G9(d){return new C.bEB(9,Math.max((d.w-16)/7,0),8,A.xt(d.x))},
m7(d){return!1}}
C.bEB.prototype={
ac4(d){return this.a*B.m.ap(d,50)},
ac2(d){return Math.max(0,this.a*B.m.dQ(d/50)-1)},
aVP(d,e){var x,w,v,u=this
if(u.d){x=u.b
w=u.c
v=e?w:x
return(u.a-2)*x+2*w-d-v}return d},
O3(d){var x,w=this,v=w.a,u=B.f.aK(d,v),t=u===0||u===v-1,s=w.b,r=w.c,q=Math.max(0,(u-1)*s+r)
v=B.f.eq(d,v)
x=w.aVP(q,t)
if(t)s=r
return new A.akj(v*50,x,42,s)},
a6Q(d){return 50*(B.f.eq(d-1,this.a)+1)-8}}
C.a3p.prototype={
Y(){return new C.a3q()}}
C.a3q.prototype={
au(){var x,w,v,u,t
this.aP()
x=this.a.x
w=A.SZ(A.b6(x),A.bk(x))
v=J.h7(w,y.J)
for(u=0;u<w;u=t){t=u+1
v[u]=A.k4(!0,"Day "+t,!0,!0,null,null,!0)}this.d=v},
bC(){var x,w,v=this
v.d_()
x=v.c.S(y.Q)
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
aRC(d){var x,w,v
if(d){x=this.c.S(y.Q)
w=x==null?null:x.w
if(w!=null){switch(w.a){case 0:case 3:v=B.lg
break
case 1:case 2:v=B.lf
break
default:v=B.Fe}x=$.as.aO$.d.c.e
x.toString
A.b9h(x,0,v,B.cc,B.ak)}}},
C(b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.d(b5),b4=A.c8(b5,B.aF,y.y)
b4.toString
x=b1.a.x
w=A.b6(x)
v=A.bk(x)
u=A.SZ(w,v)
b1.a.toString
t=A.c9x(w,v,b4)
s=B.m.dQ((u+t)/7)
x=y.p
r=A.c([],x)
for(q=0-t+1,p=b1.gaRB(),o=y.x;q<=u;++q)if(q<1)r.push(B.qY)
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
b5.S(o)
j=A.d(b5)
j=j.b6.ok
if(j==null){A.d(b5)
j=A.os(b5)
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
a7=m}}if(a7){b5.S(o)
m=A.d(b5)
m=m.b6.ok
if(m==null){A.d(b5)
m=A.os(b5)
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
a9=m}}if(a9){b5.S(o)
m=A.d(b5)
m=m.b6.ok
if(m==null){A.d(b5)
m=A.os(b5)
m=m.gB0()}m=new A.J2(m,!0,B.qY,b2)}else m=B.qY
a5.push(m)}B.i.L(a1,a5)}b0=A.az(b5,B.dQ,y.w).w.geG()===B.et?384:480
return A.a2(A.c([new A.e_(new A.av(0,b0,0,1/0).YU(58),new A.W(B.e9,new A.dY(B.d7,b2,b2,new A.li(!0,A.o(b4.W2(b1.a.x),b2,b2,b2,b2,b2,b3.ok.z.lb(b3.ax.k3),b2,b2,b2),b2),b2),b2),b2),new A.e_(new A.av(0,b0,0,s*42+(s-1)*8),A.c23(A.Zk(a1,!0,!1,!0),D.If,B.xw,!1),b2),B.R],x),B.y,b2,B.r,B.v,0,B.x)}}
C.a1s.prototype={
Y(){return new C.ap7(A.B3())},
rQ(d){return this.e.$1(d)}}
C.ap7.prototype={
l(){var x=this.d
x.R$=$.ac()
x.N$=0
this.al()},
C(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=A.d(a4),a2=a1.ax,a3=A.c8(a4,B.aF,y.y)
a3.toString
x=A.qd(a4)
A.d(a4)
w=A.os(a4)
v=a4.S(y.I).w
u=d.a
t=u.r
s=a1.ok.z
r=new C.brQ(x,w)
q=new C.brR(r)
p=A.aS(y.cD)
if(u.w)p.B(0,B.a4)
u=d.a
if(u.y||u.z)p.B(0,B.ab)
u=d.d
u.sp(p)
o=y._
n=q.$1$2(new C.brL(),p,o)
m=q.$1$2(new C.brM(),p,o)
l=q.$1$2(new C.brN(),p,y.b8)
if(l==null)l=B.l_
q=d.a
k=a0
if(q.y||q.z){s=s==null?a0:s.lb(n)
j=new A.je(m,a0,a0,a0,l)
q=d.a
if(q.x&&!q.as)k=new C.a2P(t,q.y?D.GJ:D.a8Q,v,a0)}else{j=a0
i=a0
if(q.Q){k=new C.a2P(t,D.a8R,v,a0)
if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.lb(A.ax(97,q.A()>>>16&255,q.A()>>>8&255,q.A()&255))}}else if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.lb(A.ax(97,q.A()>>>16&255,q.A()>>>8&255,q.A()&255))}else if(q.at){s=s==null?a0:s.lb(a2.b)
q=x.CW
if(q==null)q=w.gBh()
j=new A.je(a0,a0,a0,a0,l.jj(q.V(a2.b)))}}h=a3.Lq(A.c_(d.a.c))
q=d.a
g=q.at?", Today":""
f=h+", "+a3.W1(q.c)+g
a3=d.a
q=a3.y
if(q)f="Start date "+f
else if(a3.z)f="End date "+f
q=q||a3.z
e=A.au(B.ag,A.bA(a0,a0,a0,new A.li(!0,A.o(h,a0,a0,a0,a0,a0,s,a0,a0,a0),a0),!1,a0,a0,a0,!1,a0,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,f,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,q,a0,a0,a0,a0,a0,a0,B.aa,a0),B.F,a0,a0,j,a0,a0,a0,a0,a0,a0,a0,a0)
if(k!=null)e=A.hj(e,a0,a0,k,B.aO)
return!a3.w?A.cbe(!1,a0,!0,e,!0,l,!0,!1,a0,a3.d,a0,B.c8,a0,a0,a0,a0,a0,a3.f,a0,a0,a0,a0,a0,a0,a0,a0,new C.brO(d),a0,a0,a0,new A.b8(new C.brP(d,r),y.cS),a0,a0,a0,u):e}}
C.OP.prototype={
H(){return"_HighlightPainterStyle."+this.b}}
C.a2P.prototype={
aZ(d,e){var x,w,v,u,t,s,r=this.c
if(r===D.fCS)return
$.ar()
x=A.bi()
x.r=this.b.gp()
x.b=B.cp
w=this.d
A:{if(B.c0===w){v=!0
break A}if(B.bd===w){v=!1
break A}v=null}B:{u=D.a8Q===r
t=!(u&&v)
if(t){s=D.GJ===r
v=s&&!v}else{s=null
v=!0}if(v){r=e.a/2
d.j1(new A.X(r,0,r+r,0+e.b),x)
break B}if(!u)v=t?s:D.GJ===r
else v=!0
if(v){d.j1(new A.X(0,0,0+e.a/2,0+e.b),x)
break B}if(D.a8R===r){d.j1(new A.X(0,0,0+e.a,0+e.b),x)
break B}break B}},
eZ(d){return!1}}
C.aro.prototype={
aVl(d,e,f,g){var x,w,v,u=A.c8(d,B.aF,y.y)
u.toString
x=this.as
w=C.chs(u,x,e,f)
v=C.chr(u,x,e,f,g)
if(e==null||f==null)return"Date Range"
switch(d.S(y.I).w.a){case 0:u=v+" \u2013 "+w
break
case 1:u=w+" \u2013 "+v
break
default:u=null}return u},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
A.d(d)
x=A.c8(d,B.aF,y.y)
x.toString
w=A.az(d,B.dQ,y.w).w.geG()
v=A.qd(d)
A.d(d)
u=A.os(d)
if(w===B.d3){t=v.w
s=t==null?u.gEJ():t}else s=A.d(d).ok.f
r=v.r
if(r==null)r=u.gAu()
s=s==null?j:s.V(r)
t=k.c
q=k.d
p=k.aVl(d,t,q,k.e)
o=t!=null&&q!=null?x.a8p(t)+" \u2013 "+x.a8p(q):""
n=A.cfM(k.Q,k.z,w===B.et,w,o,s,p)
x=A.by(A.o(k.y,j,j,j,j,j,j,j,j,j),j,j,j,k.w,j,j)
t=y.p
m=new A.e_(B.HK,new A.W(B.fe,new A.dY(B.q0,j,j,A.b_M(j,A.c([x,A.by(A.o(k.x,j,j,j,j,j,j,j,j,j),j,j,j,k.r,j,j)],t),B.a_Y,B.x,0,8),j),j),j)
x=A.bM(d,B.bi)
x=x==null?j:x.gcf()
x=(x==null?B.aU:x).k6(0,1.3).b4(14)
l=B.FK.aG(0,x/14)
switch(w.a){case 0:return A.nV(new C.bBK(k,!0,l,n,m))
case 1:return A.an(A.c([n,new A.fi(1,B.cd,A.a2(A.c([A.aD(k.f,1,j),m],t),B.b4,j,B.r,B.W,0,B.x),j)],t),B.b4,j,B.r,B.W,0,j,j)}}}
C.a34.prototype={
Y(){return new C.OV()}}
C.OV.prototype={
au(){var x,w,v=this
v.aP()
x=v.a
v.f=x.c
w=$.ac()
v.w=new A.bR(B.aH,w)
v.r=x.d
v.x=new A.bR(B.aH,w)},
l(){var x,w=this.w
w===$&&A.b()
x=$.ac()
w.R$=x
w.N$=0
w=this.x
w===$&&A.b()
w.R$=x
w.N$=0
this.al()},
bC(){var x,w,v,u,t=this
t.d_()
x=t.c
x.toString
x=A.c8(x,B.aF,y.y)
x.toString
w=t.f
if(w!=null){t.a.toString
w=x.a8o(w)
t.d=w
t.a.toString
v=!t.Q
u=t.w
u===$&&A.b()
t.aqu(u,w,v)
t.Q=v}w=t.r
if(w!=null){t.a.toString
x=x.a8o(w)
t.e=x
w=t.x
w===$&&A.b()
t.aqu(w,x,!1)}},
kO(){var x,w,v,u=this,t={},s=u.arl(u.f)
t.a=s
x=u.arl(u.r)
if(s==null&&x==null){w=u.f
w.toString
v=u.r
v.toString
if(w.kE(v)){u.a.toString
w=u.c
w.toString
A.c8(w,B.aF,y.y).toString
t.a="Invalid range."}}u.v(new C.bBN(t,u,x))
return t.a==null&&x==null},
amn(d){var x=this.c
x.toString
x=A.c8(x,B.aF,y.y)
x.toString
this.a.toString
return x.ayn(d)},
arl(d){var x,w=this
if(d==null){w.a.toString
x=w.c
x.toString
A.c8(x,B.aF,y.y).toString
return"Invalid format."}else if(!w.RB(d)){w.a.toString
x=w.c
x.toString
A.c8(x,B.aF,y.y).toString
return"Out of range."}return null},
RB(d){var x=this.a
if(d.jo(x.e)||d.kE(x.f))return!1
return!0},
aqu(d,e,f){var x=d.a.atG(e)
d.fg(f?x.mt(A.e7(B.Z,0,e.length,!1)):x)},
b09(d){var x=this
x.v(new C.bBM(x,d))
if(x.a.CW)x.kO()},
aY0(d){var x=this
x.v(new C.bBL(x,d))
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
v=A.aD(A.cS(q,B.as,!0,q,!0,B.C,q,A.cX(),v,q,q,q,q,q,2,A.kH(q,w,q,q,q,q,q,q,!0,q,q,q,q,q,r.y,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q,q,"Start Date",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.T,!0,q,!0,q,!1,q,B.aP,q,q,q,q,q,t.cx,q,q,q,1,q,q,!1,"\u2022",q,r.gb08(),q,q,q,!1,q,q,!1,q,!0,q,B.aN,q,q,q,q,q,q,q,q,q,q,q,q,!0,B.af,q,B.aE,q,q,q,q),1,q)
t=r.x
t===$&&A.b()
s=r.a
s.toString
return A.an(A.c([v,B.b8,A.aD(A.cS(q,B.as,!1,q,!0,B.C,q,A.cX(),t,q,q,q,q,q,2,A.kH(q,w,q,q,q,q,q,q,!0,q,q,q,q,q,r.z,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q,q,"End Date",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.T,!0,q,!0,q,!1,q,B.aP,q,q,q,q,q,s.cx,q,q,q,1,q,q,!1,"\u2022",q,r.gaY_(),q,q,q,!1,q,q,!1,q,!0,q,B.aN,q,q,q,q,q,q,q,q,q,q,q,q,!0,B.af,q,B.aE,q,q,q,q),1,q)],y.p),B.S,q,B.r,B.v,0,q,q)}}
C.a7h.prototype={
b_(d){this.be(d)
this.nw()},
bC(){var x,w,v,u,t=this
t.d_()
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
w.fu$.aY(0,new C.bTK())
x=w.bU$
if(x!=null)x.l()
w.bU$=null
w.al()}}
C.ahF.prototype={
C(d){return this.c},
$iF5:1,
guE(){return this.d}}
C.abM.prototype={
asF(d){return this.dx}}
var z=a.updateTypes(["~()","B(fu)","B(pA)","Z(Z,pA)","tP(b3<h,Z>)","~(aH?)","~(B)","~(h)","h(Z)","M<Ay?>(al)","M<fu>(al)","fu()","M<u3>(al)","pA(@)","zZ(@)","M6(al)","tN()","h(h)","M<qY>(al)","f(qY)","M<~>(bm<qZ>)","tP(h,h)","y4(nD)","tP(qx)","f?(fu)","f(u3)","~(aH)","~(o3)","~(o8)","~(lh)","Bz()"])
C.bYe.prototype={
$1(d){d.T($.dt(),y.L)
return d.T($.c0g(),y.C).Oe()},
$S:z+9}
C.bY9.prototype={
$1(d){return this.aAV(d)},
aAV(d){var x=0,w=A.m(y.m),v,u,t,s,r
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(d.T($.c0p().glJ(),y.ao),$async$$1)
case 3:u=f
t=J
s=u
r=C
x=4
return A.e(d.T($.cnQ().glJ(),y.U),$async$$1)
case 4:v=t.con(s,new r.bY7(f),new C.bY8(u))
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+10}
C.bY7.prototype={
$1(d){var x=this.a
x=x==null?null:x.a
if(x==null)x="free"
return d.a===x},
$S:z+1}
C.bY8.prototype={
$0(){return J.ks(this.a)},
$S:z+11}
C.bYf.prototype={
$1(d){d.T($.dt(),y.L)
return d.T($.c0g(),y.C).Of()},
$S:z+12}
C.b6B.prototype={
$1(d){return C.cyR(A.aP(y.f.a(d),y.N,y.z))},
$S:z+13}
C.b6A.prototype={
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
C.b6z.prototype={
$1(d){return A.aP(y.f.a(d),y.N,y.z)},
$S:243}
C.bYS.prototype={
$1(d){return new C.M6(d.T($.dx(),y.cx))},
$S:z+15}
C.bYR.prototype={
$1(d){return this.aB1(d)},
aB1(d){var x=0,w=A.m(y.D),v,u,t,s,r,q,p
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:d.T($.dt(),y.L)
q=A
p=J
x=4
return A.e(d.T($.iX(),y.h).Gd(),$async$$1)
case 4:x=3
return A.e(q.jB(p.bL(f,new C.bYQ(d),y.as),!1,y.v),$async$$1)
case 3:u=f
t=A.c([],y.cR)
for(s=J.aI(u);s.q();){r=s.gI()
if(r.b)t.push(r.a)}v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:310}
C.bYQ.prototype={
$1(d){return this.aB0(d)},
aB0(d){var x=0,w=A.m(y.v),v,u=this,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=A
s=d
x=3
return A.e(u.a.T($.iW().$1(d.a).glJ(),y.g),$async$$1)
case 3:v=new t.auq(s,f.iD(B.a0f))
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:1136}
C.b6x.prototype={
$1(d){return d.a===this.a},
$S:56}
C.b6y.prototype={
$1(d){return d.b},
$S:393}
C.bYP.prototype={
$1(d){return this.aB_(d)},
aB_(d){var x=0,w=A.m(y.s),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.i(function(a0,a1){if(a0===1)return A.j(a1,w)
for(;;)switch(x){case 0:d.T($.dt(),y.L)
x=3
return A.e(d.T($.c0r().glJ(),y.ch),$async$$1)
case 3:u=a1
t=d.T($.aBm(),y.j)
s=t.a_(new A.aH(Date.now(),0,!1))
r=y.N
q=J.bL(u,new C.bYO(),r)
p=A.J(q,q.$ti.i("ai.E"))
o=d.T($.co_(),y.A)
if(p.length===0){v=new C.qY(t,s.b,s.a,B.DJ,D.a6B,D.a6C,B.a_n,B.cx)
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
v=new C.qY(t,q,n,u,k,j,C.cJf(i),e)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+18}
C.bYO.prototype={
$1(d){return d.a},
$S:393}
C.bho.prototype={
$1(d){return d==null?null:A.lW(J.bg(d))},
$S:165}
C.c_s.prototype={
$1(d){return d.f},
$S:z+2}
C.c_t.prototype={
$2(d,e){return d+e.Ww(this.a)},
$S:z+3}
C.c_y.prototype={
$1(d){return d.f&&d.w==null},
$S:z+2}
C.c_z.prototype={
$2(d,e){return d+e.Ww(this.a)},
$S:z+3}
C.bVI.prototype={
$2(d,e){var x=this.a,w=x.h(0,e)
w.toString
x=x.h(0,d)
x.toString
return B.m.bp(w,x)},
$S(){return this.b.i("w(0,0)")}}
C.bXo.prototype={
$1(d){return A.q(d.h(0,1))+","},
$S:87}
C.b6V.prototype={
$0(){return B.bf},
$S:23}
C.b6U.prototype={
$2(d,e){return this.a.ai6(this.b,"Could not load reports.",new C.b6S(this.c))},
$S:101}
C.b6S.prototype={
$0(){return this.a.bs($.c0r())},
$S:0}
C.b6T.prototype={
$1(d){var x=this
if(J.f1(d))return x.a.aky(x.b,Q.NZ,"No billing visibility","Reports cover rooms you own or where your role grants billing access.")
return x.a.b9D(x.b,x.c)},
$S:1138}
C.b6R.prototype={
$0(){return B.bf},
$S:23}
C.b6Q.prototype={
$2(d,e){return this.a.ai6(this.b,"Could not load report data.",new C.b6O(this.c))},
$S:101}
C.b6O.prototype={
$0(){return this.a.bs($.c7I())},
$S:0}
C.b6P.prototype={
$1(d){var x=this.a,w=this.b
return A.a2(A.c([x.aNO(w,d),B.R,x.aPl(w,d),B.R,x.bdl(w,d),B.R,x.aUi(w,this.c,d)],y.p),B.S,null,B.r,B.v,0,B.x)},
$S:z+19}
C.b6N.prototype={
$1(d){return this.aAI(d)},
aAI(d){var x=0,w=A.m(y.n),v,u=this,t,s,r,q
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:q=d.ga7(d)
x=q===D.F6?3:5
break
case 3:x=6
return A.e(C.c60(u.a,A.cb(2020,1,1,0,0),new A.aH(Date.now(),0,!1)),$async$$1)
case 6:t=f
if(t==null){x=1
break}s=t.a
r=t.b
u.b.X($.aBm().gce(),y.M).saV(new C.tN(D.F6,s,r))
x=4
break
case 5:u.b.X($.aBm().gce(),y.M).saV(new C.tN(q,null,null))
case 4:case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+20}
C.b6J.prototype={
$2(d,e){return d+e},
$S:80}
C.b6K.prototype={
$0(){var x=this
return x.a.HZ(x.b,x.c,x.d)},
$S:0}
C.b6L.prototype={
$0(){var x=this
return x.a.QA(x.b,x.c,x.d)},
$S:0}
C.b6M.prototype={
$1(d){return'"'+A.d0(d,'"','""')+'"'},
$S:25}
C.b6G.prototype={
$2(d,e){return d+e},
$S:80}
C.b6I.prototype={
$2(d,e){var x,w="pw.1",v=null
A.am(w)
A.am(w)
A.am(w)
A.am(w)
x=E.u_(d,F.pw(v,v,v,v,v,v,v,v,v,G.eR,v,v,11,v,v,v,!0,v,v,v,v),v)
A.am(w)
A.am(w)
A.am(w)
return E.cdQ(A.c([x,E.u_(e,F.pw(v,v,v,v,v,v,v,v,v,G.eR,v,v,11,v,G.tP,v,!0,v,v,v,v),v)],y.o),L.ahL,L.acI)},
$S:z+21}
C.b6H.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="pw.1",h=null,g="n/a"
A.am(i)
A.am(i)
A.am(i)
A.am(i)
A.am(i)
A.am(i)
x=E.K9(E.u_("CaseThread \u2014 Executive Summary",F.pw(h,h,h,h,h,h,h,h,h,G.eR,h,h,20,h,G.tP,h,!0,h,h,h,h),h),0,h,h)
A.am(i)
w=j.a
v=w.a.gk9()
u=j.b
t=B.o.a8(u.hm().j(0),0,16)
A.am(i)
A.am("pdf.1")
t=E.u_("Window: "+v+" \xb7 Generated "+t,F.pw(h,N.HX,h,h,h,h,h,h,h,G.eR,h,h,10,h,h,h,!0,h,h,h,h),h)
A.am(i)
v=E.Zf(h,16,h)
A.am(i)
s=E.K9(h,2,"Totals",h)
r=j.c
q=j.d
q=r.$2("Billable hours",q==null?g:C.BS(q))
p=j.e
p=r.$2("Unbilled hours",p==null?g:C.BS(p))
o=j.f
n=o==null
m=r.$2("Invoiced",n?g:C.bXn(o.a))
o=r.$2("Outstanding (draft + sent)",n?g:C.bXn(o.b))
l=r.$2("Storage used",C.c5G(j.r))
A.am(i)
k=E.Zf(h,16,h)
A.am(i)
k=A.c([x,t,v,s,q,p,m,o,l,k,E.K9(h,2,"Billable hours by room",h)],y.o)
l=j.w
o=C.c5n(l,u)
m=A.t(o).i("cR<1,2>")
m=A.ra(new A.cR(o,m),10,m.i("z.E"))
o=y.l
B.i.L(k,A.i3(m,new C.b6D(r,w),A.t(m).i("z.E"),o))
A.am(i)
k.push(E.Zf(h,16,h))
A.am(i)
k.push(E.K9(h,2,"Billable hours by member",h))
u=C.c5m(l,u)
l=A.t(u).i("cR<1,2>")
l=A.ra(new A.cR(u,l),10,l.i("z.E"))
B.i.L(k,A.i3(l,new C.b6E(r,w),A.t(l).i("z.E"),o))
A.am(i)
k.push(E.Zf(h,16,h))
A.am(i)
k.push(E.K9(h,2,"Case status",h))
B.i.L(k,new A.ab(B.DN,new C.b6F(r,w),y.b))
return E.c1f(k,L.zz)},
$S:z+22}
C.b6D.prototype={
$1(d){return this.a.$2(this.b.FC(d.a),C.BS(d.b))},
$S:z+4}
C.b6E.prototype={
$1(d){return this.a.$2(this.b.bsr(d.a),C.BS(d.b))},
$S:z+4}
C.b6F.prototype={
$1(d){return this.a.$2(C.cdD(d),""+J.el(this.b.d,new C.b6C(d)).gu(0))},
$S:z+23}
C.b6C.prototype={
$1(d){return d.f===this.a},
$S:56}
C.biv.prototype={
$1(d){var x=this,w=x.a,v=x.c
return A.ec(x.b,new C.bis(w,v,x.d,d),new C.bit(w,v),new C.biu(),!1,!0,!1)},
$S:z+24}
C.bis.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=r.d,m=A.d(o).ok,l=A.d(o).ax.a===B.p?B.bB:B.L,k=A.aW(R.CD,A.d(o).ax.a===B.p?B.B:B.D,q,q,28),j=m.w
j=j==null?q:j.d5(B.aT)
j=A.o(n.b+" plan",q,q,q,q,q,j,q,q,q)
x=n.c
x=x===0?"Free forever":"$"+B.m.ar(x/100,0)+"/month"
w=m.Q
if(w==null)w=q
else w=w.V(A.d(o).ax.a===B.p?B.B:B.D)
v=y.p
l=A.f4(new A.W(B.aB,A.an(A.c([k,B.br,A.aD(A.a2(A.c([j,A.o(x,q,q,q,q,q,w,q,q,q)],v),B.S,q,B.r,B.v,0,B.x),1,q)],v),B.y,q,B.r,B.v,0,q,q),q),l,q,q,q,B.a6)
w=m.at
k=w==null
if(k)j=q
else j=w.fM(A.d(o).ax.a===B.p?B.B:B.D,B.ao,1.5)
j=A.o("THIS MONTH",q,q,q,q,q,j,q,q,q)
x=p.TA(o,n,d,K.a89,"Evidence storage",C.cJO())
u=p.TA(o,n,d,K.a86,"AI analyses",C.c67())
t=p.TA(o,n,d,K.a87,"Transcription minutes",C.c67())
s=p.TA(o,n,d,K.a88,"OSINT lookups",C.c67())
if(k)k=q
else k=w.fM(A.d(o).ax.a===B.p?B.B:B.D,B.ao,1.5)
return A.ft(A.c([l,B.b0,j,B.R,x,u,t,s,B.b0,A.o("CASE LIMITS",q,q,q,q,q,k,q,q,q),B.R,p.al9(o,"Case rooms",n.d),p.al9(o,"Members per room",n.e),B.b0,p.b7L(o,r.c,n),B.b0,D.fh5],v),q,B.bv,q,B.a5,!1)},
$S:z+25}
C.biu.prototype={
$0(){return B.bf},
$S:23}
C.bit.prototype={
$2(d,e){return this.a.arg(this.b,"Could not load usage.")},
$S:101}
C.bix.prototype={
$0(){return B.bf},
$S:23}
C.biw.prototype={
$2(d,e){return this.a.arg(this.b,"Could not load your plan.")},
$S:101}
C.biq.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.bir.prototype={
$0(){var x=this
return x.a.Tc(x.b,x.c,x.d)},
$S:0}
C.c_3.prototype={
$1(d){var x=this.a.a
return x},
$S:17}
C.brH.prototype={
$0(){this.a.r.oc(!0)},
$S:0}
C.brG.prototype={
$0(){var x,w,v,u,t=null,s=this.a,r=s.gmd(),q=r.y
switch(q==null?A.t(r).i("aM.T").a(q):q){case B.eI:s.r.oc(!1)
r.sp(B.ek)
break
case B.ek:q=s.gvZ()
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
x=!s.RB(x)}else x=!1
if(x){q.sp(t)
s.gpG().sp(t)}else{q=s.gpG()
x=q.y
w=x==null
if((w?A.t(q).i("aM.T").a(x):x)!=null){if(w)x=A.t(q).i("aM.T").a(x)
x.toString
x=!s.RB(x)
s=x}else s=!1
if(s)q.sp(t)}r.sp(B.eI)
break
case B.nh:case B.l4:break}},
$S:0}
C.brI.prototype={
$0(){var x=this.b
this.a.gvZ().sp(x)
return x},
$S:0}
C.brF.prototype={
$0(){var x=this.b
this.a.gpG().sp(x)
return x},
$S:0}
C.brJ.prototype={
$1(d){return this.a.a},
$S:17}
C.bng.prototype={
$0(){this.a.y=!1},
$S:0}
C.bnh.prototype={
$0(){this.a.y=!0},
$S:0}
C.bni.prototype={
$0(){var x,w=this.a,v=w.f
v=v!=null&&w.r==null&&!this.b.jo(v)
x=this.b
if(v){w.r=x
w.a.y.$1(x)}else{w.f=x
w.a.x.$1(x)
if(w.r!=null){w.r=null
w.a.y.$1(null)}}},
$S:0}
C.bnj.prototype={
$2(d,e){return this.a.afB(d,e,!0)},
$S:52}
C.bnk.prototype={
$2(d,e){return this.a.afB(d,e,!1)},
$S:52}
C.bnm.prototype={
$0(){if(this.b){var x=this.a
if(x.w==null)x.w=x.a.f}},
$S:0}
C.bnl.prototype={
$0(){var x,w,v=this.a,u=v.w
u.toString
x=this.b.a
w=v.b3Q(u,x)
if(w!=null){v.w=w
v.r=x}},
$S:0}
C.brQ.prototype={
$1$1(d,e){var x=d.$1(this.a)
return x==null?d.$1(this.b):x},
$1(d){return this.$1$1(d,y.z)},
$S:176}
C.brR.prototype={
$1$2(d,e,f){return this.a.$1$1(new C.brS(d,e,f),f)},
$2(d,e){return this.$1$2(d,e,y.z)},
$S:177}
C.brS.prototype={
$1(d){var x=this.a.$1(d)
return x==null?null:x.a_(this.b)},
$S(){return this.c.i("0?(j4?)")}}
C.brL.prototype={
$1(d){var x=d.gDY()
return x},
$S:97}
C.brM.prototype={
$1(d){var x=d.gzN()
return x},
$S:97}
C.brP.prototype={
$1(d){return this.b.$1$1(new C.brK(this.a,d),y.G)},
$S:19}
C.brK.prototype={
$1(d){var x,w=null
if(this.a.a.Q){x=d.gMW()
w=x==null?null:x.a_(this.b)}else{x=d.gDZ()
w=x==null?null:x.a_(this.b)}return w},
$S:178}
C.brN.prototype={
$1(d){return d.ax},
$S:179}
C.brO.prototype={
$0(){var x=this.a.a
return x.rQ(x.c)},
$S:0}
C.bBK.prototype={
$2(d,e){var x=this,w=Math.min(x.c.b,270),v=A.c([],y.p)
if(e.d>=w)v.push(x.d)
v.push(A.aD(x.a.f,1,null))
v.push(x.e)
return A.a2(v,B.b4,null,B.r,B.W,0,B.x)},
$S:1139}
C.bBN.prototype={
$0(){var x=this.b
x.y=this.a.a
x.z=this.c},
$S:0}
C.bBM.prototype={
$0(){var x=this.a,w=this.b
x.d=w
w=x.amn(w)
x.f=w
x.a.r.$1(w)},
$S:0}
C.bBL.prototype={
$0(){var x=this.a,w=this.b
x.e=w
w=x.amn(w)
x.r=w
x.a.w.$1(w)},
$S:0}
C.bTK.prototype={
$2(d,e){if(!d.a)d.P(e)},
$S:48};(function aliases(){var x=C.a7h.prototype
x.aKc=x.l})();(function installTearOffs(){var x=a._static_0,w=a._instance_0u,v=a._instance_1u,u=a._static_1
x(C,"cIJ","cBI",30)
w(C.Bz.prototype,"gji","dk",16)
v(C.qY.prototype,"guO","FC",17)
u(C,"cJO","czh",8)
u(C,"c67","czi",8)
var t
w(t=C.a1p.prototype,"gRh","a2N",0)
w(t,"gRa","a2t",0)
w(t,"gIi","a2H",0)
v(t,"gak3","b0a",5)
v(t,"gajJ","aY1",5)
w(t=C.a0y.prototype,"gbaY","baZ",0)
v(t,"gbfQ","bfR",26)
v(t=C.a0A.prototype,"gaYs","aYt",6)
v(t,"gaYu","aYv",27)
v(t,"gaYw","aYx",28)
v(t,"gaXF","aXG",29)
v(C.a3q.prototype,"gaRB","aRC",6)
v(t=C.OV.prototype,"gb08","b09",7)
v(t,"gaY_","aY0",7)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.ca,[C.bYe,C.bY9,C.bY7,C.bYf,C.b6B,C.b6A,C.b6z,C.bYS,C.bYR,C.bYQ,C.b6x,C.b6y,C.bYP,C.bYO,C.bho,C.c_s,C.c_y,C.bXo,C.b6T,C.b6P,C.b6N,C.b6M,C.b6H,C.b6D,C.b6E,C.b6F,C.b6C,C.biv,C.bis,C.biq,C.c_3,C.brJ,C.brQ,C.brR,C.brS,C.brL,C.brM,C.brP,C.brK,C.brN])
w(A.dd,[C.bY8,C.b6V,C.b6S,C.b6R,C.b6O,C.b6K,C.b6L,C.biu,C.bix,C.bir,C.brH,C.brG,C.brI,C.brF,C.bng,C.bnh,C.bni,C.bnm,C.bnl,C.brO,C.bBN,C.bBM,C.bBL])
w(A.C,[C.M6,C.qY,C.tN,C.pA,C.zZ,C.tV])
v(C.Bz,A.eU)
w(A.hs,[C.qZ,C.OP])
w(A.dj,[C.c_t,C.c_z,C.bVI,C.b6U,C.b6Q,C.b6J,C.b6G,C.b6I,C.bit,C.biw,C.bnj,C.bnk,C.bBK,C.bTK])
w(A.i_,[C.aiX,C.Gs])
w(A.N,[C.SY,C.a0x,C.a0z,C.a3p,C.a1s,C.a34])
w(A.Y,[C.a7h,C.a0y,C.a0A,C.a3q,C.ap7,C.OV])
v(C.a1p,C.a7h)
w(A.a4,[C.anI,C.ap6,C.aro,C.ahF])
v(C.a2q,A.bC)
v(C.bEx,A.aki)
v(C.bEB,A.akk)
v(C.a2P,A.y9)
v(C.abM,A.YD)
x(C.a7h,A.kf)})()
A.cD(b.typeUniverse,JSON.parse('{"Bz":{"eU":["tN"]},"aiX":{"N":[],"f":[]},"Gs":{"N":[],"f":[]},"SY":{"N":[],"f":[]},"a0x":{"N":[],"f":[]},"a0z":{"N":[],"f":[]},"a2q":{"bC":[],"bs":[],"f":[]},"a3p":{"N":[],"f":[]},"a1s":{"N":[],"f":[]},"a34":{"N":[],"f":[]},"OV":{"Y":["a34"]},"a1p":{"Y":["SY"]},"anI":{"a4":[],"f":[]},"a0y":{"Y":["a0x"]},"a0A":{"Y":["a0z"]},"ap6":{"a4":[],"f":[]},"a3q":{"Y":["a3p"]},"ap7":{"Y":["a1s"]},"a2P":{"aE":[]},"aro":{"a4":[],"f":[]},"ahF":{"a4":[],"F5":[],"f":[]},"abM":{"a4":[],"f":[]}}'))
var y=(function rtii(){var x=A.I
return{V:x("cf<c2>"),Z:x("aR<v<ev>>"),X:x("aR<v<fu>>"),u:x("aR<fu>"),a:x("aR<qY>"),F:x("aR<u3>"),L:x("aR<fM?>"),C:x("Cq"),R:x("hW<qZ>"),c:x("dP<lh>"),d:x("dP<o3>"),e:x("dP<o8>"),G:x("O"),x:x("c9v"),T:x("Ji<aH>"),I:x("jz"),J:x("eQ"),ch:x("M<v<ev>>"),ao:x("M<v<fu>>"),as:x("M<+room,visible(ev,B)>"),g:x("M<fU>"),U:x("M<Ay?>"),cN:x("qx"),cR:x("x<ev>"),a9:x("x<M<C>>"),Y:x("x<pA>"),p:x("x<f>"),o:x("x<eB>"),S:x("x<nf>"),k:x("x<~(cf<c2>)>"),B:x("bq<Y<N>>"),t:x("bq<OV>"),D:x("v<ev>"),E:x("v<aa<h,@>>"),aH:x("v<w>"),aN:x("aa<h,h>"),P:x("aa<h,@>"),f:x("aa<@,@>"),b:x("ab<qx,eB>"),y:x("zf"),w:x("i4"),K:x("C"),bc:x("c4<~(cf<c2>)>"),m:x("fu"),v:x("+room,visible(ev,B)"),s:x("qY"),aa:x("zZ"),j:x("tN"),af:x("qZ"),A:x("M6"),bw:x("fd<C?>"),h:x("Fu"),N:x("h"),cx:x("fY"),H:x("tV<v<zZ>>"),W:x("tV<v<pA>>"),cn:x("pA"),bv:x("jj"),O:x("K<h>"),l:x("eB"),cD:x("dq"),Q:x("a2q"),M:x("Bz"),q:x("h_"),cS:x("b8<O?>"),i:x("Z"),z:x("@"),r:x("w"),_:x("O?"),aQ:x("Ji<aH>?"),b8:x("fl?"),n:x("~"),aI:x("~()")}})();(function constants(){var x=a.makeConstList
D.If=new C.bEx()
D.aiA=new A.yf(0,null,null,null,null,null,null)
D.ajo=new A.af(0,0,0,3)
D.e0h=new A.ag(62537,"MaterialIcons",null,!1)
D.e21=new A.aJ(B.Cz,null,null,null,null)
D.e2i=new A.aJ(B.O2,null,null,null,null)
D.eVf=x([],A.I("x<aa<h,@>>"))
D.eVg=x([],A.I("x<fu>"))
D.x_=x([],A.I("x<zZ>"))
D.rj=x([],y.Y)
D.fh2=new C.qZ(0,"thisWeek")
D.ftn=new A.a0("Week",null,null,null,null,null,null,null,null,null,null)
D.ace=new H.hW(D.fh2,null,D.ftn,y.R)
D.a4R=new C.qZ(1,"thisMonth")
D.frX=new A.a0("Month",null,null,null,null,null,null,null,null,null,null)
D.acb=new H.hW(D.a4R,null,D.frX,y.R)
D.fh3=new C.qZ(2,"last30Days")
D.fqY=new A.a0("30 days",null,null,null,null,null,null,null,null,null,null)
D.aci=new H.hW(D.fh3,null,D.fqY,y.R)
D.F6=new C.qZ(3,"custom")
D.frL=new A.a0("Custom",null,null,null,null,null,null,null,null,null,null)
D.acf=new H.hW(D.F6,null,D.frL,y.R)
D.eYf=x([D.ace,D.acb,D.aci,D.acf],A.I("x<hW<qZ>>"))
D.fh4=new C.tN(D.a4R,null,null)
D.fh5=new C.aiX(null)
D.fjn=new A.R(1/0,64)
D.fjH=new A.R(496,164)
D.fqF=new A.a0("To move back to Free, cancel your subscription from your receipt email \u2014 we\u2019ll handle the rest.",null,null,null,null,null,null,null,null,null,null)
D.fkj=new A.db(D.fqF,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.C,null)
D.a6C=new C.tV(D.x_,!1,y.H)
D.a6B=new C.tV(D.rj,!1,y.W)
D.flM=new C.tV(null,!0,y.H)
D.flN=new C.tV(null,!0,y.W)
D.frv=new A.a0("Export PDF",null,null,null,null,null,null,null,null,null,null)
D.fsn=new A.a0("Export CSV",null,null,null,null,null,null,null,null,null,null)
D.fxZ=new A.K("reports-export-csv",y.O)
D.fxY=new A.K("reports-export-pdf",y.O)
D.fyb=new A.K("reports-period-selector",y.O)
D.fAp=new A.K("reports-section",y.O)
D.fCl=new C.ap6(null)
D.fCS=new C.OP(0,"none")
D.a8Q=new C.OP(1,"highlightLeading")
D.GJ=new C.OP(2,"highlightTrailing")
D.a8R=new C.OP(3,"highlightAll")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cSA","cnQ",()=>A.lk(new C.bYe(),A.I("Ay?")))
x($,"cSw","cnO",()=>A.lk(new C.bY9(),y.m))
x($,"cSB","cnR",()=>A.lk(new C.bYf(),A.I("u3")))
x($,"cT1","co_",()=>A.ej(new C.bYS(),y.A))
x($,"cT0","c0r",()=>A.lk(new C.bYR(),y.D))
x($,"cT_","aBm",()=>A.p9(C.cIJ(),y.M,y.j))
x($,"cSZ","c7I",()=>A.lk(new C.bYP(),y.s))})()};
(a=>{a["tP6Tg9MSuRaplWxeKY63mafCu9o="]=a.current})($__dart_deferred_initializers__);