((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cqn(d){var x,w,v,u,t,s,r,q,p,o="reviewed_at",n=d.h(0,"output"),m=y.P.b(n)?n:C.dv,l=m.h(0,"sources"),k=A.Z(d.h(0,"id"))
A.Z(d.h(0,"room_id"))
x=A.Z(d.h(0,"agent_type"))
w=A.Z(d.h(0,"status"))
v=A.a8(m.h(0,"title"))
u=A.a8(m.h(0,"detail"))
t=A.a8(m.h(0,"provider"))
s=A.df(m.h(0,"confidence"))
if(s==null)s=null
if(y.j.b(l)){r=A.c([],y.s)
for(q=J.aP(l);q.q();){p=q.gI()
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
Nu:function Nu(d){this.a=d},
beF:function beF(){},
beH:function beH(){},
beG:function beG(){},
bXM:function bXM(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[65],B)
B.lT.prototype={
gbQ(){return this.a}}
B.k_.prototype={
gbQ(){return this.a}}
B.Nu.prototype={
Mj(d){return this.brV(d)},
brV(d){var x=0,w=A.m(y.k),v,u=this,t,s
var $async$Mj=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:s=J
x=3
return A.d(u.a.aL("ai_agents").bz("id, display_name, description, case_type").b7("is_active",!0).ayo("case_type.is.null,case_type.eq."+d).qo("display_name"),$async$Mj)
case 3:t=s.c2(f,new B.beF(),y.Y)
t=A.J(t,t.$ti.i("aj.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Mj,w)},
bzq(d){var x=this.a.aL("ai_suggestions").a_H(A.c(["id"],y.s)).b7("room_id",d).qo("created_at")
return new A.d_(new B.beH(),x,A.t(x).i("d_<aS.T,w<lT>>"))},
Nj(d,e,f){return this.bxJ(d,e,f)},
bxI(d,e){return this.Nj(d,null,e)},
bxJ(d,e,f){var x=0,w=A.m(y.T),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
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
n=A.aQ(y.f.a(C.aC.hp(C.aC.iZ(o.a,null),null)),k,y.z)
if(J.o(J.A(n,"status"),"no_findings")){v=null
x=1
break}if(J.o(J.A(n,"status"),"suggestion_created")){r=A.Z(J.A(n,"suggestion_id"))
v=r
x=1
break}if(J.o(J.A(n,"code"),"forbidden")){r=A.dD(J.A(n,"message"))
throw A.n(r)}r=A.dD("The agent run failed. Try again.")
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
YU(d,e,f){return this.bxx(d,e,f)},
bxx(d,e,f){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p
var $async$YU=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
r=y.z
x=6
return A.d(t.a.cV("review_suggestion",A.Q(["suggestion",f,"decision",d,"edited_output",e],y.N,r),r),$async$YU)
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
return A.l($async$YU,w)},
$iaCB:1}
var z=a.updateTypes(["k_(@)","w<lT>(w<ae<f,@>>)","lT(ae<f,@>)","Nu(ao)"])
B.beF.prototype={
$1(d){var x=A.aQ(d,y.N,y.z),w=A.Z(x.h(0,"id")),v=A.Z(x.h(0,"display_name"))
A.a8(x.h(0,"description"))
A.a8(x.h(0,"case_type"))
return new B.k_(w,v)},
$S:z+0}
B.beH.prototype={
$1(d){var x,w=J.c2(d,new B.beG(),y.m)
w=A.J(w,w.$ti.i("aj.E"))
x=A.a6(w).i("cx<1>")
w=A.J(new A.cx(w,x),x.i("aj.E"))
return w},
$S:z+1}
B.beG.prototype={
$1(d){return B.cqn(A.aQ(d,y.N,y.z))},
$S:z+2}
B.bXM.prototype={
$1(d){return new B.Nu(d.T($.dV(),y.A))},
$S:z+3};(function inheritance(){var x=a.inheritMany
x(A.D,[B.lT,B.k_,B.Nu])
x(A.cA,[B.beF,B.beH,B.beG,B.bXM])})()
A.cW(b.typeUniverse,JSON.parse('{"Nu":{"aCB":[]}}'))
var y=(function rtii(){var x=A.O
return{Y:x("k_"),m:x("lT"),s:x("x<f>"),k:x("w<k_>"),j:x("w<@>"),P:x("ae<f,@>"),f:x("ae<@,@>"),N:x("f"),A:x("iS"),z:x("@"),T:x("f?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cTp","a9w",()=>A.eN(new B.bXM(),A.O("aCB")))})()};
(a=>{a["kJEEGwWEQxls6a0v/rL5buLwKss="]=a.current})($__dart_deferred_initializers__);