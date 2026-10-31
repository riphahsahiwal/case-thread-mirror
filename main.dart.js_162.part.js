((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={biY:function biY(d,e){this.a=d
this.b=e},
cBt(d,e,f,g,h,i,j){var w=g.a,v=g.b,u=j.b,t=u.c,s=u.a.c.gaO()
if(i===0){u=t/2
if(w+u<0||w-u>e.a)return null
u=s/2
if(v+u<0||v-u>e.b)return null}if(d.a.a-d.b.a-f>t)return new A.bTc(!1,w,v,i,j,t,s)
return null},
cBR(d,e){var w
switch(d.a){case 0:w=A.cBO(e)
break
case 1:w=A.cBV(e)
break
default:w=null}return w},
cBO(d){var w=B.a7(d).i("a9<1,X>")
return new F.hJ(A.cav(new B.a9(d,new A.bTn(),w)),A.cav(new B.a9(d,new A.bTo(),w)))},
cBV(d){var w,v,u=x.H,t=J.h2(4,u)
for(w=0;w<4;++w){v=d[w]
t[w]=new D.bW(v.b,v.a,u)}u=A.cHA(B.c([t],x.a),0.0001).a
return new F.hJ(u.b,u.a)},
cuw(d,e,f,g,h){var w=A.cuy(g)
w=w
return new A.F4(g,f,e,d,w,h.i("F4<0>"))},
cuy(d){var w,v,u,t
for(w=0,v=0;v<4;){u=d[v];++v
t=d[v%4]
w+=(t.b-u.b)*(t.a+u.a)}return w>=0},
cux(d,e,f){return new A.F5(e,0.3,d,f.i("F5<0>"))},
cAs(d,e,f){return new A.rm(e,B.zf(4,new A.bGk(d,e),!1,x.v),new A.bGl(e,d).$0(),f.i("rm<0>"))},
bTc:function bTc(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bTn:function bTn(){},
bTo:function bTo(){},
a4_:function a4_(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i
_.a7Y$=j
_.b=k
_.c=l
_.d=m
_.a=n
_.$ti=o},
bFP:function bFP(d,e,f){this.a=d
this.b=e
this.c=f},
bFQ:function bFQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b1w:function b1w(d,e){this.a=d
this.b=e},
F4:function F4(d,e,f,g,h,i){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.ay=h
_.db=_.cy=_.cx=_.CW=_.ch=null
_.$ti=i},
F5:function F5(d,e,f,g){var _=this
_.e=d
_.c=e
_.a=f
_.$ti=g},
a3Z:function a3Z(d,e,f,g,h){var _=this
_.a7V$=d
_.a7W$=e
_.a7X$=f
_.auO$=g
_.c=_.a=null
_.$ti=h},
bFO:function bFO(d,e){this.a=d
this.b=e},
rm:function rm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
bGk:function bGk(d,e){this.a=d
this.b=e},
bGl:function bGl(d,e){this.a=d
this.b=e},
a7G:function a7G(){},
a7H:function a7H(){},
a7J:function a7J(){},
ae4:function ae4(){},
Kl:function Kl(){},
ae5:function ae5(){},
zN:function zN(){},
b2d:function b2d(){},
ahT:function ahT(){},
bjc(d,e,f,g,h,i){var w
if(d<f)w=1
else w=d>h?2:0
if(e<g)w|=4
else if(e>i)w|=8
return w},
cyY(d,e,f,g){var w,v,u,t=-g/2,s=g/2,r=f.a+s,q=f.b+s,p=d.a,o=d.b,n=e.a,m=e.b,l=A.bjc(p,o,t,t,r,q),k=A.bjc(n,m,t,t,r,q)
for(;;){if((l|k)===0)return new A.bjb(new B.x(p,o),new B.x(n,m))
if((l&k)!==0)return null
w=l!==0?l:k
if((w&8)!==0){v=p+(n-p)*(q-o)/(m-o)
u=q}else if((w&4)!==0){v=p+(n-p)*(t-o)/(m-o)
u=t}else if((w&2)!==0){u=o+(m-o)*(r-p)/(n-p)
v=r}else{if((w&1)!==0)u=o+(m-o)*(t-p)/(n-p)
else return null
v=t}if(w===l){l=A.bjc(v,u,t,t,r,q)
o=u
p=v}else{k=A.bjc(v,u,t,t,r,q)
m=u
n=v}}},
bcy:function bcy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.Q=_.z=_.y=_.x=_.w=_.r=$},
bcz:function bcz(d,e){this.a=d
this.b=e},
bF5:function bF5(){},
bjb:function bjb(d,e){this.a=d
this.b=e},
al3:function al3(){},
b0k:function b0k(d,e){this.a=d
this.b=e},
c0U(d,e){return new A.aPH(d,e)},
aFP:function aFP(){},
aPH:function aPH(d,e){this.a=d
this.b=e},
c4P(d,e,f){var w=d.a.bqM(f,256*Math.pow(2,d.e))
return new B.x(w.a-e.a,w.b-e.b)},
bWS(d,e,f,g){var w,v,u,t=256*Math.pow(2,d.e),s=e==null||J.es(e)?g:J.cni(g,J.c70(e,new A.bWT(),x.v)),r=-f.a,q=-f.b,p=J.av(s),o=p.gu(s),n=B.bm(o,C.L,!0,x.n)
for(w=0;w<o;++w){v=p.dI(s,w)
u=G.mf.Bo(v.a,v.b,t)
n[w]=new B.x(u.a+r,u.b+q)}return n},
bWT:function bWT(){},
cGw(d,e,f,g,h,i){var w,v=h-f,u=i-g
if(v!==0||u!==0){w=((d-f)*v+(e-g)*u)/(v*v+u*u)
if(w>1){v=d-h
u=e-i
return v*v+u*u}else if(w>0){v=d-(f+v*w)
u=e-(g+u*w)
return v*v+u*u}}v=d-f
u=e-g
return v*v+u*u},
c4k(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=J.av(d),n=o.h(d,e),m=o.h(d,f),l=B.cp()
for(w=e+1,v=n.a,u=n.b,t=m.a,s=m.b,r=g;w<f;++w){q=o.h(d,w)
p=A.cGw(q.a,q.b,v,u,t,s)
if(p>r){l.b=w
r=p}}if(r>g){if(l.b0()-e>1)A.c4k(d,e,l.b0(),g,h)
h.push(o.h(d,l.b0()))
if(f-l.b0()>1)A.c4k(d,l.b0(),f,g,h)}},
ciL(d,e,f){var w,v,u=J.av(e)
if(u.gu(e)<=4)return e
w=u.gu(e)-1
v=B.c([u.h(e,0)],x.L)
A.c4k(e,0,w,f*f,v)
v.push(u.h(e,w))
return v},
cGs(d,e,f,g){var w,v,u,t,s,r
if(f<=0)return 0
w=256*Math.pow(2,g)
v=G.mf.aaS(0,0,w)
u=f*e
t=G.mf.aaS(u,u,w)
s=t.a-v.a
r=t.b-v.b
return Math.sqrt(s*s+r*r)},
lk:function lk(d,e){this.a=d
this.b=e},
c0a(d,e,f){var w=A.a8u(d,f),v=new A.nD(d,e,w)
v.d=w+e*1.4142135623730951
return v},
a8u(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
nD:function nD(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
cHA(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
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
l=B.c9O(new A.bXQ(),x.o)
for(r=x.H,k=m*1.4142135623730951,j=w;j<u;j+=n)for(i=j+m,h=v;h<t;h+=n){g=new D.bW(i,h+m,r)
f=A.a8u(g,a5)
g=new A.nD(g,m,f)
g.d=f+k;++l.d
l.J3(g)}e=A.cCK(a5)
d=A.c0a(new D.bW(w+p/2,v+o/2,r),0,a5)
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
a3=A.a8u(a2,a5)
a2=new A.nD(a2,m,a3)
a4=m*1.4142135623730951
a2.d=a3+a4;++l.d
l.J3(a2)
i+=m
f=new D.bW(i,f,r)
a2=A.a8u(f,a5)
f=new A.nD(f,m,a2)
f.d=a2+a4;++l.d
l.J3(f)
k+=m
g=new D.bW(g,k,r)
f=A.a8u(g,a5)
g=new A.nD(g,m,f)
g.d=f+a4;++l.d
l.J3(g)
k=new D.bW(i,k,r)
i=A.a8u(k,a5)
k=new A.nD(k,m,i)
k.d=i+a4;++l.d
l.J3(k)
a0+=4}return new A.ahG(e.a,e.c)},
cCK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d[0]
for(w=i.length,v=w-1,u=0,t=0,s=0,r=0;r<w;q=r+1,v=r,r=q){p=i[r]
o=i[v]
n=p.a
m=o.b
l=o.a
k=p.b
j=n*m-l*k
t+=(n+l)*j
s+=(k+m)*j
u+=j*3}if(u===0)return A.c0a(i[0],0,d)
return A.c0a(new D.bW(t/u,s/u,x.H),0,d)},
bXQ:function bXQ(){},
cav(d){var w,v,u,t,s
for(w=d.$ti,v=new B.c_(d,d.gu(0),w.i("c_<ak.E>")),w=w.i("ak.E"),u=0,t=0;v.q();){s=v.d
if(s==null)s=w.a(s);++t
u+=(s-u)/t}if(t===0)throw B.i(B.ar("No elements"))
return u},
csK(d){var w,v,u,t,s,r,q,p
for(w=180,v=-180,u=90,t=-90,s=0;s<4;++s){r=d[s]
q=r.b
if(q<w)w=q
if(q>v)v=q
p=r.a
if(p<u)u=p
if(p>t)t=p}return new D.Vo(t,u,v,w)},
cig(d,e){var w,v,u,t,s,r,q,p,o,n=e.length,m=d.a,l=d.b
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
E=c[163]
D=c[30]
G=c[139]
F=c[29]
A.biY.prototype={
H(){return"VertexMode."+this.b}}
A.a4_.prototype={
bmx(d,e,f){var w,v,u,t=d.a.gmk(),s=e.b,r=!1
if(s>=t.d)if(s<=t.c){s=e.a
t=s>=t.b&&s<=t.a}else t=r
else t=r
if(!t)return!1
t=this.a7Y$
t===$&&B.b()
w=A.bWS(this.b,null,t,d.b)
if(!C.i.ga9(w).k(0,C.i.gaI(w)))w.push(C.i.ga9(w))
v=A.cig(f,w)
u=J.fn(d.c)&&new A.bFP(this,d,f).$0()
if(!(v&&!u))t=!v&&u
else t=!0
return t},
aX(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4={},a5=B.c([],x.g),a6=$.ao().r,a7=x.h,a8=B.c([],a7),a9=new B.c8(a6,C.aB,a3,a3,a8),b0=new B.c8(a6,C.aB,a3,a3,B.c([],a7))
a4.a=a4.b=null
w=new A.bFQ(a4,a2,a5,b1,a9,b0)
a7=a2.b
v=D.b1m(a7.B3(a7.d).a4(0,D.n6(a7.gG(),2)))
for(a6=a2.f,u=a2.r,t=x.n,s=a7.f,r=s*0.017453292519943295,q=a7.r,p=u==null,o=0;o<=a6.length-1;++o){n=a6[o]
m=n.b
if(J.es(m))continue
l=n.a
k=p?a3:u[o]
j=k!=null
i=A.bWS(a7,j?n.c:a3,v,m)
h=l.gayX()
g=(l.c.A()>>>24&255)/255
if(a4.a===h)f=g>0&&g<1
else f=!0
if(f)w.$0()
a4.b=l
a4.a=h
if(j){e=k.length
for(d=0;d<e;++d)a5.push(i[k[d]])}else{j=B.J(i,t)
j=new B.Re(j,!0)
a8.push(j)
f=a9.f
if(f!=null)j.fj(f)
j=a9.e
if(j!=null)j.a.delete()
a9.e=null}j=l.d
if(j>0)a2.aMr(b0,l,A.bWS(a7,a3,v,m),b2,b1,a2.aip(l),j)
m=l.gazp()!=null
if(m){m=a7.w
if(m==null)m=a7.w=D.caX(s,q)
j=l.ch
j=A.c4P(a7,v,j==null?l.ch=A.cBR(E.a3B,l.a):j)
f=a2.aVe(v,l)
a0=l.gazp()
a0.toString
a1=A.cBt(f,m,20,j,!1,r,a0)
if(a1!=null){w.$0()
a1.$1(b1)}}}w.$0()},
aip(d){var w
$.ao()
w=B.bi()
w.r=d.e.gp()
w.c=d.d
w.d=C.lW
w.e=C.t7
w.b=C.cj
return w},
aMr(d,e,f,g,h,i,j){var w,v
if(E.qc.k(0,E.qc)){w=B.c([],x.t)
v=new A.bcy(f,!0,w,g,E.a_I,j)
v.aLZ(g,!0,f,E.a_I,w,j)
v.bgO(B.c([d],x.p))}},
aVe(d,e){var w=e.gmk(),v=this.b,u=A.c4P(v,d,new F.hJ(w.b,w.d))
return new B.auy(A.c4P(v,d,new F.hJ(w.a,w.c)),u)},
f7(d){var w,v,u=this,t=!0
if(u.f===d.f){w=u.r
v=d.r
if(w==null?v==null:w===v)if(u.b.k(0,d.b)){t=u.w.k(0,d.w)
t=!t}}return t}}
A.b1w.prototype={
H(){return"PolygonLabelPlacement."+this.b}}
A.F4.prototype={
gmk(){var w=this.CW
return w==null?this.CW=A.csK(this.a):w},
gazp(){return null},
k(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof A.F4&&v.c.k(0,e.c)&&v.d===e.d&&v.e.k(0,e.e)&&E.qc.k(0,E.qc)&&C.m1.k(0,C.m1)&&B.dS(null,null)&&B.dS(v.a,e.a)
else w=!0
return w},
gayX(){var w=this,v=w.cy
return v==null?w.cy=B.aa(w.c,w.d,w.e,!1,E.qc,null,C.lW,C.t7,w.ay,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b):v},
gt(d){var w=this,v=w.db
if(v==null){v=B.J(w.a,x.O)
v.push(null)
v.push(C.m1)
v.push(E.a3B)
v.push(!1)
v.push(w.gayX())
v=w.db=B.aD(v)}return v}}
A.F5.prototype={
Y(){var w=this.$ti
return new A.a3Z($,null,B.D(x.S,w.i("z<rm<1>>")),null,w.i("a3Z<1>"))}}
A.a3Z.prototype={
aEo(d,e){var w,v=A.ciL(!0,d.b,e),u=d.c,t=J.av(u),s=t.gu(u),r=J.iH(s,x.U)
for(w=0;w<s;++w)r[w]=A.ciL(!0,t.h(u,w),e)
return new A.rm(d.a,v,r,this.$ti.i("rm<1>"))},
C(d){var w,v,u,t=this,s=null
t.aGu(d)
w=D.vO(d,G.mS)
v=w==null?s:w.a
if(v==null)v=B.a8(B.ar(y.a))
t.a.toString
w=t.a7V$
w===$&&B.b()
w=J.e1(w,new A.bFO(t,v))
u=B.J(w,w.$ti.i("z.E"))
t.a.toString
w=t.$ti
return new D.L4(B.hs(s,s,s,new A.a4_(u,s,v.gaA4(),!0,!1,!1,$,v,s,B.c([],w.i("y<1>")),s,w.i("a4_<1>")),new B.S(v.gG().a,v.gG().b)),s)}}
A.rm.prototype={}
A.a7G.prototype={
aZ(d){this.bg(d)
this.a7W$=null
this.a7X$.a0(0)}}
A.a7H.prototype={
wR(d){var w=this.b
this.a7Y$=D.b1m(w.B3(w.d)).a4(0,D.b1m(w.gG()).c0(0,2))
return this.aFQ(d)}}
A.a7J.prototype={}
A.ae4.prototype={}
A.Kl.prototype={
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
o=q.M4(s.d,p)
n=o.a4(0,new D.bW(r.a/2-w,r.b/2-v,u))
m=q.ayc(s.f!==0?s.azh(o,n):n,p)
for(w=i.f,l=w.length-1,k=!1;l>=0;--l){j=w[l]
if(k)j.toString
if(k)continue
k=i.bmx(j,m,t)
if(k)j.toString}if(!k)return!1
return!0}}
A.ae5.prototype={}
A.zN.prototype={
C(d){var w,v,u,t,s,r,q,p=this,o=D.vO(d,G.mS),n=o==null?null:o.a
if(n==null)n=B.a8(B.ar(y.a))
o=p.a
o.toString
w=o.e
v=p.a7W$
if(v==null){o=p.$ti
u=J.iH(1,o.i("zN.0"))
for(o=o.c,t=0;t<1;++t)u[t]=A.cAs(G.acU,w[t],o)
p.a7W$=u
v=u}if(p.a.c===0)p.a7V$=v
else{s=B.az(d,C.e2,x.w).w.b
if(s!==p.auO$){p.auO$=s
p.a7X$.a0(0)}o=p.a7X$
r=C.m.ek(n.e)
q=o.h(0,r)
if(q==null){q=p.aoz(n,s,p.a.c,v)
o.l(0,r,q)
o=q}else o=q
p.a7V$=o}return new B.eb(new A.b2d(),null)},
aoz(d,e,f,g){return new B.i7(this.bcg(d,e,f,g),this.$ti.i("i7<zN.0>"))},
bcg(d,e,f,g){var w=this
return function(){var v=d,u=e,t=f,s=g
var r=0,q=1,p=[],o,n,m
return function $async$aoz(h,i,j){if(i===1){p.push(j)
r=q}for(;;)switch(r){case 0:m=A.cGs(v.a,u,t,C.m.ek(v.e))
o=s.length,n=0
case 2:if(!(n<o)){r=4
break}r=5
return h.b=w.aEo(s[n],m),1
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return h.c=p.at(-1),3}}}}}
A.ahT.prototype={}
A.bcy.prototype={
bgO(d){var w,v,u,t,s,r,q,p,o,n,m={},l=this.a,k=J.av(l)
if(k.gu(l)<2)return
m.a=B.c([],x.g)
w=new A.bcz(m,d)
v=this.d
u=this.f
t=null
s=null
r=0
for(;;){q=k.gu(l)
if(!(r<q-1+1))break
A:{p=r+1
o=A.cyY(k.h(l,r),k.h(l,C.f.aC(p,k.gu(l))),v,u)
if(o==null)break A
q=o.a
if(t!==q.a||s!==q.b){w.$0()
m.a.push(q)}q=m.a
n=o.b
q.push(n)
t=n.a
s=n.b}r=p}w.$0()},
aBg(){return 1}}
A.bF5.prototype={
aLZ(d,e,f,g,h,i){var w,v=this,u=v.aVX()
v.w!==$&&B.b8()
v.w=u
u=v.c
w=v.aWb(u)
v.z!==$&&B.b8()
v.z=w
v.y=u.length-1
v.x=0
v.bso()
u=v.aBg()
v.r!==$&&B.b8()
v.r=u},
bso(){var w,v=this,u=v.c,t=u.length
if(t===0)return
w=v.y
w===$&&B.b()
t=C.f.aC(w+1,t)
v.y=t
v.x=u[t]},
aVX(){var w,v,u,t,s,r,q=this.a,p=J.av(q)
if(p.gu(q)<2)return 0
for(w=0,v=1;v<p.gu(q);++v){u=p.h(q,v-1)
t=p.h(q,v)
s=u.a-t.a
r=u.b-t.b
w+=Math.sqrt(s*s+r*r)}q=J.c_x(p.gaI(q),p.ga9(q)).gdW()
return w+q},
aWb(d){var w,v,u
for(w=d.length,v=0,u=0;u<w;++u)v=C.m.a_(v,d[u])
return v}}
A.bjb.prototype={
j(d){return"VisibleSegment("+this.a.j(0)+", "+this.b.j(0)+")"}}
A.al3.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=e instanceof A.al3
else w=!0
return w},
gt(d){return B.aa(null,null,null,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
A.b0k.prototype={
H(){return"PatternFit."+this.b}}
A.aFP.prototype={}
A.aPH.prototype={
bnC(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this.b,a1=x.X,a2=new D.bW(a0.a,a0.b,a1),a3=new D.bW(a0.c,a0.d,a1)
a0=this.a
w=a0.a
v=a0.d
u=a0.b
a0=a0.c
t=a4.r.a4(0,a2.a_(0,a3))
s=Math.max(0,t.a)
r=Math.max(0,t.b)
q=a4.e
p=D.uH(a4.mJ(new F.hJ(u,a0),q),a4.mJ(new F.hJ(w,v),q),x.i)
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
g=D.n6(a3.a4(0,a2),2)
f=a4.mJ(new F.hJ(u,v),h)
e=a4.mJ(new F.hJ(w,a0),h)
if(n){a0=p*0.017453292519943295
a1=-a0
d=D.LH(D.n6(D.LH(f,a1).a_(0,D.LH(e,a1)),2).a_(0,g),a0)}else d=D.n6(f.a_(0,e),2).a_(0,g)
return a4.aA8(a4.Bu(d,h),h)}}
A.lk.prototype={
a4(d,e){return new A.lk(this.a-e.a,this.b-e.b)},
j(d){return"DoublePoint("+B.r(this.a)+", "+B.r(this.b)+")"}}
A.ahG.prototype={
j(d){return B.Q(this).j(0)+"("+this.a.j(0)+", distance: "+B.r(this.b)+")"}}
A.nD.prototype={}
var z=a.updateTypes(["X(hJ)","lk(v)","w<w<lk>>()","w<lk>(w<lk>)","v(nD,nD)"])
A.bTc.prototype={
$1(d){var w=this
w.e.aX(d,new B.x(w.b-w.f/2,w.c-w.r/2))},
$S:1091}
A.bTn.prototype={
$1(d){return d.a},
$S:z+0}
A.bTo.prototype={
$1(d){return d.b},
$S:z+0}
A.bFP.prototype={
$0(){var w,v,u,t,s,r,q
for(w=J.aR(this.b.c),v=this.c,u=this.a,t=u.b;w.q();){s=w.gJ()
r=u.a7Y$
r===$&&B.b()
q=A.bWS(t,null,r,s)
s=C.i.ga9(q)
r=C.i.gaI(q)
if(!(r.a===s.a&&r.b===s.b))q.push(C.i.ga9(q))
if(A.cig(v,q))return!0}return!1},
$S:9}
A.bFQ.prototype={
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
o.d.bmr(B.coN(E.fzQ,s,null,null,null),E.a9W,v)}else o.d.hK(o.e,v)
if(m.d>0)o.d.hK(o.f,o.b.aip(m))
C.i.a0(o.c)
o.e.jN()
o.f.jN()
n.a=n.b=null},
$S:0}
A.bFO.prototype={
$1(d){var w=d.a.gmk(),v=this.b.gaA4()
return!(w.b>v.a||w.a<v.b||w.c<v.d||w.d>v.c)},
$S(){return this.a.$ti.i("B(rm<1>)")}}
A.bGk.prototype={
$1(d){var w=this.a.buX(this.b.a[d])
return new A.lk(w.a,w.b)},
$S:z+1}
A.bGl.prototype={
$0(){var w=B.c([],x.W)
return w},
$S:z+2}
A.b2d.prototype={
$1(d){return B.a8(B.du("Widgets that mix ProjectionSimplificationManagement into their State must call super.build() but must ignore the return value of the superclass."))},
$S:1092}
A.bcz.prototype={
$0(){var w,v,u,t,s,r,q=this.a
if(q.a.length===0)return
for(w=this.b,v=x.n,u=0;u<1;++u){t=w[u]
s=B.J(q.a,v)
s=new B.Re(s,!1)
t.r.push(s)
r=t.f
if(r!=null)s.fj(r)
s=t.e
if(s!=null)s.a.delete()
t.e=null}q.a=B.c([],x.g)},
$S:0}
A.bWT.prototype={
$1(d){return d},
$S:z+3}
A.bXQ.prototype={
$2(d,e){var w,v=e.d
v===$&&B.b()
w=d.d
w===$&&B.b()
return C.m.bn(v,w)},
$S:z+4};(function aliases(){var w=A.Kl.prototype
w.aFQ=w.wR
w=A.zN.prototype
w.aGu=w.C})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.hQ,[A.biY,A.b1w,A.b0k])
u(B.cB,[A.bTc,A.bTn,A.bTo,A.bFO,A.bGk,A.b2d,A.bWT])
t(A.Kl,B.yf)
t(A.a7H,A.Kl)
t(A.a4_,A.a7H)
u(B.dz,[A.bFP,A.bFQ,A.bGl,A.bcz])
u(B.C,[A.F4,A.a7J,A.ae4,A.ae5,A.zN,A.bF5,A.bjb,A.al3,A.aFP,A.lk,A.ahG,A.nD])
t(A.ahT,B.N)
t(A.F5,A.ahT)
t(A.a7G,B.Z)
t(A.a3Z,A.a7G)
t(A.rm,A.a7J)
t(A.bcy,A.bF5)
t(A.aPH,A.aFP)
t(A.bXQ,B.dE)
w(A.a7G,A.zN)
w(A.a7H,A.ae5)
v(A.a7J,A.ae4)})()
B.d1(b.typeUniverse,JSON.parse('{"F5":{"N":[],"h":[]},"a4_":{"Kl":["1","rm<1>"],"aC":[]},"a3Z":{"zN":["rm<1>","F4<1>","F5<1>"],"Z":["F5<1>"],"zN.0":"rm<1>"},"Kl":{"aC":[]},"ahT":{"N":[],"h":[]}}'))
B.Qk(b.typeUniverse,JSON.parse('{"a7G":1,"a7H":1,"a7J":1,"ae4":1,"ae5":2}'))
var y={a:"`MapCamera.of()` should not be called outside a `FlutterMap` and its descendants"}
var x=(function rtii(){var w=B.L
return{o:w("nD"),v:w("lk"),L:w("y<lk>"),W:w("y<w<lk>>"),a:w("y<w<bW<b7>>>"),g:w("y<x>"),p:w("y<WG>"),h:w("y<e7>"),t:w("y<X>"),U:w("w<lk>"),w:w("hY"),n:w("x"),X:w("bW<X>"),H:w("bW<b7>"),i:w("X"),S:w("v"),O:w("C?")}})();(function constants(){E.a9W=new B.Ch(1,"src")
E.qc=new A.al3()
E.a_I=new A.b0k(0,"none")
E.a3B=new A.b1w(0,"centroid")
E.fzQ=new A.biY(0,"triangles")})()};
(a=>{a["EaFcHVc9xD5AQVtfClNhU2hrDP4="]=a.current})($__dart_deferred_initializers__);