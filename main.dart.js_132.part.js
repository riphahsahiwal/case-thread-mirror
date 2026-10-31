((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cn3(d){var x,w,v,u,t,s,r,q,p,o="reviewed_at",n=d.h(0,"output"),m=y.P.b(n)?n:C.dr,l=m.h(0,"sources"),k=A.Y(d.h(0,"id"))
A.Y(d.h(0,"room_id"))
x=A.Y(d.h(0,"agent_type"))
w=A.Y(d.h(0,"status"))
v=A.ab(m.h(0,"title"))
u=A.ab(m.h(0,"detail"))
t=A.ab(m.h(0,"provider"))
s=A.dp(m.h(0,"confidence"))
if(s==null)s=null
if(y.j.b(l)){r=A.c([],y.s)
for(q=J.aW(l);q.q();){p=q.gK()
if(p!=null)r.push(J.bm(p))}}else r=C.ax
q=A.ek(A.Y(d.h(0,"created_at")))
if(d.h(0,o)!=null)A.lX(A.Y(d.h(0,o)))
return new B.lN(k,x,w,v,u,t,q,s,r)},
lN:function lN(d,e,f,g,h,i,j,k,l){var _=this
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
N3:function N3(d){this.a=d},
bdD:function bdD(){},
bdF:function bdF(){},
bdE:function bdE(){},
bUP:function bUP(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[62],B)
B.lN.prototype={
gbS(){return this.a}}
B.jU.prototype={
gbS(){return this.a}}
B.N3.prototype={
M6(d){return this.bqF(d)},
bqF(d){var x=0,w=A.n(y.k),v,u=this,t,s
var $async$M6=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=J
x=3
return A.d(u.a.aN("ai_agents").bD("id, display_name, description, case_type").bb("is_active",!0).axJ("case_type.is.null,case_type.eq."+d).rR("display_name"),$async$M6)
case 3:t=s.c7(f,new B.bdD(),y.Y)
t=A.J(t,t.$ti.i("al.E"))
v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$M6,w)},
bxY(d){var x=this.a.aN("ai_suggestions").a_a(A.c(["id"],y.s)).bb("room_id",d).rR("created_at")
return new A.cX(new B.bdF(),x,A.t(x).i("cX<aN.T,w<lN>>"))},
N4(d,e,f){return this.bwm(d,e,f)},
bwl(d,e){return this.N4(d,null,e)},
bwm(d,e,f){var x=0,w=A.n(y.T),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$N4=A.j(function(g,h){if(g===1){t.push(h)
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
return A.d(l.jI("ai-agent",r),$async$N4)
case 7:o=h
n=A.aR(y.f.a(C.aF.hH(C.aF.jf(o.a,null),null)),k,y.z)
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
m=A.H(i)
r=A.aE(m)
throw A.i(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$N4,w)},
Yn(d,e,f){return this.bwa(d,e,f)},
bwa(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p
var $async$Yn=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
r=y.z
x=6
return A.d(t.a.dj("review_suggestion",A.R(["suggestion",f,"decision",d,"edited_output",e],y.N,r),r),$async$Yn)
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
return A.m($async$Yn,w)},
$iaBS:1}
var z=a.updateTypes(["jU(@)","w<lN>(w<af<f,@>>)","lN(af<f,@>)","N3(as)"])
B.bdD.prototype={
$1(d){var x=A.aR(d,y.N,y.z),w=A.Y(x.h(0,"id")),v=A.Y(x.h(0,"display_name"))
A.ab(x.h(0,"description"))
A.ab(x.h(0,"case_type"))
return new B.jU(w,v)},
$S:z+0}
B.bdF.prototype={
$1(d){var x,w=J.c7(d,new B.bdE(),y.m)
w=A.J(w,w.$ti.i("al.E"))
x=A.a3(w).i("cv<1>")
w=A.J(new A.cv(w,x),x.i("al.E"))
return w},
$S:z+1}
B.bdE.prototype={
$1(d){return B.cn3(A.aR(d,y.N,y.z))},
$S:z+2}
B.bUP.prototype={
$1(d){return new B.N3(d.V($.dZ(),y.A))},
$S:z+3};(function inheritance(){var x=a.inheritMany
x(A.C,[B.lN,B.jU,B.N3])
x(A.cx,[B.bdD,B.bdF,B.bdE,B.bUP])})()
A.d1(b.typeUniverse,JSON.parse('{"N3":{"aBS":[]}}'))
var y=(function rtii(){var x=A.L
return{Y:x("jU"),m:x("lN"),s:x("y<f>"),k:x("w<jU>"),j:x("w<@>"),P:x("af<f,@>"),f:x("af<@,@>"),N:x("f"),A:x("iq"),z:x("@"),T:x("f?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cPO","a9_",()=>A.eX(new B.bUP(),A.L("aBS")))})()};
(a=>{a["LoUAGQxNcsJYC9m3CYJqgTgTwcE="]=a.current})($__dart_deferred_initializers__);