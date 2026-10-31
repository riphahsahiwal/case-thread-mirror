((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cnR(d){var x,w,v,u,t,s,r,q,p,o="reviewed_at",n=d.h(0,"output"),m=y.P.b(n)?n:C.dt,l=m.h(0,"sources"),k=A.Y(d.h(0,"id"))
A.Y(d.h(0,"room_id"))
x=A.Y(d.h(0,"agent_type"))
w=A.Y(d.h(0,"status"))
v=A.ab(m.h(0,"title"))
u=A.ab(m.h(0,"detail"))
t=A.ab(m.h(0,"provider"))
s=A.dq(m.h(0,"confidence"))
if(s==null)s=null
if(y.j.b(l)){r=A.c([],y.s)
for(q=J.aT(l);q.q();){p=q.gJ()
if(p!=null)r.push(J.bm(p))}}else r=C.ay
q=A.ek(A.Y(d.h(0,"created_at")))
if(d.h(0,o)!=null)A.m_(A.Y(d.h(0,o)))
return new B.lQ(k,x,w,v,u,t,q,s,r)},
lQ:function lQ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
jX:function jX(d,e){this.a=d
this.b=e},
Ne:function Ne(d){this.a=d},
be7:function be7(){},
be9:function be9(){},
be8:function be8(){},
bVs:function bVs(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[64],B)
B.lQ.prototype={
gbQ(){return this.a}}
B.jX.prototype={
gbQ(){return this.a}}
B.Ne.prototype={
Mc(d){return this.br3(d)},
br3(d){var x=0,w=A.n(y.k),v,u=this,t,s
var $async$Mc=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=J
x=3
return A.d(u.a.aK("ai_agents").bz("id, display_name, description, case_type").b3("is_active",!0).ay_("case_type.is.null,case_type.eq."+d).qk("display_name"),$async$Mc)
case 3:t=s.c6(f,new B.be7(),y.Y)
t=A.J(t,t.$ti.i("al.E"))
v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Mc,w)},
byo(d){var x=this.a.aK("ai_suggestions").a_i(A.c(["id"],y.s)).b3("room_id",d).qk("created_at")
return new A.cZ(new B.be9(),x,A.t(x).i("cZ<aO.T,w<lQ>>"))},
Na(d,e,f){return this.bwN(d,e,f)},
bwM(d,e){return this.Na(d,null,e)},
bwN(d,e,f){var x=0,w=A.n(y.T),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Na=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
l=s.a.ax
l===$&&A.b()
k=y.N
r=A.D(k,k)
J.be(r,"agent_id",d)
J.be(r,"room_id",f)
q="evidence_item_id"
p=e
if(p!=null)J.be(r,q,p)
x=7
return A.d(l.jh("ai-agent",r),$async$Na)
case 7:o=h
n=A.aR(y.f.a(C.aF.hJ(C.aF.jf(o.a,null),null)),k,y.z)
if(J.o(J.A(n,"status"),"no_findings")){v=null
x=1
break}if(J.o(J.A(n,"status"),"suggestion_created")){r=A.Y(J.A(n,"suggestion_id"))
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
m=A.G(i)
r=A.aB(m)
throw A.i(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Na,w)},
Yv(d,e,f){return this.bwB(d,e,f)},
bwB(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p
var $async$Yv=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
r=y.z
x=6
return A.d(t.a.d8("review_suggestion",A.Q(["suggestion",f,"decision",d,"edited_output",e],y.N,r),r),$async$Yv)
case 6:v=1
x=5
break
case 3:v=2
p=u.pop()
s=A.G(p)
r=A.aB(s)
throw A.i(r)
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Yv,w)},
$iaC0:1}
var z=a.updateTypes(["jX(@)","w<lQ>(w<ae<f,@>>)","lQ(ae<f,@>)","Ne(ao)"])
B.be7.prototype={
$1(d){var x=A.aR(d,y.N,y.z),w=A.Y(x.h(0,"id")),v=A.Y(x.h(0,"display_name"))
A.ab(x.h(0,"description"))
A.ab(x.h(0,"case_type"))
return new B.jX(w,v)},
$S:z+0}
B.be9.prototype={
$1(d){var x,w=J.c6(d,new B.be8(),y.m)
w=A.J(w,w.$ti.i("al.E"))
x=A.a4(w).i("cw<1>")
w=A.J(new A.cw(w,x),x.i("al.E"))
return w},
$S:z+1}
B.be8.prototype={
$1(d){return B.cnR(A.aR(d,y.N,y.z))},
$S:z+2}
B.bVs.prototype={
$1(d){return new B.Ne(d.V($.dI(),y.A))},
$S:z+3};(function inheritance(){var x=a.inheritMany
x(A.C,[B.lQ,B.jX,B.Ne])
x(A.cu,[B.be7,B.be9,B.be8,B.bVs])})()
A.cV(b.typeUniverse,JSON.parse('{"Ne":{"aC0":[]}}'))
var y=(function rtii(){var x=A.L
return{Y:x("jX"),m:x("lQ"),s:x("x<f>"),k:x("w<jX>"),j:x("w<@>"),P:x("ae<f,@>"),f:x("ae<@,@>"),N:x("f"),A:x("i7"),z:x("@"),T:x("f?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cQL","a96",()=>A.eC(new B.bVs(),A.L("aC0")))})()};
(a=>{a["hxJIursRrWmFedrv4K3xTMdQK9E="]=a.current})($__dart_deferred_initializers__);