((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={bZe:function bZe(){},Aw:function Aw(d){this.a=d},
cIc(d){var w
A:{if("signed"===d){w=C.a5i
break A}if("declined"===d){w=C.fhZ
break A}if("cancelled"===d){w=C.fi_
break A}w=C.rV
break A}return w},
ciK(d){var w
switch(d.a){case 0:w="Pending"
break
case 1:w="Signed"
break
case 2:w="Declined"
break
case 3:w="Cancelled"
break
default:w=null}return w},
c2v(d){var w,v,u,t,s,r,q=A.Y(d.h(0,"id")),p=A.ab(d.h(0,"room_id"))
if(p==null)p=""
w=A.Y(d.h(0,"title"))
v=A.ab(d.h(0,"document_text"))
if(v==null)v=""
u=A.Y(d.h(0,"signer_name"))
t=A.ab(d.h(0,"signer_email"))
s=A.ab(d.h(0,"message"))
if(s==null)s=""
r=A.ab(d.h(0,"status"))
r=B.cIc(r==null?"pending":r)
A.em(A.Y(d.h(0,"created_at")))
return new B.nc(q,p,w,v,u,t,s,r,A.ab(d.h(0,"evidence_id")),A.ab(d.h(0,"evidence_filename")))},
MP:function MP(d,e){this.a=d
this.b=e},
nc:function nc(d,e,f,g,h,i,j,k,l,m){var _=this
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
C=c[160]
B.Aw.prototype={
jJ(d){return this.br0(d)},
br0(d){var w=0,v=A.n(x.F),u,t=this,s,r,q,p,o,n,m,l
var $async$jJ=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:w=3
return A.d(t.a.aL("signature_requests").by(y.d).b7("room_id",d).hr("created_at",!1).k5(100),$async$jJ)
case 3:m=f
l=A.c([],x.n)
for(s=J.aR(m),r=x.B,q=x.w,p=x.b;s.q();){o=A.aU(r.a(s.gJ()),q,p)
n=o.h(0,"evidence_items")
if(r.b(n))o.l(0,"evidence_filename",A.ab(n.h(0,"filename")))
l.push(B.c2v(o))}u=l
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$jJ,v)},
iW(d){return this.bkL(d)},
bkL(d){var w=0,v=A.n(x.c),u,t=this,s,r,q,p,o,n,m,l
var $async$iW=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.gcw().e.a
n=(o==null?null:o.r).a
p=p.aL("signature_requests")
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
return A.d(p.ef(0,r).by(y.d).hX(0),$async$iW)
case 3:u=m.c2v(l.aU(f,o,s))
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$iW,v)},
Um(d){return this.bib(d)},
bib(d){var w=0,v=A.n(x.v),u=this,t
var $async$Um=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:t=x.b
w=2
return A.d(u.a.aL("signature_requests").cX(A.R(["status","cancelled"],t,t)).b7("id",d),$async$Um)
case 2:return A.l(null,v)}})
return A.m($async$Um,v)},
Oh(d){return this.aBW(d)},
aBW(d){var w=0,v=A.n(x.C),u,t=this,s,r,q,p,o
var $async$Oh=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:r=x.w
q=x.b
o=x.d
w=3
return A.d(t.a.dj("get_signing_request",A.R(["p_id",d],r,q),q),$async$Oh)
case 3:p=o.a(f)
if(p==null)p=[]
s=J.av(p)
if(s.gU(p)){u=null
w=1
break}u=B.c2v(A.aU(x.B.a(s.ga9(p)),r,q))
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$Oh,v)},
P6(d,e,f,g){return this.aEW(d,e,f,g)},
aEW(d,e,f,g){var w=0,v=A.n(x.w),u,t=this,s,r,q
var $async$P6=A.j(function(h,i){if(h===1)return A.k(i,v)
for(;;)switch(w){case 0:s=e?"drawn":"typed"
r=x.b
q=A
w=3
return A.d(t.a.dj("submit_signature",A.R(["p_request_id",f,"p_signer_name",g,"p_signature_type",s,"p_signature_data",d],x.w,r),r),$async$P6)
case 3:u=q.Y(i)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$P6,v)}}
B.MP.prototype={
H(){return"SignatureRequestStatus."+this.b}}
B.nc.prototype={
gbS(){return this.a}}
var z=a.updateTypes(["Aw(as)"])
B.bZe.prototype={
$1(d){return new B.Aw(d.V($.e0(),x.k))},
$S:z+0};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.bZe,A.cB)
v(A.C,[B.Aw,B.nc])
w(B.MP,A.hQ)})()
var y={d:"id, room_id, title, document_text, signer_name, signer_email, message, status, created_at, evidence_id, evidence_items(filename)"}
var x=(function rtii(){var w=A.L
return{n:w("y<nc>"),F:w("w<nc>"),B:w("af<@,@>"),c:w("nc"),w:w("f"),k:w("ir"),b:w("@"),d:w("w<@>?"),C:w("nc?"),v:w("~")}})();(function constants(){C.N6=new A.aj(57791,"MaterialIcons",null,!1)
C.NQ=new A.aO(C.N6,18,null,null,null)
C.rV=new B.MP(0,"pending")
C.a5i=new B.MP(1,"signed")
C.fhZ=new B.MP(2,"declined")
C.fi_=new B.MP(3,"cancelled")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cSk","a9c",()=>A.eY(new B.bZe(),A.L("Aw")))})()};
(a=>{a["6x9wDr5M4XPxporZfIb95It5ruA="]=a.current})($__dart_deferred_initializers__);