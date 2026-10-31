((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={biZ:function biZ(d,e){this.a=d
this.b=e},
cBj(d,e,f,g,h,i,j){var w=g.a,v=g.b,u=j.b,t=u.c,s=u.a.c.gaO()
if(i===0){u=t/2
if(w+u<0||w-u>e.a)return null
u=s/2
if(v+u<0||v-u>e.b)return null}if(d.a.a-d.b.a-f>t)return new A.bTa(!1,w,v,i,j,t,s)
return null},
cBH(d,e){var w
switch(d.a){case 0:w=A.cBE(e)
break
case 1:w=A.cBL(e)
break
default:w=null}return w},
cBE(d){var w=B.a3(d).i("a8<1,W>")
return new F.hK(A.cal(new B.a8(d,new A.bTl(),w)),A.cal(new B.a8(d,new A.bTm(),w)))},
cBL(d){var w,v,u=x.H,t=J.h3(4,u)
for(w=0;w<4;++w){v=d[w]
t[w]=new D.bW(v.b,v.a,u)}u=A.cHp(B.c([t],x.a),0.0001).a
return new F.hK(u.b,u.a)},
cuk(d,e,f,g,h){var w=A.cum(g)
w=w
return new A.F7(g,f,e,d,w,h.i("F7<0>"))},
cum(d){var w,v,u,t
for(w=0,v=0;v<4;){u=d[v];++v
t=d[v%4]
w+=(t.b-u.b)*(t.a+u.a)}return w>=0},
cul(d,e,f){return new A.F8(e,0.3,d,f.i("F8<0>"))},
cAi(d,e,f){return new A.ro(e,B.zd(4,new A.bG_(d,e),!1,x.v),new A.bG0(e,d).$0(),f.i("ro<0>"))},
bTa:function bTa(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bTl:function bTl(){},
bTm:function bTm(){},
a3X:function a3X(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i
_.a7W$=j
_.b=k
_.c=l
_.d=m
_.a=n
_.$ti=o},
bFu:function bFu(d,e,f){this.a=d
this.b=e
this.c=f},
bFv:function bFv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b1y:function b1y(d,e){this.a=d
this.b=e},
F7:function F7(d,e,f,g,h,i){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.ay=h
_.db=_.cy=_.cx=_.CW=_.ch=null
_.$ti=i},
F8:function F8(d,e,f,g){var _=this
_.e=d
_.c=e
_.a=f
_.$ti=g},
a3W:function a3W(d,e,f,g,h){var _=this
_.a7T$=d
_.a7U$=e
_.a7V$=f
_.auO$=g
_.c=_.a=null
_.$ti=h},
bFt:function bFt(d,e){this.a=d
this.b=e},
ro:function ro(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
bG_:function bG_(d,e){this.a=d
this.b=e},
bG0:function bG0(d,e){this.a=d
this.b=e},
a7D:function a7D(){},
a7E:function a7E(){},
a7G:function a7G(){},
ae1:function ae1(){},
Kk:function Kk(){},
ae2:function ae2(){},
zM:function zM(){},
b2f:function b2f(){},
ahP:function ahP(){},
bjd(d,e,f,g,h,i){var w
if(d<f)w=1
else w=d>h?2:0
if(e<g)w|=4
else if(e>i)w|=8
return w},
cyN(d,e,f,g){var w,v,u,t=-g/2,s=g/2,r=f.a+s,q=f.b+s,p=d.a,o=d.b,n=e.a,m=e.b,l=A.bjd(p,o,t,t,r,q),k=A.bjd(n,m,t,t,r,q)
for(;;){if((l|k)===0)return new A.bjc(new B.x(p,o),new B.x(n,m))
if((l&k)!==0)return null
w=l!==0?l:k
if((w&8)!==0){v=p+(n-p)*(q-o)/(m-o)
u=q}else if((w&4)!==0){v=p+(n-p)*(t-o)/(m-o)
u=t}else if((w&2)!==0){u=o+(m-o)*(r-p)/(n-p)
v=r}else{if((w&1)!==0)u=o+(m-o)*(t-p)/(n-p)
else return null
v=t}if(w===l){l=A.bjd(v,u,t,t,r,q)
o=u
p=v}else{k=A.bjd(v,u,t,t,r,q)
m=u
n=v}}},
bcA:function bcA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.Q=_.z=_.y=_.x=_.w=_.r=$},
bcB:function bcB(d,e){this.a=d
this.b=e},
bEL:function bEL(){},
bjc:function bjc(d,e){this.a=d
this.b=e},
akZ:function akZ(){},
b0m:function b0m(d,e){this.a=d
this.b=e},
c0L(d,e){return new A.aPx(d,e)},
aFJ:function aFJ(){},
aPx:function aPx(d,e){this.a=d
this.b=e},
c4F(d,e,f){var w=d.a.bqA(f,256*Math.pow(2,d.e))
return new B.x(w.a-e.a,w.b-e.b)},
bWP(d,e,f,g){var w,v,u,t=256*Math.pow(2,d.e),s=e==null||J.eP(e)?g:J.cn8(g,J.c6Q(e,new A.bWQ(),x.v)),r=-f.a,q=-f.b,p=J.av(s),o=p.gu(s),n=B.bl(o,C.L,!0,x.n)
for(w=0;w<o;++w){v=p.dH(s,w)
u=G.mg.Bm(v.a,v.b,t)
n[w]=new B.x(u.a+r,u.b+q)}return n},
bWQ:function bWQ(){},
cGl(d,e,f,g,h,i){var w,v=h-f,u=i-g
if(v!==0||u!==0){w=((d-f)*v+(e-g)*u)/(v*v+u*u)
if(w>1){v=d-h
u=e-i
return v*v+u*u}else if(w>0){v=d-(f+v*w)
u=e-(g+u*w)
return v*v+u*u}}v=d-f
u=e-g
return v*v+u*u},
c4b(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=J.av(d),n=o.h(d,e),m=o.h(d,f),l=B.cp()
for(w=e+1,v=n.a,u=n.b,t=m.a,s=m.b,r=g;w<f;++w){q=o.h(d,w)
p=A.cGl(q.a,q.b,v,u,t,s)
if(p>r){l.b=w
r=p}}if(r>g){if(l.b0()-e>1)A.c4b(d,e,l.b0(),g,h)
h.push(o.h(d,l.b0()))
if(f-l.b0()>1)A.c4b(d,l.b0(),f,g,h)}},
ciB(d,e,f){var w,v,u=J.av(e)
if(u.gu(e)<=4)return e
w=u.gu(e)-1
v=B.c([u.h(e,0)],x.L)
A.c4b(e,0,w,f*f,v)
v.push(u.h(e,w))
return v},
cGh(d,e,f,g){var w,v,u,t,s,r
if(f<=0)return 0
w=256*Math.pow(2,g)
v=G.mg.aaR(0,0,w)
u=f*e
t=G.mg.aaR(u,u,w)
s=t.a-v.a
r=t.b-v.b
return Math.sqrt(s*s+r*r)},
li:function li(d,e){this.a=d
this.b=e},
c01(d,e,f){var w=A.a8r(d,f),v=new A.nC(d,e,w)
v.d=w+e*1.4142135623730951
return v},
a8r(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
ahC:function ahC(d,e){this.a=d
this.b=e},
nC:function nC(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
cHp(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=0,v=0,u=0,t=0,s=0;r=a5[0],s<r.length;++s){q=r[s]
r=s!==0
if(!r||q.a<w)w=q.a
if(!r||q.b<v)v=q.b
if(!r||q.a>u)u=q.a
if(!r||q.b>t)t=q.b}p=u-w
o=t-v
n=Math.min(p,o)
m=n/2
if(n===0)return new A.ahC(new D.bW(w,v,x.H),0)
l=B.c9E(new A.bXJ(),x.o)
for(r=x.H,k=m*1.4142135623730951,j=w;j<u;j+=n)for(i=j+m,h=v;h<t;h+=n){g=new D.bW(i,h+m,r)
f=A.a8r(g,a5)
g=new A.nC(g,m,f)
g.d=f+k;++l.d
l.J1(g)}e=A.cCA(a5)
d=A.c01(new D.bW(w+p/2,v+o/2,r),0,a5)
if(d.c>e.c)e=d
a0=l.c
while(l.c!==0){a1=l.qq()
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
a3=A.a8r(a2,a5)
a2=new A.nC(a2,m,a3)
a4=m*1.4142135623730951
a2.d=a3+a4;++l.d
l.J1(a2)
i+=m
f=new D.bW(i,f,r)
a2=A.a8r(f,a5)
f=new A.nC(f,m,a2)
f.d=a2+a4;++l.d
l.J1(f)
k+=m
g=new D.bW(g,k,r)
f=A.a8r(g,a5)
g=new A.nC(g,m,f)
g.d=f+a4;++l.d
l.J1(g)
k=new D.bW(i,k,r)
i=A.a8r(k,a5)
k=new A.nC(k,m,i)
k.d=i+a4;++l.d
l.J1(k)
a0+=4}return new A.ahC(e.a,e.c)},
cCA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d[0]
for(w=i.length,v=w-1,u=0,t=0,s=0,r=0;r<w;q=r+1,v=r,r=q){p=i[r]
o=i[v]
n=p.a
m=o.b
l=o.a
k=p.b
j=n*m-l*k
t+=(n+l)*j
s+=(k+m)*j
u+=j*3}if(u===0)return A.c01(i[0],0,d)
return A.c01(new D.bW(t/u,s/u,x.H),0,d)},
bXJ:function bXJ(){},
cal(d){var w,v,u,t,s
for(w=d.$ti,v=new B.c_(d,d.gu(0),w.i("c_<al.E>")),w=w.i("al.E"),u=0,t=0;v.q();){s=v.d
if(s==null)s=w.a(s);++t
u+=(s-u)/t}if(t===0)throw B.i(B.ar("No elements"))
return u},
csz(d){var w,v,u,t,s,r,q,p
for(w=180,v=-180,u=90,t=-90,s=0;s<4;++s){r=d[s]
q=r.b
if(q<w)w=q
if(q>v)v=q
p=r.a
if(p<u)u=p
if(p>t)t=p}return new D.Vs(t,u,v,w)},
ci5(d,e){var w,v,u,t,s,r,q,p,o,n=e.length,m=d.a,l=d.b
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
A=a.updateHolder(c[42],A)
E=c[169]
D=c[31]
G=c[145]
F=c[30]
A.biZ.prototype={
H(){return"VertexMode."+this.b}}
A.a3X.prototype={
bml(d,e,f){var w,v,u,t=d.a.gmj(),s=e.b,r=!1
if(s>=t.d)if(s<=t.c){s=e.a
t=s>=t.b&&s<=t.a}else t=r
else t=r
if(!t)return!1
t=this.a7W$
t===$&&B.b()
w=A.bWP(this.b,null,t,d.b)
if(!C.i.ga9(w).k(0,C.i.gaH(w)))w.push(C.i.ga9(w))
v=A.ci5(f,w)
u=J.fB(d.c)&&new A.bFu(this,d,f).$0()
if(!(v&&!u))t=!v&&u
else t=!0
return t},
aY(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4={},a5=B.c([],x.g),a6=$.an().r,a7=x.h,a8=B.c([],a7),a9=new B.cb(a6,C.aD,a3,a3,a8),b0=new B.cb(a6,C.aD,a3,a3,B.c([],a7))
a4.a=a4.b=null
w=new A.bFv(a4,a2,a5,b1,a9,b0)
a7=a2.b
v=D.b1o(a7.B1(a7.d).a4(0,D.n5(a7.gG(),2)))
for(a6=a2.f,u=a2.r,t=x.n,s=a7.f,r=s*0.017453292519943295,q=a7.r,p=u==null,o=0;o<=a6.length-1;++o){n=a6[o]
m=n.b
if(J.eP(m))continue
l=n.a
k=p?a3:u[o]
j=k!=null
i=A.bWP(a7,j?n.c:a3,v,m)
h=l.gayX()
g=(l.c.v()>>>24&255)/255
if(a4.a===h)f=g>0&&g<1
else f=!0
if(f)w.$0()
a4.b=l
a4.a=h
if(j){e=k.length
for(d=0;d<e;++d)a5.push(i[k[d]])}else{j=B.J(i,t)
j=new B.Rh(j,!0)
a8.push(j)
f=a9.f
if(f!=null)j.fi(f)
j=a9.e
if(j!=null)j.a.delete()
a9.e=null}j=l.d
if(j>0)a2.aMr(b0,l,A.bWP(a7,a3,v,m),b2,b1,a2.aim(l),j)
m=l.gazp()!=null
if(m){m=a7.w
if(m==null)m=a7.w=D.caN(s,q)
j=l.ch
j=A.c4F(a7,v,j==null?l.ch=A.cBH(E.a3x,l.a):j)
f=a2.aVa(v,l)
a0=l.gazp()
a0.toString
a1=A.cBj(f,m,20,j,!1,r,a0)
if(a1!=null){w.$0()
a1.$1(b1)}}}w.$0()},
aim(d){var w
$.an()
w=B.bh()
w.r=d.e.gp()
w.c=d.d
w.d=C.lX
w.e=C.t7
w.b=C.ci
return w},
aMr(d,e,f,g,h,i,j){var w,v
if(E.qc.k(0,E.qc)){w=B.c([],x.t)
v=new A.bcA(f,!0,w,g,E.a_E,j)
v.aLZ(g,!0,f,E.a_E,w,j)
v.bgC(B.c([d],x.p))}},
aVa(d,e){var w=e.gmj(),v=this.b,u=A.c4F(v,d,new F.hK(w.b,w.d))
return new B.aus(A.c4F(v,d,new F.hK(w.a,w.c)),u)},
f6(d){var w,v,u=this,t=!0
if(u.f===d.f){w=u.r
v=d.r
if(w==null?v==null:w===v)if(u.b.k(0,d.b)){t=u.w.k(0,d.w)
t=!t}}return t}}
A.b1y.prototype={
H(){return"PolygonLabelPlacement."+this.b}}
A.F7.prototype={
gmj(){var w=this.CW
return w==null?this.CW=A.csz(this.a):w},
gazp(){return null},
k(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof A.F7&&v.c.k(0,e.c)&&v.d===e.d&&v.e.k(0,e.e)&&E.qc.k(0,E.qc)&&C.m2.k(0,C.m2)&&B.dO(null,null)&&B.dO(v.a,e.a)
else w=!0
return w},
gayX(){var w=this,v=w.cy
return v==null?w.cy=B.aa(w.c,w.d,w.e,!1,E.qc,null,C.lX,C.t7,w.ay,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b):v},
gt(d){var w=this,v=w.db
if(v==null){v=B.J(w.a,x.O)
v.push(null)
v.push(C.m2)
v.push(E.a3x)
v.push(!1)
v.push(w.gayX())
v=w.db=B.aD(v)}return v}}
A.F8.prototype={
Y(){var w=this.$ti
return new A.a3W($,null,B.D(x.S,w.i("z<ro<1>>")),null,w.i("a3W<1>"))}}
A.a3W.prototype={
aEo(d,e){var w,v=A.ciB(!0,d.b,e),u=d.c,t=J.av(u),s=t.gu(u),r=J.iH(s,x.U)
for(w=0;w<s;++w)r[w]=A.ciB(!0,t.h(u,w),e)
return new A.ro(d.a,v,r,this.$ti.i("ro<1>"))},
D(d){var w,v,u,t=this,s=null
t.aGu(d)
w=D.vP(d,G.mU)
v=w==null?s:w.a
if(v==null)v=B.a9(B.ar(y.a))
t.a.toString
w=t.a7T$
w===$&&B.b()
w=J.eQ(w,new A.bFt(t,v))
u=B.J(w,w.$ti.i("z.E"))
t.a.toString
w=t.$ti
return new D.L1(B.hs(s,s,s,new A.a3X(u,s,v.gaA4(),!0,!1,!1,$,v,s,B.c([],w.i("y<1>")),s,w.i("a3X<1>")),new B.S(v.gG().a,v.gG().b)),s)}}
A.ro.prototype={}
A.a7D.prototype={
aZ(d){this.bg(d)
this.a7U$=null
this.a7V$.a0(0)}}
A.a7E.prototype={
wP(d){var w=this.b
this.a7W$=D.b1o(w.B1(w.d)).a4(0,D.b1o(w.gG()).c1(0,2))
return this.aFQ(d)}}
A.a7G.prototype={}
A.ae1.prototype={}
A.Kk.prototype={
wP(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
C.i.a0(i.d)
w=d.a
v=d.b
u=x.X
t=new D.bW(w,v,u)
s=i.b
r=s.r
q=s.a
p=s.e
o=q.M3(s.d,p)
n=o.a4(0,new D.bW(r.a/2-w,r.b/2-v,u))
m=q.ayc(s.f!==0?s.azh(o,n):n,p)
for(w=i.f,l=w.length-1,k=!1;l>=0;--l){j=w[l]
if(k)j.toString
if(k)continue
k=i.bml(j,m,t)
if(k)j.toString}if(!k)return!1
return!0}}
A.ae2.prototype={}
A.zM.prototype={
D(d){var w,v,u,t,s,r,q,p=this,o=D.vP(d,G.mU),n=o==null?null:o.a
if(n==null)n=B.a9(B.ar(y.a))
o=p.a
o.toString
w=o.e
v=p.a7U$
if(v==null){o=p.$ti
u=J.iH(1,o.i("zM.0"))
for(o=o.c,t=0;t<1;++t)u[t]=A.cAi(G.acP,w[t],o)
p.a7U$=u
v=u}if(p.a.c===0)p.a7T$=v
else{s=B.aA(d,C.e5,x.w).w.b
if(s!==p.auO$){p.auO$=s
p.a7V$.a0(0)}o=p.a7V$
r=C.m.ek(n.e)
q=o.h(0,r)
if(q==null){q=p.aox(n,s,p.a.c,v)
o.l(0,r,q)
o=q}else o=q
p.a7T$=o}return new B.e7(new A.b2f(),null)},
aox(d,e,f,g){return new B.i9(this.bc5(d,e,f,g),this.$ti.i("i9<zM.0>"))},
bc5(d,e,f,g){var w=this
return function(){var v=d,u=e,t=f,s=g
var r=0,q=1,p=[],o,n,m
return function $async$aox(h,i,j){if(i===1){p.push(j)
r=q}for(;;)switch(r){case 0:m=A.cGh(v.a,u,t,C.m.ek(v.e))
o=s.length,n=0
case 2:if(!(n<o)){r=4
break}r=5
return h.b=w.aEo(s[n],m),1
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return h.c=p.at(-1),3}}}}}
A.ahP.prototype={}
A.bcA.prototype={
bgC(d){var w,v,u,t,s,r,q,p,o,n,m={},l=this.a,k=J.av(l)
if(k.gu(l)<2)return
m.a=B.c([],x.g)
w=new A.bcB(m,d)
v=this.d
u=this.f
t=null
s=null
r=0
for(;;){q=k.gu(l)
if(!(r<q-1+1))break
A:{p=r+1
o=A.cyN(k.h(l,r),k.h(l,C.f.aD(p,k.gu(l))),v,u)
if(o==null)break A
q=o.a
if(t!==q.a||s!==q.b){w.$0()
m.a.push(q)}q=m.a
n=o.b
q.push(n)
t=n.a
s=n.b}r=p}w.$0()},
aBf(){return 1}}
A.bEL.prototype={
aLZ(d,e,f,g,h,i){var w,v=this,u=v.aVT()
v.w!==$&&B.b8()
v.w=u
u=v.c
w=v.aW7(u)
v.z!==$&&B.b8()
v.z=w
v.y=u.length-1
v.x=0
v.bsb()
u=v.aBf()
v.r!==$&&B.b8()
v.r=u},
bsb(){var w,v=this,u=v.c,t=u.length
if(t===0)return
w=v.y
w===$&&B.b()
t=C.f.aD(w+1,t)
v.y=t
v.x=u[t]},
aVT(){var w,v,u,t,s,r,q=this.a,p=J.av(q)
if(p.gu(q)<2)return 0
for(w=0,v=1;v<p.gu(q);++v){u=p.h(q,v-1)
t=p.h(q,v)
s=u.a-t.a
r=u.b-t.b
w+=Math.sqrt(s*s+r*r)}q=J.c_o(p.gaH(q),p.ga9(q)).gdX()
return w+q},
aW7(d){var w,v,u
for(w=d.length,v=0,u=0;u<w;++u)v=C.m.a_(v,d[u])
return v}}
A.bjc.prototype={
j(d){return"VisibleSegment("+this.a.j(0)+", "+this.b.j(0)+")"}}
A.akZ.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=e instanceof A.akZ
else w=!0
return w},
gt(d){return B.aa(null,null,null,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
A.b0m.prototype={
H(){return"PatternFit."+this.b}}
A.aFJ.prototype={}
A.aPx.prototype={
bnq(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this.b,a1=x.X,a2=new D.bW(a0.a,a0.b,a1),a3=new D.bW(a0.c,a0.d,a1)
a0=this.a
w=a0.a
v=a0.d
u=a0.b
a0=a0.c
t=a4.r.a4(0,a2.a_(0,a3))
s=Math.max(0,t.a)
r=Math.max(0,t.b)
q=a4.e
p=D.uF(a4.mJ(new F.hK(u,a0),q),a4.mJ(new F.hK(w,v),q),x.i)
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
g=D.n5(a3.a4(0,a2),2)
f=a4.mJ(new F.hK(u,v),h)
e=a4.mJ(new F.hK(w,a0),h)
if(n){a0=p*0.017453292519943295
a1=-a0
d=D.LF(D.n5(D.LF(f,a1).a_(0,D.LF(e,a1)),2).a_(0,g),a0)}else d=D.n5(f.a_(0,e),2).a_(0,g)
return a4.aA8(a4.Bs(d,h),h)}}
A.li.prototype={
a4(d,e){return new A.li(this.a-e.a,this.b-e.b)},
j(d){return"DoublePoint("+B.r(this.a)+", "+B.r(this.b)+")"}}
A.ahC.prototype={
j(d){return B.Q(this).j(0)+"("+this.a.j(0)+", distance: "+B.r(this.b)+")"}}
A.nC.prototype={}
var z=a.updateTypes(["W(hK)","li(v)","w<w<li>>()","w<li>(w<li>)","v(nC,nC)"])
A.bTa.prototype={
$1(d){var w=this
w.e.aY(d,new B.x(w.b-w.f/2,w.c-w.r/2))},
$S:1084}
A.bTl.prototype={
$1(d){return d.a},
$S:z+0}
A.bTm.prototype={
$1(d){return d.b},
$S:z+0}
A.bFu.prototype={
$0(){var w,v,u,t,s,r,q
for(w=J.aT(this.b.c),v=this.c,u=this.a,t=u.b;w.q();){s=w.gJ()
r=u.a7W$
r===$&&B.b()
q=A.bWP(t,null,r,s)
s=C.i.ga9(q)
r=C.i.gaH(q)
if(!(r.a===s.a&&r.b===s.b))q.push(C.i.ga9(q))
if(A.ci5(v,q))return!0}return!1},
$S:9}
A.bFv.prototype={
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
o.d.bmf(B.coD(E.fzP,s,null,null,null),E.a9S,v)}else o.d.hL(o.e,v)
if(m.d>0)o.d.hL(o.f,o.b.aim(m))
C.i.a0(o.c)
o.e.jO()
o.f.jO()
n.a=n.b=null},
$S:0}
A.bFt.prototype={
$1(d){var w=d.a.gmj(),v=this.b.gaA4()
return!(w.b>v.a||w.a<v.b||w.c<v.d||w.d>v.c)},
$S(){return this.a.$ti.i("B(ro<1>)")}}
A.bG_.prototype={
$1(d){var w=this.a.buK(this.b.a[d])
return new A.li(w.a,w.b)},
$S:z+1}
A.bG0.prototype={
$0(){var w=B.c([],x.W)
return w},
$S:z+2}
A.b2f.prototype={
$1(d){return B.a9(B.du("Widgets that mix ProjectionSimplificationManagement into their State must call super.build() but must ignore the return value of the superclass."))},
$S:1085}
A.bcB.prototype={
$0(){var w,v,u,t,s,r,q=this.a
if(q.a.length===0)return
for(w=this.b,v=x.n,u=0;u<1;++u){t=w[u]
s=B.J(q.a,v)
s=new B.Rh(s,!1)
t.r.push(s)
r=t.f
if(r!=null)s.fi(r)
s=t.e
if(s!=null)s.a.delete()
t.e=null}q.a=B.c([],x.g)},
$S:0}
A.bWQ.prototype={
$1(d){return d},
$S:z+3}
A.bXJ.prototype={
$2(d,e){var w,v=e.d
v===$&&B.b()
w=d.d
w===$&&B.b()
return C.m.bo(v,w)},
$S:z+4};(function aliases(){var w=A.Kk.prototype
w.aFQ=w.wP
w=A.zM.prototype
w.aGu=w.D})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.hR,[A.biZ,A.b1y,A.b0m])
u(B.cw,[A.bTa,A.bTl,A.bTm,A.bFt,A.bG_,A.b2f,A.bWQ])
t(A.Kk,B.yf)
t(A.a7E,A.Kk)
t(A.a3X,A.a7E)
u(B.dv,[A.bFu,A.bFv,A.bG0,A.bcB])
u(B.C,[A.F7,A.a7G,A.ae1,A.ae2,A.zM,A.bEL,A.bjc,A.akZ,A.aFJ,A.li,A.ahC,A.nC])
t(A.ahP,B.M)
t(A.F8,A.ahP)
t(A.a7D,B.Z)
t(A.a3W,A.a7D)
t(A.ro,A.a7G)
t(A.bcA,A.bEL)
t(A.aPx,A.aFJ)
t(A.bXJ,B.dw)
w(A.a7D,A.zM)
w(A.a7E,A.ae2)
v(A.a7G,A.ae1)})()
B.cZ(b.typeUniverse,JSON.parse('{"F8":{"M":[],"h":[]},"a3X":{"Kk":["1","ro<1>"],"aC":[]},"a3W":{"zM":["ro<1>","F7<1>","F8<1>"],"Z":["F8<1>"],"zM.0":"ro<1>"},"Kk":{"aC":[]},"ahP":{"M":[],"h":[]}}'))
B.Ql(b.typeUniverse,JSON.parse('{"a7D":1,"a7E":1,"a7G":1,"ae1":1,"ae2":2}'))
var y={a:"`MapCamera.of()` should not be called outside a `FlutterMap` and its descendants"}
var x=(function rtii(){var w=B.L
return{o:w("nC"),v:w("li"),L:w("y<li>"),W:w("y<w<li>>"),a:w("y<w<bW<b7>>>"),g:w("y<x>"),p:w("y<WJ>"),h:w("y<ed>"),t:w("y<W>"),U:w("w<li>"),w:w("i1"),n:w("x"),X:w("bW<W>"),H:w("bW<b7>"),i:w("W"),S:w("v"),O:w("C?")}})();(function constants(){E.a9S=new B.Ck(1,"src")
E.qc=new A.akZ()
E.a_E=new A.b0m(0,"none")
E.a3x=new A.b1y(0,"centroid")
E.fzP=new A.biZ(0,"triangles")})()};
(a=>{a["CwKFCLrLKi9EYBLUHlNNRsBIrOI="]=a.current})($__dart_deferred_initializers__);