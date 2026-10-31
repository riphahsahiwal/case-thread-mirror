((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cnJ(d){var x,w,v,u,t,s,r,q,p,o="reviewed_at",n=d.h(0,"output"),m=y.P.b(n)?n:C.ds,l=m.h(0,"sources"),k=A.Z(d.h(0,"id"))
A.Z(d.h(0,"room_id"))
x=A.Z(d.h(0,"agent_type"))
w=A.Z(d.h(0,"status"))
v=A.ab(m.h(0,"title"))
u=A.ab(m.h(0,"detail"))
t=A.ab(m.h(0,"provider"))
s=A.dp(m.h(0,"confidence"))
if(s==null)s=null
if(y.j.b(l)){r=A.c([],y.s)
for(q=J.aR(l);q.q();){p=q.gJ()
if(p!=null)r.push(J.bl(p))}}else r=C.ay
q=A.em(A.Z(d.h(0,"created_at")))
if(d.h(0,o)!=null)A.li(A.Z(d.h(0,o)))
return new B.lP(k,x,w,v,u,t,q,s,r)},
lP:function lP(d,e,f,g,h,i,j,k,l){var _=this
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
Nc:function Nc(d){this.a=d},
bdR:function bdR(){},
bdT:function bdT(){},
bdS:function bdS(){},
bVo:function bVo(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[62],B)
B.lP.prototype={
gbS(){return this.a}}
B.jW.prototype={
gbS(){return this.a}}
B.Nc.prototype={
Mc(d){return this.br8(d)},
br8(d){var x=0,w=A.n(y.k),v,u=this,t,s
var $async$Mc=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=J
x=3
return A.d(u.a.aL("ai_agents").bz("id, display_name, description, case_type").b7("is_active",!0).axX("case_type.is.null,case_type.eq."+d).rS("display_name"),$async$Mc)
case 3:t=s.c2(f,new B.bdR(),y.Y)
t=A.J(t,t.$ti.i("ak.E"))
v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Mc,w)},
byw(d){var x=this.a.aL("ai_suggestions").a_j(A.c(["id"],y.s)).b7("room_id",d).rS("created_at")
return new A.cX(new B.bdT(),x,A.t(x).i("cX<aO.T,w<lP>>"))},
Nb(d,e,f){return this.bwS(d,e,f)},
bwR(d,e){return this.Nb(d,null,e)},
bwS(d,e,f){var x=0,w=A.n(y.T),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Nb=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
l=s.a.ax
l===$&&A.b()
k=y.N
r=A.D(k,k)
J.bd(r,"agent_id",d)
J.bd(r,"room_id",f)
q="evidence_item_id"
p=e
if(p!=null)J.bd(r,q,p)
x=7
return A.d(l.jI("ai-agent",r),$async$Nb)
case 7:o=h
n=A.aU(y.f.a(C.aF.hI(C.aF.jg(o.a,null),null)),k,y.z)
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
m=A.F(i)
r=A.aB(m)
throw A.i(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Nb,w)},
Yy(d,e,f){return this.bwG(d,e,f)},
bwG(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p
var $async$Yy=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
r=y.z
x=6
return A.d(t.a.dj("review_suggestion",A.R(["suggestion",f,"decision",d,"edited_output",e],y.N,r),r),$async$Yy)
case 6:v=1
x=5
break
case 3:v=2
p=u.pop()
s=A.F(p)
r=A.aB(s)
throw A.i(r)
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Yy,w)},
$iaC3:1}
var z=a.updateTypes(["jW(@)","w<lP>(w<af<f,@>>)","lP(af<f,@>)","Nc(as)"])
B.bdR.prototype={
$1(d){var x=A.aU(d,y.N,y.z),w=A.Z(x.h(0,"id")),v=A.Z(x.h(0,"display_name"))
A.ab(x.h(0,"description"))
A.ab(x.h(0,"case_type"))
return new B.jW(w,v)},
$S:z+0}
B.bdT.prototype={
$1(d){var x,w=J.c2(d,new B.bdS(),y.m)
w=A.J(w,w.$ti.i("ak.E"))
x=A.a7(w).i("cw<1>")
w=A.J(new A.cw(w,x),x.i("ak.E"))
return w},
$S:z+1}
B.bdS.prototype={
$1(d){return B.cnJ(A.aU(d,y.N,y.z))},
$S:z+2}
B.bVo.prototype={
$1(d){return new B.Nc(d.V($.e0(),y.A))},
$S:z+3};(function inheritance(){var x=a.inheritMany
x(A.C,[B.lP,B.jW,B.Nc])
x(A.cz,[B.bdR,B.bdT,B.bdS,B.bVo])})()
A.cY(b.typeUniverse,JSON.parse('{"Nc":{"aC3":[]}}'))
var y=(function rtii(){var x=A.L
return{Y:x("jW"),m:x("lP"),s:x("y<f>"),k:x("w<jW>"),j:x("w<@>"),P:x("af<f,@>"),f:x("af<@,@>"),N:x("f"),A:x("is"),z:x("@"),T:x("f?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cQx","a98",()=>A.eY(new B.bVo(),A.L("aC3")))})()};
(a=>{a["IkWdWXBjh48398T/6ZS+MuO8geA="]=a.current})($__dart_deferred_initializers__);