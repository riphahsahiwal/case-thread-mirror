((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
agu(d){var w,v,u,t,s,r=d.h(0,"attributes"),q=d.h(0,"aliases"),p=A.Z(d.h(0,"id")),o=A.a7(d.h(0,"type"))
if(o==null)o=A.a7(d.h(0,"entity_type"))
if(o==null)o="person"
w=A.a7(d.h(0,"name"))
if(w==null)w=""
v=x.f.b(r)?A.aQ(r,x.N,x.z):C.dx
if(x.j.b(q)){u=J.c2(q,new B.aWZ(),x.N)
u=A.J(u,u.$ti.i("aj.E"))}else u=C.at
t=A.dh(d.h(0,"lat"))
if(t==null)t=null
s=A.dh(d.h(0,"lng"))
if(s==null)s=null
return new B.dJ(p,o,w,v,u,t,s,A.a7(d.h(0,"photo_path")),null)},
ctJ(d){var w,v,u=x.g,t=u.a(d.h(0,"nodes"))
if(t==null)t=[]
t=J.c2(t,new B.aOi(),x.Y)
w=A.J(t,t.$ti.i("aj.E"))
u=u.a(d.h(0,"edges"))
if(u==null)u=[]
u=J.c2(u,new B.aOj(),x.T)
v=A.J(u,u.$ti.i("aj.E"))
return new B.hy(w,v)},
dJ:function dJ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aWZ:function aWZ(){},
ki:function ki(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hy:function hy(d,e){this.a=d
this.b=e},
aOi:function aOi(){},
aOj:function aOj(){},
aOk:function aOk(d){this.a=d},
NA:function NA(d){this.a=d},
bf7:function bf7(d){this.a=d},
bf3:function bf3(){},
bf4:function bf4(d){this.a=d},
bf5:function bf5(){},
bf6:function bf6(d){this.a=d},
bf8:function bf8(){},
bf9:function bf9(){},
bYG:function bYG(){},
bZd:function bZd(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[76],B)
B.dJ.prototype={
gbQ(){return this.a}}
B.ki.prototype={
gbQ(){return this.a}}
B.hy.prototype={
nS(d){return A.im(J.dC(this.a,new B.aOk(d)))}}
B.NA.prototype={
Gu(d){return this.aC0(d)},
aC0(d){var w=0,v=A.m(x.h),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$Gu=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
m=x.N
l=r.a.ab3("get_entity_map",A.Q(["target_room",d],m,m))
w=7
return A.d(l,$async$Gu)
case 7:q=f
p=B.ctJ(A.aQ(x.f.a(q),m,x.z))
w=8
return A.d(A.kb(J.c2(p.a,new B.bf7(r),x.I),!1,x.Y),$async$Gu)
case 8:o=f
m=p.b
u=new B.hy(o,m)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
n=A.F(j)
m=A.aw(n)
throw A.n(m)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Gu,v)},
Kd(d,e,f,g,h,i,j){return this.bhQ(d,e,f,g,h,i,j)},
bhP(d,e,f,g){return this.Kd(C.at,d,null,null,e,f,g)},
bhQ(d,e,f,g,h,a0,a1){var w=0,v=A.m(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Kd=A.i(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:t=4
n=r.a.aL("entities")
m=x.N
q=A.C(m,x.K)
J.bd(q,"room_id",a1)
J.bd(q,"entity_type",e)
J.bd(q,"name",h)
l=x.z
k=a0.length===0?A.C(m,l):A.Q(["note",a0],m,l)
J.bd(q,"attributes",k)
if(d.length!==0)J.bd(q,"aliases",d)
if(f!=null&&g!=null)J.xU(q,A.Q(["lat",f,"lng",g],m,x.i))
q=n.ef(0,q).by(y.c).hW(0)
w=7
return A.d(q,$async$Kd)
case 7:p=a3
q=B.agu(A.aQ(p,m,l))
u=q
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.F(i)
q=A.aw(o)
throw A.n(q)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Kd,v)},
EV(d,e){return this.boq(d,e)},
boq(b1,b2){var w=0,v=A.m(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$EV=A.i(function(b3,b4){if(b3===1){s.push(b4)
w=t}for(;;)switch(w){case 0:t=4
q=C.n.aI(b2).toLowerCase()
if(J.aY(q)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=J.Rx(q,A.c9("\\s+",!0,!1))
a2=A.a6(a1).i("am<1>")
a3=A.J(new A.am(a1,new B.bf3(),a2),a2.i("z.E"))
p=a3
if(J.aY(p)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=r.a
a2=a1.gcc().e.a
o=(a2==null?null:a2.r).a
a2=a1.aL("room_members").by("room_id").b7("user_id",o).b7("status","approved")
w=7
return A.d(a2,$async$EV)
case 7:n=b4
a2=a1.aL("case_rooms").by("id").b7("owner_id",o)
w=8
return A.d(a2,$async$EV)
case 8:m=b4
a2=x.N
l=A.aL(a2)
for(a4=x.j,a5=J.aO(a4.a(n)),a6=x.f;a5.q();){k=a5.gI()
J.dm(l,A.Z(a6.a(k).h(0,"room_id")))}for(a5=J.aO(a4.a(m));a5.q();){j=a5.gI()
J.dm(l,A.Z(a6.a(j).h(0,"id")))}J.Ce(l,b1)
if(l.a===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=a1.aL("entities").by("name, room_id, case_rooms!inner(name)")
a5=l
a5=A.J(a5,A.t(a5).c)
a1=a1.Ww("room_id",a5).Ww("entity_type",A.c(["person","org"],x.S)).k0(500)
w=9
return A.d(a1,$async$EV)
case 9:i=b4
h=A.c([],x.m)
for(a1=J.aO(a4.a(i));a1.q();){g=a1.gI()
f=a6.a(g)
e=A.Z(J.A(f,"name")).toLowerCase()
a7=A.a7(a6.a(J.A(f,"case_rooms")).h(0,"name"))
d=a7==null?"Unknown case":a7
if(!J.c9P(p,new B.bf4(e))){a4=J.Rx(e,A.c9("\\s+",!0,!1))
a8=new A.am(a4,new B.bf5(),A.a6(a4).i("am<1>")).dR(0,new B.bf6(q))}else a8=!0
a0=a8
if(a0)J.dm(h,A.Q(["name",A.Z(J.A(f,"name")),"room",d],a2,a2))}u=h
w=1
break
t=2
w=6
break
case 4:t=3
b0=s.pop()
a1=A.c([],x.m)
u=a1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$EV,v)},
NB(d,e,f,g,h,i,j,k,l,m){return this.byO(d,e,f,g,h,i,j,k,l,m)},
byN(d,e){var w=null
return this.NB(w,w,!1,!1,d,w,w,w,w,e)},
byO(d,e,f,g,h,i,a0,a1,a2,a3){var w=0,v=A.m(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$NB=A.i(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
n=x.N
m=x.z
q=A.C(n,m)
if(a2!=null)J.bd(q,"name",a2)
if(i!=null)J.bd(q,"entity_type",i)
if(e!=null)J.bd(q,"attributes",e)
if(d!=null)J.bd(q,"aliases",d)
if(f){J.bd(q,"lat",null)
J.bd(q,"lng",null)}else if(a0!=null&&a1!=null){J.bd(q,"lat",a0)
J.bd(q,"lng",a1)}if(a3!=null)J.bd(q,"photo_path",a3)
if(g)J.bd(q,"photo_path",null)
l=r.a.aL("entities").cY(q).b7("id",h).by(y.c).hW(0)
w=7
return A.d(l,$async$NB)
case 7:p=a5
n=B.agu(A.aQ(p,n,m))
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.F(j)
n=A.aw(o)
throw A.n(n)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$NB,v)},
ND(d,e,f,g){return this.bze(d,e,f,g)},
bze(d,e,f,g){var w=0,v=A.m(x.N),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ND=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:l=A.c9("[^a-z0-9]",!0,!1)
k=A.dc(f.toLowerCase(),l,"")
l=k.length
if(l===0)n="jpg"
else n=l>10?C.n.a8(k,0,10):k
A:{if("png"===n){l="image/png"
break A}if("webp"===n){l="image/webp"
break A}if("gif"===n){l="image/gif"
break A}l="image/jpeg"
break A}q=l
p="room_"+g+"/"+e+"."+n
t=4
l=r.a.ay
l===$&&A.b()
l=l.aL("entity-photos").xP(p,d,new A.yI(!0,q))
w=7
return A.d(l,$async$ND)
case 7:u=p
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.F(j)
l=A.aw(o)
throw A.n(l)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$ND,v)},
Nb(d){return this.bwW(d)},
bwW(d){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p
var $async$Nb=A.i(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=s.a.ay
r===$&&A.b()
r=r.aL("entity-photos").M(0,A.c([d],x.S))
w=6
return A.d(r,$async$Nb)
case 6:u=1
w=5
break
case 3:u=2
p=t.pop()
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$Nb,v)},
A6(d){return this.bmu(d)},
bmu(d){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k
var $async$A6=A.i(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=null
u=7
o=s.a.aL("entities").by("photo_path").b7("id",d).kA()
w=10
return A.d(o,$async$A6)
case 10:q=f
o=x.U.a(q)
r=A.a7(o==null?null:o.h(0,"photo_path"))
u=3
w=9
break
case 7:u=6
l=t.pop()
r=null
w=9
break
case 6:w=3
break
case 9:o=s.a
m=o.aL("entity_relationships").q5().ayt("from_entity_id.eq."+d+",to_entity_id.eq."+d)
w=11
return A.d(m,$async$A6)
case 11:o=o.aL("entities").q5().b7("id",d)
w=12
return A.d(o,$async$A6)
case 12:w=r!=null&&r.length!==0?13:14
break
case 13:w=15
return A.d(s.Nb(r),$async$A6)
case 15:case 14:u=1
w=5
break
case 3:u=2
k=t.pop()
p=A.F(k)
o=A.aw(p)
throw A.n(o)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$A6,v)},
Xq(d,e,f,g){return this.btg(d,e,f,g)},
btg(d,e,f,g){var w=0,v=A.m(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Xq=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.ab3("nearby_entities",A.Q(["p_room",g,"p_lat",d,"p_lng",e,"p_radius_km",f],x.N,x.K))
w=7
return A.d(o,$async$Xq)
case 7:q=i
o=J.c2(x.j.a(q),new B.bf8(),x.Y)
o=A.J(o,o.$ti.i("aj.E"))
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
return A.l($async$Xq,v)},
Pm(d,e){return this.aFA(d,e)},
aFA(d,e){var w=0,v=A.m(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Pm=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
o=r.a.ab3("suggest_entities",A.Q(["p_room",e,"p_name",d],o,o))
w=7
return A.d(o,$async$Pm)
case 7:q=g
o=J.c2(x.j.a(q),new B.bf9(),x.Y)
o=A.J(o,o.$ti.i("aj.E"))
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
return A.l($async$Pm,v)},
U8(d,e,f,g){return this.bhZ(d,e,f,g)},
bhZ(d,e,f,g){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o
var $async$U8=A.i(function(h,i){if(h===1){t.push(i)
w=u}for(;;)switch(w){case 0:u=3
q=x.N
q=s.a.aL("entity_relationships").ef(0,A.Q(["room_id",f,"from_entity_id",d,"to_entity_id",g,"relationship_type",e],q,q))
w=6
return A.d(q,$async$U8)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.F(o)
q=A.aw(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$U8,v)},
Zv(d,e,f,g){return this.bz_(d,e,f,g)},
bz_(d,e,f,g){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zv=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
q=A.C(x.N,x.z)
J.bd(q,"relationship_type",f)
J.bd(q,"from_entity_id",d)
J.bd(q,"to_entity_id",g)
if(q.a===0){w=1
break}o=r.a.aL("entity_relationships").cY(q).b7("id",e)
w=7
return A.d(o,$async$Zv)
case 7:t=2
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
return A.l($async$Zv,v)},
Vj(d){return this.bmz(d)},
bmz(d){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o
var $async$Vj=A.i(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a.aL("entity_relationships").q5().b7("id",d)
w=6
return A.d(q,$async$Vj)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.F(o)
q=A.aw(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$Vj,v)},
$iJA:1}
var z=a.updateTypes(["dJ(@)","ki(@)","B(dJ)","M<dJ>(dJ)","NA(ao)","M<hy>(ao,f)"])
B.aWZ.prototype={
$1(d){return J.bk(d)},
$S:48}
B.aOi.prototype={
$1(d){return B.agu(A.aQ(x.f.a(d),x.N,x.z))},
$S:z+0}
B.aOj.prototype={
$1(d){var w,v=A.aQ(x.f.a(d),x.N,x.z),u=A.Z(v.h(0,"id")),t=v.h(0,"from")
t=A.Z(t==null?v.h(0,"from_id"):t)
w=v.h(0,"to")
w=A.Z(w==null?v.h(0,"to_id"):w)
v=A.a7(v.h(0,"type"))
return new B.ki(u,t,w,v==null?"related_to":v)},
$S:z+1}
B.aOk.prototype={
$1(d){return d.a===this.a},
$S:z+2}
B.bf7.prototype={
$1(d){return this.aB3(d)},
aB3(d){var w=0,v=A.m(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$$1=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=d.w
m=n
if(m==null||m.length===0){u=d
w=1
break}t=4
p=r.a.a.ay
p===$&&A.b()
p=p.aL("entity-photos").ws(m,3600)
w=7
return A.d(p,$async$$1)
case 7:q=f
p=A.Z(q)
u=new B.dJ(d.a,d.b,d.c,d.d,d.e,d.f,d.r,n,p)
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=d
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$$1,v)},
$S:z+3}
B.bf3.prototype={
$1(d){return d.length>=3},
$S:12}
B.bf4.prototype={
$1(d){return C.n.n(this.a,d)},
$S:12}
B.bf5.prototype={
$1(d){return d.length>=3},
$S:12}
B.bf6.prototype={
$1(d){return C.n.n(this.a,d)},
$S:12}
B.bf8.prototype={
$1(d){return B.agu(A.aQ(d,x.N,x.z))},
$S:z+0}
B.bf9.prototype={
$1(d){return B.agu(A.aQ(d,x.N,x.z))},
$S:z+0}
B.bYG.prototype={
$1(d){return new B.NA(d.T($.dW(),x.A))},
$S:z+4}
B.bZd.prototype={
$2(d,e){d.T($.dy(),x.L)
return d.T($.uH(),x.s).Gu(e)},
$S:z+5};(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.D,[B.dJ,B.ki,B.hy,B.NA])
w(A.cA,[B.aWZ,B.aOi,B.aOj,B.aOk,B.bf7,B.bf3,B.bf4,B.bf5,B.bf6,B.bf8,B.bf9,B.bYG])
v(B.bZd,A.dI)})()
A.cX(b.typeUniverse,JSON.parse('{"NA":{"JA":[]}}'))
var y={c:"id, entity_type, name, attributes, aliases, lat, lng, photo_path"}
var x=(function rtii(){var w=A.O
return{L:w("aK<ht?>"),s:w("JA"),h:w("hy"),I:w("M<dJ>"),m:w("x<ae<f,f>>"),S:w("x<f>"),G:w("w<dJ>"),x:w("w<ae<f,f>>"),j:w("w<@>"),T:w("ki"),Y:w("dJ"),f:w("ae<@,@>"),K:w("D"),N:w("f"),A:w("iR"),i:w("X"),z:w("@"),g:w("w<@>?"),U:w("ae<@,@>?"),H:w("~")}})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cU3","uH",()=>A.eN(new B.bYG(),x.s))
w($,"cUp","q7",()=>C.bD.$2$1(new B.bZd(),x.h,x.N))})()};
(a=>{a["Zluj1rA4jdLrnlsEirfvw1CsM44="]=a.current})($__dart_deferred_initializers__);