((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={aaX:function aaX(d,e){this.a=d
this.b=e},
cc8(d,e,f){var w=new B.J2(d,C.f.ao(Date.now(),1000),e)
w.as=new B.aer(f)
w.Q=new B.aer(f)
return w},
J2:function J2(d,e,f){var _=this
_.a=d
_.e=e
_.f=$
_.as=_.Q=null
_.at=f},
acC:function acC(d,e){this.a=d
this.b=e},
cln(d){if(d==null)return null
return((A.ez(d)<<3|A.ix(d)>>>3)&255)<<8|((A.ix(d)&7)<<5|A.MC(d)/2|0)&255},
clj(d){if(d==null)return null
return(((A.b0(d)-1980&127)<<1|A.b7(d)>>>3)&255)<<8|((A.b7(d)&7)<<5|A.bG(d))&255},
aAn:function aAn(d){var _=this
_.a=$
_.f=_.e=_.d=_.c=_.b=0
_.r=null
_.w=d
_.x=""
_.z=_.y=0},
bWE:function bWE(d,e){var _=this
_.a=d
_.c=_.b=$
_.e=_.d=0
_.r=e},
bmy:function bmy(d){var _=this
_.a=$
_.b=null
_.d=d
_.r=_.f=null},
c4m:function c4m(d,e,f,g){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.f=g
_.r=null
_.x=_.w=$},
b2t:function b2t(){},
c6i:function c6i(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
aQR:function aQR(){},
aer:function aer(d){this.a=d},
cNK(d,e){var w,v,u,t,s,r,q,p,o,n,m="BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//CaseThread//Deadlines//EN\n"+("X-WR-CALNAME:"+e+"\n")
for(w=J.aJ(d),v=x.k;w.q();){u=w.gI()
t=v.a(u.gVX())
s=C.n.bF(C.f.j(A.b7(t)),2,"0")
r=C.n.bF(C.f.j(A.bG(t)),2,"0")
q=new A.aE(Date.now(),0,!1).d6().d_()
p=A.cd("[-:]",!0,!1)
o=C.h.ga8(A.cz(q,p,"").split("."))
q=A.q(u.gbE())
p=A.U(u.gcw())
p=A.cz(p,"\\","\\\\")
p=A.cz(p,";","\\;")
p=A.cz(p,",","\\,")
p=A.cz(p,"\n","\\n")
n=A.q(u.gBt())
n=A.cz("Case: "+n,"\\","\\\\")
n=A.cz(n,";","\\;")
n=A.cz(n,",","\\,")
m=m+"BEGIN:VEVENT\n"+("UID:"+q+"@casethread\n")+("DTSTAMP:"+o+"Z\n")+("DTSTART;VALUE=DATE:"+(""+A.b0(t)+s+r)+"\n")+("SUMMARY:"+p+"\n")+("DESCRIPTION:"+A.cz(n,"\n","\\n")+"\n")+"END:VEVENT\n"}m+="END:VCALENDAR\n"
return m.charCodeAt(0)==0?m:m},
cM2(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=d.length,v=0,u=y.a;v<d.length;d.length===w||(0,A.F)(d),++v){t=d[v]
s=C.n.a7(A.U(t.h(0,"id")),0,8)
r=A.a9(t.h(0,"room_name"))
if(r==null)r="Client"
q=A.a9(t.h(0,"created_at"))
p=q==null?null:C.h.ga8(q.split("T"))
if(p==null)p=""
q=A.hE(t.h(0,"total_cents"))
o=C.l.aq((q==null?0:q)/100,2)
q=t.h(0,"period_start")
q=A.q(q==null?"":q)
n=t.h(0,"period_end")
n=A.q(n==null?"":n)
m=A.cz(r,'"','""')
u+=s+',"'+m+'",'+p+',,"'+A.cz("Legal services "+q+" to "+n,'"','""')+'",'+o+"\n"}return u.charCodeAt(0)==0?u:u},
cL6(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=0,u=y.f;v<d.length;d.length===w||(0,A.F)(d),++v){t=d[v]
s=A.a9(t.h(0,"expense_date"))
if(s==null)s=""
r=A.a9(t.h(0,"description"))
if(r==null)r=""
q=A.cz(r,'"','""')
p=A.a9(t.h(0,"category"))
if(p==null)p=""
r=A.dh(t.h(0,"amount"))
o=r==null?null:C.l.aq(r,2)
if(o==null)o="0.00"
r=A.hj(t.h(0,"billable"))
n=r!==!1?"Yes":"No"
u+=s+',"'+q+'",'+p+","+o+","+n+"\n"}return u.charCodeAt(0)==0?u:u},
cxs(){return new B.Ex(null)},
Ex:function Ex(d){this.a=d},
aWa:function aWa(d,e,f){this.a=d
this.b=e
this.c=f},
aWb:function aWb(d,e,f){this.a=d
this.b=e
this.c=f},
aWc:function aWc(d,e){this.a=d
this.b=e},
aW9:function aW9(){},
aW8:function aW8(d){this.a=d},
PT:function PT(d,e,f,g,h,i){var _=this
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
D=c[134]
F=c[125]
E=c[83]
G=c[135]
B.aaX.prototype={
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
ga8(d){return C.h.ga8(this.a)},
gaG(d){return C.h.gaG(this.a)},
gW(d){return this.a.length===0},
gbX(d){return this.a.length!==0},
gV(d){var w=this.a
return new J.f9(w,w.length,A.a6(w).i("f9<1>"))}}
B.J2.prototype={}
B.acC.prototype={
H(){return"CompressionType."+this.b}}
B.aAn.prototype={}
B.bWE.prototype={}
B.bmy.prototype={
boL(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=4294967295,a6=new B.bWE(b1,A.c([],x.m))
a6.b=B.cln(b2)
a6.c=B.clj(b2)
a3.a=a6
a3.b=a8
for(a6=a7.a,w=A.a6(a6),a6=new J.f9(a6,a6.length,w.i("f9<1>")),v=x.t,w=w.c;a6.q();){u=a6.d
if(u==null)u=w.a(u)
t=new B.aAn(D.uH)
a3.a.r.push(t)
s=u.f
r=new A.aE(A.ma((s===$?u.f=C.f.ao(Date.now(),1000):s)*1000,0,!1),0,!1)
q=u.a
t.a=q
p=a3.a.b
p===$&&A.b()
if(p==null){p=B.cln(r)
p.toString}t.b=p
p=a3.a.c
p===$&&A.b()
if(p==null){p=B.clj(r)
p.toString}t.c=p
t.z=420
o=a3.aCA(u)
n=u.Q
a8=new A.Fg(new Uint8Array(32768),C.eb)
p=n.a
if(p==null)p=new Uint8Array(0)
m=new A.W8(C.eb)
m.af5(p,C.eb,a4,a4)
p=a3.a
C.u5.boK(m,a8,p.a,!0)
l=new A.W8(C.eb)
l.af5(J.cj(C.K.ga2(a8.c),a8.c.byteOffset,a8.b),C.eb,a4,a4)
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
t.w=D.uH
t.x=null
u=a3.b
t.y=u.b
q=t.a
u.dk(67324752)
h=t.e
g=h>4294967295||t.f>4294967295
p=t.w
if(p===D.uH)f=8
else{p=p===D.Ju?12:0
f=p}e=t.b
d=t.c
o=t.d
if(g)h=a5
a0=g?a5:t.f
a1=A.c([],v)
if(g){a2=new A.Fg(new Uint8Array(32768),C.eb)
a2.aO(1)
a2.aO(0)
a2.aO(16)
a2.aO(0)
a2.qK(t.f)
a2.qK(t.e)
C.h.J(a1,J.cj(C.K.ga2(a2.c),a2.c.byteOffset,a2.b))}l=t.r
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
u.i1(k)
u.i1(a1)
if(l!=null)u.aBo(l)
t.r=null}a6=a3.a
w=a3.b
w.toString
a3.biw(a6.r,a4,w)},
aCA(d){var w,v,u,t,s,r=d.Q,q=r.aDg(!1)
q.c=0
w=q.gu(0)
for(v=0;w>1048576;){u=q.adO(1048576,q.c)
t=q.c
s=u.b
q.c=t+(s==null?0:s.length-u.c)
v=A.qi(u.eB(),v)
w-=1048576}if(w>0)v=A.qi(q.fS(w).eB(),v)
q.c=0
return v},
biw(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=4294967295,a2=C.bw.b9(""),a3=a6.b
for(w=a4.length,v=x.t,u=!1,t=0;s=a4.length,t<s;a4.length===w||(0,A.F)(a4),++t){r=a4[t]
q=r.e
p=q>4294967295||r.f>4294967295||r.y>4294967295
u=C.cG.qN(u,p)
s=r.w
if(s===D.uH)o=8
else{s=s===D.Ju?12:0
o=s}n=r.b
m=r.c
l=r.d
if(p)q=a1
k=p?a1:r.f
s=r.z
j=p?a1:r.y
i=A.c([],v)
if(p){h=new A.Fg(new Uint8Array(32768),C.eb)
h.aO(1)
h.aO(0)
h.aO(24)
h.aO(0)
h.qK(r.f)
h.qK(r.e)
h.qK(r.y)
C.h.J(i,J.cj(C.K.ga2(h.c),h.c.byteOffset,h.b))}g=r.x
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
a6.i1(e)
a6.i1(i)
a6.i1(d)}w=a6.b
a0=w-a3
p=u||s>65535||a0>4294967295||a3>4294967295
if(p){a6.dk(101075792)
a6.qK(44)
a6.dt(45)
a6.dt(45)
a6.dk(0)
a6.dk(0)
a6.qK(s)
a6.qK(s)
a6.qK(a0)
a6.qK(a3)
a6.dk(117853008)
a6.dk(0)
a6.qK(w)
a6.dk(1)}a6.dk(101010256)
a6.dt(0)
a6.dt(p?65535:0)
a6.dt(p?65535:s)
a6.dt(p?65535:s)
a6.dk(p?a1:a0)
a6.dk(p?a1:a3)
a6.dt(a2.length)
a6.i1(a2)}}
B.c4m.prototype={}
B.b2t.prototype={}
B.c6i.prototype={}
B.aQR.prototype={}
B.aer.prototype={
gu(d){var w=this.a
w=w==null?null:w.length
return w==null?0:w},
aDg(d){var w=this.a
if(w==null)w=new Uint8Array(0)
return A.W9(w,C.eb,null,null)}}
B.Ex.prototype={
cc(d,e){var w=null,v=A.d(d)
return A.hy(A.m_(w,w,w,w,w,w,w,w,D.fsG),w,A.hh(A.c([A.o("Connect CaseThread to your tools. File-based exports work now \u2014 no setup needed.",w,w,w,w,w,v.ok.z,w,w,w),C.aV,new B.PT(C.Og,"Google Calendar / Outlook / Apple","Export all task deadlines as an ICS file. Import it into any calendar app.","Export deadlines (.ics)",new B.aWa(this,d,e),w),new B.PT(D.e_X,"QuickBooks","Export invoices and expenses as CSV for QuickBooks import.","Export for QuickBooks (.zip)",new B.aWb(this,d,e),w),new B.PT(F.nL,"Microsoft 365","Direct sync needs a free Entra app registration. Use the ICS export above with Outlook today.","How to set up",new B.aWc(this,d),w)],x.p),w,C.bo,w,C.a6,!1),w,w)},
Ik(d,e){return this.aVG(d,e)},
aVG(d,e){var w=0,v=A.m(x.H),u,t=2,s=[],r,q,p,o,n,m
var $async$Ik=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.e(e.X($.cba().glO(),x.i),$async$Ik)
case 7:r=g
if(J.eE(r)){if(d.e!=null)d.T(x.q).f.aS(D.flW)
w=1
break}q=B.cNK(r,"CaseThread Deadlines")
p=new Uint8Array(A.b5(C.bw.b9(q)))
w=8
return A.e($.y8().iz(E.B1(null,A.c([E.BJ(p,"text/calendar","casethread-deadlines.ics")],x.S),"CaseThread deadlines")),$async$Ik)
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
return A.l($async$Ik,v)},
vL(d,e){return this.aVJ(d,e)},
aVJ(b8,b9){var w=0,v=A.m(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$vL=A.i(function(c0,c1){if(c0===1){t.push(c1)
w=u}for(;;)switch(w){case 0:u=3
s=b9.X($.dB(),x.A)
a7=s.gcb().e.a
r=(a7==null?null:a7.r).a
w=6
return A.e(s.az("case_rooms").bn("id, name").aY("owner_id",r).j7(100),$async$vL)
case 6:q=c1
p=A.c([],x.s)
for(a7=J.aJ(q),a8=x.f;a7.q();){o=a7.gI()
J.ds(p,A.U(a8.a(o).h(0,"id")))}n=p
p=x.N
m=A.D(p,p)
for(a7=J.aJ(q);a7.q();){l=a7.gI()
if(a8.b(l))J.bg(m,A.U(l.h(0,"id")),A.U(l.h(0,"name")))}k=m
j=y.a
i=y.f
w=J.aY(n)!==0?7:8
break
case 7:w=9
return A.e(s.az("invoices").bn("id, room_id, total_cents, period_start, period_end, created_at").ql("room_id",n).XM("status","draft").fF("created_at",!1).j7(200),$async$vL)
case 9:h=c1
m=x.X
g=A.c([],m)
for(a7=J.aJ(h),a9=x.z;a7.q();){f=a7.gI()
b0=A.aM(f,p,a9)
b1=A.wc(null,null,p,a9)
b1.J(0,b0)
e=b1
J.bg(e,"room_name",J.A(k,a8.a(f).h(0,"room_id")))
J.ds(g,e)}j=B.cM2(g)
u=11
w=14
return A.e(s.az("expenses").bn("expense_date, description, category, amount, billable").ql("room_id",n).fF("expense_date",!1).j7(500),$async$vL)
case 14:d=c1
a0=A.c([],m)
for(m=J.aJ(d);m.q();){a1=m.gI()
J.ds(a0,A.aM(a8.a(a1),p,a9))}i=B.cL6(a0)
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
b3=new B.aaX(A.c([],x.L),A.D(p,x.r))
b3.B(0,B.cc8("casethread-invoices.csv",J.aY(a2),a2))
b3.B(0,B.cc8("casethread-expenses.csv",J.aY(a3),a3))
a4=b3
p=$.RP()
b4=A.b1U(C.eb,32768)
new B.bmy(p).boL(a4,b4,!1,null,1,null)
a5=new Uint8Array(A.b5(b4.Ob()))
u=16
w=19
return A.e($.y8().iz(E.B1(null,A.c([E.BJ(a5,"application/zip","casethread-quickbooks.zip")],x.S),"CaseThread QuickBooks export")),$async$vL)
case 19:u=3
w=18
break
case 16:u=15
b6=t.pop()
w=20
return A.e(A.a9N(a5,"casethread-quickbooks.zip","application/zip"),$async$vL)
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
return A.l($async$vL,v)},
be8(d){var w=null
A.cV(w,w,!0,w,new B.aW9(),d,w,!0,!0,x.z)}}
B.PT.prototype={
C(d){var w=this,v=null,u=A.d(d).ok,t=x.p
return A.fa(new A.Y(C.aD,A.a2(A.c([A.an(A.c([A.aT(w.c,v,v,v,28),C.bb,A.aA(A.o(w.d,v,v,v,v,v,u.w,v,v,v),1,v)],t),C.y,v,C.r,C.u,0,v,v),C.Q,A.o(w.e,v,v,v,v,v,u.z,v,v,v),C.Z,A.zX(A.o(w.f,v,v,v,v,v,v,v,v,v),v,w.r,v)],t),C.S,v,C.r,C.u,0,C.x),v),v,v,G.uY,v,v)},
gcw(){return this.d}}
var z=a.updateTypes([])
B.aWa.prototype={
$0(){return this.a.Ik(this.b,this.c)},
$S:0}
B.aWb.prototype={
$0(){return this.a.vL(this.b,this.c)},
$S:0}
B.aWc.prototype={
$0(){return this.a.be8(this.b)},
$S:0}
B.aW9.prototype={
$1(d){var w=null
return A.dt(A.c([A.bw(C.tm,w,w,w,new B.aW8(d),w,w)],x.p),D.fkn,w,D.fsC)},
$S:14}
B.aW8.prototype={
$0(){return A.ao(this.a,!1).by()},
$S:0};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.aaX,A.z)
v(A.E,[B.J2,B.aAn,B.bWE,B.bmy,B.c4m,B.b2t,B.aQR])
w(B.acC,A.fU)
w(B.c6i,B.b2t)
w(B.aer,B.aQR)
w(B.Ex,A.bA)
v(A.dg,[B.aWa,B.aWb,B.aWc,B.aW8])
w(B.aW9,A.cg)
w(B.PT,A.a5)})()
A.cC(b.typeUniverse,JSON.parse('{"aaX":{"z":["J2"],"z.E":"J2"},"Ex":{"bA":[],"O":[],"h":[]},"PT":{"a5":[],"h":[]}}'))
var y={f:"Date,Description,Category,Amount,Billable\n",a:"InvoiceNum,Customer,InvoiceDate,DueDate,ItemDescription,Amount\n"}
var x=(function rtii(){var w=A.J
return{k:w("aE"),i:w("N<v<jb>>"),L:w("x<J2>"),X:w("x<ad<f,@>>"),s:w("x<f>"),p:w("x<h>"),S:w("x<mG>"),m:w("x<aAn>"),t:w("x<w>"),f:w("ad<@,@>"),N:w("f"),A:w("h6"),q:w("h8"),z:w("@"),r:w("w"),H:w("~")}})();(function constants(){D.uH=new B.acC(1,"deflate")
D.Ju=new B.acC(2,"bzip2")
D.e_X=new A.ah(60978,"MaterialIcons",null,!1)
D.ftW=new A.a0("1. Go to entra.microsoft.com \u2192 App registrations \u2192 New.\n2. Add redirect URI for your CaseThread domain.\n3. Grant Calendars.ReadWrite + Mail.Send (delegated).\n4. Paste the client ID/secret into CaseThread \u2192 Settings \u2192 Integrations.\n\nUntil then, the ICS export above imports cleanly into Outlook.",null,null,null,null,null,null,null,null,null,null)
D.fkn=new A.GH(C.a6,null,null,null,D.ftW,C.T,null,null)
D.fv8=new A.a0("No deadlines to export.",null,null,null,null,null,null,null,null,null,null)
D.flW=new A.d8(D.fv8,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.D,null)
D.fsC=new A.a0("Microsoft 365 setup",null,null,null,null,null,null,null,null,null,null)
D.fsG=new A.a0("Integrations",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["mIJ9jXiL9vlRvk9JW3hkOib4U60="]=a.current})($__dart_deferred_initializers__);