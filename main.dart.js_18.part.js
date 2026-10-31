((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={zO:function zO(d){this.a=d},
a8t(d){var w,v
for(w=0;w<5;++w){v=D.Dz[w]
if(v.a===d)return v.b}return B.cDf(d)},
cDf(d){var w,v=D.o.n3(d,A.cf("[_\\-\\s]+",!0,!1)),u=A.a4(v),t=u.i("dC<1,f>")
v=A.J(new A.dC(new A.ag(v,new B.bUh(),u.i("ag<1>")),new B.bUi(),t),t.i("z.E"))
v.$flags=1
w=v
if(w.length===0)return"Unknown"
return D.i.b2(w," ")},
bUh:function bUh(){},
bUi:function bUi(){},
amc(d){var w=A.Y(d.h(0,"id")),v=A.ab(d.h(0,"display_name"))
if(v==null)v=""
return new B.iv(w,v,A.ab(d.h(0,"avatar_url")),A.ab(d.h(0,"username")),A.ab(d.h(0,"bio")),A.ab(d.h(0,"niche")))},
iv:function iv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
n3:function n3(d,e){this.b=d
this.c=e},
wf:function wf(d){this.a=d},
b2q:function b2q(d){this.a=d},
b2p:function b2p(){},
bY5:function bY5(){}},C,E
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[73],B)
C=c[185]
E=c[30]
B.zO.prototype={}
B.iv.prototype={
gbQ(){return this.a}}
B.n3.prototype={}
B.wf.prototype={
O6(d,e){return this.aBB(d,e)},
aBB(d,e){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$O6=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
l=r.a
k=l.gcC().e.a
k=k==null?null:k.r
q=k==null?null:k.a
w=q==null?7:9
break
case 7:g=null
w=8
break
case 9:w=10
return A.d(l.aK("profiles").bz(y.b).b3("id",q).jL(),$async$O6)
case 10:case 8:p=g
l=p
l=A.ab(l==null?null:J.A(l,"display_name"))
if((l==null?null:D.o.aL(l).length!==0)===!0){l=p
l.toString
j=A.Y(J.A(l,"display_name"))}else j=d
o=j
if(p==null){l=q
if(l==null)l=""
u=new B.iv(l,o,null,null,null,null)
w=1
break}n=A.aR(p,x.w,x.b)
J.be(n,"display_name",o)
l=B.amc(n)
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
throw A.i(l)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$O6,v)},
O4(d){return this.aBy(d)},
aBy(d){var w=0,v=A.n(x.r),u,t=2,s=[],r=this,q,p,o,n,m
var $async$O4=A.j(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.d(r.a.aK("profiles").bz(y.b).b3("id",d).jL(),$async$O4)
case 7:q=f
if(q==null){u=null
w=1
break}o=B.amc(A.aR(q,x.w,x.b))
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
throw A.i(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$O4,v)},
Z0(d,e,f,g,h){return this.bxP(d,e,f,g,h)},
bxP(d,e,a0,a1,a2){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Z0=A.j(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:h=r.a
g=h.gcC().e.a
g=g==null?null:g.r
q=g==null?null:g.a
if(q==null)throw A.i(C.tI)
g=x.w
m=x.b
p=A.Q(["updated_at",new A.aW(Date.now(),0,!1).dk().dS()],g,m)
J.be(p,"display_name",D.o.aL(e))
l=D.o.aL(a2).toLowerCase()
k=l.length===0?null:l
J.be(p,"username",k)
j=D.o.aL(d)
k=j.length===0?null:j
J.be(p,"bio",k)
if(a1)J.be(p,"niche",a0)
t=4
w=7
return A.d(h.aK("profiles").cV(p).b3("id",q).bz(y.b).hZ(0),$async$Z0)
case 7:o=a4
h=B.amc(A.aR(o,g,m))
u=h
w=1
break
t=2
w=6
break
case 4:t=3
f=s.pop()
n=A.G(f)
h=r.b2k(n)
throw A.i(h)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Z0,v)},
Bx(){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Bx=A.j(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:d=r.a
a0=d.gcC().e.a
a0=a0==null?null:a0.r
k=a0==null?null:a0.a
if(k==null)throw A.i(C.tI)
a2=A
w=3
return A.d(E.c16(null,D.dYu),$async$Bx)
case 3:j=a2.iH(a4)
if(j==null)throw A.i(C.feR)
w=4
return A.d(j.gZe().ph(),$async$Bx)
case 4:q=a4
if(J.b_(q)===0)throw A.i(C.feN)
if(J.b_(q)>5242880)throw A.i(C.feP)
i=A.LC(j.a,$.aBv().a).aoK(1)[1]
a0=i.length===0?null:D.o.bW(i,1)
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
return A.d(d.aK("avatars").By(o,q,new A.Do(!0,p)),$async$Bx)
case 9:d=d.aK("avatars")
h=d.QN(o)
g="object"
f=A.cR(d.a+"/"+g+"/public/"+h,0,null)
n=d.ar1(f.j(0),null,null)
m=A.q(n)+"?t="+Date.now()
w=10
return A.d(r.Z1(m),$async$Bx)
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
throw A.i(d)
w=8
break
case 5:w=2
break
case 8:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Bx,v)},
Fz(){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Fz=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.a
j=k.gcC().e.a
j=j==null?null:j.r
q=j==null?null:j.a
if(q==null)throw A.i(C.tI)
t=4
j=k.ay
j===$&&A.b()
w=7
return A.d(j.aK("avatars").ax4(q),$async$Fz)
case 7:p=e
w=J.fB(p)?8:9
break
case 8:j=j.aK("avatars")
m=J.c6(p,new B.b2q(q),x.w)
m=A.J(m,m.$ti.i("al.E"))
w=10
return A.d(j.M(0,m),$async$Fz)
case 10:case 9:j=x.b
w=11
return A.d(k.aK("profiles").cV(A.Q(["avatar_url",null,"updated_at",new A.aW(Date.now(),0,!1).dk().dS()],j,j)).b3("id",q).bz(y.b).hZ(0),$async$Fz)
case 11:o=e
j=B.amc(A.aR(o,x.w,j))
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
throw A.i(k)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Fz,v)},
Z1(d){return this.bxQ(d)},
bxQ(d){var w=0,v=A.n(x.i),u,t=this,s,r,q,p,o
var $async$Z1=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.gcC().e.a
q=q==null?null:q.r
s=q==null?null:q.a
if(s==null)throw A.i(C.tI)
q=x.b
p=B
o=A
w=3
return A.d(r.aK("profiles").cV(A.Q(["avatar_url",d,"updated_at",new A.aW(Date.now(),0,!1).dk().dS()],q,q)).b3("id",s).bz(y.b).hZ(0),$async$Z1)
case 3:u=p.amc(o.aR(f,x.w,q))
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$Z1,v)},
O7(){var w=0,v=A.n(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$O7=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.a
l=m.gcC().e.a
l=l==null?null:l.r
q=l==null?null:l.a
if(q==null){u=A.c([],x.f)
w=1
break}t=4
w=7
return A.d(m.aK("room_members").bz("room_id, role_id, case_rooms!inner(id, name)").b3("user_id",q).b3("status","approved"),$async$O7)
case 7:p=e
m=J.c6(p,new B.b2p(),x.a)
m=A.J(m,m.$ti.i("al.E"))
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
throw A.i(m)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$O7,v)},
b2k(d){var w,v=J.bm(d).toLowerCase()
if(!D.o.n(v,"profiles_username_unique"))w=D.o.n(v,"duplicate key")&&D.o.n(v,"username")
else w=!0
if(w)return C.feO
if(D.o.n(v,"profiles_username_format"))return C.feQ
return A.aB(d)}}
var z=a.updateTypes(["n3(ae<f,@>)","wf(ao)"])
B.bUh.prototype={
$1(d){return d.length!==0},
$S:12}
B.bUi.prototype={
$1(d){var w=d.toLowerCase()
return w[0].toUpperCase()+D.o.bW(w,1)},
$S:20}
B.b2q.prototype={
$1(d){return this.a+"/"+d.a},
$S:1130}
B.b2p.prototype={
$1(d){var w=x.w,v=x.b,u=A.aR(d,w,v),t=A.aR(x.B.a(J.A(u,"case_rooms")),w,v)
A.Y(J.A(u,"room_id"))
v=A.ab(J.A(t,"name"))
w=v==null?"Untitled room":v
return new B.n3(w,A.Y(J.A(u,"role_id")))},
$S:z+0}
B.bY5.prototype={
$1(d){return new B.wf(d.V($.dI(),x.k))},
$S:z+1};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.zO,A.e0)
v(A.cu,[B.bUh,B.bUi,B.b2q,B.b2p,B.bY5])
v(A.C,[B.iv,B.n3,B.wf])})()
A.cV(b.typeUniverse,JSON.parse('{"zO":{"aG":[]}}'))
var y={b:"id, display_name, avatar_url, username, bio, niche"}
var x={f:A.L("x<n3>"),v:A.L("w<n3>"),B:A.L("ae<@,@>"),a:A.L("n3"),w:A.L("f"),k:A.L("i7"),i:A.L("iv"),b:A.L("@"),r:A.L("iv?")};(function constants(){C.tI=new A.q5("Not signed in.")
C.feN=new B.zO("That image is empty.")
C.feO=new B.zO("That username is taken \u2014 try another.")
C.feP=new B.zO("Pick an image under 5 MB.")
C.feQ=new B.zO("Usernames need 3\u201320 lowercase letters, numbers or _.")
C.feR=new B.zO("No image selected.")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cSj","Re",()=>A.eC(new B.bY5(),A.L("wf")))})()};
(a=>{a["JvqF/drojVxZaZi3uOPu4iUm+Ok="]=a.current})($__dart_deferred_initializers__);