((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={c16:function c16(){},AN:function AN(d){this.a=d},
cLq(d){var w
A:{if("signed"===d){w=C.a5E
break A}if("declined"===d){w=C.fiz
break A}if("cancelled"===d){w=C.fiA
break A}w=C.t4
break A}return w},
clG(d){var w
switch(d.a){case 0:w="Pending"
break
case 1:w="Signed"
break
case 2:w="Declined"
break
case 3:w="Cancelled"
break
default:w=null}return w},
c5n(d){var w,v,u,t,s,r,q=A.Z(d.h(0,"id")),p=A.a7(d.h(0,"room_id"))
if(p==null)p=""
w=A.Z(d.h(0,"title"))
v=A.a7(d.h(0,"document_text"))
if(v==null)v=""
u=A.Z(d.h(0,"signer_name"))
t=A.a7(d.h(0,"signer_email"))
s=A.a7(d.h(0,"message"))
if(s==null)s=""
r=A.a7(d.h(0,"status"))
r=B.cLq(r==null?"pending":r)
A.er(A.Z(d.h(0,"created_at")))
return new B.nh(q,p,w,v,u,t,s,r,A.a7(d.h(0,"evidence_id")),A.a7(d.h(0,"evidence_filename")))},
N9:function N9(d,e){this.a=d
this.b=e},
nh:function nh(d,e,f,g,h,i,j,k,l,m){var _=this
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
C=c[167]
B.AN.prototype={
jI(d){return this.brX(d)},
brX(d){var w=0,v=A.m(x.F),u,t=this,s,r,q,p,o,n,m,l
var $async$jI=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(t.a.aL("signature_requests").by(y.d).b7("room_id",d).ht("created_at",!1).k0(100),$async$jI)
case 3:m=f
l=A.c([],x.n)
for(s=J.aO(m),r=x.B,q=x.w,p=x.b;s.q();){o=A.aQ(r.a(s.gI()),q,p)
n=o.h(0,"evidence_items")
if(r.b(n))o.l(0,"evidence_filename",A.a7(n.h(0,"filename")))
l.push(B.c5n(o))}u=l
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$jI,v)},
iV(d){return this.blH(d)},
blH(d){var w=0,v=A.m(x.c),u,t=this,s,r,q,p,o,n,m,l
var $async$iV=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.gcc().e.a
n=(o==null?null:o.r).a
p=p.aL("signature_requests")
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
return A.d(p.ef(0,r).by(y.d).hW(0),$async$iV)
case 3:u=m.c5n(l.aQ(f,o,s))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$iV,v)},
UB(d){return this.bj9(d)},
bj9(d){var w=0,v=A.m(x.v),u=this,t
var $async$UB=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:t=x.b
w=2
return A.d(u.a.aL("signature_requests").cY(A.Q(["status","cancelled"],t,t)).b7("id",d),$async$UB)
case 2:return A.k(null,v)}})
return A.l($async$UB,v)},
Oq(d){return this.aCu(d)},
aCu(d){var w=0,v=A.m(x.C),u,t=this,s,r,q,p,o
var $async$Oq=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=x.w
q=x.b
o=x.d
w=3
return A.d(t.a.cQ("get_signing_request",A.Q(["p_id",d],r,q),q),$async$Oq)
case 3:p=o.a(f)
if(p==null)p=[]
s=J.av(p)
if(s.gW(p)){u=null
w=1
break}u=B.c5n(A.aQ(x.B.a(s.ga9(p)),r,q))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$Oq,v)},
Pg(d,e,f,g){return this.aFv(d,e,f,g)},
aFv(d,e,f,g){var w=0,v=A.m(x.w),u,t=this,s,r,q
var $async$Pg=A.i(function(h,i){if(h===1)return A.j(i,v)
for(;;)switch(w){case 0:s=e?"drawn":"typed"
r=x.b
q=A
w=3
return A.d(t.a.cQ("submit_signature",A.Q(["p_request_id",f,"p_signer_name",g,"p_signature_type",s,"p_signature_data",d],x.w,r),r),$async$Pg)
case 3:u=q.Z(i)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$Pg,v)}}
B.N9.prototype={
H(){return"SignatureRequestStatus."+this.b}}
B.nh.prototype={
gbQ(){return this.a}}
var z=a.updateTypes(["AN(ao)"])
B.c16.prototype={
$1(d){return new B.AN(d.T($.dW(),x.k))},
$S:z+0};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.c16,A.cA)
v(A.D,[B.AN,B.nh])
w(B.N9,A.hp)})()
var y={d:"id, room_id, title, document_text, signer_name, signer_email, message, status, created_at, evidence_id, evidence_items(filename)"}
var x=(function rtii(){var w=A.O
return{n:w("x<nh>"),F:w("w<nh>"),B:w("ae<@,@>"),c:w("nh"),w:w("f"),k:w("iR"),b:w("@"),d:w("w<@>?"),C:w("nh?"),v:w("~")}})();(function constants(){C.Np=new A.ah(57791,"MaterialIcons",null,!1)
C.O7=new A.aP(C.Np,18,null,null,null)
C.t4=new B.N9(0,"pending")
C.a5E=new B.N9(1,"signed")
C.fiz=new B.N9(2,"declined")
C.fiA=new B.N9(3,"cancelled")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cVE","a9G",()=>A.eN(new B.c16(),A.O("AN")))})()};
(a=>{a["soElpg5cb6ufnyNF8a7Nk+YFixI="]=a.current})($__dart_deferred_initializers__);