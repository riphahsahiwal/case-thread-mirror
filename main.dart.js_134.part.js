((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cnB(d){var x,w,v,u,t,s,r,q,p,o="reviewed_at",n=d.h(0,"output"),m=y.P.b(n)?n:C.ds,l=m.h(0,"sources"),k=A.Y(d.h(0,"id"))
A.Y(d.h(0,"room_id"))
x=A.Y(d.h(0,"agent_type"))
w=A.Y(d.h(0,"status"))
v=A.ab(m.h(0,"title"))
u=A.ab(m.h(0,"detail"))
t=A.ab(m.h(0,"provider"))
s=A.dp(m.h(0,"confidence"))
if(s==null)s=null
if(y.j.b(l)){r=A.c([],y.s)
for(q=J.aR(l);q.q();){p=q.gJ()
if(p!=null)r.push(J.bl(p))}}else r=C.ay
q=A.em(A.Y(d.h(0,"created_at")))
if(d.h(0,o)!=null)A.li(A.Y(d.h(0,o)))
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
N9:function N9(d){this.a=d},
bdP:function bdP(){},
bdR:function bdR(){},
bdQ:function bdQ(){},
bVg:function bVg(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[62],B)
B.lP.prototype={
gbS(){return this.a}}
B.jW.prototype={
gbS(){return this.a}}
B.N9.prototype={
Mb(d){return this.br5(d)},
br5(d){var x=0,w=A.n(y.k),v,u=this,t,s
var $async$Mb=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=J
x=3
return A.d(u.a.aL("ai_agents").by("id, display_name, description, case_type").b7("is_active",!0).axW("case_type.is.null,case_type.eq."+d).rS("display_name"),$async$Mb)
case 3:t=s.c2(f,new B.bdP(),y.Y)
t=A.J(t,t.$ti.i("ak.E"))
v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Mb,w)},
bys(d){var x=this.a.aL("ai_suggestions").a_i(A.c(["id"],y.s)).b7("room_id",d).rS("created_at")
return new A.cX(new B.bdR(),x,A.t(x).i("cX<aN.T,w<lP>>"))},
Na(d,e,f){return this.bwP(d,e,f)},
bwO(d,e){return this.Na(d,null,e)},
bwP(d,e,f){var x=0,w=A.n(y.T),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Na=A.j(function(g,h){if(g===1){t.push(h)
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
return A.d(l.jI("ai-agent",r),$async$Na)
case 7:o=h
n=A.aU(y.f.a(C.aF.hI(C.aF.jg(o.a,null),null)),k,y.z)
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
Yx(d,e,f){return this.bwD(d,e,f)},
bwD(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p
var $async$Yx=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
r=y.z
x=6
return A.d(t.a.dj("review_suggestion",A.R(["suggestion",f,"decision",d,"edited_output",e],y.N,r),r),$async$Yx)
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
return A.m($async$Yx,w)},
$iaC1:1}
var z=a.updateTypes(["jW(@)","w<lP>(w<af<f,@>>)","lP(af<f,@>)","N9(as)"])
B.bdP.prototype={
$1(d){var x=A.aU(d,y.N,y.z),w=A.Y(x.h(0,"id")),v=A.Y(x.h(0,"display_name"))
A.ab(x.h(0,"description"))
A.ab(x.h(0,"case_type"))
return new B.jW(w,v)},
$S:z+0}
B.bdR.prototype={
$1(d){var x,w=J.c2(d,new B.bdQ(),y.m)
w=A.J(w,w.$ti.i("ak.E"))
x=A.a7(w).i("cw<1>")
w=A.J(new A.cw(w,x),x.i("ak.E"))
return w},
$S:z+1}
B.bdQ.prototype={
$1(d){return B.cnB(A.aU(d,y.N,y.z))},
$S:z+2}
B.bVg.prototype={
$1(d){return new B.N9(d.V($.e0(),y.A))},
$S:z+3};(function inheritance(){var x=a.inheritMany
x(A.C,[B.lP,B.jW,B.N9])
x(A.cB,[B.bdP,B.bdR,B.bdQ,B.bVg])})()
A.d1(b.typeUniverse,JSON.parse('{"N9":{"aC1":[]}}'))
var y=(function rtii(){var x=A.L
return{Y:x("jW"),m:x("lP"),s:x("y<f>"),k:x("w<jW>"),j:x("w<@>"),P:x("af<f,@>"),f:x("af<@,@>"),N:x("f"),A:x("ir"),z:x("@"),T:x("f?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cQo","a95",()=>A.eY(new B.bVg(),A.L("aC1")))})()};
(a=>{a["Qf7aXD8BP4Ki0LFukw4rsBoZzPg="]=a.current})($__dart_deferred_initializers__);