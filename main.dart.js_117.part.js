((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
ctS(d){var x=C.o.aK(d.toLowerCase())
if(C.o.bf(x,"image/"))return D.a_b
if(C.o.bf(x,"audio/"))return D.a_c
if(C.o.bf(x,"video/"))return D.a_d
if(x==="application/pdf"||C.o.bf(x,"text/")||x==="application/rtf"||x==="application/msword"||C.o.n(x,"officedocument")||C.o.n(x,"opendocument")||C.o.n(x,"spreadsheet")||C.o.n(x,"presentation")||C.o.n(x,"ms-excel")||C.o.n(x,"ms-powerpoint"))return D.a_a
return D.a_e},
c1j(d,e){var x,w=!0
if(!C.o.n(d.c.toLowerCase(),e)){x=d.y
x=x==null?null:C.o.n(x.toLowerCase(),e)
if(x!==!0){w=d.Q
w=w==null?null:C.o.n(w.toLowerCase(),e)
w=w===!0}}return w},
c1k(d,e){return d.gu(d)===e.gu(e)&&d.bj_(e)},
cCd(d){return d.length===0?d:d[0].toUpperCase()+C.o.bX(d,1)},
cgY(d){return""+B.cv(d)+" "+C.en[B.bQ(d)-1]+" "+B.bI(d)},
n3:function n3(d,e){this.a=d
this.b=e},
t6:function t6(d,e){this.a=d
this.b=e},
oU:function oU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aOD:function aOD(d,e){this.a=d
this.b=e},
aOE:function aOE(){},
aOF:function aOF(d){this.a=d},
crm(d){return new A.vb()},
vb:function vb(){this.b=null},
bVM:function bVM(){},
bVK:function bVK(d){this.a=d},
bVL:function bVL(d){this.a=d},
cro(d){return new A.qh(d)},
qh:function qh(d){var _=this
_.as=d
_.x=!1
_.b=_.y=null}},D,E
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[65],A)
D=c[156]
E=c[73]
A.n3.prototype={
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
gbP(){return this.a}}
A.oU.prototype={
gU(d){var x,w=this,v=!1
if(C.o.aK(w.a).length===0){x=w.b
if(x.gU(x)){x=w.c
if(x.gU(x))if(w.d==null)if(w.e==null){v=w.f
v=v.gU(v)&&!w.r}}}return v},
fj(d){var x=J.dT(d,new A.aOD(this,C.o.aK(this.a.toLowerCase())))
x=B.J(x,x.$ti.i("z.E"))
return x},
asB(d){var x,w,v,u,t=this,s=B.c([],y.v),r=C.o.aK(t.a)
if(r.length!==0)s.push(new A.t6("query","\u201c"+r+"\u201d"))
x=t.b
if(x.gc_(x))s.push(new A.t6("mime","Type: "+new B.dA(new B.al(D.Dz,x.gla(x),y.c),new A.aOE(),y.g).b3(0,", ")))
x=t.c
if(x.gc_(x)){w=y.y
v=B.J(new B.d0(new B.iD(x,new A.aOF(d),B.t(x).i("iD<1,f?>")),w),w.i("z.E"))
w=v.length
if(w!==0&&w===x.gu(x))u="By "+C.i.b3(v,", ")
else{w=x.gu(x)
x=x.gu(x)===1?"":"s"
u="By "+w+" uploader"+x}s.push(new A.t6("uploader",u))}x=t.d
if(x!=null)s.push(new A.t6("after","After "+A.cgY(x)))
x=t.e
if(x!=null)s.push(new A.t6("before","Before "+A.cgY(x)))
x=t.f
if(x.gc_(x))s.push(new A.t6("classification",new B.dA(new B.al(D.DK,x.gla(x),y.U),A.cGs(),y.X).b3(0,", ")))
if(t.r)s.push(D.dYG)
return s},
bix(){return this.asB(null)},
aAe(d){var x,w=this
A:{if("query"===d){x=w.Kv("")
break A}if("mime"===d){x=w.bjR(D.a59)
break A}if("uploader"===d){x=w.bk4(C.ec)
break A}if("after"===d){x=w.bkb(!0,null)
break A}if("before"===d){x=w.bkc(!0,null)
break A}if("classification"===d){x=w.bjh(C.ec)
break A}if("encrypted"===d){x=w.bjm(!1)
break A}x=w
break A}return x},
zS(d,e,f,g,h,i,j,k,l){var x,w,v,u=this,t=i==null?u.a:i,s=h==null?u.b:h,r=l==null?u.c:l
if(e)x=null
else x=u.d
if(f)w=null
else w=u.e
v=d==null?u.f:d
return new A.oU(t,s,r,x,w,v,g==null?u.r:g)},
Kv(d){var x=null
return this.zS(x,!1,!1,x,x,d,x,x,x)},
bjR(d){var x=null
return this.zS(x,!1,!1,x,d,x,x,x,x)},
bk4(d){var x=null
return this.zS(x,!1,!1,x,x,x,x,x,d)},
bkb(d,e){var x=null
return this.zS(x,d,!1,x,x,x,e,x,x)},
bkc(d,e){var x=null
return this.zS(x,!1,d,x,x,x,x,e,x)},
bjh(d){var x=null
return this.zS(d,!1,!1,x,x,x,x,x,x)},
bjm(d){var x=null
return this.zS(x,!1,!1,d,x,x,x,x,x)},
e6(){var x,w,v,u,t=this,s=B.c([],y.s)
for(x=t.b,x=x.gT(x);x.q();)s.push(x.gI().b)
x=t.c
x=B.J(x,B.t(x).c)
w=t.d
w=w==null?null:w.dN()
v=t.e
v=v==null?null:v.dN()
u=t.f
u=B.J(u,B.t(u).c)
return B.R(["mime_groups",s,"uploader_ids",x,"uploaded_after",w,"uploaded_before",v,"classifications",u,"encrypted_only",t.r],y.N,y.z)},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.oU&&x.a===e.a&&A.c1k(x.b,e.b)&&A.c1k(x.c,e.c)&&J.o(x.d,e.d)&&J.o(x.e,e.e)&&A.c1k(x.f,e.f)&&x.r===e.r},
gt(d){var x=this
return B.aa(x.a,B.aE(x.b),B.aE(x.c),x.d,x.e,B.aE(x.f),x.r,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
A.vb.prototype={
d_(){return D.uW}}
A.qh.prototype={
Et(d,e){return B.e2(this).V($.jq(),y.B).WN(this.as,d,e)},
Vz(){return this.Et(null,null)},
KE(d){return new B.PM(d.a,d.x)}}
var z=a.updateTypes(["f(n3)","oU()","f(f)","vb(f)","qh(f)"])
A.aOD.prototype={
$1(d){var x,w,v=this.b
if(v.length!==0&&!A.c1j(d,v))return!1
v=this.a
x=v.b
if(x.gc_(x)&&!x.n(0,A.ctS(d.r)))return!1
x=v.c
if(x.gc_(x)){w=d.z
x=w==null||!x.n(0,w)}else x=!1
if(x)return!1
x=v.d
if(x!=null&&d.x.nH(x))return!1
x=v.e
if(x!=null&&d.x.qe(x))return!1
x=v.f
if(x.gc_(x)){w=d.Q
x=w==null||!x.n(0,w)}else x=!1
if(x)return!1
if(v.r&&!d.ay)return!1
return!0},
$S:88}
A.aOE.prototype={
$1(d){return d.grI()},
$S:z+0}
A.aOF.prototype={
$1(d){var x=this.a
return x==null?null:x.h(0,d)},
$S:298}
A.bVM.prototype={
$2(d,e){return this.aAI(d,e)},
aAI(d,e){var x=0,w=B.n(y.Z),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
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
x=s.gc_(s)?7:9
break
case 7:i=J
x=10
return B.d(n.pa(e),$async$$2)
case 10:s=i.dT(g,new A.bVK(m))
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
case 16:s=i.dT(g,new A.bVL(m))
r=B.J(s,s.$ti.i("z.E"))
l=r
x=14
break
case 11:x=2
break
case 14:case 8:case 4:p=k?o.Kv(""):o
v=p.fj(l)
x=1
break
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$2,w)},
$S:1191}
A.bVK.prototype={
$1(d){return A.c1j(d,C.o.aK(this.a.toLowerCase()))},
$S:88}
A.bVL.prototype={
$1(d){return A.c1j(d,C.o.aK(this.a.toLowerCase()))},
$S:88};(function installTearOffs(){var x=a._static_1,w=a._instance_0u
x(A,"cGs","cCd",2)
x(A,"cGr","crm",3)
w(A.vb.prototype,"gjX","d_",1)
x(A,"cI0","cro",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.n3,B.hy)
w(B.D,[A.t6,A.oU])
w(B.cC,[A.aOD,A.aOE,A.aOF,A.bVK,A.bVL])
x(A.vb,B.fs)
x(A.bVM,B.dI)
x(A.qh,E.iJ)})()
B.d1(b.typeUniverse,JSON.parse('{"vb":{"fs":["oU"]},"qh":{"iJ":["ff"],"fs":["kN<ff>"],"iJ.T":"ff"}}'))
var y=(function rtii(){var x=B.O
return{w:x("oU"),B:x("D9"),v:x("y<t6>"),s:x("y<f>"),Z:x("w<ff>"),g:x("dA<n3,f>"),X:x("dA<f,f>"),N:x("f"),c:x("al<n3>"),U:x("al<f>"),y:x("d0<f>"),z:x("@")}})();(function constants(){var x=a.makeConstList
D.a59=new B.f8(C.cC,0,B.O("f8<n3>"))
D.uW=new A.oU("",D.a59,C.ec,null,null,C.ec,!1)
D.dYG=new A.t6("encrypted","Encrypted only")
D.a_a=new A.n3(0,"documents")
D.a_b=new A.n3(1,"images")
D.a_c=new A.n3(2,"audio")
D.a_d=new A.n3(3,"video")
D.a_e=new A.n3(4,"other")
D.Dz=x([D.a_a,D.a_b,D.a_c,D.a_d,D.a_e],B.O("y<n3>"))
D.DK=x(["fact","claim","finding","unknown"],y.s)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cRI","lN",()=>C.n8.$3$1(A.cGr(),B.O("vb"),y.w,y.N))
x($,"cQV","R7",()=>C.bD.$2$1(new A.bVM(),y.Z,y.N))
x($,"cRJ","xI",()=>C.n8.$3$1(A.cI0(),B.O("qh"),B.O("kN<ff>"),y.N))})()};
(a=>{a["IPc3JcXxkjKtopGtNU24vu+wEPM="]=a.current})($__dart_deferred_initializers__);