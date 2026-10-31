((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,B={
c7K(d){var x,w,v=new B.aFe()
if(!B.c01(d))C.a8(C.bH("Not a bitmap file."))
d.d+=2
x=d.Z()
w=$.fz()
w.$flags&2&&C.u(w)
w[0]=x
x=$.jn()
d.d+=4
w[0]=d.Z()
v.b=x[0]
return v},
c01(d){if(d.c-d.d<2)return!1
return C.bP(d,null,0).ad()===19778},
co5(d,e){var x,w,v,u,t=e==null?B.c7K(d):e,s=d.d,r=d.Z(),q=d.Z(),p=$.fz()
p.$flags&2&&C.u(p)
p[0]=q
q=$.jn()
x=q[0]
p[0]=d.Z()
q=q[0]
w=d.ad()
v=d.ad()
u=A.Ur[d.Z()]
d.Z()
p[0]=d.Z()
p[0]=d.Z()
p=d.Z()
d.Z()
s=new B.Ci(t,x,q,r,w,v,u,p,s)
s.ae6(d,e)
return s},
kz:function kz(d,e){this.a=d
this.b=e},
aFe:function aFe(){this.b=$},
Ci:function Ci(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=l},
aaj:function aaj(d){this.a=$
this.b=null
this.c=d},
aFd:function aFd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKm:function aKm(d){this.a=$
this.b=null
this.c=d},
aJX:function aJX(){},
ad4:function ad4(d,e,f){this.a=d
this.b=e
this.c=f},
aeU:function aeU(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
K3:function K3(d,e){this.a=d
this.b=e},
Dd:function Dd(d,e){this.a=d
this.b=e},
ad5:function ad5(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
c9c(d,e,f,g){var x,w
switch(d.a){case 1:return new B.aUn(f,e)
case 2:return new B.aeW(f,g==null?1:g,e)
case 3:return new B.aeW(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new B.aUl(f,x,e)
w.aLr(e,f,x)
return w
case 5:return new B.aUm(f,g==null?16:g,e)
case 6:return new B.aeU(f,g==null?32:g,!1,e)
case 7:return new B.aeU(f,g==null?32:g,!0,e)
default:throw C.i(C.bH("Invalid compression type: "+d.j(0)))}},
qg:function qg(d,e){this.a=d
this.b=e},
aOC:function aOC(){},
aUk:function aUk(){},
cr0(d,e,f,g){var x,w,v,u,t,s,r,q
if(e===0){if(g!==0)throw C.i(C.bH("Incomplete huffman data"))
return}x=d.d
w=d.Z()
v=d.Z()
d.d+=4
u=d.Z()
t=!0
if(w<65537)t=v>=65537
if(t)throw C.i(C.bH("Invalid huffman table size"))
d.d+=4
s=C.bm(65537,0,!1,y.p)
r=J.iH(16384,y.W)
for(q=0;q<16384;++q)r[q]=new B.ad6()
B.cr1(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw C.i(C.bH("Error in header for Huffman-encoded data (invalid number of bits)."))
B.cqY(s,w,v,r)
B.cr_(s,r,d,u,v,g,f)},
cr_(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=C.c([0,0],y.t),n=f.d+D.f.av(g+7,8)
for(x=0;f.d<n;){B.c0Q(o,f)
while(w=o[1],w>=14){v=e[D.f.j7(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=B.c0R(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw C.i(C.bH(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
for(;;){w=o[1]
if(!(w<s&&f.d<n))break
B.c0Q(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.f.j7(o[0],w)&D.f.cN(1,s)-1)>>>0){o[1]=w
r=B.c0R(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw C.i(C.bH(p))}}}q=8-g&7
o[0]=D.f.R(o[0],q)
o[1]=o[1]-q
while(w=o[1],w>0){v=e[D.f.cE(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=B.c0R(v.b,h,o,f,j,x,i)}else throw C.i(C.bH(p))}if(x!==i)throw C.i(C.bH("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
c0R(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)B.c0Q(f,g)
x=f[1]-8
f[1]=x
w=D.f.j7(f[0],x)&255
if(i+w>j)throw C.i(C.bH(s))
v=h[i-1]
for(x=h.$flags|0;u=w-1,w>0;w=u,i=t){t=i+1
x&2&&C.u(h)
h[i]=v}}else{if(i<j){h.toString
t=i+1
h.$flags&2&&C.u(h)
h[i]=d}else throw C.i(C.bH(s))
i=t}return i},
cqY(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t,w=y.p;e<=f;++e){v=d[e]
u=v>>>6
t=v&63
if(D.f.fG(u,t)!==0)throw C.i(C.bH(n))
if(t>14){s=g[D.f.eb(u,t-14)]
if(s.a!==0)throw C.i(C.bH(n))
v=++s.b
r=s.c
if(r!=null){v=C.bm(v,0,!1,w)
s.c=v
for(q=s.b-1,p=0;p<q;++p)v[p]=r[p]}else s.c=C.c([0],x)
s.c[s.b-1]=e}else if(t!==0){v=14-t
o=D.f.cE(u,v)
for(p=D.f.cE(1,v);p>0;--p,++o){s=g[o]
if(s.a!==0||s.c!=null)throw C.i(C.bH(n))
s.a=t
s.b=e}}}},
cr1(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=C.c([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw C.i(C.bH(s))
w=B.c9d(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw C.i(C.bH(s))
v=B.c9d(8,p,d)+6
if(f+v>x)throw C.i(C.bH(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw C.i(C.bH(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}B.cqZ(h)},
cqZ(d){var x,w,v,u,t,s=C.bm(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
c0Q(d,e){d[0]=(d[0]<<8|e.bw())>>>0
d[1]=d[1]+8>>>0},
c9d(d,e,f){var x
while(x=e[1],x<d){e[0]=(e[0]<<8|J.A(f.a,f.d++))>>>0
e[1]=e[1]+8>>>0}x-=d
e[1]=x
return(D.f.j7(e[0],x)&D.f.cN(1,d)-1)>>>0},
ad6:function ad6(){this.b=this.a=0
this.c=null},
cr2(d){var x=new B.ad7(C.c([],y.m))
x.ae9(d)
return x},
cr3(d){var x=C.cd(d,!1,null,0)
if(x.Z()!==20000630)return!1
if(x.bw()!==2)return!1
if((x.pl()&4294967289)>>>0!==0)return!1
return!0},
ad7:function ad7(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
cam(d,e,f){var x=new B.aeV(d,C.c([],y.Q),C.D(y.N,y.n),A.Mz,e)
x.aL7(d,e,f)
return x},
U1:function U1(){},
aOE:function aOE(d,e){this.a=d
this.b=e},
aeV:function aeV(d,e,f,g,h){var _=this
_.a=d
_.b=null
_.c=e
_.d=0
_.e=f
_.r=$
_.x=_.w=0
_.at=$
_.ax=g
_.ay=null
_.ch=$
_.CW=null
_.cx=0
_.cy=null
_.db=h
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=null
_.k2=$
_.k3=null},
aUl:function aUl(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
ate:function ate(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
aUm:function aUm(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
aUn:function aUn(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
aeW:function aeW(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
aOD:function aOD(){this.a=null},
c9G(d){var x=new Uint8Array(d*3)
return new B.Uw(B.crQ(d),d,null,new C.qF(x,d,3))},
crP(d){return new B.Uw(d.a,d.b,d.c,C.cbF(d.d))},
crQ(d){var x
for(x=1;x<=8;++x)if(D.f.cN(1,x)>=d)return x
return 0},
Uw:function Uw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ux:function Ux(){},
aeX:function aeX(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
adQ:function adQ(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
aRA:function aRA(){var _=this
_.a=null
_.e=_.d=_.c=_.b=0
_.f=null
_.r=0
_.w=null
_.y=_.x=$
_.z=null
_.Q=0
_.as=null
_.ay=_.ax=_.at=0
_.ch=null
_.dy=_.dx=_.db=_.cy=_.cx=_.CW=0},
c9X(d){var x,w,v,u,t,s,r
if(d.ad()!==0)return null
x=d.ad()
if(x>=3)return null
w=A.e3F[x]
if(w===A.N1)return null
v=d.ad()
u=J.h2(v,y.Y)
for(t=0;t<v;++t){s=J.A(d.a,d.d++)
r=J.A(d.a,d.d++)
J.A(d.a,d.d++);++d.d
d.ad()
d.ad()
u[t]=new B.aez(s,r,d.Z(),d.Z())}return new B.aTx(w,v,u)},
Km:function Km(d,e){this.a=d
this.b=e},
aTx:function aTx(d,e,f){this.c=d
this.d=e
this.e=f},
aez:function aez(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
aTv:function aTv(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=l},
aTw:function aTw(){this.b=this.a=null},
abm:function abm(d,e,f){this.e=d
this.f=e
this.r=f},
DG:function DG(){},
DH:function DH(d){this.a=d},
UL:function UL(d){this.a=d},
aUD:function aUD(){this.d=null},
z8:function z8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
aUG(){var x=C.bm(4,null,!1,y.r),w=C.c([],y.a),v=y.bT,u=J.tj(0,v)
v=J.tj(0,v)
return new B.aUF(new C.K1(C.D(y.N,y.P)),x,w,u,v,C.c([],y.E))},
aUF:function aUF(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
aUH:function aUH(d,e){this.a=d
this.b=e},
P4:function P4(d){this.a=d
this.b=0},
aff:function aff(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
aUJ:function aUJ(){this.b=this.a=0},
aUK:function aUK(){this.r=this.f=$},
afg:function afg(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.f=$
_.r=null
_.y=f
_.z=g
_.Q=h
_.as=i
_.at=j
_.ax=k
_.cx=_.CW=_.ch=_.ay=0
_.cy=$},
Vg:function Vg(){},
zE:function zE(d,e){this.a=d
this.b=e},
EX:function EX(d){this.b=this.a=0
this.e=d},
b1j:function b1j(d){this.b=this.a=null
this.c=d},
b1k:function b1k(){},
ahX:function ahX(){this.b=this.a=null},
ahY:function ahY(){this.b=this.a=null},
tP:function tP(){},
ai_:function ai_(){this.b=this.a=null},
ai0:function ai0(){this.b=this.a=null},
ai3:function ai3(){this.b=this.a=null},
ai4:function ai4(){this.b=this.a=null},
Xo:function Xo(d){this.b=d},
ai2:function ai2(){this.b=$
this.c=null},
b30:function b30(){var _=this
_.w=_.r=_.f=_.e=$},
LZ:function LZ(d){this.a=d
this.c=null},
c2_(d){var x=new B.b32(C.D(y.p,y.h))
x.aLD(d)
return x},
c23(d,e,f,g){var x=d/255,w=e/255,v=f/255,u=g/255,t=w*(1-v),s=x*(1-u)
return D.m.F(D.m.au((2*x<v?2*w*x+t+s:u*v-2*(v-x)*(u-w)+t+s)*255,0,255))},
b33(d,e){if(e===0)return 0
return D.f.F(D.f.au(D.m.F(255*(1-(1-d/255)/(e/255))),0,255))},
b35(d,e){return D.f.F(D.f.au(d+e-255,0,255))},
c25(d,e){return D.f.F(D.f.au(255-(255-e)*(255-d),0,255))},
b34(d,e){if(e===255)return 255
return D.m.F(D.m.au(d/255/(1-e/255)*255,0,255))},
c26(d,e){var x=d/255,w=e/255,v=1-w
return D.m.aM(255*(v*w*x+w*(1-v*(1-x))))},
c21(d,e){var x=e/255,w=d/255
if(w<0.5)return D.m.aM(510*x*w)
else return D.m.aM(255*(1-2*(1-x)*(1-w)))},
c27(d,e){if(e<128)return B.b33(d,2*e)
else return B.b34(d,2*(e-128))},
c22(d,e){var x
if(e<128)return B.b35(d,2*e)
else{x=2*(e-128)
return x+d>255?255:d+x}},
c24(d,e){return e<128?Math.min(d,2*e):Math.max(d,2*(e-128))},
c20(d,e){return D.m.aM(e+d-2*e*d/255)},
n8(d,e,f){var x
if(d==null)x=0
else x=f===1?d[e]:(d[e]<<8|d[e+1])>>>8
return x},
ccl(b5,b6,b7,b8,b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=C.D(y.p,y.e)
for(x=b9.length,w=0;v=b9.length,w<v;b9.length===x||(0,C.F)(b9),++w){u=b9[w]
b4.l(0,u.a,u)}if(b6===8)t=1
else t=b6===16?2:-1
s=C.fR(b3,b3,D.av,0,D.bO,b8,b3,0,v,b3,D.av,b7,!1)
if(t===-1)throw C.i(C.bH("PSD: unsupported bit depth: "+C.r(b6)))
r=b4.h(0,0)
q=b4.h(0,1)
p=b4.h(0,2)
o=b4.h(0,-1)
n=C.c([0,0,0],y.t)
m=-t
for(x=s.a,x=x.gT(x),l=v>=5,k=v===4,j=v>=2,v=v>=4;x.q();){i=x.gJ()
m+=t
switch(b5){case A.a49:i.sa7(B.n8(r.c,m,t))
i.sag(B.n8(q.c,m,t))
i.sah(B.n8(p.c,m,t))
i.san(v?B.n8(o.c,m,t):255)
if(i.gan()!==0){i.sa7((i.ga7()+i.gan()-255)*255/i.gan())
i.sag((i.gag()+i.gan()-255)*255/i.gan())
i.sah((i.gah()+i.gan()-255)*255/i.gan())}break
case A.a4b:h=B.n8(r.c,m,t)
g=B.n8(q.c,m,t)
f=B.n8(p.c,m,t)
e=v?B.n8(o.c,m,t):255
d=((h*100>>>8)+16)/116
a0=(g-128)/500+d
a1=d-(f-128)/200
a2=Math.pow(d,3)
d=a2>0.008856?a2:(d-0.13793103448275862)/7.787
a3=Math.pow(a0,3)
a0=a3>0.008856?a3:(a0-0.13793103448275862)/7.787
a4=Math.pow(a1,3)
a1=a4>0.008856?a4:(a1-0.13793103448275862)/7.787
a0=a0*95.047/100
d=d*100/100
a1=a1*108.883/100
a5=a0*3.2406+d*-1.5372+a1*-0.4986
a6=a0*-0.9689+d*1.8758+a1*0.0415
a7=a0*0.0557+d*-0.204+a1*1.057
a5=a5>0.0031308?1.055*Math.pow(a5,0.4166666666666667)-0.055:12.92*a5
a6=a6>0.0031308?1.055*Math.pow(a6,0.4166666666666667)-0.055:12.92*a6
a7=a7>0.0031308?1.055*Math.pow(a7,0.4166666666666667)-0.055:12.92*a7
a8=[D.m.F(D.m.au(a5*255,0,255)),D.m.F(D.m.au(a6*255,0,255)),D.m.F(D.m.au(a7*255,0,255))]
i.sa7(a8[0])
i.sag(a8[1])
i.sah(a8[2])
i.san(e)
break
case A.a48:a9=B.n8(r.c,m,t)
e=j?B.n8(o.c,m,t):255
i.sa7(a9)
i.sag(a9)
i.sah(a9)
i.san(e)
break
case A.a4a:b0=B.n8(r.c,m,t)
b1=B.n8(q.c,m,t)
d=B.n8(p.c,m,t)
b2=B.n8(b4.h(0,k?-1:3).c,m,t)
e=l?B.n8(o.c,m,t):255
B.chx(255-b0,255-b1,255-d,255-b2,n)
i.sa7(n[0])
i.sag(n[1])
i.sah(n[2])
i.san(e)
break
default:throw C.i(C.bH("Unhandled color mode: "+C.r(b5)))}}return s},
qQ:function qQ(d,e){this.a=d
this.b=e},
b32:function b32(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=_.w=$
_.y=null
_.z=d
_.as=$
_.ay=_.ax=_.at=null},
ahZ:function ahZ(d,e){this.a=d
this.b=e},
ai1:function ai1(d,e,f){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.y=_.w=$
_.Q=null
_.as=$
_.ay=d
_.ch=e
_.cx=null
_.cy=f},
cv0(d,e){var x,w
switch(d){case"lsct":x=new B.ai2()
w=e.c-e.d
x.b=e.Z()
if(w>=12){if(e.hh(4)!=="8BIM")C.a8(C.bH("Invalid key in layer additional data"))
x.c=e.hh(4)}if(w>=16)e.Z()
return x
default:return new B.Xo(e)}},
M_:function M_(){},
b31:function b31(){this.a=null},
ai8:function ai8(){},
wd:function wd(d,e,f){this.a=d
this.b=e
this.c=f},
kP:function kP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xs:function Xs(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
M2:function M2(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
ai7:function ai7(){this.y=this.b=this.a=0},
we(d,e){return(A.x_[d>>>8]<<17|A.x_[e>>>8]<<16|A.x_[d&255]<<1|A.x_[e&255])>>>0},
pi:function pi(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
b3c:function b3c(){this.b=this.a=null},
alF:function alF(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
mo:function mo(d,e){this.a=d
this.b=e},
bgF:function bgF(){this.a=null
this.b=$},
bgP:function bgP(d){this.a=d
this.c=this.b=0},
alG:function alG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
c2S(d,e,f){var x=new B.bgR(e,f,d),w=y.I
x.e=C.bm(e,null,!1,w)
x.f=C.bm(e,null,!1,w)
return x},
bgR:function bgR(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=0
_.f=_.e=null
_.r=$
_.x=_.w=null
_.y=0
_.z=2
_.as=0
_.at=null},
alH:function alH(d,e,f,g){var _=this
_.a=d
_.c=_.b=0
_.d=e
_.w=_.r=_.f=_.e=1
_.x=f
_.y=g
_.z=!1
_.Q=1
_.at=_.as=$
_.ch=_.ay=0
_.cx=_.CW=null
_.db=_.cy=$
_.dy=1
_.fx=_.fr=0
_.id=null
_.k3=_.k2=_.k1=$},
Go:function Go(d,e){this.a=d
this.b=e},
jd:function jd(d,e){this.a=d
this.b=e},
pw:function pw(d,e){this.a=d
this.b=e},
bgS:function bgS(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
caU(){return new B.aVX(new Uint8Array(4096))},
aVX:function aVX(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bgQ:function bgQ(){this.b=this.a=null
this.c=$},
c32(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=C.bm(8,null,!1,y.ak),s=C.bm(4,null,!1,y.Z)
return new B.biC(d,e,new B.biI(),new B.biM(),new B.biE(x,w),new B.biO(v,u),t,s,new Uint8Array(4))},
ceh(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
biC:function biC(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=$
_.d=null
_.e=$
_.f=f
_.r=g
_.w=h
_.x=i
_.z=_.y=$
_.ax=_.at=_.as=_.Q=null
_.ch=_.ay=$
_.cx=_.CW=null
_.cy=$
_.db=j
_.dy=k
_.fr=null
_.fy=_.fx=$
_.go=null
_.id=l
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=_.k1=$
_.R8=_.p4=null
_.x2=_.x1=_.to=_.ry=_.rx=_.RG=$
_.xr=null
_.y2=_.y1=0
_.b8=$
_.b6=null
_.a2=_.D=$
_.a6=null
_.ab=$},
biP:function biP(){},
cee(d){var x=new B.a_P(d)
x.b=254
x.c=0
x.d=-8
return x},
a_P:function a_P(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
dR(d,e,f){return D.f.iH(D.f.R(d+2*e+f+2,2),32)},
cys(d){var x,w=C.c([B.dR(J.A(d.a,d.d+-33),J.A(d.a,d.d+-32),J.A(d.a,d.d+-31)),B.dR(J.A(d.a,d.d+-32),J.A(d.a,d.d+-31),J.A(d.a,d.d+-30)),B.dR(J.A(d.a,d.d+-31),J.A(d.a,d.d+-30),J.A(d.a,d.d+-29)),B.dR(J.A(d.a,d.d+-30),J.A(d.a,d.d+-29),J.A(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.xd(x*32,4,w)},
cyk(d){var x=J.A(d.a,d.d+-33),w=J.A(d.a,d.d+-1),v=J.A(d.a,d.d+31),u=J.A(d.a,d.d+63),t=J.A(d.a,d.d+95),s=C.bP(d,null,0),r=s.Nm(),q=B.dR(x,w,v)
r.$flags&2&&C.u(r)
r[0]=16843009*q
s.d+=32
q=s.Nm()
r=B.dR(w,v,u)
q.$flags&2&&C.u(q)
q[0]=16843009*r
s.d+=32
r=s.Nm()
q=B.dR(v,u,t)
r.$flags&2&&C.u(r)
r[0]=16843009*q
s.d+=32
q=s.Nm()
r=B.dR(u,t,t)
q.$flags&2&&C.u(q)
q[0]=16843009*r},
cyi(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.A(d.a,d.d+(w-32))+J.A(d.a,d.d+(-1+w*32))
x=D.f.R(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.rB(v,u,u+4,x)}},
c33(d,e){var x,w,v,u,t,s=255-J.A(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.A(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.nx()[v+J.A(d.a,d.d+(-32+u))]
J.bd(d.a,d.d+(x+u),t)}x+=32}},
cyq(d){B.c33(d,4)},
cyr(d){B.c33(d,8)},
cyp(d){B.c33(d,16)},
cyo(d){var x,w=J.A(d.a,d.d+-1),v=J.A(d.a,d.d+31),u=J.A(d.a,d.d+63),t=J.A(d.a,d.d+95),s=J.A(d.a,d.d+-33),r=J.A(d.a,d.d+-32),q=J.A(d.a,d.d+-31),p=J.A(d.a,d.d+-30),o=J.A(d.a,d.d+-29)
d.l(0,96,B.dR(v,u,t))
x=B.dR(w,v,u)
d.l(0,97,x)
d.l(0,64,x)
x=B.dR(s,w,v)
d.l(0,98,x)
d.l(0,65,x)
d.l(0,32,x)
x=B.dR(r,s,w)
d.l(0,99,x)
d.l(0,66,x)
d.l(0,33,x)
d.l(0,0,x)
x=B.dR(q,r,s)
d.l(0,67,x)
d.l(0,34,x)
d.l(0,1,x)
x=B.dR(p,q,r)
d.l(0,35,x)
d.l(0,2,x)
d.l(0,3,B.dR(o,p,q))},
cyn(d){var x,w=J.A(d.a,d.d+-32),v=J.A(d.a,d.d+-31),u=J.A(d.a,d.d+-30),t=J.A(d.a,d.d+-29),s=J.A(d.a,d.d+-28),r=J.A(d.a,d.d+-27),q=J.A(d.a,d.d+-26),p=J.A(d.a,d.d+-25)
d.l(0,0,B.dR(w,v,u))
x=B.dR(v,u,t)
d.l(0,32,x)
d.l(0,1,x)
x=B.dR(u,t,s)
d.l(0,64,x)
d.l(0,33,x)
d.l(0,2,x)
x=B.dR(t,s,r)
d.l(0,96,x)
d.l(0,65,x)
d.l(0,34,x)
d.l(0,3,x)
x=B.dR(s,r,q)
d.l(0,97,x)
d.l(0,66,x)
d.l(0,35,x)
x=B.dR(r,q,p)
d.l(0,98,x)
d.l(0,67,x)
d.l(0,99,B.dR(q,p,p))},
cyu(d){var x=J.A(d.a,d.d+-1),w=J.A(d.a,d.d+31),v=J.A(d.a,d.d+63),u=J.A(d.a,d.d+-33),t=J.A(d.a,d.d+-32),s=J.A(d.a,d.d+-31),r=J.A(d.a,d.d+-30),q=J.A(d.a,d.d+-29),p=D.f.iH(D.f.R(u+t+1,1),32)
d.l(0,65,p)
d.l(0,0,p)
p=D.f.iH(D.f.R(t+s+1,1),32)
d.l(0,66,p)
d.l(0,1,p)
p=D.f.iH(D.f.R(s+r+1,1),32)
d.l(0,67,p)
d.l(0,2,p)
d.l(0,3,D.f.iH(D.f.R(r+q+1,1),32))
d.l(0,96,B.dR(v,w,x))
d.l(0,64,B.dR(w,x,u))
p=B.dR(x,u,t)
d.l(0,97,p)
d.l(0,32,p)
p=B.dR(u,t,s)
d.l(0,98,p)
d.l(0,33,p)
p=B.dR(t,s,r)
d.l(0,99,p)
d.l(0,34,p)
d.l(0,35,B.dR(s,r,q))},
cyt(d){var x,w=J.A(d.a,d.d+-32),v=J.A(d.a,d.d+-31),u=J.A(d.a,d.d+-30),t=J.A(d.a,d.d+-29),s=J.A(d.a,d.d+-28),r=J.A(d.a,d.d+-27),q=J.A(d.a,d.d+-26),p=J.A(d.a,d.d+-25)
d.l(0,0,D.f.iH(D.f.R(w+v+1,1),32))
x=D.f.iH(D.f.R(v+u+1,1),32)
d.l(0,64,x)
d.l(0,1,x)
x=D.f.iH(D.f.R(u+t+1,1),32)
d.l(0,65,x)
d.l(0,2,x)
x=D.f.iH(D.f.R(t+s+1,1),32)
d.l(0,66,x)
d.l(0,3,x)
d.l(0,32,B.dR(w,v,u))
x=B.dR(v,u,t)
d.l(0,96,x)
d.l(0,33,x)
x=B.dR(u,t,s)
d.l(0,97,x)
d.l(0,34,x)
x=B.dR(t,s,r)
d.l(0,98,x)
d.l(0,35,x)
d.l(0,67,B.dR(s,r,q))
d.l(0,99,B.dR(r,q,p))},
cyl(d){var x,w=J.A(d.a,d.d+-1),v=J.A(d.a,d.d+31),u=J.A(d.a,d.d+63),t=J.A(d.a,d.d+95)
d.l(0,0,D.f.iH(D.f.R(w+v+1,1),32))
x=D.f.iH(D.f.R(v+u+1,1),32)
d.l(0,32,x)
d.l(0,2,x)
x=D.f.iH(D.f.R(u+t+1,1),32)
d.l(0,64,x)
d.l(0,34,x)
d.l(0,1,B.dR(w,v,u))
x=B.dR(v,u,t)
d.l(0,33,x)
d.l(0,3,x)
x=B.dR(u,t,t)
d.l(0,65,x)
d.l(0,35,x)
d.l(0,99,t)
d.l(0,98,t)
d.l(0,97,t)
d.l(0,96,t)
d.l(0,66,t)
d.l(0,67,t)},
cyj(d){var x=J.A(d.a,d.d+-1),w=J.A(d.a,d.d+31),v=J.A(d.a,d.d+63),u=J.A(d.a,d.d+95),t=J.A(d.a,d.d+-33),s=J.A(d.a,d.d+-32),r=J.A(d.a,d.d+-31),q=J.A(d.a,d.d+-30),p=D.f.iH(D.f.R(x+t+1,1),32)
d.l(0,34,p)
d.l(0,0,p)
p=D.f.iH(D.f.R(w+x+1,1),32)
d.l(0,66,p)
d.l(0,32,p)
p=D.f.iH(D.f.R(v+w+1,1),32)
d.l(0,98,p)
d.l(0,64,p)
d.l(0,96,D.f.iH(D.f.R(u+v+1,1),32))
d.l(0,3,B.dR(s,r,q))
d.l(0,2,B.dR(t,s,r))
p=B.dR(x,t,s)
d.l(0,35,p)
d.l(0,1,p)
p=B.dR(w,x,t)
d.l(0,67,p)
d.l(0,33,p)
p=B.dR(v,w,x)
d.l(0,99,p)
d.l(0,65,p)
d.l(0,97,B.dR(u,v,w))},
cyF(d){var x
for(x=0;x<16;++x)d.pb(x*32,16,d,-32)},
cyD(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.A(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.rB(u,t,t+16,v)
x+=32}},
biG(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.rB(w,v,v+16,d)}},
cyv(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.A(d.a,d.d+(-1+w*32))+J.A(d.a,d.d+(w-32))
B.biG(D.f.R(x,5),d)},
cyx(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.A(d.a,d.d+(-1+w*32))
B.biG(D.f.R(x,4),d)},
cyw(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.A(d.a,d.d+(w-32))
B.biG(D.f.R(x,4),d)},
cyy(d){B.biG(128,d)},
cyG(d){var x
for(x=0;x<8;++x)d.pb(x*32,8,d,-32)},
cyE(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.A(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.rB(u,t,t+8,v)
x+=32}},
biH(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.rB(w,v,v+8,d)}},
cyz(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.A(d.a,d.d+(w-32))+J.A(d.a,d.d+(-1+w*32))
B.biH(D.f.R(x,4),d)},
cyA(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.A(d.a,d.d+(w-32))
B.biH(D.f.R(x,3),d)},
cyB(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.A(d.a,d.d+(-1+w*32))
B.biH(D.f.R(x,3),d)},
cyC(d){B.biH(128,d)},
AX(d,e,f,g,h){var x=e+f+g*32,w=J.A(d.a,d.d+x)+D.f.R(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.l(0,x,w)},
biF(d,e,f,g,h){B.AX(d,0,0,e,f+g)
B.AX(d,0,1,e,f+h)
B.AX(d,0,2,e,f-h)
B.AX(d,0,3,e,f-g)},
cym(){var x,w,v,u
if(!$.cef){for(x=-255;x<=255;++x){w=$.aBm()
v=255+x
u=x<0?-x:x
w.$flags&2&&C.u(w)
w[v]=u
u=$.bZZ()
w=D.f.R(w[v],1)
u.$flags&2&&C.u(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.c__()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&C.u(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.c_0()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&C.u(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.nx()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&C.u(w)
w[255+x]=v}$.cef=!0}},
biD:function biD(){},
cyh(){var x,w=J.iH(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new B.a_O(w)},
cyV(){var x,w,v,u,t=new Uint8Array(3),s=J.iH(4,y.z)
for(x=y.V,w=0;w<4;++w){v=J.iH(8,x)
for(u=0;u<8;++u)v[u]=B.cyh()
s[w]=v}D.K.fu(t,0,3,255)
return new B.biN(t,s)},
biI:function biI(){this.c=null
this.d=$},
biM:function biM(){this.b=this.a=null},
biO:function biO(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
a_O:function a_O(d){this.a=d},
biN:function biN(d,e){this.a=d
this.b=e},
biE:function biE(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
Gy:function Gy(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
amj:function amj(){this.b=this.a=0},
aml:function aml(d,e,f){this.a=d
this.b=e
this.c=f},
amk:function amk(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
amm:function amm(d,e,f){this.a=d
this.b=e
this.c=f},
c34(d,e){var x,w=C.c([],y.A),v=C.c([],y.F),u=new Uint32Array(2),t=new B.amh(d,u)
u=t.d=J.cl(D.bK.ga5(u),0,null)
x=d.bw()
u.$flags&2&&C.u(u)
u[0]=x
x=d.bw()
u.$flags&2&&C.u(u)
u[1]=x
x=d.bw()
u.$flags&2&&C.u(u)
u[2]=x
x=d.bw()
u.$flags&2&&C.u(u)
u[3]=x
x=d.bw()
u.$flags&2&&C.u(u)
u[4]=x
x=d.bw()
u.$flags&2&&C.u(u)
u[5]=x
x=d.bw()
u.$flags&2&&C.u(u)
u[6]=x
x=d.bw()
u.$flags&2&&C.u(u)
u[7]=x
return new B.a_Q(t,e,w,v)},
AY(d,e){return D.f.R(d+D.f.cN(1,e)-1,e)},
a_Q:function a_Q(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=null
_.r=_.f=_.e=0
_.w=null
_.z=_.y=_.x=0
_.Q=null
_.as=0
_.at=f
_.ax=g
_.ay=0
_.ch=null
_.CW=$
_.db=_.cy=_.cx=null},
af1:function af1(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=null
_.r=_.f=_.e=0
_.w=null
_.z=_.y=_.x=0
_.Q=null
_.as=0
_.at=f
_.ax=g
_.ay=0
_.ch=null
_.CW=$
_.db=_.cy=_.cx=null},
amh:function amh(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
biJ:function biJ(d,e){this.a=d
this.b=e},
biK(d,e,f){var x=d[e]
d.$flags&2&&C.u(d)
d[e]=(((x&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(x&16711935)+(f&16711935)&16711935)>>>0},
wV(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
GA(d){if(d<0)return 0
if(d>255)return 255
return d},
biL(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
cyH(d,e,f){return 4278190080},
cyI(d,e,f){return e},
cyN(d,e,f){return d[f]},
cyO(d,e,f){return d[f+1]},
cyP(d,e,f){return d[f-1]},
cyQ(d,e,f){var x=d[f]
return B.wV(B.wV(e,d[f+1]),x)},
cyR(d,e,f){return B.wV(e,d[f-1])},
cyS(d,e,f){return B.wV(e,d[f])},
cyT(d,e,f){return B.wV(d[f-1],d[f])},
cyU(d,e,f){return B.wV(d[f],d[f+1])},
cyJ(d,e,f){var x=d[f-1],w=d[f],v=d[f+1]
return B.wV(B.wV(e,x),B.wV(w,v))},
cyK(d,e,f){var x=d[f],w=d[f-1]
return B.biL(x>>>24,e>>>24,w>>>24)+B.biL(x>>>16&255,e>>>16&255,w>>>16&255)+B.biL(x>>>8&255,e>>>8&255,w>>>8&255)+B.biL(x&255,e&255,w&255)<=0?x:e},
cyL(d,e,f){var x=d[f],w=d[f-1]
return(B.GA((e>>>24)+(x>>>24)-(w>>>24))<<24|B.GA((e>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|B.GA((e>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|B.GA((e&255)+(x&255)-(w&255)))>>>0},
cyM(d,e,f){var x,w,v,u=d[f],t=d[f-1],s=B.wV(e,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(B.GA(u+D.f.av(u-(t>>>24),2))<<24|B.GA(x+D.f.av(x-(t>>>16&255),2))<<16|B.GA(w+D.f.av(w-(t>>>8&255),2))<<8|B.GA(v+D.f.av(v-(t&255),2)))>>>0},
Gz:function Gz(d,e){this.a=d
this.b=e},
ami:function ami(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
bjk:function bjk(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
a_V:function a_V(){},
af2:function af2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=$
_.r=1
_.x=_.w=$},
c9U(){var x=new Uint8Array(128),w=new Int16Array(128)
x=new B.aeh(x,w,new Int16Array(128))
x.a5w(0)
return x},
crV(){var x,w=J.iH(5,y.x)
for(x=0;x<5;++x)w[x]=B.c9U()
return new B.UC(w)},
aeh:function aeh(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
UC:function UC(d){this.a=d},
Oa:function Oa(d,e){this.a=d
this.b=e},
amA:function amA(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
af3:function af3(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
bjl:function bjl(){this.b=this.a=null},
o5(d,e){return new B.agP(d,new Uint8Array(e))},
agP:function agP(d,e){this.a=0
this.b=d
this.c=e},
c0O(d){var x=new C.K1(C.D(y.N,y.P))
x.hT(d)
return x},
cr4(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
for(x=1;x<=a3;)x=x<<1>>>0
x=x>>>1
w=x>>>1
v=C.c([0,0],y.t)
for(u=a4.$flags|0,t=x,x=w;x>=1;t=x,x=w){s=a5+a9*(a8-t)
r=a9*x
q=a9*t
p=a7*x
o=a7*t
for(n=(a6&x)>>>0!==0,m=a7*(a6-t),l=a5;l<=s;l+=q){k=l+m
for(j=l;j<=k;j+=o){i=j+p
h=j+r
g=h+p
if(a2){B.U2(a4[j],a4[h],v)
f=v[0]
e=v[1]
B.U2(a4[i],a4[g],v)
d=v[0]
a0=v[1]
B.U2(f,d,v)
a1=v[0]
u&2&&C.u(a4)
a4[j]=a1
a4[i]=v[1]
B.U2(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}else{B.U3(a4[j],a4[h],v)
f=v[0]
e=v[1]
B.U3(a4[i],a4[g],v)
d=v[0]
a0=v[1]
B.U3(f,d,v)
a1=v[0]
u&2&&C.u(a4)
a4[j]=a1
a4[i]=v[1]
B.U3(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){B.U2(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.u(a4)
a4[h]=a1}else{B.U3(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.u(a4)
a4[h]=a1}u&2&&C.u(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){B.U2(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.u(a4)
a4[i]=n}else{B.U3(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.u(a4)
a4[i]=n}u&2&&C.u(a4)
a4[j]=f}}w=x>>>1}},
U2(d,e,f){var x,w,v,u,t=$.lL()
t.$flags&2&&C.u(t)
t[0]=d
x=$.mA()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.f.R(v,1)
f[0]=u
f[1]=u-v},
U3(d,e,f){var x=d-D.f.R(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
chR(d){var x,w,v,u,t,s,r,q,p,o,n=null
if(B.aUG().aA1(d))return new B.Vg()
x=new C.X4(C.c1e())
if(x.F3(d))return x
w=new B.aRA()
w.f=C.cd(d,!1,n,0)
w.a=new B.adQ(C.c([],y.b))
if(w.aiH())return w
v=new B.bjl()
if(v.F3(d))return v
u=new B.bgQ()
if(u.a3Q(C.cd(d,!1,n,0))!=null)return u
if(B.c2_(d).c===943870035)return new B.b31()
if(B.cr3(d))return new B.aOD()
if(B.c01(C.cd(d,!1,n,0)))return new B.aaj(!1)
t=new B.bgF()
s=C.cd(d,!1,n,0)
r=t.a=new B.alF(A.ys)
r.hT(s)
if(r.awU())return t
q=new B.aTw()
r=C.cd(d,!1,n,0)
q.a=r
r=B.c9X(r)
q.b=r
if(r!=null)return q
p=new B.b3c()
if(p.iM(d)!=null)return p
o=new B.b1j(C.c([],y.s))
if(o.F3(d))return o
return n},
bWb(d){var x=B.chR(d)
return x==null?null:x.mm(d,null)},
cHH(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if($.c3X==null){x=$.c3X=new Uint8Array(768)
for(w=-256;w<0;++w)x[256+w]=0
for(w=0;w<256;++w)x[256+w]=w
for(w=256;w<512;++w)x[256+w]=255}for(x=a6.$flags|0,w=0;w<64;++w){v=a4[w]
u=a3[w]
x&2&&C.u(a6)
a6[w]=v*u}for(t=0,w=0;w<8;++w,t+=8){v=1+t
u=a6[v]
if(u===0&&a6[2+t]===0&&a6[3+t]===0&&a6[4+t]===0&&a6[5+t]===0&&a6[6+t]===0&&a6[7+t]===0){v=D.f.R(5793*a6[t]+512,10)
s=(v&2147483647)-((v&2147483648)>>>0)
x&2&&C.u(a6)
a6[t]=s
a6[t+1]=s
a6[t+2]=s
a6[t+3]=s
a6[t+4]=s
a6[t+5]=s
a6[t+6]=s
a6[t+7]=s
continue}r=D.f.R(5793*a6[t]+128,8)
q=(r&2147483647)-((r&2147483648)>>>0)
r=4+t
p=D.f.R(5793*a6[r]+128,8)
o=(p&2147483647)-((p&2147483648)>>>0)
p=2+t
n=a6[p]
m=6+t
l=a6[m]
k=7+t
j=a6[k]
i=D.f.R(2896*(u-j)+128,8)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.f.R(2896*(u+j)+128,8)
g=(j&2147483647)-((j&2147483648)>>>0)
j=3+t
u=a6[j]<<4
f=(u&2147483647)-((u&2147483648)>>>0)
u=5+t
i=a6[u]<<4
e=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.R(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.R(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.R(n*3784+l*1567+128,8)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.f.R(n*1567-l*3784+128,8)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.f.R(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.f.R(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.f.R(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.f.R(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.f.R(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.f.R(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.R(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.f.R(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.f.R(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.f.R(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.f.R(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.f.R(f*4017-d*799+2048,12)
f=(d&2147483647)-((d&2147483648)>>>0)
x&2&&C.u(a6)
a6[t]=q+s
a6[k]=q-s
a6[v]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[u]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(w=0;w<8;++w){v=8+w
u=a6[v]
if(u===0&&a6[16+w]===0&&a6[24+w]===0&&a6[32+w]===0&&a6[40+w]===0&&a6[48+w]===0&&a6[56+w]===0){u=D.f.R(5793*a6[w]+8192,14)
s=(u&2147483647)-((u&2147483648)>>>0)
x&2&&C.u(a6)
a6[w]=s
a6[v]=s
a6[16+w]=s
a6[24+w]=s
a6[32+w]=s
a6[40+w]=s
a6[48+w]=s
a6[56+w]=s
continue}r=D.f.R(5793*a6[w]+2048,12)
q=(r&2147483647)-((r&2147483648)>>>0)
r=32+w
p=D.f.R(5793*a6[r]+2048,12)
o=(p&2147483647)-((p&2147483648)>>>0)
p=16+w
n=a6[p]
m=48+w
l=a6[m]
k=56+w
j=a6[k]
i=D.f.R(2896*(u-j)+2048,12)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.f.R(2896*(u+j)+2048,12)
g=(j&2147483647)-((j&2147483648)>>>0)
j=24+w
f=a6[j]
u=40+w
e=a6[u]
i=D.f.R(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.R(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.R(n*3784+l*1567+2048,12)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.f.R(n*1567-l*3784+2048,12)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.f.R(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.f.R(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.f.R(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.f.R(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.f.R(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.f.R(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.R(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.f.R(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.f.R(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.f.R(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.f.R(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.f.R(f*4017-d*799+2048,12)
f=(d&2147483647)-((d&2147483648)>>>0)
x&2&&C.u(a6)
a6[w]=q+s
a6[k]=q-s
a6[v]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[u]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(x=$.c3X,v=a5.$flags|0,w=0;w<64;++w){x.toString
u=D.f.R(a6[w]+8,4)
u=x[384+((u&2147483647)-((u&2147483648)>>>0))]
v&2&&C.u(a5)
a5[w]=u}},
cGu(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.r
if(d8.h(0,d7).a.aE(274)){x=d8.h(0,d7).gfk()
x.toString
w=x}else w=0
x=d9.d
v=x.e
v.toString
x=x.d
x.toString
u=w>=5&&w<=8
if(u)t=x
else t=v
if(u)s=v
else s=x
r=C.fR(d6,d6,D.av,0,D.bO,s,d6,0,3,d6,D.av,t,!1)
r.e=C.TZ(d8)
r.gue().h(0,d7).sfk(d6)
q=x-1
p=v-1
d8=d9.Q
switch(d8.length){case 1:o=d8[0]
n=o.e
m=o.f
l=o.r
d8=w===8
x=w===7
v=w===6
k=w===5
j=w===4
i=w===3
h=w===2
g=0
for(;;){f=d9.d.d
f.toString
if(!(g<f))break
e=n[D.f.fG(g,l)]
f=q-g
d=0
for(;;){a0=d9.d.e
a0.toString
if(!(d<a0))break
a1=e[D.f.fG(d,m)]
if(h){a0=r.a
if(a0!=null)a0.dB(p-d,g,a1,a1,a1)}else if(i){a0=r.a
if(a0!=null)a0.dB(p-d,f,a1,a1,a1)}else if(j){a0=r.a
if(a0!=null)a0.dB(d,f,a1,a1,a1)}else if(k){a0=r.a
if(a0!=null)a0.dB(g,d,a1,a1,a1)}else if(v){a0=r.a
if(a0!=null)a0.dB(f,d,a1,a1,a1)}else if(x){a0=r.a
if(a0!=null)a0.dB(f,p-d,a1,a1,a1)}else{a0=r.a
if(d8){if(a0!=null)a0.dB(g,p-d,a1,a1,a1)}else if(a0!=null)a0.dB(d,g,a1,a1,a1)}++d}++g}break
case 3:o=d8[0]
a2=d8[1]
a3=d8[2]
a4=o.e
a5=a2.e
a6=a3.e
m=o.f
l=o.r
a7=a2.f
a8=a2.r
a9=a3.f
b0=a3.r
d8=w===8
x=w===7
v=w===6
k=w===5
j=w===4
i=w===3
h=w===2
g=0
for(;;){f=d9.d.d
f.toString
if(!(g<f))break
b1=D.f.fG(g,l)
b2=D.f.fG(g,a8)
b3=D.f.fG(g,b0)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
f=q-g
d=0
for(;;){a0=d9.d.e
a0.toString
if(!(d<a0))break
b6=D.f.fG(d,m)
b7=D.f.fG(d,a7)
b8=D.f.fG(d,a9)
a1=e[b6]<<8>>>0
b9=b4[b7]-128
c0=b5[b8]-128
a0=D.f.R(a1+359*c0+128,8)
c1=D.f.au((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.f.R(a1-88*b9-183*c0+128,8)
c2=D.f.au((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.f.R(a1+454*b9+128,8)
c3=D.f.au((a0&2147483647)-((a0&2147483648)>>>0),0,255)
if(h){a0=r.a
if(a0!=null)a0.dB(p-d,g,c1,c2,c3)}else if(i){a0=r.a
if(a0!=null)a0.dB(p-d,f,c1,c2,c3)}else if(j){a0=r.a
if(a0!=null)a0.dB(d,f,c1,c2,c3)}else if(k){a0=r.a
if(a0!=null)a0.dB(g,d,c1,c2,c3)}else if(v){a0=r.a
if(a0!=null)a0.dB(f,d,c1,c2,c3)}else if(x){a0=r.a
if(a0!=null)a0.dB(f,p-d,c1,c2,c3)}else{a0=r.a
if(d8){if(a0!=null)a0.dB(g,p-d,c1,c2,c3)}else if(a0!=null)a0.dB(d,g,c1,c2,c3)}++d}++g}break
case 4:x=d9.c
if(x==null)throw C.i(C.bH("Unsupported color mode (4 components)"))
x=x.d===0
o=d8[0]
a2=d8[1]
a3=d8[2]
c4=d8[3]
a4=o.e
a5=a2.e
a6=a3.e
c5=c4.e
m=o.f
l=o.r
a7=a2.f
a8=a2.r
a9=a3.f
b0=a3.r
c6=c4.f
c7=c4.r
d8=w===8
v=w===7
k=w===6
j=w===5
i=w===4
h=w===3
f=w===2
g=0
for(;;){a0=d9.d.d
a0.toString
if(!(g<a0))break
b1=D.f.fG(g,l)
b2=D.f.fG(g,a8)
b3=D.f.fG(g,b0)
c8=D.f.fG(g,c7)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
c9=c5[c8]
a0=q-g
d=0
for(;;){d0=d9.d.e
d0.toString
if(!(d<d0))break
b6=D.f.fG(d,m)
b7=D.f.fG(d,a7)
b8=D.f.fG(d,a9)
d1=D.f.fG(d,c6)
if(x){d2=e[b6]
d3=b4[b7]
a1=b5[b8]
d4=c9[d1]}else{a1=e[b6]
b9=b4[b7]
c0=b5[b8]
d4=c9[d1]
d0=c0-128
d2=255-D.f.au(D.m.F(a1+1.402*d0),0,255)
d5=b9-128
d3=255-D.m.F(D.m.au(a1-0.3441363*d5-0.71413636*d0,0,255))
a1=255-D.f.au(D.m.F(a1+1.772*d5),0,255)}d0=D.f.R(d2*d4,8)
c1=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.f.R(d3*d4,8)
c2=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.f.R(a1*d4,8)
c3=(d0&2147483647)-((d0&2147483648)>>>0)
if(f){d0=r.a
if(d0!=null)d0.dB(p-d,g,c1,c2,c3)}else if(h){d0=r.a
if(d0!=null)d0.dB(p-d,a0,c1,c2,c3)}else if(i){d0=r.a
if(d0!=null)d0.dB(d,a0,c1,c2,c3)}else if(j){d0=r.a
if(d0!=null)d0.dB(g,d,c1,c2,c3)}else if(k){d0=r.a
if(d0!=null)d0.dB(a0,d,c1,c2,c3)}else if(v){d0=r.a
if(d0!=null)d0.dB(a0,p-d,c1,c2,c3)}else{d0=r.a
if(d8){if(d0!=null)d0.dB(g,p-d,c1,c2,c3)}else if(d0!=null)d0.dB(d,g,c1,c2,c3)}++d}++g}break
default:throw C.i(C.bH("Unsupported color mode"))}return r},
cz5(d,e,f,g,h,i){B.cz2(i,d,e,f,g,h,!0,i)},
cz6(d,e,f,g,h,i){B.cz3(i,d,e,f,g,h,!0,i)},
cz4(d,e,f,g,h,i){B.cz1(i,d,e,f,g,h,!0,i)},
O9(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.A(d.a,d.d+x)
v=J.A(e.a,e.d+x)
J.bd(f.a,f.d+x,w+v)}},
cz2(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=C.cd(d,!1,v,u),r=C.cd(d,!1,v,u),q=C.bP(r,v,0)
if(h===0){r.l(0,0,J.A(s.a,s.d))
B.O9(C.bP(s,v,1),q,C.bP(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){B.O9(s,C.bP(q,v,x),r,1,!0)
B.O9(C.bP(s,v,1),q,C.bP(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
cz3(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=C.cd(d,!1,x,w),t=C.cd(k,!1,x,w),s=C.bP(t,x,0)
if(h===0){t.l(0,0,J.A(u.a,u.d))
B.O9(C.bP(u,x,1),s,C.bP(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
while(h<v){B.O9(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
cz1(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=C.cd(d,!1,s,r),o=C.cd(k,!1,s,r),n=C.bP(o,s,0)
if(h===0){o.l(0,0,J.A(p.a,p.d))
B.O9(C.bP(p,s,1),n,C.bP(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){B.O9(p,C.bP(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.A(n.a,n.d+(w-1))+J.A(n.a,n.d+v)-J.A(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.A(p.a,p.d+w)
J.bd(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
bVZ(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
chx(d,e,f,g,h){var x=1-g/255
h[0]=D.m.aM(255*(1-d/255)*x)
h[1]=D.m.aM(255*(1-e/255)*x)
h[2]=D.m.aM(255*(1-f/255)*x)}},A
J=c[1]
C=c[0]
D=c[2]
B=a.updateHolder(c[73],B)
A=c[176]
B.kz.prototype={
H(){return"BmpCompression."+this.b}}
B.aFe.prototype={}
B.Ci.prototype={
ae6(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===A.zt||x===A.zu}else x=!0
if(x){x=q.as=d.Z()
w=B.bVZ(x)
q.CW=w
v=D.f.eb(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.Z()
u=B.bVZ(w)
q.cy=u
t=D.f.eb(w,u)
q.db=x?255/t:0
w=q.ax=d.Z()
u=B.bVZ(w)
q.dx=u
s=D.f.eb(w,u)
q.dy=x?255/s:0
if(!o||q.r===A.zu){o=q.ay=d.Z()
x=B.bVZ(o)
q.fr=x
r=D.f.eb(o,x)
q.fx=r>0?255/r:0}else if(q.f===16){q.ay=4278190080
q.fr=24
q.fx=1}else{q.ay=4278190080
q.fr=24
q.fx=1}}else if(q.f===16){q.as=31744
q.CW=10
q.cx=8.225806451612904
q.at=992
q.cy=5
q.db=8.225806451612904
q.ax=31
q.dx=0
q.dy=8.225806451612904
q.fx=q.fr=q.ay=0}else{q.as=16711680
q.CW=16
q.cx=1
q.at=65280
q.cy=8
q.db=1
q.ax=255
q.dx=0
q.dy=1
q.ay=4278190080
q.fr=24
q.fx=1}o=d.d
d.d=o+(p-(o-q.fy))
if(q.f<=8)q.bvv(d)},
gLO(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&C.b()
x=x===0}else x=!1
else x=!0
return x},
gaO(){return Math.abs(this.c)},
bvv(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.f.cN(1,s.f)
s.ch=new C.qF(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.A(d.a,d.d++)
v=J.A(d.a,d.d++)
u=J.A(d.a,d.d++)
t=J.A(d.a,d.d++)
s.ch.OS(x,u,v,w,t)}},
blk(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.bw()
for(v=7;v>=0;--v)e.$4(D.f.j7(w,v)&1,0,0,0)
return}else if(x===2){w=d.bw()
for(v=6;v>=0;v-=2)e.$4(D.f.j7(w,v)&2,0,0,0)}else if(x===4){w=d.bw()
e.$4(D.f.R(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.bw(),0,0,0)
return}}x=o.r
if(x===A.zt&&o.f===32){u=d.Z()
x=o.as
x===$&&C.b()
t=o.CW
t===$&&C.b()
t=D.f.eb((u&x)>>>0,t)
x=o.cx
x===$&&C.b()
s=D.m.F(t*x)
x=o.at
x===$&&C.b()
t=o.cy
t===$&&C.b()
t=D.f.eb((u&x)>>>0,t)
x=o.db
x===$&&C.b()
r=D.m.F(t*x)
x=o.ax
x===$&&C.b()
t=o.dx
t===$&&C.b()
t=D.f.eb((u&x)>>>0,t)
x=o.dy
x===$&&C.b()
q=D.m.F(t*x)
if(o.gLO())p=255
else{x=o.ay
x===$&&C.b()
t=o.fr
t===$&&C.b()
t=D.f.eb((u&x)>>>0,t)
x=o.fx
x===$&&C.b()
p=D.m.F(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===A.Hi){q=d.bw()
r=d.bw()
s=d.bw()
p=d.bw()
return e.$4(s,r,q,o.gLO()?255:p)}else if(t===24){q=d.bw()
r=d.bw()
return e.$4(d.bw(),r,q,255)}else if(t===16){u=d.ad()
x=o.as
x===$&&C.b()
t=o.CW
t===$&&C.b()
t=D.f.eb((u&x)>>>0,t)
x=o.cx
x===$&&C.b()
s=D.m.F(t*x)
x=o.at
x===$&&C.b()
t=o.cy
t===$&&C.b()
t=D.f.eb((u&x)>>>0,t)
x=o.db
x===$&&C.b()
r=D.m.F(t*x)
x=o.ax
x===$&&C.b()
t=o.dx
t===$&&C.b()
t=D.f.eb((u&x)>>>0,t)
x=o.dy
x===$&&C.b()
q=D.m.F(t*x)
if(o.gLO())p=255
else{x=o.ay
x===$&&C.b()
t=o.fr
t===$&&C.b()
t=D.f.eb((u&x)>>>0,t)
x=o.fx
x===$&&C.b()
p=D.m.F(t*x)}return e.$4(s,r,q,p)}else throw C.i(C.bH("Unsupported bitsPerPixel ("+t+") or compression ("+x.j(0)+")."))}},
gbJ(){return this.b}}
B.aaj.prototype={
iM(d){var x,w=null
if(!B.c01(C.cd(d,!1,w,0)))return w
x=C.cd(d,!1,w,0)
this.a=x
return this.b=B.co5(x,w)},
i2(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new C.tf(f,f,f,f,0,D.bO,0,0)
x=g.a
x===$&&C.b()
w=e.a.b
w===$&&C.b()
x.d=w
v=e.f
w=e.b
u=D.f.av(w*v+31,32)*4
x=g.c
if(x)t=4
else if(v===1||v===4||v===8)t=1
else{s=v===32?4:3
t=s}if(x)r=D.av
else if(v===1)r=D.eG
else{if(v===2)s=D.ky
else if(v===4)s=D.kz
else s=D.av
r=s}q=x?f:e.ch
p=C.fR(f,f,r,0,D.bO,e.gaO(),f,0,t,q,D.av,w,!1)
for(o=p.gaO()-1,x=e.c,w=1/x<0,s=x<0,x=x===0;o>=0;--o){n={}
if(!(x?w:s))m=o
else{l=p.a
l=l==null?f:l.b
m=(l==null?0:l)-1-o}l=g.a
k=l.hB(u)
l.d=l.d+(k.c-k.d)
l=p.a
j=l==null
i=j?f:l.a
if(i==null)i=0
n.a=0
h=j?f:l.cD(0,m,f)
if(h==null)h=new C.eo()
while(n.a<i)e.blk(k,new B.aFd(n,g,i,e,h))}return p},
mm(d,e){if(this.iM(d)==null)return null
return this.i2(0)}}
B.aKm.prototype={}
B.aJX.prototype={}
B.ad4.prototype={}
B.aeU.prototype={
Mx(){return this.w},
pp(d,e,f,g,h){throw C.i(C.bH("B44 compression not yet supported."))},
G1(d,e,f){return this.pp(d,e,f,null,null)},
j(d){return C.r(this.r)+" "+this.x}}
B.K3.prototype={
H(){return"ExrChannelType."+this.b}}
B.Dd.prototype={
H(){return"ExrChannelName."+this.b}}
B.ad5.prototype={
aL6(d){var x=this,w=d.MZ()
x.a=w
if(w.length===0)return
x.c=A.eNv[d.Z()]
d.bw()
d.d+=3
x.f=d.Z()
x.r=d.Z()
w=x.a
if(w==="R"){x.w=!0
x.b=A.dY9}else if(w==="G"){x.w=!0
x.b=A.dYa}else if(w==="B"){x.w=!0
x.b=A.dYb}else if(w==="A"){x.w=!0
x.b=A.dYc}else{x.w=!1
x.b=A.dYd}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break}}}
B.qg.prototype={
H(){return"ExrCompressorType."+this.b}}
B.aOC.prototype={
pp(d,e,f,g,h){throw C.i(C.bH("Unsupported compression type"))},
G1(d,e,f){return this.pp(d,e,f,null,null)}}
B.aUk.prototype={}
B.ad6.prototype={}
B.ad7.prototype={
ae9(d){var x,w,v,u,t=this,s=C.cd(d,!1,null,0)
if(s.Z()!==20000630)throw C.i(C.bH("File is not an OpenEXR image file."))
x=t.d=s.bw()
if(x!==2)throw C.i(C.bH("Cannot read version "+x+" image files."))
x=t.e=s.pl()
if((x&4294967289)>>>0!==0)throw C.i(C.bH("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=B.cam(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;;){v=B.cam(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw C.i(C.bH("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,C.F)(x),++u)x[u].bvu(s)
t.b8s(s)},
b8s(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,C.F)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.b8D(u,d)
else t.b8A(u,d)}},
b8D(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
b3===$&&C.b()
x=(b3&16)!==0
b3=b4.b
b3.toString
w=b4.CW
v=b4.ay
u=C.bP(b5,b2,0)
t=b4.c
s=b4.a
r=0
q=0
for(;;){p=b4.k1
p.toString
if(!(r<p))break
o=0
for(;;){p=b4.id
p.toString
if(!(o<p))break
for(p=q!==0,n=0,m=0;n<b4.go[r];++n)for(l=0;l<b4.fy[o];++l,++m){if(p)break
u.d=v[q][m]
if(x)if(u.Z()!==s)throw C.i(C.bH("Invalid Image Data"))
k=u.Z()
j=u.Z()
u.Z()
u.Z()
i=u.hB(u.Z())
u.d=u.d+(i.c-i.d)
h=b4.dy
h.toString
g=j*h
f=b4.dx
f.toString
h=w.pp(i,k*f,g,f,h)
f=h.length
f=Math.min(f,f)
e=new C.kJ(h,0,f,0,!1)
d=w.a
a0=w.b
a1=t.length
a2=0
a3=0
for(;;){if(!(a3<a0&&g<this.b))break
for(a4=0;a4<a1;++a4){if(a2>=f)break
a5=t[a4]
h=b4.dx
h.toString
a6=k*h
for(a7=0;a7<d;++a7,++a6){h=a5.c
h===$&&C.b()
switch(h.a){case 1:h=e.ad()
a8=$.fP
a9=(a8!=null?a8:C.hu())[h]
break
case 2:a9=e.ad()
break
case 0:a9=e.Z()
break
default:a9=b2}h=a5.d
h===$&&C.b()
a2+=h
h=a5.w
h===$&&C.b()
if(h){h=b3.a
b0=h==null?b2:h.cD(a6,g,b2)
if(b0==null)b0=new C.eo()
h=a5.b
h===$&&C.b()
b0.l(0,h.a,a9)}else{h=a5.a
h===$&&C.b()
a8=b3.b
b1=a8!=null?a8.h(0,h):b2
if(b1!=null)b1.dB(a6,g,a9,0,0)}}}++a3;++g}}++o;++q}++r}},
b8A(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
a5===$&&C.b()
x=(a5&16)!==0
a5=a6.b
a5.toString
w=a6.CW
v=a6.ay[0]
u=a6.cx
t=C.bP(a7,a4,0)
for(s=v.length,r=a6.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.Z()!==3.141592653589793)throw C.i(C.bH("Invalid Image Data"))
n=t.Z()
m=$.fz()
m.$flags&2&&C.u(m)
m[0]=n
n=$.jn()
m[0]=t.Z()
l=t.hB(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.G1(l,0,p)
m=n.length
k=new C.kJ(n,0,Math.min(m,m),0,!1)}else k=l
j=k.c-k.d
i=r.length
h=0
for(;;){if(!(h<u&&p<this.b))break
g=a6.cy[p]
if(g>=j)break
for(f=0;f<i;++f){if(g>=j)break
e=r[f]
d=a6.w
for(a0=0;a0<d;++a0){n=e.c
n===$&&C.b()
switch(n.a){case 1:n=k.ad()
m=$.fP
a1=(m!=null?m:C.hu())[n]
break
case 2:a1=k.ad()
break
case 0:a1=k.Z()
break
default:a1=a4}n=e.d
n===$&&C.b()
g+=n
n=e.w
n===$&&C.b()
if(n){n=a5.a
a2=n==null?a4:n.cD(a0,p,a4)
if(a2==null)a2=new C.eo()
n=e.b
n===$&&C.b()
a2.l(0,n.a,a1)}else{n=e.a
n===$&&C.b()
m=a5.b
a3=m!=null?m.h(0,n):a4
if(a3!=null)a3.dB(a0,p,a1,0,0)}}}++h;++p}}},
gbJ(){return this.a},
gaO(){return this.b}}
B.U1.prototype={
aL7(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=C.D(y.N,y.u)
for(x=a2.e,w=y.t,v=a2.c,u=D.lD;;){t=a7.MZ()
if(t.length===0)break
s=a7.MZ()
r=a7.Z()
q=a7.hB(r)
a7.d=a7.d+(q.c-q.d)
x.l(0,t,new B.ad4(t,s,r))
switch(t){case"channels":for(;;){p=new B.ad5()
p.aL6(q)
o=p.a
o===$&&C.b()
if(o.length===0)break
n=p.w
n===$&&C.b()
if(n){++a2.d
o=p.c
o===$&&C.b()
if(o===A.C1)u=D.lD
else u=o===A.C2?D.mr:D.ms}else{n=p.c
n===$&&C.b()
if(n===A.C1){n=a2.w
m=a2.x
a4.l(0,o,new C.Kq(new Uint16Array(n*m),n,m,1))}else if(n===A.C2){n=a2.w
m=a2.x
a4.l(0,o,new C.Kr(new Float32Array(n*m),n,m,1))}else if(n===A.My){n=a2.w
m=a2.x
a4.l(0,o,new C.Kv(new Uint32Array(n*m),n,m,1))}}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a2.at=o
n=q.Z()
m=$.fz()
m.$flags&2&&C.u(m)
m[0]=n
n=$.BT()
o[0]=n[0]
o=a2.at
m[0]=q.Z()
l=n[0]
o.$flags&2&&C.u(o)
o[1]=l
l=a2.at
m[0]=q.Z()
o=n[0]
l.$flags&2&&C.u(l)
l[2]=o
o=a2.at
m[0]=q.Z()
l=n[0]
o.$flags&2&&C.u(o)
o[3]=l
l=a2.at
m[0]=q.Z()
o=n[0]
l.$flags&2&&C.u(l)
l[4]=o
o=a2.at
m[0]=q.Z()
l=n[0]
o.$flags&2&&C.u(o)
o[5]=l
l=a2.at
m[0]=q.Z()
o=n[0]
l.$flags&2&&C.u(l)
l[6]=o
o=a2.at
m[0]=q.Z()
n=n[0]
o.$flags&2&&C.u(o)
o[7]=n
break
case"compression":a2.ax=A.ePy[J.A(q.a,q.d++)]
break
case"dataWindow":o=q.Z()
n=$.fz()
n.$flags&2&&C.u(n)
n[0]=o
o=$.jn()
m=o[0]
n[0]=q.Z()
l=o[0]
n[0]=q.Z()
k=o[0]
n[0]=q.Z()
o=a2.r=C.c([m,l,k,o[0]],w)
a2.w=o[2]-o[0]+1
a2.x=o[3]-o[1]+1
break
case"displayWindow":o=q.Z()
n=$.fz()
n.$flags&2&&C.u(n)
n[0]=o
$.jn()
n[0]=q.Z()
n[0]=q.Z()
n[0]=q.Z()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.Z()
n=$.fz()
n.$flags&2&&C.u(n)
n[0]=o
$.BT()
break
case"screenWindowCenter":o=q.Z()
n=$.fz()
n.$flags&2&&C.u(n)
n[0]=o
$.BT()
n[0]=q.Z()
break
case"screenWindowWidth":o=q.Z()
n=$.fz()
n.$flags&2&&C.u(n)
n[0]=o
$.BT()
break
case"tiles":a2.dx=q.Z()
a2.dy=q.Z()
j=J.A(q.a,q.d++)
a2.fr=j&15
a2.fx=D.f.R(j,4)&15
break
case"type":i=q.MZ()
if(i!=="deepscanline")if(i!=="deeptile")throw C.i(C.bH("EXR Invalid type: "+i))
break
default:break}}x=a2.w
a2.b=C.fR(a3,a3,u,0,D.bO,a2.x,a3,0,a2.d,a3,D.av,x,!1)
for(x=new C.dN(a4,a4.r,a4.e);x.q();){w=x.d
o=a2.b
o.toString
n=a4.h(0,w)
n.toString
o.aDb(w,n)}if(a2.db){x={}
w=a2.r
w===$&&C.b()
a2.id=a2.aOH(w[0],w[2],w[1],w[3])
w=a2.r
a2.k1=a2.aOI(w[0],w[2],w[1],w[3])
if(a2.fr!==2)a2.k1=1
w=a2.id
w.toString
v=a2.r
a2.fy=a2.afo(w,v[0],v[2],a2.dx,a2.fx)
v=a2.k1
v.toString
w=a2.r
a2.go=a2.afo(v,w[1],w[3],a2.dy,a2.fx)
w=a2.aOD()
a2.k2=w
v=a2.dx
v.toString
v=w*v
a2.k3=v
a2.CW=B.c9c(a2.ax,a2,v,a2.dy)
x.a=x.b=0
v=a2.id
v.toString
w=a2.k1
w.toString
a2.ay=C.zf(v*w,new B.aOE(x,a2),!0,y.R)}else{x=a2.x
w=a2.ch=new Uint32Array(x+1)
for(o=v.length,n=a2.r,m=a2.w,h=0;h<o;++h){g=v[h]
l=g.d
l===$&&C.b()
k=g.f
k===$&&C.b()
f=D.f.eD(l*m,k)
for(l=g.r,e=0;e<x;++e){n===$&&C.b()
k=n[1]
l===$&&C.b()
if(D.f.aC(e+k,l)===0)w[e]=w[e]+f}}for(d=0,e=0;e<x;++e)d=Math.max(d,w[e])
x=B.c9c(a2.ax,a2,d,a3)
a2.CW=x
x=a2.cx=x.Mx()
w=a2.ch
v=w.length
o=new Uint32Array(v)
a2.cy=o
for(--v,a0=0,a1=0;a1<=v;++a1){if(D.f.aC(a1,x)===0)a0=0
o[a1]=a0
a0+=w[a1]}x=D.f.eD(a2.x+x,x)
a2.ay=C.c([new Uint32Array(x-1)],y.w)}},
aOH(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.QE(w):u.PR(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.QE(v):u.PR(v))+1
break
default:throw C.i(C.bH("Unknown LevelMode format."))}return x},
aOI(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.QE(w):u.PR(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.QE(v):u.PR(v))+1
break
default:throw C.i(C.bH("Unknown LevelMode format."))}return x},
QE(d){var x
for(x=0;d>1;){++x
d=D.f.R(d,1)}return x},
PR(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.f.R(d,1)}return x+w},
aOD(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&C.b()
v+=t}return v},
afo(d,e,f,g,h){var x,w,v,u,t,s,r=J.iH(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.f.cN(1,v)
t=D.f.eD(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.f.eD(s+g-1,g)}return r}}
B.aeV.prototype={
bvu(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.aad()
v.$flags&2&&C.u(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.aad()
v.$flags&2&&C.u(v)
v[x]=u}}}}
B.aUl.prototype={
aLr(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.iH(t,y.bc)
for(x=0;x<t;++x)s[x]=new B.ate()
u.y=s
w=u.w
w.toString
v=D.f.av(w*u.x,2)
u.z=new Uint16Array(v)},
Mx(){return this.x},
pp(a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
if(a7==null)a7=a3.c.w
if(a8==null)a8=a3.c.cx
x=a5+a7-1
w=a6+a8-1
v=a3.c
u=v.w
if(x>u)x=u-1
u=v.x
if(w>u)w=u-1
a3.a=x-a5+1
a3.b=w-a6+1
t=v.c
s=t.length
for(r=0,q=0;q<s;++q){p=t[q]
v=a3.y
v===$&&C.b()
o=v[q]
o.b=o.a=r
v=p.f
v===$&&C.b()
n=D.f.eD(a5,v)
m=D.f.eD(x,v)
v=n*v<a5?0:1
v=m-n+v
o.c=v
u=p.r
u===$&&C.b()
n=D.f.eD(a6,u)
m=D.f.eD(w,u)
l=n*u<a6?0:1
l=m-n+l
o.d=l
o.e=u
u=p.d
u===$&&C.b()
u=u/2|0
o.f=u
r+=v*l*u}k=a4.ad()
j=a4.ad()
if(j>=8192)throw C.i(C.bH("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.fZ(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.A(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.b9P(i,d)
B.cr0(a4,a4.Z(),a3.z,r)
for(q=0;q<s;++q){v=a3.y
v===$&&C.b()
o=v[q]
f=0
for(;;){v=o.f
v===$&&C.b()
if(!(f<v))break
u=a3.z
u.toString
l=o.a
l===$&&C.b()
a1=o.c
a1===$&&C.b()
a2=o.d
a2===$&&C.b()
B.cr4(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.aNg(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=B.o5(!1,v*a3.x+73728)}v.a=0
for(;a6<=w;++a6)for(q=0;q<s;++q){v=a3.y
v===$&&C.b()
o=v[q]
v=o.e
v===$&&C.b()
if(D.f.aC(a6,v)!==0)continue
v=o.c
v===$&&C.b()
u=o.f
u===$&&C.b()
a5=v*u
for(;a5>0;--a5){v=a3.r
v.toString
u=a3.z
u.toString
l=o.b
l===$&&C.b()
o.b=l+1
v.iJ(u[l])}}v=a3.r
return J.cl(D.K.ga5(v.c),0,v.a)},
G1(d,e,f){return this.pp(d,e,f,null,null)},
aNg(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&C.u(e)
e[w]=v}},
b9P(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&C.u(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&C.u(e)
e[u]=0}return w-1}}
B.ate.prototype={}
B.aUm.prototype={
Mx(){return this.x},
pp(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=D.n9.zV(a0.eM()),d=f.y
if(d==null){d=f.w
d.toString
d=f.y=B.o5(!1,f.x*d)}d.a=0
x=C.c([0,0,0,0],y.t)
w=new Uint32Array(1)
v=J.cl(D.bK.ga5(w),0,null)
if(a3==null)a3=f.c.w
if(a4==null)a4=f.c.cx
u=a1+a3-1
t=a2+a4-1
d=f.c
s=d.w
if(u>s)u=s-1
s=d.x
if(t>s)t=s-1
f.a=u-a1+1
f.b=t-a2+1
d=d.c
r=d.length
for(q=a2,p=0;q<=t;++q)for(o=0;o<r;++o){n=d[o]
s=n.r
s===$&&C.b()
if(D.f.aC(a2,s)!==0)continue
s=n.f
s===$&&C.b()
m=D.f.eD(a1,s)
l=D.f.eD(u,s)
s=m*s<a1?0:1
k=l-m+s
w[0]=0
s=n.c
s===$&&C.b()
switch(s.a){case 0:x[0]=p
s=p+k
x[1]=s
s+=k
x[2]=s
p=s+k
for(j=0;j<k;++j){s=x[0]
x[0]=s+1
s=e[s]
i=x[1]
x[1]=i+1
i=e[i]
h=x[2]
x[2]=h+1
h=e[h]
w[0]=w[0]+((s<<24|i<<16|h<<8)>>>0)
for(g=0;g<4;++g)f.y.b_(v[g])}break
case 1:x[0]=p
s=p+k
x[1]=s
p=s+k
for(j=0;j<k;++j){s=x[0]
x[0]=s+1
s=e[s]
i=x[1]
x[1]=i+1
i=e[i]
w[0]=w[0]+((s<<8|i)>>>0)
for(g=0;g<2;++g)f.y.b_(v[g])}break
case 2:x[0]=p
s=p+k
x[1]=s
s+=k
x[2]=s
p=s+k
for(j=0;j<k;++j){s=x[0]
x[0]=s+1
s=e[s]
i=x[1]
x[1]=i+1
i=e[i]
h=x[2]
x[2]=h+1
h=e[h]
w[0]=w[0]+((s<<24|i<<16|h<<8)>>>0)
for(g=0;g<4;++g)f.y.b_(v[g])}break}}d=f.y
return J.cl(D.K.ga5(d.c),0,d.a)},
G1(d,e,f){return this.pp(d,e,f,null,null)}}
B.aUn.prototype={
Mx(){return 1},
pp(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=B.o5(!1,(h-d.d)*2)
if(a0==null)a0=i.c.w
if(a1==null)a1=i.c.cx
x=e+a0-1
w=f+a1-1
v=i.c
u=v.w
if(x>u)x=u-1
v=v.x
if(w>v)w=v-1
i.a=x-e+1
i.b=w-f+1
while(v=d.d,v<h){u=d.a
d.d=v+1
v=J.A(u,v)
u=$.lM()
u.$flags&2&&C.u(u)
u[0]=v
t=$.mB()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.b_(J.A(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.b_(J.A(d.a,d.d++))}q=J.cl(D.K.ga5(g.c),0,g.a)
p=q.length
for(h=q.$flags|0,o=1;o<p;++o){v=q[o-1]
u=q[o]
h&2&&C.u(q)
q[o]=v+u-128}h=i.r
if(h==null||h.length!==p)h=i.r=new Uint8Array(p)
v=D.f.av(p+1,2)
for(n=0,m=0;;v=j,n=k){if(m<p){l=m+1
k=n+1
u=q[n]
h.$flags&2&&C.u(h)
h[m]=u}else break
if(l<p){m=l+1
j=v+1
h[l]=q[v]}else break}return h},
G1(d,e,f){return this.pp(d,e,f,null,null)},
j(d){return C.r(this.w)}}
B.aeW.prototype={
Mx(){return this.x},
pp(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=D.n9.zV(d.eM())
if(g==null)g=l.c.w
if(h==null)h=l.c.cx
x=e+g-1
w=f+h-1
v=l.c
u=v.w
if(x>u)x=u-1
v=v.x
if(w>v)w=v-1
l.a=x-e+1
l.b=w-f+1
t=k.length
for(v=k.$flags|0,s=1;s<t;++s){u=k[s-1]
r=k[s]
v&2&&C.u(k)
k[s]=u+r-128}v=l.y
if(v==null||v.length!==t)v=l.y=new Uint8Array(t)
u=D.f.av(t+1,2)
for(q=0,p=0;;u=m,q=n){if(p<t){o=p+1
n=q+1
r=k[q]
v.$flags&2&&C.u(v)
v[p]=r}else break
if(o<t){p=o+1
m=u+1
v[o]=k[u]}else break}return v},
G1(d,e,f){return this.pp(d,e,f,null,null)},
j(d){return C.r(this.w)}}
B.aOD.prototype={
iM(d){var x=new B.ad7(C.c([],y.m))
x.ae9(d)
return this.a=x},
i2(d){var x=this.a
if(x==null)return null
return x.c[d].b},
mm(d,e){this.a=B.cr2(d)
return this.i2(0)}}
B.Uw.prototype={
bns(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.b,w=this.d,v=-1,u=-1,t=0;t<x;++t){s=w.kN(t)
r=w.kM(t)
q=w.kL(t)
p=w.m0(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
abM(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new C.qF(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.kN(u)
s=x.kM(u)
r=x.kL(u)
v.OS(u,t,s,r,u===q.c?0:255)}return v}}
B.Ux.prototype={
aLa(d){var x,w,v,u,t,s,r=this
r.a=d.ad()
r.b=d.ad()
r.c=d.ad()
r.d=d.ad()
x=d.bw()
r.e=(x&64)!==0
if((x&128)!==0){r.f=B.c9G(D.f.cN(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.A(d.a,d.d++)
t=J.A(d.a,d.d++)
s=J.A(d.a,d.d++)
v.d.n_(w,u,t,s)}}r.x=d.d-d.b}}
B.aeX.prototype={}
B.adQ.prototype={
gbJ(){return this.a},
gaO(){return this.b}}
B.aRA.prototype={
iM(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.f=C.cd(d,!1,null,0)
n.a=new B.adQ(C.c([],y.b))
if(!n.aiH())return null
try{while(u=n.f,t=u.d,t<u.c){s=u.a
u.d=t+1
x=J.A(s,t)
switch(x){case 44:w=n.aoC()
if(w==null){u=n.a
return u}u=w
u.r=n.e
u.w=n.c
if(n.b!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new B.Uw(t,s,r,new C.qF(new Uint8Array(C.b5(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.d}n.a.r.push(w)
break
case 33:u=n.f
v=J.A(u.a,u.d++)
if(J.o(v,255)){u=n.f
if(u.hh(J.A(u.a,u.d++))==="NETSCAPE2.0"){q=J.A(u.a,u.d++)
p=J.A(u.a,u.d++)
if(q===3&&p===1)n.r=u.ad()}else n.SS()}else if(J.o(v,249)){u=n.f
u.toString
n.b8o(u)}else n.SS()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
b8o(d){var x,w,v,u=this
d.bw()
x=d.bw()
u.e=d.ad()
u.d=d.bw()
d.bw()
u.c=D.f.R(x,2)&7
u.b=x&1
w=d.Pa(1,0)
if(J.A(w.a,w.d)===44){++d.d
v=u.aoC()
if(v==null)return
v.r=u.e
v.w=u.c
if(u.b!==0){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=B.crP(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
i2(d){var x,w,v,u=this,t=u.f
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
x=v.x
x===$&&C.b()
t.d=x
return u.aRu(v)},
mm(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.iM(a7)==null)return a6
x=a5.a.r.length
if(x===1)return a5.i2(0)
for(x=y.p,w=a6,v=w,u=0;t=a5.a.r,u<t.length;++u){a8=t[u]
s=a5.i2(u)
if(s==null)return a6
s.y=a8.r*10
if(v==null||w==null){s.r=a5.r
w=s
v=w
continue}t=s.a
r=t==null
q=r?a6:t.a
if(q==null)q=0
p=w.a
o=p==null
n=o?a6:p.a
m=!1
if(q===(n==null?0:n)){t=r?a6:t.b
if(t==null)t=0
r=o?a6:p.b
if(t===(r==null?0:r)){t=a8.a
t===$&&C.b()
if(t===0){t=a8.b
t===$&&C.b()
t=t===0&&a8.w===2}else t=m}else t=m}else t=m
if(t){v.l4(s)
w=s
continue}l=a8.f
if(!(l!=null)){t=a5.a.e
t.toString
l=t}t=o?a6:p.a
if(t==null)t=0
r=o?a6:p.b
if(r==null)r=0
k=C.fR(a6,a6,D.av,0,D.bO,r,a6,0,1,l.abM(),D.av,t,!1)
t=a8.w
if(t===2){t=a5.a.c.a
t=!D.K.gU(t)?t[0]:0
r=l.d
j=r.kN(t)
i=r.kM(t)
h=r.kL(t)
g=t===l.c?0:255
t=new Uint8Array(4)
t[0]=j
t[1]=i
t[2]=h
t[3]=g
r=k.a
if(r!=null)r.l9(0,new C.uR(t))}else if(t!==3)if(a8.f!=null){t=w.a
t=t==null?a6:t.gd8()
t.toString
f=C.D(x,x)
for(r=l.b,e=0;e<r;++e)f.l(0,e,l.bns(t.kN(e),t.kM(e),t.kL(e),t.m0(e)))
t=k.a
d=t==null?a6:J.fA(t.ga5(t))
if(d==null){t=k.a
t=t==null?a6:t.ga5(t)
if(t==null)t=D.K.ga5(new Uint8Array(0))
d=J.fA(t)}t=w.a
a0=t==null?a6:J.fA(t.ga5(t))
if(a0==null){t=w.a
t=t==null?a6:t.ga5(t)
if(t==null)t=D.K.ga5(new Uint8Array(0))
a0=J.fA(t)}for(a1=d.length,t=d.$flags|0,a2=0;a2<a1;++a2){a3=f.h(0,a0[a2])
if(a3!==-1){a3.toString
t&2&&C.u(d)
d[a2]=a3}}}k.y=s.y
for(t=s.a,t=t.gT(t);t.q();){a4=t.gJ()
if(a4.gan()!==0){r=a4.gj5()
q=a8.a
q===$&&C.b()
p=a4.gjn()
o=a8.b
o===$&&C.b()
k.ya(r+q,p+o,a4)}}v.l4(k)
w=k}return v},
aoC(){var x,w=this.f
if(w.d>=w.c)return null
x=new B.aeX()
x.aLa(w);++this.f.d
this.SS()
return x},
aRu(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.w==null){n.w=new Uint8Array(256)
n.x=new Uint8Array(4095)
n.y=new Uint8Array(4096)
n.z=new Uint32Array(4096)}x=n.Q=n.f.bw()
w=D.f.cE(1,x)
n.dy=w;++w
n.dx=w
n.db=w+1;++x
n.cy=x
n.cx=D.f.cE(1,x)
n.ay=0
n.CW=4098
n.at=n.ax=0
x=n.w
x.toString
x.$flags&2&&C.u(x)
x[0]=0
x=n.z
x.toString
D.bK.fu(x,0,4096,4098)
x=d.c
x===$&&C.b()
w=d.d
w===$&&C.b()
v=d.a
v===$&&C.b()
u=n.a
if(v+x<=u.a){v=d.b
v===$&&C.b()
v=v+w>u.b}else v=!0
if(v)return m
t=d.f
if(!(t!=null)){v=u.e
v.toString
t=v}n.as=x*w
s=C.fR(m,m,D.av,0,D.bO,w,m,0,1,t.abM(),D.av,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&C.b()
if(x){x=d.b
x===$&&C.b()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+A.e3C[q];o<w;o+=A.eIV[q],++p){if(!n.aiI(r))return s
n.aqe(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.aiI(r))return s
n.aqe(s,o,t,r)}return s},
aqe(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.dB(x,e,w,0,0)}},
aiH(){var x,w,v,u,t,s=this,r=s.f.hh(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.f.ad()
x=s.a
x.toString
x.b=s.f.ad()
w=s.f.bw()
x=s.a
x.toString
x.c=new C.uR(new Uint8Array(C.b5(C.c([s.f.bw()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=B.c9G(D.f.cN(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
u=J.A(x.a,x.d++)
x=s.f
t=J.A(x.a,x.d++)
x=s.f
w=J.A(x.a,x.d++)
s.a.e.d.n_(v,u,t,w)}}s.a.toString
return!0},
aiI(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.aRH(d))return!1
if(x.as===0)x.SS()
return!0},
SS(){var x,w,v,u=this.f
if(u.d>=u.c)return!0
x=u.bw()
for(;;){if(x!==0){u=this.f
u=u.d<u.c}else u=!1
if(!u)break
u=this.f
w=u.d+=x
if(w>=u.c)return!0
v=u.a
u.d=w+1
x=J.A(v,w)}return!0},
aRH(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ay
if(k>4095)return!1
x=d.length
w=0
if(k!==0){v=d.$flags|0
for(;;){if(!(k!==0&&w<x))break
u=w+1
t=l.x
t===$&&C.b()
k=l.ay=k-1
t=t[k]
v&2&&C.u(d)
d[w]=t
w=u}}for(k=d.$flags|0;w<x;){s=l.ch=l.aRG()
if(s==null)return!1
v=l.dx
if(s===v)return!1
t=l.dy
if(s===t){for(t=l.z,r=0;r<=4095;++r){t.toString
t.$flags&2&&C.u(t)
t[r]=4098}l.db=v+1
v=l.Q+1
l.cy=v
l.cx=D.f.cE(1,v)
l.CW=4098}else{if(s<t){u=w+1
k&2&&C.u(d)
d[w]=s
w=u}else{v=l.z
if(v[s]===4098){q=l.db-2
if(s===q){s=l.CW
p=l.y
p===$&&C.b()
o=l.x
o===$&&C.b()
n=l.ay++
t=l.a1X(v,s,t)
o.$flags&2&&C.u(o)
o[n]=t
p.$flags&2&&C.u(p)
p[q]=t}else return!1}r=0
for(;;){m=r+1
if(!(r<=4095&&s>l.dy&&s<=4095))break
v=l.x
v===$&&C.b()
t=l.ay++
q=l.y
q===$&&C.b()
q=q[s]
v.$flags&2&&C.u(v)
v[t]=q
s=l.z[s]
r=m}if(m>=4095||s>4095)return!1
v=l.x
v===$&&C.b()
t=l.ay
q=l.ay=t+1
v.$flags&2&&C.u(v)
v[t]=s
t=q
for(;;){if(!(t!==0&&w<x))break
u=w+1
t=l.ay=t-1
q=v[t]
k&2&&C.u(d)
d[w]=q
w=u}}v=l.CW
if(v!==4098&&l.z[l.db-2]===4098){t=l.z
t.toString
q=l.db-2
t.$flags&2&&C.u(t)
t[q]=v
p=l.ch
o=l.y
n=l.dy
if(p===q){o===$&&C.b()
v=l.a1X(t,v,n)
o.$flags&2&&C.u(o)
o[q]=v}else{o===$&&C.b()
p.toString
v=l.a1X(t,p,n)
o.$flags&2&&C.u(o)
o[q]=v}}v=l.ch
v.toString
l.CW=v}}return!0},
aRG(){var x,w,v,u,t=this
if(t.cy>12)return null
while(x=t.ax,w=t.cy,x<w){x=t.aNO()
x.toString
w=t.at
v=t.ax
t.at=(w|D.f.cE(x,v))>>>0
t.ax=v+8}v=t.at
u=A.eMo[w]
t.at=D.f.eb(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
a1X(d,e,f){var x,w,v=0
for(;;){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
aNO(){var x,w,v=this,u=v.w,t=u[0],s=u.$flags|0
if(t===0){t=v.f.bw()
s&2&&C.u(u)
u[0]=t
u=v.w
t=u[0]
if(t===0)return null
D.K.dC(u,1,1+t,v.f.fZ(t).eM())
u=v.w
x=u[1]
u.$flags&2&&C.u(u)
u[1]=2
u[0]=u[0]-1}else{w=u[1]
s&2&&C.u(u)
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
B.Km.prototype={
H(){return"IcoType."+this.b}}
B.aTx.prototype={
gbJ(){return 0},
gaO(){return 0}}
B.aez.prototype={}
B.aTv.prototype={
gaO(){return D.f.av(B.Ci.prototype.gaO.call(this),2)},
gLO(){return!(this.d===40&&this.f===32)&&B.Ci.prototype.gLO.call(this)}}
B.aTw.prototype={
iM(d){var x=C.cd(d,!1,null,0)
this.a=x
return this.b=B.c9X(x)},
mm(d,e){var x,w,v,u=this
if(u.iM(d)==null)return null
x=u.b.e.length
if(x===1)return u.i2(0)
for(w=null,v=0;v<u.b.e.length;++v){e=u.i2(v)
if(e==null)continue
if(w==null){e.w=D.bO
w=e}else w.l4(e)}return w},
i2(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=this.a
if(a7!=null){x=this.b
x=x==null||a8>=x.d}else x=!0
if(x)return a6
w=this.b.e[a8]
x=a7.a
a7=a7.b+w.e
v=w.d
u=J.I8(x,a7,a7+v)
t=new C.X4(C.c1e())
y.D.a(u)
if(t.F3(u))return t.bP(u)
s=B.o5(!1,14)
s.iJ(19778)
s.h3(v)
s.h3(0)
s.h3(0)
a7=C.cd(u,!1,a6,0)
x=B.c7K(C.cd(J.cl(D.K.ga5(s.c),0,s.a),!1,a6,0))
v=a7.d
r=a7.Z()
q=a7.Z()
p=$.fz()
p.$flags&2&&C.u(p)
p[0]=q
q=$.jn()
o=q[0]
p[0]=a7.Z()
q=q[0]
n=a7.ad()
m=a7.ad()
l=A.Ur[a7.Z()]
a7.Z()
p[0]=a7.Z()
p[0]=a7.Z()
p=a7.Z()
a7.Z()
k=new B.aTv(x,o,q,r,n,m,l,p,v)
k.ae6(a7,x)
if(r!==40&&n!==1)return a6
j=p===0&&m<=8?40+4*D.f.cN(1,m):40+4*p
x.b=j
s.a-=4
s.h3(j)
i=C.cd(u,!1,a6,0)
h=new B.aKm(!0)
h.a=i
h.b=k
g=h.i2(0)
if(m>=32)return g
f=32-D.f.aC(o,32)
e=D.f.av(f===32?o:o+f,8)
for(a7=q<0,x=q===0,q=1/q<0,d=0;d<D.f.av(B.Ci.prototype.gaO.call(k),2);++d){if(!(x?q:a7))a0=d
else{v=g.a
v=v==null?a6:v.b
a0=(v==null?0:v)-1-d}a1=i.hB(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a6:v.cD(0,a0,a6)
if(a2==null)a2=new C.eo()
for(a3=0;a3<o;){a4=J.A(a1.a,a1.d++)
a5=7
for(;;){if(!(a5>-1&&a3<o))break
if((a4&D.f.cE(1,a5))>>>0!==0)a2.san(0)
a2.q();++a3;--a5}}}return g}}
B.abm.prototype={}
B.DG.prototype={}
B.DH.prototype={}
B.UL.prototype={}
B.aUD.prototype={}
B.z8.prototype={}
B.aUF.prototype={
aA1(d){var x,w,v,u,t,s=this,r=C.cd(d,!0,null,0)
s.a=r
x=r.Pa(2,0)
if(J.A(x.a,x.d)!==255||J.A(x.a,x.d+1)!==216)return!1
if(s.tD()!==216)return!1
w=s.tD()
v=!1
u=!1
for(;;){if(w!==217){r=s.a
r=r.d<r.c}else r=!1
if(!r)break
t=s.a.ad()
if(t<2)break
r=s.a
r.d=r.d+(t-2)
switch(w){case 192:case 193:case 194:v=!0
break
case 218:u=!0
break}w=s.tD()}return v&&u},
bvr(d){var x,w,v,u,t,s,r=this
r.a=C.cd(d,!0,null,0)
if(r.tD()!==216)return null
x=new B.aUJ()
w=r.tD()
v=!1
u=!1
for(;;){if(w!==217){t=r.a
t=t.d<t.c}else t=!1
if(!t)break
switch(w){case 192:case 193:case 194:r.amv(w,r.amr())
v=!0
break
case 218:r.aoB()
u=!0
break
default:r.aoB()
break}w=r.tD()}t=r.d
if(t!=null){s=t.e
s.toString
x.a=s
t=t.d
t.toString
x.b=t}t=r.d=null
D.i.a0(r.x)
return v&&u?x:t},
hT(d){var x,w,v,u,t,s,r,q,p=this
p.a=C.cd(d,!0,null,0)
p.b8h()
if(p.x.length!==1)throw C.i(C.bH("Only single frame JPEGs supported"))
for(x=p.Q,w=0;v=p.d,u=v.z,w<u.length;++w){t=v.y.h(0,u[w])
v=t.a
u=p.d
s=u.f
r=t.b
q=u.r
u=p.aNW(u,t)
v=v===1&&s===2?1:0
x.push(new B.abm(u,v,r===1&&q===2?1:0))}},
b8h(){var x,w,v,u,t=this
if(t.tD()!==216)throw C.i(C.bH("Start Of Image marker not found."))
x=t.tD()
for(;;){if(x!==217){w=t.a
w===$&&C.b()
w=w.d<w.c}else w=!1
if(!w)break
v=t.amr()
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:t.b8i(x,v)
break
case 219:t.b8m(v)
break
case 192:case 193:case 194:t.amv(x,v)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw C.i(C.bH("Unhandled frame type "+D.f.hw(x,16)))
case 196:t.b8l(v)
break
case 221:t.e=v.ad()
break
case 218:t.b8z(v)
break
case 255:w=t.a
w===$&&C.b()
if(J.A(w.a,w.d)!==255)--t.a.d
break
default:w=t.a
w===$&&C.b()
u=!1
if(J.A(w.a,w.d+-3)===255){w=t.a
if(J.A(w.a,w.d+-2)>=192){w=t.a
w=J.A(w.a,w.d+-2)<=254}else w=u}else w=u
if(w){t.a.d-=3
break}if(x!==0)throw C.i(C.bH("Unknown JPEG marker "+D.f.hw(x,16)))
break}x=t.tD()}},
aoB(){var x,w=this.a
w===$&&C.b()
x=w.ad()
if(x<2)throw C.i(C.bH("Invalid Block"))
w=this.a
w.d=w.d+(x-2)},
amr(){var x,w=this.a
w===$&&C.b()
x=w.ad()
if(x<2)throw C.i(C.bH("Invalid Block"))
return this.a.fZ(x-2)},
tD(){var x,w=this,v=w.a
v===$&&C.b()
if(v.d>=v.c)return 0
do{do{x=w.a.bw()
if(x!==255){v=w.a
v=v.d<v.c}else v=!1}while(v)
v=w.a
if(v.d>=v.c)return x
do{x=w.a.bw()
if(x===255){v=w.a
v=v.d<v.c}else v=!1}while(v)
if(x===0){v=w.a
v=v.d<v.c}else v=!1}while(v)
return x},
b8n(d){if(d.Z()!==1165519206)return
if(d.ad()!==0)return
this.r.hT(d)},
b8i(d,e){var x,w,v,u,t=this,s=e
if(d===224){x=s
w=!1
if(J.A(x.a,x.d)===74){x=s
if(J.A(x.a,x.d+1)===70){x=s
if(J.A(x.a,x.d+2)===73){x=s
if(J.A(x.a,x.d+3)===70){x=s
x=J.A(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new B.aUK()
w=s
J.A(w.a,w.d+5)
w=s
J.A(w.a,w.d+6)
w=s
J.A(w.a,w.d+7)
w=s
J.A(w.a,w.d+8)
w=s
J.A(w.a,w.d+9)
w=s
J.A(w.a,w.d+10)
w=s
J.A(w.a,w.d+11)
w=s
w=J.A(w.a,w.d+12)
x.f=w
v=s
v=J.A(v.a,v.d+13)
x.r=v
t.b=x
s.Pa(14+3*w*v,14)}}else if(d===225)t.b8n(s)
else if(d===238){x=s
w=!1
if(J.A(x.a,x.d)===65){x=s
if(J.A(x.a,x.d+1)===100){x=s
if(J.A(x.a,x.d+2)===111){x=s
if(J.A(x.a,x.d+3)===98){x=s
if(J.A(x.a,x.d+4)===101){x=s
x=J.A(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){t.c=new B.aUD()
x=s
J.A(x.a,x.d+6)
t.c.toString
x=s
J.A(x.a,x.d+7)
x=s
J.A(x.a,x.d+8)
t.c.toString
x=s
J.A(x.a,x.d+9)
x=s
J.A(x.a,x.d+10)
x=t.c
x.toString
w=s
x.d=J.A(w.a,w.d+11)}}else if(d===254)try{s.bvy()}catch(u){C.aE(u)}},
b8m(d){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=this.w;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
t=J.A(u,v)
s=D.f.R(t,4)
t&=15
if(t>=4)throw C.i(C.bH("Invalid number of quantization tables"))
v=w[t]
if(v==null){v=new Int16Array(64)
w[t]=v}for(u=s!==0,r=0;r<64;++r){q=u?d.ad():J.A(d.a,d.d++)
p=A.x5[r]
v.$flags&2&&C.u(v)
v[p]=q}}if(u)throw C.i(C.bH("Bad length for DQT block"))},
amv(d,e){var x,w,v,u,t,s,r,q=this
if(q.d!=null)throw C.i(C.bH("Duplicate JPG frame data found."))
x=q.d=new B.aff(C.D(y.p,y.c),C.c([],y.t))
x.b=d===194
x.c=e.bw()
x=q.d
x.toString
x.d=e.ad()
x=q.d
x.toString
x.e=e.ad()
w=e.bw()
for(x=q.w,v=0;v<w;++v){u=J.A(e.a,e.d++)
t=J.A(e.a,e.d++)
s=D.f.R(t,4)
r=J.A(e.a,e.d++)
q.d.z.push(u)
q.d.y.l(0,u,new B.z8(s&15,t&15,x,r))}q.d.lX()
q.x.push(q.d)},
b8l(d){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=this.z,v=this.y;u=d.d,u<x;){t=d.a
d.d=u+1
s=J.A(t,u)
r=new Uint8Array(16)
for(q=0,p=0;p<16;++p){r[p]=J.A(d.a,d.d++)
q+=r[p]}o=d.hB(q)
d.d=d.d+(o.c-o.d)
n=o.eM()
if((s&16)!==0){s-=16
m=v}else m=w
if(m.length<=s)D.i.su(m,s+1)
m[s]=this.aO2(r,n)}},
b8z(d){var x,w,v,u,t,s,r,q=this,p=d.bw()
if(p<1||p>4)throw C.i(C.bH("Invalid SOS block"))
x=C.zf(p,new B.aUH(q,d),!0,y.c)
w=d.bw()
v=d.bw()
u=d.bw()
t=D.f.R(u,4)
s=q.a
s===$&&C.b()
r=q.d
t=new B.afg(s,r,x,q.e,w,v,t&15,u&15)
s=r.w
s===$&&C.b()
t.f=s
t.r=r.b
t.oK()},
aO2(d,e){var x,w,v,u,t,s,r,q,p,o,n=C.c([],y.G),m=16
for(;;){if(!(m>0&&d[m-1]===0))break;--m}x=y.T
n.push(new B.P4(C.c([],x)))
w=n[0]
for(v=0,u=0;u<m;){for(t=0;t<d[u];++t){w=n.pop()
s=w.a
r=s.length
q=w.b
if(r<=q)D.i.su(s,q+1)
s[w.b]=new B.UL(e[v])
while(s=w.b,s>0)w=n.pop()
w.b=s+1
n.push(w)
for(;n.length<=u;w=p){s=C.c([],x)
p=new B.P4(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.i.su(r,o+1)
r[w.b]=new B.DH(s)}++v}++u
if(u<m){s=C.c([],x)
p=new B.P4(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.i.su(r,o+1)
r[w.b]=new B.DH(s)
w=p}}return n[0].a},
aNW(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.e
d===$&&C.b()
x=a1.f
x===$&&C.b()
w=d<<3>>>0
v=new Int32Array(64)
u=new Uint8Array(64)
t=C.bm(x*8,null,!1,y.ac)
for(s=a1.c,r=a1.d,q=0,p=0;p<x;++p){o=p<<3>>>0
for(n=0;n<8;++n,q=m){m=q+1
t[q]=new Uint8Array(w)}for(l=0;l<d;++l){k=s[r]
k.toString
j=a1.r
j===$&&C.b()
B.cHH(k,j[p][l],u,v)
i=l<<3>>>0
for(h=0,g=0;g<8;++g){f=t[o+g]
for(n=0;n<8;++n,h=e){f.toString
e=h+1
k=u[h]
f.$flags&2&&C.u(f)
f[i+n]=k}}}}return t}}
B.P4.prototype={}
B.aff.prototype={
lX(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=new C.dN(x,x.r,x.e);w.q();){v=x.h(0,w.d)
g.f=Math.max(g.f,v.a)
g.r=Math.max(g.r,v.b)}w=g.e
w.toString
g.w=D.m.dZ(w/8/g.f)
w=g.d
w.toString
g.x=D.m.dZ(w/8/g.r)
for(w=new C.dN(x,x.r,x.e),u=y.k,t=y.H;w.q();){s=x.h(0,w.d)
s.toString
r=g.e
r.toString
q=s.a
p=D.m.dZ(D.m.dZ(r/8)*q/g.f)
r=g.d
r.toString
o=s.b
n=D.m.dZ(D.m.dZ(r/8)*o/g.r)
m=g.w*q
l=g.x*o
k=J.iH(l,t)
for(j=0;j<l;++j){i=J.iH(m,u)
for(h=0;h<m;++h)i[h]=new Int32Array(64)
k[j]=i}s.e=p
s.f=n
s.r=k}}}
B.aUJ.prototype={
gbJ(){return this.a},
gaO(){return this.b}}
B.aUK.prototype={}
B.afg.prototype={
oK(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.y,f=g.length,e=h.r
e.toString
if(e)if(h.Q===0)x=h.at===0?h.gaRo():h.gaRq()
else x=h.at===0?h.gaRf():h.gaRh()
else x=h.gaRl()
e=f===1
if(e){w=g[0]
v=w.e
v===$&&C.b()
w=w.f
w===$&&C.b()
u=v*w}else{w=h.f
w===$&&C.b()
v=h.b.x
v===$&&C.b()
u=w*v}w=h.z
if(w==null||w===0)h.z=u
for(w=h.a,t=0;t<u;){for(s=0;s<f;++s)g[s].y=0
h.CW=0
if(e){r=g[0]
q=0
for(;;){v=h.z
v.toString
if(!(q<v))break
v=r.e
v===$&&C.b()
p=D.f.eD(t,v)
o=D.f.aC(t,v)
v=r.r
v===$&&C.b()
x.$2(r,v[p][o]);++t;++q}}else{q=0
for(;;){v=h.z
v.toString
if(!(q<v))break
for(s=0;s<f;++s){r=g[s]
n=r.a
m=r.b
for(l=0;l<m;++l)for(k=0;k<n;++k)h.aRv(r,x,t,l,k)}++t;++q}}h.ch=0
j=J.A(w.a,w.d)
i=J.A(w.a,w.d+1)
if(j===255)if(i>=208&&i<=215)w.d+=2
else break}},
zb(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.f.j7(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.bw()
w.ay=x
if(x===255)if(v.bw()!==0)return null
w.ch=7
return D.f.R(w.ay,7)&1},
Iw(d){var x,w=new B.DH(d)
while(x=this.zb(),x!=null){if(w instanceof B.DH)w=w.a[x]
if(w instanceof B.UL)return w.a}return null},
a3U(d){var x,w
for(x=0;d>0;){w=this.zb()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
J9(d){var x
if(d==null)return 0
if(d===1)return this.zb()===1?1:-1
x=this.a3U(d)
if(x==null)return 0
if(x>=D.f.cE(1,d-1))return x
return x+D.f.cN(-1,d)+1},
aRm(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&C.b()
x=r.Iw(q)
w=x===0?0:r.J9(x)
q=d.y
q===$&&C.b()
q+=w
d.y=q
e.$flags&2&&C.u(e)
e[0]=q
for(v=1;v<64;){q=d.x
q===$&&C.b()
u=r.Iw(q)
if(u==null)break
t=u&15
s=u>>>4
if(t===0){if(s<15)break
v+=16
continue}v+=s
t=r.J9(t)
e[A.x5[v]]=t;++v}},
aRp(d,e){var x,w,v=d.w
v===$&&C.b()
x=this.Iw(v)
w=x===0?0:D.f.cN(this.J9(x),this.ax)
v=d.y
v===$&&C.b()
v+=w
d.y=v
e.$flags&2&&C.u(e)
e[0]=v},
aRr(d,e){var x=e[0],w=this.zb()
w.toString
w=D.f.cN(w,this.ax)
e.$flags&2&&C.u(e)
e[0]=(x|w)>>>0},
aRg(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.CW
if(o>0){p.CW=o-1
return}x=p.Q
w=p.as
for(o=p.ax,v=e.$flags|0;x<=w;){u=d.x
u===$&&C.b()
u=p.Iw(u)
u.toString
t=u&15
s=u>>>4
if(t===0){if(s<15){o=p.a3U(s)
o.toString
p.CW=o+D.f.cN(1,s)-1
break}x+=16
continue}x+=s
r=A.x5[x]
u=p.J9(t)
q=D.f.cN(1,o)
v&2&&C.u(e)
e[r]=u*q;++x}},
aRi(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.Q,n=p.as
A:for(x=p.ax,w=e.$flags|0,v=0;o<=n;){u=A.x5[o]
t=p.cx
switch(t){case 0:t=d.x
t===$&&C.b()
s=p.Iw(t)
if(s==null)throw C.i(C.bH("Invalid progressive encoding"))
r=s&15
v=s>>>4
if(r===0)if(v<15){t=p.a3U(v)
t.toString
p.CW=t+D.f.cN(1,v)
p.cx=4}else{p.cx=1
v=16}else{if(r!==1)throw C.i(C.bH("invalid ACn encoding"))
p.cy=p.J9(r)
p.cx=v!==0?2:3}continue A
case 1:case 2:q=e[u]
if(q!==0){t=p.zb()
t.toString
t=D.f.cN(t,x)
w&2&&C.u(e)
e[u]=q+t}else{--v
if(v===0)p.cx=t===2?3:0}break
case 3:t=e[u]
if(t!==0){q=p.zb()
q.toString
q=D.f.cN(q,x)
w&2&&C.u(e)
e[u]=t+q}else{t=p.cy
t===$&&C.b()
t=D.f.cN(t,x)
w&2&&C.u(e)
e[u]=t
p.cx=0}break
case 4:t=e[u]
if(t!==0){q=p.zb()
q.toString
q=D.f.cN(q,x)
w&2&&C.u(e)
e[u]=t+q}break}++o}if(p.cx===4)if(--p.CW===0)p.cx=0},
aRv(d,e,f,g,h){var x,w,v=this.f
v===$&&C.b()
x=D.f.eD(f,v)*d.b+g
w=D.f.aC(f,v)*d.a+h
v=d.r
v===$&&C.b()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
B.Vg.prototype={
iM(d){C.cd(d,!0,null,0)
return B.aUG().bvr(d)},
mm(d,e){var x=B.aUG()
x.hT(d)
if(x.x.length!==1)throw C.i(C.bH("only single frame JPEGs supported"))
return B.cGu(x)},
bP(d){return this.mm(d,null)}}
B.zE.prototype={
H(){return"PnmFormat."+this.b}}
B.EX.prototype={
gbJ(){return this.a},
gaO(){return this.b}}
B.b1j.prototype={
F3(d){var x
this.b=C.cd(d,!1,null,0)
x=this.QW()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
mm(d,e){if(this.iM(d)==null)return null
return this.i2(0)},
iM(d){var x,w,v=this
v.b=C.cd(d,!1,null,0)
x=v.QW()
if(x==="P1"){w=v.a=new B.EX(A.rM)
w.e=A.a3w}else if(x==="P2"){w=v.a=new B.EX(A.rM)
w.e=A.a3x}else if(x==="P5"){w=v.a=new B.EX(A.rM)
w.e=A.ED}else if(x==="P3"){w=v.a=new B.EX(A.rM)
w.e=A.a3y}else if(x==="P6"){w=v.a=new B.EX(A.rM)
w.e=A.EE}else return v.b=null
w.a=v.IW()
w=v.a
w.toString
w.b=v.IW()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
i2(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===A.a3w){x=q.a
w=C.fR(r,r,D.eG,0,D.bO,q.b,r,0,1,r,D.av,x,!1)
for(q=w.a,q=q.gT(q);q.q();){v=q.gJ()
if(s.QW()==="1")v.it(1,1,1)
else v.it(0,0,0)}return w}else if(x===A.a3x||x===A.ED){u=s.IW()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=C.fR(r,r,s.avi(u),0,D.bO,q,r,0,1,r,D.av,x,!1)
for(q=w.a,q=q.gT(q);q.q();){v=q.gJ()
t=s.Sg(s.a.e,u)
v.it(t,t,t)}return w}else if(x===A.a3y||x===A.EE){u=s.IW()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=C.fR(r,r,s.avi(u),0,D.bO,q,r,0,3,r,D.av,x,!1)
for(q=w.a,q=q.gT(q);q.q();)q.gJ().it(s.Sg(s.a.e,u),s.Sg(s.a.e,u),s.Sg(s.a.e,u))
return w}return r},
avi(d){if(d>255)return D.cN
if(d>15)return D.av
if(d>3)return D.kz
if(d>1)return D.ky
return D.eG},
Sg(d,e){if(d===A.ED||d===A.EE)return this.b.bw()
return this.IW()},
IW(){var x,w,v=this.QW()
if(J.aY(v)===0)return 0
try{x=C.fy(v,null)
return x}catch(w){return 0}},
QW(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.i.eg(x,0)
w=D.o.aK(t.bvx())
if(w.length===0)return""
while(D.o.bf(w,"#"))w=D.o.aK(this.b.ayC(70))
t=y.U
v=C.J(new C.al(C.c(w.split(" "),y.s),new B.b1k(),t),t.i("z.E"))
for(t=v.length,u=0;u<t;++u)if(D.o.bf(v[u],"#")){D.i.su(v,u)
break}D.i.L(x,v)
if(x.length===0)return""
return D.i.eg(x,0)}}
B.ahX.prototype={}
B.ahY.prototype={}
B.tP.prototype={}
B.ai_.prototype={}
B.ai0.prototype={}
B.ai3.prototype={}
B.ai4.prototype={}
B.Xo.prototype={}
B.ai2.prototype={}
B.b30.prototype={
aLC(d){var x,w,v,u,t=this
d.ad()
d.ad()
d.ad()
d.ad()
x=D.f.av(d.c-d.d,8)
if(x>0){t.e=new Uint16Array(x)
t.f=new Uint16Array(x)
t.r=new Uint16Array(x)
t.w=new Uint16Array(x)
for(w=0;w<x;++w){v=t.e
u=d.ad()
v.$flags&2&&C.u(v)
v[w]=u
u=t.f
v=d.ad()
u.$flags&2&&C.u(u)
u[w]=v
v=t.r
u=d.ad()
v.$flags&2&&C.u(v)
v[w]=u
u=t.w
v=d.ad()
u.$flags&2&&C.u(u)
u[w]=v}}}}
B.LZ.prototype={
ayy(d,e,f,g,h,i,j){if(d.c-d.d<2)return
if(h==null)h=d.ad()
switch(h){case 0:g.toString
this.b8y(d,e,f,g)
break
case 1:if(i==null)i=this.b8v(d,f)
g.toString
this.b8x(d,e,f,g,i,j)
break
default:throw C.i(C.bH("Unsupported compression: "+h))}},
bvw(d,e,f,g){return this.ayy(d,e,f,g,null,null,0)},
b8v(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.ad()
return w},
b8y(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.K.fu(x,0,w,255)
return}this.c=d.fZ(w).eM()},
b8x(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.K.fu(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.hB(h[w])
d.d=d.d+(s.c-s.d)
x=this.c
x.toString
this.aRA(s,x,v)
v+=e}},
aRA(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.A(t,u)
t=$.lM()
t.$flags&2&&C.u(t)
t[0]=u
s=$.mB()[0]
if(s<0){s=1-s
u=d.d
if(u>=x)break
t=d.a
d.d=u+1
r=J.A(t,u)
if(f+s>v)s=v-f
for(q=0;q<s;++q,f=p){p=f+1
w&2&&C.u(e)
e[f]=r}}else{++s
if(f+s>v)s=v-f
s=Math.min(s,x-d.d)
for(q=0;q<s;++q,f=p){p=f+1
u=J.A(d.a,d.d++)
w&2&&C.u(e)
e[f]=u}}}},
gbS(){return this.a}}
B.qQ.prototype={
H(){return"PsdColorMode."+this.b}}
B.b32.prototype={
aLD(d){var x,w,v=this
v.as=C.cd(d,!0,null,0)
v.b7Z()
if(v.c!==943870035)return
x=v.as.Z()
v.as.fZ(x)
x=v.as.Z()
v.at=v.as.fZ(x)
x=v.as.Z()
v.ax=v.as.fZ(x)
w=v.as
v.ay=w.fZ(w.c-w.d)},
oK(){var x,w=this
if(w.c===943870035){x=w.as
x===$&&C.b()
x=x==null}else x=!0
if(x)return!1
w.b8t()
w.b8u()
w.b8w()
w.ay=w.ax=w.at=w.as=null
return!0},
atG(){if(!this.oK())return null
return this.bw7()},
bw7(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.y
if(d!=null)return d
d=f.a
d=C.fR(e,e,D.av,0,D.bO,f.b,e,0,4,e,D.av,d,!1)
f.y=d
d.a0(0)
x=0
for(;;){d=f.w
d===$&&C.b()
if(!(x<d.length))break
A:{w=d[x]
d=w.y
d===$&&C.b()
if((d&2)!==0)break A
d=w.w
d===$&&C.b()
v=d/255
u=w.r
t=w.cx
d=w.a
d.toString
s=d
r=0
for(;;){d=w.f
d===$&&C.b()
if(!(r<d))break
d=w.a
d.toString
q=d+r
p=w.b
d=s>=0
o=0
for(;;){n=w.e
n===$&&C.b()
if(!(o<n))break
n=t.a
m=n==null?e:n.cD(o,r,e)
if(m==null)m=new C.eo()
l=D.m.F(m.ga7())
k=D.m.F(m.gag())
j=D.m.F(m.gah())
i=D.m.F(m.gan())
p.toString
if(p>=0&&p<f.a&&d&&s<f.b){n=w.b
n.toString
h=f.y.a
g=h==null?e:h.cD(n+o,q,e)
if(g==null)g=new C.eo()
f.aNA(D.m.F(g.ga7()),D.m.F(g.gag()),D.m.F(g.gah()),D.m.F(g.gan()),l,k,j,i,u,v,g)}++o;++p}++r;++s}}++x}d=f.y
d.toString
return d},
aNA(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s=k/255*m
switch(l){case 1885434739:x=g
w=f
v=e
u=d
break
case 1852797549:x=k
w=j
v=i
u=h
break
case 1684632435:x=k
w=j
v=i
u=h
break
case 1684107883:u=Math.min(d,h)
v=Math.min(e,i)
w=Math.min(f,j)
x=k
break
case 1836411936:u=D.f.R(d*h,8)
v=D.f.R(e*i,8)
w=D.f.R(f*j,8)
x=k
break
case 1768188278:u=B.b33(d,h)
v=B.b33(e,i)
w=B.b33(f,j)
x=k
break
case 1818391150:u=B.b35(d,h)
v=B.b35(e,i)
w=B.b35(f,j)
x=k
break
case 1684751212:x=k
w=j
v=i
u=h
break
case 1818850405:u=Math.max(d,h)
v=Math.max(e,i)
w=Math.max(f,j)
x=k
break
case 1935897198:u=B.c25(d,h)
v=B.c25(e,i)
w=B.c25(f,j)
x=k
break
case 1684633120:u=B.b34(d,h)
v=B.b34(e,i)
w=B.b34(f,j)
x=k
break
case 1818518631:u=h+d>255?255:d+h
v=i+e>255?255:e+i
w=j+f>255?255:f+j
x=k
break
case 1818706796:x=k
w=j
v=i
u=h
break
case 1870030194:u=B.c23(d,h,g,k)
v=B.c23(e,i,g,k)
w=B.c23(f,j,g,k)
x=k
break
case 1934387572:u=B.c26(d,h)
v=B.c26(e,i)
w=B.c26(f,j)
x=k
break
case 1749838196:u=B.c21(d,h)
v=B.c21(e,i)
w=B.c21(f,j)
x=k
break
case 1984719220:u=B.c27(d,h)
v=B.c27(e,i)
w=B.c27(f,j)
x=k
break
case 1816947060:u=B.c22(d,h)
v=B.c22(e,i)
w=B.c22(f,j)
x=k
break
case 1884055924:u=B.c24(d,h)
v=B.c24(e,i)
w=B.c24(f,j)
x=k
break
case 1749903736:u=h<255-d?0:255
v=i<255-e?0:255
w=j<255-f?0:255
x=k
break
case 1684629094:u=Math.abs(h-d)
v=Math.abs(i-e)
w=Math.abs(j-f)
x=k
break
case 1936553316:u=B.c20(d,h)
v=B.c20(e,i)
w=B.c20(f,j)
x=k
break
case 1718842722:x=k
w=j
v=i
u=h
break
case 1717856630:x=k
w=j
v=i
u=h
break
case 1752524064:x=k
w=j
v=i
u=h
break
case 1935766560:x=k
w=j
v=i
u=h
break
case 1668246642:x=k
w=j
v=i
u=h
break
case 1819634976:x=k
w=j
v=i
u=h
break
default:x=k
w=j
v=i
u=h}t=1-s
n.sa7(D.m.F(d*t+u*s))
n.sag(D.m.F(e*t+v*s))
n.sah(D.m.F(f*t+w*s))
n.san(D.m.F(g*t+x*s))},
b7Z(){var x,w,v=this,u=v.as
u===$&&C.b()
v.c=u.Z()
u=v.as.ad()
v.d=u
if(u!==1){v.c=0
return}x=v.as.fZ(6)
for(w=0;w<6;++w)if(J.A(x.a,x.d+w)!==0){v.c=0
return}v.e=v.as.ad()
v.b=v.as.Z()
v.a=v.as.Z()
v.f=v.as.ad()
v.r=A.f4w[v.as.ad()]},
b8t(){var x,w,v,u,t,s,r=this,q=r.at
q.d=q.b
for(q=r.z;x=r.at,x.d<x.c;){w=x.Z()
v=r.at.ad()
x=r.at
u=J.A(x.a,x.d++)
t=r.at.hh(u)
if((u&1)===0)++r.at.d
u=r.at.Z()
x=r.at
s=x.hB(u)
x.d=x.d+(s.c-s.d)
if((u&1)===1)++r.at.d
if(w===943868237)q.l(0,v,new B.ahZ(v,t))}},
b8u(){var x,w,v,u,t,s,r,q,p,o=this,n=o.ax
n.d=n.b
x=n.Z()
if((x&1)!==0)++x
w=o.ax.fZ(x)
n=y.l
o.w=C.c([],n)
if(x>0){v=w.ad()
u=$.lL()
u.$flags&2&&C.u(u)
u[0]=v
t=$.mA()[0]
if(t<0)t=-t
for(v=y.N,u=y.O,s=y.v,r=0;r<t;++r){q=new B.ai1(C.D(v,u),C.c([],n),C.c([],s))
q.aLE(w)
o.w.push(q)}}for(r=0;n=o.w,r<n.length;++r)n[r].bvq(w,o)
x=o.ax.Z()
p=o.ax.fZ(x)
if(x>0){p.ad()
p.ad()
p.ad()
p.ad()
p.ad()
p.ad()
p.bw()}},
b8w(){var x,w,v,u,t,s,r=this,q=r.ay
q.d=q.b
x=q.ad()
if(x===1){q=r.b
w=r.e
w===$&&C.b()
v=q*w
u=new Uint16Array(v)
for(t=0;t<v;++t)u[t]=r.ay.ad()}else u=null
r.x=C.c([],y.X)
t=0
for(;;){q=r.e
q===$&&C.b()
if(!(t<q))break
q=r.x
w=r.ay
w.toString
s=t===3?-1:t
s=new B.LZ(s)
s.ayy(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=B.ccl(r.r,r.f,r.a,r.b,r.x)},
gbJ(){return this.a},
gaO(){return this.b}}
B.ahZ.prototype={
gbS(){return this.a}}
B.ai1.prototype={
aLE(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a1.Z(),a0=$.fz()
a0.$flags&2&&C.u(a0)
a0[0]=d
d=$.jn()
e.a=d[0]
a0[0]=a1.Z()
e.b=d[0]
a0[0]=a1.Z()
e.c=d[0]
a0[0]=a1.Z()
d=d[0]
e.d=d
a0=e.b
a0.toString
e.e=d-a0
a0=e.c
d=e.a
d.toString
e.f=a0-d
e.as=C.c([],y.X)
x=a1.ad()
for(w=0;w<x;++w){d=a1.ad()
a0=$.lL()
a0.$flags&2&&C.u(a0)
a0[0]=d
v=$.mA()[0]
a1.Z()
e.as.push(new B.LZ(v))}u=a1.Z()
if(u!==943868237)throw C.i(C.bH("Invalid PSD layer signature: "+D.f.hw(u,16)))
e.r=a1.Z()
e.w=a1.bw()
a1.bw()
e.y=a1.bw()
if(a1.bw()!==0)throw C.i(C.bH("Invalid PSD layer data"))
t=a1.Z()
s=a1.fZ(t)
if(t>0){t=s.Z()
if(t>0){r=s.fZ(t)
d=r.d
r.Z()
r.Z()
r.Z()
r.Z()
r.bw()
r.bw()
if(r.c-d===20)r.d+=2
else{r.bw()
r.bw()
r.Z()
r.Z()
r.Z()
r.Z()}}t=s.Z()
if(t>0)new B.b30().aLC(s.fZ(t))
t=s.bw()
e.Q=s.hh(t)
q=4-D.f.aC(t,4)-1
if(q>0)s.d+=q
for(d=s.c,a0=e.ay,p=e.cy,o=y.C;s.d<d;){u=s.Z()
if(u!==943868237)throw C.i(C.bH("PSD invalid signature for layer additional data: "+D.f.hw(u,16)))
n=s.hh(4)
t=s.Z()
m=s.hB(t)
l=s.d+(m.c-m.d)
s.d=l
if((t&1)===1)s.d=l+1
a0.l(0,n,B.cv0(n,m))
if(n==="lrFX"){k=C.bP(o.a(a0.h(0,"lrFX")).b,null,0)
k.ad()
j=k.ad()
for(i=0;i<j;++i){k.hh(4)
h=k.hh(4)
g=k.Z()
if(h==="dsdw"){f=new B.ahY()
p.push(f)
f.a=k.Z()
k.Z()
k.Z()
k.Z()
k.Z()
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
k.hh(8)
f.b=J.A(k.a,k.d++)!==0
J.A(k.a,k.d++)
J.A(k.a,k.d++)
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()}else if(h==="isdw"){f=new B.ai0()
p.push(f)
f.a=k.Z()
k.Z()
k.Z()
k.Z()
k.Z()
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
k.hh(8)
f.b=J.A(k.a,k.d++)!==0
J.A(k.a,k.d++)
J.A(k.a,k.d++)
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()}else if(h==="oglw"){f=new B.ai3()
p.push(f)
f.a=k.Z()
k.Z()
k.Z()
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
k.hh(8)
f.b=J.A(k.a,k.d++)!==0
J.A(k.a,k.d++)
if(f.a===2){k.ad()
k.ad()
k.ad()
k.ad()
k.ad()}}else if(h==="iglw"){f=new B.ai_()
p.push(f)
f.a=k.Z()
k.Z()
k.Z()
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
k.hh(8)
f.b=J.A(k.a,k.d++)!==0
J.A(k.a,k.d++)
if(f.a===2){J.A(k.a,k.d++)
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()}}else if(h==="bevl"){f=new B.ahX()
p.push(f)
f.a=k.Z()
k.Z()
k.Z()
k.Z()
k.hh(8)
k.hh(8)
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
J.A(k.a,k.d++)
J.A(k.a,k.d++)
J.A(k.a,k.d++)
f.b=J.A(k.a,k.d++)!==0
J.A(k.a,k.d++)
J.A(k.a,k.d++)
if(f.a===2){k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()}}else if(h==="sofi"){f=new B.ai4()
p.push(f)
f.a=k.Z()
k.hh(4)
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
J.A(k.a,k.d++)
f.b=J.A(k.a,k.d++)!==0
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()}else k.d+=g}}}}},
bvq(d,e){var x,w,v,u,t,s=this,r=0
for(;;){x=s.as
x===$&&C.b()
if(!(r<x.length))break
x=x[r]
w=s.e
w===$&&C.b()
v=s.f
v===$&&C.b()
x.bvw(d,w,v,e.f);++r}w=e.r
v=e.f
u=s.e
u===$&&C.b()
t=s.f
t===$&&C.b()
s.cx=B.ccl(w,v,u,t,x)}}
B.M_.prototype={}
B.b31.prototype={
mm(d,e){var x,w,v,u=null,t=B.c2_(d)
this.a=t
x=1
if(x===1){t=t.atG()
return t}for(w=u,v=0;v<x;++v){t=this.a
e=t==null?u:t.atG()
if(e==null)continue
if(w==null){e.w=A.dYR
w=e}else w.l4(e)}return w},
iM(d){return this.a=B.c2_(d)}}
B.ai8.prototype={}
B.wd.prototype={
aD(d,e){return new B.wd(this.a*e,this.b*e,this.c*e)},
a_(d,e){return new B.wd(this.a+e.a,this.b+e.b,this.c+e.c)},
a4(d,e){return new B.wd(this.a-e.a,this.b-e.b,this.c-e.c)}}
B.kP.prototype={
aD(d,e){var x=this
return new B.kP(x.a*e,x.b*e,x.c*e,x.d*e)},
a_(d,e){var x=this
return new B.kP(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
a4(d,e){var x=this
return new B.kP(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
B.Xs.prototype={
gbJ(){return this.a},
gaO(){return this.b}}
B.M2.prototype={
gaO(){return this.f},
gbJ(){return this.r}}
B.ai7.prototype={
gbJ(){return this.a},
gaO(){return this.b}}
B.pi.prototype={
sKm(d){var x=this.a,w=this.b
x.$flags&2&&C.u(x)
x[w+1]=d},
NQ(){var x=this.e,w=this.d
if(x)return new B.wd(A.la[w>>>9],A.la[w>>>4&31],A.eM[w&15])
else return new B.wd(A.eM[w>>>7&15],A.eM[w>>>3&15],A.x4[w&7])},
NS(){var x=this.e,w=this.d
if(x)return new B.kP(A.la[w>>>9],A.la[w>>>4&31],A.eM[w&15],255)
else return new B.kP(A.eM[w>>>7&15],A.eM[w>>>3&15],A.x4[w&7],A.x4[w>>>11&7])},
NR(){var x=this.r,w=this.f
if(x)return new B.wd(A.la[w>>>10],A.la[w>>>5&31],A.la[w&31])
else return new B.wd(A.eM[w>>>8&15],A.eM[w>>>4&15],A.eM[w&15])},
NT(){var x=this.r,w=this.f
if(x)return new B.kP(A.la[w>>>10],A.la[w>>>5&31],A.la[w&31],255)
else return new B.kP(A.eM[w>>>8&15],A.eM[w>>>4&15],A.eM[w&15],A.x4[w>>>12&7])},
Ia(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
qZ(){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sKm(x.Ia())
x.d=w>>>1&16383
x.sKm(x.Ia())
x.e=(w>>>15&1)===1
x.sKm(x.Ia())
x.f=w>>>16&32767
x.sKm(x.Ia())
x.r=(w>>>31&1)===1
x.sKm(x.Ia())}}
B.b3c.prototype={
iM(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.aRk(d)
if(x!=null){w.a=d
return w.b=x}}x=w.aRz(d)
if(x!=null){w.a=d
return w.b=x}x=w.aRx(d)
if(x!=null){w.a=d
return w.b=x}return null},
aRz(d){var x,w,v=C.cd(d,!1,null,0)
if(v.Z()!==52)return null
if(v.Z()!==55727696)return null
x=C.c([0,0,0,0],y.t)
w=new B.M2(x)
v.Z()
w.b=v.Z()
x[0]=v.bw()
x[1]=v.bw()
x[2]=v.bw()
x[3]=v.bw()
v.Z()
v.Z()
w.f=v.Z()
w.r=v.Z()
v.Z()
v.Z()
v.Z()
v.Z()
w.Q=v.Z()
return w},
aRx(d){var x,w,v=C.cd(d,!1,null,0)
if(v.Z()!==52)return null
x=new B.Xs()
x.b=v.Z()
x.a=v.Z()
v.Z()
x.d=v.Z()
v.Z()
x.f=v.Z()
v.Z()
v.Z()
v.Z()
x.y=v.Z()
w=v.Z()
x.z=w
x.Q=v.Z()
if(w!==559044176)return null
return x},
aRk(d){var x,w,v,u,t,s,r=null,q=d.length,p=C.cd(d,!1,r,0)
if(p.Z()!==0)return r
x=new B.ai7()
x.b=p.Z()
x.a=p.Z()
p.Z()
p.Z()
p.Z()
p.Z()
p.Z()
p.Z()
p.Z()
w=p.Z()
x.y=w
if(w===559044176)return r
v=0
u=8
if(!(q===32)){t=0
for(;;){if(!(t<10)){v=1
break}s=t<<1>>>0
if((D.f.cN(64,s)&q)>>>0!==0){u=D.f.cN(16,t)
v=1
break}if((D.f.cN(128,s)&q)>>>0!==0){u=D.f.cN(16,t)
break}++t}if(t===10)return r}if((v+1)*2===4)return r
x.b=x.a=u
return x},
i2(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
if(u instanceof B.ai7){u=u.a
x=v.b.gaO()
w=v.a
w.toString
return v.a0W(u,x,w)}else if(u instanceof B.Xs){u=v.a
u.toString
return v.aRw(u)}else if(u instanceof B.M2){u=v.a
u.toString
return v.aRy(u)}return null},
mm(d,e){if(this.iM(d)==null)return null
return this.i2(0)},
aRw(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
if(j<52||l.b==null)return k
x=l.b
x.toString
y.M.a(x)
w=C.cd(d,!1,k,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return k
u=x.a
t=x.b
if(u*t*x.f/8>j-52)return k
switch(x.d&255){case 16:s=C.fR(k,k,D.av,0,D.bO,t,k,0,4,k,D.av,u,!1)
for(x=s.a,x=x.gT(x);x.q();){r=x.gJ()
q=J.A(w.a,w.d++)
p=J.A(w.a,w.d++)
r.sa7(p&240)
r.sag((p&15)<<4)
r.sah(q&240)
r.san((q&15)<<4)}return s
case 17:s=C.fR(k,k,D.av,0,D.bO,t,k,0,4,k,D.av,u,!1)
for(x=s.a,x=x.gT(x);x.q();){r=x.gJ()
o=w.ad()
n=(o&1)!==0?255:0
r.sa7(o>>>8&248)
r.sag(o>>>3&248)
r.sah((o&62)<<2)
r.san(n)}return s
case 18:s=C.fR(k,k,D.av,0,D.bO,t,k,0,4,k,D.av,u,!1)
for(x=s.a,x=x.gT(x);x.q();){r=x.gJ()
r.sa7(J.A(w.a,w.d++))
r.sag(J.A(w.a,w.d++))
r.sah(J.A(w.a,w.d++))
r.san(J.A(w.a,w.d++))}return s
case 19:s=C.fR(k,k,D.av,0,D.bO,t,k,0,3,k,D.av,u,!1)
for(x=s.a,x=x.gT(x);x.q();){r=x.gJ()
o=w.ad()
r.sa7(o>>>8&248)
r.sag(o>>>3&252)
r.sah((o&31)<<3)}return s
case 20:s=C.fR(k,k,D.av,0,D.bO,t,k,0,3,k,D.av,u,!1)
for(x=s.a,x=x.gT(x);x.q();){r=x.gJ()
o=w.ad()
r.sa7((o&31)<<3)
r.sag(o>>>2&248)
r.sah(o>>>7&248)}return s
case 21:s=C.fR(k,k,D.av,0,D.bO,t,k,0,3,k,D.av,u,!1)
for(x=s.a,x=x.gT(x);x.q();){r=x.gJ()
r.sa7(J.A(w.a,w.d++))
r.sag(J.A(w.a,w.d++))
r.sah(J.A(w.a,w.d++))}return s
case 22:s=C.fR(k,k,D.av,0,D.bO,t,k,0,1,k,D.av,u,!1)
for(x=s.a,x=x.gT(x);x.q();)x.gJ().sa7(J.A(w.a,w.d++))
return s
case 23:s=C.fR(k,k,D.av,0,D.bO,t,k,0,4,k,D.av,u,!1)
for(x=s.a,x=x.gT(x);x.q();){r=x.gJ()
n=J.A(w.a,w.d++)
m=J.A(w.a,w.d++)
r.sa7(m)
r.sag(m)
r.sah(m)
r.san(n)}return s
case 24:return k
case 25:return x.y===0?l.agT(u,t,w.eM()):l.a0W(u,t,w.eM())}return k},
aRy(d){var x,w,v,u=this
if(!(u.b instanceof B.M2))return null
x=C.cd(d,!1,null,0)
w=x.d+=52
v=y.i.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.agT(v.r,v.f,x.eM())
case 3:return u.a0W(v.r,v.f,x.eM())}return null},
agT(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=C.fR(b5,b5,D.av,0,D.bO,c6,b5,0,3,b5,D.av,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.lO(D.K.ga5(c7),0,null),c0=new B.pi(b9),c1=new B.pi(J.lO(D.K.ga5(c7),0,null)),c2=new B.pi(J.lO(D.K.ga5(c7),0,null)),c3=new B.pi(J.lO(D.K.ga5(c7),0,null)),c4=new B.pi(J.lO(D.K.ga5(c7),0,null))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=B.we(v,x)<<1>>>0
c0.qZ()
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=B.we(l,p)<<1>>>0
c1.qZ()
c2.b=B.we(k,p)<<1>>>0
c2.qZ()
c3.b=B.we(l,o)<<1>>>0
c3.qZ()
c4.b=B.we(k,o)<<1>>>0
c4.qZ()
j=c1.NQ()
i=A.dJ[r][0]
h=c2.NQ()
g=A.dJ[r][1]
f=c3.NQ()
e=A.dJ[r][2]
d=c4.NQ()
a0=A.dJ[r][3]
a1=c1.NR()
a2=A.dJ[r][0]
a3=c2.NR()
a4=A.dJ[r][1]
a5=c3.NR()
a6=A.dJ[r][2]
a7=c4.NR()
a8=A.dJ[r][3]
a9=A.Ua[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.f.R((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.f.R((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.f.R((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.dB(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
a0W(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=C.fR(a4,a4,D.av,0,D.bO,b5,a4,0,4,a4,D.av,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.lO(D.K.ga5(b6),0,null),a9=new B.pi(a8),b0=new B.pi(J.lO(D.K.ga5(b6),0,null)),b1=new B.pi(J.lO(D.K.ga5(b6),0,null)),b2=new B.pi(J.lO(D.K.ga5(b6),0,null)),b3=new B.pi(J.lO(D.K.ga5(b6),0,null))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=B.we(v,x)<<1>>>0
a9.qZ()
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=B.we(l,p)<<1>>>0
b0.qZ()
b1.b=B.we(k,p)<<1>>>0
b1.qZ()
b2.b=B.we(l,o)<<1>>>0
b2.qZ()
b3.b=B.we(k,o)<<1>>>0
b3.qZ()
j=b0.NS()
i=A.dJ[r][0]
h=b1.NS()
g=A.dJ[r][1]
g=new B.kP(j.a*i,j.b*i,j.c*i,j.d*i).a_(0,new B.kP(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.NS()
i=A.dJ[r][2]
i=g.a_(0,new B.kP(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.NS()
g=A.dJ[r][3]
f=i.a_(0,new B.kP(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.NT()
h=A.dJ[r][0]
i=b1.NT()
j=A.dJ[r][1]
j=new B.kP(g.a*h,g.b*h,g.c*h,g.d*h).a_(0,new B.kP(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.NT()
h=A.dJ[r][2]
h=j.a_(0,new B.kP(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.NT()
j=A.dJ[r][3]
e=h.a_(0,new B.kP(i.a*j,i.b*j,i.c*j,i.d*j))
d=A.Ua[s+t&3]
j=d[0]
i=d[1]
a0=D.f.R(f.a*j+e.a*i,7)
a1=D.f.R(f.b*j+e.b*i,7)
a2=D.f.R(f.c*j+e.c*i,7)
a3=D.f.R(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.ic(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
B.alF.prototype={
hT(d){var x,w=this
if(d.c-d.d<18)return
w.a=d.bw()
w.b=d.bw()
x=d.bw()
w.c=x<12?A.ePR[x]:A.ys
d.ad()
w.e=d.ad()
w.f=d.bw()
d.ad()
d.ad()
w.x=d.ad()
w.y=d.ad()
w.z=d.bw()
w.Q=d.bw()},
awU(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===A.mL||w===A.mM){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0},
gbJ(){return this.x},
gaO(){return this.y}}
B.mo.prototype={
H(){return"TgaImageType."+this.b}}
B.bgF.prototype={
mm(d,e){if(this.iM(d)==null)return null
return this.i2(0)},
iM(d){var x,w,v,u,t=this
t.a=new B.alF(A.ys)
x=C.cd(d,!1,null,0)
t.b=x
w=x.fZ(18)
t.a.hT(w)
x=t.a
if(!x.awU())return null
v=t.b
v.d+=x.a
u=x.c
if(u===A.mL||u===A.mM)x.as=v.fZ(x.e*D.f.R(x.f,3)).eM()
x=t.a
x.ax=t.b.d
return x},
i2(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===A.a6P)return x.agS()
else if(w===A.a6O||w===A.mM)return x.aRC()
else if(w===A.mL)return x.agS()
return null},
agO(d,e){var x,w,v,u,t,s,r,q=this,p=C.cd(d,!1,null,0),o=q.a.f
if(o===16){o=q.b
o===$&&C.b()
x=o.ad()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<q.a.e;++s){e.qH(s,w)
e.qG(s,v)
e.qF(s,u)
e.qE(s,t)}}else{r=o===32
for(s=0;s<q.a.e;++s){u=J.A(p.a,p.d++)
v=J.A(p.a,p.d++)
w=J.A(p.a,p.d++)
t=r?J.A(p.a,p.d++):255
e.qH(s,w)
e.qG(s,v)
e.qF(s,u)
e.qE(s,t)}}},
aRC(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=C.fR(i,i,D.av,0,D.bO,a0,i,0,a1,i,D.av,d,h===A.mL||h===A.mM)
h=x.a
if((h==null?i:h.gd8())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.gd8()
d.toString
j.agO(h,d)}w=x.gbJ()
v=x.gaO()-1
h=g===8
u=0
for(;;){d=j.b
d===$&&C.b()
a0=d.d
if(!(a0<d.c&&v>=0))break
a1=d.a
d.d=a0+1
t=J.A(a1,a0)
s=(t&127)+1
r=0
if((t&128)!==0)if(h){d=j.b
q=J.A(d.a,d.d++)
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.kh(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}else{d=j.b
if(f){n=d.ad()
q=n>>>7&248
m=n>>>2&248
l=(n&31)<<3
k=(n&32768)!==0?0:255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.ic(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}else{l=J.A(d.a,d.d++)
d=j.b
m=J.A(d.a,d.d++)
d=j.b
q=J.A(d.a,d.d++)
if(e){d=j.b
k=J.A(d.a,d.d++)}else k=255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.ic(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}}else if(h)for(p=0;p<s;++p){d=j.b
q=J.A(d.a,d.d++)
o=u+1
d=x.a
if(d!=null)d.kh(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else if(f)for(p=0;p<s;++p){n=j.b.ad()
k=(n&32768)!==0?0:255
o=u+1
d=x.a
if(d!=null)d.ic(u,v,n>>>7&248,n>>>2&248,(n&31)<<3,k)
d=j.b
if(d.d>=d.c){u=o
break}if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else for(p=0;p<s;++p){d=j.b
l=J.A(d.a,d.d++)
d=j.b
m=J.A(d.a,d.d++)
d=j.b
q=J.A(d.a,d.d++)
if(e){d=j.b
k=J.A(d.a,d.d++)}else k=255
o=u+1
d=x.a
if(d!=null)d.ic(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}if(u>=w){--v
if(v<0)break
u=0}}return x},
agS(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
g===$&&C.b()
x=i.a
g.d=x.ax
w=x.z
g=w===16
v=!0
if(!g)if(w!==32){u=x.c
if(u===A.mL||u===A.mM){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=C.fR(h,h,D.av,0,D.bO,t,h,0,s,h,D.av,u,x===A.mL||x===A.mM)
x=i.a
u=x.c
if(u===A.mL||u===A.mM){x=x.as
x.toString
u=r.a
u=u==null?h:u.gd8()
u.toString
i.agO(x,u)}if(w===8)for(q=r.gaO()-1;q>=0;--q){p=0
for(;;){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
o=J.A(g.a,g.d++)
g=r.a
if(g!=null)g.kh(p,q,o);++p}}else if(g)for(q=r.gaO()-1;q>=0;--q){p=0
for(;;){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
n=i.b.ad()
m=(n&32768)!==0?0:255
g=r.a
if(g!=null)g.ic(p,q,n>>>7&248,n>>>2&248,(n&31)<<3,m);++p}}else for(q=r.gaO()-1;q>=0;--q){p=0
for(;;){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
l=J.A(g.a,g.d++)
g=i.b
k=J.A(g.a,g.d++)
g=i.b
j=J.A(g.a,g.d++)
if(v){g=i.b
m=J.A(g.a,g.d++)}else m=255
g=r.a
if(g!=null)g.ic(p,q,j,k,l,m);++p}}return r}}
B.bgP.prototype={
hg(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.bw()}for(x=t.a,w=0;v=t.c,d>v;){w=D.f.cE(w,v)+(t.b&A.rm[v])
d-=v
t.c=8
t.b=J.A(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.bw()}x=D.f.cE(w,d)
v=t.b
u=t.c-d
w=x+(D.f.j7(v,u)&A.rm[d])
t.c=u}return w}}
B.alG.prototype={
j(d){var x=this,w=x.a,v=$.c_i().h(0,w)
if(v!=null)return v.a+": "+x.b.j(0)+" "+x.c
return"<"+w+">: "+x.b.j(0)+" "+x.c},
mK(){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.fZ(x*(w!==D.an?D.nE[w.a]:0))
switch(w.a){case 1:return u.e=new C.qm(new Uint8Array(C.b5(v.fZ(x).eM())))
case 2:return u.e=new C.yQ(x===0?"":v.hh(x-1))
case 7:return u.e=new C.qm(new Uint8Array(C.b5(v.fZ(x).eM())))
case 3:return u.e=C.ca6(v,x)
case 4:return u.e=C.ca1(v,x)
case 5:return u.e=C.ca2(v,x)
case 11:return u.e=C.ca8(v,x)
case 12:return u.e=C.ca0(v,x)
case 6:return u.e=new C.te(new Int8Array(C.b5(J.c_C(D.K.ga5(v.eM()),0,x))))
case 8:return u.e=C.ca5(v,x)
case 9:return u.e=C.ca3(v,x)
case 10:return u.e=C.ca4(v,x)
case 0:return null}}}
B.bgR.prototype={
blg(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.f.av(u.a+7,8)
for(w=0,v=0;v<g;++v){u.a0U(d,w,f)
w+=x}},
a0U(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){while(w){v=p.vK(10)
u=A.Uf[v]
t=D.f.R(u,1)&15
if(t===12){u=A.x0[(v<<2&12|p.mb(2))>>>0]
s=D.f.R(u,1)
f+=D.f.R(u,4)&4095
p.jd(4-(s&7))}else if(t===0)throw C.i(C.bH("TIFFFaxDecoder0"))
else if(t===15)throw C.i(C.bH("TIFFFaxDecoder1"))
else{f+=D.f.R(u,5)&2047
p.jd(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}while(!w){u=A.SB[p.mb(4)]
r=u>>>5&2047
q=!0
if(r===100){u=A.TP[p.vK(9)]
t=D.f.R(u,1)&15
r=D.f.R(u,5)&2047
if(t===12){p.jd(5)
u=A.x0[p.mb(4)]
s=D.f.R(u,1)
r=D.f.R(u,4)&4095
p.ni(d,e,f,r)
f+=r
p.jd(4-(s&7))}else if(t===15)throw C.i(C.bH("TIFFFaxDecoder2"))
else{p.ni(d,e,f,r)
f+=r
p.jd(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=A.Sx[p.mb(2)]
r=u>>>5&2047
p.ni(d,e,f,r)
f+=r
p.jd(2-(u>>>1&15))
p.f[p.d++]=f}else{p.ni(d,e,f,r)
f+=r
p.jd(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
blh(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.f.av(x+7,8)
v=C.bm(2,null,!1,y.I)
e.at=a3&1
e.as=a3>>>2&1
if(e.amt()!==1)throw C.i(C.bH("TIFFFaxDecoder3"))
e.a0U(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.amt()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
for(;;){r.toString
if(!(r<x))break
e.aiM(q,p,v)
n=v[0]
m=v[1]
l=A.Ub[e.mb(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.ni(d,u,r,m-r)}e.jd(7-j)
r=m
q=r}else if(k===1){e.jd(7-j)
i=o+1
h=i+1
if(p){r+=e.Qb()
e.f[o]=r
g=e.Qa()
e.ni(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.Qa()
e.ni(d,u,r,g)
r+=g
e.f[o]=r
r+=e.Qb()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.ni(d,u,r,f-r)
e.jd(7-j)}else throw C.i(C.bH("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.a0U(d,u,a1)
u+=w}},
blm(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.f.av(x+7,8)
v=C.bm(2,null,!1,y.I)
u=a2.f
a2.d=0
a2.d=1
u[0]=x
a2.d=2
u[1]=x
for(t=0,s=0;s<a6;++s){r=a2.e
a2.e=a2.f
a2.f=r
a2.y=0
q=a5
p=-1
o=!0
n=0
for(;;){q.toString
if(!(q<x))break
a2.aiM(p,o,v)
m=v[0]
l=v[1]
k=A.Ub[a2.mb(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.ni(a3,t,q,l-q)}a2.jd(7-i)
q=l
p=q}else if(j===1){a2.jd(7-i)
h=n+1
g=h+1
if(o){q+=a2.Qb()
r[n]=q
f=a2.Qa()
a2.ni(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.Qa()
a2.ni(a3,t,q,f)
q+=f
r[n]=q
q+=a2.Qb()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.ni(a3,t,q,e-q)
a2.jd(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.mb(3)!==7)throw C.i(C.bH("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){while(a2.mb(1)!==1)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.mb(1)===0
if(a1){if(!o){h=n+1
r[n]=q
n=h}}else if(o){h=n+1
r[n]=q
n=h}o=a1
a0=!0}a1=d===5
if(a1){if(!o){h=n+1
r[n]=q
n=h}q+=d}else{q+=d
h=n+1
r[n]=q
a2.ni(a3,t,q,1);++q
n=h}}}else throw C.i(C.bH("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
Qb(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.vK(10)
u=A.Uf[v]
t=D.f.R(u,1)&15
if(t===12){u=A.x0[(v<<2&12|r.mb(2))>>>0]
s=D.f.R(u,1)
x+=D.f.R(u,4)&4095
r.jd(4-(s&7))}else if(t===0)throw C.i(C.bH("TIFFFaxDecoder0"))
else if(t===15)throw C.i(C.bH("TIFFFaxDecoder1"))
else{x+=D.f.R(u,5)&2047
r.jd(10-t)
if((u&1)===0)w=!1}}return x},
Qa(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=A.SB[r.mb(4)]
u=v>>>5&2047
if(u===100){v=A.TP[r.vK(9)]
t=D.f.R(v,1)&15
s=D.f.R(v,5)
if(t===12){r.jd(5)
v=A.x0[r.mb(4)]
s=D.f.R(v,1)
x+=D.f.R(v,4)&4095
r.jd(4-(s&7))}else if(t===15)throw C.i(C.bH("TIFFFaxDecoder2"))
else{x+=s&2047
r.jd(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=A.Sx[r.mb(2)]
x+=v>>>5&2047
r.jd(2-(v>>>1&15))}else{x+=u
r.jd(4-(v>>>1&15))}w=!0}}return x},
amt(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.vK(12)!==1)throw C.i(C.bH("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.vK(x)!==0)throw C.i(C.bH(u))
if(x<4)if(v.vK(8)!==0)throw C.i(C.bH(u))
while(w=v.vK(8),w!==1)if(w!==0)throw C.i(C.bH(u))}if(v.at===0)return 1
else return v.mb(1)},
aiM(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
ni(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.f.R(s,3),p=s&7
if(p>0){x=D.f.cE(1,7-p)
w=J.A(d.a,d.d+q)
for(;;){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.l(0,q,w)}q=D.f.R(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.bd(d.a,d.d+q,255)
s+=8}while(s<r){q=D.f.R(s,3)
v=J.A(d.a,d.d+q)
t=D.f.cE(1,7-(s&7))
J.bd(d.a,d.d+q,(v|t)>>>0);++s}},
vK(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.r
j===$&&C.b()
x=j.d
w=j.c-x-1
v=k.x
u=k.c
t=0
s=0
if(u===1){v.toString
r=J.A(j.a,x+v)
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=J.A(u,x+j)
else{t=J.A(u,x+j)
j=k.r
s=J.A(j.a,j.d+(v+2))}}}else if(u===2){v.toString
r=A.pd[J.A(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=A.pd[J.A(u,x+j)&255]
else{t=A.pd[J.A(u,x+j)&255]
j=k.r
s=A.pd[J.A(j.a,j.d+(v+2))&255]}}}else throw C.i(C.bH("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.f.cE(r&A.rm[q],p)
l=D.f.eb(t&A.DJ[n],8-n)
if(o!==0){l=D.f.cE(l,o)|D.f.eb(s&A.DJ[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
mb(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
m===$&&C.b()
x=m.d
w=m.c-x-1
v=n.x
u=n.c
t=0
if(u===1){v.toString
s=J.A(m.a,x+v)
if(!(v===w)){m=n.r
t=J.A(m.a,m.d+(v+1))}}else if(u===2){v.toString
s=A.pd[J.A(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=A.pd[J.A(m.a,m.d+(v+1))&255]}}else throw C.i(C.bH("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.f.eb(s&A.rm[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.f.cE(s&A.rm[r],-p)|D.f.eb(t&A.DJ[q],8-q))>>>0
m=n.x
m.toString
n.x=m+1
n.w=q}return o},
jd(d){var x,w=this,v=w.w
v.toString
x=v-d
if(x<0){v=w.x
v.toString
w.x=v-1
w.w=8+x}else w.w=x}}
B.alH.prototype={
aLQ(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=C.bP(d,g,0),e=d.ad()
for(x=h.a,w=0;w<e;++w){v=d.ad()
u=d.ad()
t=D.TY[u]
s=D.nE[u]
r=d.Z()
if(r*s>4)q=d.Z()
else{q=d.d
d.d=q+4}p=new B.alG(v,t,r,q,f)
x.l(0,v,p)
if(v===256){o=p.mK()
o=o==null?g:o.F(0)
h.b=o==null?0:o}else if(v===257){o=p.mK()
o=o==null?g:o.F(0)
h.c=o==null?0:o}else if(v===262){n=p.mK()
m=n==null?g:n.F(0)
if(m==null)m=17
if(m<17)h.d=A.eOt[m]
else h.d=A.G0}else if(v===259){o=p.mK()
o=o==null?g:o.F(0)
h.e=o==null?0:o}else if(v===258){o=p.mK()
o=o==null?g:o.F(0)
h.f=o==null?0:o}else if(v===277){o=p.mK()
o=o==null?g:o.F(0)
h.r=o==null?0:o}else if(v===317){o=p.mK()
o=o==null?g:o.F(0)
h.Q=o==null?0:o}else if(v===339){o=p.mK()
n=o==null?g:o.F(0)
h.x=A.eOX[n==null?0:n]}else if(v===320){n=p.mK()
if(n!=null){o=J.cnf(D.K.ga5(n.qx()))
h.id=o
h.k1=0
o=o.length/3|0
h.k2=o
h.k3=o*2}}}o=h.id
l=o!=null
if(l&&h.d===A.G1)h.r=1
if(h.b===0||h.c===0)return
if(l&&h.f===8){k=o.length
for(l=o.$flags|0,w=0;w<k;++w){j=o[w]
l&2&&C.u(o)
o[w]=j>>>8}}if(h.d===A.G_)h.z=!0
h.w=h.r
if(x.aE(324)){h.ay=h.CT(322)
h.ch=h.CT(323)
h.CW=h.Sf(324)
h.cx=h.Sf(325)}else{h.ay=h.Se(322,h.b)
if(!x.aE(278))h.ch=h.Se(323,h.c)
else{i=h.CT(278)
if(i===-1)h.ch=h.c
else h.ch=i}h.CW=h.Sf(273)
h.cx=h.Sf(279)}o=h.b
l=h.ay
h.cy=D.f.eD(o+l-1,l)
l=h.c
o=h.ch
h.db=D.f.eD(l+o-1,o)
h.dy=h.Se(266,1)
h.fr=h.CT(292)
h.fx=h.CT(293)
h.CT(338)
switch(h.d.a){case 0:case 1:x=h.f
if(x===1&&h.r===1)h.y=A.FZ
else if(x===4&&h.r===1)h.y=A.ftm
else if(D.f.aC(x,8)===0){x=h.r
if(x===1)h.y=A.ftn
else if(x===2)h.y=A.fto
else h.y=A.td}break
case 2:if(D.f.aC(h.f,8)===0){x=h.r
if(x===3)h.y=A.a6T
else if(x===4)h.y=A.ftq
else h.y=A.td}break
case 3:x=!1
if(h.r===1)if(h.id!=null){x=h.f
x=x===4||x===8||x===16}if(x)h.y=A.ftp
break
case 4:if(h.f===1&&h.r===1)h.y=A.FZ
break
case 6:if(h.e===7&&h.f===8&&h.r===3)h.y=A.a6T
else{if(x.aE(530)){n=x.h(0,530).mK()
h.as=n.F(0)
x=h.at=n.hi(0,1)}else x=h.at=h.as=2
o=h.as
o===$&&C.b()
if(o*x===1)h.y=A.td
else if(h.f===8&&h.r===3)h.y=A.ftr}break
case 5:if(D.f.aC(h.f,8)===0)h.y=A.td
x=h.r
if(x===4)h.w=3
else if(x===5)h.w=4
break
default:if(D.f.aC(h.f,8)===0)h.y=A.td
break}},
bP(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.x,d=e===A.tc,a0=e===A.bG
e=g.f
if(e===1)x=D.eG
else if(e===2)x=D.ky
else{if(e===4)e=D.kz
else if(d&&e===16)e=D.lD
else if(d&&e===32)e=D.mr
else if(d&&e===64)e=D.nu
else if(a0&&e===8)e=D.nv
else if(a0&&e===16)e=D.nw
else if(a0&&e===32)e=D.nx
else if(e===16)e=D.cN
else e=e===32?D.ms:D.av
x=e}w=g.id!=null&&g.d===A.G1
v=w?3:g.w
e=g.b
u=C.fR(f,f,x,0,D.bO,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.gd8()
e.toString
t=g.id
s=t.length
r=s/3|0
q=g.k1
q===$&&C.b()
p=g.k2
p===$&&C.b()
o=g.k3
o===$&&C.b()
for(n=o,m=p,l=q,k=0;k<r;++k,++l,++m,++n){if(n>=s)break
e.n_(k,t[l],t[m],t[n])}}j=0
i=0
for(;;){e=g.db
e===$&&C.b()
if(!(j<e))break
h=0
for(;;){e=g.cy
e===$&&C.b()
if(!(h<e))break
g.aRD(a1,u,h,j);++h;++i}++j}return u},
aRD(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.y===A.FZ){a8.aRn(b0,b1,b2,b3)
return}u=a8.cy
u===$&&C.b()
t=b3*u+b2
b0.d=a8.CW[t]
u=a8.ay
s=b2*u
r=a8.ch
q=b3*r
x=a8.cx[t]
p=u*r*a8.r
u=a8.f
r=u===16
if(r)p*=2
else if(u===32)p*=4
w=null
if(u===8||r||u===32||u===64){u=a8.e
if(u===1)w=b0
else if(u===5){w=C.cd(new Uint8Array(p),!1,a9,0)
v=B.caU()
try{v.atF(C.bP(b0,x,0),w.a)}catch(o){}if(a8.Q===2)for(n=0;n<a8.ch;++n){m=a8.r
u=a8.ay
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.A(u.a,u.d+l)
j=w
i=a8.r
i=J.A(j.a,j.d+(l-i))
J.bd(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=C.cd(new Uint8Array(p),!1,a9,0)
a8.agR(b0,p,w.a)}else if(u===32946)w=C.cd(D.n9.zV(b0.Ng(0,0,x)),!1,a9,0)
else if(u===8)w=C.cd(D.n9.zV(b0.Ng(0,0,x)),!1,a9,0)
else if(u===6){a8.b1D(new B.Vg().bP(y.D.a(b0.Ng(0,0,x))),b1,s,q,a8.ay,a8.ch)
return}else throw C.i(C.bH("Unsupported Compression Type: "+u))
h=C.c([0,0,0],y.t)
for(g=q,f=0;f<a8.ch;++f,++g)for(e=s,d=0;d<a8.ay;++d,++e){u=w
if(u.d>=u.c||e>=a8.b||g>=a8.c)break
u=a8.r
if(u===1){u=a8.x
if(u===A.tc){u=a8.f
if(u===32){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.BT()[0]}else if(u===64)a0=w.Yf()
else if(u===16){u=w.ad()
r=$.fP
a0=(r!=null?r:C.hu())[u]}else a0=0
if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kh(e,g,a0)}}else{r=a8.f
if(r===8)if(u===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.mB()[0]}else{u=w
a0=J.A(u.a,u.d++)}else if(r===16)if(u===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.mA()[0]}else a0=w.ad()
else if(r===32)if(u===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.jn()[0]}else a0=w.Z()
else a0=0
if(a8.d===A.G_){u=b1.a
a1=u==null?a9:u.gbq()
a0=(a1==null?0:a1)-a0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kh(e,g,a0)}}}else if(u===2){u=a8.f
if(u===8){if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a2=$.mB()[0]}else{u=w
a2=J.A(u.a,u.d++)}if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mB()[0]}else{u=w
a3=J.A(u.a,u.d++)}}else if(u===16){if(a8.x===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a2=$.mA()[0]}else a2=w.ad()
if(a8.x===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mA()[0]}else a3=w.ad()}else if(u===32){if(a8.x===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a2=$.jn()[0]}else a2=w.Z()
if(a8.x===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.jn()[0]}else a3=w.Z()}else{a2=0
a3=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.dB(e,g,a2,a3,0)}}else if(u===3){u=a8.x
if(u===A.tc){u=a8.f
if(u===32){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
u=$.BT()
a4=u[0]
r[0]=w.Z()
a5=u[0]
r[0]=w.Z()
a6=u[0]}else{a5=0
a6=0
if(u===64)a4=w.Yf()
else if(u===16){u=w.ad()
r=$.fP
a4=(r!=null?r:C.hu())[u]
u=w.ad()
r=$.fP
a5=(r!=null?r:C.hu())[u]
u=w.ad()
r=$.fP
a6=(r!=null?r:C.hu())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.dB(e,g,a4,a5,a6)}}else{r=a8.f
if(r===8){if(u===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.mB()[0]}else{u=w
a4=J.A(u.a,u.d++)}if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mB()[0]}else{u=w
a5=J.A(u.a,u.d++)}if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mB()[0]}else{u=w
a6=J.A(u.a,u.d++)}}else if(r===16){if(u===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.mA()[0]}else a4=w.ad()
if(a8.x===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mA()[0]}else a5=w.ad()
if(a8.x===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mA()[0]}else a6=w.ad()}else if(r===32){if(u===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.jn()[0]}else a4=w.Z()
if(a8.x===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.jn()[0]}else a5=w.Z()
if(a8.x===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.jn()[0]}else a6=w.Z()}else{a4=0
a5=0
a6=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.dB(e,g,a4,a5,a6)}}}else if(u>=4)if(a8.x===A.tc){u=a8.f
if(u===32){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
u=$.BT()
a4=u[0]
r[0]=w.Z()
a5=u[0]
r[0]=w.Z()
a6=u[0]
r[0]=w.Z()
a7=u[0]}else{a5=0
a6=0
a7=0
if(u===64)a4=w.Yf()
else if(u===16){u=w.ad()
r=$.fP
a4=(r!=null?r:C.hu())[u]
u=w.ad()
r=$.fP
a5=(r!=null?r:C.hu())[u]
u=w.ad()
r=$.fP
a6=(r!=null?r:C.hu())[u]
u=w.ad()
r=$.fP
a7=(r!=null?r:C.hu())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.ic(e,g,a4,a5,a6,a7)}}else{u=b1.a
a3=u==null?a9:u.gbq()
if(a3==null)a3=0
u=a8.f
if(u===8){if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.mB()[0]}else{u=w
a4=J.A(u.a,u.d++)}if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mB()[0]}else{u=w
a5=J.A(u.a,u.d++)}if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mB()[0]}else{u=w
a6=J.A(u.a,u.d++)}if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a7=$.mB()[0]}else{u=w
a7=J.A(u.a,u.d++)}if(a8.r===5)if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mB()[0]}else{u=w
a3=J.A(u.a,u.d++)}}else if(u===16){if(a8.x===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.mA()[0]}else a4=w.ad()
if(a8.x===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mA()[0]}else a5=w.ad()
if(a8.x===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mA()[0]}else a6=w.ad()
if(a8.x===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a7=$.mA()[0]}else a7=w.ad()
if(a8.r===5)if(a8.x===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mA()[0]}else a3=w.ad()}else if(u===32){if(a8.x===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.jn()[0]}else a4=w.Z()
if(a8.x===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.jn()[0]}else a5=w.Z()
if(a8.x===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.jn()[0]}else a6=w.Z()
if(a8.x===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a7=$.jn()[0]}else a7=w.Z()
if(a8.r===5)if(a8.x===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.jn()[0]}else a3=w.Z()}else{a4=0
a5=0
a6=0
a7=0}if(a8.d===A.a6U){B.chx(a4,a5,a6,a7,h)
a4=h[0]
a5=h[1]
a6=h[2]
a7=a3}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.ic(e,g,a4,a5,a6,a7)}}}}else throw C.i(C.bH("Unsupported bitsPerSample: "+u))},
b1D(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.cD(v,x,null)
if(u==null)u=new C.eo()
e.ya(v+f,w,u)}},
aRn(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cy
a2===$&&C.b()
w=a6*a2+a5
a3.d=a0.CW[w]
a2=a0.ay
v=a5*a2
u=a0.ch
t=a6*u
s=a0.cx[w]
x=null
r=a0.e
if(r===32773){q=D.f.aC(a2,8)===0?D.f.av(a2,8)*u:(D.f.av(a2,8)+1)*u
x=C.cd(new Uint8Array(a2*u),!1,a1,0)
a0.agR(a3,q,x.a)}else if(r===5){x=C.cd(new Uint8Array(a2*u),!1,a1,0)
B.caU().atF(C.bP(a3,s,0),x.a)
if(a0.Q===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.A(a2.a,a2.d+n)
r=x
m=a0.r
m=J.A(r.a,r.d+(n-m))
J.bd(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=C.cd(new Uint8Array(a2*u),!1,a1,0)
try{B.c2S(a0.dy,a0.ay,a0.ch).blg(x,a3,0,a0.ch)}catch(l){}}else if(r===3){x=C.cd(new Uint8Array(a2*u),!1,a1,0)
try{B.c2S(a0.dy,a0.ay,a0.ch).blh(x,a3,0,a0.ch,a0.fr)}catch(l){}}else if(r===4){x=C.cd(new Uint8Array(a2*u),!1,a1,0)
try{B.c2S(a0.dy,a0.ay,a0.ch).blm(x,a3,0,a0.ch,a0.fx)}catch(l){}}else if(r===8)x=C.cd(D.n9.zV(a3.Ng(0,0,s)),!1,a1,0)
else if(r===32946)x=C.cd(D.n9.zV(a3.Ng(0,0,s)),!1,a1,0)
else if(r===1)x=a3
else throw C.i(C.bH("Unsupported Compression Type: "+r))
k=new B.bgP(x)
j=a4.gbq()
a2=a0.z
i=a2?j:0
h=a2?0:j
for(g=t,f=0;f<a0.ch;++f,++g){for(e=v,d=0;d<a0.ay;++d,++e){a2=a4.a
u=a2==null
r=u?a1:a2.b
if(g<(r==null?0:r)){a2=u?a1:a2.a
a2=e>=(a2==null?0:a2)}else a2=!0
if(a2)break
a2=k.hg(1)
u=a4.a
if(a2===0){if(u!=null)u.dB(e,g,i,0,0)}else if(u!=null)u.dB(e,g,h,0,0)}k.c=0}},
agR(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.c7(f),w=0,v=0;v<e;){u=w+1
t=J.A(d.a,d.d+w)
s=$.lM()
s.$flags&2&&C.u(s)
s[0]=t
r=$.mB()[0]
if(r>=0&&r<=127)for(t=r+1,w=u,q=0;q<t;++q,v=p,w=u){p=v+1
u=w+1
x.l(f,v,J.A(d.a,d.d+w))}else{t=r<=-1&&r>=-127
w=u+1
if(t){o=J.A(d.a,d.d+u)
for(t=-r+1,q=0;q<t;++q,v=p){p=v+1
x.l(f,v,o)}}}}},
Se(d,e){var x=this.a
if(!x.aE(d))return e
x=x.h(0,d).mK()
x=x==null?null:x.F(0)
return x==null?0:x},
CT(d){return this.Se(d,0)},
Sf(d){var x,w=this.a
if(!w.aE(d))return null
x=w.h(0,d)
w=x.mK()
w.toString
return C.zf(x.c,w.guU(w),!0,y.p)}}
B.Go.prototype={
H(){return"TiffFormat."+this.b}}
B.jd.prototype={
H(){return"TiffPhotometricType."+this.b}}
B.pw.prototype={
H(){return"TiffImageType."+this.b}}
B.bgS.prototype={
gbJ(){return this.a},
gaO(){return this.b}}
B.aVX.prototype={
atF(d,e){var x,w,v,u,t,s,r=this
r.r=e
x=J.aY(e)
r.w=0
w=y.D.a(d.a)
r.e=w
r.f=w.length
r.b=d.d
if(w[0]===0&&w[1]===1)throw C.i(C.bH("Invalid LZW Data"))
r.akh()
r.d=r.c=0
v=r.a1U()
w=r.x
u=0
for(;;){if(!(v!==257&&r.w<x))break
if(v===256){r.akh()
v=r.a1U()
r.as=0
if(v===257)break
J.bd(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.aj1(v)
t=r.as
t===$&&C.b()
s=t-1
for(;s>=0;--s)J.bd(r.r,r.w++,w[s])
r.aeq(u,w[r.as-1])}else{r.aj1(u)
t=r.as
t===$&&C.b()
s=t-1
for(;s>=0;--s)J.bd(r.r,r.w++,w[s])
J.bd(r.r,r.w++,w[r.as-1])
r.aeq(u,w[r.as-1])}u=v}v=r.a1U()}},
aeq(d,e){var x,w=this,v=w.y
v===$&&C.b()
x=w.Q
x.toString
v.$flags&2&&C.u(v)
v[x]=e
v=w.z
v===$&&C.b()
v.$flags&2&&C.u(v)
v[x]=d
x=w.Q=x+1
if(x===511)w.a=10
else if(x===1023)w.a=11
else if(x===2047)w.a=12},
aj1(d){var x,w,v,u,t,s,r=this
r.as=0
x=r.x
r.as=1
w=r.y
w===$&&C.b()
v=w[d]
x.$flags&2&&C.u(x)
x[0]=v
v=r.z
v===$&&C.b()
u=v[d]
for(t=1;u!==4098;t=s){s=t+1
r.as=s
x[t]=w[u]
u=v[u]}},
a1U(){var x,w,v,u,t=this,s=t.b,r=t.f
r===$&&C.b()
if(s>=r)return 257
for(;x=t.d,w=t.a,x<w;s=u){if(s>=r)return 257
w=t.c
v=t.e
v===$&&C.b()
u=s+1
t.b=u
t.c=(w<<8>>>0)+v[s]>>>0
t.d=x+8}s=x-w
t.d=s
return D.f.eb(t.c,s)&A.eyr[w-9]},
akh(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.bK.fu(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&C.u(x)
x[w]=w}v.a=9
v.Q=258}}
B.bgQ.prototype={
iM(d){var x=this,w=C.cd(d,!1,null,0)
x.c=w
w=x.a3Q(w)
x.a=w
if(w!=null)x.b=B.c0O(C.cd(d,!1,null,0))
return x.a},
i2(d){var x,w,v=this.a
if(v==null)return null
v=v.f[d]
x=this.c
x===$&&C.b()
w=v.bP(x)
v=this.b
if(v!=null)w.e=v
return w},
mm(d,e){var x=this,w=C.cd(d,!1,null,0)
x.c=w
w=x.a3Q(w)
x.a=w
if(w==null)return null
return x.i2(0)},
a3Q(d){var x,w,v,u,t,s,r,q,p,o=null,n=C.c([],y.L),m=new B.bgS(n),l=d.ad()
if(l!==18761&&l!==19789)return o
if(l===19789)d.e=!0
else d.e=!1
v=d.ad()
m.d=v
if(v!==42)return o
u=d.Z()
t=C.bP(d,o,0)
t.d=u
x=t
for(v=y.p,s=y.j;u!==0;){w=null
try{r=new B.alH(C.D(v,s),A.G0,A.a6S,A.fts)
r.aLQ(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.Z()
if(u!==0)x.d=u}return n.length!==0?m:o}}
B.biC.prototype={
KO(){var x,w,v=this.a,u=v.pl()
if((u&1)!==0)return!1
if((u>>>1&7)>3)return!1
x=u>>>4&1
if(x===0)return!1
w=this.f
w.c=x
w.d=u>>>5
if(v.pl()!==2752925)return!1
x=this.b
x.a=v.ad()
x.b=v.ad()
return!0},
oK(){var x,w,v,u=this,t=null
if(!u.aVC())return t
x=u.b
w=x.a
u.d=C.fR(t,t,D.av,0,D.bO,x.b,t,0,4,t,D.av,w,!1)
u.b0T()
if(!u.b6p())return t
x=x.w
if(x.length!==0){v=C.cd(new C.bG(x),!1,t,0)
x=u.d
x.toString
x.e=B.c0O(v)}return u.d},
aVC(){var x,w,v,u,t=this
if(!t.KO())return!1
t.fr=B.cyV()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new B.aml(v,u,new Int32Array(2))}x=t.r
v=t.b
u=x.a=v.a
v=x.b=v.b
t.y=t.Q=0
t.z=u
t.as=v
t.at=u+15>>>4
t.ax=v+15>>>4
t.k1=0
v=t.a
u=t.f
x=u.d
x===$&&C.b()
x=B.cee(v.hB(x))
t.c=x
v.d+=u.d
x.eh(1)
t.c.eh(1)
t.b6y(t.x,t.fr)
t.b6o()
if(!t.b6t(v))return!1
t.b6v()
t.c.eh(1)
t.b6u()
return!0},
b6y(d,e){var x,w,v,u=this,t=u.c
t===$&&C.b()
t=t.eh(1)!==0
d.a=t
if(t){d.b=u.c.eh(1)!==0
if(u.c.eh(1)!==0){d.c=u.c.eh(1)!==0
for(t=d.d,x=0;x<4;++x){if(u.c.eh(1)!==0){w=u.c
v=w.eh(7)
w=w.eh(1)===1?-v:v}else w=0
t.$flags&2&&C.u(t)
t[x]=w}for(t=d.e,x=0;x<4;++x){if(u.c.eh(1)!==0){w=u.c
v=w.eh(6)
w=w.eh(1)===1?-v:v}else w=0
t.$flags&2&&C.u(t)
t[x]=w}}if(d.b)for(x=0;x<3;++x){t=e.a
w=u.c.eh(1)!==0?u.c.eh(8):255
t.$flags&2&&C.u(t)
t[x]=w}}else d.b=!1
return!0},
b6o(){var x,w,v,u=this,t=u.w,s=u.c
s===$&&C.b()
t.a=s.eh(1)!==0
t.b=u.c.eh(6)
t.c=u.c.eh(3)
s=u.c.eh(1)!==0
t.d=s
if(s)if(u.c.eh(1)!==0){for(s=t.e,x=0;x<4;++x)if(u.c.eh(1)!==0){w=u.c
v=w.eh(6)
w=w.eh(1)===1?-v:v
s.$flags&2&&C.u(s)
s[x]=w}for(s=t.f,x=0;x<4;++x)if(u.c.eh(1)!==0){w=u.c
v=w.eh(6)
w=w.eh(1)===1?-v:v
s.$flags&2&&C.u(s)
s[x]=w}}if(t.b===0)s=0
else s=t.a?1:2
u.b6=s
return!0},
b6t(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&C.b()
p=D.f.cN(1,p.eh(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.Pa(3,v)
s=w+((J.A(t.a,t.d)|J.A(t.a,t.d+1)<<8|J.A(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new B.a_P(d.yq(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=B.cee(d.yq(q-w,d.d-d.b+w))
return w<q},
b6v(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&C.b()
x=h.eh(7)
w=i.c.eh(1)!==0?i.c.Gn(4):0
v=i.c.eh(1)!==0?i.c.Gn(4):0
u=i.c.eh(1)!==0?i.c.Gn(4):0
t=i.c.eh(1)!==0?i.c.Gn(4):0
s=i.c.eh(1)!==0?i.c.Gn(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
j=A.Dx[j]
k.$flags&2&&C.u(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=A.Dy[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=A.Dx[k]
j.$flags&2&&C.u(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=A.Dy[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=A.Dx[j]
k.$flags&2&&C.u(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=A.Dy[j]}},
b6u(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&C.b()
s=t.fA(A.eYm[x][w][v][u])!==0?r.c.eh(8):A.exS[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&C.u(t)
t[u]=s}t=r.c
t===$&&C.b()
t=t.eh(1)!==0
r.fx=t
if(t)r.fy=r.c.eh(8)},
b7G(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.b6
k.toString
if(k>0){x=l.w
for(k=x.e,w=x.f,v=l.x,u=v.e,t=0;t<4;++t){if(v.a){s=u[t]
if(!v.c){r=x.b
r.toString
s+=r}}else s=x.b
for(q=0;q<=1;++q){r=l.D
r===$&&C.b()
p=r[t][q]
r=x.d
r===$&&C.b()
if(r){s.toString
o=s+k[0]
if(q!==0)o+=w[0]}else o=s
o.toString
if(o<0)o=0
else if(o>63)o=63
if(o>0){r=x.c
r===$&&C.b()
if(r>0){n=r>4?D.f.R(o,2):D.f.R(o,1)
m=9-r
if(n>m)n=m}else n=o
if(n<1)n=1
p.b=n
p.a=2*o+n
if(o>=40)r=2
else r=o>=15?1:0
p.d=r}else p.a=0
p.c=q!==0}}}},
b0T(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.a6=j
x=J.iH(4,y.K)
for(j=y.d,w=0;w<4;++w)x[w]=C.c([new B.Gy(),new B.Gy()],j)
m.D=x
j=m.at
j.toString
x=J.iH(j,y.bt)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new B.amm(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.b6
t.toString
s=A.CP[t]
r=s*u
q=(s/2|0)*j
m.p1=C.cd(new Uint8Array(16*u+r),!1,l,r)
j=m.R8
j.toString
m.p2=C.cd(new Uint8Array(8*j+q),!1,l,q)
j=m.R8
j.toString
m.p3=C.cd(new Uint8Array(8*j+q),!1,l,q)
j=k.a
m.RG=C.cd(new Uint8Array(j),!1,l,0)
p=k.a+1>>>1
m.rx=C.cd(new Uint8Array(p),!1,l,0)
m.ry=C.cd(new Uint8Array(p),!1,l,0)
k=m.b6
k.toString
o=A.CP[k]
if(k===2)m.ch=m.ay=0
else{k=m.y
k===$&&C.b()
k=D.f.av(k-o,16)
m.ay=k
j=m.Q
j.toString
j=D.f.av(j-o,16)
m.ch=j
if(k<0)m.ay=0
if(j<0)m.ch=0}k=m.as
k.toString
k=D.f.av(k+15+o,16)
m.cx=k
j=m.z
j===$&&C.b()
j=D.f.av(j+15+o,16)
m.CW=j
u=m.at
u.toString
if(j>u)m.CW=u
j=m.ax
j.toString
if(k>j)m.cx=j
n=u+1
x=J.iH(n,y.q)
for(v=0;v<n;++v)x[v]=new B.amj()
m.k3=x
k=m.at
k.toString
x=J.iH(k,y._)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new B.amk(j,new Uint8Array(16))}m.b8=x
k=m.at
k.toString
m.k4=C.bm(k,l,!1,y.B)
m.b7G()
B.cym()
m.e=new B.biD()
return!0},
b6p(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.y2=0
x=j.id
w=j.x
v=j.db
u=0
for(;;){t=j.cx
t.toString
if(!(u<t))break
t=j.cy
t===$&&C.b()
s=v[(u&t-1)>>>0]
for(;;){u=j.y1
t=j.at
t.toString
if(!(u<t))break
t=j.k3
t===$&&C.b()
r=t[0]
q=t[1+u]
t=j.b8
t===$&&C.b()
p=t[u]
if(w.b){u=j.c
u===$&&C.b()
u=u.fA(j.fr.a[0])
t=j.c
o=j.fr
j.k1=u===0?t.fA(o.a[1]):2+t.fA(o.a[2])}u=j.fx
u===$&&C.b()
if(u){u=j.c
u===$&&C.b()
t=j.fy
t===$&&C.b()
n=u.fA(t)!==0}else n=!1
j.b6s()
if(!n)n=j.b6w(q,s)
else{r.a=q.a=0
u=p.b
u===$&&C.b()
if(!u)r.b=q.b=0
p.f=p.e=0}u=j.b6
u.toString
if(u>0){u=j.k4
u===$&&C.b()
t=j.y1
o=j.D
o===$&&C.b()
m=j.k1
m===$&&C.b()
m=o[m]
o=p.b
o===$&&C.b()
l=m[o?1:0]
u[t]=l
l.c=l.c||!n}++j.y1}u=j.k3
u===$&&C.b()
u=u[0]
u.b=u.a=0
D.K.fu(x,0,4,0)
j.y1=0
j.b8N()
u=j.b6
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&C.b()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.aUz(k))return!1
u=++j.y2}return!0},
b8N(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.y2,a5=a2.ok
a5===$&&C.b()
x=C.cd(a5,!1,a3,40)
w=C.cd(a2.ok,!1,a3,584)
v=C.cd(a2.ok,!1,a3,600)
a5=a4>0
u=0
for(;;){t=a2.at
t.toString
if(!(u<t))break
t=a2.b8
t===$&&C.b()
s=t[u]
if(u>0){for(r=-1;r<16;++r){t=r*32
x.pb(t-4,4,x,t+12)}for(r=-1;r<8;++r){t=r*32
q=t-4
t+=4
w.pb(q,4,w,t)
v.pb(q,4,v,t)}}else{for(r=0;r<16;++r)J.bd(x.a,x.d+(r*32-1),129)
for(r=0;r<8;++r){t=r*32-1
J.bd(w.a,w.d+t,129)
J.bd(v.a,v.d+t,129)}if(a5){J.bd(v.a,v.d+-33,129)
J.bd(w.a,w.d+-33,129)
J.bd(x.a,x.d+-33,129)}}t=a2.k2
t===$&&C.b()
p=t[u]
o=s.a
n=s.e
if(a5){x.xd(-32,16,p.a)
w.xd(-32,8,p.b)
v.xd(-32,8,p.c)}else if(u===0){t=x.a
q=x.d+-33
J.rB(t,q,q+21,127)
q=w.a
t=w.d+-33
J.rB(q,t,t+9,127)
t=v.a
q=v.d+-33
J.rB(t,q,q+9,127)}t=s.b
t===$&&C.b()
if(t){m=C.bP(x,a3,-16)
l=m.Nm()
if(a5){t=a2.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.rB(q,k,k+4,t)}else m.xd(0,4,a2.k2[u+1].a)}j=l[0]
l.$flags&2&&C.u(l)
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=C.bP(x,a3,A.UC[i])
A.eQr[t[i]].$1(h)
n.toString
q=i*16
a2.ahj(n,new C.kJ(o,q,Math.min(384,384),q,!1),h)}}else{t=B.ceh(u,a4,s.c[0])
t.toString
A.f3A[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=C.bP(x,a3,A.UC[i])
n.toString
t=i*16
a2.ahj(n,new C.kJ(o,t,Math.min(384,384),t,!1),h)}}t=s.f
t===$&&C.b()
q=B.ceh(u,a4,s.d)
q.toString
A.TV[q].$1(w)
A.TV[q].$1(v)
q=Math.min(384,384)
g=new C.kJ(o,256,q,256,!1)
if((t&255)!==0){k=a2.e
if((t&170)!==0){k===$&&C.b()
k.t5(g,w)
k.t5(C.bP(g,a3,16),C.bP(w,a3,4))
f=C.bP(g,a3,32)
e=C.bP(w,a3,128)
k.t5(f,e)
k.t5(C.bP(f,a3,16),C.bP(e,a3,4))}else{k===$&&C.b()
k.azF(g,w)}}d=new C.kJ(o,320,q,320,!1)
t=t>>>8
if((t&255)!==0){q=a2.e
if((t&170)!==0){q===$&&C.b()
q.t5(d,v)
q.t5(C.bP(d,a3,16),C.bP(v,a3,4))
t=C.bP(d,a3,32)
k=C.bP(v,a3,128)
q.t5(t,k)
q.t5(C.bP(t,a3,16),C.bP(k,a3,4))}else{q===$&&C.b()
q.azF(d,v)}}t=a2.ax
t.toString
if(a4<t-1){D.K.cB(p.a,0,16,x.eM(),480)
D.K.cB(p.b,0,8,w.eM(),224)
D.K.cB(p.c,0,8,v.eM(),224)}a0=u*16
a1=u*8
for(r=0;r<16;++r){t=a2.p4
t.toString
q=a2.p1
q===$&&C.b()
q.pb(a0+r*t,16,x,r*32)}for(r=0;r<8;++r){t=a2.R8
t.toString
q=a2.p2
q===$&&C.b()
k=r*32
q.pb(a1+r*t,8,w,k)
t=a2.R8
t.toString
q=a2.p3
q===$&&C.b()
q.pb(a1+r*t,8,v,k)}++u}},
ahj(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&C.b()
x.Bo(e,f,!1)
break
case 2:this.e===$&&C.b()
w=J.A(e.a,e.d)+4
v=D.f.iH(D.f.R(J.A(e.a,e.d+4)*35468,16),32)
u=D.f.iH(D.f.R(J.A(e.a,e.d+4)*85627,16),32)
t=D.f.iH(D.f.R(J.A(e.a,e.d+1)*35468,16),32)
s=D.f.iH(D.f.R(J.A(e.a,e.d+1)*85627,16),32)
B.biF(f,0,w+u,s,t)
B.biF(f,1,w+v,s,t)
B.biF(f,2,w-v,s,t)
B.biF(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&C.b()
x.Nn(e,f)
break
default:break}},
aSL(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
j===$&&C.b()
j=j[d]
j.toString
x=m.p1
x===$&&C.b()
w=C.bP(x,l,d*16)
v=j.b
u=j.a
if(u===0)return
if(m.b6===1){if(d>0){x=m.e
x===$&&C.b()
k.toString
x.acF(w,k,u+4)}if(j.c){x=m.e
x===$&&C.b()
k.toString
x.aEm(w,k,u)}if(e>0){x=m.e
x===$&&C.b()
k.toString
x.acG(w,k,u+4)}if(j.c){j=m.e
j===$&&C.b()
k.toString
j.aEn(w,k,u)}}else{t=m.R8
x=m.p2
x===$&&C.b()
s=d*8
r=C.bP(x,l,s)
x=m.p3
x===$&&C.b()
q=C.bP(x,l,s)
p=j.d
if(d>0){x=m.e
x===$&&C.b()
k.toString
s=u+4
x.Cv(w,1,k,16,s,v,p)
t.toString
x.Cv(r,1,t,8,s,v,p)
x.Cv(q,1,t,8,s,v,p)}if(j.c){x=m.e
x===$&&C.b()
k.toString
x.bnR(w,k,u,v,p)
t.toString
o=C.bP(r,l,4)
n=C.bP(q,l,4)
x.Cu(o,1,t,8,u,v,p)
x.Cu(n,1,t,8,u,v,p)}if(e>0){x=m.e
x===$&&C.b()
k.toString
s=u+4
x.Cv(w,k,1,16,s,v,p)
t.toString
x.Cv(r,t,1,8,s,v,p)
x.Cv(q,t,1,8,s,v,p)}if(j.c){j=m.e
j===$&&C.b()
k.toString
j.byb(w,k,u,v,p)
t.toString
x=4*t
o=C.bP(r,l,x)
n=C.bP(q,l,x)
j.Cu(o,t,1,8,u,v,p)
j.Cu(n,t,1,8,u,v,p)}}},
aUb(){var x,w=this,v=w.ay
v===$&&C.b()
x=v
for(;;){v=w.CW
v.toString
if(!(x<v))break
w.aSL(x,w.y2);++x}},
aUz(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b6
e.toString
x=A.CP[e]
e=g.p4
e.toString
w=x*e
e=g.R8
e.toString
v=(x/2|0)*e
e=g.p1
e===$&&C.b()
u=-w
t=C.bP(e,f,u)
e=g.p2
e===$&&C.b()
s=-v
r=C.bP(e,f,s)
e=g.p3
e===$&&C.b()
q=C.bP(e,f,s)
p=g.y2
e=g.cx
e.toString
o=p*16
n=(p+1)*16
if(d)g.aUb()
if(p!==0){o-=x
g.to=C.bP(t,f,0)
g.x1=C.bP(r,f,0)
g.x2=C.bP(q,f,0)}else{g.to=C.bP(g.p1,f,0)
g.x1=C.bP(g.p2,f,0)
g.x2=C.bP(g.p3,f,0)}e=p<e-1
if(e)n-=x
m=g.as
m.toString
if(n>m)n=m
g.xr=null
if(g.a6!=null&&o<n){m=g.xr=g.aRF(o,n-o)
if(m==null)return!1}else m=f
l=g.Q
l.toString
if(o<l){k=l-o
j=g.to
j===$&&C.b()
i=j.d
h=g.p4
h.toString
j.d=i+h*k
h=g.x1
h===$&&C.b()
i=h.d
j=g.R8
j.toString
j*=D.f.R(k,1)
h.d=i+j
i=g.x2
i===$&&C.b()
i.d+=j
if(m!=null)m.d=m.d+g.b.a*k
o=l}if(o<n){j=g.to
j===$&&C.b()
i=j.d
h=g.y
h===$&&C.b()
j.d=i+h
i=g.x1
i===$&&C.b()
j=h>>>1
i.d=i.d+j
i=g.x2
i===$&&C.b()
i.d+=j
if(m!=null)m.d+=h
m=g.z
m===$&&C.b()
g.b8_(o-l,m-h,n-o)}if(e){e=g.p1
m=g.p4
m.toString
e.pb(u,w,t,16*m)
m=g.p2
u=g.R8
u.toString
m.pb(s,v,r,8*u)
u=g.p3
m=g.R8
m.toString
u.pb(s,v,q,8*m)}return!0},
b8_(d,e,f){if(e<=0||f<=0)return!1
this.aTr(d,e,f)
this.aTq(d,e,f)
return!0},
a0t(d){var x
if((d&-4194304)>>>0===0)x=D.f.R(d,14)
else x=d<0?0:255
return x},
TG(d,e,f,g){var x=19077*d
g.l(0,0,this.a0t(x+26149*f+-3644112))
g.l(0,1,this.a0t(x-6419*e-13320*f+2229552))
g.l(0,2,this.a0t(x+33050*e+-4527440))},
Tj(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new B.biP(),a0=b3-1,a1=D.f.R(a0,1),a2=d.$2(J.A(a7.a,a7.d),J.A(a8.a,a8.d)),a3=d.$2(J.A(a9.a,a9.d),J.A(b0.a,b0.d)),a4=D.f.R(3*a2+a3+131074,2)
f.TG(J.A(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.l(0,3,255)
x=a6!=null
if(x){a4=D.f.R(3*a3+a2+131074,2)
w=J.A(a6.a,a6.d)
b2.toString
f.TG(w,a4&255,a4>>>16,b2)
b2.l(0,3,255)}for(v=1;v<=a1;++v,a3=t,a2=u){u=d.$2(J.A(a7.a,a7.d+v),J.A(a8.a,a8.d+v))
t=d.$2(J.A(a9.a,a9.d+v),J.A(b0.a,b0.d+v))
s=a2+u+a3+t+524296
r=D.f.R(s+2*(u+a3),3)
q=D.f.R(s+2*(a2+t),3)
a4=D.f.R(r+a2,1)
p=D.f.R(q+u,1)
w=2*v
o=w-1
n=J.A(a5.a,a5.d+o)
m=a4&255
l=a4>>>16
k=o*4
j=C.bP(b1,e,k)
n=19077*n
i=n+26149*l+-3644112
if((i&-4194304)>>>0===0)h=D.f.R(i,14)
else h=i<0?0:255
J.bd(j.a,j.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.f.R(l,14)
else h=l<0?0:255
J.bd(j.a,j.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.f.R(n,14)
else h=n<0?0:255
J.bd(j.a,j.d+2,h)
J.bd(j.a,j.d+3,255)
n=J.A(a5.a,a5.d+w)
m=p&255
l=p>>>16
j=w*4
i=C.bP(b1,e,j)
n=19077*n
g=n+26149*l+-3644112
if((g&-4194304)>>>0===0)h=D.f.R(g,14)
else h=g<0?0:255
J.bd(i.a,i.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.f.R(l,14)
else h=l<0?0:255
J.bd(i.a,i.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.f.R(n,14)
else h=n<0?0:255
J.bd(i.a,i.d+2,h)
J.bd(i.a,i.d+3,255)
if(x){a4=D.f.R(q+a3,1)
p=D.f.R(r+t,1)
o=J.A(a6.a,a6.d+o)
n=a4&255
m=a4>>>16
b2.toString
k=C.bP(b2,e,k)
o=19077*o
l=o+26149*m+-3644112
if((l&-4194304)>>>0===0)h=D.f.R(l,14)
else h=l<0?0:255
J.bd(k.a,k.d,h)
m=o-6419*n-13320*m+2229552
if((m&-4194304)>>>0===0)h=D.f.R(m,14)
else h=m<0?0:255
J.bd(k.a,k.d+1,h)
o=o+33050*n+-4527440
if((o&-4194304)>>>0===0)h=D.f.R(o,14)
else h=o<0?0:255
J.bd(k.a,k.d+2,h)
J.bd(k.a,k.d+3,255)
w=J.A(a6.a,a6.d+w)
o=p&255
n=p>>>16
j=C.bP(b2,e,j)
w=19077*w
m=w+26149*n+-3644112
if((m&-4194304)>>>0===0)h=D.f.R(m,14)
else h=m<0?0:255
J.bd(j.a,j.d,h)
n=w-6419*o-13320*n+2229552
if((n&-4194304)>>>0===0)h=D.f.R(n,14)
else h=n<0?0:255
J.bd(j.a,j.d+1,h)
w=w+33050*o+-4527440
if((w&-4194304)>>>0===0)h=D.f.R(w,14)
else h=w<0?0:255
J.bd(j.a,j.d+2,h)
J.bd(j.a,j.d+3,255)}}if((b3&1)===0){a4=D.f.R(3*a2+a3+131074,2)
w=J.A(a5.a,a5.d+a0)
o=a0*4
n=C.bP(b1,e,o)
f.TG(w,a4&255,a4>>>16,n)
n.l(0,3,255)
if(x){a4=D.f.R(3*a3+a2+131074,2)
a0=J.A(a6.a,a6.d+a0)
b2.toString
o=C.bP(b2,e,o)
f.TG(a0,a4&255,a4>>>16,o)
o.l(0,3,255)}}},
aTq(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
if(o==null)return
x=C.bP(o,null,0)
if(d===0){w=f-1
v=d}else{v=d-1
x.d=x.d-p.b.a
w=f}o=p.Q
o.toString
u=p.as
if(o+d+f===u){u.toString
w=u-o-v}for(o=p.b,t=0;t<w;++t){for(u=t+v,s=0;s<e;++s){r=J.A(x.a,x.d+s)
q=p.d.a
q=q==null?null:q.cD(s,u,null);(q==null?new C.eo():q).san(r)}x.d=x.d+o.a}},
aTr(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=C.cd(J.cl(l.d.ga5(0),0,null),!1,k,d*j.a*4),h=l.to
h===$&&C.b()
x=C.bP(h,k,0)
h=l.x1
h===$&&C.b()
w=C.bP(h,k,0)
h=l.x2
h===$&&C.b()
v=C.bP(h,k,0)
u=d+f
t=D.f.R(e+1,1)
s=j.a*4
j=l.rx
j===$&&C.b()
r=C.bP(j,k,0)
j=l.ry
j===$&&C.b()
q=C.bP(j,k,0)
if(d===0){l.Tj(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&C.b()
l.Tj(j,x,r,q,w,v,C.bP(i,k,-s),i,e)
p=f+1}r.a=w.a
q.a=v.a
for(j=2*s,h=-s,o=d;o+=2,o<u;){r.d=w.d
q.d=v.d
n=w.d
m=l.R8
m.toString
w.d=n+m
v.d+=m
i.d+=j
m=x.d
n=l.p4
n.toString
x.d=m+2*n
l.Tj(C.bP(x,k,-n),x,r,q,w,v,C.bP(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
j=l.Q
j.toString
h=l.as
h.toString
if(j+u<h){j=l.RG
j===$&&C.b()
j.xd(0,e,x)
l.rx.xd(0,t,w)
l.ry.xd(0,t,v);--p}else if((u&1)===0)l.Tj(x,k,w,v,w,v,C.bP(i,k,s),k,e)
return p},
aRF(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.ab=new Uint8Array(n)
x=o.a6
w=new B.bjk(x,m,l)
v=x.bw()
u=w.d=v&3
w.e=D.f.R(v,2)&3
w.f=D.f.R(v,4)&3
w.r=D.f.R(v,6)&3
if(w.gcU())if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new B.amA(A.ti,C.c([],y.J))
t.a=m
t.b=l
n=C.c([],y.A)
u=C.c([],y.F)
s=new Uint32Array(2)
r=new B.amh(x,s)
s=r.d=J.cl(D.bK.ga5(s),0,null)
q=x.bw()
s.$flags&2&&C.u(s)
s[0]=q
q=x.bw()
s.$flags&2&&C.u(s)
s[1]=q
q=x.bw()
s.$flags&2&&C.u(s)
s[2]=q
q=x.bw()
s.$flags&2&&C.u(s)
s[3]=q
q=x.bw()
s.$flags&2&&C.u(s)
s[4]=q
q=x.bw()
s.$flags&2&&C.u(s)
s[5]=q
q=x.bw()
s.$flags&2&&C.u(s)
s[6]=q
x=x.bw()
s.$flags&2&&C.u(s)
s[7]=x
u=new B.af1(r,t,n,u)
u.db=m
w.x=u
u.HG(m,l,!0)
n=w.x
x=n.ax
if(x.length===1&&x[0].a===A.a7C&&n.b1l()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.cx=0
x=D.f.aC(p,4)
x=new Uint8Array(p+(4-x))
n.CW=x
n.ch=J.lO(D.K.ga5(x),0,null)}else{w.y=!1
w.x.aez()}}else w.r=1
o.a2=w}n=o.a2
n===$&&C.b()
if(!n.w){x=o.ab
x===$&&C.b()
if(!n.KM(d,e,x))return null}n=o.ab
n===$&&C.b()
return C.cd(n,!1,null,d*m)},
b6w(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&C.b()
x=a1.dy[a3]
a3=a1.b8
a3===$&&C.b()
w=a3[a1.y1]
v=C.cd(w.a,!1,null,0)
a3=a1.k3
a3===$&&C.b()
u=a3[0]
v.bs_(0,v.c-v.d,0)
a3=w.b
a3===$&&C.b()
if(!a3){t=C.cd(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.a1O(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.bey(t,v)
else{q=D.f.R(J.A(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.bd(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.a1O(a5,o,i+(m&1),x.a,n,v)
i=r>n?1:0
m=m>>>1|i<<7
a3=J.A(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=h<<2|a3
v.d+=16}m=m>>>4
l=l>>>1|i<<7
k=(k<<8|h)>>>0}f=l>>>4
for(e=m,d=0,a0=0;a0<4;a0+=2){a3=4+a0
m=D.f.fG(a4.a,a3)
l=D.f.fG(u.a,a3)
for(h=0,j=0;j<2;++j){i=l&1
for(g=0;g<2;++g){r=a1.a1O(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.A(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=(h<<2|a3)>>>0
v.d+=16}m=m>>>2
l=l>>>1|i<<5}d=(d|D.f.cN(h,4*a0))>>>0
e=(e|D.f.cN(m<<4>>>0,a0))>>>0
f=(f|D.f.cN(l&240,a0))>>>0}a4.a=e
u.a=f
w.e=k
w.f=d
if((d&43690)===0)x.toString
return(k|d)>>>0===0},
bey(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
for(x=0;x<4;++x){w=12+x
v=J.A(d.a,d.d+x)+J.A(d.a,d.d+w)
u=4+x
t=8+x
s=J.A(d.a,d.d+u)+J.A(d.a,d.d+t)
r=J.A(d.a,d.d+u)-J.A(d.a,d.d+t)
q=J.A(d.a,d.d+x)-J.A(d.a,d.d+w)
n[x]=v+s
n[t]=v-s
n[u]=q+r
n[w]=q-r}for(p=0,x=0;x<4;++x){w=x*4
o=n[w]+3
u=n[3+w]
v=o+u
t=n[1+w]
w=n[2+w]
s=t+w
r=t-w
q=o-u
u=D.f.R(v+s,3)
J.bd(e.a,e.d+p,u)
u=D.f.R(q+r,3)
J.bd(e.a,e.d+(p+16),u)
u=D.f.R(v-s,3)
J.bd(e.a,e.d+(p+32),u)
u=D.f.R(q-r,3)
J.bd(e.a,e.d+(p+48),u)
p+=64}},
aVG(d,e){var x,w,v,u,t,s
if(d.fA(e[3])===0)x=d.fA(e[4])===0?2:3+d.fA(e[5])
else if(d.fA(e[6])===0)x=d.fA(e[7])===0?5+d.fA(159):7+2*d.fA(165)+d.fA(145)
else{w=d.fA(e[8])
v=2*w+d.fA(e[9+w])
u=A.eIX[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.fA(u[s])
x+=3+D.f.cN(8,v)}return x},
a1O(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.fA(p[0])===0)return h
while(d.fA(p[1])===0){++h
p=e[A.Uo[h]].a[0]
if(h===16)return 16}x=h+1
w=e[A.Uo[x]].a
if(d.fA(p[2])===0){p=w[1]
v=1}else{v=this.aVG(d,p)
p=w[2]}u=A.ePv[h]
t=d.b
t===$&&C.b()
s=d.aeZ(D.f.R(t,1))
t=d.b
r=A.Ue[t]
d.b=A.Ud[t]
t=d.d
t===$&&C.b()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.bd(i.a,i.d+u,t*q)}return 16},
b6s(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.b8
j===$&&C.b()
x=j[n]
n=o.c
n===$&&C.b()
n=n.fA(145)===0
x.b=n
if(!n){if(o.c.fA(156)!==0)w=o.c.fA(128)!==0?1:3
else w=o.c.fA(163)!==0?2:0
n=x.c
n.$flags&2&&C.u(n)
n[0]=w
l.toString
D.K.fu(l,m,m+4,w)
D.K.fu(k,0,4,w)}else{v=x.c
for(n=k.$flags|0,u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){j=m+s
r=A.ePJ[l[j]][w]
q=A.U5[o.c.fA(r[0])]
while(q>0)q=A.U5[2*q+o.c.fA(r[q])]
w=-q
l.$flags&2&&C.u(l)
l[j]=w}p=u+4
l.toString
D.K.cB(v,u,p,l,m)
n&2&&C.u(k)
k[t]=w}}if(o.c.fA(142)===0)n=0
else if(o.c.fA(114)===0)n=2
else n=o.c.fA(183)!==0?1:3
x.d=n}}
B.a_P.prototype={
eh(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.f.cE(this.fA(128),w))>>>0
return x},
Gn(d){var x=this.eh(d)
return this.eh(1)===1?-x:x},
fA(d){var x,w=this,v=w.b
v===$&&C.b()
x=w.aeZ(D.f.R(v*d,8))
if(w.b<=126)w.bbQ()
return x},
aeZ(d){var x,w,v,u,t,s=this,r=s.d
r===$&&C.b()
if(r<0){x=s.a
w=x.c
v=x.d
if(w-v>=1){u=x.bw()
r=s.c
r===$&&C.b()
s.c=(u|r<<8)>>>0
r=s.d+8
s.d=r
t=r}else{if(v<w){r=x.bw()
x=s.c
x===$&&C.b()
s.c=(r|x<<8)>>>0
x=s.d+8
s.d=x
r=x}else if(!s.e){x=s.c
x===$&&C.b()
s.c=x<<8>>>0
r+=8
s.d=r
s.e=!0}t=r}}else t=r
r=s.c
r===$&&C.b()
if(D.f.j7(r,t)>d){x=s.b
x===$&&C.b()
w=d+1
s.b=x-w
s.c=r-D.f.cE(w,t)
return 1}else{s.b=d
return 0}},
bbQ(){var x,w=this,v=w.b
v===$&&C.b()
x=A.Ue[v]
w.b=A.Ud[v]
v=w.d
v===$&&C.b()
w.d=v-x}}
B.biD.prototype={
acG(d,e,f){var x,w=C.bP(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.al9(w,e,f))this.Ql(w,e)}},
acF(d,e,f){var x,w=C.bP(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.al9(w,1,f))this.Ql(w,1)}},
aEn(d,e,f){var x,w,v=C.bP(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.acG(v,e,f)}},
aEm(d,e,f){var x,w=C.bP(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.acF(w,e,f)}},
byb(d,e,f,g,h){var x,w,v=C.bP(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.Cu(v,e,1,16,f,g,h)}},
bnR(d,e,f,g,h){var x,w=C.bP(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.Cu(w,1,e,16,f,g,h)}},
Cv(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.bP(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.ala(h,e,a0,a1))if(this.ak1(h,e,a2))this.Ql(h,e)
else{s=J.A(h.a,h.d+x)
r=J.A(h.a,h.d+w)
q=J.A(h.a,h.d+v)
p=J.A(h.a,h.d)
o=J.A(h.a,h.d+e)
n=J.A(h.a,h.d+u)
m=$.c__()
l=m[1020+3*(p-q)+m[1020+r-o]]
m=D.f.R(27*l+63,7)
k=(m&2147483647)-((m&2147483648)>>>0)
m=D.f.R(18*l+63,7)
j=(m&2147483647)-((m&2147483648)>>>0)
m=D.f.R(9*l+63,7)
i=(m&2147483647)-((m&2147483648)>>>0)
m=$.nx()[255+s+i]
J.bd(h.a,h.d+x,m)
m=$.nx()[255+r+j]
J.bd(h.a,h.d+w,m)
m=$.nx()[255+q+k]
J.bd(h.a,h.d+v,m)
m=$.nx()[255+p-k]
J.bd(h.a,h.d,m)
m=$.nx()[255+o-j]
J.bd(h.a,h.d+e,m)
m=$.nx()[255+n-i]
J.bd(h.a,h.d+u,m)}h.d+=f}},
Cu(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=C.bP(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.ala(k,e,h,i))if(this.ak1(k,e,j))this.Ql(k,e)
else{u=J.A(k.a,k.d+x)
t=J.A(k.a,k.d+w)
s=J.A(k.a,k.d)
r=J.A(k.a,k.d+e)
q=3*(s-t)
p=$.c_0()
o=D.f.R(q+4,3)
n=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.f.R(q+3,3)
m=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.f.R(n+1,1)
l=(o&2147483647)-((o&2147483648)>>>0)
o=$.nx()[255+u+l]
J.bd(k.a,k.d+x,o)
o=$.nx()[255+t+m]
J.bd(k.a,k.d+w,o)
o=$.nx()[255+s-n]
J.bd(k.a,k.d,o)
o=$.nx()[255+r-l]
J.bd(k.a,k.d+e,o)}k.d+=f}},
Ql(d,e){var x=J.A(d.a,d.d+-2*e),w=-e,v=J.A(d.a,d.d+w),u=J.A(d.a,d.d),t=J.A(d.a,d.d+e),s=3*(u-v)+$.c__()[1020+x-t],r=$.c_0(),q=r[112+D.f.iH(D.f.R(s+4,3),32)],p=r[112+D.f.iH(D.f.R(s+3,3),32)]
d.l(0,w,$.nx()[255+v+p])
d.l(0,0,$.nx()[255+u-q])},
ak1(d,e,f){var x=J.A(d.a,d.d+-2*e),w=J.A(d.a,d.d+-e),v=J.A(d.a,d.d),u=J.A(d.a,d.d+e),t=$.aBm()
return t[255+x-w]>f||t[255+u-v]>f},
al9(d,e,f){var x=J.A(d.a,d.d+-2*e),w=J.A(d.a,d.d+-e),v=J.A(d.a,d.d),u=J.A(d.a,d.d+e)
return 2*$.aBm()[255+w-v]+$.bZZ()[255+x-u]<=f},
ala(d,e,f,g){var x=J.A(d.a,d.d+-4*e),w=J.A(d.a,d.d+-3*e),v=J.A(d.a,d.d+-2*e),u=J.A(d.a,d.d+-e),t=J.A(d.a,d.d),s=J.A(d.a,d.d+e),r=J.A(d.a,d.d+2*e),q=J.A(d.a,d.d+3*e),p=$.aBm(),o=255+v
if(2*p[255+u-t]+$.bZZ()[o-s]>f)return!1
return p[255+x-w]<=g&&p[255+w-v]<=g&&p[o-u]<=g&&p[255+q-r]<=g&&p[255+r-s]<=g&&p[255+s-t]<=g},
t5(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
for(x=0,w=0,v=0;v<4;++v){u=x+8
t=J.A(d.a,d.d+x)+J.A(d.a,d.d+u)
s=J.A(d.a,d.d+x)-J.A(d.a,d.d+u)
u=x+4
r=D.f.R(J.A(d.a,d.d+u)*35468,16)
q=x+12
p=D.f.R(J.A(d.a,d.d+q)*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.f.R(J.A(d.a,d.d+u)*85627,16)
q=D.f.R(J.A(d.a,d.d+q)*35468,16)
n=(u&2147483647)-((u&2147483648)>>>0)+((q&2147483647)-((q&2147483648)>>>0))
m=w+1
j[w]=t+n
w=m+1
j[m]=s+o
m=w+1
j[w]=s-o
w=m+1
j[m]=t-n;++x}for(l=0,w=0,v=0;v<4;++v){k=j[w]+4
u=j[w+8]
t=k+u
s=k-u
u=j[w+4]
r=D.f.R(u*35468,16)
q=j[w+12]
p=D.f.R(q*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.f.R(u*85627,16)
q=D.f.R(q*35468,16)
n=(u&2147483647)-((u&2147483648)>>>0)+((q&2147483647)-((q&2147483648)>>>0))
B.AX(e,l,0,0,t+n)
B.AX(e,l,1,0,s+o)
B.AX(e,l,2,0,s-o)
B.AX(e,l,3,0,t-n);++w
l+=32}},
Bo(d,e,f){this.t5(d,e)
if(f)this.t5(C.bP(d,null,16),C.bP(e,null,4))},
Nn(d,e){var x,w,v=J.A(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)B.AX(e,0,w,x,v)},
azF(d,e){var x=this,w=null
if(J.A(d.a,d.d)!==0)x.Nn(d,e)
if(J.A(d.a,d.d+16)!==0)x.Nn(C.bP(d,w,16),C.bP(e,w,4))
if(J.A(d.a,d.d+32)!==0)x.Nn(C.bP(d,w,32),C.bP(e,w,128))
if(J.A(d.a,d.d+48)!==0)x.Nn(C.bP(d,w,48),C.bP(e,w,132))}}
B.biI.prototype={
OZ(d){return this.c.$1$context(d)}}
B.biM.prototype={}
B.biO.prototype={}
B.a_O.prototype={}
B.biN.prototype={}
B.biE.prototype={}
B.Gy.prototype={}
B.amj.prototype={}
B.aml.prototype={}
B.amk.prototype={}
B.amm.prototype={}
B.a_Q.prototype={
KO(){var x,w=this.b
if(w.hg(8)!==47)return!1
x=this.c
x.f=A.yC
x.a=w.hg(14)+1
x.b=w.hg(14)+1
x.d=w.hg(1)!==0
if(w.hg(3)!==0)return!1
return!0},
oK(){var x,w,v,u,t,s=this,r=null
s.e=0
if(!s.KO())return r
x=s.c
s.HG(x.a,x.b,!0)
s.aez()
w=x.a
s.d=C.fR(r,r,D.av,0,D.bO,x.b,r,0,4,r,D.av,w,!1)
w=s.ch
w.toString
v=x.a
u=x.b
if(!s.a0T(w,v,u,u,s.gb7P()))return r
x=x.w
if(x.length!==0){t=C.cd(new C.bG(x),!1,r,0)
x=s.d
x.toString
x.e=B.c0O(t)}return s.d},
aez(){var x,w=this,v=w.c,u=v.a
v=u*v.b+u
x=new Uint32Array(v+u*16)
w.ch=x
w.CW=J.cl(D.bK.ga5(x),0,null)
w.cx=v
return!0},
b8E(d){var x,w,v,u=this,t=u.b,s=t.hg(2),r=u.ay,q=D.f.cN(1,s)
if((r&q)>>>0!==0)return!1
u.ay=(r|q)>>>0
x=new B.ami(A.a7B)
u.ax.push(x)
r=A.f0I[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.hg(3)+2
x.e=t
x.d=u.HG(B.AY(x.b,t),B.AY(x.c,x.e),!1)
break
case 3:w=t.hg(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=B.AY(x.b,v)
x.e=v
x.d=u.HG(w,1,!1)
u.aTT(w,x)
break
case 2:break}return!0},
HG(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.hg(1)!==0;){t=C.c([u,v],w)
if(!p.b8E(t))throw C.i(C.bH("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.hg(1)!==0){s=x.hg(4)
if(!(s>=1&&s<=11))throw C.i(C.bH("Invalid Color Cache"))}else s=0
if(!p.b8r(u,v,s,f))throw C.i(C.bH("Invalid Huffman Codes"))
if(s>0){x=D.f.cN(1,s)
p.r=x
p.w=new B.biJ(new Uint32Array(x),32-s)}else p.r=0
x=p.c
x.a=u
x.b=v
r=p.y
p.z=B.AY(u,r)
p.x=r===0?4294967295:D.f.cN(1,r)-1
if(f){p.e=0
return null}q=new Uint32Array(u*v)
if(!p.a0T(q,u,v,v,null))throw C.i(C.bH("Failed to decode image data."))
p.e=0
return q},
a0T(a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=a0.e,a2=D.f.eD(a1,a9),a3=D.f.aC(a1,a9),a4=a0.aiG(a3,a2),a5=a0.e,a6=a9*b0,a7=a9*b1
a1=a0.r
x=280+a1
w=a1>0?a0.w:null
v=a0.x
a1=a8.$flags|0
u=a0.b
t=b2!=null
s=a5
for(;;){r=u.b
q=r.c
if(!(!(r.d>=q&&u.a>=64)&&a5<a7))break
if((a3&v)>>>0===0){p=a0.Ie(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(u.a>=32)u.zq()
r=a4.a
o=r[0].xv(u)
n=0
if(o<256){m=r[1].xv(u)
if(u.a>=32)u.zq()
l=C.ciE(r[2].xv(u),o,m,r[3].xv(u))
a1&2&&C.u(a8)
a8[a5]=l;++a5;++a3
if(a3>=a9){++a2
if(D.f.aC(a2,16)===0&&t)b2.$1(a2)
if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.f.eb(j*506832829>>>0,r)
k&2&&C.u(q)
q[i]=j;++s}a3=n}}else if(o<280){h=a0.QN(o-256)
g=r[4].xv(u)
if(u.a>=32)u.zq()
f=a0.am2(a9,a0.QN(g))
if(a5<f||a6-a5<h)return!1
else{e=a5-f
for(d=0;d<h;++d){r=a8[e+d]
a1&2&&C.u(a8)
a8[a5+d]=r}a5+=h}a3+=h
while(a3>=a9){a3-=a9;++a2
if(D.f.aC(a2,16)===0&&t)b2.$1(a2)}if(a5<a7){if((a3&v)>>>0!==0){p=a0.Ie(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.f.eb(j*506832829>>>0,r)
k&2&&C.u(q)
q[i]=j;++s}}}else if(o<x){while(s<a5){r=a8[s]
i=D.f.eb(r*506832829>>>0,w.b)
q=w.a
q.$flags&2&&C.u(q)
q[i]=r;++s}r=w.a
q=r[o-280]
a1&2&&C.u(a8)
a8[a5]=q;++a5;++a3
if(a3>=a9){++a2
if(D.f.aC(a2,16)===0&&t)b2.$1(a2)
for(q=w.b,k=r.$flags|0;s<a5;){j=a8[s]
i=D.f.eb(j*506832829>>>0,q)
k&2&&C.u(r)
r[i]=j;++s}a3=n}}else return!1}if(t)b2.$1(a2)
if(r.d>=q&&u.a>=64&&a5<a6)return!1
a0.e=a5
return!0},
b1l(){var x,w,v,u
if(this.r>0)return!1
for(x=this.as,w=this.at,v=0;v<x;++v){u=w[v].a
if(u[1].f>1)return!1
if(u[2].f>1)return!1
if(u[3].f>1)return!1}return!0},
aU_(d){var x,w,v,u,t,s,r=this,q=r.f,p=d-q
if(p<=0)return
x=r.c
r.aeJ(p,x.a*q)
w=x.a
v=w*p
u=w*r.f
x=r.ch
x.toString
q=r.cx
q.toString
t=C.cd(x,!1,null,q)
for(s=0;s<v;++s){q=r.cy
q.toString
x=D.f.R(J.A(t.a,t.d+s),8)
q.$flags&2&&C.u(q)
q[u+s]=x&255}r.f=d},
aRj(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=o.e,m=D.f.eD(n,d),l=D.f.aC(n,d),k=o.aiG(l,m),j=o.e,i=d*e,h=d*f,g=o.x
n=o.b
for(;;){x=n.b
if(!(!(x.d>=x.c&&n.a>=64)&&j<h))break
if((l&g)>>>0===0){w=o.Ie(o.Q,o.z,o.y,l,m)
k=o.at[w]}if(n.a>=32)n.zq()
x=k.a
v=x[0].xv(n)
if(v<256){x=o.CW
x===$&&C.b()
x.$flags&2&&C.u(x)
x[j]=v;++j;++l
if(l>=d){++m
if(D.f.aC(m,16)===0)o.a1r(m)
l=0}}else if(v<280){u=o.QN(v-256)
t=x[4].xv(n)
if(n.a>=32)n.zq()
s=o.am2(d,o.QN(t))
if(j>=s&&i-j>=u)for(x=o.CW,r=0;r<u;++r){x===$&&C.b()
q=j+r
p=x[q-s]
x.$flags&2&&C.u(x)
x[q]=p}else{o.e=j
return!0}j+=u
l+=u
while(l>=d){l-=d;++m
if(D.f.aC(m,16)===0)o.a1r(m)}if(j<h&&(l&g)>>>0!==0){w=o.Ie(o.Q,o.z,o.y,l,m)
k=o.at[w]}}else return!1}o.a1r(m)
o.e=j
return!0},
a1r(d){var x,w,v,u=this,t=u.f,s=d-t,r=u.CW
r===$&&C.b()
x=C.cd(r,!1,null,u.c.a*t)
if(s>0){w=u.f
t=u.cy
t.toString
r=u.db
r.toString
v=C.cd(t,!1,null,r*w)
u.ax[0].biD(w,w+s,x,v)}u.f=d},
b7Q(d){var x,w,v,u,t,s=this,r=s.c,q=r.a,p=s.f,o=d-p
if(o<=0)return
s.aeJ(o,q*p)
q=s.cx
q.toString
x=s.f
w=q
v=0
for(;v<o;++v,++x)for(u=0;u<r.a;++u,++w){t=s.ch[w]
q=s.d.a
if(q!=null)q.ic(u,x,t>>>16&255,t>>>8&255,t&255,t>>>24&255)}s.f=d},
aeJ(d,e){var x,w,v,u=this,t=u.ax,s=t.length,r=u.c.a,q=u.f,p=q+d,o=u.cx
o.toString
x=u.ch
x.toString
D.bK.cB(x,o,o+r*d,x,e)
for(w=e;v=s-1,s>0;w=o,s=v){r=t[v]
x=u.ch
x.toString
r.bq2(q,p,x,w,x,o)}},
b8r(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=1
if(g&&l.b.hg(1)!==0){x=l.b.hg(3)+2
w=B.AY(d,x)
v=B.AY(e,x)
u=w*v
t=l.HG(w,v,!1)
l.y=x
for(s=0;s<u;++s){r=t[s]>>>8&65535
t.$flags&2&&C.u(t)
t[s]=r
if(r>=k)k=r+1}}else t=null
q=J.iH(k,y.f)
for(p=0;p<k;++p)q[p]=B.crV()
for(o=f>0,s=0;s<k;++s)for(n=0;n<5;++n){m=A.eMV[n]
if(n===0&&o)m+=D.f.cN(1,f)
if(!l.b8p(m,q[s].a[n]))return!1}l.Q=t
l.as=k
l.at=q
return!0},
b8p(d,e){var x,w,v,u,t,s,r,q,p,o=this.b
if(o.hg(1)!==0){x=y.t
w=C.c([0,0],x)
v=C.c([0,0],x)
u=C.c([0,0],x)
t=o.hg(1)+1
w[0]=o.hg(o.hg(1)===0?1:8)
v[0]=0
x=t-1
u[0]=x
if(t===2){w[1]=o.hg(8)
v[1]=1
u[1]=x}s=e.bhV(u,v,w,d,t)}else{r=new Int32Array(19)
q=o.hg(4)+4
if(q>19)return!1
u=new Int32Array(d)
for(p=0;p<q;++p)r[A.eP_[p]]=o.hg(3)
s=this.b8q(r,d,u)
if(s)s=e.as6(u,d)}return s},
b8q(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=B.c9U()
if(!j.as6(d,19))return!1
x=this.b
if(x.hg(1)!==0){w=2+x.hg(2+2*x.hg(3))
if(w>e)return!1}else w=e
for(v=f.$flags|0,u=0,t=8;u<e;w=s){s=w-1
if(w===0)break
if(x.a>=32)x.zq()
r=j.xv(x)
if(r<16){q=u+1
v&2&&C.u(f)
f[u]=r
if(r!==0)t=r
u=q}else{p=r-16
o=A.emg[p]
n=A.erT[p]
m=x.hg(o)+n
if(u+m>e)return!1
else{l=r===16?t:0
for(;k=m-1,m>0;m=k,u=q){q=u+1
v&2&&C.u(f)
f[u]=l}}}}return!0},
QN(d){var x
if(d<4)return d+1
x=D.f.R(d-2,1)
return D.f.cN(2+(d&1),x)+this.b.hg(x)+1},
am2(d,e){var x,w
if(e>120)return e-120
else{x=A.eNa[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
aTT(d,e){var x,w,v,u,t,s,r=D.f.cN(1,D.f.fG(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.cl(D.bK.ga5(p),0,null)
w=J.cl(D.bK.ga5(q),0,null)
q[0]=e.d[0]
v=4*d
for(p=w.$flags|0,u=4;u<v;++u){t=x[u]
s=w[u-4]
p&2&&C.u(w)
w[u]=t+s&255}for(v=4*r;u<v;++u){p&2&&C.u(w)
w[u]=0}e.d=q
return!0},
Ie(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.f.R(h,f)+D.f.R(g,f)]},
aiG(d,e){var x=this,w=x.Ie(x.Q,x.z,x.y,d,e)
return x.at[w]}}
B.af1.prototype={
bn9(d){return this.aU_(d)}}
B.amh.prototype={
ayj(){var x,w,v=this.a
if(v<32){x=this.c
w=D.f.eb(x[0],v)+((x[1]&A.DK[v])>>>0)*(A.DK[32-v]+1)}else{x=this.c
w=v===32?x[1]:D.f.eb(x[1],v-32)}return w},
hg(d){var x,w=this,v=w.b
if(!(v.d>=v.c&&w.a>=64)&&d<25){v=w.ayj()
x=A.DK[d]
w.a+=d
w.zq()
return(v&x)>>>0}else throw C.i(C.bH("Not enough data in input."))},
zq(){var x,w,v,u=this,t=u.b,s=u.c,r=s.$flags|0,q=t.c
for(;;){if(!(u.a>=8&&t.d<q))break
x=J.A(t.a,t.d++)
w=s[0]
v=s[1]
r&2&&C.u(s)
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
B.biJ.prototype={}
B.Gz.prototype={
H(){return"VP8LImageTransformType."+this.b}}
B.ami.prototype={
bq2(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.bgY(h,i,i+(e-d)*s)
break
case 0:t.buO(d,e,h,i)
if(e!==t.c){x=i-s
D.bK.cB(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.biE(d,e,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*B.AY(s,t.e)
u=i+w*s-v
D.bK.cB(h,u,u+v,f,i)
t.asH(d,e,f,u,h,i)}else t.asH(d,e,f,g,h,i)
break}},
biD(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.f.fG(8,r),p=this.b,o=this.d
if(q<8){x=D.f.cN(1,r)-1
w=D.f.cN(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.A(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.bd(g.a,g.d,r>>>8&255);++g.d
u=D.f.R(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.A(f.a,f.d);++f.d
r=o[s]
J.bd(g.a,g.d,r>>>8&255);++g.d}},
asH(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.f.fG(8,p),n=this.b,m=this.d
if(o<8){x=D.f.cN(1,p)-1
w=D.f.cN(1,o)-1
for(p=h.$flags|0,v=d;v<e;++v)for(u=0,t=0;t<n;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
q=m[u&w]
p&2&&C.u(h)
h[i]=q
u=D.f.fG(u,o)}}else for(p=h.$flags|0,v=d;v<e;++v)for(t=0;t<n;++t,i=r,g=s){r=i+1
s=g+1
q=m[f[g]>>>8&255]
p&2&&C.u(h)
h[i]=q}},
biE(a2,a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b,e=g.e,d=D.f.cN(1,e)-1,a0=B.AY(f,e),a1=D.f.R(a2,g.e)*a0
for(e=a4.$flags|0,x=a2;x<a3;){w=new Uint8Array(3)
for(v=a1,u=0;u<f;++u){if((u&d)>>>0===0){t=v+1
s=g.d[v]
w[0]=s&255
w[1]=s>>>8&255
w[2]=s>>>16&255
v=t}s=a5+u
r=a4[s]
q=r>>>8&255
p=w[0]
o=$.lM()
o.$flags&2&&C.u(o)
o[0]=p
p=$.mB()
n=p[0]
o[0]=q
m=p[0]
l=$.aBp()
l.$flags&2&&C.u(l)
l[0]=n*m
k=$.c_4()
j=(r>>>16&255)+(k[0]>>>5)>>>0&255
o[0]=w[1]
n=p[0]
o[0]=q
l[0]=n*p[0]
i=k[0]
o[0]=w[2]
n=p[0]
o[0]=j
l[0]=n*p[0]
h=k[0]
e&2&&C.u(a4)
a4[s]=(r&4278255360|j<<16|((r&255)+(i>>>5)>>>0)+(h>>>5)>>>0&255)>>>0}a5+=f;++x
if((x&d)>>>0===0)a1+=a0}},
buO(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=this,n=o.b
if(d===0){B.biK(f,g,4278190080)
for(x=1;x<n;++x){w=g+x
B.biK(f,w,f[w-1])}g+=n;++d}w=o.e
v=D.f.cN(1,w)-1
u=B.AY(n,w)
t=D.f.R(d,o.e)*u
for(s=d;s<e;){B.biK(f,g,f[g-n])
r=t+1
q=$.ceg[o.d[t]>>>8&15]
for(x=1;x<n;++x){if((x&v)>>>0===0){p=r+1
q=$.ceg[o.d[r]>>>8&15]
r=p}w=g+x
B.biK(f,w,q.$3(f,f[w-1],w-n))}g+=n;++s
if((s&v)>>>0===0)t+=u}},
bgY(d,e,f){var x,w,v,u
for(x=d.$flags|0;e<f;e=u){w=d[e]
v=w>>>8&255
u=e+1
x&2&&C.u(d)
d[e]=(w&4278255360|(w&16711935)+(v<<16|v)&16711935)>>>0}}}
B.bjk.prototype={
gcU(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
KM(d,e,f){var x,w,v,u,t,s,r=this
if(!r.gcU())return!1
x=A.f3J[r.e]
if(r.d===0){w=r.b
v=d*w
u=r.a
D.K.cB(f,v,e*w,u.a,u.d-u.b+v)}else{w=d+e
u=r.x
u===$&&C.b()
u.cy=f
t=u.c
if(r.y)w=u.aRj(t.a,t.b,w)
else{s=u.ch
s.toString
u=u.a0T(s,t.a,t.b,w,u.gbn8())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,d,e,f)}if(r.f===1)if(!r.aS7(f,r.b,r.c,d,e))return!1
if(d+e===r.c)r.w=!0
return!0},
aS7(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
B.a_V.prototype={
aLT(d,e){var x=this,w=d.bw()
x.r=0
x.f=(w&1)!==0
x.w=d.d-d.b
x.x=e-16}}
B.af2.prototype={}
B.aeh.prototype={
a5w(d){var x,w=this
if(d===0)return!1
x=(d<<1>>>0)-1
w.e=x
x=new Int32Array(x<<1>>>0)
w.d=x
x[1]=-1
w.f=1
D.K.fu(w.a,0,128,255)
return!0},
as6(d,e){var x,w,v,u,t,s=this
for(x=0,w=0,v=0;v<e;++v)if(d[v]>0){++x
w=v}if(!s.a5w(x))return!1
if(x===1){if(w<0||w>=e)return!1
return s.a_S(w,0,0)}u=new Int32Array(e)
if(!s.b0H(d,e,u))return!1
for(v=0;v<e;++v){t=d[v]
if(t>0)if(!s.a_S(v,u[v],t))return!1}return s.f===s.e},
bhV(d,e,f,g,h){var x,w,v,u=this
if(!u.a5w(h))return!1
for(x=0;x<h;++x){w=e[x]
if(w!==-1){v=f[x]
if(v>=g)return u.f===u.e
if(!u.a_S(v,w,d[x]))return u.f===u.e}}return u.f===u.e},
xv(d){var x,w,v=this,u=d.ayj(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}x=v.c[s]
t+=7
u=u>>>7
do{w=v.d
w===$&&C.b()
x=x+w[(x<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.ale(x))
d.a=t
return v.d[x<<1>>>0]},
a_S(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
if(f<=7){x=l.anh(e,f)
for(w=D.f.cE(1,7-f),v=l.b,u=v.$flags|0,t=l.a,s=t.$flags|0,r=0;r<w;++r){q=(x|D.f.cE(r,f))>>>0
u&2&&C.u(v)
v[q]=d
s&2&&C.u(t)
t[q]=f}}else x=l.anh(D.f.j7(e,f-7),7)
for(w=l.c,v=w.$flags|0,p=7,o=0;n=f-1,f>0;f=n){u=l.e
if(o>=u)return!1
t=l.d
t===$&&C.b()
s=(o<<1>>>0)+1
m=t[s]
if(m<0){m=l.f
if(m===u)return!1
t.$flags&2&&C.u(t)
t[s]=m-o
l.f=m+2
t[(m<<1>>>0)+1]=-1
t[(m+1<<1>>>0)+1]=-1}else if(m===0)return!1
o+=t[s]+(D.f.j7(e,n)&1);--p
if(p===0){v&2&&C.u(w)
w[x]=o}}if(l.b3o(o))l.b3p(o,0)
else if(l.ale(o))return!1
w=l.d
w===$&&C.b()
w.$flags&2&&C.u(w)
w[o<<1>>>0]=d
return!0},
anh(d,e){return D.f.eb((A.UD[d&15]<<4|A.UD[D.f.R(d,4)])>>>0,8-e)},
b3p(d,e){var x=this.d
x===$&&C.b()
x.$flags&2&&C.u(x)
x[(d<<1>>>0)+1]=e},
ale(d){var x=this.d
x===$&&C.b()
return x[(d<<1>>>0)+1]!==0},
b3o(d){var x=this.d
x===$&&C.b()
return x[(d<<1>>>0)+1]<0},
b0H(d,e,f){var x,w,v,u,t,s,r,q,p=new Int32Array(16),o=new Int32Array(16)
for(x=0,w=0;x<e;++x){v=d[x]
if(v>w)w=v}if(w>15)return!1
for(x=0;x<e;++x){u=d[x]
p[u]=p[u]+1}p[0]=0
o[0]=-1
for(t=1,s=0;t<=w;++t){s=s+p[t-1]<<1>>>0
o[t]=s}for(u=f.$flags|0,x=0;x<e;++x){r=d[x]
if(r>0){q=o[r]
o[r]=q+1
u&2&&C.u(f)
f[x]=q}else{u&2&&C.u(f)
f[x]=-1}}return!0}}
B.UC.prototype={
h(d,e){return this.a[e]}}
B.Oa.prototype={
H(){return"WebPFormat."+this.b}}
B.amA.prototype={
gbJ(){return this.a},
gaO(){return this.b}}
B.af3.prototype={}
B.bjl.prototype={
F3(d){var x=C.cd(d,!1,null,0)
this.b=x
if(!this.aiD(x))return!1
return!0},
iM(d){var x,w=this,v=null,u=C.cd(d,!1,v,0)
w.b=u
if(!w.aiD(u))return v
u=new B.af3(A.ti,C.c([],y.J))
w.a=u
x=w.b
x.toString
if(!w.aqW(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!B.c34(x,u).KO())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!B.c32(x,u).KO())return v
u=w.a
u.as=u.z.length
return u
case 0:throw C.i(C.bH("Unknown format for WebP"))}},
i2(d){var x,w,v,u,t=this,s=t.b
if(s==null||t.a==null)return null
x=t.a
if(x.e){x=x.z
w=x.length
if(d>=w)return null
v=x[d]
x=v.x
x===$&&C.b()
w=v.w
w===$&&C.b()
return t.agP(s.yq(x,w),d)}w=x.f
if(w===A.yC){u=s.yq(x.ch,x.ay)
s=t.a
s.toString
return B.c34(u,s).oK()}else if(w===A.Gm){u=s.yq(x.ch,x.ay)
s=t.a
s.toString
return B.c32(u,s).oK()}return null},
mm(d,e){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.iM(d)==null)return o
x=p.a.e
if(!x)return p.i2(0)
for(w=o,v=w,u=0;x=p.a,u<x.as;++u){e=x.z[u]
t=p.i2(u)
if(t==null)continue
t.y=e.e
if(v==null||w==null){x=p.a
s=x.a
x=x.b
r=t.gnS()
q=t.a
q=q==null?o:q.gc4()
if(q==null)q=D.av
v=C.fR(o,o,q,t.y,D.bO,x,o,0,r,o,D.av,s,!1)
w=v}else{w=C.vz(w,!1,!1)
x=e.f
x===$&&C.b()
if(x){x=w.a
if(x!=null)x.l9(0,o)}}C.c4A(w,t,D.zs,o,o,e.a,e.b,o,o,o,o)
v.l4(w)}return v},
agP(d,e){var x,w,v,u=null,t=C.c([],y.J),s=new B.af3(A.ti,t)
if(!this.aqW(d,s))return u
if(s.f===A.ti)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.x
t===$&&C.b()
x=w.w
x===$&&C.b()
return this.agP(d.yq(t,x),e)}else{v=d.yq(s.ch,s.ay)
t=s.f
if(t===A.yC)return B.c34(v,s).oK()
else if(t===A.Gm)return B.c32(v,s).oK()}return u},
aiD(d){if(d.hh(4)!=="RIFF")return!1
d.Z()
if(d.hh(4)!=="WEBP")return!1
return!0},
aqW(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=d.c,w=d.b;d.d<x;){v=d.hh(4)
u=d.Z()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.aWe(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=A.Gm
break
case"VP8L":e.ay=r
e.ch=u
e.f=A.yC
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.av(s)
o=p.gu(s)
p=p.gu(s)
s=new C.kJ(s,0,Math.min(o,p),0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=A.fzV
n=d.Z()
s=new Uint8Array(4)
s[0]=n>>>8&255
s[1]=n>>>16&255
s[2]=n>>>24&255
s[3]=n&255
d.ad()
break
case"ANMF":if(!this.aVc(d,e,u))return!1
break
case"ICCP":e.toString
m=d.hB(u)
d.d=d.d+(m.c-m.d)
m.eM()
break
case"EXIF":e.toString
e.w=d.hh(u)
break
case"XMP ":e.toString
d.hh(u)
break
default:d.d=s+t
break}s=d.d
l=t-(s-w-r)
if(l>0)d.d=s+l}if(!e.d)e.d=e.at!=null
return e.f!==A.ti},
aWe(d,e){var x,w,v,u,t=d.bw()
if((t&192)!==0)return!1
x=D.f.R(t,4)
w=D.f.R(t,1)
if((t&1)!==0)return!1
if(d.pl()!==0)return!1
v=d.pl()
u=d.pl()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
aVc(d,e,f){var x=new B.af2(d.pl()*2,d.pl()*2,d.pl()+1,d.pl()+1,d.pl())
x.aLT(d,f)
if(x.r!==0)return!1
e.z.push(x)
return!0}}
B.agP.prototype={
b_(d){var x,w,v=this
if(v.a===v.c.length)v.aTS()
x=v.c
w=v.a++
x.$flags&2&&C.u(x)
x[w]=d&255},
jP(d){var x,w,v,u,t=this,s=J.aY(d)
while(x=t.a,w=x+s,v=t.c,u=v.length,w>u)t.ahN(w-u)
D.K.dC(v,x,w,d)
t.a+=s},
iJ(d){var x=this
if(x.b){x.b_(D.f.R(d,8)&255)
x.b_(d&255)
return}x.b_(d&255)
x.b_(D.f.R(d,8)&255)},
h3(d){var x=this
if(x.b){x.b_(D.f.R(d,24)&255)
x.b_(D.f.R(d,16)&255)
x.b_(D.f.R(d,8)&255)
x.b_(d&255)
return}x.b_(d&255)
x.b_(D.f.R(d,8)&255)
x.b_(D.f.R(d,16)&255)
x.b_(D.f.R(d,24)&255)},
byH(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=J.cl(D.kI.ga5(v),0,null)
if(w.b){w.b_(x[3])
w.b_(x[2])
w.b_(x[1])
w.b_(x[0])
return}w.b_(x[0])
w.b_(x[1])
w.b_(x[2])
w.b_(x[3])},
byI(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=J.cl(D.lJ.ga5(v),0,null)
if(w.b){w.b_(x[7])
w.b_(x[6])
w.b_(x[5])
w.b_(x[4])
w.b_(x[3])
w.b_(x[2])
w.b_(x[1])
w.b_(x[0])
return}w.b_(x[0])
w.b_(x[1])
w.b_(x[2])
w.b_(x[3])
w.b_(x[4])
w.b_(x[5])
w.b_(x[6])
w.b_(x[7])},
ahN(d){var x,w,v,u
if(d!=null)x=d
else{w=this.c.length
x=w===0?8192:w*2}w=this.c
v=w.length
u=new Uint8Array(v+x)
D.K.dC(u,0,v,w)
this.c=u},
aTS(){return this.ahN(null)},
gu(d){return this.a}}
var z=a.updateTypes(["~(kJ)","v(oq,v,v)","~(z8,w<v>)","~(v,v,v,v,v,dY)","~(v)","z8(v)"])
B.aFd.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.fC(x.ch.kN(d),x.ch.kM(d),x.ch.kL(d),x.ch.m0(d))}else w.fC(d,e,f,g)
w.q();++u.a}},
$S:1211}
B.aOE.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.fy,r=this.a,q=r.b
s=s[q]
x=t.go
w=r.a
x=x[w]
v=new Uint32Array(s*x)
u=q+1
r.b=u
if(u===t.id){r.b=0
r.a=w+1}return v},
$S:1212}
B.aUH.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.bw(),r=t.bw()
t=this.a
if(!t.d.y.aE(s))throw C.i(C.bH("Invalid Component in SOS block"))
x=t.d.y.h(0,s)
x.toString
w=D.f.R(r,4)&15
v=r&15
u=t.z
if(w<u.length){u=u[w]
u.toString
x.w=u}t=t.y
if(v<t.length){t=t[v]
t.toString
x.x=t}return x},
$S:z+5}
B.b1k.prototype={
$1(d){return d!==""},
$S:11}
B.biP.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:118};(function installTearOffs(){var x=a._instance_2u,w=a._static_1,v=a._instance_1u,u=a.installStaticTearOff
var t
x(t=B.afg.prototype,"gaRl","aRm",2)
x(t,"gaRo","aRp",2)
x(t,"gaRq","aRr",2)
x(t,"gaRf","aRg",2)
x(t,"gaRh","aRi",2)
w(B,"cIW","cys",0)
w(B,"cIP","cyk",0)
w(B,"cIN","cyi",0)
w(B,"cIU","cyq",0)
w(B,"cIV","cyr",0)
w(B,"cIT","cyp",0)
w(B,"cIS","cyo",0)
w(B,"cIR","cyn",0)
w(B,"cIY","cyu",0)
w(B,"cIX","cyt",0)
w(B,"cIQ","cyl",0)
w(B,"cIO","cyj",0)
w(B,"cJ8","cyF",0)
w(B,"cJ6","cyD",0)
w(B,"cIZ","cyv",0)
w(B,"cJ0","cyx",0)
w(B,"cJ_","cyw",0)
w(B,"cJ1","cyy",0)
w(B,"cJ9","cyG",0)
w(B,"cJ7","cyE",0)
w(B,"cJ2","cyz",0)
w(B,"cJ3","cyA",0)
w(B,"cJ4","cyB",0)
w(B,"cJ5","cyC",0)
v(B.a_Q.prototype,"gb7P","b7Q",4)
v(B.af1.prototype,"gbn8","bn9",4)
u(B,"c5c",3,null,["$3"],["cyH"],1,0)
u(B,"cJa",3,null,["$3"],["cyI"],1,0)
u(B,"cJf",3,null,["$3"],["cyN"],1,0)
u(B,"cJg",3,null,["$3"],["cyO"],1,0)
u(B,"cJh",3,null,["$3"],["cyP"],1,0)
u(B,"cJi",3,null,["$3"],["cyQ"],1,0)
u(B,"cJj",3,null,["$3"],["cyR"],1,0)
u(B,"cJk",3,null,["$3"],["cyS"],1,0)
u(B,"cJl",3,null,["$3"],["cyT"],1,0)
u(B,"cJm",3,null,["$3"],["cyU"],1,0)
u(B,"cJb",3,null,["$3"],["cyJ"],1,0)
u(B,"cJc",3,null,["$3"],["cyK"],1,0)
u(B,"cJd",3,null,["$3"],["cyL"],1,0)
u(B,"cJe",3,null,["$3"],["cyM"],1,0)
u(B,"cJp",6,null,["$6"],["cz5"],3,0)
u(B,"cJq",6,null,["$6"],["cz6"],3,0)
u(B,"cJo",6,null,["$6"],["cz4"],3,0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(C.hQ,[B.kz,B.K3,B.Dd,B.qg,B.Km,B.zE,B.qQ,B.mo,B.Go,B.jd,B.pw,B.Gz,B.Oa])
x(C.C,[B.aFe,B.Ci,B.aJX,B.ad4,B.aOC,B.ad5,B.ad6,B.ad7,B.U1,B.ate,B.Uw,B.Ux,B.adQ,B.aTx,B.aez,B.abm,B.DG,B.aUD,B.z8,B.aUF,B.P4,B.aff,B.aUJ,B.aUK,B.afg,B.tP,B.M_,B.b30,B.LZ,B.b32,B.ahZ,B.ai1,B.ai8,B.Xs,B.M2,B.ai7,B.pi,B.alF,B.bgP,B.alG,B.bgR,B.alH,B.bgS,B.aVX,B.biC,B.a_P,B.biD,B.biI,B.biM,B.biO,B.a_O,B.biN,B.biE,B.Gy,B.amj,B.aml,B.amk,B.amm,B.a_Q,B.amh,B.biJ,B.ami,B.bjk,B.a_V,B.aeh,B.UC,B.amA,B.agP])
x(C.abZ,[B.aaj,B.aOD,B.aRA,B.aTw,B.Vg,B.b1j,B.b31,B.b3c,B.bgF,B.bgQ,B.bjl])
x(C.cB,[B.aFd,B.aOE,B.aUH,B.b1k])
w(B.aKm,B.aaj)
w(B.aUk,B.aOC)
x(B.aUk,[B.aeU,B.aUl,B.aUm,B.aUn,B.aeW])
w(B.aeV,B.U1)
w(B.aeX,B.Ux)
w(B.aTv,B.Ci)
x(B.DG,[B.DH,B.UL])
w(B.EX,B.aJX)
x(B.tP,[B.ahX,B.ahY,B.ai_,B.ai0,B.ai3,B.ai4])
x(B.M_,[B.Xo,B.ai2])
x(B.ai8,[B.wd,B.kP])
w(B.biP,C.dE)
w(B.af1,B.a_Q)
w(B.af2,B.a_V)
w(B.af3,B.amA)})()
C.d1(b.typeUniverse,JSON.parse('{"aeV":{"U1":[]},"aeX":{"Ux":[]},"DH":{"DG":[]},"UL":{"DG":[]},"ahX":{"tP":[]},"ahY":{"tP":[]},"ai_":{"tP":[]},"ai0":{"tP":[]},"ai3":{"tP":[]},"ai4":{"tP":[]},"Xo":{"M_":[]},"ai2":{"M_":[]},"af2":{"a_V":[]}}'))
C.Qk(b.typeUniverse,JSON.parse('{"ai8":1}'))
var y=(function rtii(){var x=C.L
return{n:x("ad4"),W:x("ad6"),f:x("UC"),x:x("aeh"),Y:x("aez"),P:x("mV"),u:x("k8"),k:x("DQ"),E:x("y<abm>"),Q:x("y<ad5>"),m:x("y<U1>"),b:x("y<Ux>"),A:x("y<UC>"),g:x("y<w<w<w<v>>>>"),o:x("y<w<w<v>>>"),S:x("y<w<v>>"),X:x("y<LZ>"),v:x("y<tP>"),l:x("y<ai1>"),s:x("y<f>"),L:x("y<alH>"),d:x("y<Gy>"),F:x("y<ami>"),J:x("y<a_V>"),G:x("y<P4>"),t:x("y<v>"),T:x("y<DG?>"),a:x("y<aff?>"),w:x("y<oq?>"),y:x("y<~(kJ)>"),c:x("z8"),H:x("w<DQ>"),z:x("w<a_O>"),K:x("w<Gy>"),e:x("LZ"),h:x("ahZ"),C:x("Xo"),O:x("M_"),M:x("Xs"),i:x("M2"),N:x("f"),j:x("alG"),R:x("oq"),D:x("dY"),V:x("a_O"),q:x("amj"),_:x("amk"),bt:x("amm"),U:x("al<f>"),bc:x("ate"),p:x("v"),r:x("aeT?"),bT:x("w<DG?>?"),ac:x("dY?"),ak:x("a_P?"),B:x("Gy?"),Z:x("aml?"),I:x("v?")}})();(function constants(){var x=a.makeConstList
A.Hi=new B.kz(0,"none")
A.zt=new B.kz(3,"bitfields")
A.zu=new B.kz(6,"alphaBitfields")
A.dY9=new B.Dd(0,"red")
A.dYa=new B.Dd(1,"green")
A.dYb=new B.Dd(2,"blue")
A.dYc=new B.Dd(3,"alpha")
A.dYd=new B.Dd(4,"other")
A.My=new B.K3(0,"uint")
A.C1=new B.K3(1,"half")
A.C2=new B.K3(2,"float")
A.Mz=new B.qg(0,"none")
A.dYR=new C.adC(1,"page")
A.N1=new B.Km(2,"cur")
A.CP=x([0,2,8],y.t)
A.e3C=x([0,4,2,1],y.t)
A.dYX=new B.Km(0,"invalid")
A.dYY=new B.Km(1,"ico")
A.e3F=x([A.dYX,A.dYY,A.N1],C.L("y<Km>"))
A.Sx=x([292,260,226,226],y.t)
A.emg=x([2,3,7],y.t)
A.SB=x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68],y.t)
A.erT=x([3,3,11],y.t)
A.DH=x([128,128,128,128,128,128,128,128,128,128,128],y.t)
A.TI=x([A.DH,A.DH,A.DH],y.S)
A.eIR=x([253,136,254,255,228,219,128,128,128,128,128],y.t)
A.eNM=x([189,129,242,255,227,213,255,219,128,128,128],y.t)
A.eNT=x([106,126,227,252,214,209,255,255,128,128,128],y.t)
A.eQQ=x([A.eIR,A.eNM,A.eNT],y.S)
A.eRI=x([1,98,248,255,236,226,255,255,128,128,128],y.t)
A.ewm=x([181,133,238,254,221,234,255,154,128,128,128],y.t)
A.erZ=x([78,134,202,247,198,180,255,219,128,128,128],y.t)
A.eVo=x([A.eRI,A.ewm,A.erZ],y.S)
A.eFv=x([1,185,249,255,243,255,128,128,128,128,128],y.t)
A.eQV=x([184,150,247,255,236,224,128,128,128,128,128],y.t)
A.f0F=x([77,110,216,255,236,230,128,128,128,128,128],y.t)
A.eQ4=x([A.eFv,A.eQV,A.f0F],y.S)
A.eQg=x([1,101,251,255,241,255,128,128,128,128,128],y.t)
A.eIP=x([170,139,241,252,236,209,255,255,128,128,128],y.t)
A.eQq=x([37,116,196,243,228,255,255,255,128,128,128],y.t)
A.eBV=x([A.eQg,A.eIP,A.eQq],y.S)
A.eOm=x([1,204,254,255,245,255,128,128,128,128,128],y.t)
A.f42=x([207,160,250,255,238,128,128,128,128,128,128],y.t)
A.f3M=x([102,103,231,255,211,171,128,128,128,128,128],y.t)
A.eMx=x([A.eOm,A.f42,A.f3M],y.S)
A.ezE=x([1,152,252,255,240,255,128,128,128,128,128],y.t)
A.f4s=x([177,135,243,255,234,225,128,128,128,128,128],y.t)
A.ePQ=x([80,129,211,255,194,224,128,128,128,128,128],y.t)
A.eQP=x([A.ezE,A.f4s,A.ePQ],y.S)
A.TO=x([1,1,255,128,128,128,128,128,128,128,128],y.t)
A.eTM=x([246,1,255,128,128,128,128,128,128,128,128],y.t)
A.ePg=x([255,128,128,128,128,128,128,128,128,128,128],y.t)
A.f64=x([A.TO,A.eTM,A.ePg],y.S)
A.eMk=x([A.TI,A.eQQ,A.eVo,A.eQ4,A.eBV,A.eMx,A.eQP,A.f64],y.o)
A.f0R=x([198,35,237,223,193,187,162,160,145,155,62],y.t)
A.eIQ=x([131,45,198,221,172,176,220,157,252,221,1],y.t)
A.f0P=x([68,47,146,208,149,167,221,162,255,223,128],y.t)
A.eOJ=x([A.f0R,A.eIQ,A.f0P],y.S)
A.eVE=x([1,149,241,255,221,224,255,255,128,128,128],y.t)
A.eXr=x([184,141,234,253,222,220,255,199,128,128,128],y.t)
A.eP8=x([81,99,181,242,176,190,249,202,255,255,128],y.t)
A.eZR=x([A.eVE,A.eXr,A.eP8],y.S)
A.eYl=x([1,129,232,253,214,197,242,196,255,255,128],y.t)
A.f3u=x([99,121,210,250,201,198,255,202,128,128,128],y.t)
A.eQR=x([23,91,163,242,170,187,247,210,255,255,128],y.t)
A.ePm=x([A.eYl,A.f3u,A.eQR],y.S)
A.eN7=x([1,200,246,255,234,255,128,128,128,128,128],y.t)
A.eYd=x([109,178,241,255,231,245,255,255,128,128,128],y.t)
A.emd=x([44,130,201,253,205,192,255,255,128,128,128],y.t)
A.f_G=x([A.eN7,A.eYd,A.emd],y.S)
A.exQ=x([1,132,239,251,219,209,255,165,128,128,128],y.t)
A.e3H=x([94,136,225,251,218,190,255,255,128,128,128],y.t)
A.eYL=x([22,100,174,245,186,161,255,199,128,128,128],y.t)
A.eQd=x([A.exQ,A.e3H,A.eYL],y.S)
A.eXq=x([1,182,249,255,232,235,128,128,128,128,128],y.t)
A.eQF=x([124,143,241,255,227,234,128,128,128,128,128],y.t)
A.eNH=x([35,77,181,251,193,211,255,205,128,128,128],y.t)
A.eNY=x([A.eXq,A.eQF,A.eNH],y.S)
A.f65=x([1,157,247,255,236,231,255,255,128,128,128],y.t)
A.eMc=x([121,141,235,255,225,227,255,255,128,128,128],y.t)
A.eYj=x([45,99,188,251,195,217,255,224,128,128,128],y.t)
A.ezW=x([A.f65,A.eMc,A.eYj],y.S)
A.e3I=x([1,1,251,255,213,255,128,128,128,128,128],y.t)
A.emm=x([203,1,248,255,255,128,128,128,128,128,128],y.t)
A.eXz=x([137,1,177,255,224,255,128,128,128,128,128],y.t)
A.ezO=x([A.e3I,A.emm,A.eXz],y.S)
A.eWV=x([A.eOJ,A.eZR,A.ePm,A.f_G,A.eQd,A.eNY,A.ezW,A.ezO],y.o)
A.eMK=x([253,9,248,251,207,208,255,192,128,128,128],y.t)
A.eTN=x([175,13,224,243,193,185,249,198,255,255,128],y.t)
A.f61=x([73,17,171,221,161,179,236,167,255,234,128],y.t)
A.eSf=x([A.eMK,A.eTN,A.f61],y.S)
A.eWd=x([1,95,247,253,212,183,255,255,128,128,128],y.t)
A.ePx=x([239,90,244,250,211,209,255,255,128,128,128],y.t)
A.f0E=x([155,77,195,248,188,195,255,255,128,128,128],y.t)
A.eXp=x([A.eWd,A.ePx,A.f0E],y.S)
A.eOp=x([1,24,239,251,218,219,255,205,128,128,128],y.t)
A.eUL=x([201,51,219,255,196,186,128,128,128,128,128],y.t)
A.ePw=x([69,46,190,239,201,218,255,228,128,128,128],y.t)
A.eW3=x([A.eOp,A.eUL,A.ePw],y.S)
A.eNP=x([1,191,251,255,255,128,128,128,128,128,128],y.t)
A.eQp=x([223,165,249,255,213,255,128,128,128,128,128],y.t)
A.eR2=x([141,124,248,255,255,128,128,128,128,128,128],y.t)
A.eYk=x([A.eNP,A.eQp,A.eR2],y.S)
A.eOQ=x([1,16,248,255,255,128,128,128,128,128,128],y.t)
A.eMa=x([190,36,230,255,236,255,128,128,128,128,128],y.t)
A.eIT=x([149,1,255,128,128,128,128,128,128,128,128],y.t)
A.exR=x([A.eOQ,A.eMa,A.eIT],y.S)
A.eQT=x([1,226,255,128,128,128,128,128,128,128,128],y.t)
A.eT2=x([247,192,255,128,128,128,128,128,128,128,128],y.t)
A.f0x=x([240,128,255,128,128,128,128,128,128,128,128],y.t)
A.erO=x([A.eQT,A.eT2,A.f0x],y.S)
A.f_F=x([1,134,252,255,255,128,128,128,128,128,128],y.t)
A.eQD=x([213,62,250,255,255,128,128,128,128,128,128],y.t)
A.f49=x([55,93,255,128,128,128,128,128,128,128,128],y.t)
A.eQS=x([A.f_F,A.eQD,A.f49],y.S)
A.eFm=x([A.eSf,A.eXp,A.eW3,A.eYk,A.exR,A.erO,A.eQS,A.TI],y.o)
A.eQG=x([202,24,213,235,186,191,220,160,240,175,255],y.t)
A.eIN=x([126,38,182,232,169,184,228,174,255,187,128],y.t)
A.exT=x([61,46,138,219,151,178,240,170,255,216,128],y.t)
A.eX1=x([A.eQG,A.eIN,A.exT],y.S)
A.ePP=x([1,112,230,250,199,191,247,159,255,255,128],y.t)
A.ezV=x([166,109,228,252,211,215,255,174,128,128,128],y.t)
A.eQk=x([39,77,162,232,172,180,245,178,255,255,128],y.t)
A.eWX=x([A.ePP,A.ezV,A.eQk],y.S)
A.ePZ=x([1,52,220,246,198,199,249,220,255,255,128],y.t)
A.eMu=x([124,74,191,243,183,193,250,221,255,255,128],y.t)
A.eNG=x([24,71,130,219,154,170,243,182,255,255,128],y.t)
A.eWW=x([A.ePZ,A.eMu,A.eNG],y.S)
A.eNE=x([1,182,225,249,219,240,255,224,128,128,128],y.t)
A.f45=x([149,150,226,252,216,205,255,171,128,128,128],y.t)
A.f6h=x([28,108,170,242,183,194,254,223,255,255,128],y.t)
A.f1x=x([A.eNE,A.f45,A.f6h],y.S)
A.f6m=x([1,81,230,252,204,203,255,192,128,128,128],y.t)
A.eY5=x([123,102,209,247,188,196,255,233,128,128,128],y.t)
A.f03=x([20,95,153,243,164,173,255,203,128,128,128],y.t)
A.eYa=x([A.f6m,A.eY5,A.f03],y.S)
A.eP2=x([1,222,248,255,216,213,128,128,128,128,128],y.t)
A.eQC=x([168,175,246,252,235,205,255,255,128,128,128],y.t)
A.eNL=x([47,116,215,255,211,212,255,255,128,128,128],y.t)
A.eM0=x([A.eP2,A.eQC,A.eNL],y.S)
A.eOY=x([1,121,236,253,212,214,255,255,128,128,128],y.t)
A.eQ_=x([141,84,213,252,201,202,255,219,128,128,128],y.t)
A.eS6=x([42,80,160,240,162,185,255,205,128,128,128],y.t)
A.eO3=x([A.eOY,A.eQ_,A.eS6],y.S)
A.f4S=x([244,1,255,128,128,128,128,128,128,128,128],y.t)
A.e3D=x([238,1,255,128,128,128,128,128,128,128,128],y.t)
A.eT5=x([A.TO,A.f4S,A.e3D],y.S)
A.efK=x([A.eX1,A.eWX,A.eWW,A.f1x,A.eYa,A.eM0,A.eO3,A.eT5],y.o)
A.exS=x([A.eMk,A.eWV,A.eFm,A.efK],y.g)
A.eyr=x([511,1023,2047,4095],y.t)
A.eIV=x([8,8,4,2],y.t)
A.efh=x([173,148,140],y.t)
A.efl=x([176,155,140,135],y.t)
A.ee4=x([180,157,141,134,130],y.t)
A.emk=x([254,254,243,230,196,177,153,140,133,130,129],y.t)
A.eIX=x([A.efh,A.efl,A.ee4,A.emk],y.S)
A.eMo=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095],y.t)
A.eMV=x([280,256,256,256,40],y.t)
A.TP=x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390],y.t)
A.Dx=x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],y.t)
A.eNa=x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],y.t)
A.Dy=x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],y.t)
A.eNv=x([A.My,A.C1,A.C2],C.L("y<K3>"))
A.TV=x([B.cJ2(),B.cIV(),B.cJ9(),B.cJ7(),B.cJ4(),B.cJ3(),B.cJ5()],y.y)
A.G_=new B.jd(0,"whiteIsZero")
A.ftt=new B.jd(1,"blackIsZero")
A.ftA=new B.jd(2,"rgb")
A.G1=new B.jd(3,"palette")
A.ftB=new B.jd(4,"transparencyMask")
A.a6U=new B.jd(5,"cmyk")
A.ftC=new B.jd(6,"yCbCr")
A.ftD=new B.jd(7,"reserved7")
A.ftE=new B.jd(8,"cieLab")
A.ftF=new B.jd(9,"iccLab")
A.ftu=new B.jd(10,"ituLab")
A.ftv=new B.jd(11,"logL")
A.ftw=new B.jd(12,"logLuv")
A.ftx=new B.jd(13,"colorFilterArray")
A.fty=new B.jd(14,"linearRaw")
A.ftz=new B.jd(15,"depth")
A.G0=new B.jd(16,"unknown")
A.eOt=x([A.G_,A.ftt,A.ftA,A.G1,A.ftB,A.a6U,A.ftC,A.ftD,A.ftE,A.ftF,A.ftu,A.ftv,A.ftw,A.ftx,A.fty,A.ftz,A.G0],C.L("y<jd>"))
A.ftl=new B.Go(0,"invalid")
A.a6S=new B.Go(1,"uint")
A.bG=new B.Go(2,"int")
A.tc=new B.Go(3,"float")
A.eOX=x([A.ftl,A.a6S,A.bG,A.tc],C.L("y<Go>"))
A.eP_=x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],y.t)
A.U5=x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],y.t)
A.ePv=x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],y.t)
A.dYe=new B.qg(1,"rle")
A.dYf=new B.qg(2,"zips")
A.dYg=new B.qg(3,"zip")
A.dYh=new B.qg(4,"piz")
A.dYi=new B.qg(5,"pxr24")
A.dYj=new B.qg(6,"b44")
A.dYk=new B.qg(7,"b44a")
A.ePy=x([A.Mz,A.dYe,A.dYf,A.dYg,A.dYh,A.dYi,A.dYj,A.dYk],C.L("y<qg>"))
A.eRY=x([231,120,48,89,115,113,120,152,112],y.t)
A.efL=x([152,179,64,126,170,118,46,70,95],y.t)
A.ePu=x([175,69,143,80,85,82,72,155,103],y.t)
A.exH=x([56,58,10,171,218,189,17,13,152],y.t)
A.eQh=x([114,26,17,163,44,195,21,10,173],y.t)
A.eQA=x([121,24,80,195,26,62,44,64,85],y.t)
A.eQb=x([144,71,10,38,171,213,144,34,26],y.t)
A.eZg=x([170,46,55,19,136,160,33,206,71],y.t)
A.eNc=x([63,20,8,114,114,208,12,9,226],y.t)
A.eOn=x([81,40,11,96,182,84,29,16,36],y.t)
A.e3K=x([A.eRY,A.efL,A.ePu,A.exH,A.eQh,A.eQA,A.eQb,A.eZg,A.eNc,A.eOn],y.S)
A.eM9=x([134,183,89,137,98,101,106,165,148],y.t)
A.eXQ=x([72,187,100,130,157,111,32,75,80],y.t)
A.eQN=x([66,102,167,99,74,62,40,234,128],y.t)
A.erN=x([41,53,9,178,241,141,26,8,107],y.t)
A.eOa=x([74,43,26,146,73,166,49,23,157],y.t)
A.eNr=x([65,38,105,160,51,52,31,115,128],y.t)
A.eNy=x([104,79,12,27,217,255,87,17,7],y.t)
A.ePs=x([87,68,71,44,114,51,15,186,23],y.t)
A.eX_=x([47,41,14,110,182,183,21,17,194],y.t)
A.eTL=x([66,45,25,102,197,189,23,18,22],y.t)
A.f0a=x([A.eM9,A.eXQ,A.eQN,A.erN,A.eOa,A.eNr,A.eNy,A.ePs,A.eX_,A.eTL],y.S)
A.eRN=x([88,88,147,150,42,46,45,196,205],y.t)
A.eQl=x([43,97,183,117,85,38,35,179,61],y.t)
A.eNK=x([39,53,200,87,26,21,43,232,171],y.t)
A.ePd=x([56,34,51,104,114,102,29,93,77],y.t)
A.eQ7=x([39,28,85,171,58,165,90,98,64],y.t)
A.eNk=x([34,22,116,206,23,34,43,166,73],y.t)
A.e3L=x([107,54,32,26,51,1,81,43,31],y.t)
A.eZr=x([68,25,106,22,64,171,36,225,114],y.t)
A.eM8=x([34,19,21,102,132,188,16,76,124],y.t)
A.f0X=x([62,18,78,95,85,57,50,48,51],y.t)
A.eME=x([A.eRN,A.eQl,A.eNK,A.ePd,A.eQ7,A.eNk,A.e3L,A.eZr,A.eM8,A.f0X],y.S)
A.eQ1=x([193,101,35,159,215,111,89,46,111],y.t)
A.eFl=x([60,148,31,172,219,228,21,18,111],y.t)
A.exP=x([112,113,77,85,179,255,38,120,114],y.t)
A.f0T=x([40,42,1,196,245,209,10,25,109],y.t)
A.eOV=x([88,43,29,140,166,213,37,43,154],y.t)
A.eNn=x([61,63,30,155,67,45,68,1,209],y.t)
A.eNS=x([100,80,8,43,154,1,51,26,71],y.t)
A.erR=x([142,78,78,16,255,128,34,197,171],y.t)
A.ePM=x([41,40,5,102,211,183,4,1,221],y.t)
A.eMR=x([51,50,17,168,209,192,23,25,82],y.t)
A.eMA=x([A.eQ1,A.eFl,A.exP,A.f0T,A.eOV,A.eNn,A.eNS,A.erR,A.ePM,A.eMR],y.S)
A.eNF=x([138,31,36,171,27,166,38,44,229],y.t)
A.eMv=x([67,87,58,169,82,115,26,59,179],y.t)
A.eVm=x([63,59,90,180,59,166,93,73,154],y.t)
A.f_J=x([40,40,21,116,143,209,34,39,175],y.t)
A.erW=x([47,15,16,183,34,223,49,45,183],y.t)
A.eH5=x([46,17,33,183,6,98,15,32,183],y.t)
A.f6o=x([57,46,22,24,128,1,54,17,37],y.t)
A.eNW=x([65,32,73,115,28,128,23,128,205],y.t)
A.eQM=x([40,3,9,115,51,192,18,6,223],y.t)
A.eO7=x([87,37,9,115,59,77,64,21,47],y.t)
A.ePL=x([A.eNF,A.eMv,A.eVm,A.f_J,A.erW,A.eH5,A.f6o,A.eNW,A.eQM,A.eO7],y.S)
A.f4P=x([104,55,44,218,9,54,53,130,226],y.t)
A.ezU=x([64,90,70,205,40,41,23,26,57],y.t)
A.eVi=x([54,57,112,184,5,41,38,166,213],y.t)
A.eNm=x([30,34,26,133,152,116,10,32,134],y.t)
A.eSg=x([39,19,53,221,26,114,32,73,255],y.t)
A.eMP=x([31,9,65,234,2,15,1,118,73],y.t)
A.ePI=x([75,32,12,51,192,255,160,43,51],y.t)
A.eNq=x([88,31,35,67,102,85,55,186,85],y.t)
A.eOx=x([56,21,23,111,59,205,45,37,192],y.t)
A.eOF=x([55,38,70,124,73,102,1,34,98],y.t)
A.f5v=x([A.f4P,A.ezU,A.eVi,A.eNm,A.eSg,A.eMP,A.ePI,A.eNq,A.eOx,A.eOF],y.S)
A.eOw=x([125,98,42,88,104,85,117,175,82],y.t)
A.eNu=x([95,84,53,89,128,100,113,101,45],y.t)
A.eQs=x([75,79,123,47,51,128,81,171,1],y.t)
A.ezR=x([57,17,5,71,102,57,53,41,49],y.t)
A.eUA=x([38,33,13,121,57,73,26,1,85],y.t)
A.f44=x([41,10,67,138,77,110,90,47,114],y.t)
A.ePz=x([115,21,2,10,102,255,166,23,6],y.t)
A.eMb=x([101,29,16,10,85,128,101,196,26],y.t)
A.eNO=x([57,18,10,102,102,213,34,20,43],y.t)
A.eOS=x([117,20,15,36,163,128,68,1,26],y.t)
A.ePp=x([A.eOw,A.eNu,A.eQs,A.ezR,A.eUA,A.f44,A.ePz,A.eMb,A.eNO,A.eOS],y.S)
A.eO4=x([102,61,71,37,34,53,31,243,192],y.t)
A.f3D=x([69,60,71,38,73,119,28,222,37],y.t)
A.eO8=x([68,45,128,34,1,47,11,245,171],y.t)
A.ecz=x([62,17,19,70,146,85,55,62,70],y.t)
A.f6b=x([37,43,37,154,100,163,85,160,1],y.t)
A.f1A=x([63,9,92,136,28,64,32,201,85],y.t)
A.eXV=x([75,15,9,9,64,255,184,119,16],y.t)
A.eMr=x([86,6,28,5,64,255,25,248,1],y.t)
A.eT7=x([56,8,17,132,137,255,55,116,128],y.t)
A.eyM=x([58,15,20,82,135,57,26,121,40],y.t)
A.eQa=x([A.eO4,A.f3D,A.eO8,A.ecz,A.f6b,A.f1A,A.eXV,A.eMr,A.eT7,A.eyM],y.S)
A.eQw=x([164,50,31,137,154,133,25,35,218],y.t)
A.eMq=x([51,103,44,131,131,123,31,6,158],y.t)
A.f1v=x([86,40,64,135,148,224,45,183,128],y.t)
A.ePt=x([22,26,17,131,240,154,14,1,209],y.t)
A.eFt=x([45,16,21,91,64,222,7,1,197],y.t)
A.f_K=x([56,21,39,155,60,138,23,102,213],y.t)
A.f5j=x([83,12,13,54,192,255,68,47,28],y.t)
A.eQO=x([85,26,85,85,128,128,32,146,171],y.t)
A.ePh=x([18,11,7,63,144,171,4,4,246],y.t)
A.eMF=x([35,27,10,146,174,171,12,26,128],y.t)
A.eP3=x([A.eQw,A.eMq,A.f1v,A.ePt,A.eFt,A.f_K,A.f5j,A.eQO,A.ePh,A.eMF],y.S)
A.eWU=x([190,80,35,99,180,80,126,54,45],y.t)
A.eZf=x([85,126,47,87,176,51,41,20,32],y.t)
A.eUM=x([101,75,128,139,118,146,116,128,85],y.t)
A.eXM=x([56,41,15,176,236,85,37,9,62],y.t)
A.ezD=x([71,30,17,119,118,255,17,18,138],y.t)
A.eQ9=x([101,38,60,138,55,70,43,26,142],y.t)
A.ePa=x([146,36,19,30,171,255,97,27,20],y.t)
A.eRK=x([138,45,61,62,219,1,81,188,64],y.t)
A.f0U=x([32,41,20,117,151,142,20,21,163],y.t)
A.eZn=x([112,19,12,61,195,128,48,4,24],y.t)
A.eW2=x([A.eWU,A.eZf,A.eUM,A.eXM,A.ezD,A.eQ9,A.ePa,A.eRK,A.f0U,A.eZn],y.S)
A.ePJ=x([A.e3K,A.f0a,A.eME,A.eMA,A.ePL,A.f5v,A.ePp,A.eQa,A.eP3,A.eW2],y.o)
A.ys=new B.mo(0,"none")
A.mL=new B.mo(1,"palette")
A.a6P=new B.mo(2,"rgb")
A.ftd=new B.mo(3,"gray")
A.fte=new B.mo(4,"reserved4")
A.ftf=new B.mo(5,"reserved5")
A.ftg=new B.mo(6,"reserved6")
A.fth=new B.mo(7,"reserved7")
A.fti=new B.mo(8,"reserved8")
A.mM=new B.mo(9,"paletteRle")
A.a6O=new B.mo(10,"rgbRle")
A.ftc=new B.mo(11,"grayRle")
A.ePR=x([A.ys,A.mL,A.a6P,A.ftd,A.fte,A.ftf,A.ftg,A.fth,A.fti,A.mM,A.a6O,A.ftc],C.L("y<mo>"))
A.eQr=x([B.cIN(),B.cIU(),B.cIW(),B.cIP(),B.cIS(),B.cIY(),B.cIR(),B.cIX(),B.cIO(),B.cIQ()],y.y)
A.Dr=x([8,0,8,0],y.t)
A.ezT=x([5,3,5,3],y.t)
A.erU=x([3,5,3,5],y.t)
A.Ox=x([0,8,0,8],y.t)
A.Tp=x([4,4,4,4],y.t)
A.exM=x([4,4,0,0],y.t)
A.Ua=x([A.Dr,A.ezT,A.erU,A.Ox,A.Dr,A.Tp,A.exM,A.Ox],y.S)
A.Ub=x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41],y.t)
A.x_=x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845],y.t)
A.Ud=x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127],y.t)
A.Ue=x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],y.t)
A.x0=x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567],y.t)
A.Uf=x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232],y.t)
A.Uo=x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],y.t)
A.rm=x([0,1,3,7,15,31,63,127,255],y.t)
A.eL=x([255,255,255,255,255,255,255,255,255,255,255],y.t)
A.pc=x([A.eL,A.eL,A.eL],y.S)
A.ePc=x([176,246,255,255,255,255,255,255,255,255,255],y.t)
A.f4r=x([223,241,252,255,255,255,255,255,255,255,255],y.t)
A.eLY=x([249,253,253,255,255,255,255,255,255,255,255],y.t)
A.ePG=x([A.ePc,A.f4r,A.eLY],y.S)
A.eOs=x([255,244,252,255,255,255,255,255,255,255,255],y.t)
A.eO0=x([234,254,254,255,255,255,255,255,255,255,255],y.t)
A.Ux=x([253,255,255,255,255,255,255,255,255,255,255],y.t)
A.eMn=x([A.eOs,A.eO0,A.Ux],y.S)
A.f13=x([255,246,254,255,255,255,255,255,255,255,255],y.t)
A.eSS=x([239,253,254,255,255,255,255,255,255,255,255],y.t)
A.Uq=x([254,255,254,255,255,255,255,255,255,255,255],y.t)
A.eXS=x([A.f13,A.eSS,A.Uq],y.S)
A.TX=x([255,248,254,255,255,255,255,255,255,255,255],y.t)
A.eN4=x([251,255,254,255,255,255,255,255,255,255,255],y.t)
A.eQz=x([A.TX,A.eN4,A.eL],y.S)
A.Dc=x([255,253,254,255,255,255,255,255,255,255,255],y.t)
A.eQu=x([251,254,254,255,255,255,255,255,255,255,255],y.t)
A.eNh=x([A.Dc,A.eQu,A.Uq],y.S)
A.exF=x([255,254,253,255,254,255,255,255,255,255,255],y.t)
A.eOl=x([250,255,254,255,254,255,255,255,255,255,255],y.t)
A.x3=x([254,255,255,255,255,255,255,255,255,255,255],y.t)
A.eOW=x([A.exF,A.eOl,A.x3],y.S)
A.eNN=x([A.pc,A.ePG,A.eMn,A.eXS,A.eQz,A.eNh,A.eOW,A.pc],y.o)
A.efI=x([217,255,255,255,255,255,255,255,255,255,255],y.t)
A.eP7=x([225,252,241,253,255,255,254,255,255,255,255],y.t)
A.eV9=x([234,250,241,250,253,255,253,254,255,255,255],y.t)
A.eZp=x([A.efI,A.eP7,A.eV9],y.S)
A.DM=x([255,254,255,255,255,255,255,255,255,255,255],y.t)
A.eM1=x([223,254,254,255,255,255,255,255,255,255,255],y.t)
A.eFu=x([238,253,254,254,255,255,255,255,255,255,255],y.t)
A.eS9=x([A.DM,A.eM1,A.eFu],y.S)
A.eO6=x([249,254,255,255,255,255,255,255,255,255,255],y.t)
A.f0W=x([A.TX,A.eO6,A.eL],y.S)
A.eZD=x([255,253,255,255,255,255,255,255,255,255,255],y.t)
A.eQt=x([247,254,255,255,255,255,255,255,255,255,255],y.t)
A.eQe=x([A.eZD,A.eQt,A.eL],y.S)
A.eC4=x([252,255,255,255,255,255,255,255,255,255,255],y.t)
A.erP=x([A.Dc,A.eC4,A.eL],y.S)
A.Uy=x([255,254,254,255,255,255,255,255,255,255,255],y.t)
A.eFr=x([A.Uy,A.Ux,A.eL],y.S)
A.eS5=x([255,254,253,255,255,255,255,255,255,255,255],y.t)
A.U0=x([250,255,255,255,255,255,255,255,255,255,255],y.t)
A.eC2=x([A.eS5,A.U0,A.x3],y.S)
A.exI=x([A.eZp,A.eS9,A.f0W,A.eQe,A.erP,A.eFr,A.eC2,A.pc],y.o)
A.eW4=x([186,251,250,255,255,255,255,255,255,255,255],y.t)
A.eMU=x([234,251,244,254,255,255,255,255,255,255,255],y.t)
A.eXU=x([251,251,243,253,254,255,254,255,255,255,255],y.t)
A.eNe=x([A.eW4,A.eMU,A.eXU],y.S)
A.eN6=x([236,253,254,255,255,255,255,255,255,255,255],y.t)
A.eS4=x([251,253,253,254,254,255,255,255,255,255,255],y.t)
A.eOI=x([A.Dc,A.eN6,A.eS4],y.S)
A.eWR=x([254,254,254,255,255,255,255,255,255,255,255],y.t)
A.eN0=x([A.Uy,A.eWR,A.eL],y.S)
A.eYc=x([254,254,255,255,255,255,255,255,255,255,255],y.t)
A.eN5=x([A.DM,A.eYc,A.x3],y.S)
A.Uz=x([A.eL,A.x3,A.eL],y.S)
A.exG=x([A.eNe,A.eOI,A.eN0,A.eN5,A.Uz,A.pc,A.pc,A.pc],y.o)
A.eOj=x([248,255,255,255,255,255,255,255,255,255,255],y.t)
A.eNt=x([250,254,252,254,255,255,255,255,255,255,255],y.t)
A.eMQ=x([248,254,249,253,255,255,255,255,255,255,255],y.t)
A.eOM=x([A.eOj,A.eNt,A.eMQ],y.S)
A.euu=x([255,253,253,255,255,255,255,255,255,255,255],y.t)
A.f_z=x([246,253,253,255,255,255,255,255,255,255,255],y.t)
A.eNg=x([252,254,251,254,254,255,255,255,255,255,255],y.t)
A.f_y=x([A.euu,A.f_z,A.eNg],y.S)
A.f66=x([255,254,252,255,255,255,255,255,255,255,255],y.t)
A.eMN=x([248,254,253,255,255,255,255,255,255,255,255],y.t)
A.eC1=x([253,255,254,254,255,255,255,255,255,255,255],y.t)
A.eQI=x([A.f66,A.eMN,A.eC1],y.S)
A.f5h=x([255,251,254,255,255,255,255,255,255,255,255],y.t)
A.eQ2=x([245,251,254,255,255,255,255,255,255,255,255],y.t)
A.eQ8=x([253,253,254,255,255,255,255,255,255,255,255],y.t)
A.eKJ=x([A.f5h,A.eQ2,A.eQ8],y.S)
A.eLW=x([255,251,253,255,255,255,255,255,255,255,255],y.t)
A.eOv=x([252,253,254,255,255,255,255,255,255,255,255],y.t)
A.eX7=x([A.eLW,A.eOv,A.DM],y.S)
A.eBX=x([255,252,255,255,255,255,255,255,255,255,255],y.t)
A.f4x=x([249,255,254,255,255,255,255,255,255,255,255],y.t)
A.eNC=x([255,255,254,255,255,255,255,255,255,255,255],y.t)
A.ecy=x([A.eBX,A.f4x,A.eNC],y.S)
A.f6c=x([255,255,253,255,255,255,255,255,255,255,255],y.t)
A.eN3=x([A.f6c,A.U0,A.eL],y.S)
A.eC0=x([A.eOM,A.f_y,A.eQI,A.eKJ,A.eX7,A.ecy,A.eN3,A.Uz],y.o)
A.eYm=x([A.eNN,A.exI,A.exG,A.eC0],y.g)
A.aa0=new B.kz(1,"rle8")
A.aa5=new B.kz(2,"rle4")
A.aa6=new B.kz(4,"jpeg")
A.aa7=new B.kz(5,"png")
A.aa8=new B.kz(7,"reserved7")
A.aa9=new B.kz(8,"reserved8")
A.aaa=new B.kz(9,"reserved9")
A.aa1=new B.kz(10,"reserved10")
A.aa2=new B.kz(11,"cmyk")
A.aa3=new B.kz(12,"cmykRle8")
A.aa4=new B.kz(13,"cmykRle4")
A.Ur=x([A.Hi,A.aa0,A.aa5,A.zt,A.aa6,A.aa7,A.zu,A.aa8,A.aa9,A.aaa,A.aa1,A.aa2,A.aa3,A.aa4],C.L("y<kz>"))
A.DJ=x([0,128,192,224,240,248,252,254,255],y.t)
A.DK=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295],y.t)
A.a7B=new B.Gz(0,"predictor")
A.fvC=new B.Gz(1,"crossColor")
A.fvD=new B.Gz(2,"subtractGreen")
A.a7C=new B.Gz(3,"colorIndexing")
A.f0I=x([A.a7B,A.fvC,A.fvD,A.a7C],C.L("y<Gz>"))
A.eM=x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255],y.t)
A.f3A=x([B.cIZ(),B.cIT(),B.cJ8(),B.cJ6(),B.cJ0(),B.cJ_(),B.cJ1()],y.y)
A.UC=x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],y.t)
A.f3J=x([null,B.cJp(),B.cJq(),B.cJo()],C.L("y<~(v,v,v,v,v,dY)?>"))
A.UD=x([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15],y.t)
A.x4=x([0,36,72,109,145,182,218,255],y.t)
A.la=x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255],y.t)
A.feL=new B.qQ(0,"bitmap")
A.a48=new B.qQ(1,"grayscale")
A.feM=new B.qQ(2,"indexed")
A.a49=new B.qQ(3,"rgb")
A.a4a=new B.qQ(4,"cmyk")
A.feN=new B.qQ(5,"multiChannel")
A.feO=new B.qQ(6,"duoTone")
A.a4b=new B.qQ(7,"lab")
A.f4w=x([A.feL,A.a48,A.feM,A.a49,A.a4a,A.feN,A.feO,A.a4b],C.L("y<qQ>"))
A.x5=x([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63],y.t)
A.emh=x([2,6,2,6],y.t)
A.eBZ=x([6,2,6,2],y.t)
A.emf=x([2,2,6,6],y.t)
A.efH=x([1,3,3,9],y.t)
A.exK=x([4,0,12,0],y.t)
A.erS=x([3,1,9,3],y.t)
A.eIU=x([8,8,0,0],y.t)
A.exL=x([4,12,0,0],y.t)
A.efd=x([16,0,0,0],y.t)
A.ec1=x([12,4,0,0],y.t)
A.eC_=x([6,6,2,2],y.t)
A.erV=x([3,9,1,3],y.t)
A.ec0=x([12,0,4,0],y.t)
A.eLX=x([9,3,3,1],y.t)
A.dJ=x([A.Tp,A.emh,A.Dr,A.eBZ,A.emf,A.efH,A.exK,A.erS,A.eIU,A.exL,A.efd,A.ec1,A.eC_,A.erV,A.ec0,A.eLX],y.S)
A.pd=x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1],y.t)
A.rM=new B.zE(0,"invalid")
A.a3w=new B.zE(1,"pbm")
A.a3x=new B.zE(2,"pgm2")
A.ED=new B.zE(3,"pgm5")
A.a3y=new B.zE(4,"ppm3")
A.EE=new B.zE(5,"ppm6")
A.FZ=new B.pw(0,"bilevel")
A.ftm=new B.pw(1,"gray4bit")
A.ftn=new B.pw(2,"gray")
A.fto=new B.pw(3,"grayAlpha")
A.ftp=new B.pw(4,"palette")
A.a6T=new B.pw(5,"rgb")
A.ftq=new B.pw(6,"rgba")
A.ftr=new B.pw(7,"yCbCrSub")
A.td=new B.pw(8,"generic")
A.fts=new B.pw(9,"invalid")
A.ti=new B.Oa(0,"undefined")
A.Gm=new B.Oa(1,"lossy")
A.yC=new B.Oa(2,"lossless")
A.fzV=new B.Oa(3,"animated")})();(function staticFields(){$.c3X=null
$.cef=!1
$.ceg=C.c([B.c5c(),B.cJa(),B.cJf(),B.cJg(),B.cJh(),B.cJi(),B.cJj(),B.cJk(),B.cJl(),B.cJm(),B.cJb(),B.cJc(),B.cJd(),B.cJe(),B.c5c(),B.c5c()],C.L("y<v(oq,v,v)>"))})();(function lazyInitializers(){var x=a.lazy
x($,"cNk","aBm",()=>C.ty(511))
x($,"cNl","bZZ",()=>C.ty(511))
x($,"cNn","c__",()=>C.cbi(2041))
x($,"cNo","c_0",()=>C.cbi(225))
x($,"cNm","nx",()=>C.ty(766))})()};
(a=>{a["vaGWIpW4EBS3NFihqcn22KdSNXE="]=a.current})($__dart_deferred_initializers__);