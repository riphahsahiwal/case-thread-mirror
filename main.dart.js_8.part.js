((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={bYY:function bYY(){},Au:function Au(d){this.a=d},
cHU(d){var w
A:{if("signed"===d){w=C.a5h
break A}if("declined"===d){w=C.fhW
break A}if("cancelled"===d){w=C.fhX
break A}w=C.rW
break A}return w},
cis(d){var w
switch(d.a){case 0:w="Pending"
break
case 1:w="Signed"
break
case 2:w="Declined"
break
case 3:w="Cancelled"
break
default:w=null}return w},
c2d(d){var w,v,u,t,s,r,q=A.Z(d.h(0,"id")),p=A.ab(d.h(0,"room_id"))
if(p==null)p=""
w=A.Z(d.h(0,"title"))
v=A.ab(d.h(0,"document_text"))
if(v==null)v=""
u=A.Z(d.h(0,"signer_name"))
t=A.ab(d.h(0,"signer_email"))
s=A.ab(d.h(0,"message"))
if(s==null)s=""
r=A.ab(d.h(0,"status"))
r=B.cHU(r==null?"pending":r)
A.el(A.Z(d.h(0,"created_at")))
return new B.nb(q,p,w,v,u,t,s,r,A.ab(d.h(0,"evidence_id")),A.ab(d.h(0,"evidence_filename")))},
ML:function ML(d,e){this.a=d
this.b=e},
nb:function nb(d,e,f,g,h,i,j,k,l,m){var _=this
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
B=a.updateHolder(c[58],B)
C=c[161]
B.Au.prototype={
jJ(d){return this.bqO(d)},
bqO(d){var w=0,v=A.n(x.F),u,t=this,s,r,q,p,o,n,m,l
var $async$jJ=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:w=3
return A.d(t.a.aM("signature_requests").bz(y.d).b7("room_id",d).hr("created_at",!1).k5(100),$async$jJ)
case 3:m=f
l=A.c([],x.n)
for(s=J.aV(m),r=x.B,q=x.w,p=x.b;s.q();){o=A.aS(r.a(s.gK()),q,p)
n=o.h(0,"evidence_items")
if(r.b(n))o.l(0,"evidence_filename",A.ab(n.h(0,"filename")))
l.push(B.c2d(o))}u=l
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$jJ,v)},
iV(d){return this.bky(d)},
bky(d){var w=0,v=A.n(x.c),u,t=this,s,r,q,p,o,n,m,l
var $async$iV=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.gcw().e.a
n=(o==null?null:o.r).a
p=p.aM("signature_requests")
o=x.w
s=x.b
r=A.D(o,s)
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
return A.d(p.ef(0,r).bz(y.d).hX(0),$async$iV)
case 3:u=m.c2d(l.aS(f,o,s))
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$iV,v)},
Ug(d){return this.bhZ(d)},
bhZ(d){var w=0,v=A.n(x.v),u=this,t
var $async$Ug=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:t=x.b
w=2
return A.d(u.a.aM("signature_requests").cW(A.R(["status","cancelled"],t,t)).b7("id",d),$async$Ug)
case 2:return A.l(null,v)}})
return A.m($async$Ug,v)},
Ob(d){return this.aBP(d)},
aBP(d){var w=0,v=A.n(x.C),u,t=this,s,r,q,p,o
var $async$Ob=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:r=x.w
q=x.b
o=x.d
w=3
return A.d(t.a.dj("get_signing_request",A.R(["p_id",d],r,q),q),$async$Ob)
case 3:p=o.a(f)
if(p==null)p=[]
s=J.av(p)
if(s.gU(p)){u=null
w=1
break}u=B.c2d(A.aS(x.B.a(s.ga9(p)),r,q))
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$Ob,v)},
P0(d,e,f,g){return this.aEP(d,e,f,g)},
aEP(d,e,f,g){var w=0,v=A.n(x.w),u,t=this,s,r,q
var $async$P0=A.j(function(h,i){if(h===1)return A.k(i,v)
for(;;)switch(w){case 0:s=e?"drawn":"typed"
r=x.b
q=A
w=3
return A.d(t.a.dj("submit_signature",A.R(["p_request_id",f,"p_signer_name",g,"p_signature_type",s,"p_signature_data",d],x.w,r),r),$async$P0)
case 3:u=q.Z(i)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$P0,v)}}
B.ML.prototype={
H(){return"SignatureRequestStatus."+this.b}}
B.nb.prototype={
gbS(){return this.a}}
var z=a.updateTypes(["Au(as)"])
B.bYY.prototype={
$1(d){return new B.Au(d.V($.e_(),x.k))},
$S:z+0};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.bYY,A.cy)
v(A.C,[B.Au,B.nb])
w(B.ML,A.hQ)})()
var y={d:"id, room_id, title, document_text, signer_name, signer_email, message, status, created_at, evidence_id, evidence_items(filename)"}
var x=(function rtii(){var w=A.L
return{n:w("y<nb>"),F:w("w<nb>"),B:w("af<@,@>"),c:w("nb"),w:w("f"),k:w("ir"),b:w("@"),d:w("w<@>?"),C:w("nb?"),v:w("~")}})();(function constants(){C.N5=new A.ak(57791,"MaterialIcons",null,!1)
C.NO=new A.aP(C.N5,18,null,null,null)
C.rW=new B.ML(0,"pending")
C.a5h=new B.ML(1,"signed")
C.fhW=new B.ML(2,"declined")
C.fhX=new B.ML(3,"cancelled")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cS1","a9a",()=>A.eY(new B.bYY(),A.L("Au")))})()};
(a=>{a["DMv7iAQ8gtnh2Un/5PeGA+reG9A="]=a.current})($__dart_deferred_initializers__);