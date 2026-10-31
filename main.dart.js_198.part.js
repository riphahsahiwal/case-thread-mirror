((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var D,A,B={
c42(d,e){var x,w,v,u=d.b,t=e.b
if(u>=t){x=t
t=u
u=x}w=d.a
v=e.a
if(w>=v){x=v
v=w
w=x}return new B.ag4(v,w,t,u)},
ag4:function ag4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c3y(d,e){return new B.aQ2(d,e)},
aGL:function aGL(){},
aQ2:function aQ2(d,e){this.a=d
this.b=e}},C,E
D=c[0]
A=c[2]
B=a.updateHolder(c[48],B)
C=c[37]
E=c[36]
B.ag4.prototype={
gt(d){var x=this
return D.a9(x.b,x.a,x.c,x.d,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b)},
k(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.ag4&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
else x=!0
return x},
j(d){var x=this
return"LatLngBounds(north: "+D.q(x.a)+", south: "+D.q(x.b)+", east: "+D.q(x.c)+", west: "+D.q(x.d)+")"}}
B.aGL.prototype={}
B.aQ2.prototype={
bp5(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b,a0=y.f,a1=new C.cr(d.a,d.b,a0),a2=new C.cr(d.c,d.d,a0)
d=this.a
x=d.a
w=d.d
v=d.b
d=d.c
u=a3.r.a7(0,a1.a1(0,a2))
t=Math.max(0,u.a)
s=Math.max(0,u.b)
r=a3.e
q=C.yf(a3.pm(new E.kS(v,d),r),a3.pm(new E.kS(x,w),r),y.b)
p=q.b.a7(0,q.a)
q=a3.f
o=q!==0
if(o){n=q*0.017453292519943295
m=Math.abs(Math.cos(n))
l=Math.abs(Math.sin(n))
n=p.a
k=p.b
p=new C.cr(n*m+k*l,k*m+n*l,a0)}a0=Math.log(Math.min(t/p.a,s/p.b)*(256*Math.pow(2,r))/256)
t=a3.b
if(t==null)t=0
j=Math.max(t,0)
t=a3.c
if(t==null)t=1/0
i=A.l.aw(a0/0.6931471805599453,j,Math.min(t,1/0))
h=C.wi(a2.a7(0,a1),2)
g=a3.pm(new E.kS(v,w),i)
f=a3.pm(new E.kS(x,d),i)
if(o){d=q*0.017453292519943295
a0=-d
e=C.M1(C.wi(C.M1(g,a0).a1(0,C.M1(f,a0)),2).a1(0,h),d)}else e=C.wi(g.a1(0,f),2).a1(0,h)
return a3.aAV(a3.NJ(e,i),i)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(D.D,[B.ag4,B.aGL])
w(B.aQ2,B.aGL)})()
var y={f:D.J("cr<Y>"),b:D.J("Y")}};
(a=>{a["5ItDjmqd9GwLKnYnrIwnhcwaIXk="]=a.current})($__dart_deferred_initializers__);