((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={c_x:function c_x(){},Ar:function Ar(d){this.a=d},
cJt(d){var w
A:{if("signed"===d){w=C.a5H
break A}if("declined"===d){w=C.fip
break A}if("cancelled"===d){w=C.fiq
break A}w=C.rS
break A}return w},
ck2(d){var w
switch(d.a){case 0:w="Pending"
break
case 1:w="Signed"
break
case 2:w="Declined"
break
case 3:w="Cancelled"
break
default:w=null}return w},
c3N(d){var w,v,u,t,s,r,q=A.T(d.h(0,"id")),p=A.a7(d.h(0,"room_id"))
if(p==null)p=""
w=A.T(d.h(0,"title"))
v=A.a7(d.h(0,"document_text"))
if(v==null)v=""
u=A.T(d.h(0,"signer_name"))
t=A.a7(d.h(0,"signer_email"))
s=A.a7(d.h(0,"message"))
if(s==null)s=""
r=A.a7(d.h(0,"status"))
r=B.cJt(r==null?"pending":r)
A.dE(A.T(d.h(0,"created_at")))
return new B.n8(q,p,w,v,u,t,s,r,A.a7(d.h(0,"evidence_id")),A.a7(d.h(0,"evidence_filename")))},
ME:function ME(d,e){this.a=d
this.b=e},
n8:function n8(d,e,f,g,h,i,j,k,l,m){var _=this
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
B=a.updateHolder(c[66],B)
C=c[187]
B.Ar.prototype={
jO(d){return this.brx(d)},
brx(d){var w=0,v=A.m(x.F),u,t=this,s,r,q,p,o,n,m,l
var $async$jO=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.e(t.a.aA("signature_requests").bo(y.d).b0("room_id",d).fB("created_at",!1).jr(100),$async$jO)
case 3:m=f
l=A.c([],x.n)
for(s=J.aI(m),r=x.B,q=x.w,p=x.b;s.q();){o=A.aP(r.a(s.gI()),q,p)
n=o.h(0,"evidence_items")
if(r.b(n))o.m(0,"evidence_filename",A.a7(n.h(0,"filename")))
l.push(B.c3N(o))}u=l
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$jO,v)},
j_(d){return this.ble(d)},
ble(d){var w=0,v=A.m(x.c),u,t=this,s,r,q,p,o,n,m,l
var $async$j_=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.gca().e.a
n=(o==null?null:o.r).a
p=p.aA("signature_requests")
o=x.w
s=x.b
r=A.D(o,s)
r.m(0,"room_id",d.b)
r.m(0,"title",d.c)
r.m(0,"document_text",d.d)
r.m(0,"signer_name",d.e)
q=d.f
if(q!=null&&q.length!==0)r.m(0,"signer_email",q)
r.m(0,"message",d.r)
r.m(0,"created_by",n)
q=d.y
if(q!=null)r.m(0,"evidence_id",q)
m=B
l=A
w=3
return A.e(p.dX(0,r).bo(y.d).i2(0),$async$j_)
case 3:u=m.c3N(l.aP(f,o,s))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$j_,v)},
Ux(d){return this.biI(d)},
biI(d){var w=0,v=A.m(x.v),u=this,t
var $async$Ux=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:t=x.b
w=2
return A.e(u.a.aA("signature_requests").cV(A.Q(["status","cancelled"],t,t)).b0("id",d),$async$Ux)
case 2:return A.k(null,v)}})
return A.l($async$Ux,v)},
Oo(d){return this.aCd(d)},
aCd(d){var w=0,v=A.m(x.C),u,t=this,s,r,q,p,o
var $async$Oo=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=x.w
q=x.b
o=x.d
w=3
return A.e(t.a.d4("get_signing_request",A.Q(["p_id",d],r,q),q),$async$Oo)
case 3:p=o.a(f)
if(p==null)p=[]
s=J.aw(p)
if(s.gW(p)){u=null
w=1
break}u=B.c3N(A.aP(x.B.a(s.ga7(p)),r,q))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$Oo,v)},
Pc(d,e,f,g){return this.aFm(d,e,f,g)},
aFm(d,e,f,g){var w=0,v=A.m(x.w),u,t=this,s,r,q
var $async$Pc=A.i(function(h,i){if(h===1)return A.j(i,v)
for(;;)switch(w){case 0:s=e?"drawn":"typed"
r=x.b
q=A
w=3
return A.e(t.a.d4("submit_signature",A.Q(["p_request_id",f,"p_signer_name",g,"p_signature_type",s,"p_signature_data",d],x.w,r),r),$async$Pc)
case 3:u=q.T(i)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$Pc,v)}}
B.ME.prototype={
H(){return"SignatureRequestStatus."+this.b}}
B.n8.prototype={
gbG(){return this.a},
gcP(){return this.c}}
var z=a.updateTypes(["Ar(al)"])
B.c_x.prototype={
$1(d){return new B.Ar(d.T($.dx(),x.k))},
$S:z+0};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.c_x,A.ca)
v(A.C,[B.Ar,B.n8])
w(B.ME,A.hs)})()
var y={d:"id, room_id, title, document_text, signer_name, signer_email, message, status, created_at, evidence_id, evidence_items(filename)"}
var x=(function rtii(){var w=A.I
return{n:w("x<n8>"),F:w("v<n8>"),B:w("aa<@,@>"),c:w("n8"),w:w("h"),k:w("fY"),b:w("@"),d:w("v<@>?"),C:w("n8?"),v:w("~")}})();(function constants(){C.Nr=new A.af(57791,"MaterialIcons",null,!1)
C.Og=new A.aK(C.Nr,18,null,null,null)
C.rS=new B.ME(0,"pending")
C.a5H=new B.ME(1,"signed")
C.fip=new B.ME(2,"declined")
C.fiq=new B.ME(3,"cancelled")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cTJ","a9f",()=>A.ej(new B.c_x(),A.I("Ar")))})()};
(a=>{a["NPwKw4NPxVnpwjZrwiOWHd7RUd0="]=a.current})($__dart_deferred_initializers__);