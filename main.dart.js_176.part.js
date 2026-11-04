((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={bjN:function bjN(d,e){this.a=d
this.b=e},
cEh(d,e,f,g,h,i,j){var w=g.a,v=g.b,u=j.b,t=u.c,s=u.a.c.gaO()
if(i===0){u=t/2
if(w+u<0||w-u>e.a)return null
u=s/2
if(v+u<0||v-u>e.b)return null}if(d.a.a-d.b.a-f>t)return new A.bVA(!1,w,v,i,j,t,s)
return null},
cEF(d,e){var w
switch(d.a){case 0:w=A.cEC(e)
break
case 1:w=A.cEJ(e)
break
default:w=null}return w},
cEC(d){var w=B.a6(d).i("a9<1,X>")
return new F.hQ(A.cd6(new B.a9(d,new A.bVL(),w)),A.cd6(new B.a9(d,new A.bVM(),w)))},
cEJ(d){var w,v,u=x.H,t=J.h4(4,u)
for(w=0;w<4;++w){v=d[w]
t[w]=new D.bY(v.b,v.a,u)}u=A.cKw(B.c([t],x.a),0.0001).a
return new F.hQ(u.b,u.a)},
cxj(d,e,f,g,h){var w=A.cxl(g)
w=w
return new A.Fl(g,f,e,d,w,h.i("Fl<0>"))},
cxl(d){var w,v,u,t
for(w=0,v=0;v<4;){u=d[v];++v
t=d[v%4]
w+=(t.b-u.b)*(t.a+u.a)}return w>=0},
cxk(d,e,f){return new A.Fm(e,0.3,d,f.i("Fm<0>"))},
cDg(d,e,f){return new A.rw(e,B.zt(4,new A.bHF(d,e),!1,x.v),new A.bHG(e,d).$0(),f.i("rw<0>"))},
bVA:function bVA(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bVL:function bVL(){},
bVM:function bVM(){},
a4m:function a4m(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i
_.a8k$=j
_.b=k
_.c=l
_.d=m
_.a=n
_.$ti=o},
bH9:function bH9(d,e,f){this.a=d
this.b=e
this.c=f},
bHa:function bHa(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b28:function b28(d,e){this.a=d
this.b=e},
Fl:function Fl(d,e,f,g,h,i){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.ay=h
_.db=_.cy=_.cx=_.CW=_.ch=null
_.$ti=i},
Fm:function Fm(d,e,f,g){var _=this
_.e=d
_.c=e
_.a=f
_.$ti=g},
a4l:function a4l(d,e,f,g,h){var _=this
_.a8h$=d
_.a8i$=e
_.a8j$=f
_.avg$=g
_.c=_.a=null
_.$ti=h},
bH8:function bH8(d,e){this.a=d
this.b=e},
rw:function rw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
bHF:function bHF(d,e){this.a=d
this.b=e},
bHG:function bHG(d,e){this.a=d
this.b=e},
a87:function a87(){},
a88:function a88(){},
a8a:function a8a(){},
aev:function aev(){},
KE:function KE(){},
aew:function aew(){},
A1:function A1(){},
b2Q:function b2Q(){},
aik:function aik(){},
bk1(d,e,f,g,h,i){var w
if(d<f)w=1
else w=d>h?2:0
if(e<g)w|=4
else if(e>i)w|=8
return w},
cBM(d,e,f,g){var w,v,u,t=-g/2,s=g/2,r=f.a+s,q=f.b+s,p=d.a,o=d.b,n=e.a,m=e.b,l=A.bk1(p,o,t,t,r,q),k=A.bk1(n,m,t,t,r,q)
for(;;){if((l|k)===0)return new A.bk0(new B.y(p,o),new B.y(n,m))
if((l&k)!==0)return null
w=l!==0?l:k
if((w&8)!==0){v=p+(n-p)*(q-o)/(m-o)
u=q}else if((w&4)!==0){v=p+(n-p)*(t-o)/(m-o)
u=t}else if((w&2)!==0){u=o+(m-o)*(r-p)/(n-p)
v=r}else{if((w&1)!==0)u=o+(m-o)*(t-p)/(n-p)
else return null
v=t}if(w===l){l=A.bk1(v,u,t,t,r,q)
o=u
p=v}else{k=A.bk1(v,u,t,t,r,q)
m=u
n=v}}},
bda:function bda(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.Q=_.z=_.y=_.x=_.w=_.r=$},
bdb:function bdb(d,e){this.a=d
this.b=e},
bGq:function bGq(){},
bk0:function bk0(d,e){this.a=d
this.b=e},
alu:function alu(){},
b0U:function b0U(d,e){this.a=d
this.b=e},
c3w(d,e){return new A.aQf(d,e)},
aGo:function aGo(){},
aQf:function aQf(d,e){this.a=d
this.b=e},
c7r(d,e,f){var w=d.a.brB(f,256*Math.pow(2,d.e))
return new B.y(w.a-e.a,w.b-e.b)},
bZn(d,e,f,g){var w,v,u,t=256*Math.pow(2,d.e),s=e==null||J.ex(e)?g:J.cq_(g,J.c9C(e,new A.bZo(),x.v)),r=-f.a,q=-f.b,p=J.av(s),o=p.gu(s),n=B.bm(o,C.L,!0,x.n)
for(w=0;w<o;++w){v=p.dK(s,w)
u=G.mf.Bv(v.a,v.b,t)
n[w]=new B.y(u.a+r,u.b+q)}return n},
bZo:function bZo(){},
cJr(d,e,f,g,h,i){var w,v=h-f,u=i-g
if(v!==0||u!==0){w=((d-f)*v+(e-g)*u)/(v*v+u*u)
if(w>1){v=d-h
u=e-i
return v*v+u*u}else if(w>0){v=d-(f+v*w)
u=e-(g+u*w)
return v*v+u*u}}v=d-f
u=e-g
return v*v+u*u},
c6X(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=J.av(d),n=o.h(d,e),m=o.h(d,f),l=B.cq()
for(w=e+1,v=n.a,u=n.b,t=m.a,s=m.b,r=g;w<f;++w){q=o.h(d,w)
p=A.cJr(q.a,q.b,v,u,t,s)
if(p>r){l.b=w
r=p}}if(r>g){if(l.b2()-e>1)A.c6X(d,e,l.b2(),g,h)
h.push(o.h(d,l.b2()))
if(f-l.b2()>1)A.c6X(d,l.b2(),f,g,h)}},
clq(d,e,f){var w,v,u=J.av(e)
if(u.gu(e)<=4)return e
w=u.gu(e)-1
v=B.c([u.h(e,0)],x.L)
A.c6X(e,0,w,f*f,v)
v.push(u.h(e,w))
return v},
cJn(d,e,f,g){var w,v,u,t,s,r
if(f<=0)return 0
w=256*Math.pow(2,g)
v=G.mf.abe(0,0,w)
u=f*e
t=G.mf.abe(u,u,w)
s=t.a-v.a
r=t.b-v.b
return Math.sqrt(s*s+r*r)},
lo:function lo(d,e){this.a=d
this.b=e},
c2M(d,e,f){var w=A.a8W(d,f),v=new A.nH(d,e,w)
v.d=w+e*1.4142135623730951
return v},
a8W(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
ai7:function ai7(d,e){this.a=d
this.b=e},
nH:function nH(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
cKw(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=0,v=0,u=0,t=0,s=0;r=a5[0],s<r.length;++s){q=r[s]
r=s!==0
if(!r||q.a<w)w=q.a
if(!r||q.b<v)v=q.b
if(!r||q.a>u)u=q.a
if(!r||q.b>t)t=q.b}p=u-w
o=t-v
n=Math.min(p,o)
m=n/2
if(n===0)return new A.ai7(new D.bY(w,v,x.H),0)
l=B.ccp(new A.c_m(),x.o)
for(r=x.H,k=m*1.4142135623730951,j=w;j<u;j+=n)for(i=j+m,h=v;h<t;h+=n){g=new D.bY(i,h+m,r)
f=A.a8W(g,a5)
g=new A.nH(g,m,f)
g.d=f+k;++l.d
l.Jb(g)}e=A.cFy(a5)
d=A.c2M(new D.bY(w+p/2,v+o/2,r),0,a5)
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
a3=A.a8W(a2,a5)
a2=new A.nH(a2,m,a3)
a4=m*1.4142135623730951
a2.d=a3+a4;++l.d
l.Jb(a2)
i+=m
f=new D.bY(i,f,r)
a2=A.a8W(f,a5)
f=new A.nH(f,m,a2)
f.d=a2+a4;++l.d
l.Jb(f)
k+=m
g=new D.bY(g,k,r)
f=A.a8W(g,a5)
g=new A.nH(g,m,f)
g.d=f+a4;++l.d
l.Jb(g)
k=new D.bY(i,k,r)
i=A.a8W(k,a5)
k=new A.nH(k,m,i)
k.d=i+a4;++l.d
l.Jb(k)
a0+=4}return new A.ai7(e.a,e.c)},
cFy(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d[0]
for(w=i.length,v=w-1,u=0,t=0,s=0,r=0;r<w;q=r+1,v=r,r=q){p=i[r]
o=i[v]
n=p.a
m=o.b
l=o.a
k=p.b
j=n*m-l*k
t+=(n+l)*j
s+=(k+m)*j
u+=j*3}if(u===0)return A.c2M(i[0],0,d)
return A.c2M(new D.bY(t/u,s/u,x.H),0,d)},
c_m:function c_m(){},
cd6(d){var w,v,u,t,s
for(w=d.$ti,v=new B.c_(d,d.gu(0),w.i("c_<aj.E>")),w=w.i("aj.E"),u=0,t=0;v.q();){s=v.d
if(s==null)s=w.a(s);++t
u+=(s-u)/t}if(t===0)throw B.n(B.at("No elements"))
return u},
cvw(d){var w,v,u,t,s,r,q,p
for(w=180,v=-180,u=90,t=-90,s=0;s<4;++s){r=d[s]
q=r.b
if(q<w)w=q
if(q>v)v=q
p=r.a
if(p<u)u=p
if(p>t)t=p}return new D.VL(t,u,v,w)},
ckW(d,e){var w,v,u,t,s,r,q,p,o,n=e.length,m=d.a,l=d.b
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
E=c[171]
D=c[31]
G=c[147]
F=c[30]
A.bjN.prototype={
H(){return"VertexMode."+this.b}}
A.a4m.prototype={
bnn(d,e,f){var w,v,u,t=d.a.gml(),s=e.b,r=!1
if(s>=t.d)if(s<=t.c){s=e.a
t=s>=t.b&&s<=t.a}else t=r
else t=r
if(!t)return!1
t=this.a8k$
t===$&&B.b()
w=A.bZn(this.b,null,t,d.b)
if(!C.i.ga9(w).k(0,C.i.gaJ(w)))w.push(C.i.ga9(w))
v=A.ckW(f,w)
u=J.fg(d.c)&&new A.bH9(this,d,f).$0()
if(!(v&&!u))t=!v&&u
else t=!0
return t},
aX(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4={},a5=B.c([],x.g),a6=$.ap().r,a7=x.h,a8=B.c([],a7),a9=new B.c8(a6,C.aB,a3,a3,a8),b0=new B.c8(a6,C.aB,a3,a3,B.c([],a7))
a4.a=a4.b=null
w=new A.bHa(a4,a2,a5,b1,a9,b0)
a7=a2.b
v=D.b1Z(a7.Ba(a7.d).a4(0,D.na(a7.gG(),2)))
for(a6=a2.f,u=a2.r,t=x.n,s=a7.f,r=s*0.017453292519943295,q=a7.r,p=u==null,o=0;o<=a6.length-1;++o){n=a6[o]
m=n.b
if(J.ex(m))continue
l=n.a
k=p?a3:u[o]
j=k!=null
i=A.bZn(a7,j?n.c:a3,v,m)
h=l.gazp()
g=(l.c.A()>>>24&255)/255
if(a4.a===h)f=g>0&&g<1
else f=!0
if(f)w.$0()
a4.b=l
a4.a=h
if(j){e=k.length
for(d=0;d<e;++d)a5.push(i[k[d]])}else{j=B.J(i,t)
j=new B.Rz(j,!0)
a8.push(j)
f=a9.f
if(f!=null)j.fj(f)
j=a9.e
if(j!=null)j.a.delete()
a9.e=null}j=l.d
if(j>0)a2.aMW(b0,l,A.bZn(a7,a3,v,m),b2,b1,a2.aiQ(l),j)
m=l.gazS()!=null
if(m){m=a7.w
if(m==null)m=a7.w=D.cdy(s,q)
j=l.ch
j=A.c7r(a7,v,j==null?l.ch=A.cEF(E.a3R,l.a):j)
f=a2.aVN(v,l)
a0=l.gazS()
a0.toString
a1=A.cEh(f,m,20,j,!1,r,a0)
if(a1!=null){w.$0()
a1.$1(b1)}}}w.$0()},
aiQ(d){var w
$.ap()
w=B.bj()
w.r=d.e.gp()
w.c=d.d
w.d=C.lW
w.e=C.tb
w.b=C.cj
return w},
aMW(d,e,f,g,h,i,j){var w,v
if(E.qi.k(0,E.qi)){w=B.c([],x.t)
v=new A.bda(f,!0,w,g,E.a_Z,j)
v.aMs(g,!0,f,E.a_Z,w,j)
v.bhD(B.c([d],x.p))}},
aVN(d,e){var w=e.gml(),v=this.b,u=A.c7r(v,d,new F.hQ(w.b,w.d))
return new B.av_(A.c7r(v,d,new F.hQ(w.a,w.c)),u)},
f7(d){var w,v,u=this,t=!0
if(u.f===d.f){w=u.r
v=d.r
if(w==null?v==null:w===v)if(u.b.k(0,d.b)){t=u.w.k(0,d.w)
t=!t}}return t}}
A.b28.prototype={
H(){return"PolygonLabelPlacement."+this.b}}
A.Fl.prototype={
gml(){var w=this.CW
return w==null?this.CW=A.cvw(this.a):w},
gazS(){return null},
k(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof A.Fl&&v.c.k(0,e.c)&&v.d===e.d&&v.e.k(0,e.e)&&E.qi.k(0,E.qi)&&C.m1.k(0,C.m1)&&B.dU(null,null)&&B.dU(v.a,e.a)
else w=!0
return w},
gazp(){var w=this,v=w.cy
return v==null?w.cy=B.ac(w.c,w.d,w.e,!1,E.qi,null,C.lW,C.tb,w.ay,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b):v},
gt(d){var w=this,v=w.db
if(v==null){v=B.J(w.a,x.O)
v.push(null)
v.push(C.m1)
v.push(E.a3R)
v.push(!1)
v.push(w.gazp())
v=w.db=B.aE(v)}return v}}
A.Fm.prototype={
Y(){var w=this.$ti
return new A.a4l($,null,B.C(x.S,w.i("z<rw<1>>")),null,w.i("a4l<1>"))}}
A.a4l.prototype={
aES(d,e){var w,v=A.clq(!0,d.b,e),u=d.c,t=J.av(u),s=t.gu(u),r=J.iM(s,x.U)
for(w=0;w<s;++w)r[w]=A.clq(!0,t.h(u,w),e)
return new A.rw(d.a,v,r,this.$ti.i("rw<1>"))},
C(d){var w,v,u,t=this,s=null
t.aGY(d)
w=D.vZ(d,G.mU)
v=w==null?s:w.a
if(v==null)v=B.ab(B.at(y.a))
t.a.toString
w=t.a8h$
w===$&&B.b()
w=J.dB(w,new A.bH8(t,v))
u=B.J(w,w.$ti.i("z.E"))
t.a.toString
w=t.$ti
return new D.Ln(B.hw(s,s,s,new A.a4m(u,s,v.gaAw(),!0,!1,!1,$,v,s,B.c([],w.i("x<1>")),s,w.i("a4m<1>")),new B.S(v.gG().a,v.gG().b)),s)}}
A.rw.prototype={}
A.a87.prototype={
b_(d){this.bg(d)
this.a8i$=null
this.a8j$.a0(0)}}
A.a88.prototype={
wW(d){var w=this.b
this.a8k$=D.b1Z(w.Ba(w.d)).a4(0,D.b1Z(w.gG()).c2(0,2))
return this.aGj(d)}}
A.a8a.prototype={}
A.aev.prototype={}
A.KE.prototype={
wW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
C.i.a0(i.d)
w=d.a
v=d.b
u=x.X
t=new D.bY(w,v,u)
s=i.b
r=s.r
q=s.a
p=s.e
o=q.Mc(s.d,p)
n=o.a4(0,new D.bY(r.a/2-w,r.b/2-v,u))
m=q.ayF(s.f!==0?s.azK(o,n):n,p)
for(w=i.f,l=w.length-1,k=!1;l>=0;--l){j=w[l]
if(k)j.toString
if(k)continue
k=i.bnn(j,m,t)
if(k)j.toString}if(!k)return!1
return!0}}
A.aew.prototype={}
A.A1.prototype={
C(d){var w,v,u,t,s,r,q,p=this,o=D.vZ(d,G.mU),n=o==null?null:o.a
if(n==null)n=B.ab(B.at(y.a))
o=p.a
o.toString
w=o.e
v=p.a8i$
if(v==null){o=p.$ti
u=J.iM(1,o.i("A1.0"))
for(o=o.c,t=0;t<1;++t)u[t]=A.cDg(G.ad8,w[t],o)
p.a8i$=u
v=u}if(p.a.c===0)p.a8h$=v
else{s=B.aA(d,C.e2,x.w).w.b
if(s!==p.avg$){p.avg$=s
p.a8j$.a0(0)}o=p.a8j$
r=C.m.ek(n.e)
q=o.h(0,r)
if(q==null){q=p.ap_(n,s,p.a.c,v)
o.l(0,r,q)
o=q}else o=q
p.a8h$=o}return new B.ef(new A.b2Q(),null)},
ap_(d,e,f,g){return new B.id(this.bd1(d,e,f,g),this.$ti.i("id<A1.0>"))},
bd1(d,e,f,g){var w=this
return function(){var v=d,u=e,t=f,s=g
var r=0,q=1,p=[],o,n,m
return function $async$ap_(h,i,j){if(i===1){p.push(j)
r=q}for(;;)switch(r){case 0:m=A.cJn(v.a,u,t,C.m.ek(v.e))
o=s.length,n=0
case 2:if(!(n<o)){r=4
break}r=5
return h.b=w.aES(s[n],m),1
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return h.c=p.at(-1),3}}}}}
A.aik.prototype={}
A.bda.prototype={
bhD(d){var w,v,u,t,s,r,q,p,o,n,m={},l=this.a,k=J.av(l)
if(k.gu(l)<2)return
m.a=B.c([],x.g)
w=new A.bdb(m,d)
v=this.d
u=this.f
t=null
s=null
r=0
for(;;){q=k.gu(l)
if(!(r<q-1+1))break
A:{p=r+1
o=A.cBM(k.h(l,r),k.h(l,C.f.aC(p,k.gu(l))),v,u)
if(o==null)break A
q=o.a
if(t!==q.a||s!==q.b){w.$0()
m.a.push(q)}q=m.a
n=o.b
q.push(n)
t=n.a
s=n.b}r=p}w.$0()},
aBK(){return 1}}
A.bGq.prototype={
aMs(d,e,f,g,h,i){var w,v=this,u=v.aWv()
v.w!==$&&B.b8()
v.w=u
u=v.c
w=v.aWK(u)
v.z!==$&&B.b8()
v.z=w
v.y=u.length-1
v.x=0
v.bte()
u=v.aBK()
v.r!==$&&B.b8()
v.r=u},
bte(){var w,v=this,u=v.c,t=u.length
if(t===0)return
w=v.y
w===$&&B.b()
t=C.f.aC(w+1,t)
v.y=t
v.x=u[t]},
aWv(){var w,v,u,t,s,r,q=this.a,p=J.av(q)
if(p.gu(q)<2)return 0
for(w=0,v=1;v<p.gu(q);++v){u=p.h(q,v-1)
t=p.h(q,v)
s=u.a-t.a
r=u.b-t.b
w+=Math.sqrt(s*s+r*r)}q=J.c27(p.gaJ(q),p.ga9(q)).gdW()
return w+q},
aWK(d){var w,v,u
for(w=d.length,v=0,u=0;u<w;++u)v=C.m.a_(v,d[u])
return v}}
A.bk0.prototype={
j(d){return"VisibleSegment("+this.a.j(0)+", "+this.b.j(0)+")"}}
A.alu.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=e instanceof A.alu
else w=!0
return w},
gt(d){return B.ac(null,null,null,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
A.b0U.prototype={
H(){return"PatternFit."+this.b}}
A.aGo.prototype={}
A.aQf.prototype={
bos(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this.b,a1=x.X,a2=new D.bY(a0.a,a0.b,a1),a3=new D.bY(a0.c,a0.d,a1)
a0=this.a
w=a0.a
v=a0.d
u=a0.b
a0=a0.c
t=a4.r.a4(0,a2.a_(0,a3))
s=Math.max(0,t.a)
r=Math.max(0,t.b)
q=a4.e
p=D.uV(a4.mK(new F.hQ(u,a0),q),a4.mK(new F.hQ(w,v),q),x.i)
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
g=D.na(a3.a4(0,a2),2)
f=a4.mK(new F.hQ(u,v),h)
e=a4.mK(new F.hQ(w,a0),h)
if(n){a0=p*0.017453292519943295
a1=-a0
d=D.LZ(D.na(D.LZ(f,a1).a_(0,D.LZ(e,a1)),2).a_(0,g),a0)}else d=D.na(f.a_(0,e),2).a_(0,g)
return a4.aAA(a4.BB(d,h),h)}}
A.lo.prototype={
a4(d,e){return new A.lo(this.a-e.a,this.b-e.b)},
j(d){return"DoublePoint("+B.r(this.a)+", "+B.r(this.b)+")"}}
A.ai7.prototype={
j(d){return B.R(this).j(0)+"("+this.a.j(0)+", distance: "+B.r(this.b)+")"}}
A.nH.prototype={}
var z=a.updateTypes(["X(hQ)","lo(v)","w<w<lo>>()","w<lo>(w<lo>)","v(nH,nH)"])
A.bVA.prototype={
$1(d){var w=this
w.e.aX(d,new B.y(w.b-w.f/2,w.c-w.r/2))},
$S:1109}
A.bVL.prototype={
$1(d){return d.a},
$S:z+0}
A.bVM.prototype={
$1(d){return d.b},
$S:z+0}
A.bH9.prototype={
$0(){var w,v,u,t,s,r,q
for(w=J.aP(this.b.c),v=this.c,u=this.a,t=u.b;w.q();){s=w.gI()
r=u.a8k$
r===$&&B.b()
q=A.bZn(t,null,r,s)
s=C.i.ga9(q)
r=C.i.gaJ(q)
if(!(r.a===s.a&&r.b===s.b))q.push(C.i.ga9(q))
if(A.ckW(v,q))return!0}return!1},
$S:8}
A.bHa.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this,n=o.a,m=n.b
if(m==null)return
w=m.c
$.ap()
v=B.bj()
v.b=C.ci
v.r=w.gp()
u=o.c
t=u.length
if(t!==0){s=new Float32Array(t*2)
for(r=0;r<t;++r){q=r*2
p=u[r]
s[q]=p.a
s[q+1]=p.b}$.ap()
o.d.bnh(B.crz(E.fAV,s,null,null,null),E.aah,v)}else o.d.hK(o.e,v)
if(m.d>0)o.d.hK(o.f,o.b.aiQ(m))
C.i.a0(o.c)
o.e.jN()
o.f.jN()
n.a=n.b=null},
$S:0}
A.bH8.prototype={
$1(d){var w=d.a.gml(),v=this.b.gaAw()
return!(w.b>v.a||w.a<v.b||w.c<v.d||w.d>v.c)},
$S(){return this.a.$ti.i("B(rw<1>)")}}
A.bHF.prototype={
$1(d){var w=this.a.bvO(this.b.a[d])
return new A.lo(w.a,w.b)},
$S:z+1}
A.bHG.prototype={
$0(){var w=B.c([],x.W)
return w},
$S:z+2}
A.b2Q.prototype={
$1(d){return B.ab(B.dv("Widgets that mix ProjectionSimplificationManagement into their State must call super.build() but must ignore the return value of the superclass."))},
$S:1110}
A.bdb.prototype={
$0(){var w,v,u,t,s,r,q=this.a
if(q.a.length===0)return
for(w=this.b,v=x.n,u=0;u<1;++u){t=w[u]
s=B.J(q.a,v)
s=new B.Rz(s,!1)
t.r.push(s)
r=t.f
if(r!=null)s.fj(r)
s=t.e
if(s!=null)s.a.delete()
t.e=null}q.a=B.c([],x.g)},
$S:0}
A.bZo.prototype={
$1(d){return d},
$S:z+3}
A.c_m.prototype={
$2(d,e){var w,v=e.d
v===$&&B.b()
w=d.d
w===$&&B.b()
return C.m.bn(v,w)},
$S:z+4};(function aliases(){var w=A.KE.prototype
w.aGj=w.wW
w=A.A1.prototype
w.aGY=w.C})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.hp,[A.bjN,A.b28,A.b0U])
u(B.cA,[A.bVA,A.bVL,A.bVM,A.bH8,A.bHF,A.b2Q,A.bZo])
t(A.KE,B.ys)
t(A.a88,A.KE)
t(A.a4m,A.a88)
u(B.dy,[A.bH9,A.bHa,A.bHG,A.bdb])
u(B.D,[A.Fl,A.a8a,A.aev,A.aew,A.A1,A.bGq,A.bk0,A.alu,A.aGo,A.lo,A.ai7,A.nH])
t(A.aik,B.N)
t(A.Fm,A.aik)
t(A.a87,B.Y)
t(A.a4l,A.a87)
t(A.rw,A.a8a)
t(A.bda,A.bGq)
t(A.aQf,A.aGo)
t(A.c_m,B.dI)
w(A.a87,A.A1)
w(A.a88,A.aew)
v(A.a8a,A.aev)})()
B.cW(b.typeUniverse,JSON.parse('{"Fm":{"N":[],"h":[]},"a4m":{"KE":["1","rw<1>"],"aD":[]},"a4l":{"A1":["rw<1>","Fl<1>","Fm<1>"],"Y":["Fm<1>"],"A1.0":"rw<1>"},"KE":{"aD":[]},"aik":{"N":[],"h":[]}}'))
B.QF(b.typeUniverse,JSON.parse('{"a87":1,"a88":1,"a8a":1,"aev":1,"aew":2}'))
var y={a:"`MapCamera.of()` should not be called outside a `FlutterMap` and its descendants"}
var x=(function rtii(){var w=B.O
return{o:w("nH"),v:w("lo"),L:w("x<lo>"),W:w("x<w<lo>>"),a:w("x<w<bY<b7>>>"),g:w("x<y>"),p:w("x<X2>"),h:w("x<e8>"),t:w("x<X>"),U:w("w<lo>"),w:w("i2"),n:w("y"),X:w("bY<X>"),H:w("bY<b7>"),i:w("X"),S:w("v"),O:w("D?")}})();(function constants(){E.aah=new B.Cx(1,"src")
E.qi=new A.alu()
E.a_Z=new A.b0U(0,"none")
E.a3R=new A.b28(0,"centroid")
E.fAV=new A.bjN(0,"triangles")})()};
(a=>{a["4tvV/zu8pWRoAtbMLEsxzd3nBfc="]=a.current})($__dart_deferred_initializers__);