((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
ctr(d){var x=C.o.aK(d.toLowerCase())
if(C.o.bf(x,"image/"))return D.a_4
if(C.o.bf(x,"audio/"))return D.a_5
if(C.o.bf(x,"video/"))return D.a_6
if(x==="application/pdf"||C.o.bf(x,"text/")||x==="application/rtf"||x==="application/msword"||C.o.n(x,"officedocument")||C.o.n(x,"opendocument")||C.o.n(x,"spreadsheet")||C.o.n(x,"presentation")||C.o.n(x,"ms-excel")||C.o.n(x,"ms-powerpoint"))return D.a_3
return D.a_7},
c0S(d,e){var x,w=!0
if(!C.o.n(d.c.toLowerCase(),e)){x=d.y
x=x==null?null:C.o.n(x.toLowerCase(),e)
if(x!==!0){w=d.Q
w=w==null?null:C.o.n(w.toLowerCase(),e)
w=w===!0}}return w},
c0T(d,e){return d.gu(d)===e.gu(e)&&d.biS(e)},
cBN(d){return d.length===0?d:d[0].toUpperCase()+C.o.bW(d,1)},
cgx(d){return""+B.cu(d)+" "+C.em[B.bQ(d)-1]+" "+B.bI(d)},
n1:function n1(d,e){this.a=d
this.b=e},
t6:function t6(d,e){this.a=d
this.b=e},
oT:function oT(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aOx:function aOx(d,e){this.a=d
this.b=e},
aOy:function aOy(){},
aOz:function aOz(d){this.a=d},
cqW(d){return new A.vb()},
vb:function vb(){this.b=null},
bVk:function bVk(){},
bVi:function bVi(d){this.a=d},
bVj:function bVj(d){this.a=d},
cqY(d){return new A.qg(d)},
qg:function qg(d){var _=this
_.as=d
_.x=!1
_.b=_.y=null}},D,E
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[67],A)
D=c[158]
E=c[75]
A.n1.prototype={
H(){return"MimeGroup."+this.b},
grI(){switch(this.a){case 0:var x="Documents"
break
case 1:x="Images"
break
case 2:x="Audio"
break
case 3:x="Video"
break
case 4:x="Other"
break
default:x=null}return x}}
A.t6.prototype={
gbS(){return this.a}}
A.oT.prototype={
gU(d){var x,w=this,v=!1
if(C.o.aK(w.a).length===0){x=w.b
if(x.gU(x)){x=w.c
if(x.gU(x))if(w.d==null)if(w.e==null){v=w.f
v=v.gU(v)&&!w.r}}}return v},
fj(d){var x=J.e1(d,new A.aOx(this,C.o.aK(this.a.toLowerCase())))
x=B.J(x,x.$ti.i("z.E"))
return x},
asy(d){var x,w,v,u,t=this,s=B.c([],y.v),r=C.o.aK(t.a)
if(r.length!==0)s.push(new A.t6("query","\u201c"+r+"\u201d"))
x=t.b
if(x.gbZ(x))s.push(new A.t6("mime","Type: "+new B.dB(new B.al(D.Dx,x.gla(x),y.c),new A.aOy(),y.g).b3(0,", ")))
x=t.c
if(x.gbZ(x)){w=y.y
v=B.J(new B.d1(new B.iD(x,new A.aOz(d),B.t(x).i("iD<1,f?>")),w),w.i("z.E"))
w=v.length
if(w!==0&&w===x.gu(x))u="By "+C.i.b3(v,", ")
else{w=x.gu(x)
x=x.gu(x)===1?"":"s"
u="By "+w+" uploader"+x}s.push(new A.t6("uploader",u))}x=t.d
if(x!=null)s.push(new A.t6("after","After "+A.cgx(x)))
x=t.e
if(x!=null)s.push(new A.t6("before","Before "+A.cgx(x)))
x=t.f
if(x.gbZ(x))s.push(new A.t6("classification",new B.dB(new B.al(D.DH,x.gla(x),y.U),A.cG_(),y.X).b3(0,", ")))
if(t.r)s.push(D.dYC)
return s},
bip(){return this.asy(null)},
aAa(d){var x,w=this
A:{if("query"===d){x=w.Ku("")
break A}if("mime"===d){x=w.bjK(D.a53)
break A}if("uploader"===d){x=w.bjY(C.ep)
break A}if("after"===d){x=w.bk4(!0,null)
break A}if("before"===d){x=w.bk5(!0,null)
break A}if("classification"===d){x=w.bj9(C.ep)
break A}if("encrypted"===d){x=w.bje(!1)
break A}x=w
break A}return x},
zS(d,e,f,g,h,i,j,k,l){var x,w,v,u=this,t=i==null?u.a:i,s=h==null?u.b:h,r=l==null?u.c:l
if(e)x=null
else x=u.d
if(f)w=null
else w=u.e
v=d==null?u.f:d
return new A.oT(t,s,r,x,w,v,g==null?u.r:g)},
Ku(d){var x=null
return this.zS(x,!1,!1,x,x,d,x,x,x)},
bjK(d){var x=null
return this.zS(x,!1,!1,x,d,x,x,x,x)},
bjY(d){var x=null
return this.zS(x,!1,!1,x,x,x,x,x,d)},
bk4(d,e){var x=null
return this.zS(x,d,!1,x,x,x,e,x,x)},
bk5(d,e){var x=null
return this.zS(x,!1,d,x,x,x,x,e,x)},
bj9(d){var x=null
return this.zS(d,!1,!1,x,x,x,x,x,x)},
bje(d){var x=null
return this.zS(x,!1,!1,d,x,x,x,x,x)},
e6(){var x,w,v,u,t=this,s=B.c([],y.s)
for(x=t.b,x=x.gT(x);x.q();)s.push(x.gJ().b)
x=t.c
x=B.J(x,B.t(x).c)
w=t.d
w=w==null?null:w.dL()
v=t.e
v=v==null?null:v.dL()
u=t.f
u=B.J(u,B.t(u).c)
return B.R(["mime_groups",s,"uploader_ids",x,"uploaded_after",w,"uploaded_before",v,"classifications",u,"encrypted_only",t.r],y.N,y.z)},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.oT&&x.a===e.a&&A.c0T(x.b,e.b)&&A.c0T(x.c,e.c)&&J.o(x.d,e.d)&&J.o(x.e,e.e)&&A.c0T(x.f,e.f)&&x.r===e.r},
gt(d){var x=this
return B.aa(x.a,B.aD(x.b),B.aD(x.c),x.d,x.e,B.aD(x.f),x.r,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
A.vb.prototype={
d_(){return D.uW}}
A.qg.prototype={
Et(d,e){return B.e2(this).V($.jq(),y.B).WL(this.as,d,e)},
Vx(){return this.Et(null,null)},
KD(d){return new B.PJ(d.a,d.x)}}
var z=a.updateTypes(["f(n1)","oT()","f(f)","vb(f)","qg(f)"])
A.aOx.prototype={
$1(d){var x,w,v=this.b
if(v.length!==0&&!A.c0S(d,v))return!1
v=this.a
x=v.b
if(x.gbZ(x)&&!x.n(0,A.ctr(d.r)))return!1
x=v.c
if(x.gbZ(x)){w=d.z
x=w==null||!x.n(0,w)}else x=!1
if(x)return!1
x=v.d
if(x!=null&&d.x.nH(x))return!1
x=v.e
if(x!=null&&d.x.qe(x))return!1
x=v.f
if(x.gbZ(x)){w=d.Q
x=w==null||!x.n(0,w)}else x=!1
if(x)return!1
if(v.r&&!d.ay)return!1
return!0},
$S:93}
A.aOy.prototype={
$1(d){return d.grI()},
$S:z+0}
A.aOz.prototype={
$1(d){var x=this.a
return x==null?null:x.h(0,d)},
$S:331}
A.bVk.prototype={
$2(d,e){return this.aAE(d,e)},
aAE(d,e){var x=0,w=B.n(y.Z),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$$2=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:o=d.V($.lN().$1(e),y.w)
n=d.V($.jq(),y.B)
m=C.o.aK(o.a)
l=null
k=!1
x=J.aY(m)===0?3:5
break
case 3:x=6
return B.d(n.pa(e),$async$$2)
case 6:l=g
x=4
break
case 5:s=o.c
x=s.gbZ(s)?7:9
break
case 7:i=J
x=10
return B.d(n.pa(e),$async$$2)
case 10:s=i.e1(g,new A.bVi(m))
r=B.J(s,s.$ti.i("z.E"))
l=r
x=8
break
case 9:u=12
x=15
return B.d(n.OC(m,e),$async$$2)
case 15:l=g
k=!0
u=2
x=14
break
case 12:u=11
j=t.pop()
i=J
x=16
return B.d(n.pa(e),$async$$2)
case 16:s=i.e1(g,new A.bVj(m))
r=B.J(s,s.$ti.i("z.E"))
l=r
x=14
break
case 11:x=2
break
case 14:case 8:case 4:p=k?o.Ku(""):o
v=p.fj(l)
x=1
break
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$2,w)},
$S:1180}
A.bVi.prototype={
$1(d){return A.c0S(d,C.o.aK(this.a.toLowerCase()))},
$S:93}
A.bVj.prototype={
$1(d){return A.c0S(d,C.o.aK(this.a.toLowerCase()))},
$S:93};(function installTearOffs(){var x=a._static_1,w=a._instance_0u
x(A,"cG_","cBN",2)
x(A,"cFZ","cqW",3)
w(A.vb.prototype,"gjX","d_",1)
x(A,"cHy","cqY",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.n1,B.hy)
w(B.C,[A.t6,A.oT])
w(B.cz,[A.aOx,A.aOy,A.aOz,A.bVi,A.bVj])
x(A.vb,B.fs)
x(A.bVk,B.dA)
x(A.qg,E.iK)})()
B.cY(b.typeUniverse,JSON.parse('{"vb":{"fs":["oT"]},"qg":{"iK":["fe"],"fs":["kM<fe>"],"iK.T":"fe"}}'))
var y=(function rtii(){var x=B.L
return{w:x("oT"),B:x("D9"),v:x("y<t6>"),s:x("y<f>"),Z:x("w<fe>"),g:x("dB<n1,f>"),X:x("dB<f,f>"),N:x("f"),c:x("al<n1>"),U:x("al<f>"),y:x("d1<f>"),z:x("@")}})();(function constants(){var x=a.makeConstList
D.a53=new B.f7(C.cB,0,B.L("f7<n1>"))
D.uW=new A.oT("",D.a53,C.ep,null,null,C.ep,!1)
D.dYC=new A.t6("encrypted","Encrypted only")
D.a_3=new A.n1(0,"documents")
D.a_4=new A.n1(1,"images")
D.a_5=new A.n1(2,"audio")
D.a_6=new A.n1(3,"video")
D.a_7=new A.n1(4,"other")
D.Dx=x([D.a_3,D.a_4,D.a_5,D.a_6,D.a_7],B.L("y<n1>"))
D.DH=x(["fact","claim","finding","unknown"],y.s)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cRf","lN",()=>C.n7.$3$1(A.cFZ(),B.L("vb"),y.w,y.N))
x($,"cQs","R4",()=>C.bC.$2$1(new A.bVk(),y.Z,y.N))
x($,"cRg","xI",()=>C.n7.$3$1(A.cHy(),B.L("qg"),B.L("kM<fe>"),y.N))})()};
(a=>{a["duIm4KCQ7Tk7LauZ3UnVCMwmxLo="]=a.current})($__dart_deferred_initializers__);