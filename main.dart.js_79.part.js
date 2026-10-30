((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
afZ(d){var w,v,u,t,s,r=d.h(0,"attributes"),q=d.h(0,"aliases"),p=A.T(d.h(0,"id")),o=A.a7(d.h(0,"type"))
if(o==null)o=A.a7(d.h(0,"entity_type"))
if(o==null)o="person"
w=A.a7(d.h(0,"name"))
if(w==null)w=""
v=x.f.b(r)?A.aP(r,x.N,x.z):C.dY
if(x.j.b(q)){u=J.bM(q,new B.aWf(),x.N)
u=A.J(u,u.$ti.i("aj.E"))}else u=C.as
t=A.dB(d.h(0,"lat"))
if(t==null)t=null
s=A.dB(d.h(0,"lng"))
return new B.ei(p,o,w,v,u,t,s==null?null:s)},
crV(d){var w,v,u=x.g,t=u.a(d.h(0,"nodes"))
if(t==null)t=[]
t=J.bM(t,new B.aNL(),x.Y)
w=A.J(t,t.$ti.i("aj.E"))
u=u.a(d.h(0,"edges"))
if(u==null)u=[]
u=J.bM(u,new B.aNM(),x.T)
v=A.J(u,u.$ti.i("aj.E"))
return new B.h5(w,v)},
ei:function ei(d,e,f,g,h,i,j){var _=this
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
h5:function h5(d,e){this.a=d
this.b=e},
aNL:function aNL(){},
aNM:function aNM(){},
aNN:function aNN(d){this.a=d},
og:function og(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b9D:function b9D(){},
N3:function N3(d){this.a=d},
bej:function bej(){},
bek:function bek(d){this.a=d},
bel:function bel(){},
bem:function bem(d){this.a=d},
beo:function beo(){},
bep:function bep(){},
ben:function ben(){},
bWJ:function bWJ(){},
bXe:function bXe(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[85],B)
B.ei.prototype={
gbG(){return this.a}}
B.k9.prototype={
gbG(){return this.a}}
B.h5.prototype={
nN(d){var w=this.a
return A.im(new A.al(w,new B.aNN(d),A.a6(w).i("al<1>")))}}
B.og.prototype={
ga8a(){var w,v,u,t=A.c([],x.t),s=x.g.a(this.d.h(0,"entities"))
s=J.aJ(s==null?[]:s)
w=x.f
v=x.N
u=x.z
while(s.q())t.push(A.aP(w.a(s.gI()),v,u))
return t},
gaaM(){var w,v,u,t=A.c([],x.t),s=x.g.a(this.d.h(0,"relationships"))
s=J.aJ(s==null?[]:s)
w=x.f
v=x.N
u=x.z
while(s.q())t.push(A.aP(w.a(s.gI()),v,u))
return t},
gayu(){var w,v,u,t,s=A.ck("\\{\\{(\\w+)\\}\\}",!0,!1),r=x.N,q=A.aS(r)
for(w=this.ga8a(),v=w.length,u=0;u<w.length;w.length===v||(0,A.H)(w),++u){t=A.a7(w[u].h(0,"name"))
t=s.r6(0,t==null?"":t)
q.L(0,A.i3(t,new B.b9D(),A.t(t).i("z.E"),r))}r=A.J(q,q.$ti.c)
C.i.lF(r)
return r},
gbG(){return this.a}}
B.N3.prototype={
O8(d){return this.aBM(d)},
aBM(d){var w=0,v=A.m(x.h),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$O8=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
n=r.a.YQ("get_entity_map",A.Q(["target_room",d],o,o))
w=7
return A.e(n,$async$O8)
case 7:q=f
o=B.crV(A.aP(x.f.a(q),o,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.E(l)
o=A.aB(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$O8,v)},
K0(d,e,f,g,h,i,j){return this.bhp(d,e,f,g,h,i,j)},
bho(d,e,f,g){return this.K0(C.as,d,null,null,e,f,g)},
bhp(d,e,f,g,h,a0,a1){var w=0,v=A.m(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$K0=A.i(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:t=4
n=r.a.aA("entities")
m=x.N
q=A.D(m,x.K)
J.bf(q,"room_id",a1)
J.bf(q,"entity_type",e)
J.bf(q,"name",h)
l=x.z
k=a0.length===0?A.D(m,l):A.Q(["note",a0],m,l)
J.bf(q,"attributes",k)
if(d.length!==0)J.bf(q,"aliases",d)
if(f!=null&&g!=null)J.C5(q,A.Q(["lat",f,"lng",g],m,x.i))
q=n.dX(0,q).bn(y.b).i2(0)
w=7
return A.e(q,$async$K0)
case 7:p=a3
q=B.afZ(A.aP(p,m,l))
u=q
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.E(i)
q=A.aB(o)
throw A.n(q)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$K0,v)},
EB(d,e){return this.bo0(d,e)},
bo0(b1,b2){var w=0,v=A.m(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$EB=A.i(function(b3,b4){if(b3===1){s.push(b4)
w=t}for(;;)switch(w){case 0:t=4
q=C.o.aJ(b2).toLowerCase()
if(J.aX(q)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=J.R4(q,A.ck("\\s+",!0,!1))
a2=A.a6(a1).i("al<1>")
a3=A.J(new A.al(a1,new B.bej(),a2),a2.i("z.E"))
p=a3
if(J.aX(p)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=r.a
a2=a1.gca().e.a
o=(a2==null?null:a2.r).a
a2=a1.aA("room_members").bn("room_id").b0("user_id",o).b0("status","approved")
w=7
return A.e(a2,$async$EB)
case 7:n=b4
a2=a1.aA("case_rooms").bn("id").b0("owner_id",o)
w=8
return A.e(a2,$async$EB)
case 8:m=b4
a2=x.N
l=A.aS(a2)
for(a4=x.j,a5=J.aJ(a4.a(n)),a6=x.f;a5.q();){k=a5.gI()
J.dv(l,A.T(a6.a(k).h(0,"room_id")))}for(a5=J.aJ(a4.a(m));a5.q();){j=a5.gI()
J.dv(l,A.T(a6.a(j).h(0,"id")))}J.C6(l,b1)
if(l.a===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=a1.aA("entities").bn("name, room_id, case_rooms!inner(name)")
a5=l
a5=A.J(a5,A.t(a5).c)
a1=a1.qa("room_id",a5).qa("entity_type",A.c(["person","org"],x.U)).jr(500)
w=9
return A.e(a1,$async$EB)
case 9:i=b4
h=A.c([],x.m)
for(a1=J.aJ(a4.a(i));a1.q();){g=a1.gI()
f=a6.a(g)
e=A.T(J.A(f,"name")).toLowerCase()
a7=A.a7(a6.a(J.A(f,"case_rooms")).h(0,"name"))
d=a7==null?"Unknown case":a7
if(!J.cos(p,new B.bek(e))){a4=J.R4(e,A.ck("\\s+",!0,!1))
a8=new A.al(a4,new B.bel(),A.a6(a4).i("al<1>")).dP(0,new B.bem(q))}else a8=!0
a0=a8
if(a0)J.dv(h,A.Q(["name",A.T(J.A(f,"name")),"room",d],a2,a2))}u=h
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
return A.l($async$EB,v)},
Zh(d,e,f,g,h,i,j,k){return this.byc(d,e,f,g,h,i,j,k)},
byc(d,e,f,g,h,i,a0,a1){var w=0,v=A.m(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$Zh=A.i(function(a2,a3){if(a2===1){s.push(a3)
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
J.bf(q,"lng",a0)}l=r.a.aA("entities").cV(q).b0("id",g).bn(y.b).i2(0)
w=7
return A.e(l,$async$Zh)
case 7:p=a3
n=B.afZ(A.aP(p,n,m))
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.E(j)
n=A.aB(o)
throw A.n(n)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Zh,v)},
KM(d){return this.bm2(d)},
bm2(d){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$KM=A.i(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a
p=q.aA("entity_relationships").oF().aa9("from_entity_id.eq."+d+",to_entity_id.eq."+d)
w=6
return A.e(p,$async$KM)
case 6:q=q.aA("entities").oF().b0("id",d)
w=7
return A.e(q,$async$KM)
case 7:u=1
w=5
break
case 3:u=2
n=t.pop()
r=A.E(n)
q=A.aB(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$KM,v)},
Xo(d,e,f,g){return this.bsS(d,e,f,g)},
bsS(d,e,f,g){var w=0,v=A.m(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Xo=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.YQ("nearby_entities",A.Q(["p_room",g,"p_lat",d,"p_lng",e,"p_radius_km",f],x.N,x.K))
w=7
return A.e(o,$async$Xo)
case 7:q=i
o=J.bM(x.j.a(q),new B.beo(),x.Y)
o=A.J(o,o.$ti.i("aj.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.E(m)
o=A.aB(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Xo,v)},
Pg(d,e){return this.aFq(d,e)},
aFq(d,e){var w=0,v=A.m(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Pg=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
o=r.a.YQ("suggest_entities",A.Q(["p_room",e,"p_name",d],o,o))
w=7
return A.e(o,$async$Pg)
case 7:q=g
o=J.bM(x.j.a(q),new B.bep(),x.Y)
o=A.J(o,o.$ti.i("aj.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.E(m)
o=A.aB(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Pg,v)},
X7(){var w=0,v=A.m(x.F),u,t=2,s=[],r=this,q,p,o,n,m
var $async$X7=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.aA("case_type_templates").bn("id, display_name, description, entity_seed").b0("is_published",!0).Xt("entity_seed","is",null).p6("display_name")
w=7
return A.e(o,$async$X7)
case 7:q=e
o=J.bM(x.j.a(q),new B.ben(),x.C)
o=A.J(o,o.$ti.i("aj.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.E(m)
o=A.aB(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$X7,v)},
WA(d,e,f){return this.bq_(d,e,f)},
bq_(d,e,f){var w=0,v=A.m(x.S),u,t=2,s=[],r=this,q,p,o,n,m
var $async$WA=A.i(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.YQ("materialize_entity_seed",A.Q(["p_room",d,"p_template_id",e,"p_values",f],x.N,x.K))
w=7
return A.e(o,$async$WA)
case 7:q=h
o=A.dB(q)
o=o==null?null:C.m.F(o)
if(o==null)o=0
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.E(m)
o=A.aB(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$WA,v)},
U4(d,e,f,g){return this.bhy(d,e,f,g)},
bhy(d,e,f,g){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o
var $async$U4=A.i(function(h,i){if(h===1){t.push(i)
w=u}for(;;)switch(w){case 0:u=3
q=x.N
q=s.a.aA("entity_relationships").dX(0,A.Q(["room_id",f,"from_entity_id",d,"to_entity_id",g,"relationship_type",e],q,q))
w=6
return A.e(q,$async$U4)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.E(o)
q=A.aB(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$U4,v)},
Zm(d,e,f,g){return this.byo(d,e,f,g)},
byo(d,e,f,g){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zm=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
q=A.D(x.N,x.z)
J.bf(q,"relationship_type",f)
J.bf(q,"from_entity_id",d)
J.bf(q,"to_entity_id",g)
if(q.a===0){w=1
break}o=r.a.aA("entity_relationships").cV(q).b0("id",e)
w=7
return A.e(o,$async$Zm)
case 7:t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.E(m)
o=A.aB(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Zm,v)},
Vg(d){return this.bm7(d)},
bm7(d){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o
var $async$Vg=A.i(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a.aA("entity_relationships").oF().b0("id",d)
w=6
return A.e(q,$async$Vg)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.E(o)
q=A.aB(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$Vg,v)},
$iJ5:1}
var z=a.updateTypes(["ei(@)","k9(@)","B(ei)","og(@)","N3(ah)","M<h5>(ah,h)"])
B.aWf.prototype={
$1(d){return J.bg(d)},
$S:33}
B.aNL.prototype={
$1(d){return B.afZ(A.aP(x.f.a(d),x.N,x.z))},
$S:z+0}
B.aNM.prototype={
$1(d){var w,v=A.aP(x.f.a(d),x.N,x.z),u=A.T(v.h(0,"id")),t=v.h(0,"from")
t=A.T(t==null?v.h(0,"from_id"):t)
w=v.h(0,"to")
w=A.T(w==null?v.h(0,"to_id"):w)
v=A.a7(v.h(0,"type"))
return new B.k9(u,t,w,v==null?"related_to":v)},
$S:z+1}
B.aNN.prototype={
$1(d){return d.a===this.a},
$S:z+2}
B.b9D.prototype={
$1(d){var w=d.b[1]
w.toString
return w},
$S:1143}
B.bej.prototype={
$1(d){return d.length>=3},
$S:12}
B.bek.prototype={
$1(d){return C.o.n(this.a,d)},
$S:12}
B.bel.prototype={
$1(d){return d.length>=3},
$S:12}
B.bem.prototype={
$1(d){return C.o.n(this.a,d)},
$S:12}
B.beo.prototype={
$1(d){return B.afZ(A.aP(d,x.N,x.z))},
$S:z+0}
B.bep.prototype={
$1(d){return B.afZ(A.aP(d,x.N,x.z))},
$S:z+0}
B.ben.prototype={
$1(d){var w=x.N,v=x.z,u=A.aP(d,w,v),t=u.h(0,"entity_seed"),s=A.T(u.h(0,"id")),r=A.a7(u.h(0,"display_name"))
if(r==null)r=""
u=A.a7(u.h(0,"description"))
if(u==null)u=""
return new B.og(s,r,u,x.f.b(t)?A.aP(t,w,v):C.dY)},
$S:z+3}
B.bWJ.prototype={
$1(d){return new B.N3(d.S($.du(),x.A))},
$S:z+4}
B.bXe.prototype={
$2(d,e){d.S($.dq(),x.L)
return d.S($.q1(),x.s).O8(e)},
$S:z+5};(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.C,[B.ei,B.k9,B.h5,B.og,B.N3])
w(A.ca,[B.aWf,B.aNL,B.aNM,B.aNN,B.b9D,B.bej,B.bek,B.bel,B.bem,B.beo,B.bep,B.ben,B.bWJ])
v(B.bXe,A.dj)})()
A.cD(b.typeUniverse,JSON.parse('{"N3":{"J5":[]}}'))
var y={b:"id, entity_type, name, attributes, aliases, lat, lng"}
var x=(function rtii(){var w=A.I
return{L:w("aR<fM?>"),s:w("J5"),h:w("h5"),m:w("x<ac<h,h>>"),t:w("x<ac<h,@>>"),U:w("x<h>"),G:w("v<ei>"),x:w("v<ac<h,h>>"),F:w("v<og>"),j:w("v<@>"),T:w("k9"),Y:w("ei"),f:w("ac<@,@>"),K:w("C"),C:w("og"),N:w("h"),A:w("fY"),i:w("Z"),z:w("@"),S:w("w"),g:w("v<@>?"),H:w("~")}})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cRT","q1",()=>A.eg(new B.bWJ(),x.s))
w($,"cSe","nv",()=>C.bD.$2$1(new B.bXe(),x.h,x.N))})()};
(a=>{a["7xOtsvRj2XxCZxuW1deSSWQRJ9M="]=a.current})($__dart_deferred_initializers__);