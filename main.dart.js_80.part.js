((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
ah0(d){var w,v,u,t,s,r=d.h(0,"attributes"),q=d.h(0,"aliases"),p=A.U(d.h(0,"id")),o=A.a8(d.h(0,"type"))
if(o==null)o=A.a8(d.h(0,"entity_type"))
if(o==null)o="person"
w=A.a8(d.h(0,"name"))
if(w==null)w=""
v=x.f.b(r)?A.aM(r,x.N,x.z):C.di
if(x.j.b(q)){u=J.bX(q,new B.aXS(),x.N)
u=A.K(u,u.$ti.i("aj.E"))}else u=C.as
t=A.dg(d.h(0,"lat"))
if(t==null)t=null
s=A.dg(d.h(0,"lng"))
return new B.en(p,o,w,v,u,t,s==null?null:s)},
cuN(d){var w,v,u=x.g,t=u.a(d.h(0,"nodes"))
if(t==null)t=[]
t=J.bX(t,new B.aOY(),x.Y)
w=A.K(t,t.$ti.i("aj.E"))
u=u.a(d.h(0,"edges"))
if(u==null)u=[]
u=J.bX(u,new B.aOZ(),x.T)
v=A.K(u,u.$ti.i("aj.E"))
return new B.hT(w,v)},
en:function en(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aXS:function aXS(){},
kg:function kg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hT:function hT(d,e){this.a=d
this.b=e},
aOY:function aOY(){},
aOZ:function aOZ(){},
aP_:function aP_(d){this.a=d},
ou:function ou(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbo:function bbo(){},
NT:function NT(d){this.a=d},
bgc:function bgc(){},
bgd:function bgd(d){this.a=d},
bge:function bge(){},
bgf:function bgf(d){this.a=d},
bgh:function bgh(){},
bgi:function bgi(){},
bgg:function bgg(){},
bZa:function bZa(){},
bZI:function bZI(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[81],B)
B.en.prototype={
gbE(){return this.a}}
B.kg.prototype={
gbE(){return this.a}}
B.hT.prototype={
nZ(d){var w=this.a
return A.ia(new A.ag(w,new B.aP_(d),A.a6(w).i("ag<1>")))}}
B.ou.prototype={
ga8w(){var w,v,u,t=A.c([],x.t),s=x.g.a(this.d.h(0,"entities"))
s=J.aK(s==null?[]:s)
w=x.f
v=x.N
u=x.z
while(s.q())t.push(A.aM(w.a(s.gI()),v,u))
return t},
gaba(){var w,v,u,t=A.c([],x.t),s=x.g.a(this.d.h(0,"relationships"))
s=J.aK(s==null?[]:s)
w=x.f
v=x.N
u=x.z
while(s.q())t.push(A.aM(w.a(s.gI()),v,u))
return t},
gaza(){var w,v,u,t,s=A.cc("\\{\\{(\\w+)\\}\\}",!0,!1),r=x.N,q=A.aP(r)
for(w=this.ga8w(),v=w.length,u=0;u<w.length;w.length===v||(0,A.F)(w),++u){t=A.a8(w[u].h(0,"name"))
t=s.pW(0,t==null?"":t)
q.J(0,A.ic(t,new B.bbo(),A.t(t).i("z.E"),r))}r=A.K(q,q.$ti.c)
C.i.lK(r)
return r},
gbE(){return this.a}}
B.NT.prototype={
Ou(d){return this.aCv(d)},
aCv(d){var w=0,v=A.m(x.h),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ou=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
n=r.a.Z9("get_entity_map",A.Q(["target_room",d],o,o))
w=7
return A.e(n,$async$Ou)
case 7:q=f
o=B.cuN(A.aM(x.f.a(q),o,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.G(l)
o=A.aC(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Ou,v)},
Ki(d,e,f,g,h,i,j){return this.biB(d,e,f,g,h,i,j)},
biA(d,e,f,g){return this.Ki(C.as,d,null,null,e,f,g)},
biB(d,e,f,g,h,a0,a1){var w=0,v=A.m(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Ki=A.i(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:t=4
n=r.a.az("entities")
m=x.N
q=A.C(m,x.K)
J.bg(q,"room_id",a1)
J.bg(q,"entity_type",e)
J.bg(q,"name",h)
l=x.z
k=a0.length===0?A.C(m,l):A.Q(["note",a0],m,l)
J.bg(q,"attributes",k)
if(d.length!==0)J.bg(q,"aliases",d)
if(f!=null&&g!=null)J.CB(q,A.Q(["lat",f,"lng",g],m,x.i))
q=n.e1(0,q).bn(y.b).i2(0)
w=7
return A.e(q,$async$Ki)
case 7:p=a3
q=B.ah0(A.aM(p,m,l))
u=q
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.G(i)
q=A.aC(o)
throw A.n(q)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Ki,v)},
ET(d,e){return this.bp9(d,e)},
bp9(b1,b2){var w=0,v=A.m(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ET=A.i(function(b3,b4){if(b3===1){s.push(b4)
w=t}for(;;)switch(w){case 0:t=4
q=C.n.aH(b2).toLowerCase()
if(J.aY(q)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=J.RX(q,A.cc("\\s+",!0,!1))
a2=A.a6(a1).i("ag<1>")
a3=A.K(new A.ag(a1,new B.bgc(),a2),a2.i("z.E"))
p=a3
if(J.aY(p)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=r.a
a2=a1.gcb().e.a
o=(a2==null?null:a2.r).a
a2=a1.az("room_members").bn("room_id").aY("user_id",o).aY("status","approved")
w=7
return A.e(a2,$async$ET)
case 7:n=b4
a2=a1.az("case_rooms").bn("id").aY("owner_id",o)
w=8
return A.e(a2,$async$ET)
case 8:m=b4
a2=x.N
l=A.aP(a2)
for(a4=x.j,a5=J.aK(a4.a(n)),a6=x.f;a5.q();){k=a5.gI()
J.ds(l,A.U(a6.a(k).h(0,"room_id")))}for(a5=J.aK(a4.a(m));a5.q();){j=a5.gI()
J.ds(l,A.U(a6.a(j).h(0,"id")))}J.CC(l,b1)
if(l.a===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=a1.az("entities").bn("name, room_id, case_rooms!inner(name)")
a5=l
a5=A.K(a5,A.t(a5).c)
a1=a1.qk("room_id",a5).qk("entity_type",A.c(["person","org"],x.U)).j7(500)
w=9
return A.e(a1,$async$ET)
case 9:i=b4
h=A.c([],x.m)
for(a1=J.aK(a4.a(i));a1.q();){g=a1.gI()
f=a6.a(g)
e=A.U(J.A(f,"name")).toLowerCase()
a7=A.a8(a6.a(J.A(f,"case_rooms")).h(0,"name"))
d=a7==null?"Unknown case":a7
if(!J.cri(p,new B.bgd(e))){a4=J.RX(e,A.cc("\\s+",!0,!1))
a8=new A.ag(a4,new B.bge(),A.a6(a4).i("ag<1>")).dH(0,new B.bgf(q))}else a8=!0
a0=a8
if(a0)J.ds(h,A.Q(["name",A.U(J.A(f,"name")),"room",d],a2,a2))}u=h
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
ZB(d,e,f,g,h,i,j,k){return this.bzl(d,e,f,g,h,i,j,k)},
bzl(d,e,f,g,h,i,a0,a1){var w=0,v=A.m(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
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
J.bg(q,"lng",a0)}l=r.a.az("entities").cX(q).aY("id",g).bn(y.b).i2(0)
w=7
return A.e(l,$async$ZB)
case 7:p=a3
n=B.ah0(A.aM(p,n,m))
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.G(j)
n=A.aC(o)
throw A.n(n)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$ZB,v)},
L4(d){return this.bne(d)},
bne(d){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$L4=A.i(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a
p=q.az("entity_relationships").oP().aax("from_entity_id.eq."+d+",to_entity_id.eq."+d)
w=6
return A.e(p,$async$L4)
case 6:q=q.az("entities").oP().aY("id",d)
w=7
return A.e(q,$async$L4)
case 7:u=1
w=5
break
case 3:u=2
n=t.pop()
r=A.G(n)
q=A.aC(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$L4,v)},
XH(d,e,f,g){return this.bu0(d,e,f,g)},
bu0(d,e,f,g){var w=0,v=A.m(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$XH=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.Z9("nearby_entities",A.Q(["p_room",g,"p_lat",d,"p_lng",e,"p_radius_km",f],x.N,x.K))
w=7
return A.e(o,$async$XH)
case 7:q=i
o=J.bX(x.j.a(q),new B.bgh(),x.Y)
o=A.K(o,o.$ti.i("aj.E"))
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
return A.l($async$XH,v)},
PC(d,e){return this.aG4(d,e)},
aG4(d,e){var w=0,v=A.m(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$PC=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
o=r.a.Z9("suggest_entities",A.Q(["p_room",e,"p_name",d],o,o))
w=7
return A.e(o,$async$PC)
case 7:q=g
o=J.bX(x.j.a(q),new B.bgi(),x.Y)
o=A.K(o,o.$ti.i("aj.E"))
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
return A.l($async$PC,v)},
Xq(){var w=0,v=A.m(x.F),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Xq=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.az("case_type_templates").bn("id, display_name, description, entity_seed").aY("is_published",!0).XM("entity_seed","is",null).o0("display_name")
w=7
return A.e(o,$async$Xq)
case 7:q=e
o=J.bX(x.j.a(q),new B.bgg(),x.C)
o=A.K(o,o.$ti.i("aj.E"))
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
return A.l($async$Xq,v)},
WT(d,e,f){return this.br8(d,e,f)},
br8(d,e,f){var w=0,v=A.m(x.S),u,t=2,s=[],r=this,q,p,o,n,m
var $async$WT=A.i(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.Z9("materialize_entity_seed",A.Q(["p_room",d,"p_template_id",e,"p_values",f],x.N,x.K))
w=7
return A.e(o,$async$WT)
case 7:q=h
o=A.dg(q)
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
o=A.aC(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$WT,v)},
Ur(d,e,f,g){return this.biK(d,e,f,g)},
biK(d,e,f,g){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o
var $async$Ur=A.i(function(h,i){if(h===1){t.push(i)
w=u}for(;;)switch(w){case 0:u=3
q=x.N
q=s.a.az("entity_relationships").e1(0,A.Q(["room_id",f,"from_entity_id",d,"to_entity_id",g,"relationship_type",e],q,q))
w=6
return A.e(q,$async$Ur)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.G(o)
q=A.aC(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$Ur,v)},
ZG(d,e,f,g){return this.bzx(d,e,f,g)},
bzx(d,e,f,g){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ZG=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
q=A.C(x.N,x.z)
J.bg(q,"relationship_type",f)
J.bg(q,"from_entity_id",d)
J.bg(q,"to_entity_id",g)
if(q.a===0){w=1
break}o=r.a.az("entity_relationships").cX(q).aY("id",e)
w=7
return A.e(o,$async$ZG)
case 7:t=2
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
return A.l($async$ZG,v)},
VD(d){return this.bnj(d)},
bnj(d){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o
var $async$VD=A.i(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a.az("entity_relationships").oP().aY("id",d)
w=6
return A.e(q,$async$VD)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.G(o)
q=A.aC(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$VD,v)},
$iJT:1}
var z=a.updateTypes(["en(@)","kg(@)","B(en)","ou(@)","NT(al)","N<hT>(al,f)"])
B.aXS.prototype={
$1(d){return J.bd(d)},
$S:47}
B.aOY.prototype={
$1(d){return B.ah0(A.aM(x.f.a(d),x.N,x.z))},
$S:z+0}
B.aOZ.prototype={
$1(d){var w,v=A.aM(x.f.a(d),x.N,x.z),u=A.U(v.h(0,"id")),t=v.h(0,"from")
t=A.U(t==null?v.h(0,"from_id"):t)
w=v.h(0,"to")
w=A.U(w==null?v.h(0,"to_id"):w)
v=A.a8(v.h(0,"type"))
return new B.kg(u,t,w,v==null?"related_to":v)},
$S:z+1}
B.aP_.prototype={
$1(d){return d.a===this.a},
$S:z+2}
B.bbo.prototype={
$1(d){var w=d.b[1]
w.toString
return w},
$S:1158}
B.bgc.prototype={
$1(d){return d.length>=3},
$S:10}
B.bgd.prototype={
$1(d){return C.n.n(this.a,d)},
$S:10}
B.bge.prototype={
$1(d){return d.length>=3},
$S:10}
B.bgf.prototype={
$1(d){return C.n.n(this.a,d)},
$S:10}
B.bgh.prototype={
$1(d){return B.ah0(A.aM(d,x.N,x.z))},
$S:z+0}
B.bgi.prototype={
$1(d){return B.ah0(A.aM(d,x.N,x.z))},
$S:z+0}
B.bgg.prototype={
$1(d){var w=x.N,v=x.z,u=A.aM(d,w,v),t=u.h(0,"entity_seed"),s=A.U(u.h(0,"id")),r=A.a8(u.h(0,"display_name"))
if(r==null)r=""
u=A.a8(u.h(0,"description"))
if(u==null)u=""
return new B.ou(s,r,u,x.f.b(t)?A.aM(t,w,v):C.di)},
$S:z+3}
B.bZa.prototype={
$1(d){return new B.NT(d.T($.dB(),x.A))},
$S:z+4}
B.bZI.prototype={
$2(d,e){d.T($.dA(),x.L)
return d.T($.qh(),x.s).Ou(e)},
$S:z+5};(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.E,[B.en,B.kg,B.hT,B.ou,B.NT])
w(A.ci,[B.aXS,B.aOY,B.aOZ,B.aP_,B.bbo,B.bgc,B.bgd,B.bge,B.bgf,B.bgh,B.bgi,B.bgg,B.bZa])
v(B.bZI,A.dn)})()
A.cD(b.typeUniverse,JSON.parse('{"NT":{"JT":[]}}'))
var y={b:"id, entity_type, name, attributes, aliases, lat, lng"}
var x=(function rtii(){var w=A.J
return{L:w("aT<fV?>"),s:w("JT"),h:w("hT"),m:w("x<ac<f,f>>"),t:w("x<ac<f,@>>"),U:w("x<f>"),G:w("w<en>"),x:w("w<ac<f,f>>"),F:w("w<ou>"),j:w("w<@>"),T:w("kg"),Y:w("en"),f:w("ac<@,@>"),K:w("E"),C:w("ou"),N:w("f"),A:w("h4"),i:w("Z"),z:w("@"),S:w("v"),g:w("w<@>?"),H:w("~")}})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cV4","qh",()=>A.eo(new B.bZa(),x.s))
w($,"cVq","oP",()=>C.bE.$2$1(new B.bZI(),x.h,x.N))})()};
(a=>{a["NkwF548psHZ/WPbr1ZCYuGR170s="]=a.current})($__dart_deferred_initializers__);