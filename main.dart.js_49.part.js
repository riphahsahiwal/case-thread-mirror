((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
afT(d){var w,v,u,t,s,r=d.h(0,"attributes"),q=d.h(0,"aliases"),p=A.Y(d.h(0,"id")),o=A.ab(d.h(0,"type"))
if(o==null)o=A.ab(d.h(0,"entity_type"))
if(o==null)o="person"
w=A.ab(d.h(0,"name"))
if(w==null)w=""
v=x.f.b(r)?A.aR(r,x.N,x.z):C.dr
if(x.j.b(q)){u=J.c7(q,new B.aWc(),x.N)
u=A.J(u,u.$ti.i("al.E"))}else u=C.ax
t=A.dp(d.h(0,"lat"))
if(t==null)t=null
s=A.dp(d.h(0,"lng"))
return new B.ei(p,o,w,v,u,t,s==null?null:s)},
cq8(d){var w,v,u=x.g,t=u.a(d.h(0,"nodes"))
if(t==null)t=[]
t=J.c7(t,new B.aNu(),x.Y)
w=A.J(t,t.$ti.i("al.E"))
u=u.a(d.h(0,"edges"))
if(u==null)u=[]
u=J.c7(u,new B.aNv(),x.T)
v=A.J(u,u.$ti.i("al.E"))
return new B.hF(w,v)},
ei:function ei(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aWc:function aWc(){},
k7:function k7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hF:function hF(d,e){this.a=d
this.b=e},
aNu:function aNu(){},
aNv:function aNv(){},
aNw:function aNw(d){this.a=d},
N8:function N8(d){this.a=d},
bdX:function bdX(){},
bdY:function bdY(d){this.a=d},
bdZ:function bdZ(){},
be_:function be_(d){this.a=d},
be0:function be0(){},
be1:function be1(){},
bVq:function bVq(){},
bVY:function bVY(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
B.ei.prototype={
gbS(){return this.a}}
B.k7.prototype={
gbS(){return this.a}}
B.hF.prototype={
nQ(d){var w=this.a
return A.iF(new A.ag(w,new B.aNw(d),A.a3(w).i("ag<1>")))}}
B.N8.prototype={
NY(d){return this.aBe(d)},
aBe(d){var w=0,v=A.n(x.h),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$NY=A.j(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
n=r.a.aax("get_entity_map",A.R(["target_room",d],o,o))
w=7
return A.d(n,$async$NY)
case 7:q=f
o=B.cq8(A.aR(x.f.a(q),o,x.z))
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
return A.m($async$NY,v)},
JW(d,e,f,g,h,i,j){return this.bgt(d,e,f,g,h,i,j)},
bgs(d,e,f,g){return this.JW(C.ax,d,null,null,e,f,g)},
bgt(d,e,f,g,h,a0,a1){var w=0,v=A.n(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$JW=A.j(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:t=4
n=r.a.aN("entities")
m=x.N
q=A.D(m,x.K)
J.bf(q,"room_id",a1)
J.bf(q,"entity_type",e)
J.bf(q,"name",h)
l=x.z
k=a0.length===0?A.D(m,l):A.R(["note",a0],m,l)
J.bf(q,"attributes",k)
if(d.length!==0)J.bf(q,"aliases",d)
if(f!=null&&g!=null)J.BW(q,A.R(["lat",f,"lng",g],m,x.i))
q=n.ee(0,q).bD(y.b).hX(0)
w=7
return A.d(q,$async$JW)
case 7:p=a3
q=B.afT(A.aR(p,m,l))
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
return A.m($async$JW,v)},
EF(d,e){return this.bn2(d,e)},
bn2(b1,b2){var w=0,v=A.n(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$EF=A.j(function(b3,b4){if(b3===1){s.push(b4)
w=t}for(;;)switch(w){case 0:t=4
q=C.o.aK(b2).toLowerCase()
if(J.b_(q)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=J.R6(q,A.cf("\\s+",!0,!1))
a2=A.a3(a1).i("ag<1>")
a3=A.J(new A.ag(a1,new B.bdX(),a2),a2.i("z.E"))
p=a3
if(J.b_(p)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=r.a
a2=a1.gcC().e.a
o=(a2==null?null:a2.r).a
a2=a1.aN("room_members").bD("room_id").bb("user_id",o).bb("status","approved")
w=7
return A.d(a2,$async$EF)
case 7:n=b4
a2=a1.aN("case_rooms").bD("id").bb("owner_id",o)
w=8
return A.d(a2,$async$EF)
case 8:m=b4
a2=x.N
l=A.aL(a2)
for(a4=x.j,a5=J.aW(a4.a(n)),a6=x.f;a5.q();){k=a5.gK()
J.dx(l,A.Y(a6.a(k).h(0,"room_id")))}for(a5=J.aW(a4.a(m));a5.q();){j=a5.gK()
J.dx(l,A.Y(a6.a(j).h(0,"id")))}J.BX(l,b1)
if(l.a===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=a1.aN("entities").bD("name, room_id, case_rooms!inner(name)")
a5=l
a5=A.J(a5,A.t(a5).c)
a1=a1.W8("room_id",a5).W8("entity_type",A.c(["person","org"],x.S)).k5(500)
w=9
return A.d(a1,$async$EF)
case 9:i=b4
h=A.c([],x.m)
for(a1=J.aW(a4.a(i));a1.q();){g=a1.gK()
f=a6.a(g)
e=A.Y(J.A(f,"name")).toLowerCase()
a7=A.ab(a6.a(J.A(f,"case_rooms")).h(0,"name"))
d=a7==null?"Unknown case":a7
if(!J.c6q(p,new B.bdY(e))){a4=J.R6(e,A.cf("\\s+",!0,!1))
a8=new A.ag(a4,new B.bdZ(),A.a3(a4).i("ag<1>")).dM(0,new B.be_(q))}else a8=!0
a0=a8
if(a0)J.dx(h,A.R(["name",A.Y(J.A(f,"name")),"room",d],a2,a2))}u=h
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
return A.m($async$EF,v)},
YQ(d,e,f,g,h,i,j,k){return this.bxg(d,e,f,g,h,i,j,k)},
bxg(d,e,f,g,h,i,a0,a1){var w=0,v=A.n(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$YQ=A.j(function(a2,a3){if(a2===1){s.push(a3)
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
J.bf(q,"lng",a0)}l=r.a.aN("entities").cW(q).bb("id",g).bD(y.b).hX(0)
w=7
return A.d(l,$async$YQ)
case 7:p=a3
n=B.afT(A.aR(p,n,m))
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
return A.m($async$YQ,v)},
KL(d){return this.bl7(d)},
bl7(d){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$KL=A.j(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a
p=q.aN("entity_relationships").q_().axJ("from_entity_id.eq."+d+",to_entity_id.eq."+d)
w=6
return A.d(p,$async$KL)
case 6:q=q.aN("entities").q_().bb("id",d)
w=7
return A.d(q,$async$KL)
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
return A.m($async$KL,v)},
WV(d,e,f,g){return this.brS(d,e,f,g)},
brS(d,e,f,g){var w=0,v=A.n(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$WV=A.j(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.aax("nearby_entities",A.R(["p_room",g,"p_lat",d,"p_lng",e,"p_radius_km",f],x.N,x.K))
w=7
return A.d(o,$async$WV)
case 7:q=i
o=J.c7(x.j.a(q),new B.be0(),x.Y)
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
return A.m($async$WV,v)},
P4(d,e){return this.aEM(d,e)},
aEM(d,e){var w=0,v=A.n(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$P4=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
o=r.a.aax("suggest_entities",A.R(["p_room",e,"p_name",d],o,o))
w=7
return A.d(o,$async$P4)
case 7:q=g
o=J.c7(x.j.a(q),new B.be1(),x.Y)
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
return A.m($async$P4,v)},
TM(d,e,f,g){return this.bgC(d,e,f,g)},
bgC(d,e,f,g){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p,o
var $async$TM=A.j(function(h,i){if(h===1){t.push(i)
w=u}for(;;)switch(w){case 0:u=3
q=x.N
q=s.a.aN("entity_relationships").ee(0,A.R(["room_id",f,"from_entity_id",d,"to_entity_id",g,"relationship_type",e],q,q))
w=6
return A.d(q,$async$TM)
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
return A.m($async$TM,v)},
YV(d,e,f,g){return this.bxs(d,e,f,g)},
bxs(d,e,f,g){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$YV=A.j(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
q=A.D(x.N,x.z)
J.bf(q,"relationship_type",f)
J.bf(q,"from_entity_id",d)
J.bf(q,"to_entity_id",g)
if(q.a===0){w=1
break}o=r.a.aN("entity_relationships").cW(q).bb("id",e)
w=7
return A.d(o,$async$YV)
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
return A.m($async$YV,v)},
UW(d){return this.blc(d)},
blc(d){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p,o
var $async$UW=A.j(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a.aN("entity_relationships").q_().bb("id",d)
w=6
return A.d(q,$async$UW)
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
return A.m($async$UW,v)},
$iJe:1}
var z=a.updateTypes(["ei(@)","k7(@)","B(ei)","N8(as)","N<hF>(as,f)"])
B.aWc.prototype={
$1(d){return J.bm(d)},
$S:48}
B.aNu.prototype={
$1(d){return B.afT(A.aR(x.f.a(d),x.N,x.z))},
$S:z+0}
B.aNv.prototype={
$1(d){var w,v=A.aR(x.f.a(d),x.N,x.z),u=A.Y(v.h(0,"id")),t=v.h(0,"from")
t=A.Y(t==null?v.h(0,"from_id"):t)
w=v.h(0,"to")
w=A.Y(w==null?v.h(0,"to_id"):w)
v=A.ab(v.h(0,"type"))
return new B.k7(u,t,w,v==null?"related_to":v)},
$S:z+1}
B.aNw.prototype={
$1(d){return d.a===this.a},
$S:z+2}
B.bdX.prototype={
$1(d){return d.length>=3},
$S:11}
B.bdY.prototype={
$1(d){return C.o.n(this.a,d)},
$S:11}
B.bdZ.prototype={
$1(d){return d.length>=3},
$S:11}
B.be_.prototype={
$1(d){return C.o.n(this.a,d)},
$S:11}
B.be0.prototype={
$1(d){return B.afT(A.aR(d,x.N,x.z))},
$S:z+0}
B.be1.prototype={
$1(d){return B.afT(A.aR(d,x.N,x.z))},
$S:z+0}
B.bVq.prototype={
$1(d){return new B.N8(d.V($.dZ(),x.A))},
$S:z+3}
B.bVY.prototype={
$2(d,e){d.V($.dY(),x.L)
return d.V($.ur(),x.s).NY(e)},
$S:z+4};(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.C,[B.ei,B.k7,B.hF,B.N8])
w(A.cx,[B.aWc,B.aNu,B.aNv,B.aNw,B.bdX,B.bdY,B.bdZ,B.be_,B.be0,B.be1,B.bVq])
v(B.bVY,A.dA)})()
A.d1(b.typeUniverse,JSON.parse('{"N8":{"Je":[]}}'))
var y={b:"id, entity_type, name, attributes, aliases, lat, lng"}
var x=(function rtii(){var w=A.L
return{L:w("aT<hC?>"),s:w("Je"),h:w("hF"),m:w("y<af<f,f>>"),S:w("y<f>"),G:w("w<ei>"),x:w("w<af<f,f>>"),j:w("w<@>"),T:w("k7"),Y:w("ei"),f:w("af<@,@>"),K:w("C"),N:w("f"),A:w("iq"),i:w("W"),z:w("@"),g:w("w<@>?"),H:w("~")}})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cQa","ur",()=>A.eX(new B.bVq(),x.s))
w($,"cQw","pZ",()=>C.bC.$2$1(new B.bVY(),x.h,x.N))})()};
(a=>{a["3cPH6X1WfHk3Lb6VY5xj2piRR0o="]=a.current})($__dart_deferred_initializers__);