((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={aaE:function aaE(d,e){this.a=d
this.b=e},
cba(d,e,f){var w=new B.IT(d,C.f.ao(Date.now(),1000),e)
w.as=new B.ae9(f)
w.Q=new B.ae9(f)
return w},
IT:function IT(d,e,f){var _=this
_.a=d
_.e=e
_.f=$
_.as=_.Q=null
_.at=f},
ack:function ack(d,e){this.a=d
this.b=e},
cko(d){if(d==null)return null
return((A.ew(d)<<3|A.iv(d)>>>3)&255)<<8|((A.iv(d)&7)<<5|A.Mr(d)/2|0)&255},
ckk(d){if(d==null)return null
return(((A.b2(d)-1980&127)<<1|A.b7(d)>>>3)&255)<<8|((A.b7(d)&7)<<5|A.bJ(d))&255},
aA0:function aA0(d){var _=this
_.a=$
_.f=_.e=_.d=_.c=_.b=0
_.r=null
_.w=d
_.x=""
_.z=_.y=0},
bVR:function bVR(d,e){var _=this
_.a=d
_.c=_.b=$
_.e=_.d=0
_.r=e},
blO:function blO(d){var _=this
_.a=$
_.b=null
_.d=d
_.r=_.f=null},
c3q:function c3q(d,e,f,g){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.f=g
_.r=null
_.x=_.w=$},
b1W:function b1W(){},
c5n:function c5n(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
aQl:function aQl(){},
ae9:function ae9(d){this.a=d},
cMu(d,e){var w,v,u,t,s,r,q,p,o,n,m="BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//CaseThread//Deadlines//EN\n"+("X-WR-CALNAME:"+e+"\n")
for(w=J.aK(d),v=x.k;w.q();){u=w.gI()
t=v.a(u.gVU())
s=C.o.bF(C.f.j(A.b7(t)),2,"0")
r=C.o.bF(C.f.j(A.bJ(t)),2,"0")
q=new A.aE(Date.now(),0,!1).d6().d_()
p=A.ca("[-:]",!0,!1)
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
m=m+"BEGIN:VEVENT\n"+("UID:"+q+"@casethread\n")+("DTSTAMP:"+o+"Z\n")+("DTSTART;VALUE=DATE:"+(""+A.b2(t)+s+r)+"\n")+("SUMMARY:"+p+"\n")+("DESCRIPTION:"+A.cz(n,"\n","\\n")+"\n")+"END:VEVENT\n"}m+="END:VCALENDAR\n"
return m.charCodeAt(0)==0?m:m},
cKN(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=d.length,v=0,u=y.a;v<d.length;d.length===w||(0,A.E)(d),++v){t=d[v]
s=C.o.a6(A.U(t.h(0,"id")),0,8)
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
cJS(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=0,u=y.f;v<d.length;d.length===w||(0,A.E)(d),++v){t=d[v]
s=A.a8(t.h(0,"expense_date"))
if(s==null)s=""
r=A.a8(t.h(0,"description"))
if(r==null)r=""
q=A.cz(r,'"','""')
p=A.a8(t.h(0,"category"))
if(p==null)p=""
r=A.df(t.h(0,"amount"))
o=r==null?null:C.l.aq(r,2)
if(o==null)o="0.00"
r=A.hk(t.h(0,"billable"))
n=r!==!1?"Yes":"No"
u+=s+',"'+q+'",'+p+","+o+","+n+"\n"}return u.charCodeAt(0)==0?u:u},
cwq(){return new B.Es(null)},
Es:function Es(d){this.a=d},
aVE:function aVE(d,e,f){this.a=d
this.b=e
this.c=f},
aVF:function aVF(d,e,f){this.a=d
this.b=e
this.c=f},
aVG:function aVG(d,e){this.a=d
this.b=e},
aVD:function aVD(){},
aVC:function aVC(d){this.a=d},
PK:function PK(d,e,f,g,h,i){var _=this
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
D=c[132]
F=c[124]
E=c[81]
G=c[133]
B.aaE.prototype={
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
gbY(d){return this.a.length!==0},
gV(d){var w=this.a
return new J.f8(w,w.length,A.a6(w).i("f8<1>"))}}
B.IT.prototype={}
B.ack.prototype={
H(){return"CompressionType."+this.b}}
B.aA0.prototype={}
B.bVR.prototype={}
B.blO.prototype={
boa(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=4294967295,a6=new B.bVR(b1,A.c([],x.m))
a6.b=B.cko(b2)
a6.c=B.ckk(b2)
a3.a=a6
a3.b=a8
for(a6=a7.a,w=A.a6(a6),a6=new J.f8(a6,a6.length,w.i("f8<1>")),v=x.t,w=w.c;a6.q();){u=a6.d
if(u==null)u=w.a(u)
t=new B.aA0(D.uG)
a3.a.r.push(t)
s=u.f
r=new A.aE(A.m7((s===$?u.f=C.f.ao(Date.now(),1000):s)*1000,0,!1),0,!1)
q=u.a
t.a=q
p=a3.a.b
p===$&&A.b()
if(p==null){p=B.cko(r)
p.toString}t.b=p
p=a3.a.c
p===$&&A.b()
if(p==null){p=B.ckk(r)
p.toString}t.c=p
t.z=420
o=a3.aCd(u)
n=u.Q
a8=new A.Fd(new Uint8Array(32768),C.e8)
p=n.a
if(p==null)p=new Uint8Array(0)
m=new A.VV(C.e8)
m.aeY(p,C.e8,a4,a4)
p=a3.a
C.u4.bo9(m,a8,p.a,!0)
l=new A.VV(C.e8)
l.aeY(J.cf(C.K.ga0(a8.c),a8.c.byteOffset,a8.b),C.e8,a4,a4)
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
t.w=D.uG
t.x=null
u=a3.b
t.y=u.b
q=t.a
u.dk(67324752)
h=t.e
g=h>4294967295||t.f>4294967295
p=t.w
if(p===D.uG)f=8
else{p=p===D.Jt?12:0
f=p}e=t.b
d=t.c
o=t.d
if(g)h=a5
a0=g?a5:t.f
a1=A.c([],v)
if(g){a2=new A.Fd(new Uint8Array(32768),C.e8)
a2.aN(1)
a2.aN(0)
a2.aN(16)
a2.aN(0)
a2.qH(t.f)
a2.qH(t.e)
C.i.K(a1,J.cf(C.K.ga0(a2.c),a2.c.byteOffset,a2.b))}l=t.r
k=C.bw.b9(q)
u.ds(20)
u.ds(2048)
u.ds(f)
u.ds(e)
u.ds(d)
u.dk(o)
u.dk(h)
u.dk(a0)
u.ds(k.length)
u.ds(a1.length)
u.i0(k)
u.i0(a1)
if(l!=null)u.aB2(l)
t.r=null}a6=a3.a
w=a3.b
w.toString
a3.bhY(a6.r,a4,w)},
aCd(d){var w,v,u,t,s,r=d.Q,q=r.aCU(!1)
q.c=0
w=q.gu(0)
for(v=0;w>1048576;){u=q.adG(1048576,q.c)
t=q.c
s=u.b
q.c=t+(s==null?0:s.length-u.c)
v=A.qc(u.eB(),v)
w-=1048576}if(w>0)v=A.qc(q.fR(w).eB(),v)
q.c=0
return v},
bhY(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=4294967295,a2=C.bw.b9(""),a3=a6.b
for(w=a4.length,v=x.t,u=!1,t=0;s=a4.length,t<s;a4.length===w||(0,A.E)(a4),++t){r=a4[t]
q=r.e
p=q>4294967295||r.f>4294967295||r.y>4294967295
u=C.cF.qK(u,p)
s=r.w
if(s===D.uG)o=8
else{s=s===D.Jt?12:0
o=s}n=r.b
m=r.c
l=r.d
if(p)q=a1
k=p?a1:r.f
s=r.z
j=p?a1:r.y
i=A.c([],v)
if(p){h=new A.Fd(new Uint8Array(32768),C.e8)
h.aN(1)
h.aN(0)
h.aN(24)
h.aN(0)
h.qH(r.f)
h.qH(r.e)
h.qH(r.y)
C.i.K(i,J.cf(C.K.ga0(h.c),h.c.byteOffset,h.b))}g=r.x
if(g==null)g=""
f=r.a
f===$&&A.b()
e=C.bw.b9(f)
d=C.bw.b9(g)
a6.dk(33639248)
a6.ds(20)
a6.ds(20)
a6.ds(2048)
a6.ds(o)
a6.ds(n)
a6.ds(m)
a6.dk(l)
a6.dk(q)
a6.dk(k)
a6.ds(e.length)
a6.ds(i.length)
a6.ds(d.length)
a6.ds(0)
a6.ds(0)
a6.dk(s<<16>>>0)
a6.dk(j)
a6.i0(e)
a6.i0(i)
a6.i0(d)}w=a6.b
a0=w-a3
p=u||s>65535||a0>4294967295||a3>4294967295
if(p){a6.dk(101075792)
a6.qH(44)
a6.ds(45)
a6.ds(45)
a6.dk(0)
a6.dk(0)
a6.qH(s)
a6.qH(s)
a6.qH(a0)
a6.qH(a3)
a6.dk(117853008)
a6.dk(0)
a6.qH(w)
a6.dk(1)}a6.dk(101010256)
a6.ds(0)
a6.ds(p?65535:0)
a6.ds(p?65535:s)
a6.ds(p?65535:s)
a6.dk(p?a1:a0)
a6.dk(p?a1:a3)
a6.ds(a2.length)
a6.i0(a2)}}
B.c3q.prototype={}
B.b1W.prototype={}
B.c5n.prototype={}
B.aQl.prototype={}
B.ae9.prototype={
gu(d){var w=this.a
w=w==null?null:w.length
return w==null?0:w},
aCU(d){var w=this.a
if(w==null)w=new Uint8Array(0)
return A.VW(w,C.e8,null,null)}}
B.Es.prototype={
cb(d,e){var w=null,v=A.d(d)
return A.hy(A.lY(w,w,w,w,w,w,w,w,D.fsu),w,A.fN(A.c([A.o("Connect CaseThread to your tools. File-based exports work now \u2014 no setup needed.",w,w,w,w,w,v.ok.z,w,w,w),C.aY,new B.PK(C.Of,"Google Calendar / Outlook / Apple","Export all task deadlines as an ICS file. Import it into any calendar app.","Export deadlines (.ics)",new B.aVE(this,d,e),w),new B.PK(D.e_R,"QuickBooks","Export invoices and expenses as CSV for QuickBooks import.","Export for QuickBooks (.zip)",new B.aVF(this,d,e),w),new B.PK(F.nH,"Microsoft 365","Direct sync needs a free Entra app registration. Use the ICS export above with Outlook today.","How to set up",new B.aVG(this,d),w)],x.p),w,C.bq,w,C.a6,!1),w,w)},
Ig(d,e){return this.aVf(d,e)},
aVf(d,e){var w=0,v=A.m(x.H),u,t=2,s=[],r,q,p,o,n,m
var $async$Ig=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.e(e.X($.cab().glO(),x.i),$async$Ig)
case 7:r=g
if(J.eU(r)){if(d.e!=null)d.T(x.q).f.aS(D.flL)
w=1
break}q=B.cMu(r,"CaseThread Deadlines")
p=new Uint8Array(A.b5(C.bw.b9(q)))
w=8
return A.e($.y2().iz(E.AW(null,A.c([E.BD(p,"text/calendar","casethread-deadlines.ics")],x.S),"CaseThread deadlines")),$async$Ig)
case 8:t=2
w=6
break
case 4:t=3
m=s.pop()
o=A.G(m)
if(d.e!=null)d.T(x.q).f.aS(A.bR(null,null,null,null,null,C.D,null,A.o("Export failed: "+A.q(o),null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Ig,v)},
vK(d,e){return this.aVi(d,e)},
aVi(b8,b9){var w=0,v=A.m(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$vK=A.i(function(c0,c1){if(c0===1){t.push(c1)
w=u}for(;;)switch(w){case 0:u=3
s=b9.X($.dB(),x.A)
a7=s.gcc().e.a
r=(a7==null?null:a7.r).a
w=6
return A.e(s.az("case_rooms").bn("id, name").aY("owner_id",r).j7(100),$async$vK)
case 6:q=c1
p=A.c([],x.s)
for(a7=J.aK(q),a8=x.f;a7.q();){o=a7.gI()
J.dr(p,A.U(a8.a(o).h(0,"id")))}n=p
p=x.N
m=A.C(p,p)
for(a7=J.aK(q);a7.q();){l=a7.gI()
if(a8.b(l))J.bg(m,A.U(l.h(0,"id")),A.U(l.h(0,"name")))}k=m
j=y.a
i=y.f
w=J.aY(n)!==0?7:8
break
case 7:w=9
return A.e(s.az("invoices").bn("id, room_id, total_cents, period_start, period_end, created_at").qj("room_id",n).XJ("status","draft").fE("created_at",!1).j7(200),$async$vK)
case 9:h=c1
m=x.X
g=A.c([],m)
for(a7=J.aK(h),a9=x.z;a7.q();){f=a7.gI()
b0=A.aM(f,p,a9)
b1=A.w5(null,null,p,a9)
b1.K(0,b0)
e=b1
J.bg(e,"room_name",J.A(k,a8.a(f).h(0,"room_id")))
J.dr(g,e)}j=B.cKN(g)
u=11
w=14
return A.e(s.az("expenses").bn("expense_date, description, category, amount, billable").qj("room_id",n).fE("expense_date",!1).j7(500),$async$vK)
case 14:d=c1
a0=A.c([],m)
for(m=J.aK(d);m.q();){a1=m.gI()
J.dr(a0,A.aM(a8.a(a1),p,a9))}i=B.cJS(a0)
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
b3=new B.aaE(A.c([],x.L),A.C(p,x.r))
b3.B(0,B.cba("casethread-invoices.csv",J.aY(a2),a2))
b3.B(0,B.cba("casethread-expenses.csv",J.aY(a3),a3))
a4=b3
p=$.RE()
b4=A.b1n(C.e8,32768)
new B.blO(p).boa(a4,b4,!1,null,1,null)
a5=new Uint8Array(A.b5(b4.Oa()))
u=16
w=19
return A.e($.y2().iz(E.AW(null,A.c([E.BD(a5,"application/zip","casethread-quickbooks.zip")],x.S),"CaseThread QuickBooks export")),$async$vK)
case 19:u=3
w=18
break
case 16:u=15
b6=t.pop()
w=20
return A.e(A.a9t(a5,"casethread-quickbooks.zip","application/zip"),$async$vK)
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
if(b8.e!=null)b8.T(x.q).f.aS(A.bR(null,null,null,null,null,C.D,null,A.o("Export failed: "+A.q(a6),null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$vK,v)},
bdB(d){var w=null
A.cV(w,w,!0,w,new B.aVD(),d,w,!0,!0,x.z)}}
B.PK.prototype={
C(d){var w=this,v=null,u=A.d(d).ok,t=x.p
return A.f9(new A.X(C.aB,A.a2(A.c([A.an(A.c([A.aT(w.c,v,v,v,28),C.bf,A.aA(A.o(w.d,v,v,v,v,v,u.w,v,v,v),1,v)],t),C.y,v,C.r,C.u,0,v,v),C.Q,A.o(w.e,v,v,v,v,v,u.z,v,v,v),C.a0,A.zS(A.o(w.f,v,v,v,v,v,v,v,v,v),v,w.r,v)],t),C.S,v,C.r,C.u,0,C.x),v),v,v,G.uX,v,v)},
gcw(){return this.d}}
var z=a.updateTypes([])
B.aVE.prototype={
$0(){return this.a.Ig(this.b,this.c)},
$S:0}
B.aVF.prototype={
$0(){return this.a.vK(this.b,this.c)},
$S:0}
B.aVG.prototype={
$0(){return this.a.bdB(this.b)},
$S:0}
B.aVD.prototype={
$1(d){var w=null
return A.ds(A.c([A.bz(C.tk,w,w,w,new B.aVC(d),w,w)],x.p),D.fkc,w,D.fsq)},
$S:14}
B.aVC.prototype={
$0(){return A.ao(this.a,!1).by()},
$S:0};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.aaE,A.z)
v(A.D,[B.IT,B.aA0,B.bVR,B.blO,B.c3q,B.b1W,B.aQl])
w(B.ack,A.h7)
w(B.c5n,B.b1W)
w(B.ae9,B.aQl)
w(B.Es,A.by)
v(A.di,[B.aVE,B.aVF,B.aVG,B.aVC])
w(B.aVD,A.cg)
w(B.PK,A.a5)})()
A.cD(b.typeUniverse,JSON.parse('{"aaE":{"z":["IT"],"z.E":"IT"},"Es":{"by":[],"O":[],"h":[]},"PK":{"a5":[],"h":[]}}'))
var y={f:"Date,Description,Category,Amount,Billable\n",a:"InvoiceNum,Customer,InvoiceDate,DueDate,ItemDescription,Amount\n"}
var x=(function rtii(){var w=A.J
return{k:w("aE"),i:w("N<w<j9>>"),L:w("x<IT>"),X:w("x<ac<f,@>>"),s:w("x<f>"),p:w("x<h>"),S:w("x<mD>"),m:w("x<aA0>"),t:w("x<v>"),f:w("ac<@,@>"),N:w("f"),A:w("h5"),q:w("h8"),z:w("@"),r:w("v"),H:w("~")}})();(function constants(){D.uG=new B.ack(1,"deflate")
D.Jt=new B.ack(2,"bzip2")
D.e_R=new A.ag(60978,"MaterialIcons",null,!1)
D.ftL=new A.a0("1. Go to entra.microsoft.com \u2192 App registrations \u2192 New.\n2. Add redirect URI for your CaseThread domain.\n3. Grant Calendars.ReadWrite + Mail.Send (delegated).\n4. Paste the client ID/secret into CaseThread \u2192 Settings \u2192 Integrations.\n\nUntil then, the ICS export above imports cleanly into Outlook.",null,null,null,null,null,null,null,null,null,null)
D.fkc=new A.GA(C.a6,null,null,null,D.ftL,C.T,null,null)
D.fuX=new A.a0("No deadlines to export.",null,null,null,null,null,null,null,null,null,null)
D.flL=new A.d8(D.fuX,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.D,null)
D.fsq=new A.a0("Microsoft 365 setup",null,null,null,null,null,null,null,null,null,null)
D.fsu=new A.a0("Integrations",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["YNPIgNK7z1wWgvOUTxK1cDO1vVQ="]=a.current})($__dart_deferred_initializers__);