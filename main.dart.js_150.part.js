((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
coP(d){var x,w,v,u,t,s,r,q,p,o="reviewed_at",n=d.h(0,"output"),m=y.P.b(n)?n:C.dX,l=m.h(0,"sources"),k=A.T(d.h(0,"id"))
A.T(d.h(0,"room_id"))
x=A.T(d.h(0,"agent_type"))
w=A.T(d.h(0,"status"))
v=A.a7(m.h(0,"title"))
u=A.a7(m.h(0,"detail"))
t=A.a7(m.h(0,"provider"))
s=A.dB(m.h(0,"confidence"))
if(s==null)s=null
if(y.j.b(l)){r=A.c([],y.s)
for(q=J.aJ(l);q.q();){p=q.gI()
if(p!=null)r.push(J.bg(p))}}else r=C.as
q=A.dE(A.T(d.h(0,"created_at")))
if(d.h(0,o)!=null)A.lW(A.T(d.h(0,o)))
return new B.lL(k,x,w,v,u,t,q,s,r)},
lL:function lL(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
jW:function jW(d,e){this.a=d
this.b=e},
MZ:function MZ(d){this.a=d},
bdS:function bdS(){},
bdU:function bdU(){},
bdT:function bdT(){},
bW4:function bW4(){},
car(d,e,f,g){var x=null
return new A.Dl(C.a8K,!0,g,x,x,x,x,C.F,x,!1,x,!0,x,new A.a2i(f,d,x,x,x),e)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[69],B)
B.lL.prototype={
gbG(){return this.a},
gcP(){return this.e}}
B.jW.prototype={
gbG(){return this.a}}
B.MZ.prototype={
M5(d){return this.brC(d)},
brC(d){var x=0,w=A.m(y.k),v,u=this,t,s
var $async$M5=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:s=J
x=3
return A.e(u.a.aA("ai_agents").bo("id, display_name, description, case_type").b0("is_active",!0).aa9("case_type.is.null,case_type.eq."+d).p7("display_name"),$async$M5)
case 3:t=s.bL(f,new B.bdS(),y.Y)
t=A.J(t,t.$ti.i("ai.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$M5,w)},
byS(d){var x=this.a.aA("ai_suggestions").a_z(A.c(["id"],y.s)).b0("room_id",d).p7("created_at")
return new A.d0(new B.bdU(),x,A.t(x).i("d0<aT.T,v<lL>>"))},
Na(d,e,f){return this.bxe(d,e,f)},
bxd(d,e){return this.Na(d,null,e)},
bxe(d,e,f){var x=0,w=A.m(y.T),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Na=A.i(function(g,h){if(g===1){t.push(h)
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
return A.e(l.jn("ai-agent",r),$async$Na)
case 7:o=h
n=A.aP(y.f.a(C.aI.hM(C.aI.jH(o.a,null),null)),k,y.z)
if(J.p(J.A(n,"status"),"no_findings")){v=null
x=1
break}if(J.p(J.A(n,"status"),"suggestion_created")){r=A.T(J.A(n,"suggestion_id"))
v=r
x=1
break}if(J.p(J.A(n,"code"),"forbidden")){r=A.dl(J.A(n,"message"))
throw A.n(r)}r=A.dl("The agent run failed. Try again.")
throw A.n(r)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.E(i)
r=A.aA(m)
throw A.n(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Na,w)},
YL(d,e,f){return this.bx2(d,e,f)},
bx2(d,e,f){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p
var $async$YL=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
r=y.z
x=6
return A.e(t.a.d4("review_suggestion",A.Q(["suggestion",f,"decision",d,"edited_output",e],y.N,r),r),$async$YL)
case 6:v=1
x=5
break
case 3:v=2
p=u.pop()
s=A.E(p)
r=A.aA(s)
throw A.n(r)
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$YL,w)},
$iaBO:1}
var z=a.updateTypes(["jW(@)","v<lL>(v<aa<h,@>>)","lL(aa<h,@>)","MZ(al)"])
B.bdS.prototype={
$1(d){var x=A.aP(d,y.N,y.z),w=A.T(x.h(0,"id")),v=A.T(x.h(0,"display_name"))
A.a7(x.h(0,"description"))
A.a7(x.h(0,"case_type"))
return new B.jW(w,v)},
$S:z+0}
B.bdU.prototype={
$1(d){var x,w=J.bL(d,new B.bdT(),y.m)
w=A.J(w,w.$ti.i("ai.E"))
x=A.a6(w).i("cv<1>")
w=A.J(new A.cv(w,x),x.i("ai.E"))
return w},
$S:z+1}
B.bdT.prototype={
$1(d){return B.coP(A.aP(d,y.N,y.z))},
$S:z+2}
B.bW4.prototype={
$1(d){return new B.MZ(d.T($.dx(),y.A))},
$S:z+3};(function inheritance(){var x=a.inheritMany
x(A.C,[B.lL,B.jW,B.MZ])
x(A.ca,[B.bdS,B.bdU,B.bdT,B.bW4])})()
A.cD(b.typeUniverse,JSON.parse('{"MZ":{"aBO":[]}}'))
var y=(function rtii(){var x=A.I
return{Y:x("jW"),m:x("lL"),s:x("x<h>"),k:x("v<jW>"),j:x("v<@>"),P:x("aa<h,@>"),f:x("aa<@,@>"),N:x("h"),A:x("fY"),z:x("@"),T:x("h?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cRq","a91",()=>A.ej(new B.bW4(),A.I("aBO")))})()};
(a=>{a["1BAYcxAKvVbziGldwLLUuLtfRiE="]=a.current})($__dart_deferred_initializers__);