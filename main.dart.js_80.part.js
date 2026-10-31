((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
agF(d){var w,v,u,t,s,r=d.h(0,"attributes"),q=d.h(0,"aliases"),p=A.U(d.h(0,"id")),o=A.a8(d.h(0,"type"))
if(o==null)o=A.a8(d.h(0,"entity_type"))
if(o==null)o="person"
w=A.a8(d.h(0,"name"))
if(w==null)w=""
v=x.f.b(r)?A.aM(r,x.N,x.z):C.dh
if(x.j.b(q)){u=J.bW(q,new B.aWV(),x.N)
u=A.K(u,u.$ti.i("ak.E"))}else u=C.as
t=A.dp(d.h(0,"lat"))
if(t==null)t=null
s=A.dp(d.h(0,"lng"))
return new B.en(p,o,w,v,u,t,s==null?null:s)},
ctE(d){var w,v,u=x.g,t=u.a(d.h(0,"nodes"))
if(t==null)t=[]
t=J.bW(t,new B.aOq(),x.Y)
w=A.K(t,t.$ti.i("ak.E"))
u=u.a(d.h(0,"edges"))
if(u==null)u=[]
u=J.bW(u,new B.aOr(),x.T)
v=A.K(u,u.$ti.i("ak.E"))
return new B.he(w,v)},
en:function en(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aWV:function aWV(){},
kh:function kh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
he:function he(d,e){this.a=d
this.b=e},
aOq:function aOq(){},
aOr:function aOr(){},
aOs:function aOs(d){this.a=d},
or:function or(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
baq:function baq(){},
NF:function NF(d){this.a=d},
bf7:function bf7(){},
bf8:function bf8(d){this.a=d},
bf9:function bf9(){},
bfa:function bfa(d){this.a=d},
bfc:function bfc(){},
bfd:function bfd(){},
bfb:function bfb(){},
bY7:function bY7(){},
bYC:function bYC(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[87],B)
B.en.prototype={
gbE(){return this.a}}
B.kh.prototype={
gbE(){return this.a}}
B.he.prototype={
nX(d){var w=this.a
return A.it(new A.ai(w,new B.aOs(d),A.a6(w).i("ai<1>")))}}
B.or.prototype={
ga8u(){var w,v,u,t=A.c([],x.t),s=x.g.a(this.d.h(0,"entities"))
s=J.aL(s==null?[]:s)
w=x.f
v=x.N
u=x.z
while(s.q())t.push(A.aM(w.a(s.gI()),v,u))
return t},
gab8(){var w,v,u,t=A.c([],x.t),s=x.g.a(this.d.h(0,"relationships"))
s=J.aL(s==null?[]:s)
w=x.f
v=x.N
u=x.z
while(s.q())t.push(A.aM(w.a(s.gI()),v,u))
return t},
gaz3(){var w,v,u,t,s=A.cc("\\{\\{(\\w+)\\}\\}",!0,!1),r=x.N,q=A.aQ(r)
for(w=this.ga8u(),v=w.length,u=0;u<w.length;w.length===v||(0,A.E)(w),++u){t=A.a8(w[u].h(0,"name"))
t=s.pV(0,t==null?"":t)
q.L(0,A.ib(t,new B.baq(),A.t(t).i("z.E"),r))}r=A.K(q,q.$ti.c)
C.i.l1(r)
return r},
gbE(){return this.a}}
B.NF.prototype={
Ot(d){return this.aCm(d)},
aCm(d){var w=0,v=A.m(x.h),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ot=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
n=r.a.Z9("get_entity_map",A.Q(["target_room",d],o,o))
w=7
return A.e(n,$async$Ot)
case 7:q=f
o=B.ctE(A.aM(x.f.a(q),o,x.z))
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
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Ot,v)},
Kj(d,e,f,g,h,i,j){return this.bio(d,e,f,g,h,i,j)},
bin(d,e,f,g){return this.Kj(C.as,d,null,null,e,f,g)},
bio(d,e,f,g,h,a0,a1){var w=0,v=A.m(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Kj=A.i(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:t=4
n=r.a.aA("entities")
m=x.N
q=A.C(m,x.K)
J.bg(q,"room_id",a1)
J.bg(q,"entity_type",e)
J.bg(q,"name",h)
l=x.z
k=a0.length===0?A.C(m,l):A.Q(["note",a0],m,l)
J.bg(q,"attributes",k)
if(d.length!==0)J.bg(q,"aliases",d)
if(f!=null&&g!=null)J.Cv(q,A.Q(["lat",f,"lng",g],m,x.i))
q=n.e0(0,q).bo(y.b).i3(0)
w=7
return A.e(q,$async$Kj)
case 7:p=a3
q=B.agF(A.aM(p,m,l))
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
throw A.n(q)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Kj,v)},
EU(d,e){return this.boX(d,e)},
boX(b1,b2){var w=0,v=A.m(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$EU=A.i(function(b3,b4){if(b3===1){s.push(b4)
w=t}for(;;)switch(w){case 0:t=4
q=C.o.aI(b2).toLowerCase()
if(J.aX(q)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=J.RJ(q,A.cc("\\s+",!0,!1))
a2=A.a6(a1).i("ai<1>")
a3=A.K(new A.ai(a1,new B.bf7(),a2),a2.i("z.E"))
p=a3
if(J.aX(p)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=r.a
a2=a1.gcb().e.a
o=(a2==null?null:a2.r).a
a2=a1.aA("room_members").bo("room_id").b0("user_id",o).b0("status","approved")
w=7
return A.e(a2,$async$EU)
case 7:n=b4
a2=a1.aA("case_rooms").bo("id").b0("owner_id",o)
w=8
return A.e(a2,$async$EU)
case 8:m=b4
a2=x.N
l=A.aQ(a2)
for(a4=x.j,a5=J.aL(a4.a(n)),a6=x.f;a5.q();){k=a5.gI()
J.dz(l,A.U(a6.a(k).h(0,"room_id")))}for(a5=J.aL(a4.a(m));a5.q();){j=a5.gI()
J.dz(l,A.U(a6.a(j).h(0,"id")))}J.Cw(l,b1)
if(l.a===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=a1.aA("entities").bo("name, room_id, case_rooms!inner(name)")
a5=l
a5=A.K(a5,A.t(a5).c)
a1=a1.qi("room_id",a5).qi("entity_type",A.c(["person","org"],x.U)).js(500)
w=9
return A.e(a1,$async$EU)
case 9:i=b4
h=A.c([],x.m)
for(a1=J.aL(a4.a(i));a1.q();){g=a1.gI()
f=a6.a(g)
e=A.U(J.A(f,"name")).toLowerCase()
a7=A.a8(a6.a(J.A(f,"case_rooms")).h(0,"name"))
d=a7==null?"Unknown case":a7
if(!J.cqb(p,new B.bf8(e))){a4=J.RJ(e,A.cc("\\s+",!0,!1))
a8=new A.ai(a4,new B.bf9(),A.a6(a4).i("ai<1>")).dG(0,new B.bfa(q))}else a8=!0
a0=a8
if(a0)J.dz(h,A.Q(["name",A.U(J.A(f,"name")),"room",d],a2,a2))}u=h
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
return A.l($async$EU,v)},
ZB(d,e,f,g,h,i,j,k){return this.bz8(d,e,f,g,h,i,j,k)},
bz8(d,e,f,g,h,i,a0,a1){var w=0,v=A.m(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ZB=A.i(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:t=4
n=x.N
m=x.z
q=A.C(n,m)
J.bg(q,"name",a1)
J.bg(q,"entity_type",h)
J.bg(q,"attributes",e)
J.bg(q,"aliases",d)
if(f){J.bg(q,"lat",null)
J.bg(q,"lng",null)}else if(i!=null&&a0!=null){J.bg(q,"lat",i)
J.bg(q,"lng",a0)}l=r.a.aA("entities").cW(q).b0("id",g).bo(y.b).i3(0)
w=7
return A.e(l,$async$ZB)
case 7:p=a3
n=B.agF(A.aM(p,n,m))
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
throw A.n(n)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$ZB,v)},
L4(d){return this.bn1(d)},
bn1(d){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$L4=A.i(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a
p=q.aA("entity_relationships").oN().aav("from_entity_id.eq."+d+",to_entity_id.eq."+d)
w=6
return A.e(p,$async$L4)
case 6:q=q.aA("entities").oN().b0("id",d)
w=7
return A.e(q,$async$L4)
case 7:u=1
w=5
break
case 3:u=2
n=t.pop()
r=A.G(n)
q=A.aB(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$L4,v)},
XH(d,e,f,g){return this.btO(d,e,f,g)},
btO(d,e,f,g){var w=0,v=A.m(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$XH=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.Z9("nearby_entities",A.Q(["p_room",g,"p_lat",d,"p_lng",e,"p_radius_km",f],x.N,x.K))
w=7
return A.e(o,$async$XH)
case 7:q=i
o=J.bW(x.j.a(q),new B.bfc(),x.Y)
o=A.K(o,o.$ti.i("ak.E"))
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
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$XH,v)},
PB(d,e){return this.aFW(d,e)},
aFW(d,e){var w=0,v=A.m(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$PB=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
o=r.a.Z9("suggest_entities",A.Q(["p_room",e,"p_name",d],o,o))
w=7
return A.e(o,$async$PB)
case 7:q=g
o=J.bW(x.j.a(q),new B.bfd(),x.Y)
o=A.K(o,o.$ti.i("ak.E"))
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
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$PB,v)},
Xq(){var w=0,v=A.m(x.F),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Xq=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.aA("case_type_templates").bo("id, display_name, description, entity_seed").b0("is_published",!0).XM("entity_seed","is",null).pf("display_name")
w=7
return A.e(o,$async$Xq)
case 7:q=e
o=J.bW(x.j.a(q),new B.bfb(),x.C)
o=A.K(o,o.$ti.i("ak.E"))
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
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Xq,v)},
WT(d,e,f){return this.bqW(d,e,f)},
bqW(d,e,f){var w=0,v=A.m(x.S),u,t=2,s=[],r=this,q,p,o,n,m
var $async$WT=A.i(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.Z9("materialize_entity_seed",A.Q(["p_room",d,"p_template_id",e,"p_values",f],x.N,x.K))
w=7
return A.e(o,$async$WT)
case 7:q=h
o=A.dp(q)
o=o==null?null:C.l.F(o)
if(o==null)o=0
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
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$WT,v)},
Up(d,e,f,g){return this.bix(d,e,f,g)},
bix(d,e,f,g){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o
var $async$Up=A.i(function(h,i){if(h===1){t.push(i)
w=u}for(;;)switch(w){case 0:u=3
q=x.N
q=s.a.aA("entity_relationships").e0(0,A.Q(["room_id",f,"from_entity_id",d,"to_entity_id",g,"relationship_type",e],q,q))
w=6
return A.e(q,$async$Up)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.G(o)
q=A.aB(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$Up,v)},
ZG(d,e,f,g){return this.bzk(d,e,f,g)},
bzk(d,e,f,g){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ZG=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
q=A.C(x.N,x.z)
J.bg(q,"relationship_type",f)
J.bg(q,"from_entity_id",d)
J.bg(q,"to_entity_id",g)
if(q.a===0){w=1
break}o=r.a.aA("entity_relationships").cW(q).b0("id",e)
w=7
return A.e(o,$async$ZG)
case 7:t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.G(m)
o=A.aB(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$ZG,v)},
VC(d){return this.bn6(d)},
bn6(d){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o
var $async$VC=A.i(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a.aA("entity_relationships").oN().b0("id",d)
w=6
return A.e(q,$async$VC)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.G(o)
q=A.aB(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$VC,v)},
$iJE:1}
var z=a.updateTypes(["en(@)","kh(@)","B(en)","or(@)","NF(am)","N<he>(am,f)"])
B.aWV.prototype={
$1(d){return J.bd(d)},
$S:49}
B.aOq.prototype={
$1(d){return B.agF(A.aM(x.f.a(d),x.N,x.z))},
$S:z+0}
B.aOr.prototype={
$1(d){var w,v=A.aM(x.f.a(d),x.N,x.z),u=A.U(v.h(0,"id")),t=v.h(0,"from")
t=A.U(t==null?v.h(0,"from_id"):t)
w=v.h(0,"to")
w=A.U(w==null?v.h(0,"to_id"):w)
v=A.a8(v.h(0,"type"))
return new B.kh(u,t,w,v==null?"related_to":v)},
$S:z+1}
B.aOs.prototype={
$1(d){return d.a===this.a},
$S:z+2}
B.baq.prototype={
$1(d){var w=d.b[1]
w.toString
return w},
$S:1141}
B.bf7.prototype={
$1(d){return d.length>=3},
$S:10}
B.bf8.prototype={
$1(d){return C.o.n(this.a,d)},
$S:10}
B.bf9.prototype={
$1(d){return d.length>=3},
$S:10}
B.bfa.prototype={
$1(d){return C.o.n(this.a,d)},
$S:10}
B.bfc.prototype={
$1(d){return B.agF(A.aM(d,x.N,x.z))},
$S:z+0}
B.bfd.prototype={
$1(d){return B.agF(A.aM(d,x.N,x.z))},
$S:z+0}
B.bfb.prototype={
$1(d){var w=x.N,v=x.z,u=A.aM(d,w,v),t=u.h(0,"entity_seed"),s=A.U(u.h(0,"id")),r=A.a8(u.h(0,"display_name"))
if(r==null)r=""
u=A.a8(u.h(0,"description"))
if(u==null)u=""
return new B.or(s,r,u,x.f.b(t)?A.aM(t,w,v):C.dh)},
$S:z+3}
B.bY7.prototype={
$1(d){return new B.NF(d.T($.dD(),x.A))},
$S:z+4}
B.bYC.prototype={
$2(d,e){d.T($.dy(),x.L)
return d.T($.qc(),x.s).Ot(e)},
$S:z+5};(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.D,[B.en,B.kh,B.he,B.or,B.NF])
w(A.cf,[B.aWV,B.aOq,B.aOr,B.aOs,B.baq,B.bf7,B.bf8,B.bf9,B.bfa,B.bfc,B.bfd,B.bfb,B.bY7])
v(B.bYC,A.dk)})()
A.cC(b.typeUniverse,JSON.parse('{"NF":{"JE":[]}}'))
var y={b:"id, entity_type, name, attributes, aliases, lat, lng"}
var x=(function rtii(){var w=A.J
return{L:w("aS<fV?>"),s:w("JE"),h:w("he"),m:w("x<ab<f,f>>"),t:w("x<ab<f,@>>"),U:w("x<f>"),G:w("v<en>"),x:w("v<ab<f,f>>"),F:w("v<or>"),j:w("v<@>"),T:w("kh"),Y:w("en"),f:w("ab<@,@>"),K:w("D"),C:w("or"),N:w("f"),A:w("h5"),i:w("Y"),z:w("@"),S:w("w"),g:w("v<@>?"),H:w("~")}})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cTQ","qc",()=>A.eo(new B.bY7(),x.s))
w($,"cUa","nH",()=>C.bJ.$2$1(new B.bYC(),x.h,x.N))})()};
(a=>{a["FavpgbjX7BDDeMNvYW8DDX2ZY3s="]=a.current})($__dart_deferred_initializers__);