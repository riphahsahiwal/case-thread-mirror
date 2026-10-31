((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={j1:function j1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},bWp:function bWp(){},bWo:function bWo(d){this.a=d}}
J=c[1]
A=c[0]
B=a.updateHolder(c[54],B)
B.j1.prototype={
gbG(){return this.a},
gcP(){return this.b},
guO(){return this.e},
gVy(){return this.f}}
var z=a.updateTypes(["M<v<j1>>(al)","j1(@)"])
B.bWp.prototype={
$1(d){return this.aAR(d)},
aAR(d){var x=0,w=A.m(y.q),v,u,t,s,r,q,p,o,n,m
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:q=d.T($.dx(),y.k)
p=q.aA("room_members").bo("room_id, case_rooms!inner(id, name)")
o=q.gca().e.a
x=3
return A.e(p.b0("user_id",(o==null?null:o.r).a).b0("status","approved"),$async$$1)
case 3:n=f
p=q.aA("case_rooms").bo("id, name")
o=q.gca().e.a
x=4
return A.e(p.b0("owner_id",(o==null?null:o.r).a),$async$$1)
case 4:u=f
p=y.w
t=A.D(p,p)
for(p=J.aI(n),o=y.A;p.q();){s=o.a(J.A(p.gI(),"case_rooms"))
if(s!=null)t.m(0,A.T(s.h(0,"id")),A.T(s.h(0,"name")))}for(p=J.aI(u),o=y.y;p.q();){r=o.a(p.gI())
t.m(0,A.T(r.h(0,"id")),A.T(r.h(0,"name")))}if(t.a===0){v=A.c([],y.F)
x=1
break}p=q.aA("tasks").bo("id, title, status, room_id, due_date")
o=t.$ti.i("bD<1>")
o=A.J(new A.bD(t,o),o.i("z.E"))
m=J
x=5
return A.e(p.qa("room_id",o).Xq("due_date","is",null).Xn("status","done").p6("due_date"),$async$$1)
case 5:p=m.bL(f,new B.bWo(t),y.B)
p=A.J(p,p.$ti.i("ai.E"))
v=p
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+0}
B.bWo.prototype={
$1(d){var x,w,v,u,t
y.y.a(d)
x=A.T(d.h(0,"id"))
w=A.T(d.h(0,"title"))
v=A.T(d.h(0,"status"))
u=A.T(d.h(0,"room_id"))
t=this.a.h(0,d.h(0,"room_id"))
if(t==null)t="Case"
return new B.j1(x,w,v,u,t,A.dE(A.T(d.h(0,"due_date"))))},
$S:z+1};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.j1,A.C)
w(A.ca,[B.bWp,B.bWo])})()
var y={B:A.I("j1"),F:A.I("x<j1>"),q:A.I("v<j1>"),y:A.I("aa<h,@>"),w:A.I("h"),k:A.I("fY"),A:A.I("aa<h,@>?")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cRD","c7r",()=>A.lk(new B.bWp(),y.q))})()};
(a=>{a["pRa15/F599vY+EjKLi/EUGq+6pg="]=a.current})($__dart_deferred_initializers__);