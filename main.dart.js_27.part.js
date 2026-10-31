((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={c0Q:function c0Q(){},AU:function AU(d){this.a=d},
cLa(d){var w
A:{if("signed"===d){w=C.a5V
break A}if("declined"===d){w=C.fiV
break A}if("cancelled"===d){w=C.fiW
break A}w=C.t2
break A}return w},
clA(d){var w
switch(d.a){case 0:w="Pending"
break
case 1:w="Signed"
break
case 2:w="Declined"
break
case 3:w="Cancelled"
break
default:w=null}return w},
c59(d){var w,v,u,t,s,r,q=A.U(d.h(0,"id")),p=A.a8(d.h(0,"room_id"))
if(p==null)p=""
w=A.U(d.h(0,"title"))
v=A.a8(d.h(0,"document_text"))
if(v==null)v=""
u=A.U(d.h(0,"signer_name"))
t=A.a8(d.h(0,"signer_email"))
s=A.a8(d.h(0,"message"))
if(s==null)s=""
r=A.a8(d.h(0,"status"))
r=B.cLa(r==null?"pending":r)
A.dV(A.U(d.h(0,"created_at")))
return new B.nl(q,p,w,v,u,t,s,r,A.a8(d.h(0,"evidence_id")),A.a8(d.h(0,"evidence_filename")))},
Ne:function Ne(d,e){this.a=d
this.b=e},
nl:function nl(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.y=l
_.z=m}},C
J=c[1]
A=c[0]
B=a.updateHolder(c[68],B)
C=c[192]
B.AU.prototype={
jQ(d){return this.bsu(d)},
bsu(d){var w=0,v=A.m(x.F),u,t=this,s,r,q,p,o,n,m,l
var $async$jQ=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.e(t.a.aA("signature_requests").bo(y.d).b0("room_id",d).fE("created_at",!1).js(100),$async$jQ)
case 3:m=f
l=A.c([],x.n)
for(s=J.aL(m),r=x.B,q=x.w,p=x.b;s.q();){o=A.aM(r.a(s.gI()),q,p)
n=o.h(0,"evidence_items")
if(r.b(n))o.l(0,"evidence_filename",A.a8(n.h(0,"filename")))
l.push(B.c59(o))}u=l
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$jQ,v)},
j1(d){return this.bmd(d)},
bmd(d){var w=0,v=A.m(x.c),u,t=this,s,r,q,p,o,n,m,l
var $async$j1=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.gcb().e.a
n=(o==null?null:o.r).a
p=p.aA("signature_requests")
o=x.w
s=x.b
r=A.C(o,s)
r.l(0,"room_id",d.b)
r.l(0,"title",d.c)
r.l(0,"document_text",d.d)
r.l(0,"signer_name",d.e)
q=d.f
if(q!=null&&q.length!==0)r.l(0,"signer_email",q)
r.l(0,"message",d.r)
r.l(0,"created_by",n)
q=d.y
if(q!=null)r.l(0,"evidence_id",q)
m=B
l=A
w=3
return A.e(p.e0(0,r).bo(y.d).i3(0),$async$j1)
case 3:u=m.c59(l.aM(f,o,s))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$j1,v)},
UT(d){return this.bjG(d)},
bjG(d){var w=0,v=A.m(x.v),u=this,t
var $async$UT=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:t=x.b
w=2
return A.e(u.a.aA("signature_requests").cW(A.Q(["status","cancelled"],t,t)).b0("id",d),$async$UT)
case 2:return A.k(null,v)}})
return A.l($async$UT,v)},
OI(d){return this.aCP(d)},
aCP(d){var w=0,v=A.m(x.C),u,t=this,s,r,q,p,o
var $async$OI=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=x.w
q=x.b
o=x.d
w=3
return A.e(t.a.d4("get_signing_request",A.Q(["p_id",d],r,q),q),$async$OI)
case 3:p=o.a(f)
if(p==null)p=[]
s=J.aw(p)
if(s.gW(p)){u=null
w=1
break}u=B.c59(A.aM(x.B.a(s.ga9(p)),r,q))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$OI,v)},
Pw(d,e,f,g){return this.aFS(d,e,f,g)},
aFS(d,e,f,g){var w=0,v=A.m(x.w),u,t=this,s,r,q
var $async$Pw=A.i(function(h,i){if(h===1)return A.j(i,v)
for(;;)switch(w){case 0:s=e?"drawn":"typed"
r=x.b
q=A
w=3
return A.e(t.a.d4("submit_signature",A.Q(["p_request_id",f,"p_signer_name",g,"p_signature_type",s,"p_signature_data",d],x.w,r),r),$async$Pw)
case 3:u=q.U(i)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$Pw,v)}}
B.Ne.prototype={
H(){return"SignatureRequestStatus."+this.b}}
B.nl.prototype={
gbE(){return this.a},
gcE(){return this.c}}
var z=a.updateTypes(["AU(am)"])
B.c0Q.prototype={
$1(d){return new B.AU(d.T($.dD(),x.k))},
$S:z+0};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.c0Q,A.cf)
v(A.D,[B.AU,B.nl])
w(B.Ne,A.h7)})()
var y={d:"id, room_id, title, document_text, signer_name, signer_email, message, status, created_at, evidence_id, evidence_items(filename)"}
var x=(function rtii(){var w=A.J
return{n:w("x<nl>"),F:w("v<nl>"),B:w("ab<@,@>"),c:w("nl"),w:w("f"),k:w("h5"),b:w("@"),d:w("v<@>?"),C:w("nl?"),v:w("~")}})();(function constants(){C.ND=new A.ag(57791,"MaterialIcons",null,!1)
C.Os=new A.aK(C.ND,18,null,null,null)
C.t2=new B.Ne(0,"pending")
C.a5V=new B.Ne(1,"signed")
C.fiV=new B.Ne(2,"declined")
C.fiW=new B.Ne(3,"cancelled")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cVy","a9R",()=>A.eo(new B.c0Q(),A.J("AU")))})()};
(a=>{a["yLc+GDookWmWtT4kKeErrfgKJ4U="]=a.current})($__dart_deferred_initializers__);