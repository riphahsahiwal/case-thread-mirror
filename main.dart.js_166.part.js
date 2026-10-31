((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cqA(d){var x,w,v,u,t,s,r,q,p,o="reviewed_at",n=d.h(0,"output"),m=y.P.b(n)?n:C.dh,l=m.h(0,"sources"),k=A.U(d.h(0,"id"))
A.U(d.h(0,"room_id"))
x=A.U(d.h(0,"agent_type"))
w=A.U(d.h(0,"status"))
v=A.a8(m.h(0,"title"))
u=A.a8(m.h(0,"detail"))
t=A.a8(m.h(0,"provider"))
s=A.dp(m.h(0,"confidence"))
if(s==null)s=null
if(y.j.b(l)){r=A.c([],y.s)
for(q=J.aL(l);q.q();){p=q.gI()
if(p!=null)r.push(J.bd(p))}}else r=C.as
q=A.dV(A.U(d.h(0,"created_at")))
if(d.h(0,o)!=null)A.lm(A.U(d.h(0,o)))
return new B.lV(k,x,w,v,u,t,q,s,r)},
lV:function lV(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
k2:function k2(d,e){this.a=d
this.b=e},
Nz:function Nz(d){this.a=d},
beN:function beN(){},
beP:function beP(){},
beO:function beO(){},
bXr:function bXr(){},
cc2(d,e,f,g){var x=null
return new A.DP(C.a8X,!0,g,x,x,x,x,C.F,x,!1,x,!0,x,new A.a2Y(f,d,x,x,x),e)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[72],B)
B.lV.prototype={
gbE(){return this.a},
gcE(){return this.e}}
B.k2.prototype={
gbE(){return this.a}}
B.Nz.prototype={
Mp(d){return this.bsz(d)},
bsz(d){var x=0,w=A.m(y.k),v,u=this,t,s
var $async$Mp=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:s=J
x=3
return A.e(u.a.aA("ai_agents").bo("id, display_name, description, case_type").b0("is_active",!0).aav("case_type.is.null,case_type.eq."+d).pf("display_name"),$async$Mp)
case 3:t=s.bW(f,new B.beN(),y.Y)
t=A.K(t,t.$ti.i("ak.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Mp,w)},
bzQ(d){var x=this.a.aA("ai_suggestions").a_T(A.c(["id"],y.s)).b0("room_id",d).pf("created_at")
return new A.d5(new B.beP(),x,A.t(x).i("d5<aU.T,v<lV>>"))},
Nu(d,e,f){return this.bye(d,e,f)},
byd(d,e){return this.Nu(d,null,e)},
bye(d,e,f){var x=0,w=A.m(y.T),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Nu=A.i(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
l=s.a.ax
l===$&&A.b()
k=y.N
r=A.C(k,k)
J.bg(r,"agent_id",d)
J.bg(r,"room_id",f)
q="evidence_item_id"
p=e
if(p!=null)J.bg(r,q,p)
x=7
return A.e(l.jo("ai-agent",r),$async$Nu)
case 7:o=h
n=A.aM(y.f.a(C.aI.hP(C.aI.jm(o.a,null),null)),k,y.z)
if(J.o(J.A(n,"status"),"no_findings")){v=null
x=1
break}if(J.o(J.A(n,"status"),"suggestion_created")){r=A.U(J.A(n,"suggestion_id"))
v=r
x=1
break}if(J.o(J.A(n,"code"),"forbidden")){r=A.dr(J.A(n,"message"))
throw A.n(r)}r=A.dr("The agent run failed. Try again.")
throw A.n(r)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.G(i)
r=A.aB(m)
throw A.n(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Nu,w)},
Z5(d,e,f){return this.by2(d,e,f)},
by2(d,e,f){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p
var $async$Z5=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
r=y.z
x=6
return A.e(t.a.d4("review_suggestion",A.Q(["suggestion",f,"decision",d,"edited_output",e],y.N,r),r),$async$Z5)
case 6:v=1
x=5
break
case 3:v=2
p=u.pop()
s=A.G(p)
r=A.aB(s)
throw A.n(r)
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$Z5,w)},
$iaCF:1}
var z=a.updateTypes(["k2(@)","v<lV>(v<ab<f,@>>)","lV(ab<f,@>)","Nz(am)"])
B.beN.prototype={
$1(d){var x=A.aM(d,y.N,y.z),w=A.U(x.h(0,"id")),v=A.U(x.h(0,"display_name"))
A.a8(x.h(0,"description"))
A.a8(x.h(0,"case_type"))
return new B.k2(w,v)},
$S:z+0}
B.beP.prototype={
$1(d){var x,w=J.bW(d,new B.beO(),y.m)
w=A.K(w,w.$ti.i("ak.E"))
x=A.a6(w).i("cA<1>")
w=A.K(new A.cA(w,x),x.i("ak.E"))
return w},
$S:z+1}
B.beO.prototype={
$1(d){return B.cqA(A.aM(d,y.N,y.z))},
$S:z+2}
B.bXr.prototype={
$1(d){return new B.Nz(d.T($.dD(),y.A))},
$S:z+3};(function inheritance(){var x=a.inheritMany
x(A.D,[B.lV,B.k2,B.Nz])
x(A.cf,[B.beN,B.beP,B.beO,B.bXr])})()
A.cC(b.typeUniverse,JSON.parse('{"Nz":{"aCF":[]}}'))
var y=(function rtii(){var x=A.J
return{Y:x("k2"),m:x("lV"),s:x("x<f>"),k:x("v<k2>"),j:x("v<@>"),P:x("ab<f,@>"),f:x("ab<@,@>"),N:x("f"),A:x("h5"),z:x("@"),T:x("f?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cTp","a9H",()=>A.eo(new B.bXr(),A.J("aCF")))})()};
(a=>{a["TVBwJJwB7AZgW5wUmOF40W88wyU="]=a.current})($__dart_deferred_initializers__);