((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,F,K,D,H,I,L,B={
aaP(d){var x=0,w=A.m(y.I),v,u,t
var $async$aaP=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.e(A.cp("pdf",""),$async$aaP)
case 3:x=4
return A.e(A.cp("pw",""),$async$aaP)
case 4:A.am("pw")
u=G.c1J()
t=y.P.a(d.a.h(0,"room"))
A.am("pw")
A.am("pdf")
u.a64(I.cuB(new B.aGx(d,t,new B.aGy()),K.HX))
v=u.it()
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$aaP,w)},
Iv(d){var x,w,v,u,t=null,s="pw",r=A.J(d,d.$ti.i("ai.E"))
r.$flags=1
x=r
if(x.length===0){A.am(s)
A.am(s)
return D.u_("\u2014 none \u2014",G.pw(t,t,t,t,t,t,t,t,t,F.eR,t,t,10,t,t,t,!0,t,t,t,t),t)}A.am(s)
A.am(s)
r=A.c([],y.n)
for(w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
A.am(s)
A.am(s)
r.push(I.cpx(G.pw(t,t,t,t,t,t,t,t,t,F.eR,t,t,10,t,t,t,!0,t,t,t,t),u))}return D.c1o(r,H.zz)},
aGy:function aGy(){},
aGx:function aGx(d,e,f){this.a=d
this.b=e
this.c=f},
aGq:function aGq(){},
aGr:function aGr(){},
aGs:function aGs(){},
aGt:function aGt(){},
aGu:function aGu(){},
aGv:function aGv(){},
aGw:function aGw(){},
aaO:function aaO(d){this.a=d},
N8:function N8(d){this.a=d},
bXo:function bXo(){},
ad4(d,e,f){return B.cs5(d,e,f)},
cs5(d,e,f){var x=0,w=A.m(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ad4=A.i(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:q={}
p=d.S(y.q).f
q.a=null
u=4
n=q
x=7
return A.e(e.X($.cnT(),y.r).VI(f),$async$ad4)
case 7:n.a=h
u=2
x=6
break
case 4:u=3
o=t.pop()
q=A.E(o)
if(y.L.b(q)){s=q
p.aS(A.bN(null,null,null,null,null,C.B,null,A.o(A.aA(s).a,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=1
break}else throw o
x=6
break
case 3:x=2
break
case 6:if(d.e==null){x=1
break}x=8
return A.e(A.eN(null,new B.aOb(q,f),d,!1,null,!0,!1,y.H),$async$ad4)
case 8:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$ad4,w)},
Df:function Df(d,e,f){this.d=d
this.e=e
this.a=f},
aOb:function aOb(d,e){this.a=d
this.b=e},
aqg:function aqg(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
by7:function by7(d){this.a=d},
by8:function by8(d){this.a=d},
byb:function byb(d){this.a=d},
bya:function bya(d){this.a=d},
byc:function byc(d,e){this.a=d
this.b=e},
by9:function by9(d,e){this.a=d
this.b=e},
a2h:function a2h(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},E,M,N
J=c[1]
A=c[0]
C=c[2]
G=c[41]
F=c[99]
K=c[97]
D=c[68]
H=c[100]
I=c[50]
L=c[101]
B=a.updateHolder(c[16],B)
E=c[161]
M=c[114]
N=c[52]
B.aaO.prototype={
guO(){var x=A.a7(y.P.a(this.a.h(0,"room")).h(0,"name"))
return x==null?"":x},
bxA(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k="status",j=this.guO(),i=this.a,h=A.dE(A.T(i.h(0,"generated_at"))).hn().j(0),g=y.P,f=g.a(i.h(0,"room"))
h="# Case Report \u2014 "+j+"\n\n"+("Generated "+h+" by CaseThread\n")+"\n"+("**Case type:** "+A.q(f.h(0,"case_type"))+"  \n")+("**Status:** "+A.q(f.h(0,k))+"  \n")+("**Opened:** "+A.q(f.h(0,"opened"))+"\n")+"\n## Members\n"
for(j=y.j,x=J.aJ(j.a(i.h(0,"members")));x.q();){w=g.a(x.gI())
h+="- "+A.q(w.h(0,"name"))+" ("+A.q(w.h(0,"role"))+")\n"}h+="\n## Evidence\n"
for(x=J.aJ(j.a(i.h(0,"evidence")));x.q();){v=g.a(x.gI())
h+="- "+A.q(v.h(0,"filename"))+" (v"+A.q(v.h(0,"version"))+", sha256 `"+A.q(v.h(0,"sha256"))+"`)\n"}h+="\n## Tasks\n"
for(x=J.aJ(j.a(i.h(0,"tasks")));x.q();){u=g.a(x.gI())
t=u.h(0,"due")==null?"":" \u2014 due "+A.q(u.h(0,"due"))
h+="- ["+A.q(u.h(0,k))+"] "+A.q(u.h(0,"title"))+t+"\n"}h+="\n## Timeline\n"
for(j=J.aJ(j.a(i.h(0,"timeline"))),x=y.h;j.q();){v=g.a(j.gI())
s=x.a(v.h(0,"payload"))
r=A.a7(s==null?null:s.h(0,"summary"))
if(r==null)r=A.T(v.h(0,"type"))
q=A.q(v.h(0,"when"))
p=v.h(0,"actor")
h+="- "+q+" \u2014 "+A.q(p==null?"System":p)+": "+r+"\n"}o=A.a7(i.h(0,"investigation_status"))
j=(o!=null?h+"\n"+("**Investigation status:** "+o+"\n"):h)+"\n## Contradictions\n"
h=y.g
x=h.a(i.h(0,"contradictions"))
x=J.aJ(x==null?[]:x)
while(x.q()){n=g.a(x.gI())
j+="- ["+A.q(n.h(0,k))+"] "+A.q(n.h(0,"detail"))+" (flagged: "+A.q(n.h(0,"flagged_reason"))+")\n"}j+="\n## Alibis\n"
x=h.a(i.h(0,"alibis"))
x=J.aJ(x==null?[]:x)
while(x.q()){m=g.a(x.gI())
j+="- ["+A.q(m.h(0,k))+"] "+A.q(m.h(0,"claim"))+" (window: "+A.q(m.h(0,"window_start"))+" \u2013 "+A.q(m.h(0,"window_end"))+")\n"}j+="\n## Investigation Gaps\n"
i=h.a(i.h(0,"gaps"))
i=J.aJ(i==null?[]:i)
while(i.q()){l=g.a(i.gI())
j+="- ["+A.q(l.h(0,k))+"] "+A.q(l.h(0,"description"))+" (type: "+A.q(l.h(0,"gap_type"))+")\n"}return j.charCodeAt(0)==0?j:j}}
B.N8.prototype={
VI(d){return this.bnB(d)},
bnB(d){var x=0,w=A.m(y.c),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$VI=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=y.N
o=y.z
x=7
return A.e(s.a.d4("export_case_report",A.Q(["target_room",d],p,o),o),$async$VI)
case 7:r=f
o=A.aP(y.f.a(C.aI.hM(C.aI.jH(r,null),null)),p,o)
v=new B.aaO(o)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
q=A.E(m)
p=A.aA(q)
throw A.n(p)
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$VI,w)},
$icaj:1}
B.Df.prototype={
Y(){return new B.aqg()}}
B.aqg.prototype={
I0(d){return this.bau(d)},
bau(d){var x=0,w=A.m(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$I0=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(r.w){x=1
break}r.v(new B.by7(r))
u=4
x=7
return A.e(d.$0(),$async$I0)
case 7:p=r.c
if(p!=null)A.an(p,!1).by()
s.push(6)
x=5
break
case 4:u=3
n=t.pop()
p=A.E(n)
if(y.L.b(p)){q=p
p=r.c
if(p!=null)p.S(y.q).f.aS(A.bN(null,null,null,null,null,C.B,null,A.o(A.aA(q).a,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}else throw n
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.v(new B.by8(r))
x=s.pop()
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$I0,w)},
C(d){var x,w=null,v=A.d(d).ok.w
v=A.o("Export case report",w,w,w,w,w,v==null?w:v.oC(C.ao,-0.3),w,w,w)
x=this.w
return A.eY(!0,A.es(new A.W(M.AY,A.a2(A.c([v,C.R,new B.a2h(C.Cz,"PDF report","Formatted case file \u2014 save, share or print",x,new B.byb(this),E.fA6),C.R,new B.a2h(E.e0m,"Markdown (copy)","Plain text \u2014 paste anywhere to file it",x,new B.byc(this,d),E.fyO)],y.p),C.b4,w,C.r,C.W,0,C.x),w),w,C.T,w,w,w,C.a5),!0,C.a9,!0,!0)}}
B.a2h.prototype={
C(d){var x,w,v,u=this,t=null,s=u.f,r=s?t:u.r,q=A.b1(14),p=A.b1(14),o=A.bU(A.d(d).ax.a===C.p?C.az:C.cu,C.O,1),n=A.d(d).ax.a===C.p?C.cN:C.cO,m=A.d(d).ax.a===C.p?C.c3:C.ad
m=A.aW(u.c,m,t,t,22)
x=A.d(d).ok.z
x=x==null?t:x.d1(C.ao)
x=A.o(u.d,t,t,t,t,t,x,t,t,t)
w=A.d(d).ok.Q
if(w==null)w=t
else w=w.V(A.d(d).ax.a===C.p?C.C:C.D)
v=y.p
v=A.c([m,C.kN,A.aD(A.a2(A.c([x,C.dN,A.o(u.e,t,t,t,t,t,w,t,t,t)],v),C.S,t,C.r,C.v,0,C.x),1,t)],v)
if(s)v.push(C.m_)
else v.push(A.aW(C.qO,A.d(d).ax.a===C.p?C.C:C.D,t,t,20))
return A.eR(!1,q,!0,A.au(t,A.ao(v,C.y,t,C.r,C.v,0,t,t),C.F,t,t,new A.aB(n,t,o,p,t,t,C.X),t,t,t,t,C.aB,t,t,t),t,!0,!1,t,t,t,t,t,t,t,t,t,t,t,r,t,t,t,t,t,t,t)},
gcP(){return this.d}}
var z=a.updateTypes(["y4(h,@)","v<eB>(nE)","N8(al)","Df(L)"])
B.aGy.prototype={
$2(d,e){var x,w="pw",v=null
A.am(w)
A.am(w)
A.am(w)
A.am(w)
x=D.Ka(v,2,d,G.pw(v,v,v,v,v,v,v,v,v,F.eR,v,v,14,v,v,v,!0,v,v,v,v))
A.am(w)
return D.c1o(A.c([x,e,D.Zg(v,12,v)],y.n),H.zz)},
$S:z+0}
B.aGx.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j="pw",i=null,h="investigation_status"
A.am(j)
A.am(j)
x=this.a
w=x.guO()
A.am(j)
A.am(j)
w=D.Ka(D.u_("Case Report \u2014 "+w,G.pw(i,i,i,i,i,i,i,i,i,F.eR,i,i,22,i,F.tQ,i,!0,i,i,i,i),i),0,i,i)
A.am(j)
x=x.a
v=A.dE(A.T(x.h(0,"generated_at"))).hn().j(0)
A.am(j)
A.am("pdf")
v=D.u_("Generated "+v+" by CaseThread",G.pw(i,L.HY,i,i,i,i,i,i,i,F.eR,i,i,10,i,i,i,!0,i,i,i,i),i)
A.am(j)
u=D.Zg(i,8,i)
A.am(j)
t=this.b
s=A.q(t.h(0,"case_type"))
r=A.q(t.h(0,"status"))
t=A.q(t.h(0,"opened"))
A.am(j)
t=D.u_("Case type: "+s+"  \xb7  Status: "+r+"  \xb7  Opened: "+t,G.pw(i,i,i,i,i,i,i,i,i,F.eR,i,i,11,i,i,i,!0,i,i,i,i),i)
r=this.c
s=y.g
q=s.a(x.h(0,"members"))
if(q==null)q=[]
p=y.N
q=r.$2("Members",B.Iv(J.bL(q,new B.aGq(),p)))
o=s.a(x.h(0,"evidence"))
if(o==null)o=[]
o=r.$2("Evidence",B.Iv(J.bL(o,new B.aGr(),p)))
n=s.a(x.h(0,"tasks"))
if(n==null)n=[]
n=r.$2("Tasks",B.Iv(J.bL(n,new B.aGs(),p)))
m=s.a(x.h(0,"timeline"))
if(m==null)m=[]
m=r.$2("Timeline",B.Iv(J.bL(m,new B.aGt(),p)))
l=s.a(x.h(0,"contradictions"))
if(l==null)l=[]
l=r.$2("Contradictions",B.Iv(J.bL(l,new B.aGu(),p)))
k=s.a(x.h(0,"alibis"))
if(k==null)k=[]
k=r.$2("Alibis",B.Iv(J.bL(k,new B.aGv(),p)))
s=s.a(x.h(0,"gaps"))
if(s==null)s=[]
p=A.c([w,v,u,t,q,o,n,m,l,k,r.$2("Investigation Gaps",B.Iv(J.bL(s,new B.aGw(),p)))],y.n)
if(x.h(0,h)!=null){A.am(j)
x=A.q(x.h(0,h))
A.am(j)
A.am(j)
p.push(D.u_("Investigation status: "+x,G.pw(i,i,i,i,i,i,i,i,i,F.eR,i,i,11,i,F.tQ,i,!0,i,i,i,i),i))}return p},
$S:z+1}
B.aGq.prototype={
$1(d){y.P.a(d)
return A.q(d.h(0,"name"))+" ("+A.q(d.h(0,"role"))+")"},
$S:33}
B.aGr.prototype={
$1(d){y.P.a(d)
return A.q(d.h(0,"filename"))+" (v"+A.q(d.h(0,"version"))+", sha256 "+A.q(d.h(0,"sha256"))+")"},
$S:33}
B.aGs.prototype={
$1(d){var x
y.P.a(d)
x=d.h(0,"due")==null?"":" \u2014 due "+A.q(d.h(0,"due"))
return"["+A.q(d.h(0,"status"))+"] "+A.q(d.h(0,"title"))+x},
$S:33}
B.aGt.prototype={
$1(d){var x,w,v,u
y.P.a(d)
x=y.h.a(d.h(0,"payload"))
w=A.a7(x==null?null:x.h(0,"summary"))
if(w==null)w=A.T(d.h(0,"type"))
v=A.q(d.h(0,"when"))
u=d.h(0,"actor")
return v+" \u2014 "+A.q(u==null?"System":u)+": "+w},
$S:33}
B.aGu.prototype={
$1(d){y.P.a(d)
return"["+A.q(d.h(0,"status"))+"] "+A.q(d.h(0,"detail"))+" (flagged: "+A.q(d.h(0,"flagged_reason"))+")"},
$S:33}
B.aGv.prototype={
$1(d){y.P.a(d)
return"["+A.q(d.h(0,"status"))+"] "+A.q(d.h(0,"claim"))+" (window: "+A.q(d.h(0,"window_start"))+" \u2013 "+A.q(d.h(0,"window_end"))+")"},
$S:33}
B.aGw.prototype={
$1(d){y.P.a(d)
return"["+A.q(d.h(0,"status"))+"] "+A.q(d.h(0,"description"))+" (type: "+A.q(d.h(0,"gap_type"))+")"},
$S:33}
B.bXo.prototype={
$1(d){return new B.N8(d.T($.dx(),y.A))},
$S:z+2}
B.aOb.prototype={
$1(d){return new B.Df(this.b,this.a.a,null)},
$S:z+3}
B.by7.prototype={
$0(){return this.a.w=!0},
$S:0}
B.by8.prototype={
$0(){return this.a.w=!1},
$S:0}
B.byb.prototype={
$0(){var x=this.a
return x.I0(new B.bya(x))},
$S:0}
B.bya.prototype={
$0(){var x=0,w=A.m(y.H),v=this,u,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.e(B.aaP(u.a.e),$async$$0)
case 2:t=e
x=3
return A.e(A.cp("printing",""),$async$$0)
case 3:A.am("printing")
x=4
return A.e(N.cw_(new Uint8Array(A.b4(t)),"case-report-"+C.o.a8(u.a.d,0,4)+".pdf"),$async$$0)
case 4:return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2}
B.byc.prototype={
$0(){var x=this.a
x.I0(new B.by9(x,this.b.S(y.q).f))},
$S:0}
B.by9.prototype={
$0(){var x=0,w=A.m(y.H),v=this
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.e(A.qd(new A.nB(v.a.a.e.bxA())),$async$$0)
case 2:v.b.aS(E.fkE)
return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aGy,A.dk)
w(A.ca,[B.aGx,B.aGq,B.aGr,B.aGs,B.aGt,B.aGu,B.aGv,B.aGw,B.bXo,B.aOb])
w(A.C,[B.aaO,B.N8])
x(B.Df,A.hw)
x(B.aqg,A.hh)
w(A.dd,[B.by7,B.by8,B.byb,B.bya,B.byc,B.by9])
x(B.a2h,A.a4)})()
A.cD(b.typeUniverse,JSON.parse('{"N8":{"caj":[]},"Df":{"N":[],"f":[]},"aqg":{"Y":["Df"]},"a2h":{"a4":[],"f":[]}}'))
var y=(function rtii(){var x=A.I
return{c:x("aaO"),L:x("aK"),r:x("caj"),p:x("x<f>"),n:x("x<eB>"),j:x("v<@>"),I:x("v<w>"),P:x("aa<h,@>"),f:x("aa<@,@>"),N:x("h"),A:x("fY"),O:x("K<h>"),q:x("h_"),z:x("@"),g:x("v<@>?"),h:x("aa<h,@>?"),H:x("~")}})();(function constants(){E.e0m=new A.af(63084,"MaterialIcons",null,!1)
E.ftD=new A.a_("Markdown report copied.",null,null,null,null,null,null,null,null,null,null)
E.fkE=new A.d8(E.ftD,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.B,null)
E.fyO=new A.K("export-option-markdown",y.O)
E.fA6=new A.K("export-option-pdf",y.O)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cSi","cnT",()=>A.ej(new B.bXo(),y.r))})()};
(a=>{a["BfiBGLUfnM0H3oW7M1Q2oA9FG9U="]=a.current})($__dart_deferred_initializers__);