((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,E,M,N,O,P,Q,R,S,H,T,C={c0D:function c0D(){},c0y:function c0y(){},c0w:function c0w(d){this.a=d},c0x:function c0x(d){this.a=d},c0E:function c0E(){},
cFO(){return new C.Cc()},
N3:function N3(d){this.a=d},
b91:function b91(){},
b90:function b90(){},
b9_:function b9_(){},
c1l:function c1l(){},
c1k:function c1k(){},
c1j:function c1j(d){this.a=d},
Cc:function Cc(){this.b=null},
rn:function rn(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
b8L:function b8L(d){this.a=d},
b8M:function b8M(){},
c1i:function c1i(){},
c1h:function c1h(){},
cht(d){return""+A.b0(d)+"-"+B.n.bF(B.f.j(A.b7(d)),2,"0")+"-"+B.n.bF(B.f.j(A.bG(d)),2,"0")},
cCT(d){var x,w,v,u,t=new C.bk_(),s=d.h(0,"room_id")
s=J.be(s==null?"":s)
x=d.h(0,"user_id")
x=J.be(x==null?"":x)
w=d.h(0,"description")
J.be(w==null?"":w)
w=t.$1(d.h(0,"started_at"))
if(w==null)w=new A.aE(Date.now(),0,!1)
t=t.$1(d.h(0,"ended_at"))
v=J.p(d.h(0,"billable"),!1)
A.dh(d.h(0,"hourly_rate"))
u=d.h(0,"invoice_id")
u=u==null?null:J.be(u)
return new C.pT(s,x,w,t,!v,u)},
c93(d,e){var x,w,v,u,t,s=y.N,r=y.i,q=A.D(s,r)
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.F)(d),++w){v=d[w]
if(!v.f)continue
u=v.a
t=q.h(0,u)
if(t==null)t=0
q.l(0,u,t+v.WV(e))}return C.c8U(q,s,r)},
c92(d,e){var x,w,v,u,t,s=y.N,r=y.i,q=A.D(s,r)
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.F)(d),++w){v=d[w]
if(!v.f)continue
u=v.b
t=q.h(0,u)
if(t==null)t=0
q.l(0,u,t+v.WV(e))}return C.c8U(q,s,r)},
c9N(d,e){return new A.ag(d,new C.c2Z(),A.a6(d).i("ag<1>")).io(0,0,new C.c3_(e))},
cnN(d,e){return new A.ag(d,new C.c34(),A.a6(d).i("ag<1>")).io(0,0,new C.c35(e))},
c9K(d){var x,w,v,u,t,s,r,q
for(x=d.length,w=0,v=0,u=0;u<x;++u){t=d[u]
s=t.c
r=s.toLowerCase()
if(r==="void"||r==="cancelled"||r==="canceled")continue
q=t.d
w+=q
r=s.toLowerCase()
if(r==="draft"||r==="sent")v+=q}return new A.avP(w,v)},
cNA(d){var x,w,v,u,t=y.N,s=y.r,r=A.D(t,s)
for(x=J.aJ(d);x.q();){w=x.gI()
v=w.h(0,"room_id")
u=v==null?null:J.be(v)
if(u==null||u.length===0)continue
v=r.h(0,u)
if(v==null)v=0
w=A.dh(w.h(0,"file_size_bytes"))
w=w==null?null:B.l.F(w)
r.l(0,u,v+(w==null?0:w))}return C.c8U(r,t,s)},
c8U(d,e,f){var x,w,v,u,t=A.t(d).i("bE<1>"),s=A.K(new A.bE(d,t),t.i("z.E"))
B.h.ed(s,new C.bZ_(d,e))
t=A.D(e,f)
for(x=s.length,w=0;w<s.length;s.length===x||(0,A.F)(s),++w){v=s[w]
u=d.h(0,v)
t.l(0,v,u==null?f.a(u):u)}return t},
Cv(d){var x=B.l.aM(d*10)/10
return x===(x<0?Math.ceil(x):Math.floor(x))?""+B.l.F(x)+" h":B.l.aq(x,1)+" h"},
c_K(d){var x=Math.abs(d),w=B.f.ao(x,100),v=B.n.bF(B.f.j(B.f.aC(x,100)),2,"0"),u=A.aCm(B.f.j(w),A.cd("(\\d)(?=(\\d{3})+(?!\\d))",!0,!1),new C.c_L(),null)
return(d<0?"-":"")+"$"+u+"."+v},
c9m(d){if(d>=1073741824)return B.l.aq(d/1073741824,1)+" GB"
if(d>=1048576)return B.l.aq(d/1048576,0)+" MB"
if(d>=1024)return B.l.aq(d/1024,0)+" KB"
return""+d+" B"},
ro:function ro(d,e){this.a=d
this.b=e},
ue:function ue(d,e,f){this.a=d
this.b=e
this.c=f},
pT:function pT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h
_.w=i},
bk_:function bk_(){},
AA:function AA(d,e,f){this.a=d
this.c=e
this.d=f},
un:function un(d,e,f){this.a=d
this.b=e
this.$ti=f},
c2Z:function c2Z(){},
c3_:function c3_(d){this.a=d},
c34:function c34(){},
c35:function c35(d){this.a=d},
bZ_:function bZ_(d,e){this.a=d
this.b=e},
c_L:function c_L(){},
chu(d){var x
switch(d.a){case 0:x="Open"
break
case 1:x="Under investigation"
break
case 2:x="In review"
break
case 3:x="Closed"
break
default:x=null}return x},
akn:function akn(d){this.a=d},
b9l:function b9l(){},
b9k:function b9k(d,e,f){this.a=d
this.b=e
this.c=f},
b9i:function b9i(d){this.a=d},
b9j:function b9j(d,e,f){this.a=d
this.b=e
this.c=f},
b9h:function b9h(){},
b9g:function b9g(d,e,f){this.a=d
this.b=e
this.c=f},
b9e:function b9e(d){this.a=d},
b9f:function b9f(d,e,f){this.a=d
this.b=e
this.c=f},
b9d:function b9d(d,e){this.a=d
this.b=e},
b99:function b99(){},
b9a:function b9a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b9b:function b9b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b9c:function b9c(){},
b96:function b96(){},
b98:function b98(){},
b97:function b97(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
b93:function b93(d,e){this.a=d
this.b=e},
b94:function b94(d,e){this.a=d
this.b=e},
b95:function b95(d,e){this.a=d
this.b=e},
b92:function b92(d){this.a=d},
cj1(){return new C.Hg(null)},
cDk(d){if(d>=1073741824)return B.l.aq(d/1073741824,1)+" GB"
if(d>=1048576)return B.l.aq(d/1048576,0)+" MB"
if(d>=1024)return B.l.aq(d/1024,0)+" KB"
return B.l.aq(d,0)+" B"},
cDl(d){var x=B.l.F(d)
return d===x?""+x:B.l.aq(d,1)},
Hg:function Hg(d){this.a=d},
bld:function bld(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bla:function bla(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
blc:function blc(){},
blb:function blb(d,e){this.a=d
this.b=e},
blf:function blf(){},
ble:function ble(d,e){this.a=d
this.b=e},
bl8:function bl8(d){this.a=d},
bl9:function bl9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c9I(d,e,f){return C.cNq(d,e,f)},
cNq(d,e,f){var x=0,w=A.m(y.aQ),v,u,t
var $async$c9I=A.i(function(g,h){if(g===1)return A.j(h,w)
for(;;)switch(x){case 0:t={}
e=A.ck(A.b0(e),A.b7(e),A.bG(e),0,0)
f=A.ck(A.b0(f),A.b7(f),A.bG(f),0,0)
u=new A.aE(Date.now(),0,!1)
t.a=new C.U6(null,e,f,A.ck(A.b0(u),A.b7(u),A.bG(u),0,0),B.eO,null,null,null,null,null,null,null,null,null,null,null,B.lu,null,null,null,B.If,null)
v=A.cV(null,null,!0,null,new C.c2y(t,null),d,null,!0,!1,y.T)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$c9I,w)},
clh(d,e,f,g){var x
if(f==null)x="Start Date"
else x=g==null||A.b0(f)===A.b0(g)?d.awu(f):d.awt(f)
return x},
clg(d,e,f,g,h){var x
if(g==null)x="End Date"
else x=f!=null&&A.b0(f)===A.b0(g)&&A.b0(f)===A.b0(h)?d.awu(g):d.awt(g)
return x},
c2y:function c2y(d,e){this.a=d
this.b=e},
U6:function U6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){var _=this
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
a2z:function a2z(d,e,f,g,h,i,j,k){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=e
_.x=f
_.bV$=g
_.fA$=h
_.mI$=i
_.e8$=j
_.fB$=k
_.c=_.a=null},
buq:function buq(d){this.a=d},
bup:function bup(d){this.a=d},
bur:function bur(d,e){this.a=d
this.b=e},
buo:function buo(d,e){this.a=d
this.b=e},
bus:function bus(d){this.a=d},
apf:function apf(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
a1H:function a1H(d,e,f,g,h,i,j,k,l,m){var _=this
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
a1I:function a1I(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.w=0
_.y=_.x=$
_.c=_.a=null},
bpZ:function bpZ(d){this.a=d},
bq_:function bq_(d){this.a=d},
bq0:function bq0(d,e){this.a=d
this.b=e},
bq1:function bq1(d){this.a=d},
bq2:function bq2(d){this.a=d},
a1J:function a1J(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a1K:function a1K(){var _=this
_.f=_.e=$
_.c=_.a=_.w=_.r=null},
bq4:function bq4(d,e){this.a=d
this.b=e},
bq3:function bq3(d,e){this.a=d
this.b=e},
a3A:function a3A(d,e,f,g,h){var _=this
_.f=d
_.r=e
_.w=f
_.b=g
_.a=h},
aqD:function aqD(d){this.a=d},
bHl:function bHl(){},
bHp:function bHp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4z:function a4z(d,e,f,g,h,i,j,k,l,m){var _=this
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
a4A:function a4A(){this.d=$
this.c=this.a=null},
a2C:function a2C(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
aqE:function aqE(d){this.d=d
this.c=this.a=null},
buz:function buz(d,e){this.a=d
this.b=e},
buA:function buA(d){this.a=d},
buB:function buB(d,e,f){this.a=d
this.b=e
this.c=f},
buu:function buu(){},
buv:function buv(){},
buy:function buy(d,e){this.a=d
this.b=e},
but:function but(d,e){this.a=d
this.b=e},
buw:function buw(){},
bux:function bux(d){this.a=d},
PM:function PM(d,e){this.a=d
this.b=e},
a3Z:function a3Z(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
asT:function asT(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bEy:function bEy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4e:function a4e(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
PS:function PS(){var _=this
_.e=_.d=$
_.r=_.f=null
_.x=_.w=$
_.z=_.y=null
_.Q=!1
_.c=_.a=null},
bEB:function bEB(d,e,f){this.a=d
this.b=e
this.c=f},
bEA:function bEA(d,e){this.a=d
this.b=e},
bEz:function bEz(d,e){this.a=d
this.b=e},
bWW:function bWW(){},
a8t:function a8t(){},
aj1:function aj1(d,e,f){this.c=d
this.d=e
this.a=f},
acY:function acY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var _=this
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
ci7(d,e,f){return new A.a_w(new A.GL(d,e,!0,!0,!0,0,A.c2c(),null),f)}},D,I,K,U,L
J=c[1]
A=c[0]
B=c[2]
F=c[41]
G=c[103]
E=c[70]
M=c[104]
N=c[101]
O=c[99]
P=c[100]
Q=c[84]
R=c[102]
S=c[106]
H=c[52]
T=c[105]
C=a.updateHolder(c[32],C)
D=c[98]
I=c[81]
K=c[83]
U=c[55]
L=c[97]
C.N3.prototype={
OQ(d,e,f){return this.aDl(d,e,f)},
aDl(d,e,f){var x=0,w=A.m(y.W),v,u=2,t=[],s=this,r,q,p,o,n
var $async$OQ=A.i(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(e.length===0){v=D.a6R
x=1
break}u=4
p=s.a.az("time_entries").bn("room_id, user_id, description, started_at, ended_at, billable, hourly_rate, invoice_id, created_at").ql("room_id",e)
x=7
return A.e(A.ji(p.hc(p.hf("started_at","lt."+d.d_())),p.$ti.c).aaD("ended_at.is.null,ended_at.gte."+f.d_()).fF("started_at",!1),$async$OQ)
case 7:r=h
p=J.bX(r,new C.b91(),y.cn)
p=A.K(p,p.$ti.i("ai.E"))
v=new C.un(p,!1,y.W)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.G(n)
p=q
if(p instanceof A.rf&&p.b==="42P01"){v=D.fmH
x=1
break}throw n
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$OQ,w)},
Ou(d){return this.aCH(d)},
aCH(d){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Ou=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=D.a6S
x=1
break}u=4
x=7
return A.e(s.a.az("invoices").tm().ql("room_id",d).fF("created_at",!1),$async$Ou)
case 7:r=f
p=J.bX(r,new C.b90(),y.aa)
p=A.K(p,p.$ti.i("ai.E"))
v=new C.un(p,!1,y.H)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.G(n)
p=q
if(p instanceof A.rf&&p.b==="42P01"){v=D.fmG
x=1
break}throw n
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Ou,w)},
Oo(d){return this.aCx(d)},
aCx(d){var x=0,w=A.m(y.E),v,u=this,t,s
var $async$Oo=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:if(d.length===0){v=O.UZ
x=1
break}s=J
x=3
return A.e(u.a.az("evidence_items").bn("room_id, file_size_bytes").ql("room_id",d),$async$Oo)
case 3:t=s.bX(f,new C.b9_(),y.P)
t=A.K(t,t.$ti.i("ai.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Oo,w)},
Ox(d){return this.aCN(d)},
aCN(d){var x=0,w=A.m(y.aN),v,u=this,t,s,r,q,p,o,n
var $async$Ox=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:if(d.length===0){v=B.cD
x=1
break}t=y.N
t=A.D(t,t)
n=J
x=3
return A.e(u.a.az("profiles").bn("id, display_name").ql("id",d),$async$Ox)
case 3:s=n.aJ(f),r=y.f
case 4:if(!s.q()){x=5
break}q=r.a(s.gI())
p=J.be(q.h(0,"id"))
o=A.a9(q.h(0,"display_name"))
o=o==null?null:B.n.aI(o).length!==0
t.l(0,p,o===!0?B.n.aI(A.U(q.h(0,"display_name"))):"Member")
x=4
break
case 5:v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Ox,w)}}
C.Cc.prototype={
cP(){return D.fhQ}}
C.rn.prototype={
FX(d){var x=J.en(this.d,new C.b8L(d))
x=A.ic(new A.dE(x,new C.b8M(),x.$ti.i("dE<1,f>")))
return x==null?"Room":x},
bu6(d){var x=this.w.h(0,d)
return x==null?"Member":x}}
C.ro.prototype={
H(){return"ReportPeriodPreset."+this.b}}
C.ue.prototype={
a_(d){var x,w,v,u
switch(this.a.a){case 0:x=A.ck(A.b0(d),A.b7(d),A.bG(d),0,0).kq(0-A.eb(A.Yj(d)-1,0,0,0,0).a)
return new A.Ca(x.kq(6048e8),x)
case 1:w=A.ck(A.b0(d),A.b7(d),1,0,0)
return new A.Ca(A.b7(d)===12?A.ck(A.b0(d)+1,1,1,0,0):A.ck(A.b0(d),A.b7(d)+1,1,0,0),w)
case 2:return new A.Ca(d,d.kq(-2592e9))
case 3:v=this.b
v.toString
u=this.c
u.toString
v=A.ck(A.b0(v),A.b7(v),A.bG(v),0,0)
return new A.Ca(A.ck(A.b0(u),A.b7(u),A.bG(u),0,0).kq(864e8),v)}},
gkI(){var x,w
switch(this.a.a){case 0:x="This week"
break
case 1:x="This month"
break
case 2:x="Last 30 days"
break
case 3:x=this.b
x.toString
x=C.cht(x)
w=this.c
w.toString
w=x+" \u2013 "+C.cht(w)
x=w
break
default:x=null}return x},
k(d,e){if(e==null)return!1
return e instanceof C.ue&&e.a===this.a&&J.p(e.b,this.b)&&J.p(e.c,this.c)},
gt(d){return A.aa(this.a,this.b,this.c,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b,B.b)}}
C.pT.prototype={
WV(d){var x,w=this.e
if(w==null)w=d
x=B.f.ao(w.eD(this.d).a,1e6)
return x<=0?0:x/3600}}
C.AA.prototype={
gbE(){return this.a}}
C.un.prototype={}
C.akn.prototype={
cc(d,e){var x=null,w=e.S($.c4_(),y.Z),v=A.d(d).ok.at
if(v==null)v=x
else v=v.fu(A.d(d).ax.a===B.p?B.B:B.C,B.ak,1.5)
return A.a2(A.c([A.o("REPORTS",x,x,x,x,x,v,x,x,x),B.Q,A.dK(w,new C.b9j(this,d,e),new C.b9k(this,d,e),new C.b9l(),!1,!0,!1)],y.p),B.S,D.fBB,B.r,B.u,0,B.x)},
bbb(d,e){var x=e.S($.cbt(),y.a)
return A.a2(A.c([this.b95(d,e),B.Q,A.dK(x,new C.b9f(this,d,e),new C.b9g(this,d,e),new C.b9h(),!1,!0,!1)],y.p),B.S,null,B.r,B.u,0,B.x)},
b95(d,e){var x,w,v=null,u=e.S($.aCZ(),y.j),t=y.af
t=I.bbW(D.fzd,new C.b9d(d,e),D.eYC,A.dp([u.a],t),t)
x=u.gkI()
w=A.d(d).ok.Q
if(w==null)w=v
else w=w.U(A.d(d).ax.a===B.p?B.B:B.C)
return A.a2(A.c([t,B.bO,A.o("Window: "+x,v,v,v,v,v,w,v,v,v)],y.p),B.S,v,B.r,B.u,0,B.x)},
aOY(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.d(d).ok,f=e.e
if(f.b)return i.alc(d,D.e0C,"Time tracking data unavailable","The time-tracking module is not enabled on this workspace yet. Billable-hours reporting appears once it ships.")
x=f.a
if(x==null)x=D.rv
w=new A.aE(Date.now(),0,!1)
v=C.c9N(x,w)
u=C.cnN(x,w)
t=C.c93(x,w)
s=C.c92(x,w)
r=g.at
if(r==null)r=h
else r=r.fu(A.d(d).ax.a===B.p?B.B:B.C,B.ak,1.2)
r=A.o("BILLABLE HOURS",h,h,h,h,h,r,h,h,h)
q=C.Cv(v)
p=g.f
q=A.o(q,h,h,h,h,h,p==null?h:p.cR(B.ak),h,h,h)
p=e.a.gkI()
o=g.Q
n=o==null
if(n)m=h
else m=o.U(A.d(d).ax.a===B.p?B.B:B.C)
l=y.p
m=A.an(A.c([q,B.b6,new A.Y(D.ajJ,A.o("billable \xb7 "+p.toLowerCase(),h,h,h,h,h,m,h,h,h),h)],l),B.fj,h,B.r,B.u,0,h,h)
q=u>0
if(q)p=A.d(d).ax.fy
else p=A.d(d).ax.a===B.p?B.B:B.C
p=A.aT(B.r5,p,h,h,16)
k=q?C.Cv(u)+" unbilled":"Everything is invoiced"
if(n)q=h
else{if(q)j=A.d(d).ax.fy
else j=A.d(d).ax.a===B.p?B.B:B.C
j=o.dn(j,q?B.aP:h)
q=j}q=A.c([r,B.ah,m,B.ah,A.an(A.c([p,B.e3,A.aA(A.o(k,h,h,h,h,h,q,h,h,h),1,h)],l),B.y,h,B.r,B.u,0,h,h)],l)
if(t.a!==0){r=A.c([B.Q,i.aq_(d,"By room")],l)
for(p=A.t(t).i("d3<1,2>"),p=A.rB(new A.d3(t,p),5,p.i("z.E")),p=new A.Be(J.aJ(p.a),p.b,A.t(p).i("Be<1>"));p.q();){m=p.gI()
r.push(i.a3D(d,e.FX(m.a),C.Cv(m.b)))}B.h.J(q,r)}if(s.a!==0){r=A.c([B.Q,i.aq_(d,"By member")],l)
for(p=A.t(s).i("d3<1,2>"),p=A.rB(new A.d3(s,p),5,p.i("z.E")),p=new A.Be(J.aJ(p.a),p.b,A.t(p).i("Be<1>")),m=e.w;p.q();){l=p.gI()
k=m.h(0,l.a)
if(k==null)k="Member"
r.push(i.a3D(d,k,C.Cv(l.b)))}B.h.J(q,r)}if(x.length===0){if(n)r=h
else r=o.U(A.d(d).ax.a===B.p?B.B:B.C)
q.push(new A.Y(P.qQ,A.o("No time entries in this window.",h,h,h,h,h,r,h,h,h),h))}r=A.a2(q,B.S,h,B.r,B.u,0,B.x)
q=A.d(d).ax.a===B.p?B.bZ:B.M
return A.fa(new A.Y(B.aD,r,h),q,h,h,h,B.a4)},
aQw(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=A.d(d).ok,m=A.D(y.cN,y.r)
for(x=0;x<4;++x)m.l(0,B.E_[x],0)
for(w=J.aJ(e.d);w.q();){v=w.gI().f
u=m.h(0,v)
m.l(0,v,(u==null?0:u)+1)}w=n.at
if(w==null)w=o
else w=w.fu(A.d(d).ax.a===B.p?B.B:B.C,B.ak,1.2)
w=A.o("CASE STATUS OVERVIEW",o,o,o,o,o,w,o,o,o)
v=y.p
u=A.c([],v)
for(t=n.Q,x=0;x<4;++x){s=B.E_[x]
r=C.chu(s)
q=m.h(0,s)
p=t==null?o:t.cR(B.cB)
p=A.o(r+" \xb7 "+A.q(q),o,o,o,o,o,p,o,o,o)
r=A.d(d).ax.a===B.p?B.cP:B.cQ
u.push(Q.ti(o,r,p,new A.b3(A.d(d).ax.a===B.p?B.aC:B.cs,1,B.P,-1),B.bL))}m=A.a2(A.c([w,B.ah,A.hC(u,B.cF,8,8)],v),B.S,o,B.r,B.u,0,B.x)
w=A.d(d).ax.a===B.p?B.bZ:B.M
return A.fa(new A.Y(B.aD,m,o),w,o,o,o,B.a4)},
beW(d,e){var x,w,v=null,u=A.d(d).ok,t=e.r,s=u.at
if(s==null)s=v
else s=s.fu(A.d(d).ax.a===B.p?B.B:B.C,B.ak,1.2)
s=A.c([A.o("STORAGE BY ROOM",v,v,v,v,v,s,v,v,v),B.ah],y.p)
if(t.gW(t)){x=u.Q
if(x==null)x=v
else x=x.U(A.d(d).ax.a===B.p?B.B:B.C)
s.push(A.o("No evidence files stored yet.",v,v,v,v,v,x,v,v,v))}else for(x=t.gek(),x=x.n8(x,8),x=x.gV(x);x.q();){w=x.gI()
s.push(this.a3D(d,e.FX(w.a),C.c9m(w.b)))}s=A.a2(s,B.S,v,B.r,B.u,0,B.x)
x=A.d(d).ax.a===B.p?B.bZ:B.M
return A.fa(new A.Y(B.aD,s,v),x,v,v,v,B.a4)},
aVy(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.d(d).ok,m=Date.now(),l=f.e,k=l.a
if(k==null)k=D.rv
x=l.b?o:C.c9N(k,new A.aE(m,0,!1))
m=f.f
l=m.b
if(l)w=o
else{m=m.a
w=C.c9K(m==null?D.xe:m)}m=f.r.geJ()
v=m.io(m,0,new C.b99())
m=n.at
if(m==null)m=o
else m=m.fu(A.d(d).ax.a===B.p?B.B:B.C,B.ak,1.2)
m=A.o("EXECUTIVE SUMMARY",o,o,o,o,o,m,o,o,o)
u=p.a5q(d,"Billable hours",x==null?"\u2014":C.Cv(x))
t=w==null
s=p.a5q(d,"Invoiced",t?"\u2014":C.c_K(w.a))
r=t?"\u2014":C.c_K(w.b)
q=y.p
r=A.c([m,B.ah,A.c5F(2.2,A.c([u,s,p.apW(d,"Outstanding",r,!t&&w.b>0),p.a5q(d,"Storage used",C.c9m(v))],q),2,8,8,B.xL,!0)],q)
if(l){m=n.Q
if(m==null)m=o
else m=m.U(A.d(d).ax.a===B.p?B.B:B.C)
r.push(new A.Y(B.er,A.o("Invoicing module not enabled yet \u2014 invoiced / outstanding are unavailable.",o,o,o,o,o,m,o,o,o),o))}r.push(B.Q)
r.push(A.an(A.c([A.aA(A.hJ(D.e2l,D.fz_,D.fsr,new C.b9a(p,d,e,f),o),1,o),B.bb,A.aA(A.hJ(D.e2B,D.fz0,D.ftk,new C.b9b(p,d,e,f),o),1,o)],q),B.y,o,B.r,B.u,0,o,o))
m=A.a2(r,B.S,o,B.r,B.u,0,B.x)
l=A.d(d).ax.a===B.p?B.bZ:B.M
return A.fa(new A.Y(B.aD,m,o),l,o,o,o,B.a4)},
apW(d,e,f,g){var x,w=null,v=A.d(d).ok,u=A.d(d).ax.a===B.p?B.cP:B.cQ,t=A.b2(8),s=A.bW(A.d(d).ax.a===B.p?B.aC:B.cs,B.P,1),r=v.Q
if(r==null)r=w
else r=r.U(A.d(d).ax.a===B.p?B.B:B.C)
r=A.o(e,w,1,B.aq,w,w,r,w,w,w)
x=v.w
if(x==null)x=w
else x=x.dn(g?A.d(d).ax.fy:w,B.ak)
return A.ar(w,A.a2(A.c([r,B.dC,A.o(f,w,1,B.aq,w,w,x,w,w,w)],y.p),B.S,w,B.ey,B.u,0,B.x),B.F,w,w,new A.aB(u,w,s,t,w,w,B.X),w,w,w,w,B.cS,w,w,w)},
a5q(d,e,f){return this.apW(d,e,f,!1)},
Il(d,e,f){return this.aVI(d,e,f)},
aVI(d,e,f){var x=0,w=A.m(y.n),v=1,u=[],t=this,s,r,q,p
var $async$Il=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.e(t.HA(f),$async$Il)
case 6:s=h
r=B.n.a7(new A.aE(Date.now(),0,!1).d_(),0,10)
x=7
return A.e($.y8().iz(K.B1(null,A.c([K.BJ(new Uint8Array(A.b5(s)),"application/pdf","casethread-report-"+A.q(r)+".pdf")],y.S),"CaseThread executive summary \u2014 "+f.a.gkI())),$async$Il)
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
return A.l($async$Il,w)},
QZ(d,e,f){return this.aVH(d,e,f)},
aVH(a4,a5,a6){var x=0,w=A.m(y.n),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$QZ=A.i(function(a7,a8){if(a7===1){u.push(a8)
x=v}for(;;)switch(x){case 0:v=3
t=new A.aE(Date.now(),0,!1)
i=a6.e.a
s=i==null?D.rv:i
r=C.c93(s,t)
q=C.c92(s,t)
h=new A.dM("")
h.a="section,key,value\n"
g=a6.a
h.a="section,key,value\n"+('meta,period,"'+g.gkI()+" ("+B.n.a7(a6.b.d_(),0,10)+" to "+B.n.a7(a6.c.d_(),0,10)+')"\n')
p=h
o=new C.b9c()
for(f=r,f=new A.d3(f,A.t(f).i("d3<1,2>")).gV(0);f.q();){e=f.d
e.toString
n=e
e=p
d="billable_hours_by_room,"+A.q(o.$1(a6.FX(n.a)))+","+B.l.aq(n.b,2)+"\n"
e.a+=d}for(f=q,f=new A.d3(f,A.t(f).i("d3<1,2>")).gV(0),e=a6.w;f.q();){d=f.d
d.toString
m=d
d=p
a0=e.h(0,m.a)
if(a0==null)a0="Member"
a0="billable_hours_by_member,"+A.q(o.$1(a0))+","+B.l.aq(m.b,2)+"\n"
d.a+=a0}for(f=a6.r.gek(),f=f.gV(f);f.q();){l=f.gI()
e=p
d="storage_bytes_by_room,"+A.q(o.$1(a6.FX(l.a)))+","+l.b+"\n"
e.a+=d}f=a6.f
if(f.b)a1=null
else{f=f.a
a1=C.c9K(f==null?D.xe:f)}k=a1
if(k!=null){f=p
e="executive_summary,invoiced_cents,"+k.a+"\n"
f.a+=e
e=p
f="executive_summary,outstanding_cents,"+k.b+"\n"
e.a+=f}j=B.n.a7(new A.aE(Date.now(),0,!1).d_(),0,10)
f=$.y8()
e=p.a
x=6
return A.e(f.iz(K.B1(null,A.c([K.BJ(new Uint8Array(A.b5(B.bw.b9(e.charCodeAt(0)==0?e:e))),"text/csv","casethread-report-"+A.q(j)+".csv")],y.S),"CaseThread report \u2014 "+g.gkI())),$async$QZ)
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
return A.l($async$QZ,w)},
HA(d){return this.aPL(d)},
aPL(d){var x=0,w=A.m(y.aH),v,u,t,s,r,q,p,o,n
var $async$HA=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(A.cw("pdf.1",""),$async$HA)
case 3:x=4
return A.e(A.cw("pw.1",""),$async$HA)
case 4:A.C("pw.1")
u=F.c5a(null,null,null,null,null,null,null)
t=new A.aE(Date.now(),0,!1)
s=d.e
r=s.a
if(r==null)r=D.rv
s=s.b
q=s?null:C.c9N(r,t)
p=s?null:C.cnN(r,t)
s=d.f
if(s.b)o=null
else{s=s.a
o=C.c9K(s==null?D.xe:s)}s=d.r.geJ()
n=s.io(s,0,new C.b96())
A.C("pw.1")
A.C("pdf.1")
u.a6u(F.cgm(new C.b97(d,t,new C.b98(),q,p,o,n,r),null,null,N.Ib,null,null,null))
v=u.iw()
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$HA,w)},
aq_(d,e){var x=null,w=A.d(d).ok.Q
if(w==null)w=x
else w=w.dn(A.d(d).ax.a===B.p?B.B:B.C,B.aP)
return new A.Y(B.B5,A.o(e,x,x,x,x,x,w,x,x,x),x)},
a3D(d,e,f){var x=null,w=A.d(d).ok.Q,v=A.aA(A.o(e,x,1,B.aq,x,x,w,x,x,x),1,x)
return new A.Y(B.Kd,A.an(A.c([v,A.o(f,x,x,x,x,x,w==null?x:w.cR(B.aP),x,x,x)],y.p),B.y,x,B.r,B.u,0,x,x),x)},
alc(d,e,f,g){var x,w,v=null,u=A.d(d).ok,t=A.aT(e,A.d(d).ax.a===B.p?B.B:B.C,v,v,v),s=u.z
s=A.o(f,v,v,v,v,v,s==null?v:s.cR(B.aP),v,v,v)
x=u.Q
if(x==null)x=v
else x=x.U(A.d(d).ax.a===B.p?B.B:B.C)
w=y.p
w=A.an(A.c([t,B.bb,A.aA(A.a2(A.c([s,B.dC,A.o(g,v,v,v,v,v,x,v,v,v)],w),B.S,v,B.r,B.u,0,B.x),1,v)],w),B.S,v,B.r,B.u,0,v,v)
t=A.d(d).ax.a===B.p?B.bZ:B.M
return A.fa(new A.Y(B.aD,w,v),t,v,v,v,B.a4)},
aiK(d,e,f){var x,w=null,v=A.d(d).ok.z
v=A.an(A.c([A.aA(A.o(e,w,w,w,w,w,v==null?w:v.U(A.d(d).ax.fy),w,w,w),1,w),A.bw(B.eE,w,w,w,f,w,w)],y.p),B.y,w,B.r,B.u,0,w,w)
x=A.d(d).ax.a===B.p?B.bZ:B.M
return A.fa(new A.Y(B.aD,v,w),x,w,w,w,B.a4)}}
C.Hg.prototype={
cc(d,e){var x=null,w=e.S($.crJ(),y.u),v=e.S($.crM(),y.F)
return A.hy(A.m_(x,x,x,x,x,x,x,x,B.a7u),x,A.dK(w,new C.bld(this,v,d,e),new C.ble(this,d),new C.blf(),!1,!0,!1),x,x)},
arU(d,e){var x=null,w=A.d(d).ok.z
return A.bQ(A.o(e,x,x,x,x,x,w==null?x:w.U(A.d(d).ax.fy),x,x,x),x,x)},
b9h(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=A.d(d).ok,g=e.S($.c3Y(),y.X).gp()
if(g==null)g=D.eVC
x=J.en(g,new C.bl8(f))
w=A.K(x,x.$ti.i("z.E"))
if(w.length===0)return B.aK
x=h.at
if(x==null)x=i
else x=x.fu(A.d(d).ax.a===B.p?B.B:B.C,B.ak,1.5)
v=y.p
x=A.c([A.o("CHANGE PLAN",i,i,i,i,i,x,i,i,i),B.Q],v)
for(u=w.length,t=f.c,s=y.O,r=h.Q,q=h.z,p=0;p<w.length;w.length===u||(0,A.F)(w),++p){o=w[p]
n=A.d(d).ax.a===B.p?B.bZ:B.M
m=q==null?i:q.cR(B.aP)
m=A.o(o.b,i,i,i,i,i,m,i,i,i)
l=o.a
if(l==="enterprise")k="Custom pricing \u2014 contact us"
else{k=o.c
k=k===0?"Free":"$"+B.l.aq(k/100,0)+"/month"}if(r==null)j=i
else j=r.U(A.d(d).ax.a===B.p?B.B:B.C)
j=A.a2(A.c([m,A.o(k,i,i,i,i,i,j,i,i,i)],v),B.S,i,B.r,B.u,0,B.x)
x.push(new A.v7(n,B.a4,i,i,new A.Y(B.aD,new A.i0(B.bc,B.r,B.u,B.y,i,B.x,i,0,A.c([new A.he(1,B.d3,j,i),A.d_(A.o(o.c<t?"Downgrade":"Switch",i,i,i,i,i,i,i,i,i),new A.L("plan-switch-"+l,s),new C.bl9(this,d,e,o),i)],v),i),i),i))}return A.a2(x,B.S,i,B.r,B.u,0,B.x)},
TD(d,e,f){return this.bfq(d,e,f)},
bfq(d,e,f){var x=0,w=A.m(y.n),v
var $async$TD=A.i(function(g,h){if(g===1)return A.j(h,w)
for(;;)switch(x){case 0:x=f.a==="enterprise"||f.c>0?3:4
break
case 3:x=5
return A.e(U.a9J(d,e,f),$async$TD)
case 5:x=1
break
case 4:d.T(y.q).f.aS(D.flm)
case 1:return A.k(v,w)}})
return A.l($async$TD,w)},
U0(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=A.d(d).ok,k=f.a.h(0,g.c)
if(k==null)k=0
x=e.aaW(g)
w=x>0
v=w?B.l.aw(k/x,0,1):0
w=k>=x&&w
u=A.d(d).ax.a===B.p?B.bZ:B.M
t=l.z
t=A.aA(A.o(h,m,m,m,m,m,t==null?m:t.cR(B.cB),m,m,m),1,m)
s=A.q(i.$1(k))
r=A.q(i.$1(x))
q=l.Q
p=q==null
if(p)o=m
else{if(w)o=A.d(d).ax.fy
else o=A.d(d).ax.a===B.p?B.B:B.C
o=q.dn(o,w?B.aP:m)}n=y.p
o=A.an(A.c([t,A.o(s+" / "+r,m,m,m,m,m,o,m,m,m)],n),B.y,m,B.r,B.u,0,m,m)
t=A.d(d).ax.a===B.p?B.aC:B.cs
if(w)s=A.d(d).ax.fy
else s=A.d(d).ax.a===B.p?B.bD:B.a9
s=A.c([o,B.ah,A.aXq(t,s,m,v,m)],n)
if(w)B.h.J(s,A.c([B.tf,A.o("Limit reached \u2014 upgrades unlock more.",m,m,m,m,m,p?m:q.U(A.d(d).ax.fy),m,m,m)],n))
return A.fa(new A.Y(B.aD,A.a2(s,B.S,m,B.r,B.u,0,B.x),m),u,m,m,m,B.a4)},
alP(d,e,f){var x,w,v=null,u=A.d(d),t=A.d(d).ax.a===B.p?B.bZ:B.M
u=u.ok.z
x=A.aA(A.o(e,v,v,v,v,v,u,v,v,v),1,v)
w=f>=2147483647?"Unlimited":""+f
return A.fa(new A.Y(B.nz,A.an(A.c([x,A.o(w,v,v,v,v,v,u==null?v:u.cR(B.cB),v,v,v)],y.p),B.y,v,B.r,B.u,0,v,v),v),t,v,v,v,B.a4)}}
C.U6.prototype={
gauJ(){var x=this.f
return A.ck(A.b0(x),A.b7(x),A.bG(x),0,0)},
Y(){var x=null
return new C.a2z(new A.pC(!1,$.ae()),new A.bq(x,y.B),new A.bq(x,y.t),x,A.D(y.bw,y.aI),x,!0,x)}}
C.a2z.prototype={
gml(){var x=this.d
return x===$?this.d=new A.a6b(this.a.r,$.ae()):x},
gw9(){var x,w=this.e
if(w===$){x=this.a.c
x=x==null?null:x.a
w=this.e=new A.N5(x,$.ae())}return w},
gpR(){var x,w=this.f
if(w===$){x=this.a.c
x=x==null?null:x.b
w=this.f=new A.N5(x,$.ae())}return w},
ghD(){this.a.toString
return null},
hp(d,e){var x=this
x.fa(x.gml(),"entry_mode")
x.fa(x.gw9(),"selected_start")
x.fa(x.gpR(),"selected_end")
x.fa(x.r,"autovalidate")},
m(){var x=this
x.gml().m()
x.gw9().m()
x.gpR().m()
x.r.m()
x.aLg()},
a3a(){var x,w=this,v=w.gml(),u=v.y,t=u==null
if((t?A.t(v).i("aN.T").a(u):u)!==B.eq)v=(t?A.t(v).i("aN.T").a(u):u)===B.le
else v=!0
if(v)if(!w.x.gaf().kS()){w.v(new C.buq(w))
return}if(w.gakZ()){v=w.gw9()
u=v.y
v=u==null?A.t(v).i("aN.T").a(u):u
v.toString
u=w.gpR()
t=u.y
u=t==null?A.t(u).i("aN.T").a(t):t
u.toString
x=new A.Kb(v,u,y.T)}else x=null
v=w.c
v.toString
A.ao(v,!1).b1(x)},
a2R(){var x=this.c
x.toString
A.ao(x,!1).b1(null)},
a34(){this.v(new C.bup(this))},
S0(d){var x=this.a
if(d.jq(x.d)||d.kG(x.e))return!1
return!0},
b1w(d){this.v(new C.bur(this,d))},
aZn(d){this.v(new C.buo(this,d))},
gakZ(){var x=this.gw9(),w=x.y
if((w==null?A.t(x).i("aN.T").a(w):w)!=null){x=this.gpR()
w=x.y
x=(w==null?A.t(x).i("aN.T").a(w):w)!=null}else x=!1
return x},
C(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2="Select range",b3={}
A.d(b4)
x=y.w
w=A.ax(b4,B.dU,x).w.geH()
A.cb(b4,B.aB,y.y).toString
v=A.qz(b4)
A.d(b4)
u=A.oL(b4)
b3.a=null
t=b0.gml()
s=t.y
r=s==null
if((r?A.t(t).i("aN.T").a(s):s)!==B.eO)q=(r?A.t(t).i("aN.T").a(s):s)===B.eq
else q=!0
switch(r?A.t(t).i("aN.T").a(s):s){case B.eO:case B.ns:t=b0.a.fr
s=b0.gw9()
r=s.y
s=r==null?A.t(s).i("aN.T").a(r):r
r=b0.gpR()
p=r.y
r=p==null?A.t(r).i("aN.T").a(p):p
p=b0.a
o=p.d
n=p.e
m=p.dy
p=p.gauJ()
l=b0.gakZ()?b0.gRH():b1
if(q){k=b0.a.db
k=A.aT(B.lV,b1,b1,b1,b1)
k=A.bB(b1,b1,b1,k,b1,b1,b0.gIF(),B.ab,b1,b1,"Switch to input",b1)}else k=b1
b0.a.toString
b3.a=new C.apf(s,r,o,n,m,p,b0.gakI(),b0.gakn(),l,b0.gRz(),"Save",b2,t,k,b0.w)
j=A.ax(b4,B.f5,x).w.a
i=v.fx
if(i==null){x=u.fx
x.toString
i=x}h=v.fy
if(h==null)h=u.gNj()
g=v.go
if(g==null)g=u.gNk()
f=v.id
if(f==null)f=u.id
e=B.ab
break
case B.eq:case B.le:x=b0.a.fr
t=b0.gw9()
s=t.y
if(s==null)s=A.t(t).i("aN.T").a(s)
r=b0.gpR()
p=r.y
if(p==null)p=A.t(r).i("aN.T").a(p)
o=b0.a.gauJ()
n=w===B.d5
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
t=t==null?b1:A.ck(A.b0(t),A.b7(t),A.bG(t),0,0)
r=r==null?b1:A.ck(A.b0(r),A.b7(r),A.bG(r),0,0)
k=A.a2(A.c([B.d7,new C.a4e(t,r,A.ck(A.b0(d),A.b7(d),A.bG(d),0,0),A.ck(A.b0(a0),A.b7(a0),A.bG(a0),0,0),b0.gakI(),b0.gakn(),a4,a5,a3,a6,a7,a8,a9,!0,a2,l,a1,k,b0.x),B.d7],y.p),B.y,b1,B.r,B.u,0,B.x)
if(q){b0.a.toString
t=A.bB(b1,b1,b1,B.Ou,b1,b1,b0.gIF(),B.ab,b1,b1,"Switch to calendar",b1)}else t=b1
b0.a.toString
b3.a=new C.asT(s,p,o,new A.aO(b1,m,new A.Y(B.B8,k,b1),b1),b0.gRH(),b0.gRz(),"OK","Cancel",b2,t,x,b1)
if(n)j=B.FZ
else j=D.fkI
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
e=B.Kh
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
return A.DC(b1,x,A.aEn(A.LH(new A.e7(new C.bus(b3),b1),1.3),b1,B.ep,b1,B.al,b1,s,t),B.cL,b1,i,e,B.od,h,f,g)}}
C.apf.prototype={
C(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null
A.d(a3)
x=A.cb(a3,B.aB,y.y)
x.toString
w=y.w
v=A.ax(a3,B.dU,w).w.geH()
u=A.qz(a3)
A.d(a3)
t=A.oL(a3)
s=u.fr
if(s==null)s=t.fr
r=u.k1
if(r==null)r=t.gNf()
q=u.k2
if(q==null)q=t.gNg()
p=q.b5(0.38)
o=u.k3
if(o==null)o=t.gNh()
n=u.k4
if(n==null)n=t.gNi()
m=n==null?a2:n.lf(q)
n=a1.ax
l=a1.c
k=a1.d
j=C.clh(x,n,l,k)
i=C.clg(x,n,l,k,new A.aE(Date.now(),0,!1))
x=o==null
if(x)h=a2
else h=o.lf(l!=null?q:p)
if(x)g=a2
else g=o.lf(k!=null?q:p)
f=A.oD(a2,a2,a2,a2,p,a2,a2,a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)
e=new A.ed(a2,a2,a2,a2,a2,q,a2,a2,a2)
x=y.p
d=A.c([],x)
if(v===B.ez&&a1.ay!=null){a0=a1.ay
a0.toString
d.push(a0)}d.push(A.bw(A.o(a1.as,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a1.z,a2,f))
d.push(B.b6)
w=A.ax(a3,B.on,w).w.a.a<360?42:72
a0=a1.at
x=A.c([new A.aO(w,a2,a2,a2),A.aA(A.br(a2,a2,a2,A.a2(A.c([A.o(a0,a2,1,B.aq,a2,a2,m,a2,a2,a2),B.ah,A.an(A.c([A.o(j,a2,1,B.aq,a2,a2,h,a2,a2,a2),A.o(" \u2013 ",a2,a2,a2,a2,a2,h,a2,a2,a2),new A.fA(1,B.cj,A.o(i,a2,1,B.aq,a2,a2,g,a2,a2,a2),a2)],x),B.y,a2,B.r,B.u,0,a2,a2),B.Z],x),B.S,a2,B.r,B.u,0,B.x),!1,a2,a2,a2,!0,a2,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a0+" "+j+" to "+i,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,B.a7,a2),1,a2)],x)
if(v===B.d5&&a1.ay!=null){w=a1.ay
w.toString
x.push(new A.Y(B.fl,A.vV(w,e,a2),a2))}x=A.m_(d,e,r,new C.aj1(A.an(x,B.y,a2,B.r,B.u,0,a2,a2),D.fko,a2),0,e,new A.TA(B.a6C,a2,a2,a2,a2,B.IL,a2,a1.Q,a2,a2,a2,a2,B.q4,a2),0,a2)
w=a1.e
d=a1.f
a0=a1.w
l=l!=null?A.ck(A.b0(l),A.b7(l),A.bG(l),0,0):a2
k=k!=null?A.ck(A.b0(k),A.b7(k),A.bG(k),0,0):a2
w=A.ck(A.b0(w),A.b7(w),A.bG(w),0,0)
d=A.ck(A.b0(d),A.b7(d),A.bG(d),0,0)
return A.f4(!0,A.hy(x,s,new C.a1H(l,k,w,d,a1.r,A.ck(A.b0(a0),A.b7(a0),A.bG(a0),0,0),a1.x,a1.y,n,a2),a2,a2),!1,B.ab,!1,!1)}}
C.a1H.prototype={
Y(){return new C.a1I(new A.bq(null,y.B),new A.rH())}}
C.a1I.prototype={
au(){var x,w,v,u=this
u.aR()
x=A.AM(0,null,null)
u.x=x
x.aa(u.gbcx())
x=u.a
w=u.f=x.c
u.r=x.d
if(w==null)w=x.w
v=x.e
if(!w.jq(v)&&!w.kG(x.f))u.w=A.adb(v,w)
u.y=u.w!==0},
m(){var x=this.x
x===$&&A.b()
x.m()
this.al()},
bcy(){var x,w=this,v=w.x
v===$&&A.b()
v=v.gbv().at
v.toString
x=B.h.gdg(w.x.f).z
x.toString
if(v<=x)w.v(new C.bpZ(w))
else{v=w.y
v===$&&A.b()
if(!v)w.v(new C.bq_(w))}},
bi6(){var x=this.c
x.toString
switch(A.d(x).w.a){case 0:case 1:A.L_()
break
case 2:case 3:case 4:case 5:break}},
bht(d){this.bi6()
this.v(new C.bq0(this,d))},
agc(d,e,f){var x,w,v=this,u=v.w,t=f?u-e-1:u+e
u=v.a.e
x=A.ck(A.b0(u),A.b7(u)+t,1,0,0)
u=v.a
w=u.z
return new C.a4z(v.f,v.r,u.w,v.gbhs(),u.e,u.f,x,u.r,w,null)},
C(d){var x,w,v,u,t,s,r=this,q=null,p=y.p,o=A.c([D.fDv],p),n=r.y
n===$&&A.b()
if(n)o.push(D.aiV)
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
p=A.c([C.ci7(new C.bq1(r),s,q),C.ci7(new C.bq2(r),A.adb(w,v)+1-s,t)],p)
o.push(A.aA(new C.a1J(new C.acY(p,B.a6,!1,u,q,q,q,!1,t,0,q,q,q,B.mR,B.T,q,q,B.D,B.c3,r.d),w,v,n,x,q),1,q))
return A.a2(o,B.y,q,B.r,B.u,0,B.x)}}
C.a1J.prototype={
Y(){return new C.a1K()}}
C.a1K.prototype={
au(){var x,w,v=this
v.aR()
x=y.k
w=y.bc
v.e=A.Q([B.GE,new A.dX(v.gaZQ(),new A.c7(A.c([],x),w),y.d),B.GF,new A.dX(v.gaZS(),new A.c7(A.c([],x),w),y.e),B.yN,new A.dX(v.gaZ0(),new A.c7(A.c([],x),w),y.c)],y.bv,y.V)
v.f=A.kd(!0,"Day Grid",!0,!0,null,null,!1)},
m(){var x=this.f
x===$&&A.b()
x.m()
this.al()},
aZP(d){this.v(new C.bq4(this,d))},
aZR(d){var x,w=this.f
w===$&&A.b()
w.fT()
w=this.f
x=w.e
x.toString
A.o1(x).pN(w,!0)},
aZT(d){var x,w=this.f
w===$&&A.b()
w.fT()
w=this.f
x=w.e
x.toString
A.o1(x).pN(w,!1)},
aZ1(d){this.v(new C.bq3(this,d))},
b5c(d,e){var x,w,v,u=this.c.T(y.I).w
this.a.toString
if(u===B.c5)if(e===B.mf)x=B.mW
else x=e===B.mW?B.mf:e
else x=e
w=B.a_F.h(0,x)
w.toString
v=A.ck(A.b0(d),A.b7(d),A.bG(d)+w,0,0)
w=this.a
if(!v.jq(w.d)&&!v.kG(w.e))return v
return null},
C(d){var x,w,v,u,t=this,s=null,r=t.e
r===$&&A.b()
x=t.f
x===$&&A.b()
w=t.a.r
v=x.gck()?t.w:s
u=t.f.gck()?t.r:s
return A.aeL(r,!1,new C.a3A(w,v,u,t.a.c,s),!0,x,!0,B.cd,t.gaZO(),s,s,B.a_t)}}
C.a3A.prototype={
dj(d){return!this.f.AR(this.r,d.r)||this.w!=d.w}}
C.aqD.prototype={
aXa(d,e){var x,w=null,v=A.c([],y.p)
for(x=0;v.length<7;x=(x+1)%7)v.push(new A.kK(!0,new A.fw(B.ai,w,w,A.o(B.V3[x],w,w,w,w,w,d,w,w,w),w),w))
return v},
C(d){var x,w=A.d(d),v=w.ok.x.lf(w.ax.k3),u=A.cb(d,B.aB,y.y)
u.toString
x=this.aXa(v,u)
B.h.hy(x,0,B.aK)
x.push(B.aK)
u=A.ax(d,B.dU,y.w).w.geH()===B.ez?384:480
return new A.e8(new A.aw(0,u,0,42),A.c5G(A.a_u(x,!0,!1,!0),D.Iu,null,!0),null)}}
C.bHl.prototype={
Gu(d){return new C.bHp(9,Math.max((d.w-16)/7,0),8,A.y0(d.x))},
mf(d){return!1}}
C.bHp.prototype={
acC(d){return this.a*B.l.ao(d,50)},
acA(d){return Math.max(0,this.a*B.l.dU(d/50)-1)},
aX8(d,e){var x,w,v,u=this
if(u.d){x=u.b
w=u.c
v=e?w:x
return(u.a-2)*x+2*w-d-v}return d},
Or(d){var x,w=this,v=w.a,u=B.f.aC(d,v),t=u===0||u===v-1,s=w.b,r=w.c,q=Math.max(0,(u-1)*s+r)
v=B.f.ev(d,v)
x=w.aX8(q,t)
if(t)s=r
return new A.alL(v*50,x,42,s)},
a7i(d){return 50*(B.f.ev(d-1,this.a)+1)-8}}
C.a4z.prototype={
Y(){return new C.a4A()}}
C.a4A.prototype={
au(){var x,w,v,u,t
this.aR()
x=this.a.x
w=A.U7(A.b0(x),A.b7(x))
v=J.h0(w,y.J)
for(u=0;u<w;u=t){t=u+1
v[u]=A.kd(!0,"Day "+t,!0,!0,null,null,!0)}this.d=v},
bC(){var x,w,v=this
v.d1()
x=v.c.T(y.Q)
w=x==null?null:x.r
if(w!=null){x=v.a
x=x.z.AS(x.x,w)}else x=!1
if(x){x=v.d
x===$&&A.b()
x[A.bG(w)-1].fT()}},
m(){var x,w,v,u,t=this.d
t===$&&A.b()
x=t.length
w=0
for(;w<t.length;t.length===x||(0,A.F)(t),++w){v=t[w]
u=v.ax
if(u!=null)u.aX()
v.f4()}this.al()},
aSQ(d){var x,w,v
if(d){x=this.c.T(y.Q)
w=x==null?null:x.w
if(w!=null){switch(w.a){case 0:case 3:v=B.lq
break
case 1:case 2:v=B.lp
break
default:v=B.Fu}x=$.au.aP$.d.c.e
x.toString
A.bbF(x,0,v,B.cf,B.al)}}},
C(b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.d(b5),b4=A.cb(b5,B.aB,y.y)
b4.toString
x=b1.a.x
w=A.b0(x)
v=A.b7(x)
u=A.U7(w,v)
b1.a.toString
t=A.cdh(w,v,b4)
s=B.l.dU((u+t)/7)
x=y.p
r=A.c([],x)
for(q=0-t+1,p=b1.gaSP(),o=y.x;q<=u;++q)if(q<1)r.push(B.rb)
else{b1.a.toString
n=A.ck(w,v,q,0,0)
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
a0=m.z.AR(m.e,n)
m=b1.a
l=m.z
k=b1.d
k===$&&A.b()
k=k[A.bG(n)-1]
m=m.f
b5.T(o)
j=A.d(b5)
j=j.b7.ok
if(j==null){A.d(b5)
j=A.oL(b5)
j=j.gBf()}r.push(new C.a2C(n,k,m,p,j,i,h,g,f,e,d,a0,l,b2))}a1=A.c([],x)
for(p=t>0,a2=0;a2<s;++a2){a3=a2*7
a4=Math.min(a3+7,r.length)
a5=B.h.du(r,a3,a4)
b1.a.toString
a6=A.ck(w,v,a3-t+1,0,0)
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
m=A.oL(b5)
m=m.gBf()}m=new A.JV(m,!0,B.rb,b2)}else m=B.rb
B.h.hy(a5,0,m)
m=r.length
if(!(a4<m))m=a4===m&&B.f.aC(m,7)===0
else m=!0
if(m){b1.a.toString
a8=A.ck(w,v,a4-t,0,0)
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
m=A.oL(b5)
m=m.gBf()}m=new A.JV(m,!0,B.rb,b2)}else m=B.rb
a5.push(m)}B.h.J(a1,a5)}b0=A.ax(b5,B.dU,y.w).w.geH()===B.ez?384:480
return A.a2(A.c([new A.e8(new A.aw(0,b0,0,1/0).Zj(58),new A.Y(B.eQ,new A.et(B.d9,b2,b2,new A.kK(!0,A.o(b4.Wr(b1.a.x),b2,b2,b2,b2,b2,b3.ok.z.lf(b3.ax.k3),b2,b2,b2),b2),b2),b2),b2),new A.e8(new A.aw(0,b0,0,s*42+(s-1)*8),A.c5G(A.a_u(a1,!0,!1,!0),D.Iu,B.xL,!1),b2),B.Q],x),B.y,b2,B.r,B.u,0,B.x)}}
C.a2C.prototype={
Y(){return new C.aqE(A.BH())},
t_(d){return this.e.$1(d)}}
C.aqE.prototype={
m(){var x=this.d
x.R$=$.ae()
x.N$=0
this.al()},
C(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=A.d(a4),a2=a1.ax,a3=A.cb(a4,B.aB,y.y)
a3.toString
x=A.qz(a4)
A.d(a4)
w=A.oL(a4)
v=a4.T(y.I).w
u=d.a
t=u.r
s=a1.ok.z
r=new C.buz(x,w)
q=new C.buA(r)
p=A.aQ(y.cD)
if(u.w)p.B(0,B.a5)
u=d.a
if(u.y||u.z)p.B(0,B.ac)
u=d.d
u.sp(p)
o=y._
n=q.$1$2(new C.buu(),p,o)
m=q.$1$2(new C.buv(),p,o)
l=q.$1$2(new C.buw(),p,y.b8)
if(l==null)l=B.l6
q=d.a
k=a0
if(q.y||q.z){s=s==null?a0:s.lf(n)
j=new A.jm(m,a0,a0,a0,l)
q=d.a
if(q.x&&!q.as)k=new C.a3Z(t,q.y?D.GZ:D.a94,v,a0)}else{j=a0
i=a0
if(q.Q){k=new C.a3Z(t,D.a95,v,a0)
if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.lf(A.az(97,q.A()>>>16&255,q.A()>>>8&255,q.A()&255))}}else if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.lf(A.az(97,q.A()>>>16&255,q.A()>>>8&255,q.A()&255))}else if(q.at){s=s==null?a0:s.lf(a2.b)
q=x.CW
if(q==null)q=w.gBy()
j=new A.jm(a0,a0,a0,a0,l.jl(q.U(a2.b)))}}h=a3.LR(A.bG(d.a.c))
q=d.a
g=q.at?", Today":""
f=h+", "+a3.Wq(q.c)+g
a3=d.a
q=a3.y
if(q)f="Start date "+f
else if(a3.z)f="End date "+f
q=q||a3.z
e=A.ar(B.ai,A.br(a0,a0,a0,new A.kK(!0,A.o(h,a0,a0,a0,a0,a0,s,a0,a0,a0),a0),!1,a0,a0,a0,!1,a0,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,f,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,q,a0,a0,a0,a0,a0,a0,B.a7,a0),B.F,a0,a0,j,a0,a0,a0,a0,a0,a0,a0,a0)
if(k!=null)e=A.hs(e,a0,a0,k,B.aS)
return!a3.w?A.cf0(!1,a0,!0,e,!0,l,!0,!1,a0,a3.d,a0,B.bR,a0,a0,a0,a0,a0,a3.f,a0,a0,a0,a0,a0,a0,a0,a0,new C.bux(d),a0,a0,a0,new A.ba(new C.buy(d,r),y.cS),a0,a0,a0,u):e}}
C.PM.prototype={
H(){return"_HighlightPainterStyle."+this.b}}
C.a3Z.prototype={
b_(d,e){var x,w,v,u,t,s,r=this.c
if(r===D.fE1)return
$.aq()
x=A.bi()
x.r=this.b.gp()
x.b=B.cl
w=this.d
A:{if(B.c5===w){v=!0
break A}if(B.bf===w){v=!1
break A}v=null}B:{u=D.a94===r
t=!(u&&v)
if(t){s=D.GZ===r
v=s&&!v}else{s=null
v=!0}if(v){r=e.a/2
d.j3(new A.Z(r,0,r+r,0+e.b),x)
break B}if(!u)v=t?s:D.GZ===r
else v=!0
if(v){d.j3(new A.Z(0,0,0+e.a/2,0+e.b),x)
break B}if(D.a95===r){d.j3(new A.Z(0,0,0+e.a,0+e.b),x)
break B}break B}},
f2(d){return!1}}
C.asT.prototype={
aWE(d,e,f,g){var x,w,v,u=A.cb(d,B.aB,y.y)
u.toString
x=this.as
w=C.clh(u,x,e,f)
v=C.clg(u,x,e,f,g)
if(e==null||f==null)return"Date Range"
switch(d.T(y.I).w.a){case 0:u=v+" \u2013 "+w
break
case 1:u=w+" \u2013 "+v
break
default:u=null}return u},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
A.d(d)
x=A.cb(d,B.aB,y.y)
x.toString
w=A.ax(d,B.dU,y.w).w.geH()
v=A.qz(d)
A.d(d)
u=A.oL(d)
if(w===B.d5){t=v.w
s=t==null?u.gF3():t}else s=A.d(d).ok.f
r=v.r
if(r==null)r=u.gAI()
s=s==null?j:s.U(r)
t=k.c
q=k.d
p=k.aWE(d,t,q,k.e)
o=t!=null&&q!=null?x.a8U(t)+" \u2013 "+x.a8U(q):""
n=A.cjA(k.Q,k.z,w===B.ez,w,o,s,p)
x=A.bw(A.o(k.y,j,j,j,j,j,j,j,j,j),j,j,j,k.w,j,j)
t=y.p
m=new A.e8(B.I_,new A.Y(B.fl,new A.et(B.qd,j,j,A.b1W(j,A.c([x,A.bw(A.o(k.x,j,j,j,j,j,j,j,j,j),j,j,j,k.r,j,j)],t),B.a0a,B.x,0,8),j),j),j)
x=A.bO(d,B.bk)
x=x==null?j:x.gci()
x=(x==null?B.aX:x).k9(0,1.3).b6(14)
l=B.FZ.aF(0,x/14)
switch(w.a){case 0:return A.mj(new C.bEy(k,!0,l,n,m))
case 1:return A.an(A.c([n,new A.fA(1,B.cj,A.a2(A.c([A.aA(k.f,1,j),m],t),B.b3,j,B.r,B.W,0,B.x),j)],t),B.b3,j,B.r,B.W,0,j,j)}}}
C.a4e.prototype={
Y(){return new C.PS()}}
C.PS.prototype={
au(){var x,w,v=this
v.aR()
x=v.a
v.f=x.c
w=$.ae()
v.w=new A.bV(B.aL,w)
v.r=x.d
v.x=new A.bV(B.aL,w)},
m(){var x,w=this.w
w===$&&A.b()
x=$.ae()
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
x=A.cb(x,B.aB,y.y)
x.toString
w=t.f
if(w!=null){t.a.toString
w=x.a8T(w)
t.d=w
t.a.toString
v=!t.Q
u=t.w
u===$&&A.b()
t.ar7(u,w,v)
t.Q=v}w=t.r
if(w!=null){t.a.toString
x=x.a8T(w)
t.e=x
w=t.x
w===$&&A.b()
t.ar7(w,x,!1)}},
kS(){var x,w,v,u=this,t={},s=u.arZ(u.f)
t.a=s
x=u.arZ(u.r)
if(s==null&&x==null){w=u.f
w.toString
v=u.r
v.toString
if(w.kG(v)){u.a.toString
w=u.c
w.toString
A.cb(w,B.aB,y.y).toString
t.a="Invalid range."}}u.v(new C.bEB(t,u,x))
return t.a==null&&x==null},
an0(d){var x=this.c
x.toString
x=A.cb(x,B.aB,y.y)
x.toString
this.a.toString
return x.azd(d)},
arZ(d){var x,w=this
if(d==null){w.a.toString
x=w.c
x.toString
A.cb(x,B.aB,y.y).toString
return"Invalid format."}else if(!w.S0(d)){w.a.toString
x=w.c
x.toString
A.cb(x,B.aB,y.y).toString
return"Out of range."}return null},
S0(d){var x=this.a
if(d.jq(x.e)||d.kG(x.f))return!1
return!0},
ar7(d,e,f){var x=d.a.aui(e)
d.fd(f?x.mD(A.eg(B.a_,0,e.length,!1)):x)},
b1v(d){var x=this
x.v(new C.bEA(x,d))
if(x.a.CW)x.kS()},
aZm(d){var x=this
x.v(new C.bEz(x,d))
if(x.a.CW)x.kS()},
C(d){var x,w,v,u,t,s,r=this,q=null,p="mm/dd/yyyy"
A.d(d)
A.cb(d,B.aB,y.y).toString
x=A.zt(d)
w=x.p1
if(w==null)w=B.c9
v=r.w
v===$&&A.b()
u=x.dy
t=r.a
t.toString
v=A.aA(A.cX(q,B.as,!0,q,!0,B.D,q,A.d1(),v,q,q,q,q,q,2,A.kR(q,w,q,q,q,q,q,q,!0,q,q,q,q,q,r.y,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q,q,"Start Date",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.T,!0,q,!0,q,!1,q,B.aQ,q,q,q,q,q,t.cx,q,q,q,1,q,q,!1,"\u2022",q,r.gb1u(),q,q,q,!1,q,q,!1,q,!0,q,B.aO,q,q,q,q,q,q,q,q,q,q,q,q,!0,B.af,q,B.aG,q,q,q,q),1,q)
t=r.x
t===$&&A.b()
s=r.a
s.toString
return A.an(A.c([v,B.b6,A.aA(A.cX(q,B.as,!1,q,!0,B.D,q,A.d1(),t,q,q,q,q,q,2,A.kR(q,w,q,q,q,q,q,q,!0,q,q,q,q,q,r.z,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q,q,"End Date",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.T,!0,q,!0,q,!1,q,B.aQ,q,q,q,q,q,s.cx,q,q,q,1,q,q,!1,"\u2022",q,r.gaZl(),q,q,q,!1,q,q,!1,q,!0,q,B.aO,q,q,q,q,q,q,q,q,q,q,q,q,!0,B.af,q,B.aG,q,q,q,q),1,q)],y.p),B.S,q,B.r,B.u,0,q,q)}}
C.a8t.prototype={
b0(d){this.bd(d)
this.nJ()},
bC(){var x,w,v,u,t=this
t.d1()
x=t.bV$
w=t.gkO()
v=t.c
v.toString
v=A.nn(v)
t.fB$=v
u=t.mu(v,w)
if(w){t.hp(x,t.e8$)
t.e8$=!1}if(u)if(x!=null)x.m()},
m(){var x,w=this
w.fA$.aZ(0,new C.bWW())
x=w.bV$
if(x!=null)x.m()
w.bV$=null
w.al()}}
C.aj1.prototype={
C(d){return this.c},
$iFO:1,
guQ(){return this.d}}
C.acY.prototype={
ati(d){return this.dx}}
var z=a.updateTypes(["~()","B(fD)","B(pT)","X(X,pT)","ug(aX<f,X>)","~(aE?)","~(B)","~(f)","f(X)","N<Bc?>(al)","N<fD>(al)","fD()","N<uv>(al)","pT(@)","AA(@)","N3(al)","ue()","f(f)","N<rn>(al)","h(rn)","N<~>(bm<ro>)","ug(f,f)","JW(m7)","ug(qT)","h?(fD)","h(uv)","~(aE)","~(ok)","~(or)","~(lr)","Cc()"])
C.c0D.prototype={
$1(d){d.S($.dA(),y.L)
return d.S($.c3O(),y.C).OC()},
$S:z+9}
C.c0y.prototype={
$1(d){return this.aBV(d)},
aBV(d){var x=0,w=A.m(y.m),v,u,t,s,r
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(d.S($.c3Y().glO(),y.ao),$async$$1)
case 3:u=f
t=J
s=u
r=C
x=4
return A.e(d.S($.crL().glO(),y.U),$async$$1)
case 4:v=t.csi(s,new r.c0w(f),new C.c0x(u))
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+10}
C.c0w.prototype={
$1(d){var x=this.a
x=x==null?null:x.a
if(x==null)x="free"
return d.a===x},
$S:z+1}
C.c0x.prototype={
$0(){return J.k2(this.a)},
$S:z+11}
C.c0E.prototype={
$1(d){d.S($.dA(),y.L)
return d.S($.c3O(),y.C).OD()},
$S:z+12}
C.b91.prototype={
$1(d){return C.cCT(A.aM(y.f.a(d),y.N,y.z))},
$S:z+13}
C.b90.prototype={
$1(d){var x,w,v=A.aM(y.f.a(d),y.N,y.z),u=v.h(0,"id")
u=J.be(u==null?"":u)
x=v.h(0,"room_id")
if(x!=null)J.be(x)
x=v.h(0,"status")
x=J.be(x==null?"draft":x)
w=v.h(0,"total_cents")
v=w==null?v.h(0,"amount_cents"):w
return new C.AA(u,x,B.l.F(A.dO(v==null?0:v)))},
$S:z+14}
C.b9_.prototype={
$1(d){return A.aM(y.f.a(d),y.N,y.z)},
$S:165}
C.c1l.prototype={
$1(d){return new C.N3(d.S($.dB(),y.cx))},
$S:z+15}
C.c1k.prototype={
$1(d){return this.aC1(d)},
aC1(d){var x=0,w=A.m(y.D),v,u,t,s,r,q,p
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:d.S($.dA(),y.L)
q=A
p=J
x=4
return A.e(d.S($.iK(),y.h).Gy(),$async$$1)
case 4:x=3
return A.e(q.jI(p.bX(f,new C.c1j(d),y.as),!1,y.v),$async$$1)
case 3:u=f
t=A.c([],y.cR)
for(s=J.aJ(u);s.q();){r=s.gI()
if(r.b)t.push(r.a)}v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:387}
C.c1j.prototype={
$1(d){return this.aC0(d)},
aC0(d){var x=0,w=A.m(y.v),v,u=this,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=A
s=d
x=3
return A.e(u.a.S($.j5().$1(d.a).glO(),y.g),$async$$1)
case 3:v=new t.avW(s,f.iI(B.a0w))
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:1156}
C.b8L.prototype={
$1(d){return d.a===this.a},
$S:58}
C.b8M.prototype={
$1(d){return d.b},
$S:370}
C.c1i.prototype={
$1(d){return this.aC_(d)},
aC_(d){var x=0,w=A.m(y.s),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.i(function(a0,a1){if(a0===1)return A.j(a1,w)
for(;;)switch(x){case 0:d.S($.dA(),y.L)
x=3
return A.e(d.S($.c4_().glO(),y.ch),$async$$1)
case 3:u=a1
t=d.S($.aCZ(),y.j)
s=t.a_(new A.aE(Date.now(),0,!1))
r=y.N
q=J.bX(u,new C.c1h(),r)
p=A.K(q,q.$ti.i("ai.E"))
o=d.S($.crV(),y.A)
if(p.length===0){v=new C.rn(t,s.b,s.a,B.DW,D.a6R,D.a6S,B.a_z,B.cD)
x=1
break}q=s.b
n=s.a
x=4
return A.e(A.jI(A.c([o.OQ(n,p,q),o.Ou(p),o.Oo(p)],y.a9),!1,y.K),$async$$1)
case 4:m=a1
l=J.av(m)
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
return A.e(o.Ox(f),$async$$1)
case 5:e=a1
v=new C.rn(t,q,n,u,k,j,C.cNA(i),e)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+18}
C.c1h.prototype={
$1(d){return d.a},
$S:370}
C.bk_.prototype={
$1(d){return d==null?null:A.kI(J.be(d))},
$S:168}
C.c2Z.prototype={
$1(d){return d.f},
$S:z+2}
C.c3_.prototype={
$2(d,e){return d+e.WV(this.a)},
$S:z+3}
C.c34.prototype={
$1(d){return d.f&&d.w==null},
$S:z+2}
C.c35.prototype={
$2(d,e){return d+e.WV(this.a)},
$S:z+3}
C.bZ_.prototype={
$2(d,e){var x=this.a,w=x.h(0,e)
w.toString
x=x.h(0,d)
x.toString
return B.l.bo(w,x)},
$S(){return this.b.i("w(0,0)")}}
C.c_L.prototype={
$1(d){return A.q(d.h(0,1))+","},
$S:88}
C.b9l.prototype={
$0(){return B.bd},
$S:24}
C.b9k.prototype={
$2(d,e){return this.a.aiK(this.b,"Could not load reports.",new C.b9i(this.c))},
$S:95}
C.b9i.prototype={
$0(){return this.a.bq($.c4_())},
$S:0}
C.b9j.prototype={
$1(d){var x=this
if(J.eE(d))return x.a.alc(x.b,R.Oc,"No billing visibility","Reports cover rooms you own or where your role grants billing access.")
return x.a.bbb(x.b,x.c)},
$S:1158}
C.b9h.prototype={
$0(){return B.bd},
$S:24}
C.b9g.prototype={
$2(d,e){return this.a.aiK(this.b,"Could not load report data.",new C.b9e(this.c))},
$S:95}
C.b9e.prototype={
$0(){return this.a.bq($.cbt())},
$S:0}
C.b9f.prototype={
$1(d){var x=this.a,w=this.b
return A.a2(A.c([x.aOY(w,d),B.Q,x.aQw(w,d),B.Q,x.beW(w,d),B.Q,x.aVy(w,this.c,d)],y.p),B.S,null,B.r,B.u,0,B.x)},
$S:z+19}
C.b9d.prototype={
$1(d){return this.aBH(d)},
aBH(d){var x=0,w=A.m(y.n),v,u=this,t,s,r,q
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:q=d.ga8(d)
x=q===D.Fm?3:5
break
case 3:x=6
return A.e(C.c9I(u.a,A.ck(2020,1,1,0,0),new A.aE(Date.now(),0,!1)),$async$$1)
case 6:t=f
if(t==null){x=1
break}s=t.a
r=t.b
u.b.X($.aCZ().gce(),y.M).saV(new C.ue(D.Fm,s,r))
x=4
break
case 5:u.b.X($.aCZ().gce(),y.M).saV(new C.ue(q,null,null))
case 4:case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+20}
C.b99.prototype={
$2(d,e){return d+e},
$S:82}
C.b9a.prototype={
$0(){var x=this
return x.a.Il(x.b,x.c,x.d)},
$S:0}
C.b9b.prototype={
$0(){var x=this
return x.a.QZ(x.b,x.c,x.d)},
$S:0}
C.b9c.prototype={
$1(d){return'"'+A.cz(d,'"','""')+'"'},
$S:18}
C.b96.prototype={
$2(d,e){return d+e},
$S:82}
C.b98.prototype={
$2(d,e){var x,w="pw.1",v=null
A.C(w)
A.C(w)
A.C(w)
A.C(w)
x=E.c9(d,F.c5(v,v,v,v,v,v,v,v,v,G.at,v,v,11,v,v,v,!0,v,v,v,v))
A.C(w)
A.C(w)
A.C(w)
return E.Gh(A.c([x,E.c9(e,F.c5(v,v,v,v,v,v,v,v,v,G.at,v,v,11,v,G.dX,v,!0,v,v,v,v))],y.o),M.nq,M.zR)},
$S:z+21}
C.b97.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="pw.1",h=null,g="n/a"
A.C(i)
A.C(i)
A.C(i)
A.C(i)
A.C(i)
A.C(i)
x=H.afl(E.c9("CaseThread \u2014 Executive Summary",F.c5(h,h,h,h,h,h,h,h,h,G.at,h,h,20,h,G.dX,h,!0,h,h,h,h)),0,h)
A.C(i)
w=j.a
v=w.a.gkI()
u=j.b
t=B.n.a7(u.hF().j(0),0,16)
A.C(i)
A.C("pdf.1")
t=E.c9("Window: "+v+" \xb7 Generated "+t,F.c5(h,T.acZ,h,h,h,h,h,h,h,G.at,h,h,10,h,h,h,!0,h,h,h,h))
A.C(i)
v=E.eB(h,16,h)
A.C(i)
s=H.afl(h,2,"Totals")
r=j.c
q=j.d
q=r.$2("Billable hours",q==null?g:C.Cv(q))
p=j.e
p=r.$2("Unbilled hours",p==null?g:C.Cv(p))
o=j.f
n=o==null
m=r.$2("Invoiced",n?g:C.c_K(o.a))
o=r.$2("Outstanding (draft + sent)",n?g:C.c_K(o.b))
l=r.$2("Storage used",C.c9m(j.r))
A.C(i)
k=E.eB(h,16,h)
A.C(i)
k=A.c([x,t,v,s,q,p,m,o,l,k,H.afl(h,2,"Billable hours by room")],y.o)
l=j.w
o=C.c93(l,u)
m=A.t(o).i("d3<1,2>")
m=A.rB(new A.d3(o,m),10,m.i("z.E"))
o=y.l
B.h.J(k,A.ie(m,new C.b93(r,w),A.t(m).i("z.E"),o))
A.C(i)
k.push(E.eB(h,16,h))
A.C(i)
k.push(H.afl(h,2,"Billable hours by member"))
u=C.c92(l,u)
l=A.t(u).i("d3<1,2>")
l=A.rB(new A.d3(u,l),10,l.i("z.E"))
B.h.J(k,A.ie(l,new C.b94(r,w),A.t(l).i("z.E"),o))
A.C(i)
k.push(E.eB(h,16,h))
A.C(i)
k.push(H.afl(h,2,"Case status"))
B.h.J(k,new A.a7(B.E_,new C.b95(r,w),y.b))
return E.Dn(k,M.lB)},
$S:z+22}
C.b93.prototype={
$1(d){return this.a.$2(this.b.FX(d.a),C.Cv(d.b))},
$S:z+4}
C.b94.prototype={
$1(d){return this.a.$2(this.b.bu6(d.a),C.Cv(d.b))},
$S:z+4}
C.b95.prototype={
$1(d){return this.a.$2(C.chu(d),""+J.en(this.b.d,new C.b92(d)).gu(0))},
$S:z+23}
C.b92.prototype={
$1(d){return d.f===this.a},
$S:58}
C.bld.prototype={
$1(d){var x=this,w=x.a,v=x.c
return A.dK(x.b,new C.bla(w,v,x.d,d),new C.blb(w,v),new C.blc(),!1,!0,!1)},
$S:z+24}
C.bla.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=r.d,m=A.d(o).ok,l=A.d(o).ax.a===B.p?B.bZ:B.M,k=A.aT(S.CP,A.d(o).ax.a===B.p?B.B:B.C,q,q,28),j=m.w
j=j==null?q:j.cR(B.aP)
j=A.o(n.b+" plan",q,q,q,q,q,j,q,q,q)
x=n.c
x=x===0?"Free forever":"$"+B.l.aq(x/100,0)+"/month"
w=m.Q
if(w==null)w=q
else w=w.U(A.d(o).ax.a===B.p?B.B:B.C)
v=y.p
l=A.fa(new A.Y(B.aD,A.an(A.c([k,B.bb,A.aA(A.a2(A.c([j,A.o(x,q,q,q,q,q,w,q,q,q)],v),B.S,q,B.r,B.u,0,B.x),1,q)],v),B.y,q,B.r,B.u,0,q,q),q),l,q,q,q,B.a4)
w=m.at
k=w==null
if(k)j=q
else j=w.fu(A.d(o).ax.a===B.p?B.B:B.C,B.ak,1.5)
j=A.o("THIS MONTH",q,q,q,q,q,j,q,q,q)
x=p.U0(o,n,d,L.a8p,"Evidence storage",C.cO9())
u=p.U0(o,n,d,L.a8m,"AI analyses",C.c9P())
t=p.U0(o,n,d,L.a8n,"Transcription minutes",C.c9P())
s=p.U0(o,n,d,L.a8o,"OSINT lookups",C.c9P())
if(k)k=q
else k=w.fu(A.d(o).ax.a===B.p?B.B:B.C,B.ak,1.5)
return A.hh(A.c([l,B.aV,j,B.Q,x,u,t,s,B.aV,A.o("CASE LIMITS",q,q,q,q,q,k,q,q,q),B.Q,p.alP(o,"Case rooms",n.d),p.alP(o,"Members per room",n.e),B.aV,p.b9h(o,r.c,n),B.aV,D.fhS],v),q,B.bo,q,B.a6,!1)},
$S:z+25}
C.blc.prototype={
$0(){return B.bd},
$S:24}
C.blb.prototype={
$2(d,e){return this.a.arU(this.b,"Could not load usage.")},
$S:95}
C.blf.prototype={
$0(){return B.bd},
$S:24}
C.ble.prototype={
$2(d,e){return this.a.arU(this.b,"Could not load your plan.")},
$S:95}
C.bl8.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.bl9.prototype={
$0(){var x=this
return x.a.TD(x.b,x.c,x.d)},
$S:0}
C.c2y.prototype={
$1(d){var x=this.a.a
return x},
$S:17}
C.buq.prototype={
$0(){this.a.r.oq(!0)},
$S:0}
C.bup.prototype={
$0(){var x,w,v,u,t=null,s=this.a,r=s.gml(),q=r.y
switch(q==null?A.t(r).i("aN.T").a(q):q){case B.eO:s.r.oq(!1)
r.sp(B.eq)
break
case B.eq:q=s.gw9()
x=q.y
w=!1
if((x==null?A.t(q).i("aN.T").a(x):x)!=null){x=s.gpR()
v=x.y
u=v==null
if((u?A.t(x).i("aN.T").a(v):v)!=null){w=q.y
if(w==null)w=A.t(q).i("aN.T").a(w)
w.toString
x=u?A.t(x).i("aN.T").a(v):v
x.toString
x=w.kG(x)}else x=w}else x=w
if(x)s.gpR().sp(t)
x=q.y
w=x==null
if((w?A.t(q).i("aN.T").a(x):x)!=null){if(w)x=A.t(q).i("aN.T").a(x)
x.toString
x=!s.S0(x)}else x=!1
if(x){q.sp(t)
s.gpR().sp(t)}else{q=s.gpR()
x=q.y
w=x==null
if((w?A.t(q).i("aN.T").a(x):x)!=null){if(w)x=A.t(q).i("aN.T").a(x)
x.toString
x=!s.S0(x)
s=x}else s=!1
if(s)q.sp(t)}r.sp(B.eO)
break
case B.ns:case B.le:break}},
$S:0}
C.bur.prototype={
$0(){var x=this.b
this.a.gw9().sp(x)
return x},
$S:0}
C.buo.prototype={
$0(){var x=this.b
this.a.gpR().sp(x)
return x},
$S:0}
C.bus.prototype={
$1(d){return this.a.a},
$S:17}
C.bpZ.prototype={
$0(){this.a.y=!1},
$S:0}
C.bq_.prototype={
$0(){this.a.y=!0},
$S:0}
C.bq0.prototype={
$0(){var x,w=this.a,v=w.f
v=v!=null&&w.r==null&&!this.b.jq(v)
x=this.b
if(v){w.r=x
w.a.y.$1(x)}else{w.f=x
w.a.x.$1(x)
if(w.r!=null){w.r=null
w.a.y.$1(null)}}},
$S:0}
C.bq1.prototype={
$2(d,e){return this.a.agc(d,e,!0)},
$S:52}
C.bq2.prototype={
$2(d,e){return this.a.agc(d,e,!1)},
$S:52}
C.bq4.prototype={
$0(){if(this.b){var x=this.a
if(x.w==null)x.w=x.a.f}},
$S:0}
C.bq3.prototype={
$0(){var x,w,v=this.a,u=v.w
u.toString
x=this.b.a
w=v.b5c(u,x)
if(w!=null){v.w=w
v.r=x}},
$S:0}
C.buz.prototype={
$1$1(d,e){var x=d.$1(this.a)
return x==null?d.$1(this.b):x},
$1(d){return this.$1$1(d,y.z)},
$S:215}
C.buA.prototype={
$1$2(d,e,f){return this.a.$1$1(new C.buB(d,e,f),f)},
$2(d,e){return this.$1$2(d,e,y.z)},
$S:201}
C.buB.prototype={
$1(d){var x=this.a.$1(d)
return x==null?null:x.a_(this.b)},
$S(){return this.c.i("0?(jd?)")}}
C.buu.prototype={
$1(d){var x=d.gEi()
return x},
$S:92}
C.buv.prototype={
$1(d){var x=d.gA_()
return x},
$S:92}
C.buy.prototype={
$1(d){return this.b.$1$1(new C.but(this.a,d),y.G)},
$S:21}
C.but.prototype={
$1(d){var x,w=null
if(this.a.a.Q){x=d.gNl()
w=x==null?null:x.a_(this.b)}else{x=d.gEj()
w=x==null?null:x.a_(this.b)}return w},
$S:188}
C.buw.prototype={
$1(d){return d.ax},
$S:189}
C.bux.prototype={
$0(){var x=this.a.a
return x.t_(x.c)},
$S:0}
C.bEy.prototype={
$2(d,e){var x=this,w=Math.min(x.c.b,270),v=A.c([],y.p)
if(e.d>=w)v.push(x.d)
v.push(A.aA(x.a.f,1,null))
v.push(x.e)
return A.a2(v,B.b3,null,B.r,B.W,0,B.x)},
$S:1159}
C.bEB.prototype={
$0(){var x=this.b
x.y=this.a.a
x.z=this.c},
$S:0}
C.bEA.prototype={
$0(){var x=this.a,w=this.b
x.d=w
w=x.an0(w)
x.f=w
x.a.r.$1(w)},
$S:0}
C.bEz.prototype={
$0(){var x=this.a,w=this.b
x.e=w
w=x.an0(w)
x.r=w
x.a.w.$1(w)},
$S:0}
C.bWW.prototype={
$2(d,e){if(!d.a)d.P(e)},
$S:48};(function aliases(){var x=C.a8t.prototype
x.aLg=x.m})();(function installTearOffs(){var x=a._static_0,w=a._instance_0u,v=a._instance_1u,u=a._static_1
x(C,"cN3","cFO",30)
w(C.Cc.prototype,"gjk","cP",16)
v(C.rn.prototype,"gBt","FX",17)
u(C,"cO9","cDk",8)
u(C,"c9P","cDl",8)
var t
w(t=C.a2z.prototype,"gRH","a3a",0)
w(t,"gRz","a2R",0)
w(t,"gIF","a34",0)
v(t,"gakI","b1w",5)
v(t,"gakn","aZn",5)
w(t=C.a1I.prototype,"gbcx","bcy",0)
v(t,"gbhs","bht",26)
v(t=C.a1K.prototype,"gaZO","aZP",6)
v(t,"gaZQ","aZR",27)
v(t,"gaZS","aZT",28)
v(t,"gaZ0","aZ1",29)
v(C.a4A.prototype,"gaSP","aSQ",6)
v(t=C.PS.prototype,"gb1u","b1v",7)
v(t,"gaZl","aZm",7)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.cg,[C.c0D,C.c0y,C.c0w,C.c0E,C.b91,C.b90,C.b9_,C.c1l,C.c1k,C.c1j,C.b8L,C.b8M,C.c1i,C.c1h,C.bk_,C.c2Z,C.c34,C.c_L,C.b9j,C.b9f,C.b9d,C.b9c,C.b97,C.b93,C.b94,C.b95,C.b92,C.bld,C.bla,C.bl8,C.c2y,C.bus,C.buz,C.buA,C.buB,C.buu,C.buv,C.buy,C.but,C.buw])
w(A.dg,[C.c0x,C.b9l,C.b9i,C.b9h,C.b9e,C.b9a,C.b9b,C.blc,C.blf,C.bl9,C.buq,C.bup,C.bur,C.buo,C.bpZ,C.bq_,C.bq0,C.bq4,C.bq3,C.bux,C.bEB,C.bEA,C.bEz])
w(A.E,[C.N3,C.rn,C.ue,C.pT,C.AA,C.un])
v(C.Cc,A.f0)
w(A.fU,[C.ro,C.PM])
w(A.dj,[C.c3_,C.c35,C.bZ_,C.b9k,C.b9g,C.b99,C.b96,C.b98,C.blb,C.ble,C.bq1,C.bq2,C.bEy,C.bWW])
w(A.bA,[C.akn,C.Hg])
w(A.O,[C.U6,C.a1H,C.a1J,C.a4z,C.a2C,C.a4e])
w(A.a_,[C.a8t,C.a1I,C.a1K,C.a4A,C.aqE,C.PS])
v(C.a2z,C.a8t)
w(A.a5,[C.apf,C.aqD,C.asT,C.aj1])
v(C.a3A,A.bD)
v(C.bHl,A.alK)
v(C.bHp,A.alM)
v(C.a3Z,A.vl)
v(C.acY,A.ZP)
x(C.a8t,A.kn)})()
A.cC(b.typeUniverse,JSON.parse('{"Cc":{"f0":["ue"]},"akn":{"bA":[],"O":[],"h":[]},"Hg":{"bA":[],"O":[],"h":[]},"U6":{"O":[],"h":[]},"a1H":{"O":[],"h":[]},"a1J":{"O":[],"h":[]},"a3A":{"bD":[],"bv":[],"h":[]},"a4z":{"O":[],"h":[]},"a2C":{"O":[],"h":[]},"a4e":{"O":[],"h":[]},"PS":{"a_":["a4e"]},"a2z":{"a_":["U6"]},"apf":{"a5":[],"h":[]},"a1I":{"a_":["a1H"]},"a1K":{"a_":["a1J"]},"aqD":{"a5":[],"h":[]},"a4A":{"a_":["a4z"]},"aqE":{"a_":["a2C"]},"a3Z":{"aF":[]},"asT":{"a5":[],"h":[]},"aj1":{"a5":[],"FO":[],"h":[]},"acY":{"a5":[],"h":[]}}'))
var y=(function rtii(){var x=A.J
return{V:x("co<c4>"),Z:x("aS<v<eF>>"),X:x("aS<v<fD>>"),u:x("aS<fD>"),a:x("aS<rn>"),F:x("aS<uv>"),L:x("aS<fW?>"),C:x("D1"),R:x("i7<ro>"),c:x("dX<lr>"),d:x("dX<ok>"),e:x("dX<or>"),G:x("P"),x:x("cdf"),T:x("Kb<aE>"),I:x("jG"),J:x("eY"),ch:x("N<v<eF>>"),ao:x("N<v<fD>>"),as:x("N<+room,visible(eF,B)>"),g:x("N<h3>"),U:x("N<Bc?>"),cN:x("qT"),cR:x("x<eF>"),a9:x("x<N<E>>"),Y:x("x<pT>"),p:x("x<h>"),o:x("x<eh>"),S:x("x<mG>"),k:x("x<~(co<c4>)>"),B:x("bq<a_<O>>"),t:x("bq<PS>"),D:x("v<eF>"),E:x("v<ad<f,@>>"),aH:x("v<w>"),aN:x("ad<f,f>"),P:x("ad<f,@>"),f:x("ad<@,@>"),b:x("a7<qT,eh>"),y:x("zP"),w:x("hY"),K:x("E"),bc:x("c7<~(co<c4>)>"),m:x("fD"),v:x("+room,visible(eF,B)"),s:x("rn"),aa:x("AA"),j:x("ue"),af:x("ro"),A:x("N3"),bw:x("fl<E?>"),h:x("Ge"),N:x("f"),cx:x("h6"),H:x("un<v<AA>>"),W:x("un<v<pT>>"),cn:x("pT"),bv:x("jr"),O:x("L<f>"),l:x("eh"),cD:x("dz"),Q:x("a3A"),M:x("Cc"),q:x("h8"),cS:x("ba<P?>"),i:x("X"),z:x("@"),r:x("w"),_:x("P?"),aQ:x("Kb<aE>?"),b8:x("fq?"),n:x("~"),aI:x("~()")}})();(function constants(){var x=a.makeConstList
D.Iu=new C.bHl()
D.aiV=new A.yO(0,null,null,null,null,null,null)
D.ajJ=new A.aj(0,0,0,3)
D.e0C=new A.ah(62537,"MaterialIcons",null,!1)
D.e2l=new A.aL(B.CL,null,null,null,null)
D.e2B=new A.aL(B.Of,null,null,null,null)
D.eVC=x([],A.J("x<fD>"))
D.xe=x([],A.J("x<AA>"))
D.rv=x([],y.Y)
D.fhO=new C.ro(0,"thisWeek")
D.ful=new A.a0("Week",null,null,null,null,null,null,null,null,null,null)
D.acr=new I.i7(D.fhO,null,D.ful,y.R)
D.a56=new C.ro(1,"thisMonth")
D.fsU=new A.a0("Month",null,null,null,null,null,null,null,null,null,null)
D.aco=new I.i7(D.a56,null,D.fsU,y.R)
D.fhP=new C.ro(2,"last30Days")
D.frR=new A.a0("30 days",null,null,null,null,null,null,null,null,null,null)
D.acv=new I.i7(D.fhP,null,D.frR,y.R)
D.Fm=new C.ro(3,"custom")
D.fsH=new A.a0("Custom",null,null,null,null,null,null,null,null,null,null)
D.acs=new I.i7(D.Fm,null,D.fsH,y.R)
D.eYC=x([D.acr,D.aco,D.acv,D.acs],A.J("x<i7<ro>>"))
D.fhQ=new C.ue(D.a56,null,null)
D.fhS=new C.akn(null)
D.fko=new A.S(1/0,64)
D.fkI=new A.S(496,164)
D.fry=new A.a0("To move back to Free, cancel your subscription from your receipt email \u2014 we\u2019ll handle the rest.",null,null,null,null,null,null,null,null,null,null)
D.flm=new A.d8(D.fry,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.D,null)
D.a6S=new C.un(D.xe,!1,y.H)
D.a6R=new C.un(D.rv,!1,y.W)
D.fmG=new C.un(null,!0,y.H)
D.fmH=new C.un(null,!0,y.W)
D.fsr=new A.a0("Export PDF",null,null,null,null,null,null,null,null,null,null)
D.ftk=new A.a0("Export CSV",null,null,null,null,null,null,null,null,null,null)
D.fz0=new A.L("reports-export-csv",y.O)
D.fz_=new A.L("reports-export-pdf",y.O)
D.fzd=new A.L("reports-period-selector",y.O)
D.fBB=new A.L("reports-section",y.O)
D.fDv=new C.aqD(null)
D.fE1=new C.PM(0,"none")
D.a94=new C.PM(1,"highlightLeading")
D.GZ=new C.PM(2,"highlightTrailing")
D.a95=new C.PM(3,"highlightAll")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cX5","crL",()=>A.lu(new C.c0D(),A.J("Bc?")))
x($,"cX1","crJ",()=>A.lu(new C.c0y(),y.m))
x($,"cX6","crM",()=>A.lu(new C.c0E(),A.J("uv")))
x($,"cXx","crV",()=>A.er(new C.c1l(),y.A))
x($,"cXw","c4_",()=>A.lu(new C.c1k(),y.D))
x($,"cXv","aCZ",()=>A.ps(C.cN3(),y.M,y.j))
x($,"cXu","cbt",()=>A.lu(new C.c1i(),y.s))})()};
(a=>{a["4HrvgoA9492fs7B1D0nzSj3TFT8="]=a.current})($__dart_deferred_initializers__);