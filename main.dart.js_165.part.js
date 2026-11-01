((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={bj7:function bj7(d,e){this.a=d
this.b=e},
cC_(d,e,f,g,h,i,j){var w=g.a,v=g.b,u=j.b,t=u.c,s=u.a.c.gaO()
if(i===0){u=t/2
if(w+u<0||w-u>e.a)return null
u=s/2
if(v+u<0||v-u>e.b)return null}if(d.a.a-d.b.a-f>t)return new A.bTK(!1,w,v,i,j,t,s)
return null},
cCn(d,e){var w
switch(d.a){case 0:w=A.cCk(e)
break
case 1:w=A.cCr(e)
break
default:w=null}return w},
cCk(d){var w=B.a7(d).i("a9<1,X>")
return new F.hM(A.cb1(new B.a9(d,new A.bTV(),w)),A.cb1(new B.a9(d,new A.bTW(),w)))},
cCr(d){var w,v,u=x.H,t=J.h3(4,u)
for(w=0;w<4;++w){v=d[w]
t[w]=new D.bW(v.b,v.a,u)}u=A.cI8(B.c([t],x.a),0.0001).a
return new F.hM(u.b,u.a)},
cv2(d,e,f,g,h){var w=A.cv4(g)
w=w
return new A.F6(g,f,e,d,w,h.i("F6<0>"))},
cv4(d){var w,v,u,t
for(w=0,v=0;v<4;){u=d[v];++v
t=d[v%4]
w+=(t.b-u.b)*(t.a+u.a)}return w>=0},
cv3(d,e,f){return new A.F7(e,0.3,d,f.i("F7<0>"))},
cAZ(d,e,f){return new A.ro(e,B.zg(4,new A.bGN(d,e),!1,x.v),new A.bGO(e,d).$0(),f.i("ro<0>"))},
bTK:function bTK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bTV:function bTV(){},
bTW:function bTW(){},
a45:function a45(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i
_.a80$=j
_.b=k
_.c=l
_.d=m
_.a=n
_.$ti=o},
bGh:function bGh(d,e,f){this.a=d
this.b=e
this.c=f},
bGi:function bGi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b1G:function b1G(d,e){this.a=d
this.b=e},
F6:function F6(d,e,f,g,h,i){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.ay=h
_.db=_.cy=_.cx=_.CW=_.ch=null
_.$ti=i},
F7:function F7(d,e,f,g){var _=this
_.e=d
_.c=e
_.a=f
_.$ti=g},
a44:function a44(d,e,f,g,h){var _=this
_.a7Y$=d
_.a7Z$=e
_.a8_$=f
_.auT$=g
_.c=_.a=null
_.$ti=h},
bGg:function bGg(d,e){this.a=d
this.b=e},
ro:function ro(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
bGN:function bGN(d,e){this.a=d
this.b=e},
bGO:function bGO(d,e){this.a=d
this.b=e},
a7O:function a7O(){},
a7P:function a7P(){},
a7R:function a7R(){},
aec:function aec(){},
Kp:function Kp(){},
aed:function aed(){},
zO:function zO(){},
b2n:function b2n(){},
ai1:function ai1(){},
bjm(d,e,f,g,h,i){var w
if(d<f)w=1
else w=d>h?2:0
if(e<g)w|=4
else if(e>i)w|=8
return w},
czu(d,e,f,g){var w,v,u,t=-g/2,s=g/2,r=f.a+s,q=f.b+s,p=d.a,o=d.b,n=e.a,m=e.b,l=A.bjm(p,o,t,t,r,q),k=A.bjm(n,m,t,t,r,q)
for(;;){if((l|k)===0)return new A.bjl(new B.x(p,o),new B.x(n,m))
if((l&k)!==0)return null
w=l!==0?l:k
if((w&8)!==0){v=p+(n-p)*(q-o)/(m-o)
u=q}else if((w&4)!==0){v=p+(n-p)*(t-o)/(m-o)
u=t}else if((w&2)!==0){u=o+(m-o)*(r-p)/(n-p)
v=r}else{if((w&1)!==0)u=o+(m-o)*(t-p)/(n-p)
else return null
v=t}if(w===l){l=A.bjm(v,u,t,t,r,q)
o=u
p=v}else{k=A.bjm(v,u,t,t,r,q)
m=u
n=v}}},
bcI:function bcI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.Q=_.z=_.y=_.x=_.w=_.r=$},
bcJ:function bcJ(d,e){this.a=d
this.b=e},
bFy:function bFy(){},
bjl:function bjl(d,e){this.a=d
this.b=e},
alc:function alc(){},
b0s:function b0s(d,e){this.a=d
this.b=e},
c1r(d,e){return new A.aPP(d,e)},
aFY:function aFY(){},
aPP:function aPP(d,e){this.a=d
this.b=e},
c5m(d,e,f){var w=d.a.bqU(f,256*Math.pow(2,d.e))
return new B.x(w.a-e.a,w.b-e.b)},
bXp(d,e,f,g){var w,v,u,t=256*Math.pow(2,d.e),s=e==null||J.ew(e)?g:J.cnP(g,J.c7x(e,new A.bXq(),x.v)),r=-f.a,q=-f.b,p=J.av(s),o=p.gu(s),n=B.bm(o,C.L,!0,x.n)
for(w=0;w<o;++w){v=p.dK(s,w)
u=G.mf.Bp(v.a,v.b,t)
n[w]=new B.x(u.a+r,u.b+q)}return n},
bXq:function bXq(){},
cH4(d,e,f,g,h,i){var w,v=h-f,u=i-g
if(v!==0||u!==0){w=((d-f)*v+(e-g)*u)/(v*v+u*u)
if(w>1){v=d-h
u=e-i
return v*v+u*u}else if(w>0){v=d-(f+v*w)
u=e-(g+u*w)
return v*v+u*u}}v=d-f
u=e-g
return v*v+u*u},
c4S(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=J.av(d),n=o.h(d,e),m=o.h(d,f),l=B.cp()
for(w=e+1,v=n.a,u=n.b,t=m.a,s=m.b,r=g;w<f;++w){q=o.h(d,w)
p=A.cH4(q.a,q.b,v,u,t,s)
if(p>r){l.b=w
r=p}}if(r>g){if(l.b1()-e>1)A.c4S(d,e,l.b1(),g,h)
h.push(o.h(d,l.b1()))
if(f-l.b1()>1)A.c4S(d,l.b1(),f,g,h)}},
cjh(d,e,f){var w,v,u=J.av(e)
if(u.gu(e)<=4)return e
w=u.gu(e)-1
v=B.c([u.h(e,0)],x.L)
A.c4S(e,0,w,f*f,v)
v.push(u.h(e,w))
return v},
cH0(d,e,f,g){var w,v,u,t,s,r
if(f<=0)return 0
w=256*Math.pow(2,g)
v=G.mf.aaW(0,0,w)
u=f*e
t=G.mf.aaW(u,u,w)
s=t.a-v.a
r=t.b-v.b
return Math.sqrt(s*s+r*r)},
lk:function lk(d,e){this.a=d
this.b=e},
c0I(d,e,f){var w=A.a8C(d,f),v=new A.nF(d,e,w)
v.d=w+e*1.4142135623730951
return v},
a8C(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
ahP:function ahP(d,e){this.a=d
this.b=e},
nF:function nF(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
cI8(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=0,v=0,u=0,t=0,s=0;r=a5[0],s<r.length;++s){q=r[s]
r=s!==0
if(!r||q.a<w)w=q.a
if(!r||q.b<v)v=q.b
if(!r||q.a>u)u=q.a
if(!r||q.b>t)t=q.b}p=u-w
o=t-v
n=Math.min(p,o)
m=n/2
if(n===0)return new A.ahP(new D.bW(w,v,x.H),0)
l=B.cak(new A.bYn(),x.o)
for(r=x.H,k=m*1.4142135623730951,j=w;j<u;j+=n)for(i=j+m,h=v;h<t;h+=n){g=new D.bW(i,h+m,r)
f=A.a8C(g,a5)
g=new A.nF(g,m,f)
g.d=f+k;++l.d
l.J5(g)}e=A.cDg(a5)
d=A.c0I(new D.bW(w+p/2,v+o/2,r),0,a5)
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
a3=A.a8C(a2,a5)
a2=new A.nF(a2,m,a3)
a4=m*1.4142135623730951
a2.d=a3+a4;++l.d
l.J5(a2)
i+=m
f=new D.bW(i,f,r)
a2=A.a8C(f,a5)
f=new A.nF(f,m,a2)
f.d=a2+a4;++l.d
l.J5(f)
k+=m
g=new D.bW(g,k,r)
f=A.a8C(g,a5)
g=new A.nF(g,m,f)
g.d=f+a4;++l.d
l.J5(g)
k=new D.bW(i,k,r)
i=A.a8C(k,a5)
k=new A.nF(k,m,i)
k.d=i+a4;++l.d
l.J5(k)
a0+=4}return new A.ahP(e.a,e.c)},
cDg(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d[0]
for(w=i.length,v=w-1,u=0,t=0,s=0,r=0;r<w;q=r+1,v=r,r=q){p=i[r]
o=i[v]
n=p.a
m=o.b
l=o.a
k=p.b
j=n*m-l*k
t+=(n+l)*j
s+=(k+m)*j
u+=j*3}if(u===0)return A.c0I(i[0],0,d)
return A.c0I(new D.bW(t/u,s/u,x.H),0,d)},
bYn:function bYn(){},
cb1(d){var w,v,u,t,s
for(w=d.$ti,v=new B.bZ(d,d.gu(0),w.i("bZ<ak.E>")),w=w.i("ak.E"),u=0,t=0;v.q();){s=v.d
if(s==null)s=w.a(s);++t
u+=(s-u)/t}if(t===0)throw B.i(B.ar("No elements"))
return u},
ctg(d){var w,v,u,t,s,r,q,p
for(w=180,v=-180,u=90,t=-90,s=0;s<4;++s){r=d[s]
q=r.b
if(q<w)w=q
if(q>v)v=q
p=r.a
if(p<u)u=p
if(p>t)t=p}return new D.Vv(t,u,v,w)},
ciN(d,e){var w,v,u,t,s,r,q,p,o,n=e.length,m=d.a,l=d.b
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
A=a.updateHolder(c[41],A)
E=c[164]
D=c[30]
G=c[139]
F=c[29]
A.bj7.prototype={
H(){return"VertexMode."+this.b}}
A.a45.prototype={
bmG(d,e,f){var w,v,u,t=d.a.gmk(),s=e.b,r=!1
if(s>=t.d)if(s<=t.c){s=e.a
t=s>=t.b&&s<=t.a}else t=r
else t=r
if(!t)return!1
t=this.a80$
t===$&&B.b()
w=A.bXp(this.b,null,t,d.b)
if(!C.i.ga9(w).k(0,C.i.gaI(w)))w.push(C.i.ga9(w))
v=A.ciN(f,w)
u=J.fn(d.c)&&new A.bGh(this,d,f).$0()
if(!(v&&!u))t=!v&&u
else t=!0
return t},
aX(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4={},a5=B.c([],x.g),a6=$.ao().r,a7=x.h,a8=B.c([],a7),a9=new B.c8(a6,C.aB,a3,a3,a8),b0=new B.c8(a6,C.aB,a3,a3,B.c([],a7))
a4.a=a4.b=null
w=new A.bGi(a4,a2,a5,b1,a9,b0)
a7=a2.b
v=D.b1w(a7.B4(a7.d).a4(0,D.n8(a7.gG(),2)))
for(a6=a2.f,u=a2.r,t=x.n,s=a7.f,r=s*0.017453292519943295,q=a7.r,p=u==null,o=0;o<=a6.length-1;++o){n=a6[o]
m=n.b
if(J.ew(m))continue
l=n.a
k=p?a3:u[o]
j=k!=null
i=A.bXp(a7,j?n.c:a3,v,m)
h=l.gaz2()
g=(l.c.A()>>>24&255)/255
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
if(f!=null)j.fj(f)
j=a9.e
if(j!=null)j.a.delete()
a9.e=null}j=l.d
if(j>0)a2.aMw(b0,l,A.bXp(a7,a3,v,m),b2,b1,a2.ait(l),j)
m=l.gazv()!=null
if(m){m=a7.w
if(m==null)m=a7.w=D.cbt(s,q)
j=l.ch
j=A.c5m(a7,v,j==null?l.ch=A.cCn(E.a3H,l.a):j)
f=a2.aVj(v,l)
a0=l.gazv()
a0.toString
a1=A.cC_(f,m,20,j,!1,r,a0)
if(a1!=null){w.$0()
a1.$1(b1)}}}w.$0()},
ait(d){var w
$.ao()
w=B.bi()
w.r=d.e.gp()
w.c=d.d
w.d=C.lW
w.e=C.t8
w.b=C.cj
return w},
aMw(d,e,f,g,h,i,j){var w,v
if(E.qg.k(0,E.qg)){w=B.c([],x.t)
v=new A.bcI(f,!0,w,g,E.a_P,j)
v.aM3(g,!0,f,E.a_P,w,j)
v.bgY(B.c([d],x.p))}},
aVj(d,e){var w=e.gmk(),v=this.b,u=A.c5m(v,d,new F.hM(w.b,w.d))
return new B.auH(A.c5m(v,d,new F.hM(w.a,w.c)),u)},
f7(d){var w,v,u=this,t=!0
if(u.f===d.f){w=u.r
v=d.r
if(w==null?v==null:w===v)if(u.b.k(0,d.b)){t=u.w.k(0,d.w)
t=!t}}return t}}
A.b1G.prototype={
H(){return"PolygonLabelPlacement."+this.b}}
A.F6.prototype={
gmk(){var w=this.CW
return w==null?this.CW=A.ctg(this.a):w},
gazv(){return null},
k(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof A.F6&&v.c.k(0,e.c)&&v.d===e.d&&v.e.k(0,e.e)&&E.qg.k(0,E.qg)&&C.m1.k(0,C.m1)&&B.dS(null,null)&&B.dS(v.a,e.a)
else w=!0
return w},
gaz2(){var w=this,v=w.cy
return v==null?w.cy=B.aa(w.c,w.d,w.e,!1,E.qg,null,C.lW,C.t8,w.ay,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b):v},
gt(d){var w=this,v=w.db
if(v==null){v=B.J(w.a,x.O)
v.push(null)
v.push(C.m1)
v.push(E.a3H)
v.push(!1)
v.push(w.gaz2())
v=w.db=B.aE(v)}return v}}
A.F7.prototype={
Y(){var w=this.$ti
return new A.a44($,null,B.C(x.S,w.i("z<ro<1>>")),null,w.i("a44<1>"))}}
A.a44.prototype={
aEt(d,e){var w,v=A.cjh(!0,d.b,e),u=d.c,t=J.av(u),s=t.gu(u),r=J.iH(s,x.U)
for(w=0;w<s;++w)r[w]=A.cjh(!0,t.h(u,w),e)
return new A.ro(d.a,v,r,this.$ti.i("ro<1>"))},
C(d){var w,v,u,t=this,s=null
t.aGz(d)
w=D.vO(d,G.mT)
v=w==null?s:w.a
if(v==null)v=B.a8(B.ar(y.a))
t.a.toString
w=t.a7Y$
w===$&&B.b()
w=J.dT(w,new A.bGg(t,v))
u=B.J(w,w.$ti.i("z.E"))
t.a.toString
w=t.$ti
return new D.L8(B.hs(s,s,s,new A.a45(u,s,v.gaA9(),!0,!1,!1,$,v,s,B.c([],w.i("y<1>")),s,w.i("a45<1>")),new B.S(v.gG().a,v.gG().b)),s)}}
A.ro.prototype={}
A.a7O.prototype={
aZ(d){this.bg(d)
this.a7Z$=null
this.a8_$.a0(0)}}
A.a7P.prototype={
wR(d){var w=this.b
this.a80$=D.b1w(w.B4(w.d)).a4(0,D.b1w(w.gG()).c1(0,2))
return this.aFV(d)}}
A.a7R.prototype={}
A.aec.prototype={}
A.Kp.prototype={
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
m=q.ayi(s.f!==0?s.azn(o,n):n,p)
for(w=i.f,l=w.length-1,k=!1;l>=0;--l){j=w[l]
if(k)j.toString
if(k)continue
k=i.bmG(j,m,t)
if(k)j.toString}if(!k)return!1
return!0}}
A.aed.prototype={}
A.zO.prototype={
C(d){var w,v,u,t,s,r,q,p=this,o=D.vO(d,G.mT),n=o==null?null:o.a
if(n==null)n=B.a8(B.ar(y.a))
o=p.a
o.toString
w=o.e
v=p.a7Z$
if(v==null){o=p.$ti
u=J.iH(1,o.i("zO.0"))
for(o=o.c,t=0;t<1;++t)u[t]=A.cAZ(G.ad1,w[t],o)
p.a7Z$=u
v=u}if(p.a.c===0)p.a7Y$=v
else{s=B.az(d,C.e2,x.w).w.b
if(s!==p.auT$){p.auT$=s
p.a8_$.a0(0)}o=p.a8_$
r=C.m.ek(n.e)
q=o.h(0,r)
if(q==null){q=p.aoD(n,s,p.a.c,v)
o.l(0,r,q)
o=q}else o=q
p.a7Y$=o}return new B.eb(new A.b2n(),null)},
aoD(d,e,f,g){return new B.i8(this.bcp(d,e,f,g),this.$ti.i("i8<zO.0>"))},
bcp(d,e,f,g){var w=this
return function(){var v=d,u=e,t=f,s=g
var r=0,q=1,p=[],o,n,m
return function $async$aoD(h,i,j){if(i===1){p.push(j)
r=q}for(;;)switch(r){case 0:m=A.cH0(v.a,u,t,C.m.ek(v.e))
o=s.length,n=0
case 2:if(!(n<o)){r=4
break}r=5
return h.b=w.aEt(s[n],m),1
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return h.c=p.at(-1),3}}}}}
A.ai1.prototype={}
A.bcI.prototype={
bgY(d){var w,v,u,t,s,r,q,p,o,n,m={},l=this.a,k=J.av(l)
if(k.gu(l)<2)return
m.a=B.c([],x.g)
w=new A.bcJ(m,d)
v=this.d
u=this.f
t=null
s=null
r=0
for(;;){q=k.gu(l)
if(!(r<q-1+1))break
A:{p=r+1
o=A.czu(k.h(l,r),k.h(l,C.f.aC(p,k.gu(l))),v,u)
if(o==null)break A
q=o.a
if(t!==q.a||s!==q.b){w.$0()
m.a.push(q)}q=m.a
n=o.b
q.push(n)
t=n.a
s=n.b}r=p}w.$0()},
aBl(){return 1}}
A.bFy.prototype={
aM3(d,e,f,g,h,i){var w,v=this,u=v.aW1()
v.w!==$&&B.b8()
v.w=u
u=v.c
w=v.aWg(u)
v.z!==$&&B.b8()
v.z=w
v.y=u.length-1
v.x=0
v.bsw()
u=v.aBl()
v.r!==$&&B.b8()
v.r=u},
bsw(){var w,v=this,u=v.c,t=u.length
if(t===0)return
w=v.y
w===$&&B.b()
t=C.f.aC(w+1,t)
v.y=t
v.x=u[t]},
aW1(){var w,v,u,t,s,r,q=this.a,p=J.av(q)
if(p.gu(q)<2)return 0
for(w=0,v=1;v<p.gu(q);++v){u=p.h(q,v-1)
t=p.h(q,v)
s=u.a-t.a
r=u.b-t.b
w+=Math.sqrt(s*s+r*r)}q=J.c03(p.gaI(q),p.ga9(q)).gdW()
return w+q},
aWg(d){var w,v,u
for(w=d.length,v=0,u=0;u<w;++u)v=C.m.a_(v,d[u])
return v}}
A.bjl.prototype={
j(d){return"VisibleSegment("+this.a.j(0)+", "+this.b.j(0)+")"}}
A.alc.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=e instanceof A.alc
else w=!0
return w},
gt(d){return B.aa(null,null,null,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
A.b0s.prototype={
H(){return"PatternFit."+this.b}}
A.aFY.prototype={}
A.aPP.prototype={
bnL(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this.b,a1=x.X,a2=new D.bW(a0.a,a0.b,a1),a3=new D.bW(a0.c,a0.d,a1)
a0=this.a
w=a0.a
v=a0.d
u=a0.b
a0=a0.c
t=a4.r.a4(0,a2.a_(0,a3))
s=Math.max(0,t.a)
r=Math.max(0,t.b)
q=a4.e
p=D.uI(a4.mJ(new F.hM(u,a0),q),a4.mJ(new F.hM(w,v),q),x.i)
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
h=C.m.au(a1/0.6931471805599453,i,Math.min(s,1/0))
g=D.n8(a3.a4(0,a2),2)
f=a4.mJ(new F.hM(u,v),h)
e=a4.mJ(new F.hM(w,a0),h)
if(n){a0=p*0.017453292519943295
a1=-a0
d=D.LM(D.n8(D.LM(f,a1).a_(0,D.LM(e,a1)),2).a_(0,g),a0)}else d=D.n8(f.a_(0,e),2).a_(0,g)
return a4.aAd(a4.Bv(d,h),h)}}
A.lk.prototype={
a4(d,e){return new A.lk(this.a-e.a,this.b-e.b)},
j(d){return"DoublePoint("+B.r(this.a)+", "+B.r(this.b)+")"}}
A.ahP.prototype={
j(d){return B.Q(this).j(0)+"("+this.a.j(0)+", distance: "+B.r(this.b)+")"}}
A.nF.prototype={}
var z=a.updateTypes(["X(hM)","lk(v)","w<w<lk>>()","w<lk>(w<lk>)","v(nF,nF)"])
A.bTK.prototype={
$1(d){var w=this
w.e.aX(d,new B.x(w.b-w.f/2,w.c-w.r/2))},
$S:1101}
A.bTV.prototype={
$1(d){return d.a},
$S:z+0}
A.bTW.prototype={
$1(d){return d.b},
$S:z+0}
A.bGh.prototype={
$0(){var w,v,u,t,s,r,q
for(w=J.aP(this.b.c),v=this.c,u=this.a,t=u.b;w.q();){s=w.gI()
r=u.a80$
r===$&&B.b()
q=A.bXp(t,null,r,s)
s=C.i.ga9(q)
r=C.i.gaI(q)
if(!(r.a===s.a&&r.b===s.b))q.push(C.i.ga9(q))
if(A.ciN(v,q))return!0}return!1},
$S:8}
A.bGi.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this,n=o.a,m=n.b
if(m==null)return
w=m.c
$.ao()
v=B.bi()
v.b=C.ci
v.r=w.gp()
u=o.c
t=u.length
if(t!==0){s=new Float32Array(t*2)
for(r=0;r<t;++r){q=r*2
p=u[r]
s[q]=p.a
s[q+1]=p.b}$.ao()
o.d.bmA(B.cpj(E.fA8,s,null,null,null),E.aa4,v)}else o.d.hK(o.e,v)
if(m.d>0)o.d.hK(o.f,o.b.ait(m))
C.i.a0(o.c)
o.e.jN()
o.f.jN()
n.a=n.b=null},
$S:0}
A.bGg.prototype={
$1(d){var w=d.a.gmk(),v=this.b.gaA9()
return!(w.b>v.a||w.a<v.b||w.c<v.d||w.d>v.c)},
$S(){return this.a.$ti.i("B(ro<1>)")}}
A.bGN.prototype={
$1(d){var w=this.a.bv4(this.b.a[d])
return new A.lk(w.a,w.b)},
$S:z+1}
A.bGO.prototype={
$0(){var w=B.c([],x.W)
return w},
$S:z+2}
A.b2n.prototype={
$1(d){return B.a8(B.dv("Widgets that mix ProjectionSimplificationManagement into their State must call super.build() but must ignore the return value of the superclass."))},
$S:1102}
A.bcJ.prototype={
$0(){var w,v,u,t,s,r,q=this.a
if(q.a.length===0)return
for(w=this.b,v=x.n,u=0;u<1;++u){t=w[u]
s=B.J(q.a,v)
s=new B.Rl(s,!1)
t.r.push(s)
r=t.f
if(r!=null)s.fj(r)
s=t.e
if(s!=null)s.a.delete()
t.e=null}q.a=B.c([],x.g)},
$S:0}
A.bXq.prototype={
$1(d){return d},
$S:z+3}
A.bYn.prototype={
$2(d,e){var w,v=e.d
v===$&&B.b()
w=d.d
w===$&&B.b()
return C.m.bn(v,w)},
$S:z+4};(function aliases(){var w=A.Kp.prototype
w.aFV=w.wR
w=A.zO.prototype
w.aGz=w.C})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.hy,[A.bj7,A.b1G,A.b0s])
u(B.cC,[A.bTK,A.bTV,A.bTW,A.bGg,A.bGN,A.b2n,A.bXq])
t(A.Kp,B.yg)
t(A.a7P,A.Kp)
t(A.a45,A.a7P)
u(B.dz,[A.bGh,A.bGi,A.bGO,A.bcJ])
u(B.D,[A.F6,A.a7R,A.aec,A.aed,A.zO,A.bFy,A.bjl,A.alc,A.aFY,A.lk,A.ahP,A.nF])
t(A.ai1,B.N)
t(A.F7,A.ai1)
t(A.a7O,B.Y)
t(A.a44,A.a7O)
t(A.ro,A.a7R)
t(A.bcI,A.bFy)
t(A.aPP,A.aFY)
t(A.bYn,B.dI)
w(A.a7O,A.zO)
w(A.a7P,A.aed)
v(A.a7R,A.aec)})()
B.d1(b.typeUniverse,JSON.parse('{"F7":{"N":[],"h":[]},"a45":{"Kp":["1","ro<1>"],"aD":[]},"a44":{"zO":["ro<1>","F6<1>","F7<1>"],"Y":["F7<1>"],"zO.0":"ro<1>"},"Kp":{"aD":[]},"ai1":{"N":[],"h":[]}}'))
B.Qq(b.typeUniverse,JSON.parse('{"a7O":1,"a7P":1,"a7R":1,"aec":1,"aed":2}'))
var y={a:"`MapCamera.of()` should not be called outside a `FlutterMap` and its descendants"}
var x=(function rtii(){var w=B.O
return{o:w("nF"),v:w("lk"),L:w("y<lk>"),W:w("y<w<lk>>"),a:w("y<w<bW<b7>>>"),g:w("y<x>"),p:w("y<WN>"),h:w("y<e7>"),t:w("y<X>"),U:w("w<lk>"),w:w("i_"),n:w("x"),X:w("bW<X>"),H:w("bW<b7>"),i:w("X"),S:w("v"),O:w("D?")}})();(function constants(){E.aa4=new B.Ci(1,"src")
E.qg=new A.alc()
E.a_P=new A.b0s(0,"none")
E.a3H=new A.b1G(0,"centroid")
E.fA8=new A.bj7(0,"triangles")})()};
(a=>{a["zz2DYdXvjt/UVRpi4MQSrdOcmW4="]=a.current})($__dart_deferred_initializers__);