((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
afX(d){var w,v,u,t,s,r=d.h(0,"attributes"),q=d.h(0,"aliases"),p=A.Y(d.h(0,"id")),o=A.ab(d.h(0,"type"))
if(o==null)o=A.ab(d.h(0,"entity_type"))
if(o==null)o="person"
w=A.ab(d.h(0,"name"))
if(w==null)w=""
v=x.f.b(r)?A.aR(r,x.N,x.z):C.ds
if(x.j.b(q)){u=J.c7(q,new B.aWf(),x.N)
u=A.J(u,u.$ti.i("al.E"))}else u=C.ax
t=A.dp(d.h(0,"lat"))
if(t==null)t=null
s=A.dp(d.h(0,"lng"))
return new B.eh(p,o,w,v,u,t,s==null?null:s)},
cqw(d){var w,v,u=x.g,t=u.a(d.h(0,"nodes"))
if(t==null)t=[]
t=J.c7(t,new B.aNx(),x.Y)
w=A.J(t,t.$ti.i("al.E"))
u=u.a(d.h(0,"edges"))
if(u==null)u=[]
u=J.c7(u,new B.aNy(),x.T)
v=A.J(u,u.$ti.i("al.E"))
return new B.hH(w,v)},
eh:function eh(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aWf:function aWf(){},
k9:function k9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hH:function hH(d,e){this.a=d
this.b=e},
aNx:function aNx(){},
aNy:function aNy(){},
aNz:function aNz(d){this.a=d},
Ne:function Ne(d){this.a=d},
bea:function bea(){},
beb:function beb(d){this.a=d},
bec:function bec(){},
bed:function bed(d){this.a=d},
bee:function bee(){},
bef:function bef(){},
bVP:function bVP(){},
bWm:function bWm(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[75],B)
B.eh.prototype={
gbT(){return this.a}}
B.k9.prototype={
gbT(){return this.a}}
B.hH.prototype={
nR(d){var w=this.a
return A.iF(new A.ag(w,new B.aNz(d),A.a3(w).i("ag<1>")))}}
B.Ne.prototype={
O1(d){return this.aBr(d)},
aBr(d){var w=0,v=A.n(x.h),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$O1=A.j(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
n=r.a.aaD("get_entity_map",A.R(["target_room",d],o,o))
w=7
return A.d(n,$async$O1)
case 7:q=f
o=B.cqw(A.aR(x.f.a(q),o,x.z))
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
return A.m($async$O1,v)},
K_(d,e,f,g,h,i,j){return this.bgI(d,e,f,g,h,i,j)},
bgH(d,e,f,g){return this.K_(C.ax,d,null,null,e,f,g)},
bgI(d,e,f,g,h,a0,a1){var w=0,v=A.n(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$K_=A.j(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:t=4
n=r.a.aM("entities")
m=x.N
q=A.D(m,x.K)
J.be(q,"room_id",a1)
J.be(q,"entity_type",e)
J.be(q,"name",h)
l=x.z
k=a0.length===0?A.D(m,l):A.R(["note",a0],m,l)
J.be(q,"attributes",k)
if(d.length!==0)J.be(q,"aliases",d)
if(f!=null&&g!=null)J.C0(q,A.R(["lat",f,"lng",g],m,x.i))
q=n.e8(0,q).bz(y.b).hZ(0)
w=7
return A.d(q,$async$K_)
case 7:p=a3
q=B.afX(A.aR(p,m,l))
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
return A.m($async$K_,v)},
EI(d,e){return this.bnh(d,e)},
bnh(b1,b2){var w=0,v=A.n(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$EI=A.j(function(b3,b4){if(b3===1){s.push(b4)
w=t}for(;;)switch(w){case 0:t=4
q=C.o.aK(b2).toLowerCase()
if(J.b_(q)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=J.Re(q,A.cf("\\s+",!0,!1))
a2=A.a3(a1).i("ag<1>")
a3=A.J(new A.ag(a1,new B.bea(),a2),a2.i("z.E"))
p=a3
if(J.b_(p)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=r.a
a2=a1.gcC().e.a
o=(a2==null?null:a2.r).a
a2=a1.aM("room_members").bz("room_id").b6("user_id",o).b6("status","approved")
w=7
return A.d(a2,$async$EI)
case 7:n=b4
a2=a1.aM("case_rooms").bz("id").b6("owner_id",o)
w=8
return A.d(a2,$async$EI)
case 8:m=b4
a2=x.N
l=A.aL(a2)
for(a4=x.j,a5=J.aT(a4.a(n)),a6=x.f;a5.q();){k=a5.gJ()
J.dz(l,A.Y(a6.a(k).h(0,"room_id")))}for(a5=J.aT(a4.a(m));a5.q();){j=a5.gJ()
J.dz(l,A.Y(a6.a(j).h(0,"id")))}J.C1(l,b1)
if(l.a===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=a1.aM("entities").bz("name, room_id, case_rooms!inner(name)")
a5=l
a5=A.J(a5,A.t(a5).c)
a1=a1.Wc("room_id",a5).Wc("entity_type",A.c(["person","org"],x.S)).k5(500)
w=9
return A.d(a1,$async$EI)
case 9:i=b4
h=A.c([],x.m)
for(a1=J.aT(a4.a(i));a1.q();){g=a1.gJ()
f=a6.a(g)
e=A.Y(J.A(f,"name")).toLowerCase()
a7=A.ab(a6.a(J.A(f,"case_rooms")).h(0,"name"))
d=a7==null?"Unknown case":a7
if(!J.c6O(p,new B.beb(e))){a4=J.Re(e,A.cf("\\s+",!0,!1))
a8=new A.ag(a4,new B.bec(),A.a3(a4).i("ag<1>")).dV(0,new B.bed(q))}else a8=!0
a0=a8
if(a0)J.dz(h,A.R(["name",A.Y(J.A(f,"name")),"room",d],a2,a2))}u=h
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
YV(d,e,f,g,h,i,j,k){return this.bxx(d,e,f,g,h,i,j,k)},
bxx(d,e,f,g,h,i,a0,a1){var w=0,v=A.n(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$YV=A.j(function(a2,a3){if(a2===1){s.push(a3)
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
J.be(q,"lng",a0)}l=r.a.aM("entities").cV(q).b6("id",g).bz(y.b).hZ(0)
w=7
return A.d(l,$async$YV)
case 7:p=a3
n=B.afX(A.aR(p,n,m))
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
return A.m($async$YV,v)},
KO(d){return this.blm(d)},
blm(d){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$KO=A.j(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a
p=q.aM("entity_relationships").oI().axW("from_entity_id.eq."+d+",to_entity_id.eq."+d)
w=6
return A.d(p,$async$KO)
case 6:q=q.aM("entities").oI().b6("id",d)
w=7
return A.d(q,$async$KO)
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
return A.m($async$KO,v)},
WY(d,e,f,g){return this.bs6(d,e,f,g)},
bs6(d,e,f,g){var w=0,v=A.n(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$WY=A.j(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.aaD("nearby_entities",A.R(["p_room",g,"p_lat",d,"p_lng",e,"p_radius_km",f],x.N,x.K))
w=7
return A.d(o,$async$WY)
case 7:q=i
o=J.c7(x.j.a(q),new B.bee(),x.Y)
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
return A.m($async$WY,v)},
P8(d,e){return this.aF0(d,e)},
aF0(d,e){var w=0,v=A.n(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$P8=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
o=r.a.aaD("suggest_entities",A.R(["p_room",e,"p_name",d],o,o))
w=7
return A.d(o,$async$P8)
case 7:q=g
o=J.c7(x.j.a(q),new B.bef(),x.Y)
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
return A.m($async$P8,v)},
TQ(d,e,f,g){return this.bgR(d,e,f,g)},
bgR(d,e,f,g){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p,o
var $async$TQ=A.j(function(h,i){if(h===1){t.push(i)
w=u}for(;;)switch(w){case 0:u=3
q=x.N
q=s.a.aM("entity_relationships").e8(0,A.R(["room_id",f,"from_entity_id",d,"to_entity_id",g,"relationship_type",e],q,q))
w=6
return A.d(q,$async$TQ)
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
return A.m($async$TQ,v)},
Z_(d,e,f,g){return this.bxJ(d,e,f,g)},
bxJ(d,e,f,g){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Z_=A.j(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
q=A.D(x.N,x.z)
J.be(q,"relationship_type",f)
J.be(q,"from_entity_id",d)
J.be(q,"to_entity_id",g)
if(q.a===0){w=1
break}o=r.a.aM("entity_relationships").cV(q).b6("id",e)
w=7
return A.d(o,$async$Z_)
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
return A.m($async$Z_,v)},
V_(d){return this.blr(d)},
blr(d){var w=0,v=A.n(x.H),u=1,t=[],s=this,r,q,p,o
var $async$V_=A.j(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a.aM("entity_relationships").oI().b6("id",d)
w=6
return A.d(q,$async$V_)
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
return A.m($async$V_,v)},
$iJh:1}
var z=a.updateTypes(["eh(@)","k9(@)","B(eh)","Ne(as)","N<hH>(as,f)"])
B.aWf.prototype={
$1(d){return J.bm(d)},
$S:47}
B.aNx.prototype={
$1(d){return B.afX(A.aR(x.f.a(d),x.N,x.z))},
$S:z+0}
B.aNy.prototype={
$1(d){var w,v=A.aR(x.f.a(d),x.N,x.z),u=A.Y(v.h(0,"id")),t=v.h(0,"from")
t=A.Y(t==null?v.h(0,"from_id"):t)
w=v.h(0,"to")
w=A.Y(w==null?v.h(0,"to_id"):w)
v=A.ab(v.h(0,"type"))
return new B.k9(u,t,w,v==null?"related_to":v)},
$S:z+1}
B.aNz.prototype={
$1(d){return d.a===this.a},
$S:z+2}
B.bea.prototype={
$1(d){return d.length>=3},
$S:11}
B.beb.prototype={
$1(d){return C.o.n(this.a,d)},
$S:11}
B.bec.prototype={
$1(d){return d.length>=3},
$S:11}
B.bed.prototype={
$1(d){return C.o.n(this.a,d)},
$S:11}
B.bee.prototype={
$1(d){return B.afX(A.aR(d,x.N,x.z))},
$S:z+0}
B.bef.prototype={
$1(d){return B.afX(A.aR(d,x.N,x.z))},
$S:z+0}
B.bVP.prototype={
$1(d){return new B.Ne(d.V($.dZ(),x.A))},
$S:z+3}
B.bWm.prototype={
$2(d,e){d.V($.dY(),x.L)
return d.V($.uq(),x.s).O1(e)},
$S:z+4};(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.C,[B.eh,B.k9,B.hH,B.Ne])
w(A.cw,[B.aWf,B.aNx,B.aNy,B.aNz,B.bea,B.beb,B.bec,B.bed,B.bee,B.bef,B.bVP])
v(B.bWm,A.dw)})()
A.cZ(b.typeUniverse,JSON.parse('{"Ne":{"Jh":[]}}'))
var y={b:"id, entity_type, name, attributes, aliases, lat, lng"}
var x=(function rtii(){var w=A.L
return{L:w("aW<hD?>"),s:w("Jh"),h:w("hH"),m:w("y<af<f,f>>"),S:w("y<f>"),G:w("w<eh>"),x:w("w<af<f,f>>"),j:w("w<@>"),T:w("k9"),Y:w("eh"),f:w("af<@,@>"),K:w("C"),N:w("f"),A:w("iq"),i:w("W"),z:w("@"),g:w("w<@>?"),H:w("~")}})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cQC","uq",()=>A.eM(new B.bVP(),x.s))
w($,"cQY","q_",()=>C.bD.$2$1(new B.bWm(),x.h,x.N))})()};
(a=>{a["KORnfn/9HPSJjFLnip19LFifg/E="]=a.current})($__dart_deferred_initializers__);