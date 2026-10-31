((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={zK:function zK(d){this.a=d},
a8q(d){var w,v
for(w=0;w<5;++w){v=D.Dx[w]
if(v.a===d)return v.b}return B.cCF(d)},
cCF(d){var w,v=D.o.n1(d,A.cf("[_\\-\\s]+",!0,!1)),u=A.a3(v),t=u.i("dB<1,f>")
v=A.J(new A.dB(new A.ag(v,new B.bTP(),u.i("ag<1>")),new B.bTQ(),t),t.i("z.E"))
v.$flags=1
w=v
if(w.length===0)return"Unknown"
return D.i.b2(w," ")},
bTP:function bTP(){},
bTQ:function bTQ(){},
am8(d){var w=A.Z(d.h(0,"id")),v=A.ab(d.h(0,"display_name"))
if(v==null)v=""
return new B.iv(w,v,A.ab(d.h(0,"avatar_url")),A.ab(d.h(0,"username")),A.ab(d.h(0,"bio")),A.ab(d.h(0,"niche")))},
iv:function iv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
n1:function n1(d,e){this.b=d
this.c=e},
wa:function wa(d){this.a=d},
b25:function b25(d){this.a=d},
b24:function b24(){},
bXB:function bXB(){}},C,E
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[71],B)
C=c[176]
E=c[28]
B.zK.prototype={}
B.iv.prototype={
gbS(){return this.a}}
B.n1.prototype={}
B.wa.prototype={
O2(d,e){return this.aBr(d,e)},
aBr(d,e){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$O2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
l=r.a
k=l.gcw().e.a
k=k==null?null:k.r
q=k==null?null:k.a
w=q==null?7:9
break
case 7:g=null
w=8
break
case 9:w=10
return A.d(l.aM("profiles").bz(y.b).b7("id",q).ls(),$async$O2)
case 10:case 8:p=g
l=p
l=A.ab(l==null?null:J.A(l,"display_name"))
if((l==null?null:D.o.aK(l).length!==0)===!0){l=p
l.toString
j=A.Z(J.A(l,"display_name"))}else j=d
o=j
if(p==null){l=q
if(l==null)l=""
u=new B.iv(l,o,null,null,null,null)
w=1
break}n=A.aS(p,x.w,x.b)
J.bf(n,"display_name",o)
l=B.am8(n)
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
return A.m($async$O2,v)},
O0(d){return this.aBn(d)},
aBn(d){var w=0,v=A.n(x.r),u,t=2,s=[],r=this,q,p,o,n,m
var $async$O0=A.j(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.d(r.a.aM("profiles").bz(y.b).b7("id",d).ls(),$async$O0)
case 7:q=f
if(q==null){u=null
w=1
break}o=B.am8(A.aS(q,x.w,x.b))
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
return A.m($async$O0,v)},
YW(d,e,f,g,h){return this.bxD(d,e,f,g,h)},
bxD(d,e,a0,a1,a2){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$YW=A.j(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:h=r.a
g=h.gcw().e.a
g=g==null?null:g.r
q=g==null?null:g.a
if(q==null)throw A.i(C.tJ)
g=x.w
m=x.b
p=A.R(["updated_at",new A.aR(Date.now(),0,!1).dk().dK()],g,m)
J.bf(p,"display_name",D.o.aK(e))
l=D.o.aK(a2).toLowerCase()
k=l.length===0?null:l
J.bf(p,"username",k)
j=D.o.aK(d)
k=j.length===0?null:j
J.bf(p,"bio",k)
if(a1)J.bf(p,"niche",a0)
t=4
w=7
return A.d(h.aM("profiles").cW(p).b7("id",q).bz(y.b).hX(0),$async$YW)
case 7:o=a4
h=B.am8(A.aS(o,g,m))
u=h
w=1
break
t=2
w=6
break
case 4:t=3
f=s.pop()
n=A.H(f)
h=r.b2a(n)
throw A.i(h)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$YW,v)},
Bv(){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Bv=A.j(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:d=r.a
a0=d.gcw().e.a
a0=a0==null?null:a0.r
k=a0==null?null:a0.a
if(k==null)throw A.i(C.tJ)
a2=A
w=3
return A.d(E.c0B(null,D.dYu),$async$Bv)
case 3:j=a2.iG(a4)
if(j==null)throw A.i(C.feG)
w=4
return A.d(j.gZ9().pg(),$async$Bv)
case 4:q=a4
if(J.b_(q)===0)throw A.i(C.feC)
if(J.b_(q)>5242880)throw A.i(C.feE)
i=A.Lu(j.a,$.aBs().a).aoE(1)[1]
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
return A.d(d.aM("avatars").Bw(o,q,new A.Dg(!0,p)),$async$Bv)
case 9:d=d.aM("avatars")
h=d.QJ(o)
g="object"
f=A.cS(d.a+"/"+g+"/public/"+h,0,null)
n=d.aqU(f.j(0),null,null)
m=A.r(n)+"?t="+Date.now()
w=10
return A.d(r.YX(m),$async$Bv)
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
Fy(){var w=0,v=A.n(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Fy=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.a
j=k.gcw().e.a
j=j==null?null:j.r
q=j==null?null:j.a
if(q==null)throw A.i(C.tJ)
t=4
j=k.ay
j===$&&A.b()
w=7
return A.d(j.aM("avatars").awV(q),$async$Fy)
case 7:p=e
w=J.fA(p)?8:9
break
case 8:j=j.aM("avatars")
m=J.c7(p,new B.b25(q),x.w)
m=A.J(m,m.$ti.i("al.E"))
w=10
return A.d(j.M(0,m),$async$Fy)
case 10:case 9:j=x.b
w=11
return A.d(k.aM("profiles").cW(A.R(["avatar_url",null,"updated_at",new A.aR(Date.now(),0,!1).dk().dK()],j,j)).b7("id",q).bz(y.b).hX(0),$async$Fy)
case 11:o=e
j=B.am8(A.aS(o,x.w,j))
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
return A.m($async$Fy,v)},
YX(d){return this.bxE(d)},
bxE(d){var w=0,v=A.n(x.i),u,t=this,s,r,q,p,o
var $async$YX=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.gcw().e.a
q=q==null?null:q.r
s=q==null?null:q.a
if(s==null)throw A.i(C.tJ)
q=x.b
p=B
o=A
w=3
return A.d(r.aM("profiles").cW(A.R(["avatar_url",d,"updated_at",new A.aR(Date.now(),0,!1).dk().dK()],q,q)).b7("id",s).bz(y.b).hX(0),$async$YX)
case 3:u=p.am8(o.aS(f,x.w,q))
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$YX,v)},
O3(){var w=0,v=A.n(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$O3=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.a
l=m.gcw().e.a
l=l==null?null:l.r
q=l==null?null:l.a
if(q==null){u=A.c([],x.f)
w=1
break}t=4
w=7
return A.d(m.aM("room_members").bz("room_id, role_id, case_rooms!inner(id, name)").b7("user_id",q).b7("status","approved"),$async$O3)
case 7:p=e
m=J.c7(p,new B.b24(),x.a)
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
return A.m($async$O3,v)},
b2a(d){var w,v=J.bl(d).toLowerCase()
if(!D.o.n(v,"profiles_username_unique"))w=D.o.n(v,"duplicate key")&&D.o.n(v,"username")
else w=!0
if(w)return C.feD
if(D.o.n(v,"profiles_username_format"))return C.feF
return A.aE(d)}}
var z=a.updateTypes(["n1(af<f,@>)","wa(as)"])
B.bTP.prototype={
$1(d){return d.length!==0},
$S:11}
B.bTQ.prototype={
$1(d){var w=d.toLowerCase()
return w[0].toUpperCase()+D.o.bW(w,1)},
$S:17}
B.b25.prototype={
$1(d){return this.a+"/"+d.a},
$S:1133}
B.b24.prototype={
$1(d){var w=x.w,v=x.b,u=A.aS(d,w,v),t=A.aS(x.B.a(J.A(u,"case_rooms")),w,v)
A.Z(J.A(u,"room_id"))
v=A.ab(J.A(t,"name"))
w=v==null?"Untitled room":v
return new B.n1(w,A.Z(J.A(u,"role_id")))},
$S:z+0}
B.bXB.prototype={
$1(d){return new B.wa(d.V($.e_(),x.k))},
$S:z+1};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.zK,A.eh)
v(A.cy,[B.bTP,B.bTQ,B.b25,B.b24,B.bXB])
v(A.C,[B.iv,B.n1,B.wa])})()
A.d1(b.typeUniverse,JSON.parse('{"zK":{"aG":[]}}'))
var y={b:"id, display_name, avatar_url, username, bio, niche"}
var x={f:A.L("y<n1>"),v:A.L("w<n1>"),B:A.L("af<@,@>"),a:A.L("n1"),w:A.L("f"),k:A.L("ir"),i:A.L("iv"),b:A.L("@"),r:A.L("iv?")};(function constants(){C.tJ=new A.q3("Not signed in.")
C.feC=new B.zK("That image is empty.")
C.feD=new B.zK("That username is taken \u2014 try another.")
C.feE=new B.zK("Pick an image under 5 MB.")
C.feF=new B.zK("Usernames need 3\u201320 lowercase letters, numbers or _.")
C.feG=new B.zK("No image selected.")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cRB","R5",()=>A.eY(new B.bXB(),A.L("wa")))})()};
(a=>{a["d18OhlMjwdVVA5YUJ7OgSlpDfWw="]=a.current})($__dart_deferred_initializers__);