((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cnr(d){var x,w,v,u,t,s,r,q,p,o="reviewed_at",n=d.h(0,"output"),m=y.P.b(n)?n:C.ds,l=m.h(0,"sources"),k=A.Y(d.h(0,"id"))
A.Y(d.h(0,"room_id"))
x=A.Y(d.h(0,"agent_type"))
w=A.Y(d.h(0,"status"))
v=A.ab(m.h(0,"title"))
u=A.ab(m.h(0,"detail"))
t=A.ab(m.h(0,"provider"))
s=A.dp(m.h(0,"confidence"))
if(s==null)s=null
if(y.j.b(l)){r=A.c([],y.s)
for(q=J.aT(l);q.q();){p=q.gJ()
if(p!=null)r.push(J.bm(p))}}else r=C.ax
q=A.ej(A.Y(d.h(0,"created_at")))
if(d.h(0,o)!=null)A.lY(A.Y(d.h(0,o)))
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
jW:function jW(d,e){this.a=d
this.b=e},
N9:function N9(d){this.a=d},
bdR:function bdR(){},
bdT:function bdT(){},
bdS:function bdS(){},
bVd:function bVd(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[63],B)
B.lO.prototype={
gbT(){return this.a}}
B.jW.prototype={
gbT(){return this.a}}
B.N9.prototype={
Ma(d){return this.bqU(d)},
bqU(d){var x=0,w=A.n(y.k),v,u=this,t,s
var $async$Ma=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=J
x=3
return A.d(u.a.aM("ai_agents").bz("id, display_name, description, case_type").b6("is_active",!0).axW("case_type.is.null,case_type.eq."+d).rT("display_name"),$async$Ma)
case 3:t=s.c7(f,new B.bdR(),y.Y)
t=A.J(t,t.$ti.i("al.E"))
v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Ma,w)},
bye(d){var x=this.a.aM("ai_suggestions").a_f(A.c(["id"],y.s)).b6("room_id",d).rT("created_at")
return new A.cY(new B.bdT(),x,A.t(x).i("cY<aO.T,w<lO>>"))},
N8(d,e,f){return this.bwD(d,e,f)},
bwC(d,e){return this.N8(d,null,e)},
bwD(d,e,f){var x=0,w=A.n(y.T),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$N8=A.j(function(g,h){if(g===1){t.push(h)
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
return A.d(l.jJ("ai-agent",r),$async$N8)
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
return A.m($async$N8,w)},
Ys(d,e,f){return this.bwr(d,e,f)},
bwr(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p
var $async$Ys=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
r=y.z
x=6
return A.d(t.a.dj("review_suggestion",A.R(["suggestion",f,"decision",d,"edited_output",e],y.N,r),r),$async$Ys)
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
return A.m($async$Ys,w)},
$iaBW:1}
var z=a.updateTypes(["jW(@)","w<lO>(w<af<f,@>>)","lO(af<f,@>)","N9(as)"])
B.bdR.prototype={
$1(d){var x=A.aR(d,y.N,y.z),w=A.Y(x.h(0,"id")),v=A.Y(x.h(0,"display_name"))
A.ab(x.h(0,"description"))
A.ab(x.h(0,"case_type"))
return new B.jW(w,v)},
$S:z+0}
B.bdT.prototype={
$1(d){var x,w=J.c7(d,new B.bdS(),y.m)
w=A.J(w,w.$ti.i("al.E"))
x=A.a3(w).i("cv<1>")
w=A.J(new A.cv(w,x),x.i("al.E"))
return w},
$S:z+1}
B.bdS.prototype={
$1(d){return B.cnr(A.aR(d,y.N,y.z))},
$S:z+2}
B.bVd.prototype={
$1(d){return new B.N9(d.V($.dZ(),y.A))},
$S:z+3};(function inheritance(){var x=a.inheritMany
x(A.C,[B.lO,B.jW,B.N9])
x(A.cw,[B.bdR,B.bdT,B.bdS,B.bVd])})()
A.cZ(b.typeUniverse,JSON.parse('{"N9":{"aBW":[]}}'))
var y=(function rtii(){var x=A.L
return{Y:x("jW"),m:x("lO"),s:x("y<f>"),k:x("w<jW>"),j:x("w<@>"),P:x("af<f,@>"),f:x("af<@,@>"),N:x("f"),A:x("iq"),z:x("@"),T:x("f?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cQf","a92",()=>A.eM(new B.bVd(),A.L("aBW")))})()};
(a=>{a["fRrljTUYrU0NCyVvChCWmPm9AF0="]=a.current})($__dart_deferred_initializers__);