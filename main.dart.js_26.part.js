((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={c1P:function c1P(){},B0:function B0(d){this.a=d},
cMf(d){var w
A:{if("signed"===d){w=C.a5V
break A}if("declined"===d){w=C.fjj
break A}if("cancelled"===d){w=C.fjk
break A}w=C.t2
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
c69(d){var w,v,u,t,s,r,q=A.U(d.h(0,"id")),p=A.a8(d.h(0,"room_id"))
if(p==null)p=""
w=A.U(d.h(0,"title"))
v=A.a8(d.h(0,"document_text"))
if(v==null)v=""
u=A.U(d.h(0,"signer_name"))
t=A.a8(d.h(0,"signer_email"))
s=A.a8(d.h(0,"message"))
if(s==null)s=""
r=A.a8(d.h(0,"status"))
r=B.cMf(r==null?"pending":r)
A.dX(A.U(d.h(0,"created_at")))
return new B.nn(q,p,w,v,u,t,s,r,A.a8(d.h(0,"evidence_id")),A.a8(d.h(0,"evidence_filename")))},
Nr:function Nr(d,e){this.a=d
this.b=e},
nn:function nn(d,e,f,g,h,i,j,k,l,m){var _=this
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
jR(d){return this.bsy(d)},
bsy(d){var w=0,v=A.m(x.F),u,t=this,s,r,q,p,o,n,m,l
var $async$jR=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.e(t.a.az("signature_requests").bn(y.d).aY("room_id",d).fE("created_at",!1).j7(100),$async$jR)
case 3:m=f
l=A.c([],x.n)
for(s=J.aK(m),r=x.B,q=x.w,p=x.b;s.q();){o=A.aM(r.a(s.gI()),q,p)
n=o.h(0,"evidence_items")
if(r.b(n))o.l(0,"evidence_filename",A.a8(n.h(0,"filename")))
l.push(B.c69(o))}u=l
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$jR,v)},
j1(d){return this.bmh(d)},
bmh(d){var w=0,v=A.m(x.c),u,t=this,s,r,q,p,o,n,m,l
var $async$j1=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.gcc().e.a
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
case 3:u=m.c69(l.aM(f,o,s))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$j1,v)},
UU(d){return this.bjK(d)},
bjK(d){var w=0,v=A.m(x.v),u=this,t
var $async$UU=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:t=x.b
w=2
return A.e(u.a.az("signature_requests").cX(A.Q(["status","cancelled"],t,t)).aY("id",d),$async$UU)
case 2:return A.k(null,v)}})
return A.l($async$UU,v)},
OK(d){return this.aCS(d)},
aCS(d){var w=0,v=A.m(x.C),u,t=this,s,r,q,p,o
var $async$OK=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=x.w
q=x.b
o=x.d
w=3
return A.e(t.a.d5("get_signing_request",A.Q(["p_id",d],r,q),q),$async$OK)
case 3:p=o.a(f)
if(p==null)p=[]
s=J.aw(p)
if(s.gW(p)){u=null
w=1
break}u=B.c69(A.aM(x.B.a(s.ga9(p)),r,q))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$OK,v)},
Py(d,e,f,g){return this.aFV(d,e,f,g)},
aFV(d,e,f,g){var w=0,v=A.m(x.w),u,t=this,s,r,q
var $async$Py=A.i(function(h,i){if(h===1)return A.j(i,v)
for(;;)switch(w){case 0:s=e?"drawn":"typed"
r=x.b
q=A
w=3
return A.e(t.a.d5("submit_signature",A.Q(["p_request_id",f,"p_signer_name",g,"p_signature_type",s,"p_signature_data",d],x.w,r),r),$async$Py)
case 3:u=q.U(i)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$Py,v)}}
B.Nr.prototype={
H(){return"SignatureRequestStatus."+this.b}}
B.nn.prototype={
gbE(){return this.a},
gcw(){return this.c}}
var z=a.updateTypes(["B0(al)"])
B.c1P.prototype={
$1(d){return new B.B0(d.S($.dB(),x.k))},
$S:z+0};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.c1P,A.cg)
v(A.D,[B.B0,B.nn])
w(B.Nr,A.h7)})()
var y={d:"id, room_id, title, document_text, signer_name, signer_email, message, status, created_at, evidence_id, evidence_items(filename)"}
var x=(function rtii(){var w=A.J
return{n:w("x<nn>"),F:w("w<nn>"),B:w("ac<@,@>"),c:w("nn"),w:w("f"),k:w("h5"),b:w("@"),d:w("w<@>?"),C:w("nn?"),v:w("~")}})();(function constants(){C.NC=new A.ag(57791,"MaterialIcons",null,!1)
C.Or=new A.aL(C.NC,18,null,null,null)
C.t2=new B.Nr(0,"pending")
C.a5V=new B.Nr(1,"signed")
C.fjj=new B.Nr(2,"declined")
C.fjk=new B.Nr(3,"cancelled")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cWF","aa6",()=>A.ep(new B.c1P(),A.J("B0")))})()};
(a=>{a["SitW084pntr56bdfeYkmLO7DeYI="]=a.current})($__dart_deferred_initializers__);