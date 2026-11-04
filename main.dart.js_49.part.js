((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
agb(d){var w,v,u,t,s,r=d.h(0,"attributes"),q=d.h(0,"aliases"),p=A.Z(d.h(0,"id")),o=A.ab(d.h(0,"type"))
if(o==null)o=A.ab(d.h(0,"entity_type"))
if(o==null)o="person"
w=A.ab(d.h(0,"name"))
if(w==null)w=""
v=x.f.b(r)?A.aU(r,x.N,x.z):C.dt
if(x.j.b(q)){u=J.c2(q,new B.aWx(),x.N)
u=A.J(u,u.$ti.i("ak.E"))}else u=C.ay
t=A.dp(d.h(0,"lat"))
if(t==null)t=null
s=A.dp(d.h(0,"lng"))
if(s==null)s=null
return new B.dF(p,o,w,v,u,t,s,A.ab(d.h(0,"photo_path")),null)},
cro(d){var w,v,u=x.g,t=u.a(d.h(0,"nodes"))
if(t==null)t=[]
t=J.c2(t,new B.aNR(),x.Y)
w=A.J(t,t.$ti.i("ak.E"))
u=u.a(d.h(0,"edges"))
if(u==null)u=[]
u=J.c2(u,new B.aNS(),x.T)
v=A.J(u,u.$ti.i("ak.E"))
return new B.ht(w,v)},
dF:function dF(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aWx:function aWx(){},
kd:function kd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ht:function ht(d,e){this.a=d
this.b=e},
aNR:function aNR(){},
aNS:function aNS(){},
aNT:function aNT(d){this.a=d},
Nm:function Nm(d){this.a=d},
beq:function beq(d){this.a=d},
bem:function bem(){},
ben:function ben(d){this.a=d},
beo:function beo(){},
bep:function bep(d){this.a=d},
ber:function ber(){},
bes:function bes(){},
bWA:function bWA(){},
bX7:function bX7(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[72],B)
B.dF.prototype={
gbP(){return this.a}}
B.kd.prototype={
gbP(){return this.a}}
B.ht.prototype={
nR(d){return A.ii(J.dT(this.a,new B.aNT(d)))}}
B.Nm.prototype={
Gm(d){return this.aBD(d)},
aBD(d){var w=0,v=A.n(x.h),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$Gm=A.j(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
m=x.N
l=r.a.aaL("get_entity_map",A.Q(["target_room",d],m,m))
w=7
return A.d(l,$async$Gm)
case 7:q=f
p=B.cro(A.aU(x.f.a(q),m,x.z))
w=8
return A.d(A.k7(J.c2(p.a,new B.beq(r),x.I),!1,x.Y),$async$Gm)
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
m=A.aA(n)
throw A.i(m)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Gm,v)},
K4(d,e,f,g,h,i,j){return this.bhd(d,e,f,g,h,i,j)},
bhc(d,e,f,g){return this.K4(C.ay,d,null,null,e,f,g)},
bhd(d,e,f,g,h,a0,a1){var w=0,v=A.n(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$K4=A.j(function(a2,a3){if(a2===1){s.push(a3)
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
if(f!=null&&g!=null)J.C0(q,A.Q(["lat",f,"lng",g],m,x.i))
q=n.ef(0,q).bz(y.c).hX(0)
w=7
return A.d(q,$async$K4)
case 7:p=a3
q=B.agb(A.aU(p,m,l))
u=q
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.G(i)
q=A.aA(o)
throw A.i(q)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$K4,v)},
EM(d,e){return this.bnM(d,e)},
bnM(b1,b2){var w=0,v=A.n(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$EM=A.j(function(b3,b4){if(b3===1){s.push(b4)
w=t}for(;;)switch(w){case 0:t=4
q=C.o.aK(b2).toLowerCase()
if(J.aY(q)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=J.Rj(q,A.cf("\\s+",!0,!1))
a2=A.a7(a1).i("al<1>")
a3=A.J(new A.al(a1,new B.bem(),a2),a2.i("z.E"))
p=a3
if(J.aY(p)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=r.a
a2=a1.gct().e.a
o=(a2==null?null:a2.r).a
a2=a1.aL("room_members").bz("room_id").b7("user_id",o).b7("status","approved")
w=7
return A.d(a2,$async$EM)
case 7:n=b4
a2=a1.aL("case_rooms").bz("id").b7("owner_id",o)
w=8
return A.d(a2,$async$EM)
case 8:m=b4
a2=x.N
l=A.aK(a2)
for(a4=x.j,a5=J.aP(a4.a(n)),a6=x.f;a5.q();){k=a5.gI()
J.dq(l,A.Z(a6.a(k).h(0,"room_id")))}for(a5=J.aP(a4.a(m));a5.q();){j=a5.gI()
J.dq(l,A.Z(a6.a(j).h(0,"id")))}J.C1(l,b1)
if(l.a===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=a1.aL("entities").bz("name, room_id, case_rooms!inner(name)")
a5=l
a5=A.J(a5,A.t(a5).c)
a1=a1.Wl("room_id",a5).Wl("entity_type",A.c(["person","org"],x.S)).k5(500)
w=9
return A.d(a1,$async$EM)
case 9:i=b4
h=A.c([],x.m)
for(a1=J.aP(a4.a(i));a1.q();){g=a1.gI()
f=a6.a(g)
e=A.Z(J.A(f,"name")).toLowerCase()
a7=A.ab(a6.a(J.A(f,"case_rooms")).h(0,"name"))
d=a7==null?"Unknown case":a7
if(!J.c7G(p,new B.ben(e))){a4=J.Rj(e,A.cf("\\s+",!0,!1))
a8=new A.al(a4,new B.beo(),A.a7(a4).i("al<1>")).dR(0,new B.bep(q))}else a8=!0
a0=a8
if(a0)J.dq(h,A.Q(["name",A.Z(J.A(f,"name")),"room",d],a2,a2))}u=h
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
return A.m($async$EM,v)},
Nt(d,e,f,g,h,i,j,k,l,m){return this.by4(d,e,f,g,h,i,j,k,l,m)},
by3(d,e){var w=null
return this.Nt(w,w,!1,!1,d,w,w,w,w,e)},
by4(d,e,f,g,h,i,a0,a1,a2,a3){var w=0,v=A.n(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$Nt=A.j(function(a4,a5){if(a4===1){s.push(a5)
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
l=r.a.aL("entities").cX(q).b7("id",h).bz(y.c).hX(0)
w=7
return A.d(l,$async$Nt)
case 7:p=a5
n=B.agb(A.aU(p,n,m))
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.G(j)
n=A.aA(o)
throw A.i(n)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Nt,v)},
Nv(d,e,f,g){return this.byu(d,e,f,g)},
byu(d,e,f,g){var w=0,v=A.n(x.N),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Nv=A.j(function(h,i){if(h===1){s.push(i)
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
n=n.aL("entity-photos").xJ(p,d,new A.yu(!0,q))
w=7
return A.d(n,$async$Nv)
case 7:u=p
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.G(k)
n=A.aA(o)
throw A.i(n)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Nv,v)},
N3(d){return this.bwf(d)},
bwf(d){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p
var $async$N3=A.j(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=s.a.ay
r===$&&A.b()
r=r.aL("entity-photos").M(0,A.c([d],x.S))
w=6
return A.d(r,$async$N3)
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
return A.m($async$N3,v)},
A_(d){return this.blR(d)},
blR(d){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k
var $async$A_=A.j(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=null
u=7
o=s.a.aL("entities").bz("photo_path").b7("id",d).kB()
w=10
return A.d(o,$async$A_)
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
m=o.aL("entity_relationships").q2().ay7("from_entity_id.eq."+d+",to_entity_id.eq."+d)
w=11
return A.d(m,$async$A_)
case 11:o=o.aL("entities").q2().b7("id",d)
w=12
return A.d(o,$async$A_)
case 12:w=r!=null&&r.length!==0?13:14
break
case 13:w=15
return A.d(s.N3(r),$async$A_)
case 15:case 14:u=1
w=5
break
case 3:u=2
k=t.pop()
p=A.G(k)
o=A.aA(p)
throw A.i(o)
w=5
break
case 2:w=1
break
case 5:return A.l(null,v)
case 1:return A.k(t.at(-1),v)}})
return A.m($async$A_,v)},
X8(d,e,f,g){return this.bsB(d,e,f,g)},
bsB(d,e,f,g){var w=0,v=A.n(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$X8=A.j(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.aaL("nearby_entities",A.Q(["p_room",g,"p_lat",d,"p_lng",e,"p_radius_km",f],x.N,x.K))
w=7
return A.d(o,$async$X8)
case 7:q=i
o=J.c2(x.j.a(q),new B.ber(),x.Y)
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
o=A.aA(p)
throw A.i(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$X8,v)},
Pe(d,e){return this.aFb(d,e)},
aFb(d,e){var w=0,v=A.n(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Pe=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
o=r.a.aaL("suggest_entities",A.Q(["p_room",e,"p_name",d],o,o))
w=7
return A.d(o,$async$Pe)
case 7:q=g
o=J.c2(x.j.a(q),new B.bes(),x.Y)
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
o=A.aA(p)
throw A.i(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Pe,v)},
TZ(d,e,f,g){return this.bhm(d,e,f,g)},
bhm(d,e,f,g){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p,o
var $async$TZ=A.j(function(h,i){if(h===1){t.push(i)
w=u}for(;;)switch(w){case 0:u=3
q=x.N
q=s.a.aL("entity_relationships").ef(0,A.Q(["room_id",f,"from_entity_id",d,"to_entity_id",g,"relationship_type",e],q,q))
w=6
return A.d(q,$async$TZ)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.G(o)
q=A.aA(r)
throw A.i(q)
w=5
break
case 2:w=1
break
case 5:return A.l(null,v)
case 1:return A.k(t.at(-1),v)}})
return A.m($async$TZ,v)},
Za(d,e,f,g){return this.byg(d,e,f,g)},
byg(d,e,f,g){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Za=A.j(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
q=A.C(x.N,x.z)
J.bd(q,"relationship_type",f)
J.bd(q,"from_entity_id",d)
J.bd(q,"to_entity_id",g)
if(q.a===0){w=1
break}o=r.a.aL("entity_relationships").cX(q).b7("id",e)
w=7
return A.d(o,$async$Za)
case 7:t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.G(m)
o=A.aA(p)
throw A.i(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Za,v)},
V8(d){return this.blW(d)},
blW(d){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p,o
var $async$V8=A.j(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a.aL("entity_relationships").q2().b7("id",d)
w=6
return A.d(q,$async$V8)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.G(o)
q=A.aA(r)
throw A.i(q)
w=5
break
case 2:w=1
break
case 5:return A.l(null,v)
case 1:return A.k(t.at(-1),v)}})
return A.m($async$V8,v)},
$iJn:1}
var z=a.updateTypes(["dF(@)","kd(@)","B(dF)","M<dF>(dF)","Nm(at)","M<ht>(at,f)"])
B.aWx.prototype={
$1(d){return J.bl(d)},
$S:46}
B.aNR.prototype={
$1(d){return B.agb(A.aU(x.f.a(d),x.N,x.z))},
$S:z+0}
B.aNS.prototype={
$1(d){var w,v=A.aU(x.f.a(d),x.N,x.z),u=A.Z(v.h(0,"id")),t=v.h(0,"from")
t=A.Z(t==null?v.h(0,"from_id"):t)
w=v.h(0,"to")
w=A.Z(w==null?v.h(0,"to_id"):w)
v=A.ab(v.h(0,"type"))
return new B.kd(u,t,w,v==null?"related_to":v)},
$S:z+1}
B.aNT.prototype={
$1(d){return d.a===this.a},
$S:z+2}
B.beq.prototype={
$1(d){return this.aAI(d)},
aAI(d){var w=0,v=A.n(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l
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
p=A.Z(q)
u=new B.dF(d.a,d.b,d.c,d.d,d.e,d.f,d.r,n,p)
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
B.bem.prototype={
$1(d){return d.length>=3},
$S:12}
B.ben.prototype={
$1(d){return C.o.n(this.a,d)},
$S:12}
B.beo.prototype={
$1(d){return d.length>=3},
$S:12}
B.bep.prototype={
$1(d){return C.o.n(this.a,d)},
$S:12}
B.ber.prototype={
$1(d){return B.agb(A.aU(d,x.N,x.z))},
$S:z+0}
B.bes.prototype={
$1(d){return B.agb(A.aU(d,x.N,x.z))},
$S:z+0}
B.bWA.prototype={
$1(d){return new B.Nm(d.W($.e2(),x.A))},
$S:z+4}
B.bX7.prototype={
$2(d,e){d.W($.dH(),x.L)
return d.W($.uw(),x.s).Gm(e)},
$S:z+5};(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.D,[B.dF,B.kd,B.ht,B.Nm])
w(A.cC,[B.aWx,B.aNR,B.aNS,B.aNT,B.beq,B.bem,B.ben,B.beo,B.bep,B.ber,B.bes,B.bWA])
v(B.bX7,A.dI)})()
A.d1(b.typeUniverse,JSON.parse('{"Nm":{"Jn":[]}}'))
var y={c:"id, entity_type, name, attributes, aliases, lat, lng, photo_path"}
var x=(function rtii(){var w=A.O
return{L:w("aW<hG?>"),s:w("Jn"),h:w("ht"),I:w("M<dF>"),m:w("y<af<f,f>>"),S:w("y<f>"),G:w("w<dF>"),x:w("w<af<f,f>>"),j:w("w<@>"),T:w("kd"),Y:w("dF"),f:w("af<@,@>"),K:w("D"),N:w("f"),A:w("iO"),i:w("X"),z:w("@"),g:w("w<@>?"),U:w("af<@,@>?"),H:w("~")}})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cRw","uw",()=>A.eX(new B.bWA(),x.s))
w($,"cRS","pZ",()=>C.bD.$2$1(new B.bX7(),x.h,x.N))})()};
(a=>{a["mA/oD5jFfBFRl+oYgO3xgdQsYCQ="]=a.current})($__dart_deferred_initializers__);