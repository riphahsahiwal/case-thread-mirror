((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
agr(d){var w,v,u,t,s,r=d.h(0,"attributes"),q=d.h(0,"aliases"),p=A.Z(d.h(0,"id")),o=A.a8(d.h(0,"type"))
if(o==null)o=A.a8(d.h(0,"entity_type"))
if(o==null)o="person"
w=A.a8(d.h(0,"name"))
if(w==null)w=""
v=x.f.b(r)?A.aP(r,x.N,x.z):C.dv
if(x.j.b(q)){u=J.c2(q,new B.aWV(),x.N)
u=A.J(u,u.$ti.i("ai.E"))}else u=C.at
t=A.df(d.h(0,"lat"))
if(t==null)t=null
s=A.df(d.h(0,"lng"))
if(s==null)s=null
return new B.dJ(p,o,w,v,u,t,s,A.a8(d.h(0,"photo_path")),null)},
ctv(d){var w,v,u=x.g,t=u.a(d.h(0,"nodes"))
if(t==null)t=[]
t=J.c2(t,new B.aOe(),x.Y)
w=A.J(t,t.$ti.i("ai.E"))
u=u.a(d.h(0,"edges"))
if(u==null)u=[]
u=J.c2(u,new B.aOf(),x.T)
v=A.J(u,u.$ti.i("ai.E"))
return new B.hx(w,v)},
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
aWV:function aWV(){},
ki:function ki(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hx:function hx(d,e){this.a=d
this.b=e},
aOe:function aOe(){},
aOf:function aOf(){},
aOg:function aOg(d){this.a=d},
Nz:function Nz(d){this.a=d},
bf2:function bf2(d){this.a=d},
beZ:function beZ(){},
bf_:function bf_(d){this.a=d},
bf0:function bf0(){},
bf1:function bf1(d){this.a=d},
bf3:function bf3(){},
bf4:function bf4(){},
bYo:function bYo(){},
bYW:function bYW(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[77],B)
B.dJ.prototype={
gbQ(){return this.a}}
B.ki.prototype={
gbQ(){return this.a}}
B.hx.prototype={
nS(d){return A.il(J.dB(this.a,new B.aOg(d)))}}
B.Nz.prototype={
Gs(d){return this.aBX(d)},
aBX(d){var w=0,v=A.m(x.h),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$Gs=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
m=x.N
l=r.a.ab0("get_entity_map",A.Q(["target_room",d],m,m))
w=7
return A.d(l,$async$Gs)
case 7:q=f
p=B.ctv(A.aP(x.f.a(q),m,x.z))
w=8
return A.d(A.kb(J.c2(p.a,new B.bf2(r),x.I),!1,x.Y),$async$Gs)
case 8:o=f
m=p.b
u=new B.hx(o,m)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
n=A.F(j)
m=A.ax(n)
throw A.n(m)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Gs,v)},
Kb(d,e,f,g,h,i,j){return this.bhK(d,e,f,g,h,i,j)},
bhJ(d,e,f,g){return this.Kb(C.at,d,null,null,e,f,g)},
bhK(d,e,f,g,h,a0,a1){var w=0,v=A.m(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Kb=A.i(function(a2,a3){if(a2===1){s.push(a3)
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
if(f!=null&&g!=null)J.Cd(q,A.Q(["lat",f,"lng",g],m,x.i))
q=n.ef(0,q).by(y.c).hX(0)
w=7
return A.d(q,$async$Kb)
case 7:p=a3
q=B.agr(A.aP(p,m,l))
u=q
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.F(i)
q=A.ax(o)
throw A.n(q)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Kb,v)},
ET(d,e){return this.bok(d,e)},
bok(b1,b2){var w=0,v=A.m(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ET=A.i(function(b3,b4){if(b3===1){s.push(b4)
w=t}for(;;)switch(w){case 0:t=4
q=C.n.aI(b2).toLowerCase()
if(J.aY(q)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=J.Rw(q,A.cf("\\s+",!0,!1))
a2=A.a6(a1).i("al<1>")
a3=A.J(new A.al(a1,new B.beZ(),a2),a2.i("z.E"))
p=a3
if(J.aY(p)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=r.a
a2=a1.gcq().e.a
o=(a2==null?null:a2.r).a
a2=a1.aL("room_members").by("room_id").b7("user_id",o).b7("status","approved")
w=7
return A.d(a2,$async$ET)
case 7:n=b4
a2=a1.aL("case_rooms").by("id").b7("owner_id",o)
w=8
return A.d(a2,$async$ET)
case 8:m=b4
a2=x.N
l=A.aO(a2)
for(a4=x.j,a5=J.aQ(a4.a(n)),a6=x.f;a5.q();){k=a5.gI()
J.ds(l,A.Z(a6.a(k).h(0,"room_id")))}for(a5=J.aQ(a4.a(m));a5.q();){j=a5.gI()
J.ds(l,A.Z(a6.a(j).h(0,"id")))}J.Ce(l,b1)
if(l.a===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=a1.aL("entities").by("name, room_id, case_rooms!inner(name)")
a5=l
a5=A.J(a5,A.t(a5).c)
a1=a1.Wu("room_id",a5).Wu("entity_type",A.c(["person","org"],x.S)).k5(500)
w=9
return A.d(a1,$async$ET)
case 9:i=b4
h=A.c([],x.m)
for(a1=J.aQ(a4.a(i));a1.q();){g=a1.gI()
f=a6.a(g)
e=A.Z(J.A(f,"name")).toLowerCase()
a7=A.a8(a6.a(J.A(f,"case_rooms")).h(0,"name"))
d=a7==null?"Unknown case":a7
if(!J.c9D(p,new B.bf_(e))){a4=J.Rw(e,A.cf("\\s+",!0,!1))
a8=new A.al(a4,new B.bf0(),A.a6(a4).i("al<1>")).dR(0,new B.bf1(q))}else a8=!0
a0=a8
if(a0)J.ds(h,A.Q(["name",A.Z(J.A(f,"name")),"room",d],a2,a2))}u=h
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
return A.l($async$ET,v)},
NA(d,e,f,g,h,i,j,k,l,m){return this.byH(d,e,f,g,h,i,j,k,l,m)},
byG(d,e){var w=null
return this.NA(w,w,!1,!1,d,w,w,w,w,e)},
byH(d,e,f,g,h,i,a0,a1,a2,a3){var w=0,v=A.m(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$NA=A.i(function(a4,a5){if(a4===1){s.push(a5)
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
l=r.a.aL("entities").cY(q).b7("id",h).by(y.c).hX(0)
w=7
return A.d(l,$async$NA)
case 7:p=a5
n=B.agr(A.aP(p,n,m))
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.F(j)
n=A.ax(o)
throw A.n(n)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$NA,v)},
NC(d,e,f,g){return this.bz7(d,e,f,g)},
bz7(d,e,f,g){var w=0,v=A.m(x.N),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$NC=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:l=f.toLowerCase()
A:{if("png"===l){n="image/png"
break A}if("webp"===l){n="image/webp"
break A}if("gif"===l){n="image/gif"
break A}n="image/jpeg"
break A}q=n
p="room_"+g+"/"+e+"."+l
t=4
n=r.a.ay
n===$&&A.b()
n=n.aL("entity-photos").xO(p,d,new A.yG(!0,q))
w=7
return A.d(n,$async$NC)
case 7:u=p
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.F(k)
n=A.ax(o)
throw A.n(n)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$NC,v)},
Na(d){return this.bwQ(d)},
bwQ(d){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p
var $async$Na=A.i(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=s.a.ay
r===$&&A.b()
r=r.aL("entity-photos").M(0,A.c([d],x.S))
w=6
return A.d(r,$async$Na)
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
return A.l($async$Na,v)},
A4(d){return this.bmo(d)},
bmo(d){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k
var $async$A4=A.i(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=null
u=7
o=s.a.aL("entities").by("photo_path").b7("id",d).kB()
w=10
return A.d(o,$async$A4)
case 10:q=f
o=x.U.a(q)
r=A.a8(o==null?null:o.h(0,"photo_path"))
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
m=o.aL("entity_relationships").q6().ayp("from_entity_id.eq."+d+",to_entity_id.eq."+d)
w=11
return A.d(m,$async$A4)
case 11:o=o.aL("entities").q6().b7("id",d)
w=12
return A.d(o,$async$A4)
case 12:w=r!=null&&r.length!==0?13:14
break
case 13:w=15
return A.d(s.Na(r),$async$A4)
case 15:case 14:u=1
w=5
break
case 3:u=2
k=t.pop()
p=A.F(k)
o=A.ax(p)
throw A.n(o)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$A4,v)},
Xo(d,e,f,g){return this.bta(d,e,f,g)},
bta(d,e,f,g){var w=0,v=A.m(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Xo=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.ab0("nearby_entities",A.Q(["p_room",g,"p_lat",d,"p_lng",e,"p_radius_km",f],x.N,x.K))
w=7
return A.d(o,$async$Xo)
case 7:q=i
o=J.c2(x.j.a(q),new B.bf3(),x.Y)
o=A.J(o,o.$ti.i("ai.E"))
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
return A.l($async$Xo,v)},
Pl(d,e){return this.aFv(d,e)},
aFv(d,e){var w=0,v=A.m(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Pl=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
o=r.a.ab0("suggest_entities",A.Q(["p_room",e,"p_name",d],o,o))
w=7
return A.d(o,$async$Pl)
case 7:q=g
o=J.c2(x.j.a(q),new B.bf4(),x.Y)
o=A.J(o,o.$ti.i("ai.E"))
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
return A.l($async$Pl,v)},
U7(d,e,f,g){return this.bhT(d,e,f,g)},
bhT(d,e,f,g){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o
var $async$U7=A.i(function(h,i){if(h===1){t.push(i)
w=u}for(;;)switch(w){case 0:u=3
q=x.N
q=s.a.aL("entity_relationships").ef(0,A.Q(["room_id",f,"from_entity_id",d,"to_entity_id",g,"relationship_type",e],q,q))
w=6
return A.d(q,$async$U7)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.F(o)
q=A.ax(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$U7,v)},
Zs(d,e,f,g){return this.byT(d,e,f,g)},
byT(d,e,f,g){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zs=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
q=A.C(x.N,x.z)
J.bd(q,"relationship_type",f)
J.bd(q,"from_entity_id",d)
J.bd(q,"to_entity_id",g)
if(q.a===0){w=1
break}o=r.a.aL("entity_relationships").cY(q).b7("id",e)
w=7
return A.d(o,$async$Zs)
case 7:t=2
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
return A.l($async$Zs,v)},
Vh(d){return this.bmt(d)},
bmt(d){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o
var $async$Vh=A.i(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a.aL("entity_relationships").q6().b7("id",d)
w=6
return A.d(q,$async$Vh)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.F(o)
q=A.ax(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$Vh,v)},
$iJA:1}
var z=a.updateTypes(["dJ(@)","ki(@)","B(dJ)","M<dJ>(dJ)","Nz(ao)","M<hx>(ao,f)"])
B.aWV.prototype={
$1(d){return J.bk(d)},
$S:45}
B.aOe.prototype={
$1(d){return B.agr(A.aP(x.f.a(d),x.N,x.z))},
$S:z+0}
B.aOf.prototype={
$1(d){var w,v=A.aP(x.f.a(d),x.N,x.z),u=A.Z(v.h(0,"id")),t=v.h(0,"from")
t=A.Z(t==null?v.h(0,"from_id"):t)
w=v.h(0,"to")
w=A.Z(w==null?v.h(0,"to_id"):w)
v=A.a8(v.h(0,"type"))
return new B.ki(u,t,w,v==null?"related_to":v)},
$S:z+1}
B.aOg.prototype={
$1(d){return d.a===this.a},
$S:z+2}
B.bf2.prototype={
$1(d){return this.aB_(d)},
aB_(d){var w=0,v=A.m(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l
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
B.beZ.prototype={
$1(d){return d.length>=3},
$S:12}
B.bf_.prototype={
$1(d){return C.n.n(this.a,d)},
$S:12}
B.bf0.prototype={
$1(d){return d.length>=3},
$S:12}
B.bf1.prototype={
$1(d){return C.n.n(this.a,d)},
$S:12}
B.bf3.prototype={
$1(d){return B.agr(A.aP(d,x.N,x.z))},
$S:z+0}
B.bf4.prototype={
$1(d){return B.agr(A.aP(d,x.N,x.z))},
$S:z+0}
B.bYo.prototype={
$1(d){return new B.Nz(d.T($.dV(),x.A))},
$S:z+4}
B.bYW.prototype={
$2(d,e){d.T($.dG(),x.L)
return d.T($.uG(),x.s).Gs(e)},
$S:z+5};(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.D,[B.dJ,B.ki,B.hx,B.Nz])
w(A.cA,[B.aWV,B.aOe,B.aOf,B.aOg,B.bf2,B.beZ,B.bf_,B.bf0,B.bf1,B.bf3,B.bf4,B.bYo])
v(B.bYW,A.dH)})()
A.cW(b.typeUniverse,JSON.parse('{"Nz":{"JA":[]}}'))
var y={c:"id, entity_type, name, attributes, aliases, lat, lng, photo_path"}
var x=(function rtii(){var w=A.O
return{L:w("aM<hJ?>"),s:w("JA"),h:w("hx"),I:w("M<dJ>"),m:w("x<ae<f,f>>"),S:w("x<f>"),G:w("w<dJ>"),x:w("w<ae<f,f>>"),j:w("w<@>"),T:w("ki"),Y:w("dJ"),f:w("ae<@,@>"),K:w("D"),N:w("f"),A:w("iS"),i:w("X"),z:w("@"),g:w("w<@>?"),U:w("ae<@,@>?"),H:w("~")}})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cTO","uG",()=>A.eN(new B.bYo(),x.s))
w($,"cU9","q3",()=>C.bE.$2$1(new B.bYW(),x.h,x.N))})()};
(a=>{a["csmaO8gHEoYL71sr89Fjsv8HXmY="]=a.current})($__dart_deferred_initializers__);