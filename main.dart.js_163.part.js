((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
crz(d){var x,w,v,u,t,s,r,q,p,o="reviewed_at",n=d.h(0,"output"),m=y.P.b(n)?n:C.dh,l=m.h(0,"sources"),k=A.U(d.h(0,"id"))
A.U(d.h(0,"room_id"))
x=A.U(d.h(0,"agent_type"))
w=A.U(d.h(0,"status"))
v=A.a8(m.h(0,"title"))
u=A.a8(m.h(0,"detail"))
t=A.a8(m.h(0,"provider"))
s=A.df(m.h(0,"confidence"))
if(s==null)s=null
if(y.j.b(l)){r=A.c([],y.s)
for(q=J.aK(l);q.q();){p=q.gI()
if(p!=null)r.push(J.bd(p))}}else r=C.as
q=A.dX(A.U(d.h(0,"created_at")))
if(d.h(0,o)!=null)A.kG(A.U(d.h(0,o)))
return new B.lX(k,x,w,v,u,t,q,s,r)},
lX:function lX(d,e,f,g,h,i,j,k,l){var _=this
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
NM:function NM(d){this.a=d},
bfJ:function bfJ(){},
bfL:function bfL(){},
bfK:function bfK(){},
bYm:function bYm(){},
cd5(d,e,f,g){var x=null
return new A.DW(C.a8W,!0,g,x,x,x,x,C.F,x,!1,x,!0,x,new A.a3b(f,d,x,x,x),e)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[72],B)
B.lX.prototype={
gbE(){return this.a},
gcw(){return this.e}}
B.k2.prototype={
gbE(){return this.a}}
B.NM.prototype={
Mr(d){return this.bsD(d)},
bsD(d){var x=0,w=A.m(y.k),v,u=this,t,s
var $async$Mr=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:s=J
x=3
return A.e(u.a.az("ai_agents").bn("id, display_name, description, case_type").aY("is_active",!0).aav("case_type.is.null,case_type.eq."+d).o0("display_name"),$async$Mr)
case 3:t=s.bX(f,new B.bfJ(),y.Y)
t=A.K(t,t.$ti.i("aj.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Mr,w)},
bzU(d){var x=this.a.az("ai_suggestions").a_T(A.c(["id"],y.s)).aY("room_id",d).o0("created_at")
return new A.d7(new B.bfL(),x,A.t(x).i("d7<aU.T,w<lX>>"))},
Nw(d,e,f){return this.byi(d,e,f)},
byh(d,e){return this.Nw(d,null,e)},
byi(d,e,f){var x=0,w=A.m(y.T),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Nw=A.i(function(g,h){if(g===1){t.push(h)
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
return A.e(l.jp("ai-agent",r),$async$Nw)
case 7:o=h
n=A.aM(y.f.a(C.aI.hP(C.aI.jn(o.a,null),null)),k,y.z)
if(J.p(J.A(n,"status"),"no_findings")){v=null
x=1
break}if(J.p(J.A(n,"status"),"suggestion_created")){r=A.U(J.A(n,"suggestion_id"))
v=r
x=1
break}if(J.p(J.A(n,"code"),"forbidden")){r=A.dt(J.A(n,"message"))
throw A.n(r)}r=A.dt("The agent run failed. Try again.")
throw A.n(r)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.G(i)
r=A.aC(m)
throw A.n(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Nw,w)},
Z5(d,e,f){return this.by6(d,e,f)},
by6(d,e,f){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p
var $async$Z5=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
r=y.z
x=6
return A.e(t.a.d5("review_suggestion",A.Q(["suggestion",f,"decision",d,"edited_output",e],y.N,r),r),$async$Z5)
case 6:v=1
x=5
break
case 3:v=2
p=u.pop()
s=A.G(p)
r=A.aC(s)
throw A.n(r)
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$Z5,w)},
$iaD1:1}
var z=a.updateTypes(["k2(@)","w<lX>(w<ac<f,@>>)","lX(ac<f,@>)","NM(al)"])
B.bfJ.prototype={
$1(d){var x=A.aM(d,y.N,y.z),w=A.U(x.h(0,"id")),v=A.U(x.h(0,"display_name"))
A.a8(x.h(0,"description"))
A.a8(x.h(0,"case_type"))
return new B.k2(w,v)},
$S:z+0}
B.bfL.prototype={
$1(d){var x,w=J.bX(d,new B.bfK(),y.m)
w=A.K(w,w.$ti.i("aj.E"))
x=A.a6(w).i("cB<1>")
w=A.K(new A.cB(w,x),x.i("aj.E"))
return w},
$S:z+1}
B.bfK.prototype={
$1(d){return B.crz(A.aM(d,y.N,y.z))},
$S:z+2}
B.bYm.prototype={
$1(d){return new B.NM(d.S($.dB(),y.A))},
$S:z+3};(function inheritance(){var x=a.inheritMany
x(A.D,[B.lX,B.k2,B.NM])
x(A.cg,[B.bfJ,B.bfL,B.bfK,B.bYm])})()
A.cD(b.typeUniverse,JSON.parse('{"NM":{"aD1":[]}}'))
var y=(function rtii(){var x=A.J
return{Y:x("k2"),m:x("lX"),s:x("x<f>"),k:x("w<k2>"),j:x("w<@>"),P:x("ac<f,@>"),f:x("ac<@,@>"),N:x("f"),A:x("h5"),z:x("@"),T:x("f?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cUu","a9X",()=>A.ep(new B.bYm(),A.J("aD1")))})()};
(a=>{a["xaxpwtcX2sMQaJV3fKx3LERKQq8="]=a.current})($__dart_deferred_initializers__);