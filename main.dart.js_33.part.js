((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={a9K:function a9K(d,e){this.a=d
this.b=e},
c8o(d,e,f){var w=new B.Ia(d,C.f.ap(Date.now(),1000),e)
w.as=new B.adb(f)
w.Q=new B.adb(f)
return w},
Ia:function Ia(d,e,f){var _=this
_.a=d
_.e=e
_.f=$
_.as=_.Q=null
_.at=f},
abp:function abp(d,e){this.a=d
this.b=e},
chy(d){if(d==null)return null
return((A.fb(d)<<3|A.kP(d)>>>3)&255)<<8|((A.kP(d)&7)<<5|A.c2Z(d)/2|0)&255},
chu(d){if(d==null)return null
return(((A.b6(d)-1980&127)<<1|A.bk(d)>>>3)&255)<<8|((A.bk(d)&7)<<5|A.c_(d))&255},
ayN:function ayN(d){var _=this
_.a=$
_.f=_.e=_.d=_.c=_.b=0
_.r=null
_.w=d
_.x=""
_.z=_.y=0},
bTs:function bTs(d,e){var _=this
_.a=d
_.c=_.b=$
_.e=_.d=0
_.r=e},
bjO:function bjO(d){var _=this
_.a=$
_.b=null
_.d=d
_.r=_.f=null},
c0M:function c0M(d,e,f,g){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.f=g
_.r=null
_.x=_.w=$},
b0i:function b0i(){},
c2I:function c2I(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
aOI:function aOI(){},
adb:function adb(d){this.a=d},
cJp(d,e){var w,v,u,t,s,r,q,p,o,n,m="BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//CaseThread//Deadlines//EN\n"+("X-WR-CALNAME:"+e+"\n")
for(w=J.aI(d),v=x.k;w.q();){u=w.gI()
t=v.a(u.gVy())
s=C.o.cC(C.f.j(A.bk(t)),2,"0")
r=C.o.cC(C.f.j(A.c_(t)),2,"0")
q=new A.aH(Date.now(),0,!1).eb().cY()
p=A.ck("[-:]",!0,!1)
o=C.i.ga7(A.d0(q,p,"").split("."))
q=A.q(u.gbG())
p=A.T(u.gcP())
p=A.d0(p,"\\","\\\\")
p=A.d0(p,";","\\;")
p=A.d0(p,",","\\,")
p=A.d0(p,"\n","\\n")
n=A.q(u.guO())
n=A.d0("Case: "+n,"\\","\\\\")
n=A.d0(n,";","\\;")
n=A.d0(n,",","\\,")
m=m+"BEGIN:VEVENT\n"+("UID:"+q+"@casethread\n")+("DTSTAMP:"+o+"Z\n")+("DTSTART;VALUE=DATE:"+(""+A.b6(t)+s+r)+"\n")+("SUMMARY:"+p+"\n")+("DESCRIPTION:"+A.d0(n,"\n","\\n")+"\n")+"END:VEVENT\n"}m+="END:VCALENDAR\n"
return m.charCodeAt(0)==0?m:m},
cHK(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=d.length,v=0,u=y.a;v<d.length;d.length===w||(0,A.H)(d),++v){t=d[v]
s=C.o.a8(A.T(t.h(0,"id")),0,8)
r=A.a7(t.h(0,"room_name"))
if(r==null)r="Client"
q=A.a7(t.h(0,"created_at"))
p=q==null?null:C.i.ga7(q.split("T"))
if(p==null)p=""
q=A.hv(t.h(0,"total_cents"))
o=C.m.ar((q==null?0:q)/100,2)
q=t.h(0,"period_start")
q=A.q(q==null?"":q)
n=t.h(0,"period_end")
n=A.q(n==null?"":n)
m=A.d0(r,'"','""')
u+=s+',"'+m+'",'+p+',,"'+A.d0("Legal services "+q+" to "+n,'"','""')+'",'+o+"\n"}return u.charCodeAt(0)==0?u:u},
cGT(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=0,u=y.f;v<d.length;d.length===w||(0,A.H)(d),++v){t=d[v]
s=A.a7(t.h(0,"expense_date"))
if(s==null)s=""
r=A.a7(t.h(0,"description"))
if(r==null)r=""
q=A.d0(r,'"','""')
p=A.a7(t.h(0,"category"))
if(p==null)p=""
r=A.dB(t.h(0,"amount"))
o=r==null?null:C.m.ar(r,2)
if(o==null)o="0.00"
r=A.hu(t.h(0,"billable"))
n=r!==!1?"Yes":"No"
u+=s+',"'+q+'",'+p+","+o+","+n+"\n"}return u.charCodeAt(0)==0?u:u},
cts(){return new B.DR(null)},
DR:function DR(d){this.a=d},
aU0:function aU0(d,e,f){this.a=d
this.b=e
this.c=f},
aU1:function aU1(d,e,f){this.a=d
this.b=e
this.c=f},
aU2:function aU2(d,e){this.a=d
this.b=e},
aU_:function aU_(){},
aTZ:function aTZ(d){this.a=d},
OV:function OV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,F,E,G
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[129]
F=c[120]
E=c[75]
G=c[130]
B.a9K.prototype={
B(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.m(0,u,w.length-1)},
gu(d){return this.a.length},
h(d,e){return this.a[e]},
m(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.M(0,v[e].a)
v[e]=f
w.m(0,f.a,e)},
ga7(d){return C.i.ga7(this.a)},
gaH(d){return C.i.gaH(this.a)},
gW(d){return this.a.length===0},
gbW(d){return this.a.length!==0},
gU(d){var w=this.a
return new J.f3(w,w.length,A.a6(w).i("f3<1>"))}}
B.Ia.prototype={}
B.abp.prototype={
H(){return"CompressionType."+this.b}}
B.ayN.prototype={}
B.bTs.prototype={}
B.bjO.prototype={
bn3(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=4294967295,a6=new B.bTs(b1,A.c([],x.m))
a6.b=B.chy(b2)
a6.c=B.chu(b2)
a3.a=a6
a3.b=a8
for(a6=a7.a,w=A.a6(a6),a6=new J.f3(a6,a6.length,w.i("f3<1>")),v=x.t,w=w.c;a6.q();){u=a6.d
if(u==null)u=w.a(u)
t=new B.ayN(D.ux)
a3.a.r.push(t)
s=u.f
r=new A.aH(A.lV((s===$?u.f=C.f.ap(Date.now(),1000):s)*1000,0,!1),0,!1)
q=u.a
t.a=q
p=a3.a.b
p===$&&A.b()
if(p==null){p=B.chy(r)
p.toString}t.b=p
p=a3.a.c
p===$&&A.b()
if(p==null){p=B.chu(r)
p.toString}t.c=p
t.z=420
o=a3.aBw(u)
n=u.Q
a8=new A.EC(new Uint8Array(32768),C.e5)
p=n.a
if(p==null)p=new Uint8Array(0)
m=new A.UZ(C.e5)
m.aew(p,C.e5,a4,a4)
p=a3.a
C.tV.bn2(m,a8,p.a,!0)
l=new A.UZ(C.e5)
l.aew(J.cy(C.P.gad(a8.c),a8.c.byteOffset,a8.b),C.e5,a4,a4)
k=C.bA.bc(q)
if(l==null)q=a4
else{q=l.b
q=q==null?0:q.length-l.c}if(q==null)q=0
p=null==null?0:a4
m=a3.f
m=m==null?a4:m.length
if(m==null)m=0
j=a3.r
j=j==null?a4:j.length
if(j==null)j=0
i=q+p+m+j
j=a3.a
m=k.length
j.d=j.d+(30+m+i)
p=j.e
j.e=p+(46+m)
t.d=o
t.e=i
t.r=l
t.f=u.at
t.w=D.ux
t.x=null
u=a3.b
t.y=u.b
q=t.a
u.dh(67324752)
h=t.e
g=h>4294967295||t.f>4294967295
p=t.w
if(p===D.ux)f=8
else{p=p===D.Jg?12:0
f=p}e=t.b
d=t.c
o=t.d
if(g)h=a5
a0=g?a5:t.f
a1=A.c([],v)
if(g){a2=new A.EC(new Uint8Array(32768),C.e5)
a2.aN(1)
a2.aN(0)
a2.aN(16)
a2.aN(0)
a2.qx(t.f)
a2.qx(t.e)
C.i.L(a1,J.cy(C.P.gad(a2.c),a2.c.byteOffset,a2.b))}l=t.r
k=C.bA.bc(q)
u.dr(20)
u.dr(2048)
u.dr(f)
u.dr(e)
u.dr(d)
u.dh(o)
u.dh(h)
u.dh(a0)
u.dr(k.length)
u.dr(a1.length)
u.i_(k)
u.i_(a1)
if(l!=null)u.aAn(l)
t.r=null}a6=a3.a
w=a3.b
w.toString
a3.bgR(a6.r,a4,w)},
aBw(d){var w,v,u,t,s,r=d.Q,q=r.aCb(!1)
q.c=0
w=q.gu(0)
for(v=0;w>1048576;){u=q.ade(1048576,q.c)
t=q.c
s=u.b
q.c=t+(s==null?0:s.length-u.c)
v=A.pZ(u.ex(),v)
w-=1048576}if(w>0)v=A.pZ(q.fO(w).ex(),v)
q.c=0
return v},
bgR(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=4294967295,a2=C.bA.bc(""),a3=a6.b
for(w=a4.length,v=x.t,u=!1,t=0;s=a4.length,t<s;a4.length===w||(0,A.H)(a4),++t){r=a4[t]
q=r.e
p=q>4294967295||r.f>4294967295||r.y>4294967295
u=C.cC.qA(u,p)
s=r.w
if(s===D.ux)o=8
else{s=s===D.Jg?12:0
o=s}n=r.b
m=r.c
l=r.d
if(p)q=a1
k=p?a1:r.f
s=r.z
j=p?a1:r.y
i=A.c([],v)
if(p){h=new A.EC(new Uint8Array(32768),C.e5)
h.aN(1)
h.aN(0)
h.aN(24)
h.aN(0)
h.qx(r.f)
h.qx(r.e)
h.qx(r.y)
C.i.L(i,J.cy(C.P.gad(h.c),h.c.byteOffset,h.b))}g=r.x
if(g==null)g=""
f=r.a
f===$&&A.b()
e=C.bA.bc(f)
d=C.bA.bc(g)
a6.dh(33639248)
a6.dr(20)
a6.dr(20)
a6.dr(2048)
a6.dr(o)
a6.dr(n)
a6.dr(m)
a6.dh(l)
a6.dh(q)
a6.dh(k)
a6.dr(e.length)
a6.dr(i.length)
a6.dr(d.length)
a6.dr(0)
a6.dr(0)
a6.dh(s<<16>>>0)
a6.dh(j)
a6.i_(e)
a6.i_(i)
a6.i_(d)}w=a6.b
a0=w-a3
p=u||s>65535||a0>4294967295||a3>4294967295
if(p){a6.dh(101075792)
a6.qx(44)
a6.dr(45)
a6.dr(45)
a6.dh(0)
a6.dh(0)
a6.qx(s)
a6.qx(s)
a6.qx(a0)
a6.qx(a3)
a6.dh(117853008)
a6.dh(0)
a6.qx(w)
a6.dh(1)}a6.dh(101010256)
a6.dr(0)
a6.dr(p?65535:0)
a6.dr(p?65535:s)
a6.dr(p?65535:s)
a6.dh(p?a1:a0)
a6.dh(p?a1:a3)
a6.dr(a2.length)
a6.i_(a2)}}
B.c0M.prototype={}
B.b0i.prototype={}
B.c2I.prototype={}
B.aOI.prototype={}
B.adb.prototype={
gu(d){var w=this.a
w=w==null?null:w.length
return w==null?0:w},
aCb(d){var w=this.a
if(w==null)w=new Uint8Array(0)
return A.V_(w,C.e5,null,null)}}
B.DR.prototype={
cq(d,e){var w=null,v=A.d(d)
return A.hp(A.lM(w,w,w,w,w,w,w,w,D.frK),w,A.ft(A.c([A.o("Connect CaseThread to your tools. File-based exports work now \u2014 no setup needed.",w,w,w,w,w,v.ok.z,w,w,w),C.b0,new B.OV(C.O3,"Google Calendar / Outlook / Apple","Export all task deadlines as an ICS file. Import it into any calendar app.","Export deadlines (.ics)",new B.aU0(this,d,e),w),new B.OV(D.e_B,"QuickBooks","Export invoices and expenses as CSV for QuickBooks import.","Export for QuickBooks (.zip)",new B.aU1(this,d,e),w),new B.OV(F.nz,"Microsoft 365","Direct sync needs a free Entra app registration. Use the ICS export above with Outlook today.","How to set up",new B.aU2(this,d),w)],x.p),w,C.bv,w,C.a5,!1),w,w)},
HY(d,e){return this.aUo(d,e)},
aUo(d,e){var w=0,v=A.m(x.H),u,t=2,s=[],r,q,p,o,n,m
var $async$HY=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.e(e.X($.c7r().glJ(),x.i),$async$HY)
case 7:r=g
if(J.f1(r)){if(d.e!=null)d.S(x.q).f.aS(D.fkS)
w=1
break}q=B.cJp(r,"CaseThread Deadlines")
p=new Uint8Array(A.b4(C.bA.bc(q)))
w=8
return A.e($.BY().iQ(E.FT(null,A.c([E.GF(p,"text/calendar","casethread-deadlines.ics")],x.S),"CaseThread deadlines")),$async$HY)
case 8:t=2
w=6
break
case 4:t=3
m=s.pop()
o=A.E(m)
if(d.e!=null)d.S(x.q).f.aS(A.bN(null,null,null,null,null,C.C,null,A.o("Export failed: "+A.q(o),null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$HY,v)},
vz(d,e){return this.aUr(d,e)},
aUr(b8,b9){var w=0,v=A.m(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$vz=A.i(function(c0,c1){if(c0===1){t.push(c1)
w=u}for(;;)switch(w){case 0:u=3
s=b9.X($.dx(),x.A)
a7=s.gca().e.a
r=(a7==null?null:a7.r).a
w=6
return A.e(s.aA("case_rooms").bo("id, name").b0("owner_id",r).jr(100),$async$vz)
case 6:q=c1
p=A.c([],x.s)
for(a7=J.aI(q),a8=x.f;a7.q();){o=a7.gI()
J.du(p,A.T(a8.a(o).h(0,"id")))}n=p
p=x.N
m=A.D(p,p)
for(a7=J.aI(q);a7.q();){l=a7.gI()
if(a8.b(l))J.bf(m,A.T(l.h(0,"id")),A.T(l.h(0,"name")))}k=m
j=y.a
i=y.f
w=J.aX(n)!==0?7:8
break
case 7:w=9
return A.e(s.aA("invoices").bo("id, room_id, total_cents, period_start, period_end, created_at").qa("room_id",n).Xn("status","draft").fB("created_at",!1).jr(200),$async$vz)
case 9:h=c1
m=x.X
g=A.c([],m)
for(a7=J.aI(h),a9=x.z;a7.q();){f=a7.gI()
b0=A.aP(f,p,a9)
b1=A.vF(null,null,p,a9)
b1.L(0,b0)
e=b1
J.bf(e,"room_name",J.A(k,a8.a(f).h(0,"room_id")))
J.du(g,e)}j=B.cHK(g)
u=11
w=14
return A.e(s.aA("expenses").bo("expense_date, description, category, amount, billable").qa("room_id",n).fB("expense_date",!1).jr(500),$async$vz)
case 14:d=c1
a0=A.c([],m)
for(m=J.aI(d);m.q();){a1=m.gI()
J.du(a0,A.aP(a8.a(a1),p,a9))}i=B.cGT(a0)
u=3
w=13
break
case 11:u=10
b5=t.pop()
w=13
break
case 10:w=3
break
case 13:case 8:a2=new Uint8Array(A.b4(C.bA.bc(j)))
a3=new Uint8Array(A.b4(C.bA.bc(i)))
b3=new B.a9K(A.c([],x.L),A.D(p,x.r))
b3.B(0,B.c8o("casethread-invoices.csv",J.aX(a2),a2))
b3.B(0,B.c8o("casethread-expenses.csv",J.aX(a3),a3))
a4=b3
p=$.QO()
b4=A.b_K(C.e5,32768)
new B.bjO(p).bn3(a4,b4,!1,null,1,null)
a5=new Uint8Array(A.b4(b4.NO()))
u=16
w=19
return A.e($.BY().iQ(E.FT(null,A.c([E.GF(a5,"application/zip","casethread-quickbooks.zip")],x.S),"CaseThread QuickBooks export")),$async$vz)
case 19:u=3
w=18
break
case 16:u=15
b6=t.pop()
w=20
return A.e(A.aAM(a5,"casethread-quickbooks.zip","application/zip"),$async$vz)
case 20:w=18
break
case 15:w=3
break
case 18:u=1
w=5
break
case 3:u=2
b7=t.pop()
a6=A.E(b7)
if(b8.e!=null)b8.S(x.q).f.aS(A.bN(null,null,null,null,null,C.C,null,A.o("Export failed: "+A.q(a6),null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$vz,v)},
bcw(d){var w=null
A.cU(w,w,!0,w,new B.aU_(),d,w,!0,!0,x.z)}}
B.OV.prototype={
C(d){var w=this,v=null,u=A.d(d).ok,t=x.p
return A.f4(new A.W(C.aB,A.a2(A.c([A.an(A.c([A.aW(w.c,v,v,v,28),C.br,A.aD(A.o(w.d,v,v,v,v,v,u.w,v,v,v),1,v)],t),C.y,v,C.r,C.v,0,v,v),C.R,A.o(w.e,v,v,v,v,v,u.z,v,v,v),C.a1,A.zn(A.o(w.f,v,v,v,v,v,v,v,v,v),v,w.r,v)],t),C.S,v,C.r,C.v,0,C.x),v),v,v,G.uP,v,v)},
gcP(){return this.d}}
var z=a.updateTypes([])
B.aU0.prototype={
$0(){return this.a.HY(this.b,this.c)},
$S:0}
B.aU1.prototype={
$0(){return this.a.vz(this.b,this.c)},
$S:0}
B.aU2.prototype={
$0(){return this.a.bcw(this.b)},
$S:0}
B.aU_.prototype={
$1(d){var w=null
return A.dq(A.c([A.by(C.t8,w,w,w,new B.aTZ(d),w,w)],x.p),D.fjm,w,D.frG)},
$S:13}
B.aTZ.prototype={
$0(){return A.ap(this.a,!1).by()},
$S:0};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.a9K,A.z)
v(A.C,[B.Ia,B.ayN,B.bTs,B.bjO,B.c0M,B.b0i,B.aOI])
w(B.abp,A.hs)
w(B.c2I,B.b0i)
w(B.adb,B.aOI)
w(B.DR,A.i_)
v(A.dd,[B.aU0,B.aU1,B.aU2,B.aTZ])
w(B.aU_,A.ca)
w(B.OV,A.a4)})()
A.cD(b.typeUniverse,JSON.parse('{"a9K":{"z":["Ia"],"z.E":"Ia"},"DR":{"N":[],"f":[]},"OV":{"a4":[],"f":[]}}'))
var y={f:"Date,Description,Category,Amount,Billable\n",a:"InvoiceNum,Customer,InvoiceDate,DueDate,ItemDescription,Amount\n"}
var x=(function rtii(){var w=A.I
return{k:w("aH"),i:w("M<v<j1>>"),L:w("x<Ia>"),X:w("x<ac<h,@>>"),s:w("x<h>"),p:w("x<f>"),S:w("x<nf>"),m:w("x<ayN>"),t:w("x<w>"),f:w("ac<@,@>"),N:w("h"),A:w("fY"),q:w("h_"),z:w("@"),r:w("w"),H:w("~")}})();(function constants(){D.ux=new B.abp(1,"deflate")
D.Jg=new B.abp(2,"bzip2")
D.e_B=new A.ag(60978,"MaterialIcons",null,!1)
D.fsY=new A.a0("1. Go to entra.microsoft.com \u2192 App registrations \u2192 New.\n2. Add redirect URI for your CaseThread domain.\n3. Grant Calendars.ReadWrite + Mail.Send (delegated).\n4. Paste the client ID/secret into CaseThread \u2192 Settings \u2192 Integrations.\n\nUntil then, the ICS export above imports cleanly into Outlook.",null,null,null,null,null,null,null,null,null,null)
D.fjm=new A.FW(C.a5,null,null,null,D.fsY,C.T,null,null)
D.fu8=new A.a0("No deadlines to export.",null,null,null,null,null,null,null,null,null,null)
D.fkS=new A.db(D.fu8,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.C,null)
D.frG=new A.a0("Microsoft 365 setup",null,null,null,null,null,null,null,null,null,null)
D.frK=new A.a0("Integrations",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["pCU3D1oakEq0Q9DSVljx3Ou5hV0="]=a.current})($__dart_deferred_initializers__);