((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={c0P:function c0P(){},AL:function AL(d){this.a=d},
cLa(d){var w
A:{if("signed"===d){w=C.a5y
break A}if("declined"===d){w=C.fix
break A}if("cancelled"===d){w=C.fiy
break A}w=C.rZ
break A}return w},
cls(d){var w
switch(d.a){case 0:w="Pending"
break
case 1:w="Signed"
break
case 2:w="Declined"
break
case 3:w="Cancelled"
break
default:w=null}return w},
c58(d){var w,v,u,t,s,r,q=A.Z(d.h(0,"id")),p=A.a8(d.h(0,"room_id"))
if(p==null)p=""
w=A.Z(d.h(0,"title"))
v=A.a8(d.h(0,"document_text"))
if(v==null)v=""
u=A.Z(d.h(0,"signer_name"))
t=A.a8(d.h(0,"signer_email"))
s=A.a8(d.h(0,"message"))
if(s==null)s=""
r=A.a8(d.h(0,"status"))
r=B.cLa(r==null?"pending":r)
A.eq(A.Z(d.h(0,"created_at")))
return new B.ng(q,p,w,v,u,t,s,r,A.a8(d.h(0,"evidence_id")),A.a8(d.h(0,"evidence_filename")))},
N8:function N8(d,e){this.a=d
this.b=e},
ng:function ng(d,e,f,g,h,i,j,k,l,m){var _=this
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
C=c[168]
B.AL.prototype={
jJ(d){return this.brR(d)},
brR(d){var w=0,v=A.m(x.F),u,t=this,s,r,q,p,o,n,m,l
var $async$jJ=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(t.a.aL("signature_requests").by(y.d).b7("room_id",d).ht("created_at",!1).k5(100),$async$jJ)
case 3:m=f
l=A.c([],x.n)
for(s=J.aQ(m),r=x.B,q=x.w,p=x.b;s.q();){o=A.aP(r.a(s.gI()),q,p)
n=o.h(0,"evidence_items")
if(r.b(n))o.l(0,"evidence_filename",A.a8(n.h(0,"filename")))
l.push(B.c58(o))}u=l
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$jJ,v)},
iW(d){return this.blB(d)},
blB(d){var w=0,v=A.m(x.c),u,t=this,s,r,q,p,o,n,m,l
var $async$iW=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.gcq().e.a
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
return A.d(p.ef(0,r).by(y.d).hX(0),$async$iW)
case 3:u=m.c58(l.aP(f,o,s))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$iW,v)},
UA(d){return this.bj3(d)},
bj3(d){var w=0,v=A.m(x.v),u=this,t
var $async$UA=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:t=x.b
w=2
return A.d(u.a.aL("signature_requests").cY(A.Q(["status","cancelled"],t,t)).b7("id",d),$async$UA)
case 2:return A.k(null,v)}})
return A.l($async$UA,v)},
Oq(d){return this.aCq(d)},
aCq(d){var w=0,v=A.m(x.C),u,t=this,s,r,q,p,o
var $async$Oq=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=x.w
q=x.b
o=x.d
w=3
return A.d(t.a.cV("get_signing_request",A.Q(["p_id",d],r,q),q),$async$Oq)
case 3:p=o.a(f)
if(p==null)p=[]
s=J.av(p)
if(s.gW(p)){u=null
w=1
break}u=B.c58(A.aP(x.B.a(s.ga9(p)),r,q))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$Oq,v)},
Pf(d,e,f,g){return this.aFq(d,e,f,g)},
aFq(d,e,f,g){var w=0,v=A.m(x.w),u,t=this,s,r,q
var $async$Pf=A.i(function(h,i){if(h===1)return A.j(i,v)
for(;;)switch(w){case 0:s=e?"drawn":"typed"
r=x.b
q=A
w=3
return A.d(t.a.cV("submit_signature",A.Q(["p_request_id",f,"p_signer_name",g,"p_signature_type",s,"p_signature_data",d],x.w,r),r),$async$Pf)
case 3:u=q.Z(i)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$Pf,v)}}
B.N8.prototype={
H(){return"SignatureRequestStatus."+this.b}}
B.ng.prototype={
gbQ(){return this.a}}
var z=a.updateTypes(["AL(ao)"])
B.c0P.prototype={
$1(d){return new B.AL(d.T($.dV(),x.k))},
$S:z+0};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.c0P,A.cA)
v(A.D,[B.AL,B.ng])
w(B.N8,A.hp)})()
var y={d:"id, room_id, title, document_text, signer_name, signer_email, message, status, created_at, evidence_id, evidence_items(filename)"}
var x=(function rtii(){var w=A.O
return{n:w("x<ng>"),F:w("w<ng>"),B:w("ae<@,@>"),c:w("ng"),w:w("f"),k:w("iS"),b:w("@"),d:w("w<@>?"),C:w("ng?"),v:w("~")}})();(function constants(){C.Nj=new A.ah(57791,"MaterialIcons",null,!1)
C.O1=new A.aN(C.Nj,18,null,null,null)
C.rZ=new B.N8(0,"pending")
C.a5y=new B.N8(1,"signed")
C.fix=new B.N8(2,"declined")
C.fiy=new B.N8(3,"cancelled")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cVo","a9E",()=>A.eN(new B.c0P(),A.O("AL")))})()};
(a=>{a["+wCyA8zZuaESli+i2SPeFfjASSk="]=a.current})($__dart_deferred_initializers__);