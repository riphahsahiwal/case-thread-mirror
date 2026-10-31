((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={j9:function j9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},bYY:function bYY(){},bYX:function bYX(d){this.a=d}}
J=c[1]
A=c[0]
B=a.updateHolder(c[56],B)
B.j9.prototype={
gbE(){return this.a},
gcw(){return this.b},
gBr(){return this.e},
gVU(){return this.f}}
var z=a.updateTypes(["N<w<j9>>(al)","j9(@)"])
B.bYY.prototype={
$1(d){return this.aBB(d)},
aBB(d){var x=0,w=A.m(y.q),v,u,t,s,r,q,p,o,n,m
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:q=d.T($.dB(),y.k)
p=q.az("room_members").bn("room_id, case_rooms!inner(id, name)")
o=q.gcb().e.a
x=3
return A.e(p.aY("user_id",(o==null?null:o.r).a).aY("status","approved"),$async$$1)
case 3:n=f
p=q.az("case_rooms").bn("id, name")
o=q.gcb().e.a
x=4
return A.e(p.aY("owner_id",(o==null?null:o.r).a),$async$$1)
case 4:u=f
p=y.w
t=A.C(p,p)
for(p=J.aK(n),o=y.A;p.q();){s=o.a(J.A(p.gI(),"case_rooms"))
if(s!=null)t.l(0,A.U(s.h(0,"id")),A.U(s.h(0,"name")))}for(p=J.aK(u),o=y.y;p.q();){r=o.a(p.gI())
t.l(0,A.U(r.h(0,"id")),A.U(r.h(0,"name")))}if(t.a===0){v=A.c([],y.F)
x=1
break}p=q.az("tasks").bn("id, title, status, room_id, due_date")
o=t.$ti.i("bE<1>")
o=A.K(new A.bE(t,o),o.i("z.E"))
m=J
x=5
return A.e(p.qk("room_id",o).XM("due_date","is",null).XJ("status","done").o0("due_date"),$async$$1)
case 5:p=m.bX(f,new B.bYX(t),y.B)
p=A.K(p,p.$ti.i("aj.E"))
v=p
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:z+0}
B.bYX.prototype={
$1(d){var x,w,v,u,t
y.y.a(d)
x=A.U(d.h(0,"id"))
w=A.U(d.h(0,"title"))
v=A.U(d.h(0,"status"))
u=A.U(d.h(0,"room_id"))
t=this.a.h(0,d.h(0,"room_id"))
if(t==null)t="Case"
return new B.j9(x,w,v,u,t,A.dX(A.U(d.h(0,"due_date"))))},
$S:z+1};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.j9,A.E)
w(A.ci,[B.bYY,B.bYX])})()
var y={B:A.J("j9"),F:A.J("x<j9>"),q:A.J("w<j9>"),y:A.J("ac<f,@>"),w:A.J("f"),k:A.J("h4"),A:A.J("ac<f,@>?")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cV_","cak",()=>A.ls(new B.bYY(),y.q))})()};
(a=>{a["MHd7yi5Sm2ao7Y386YJ/cIK9G7o="]=a.current})($__dart_deferred_initializers__);