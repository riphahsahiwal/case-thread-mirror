((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,E,B={A6:function A6(d){this.a=d},
a94(d){var w,v
for(w=0;w<5;++w){v=D.DP[w]
if(v.a===d)return v.b}return B.cFN(d)},
cFN(d){var w,v=D.o.oh(d,A.cc("[_\\-\\s]+",!0,!1)),u=A.a6(v),t=u.i("dI<1,f>")
v=A.K(new A.dI(new A.ai(v,new B.bWf(),u.i("ai<1>")),new B.bWg(),t),t.i("z.E"))
v.$flags=1
w=v
if(w.length===0)return"Unknown"
return D.i.b5(w," ")},
bWf:function bWf(){},
bWg:function bWg(){},
amL(d){var w=A.U(d.h(0,"id")),v=A.a8(d.h(0,"display_name"))
if(v==null)v=""
return new B.iD(w,v,A.a8(d.h(0,"avatar_url")),A.a8(d.h(0,"username")),A.a8(d.h(0,"bio")),A.a8(d.h(0,"niche")))},
iD:function iD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
na:function na(d,e){this.b=d
this.c=e},
wq:function wq(d){this.a=d},
b2S:function b2S(d){this.a=d},
b2R:function b2R(){},
c_a:function c_a(){}},C
J=c[1]
A=c[0]
D=c[2]
E=c[35]
B=a.updateHolder(c[78],B)
C=c[208]
B.A6.prototype={}
B.iD.prototype={
gbE(){return this.a}}
B.na.prototype={
gBr(){return this.b}}
B.wq.prototype={
Ox(d,e){return this.aCr(d,e)},
aCr(d,e){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Ox=A.i(function(f,g){if(f===1){s.push(g)
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
return A.e(l.aA("profiles").bo(y.b).b0("id",q).jR(),$async$Ox)
case 10:case 8:p=g
l=p
l=A.a8(l==null?null:J.A(l,"display_name"))
if((l==null?null:D.o.aI(l).length!==0)===!0){l=p
l.toString
j=A.U(J.A(l,"display_name"))}else j=d
o=j
if(p==null){l=q
if(l==null)l=""
u=new B.iD(l,o,null,null,null,null)
w=1
break}n=A.aM(p,x.w,x.b)
J.bg(n,"display_name",o)
l=B.amL(n)
u=l
w=1
break
t=2
w=6
break
case 4:t=3
h=s.pop()
m=A.G(h)
l=A.aB(m)
throw A.n(l)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Ox,v)},
Ov(d){return this.aCo(d)},
aCo(d){var w=0,v=A.m(x.r),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Ov=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.e(r.a.aA("profiles").bo(y.b).b0("id",d).jR(),$async$Ov)
case 7:q=f
if(q==null){u=null
w=1
break}o=B.amL(A.aM(q,x.w,x.b))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.G(m)
o=A.aB(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Ov,v)},
ZE(d,e,f,g,h){return this.bzg(d,e,f,g,h)},
bzg(d,e,a0,a1,a2){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ZE=A.i(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:h=r.a
g=h.gcb().e.a
g=g==null?null:g.r
q=g==null?null:g.a
if(q==null)throw A.n(C.tO)
g=x.w
m=x.b
p=A.Q(["updated_at",new A.aE(Date.now(),0,!1).d9().cZ()],g,m)
J.bg(p,"display_name",D.o.aI(e))
l=D.o.aI(a2).toLowerCase()
k=l.length===0?null:l
J.bg(p,"username",k)
j=D.o.aI(d)
k=j.length===0?null:j
J.bg(p,"bio",k)
if(a1)J.bg(p,"niche",a0)
t=4
w=7
return A.e(h.aA("profiles").cW(p).b0("id",q).bo(y.b).i3(0),$async$ZE)
case 7:o=a4
h=B.amL(A.aM(o,g,m))
u=h
w=1
break
t=2
w=6
break
case 4:t=3
f=s.pop()
n=A.G(f)
h=r.b3F(n)
throw A.n(h)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$ZE,v)},
BG(){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$BG=A.i(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:d=r.a
a0=d.gcb().e.a
a0=a0==null?null:a0.r
k=a0==null?null:a0.a
if(k==null)throw A.n(C.tO)
a2=A
w=3
return A.e(E.aPz(null,D.dZs,!0),$async$BG)
case 3:j=a2.it(a4)
if(j==null)throw A.n(C.ffS)
w=4
return A.e(j.gNX().o2(),$async$BG)
case 4:q=a4
if(J.aX(q)===0)throw A.n(C.ffO)
if(J.aX(q)>5242880)throw A.n(C.ffQ)
i=A.LS(j.a,$.aC9().a).apD(1)[1]
a0=i.length===0?null:D.o.bX(i,1)
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
return A.e(d.aA("avatars").BH(o,q,new A.DO(!0,p)),$async$BG)
case 9:d=d.aA("avatars")
h=d.Rf(o)
g="object"
f=A.cY(d.a+"/"+g+"/public/"+h,0,null)
n=d.as_(f.j(0),null,null)
m=A.q(n)+"?t="+Date.now()
w=10
return A.e(r.ZF(m),$async$BG)
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
d=A.aB(l)
throw A.n(d)
w=8
break
case 5:w=2
break
case 8:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$BG,v)},
FJ(){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$FJ=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.a
j=k.gcb().e.a
j=j==null?null:j.r
q=j==null?null:j.a
if(q==null)throw A.n(C.tO)
t=4
j=k.ay
j===$&&A.b()
w=7
return A.e(j.aA("avatars").axX(q),$async$FJ)
case 7:p=e
w=J.fU(p)?8:9
break
case 8:j=j.aA("avatars")
m=J.bW(p,new B.b2S(q),x.w)
m=A.K(m,m.$ti.i("ak.E"))
w=10
return A.e(j.M(0,m),$async$FJ)
case 10:case 9:j=x.b
w=11
return A.e(k.aA("profiles").cW(A.Q(["avatar_url",null,"updated_at",new A.aE(Date.now(),0,!1).d9().cZ()],j,j)).b0("id",q).bo(y.b).i3(0),$async$FJ)
case 11:o=e
j=B.amL(A.aM(o,x.w,j))
u=j
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
n=A.G(i)
k=A.aB(n)
throw A.n(k)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$FJ,v)},
ZF(d){return this.bzh(d)},
bzh(d){var w=0,v=A.m(x.i),u,t=this,s,r,q,p,o
var $async$ZF=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.gcb().e.a
q=q==null?null:q.r
s=q==null?null:q.a
if(s==null)throw A.n(C.tO)
q=x.b
p=B
o=A
w=3
return A.e(r.aA("profiles").cW(A.Q(["avatar_url",d,"updated_at",new A.aE(Date.now(),0,!1).d9().cZ()],q,q)).b0("id",s).bo(y.b).i3(0),$async$ZF)
case 3:u=p.amL(o.aM(f,x.w,q))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$ZF,v)},
Oy(){var w=0,v=A.m(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Oy=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.a
l=m.gcb().e.a
l=l==null?null:l.r
q=l==null?null:l.a
if(q==null){u=A.c([],x.f)
w=1
break}t=4
w=7
return A.e(m.aA("room_members").bo("room_id, role_id, case_rooms!inner(id, name)").b0("user_id",q).b0("status","approved"),$async$Oy)
case 7:p=e
m=J.bW(p,new B.b2R(),x.a)
m=A.K(m,m.$ti.i("ak.E"))
u=m
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.G(k)
m=A.aB(o)
throw A.n(m)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Oy,v)},
b3F(d){var w,v=J.bd(d).toLowerCase()
if(!D.o.n(v,"profiles_username_unique"))w=D.o.n(v,"duplicate key")&&D.o.n(v,"username")
else w=!0
if(w)return C.ffP
if(D.o.n(v,"profiles_username_format"))return C.ffR
return A.aB(d)}}
var z=a.updateTypes(["na(ab<f,@>)","wq(am)"])
B.bWf.prototype={
$1(d){return d.length!==0},
$S:10}
B.bWg.prototype={
$1(d){var w=d.toLowerCase()
return w[0].toUpperCase()+D.o.bX(w,1)},
$S:18}
B.b2S.prototype={
$1(d){return this.a+"/"+d.a},
$S:1114}
B.b2R.prototype={
$1(d){var w=x.w,v=x.b,u=A.aM(d,w,v),t=A.aM(x.B.a(J.A(u,"case_rooms")),w,v)
A.U(J.A(u,"room_id"))
v=A.a8(J.A(t,"name"))
w=v==null?"Untitled room":v
return new B.na(w,A.U(J.A(u,"role_id")))},
$S:z+0}
B.c_a.prototype={
$1(d){return new B.wq(d.T($.dD(),x.k))},
$S:z+1};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.A6,A.e4)
v(A.cf,[B.bWf,B.bWg,B.b2S,B.b2R,B.c_a])
v(A.D,[B.iD,B.na,B.wq])})()
A.cC(b.typeUniverse,JSON.parse('{"A6":{"aI":[]}}'))
var y={b:"id, display_name, avatar_url, username, bio, niche"}
var x={f:A.J("x<na>"),v:A.J("v<na>"),B:A.J("ab<@,@>"),a:A.J("na"),w:A.J("f"),k:A.J("h5"),i:A.J("iD"),b:A.J("@"),r:A.J("iD?")};(function constants(){C.tO=new A.t0("Not signed in.")
C.ffO=new B.A6("That image is empty.")
C.ffP=new B.A6("That username is taken \u2014 try another.")
C.ffQ=new B.A6("Pick an image under 5 MB.")
C.ffR=new B.A6("Usernames need 3\u201320 lowercase letters, numbers or _.")
C.ffS=new B.A6("No image selected.")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cV2","RF",()=>A.eo(new B.c_a(),A.J("wq")))})()};
(a=>{a["3/jMhiChMorBHf6MIM/OEwuLXoQ="]=a.current})($__dart_deferred_initializers__);