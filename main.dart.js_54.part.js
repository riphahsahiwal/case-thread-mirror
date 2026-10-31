((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
ag0(d){var w,v,u,t,s,r=d.h(0,"attributes"),q=d.h(0,"aliases"),p=A.Y(d.h(0,"id")),o=A.ab(d.h(0,"type"))
if(o==null)o=A.ab(d.h(0,"entity_type"))
if(o==null)o="person"
w=A.ab(d.h(0,"name"))
if(w==null)w=""
v=x.f.b(r)?A.aR(r,x.N,x.z):C.dt
if(x.j.b(q)){u=J.c6(q,new B.aWt(),x.N)
u=A.J(u,u.$ti.i("al.E"))}else u=C.ay
t=A.dq(d.h(0,"lat"))
if(t==null)t=null
s=A.dq(d.h(0,"lng"))
return new B.ei(p,o,w,v,u,t,s==null?null:s)},
cqW(d){var w,v,u=x.g,t=u.a(d.h(0,"nodes"))
if(t==null)t=[]
t=J.c6(t,new B.aND(),x.Y)
w=A.J(t,t.$ti.i("al.E"))
u=u.a(d.h(0,"edges"))
if(u==null)u=[]
u=J.c6(u,new B.aNE(),x.T)
v=A.J(u,u.$ti.i("al.E"))
return new B.hK(w,v)},
ei:function ei(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aWt:function aWt(){},
ka:function ka(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hK:function hK(d,e){this.a=d
this.b=e},
aND:function aND(){},
aNE:function aNE(){},
aNF:function aNF(d){this.a=d},
Nj:function Nj(d){this.a=d},
ber:function ber(){},
bes:function bes(d){this.a=d},
bet:function bet(){},
beu:function beu(d){this.a=d},
bev:function bev(){},
bew:function bew(){},
bW4:function bW4(){},
bWC:function bWC(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[76],B)
B.ei.prototype={
gbQ(){return this.a}}
B.ka.prototype={
gbQ(){return this.a}}
B.hK.prototype={
nR(d){var w=this.a
return A.iH(new A.ag(w,new B.aNF(d),A.a4(w).i("ag<1>")))}}
B.Nj.prototype={
O3(d){return this.aBw(d)},
aBw(d){var w=0,v=A.n(x.h),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$O3=A.j(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
n=r.a.aaG("get_entity_map",A.Q(["target_room",d],o,o))
w=7
return A.d(n,$async$O3)
case 7:q=f
o=B.cqW(A.aR(x.f.a(q),o,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.G(l)
o=A.aB(p)
throw A.i(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$O3,v)},
K1(d,e,f,g,h,i,j){return this.bgS(d,e,f,g,h,i,j)},
bgR(d,e,f,g){return this.K1(C.ay,d,null,null,e,f,g)},
bgS(d,e,f,g,h,a0,a1){var w=0,v=A.n(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$K1=A.j(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:t=4
n=r.a.aK("entities")
m=x.N
q=A.D(m,x.K)
J.be(q,"room_id",a1)
J.be(q,"entity_type",e)
J.be(q,"name",h)
l=x.z
k=a0.length===0?A.D(m,l):A.Q(["note",a0],m,l)
J.be(q,"attributes",k)
if(d.length!==0)J.be(q,"aliases",d)
if(f!=null&&g!=null)J.C4(q,A.Q(["lat",f,"lng",g],m,x.i))
q=n.e8(0,q).bz(y.b).hZ(0)
w=7
return A.d(q,$async$K1)
case 7:p=a3
q=B.ag0(A.aR(p,m,l))
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
return A.m($async$K1,v)},
EJ(d,e){return this.bnr(d,e)},
bnr(b1,b2){var w=0,v=A.n(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$EJ=A.j(function(b3,b4){if(b3===1){s.push(b4)
w=t}for(;;)switch(w){case 0:t=4
q=C.o.aL(b2).toLowerCase()
if(J.b_(q)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=J.Ri(q,A.cf("\\s+",!0,!1))
a2=A.a4(a1).i("ag<1>")
a3=A.J(new A.ag(a1,new B.ber(),a2),a2.i("z.E"))
p=a3
if(J.b_(p)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=r.a
a2=a1.gcC().e.a
o=(a2==null?null:a2.r).a
a2=a1.aK("room_members").bz("room_id").b3("user_id",o).b3("status","approved")
w=7
return A.d(a2,$async$EJ)
case 7:n=b4
a2=a1.aK("case_rooms").bz("id").b3("owner_id",o)
w=8
return A.d(a2,$async$EJ)
case 8:m=b4
a2=x.N
l=A.aM(a2)
for(a4=x.j,a5=J.aT(a4.a(n)),a6=x.f;a5.q();){k=a5.gJ()
J.dz(l,A.Y(a6.a(k).h(0,"room_id")))}for(a5=J.aT(a4.a(m));a5.q();){j=a5.gJ()
J.dz(l,A.Y(a6.a(j).h(0,"id")))}J.C5(l,b1)
if(l.a===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=a1.aK("entities").bz("name, room_id, case_rooms!inner(name)")
a5=l
a5=A.J(a5,A.t(a5).c)
a1=a1.Wf("room_id",a5).Wf("entity_type",A.c(["person","org"],x.S)).k6(500)
w=9
return A.d(a1,$async$EJ)
case 9:i=b4
h=A.c([],x.m)
for(a1=J.aT(a4.a(i));a1.q();){g=a1.gJ()
f=a6.a(g)
e=A.Y(J.A(f,"name")).toLowerCase()
a7=A.ab(a6.a(J.A(f,"case_rooms")).h(0,"name"))
d=a7==null?"Unknown case":a7
if(!J.c7b(p,new B.bes(e))){a4=J.Ri(e,A.cf("\\s+",!0,!1))
a8=new A.ag(a4,new B.bet(),A.a4(a4).i("ag<1>")).dW(0,new B.beu(q))}else a8=!0
a0=a8
if(a0)J.dz(h,A.Q(["name",A.Y(J.A(f,"name")),"room",d],a2,a2))}u=h
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
return A.m($async$EJ,v)},
YY(d,e,f,g,h,i,j,k){return this.bxH(d,e,f,g,h,i,j,k)},
bxH(d,e,f,g,h,i,a0,a1){var w=0,v=A.n(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$YY=A.j(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:t=4
n=x.N
m=x.z
q=A.D(n,m)
J.be(q,"name",a1)
J.be(q,"entity_type",h)
J.be(q,"attributes",e)
J.be(q,"aliases",d)
if(f){J.be(q,"lat",null)
J.be(q,"lng",null)}else if(i!=null&&a0!=null){J.be(q,"lat",i)
J.be(q,"lng",a0)}l=r.a.aK("entities").cV(q).b3("id",g).bz(y.b).hZ(0)
w=7
return A.d(l,$async$YY)
case 7:p=a3
n=B.ag0(A.aR(p,n,m))
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
return A.m($async$YY,v)},
KQ(d){return this.blw(d)},
blw(d){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$KQ=A.j(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a
p=q.aK("entity_relationships").oI().ay_("from_entity_id.eq."+d+",to_entity_id.eq."+d)
w=6
return A.d(p,$async$KQ)
case 6:q=q.aK("entities").oI().b3("id",d)
w=7
return A.d(q,$async$KQ)
case 7:u=1
w=5
break
case 3:u=2
n=t.pop()
r=A.G(n)
q=A.aB(r)
throw A.i(q)
w=5
break
case 2:w=1
break
case 5:return A.l(null,v)
case 1:return A.k(t.at(-1),v)}})
return A.m($async$KQ,v)},
X0(d,e,f,g){return this.bsg(d,e,f,g)},
bsg(d,e,f,g){var w=0,v=A.n(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$X0=A.j(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.aaG("nearby_entities",A.Q(["p_room",g,"p_lat",d,"p_lng",e,"p_radius_km",f],x.N,x.K))
w=7
return A.d(o,$async$X0)
case 7:q=i
o=J.c6(x.j.a(q),new B.bev(),x.Y)
o=A.J(o,o.$ti.i("al.E"))
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
return A.m($async$X0,v)},
Pa(d,e){return this.aF5(d,e)},
aF5(d,e){var w=0,v=A.n(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Pa=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
o=r.a.aaG("suggest_entities",A.Q(["p_room",e,"p_name",d],o,o))
w=7
return A.d(o,$async$Pa)
case 7:q=g
o=J.c6(x.j.a(q),new B.bew(),x.Y)
o=A.J(o,o.$ti.i("al.E"))
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
return A.m($async$Pa,v)},
TT(d,e,f,g){return this.bh0(d,e,f,g)},
bh0(d,e,f,g){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p,o
var $async$TT=A.j(function(h,i){if(h===1){t.push(i)
w=u}for(;;)switch(w){case 0:u=3
q=x.N
q=s.a.aK("entity_relationships").e8(0,A.Q(["room_id",f,"from_entity_id",d,"to_entity_id",g,"relationship_type",e],q,q))
w=6
return A.d(q,$async$TT)
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
return A.m($async$TT,v)},
Z2(d,e,f,g){return this.bxT(d,e,f,g)},
bxT(d,e,f,g){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Z2=A.j(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
q=A.D(x.N,x.z)
J.be(q,"relationship_type",f)
J.be(q,"from_entity_id",d)
J.be(q,"to_entity_id",g)
if(q.a===0){w=1
break}o=r.a.aK("entity_relationships").cV(q).b3("id",e)
w=7
return A.d(o,$async$Z2)
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
return A.m($async$Z2,v)},
V2(d){return this.blB(d)},
blB(d){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p,o
var $async$V2=A.j(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a.aK("entity_relationships").oI().b3("id",d)
w=6
return A.d(q,$async$V2)
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
return A.m($async$V2,v)},
$iJo:1}
var z=a.updateTypes(["ei(@)","ka(@)","B(ei)","Nj(ao)","O<hK>(ao,f)"])
B.aWt.prototype={
$1(d){return J.bm(d)},
$S:48}
B.aND.prototype={
$1(d){return B.ag0(A.aR(x.f.a(d),x.N,x.z))},
$S:z+0}
B.aNE.prototype={
$1(d){var w,v=A.aR(x.f.a(d),x.N,x.z),u=A.Y(v.h(0,"id")),t=v.h(0,"from")
t=A.Y(t==null?v.h(0,"from_id"):t)
w=v.h(0,"to")
w=A.Y(w==null?v.h(0,"to_id"):w)
v=A.ab(v.h(0,"type"))
return new B.ka(u,t,w,v==null?"related_to":v)},
$S:z+1}
B.aNF.prototype={
$1(d){return d.a===this.a},
$S:z+2}
B.ber.prototype={
$1(d){return d.length>=3},
$S:12}
B.bes.prototype={
$1(d){return C.o.n(this.a,d)},
$S:12}
B.bet.prototype={
$1(d){return d.length>=3},
$S:12}
B.beu.prototype={
$1(d){return C.o.n(this.a,d)},
$S:12}
B.bev.prototype={
$1(d){return B.ag0(A.aR(d,x.N,x.z))},
$S:z+0}
B.bew.prototype={
$1(d){return B.ag0(A.aR(d,x.N,x.z))},
$S:z+0}
B.bW4.prototype={
$1(d){return new B.Nj(d.V($.dI(),x.A))},
$S:z+3}
B.bWC.prototype={
$2(d,e){d.V($.dQ(),x.L)
return d.V($.ut(),x.s).O3(e)},
$S:z+4};(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.C,[B.ei,B.ka,B.hK,B.Nj])
w(A.cu,[B.aWt,B.aND,B.aNE,B.aNF,B.ber,B.bes,B.bet,B.beu,B.bev,B.bew,B.bW4])
v(B.bWC,A.ds)})()
A.cV(b.typeUniverse,JSON.parse('{"Nj":{"Jo":[]}}'))
var y={b:"id, entity_type, name, attributes, aliases, lat, lng"}
var x=(function rtii(){var w=A.L
return{L:w("aV<hq?>"),s:w("Jo"),h:w("hK"),m:w("x<ae<f,f>>"),S:w("x<f>"),G:w("w<ei>"),x:w("w<ae<f,f>>"),j:w("w<@>"),T:w("ka"),Y:w("ei"),f:w("ae<@,@>"),K:w("C"),N:w("f"),A:w("i7"),i:w("W"),z:w("@"),g:w("w<@>?"),H:w("~")}})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cR8","ut",()=>A.eC(new B.bW4(),x.s))
w($,"cRu","q0",()=>C.bD.$2$1(new B.bWC(),x.h,x.N))})()};
(a=>{a["4HFy5Pvmvj+zXNrxoxDqOJJXlAE="]=a.current})($__dart_deferred_initializers__);