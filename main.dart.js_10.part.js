((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={bZv:function bZv(){},Az:function Az(d){this.a=d},
cIx(d){var w
A:{if("signed"===d){w=C.a5f
break A}if("declined"===d){w=C.fi8
break A}if("cancelled"===d){w=C.fi9
break A}w=C.rV
break A}return w},
ciY(d){var w
switch(d.a){case 0:w="Pending"
break
case 1:w="Signed"
break
case 2:w="Declined"
break
case 3:w="Cancelled"
break
default:w=null}return w},
c2K(d){var w,v,u,t,s,r,q=A.Y(d.h(0,"id")),p=A.ab(d.h(0,"room_id"))
if(p==null)p=""
w=A.Y(d.h(0,"title"))
v=A.ab(d.h(0,"document_text"))
if(v==null)v=""
u=A.Y(d.h(0,"signer_name"))
t=A.ab(d.h(0,"signer_email"))
s=A.ab(d.h(0,"message"))
if(s==null)s=""
r=A.ab(d.h(0,"status"))
r=B.cIx(r==null?"pending":r)
A.ek(A.Y(d.h(0,"created_at")))
return new B.nd(q,p,w,v,u,t,s,r,A.ab(d.h(0,"evidence_id")),A.ab(d.h(0,"evidence_filename")))},
MU:function MU(d,e){this.a=d
this.b=e},
nd:function nd(d,e,f,g,h,i,j,k,l,m){var _=this
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
B=a.updateHolder(c[60],B)
C=c[170]
B.Az.prototype={
jK(d){return this.bqZ(d)},
bqZ(d){var w=0,v=A.n(x.F),u,t=this,s,r,q,p,o,n,m,l
var $async$jK=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:w=3
return A.d(t.a.aK("signature_requests").bz(y.d).b3("room_id",d).ht("created_at",!1).k6(100),$async$jK)
case 3:m=f
l=A.c([],x.n)
for(s=J.aT(m),r=x.B,q=x.w,p=x.b;s.q();){o=A.aR(r.a(s.gJ()),q,p)
n=o.h(0,"evidence_items")
if(r.b(n))o.l(0,"evidence_filename",A.ab(n.h(0,"filename")))
l.push(B.c2K(o))}u=l
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$jK,v)},
iV(d){return this.bkJ(d)},
bkJ(d){var w=0,v=A.n(x.c),u,t=this,s,r,q,p,o,n,m,l
var $async$iV=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.gcC().e.a
n=(o==null?null:o.r).a
p=p.aK("signature_requests")
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
case 3:u=m.c2K(l.aR(f,o,s))
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$iV,v)},
Ul(d){return this.bi9(d)},
bi9(d){var w=0,v=A.n(x.v),u=this,t
var $async$Ul=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:t=x.b
w=2
return A.d(u.a.aK("signature_requests").cV(A.Q(["status","cancelled"],t,t)).b3("id",d),$async$Ul)
case 2:return A.l(null,v)}})
return A.m($async$Ul,v)},
Og(d){return this.aBZ(d)},
aBZ(d){var w=0,v=A.n(x.C),u,t=this,s,r,q,p,o
var $async$Og=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:r=x.w
q=x.b
o=x.d
w=3
return A.d(t.a.d8("get_signing_request",A.Q(["p_id",d],r,q),q),$async$Og)
case 3:p=o.a(f)
if(p==null)p=[]
s=J.av(p)
if(s.gU(p)){u=null
w=1
break}u=B.c2K(A.aR(x.B.a(s.ga9(p)),r,q))
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$Og,v)},
P4(d,e,f,g){return this.aF0(d,e,f,g)},
aF0(d,e,f,g){var w=0,v=A.n(x.w),u,t=this,s,r,q
var $async$P4=A.j(function(h,i){if(h===1)return A.k(i,v)
for(;;)switch(w){case 0:s=e?"drawn":"typed"
r=x.b
q=A
w=3
return A.d(t.a.d8("submit_signature",A.Q(["p_request_id",f,"p_signer_name",g,"p_signature_type",s,"p_signature_data",d],x.w,r),r),$async$P4)
case 3:u=q.Y(i)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$P4,v)}}
B.MU.prototype={
H(){return"SignatureRequestStatus."+this.b}}
B.nd.prototype={
gbQ(){return this.a}}
var z=a.updateTypes(["Az(ao)"])
B.bZv.prototype={
$1(d){return new B.Az(d.V($.dI(),x.k))},
$S:z+0};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.bZv,A.cu)
v(A.C,[B.Az,B.nd])
w(B.MU,A.hA)})()
var y={d:"id, room_id, title, document_text, signer_name, signer_email, message, status, created_at, evidence_id, evidence_items(filename)"}
var x=(function rtii(){var w=A.L
return{n:w("x<nd>"),F:w("w<nd>"),B:w("ae<@,@>"),c:w("nd"),w:w("f"),k:w("i7"),b:w("@"),d:w("w<@>?"),C:w("nd?"),v:w("~")}})();(function constants(){C.N8=new A.ak(57791,"MaterialIcons",null,!1)
C.NQ=new A.aN(C.N8,18,null,null,null)
C.rV=new B.MU(0,"pending")
C.a5f=new B.MU(1,"signed")
C.fi8=new B.MU(2,"declined")
C.fi9=new B.MU(3,"cancelled")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cSL","a9e",()=>A.eC(new B.bZv(),A.L("Az")))})()};
(a=>{a["ItENxrYRFzzgh+TqGDIxAhxyhso="]=a.current})($__dart_deferred_initializers__);