((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={biL:function biL(d,e){this.a=d
this.b=e},
cAU(d,e,f,g,h,i,j){var w=g.a,v=g.b,u=j.b,t=u.c,s=u.a.c.gaO()
if(i===0){u=t/2
if(w+u<0||w-u>e.a)return null
u=s/2
if(v+u<0||v-u>e.b)return null}if(d.a.a-d.b.a-f>t)return new A.bSM(!1,w,v,i,j,t,s)
return null},
cBh(d,e){var w
switch(d.a){case 0:w=A.cBe(e)
break
case 1:w=A.cBl(e)
break
default:w=null}return w},
cBe(d){var w=B.a3(d).i("a7<1,W>")
return new F.hI(A.c9Y(new B.a7(d,new A.bSX(),w)),A.c9Y(new B.a7(d,new A.bSY(),w)))},
cBl(d){var w,v,u=x.H,t=J.h2(4,u)
for(w=0;w<4;++w){v=d[w]
t[w]=new D.bV(v.b,v.a,u)}u=A.cH_(B.c([t],x.a),0.0001).a
return new F.hI(u.b,u.a)},
ctX(d,e,f,g,h){var w=A.ctZ(g)
w=w
return new A.F2(g,f,e,d,w,h.i("F2<0>"))},
ctZ(d){var w,v,u,t
for(w=0,v=0;v<4;){u=d[v];++v
t=d[v%4]
w+=(t.b-u.b)*(t.a+u.a)}return w>=0},
ctY(d,e,f){return new A.F3(e,0.3,d,f.i("F3<0>"))},
czT(d,e,f){return new A.rl(e,B.zb(4,new A.bFU(d,e),!1,x.v),new A.bFV(e,d).$0(),f.i("rl<0>"))},
bSM:function bSM(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bSX:function bSX(){},
bSY:function bSY(){},
a3U:function a3U(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i
_.a7Q$=j
_.b=k
_.c=l
_.d=m
_.a=n
_.$ti=o},
bFo:function bFo(d,e,f){this.a=d
this.b=e
this.c=f},
bFp:function bFp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b1k:function b1k(d,e){this.a=d
this.b=e},
F2:function F2(d,e,f,g,h,i){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.ay=h
_.db=_.cy=_.cx=_.CW=_.ch=null
_.$ti=i},
F3:function F3(d,e,f,g){var _=this
_.e=d
_.c=e
_.a=f
_.$ti=g},
a3T:function a3T(d,e,f,g,h){var _=this
_.a7N$=d
_.a7O$=e
_.a7P$=f
_.auB$=g
_.c=_.a=null
_.$ti=h},
bFn:function bFn(d,e){this.a=d
this.b=e},
rl:function rl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
bFU:function bFU(d,e){this.a=d
this.b=e},
bFV:function bFV(d,e){this.a=d
this.b=e},
a7A:function a7A(){},
a7B:function a7B(){},
a7D:function a7D(){},
adY:function adY(){},
Kh:function Kh(){},
adZ:function adZ(){},
zK:function zK(){},
b21:function b21(){},
ahL:function ahL(){},
bj_(d,e,f,g,h,i){var w
if(d<f)w=1
else w=d>h?2:0
if(e<g)w|=4
else if(e>i)w|=8
return w},
cyo(d,e,f,g){var w,v,u,t=-g/2,s=g/2,r=f.a+s,q=f.b+s,p=d.a,o=d.b,n=e.a,m=e.b,l=A.bj_(p,o,t,t,r,q),k=A.bj_(n,m,t,t,r,q)
for(;;){if((l|k)===0)return new A.biZ(new B.x(p,o),new B.x(n,m))
if((l&k)!==0)return null
w=l!==0?l:k
if((w&8)!==0){v=p+(n-p)*(q-o)/(m-o)
u=q}else if((w&4)!==0){v=p+(n-p)*(t-o)/(m-o)
u=t}else if((w&2)!==0){u=o+(m-o)*(r-p)/(n-p)
v=r}else{if((w&1)!==0)u=o+(m-o)*(t-p)/(n-p)
else return null
v=t}if(w===l){l=A.bj_(v,u,t,t,r,q)
o=u
p=v}else{k=A.bj_(v,u,t,t,r,q)
m=u
n=v}}},
bcm:function bcm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.Q=_.z=_.y=_.x=_.w=_.r=$},
bcn:function bcn(d,e){this.a=d
this.b=e},
bEF:function bEF(){},
biZ:function biZ(d,e){this.a=d
this.b=e},
akV:function akV(){},
b08:function b08(d,e){this.a=d
this.b=e},
c0n(d,e){return new A.aPu(d,e)},
aFF:function aFF(){},
aPu:function aPu(d,e){this.a=d
this.b=e},
c4h(d,e,f){var w=d.a.bql(f,256*Math.pow(2,d.e))
return new B.x(w.a-e.a,w.b-e.b)},
bWq(d,e,f,g){var w,v,u,t=256*Math.pow(2,d.e),s=e==null||J.eL(e)?g:J.cmL(g,J.c6s(e,new A.bWr(),x.v)),r=-f.a,q=-f.b,p=J.av(s),o=p.gu(s),n=B.bl(o,C.L,!0,x.n)
for(w=0;w<o;++w){v=p.dH(s,w)
u=G.me.Bl(v.a,v.b,t)
n[w]=new B.x(u.a+r,u.b+q)}return n},
bWr:function bWr(){},
cFX(d,e,f,g,h,i){var w,v=h-f,u=i-g
if(v!==0||u!==0){w=((d-f)*v+(e-g)*u)/(v*v+u*u)
if(w>1){v=d-h
u=e-i
return v*v+u*u}else if(w>0){v=d-(f+v*w)
u=e-(g+u*w)
return v*v+u*u}}v=d-f
u=e-g
return v*v+u*u},
c3N(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=J.av(d),n=o.h(d,e),m=o.h(d,f),l=B.cp()
for(w=e+1,v=n.a,u=n.b,t=m.a,s=m.b,r=g;w<f;++w){q=o.h(d,w)
p=A.cFX(q.a,q.b,v,u,t,s)
if(p>r){l.b=w
r=p}}if(r>g){if(l.b0()-e>1)A.c3N(d,e,l.b0(),g,h)
h.push(o.h(d,l.b0()))
if(f-l.b0()>1)A.c3N(d,l.b0(),f,g,h)}},
cid(d,e,f){var w,v,u=J.av(e)
if(u.gu(e)<=4)return e
w=u.gu(e)-1
v=B.c([u.h(e,0)],x.L)
A.c3N(e,0,w,f*f,v)
v.push(u.h(e,w))
return v},
cFT(d,e,f,g){var w,v,u,t,s,r
if(f<=0)return 0
w=256*Math.pow(2,g)
v=G.me.aaL(0,0,w)
u=f*e
t=G.me.aaL(u,u,w)
s=t.a-v.a
r=t.b-v.b
return Math.sqrt(s*s+r*r)},
li:function li(d,e){this.a=d
this.b=e},
c_E(d,e,f){var w=A.a8o(d,f),v=new A.nC(d,e,w)
v.d=w+e*1.4142135623730951
return v},
a8o(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
ahy:function ahy(d,e){this.a=d
this.b=e},
nC:function nC(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
cH_(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=0,v=0,u=0,t=0,s=0;r=a5[0],s<r.length;++s){q=r[s]
r=s!==0
if(!r||q.a<w)w=q.a
if(!r||q.b<v)v=q.b
if(!r||q.a>u)u=q.a
if(!r||q.b>t)t=q.b}p=u-w
o=t-v
n=Math.min(p,o)
m=n/2
if(n===0)return new A.ahy(new D.bV(w,v,x.H),0)
l=B.c9g(new A.bXj(),x.o)
for(r=x.H,k=m*1.4142135623730951,j=w;j<u;j+=n)for(i=j+m,h=v;h<t;h+=n){g=new D.bV(i,h+m,r)
f=A.a8o(g,a5)
g=new A.nC(g,m,f)
g.d=f+k;++l.d
l.IX(g)}e=A.cCa(a5)
d=A.c_E(new D.bV(w+p/2,v+o/2,r),0,a5)
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
a2=new D.bV(g,f,r)
a3=A.a8o(a2,a5)
a2=new A.nC(a2,m,a3)
a4=m*1.4142135623730951
a2.d=a3+a4;++l.d
l.IX(a2)
i+=m
f=new D.bV(i,f,r)
a2=A.a8o(f,a5)
f=new A.nC(f,m,a2)
f.d=a2+a4;++l.d
l.IX(f)
k+=m
g=new D.bV(g,k,r)
f=A.a8o(g,a5)
g=new A.nC(g,m,f)
g.d=f+a4;++l.d
l.IX(g)
k=new D.bV(i,k,r)
i=A.a8o(k,a5)
k=new A.nC(k,m,i)
k.d=i+a4;++l.d
l.IX(k)
a0+=4}return new A.ahy(e.a,e.c)},
cCa(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d[0]
for(w=i.length,v=w-1,u=0,t=0,s=0,r=0;r<w;q=r+1,v=r,r=q){p=i[r]
o=i[v]
n=p.a
m=o.b
l=o.a
k=p.b
j=n*m-l*k
t+=(n+l)*j
s+=(k+m)*j
u+=j*3}if(u===0)return A.c_E(i[0],0,d)
return A.c_E(new D.bV(t/u,s/u,x.H),0,d)},
bXj:function bXj(){},
c9Y(d){var w,v,u,t,s
for(w=d.$ti,v=new B.c_(d,d.gu(0),w.i("c_<al.E>")),w=w.i("al.E"),u=0,t=0;v.q();){s=v.d
if(s==null)s=w.a(s);++t
u+=(s-u)/t}if(t===0)throw B.i(B.ar("No elements"))
return u},
csb(d){var w,v,u,t,s,r,q,p
for(w=180,v=-180,u=90,t=-90,s=0;s<4;++s){r=d[s]
q=r.b
if(q<w)w=q
if(q>v)v=q
p=r.a
if(p<u)u=p
if(p>t)t=p}return new D.Vk(t,u,v,w)},
chI(d,e){var w,v,u,t,s,r,q,p,o,n=e.length,m=d.a,l=d.b
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
G=c[140]
F=c[29]
A.biL.prototype={
H(){return"VertexMode."+this.b}}
A.a3U.prototype={
bm6(d,e,f){var w,v,u,t=d.a.gmj(),s=e.b,r=!1
if(s>=t.d)if(s<=t.c){s=e.a
t=s>=t.b&&s<=t.a}else t=r
else t=r
if(!t)return!1
t=this.a7Q$
t===$&&B.b()
w=A.bWq(this.b,null,t,d.b)
if(!C.i.ga9(w).k(0,C.i.gaH(w)))w.push(C.i.ga9(w))
v=A.chI(f,w)
u=J.fA(d.c)&&new A.bFo(this,d,f).$0()
if(!(v&&!u))t=!v&&u
else t=!0
return t},
aY(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4={},a5=B.c([],x.g),a6=$.ao().r,a7=x.h,a8=B.c([],a7),a9=new B.cb(a6,C.aD,a3,a3,a8),b0=new B.cb(a6,C.aD,a3,a3,B.c([],a7))
a4.a=a4.b=null
w=new A.bFp(a4,a2,a5,b1,a9,b0)
a7=a2.b
v=D.b1a(a7.B0(a7.d).a4(0,D.n5(a7.gG(),2)))
for(a6=a2.f,u=a2.r,t=x.n,s=a7.f,r=s*0.017453292519943295,q=a7.r,p=u==null,o=0;o<=a6.length-1;++o){n=a6[o]
m=n.b
if(J.eL(m))continue
l=n.a
k=p?a3:u[o]
j=k!=null
i=A.bWq(a7,j?n.c:a3,v,m)
h=l.gayK()
g=(l.c.v()>>>24&255)/255
if(a4.a===h)f=g>0&&g<1
else f=!0
if(f)w.$0()
a4.b=l
a4.a=h
if(j){e=k.length
for(d=0;d<e;++d)a5.push(i[k[d]])}else{j=B.J(i,t)
j=new B.R9(j,!0)
a8.push(j)
f=a9.f
if(f!=null)j.fi(f)
j=a9.e
if(j!=null)j.a.delete()
a9.e=null}j=l.d
if(j>0)a2.aMc(b0,l,A.bWq(a7,a3,v,m),b2,b1,a2.aig(l),j)
m=l.gazc()!=null
if(m){m=a7.w
if(m==null)m=a7.w=D.cap(s,q)
j=l.ch
j=A.c4h(a7,v,j==null?l.ch=A.cBh(E.a3u,l.a):j)
f=a2.aUV(v,l)
a0=l.gazc()
a0.toString
a1=A.cAU(f,m,20,j,!1,r,a0)
if(a1!=null){w.$0()
a1.$1(b1)}}}w.$0()},
aig(d){var w
$.ao()
w=B.bi()
w.r=d.e.gp()
w.c=d.d
w.d=C.lV
w.e=C.t7
w.b=C.ci
return w},
aMc(d,e,f,g,h,i,j){var w,v
if(E.qb.k(0,E.qb)){w=B.c([],x.t)
v=new A.bcm(f,!0,w,g,E.a_B,j)
v.aLK(g,!0,f,E.a_B,w,j)
v.bgn(B.c([d],x.p))}},
aUV(d,e){var w=e.gmj(),v=this.b,u=A.c4h(v,d,new F.hI(w.b,w.d))
return new B.auo(A.c4h(v,d,new F.hI(w.a,w.c)),u)},
f6(d){var w,v,u=this,t=!0
if(u.f===d.f){w=u.r
v=d.r
if(w==null?v==null:w===v)if(u.b.k(0,d.b)){t=u.w.k(0,d.w)
t=!t}}return t}}
A.b1k.prototype={
H(){return"PolygonLabelPlacement."+this.b}}
A.F2.prototype={
gmj(){var w=this.CW
return w==null?this.CW=A.csb(this.a):w},
gazc(){return null},
k(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof A.F2&&v.c.k(0,e.c)&&v.d===e.d&&v.e.k(0,e.e)&&E.qb.k(0,E.qb)&&C.m0.k(0,C.m0)&&B.dO(null,null)&&B.dO(v.a,e.a)
else w=!0
return w},
gayK(){var w=this,v=w.cy
return v==null?w.cy=B.aa(w.c,w.d,w.e,!1,E.qb,null,C.lV,C.t7,w.ay,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b):v},
gt(d){var w=this,v=w.db
if(v==null){v=B.J(w.a,x.O)
v.push(null)
v.push(C.m0)
v.push(E.a3u)
v.push(!1)
v.push(w.gayK())
v=w.db=B.aC(v)}return v}}
A.F3.prototype={
Y(){var w=this.$ti
return new A.a3T($,null,B.D(x.S,w.i("z<rl<1>>")),null,w.i("a3T<1>"))}}
A.a3T.prototype={
aE9(d,e){var w,v=A.cid(!0,d.b,e),u=d.c,t=J.av(u),s=t.gu(u),r=J.iH(s,x.U)
for(w=0;w<s;++w)r[w]=A.cid(!0,t.h(u,w),e)
return new A.rl(d.a,v,r,this.$ti.i("rl<1>"))},
D(d){var w,v,u,t=this,s=null
t.aGf(d)
w=D.vM(d,G.mS)
v=w==null?s:w.a
if(v==null)v=B.a9(B.ar(y.a))
t.a.toString
w=t.a7N$
w===$&&B.b()
w=J.eM(w,new A.bFn(t,v))
u=B.J(w,w.$ti.i("z.E"))
t.a.toString
w=t.$ti
return new D.KZ(B.hr(s,s,s,new A.a3U(u,s,v.gazS(),!0,!1,!1,$,v,s,B.c([],w.i("y<1>")),s,w.i("a3U<1>")),new B.S(v.gG().a,v.gG().b)),s)}}
A.rl.prototype={}
A.a7A.prototype={
aZ(d){this.bg(d)
this.a7O$=null
this.a7P$.a0(0)}}
A.a7B.prototype={
wO(d){var w=this.b
this.a7Q$=D.b1a(w.B0(w.d)).a4(0,D.b1a(w.gG()).c0(0,2))
return this.aFB(d)}}
A.a7D.prototype={}
A.adY.prototype={}
A.Kh.prototype={
wO(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
C.i.a0(i.d)
w=d.a
v=d.b
u=x.X
t=new D.bV(w,v,u)
s=i.b
r=s.r
q=s.a
p=s.e
o=q.M_(s.d,p)
n=o.a4(0,new D.bV(r.a/2-w,r.b/2-v,u))
m=q.ay_(s.f!==0?s.az4(o,n):n,p)
for(w=i.f,l=w.length-1,k=!1;l>=0;--l){j=w[l]
if(k)j.toString
if(k)continue
k=i.bm6(j,m,t)
if(k)j.toString}if(!k)return!1
return!0}}
A.adZ.prototype={}
A.zK.prototype={
D(d){var w,v,u,t,s,r,q,p=this,o=D.vM(d,G.mS),n=o==null?null:o.a
if(n==null)n=B.a9(B.ar(y.a))
o=p.a
o.toString
w=o.e
v=p.a7O$
if(v==null){o=p.$ti
u=J.iH(1,o.i("zK.0"))
for(o=o.c,t=0;t<1;++t)u[t]=A.czT(G.acN,w[t],o)
p.a7O$=u
v=u}if(p.a.c===0)p.a7N$=v
else{s=B.aA(d,C.e5,x.w).w.b
if(s!==p.auB$){p.auB$=s
p.a7P$.a0(0)}o=p.a7P$
r=C.m.ek(n.e)
q=o.h(0,r)
if(q==null){q=p.aoo(n,s,p.a.c,v)
o.l(0,r,q)
o=q}else o=q
p.a7N$=o}return new B.e6(new A.b21(),null)},
aoo(d,e,f,g){return new B.i8(this.bbQ(d,e,f,g),this.$ti.i("i8<zK.0>"))},
bbQ(d,e,f,g){var w=this
return function(){var v=d,u=e,t=f,s=g
var r=0,q=1,p=[],o,n,m
return function $async$aoo(h,i,j){if(i===1){p.push(j)
r=q}for(;;)switch(r){case 0:m=A.cFT(v.a,u,t,C.m.ek(v.e))
o=s.length,n=0
case 2:if(!(n<o)){r=4
break}r=5
return h.b=w.aE9(s[n],m),1
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return h.c=p.at(-1),3}}}}}
A.ahL.prototype={}
A.bcm.prototype={
bgn(d){var w,v,u,t,s,r,q,p,o,n,m={},l=this.a,k=J.av(l)
if(k.gu(l)<2)return
m.a=B.c([],x.g)
w=new A.bcn(m,d)
v=this.d
u=this.f
t=null
s=null
r=0
for(;;){q=k.gu(l)
if(!(r<q-1+1))break
A:{p=r+1
o=A.cyo(k.h(l,r),k.h(l,C.f.aD(p,k.gu(l))),v,u)
if(o==null)break A
q=o.a
if(t!==q.a||s!==q.b){w.$0()
m.a.push(q)}q=m.a
n=o.b
q.push(n)
t=n.a
s=n.b}r=p}w.$0()},
aB2(){return 1}}
A.bEF.prototype={
aLK(d,e,f,g,h,i){var w,v=this,u=v.aVD()
v.w!==$&&B.b8()
v.w=u
u=v.c
w=v.aVS(u)
v.z!==$&&B.b8()
v.z=w
v.y=u.length-1
v.x=0
v.brX()
u=v.aB2()
v.r!==$&&B.b8()
v.r=u},
brX(){var w,v=this,u=v.c,t=u.length
if(t===0)return
w=v.y
w===$&&B.b()
t=C.f.aD(w+1,t)
v.y=t
v.x=u[t]},
aVD(){var w,v,u,t,s,r,q=this.a,p=J.av(q)
if(p.gu(q)<2)return 0
for(w=0,v=1;v<p.gu(q);++v){u=p.h(q,v-1)
t=p.h(q,v)
s=u.a-t.a
r=u.b-t.b
w+=Math.sqrt(s*s+r*r)}q=J.c_0(p.gaH(q),p.ga9(q)).gdW()
return w+q},
aVS(d){var w,v,u
for(w=d.length,v=0,u=0;u<w;++u)v=C.m.a_(v,d[u])
return v}}
A.biZ.prototype={
j(d){return"VisibleSegment("+this.a.j(0)+", "+this.b.j(0)+")"}}
A.akV.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=e instanceof A.akV
else w=!0
return w},
gt(d){return B.aa(null,null,null,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
A.b08.prototype={
H(){return"PatternFit."+this.b}}
A.aFF.prototype={}
A.aPu.prototype={
bnb(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this.b,a1=x.X,a2=new D.bV(a0.a,a0.b,a1),a3=new D.bV(a0.c,a0.d,a1)
a0=this.a
w=a0.a
v=a0.d
u=a0.b
a0=a0.c
t=a4.r.a4(0,a2.a_(0,a3))
s=Math.max(0,t.a)
r=Math.max(0,t.b)
q=a4.e
p=D.uF(a4.mI(new F.hI(u,a0),q),a4.mI(new F.hI(w,v),q),x.i)
o=p.b.a4(0,p.a)
p=a4.f
n=p!==0
if(n){m=p*0.017453292519943295
l=Math.abs(Math.cos(m))
k=Math.abs(Math.sin(m))
m=o.a
j=o.b
o=new D.bV(m*l+j*k,j*l+m*k,a1)}a1=Math.log(Math.min(s/o.a,r/o.b)*(256*Math.pow(2,q))/256)
s=a4.b
if(s==null)s=0
i=Math.max(s,0)
s=a4.c
if(s==null)s=1/0
h=C.m.ar(a1/0.6931471805599453,i,Math.min(s,1/0))
g=D.n5(a3.a4(0,a2),2)
f=a4.mI(new F.hI(u,v),h)
e=a4.mI(new F.hI(w,a0),h)
if(n){a0=p*0.017453292519943295
a1=-a0
d=D.LB(D.n5(D.LB(f,a1).a_(0,D.LB(e,a1)),2).a_(0,g),a0)}else d=D.n5(f.a_(0,e),2).a_(0,g)
return a4.azW(a4.Br(d,h),h)}}
A.li.prototype={
a4(d,e){return new A.li(this.a-e.a,this.b-e.b)},
j(d){return"DoublePoint("+B.r(this.a)+", "+B.r(this.b)+")"}}
A.ahy.prototype={
j(d){return B.Q(this).j(0)+"("+this.a.j(0)+", distance: "+B.r(this.b)+")"}}
A.nC.prototype={}
var z=a.updateTypes(["W(hI)","li(v)","w<w<li>>()","w<li>(w<li>)","v(nC,nC)"])
A.bSM.prototype={
$1(d){var w=this
w.e.aY(d,new B.x(w.b-w.f/2,w.c-w.r/2))},
$S:1085}
A.bSX.prototype={
$1(d){return d.a},
$S:z+0}
A.bSY.prototype={
$1(d){return d.b},
$S:z+0}
A.bFo.prototype={
$0(){var w,v,u,t,s,r,q
for(w=J.aW(this.b.c),v=this.c,u=this.a,t=u.b;w.q();){s=w.gK()
r=u.a7Q$
r===$&&B.b()
q=A.bWq(t,null,r,s)
s=C.i.ga9(q)
r=C.i.gaH(q)
if(!(r.a===s.a&&r.b===s.b))q.push(C.i.ga9(q))
if(A.chI(v,q))return!0}return!1},
$S:9}
A.bFp.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this,n=o.a,m=n.b
if(m==null)return
w=m.c
$.ao()
v=B.bi()
v.b=C.cq
v.r=w.gp()
u=o.c
t=u.length
if(t!==0){s=new Float32Array(t*2)
for(r=0;r<t;++r){q=r*2
p=u[r]
s[q]=p.a
s[q+1]=p.b}$.ao()
o.d.bm0(B.cof(E.fzw,s,null,null,null),E.a9P,v)}else o.d.hJ(o.e,v)
if(m.d>0)o.d.hJ(o.f,o.b.aig(m))
C.i.a0(o.c)
o.e.jN()
o.f.jN()
n.a=n.b=null},
$S:0}
A.bFn.prototype={
$1(d){var w=d.a.gmj(),v=this.b.gazS()
return!(w.b>v.a||w.a<v.b||w.c<v.d||w.d>v.c)},
$S(){return this.a.$ti.i("B(rl<1>)")}}
A.bFU.prototype={
$1(d){var w=this.a.buv(this.b.a[d])
return new A.li(w.a,w.b)},
$S:z+1}
A.bFV.prototype={
$0(){var w=B.c([],x.W)
return w},
$S:z+2}
A.b21.prototype={
$1(d){return B.a9(B.dt("Widgets that mix ProjectionSimplificationManagement into their State must call super.build() but must ignore the return value of the superclass."))},
$S:1086}
A.bcn.prototype={
$0(){var w,v,u,t,s,r,q=this.a
if(q.a.length===0)return
for(w=this.b,v=x.n,u=0;u<1;++u){t=w[u]
s=B.J(q.a,v)
s=new B.R9(s,!1)
t.r.push(s)
r=t.f
if(r!=null)s.fi(r)
s=t.e
if(s!=null)s.a.delete()
t.e=null}q.a=B.c([],x.g)},
$S:0}
A.bWr.prototype={
$1(d){return d},
$S:z+3}
A.bXj.prototype={
$2(d,e){var w,v=e.d
v===$&&B.b()
w=d.d
w===$&&B.b()
return C.m.bo(v,w)},
$S:z+4};(function aliases(){var w=A.Kh.prototype
w.aFB=w.wO
w=A.zK.prototype
w.aGf=w.D})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.hP,[A.biL,A.b1k,A.b08])
u(B.cx,[A.bSM,A.bSX,A.bSY,A.bFn,A.bFU,A.b21,A.bWr])
t(A.Kh,B.yc)
t(A.a7B,A.Kh)
t(A.a3U,A.a7B)
u(B.dz,[A.bFo,A.bFp,A.bFV,A.bcn])
u(B.C,[A.F2,A.a7D,A.adY,A.adZ,A.zK,A.bEF,A.biZ,A.akV,A.aFF,A.li,A.ahy,A.nC])
t(A.ahL,B.M)
t(A.F3,A.ahL)
t(A.a7A,B.Z)
t(A.a3T,A.a7A)
t(A.rl,A.a7D)
t(A.bcm,A.bEF)
t(A.aPu,A.aFF)
t(A.bXj,B.dA)
w(A.a7A,A.zK)
w(A.a7B,A.adZ)
v(A.a7D,A.adY)})()
B.d1(b.typeUniverse,JSON.parse('{"F3":{"M":[],"h":[]},"a3U":{"Kh":["1","rl<1>"],"aB":[]},"a3T":{"zK":["rl<1>","F2<1>","F3<1>"],"Z":["F3<1>"],"zK.0":"rl<1>"},"Kh":{"aB":[]},"ahL":{"M":[],"h":[]}}'))
B.Qf(b.typeUniverse,JSON.parse('{"a7A":1,"a7B":1,"a7D":1,"adY":1,"adZ":2}'))
var y={a:"`MapCamera.of()` should not be called outside a `FlutterMap` and its descendants"}
var x=(function rtii(){var w=B.L
return{o:w("nC"),v:w("li"),L:w("y<li>"),W:w("y<w<li>>"),a:w("y<w<bV<b7>>>"),g:w("y<x>"),p:w("y<WB>"),h:w("y<ec>"),t:w("y<W>"),U:w("w<li>"),w:w("hZ"),n:w("x"),X:w("bV<W>"),H:w("bV<b7>"),i:w("W"),S:w("v"),O:w("C?")}})();(function constants(){E.a9P=new B.Cf(1,"src")
E.qb=new A.akV()
E.a_B=new A.b08(0,"none")
E.a3u=new A.b1k(0,"centroid")
E.fzw=new A.biL(0,"triangles")})()};
(a=>{a["FfOuNW9bmc02h4zl1ymsNOxyvY8="]=a.current})($__dart_deferred_initializers__);