((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
cLu(d){var x,w,v,u,t,s,r=A.c([],y.g),q=y.x,p=A.c([],q),o=new A.dN("")
for(x=d.length,w=!1,v=0;v<x;){u=d[v]
if(w)if(u==='"'){t=v+1
w=t<x&&d[t]==='"'
if(w){o.a+='"'
v+=2}else v=t}else{o.a+=u;++v
w=!0}else{w=u==='"'
if(w)++v
else if(u===","){s=o.a
p.push(D.o.aI(s.charCodeAt(0)==0?s:s))
o.a="";++v}else if(u==="\n"){s=o.a
p.push(D.o.aI(s.charCodeAt(0)==0?s:s))
o.a=""
if(D.i.dH(p,new B.c_Z()))r.push(p)
p=A.c([],q);++v}else{++v
if(u!=="\r")o.a+=u}}}q=o.a
p.push(D.o.aI(q.charCodeAt(0)==0?q:q))
o.a=""
if(D.i.dH(p,new B.c0_()))r.push(p)
return r},
cGW(d){var x
switch(d.a){case 0:x="Import matters"
break
case 1:x="Import contacts"
break
case 2:x="Import time entries"
break
default:x=null}return x},
cGV(d){var x
switch(d.a){case 0:x="CSV columns: name, case_type (optional). One row per matter."
break
case 1:x="CSV columns: name, type (person/org/location), room_name. Contacts are added to the matching room."
break
case 2:x="CSV columns: room_name, description, date (YYYY-MM-DD), minutes, billable (true/false), hourly_rate (optional)."
break
default:x=null}return x},
cwl(){return new B.zj(null)},
c_Z:function c_Z(){},
c0_:function c0_(){},
VM:function VM(d,e){this.a=d
this.b=e},
zj:function zj(d){this.a=d},
aso:function aso(){this.d=$
this.c=this.a=null},
HL:function HL(d,e){this.d=d
this.a=e},
a3O:function a3O(){var _=this
_.w=!1
_.y=_.x=null
_.d=$
_.c=_.a=null},
bDC:function bDC(d){this.a=d},
bDD:function bDD(d){this.a=d},
bDE:function bDE(d,e){this.a=d
this.b=e},
bDF:function bDF(d,e){this.a=d
this.b=e},
bDG:function bDG(){},
bDH:function bDH(d){this.a=d},
QP:function QP(d,e,f,g){var _=this
_.f=d
_.r=e
_.b=f
_.a=g},
TX:function TX(d,e,f){this.c=d
this.f=e
this.a=f},
aqu:function aqu(d,e){var _=this
_.d=$
_.eF$=d
_.bD$=e
_.c=_.a=null},
a8f:function a8f(){}},C,E,F
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[6],B)
C=c[130]
E=c[35]
F=c[131]
B.VM.prototype={
H(){return"ImportType."+this.b}}
B.zj.prototype={
Y(){return new B.aso()}}
B.aso.prototype={
C(d){var x=null
return new B.TX(3,A.hy(A.lY(x,x,x,C.fmm,x,x,x,x,C.fuO),x,C.fml,x,x),x)}}
B.HL.prototype={
Y(){return new B.a3O()}}
B.a3O.prototype={
CX(){var x=0,w=A.m(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$CX=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.v(new B.bDC(s))
u=4
x=7
return A.e(E.aQq(A.c(["csv"],y.x),D.Nn,!0),$async$CX)
case 7:r=e
l=r
q=l==null?null:A.it(l)
if(q==null){s.v(new B.bDD(s))
x=1
break}x=8
return A.e(q.gNZ().o5(),$async$CX)
case 8:p=e
if(J.aY(p)===0){l=A.dt("The file is empty.")
throw A.n(l)}o=B.cLu(D.ba.bR(p))
if(J.aY(o)<2){l=A.dt("CSV needs a header row plus at least one data row.")
throw A.n(l)}x=9
return A.e(s.w6(o),$async$CX)
case 9:n=e
s.v(new B.bDE(s,n))
u=2
x=6
break
case 4:u=3
j=t.pop()
m=A.G(j)
s.v(new B.bDF(s,m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$CX,w)},
w6(d){return this.bbx(d)},
bbx(b4){var x=0,w=A.m(y.e),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$w6=A.i(function(b5,b6){if(b5===1)return A.j(b6,w)
for(;;)switch(x){case 0:a7=u.gar().X($.dB(),y.k)
a8=D.i.ga9(b4)
a9=A.a6(a8).i("a9<1,f>")
b0=A.K(new A.a9(a8,new B.bDG(),a9),a9.i("aj.E"))
b1=D.i.iU(b4,1)
b2=new B.bDH(b0)
case 3:switch(u.a.d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:t=b2.$1("name")
if(t<0)throw A.n(A.dt('Missing "name" column.'))
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
k.b.K(0,A.mX(q,a9,a9))
x=11
return A.e(k.abp("create_case_room",!1,l,r),$async$w6)
case 11:++o
case 9:b1.length===a8||(0,A.E)(b1),++n
x=8
break
case 10:v=o
x=1
break
case 6:t=b2.$1("name")
s=b2.$1("type")
j=b2.$1("room_name")
if(t<0||j<0)throw A.n(A.dt('Missing "name" or "room_name" column.'))
a8=a7.az("case_rooms").bn("id, name")
a9=a7.gcc().e.a
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
break}h=a9&&p.gu(m)>s&&A.dn(["person","org","location"],r).n(0,p.h(m,s).toLowerCase())?p.h(m,s).toLowerCase():"person"
x=18
return A.e(a7.az("entities").e1(0,A.Q(["room_id",i,"entity_type",h,"name",p.h(m,t)],r,r)),$async$w6)
case 18:++o
case 16:b1.length===a8||(0,A.E)(b1),++n
x=15
break
case 17:v=o
x=1
break
case 7:j=b2.$1("room_name")
g=b2.$1("description")
f=b2.$1("date")
e=b2.$1("minutes")
if(j<0||g<0||f<0||e<0)throw A.n(A.dt("Missing required columns: room_name, description, date, minutes."))
d=b2.$1("billable")
a0=b2.$1("hourly_rate")
a8=a7.az("case_rooms").bn("id, name")
a9=a7.gcc().e.a
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
break}a1=A.nh(k.h(m,e),null)
if(a1==null)a1=0
if(a1<=0){x=23
break}a2=A.kG(k.h(m,f))
if(a2==null){x=23
break}a3=a2.kp(6e7*a1)
a4=a7.az("time_entries")
a5=A.C(r,l)
a5.l(0,"room_id",i)
a6=a7.gcc().e.a
a5.l(0,"user_id",(a6==null?null:a6.r).a)
a5.l(0,"description",k.h(m,g).length===0?"Imported entry":k.h(m,g))
a5.l(0,"started_at",a2.d_())
a5.l(0,"ended_at",a3.d_())
a5.l(0,"billable",!p||k.gu(m)<=d||k.h(m,d).toLowerCase()!=="false")
if(a9&&k.gu(m)>a0&&k.h(m,a0).length!==0)a5.l(0,"hourly_rate",A.jh(k.h(m,a0)))
x=25
return A.e(a4.e1(0,a5),$async$w6)
case 25:++o
case 23:b1.length===a8||(0,A.E)(b1),++n
x=22
break
case 24:v=o
x=1
break
case 4:case 1:return A.k(v,w)}})
return A.l($async$w6,w)},
C(d){var x,w,v,u=this,t=null,s=A.d(d).ok,r=u.a.d,q=A.o(B.cGW(r),t,t,t,t,t,s.f,t,t,t),p=s.z
r=A.o(B.cGV(r),t,t,t,t,t,p,t,t,t)
x=u.w
w=x?t:u.gb8B()
v=y.u
w=A.c([q,D.Q,r,D.aY,A.nY(F.Oo,t,A.o(x?"Importing\u2026":"Choose CSV file",t,t,t,t,t,t,t,t,t),w)],v)
if(u.w)D.i.K(w,A.c([D.a0,D.bc],v))
r=u.x
if(r!=null)D.i.K(w,A.c([D.a0,A.o(r,t,t,t,t,t,p==null?t:p.U(D.pn),t,t,t)],v))
r=u.y
if(r!=null){q=s.Q
D.i.K(w,A.c([D.a0,A.o(r,t,t,t,t,t,q==null?t:q.U(A.d(d).ax.fy),t,t,t)],v))}w.push(D.aY)
w.push(A.o("Template",t,t,t,t,t,s.x,t,t,t))
w.push(D.Q)
r=u.bfa(u.a.d)
q=s.Q
w.push(A.Nh(r,t,q==null?t:q.Va("monospace")))
return new A.X(D.bq,A.a2(w,D.b3,t,D.r,D.u,0,D.x),t)},
bfa(d){var x
switch(d.a){case 0:x="name,case_type\nHarborview Heist,criminal\nMeridian Contract Dispute,civil"
break
case 1:x="name,type,room_name\nJane Doe,person,Harborview Heist\nAcme Corp,org,Meridian Contract Dispute"
break
case 2:x="room_name,description,date,minutes,billable,hourly_rate\nHarborview Heist,Reviewed witness statements,2026-10-01,90,true,150\nMeridian Contract Dispute,Client call,2026-10-02,30,true,150"
break
default:x=null}return x}}
B.QP.prototype={
dj(d){return this.r!==d.r||this.f!==d.f}}
B.TX.prototype={
Y(){return new B.aqu(null,null)},
gu(d){return this.c}}
B.aqu.prototype={
au(){var x=this
x.aQ()
x.d=A.bhz(null,0,x.a.c,x)},
m(){var x=this.d
x===$&&A.b()
x.m()
this.aKU()},
C(d){var x=this.d
x===$&&A.b()
return new B.QP(x,A.c6v(d),this.a.f,null)},
b0(d){var x,w,v,u,t,s=this
s.be(d)
x=s.a.c
if(d.c!==x){w=s.d
w===$&&A.b()
v=w.e
u=w.d
if(u>=x){t=Math.max(0,x-1)
v=u}else t=null
s.d=w.aRN(null,t,x,v)}s.a.toString}}
B.a8f.prototype={
m(){var x=this,w=x.bD$
if(w!=null)w.P(x.ghu())
x.bD$=null
x.al()},
c1(){this.cL()
this.cE()
this.hv()}}
var z=a.updateTypes(["N<~>()"])
B.c_Z.prototype={
$1(d){return d.length!==0},
$S:10}
B.c0_.prototype={
$1(d){return d.length!==0},
$S:10}
B.bDC.prototype={
$0(){var x=this.a
x.w=!0
x.y=x.x=null},
$S:0}
B.bDD.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bDE.prototype={
$0(){var x=this.a,w=this.b,v=w===1?"":"s"
x.x="Imported "+w+" row"+v+"."
x.w=!1},
$S:0}
B.bDF.prototype={
$0(){var x=this.a
x.y="Import failed: "+A.q(this.b)
x.w=!1},
$S:0}
B.bDG.prototype={
$1(d){return d.toLowerCase()},
$S:18}
B.bDH.prototype={
$1(d){return D.i.fQ(this.a,d)},
$S:231};(function aliases(){var x=B.a8f.prototype
x.aKU=x.m})();(function installTearOffs(){var x=a._instance_0u
x(B.a3O.prototype,"gb8B","CX",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.cg,[B.c_Z,B.c0_,B.bDG,B.bDH])
v(B.VM,A.h7)
w(A.hF,[B.zj,B.HL])
w(A.hr,[B.aso,B.a3O])
w(A.di,[B.bDC,B.bDD,B.bDE,B.bDF])
v(B.QP,A.bD)
v(B.TX,A.O)
v(B.a8f,A.a_)
v(B.aqu,B.a8f)
x(B.a8f,A.h4)})()
A.cD(b.typeUniverse,JSON.parse('{"HL":{"O":[],"h":[]},"zj":{"O":[],"h":[]},"aso":{"a_":["zj"]},"a3O":{"a_":["HL"]},"TX":{"O":[],"h":[]},"QP":{"bD":[],"bu":[],"h":[]},"aqu":{"a_":["TX"]}}'))
var y=(function rtii(){var x=A.J
return{g:x("x<w<f>>"),x:x("x<f>"),u:x("x<h>"),B:x("ac<@,@>"),w:x("f"),k:x("h5"),b:x("@"),e:x("v"),q:x("D?"),v:x("~")}})();(function constants(){var x=a.makeConstList
C.e2V=new B.VM(0,"matters")
C.fDM=new B.HL(C.e2V,null)
C.e2W=new B.VM(1,"contacts")
C.fDN=new B.HL(C.e2W,null)
C.e2X=new B.VM(2,"timeEntries")
C.fDO=new B.HL(C.e2X,null)
C.f_J=x([C.fDM,C.fDN,C.fDO],y.u)
C.fml=new A.Ob(null,C.f_J,null)
C.e_j=new A.ag(58019,"MaterialIcons",null,!1)
C.e0K=new A.aL(C.e_j,null,null,null,null)
C.fmp=new A.ru("Matters",C.e0K,null)
C.e_x=new A.ag(58502,"MaterialIcons",null,!1)
C.e0T=new A.aL(C.e_x,null,null,null,null)
C.fms=new A.ru("Contacts",C.e0T,null)
C.e_I=new A.ag(58978,"MaterialIcons",null,!1)
C.e1J=new A.aL(C.e_I,null,null,null,null)
C.fmq=new A.ru("Time",C.e1J,null)
C.ePh=x([C.fmp,C.fms,C.fmq],y.u)
C.fmm=new A.O9(C.ePh,null,!1,null,null,null,null,null,null,null,null)
C.fuO=new A.a0("Import data",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["NESrZ2HkoFLF7l6PrMN8GOmxNwY="]=a.current})($__dart_deferred_initializers__);