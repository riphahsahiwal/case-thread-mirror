((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={bZL:function bZL(){},Ax:function Ax(d){this.a=d},
cIK(d){var w
A:{if("signed"===d){w=C.a5n
break A}if("declined"===d){w=C.fi7
break A}if("cancelled"===d){w=C.fi8
break A}w=C.rW
break A}return w},
cjf(d){var w
switch(d.a){case 0:w="Pending"
break
case 1:w="Signed"
break
case 2:w="Declined"
break
case 3:w="Cancelled"
break
default:w=null}return w},
c31(d){var w,v,u,t,s,r,q=A.Z(d.h(0,"id")),p=A.ab(d.h(0,"room_id"))
if(p==null)p=""
w=A.Z(d.h(0,"title"))
v=A.ab(d.h(0,"document_text"))
if(v==null)v=""
u=A.Z(d.h(0,"signer_name"))
t=A.ab(d.h(0,"signer_email"))
s=A.ab(d.h(0,"message"))
if(s==null)s=""
r=A.ab(d.h(0,"status"))
r=B.cIK(r==null?"pending":r)
A.ep(A.Z(d.h(0,"created_at")))
return new B.nd(q,p,w,v,u,t,s,r,A.ab(d.h(0,"evidence_id")),A.ab(d.h(0,"evidence_filename")))},
MV:function MV(d,e){this.a=d
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
B=a.updateHolder(c[57],B)
C=c[161]
B.Ax.prototype={
jJ(d){return this.br7(d)},
br7(d){var w=0,v=A.n(x.F),u,t=this,s,r,q,p,o,n,m,l
var $async$jJ=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:w=3
return A.d(t.a.aL("signature_requests").bz(y.d).b7("room_id",d).hr("created_at",!1).k5(100),$async$jJ)
case 3:m=f
l=A.c([],x.n)
for(s=J.aP(m),r=x.B,q=x.w,p=x.b;s.q();){o=A.aU(r.a(s.gI()),q,p)
n=o.h(0,"evidence_items")
if(r.b(n))o.l(0,"evidence_filename",A.ab(n.h(0,"filename")))
l.push(B.c31(o))}u=l
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$jJ,v)},
iW(d){return this.bkT(d)},
bkT(d){var w=0,v=A.n(x.c),u,t=this,s,r,q,p,o,n,m,l
var $async$iW=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.gcv().e.a
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
return A.d(p.ef(0,r).bz(y.d).hX(0),$async$iW)
case 3:u=m.c31(l.aU(f,o,s))
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$iW,v)},
Up(d){return this.bil(d)},
bil(d){var w=0,v=A.n(x.v),u=this,t
var $async$Up=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:t=x.b
w=2
return A.d(u.a.aL("signature_requests").cX(A.R(["status","cancelled"],t,t)).b7("id",d),$async$Up)
case 2:return A.l(null,v)}})
return A.m($async$Up,v)},
Oi(d){return this.aC0(d)},
aC0(d){var w=0,v=A.n(x.C),u,t=this,s,r,q,p,o
var $async$Oi=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:r=x.w
q=x.b
o=x.d
w=3
return A.d(t.a.dj("get_signing_request",A.R(["p_id",d],r,q),q),$async$Oi)
case 3:p=o.a(f)
if(p==null)p=[]
s=J.av(p)
if(s.gU(p)){u=null
w=1
break}u=B.c31(A.aU(x.B.a(s.ga9(p)),r,q))
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$Oi,v)},
P7(d,e,f,g){return this.aF0(d,e,f,g)},
aF0(d,e,f,g){var w=0,v=A.n(x.w),u,t=this,s,r,q
var $async$P7=A.j(function(h,i){if(h===1)return A.k(i,v)
for(;;)switch(w){case 0:s=e?"drawn":"typed"
r=x.b
q=A
w=3
return A.d(t.a.dj("submit_signature",A.R(["p_request_id",f,"p_signer_name",g,"p_signature_type",s,"p_signature_data",d],x.w,r),r),$async$P7)
case 3:u=q.Z(i)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$P7,v)}}
B.MV.prototype={
H(){return"SignatureRequestStatus."+this.b}}
B.nd.prototype={
gbP(){return this.a}}
var z=a.updateTypes(["Ax(at)"])
B.bZL.prototype={
$1(d){return new B.Ax(d.V($.e1(),x.k))},
$S:z+0};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.bZL,A.cC)
v(A.D,[B.Ax,B.nd])
w(B.MV,A.hy)})()
var y={d:"id, room_id, title, document_text, signer_name, signer_email, message, status, created_at, evidence_id, evidence_items(filename)"}
var x=(function rtii(){var w=A.O
return{n:w("y<nd>"),F:w("w<nd>"),B:w("af<@,@>"),c:w("nd"),w:w("f"),k:w("iO"),b:w("@"),d:w("w<@>?"),C:w("nd?"),v:w("~")}})();(function constants(){C.Na=new A.ai(57791,"MaterialIcons",null,!1)
C.NV=new A.aM(C.Na,18,null,null,null)
C.rW=new B.MV(0,"pending")
C.a5n=new B.MV(1,"signed")
C.fi7=new B.MV(2,"declined")
C.fi8=new B.MV(3,"cancelled")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cSS","a9j",()=>A.eX(new B.bZL(),A.O("Ax")))})()};
(a=>{a["ptCXx78RaYed2oIo09OSJ02u2Ws="]=a.current})($__dart_deferred_initializers__);