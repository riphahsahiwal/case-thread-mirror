((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
coR(d){var x,w,v,u,t,s,r,q,p,o="reviewed_at",n=d.h(0,"output"),m=y.P.b(n)?n:C.dY,l=m.h(0,"sources"),k=A.T(d.h(0,"id"))
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
MY:function MY(d){this.a=d},
bdZ:function bdZ(){},
be0:function be0(){},
be_:function be_(){},
bW2:function bW2(){},
cas(d,e,f,g){var x=null
return new A.Dl(C.a8M,!0,g,x,x,x,x,C.F,x,!1,x,!0,x,new A.a2h(f,d,x,x,x),e)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[69],B)
B.lL.prototype={
gbG(){return this.a},
gcP(){return this.e}}
B.jW.prototype={
gbG(){return this.a}}
B.MY.prototype={
M4(d){return this.brE(d)},
brE(d){var x=0,w=A.m(y.k),v,u=this,t,s
var $async$M4=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:s=J
x=3
return A.e(u.a.aA("ai_agents").bn("id, display_name, description, case_type").b0("is_active",!0).aa9("case_type.is.null,case_type.eq."+d).p6("display_name"),$async$M4)
case 3:t=s.bM(f,new B.bdZ(),y.Y)
t=A.J(t,t.$ti.i("aj.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$M4,w)},
byU(d){var x=this.a.aA("ai_suggestions").a_A(A.c(["id"],y.s)).b0("room_id",d).p6("created_at")
return new A.d_(new B.be0(),x,A.t(x).i("d_<aT.T,v<lL>>"))},
N9(d,e,f){return this.bxg(d,e,f)},
bxf(d,e){return this.N9(d,null,e)},
bxg(d,e,f){var x=0,w=A.m(y.T),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$N9=A.i(function(g,h){if(g===1){t.push(h)
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
return A.e(l.jn("ai-agent",r),$async$N9)
case 7:o=h
n=A.aP(y.f.a(C.aI.hM(C.aI.jI(o.a,null),null)),k,y.z)
if(J.p(J.A(n,"status"),"no_findings")){v=null
x=1
break}if(J.p(J.A(n,"status"),"suggestion_created")){r=A.T(J.A(n,"suggestion_id"))
v=r
x=1
break}if(J.p(J.A(n,"code"),"forbidden")){r=A.dk(J.A(n,"message"))
throw A.n(r)}r=A.dk("The agent run failed. Try again.")
throw A.n(r)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.E(i)
r=A.aB(m)
throw A.n(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$N9,w)},
YN(d,e,f){return this.bx4(d,e,f)},
bx4(d,e,f){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p
var $async$YN=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
r=y.z
x=6
return A.e(t.a.cZ("review_suggestion",A.Q(["suggestion",f,"decision",d,"edited_output",e],y.N,r),r),$async$YN)
case 6:v=1
x=5
break
case 3:v=2
p=u.pop()
s=A.E(p)
r=A.aB(s)
throw A.n(r)
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$YN,w)},
$iaBO:1}
var z=a.updateTypes(["jW(@)","v<lL>(v<ac<h,@>>)","lL(ac<h,@>)","MY(ah)"])
B.bdZ.prototype={
$1(d){var x=A.aP(d,y.N,y.z),w=A.T(x.h(0,"id")),v=A.T(x.h(0,"display_name"))
A.a7(x.h(0,"description"))
A.a7(x.h(0,"case_type"))
return new B.jW(w,v)},
$S:z+0}
B.be0.prototype={
$1(d){var x,w=J.bM(d,new B.be_(),y.m)
w=A.J(w,w.$ti.i("aj.E"))
x=A.a6(w).i("cv<1>")
w=A.J(new A.cv(w,x),x.i("aj.E"))
return w},
$S:z+1}
B.be_.prototype={
$1(d){return B.coR(A.aP(d,y.N,y.z))},
$S:z+2}
B.bW2.prototype={
$1(d){return new B.MY(d.S($.du(),y.A))},
$S:z+3};(function inheritance(){var x=a.inheritMany
x(A.C,[B.lL,B.jW,B.MY])
x(A.ca,[B.bdZ,B.be0,B.be_,B.bW2])})()
A.cD(b.typeUniverse,JSON.parse('{"MY":{"aBO":[]}}'))
var y=(function rtii(){var x=A.I
return{Y:x("jW"),m:x("lL"),s:x("x<h>"),k:x("v<jW>"),j:x("v<@>"),P:x("ac<h,@>"),f:x("ac<@,@>"),N:x("h"),A:x("fY"),z:x("@"),T:x("h?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cRs","a9_",()=>A.eg(new B.bW2(),A.I("aBO")))})()};
(a=>{a["5bOF+NuhpIQQngMWBysXjml2o14="]=a.current})($__dart_deferred_initializers__);