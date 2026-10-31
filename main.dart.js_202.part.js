((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={blJ:function blJ(d,e){this.a=d
this.b=e},
cGD(d,e,f,g,h,i,j){var w=g.a,v=g.b,u=j.b,t=u.c,s=u.a.c.gaQ()
if(i===0){u=t/2
if(w+u<0||w-u>e.a)return null
u=s/2
if(v+u<0||v-u>e.b)return null}if(d.a.a-d.b.a-f>t)return new A.bX9(!1,w,v,i,j,t,s)
return null},
cH0(d,e){var w
switch(d.a){case 0:w=A.cGY(e)
break
case 1:w=A.cH4(e)
break
default:w=null}return w},
cGY(d){var w=B.a6(d).i("a7<1,X>")
return new F.hW(A.cfg(new B.a7(d,new A.bXk(),w)),A.cfg(new B.a7(d,new A.bXl(),w)))},
cH4(d){var w,v,u=x.H,t=J.h0(4,u)
for(w=0;w<4;++w){v=d[w]
t[w]=new D.c0(v.b,v.a,u)}u=A.cMQ(B.c([t],x.a),0.0001).a
return new F.hW(u.b,u.a)},
czy(d,e,f,g,h){var w=A.czA(g)
w=w
return new A.FJ(g,f,e,d,w,h.i("FJ<0>"))},
czA(d){var w,v,u,t
for(w=0,v=0;v<4;){u=d[v];++v
t=d[v%4]
w+=(t.b-u.b)*(t.a+u.a)}return w>=0},
czz(d,e,f){return new A.FK(e,0.3,d,f.i("FK<0>"))},
cFB(d,e,f){return new A.rR(e,B.zH(4,new A.bJC(d,e),!1,x.v),new A.bJD(e,d).$0(),f.i("rR<0>"))},
bX9:function bX9(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bXk:function bXk(){},
bXl:function bXl(){},
a57:function a57(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i
_.a8N$=j
_.b=k
_.c=l
_.d=m
_.a=n
_.$ti=o},
bJ6:function bJ6(d,e,f){this.a=d
this.b=e
this.c=f},
bJ7:function bJ7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b3H:function b3H(d,e){this.a=d
this.b=e},
FJ:function FJ(d,e,f,g,h,i){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.ay=h
_.db=_.cy=_.cx=_.CW=_.ch=null
_.$ti=i},
FK:function FK(d,e,f,g){var _=this
_.e=d
_.c=e
_.a=f
_.$ti=g},
a56:function a56(d,e,f,g,h){var _=this
_.a8K$=d
_.a8L$=e
_.a8M$=f
_.avZ$=g
_.c=_.a=null
_.$ti=h},
bJ5:function bJ5(d,e){this.a=d
this.b=e},
rR:function rR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
bJC:function bJC(d,e){this.a=d
this.b=e},
bJD:function bJD(d,e){this.a=d
this.b=e},
a8R:function a8R(){},
a8S:function a8S(){},
a8U:function a8U(){},
afn:function afn(){},
L3:function L3(){},
afo:function afo(){},
Aj:function Aj(){},
b4n:function b4n(){},
aja:function aja(){},
blY(d,e,f,g,h,i){var w
if(d<f)w=1
else w=d>h?2:0
if(e<g)w|=4
else if(e>i)w|=8
return w},
cE5(d,e,f,g){var w,v,u,t=-g/2,s=g/2,r=f.a+s,q=f.b+s,p=d.a,o=d.b,n=e.a,m=e.b,l=A.blY(p,o,t,t,r,q),k=A.blY(n,m,t,t,r,q)
for(;;){if((l|k)===0)return new A.blX(new B.y(p,o),new B.y(n,m))
if((l&k)!==0)return null
w=l!==0?l:k
if((w&8)!==0){v=p+(n-p)*(q-o)/(m-o)
u=q}else if((w&4)!==0){v=p+(n-p)*(t-o)/(m-o)
u=t}else if((w&2)!==0){u=o+(m-o)*(r-p)/(n-p)
v=r}else{if((w&1)!==0)u=o+(m-o)*(t-p)/(n-p)
else return null
v=t}if(w===l){l=A.blY(v,u,t,t,r,q)
o=u
p=v}else{k=A.blY(v,u,t,t,r,q)
m=u
n=v}}},
bf8:function bf8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.Q=_.z=_.y=_.x=_.w=_.r=$},
bf9:function bf9(d,e){this.a=d
this.b=e},
bIn:function bIn(){},
blX:function blX(d,e){this.a=d
this.b=e},
amg:function amg(){},
b2r:function b2r(d,e){this.a=d
this.b=e},
c5u(d,e){return new A.aRp(d,e)},
aHy:function aHy(){},
aRp:function aRp(d,e){this.a=d
this.b=e},
c9q(d,e,f){var w=d.a.bsV(f,256*Math.pow(2,d.e))
return new B.y(w.a-e.a,w.b-e.b)},
c_W(d,e,f,g){var w,v,u,t=256*Math.pow(2,d.e),s=e==null||J.eE(e)?g:J.csj(g,J.cbF(e,new A.c_X(),x.v)),r=-f.a,q=-f.b,p=J.av(s),o=p.gu(s),n=B.bo(o,C.L,!0,x.n)
for(w=0;w<o;++w){v=p.dO(s,w)
u=G.mq.BB(v.a,v.b,t)
n[w]=new B.y(u.a+r,u.b+q)}return n},
c_X:function c_X(){},
cLH(d,e,f,g,h,i){var w,v=h-f,u=i-g
if(v!==0||u!==0){w=((d-f)*v+(e-g)*u)/(v*v+u*u)
if(w>1){v=d-h
u=e-i
return v*v+u*u}else if(w>0){v=d-(f+v*w)
u=e-(g+u*w)
return v*v+u*u}}v=d-f
u=e-g
return v*v+u*u},
c8T(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=J.av(d),n=o.h(d,e),m=o.h(d,f),l=B.cv()
for(w=e+1,v=n.a,u=n.b,t=m.a,s=m.b,r=g;w<f;++w){q=o.h(d,w)
p=A.cLH(q.a,q.b,v,u,t,s)
if(p>r){l.b=w
r=p}}if(r>g){if(l.b2()-e>1)A.c8T(d,e,l.b2(),g,h)
h.push(o.h(d,l.b2()))
if(f-l.b2()>1)A.c8T(d,l.b2(),f,g,h)}},
cnD(d,e,f){var w,v,u=J.av(e)
if(u.gu(e)<=4)return e
w=u.gu(e)-1
v=B.c([u.h(e,0)],x.L)
A.c8T(e,0,w,f*f,v)
v.push(u.h(e,w))
return v},
cLD(d,e,f,g){var w,v,u,t,s,r
if(f<=0)return 0
w=256*Math.pow(2,g)
v=G.mq.abK(0,0,w)
u=f*e
t=G.mq.abK(u,u,w)
s=t.a-v.a
r=t.b-v.b
return Math.sqrt(s*s+r*r)},
ls:function ls(d,e){this.a=d
this.b=e},
c4L(d,e,f){var w=A.a9F(d,f),v=new A.nR(d,e,w)
v.d=w+e*1.4142135623730951
return v},
a9F(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
aiX:function aiX(d,e){this.a=d
this.b=e},
nR:function nR(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
cMQ(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=0,v=0,u=0,t=0,s=0;r=a5[0],s<r.length;++s){q=r[s]
r=s!==0
if(!r||q.a<w)w=q.a
if(!r||q.b<v)v=q.b
if(!r||q.a>u)u=q.a
if(!r||q.b>t)t=q.b}p=u-w
o=t-v
n=Math.min(p,o)
m=n/2
if(n===0)return new A.aiX(new D.c0(w,v,x.H),0)
l=B.cey(new A.c11(),x.o)
for(r=x.H,k=m*1.4142135623730951,j=w;j<u;j+=n)for(i=j+m,h=v;h<t;h+=n){g=new D.c0(i,h+m,r)
f=A.a9F(g,a5)
g=new A.nR(g,m,f)
g.d=f+k;++l.d
l.Jr(g)}e=A.cHT(a5)
d=A.c4L(new D.c0(w+p/2,v+o/2,r),0,a5)
if(d.c>e.c)e=d
a0=l.c
while(l.c!==0){a1=l.qB()
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
a2=new D.c0(g,f,r)
a3=A.a9F(a2,a5)
a2=new A.nR(a2,m,a3)
a4=m*1.4142135623730951
a2.d=a3+a4;++l.d
l.Jr(a2)
i+=m
f=new D.c0(i,f,r)
a2=A.a9F(f,a5)
f=new A.nR(f,m,a2)
f.d=a2+a4;++l.d
l.Jr(f)
k+=m
g=new D.c0(g,k,r)
f=A.a9F(g,a5)
g=new A.nR(g,m,f)
g.d=f+a4;++l.d
l.Jr(g)
k=new D.c0(i,k,r)
i=A.a9F(k,a5)
k=new A.nR(k,m,i)
k.d=i+a4;++l.d
l.Jr(k)
a0+=4}return new A.aiX(e.a,e.c)},
cHT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d[0]
for(w=i.length,v=w-1,u=0,t=0,s=0,r=0;r<w;q=r+1,v=r,r=q){p=i[r]
o=i[v]
n=p.a
m=o.b
l=o.a
k=p.b
j=n*m-l*k
t+=(n+l)*j
s+=(k+m)*j
u+=j*3}if(u===0)return A.c4L(i[0],0,d)
return A.c4L(new D.c0(t/u,s/u,x.H),0,d)},
c11:function c11(){},
cfg(d){var w,v,u,t,s
for(w=d.$ti,v=new B.bY(d,d.gu(0),w.i("bY<ai.E>")),w=w.i("ai.E"),u=0,t=0;v.q();){s=v.d
if(s==null)s=w.a(s);++t
u+=(s-u)/t}if(t===0)throw B.n(B.at("No elements"))
return u},
cxM(d){var w,v,u,t,s,r,q,p
for(w=180,v=-180,u=90,t=-90,s=0;s<4;++s){r=d[s]
q=r.b
if(q<w)w=q
if(q>v)v=q
p=r.a
if(p<u)u=p
if(p>t)t=p}return new D.Wt(t,u,v,w)},
cn7(d,e){var w,v,u,t,s,r,q,p,o,n=e.length,m=d.a,l=d.b
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
A=a.updateHolder(c[48],A)
E=c[198]
D=c[37]
G=c[174]
F=c[36]
A.blJ.prototype={
H(){return"VertexMode."+this.b}}
A.a57.prototype={
boD(d,e,f){var w,v,u,t=d.a.gmA(),s=e.b,r=!1
if(s>=t.d)if(s<=t.c){s=e.a
t=s>=t.b&&s<=t.a}else t=r
else t=r
if(!t)return!1
t=this.a8N$
t===$&&B.b()
w=A.c_W(this.b,null,t,d.b)
if(!C.h.ga8(w).k(0,C.h.gaG(w)))w.push(C.h.ga8(w))
v=A.cn7(f,w)
u=J.fK(d.c)&&new A.bJ6(this,d,f).$0()
if(!(v&&!u))t=!v&&u
else t=!0
return t},
b_(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4={},a5=B.c([],x.g),a6=$.aq().r,a7=x.h,a8=B.c([],a7),a9=new B.cl(a6,C.aH,a3,a3,a8),b0=new B.cl(a6,C.aH,a3,a3,B.c([],a7))
a4.a=a4.b=null
w=new A.bJ7(a4,a2,a5,b1,a9,b0)
a7=a2.b
v=D.b3x(a7.Bd(a7.d).a5(0,D.ni(a7.gG(),2)))
for(a6=a2.f,u=a2.r,t=x.n,s=a7.f,r=s*0.017453292519943295,q=a7.r,p=u==null,o=0;o<=a6.length-1;++o){n=a6[o]
m=n.b
if(J.eE(m))continue
l=n.a
k=p?a3:u[o]
j=k!=null
i=A.c_W(a7,j?n.c:a3,v,m)
h=l.gaA7()
g=(l.c.A()>>>24&255)/255
if(a4.a===h)f=g>0&&g<1
else f=!0
if(f)w.$0()
a4.b=l
a4.a=h
if(j){e=k.length
for(d=0;d<e;++d)a5.push(i[k[d]])}else{j=B.K(i,t)
j=new B.S9(j,!0)
a8.push(j)
f=a9.f
if(f!=null)j.fn(f)
j=a9.e
if(j!=null)j.a.delete()
a9.e=null}j=l.d
if(j>0)a2.aNQ(b0,l,A.c_W(a7,a3,v,m),b2,b1,a2.ajo(l),j)
m=l.gaAz()!=null
if(m){m=a7.w
if(m==null)m=a7.w=D.cfI(s,q)
j=l.ch
j=A.c9q(a7,v,j==null?l.ch=A.cH0(E.a4g,l.a):j)
f=a2.aX2(v,l)
a0=l.gaAz()
a0.toString
a1=A.cGD(f,m,20,j,!1,r,a0)
if(a1!=null){w.$0()
a1.$1(b1)}}}w.$0()},
ajo(d){var w
$.aq()
w=B.bi()
w.r=d.e.gp()
w.c=d.d
w.d=C.m8
w.e=C.th
w.b=C.cm
return w},
aNQ(d,e,f,g,h,i,j){var w,v
if(E.qm.k(0,E.qm)){w=B.c([],x.t)
v=new A.bf8(f,!0,w,g,E.a0n,j)
v.aNn(g,!0,f,E.a0n,w,j)
v.biV(B.c([d],x.p))}},
aX2(d,e){var w=e.gmA(),v=this.b,u=A.c9q(v,d,new F.hW(w.b,w.d))
return new B.avS(A.c9q(v,d,new F.hW(w.a,w.c)),u)},
f2(d){var w,v,u=this,t=!0
if(u.f===d.f){w=u.r
v=d.r
if(w==null?v==null:w===v)if(u.b.k(0,d.b)){t=u.w.k(0,d.w)
t=!t}}return t}}
A.b3H.prototype={
H(){return"PolygonLabelPlacement."+this.b}}
A.FJ.prototype={
gmA(){var w=this.CW
return w==null?this.CW=A.cxM(this.a):w},
gaAz(){return null},
k(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof A.FJ&&v.c.k(0,e.c)&&v.d===e.d&&v.e.k(0,e.e)&&E.qm.k(0,E.qm)&&C.md.k(0,C.md)&&B.dW(null,null)&&B.dW(v.a,e.a)
else w=!0
return w},
gaA7(){var w=this,v=w.cy
return v==null?w.cy=B.aa(w.c,w.d,w.e,!1,E.qm,null,C.m8,C.th,w.ay,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b):v},
gt(d){var w=this,v=w.db
if(v==null){v=B.K(w.a,x.O)
v.push(null)
v.push(C.md)
v.push(E.a4g)
v.push(!1)
v.push(w.gaA7())
v=w.db=B.aG(v)}return v}}
A.FK.prototype={
Y(){var w=this.$ti
return new A.a56($,null,B.D(x.S,w.i("z<rR<1>>")),null,w.i("a56<1>"))}}
A.a56.prototype={
aFL(d,e){var w,v=A.cnD(!0,d.b,e),u=d.c,t=J.av(u),s=t.gu(u),r=J.iU(s,x.U)
for(w=0;w<s;++w)r[w]=A.cnD(!0,t.h(u,w),e)
return new A.rR(d.a,v,r,this.$ti.i("rR<1>"))},
C(d){var w,v,u,t=this,s=null
t.aHQ(d)
w=D.wh(d,G.n0)
v=w==null?s:w.a
if(v==null)v=B.ab(B.at(y.a))
t.a.toString
w=t.a8K$
w===$&&B.b()
w=J.en(w,new A.bJ5(t,v))
u=B.K(w,w.$ti.i("z.E"))
t.a.toString
w=t.$ti
return new D.LL(B.hs(s,s,s,new A.a57(u,s,v.gaBe(),!0,!1,!1,$,v,s,B.c([],w.i("x<1>")),s,w.i("a57<1>")),new B.S(v.gG().a,v.gG().b)),s)}}
A.rR.prototype={}
A.a8R.prototype={
b0(d){this.bd(d)
this.a8L$=null
this.a8M$.a1(0)}}
A.a8S.prototype={
x0(d){var w=this.b
this.a8N$=D.b3x(w.Bd(w.d)).a5(0,D.b3x(w.gG()).c2(0,2))
return this.aHb(d)}}
A.a8U.prototype={}
A.afn.prototype={}
A.L3.prototype={
x0(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
C.h.a1(i.d)
w=d.a
v=d.b
u=x.X
t=new D.c0(w,v,u)
s=i.b
r=s.r
q=s.a
p=s.e
o=q.Mo(s.d,p)
n=o.a5(0,new D.c0(r.a/2-w,r.b/2-v,u))
m=q.azn(s.f!==0?s.aAr(o,n):n,p)
for(w=i.f,l=w.length-1,k=!1;l>=0;--l){j=w[l]
if(k)j.toString
if(k)continue
k=i.boD(j,m,t)
if(k)j.toString}if(!k)return!1
return!0}}
A.afo.prototype={}
A.Aj.prototype={
C(d){var w,v,u,t,s,r,q,p=this,o=D.wh(d,G.n0),n=o==null?null:o.a
if(n==null)n=B.ab(B.at(y.a))
o=p.a
o.toString
w=o.e
v=p.a8L$
if(v==null){o=p.$ti
u=J.iU(1,o.i("Aj.0"))
for(o=o.c,t=0;t<1;++t)u[t]=A.cFB(G.adU,w[t],o)
p.a8L$=u
v=u}if(p.a.c===0)p.a8K$=v
else{s=B.ax(d,C.e9,x.w).w.b
if(s!==p.avZ$){p.avZ$=s
p.a8M$.a1(0)}o=p.a8M$
r=C.l.eq(n.e)
q=o.h(0,r)
if(q==null){q=p.apE(n,s,p.a.c,v)
o.l(0,r,q)
o=q}else o=q
p.a8K$=o}return new B.e7(new A.b4n(),null)},
apE(d,e,f,g){return new B.io(this.bej(d,e,f,g),this.$ti.i("io<Aj.0>"))},
bej(d,e,f,g){var w=this
return function(){var v=d,u=e,t=f,s=g
var r=0,q=1,p=[],o,n,m
return function $async$apE(h,i,j){if(i===1){p.push(j)
r=q}for(;;)switch(r){case 0:m=A.cLD(v.a,u,t,C.l.eq(v.e))
o=s.length,n=0
case 2:if(!(n<o)){r=4
break}r=5
return h.b=w.aFL(s[n],m),1
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return h.c=p.at(-1),3}}}}}
A.aja.prototype={}
A.bf8.prototype={
biV(d){var w,v,u,t,s,r,q,p,o,n,m={},l=this.a,k=J.av(l)
if(k.gu(l)<2)return
m.a=B.c([],x.g)
w=new A.bf9(m,d)
v=this.d
u=this.f
t=null
s=null
r=0
for(;;){q=k.gu(l)
if(!(r<q-1+1))break
A:{p=r+1
o=A.cE5(k.h(l,r),k.h(l,C.f.aC(p,k.gu(l))),v,u)
if(o==null)break A
q=o.a
if(t!==q.a||s!==q.b){w.$0()
m.a.push(q)}q=m.a
n=o.b
q.push(n)
t=n.a
s=n.b}r=p}w.$0()},
aCy(){return 1}}
A.bIn.prototype={
aNn(d,e,f,g,h,i){var w,v=this,u=v.aXN()
v.w!==$&&B.bb()
v.w=u
u=v.c
w=v.aY1(u)
v.z!==$&&B.bb()
v.z=w
v.y=u.length-1
v.x=0
v.buy()
u=v.aCy()
v.r!==$&&B.bb()
v.r=u},
buy(){var w,v=this,u=v.c,t=u.length
if(t===0)return
w=v.y
w===$&&B.b()
t=C.f.aC(w+1,t)
v.y=t
v.x=u[t]},
aXN(){var w,v,u,t,s,r,q=this.a,p=J.av(q)
if(p.gu(q)<2)return 0
for(w=0,v=1;v<p.gu(q);++v){u=p.h(q,v-1)
t=p.h(q,v)
s=u.a-t.a
r=u.b-t.b
w+=Math.sqrt(s*s+r*r)}q=J.c47(p.gaG(q),p.ga8(q)).ge1()
return w+q},
aY1(d){var w,v,u
for(w=d.length,v=0,u=0;u<w;++u)v=C.l.a0(v,d[u])
return v}}
A.blX.prototype={
j(d){return"VisibleSegment("+this.a.j(0)+", "+this.b.j(0)+")"}}
A.amg.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=e instanceof A.amg
else w=!0
return w},
gt(d){return B.aa(null,null,null,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
A.b2r.prototype={
H(){return"PatternFit."+this.b}}
A.aHy.prototype={}
A.aRp.prototype={
bpK(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this.b,a1=x.X,a2=new D.c0(a0.a,a0.b,a1),a3=new D.c0(a0.c,a0.d,a1)
a0=this.a
w=a0.a
v=a0.d
u=a0.b
a0=a0.c
t=a4.r.a5(0,a2.a0(0,a3))
s=Math.max(0,t.a)
r=Math.max(0,t.b)
q=a4.e
p=D.v5(a4.n3(new F.hW(u,a0),q),a4.n3(new F.hW(w,v),q),x.i)
o=p.b.a5(0,p.a)
p=a4.f
n=p!==0
if(n){m=p*0.017453292519943295
l=Math.abs(Math.cos(m))
k=Math.abs(Math.sin(m))
m=o.a
j=o.b
o=new D.c0(m*l+j*k,j*l+m*k,a1)}a1=Math.log(Math.min(s/o.a,r/o.b)*(256*Math.pow(2,q))/256)
s=a4.b
if(s==null)s=0
i=Math.max(s,0)
s=a4.c
if(s==null)s=1/0
h=C.l.aw(a1/0.6931471805599453,i,Math.min(s,1/0))
g=D.ni(a3.a5(0,a2),2)
f=a4.n3(new F.hW(u,v),h)
e=a4.n3(new F.hW(w,a0),h)
if(n){a0=p*0.017453292519943295
a1=-a0
d=D.Mo(D.ni(D.Mo(f,a1).a0(0,D.Mo(e,a1)),2).a0(0,g),a0)}else d=D.ni(f.a0(0,e),2).a0(0,g)
return a4.aBi(a4.BH(d,h),h)}}
A.ls.prototype={
a5(d,e){return new A.ls(this.a-e.a,this.b-e.b)},
j(d){return"DoublePoint("+B.q(this.a)+", "+B.q(this.b)+")"}}
A.aiX.prototype={
j(d){return B.R(this).j(0)+"("+this.a.j(0)+", distance: "+B.q(this.b)+")"}}
A.nR.prototype={}
var z=a.updateTypes(["X(hW)","ls(w)","v<v<ls>>()","v<ls>(v<ls>)","w(nR,nR)"])
A.bX9.prototype={
$1(d){var w=this
w.e.b_(d,new B.y(w.b-w.f/2,w.c-w.r/2))},
$S:1090}
A.bXk.prototype={
$1(d){return d.a},
$S:z+0}
A.bXl.prototype={
$1(d){return d.b},
$S:z+0}
A.bJ6.prototype={
$0(){var w,v,u,t,s,r,q
for(w=J.aJ(this.b.c),v=this.c,u=this.a,t=u.b;w.q();){s=w.gI()
r=u.a8N$
r===$&&B.b()
q=A.c_W(t,null,r,s)
s=C.h.ga8(q)
r=C.h.gaG(q)
if(!(r.a===s.a&&r.b===s.b))q.push(C.h.ga8(q))
if(A.cn7(v,q))return!0}return!1},
$S:10}
A.bJ7.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this,n=o.a,m=n.b
if(m==null)return
w=m.c
$.aq()
v=B.bi()
v.b=C.cl
v.r=w.gp()
u=o.c
t=u.length
if(t!==0){s=new Float32Array(t*2)
for(r=0;r<t;++r){q=r*2
p=u[r]
s[q]=p.a
s[q+1]=p.b}$.aq()
o.d.box(B.ctQ(E.fCu,s,null,null,null),E.aaN,v)}else o.d.hS(o.e,v)
if(m.d>0)o.d.hS(o.f,o.b.ajo(m))
C.h.a1(o.c)
o.e.jX()
o.f.jX()
n.a=n.b=null},
$S:0}
A.bJ5.prototype={
$1(d){var w=d.a.gmA(),v=this.b.gaBe()
return!(w.b>v.a||w.a<v.b||w.c<v.d||w.d>v.c)},
$S(){return this.a.$ti.i("B(rR<1>)")}}
A.bJC.prototype={
$1(d){var w=this.a.bx5(this.b.a[d])
return new A.ls(w.a,w.b)},
$S:z+1}
A.bJD.prototype={
$0(){var w=B.c([],x.W)
return w},
$S:z+2}
A.b4n.prototype={
$1(d){return B.ab(B.dG("Widgets that mix ProjectionSimplificationManagement into their State must call super.build() but must ignore the return value of the superclass."))},
$S:1091}
A.bf9.prototype={
$0(){var w,v,u,t,s,r,q=this.a
if(q.a.length===0)return
for(w=this.b,v=x.n,u=0;u<1;++u){t=w[u]
s=B.K(q.a,v)
s=new B.S9(s,!1)
t.r.push(s)
r=t.f
if(r!=null)s.fn(r)
s=t.e
if(s!=null)s.a.delete()
t.e=null}q.a=B.c([],x.g)},
$S:0}
A.c_X.prototype={
$1(d){return d},
$S:z+3}
A.c11.prototype={
$2(d,e){var w,v=e.d
v===$&&B.b()
w=d.d
w===$&&B.b()
return C.l.bo(v,w)},
$S:z+4};(function aliases(){var w=A.L3.prototype
w.aHb=w.x0
w=A.Aj.prototype
w.aHQ=w.C})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.fU,[A.blJ,A.b3H,A.b2r])
u(B.cg,[A.bX9,A.bXk,A.bXl,A.bJ5,A.bJC,A.b4n,A.c_X])
t(A.L3,B.vl)
t(A.a8S,A.L3)
t(A.a57,A.a8S)
u(B.dg,[A.bJ6,A.bJ7,A.bJD,A.bf9])
u(B.E,[A.FJ,A.a8U,A.afn,A.afo,A.Aj,A.bIn,A.blX,A.amg,A.aHy,A.ls,A.aiX,A.nR])
t(A.aja,B.O)
t(A.FK,A.aja)
t(A.a8R,B.a_)
t(A.a56,A.a8R)
t(A.rR,A.a8U)
t(A.bf8,A.bIn)
t(A.aRp,A.aHy)
t(A.c11,B.dj)
w(A.a8R,A.Aj)
w(A.a8S,A.afo)
v(A.a8U,A.afn)})()
B.cC(b.typeUniverse,JSON.parse('{"FK":{"O":[],"h":[]},"a57":{"L3":["1","rR<1>"],"aF":[]},"a56":{"Aj":["rR<1>","FJ<1>","FK<1>"],"a_":["FK<1>"],"Aj.0":"rR<1>"},"L3":{"aF":[]},"aja":{"O":[],"h":[]}}'))
B.Rc(b.typeUniverse,JSON.parse('{"a8R":1,"a8S":1,"a8U":1,"afn":1,"afo":2}'))
var y={a:"`MapCamera.of()` should not be called outside a `FlutterMap` and its descendants"}
var x=(function rtii(){var w=B.J
return{o:w("nR"),v:w("ls"),L:w("x<ls>"),W:w("x<v<ls>>"),a:w("x<v<c0<b9>>>"),g:w("x<y>"),p:w("x<XK>"),h:w("x<em>"),t:w("x<X>"),U:w("v<ls>"),w:w("hY"),n:w("y"),X:w("c0<X>"),H:w("c0<b9>"),i:w("X"),S:w("w"),O:w("E?")}})();(function constants(){E.aaN=new B.D2(1,"src")
E.qm=new A.amg()
E.a0n=new A.b2r(0,"none")
E.a4g=new A.b3H(0,"centroid")
E.fCu=new A.blJ(0,"triangles")})()};
(a=>{a["Ta5/c1euzm3qxH5II8/I84aKXAk="]=a.current})($__dart_deferred_initializers__);