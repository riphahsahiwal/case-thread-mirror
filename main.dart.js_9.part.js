((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={bZ7:function bZ7(){},Aw:function Aw(d){this.a=d},
cI2(d){var w
A:{if("signed"===d){w=C.a5e
break A}if("declined"===d){w=C.fi1
break A}if("cancelled"===d){w=C.fi2
break A}w=C.rV
break A}return w},
ciA(d){var w
switch(d.a){case 0:w="Pending"
break
case 1:w="Signed"
break
case 2:w="Declined"
break
case 3:w="Cancelled"
break
default:w=null}return w},
c2m(d){var w,v,u,t,s,r,q=A.Y(d.h(0,"id")),p=A.ab(d.h(0,"room_id"))
if(p==null)p=""
w=A.Y(d.h(0,"title"))
v=A.ab(d.h(0,"document_text"))
if(v==null)v=""
u=A.Y(d.h(0,"signer_name"))
t=A.ab(d.h(0,"signer_email"))
s=A.ab(d.h(0,"message"))
if(s==null)s=""
r=A.ab(d.h(0,"status"))
r=B.cI2(r==null?"pending":r)
A.ej(A.Y(d.h(0,"created_at")))
return new B.nb(q,p,w,v,u,t,s,r,A.ab(d.h(0,"evidence_id")),A.ab(d.h(0,"evidence_filename")))},
MP:function MP(d,e){this.a=d
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
B=a.updateHolder(c[59],B)
C=c[166]
B.Aw.prototype={
jK(d){return this.bqP(d)},
bqP(d){var w=0,v=A.n(x.F),u,t=this,s,r,q,p,o,n,m,l
var $async$jK=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:w=3
return A.d(t.a.aM("signature_requests").bz(y.d).b6("room_id",d).ht("created_at",!1).k5(100),$async$jK)
case 3:m=f
l=A.c([],x.n)
for(s=J.aT(m),r=x.B,q=x.w,p=x.b;s.q();){o=A.aR(r.a(s.gJ()),q,p)
n=o.h(0,"evidence_items")
if(r.b(n))o.l(0,"evidence_filename",A.ab(n.h(0,"filename")))
l.push(B.c2m(o))}u=l
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$jK,v)},
iV(d){return this.bkz(d)},
bkz(d){var w=0,v=A.n(x.c),u,t=this,s,r,q,p,o,n,m,l
var $async$iV=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.gcC().e.a
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
return A.d(p.e8(0,r).bz(y.d).hZ(0),$async$iV)
case 3:u=m.c2m(l.aR(f,o,s))
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$iV,v)},
Ui(d){return this.bi_(d)},
bi_(d){var w=0,v=A.n(x.v),u=this,t
var $async$Ui=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:t=x.b
w=2
return A.d(u.a.aM("signature_requests").cV(A.R(["status","cancelled"],t,t)).b6("id",d),$async$Ui)
case 2:return A.l(null,v)}})
return A.m($async$Ui,v)},
Od(d){return this.aBU(d)},
aBU(d){var w=0,v=A.n(x.C),u,t=this,s,r,q,p,o
var $async$Od=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:r=x.w
q=x.b
o=x.d
w=3
return A.d(t.a.dj("get_signing_request",A.R(["p_id",d],r,q),q),$async$Od)
case 3:p=o.a(f)
if(p==null)p=[]
s=J.av(p)
if(s.gU(p)){u=null
w=1
break}u=B.c2m(A.aR(x.B.a(s.ga9(p)),r,q))
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$Od,v)},
P2(d,e,f,g){return this.aEW(d,e,f,g)},
aEW(d,e,f,g){var w=0,v=A.n(x.w),u,t=this,s,r,q
var $async$P2=A.j(function(h,i){if(h===1)return A.k(i,v)
for(;;)switch(w){case 0:s=e?"drawn":"typed"
r=x.b
q=A
w=3
return A.d(t.a.dj("submit_signature",A.R(["p_request_id",f,"p_signer_name",g,"p_signature_type",s,"p_signature_data",d],x.w,r),r),$async$P2)
case 3:u=q.Y(i)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$P2,v)}}
B.MP.prototype={
H(){return"SignatureRequestStatus."+this.b}}
B.nb.prototype={
gbT(){return this.a}}
var z=a.updateTypes(["Aw(as)"])
B.bZ7.prototype={
$1(d){return new B.Aw(d.V($.dZ(),x.k))},
$S:z+0};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.bZ7,A.cw)
v(A.C,[B.Aw,B.nb])
w(B.MP,A.hR)})()
var y={d:"id, room_id, title, document_text, signer_name, signer_email, message, status, created_at, evidence_id, evidence_items(filename)"}
var x=(function rtii(){var w=A.L
return{n:w("y<nb>"),F:w("w<nb>"),B:w("af<@,@>"),c:w("nb"),w:w("f"),k:w("iq"),b:w("@"),d:w("w<@>?"),C:w("nb?"),v:w("~")}})();(function constants(){C.N8=new A.ak(57791,"MaterialIcons",null,!1)
C.NP=new A.aN(C.N8,18,null,null,null)
C.rV=new B.MP(0,"pending")
C.a5e=new B.MP(1,"signed")
C.fi1=new B.MP(2,"declined")
C.fi2=new B.MP(3,"cancelled")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cSd","a9a",()=>A.eM(new B.bZ7(),A.L("Aw")))})()};
(a=>{a["ADhUsqJAGSr6pVC0i+TZWNcTc0Q="]=a.current})($__dart_deferred_initializers__);