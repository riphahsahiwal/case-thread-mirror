((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={bjf:function bjf(d,e){this.a=d
this.b=e},
cBL(d,e,f,g,h,i,j){var w=g.a,v=g.b,u=j.b,t=u.c,s=u.a.c.gaO()
if(i===0){u=t/2
if(w+u<0||w-u>e.a)return null
u=s/2
if(v+u<0||v-u>e.b)return null}if(d.a.a-d.b.a-f>t)return new A.bTp(!1,w,v,i,j,t,s)
return null},
cC8(d,e){var w
switch(d.a){case 0:w=A.cC5(e)
break
case 1:w=A.cCc(e)
break
default:w=null}return w},
cC5(d){var w=B.a4(d).i("a8<1,W>")
return new F.hM(A.caJ(new B.a8(d,new A.bTA(),w)),A.caJ(new B.a8(d,new A.bTB(),w)))},
cCc(d){var w,v,u=x.H,t=J.h3(4,u)
for(w=0;w<4;++w){v=d[w]
t[w]=new D.bW(v.b,v.a,u)}u=A.cHU(B.c([t],x.a),0.0001).a
return new F.hM(u.b,u.a)},
cuL(d,e,f,g,h){var w=A.cuN(g)
w=w
return new A.Fb(g,f,e,d,w,h.i("Fb<0>"))},
cuN(d){var w,v,u,t
for(w=0,v=0;v<4;){u=d[v];++v
t=d[v%4]
w+=(t.b-u.b)*(t.a+u.a)}return w>=0},
cuM(d,e,f){return new A.Fc(e,0.3,d,f.i("Fc<0>"))},
cAK(d,e,f){return new A.rq(e,B.zg(4,new A.bGd(d,e),!1,x.v),new A.bGe(e,d).$0(),f.i("rq<0>"))},
bTp:function bTp(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bTA:function bTA(){},
bTB:function bTB(){},
a40:function a40(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i
_.a7Z$=j
_.b=k
_.c=l
_.d=m
_.a=n
_.$ti=o},
bFI:function bFI(d,e,f){this.a=d
this.b=e
this.c=f},
bFJ:function bFJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b1M:function b1M(d,e){this.a=d
this.b=e},
Fb:function Fb(d,e,f,g,h,i){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.ay=h
_.db=_.cy=_.cx=_.CW=_.ch=null
_.$ti=i},
Fc:function Fc(d,e,f,g){var _=this
_.e=d
_.c=e
_.a=f
_.$ti=g},
a4_:function a4_(d,e,f,g,h){var _=this
_.a7W$=d
_.a7X$=e
_.a7Y$=f
_.auS$=g
_.c=_.a=null
_.$ti=h},
bFH:function bFH(d,e){this.a=d
this.b=e},
rq:function rq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
bGd:function bGd(d,e){this.a=d
this.b=e},
bGe:function bGe(d,e){this.a=d
this.b=e},
a7H:function a7H(){},
a7I:function a7I(){},
a7K:function a7K(){},
ae5:function ae5(){},
Kr:function Kr(){},
ae6:function ae6(){},
zP:function zP(){},
b2t:function b2t(){},
ahT:function ahT(){},
bju(d,e,f,g,h,i){var w
if(d<f)w=1
else w=d>h?2:0
if(e<g)w|=4
else if(e>i)w|=8
return w},
cze(d,e,f,g){var w,v,u,t=-g/2,s=g/2,r=f.a+s,q=f.b+s,p=d.a,o=d.b,n=e.a,m=e.b,l=A.bju(p,o,t,t,r,q),k=A.bju(n,m,t,t,r,q)
for(;;){if((l|k)===0)return new A.bjt(new B.y(p,o),new B.y(n,m))
if((l&k)!==0)return null
w=l!==0?l:k
if((w&8)!==0){v=p+(n-p)*(q-o)/(m-o)
u=q}else if((w&4)!==0){v=p+(n-p)*(t-o)/(m-o)
u=t}else if((w&2)!==0){u=o+(m-o)*(r-p)/(n-p)
v=r}else{if((w&1)!==0)u=o+(m-o)*(t-p)/(n-p)
else return null
v=t}if(w===l){l=A.bju(v,u,t,t,r,q)
o=u
p=v}else{k=A.bju(v,u,t,t,r,q)
m=u
n=v}}},
bcR:function bcR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.Q=_.z=_.y=_.x=_.w=_.r=$},
bcS:function bcS(d,e){this.a=d
this.b=e},
bEZ:function bEZ(){},
bjt:function bjt(d,e){this.a=d
this.b=e},
al2:function al2(){},
b0A:function b0A(d,e){this.a=d
this.b=e},
c18(d,e){return new A.aPD(d,e)},
aFP:function aFP(){},
aPD:function aPD(d,e){this.a=d
this.b=e},
c52(d,e,f){var w=d.a.bqK(f,256*Math.pow(2,d.e))
return new B.y(w.a-e.a,w.b-e.b)},
bX4(d,e,f,g){var w,v,u,t=256*Math.pow(2,d.e),s=e==null||J.eP(e)?g:J.cny(g,J.c7d(e,new A.bX5(),x.v)),r=-f.a,q=-f.b,p=J.av(s),o=p.gu(s),n=B.bl(o,C.L,!0,x.n)
for(w=0;w<o;++w){v=p.dJ(s,w)
u=G.mg.Bo(v.a,v.b,t)
n[w]=new B.y(u.a+r,u.b+q)}return n},
bX5:function bX5(){},
cGN(d,e,f,g,h,i){var w,v=h-f,u=i-g
if(v!==0||u!==0){w=((d-f)*v+(e-g)*u)/(v*v+u*u)
if(w>1){v=d-h
u=e-i
return v*v+u*u}else if(w>0){v=d-(f+v*w)
u=e-(g+u*w)
return v*v+u*u}}v=d-f
u=e-g
return v*v+u*u},
c4z(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=J.av(d),n=o.h(d,e),m=o.h(d,f),l=B.cp()
for(w=e+1,v=n.a,u=n.b,t=m.a,s=m.b,r=g;w<f;++w){q=o.h(d,w)
p=A.cGN(q.a,q.b,v,u,t,s)
if(p>r){l.b=w
r=p}}if(r>g){if(l.b0()-e>1)A.c4z(d,e,l.b0(),g,h)
h.push(o.h(d,l.b0()))
if(f-l.b0()>1)A.c4z(d,l.b0(),f,g,h)}},
ciZ(d,e,f){var w,v,u=J.av(e)
if(u.gu(e)<=4)return e
w=u.gu(e)-1
v=B.c([u.h(e,0)],x.L)
A.c4z(e,0,w,f*f,v)
v.push(u.h(e,w))
return v},
cGJ(d,e,f,g){var w,v,u,t,s,r
if(f<=0)return 0
w=256*Math.pow(2,g)
v=G.mg.aaU(0,0,w)
u=f*e
t=G.mg.aaU(u,u,w)
s=t.a-v.a
r=t.b-v.b
return Math.sqrt(s*s+r*r)},
lk:function lk(d,e){this.a=d
this.b=e},
c0p(d,e,f){var w=A.a8v(d,f),v=new A.nE(d,e,w)
v.d=w+e*1.4142135623730951
return v},
a8v(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=a0.a,v=a0.b,u=!1,t=1/0,s=0;s<1;++s){r=a1[s]
for(q=r.length,p=q-1,o=0;o<q;n=o+1,p=o,o=n){m=r[o]
l=r[p]
k=m.b
j=l.b
if(k>v!==j>v){i=m.a
i=w<(l.a-i)*(v-k)/(j-k)+i}else i=!1
if(i)u=!u
h=m.a
g=l.a
f=g-h
e=j-k
if(f!==0||e!==0){d=((w-h)*f+(v-k)*e)/(f*f+e*e)
if(d>1){k=j
h=g}else if(d>0){h+=f*d
k+=e*d}}f=w-h
e=v-k
t=Math.min(t,f*f+e*e)}}if(t===0)w=0
else{w=u?1:-1
w*=Math.sqrt(t)}return w},
ahG:function ahG(d,e){this.a=d
this.b=e},
nE:function nE(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
cHU(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=0,v=0,u=0,t=0,s=0;r=a5[0],s<r.length;++s){q=r[s]
r=s!==0
if(!r||q.a<w)w=q.a
if(!r||q.b<v)v=q.b
if(!r||q.a>u)u=q.a
if(!r||q.b>t)t=q.b}p=u-w
o=t-v
n=Math.min(p,o)
m=n/2
if(n===0)return new A.ahG(new D.bW(w,v,x.H),0)
l=B.ca1(new A.bY3(),x.o)
for(r=x.H,k=m*1.4142135623730951,j=w;j<u;j+=n)for(i=j+m,h=v;h<t;h+=n){g=new D.bW(i,h+m,r)
f=A.a8v(g,a5)
g=new A.nE(g,m,f)
g.d=f+k;++l.d
l.J3(g)}e=A.cD1(a5)
d=A.c0p(new D.bW(w+p/2,v+o/2,r),0,a5)
if(d.c>e.c)e=d
a0=l.c
while(l.c!==0){a1=l.qs()
if(a1.c>e.c)e=a1
k=a1.d
k===$&&B.b()
if(k-e.c<=a6)continue
m=a1.b/2
k=a1.a
i=k.a
g=i-m
k=k.b
f=k-m
a2=new D.bW(g,f,r)
a3=A.a8v(a2,a5)
a2=new A.nE(a2,m,a3)
a4=m*1.4142135623730951
a2.d=a3+a4;++l.d
l.J3(a2)
i+=m
f=new D.bW(i,f,r)
a2=A.a8v(f,a5)
f=new A.nE(f,m,a2)
f.d=a2+a4;++l.d
l.J3(f)
k+=m
g=new D.bW(g,k,r)
f=A.a8v(g,a5)
g=new A.nE(g,m,f)
g.d=f+a4;++l.d
l.J3(g)
k=new D.bW(i,k,r)
i=A.a8v(k,a5)
k=new A.nE(k,m,i)
k.d=i+a4;++l.d
l.J3(k)
a0+=4}return new A.ahG(e.a,e.c)},
cD1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d[0]
for(w=i.length,v=w-1,u=0,t=0,s=0,r=0;r<w;q=r+1,v=r,r=q){p=i[r]
o=i[v]
n=p.a
m=o.b
l=o.a
k=p.b
j=n*m-l*k
t+=(n+l)*j
s+=(k+m)*j
u+=j*3}if(u===0)return A.c0p(i[0],0,d)
return A.c0p(new D.bW(t/u,s/u,x.H),0,d)},
bY3:function bY3(){},
caJ(d){var w,v,u,t,s
for(w=d.$ti,v=new B.c_(d,d.gu(0),w.i("c_<al.E>")),w=w.i("al.E"),u=0,t=0;v.q();){s=v.d
if(s==null)s=w.a(s);++t
u+=(s-u)/t}if(t===0)throw B.i(B.aq("No elements"))
return u},
ct_(d){var w,v,u,t,s,r,q,p
for(w=180,v=-180,u=90,t=-90,s=0;s<4;++s){r=d[s]
q=r.b
if(q<w)w=q
if(q>v)v=q
p=r.a
if(p<u)u=p
if(p>t)t=p}return new D.Vw(t,u,v,w)},
cit(d,e){var w,v,u,t,s,r,q,p,o,n=e.length,m=d.a,l=d.b
for(w=n-1,v=!1,u=0;u<n;t=u+1,w=u,u=t){s=e[u]
r=s.a
q=s.b
s=e[w]
p=s.b
if(!(q<=l&&l<p))o=p<=l&&l<q
else o=!0
if(o&&m<(s.a-r)*(l-q)/(p-q)+r)v=!v}return v}},E,D,G,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[43],A)
E=c[173]
D=c[32]
G=c[149]
F=c[31]
A.bjf.prototype={
H(){return"VertexMode."+this.b}}
A.a40.prototype={
bmv(d,e,f){var w,v,u,t=d.a.gmk(),s=e.b,r=!1
if(s>=t.d)if(s<=t.c){s=e.a
t=s>=t.b&&s<=t.a}else t=r
else t=r
if(!t)return!1
t=this.a7Z$
t===$&&B.b()
w=A.bX4(this.b,null,t,d.b)
if(!C.i.ga9(w).k(0,C.i.gaI(w)))w.push(C.i.ga9(w))
v=A.cit(f,w)
u=J.fB(d.c)&&new A.bFI(this,d,f).$0()
if(!(v&&!u))t=!v&&u
else t=!0
return t},
aY(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4={},a5=B.c([],x.g),a6=$.an().r,a7=x.h,a8=B.c([],a7),a9=new B.cb(a6,C.aD,a3,a3,a8),b0=new B.cb(a6,C.aD,a3,a3,B.c([],a7))
a4.a=a4.b=null
w=new A.bFJ(a4,a2,a5,b1,a9,b0)
a7=a2.b
v=D.b1C(a7.B3(a7.d).a4(0,D.n7(a7.gG(),2)))
for(a6=a2.f,u=a2.r,t=x.n,s=a7.f,r=s*0.017453292519943295,q=a7.r,p=u==null,o=0;o<=a6.length-1;++o){n=a6[o]
m=n.b
if(J.eP(m))continue
l=n.a
k=p?a3:u[o]
j=k!=null
i=A.bX4(a7,j?n.c:a3,v,m)
h=l.gaz1()
g=(l.c.v()>>>24&255)/255
if(a4.a===h)f=g>0&&g<1
else f=!0
if(f)w.$0()
a4.b=l
a4.a=h
if(j){e=k.length
for(d=0;d<e;++d)a5.push(i[k[d]])}else{j=B.J(i,t)
j=new B.Rl(j,!0)
a8.push(j)
f=a9.f
if(f!=null)j.fi(f)
j=a9.e
if(j!=null)j.a.delete()
a9.e=null}j=l.d
if(j>0)a2.aMw(b0,l,A.bX4(a7,a3,v,m),b2,b1,a2.air(l),j)
m=l.gazu()!=null
if(m){m=a7.w
if(m==null)m=a7.w=D.cba(s,q)
j=l.ch
j=A.c52(a7,v,j==null?l.ch=A.cC8(E.a3y,l.a):j)
f=a2.aVg(v,l)
a0=l.gazu()
a0.toString
a1=A.cBL(f,m,20,j,!1,r,a0)
if(a1!=null){w.$0()
a1.$1(b1)}}}w.$0()},
air(d){var w
$.an()
w=B.bh()
w.r=d.e.gp()
w.c=d.d
w.d=C.lY
w.e=C.t7
w.b=C.ci
return w},
aMw(d,e,f,g,h,i,j){var w,v
if(E.qd.k(0,E.qd)){w=B.c([],x.t)
v=new A.bcR(f,!0,w,g,E.a_F,j)
v.aM3(g,!0,f,E.a_F,w,j)
v.bgM(B.c([d],x.p))}},
aVg(d,e){var w=e.gmk(),v=this.b,u=A.c52(v,d,new F.hM(w.b,w.d))
return new B.auw(A.c52(v,d,new F.hM(w.a,w.c)),u)},
f6(d){var w,v,u=this,t=!0
if(u.f===d.f){w=u.r
v=d.r
if(w==null?v==null:w===v)if(u.b.k(0,d.b)){t=u.w.k(0,d.w)
t=!t}}return t}}
A.b1M.prototype={
H(){return"PolygonLabelPlacement."+this.b}}
A.Fb.prototype={
gmk(){var w=this.CW
return w==null?this.CW=A.ct_(this.a):w},
gazu(){return null},
k(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof A.Fb&&v.c.k(0,e.c)&&v.d===e.d&&v.e.k(0,e.e)&&E.qd.k(0,E.qd)&&C.m3.k(0,C.m3)&&B.dP(null,null)&&B.dP(v.a,e.a)
else w=!0
return w},
gaz1(){var w=this,v=w.cy
return v==null?w.cy=B.aa(w.c,w.d,w.e,!1,E.qd,null,C.lY,C.t7,w.ay,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b):v},
gt(d){var w=this,v=w.db
if(v==null){v=B.J(w.a,x.O)
v.push(null)
v.push(C.m3)
v.push(E.a3y)
v.push(!1)
v.push(w.gaz1())
v=w.db=B.aD(v)}return v}}
A.Fc.prototype={
Y(){var w=this.$ti
return new A.a4_($,null,B.D(x.S,w.i("z<rq<1>>")),null,w.i("a4_<1>"))}}
A.a4_.prototype={
aEt(d,e){var w,v=A.ciZ(!0,d.b,e),u=d.c,t=J.av(u),s=t.gu(u),r=J.iJ(s,x.U)
for(w=0;w<s;++w)r[w]=A.ciZ(!0,t.h(u,w),e)
return new A.rq(d.a,v,r,this.$ti.i("rq<1>"))},
D(d){var w,v,u,t=this,s=null
t.aGz(d)
w=D.vR(d,G.mU)
v=w==null?s:w.a
if(v==null)v=B.a9(B.aq(y.a))
t.a.toString
w=t.a7W$
w===$&&B.b()
w=J.eQ(w,new A.bFH(t,v))
u=B.J(w,w.$ti.i("z.E"))
t.a.toString
w=t.$ti
return new D.L8(B.ht(s,s,s,new A.a40(u,s,v.gaA9(),!0,!1,!1,$,v,s,B.c([],w.i("x<1>")),s,w.i("a40<1>")),new B.S(v.gG().a,v.gG().b)),s)}}
A.rq.prototype={}
A.a7H.prototype={
aZ(d){this.bg(d)
this.a7X$=null
this.a7Y$.a0(0)}}
A.a7I.prototype={
wR(d){var w=this.b
this.a7Z$=D.b1C(w.B3(w.d)).a4(0,D.b1C(w.gG()).c1(0,2))
return this.aFV(d)}}
A.a7K.prototype={}
A.ae5.prototype={}
A.Kr.prototype={
wR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
C.i.a0(i.d)
w=d.a
v=d.b
u=x.X
t=new D.bW(w,v,u)
s=i.b
r=s.r
q=s.a
p=s.e
o=q.M5(s.d,p)
n=o.a4(0,new D.bW(r.a/2-w,r.b/2-v,u))
m=q.ayg(s.f!==0?s.azm(o,n):n,p)
for(w=i.f,l=w.length-1,k=!1;l>=0;--l){j=w[l]
if(k)j.toString
if(k)continue
k=i.bmv(j,m,t)
if(k)j.toString}if(!k)return!1
return!0}}
A.ae6.prototype={}
A.zP.prototype={
D(d){var w,v,u,t,s,r,q,p=this,o=D.vR(d,G.mU),n=o==null?null:o.a
if(n==null)n=B.a9(B.aq(y.a))
o=p.a
o.toString
w=o.e
v=p.a7X$
if(v==null){o=p.$ti
u=J.iJ(1,o.i("zP.0"))
for(o=o.c,t=0;t<1;++t)u[t]=A.cAK(G.acS,w[t],o)
p.a7X$=u
v=u}if(p.a.c===0)p.a7W$=v
else{s=B.aA(d,C.e5,x.w).w.b
if(s!==p.auS$){p.auS$=s
p.a7Y$.a0(0)}o=p.a7Y$
r=C.m.el(n.e)
q=o.h(0,r)
if(q==null){q=p.aoB(n,s,p.a.c,v)
o.l(0,r,q)
o=q}else o=q
p.a7W$=o}return new B.e9(new A.b2t(),null)},
aoB(d,e,f,g){return new B.ia(this.bce(d,e,f,g),this.$ti.i("ia<zP.0>"))},
bce(d,e,f,g){var w=this
return function(){var v=d,u=e,t=f,s=g
var r=0,q=1,p=[],o,n,m
return function $async$aoB(h,i,j){if(i===1){p.push(j)
r=q}for(;;)switch(r){case 0:m=A.cGJ(v.a,u,t,C.m.el(v.e))
o=s.length,n=0
case 2:if(!(n<o)){r=4
break}r=5
return h.b=w.aEt(s[n],m),1
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return h.c=p.at(-1),3}}}}}
A.ahT.prototype={}
A.bcR.prototype={
bgM(d){var w,v,u,t,s,r,q,p,o,n,m={},l=this.a,k=J.av(l)
if(k.gu(l)<2)return
m.a=B.c([],x.g)
w=new A.bcS(m,d)
v=this.d
u=this.f
t=null
s=null
r=0
for(;;){q=k.gu(l)
if(!(r<q-1+1))break
A:{p=r+1
o=A.cze(k.h(l,r),k.h(l,C.f.aE(p,k.gu(l))),v,u)
if(o==null)break A
q=o.a
if(t!==q.a||s!==q.b){w.$0()
m.a.push(q)}q=m.a
n=o.b
q.push(n)
t=n.a
s=n.b}r=p}w.$0()},
aBk(){return 1}}
A.bEZ.prototype={
aM3(d,e,f,g,h,i){var w,v=this,u=v.aVZ()
v.w!==$&&B.b8()
v.w=u
u=v.c
w=v.aWd(u)
v.z!==$&&B.b8()
v.z=w
v.y=u.length-1
v.x=0
v.bsl()
u=v.aBk()
v.r!==$&&B.b8()
v.r=u},
bsl(){var w,v=this,u=v.c,t=u.length
if(t===0)return
w=v.y
w===$&&B.b()
t=C.f.aE(w+1,t)
v.y=t
v.x=u[t]},
aVZ(){var w,v,u,t,s,r,q=this.a,p=J.av(q)
if(p.gu(q)<2)return 0
for(w=0,v=1;v<p.gu(q);++v){u=p.h(q,v-1)
t=p.h(q,v)
s=u.a-t.a
r=u.b-t.b
w+=Math.sqrt(s*s+r*r)}q=J.c_M(p.gaI(q),p.ga9(q)).gdX()
return w+q},
aWd(d){var w,v,u
for(w=d.length,v=0,u=0;u<w;++u)v=C.m.a_(v,d[u])
return v}}
A.bjt.prototype={
j(d){return"VisibleSegment("+this.a.j(0)+", "+this.b.j(0)+")"}}
A.al2.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=e instanceof A.al2
else w=!0
return w},
gt(d){return B.aa(null,null,null,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
A.b0A.prototype={
H(){return"PatternFit."+this.b}}
A.aFP.prototype={}
A.aPD.prototype={
bnA(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this.b,a1=x.X,a2=new D.bW(a0.a,a0.b,a1),a3=new D.bW(a0.c,a0.d,a1)
a0=this.a
w=a0.a
v=a0.d
u=a0.b
a0=a0.c
t=a4.r.a4(0,a2.a_(0,a3))
s=Math.max(0,t.a)
r=Math.max(0,t.b)
q=a4.e
p=D.uI(a4.mK(new F.hM(u,a0),q),a4.mK(new F.hM(w,v),q),x.i)
o=p.b.a4(0,p.a)
p=a4.f
n=p!==0
if(n){m=p*0.017453292519943295
l=Math.abs(Math.cos(m))
k=Math.abs(Math.sin(m))
m=o.a
j=o.b
o=new D.bW(m*l+j*k,j*l+m*k,a1)}a1=Math.log(Math.min(s/o.a,r/o.b)*(256*Math.pow(2,q))/256)
s=a4.b
if(s==null)s=0
i=Math.max(s,0)
s=a4.c
if(s==null)s=1/0
h=C.m.ar(a1/0.6931471805599453,i,Math.min(s,1/0))
g=D.n7(a3.a4(0,a2),2)
f=a4.mK(new F.hM(u,v),h)
e=a4.mK(new F.hM(w,a0),h)
if(n){a0=p*0.017453292519943295
a1=-a0
d=D.LL(D.n7(D.LL(f,a1).a_(0,D.LL(e,a1)),2).a_(0,g),a0)}else d=D.n7(f.a_(0,e),2).a_(0,g)
return a4.aAd(a4.Bu(d,h),h)}}
A.lk.prototype={
a4(d,e){return new A.lk(this.a-e.a,this.b-e.b)},
j(d){return"DoublePoint("+B.q(this.a)+", "+B.q(this.b)+")"}}
A.ahG.prototype={
j(d){return B.R(this).j(0)+"("+this.a.j(0)+", distance: "+B.q(this.b)+")"}}
A.nE.prototype={}
var z=a.updateTypes(["W(hM)","lk(v)","w<w<lk>>()","w<lk>(w<lk>)","v(nE,nE)"])
A.bTp.prototype={
$1(d){var w=this
w.e.aY(d,new B.y(w.b-w.f/2,w.c-w.r/2))},
$S:1085}
A.bTA.prototype={
$1(d){return d.a},
$S:z+0}
A.bTB.prototype={
$1(d){return d.b},
$S:z+0}
A.bFI.prototype={
$0(){var w,v,u,t,s,r,q
for(w=J.aT(this.b.c),v=this.c,u=this.a,t=u.b;w.q();){s=w.gJ()
r=u.a7Z$
r===$&&B.b()
q=A.bX4(t,null,r,s)
s=C.i.ga9(q)
r=C.i.gaI(q)
if(!(r.a===s.a&&r.b===s.b))q.push(C.i.ga9(q))
if(A.cit(v,q))return!0}return!1},
$S:9}
A.bFJ.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this,n=o.a,m=n.b
if(m==null)return
w=m.c
$.an()
v=B.bh()
v.b=C.cq
v.r=w.gp()
u=o.c
t=u.length
if(t!==0){s=new Float32Array(t*2)
for(r=0;r<t;++r){q=r*2
p=u[r]
s[q]=p.a
s[q+1]=p.b}$.an()
o.d.bmp(B.cp2(E.fA4,s,null,null,null),E.a9U,v)}else o.d.hL(o.e,v)
if(m.d>0)o.d.hL(o.f,o.b.air(m))
C.i.a0(o.c)
o.e.jP()
o.f.jP()
n.a=n.b=null},
$S:0}
A.bFH.prototype={
$1(d){var w=d.a.gmk(),v=this.b.gaA9()
return!(w.b>v.a||w.a<v.b||w.c<v.d||w.d>v.c)},
$S(){return this.a.$ti.i("B(rq<1>)")}}
A.bGd.prototype={
$1(d){var w=this.a.buU(this.b.a[d])
return new A.lk(w.a,w.b)},
$S:z+1}
A.bGe.prototype={
$0(){var w=B.c([],x.W)
return w},
$S:z+2}
A.b2t.prototype={
$1(d){return B.a9(B.dw("Widgets that mix ProjectionSimplificationManagement into their State must call super.build() but must ignore the return value of the superclass."))},
$S:1086}
A.bcS.prototype={
$0(){var w,v,u,t,s,r,q=this.a
if(q.a.length===0)return
for(w=this.b,v=x.n,u=0;u<1;++u){t=w[u]
s=B.J(q.a,v)
s=new B.Rl(s,!1)
t.r.push(s)
r=t.f
if(r!=null)s.fi(r)
s=t.e
if(s!=null)s.a.delete()
t.e=null}q.a=B.c([],x.g)},
$S:0}
A.bX5.prototype={
$1(d){return d},
$S:z+3}
A.bY3.prototype={
$2(d,e){var w,v=e.d
v===$&&B.b()
w=d.d
w===$&&B.b()
return C.m.bn(v,w)},
$S:z+4};(function aliases(){var w=A.Kr.prototype
w.aFV=w.wR
w=A.zP.prototype
w.aGz=w.D})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.hA,[A.bjf,A.b1M,A.b0A])
u(B.cu,[A.bTp,A.bTA,A.bTB,A.bFH,A.bGd,A.b2t,A.bX5])
t(A.Kr,B.yh)
t(A.a7I,A.Kr)
t(A.a40,A.a7I)
u(B.dr,[A.bFI,A.bFJ,A.bGe,A.bcS])
u(B.C,[A.Fb,A.a7K,A.ae5,A.ae6,A.zP,A.bEZ,A.bjt,A.al2,A.aFP,A.lk,A.ahG,A.nE])
t(A.ahT,B.M)
t(A.Fc,A.ahT)
t(A.a7H,B.Z)
t(A.a4_,A.a7H)
t(A.rq,A.a7K)
t(A.bcR,A.bEZ)
t(A.aPD,A.aFP)
t(A.bY3,B.ds)
w(A.a7H,A.zP)
w(A.a7I,A.ae6)
v(A.a7K,A.ae5)})()
B.cV(b.typeUniverse,JSON.parse('{"Fc":{"M":[],"h":[]},"a40":{"Kr":["1","rq<1>"],"aC":[]},"a4_":{"zP":["rq<1>","Fb<1>","Fc<1>"],"Z":["Fc<1>"],"zP.0":"rq<1>"},"Kr":{"aC":[]},"ahT":{"M":[],"h":[]}}'))
B.Qq(b.typeUniverse,JSON.parse('{"a7H":1,"a7I":1,"a7K":1,"ae5":1,"ae6":2}'))
var y={a:"`MapCamera.of()` should not be called outside a `FlutterMap` and its descendants"}
var x=(function rtii(){var w=B.L
return{o:w("nE"),v:w("lk"),L:w("x<lk>"),W:w("x<w<lk>>"),a:w("x<w<bW<b7>>>"),g:w("x<y>"),p:w("x<WN>"),h:w("x<ef>"),t:w("x<W>"),U:w("w<lk>"),w:w("i1"),n:w("y"),X:w("bW<W>"),H:w("bW<b7>"),i:w("W"),S:w("v"),O:w("C?")}})();(function constants(){E.a9U=new B.Co(1,"src")
E.qd=new A.al2()
E.a_F=new A.b0A(0,"none")
E.a3y=new A.b1M(0,"centroid")
E.fA4=new A.bjf(0,"triangles")})()};
(a=>{a["aVTSfEO7phzCT60V0GzdQPXXiT0="]=a.current})($__dart_deferred_initializers__);