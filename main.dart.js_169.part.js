((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
csC(d){var x,w,v,u,t,s,r,q,p,o="reviewed_at",n=d.h(0,"output"),m=y.P.b(n)?n:C.dh,l=m.h(0,"sources"),k=A.U(d.h(0,"id"))
A.U(d.h(0,"room_id"))
x=A.U(d.h(0,"agent_type"))
w=A.U(d.h(0,"status"))
v=A.a9(m.h(0,"title"))
u=A.a9(m.h(0,"detail"))
t=A.a9(m.h(0,"provider"))
s=A.dh(m.h(0,"confidence"))
if(s==null)s=null
if(y.j.b(l)){r=A.c([],y.s)
for(q=J.aJ(l);q.q();){p=q.gI()
if(p!=null)r.push(J.be(p))}}else r=C.as
q=A.dY(A.U(d.h(0,"created_at")))
if(d.h(0,o)!=null)A.kI(A.U(d.h(0,o)))
return new B.lZ(k,x,w,v,u,t,q,s,r)},
lZ:function lZ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
k4:function k4(d,e){this.a=d
this.b=e},
NV:function NV(d){this.a=d},
bgp:function bgp(){},
bgr:function bgr(){},
bgq:function bgq(){},
bZd:function bZd(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[72],B)
B.lZ.prototype={
gbE(){return this.a},
gcw(){return this.e}}
B.k4.prototype={
gbE(){return this.a}}
B.NV.prototype={
Mv(d){return this.bte(d)},
bte(d){var x=0,w=A.m(y.k),v,u=this,t,s
var $async$Mv=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:s=J
x=3
return A.e(u.a.az("ai_agents").bn("id, display_name, description, case_type").aY("is_active",!0).aaD("case_type.is.null,case_type.eq."+d).o2("display_name"),$async$Mv)
case 3:t=s.bX(f,new B.bgp(),y.Y)
t=A.K(t,t.$ti.i("ai.E"))
v=t
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Mv,w)},
bAy(d){var x=this.a.az("ai_suggestions").a_W(A.c(["id"],y.s)).aY("room_id",d).o2("created_at")
return new A.d7(new B.bgr(),x,A.t(x).i("d7<aU.T,v<lZ>>"))},
Nz(d,e,f){return this.byX(d,e,f)},
byW(d,e){return this.Nz(d,null,e)},
byX(d,e,f){var x=0,w=A.m(y.T),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Nz=A.i(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
l=s.a.ax
l===$&&A.b()
k=y.N
r=A.D(k,k)
J.bg(r,"agent_id",d)
J.bg(r,"room_id",f)
q="evidence_item_id"
p=e
if(p!=null)J.bg(r,q,p)
x=7
return A.e(l.jp("ai-agent",r),$async$Nz)
case 7:o=h
n=A.aM(y.f.a(C.aJ.hQ(C.aJ.jn(o.a,null),null)),k,y.z)
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
return A.l($async$Nz,w)},
Z8(d,e,f){return this.byL(d,e,f)},
byL(d,e,f){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p
var $async$Z8=A.i(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
r=y.z
x=6
return A.e(t.a.d5("review_suggestion",A.Q(["suggestion",f,"decision",d,"edited_output",e],y.N,r),r),$async$Z8)
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
return A.l($async$Z8,w)},
$iaDo:1}
var z=a.updateTypes(["k4(@)","v<lZ>(v<ad<f,@>>)","lZ(ad<f,@>)","NV(al)"])
B.bgp.prototype={
$1(d){var x=A.aM(d,y.N,y.z),w=A.U(x.h(0,"id")),v=A.U(x.h(0,"display_name"))
A.a9(x.h(0,"description"))
A.a9(x.h(0,"case_type"))
return new B.k4(w,v)},
$S:z+0}
B.bgr.prototype={
$1(d){var x,w=J.bX(d,new B.bgq(),y.m)
w=A.K(w,w.$ti.i("ai.E"))
x=A.a6(w).i("cB<1>")
w=A.K(new A.cB(w,x),x.i("ai.E"))
return w},
$S:z+1}
B.bgq.prototype={
$1(d){return B.csC(A.aM(d,y.N,y.z))},
$S:z+2}
B.bZd.prototype={
$1(d){return new B.NV(d.S($.dB(),y.A))},
$S:z+3};(function inheritance(){var x=a.inheritMany
x(A.E,[B.lZ,B.k4,B.NV])
x(A.cg,[B.bgp,B.bgr,B.bgq,B.bZd])})()
A.cC(b.typeUniverse,JSON.parse('{"NV":{"aDo":[]}}'))
var y=(function rtii(){var x=A.J
return{Y:x("k4"),m:x("lZ"),s:x("x<f>"),k:x("v<k4>"),j:x("v<@>"),P:x("ad<f,@>"),f:x("ad<@,@>"),N:x("f"),A:x("h6"),z:x("@"),T:x("f?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cVM","aag",()=>A.er(new B.bZd(),A.J("aDo")))})()};
(a=>{a["c2oKM6sKsKwO2KqFmZCR+2exnX0="]=a.current})($__dart_deferred_initializers__);