((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
cu2(d){var x=C.o.aK(d.toLowerCase())
if(C.o.bf(x,"image/"))return D.a_b
if(C.o.bf(x,"audio/"))return D.a_c
if(C.o.bf(x,"video/"))return D.a_d
if(x==="application/pdf"||C.o.bf(x,"text/")||x==="application/rtf"||x==="application/msword"||C.o.n(x,"officedocument")||C.o.n(x,"opendocument")||C.o.n(x,"spreadsheet")||C.o.n(x,"presentation")||C.o.n(x,"ms-excel")||C.o.n(x,"ms-powerpoint"))return D.a_a
return D.a_e},
c1u(d,e){var x,w=!0
if(!C.o.n(d.c.toLowerCase(),e)){x=d.y
x=x==null?null:C.o.n(x.toLowerCase(),e)
if(x!==!0){w=d.Q
w=w==null?null:C.o.n(w.toLowerCase(),e)
w=w===!0}}return w},
c1v(d,e){return d.gu(d)===e.gu(e)&&d.bj9(e)},
cCp(d){return d.length===0?d:d[0].toUpperCase()+C.o.bX(d,1)},
ch8(d){return""+B.cv(d)+" "+C.en[B.bR(d)-1]+" "+B.bI(d)},
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
aOG:function aOG(d,e){this.a=d
this.b=e},
aOH:function aOH(){},
aOI:function aOI(d){this.a=d},
crx(d){return new A.vd()},
vd:function vd(){this.b=null},
bVX:function bVX(){},
bVV:function bVV(d){this.a=d},
bVW:function bVW(d){this.a=d},
crz(d){return new A.qi(d)},
qi:function qi(d){var _=this
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
fj(d){var x=J.dT(d,new A.aOG(this,C.o.aK(this.a.toLowerCase())))
x=B.J(x,x.$ti.i("z.E"))
return x},
asH(d){var x,w,v,u,t=this,s=B.c([],y.v),r=C.o.aK(t.a)
if(r.length!==0)s.push(new A.t6("query","\u201c"+r+"\u201d"))
x=t.b
if(x.gc_(x))s.push(new A.t6("mime","Type: "+new B.dA(new B.al(D.DA,x.gla(x),y.c),new A.aOH(),y.g).b3(0,", ")))
x=t.c
if(x.gc_(x)){w=y.y
v=B.J(new B.d0(new B.iD(x,new A.aOI(d),B.t(x).i("iD<1,f?>")),w),w.i("z.E"))
w=v.length
if(w!==0&&w===x.gu(x))u="By "+C.i.b3(v,", ")
else{w=x.gu(x)
x=x.gu(x)===1?"":"s"
u="By "+w+" uploader"+x}s.push(new A.t6("uploader",u))}x=t.d
if(x!=null)s.push(new A.t6("after","After "+A.ch8(x)))
x=t.e
if(x!=null)s.push(new A.t6("before","Before "+A.ch8(x)))
x=t.f
if(x.gc_(x))s.push(new A.t6("classification",new B.dA(new B.al(D.DL,x.gla(x),y.U),A.cGE(),y.X).b3(0,", ")))
if(t.r)s.push(D.dYB)
return s},
biH(){return this.asH(null)},
aAk(d){var x,w=this
A:{if("query"===d){x=w.Kv("")
break A}if("mime"===d){x=w.bk0(D.a59)
break A}if("uploader"===d){x=w.bke(C.ec)
break A}if("after"===d){x=w.bkl(!0,null)
break A}if("before"===d){x=w.bkm(!0,null)
break A}if("classification"===d){x=w.bjr(C.ec)
break A}if("encrypted"===d){x=w.bjw(!1)
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
bk0(d){var x=null
return this.zS(x,!1,!1,x,d,x,x,x,x)},
bke(d){var x=null
return this.zS(x,!1,!1,x,x,x,x,x,d)},
bkl(d,e){var x=null
return this.zS(x,d,!1,x,x,x,e,x,x)},
bkm(d,e){var x=null
return this.zS(x,!1,d,x,x,x,x,e,x)},
bjr(d){var x=null
return this.zS(d,!1,!1,x,x,x,x,x,x)},
bjw(d){var x=null
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
return B.Q(["mime_groups",s,"uploader_ids",x,"uploaded_after",w,"uploaded_before",v,"classifications",u,"encrypted_only",t.r],y.N,y.z)},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.oU&&x.a===e.a&&A.c1v(x.b,e.b)&&A.c1v(x.c,e.c)&&J.o(x.d,e.d)&&J.o(x.e,e.e)&&A.c1v(x.f,e.f)&&x.r===e.r},
gt(d){var x=this
return B.aa(x.a,B.aE(x.b),B.aE(x.c),x.d,x.e,B.aE(x.f),x.r,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
A.vd.prototype={
d_(){return D.uW}}
A.qi.prototype={
Et(d,e){return B.dU(this).W($.jq(),y.B).WP(this.as,d,e)},
VB(){return this.Et(null,null)},
KE(d){return new B.PO(d.a,d.x)}}
var z=a.updateTypes(["f(n3)","oU()","f(f)","vd(f)","qi(f)"])
A.aOG.prototype={
$1(d){var x,w,v=this.b
if(v.length!==0&&!A.c1u(d,v))return!1
v=this.a
x=v.b
if(x.gc_(x)&&!x.n(0,A.cu2(d.r)))return!1
x=v.c
if(x.gc_(x)){w=d.z
x=w==null||!x.n(0,w)}else x=!1
if(x)return!1
x=v.d
if(x!=null&&d.x.nH(x))return!1
x=v.e
if(x!=null&&d.x.qf(x))return!1
x=v.f
if(x.gc_(x)){w=d.Q
x=w==null||!x.n(0,w)}else x=!1
if(x)return!1
if(v.r&&!d.ay)return!1
return!0},
$S:98}
A.aOH.prototype={
$1(d){return d.grI()},
$S:z+0}
A.aOI.prototype={
$1(d){var x=this.a
return x==null?null:x.h(0,d)},
$S:298}
A.bVX.prototype={
$2(d,e){return this.aAO(d,e)},
aAO(d,e){var x=0,w=B.n(y.Z),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$$2=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:o=d.W($.lN().$1(e),y.w)
n=d.W($.jq(),y.B)
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
case 10:s=i.dT(g,new A.bVV(m))
r=B.J(s,s.$ti.i("z.E"))
l=r
x=8
break
case 9:u=12
x=15
return B.d(n.OD(m,e),$async$$2)
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
case 16:s=i.dT(g,new A.bVW(m))
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
A.bVV.prototype={
$1(d){return A.c1u(d,C.o.aK(this.a.toLowerCase()))},
$S:98}
A.bVW.prototype={
$1(d){return A.c1u(d,C.o.aK(this.a.toLowerCase()))},
$S:98};(function installTearOffs(){var x=a._static_1,w=a._instance_0u
x(A,"cGE","cCp",2)
x(A,"cGD","crx",3)
w(A.vd.prototype,"gjX","d_",1)
x(A,"cId","crz",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.n3,B.hy)
w(B.D,[A.t6,A.oU])
w(B.cC,[A.aOG,A.aOH,A.aOI,A.bVV,A.bVW])
x(A.vd,B.fs)
x(A.bVX,B.dI)
x(A.qi,E.iJ)})()
B.d1(b.typeUniverse,JSON.parse('{"vd":{"fs":["oU"]},"qi":{"iJ":["ff"],"fs":["kO<ff>"],"iJ.T":"ff"}}'))
var y=(function rtii(){var x=B.O
return{w:x("oU"),B:x("Dc"),v:x("y<t6>"),s:x("y<f>"),Z:x("w<ff>"),g:x("dA<n3,f>"),X:x("dA<f,f>"),N:x("f"),c:x("al<n3>"),U:x("al<f>"),y:x("d0<f>"),z:x("@")}})();(function constants(){var x=a.makeConstList
D.a59=new B.f8(C.cC,0,B.O("f8<n3>"))
D.uW=new A.oU("",D.a59,C.ec,null,null,C.ec,!1)
D.dYB=new A.t6("encrypted","Encrypted only")
D.a_a=new A.n3(0,"documents")
D.a_b=new A.n3(1,"images")
D.a_c=new A.n3(2,"audio")
D.a_d=new A.n3(3,"video")
D.a_e=new A.n3(4,"other")
D.DA=x([D.a_a,D.a_b,D.a_c,D.a_d,D.a_e],B.O("y<n3>"))
D.DL=x(["fact","claim","finding","unknown"],y.s)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cRV","lN",()=>C.na.$3$1(A.cGD(),B.O("vd"),y.w,y.N))
x($,"cR7","R9",()=>C.bD.$2$1(new A.bVX(),y.Z,y.N))
x($,"cRW","xI",()=>C.na.$3$1(A.cId(),B.O("qi"),B.O("kO<ff>"),y.N))})()};
(a=>{a["PciUyXfbGD8s3ilwp58la/M5sWo="]=a.current})($__dart_deferred_initializers__);