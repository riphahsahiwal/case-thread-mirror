((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,E,B={Ad:function Ad(d){this.a=d},
a9k(d){var w,v
for(w=0;w<5;++w){v=D.DR[w]
if(v.a===d)return v.b}return B.cGU(d)},
cGU(d){var w,v=D.o.nj(d,A.cc("[_\\-\\s]+",!0,!1)),u=A.a6(v),t=u.i("dE<1,f>")
v=A.K(new A.dE(new A.ag(v,new B.bXb(),u.i("ag<1>")),new B.bXc(),t),t.i("z.E"))
v.$flags=1
w=v
if(w.length===0)return"Unknown"
return D.i.b4(w," ")},
bXb:function bXb(){},
bXc:function bXc(){},
an3(d){var w=A.U(d.h(0,"id")),v=A.a8(d.h(0,"display_name"))
if(v==null)v=""
return new B.iD(w,v,A.a8(d.h(0,"avatar_url")),A.a8(d.h(0,"username")),A.a8(d.h(0,"bio")),A.a8(d.h(0,"niche")))},
iD:function iD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
nd:function nd(d,e){this.b=d
this.c=e},
wx:function wx(d){this.a=d},
b3O:function b3O(d){this.a=d},
b3N:function b3N(){},
c0a:function c0a(){}},C
J=c[1]
A=c[0]
D=c[2]
E=c[35]
B=a.updateHolder(c[78],B)
C=c[208]
B.Ad.prototype={}
B.iD.prototype={
gbE(){return this.a}}
B.nd.prototype={
gBr(){return this.b}}
B.wx.prototype={
Oy(d,e){return this.aCz(d,e)},
aCz(d,e){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Oy=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
l=r.a
k=l.gcb().e.a
k=k==null?null:k.r
q=k==null?null:k.a
w=q==null?7:9
break
case 7:g=null
w=8
break
case 9:w=10
return A.e(l.az("profiles").bn(y.b).aY("id",q).jt(),$async$Oy)
case 10:case 8:p=g
l=p
l=A.a8(l==null?null:J.A(l,"display_name"))
if((l==null?null:D.o.aH(l).length!==0)===!0){l=p
l.toString
j=A.U(J.A(l,"display_name"))}else j=d
o=j
if(p==null){l=q
if(l==null)l=""
u=new B.iD(l,o,null,null,null,null)
w=1
break}n=A.aM(p,x.w,x.b)
J.bg(n,"display_name",o)
l=B.an3(n)
u=l
w=1
break
t=2
w=6
break
case 4:t=3
h=s.pop()
m=A.G(h)
l=A.aC(m)
throw A.n(l)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Oy,v)},
Ow(d){return this.aCw(d)},
aCw(d){var w=0,v=A.m(x.r),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Ow=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.e(r.a.az("profiles").bn(y.b).aY("id",d).jt(),$async$Ow)
case 7:q=f
if(q==null){u=null
w=1
break}o=B.an3(A.aM(q,x.w,x.b))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.G(m)
o=A.aC(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Ow,v)},
ZD(d,e,f,g,h){return this.bzq(d,e,f,g,h)},
bzq(d,e,a0,a1,a2){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ZD=A.i(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:h=r.a
g=h.gcb().e.a
g=g==null?null:g.r
q=g==null?null:g.a
if(q==null)throw A.n(C.tM)
g=x.w
m=x.b
p=A.Q(["updated_at",new A.aE(Date.now(),0,!1).d6().d_()],g,m)
J.bg(p,"display_name",D.o.aH(e))
l=D.o.aH(a2).toLowerCase()
k=l.length===0?null:l
J.bg(p,"username",k)
j=D.o.aH(d)
k=j.length===0?null:j
J.bg(p,"bio",k)
if(a1)J.bg(p,"niche",a0)
t=4
w=7
return A.e(h.az("profiles").cX(p).aY("id",q).bn(y.b).i2(0),$async$ZD)
case 7:o=a4
h=B.an3(A.aM(o,g,m))
u=h
w=1
break
t=2
w=6
break
case 4:t=3
f=s.pop()
n=A.G(f)
h=r.b3P(n)
throw A.n(h)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$ZD,v)},
BG(){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$BG=A.i(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:d=r.a
a0=d.gcb().e.a
a0=a0==null?null:a0.r
k=a0==null?null:a0.a
if(k==null)throw A.n(C.tM)
a2=A
w=3
return A.e(E.aQu(null,D.dZu,!0),$async$BG)
case 3:j=a2.ia(a4)
if(j==null)throw A.n(C.fg1)
w=4
return A.e(j.gNY().o5(),$async$BG)
case 4:q=a4
if(J.aY(q)===0)throw A.n(C.ffY)
if(J.aY(q)>5242880)throw A.n(C.fg_)
i=A.M4(j.a,$.aCu().a).apD(1)[1]
a0=i.length===0?null:D.o.bY(i,1)
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
return A.e(d.az("avatars").BH(o,q,new A.DT(!0,p)),$async$BG)
case 9:d=d.az("avatars")
h=d.Rg(o)
g="object"
f=A.cY(d.a+"/"+g+"/public/"+h,0,null)
n=d.as_(f.j(0),null,null)
m=A.q(n)+"?t="+Date.now()
w=10
return A.e(r.ZE(m),$async$BG)
case 10:d=a4
u=d
w=1
break
t=2
w=8
break
case 6:t=5
a1=s.pop()
l=A.G(a1)
d=A.aC(l)
throw A.n(d)
w=8
break
case 5:w=2
break
case 8:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$BG,v)},
FI(){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$FI=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.a
j=k.gcb().e.a
j=j==null?null:j.r
q=j==null?null:j.a
if(q==null)throw A.n(C.tM)
t=4
j=k.ay
j===$&&A.b()
w=7
return A.e(j.az("avatars").ay1(q),$async$FI)
case 7:p=e
w=J.fV(p)?8:9
break
case 8:j=j.az("avatars")
m=J.bX(p,new B.b3O(q),x.w)
m=A.K(m,m.$ti.i("aj.E"))
w=10
return A.e(j.M(0,m),$async$FI)
case 10:case 9:j=x.b
w=11
return A.e(k.az("profiles").cX(A.Q(["avatar_url",null,"updated_at",new A.aE(Date.now(),0,!1).d6().d_()],j,j)).aY("id",q).bn(y.b).i2(0),$async$FI)
case 11:o=e
j=B.an3(A.aM(o,x.w,j))
u=j
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
n=A.G(i)
k=A.aC(n)
throw A.n(k)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$FI,v)},
ZE(d){return this.bzr(d)},
bzr(d){var w=0,v=A.m(x.i),u,t=this,s,r,q,p,o
var $async$ZE=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.gcb().e.a
q=q==null?null:q.r
s=q==null?null:q.a
if(s==null)throw A.n(C.tM)
q=x.b
p=B
o=A
w=3
return A.e(r.az("profiles").cX(A.Q(["avatar_url",d,"updated_at",new A.aE(Date.now(),0,!1).d6().d_()],q,q)).aY("id",s).bn(y.b).i2(0),$async$ZE)
case 3:u=p.an3(o.aM(f,x.w,q))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$ZE,v)},
Oz(){var w=0,v=A.m(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Oz=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.a
l=m.gcb().e.a
l=l==null?null:l.r
q=l==null?null:l.a
if(q==null){u=A.c([],x.f)
w=1
break}t=4
w=7
return A.e(m.az("room_members").bn("room_id, role_id, case_rooms!inner(id, name)").aY("user_id",q).aY("status","approved"),$async$Oz)
case 7:p=e
m=J.bX(p,new B.b3N(),x.a)
m=A.K(m,m.$ti.i("aj.E"))
u=m
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.G(k)
m=A.aC(o)
throw A.n(m)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Oz,v)},
b3P(d){var w,v=J.bd(d).toLowerCase()
if(!D.o.n(v,"profiles_username_unique"))w=D.o.n(v,"duplicate key")&&D.o.n(v,"username")
else w=!0
if(w)return C.ffZ
if(D.o.n(v,"profiles_username_format"))return C.fg0
return A.aC(d)}}
var z=a.updateTypes(["nd(ac<f,@>)","wx(al)"])
B.bXb.prototype={
$1(d){return d.length!==0},
$S:10}
B.bXc.prototype={
$1(d){var w=d.toLowerCase()
return w[0].toUpperCase()+D.o.bY(w,1)},
$S:18}
B.b3O.prototype={
$1(d){return this.a+"/"+d.a},
$S:1132}
B.b3N.prototype={
$1(d){var w=x.w,v=x.b,u=A.aM(d,w,v),t=A.aM(x.B.a(J.A(u,"case_rooms")),w,v)
A.U(J.A(u,"room_id"))
v=A.a8(J.A(t,"name"))
w=v==null?"Untitled room":v
return new B.nd(w,A.U(J.A(u,"role_id")))},
$S:z+0}
B.c0a.prototype={
$1(d){return new B.wx(d.T($.dB(),x.k))},
$S:z+1};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.Ad,A.e6)
v(A.ci,[B.bXb,B.bXc,B.b3O,B.b3N,B.c0a])
v(A.E,[B.iD,B.nd,B.wx])})()
A.cD(b.typeUniverse,JSON.parse('{"Ad":{"aI":[]}}'))
var y={b:"id, display_name, avatar_url, username, bio, niche"}
var x={f:A.J("x<nd>"),v:A.J("w<nd>"),B:A.J("ac<@,@>"),a:A.J("nd"),w:A.J("f"),k:A.J("h5"),i:A.J("iD"),b:A.J("@"),r:A.J("iD?")};(function constants(){C.tM=new A.t5("Not signed in.")
C.ffY=new B.Ad("That image is empty.")
C.ffZ=new B.Ad("That username is taken \u2014 try another.")
C.fg_=new B.Ad("Pick an image under 5 MB.")
C.fg0=new B.Ad("Usernames need 3\u201320 lowercase letters, numbers or _.")
C.fg1=new B.Ad("No image selected.")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cW9","RS",()=>A.ep(new B.c0a(),A.J("wx")))})()};
(a=>{a["9szJ3qrOGWpRppZGEint5j2NNEI="]=a.current})($__dart_deferred_initializers__);