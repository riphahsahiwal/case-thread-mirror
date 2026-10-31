((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,E,B={zI:function zI(d){this.a=d},
a8p(d){var w,v
for(w=0;w<5;++w){v=D.DG[w]
if(v.a===d)return v.b}return B.cE2(d)},
cE2(d){var w,v=D.o.o8(d,A.ck("[_\\-\\s]+",!0,!1)),u=A.a6(v),t=u.i("dG<1,h>")
v=A.J(new A.dG(new A.ak(v,new B.bUU(),u.i("ak<1>")),new B.bUV(),t),t.i("z.E"))
v.$flags=1
w=v
if(w.length===0)return"Unknown"
return D.i.bd(w," ")},
bUU:function bUU(){},
bUV:function bUV(){},
alW(d){var w=A.T(d.h(0,"id")),v=A.a7(d.h(0,"display_name"))
if(v==null)v=""
return new B.ix(w,v,A.a7(d.h(0,"avatar_url")),A.a7(d.h(0,"username")),A.a7(d.h(0,"bio")),A.a7(d.h(0,"niche")))},
ix:function ix(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mY:function mY(d,e){this.b=d
this.c=e},
w6:function w6(d){this.a=d},
b29:function b29(d){this.a=d},
b28:function b28(){},
bYN:function bYN(){}},C
J=c[1]
A=c[0]
D=c[2]
E=c[35]
B=a.updateHolder(c[77],B)
C=c[202]
B.zI.prototype={}
B.ix.prototype={
gbG(){return this.a}}
B.mY.prototype={
guO(){return this.b}}
B.w6.prototype={
Od(d,e){return this.aBQ(d,e)},
aBQ(d,e){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Od=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
l=r.a
k=l.gca().e.a
k=k==null?null:k.r
q=k==null?null:k.a
w=q==null?7:9
break
case 7:g=null
w=8
break
case 9:w=10
return A.e(l.aA("profiles").bo(y.b).b0("id",q).jP(),$async$Od)
case 10:case 8:p=g
l=p
l=A.a7(l==null?null:J.A(l,"display_name"))
if((l==null?null:D.o.aJ(l).length!==0)===!0){l=p
l.toString
j=A.T(J.A(l,"display_name"))}else j=d
o=j
if(p==null){l=q
if(l==null)l=""
u=new B.ix(l,o,null,null,null,null)
w=1
break}n=A.aP(p,x.w,x.b)
J.bf(n,"display_name",o)
l=B.alW(n)
u=l
w=1
break
t=2
w=6
break
case 4:t=3
h=s.pop()
m=A.E(h)
l=A.aA(m)
throw A.n(l)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Od,v)},
Ob(d){return this.aBN(d)},
aBN(d){var w=0,v=A.m(x.r),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Ob=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.e(r.a.aA("profiles").bo(y.b).b0("id",d).jP(),$async$Ob)
case 7:q=f
if(q==null){u=null
w=1
break}o=B.alW(A.aP(q,x.w,x.b))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.E(m)
o=A.aA(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Ob,v)},
Zj(d,e,f,g,h){return this.byi(d,e,f,g,h)},
byi(d,e,a0,a1,a2){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Zj=A.i(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:h=r.a
g=h.gca().e.a
g=g==null?null:g.r
q=g==null?null:g.a
if(q==null)throw A.n(C.tD)
g=x.w
m=x.b
p=A.Q(["updated_at",new A.aH(Date.now(),0,!1).eb().cY()],g,m)
J.bf(p,"display_name",D.o.aJ(e))
l=D.o.aJ(a2).toLowerCase()
k=l.length===0?null:l
J.bf(p,"username",k)
j=D.o.aJ(d)
k=j.length===0?null:j
J.bf(p,"bio",k)
if(a1)J.bf(p,"niche",a0)
t=4
w=7
return A.e(h.aA("profiles").cV(p).b0("id",q).bo(y.b).i2(0),$async$Zj)
case 7:o=a4
h=B.alW(A.aP(o,g,m))
u=h
w=1
break
t=2
w=6
break
case 4:t=3
f=s.pop()
n=A.E(f)
h=r.b2T(n)
throw A.n(h)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Zj,v)},
Bp(){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Bp=A.i(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:d=r.a
a0=d.gca().e.a
a0=a0==null?null:a0.r
k=a0==null?null:a0.a
if(k==null)throw A.n(C.tD)
a2=A
w=3
return A.e(E.aOP(null,D.dZg,!0),$async$Bp)
case 3:j=a2.im(a4)
if(j==null)throw A.n(C.ffu)
w=4
return A.e(j.gND().nU(),$async$Bp)
case 4:q=a4
if(J.aX(q)===0)throw A.n(C.ffq)
if(J.aX(q)>5242880)throw A.n(C.ffs)
i=A.Lm(j.a,$.aBi().a).apa(1)[1]
a0=i.length===0?null:D.o.c0(i,1)
if(a0==null)a0="jpg"
i=a0.toLowerCase()
A:{if("png"===i){a0="image/png"
break A}if("webp"===i){a0="image/webp"
break A}if("gif"===i){a0="image/gif"
break A}a0="image/jpeg"
break A}p=a0
o=k+"/avatar."+i
t=6
d=d.ay
d===$&&A.b()
w=9
return A.e(d.aA("avatars").Bq(o,q,new A.Dk(!0,p)),$async$Bp)
case 9:d=d.aA("avatars")
h=d.QV(o)
g="object"
f=A.cU(d.a+"/"+g+"/public/"+h,0,null)
n=d.arx(f.j(0),null,null)
m=A.q(n)+"?t="+Date.now()
w=10
return A.e(r.Zk(m),$async$Bp)
case 10:d=a4
u=d
w=1
break
t=2
w=8
break
case 6:t=5
a1=s.pop()
l=A.E(a1)
d=A.aA(l)
throw A.n(d)
w=8
break
case 5:w=2
break
case 8:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Bp,v)},
Fr(){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Fr=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.a
j=k.gca().e.a
j=j==null?null:j.r
q=j==null?null:j.a
if(q==null)throw A.n(C.tD)
t=4
j=k.ay
j===$&&A.b()
w=7
return A.e(j.aA("avatars").axq(q),$async$Fr)
case 7:p=e
w=J.fL(p)?8:9
break
case 8:j=j.aA("avatars")
m=J.bL(p,new B.b29(q),x.w)
m=A.J(m,m.$ti.i("ai.E"))
w=10
return A.e(j.M(0,m),$async$Fr)
case 10:case 9:j=x.b
w=11
return A.e(k.aA("profiles").cV(A.Q(["avatar_url",null,"updated_at",new A.aH(Date.now(),0,!1).eb().cY()],j,j)).b0("id",q).bo(y.b).i2(0),$async$Fr)
case 11:o=e
j=B.alW(A.aP(o,x.w,j))
u=j
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
n=A.E(i)
k=A.aA(n)
throw A.n(k)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Fr,v)},
Zk(d){return this.byj(d)},
byj(d){var w=0,v=A.m(x.i),u,t=this,s,r,q,p,o
var $async$Zk=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.gca().e.a
q=q==null?null:q.r
s=q==null?null:q.a
if(s==null)throw A.n(C.tD)
q=x.b
p=B
o=A
w=3
return A.e(r.aA("profiles").cV(A.Q(["avatar_url",d,"updated_at",new A.aH(Date.now(),0,!1).eb().cY()],q,q)).b0("id",s).bo(y.b).i2(0),$async$Zk)
case 3:u=p.alW(o.aP(f,x.w,q))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$Zk,v)},
Oe(){var w=0,v=A.m(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Oe=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.a
l=m.gca().e.a
l=l==null?null:l.r
q=l==null?null:l.a
if(q==null){u=A.c([],x.f)
w=1
break}t=4
w=7
return A.e(m.aA("room_members").bo("room_id, role_id, case_rooms!inner(id, name)").b0("user_id",q).b0("status","approved"),$async$Oe)
case 7:p=e
m=J.bL(p,new B.b28(),x.a)
m=A.J(m,m.$ti.i("ai.E"))
u=m
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.E(k)
m=A.aA(o)
throw A.n(m)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Oe,v)},
b2T(d){var w,v=J.bg(d).toLowerCase()
if(!D.o.n(v,"profiles_username_unique"))w=D.o.n(v,"duplicate key")&&D.o.n(v,"username")
else w=!0
if(w)return C.ffr
if(D.o.n(v,"profiles_username_format"))return C.fft
return A.aA(d)}}
var z=a.updateTypes(["mY(aa<h,@>)","w6(al)"])
B.bUU.prototype={
$1(d){return d.length!==0},
$S:11}
B.bUV.prototype={
$1(d){var w=d.toLowerCase()
return w[0].toUpperCase()+D.o.c0(w,1)},
$S:25}
B.b29.prototype={
$1(d){return this.a+"/"+d.a},
$S:1114}
B.b28.prototype={
$1(d){var w=x.w,v=x.b,u=A.aP(d,w,v),t=A.aP(x.B.a(J.A(u,"case_rooms")),w,v)
A.T(J.A(u,"room_id"))
v=A.a7(J.A(t,"name"))
w=v==null?"Untitled room":v
return new B.mY(w,A.T(J.A(u,"role_id")))},
$S:z+0}
B.bYN.prototype={
$1(d){return new B.w6(d.T($.dx(),x.k))},
$S:z+1};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.zI,A.dZ)
v(A.ca,[B.bUU,B.bUV,B.b29,B.b28,B.bYN])
v(A.C,[B.ix,B.mY,B.w6])})()
A.cD(b.typeUniverse,JSON.parse('{"zI":{"aK":[]}}'))
var y={b:"id, display_name, avatar_url, username, bio, niche"}
var x={f:A.I("x<mY>"),v:A.I("v<mY>"),B:A.I("aa<@,@>"),a:A.I("mY"),w:A.I("h"),k:A.I("fY"),i:A.I("ix"),b:A.I("@"),r:A.I("ix?")};(function constants(){C.tD=new A.rI("Not signed in.")
C.ffq=new B.zI("That image is empty.")
C.ffr=new B.zI("That username is taken \u2014 try another.")
C.ffs=new B.zI("Pick an image under 5 MB.")
C.fft=new B.zI("Usernames need 3\u201320 lowercase letters, numbers or _.")
C.ffu=new B.zI("No image selected.")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cT3","R2",()=>A.ej(new B.bYN(),A.I("w6")))})()};
(a=>{a["CXx6YXr2LRvJ18hWIGpGkC9pbYs="]=a.current})($__dart_deferred_initializers__);