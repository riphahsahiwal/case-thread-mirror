((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
ag_(d){var w,v,u,t,s,r=d.h(0,"attributes"),q=d.h(0,"aliases"),p=A.T(d.h(0,"id")),o=A.a7(d.h(0,"type"))
if(o==null)o=A.a7(d.h(0,"entity_type"))
if(o==null)o="person"
w=A.a7(d.h(0,"name"))
if(w==null)w=""
v=x.f.b(r)?A.aP(r,x.N,x.z):C.dX
if(x.j.b(q)){u=J.bL(q,new B.aWb(),x.N)
u=A.J(u,u.$ti.i("ai.E"))}else u=C.as
t=A.dB(d.h(0,"lat"))
if(t==null)t=null
s=A.dB(d.h(0,"lng"))
return new B.eh(p,o,w,v,u,t,s==null?null:s)},
cs2(d){var w,v,u=x.g,t=u.a(d.h(0,"nodes"))
if(t==null)t=[]
t=J.bL(t,new B.aNI(),x.Y)
w=A.J(t,t.$ti.i("ai.E"))
u=u.a(d.h(0,"edges"))
if(u==null)u=[]
u=J.bL(u,new B.aNJ(),x.T)
v=A.J(u,u.$ti.i("ai.E"))
return new B.h5(w,v)},
eh:function eh(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aWb:function aWb(){},
ka:function ka(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h5:function h5(d,e){this.a=d
this.b=e},
aNI:function aNI(){},
aNJ:function aNJ(){},
aNK:function aNK(d){this.a=d},
og:function og(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b9x:function b9x(){},
N4:function N4(d){this.a=d},
bed:function bed(){},
bee:function bee(d){this.a=d},
bef:function bef(){},
beg:function beg(d){this.a=d},
bei:function bei(){},
bej:function bej(){},
beh:function beh(){},
bWU:function bWU(){},
bXo:function bXo(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[85],B)
B.eh.prototype={
gbG(){return this.a}}
B.ka.prototype={
gbG(){return this.a}}
B.h5.prototype={
nN(d){var w=this.a
return A.il(new A.ak(w,new B.aNK(d),A.a6(w).i("ak<1>")))}}
B.og.prototype={
ga8a(){var w,v,u,t=A.c([],x.t),s=x.g.a(this.d.h(0,"entities"))
s=J.aI(s==null?[]:s)
w=x.f
v=x.N
u=x.z
while(s.q())t.push(A.aP(w.a(s.gI()),v,u))
return t},
gaaM(){var w,v,u,t=A.c([],x.t),s=x.g.a(this.d.h(0,"relationships"))
s=J.aI(s==null?[]:s)
w=x.f
v=x.N
u=x.z
while(s.q())t.push(A.aP(w.a(s.gI()),v,u))
return t},
gayv(){var w,v,u,t,s=A.ck("\\{\\{(\\w+)\\}\\}",!0,!1),r=x.N,q=A.aS(r)
for(w=this.ga8a(),v=w.length,u=0;u<w.length;w.length===v||(0,A.H)(w),++u){t=A.a7(w[u].h(0,"name"))
t=s.r6(0,t==null?"":t)
q.L(0,A.i3(t,new B.b9x(),A.t(t).i("z.E"),r))}r=A.J(q,q.$ti.c)
C.i.lF(r)
return r},
gbG(){return this.a}}
B.N4.prototype={
O9(d){return this.aBM(d)},
aBM(d){var w=0,v=A.m(x.h),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$O9=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
n=r.a.YP("get_entity_map",A.Q(["target_room",d],o,o))
w=7
return A.e(n,$async$O9)
case 7:q=f
o=B.cs2(A.aP(x.f.a(q),o,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.E(l)
o=A.aA(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$O9,v)},
K1(d,e,f,g,h,i,j){return this.bho(d,e,f,g,h,i,j)},
bhn(d,e,f,g){return this.K1(C.as,d,null,null,e,f,g)},
bho(d,e,f,g,h,a0,a1){var w=0,v=A.m(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$K1=A.i(function(a2,a3){if(a2===1){s.push(a3)
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
q=n.dX(0,q).bo(y.b).i2(0)
w=7
return A.e(q,$async$K1)
case 7:p=a3
q=B.ag_(A.aP(p,m,l))
u=q
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.E(i)
q=A.aA(o)
throw A.n(q)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$K1,v)},
EC(d,e){return this.bnZ(d,e)},
bnZ(b1,b2){var w=0,v=A.m(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$EC=A.i(function(b3,b4){if(b3===1){s.push(b4)
w=t}for(;;)switch(w){case 0:t=4
q=C.o.aJ(b2).toLowerCase()
if(J.aX(q)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=J.R6(q,A.ck("\\s+",!0,!1))
a2=A.a6(a1).i("ak<1>")
a3=A.J(new A.ak(a1,new B.bed(),a2),a2.i("z.E"))
p=a3
if(J.aX(p)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=r.a
a2=a1.gca().e.a
o=(a2==null?null:a2.r).a
a2=a1.aA("room_members").bo("room_id").b0("user_id",o).b0("status","approved")
w=7
return A.e(a2,$async$EC)
case 7:n=b4
a2=a1.aA("case_rooms").bo("id").b0("owner_id",o)
w=8
return A.e(a2,$async$EC)
case 8:m=b4
a2=x.N
l=A.aS(a2)
for(a4=x.j,a5=J.aI(a4.a(n)),a6=x.f;a5.q();){k=a5.gI()
J.du(l,A.T(a6.a(k).h(0,"room_id")))}for(a5=J.aI(a4.a(m));a5.q();){j=a5.gI()
J.du(l,A.T(a6.a(j).h(0,"id")))}J.C6(l,b1)
if(l.a===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=a1.aA("entities").bo("name, room_id, case_rooms!inner(name)")
a5=l
a5=A.J(a5,A.t(a5).c)
a1=a1.qa("room_id",a5).qa("entity_type",A.c(["person","org"],x.U)).jr(500)
w=9
return A.e(a1,$async$EC)
case 9:i=b4
h=A.c([],x.m)
for(a1=J.aI(a4.a(i));a1.q();){g=a1.gI()
f=a6.a(g)
e=A.T(J.A(f,"name")).toLowerCase()
a7=A.a7(a6.a(J.A(f,"case_rooms")).h(0,"name"))
d=a7==null?"Unknown case":a7
if(!J.coA(p,new B.bee(e))){a4=J.R6(e,A.ck("\\s+",!0,!1))
a8=new A.ak(a4,new B.bef(),A.a6(a4).i("ak<1>")).dP(0,new B.beg(q))}else a8=!0
a0=a8
if(a0)J.du(h,A.Q(["name",A.T(J.A(f,"name")),"room",d],a2,a2))}u=h
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
return A.l($async$EC,v)},
Zg(d,e,f,g,h,i,j,k){return this.byb(d,e,f,g,h,i,j,k)},
byb(d,e,f,g,h,i,a0,a1){var w=0,v=A.m(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$Zg=A.i(function(a2,a3){if(a2===1){s.push(a3)
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
J.bf(q,"lng",a0)}l=r.a.aA("entities").cV(q).b0("id",g).bo(y.b).i2(0)
w=7
return A.e(l,$async$Zg)
case 7:p=a3
n=B.ag_(A.aP(p,n,m))
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.E(j)
n=A.aA(o)
throw A.n(n)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Zg,v)},
KN(d){return this.bm2(d)},
bm2(d){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$KN=A.i(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a
p=q.aA("entity_relationships").oF().aa9("from_entity_id.eq."+d+",to_entity_id.eq."+d)
w=6
return A.e(p,$async$KN)
case 6:q=q.aA("entities").oF().b0("id",d)
w=7
return A.e(q,$async$KN)
case 7:u=1
w=5
break
case 3:u=2
n=t.pop()
r=A.E(n)
q=A.aA(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$KN,v)},
Xm(d,e,f,g){return this.bsQ(d,e,f,g)},
bsQ(d,e,f,g){var w=0,v=A.m(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Xm=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.YP("nearby_entities",A.Q(["p_room",g,"p_lat",d,"p_lng",e,"p_radius_km",f],x.N,x.K))
w=7
return A.e(o,$async$Xm)
case 7:q=i
o=J.bL(x.j.a(q),new B.bei(),x.Y)
o=A.J(o,o.$ti.i("ai.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.E(m)
o=A.aA(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Xm,v)},
Ph(d,e){return this.aFq(d,e)},
aFq(d,e){var w=0,v=A.m(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Ph=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
o=r.a.YP("suggest_entities",A.Q(["p_room",e,"p_name",d],o,o))
w=7
return A.e(o,$async$Ph)
case 7:q=g
o=J.bL(x.j.a(q),new B.bej(),x.Y)
o=A.J(o,o.$ti.i("ai.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.E(m)
o=A.aA(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Ph,v)},
X5(){var w=0,v=A.m(x.F),u,t=2,s=[],r=this,q,p,o,n,m
var $async$X5=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.aA("case_type_templates").bo("id, display_name, description, entity_seed").b0("is_published",!0).Xr("entity_seed","is",null).p6("display_name")
w=7
return A.e(o,$async$X5)
case 7:q=e
o=J.bL(x.j.a(q),new B.beh(),x.C)
o=A.J(o,o.$ti.i("ai.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.E(m)
o=A.aA(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$X5,v)},
Wy(d,e,f){return this.bpY(d,e,f)},
bpY(d,e,f){var w=0,v=A.m(x.S),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Wy=A.i(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.YP("materialize_entity_seed",A.Q(["p_room",d,"p_template_id",e,"p_values",f],x.N,x.K))
w=7
return A.e(o,$async$Wy)
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
o=A.aA(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Wy,v)},
U4(d,e,f,g){return this.bhx(d,e,f,g)},
bhx(d,e,f,g){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o
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
q=A.aA(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$U4,v)},
Zl(d,e,f,g){return this.byn(d,e,f,g)},
byn(d,e,f,g){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zl=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
q=A.D(x.N,x.z)
J.bf(q,"relationship_type",f)
J.bf(q,"from_entity_id",d)
J.bf(q,"to_entity_id",g)
if(q.a===0){w=1
break}o=r.a.aA("entity_relationships").cV(q).b0("id",e)
w=7
return A.e(o,$async$Zl)
case 7:t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.E(m)
o=A.aA(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Zl,v)},
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
q=A.aA(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$Vg,v)},
$iJ6:1}
var z=a.updateTypes(["eh(@)","ka(@)","B(eh)","og(@)","N4(al)","M<h5>(al,h)"])
B.aWb.prototype={
$1(d){return J.bg(d)},
$S:33}
B.aNI.prototype={
$1(d){return B.ag_(A.aP(x.f.a(d),x.N,x.z))},
$S:z+0}
B.aNJ.prototype={
$1(d){var w,v=A.aP(x.f.a(d),x.N,x.z),u=A.T(v.h(0,"id")),t=v.h(0,"from")
t=A.T(t==null?v.h(0,"from_id"):t)
w=v.h(0,"to")
w=A.T(w==null?v.h(0,"to_id"):w)
v=A.a7(v.h(0,"type"))
return new B.ka(u,t,w,v==null?"related_to":v)},
$S:z+1}
B.aNK.prototype={
$1(d){return d.a===this.a},
$S:z+2}
B.b9x.prototype={
$1(d){var w=d.b[1]
w.toString
return w},
$S:1143}
B.bed.prototype={
$1(d){return d.length>=3},
$S:12}
B.bee.prototype={
$1(d){return C.o.n(this.a,d)},
$S:12}
B.bef.prototype={
$1(d){return d.length>=3},
$S:12}
B.beg.prototype={
$1(d){return C.o.n(this.a,d)},
$S:12}
B.bei.prototype={
$1(d){return B.ag_(A.aP(d,x.N,x.z))},
$S:z+0}
B.bej.prototype={
$1(d){return B.ag_(A.aP(d,x.N,x.z))},
$S:z+0}
B.beh.prototype={
$1(d){var w=x.N,v=x.z,u=A.aP(d,w,v),t=u.h(0,"entity_seed"),s=A.T(u.h(0,"id")),r=A.a7(u.h(0,"display_name"))
if(r==null)r=""
u=A.a7(u.h(0,"description"))
if(u==null)u=""
return new B.og(s,r,u,x.f.b(t)?A.aP(t,w,v):C.dX)},
$S:z+3}
B.bWU.prototype={
$1(d){return new B.N4(d.T($.dx(),x.A))},
$S:z+4}
B.bXo.prototype={
$2(d,e){d.T($.dt(),x.L)
return d.T($.q1(),x.s).O9(e)},
$S:z+5};(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.C,[B.eh,B.ka,B.h5,B.og,B.N4])
w(A.ca,[B.aWb,B.aNI,B.aNJ,B.aNK,B.b9x,B.bed,B.bee,B.bef,B.beg,B.bei,B.bej,B.beh,B.bWU])
v(B.bXo,A.dk)})()
A.cD(b.typeUniverse,JSON.parse('{"N4":{"J6":[]}}'))
var y={b:"id, entity_type, name, attributes, aliases, lat, lng"}
var x=(function rtii(){var w=A.I
return{L:w("aR<fM?>"),s:w("J6"),h:w("h5"),m:w("x<aa<h,h>>"),t:w("x<aa<h,@>>"),U:w("x<h>"),G:w("v<eh>"),x:w("v<aa<h,h>>"),F:w("v<og>"),j:w("v<@>"),T:w("ka"),Y:w("eh"),f:w("aa<@,@>"),K:w("C"),C:w("og"),N:w("h"),A:w("fY"),i:w("Z"),z:w("@"),S:w("w"),g:w("v<@>?"),H:w("~")}})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cS0","q1",()=>A.ej(new B.bWU(),x.s))
w($,"cSl","nv",()=>C.bH.$2$1(new B.bXo(),x.h,x.N))})()};
(a=>{a["ozYylPralu5u8VpbiFnTlVSGZ38="]=a.current})($__dart_deferred_initializers__);