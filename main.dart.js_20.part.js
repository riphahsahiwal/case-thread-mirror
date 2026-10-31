((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
cIy(d){var x,w,v,u,t,s,r=A.c([],y.g),q=y.x,p=A.c([],q),o=new A.dN("")
for(x=d.length,w=!1,v=0;v<x;){u=d[v]
if(w)if(u==='"'){t=v+1
w=t<x&&d[t]==='"'
if(w){o.a+='"'
v+=2}else v=t}else{o.a+=u;++v
w=!0}else{w=u==='"'
if(w)++v
else if(u===","){s=o.a
p.push(D.o.aJ(s.charCodeAt(0)==0?s:s))
o.a="";++v}else if(u==="\n"){s=o.a
p.push(D.o.aJ(s.charCodeAt(0)==0?s:s))
o.a=""
if(D.i.dP(p,new B.bYD()))r.push(p)
p=A.c([],q);++v}else{++v
if(u!=="\r")o.a+=u}}}q=o.a
p.push(D.o.aJ(q.charCodeAt(0)==0?q:q))
o.a=""
if(D.i.dP(p,new B.bYE()))r.push(p)
return r},
cE6(d){var x
switch(d.a){case 0:x="Import matters"
break
case 1:x="Import contacts"
break
case 2:x="Import time entries"
break
default:x=null}return x},
cE5(d){var x
switch(d.a){case 0:x="CSV columns: name, case_type (optional). One row per matter."
break
case 1:x="CSV columns: name, type (person/org/location), room_name. Contacts are added to the matching room."
break
case 2:x="CSV columns: room_name, description, date (YYYY-MM-DD), minutes, billable (true/false), hourly_rate (optional)."
break
default:x=null}return x},
ctw(){return new B.yP(null)},
bYD:function bYD(){},
bYE:function bYE(){},
UT:function UT(d,e){this.a=d
this.b=e},
yP:function yP(d){this.a=d},
arg:function arg(){this.d=$
this.c=this.a=null},
H5:function H5(d,e){this.d=d
this.a=e},
a2V:function a2V(){var _=this
_.w=!1
_.y=_.x=null
_.d=$
_.c=_.a=null},
bBq:function bBq(d){this.a=d},
bBr:function bBr(d){this.a=d},
bBs:function bBs(d,e){this.a=d
this.b=e},
bBt:function bBt(d,e){this.a=d
this.b=e},
bBu:function bBu(){},
bBv:function bBv(d){this.a=d},
Q0:function Q0(d,e,f,g){var _=this
_.f=d
_.r=e
_.b=f
_.a=g},
T3:function T3(d,e,f){this.c=d
this.f=e
this.a=f},
apk:function apk(d,e){var _=this
_.d=$
_.eE$=d
_.bD$=e
_.c=_.a=null},
a7m:function a7m(){}},C,E,F
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[6],B)
C=c[127]
E=c[35]
F=c[128]
B.UT.prototype={
H(){return"ImportType."+this.b}}
B.yP.prototype={
Y(){return new B.arg()}}
B.arg.prototype={
C(d){var x=null
return new B.T3(3,A.hp(A.lM(x,x,x,C.flv,x,x,x,x,C.fu9),x,C.flu,x,x),x)}}
B.H5.prototype={
Y(){return new B.a2V()}}
B.a2V.prototype={
CE(){var x=0,w=A.m(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$CE=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.v(new B.bBq(s))
u=4
x=7
return A.e(E.aOP(A.c(["csv"],y.x),D.Nb,!0),$async$CE)
case 7:r=e
l=r
q=l==null?null:A.im(l)
if(q==null){s.v(new B.bBr(s))
x=1
break}x=8
return A.e(q.gND().nU(),$async$CE)
case 8:p=e
if(J.aX(p)===0){l=A.dl("The file is empty.")
throw A.n(l)}o=B.cIy(D.b9.bQ(p))
if(J.aX(o)<2){l=A.dl("CSV needs a header row plus at least one data row.")
throw A.n(l)}x=9
return A.e(s.vX(o),$async$CE)
case 9:n=e
s.v(new B.bBs(s,n))
u=2
x=6
break
case 4:u=3
j=t.pop()
m=A.E(j)
s.v(new B.bBt(s,m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$CE,w)},
vX(d){return this.bax(d)},
bax(b4){var x=0,w=A.m(y.e),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$vX=A.i(function(b5,b6){if(b5===1)return A.j(b6,w)
for(;;)switch(x){case 0:a7=u.gap().X($.dx(),y.k)
a8=D.i.ga7(b4)
a9=A.a6(a8).i("ab<1,h>")
b0=A.J(new A.ab(a8,new B.bBu(),a9),a9.i("ai.E"))
b1=D.i.iS(b4,1)
b2=new B.bBv(b0)
case 3:switch(u.a.d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:t=b2.$1("name")
if(t<0)throw A.n(A.dl('Missing "name" column.'))
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
k.b.L(0,A.mJ(q,a9,a9))
x=11
return A.e(k.ab2("create_case_room",!1,l,r),$async$vX)
case 11:++o
case 9:b1.length===a8||(0,A.H)(b1),++n
x=8
break
case 10:v=o
x=1
break
case 6:t=b2.$1("name")
s=b2.$1("type")
j=b2.$1("room_name")
if(t<0||j<0)throw A.n(A.dl('Missing "name" or "room_name" column.'))
a8=a7.aA("case_rooms").bo("id, name")
a9=a7.gca().e.a
r=y.w
q=A.D(r,r)
b3=J
x=12
return A.e(a8.b0("owner_id",(a9==null?null:a9.r).a),$async$vX)
case 12:a8=b3.aJ(b6),a9=y.B
case 13:if(!a8.q()){x=14
break}p=a9.a(a8.gI())
q.m(0,J.bg(p.h(0,"name")).toLowerCase(),J.bg(p.h(0,"id")))
x=13
break
case 14:a8=b1.length,a9=s>=0,o=0,n=0
case 15:if(!(n<b1.length)){x=17
break}m=b1[n]
p=J.aw(m)
if(p.gu(m)<=t||p.h(m,t).length===0){x=16
break}i=q.h(0,p.h(m,j).toLowerCase())
if(i==null){x=16
break}h=a9&&p.gu(m)>s&&A.dh(["person","org","location"],r).n(0,p.h(m,s).toLowerCase())?p.h(m,s).toLowerCase():"person"
x=18
return A.e(a7.aA("entities").dX(0,A.Q(["room_id",i,"entity_type",h,"name",p.h(m,t)],r,r)),$async$vX)
case 18:++o
case 16:b1.length===a8||(0,A.H)(b1),++n
x=15
break
case 17:v=o
x=1
break
case 7:j=b2.$1("room_name")
g=b2.$1("description")
f=b2.$1("date")
e=b2.$1("minutes")
if(j<0||g<0||f<0||e<0)throw A.n(A.dl("Missing required columns: room_name, description, date, minutes."))
d=b2.$1("billable")
a0=b2.$1("hourly_rate")
a8=a7.aA("case_rooms").bo("id, name")
a9=a7.gca().e.a
r=y.w
q=A.D(r,r)
b3=J
x=19
return A.e(a8.b0("owner_id",(a9==null?null:a9.r).a),$async$vX)
case 19:a8=b3.aJ(b6),a9=y.B
case 20:if(!a8.q()){x=21
break}p=a9.a(a8.gI())
q.m(0,J.bg(p.h(0,"name")).toLowerCase(),J.bg(p.h(0,"id")))
x=20
break
case 21:a8=b1.length,a9=a0>=0,p=!(d<0),l=y.q,o=0,n=0
case 22:if(!(n<b1.length)){x=24
break}m=b1[n]
k=J.aw(m)
if(k.gu(m)<=e){x=23
break}i=q.h(0,k.h(m,j).toLowerCase())
if(i==null){x=23
break}a1=A.n2(k.h(m,e),null)
if(a1==null)a1=0
if(a1<=0){x=23
break}a2=A.lW(k.h(m,f))
if(a2==null){x=23
break}a3=a2.kp(6e7*a1)
a4=a7.aA("time_entries")
a5=A.D(r,l)
a5.m(0,"room_id",i)
a6=a7.gca().e.a
a5.m(0,"user_id",(a6==null?null:a6.r).a)
a5.m(0,"description",k.h(m,g).length===0?"Imported entry":k.h(m,g))
a5.m(0,"started_at",a2.cY())
a5.m(0,"ended_at",a3.cY())
a5.m(0,"billable",!p||k.gu(m)<=d||k.h(m,d).toLowerCase()!=="false")
if(a9&&k.gu(m)>a0&&k.h(m,a0).length!==0)a5.m(0,"hourly_rate",A.jb(k.h(m,a0)))
x=25
return A.e(a4.dX(0,a5),$async$vX)
case 25:++o
case 23:b1.length===a8||(0,A.H)(b1),++n
x=22
break
case 24:v=o
x=1
break
case 4:case 1:return A.k(v,w)}})
return A.l($async$vX,w)},
C(d){var x,w,v,u=this,t=null,s=A.d(d).ok,r=u.a.d,q=A.o(B.cE6(r),t,t,t,t,t,s.f,t,t,t),p=s.z
r=A.o(B.cE5(r),t,t,t,t,t,p,t,t,t)
x=u.w
w=x?t:u.gb7D()
v=y.u
w=A.c([q,D.R,r,D.aY,A.nL(F.Od,t,A.o(x?"Importing\u2026":"Choose CSV file",t,t,t,t,t,t,t,t,t),w)],v)
if(u.w)D.i.L(w,A.c([D.a1,D.be],v))
r=u.x
if(r!=null)D.i.L(w,A.c([D.a1,A.o(r,t,t,t,t,t,p==null?t:p.V(D.pa),t,t,t)],v))
r=u.y
if(r!=null){q=s.Q
D.i.L(w,A.c([D.a1,A.o(r,t,t,t,t,t,q==null?t:q.V(A.d(d).ax.fy),t,t,t)],v))}w.push(D.aY)
w.push(A.o("Template",t,t,t,t,t,s.x,t,t,t))
w.push(D.R)
r=u.be8(u.a.d)
q=s.Q
w.push(A.Mu(r,t,q==null?t:q.UO("monospace")))
return new A.W(D.bv,A.a2(w,D.b4,t,D.r,D.v,0,D.x),t)},
be8(d){var x
switch(d.a){case 0:x="name,case_type\nHarborview Heist,criminal\nMeridian Contract Dispute,civil"
break
case 1:x="name,type,room_name\nJane Doe,person,Harborview Heist\nAcme Corp,org,Meridian Contract Dispute"
break
case 2:x="room_name,description,date,minutes,billable,hourly_rate\nHarborview Heist,Reviewed witness statements,2026-10-01,90,true,150\nMeridian Contract Dispute,Client call,2026-10-02,30,true,150"
break
default:x=null}return x}}
B.Q0.prototype={
dg(d){return this.r!==d.r||this.f!==d.f}}
B.T3.prototype={
Y(){return new B.apk(null,null)},
gu(d){return this.c}}
B.apk.prototype={
au(){var x=this
x.aP()
x.d=A.bfJ(null,0,x.a.c,x)},
l(){var x=this.d
x===$&&A.b()
x.l()
this.aKg()},
C(d){var x=this.d
x===$&&A.b()
return new B.Q0(x,A.c3X(d),this.a.f,null)},
b_(d){var x,w,v,u,t,s=this
s.be(d)
x=s.a.c
if(d.c!==x){w=s.d
w===$&&A.b()
v=w.e
u=w.d
if(u>=x){t=Math.max(0,x-1)
v=u}else t=null
s.d=w.aR3(null,t,x,v)}s.a.toString}}
B.a7m.prototype={
l(){var x=this,w=x.bD$
if(w!=null)w.P(x.ghr())
x.bD$=null
x.al()},
c_(){this.cK()
this.cB()
this.hs()}}
var z=a.updateTypes(["M<~>()"])
B.bYD.prototype={
$1(d){return d.length!==0},
$S:11}
B.bYE.prototype={
$1(d){return d.length!==0},
$S:11}
B.bBq.prototype={
$0(){var x=this.a
x.w=!0
x.y=x.x=null},
$S:0}
B.bBr.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bBs.prototype={
$0(){var x=this.a,w=this.b,v=w===1?"":"s"
x.x="Imported "+w+" row"+v+"."
x.w=!1},
$S:0}
B.bBt.prototype={
$0(){var x=this.a
x.y="Import failed: "+A.q(this.b)
x.w=!1},
$S:0}
B.bBu.prototype={
$1(d){return d.toLowerCase()},
$S:25}
B.bBv.prototype={
$1(d){return D.i.hv(this.a,d)},
$S:346};(function aliases(){var x=B.a7m.prototype
x.aKg=x.l})();(function installTearOffs(){var x=a._instance_0u
x(B.a2V.prototype,"gb7D","CE",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.ca,[B.bYD,B.bYE,B.bBu,B.bBv])
v(B.UT,A.hs)
w(A.hw,[B.yP,B.H5])
w(A.hh,[B.arg,B.a2V])
w(A.dd,[B.bBq,B.bBr,B.bBs,B.bBt])
v(B.Q0,A.bC)
v(B.T3,A.N)
v(B.a7m,A.Y)
v(B.apk,B.a7m)
x(B.a7m,A.fW)})()
A.cD(b.typeUniverse,JSON.parse('{"H5":{"N":[],"f":[]},"yP":{"N":[],"f":[]},"arg":{"Y":["yP"]},"a2V":{"Y":["H5"]},"T3":{"N":[],"f":[]},"Q0":{"bC":[],"bs":[],"f":[]},"apk":{"Y":["T3"]}}'))
var y=(function rtii(){var x=A.I
return{g:x("x<v<h>>"),x:x("x<h>"),u:x("x<f>"),B:x("aa<@,@>"),w:x("h"),k:x("fY"),b:x("@"),e:x("w"),q:x("C?"),v:x("~")}})();(function constants(){var x=a.makeConstList
C.e2I=new B.UT(0,"matters")
C.fDc=new B.H5(C.e2I,null)
C.e2J=new B.UT(1,"contacts")
C.fDd=new B.H5(C.e2J,null)
C.e2K=new B.UT(2,"timeEntries")
C.fDe=new B.H5(C.e2K,null)
C.f_t=x([C.fDc,C.fDd,C.fDe],y.u)
C.flu=new A.No(null,C.f_t,null)
C.e_5=new A.af(58019,"MaterialIcons",null,!1)
C.e0u=new A.aI(C.e_5,null,null,null,null)
C.flA=new A.iQ("Matters",C.e0u,null)
C.e_i=new A.af(58502,"MaterialIcons",null,!1)
C.e0D=new A.aI(C.e_i,null,null,null,null)
C.flG=new A.iQ("Contacts",C.e0D,null)
C.e_t=new A.af(58978,"MaterialIcons",null,!1)
C.e1u=new A.aI(C.e_t,null,null,null,null)
C.flB=new A.iQ("Time",C.e1u,null)
C.eP2=x([C.flA,C.flG,C.flB],y.u)
C.flv=new A.Nm(C.eP2,null,!1,null,null,null,null,null,null,null,null)
C.fu9=new A.a_("Import data",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["rbWKSo5U7QEbJ4hkUT0DjEJOayU="]=a.current})($__dart_deferred_initializers__);