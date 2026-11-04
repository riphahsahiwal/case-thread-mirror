((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cqp(d){var x,w,v,u,t,s,r,q,p,o="reviewed_at",n=d.h(0,"output"),m=y.P.b(n)?n:C.dv,l=m.h(0,"sources"),k=A.Z(d.h(0,"id"))
A.Z(d.h(0,"room_id"))
x=A.Z(d.h(0,"agent_type"))
w=A.Z(d.h(0,"status"))
v=A.a8(m.h(0,"title"))
u=A.a8(m.h(0,"detail"))
t=A.a8(m.h(0,"provider"))
s=A.df(m.h(0,"confidence"))
if(s==null)s=null
if(y.j.b(l)){r=A.c([],y.s)
for(q=J.aQ(l);q.q();){p=q.gI()
if(p!=null)r.push(J.bk(p))}}else r=C.at
q=A.eq(A.Z(d.h(0,"created_at")))
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
Nt:function Nt(d){this.a=d},
beF:function beF(){},
beH:function beH(){},
beG:function beG(){},
bXN:function bXN(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[65],B)
B.lT.prototype={
gbQ(){return this.a}}
B.k_.prototype={
gbQ(){return this.a}}
B.Nt.prototype={
Mj(d){return this.brW(d)},
brW(d){var x=0,w=A.m(y.k),v,u=this,t,s
var $async$Mj=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:s=J
x=3
return A.d(u.a.aL("ai_agents").by("id, display_name, description, case_type").b7("is_active",!0).ayp("case_type.is.null,case_type.eq."+d).ph("display_name"),$async$Mj)
case 3:t=s.c2(f,new B.beF(),y.Y)
t=A.J(t,t.$ti.i("ai.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Mj,w)},
bzr(d){var x=this.a.aL("ai_suggestions").a_I(A.c(["id"],y.s)).b7("room_id",d).ph("created_at")
return new A.d_(new B.beH(),x,A.t(x).i("d_<aS.T,w<lT>>"))},
Nj(d,e,f){return this.bxK(d,e,f)},
bxJ(d,e){return this.Nj(d,null,e)},
bxK(d,e,f){var x=0,w=A.m(y.T),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Nj=A.i(function(g,h){if(g===1){t.push(h)
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
return A.d(l.ji("ai-agent",r),$async$Nj)
case 7:o=h
n=A.aP(y.f.a(C.aC.hp(C.aC.iZ(o.a,null),null)),k,y.z)
if(J.o(J.A(n,"status"),"no_findings")){v=null
x=1
break}if(J.o(J.A(n,"status"),"suggestion_created")){r=A.Z(J.A(n,"suggestion_id"))
v=r
x=1
break}if(J.o(J.A(n,"code"),"forbidden")){r=A.dI(J.A(n,"message"))
throw A.n(r)}r=A.dI("The agent run failed. Try again.")
throw A.n(r)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.F(i)
r=A.ax(m)
throw A.n(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Nj,w)},
YV(d,e,f){return this.bxy(d,e,f)},
bxy(d,e,f){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p
var $async$YV=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
r=y.z
x=6
return A.d(t.a.cV("review_suggestion",A.Q(["suggestion",f,"decision",d,"edited_output",e],y.N,r),r),$async$YV)
case 6:v=1
x=5
break
case 3:v=2
p=u.pop()
s=A.F(p)
r=A.ax(s)
throw A.n(r)
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$YV,w)},
$iaCB:1}
var z=a.updateTypes(["k_(@)","w<lT>(w<ae<f,@>>)","lT(ae<f,@>)","Nt(ao)"])
B.beF.prototype={
$1(d){var x=A.aP(d,y.N,y.z),w=A.Z(x.h(0,"id")),v=A.Z(x.h(0,"display_name"))
A.a8(x.h(0,"description"))
A.a8(x.h(0,"case_type"))
return new B.k_(w,v)},
$S:z+0}
B.beH.prototype={
$1(d){var x,w=J.c2(d,new B.beG(),y.m)
w=A.J(w,w.$ti.i("ai.E"))
x=A.a6(w).i("cx<1>")
w=A.J(new A.cx(w,x),x.i("ai.E"))
return w},
$S:z+1}
B.beG.prototype={
$1(d){return B.cqp(A.aP(d,y.N,y.z))},
$S:z+2}
B.bXN.prototype={
$1(d){return new B.Nt(d.T($.dV(),y.A))},
$S:z+3};(function inheritance(){var x=a.inheritMany
x(A.D,[B.lT,B.k_,B.Nt])
x(A.cA,[B.beF,B.beH,B.beG,B.bXN])})()
A.cW(b.typeUniverse,JSON.parse('{"Nt":{"aCB":[]}}'))
var y=(function rtii(){var x=A.O
return{Y:x("k_"),m:x("lT"),s:x("x<f>"),k:x("w<k_>"),j:x("w<@>"),P:x("ae<f,@>"),f:x("ae<@,@>"),N:x("f"),A:x("iS"),z:x("@"),T:x("f?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cTr","a9w",()=>A.eN(new B.bXN(),A.O("aCB")))})()};
(a=>{a["onTc6kMUtCnQY1ZsNKQIRiw+p/Q="]=a.current})($__dart_deferred_initializers__);