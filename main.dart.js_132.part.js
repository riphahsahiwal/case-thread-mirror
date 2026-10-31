((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cnj(d){var x,w,v,u,t,s,r,q,p,o="reviewed_at",n=d.h(0,"output"),m=y.P.b(n)?n:C.ds,l=m.h(0,"sources"),k=A.Z(d.h(0,"id"))
A.Z(d.h(0,"room_id"))
x=A.Z(d.h(0,"agent_type"))
w=A.Z(d.h(0,"status"))
v=A.ab(m.h(0,"title"))
u=A.ab(m.h(0,"detail"))
t=A.ab(m.h(0,"provider"))
s=A.dp(m.h(0,"confidence"))
if(s==null)s=null
if(y.j.b(l)){r=A.c([],y.s)
for(q=J.aV(l);q.q();){p=q.gK()
if(p!=null)r.push(J.bl(p))}}else r=C.ax
q=A.el(A.Z(d.h(0,"created_at")))
if(d.h(0,o)!=null)A.lh(A.Z(d.h(0,o)))
return new B.lO(k,x,w,v,u,t,q,s,r)},
lO:function lO(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
jU:function jU(d,e){this.a=d
this.b=e},
N5:function N5(d){this.a=d},
bdK:function bdK(){},
bdM:function bdM(){},
bdL:function bdL(){},
bV_:function bV_(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[62],B)
B.lO.prototype={
gbS(){return this.a}}
B.jU.prototype={
gbS(){return this.a}}
B.N5.prototype={
M8(d){return this.bqT(d)},
bqT(d){var x=0,w=A.n(y.k),v,u=this,t,s
var $async$M8=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=J
x=3
return A.d(u.a.aM("ai_agents").bz("id, display_name, description, case_type").b7("is_active",!0).axQ("case_type.is.null,case_type.eq."+d).rR("display_name"),$async$M8)
case 3:t=s.c7(f,new B.bdK(),y.Y)
t=A.J(t,t.$ti.i("al.E"))
v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$M8,w)},
byc(d){var x=this.a.aM("ai_suggestions").a_d(A.c(["id"],y.s)).b7("room_id",d).rR("created_at")
return new A.cX(new B.bdM(),x,A.t(x).i("cX<aN.T,w<lO>>"))},
N6(d,e,f){return this.bwB(d,e,f)},
bwA(d,e){return this.N6(d,null,e)},
bwB(d,e,f){var x=0,w=A.n(y.T),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$N6=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
l=s.a.ax
l===$&&A.b()
k=y.N
r=A.D(k,k)
J.bf(r,"agent_id",d)
J.bf(r,"room_id",f)
q="evidence_item_id"
p=e
if(p!=null)J.bf(r,q,p)
x=7
return A.d(l.jI("ai-agent",r),$async$N6)
case 7:o=h
n=A.aS(y.f.a(C.aF.hI(C.aF.jf(o.a,null),null)),k,y.z)
if(J.o(J.A(n,"status"),"no_findings")){v=null
x=1
break}if(J.o(J.A(n,"status"),"suggestion_created")){r=A.Z(J.A(n,"suggestion_id"))
v=r
x=1
break}if(J.o(J.A(n,"code"),"forbidden")){r=A.dF(J.A(n,"message"))
throw A.i(r)}r=A.dF("The agent run failed. Try again.")
throw A.i(r)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.H(i)
r=A.aE(m)
throw A.i(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$N6,w)},
Yq(d,e,f){return this.bwp(d,e,f)},
bwp(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p
var $async$Yq=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
r=y.z
x=6
return A.d(t.a.dj("review_suggestion",A.R(["suggestion",f,"decision",d,"edited_output",e],y.N,r),r),$async$Yq)
case 6:v=1
x=5
break
case 3:v=2
p=u.pop()
s=A.H(p)
r=A.aE(s)
throw A.i(r)
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Yq,w)},
$iaBX:1}
var z=a.updateTypes(["jU(@)","w<lO>(w<af<f,@>>)","lO(af<f,@>)","N5(as)"])
B.bdK.prototype={
$1(d){var x=A.aS(d,y.N,y.z),w=A.Z(x.h(0,"id")),v=A.Z(x.h(0,"display_name"))
A.ab(x.h(0,"description"))
A.ab(x.h(0,"case_type"))
return new B.jU(w,v)},
$S:z+0}
B.bdM.prototype={
$1(d){var x,w=J.c7(d,new B.bdL(),y.m)
w=A.J(w,w.$ti.i("al.E"))
x=A.a3(w).i("cw<1>")
w=A.J(new A.cw(w,x),x.i("al.E"))
return w},
$S:z+1}
B.bdL.prototype={
$1(d){return B.cnj(A.aS(d,y.N,y.z))},
$S:z+2}
B.bV_.prototype={
$1(d){return new B.N5(d.V($.e_(),y.A))},
$S:z+3};(function inheritance(){var x=a.inheritMany
x(A.C,[B.lO,B.jU,B.N5])
x(A.cy,[B.bdK,B.bdM,B.bdL,B.bV_])})()
A.d1(b.typeUniverse,JSON.parse('{"N5":{"aBX":[]}}'))
var y=(function rtii(){var x=A.L
return{Y:x("jU"),m:x("lO"),s:x("y<f>"),k:x("w<jU>"),j:x("w<@>"),P:x("af<f,@>"),f:x("af<@,@>"),N:x("f"),A:x("ir"),z:x("@"),T:x("f?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cQ5","a93",()=>A.eY(new B.bV_(),A.L("aBX")))})()};
(a=>{a["nOO3iLNwhQ9zxNyJJGfIMooT3ac="]=a.current})($__dart_deferred_initializers__);