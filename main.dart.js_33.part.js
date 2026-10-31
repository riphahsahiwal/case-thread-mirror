((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={aaG:function aaG(d,e){this.a=d
this.b=e},
cbi(d,e,f){var w=new B.IW(d,C.f.ao(Date.now(),1000),e)
w.as=new B.aeb(f)
w.Q=new B.aeb(f)
return w},
IW:function IW(d,e,f){var _=this
_.a=d
_.e=e
_.f=$
_.as=_.Q=null
_.at=f},
acm:function acm(d,e){this.a=d
this.b=e},
ckv(d){if(d==null)return null
return((A.ey(d)<<3|A.iv(d)>>>3)&255)<<8|((A.iv(d)&7)<<5|A.Mu(d)/2|0)&255},
ckr(d){if(d==null)return null
return(((A.b1(d)-1980&127)<<1|A.b7(d)>>>3)&255)<<8|((A.b7(d)&7)<<5|A.bG(d))&255},
aA1:function aA1(d){var _=this
_.a=$
_.f=_.e=_.d=_.c=_.b=0
_.r=null
_.w=d
_.x=""
_.z=_.y=0},
bVY:function bVY(d,e){var _=this
_.a=d
_.c=_.b=$
_.e=_.d=0
_.r=e},
blY:function blY(d){var _=this
_.a=$
_.b=null
_.d=d
_.r=_.f=null},
c3z:function c3z(d,e,f,g){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.f=g
_.r=null
_.x=_.w=$},
b21:function b21(){},
c5v:function c5v(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
aQr:function aQr(){},
aeb:function aeb(d){this.a=d},
cME(d,e){var w,v,u,t,s,r,q,p,o,n,m="BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//CaseThread//Deadlines//EN\n"+("X-WR-CALNAME:"+e+"\n")
for(w=J.aK(d),v=x.k;w.q();){u=w.gI()
t=v.a(u.gVU())
s=C.n.bF(C.f.j(A.b7(t)),2,"0")
r=C.n.bF(C.f.j(A.bG(t)),2,"0")
q=new A.aE(Date.now(),0,!1).d6().d_()
p=A.cc("[-:]",!0,!1)
o=C.i.ga9(A.cz(q,p,"").split("."))
q=A.q(u.gbE())
p=A.U(u.gcw())
p=A.cz(p,"\\","\\\\")
p=A.cz(p,";","\\;")
p=A.cz(p,",","\\,")
p=A.cz(p,"\n","\\n")
n=A.q(u.gBr())
n=A.cz("Case: "+n,"\\","\\\\")
n=A.cz(n,";","\\;")
n=A.cz(n,",","\\,")
m=m+"BEGIN:VEVENT\n"+("UID:"+q+"@casethread\n")+("DTSTAMP:"+o+"Z\n")+("DTSTART;VALUE=DATE:"+(""+A.b1(t)+s+r)+"\n")+("SUMMARY:"+p+"\n")+("DESCRIPTION:"+A.cz(n,"\n","\\n")+"\n")+"END:VEVENT\n"}m+="END:VCALENDAR\n"
return m.charCodeAt(0)==0?m:m},
cKX(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=d.length,v=0,u=y.a;v<d.length;d.length===w||(0,A.F)(d),++v){t=d[v]
s=C.n.a6(A.U(t.h(0,"id")),0,8)
r=A.a8(t.h(0,"room_name"))
if(r==null)r="Client"
q=A.a8(t.h(0,"created_at"))
p=q==null?null:C.i.ga9(q.split("T"))
if(p==null)p=""
q=A.hD(t.h(0,"total_cents"))
o=C.l.aq((q==null?0:q)/100,2)
q=t.h(0,"period_start")
q=A.q(q==null?"":q)
n=t.h(0,"period_end")
n=A.q(n==null?"":n)
m=A.cz(r,'"','""')
u+=s+',"'+m+'",'+p+',,"'+A.cz("Legal services "+q+" to "+n,'"','""')+'",'+o+"\n"}return u.charCodeAt(0)==0?u:u},
cK2(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=0,u=y.f;v<d.length;d.length===w||(0,A.F)(d),++v){t=d[v]
s=A.a8(t.h(0,"expense_date"))
if(s==null)s=""
r=A.a8(t.h(0,"description"))
if(r==null)r=""
q=A.cz(r,'"','""')
p=A.a8(t.h(0,"category"))
if(p==null)p=""
r=A.dg(t.h(0,"amount"))
o=r==null?null:C.l.aq(r,2)
if(o==null)o="0.00"
r=A.hj(t.h(0,"billable"))
n=r!==!1?"Yes":"No"
u+=s+',"'+q+'",'+p+","+o+","+n+"\n"}return u.charCodeAt(0)==0?u:u},
cwy(){return new B.Eq(null)},
Eq:function Eq(d){this.a=d},
aVK:function aVK(d,e,f){this.a=d
this.b=e
this.c=f},
aVL:function aVL(d,e,f){this.a=d
this.b=e
this.c=f},
aVM:function aVM(d,e){this.a=d
this.b=e},
aVJ:function aVJ(){},
aVI:function aVI(d){this.a=d},
PL:function PL(d,e,f,g,h,i){var _=this
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
D=c[133]
F=c[124]
E=c[82]
G=c[134]
B.aaG.prototype={
B(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.l(0,u,w.length-1)},
gu(d){return this.a.length},
h(d,e){return this.a[e]},
l(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.M(0,v[e].a)
v[e]=f
w.l(0,f.a,e)},
ga9(d){return C.i.ga9(this.a)},
gaJ(d){return C.i.gaJ(this.a)},
gW(d){return this.a.length===0},
gbX(d){return this.a.length!==0},
gV(d){var w=this.a
return new J.f9(w,w.length,A.a6(w).i("f9<1>"))}}
B.IW.prototype={}
B.acm.prototype={
H(){return"CompressionType."+this.b}}
B.aA1.prototype={}
B.bVY.prototype={}
B.blY.prototype={
boj(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=4294967295,a6=new B.bVY(b1,A.c([],x.m))
a6.b=B.ckv(b2)
a6.c=B.ckr(b2)
a3.a=a6
a3.b=a8
for(a6=a7.a,w=A.a6(a6),a6=new J.f9(a6,a6.length,w.i("f9<1>")),v=x.t,w=w.c;a6.q();){u=a6.d
if(u==null)u=w.a(u)
t=new B.aA1(D.uF)
a3.a.r.push(t)
s=u.f
r=new A.aE(A.m8((s===$?u.f=C.f.ao(Date.now(),1000):s)*1000,0,!1),0,!1)
q=u.a
t.a=q
p=a3.a.b
p===$&&A.b()
if(p==null){p=B.ckv(r)
p.toString}t.b=p
p=a3.a.c
p===$&&A.b()
if(p==null){p=B.ckr(r)
p.toString}t.c=p
t.z=420
o=a3.aCj(u)
n=u.Q
a8=new A.Fb(new Uint8Array(32768),C.e9)
p=n.a
if(p==null)p=new Uint8Array(0)
m=new A.VX(C.e9)
m.af_(p,C.e9,a4,a4)
p=a3.a
C.u2.boi(m,a8,p.a,!0)
l=new A.VX(C.e9)
l.af_(J.ch(C.K.ga0(a8.c),a8.c.byteOffset,a8.b),C.e9,a4,a4)
k=C.bw.b9(q)
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
t.w=D.uF
t.x=null
u=a3.b
t.y=u.b
q=t.a
u.dk(67324752)
h=t.e
g=h>4294967295||t.f>4294967295
p=t.w
if(p===D.uF)f=8
else{p=p===D.Js?12:0
f=p}e=t.b
d=t.c
o=t.d
if(g)h=a5
a0=g?a5:t.f
a1=A.c([],v)
if(g){a2=new A.Fb(new Uint8Array(32768),C.e9)
a2.aN(1)
a2.aN(0)
a2.aN(16)
a2.aN(0)
a2.qI(t.f)
a2.qI(t.e)
C.i.J(a1,J.ch(C.K.ga0(a2.c),a2.c.byteOffset,a2.b))}l=t.r
k=C.bw.b9(q)
u.dt(20)
u.dt(2048)
u.dt(f)
u.dt(e)
u.dt(d)
u.dk(o)
u.dk(h)
u.dk(a0)
u.dt(k.length)
u.dt(a1.length)
u.i0(k)
u.i0(a1)
if(l!=null)u.aB8(l)
t.r=null}a6=a3.a
w=a3.b
w.toString
a3.bi6(a6.r,a4,w)},
aCj(d){var w,v,u,t,s,r=d.Q,q=r.aD_(!1)
q.c=0
w=q.gu(0)
for(v=0;w>1048576;){u=q.adI(1048576,q.c)
t=q.c
s=u.b
q.c=t+(s==null?0:s.length-u.c)
v=A.qe(u.eB(),v)
w-=1048576}if(w>0)v=A.qe(q.fR(w).eB(),v)
q.c=0
return v},
bi6(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=4294967295,a2=C.bw.b9(""),a3=a6.b
for(w=a4.length,v=x.t,u=!1,t=0;s=a4.length,t<s;a4.length===w||(0,A.F)(a4),++t){r=a4[t]
q=r.e
p=q>4294967295||r.f>4294967295||r.y>4294967295
u=C.cG.qL(u,p)
s=r.w
if(s===D.uF)o=8
else{s=s===D.Js?12:0
o=s}n=r.b
m=r.c
l=r.d
if(p)q=a1
k=p?a1:r.f
s=r.z
j=p?a1:r.y
i=A.c([],v)
if(p){h=new A.Fb(new Uint8Array(32768),C.e9)
h.aN(1)
h.aN(0)
h.aN(24)
h.aN(0)
h.qI(r.f)
h.qI(r.e)
h.qI(r.y)
C.i.J(i,J.ch(C.K.ga0(h.c),h.c.byteOffset,h.b))}g=r.x
if(g==null)g=""
f=r.a
f===$&&A.b()
e=C.bw.b9(f)
d=C.bw.b9(g)
a6.dk(33639248)
a6.dt(20)
a6.dt(20)
a6.dt(2048)
a6.dt(o)
a6.dt(n)
a6.dt(m)
a6.dk(l)
a6.dk(q)
a6.dk(k)
a6.dt(e.length)
a6.dt(i.length)
a6.dt(d.length)
a6.dt(0)
a6.dt(0)
a6.dk(s<<16>>>0)
a6.dk(j)
a6.i0(e)
a6.i0(i)
a6.i0(d)}w=a6.b
a0=w-a3
p=u||s>65535||a0>4294967295||a3>4294967295
if(p){a6.dk(101075792)
a6.qI(44)
a6.dt(45)
a6.dt(45)
a6.dk(0)
a6.dk(0)
a6.qI(s)
a6.qI(s)
a6.qI(a0)
a6.qI(a3)
a6.dk(117853008)
a6.dk(0)
a6.qI(w)
a6.dk(1)}a6.dk(101010256)
a6.dt(0)
a6.dt(p?65535:0)
a6.dt(p?65535:s)
a6.dt(p?65535:s)
a6.dk(p?a1:a0)
a6.dk(p?a1:a3)
a6.dt(a2.length)
a6.i0(a2)}}
B.c3z.prototype={}
B.b21.prototype={}
B.c5v.prototype={}
B.aQr.prototype={}
B.aeb.prototype={
gu(d){var w=this.a
w=w==null?null:w.length
return w==null?0:w},
aD_(d){var w=this.a
if(w==null)w=new Uint8Array(0)
return A.VY(w,C.e9,null,null)}}
B.Eq.prototype={
cc(d,e){var w=null,v=A.d(d)
return A.hx(A.lY(w,w,w,w,w,w,w,w,D.fsz),w,A.hh(A.c([A.o("Connect CaseThread to your tools. File-based exports work now \u2014 no setup needed.",w,w,w,w,w,v.ok.z,w,w,w),C.aV,new B.PL(C.Of,"Google Calendar / Outlook / Apple","Export all task deadlines as an ICS file. Import it into any calendar app.","Export deadlines (.ics)",new B.aVK(this,d,e),w),new B.PL(D.e_S,"QuickBooks","Export invoices and expenses as CSV for QuickBooks import.","Export for QuickBooks (.zip)",new B.aVL(this,d,e),w),new B.PL(F.nG,"Microsoft 365","Direct sync needs a free Entra app registration. Use the ICS export above with Outlook today.","How to set up",new B.aVM(this,d),w)],x.p),w,C.bo,w,C.a6,!1),w,w)},
If(d,e){return this.aVm(d,e)},
aVm(d,e){var w=0,v=A.m(x.H),u,t=2,s=[],r,q,p,o,n,m
var $async$If=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.e(e.X($.cak().glO(),x.i),$async$If)
case 7:r=g
if(J.eV(r)){if(d.e!=null)d.S(x.q).f.aS(D.flQ)
w=1
break}q=B.cME(r,"CaseThread Deadlines")
p=new Uint8Array(A.b5(C.bw.b9(q)))
w=8
return A.e($.y2().iz(E.AW(null,A.c([E.BD(p,"text/calendar","casethread-deadlines.ics")],x.S),"CaseThread deadlines")),$async$If)
case 8:t=2
w=6
break
case 4:t=3
m=s.pop()
o=A.G(m)
if(d.e!=null)d.S(x.q).f.aS(A.bQ(null,null,null,null,null,C.D,null,A.o("Export failed: "+A.q(o),null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$If,v)},
vK(d,e){return this.aVp(d,e)},
aVp(b8,b9){var w=0,v=A.m(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$vK=A.i(function(c0,c1){if(c0===1){t.push(c1)
w=u}for(;;)switch(w){case 0:u=3
s=b9.X($.dB(),x.A)
a7=s.gcb().e.a
r=(a7==null?null:a7.r).a
w=6
return A.e(s.az("case_rooms").bn("id, name").aY("owner_id",r).j7(100),$async$vK)
case 6:q=c1
p=A.c([],x.s)
for(a7=J.aK(q),a8=x.f;a7.q();){o=a7.gI()
J.ds(p,A.U(a8.a(o).h(0,"id")))}n=p
p=x.N
m=A.C(p,p)
for(a7=J.aK(q);a7.q();){l=a7.gI()
if(a8.b(l))J.bg(m,A.U(l.h(0,"id")),A.U(l.h(0,"name")))}k=m
j=y.a
i=y.f
w=J.aY(n)!==0?7:8
break
case 7:w=9
return A.e(s.az("invoices").bn("id, room_id, total_cents, period_start, period_end, created_at").qk("room_id",n).XJ("status","draft").fE("created_at",!1).j7(200),$async$vK)
case 9:h=c1
m=x.X
g=A.c([],m)
for(a7=J.aK(h),a9=x.z;a7.q();){f=a7.gI()
b0=A.aM(f,p,a9)
b1=A.w6(null,null,p,a9)
b1.J(0,b0)
e=b1
J.bg(e,"room_name",J.A(k,a8.a(f).h(0,"room_id")))
J.ds(g,e)}j=B.cKX(g)
u=11
w=14
return A.e(s.az("expenses").bn("expense_date, description, category, amount, billable").qk("room_id",n).fE("expense_date",!1).j7(500),$async$vK)
case 14:d=c1
a0=A.c([],m)
for(m=J.aK(d);m.q();){a1=m.gI()
J.ds(a0,A.aM(a8.a(a1),p,a9))}i=B.cK2(a0)
u=3
w=13
break
case 11:u=10
b5=t.pop()
w=13
break
case 10:w=3
break
case 13:case 8:a2=new Uint8Array(A.b5(C.bw.b9(j)))
a3=new Uint8Array(A.b5(C.bw.b9(i)))
b3=new B.aaG(A.c([],x.L),A.C(p,x.r))
b3.B(0,B.cbi("casethread-invoices.csv",J.aY(a2),a2))
b3.B(0,B.cbi("casethread-expenses.csv",J.aY(a3),a3))
a4=b3
p=$.RG()
b4=A.b1t(C.e9,32768)
new B.blY(p).boj(a4,b4,!1,null,1,null)
a5=new Uint8Array(A.b5(b4.O9()))
u=16
w=19
return A.e($.y2().iz(E.AW(null,A.c([E.BD(a5,"application/zip","casethread-quickbooks.zip")],x.S),"CaseThread QuickBooks export")),$async$vK)
case 19:u=3
w=18
break
case 16:u=15
b6=t.pop()
w=20
return A.e(A.a9v(a5,"casethread-quickbooks.zip","application/zip"),$async$vK)
case 20:w=18
break
case 15:w=3
break
case 18:u=1
w=5
break
case 3:u=2
b7=t.pop()
a6=A.G(b7)
if(b8.e!=null)b8.S(x.q).f.aS(A.bQ(null,null,null,null,null,C.D,null,A.o("Export failed: "+A.q(a6),null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$vK,v)},
bdL(d){var w=null
A.cV(w,w,!0,w,new B.aVJ(),d,w,!0,!0,x.z)}}
B.PL.prototype={
C(d){var w=this,v=null,u=A.d(d).ok,t=x.p
return A.fa(new A.X(C.aC,A.a2(A.c([A.an(A.c([A.aS(w.c,v,v,v,28),C.bb,A.ay(A.o(w.d,v,v,v,v,v,u.w,v,v,v),1,v)],t),C.y,v,C.r,C.u,0,v,v),C.Q,A.o(w.e,v,v,v,v,v,u.z,v,v,v),C.Z,A.zS(A.o(w.f,v,v,v,v,v,v,v,v,v),v,w.r,v)],t),C.S,v,C.r,C.u,0,C.x),v),v,v,G.uW,v,v)},
gcw(){return this.d}}
var z=a.updateTypes([])
B.aVK.prototype={
$0(){return this.a.If(this.b,this.c)},
$S:0}
B.aVL.prototype={
$0(){return this.a.vK(this.b,this.c)},
$S:0}
B.aVM.prototype={
$0(){return this.a.bdL(this.b)},
$S:0}
B.aVJ.prototype={
$1(d){var w=null
return A.dt(A.c([A.bx(C.ti,w,w,w,new B.aVI(d),w,w)],x.p),D.fkh,w,D.fsv)},
$S:14}
B.aVI.prototype={
$0(){return A.ao(this.a,!1).by()},
$S:0};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.aaG,A.z)
v(A.E,[B.IW,B.aA1,B.bVY,B.blY,B.c3z,B.b21,B.aQr])
w(B.acm,A.h6)
w(B.c5v,B.b21)
w(B.aeb,B.aQr)
w(B.Eq,A.bA)
v(A.di,[B.aVK,B.aVL,B.aVM,B.aVI])
w(B.aVJ,A.ci)
w(B.PL,A.a5)})()
A.cD(b.typeUniverse,JSON.parse('{"aaG":{"z":["IW"],"z.E":"IW"},"Eq":{"bA":[],"O":[],"h":[]},"PL":{"a5":[],"h":[]}}'))
var y={f:"Date,Description,Category,Amount,Billable\n",a:"InvoiceNum,Customer,InvoiceDate,DueDate,ItemDescription,Amount\n"}
var x=(function rtii(){var w=A.J
return{k:w("aE"),i:w("N<w<j9>>"),L:w("x<IW>"),X:w("x<ac<f,@>>"),s:w("x<f>"),p:w("x<h>"),S:w("x<mE>"),m:w("x<aA1>"),t:w("x<v>"),f:w("ac<@,@>"),N:w("f"),A:w("h4"),q:w("h7"),z:w("@"),r:w("v"),H:w("~")}})();(function constants(){D.uF=new B.acm(1,"deflate")
D.Js=new B.acm(2,"bzip2")
D.e_S=new A.ah(60978,"MaterialIcons",null,!1)
D.ftP=new A.a0("1. Go to entra.microsoft.com \u2192 App registrations \u2192 New.\n2. Add redirect URI for your CaseThread domain.\n3. Grant Calendars.ReadWrite + Mail.Send (delegated).\n4. Paste the client ID/secret into CaseThread \u2192 Settings \u2192 Integrations.\n\nUntil then, the ICS export above imports cleanly into Outlook.",null,null,null,null,null,null,null,null,null,null)
D.fkh=new A.GA(C.a6,null,null,null,D.ftP,C.T,null,null)
D.fv1=new A.a0("No deadlines to export.",null,null,null,null,null,null,null,null,null,null)
D.flQ=new A.d8(D.fv1,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.D,null)
D.fsv=new A.a0("Microsoft 365 setup",null,null,null,null,null,null,null,null,null,null)
D.fsz=new A.a0("Integrations",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["ldFTRH9ZQgjHAeJBDKj225580gg="]=a.current})($__dart_deferred_initializers__);