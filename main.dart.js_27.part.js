((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={c1R:function c1R(){},B0:function B0(d){this.a=d},
cMg(d){var w
A:{if("signed"===d){w=C.a5V
break A}if("declined"===d){w=C.fjg
break A}if("cancelled"===d){w=C.fjh
break A}w=C.t0
break A}return w},
cmB(d){var w
switch(d.a){case 0:w="Pending"
break
case 1:w="Signed"
break
case 2:w="Declined"
break
case 3:w="Cancelled"
break
default:w=null}return w},
c6a(d){var w,v,u,t,s,r,q=A.U(d.h(0,"id")),p=A.a8(d.h(0,"room_id"))
if(p==null)p=""
w=A.U(d.h(0,"title"))
v=A.a8(d.h(0,"document_text"))
if(v==null)v=""
u=A.U(d.h(0,"signer_name"))
t=A.a8(d.h(0,"signer_email"))
s=A.a8(d.h(0,"message"))
if(s==null)s=""
r=A.a8(d.h(0,"status"))
r=B.cMg(r==null?"pending":r)
A.dX(A.U(d.h(0,"created_at")))
return new B.no(q,p,w,v,u,t,s,r,A.a8(d.h(0,"evidence_id")),A.a8(d.h(0,"evidence_filename")))},
Nr:function Nr(d,e){this.a=d
this.b=e},
no:function no(d,e,f,g,h,i,j,k,l,m){var _=this
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
B.B0.prototype={
jR(d){return this.bsE(d)},
bsE(d){var w=0,v=A.m(x.F),u,t=this,s,r,q,p,o,n,m,l
var $async$jR=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.e(t.a.az("signature_requests").bn(y.d).aY("room_id",d).fE("created_at",!1).j7(100),$async$jR)
case 3:m=f
l=A.c([],x.n)
for(s=J.aK(m),r=x.B,q=x.w,p=x.b;s.q();){o=A.aM(r.a(s.gI()),q,p)
n=o.h(0,"evidence_items")
if(r.b(n))o.l(0,"evidence_filename",A.a8(n.h(0,"filename")))
l.push(B.c6a(o))}u=l
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$jR,v)},
j1(d){return this.bmn(d)},
bmn(d){var w=0,v=A.m(x.c),u,t=this,s,r,q,p,o,n,m,l
var $async$j1=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.gcb().e.a
n=(o==null?null:o.r).a
p=p.az("signature_requests")
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
return A.e(p.e1(0,r).bn(y.d).i2(0),$async$j1)
case 3:u=m.c6a(l.aM(f,o,s))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$j1,v)},
UT(d){return this.bjQ(d)},
bjQ(d){var w=0,v=A.m(x.v),u=this,t
var $async$UT=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:t=x.b
w=2
return A.e(u.a.az("signature_requests").cX(A.Q(["status","cancelled"],t,t)).aY("id",d),$async$UT)
case 2:return A.k(null,v)}})
return A.l($async$UT,v)},
OJ(d){return this.aCX(d)},
aCX(d){var w=0,v=A.m(x.C),u,t=this,s,r,q,p,o
var $async$OJ=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=x.w
q=x.b
o=x.d
w=3
return A.e(t.a.d5("get_signing_request",A.Q(["p_id",d],r,q),q),$async$OJ)
case 3:p=o.a(f)
if(p==null)p=[]
s=J.aw(p)
if(s.gW(p)){u=null
w=1
break}u=B.c6a(A.aM(x.B.a(s.ga9(p)),r,q))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$OJ,v)},
Px(d,e,f,g){return this.aG_(d,e,f,g)},
aG_(d,e,f,g){var w=0,v=A.m(x.w),u,t=this,s,r,q
var $async$Px=A.i(function(h,i){if(h===1)return A.j(i,v)
for(;;)switch(w){case 0:s=e?"drawn":"typed"
r=x.b
q=A
w=3
return A.e(t.a.d5("submit_signature",A.Q(["p_request_id",f,"p_signer_name",g,"p_signature_type",s,"p_signature_data",d],x.w,r),r),$async$Px)
case 3:u=q.U(i)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$Px,v)}}
B.Nr.prototype={
H(){return"SignatureRequestStatus."+this.b}}
B.no.prototype={
gbE(){return this.a},
gcw(){return this.c}}
var z=a.updateTypes(["B0(al)"])
B.c1R.prototype={
$1(d){return new B.B0(d.T($.dB(),x.k))},
$S:z+0};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.c1R,A.ci)
v(A.E,[B.B0,B.no])
w(B.Nr,A.h7)})()
var y={d:"id, room_id, title, document_text, signer_name, signer_email, message, status, created_at, evidence_id, evidence_items(filename)"}
var x=(function rtii(){var w=A.J
return{n:w("x<no>"),F:w("w<no>"),B:w("ac<@,@>"),c:w("no"),w:w("f"),k:w("h5"),b:w("@"),d:w("w<@>?"),C:w("no?"),v:w("~")}})();(function constants(){C.ND=new A.ah(57791,"MaterialIcons",null,!1)
C.Or=new A.aL(C.ND,18,null,null,null)
C.t0=new B.Nr(0,"pending")
C.a5V=new B.Nr(1,"signed")
C.fjg=new B.Nr(2,"declined")
C.fjh=new B.Nr(3,"cancelled")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cWG","aa6",()=>A.ep(new B.c1R(),A.J("B0")))})()};
(a=>{a["64Y2tyCeonSe8thegyOlWA7Ga6g="]=a.current})($__dart_deferred_initializers__);