((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={ja:function ja(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},bXV:function bXV(){},bXU:function bXU(d){this.a=d}}
J=c[1]
A=c[0]
B=a.updateHolder(c[56],B)
B.ja.prototype={
gbE(){return this.a},
gcE(){return this.b},
gBr(){return this.e},
gVU(){return this.f}}
var z=a.updateTypes(["N<v<ja>>(am)","ja(@)"])
B.bXV.prototype={
$1(d){return this.aBt(d)},
aBt(d){var x=0,w=A.m(y.q),v,u,t,s,r,q,p,o,n,m
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:q=d.T($.dD(),y.k)
p=q.aA("room_members").bo("room_id, case_rooms!inner(id, name)")
o=q.gcb().e.a
x=3
return A.e(p.b0("user_id",(o==null?null:o.r).a).b0("status","approved"),$async$$1)
case 3:n=f
p=q.aA("case_rooms").bo("id, name")
o=q.gcb().e.a
x=4
return A.e(p.b0("owner_id",(o==null?null:o.r).a),$async$$1)
case 4:u=f
p=y.w
t=A.C(p,p)
for(p=J.aL(n),o=y.A;p.q();){s=o.a(J.A(p.gI(),"case_rooms"))
if(s!=null)t.l(0,A.U(s.h(0,"id")),A.U(s.h(0,"name")))}for(p=J.aL(u),o=y.y;p.q();){r=o.a(p.gI())
t.l(0,A.U(r.h(0,"id")),A.U(r.h(0,"name")))}if(t.a===0){v=A.c([],y.F)
x=1
break}p=q.aA("tasks").bo("id, title, status, room_id, due_date")
o=t.$ti.i("bD<1>")
o=A.K(new A.bD(t,o),o.i("z.E"))
m=J
x=5
return A.e(p.qi("room_id",o).XM("due_date","is",null).XJ("status","done").pf("due_date"),$async$$1)
case 5:p=m.bW(f,new B.bXU(t),y.B)
p=A.K(p,p.$ti.i("ak.E"))
v=p
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+0}
B.bXU.prototype={
$1(d){var x,w,v,u,t
y.y.a(d)
x=A.U(d.h(0,"id"))
w=A.U(d.h(0,"title"))
v=A.U(d.h(0,"status"))
u=A.U(d.h(0,"room_id"))
t=this.a.h(0,d.h(0,"room_id"))
if(t==null)t="Case"
return new B.ja(x,w,v,u,t,A.dV(A.U(d.h(0,"due_date"))))},
$S:z+1};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ja,A.D)
w(A.cf,[B.bXV,B.bXU])})()
var y={B:A.J("ja"),F:A.J("x<ja>"),q:A.J("v<ja>"),y:A.J("ab<f,@>"),w:A.J("f"),k:A.J("h5"),A:A.J("ab<f,@>?")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cTL","c9b",()=>A.lr(new B.bXV(),y.q))})()};
(a=>{a["yqqvki9mTFtIFexBRzNjJoJYPEs="]=a.current})($__dart_deferred_initializers__);