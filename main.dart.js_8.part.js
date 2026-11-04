((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={bZX:function bZX(){},Ay:function Ay(d){this.a=d},
cIY(d){var w
A:{if("signed"===d){w=C.a5o
break A}if("declined"===d){w=C.fib
break A}if("cancelled"===d){w=C.fic
break A}w=C.rW
break A}return w},
cjr(d){var w
switch(d.a){case 0:w="Pending"
break
case 1:w="Signed"
break
case 2:w="Declined"
break
case 3:w="Cancelled"
break
default:w=null}return w},
c3d(d){var w,v,u,t,s,r,q=A.Z(d.h(0,"id")),p=A.ab(d.h(0,"room_id"))
if(p==null)p=""
w=A.Z(d.h(0,"title"))
v=A.ab(d.h(0,"document_text"))
if(v==null)v=""
u=A.Z(d.h(0,"signer_name"))
t=A.ab(d.h(0,"signer_email"))
s=A.ab(d.h(0,"message"))
if(s==null)s=""
r=A.ab(d.h(0,"status"))
r=B.cIY(r==null?"pending":r)
A.ep(A.Z(d.h(0,"created_at")))
return new B.ne(q,p,w,v,u,t,s,r,A.ab(d.h(0,"evidence_id")),A.ab(d.h(0,"evidence_filename")))},
MX:function MX(d,e){this.a=d
this.b=e},
ne:function ne(d,e,f,g,h,i,j,k,l,m){var _=this
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
B.Ay.prototype={
jJ(d){return this.bri(d)},
bri(d){var w=0,v=A.n(x.F),u,t=this,s,r,q,p,o,n,m,l
var $async$jJ=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:w=3
return A.d(t.a.aL("signature_requests").bz(y.d).b7("room_id",d).hr("created_at",!1).k5(100),$async$jJ)
case 3:m=f
l=A.c([],x.n)
for(s=J.aP(m),r=x.B,q=x.w,p=x.b;s.q();){o=A.aU(r.a(s.gI()),q,p)
n=o.h(0,"evidence_items")
if(r.b(n))o.l(0,"evidence_filename",A.ab(n.h(0,"filename")))
l.push(B.c3d(o))}u=l
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$jJ,v)},
iW(d){return this.bl3(d)},
bl3(d){var w=0,v=A.n(x.c),u,t=this,s,r,q,p,o,n,m,l
var $async$iW=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.gct().e.a
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
case 3:u=m.c3d(l.aU(f,o,s))
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$iW,v)},
Ur(d){return this.biw(d)},
biw(d){var w=0,v=A.n(x.v),u=this,t
var $async$Ur=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:t=x.b
w=2
return A.d(u.a.aL("signature_requests").cX(A.Q(["status","cancelled"],t,t)).b7("id",d),$async$Ur)
case 2:return A.l(null,v)}})
return A.m($async$Ur,v)},
Oj(d){return this.aC6(d)},
aC6(d){var w=0,v=A.n(x.C),u,t=this,s,r,q,p,o
var $async$Oj=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:r=x.w
q=x.b
o=x.d
w=3
return A.d(t.a.dj("get_signing_request",A.Q(["p_id",d],r,q),q),$async$Oj)
case 3:p=o.a(f)
if(p==null)p=[]
s=J.av(p)
if(s.gU(p)){u=null
w=1
break}u=B.c3d(A.aU(x.B.a(s.ga9(p)),r,q))
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$Oj,v)},
P8(d,e,f,g){return this.aF6(d,e,f,g)},
aF6(d,e,f,g){var w=0,v=A.n(x.w),u,t=this,s,r,q
var $async$P8=A.j(function(h,i){if(h===1)return A.k(i,v)
for(;;)switch(w){case 0:s=e?"drawn":"typed"
r=x.b
q=A
w=3
return A.d(t.a.dj("submit_signature",A.Q(["p_request_id",f,"p_signer_name",g,"p_signature_type",s,"p_signature_data",d],x.w,r),r),$async$P8)
case 3:u=q.Z(i)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$P8,v)}}
B.MX.prototype={
H(){return"SignatureRequestStatus."+this.b}}
B.ne.prototype={
gbP(){return this.a}}
var z=a.updateTypes(["Ay(at)"])
B.bZX.prototype={
$1(d){return new B.Ay(d.W($.e2(),x.k))},
$S:z+0};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.bZX,A.cC)
v(A.D,[B.Ay,B.ne])
w(B.MX,A.hy)})()
var y={d:"id, room_id, title, document_text, signer_name, signer_email, message, status, created_at, evidence_id, evidence_items(filename)"}
var x=(function rtii(){var w=A.O
return{n:w("y<ne>"),F:w("w<ne>"),B:w("af<@,@>"),c:w("ne"),w:w("f"),k:w("iO"),b:w("@"),d:w("w<@>?"),C:w("ne?"),v:w("~")}})();(function constants(){C.Na=new A.ai(57791,"MaterialIcons",null,!1)
C.NU=new A.aM(C.Na,18,null,null,null)
C.rW=new B.MX(0,"pending")
C.a5o=new B.MX(1,"signed")
C.fib=new B.MX(2,"declined")
C.fic=new B.MX(3,"cancelled")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cT5","a9o",()=>A.eX(new B.bZX(),A.O("Ay")))})()};
(a=>{a["ocfmOgaz2S1sgHgXKR/ua+nu8LI="]=a.current})($__dart_deferred_initializers__);