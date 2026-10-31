((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
afX(d){var w,v,u,t,s,r=d.h(0,"attributes"),q=d.h(0,"aliases"),p=A.T(d.h(0,"id")),o=A.a7(d.h(0,"type"))
if(o==null)o=A.a7(d.h(0,"entity_type"))
if(o==null)o="person"
w=A.a7(d.h(0,"name"))
if(w==null)w=""
v=x.f.b(r)?A.aP(r,x.N,x.z):C.dX
if(x.j.b(q)){u=J.bL(q,new B.aW8(),x.N)
u=A.J(u,u.$ti.i("ai.E"))}else u=C.as
t=A.dB(d.h(0,"lat"))
if(t==null)t=null
s=A.dB(d.h(0,"lng"))
return new B.eh(p,o,w,v,u,t,s==null?null:s)},
crK(d){var w,v,u=x.g,t=u.a(d.h(0,"nodes"))
if(t==null)t=[]
t=J.bL(t,new B.aNE(),x.Y)
w=A.J(t,t.$ti.i("ai.E"))
u=u.a(d.h(0,"edges"))
if(u==null)u=[]
u=J.bL(u,new B.aNF(),x.T)
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
aW8:function aW8(){},
k9:function k9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h5:function h5(d,e){this.a=d
this.b=e},
aNE:function aNE(){},
aNF:function aNF(){},
aNG:function aNG(d){this.a=d},
of:function of(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b9w:function b9w(){},
N2:function N2(d){this.a=d},
bec:function bec(){},
bed:function bed(d){this.a=d},
bee:function bee(){},
bef:function bef(d){this.a=d},
beh:function beh(){},
bei:function bei(){},
beg:function beg(){},
bWC:function bWC(){},
bX6:function bX6(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[85],B)
B.eh.prototype={
gbG(){return this.a}}
B.k9.prototype={
gbG(){return this.a}}
B.h5.prototype={
nN(d){var w=this.a
return A.im(new A.ak(w,new B.aNG(d),A.a6(w).i("ak<1>")))}}
B.of.prototype={
ga88(){var w,v,u,t=A.c([],x.t),s=x.g.a(this.d.h(0,"entities"))
s=J.aI(s==null?[]:s)
w=x.f
v=x.N
u=x.z
while(s.q())t.push(A.aP(w.a(s.gI()),v,u))
return t},
gaaK(){var w,v,u,t=A.c([],x.t),s=x.g.a(this.d.h(0,"relationships"))
s=J.aI(s==null?[]:s)
w=x.f
v=x.N
u=x.z
while(s.q())t.push(A.aP(w.a(s.gI()),v,u))
return t},
gayt(){var w,v,u,t,s=A.ck("\\{\\{(\\w+)\\}\\}",!0,!1),r=x.N,q=A.aS(r)
for(w=this.ga88(),v=w.length,u=0;u<w.length;w.length===v||(0,A.H)(w),++u){t=A.a7(w[u].h(0,"name"))
t=s.r6(0,t==null?"":t)
q.L(0,A.i3(t,new B.b9w(),A.t(t).i("z.E"),r))}r=A.J(q,q.$ti.c)
C.i.lF(r)
return r},
gbG(){return this.a}}
B.N2.prototype={
O8(d){return this.aBK(d)},
aBK(d){var w=0,v=A.m(x.h),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$O8=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
n=r.a.YN("get_entity_map",A.Q(["target_room",d],o,o))
w=7
return A.e(n,$async$O8)
case 7:q=f
o=B.crK(A.aP(x.f.a(q),o,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.E(l)
o=A.aC(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$O8,v)},
K0(d,e,f,g,h,i,j){return this.bhm(d,e,f,g,h,i,j)},
bhl(d,e,f,g){return this.K0(C.as,d,null,null,e,f,g)},
bhm(d,e,f,g,h,a0,a1){var w=0,v=A.m(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
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
q=n.dX(0,q).bo(y.b).i2(0)
w=7
return A.e(q,$async$K0)
case 7:p=a3
q=B.afX(A.aP(p,m,l))
u=q
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.E(i)
q=A.aC(o)
throw A.n(q)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$K0,v)},
EC(d,e){return this.bnW(d,e)},
bnW(b1,b2){var w=0,v=A.m(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$EC=A.i(function(b3,b4){if(b3===1){s.push(b4)
w=t}for(;;)switch(w){case 0:t=4
q=C.o.aJ(b2).toLowerCase()
if(J.aX(q)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=J.R3(q,A.ck("\\s+",!0,!1))
a2=A.a6(a1).i("ak<1>")
a3=A.J(new A.ak(a1,new B.bec(),a2),a2.i("z.E"))
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
if(!J.coh(p,new B.bed(e))){a4=J.R3(e,A.ck("\\s+",!0,!1))
a8=new A.ak(a4,new B.bee(),A.a6(a4).i("ak<1>")).dP(0,new B.bef(q))}else a8=!0
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
Ze(d,e,f,g,h,i,j,k){return this.by7(d,e,f,g,h,i,j,k)},
by7(d,e,f,g,h,i,a0,a1){var w=0,v=A.m(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$Ze=A.i(function(a2,a3){if(a2===1){s.push(a3)
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
return A.e(l,$async$Ze)
case 7:p=a3
n=B.afX(A.aP(p,n,m))
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.E(j)
n=A.aC(o)
throw A.n(n)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Ze,v)},
KM(d){return this.bm_(d)},
bm_(d){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$KM=A.i(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a
p=q.aA("entity_relationships").oG().aa7("from_entity_id.eq."+d+",to_entity_id.eq."+d)
w=6
return A.e(p,$async$KM)
case 6:q=q.aA("entities").oG().b0("id",d)
w=7
return A.e(q,$async$KM)
case 7:u=1
w=5
break
case 3:u=2
n=t.pop()
r=A.E(n)
q=A.aC(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$KM,v)},
Xl(d,e,f,g){return this.bsN(d,e,f,g)},
bsN(d,e,f,g){var w=0,v=A.m(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Xl=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.YN("nearby_entities",A.Q(["p_room",g,"p_lat",d,"p_lng",e,"p_radius_km",f],x.N,x.K))
w=7
return A.e(o,$async$Xl)
case 7:q=i
o=J.bL(x.j.a(q),new B.beh(),x.Y)
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
o=A.aC(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Xl,v)},
Pg(d,e){return this.aFo(d,e)},
aFo(d,e){var w=0,v=A.m(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Pg=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
o=r.a.YN("suggest_entities",A.Q(["p_room",e,"p_name",d],o,o))
w=7
return A.e(o,$async$Pg)
case 7:q=g
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
o=A.aC(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Pg,v)},
X4(){var w=0,v=A.m(x.F),u,t=2,s=[],r=this,q,p,o,n,m
var $async$X4=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.aA("case_type_templates").bo("id, display_name, description, entity_seed").b0("is_published",!0).Xq("entity_seed","is",null).p7("display_name")
w=7
return A.e(o,$async$X4)
case 7:q=e
o=J.bL(x.j.a(q),new B.beg(),x.C)
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
o=A.aC(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$X4,v)},
Wx(d,e,f){return this.bpV(d,e,f)},
bpV(d,e,f){var w=0,v=A.m(x.S),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Wx=A.i(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.YN("materialize_entity_seed",A.Q(["p_room",d,"p_template_id",e,"p_values",f],x.N,x.K))
w=7
return A.e(o,$async$Wx)
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
o=A.aC(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Wx,v)},
U3(d,e,f,g){return this.bhv(d,e,f,g)},
bhv(d,e,f,g){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o
var $async$U3=A.i(function(h,i){if(h===1){t.push(i)
w=u}for(;;)switch(w){case 0:u=3
q=x.N
q=s.a.aA("entity_relationships").dX(0,A.Q(["room_id",f,"from_entity_id",d,"to_entity_id",g,"relationship_type",e],q,q))
w=6
return A.e(q,$async$U3)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.E(o)
q=A.aC(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$U3,v)},
Zj(d,e,f,g){return this.byj(d,e,f,g)},
byj(d,e,f,g){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zj=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
q=A.D(x.N,x.z)
J.bf(q,"relationship_type",f)
J.bf(q,"from_entity_id",d)
J.bf(q,"to_entity_id",g)
if(q.a===0){w=1
break}o=r.a.aA("entity_relationships").cV(q).b0("id",e)
w=7
return A.e(o,$async$Zj)
case 7:t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.E(m)
o=A.aC(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Zj,v)},
Vf(d){return this.bm4(d)},
bm4(d){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o
var $async$Vf=A.i(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a.aA("entity_relationships").oG().b0("id",d)
w=6
return A.e(q,$async$Vf)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.E(o)
q=A.aC(r)
throw A.n(q)
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$Vf,v)},
$iJ5:1}
var z=a.updateTypes(["eh(@)","k9(@)","B(eh)","of(@)","N2(al)","M<h5>(al,h)"])
B.aW8.prototype={
$1(d){return J.bg(d)},
$S:33}
B.aNE.prototype={
$1(d){return B.afX(A.aP(x.f.a(d),x.N,x.z))},
$S:z+0}
B.aNF.prototype={
$1(d){var w,v=A.aP(x.f.a(d),x.N,x.z),u=A.T(v.h(0,"id")),t=v.h(0,"from")
t=A.T(t==null?v.h(0,"from_id"):t)
w=v.h(0,"to")
w=A.T(w==null?v.h(0,"to_id"):w)
v=A.a7(v.h(0,"type"))
return new B.k9(u,t,w,v==null?"related_to":v)},
$S:z+1}
B.aNG.prototype={
$1(d){return d.a===this.a},
$S:z+2}
B.b9w.prototype={
$1(d){var w=d.b[1]
w.toString
return w},
$S:1140}
B.bec.prototype={
$1(d){return d.length>=3},
$S:11}
B.bed.prototype={
$1(d){return C.o.n(this.a,d)},
$S:11}
B.bee.prototype={
$1(d){return d.length>=3},
$S:11}
B.bef.prototype={
$1(d){return C.o.n(this.a,d)},
$S:11}
B.beh.prototype={
$1(d){return B.afX(A.aP(d,x.N,x.z))},
$S:z+0}
B.bei.prototype={
$1(d){return B.afX(A.aP(d,x.N,x.z))},
$S:z+0}
B.beg.prototype={
$1(d){var w=x.N,v=x.z,u=A.aP(d,w,v),t=u.h(0,"entity_seed"),s=A.T(u.h(0,"id")),r=A.a7(u.h(0,"display_name"))
if(r==null)r=""
u=A.a7(u.h(0,"description"))
if(u==null)u=""
return new B.of(s,r,u,x.f.b(t)?A.aP(t,w,v):C.dX)},
$S:z+3}
B.bWC.prototype={
$1(d){return new B.N2(d.T($.dx(),x.A))},
$S:z+4}
B.bX6.prototype={
$2(d,e){d.T($.dt(),x.L)
return d.T($.q1(),x.s).O8(e)},
$S:z+5};(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.C,[B.eh,B.k9,B.h5,B.of,B.N2])
w(A.ca,[B.aW8,B.aNE,B.aNF,B.aNG,B.b9w,B.bec,B.bed,B.bee,B.bef,B.beh,B.bei,B.beg,B.bWC])
v(B.bX6,A.dj)})()
A.cD(b.typeUniverse,JSON.parse('{"N2":{"J5":[]}}'))
var y={b:"id, entity_type, name, attributes, aliases, lat, lng"}
var x=(function rtii(){var w=A.I
return{L:w("aR<fM?>"),s:w("J5"),h:w("h5"),m:w("x<aa<h,h>>"),t:w("x<aa<h,@>>"),U:w("x<h>"),G:w("v<eh>"),x:w("v<aa<h,h>>"),F:w("v<of>"),j:w("v<@>"),T:w("k9"),Y:w("eh"),f:w("aa<@,@>"),K:w("C"),C:w("of"),N:w("h"),A:w("fY"),i:w("Z"),z:w("@"),S:w("w"),g:w("v<@>?"),H:w("~")}})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cRI","q1",()=>A.ej(new B.bWC(),x.s))
w($,"cS2","nv",()=>C.bH.$2$1(new B.bX6(),x.h,x.N))})()};
(a=>{a["AIjsVKpTU4wNdmYISQa7gdSTBtU="]=a.current})($__dart_deferred_initializers__);