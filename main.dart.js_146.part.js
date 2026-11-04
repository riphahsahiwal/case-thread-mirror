((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cqE(d){var x,w,v,u,t,s,r,q,p,o="reviewed_at",n=d.h(0,"output"),m=y.P.b(n)?n:C.dx,l=m.h(0,"sources"),k=A.Z(d.h(0,"id"))
A.Z(d.h(0,"room_id"))
x=A.Z(d.h(0,"agent_type"))
w=A.Z(d.h(0,"status"))
v=A.a7(m.h(0,"title"))
u=A.a7(m.h(0,"detail"))
t=A.a7(m.h(0,"provider"))
s=A.dh(m.h(0,"confidence"))
if(s==null)s=null
if(y.j.b(l)){r=A.c([],y.s)
for(q=J.aO(l);q.q();){p=q.gI()
if(p!=null)r.push(J.bk(p))}}else r=C.at
q=A.er(A.Z(d.h(0,"created_at")))
if(d.h(0,o)!=null)A.j6(A.Z(d.h(0,o)))
return new B.lT(k,x,w,v,u,t,q,s,r)},
lT:function lT(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
k_:function k_(d,e){this.a=d
this.b=e},
Nv:function Nv(d){this.a=d},
beL:function beL(){},
beN:function beN(){},
beM:function beM(){},
bY4:function bY4(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[65],B)
B.lT.prototype={
gbQ(){return this.a}}
B.k_.prototype={
gbQ(){return this.a}}
B.Nv.prototype={
Mk(d){return this.bs1(d)},
bs1(d){var x=0,w=A.m(y.k),v,u=this,t,s
var $async$Mk=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:s=J
x=3
return A.d(u.a.aL("ai_agents").by("id, display_name, description, case_type").b7("is_active",!0).ayt("case_type.is.null,case_type.eq."+d).qo("display_name"),$async$Mk)
case 3:t=s.c2(f,new B.beL(),y.Y)
t=A.J(t,t.$ti.i("aj.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Mk,w)},
bzy(d){var x=this.a.aL("ai_suggestions").a_L(A.c(["id"],y.s)).b7("room_id",d).qo("created_at")
return new A.d0(new B.beN(),x,A.t(x).i("d0<aS.T,w<lT>>"))},
Nk(d,e,f){return this.bxR(d,e,f)},
bxQ(d,e){return this.Nk(d,null,e)},
bxR(d,e,f){var x=0,w=A.m(y.T),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Nk=A.i(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
l=s.a.ax
l===$&&A.b()
k=y.N
r=A.C(k,k)
J.bd(r,"agent_id",d)
J.bd(r,"room_id",f)
q="evidence_item_id"
p=e
if(p!=null)J.bd(r,q,p)
x=7
return A.d(l.jh("ai-agent",r),$async$Nk)
case 7:o=h
n=A.aQ(y.f.a(C.aD.hp(C.aD.iY(o.a,null),null)),k,y.z)
if(J.o(J.A(n,"status"),"no_findings")){v=null
x=1
break}if(J.o(J.A(n,"status"),"suggestion_created")){r=A.Z(J.A(n,"suggestion_id"))
v=r
x=1
break}if(J.o(J.A(n,"code"),"forbidden")){r=A.dE(J.A(n,"message"))
throw A.n(r)}r=A.dE("The agent run failed. Try again.")
throw A.n(r)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.F(i)
r=A.aw(m)
throw A.n(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Nk,w)},
YX(d,e,f){return this.bxE(d,e,f)},
bxE(d,e,f){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p
var $async$YX=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
r=y.z
x=6
return A.d(t.a.cQ("review_suggestion",A.Q(["suggestion",f,"decision",d,"edited_output",e],y.N,r),r),$async$YX)
case 6:v=1
x=5
break
case 3:v=2
p=u.pop()
s=A.F(p)
r=A.aw(s)
throw A.n(r)
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$YX,w)},
$iaCF:1}
var z=a.updateTypes(["k_(@)","w<lT>(w<ae<f,@>>)","lT(ae<f,@>)","Nv(ao)"])
B.beL.prototype={
$1(d){var x=A.aQ(d,y.N,y.z),w=A.Z(x.h(0,"id")),v=A.Z(x.h(0,"display_name"))
A.a7(x.h(0,"description"))
A.a7(x.h(0,"case_type"))
return new B.k_(w,v)},
$S:z+0}
B.beN.prototype={
$1(d){var x,w=J.c2(d,new B.beM(),y.m)
w=A.J(w,w.$ti.i("aj.E"))
x=A.a6(w).i("cx<1>")
w=A.J(new A.cx(w,x),x.i("aj.E"))
return w},
$S:z+1}
B.beM.prototype={
$1(d){return B.cqE(A.aQ(d,y.N,y.z))},
$S:z+2}
B.bY4.prototype={
$1(d){return new B.Nv(d.T($.dW(),y.A))},
$S:z+3};(function inheritance(){var x=a.inheritMany
x(A.D,[B.lT,B.k_,B.Nv])
x(A.cA,[B.beL,B.beN,B.beM,B.bY4])})()
A.cX(b.typeUniverse,JSON.parse('{"Nv":{"aCF":[]}}'))
var y=(function rtii(){var x=A.O
return{Y:x("k_"),m:x("lT"),s:x("x<f>"),k:x("w<k_>"),j:x("w<@>"),P:x("ae<f,@>"),f:x("ae<@,@>"),N:x("f"),A:x("iR"),z:x("@"),T:x("f?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cTH","a9y",()=>A.eN(new B.bY4(),A.O("aCF")))})()};
(a=>{a["PREqj3fDe7ZqrXJ1VgOCdxYvSpI="]=a.current})($__dart_deferred_initializers__);