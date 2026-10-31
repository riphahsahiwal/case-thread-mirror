((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={zJ:function zJ(d){this.a=d},
a8l(d){var w,v
for(w=0;w<5;++w){v=D.Dw[w]
if(v.a===d)return v.b}return B.cCl(d)},
cCl(d){var w,v=D.o.n1(d,A.cf("[_\\-\\s]+",!0,!1)),u=A.a3(v),t=u.i("dB<1,f>")
v=A.J(new A.dB(new A.ag(v,new B.bTB(),u.i("ag<1>")),new B.bTC(),t),t.i("z.E"))
v.$flags=1
w=v
if(w.length===0)return"Unknown"
return D.i.b2(w," ")},
bTB:function bTB(){},
bTC:function bTC(){},
am3(d){var w=A.Y(d.h(0,"id")),v=A.ab(d.h(0,"display_name"))
if(v==null)v=""
return new B.iu(w,v,A.ab(d.h(0,"avatar_url")),A.ab(d.h(0,"username")),A.ab(d.h(0,"bio")),A.ab(d.h(0,"niche")))},
iu:function iu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
n1:function n1(d,e){this.b=d
this.c=e},
w9:function w9(d){this.a=d},
b1W:function b1W(d){this.a=d},
b1V:function b1V(){},
bXi:function bXi(){}},C,E
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[71],B)
C=c[176]
E=c[28]
B.zJ.prototype={}
B.iu.prototype={
gbS(){return this.a}}
B.n1.prototype={}
B.w9.prototype={
O_(d,e){return this.aBj(d,e)},
aBj(d,e){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$O_=A.j(function(f,g){if(f===1){s.push(g)
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
return A.d(l.aN("profiles").bD(y.b).bb("id",q).lr(),$async$O_)
case 10:case 8:p=g
l=p
l=A.ab(l==null?null:J.A(l,"display_name"))
if((l==null?null:D.o.aK(l).length!==0)===!0){l=p
l.toString
j=A.Y(J.A(l,"display_name"))}else j=d
o=j
if(p==null){l=q
if(l==null)l=""
u=new B.iu(l,o,null,null,null,null)
w=1
break}n=A.aR(p,x.w,x.b)
J.be(n,"display_name",o)
l=B.am3(n)
u=l
w=1
break
t=2
w=6
break
case 4:t=3
h=s.pop()
m=A.H(h)
l=A.aE(m)
throw A.i(l)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$O_,v)},
NY(d){return this.aBg(d)},
aBg(d){var w=0,v=A.n(x.r),u,t=2,s=[],r=this,q,p,o,n,m
var $async$NY=A.j(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.d(r.a.aN("profiles").bD(y.b).bb("id",d).lr(),$async$NY)
case 7:q=f
if(q==null){u=null
w=1
break}o=B.am3(A.aR(q,x.w,x.b))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.H(m)
o=A.aE(p)
throw A.i(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$NY,v)},
YS(d,e,f,g,h){return this.bxo(d,e,f,g,h)},
bxo(d,e,a0,a1,a2){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$YS=A.j(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:h=r.a
g=h.gcC().e.a
g=g==null?null:g.r
q=g==null?null:g.a
if(q==null)throw A.i(C.tI)
g=x.w
m=x.b
p=A.R(["updated_at",new A.aT(Date.now(),0,!1).dk().dQ()],g,m)
J.be(p,"display_name",D.o.aK(e))
l=D.o.aK(a2).toLowerCase()
k=l.length===0?null:l
J.be(p,"username",k)
j=D.o.aK(d)
k=j.length===0?null:j
J.be(p,"bio",k)
if(a1)J.be(p,"niche",a0)
t=4
w=7
return A.d(h.aN("profiles").cW(p).bb("id",q).bD(y.b).hX(0),$async$YS)
case 7:o=a4
h=B.am3(A.aR(o,g,m))
u=h
w=1
break
t=2
w=6
break
case 4:t=3
f=s.pop()
n=A.H(f)
h=r.b2_(n)
throw A.i(h)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$YS,v)},
Bv(){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Bv=A.j(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:d=r.a
a0=d.gcC().e.a
a0=a0==null?null:a0.r
k=a0==null?null:a0.a
if(k==null)throw A.i(C.tI)
a2=A
w=3
return A.d(E.c0h(null,D.dYo),$async$Bv)
case 3:j=a2.iF(a4)
if(j==null)throw A.i(C.feB)
w=4
return A.d(j.gZ5().pg(),$async$Bv)
case 4:q=a4
if(J.b_(q)===0)throw A.i(C.fex)
if(J.b_(q)>5242880)throw A.i(C.fez)
i=A.Ls(j.a,$.aBl().a).aow(1)[1]
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
return A.d(d.aN("avatars").Bw(o,q,new A.Dg(!0,p)),$async$Bv)
case 9:d=d.aN("avatars")
h=d.QG(o)
g="object"
f=A.cS(d.a+"/"+g+"/public/"+h,0,null)
n=d.aqM(f.j(0),null,null)
m=A.r(n)+"?t="+Date.now()
w=10
return A.d(r.YT(m),$async$Bv)
case 10:d=a4
u=d
w=1
break
t=2
w=8
break
case 6:t=5
a1=s.pop()
l=A.H(a1)
d=A.aE(l)
throw A.i(d)
w=8
break
case 5:w=2
break
case 8:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Bv,v)},
Fv(){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Fv=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.a
j=k.gcC().e.a
j=j==null?null:j.r
q=j==null?null:j.a
if(q==null)throw A.i(C.tI)
t=4
j=k.ay
j===$&&A.b()
w=7
return A.d(j.aN("avatars").awO(q),$async$Fv)
case 7:p=e
w=J.fA(p)?8:9
break
case 8:j=j.aN("avatars")
m=J.c7(p,new B.b1W(q),x.w)
m=A.J(m,m.$ti.i("al.E"))
w=10
return A.d(j.M(0,m),$async$Fv)
case 10:case 9:j=x.b
w=11
return A.d(k.aN("profiles").cW(A.R(["avatar_url",null,"updated_at",new A.aT(Date.now(),0,!1).dk().dQ()],j,j)).bb("id",q).bD(y.b).hX(0),$async$Fv)
case 11:o=e
j=B.am3(A.aR(o,x.w,j))
u=j
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
n=A.H(i)
k=A.aE(n)
throw A.i(k)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Fv,v)},
YT(d){return this.bxp(d)},
bxp(d){var w=0,v=A.n(x.i),u,t=this,s,r,q,p,o
var $async$YT=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.gcC().e.a
q=q==null?null:q.r
s=q==null?null:q.a
if(s==null)throw A.i(C.tI)
q=x.b
p=B
o=A
w=3
return A.d(r.aN("profiles").cW(A.R(["avatar_url",d,"updated_at",new A.aT(Date.now(),0,!1).dk().dQ()],q,q)).bb("id",s).bD(y.b).hX(0),$async$YT)
case 3:u=p.am3(o.aR(f,x.w,q))
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$YT,v)},
O0(){var w=0,v=A.n(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$O0=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.a
l=m.gcC().e.a
l=l==null?null:l.r
q=l==null?null:l.a
if(q==null){u=A.c([],x.f)
w=1
break}t=4
w=7
return A.d(m.aN("room_members").bD("room_id, role_id, case_rooms!inner(id, name)").bb("user_id",q).bb("status","approved"),$async$O0)
case 7:p=e
m=J.c7(p,new B.b1V(),x.a)
m=A.J(m,m.$ti.i("al.E"))
u=m
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.H(k)
m=A.aE(o)
throw A.i(m)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$O0,v)},
b2_(d){var w,v=J.bm(d).toLowerCase()
if(!D.o.n(v,"profiles_username_unique"))w=D.o.n(v,"duplicate key")&&D.o.n(v,"username")
else w=!0
if(w)return C.fey
if(D.o.n(v,"profiles_username_format"))return C.feA
return A.aE(d)}}
var z=a.updateTypes(["n1(af<f,@>)","w9(as)"])
B.bTB.prototype={
$1(d){return d.length!==0},
$S:11}
B.bTC.prototype={
$1(d){var w=d.toLowerCase()
return w[0].toUpperCase()+D.o.bW(w,1)},
$S:20}
B.b1W.prototype={
$1(d){return this.a+"/"+d.a},
$S:1128}
B.b1V.prototype={
$1(d){var w=x.w,v=x.b,u=A.aR(d,w,v),t=A.aR(x.B.a(J.A(u,"case_rooms")),w,v)
A.Y(J.A(u,"room_id"))
v=A.ab(J.A(t,"name"))
w=v==null?"Untitled room":v
return new B.n1(w,A.Y(J.A(u,"role_id")))},
$S:z+0}
B.bXi.prototype={
$1(d){return new B.w9(d.V($.dZ(),x.k))},
$S:z+1};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.zJ,A.e6)
v(A.cx,[B.bTB,B.bTC,B.b1W,B.b1V,B.bXi])
v(A.C,[B.iu,B.n1,B.w9])})()
A.d1(b.typeUniverse,JSON.parse('{"zJ":{"aG":[]}}'))
var y={b:"id, display_name, avatar_url, username, bio, niche"}
var x={f:A.L("y<n1>"),v:A.L("w<n1>"),B:A.L("af<@,@>"),a:A.L("n1"),w:A.L("f"),k:A.L("iq"),i:A.L("iu"),b:A.L("@"),r:A.L("iu?")};(function constants(){C.tI=new A.q3("Not signed in.")
C.fex=new B.zJ("That image is empty.")
C.fey=new B.zJ("That username is taken \u2014 try another.")
C.fez=new B.zJ("Pick an image under 5 MB.")
C.feA=new B.zJ("Usernames need 3\u201320 lowercase letters, numbers or _.")
C.feB=new B.zJ("No image selected.")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cRh","R3",()=>A.eW(new B.bXi(),A.L("w9")))})()};
(a=>{a["kup4C/6wQflUsquG2jmN9FWsZiQ="]=a.current})($__dart_deferred_initializers__);