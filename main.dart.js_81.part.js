((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
ahg(d){var w,v,u,t,s,r=d.h(0,"attributes"),q=d.h(0,"aliases"),p=A.U(d.h(0,"id")),o=A.a9(d.h(0,"type"))
if(o==null)o=A.a9(d.h(0,"entity_type"))
if(o==null)o="person"
w=A.a9(d.h(0,"name"))
if(w==null)w=""
v=x.f.b(r)?A.aM(r,x.N,x.z):C.dh
if(x.j.b(q)){u=J.bX(q,new B.aYh(),x.N)
u=A.K(u,u.$ti.i("ai.E"))}else u=C.as
t=A.dh(d.h(0,"lat"))
if(t==null)t=null
s=A.dh(d.h(0,"lng"))
return new B.eq(p,o,w,v,u,t,s==null?null:s)},
cvF(d){var w,v,u=x.g,t=u.a(d.h(0,"nodes"))
if(t==null)t=[]
t=J.bX(t,new B.aPl(),x.Y)
w=A.K(t,t.$ti.i("ai.E"))
u=u.a(d.h(0,"edges"))
if(u==null)u=[]
u=J.bX(u,new B.aPm(),x.T)
v=A.K(u,u.$ti.i("ai.E"))
return new B.hU(w,v)},
eq:function eq(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aYh:function aYh(){},
ki:function ki(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hU:function hU(d,e){this.a=d
this.b=e},
aPl:function aPl(){},
aPm:function aPm(){},
aPn:function aPn(d){this.a=d},
oy:function oy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbS:function bbS(){},
O0:function O0(d){this.a=d},
bgI:function bgI(){},
bgJ:function bgJ(d){this.a=d},
bgK:function bgK(){},
bgL:function bgL(d){this.a=d},
bgN:function bgN(){},
bgO:function bgO(){},
bgM:function bgM(){},
bZS:function bZS(){},
c_p:function c_p(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[81],B)
B.eq.prototype={
gbE(){return this.a}}
B.ki.prototype={
gbE(){return this.a}}
B.hU.prototype={
o0(d){var w=this.a
return A.ic(new A.ag(w,new B.aPn(d),A.a6(w).i("ag<1>")))}}
B.oy.prototype={
ga8z(){var w,v,u,t=A.c([],x.t),s=x.g.a(this.d.h(0,"entities"))
s=J.aJ(s==null?[]:s)
w=x.f
v=x.N
u=x.z
while(s.q())t.push(A.aM(w.a(s.gI()),v,u))
return t},
gabg(){var w,v,u,t=A.c([],x.t),s=x.g.a(this.d.h(0,"relationships"))
s=J.aJ(s==null?[]:s)
w=x.f
v=x.N
u=x.z
while(s.q())t.push(A.aM(w.a(s.gI()),v,u))
return t},
gazl(){var w,v,u,t,s=A.cd("\\{\\{(\\w+)\\}\\}",!0,!1),r=x.N,q=A.aQ(r)
for(w=this.ga8z(),v=w.length,u=0;u<w.length;w.length===v||(0,A.F)(w),++u){t=A.a9(w[u].h(0,"name"))
t=s.pX(0,t==null?"":t)
q.J(0,A.ie(t,new B.bbS(),A.t(t).i("z.E"),r))}r=A.K(q,q.$ti.c)
C.h.lK(r)
return r},
gbE(){return this.a}}
B.O0.prototype={
Ow(d){return this.aCM(d)},
aCM(d){var w=0,v=A.m(x.h),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ow=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
n=r.a.Zc("get_entity_map",A.Q(["target_room",d],o,o))
w=7
return A.e(n,$async$Ow)
case 7:q=f
o=B.cvF(A.aM(x.f.a(q),o,x.z))
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
return A.l($async$Ow,v)},
Ko(d,e,f,g,h,i,j){return this.bj0(d,e,f,g,h,i,j)},
bj_(d,e,f,g){return this.Ko(C.as,d,null,null,e,f,g)},
bj0(d,e,f,g,h,a0,a1){var w=0,v=A.m(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Ko=A.i(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:t=4
n=r.a.az("entities")
m=x.N
q=A.D(m,x.K)
J.bg(q,"room_id",a1)
J.bg(q,"entity_type",e)
J.bg(q,"name",h)
l=x.z
k=a0.length===0?A.D(m,l):A.Q(["note",a0],m,l)
J.bg(q,"attributes",k)
if(d.length!==0)J.bg(q,"aliases",d)
if(f!=null&&g!=null)J.CH(q,A.Q(["lat",f,"lng",g],m,x.i))
q=n.e3(0,q).bn(y.b).i3(0)
w=7
return A.e(q,$async$Ko)
case 7:p=a3
q=B.ahg(A.aM(p,m,l))
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
return A.l($async$Ko,v)},
EX(d,e){return this.bpB(d,e)},
bpB(b1,b2){var w=0,v=A.m(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$EX=A.i(function(b3,b4){if(b3===1){s.push(b4)
w=t}for(;;)switch(w){case 0:t=4
q=C.n.aI(b2).toLowerCase()
if(J.aY(q)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=J.S6(q,A.cd("\\s+",!0,!1))
a2=A.a6(a1).i("ag<1>")
a3=A.K(new A.ag(a1,new B.bgI(),a2),a2.i("z.E"))
p=a3
if(J.aY(p)===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=r.a
a2=a1.gcb().e.a
o=(a2==null?null:a2.r).a
a2=a1.az("room_members").bn("room_id").aY("user_id",o).aY("status","approved")
w=7
return A.e(a2,$async$EX)
case 7:n=b4
a2=a1.az("case_rooms").bn("id").aY("owner_id",o)
w=8
return A.e(a2,$async$EX)
case 8:m=b4
a2=x.N
l=A.aQ(a2)
for(a4=x.j,a5=J.aJ(a4.a(n)),a6=x.f;a5.q();){k=a5.gI()
J.ds(l,A.U(a6.a(k).h(0,"room_id")))}for(a5=J.aJ(a4.a(m));a5.q();){j=a5.gI()
J.ds(l,A.U(a6.a(j).h(0,"id")))}J.CI(l,b1)
if(l.a===0){a1=A.c([],x.m)
u=a1
w=1
break}a1=a1.az("entities").bn("name, room_id, case_rooms!inner(name)")
a5=l
a5=A.K(a5,A.t(a5).c)
a1=a1.ql("room_id",a5).ql("entity_type",A.c(["person","org"],x.U)).j7(500)
w=9
return A.e(a1,$async$EX)
case 9:i=b4
h=A.c([],x.m)
for(a1=J.aJ(a4.a(i));a1.q();){g=a1.gI()
f=a6.a(g)
e=A.U(J.A(f,"name")).toLowerCase()
a7=A.a9(a6.a(J.A(f,"case_rooms")).h(0,"name"))
d=a7==null?"Unknown case":a7
if(!J.cs9(p,new B.bgJ(e))){a4=J.S6(e,A.cd("\\s+",!0,!1))
a8=new A.ag(a4,new B.bgK(),A.a6(a4).i("ag<1>")).dI(0,new B.bgL(q))}else a8=!0
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
return A.l($async$EX,v)},
ZE(d,e,f,g,h,i,j,k){return this.bzR(d,e,f,g,h,i,j,k)},
bzR(d,e,f,g,h,i,a0,a1){var w=0,v=A.m(x.Y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ZE=A.i(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:t=4
n=x.N
m=x.z
q=A.D(n,m)
J.bg(q,"name",a1)
J.bg(q,"entity_type",h)
J.bg(q,"attributes",e)
J.bg(q,"aliases",d)
if(f){J.bg(q,"lat",null)
J.bg(q,"lng",null)}else if(i!=null&&a0!=null){J.bg(q,"lat",i)
J.bg(q,"lng",a0)}l=r.a.az("entities").cX(q).aY("id",g).bn(y.b).i3(0)
w=7
return A.e(l,$async$ZE)
case 7:p=a3
n=B.ahg(A.aM(p,n,m))
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
return A.l($async$ZE,v)},
La(d){return this.bnE(d)},
bnE(d){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$La=A.i(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a
p=q.az("entity_relationships").oR().aaD("from_entity_id.eq."+d+",to_entity_id.eq."+d)
w=6
return A.e(p,$async$La)
case 6:q=q.az("entities").oR().aY("id",d)
w=7
return A.e(q,$async$La)
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
return A.l($async$La,v)},
XK(d,e,f,g){return this.but(d,e,f,g)},
but(d,e,f,g){var w=0,v=A.m(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$XK=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.Zc("nearby_entities",A.Q(["p_room",g,"p_lat",d,"p_lng",e,"p_radius_km",f],x.N,x.K))
w=7
return A.e(o,$async$XK)
case 7:q=i
o=J.bX(x.j.a(q),new B.bgN(),x.Y)
o=A.K(o,o.$ti.i("ai.E"))
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
return A.l($async$XK,v)},
PF(d,e){return this.aGm(d,e)},
aGm(d,e){var w=0,v=A.m(x.G),u,t=2,s=[],r=this,q,p,o,n,m
var $async$PF=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
o=r.a.Zc("suggest_entities",A.Q(["p_room",e,"p_name",d],o,o))
w=7
return A.e(o,$async$PF)
case 7:q=g
o=J.bX(x.j.a(q),new B.bgO(),x.Y)
o=A.K(o,o.$ti.i("ai.E"))
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
return A.l($async$PF,v)},
Xt(){var w=0,v=A.m(x.F),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Xt=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.az("case_type_templates").bn("id, display_name, description, entity_seed").aY("is_published",!0).XP("entity_seed","is",null).o2("display_name")
w=7
return A.e(o,$async$Xt)
case 7:q=e
o=J.bX(x.j.a(q),new B.bgM(),x.C)
o=A.K(o,o.$ti.i("ai.E"))
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
return A.l($async$Xt,v)},
WW(d,e,f){return this.brA(d,e,f)},
brA(d,e,f){var w=0,v=A.m(x.S),u,t=2,s=[],r=this,q,p,o,n,m
var $async$WW=A.i(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
o=r.a.Zc("materialize_entity_seed",A.Q(["p_room",d,"p_template_id",e,"p_values",f],x.N,x.K))
w=7
return A.e(o,$async$WW)
case 7:q=h
o=A.dh(q)
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
return A.l($async$WW,v)},
Uu(d,e,f,g){return this.bj9(d,e,f,g)},
bj9(d,e,f,g){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o
var $async$Uu=A.i(function(h,i){if(h===1){t.push(i)
w=u}for(;;)switch(w){case 0:u=3
q=x.N
q=s.a.az("entity_relationships").e3(0,A.Q(["room_id",f,"from_entity_id",d,"to_entity_id",g,"relationship_type",e],q,q))
w=6
return A.e(q,$async$Uu)
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
return A.l($async$Uu,v)},
ZJ(d,e,f,g){return this.bA2(d,e,f,g)},
bA2(d,e,f,g){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ZJ=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
q=A.D(x.N,x.z)
J.bg(q,"relationship_type",f)
J.bg(q,"from_entity_id",d)
J.bg(q,"to_entity_id",g)
if(q.a===0){w=1
break}o=r.a.az("entity_relationships").cX(q).aY("id",e)
w=7
return A.e(o,$async$ZJ)
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
return A.l($async$ZJ,v)},
VG(d){return this.bnJ(d)},
bnJ(d){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o
var $async$VG=A.i(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
q=s.a.az("entity_relationships").oR().aY("id",d)
w=6
return A.e(q,$async$VG)
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
return A.l($async$VG,v)},
$iJZ:1}
var z=a.updateTypes(["eq(@)","ki(@)","B(eq)","oy(@)","O0(al)","N<hU>(al,f)"])
B.aYh.prototype={
$1(d){return J.be(d)},
$S:47}
B.aPl.prototype={
$1(d){return B.ahg(A.aM(x.f.a(d),x.N,x.z))},
$S:z+0}
B.aPm.prototype={
$1(d){var w,v=A.aM(x.f.a(d),x.N,x.z),u=A.U(v.h(0,"id")),t=v.h(0,"from")
t=A.U(t==null?v.h(0,"from_id"):t)
w=v.h(0,"to")
w=A.U(w==null?v.h(0,"to_id"):w)
v=A.a9(v.h(0,"type"))
return new B.ki(u,t,w,v==null?"related_to":v)},
$S:z+1}
B.aPn.prototype={
$1(d){return d.a===this.a},
$S:z+2}
B.bbS.prototype={
$1(d){var w=d.b[1]
w.toString
return w},
$S:1160}
B.bgI.prototype={
$1(d){return d.length>=3},
$S:11}
B.bgJ.prototype={
$1(d){return C.n.n(this.a,d)},
$S:11}
B.bgK.prototype={
$1(d){return d.length>=3},
$S:11}
B.bgL.prototype={
$1(d){return C.n.n(this.a,d)},
$S:11}
B.bgN.prototype={
$1(d){return B.ahg(A.aM(d,x.N,x.z))},
$S:z+0}
B.bgO.prototype={
$1(d){return B.ahg(A.aM(d,x.N,x.z))},
$S:z+0}
B.bgM.prototype={
$1(d){var w=x.N,v=x.z,u=A.aM(d,w,v),t=u.h(0,"entity_seed"),s=A.U(u.h(0,"id")),r=A.a9(u.h(0,"display_name"))
if(r==null)r=""
u=A.a9(u.h(0,"description"))
if(u==null)u=""
return new B.oy(s,r,u,x.f.b(t)?A.aM(t,w,v):C.dh)},
$S:z+3}
B.bZS.prototype={
$1(d){return new B.O0(d.S($.dB(),x.A))},
$S:z+4}
B.c_p.prototype={
$2(d,e){d.S($.dA(),x.L)
return d.S($.ql(),x.s).Ow(e)},
$S:z+5};(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.E,[B.eq,B.ki,B.hU,B.oy,B.O0])
w(A.cg,[B.aYh,B.aPl,B.aPm,B.aPn,B.bbS,B.bgI,B.bgJ,B.bgK,B.bgL,B.bgN,B.bgO,B.bgM,B.bZS])
v(B.c_p,A.dj)})()
A.cC(b.typeUniverse,JSON.parse('{"O0":{"JZ":[]}}'))
var y={b:"id, entity_type, name, attributes, aliases, lat, lng"}
var x=(function rtii(){var w=A.J
return{L:w("aS<fW?>"),s:w("JZ"),h:w("hU"),m:w("x<ad<f,f>>"),t:w("x<ad<f,@>>"),U:w("x<f>"),G:w("v<eq>"),x:w("v<ad<f,f>>"),F:w("v<oy>"),j:w("v<@>"),T:w("ki"),Y:w("eq"),f:w("ad<@,@>"),K:w("E"),C:w("oy"),N:w("f"),A:w("h6"),i:w("X"),z:w("@"),S:w("w"),g:w("v<@>?"),H:w("~")}})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cWa","ql",()=>A.er(new B.bZS(),x.s))
w($,"cWw","oT",()=>C.bF.$2$1(new B.c_p(),x.h,x.N))})()};
(a=>{a["xxQzH4CZ04OTRfAEky2+svEkvZo="]=a.current})($__dart_deferred_initializers__);