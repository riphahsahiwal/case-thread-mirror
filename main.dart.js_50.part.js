((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
ag0(d){var w,v,u,t,s,r=d.h(0,"attributes"),q=d.h(0,"aliases"),p=A.Y(d.h(0,"id")),o=A.ab(d.h(0,"type"))
if(o==null)o=A.ab(d.h(0,"entity_type"))
if(o==null)o="person"
w=A.ab(d.h(0,"name"))
if(w==null)w=""
v=x.f.b(r)?A.aU(r,x.N,x.z):C.ds
if(x.j.b(q)){u=J.c2(q,new B.aWm(),x.N)
u=A.J(u,u.$ti.i("ak.E"))}else u=C.ay
t=A.dp(d.h(0,"lat"))
if(t==null)t=null
s=A.dp(d.h(0,"lng"))
if(s==null)s=null
return new B.dG(p,o,w,v,u,t,s,A.ab(d.h(0,"photo_path")),null)},
cqH(d){var w,v,u=x.g,t=u.a(d.h(0,"nodes"))
if(t==null)t=[]
t=J.c2(t,new B.aNG(),x.Y)
w=A.J(t,t.$ti.i("ak.E"))
u=u.a(d.h(0,"edges"))
if(u==null)u=[]
u=J.c2(u,new B.aNH(),x.T)
v=A.J(u,u.$ti.i("ak.E"))
return new B.ht(w,v)},
dG:function dG(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aWm:function aWm(){},
kc:function kc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ht:function ht(d,e){this.a=d
this.b=e},
aNG:function aNG(){},
aNH:function aNH(){},
aNI:function aNI(d){this.a=d},
Ne:function Ne(d){this.a=d},
bec:function bec(d){this.a=d},
be8:function be8(){},
be9:function be9(d){this.a=d},
bea:function bea(){},
beb:function beb(d){this.a=d},
bed:function bed(){},
bee:function bee(){},
bVS:function bVS(){},
bWp:function bWp(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
B.dG.prototype={
gbS(){return this.a}}
B.kc.prototype={
gbS(){return this.a}}
B.ht.prototype={
nR(d){return A.iF(J.e1(this.a,new B.aNI(d)))}}
B.Ne.prototype={
Gk(d){return this.aBs(d)},
aBs(d){var w=0,v=A.n(x.h),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$Gk=A.j(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
m=x.N
l=r.a.aaE("get_entity_map",A.R(["target_room",d],m,m))
w=7
return A.d(l,$async$Gk)
case 7:q=f
p=B.cqH(A.aU(x.f.a(q),m,x.z))
w=8
return A.d(A.k6(J.c2(p.a,new B.bec(r),x.I),!1,x.Y),$async$Gk)
case 8:o=f
m=p.b
u=new B.ht(o,m)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
n=A.G(j)
m=A.aB(n)
throw A.i(m)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Gk,v)},
K2(d,e,f,g,h,i,j){return this.bgU(d,e,f,g,h,i,j)},
bgT(d,e,f,g){return this.K2(C.ay,d,null,null,e,f,g)},
bgU(d,e,f,g,h,a0,a1){var w=0,v=A.n(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$K2=A.j(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:t=4
n=r.a.aL("entities")
m=x.N
q=A.D(m,x.K)
J.bd(q,"room_id",a1)
J.bd(q,"entity_type",e)
J.bd(q,"name",h)
l=x.z
k=a0.length===0?A.D(m,l):A.R(["note",a0],m,l)
J.bd(q,"attributes",k)
if(d.length!==0)J.bd(q,"aliases",d)
if(f!=null&&g!=null)J.BY(q,A.R(["lat",f,"lng",g],m,x.i))
q=n.ef(0,q).by(y.c).hX(0)
w=7
return A.d(q,$async$K2)
case 7:p=a3
q=B.ag0(A.aU(p,m,l))
u=q
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.G(i)
q=A.aB(o)
throw A.i(q)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$K2,v)},
EL(d,e){return this.bnt(d,e)},
bnt(b1,b2){var w=0,v=A.n(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$EL=A.j(function(b3,b4){if(b3===1){s.push(b4)
w=t}for(;;)switch(w){case 0:t=4
q=C.o.aK(b2).toLowerCase()
if(J.aY(q)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=J.Rb(q,A.cf("\\s+",!0,!1))
a2=A.a7(a1).i("al<1>")
a3=A.J(new A.al(a1,new B.be8(),a2),a2.i("z.E"))
p=a3
if(J.aY(p)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=r.a
a2=a1.gcw().e.a
o=(a2==null?null:a2.r).a
a2=a1.aL("room_members").by("room_id").b7("user_id",o).b7("status","approved")
w=7
return A.d(a2,$async$EL)
case 7:n=b4
a2=a1.aL("case_rooms").by("id").b7("owner_id",o)
w=8
return A.d(a2,$async$EL)
case 8:m=b4
a2=x.N
l=A.aK(a2)
for(a4=x.j,a5=J.aR(a4.a(n)),a6=x.f;a5.q();){k=a5.gJ()
J.dq(l,A.Y(a6.a(k).h(0,"room_id")))}for(a5=J.aR(a4.a(m));a5.q();){j=a5.gJ()
J.dq(l,A.Y(a6.a(j).h(0,"id")))}J.BZ(l,b1)
if(l.a===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=a1.aL("entities").by("name, room_id, case_rooms!inner(name)")
a5=l
a5=A.J(a5,A.t(a5).c)
a1=a1.Wg("room_id",a5).Wg("entity_type",A.c(["person","org"],x.S)).k5(500)
w=9
return A.d(a1,$async$EL)
case 9:i=b4
h=A.c([],x.m)
for(a1=J.aR(a4.a(i));a1.q();){g=a1.gJ()
f=a6.a(g)
e=A.Y(J.A(f,"name")).toLowerCase()
a7=A.ab(a6.a(J.A(f,"case_rooms")).h(0,"name"))
d=a7==null?"Unknown case":a7
if(!J.c6Z(p,new B.be9(e))){a4=J.Rb(e,A.cf("\\s+",!0,!1))
a8=new A.al(a4,new B.bea(),A.a7(a4).i("al<1>")).dQ(0,new B.beb(q))}else a8=!0
a0=a8
if(a0)J.dq(h,A.R(["name",A.Y(J.A(f,"name")),"room",d],a2,a2))}u=h
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
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$EL,v)},
Nr(d,e,f,g,h,i,j,k,l,m){return this.bxK(d,e,f,g,h,i,j,k,l,m)},
bxJ(d,e){var w=null
return this.Nr(w,w,!1,!1,d,w,w,w,w,e)},
bxK(d,e,f,g,h,i,a0,a1,a2,a3){var w=0,v=A.n(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$Nr=A.j(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
n=x.N
m=x.z
q=A.D(n,m)
if(a2!=null)J.bd(q,"name",a2)
if(i!=null)J.bd(q,"entity_type",i)
if(e!=null)J.bd(q,"attributes",e)
if(d!=null)J.bd(q,"aliases",d)
if(f){J.bd(q,"lat",null)
J.bd(q,"lng",null)}else if(a0!=null&&a1!=null){J.bd(q,"lat",a0)
J.bd(q,"lng",a1)}if(a3!=null)J.bd(q,"photo_path",a3)
if(g)J.bd(q,"photo_path",null)
l=r.a.aL("entities").cX(q).b7("id",h).by(y.c).hX(0)
w=7
return A.d(l,$async$Nr)
case 7:p=a5
n=B.ag0(A.aU(p,n,m))
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.G(j)
n=A.aB(o)
throw A.i(n)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Nr,v)},
Nt(d,e,f,g){return this.by8(d,e,f,g)},
by8(d,e,f,g){var w=0,v=A.n(x.N),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Nt=A.j(function(h,i){if(h===1){s.push(i)
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
n=n.aL("entity-photos").xI(p,d,new A.yt(!0,q))
w=7
return A.d(n,$async$Nt)
case 7:u=p
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.G(k)
n=A.aB(o)
throw A.i(n)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Nt,v)},
N2(d){return this.bvY(d)},
bvY(d){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p
var $async$N2=A.j(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=s.a.ay
r===$&&A.b()
r=r.aL("entity-photos").M(0,A.c([d],x.S))
w=6
return A.d(r,$async$N2)
case 6:u=1
w=5
break
case 3:u=2
p=t.pop()
w=5
break
case 2:w=1
break
case 5:return A.l(null,v)
case 1:return A.k(t.at(-1),v)}})
return A.m($async$N2,v)},
zZ(d){return this.bly(d)},
bly(d){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k
var $async$zZ=A.j(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=null
u=7
o=s.a.aL("entities").by("photo_path").b7("id",d).kB()
w=10
return A.d(o,$async$zZ)
case 10:q=f
o=x.U.a(q)
r=A.ab(o==null?null:o.h(0,"photo_path"))
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
m=o.aL("entity_relationships").q1().axW("from_entity_id.eq."+d+",to_entity_id.eq."+d)
w=11
return A.d(m,$async$zZ)
case 11:o=o.aL("entities").q1().b7("id",d)
w=12
return A.d(o,$async$zZ)
case 12:w=r!=null&&r.length!==0?13:14
break
case 13:w=15
return A.d(s.N2(r),$async$zZ)
case 15:case 14:u=1
w=5
break
case 3:u=2
k=t.pop()
p=A.G(k)
o=A.aB(p)
throw A.i(o)
w=5
break
case 2:w=1
break
case 5:return A.l(null,v)
case 1:return A.k(t.at(-1),v)}})
return A.m($async$zZ,v)},
X3(d,e,f,g){return this.bsj(d,e,f,g)},
bsj(d,e,f,g){var w=0,v=A.n(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$X3=A.j(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.aaE("nearby_entities",A.R(["p_room",g,"p_lat",d,"p_lng",e,"p_radius_km",f],x.N,x.K))
w=7
return A.d(o,$async$X3)
case 7:q=i
o=J.c2(x.j.a(q),new B.bed(),x.Y)
o=A.J(o,o.$ti.i("ak.E"))
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
return A.m($async$X3,v)},
Pc(d,e){return this.aF0(d,e)},
aF0(d,e){var w=0,v=A.n(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Pc=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
o=r.a.aaE("suggest_entities",A.R(["p_room",e,"p_name",d],o,o))
w=7
return A.d(o,$async$Pc)
case 7:q=g
o=J.c2(x.j.a(q),new B.bee(),x.Y)
o=A.J(o,o.$ti.i("ak.E"))
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
return A.m($async$Pc,v)},
TU(d,e,f,g){return this.bh2(d,e,f,g)},
bh2(d,e,f,g){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p,o
var $async$TU=A.j(function(h,i){if(h===1){t.push(i)
w=u}for(;;)switch(w){case 0:u=3
q=x.N
q=s.a.aL("entity_relationships").ef(0,A.R(["room_id",f,"from_entity_id",d,"to_entity_id",g,"relationship_type",e],q,q))
w=6
return A.d(q,$async$TU)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.G(o)
q=A.aB(r)
throw A.i(q)
w=5
break
case 2:w=1
break
case 5:return A.l(null,v)
case 1:return A.k(t.at(-1),v)}})
return A.m($async$TU,v)},
Z3(d,e,f,g){return this.bxW(d,e,f,g)},
bxW(d,e,f,g){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Z3=A.j(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
q=A.D(x.N,x.z)
J.bd(q,"relationship_type",f)
J.bd(q,"from_entity_id",d)
J.bd(q,"to_entity_id",g)
if(q.a===0){w=1
break}o=r.a.aL("entity_relationships").cX(q).b7("id",e)
w=7
return A.d(o,$async$Z3)
case 7:t=2
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
return A.m($async$Z3,v)},
V3(d){return this.blD(d)},
blD(d){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p,o
var $async$V3=A.j(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a.aL("entity_relationships").q1().b7("id",d)
w=6
return A.d(q,$async$V3)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.G(o)
q=A.aB(r)
throw A.i(q)
w=5
break
case 2:w=1
break
case 5:return A.l(null,v)
case 1:return A.k(t.at(-1),v)}})
return A.m($async$V3,v)},
$iJi:1}
var z=a.updateTypes(["dG(@)","kc(@)","B(dG)","O<dG>(dG)","Ne(as)","O<ht>(as,f)"])
B.aWm.prototype={
$1(d){return J.bl(d)},
$S:47}
B.aNG.prototype={
$1(d){return B.ag0(A.aU(x.f.a(d),x.N,x.z))},
$S:z+0}
B.aNH.prototype={
$1(d){var w,v=A.aU(x.f.a(d),x.N,x.z),u=A.Y(v.h(0,"id")),t=v.h(0,"from")
t=A.Y(t==null?v.h(0,"from_id"):t)
w=v.h(0,"to")
w=A.Y(w==null?v.h(0,"to_id"):w)
v=A.ab(v.h(0,"type"))
return new B.kc(u,t,w,v==null?"related_to":v)},
$S:z+1}
B.aNI.prototype={
$1(d){return d.a===this.a},
$S:z+2}
B.bec.prototype={
$1(d){return this.aAx(d)},
aAx(d){var w=0,v=A.n(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$$1=A.j(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=d.w
m=n
if(m==null||m.length===0){u=d
w=1
break}t=4
p=r.a.a.ay
p===$&&A.b()
p=p.aL("entity-photos").wo(m,3600)
w=7
return A.d(p,$async$$1)
case 7:q=f
p=A.Y(q)
u=new B.dG(d.a,d.b,d.c,d.d,d.e,d.f,d.r,n,p)
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
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$$1,v)},
$S:z+3}
B.be8.prototype={
$1(d){return d.length>=3},
$S:11}
B.be9.prototype={
$1(d){return C.o.n(this.a,d)},
$S:11}
B.bea.prototype={
$1(d){return d.length>=3},
$S:11}
B.beb.prototype={
$1(d){return C.o.n(this.a,d)},
$S:11}
B.bed.prototype={
$1(d){return B.ag0(A.aU(d,x.N,x.z))},
$S:z+0}
B.bee.prototype={
$1(d){return B.ag0(A.aU(d,x.N,x.z))},
$S:z+0}
B.bVS.prototype={
$1(d){return new B.Ne(d.V($.e0(),x.A))},
$S:z+4}
B.bWp.prototype={
$2(d,e){d.V($.dL(),x.L)
return d.V($.ut(),x.s).Gk(e)},
$S:z+5};(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.C,[B.dG,B.kc,B.ht,B.Ne])
w(A.cB,[B.aWm,B.aNG,B.aNH,B.aNI,B.bec,B.be8,B.be9,B.bea,B.beb,B.bed,B.bee,B.bVS])
v(B.bWp,A.dE)})()
A.d1(b.typeUniverse,JSON.parse('{"Ne":{"Ji":[]}}'))
var y={c:"id, entity_type, name, attributes, aliases, lat, lng, photo_path"}
var x=(function rtii(){var w=A.L
return{L:w("aW<hE?>"),s:w("Ji"),h:w("ht"),I:w("O<dG>"),m:w("y<af<f,f>>"),S:w("y<f>"),G:w("w<dG>"),x:w("w<af<f,f>>"),j:w("w<@>"),T:w("kc"),Y:w("dG"),f:w("af<@,@>"),K:w("C"),N:w("f"),A:w("ir"),i:w("X"),z:w("@"),g:w("w<@>?"),U:w("af<@,@>?"),H:w("~")}})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cQL","ut",()=>A.eY(new B.bVS(),x.s))
w($,"cR6","pZ",()=>C.bC.$2$1(new B.bWp(),x.h,x.N))})()};
(a=>{a["R9TEPVtNE6frJDDvuJPubdeAPvs="]=a.current})($__dart_deferred_initializers__);