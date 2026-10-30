((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var D,A,E,C,B={
c0F(d,e){var x,w,v,u=d.b,t=e.b
if(u>=t){x=t
t=u
u=x}w=d.a
v=e.a
if(w>=v){x=v
v=w
w=x}return new B.af2(v,w,t,u)},
af2:function af2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c0c(d,e){return new B.aP3(d,e)},
aFA:function aFA(){},
aP3:function aP3(d,e){this.a=d
this.b=e}}
D=c[0]
A=c[2]
E=c[10]
C=c[11]
B=a.updateHolder(c[14],B)
B.af2.prototype={
gt(d){var x=this
return D.a7(x.b,x.a,x.c,x.d,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b)},
k(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.af2&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
else x=!0
return x},
j(d){var x=this
return"LatLngBounds(north: "+D.q(x.a)+", south: "+D.q(x.b)+", east: "+D.q(x.c)+", west: "+D.q(x.d)+")"}}
B.aFA.prototype={}
B.aP3.prototype={
bnT(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b,a0=y.f,a1=new C.ck(d.a,d.b,a0),a2=new C.ck(d.c,d.d,a0)
d=this.a
x=d.a
w=d.d
v=d.b
d=d.c
u=a3.r.a6(0,a1.a0(0,a2))
t=Math.max(0,u.a)
s=Math.max(0,u.b)
r=a3.e
q=C.xq(a3.pa(new E.kt(v,d),r),a3.pa(new E.kt(x,w),r),y.b)
p=q.b.a6(0,q.a)
q=a3.f
o=q!==0
if(o){n=q*0.017453292519943295
m=Math.abs(Math.cos(n))
l=Math.abs(Math.sin(n))
n=p.a
k=p.b
p=new C.ck(n*m+k*l,k*m+n*l,a0)}a0=Math.log(Math.min(t/p.a,s/p.b)*(256*Math.pow(2,r))/256)
t=a3.b
if(t==null)t=0
j=Math.max(t,0)
t=a3.c
if(t==null)t=1/0
i=A.m.aI(a0/0.6931471805599453,j,Math.min(t,1/0))
h=C.vJ(a2.a6(0,a1),2)
g=a3.pa(new E.kt(v,w),i)
f=a3.pa(new E.kt(x,d),i)
if(o){d=q*0.017453292519943295
a0=-d
e=C.KZ(C.vJ(C.KZ(g,a0).a0(0,C.KZ(f,a0)),2).a0(0,h),d)}else e=C.vJ(g.a0(0,f),2).a0(0,h)
return a3.aAc(a3.Nh(e,i),i)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(D.F,[B.af2,B.aFA])
w(B.aP3,B.aFA)})()
var y={f:D.a6("ck<a1>"),b:D.a6("a1")}};
(a=>{a["ZwlRCVwLilZWjRLbESUhjwSgeQA="]=a.current})($__dart_deferred_initializers__);