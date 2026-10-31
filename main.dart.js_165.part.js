((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
crA(d){var x,w,v,u,t,s,r,q,p,o="reviewed_at",n=d.h(0,"output"),m=y.P.b(n)?n:C.dh,l=m.h(0,"sources"),k=A.U(d.h(0,"id"))
A.U(d.h(0,"room_id"))
x=A.U(d.h(0,"agent_type"))
w=A.U(d.h(0,"status"))
v=A.a8(m.h(0,"title"))
u=A.a8(m.h(0,"detail"))
t=A.a8(m.h(0,"provider"))
s=A.dg(m.h(0,"confidence"))
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
bfQ:function bfQ(){},
bfS:function bfS(){},
bfR:function bfR(){},
bYn:function bYn(){},
cd6(d,e,f,g){var x=null
return new A.DU(C.a8W,!0,g,x,x,x,x,C.F,x,!1,x,!0,x,new A.a3c(f,d,x,x,x),e)}}
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
Mq(d){return this.bsJ(d)},
bsJ(d){var x=0,w=A.m(y.k),v,u=this,t,s
var $async$Mq=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:s=J
x=3
return A.e(u.a.az("ai_agents").bn("id, display_name, description, case_type").aY("is_active",!0).aaw("case_type.is.null,case_type.eq."+d).o0("display_name"),$async$Mq)
case 3:t=s.bX(f,new B.bfQ(),y.Y)
t=A.K(t,t.$ti.i("aj.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Mq,w)},
bA_(d){var x=this.a.az("ai_suggestions").a_S(A.c(["id"],y.s)).aY("room_id",d).o0("created_at")
return new A.d7(new B.bfS(),x,A.t(x).i("d7<aU.T,w<lX>>"))},
Nv(d,e,f){return this.byo(d,e,f)},
byn(d,e){return this.Nv(d,null,e)},
byo(d,e,f){var x=0,w=A.m(y.T),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Nv=A.i(function(g,h){if(g===1){t.push(h)
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
return A.e(l.jp("ai-agent",r),$async$Nv)
case 7:o=h
n=A.aM(y.f.a(C.aI.hQ(C.aI.jn(o.a,null),null)),k,y.z)
if(J.p(J.A(n,"status"),"no_findings")){v=null
x=1
break}if(J.p(J.A(n,"status"),"suggestion_created")){r=A.U(J.A(n,"suggestion_id"))
v=r
x=1
break}if(J.p(J.A(n,"code"),"forbidden")){r=A.du(J.A(n,"message"))
throw A.n(r)}r=A.du("The agent run failed. Try again.")
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
return A.l($async$Nv,w)},
Z4(d,e,f){return this.byc(d,e,f)},
byc(d,e,f){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p
var $async$Z4=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
r=y.z
x=6
return A.e(t.a.d5("review_suggestion",A.Q(["suggestion",f,"decision",d,"edited_output",e],y.N,r),r),$async$Z4)
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
return A.l($async$Z4,w)},
$iaD0:1}
var z=a.updateTypes(["k2(@)","w<lX>(w<ac<f,@>>)","lX(ac<f,@>)","NM(al)"])
B.bfQ.prototype={
$1(d){var x=A.aM(d,y.N,y.z),w=A.U(x.h(0,"id")),v=A.U(x.h(0,"display_name"))
A.a8(x.h(0,"description"))
A.a8(x.h(0,"case_type"))
return new B.k2(w,v)},
$S:z+0}
B.bfS.prototype={
$1(d){var x,w=J.bX(d,new B.bfR(),y.m)
w=A.K(w,w.$ti.i("aj.E"))
x=A.a6(w).i("cB<1>")
w=A.K(new A.cB(w,x),x.i("aj.E"))
return w},
$S:z+1}
B.bfR.prototype={
$1(d){return B.crA(A.aM(d,y.N,y.z))},
$S:z+2}
B.bYn.prototype={
$1(d){return new B.NM(d.T($.dB(),y.A))},
$S:z+3};(function inheritance(){var x=a.inheritMany
x(A.E,[B.lX,B.k2,B.NM])
x(A.ci,[B.bfQ,B.bfS,B.bfR,B.bYn])})()
A.cD(b.typeUniverse,JSON.parse('{"NM":{"aD0":[]}}'))
var y=(function rtii(){var x=A.J
return{Y:x("k2"),m:x("lX"),s:x("x<f>"),k:x("w<k2>"),j:x("w<@>"),P:x("ac<f,@>"),f:x("ac<@,@>"),N:x("f"),A:x("h5"),z:x("@"),T:x("f?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cUv","a9X",()=>A.ep(new B.bYn(),A.J("aD0")))})()};
(a=>{a["DWsZBwk5ayZoCUfsmpiMEguoLFg="]=a.current})($__dart_deferred_initializers__);