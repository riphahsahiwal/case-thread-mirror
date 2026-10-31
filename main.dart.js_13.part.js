((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={zN:function zN(d){this.a=d},
a8A(d){var w,v
for(w=0;w<5;++w){v=D.DC[w]
if(v.a===d)return v.b}return B.cDt(d)},
cDt(d){var w,v=D.o.n1(d,A.cf("[_\\-\\s]+",!0,!1)),u=A.a7(v),t=u.i("dA<1,f>")
v=A.J(new A.dA(new A.al(v,new B.bUC(),u.i("al<1>")),new B.bUD(),t),t.i("z.E"))
v.$flags=1
w=v
if(w.length===0)return"Unknown"
return D.i.b3(w," ")},
bUC:function bUC(){},
bUD:function bUD(){},
amm(d){var w=A.Z(d.h(0,"id")),v=A.ab(d.h(0,"display_name"))
if(v==null)v=""
return new B.iw(w,v,A.ab(d.h(0,"avatar_url")),A.ab(d.h(0,"username")),A.ab(d.h(0,"bio")),A.ab(d.h(0,"niche")))},
iw:function iw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
n3:function n3(d,e){this.b=d
this.c=e},
wc:function wc(d){this.a=d},
b2k:function b2k(d){this.a=d},
b2j:function b2j(){},
bYo:function bYo(){}},C,E
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[70],B)
C=c[176]
E=c[28]
B.zN.prototype={}
B.iw.prototype={
gbP(){return this.a}}
B.n3.prototype={}
B.wc.prototype={
O9(d,e){return this.aBD(d,e)},
aBD(d,e){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$O9=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
l=r.a
k=l.gcv().e.a
k=k==null?null:k.r
q=k==null?null:k.a
w=q==null?7:9
break
case 7:g=null
w=8
break
case 9:w=10
return A.d(l.aL("profiles").bz(y.b).b7("id",q).kB(),$async$O9)
case 10:case 8:p=g
l=p
l=A.ab(l==null?null:J.A(l,"display_name"))
if((l==null?null:D.o.aK(l).length!==0)===!0){l=p
l.toString
j=A.Z(J.A(l,"display_name"))}else j=d
o=j
if(p==null){l=q
if(l==null)l=""
u=new B.iw(l,o,null,null,null,null)
w=1
break}n=A.aU(p,x.w,x.b)
J.bd(n,"display_name",o)
l=B.amm(n)
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
return A.m($async$O9,v)},
O7(d){return this.aBz(d)},
aBz(d){var w=0,v=A.n(x.r),u,t=2,s=[],r=this,q,p,o,n,m
var $async$O7=A.j(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.d(r.a.aL("profiles").bz(y.b).b7("id",d).kB(),$async$O7)
case 7:q=f
if(q==null){u=null
w=1
break}o=B.amm(A.aU(q,x.w,x.b))
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
return A.m($async$O7,v)},
Z4(d,e,f,g,h){return this.bxZ(d,e,f,g,h)},
bxZ(d,e,a0,a1,a2){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Z4=A.j(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:h=r.a
g=h.gcv().e.a
g=g==null?null:g.r
q=g==null?null:g.a
if(q==null)throw A.i(C.tJ)
g=x.w
m=x.b
p=A.R(["updated_at",new A.aT(Date.now(),0,!1).dk().dN()],g,m)
J.bd(p,"display_name",D.o.aK(e))
l=D.o.aK(a2).toLowerCase()
k=l.length===0?null:l
J.bd(p,"username",k)
j=D.o.aK(d)
k=j.length===0?null:j
J.bd(p,"bio",k)
if(a1)J.bd(p,"niche",a0)
t=4
w=7
return A.d(h.aL("profiles").cX(p).b7("id",q).bz(y.b).hX(0),$async$Z4)
case 7:o=a4
h=B.amm(A.aU(o,g,m))
u=h
w=1
break
t=2
w=6
break
case 4:t=3
f=s.pop()
n=A.G(f)
h=r.b2o(n)
throw A.i(h)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Z4,v)},
By(){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$By=A.j(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:d=r.a
a0=d.gcv().e.a
a0=a0==null?null:a0.r
k=a0==null?null:a0.a
if(k==null)throw A.i(C.tJ)
a2=A
w=3
return A.d(E.aPl(null,D.MW),$async$By)
case 3:j=a2.ii(a4)
if(j==null)throw A.i(C.feS)
w=4
return A.d(j.gNE().nY(),$async$By)
case 4:q=a4
if(J.aY(q)===0)throw A.i(C.feO)
if(J.aY(q)>5242880)throw A.i(C.feQ)
a0=j.gauI()
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
return A.d(d.aL("avatars").xJ(o,q,new A.yu(!0,p)),$async$By)
case 9:d=d.aL("avatars")
h=d.QQ(o)
g="object"
f=A.cS(d.a+"/"+g+"/public/"+h,0,null)
n=d.ar2(f.j(0),null,null)
m=A.r(n)+"?t="+Date.now()
w=10
return A.d(r.Z5(m),$async$By)
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
return A.m($async$By,v)},
FD(){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$FD=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.a
j=k.gcv().e.a
j=j==null?null:j.r
q=j==null?null:j.a
if(q==null)throw A.i(C.tJ)
t=4
j=k.ay
j===$&&A.b()
w=7
return A.d(j.aL("avatars").ax6(q),$async$FD)
case 7:p=e
w=J.fn(p)?8:9
break
case 8:j=j.aL("avatars")
m=J.c2(p,new B.b2k(q),x.w)
m=A.J(m,m.$ti.i("ak.E"))
w=10
return A.d(j.M(0,m),$async$FD)
case 10:case 9:j=x.b
w=11
return A.d(k.aL("profiles").cX(A.R(["avatar_url",null,"updated_at",new A.aT(Date.now(),0,!1).dk().dN()],j,j)).b7("id",q).bz(y.b).hX(0),$async$FD)
case 11:o=e
j=B.amm(A.aU(o,x.w,j))
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
return A.m($async$FD,v)},
Z5(d){return this.by_(d)},
by_(d){var w=0,v=A.n(x.i),u,t=this,s,r,q,p,o
var $async$Z5=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.gcv().e.a
q=q==null?null:q.r
s=q==null?null:q.a
if(s==null)throw A.i(C.tJ)
q=x.b
p=B
o=A
w=3
return A.d(r.aL("profiles").cX(A.R(["avatar_url",d,"updated_at",new A.aT(Date.now(),0,!1).dk().dN()],q,q)).b7("id",s).bz(y.b).hX(0),$async$Z5)
case 3:u=p.amm(o.aU(f,x.w,q))
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$Z5,v)},
Oa(){var w=0,v=A.n(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Oa=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.a
l=m.gcv().e.a
l=l==null?null:l.r
q=l==null?null:l.a
if(q==null){u=A.c([],x.f)
w=1
break}t=4
w=7
return A.d(m.aL("room_members").bz("room_id, role_id, case_rooms!inner(id, name)").b7("user_id",q).b7("status","approved"),$async$Oa)
case 7:p=e
m=J.c2(p,new B.b2j(),x.a)
m=A.J(m,m.$ti.i("ak.E"))
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
return A.m($async$Oa,v)},
b2o(d){var w,v=J.bl(d).toLowerCase()
if(!D.o.n(v,"profiles_username_unique"))w=D.o.n(v,"duplicate key")&&D.o.n(v,"username")
else w=!0
if(w)return C.feP
if(D.o.n(v,"profiles_username_format"))return C.feR
return A.aB(d)}}
var z=a.updateTypes(["n3(af<f,@>)","wc(at)"])
B.bUC.prototype={
$1(d){return d.length!==0},
$S:12}
B.bUD.prototype={
$1(d){var w=d.toLowerCase()
return w[0].toUpperCase()+D.o.bX(w,1)},
$S:17}
B.b2k.prototype={
$1(d){return this.a+"/"+d.a},
$S:1146}
B.b2j.prototype={
$1(d){var w=x.w,v=x.b,u=A.aU(d,w,v),t=A.aU(x.B.a(J.A(u,"case_rooms")),w,v)
A.Z(J.A(u,"room_id"))
v=A.ab(J.A(t,"name"))
w=v==null?"Untitled room":v
return new B.n3(w,A.Z(J.A(u,"role_id")))},
$S:z+0}
B.bYo.prototype={
$1(d){return new B.wc(d.V($.e1(),x.k))},
$S:z+1};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.zN,A.ej)
v(A.cC,[B.bUC,B.bUD,B.b2k,B.b2j,B.bYo])
v(A.D,[B.iw,B.n3,B.wc])})()
A.d1(b.typeUniverse,JSON.parse('{"zN":{"aG":[]}}'))
var y={b:"id, display_name, avatar_url, username, bio, niche"}
var x={f:A.O("y<n3>"),v:A.O("w<n3>"),B:A.O("af<@,@>"),a:A.O("n3"),w:A.O("f"),k:A.O("iO"),i:A.O("iw"),b:A.O("@"),r:A.O("iw?")};(function constants(){C.tJ=new A.q3("Not signed in.")
C.feO=new B.zN("That image is empty.")
C.feP=new B.zN("That username is taken \u2014 try another.")
C.feQ=new B.zN("Pick an image under 5 MB.")
C.feR=new B.zN("Usernames need 3\u201320 lowercase letters, numbers or _.")
C.feS=new B.zN("No image selected.")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cSr","Rf",()=>A.eX(new B.bYo(),A.O("wc")))})()};
(a=>{a["8nf+RZ4XgE/uWxS3HTClFGYrVFA="]=a.current})($__dart_deferred_initializers__);