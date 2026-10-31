((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,E,M,N,O,P,Q,R,S,H,T,C={bZL:function bZL(){},bZG:function bZG(){},bZE:function bZE(d){this.a=d},bZF:function bZF(d){this.a=d},bZM:function bZM(){},
cDB(){return new C.C_()},
MH:function MH(d){this.a=d},
b7y:function b7y(){},
b7x:function b7x(){},
b7w:function b7w(){},
c_s:function c_s(){},
c_r:function c_r(){},
c_q:function c_q(d){this.a=d},
C_:function C_(){this.b=null},
re:function re(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
b7h:function b7h(d){this.a=d},
b7i:function b7i(){},
c_p:function c_p(){},
c_o:function c_o(){},
cfq(d){return""+A.b2(d)+"-"+B.o.bL(B.f.j(A.b8(d)),2,"0")+"-"+B.o.bL(B.f.j(A.bN(d)),2,"0")},
cAJ(d){var x,w,v,u,t=new C.bir(),s=d.h(0,"room_id")
s=J.bd(s==null?"":s)
x=d.h(0,"user_id")
x=J.bd(x==null?"":x)
w=d.h(0,"description")
J.bd(w==null?"":w)
w=t.$1(d.h(0,"started_at"))
if(w==null)w=new A.aE(Date.now(),0,!1)
t=t.$1(d.h(0,"ended_at"))
v=J.o(d.h(0,"billable"),!1)
A.dp(d.h(0,"hourly_rate"))
u=d.h(0,"invoice_id")
u=u==null?null:J.bd(u)
return new C.pL(s,x,w,t,!v,u)},
c76(d,e){var x,w,v,u,t,s=y.N,r=y.i,q=A.C(s,r)
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.E)(d),++w){v=d[w]
if(!v.f)continue
u=v.a
t=q.h(0,u)
if(t==null)t=0
q.l(0,u,t+v.WS(e))}return C.c6X(q,s,r)},
c75(d,e){var x,w,v,u,t,s=y.N,r=y.i,q=A.C(s,r)
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.E)(d),++w){v=d[w]
if(!v.f)continue
u=v.b
t=q.h(0,u)
if(t==null)t=0
q.l(0,u,t+v.WS(e))}return C.c6X(q,s,r)},
c7P(d,e){return new A.ai(d,new C.c14(),A.a6(d).i("ai<1>")).iL(0,0,new C.c15(e))},
clK(d,e){return new A.ai(d,new C.c1a(),A.a6(d).i("ai<1>")).iL(0,0,new C.c1b(e))},
c7M(d){var x,w,v,u,t,s,r,q
for(x=d.length,w=0,v=0,u=0;u<x;++u){t=d[u]
s=t.c
r=s.toLowerCase()
if(r==="void"||r==="cancelled"||r==="canceled")continue
q=t.d
w+=q
r=s.toLowerCase()
if(r==="draft"||r==="sent")v+=q}return new A.ava(w,v)},
cLf(d){var x,w,v,u,t=y.N,s=y.r,r=A.C(t,s)
for(x=J.aL(d);x.q();){w=x.gI()
v=w.h(0,"room_id")
u=v==null?null:J.bd(v)
if(u==null||u.length===0)continue
v=r.h(0,u)
if(v==null)v=0
w=A.dp(w.h(0,"file_size_bytes"))
w=w==null?null:B.l.F(w)
r.l(0,u,v+(w==null?0:w))}return C.c6X(r,t,s)},
c6X(d,e,f){var x,w,v,u,t=A.t(d).i("bD<1>"),s=A.K(new A.bD(d,t),t.i("z.E"))
B.i.es(s,new C.bXd(d,e))
t=A.C(e,f)
for(x=s.length,w=0;w<s.length;s.length===x||(0,A.E)(s),++w){v=s[w]
u=d.h(0,v)
t.l(0,v,u==null?f.a(u):u)}return t},
Cj(d){var x=B.l.aM(d*10)/10
return x===(x<0?Math.ceil(x):Math.floor(x))?""+B.l.F(x)+" h":B.l.aq(x,1)+" h"},
bYU(d){var x=Math.abs(d),w=B.f.ao(x,100),v=B.o.bL(B.f.j(B.f.aF(x,100)),2,"0"),u=A.aBD(B.f.j(w),A.cc("(\\d)(?=(\\d{3})+(?!\\d))",!0,!1),new C.bYV(),null)
return(d<0?"-":"")+"$"+u+"."+v},
c7p(d){if(d>=1073741824)return B.l.aq(d/1073741824,1)+" GB"
if(d>=1048576)return B.l.aq(d/1048576,0)+" MB"
if(d>=1024)return B.l.aq(d/1024,0)+" KB"
return""+d+" B"},
rf:function rf(d,e){this.a=d
this.b=e},
u3:function u3(d,e,f){this.a=d
this.b=e
this.c=f},
pL:function pL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h
_.w=i},
bir:function bir(){},
An:function An(d,e,f){this.a=d
this.c=e
this.d=f},
uc:function uc(d,e,f){this.a=d
this.b=e
this.$ti=f},
c14:function c14(){},
c15:function c15(d){this.a=d},
c1a:function c1a(){},
c1b:function c1b(d){this.a=d},
bXd:function bXd(d,e){this.a=d
this.b=e},
bYV:function bYV(){},
cfr(d){var x
switch(d.a){case 0:x="Open"
break
case 1:x="Under investigation"
break
case 2:x="In review"
break
case 3:x="Closed"
break
default:x=null}return x},
ajK:function ajK(d){this.a=d},
b7S:function b7S(){},
b7R:function b7R(d,e,f){this.a=d
this.b=e
this.c=f},
b7P:function b7P(d){this.a=d},
b7Q:function b7Q(d,e,f){this.a=d
this.b=e
this.c=f},
b7O:function b7O(){},
b7N:function b7N(d,e,f){this.a=d
this.b=e
this.c=f},
b7L:function b7L(d){this.a=d},
b7M:function b7M(d,e,f){this.a=d
this.b=e
this.c=f},
b7K:function b7K(d,e){this.a=d
this.b=e},
b7G:function b7G(){},
b7H:function b7H(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b7I:function b7I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b7J:function b7J(){},
b7D:function b7D(){},
b7F:function b7F(){},
b7E:function b7E(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
b7A:function b7A(d,e){this.a=d
this.b=e},
b7B:function b7B(d,e){this.a=d
this.b=e},
b7C:function b7C(d,e){this.a=d
this.b=e},
b7z:function b7z(d){this.a=d},
ch_(){return new C.H0(null)},
cB9(d){if(d>=1073741824)return B.l.aq(d/1073741824,1)+" GB"
if(d>=1048576)return B.l.aq(d/1048576,0)+" MB"
if(d>=1024)return B.l.aq(d/1024,0)+" KB"
return B.l.aq(d,0)+" B"},
cBa(d){var x=B.l.F(d)
return d===x?""+x:B.l.aq(d,1)},
H0:function H0(d){this.a=d},
bjD:function bjD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bjA:function bjA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bjC:function bjC(){},
bjB:function bjB(d,e){this.a=d
this.b=e},
bjF:function bjF(){},
bjE:function bjE(d,e){this.a=d
this.b=e},
bjy:function bjy(d){this.a=d},
bjz:function bjz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c7K(d,e,f){return C.cL5(d,e,f)},
cL5(d,e,f){var x=0,w=A.m(y.aQ),v,u,t
var $async$c7K=A.i(function(g,h){if(g===1)return A.j(h,w)
for(;;)switch(x){case 0:t={}
e=A.cg(A.b2(e),A.b8(e),A.bN(e),0,0)
f=A.cg(A.b2(f),A.b8(f),A.bN(f),0,0)
u=new A.aE(Date.now(),0,!1)
t.a=new C.TF(null,e,f,A.cg(A.b2(u),A.b8(u),A.bN(u),0,0),B.eP,null,null,null,null,null,null,null,null,null,null,null,B.lu,null,null,null,B.Ic,null)
v=A.cU(null,null,!0,null,new C.c0E(t,null),d,null,!0,!1,y.T)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$c7K,w)},
cjg(d,e,f,g){var x
if(f==null)x="Start Date"
else x=g==null||A.b2(f)===A.b2(g)?d.awe(f):d.awd(f)
return x},
cjf(d,e,f,g,h){var x
if(g==null)x="End Date"
else x=f!=null&&A.b2(f)===A.b2(g)&&A.b2(f)===A.b2(h)?d.awe(g):d.awd(g)
return x},
c0E:function c0E(d,e){this.a=d
this.b=e},
TF:function TF(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){var _=this
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
a25:function a25(d,e,f,g,h,i,j,k){var _=this
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
bsR:function bsR(d){this.a=d},
bsQ:function bsQ(d){this.a=d},
bsS:function bsS(d,e){this.a=d
this.b=e},
bsP:function bsP(d,e){this.a=d
this.b=e},
bsT:function bsT(d){this.a=d},
aoA:function aoA(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
a1c:function a1c(d,e,f,g,h,i,j,k,l,m){var _=this
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
a1d:function a1d(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.w=0
_.y=_.x=$
_.c=_.a=null},
boi:function boi(d){this.a=d},
boj:function boj(d){this.a=d},
bok:function bok(d,e){this.a=d
this.b=e},
bol:function bol(d){this.a=d},
bom:function bom(d){this.a=d},
a1e:function a1e(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a1f:function a1f(){var _=this
_.f=_.e=$
_.c=_.a=_.w=_.r=null},
boo:function boo(d,e){this.a=d
this.b=e},
bon:function bon(d,e){this.a=d
this.b=e},
a36:function a36(d,e,f,g,h){var _=this
_.f=d
_.r=e
_.w=f
_.b=g
_.a=h},
apY:function apY(d){this.a=d},
bFP:function bFP(){},
bFT:function bFT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a45:function a45(d,e,f,g,h,i,j,k,l,m){var _=this
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
a46:function a46(){this.d=$
this.c=this.a=null},
a28:function a28(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
apZ:function apZ(d){this.d=d
this.c=this.a=null},
bt_:function bt_(d,e){this.a=d
this.b=e},
bt0:function bt0(d){this.a=d},
bt1:function bt1(d,e,f){this.a=d
this.b=e
this.c=f},
bsV:function bsV(){},
bsW:function bsW(){},
bsZ:function bsZ(d,e){this.a=d
this.b=e},
bsU:function bsU(d,e){this.a=d
this.b=e},
bsX:function bsX(){},
bsY:function bsY(d){this.a=d},
Pr:function Pr(d,e){this.a=d
this.b=e},
a3v:function a3v(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
ase:function ase(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bD1:function bD1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a3L:function a3L(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
Px:function Px(){var _=this
_.e=_.d=$
_.r=_.f=null
_.x=_.w=$
_.z=_.y=null
_.Q=!1
_.c=_.a=null},
bD4:function bD4(d,e,f){this.a=d
this.b=e
this.c=f},
bD3:function bD3(d,e){this.a=d
this.b=e},
bD2:function bD2(d,e){this.a=d
this.b=e},
bVd:function bVd(){},
a7Y:function a7Y(){},
aio:function aio(d,e,f){this.c=d
this.d=e
this.a=f},
acp:function acp(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var _=this
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
cg4(d,e,f){return new A.a_1(new A.Gw(d,e,!0,!0,!0,0,A.c0i(),null),f)}},D,I,K,U,L
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
C.MH.prototype={
ON(d,e,f){return this.aCW(d,e,f)},
aCW(d,e,f){var x=0,w=A.m(y.W),v,u=2,t=[],s=this,r,q,p,o,n
var $async$ON=A.i(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(e.length===0){v=D.a6O
x=1
break}u=4
p=s.a.aA("time_entries").bo("room_id, user_id, description, started_at, ended_at, billable, hourly_rate, invoice_id, created_at").qi("room_id",e)
x=7
return A.e(A.jh(p.hb(p.he("started_at","lt."+d.cZ())),p.$ti.c).aav("ended_at.is.null,ended_at.gte."+f.cZ()).fE("started_at",!1),$async$ON)
case 7:r=h
p=J.bW(r,new C.b7y(),y.cn)
p=A.K(p,p.$ti.i("ak.E"))
v=new C.uc(p,!1,y.W)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.G(n)
p=q
if(p instanceof A.r6&&p.b==="42P01"){v=D.fmh
x=1
break}throw n
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$ON,w)},
Or(d){return this.aCh(d)},
aCh(d){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Or=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=D.a6P
x=1
break}u=4
x=7
return A.e(s.a.aA("invoices").tj().qi("room_id",d).fE("created_at",!1),$async$Or)
case 7:r=f
p=J.bW(r,new C.b7x(),y.aa)
p=A.K(p,p.$ti.i("ak.E"))
v=new C.uc(p,!1,y.H)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.G(n)
p=q
if(p instanceof A.r6&&p.b==="42P01"){v=D.fmg
x=1
break}throw n
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Or,w)},
Ol(d){return this.aC8(d)},
aC8(d){var x=0,w=A.m(y.E),v,u=this,t,s
var $async$Ol=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:if(d.length===0){v=O.UY
x=1
break}s=J
x=3
return A.e(u.a.aA("evidence_items").bo("room_id, file_size_bytes").qi("room_id",d),$async$Ol)
case 3:t=s.bW(f,new C.b7w(),y.P)
t=A.K(t,t.$ti.i("ak.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Ol,w)},
Ou(d){return this.aCn(d)},
aCn(d){var x=0,w=A.m(y.aN),v,u=this,t,s,r,q,p,o,n
var $async$Ou=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:if(d.length===0){v=B.cA
x=1
break}t=y.N
t=A.C(t,t)
n=J
x=3
return A.e(u.a.aA("profiles").bo("id, display_name").qi("id",d),$async$Ou)
case 3:s=n.aL(f),r=y.f
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
return A.l($async$Ou,w)}}
C.C_.prototype={
cP(){return D.fht}}
C.re.prototype={
FT(d){var x=J.ez(this.d,new C.b7h(d))
x=A.it(new A.dI(x,new C.b7i(),x.$ti.i("dI<1,f>")))
return x==null?"Room":x},
btr(d){var x=this.w.h(0,d)
return x==null?"Member":x}}
C.rf.prototype={
H(){return"ReportPeriodPreset."+this.b}}
C.u3.prototype={
a_(d){var x,w,v,u
switch(this.a.a){case 0:x=A.cg(A.b2(d),A.b8(d),A.bN(d),0,0).kp(0-A.e8(A.air(d)-1,0,0,0,0).a)
return new A.BY(x.kp(6048e8),x)
case 1:w=A.cg(A.b2(d),A.b8(d),1,0,0)
return new A.BY(A.b8(d)===12?A.cg(A.b2(d)+1,1,1,0,0):A.cg(A.b2(d),A.b8(d)+1,1,0,0),w)
case 2:return new A.BY(d,d.kp(-2592e9))
case 3:v=this.b
v.toString
u=this.c
u.toString
v=A.cg(A.b2(v),A.b8(v),A.bN(v),0,0)
return new A.BY(A.cg(A.b2(u),A.b8(u),A.bN(u),0,0).kp(864e8),v)}},
gkH(){var x,w
switch(this.a.a){case 0:x="This week"
break
case 1:x="This month"
break
case 2:x="Last 30 days"
break
case 3:x=this.b
x.toString
x=C.cfq(x)
w=this.c
w.toString
w=x+" \u2013 "+C.cfq(w)
x=w
break
default:x=null}return x},
k(d,e){if(e==null)return!1
return e instanceof C.u3&&e.a===this.a&&J.o(e.b,this.b)&&J.o(e.c,this.c)},
gt(d){return A.a9(this.a,this.b,this.c,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b)}}
C.pL.prototype={
WS(d){var x,w=this.e
if(w==null)w=d
x=B.f.ao(w.eE(this.d).a,1e6)
return x<=0?0:x/3600}}
C.An.prototype={
gbE(){return this.a}}
C.uc.prototype={}
C.ajK.prototype={
ct(d,e){var x=null,w=e.T($.c25(),y.Z),v=A.d(d).ok.at
if(v==null)v=x
else v=v.ft(A.d(d).ax.a===B.p?B.C:B.D,B.ao,1.5)
return A.a2(A.c([A.p("REPORTS",x,x,x,x,x,v,x,x,x),B.R,A.ei(w,new C.b7Q(this,d,e),new C.b7R(this,d,e),new C.b7S(),!1,!0,!1)],y.p),B.S,D.fB8,B.r,B.v,0,B.x)},
baB(d,e){var x=e.T($.c9s(),y.a)
return A.a2(A.c([this.b8v(d,e),B.R,A.ei(x,new C.b7M(this,d,e),new C.b7N(this,d,e),new C.b7O(),!1,!0,!1)],y.p),B.S,null,B.r,B.v,0,B.x)},
b8v(d,e){var x,w,v=null,u=e.T($.aCg(),y.j),t=y.af
t=I.bas(D.fyN,new C.b7K(d,e),D.eYx,A.dl([u.a],t),t)
x=u.gkH()
w=A.d(d).ok.Q
if(w==null)w=v
else w=w.V(A.d(d).ax.a===B.p?B.C:B.D)
return A.a2(A.c([t,B.bW,A.p("Window: "+x,v,v,v,v,v,w,v,v,v)],y.p),B.S,v,B.r,B.v,0,B.x)},
aOt(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.d(d).ok,f=e.e
if(f.b)return i.al3(d,D.e0x,"Time tracking data unavailable","The time-tracking module is not enabled on this workspace yet. Billable-hours reporting appears once it ships.")
x=f.a
if(x==null)x=D.rt
w=new A.aE(Date.now(),0,!1)
v=C.c7P(x,w)
u=C.clK(x,w)
t=C.c76(x,w)
s=C.c75(x,w)
r=g.at
if(r==null)r=h
else r=r.ft(A.d(d).ax.a===B.p?B.C:B.D,B.ao,1.2)
r=A.p("BILLABLE HOURS",h,h,h,h,h,r,h,h,h)
q=C.Cj(v)
p=g.f
q=A.p(q,h,h,h,h,h,p==null?h:p.d6(B.ao),h,h,h)
p=e.a.gkH()
o=g.Q
n=o==null
if(n)m=h
else m=o.V(A.d(d).ax.a===B.p?B.C:B.D)
l=y.p
m=A.ao(A.c([q,B.b6,new A.X(D.ajB,A.p("billable \xb7 "+p.toLowerCase(),h,h,h,h,h,m,h,h,h),h)],l),B.eN,h,B.r,B.v,0,h,h)
q=u>0
if(q)p=A.d(d).ax.fy
else p=A.d(d).ax.a===B.p?B.C:B.D
p=A.aT(B.r1,p,h,h,16)
k=q?C.Cj(u)+" unbilled":"Everything is invoiced"
if(n)q=h
else{if(q)j=A.d(d).ax.fy
else j=A.d(d).ax.a===B.p?B.C:B.D
j=o.dZ(j,q?B.aU:h)
q=j}q=A.c([r,B.ai,m,B.ai,A.ao(A.c([p,B.ls,A.aD(A.p(k,h,h,h,h,h,q,h,h,h),1,h)],l),B.y,h,B.r,B.v,0,h,h)],l)
if(t.a!==0){r=A.c([B.R,i.apQ(d,"By room")],l)
for(p=A.t(t).i("cW<1,2>"),p=A.rr(new A.cW(t,p),5,p.i("z.E")),p=new A.B1(J.aL(p.a),p.b,A.t(p).i("B1<1>"));p.q();){m=p.gI()
r.push(i.a3z(d,e.FT(m.a),C.Cj(m.b)))}B.i.L(q,r)}if(s.a!==0){r=A.c([B.R,i.apQ(d,"By member")],l)
for(p=A.t(s).i("cW<1,2>"),p=A.rr(new A.cW(s,p),5,p.i("z.E")),p=new A.B1(J.aL(p.a),p.b,A.t(p).i("B1<1>")),m=e.w;p.q();){l=p.gI()
k=m.h(0,l.a)
if(k==null)k="Member"
r.push(i.a3z(d,k,C.Cj(l.b)))}B.i.L(q,r)}if(x.length===0){if(n)r=h
else r=o.V(A.d(d).ax.a===B.p?B.C:B.D)
q.push(new A.X(P.qM,A.p("No time entries in this window.",h,h,h,h,h,r,h,h,h),h))}r=A.a2(q,B.S,h,B.r,B.v,0,B.x)
q=A.d(d).ax.a===B.p?B.bE:B.M
return A.f8(new A.X(B.aC,r,h),q,h,h,h,B.a5)},
aQ2(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=A.d(d).ok,m=A.C(y.cN,y.r)
for(x=0;x<4;++x)m.l(0,B.DX[x],0)
for(w=J.aL(e.d);w.q();){v=w.gI().f
u=m.h(0,v)
m.l(0,v,(u==null?0:u)+1)}w=n.at
if(w==null)w=o
else w=w.ft(A.d(d).ax.a===B.p?B.C:B.D,B.ao,1.2)
w=A.p("CASE STATUS OVERVIEW",o,o,o,o,o,w,o,o,o)
v=y.p
u=A.c([],v)
for(t=n.Q,x=0;x<4;++x){s=B.DX[x]
r=C.cfr(s)
q=m.h(0,s)
p=t==null?o:t.d6(B.cy)
p=A.p(r+" \xb7 "+A.q(q),o,o,o,o,o,p,o,o,o)
r=A.d(d).ax.a===B.p?B.d_:B.d0
u.push(Q.t9(o,r,p,new A.b0(A.d(d).ax.a===B.p?B.aB:B.cE,1,B.P,-1),B.bI))}m=A.a2(A.c([w,B.ai,A.i0(u,B.cM,8,8)],v),B.S,o,B.r,B.v,0,B.x)
w=A.d(d).ax.a===B.p?B.bE:B.M
return A.f8(new A.X(B.aC,m,o),w,o,o,o,B.a5)},
bek(d,e){var x,w,v=null,u=A.d(d).ok,t=e.r,s=u.at
if(s==null)s=v
else s=s.ft(A.d(d).ax.a===B.p?B.C:B.D,B.ao,1.2)
s=A.c([A.p("STORAGE BY ROOM",v,v,v,v,v,s,v,v,v),B.ai],y.p)
if(t.gW(t)){x=u.Q
if(x==null)x=v
else x=x.V(A.d(d).ax.a===B.p?B.C:B.D)
s.push(A.p("No evidence files stored yet.",v,v,v,v,v,x,v,v,v))}else for(x=t.gev(),x=x.n5(x,8),x=x.gU(x);x.q();){w=x.gI()
s.push(this.a3z(d,e.FT(w.a),C.c7p(w.b)))}s=A.a2(s,B.S,v,B.r,B.v,0,B.x)
x=A.d(d).ax.a===B.p?B.bE:B.M
return A.f8(new A.X(B.aC,s,v),x,v,v,v,B.a5)},
aV4(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.d(d).ok,m=Date.now(),l=f.e,k=l.a
if(k==null)k=D.rt
x=l.b?o:C.c7P(k,new A.aE(m,0,!1))
m=f.f
l=m.b
if(l)w=o
else{m=m.a
w=C.c7M(m==null?D.xc:m)}m=f.r.geC()
v=m.iL(m,0,new C.b7G())
m=n.at
if(m==null)m=o
else m=m.ft(A.d(d).ax.a===B.p?B.C:B.D,B.ao,1.2)
m=A.p("EXECUTIVE SUMMARY",o,o,o,o,o,m,o,o,o)
u=p.a5l(d,"Billable hours",x==null?"\u2014":C.Cj(x))
t=w==null
s=p.a5l(d,"Invoiced",t?"\u2014":C.bYU(w.a))
r=t?"\u2014":C.bYU(w.b)
q=y.p
r=A.c([m,B.ai,A.c3J(2.2,A.c([u,s,p.apM(d,"Outstanding",r,!t&&w.b>0),p.a5l(d,"Storage used",C.c7p(v))],q),2,8,8,B.xJ,!0)],q)
if(l){m=n.Q
if(m==null)m=o
else m=m.V(A.d(d).ax.a===B.p?B.C:B.D)
r.push(new A.X(B.er,A.p("Invoicing module not enabled yet \u2014 invoiced / outstanding are unavailable.",o,o,o,o,o,m,o,o,o),o))}r.push(B.R)
r.push(A.ao(A.c([A.aD(A.hH(D.e2f,D.fyz,D.fs0,new C.b7H(p,d,e,f),o),1,o),B.bp,A.aD(A.hH(D.e2v,D.fyA,D.fsU,new C.b7I(p,d,e,f),o),1,o)],q),B.y,o,B.r,B.v,0,o,o))
m=A.a2(r,B.S,o,B.r,B.v,0,B.x)
l=A.d(d).ax.a===B.p?B.bE:B.M
return A.f8(new A.X(B.aC,m,o),l,o,o,o,B.a5)},
apM(d,e,f,g){var x,w=null,v=A.d(d).ok,u=A.d(d).ax.a===B.p?B.d_:B.d0,t=A.b1(8),s=A.bU(A.d(d).ax.a===B.p?B.aB:B.cE,B.P,1),r=v.Q
if(r==null)r=w
else r=r.V(A.d(d).ax.a===B.p?B.C:B.D)
r=A.p(e,w,1,B.at,w,w,r,w,w,w)
x=v.w
if(x==null)x=w
else x=x.dZ(g?A.d(d).ax.fy:w,B.ao)
return A.at(w,A.a2(A.c([r,B.dD,A.p(f,w,1,B.at,w,w,x,w,w,w)],y.p),B.S,w,B.ey,B.v,0,B.x),B.F,w,w,new A.az(u,w,s,t,w,w,B.X),w,w,w,w,B.cQ,w,w,w)},
a5l(d,e,f){return this.apM(d,e,f,!1)},
Ih(d,e,f){return this.aVe(d,e,f)},
aVe(d,e,f){var x=0,w=A.m(y.n),v=1,u=[],t=this,s,r,q,p
var $async$Ih=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.e(t.Hw(f),$async$Ih)
case 6:s=h
r=B.o.a6(new A.aE(Date.now(),0,!1).cZ(),0,10)
x=7
return A.e($.xY().iy(K.AP(null,A.c([K.Bw(new Uint8Array(A.b5(s)),"application/pdf","casethread-report-"+A.q(r)+".pdf")],y.S),"CaseThread executive summary \u2014 "+f.a.gkH())),$async$Ih)
case 7:v=1
x=5
break
case 3:v=2
p=u.pop()
if(d.e!=null)d.S(y.q).f.aS(A.bO(null,null,null,null,null,B.B,null,A.p("PDF export failed.",null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$Ih,w)},
QV(d,e,f){return this.aVd(d,e,f)},
aVd(a4,a5,a6){var x=0,w=A.m(y.n),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$QV=A.i(function(a7,a8){if(a7===1){u.push(a8)
x=v}for(;;)switch(x){case 0:v=3
t=new A.aE(Date.now(),0,!1)
i=a6.e.a
s=i==null?D.rt:i
r=C.c76(s,t)
q=C.c75(s,t)
h=new A.dL("")
h.a="section,key,value\n"
g=a6.a
h.a="section,key,value\n"+('meta,period,"'+g.gkH()+" ("+B.o.a6(a6.b.cZ(),0,10)+" to "+B.o.a6(a6.c.cZ(),0,10)+')"\n')
p=h
o=new C.b7J()
for(f=r,f=new A.cW(f,A.t(f).i("cW<1,2>")).gU(0);f.q();){e=f.d
e.toString
n=e
e=p
d="billable_hours_by_room,"+A.q(o.$1(a6.FT(n.a)))+","+B.l.aq(n.b,2)+"\n"
e.a+=d}for(f=q,f=new A.cW(f,A.t(f).i("cW<1,2>")).gU(0),e=a6.w;f.q();){d=f.d
d.toString
m=d
d=p
a0=e.h(0,m.a)
if(a0==null)a0="Member"
a0="billable_hours_by_member,"+A.q(o.$1(a0))+","+B.l.aq(m.b,2)+"\n"
d.a+=a0}for(f=a6.r.gev(),f=f.gU(f);f.q();){l=f.gI()
e=p
d="storage_bytes_by_room,"+A.q(o.$1(a6.FT(l.a)))+","+l.b+"\n"
e.a+=d}f=a6.f
if(f.b)a1=null
else{f=f.a
a1=C.c7M(f==null?D.xc:f)}k=a1
if(k!=null){f=p
e="executive_summary,invoiced_cents,"+k.a+"\n"
f.a+=e
e=p
f="executive_summary,outstanding_cents,"+k.b+"\n"
e.a+=f}j=B.o.a6(new A.aE(Date.now(),0,!1).cZ(),0,10)
f=$.xY()
e=p.a
x=6
return A.e(f.iy(K.AP(null,A.c([K.Bw(new Uint8Array(A.b5(B.bw.b9(e.charCodeAt(0)==0?e:e))),"text/csv","casethread-report-"+A.q(j)+".csv")],y.S),"CaseThread report \u2014 "+g.gkH())),$async$QV)
case 6:v=1
x=5
break
case 3:v=2
a3=u.pop()
if(a4.e!=null)a4.S(y.q).f.aS(A.bO(null,null,null,null,null,B.B,null,A.p("CSV export failed.",null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$QV,w)},
Hw(d){return this.aPh(d)},
aPh(d){var x=0,w=A.m(y.aH),v,u,t,s,r,q,p,o,n
var $async$Hw=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(A.cu("pdf.1",""),$async$Hw)
case 3:x=4
return A.e(A.cu("pw.1",""),$async$Hw)
case 4:A.F("pw.1")
u=F.c3e(null,null,null,null,null,null,null)
t=new A.aE(Date.now(),0,!1)
s=d.e
r=s.a
if(r==null)r=D.rt
s=s.b
q=s?null:C.c7P(r,t)
p=s?null:C.clK(r,t)
s=d.f
if(s.b)o=null
else{s=s.a
o=C.c7M(s==null?D.xc:s)}s=d.r.geC()
n=s.iL(s,0,new C.b7D())
A.F("pw.1")
A.F("pdf.1")
u.a6p(F.cei(new C.b7E(d,t,new C.b7F(),q,p,o,n,r),null,null,N.I8,null,null,null))
v=u.iv()
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Hw,w)},
apQ(d,e){var x=null,w=A.d(d).ok.Q
if(w==null)w=x
else w=w.dZ(A.d(d).ax.a===B.p?B.C:B.D,B.aU)
return new A.X(B.B2,A.p(e,x,x,x,x,x,w,x,x,x),x)},
a3z(d,e,f){var x=null,w=A.d(d).ok.Q,v=A.aD(A.p(e,x,1,B.at,x,x,w,x,x,x),1,x)
return new A.X(B.Kb,A.ao(A.c([v,A.p(f,x,x,x,x,x,w==null?x:w.d6(B.aU),x,x,x)],y.p),B.y,x,B.r,B.v,0,x,x),x)},
al3(d,e,f,g){var x,w,v=null,u=A.d(d).ok,t=A.aT(e,A.d(d).ax.a===B.p?B.C:B.D,v,v,v),s=u.z
s=A.p(f,v,v,v,v,v,s==null?v:s.d6(B.aU),v,v,v)
x=u.Q
if(x==null)x=v
else x=x.V(A.d(d).ax.a===B.p?B.C:B.D)
w=y.p
w=A.ao(A.c([t,B.bp,A.aD(A.a2(A.c([s,B.dD,A.p(g,v,v,v,v,v,x,v,v,v)],w),B.S,v,B.r,B.v,0,B.x),1,v)],w),B.S,v,B.r,B.v,0,v,v)
t=A.d(d).ax.a===B.p?B.bE:B.M
return A.f8(new A.X(B.aC,w,v),t,v,v,v,B.a5)},
aiB(d,e,f){var x,w=null,v=A.d(d).ok.z
v=A.ao(A.c([A.aD(A.p(e,w,w,w,w,w,v==null?w:v.V(A.d(d).ax.fy),w,w,w),1,w),A.bA(B.eE,w,w,w,f,w,w)],y.p),B.y,w,B.r,B.v,0,w,w)
x=A.d(d).ax.a===B.p?B.bE:B.M
return A.f8(new A.X(B.aC,v,w),x,w,w,w,B.a5)}}
C.H0.prototype={
ct(d,e){var x=null,w=e.T($.cpI(),y.u),v=e.T($.cpL(),y.F)
return A.hx(A.lW(x,x,x,x,x,x,x,x,B.a7q),x,A.ei(w,new C.bjD(this,v,d,e),new C.bjE(this,d),new C.bjF(),!1,!0,!1),x,x)},
arK(d,e){var x=null,w=A.d(d).ok.z
return A.bQ(A.p(e,x,x,x,x,x,w==null?x:w.V(A.d(d).ax.fy),x,x,x),x,x)},
b8H(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=A.d(d).ok,g=e.T($.c23(),y.X).gp()
if(g==null)g=D.eVy
x=J.ez(g,new C.bjy(f))
w=A.K(x,x.$ti.i("z.E"))
if(w.length===0)return B.aJ
x=h.at
if(x==null)x=i
else x=x.ft(A.d(d).ax.a===B.p?B.C:B.D,B.ao,1.5)
v=y.p
x=A.c([A.p("CHANGE PLAN",i,i,i,i,i,x,i,i,i),B.R],v)
for(u=w.length,t=f.c,s=y.O,r=h.Q,q=h.z,p=0;p<w.length;w.length===u||(0,A.E)(w),++p){o=w[p]
n=A.d(d).ax.a===B.p?B.bE:B.M
m=q==null?i:q.d6(B.aU)
m=A.p(o.b,i,i,i,i,i,m,i,i,i)
l=o.a
if(l==="enterprise")k="Custom pricing \u2014 contact us"
else{k=o.c
k=k===0?"Free":"$"+B.l.aq(k/100,0)+"/month"}if(r==null)j=i
else j=r.V(A.d(d).ax.a===B.p?B.C:B.D)
j=A.a2(A.c([m,A.p(k,i,i,i,i,i,j,i,i,i)],v),B.S,i,B.r,B.v,0,B.x)
x.push(new A.uX(n,B.a5,i,i,new A.X(B.aC,new A.hW(B.b8,B.r,B.v,B.y,i,B.x,i,0,A.c([new A.fX(1,B.d2,j,i),A.d2(A.p(o.c<t?"Downgrade":"Switch",i,i,i,i,i,i,i,i,i),new A.L("plan-switch-"+l,s),new C.bjz(this,d,e,o),i)],v),i),i),i))}return A.a2(x,B.S,i,B.r,B.v,0,B.x)},
Ty(d,e,f){return this.beQ(d,e,f)},
beQ(d,e,f){var x=0,w=A.m(y.n),v
var $async$Ty=A.i(function(g,h){if(g===1)return A.j(h,w)
for(;;)switch(x){case 0:x=f.a==="enterprise"||f.c>0?3:4
break
case 3:x=5
return A.e(U.a99(d,e,f),$async$Ty)
case 5:x=1
break
case 4:d.S(y.q).f.aS(D.fkM)
case 1:return A.k(v,w)}})
return A.l($async$Ty,w)},
TW(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=A.d(d).ok,k=f.a.h(0,g.c)
if(k==null)k=0
x=e.aaO(g)
w=x>0
v=w?B.l.aw(k/x,0,1):0
w=k>=x&&w
u=A.d(d).ax.a===B.p?B.bE:B.M
t=l.z
t=A.aD(A.p(h,m,m,m,m,m,t==null?m:t.d6(B.cy),m,m,m),1,m)
s=A.q(i.$1(k))
r=A.q(i.$1(x))
q=l.Q
p=q==null
if(p)o=m
else{if(w)o=A.d(d).ax.fy
else o=A.d(d).ax.a===B.p?B.C:B.D
o=q.dZ(o,w?B.aU:m)}n=y.p
o=A.ao(A.c([t,A.p(s+" / "+r,m,m,m,m,m,o,m,m,m)],n),B.y,m,B.r,B.v,0,m,m)
t=A.d(d).ax.a===B.p?B.aB:B.cE
if(w)s=A.d(d).ax.fy
else s=A.d(d).ax.a===B.p?B.c7:B.ac
s=A.c([o,B.ai,A.aW1(t,s,m,v,m)],n)
if(w)B.i.L(s,A.c([B.te,A.p("Limit reached \u2014 upgrades unlock more.",m,m,m,m,m,p?m:q.V(A.d(d).ax.fy),m,m,m)],n))
return A.f8(new A.X(B.aC,A.a2(s,B.S,m,B.r,B.v,0,B.x),m),u,m,m,m,B.a5)},
alG(d,e,f){var x,w,v=null,u=A.d(d),t=A.d(d).ax.a===B.p?B.bE:B.M
u=u.ok.z
x=A.aD(A.p(e,v,v,v,v,v,u,v,v,v),1,v)
w=f>=2147483647?"Unlimited":""+f
return A.f8(new A.X(B.ny,A.ao(A.c([x,A.p(w,v,v,v,v,v,u==null?v:u.d6(B.cy),v,v,v)],y.p),B.y,v,B.r,B.v,0,v,v),v),t,v,v,v,B.a5)}}
C.TF.prototype={
gauy(){var x=this.f
return A.cg(A.b2(x),A.b8(x),A.bN(x),0,0)},
Y(){var x=null
return new C.a25(new A.pu(!1,$.ad()),new A.bq(x,y.B),new A.bq(x,y.t),x,A.C(y.bw,y.aI),x,!0,x)}}
C.a25.prototype={
gml(){var x=this.d
return x===$?this.d=new A.a5F(this.a.r,$.ad()):x},
gw6(){var x,w=this.e
if(w===$){x=this.a.c
x=x==null?null:x.a
w=this.e=new A.MJ(x,$.ad())}return w},
gpP(){var x,w=this.f
if(w===$){x=this.a.c
x=x==null?null:x.b
w=this.f=new A.MJ(x,$.ad())}return w},
ghD(){this.a.toString
return null},
ho(d,e){var x=this
x.fa(x.gml(),"entry_mode")
x.fa(x.gw6(),"selected_start")
x.fa(x.gpP(),"selected_end")
x.fa(x.r,"autovalidate")},
m(){var x=this
x.gml().m()
x.gw6().m()
x.gpP().m()
x.r.m()
x.aKO()},
a37(){var x,w=this,v=w.gml(),u=v.y,t=u==null
if((t?A.t(v).i("aN.T").a(u):u)!==B.eq)v=(t?A.t(v).i("aN.T").a(u):u)===B.ld
else v=!0
if(v)if(!w.x.gaf().kS()){w.v(new C.bsR(w))
return}if(w.gakP()){v=w.gw6()
u=v.y
v=u==null?A.t(v).i("aN.T").a(u):u
v.toString
u=w.gpP()
t=u.y
u=t==null?A.t(u).i("aN.T").a(t):t
u.toString
x=new A.JR(v,u,y.T)}else x=null
v=w.c
v.toString
A.an(v,!1).b1(x)},
a2O(){var x=this.c
x.toString
A.an(x,!1).b1(null)},
a31(){this.v(new C.bsQ(this))},
RX(d){var x=this.a
if(d.jp(x.d)||d.kF(x.e))return!1
return!0},
b0Y(d){this.v(new C.bsS(this,d))},
aYP(d){this.v(new C.bsP(this,d))},
gakP(){var x=this.gw6(),w=x.y
if((w==null?A.t(x).i("aN.T").a(w):w)!=null){x=this.gpP()
w=x.y
x=(w==null?A.t(x).i("aN.T").a(w):w)!=null}else x=!1
return x},
C(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2="Select range",b3={}
A.d(b4)
x=y.w
w=A.aA(b4,B.dW,x).w.geI()
A.c7(b4,B.aA,y.y).toString
v=A.qp(b4)
A.d(b4)
u=A.oE(b4)
b3.a=null
t=b0.gml()
s=t.y
r=s==null
if((r?A.t(t).i("aN.T").a(s):s)!==B.eP)q=(r?A.t(t).i("aN.T").a(s):s)===B.eq
else q=!0
switch(r?A.t(t).i("aN.T").a(s):s){case B.eP:case B.nq:t=b0.a.fr
s=b0.gw6()
r=s.y
s=r==null?A.t(s).i("aN.T").a(r):r
r=b0.gpP()
p=r.y
r=p==null?A.t(r).i("aN.T").a(p):p
p=b0.a
o=p.d
n=p.e
m=p.dy
p=p.gauy()
l=b0.gakP()?b0.gRC():b1
if(q){k=b0.a.db
k=A.aT(B.lW,b1,b1,b1,b1)
k=A.bz(b1,b1,b1,k,b1,b1,b0.gIA(),B.aa,b1,b1,"Switch to input",b1)}else k=b1
b0.a.toString
b3.a=new C.aoA(s,r,o,n,m,p,b0.gaky(),b0.gakd(),l,b0.gRv(),"Save",b2,t,k,b0.w)
j=A.aA(b4,B.f6,x).w.a
i=v.fx
if(i==null){x=u.fx
x.toString
i=x}h=v.fy
if(h==null)h=u.gNe()
g=v.go
if(g==null)g=u.gNf()
f=v.id
if(f==null)f=u.id
e=B.aa
break
case B.eq:case B.ld:x=b0.a.fr
t=b0.gw6()
s=t.y
if(s==null)s=A.t(t).i("aN.T").a(s)
r=b0.gpP()
p=r.y
if(p==null)p=A.t(r).i("aN.T").a(p)
o=b0.a.gauy()
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
t=t==null?b1:A.cg(A.b2(t),A.b8(t),A.bN(t),0,0)
r=r==null?b1:A.cg(A.b2(r),A.b8(r),A.bN(r),0,0)
k=A.a2(A.c([B.dl,new C.a3L(t,r,A.cg(A.b2(d),A.b8(d),A.bN(d),0,0),A.cg(A.b2(a0),A.b8(a0),A.bN(a0),0,0),b0.gaky(),b0.gakd(),a4,a5,a3,a6,a7,a8,a9,!0,a2,l,a1,k,b0.x),B.dl],y.p),B.y,b1,B.r,B.v,0,B.x)
if(q){b0.a.toString
t=A.bz(b1,b1,b1,B.Ou,b1,b1,b0.gIA(),B.aa,b1,b1,"Switch to calendar",b1)}else t=b1
b0.a.toString
b3.a=new C.ase(s,p,o,new A.aP(b1,m,new A.X(B.B6,k,b1),b1),b0.gRC(),b0.gRv(),"OK","Cancel",b2,t,x,b1)
if(n)j=B.FW
else j=D.fk8
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
return A.Dq(b1,x,A.aDA(A.Ll(new A.ej(new C.bsT(b3),b1),1.3),b1,B.ep,b1,B.ak,b1,s,t),B.cO,b1,i,e,B.oa,h,f,g)}}
C.aoA.prototype={
C(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null
A.d(a3)
x=A.c7(a3,B.aA,y.y)
x.toString
w=y.w
v=A.aA(a3,B.dW,w).w.geI()
u=A.qp(a3)
A.d(a3)
t=A.oE(a3)
s=u.fr
if(s==null)s=t.fr
r=u.k1
if(r==null)r=t.gNa()
q=u.k2
if(q==null)q=t.gNb()
p=q.b3(0.38)
o=u.k3
if(o==null)o=t.gNc()
n=u.k4
if(n==null)n=t.gNd()
m=n==null?a2:n.lg(q)
n=a1.ax
l=a1.c
k=a1.d
j=C.cjg(x,n,l,k)
i=C.cjf(x,n,l,k,new A.aE(Date.now(),0,!1))
x=o==null
if(x)h=a2
else h=o.lg(l!=null?q:p)
if(x)g=a2
else g=o.lg(k!=null?q:p)
f=A.ow(a2,a2,a2,a2,p,a2,a2,a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)
e=new A.ea(a2,a2,a2,a2,a2,q,a2,a2,a2)
x=y.p
d=A.c([],x)
if(v===B.ez&&a1.ay!=null){a0=a1.ay
a0.toString
d.push(a0)}d.push(A.bA(A.p(a1.as,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a1.z,a2,f))
d.push(B.b6)
w=A.aA(a3,B.ol,w).w.a.a<360?42:72
a0=a1.at
x=A.c([new A.aP(w,a2,a2,a2),A.aD(A.bx(a2,a2,a2,A.a2(A.c([A.p(a0,a2,1,B.at,a2,a2,m,a2,a2,a2),B.ai,A.ao(A.c([A.p(j,a2,1,B.at,a2,a2,h,a2,a2,a2),A.p(" \u2013 ",a2,a2,a2,a2,a2,h,a2,a2,a2),new A.fz(1,B.ck,A.p(i,a2,1,B.at,a2,a2,g,a2,a2,a2),a2)],x),B.y,a2,B.r,B.v,0,a2,a2),B.a1],x),B.S,a2,B.r,B.v,0,B.x),!1,a2,a2,a2,!0,a2,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a0+" "+j+" to "+i,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,B.a9,a2),1,a2)],x)
if(v===B.d6&&a1.ay!=null){w=a1.ay
w.toString
x.push(new A.X(B.fk,A.vI(w,e,a2),a2))}x=A.lW(d,e,r,new C.aio(A.ao(x,B.y,a2,B.r,B.v,0,a2,a2),D.fjP,a2),0,e,new A.T8(B.a6z,a2,a2,a2,a2,B.IH,a2,a1.Q,a2,a2,a2,a2,B.q2,a2),0,a2)
w=a1.e
d=a1.f
a0=a1.w
l=l!=null?A.cg(A.b2(l),A.b8(l),A.bN(l),0,0):a2
k=k!=null?A.cg(A.b2(k),A.b8(k),A.bN(k),0,0):a2
w=A.cg(A.b2(w),A.b8(w),A.bN(w),0,0)
d=A.cg(A.b2(d),A.b8(d),A.bN(d),0,0)
return A.f1(!0,A.hx(x,s,new C.a1c(l,k,w,d,a1.r,A.cg(A.b2(a0),A.b8(a0),A.bN(a0),0,0),a1.x,a1.y,n,a2),a2,a2),!1,B.aa,!1,!1)}}
C.a1c.prototype={
Y(){return new C.a1d(new A.bq(null,y.B),new A.rx())}}
C.a1d.prototype={
ar(){var x,w,v,u=this
u.aQ()
x=A.Az(0,null,null)
u.x=x
x.aa(u.gbbX())
x=u.a
w=u.f=x.c
u.r=x.d
if(w==null)w=x.w
v=x.e
if(!w.jp(v)&&!w.kF(x.f))u.w=A.acD(v,w)
u.y=u.w!==0},
m(){var x=this.x
x===$&&A.b()
x.m()
this.al()},
bbY(){var x,w=this,v=w.x
v===$&&A.b()
v=v.gbt().at
v.toString
x=B.i.gdh(w.x.f).z
x.toString
if(v<=x)w.v(new C.boi(w))
else{v=w.y
v===$&&A.b()
if(!v)w.v(new C.boj(w))}},
bhv(){var x=this.c
x.toString
switch(A.d(x).w.a){case 0:case 1:A.KF()
break
case 2:case 3:case 4:case 5:break}},
bgS(d){this.bhv()
this.v(new C.bok(this,d))},
ag3(d,e,f){var x,w,v=this,u=v.w,t=f?u-e-1:u+e
u=v.a.e
x=A.cg(A.b2(u),A.b8(u)+t,1,0,0)
u=v.a
w=u.z
return new C.a45(v.f,v.r,u.w,v.gbgR(),u.e,u.f,x,u.r,w,null)},
C(d){var x,w,v,u,t,s,r=this,q=null,p=y.p,o=A.c([D.fD4],p),n=r.y
n===$&&A.b()
if(n)o.push(D.aiN)
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
p=A.c([C.cg4(new C.bol(r),s,q),C.cg4(new C.bom(r),A.acD(w,v)+1-s,t)],p)
o.push(A.aD(new C.a1e(new C.acp(p,B.a6,!1,u,q,q,q,!1,t,0,q,q,q,B.mO,B.T,q,q,B.B,B.c2,r.d),w,v,n,x,q),1,q))
return A.a2(o,B.y,q,B.r,B.v,0,B.x)}}
C.a1e.prototype={
Y(){return new C.a1f()}}
C.a1f.prototype={
ar(){var x,w,v=this
v.aQ()
x=y.k
w=y.bc
v.e=A.Q([B.GA,new A.dU(v.gaZh(),new A.c5(A.c([],x),w),y.d),B.GB,new A.dU(v.gaZj(),new A.c5(A.c([],x),w),y.e),B.yL,new A.dU(v.gaYs(),new A.c5(A.c([],x),w),y.c)],y.bv,y.V)
v.f=A.kc(!0,"Day Grid",!0,!0,null,null,!1)},
m(){var x=this.f
x===$&&A.b()
x.m()
this.al()},
aZg(d){this.v(new C.boo(this,d))},
aZi(d){var x,w=this.f
w===$&&A.b()
w.fS()
w=this.f
x=w.e
x.toString
A.nW(x).pL(w,!0)},
aZk(d){var x,w=this.f
w===$&&A.b()
w.fS()
w=this.f
x=w.e
x.toString
A.nW(x).pL(w,!1)},
aYt(d){this.v(new C.bon(this,d))},
b4E(d,e){var x,w,v,u=this.c.S(y.I).w
this.a.toString
if(u===B.c4)if(e===B.mf)x=B.mU
else x=e===B.mU?B.mf:e
else x=e
w=B.a_E.h(0,x)
w.toString
v=A.cg(A.b2(d),A.b8(d),A.bN(d)+w,0,0)
w=this.a
if(!v.jp(w.d)&&!v.kF(w.e))return v
return null},
C(d){var x,w,v,u,t=this,s=null,r=t.e
r===$&&A.b()
x=t.f
x===$&&A.b()
w=t.a.r
v=x.gci()?t.w:s
u=t.f.gci()?t.r:s
return A.ae9(r,!1,new C.a36(w,v,u,t.a.c,s),!0,x,!0,B.cd,t.gaZf(),s,s,B.a_s)}}
C.a36.prototype={
dj(d){return!this.f.AQ(this.r,d.r)||this.w!=d.w}}
C.apY.prototype={
aWE(d,e){var x,w=null,v=A.c([],y.p)
for(x=0;v.length<7;x=(x+1)%7)v.push(new A.lp(!0,new A.fm(B.ag,w,w,A.p(B.V2[x],w,w,w,w,w,d,w,w,w),w),w))
return v},
C(d){var x,w=A.d(d),v=w.ok.x.lg(w.ax.k3),u=A.c7(d,B.aA,y.y)
u.toString
x=this.aWE(v,u)
B.i.hy(x,0,B.aJ)
x.push(B.aJ)
u=A.aA(d,B.dW,y.w).w.geI()===B.ez?384:480
return new A.e5(new A.av(0,u,0,42),A.c3K(A.a__(x,!0,!1,!0),D.Ir,null,!0),null)}}
C.bFP.prototype={
Gq(d){return new C.bFT(9,Math.max((d.w-16)/7,0),8,A.xQ(d.x))},
mf(d){return!1}}
C.bFT.prototype={
act(d){return this.a*B.l.ao(d,50)},
acr(d){return Math.max(0,this.a*B.l.dR(d/50)-1)},
aWC(d,e){var x,w,v,u=this
if(u.d){x=u.b
w=u.c
v=e?w:x
return(u.a-2)*x+2*w-d-v}return d},
Oo(d){var x,w=this,v=w.a,u=B.f.aF(d,v),t=u===0||u===v-1,s=w.b,r=w.c,q=Math.max(0,(u-1)*s+r)
v=B.f.eu(d,v)
x=w.aWC(q,t)
if(t)s=r
return new A.al7(v*50,x,42,s)},
a7d(d){return 50*(B.f.eu(d-1,this.a)+1)-8}}
C.a45.prototype={
Y(){return new C.a46()}}
C.a46.prototype={
ar(){var x,w,v,u,t
this.aQ()
x=this.a.x
w=A.TG(A.b2(x),A.b8(x))
v=J.hg(w,y.J)
for(u=0;u<w;u=t){t=u+1
v[u]=A.kc(!0,"Day "+t,!0,!0,null,null,!0)}this.d=v},
bC(){var x,w,v=this
v.d0()
x=v.c.S(y.Q)
w=x==null?null:x.r
if(w!=null){x=v.a
x=x.z.AR(x.x,w)}else x=!1
if(x){x=v.d
x===$&&A.b()
x[A.bN(w)-1].fS()}},
m(){var x,w,v,u,t=this.d
t===$&&A.b()
x=t.length
w=0
for(;w<t.length;t.length===x||(0,A.E)(t),++w){v=t[w]
u=v.ax
if(u!=null)u.aX()
v.f4()}this.al()},
aSl(d){var x,w,v
if(d){x=this.c.S(y.Q)
w=x==null?null:x.w
if(w!=null){switch(w.a){case 0:case 3:v=B.lq
break
case 1:case 2:v=B.lp
break
default:v=B.Fr}x=$.as.aP$.d.c.e
x.toString
A.bab(x,0,v,B.cf,B.ak)}}},
C(b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.d(b5),b4=A.c7(b5,B.aA,y.y)
b4.toString
x=b1.a.x
w=A.b2(x)
v=A.b8(x)
u=A.TG(w,v)
b1.a.toString
t=A.cbg(w,v,b4)
s=B.l.dR((u+t)/7)
x=y.p
r=A.c([],x)
for(q=0-t+1,p=b1.gaSk(),o=y.x;q<=u;++q)if(q<1)r.push(B.r8)
else{b1.a.toString
n=A.cg(w,v,q,0,0)
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
k=k[A.bN(n)-1]
m=m.f
b5.S(o)
j=A.d(b5)
j=j.b7.ok
if(j==null){A.d(b5)
j=A.oE(b5)
j=j.gBd()}r.push(new C.a28(n,k,m,p,j,i,h,g,f,e,d,a0,l,b2))}a1=A.c([],x)
for(p=t>0,a2=0;a2<s;++a2){a3=a2*7
a4=Math.min(a3+7,r.length)
a5=B.i.dt(r,a3,a4)
b1.a.toString
a6=A.cg(w,v,a3-t+1,0,0)
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
m=A.oE(b5)
m=m.gBd()}m=new A.JA(m,!0,B.r8,b2)}else m=B.r8
B.i.hy(a5,0,m)
m=r.length
if(!(a4<m))m=a4===m&&B.f.aF(m,7)===0
else m=!0
if(m){b1.a.toString
a8=A.cg(w,v,a4-t,0,0)
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
m=A.oE(b5)
m=m.gBd()}m=new A.JA(m,!0,B.r8,b2)}else m=B.r8
a5.push(m)}B.i.L(a1,a5)}b0=A.aA(b5,B.dW,y.w).w.geI()===B.ez?384:480
return A.a2(A.c([new A.e5(new A.av(0,b0,0,1/0).Zg(58),new A.X(B.ed,new A.eh(B.d9,b2,b2,new A.lp(!0,A.p(b4.Wo(b1.a.x),b2,b2,b2,b2,b2,b3.ok.z.lg(b3.ax.k3),b2,b2,b2),b2),b2),b2),b2),new A.e5(new A.av(0,b0,0,s*42+(s-1)*8),A.c3K(A.a__(a1,!0,!1,!0),D.Ir,B.xJ,!1),b2),B.R],x),B.y,b2,B.r,B.v,0,B.x)}}
C.a28.prototype={
Y(){return new C.apZ(A.Bu())},
rX(d){return this.e.$1(d)}}
C.apZ.prototype={
m(){var x=this.d
x.R$=$.ad()
x.N$=0
this.al()},
C(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=A.d(a4),a2=a1.ax,a3=A.c7(a4,B.aA,y.y)
a3.toString
x=A.qp(a4)
A.d(a4)
w=A.oE(a4)
v=a4.S(y.I).w
u=d.a
t=u.r
s=a1.ok.z
r=new C.bt_(x,w)
q=new C.bt0(r)
p=A.aQ(y.cD)
if(u.w)p.B(0,B.a4)
u=d.a
if(u.y||u.z)p.B(0,B.ab)
u=d.d
u.sp(p)
o=y._
n=q.$1$2(new C.bsV(),p,o)
m=q.$1$2(new C.bsW(),p,o)
l=q.$1$2(new C.bsX(),p,y.b8)
if(l==null)l=B.l5
q=d.a
k=a0
if(q.y||q.z){s=s==null?a0:s.lg(n)
j=new A.jl(m,a0,a0,a0,l)
q=d.a
if(q.x&&!q.as)k=new C.a3v(t,q.y?D.GV:D.a92,v,a0)}else{j=a0
i=a0
if(q.Q){k=new C.a3v(t,D.a93,v,a0)
if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.lg(A.ax(97,q.A()>>>16&255,q.A()>>>8&255,q.A()&255))}}else if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.lg(A.ax(97,q.A()>>>16&255,q.A()>>>8&255,q.A()&255))}else if(q.at){s=s==null?a0:s.lg(a2.b)
q=x.CW
if(q==null)q=w.gBw()
j=new A.jl(a0,a0,a0,a0,l.jk(q.V(a2.b)))}}h=a3.LK(A.bN(d.a.c))
q=d.a
g=q.at?", Today":""
f=h+", "+a3.Wn(q.c)+g
a3=d.a
q=a3.y
if(q)f="Start date "+f
else if(a3.z)f="End date "+f
q=q||a3.z
e=A.at(B.ag,A.bx(a0,a0,a0,new A.lp(!0,A.p(h,a0,a0,a0,a0,a0,s,a0,a0,a0),a0),!1,a0,a0,a0,!1,a0,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,f,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,q,a0,a0,a0,a0,a0,a0,B.a9,a0),B.F,a0,a0,j,a0,a0,a0,a0,a0,a0,a0,a0)
if(k!=null)e=A.hr(e,a0,a0,k,B.aP)
return!a3.w?A.ccZ(!1,a0,!0,e,!0,l,!0,!1,a0,a3.d,a0,B.bX,a0,a0,a0,a0,a0,a3.f,a0,a0,a0,a0,a0,a0,a0,a0,new C.bsY(d),a0,a0,a0,new A.b9(new C.bsZ(d,r),y.cS),a0,a0,a0,u):e}}
C.Pr.prototype={
H(){return"_HighlightPainterStyle."+this.b}}
C.a3v.prototype={
aZ(d,e){var x,w,v,u,t,s,r=this.c
if(r===D.fDB)return
$.ar()
x=A.bj()
x.r=this.b.gp()
x.b=B.ct
w=this.d
A:{if(B.c4===w){v=!0
break A}if(B.bd===w){v=!1
break A}v=null}B:{u=D.a92===r
t=!(u&&v)
if(t){s=D.GV===r
v=s&&!v}else{s=null
v=!0}if(v){r=e.a/2
d.j3(new A.Z(r,0,r+r,0+e.b),x)
break B}if(!u)v=t?s:D.GV===r
else v=!0
if(v){d.j3(new A.Z(0,0,0+e.a/2,0+e.b),x)
break B}if(D.a93===r){d.j3(new A.Z(0,0,0+e.a,0+e.b),x)
break B}break B}},
f2(d){return!1}}
C.ase.prototype={
aW8(d,e,f,g){var x,w,v,u=A.c7(d,B.aA,y.y)
u.toString
x=this.as
w=C.cjg(u,x,e,f)
v=C.cjf(u,x,e,f,g)
if(e==null||f==null)return"Date Range"
switch(d.S(y.I).w.a){case 0:u=v+" \u2013 "+w
break
case 1:u=w+" \u2013 "+v
break
default:u=null}return u},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
A.d(d)
x=A.c7(d,B.aA,y.y)
x.toString
w=A.aA(d,B.dW,y.w).w.geI()
v=A.qp(d)
A.d(d)
u=A.oE(d)
if(w===B.d6){t=v.w
s=t==null?u.gF_():t}else s=A.d(d).ok.f
r=v.r
if(r==null)r=u.gAH()
s=s==null?j:s.V(r)
t=k.c
q=k.d
p=k.aW8(d,t,q,k.e)
o=t!=null&&q!=null?x.a8M(t)+" \u2013 "+x.a8M(q):""
n=A.chy(k.Q,k.z,w===B.ez,w,o,s,p)
x=A.bA(A.p(k.y,j,j,j,j,j,j,j,j,j),j,j,j,k.w,j,j)
t=y.p
m=new A.e5(B.HX,new A.X(B.fk,new A.eh(B.qb,j,j,A.b0y(j,A.c([x,A.bA(A.p(k.x,j,j,j,j,j,j,j,j,j),j,j,j,k.r,j,j)],t),B.a09,B.x,0,8),j),j),j)
x=A.bM(d,B.bj)
x=x==null?j:x.gcf()
x=(x==null?B.aV:x).k8(0,1.3).b4(14)
l=B.FW.aE(0,x/14)
switch(w.a){case 0:return A.o5(new C.bD1(k,!0,l,n,m))
case 1:return A.ao(A.c([n,new A.fz(1,B.ck,A.a2(A.c([A.aD(k.f,1,j),m],t),B.b4,j,B.r,B.W,0,B.x),j)],t),B.b4,j,B.r,B.W,0,j,j)}}}
C.a3L.prototype={
Y(){return new C.Px()}}
C.Px.prototype={
ar(){var x,w,v=this
v.aQ()
x=v.a
v.f=x.c
w=$.ad()
v.w=new A.bT(B.aK,w)
v.r=x.d
v.x=new A.bT(B.aK,w)},
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
t.d0()
x=t.c
x.toString
x=A.c7(x,B.aA,y.y)
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
A.c7(w,B.aA,y.y).toString
t.a="Invalid range."}}u.v(new C.bD4(t,u,x))
return t.a==null&&x==null},
amS(d){var x=this.c
x.toString
x=A.c7(x,B.aA,y.y)
x.toString
this.a.toString
return x.ayY(d)},
arP(d){var x,w=this
if(d==null){w.a.toString
x=w.c
x.toString
A.c7(x,B.aA,y.y).toString
return"Invalid format."}else if(!w.RX(d)){w.a.toString
x=w.c
x.toString
A.c7(x,B.aA,y.y).toString
return"Out of range."}return null},
RX(d){var x=this.a
if(d.jp(x.e)||d.kF(x.f))return!1
return!0},
aqY(d,e,f){var x=d.a.au8(e)
d.fc(f?x.mB(A.ec(B.Z,0,e.length,!1)):x)},
b0X(d){var x=this
x.v(new C.bD3(x,d))
if(x.a.CW)x.kS()},
aYO(d){var x=this
x.v(new C.bD2(x,d))
if(x.a.CW)x.kS()},
C(d){var x,w,v,u,t,s,r=this,q=null,p="mm/dd/yyyy"
A.d(d)
A.c7(d,B.aA,y.y).toString
x=A.zj(d)
w=x.p1
if(w==null)w=B.c9
v=r.w
v===$&&A.b()
u=x.dy
t=r.a
t.toString
v=A.aD(A.cX(q,B.as,!0,q,!0,B.B,q,A.d1(),v,q,q,q,q,q,2,A.kP(q,w,q,q,q,q,q,q,!0,q,q,q,q,q,r.y,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q,q,"Start Date",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.T,!0,q,!0,q,!1,q,B.aQ,q,q,q,q,q,t.cx,q,q,q,1,q,q,!1,"\u2022",q,r.gb0W(),q,q,q,!1,q,q,!1,q,!0,q,B.aO,q,q,q,q,q,q,q,q,q,q,q,q,!0,B.af,q,B.aG,q,q,q,q),1,q)
t=r.x
t===$&&A.b()
s=r.a
s.toString
return A.ao(A.c([v,B.b6,A.aD(A.cX(q,B.as,!1,q,!0,B.B,q,A.d1(),t,q,q,q,q,q,2,A.kP(q,w,q,q,q,q,q,q,!0,q,q,q,q,q,r.z,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q,q,"End Date",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.T,!0,q,!0,q,!1,q,B.aQ,q,q,q,q,q,s.cx,q,q,q,1,q,q,!1,"\u2022",q,r.gaYN(),q,q,q,!1,q,q,!1,q,!0,q,B.aO,q,q,q,q,q,q,q,q,q,q,q,q,!0,B.af,q,B.aG,q,q,q,q),1,q)],y.p),B.S,q,B.r,B.v,0,q,q)}}
C.a7Y.prototype={
b_(d){this.be(d)
this.nF()},
bC(){var x,w,v,u,t=this
t.d0()
x=t.bV$
w=t.gkO()
v=t.c
v.toString
v=A.ni(v)
t.fA$=v
u=t.mt(v,w)
if(w){t.ho(x,t.e8$)
t.e8$=!1}if(u)if(x!=null)x.m()},
m(){var x,w=this
w.fz$.aY(0,new C.bVd())
x=w.bV$
if(x!=null)x.m()
w.bV$=null
w.al()}}
C.aio.prototype={
C(d){return this.c},
$iFB:1,
guN(){return this.d}}
C.acp.prototype={
at8(d){return this.dx}}
var z=a.updateTypes(["~()","B(fC)","B(pL)","Y(Y,pL)","u5(b4<f,Y>)","~(aE?)","~(B)","~(f)","f(Y)","N<B_?>(am)","N<fC>(am)","fC()","N<ul>(am)","pL(@)","An(@)","MH(am)","u3()","f(f)","N<re>(am)","h(re)","N<~>(bm<rf>)","u5(f,f)","JB(m2)","u5(qK)","h?(fC)","h(ul)","~(aE)","~(oe)","~(ok)","~(lo)","C_()"])
C.bZL.prototype={
$1(d){d.T($.dy(),y.L)
return d.T($.c1U(),y.C).Oz()},
$S:z+9}
C.bZG.prototype={
$1(d){return this.aBw(d)},
aBw(d){var x=0,w=A.m(y.m),v,u,t,s,r
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(d.T($.c23().glO(),y.ao),$async$$1)
case 3:u=f
t=J
s=u
r=C
x=4
return A.e(d.T($.cpK().glO(),y.U),$async$$1)
case 4:v=t.cqh(s,new r.bZE(f),new C.bZF(u))
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+10}
C.bZE.prototype={
$1(d){var x=this.a
x=x==null?null:x.a
if(x==null)x="free"
return d.a===x},
$S:z+1}
C.bZF.prototype={
$0(){return J.kA(this.a)},
$S:z+11}
C.bZM.prototype={
$1(d){d.T($.dy(),y.L)
return d.T($.c1U(),y.C).OA()},
$S:z+12}
C.b7y.prototype={
$1(d){return C.cAJ(A.aM(y.f.a(d),y.N,y.z))},
$S:z+13}
C.b7x.prototype={
$1(d){var x,w,v=A.aM(y.f.a(d),y.N,y.z),u=v.h(0,"id")
u=J.bd(u==null?"":u)
x=v.h(0,"room_id")
if(x!=null)J.bd(x)
x=v.h(0,"status")
x=J.bd(x==null?"draft":x)
w=v.h(0,"total_cents")
v=w==null?v.h(0,"amount_cents"):w
return new C.An(u,x,B.l.F(A.dN(v==null?0:v)))},
$S:z+14}
C.b7w.prototype={
$1(d){return A.aM(y.f.a(d),y.N,y.z)},
$S:293}
C.c_s.prototype={
$1(d){return new C.MH(d.T($.dD(),y.cx))},
$S:z+15}
C.c_r.prototype={
$1(d){return this.aBD(d)},
aBD(d){var x=0,w=A.m(y.D),v,u,t,s,r,q,p
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:d.T($.dy(),y.L)
q=A
p=J
x=4
return A.e(d.T($.iI(),y.h).Gu(),$async$$1)
case 4:x=3
return A.e(q.jH(p.bW(f,new C.c_q(d),y.as),!1,y.v),$async$$1)
case 3:u=f
t=A.c([],y.cR)
for(s=J.aL(u);s.q();){r=s.gI()
if(r.b)t.push(r.a)}v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:353}
C.c_q.prototype={
$1(d){return this.aBC(d)},
aBC(d){var x=0,w=A.m(y.v),v,u=this,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=A
s=d
x=3
return A.e(u.a.T($.j3().$1(d.a).glO(),y.g),$async$$1)
case 3:v=new t.avg(s,f.iH(B.a0t))
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:1137}
C.b7h.prototype={
$1(d){return d.a===this.a},
$S:58}
C.b7i.prototype={
$1(d){return d.b},
$S:392}
C.c_p.prototype={
$1(d){return this.aBB(d)},
aBB(d){var x=0,w=A.m(y.s),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.i(function(a0,a1){if(a0===1)return A.j(a1,w)
for(;;)switch(x){case 0:d.T($.dy(),y.L)
x=3
return A.e(d.T($.c25().glO(),y.ch),$async$$1)
case 3:u=a1
t=d.T($.aCg(),y.j)
s=t.a_(new A.aE(Date.now(),0,!1))
r=y.N
q=J.bW(u,new C.c_o(),r)
p=A.K(q,q.$ti.i("ak.E"))
o=d.T($.cpU(),y.A)
if(p.length===0){v=new C.re(t,s.b,s.a,B.DT,D.a6O,D.a6P,B.a_y,B.cA)
x=1
break}q=s.b
n=s.a
x=4
return A.e(A.jH(A.c([o.ON(n,p,q),o.Or(p),o.Ol(p)],y.a9),!1,y.K),$async$$1)
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
return A.e(o.Ou(f),$async$$1)
case 5:e=a1
v=new C.re(t,q,n,u,k,j,C.cLf(i),e)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+18}
C.c_o.prototype={
$1(d){return d.a},
$S:392}
C.bir.prototype={
$1(d){return d==null?null:A.lm(J.bd(d))},
$S:166}
C.c14.prototype={
$1(d){return d.f},
$S:z+2}
C.c15.prototype={
$2(d,e){return d+e.WS(this.a)},
$S:z+3}
C.c1a.prototype={
$1(d){return d.f&&d.w==null},
$S:z+2}
C.c1b.prototype={
$2(d,e){return d+e.WS(this.a)},
$S:z+3}
C.bXd.prototype={
$2(d,e){var x=this.a,w=x.h(0,e)
w.toString
x=x.h(0,d)
x.toString
return B.l.bp(w,x)},
$S(){return this.b.i("w(0,0)")}}
C.bYV.prototype={
$1(d){return A.q(d.h(0,1))+","},
$S:90}
C.b7S.prototype={
$0(){return B.be},
$S:23}
C.b7R.prototype={
$2(d,e){return this.a.aiB(this.b,"Could not load reports.",new C.b7P(this.c))},
$S:98}
C.b7P.prototype={
$0(){return this.a.bz($.c25())},
$S:0}
C.b7Q.prototype={
$1(d){var x=this
if(J.f5(d))return x.a.al3(x.b,R.Oc,"No billing visibility","Reports cover rooms you own or where your role grants billing access.")
return x.a.baB(x.b,x.c)},
$S:1139}
C.b7O.prototype={
$0(){return B.be},
$S:23}
C.b7N.prototype={
$2(d,e){return this.a.aiB(this.b,"Could not load report data.",new C.b7L(this.c))},
$S:98}
C.b7L.prototype={
$0(){return this.a.bz($.c9s())},
$S:0}
C.b7M.prototype={
$1(d){var x=this.a,w=this.b
return A.a2(A.c([x.aOt(w,d),B.R,x.aQ2(w,d),B.R,x.bek(w,d),B.R,x.aV4(w,this.c,d)],y.p),B.S,null,B.r,B.v,0,B.x)},
$S:z+19}
C.b7K.prototype={
$1(d){return this.aBj(d)},
aBj(d){var x=0,w=A.m(y.n),v,u=this,t,s,r,q
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:q=d.ga9(d)
x=q===D.Fj?3:5
break
case 3:x=6
return A.e(C.c7K(u.a,A.cg(2020,1,1,0,0),new A.aE(Date.now(),0,!1)),$async$$1)
case 6:t=f
if(t==null){x=1
break}s=t.a
r=t.b
u.b.X($.aCg().gcj(),y.M).saW(new C.u3(D.Fj,s,r))
x=4
break
case 5:u.b.X($.aCg().gcj(),y.M).saW(new C.u3(q,null,null))
case 4:case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+20}
C.b7G.prototype={
$2(d,e){return d+e},
$S:89}
C.b7H.prototype={
$0(){var x=this
return x.a.Ih(x.b,x.c,x.d)},
$S:0}
C.b7I.prototype={
$0(){var x=this
return x.a.QV(x.b,x.c,x.d)},
$S:0}
C.b7J.prototype={
$1(d){return'"'+A.cy(d,'"','""')+'"'},
$S:18}
C.b7D.prototype={
$2(d,e){return d+e},
$S:89}
C.b7F.prototype={
$2(d,e){var x,w="pw.1",v=null
A.F(w)
A.F(w)
A.F(w)
A.F(w)
x=E.cs(d,F.co(v,v,v,v,v,v,v,v,v,G.aD,v,v,11,v,v,v,!0,v,v,v,v))
A.F(w)
A.F(w)
A.F(w)
return E.MU(A.c([x,E.cs(e,F.co(v,v,v,v,v,v,v,v,v,G.aD,v,v,11,v,G.e9,v,!0,v,v,v,v))],y.o),M.no,M.zN)},
$S:z+21}
C.b7E.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="pw.1",h=null,g="n/a"
A.F(i)
A.F(i)
A.F(i)
A.F(i)
A.F(i)
A.F(i)
x=H.aeK(E.cs("CaseThread \u2014 Executive Summary",F.co(h,h,h,h,h,h,h,h,h,G.aD,h,h,20,h,G.e9,h,!0,h,h,h,h)),0,h)
A.F(i)
w=j.a
v=w.a.gkH()
u=j.b
t=B.o.a6(u.i0().j(0),0,16)
A.F(i)
A.F("pdf.1")
t=E.cs("Window: "+v+" \xb7 Generated "+t,F.co(h,T.acX,h,h,h,h,h,h,h,G.aD,h,h,10,h,h,h,!0,h,h,h,h))
A.F(i)
v=E.fj(h,16,h)
A.F(i)
s=H.aeK(h,2,"Totals")
r=j.c
q=j.d
q=r.$2("Billable hours",q==null?g:C.Cj(q))
p=j.e
p=r.$2("Unbilled hours",p==null?g:C.Cj(p))
o=j.f
n=o==null
m=r.$2("Invoiced",n?g:C.bYU(o.a))
o=r.$2("Outstanding (draft + sent)",n?g:C.bYU(o.b))
l=r.$2("Storage used",C.c7p(j.r))
A.F(i)
k=E.fj(h,16,h)
A.F(i)
k=A.c([x,t,v,s,q,p,m,o,l,k,H.aeK(h,2,"Billable hours by room")],y.o)
l=j.w
o=C.c76(l,u)
m=A.t(o).i("cW<1,2>")
m=A.rr(new A.cW(o,m),10,m.i("z.E"))
o=y.l
B.i.L(k,A.ib(m,new C.b7A(r,w),A.t(m).i("z.E"),o))
A.F(i)
k.push(E.fj(h,16,h))
A.F(i)
k.push(H.aeK(h,2,"Billable hours by member"))
u=C.c75(l,u)
l=A.t(u).i("cW<1,2>")
l=A.rr(new A.cW(u,l),10,l.i("z.E"))
B.i.L(k,A.ib(l,new C.b7B(r,w),A.t(l).i("z.E"),o))
A.F(i)
k.push(E.fj(h,16,h))
A.F(i)
k.push(H.aeK(h,2,"Case status"))
B.i.L(k,new A.ac(B.DX,new C.b7C(r,w),y.b))
return E.Db(k,M.mp)},
$S:z+22}
C.b7A.prototype={
$1(d){return this.a.$2(this.b.FT(d.a),C.Cj(d.b))},
$S:z+4}
C.b7B.prototype={
$1(d){return this.a.$2(this.b.btr(d.a),C.Cj(d.b))},
$S:z+4}
C.b7C.prototype={
$1(d){return this.a.$2(C.cfr(d),""+J.ez(this.b.d,new C.b7z(d)).gu(0))},
$S:z+23}
C.b7z.prototype={
$1(d){return d.f===this.a},
$S:58}
C.bjD.prototype={
$1(d){var x=this,w=x.a,v=x.c
return A.ei(x.b,new C.bjA(w,v,x.d,d),new C.bjB(w,v),new C.bjC(),!1,!0,!1)},
$S:z+24}
C.bjA.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=r.d,m=A.d(o).ok,l=A.d(o).ax.a===B.p?B.bE:B.M,k=A.aT(S.CM,A.d(o).ax.a===B.p?B.C:B.D,q,q,28),j=m.w
j=j==null?q:j.d6(B.aU)
j=A.p(n.b+" plan",q,q,q,q,q,j,q,q,q)
x=n.c
x=x===0?"Free forever":"$"+B.l.aq(x/100,0)+"/month"
w=m.Q
if(w==null)w=q
else w=w.V(A.d(o).ax.a===B.p?B.C:B.D)
v=y.p
l=A.f8(new A.X(B.aC,A.ao(A.c([k,B.bp,A.aD(A.a2(A.c([j,A.p(x,q,q,q,q,q,w,q,q,q)],v),B.S,q,B.r,B.v,0,B.x),1,q)],v),B.y,q,B.r,B.v,0,q,q),q),l,q,q,q,B.a5)
w=m.at
k=w==null
if(k)j=q
else j=w.ft(A.d(o).ax.a===B.p?B.C:B.D,B.ao,1.5)
j=A.p("THIS MONTH",q,q,q,q,q,j,q,q,q)
x=p.TW(o,n,d,L.a8m,"Evidence storage",C.cLO())
u=p.TW(o,n,d,L.a8j,"AI analyses",C.c7R())
t=p.TW(o,n,d,L.a8k,"Transcription minutes",C.c7R())
s=p.TW(o,n,d,L.a8l,"OSINT lookups",C.c7R())
if(k)k=q
else k=w.ft(A.d(o).ax.a===B.p?B.C:B.D,B.ao,1.5)
return A.fM(A.c([l,B.b_,j,B.R,x,u,t,s,B.b_,A.p("CASE LIMITS",q,q,q,q,q,k,q,q,q),B.R,p.alG(o,"Case rooms",n.d),p.alG(o,"Members per room",n.e),B.b_,p.b8H(o,r.c,n),B.b_,D.fhv],v),q,B.bt,q,B.a6,!1)},
$S:z+25}
C.bjC.prototype={
$0(){return B.be},
$S:23}
C.bjB.prototype={
$2(d,e){return this.a.arK(this.b,"Could not load usage.")},
$S:98}
C.bjF.prototype={
$0(){return B.be},
$S:23}
C.bjE.prototype={
$2(d,e){return this.a.arK(this.b,"Could not load your plan.")},
$S:98}
C.bjy.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.bjz.prototype={
$0(){var x=this
return x.a.Ty(x.b,x.c,x.d)},
$S:0}
C.c0E.prototype={
$1(d){var x=this.a.a
return x},
$S:17}
C.bsR.prototype={
$0(){this.a.r.om(!0)},
$S:0}
C.bsQ.prototype={
$0(){var x,w,v,u,t=null,s=this.a,r=s.gml(),q=r.y
switch(q==null?A.t(r).i("aN.T").a(q):q){case B.eP:s.r.om(!1)
r.sp(B.eq)
break
case B.eq:q=s.gw6()
x=q.y
w=!1
if((x==null?A.t(q).i("aN.T").a(x):x)!=null){x=s.gpP()
v=x.y
u=v==null
if((u?A.t(x).i("aN.T").a(v):v)!=null){w=q.y
if(w==null)w=A.t(q).i("aN.T").a(w)
w.toString
x=u?A.t(x).i("aN.T").a(v):v
x.toString
x=w.kF(x)}else x=w}else x=w
if(x)s.gpP().sp(t)
x=q.y
w=x==null
if((w?A.t(q).i("aN.T").a(x):x)!=null){if(w)x=A.t(q).i("aN.T").a(x)
x.toString
x=!s.RX(x)}else x=!1
if(x){q.sp(t)
s.gpP().sp(t)}else{q=s.gpP()
x=q.y
w=x==null
if((w?A.t(q).i("aN.T").a(x):x)!=null){if(w)x=A.t(q).i("aN.T").a(x)
x.toString
x=!s.RX(x)
s=x}else s=!1
if(s)q.sp(t)}r.sp(B.eP)
break
case B.nq:case B.ld:break}},
$S:0}
C.bsS.prototype={
$0(){var x=this.b
this.a.gw6().sp(x)
return x},
$S:0}
C.bsP.prototype={
$0(){var x=this.b
this.a.gpP().sp(x)
return x},
$S:0}
C.bsT.prototype={
$1(d){return this.a.a},
$S:17}
C.boi.prototype={
$0(){this.a.y=!1},
$S:0}
C.boj.prototype={
$0(){this.a.y=!0},
$S:0}
C.bok.prototype={
$0(){var x,w=this.a,v=w.f
v=v!=null&&w.r==null&&!this.b.jp(v)
x=this.b
if(v){w.r=x
w.a.y.$1(x)}else{w.f=x
w.a.x.$1(x)
if(w.r!=null){w.r=null
w.a.y.$1(null)}}},
$S:0}
C.bol.prototype={
$2(d,e){return this.a.ag3(d,e,!0)},
$S:51}
C.bom.prototype={
$2(d,e){return this.a.ag3(d,e,!1)},
$S:51}
C.boo.prototype={
$0(){if(this.b){var x=this.a
if(x.w==null)x.w=x.a.f}},
$S:0}
C.bon.prototype={
$0(){var x,w,v=this.a,u=v.w
u.toString
x=this.b.a
w=v.b4E(u,x)
if(w!=null){v.w=w
v.r=x}},
$S:0}
C.bt_.prototype={
$1$1(d,e){var x=d.$1(this.a)
return x==null?d.$1(this.b):x},
$1(d){return this.$1$1(d,y.z)},
$S:164}
C.bt0.prototype={
$1$2(d,e,f){return this.a.$1$1(new C.bt1(d,e,f),f)},
$2(d,e){return this.$1$2(d,e,y.z)},
$S:165}
C.bt1.prototype={
$1(d){var x=this.a.$1(d)
return x==null?null:x.a_(this.b)},
$S(){return this.c.i("0?(jc?)")}}
C.bsV.prototype={
$1(d){var x=d.gEf()
return x},
$S:93}
C.bsW.prototype={
$1(d){var x=d.gzZ()
return x},
$S:93}
C.bsZ.prototype={
$1(d){return this.b.$1$1(new C.bsU(this.a,d),y.G)},
$S:21}
C.bsU.prototype={
$1(d){var x,w=null
if(this.a.a.Q){x=d.gNg()
w=x==null?null:x.a_(this.b)}else{x=d.gEg()
w=x==null?null:x.a_(this.b)}return w},
$S:167}
C.bsX.prototype={
$1(d){return d.ax},
$S:168}
C.bsY.prototype={
$0(){var x=this.a.a
return x.rX(x.c)},
$S:0}
C.bD1.prototype={
$2(d,e){var x=this,w=Math.min(x.c.b,270),v=A.c([],y.p)
if(e.d>=w)v.push(x.d)
v.push(A.aD(x.a.f,1,null))
v.push(x.e)
return A.a2(v,B.b4,null,B.r,B.W,0,B.x)},
$S:1140}
C.bD4.prototype={
$0(){var x=this.b
x.y=this.a.a
x.z=this.c},
$S:0}
C.bD3.prototype={
$0(){var x=this.a,w=this.b
x.d=w
w=x.amS(w)
x.f=w
x.a.r.$1(w)},
$S:0}
C.bD2.prototype={
$0(){var x=this.a,w=this.b
x.e=w
w=x.amS(w)
x.r=w
x.a.w.$1(w)},
$S:0}
C.bVd.prototype={
$2(d,e){if(!d.a)d.P(e)},
$S:48};(function aliases(){var x=C.a7Y.prototype
x.aKO=x.m})();(function installTearOffs(){var x=a._static_0,w=a._instance_0u,v=a._instance_1u,u=a._static_1
x(C,"cKJ","cDB",30)
w(C.C_.prototype,"gjj","cP",16)
v(C.re.prototype,"gBr","FT",17)
u(C,"cLO","cB9",8)
u(C,"c7R","cBa",8)
var t
w(t=C.a25.prototype,"gRC","a37",0)
w(t,"gRv","a2O",0)
w(t,"gIA","a31",0)
v(t,"gaky","b0Y",5)
v(t,"gakd","aYP",5)
w(t=C.a1d.prototype,"gbbX","bbY",0)
v(t,"gbgR","bgS",26)
v(t=C.a1f.prototype,"gaZf","aZg",6)
v(t,"gaZh","aZi",27)
v(t,"gaZj","aZk",28)
v(t,"gaYs","aYt",29)
v(C.a46.prototype,"gaSk","aSl",6)
v(t=C.Px.prototype,"gb0W","b0X",7)
v(t,"gaYN","aYO",7)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.cf,[C.bZL,C.bZG,C.bZE,C.bZM,C.b7y,C.b7x,C.b7w,C.c_s,C.c_r,C.c_q,C.b7h,C.b7i,C.c_p,C.c_o,C.bir,C.c14,C.c1a,C.bYV,C.b7Q,C.b7M,C.b7K,C.b7J,C.b7E,C.b7A,C.b7B,C.b7C,C.b7z,C.bjD,C.bjA,C.bjy,C.c0E,C.bsT,C.bt_,C.bt0,C.bt1,C.bsV,C.bsW,C.bsZ,C.bsU,C.bsX])
w(A.dg,[C.bZF,C.b7S,C.b7P,C.b7O,C.b7L,C.b7H,C.b7I,C.bjC,C.bjF,C.bjz,C.bsR,C.bsQ,C.bsS,C.bsP,C.boi,C.boj,C.bok,C.boo,C.bon,C.bsY,C.bD4,C.bD3,C.bD2])
w(A.D,[C.MH,C.re,C.u3,C.pL,C.An,C.uc])
v(C.C_,A.eY)
w(A.h7,[C.rf,C.Pr])
w(A.dk,[C.c15,C.c1b,C.bXd,C.b7R,C.b7N,C.b7G,C.b7D,C.b7F,C.bjB,C.bjE,C.bol,C.bom,C.bD1,C.bVd])
w(A.i8,[C.ajK,C.H0])
w(A.O,[C.TF,C.a1c,C.a1e,C.a45,C.a28,C.a3L])
w(A.a_,[C.a7Y,C.a1d,C.a1f,C.a46,C.apZ,C.Px])
v(C.a25,C.a7Y)
w(A.a5,[C.aoA,C.apY,C.ase,C.aio])
v(C.a36,A.bC)
v(C.bFP,A.al6)
v(C.bFT,A.al8)
v(C.a3v,A.yy)
v(C.acp,A.Zk)
x(C.a7Y,A.kn)})()
A.cC(b.typeUniverse,JSON.parse('{"C_":{"eY":["u3"]},"ajK":{"O":[],"h":[]},"H0":{"O":[],"h":[]},"TF":{"O":[],"h":[]},"a1c":{"O":[],"h":[]},"a1e":{"O":[],"h":[]},"a36":{"bC":[],"bt":[],"h":[]},"a45":{"O":[],"h":[]},"a28":{"O":[],"h":[]},"a3L":{"O":[],"h":[]},"Px":{"a_":["a3L"]},"a25":{"a_":["TF"]},"aoA":{"a5":[],"h":[]},"a1d":{"a_":["a1c"]},"a1f":{"a_":["a1e"]},"apY":{"a5":[],"h":[]},"a46":{"a_":["a45"]},"apZ":{"a_":["a28"]},"a3v":{"aF":[]},"ase":{"a5":[],"h":[]},"aio":{"a5":[],"FB":[],"h":[]},"acp":{"a5":[],"h":[]}}'))
var y=(function rtii(){var x=A.J
return{V:x("cj<c2>"),Z:x("aS<v<eA>>"),X:x("aS<v<fC>>"),u:x("aS<fC>"),a:x("aS<re>"),F:x("aS<ul>"),L:x("aS<fV?>"),C:x("CQ"),R:x("i5<rf>"),c:x("dU<lo>"),d:x("dU<oe>"),e:x("dU<ok>"),G:x("P"),x:x("cbe"),T:x("JR<aE>"),I:x("jF"),J:x("eV"),ch:x("N<v<eA>>"),ao:x("N<v<fC>>"),as:x("N<+room,visible(eA,B)>"),g:x("N<h2>"),U:x("N<B_?>"),cN:x("qK"),cR:x("x<eA>"),a9:x("x<N<D>>"),Y:x("x<pL>"),p:x("x<h>"),o:x("x<ed>"),S:x("x<mA>"),k:x("x<~(cj<c2>)>"),B:x("bq<a_<O>>"),t:x("bq<Px>"),D:x("v<eA>"),E:x("v<ab<f,@>>"),aH:x("v<w>"),aN:x("ab<f,f>"),P:x("ab<f,@>"),f:x("ab<@,@>"),b:x("ac<qK,ed>"),y:x("zE"),w:x("ic"),K:x("D"),bc:x("c5<~(cj<c2>)>"),m:x("fC"),v:x("+room,visible(eA,B)"),s:x("re"),aa:x("An"),j:x("u3"),af:x("rf"),A:x("MH"),bw:x("fi<D?>"),h:x("G1"),N:x("f"),cx:x("h5"),H:x("uc<v<An>>"),W:x("uc<v<pL>>"),cn:x("pL"),bv:x("jq"),O:x("L<f>"),l:x("ed"),cD:x("dw"),Q:x("a36"),M:x("C_"),q:x("h8"),cS:x("b9<P?>"),i:x("Y"),z:x("@"),r:x("w"),_:x("P?"),aQ:x("JR<aE>?"),b8:x("fq?"),n:x("~"),aI:x("~()")}})();(function constants(){var x=a.makeConstList
D.Ir=new C.bFP()
D.aiN=new A.yE(0,null,null,null,null,null,null)
D.ajB=new A.ah(0,0,0,3)
D.e0x=new A.ag(62537,"MaterialIcons",null,!1)
D.e2f=new A.aK(B.CI,null,null,null,null)
D.e2v=new A.aK(B.Of,null,null,null,null)
D.eVy=x([],A.J("x<fC>"))
D.xc=x([],A.J("x<An>"))
D.rt=x([],y.Y)
D.fhr=new C.rf(0,"thisWeek")
D.ftW=new A.a0("Week",null,null,null,null,null,null,null,null,null,null)
D.acp=new I.i5(D.fhr,null,D.ftW,y.R)
D.a53=new C.rf(1,"thisMonth")
D.fst=new A.a0("Month",null,null,null,null,null,null,null,null,null,null)
D.acm=new I.i5(D.a53,null,D.fst,y.R)
D.fhs=new C.rf(2,"last30Days")
D.frr=new A.a0("30 days",null,null,null,null,null,null,null,null,null,null)
D.act=new I.i5(D.fhs,null,D.frr,y.R)
D.Fj=new C.rf(3,"custom")
D.fsg=new A.a0("Custom",null,null,null,null,null,null,null,null,null,null)
D.acq=new I.i5(D.Fj,null,D.fsg,y.R)
D.eYx=x([D.acp,D.acm,D.act,D.acq],A.J("x<i5<rf>>"))
D.fht=new C.u3(D.a53,null,null)
D.fhv=new C.ajK(null)
D.fjP=new A.S(1/0,64)
D.fk8=new A.S(496,164)
D.fr8=new A.a0("To move back to Free, cancel your subscription from your receipt email \u2014 we\u2019ll handle the rest.",null,null,null,null,null,null,null,null,null,null)
D.fkM=new A.d6(D.fr8,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.B,null)
D.a6P=new C.uc(D.xc,!1,y.H)
D.a6O=new C.uc(D.rt,!1,y.W)
D.fmg=new C.uc(null,!0,y.H)
D.fmh=new C.uc(null,!0,y.W)
D.fs0=new A.a0("Export PDF",null,null,null,null,null,null,null,null,null,null)
D.fsU=new A.a0("Export CSV",null,null,null,null,null,null,null,null,null,null)
D.fyA=new A.L("reports-export-csv",y.O)
D.fyz=new A.L("reports-export-pdf",y.O)
D.fyN=new A.L("reports-period-selector",y.O)
D.fB8=new A.L("reports-section",y.O)
D.fD4=new C.apY(null)
D.fDB=new C.Pr(0,"none")
D.a92=new C.Pr(1,"highlightLeading")
D.GV=new C.Pr(2,"highlightTrailing")
D.a93=new C.Pr(3,"highlightAll")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cUI","cpK",()=>A.lr(new C.bZL(),A.J("B_?")))
x($,"cUE","cpI",()=>A.lr(new C.bZG(),y.m))
x($,"cUJ","cpL",()=>A.lr(new C.bZM(),A.J("ul")))
x($,"cV9","cpU",()=>A.eo(new C.c_s(),y.A))
x($,"cV8","c25",()=>A.lr(new C.c_r(),y.D))
x($,"cV7","aCg",()=>A.pk(C.cKJ(),y.M,y.j))
x($,"cV6","c9s",()=>A.lr(new C.c_p(),y.s))})()};
(a=>{a["XYwf1FN5Vxi9rr9vHzSIAZmDjfA="]=a.current})($__dart_deferred_initializers__);