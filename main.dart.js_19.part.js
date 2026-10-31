((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
cMJ(d){var x,w,v,u,t,s,r=A.c([],y.g),q=y.x,p=A.c([],q),o=new A.dM("")
for(x=d.length,w=!1,v=0;v<x;){u=d[v]
if(w)if(u==='"'){t=v+1
w=t<x&&d[t]==='"'
if(w){o.a+='"'
v+=2}else v=t}else{o.a+=u;++v
w=!0}else{w=u==='"'
if(w)++v
else if(u===","){s=o.a
p.push(D.n.aI(s.charCodeAt(0)==0?s:s))
o.a="";++v}else if(u==="\n"){s=o.a
p.push(D.n.aI(s.charCodeAt(0)==0?s:s))
o.a=""
if(D.h.dI(p,new B.c0T()))r.push(p)
p=A.c([],q);++v}else{++v
if(u!=="\r")o.a+=u}}}q=o.a
p.push(D.n.aI(q.charCodeAt(0)==0?q:q))
o.a=""
if(D.h.dI(p,new B.c0U()))r.push(p)
return r},
cIa(d){var x
switch(d.a){case 0:x="Import matters"
break
case 1:x="Import contacts"
break
case 2:x="Import time entries"
break
default:x=null}return x},
cI9(d){var x
switch(d.a){case 0:x="CSV columns: name, case_type (optional). One row per matter."
break
case 1:x="CSV columns: name, type (person/org/location), room_name. Contacts are added to the matching room."
break
case 2:x="CSV columns: room_name, description, date (YYYY-MM-DD), minutes, billable (true/false), hourly_rate (optional)."
break
default:x=null}return x},
cxn(){return new B.zn(null)},
c0T:function c0T(){},
c0U:function c0U(){},
W_:function W_(d,e){this.a=d
this.b=e},
zn:function zn(d){this.a=d},
asJ:function asJ(){this.d=$
this.c=this.a=null},
HT:function HT(d,e){this.d=d
this.a=e},
a43:function a43(){var _=this
_.w=!1
_.y=_.x=null
_.d=$
_.c=_.a=null},
bEe:function bEe(d){this.a=d},
bEf:function bEf(d){this.a=d},
bEg:function bEg(d,e){this.a=d
this.b=e},
bEh:function bEh(d,e){this.a=d
this.b=e},
bEi:function bEi(){},
bEj:function bEj(d){this.a=d},
QY:function QY(d,e,f,g){var _=this
_.f=d
_.r=e
_.b=f
_.a=g},
Ua:function Ua(d,e,f){this.c=d
this.f=e
this.a=f},
aqP:function aqP(d,e){var _=this
_.d=$
_.eF$=d
_.bD$=e
_.c=_.a=null},
a8w:function a8w(){}},C,E,F
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[6],B)
C=c[132]
E=c[35]
F=c[133]
B.W_.prototype={
H(){return"ImportType."+this.b}}
B.zn.prototype={
Y(){return new B.asJ()}}
B.asJ.prototype={
C(d){var x=null
return new B.Ua(3,A.hy(A.m_(x,x,x,C.fmx,x,x,x,x,C.fv_),x,C.fmw,x,x),x)}}
B.HT.prototype={
Y(){return new B.a43()}}
B.a43.prototype={
D0(){var x=0,w=A.m(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$D0=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.v(new B.bEe(s))
u=4
x=7
return A.e(E.aQW(A.c(["csv"],y.x),D.Nq,!0),$async$D0)
case 7:r=e
l=r
q=l==null?null:A.ic(l)
if(q==null){s.v(new B.bEf(s))
x=1
break}x=8
return A.e(q.gO_().o7(),$async$D0)
case 8:p=e
if(J.aY(p)===0){l=A.du("The file is empty.")
throw A.n(l)}o=B.cMJ(D.b9.bR(p))
if(J.aY(o)<2){l=A.du("CSV needs a header row plus at least one data row.")
throw A.n(l)}x=9
return A.e(s.w7(o),$async$D0)
case 9:n=e
s.v(new B.bEg(s,n))
u=2
x=6
break
case 4:u=3
j=t.pop()
m=A.G(j)
s.v(new B.bEh(s,m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$D0,w)},
w7(d){return this.bc3(d)},
bc3(b4){var x=0,w=A.m(y.e),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$w7=A.i(function(b5,b6){if(b5===1)return A.j(b6,w)
for(;;)switch(x){case 0:a7=u.gar().X($.dB(),y.k)
a8=D.h.ga8(b4)
a9=A.a6(a8).i("a7<1,f>")
b0=A.K(new A.a7(a8,new B.bEi(),a9),a9.i("ai.E"))
b1=D.h.iU(b4,1)
b2=new B.bEj(b0)
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
l=J.av(m)
if(l.gu(m)<=t||l.h(m,t).length===0){x=9
break}k=l.h(m,t)
l=A.Q(["room_name",k,"type_id",p&&l.gu(m)>s&&l.h(m,s).length!==0?l.h(m,s):"general"],a9,r)
k=a7.CW
k===$&&A.b()
k.b.J(0,A.n_(q,a9,a9))
x=11
return A.e(k.abx("create_case_room",!1,l,r),$async$w7)
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
q=A.D(r,r)
b3=J
x=12
return A.e(a8.aY("owner_id",(a9==null?null:a9.r).a),$async$w7)
case 12:a8=b3.aJ(b6),a9=y.B
case 13:if(!a8.q()){x=14
break}p=a9.a(a8.gI())
q.l(0,J.be(p.h(0,"name")).toLowerCase(),J.be(p.h(0,"id")))
x=13
break
case 14:a8=b1.length,a9=s>=0,o=0,n=0
case 15:if(!(n<b1.length)){x=17
break}m=b1[n]
p=J.av(m)
if(p.gu(m)<=t||p.h(m,t).length===0){x=16
break}i=q.h(0,p.h(m,j).toLowerCase())
if(i==null){x=16
break}h=a9&&p.gu(m)>s&&A.dp(["person","org","location"],r).n(0,p.h(m,s).toLowerCase())?p.h(m,s).toLowerCase():"person"
x=18
return A.e(a7.az("entities").e3(0,A.Q(["room_id",i,"entity_type",h,"name",p.h(m,t)],r,r)),$async$w7)
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
q=A.D(r,r)
b3=J
x=19
return A.e(a8.aY("owner_id",(a9==null?null:a9.r).a),$async$w7)
case 19:a8=b3.aJ(b6),a9=y.B
case 20:if(!a8.q()){x=21
break}p=a9.a(a8.gI())
q.l(0,J.be(p.h(0,"name")).toLowerCase(),J.be(p.h(0,"id")))
x=20
break
case 21:a8=b1.length,a9=a0>=0,p=!(d<0),l=y.q,o=0,n=0
case 22:if(!(n<b1.length)){x=24
break}m=b1[n]
k=J.av(m)
if(k.gu(m)<=e){x=23
break}i=q.h(0,k.h(m,j).toLowerCase())
if(i==null){x=23
break}a1=A.nk(k.h(m,e),null)
if(a1==null)a1=0
if(a1<=0){x=23
break}a2=A.kI(k.h(m,f))
if(a2==null){x=23
break}a3=a2.kq(6e7*a1)
a4=a7.az("time_entries")
a5=A.D(r,l)
a5.l(0,"room_id",i)
a6=a7.gcb().e.a
a5.l(0,"user_id",(a6==null?null:a6.r).a)
a5.l(0,"description",k.h(m,g).length===0?"Imported entry":k.h(m,g))
a5.l(0,"started_at",a2.d_())
a5.l(0,"ended_at",a3.d_())
a5.l(0,"billable",!p||k.gu(m)<=d||k.h(m,d).toLowerCase()!=="false")
if(a9&&k.gu(m)>a0&&k.h(m,a0).length!==0)a5.l(0,"hourly_rate",A.jj(k.h(m,a0)))
x=25
return A.e(a4.e3(0,a5),$async$w7)
case 25:++o
case 23:b1.length===a8||(0,A.F)(b1),++n
x=22
break
case 24:v=o
x=1
break
case 4:case 1:return A.k(v,w)}})
return A.l($async$w7,w)},
C(d){var x,w,v,u=this,t=null,s=A.d(d).ok,r=u.a.d,q=A.o(B.cIa(r),t,t,t,t,t,s.f,t,t,t),p=s.z
r=A.o(B.cI9(r),t,t,t,t,t,p,t,t,t)
x=u.w
w=x?t:u.gb97()
v=y.u
w=A.c([q,D.Q,r,D.aV,A.o0(F.Op,t,A.o(x?"Importing\u2026":"Choose CSV file",t,t,t,t,t,t,t,t,t),w)],v)
if(u.w)D.h.J(w,A.c([D.Z,D.bd],v))
r=u.x
if(r!=null)D.h.J(w,A.c([D.Z,A.o(r,t,t,t,t,t,p==null?t:p.U(D.ps),t,t,t)],v))
r=u.y
if(r!=null){q=s.Q
D.h.J(w,A.c([D.Z,A.o(r,t,t,t,t,t,q==null?t:q.U(A.d(d).ax.fy),t,t,t)],v))}w.push(D.aV)
w.push(A.o("Template",t,t,t,t,t,s.x,t,t,t))
w.push(D.Q)
r=u.bfH(u.a.d)
q=s.Q
w.push(A.Nr(r,t,q==null?t:q.Vd("monospace")))
return new A.Y(D.bo,A.a2(w,D.b3,t,D.r,D.u,0,D.x),t)},
bfH(d){var x
switch(d.a){case 0:x="name,case_type\nHarborview Heist,criminal\nMeridian Contract Dispute,civil"
break
case 1:x="name,type,room_name\nJane Doe,person,Harborview Heist\nAcme Corp,org,Meridian Contract Dispute"
break
case 2:x="room_name,description,date,minutes,billable,hourly_rate\nHarborview Heist,Reviewed witness statements,2026-10-01,90,true,150\nMeridian Contract Dispute,Client call,2026-10-02,30,true,150"
break
default:x=null}return x}}
B.QY.prototype={
dj(d){return this.r!==d.r||this.f!==d.f}}
B.Ua.prototype={
Y(){return new B.aqP(null,null)},
gu(d){return this.c}}
B.aqP.prototype={
au(){var x=this
x.aR()
x.d=A.bif(null,0,x.a.c,x)},
m(){var x=this.d
x===$&&A.b()
x.m()
this.aLj()},
C(d){var x=this.d
x===$&&A.b()
return new B.QY(x,A.c7q(d),this.a.f,null)},
b0(d){var x,w,v,u,t,s=this
s.bd(d)
x=s.a.c
if(d.c!==x){w=s.d
w===$&&A.b()
v=w.e
u=w.d
if(u>=x){t=Math.max(0,x-1)
v=u}else t=null
s.d=w.aSe(null,t,x,v)}s.a.toString}}
B.a8w.prototype={
m(){var x=this,w=x.bD$
if(w!=null)w.P(x.ghu())
x.bD$=null
x.al()},
c1(){this.cL()
this.cE()
this.hv()}}
var z=a.updateTypes(["N<~>()"])
B.c0T.prototype={
$1(d){return d.length!==0},
$S:11}
B.c0U.prototype={
$1(d){return d.length!==0},
$S:11}
B.bEe.prototype={
$0(){var x=this.a
x.w=!0
x.y=x.x=null},
$S:0}
B.bEf.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bEg.prototype={
$0(){var x=this.a,w=this.b,v=w===1?"":"s"
x.x="Imported "+w+" row"+v+"."
x.w=!1},
$S:0}
B.bEh.prototype={
$0(){var x=this.a
x.y="Import failed: "+A.q(this.b)
x.w=!1},
$S:0}
B.bEi.prototype={
$1(d){return d.toLowerCase()},
$S:18}
B.bEj.prototype={
$1(d){return D.h.fR(this.a,d)},
$S:186};(function aliases(){var x=B.a8w.prototype
x.aLj=x.m})();(function installTearOffs(){var x=a._instance_0u
x(B.a43.prototype,"gb97","D0",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.cg,[B.c0T,B.c0U,B.bEi,B.bEj])
v(B.W_,A.fU)
w(A.hG,[B.zn,B.HT])
w(A.hq,[B.asJ,B.a43])
w(A.dg,[B.bEe,B.bEf,B.bEg,B.bEh])
v(B.QY,A.bD)
v(B.Ua,A.O)
v(B.a8w,A.a_)
v(B.aqP,B.a8w)
x(B.a8w,A.h5)})()
A.cC(b.typeUniverse,JSON.parse('{"HT":{"O":[],"h":[]},"zn":{"O":[],"h":[]},"asJ":{"a_":["zn"]},"a43":{"a_":["HT"]},"Ua":{"O":[],"h":[]},"QY":{"bD":[],"bv":[],"h":[]},"aqP":{"a_":["Ua"]}}'))
var y=(function rtii(){var x=A.J
return{g:x("x<v<f>>"),x:x("x<f>"),u:x("x<h>"),B:x("ad<@,@>"),w:x("f"),k:x("h6"),b:x("@"),e:x("w"),q:x("E?"),v:x("~")}})();(function constants(){var x=a.makeConstList
C.e2Z=new B.W_(0,"matters")
C.fE7=new B.HT(C.e2Z,null)
C.e3_=new B.W_(1,"contacts")
C.fE8=new B.HT(C.e3_,null)
C.e30=new B.W_(2,"timeEntries")
C.fE9=new B.HT(C.e30,null)
C.f_O=x([C.fE7,C.fE8,C.fE9],y.u)
C.fmw=new A.Ok(null,C.f_O,null)
C.e_p=new A.ah(58019,"MaterialIcons",null,!1)
C.e0O=new A.aL(C.e_p,null,null,null,null)
C.fmA=new A.rA("Matters",C.e0O,null)
C.e_D=new A.ah(58502,"MaterialIcons",null,!1)
C.e0X=new A.aL(C.e_D,null,null,null,null)
C.fmD=new A.rA("Contacts",C.e0X,null)
C.e_O=new A.ah(58978,"MaterialIcons",null,!1)
C.e1N=new A.aL(C.e_O,null,null,null,null)
C.fmB=new A.rA("Time",C.e1N,null)
C.ePm=x([C.fmA,C.fmD,C.fmB],y.u)
C.fmx=new A.Oi(C.ePm,null,!1,null,null,null,null,null,null,null,null)
C.fv_=new A.a0("Import data",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["z5vmaU1DIBChtZb4T8owqPY3hnI="]=a.current})($__dart_deferred_initializers__);