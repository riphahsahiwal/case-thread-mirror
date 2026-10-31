((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,E,B={Ai:function Ai(d){this.a=d},
a9D(d){var w,v
for(w=0;w<5;++w){v=D.DR[w]
if(v.a===d)return v.b}return B.cI4(d)},
cI4(d){var w,v=D.n.nl(d,A.cd("[_\\-\\s]+",!0,!1)),u=A.a6(v),t=u.i("dE<1,f>")
v=A.K(new A.dE(new A.ag(v,new B.bY_(),u.i("ag<1>")),new B.bY0(),t),t.i("z.E"))
v.$flags=1
w=v
if(w.length===0)return"Unknown"
return D.h.b4(w," ")},
bY_:function bY_(){},
bY0:function bY0(){},
anp(d){var w=A.U(d.h(0,"id")),v=A.a9(d.h(0,"display_name"))
if(v==null)v=""
return new B.iF(w,v,A.a9(d.h(0,"avatar_url")),A.a9(d.h(0,"username")),A.a9(d.h(0,"bio")),A.a9(d.h(0,"niche")))},
iF:function iF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ne:function ne(d,e){this.b=d
this.c=e},
wD:function wD(d){this.a=d},
b4i:function b4i(d){this.a=d},
b4h:function b4h(){},
c11:function c11(){}},C
J=c[1]
A=c[0]
D=c[2]
E=c[35]
B=a.updateHolder(c[78],B)
C=c[211]
B.Ai.prototype={}
B.iF.prototype={
gbE(){return this.a}}
B.ne.prototype={
gBt(){return this.b}}
B.wD.prototype={
OA(d,e){return this.aCR(d,e)},
aCR(d,e){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$OA=A.i(function(f,g){if(f===1){s.push(g)
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
return A.e(l.az("profiles").bn(y.b).aY("id",q).jt(),$async$OA)
case 10:case 8:p=g
l=p
l=A.a9(l==null?null:J.A(l,"display_name"))
if((l==null?null:D.n.aI(l).length!==0)===!0){l=p
l.toString
j=A.U(J.A(l,"display_name"))}else j=d
o=j
if(p==null){l=q
if(l==null)l=""
u=new B.iF(l,o,null,null,null,null)
w=1
break}n=A.aM(p,x.w,x.b)
J.bg(n,"display_name",o)
l=B.anp(n)
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
return A.l($async$OA,v)},
Oy(d){return this.aCO(d)},
aCO(d){var w=0,v=A.m(x.r),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Oy=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.e(r.a.az("profiles").bn(y.b).aY("id",d).jt(),$async$Oy)
case 7:q=f
if(q==null){u=null
w=1
break}o=B.anp(A.aM(q,x.w,x.b))
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
return A.l($async$Oy,v)},
ZH(d,e,f,g,h){return this.bzZ(d,e,f,g,h)},
bzZ(d,e,a0,a1,a2){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ZH=A.i(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:h=r.a
g=h.gcb().e.a
g=g==null?null:g.r
q=g==null?null:g.a
if(q==null)throw A.n(C.tQ)
g=x.w
m=x.b
p=A.Q(["updated_at",new A.aE(Date.now(),0,!1).d6().d_()],g,m)
J.bg(p,"display_name",D.n.aI(e))
l=D.n.aI(a2).toLowerCase()
k=l.length===0?null:l
J.bg(p,"username",k)
j=D.n.aI(d)
k=j.length===0?null:j
J.bg(p,"bio",k)
if(a1)J.bg(p,"niche",a0)
t=4
w=7
return A.e(h.az("profiles").cX(p).aY("id",q).bn(y.b).i3(0),$async$ZH)
case 7:o=a4
h=B.anp(A.aM(o,g,m))
u=h
w=1
break
t=2
w=6
break
case 4:t=3
f=s.pop()
n=A.G(f)
h=r.b4e(n)
throw A.n(h)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$ZH,v)},
BK(){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$BK=A.i(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:d=r.a
a0=d.gcb().e.a
a0=a0==null?null:a0.r
k=a0==null?null:a0.a
if(k==null)throw A.n(C.tQ)
a2=A
w=3
return A.e(E.aQU(null,D.dZA,!0),$async$BK)
case 3:j=a2.ic(a4)
if(j==null)throw A.n(C.fg7)
w=4
return A.e(j.gO_().o7(),$async$BK)
case 4:q=a4
if(J.aY(q)===0)throw A.n(C.fg3)
if(J.aY(q)>5242880)throw A.n(C.fg5)
i=A.Me(j.a,$.aCS().a).apN(1)[1]
a0=i.length===0?null:D.n.bY(i,1)
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
return A.e(d.az("avatars").BL(o,q,new A.E_(!0,p)),$async$BK)
case 9:d=d.az("avatars")
h=d.Rj(o)
g="object"
f=A.cY(d.a+"/"+g+"/public/"+h,0,null)
n=d.as9(f.j(0),null,null)
m=A.q(n)+"?t="+Date.now()
w=10
return A.e(r.ZI(m),$async$BK)
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
return A.l($async$BK,v)},
FN(){var w=0,v=A.m(x.i),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$FN=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.a
j=k.gcb().e.a
j=j==null?null:j.r
q=j==null?null:j.a
if(q==null)throw A.n(C.tQ)
t=4
j=k.ay
j===$&&A.b()
w=7
return A.e(j.az("avatars").ayc(q),$async$FN)
case 7:p=e
w=J.fK(p)?8:9
break
case 8:j=j.az("avatars")
m=J.bX(p,new B.b4i(q),x.w)
m=A.K(m,m.$ti.i("ai.E"))
w=10
return A.e(j.M(0,m),$async$FN)
case 10:case 9:j=x.b
w=11
return A.e(k.az("profiles").cX(A.Q(["avatar_url",null,"updated_at",new A.aE(Date.now(),0,!1).d6().d_()],j,j)).aY("id",q).bn(y.b).i3(0),$async$FN)
case 11:o=e
j=B.anp(A.aM(o,x.w,j))
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
return A.l($async$FN,v)},
ZI(d){return this.bA_(d)},
bA_(d){var w=0,v=A.m(x.i),u,t=this,s,r,q,p,o
var $async$ZI=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.gcb().e.a
q=q==null?null:q.r
s=q==null?null:q.a
if(s==null)throw A.n(C.tQ)
q=x.b
p=B
o=A
w=3
return A.e(r.az("profiles").cX(A.Q(["avatar_url",d,"updated_at",new A.aE(Date.now(),0,!1).d6().d_()],q,q)).aY("id",s).bn(y.b).i3(0),$async$ZI)
case 3:u=p.anp(o.aM(f,x.w,q))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$ZI,v)},
OB(){var w=0,v=A.m(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$OB=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.a
l=m.gcb().e.a
l=l==null?null:l.r
q=l==null?null:l.a
if(q==null){u=A.c([],x.f)
w=1
break}t=4
w=7
return A.e(m.az("room_members").bn("room_id, role_id, case_rooms!inner(id, name)").aY("user_id",q).aY("status","approved"),$async$OB)
case 7:p=e
m=J.bX(p,new B.b4h(),x.a)
m=A.K(m,m.$ti.i("ai.E"))
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
return A.l($async$OB,v)},
b4e(d){var w,v=J.be(d).toLowerCase()
if(!D.n.n(v,"profiles_username_unique"))w=D.n.n(v,"duplicate key")&&D.n.n(v,"username")
else w=!0
if(w)return C.fg4
if(D.n.n(v,"profiles_username_format"))return C.fg6
return A.aC(d)}}
var z=a.updateTypes(["ne(ad<f,@>)","wD(al)"])
B.bY_.prototype={
$1(d){return d.length!==0},
$S:11}
B.bY0.prototype={
$1(d){var w=d.toLowerCase()
return w[0].toUpperCase()+D.n.bY(w,1)},
$S:18}
B.b4i.prototype={
$1(d){return this.a+"/"+d.a},
$S:1134}
B.b4h.prototype={
$1(d){var w=x.w,v=x.b,u=A.aM(d,w,v),t=A.aM(x.B.a(J.A(u,"case_rooms")),w,v)
A.U(J.A(u,"room_id"))
v=A.a9(J.A(t,"name"))
w=v==null?"Untitled room":v
return new B.ne(w,A.U(J.A(u,"role_id")))},
$S:z+0}
B.c11.prototype={
$1(d){return new B.wD(d.S($.dB(),x.k))},
$S:z+1};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.Ai,A.e6)
v(A.cg,[B.bY_,B.bY0,B.b4i,B.b4h,B.c11])
v(A.E,[B.iF,B.ne,B.wD])})()
A.cC(b.typeUniverse,JSON.parse('{"Ai":{"aI":[]}}'))
var y={b:"id, display_name, avatar_url, username, bio, niche"}
var x={f:A.J("x<ne>"),v:A.J("v<ne>"),B:A.J("ad<@,@>"),a:A.J("ne"),w:A.J("f"),k:A.J("h6"),i:A.J("iF"),b:A.J("@"),r:A.J("iF?")};(function constants(){C.tQ=new A.qq("Not signed in.")
C.fg3=new B.Ai("That image is empty.")
C.fg4=new B.Ai("That username is taken \u2014 try another.")
C.fg5=new B.Ai("Pick an image under 5 MB.")
C.fg6=new B.Ai("Usernames need 3\u201320 lowercase letters, numbers or _.")
C.fg7=new B.Ai("No image selected.")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cXo","S2",()=>A.er(new B.c11(),A.J("wD")))})()};
(a=>{a["Q09JhP01py6fMRq4xvFTLrHK0oU="]=a.current})($__dart_deferred_initializers__);