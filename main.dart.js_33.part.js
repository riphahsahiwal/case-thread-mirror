((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={A2:function A2(d){this.a=d},
a8W(d){var w,v
for(w=0;w<5;++w){v=D.DQ[w]
if(v.a===d)return v.b}return B.cG2(d)},
cG2(d){var w,v=D.n.n2(d,A.c9("[_\\-\\s]+",!0,!1)),u=A.a6(v),t=u.i("dF<1,f>")
v=A.J(new A.dF(new A.am(v,new B.bWL(),u.i("am<1>")),new B.bWM(),t),t.i("z.E"))
v.$flags=1
w=v
if(w.length===0)return"Unknown"
return D.i.b1(w," ")},
bWL:function bWL(){},
bWM:function bWM(){},
amI(d){var w=A.Z(d.h(0,"id")),v=A.a7(d.h(0,"display_name"))
if(v==null)v=""
return new B.ib(w,v,A.a7(d.h(0,"avatar_url")),A.a7(d.h(0,"username")),A.a7(d.h(0,"bio")),A.a7(d.h(0,"niche")))},
ib:function ib(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
n7:function n7(d,e){this.b=d
this.c=e},
wo:function wo(d){this.a=d},
b2R:function b2R(d){this.a=d},
b2Q:function b2Q(){},
c_H:function c_H(){}},C,E
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[77],B)
C=c[185]
E=c[29]
B.A2.prototype={}
B.ib.prototype={
gbQ(){return this.a}}
B.n7.prototype={}
B.wo.prototype={
Oh(d,e){return this.aC6(d,e)},
aC6(d,e){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Oh=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
l=r.a
k=l.gcc().e.a
k=k==null?null:k.r
q=k==null?null:k.a
w=q==null?7:9
break
case 7:g=null
w=8
break
case 9:w=10
return A.d(l.aL("profiles").by(y.b).b7("id",q).kA(),$async$Oh)
case 10:case 8:p=g
l=p
l=A.a7(l==null?null:J.A(l,"display_name"))
if((l==null?null:D.n.aI(l).length!==0)===!0){l=p
l.toString
j=A.Z(J.A(l,"display_name"))}else j=d
o=j
if(p==null){l=q
if(l==null)l=""
u=new B.ib(l,o,null,null,null,null)
w=1
break}n=A.aQ(p,x.w,x.b)
J.bd(n,"display_name",o)
l=B.amI(n)
u=l
w=1
break
t=2
w=6
break
case 4:t=3
h=s.pop()
m=A.F(h)
l=A.aw(m)
throw A.n(l)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Oh,v)},
Of(d){return this.aC2(d)},
aC2(d){var w=0,v=A.m(x.r),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Of=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.d(r.a.aL("profiles").by(y.b).b7("id",d).kA(),$async$Of)
case 7:q=f
if(q==null){u=null
w=1
break}o=B.amI(A.aQ(q,x.w,x.b))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.F(m)
o=A.aw(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Of,v)},
Zt(d,e,f,g,h){return this.byW(d,e,f,g,h)},
byW(d,e,a0,a1,a2){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Zt=A.i(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:h=r.a
g=h.gcc().e.a
g=g==null?null:g.r
q=g==null?null:g.a
if(q==null)throw A.n(C.tT)
g=x.w
m=x.b
p=A.Q(["updated_at",new A.aR(Date.now(),0,!1).dl().dN()],g,m)
J.bd(p,"display_name",D.n.aI(e))
l=D.n.aI(a2).toLowerCase()
k=l.length===0?null:l
J.bd(p,"username",k)
j=D.n.aI(d)
k=j.length===0?null:j
J.bd(p,"bio",k)
if(a1)J.bd(p,"niche",a0)
t=4
w=7
return A.d(h.aL("profiles").cY(p).b7("id",q).by(y.b).hW(0),$async$Zt)
case 7:o=a4
h=B.amI(A.aQ(o,g,m))
u=h
w=1
break
t=2
w=6
break
case 4:t=3
f=s.pop()
n=A.F(f)
h=r.b2Z(n)
throw A.n(h)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Zt,v)},
BG(){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$BG=A.i(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:d=r.a
a0=d.gcc().e.a
a0=a0==null?null:a0.r
k=a0==null?null:a0.a
if(k==null)throw A.n(C.tT)
a2=A
w=3
return A.d(E.aPQ(null,D.Na),$async$BG)
case 3:j=a2.im(a4)
if(j==null)throw A.n(C.ffk)
w=4
return A.d(j.gNN().nZ(),$async$BG)
case 4:q=a4
if(J.aY(q)===0)throw A.n(C.ffg)
if(J.aY(q)>5242880)throw A.n(C.ffi)
a0=j.gav9()
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
return A.d(d.aL("avatars").xP(o,q,new A.yI(!0,p)),$async$BG)
case 9:d=d.aL("avatars")
h=d.QZ(o)
g="object"
f=A.cU(d.a+"/"+g+"/public/"+h,0,null)
n=d.arv(f.j(0),null,null)
m=A.r(n)+"?t="+Date.now()
w=10
return A.d(r.Zu(m),$async$BG)
case 10:d=a4
u=d
w=1
break
t=2
w=8
break
case 6:t=5
a1=s.pop()
l=A.F(a1)
d=A.aw(l)
throw A.n(d)
w=8
break
case 5:w=2
break
case 8:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$BG,v)},
FL(){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$FL=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.a
j=k.gcc().e.a
j=j==null?null:j.r
q=j==null?null:j.a
if(q==null)throw A.n(C.tT)
t=4
j=k.ay
j===$&&A.b()
w=7
return A.d(j.aL("avatars").axy(q),$async$FL)
case 7:p=e
w=J.fg(p)?8:9
break
case 8:j=j.aL("avatars")
m=J.c2(p,new B.b2R(q),x.w)
m=A.J(m,m.$ti.i("aj.E"))
w=10
return A.d(j.M(0,m),$async$FL)
case 10:case 9:j=x.b
w=11
return A.d(k.aL("profiles").cY(A.Q(["avatar_url",null,"updated_at",new A.aR(Date.now(),0,!1).dl().dN()],j,j)).b7("id",q).by(y.b).hW(0),$async$FL)
case 11:o=e
j=B.amI(A.aQ(o,x.w,j))
u=j
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
n=A.F(i)
k=A.aw(n)
throw A.n(k)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$FL,v)},
Zu(d){return this.byX(d)},
byX(d){var w=0,v=A.m(x.i),u,t=this,s,r,q,p,o
var $async$Zu=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.gcc().e.a
q=q==null?null:q.r
s=q==null?null:q.a
if(s==null)throw A.n(C.tT)
q=x.b
p=B
o=A
w=3
return A.d(r.aL("profiles").cY(A.Q(["avatar_url",d,"updated_at",new A.aR(Date.now(),0,!1).dl().dN()],q,q)).b7("id",s).by(y.b).hW(0),$async$Zu)
case 3:u=p.amI(o.aQ(f,x.w,q))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$Zu,v)},
Oi(){var w=0,v=A.m(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Oi=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.a
l=m.gcc().e.a
l=l==null?null:l.r
q=l==null?null:l.a
if(q==null){u=A.c([],x.f)
w=1
break}t=4
w=7
return A.d(m.aL("room_members").by("room_id, role_id, case_rooms!inner(id, name)").b7("user_id",q).b7("status","approved"),$async$Oi)
case 7:p=e
m=J.c2(p,new B.b2Q(),x.a)
m=A.J(m,m.$ti.i("aj.E"))
u=m
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.F(k)
m=A.aw(o)
throw A.n(m)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Oi,v)},
b2Z(d){var w,v=J.bk(d).toLowerCase()
if(!D.n.n(v,"profiles_username_unique"))w=D.n.n(v,"duplicate key")&&D.n.n(v,"username")
else w=!0
if(w)return C.ffh
if(D.n.n(v,"profiles_username_format"))return C.ffj
return A.aw(d)}}
var z=a.updateTypes(["n7(ae<f,@>)","wo(ao)"])
B.bWL.prototype={
$1(d){return d.length!==0},
$S:12}
B.bWM.prototype={
$1(d){var w=d.toLowerCase()
return w[0].toUpperCase()+D.n.bY(w,1)},
$S:18}
B.b2R.prototype={
$1(d){return this.a+"/"+d.a},
$S:1154}
B.b2Q.prototype={
$1(d){var w=x.w,v=x.b,u=A.aQ(d,w,v),t=A.aQ(x.B.a(J.A(u,"case_rooms")),w,v)
A.Z(J.A(u,"room_id"))
v=A.a7(J.A(t,"name"))
w=v==null?"Untitled room":v
return new B.n7(w,A.Z(J.A(u,"role_id")))},
$S:z+0}
B.c_H.prototype={
$1(d){return new B.wo(d.T($.dW(),x.k))},
$S:z+1};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.A2,A.du)
v(A.cA,[B.bWL,B.bWM,B.b2R,B.b2Q,B.c_H])
v(A.D,[B.ib,B.n7,B.wo])})()
A.cX(b.typeUniverse,JSON.parse('{"A2":{"aG":[]}}'))
var y={b:"id, display_name, avatar_url, username, bio, niche"}
var x={f:A.O("x<n7>"),v:A.O("w<n7>"),B:A.O("ae<@,@>"),a:A.O("n7"),w:A.O("f"),k:A.O("iR"),i:A.O("ib"),b:A.O("@"),r:A.O("ib?")};(function constants(){C.tT=new A.oS("Not signed in.")
C.ffg=new B.A2("That image is empty.")
C.ffh=new B.A2("That username is taken \u2014 try another.")
C.ffi=new B.A2("Pick an image under 5 MB.")
C.ffj=new B.A2("Usernames need 3\u201320 lowercase letters, numbers or _.")
C.ffk=new B.A2("No image selected.")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cVd","Ru",()=>A.eN(new B.c_H(),A.O("wo")))})()};
(a=>{a["dgJ4MhajRlVEeokD4xQ3lxvjM5g="]=a.current})($__dart_deferred_initializers__);