((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
afX(d){var w,v,u,t,s,r=d.h(0,"attributes"),q=d.h(0,"aliases"),p=A.Z(d.h(0,"id")),o=A.ab(d.h(0,"type"))
if(o==null)o=A.ab(d.h(0,"entity_type"))
if(o==null)o="person"
w=A.ab(d.h(0,"name"))
if(w==null)w=""
v=x.f.b(r)?A.aS(r,x.N,x.z):C.ds
if(x.j.b(q)){u=J.c7(q,new B.aWh(),x.N)
u=A.J(u,u.$ti.i("al.E"))}else u=C.ax
t=A.dp(d.h(0,"lat"))
if(t==null)t=null
s=A.dp(d.h(0,"lng"))
return new B.ej(p,o,w,v,u,t,s==null?null:s)},
cqo(d){var w,v,u=x.g,t=u.a(d.h(0,"nodes"))
if(t==null)t=[]
t=J.c7(t,new B.aNz(),x.Y)
w=A.J(t,t.$ti.i("al.E"))
u=u.a(d.h(0,"edges"))
if(u==null)u=[]
u=J.c7(u,new B.aNA(),x.T)
v=A.J(u,u.$ti.i("al.E"))
return new B.hH(w,v)},
ej:function ej(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aWh:function aWh(){},
k9:function k9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hH:function hH(d,e){this.a=d
this.b=e},
aNz:function aNz(){},
aNA:function aNA(){},
aNB:function aNB(d){this.a=d},
Na:function Na(d){this.a=d},
be3:function be3(){},
be4:function be4(d){this.a=d},
be5:function be5(){},
be6:function be6(d){this.a=d},
be7:function be7(){},
be8:function be8(){},
bVB:function bVB(){},
bW8:function bW8(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
B.ej.prototype={
gbS(){return this.a}}
B.k9.prototype={
gbS(){return this.a}}
B.hH.prototype={
nQ(d){var w=this.a
return A.iG(new A.ag(w,new B.aNB(d),A.a3(w).i("ag<1>")))}}
B.Na.prototype={
O_(d){return this.aBl(d)},
aBl(d){var w=0,v=A.n(x.h),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$O_=A.j(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
n=r.a.aaA("get_entity_map",A.R(["target_room",d],o,o))
w=7
return A.d(n,$async$O_)
case 7:q=f
o=B.cqo(A.aS(x.f.a(q),o,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.H(l)
o=A.aE(p)
throw A.i(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$O_,v)},
JY(d,e,f,g,h,i,j){return this.bgH(d,e,f,g,h,i,j)},
bgG(d,e,f,g){return this.JY(C.ax,d,null,null,e,f,g)},
bgH(d,e,f,g,h,a0,a1){var w=0,v=A.n(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$JY=A.j(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:t=4
n=r.a.aM("entities")
m=x.N
q=A.D(m,x.K)
J.bf(q,"room_id",a1)
J.bf(q,"entity_type",e)
J.bf(q,"name",h)
l=x.z
k=a0.length===0?A.D(m,l):A.R(["note",a0],m,l)
J.bf(q,"attributes",k)
if(d.length!==0)J.bf(q,"aliases",d)
if(f!=null&&g!=null)J.BX(q,A.R(["lat",f,"lng",g],m,x.i))
q=n.ef(0,q).bz(y.b).hX(0)
w=7
return A.d(q,$async$JY)
case 7:p=a3
q=B.afX(A.aS(p,m,l))
u=q
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.H(i)
q=A.aE(o)
throw A.i(q)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$JY,v)},
EI(d,e){return this.bng(d,e)},
bng(b1,b2){var w=0,v=A.n(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$EI=A.j(function(b3,b4){if(b3===1){s.push(b4)
w=t}for(;;)switch(w){case 0:t=4
q=C.o.aK(b2).toLowerCase()
if(J.b_(q)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=J.R8(q,A.cf("\\s+",!0,!1))
a2=A.a3(a1).i("ag<1>")
a3=A.J(new A.ag(a1,new B.be3(),a2),a2.i("z.E"))
p=a3
if(J.b_(p)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=r.a
a2=a1.gcw().e.a
o=(a2==null?null:a2.r).a
a2=a1.aM("room_members").bz("room_id").b7("user_id",o).b7("status","approved")
w=7
return A.d(a2,$async$EI)
case 7:n=b4
a2=a1.aM("case_rooms").bz("id").b7("owner_id",o)
w=8
return A.d(a2,$async$EI)
case 8:m=b4
a2=x.N
l=A.aL(a2)
for(a4=x.j,a5=J.aV(a4.a(n)),a6=x.f;a5.q();){k=a5.gK()
J.dq(l,A.Z(a6.a(k).h(0,"room_id")))}for(a5=J.aV(a4.a(m));a5.q();){j=a5.gK()
J.dq(l,A.Z(a6.a(j).h(0,"id")))}J.BY(l,b1)
if(l.a===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=a1.aM("entities").bz("name, room_id, case_rooms!inner(name)")
a5=l
a5=A.J(a5,A.t(a5).c)
a1=a1.Wa("room_id",a5).Wa("entity_type",A.c(["person","org"],x.S)).k5(500)
w=9
return A.d(a1,$async$EI)
case 9:i=b4
h=A.c([],x.m)
for(a1=J.aV(a4.a(i));a1.q();){g=a1.gK()
f=a6.a(g)
e=A.Z(J.A(f,"name")).toLowerCase()
a7=A.ab(a6.a(J.A(f,"case_rooms")).h(0,"name"))
d=a7==null?"Unknown case":a7
if(!J.c6G(p,new B.be4(e))){a4=J.R8(e,A.cf("\\s+",!0,!1))
a8=new A.ag(a4,new B.be5(),A.a3(a4).i("ag<1>")).dO(0,new B.be6(q))}else a8=!0
a0=a8
if(a0)J.dq(h,A.R(["name",A.Z(J.A(f,"name")),"room",d],a2,a2))}u=h
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
return A.m($async$EI,v)},
YT(d,e,f,g,h,i,j,k){return this.bxv(d,e,f,g,h,i,j,k)},
bxv(d,e,f,g,h,i,a0,a1){var w=0,v=A.n(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$YT=A.j(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:t=4
n=x.N
m=x.z
q=A.D(n,m)
J.bf(q,"name",a1)
J.bf(q,"entity_type",h)
J.bf(q,"attributes",e)
J.bf(q,"aliases",d)
if(f){J.bf(q,"lat",null)
J.bf(q,"lng",null)}else if(i!=null&&a0!=null){J.bf(q,"lat",i)
J.bf(q,"lng",a0)}l=r.a.aM("entities").cW(q).b7("id",g).bz(y.b).hX(0)
w=7
return A.d(l,$async$YT)
case 7:p=a3
n=B.afX(A.aS(p,n,m))
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.H(j)
n=A.aE(o)
throw A.i(n)
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$YT,v)},
KN(d){return this.bll(d)},
bll(d){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$KN=A.j(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a
p=q.aM("entity_relationships").q_().axQ("from_entity_id.eq."+d+",to_entity_id.eq."+d)
w=6
return A.d(p,$async$KN)
case 6:q=q.aM("entities").q_().b7("id",d)
w=7
return A.d(q,$async$KN)
case 7:u=1
w=5
break
case 3:u=2
n=t.pop()
r=A.H(n)
q=A.aE(r)
throw A.i(q)
w=5
break
case 2:w=1
break
case 5:return A.l(null,v)
case 1:return A.k(t.at(-1),v)}})
return A.m($async$KN,v)},
WY(d,e,f,g){return this.bs6(d,e,f,g)},
bs6(d,e,f,g){var w=0,v=A.n(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$WY=A.j(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.aaA("nearby_entities",A.R(["p_room",g,"p_lat",d,"p_lng",e,"p_radius_km",f],x.N,x.K))
w=7
return A.d(o,$async$WY)
case 7:q=i
o=J.c7(x.j.a(q),new B.be7(),x.Y)
o=A.J(o,o.$ti.i("al.E"))
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
return A.m($async$WY,v)},
P6(d,e){return this.aEU(d,e)},
aEU(d,e){var w=0,v=A.n(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$P6=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
o=r.a.aaA("suggest_entities",A.R(["p_room",e,"p_name",d],o,o))
w=7
return A.d(o,$async$P6)
case 7:q=g
o=J.c7(x.j.a(q),new B.be8(),x.Y)
o=A.J(o,o.$ti.i("al.E"))
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
return A.m($async$P6,v)},
TO(d,e,f,g){return this.bgQ(d,e,f,g)},
bgQ(d,e,f,g){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p,o
var $async$TO=A.j(function(h,i){if(h===1){t.push(i)
w=u}for(;;)switch(w){case 0:u=3
q=x.N
q=s.a.aM("entity_relationships").ef(0,A.R(["room_id",f,"from_entity_id",d,"to_entity_id",g,"relationship_type",e],q,q))
w=6
return A.d(q,$async$TO)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.H(o)
q=A.aE(r)
throw A.i(q)
w=5
break
case 2:w=1
break
case 5:return A.l(null,v)
case 1:return A.k(t.at(-1),v)}})
return A.m($async$TO,v)},
YY(d,e,f,g){return this.bxH(d,e,f,g)},
bxH(d,e,f,g){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$YY=A.j(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
q=A.D(x.N,x.z)
J.bf(q,"relationship_type",f)
J.bf(q,"from_entity_id",d)
J.bf(q,"to_entity_id",g)
if(q.a===0){w=1
break}o=r.a.aM("entity_relationships").cW(q).b7("id",e)
w=7
return A.d(o,$async$YY)
case 7:t=2
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
return A.m($async$YY,v)},
UY(d){return this.blq(d)},
blq(d){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p,o
var $async$UY=A.j(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a.aM("entity_relationships").q_().b7("id",d)
w=6
return A.d(q,$async$UY)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.H(o)
q=A.aE(r)
throw A.i(q)
w=5
break
case 2:w=1
break
case 5:return A.l(null,v)
case 1:return A.k(t.at(-1),v)}})
return A.m($async$UY,v)},
$iJg:1}
var z=a.updateTypes(["ej(@)","k9(@)","B(ej)","Na(as)","O<hH>(as,f)"])
B.aWh.prototype={
$1(d){return J.bl(d)},
$S:47}
B.aNz.prototype={
$1(d){return B.afX(A.aS(x.f.a(d),x.N,x.z))},
$S:z+0}
B.aNA.prototype={
$1(d){var w,v=A.aS(x.f.a(d),x.N,x.z),u=A.Z(v.h(0,"id")),t=v.h(0,"from")
t=A.Z(t==null?v.h(0,"from_id"):t)
w=v.h(0,"to")
w=A.Z(w==null?v.h(0,"to_id"):w)
v=A.ab(v.h(0,"type"))
return new B.k9(u,t,w,v==null?"related_to":v)},
$S:z+1}
B.aNB.prototype={
$1(d){return d.a===this.a},
$S:z+2}
B.be3.prototype={
$1(d){return d.length>=3},
$S:11}
B.be4.prototype={
$1(d){return C.o.n(this.a,d)},
$S:11}
B.be5.prototype={
$1(d){return d.length>=3},
$S:11}
B.be6.prototype={
$1(d){return C.o.n(this.a,d)},
$S:11}
B.be7.prototype={
$1(d){return B.afX(A.aS(d,x.N,x.z))},
$S:z+0}
B.be8.prototype={
$1(d){return B.afX(A.aS(d,x.N,x.z))},
$S:z+0}
B.bVB.prototype={
$1(d){return new B.Na(d.V($.e_(),x.A))},
$S:z+3}
B.bW8.prototype={
$2(d,e){d.V($.dK(),x.L)
return d.V($.us(),x.s).O_(e)},
$S:z+4};(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.C,[B.ej,B.k9,B.hH,B.Na])
w(A.cy,[B.aWh,B.aNz,B.aNA,B.aNB,B.be3,B.be4,B.be5,B.be6,B.be7,B.be8,B.bVB])
v(B.bW8,A.dA)})()
A.d1(b.typeUniverse,JSON.parse('{"Na":{"Jg":[]}}'))
var y={b:"id, entity_type, name, attributes, aliases, lat, lng"}
var x=(function rtii(){var w=A.L
return{L:w("aW<hD?>"),s:w("Jg"),h:w("hH"),m:w("y<af<f,f>>"),S:w("y<f>"),G:w("w<ej>"),x:w("w<af<f,f>>"),j:w("w<@>"),T:w("k9"),Y:w("ej"),f:w("af<@,@>"),K:w("C"),N:w("f"),A:w("ir"),i:w("W"),z:w("@"),g:w("w<@>?"),H:w("~")}})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cQs","us",()=>A.eY(new B.bVB(),x.s))
w($,"cQO","pZ",()=>C.bC.$2$1(new B.bW8(),x.h,x.N))})()};
(a=>{a["O24PNsAYyG7p/ELZj3M1ZA/Y8Fs="]=a.current})($__dart_deferred_initializers__);