((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
cLv(d){var x,w,v,u,t,s,r=A.c([],y.g),q=y.x,p=A.c([],q),o=new A.dM("")
for(x=d.length,w=!1,v=0;v<x;){u=d[v]
if(w)if(u==='"'){t=v+1
w=t<x&&d[t]==='"'
if(w){o.a+='"'
v+=2}else v=t}else{o.a+=u;++v
w=!0}else{w=u==='"'
if(w)++v
else if(u===","){s=o.a
p.push(D.o.aH(s.charCodeAt(0)==0?s:s))
o.a="";++v}else if(u==="\n"){s=o.a
p.push(D.o.aH(s.charCodeAt(0)==0?s:s))
o.a=""
if(D.i.dH(p,new B.c00()))r.push(p)
p=A.c([],q);++v}else{++v
if(u!=="\r")o.a+=u}}}q=o.a
p.push(D.o.aH(q.charCodeAt(0)==0?q:q))
o.a=""
if(D.i.dH(p,new B.c01()))r.push(p)
return r},
cGY(d){var x
switch(d.a){case 0:x="Import matters"
break
case 1:x="Import contacts"
break
case 2:x="Import time entries"
break
default:x=null}return x},
cGX(d){var x
switch(d.a){case 0:x="CSV columns: name, case_type (optional). One row per matter."
break
case 1:x="CSV columns: name, type (person/org/location), room_name. Contacts are added to the matching room."
break
case 2:x="CSV columns: room_name, description, date (YYYY-MM-DD), minutes, billable (true/false), hourly_rate (optional)."
break
default:x=null}return x},
cwm(){return new B.zj(null)},
c00:function c00(){},
c01:function c01(){},
VN:function VN(d,e){this.a=d
this.b=e},
zj:function zj(d){this.a=d},
asn:function asn(){this.d=$
this.c=this.a=null},
HK:function HK(d,e){this.d=d
this.a=e},
a3P:function a3P(){var _=this
_.w=!1
_.y=_.x=null
_.d=$
_.c=_.a=null},
bDB:function bDB(d){this.a=d},
bDC:function bDC(d){this.a=d},
bDD:function bDD(d,e){this.a=d
this.b=e},
bDE:function bDE(d,e){this.a=d
this.b=e},
bDF:function bDF(){},
bDG:function bDG(d){this.a=d},
QP:function QP(d,e,f,g){var _=this
_.f=d
_.r=e
_.b=f
_.a=g},
TY:function TY(d,e,f){this.c=d
this.f=e
this.a=f},
aqt:function aqt(d,e){var _=this
_.d=$
_.eF$=d
_.bD$=e
_.c=_.a=null},
a8g:function a8g(){}},C,E,F
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[6],B)
C=c[130]
E=c[35]
F=c[131]
B.VN.prototype={
H(){return"ImportType."+this.b}}
B.zj.prototype={
Y(){return new B.asn()}}
B.asn.prototype={
C(d){var x=null
return new B.TY(3,A.hx(A.lY(x,x,x,C.fmj,x,x,x,x,C.fuM),x,C.fmi,x,x),x)}}
B.HK.prototype={
Y(){return new B.a3P()}}
B.a3P.prototype={
CX(){var x=0,w=A.m(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$CX=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.v(new B.bDB(s))
u=4
x=7
return A.e(E.aQu(A.c(["csv"],y.x),D.No,!0),$async$CX)
case 7:r=e
l=r
q=l==null?null:A.ia(l)
if(q==null){s.v(new B.bDC(s))
x=1
break}x=8
return A.e(q.gNY().o5(),$async$CX)
case 8:p=e
if(J.aY(p)===0){l=A.du("The file is empty.")
throw A.n(l)}o=B.cLv(D.ba.bR(p))
if(J.aY(o)<2){l=A.du("CSV needs a header row plus at least one data row.")
throw A.n(l)}x=9
return A.e(s.w6(o),$async$CX)
case 9:n=e
s.v(new B.bDD(s,n))
u=2
x=6
break
case 4:u=3
j=t.pop()
m=A.G(j)
s.v(new B.bDE(s,m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$CX,w)},
w6(d){return this.bbE(d)},
bbE(b4){var x=0,w=A.m(y.e),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$w6=A.i(function(b5,b6){if(b5===1)return A.j(b6,w)
for(;;)switch(x){case 0:a7=u.gar().X($.dB(),y.k)
a8=D.i.ga9(b4)
a9=A.a6(a8).i("a9<1,f>")
b0=A.K(new A.a9(a8,new B.bDF(),a9),a9.i("aj.E"))
b1=D.i.iU(b4,1)
b2=new B.bDG(b0)
case 3:switch(u.a.d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:t=b2.$1("name")
if(t<0)throw A.n(A.du('Missing "name" column.'))
s=b2.$1("case_type")
a8=b1.length,a9=y.w,r=y.b,q=a7.x,p=s>=0,o=0,n=0
case 8:if(!(n<b1.length)){x=10
break}m=b1[n]
l=J.aw(m)
if(l.gu(m)<=t||l.h(m,t).length===0){x=9
break}k=l.h(m,t)
l=A.Q(["room_name",k,"type_id",p&&l.gu(m)>s&&l.h(m,s).length!==0?l.h(m,s):"general"],a9,r)
k=a7.CW
k===$&&A.b()
k.b.J(0,A.mY(q,a9,a9))
x=11
return A.e(k.abq("create_case_room",!1,l,r),$async$w6)
case 11:++o
case 9:b1.length===a8||(0,A.F)(b1),++n
x=8
break
case 10:v=o
x=1
break
case 6:t=b2.$1("name")
s=b2.$1("type")
j=b2.$1("room_name")
if(t<0||j<0)throw A.n(A.du('Missing "name" or "room_name" column.'))
a8=a7.az("case_rooms").bn("id, name")
a9=a7.gcb().e.a
r=y.w
q=A.C(r,r)
b3=J
x=12
return A.e(a8.aY("owner_id",(a9==null?null:a9.r).a),$async$w6)
case 12:a8=b3.aK(b6),a9=y.B
case 13:if(!a8.q()){x=14
break}p=a9.a(a8.gI())
q.l(0,J.bd(p.h(0,"name")).toLowerCase(),J.bd(p.h(0,"id")))
x=13
break
case 14:a8=b1.length,a9=s>=0,o=0,n=0
case 15:if(!(n<b1.length)){x=17
break}m=b1[n]
p=J.aw(m)
if(p.gu(m)<=t||p.h(m,t).length===0){x=16
break}i=q.h(0,p.h(m,j).toLowerCase())
if(i==null){x=16
break}h=a9&&p.gu(m)>s&&A.dp(["person","org","location"],r).n(0,p.h(m,s).toLowerCase())?p.h(m,s).toLowerCase():"person"
x=18
return A.e(a7.az("entities").e1(0,A.Q(["room_id",i,"entity_type",h,"name",p.h(m,t)],r,r)),$async$w6)
case 18:++o
case 16:b1.length===a8||(0,A.F)(b1),++n
x=15
break
case 17:v=o
x=1
break
case 7:j=b2.$1("room_name")
g=b2.$1("description")
f=b2.$1("date")
e=b2.$1("minutes")
if(j<0||g<0||f<0||e<0)throw A.n(A.du("Missing required columns: room_name, description, date, minutes."))
d=b2.$1("billable")
a0=b2.$1("hourly_rate")
a8=a7.az("case_rooms").bn("id, name")
a9=a7.gcb().e.a
r=y.w
q=A.C(r,r)
b3=J
x=19
return A.e(a8.aY("owner_id",(a9==null?null:a9.r).a),$async$w6)
case 19:a8=b3.aK(b6),a9=y.B
case 20:if(!a8.q()){x=21
break}p=a9.a(a8.gI())
q.l(0,J.bd(p.h(0,"name")).toLowerCase(),J.bd(p.h(0,"id")))
x=20
break
case 21:a8=b1.length,a9=a0>=0,p=!(d<0),l=y.q,o=0,n=0
case 22:if(!(n<b1.length)){x=24
break}m=b1[n]
k=J.aw(m)
if(k.gu(m)<=e){x=23
break}i=q.h(0,k.h(m,j).toLowerCase())
if(i==null){x=23
break}a1=A.ni(k.h(m,e),null)
if(a1==null)a1=0
if(a1<=0){x=23
break}a2=A.kG(k.h(m,f))
if(a2==null){x=23
break}a3=a2.kp(6e7*a1)
a4=a7.az("time_entries")
a5=A.C(r,l)
a5.l(0,"room_id",i)
a6=a7.gcb().e.a
a5.l(0,"user_id",(a6==null?null:a6.r).a)
a5.l(0,"description",k.h(m,g).length===0?"Imported entry":k.h(m,g))
a5.l(0,"started_at",a2.d_())
a5.l(0,"ended_at",a3.d_())
a5.l(0,"billable",!p||k.gu(m)<=d||k.h(m,d).toLowerCase()!=="false")
if(a9&&k.gu(m)>a0&&k.h(m,a0).length!==0)a5.l(0,"hourly_rate",A.jh(k.h(m,a0)))
x=25
return A.e(a4.e1(0,a5),$async$w6)
case 25:++o
case 23:b1.length===a8||(0,A.F)(b1),++n
x=22
break
case 24:v=o
x=1
break
case 4:case 1:return A.k(v,w)}})
return A.l($async$w6,w)},
C(d){var x,w,v,u=this,t=null,s=A.d(d).ok,r=u.a.d,q=A.o(B.cGY(r),t,t,t,t,t,s.f,t,t,t),p=s.z
r=A.o(B.cGX(r),t,t,t,t,t,p,t,t,t)
x=u.w
w=x?t:u.gb8I()
v=y.u
w=A.c([q,D.Q,r,D.aY,A.nY(F.Oo,t,A.o(x?"Importing\u2026":"Choose CSV file",t,t,t,t,t,t,t,t,t),w)],v)
if(u.w)D.i.J(w,A.c([D.a0,D.bc],v))
r=u.x
if(r!=null)D.i.J(w,A.c([D.a0,A.o(r,t,t,t,t,t,p==null?t:p.U(D.pq),t,t,t)],v))
r=u.y
if(r!=null){q=s.Q
D.i.J(w,A.c([D.a0,A.o(r,t,t,t,t,t,q==null?t:q.U(A.d(d).ax.fy),t,t,t)],v))}w.push(D.aY)
w.push(A.o("Template",t,t,t,t,t,s.x,t,t,t))
w.push(D.Q)
r=u.bfg(u.a.d)
q=s.Q
w.push(A.Nh(r,t,q==null?t:q.V9("monospace")))
return new A.X(D.bq,A.a2(w,D.b3,t,D.r,D.u,0,D.x),t)},
bfg(d){var x
switch(d.a){case 0:x="name,case_type\nHarborview Heist,criminal\nMeridian Contract Dispute,civil"
break
case 1:x="name,type,room_name\nJane Doe,person,Harborview Heist\nAcme Corp,org,Meridian Contract Dispute"
break
case 2:x="room_name,description,date,minutes,billable,hourly_rate\nHarborview Heist,Reviewed witness statements,2026-10-01,90,true,150\nMeridian Contract Dispute,Client call,2026-10-02,30,true,150"
break
default:x=null}return x}}
B.QP.prototype={
dj(d){return this.r!==d.r||this.f!==d.f}}
B.TY.prototype={
Y(){return new B.aqt(null,null)},
gu(d){return this.c}}
B.aqt.prototype={
au(){var x=this
x.aQ()
x.d=A.bhG(null,0,x.a.c,x)},
m(){var x=this.d
x===$&&A.b()
x.m()
this.aKZ()},
C(d){var x=this.d
x===$&&A.b()
return new B.QP(x,A.c6w(d),this.a.f,null)},
b0(d){var x,w,v,u,t,s=this
s.be(d)
x=s.a.c
if(d.c!==x){w=s.d
w===$&&A.b()
v=w.e
u=w.d
if(u>=x){t=Math.max(0,x-1)
v=u}else t=null
s.d=w.aRS(null,t,x,v)}s.a.toString}}
B.a8g.prototype={
m(){var x=this,w=x.bD$
if(w!=null)w.P(x.ghu())
x.bD$=null
x.al()},
c1(){this.cL()
this.cE()
this.hv()}}
var z=a.updateTypes(["N<~>()"])
B.c00.prototype={
$1(d){return d.length!==0},
$S:10}
B.c01.prototype={
$1(d){return d.length!==0},
$S:10}
B.bDB.prototype={
$0(){var x=this.a
x.w=!0
x.y=x.x=null},
$S:0}
B.bDC.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bDD.prototype={
$0(){var x=this.a,w=this.b,v=w===1?"":"s"
x.x="Imported "+w+" row"+v+"."
x.w=!1},
$S:0}
B.bDE.prototype={
$0(){var x=this.a
x.y="Import failed: "+A.q(this.b)
x.w=!1},
$S:0}
B.bDF.prototype={
$1(d){return d.toLowerCase()},
$S:18}
B.bDG.prototype={
$1(d){return D.i.fQ(this.a,d)},
$S:215};(function aliases(){var x=B.a8g.prototype
x.aKZ=x.m})();(function installTearOffs(){var x=a._instance_0u
x(B.a3P.prototype,"gb8I","CX",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.ci,[B.c00,B.c01,B.bDF,B.bDG])
v(B.VN,A.h7)
w(A.hE,[B.zj,B.HK])
w(A.hq,[B.asn,B.a3P])
w(A.dj,[B.bDB,B.bDC,B.bDD,B.bDE])
v(B.QP,A.bD)
v(B.TY,A.O)
v(B.a8g,A.a_)
v(B.aqt,B.a8g)
x(B.a8g,A.h4)})()
A.cD(b.typeUniverse,JSON.parse('{"HK":{"O":[],"h":[]},"zj":{"O":[],"h":[]},"asn":{"a_":["zj"]},"a3P":{"a_":["HK"]},"TY":{"O":[],"h":[]},"QP":{"bD":[],"bu":[],"h":[]},"aqt":{"a_":["TY"]}}'))
var y=(function rtii(){var x=A.J
return{g:x("x<w<f>>"),x:x("x<f>"),u:x("x<h>"),B:x("ac<@,@>"),w:x("f"),k:x("h5"),b:x("@"),e:x("v"),q:x("E?"),v:x("~")}})();(function constants(){var x=a.makeConstList
C.e2S=new B.VN(0,"matters")
C.fDL=new B.HK(C.e2S,null)
C.e2T=new B.VN(1,"contacts")
C.fDM=new B.HK(C.e2T,null)
C.e2U=new B.VN(2,"timeEntries")
C.fDN=new B.HK(C.e2U,null)
C.f_G=x([C.fDL,C.fDM,C.fDN],y.u)
C.fmi=new A.Ob(null,C.f_G,null)
C.e_j=new A.ah(58019,"MaterialIcons",null,!1)
C.e0H=new A.aL(C.e_j,null,null,null,null)
C.fmm=new A.rw("Matters",C.e0H,null)
C.e_x=new A.ah(58502,"MaterialIcons",null,!1)
C.e0Q=new A.aL(C.e_x,null,null,null,null)
C.fmp=new A.rw("Contacts",C.e0Q,null)
C.e_I=new A.ah(58978,"MaterialIcons",null,!1)
C.e1G=new A.aL(C.e_I,null,null,null,null)
C.fmn=new A.rw("Time",C.e1G,null)
C.ePe=x([C.fmm,C.fmp,C.fmn],y.u)
C.fmj=new A.O9(C.ePe,null,!1,null,null,null,null,null,null,null,null)
C.fuM=new A.a0("Import data",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["h4ive8i/VXwFk8q0U5hAfl86Q1M="]=a.current})($__dart_deferred_initializers__);