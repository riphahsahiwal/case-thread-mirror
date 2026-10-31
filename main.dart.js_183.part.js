((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,E,G,H,B={
cbK(){return new B.zI(null)},
czF(d){if(d>=1048576)return C.m.aI(d/1048576,1)+" MB"
if(d>=1024)return C.m.aI(d/1024,0)+" KB"
return""+d+" B"},
zI:function zI(d){this.a=d},
a40:function a40(d,e,f){var _=this
_.x=_.w=!1
_.y=null
_.z=d
_.Q=e
_.as=f
_.at=!1
_.ay=_.ax=null
_.d=$
_.c=_.a=null},
bFF:function bFF(d,e){this.a=d
this.b=e},
bFG:function bFG(d){this.a=d},
bFH:function bFH(d){this.a=d},
bFI:function bFI(d,e){this.a=d
this.b=e},
bFJ:function bFJ(d){this.a=d},
bFB:function bFB(d){this.a=d},
bFC:function bFC(d,e){this.a=d
this.b=e},
bFD:function bFD(d){this.a=d},
bFE:function bFE(d,e){this.a=d
this.b=e},
bFP:function bFP(d){this.a=d},
bFO:function bFO(d){this.a=d},
bFL:function bFL(d){this.a=d},
bFQ:function bFQ(){},
bFT:function bFT(){},
bFS:function bFS(){},
bFR:function bFR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bFN:function bFN(d){this.a=d},
bFM:function bFM(d){this.a=d},
bFK:function bFK(d,e){this.a=d
this.b=e},
atL:function atL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a3A:function a3A(d,e){this.d=d
this.a=e},
a3B:function a3B(){var _=this
_.w=null
_.x=!1
_.d=$
_.c=_.a=null},
bDS:function bDS(d){this.a=d},
bDQ:function bDQ(d){this.a=d},
bDR:function bDR(d){this.a=d},
bDT:function bDT(d,e){this.a=d
this.b=e},
asx:function asx(d){this.a=d},
bDL:function bDL(){},
bDK:function bDK(d){this.a=d},
bDJ:function bDJ(d,e){this.a=d
this.b=e},
a27:function a27(d){this.a=d},
a28:function a28(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
buC:function buC(d){this.a=d},
buA:function buA(d){this.a=d},
buB:function buB(d){this.a=d},
buD:function buD(d){this.a=d},
buE:function buE(d){this.a=d},
a3E:function a3E(d){this.a=d},
a3F:function a3F(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
bDY:function bDY(){},
bDW:function bDW(d){this.a=d},
bDX:function bDX(d){this.a=d},
bDZ:function bDZ(d){this.a=d},
bE_:function bE_(d){this.a=d},
bE2:function bE2(){},
bE1:function bE1(){},
bE0:function bE0(d,e,f){this.a=d
this.b=e
this.c=f},
cuk(d){var x,w=C.o.aK(d).toLowerCase()
if(w.length===0)return null
x=$.cjN()
if(!x.b.test(w))return"Usernames need 3\u201320 lowercase letters, numbers or _."
return null},
cuj(d){var x=C.o.aK(d).length
if(x===0)return"Enter a display name."
if(x>80)return"Keep it under 80 characters."
return null},
cui(d){if(d.length>300)return"Keep your bio under 300 characters."
return null},
bX3:function bX3(){},
ajb(){var x=0,w=A.n(y.H)
var $async$ajb=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:$.a8S()
x=2
return A.d(C.qa.UR("ct_e2e_privkey_v1"),$async$ajb)
case 2:$.c1M=null
$.c1L.a0(0)
x=3
return A.d(A.mb(),$async$ajb)
case 3:return A.l(null,w)}})
return A.m($async$ajb,w)}},D,I,K
J=c[1]
A=c[0]
C=c[2]
F=c[108]
E=c[71]
G=c[107]
H=c[105]
B=a.updateHolder(c[27],B)
D=c[104]
I=c[106]
K=c[88]
B.zI.prototype={
Y(){var x=$.ae()
return new B.a40(new A.bX(C.aK,x),new A.bX(C.aK,x),new A.bX(C.aK,x))}}
B.a40.prototype={
m(){var x=this,w=x.z,v=w.P$=$.ae()
w.N$=0
w=x.Q
w.P$=v
w.N$=0
w=x.as
w.P$=v
w.N$=0
x.ap()},
baA(d){var x,w=this
if(w.at)return
w.at=!0
w.z.sdu(d.b)
x=d.d
if(x==null)x=""
w.Q.sdu(x)
x=d.e
if(x==null)x=""
w.as.sdu(x)
w.ay=w.ax=d.f},
S3(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$S3=A.j(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:m=r.z
l=B.cuj(m.a.a)
k=r.Q
j=B.cuk(k.a.a)
i=r.as
h=B.cui(i.a.a)
g=r.ax==null?"Pick your niche \u2014 it's required.":null
f=l==null?j:l
e=f==null?h:f
if(e==null)e=g
if(e!=null){r.A(new B.bFF(r,e))
x=1
break}r.A(new B.bFG(r))
u=4
f=r.gao()
p=f.W($.R3(),y.R)
m=m.a.a
k=k.a.a
i=i.a.a
o=r.ax
x=7
return A.d(p.YT(i,m,o,o!=r.ay,k),$async$S3)
case 7:r.ay=r.ax
f.by($.BU())
if(r.c!=null)r.A(new B.bFH(r))
s.push(6)
x=5
break
case 4:u=3
d=t.pop()
m=A.H(d)
if(y.L.b(m)){q=m
if(r.c!=null)r.A(new B.bFI(r,q))}else throw d
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.A(new B.bFJ(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$S3,w)},
PK(){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p
var $async$PK=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:t.A(new B.bFB(t))
v=3
r=t.gao()
x=6
return A.d(r.W($.R3(),y.R).Bv(),$async$PK)
case 6:r.by($.BU())
v=1
x=5
break
case 3:v=2
p=u.pop()
r=A.H(p)
if(y.L.b(r)){s=r
if(t.c!=null)t.A(new B.bFC(t,s))}else throw p
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$PK,w)},
Sb(){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p
var $async$Sb=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:t.A(new B.bFD(t))
v=3
r=t.gao()
x=6
return A.d(r.W($.R3(),y.R).Fv(),$async$Sb)
case 6:r.by($.BU())
v=1
x=5
break
case 3:v=2
p=u.pop()
r=A.H(p)
if(y.L.b(r)){s=r
if(t.c!=null)t.A(new B.bFE(t,s))}else throw p
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Sb,w)},
D(d){var x,w=null,v=A.e(d),u=this.gao(),t=u.V($.BU(),y.J)
u=u.V($.dY(),y.K).gp()
x=u==null?w:u.b
if(x==null)x=""
return A.kd(A.xO(A.c([A.cE(t,new B.bFP(this),new B.bFQ(),y.S,y.l)],y.p),w,w,D.fq8),w,A.eO(t,new B.bFR(this,v.ok,d,x),new B.bFS(),new B.bFT(),!1,!0,!1),w,w)}}
B.atL.prototype={
D(d){var x=this,w=null,v=A.e(d),u=x.c,t=u.c,s=x.d,r=s?x.e:w,q=t==null,p=!q?new A.zo(t,1,w,C.Gi):w
if(q){u=u.b
u=u.length!==0?C.o.a8(u,0,1).toUpperCase():"?"
v=A.p(u,w,w,w,w,w,v.ok.c,w,w,w)}else v=w
u=y.p
v=A.c([A.IL(w,p,v,w,w,48)],u)
if(s)v.push(A.hi(0,A.IL(A.e(d).ax.b,w,D.e08,w,w,16),w,w,w,0,w,w))
v=A.c([A.f1(w,A.dS(C.by,v,C.D,C.bl,w),C.T,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,r,w,w,w,w,w,w,!1,C.bH)],u)
if(s){s=A.c([A.pt(D.e0G,w,A.p(q?"Upload photo":"Change photo",w,w,w,w,w,w,w,w,w),x.e,w)],u)
r=x.f
if(r!=null)s.push(A.pt(H.CA,w,C.FT,r,w))
C.i.L(v,A.c([C.V,A.an(s,C.y,w,C.r,C.W,0,w)],u))}return A.bS(A.a8(v,C.y,C.r,C.w,0,C.A),w,w)}}
B.a3A.prototype={
Y(){return new B.a3B()}}
B.a3B.prototype={
au(){this.aQ()
this.w=A.Fc()},
b7v(){this.A(new B.bDS(this))},
S2(){var x=0,w=A.n(y.H),v=this
var $async$S2=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.A(new B.bDQ(v))
x=2
return A.d(A.Xl(v.a.d),$async$S2)
case 2:if(v.c!=null){v.A(new B.bDR(v))
v.b7v()}return A.l(null,w)}})
return A.m($async$S2,w)},
D(d){var x=null,w=A.e(d).ok,v=w.x
return A.a8(A.c([A.p("Notifications",x,x,x,x,x,v==null?x:v.dP(C.ay),x,x,x),C.V,A.kA(new B.bDT(this,w),this.w,y.Q)],y.p),C.U,C.r,C.w,0,C.A)}}
B.asx.prototype={
ct(d,e){var x=null,w=A.e(d).ok,v=e.V($.cmi(),y.G),u=w.x
return A.a8(A.c([A.p("My roles",x,x,x,x,x,u==null?x:u.dP(C.ay),x,x,x),C.V,A.eO(v,new B.bDJ(w,d),new B.bDK(w),new B.bDL(),!1,!0,!1)],y.p),C.U,C.r,C.w,0,C.A)}}
B.a27.prototype={
Y(){return new B.a28()}}
B.a28.prototype={
za(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$za=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=r.c
o.toString
x=3
return A.d(A.da(null,null,!0,null,new B.buC(r),o,null,!0,y.y),$async$za)
case 3:if(e!==!0||r.c==null){x=1
break}r.A(new B.buD(r))
u=5
x=8
return A.d(B.ajb(),$async$za)
case 8:o=r.gao()
x=9
return A.d(o.W($.bZL(),y.g).Fz(),$async$za)
case 9:x=10
return A.d(o.W($.QZ(),y.P).a0(0),$async$za)
case 10:o.by($.a92())
o.by($.a94())
o=r.c
if(o!=null)o.S(y.q).f.aW(D.fjR)
s.push(7)
x=6
break
case 5:u=4
n=t.pop()
q=A.H(n)
o=r.c
if(o!=null)o.S(y.q).f.aW(A.bQ(null,null,null,null,null,C.D,null,A.p(A.aE(q).a,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.A(new B.buE(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$za,w)},
D(d){var x,w=null,v=A.e(d).ok,u=v.x
u=A.p("Encryption",w,w,w,w,w,u==null?w:u.dP(C.ay),w,w,w)
x=v.Q
if(x==null)x=w
else x=x.X(A.e(d).ax.a===C.p?C.G:C.H)
x=A.p("Reset if this device was lost or you suspect compromise.",w,w,w,w,w,x,w,w,w)
return A.a8(A.c([u,C.V,A.jq(A.eF(!1,w,w,w,!0,w,w,w,!0,w,w,D.e_O,w,w,w,w,w,!1,w,w,w,w,x,w,D.frK,w,this.w?C.eP:A.bI(D.a6H,w,w,w,this.gb8Z(),w,w),w),w,w,C.ae,w,w)],y.p),C.U,C.r,C.w,0,C.A)}}
B.a3E.prototype={
Y(){return new B.a3F()}}
B.a3F.prototype={
Hj(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q
var $async$Hj=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=r.c
q.toString
x=3
return A.d(A.da(null,null,!0,null,new B.bDY(),q,null,!0,y.y),$async$Hj)
case 3:if(e!==!0||r.c==null){x=1
break}r.A(new B.bDZ(r))
u=4
q=r.gao()
x=7
return A.d(q.W($.QZ(),y.P).a0(0),$async$Hj)
case 7:q.by($.a94())
q.by($.a92())
q=r.c
if(q!=null)q.S(y.q).f.aW(D.fkc)
s.push(6)
x=5
break
case 4:s=[2]
case 5:u=2
if(r.c!=null)r.A(new B.bE_(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Hj,w)},
D(d){var x=null,w=A.e(d).ok,v=this.gao().V($.a94(),y.o),u=w.x
return A.a8(A.c([A.p("Offline cache",x,x,x,x,x,u==null?x:u.dP(C.ay),x,x,x),C.V,A.jq(A.eO(v,new B.bE0(this,w,d),new B.bE1(),new B.bE2(),!1,!0,!1),x,x,C.ae,x,x)],y.p),C.U,C.r,C.w,0,C.A)}}
var z=a.updateTypes(["N<~>()","h(iu?)","h(w<n1>)","N<w<n1>>(as)"])
B.bFF.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.bFG.prototype={
$0(){var x=this.a
x.x=!0
x.y=null},
$S:0}
B.bFH.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bFI.prototype={
$0(){return this.a.y=A.aE(this.b).a},
$S:0}
B.bFJ.prototype={
$0(){return this.a.x=!1},
$S:0}
B.bFB.prototype={
$0(){return this.a.y=null},
$S:0}
B.bFC.prototype={
$0(){return this.a.y=A.aE(this.b).a},
$S:0}
B.bFD.prototype={
$0(){return this.a.y=null},
$S:0}
B.bFE.prototype={
$0(){return this.a.y=A.aE(this.b).a},
$S:0}
B.bFP.prototype={
$1(d){var x,w,v=null
if(d==null)x=C.aN
else{x=this.a
w=x.x?v:new B.bFO(x)
w=A.bI(A.p(x.w?"Save":"Edit",v,v,v,v,v,v,v,v,v),v,v,v,w,v,v)
x=w}return x},
$S:z+1}
B.bFO.prototype={
$0(){var x=this.a
if(x.w)x.S3()
else x.A(new B.bFL(x))},
$S:0}
B.bFL.prototype={
$0(){var x=this.a
x.w=!0
x.y=null},
$S:0}
B.bFQ.prototype={
$0(){return C.aN},
$S:140}
B.bFT.prototype={
$0(){return C.bo},
$S:32}
B.bFS.prototype={
$2(d,e){var x=null
return A.bS(new A.a0(C.cV,A.p(A.aE(d).a,x,x,x,x,x,x,x,x,x),x),x,x)},
$S:50}
B.bFR.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(d==null)return D.af_
x=k.a
x.baA(d)
w=x.w
v=d.c!=null?x.gb8I():j
u=y.p
v=A.c([new B.atL(d,w,x.gaOG(),v,j),C.bg],u)
w=x.y
if(w!=null){t=k.b.Q
if(t==null)t=j
else t=t.X(A.e(k.c).ax.a===C.p?C.aR:C.aO)
v.push(new A.a0(I.AO,A.p(w,j,j,j,j,j,t,j,j,j),j))}w=k.b
if(x.w){t=A.d6(j,C.ax,!1,j,!0,C.D,j,A.db(),x.z,j,j,j,j,j,2,D.e24,C.T,!0,j,!0,j,!1,j,C.aQ,j,j,j,j,j,j,j,j,j,1,j,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,C.aP,j,j,j,j,j,j,j,j,j,j,j,j,!0,C.ag,j,C.aJ,j,C.lY,j,j)
s=A.d6(j,C.ax,!1,j,!0,C.D,j,A.db(),x.Q,j,j,j,j,j,2,D.e20,C.T,!0,j,!0,j,!1,j,C.aQ,j,j,j,j,j,j,j,j,j,1,j,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,C.aP,j,j,j,j,j,j,j,j,j,j,j,j,!0,C.ag,j,C.aJ,j,C.lY,j,j)
r=A.d6(j,C.ax,!1,j,!0,C.D,j,A.db(),x.as,j,j,j,j,j,2,D.e1I,C.T,!0,j,!0,j,!1,j,C.aQ,j,j,j,j,j,j,j,300,j,3,j,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,C.aP,j,j,j,j,j,j,j,j,j,j,j,j,!0,C.ag,j,C.aJ,j,j,j,j)
q=A.p("Niche",j,j,j,j,j,w.x,j,j,j)
w=A.p("Only join and create cases of this type. A niche is required.",j,j,j,j,j,w.Q,j,j,j)
p=x.ax
o=A.c([],y.I)
for(n=y.r,m=0;m<5;++m){l=C.Dw[m]
o.push(new A.eR(l.a,A.p(l.b,j,j,j,j,j,j,j,j,j),C.dz,j,n))}C.i.L(v,A.c([t,C.a1,s,C.a1,r,C.a1,q,C.bX,w,C.V,A.yj(C.O4,p,o,D.fxQ,new B.bFM(x),j,y.N),C.bg],u))}else{t=d.b
s=w.f
u=A.c([A.p(t,j,j,j,j,j,s==null?j:s.dP(C.ay),j,j,j)],u)
t=d.d
if(t!=null){s=w.z
if(s==null)s=j
else s=s.X(A.e(k.c).ax.a===C.p?C.G:C.H)
u.push(new A.a0(C.f9,A.p("@"+t,j,j,j,j,j,s,j,j,j),j))}t=d.e
if((t==null?"":t).length!==0){t.toString
u.push(new A.a0(K.eB,A.p(t,j,j,j,j,j,w.z,j,j,j),j))}w=w.Q
t=w==null
if(t)s=j
else s=w.X(A.e(k.c).ax.a===C.p?C.G:C.H)
u.push(new A.a0(G.uP,A.p(k.d,j,j,j,j,j,s,j,j,j),j))
s=d.f
r=s==null
if((r?j:E.a8m(s))!=null){s=r?j:E.a8m(s)
if(t)w=j
else w=w.X(A.e(k.c).ax.a===C.p?C.G:C.H)
u.push(new A.a0(C.f9,A.p("Niche: "+A.r(s),j,j,j,j,j,w,j,j,j),j))}u.push(C.cC)
C.i.L(v,u)}v.push(new B.asx(j))
v.push(C.cC)
v.push(new B.a3A(d.a,j))
v.push(C.cC)
v.push(D.fAT)
v.push(C.cC)
v.push(D.fBO)
return A.b51(A.j2(v,j,C.bz,j,C.aa,!1),new B.bFN(x))},
$S:z+1}
B.bFN.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a
u.at=!1
u.gao().by($.BU())
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.bFM.prototype={
$1(d){var x=this.a
return x.A(new B.bFK(x,d))},
$S:44}
B.bFK.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.bDS.prototype={
$0(){return this.a.w=A.Fc()},
$S:0}
B.bDQ.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bDR.prototype={
$0(){return this.a.x=!1},
$S:0}
B.bDT.prototype={
$2(d,e){var x,w,v,u,t=null,s=e.b,r=s==null
if(r||r)return C.bo
switch(s.a){case 0:r=D.ffw
break
case 1:r=D.ffe
break
case 2:r=D.fff
break
case 3:r=D.ffi
break
case 4:r=D.ffQ
break
default:r=t}x=r.a
w=r.b
r=A.c([A.aV(s===C.a48?D.e_8:D.e_9,t,t,t,20),C.bh,A.aM(A.p(x,t,t,t,t,t,this.b.Q,t,t,t),1,t)],y.p)
if(w!=null){v=this.a
u=v.x
v=u?t:v.gb7u()
r.push(A.bI(A.p(u?"Working\u2026":w,t,t,t,t,t,t,t,t,t),t,t,t,v,t,t))}return A.jq(new A.a0(C.aU,A.an(r,C.y,t,C.r,C.w,0,t),t),t,t,C.ae,t,t)},
$S:383}
B.bDL.prototype={
$0(){return C.bo},
$S:32}
B.bDK.prototype={
$2(d,e){var x=null
return A.p(A.aE(d).a,x,x,x,x,x,this.a.Q,x,x,x)},
$S:61}
B.bDJ.prototype={
$1(d){var x,w,v,u,t,s,r,q=this,p=null,o=J.av(d)
if(o.gU(d)){o=q.a.Q
if(o==null)o=p
else o=o.X(A.e(q.b).ax.a===C.p?C.G:C.H)
return A.p("No rooms yet.",p,p,p,p,p,o,p,p,p)}x=A.c([],y.p)
for(o=o.gT(d),w=q.b,v=q.a.Q;o.q();){u=o.gK()
t=u.c
s=A.at(p,p,C.C,p,p,new A.aF(A.a8q(w,t),p,p,p,p,p,C.bR),p,10,p,p,p,p,p,10)
u=A.p(u.b,p,p,p,p,p,p,p,p,p)
if(v==null)r=p
else r=v.X(A.e(w).ax.a===C.p?C.G:C.H)
x.push(new A.xZ(p,p,p,C.qG,A.eF(!1,p,!0,p,!0,p,p,p,!0,p,p,s,p,p,p,p,p,!1,p,p,p,p,p,p,u,p,A.p(t,p,p,p,p,p,r,p,p,p),p),p))}return A.a8(x,C.y,C.r,C.w,0,C.A)},
$S:z+2}
B.buC.prototype={
$1(d){var x=null,w=A.bI(C.bs,x,x,x,new B.buA(d),x,x),v=this.a.c
v.toString
return A.dE(A.c([w,A.dk(D.a6H,x,new B.buB(d),A.yq(A.e(v).ax.fy,x,x,x,x,x,x))],y.p),D.fsv,x,D.fse)},
$S:13}
B.buA.prototype={
$0(){return A.au(this.a,!1).b3(!1)},
$S:0}
B.buB.prototype={
$0(){return A.au(this.a,!1).b3(!0)},
$S:0}
B.buD.prototype={
$0(){return this.a.w=!0},
$S:0}
B.buE.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bDY.prototype={
$1(d){var x=null
return A.dE(A.c([A.bI(C.bs,x,x,x,new B.bDW(d),x,x),A.dk(F.a6s,D.fxX,new B.bDX(d),x)],y.p),D.fsI,x,D.fsY)},
$S:13}
B.bDW.prototype={
$0(){return A.au(this.a,!1).b3(!1)},
$S:0}
B.bDX.prototype={
$0(){return A.au(this.a,!1).b3(!0)},
$S:0}
B.bDZ.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bE_.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bE2.prototype={
$0(){return C.El},
$S:53}
B.bE1.prototype={
$2(d,e){return D.e3p},
$S:1165}
B.bE0.prototype={
$1(d){var x,w,v,u=null,t=d.c
if(!t)x="Not available on this platform \u2014 the web build has no app filesystem for cached copies."
else{w=d.a
v=w===1?"item":"items"
x=""+w+" "+v+" \xb7 "+B.czF(d.b)+" of 200 MB"}w=this.b.Q
if(w==null)w=u
else w=w.X(A.e(this.c).ax.a===C.p?C.G:C.H)
w=A.p(x,u,u,u,u,u,w,u,u,u)
v=this.a
if(v.w)t=C.eP
else{v=A.bI(D.fqH,D.fwA,u,u,t&&d.a>0?v.gaPo():u,u,u)
t=v}return A.eF(!1,u,u,u,!0,u,u,u,!0,u,D.fxG,D.NO,u,u,u,u,u,!1,u,u,u,u,w,u,D.a6C,u,t,u)},
$S:1166}
B.bX3.prototype={
$1(d){return this.aAx(d)},
aAx(d){var x=0,w=A.n(y.F),v
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(d.V($.dY().gty(),y.a),$async$$1)
case 3:v=d.V($.R3(),y.R).O1()
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+3};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.a40.prototype,"gaOG","PK",0)
x(w,"gb8I","Sb",0)
x(B.a3B.prototype,"gb7u","S2",0)
x(B.a28.prototype,"gb8Z","za",0)
x(B.a3F.prototype,"gaPo","Hj",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ig,[B.zI,B.a3A,B.a27,B.a3E])
x(A.hV,[B.a40,B.a3B,B.a28,B.a3F])
x(A.dz,[B.bFF,B.bFG,B.bFH,B.bFI,B.bFJ,B.bFB,B.bFC,B.bFD,B.bFE,B.bFO,B.bFL,B.bFQ,B.bFT,B.bFN,B.bFK,B.bDS,B.bDQ,B.bDR,B.bDL,B.buA,B.buB,B.buD,B.buE,B.bDW,B.bDX,B.bDZ,B.bE_,B.bE2])
x(A.cx,[B.bFP,B.bFR,B.bFM,B.bDJ,B.buC,B.bDY,B.bE0,B.bX3])
x(A.dA,[B.bFS,B.bDT,B.bDK,B.bE1])
w(B.atL,A.a4)
w(B.asx,A.bZ)})()
A.d1(b.typeUniverse,JSON.parse('{"a3A":{"M":[],"h":[]},"a27":{"M":[],"h":[]},"a3E":{"M":[],"h":[]},"zI":{"M":[],"h":[]},"a40":{"Z":["zI"]},"atL":{"a4":[],"h":[]},"a3B":{"Z":["a3A"]},"asx":{"bZ":[],"M":[],"h":[]},"a28":{"Z":["a27"]},"a3F":{"Z":["a3E"]}}'))
var y=(function rtii(){var x=A.L
return{o:x("aT<qf>"),G:x("aT<w<n1>>"),K:x("aT<hC?>"),J:x("aT<iu?>"),r:x("eR<f>"),g:x("D_"),P:x("v7"),L:x("aG"),a:x("N<hC?>"),I:x("y<eR<f>>"),p:x("y<h>"),F:x("w<n1>"),R:x("w9"),Q:x("qQ"),N:x("f"),O:x("O<f>"),l:x("h"),q:x("i6"),y:x("B"),S:x("iu?"),H:x("~")}})();(function constants(){D.fqZ=new A.a6("Not signed in.",null,null,null,null,null,null,null,null,null,null)
D.af_=new A.fM(C.ai,null,null,D.fqZ,null)
D.e_8=new A.ak(62004,"MaterialIcons",null,!1)
D.e_9=new A.ak(62006,"MaterialIcons",null,!1)
D.e_O=new A.aP(C.oY,null,null,null,null)
D.dZ_=new A.ak(57648,"MaterialIcons",null,!1)
D.e08=new A.aP(D.dZ_,16,C.P,null,null)
D.e_k=new A.ak(62444,"MaterialIcons",null,!1)
D.NO=new A.aP(D.e_k,null,null,null,null)
D.dZH=new A.ak(59029,"MaterialIcons",null,!1)
D.e0G=new A.aP(D.dZH,16,null,null,null)
D.e1I=new A.cn(null,null,null,"Bio",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.e20=new A.cn(null,null,null,"Username",null,null,null,"3\u201320 lowercase letters, numbers or _.",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"@",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.e24=new A.cn(null,null,null,"Display name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.a6C=new A.a6("Offline evidence cache",null,null,null,null,null,null,null,null,null,null)
D.fpV=new A.a6("Could not read cache info.",null,null,null,null,null,null,null,null,null,null)
D.e3p=new A.mZ(D.NO,D.a6C,D.fpV,null,null,null,null,null,null,null,!0,null,null,!1,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.ffe=new A.ac("Notifications are blocked. Allow them in your browser settings, then retry.","Retry")
D.fff=new A.ac("Get notified about new messages and updates on this device.","Enable notifications")
D.ffi=new A.ac("Permission granted \u2014 finishing setup.","Retry")
D.ffw=new A.ac("Push notifications are not available on this device.",null)
D.ffQ=new A.ac("Notifications are on for this device.",null)
D.fr7=new A.a6("Encryption identity reset. Ask the room owner to re-share the room keys with you.",null,null,null,null,null,null,null,null,null,null)
D.fjR=new A.dv(D.fr7,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.D,null)
D.frg=new A.a6("Offline cache cleared.",null,null,null,null,null,null,null,null,null,null)
D.fkc=new A.dv(D.frg,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.D,null)
D.fq8=new A.a6("Profile",null,null,null,null,null,null,null,null,null,null)
D.fqH=new A.a6("Clear cache",null,null,null,null,null,null,null,null,null,null)
D.frK=new A.a6("Encryption identity",null,null,null,null,null,null,null,null,null,null)
D.fse=new A.a6("Reset encryption identity?",null,null,null,null,null,null,null,null,null,null)
D.a6H=new A.a6("Reset",null,null,null,null,null,null,null,null,null,null)
D.fsv=new A.a6("This generates a new encryption key on this device. You will lose access to encrypted evidence until the room owner re-shares the room keys with you.",null,null,null,null,null,null,null,null,null,null)
D.fsI=new A.a6("Removes all cached evidence copies from this device. Items re-cache automatically the next time you open them while online.",null,null,null,null,null,null,null,null,null,null)
D.fsY=new A.a6("Clear offline cache?",null,null,null,null,null,null,null,null,null,null)
D.fwA=new A.O("cache-clear",y.O)
D.fxG=new A.O("cache-section",y.O)
D.fxQ=new A.O("profile-niche-dropdown",y.O)
D.fxX=new A.O("cache-clear-confirm",y.O)
D.fAT=new B.a27(null)
D.fBO=new B.a3E(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cLD","cjN",()=>A.cf("^[a-z0-9_]{3,20}$",!0,!1))
x($,"cR1","cmi",()=>A.Dx(new B.bX3(),y.F))})()};
(a=>{a["QkB5+2+fHocyynv7DsdwyYSfg1Y="]=a.current})($__dart_deferred_initializers__);