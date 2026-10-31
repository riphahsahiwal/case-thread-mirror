((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C={
cvO(){return new C.Eb(null)},
Eb:function Eb(d){this.a=d},
aSU:function aSU(d,e,f){this.a=d
this.b=e
this.c=f},
aSW:function aSW(){},
aSV:function aSV(d,e){this.a=d
this.b=e},
aST:function aST(d){this.a=d},
aSP:function aSP(){},
aSQ:function aSQ(d){this.a=d},
aSR:function aSR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aSS:function aSS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cLz(d){var x=new C.c04(d)
return A.c([A.q(new C.c06(d).$0())+" case rooms",new C.c05(d).j(0)+" members per room",A.q(new C.c03(d).$0())+" evidence storage",A.q(x.$1(E.a8j))+" AI analyses / month",A.q(x.$1(E.a8k))+" transcription minutes / month",A.q(x.$1(E.a8l))+" OSINT lookups / month"],y.x)},
cLA(d){var x
if(d.a==="enterprise")return"Custom"
x=d.c
if(x===0)return"Free"
return"$"+B.l.aq(x/100,0)},
cLy(d){var x=d.a
if(x==="free")return"Free forever. No card required."
if(x==="enterprise")return"Tailored pricing for firms and agencies."
return"Per month, billed to the workspace owner. Everyone you invite is included \u2014 no per-seat fees."},
c06:function c06(d){this.a=d},
c05:function c05(d){this.a=d},
c03:function c03(d){this.a=d},
c04:function c04(d){this.a=d}},D,F,E,G,H
A=c[0]
B=c[2]
C=a.updateHolder(c[9],C)
D=c[93]
F=c[55]
E=c[96]
G=c[95]
H=c[94]
C.Eb.prototype={
cc(d,e){var x=null
return A.hx(x,x,A.f4(!0,A.bR(new A.e7(D.abp,A.dK(e.T($.c34(),y.p),new C.aSU(this,d,e),new C.aSV(A.d(d).ok,d),new C.aSW(),!1,!0,!1),x),x,x),!0,B.aa,!0,!0),x,x)},
aRG(d,e,f){var x,w,v,u=null,t=A.d(d).ok,s=A.K(f,y.k)
B.i.ed(s,new C.aSP())
x=t.e
x=A.o("Get started",u,u,u,u,u,x==null?u:x.cT(B.ak),B.aV,u,u)
w=t.z
if(w==null)w=u
else w=w.U(A.d(d).ax.a===B.p?B.B:B.C)
w=A.c([B.aY,x,B.ah,A.o("Choose the plan that fits your investigations.\nYou can change or cancel anytime.",u,u,u,u,u,w,B.aV,u,u),B.aY],y.u)
for(x=s.length,v=0;v<s.length;s.length===x||(0,A.F)(s),++v)w.push(this.b8R(d,e,s[v]))
w.push(B.a0)
w.push(A.bx(D.frj,D.fyA,u,u,new C.aSQ(d),u,u))
return A.fN(w,u,B.bq,u,B.a6,!1)},
b8R(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.d(d).ok,j=f.a,i=j==="investigator",h=A.d(d).ax.a===B.p?B.bQ:B.M,g=A.b3(12)
if(i)x=A.d(d).ax.a===B.p?B.bW:B.ac
else x=A.d(d).ax.a===B.p?B.aE:B.cA
w=i?2:1
v=k.w
v=v==null?l:v.cT(B.aR)
u=y.u
v=A.c([A.aA(A.o(f.b,l,l,l,l,l,v,l,l,l),1,l)],u)
if(i){t=A.d(d).ax.a===B.p?B.bW:B.ac
s=A.b3(999)
r=k.ax
v.push(A.ar(l,A.o("MOST POPULAR",l,l,l,l,l,r==null?l:r.du(B.M,B.ak),l,l,l),B.F,l,l,new A.aB(t,l,l,s,l,l,B.X),l,l,l,l,B.B6,l,l,l))}v=A.an(v,B.y,l,B.r,B.u,0,l,l)
t=C.cLA(f)
s=k.f
t=A.c([A.o(t,l,l,l,l,l,s==null?l:s.cT(B.ak),l,l,l)],u)
if(j!=="enterprise"&&f.c>0){s=k.Q
if(s==null)s=l
else s=s.U(A.d(d).ax.a===B.p?B.B:B.C)
t.push(A.o(" /month",l,l,l,l,l,s,l,l,l))}t=A.an(t,B.no,l,B.r,B.u,0,B.aA,l)
s=C.cLy(f)
r=k.Q
if(r==null)q=l
else q=r.U(A.d(d).ax.a===B.p?B.B:B.C)
q=A.o(s,l,l,l,l,l,q,l,l,l)
s=(A.d(d).ax.a===B.p?B.bW:B.ac).aO(0.08)
p=A.b3(8)
v=A.c([v,B.bN,t,B.bN,q,B.Q,A.ar(l,A.an(A.c([A.aT(H.NK,A.d(d).ax.a===B.p?B.bW:B.ac,l,l,16),B.b6,A.aA(A.o(m.bhS(f),l,l,l,l,l,r,l,l,l),1,l)],u),B.y,l,B.r,B.u,0,l,l),B.F,l,l,new A.aB(s,l,l,p,l,l,B.X),l,l,l,l,G.B5,l,l,l),B.Q],u)
for(t=C.cLz(f),s=k.z,o=0;o<6;++o){n=t[o]
v.push(new A.X(D.ajD,new A.hX(B.b8,B.r,B.u,B.S,l,B.x,l,0,A.c([A.aT(B.nG,A.d(d).ax.a===B.p?B.bW:B.ac,l,l,16),B.b6,new A.he(1,B.d4,A.o(n,l,l,l,l,l,s,l,l,l),l)],u),l),l))}v.push(B.Q)
j="get-started-"+j
u=y.q
v.push(new A.aO(1/0,l,i?A.d1(A.o(m.ahB(f),l,l,l,l,l,l,l,l,l),new A.L(j,u),new C.aSR(m,d,e,f),l):A.zS(A.o(m.ahB(f),l,l,l,l,l,l,l,l,l),new A.L(j,u),new C.aSS(m,d,e,f),l),l))
return A.fa(new A.X(B.aC,A.a2(v,B.S,l,B.r,B.u,0,B.x),l),h,l,l,new A.e_(g,new A.b2(x,w,B.P,-1)),B.a4)},
ahB(d){var x=d.a
if(x==="free")return"Start for free"
if(x==="enterprise")return"Contact us"
return"Choose "+d.b},
bhS(d){var x=d.c,w=x===0?"$0":"$"+B.l.aq(x/100,0)
x=d.a
if(x==="free")return"Example: solo investigator, 3 case rooms \u2014 "+w+"/mo."
if(x==="enterprise")return"Example: 20-person firm \u2014 custom quote, unlimited everything."
return"Example: 5-person team, 12 case rooms \u2014 "+w+"/mo total. A per-seat rival at $89/user would charge $445/mo."},
JH(d,e,f){return this.bcB(d,e,f)},
bcB(d,e,f){var x=0,w=A.m(y.v),v
var $async$JH=A.i(function(g,h){if(g===1)return A.j(h,w)
for(;;)switch(x){case 0:if(f.a==="free"){A.qF(d).vi("/",null)
x=1
break}x=3
return A.e(F.a9p(d,e,f),$async$JH)
case 3:case 1:return A.k(v,w)}})
return A.l($async$JH,w)}}
var z=a.updateTypes(["h(w<fD>)","v(fD,fD)","f(Bt)"])
C.aSU.prototype={
$1(d){return this.a.aRG(this.b,this.c,d)},
$S:z+0}
C.aSW.prototype={
$0(){return B.bc},
$S:24}
C.aSV.prototype={
$2(d,e){var x=null
return A.bR(A.a2(A.c([A.o("Couldn\u2019t load plans.",x,x,x,x,x,this.a.z,x,x,x),B.Q,A.d1(D.fse,x,new C.aST(this.b),x)],y.u),B.y,x,B.r,B.W,0,B.x),x,x)},
$S:44}
C.aST.prototype={
$0(){return A.qF(this.a).vi("/",null)},
$S:0}
C.aSP.prototype={
$2(d,e){return B.f.bo(e.c,d.c)},
$S:z+1}
C.aSQ.prototype={
$0(){return A.qF(this.a).vi("/",null)},
$S:0}
C.aSR.prototype={
$0(){var x=this
return x.a.JH(x.b,x.c,x.d)},
$S:0}
C.aSS.prototype={
$0(){var x=this
return x.a.JH(x.b,x.c,x.d)},
$S:0}
C.c06.prototype={
$0(){var x=this.a.d
return x>=2147483647?"Unlimited":""+x},
$S:46}
C.c05.prototype={
$0(){var x=this.a.e
return x>=2147483647?"Unlimited":""+x},
$S:46}
C.c03.prototype={
$0(){var x=this.a.aaP(E.a8m)
if(x>=1073741824)return B.l.aq(x/1073741824,0)+" GB"
return B.l.aq(x/1048576,0)+" MB"},
$S:46}
C.c04.prototype={
$1(d){var x=this.a.aaP(d),w=B.l.F(x)
return x===w?""+w:A.q(x)},
$S:z+2};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Eb,A.bA)
w(A.ci,[C.aSU,C.c04])
w(A.dj,[C.aSW,C.aST,C.aSQ,C.aSR,C.aSS,C.c06,C.c05,C.c03])
w(A.dn,[C.aSV,C.aSP])})()
A.cD(b.typeUniverse,JSON.parse('{"Eb":{"bA":[],"O":[],"h":[]}}'))
var y={p:A.J("aS<w<fD>>"),x:A.J("x<f>"),u:A.J("x<h>"),k:A.J("fD"),q:A.J("L<f>"),v:A.J("~")};(function constants(){D.abp=new A.av(0,720,0,1/0)
D.ajD=new A.ai(0,0,0,6)
D.frj=new A.a0("Skip for now",null,null,null,null,null,null,null,null,null,null)
D.fse=new A.a0("Continue with Free",null,null,null,null,null,null,null,null,null,null)
D.fyA=new A.L("get-started-skip",y.q)})()};
(a=>{a["1tTyH0PTJAPCRfAEaY6plS0ccxE="]=a.current})($__dart_deferred_initializers__);