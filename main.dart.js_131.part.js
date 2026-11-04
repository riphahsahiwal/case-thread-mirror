((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
cw7(d){var x=C.n.aI(d.toLowerCase())
if(C.n.be(x,"image/"))return D.a_l
if(C.n.be(x,"audio/"))return D.a_m
if(C.n.be(x,"video/"))return D.a_n
if(x==="application/pdf"||C.n.be(x,"text/")||x==="application/rtf"||x==="application/msword"||C.n.n(x,"officedocument")||C.n.n(x,"opendocument")||C.n.n(x,"spreadsheet")||C.n.n(x,"presentation")||C.n.n(x,"ms-excel")||C.n.n(x,"ms-powerpoint"))return D.a_k
return D.a_o},
c3n(d,e){var x,w=!0
if(!C.n.n(d.c.toLowerCase(),e)){x=d.y
x=x==null?null:C.n.n(x.toLowerCase(),e)
if(x!==!0){w=d.Q
w=w==null?null:C.n.n(w.toLowerCase(),e)
w=w===!0}}return w},
c3o(d,e){return d.gu(d)===e.gu(e)&&d.bjG(e)},
cEv(d){return d.length===0?d:d[0].toUpperCase()+C.n.bY(d,1)},
cj5(d){return""+B.ct(d)+" "+C.en[B.bT(d)-1]+" "+B.bG(d)},
n5:function n5(d,e){this.a=d
this.b=e},
tf:function tf(d,e){this.a=d
this.b=e},
oX:function oX(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aP3:function aP3(d,e){this.a=d
this.b=e},
aP4:function aP4(){},
aP5:function aP5(d){this.a=d},
ctC(d){return new A.vn()},
vn:function vn(){this.b=null},
bXK:function bXK(){},
bXI:function bXI(d){this.a=d},
bXJ:function bXJ(d){this.a=d},
ctE(d){return new A.qn(d)},
qn:function qn(d){var _=this
_.as=d
_.x=!1
_.b=_.y=null}},D,E
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[68],A)
D=c[163]
E=c[78]
A.n5.prototype={
H(){return"MimeGroup."+this.b},
grL(){switch(this.a){case 0:var x="Documents"
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
A.tf.prototype={
gbQ(){return this.a}}
A.oX.prototype={
gW(d){var x,w=this,v=!1
if(C.n.aI(w.a).length===0){x=w.b
if(x.gW(x)){x=w.c
if(x.gW(x))if(w.d==null)if(w.e==null){v=w.f
v=v.gW(v)&&!w.r}}}return v},
fj(d){var x=J.dB(d,new A.aP3(this,C.n.aI(this.a.toLowerCase())))
x=B.J(x,x.$ti.i("z.E"))
return x},
asY(d){var x,w,v,u,t=this,s=B.c([],y.v),r=C.n.aI(t.a)
if(r.length!==0)s.push(new A.tf("query","\u201c"+r+"\u201d"))
x=t.b
if(x.gc0(x))s.push(new A.tf("mime","Type: "+new B.dE(new B.al(D.DG,x.gla(x),y.c),new A.aP4(),y.g).b1(0,", ")))
x=t.c
if(x.gc0(x)){w=y.y
v=B.J(new B.d3(new B.iI(x,new A.aP5(d),B.t(x).i("iI<1,f?>")),w),w.i("z.E"))
w=v.length
if(w!==0&&w===x.gu(x))u="By "+C.i.b1(v,", ")
else{w=x.gu(x)
x=x.gu(x)===1?"":"s"
u="By "+w+" uploader"+x}s.push(new A.tf("uploader",u))}x=t.d
if(x!=null)s.push(new A.tf("after","After "+A.cj5(x)))
x=t.e
if(x!=null)s.push(new A.tf("before","Before "+A.cj5(x)))
x=t.f
if(x.gc0(x))s.push(new A.tf("classification",new B.dE(new B.al(D.DQ,x.gla(x),y.U),A.cIP(),y.X).b1(0,", ")))
if(t.r)s.push(D.dYS)
return s},
bjd(){return this.asY(null)},
aAB(d){var x,w=this
A:{if("query"===d){x=w.KC("")
break A}if("mime"===d){x=w.bkx(D.a5j)
break A}if("uploader"===d){x=w.bkL(C.ec)
break A}if("after"===d){x=w.bkS(!0,null)
break A}if("before"===d){x=w.bkT(!0,null)
break A}if("classification"===d){x=w.bjY(C.ec)
break A}if("encrypted"===d){x=w.bk2(!1)
break A}x=w
break A}return x},
zX(d,e,f,g,h,i,j,k,l){var x,w,v,u=this,t=i==null?u.a:i,s=h==null?u.b:h,r=l==null?u.c:l
if(e)x=null
else x=u.d
if(f)w=null
else w=u.e
v=d==null?u.f:d
return new A.oX(t,s,r,x,w,v,g==null?u.r:g)},
KC(d){var x=null
return this.zX(x,!1,!1,x,x,d,x,x,x)},
bkx(d){var x=null
return this.zX(x,!1,!1,x,d,x,x,x,x)},
bkL(d){var x=null
return this.zX(x,!1,!1,x,x,x,x,x,d)},
bkS(d,e){var x=null
return this.zX(x,d,!1,x,x,x,e,x,x)},
bkT(d,e){var x=null
return this.zX(x,!1,d,x,x,x,x,e,x)},
bjY(d){var x=null
return this.zX(d,!1,!1,x,x,x,x,x,x)},
bk2(d){var x=null
return this.zX(x,!1,!1,d,x,x,x,x,x)},
e6(){var x,w,v,u,t=this,s=B.c([],y.s)
for(x=t.b,x=x.gU(x);x.q();)s.push(x.gI().b)
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
return e instanceof A.oX&&x.a===e.a&&A.c3o(x.b,e.b)&&A.c3o(x.c,e.c)&&J.o(x.d,e.d)&&J.o(x.e,e.e)&&A.c3o(x.f,e.f)&&x.r===e.r},
gt(d){var x=this
return B.ac(x.a,B.aE(x.b),B.aE(x.c),x.d,x.e,B.aE(x.f),x.r,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
A.vn.prototype={
d0(){return D.v_}}
A.qn.prototype={
EA(d,e){return B.dW(this).T($.js(),y.B).X_(this.as,d,e)},
VJ(){return this.EA(null,null)},
KL(d){return new B.Q0(d.a,d.x)}}
var z=a.updateTypes(["f(n5)","oX()","f(f)","vn(f)","qn(f)"])
A.aP3.prototype={
$1(d){var x,w,v=this.b
if(v.length!==0&&!A.c3n(d,v))return!1
v=this.a
x=v.b
if(x.gc0(x)&&!x.n(0,A.cw7(d.r)))return!1
x=v.c
if(x.gc0(x)){w=d.z
x=w==null||!x.n(0,w)}else x=!1
if(x)return!1
x=v.d
if(x!=null&&d.x.nI(x))return!1
x=v.e
if(x!=null&&d.x.qi(x))return!1
x=v.f
if(x.gc0(x)){w=d.Q
x=w==null||!x.n(0,w)}else x=!1
if(x)return!1
if(v.r&&!d.ay)return!1
return!0},
$S:107}
A.aP4.prototype={
$1(d){return d.grL()},
$S:z+0}
A.aP5.prototype={
$1(d){var x=this.a
return x==null?null:x.h(0,d)},
$S:369}
A.bXK.prototype={
$2(d,e){return this.aB5(d,e)},
aB5(d,e){var x=0,w=B.m(y.Z),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$$2=B.i(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:o=d.T($.lQ().$1(e),y.w)
n=d.T($.js(),y.B)
m=C.n.aI(o.a)
l=null
k=!1
x=J.aY(m)===0?3:5
break
case 3:x=6
return B.d(n.pb(e),$async$$2)
case 6:l=g
x=4
break
case 5:s=o.c
x=s.gc0(s)?7:9
break
case 7:i=J
x=10
return B.d(n.pb(e),$async$$2)
case 10:s=i.dB(g,new A.bXI(m))
r=B.J(s,s.$ti.i("z.E"))
l=r
x=8
break
case 9:u=12
x=15
return B.d(n.OJ(m,e),$async$$2)
case 15:l=g
k=!0
u=2
x=14
break
case 12:u=11
j=t.pop()
i=J
x=16
return B.d(n.pb(e),$async$$2)
case 16:s=i.dB(g,new A.bXJ(m))
r=B.J(s,s.$ti.i("z.E"))
l=r
x=14
break
case 11:x=2
break
case 14:case 8:case 4:p=k?o.KC(""):o
v=p.fj(l)
x=1
break
case 1:return B.k(v,w)
case 2:return B.j(t.at(-1),w)}})
return B.l($async$$2,w)},
$S:1214}
A.bXI.prototype={
$1(d){return A.c3n(d,C.n.aI(this.a.toLowerCase()))},
$S:107}
A.bXJ.prototype={
$1(d){return A.c3n(d,C.n.aI(this.a.toLowerCase()))},
$S:107};(function installTearOffs(){var x=a._static_1,w=a._instance_0u
x(A,"cIP","cEv",2)
x(A,"cIO","ctC",3)
w(A.vn.prototype,"gjX","d0",1)
x(A,"cKo","ctE",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.n5,B.hp)
w(B.D,[A.tf,A.oX])
w(B.cA,[A.aP3,A.aP4,A.aP5,A.bXI,A.bXJ])
x(A.vn,B.fs)
x(A.bXK,B.dI)
x(A.qn,E.iO)})()
B.cW(b.typeUniverse,JSON.parse('{"vn":{"fs":["oX"]},"qn":{"iO":["ff"],"fs":["kT<ff>"],"iO.T":"ff"}}'))
var y=(function rtii(){var x=B.O
return{w:x("oX"),B:x("Dq"),v:x("x<tf>"),s:x("x<f>"),Z:x("w<ff>"),g:x("dE<n5,f>"),X:x("dE<f,f>"),N:x("f"),c:x("al<n5>"),U:x("al<f>"),y:x("d3<f>"),z:x("@")}})();(function constants(){var x=a.makeConstList
D.a5j=new B.f8(C.cD,0,B.O("f8<n5>"))
D.v_=new A.oX("",D.a5j,C.ec,null,null,C.ec,!1)
D.dYS=new A.tf("encrypted","Encrypted only")
D.a_k=new A.n5(0,"documents")
D.a_l=new A.n5(1,"images")
D.a_m=new A.n5(2,"audio")
D.a_n=new A.n5(3,"video")
D.a_o=new A.n5(4,"other")
D.DG=x([D.a_k,D.a_l,D.a_m,D.a_n,D.a_o],B.O("x<n5>"))
D.DQ=x(["fact","claim","finding","unknown"],y.s)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cUa","lQ",()=>C.na.$3$1(A.cIO(),B.O("vn"),y.w,y.N))
x($,"cTn","Rm",()=>C.bE.$2$1(new A.bXK(),y.Z,y.N))
x($,"cUb","xR",()=>C.na.$3$1(A.cKo(),B.O("qn"),B.O("kT<ff>"),y.N))})()};
(a=>{a["KHJ0F+g/+7JNgdPnGZDOsfkORXw="]=a.current})($__dart_deferred_initializers__);