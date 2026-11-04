((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={bjT:function bjT(d,e){this.a=d
this.b=e},
cEx(d,e,f,g,h,i,j){var w=g.a,v=g.b,u=j.b,t=u.c,s=u.a.c.gaO()
if(i===0){u=t/2
if(w+u<0||w-u>e.a)return null
u=s/2
if(v+u<0||v-u>e.b)return null}if(d.a.a-d.b.a-f>t)return new A.bVP(!1,w,v,i,j,t,s)
return null},
cEW(d,e){var w
switch(d.a){case 0:w=A.cET(e)
break
case 1:w=A.cF_(e)
break
default:w=null}return w},
cET(d){var w=B.a6(d).i("a9<1,X>")
return new F.hQ(A.cdm(new B.a9(d,new A.bW0(),w)),A.cdm(new B.a9(d,new A.bW1(),w)))},
cF_(d){var w,v,u=x.H,t=J.h5(4,u)
for(w=0;w<4;++w){v=d[w]
t[w]=new D.bY(v.b,v.a,u)}u=A.cKO(B.c([t],x.a),0.0001).a
return new F.hQ(u.b,u.a)},
cxz(d,e,f,g,h){var w=A.cxB(g)
w=w
return new A.Fo(g,f,e,d,w,h.i("Fo<0>"))},
cxB(d){var w,v,u,t
for(w=0,v=0;v<4;){u=d[v];++v
t=d[v%4]
w+=(t.b-u.b)*(t.a+u.a)}return w>=0},
cxA(d,e,f){return new A.Fp(e,0.3,d,f.i("Fp<0>"))},
cDw(d,e,f){return new A.ry(e,B.zv(4,new A.bHL(d,e),!1,x.v),new A.bHM(e,d).$0(),f.i("ry<0>"))},
bVP:function bVP(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bW0:function bW0(){},
bW1:function bW1(){},
a4o:function a4o(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i
_.a8o$=j
_.b=k
_.c=l
_.d=m
_.a=n
_.$ti=o},
bHf:function bHf(d,e,f){this.a=d
this.b=e
this.c=f},
bHg:function bHg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b2c:function b2c(d,e){this.a=d
this.b=e},
Fo:function Fo(d,e,f,g,h,i){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.ay=h
_.db=_.cy=_.cx=_.CW=_.ch=null
_.$ti=i},
Fp:function Fp(d,e,f,g){var _=this
_.e=d
_.c=e
_.a=f
_.$ti=g},
a4n:function a4n(d,e,f,g,h){var _=this
_.a8l$=d
_.a8m$=e
_.a8n$=f
_.avl$=g
_.c=_.a=null
_.$ti=h},
bHe:function bHe(d,e){this.a=d
this.b=e},
ry:function ry(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
bHL:function bHL(d,e){this.a=d
this.b=e},
bHM:function bHM(d,e){this.a=d
this.b=e},
a89:function a89(){},
a8a:function a8a(){},
a8c:function a8c(){},
aey:function aey(){},
KE:function KE(){},
aez:function aez(){},
A3:function A3(){},
b2U:function b2U(){},
ain:function ain(){},
bk7(d,e,f,g,h,i){var w
if(d<f)w=1
else w=d>h?2:0
if(e<g)w|=4
else if(e>i)w|=8
return w},
cC1(d,e,f,g){var w,v,u,t=-g/2,s=g/2,r=f.a+s,q=f.b+s,p=d.a,o=d.b,n=e.a,m=e.b,l=A.bk7(p,o,t,t,r,q),k=A.bk7(n,m,t,t,r,q)
for(;;){if((l|k)===0)return new A.bk6(new B.y(p,o),new B.y(n,m))
if((l&k)!==0)return null
w=l!==0?l:k
if((w&8)!==0){v=p+(n-p)*(q-o)/(m-o)
u=q}else if((w&4)!==0){v=p+(n-p)*(t-o)/(m-o)
u=t}else if((w&2)!==0){u=o+(m-o)*(r-p)/(n-p)
v=r}else{if((w&1)!==0)u=o+(m-o)*(t-p)/(n-p)
else return null
v=t}if(w===l){l=A.bk7(v,u,t,t,r,q)
o=u
p=v}else{k=A.bk7(v,u,t,t,r,q)
m=u
n=v}}},
bde:function bde(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.Q=_.z=_.y=_.x=_.w=_.r=$},
bdf:function bdf(d,e){this.a=d
this.b=e},
bGw:function bGw(){},
bk6:function bk6(d,e){this.a=d
this.b=e},
aly:function aly(){},
b0Y:function b0Y(d,e){this.a=d
this.b=e},
c3P(d,e){return new A.aQj(d,e)},
aGs:function aGs(){},
aQj:function aQj(d,e){this.a=d
this.b=e},
c7H(d,e,f){var w=d.a.brI(f,256*Math.pow(2,d.e))
return new B.y(w.a-e.a,w.b-e.b)},
bZG(d,e,f,g){var w,v,u,t=256*Math.pow(2,d.e),s=e==null||J.eo(e)?g:J.cqg(g,J.c9R(e,new A.bZH(),x.v)),r=-f.a,q=-f.b,p=J.av(s),o=p.gu(s),n=B.bm(o,C.L,!0,x.n)
for(w=0;w<o;++w){v=p.dK(s,w)
u=G.mi.Bx(v.a,v.b,t)
n[w]=new B.y(u.a+r,u.b+q)}return n},
bZH:function bZH(){},
cJJ(d,e,f,g,h,i){var w,v=h-f,u=i-g
if(v!==0||u!==0){w=((d-f)*v+(e-g)*u)/(v*v+u*u)
if(w>1){v=d-h
u=e-i
return v*v+u*u}else if(w>0){v=d-(f+v*w)
u=e-(g+u*w)
return v*v+u*u}}v=d-f
u=e-g
return v*v+u*u},
c7d(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=J.av(d),n=o.h(d,e),m=o.h(d,f),l=B.cq()
for(w=e+1,v=n.a,u=n.b,t=m.a,s=m.b,r=g;w<f;++w){q=o.h(d,w)
p=A.cJJ(q.a,q.b,v,u,t,s)
if(p>r){l.b=w
r=p}}if(r>g){if(l.b2()-e>1)A.c7d(d,e,l.b2(),g,h)
h.push(o.h(d,l.b2()))
if(f-l.b2()>1)A.c7d(d,l.b2(),f,g,h)}},
clH(d,e,f){var w,v,u=J.av(e)
if(u.gu(e)<=4)return e
w=u.gu(e)-1
v=B.c([u.h(e,0)],x.L)
A.c7d(e,0,w,f*f,v)
v.push(u.h(e,w))
return v},
cJF(d,e,f,g){var w,v,u,t,s,r
if(f<=0)return 0
w=256*Math.pow(2,g)
v=G.mi.abi(0,0,w)
u=f*e
t=G.mi.abi(u,u,w)
s=t.a-v.a
r=t.b-v.b
return Math.sqrt(s*s+r*r)},
lo:function lo(d,e){this.a=d
this.b=e},
c35(d,e,f){var w=A.a8Y(d,f),v=new A.nI(d,e,w)
v.d=w+e*1.4142135623730951
return v},
a8Y(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
aia:function aia(d,e){this.a=d
this.b=e},
nI:function nI(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
cKO(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=0,v=0,u=0,t=0,s=0;r=a5[0],s<r.length;++s){q=r[s]
r=s!==0
if(!r||q.a<w)w=q.a
if(!r||q.b<v)v=q.b
if(!r||q.a>u)u=q.a
if(!r||q.b>t)t=q.b}p=u-w
o=t-v
n=Math.min(p,o)
m=n/2
if(n===0)return new A.aia(new D.bY(w,v,x.H),0)
l=B.ccF(new A.c_F(),x.o)
for(r=x.H,k=m*1.4142135623730951,j=w;j<u;j+=n)for(i=j+m,h=v;h<t;h+=n){g=new D.bY(i,h+m,r)
f=A.a8Y(g,a5)
g=new A.nI(g,m,f)
g.d=f+k;++l.d
l.Jd(g)}e=A.cFP(a5)
d=A.c35(new D.bY(w+p/2,v+o/2,r),0,a5)
if(d.c>e.c)e=d
a0=l.c
while(l.c!==0){a1=l.qw()
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
a2=new D.bY(g,f,r)
a3=A.a8Y(a2,a5)
a2=new A.nI(a2,m,a3)
a4=m*1.4142135623730951
a2.d=a3+a4;++l.d
l.Jd(a2)
i+=m
f=new D.bY(i,f,r)
a2=A.a8Y(f,a5)
f=new A.nI(f,m,a2)
f.d=a2+a4;++l.d
l.Jd(f)
k+=m
g=new D.bY(g,k,r)
f=A.a8Y(g,a5)
g=new A.nI(g,m,f)
g.d=f+a4;++l.d
l.Jd(g)
k=new D.bY(i,k,r)
i=A.a8Y(k,a5)
k=new A.nI(k,m,i)
k.d=i+a4;++l.d
l.Jd(k)
a0+=4}return new A.aia(e.a,e.c)},
cFP(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d[0]
for(w=i.length,v=w-1,u=0,t=0,s=0,r=0;r<w;q=r+1,v=r,r=q){p=i[r]
o=i[v]
n=p.a
m=o.b
l=o.a
k=p.b
j=n*m-l*k
t+=(n+l)*j
s+=(k+m)*j
u+=j*3}if(u===0)return A.c35(i[0],0,d)
return A.c35(new D.bY(t/u,s/u,x.H),0,d)},
c_F:function c_F(){},
cdm(d){var w,v,u,t,s
for(w=d.$ti,v=new B.c_(d,d.gu(0),w.i("c_<aj.E>")),w=w.i("aj.E"),u=0,t=0;v.q();){s=v.d
if(s==null)s=w.a(s);++t
u+=(s-u)/t}if(t===0)throw B.n(B.at("No elements"))
return u},
cvM(d){var w,v,u,t,s,r,q,p
for(w=180,v=-180,u=90,t=-90,s=0;s<4;++s){r=d[s]
q=r.b
if(q<w)w=q
if(q>v)v=q
p=r.a
if(p<u)u=p
if(p>t)t=p}return new D.VM(t,u,v,w)},
clc(d,e){var w,v,u,t,s,r,q,p,o,n=e.length,m=d.a,l=d.b
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
E=c[170]
D=c[31]
G=c[146]
F=c[30]
A.bjT.prototype={
H(){return"VertexMode."+this.b}}
A.a4o.prototype={
bnu(d,e,f){var w,v,u,t=d.a.gml(),s=e.b,r=!1
if(s>=t.d)if(s<=t.c){s=e.a
t=s>=t.b&&s<=t.a}else t=r
else t=r
if(!t)return!1
t=this.a8o$
t===$&&B.b()
w=A.bZG(this.b,null,t,d.b)
if(!C.i.ga9(w).k(0,C.i.gaJ(w)))w.push(C.i.ga9(w))
v=A.clc(f,w)
u=J.fg(d.c)&&new A.bHf(this,d,f).$0()
if(!(v&&!u))t=!v&&u
else t=!0
return t},
aX(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4={},a5=B.c([],x.g),a6=$.ap().r,a7=x.h,a8=B.c([],a7),a9=new B.c8(a6,C.aC,a3,a3,a8),b0=new B.c8(a6,C.aC,a3,a3,B.c([],a7))
a4.a=a4.b=null
w=new A.bHg(a4,a2,a5,b1,a9,b0)
a7=a2.b
v=D.b22(a7.Bc(a7.d).a4(0,D.nb(a7.gG(),2)))
for(a6=a2.f,u=a2.r,t=x.n,s=a7.f,r=s*0.017453292519943295,q=a7.r,p=u==null,o=0;o<=a6.length-1;++o){n=a6[o]
m=n.b
if(J.eo(m))continue
l=n.a
k=p?a3:u[o]
j=k!=null
i=A.bZG(a7,j?n.c:a3,v,m)
h=l.gazu()
g=(l.c.A()>>>24&255)/255
if(a4.a===h)f=g>0&&g<1
else f=!0
if(f)w.$0()
a4.b=l
a4.a=h
if(j){e=k.length
for(d=0;d<e;++d)a5.push(i[k[d]])}else{j=B.J(i,t)
j=new B.RA(j,!0)
a8.push(j)
f=a9.f
if(f!=null)j.fj(f)
j=a9.e
if(j!=null)j.a.delete()
a9.e=null}j=l.d
if(j>0)a2.aN1(b0,l,A.bZG(a7,a3,v,m),b2,b1,a2.aiV(l),j)
m=l.gazX()!=null
if(m){m=a7.w
if(m==null)m=a7.w=D.cdO(s,q)
j=l.ch
j=A.c7H(a7,v,j==null?l.ch=A.cEW(E.a3X,l.a):j)
f=a2.aVT(v,l)
a0=l.gazX()
a0.toString
a1=A.cEx(f,m,20,j,!1,r,a0)
if(a1!=null){w.$0()
a1.$1(b1)}}}w.$0()},
aiV(d){var w
$.ap()
w=B.bj()
w.r=d.e.gp()
w.c=d.d
w.d=C.lZ
w.e=C.th
w.b=C.ck
return w},
aN1(d,e,f,g,h,i,j){var w,v
if(E.ql.k(0,E.ql)){w=B.c([],x.t)
v=new A.bde(f,!0,w,g,E.a04,j)
v.aMy(g,!0,f,E.a04,w,j)
v.bhK(B.c([d],x.p))}},
aVT(d,e){var w=e.gml(),v=this.b,u=A.c7H(v,d,new F.hQ(w.b,w.d))
return new B.av3(A.c7H(v,d,new F.hQ(w.a,w.c)),u)},
f7(d){var w,v,u=this,t=!0
if(u.f===d.f){w=u.r
v=d.r
if(w==null?v==null:w===v)if(u.b.k(0,d.b)){t=u.w.k(0,d.w)
t=!t}}return t}}
A.b2c.prototype={
H(){return"PolygonLabelPlacement."+this.b}}
A.Fo.prototype={
gml(){var w=this.CW
return w==null?this.CW=A.cvM(this.a):w},
gazX(){return null},
k(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof A.Fo&&v.c.k(0,e.c)&&v.d===e.d&&v.e.k(0,e.e)&&E.ql.k(0,E.ql)&&C.m4.k(0,C.m4)&&B.dV(null,null)&&B.dV(v.a,e.a)
else w=!0
return w},
gazu(){var w=this,v=w.cy
return v==null?w.cy=B.ac(w.c,w.d,w.e,!1,E.ql,null,C.lZ,C.th,w.ay,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b):v},
gt(d){var w=this,v=w.db
if(v==null){v=B.J(w.a,x.O)
v.push(null)
v.push(C.m4)
v.push(E.a3X)
v.push(!1)
v.push(w.gazu())
v=w.db=B.aE(v)}return v}}
A.Fp.prototype={
Y(){var w=this.$ti
return new A.a4n($,null,B.C(x.S,w.i("z<ry<1>>")),null,w.i("a4n<1>"))}}
A.a4n.prototype={
aEY(d,e){var w,v=A.clH(!0,d.b,e),u=d.c,t=J.av(u),s=t.gu(u),r=J.iL(s,x.U)
for(w=0;w<s;++w)r[w]=A.clH(!0,t.h(u,w),e)
return new A.ry(d.a,v,r,this.$ti.i("ry<1>"))},
C(d){var w,v,u,t=this,s=null
t.aH3(d)
w=D.w_(d,G.mU)
v=w==null?s:w.a
if(v==null)v=B.ab(B.at(y.a))
t.a.toString
w=t.a8l$
w===$&&B.b()
w=J.dC(w,new A.bHe(t,v))
u=B.J(w,w.$ti.i("z.E"))
t.a.toString
w=t.$ti
return new D.Ln(B.hx(s,s,s,new A.a4o(u,s,v.gaAB(),!0,!1,!1,$,v,s,B.c([],w.i("x<1>")),s,w.i("a4o<1>")),new B.S(v.gG().a,v.gG().b)),s)}}
A.ry.prototype={}
A.a89.prototype={
b_(d){this.bg(d)
this.a8m$=null
this.a8n$.a_(0)}}
A.a8a.prototype={
wW(d){var w=this.b
this.a8o$=D.b22(w.Bc(w.d)).a4(0,D.b22(w.gG()).c2(0,2))
return this.aGp(d)}}
A.a8c.prototype={}
A.aey.prototype={}
A.KE.prototype={
wW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
C.i.a_(i.d)
w=d.a
v=d.b
u=x.X
t=new D.bY(w,v,u)
s=i.b
r=s.r
q=s.a
p=s.e
o=q.Md(s.d,p)
n=o.a4(0,new D.bY(r.a/2-w,r.b/2-v,u))
m=q.ayK(s.f!==0?s.azP(o,n):n,p)
for(w=i.f,l=w.length-1,k=!1;l>=0;--l){j=w[l]
if(k)j.toString
if(k)continue
k=i.bnu(j,m,t)
if(k)j.toString}if(!k)return!1
return!0}}
A.aez.prototype={}
A.A3.prototype={
C(d){var w,v,u,t,s,r,q,p=this,o=D.w_(d,G.mU),n=o==null?null:o.a
if(n==null)n=B.ab(B.at(y.a))
o=p.a
o.toString
w=o.e
v=p.a8m$
if(v==null){o=p.$ti
u=J.iL(1,o.i("A3.0"))
for(o=o.c,t=0;t<1;++t)u[t]=A.cDw(G.adg,w[t],o)
p.a8m$=u
v=u}if(p.a.c===0)p.a8l$=v
else{s=B.aA(d,C.e2,x.w).w.b
if(s!==p.avl$){p.avl$=s
p.a8n$.a_(0)}o=p.a8n$
r=C.m.ek(n.e)
q=o.h(0,r)
if(q==null){q=p.ap4(n,s,p.a.c,v)
o.l(0,r,q)
o=q}else o=q
p.a8l$=o}return new B.ef(new A.b2U(),null)},
ap4(d,e,f,g){return new B.id(this.bd8(d,e,f,g),this.$ti.i("id<A3.0>"))},
bd8(d,e,f,g){var w=this
return function(){var v=d,u=e,t=f,s=g
var r=0,q=1,p=[],o,n,m
return function $async$ap4(h,i,j){if(i===1){p.push(j)
r=q}for(;;)switch(r){case 0:m=A.cJF(v.a,u,t,C.m.ek(v.e))
o=s.length,n=0
case 2:if(!(n<o)){r=4
break}r=5
return h.b=w.aEY(s[n],m),1
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return h.c=p.at(-1),3}}}}}
A.ain.prototype={}
A.bde.prototype={
bhK(d){var w,v,u,t,s,r,q,p,o,n,m={},l=this.a,k=J.av(l)
if(k.gu(l)<2)return
m.a=B.c([],x.g)
w=new A.bdf(m,d)
v=this.d
u=this.f
t=null
s=null
r=0
for(;;){q=k.gu(l)
if(!(r<q-1+1))break
A:{p=r+1
o=A.cC1(k.h(l,r),k.h(l,C.f.aC(p,k.gu(l))),v,u)
if(o==null)break A
q=o.a
if(t!==q.a||s!==q.b){w.$0()
m.a.push(q)}q=m.a
n=o.b
q.push(n)
t=n.a
s=n.b}r=p}w.$0()},
aBP(){return 1}}
A.bGw.prototype={
aMy(d,e,f,g,h,i){var w,v=this,u=v.aWB()
v.w!==$&&B.b9()
v.w=u
u=v.c
w=v.aWQ(u)
v.z!==$&&B.b9()
v.z=w
v.y=u.length-1
v.x=0
v.btl()
u=v.aBP()
v.r!==$&&B.b9()
v.r=u},
btl(){var w,v=this,u=v.c,t=u.length
if(t===0)return
w=v.y
w===$&&B.b()
t=C.f.aC(w+1,t)
v.y=t
v.x=u[t]},
aWB(){var w,v,u,t,s,r,q=this.a,p=J.av(q)
if(p.gu(q)<2)return 0
for(w=0,v=1;v<p.gu(q);++v){u=p.h(q,v-1)
t=p.h(q,v)
s=u.a-t.a
r=u.b-t.b
w+=Math.sqrt(s*s+r*r)}q=J.c2r(p.gaJ(q),p.ga9(q)).gdW()
return w+q},
aWQ(d){var w,v,u
for(w=d.length,v=0,u=0;u<w;++u)v=C.m.a0(v,d[u])
return v}}
A.bk6.prototype={
j(d){return"VisibleSegment("+this.a.j(0)+", "+this.b.j(0)+")"}}
A.aly.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=e instanceof A.aly
else w=!0
return w},
gt(d){return B.ac(null,null,null,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
A.b0Y.prototype={
H(){return"PatternFit."+this.b}}
A.aGs.prototype={}
A.aQj.prototype={
boz(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this.b,a1=x.X,a2=new D.bY(a0.a,a0.b,a1),a3=new D.bY(a0.c,a0.d,a1)
a0=this.a
w=a0.a
v=a0.d
u=a0.b
a0=a0.c
t=a4.r.a4(0,a2.a0(0,a3))
s=Math.max(0,t.a)
r=Math.max(0,t.b)
q=a4.e
p=D.uW(a4.mK(new F.hQ(u,a0),q),a4.mK(new F.hQ(w,v),q),x.i)
o=p.b.a4(0,p.a)
p=a4.f
n=p!==0
if(n){m=p*0.017453292519943295
l=Math.abs(Math.cos(m))
k=Math.abs(Math.sin(m))
m=o.a
j=o.b
o=new D.bY(m*l+j*k,j*l+m*k,a1)}a1=Math.log(Math.min(s/o.a,r/o.b)*(256*Math.pow(2,q))/256)
s=a4.b
if(s==null)s=0
i=Math.max(s,0)
s=a4.c
if(s==null)s=1/0
h=C.m.au(a1/0.6931471805599453,i,Math.min(s,1/0))
g=D.nb(a3.a4(0,a2),2)
f=a4.mK(new F.hQ(u,v),h)
e=a4.mK(new F.hQ(w,a0),h)
if(n){a0=p*0.017453292519943295
a1=-a0
d=D.LZ(D.nb(D.LZ(f,a1).a0(0,D.LZ(e,a1)),2).a0(0,g),a0)}else d=D.nb(f.a0(0,e),2).a0(0,g)
return a4.aAF(a4.BD(d,h),h)}}
A.lo.prototype={
a4(d,e){return new A.lo(this.a-e.a,this.b-e.b)},
j(d){return"DoublePoint("+B.r(this.a)+", "+B.r(this.b)+")"}}
A.aia.prototype={
j(d){return B.R(this).j(0)+"("+this.a.j(0)+", distance: "+B.r(this.b)+")"}}
A.nI.prototype={}
var z=a.updateTypes(["X(hQ)","lo(v)","w<w<lo>>()","w<lo>(w<lo>)","v(nI,nI)"])
A.bVP.prototype={
$1(d){var w=this
w.e.aX(d,new B.y(w.b-w.f/2,w.c-w.r/2))},
$S:1109}
A.bW0.prototype={
$1(d){return d.a},
$S:z+0}
A.bW1.prototype={
$1(d){return d.b},
$S:z+0}
A.bHf.prototype={
$0(){var w,v,u,t,s,r,q
for(w=J.aO(this.b.c),v=this.c,u=this.a,t=u.b;w.q();){s=w.gI()
r=u.a8o$
r===$&&B.b()
q=A.bZG(t,null,r,s)
s=C.i.ga9(q)
r=C.i.gaJ(q)
if(!(r.a===s.a&&r.b===s.b))q.push(C.i.ga9(q))
if(A.clc(v,q))return!0}return!1},
$S:8}
A.bHg.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this,n=o.a,m=n.b
if(m==null)return
w=m.c
$.ap()
v=B.bj()
v.b=C.cj
v.r=w.gp()
u=o.c
t=u.length
if(t!==0){s=new Float32Array(t*2)
for(r=0;r<t;++r){q=r*2
p=u[r]
s[q]=p.a
s[q+1]=p.b}$.ap()
o.d.bno(B.crP(E.fB1,s,null,null,null),E.aan,v)}else o.d.hK(o.e,v)
if(m.d>0)o.d.hK(o.f,o.b.aiV(m))
C.i.a_(o.c)
o.e.jM()
o.f.jM()
n.a=n.b=null},
$S:0}
A.bHe.prototype={
$1(d){var w=d.a.gml(),v=this.b.gaAB()
return!(w.b>v.a||w.a<v.b||w.c<v.d||w.d>v.c)},
$S(){return this.a.$ti.i("B(ry<1>)")}}
A.bHL.prototype={
$1(d){var w=this.a.bvV(this.b.a[d])
return new A.lo(w.a,w.b)},
$S:z+1}
A.bHM.prototype={
$0(){var w=B.c([],x.W)
return w},
$S:z+2}
A.b2U.prototype={
$1(d){return B.ab(B.dx("Widgets that mix ProjectionSimplificationManagement into their State must call super.build() but must ignore the return value of the superclass."))},
$S:1110}
A.bdf.prototype={
$0(){var w,v,u,t,s,r,q=this.a
if(q.a.length===0)return
for(w=this.b,v=x.n,u=0;u<1;++u){t=w[u]
s=B.J(q.a,v)
s=new B.RA(s,!1)
t.r.push(s)
r=t.f
if(r!=null)s.fj(r)
s=t.e
if(s!=null)s.a.delete()
t.e=null}q.a=B.c([],x.g)},
$S:0}
A.bZH.prototype={
$1(d){return d},
$S:z+3}
A.c_F.prototype={
$2(d,e){var w,v=e.d
v===$&&B.b()
w=d.d
w===$&&B.b()
return C.m.bn(v,w)},
$S:z+4};(function aliases(){var w=A.KE.prototype
w.aGp=w.wW
w=A.A3.prototype
w.aH3=w.C})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.hp,[A.bjT,A.b2c,A.b0Y])
u(B.cA,[A.bVP,A.bW0,A.bW1,A.bHe,A.bHL,A.b2U,A.bZH])
t(A.KE,B.yu)
t(A.a8a,A.KE)
t(A.a4o,A.a8a)
u(B.dz,[A.bHf,A.bHg,A.bHM,A.bdf])
u(B.D,[A.Fo,A.a8c,A.aey,A.aez,A.A3,A.bGw,A.bk6,A.aly,A.aGs,A.lo,A.aia,A.nI])
t(A.ain,B.N)
t(A.Fp,A.ain)
t(A.a89,B.Y)
t(A.a4n,A.a89)
t(A.ry,A.a8c)
t(A.bde,A.bGw)
t(A.aQj,A.aGs)
t(A.c_F,B.dI)
w(A.a89,A.A3)
w(A.a8a,A.aez)
v(A.a8c,A.aey)})()
B.cX(b.typeUniverse,JSON.parse('{"Fp":{"N":[],"h":[]},"a4o":{"KE":["1","ry<1>"],"aD":[]},"a4n":{"A3":["ry<1>","Fo<1>","Fp<1>"],"Y":["Fp<1>"],"A3.0":"ry<1>"},"KE":{"aD":[]},"ain":{"N":[],"h":[]}}'))
B.QG(b.typeUniverse,JSON.parse('{"a89":1,"a8a":1,"a8c":1,"aey":1,"aez":2}'))
var y={a:"`MapCamera.of()` should not be called outside a `FlutterMap` and its descendants"}
var x=(function rtii(){var w=B.O
return{o:w("nI"),v:w("lo"),L:w("x<lo>"),W:w("x<w<lo>>"),a:w("x<w<bY<b8>>>"),g:w("x<y>"),p:w("x<X3>"),h:w("x<e9>"),t:w("x<X>"),U:w("w<lo>"),w:w("i2"),n:w("y"),X:w("bY<X>"),H:w("bY<b8>"),i:w("X"),S:w("v"),O:w("D?")}})();(function constants(){E.aan=new B.Cy(1,"src")
E.ql=new A.aly()
E.a04=new A.b0Y(0,"none")
E.a3X=new A.b2c(0,"centroid")
E.fB1=new A.bjT(0,"triangles")})()};
(a=>{a["4pctojrRiOpTPD6zBA3ZvFs1Ofk="]=a.current})($__dart_deferred_initializers__);