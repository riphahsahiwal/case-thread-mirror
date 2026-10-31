((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={zL:function zL(d){this.a=d},
a8p(d){var w,v
for(w=0;w<5;++w){v=D.Dy[w]
if(v.a===d)return v.b}return B.cCO(d)},
cCO(d){var w,v=D.o.n2(d,A.cf("[_\\-\\s]+",!0,!1)),u=A.a3(v),t=u.i("dC<1,f>")
v=A.J(new A.dC(new A.ag(v,new B.bU2(),u.i("ag<1>")),new B.bU3(),t),t.i("z.E"))
v.$flags=1
w=v
if(w.length===0)return"Unknown"
return D.i.b2(w," ")},
bU2:function bU2(){},
bU3:function bU3(){},
am8(d){var w=A.Y(d.h(0,"id")),v=A.ab(d.h(0,"display_name"))
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
wd:function wd(d){this.a=d},
b2c:function b2c(d){this.a=d},
b2b:function b2b(){},
bXL:function bXL(){}},C,E
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[72],B)
C=c[181]
E=c[29]
B.zL.prototype={}
B.iu.prototype={
gbT(){return this.a}}
B.n1.prototype={}
B.wd.prototype={
O4(d,e){return this.aBw(d,e)},
aBw(d,e){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$O4=A.j(function(f,g){if(f===1){s.push(g)
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
return A.d(l.aM("profiles").bz(y.b).b6("id",q).k8(),$async$O4)
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
l=B.am8(n)
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
return A.m($async$O4,v)},
O2(d){return this.aBt(d)},
aBt(d){var w=0,v=A.n(x.r),u,t=2,s=[],r=this,q,p,o,n,m
var $async$O2=A.j(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.d(r.a.aM("profiles").bz(y.b).b6("id",d).k8(),$async$O2)
case 7:q=f
if(q==null){u=null
w=1
break}o=B.am8(A.aR(q,x.w,x.b))
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
return A.m($async$O2,v)},
YY(d,e,f,g,h){return this.bxF(d,e,f,g,h)},
bxF(d,e,a0,a1,a2){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$YY=A.j(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:h=r.a
g=h.gcC().e.a
g=g==null?null:g.r
q=g==null?null:g.a
if(q==null)throw A.i(C.tI)
g=x.w
m=x.b
p=A.R(["updated_at",new A.aU(Date.now(),0,!1).dk().dR()],g,m)
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
return A.d(h.aM("profiles").cV(p).b6("id",q).bz(y.b).hZ(0),$async$YY)
case 7:o=a4
h=B.am8(A.aR(o,g,m))
u=h
w=1
break
t=2
w=6
break
case 4:t=3
f=s.pop()
n=A.G(f)
h=r.b2e(n)
throw A.i(h)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$YY,v)},
Bw(){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Bw=A.j(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:d=r.a
a0=d.gcC().e.a
a0=a0==null?null:a0.r
k=a0==null?null:a0.a
if(k==null)throw A.i(C.tI)
a2=A
w=3
return A.d(E.c0J(null,D.dYq),$async$Bw)
case 3:j=a2.iF(a4)
if(j==null)throw A.i(C.feM)
w=4
return A.d(j.gZb().ph(),$async$Bw)
case 4:q=a4
if(J.b_(q)===0)throw A.i(C.feI)
if(J.b_(q)>5242880)throw A.i(C.feK)
i=A.Lw(j.a,$.aBq().a).aoG(1)[1]
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
return A.d(d.aM("avatars").Bx(o,q,new A.Dk(!0,p)),$async$Bw)
case 9:d=d.aM("avatars")
h=d.QL(o)
g="object"
f=A.cT(d.a+"/"+g+"/public/"+h,0,null)
n=d.aqY(f.j(0),null,null)
m=A.r(n)+"?t="+Date.now()
w=10
return A.d(r.YZ(m),$async$Bw)
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
return A.m($async$Bw,v)},
Fy(){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Fy=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.a
j=k.gcC().e.a
j=j==null?null:j.r
q=j==null?null:j.a
if(q==null)throw A.i(C.tI)
t=4
j=k.ay
j===$&&A.b()
w=7
return A.d(j.aM("avatars").ax0(q),$async$Fy)
case 7:p=e
w=J.fB(p)?8:9
break
case 8:j=j.aM("avatars")
m=J.c7(p,new B.b2c(q),x.w)
m=A.J(m,m.$ti.i("al.E"))
w=10
return A.d(j.M(0,m),$async$Fy)
case 10:case 9:j=x.b
w=11
return A.d(k.aM("profiles").cV(A.R(["avatar_url",null,"updated_at",new A.aU(Date.now(),0,!1).dk().dR()],j,j)).b6("id",q).bz(y.b).hZ(0),$async$Fy)
case 11:o=e
j=B.am8(A.aR(o,x.w,j))
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
return A.m($async$Fy,v)},
YZ(d){return this.bxG(d)},
bxG(d){var w=0,v=A.n(x.i),u,t=this,s,r,q,p,o
var $async$YZ=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.gcC().e.a
q=q==null?null:q.r
s=q==null?null:q.a
if(s==null)throw A.i(C.tI)
q=x.b
p=B
o=A
w=3
return A.d(r.aM("profiles").cV(A.R(["avatar_url",d,"updated_at",new A.aU(Date.now(),0,!1).dk().dR()],q,q)).b6("id",s).bz(y.b).hZ(0),$async$YZ)
case 3:u=p.am8(o.aR(f,x.w,q))
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$YZ,v)},
O5(){var w=0,v=A.n(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$O5=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.a
l=m.gcC().e.a
l=l==null?null:l.r
q=l==null?null:l.a
if(q==null){u=A.c([],x.f)
w=1
break}t=4
w=7
return A.d(m.aM("room_members").bz("room_id, role_id, case_rooms!inner(id, name)").b6("user_id",q).b6("status","approved"),$async$O5)
case 7:p=e
m=J.c7(p,new B.b2b(),x.a)
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
return A.m($async$O5,v)},
b2e(d){var w,v=J.bm(d).toLowerCase()
if(!D.o.n(v,"profiles_username_unique"))w=D.o.n(v,"duplicate key")&&D.o.n(v,"username")
else w=!0
if(w)return C.feJ
if(D.o.n(v,"profiles_username_format"))return C.feL
return A.aB(d)}}
var z=a.updateTypes(["n1(af<f,@>)","wd(as)"])
B.bU2.prototype={
$1(d){return d.length!==0},
$S:11}
B.bU3.prototype={
$1(d){var w=d.toLowerCase()
return w[0].toUpperCase()+D.o.bW(w,1)},
$S:20}
B.b2c.prototype={
$1(d){return this.a+"/"+d.a},
$S:1129}
B.b2b.prototype={
$1(d){var w=x.w,v=x.b,u=A.aR(d,w,v),t=A.aR(x.B.a(J.A(u,"case_rooms")),w,v)
A.Y(J.A(u,"room_id"))
v=A.ab(J.A(t,"name"))
w=v==null?"Untitled room":v
return new B.n1(w,A.Y(J.A(u,"role_id")))},
$S:z+0}
B.bXL.prototype={
$1(d){return new B.wd(d.V($.dZ(),x.k))},
$S:z+1};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.zL,A.e_)
v(A.cw,[B.bU2,B.bU3,B.b2c,B.b2b,B.bXL])
v(A.C,[B.iu,B.n1,B.wd])})()
A.cZ(b.typeUniverse,JSON.parse('{"zL":{"aG":[]}}'))
var y={b:"id, display_name, avatar_url, username, bio, niche"}
var x={f:A.L("y<n1>"),v:A.L("w<n1>"),B:A.L("af<@,@>"),a:A.L("n1"),w:A.L("f"),k:A.L("iq"),i:A.L("iu"),b:A.L("@"),r:A.L("iu?")};(function constants(){C.tI=new A.q4("Not signed in.")
C.feI=new B.zL("That image is empty.")
C.feJ=new B.zL("That username is taken \u2014 try another.")
C.feK=new B.zL("Pick an image under 5 MB.")
C.feL=new B.zL("Usernames need 3\u201320 lowercase letters, numbers or _.")
C.feM=new B.zL("No image selected.")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cRM","Ra",()=>A.eM(new B.bXL(),A.L("wd")))})()};
(a=>{a["Qlo8bBGE/dL1h7zFUIUKwJ3E3mg="]=a.current})($__dart_deferred_initializers__);