((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={A0:function A0(d){this.a=d},
a8U(d){var w,v
for(w=0;w<5;++w){v=D.DK[w]
if(v.a===d)return v.b}return B.cFO(d)},
cFO(d){var w,v=D.n.n2(d,A.cf("[_\\-\\s]+",!0,!1)),u=A.a6(v),t=u.i("dD<1,f>")
v=A.J(new A.dD(new A.al(v,new B.bWw(),u.i("al<1>")),new B.bWx(),t),t.i("z.E"))
v.$flags=1
w=v
if(w.length===0)return"Unknown"
return D.i.b1(w," ")},
bWw:function bWw(){},
bWx:function bWx(){},
amE(d){var w=A.Z(d.h(0,"id")),v=A.a8(d.h(0,"display_name"))
if(v==null)v=""
return new B.iA(w,v,A.a8(d.h(0,"avatar_url")),A.a8(d.h(0,"username")),A.a8(d.h(0,"bio")),A.a8(d.h(0,"niche")))},
iA:function iA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
n6:function n6(d,e){this.b=d
this.c=e},
wo:function wo(d){this.a=d},
b2N:function b2N(d){this.a=d},
b2M:function b2M(){},
c_p:function c_p(){}},C,E
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[75],B)
C=c[185]
E=c[29]
B.A0.prototype={}
B.iA.prototype={
gbQ(){return this.a}}
B.n6.prototype={}
B.wo.prototype={
Oh(d,e){return this.aC2(d,e)},
aC2(d,e){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Oh=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
l=r.a
k=l.gcq().e.a
k=k==null?null:k.r
q=k==null?null:k.a
w=q==null?7:9
break
case 7:g=null
w=8
break
case 9:w=10
return A.d(l.aL("profiles").by(y.b).b7("id",q).kB(),$async$Oh)
case 10:case 8:p=g
l=p
l=A.a8(l==null?null:J.A(l,"display_name"))
if((l==null?null:D.n.aI(l).length!==0)===!0){l=p
l.toString
j=A.Z(J.A(l,"display_name"))}else j=d
o=j
if(p==null){l=q
if(l==null)l=""
u=new B.iA(l,o,null,null,null,null)
w=1
break}n=A.aP(p,x.w,x.b)
J.bd(n,"display_name",o)
l=B.amE(n)
u=l
w=1
break
t=2
w=6
break
case 4:t=3
h=s.pop()
m=A.F(h)
l=A.ax(m)
throw A.n(l)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Oh,v)},
Of(d){return this.aBZ(d)},
aBZ(d){var w=0,v=A.m(x.r),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Of=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.d(r.a.aL("profiles").by(y.b).b7("id",d).kB(),$async$Of)
case 7:q=f
if(q==null){u=null
w=1
break}o=B.amE(A.aP(q,x.w,x.b))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.F(m)
o=A.ax(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Of,v)},
Zq(d,e,f,g,h){return this.byP(d,e,f,g,h)},
byP(d,e,a0,a1,a2){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Zq=A.i(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:h=r.a
g=h.gcq().e.a
g=g==null?null:g.r
q=g==null?null:g.a
if(q==null)throw A.n(C.tN)
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
return A.d(h.aL("profiles").cY(p).b7("id",q).by(y.b).hX(0),$async$Zq)
case 7:o=a4
h=B.amE(A.aP(o,g,m))
u=h
w=1
break
t=2
w=6
break
case 4:t=3
f=s.pop()
n=A.F(f)
h=r.b2U(n)
throw A.n(h)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Zq,v)},
BE(){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$BE=A.i(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:d=r.a
a0=d.gcq().e.a
a0=a0==null?null:a0.r
k=a0==null?null:a0.a
if(k==null)throw A.n(C.tN)
a2=A
w=3
return A.d(E.aPM(null,D.N4),$async$BE)
case 3:j=a2.il(a4)
if(j==null)throw A.n(C.ffg)
w=4
return A.d(j.gNM().nZ(),$async$BE)
case 4:q=a4
if(J.aY(q)===0)throw A.n(C.ffc)
if(J.aY(q)>5242880)throw A.n(C.ffe)
a0=j.gav5()
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
return A.d(d.aL("avatars").xO(o,q,new A.yG(!0,p)),$async$BE)
case 9:d=d.aL("avatars")
h=d.QY(o)
g="object"
f=A.cT(d.a+"/"+g+"/public/"+h,0,null)
n=d.arr(f.j(0),null,null)
m=A.r(n)+"?t="+Date.now()
w=10
return A.d(r.Zr(m),$async$BE)
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
d=A.ax(l)
throw A.n(d)
w=8
break
case 5:w=2
break
case 8:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$BE,v)},
FJ(){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$FJ=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.a
j=k.gcq().e.a
j=j==null?null:j.r
q=j==null?null:j.a
if(q==null)throw A.n(C.tN)
t=4
j=k.ay
j===$&&A.b()
w=7
return A.d(j.aL("avatars").axu(q),$async$FJ)
case 7:p=e
w=J.fg(p)?8:9
break
case 8:j=j.aL("avatars")
m=J.c2(p,new B.b2N(q),x.w)
m=A.J(m,m.$ti.i("ai.E"))
w=10
return A.d(j.M(0,m),$async$FJ)
case 10:case 9:j=x.b
w=11
return A.d(k.aL("profiles").cY(A.Q(["avatar_url",null,"updated_at",new A.aR(Date.now(),0,!1).dl().dN()],j,j)).b7("id",q).by(y.b).hX(0),$async$FJ)
case 11:o=e
j=B.amE(A.aP(o,x.w,j))
u=j
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
n=A.F(i)
k=A.ax(n)
throw A.n(k)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$FJ,v)},
Zr(d){return this.byQ(d)},
byQ(d){var w=0,v=A.m(x.i),u,t=this,s,r,q,p,o
var $async$Zr=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.gcq().e.a
q=q==null?null:q.r
s=q==null?null:q.a
if(s==null)throw A.n(C.tN)
q=x.b
p=B
o=A
w=3
return A.d(r.aL("profiles").cY(A.Q(["avatar_url",d,"updated_at",new A.aR(Date.now(),0,!1).dl().dN()],q,q)).b7("id",s).by(y.b).hX(0),$async$Zr)
case 3:u=p.amE(o.aP(f,x.w,q))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$Zr,v)},
Oi(){var w=0,v=A.m(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Oi=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.a
l=m.gcq().e.a
l=l==null?null:l.r
q=l==null?null:l.a
if(q==null){u=A.c([],x.f)
w=1
break}t=4
w=7
return A.d(m.aL("room_members").by("room_id, role_id, case_rooms!inner(id, name)").b7("user_id",q).b7("status","approved"),$async$Oi)
case 7:p=e
m=J.c2(p,new B.b2M(),x.a)
m=A.J(m,m.$ti.i("ai.E"))
u=m
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.F(k)
m=A.ax(o)
throw A.n(m)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Oi,v)},
b2U(d){var w,v=J.bk(d).toLowerCase()
if(!D.n.n(v,"profiles_username_unique"))w=D.n.n(v,"duplicate key")&&D.n.n(v,"username")
else w=!0
if(w)return C.ffd
if(D.n.n(v,"profiles_username_format"))return C.fff
return A.ax(d)}}
var z=a.updateTypes(["n6(ae<f,@>)","wo(ao)"])
B.bWw.prototype={
$1(d){return d.length!==0},
$S:12}
B.bWx.prototype={
$1(d){var w=d.toLowerCase()
return w[0].toUpperCase()+D.n.bY(w,1)},
$S:19}
B.b2N.prototype={
$1(d){return this.a+"/"+d.a},
$S:1154}
B.b2M.prototype={
$1(d){var w=x.w,v=x.b,u=A.aP(d,w,v),t=A.aP(x.B.a(J.A(u,"case_rooms")),w,v)
A.Z(J.A(u,"room_id"))
v=A.a8(J.A(t,"name"))
w=v==null?"Untitled room":v
return new B.n6(w,A.Z(J.A(u,"role_id")))},
$S:z+0}
B.c_p.prototype={
$1(d){return new B.wo(d.T($.dV(),x.k))},
$S:z+1};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.A0,A.dx)
v(A.cA,[B.bWw,B.bWx,B.b2N,B.b2M,B.c_p])
v(A.D,[B.iA,B.n6,B.wo])})()
A.cW(b.typeUniverse,JSON.parse('{"A0":{"aG":[]}}'))
var y={b:"id, display_name, avatar_url, username, bio, niche"}
var x={f:A.O("x<n6>"),v:A.O("w<n6>"),B:A.O("ae<@,@>"),a:A.O("n6"),w:A.O("f"),k:A.O("iS"),i:A.O("iA"),b:A.O("@"),r:A.O("iA?")};(function constants(){C.tN=new A.q8("Not signed in.")
C.ffc=new B.A0("That image is empty.")
C.ffd=new B.A0("That username is taken \u2014 try another.")
C.ffe=new B.A0("Pick an image under 5 MB.")
C.fff=new B.A0("Usernames need 3\u201320 lowercase letters, numbers or _.")
C.ffg=new B.A0("No image selected.")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cUY","Rt",()=>A.eN(new B.c_p(),A.O("wo")))})()};
(a=>{a["FHdKbGZJu5H0Hpz2NykOVDZ7a2E="]=a.current})($__dart_deferred_initializers__);