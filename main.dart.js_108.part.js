((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,B={
c8R(d){var x,w,v=new B.aFj()
if(!B.c1a(d))C.a9(C.bJ("Not a bitmap file."))
d.d+=2
x=d.Z()
w=$.fz()
w.$flags&2&&C.u(w)
w[0]=x
x=$.js()
d.d+=4
w[0]=d.Z()
v.b=x[0]
return v},
c1a(d){if(d.c-d.d<2)return!1
return C.bP(d,null,0).ac()===19778},
cpm(d,e){var x,w,v,u,t=e==null?B.c8R(d):e,s=d.d,r=d.Z(),q=d.Z(),p=$.fz()
p.$flags&2&&C.u(p)
p[0]=q
q=$.js()
x=q[0]
p[0]=d.Z()
q=q[0]
w=d.ac()
v=d.ac()
u=A.UW[d.Z()]
d.Z()
p[0]=d.Z()
p[0]=d.Z()
p=d.Z()
d.Z()
s=new B.Cr(t,x,q,r,w,v,u,p,s)
s.aev(d,e)
return s},
kw:function kw(d,e){this.a=d
this.b=e},
aFj:function aFj(){this.b=$},
Cr:function Cr(d,e,f,g,h,i,j,k,l){var _=this
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
aam:function aam(d){this.a=$
this.b=null
this.c=d},
aFi:function aFi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKm:function aKm(d){this.a=$
this.b=null
this.c=d},
aJX:function aJX(){},
ad5:function ad5(d,e,f){this.a=d
this.b=e
this.c=f},
aeS:function aeS(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
JS:function JS(d,e){this.a=d
this.b=e},
Dg:function Dg(d,e){this.a=d
this.b=e},
ad6:function ad6(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
cal(d,e,f,g){var x,w
switch(d.a){case 1:return new B.aUg(f,e)
case 2:return new B.aeU(f,g==null?1:g,e)
case 3:return new B.aeU(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new B.aUe(f,x,e)
w.aLO(e,f,x)
return w
case 5:return new B.aUf(f,g==null?16:g,e)
case 6:return new B.aeS(f,g==null?32:g,!1,e)
case 7:return new B.aeS(f,g==null?32:g,!0,e)
default:throw C.n(C.bJ("Invalid compression type: "+d.j(0)))}},
qk:function qk(d,e){this.a=d
this.b=e},
aOh:function aOh(){},
aUd:function aUd(){},
csb(d,e,f,g){var x,w,v,u,t,s,r,q
if(e===0){if(g!==0)throw C.n(C.bJ("Incomplete huffman data"))
return}x=d.d
w=d.Z()
v=d.Z()
d.d+=4
u=d.Z()
t=!0
if(w<65537)t=v>=65537
if(t)throw C.n(C.bJ("Invalid huffman table size"))
d.d+=4
s=C.bo(65537,0,!1,y.p)
r=J.jF(16384,y.W)
for(q=0;q<16384;++q)r[q]=new B.ad7()
B.csc(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw C.n(C.bJ("Error in header for Huffman-encoded data (invalid number of bits)."))
B.cs8(s,w,v,r)
B.csa(s,r,d,u,v,g,f)},
csa(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=C.c([0,0],y.t),n=f.d+D.f.ap(g+7,8)
for(x=0;f.d<n;){B.c1Z(o,f)
while(w=o[1],w>=14){v=e[D.f.jc(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=B.c2_(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw C.n(C.bJ(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
for(;;){w=o[1]
if(!(w<s&&f.d<n))break
B.c1Z(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.f.jc(o[0],w)&D.f.cN(1,s)-1)>>>0){o[1]=w
r=B.c2_(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw C.n(C.bJ(p))}}}q=8-g&7
o[0]=D.f.O(o[0],q)
o[1]=o[1]-q
while(w=o[1],w>0){v=e[D.f.cF(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=B.c2_(v.b,h,o,f,j,x,i)}else throw C.n(C.bJ(p))}if(x!==i)throw C.n(C.bJ("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
c2_(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)B.c1Z(f,g)
x=f[1]-8
f[1]=x
w=D.f.jc(f[0],x)&255
if(i+w>j)throw C.n(C.bJ(s))
v=h[i-1]
for(x=h.$flags|0;u=w-1,w>0;w=u,i=t){t=i+1
x&2&&C.u(h)
h[i]=v}}else{if(i<j){h.toString
t=i+1
h.$flags&2&&C.u(h)
h[i]=d}else throw C.n(C.bJ(s))
i=t}return i},
cs8(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t,w=y.p;e<=f;++e){v=d[e]
u=v>>>6
t=v&63
if(D.f.fK(u,t)!==0)throw C.n(C.bJ(n))
if(t>14){s=g[D.f.ef(u,t-14)]
if(s.a!==0)throw C.n(C.bJ(n))
v=++s.b
r=s.c
if(r!=null){v=C.bo(v,0,!1,w)
s.c=v
for(q=s.b-1,p=0;p<q;++p)v[p]=r[p]}else s.c=C.c([0],x)
s.c[s.b-1]=e}else if(t!==0){v=14-t
o=D.f.cF(u,v)
for(p=D.f.cF(1,v);p>0;--p,++o){s=g[o]
if(s.a!==0||s.c!=null)throw C.n(C.bJ(n))
s.a=t
s.b=e}}}},
csc(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=C.c([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw C.n(C.bJ(s))
w=B.cam(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw C.n(C.bJ(s))
v=B.cam(8,p,d)+6
if(f+v>x)throw C.n(C.bJ(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw C.n(C.bJ(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}B.cs9(h)},
cs9(d){var x,w,v,u,t,s=C.bo(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
c1Z(d,e){d[0]=(d[0]<<8|e.bz())>>>0
d[1]=d[1]+8>>>0},
cam(d,e,f){var x
while(x=e[1],x<d){e[0]=(e[0]<<8|J.A(f.a,f.d++))>>>0
e[1]=e[1]+8>>>0}x-=d
e[1]=x
return(D.f.jc(e[0],x)&D.f.cN(1,d)-1)>>>0},
ad7:function ad7(){this.b=this.a=0
this.c=null},
csd(d){var x=new B.ad8(C.c([],y.m))
x.aey(d)
return x},
cse(d){var x=C.cc(d,!1,null,0)
if(x.Z()!==20000630)return!1
if(x.bz()!==2)return!1
if((x.pe()&4294967289)>>>0!==0)return!1
return!0},
ad8:function ad8(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
cbv(d,e,f){var x=new B.aeT(d,C.c([],y.Q),C.D(y.N,y.n),A.MT,e)
x.aLu(d,e,f)
return x},
TX:function TX(){},
aOj:function aOj(d,e){this.a=d
this.b=e},
aeT:function aeT(d,e,f,g,h){var _=this
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
aUe:function aUe(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
at6:function at6(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
aUf:function aUf(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
aUg:function aUg(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
aeU:function aeU(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
aOi:function aOi(){this.a=null},
caQ(d){var x=new Uint8Array(d*3)
return new B.Ur(B.ct1(d),d,null,new C.qJ(x,d,3))},
ct0(d){return new B.Ur(d.a,d.b,d.c,C.ccM(d.d))},
ct1(d){var x
for(x=1;x<=8;++x)if(D.f.cN(1,x)>=d)return x
return 0},
Ur:function Ur(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Us:function Us(){},
aeV:function aeV(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
adQ:function adQ(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
aRm:function aRm(){var _=this
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
cb4(d){var x,w,v,u,t,s,r
if(d.ac()!==0)return null
x=d.ac()
if(x>=3)return null
w=A.e4M[x]
if(w===A.Nl)return null
v=d.ac()
u=J.h7(v,y.Y)
for(t=0;t<v;++t){s=J.A(d.a,d.d++)
r=J.A(d.a,d.d++)
J.A(d.a,d.d++);++d.d
d.ac()
d.ac()
u[t]=new B.aez(s,r,d.Z(),d.Z())}return new B.aTj(w,v,u)},
Kc:function Kc(d,e){this.a=d
this.b=e},
aTj:function aTj(d,e,f){this.c=d
this.d=e
this.e=f},
aez:function aez(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
aTh:function aTh(d,e,f,g,h,i,j,k,l){var _=this
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
aTi:function aTi(){this.b=this.a=null},
abl:function abl(d,e,f){this.e=d
this.f=e
this.r=f},
DI:function DI(){},
DJ:function DJ(d){this.a=d},
UF:function UF(d){this.a=d},
aUw:function aUw(){this.d=null},
z2:function z2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
aUz(){var x=C.bo(4,null,!1,y.r),w=C.c([],y.a),v=y.bT,u=J.ti(0,v)
v=J.ti(0,v)
return new B.aUy(new C.JP(C.D(y.N,y.P)),x,w,u,v,C.c([],y.E))},
aUy:function aUy(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
aUA:function aUA(d,e){this.a=d
this.b=e},
OY:function OY(d){this.a=d
this.b=0},
afc:function afc(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
aUC:function aUC(){this.b=this.a=0},
aUD:function aUD(){this.r=this.f=$},
afd:function afd(d,e,f,g,h,i,j,k){var _=this
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
Vd:function Vd(){},
zA:function zA(d,e){this.a=d
this.b=e},
EV:function EV(d){this.b=this.a=0
this.e=d},
b1r:function b1r(d){this.b=this.a=null
this.c=d},
b1s:function b1s(){},
ahU:function ahU(){this.b=this.a=null},
ahV:function ahV(){this.b=this.a=null},
tK:function tK(){},
ahX:function ahX(){this.b=this.a=null},
ahY:function ahY(){this.b=this.a=null},
ai0:function ai0(){this.b=this.a=null},
ai1:function ai1(){this.b=this.a=null},
Xg:function Xg(d){this.b=d},
ai_:function ai_(){this.b=$
this.c=null},
b33:function b33(){var _=this
_.w=_.r=_.f=_.e=$},
LM:function LM(d){this.a=d
this.c=null},
c3a(d){var x=new B.b35(C.D(y.p,y.h))
x.aM_(d)
return x},
c3e(d,e,f,g){var x=d/255,w=e/255,v=f/255,u=g/255,t=w*(1-v),s=x*(1-u)
return D.m.F(D.m.az((2*x<v?2*w*x+t+s:u*v-2*(v-x)*(u-w)+t+s)*255,0,255))},
b36(d,e){if(e===0)return 0
return D.f.F(D.f.az(D.m.F(255*(1-(1-d/255)/(e/255))),0,255))},
b38(d,e){return D.f.F(D.f.az(d+e-255,0,255))},
c3g(d,e){return D.f.F(D.f.az(255-(255-e)*(255-d),0,255))},
b37(d,e){if(e===255)return 255
return D.m.F(D.m.az(d/255/(1-e/255)*255,0,255))},
c3h(d,e){var x=d/255,w=e/255,v=1-w
return D.m.aM(255*(v*w*x+w*(1-v*(1-x))))},
c3c(d,e){var x=e/255,w=d/255
if(w<0.5)return D.m.aM(510*x*w)
else return D.m.aM(255*(1-2*(1-x)*(1-w)))},
c3i(d,e){if(e<128)return B.b36(d,2*e)
else return B.b37(d,2*(e-128))},
c3d(d,e){var x
if(e<128)return B.b38(d,2*e)
else{x=2*(e-128)
return x+d>255?255:d+x}},
c3f(d,e){return e<128?Math.min(d,2*e):Math.max(d,2*(e-128))},
c3b(d,e){return D.m.aM(e+d-2*e*d/255)},
n3(d,e,f){var x
if(d==null)x=0
else x=f===1?d[e]:(d[e]<<8|d[e+1])>>>8
return x},
cdq(b5,b6,b7,b8,b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=C.D(y.p,y.e)
for(x=b9.length,w=0;v=b9.length,w<v;b9.length===x||(0,C.H)(b9),++w){u=b9[w]
b4.m(0,u.a,u)}if(b6===8)t=1
else t=b6===16?2:-1
s=C.fR(b3,b3,D.ay,0,D.bO,b8,b3,0,v,b3,D.ay,b7,!1)
if(t===-1)throw C.n(C.bJ("PSD: unsupported bit depth: "+C.q(b6)))
r=b4.h(0,0)
q=b4.h(0,1)
p=b4.h(0,2)
o=b4.h(0,-1)
n=C.c([0,0,0],y.t)
m=-t
for(x=s.a,x=x.gV(x),l=v>=5,k=v===4,j=v>=2,v=v>=4;x.q();){i=x.gI()
m+=t
switch(b5){case A.a4z:i.sa5(B.n3(r.c,m,t))
i.sag(B.n3(q.c,m,t))
i.sah(B.n3(p.c,m,t))
i.sao(v?B.n3(o.c,m,t):255)
if(i.gao()!==0){i.sa5((i.ga5()+i.gao()-255)*255/i.gao())
i.sag((i.gag()+i.gao()-255)*255/i.gao())
i.sah((i.gah()+i.gao()-255)*255/i.gao())}break
case A.a4B:h=B.n3(r.c,m,t)
g=B.n3(q.c,m,t)
f=B.n3(p.c,m,t)
e=v?B.n3(o.c,m,t):255
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
a8=[D.m.F(D.m.az(a5*255,0,255)),D.m.F(D.m.az(a6*255,0,255)),D.m.F(D.m.az(a7*255,0,255))]
i.sa5(a8[0])
i.sag(a8[1])
i.sah(a8[2])
i.sao(e)
break
case A.a4y:a9=B.n3(r.c,m,t)
e=j?B.n3(o.c,m,t):255
i.sa5(a9)
i.sag(a9)
i.sah(a9)
i.sao(e)
break
case A.a4A:b0=B.n3(r.c,m,t)
b1=B.n3(q.c,m,t)
d=B.n3(p.c,m,t)
b2=B.n3(b4.h(0,k?-1:3).c,m,t)
e=l?B.n3(o.c,m,t):255
B.ciM(255-b0,255-b1,255-d,255-b2,n)
i.sa5(n[0])
i.sag(n[1])
i.sah(n[2])
i.sao(e)
break
default:throw C.n(C.bJ("Unhandled color mode: "+C.q(b5)))}}return s},
qT:function qT(d,e){this.a=d
this.b=e},
b35:function b35(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=_.w=$
_.y=null
_.z=d
_.as=$
_.ay=_.ax=_.at=null},
ahW:function ahW(d,e){this.a=d
this.b=e},
ahZ:function ahZ(d,e,f){var _=this
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
cwb(d,e){var x,w
switch(d){case"lsct":x=new B.ai_()
w=e.c-e.d
x.b=e.Z()
if(w>=12){if(e.hi(4)!=="8BIM")C.a9(C.bJ("Invalid key in layer additional data"))
x.c=e.hi(4)}if(w>=16)e.Z()
return x
default:return new B.Xg(e)}},
LN:function LN(){},
b34:function b34(){this.a=null},
ai5:function ai5(){},
w7:function w7(d,e,f){this.a=d
this.b=e
this.c=f},
kQ:function kQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xk:function Xk(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
LQ:function LQ(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
ai4:function ai4(){this.y=this.b=this.a=0},
w8(d,e){return(A.wY[d>>>8]<<17|A.wY[e>>>8]<<16|A.wY[d&255]<<1|A.wY[e&255])>>>0},
pi:function pi(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
b3f:function b3f(){this.b=this.a=null},
alp:function alp(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
ml:function ml(d,e){this.a=d
this.b=e},
bgN:function bgN(){this.a=null
this.b=$},
bgX:function bgX(d){this.a=d
this.c=this.b=0},
alq:function alq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
c3Y(d,e,f){var x=new B.bgZ(e,f,d),w=y.I
x.e=C.bo(e,null,!1,w)
x.f=C.bo(e,null,!1,w)
return x},
bgZ:function bgZ(d,e,f){var _=this
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
alr:function alr(d,e,f,g){var _=this
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
Gj:function Gj(d,e){this.a=d
this.b=e},
jh:function jh(d,e){this.a=d
this.b=e},
py:function py(d,e){this.a=d
this.b=e},
bh_:function bh_(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
cc1(){return new B.aVQ(new Uint8Array(4096))},
aVQ:function aVQ(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bgY:function bgY(){this.b=this.a=null
this.c=$},
c47(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=C.bo(8,null,!1,y.ak),s=C.bo(4,null,!1,y.Z)
return new B.biM(d,e,new B.biS(),new B.biW(),new B.biO(x,w),new B.biY(v,u),t,s,new Uint8Array(4))},
cfr(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
biM:function biM(d,e,f,g,h,i,j,k,l){var _=this
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
_.b6=$
_.b7=null
_.a3=_.D=$
_.a4=null
_.aa=$},
biZ:function biZ(){},
cfo(d){var x=new B.a_D(d)
x.b=254
x.c=0
x.d=-8
return x},
a_D:function a_D(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
dO(d,e,f){return D.f.iN(D.f.O(d+2*e+f+2,2),32)},
czI(d){var x,w=C.c([B.dO(J.A(d.a,d.d+-33),J.A(d.a,d.d+-32),J.A(d.a,d.d+-31)),B.dO(J.A(d.a,d.d+-32),J.A(d.a,d.d+-31),J.A(d.a,d.d+-30)),B.dO(J.A(d.a,d.d+-31),J.A(d.a,d.d+-30),J.A(d.a,d.d+-29)),B.dO(J.A(d.a,d.d+-30),J.A(d.a,d.d+-29),J.A(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.x9(x*32,4,w)},
czA(d){var x=J.A(d.a,d.d+-33),w=J.A(d.a,d.d+-1),v=J.A(d.a,d.d+31),u=J.A(d.a,d.d+63),t=J.A(d.a,d.d+95),s=C.bP(d,null,0),r=s.Nl(),q=B.dO(x,w,v)
r.$flags&2&&C.u(r)
r[0]=16843009*q
s.d+=32
q=s.Nl()
r=B.dO(w,v,u)
q.$flags&2&&C.u(q)
q[0]=16843009*r
s.d+=32
r=s.Nl()
q=B.dO(v,u,t)
r.$flags&2&&C.u(r)
r[0]=16843009*q
s.d+=32
q=s.Nl()
r=B.dO(u,t,t)
q.$flags&2&&C.u(q)
q[0]=16843009*r},
czy(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.A(d.a,d.d+(w-32))+J.A(d.a,d.d+(-1+w*32))
x=D.f.O(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.rC(v,u,u+4,x)}},
c48(d,e){var x,w,v,u,t,s=255-J.A(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.A(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.nu()[v+J.A(d.a,d.d+(-32+u))]
J.bf(d.a,d.d+(x+u),t)}x+=32}},
czG(d){B.c48(d,4)},
czH(d){B.c48(d,8)},
czF(d){B.c48(d,16)},
czE(d){var x,w=J.A(d.a,d.d+-1),v=J.A(d.a,d.d+31),u=J.A(d.a,d.d+63),t=J.A(d.a,d.d+95),s=J.A(d.a,d.d+-33),r=J.A(d.a,d.d+-32),q=J.A(d.a,d.d+-31),p=J.A(d.a,d.d+-30),o=J.A(d.a,d.d+-29)
d.m(0,96,B.dO(v,u,t))
x=B.dO(w,v,u)
d.m(0,97,x)
d.m(0,64,x)
x=B.dO(s,w,v)
d.m(0,98,x)
d.m(0,65,x)
d.m(0,32,x)
x=B.dO(r,s,w)
d.m(0,99,x)
d.m(0,66,x)
d.m(0,33,x)
d.m(0,0,x)
x=B.dO(q,r,s)
d.m(0,67,x)
d.m(0,34,x)
d.m(0,1,x)
x=B.dO(p,q,r)
d.m(0,35,x)
d.m(0,2,x)
d.m(0,3,B.dO(o,p,q))},
czD(d){var x,w=J.A(d.a,d.d+-32),v=J.A(d.a,d.d+-31),u=J.A(d.a,d.d+-30),t=J.A(d.a,d.d+-29),s=J.A(d.a,d.d+-28),r=J.A(d.a,d.d+-27),q=J.A(d.a,d.d+-26),p=J.A(d.a,d.d+-25)
d.m(0,0,B.dO(w,v,u))
x=B.dO(v,u,t)
d.m(0,32,x)
d.m(0,1,x)
x=B.dO(u,t,s)
d.m(0,64,x)
d.m(0,33,x)
d.m(0,2,x)
x=B.dO(t,s,r)
d.m(0,96,x)
d.m(0,65,x)
d.m(0,34,x)
d.m(0,3,x)
x=B.dO(s,r,q)
d.m(0,97,x)
d.m(0,66,x)
d.m(0,35,x)
x=B.dO(r,q,p)
d.m(0,98,x)
d.m(0,67,x)
d.m(0,99,B.dO(q,p,p))},
czK(d){var x=J.A(d.a,d.d+-1),w=J.A(d.a,d.d+31),v=J.A(d.a,d.d+63),u=J.A(d.a,d.d+-33),t=J.A(d.a,d.d+-32),s=J.A(d.a,d.d+-31),r=J.A(d.a,d.d+-30),q=J.A(d.a,d.d+-29),p=D.f.iN(D.f.O(u+t+1,1),32)
d.m(0,65,p)
d.m(0,0,p)
p=D.f.iN(D.f.O(t+s+1,1),32)
d.m(0,66,p)
d.m(0,1,p)
p=D.f.iN(D.f.O(s+r+1,1),32)
d.m(0,67,p)
d.m(0,2,p)
d.m(0,3,D.f.iN(D.f.O(r+q+1,1),32))
d.m(0,96,B.dO(v,w,x))
d.m(0,64,B.dO(w,x,u))
p=B.dO(x,u,t)
d.m(0,97,p)
d.m(0,32,p)
p=B.dO(u,t,s)
d.m(0,98,p)
d.m(0,33,p)
p=B.dO(t,s,r)
d.m(0,99,p)
d.m(0,34,p)
d.m(0,35,B.dO(s,r,q))},
czJ(d){var x,w=J.A(d.a,d.d+-32),v=J.A(d.a,d.d+-31),u=J.A(d.a,d.d+-30),t=J.A(d.a,d.d+-29),s=J.A(d.a,d.d+-28),r=J.A(d.a,d.d+-27),q=J.A(d.a,d.d+-26),p=J.A(d.a,d.d+-25)
d.m(0,0,D.f.iN(D.f.O(w+v+1,1),32))
x=D.f.iN(D.f.O(v+u+1,1),32)
d.m(0,64,x)
d.m(0,1,x)
x=D.f.iN(D.f.O(u+t+1,1),32)
d.m(0,65,x)
d.m(0,2,x)
x=D.f.iN(D.f.O(t+s+1,1),32)
d.m(0,66,x)
d.m(0,3,x)
d.m(0,32,B.dO(w,v,u))
x=B.dO(v,u,t)
d.m(0,96,x)
d.m(0,33,x)
x=B.dO(u,t,s)
d.m(0,97,x)
d.m(0,34,x)
x=B.dO(t,s,r)
d.m(0,98,x)
d.m(0,35,x)
d.m(0,67,B.dO(s,r,q))
d.m(0,99,B.dO(r,q,p))},
czB(d){var x,w=J.A(d.a,d.d+-1),v=J.A(d.a,d.d+31),u=J.A(d.a,d.d+63),t=J.A(d.a,d.d+95)
d.m(0,0,D.f.iN(D.f.O(w+v+1,1),32))
x=D.f.iN(D.f.O(v+u+1,1),32)
d.m(0,32,x)
d.m(0,2,x)
x=D.f.iN(D.f.O(u+t+1,1),32)
d.m(0,64,x)
d.m(0,34,x)
d.m(0,1,B.dO(w,v,u))
x=B.dO(v,u,t)
d.m(0,33,x)
d.m(0,3,x)
x=B.dO(u,t,t)
d.m(0,65,x)
d.m(0,35,x)
d.m(0,99,t)
d.m(0,98,t)
d.m(0,97,t)
d.m(0,96,t)
d.m(0,66,t)
d.m(0,67,t)},
czz(d){var x=J.A(d.a,d.d+-1),w=J.A(d.a,d.d+31),v=J.A(d.a,d.d+63),u=J.A(d.a,d.d+95),t=J.A(d.a,d.d+-33),s=J.A(d.a,d.d+-32),r=J.A(d.a,d.d+-31),q=J.A(d.a,d.d+-30),p=D.f.iN(D.f.O(x+t+1,1),32)
d.m(0,34,p)
d.m(0,0,p)
p=D.f.iN(D.f.O(w+x+1,1),32)
d.m(0,66,p)
d.m(0,32,p)
p=D.f.iN(D.f.O(v+w+1,1),32)
d.m(0,98,p)
d.m(0,64,p)
d.m(0,96,D.f.iN(D.f.O(u+v+1,1),32))
d.m(0,3,B.dO(s,r,q))
d.m(0,2,B.dO(t,s,r))
p=B.dO(x,t,s)
d.m(0,35,p)
d.m(0,1,p)
p=B.dO(w,x,t)
d.m(0,67,p)
d.m(0,33,p)
p=B.dO(v,w,x)
d.m(0,99,p)
d.m(0,65,p)
d.m(0,97,B.dO(u,v,w))},
czV(d){var x
for(x=0;x<16;++x)d.oZ(x*32,16,d,-32)},
czT(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.A(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.rC(u,t,t+16,v)
x+=32}},
biQ(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.rC(w,v,v+16,d)}},
czL(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.A(d.a,d.d+(-1+w*32))+J.A(d.a,d.d+(w-32))
B.biQ(D.f.O(x,5),d)},
czN(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.A(d.a,d.d+(-1+w*32))
B.biQ(D.f.O(x,4),d)},
czM(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.A(d.a,d.d+(w-32))
B.biQ(D.f.O(x,4),d)},
czO(d){B.biQ(128,d)},
czW(d){var x
for(x=0;x<8;++x)d.oZ(x*32,8,d,-32)},
czU(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.A(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.rC(u,t,t+8,v)
x+=32}},
biR(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.rC(w,v,v+8,d)}},
czP(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.A(d.a,d.d+(w-32))+J.A(d.a,d.d+(-1+w*32))
B.biR(D.f.O(x,4),d)},
czQ(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.A(d.a,d.d+(w-32))
B.biR(D.f.O(x,3),d)},
czR(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.A(d.a,d.d+(-1+w*32))
B.biR(D.f.O(x,3),d)},
czS(d){B.biR(128,d)},
AX(d,e,f,g,h){var x=e+f+g*32,w=J.A(d.a,d.d+x)+D.f.O(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.m(0,x,w)},
biP(d,e,f,g,h){B.AX(d,0,0,e,f+g)
B.AX(d,0,1,e,f+h)
B.AX(d,0,2,e,f-h)
B.AX(d,0,3,e,f-g)},
czC(){var x,w,v,u
if(!$.cfp){for(x=-255;x<=255;++x){w=$.aB6()
v=255+x
u=x<0?-x:x
w.$flags&2&&C.u(w)
w[v]=u
u=$.c09()
w=D.f.O(w[v],1)
u.$flags&2&&C.u(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.c0a()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&C.u(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.c0b()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&C.u(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.nu()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&C.u(w)
w[255+x]=v}$.cfp=!0}},
biN:function biN(){},
czx(){var x,w=J.jF(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new B.a_C(w)},
cAa(){var x,w,v,u,t=new Uint8Array(3),s=J.jF(4,y.z)
for(x=y.V,w=0;w<4;++w){v=J.jF(8,x)
for(u=0;u<8;++u)v[u]=B.czx()
s[w]=v}D.P.fz(t,0,3,255)
return new B.biX(t,s)},
biS:function biS(){this.c=null
this.d=$},
biW:function biW(){this.b=this.a=null},
biY:function biY(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
a_C:function a_C(d){this.a=d},
biX:function biX(d,e){this.a=d
this.b=e},
biO:function biO(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
Gt:function Gt(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
am1:function am1(){this.b=this.a=0},
am3:function am3(d,e,f){this.a=d
this.b=e
this.c=f},
am2:function am2(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
am4:function am4(d,e,f){this.a=d
this.b=e
this.c=f},
c49(d,e){var x,w=C.c([],y.A),v=C.c([],y.F),u=new Uint32Array(2),t=new B.am_(d,u)
u=t.d=J.cy(D.bL.gad(u),0,null)
x=d.bz()
u.$flags&2&&C.u(u)
u[0]=x
x=d.bz()
u.$flags&2&&C.u(u)
u[1]=x
x=d.bz()
u.$flags&2&&C.u(u)
u[2]=x
x=d.bz()
u.$flags&2&&C.u(u)
u[3]=x
x=d.bz()
u.$flags&2&&C.u(u)
u[4]=x
x=d.bz()
u.$flags&2&&C.u(u)
u[5]=x
x=d.bz()
u.$flags&2&&C.u(u)
u[6]=x
x=d.bz()
u.$flags&2&&C.u(u)
u[7]=x
return new B.a_E(t,e,w,v)},
AY(d,e){return D.f.O(d+D.f.cN(1,e)-1,e)},
a_E:function a_E(d,e,f,g){var _=this
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
af_:function af_(d,e,f,g){var _=this
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
am_:function am_(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
biT:function biT(d,e){this.a=d
this.b=e},
biU(d,e,f){var x=d[e]
d.$flags&2&&C.u(d)
d[e]=(((x&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(x&16711935)+(f&16711935)&16711935)>>>0},
wR(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
Gv(d){if(d<0)return 0
if(d>255)return 255
return d},
biV(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
czX(d,e,f){return 4278190080},
czY(d,e,f){return e},
cA2(d,e,f){return d[f]},
cA3(d,e,f){return d[f+1]},
cA4(d,e,f){return d[f-1]},
cA5(d,e,f){var x=d[f]
return B.wR(B.wR(e,d[f+1]),x)},
cA6(d,e,f){return B.wR(e,d[f-1])},
cA7(d,e,f){return B.wR(e,d[f])},
cA8(d,e,f){return B.wR(d[f-1],d[f])},
cA9(d,e,f){return B.wR(d[f],d[f+1])},
czZ(d,e,f){var x=d[f-1],w=d[f],v=d[f+1]
return B.wR(B.wR(e,x),B.wR(w,v))},
cA_(d,e,f){var x=d[f],w=d[f-1]
return B.biV(x>>>24,e>>>24,w>>>24)+B.biV(x>>>16&255,e>>>16&255,w>>>16&255)+B.biV(x>>>8&255,e>>>8&255,w>>>8&255)+B.biV(x&255,e&255,w&255)<=0?x:e},
cA0(d,e,f){var x=d[f],w=d[f-1]
return(B.Gv((e>>>24)+(x>>>24)-(w>>>24))<<24|B.Gv((e>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|B.Gv((e>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|B.Gv((e&255)+(x&255)-(w&255)))>>>0},
cA1(d,e,f){var x,w,v,u=d[f],t=d[f-1],s=B.wR(e,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(B.Gv(u+D.f.ap(u-(t>>>24),2))<<24|B.Gv(x+D.f.ap(x-(t>>>16&255),2))<<16|B.Gv(w+D.f.ap(w-(t>>>8&255),2))<<8|B.Gv(v+D.f.ap(v-(t&255),2)))>>>0},
Gu:function Gu(d,e){this.a=d
this.b=e},
am0:function am0(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
bjr:function bjr(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
a_J:function a_J(){},
af0:function af0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=$
_.r=1
_.x=_.w=$},
cb1(){var x=new Uint8Array(128),w=new Int16Array(128)
x=new B.aeh(x,w,new Int16Array(128))
x.a5S(0)
return x},
ct6(){var x,w=J.jF(5,y.x)
for(x=0;x<5;++x)w[x]=B.cb1()
return new B.Ux(w)},
aeh:function aeh(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
Ux:function Ux(d){this.a=d},
O_:function O_(d,e){this.a=d
this.b=e},
ami:function ami(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
af1:function af1(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
bjs:function bjs(){this.b=this.a=null},
o6(d,e){return new B.agN(d,new Uint8Array(e))},
agN:function agN(d,e){this.a=0
this.b=d
this.c=e},
c1X(d){var x=new C.JP(C.D(y.N,y.P))
x.hZ(d)
return x},
csf(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
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
if(a2){B.TY(a4[j],a4[h],v)
f=v[0]
e=v[1]
B.TY(a4[i],a4[g],v)
d=v[0]
a0=v[1]
B.TY(f,d,v)
a1=v[0]
u&2&&C.u(a4)
a4[j]=a1
a4[i]=v[1]
B.TY(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}else{B.TZ(a4[j],a4[h],v)
f=v[0]
e=v[1]
B.TZ(a4[i],a4[g],v)
d=v[0]
a0=v[1]
B.TZ(f,d,v)
a1=v[0]
u&2&&C.u(a4)
a4[j]=a1
a4[i]=v[1]
B.TZ(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){B.TY(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.u(a4)
a4[h]=a1}else{B.TZ(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.u(a4)
a4[h]=a1}u&2&&C.u(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){B.TY(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.u(a4)
a4[i]=n}else{B.TZ(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.u(a4)
a4[i]=n}u&2&&C.u(a4)
a4[j]=f}}w=x>>>1}},
TY(d,e,f){var x,w,v,u,t=$.lI()
t.$flags&2&&C.u(t)
t[0]=d
x=$.mw()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.f.O(v,1)
f[0]=u
f[1]=u-v},
TZ(d,e,f){var x=d-D.f.O(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
cj4(d){var x,w,v,u,t,s,r,q,p,o,n=null
if(B.aUz().aAe(d))return new B.Vd()
x=new C.WZ(C.c2m())
if(x.ET(d))return x
w=new B.aRm()
w.f=C.cc(d,!1,n,0)
w.a=new B.adQ(C.c([],y.b))
if(w.aj4())return w
v=new B.bjs()
if(v.ET(d))return v
u=new B.bgY()
if(u.a49(C.cc(d,!1,n,0))!=null)return u
if(B.c3a(d).c===943870035)return new B.b34()
if(B.cse(d))return new B.aOi()
if(B.c1a(C.cc(d,!1,n,0)))return new B.aam(!1)
t=new B.bgN()
s=C.cc(d,!1,n,0)
r=t.a=new B.alp(A.yr)
r.hZ(s)
if(r.axj())return t
q=new B.aTi()
r=C.cc(d,!1,n,0)
q.a=r
r=B.cb4(r)
q.b=r
if(r!=null)return q
p=new B.b3f()
if(p.iR(d)!=null)return p
o=new B.b1r(C.c([],y.s))
if(o.ET(d))return o
return n},
bX_(d){var x=B.cj4(d)
return x==null?null:x.mu(d,null)},
cIN(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if($.c5_==null){x=$.c5_=new Uint8Array(768)
for(w=-256;w<0;++w)x[256+w]=0
for(w=0;w<256;++w)x[256+w]=w
for(w=256;w<512;++w)x[256+w]=255}for(x=a6.$flags|0,w=0;w<64;++w){v=a4[w]
u=a3[w]
x&2&&C.u(a6)
a6[w]=v*u}for(t=0,w=0;w<8;++w,t+=8){v=1+t
u=a6[v]
if(u===0&&a6[2+t]===0&&a6[3+t]===0&&a6[4+t]===0&&a6[5+t]===0&&a6[6+t]===0&&a6[7+t]===0){v=D.f.O(5793*a6[t]+512,10)
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
continue}r=D.f.O(5793*a6[t]+128,8)
q=(r&2147483647)-((r&2147483648)>>>0)
r=4+t
p=D.f.O(5793*a6[r]+128,8)
o=(p&2147483647)-((p&2147483648)>>>0)
p=2+t
n=a6[p]
m=6+t
l=a6[m]
k=7+t
j=a6[k]
i=D.f.O(2896*(u-j)+128,8)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.f.O(2896*(u+j)+128,8)
g=(j&2147483647)-((j&2147483648)>>>0)
j=3+t
u=a6[j]<<4
f=(u&2147483647)-((u&2147483648)>>>0)
u=5+t
i=a6[u]<<4
e=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.O(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.O(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.O(n*3784+l*1567+128,8)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.f.O(n*1567-l*3784+128,8)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.f.O(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.f.O(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.f.O(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.f.O(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.f.O(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.f.O(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.O(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.f.O(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.f.O(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.f.O(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.f.O(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.f.O(f*4017-d*799+2048,12)
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
if(u===0&&a6[16+w]===0&&a6[24+w]===0&&a6[32+w]===0&&a6[40+w]===0&&a6[48+w]===0&&a6[56+w]===0){u=D.f.O(5793*a6[w]+8192,14)
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
continue}r=D.f.O(5793*a6[w]+2048,12)
q=(r&2147483647)-((r&2147483648)>>>0)
r=32+w
p=D.f.O(5793*a6[r]+2048,12)
o=(p&2147483647)-((p&2147483648)>>>0)
p=16+w
n=a6[p]
m=48+w
l=a6[m]
k=56+w
j=a6[k]
i=D.f.O(2896*(u-j)+2048,12)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.f.O(2896*(u+j)+2048,12)
g=(j&2147483647)-((j&2147483648)>>>0)
j=24+w
f=a6[j]
u=40+w
e=a6[u]
i=D.f.O(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.O(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.O(n*3784+l*1567+2048,12)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.f.O(n*1567-l*3784+2048,12)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.f.O(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.f.O(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.f.O(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.f.O(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.f.O(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.f.O(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.O(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.f.O(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.f.O(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.f.O(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.f.O(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.f.O(f*4017-d*799+2048,12)
f=(d&2147483647)-((d&2147483648)>>>0)
x&2&&C.u(a6)
a6[w]=q+s
a6[k]=q-s
a6[v]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[u]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(x=$.c5_,v=a5.$flags|0,w=0;w<64;++w){x.toString
u=D.f.O(a6[w]+8,4)
u=x[384+((u&2147483647)-((u&2147483648)>>>0))]
v&2&&C.u(a5)
a5[w]=u}},
cHy(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.r
if(d8.h(0,d7).a.aL(274)){x=d8.h(0,d7).geF()
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
r=C.fR(d6,d6,D.ay,0,D.bO,s,d6,0,3,d6,D.ay,t,!1)
r.e=C.TU(d8)
r.gu9().h(0,d7).seF(d6)
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
e=n[D.f.fK(g,l)]
f=q-g
d=0
for(;;){a0=d9.d.e
a0.toString
if(!(d<a0))break
a1=e[D.f.fK(d,m)]
if(h){a0=r.a
if(a0!=null)a0.dD(p-d,g,a1,a1,a1)}else if(i){a0=r.a
if(a0!=null)a0.dD(p-d,f,a1,a1,a1)}else if(j){a0=r.a
if(a0!=null)a0.dD(d,f,a1,a1,a1)}else if(k){a0=r.a
if(a0!=null)a0.dD(g,d,a1,a1,a1)}else if(v){a0=r.a
if(a0!=null)a0.dD(f,d,a1,a1,a1)}else if(x){a0=r.a
if(a0!=null)a0.dD(f,p-d,a1,a1,a1)}else{a0=r.a
if(d8){if(a0!=null)a0.dD(g,p-d,a1,a1,a1)}else if(a0!=null)a0.dD(d,g,a1,a1,a1)}++d}++g}break
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
b1=D.f.fK(g,l)
b2=D.f.fK(g,a8)
b3=D.f.fK(g,b0)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
f=q-g
d=0
for(;;){a0=d9.d.e
a0.toString
if(!(d<a0))break
b6=D.f.fK(d,m)
b7=D.f.fK(d,a7)
b8=D.f.fK(d,a9)
a1=e[b6]<<8>>>0
b9=b4[b7]-128
c0=b5[b8]-128
a0=D.f.O(a1+359*c0+128,8)
c1=D.f.az((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.f.O(a1-88*b9-183*c0+128,8)
c2=D.f.az((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.f.O(a1+454*b9+128,8)
c3=D.f.az((a0&2147483647)-((a0&2147483648)>>>0),0,255)
if(h){a0=r.a
if(a0!=null)a0.dD(p-d,g,c1,c2,c3)}else if(i){a0=r.a
if(a0!=null)a0.dD(p-d,f,c1,c2,c3)}else if(j){a0=r.a
if(a0!=null)a0.dD(d,f,c1,c2,c3)}else if(k){a0=r.a
if(a0!=null)a0.dD(g,d,c1,c2,c3)}else if(v){a0=r.a
if(a0!=null)a0.dD(f,d,c1,c2,c3)}else if(x){a0=r.a
if(a0!=null)a0.dD(f,p-d,c1,c2,c3)}else{a0=r.a
if(d8){if(a0!=null)a0.dD(g,p-d,c1,c2,c3)}else if(a0!=null)a0.dD(d,g,c1,c2,c3)}++d}++g}break
case 4:x=d9.c
if(x==null)throw C.n(C.bJ("Unsupported color mode (4 components)"))
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
b1=D.f.fK(g,l)
b2=D.f.fK(g,a8)
b3=D.f.fK(g,b0)
c8=D.f.fK(g,c7)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
c9=c5[c8]
a0=q-g
d=0
for(;;){d0=d9.d.e
d0.toString
if(!(d<d0))break
b6=D.f.fK(d,m)
b7=D.f.fK(d,a7)
b8=D.f.fK(d,a9)
d1=D.f.fK(d,c6)
if(x){d2=e[b6]
d3=b4[b7]
a1=b5[b8]
d4=c9[d1]}else{a1=e[b6]
b9=b4[b7]
c0=b5[b8]
d4=c9[d1]
d0=c0-128
d2=255-D.f.az(D.m.F(a1+1.402*d0),0,255)
d5=b9-128
d3=255-D.m.F(D.m.az(a1-0.3441363*d5-0.71413636*d0,0,255))
a1=255-D.f.az(D.m.F(a1+1.772*d5),0,255)}d0=D.f.O(d2*d4,8)
c1=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.f.O(d3*d4,8)
c2=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.f.O(a1*d4,8)
c3=(d0&2147483647)-((d0&2147483648)>>>0)
if(f){d0=r.a
if(d0!=null)d0.dD(p-d,g,c1,c2,c3)}else if(h){d0=r.a
if(d0!=null)d0.dD(p-d,a0,c1,c2,c3)}else if(i){d0=r.a
if(d0!=null)d0.dD(d,a0,c1,c2,c3)}else if(j){d0=r.a
if(d0!=null)d0.dD(g,d,c1,c2,c3)}else if(k){d0=r.a
if(d0!=null)d0.dD(a0,d,c1,c2,c3)}else if(v){d0=r.a
if(d0!=null)d0.dD(a0,p-d,c1,c2,c3)}else{d0=r.a
if(d8){if(d0!=null)d0.dD(g,p-d,c1,c2,c3)}else if(d0!=null)d0.dD(d,g,c1,c2,c3)}++d}++g}break
default:throw C.n(C.bJ("Unsupported color mode"))}return r},
cAk(d,e,f,g,h,i){B.cAh(i,d,e,f,g,h,!0,i)},
cAl(d,e,f,g,h,i){B.cAi(i,d,e,f,g,h,!0,i)},
cAj(d,e,f,g,h,i){B.cAg(i,d,e,f,g,h,!0,i)},
NZ(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.A(d.a,d.d+x)
v=J.A(e.a,e.d+x)
J.bf(f.a,f.d+x,w+v)}},
cAh(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=C.cc(d,!1,v,u),r=C.cc(d,!1,v,u),q=C.bP(r,v,0)
if(h===0){r.m(0,0,J.A(s.a,s.d))
B.NZ(C.bP(s,v,1),q,C.bP(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){B.NZ(s,C.bP(q,v,x),r,1,!0)
B.NZ(C.bP(s,v,1),q,C.bP(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
cAi(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=C.cc(d,!1,x,w),t=C.cc(k,!1,x,w),s=C.bP(t,x,0)
if(h===0){t.m(0,0,J.A(u.a,u.d))
B.NZ(C.bP(u,x,1),s,C.bP(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
while(h<v){B.NZ(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
cAg(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=C.cc(d,!1,s,r),o=C.cc(k,!1,s,r),n=C.bP(o,s,0)
if(h===0){o.m(0,0,J.A(p.a,p.d))
B.NZ(C.bP(p,s,1),n,C.bP(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){B.NZ(p,C.bP(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.A(n.a,n.d+(w-1))+J.A(n.a,n.d+v)-J.A(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.A(p.a,p.d+w)
J.bf(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
bWQ(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
ciM(d,e,f,g,h){var x=1-g/255
h[0]=D.m.aM(255*(1-d/255)*x)
h[1]=D.m.aM(255*(1-e/255)*x)
h[2]=D.m.aM(255*(1-f/255)*x)}},A
J=c[1]
C=c[0]
D=c[2]
B=a.updateHolder(c[84],B)
A=c[204]
B.kw.prototype={
H(){return"BmpCompression."+this.b}}
B.aFj.prototype={}
B.Cr.prototype={
aev(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===A.zs||x===A.zt}else x=!0
if(x){x=q.as=d.Z()
w=B.bWQ(x)
q.CW=w
v=D.f.ef(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.Z()
u=B.bWQ(w)
q.cy=u
t=D.f.ef(w,u)
q.db=x?255/t:0
w=q.ax=d.Z()
u=B.bWQ(w)
q.dx=u
s=D.f.ef(w,u)
q.dy=x?255/s:0
if(!o||q.r===A.zt){o=q.ay=d.Z()
x=B.bWQ(o)
q.fr=x
r=D.f.ef(o,x)
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
if(q.f<=8)q.bvY(d)},
gLJ(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&C.b()
x=x===0}else x=!1
else x=!0
return x},
gaQ(){return Math.abs(this.c)},
bvY(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.f.cN(1,s.f)
s.ch=new C.qJ(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.A(d.a,d.d++)
v=J.A(d.a,d.d++)
u=J.A(d.a,d.d++)
t=J.A(d.a,d.d++)
s.ch.OX(x,u,v,w,t)}},
blP(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.bz()
for(v=7;v>=0;--v)e.$4(D.f.jc(w,v)&1,0,0,0)
return}else if(x===2){w=d.bz()
for(v=6;v>=0;v-=2)e.$4(D.f.jc(w,v)&2,0,0,0)}else if(x===4){w=d.bz()
e.$4(D.f.O(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.bz(),0,0,0)
return}}x=o.r
if(x===A.zs&&o.f===32){u=d.Z()
x=o.as
x===$&&C.b()
t=o.CW
t===$&&C.b()
t=D.f.ef((u&x)>>>0,t)
x=o.cx
x===$&&C.b()
s=D.m.F(t*x)
x=o.at
x===$&&C.b()
t=o.cy
t===$&&C.b()
t=D.f.ef((u&x)>>>0,t)
x=o.db
x===$&&C.b()
r=D.m.F(t*x)
x=o.ax
x===$&&C.b()
t=o.dx
t===$&&C.b()
t=D.f.ef((u&x)>>>0,t)
x=o.dy
x===$&&C.b()
q=D.m.F(t*x)
if(o.gLJ())p=255
else{x=o.ay
x===$&&C.b()
t=o.fr
t===$&&C.b()
t=D.f.ef((u&x)>>>0,t)
x=o.fx
x===$&&C.b()
p=D.m.F(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===A.Hw){q=d.bz()
r=d.bz()
s=d.bz()
p=d.bz()
return e.$4(s,r,q,o.gLJ()?255:p)}else if(t===24){q=d.bz()
r=d.bz()
return e.$4(d.bz(),r,q,255)}else if(t===16){u=d.ac()
x=o.as
x===$&&C.b()
t=o.CW
t===$&&C.b()
t=D.f.ef((u&x)>>>0,t)
x=o.cx
x===$&&C.b()
s=D.m.F(t*x)
x=o.at
x===$&&C.b()
t=o.cy
t===$&&C.b()
t=D.f.ef((u&x)>>>0,t)
x=o.db
x===$&&C.b()
r=D.m.F(t*x)
x=o.ax
x===$&&C.b()
t=o.dx
t===$&&C.b()
t=D.f.ef((u&x)>>>0,t)
x=o.dy
x===$&&C.b()
q=D.m.F(t*x)
if(o.gLJ())p=255
else{x=o.ay
x===$&&C.b()
t=o.fr
t===$&&C.b()
t=D.f.ef((u&x)>>>0,t)
x=o.fx
x===$&&C.b()
p=D.m.F(t*x)}return e.$4(s,r,q,p)}else throw C.n(C.bJ("Unsupported bitsPerPixel ("+t+") or compression ("+x.j(0)+")."))}},
gbL(){return this.b}}
B.aam.prototype={
iR(d){var x,w=null
if(!B.c1a(C.cc(d,!1,w,0)))return w
x=C.cc(d,!1,w,0)
this.a=x
return this.b=B.cpm(x,w)},
i5(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new C.te(f,f,f,f,0,D.bO,0,0)
x=g.a
x===$&&C.b()
w=e.a.b
w===$&&C.b()
x.d=w
v=e.f
w=e.b
u=D.f.ap(w*v+31,32)*4
x=g.c
if(x)t=4
else if(v===1||v===4||v===8)t=1
else{s=v===32?4:3
t=s}if(x)r=D.ay
else if(v===1)r=D.eN
else{if(v===2)s=D.kz
else if(v===4)s=D.kA
else s=D.ay
r=s}q=x?f:e.ch
p=C.fR(f,f,r,0,D.bO,e.gaQ(),f,0,t,q,D.ay,w,!1)
for(o=p.gaQ()-1,x=e.c,w=1/x<0,s=x<0,x=x===0;o>=0;--o){n={}
if(!(x?w:s))m=o
else{l=p.a
l=l==null?f:l.b
m=(l==null?0:l)-1-o}l=g.a
k=l.hH(u)
l.d=l.d+(k.c-k.d)
l=p.a
j=l==null
i=j?f:l.a
if(i==null)i=0
n.a=0
h=j?f:l.cE(0,m,f)
if(h==null)h=new C.eq()
while(n.a<i)e.blP(k,new B.aFi(n,g,i,e,h))}return p},
mu(d,e){if(this.iR(d)==null)return null
return this.i5(0)}}
B.aKm.prototype={}
B.aJX.prototype={}
B.ad5.prototype={}
B.aeS.prototype={
Mq(){return this.w},
pi(d,e,f,g,h){throw C.n(C.bJ("B44 compression not yet supported."))},
FT(d,e,f){return this.pi(d,e,f,null,null)},
j(d){return C.q(this.r)+" "+this.x}}
B.JS.prototype={
H(){return"ExrChannelType."+this.b}}
B.Dg.prototype={
H(){return"ExrChannelName."+this.b}}
B.ad6.prototype={
aLt(d){var x=this,w=d.MZ()
x.a=w
if(w.length===0)return
x.c=A.eOy[d.Z()]
d.bz()
d.d+=3
x.f=d.Z()
x.r=d.Z()
w=x.a
if(w==="R"){x.w=!0
x.b=A.dYU}else if(w==="G"){x.w=!0
x.b=A.dYV}else if(w==="B"){x.w=!0
x.b=A.dYW}else if(w==="A"){x.w=!0
x.b=A.dYX}else{x.w=!1
x.b=A.dYY}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break}}}
B.qk.prototype={
H(){return"ExrCompressorType."+this.b}}
B.aOh.prototype={
pi(d,e,f,g,h){throw C.n(C.bJ("Unsupported compression type"))},
FT(d,e,f){return this.pi(d,e,f,null,null)}}
B.aUd.prototype={}
B.ad7.prototype={}
B.ad8.prototype={
aey(d){var x,w,v,u,t=this,s=C.cc(d,!1,null,0)
if(s.Z()!==20000630)throw C.n(C.bJ("File is not an OpenEXR image file."))
x=t.d=s.bz()
if(x!==2)throw C.n(C.bJ("Cannot read version "+x+" image files."))
x=t.e=s.pe()
if((x&4294967289)>>>0!==0)throw C.n(C.bJ("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=B.cbv(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;;){v=B.cbv(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw C.n(C.bJ("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,C.H)(x),++u)x[u].bvX(s)
t.b8Q(s)},
b8Q(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,C.H)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.b9_(u,d)
else t.b8Y(u,d)}},
b9_(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
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
if(x)if(u.Z()!==s)throw C.n(C.bJ("Invalid Image Data"))
k=u.Z()
j=u.Z()
u.Z()
u.Z()
i=u.hH(u.Z())
u.d=u.d+(i.c-i.d)
h=b4.dy
h.toString
g=j*h
f=b4.dx
f.toString
h=w.pi(i,k*f,g,f,h)
f=h.length
f=Math.min(f,f)
e=new C.kG(h,0,f,0,!1)
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
switch(h.a){case 1:h=e.ac()
a8=$.fP
a9=(a8!=null?a8:C.hz())[h]
break
case 2:a9=e.ac()
break
case 0:a9=e.Z()
break
default:a9=b2}h=a5.d
h===$&&C.b()
a2+=h
h=a5.w
h===$&&C.b()
if(h){h=b3.a
b0=h==null?b2:h.cE(a6,g,b2)
if(b0==null)b0=new C.eq()
h=a5.b
h===$&&C.b()
b0.m(0,h.a,a9)}else{h=a5.a
h===$&&C.b()
a8=b3.b
b1=a8!=null?a8.h(0,h):b2
if(b1!=null)b1.dD(a6,g,a9,0,0)}}}++a3;++g}}++o;++q}++r}},
b8Y(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
a5===$&&C.b()
x=(a5&16)!==0
a5=a6.b
a5.toString
w=a6.CW
v=a6.ay[0]
u=a6.cx
t=C.bP(a7,a4,0)
for(s=v.length,r=a6.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.Z()!==3.141592653589793)throw C.n(C.bJ("Invalid Image Data"))
n=t.Z()
m=$.fz()
m.$flags&2&&C.u(m)
m[0]=n
n=$.js()
m[0]=t.Z()
l=t.hH(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.FT(l,0,p)
m=n.length
k=new C.kG(n,0,Math.min(m,m),0,!1)}else k=l
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
switch(n.a){case 1:n=k.ac()
m=$.fP
a1=(m!=null?m:C.hz())[n]
break
case 2:a1=k.ac()
break
case 0:a1=k.Z()
break
default:a1=a4}n=e.d
n===$&&C.b()
g+=n
n=e.w
n===$&&C.b()
if(n){n=a5.a
a2=n==null?a4:n.cE(a0,p,a4)
if(a2==null)a2=new C.eq()
n=e.b
n===$&&C.b()
a2.m(0,n.a,a1)}else{n=e.a
n===$&&C.b()
m=a5.b
a3=m!=null?m.h(0,n):a4
if(a3!=null)a3.dD(a0,p,a1,0,0)}}}++h;++p}}},
gbL(){return this.a},
gaQ(){return this.b}}
B.TX.prototype={
aLu(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=C.D(y.N,y.u)
for(x=a2.e,w=y.t,v=a2.c,u=D.lM;;){t=a7.MZ()
if(t.length===0)break
s=a7.MZ()
r=a7.Z()
q=a7.hH(r)
a7.d=a7.d+(q.c-q.d)
x.m(0,t,new B.ad5(t,s,r))
switch(t){case"channels":for(;;){p=new B.ad6()
p.aLt(q)
o=p.a
o===$&&C.b()
if(o.length===0)break
n=p.w
n===$&&C.b()
if(n){++a2.d
o=p.c
o===$&&C.b()
if(o===A.C6)u=D.lM
else u=o===A.C7?D.ms:D.mt}else{n=p.c
n===$&&C.b()
if(n===A.C6){n=a2.w
m=a2.x
a4.m(0,o,new C.Kf(new Uint16Array(n*m),n,m,1))}else if(n===A.C7){n=a2.w
m=a2.x
a4.m(0,o,new C.Kg(new Float32Array(n*m),n,m,1))}else if(n===A.MS){n=a2.w
m=a2.x
a4.m(0,o,new C.Kk(new Uint32Array(n*m),n,m,1))}}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a2.at=o
n=q.Z()
m=$.fz()
m.$flags&2&&C.u(m)
m[0]=n
n=$.BZ()
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
case"compression":a2.ax=A.eQC[J.A(q.a,q.d++)]
break
case"dataWindow":o=q.Z()
n=$.fz()
n.$flags&2&&C.u(n)
n[0]=o
o=$.js()
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
$.js()
n[0]=q.Z()
n[0]=q.Z()
n[0]=q.Z()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.Z()
n=$.fz()
n.$flags&2&&C.u(n)
n[0]=o
$.BZ()
break
case"screenWindowCenter":o=q.Z()
n=$.fz()
n.$flags&2&&C.u(n)
n[0]=o
$.BZ()
n[0]=q.Z()
break
case"screenWindowWidth":o=q.Z()
n=$.fz()
n.$flags&2&&C.u(n)
n[0]=o
$.BZ()
break
case"tiles":a2.dx=q.Z()
a2.dy=q.Z()
j=J.A(q.a,q.d++)
a2.fr=j&15
a2.fx=D.f.O(j,4)&15
break
case"type":i=q.MZ()
if(i!=="deepscanline")if(i!=="deeptile")throw C.n(C.bJ("EXR Invalid type: "+i))
break
default:break}}x=a2.w
a2.b=C.fR(a3,a3,u,0,D.bO,a2.x,a3,0,a2.d,a3,D.ay,x,!1)
for(x=new C.dS(a4,a4.r,a4.e);x.q();){w=x.d
o=a2.b
o.toString
n=a4.h(0,w)
n.toString
o.aDx(w,n)}if(a2.db){x={}
w=a2.r
w===$&&C.b()
a2.id=a2.aP0(w[0],w[2],w[1],w[3])
w=a2.r
a2.k1=a2.aP1(w[0],w[2],w[1],w[3])
if(a2.fr!==2)a2.k1=1
w=a2.id
w.toString
v=a2.r
a2.fy=a2.afN(w,v[0],v[2],a2.dx,a2.fx)
v=a2.k1
v.toString
w=a2.r
a2.go=a2.afN(v,w[1],w[3],a2.dy,a2.fx)
w=a2.aOX()
a2.k2=w
v=a2.dx
v.toString
v=w*v
a2.k3=v
a2.CW=B.cal(a2.ax,a2,v,a2.dy)
x.a=x.b=0
v=a2.id
v.toString
w=a2.k1
w.toString
a2.ay=C.E3(v*w,new B.aOj(x,a2),!0,y.R)}else{x=a2.x
w=a2.ch=new Uint32Array(x+1)
for(o=v.length,n=a2.r,m=a2.w,h=0;h<o;++h){g=v[h]
l=g.d
l===$&&C.b()
k=g.f
k===$&&C.b()
f=D.f.eq(l*m,k)
for(l=g.r,e=0;e<x;++e){n===$&&C.b()
k=n[1]
l===$&&C.b()
if(D.f.aK(e+k,l)===0)w[e]=w[e]+f}}for(d=0,e=0;e<x;++e)d=Math.max(d,w[e])
x=B.cal(a2.ax,a2,d,a3)
a2.CW=x
x=a2.cx=x.Mq()
w=a2.ch
v=w.length
o=new Uint32Array(v)
a2.cy=o
for(--v,a0=0,a1=0;a1<=v;++a1){if(D.f.aK(a1,x)===0)a0=0
o[a1]=a0
a0+=w[a1]}x=D.f.eq(a2.x+x,x)
a2.ay=C.c([new Uint32Array(x-1)],y.w)}},
aP0(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.QK(w):u.PU(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.QK(v):u.PU(v))+1
break
default:throw C.n(C.bJ("Unknown LevelMode format."))}return x},
aP1(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.QK(w):u.PU(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.QK(v):u.PU(v))+1
break
default:throw C.n(C.bJ("Unknown LevelMode format."))}return x},
QK(d){var x
for(x=0;d>1;){++x
d=D.f.O(d,1)}return x},
PU(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.f.O(d,1)}return x+w},
aOX(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&C.b()
v+=t}return v},
afN(d,e,f,g,h){var x,w,v,u,t,s,r=J.jF(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.f.cN(1,v)
t=D.f.eq(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.f.eq(s+g-1,g)}return r}}
B.aeT.prototype={
bvX(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.aaB()
v.$flags&2&&C.u(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.aaB()
v.$flags&2&&C.u(v)
v[x]=u}}}}
B.aUe.prototype={
aLO(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.jF(t,y.bc)
for(x=0;x<t;++x)s[x]=new B.at6()
u.y=s
w=u.w
w.toString
v=D.f.ap(w*u.x,2)
u.z=new Uint16Array(v)},
Mq(){return this.x},
pi(a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
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
n=D.f.eq(a5,v)
m=D.f.eq(x,v)
v=n*v<a5?0:1
v=m-n+v
o.c=v
u=p.r
u===$&&C.b()
n=D.f.eq(a6,u)
m=D.f.eq(w,u)
l=n*u<a6?0:1
l=m-n+l
o.d=l
o.e=u
u=p.d
u===$&&C.b()
u=u/2|0
o.f=u
r+=v*l*u}k=a4.ac()
j=a4.ac()
if(j>=8192)throw C.n(C.bJ("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.fO(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.A(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.baa(i,d)
B.csb(a4,a4.Z(),a3.z,r)
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
B.csf(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.aNy(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=B.o6(!1,v*a3.x+73728)}v.a=0
for(;a6<=w;++a6)for(q=0;q<s;++q){v=a3.y
v===$&&C.b()
o=v[q]
v=o.e
v===$&&C.b()
if(D.f.aK(a6,v)!==0)continue
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
v.dr(u[l])}}v=a3.r
return J.cy(D.P.gad(v.c),0,v.a)},
FT(d,e,f){return this.pi(d,e,f,null,null)},
aNy(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&C.u(e)
e[w]=v}},
baa(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&C.u(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&C.u(e)
e[u]=0}return w-1}}
B.at6.prototype={}
B.aUf.prototype={
Mq(){return this.x},
pi(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=D.na.zO(a0.ex()),d=f.y
if(d==null){d=f.w
d.toString
d=f.y=B.o6(!1,f.x*d)}d.a=0
x=C.c([0,0,0,0],y.t)
w=new Uint32Array(1)
v=J.cy(D.bL.gad(w),0,null)
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
if(D.f.aK(a2,s)!==0)continue
s=n.f
s===$&&C.b()
m=D.f.eq(a1,s)
l=D.f.eq(u,s)
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
for(g=0;g<4;++g)f.y.aN(v[g])}break
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
for(g=0;g<2;++g)f.y.aN(v[g])}break
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
for(g=0;g<4;++g)f.y.aN(v[g])}break}}d=f.y
return J.cy(D.P.gad(d.c),0,d.a)},
FT(d,e,f){return this.pi(d,e,f,null,null)}}
B.aUg.prototype={
Mq(){return 1},
pi(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=B.o6(!1,(h-d.d)*2)
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
u=$.lJ()
u.$flags&2&&C.u(u)
u[0]=v
t=$.mx()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.aN(J.A(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.aN(J.A(d.a,d.d++))}q=J.cy(D.P.gad(g.c),0,g.a)
p=q.length
for(h=q.$flags|0,o=1;o<p;++o){v=q[o-1]
u=q[o]
h&2&&C.u(q)
q[o]=v+u-128}h=i.r
if(h==null||h.length!==p)h=i.r=new Uint8Array(p)
v=D.f.ap(p+1,2)
for(n=0,m=0;;v=j,n=k){if(m<p){l=m+1
k=n+1
u=q[n]
h.$flags&2&&C.u(h)
h[m]=u}else break
if(l<p){m=l+1
j=v+1
h[l]=q[v]}else break}return h},
FT(d,e,f){return this.pi(d,e,f,null,null)},
j(d){return C.q(this.w)}}
B.aeU.prototype={
Mq(){return this.x},
pi(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=D.na.zO(d.ex())
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
u=D.f.ap(t+1,2)
for(q=0,p=0;;u=m,q=n){if(p<t){o=p+1
n=q+1
r=k[q]
v.$flags&2&&C.u(v)
v[p]=r}else break
if(o<t){p=o+1
m=u+1
v[o]=k[u]}else break}return v},
FT(d,e,f){return this.pi(d,e,f,null,null)},
j(d){return C.q(this.w)}}
B.aOi.prototype={
iR(d){var x=new B.ad8(C.c([],y.m))
x.aey(d)
return this.a=x},
i5(d){var x=this.a
if(x==null)return null
return x.c[d].b},
mu(d,e){this.a=B.csd(d)
return this.i5(0)}}
B.Ur.prototype={
bo_(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.b,w=this.d,v=-1,u=-1,t=0;t<x;++t){s=w.kS(t)
r=w.kR(t)
q=w.kQ(t)
p=w.m5(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
acb(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new C.qJ(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.kS(u)
s=x.kR(u)
r=x.kQ(u)
v.OX(u,t,s,r,u===q.c?0:255)}return v}}
B.Us.prototype={
aLx(d){var x,w,v,u,t,s,r=this
r.a=d.ac()
r.b=d.ac()
r.c=d.ac()
r.d=d.ac()
x=d.bz()
r.e=(x&64)!==0
if((x&128)!==0){r.f=B.caQ(D.f.cN(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.A(d.a,d.d++)
t=J.A(d.a,d.d++)
s=J.A(d.a,d.d++)
v.d.n9(w,u,t,s)}}r.x=d.d-d.b}}
B.aeV.prototype={}
B.adQ.prototype={
gbL(){return this.a},
gaQ(){return this.b}}
B.aRm.prototype={
iR(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.f=C.cc(d,!1,null,0)
n.a=new B.adQ(C.c([],y.b))
if(!n.aj4())return null
try{while(u=n.f,t=u.d,t<u.c){s=u.a
u.d=t+1
x=J.A(s,t)
switch(x){case 44:w=n.ap5()
if(w==null){u=n.a
return u}u=w
u.r=n.e
u.w=n.c
if(n.b!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new B.Ur(t,s,r,new C.qJ(new Uint8Array(C.b4(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.d}n.a.r.push(w)
break
case 33:u=n.f
v=J.A(u.a,u.d++)
if(J.p(v,255)){u=n.f
if(u.hi(J.A(u.a,u.d++))==="NETSCAPE2.0"){q=J.A(u.a,u.d++)
p=J.A(u.a,u.d++)
if(q===3&&p===1)n.r=u.ac()}else n.T1()}else if(J.p(v,249)){u=n.f
u.toString
n.b8M(u)}else n.T1()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
b8M(d){var x,w,v,u=this
d.bz()
x=d.bz()
u.e=d.ac()
u.d=d.bz()
d.bz()
u.c=D.f.O(x,2)&7
u.b=x&1
w=d.Pf(1,0)
if(J.A(w.a,w.d)===44){++d.d
v=u.ap5()
if(v==null)return
v.r=u.e
v.w=u.c
if(u.b!==0){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=B.ct0(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
i5(d){var x,w,v,u=this,t=u.f
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
x=v.x
x===$&&C.b()
t.d=x
return u.aRZ(v)},
mu(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.iR(a7)==null)return a6
x=a5.a.r.length
if(x===1)return a5.i5(0)
for(x=y.p,w=a6,v=w,u=0;t=a5.a.r,u<t.length;++u){a8=t[u]
s=a5.i5(u)
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
if(t){v.la(s)
w=s
continue}l=a8.f
if(!(l!=null)){t=a5.a.e
t.toString
l=t}t=o?a6:p.a
if(t==null)t=0
r=o?a6:p.b
if(r==null)r=0
k=C.fR(a6,a6,D.ay,0,D.bO,r,a6,0,1,l.acb(),D.ay,t,!1)
t=a8.w
if(t===2){t=a5.a.c.a
t=!D.P.gW(t)?t[0]:0
r=l.d
j=r.kS(t)
i=r.kR(t)
h=r.kQ(t)
g=t===l.c?0:255
t=new Uint8Array(4)
t[0]=j
t[1]=i
t[2]=h
t[3]=g
r=k.a
if(r!=null)r.lf(0,new C.uL(t))}else if(t!==3)if(a8.f!=null){t=w.a
t=t==null?a6:t.gdc()
t.toString
f=C.D(x,x)
for(r=l.b,e=0;e<r;++e)f.m(0,e,l.bo_(t.kS(e),t.kR(e),t.kQ(e),t.m5(e)))
t=k.a
d=t==null?a6:J.hf(t.gad(t))
if(d==null){t=k.a
t=t==null?a6:t.gad(t)
if(t==null)t=D.P.gad(new Uint8Array(0))
d=J.hf(t)}t=w.a
a0=t==null?a6:J.hf(t.gad(t))
if(a0==null){t=w.a
t=t==null?a6:t.gad(t)
if(t==null)t=D.P.gad(new Uint8Array(0))
a0=J.hf(t)}for(a1=d.length,t=d.$flags|0,a2=0;a2<a1;++a2){a3=f.h(0,a0[a2])
if(a3!==-1){a3.toString
t&2&&C.u(d)
d[a2]=a3}}}k.y=s.y
for(t=s.a,t=t.gV(t);t.q();){a4=t.gI()
if(a4.gao()!==0){r=a4.gj9()
q=a8.a
q===$&&C.b()
p=a4.gju()
o=a8.b
o===$&&C.b()
k.y5(r+q,p+o,a4)}}v.la(k)
w=k}return v},
ap5(){var x,w=this.f
if(w.d>=w.c)return null
x=new B.aeV()
x.aLx(w);++this.f.d
this.T1()
return x},
aRZ(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.w==null){n.w=new Uint8Array(256)
n.x=new Uint8Array(4095)
n.y=new Uint8Array(4096)
n.z=new Uint32Array(4096)}x=n.Q=n.f.bz()
w=D.f.cF(1,x)
n.dy=w;++w
n.dx=w
n.db=w+1;++x
n.cy=x
n.cx=D.f.cF(1,x)
n.ay=0
n.CW=4098
n.at=n.ax=0
x=n.w
x.toString
x.$flags&2&&C.u(x)
x[0]=0
x=n.z
x.toString
D.bL.fz(x,0,4096,4098)
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
s=C.fR(m,m,D.ay,0,D.bO,w,m,0,1,t.acb(),D.ay,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&C.b()
if(x){x=d.b
x===$&&C.b()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+A.e4J[q];o<w;o+=A.eK_[q],++p){if(!n.aj5(r))return s
n.aqL(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.aj5(r))return s
n.aqL(s,o,t,r)}return s},
aqL(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.dD(x,e,w,0,0)}},
aj4(){var x,w,v,u,t,s=this,r=s.f.hi(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.f.ac()
x=s.a
x.toString
x.b=s.f.ac()
w=s.f.bz()
x=s.a
x.toString
x.c=new C.uL(new Uint8Array(C.b4(C.c([s.f.bz()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=B.caQ(D.f.cN(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
u=J.A(x.a,x.d++)
x=s.f
t=J.A(x.a,x.d++)
x=s.f
w=J.A(x.a,x.d++)
s.a.e.d.n9(v,u,t,w)}}s.a.toString
return!0},
aj5(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.aSa(d))return!1
if(x.as===0)x.T1()
return!0},
T1(){var x,w,v,u=this.f
if(u.d>=u.c)return!0
x=u.bz()
for(;;){if(x!==0){u=this.f
u=u.d<u.c}else u=!1
if(!u)break
u=this.f
w=u.d+=x
if(w>=u.c)return!0
v=u.a
u.d=w+1
x=J.A(v,w)}return!0},
aSa(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ay
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
w=u}}for(k=d.$flags|0;w<x;){s=l.ch=l.aS9()
if(s==null)return!1
v=l.dx
if(s===v)return!1
t=l.dy
if(s===t){for(t=l.z,r=0;r<=4095;++r){t.toString
t.$flags&2&&C.u(t)
t[r]=4098}l.db=v+1
v=l.Q+1
l.cy=v
l.cx=D.f.cF(1,v)
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
t=l.a2g(v,s,t)
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
v=l.a2g(t,v,n)
o.$flags&2&&C.u(o)
o[q]=v}else{o===$&&C.b()
p.toString
v=l.a2g(t,p,n)
o.$flags&2&&C.u(o)
o[q]=v}}v=l.ch
v.toString
l.CW=v}}return!0},
aS9(){var x,w,v,u,t=this
if(t.cy>12)return null
while(x=t.ax,w=t.cy,x<w){x=t.aO7()
x.toString
w=t.at
v=t.ax
t.at=(w|D.f.cF(x,v))>>>0
t.ax=v+8}v=t.at
u=A.eNr[w]
t.at=D.f.ef(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
a2g(d,e,f){var x,w,v=0
for(;;){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
aO7(){var x,w,v=this,u=v.w,t=u[0],s=u.$flags|0
if(t===0){t=v.f.bz()
s&2&&C.u(u)
u[0]=t
u=v.w
t=u[0]
if(t===0)return null
D.P.dJ(u,1,1+t,v.f.fO(t).ex())
u=v.w
x=u[1]
u.$flags&2&&C.u(u)
u[1]=2
u[0]=u[0]-1}else{w=u[1]
s&2&&C.u(u)
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
B.Kc.prototype={
H(){return"IcoType."+this.b}}
B.aTj.prototype={
gbL(){return 0},
gaQ(){return 0}}
B.aez.prototype={}
B.aTh.prototype={
gaQ(){return D.f.ap(B.Cr.prototype.gaQ.call(this),2)},
gLJ(){return!(this.d===40&&this.f===32)&&B.Cr.prototype.gLJ.call(this)}}
B.aTi.prototype={
iR(d){var x=C.cc(d,!1,null,0)
this.a=x
return this.b=B.cb4(x)},
mu(d,e){var x,w,v,u=this
if(u.iR(d)==null)return null
x=u.b.e.length
if(x===1)return u.i5(0)
for(w=null,v=0;v<u.b.e.length;++v){e=u.i5(v)
if(e==null)continue
if(w==null){e.w=D.bO
w=e}else w.la(e)}return w},
i5(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=this.a
if(a7!=null){x=this.b
x=x==null||a8>=x.d}else x=!0
if(x)return a6
w=this.b.e[a8]
x=a7.a
a7=a7.b+w.e
v=w.d
u=J.HW(x,a7,a7+v)
t=new C.WZ(C.c2m())
y.D.a(u)
if(t.ET(u))return t.bQ(u)
s=B.o6(!1,14)
s.dr(19778)
s.dh(v)
s.dh(0)
s.dh(0)
a7=C.cc(u,!1,a6,0)
x=B.c8R(C.cc(J.cy(D.P.gad(s.c),0,s.a),!1,a6,0))
v=a7.d
r=a7.Z()
q=a7.Z()
p=$.fz()
p.$flags&2&&C.u(p)
p[0]=q
q=$.js()
o=q[0]
p[0]=a7.Z()
q=q[0]
n=a7.ac()
m=a7.ac()
l=A.UW[a7.Z()]
a7.Z()
p[0]=a7.Z()
p[0]=a7.Z()
p=a7.Z()
a7.Z()
k=new B.aTh(x,o,q,r,n,m,l,p,v)
k.aev(a7,x)
if(r!==40&&n!==1)return a6
j=p===0&&m<=8?40+4*D.f.cN(1,m):40+4*p
x.b=j
s.a-=4
s.dh(j)
i=C.cc(u,!1,a6,0)
h=new B.aKm(!0)
h.a=i
h.b=k
g=h.i5(0)
if(m>=32)return g
f=32-D.f.aK(o,32)
e=D.f.ap(f===32?o:o+f,8)
for(a7=q<0,x=q===0,q=1/q<0,d=0;d<D.f.ap(B.Cr.prototype.gaQ.call(k),2);++d){if(!(x?q:a7))a0=d
else{v=g.a
v=v==null?a6:v.b
a0=(v==null?0:v)-1-d}a1=i.hH(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a6:v.cE(0,a0,a6)
if(a2==null)a2=new C.eq()
for(a3=0;a3<o;){a4=J.A(a1.a,a1.d++)
a5=7
for(;;){if(!(a5>-1&&a3<o))break
if((a4&D.f.cF(1,a5))>>>0!==0)a2.sao(0)
a2.q();++a3;--a5}}}return g}}
B.abl.prototype={}
B.DI.prototype={}
B.DJ.prototype={}
B.UF.prototype={}
B.aUw.prototype={}
B.z2.prototype={}
B.aUy.prototype={
aAe(d){var x,w,v,u,t,s=this,r=C.cc(d,!0,null,0)
s.a=r
x=r.Pf(2,0)
if(J.A(x.a,x.d)!==255||J.A(x.a,x.d+1)!==216)return!1
if(s.ty()!==216)return!1
w=s.ty()
v=!1
u=!1
for(;;){if(w!==217){r=s.a
r=r.d<r.c}else r=!1
if(!r)break
t=s.a.ac()
if(t<2)break
r=s.a
r.d=r.d+(t-2)
switch(w){case 192:case 193:case 194:v=!0
break
case 218:u=!0
break}w=s.ty()}return v&&u},
bvU(d){var x,w,v,u,t,s,r=this
r.a=C.cc(d,!0,null,0)
if(r.ty()!==216)return null
x=new B.aUC()
w=r.ty()
v=!1
u=!1
for(;;){if(w!==217){t=r.a
t=t.d<t.c}else t=!1
if(!t)break
switch(w){case 192:case 193:case 194:r.amZ(w,r.amV())
v=!0
break
case 218:r.ap4()
u=!0
break
default:r.ap4()
break}w=r.ty()}t=r.d
if(t!=null){s=t.e
s.toString
x.a=s
t=t.d
t.toString
x.b=t}t=r.d=null
D.i.a2(r.x)
return v&&u?x:t},
hZ(d){var x,w,v,u,t,s,r,q,p=this
p.a=C.cc(d,!0,null,0)
p.b8G()
if(p.x.length!==1)throw C.n(C.bJ("Only single frame JPEGs supported"))
for(x=p.Q,w=0;v=p.d,u=v.z,w<u.length;++w){t=v.y.h(0,u[w])
v=t.a
u=p.d
s=u.f
r=t.b
q=u.r
u=p.aOf(u,t)
v=v===1&&s===2?1:0
x.push(new B.abl(u,v,r===1&&q===2?1:0))}},
b8G(){var x,w,v,u,t=this
if(t.ty()!==216)throw C.n(C.bJ("Start Of Image marker not found."))
x=t.ty()
for(;;){if(x!==217){w=t.a
w===$&&C.b()
w=w.d<w.c}else w=!1
if(!w)break
v=t.amV()
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:t.b8H(x,v)
break
case 219:t.b8K(v)
break
case 192:case 193:case 194:t.amZ(x,v)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw C.n(C.bJ("Unhandled frame type "+D.f.ip(x,16)))
case 196:t.b8J(v)
break
case 221:t.e=v.ac()
break
case 218:t.b8X(v)
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
break}if(x!==0)throw C.n(C.bJ("Unknown JPEG marker "+D.f.ip(x,16)))
break}x=t.ty()}},
ap4(){var x,w=this.a
w===$&&C.b()
x=w.ac()
if(x<2)throw C.n(C.bJ("Invalid Block"))
w=this.a
w.d=w.d+(x-2)},
amV(){var x,w=this.a
w===$&&C.b()
x=w.ac()
if(x<2)throw C.n(C.bJ("Invalid Block"))
return this.a.fO(x-2)},
ty(){var x,w=this,v=w.a
v===$&&C.b()
if(v.d>=v.c)return 0
do{do{x=w.a.bz()
if(x!==255){v=w.a
v=v.d<v.c}else v=!1}while(v)
v=w.a
if(v.d>=v.c)return x
do{x=w.a.bz()
if(x===255){v=w.a
v=v.d<v.c}else v=!1}while(v)
if(x===0){v=w.a
v=v.d<v.c}else v=!1}while(v)
return x},
b8L(d){if(d.Z()!==1165519206)return
if(d.ac()!==0)return
this.r.hZ(d)},
b8H(d,e){var x,w,v,u,t=this,s=e
if(d===224){x=s
w=!1
if(J.A(x.a,x.d)===74){x=s
if(J.A(x.a,x.d+1)===70){x=s
if(J.A(x.a,x.d+2)===73){x=s
if(J.A(x.a,x.d+3)===70){x=s
x=J.A(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new B.aUD()
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
s.Pf(14+3*w*v,14)}}else if(d===225)t.b8L(s)
else if(d===238){x=s
w=!1
if(J.A(x.a,x.d)===65){x=s
if(J.A(x.a,x.d+1)===100){x=s
if(J.A(x.a,x.d+2)===111){x=s
if(J.A(x.a,x.d+3)===98){x=s
if(J.A(x.a,x.d+4)===101){x=s
x=J.A(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){t.c=new B.aUw()
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
x.d=J.A(w.a,w.d+11)}}else if(d===254)try{s.bw0()}catch(u){C.aF(u)}},
b8K(d){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=this.w;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
t=J.A(u,v)
s=D.f.O(t,4)
t&=15
if(t>=4)throw C.n(C.bJ("Invalid number of quantization tables"))
v=w[t]
if(v==null){v=new Int16Array(64)
w[t]=v}for(u=s!==0,r=0;r<64;++r){q=u?d.ac():J.A(d.a,d.d++)
p=A.x4[r]
v.$flags&2&&C.u(v)
v[p]=q}}if(u)throw C.n(C.bJ("Bad length for DQT block"))},
amZ(d,e){var x,w,v,u,t,s,r,q=this
if(q.d!=null)throw C.n(C.bJ("Duplicate JPG frame data found."))
x=q.d=new B.afc(C.D(y.p,y.c),C.c([],y.t))
x.b=d===194
x.c=e.bz()
x=q.d
x.toString
x.d=e.ac()
x=q.d
x.toString
x.e=e.ac()
w=e.bz()
for(x=q.w,v=0;v<w;++v){u=J.A(e.a,e.d++)
t=J.A(e.a,e.d++)
s=D.f.O(t,4)
r=J.A(e.a,e.d++)
q.d.z.push(u)
q.d.y.m(0,u,new B.z2(s&15,t&15,x,r))}q.d.nS()
q.x.push(q.d)},
b8J(d){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=this.z,v=this.y;u=d.d,u<x;){t=d.a
d.d=u+1
s=J.A(t,u)
r=new Uint8Array(16)
for(q=0,p=0;p<16;++p){r[p]=J.A(d.a,d.d++)
q+=r[p]}o=d.hH(q)
d.d=d.d+(o.c-o.d)
n=o.ex()
if((s&16)!==0){s-=16
m=v}else m=w
if(m.length<=s)D.i.su(m,s+1)
m[s]=this.aOm(r,n)}},
b8X(d){var x,w,v,u,t,s,r,q=this,p=d.bz()
if(p<1||p>4)throw C.n(C.bJ("Invalid SOS block"))
x=C.E3(p,new B.aUA(q,d),!0,y.c)
w=d.bz()
v=d.bz()
u=d.bz()
t=D.f.O(u,4)
s=q.a
s===$&&C.b()
r=q.d
t=new B.afd(s,r,x,q.e,w,v,t&15,u&15)
s=r.w
s===$&&C.b()
t.f=s
t.r=r.b
t.oC()},
aOm(d,e){var x,w,v,u,t,s,r,q,p,o,n=C.c([],y.G),m=16
for(;;){if(!(m>0&&d[m-1]===0))break;--m}x=y.T
n.push(new B.OY(C.c([],x)))
w=n[0]
for(v=0,u=0;u<m;){for(t=0;t<d[u];++t){w=n.pop()
s=w.a
r=s.length
q=w.b
if(r<=q)D.i.su(s,q+1)
s[w.b]=new B.UF(e[v])
while(s=w.b,s>0)w=n.pop()
w.b=s+1
n.push(w)
for(;n.length<=u;w=p){s=C.c([],x)
p=new B.OY(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.i.su(r,o+1)
r[w.b]=new B.DJ(s)}++v}++u
if(u<m){s=C.c([],x)
p=new B.OY(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.i.su(r,o+1)
r[w.b]=new B.DJ(s)
w=p}}return n[0].a},
aOf(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.e
d===$&&C.b()
x=a1.f
x===$&&C.b()
w=d<<3>>>0
v=new Int32Array(64)
u=new Uint8Array(64)
t=C.bo(x*8,null,!1,y.ac)
for(s=a1.c,r=a1.d,q=0,p=0;p<x;++p){o=p<<3>>>0
for(n=0;n<8;++n,q=m){m=q+1
t[q]=new Uint8Array(w)}for(l=0;l<d;++l){k=s[r]
k.toString
j=a1.r
j===$&&C.b()
B.cIN(k,j[p][l],u,v)
i=l<<3>>>0
for(h=0,g=0;g<8;++g){f=t[o+g]
for(n=0;n<8;++n,h=e){f.toString
e=h+1
k=u[h]
f.$flags&2&&C.u(f)
f[i+n]=k}}}}return t}}
B.OY.prototype={}
B.afc.prototype={
nS(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=new C.dS(x,x.r,x.e);w.q();){v=x.h(0,w.d)
g.f=Math.max(g.f,v.a)
g.r=Math.max(g.r,v.b)}w=g.e
w.toString
g.w=D.m.dQ(w/8/g.f)
w=g.d
w.toString
g.x=D.m.dQ(w/8/g.r)
for(w=new C.dS(x,x.r,x.e),u=y.k,t=y.H;w.q();){s=x.h(0,w.d)
s.toString
r=g.e
r.toString
q=s.a
p=D.m.dQ(D.m.dQ(r/8)*q/g.f)
r=g.d
r.toString
o=s.b
n=D.m.dQ(D.m.dQ(r/8)*o/g.r)
m=g.w*q
l=g.x*o
k=J.jF(l,t)
for(j=0;j<l;++j){i=J.jF(m,u)
for(h=0;h<m;++h)i[h]=new Int32Array(64)
k[j]=i}s.e=p
s.f=n
s.r=k}}}
B.aUC.prototype={
gbL(){return this.a},
gaQ(){return this.b}}
B.aUD.prototype={}
B.afd.prototype={
oC(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.y,f=g.length,e=h.r
e.toString
if(e)if(h.Q===0)x=h.at===0?h.gaRT():h.gaRV()
else x=h.at===0?h.gaRK():h.gaRM()
else x=h.gaRQ()
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
p=D.f.eq(t,v)
o=D.f.aK(t,v)
v=r.r
v===$&&C.b()
x.$2(r,v[p][o]);++t;++q}}else{q=0
for(;;){v=h.z
v.toString
if(!(q<v))break
for(s=0;s<f;++s){r=g[s]
n=r.a
m=r.b
for(l=0;l<m;++l)for(k=0;k<n;++k)h.aS_(r,x,t,l,k)}++t;++q}}h.ch=0
j=J.A(w.a,w.d)
i=J.A(w.a,w.d+1)
if(j===255)if(i>=208&&i<=215)w.d+=2
else break}},
z2(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.f.jc(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.bz()
w.ay=x
if(x===255)if(v.bz()!==0)return null
w.ch=7
return D.f.O(w.ay,7)&1},
Ix(d){var x,w=new B.DJ(d)
while(x=this.z2(),x!=null){if(w instanceof B.DJ)w=w.a[x]
if(w instanceof B.UF)return w.a}return null},
a4d(d){var x,w
for(x=0;d>0;){w=this.z2()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
J9(d){var x
if(d==null)return 0
if(d===1)return this.z2()===1?1:-1
x=this.a4d(d)
if(x==null)return 0
if(x>=D.f.cF(1,d-1))return x
return x+D.f.cN(-1,d)+1},
aRR(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&C.b()
x=r.Ix(q)
w=x===0?0:r.J9(x)
q=d.y
q===$&&C.b()
q+=w
d.y=q
e.$flags&2&&C.u(e)
e[0]=q
for(v=1;v<64;){q=d.x
q===$&&C.b()
u=r.Ix(q)
if(u==null)break
t=u&15
s=u>>>4
if(t===0){if(s<15)break
v+=16
continue}v+=s
t=r.J9(t)
e[A.x4[v]]=t;++v}},
aRU(d,e){var x,w,v=d.w
v===$&&C.b()
x=this.Ix(v)
w=x===0?0:D.f.cN(this.J9(x),this.ax)
v=d.y
v===$&&C.b()
v+=w
d.y=v
e.$flags&2&&C.u(e)
e[0]=v},
aRW(d,e){var x=e[0],w=this.z2()
w.toString
w=D.f.cN(w,this.ax)
e.$flags&2&&C.u(e)
e[0]=(x|w)>>>0},
aRL(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.CW
if(o>0){p.CW=o-1
return}x=p.Q
w=p.as
for(o=p.ax,v=e.$flags|0;x<=w;){u=d.x
u===$&&C.b()
u=p.Ix(u)
u.toString
t=u&15
s=u>>>4
if(t===0){if(s<15){o=p.a4d(s)
o.toString
p.CW=o+D.f.cN(1,s)-1
break}x+=16
continue}x+=s
r=A.x4[x]
u=p.J9(t)
q=D.f.cN(1,o)
v&2&&C.u(e)
e[r]=u*q;++x}},
aRN(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.Q,n=p.as
A:for(x=p.ax,w=e.$flags|0,v=0;o<=n;){u=A.x4[o]
t=p.cx
switch(t){case 0:t=d.x
t===$&&C.b()
s=p.Ix(t)
if(s==null)throw C.n(C.bJ("Invalid progressive encoding"))
r=s&15
v=s>>>4
if(r===0)if(v<15){t=p.a4d(v)
t.toString
p.CW=t+D.f.cN(1,v)
p.cx=4}else{p.cx=1
v=16}else{if(r!==1)throw C.n(C.bJ("invalid ACn encoding"))
p.cy=p.J9(r)
p.cx=v!==0?2:3}continue A
case 1:case 2:q=e[u]
if(q!==0){t=p.z2()
t.toString
t=D.f.cN(t,x)
w&2&&C.u(e)
e[u]=q+t}else{--v
if(v===0)p.cx=t===2?3:0}break
case 3:t=e[u]
if(t!==0){q=p.z2()
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
if(t!==0){q=p.z2()
q.toString
q=D.f.cN(q,x)
w&2&&C.u(e)
e[u]=t+q}break}++o}if(p.cx===4)if(--p.CW===0)p.cx=0},
aS_(d,e,f,g,h){var x,w,v=this.f
v===$&&C.b()
x=D.f.eq(f,v)*d.b+g
w=D.f.aK(f,v)*d.a+h
v=d.r
v===$&&C.b()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
B.Vd.prototype={
iR(d){C.cc(d,!0,null,0)
return B.aUz().bvU(d)},
mu(d,e){var x=B.aUz()
x.hZ(d)
if(x.x.length!==1)throw C.n(C.bJ("only single frame JPEGs supported"))
return B.cHy(x)},
bQ(d){return this.mu(d,null)}}
B.zA.prototype={
H(){return"PnmFormat."+this.b}}
B.EV.prototype={
gbL(){return this.a},
gaQ(){return this.b}}
B.b1r.prototype={
ET(d){var x
this.b=C.cc(d,!1,null,0)
x=this.R1()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
mu(d,e){if(this.iR(d)==null)return null
return this.i5(0)},
iR(d){var x,w,v=this
v.b=C.cc(d,!1,null,0)
x=v.R1()
if(x==="P1"){w=v.a=new B.EV(A.rI)
w.e=A.a3X}else if(x==="P2"){w=v.a=new B.EV(A.rI)
w.e=A.a3Y}else if(x==="P5"){w=v.a=new B.EV(A.rI)
w.e=A.EN}else if(x==="P3"){w=v.a=new B.EV(A.rI)
w.e=A.a3Z}else if(x==="P6"){w=v.a=new B.EV(A.rI)
w.e=A.EO}else return v.b=null
w.a=v.IY()
w=v.a
w.toString
w.b=v.IY()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
i5(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===A.a3X){x=q.a
w=C.fR(r,r,D.eN,0,D.bO,q.b,r,0,1,r,D.ay,x,!1)
for(q=w.a,q=q.gV(q);q.q();){v=q.gI()
if(s.R1()==="1")v.iu(1,1,1)
else v.iu(0,0,0)}return w}else if(x===A.a3Y||x===A.EN){u=s.IY()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=C.fR(r,r,s.avH(u),0,D.bO,q,r,0,1,r,D.ay,x,!1)
for(q=w.a,q=q.gV(q);q.q();){v=q.gI()
t=s.Sp(s.a.e,u)
v.iu(t,t,t)}return w}else if(x===A.a3Z||x===A.EO){u=s.IY()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=C.fR(r,r,s.avH(u),0,D.bO,q,r,0,3,r,D.ay,x,!1)
for(q=w.a,q=q.gV(q);q.q();)q.gI().iu(s.Sp(s.a.e,u),s.Sp(s.a.e,u),s.Sp(s.a.e,u))
return w}return r},
avH(d){if(d>255)return D.cS
if(d>15)return D.ay
if(d>3)return D.kA
if(d>1)return D.kz
return D.eN},
Sp(d,e){if(d===A.EN||d===A.EO)return this.b.bz()
return this.IY()},
IY(){var x,w,v=this.R1()
if(J.aX(v)===0)return 0
try{x=C.ie(v,null)
return x}catch(w){return 0}},
R1(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.i.ej(x,0)
w=D.o.aJ(t.bw_())
if(w.length===0)return""
while(D.o.bj(w,"#"))w=D.o.aJ(this.b.ayV(70))
t=y.U
v=C.J(new C.al(C.c(w.split(" "),y.s),new B.b1s(),t),t.i("z.E"))
for(t=v.length,u=0;u<t;++u)if(D.o.bj(v[u],"#")){D.i.su(v,u)
break}D.i.L(x,v)
if(x.length===0)return""
return D.i.ej(x,0)}}
B.ahU.prototype={}
B.ahV.prototype={}
B.tK.prototype={}
B.ahX.prototype={}
B.ahY.prototype={}
B.ai0.prototype={}
B.ai1.prototype={}
B.Xg.prototype={}
B.ai_.prototype={}
B.b33.prototype={
aLZ(d){var x,w,v,u,t=this
d.ac()
d.ac()
d.ac()
d.ac()
x=D.f.ap(d.c-d.d,8)
if(x>0){t.e=new Uint16Array(x)
t.f=new Uint16Array(x)
t.r=new Uint16Array(x)
t.w=new Uint16Array(x)
for(w=0;w<x;++w){v=t.e
u=d.ac()
v.$flags&2&&C.u(v)
v[w]=u
u=t.f
v=d.ac()
u.$flags&2&&C.u(u)
u[w]=v
v=t.r
u=d.ac()
v.$flags&2&&C.u(v)
v[w]=u
u=t.w
v=d.ac()
u.$flags&2&&C.u(u)
u[w]=v}}}}
B.LM.prototype={
ayR(d,e,f,g,h,i,j){if(d.c-d.d<2)return
if(h==null)h=d.ac()
switch(h){case 0:g.toString
this.b8W(d,e,f,g)
break
case 1:if(i==null)i=this.b8T(d,f)
g.toString
this.b8V(d,e,f,g,i,j)
break
default:throw C.n(C.bJ("Unsupported compression: "+h))}},
bvZ(d,e,f,g){return this.ayR(d,e,f,g,null,null,0)},
b8T(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.ac()
return w},
b8W(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.P.fz(x,0,w,255)
return}this.c=d.fO(w).ex()},
b8V(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.P.fz(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.hH(h[w])
d.d=d.d+(s.c-s.d)
x=this.c
x.toString
this.aS4(s,x,v)
v+=e}},
aS4(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.A(t,u)
t=$.lJ()
t.$flags&2&&C.u(t)
t[0]=u
s=$.mx()[0]
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
gbG(){return this.a}}
B.qT.prototype={
H(){return"PsdColorMode."+this.b}}
B.b35.prototype={
aM_(d){var x,w,v=this
v.as=C.cc(d,!0,null,0)
v.b8m()
if(v.c!==943870035)return
x=v.as.Z()
v.as.fO(x)
x=v.as.Z()
v.at=v.as.fO(x)
x=v.as.Z()
v.ax=v.as.fO(x)
w=v.as
v.ay=w.fO(w.c-w.d)},
oC(){var x,w=this
if(w.c===943870035){x=w.as
x===$&&C.b()
x=x==null}else x=!0
if(x)return!1
w.b8R()
w.b8S()
w.b8U()
w.ay=w.ax=w.at=w.as=null
return!0},
auc(){if(!this.oC())return null
return this.bwx()},
bwx(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.y
if(d!=null)return d
d=f.a
d=C.fR(e,e,D.ay,0,D.bO,f.b,e,0,4,e,D.ay,d,!1)
f.y=d
d.a2(0)
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
m=n==null?e:n.cE(o,r,e)
if(m==null)m=new C.eq()
l=D.m.F(m.ga5())
k=D.m.F(m.gag())
j=D.m.F(m.gah())
i=D.m.F(m.gao())
p.toString
if(p>=0&&p<f.a&&d&&s<f.b){n=w.b
n.toString
h=f.y.a
g=h==null?e:h.cE(n+o,q,e)
if(g==null)g=new C.eq()
f.aNT(D.m.F(g.ga5()),D.m.F(g.gag()),D.m.F(g.gah()),D.m.F(g.gao()),l,k,j,i,u,v,g)}++o;++p}++r;++s}}++x}d=f.y
d.toString
return d},
aNT(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s=k/255*m
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
case 1836411936:u=D.f.O(d*h,8)
v=D.f.O(e*i,8)
w=D.f.O(f*j,8)
x=k
break
case 1768188278:u=B.b36(d,h)
v=B.b36(e,i)
w=B.b36(f,j)
x=k
break
case 1818391150:u=B.b38(d,h)
v=B.b38(e,i)
w=B.b38(f,j)
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
case 1935897198:u=B.c3g(d,h)
v=B.c3g(e,i)
w=B.c3g(f,j)
x=k
break
case 1684633120:u=B.b37(d,h)
v=B.b37(e,i)
w=B.b37(f,j)
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
case 1870030194:u=B.c3e(d,h,g,k)
v=B.c3e(e,i,g,k)
w=B.c3e(f,j,g,k)
x=k
break
case 1934387572:u=B.c3h(d,h)
v=B.c3h(e,i)
w=B.c3h(f,j)
x=k
break
case 1749838196:u=B.c3c(d,h)
v=B.c3c(e,i)
w=B.c3c(f,j)
x=k
break
case 1984719220:u=B.c3i(d,h)
v=B.c3i(e,i)
w=B.c3i(f,j)
x=k
break
case 1816947060:u=B.c3d(d,h)
v=B.c3d(e,i)
w=B.c3d(f,j)
x=k
break
case 1884055924:u=B.c3f(d,h)
v=B.c3f(e,i)
w=B.c3f(f,j)
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
case 1936553316:u=B.c3b(d,h)
v=B.c3b(e,i)
w=B.c3b(f,j)
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
n.sa5(D.m.F(d*t+u*s))
n.sag(D.m.F(e*t+v*s))
n.sah(D.m.F(f*t+w*s))
n.sao(D.m.F(g*t+x*s))},
b8m(){var x,w,v=this,u=v.as
u===$&&C.b()
v.c=u.Z()
u=v.as.ac()
v.d=u
if(u!==1){v.c=0
return}x=v.as.fO(6)
for(w=0;w<6;++w)if(J.A(x.a,x.d+w)!==0){v.c=0
return}v.e=v.as.ac()
v.b=v.as.Z()
v.a=v.as.Z()
v.f=v.as.ac()
v.r=A.f5B[v.as.ac()]},
b8R(){var x,w,v,u,t,s,r=this,q=r.at
q.d=q.b
for(q=r.z;x=r.at,x.d<x.c;){w=x.Z()
v=r.at.ac()
x=r.at
u=J.A(x.a,x.d++)
t=r.at.hi(u)
if((u&1)===0)++r.at.d
u=r.at.Z()
x=r.at
s=x.hH(u)
x.d=x.d+(s.c-s.d)
if((u&1)===1)++r.at.d
if(w===943868237)q.m(0,v,new B.ahW(v,t))}},
b8S(){var x,w,v,u,t,s,r,q,p,o=this,n=o.ax
n.d=n.b
x=n.Z()
if((x&1)!==0)++x
w=o.ax.fO(x)
n=y.l
o.w=C.c([],n)
if(x>0){v=w.ac()
u=$.lI()
u.$flags&2&&C.u(u)
u[0]=v
t=$.mw()[0]
if(t<0)t=-t
for(v=y.N,u=y.O,s=y.v,r=0;r<t;++r){q=new B.ahZ(C.D(v,u),C.c([],n),C.c([],s))
q.aM0(w)
o.w.push(q)}}for(r=0;n=o.w,r<n.length;++r)n[r].bvT(w,o)
x=o.ax.Z()
p=o.ax.fO(x)
if(x>0){p.ac()
p.ac()
p.ac()
p.ac()
p.ac()
p.ac()
p.bz()}},
b8U(){var x,w,v,u,t,s,r=this,q=r.ay
q.d=q.b
x=q.ac()
if(x===1){q=r.b
w=r.e
w===$&&C.b()
v=q*w
u=new Uint16Array(v)
for(t=0;t<v;++t)u[t]=r.ay.ac()}else u=null
r.x=C.c([],y.X)
t=0
for(;;){q=r.e
q===$&&C.b()
if(!(t<q))break
q=r.x
w=r.ay
w.toString
s=t===3?-1:t
s=new B.LM(s)
s.ayR(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=B.cdq(r.r,r.f,r.a,r.b,r.x)},
gbL(){return this.a},
gaQ(){return this.b}}
B.ahW.prototype={
gbG(){return this.a}}
B.ahZ.prototype={
aM0(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a1.Z(),a0=$.fz()
a0.$flags&2&&C.u(a0)
a0[0]=d
d=$.js()
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
x=a1.ac()
for(w=0;w<x;++w){d=a1.ac()
a0=$.lI()
a0.$flags&2&&C.u(a0)
a0[0]=d
v=$.mw()[0]
a1.Z()
e.as.push(new B.LM(v))}u=a1.Z()
if(u!==943868237)throw C.n(C.bJ("Invalid PSD layer signature: "+D.f.ip(u,16)))
e.r=a1.Z()
e.w=a1.bz()
a1.bz()
e.y=a1.bz()
if(a1.bz()!==0)throw C.n(C.bJ("Invalid PSD layer data"))
t=a1.Z()
s=a1.fO(t)
if(t>0){t=s.Z()
if(t>0){r=s.fO(t)
d=r.d
r.Z()
r.Z()
r.Z()
r.Z()
r.bz()
r.bz()
if(r.c-d===20)r.d+=2
else{r.bz()
r.bz()
r.Z()
r.Z()
r.Z()
r.Z()}}t=s.Z()
if(t>0)new B.b33().aLZ(s.fO(t))
t=s.bz()
e.Q=s.hi(t)
q=4-D.f.aK(t,4)-1
if(q>0)s.d+=q
for(d=s.c,a0=e.ay,p=e.cy,o=y.C;s.d<d;){u=s.Z()
if(u!==943868237)throw C.n(C.bJ("PSD invalid signature for layer additional data: "+D.f.ip(u,16)))
n=s.hi(4)
t=s.Z()
m=s.hH(t)
l=s.d+(m.c-m.d)
s.d=l
if((t&1)===1)s.d=l+1
a0.m(0,n,B.cwb(n,m))
if(n==="lrFX"){k=C.bP(o.a(a0.h(0,"lrFX")).b,null,0)
k.ac()
j=k.ac()
for(i=0;i<j;++i){k.hi(4)
h=k.hi(4)
g=k.Z()
if(h==="dsdw"){f=new B.ahV()
p.push(f)
f.a=k.Z()
k.Z()
k.Z()
k.Z()
k.Z()
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()
k.hi(8)
f.b=J.A(k.a,k.d++)!==0
J.A(k.a,k.d++)
J.A(k.a,k.d++)
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()}else if(h==="isdw"){f=new B.ahY()
p.push(f)
f.a=k.Z()
k.Z()
k.Z()
k.Z()
k.Z()
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()
k.hi(8)
f.b=J.A(k.a,k.d++)!==0
J.A(k.a,k.d++)
J.A(k.a,k.d++)
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()}else if(h==="oglw"){f=new B.ai0()
p.push(f)
f.a=k.Z()
k.Z()
k.Z()
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()
k.hi(8)
f.b=J.A(k.a,k.d++)!==0
J.A(k.a,k.d++)
if(f.a===2){k.ac()
k.ac()
k.ac()
k.ac()
k.ac()}}else if(h==="iglw"){f=new B.ahX()
p.push(f)
f.a=k.Z()
k.Z()
k.Z()
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()
k.hi(8)
f.b=J.A(k.a,k.d++)!==0
J.A(k.a,k.d++)
if(f.a===2){J.A(k.a,k.d++)
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()}}else if(h==="bevl"){f=new B.ahU()
p.push(f)
f.a=k.Z()
k.Z()
k.Z()
k.Z()
k.hi(8)
k.hi(8)
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()
J.A(k.a,k.d++)
J.A(k.a,k.d++)
J.A(k.a,k.d++)
f.b=J.A(k.a,k.d++)!==0
J.A(k.a,k.d++)
J.A(k.a,k.d++)
if(f.a===2){k.ac()
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()}}else if(h==="sofi"){f=new B.ai1()
p.push(f)
f.a=k.Z()
k.hi(4)
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()
J.A(k.a,k.d++)
f.b=J.A(k.a,k.d++)!==0
k.ac()
k.ac()
k.ac()
k.ac()
k.ac()}else k.d+=g}}}}},
bvT(d,e){var x,w,v,u,t,s=this,r=0
for(;;){x=s.as
x===$&&C.b()
if(!(r<x.length))break
x=x[r]
w=s.e
w===$&&C.b()
v=s.f
v===$&&C.b()
x.bvZ(d,w,v,e.f);++r}w=e.r
v=e.f
u=s.e
u===$&&C.b()
t=s.f
t===$&&C.b()
s.cx=B.cdq(w,v,u,t,x)}}
B.LN.prototype={}
B.b34.prototype={
mu(d,e){var x,w,v,u=null,t=B.c3a(d)
this.a=t
x=1
if(x===1){t=t.auc()
return t}for(w=u,v=0;v<x;++v){t=this.a
e=t==null?u:t.auc()
if(e==null)continue
if(w==null){e.w=A.dZB
w=e}else w.la(e)}return w},
iR(d){return this.a=B.c3a(d)}}
B.ai5.prototype={}
B.w7.prototype={
aG(d,e){return new B.w7(this.a*e,this.b*e,this.c*e)},
a0(d,e){return new B.w7(this.a+e.a,this.b+e.b,this.c+e.c)},
a6(d,e){return new B.w7(this.a-e.a,this.b-e.b,this.c-e.c)}}
B.kQ.prototype={
aG(d,e){var x=this
return new B.kQ(x.a*e,x.b*e,x.c*e,x.d*e)},
a0(d,e){var x=this
return new B.kQ(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
a6(d,e){var x=this
return new B.kQ(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
B.Xk.prototype={
gbL(){return this.a},
gaQ(){return this.b}}
B.LQ.prototype={
gaQ(){return this.f},
gbL(){return this.r}}
B.ai4.prototype={
gbL(){return this.a},
gaQ(){return this.b}}
B.pi.prototype={
sKk(d){var x=this.a,w=this.b
x.$flags&2&&C.u(x)
x[w+1]=d},
NQ(){var x=this.e,w=this.d
if(x)return new B.w7(A.la[w>>>9],A.la[w>>>4&31],A.eS[w&15])
else return new B.w7(A.eS[w>>>7&15],A.eS[w>>>3&15],A.x3[w&7])},
NS(){var x=this.e,w=this.d
if(x)return new B.kQ(A.la[w>>>9],A.la[w>>>4&31],A.eS[w&15],255)
else return new B.kQ(A.eS[w>>>7&15],A.eS[w>>>3&15],A.x3[w&7],A.x3[w>>>11&7])},
NR(){var x=this.r,w=this.f
if(x)return new B.w7(A.la[w>>>10],A.la[w>>>5&31],A.la[w&31])
else return new B.w7(A.eS[w>>>8&15],A.eS[w>>>4&15],A.eS[w&15])},
NT(){var x=this.r,w=this.f
if(x)return new B.kQ(A.la[w>>>10],A.la[w>>>5&31],A.la[w&31],255)
else return new B.kQ(A.eS[w>>>8&15],A.eS[w>>>4&15],A.eS[w&15],A.x3[w>>>12&7])},
Ia(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
qX(){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sKk(x.Ia())
x.d=w>>>1&16383
x.sKk(x.Ia())
x.e=(w>>>15&1)===1
x.sKk(x.Ia())
x.f=w>>>16&32767
x.sKk(x.Ia())
x.r=(w>>>31&1)===1
x.sKk(x.Ia())}}
B.b3f.prototype={
iR(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.aRP(d)
if(x!=null){w.a=d
return w.b=x}}x=w.aS3(d)
if(x!=null){w.a=d
return w.b=x}x=w.aS1(d)
if(x!=null){w.a=d
return w.b=x}return null},
aS3(d){var x,w,v=C.cc(d,!1,null,0)
if(v.Z()!==52)return null
if(v.Z()!==55727696)return null
x=C.c([0,0,0,0],y.t)
w=new B.LQ(x)
v.Z()
w.b=v.Z()
x[0]=v.bz()
x[1]=v.bz()
x[2]=v.bz()
x[3]=v.bz()
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
aS1(d){var x,w,v=C.cc(d,!1,null,0)
if(v.Z()!==52)return null
x=new B.Xk()
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
aRP(d){var x,w,v,u,t,s,r=null,q=d.length,p=C.cc(d,!1,r,0)
if(p.Z()!==0)return r
x=new B.ai4()
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
i5(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
if(u instanceof B.ai4){u=u.a
x=v.b.gaQ()
w=v.a
w.toString
return v.a1f(u,x,w)}else if(u instanceof B.Xk){u=v.a
u.toString
return v.aS0(u)}else if(u instanceof B.LQ){u=v.a
u.toString
return v.aS2(u)}return null},
mu(d,e){if(this.iR(d)==null)return null
return this.i5(0)},
aS0(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
if(j<52||l.b==null)return k
x=l.b
x.toString
y.M.a(x)
w=C.cc(d,!1,k,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return k
u=x.a
t=x.b
if(u*t*x.f/8>j-52)return k
switch(x.d&255){case 16:s=C.fR(k,k,D.ay,0,D.bO,t,k,0,4,k,D.ay,u,!1)
for(x=s.a,x=x.gV(x);x.q();){r=x.gI()
q=J.A(w.a,w.d++)
p=J.A(w.a,w.d++)
r.sa5(p&240)
r.sag((p&15)<<4)
r.sah(q&240)
r.sao((q&15)<<4)}return s
case 17:s=C.fR(k,k,D.ay,0,D.bO,t,k,0,4,k,D.ay,u,!1)
for(x=s.a,x=x.gV(x);x.q();){r=x.gI()
o=w.ac()
n=(o&1)!==0?255:0
r.sa5(o>>>8&248)
r.sag(o>>>3&248)
r.sah((o&62)<<2)
r.sao(n)}return s
case 18:s=C.fR(k,k,D.ay,0,D.bO,t,k,0,4,k,D.ay,u,!1)
for(x=s.a,x=x.gV(x);x.q();){r=x.gI()
r.sa5(J.A(w.a,w.d++))
r.sag(J.A(w.a,w.d++))
r.sah(J.A(w.a,w.d++))
r.sao(J.A(w.a,w.d++))}return s
case 19:s=C.fR(k,k,D.ay,0,D.bO,t,k,0,3,k,D.ay,u,!1)
for(x=s.a,x=x.gV(x);x.q();){r=x.gI()
o=w.ac()
r.sa5(o>>>8&248)
r.sag(o>>>3&252)
r.sah((o&31)<<3)}return s
case 20:s=C.fR(k,k,D.ay,0,D.bO,t,k,0,3,k,D.ay,u,!1)
for(x=s.a,x=x.gV(x);x.q();){r=x.gI()
o=w.ac()
r.sa5((o&31)<<3)
r.sag(o>>>2&248)
r.sah(o>>>7&248)}return s
case 21:s=C.fR(k,k,D.ay,0,D.bO,t,k,0,3,k,D.ay,u,!1)
for(x=s.a,x=x.gV(x);x.q();){r=x.gI()
r.sa5(J.A(w.a,w.d++))
r.sag(J.A(w.a,w.d++))
r.sah(J.A(w.a,w.d++))}return s
case 22:s=C.fR(k,k,D.ay,0,D.bO,t,k,0,1,k,D.ay,u,!1)
for(x=s.a,x=x.gV(x);x.q();)x.gI().sa5(J.A(w.a,w.d++))
return s
case 23:s=C.fR(k,k,D.ay,0,D.bO,t,k,0,4,k,D.ay,u,!1)
for(x=s.a,x=x.gV(x);x.q();){r=x.gI()
n=J.A(w.a,w.d++)
m=J.A(w.a,w.d++)
r.sa5(m)
r.sag(m)
r.sah(m)
r.sao(n)}return s
case 24:return k
case 25:return x.y===0?l.ahi(u,t,w.ex()):l.a1f(u,t,w.ex())}return k},
aS2(d){var x,w,v,u=this
if(!(u.b instanceof B.LQ))return null
x=C.cc(d,!1,null,0)
w=x.d+=52
v=y.i.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.ahi(v.r,v.f,x.ex())
case 3:return u.a1f(v.r,v.f,x.ex())}return null},
ahi(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=C.fR(b5,b5,D.ay,0,D.bO,c6,b5,0,3,b5,D.ay,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.lK(D.P.gad(c7),0,null),c0=new B.pi(b9),c1=new B.pi(J.lK(D.P.gad(c7),0,null)),c2=new B.pi(J.lK(D.P.gad(c7),0,null)),c3=new B.pi(J.lK(D.P.gad(c7),0,null)),c4=new B.pi(J.lK(D.P.gad(c7),0,null))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=B.w8(v,x)<<1>>>0
c0.qX()
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=B.w8(l,p)<<1>>>0
c1.qX()
c2.b=B.w8(k,p)<<1>>>0
c2.qX()
c3.b=B.w8(l,o)<<1>>>0
c3.qX()
c4.b=B.w8(k,o)<<1>>>0
c4.qX()
j=c1.NQ()
i=A.dI[r][0]
h=c2.NQ()
g=A.dI[r][1]
f=c3.NQ()
e=A.dI[r][2]
d=c4.NQ()
a0=A.dI[r][3]
a1=c1.NR()
a2=A.dI[r][0]
a3=c2.NR()
a4=A.dI[r][1]
a5=c3.NR()
a6=A.dI[r][2]
a7=c4.NR()
a8=A.dI[r][3]
a9=A.UF[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.f.O((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.f.O((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.f.O((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.dD(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
a1f(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=C.fR(a4,a4,D.ay,0,D.bO,b5,a4,0,4,a4,D.ay,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.lK(D.P.gad(b6),0,null),a9=new B.pi(a8),b0=new B.pi(J.lK(D.P.gad(b6),0,null)),b1=new B.pi(J.lK(D.P.gad(b6),0,null)),b2=new B.pi(J.lK(D.P.gad(b6),0,null)),b3=new B.pi(J.lK(D.P.gad(b6),0,null))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=B.w8(v,x)<<1>>>0
a9.qX()
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=B.w8(l,p)<<1>>>0
b0.qX()
b1.b=B.w8(k,p)<<1>>>0
b1.qX()
b2.b=B.w8(l,o)<<1>>>0
b2.qX()
b3.b=B.w8(k,o)<<1>>>0
b3.qX()
j=b0.NS()
i=A.dI[r][0]
h=b1.NS()
g=A.dI[r][1]
g=new B.kQ(j.a*i,j.b*i,j.c*i,j.d*i).a0(0,new B.kQ(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.NS()
i=A.dI[r][2]
i=g.a0(0,new B.kQ(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.NS()
g=A.dI[r][3]
f=i.a0(0,new B.kQ(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.NT()
h=A.dI[r][0]
i=b1.NT()
j=A.dI[r][1]
j=new B.kQ(g.a*h,g.b*h,g.c*h,g.d*h).a0(0,new B.kQ(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.NT()
h=A.dI[r][2]
h=j.a0(0,new B.kQ(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.NT()
j=A.dI[r][3]
e=h.a0(0,new B.kQ(i.a*j,i.b*j,i.c*j,i.d*j))
d=A.UF[s+t&3]
j=d[0]
i=d[1]
a0=D.f.O(f.a*j+e.a*i,7)
a1=D.f.O(f.b*j+e.b*i,7)
a2=D.f.O(f.c*j+e.c*i,7)
a3=D.f.O(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.ie(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
B.alp.prototype={
hZ(d){var x,w=this
if(d.c-d.d<18)return
w.a=d.bz()
w.b=d.bz()
x=d.bz()
w.c=x<12?A.eQU[x]:A.yr
d.ac()
w.e=d.ac()
w.f=d.bz()
d.ac()
d.ac()
w.x=d.ac()
w.y=d.ac()
w.z=d.bz()
w.Q=d.bz()},
axj(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===A.mM||w===A.mN){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0},
gbL(){return this.x},
gaQ(){return this.y}}
B.ml.prototype={
H(){return"TgaImageType."+this.b}}
B.bgN.prototype={
mu(d,e){if(this.iR(d)==null)return null
return this.i5(0)},
iR(d){var x,w,v,u,t=this
t.a=new B.alp(A.yr)
x=C.cc(d,!1,null,0)
t.b=x
w=x.fO(18)
t.a.hZ(w)
x=t.a
if(!x.axj())return null
v=t.b
v.d+=x.a
u=x.c
if(u===A.mM||u===A.mN)x.as=v.fO(x.e*D.f.O(x.f,3)).ex()
x=t.a
x.ax=t.b.d
return x},
i5(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===A.a7o)return x.ahh()
else if(w===A.a7n||w===A.mN)return x.aS6()
else if(w===A.mM)return x.ahh()
return null},
ahd(d,e){var x,w,v,u,t,s,r,q=this,p=C.cc(d,!1,null,0),o=q.a.f
if(o===16){o=q.b
o===$&&C.b()
x=o.ac()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<q.a.e;++s){e.qG(s,w)
e.qF(s,v)
e.qE(s,u)
e.qD(s,t)}}else{r=o===32
for(s=0;s<q.a.e;++s){u=J.A(p.a,p.d++)
v=J.A(p.a,p.d++)
w=J.A(p.a,p.d++)
t=r?J.A(p.a,p.d++):255
e.qG(s,w)
e.qF(s,v)
e.qE(s,u)
e.qD(s,t)}}},
aS6(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=C.fR(i,i,D.ay,0,D.bO,a0,i,0,a1,i,D.ay,d,h===A.mM||h===A.mN)
h=x.a
if((h==null?i:h.gdc())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.gdc()
d.toString
j.ahd(h,d)}w=x.gbL()
v=x.gaQ()-1
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
if(d!=null)d.kl(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}else{d=j.b
if(f){n=d.ac()
q=n>>>7&248
m=n>>>2&248
l=(n&31)<<3
k=(n&32768)!==0?0:255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.ie(u,v,q,m,l,k)
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
if(d!=null)d.ie(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}}else if(h)for(p=0;p<s;++p){d=j.b
q=J.A(d.a,d.d++)
o=u+1
d=x.a
if(d!=null)d.kl(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else if(f)for(p=0;p<s;++p){n=j.b.ac()
k=(n&32768)!==0?0:255
o=u+1
d=x.a
if(d!=null)d.ie(u,v,n>>>7&248,n>>>2&248,(n&31)<<3,k)
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
if(d!=null)d.ie(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}if(u>=w){--v
if(v<0)break
u=0}}return x},
ahh(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
g===$&&C.b()
x=i.a
g.d=x.ax
w=x.z
g=w===16
v=!0
if(!g)if(w!==32){u=x.c
if(u===A.mM||u===A.mN){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=C.fR(h,h,D.ay,0,D.bO,t,h,0,s,h,D.ay,u,x===A.mM||x===A.mN)
x=i.a
u=x.c
if(u===A.mM||u===A.mN){x=x.as
x.toString
u=r.a
u=u==null?h:u.gdc()
u.toString
i.ahd(x,u)}if(w===8)for(q=r.gaQ()-1;q>=0;--q){p=0
for(;;){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
o=J.A(g.a,g.d++)
g=r.a
if(g!=null)g.kl(p,q,o);++p}}else if(g)for(q=r.gaQ()-1;q>=0;--q){p=0
for(;;){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
n=i.b.ac()
m=(n&32768)!==0?0:255
g=r.a
if(g!=null)g.ie(p,q,n>>>7&248,n>>>2&248,(n&31)<<3,m);++p}}else for(q=r.gaQ()-1;q>=0;--q){p=0
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
if(g!=null)g.ie(p,q,j,k,l,m);++p}}return r}}
B.bgX.prototype={
hh(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.bz()}for(x=t.a,w=0;v=t.c,d>v;){w=D.f.cF(w,v)+(t.b&A.rl[v])
d-=v
t.c=8
t.b=J.A(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.bz()}x=D.f.cF(w,d)
v=t.b
u=t.c-d
w=x+(D.f.jc(v,u)&A.rl[d])
t.c=u}return w}}
B.alq.prototype={
j(d){var x=this,w=x.a,v=$.c0u().h(0,w)
if(v!=null)return v.a+": "+x.b.j(0)+" "+x.c
return"<"+w+">: "+x.b.j(0)+" "+x.c},
mU(){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.fO(x*(w!==D.ap?D.nF[w.a]:0))
switch(w.a){case 1:return u.e=new C.qq(new Uint8Array(C.b4(v.fO(x).ex())))
case 2:return u.e=new C.yI(x===0?"":v.hi(x-1))
case 7:return u.e=new C.qq(new Uint8Array(C.b4(v.fO(x).ex())))
case 3:return u.e=C.cbe(v,x)
case 4:return u.e=C.cb9(v,x)
case 5:return u.e=C.cba(v,x)
case 11:return u.e=C.cbg(v,x)
case 12:return u.e=C.cb8(v,x)
case 6:return u.e=new C.td(new Int8Array(C.b4(J.c0M(D.P.gad(v.ex()),0,x))))
case 8:return u.e=C.cbd(v,x)
case 9:return u.e=C.cbb(v,x)
case 10:return u.e=C.cbc(v,x)
case 0:return null}}}
B.bgZ.prototype={
blL(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.f.ap(u.a+7,8)
for(w=0,v=0;v<g;++v){u.a1d(d,w,f)
w+=x}},
a1d(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){while(w){v=p.vL(10)
u=A.UK[v]
t=D.f.O(u,1)&15
if(t===12){u=A.wZ[(v<<2&12|p.mh(2))>>>0]
s=D.f.O(u,1)
f+=D.f.O(u,4)&4095
p.jg(4-(s&7))}else if(t===0)throw C.n(C.bJ("TIFFFaxDecoder0"))
else if(t===15)throw C.n(C.bJ("TIFFFaxDecoder1"))
else{f+=D.f.O(u,5)&2047
p.jg(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}while(!w){u=A.T6[p.mh(4)]
r=u>>>5&2047
q=!0
if(r===100){u=A.Uk[p.vL(9)]
t=D.f.O(u,1)&15
r=D.f.O(u,5)&2047
if(t===12){p.jg(5)
u=A.wZ[p.mh(4)]
s=D.f.O(u,1)
r=D.f.O(u,4)&4095
p.np(d,e,f,r)
f+=r
p.jg(4-(s&7))}else if(t===15)throw C.n(C.bJ("TIFFFaxDecoder2"))
else{p.np(d,e,f,r)
f+=r
p.jg(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=A.T2[p.mh(2)]
r=u>>>5&2047
p.np(d,e,f,r)
f+=r
p.jg(2-(u>>>1&15))
p.f[p.d++]=f}else{p.np(d,e,f,r)
f+=r
p.jg(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
blM(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.f.ap(x+7,8)
v=C.bo(2,null,!1,y.I)
e.at=a3&1
e.as=a3>>>2&1
if(e.amX()!==1)throw C.n(C.bJ("TIFFFaxDecoder3"))
e.a1d(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.amX()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
for(;;){r.toString
if(!(r<x))break
e.aj9(q,p,v)
n=v[0]
m=v[1]
l=A.UG[e.mh(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.np(d,u,r,m-r)}e.jg(7-j)
r=m
q=r}else if(k===1){e.jg(7-j)
i=o+1
h=i+1
if(p){r+=e.Qh()
e.f[o]=r
g=e.Qg()
e.np(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.Qg()
e.np(d,u,r,g)
r+=g
e.f[o]=r
r+=e.Qh()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.np(d,u,r,f-r)
e.jg(7-j)}else throw C.n(C.bJ("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.a1d(d,u,a1)
u+=w}},
blR(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.f.ap(x+7,8)
v=C.bo(2,null,!1,y.I)
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
a2.aj9(p,o,v)
m=v[0]
l=v[1]
k=A.UG[a2.mh(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.np(a3,t,q,l-q)}a2.jg(7-i)
q=l
p=q}else if(j===1){a2.jg(7-i)
h=n+1
g=h+1
if(o){q+=a2.Qh()
r[n]=q
f=a2.Qg()
a2.np(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.Qg()
a2.np(a3,t,q,f)
q+=f
r[n]=q
q+=a2.Qh()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.np(a3,t,q,e-q)
a2.jg(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.mh(3)!==7)throw C.n(C.bJ("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){while(a2.mh(1)!==1)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.mh(1)===0
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
a2.np(a3,t,q,1);++q
n=h}}}else throw C.n(C.bJ("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
Qh(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.vL(10)
u=A.UK[v]
t=D.f.O(u,1)&15
if(t===12){u=A.wZ[(v<<2&12|r.mh(2))>>>0]
s=D.f.O(u,1)
x+=D.f.O(u,4)&4095
r.jg(4-(s&7))}else if(t===0)throw C.n(C.bJ("TIFFFaxDecoder0"))
else if(t===15)throw C.n(C.bJ("TIFFFaxDecoder1"))
else{x+=D.f.O(u,5)&2047
r.jg(10-t)
if((u&1)===0)w=!1}}return x},
Qg(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=A.T6[r.mh(4)]
u=v>>>5&2047
if(u===100){v=A.Uk[r.vL(9)]
t=D.f.O(v,1)&15
s=D.f.O(v,5)
if(t===12){r.jg(5)
v=A.wZ[r.mh(4)]
s=D.f.O(v,1)
x+=D.f.O(v,4)&4095
r.jg(4-(s&7))}else if(t===15)throw C.n(C.bJ("TIFFFaxDecoder2"))
else{x+=s&2047
r.jg(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=A.T2[r.mh(2)]
x+=v>>>5&2047
r.jg(2-(v>>>1&15))}else{x+=u
r.jg(4-(v>>>1&15))}w=!0}}return x},
amX(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.vL(12)!==1)throw C.n(C.bJ("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.vL(x)!==0)throw C.n(C.bJ(u))
if(x<4)if(v.vL(8)!==0)throw C.n(C.bJ(u))
while(w=v.vL(8),w!==1)if(w!==0)throw C.n(C.bJ(u))}if(v.at===0)return 1
else return v.mh(1)},
aj9(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
np(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.f.O(s,3),p=s&7
if(p>0){x=D.f.cF(1,7-p)
w=J.A(d.a,d.d+q)
for(;;){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.m(0,q,w)}q=D.f.O(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.bf(d.a,d.d+q,255)
s+=8}while(s<r){q=D.f.O(s,3)
v=J.A(d.a,d.d+q)
t=D.f.cF(1,7-(s&7))
J.bf(d.a,d.d+q,(v|t)>>>0);++s}},
vL(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.r
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
r=A.p6[J.A(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=A.p6[J.A(u,x+j)&255]
else{t=A.p6[J.A(u,x+j)&255]
j=k.r
s=A.p6[J.A(j.a,j.d+(v+2))&255]}}}else throw C.n(C.bJ("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.f.cF(r&A.rl[q],p)
l=D.f.ef(t&A.DQ[n],8-n)
if(o!==0){l=D.f.cF(l,o)|D.f.ef(s&A.DQ[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
mh(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
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
s=A.p6[J.A(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=A.p6[J.A(m.a,m.d+(v+1))&255]}}else throw C.n(C.bJ("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.f.ef(s&A.rl[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.f.cF(s&A.rl[r],-p)|D.f.ef(t&A.DQ[q],8-q))>>>0
m=n.x
m.toString
n.x=m+1
n.w=q}return o},
jg(d){var x,w=this,v=w.w
v.toString
x=v-d
if(x<0){v=w.x
v.toString
w.x=v-1
w.w=8+x}else w.w=x}}
B.alr.prototype={
aMc(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=C.bP(d,g,0),e=d.ac()
for(x=h.a,w=0;w<e;++w){v=d.ac()
u=d.ac()
t=D.Ut[u]
s=D.nF[u]
r=d.Z()
if(r*s>4)q=d.Z()
else{q=d.d
d.d=q+4}p=new B.alq(v,t,r,q,f)
x.m(0,v,p)
if(v===256){o=p.mU()
o=o==null?g:o.F(0)
h.b=o==null?0:o}else if(v===257){o=p.mU()
o=o==null?g:o.F(0)
h.c=o==null?0:o}else if(v===262){n=p.mU()
m=n==null?g:n.F(0)
if(m==null)m=17
if(m<17)h.d=A.ePx[m]
else h.d=A.Gb}else if(v===259){o=p.mU()
o=o==null?g:o.F(0)
h.e=o==null?0:o}else if(v===258){o=p.mU()
o=o==null?g:o.F(0)
h.f=o==null?0:o}else if(v===277){o=p.mU()
o=o==null?g:o.F(0)
h.r=o==null?0:o}else if(v===317){o=p.mU()
o=o==null?g:o.F(0)
h.Q=o==null?0:o}else if(v===339){o=p.mU()
n=o==null?g:o.F(0)
h.x=A.eQ2[n==null?0:n]}else if(v===320){n=p.mU()
if(n!=null){o=J.cou(D.P.gad(n.qt()))
h.id=o
h.k1=0
o=o.length/3|0
h.k2=o
h.k3=o*2}}}o=h.id
l=o!=null
if(l&&h.d===A.Gc)h.r=1
if(h.b===0||h.c===0)return
if(l&&h.f===8){k=o.length
for(l=o.$flags|0,w=0;w<k;++w){j=o[w]
l&2&&C.u(o)
o[w]=j>>>8}}if(h.d===A.Ga)h.z=!0
h.w=h.r
if(x.aL(324)){h.ay=h.CH(322)
h.ch=h.CH(323)
h.CW=h.So(324)
h.cx=h.So(325)}else{h.ay=h.Sn(322,h.b)
if(!x.aL(278))h.ch=h.Sn(323,h.c)
else{i=h.CH(278)
if(i===-1)h.ch=h.c
else h.ch=i}h.CW=h.So(273)
h.cx=h.So(279)}o=h.b
l=h.ay
h.cy=D.f.eq(o+l-1,l)
l=h.c
o=h.ch
h.db=D.f.eq(l+o-1,o)
h.dy=h.Sn(266,1)
h.fr=h.CH(292)
h.fx=h.CH(293)
h.CH(338)
switch(h.d.a){case 0:case 1:x=h.f
if(x===1&&h.r===1)h.y=A.G9
else if(x===4&&h.r===1)h.y=A.fuN
else if(D.f.aK(x,8)===0){x=h.r
if(x===1)h.y=A.fuO
else if(x===2)h.y=A.fuP
else h.y=A.ta}break
case 2:if(D.f.aK(h.f,8)===0){x=h.r
if(x===3)h.y=A.a7s
else if(x===4)h.y=A.fuR
else h.y=A.ta}break
case 3:x=!1
if(h.r===1)if(h.id!=null){x=h.f
x=x===4||x===8||x===16}if(x)h.y=A.fuQ
break
case 4:if(h.f===1&&h.r===1)h.y=A.G9
break
case 6:if(h.e===7&&h.f===8&&h.r===3)h.y=A.a7s
else{if(x.aL(530)){n=x.h(0,530).mU()
h.as=n.F(0)
x=h.at=n.hk(0,1)}else x=h.at=h.as=2
o=h.as
o===$&&C.b()
if(o*x===1)h.y=A.ta
else if(h.f===8&&h.r===3)h.y=A.fuS}break
case 5:if(D.f.aK(h.f,8)===0)h.y=A.ta
x=h.r
if(x===4)h.w=3
else if(x===5)h.w=4
break
default:if(D.f.aK(h.f,8)===0)h.y=A.ta
break}},
bQ(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.x,d=e===A.t9,a0=e===A.bG
e=g.f
if(e===1)x=D.eN
else if(e===2)x=D.kz
else{if(e===4)e=D.kA
else if(d&&e===16)e=D.lM
else if(d&&e===32)e=D.ms
else if(d&&e===64)e=D.nt
else if(a0&&e===8)e=D.nu
else if(a0&&e===16)e=D.nv
else if(a0&&e===32)e=D.nw
else if(e===16)e=D.cS
else e=e===32?D.mt:D.ay
x=e}w=g.id!=null&&g.d===A.Gc
v=w?3:g.w
e=g.b
u=C.fR(f,f,x,0,D.bO,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.gdc()
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
e.n9(k,t[l],t[m],t[n])}}j=0
i=0
for(;;){e=g.db
e===$&&C.b()
if(!(j<e))break
h=0
for(;;){e=g.cy
e===$&&C.b()
if(!(h<e))break
g.aS7(a1,u,h,j);++h;++i}++j}return u},
aS7(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.y===A.G9){a8.aRS(b0,b1,b2,b3)
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
else if(u===5){w=C.cc(new Uint8Array(p),!1,a9,0)
v=B.cc1()
try{v.aub(C.bP(b0,x,0),w.a)}catch(o){}if(a8.Q===2)for(n=0;n<a8.ch;++n){m=a8.r
u=a8.ay
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.A(u.a,u.d+l)
j=w
i=a8.r
i=J.A(j.a,j.d+(l-i))
J.bf(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=C.cc(new Uint8Array(p),!1,a9,0)
a8.ahg(b0,p,w.a)}else if(u===32946)w=C.cc(D.na.zO(b0.Nf(0,0,x)),!1,a9,0)
else if(u===8)w=C.cc(D.na.zO(b0.Nf(0,0,x)),!1,a9,0)
else if(u===6){a8.b2d(new B.Vd().bQ(y.D.a(b0.Nf(0,0,x))),b1,s,q,a8.ay,a8.ch)
return}else throw C.n(C.bJ("Unsupported Compression Type: "+u))
h=C.c([0,0,0],y.t)
for(g=q,f=0;f<a8.ch;++f,++g)for(e=s,d=0;d<a8.ay;++d,++e){u=w
if(u.d>=u.c||e>=a8.b||g>=a8.c)break
u=a8.r
if(u===1){u=a8.x
if(u===A.t9){u=a8.f
if(u===32){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.BZ()[0]}else if(u===64)a0=w.Yt()
else if(u===16){u=w.ac()
r=$.fP
a0=(r!=null?r:C.hz())[u]}else a0=0
if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kl(e,g,a0)}}else{r=a8.f
if(r===8)if(u===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lJ()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.mx()[0]}else{u=w
a0=J.A(u.a,u.d++)}else if(r===16)if(u===A.bG){u=w.ac()
r=$.lI()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.mw()[0]}else a0=w.ac()
else if(r===32)if(u===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.js()[0]}else a0=w.Z()
else a0=0
if(a8.d===A.Ga){u=b1.a
a1=u==null?a9:u.gbs()
a0=(a1==null?0:a1)-a0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kl(e,g,a0)}}}else if(u===2){u=a8.f
if(u===8){if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lJ()
r.$flags&2&&C.u(r)
r[0]=u
a2=$.mx()[0]}else{u=w
a2=J.A(u.a,u.d++)}if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lJ()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mx()[0]}else{u=w
a3=J.A(u.a,u.d++)}}else if(u===16){if(a8.x===A.bG){u=w.ac()
r=$.lI()
r.$flags&2&&C.u(r)
r[0]=u
a2=$.mw()[0]}else a2=w.ac()
if(a8.x===A.bG){u=w.ac()
r=$.lI()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mw()[0]}else a3=w.ac()}else if(u===32){if(a8.x===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a2=$.js()[0]}else a2=w.Z()
if(a8.x===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.js()[0]}else a3=w.Z()}else{a2=0
a3=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.dD(e,g,a2,a3,0)}}else if(u===3){u=a8.x
if(u===A.t9){u=a8.f
if(u===32){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
u=$.BZ()
a4=u[0]
r[0]=w.Z()
a5=u[0]
r[0]=w.Z()
a6=u[0]}else{a5=0
a6=0
if(u===64)a4=w.Yt()
else if(u===16){u=w.ac()
r=$.fP
a4=(r!=null?r:C.hz())[u]
u=w.ac()
r=$.fP
a5=(r!=null?r:C.hz())[u]
u=w.ac()
r=$.fP
a6=(r!=null?r:C.hz())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.dD(e,g,a4,a5,a6)}}else{r=a8.f
if(r===8){if(u===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lJ()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.mx()[0]}else{u=w
a4=J.A(u.a,u.d++)}if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lJ()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mx()[0]}else{u=w
a5=J.A(u.a,u.d++)}if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lJ()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mx()[0]}else{u=w
a6=J.A(u.a,u.d++)}}else if(r===16){if(u===A.bG){u=w.ac()
r=$.lI()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.mw()[0]}else a4=w.ac()
if(a8.x===A.bG){u=w.ac()
r=$.lI()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mw()[0]}else a5=w.ac()
if(a8.x===A.bG){u=w.ac()
r=$.lI()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mw()[0]}else a6=w.ac()}else if(r===32){if(u===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.js()[0]}else a4=w.Z()
if(a8.x===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.js()[0]}else a5=w.Z()
if(a8.x===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.js()[0]}else a6=w.Z()}else{a4=0
a5=0
a6=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.dD(e,g,a4,a5,a6)}}}else if(u>=4)if(a8.x===A.t9){u=a8.f
if(u===32){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
u=$.BZ()
a4=u[0]
r[0]=w.Z()
a5=u[0]
r[0]=w.Z()
a6=u[0]
r[0]=w.Z()
a7=u[0]}else{a5=0
a6=0
a7=0
if(u===64)a4=w.Yt()
else if(u===16){u=w.ac()
r=$.fP
a4=(r!=null?r:C.hz())[u]
u=w.ac()
r=$.fP
a5=(r!=null?r:C.hz())[u]
u=w.ac()
r=$.fP
a6=(r!=null?r:C.hz())[u]
u=w.ac()
r=$.fP
a7=(r!=null?r:C.hz())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.ie(e,g,a4,a5,a6,a7)}}else{u=b1.a
a3=u==null?a9:u.gbs()
if(a3==null)a3=0
u=a8.f
if(u===8){if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lJ()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.mx()[0]}else{u=w
a4=J.A(u.a,u.d++)}if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lJ()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mx()[0]}else{u=w
a5=J.A(u.a,u.d++)}if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lJ()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mx()[0]}else{u=w
a6=J.A(u.a,u.d++)}if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lJ()
r.$flags&2&&C.u(r)
r[0]=u
a7=$.mx()[0]}else{u=w
a7=J.A(u.a,u.d++)}if(a8.r===5)if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lJ()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mx()[0]}else{u=w
a3=J.A(u.a,u.d++)}}else if(u===16){if(a8.x===A.bG){u=w.ac()
r=$.lI()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.mw()[0]}else a4=w.ac()
if(a8.x===A.bG){u=w.ac()
r=$.lI()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mw()[0]}else a5=w.ac()
if(a8.x===A.bG){u=w.ac()
r=$.lI()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mw()[0]}else a6=w.ac()
if(a8.x===A.bG){u=w.ac()
r=$.lI()
r.$flags&2&&C.u(r)
r[0]=u
a7=$.mw()[0]}else a7=w.ac()
if(a8.r===5)if(a8.x===A.bG){u=w.ac()
r=$.lI()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mw()[0]}else a3=w.ac()}else if(u===32){if(a8.x===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.js()[0]}else a4=w.Z()
if(a8.x===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.js()[0]}else a5=w.Z()
if(a8.x===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.js()[0]}else a6=w.Z()
if(a8.x===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a7=$.js()[0]}else a7=w.Z()
if(a8.r===5)if(a8.x===A.bG){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.js()[0]}else a3=w.Z()}else{a4=0
a5=0
a6=0
a7=0}if(a8.d===A.a7t){B.ciM(a4,a5,a6,a7,h)
a4=h[0]
a5=h[1]
a6=h[2]
a7=a3}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.ie(e,g,a4,a5,a6,a7)}}}}else throw C.n(C.bJ("Unsupported bitsPerSample: "+u))},
b2d(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.cE(v,x,null)
if(u==null)u=new C.eq()
e.y5(v+f,w,u)}},
aRS(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cy
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
if(r===32773){q=D.f.aK(a2,8)===0?D.f.ap(a2,8)*u:(D.f.ap(a2,8)+1)*u
x=C.cc(new Uint8Array(a2*u),!1,a1,0)
a0.ahg(a3,q,x.a)}else if(r===5){x=C.cc(new Uint8Array(a2*u),!1,a1,0)
B.cc1().aub(C.bP(a3,s,0),x.a)
if(a0.Q===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.A(a2.a,a2.d+n)
r=x
m=a0.r
m=J.A(r.a,r.d+(n-m))
J.bf(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=C.cc(new Uint8Array(a2*u),!1,a1,0)
try{B.c3Y(a0.dy,a0.ay,a0.ch).blL(x,a3,0,a0.ch)}catch(l){}}else if(r===3){x=C.cc(new Uint8Array(a2*u),!1,a1,0)
try{B.c3Y(a0.dy,a0.ay,a0.ch).blM(x,a3,0,a0.ch,a0.fr)}catch(l){}}else if(r===4){x=C.cc(new Uint8Array(a2*u),!1,a1,0)
try{B.c3Y(a0.dy,a0.ay,a0.ch).blR(x,a3,0,a0.ch,a0.fx)}catch(l){}}else if(r===8)x=C.cc(D.na.zO(a3.Nf(0,0,s)),!1,a1,0)
else if(r===32946)x=C.cc(D.na.zO(a3.Nf(0,0,s)),!1,a1,0)
else if(r===1)x=a3
else throw C.n(C.bJ("Unsupported Compression Type: "+r))
k=new B.bgX(x)
j=a4.gbs()
a2=a0.z
i=a2?j:0
h=a2?0:j
for(g=t,f=0;f<a0.ch;++f,++g){for(e=v,d=0;d<a0.ay;++d,++e){a2=a4.a
u=a2==null
r=u?a1:a2.b
if(g<(r==null?0:r)){a2=u?a1:a2.a
a2=e>=(a2==null?0:a2)}else a2=!0
if(a2)break
a2=k.hh(1)
u=a4.a
if(a2===0){if(u!=null)u.dD(e,g,i,0,0)}else if(u!=null)u.dD(e,g,h,0,0)}k.c=0}},
ahg(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.c9(f),w=0,v=0;v<e;){u=w+1
t=J.A(d.a,d.d+w)
s=$.lJ()
s.$flags&2&&C.u(s)
s[0]=t
r=$.mx()[0]
if(r>=0&&r<=127)for(t=r+1,w=u,q=0;q<t;++q,v=p,w=u){p=v+1
u=w+1
x.m(f,v,J.A(d.a,d.d+w))}else{t=r<=-1&&r>=-127
w=u+1
if(t){o=J.A(d.a,d.d+u)
for(t=-r+1,q=0;q<t;++q,v=p){p=v+1
x.m(f,v,o)}}}}},
Sn(d,e){var x=this.a
if(!x.aL(d))return e
x=x.h(0,d).mU()
x=x==null?null:x.F(0)
return x==null?0:x},
CH(d){return this.Sn(d,0)},
So(d){var x,w=this.a
if(!w.aL(d))return null
x=w.h(0,d)
w=x.mU()
w.toString
return C.E3(x.c,w.guR(w),!0,y.p)}}
B.Gj.prototype={
H(){return"TiffFormat."+this.b}}
B.jh.prototype={
H(){return"TiffPhotometricType."+this.b}}
B.py.prototype={
H(){return"TiffImageType."+this.b}}
B.bh_.prototype={
gbL(){return this.a},
gaQ(){return this.b}}
B.aVQ.prototype={
aub(d,e){var x,w,v,u,t,s,r=this
r.r=e
x=J.aX(e)
r.w=0
w=y.D.a(d.a)
r.e=w
r.f=w.length
r.b=d.d
if(w[0]===0&&w[1]===1)throw C.n(C.bJ("Invalid LZW Data"))
r.akI()
r.d=r.c=0
v=r.a2d()
w=r.x
u=0
for(;;){if(!(v!==257&&r.w<x))break
if(v===256){r.akI()
v=r.a2d()
r.as=0
if(v===257)break
J.bf(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.ajp(v)
t=r.as
t===$&&C.b()
s=t-1
for(;s>=0;--s)J.bf(r.r,r.w++,w[s])
r.aeQ(u,w[r.as-1])}else{r.ajp(u)
t=r.as
t===$&&C.b()
s=t-1
for(;s>=0;--s)J.bf(r.r,r.w++,w[s])
J.bf(r.r,r.w++,w[r.as-1])
r.aeQ(u,w[r.as-1])}u=v}v=r.a2d()}},
aeQ(d,e){var x,w=this,v=w.y
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
ajp(d){var x,w,v,u,t,s,r=this
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
a2d(){var x,w,v,u,t=this,s=t.b,r=t.f
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
return D.f.ef(t.c,s)&A.ezx[w-9]},
akI(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.bL.fz(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&C.u(x)
x[w]=w}v.a=9
v.Q=258}}
B.bgY.prototype={
iR(d){var x=this,w=C.cc(d,!1,null,0)
x.c=w
w=x.a49(w)
x.a=w
if(w!=null)x.b=B.c1X(C.cc(d,!1,null,0))
return x.a},
i5(d){var x,w,v=this.a
if(v==null)return null
v=v.f[d]
x=this.c
x===$&&C.b()
w=v.bQ(x)
v=this.b
if(v!=null)w.e=v
return w},
mu(d,e){var x=this,w=C.cc(d,!1,null,0)
x.c=w
w=x.a49(w)
x.a=w
if(w==null)return null
return x.i5(0)},
a49(d){var x,w,v,u,t,s,r,q,p,o=null,n=C.c([],y.L),m=new B.bh_(n),l=d.ac()
if(l!==18761&&l!==19789)return o
if(l===19789)d.e=!0
else d.e=!1
v=d.ac()
m.d=v
if(v!==42)return o
u=d.Z()
t=C.bP(d,o,0)
t.d=u
x=t
for(v=y.p,s=y.j;u!==0;){w=null
try{r=new B.alr(C.D(v,s),A.Gb,A.a7r,A.fuT)
r.aMc(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.Z()
if(u!==0)x.d=u}return n.length!==0?m:o}}
B.biM.prototype={
KI(){var x,w,v=this.a,u=v.pe()
if((u&1)!==0)return!1
if((u>>>1&7)>3)return!1
x=u>>>4&1
if(x===0)return!1
w=this.f
w.c=x
w.d=u>>>5
if(v.pe()!==2752925)return!1
x=this.b
x.a=v.ac()
x.b=v.ac()
return!0},
oC(){var x,w,v,u=this,t=null
if(!u.aWb())return t
x=u.b
w=x.a
u.d=C.fR(t,t,D.ay,0,D.bO,x.b,t,0,4,t,D.ay,w,!1)
u.b1s()
if(!u.b6Q())return t
x=x.w
if(x.length!==0){v=C.cc(new C.bW(x),!1,t,0)
x=u.d
x.toString
x.e=B.c1X(v)}return u.d},
aWb(){var x,w,v,u,t=this
if(!t.KI())return!1
t.fr=B.cAa()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new B.am3(v,u,new Int32Array(2))}x=t.r
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
x=B.cfo(v.hH(x))
t.c=x
v.d+=u.d
x.ek(1)
t.c.ek(1)
t.b6X(t.x,t.fr)
t.b6P()
if(!t.b6S(v))return!1
t.b6U()
t.c.ek(1)
t.b6T()
return!0},
b6X(d,e){var x,w,v,u=this,t=u.c
t===$&&C.b()
t=t.ek(1)!==0
d.a=t
if(t){d.b=u.c.ek(1)!==0
if(u.c.ek(1)!==0){d.c=u.c.ek(1)!==0
for(t=d.d,x=0;x<4;++x){if(u.c.ek(1)!==0){w=u.c
v=w.ek(7)
w=w.ek(1)===1?-v:v}else w=0
t.$flags&2&&C.u(t)
t[x]=w}for(t=d.e,x=0;x<4;++x){if(u.c.ek(1)!==0){w=u.c
v=w.ek(6)
w=w.ek(1)===1?-v:v}else w=0
t.$flags&2&&C.u(t)
t[x]=w}}if(d.b)for(x=0;x<3;++x){t=e.a
w=u.c.ek(1)!==0?u.c.ek(8):255
t.$flags&2&&C.u(t)
t[x]=w}}else d.b=!1
return!0},
b6P(){var x,w,v,u=this,t=u.w,s=u.c
s===$&&C.b()
t.a=s.ek(1)!==0
t.b=u.c.ek(6)
t.c=u.c.ek(3)
s=u.c.ek(1)!==0
t.d=s
if(s)if(u.c.ek(1)!==0){for(s=t.e,x=0;x<4;++x)if(u.c.ek(1)!==0){w=u.c
v=w.ek(6)
w=w.ek(1)===1?-v:v
s.$flags&2&&C.u(s)
s[x]=w}for(s=t.f,x=0;x<4;++x)if(u.c.ek(1)!==0){w=u.c
v=w.ek(6)
w=w.ek(1)===1?-v:v
s.$flags&2&&C.u(s)
s[x]=w}}if(t.b===0)s=0
else s=t.a?1:2
u.b7=s
return!0},
b6S(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&C.b()
p=D.f.cN(1,p.ek(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.Pf(3,v)
s=w+((J.A(t.a,t.d)|J.A(t.a,t.d+1)<<8|J.A(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new B.a_D(d.yj(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=B.cfo(d.yj(q-w,d.d-d.b+w))
return w<q},
b6U(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&C.b()
x=h.ek(7)
w=i.c.ek(1)!==0?i.c.Gf(4):0
v=i.c.ek(1)!==0?i.c.Gf(4):0
u=i.c.ek(1)!==0?i.c.Gf(4):0
t=i.c.ek(1)!==0?i.c.Gf(4):0
s=i.c.ek(1)!==0?i.c.Gf(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
j=A.DC[j]
k.$flags&2&&C.u(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=A.DD[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=A.DC[k]
j.$flags&2&&C.u(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=A.DD[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=A.DC[j]
k.$flags&2&&C.u(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=A.DD[j]}},
b6T(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&C.b()
s=t.fD(A.eZp[x][w][v][u])!==0?r.c.ek(8):A.eyY[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&C.u(t)
t[u]=s}t=r.c
t===$&&C.b()
t=t.ek(1)!==0
r.fx=t
if(t)r.fy=r.c.ek(8)},
b84(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.b7
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
if(r>0){n=r>4?D.f.O(o,2):D.f.O(o,1)
m=9-r
if(n>m)n=m}else n=o
if(n<1)n=1
p.b=n
p.a=2*o+n
if(o>=40)r=2
else r=o>=15?1:0
p.d=r}else p.a=0
p.c=q!==0}}}},
b1s(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.a4=j
x=J.jF(4,y.K)
for(j=y.d,w=0;w<4;++w)x[w]=C.c([new B.Gt(),new B.Gt()],j)
m.D=x
j=m.at
j.toString
x=J.jF(j,y.bt)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new B.am4(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.b7
t.toString
s=A.CV[t]
r=s*u
q=(s/2|0)*j
m.p1=C.cc(new Uint8Array(16*u+r),!1,l,r)
j=m.R8
j.toString
m.p2=C.cc(new Uint8Array(8*j+q),!1,l,q)
j=m.R8
j.toString
m.p3=C.cc(new Uint8Array(8*j+q),!1,l,q)
j=k.a
m.RG=C.cc(new Uint8Array(j),!1,l,0)
p=k.a+1>>>1
m.rx=C.cc(new Uint8Array(p),!1,l,0)
m.ry=C.cc(new Uint8Array(p),!1,l,0)
k=m.b7
k.toString
o=A.CV[k]
if(k===2)m.ch=m.ay=0
else{k=m.y
k===$&&C.b()
k=D.f.ap(k-o,16)
m.ay=k
j=m.Q
j.toString
j=D.f.ap(j-o,16)
m.ch=j
if(k<0)m.ay=0
if(j<0)m.ch=0}k=m.as
k.toString
k=D.f.ap(k+15+o,16)
m.cx=k
j=m.z
j===$&&C.b()
j=D.f.ap(j+15+o,16)
m.CW=j
u=m.at
u.toString
if(j>u)m.CW=u
j=m.ax
j.toString
if(k>j)m.cx=j
n=u+1
x=J.jF(n,y.q)
for(v=0;v<n;++v)x[v]=new B.am1()
m.k3=x
k=m.at
k.toString
x=J.jF(k,y._)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new B.am2(j,new Uint8Array(16))}m.b6=x
k=m.at
k.toString
m.k4=C.bo(k,l,!1,y.B)
m.b84()
B.czC()
m.e=new B.biN()
return!0},
b6Q(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
t=j.b6
t===$&&C.b()
p=t[u]
if(w.b){u=j.c
u===$&&C.b()
u=u.fD(j.fr.a[0])
t=j.c
o=j.fr
j.k1=u===0?t.fD(o.a[1]):2+t.fD(o.a[2])}u=j.fx
u===$&&C.b()
if(u){u=j.c
u===$&&C.b()
t=j.fy
t===$&&C.b()
n=u.fD(t)!==0}else n=!1
j.b6R()
if(!n)n=j.b6V(q,s)
else{r.a=q.a=0
u=p.b
u===$&&C.b()
if(!u)r.b=q.b=0
p.f=p.e=0}u=j.b7
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
D.P.fz(x,0,4,0)
j.y1=0
j.b99()
u=j.b7
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&C.b()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.aV4(k))return!1
u=++j.y2}return!0},
b99(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.y2,a5=a2.ok
a5===$&&C.b()
x=C.cc(a5,!1,a3,40)
w=C.cc(a2.ok,!1,a3,584)
v=C.cc(a2.ok,!1,a3,600)
a5=a4>0
u=0
for(;;){t=a2.at
t.toString
if(!(u<t))break
t=a2.b6
t===$&&C.b()
s=t[u]
if(u>0){for(r=-1;r<16;++r){t=r*32
x.oZ(t-4,4,x,t+12)}for(r=-1;r<8;++r){t=r*32
q=t-4
t+=4
w.oZ(q,4,w,t)
v.oZ(q,4,v,t)}}else{for(r=0;r<16;++r)J.bf(x.a,x.d+(r*32-1),129)
for(r=0;r<8;++r){t=r*32-1
J.bf(w.a,w.d+t,129)
J.bf(v.a,v.d+t,129)}if(a5){J.bf(v.a,v.d+-33,129)
J.bf(w.a,w.d+-33,129)
J.bf(x.a,x.d+-33,129)}}t=a2.k2
t===$&&C.b()
p=t[u]
o=s.a
n=s.e
if(a5){x.x9(-32,16,p.a)
w.x9(-32,8,p.b)
v.x9(-32,8,p.c)}else if(u===0){t=x.a
q=x.d+-33
J.rC(t,q,q+21,127)
q=w.a
t=w.d+-33
J.rC(q,t,t+9,127)
t=v.a
q=v.d+-33
J.rC(t,q,q+9,127)}t=s.b
t===$&&C.b()
if(t){m=C.bP(x,a3,-16)
l=m.Nl()
if(a5){t=a2.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.rC(q,k,k+4,t)}else m.x9(0,4,a2.k2[u+1].a)}j=l[0]
l.$flags&2&&C.u(l)
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=C.bP(x,a3,A.V6[i])
A.eRw[t[i]].$1(h)
n.toString
q=i*16
a2.ahI(n,new C.kG(o,q,Math.min(384,384),q,!1),h)}}else{t=B.cfr(u,a4,s.c[0])
t.toString
A.f4E[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=C.bP(x,a3,A.V6[i])
n.toString
t=i*16
a2.ahI(n,new C.kG(o,t,Math.min(384,384),t,!1),h)}}t=s.f
t===$&&C.b()
q=B.cfr(u,a4,s.d)
q.toString
A.Uq[q].$1(w)
A.Uq[q].$1(v)
q=Math.min(384,384)
g=new C.kG(o,256,q,256,!1)
if((t&255)!==0){k=a2.e
if((t&170)!==0){k===$&&C.b()
k.t4(g,w)
k.t4(C.bP(g,a3,16),C.bP(w,a3,4))
f=C.bP(g,a3,32)
e=C.bP(w,a3,128)
k.t4(f,e)
k.t4(C.bP(f,a3,16),C.bP(e,a3,4))}else{k===$&&C.b()
k.azT(g,w)}}d=new C.kG(o,320,q,320,!1)
t=t>>>8
if((t&255)!==0){q=a2.e
if((t&170)!==0){q===$&&C.b()
q.t4(d,v)
q.t4(C.bP(d,a3,16),C.bP(v,a3,4))
t=C.bP(d,a3,32)
k=C.bP(v,a3,128)
q.t4(t,k)
q.t4(C.bP(t,a3,16),C.bP(k,a3,4))}else{q===$&&C.b()
q.azT(d,v)}}t=a2.ax
t.toString
if(a4<t-1){D.P.cz(p.a,0,16,x.ex(),480)
D.P.cz(p.b,0,8,w.ex(),224)
D.P.cz(p.c,0,8,v.ex(),224)}a0=u*16
a1=u*8
for(r=0;r<16;++r){t=a2.p4
t.toString
q=a2.p1
q===$&&C.b()
q.oZ(a0+r*t,16,x,r*32)}for(r=0;r<8;++r){t=a2.R8
t.toString
q=a2.p2
q===$&&C.b()
k=r*32
q.oZ(a1+r*t,8,w,k)
t=a2.R8
t.toString
q=a2.p3
q===$&&C.b()
q.oZ(a1+r*t,8,v,k)}++u}},
ahI(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&C.b()
x.Nm(e,f,!1)
break
case 2:this.e===$&&C.b()
w=J.A(e.a,e.d)+4
v=D.f.iN(D.f.O(J.A(e.a,e.d+4)*35468,16),32)
u=D.f.iN(D.f.O(J.A(e.a,e.d+4)*85627,16),32)
t=D.f.iN(D.f.O(J.A(e.a,e.d+1)*35468,16),32)
s=D.f.iN(D.f.O(J.A(e.a,e.d+1)*85627,16),32)
B.biP(f,0,w+u,s,t)
B.biP(f,1,w+v,s,t)
B.biP(f,2,w-v,s,t)
B.biP(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&C.b()
x.Nn(e,f)
break
default:break}},
aTb(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
j===$&&C.b()
j=j[d]
j.toString
x=m.p1
x===$&&C.b()
w=C.bP(x,l,d*16)
v=j.b
u=j.a
if(u===0)return
if(m.b7===1){if(d>0){x=m.e
x===$&&C.b()
k.toString
x.ad3(w,k,u+4)}if(j.c){x=m.e
x===$&&C.b()
k.toString
x.aEN(w,k,u)}if(e>0){x=m.e
x===$&&C.b()
k.toString
x.ad4(w,k,u+4)}if(j.c){j=m.e
j===$&&C.b()
k.toString
j.aEO(w,k,u)}}else{t=m.R8
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
x.Cj(w,1,k,16,s,v,p)
t.toString
x.Cj(r,1,t,8,s,v,p)
x.Cj(q,1,t,8,s,v,p)}if(j.c){x=m.e
x===$&&C.b()
k.toString
x.boo(w,k,u,v,p)
t.toString
o=C.bP(r,l,4)
n=C.bP(q,l,4)
x.Ci(o,1,t,8,u,v,p)
x.Ci(n,1,t,8,u,v,p)}if(e>0){x=m.e
x===$&&C.b()
k.toString
s=u+4
x.Cj(w,k,1,16,s,v,p)
t.toString
x.Cj(r,t,1,8,s,v,p)
x.Cj(q,t,1,8,s,v,p)}if(j.c){j=m.e
j===$&&C.b()
k.toString
j.byD(w,k,u,v,p)
t.toString
x=4*t
o=C.bP(r,l,x)
n=C.bP(q,l,x)
j.Ci(o,t,1,8,u,v,p)
j.Ci(n,t,1,8,u,v,p)}}},
aUJ(){var x,w=this,v=w.ay
v===$&&C.b()
x=v
for(;;){v=w.CW
v.toString
if(!(x<v))break
w.aTb(x,w.y2);++x}},
aV4(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b7
e.toString
x=A.CV[e]
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
if(d)g.aUJ()
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
if(g.a4!=null&&o<n){m=g.xr=g.aS8(o,n-o)
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
j*=D.f.O(k,1)
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
g.b8n(o-l,m-h,n-o)}if(e){e=g.p1
m=g.p4
m.toString
e.oZ(u,w,t,16*m)
m=g.p2
u=g.R8
u.toString
m.oZ(s,v,r,8*u)
u=g.p3
m=g.R8
m.toString
u.oZ(s,v,q,8*m)}return!0},
b8n(d,e,f){if(e<=0||f<=0)return!1
this.aTU(d,e,f)
this.aTT(d,e,f)
return!0},
a0N(d){var x
if((d&-4194304)>>>0===0)x=D.f.O(d,14)
else x=d<0?0:255
return x},
TR(d,e,f,g){var x=19077*d
g.m(0,0,this.a0N(x+26149*f+-3644112))
g.m(0,1,this.a0N(x-6419*e-13320*f+2229552))
g.m(0,2,this.a0N(x+33050*e+-4527440))},
Tt(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new B.biZ(),a0=b3-1,a1=D.f.O(a0,1),a2=d.$2(J.A(a7.a,a7.d),J.A(a8.a,a8.d)),a3=d.$2(J.A(a9.a,a9.d),J.A(b0.a,b0.d)),a4=D.f.O(3*a2+a3+131074,2)
f.TR(J.A(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.m(0,3,255)
x=a6!=null
if(x){a4=D.f.O(3*a3+a2+131074,2)
w=J.A(a6.a,a6.d)
b2.toString
f.TR(w,a4&255,a4>>>16,b2)
b2.m(0,3,255)}for(v=1;v<=a1;++v,a3=t,a2=u){u=d.$2(J.A(a7.a,a7.d+v),J.A(a8.a,a8.d+v))
t=d.$2(J.A(a9.a,a9.d+v),J.A(b0.a,b0.d+v))
s=a2+u+a3+t+524296
r=D.f.O(s+2*(u+a3),3)
q=D.f.O(s+2*(a2+t),3)
a4=D.f.O(r+a2,1)
p=D.f.O(q+u,1)
w=2*v
o=w-1
n=J.A(a5.a,a5.d+o)
m=a4&255
l=a4>>>16
k=o*4
j=C.bP(b1,e,k)
n=19077*n
i=n+26149*l+-3644112
if((i&-4194304)>>>0===0)h=D.f.O(i,14)
else h=i<0?0:255
J.bf(j.a,j.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.f.O(l,14)
else h=l<0?0:255
J.bf(j.a,j.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.f.O(n,14)
else h=n<0?0:255
J.bf(j.a,j.d+2,h)
J.bf(j.a,j.d+3,255)
n=J.A(a5.a,a5.d+w)
m=p&255
l=p>>>16
j=w*4
i=C.bP(b1,e,j)
n=19077*n
g=n+26149*l+-3644112
if((g&-4194304)>>>0===0)h=D.f.O(g,14)
else h=g<0?0:255
J.bf(i.a,i.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.f.O(l,14)
else h=l<0?0:255
J.bf(i.a,i.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.f.O(n,14)
else h=n<0?0:255
J.bf(i.a,i.d+2,h)
J.bf(i.a,i.d+3,255)
if(x){a4=D.f.O(q+a3,1)
p=D.f.O(r+t,1)
o=J.A(a6.a,a6.d+o)
n=a4&255
m=a4>>>16
b2.toString
k=C.bP(b2,e,k)
o=19077*o
l=o+26149*m+-3644112
if((l&-4194304)>>>0===0)h=D.f.O(l,14)
else h=l<0?0:255
J.bf(k.a,k.d,h)
m=o-6419*n-13320*m+2229552
if((m&-4194304)>>>0===0)h=D.f.O(m,14)
else h=m<0?0:255
J.bf(k.a,k.d+1,h)
o=o+33050*n+-4527440
if((o&-4194304)>>>0===0)h=D.f.O(o,14)
else h=o<0?0:255
J.bf(k.a,k.d+2,h)
J.bf(k.a,k.d+3,255)
w=J.A(a6.a,a6.d+w)
o=p&255
n=p>>>16
j=C.bP(b2,e,j)
w=19077*w
m=w+26149*n+-3644112
if((m&-4194304)>>>0===0)h=D.f.O(m,14)
else h=m<0?0:255
J.bf(j.a,j.d,h)
n=w-6419*o-13320*n+2229552
if((n&-4194304)>>>0===0)h=D.f.O(n,14)
else h=n<0?0:255
J.bf(j.a,j.d+1,h)
w=w+33050*o+-4527440
if((w&-4194304)>>>0===0)h=D.f.O(w,14)
else h=w<0?0:255
J.bf(j.a,j.d+2,h)
J.bf(j.a,j.d+3,255)}}if((b3&1)===0){a4=D.f.O(3*a2+a3+131074,2)
w=J.A(a5.a,a5.d+a0)
o=a0*4
n=C.bP(b1,e,o)
f.TR(w,a4&255,a4>>>16,n)
n.m(0,3,255)
if(x){a4=D.f.O(3*a3+a2+131074,2)
a0=J.A(a6.a,a6.d+a0)
b2.toString
o=C.bP(b2,e,o)
f.TR(a0,a4&255,a4>>>16,o)
o.m(0,3,255)}}},
aTT(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
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
q=q==null?null:q.cE(s,u,null);(q==null?new C.eq():q).sao(r)}x.d=x.d+o.a}},
aTU(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=C.cc(J.cy(l.d.gad(0),0,null),!1,k,d*j.a*4),h=l.to
h===$&&C.b()
x=C.bP(h,k,0)
h=l.x1
h===$&&C.b()
w=C.bP(h,k,0)
h=l.x2
h===$&&C.b()
v=C.bP(h,k,0)
u=d+f
t=D.f.O(e+1,1)
s=j.a*4
j=l.rx
j===$&&C.b()
r=C.bP(j,k,0)
j=l.ry
j===$&&C.b()
q=C.bP(j,k,0)
if(d===0){l.Tt(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&C.b()
l.Tt(j,x,r,q,w,v,C.bP(i,k,-s),i,e)
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
l.Tt(C.bP(x,k,-n),x,r,q,w,v,C.bP(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
j=l.Q
j.toString
h=l.as
h.toString
if(j+u<h){j=l.RG
j===$&&C.b()
j.x9(0,e,x)
l.rx.x9(0,t,w)
l.ry.x9(0,t,v);--p}else if((u&1)===0)l.Tt(x,k,w,v,w,v,C.bP(i,k,s),k,e)
return p},
aS8(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.aa=new Uint8Array(n)
x=o.a4
w=new B.bjr(x,m,l)
v=x.bz()
u=w.d=v&3
w.e=D.f.O(v,2)&3
w.f=D.f.O(v,4)&3
w.r=D.f.O(v,6)&3
if(w.gcU())if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new B.ami(A.tf,C.c([],y.J))
t.a=m
t.b=l
n=C.c([],y.A)
u=C.c([],y.F)
s=new Uint32Array(2)
r=new B.am_(x,s)
s=r.d=J.cy(D.bL.gad(s),0,null)
q=x.bz()
s.$flags&2&&C.u(s)
s[0]=q
q=x.bz()
s.$flags&2&&C.u(s)
s[1]=q
q=x.bz()
s.$flags&2&&C.u(s)
s[2]=q
q=x.bz()
s.$flags&2&&C.u(s)
s[3]=q
q=x.bz()
s.$flags&2&&C.u(s)
s[4]=q
q=x.bz()
s.$flags&2&&C.u(s)
s[5]=q
q=x.bz()
s.$flags&2&&C.u(s)
s[6]=q
x=x.bz()
s.$flags&2&&C.u(s)
s[7]=x
u=new B.af_(r,t,n,u)
u.db=m
w.x=u
u.HC(m,l,!0)
n=w.x
x=n.ax
if(x.length===1&&x[0].a===A.a8d&&n.b1X()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.cx=0
x=D.f.aK(p,4)
x=new Uint8Array(p+(4-x))
n.CW=x
n.ch=J.lK(D.P.gad(x),0,null)}else{w.y=!1
w.x.af_()}}else w.r=1
o.a3=w}n=o.a3
n===$&&C.b()
if(!n.w){x=o.aa
x===$&&C.b()
if(!n.KG(d,e,x))return null}n=o.aa
n===$&&C.b()
return C.cc(n,!1,null,d*m)},
b6V(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&C.b()
x=a1.dy[a3]
a3=a1.b6
a3===$&&C.b()
w=a3[a1.y1]
v=C.cc(w.a,!1,null,0)
a3=a1.k3
a3===$&&C.b()
u=a3[0]
v.bsy(0,v.c-v.d,0)
a3=w.b
a3===$&&C.b()
if(!a3){t=C.cc(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.a27(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.bf3(t,v)
else{q=D.f.O(J.A(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.bf(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.a27(a5,o,i+(m&1),x.a,n,v)
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
m=D.f.fK(a4.a,a3)
l=D.f.fK(u.a,a3)
for(h=0,j=0;j<2;++j){i=l&1
for(g=0;g<2;++g){r=a1.a27(a5,a2[2],i+(m&1),x.c,0,v)
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
bf3(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
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
u=D.f.O(v+s,3)
J.bf(e.a,e.d+p,u)
u=D.f.O(q+r,3)
J.bf(e.a,e.d+(p+16),u)
u=D.f.O(v-s,3)
J.bf(e.a,e.d+(p+32),u)
u=D.f.O(q-r,3)
J.bf(e.a,e.d+(p+48),u)
p+=64}},
aWf(d,e){var x,w,v,u,t,s
if(d.fD(e[3])===0)x=d.fD(e[4])===0?2:3+d.fD(e[5])
else if(d.fD(e[6])===0)x=d.fD(e[7])===0?5+d.fD(159):7+2*d.fD(165)+d.fD(145)
else{w=d.fD(e[8])
v=2*w+d.fD(e[9+w])
u=A.eK1[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.fD(u[s])
x+=3+D.f.cN(8,v)}return x},
a27(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.fD(p[0])===0)return h
while(d.fD(p[1])===0){++h
p=e[A.UT[h]].a[0]
if(h===16)return 16}x=h+1
w=e[A.UT[x]].a
if(d.fD(p[2])===0){p=w[1]
v=1}else{v=this.aWf(d,p)
p=w[2]}u=A.eQz[h]
t=d.b
t===$&&C.b()
s=d.afo(D.f.O(t,1))
t=d.b
r=A.UJ[t]
d.b=A.UI[t]
t=d.d
t===$&&C.b()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.bf(i.a,i.d+u,t*q)}return 16},
b6R(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.b6
j===$&&C.b()
x=j[n]
n=o.c
n===$&&C.b()
n=n.fD(145)===0
x.b=n
if(!n){if(o.c.fD(156)!==0)w=o.c.fD(128)!==0?1:3
else w=o.c.fD(163)!==0?2:0
n=x.c
n.$flags&2&&C.u(n)
n[0]=w
l.toString
D.P.fz(l,m,m+4,w)
D.P.fz(k,0,4,w)}else{v=x.c
for(n=k.$flags|0,u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){j=m+s
r=A.eQM[l[j]][w]
q=A.UB[o.c.fD(r[0])]
while(q>0)q=A.UB[2*q+o.c.fD(r[q])]
w=-q
l.$flags&2&&C.u(l)
l[j]=w}p=u+4
l.toString
D.P.cz(v,u,p,l,m)
n&2&&C.u(k)
k[t]=w}}if(o.c.fD(142)===0)n=0
else if(o.c.fD(114)===0)n=2
else n=o.c.fD(183)!==0?1:3
x.d=n}}
B.a_D.prototype={
ek(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.f.cF(this.fD(128),w))>>>0
return x},
Gf(d){var x=this.ek(d)
return this.ek(1)===1?-x:x},
fD(d){var x,w=this,v=w.b
v===$&&C.b()
x=w.afo(D.f.O(v*d,8))
if(w.b<=126)w.bch()
return x},
afo(d){var x,w,v,u,t,s=this,r=s.d
r===$&&C.b()
if(r<0){x=s.a
w=x.c
v=x.d
if(w-v>=1){u=x.bz()
r=s.c
r===$&&C.b()
s.c=(u|r<<8)>>>0
r=s.d+8
s.d=r
t=r}else{if(v<w){r=x.bz()
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
if(D.f.jc(r,t)>d){x=s.b
x===$&&C.b()
w=d+1
s.b=x-w
s.c=r-D.f.cF(w,t)
return 1}else{s.b=d
return 0}},
bch(){var x,w=this,v=w.b
v===$&&C.b()
x=A.UJ[v]
w.b=A.UI[v]
v=w.d
v===$&&C.b()
w.d=v-x}}
B.biN.prototype={
ad4(d,e,f){var x,w=C.bP(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.alE(w,e,f))this.Qr(w,e)}},
ad3(d,e,f){var x,w=C.bP(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.alE(w,1,f))this.Qr(w,1)}},
aEO(d,e,f){var x,w,v=C.bP(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.ad4(v,e,f)}},
aEN(d,e,f){var x,w=C.bP(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.ad3(w,e,f)}},
byD(d,e,f,g,h){var x,w,v=C.bP(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.Ci(v,e,1,16,f,g,h)}},
boo(d,e,f,g,h){var x,w=C.bP(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.Ci(w,1,e,16,f,g,h)}},
Cj(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.bP(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.alF(h,e,a0,a1))if(this.akr(h,e,a2))this.Qr(h,e)
else{s=J.A(h.a,h.d+x)
r=J.A(h.a,h.d+w)
q=J.A(h.a,h.d+v)
p=J.A(h.a,h.d)
o=J.A(h.a,h.d+e)
n=J.A(h.a,h.d+u)
m=$.c0a()
l=m[1020+3*(p-q)+m[1020+r-o]]
m=D.f.O(27*l+63,7)
k=(m&2147483647)-((m&2147483648)>>>0)
m=D.f.O(18*l+63,7)
j=(m&2147483647)-((m&2147483648)>>>0)
m=D.f.O(9*l+63,7)
i=(m&2147483647)-((m&2147483648)>>>0)
m=$.nu()[255+s+i]
J.bf(h.a,h.d+x,m)
m=$.nu()[255+r+j]
J.bf(h.a,h.d+w,m)
m=$.nu()[255+q+k]
J.bf(h.a,h.d+v,m)
m=$.nu()[255+p-k]
J.bf(h.a,h.d,m)
m=$.nu()[255+o-j]
J.bf(h.a,h.d+e,m)
m=$.nu()[255+n-i]
J.bf(h.a,h.d+u,m)}h.d+=f}},
Ci(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=C.bP(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.alF(k,e,h,i))if(this.akr(k,e,j))this.Qr(k,e)
else{u=J.A(k.a,k.d+x)
t=J.A(k.a,k.d+w)
s=J.A(k.a,k.d)
r=J.A(k.a,k.d+e)
q=3*(s-t)
p=$.c0b()
o=D.f.O(q+4,3)
n=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.f.O(q+3,3)
m=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.f.O(n+1,1)
l=(o&2147483647)-((o&2147483648)>>>0)
o=$.nu()[255+u+l]
J.bf(k.a,k.d+x,o)
o=$.nu()[255+t+m]
J.bf(k.a,k.d+w,o)
o=$.nu()[255+s-n]
J.bf(k.a,k.d,o)
o=$.nu()[255+r-l]
J.bf(k.a,k.d+e,o)}k.d+=f}},
Qr(d,e){var x=J.A(d.a,d.d+-2*e),w=-e,v=J.A(d.a,d.d+w),u=J.A(d.a,d.d),t=J.A(d.a,d.d+e),s=3*(u-v)+$.c0a()[1020+x-t],r=$.c0b(),q=r[112+D.f.iN(D.f.O(s+4,3),32)],p=r[112+D.f.iN(D.f.O(s+3,3),32)]
d.m(0,w,$.nu()[255+v+p])
d.m(0,0,$.nu()[255+u-q])},
akr(d,e,f){var x=J.A(d.a,d.d+-2*e),w=J.A(d.a,d.d+-e),v=J.A(d.a,d.d),u=J.A(d.a,d.d+e),t=$.aB6()
return t[255+x-w]>f||t[255+u-v]>f},
alE(d,e,f){var x=J.A(d.a,d.d+-2*e),w=J.A(d.a,d.d+-e),v=J.A(d.a,d.d),u=J.A(d.a,d.d+e)
return 2*$.aB6()[255+w-v]+$.c09()[255+x-u]<=f},
alF(d,e,f,g){var x=J.A(d.a,d.d+-4*e),w=J.A(d.a,d.d+-3*e),v=J.A(d.a,d.d+-2*e),u=J.A(d.a,d.d+-e),t=J.A(d.a,d.d),s=J.A(d.a,d.d+e),r=J.A(d.a,d.d+2*e),q=J.A(d.a,d.d+3*e),p=$.aB6(),o=255+v
if(2*p[255+u-t]+$.c09()[o-s]>f)return!1
return p[255+x-w]<=g&&p[255+w-v]<=g&&p[o-u]<=g&&p[255+q-r]<=g&&p[255+r-s]<=g&&p[255+s-t]<=g},
t4(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
for(x=0,w=0,v=0;v<4;++v){u=x+8
t=J.A(d.a,d.d+x)+J.A(d.a,d.d+u)
s=J.A(d.a,d.d+x)-J.A(d.a,d.d+u)
u=x+4
r=D.f.O(J.A(d.a,d.d+u)*35468,16)
q=x+12
p=D.f.O(J.A(d.a,d.d+q)*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.f.O(J.A(d.a,d.d+u)*85627,16)
q=D.f.O(J.A(d.a,d.d+q)*35468,16)
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
r=D.f.O(u*35468,16)
q=j[w+12]
p=D.f.O(q*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.f.O(u*85627,16)
q=D.f.O(q*35468,16)
n=(u&2147483647)-((u&2147483648)>>>0)+((q&2147483647)-((q&2147483648)>>>0))
B.AX(e,l,0,0,t+n)
B.AX(e,l,1,0,s+o)
B.AX(e,l,2,0,s-o)
B.AX(e,l,3,0,t-n);++w
l+=32}},
Nm(d,e,f){this.t4(d,e)
if(f)this.t4(C.bP(d,null,16),C.bP(e,null,4))},
Nn(d,e){var x,w,v=J.A(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)B.AX(e,0,w,x,v)},
azT(d,e){var x=this,w=null
if(J.A(d.a,d.d)!==0)x.Nn(d,e)
if(J.A(d.a,d.d+16)!==0)x.Nn(C.bP(d,w,16),C.bP(e,w,4))
if(J.A(d.a,d.d+32)!==0)x.Nn(C.bP(d,w,32),C.bP(e,w,128))
if(J.A(d.a,d.d+48)!==0)x.Nn(C.bP(d,w,48),C.bP(e,w,132))}}
B.biS.prototype={
P3(d){return this.c.$1$context(d)}}
B.biW.prototype={}
B.biY.prototype={}
B.a_C.prototype={}
B.biX.prototype={}
B.biO.prototype={}
B.Gt.prototype={}
B.am1.prototype={}
B.am3.prototype={}
B.am2.prototype={}
B.am4.prototype={}
B.a_E.prototype={
KI(){var x,w=this.b
if(w.hh(8)!==47)return!1
x=this.c
x.f=A.yB
x.a=w.hh(14)+1
x.b=w.hh(14)+1
x.d=w.hh(1)!==0
if(w.hh(3)!==0)return!1
return!0},
oC(){var x,w,v,u,t,s=this,r=null
s.e=0
if(!s.KI())return r
x=s.c
s.HC(x.a,x.b,!0)
s.af_()
w=x.a
s.d=C.fR(r,r,D.ay,0,D.bO,x.b,r,0,4,r,D.ay,w,!1)
w=s.ch
w.toString
v=x.a
u=x.b
if(!s.a1c(w,v,u,u,s.gb8c()))return r
x=x.w
if(x.length!==0){t=C.cc(new C.bW(x),!1,r,0)
x=s.d
x.toString
x.e=B.c1X(t)}return s.d},
af_(){var x,w=this,v=w.c,u=v.a
v=u*v.b+u
x=new Uint32Array(v+u*16)
w.ch=x
w.CW=J.cy(D.bL.gad(x),0,null)
w.cx=v
return!0},
b90(d){var x,w,v,u=this,t=u.b,s=t.hh(2),r=u.ay,q=D.f.cN(1,s)
if((r&q)>>>0!==0)return!1
u.ay=(r|q)>>>0
x=new B.am0(A.a8c)
u.ax.push(x)
r=A.f1M[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.hh(3)+2
x.e=t
x.d=u.HC(B.AY(x.b,t),B.AY(x.c,x.e),!1)
break
case 3:w=t.hh(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=B.AY(x.b,v)
x.e=v
x.d=u.HC(w,1,!1)
u.aUn(w,x)
break
case 2:break}return!0},
HC(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.hh(1)!==0;){t=C.c([u,v],w)
if(!p.b90(t))throw C.n(C.bJ("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.hh(1)!==0){s=x.hh(4)
if(!(s>=1&&s<=11))throw C.n(C.bJ("Invalid Color Cache"))}else s=0
if(!p.b8P(u,v,s,f))throw C.n(C.bJ("Invalid Huffman Codes"))
if(s>0){x=D.f.cN(1,s)
p.r=x
p.w=new B.biT(new Uint32Array(x),32-s)}else p.r=0
x=p.c
x.a=u
x.b=v
r=p.y
p.z=B.AY(u,r)
p.x=r===0?4294967295:D.f.cN(1,r)-1
if(f){p.e=0
return null}q=new Uint32Array(u*v)
if(!p.a1c(q,u,v,v,null))throw C.n(C.bJ("Failed to decode image data."))
p.e=0
return q},
a1c(a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=a0.e,a2=D.f.eq(a1,a9),a3=D.f.aK(a1,a9),a4=a0.aj3(a3,a2),a5=a0.e,a6=a9*b0,a7=a9*b1
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
a4=a0.at[p]}if(u.a>=32)u.zg()
r=a4.a
o=r[0].xo(u)
n=0
if(o<256){m=r[1].xo(u)
if(u.a>=32)u.zg()
l=C.cjO(r[2].xo(u),o,m,r[3].xo(u))
a1&2&&C.u(a8)
a8[a5]=l;++a5;++a3
if(a3>=a9){++a2
if(D.f.aK(a2,16)===0&&t)b2.$1(a2)
if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.f.ef(j*506832829>>>0,r)
k&2&&C.u(q)
q[i]=j;++s}a3=n}}else if(o<280){h=a0.QT(o-256)
g=r[4].xo(u)
if(u.a>=32)u.zg()
f=a0.amv(a9,a0.QT(g))
if(a5<f||a6-a5<h)return!1
else{e=a5-f
for(d=0;d<h;++d){r=a8[e+d]
a1&2&&C.u(a8)
a8[a5+d]=r}a5+=h}a3+=h
while(a3>=a9){a3-=a9;++a2
if(D.f.aK(a2,16)===0&&t)b2.$1(a2)}if(a5<a7){if((a3&v)>>>0!==0){p=a0.Ie(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.f.ef(j*506832829>>>0,r)
k&2&&C.u(q)
q[i]=j;++s}}}else if(o<x){while(s<a5){r=a8[s]
i=D.f.ef(r*506832829>>>0,w.b)
q=w.a
q.$flags&2&&C.u(q)
q[i]=r;++s}r=w.a
q=r[o-280]
a1&2&&C.u(a8)
a8[a5]=q;++a5;++a3
if(a3>=a9){++a2
if(D.f.aK(a2,16)===0&&t)b2.$1(a2)
for(q=w.b,k=r.$flags|0;s<a5;){j=a8[s]
i=D.f.ef(j*506832829>>>0,q)
k&2&&C.u(r)
r[i]=j;++s}a3=n}}else return!1}if(t)b2.$1(a2)
if(r.d>=q&&u.a>=64&&a5<a6)return!1
a0.e=a5
return!0},
b1X(){var x,w,v,u
if(this.r>0)return!1
for(x=this.as,w=this.at,v=0;v<x;++v){u=w[v].a
if(u[1].f>1)return!1
if(u[2].f>1)return!1
if(u[3].f>1)return!1}return!0},
aUy(d){var x,w,v,u,t,s,r=this,q=r.f,p=d-q
if(p<=0)return
x=r.c
r.af9(p,x.a*q)
w=x.a
v=w*p
u=w*r.f
x=r.ch
x.toString
q=r.cx
q.toString
t=C.cc(x,!1,null,q)
for(s=0;s<v;++s){q=r.cy
q.toString
x=D.f.O(J.A(t.a,t.d+s),8)
q.$flags&2&&C.u(q)
q[u+s]=x&255}r.f=d},
aRO(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=o.e,m=D.f.eq(n,d),l=D.f.aK(n,d),k=o.aj3(l,m),j=o.e,i=d*e,h=d*f,g=o.x
n=o.b
for(;;){x=n.b
if(!(!(x.d>=x.c&&n.a>=64)&&j<h))break
if((l&g)>>>0===0){w=o.Ie(o.Q,o.z,o.y,l,m)
k=o.at[w]}if(n.a>=32)n.zg()
x=k.a
v=x[0].xo(n)
if(v<256){x=o.CW
x===$&&C.b()
x.$flags&2&&C.u(x)
x[j]=v;++j;++l
if(l>=d){++m
if(D.f.aK(m,16)===0)o.a1L(m)
l=0}}else if(v<280){u=o.QT(v-256)
t=x[4].xo(n)
if(n.a>=32)n.zg()
s=o.amv(d,o.QT(t))
if(j>=s&&i-j>=u)for(x=o.CW,r=0;r<u;++r){x===$&&C.b()
q=j+r
p=x[q-s]
x.$flags&2&&C.u(x)
x[q]=p}else{o.e=j
return!0}j+=u
l+=u
while(l>=d){l-=d;++m
if(D.f.aK(m,16)===0)o.a1L(m)}if(j<h&&(l&g)>>>0!==0){w=o.Ie(o.Q,o.z,o.y,l,m)
k=o.at[w]}}else return!1}o.a1L(m)
o.e=j
return!0},
a1L(d){var x,w,v,u=this,t=u.f,s=d-t,r=u.CW
r===$&&C.b()
x=C.cc(r,!1,null,u.c.a*t)
if(s>0){w=u.f
t=u.cy
t.toString
r=u.db
r.toString
v=C.cc(t,!1,null,r*w)
u.ax[0].bj9(w,w+s,x,v)}u.f=d},
b8d(d){var x,w,v,u,t,s=this,r=s.c,q=r.a,p=s.f,o=d-p
if(o<=0)return
s.af9(o,q*p)
q=s.cx
q.toString
x=s.f
w=q
v=0
for(;v<o;++v,++x)for(u=0;u<r.a;++u,++w){t=s.ch[w]
q=s.d.a
if(q!=null)q.ie(u,x,t>>>16&255,t>>>8&255,t&255,t>>>24&255)}s.f=d},
af9(d,e){var x,w,v,u=this,t=u.ax,s=t.length,r=u.c.a,q=u.f,p=q+d,o=u.cx
o.toString
x=u.ch
x.toString
D.bL.cz(x,o,o+r*d,x,e)
for(w=e;v=s-1,s>0;w=o,s=v){r=t[v]
x=u.ch
x.toString
r.bqB(q,p,x,w,x,o)}},
b8P(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=1
if(g&&l.b.hh(1)!==0){x=l.b.hh(3)+2
w=B.AY(d,x)
v=B.AY(e,x)
u=w*v
t=l.HC(w,v,!1)
l.y=x
for(s=0;s<u;++s){r=t[s]>>>8&65535
t.$flags&2&&C.u(t)
t[s]=r
if(r>=k)k=r+1}}else t=null
q=J.jF(k,y.f)
for(p=0;p<k;++p)q[p]=B.ct6()
for(o=f>0,s=0;s<k;++s)for(n=0;n<5;++n){m=A.eNY[n]
if(n===0&&o)m+=D.f.cN(1,f)
if(!l.b8N(m,q[s].a[n]))return!1}l.Q=t
l.as=k
l.at=q
return!0},
b8N(d,e){var x,w,v,u,t,s,r,q,p,o=this.b
if(o.hh(1)!==0){x=y.t
w=C.c([0,0],x)
v=C.c([0,0],x)
u=C.c([0,0],x)
t=o.hh(1)+1
w[0]=o.hh(o.hh(1)===0?1:8)
v[0]=0
x=t-1
u[0]=x
if(t===2){w[1]=o.hh(8)
v[1]=1
u[1]=x}s=e.bir(u,v,w,d,t)}else{r=new Int32Array(19)
q=o.hh(4)+4
if(q>19)return!1
u=new Int32Array(d)
for(p=0;p<q;++p)r[A.eQ5[p]]=o.hh(3)
s=this.b8O(r,d,u)
if(s)s=e.asD(u,d)}return s},
b8O(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=B.cb1()
if(!j.asD(d,19))return!1
x=this.b
if(x.hh(1)!==0){w=2+x.hh(2+2*x.hh(3))
if(w>e)return!1}else w=e
for(v=f.$flags|0,u=0,t=8;u<e;w=s){s=w-1
if(w===0)break
if(x.a>=32)x.zg()
r=j.xo(x)
if(r<16){q=u+1
v&2&&C.u(f)
f[u]=r
if(r!==0)t=r
u=q}else{p=r-16
o=A.enm[p]
n=A.esZ[p]
m=x.hh(o)+n
if(u+m>e)return!1
else{l=r===16?t:0
for(;k=m-1,m>0;m=k,u=q){q=u+1
v&2&&C.u(f)
f[u]=l}}}}return!0},
QT(d){var x
if(d<4)return d+1
x=D.f.O(d-2,1)
return D.f.cN(2+(d&1),x)+this.b.hh(x)+1},
amv(d,e){var x,w
if(e>120)return e-120
else{x=A.eOd[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
aUn(d,e){var x,w,v,u,t,s,r=D.f.cN(1,D.f.fK(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.cy(D.bL.gad(p),0,null)
w=J.cy(D.bL.gad(q),0,null)
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
return d[e*D.f.O(h,f)+D.f.O(g,f)]},
aj3(d,e){var x=this,w=x.Ie(x.Q,x.z,x.y,d,e)
return x.at[w]}}
B.af_.prototype={
bnG(d){return this.aUy(d)}}
B.am_.prototype={
ayC(){var x,w,v=this.a
if(v<32){x=this.c
w=D.f.ef(x[0],v)+((x[1]&A.DR[v])>>>0)*(A.DR[32-v]+1)}else{x=this.c
w=v===32?x[1]:D.f.ef(x[1],v-32)}return w},
hh(d){var x,w=this,v=w.b
if(!(v.d>=v.c&&w.a>=64)&&d<25){v=w.ayC()
x=A.DR[d]
w.a+=d
w.zg()
return(v&x)>>>0}else throw C.n(C.bJ("Not enough data in input."))},
zg(){var x,w,v,u=this,t=u.b,s=u.c,r=s.$flags|0,q=t.c
for(;;){if(!(u.a>=8&&t.d<q))break
x=J.A(t.a,t.d++)
w=s[0]
v=s[1]
r&2&&C.u(s)
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
B.biT.prototype={}
B.Gu.prototype={
H(){return"VP8LImageTransformType."+this.b}}
B.am0.prototype={
bqB(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.bht(h,i,i+(e-d)*s)
break
case 0:t.bvh(d,e,h,i)
if(e!==t.c){x=i-s
D.bL.cz(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.bja(d,e,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*B.AY(s,t.e)
u=i+w*s-v
D.bL.cz(h,u,u+v,f,i)
t.ate(d,e,f,u,h,i)}else t.ate(d,e,f,g,h,i)
break}},
bj9(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.f.fK(8,r),p=this.b,o=this.d
if(q<8){x=D.f.cN(1,r)-1
w=D.f.cN(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.A(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.bf(g.a,g.d,r>>>8&255);++g.d
u=D.f.O(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.A(f.a,f.d);++f.d
r=o[s]
J.bf(g.a,g.d,r>>>8&255);++g.d}},
ate(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.f.fK(8,p),n=this.b,m=this.d
if(o<8){x=D.f.cN(1,p)-1
w=D.f.cN(1,o)-1
for(p=h.$flags|0,v=d;v<e;++v)for(u=0,t=0;t<n;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
q=m[u&w]
p&2&&C.u(h)
h[i]=q
u=D.f.fK(u,o)}}else for(p=h.$flags|0,v=d;v<e;++v)for(t=0;t<n;++t,i=r,g=s){r=i+1
s=g+1
q=m[f[g]>>>8&255]
p&2&&C.u(h)
h[i]=q}},
bja(a2,a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b,e=g.e,d=D.f.cN(1,e)-1,a0=B.AY(f,e),a1=D.f.O(a2,g.e)*a0
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
o=$.lJ()
o.$flags&2&&C.u(o)
o[0]=p
p=$.mx()
n=p[0]
o[0]=q
m=p[0]
l=$.aB8()
l.$flags&2&&C.u(l)
l[0]=n*m
k=$.c0e()
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
bvh(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=this,n=o.b
if(d===0){B.biU(f,g,4278190080)
for(x=1;x<n;++x){w=g+x
B.biU(f,w,f[w-1])}g+=n;++d}w=o.e
v=D.f.cN(1,w)-1
u=B.AY(n,w)
t=D.f.O(d,o.e)*u
for(s=d;s<e;){B.biU(f,g,f[g-n])
r=t+1
q=$.cfq[o.d[t]>>>8&15]
for(x=1;x<n;++x){if((x&v)>>>0===0){p=r+1
q=$.cfq[o.d[r]>>>8&15]
r=p}w=g+x
B.biU(f,w,q.$3(f,f[w-1],w-n))}g+=n;++s
if((s&v)>>>0===0)t+=u}},
bht(d,e,f){var x,w,v,u
for(x=d.$flags|0;e<f;e=u){w=d[e]
v=w>>>8&255
u=e+1
x&2&&C.u(d)
d[e]=(w&4278255360|(w&16711935)+(v<<16|v)&16711935)>>>0}}}
B.bjr.prototype={
gcU(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
KG(d,e,f){var x,w,v,u,t,s,r=this
if(!r.gcU())return!1
x=A.f4N[r.e]
if(r.d===0){w=r.b
v=d*w
u=r.a
D.P.cz(f,v,e*w,u.a,u.d-u.b+v)}else{w=d+e
u=r.x
u===$&&C.b()
u.cy=f
t=u.c
if(r.y)w=u.aRO(t.a,t.b,w)
else{s=u.ch
s.toString
u=u.a1c(s,t.a,t.b,w,u.gbnF())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,d,e,f)}if(r.f===1)if(!r.aSz(f,r.b,r.c,d,e))return!1
if(d+e===r.c)r.w=!0
return!0},
aSz(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
B.a_J.prototype={
aMe(d,e){var x=this,w=d.bz()
x.r=0
x.f=(w&1)!==0
x.w=d.d-d.b
x.x=e-16}}
B.af0.prototype={}
B.aeh.prototype={
a5S(d){var x,w=this
if(d===0)return!1
x=(d<<1>>>0)-1
w.e=x
x=new Int32Array(x<<1>>>0)
w.d=x
x[1]=-1
w.f=1
D.P.fz(w.a,0,128,255)
return!0},
asD(d,e){var x,w,v,u,t,s=this
for(x=0,w=0,v=0;v<e;++v)if(d[v]>0){++x
w=v}if(!s.a5S(x))return!1
if(x===1){if(w<0||w>=e)return!1
return s.a0a(w,0,0)}u=new Int32Array(e)
if(!s.b1f(d,e,u))return!1
for(v=0;v<e;++v){t=d[v]
if(t>0)if(!s.a0a(v,u[v],t))return!1}return s.f===s.e},
bir(d,e,f,g,h){var x,w,v,u=this
if(!u.a5S(h))return!1
for(x=0;x<h;++x){w=e[x]
if(w!==-1){v=f[x]
if(v>=g)return u.f===u.e
if(!u.a0a(v,w,d[x]))return u.f===u.e}}return u.f===u.e},
xo(d){var x,w,v=this,u=d.ayC(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}x=v.c[s]
t+=7
u=u>>>7
do{w=v.d
w===$&&C.b()
x=x+w[(x<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.alJ(x))
d.a=t
return v.d[x<<1>>>0]},
a0a(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
if(f<=7){x=l.anK(e,f)
for(w=D.f.cF(1,7-f),v=l.b,u=v.$flags|0,t=l.a,s=t.$flags|0,r=0;r<w;++r){q=(x|D.f.cF(r,f))>>>0
u&2&&C.u(v)
v[q]=d
s&2&&C.u(t)
t[q]=f}}else x=l.anK(D.f.jc(e,f-7),7)
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
o+=t[s]+(D.f.jc(e,n)&1);--p
if(p===0){v&2&&C.u(w)
w[x]=o}}if(l.b3X(o))l.b3Y(o,0)
else if(l.alJ(o))return!1
w=l.d
w===$&&C.b()
w.$flags&2&&C.u(w)
w[o<<1>>>0]=d
return!0},
anK(d,e){return D.f.ef((A.V7[d&15]<<4|A.V7[D.f.O(d,4)])>>>0,8-e)},
b3Y(d,e){var x=this.d
x===$&&C.b()
x.$flags&2&&C.u(x)
x[(d<<1>>>0)+1]=e},
alJ(d){var x=this.d
x===$&&C.b()
return x[(d<<1>>>0)+1]!==0},
b3X(d){var x=this.d
x===$&&C.b()
return x[(d<<1>>>0)+1]<0},
b1f(d,e,f){var x,w,v,u,t,s,r,q,p=new Int32Array(16),o=new Int32Array(16)
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
B.Ux.prototype={
h(d,e){return this.a[e]}}
B.O_.prototype={
H(){return"WebPFormat."+this.b}}
B.ami.prototype={
gbL(){return this.a},
gaQ(){return this.b}}
B.af1.prototype={}
B.bjs.prototype={
ET(d){var x=C.cc(d,!1,null,0)
this.b=x
if(!this.aj0(x))return!1
return!0},
iR(d){var x,w=this,v=null,u=C.cc(d,!1,v,0)
w.b=u
if(!w.aj0(u))return v
u=new B.af1(A.tf,C.c([],y.J))
w.a=u
x=w.b
x.toString
if(!w.arv(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!B.c49(x,u).KI())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!B.c47(x,u).KI())return v
u=w.a
u.as=u.z.length
return u
case 0:throw C.n(C.bJ("Unknown format for WebP"))}},
i5(d){var x,w,v,u,t=this,s=t.b
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
return t.ahe(s.yj(x,w),d)}w=x.f
if(w===A.yB){u=s.yj(x.ch,x.ay)
s=t.a
s.toString
return B.c49(u,s).oC()}else if(w===A.Gz){u=s.yj(x.ch,x.ay)
s=t.a
s.toString
return B.c47(u,s).oC()}return null},
mu(d,e){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.iR(d)==null)return o
x=p.a.e
if(!x)return p.i5(0)
for(w=o,v=w,u=0;x=p.a,u<x.as;++u){e=x.z[u]
t=p.i5(u)
if(t==null)continue
t.y=e.e
if(v==null||w==null){x=p.a
s=x.a
x=x.b
r=t.gnO()
q=t.a
q=q==null?o:q.gc2()
if(q==null)q=D.ay
v=C.fR(o,o,q,t.y,D.bO,x,o,0,r,o,D.ay,s,!1)
w=v}else{w=C.vs(w,!1,!1)
x=e.f
x===$&&C.b()
if(x){x=w.a
if(x!=null)x.lf(0,o)}}C.c5E(w,t,D.zr,o,o,e.a,e.b,o,o,o,o)
v.la(w)}return v},
ahe(d,e){var x,w,v,u=null,t=C.c([],y.J),s=new B.af1(A.tf,t)
if(!this.arv(d,s))return u
if(s.f===A.tf)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.x
t===$&&C.b()
x=w.w
x===$&&C.b()
return this.ahe(d.yj(t,x),e)}else{v=d.yj(s.ch,s.ay)
t=s.f
if(t===A.yB)return B.c49(v,s).oC()
else if(t===A.Gz)return B.c47(v,s).oC()}return u},
aj0(d){if(d.hi(4)!=="RIFF")return!1
d.Z()
if(d.hi(4)!=="WEBP")return!1
return!0},
arv(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=d.c,w=d.b;d.d<x;){v=d.hi(4)
u=d.Z()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.aWM(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=A.Gz
break
case"VP8L":e.ay=r
e.ch=u
e.f=A.yB
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.aw(s)
o=p.gu(s)
p=p.gu(s)
s=new C.kG(s,0,Math.min(o,p),0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=A.fBt
n=d.Z()
s=new Uint8Array(4)
s[0]=n>>>8&255
s[1]=n>>>16&255
s[2]=n>>>24&255
s[3]=n&255
d.ac()
break
case"ANMF":if(!this.aVL(d,e,u))return!1
break
case"ICCP":e.toString
m=d.hH(u)
d.d=d.d+(m.c-m.d)
m.ex()
break
case"EXIF":e.toString
e.w=d.hi(u)
break
case"XMP ":e.toString
d.hi(u)
break
default:d.d=s+t
break}s=d.d
l=t-(s-w-r)
if(l>0)d.d=s+l}if(!e.d)e.d=e.at!=null
return e.f!==A.tf},
aWM(d,e){var x,w,v,u,t=d.bz()
if((t&192)!==0)return!1
x=D.f.O(t,4)
w=D.f.O(t,1)
if((t&1)!==0)return!1
if(d.pe()!==0)return!1
v=d.pe()
u=d.pe()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
aVL(d,e,f){var x=new B.af0(d.pe()*2,d.pe()*2,d.pe()+1,d.pe()+1,d.pe())
x.aMe(d,f)
if(x.r!==0)return!1
e.z.push(x)
return!0}}
B.agN.prototype={
aN(d){var x,w,v=this
if(v.a===v.c.length)v.b6j()
x=v.c
w=v.a++
x.$flags&2&&C.u(x)
x[w]=d&255},
i_(d){var x,w,v,u,t=this,s=J.aX(d)
while(x=t.a,w=x+s,v=t.c,u=v.length,w>u)t.ame(w-u)
D.P.dJ(v,x,w,d)
t.a+=s},
dr(d){var x=this
if(x.b){x.aN(D.f.O(d,8)&255)
x.aN(d&255)
return}x.aN(d&255)
x.aN(D.f.O(d,8)&255)},
dh(d){var x=this
if(x.b){x.aN(D.f.O(d,24)&255)
x.aN(D.f.O(d,16)&255)
x.aN(D.f.O(d,8)&255)
x.aN(d&255)
return}x.aN(d&255)
x.aN(D.f.O(d,8)&255)
x.aN(D.f.O(d,16)&255)
x.aN(D.f.O(d,24)&255)},
bz7(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=J.cy(D.ld.gad(v),0,null)
if(w.b){w.aN(x[3])
w.aN(x[2])
w.aN(x[1])
w.aN(x[0])
return}w.aN(x[0])
w.aN(x[1])
w.aN(x[2])
w.aN(x[3])},
bz8(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=J.cy(D.lU.gad(v),0,null)
if(w.b){w.aN(x[7])
w.aN(x[6])
w.aN(x[5])
w.aN(x[4])
w.aN(x[3])
w.aN(x[2])
w.aN(x[1])
w.aN(x[0])
return}w.aN(x[0])
w.aN(x[1])
w.aN(x[2])
w.aN(x[3])
w.aN(x[4])
w.aN(x[5])
w.aN(x[6])
w.aN(x[7])},
ame(d){var x,w,v,u
if(d!=null)x=d
else{w=this.c.length
x=w===0?8192:w*2}w=this.c
v=w.length
u=new Uint8Array(v+x)
D.P.dJ(u,0,v,w)
this.c=u},
b6j(){return this.ame(null)},
gu(d){return this.a}}
var z=a.updateTypes(["~(kG)","w(op,w,w)","~(z2,v<w>)","~(w,w,w,w,w,e9)","~(w)","z2(w)"])
B.aFi.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.fF(x.ch.kS(d),x.ch.kR(d),x.ch.kQ(d),x.ch.m5(d))}else w.fF(d,e,f,g)
w.q();++u.a}},
$S:1195}
B.aOj.prototype={
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
$S:1196}
B.aUA.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.bz(),r=t.bz()
t=this.a
if(!t.d.y.aL(s))throw C.n(C.bJ("Invalid Component in SOS block"))
x=t.d.y.h(0,s)
x.toString
w=D.f.O(r,4)&15
v=r&15
u=t.z
if(w<u.length){u=u[w]
u.toString
x.w=u}t=t.y
if(v<t.length){t=t[v]
t.toString
x.x=t}return x},
$S:z+5}
B.b1s.prototype={
$1(d){return d!==""},
$S:12}
B.biZ.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:83};(function installTearOffs(){var x=a._instance_2u,w=a._static_1,v=a._instance_1u,u=a.installStaticTearOff
var t
x(t=B.afd.prototype,"gaRQ","aRR",2)
x(t,"gaRT","aRU",2)
x(t,"gaRV","aRW",2)
x(t,"gaRK","aRL",2)
x(t,"gaRM","aRN",2)
w(B,"cK8","czI",0)
w(B,"cK1","czA",0)
w(B,"cK_","czy",0)
w(B,"cK6","czG",0)
w(B,"cK7","czH",0)
w(B,"cK5","czF",0)
w(B,"cK4","czE",0)
w(B,"cK3","czD",0)
w(B,"cKa","czK",0)
w(B,"cK9","czJ",0)
w(B,"cK2","czB",0)
w(B,"cK0","czz",0)
w(B,"cKl","czV",0)
w(B,"cKj","czT",0)
w(B,"cKb","czL",0)
w(B,"cKd","czN",0)
w(B,"cKc","czM",0)
w(B,"cKe","czO",0)
w(B,"cKm","czW",0)
w(B,"cKk","czU",0)
w(B,"cKf","czP",0)
w(B,"cKg","czQ",0)
w(B,"cKh","czR",0)
w(B,"cKi","czS",0)
v(B.a_E.prototype,"gb8c","b8d",4)
v(B.af_.prototype,"gbnF","bnG",4)
u(B,"c6h",3,null,["$3"],["czX"],1,0)
u(B,"cKn",3,null,["$3"],["czY"],1,0)
u(B,"cKs",3,null,["$3"],["cA2"],1,0)
u(B,"cKt",3,null,["$3"],["cA3"],1,0)
u(B,"cKu",3,null,["$3"],["cA4"],1,0)
u(B,"cKv",3,null,["$3"],["cA5"],1,0)
u(B,"cKw",3,null,["$3"],["cA6"],1,0)
u(B,"cKx",3,null,["$3"],["cA7"],1,0)
u(B,"cKy",3,null,["$3"],["cA8"],1,0)
u(B,"cKz",3,null,["$3"],["cA9"],1,0)
u(B,"cKo",3,null,["$3"],["czZ"],1,0)
u(B,"cKp",3,null,["$3"],["cA_"],1,0)
u(B,"cKq",3,null,["$3"],["cA0"],1,0)
u(B,"cKr",3,null,["$3"],["cA1"],1,0)
u(B,"cKC",6,null,["$6"],["cAk"],3,0)
u(B,"cKD",6,null,["$6"],["cAl"],3,0)
u(B,"cKB",6,null,["$6"],["cAj"],3,0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(C.hs,[B.kw,B.JS,B.Dg,B.qk,B.Kc,B.zA,B.qT,B.ml,B.Gj,B.jh,B.py,B.Gu,B.O_])
x(C.C,[B.aFj,B.Cr,B.aJX,B.ad5,B.aOh,B.ad6,B.ad7,B.ad8,B.TX,B.at6,B.Ur,B.Us,B.adQ,B.aTj,B.aez,B.abl,B.DI,B.aUw,B.z2,B.aUy,B.OY,B.afc,B.aUC,B.aUD,B.afd,B.tK,B.LN,B.b33,B.LM,B.b35,B.ahW,B.ahZ,B.ai5,B.Xk,B.LQ,B.ai4,B.pi,B.alp,B.bgX,B.alq,B.bgZ,B.alr,B.bh_,B.aVQ,B.biM,B.a_D,B.biN,B.biS,B.biW,B.biY,B.a_C,B.biX,B.biO,B.Gt,B.am1,B.am3,B.am2,B.am4,B.a_E,B.am_,B.biT,B.am0,B.bjr,B.a_J,B.aeh,B.Ux,B.ami,B.agN])
x(C.ac1,[B.aam,B.aOi,B.aRm,B.aTi,B.Vd,B.b1r,B.b34,B.b3f,B.bgN,B.bgY,B.bjs])
x(C.ca,[B.aFi,B.aOj,B.aUA,B.b1s])
w(B.aKm,B.aam)
w(B.aUd,B.aOh)
x(B.aUd,[B.aeS,B.aUe,B.aUf,B.aUg,B.aeU])
w(B.aeT,B.TX)
w(B.aeV,B.Us)
w(B.aTh,B.Cr)
x(B.DI,[B.DJ,B.UF])
w(B.EV,B.aJX)
x(B.tK,[B.ahU,B.ahV,B.ahX,B.ahY,B.ai0,B.ai1])
x(B.LN,[B.Xg,B.ai_])
x(B.ai5,[B.w7,B.kQ])
w(B.biZ,C.dj)
w(B.af_,B.a_E)
w(B.af0,B.a_J)
w(B.af1,B.ami)})()
C.cD(b.typeUniverse,JSON.parse('{"aeT":{"TX":[]},"aeV":{"Us":[]},"DJ":{"DI":[]},"UF":{"DI":[]},"ahU":{"tK":[]},"ahV":{"tK":[]},"ahX":{"tK":[]},"ahY":{"tK":[]},"ai0":{"tK":[]},"ai1":{"tK":[]},"Xg":{"LN":[]},"ai_":{"LN":[]},"af0":{"a_J":[]}}'))
C.a6w(b.typeUniverse,JSON.parse('{"ai5":1}'))
var y=(function rtii(){var x=C.I
return{n:x("ad5"),W:x("ad7"),f:x("Ux"),x:x("aeh"),Y:x("aez"),P:x("mQ"),u:x("k6"),k:x("DQ"),E:x("x<abl>"),Q:x("x<ad6>"),m:x("x<TX>"),b:x("x<Us>"),A:x("x<Ux>"),g:x("x<v<v<v<w>>>>"),o:x("x<v<v<w>>>"),S:x("x<v<w>>"),X:x("x<LM>"),v:x("x<tK>"),l:x("x<ahZ>"),s:x("x<h>"),L:x("x<alr>"),d:x("x<Gt>"),F:x("x<am0>"),J:x("x<a_J>"),G:x("x<OY>"),t:x("x<w>"),T:x("x<DI?>"),a:x("x<afc?>"),w:x("x<op?>"),y:x("x<~(kG)>"),c:x("z2"),H:x("v<DQ>"),z:x("v<a_C>"),K:x("v<Gt>"),e:x("LM"),h:x("ahW"),C:x("Xg"),O:x("LN"),M:x("Xk"),i:x("LQ"),N:x("h"),j:x("alq"),R:x("op"),D:x("e9"),V:x("a_C"),q:x("am1"),_:x("am2"),bt:x("am4"),U:x("al<h>"),bc:x("at6"),p:x("w"),r:x("aeR?"),bT:x("v<DI?>?"),ac:x("e9?"),ak:x("a_D?"),B:x("Gt?"),Z:x("am3?"),I:x("w?")}})();(function constants(){var x=a.makeConstList
A.Hw=new B.kw(0,"none")
A.zs=new B.kw(3,"bitfields")
A.zt=new B.kw(6,"alphaBitfields")
A.dYU=new B.Dg(0,"red")
A.dYV=new B.Dg(1,"green")
A.dYW=new B.Dg(2,"blue")
A.dYX=new B.Dg(3,"alpha")
A.dYY=new B.Dg(4,"other")
A.MS=new B.JS(0,"uint")
A.C6=new B.JS(1,"half")
A.C7=new B.JS(2,"float")
A.MT=new B.qk(0,"none")
A.dZB=new C.adC(1,"page")
A.Nl=new B.Kc(2,"cur")
A.CV=x([0,2,8],y.t)
A.e4J=x([0,4,2,1],y.t)
A.dZH=new B.Kc(0,"invalid")
A.dZI=new B.Kc(1,"ico")
A.e4M=x([A.dZH,A.dZI,A.Nl],C.I("x<Kc>"))
A.T2=x([292,260,226,226],y.t)
A.enm=x([2,3,7],y.t)
A.T6=x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68],y.t)
A.esZ=x([3,3,11],y.t)
A.DO=x([128,128,128,128,128,128,128,128,128,128,128],y.t)
A.Ud=x([A.DO,A.DO,A.DO],y.S)
A.eJW=x([253,136,254,255,228,219,128,128,128,128,128],y.t)
A.eOP=x([189,129,242,255,227,213,255,219,128,128,128],y.t)
A.eOW=x([106,126,227,252,214,209,255,255,128,128,128],y.t)
A.eRU=x([A.eJW,A.eOP,A.eOW],y.S)
A.eSM=x([1,98,248,255,236,226,255,255,128,128,128],y.t)
A.exs=x([181,133,238,254,221,234,255,154,128,128,128],y.t)
A.et4=x([78,134,202,247,198,180,255,219,128,128,128],y.t)
A.eWs=x([A.eSM,A.exs,A.et4],y.S)
A.eGA=x([1,185,249,255,243,255,128,128,128,128,128],y.t)
A.eRZ=x([184,150,247,255,236,224,128,128,128,128,128],y.t)
A.f1J=x([77,110,216,255,236,230,128,128,128,128,128],y.t)
A.eR8=x([A.eGA,A.eRZ,A.f1J],y.S)
A.eRl=x([1,101,251,255,241,255,128,128,128,128,128],y.t)
A.eJU=x([170,139,241,252,236,209,255,255,128,128,128],y.t)
A.eRv=x([37,116,196,243,228,255,255,255,128,128,128],y.t)
A.eD_=x([A.eRl,A.eJU,A.eRv],y.S)
A.ePq=x([1,204,254,255,245,255,128,128,128,128,128],y.t)
A.f57=x([207,160,250,255,238,128,128,128,128,128,128],y.t)
A.f4R=x([102,103,231,255,211,171,128,128,128,128,128],y.t)
A.eNA=x([A.ePq,A.f57,A.f4R],y.S)
A.eAK=x([1,152,252,255,240,255,128,128,128,128,128],y.t)
A.f5x=x([177,135,243,255,234,225,128,128,128,128,128],y.t)
A.eQT=x([80,129,211,255,194,224,128,128,128,128,128],y.t)
A.eRT=x([A.eAK,A.f5x,A.eQT],y.S)
A.Uj=x([1,1,255,128,128,128,128,128,128,128,128],y.t)
A.eUQ=x([246,1,255,128,128,128,128,128,128,128,128],y.t)
A.eQl=x([255,128,128,128,128,128,128,128,128,128,128],y.t)
A.f79=x([A.Uj,A.eUQ,A.eQl],y.S)
A.eNn=x([A.Ud,A.eRU,A.eWs,A.eR8,A.eD_,A.eNA,A.eRT,A.f79],y.o)
A.f1V=x([198,35,237,223,193,187,162,160,145,155,62],y.t)
A.eJV=x([131,45,198,221,172,176,220,157,252,221,1],y.t)
A.f1T=x([68,47,146,208,149,167,221,162,255,223,128],y.t)
A.ePP=x([A.f1V,A.eJV,A.f1T],y.S)
A.eWH=x([1,149,241,255,221,224,255,255,128,128,128],y.t)
A.eYu=x([184,141,234,253,222,220,255,199,128,128,128],y.t)
A.eQe=x([81,99,181,242,176,190,249,202,255,255,128],y.t)
A.f_V=x([A.eWH,A.eYu,A.eQe],y.S)
A.eZo=x([1,129,232,253,214,197,242,196,255,255,128],y.t)
A.f4y=x([99,121,210,250,201,198,255,202,128,128,128],y.t)
A.eRV=x([23,91,163,242,170,187,247,210,255,255,128],y.t)
A.eQq=x([A.eZo,A.f4y,A.eRV],y.S)
A.eOa=x([1,200,246,255,234,255,128,128,128,128,128],y.t)
A.eZg=x([109,178,241,255,231,245,255,255,128,128,128],y.t)
A.enj=x([44,130,201,253,205,192,255,255,128,128,128],y.t)
A.f0K=x([A.eOa,A.eZg,A.enj],y.S)
A.eyW=x([1,132,239,251,219,209,255,165,128,128,128],y.t)
A.e4O=x([94,136,225,251,218,190,255,255,128,128,128],y.t)
A.eZO=x([22,100,174,245,186,161,255,199,128,128,128],y.t)
A.eRi=x([A.eyW,A.e4O,A.eZO],y.S)
A.eYt=x([1,182,249,255,232,235,128,128,128,128,128],y.t)
A.eRK=x([124,143,241,255,227,234,128,128,128,128,128],y.t)
A.eOK=x([35,77,181,251,193,211,255,205,128,128,128],y.t)
A.eP0=x([A.eYt,A.eRK,A.eOK],y.S)
A.f7a=x([1,157,247,255,236,231,255,255,128,128,128],y.t)
A.eNh=x([121,141,235,255,225,227,255,255,128,128,128],y.t)
A.eZm=x([45,99,188,251,195,217,255,224,128,128,128],y.t)
A.eB0=x([A.f7a,A.eNh,A.eZm],y.S)
A.e4P=x([1,1,251,255,213,255,128,128,128,128,128],y.t)
A.ens=x([203,1,248,255,255,128,128,128,128,128,128],y.t)
A.eYC=x([137,1,177,255,224,255,128,128,128,128,128],y.t)
A.eAT=x([A.e4P,A.ens,A.eYC],y.S)
A.eXX=x([A.ePP,A.f_V,A.eQq,A.f0K,A.eRi,A.eP0,A.eB0,A.eAT],y.o)
A.eNN=x([253,9,248,251,207,208,255,192,128,128,128],y.t)
A.eUR=x([175,13,224,243,193,185,249,198,255,255,128],y.t)
A.f76=x([73,17,171,221,161,179,236,167,255,234,128],y.t)
A.eTj=x([A.eNN,A.eUR,A.f76],y.S)
A.eXg=x([1,95,247,253,212,183,255,255,128,128,128],y.t)
A.eQB=x([239,90,244,250,211,209,255,255,128,128,128],y.t)
A.f1I=x([155,77,195,248,188,195,255,255,128,128,128],y.t)
A.eYs=x([A.eXg,A.eQB,A.f1I],y.S)
A.ePt=x([1,24,239,251,218,219,255,205,128,128,128],y.t)
A.eVP=x([201,51,219,255,196,186,128,128,128,128,128],y.t)
A.eQA=x([69,46,190,239,201,218,255,228,128,128,128],y.t)
A.eX6=x([A.ePt,A.eVP,A.eQA],y.S)
A.eOS=x([1,191,251,255,255,128,128,128,128,128,128],y.t)
A.eRu=x([223,165,249,255,213,255,128,128,128,128,128],y.t)
A.eS6=x([141,124,248,255,255,128,128,128,128,128,128],y.t)
A.eZn=x([A.eOS,A.eRu,A.eS6],y.S)
A.ePW=x([1,16,248,255,255,128,128,128,128,128,128],y.t)
A.eNf=x([190,36,230,255,236,255,128,128,128,128,128],y.t)
A.eJY=x([149,1,255,128,128,128,128,128,128,128,128],y.t)
A.eyX=x([A.ePW,A.eNf,A.eJY],y.S)
A.eRX=x([1,226,255,128,128,128,128,128,128,128,128],y.t)
A.eU6=x([247,192,255,128,128,128,128,128,128,128,128],y.t)
A.f1B=x([240,128,255,128,128,128,128,128,128,128,128],y.t)
A.esU=x([A.eRX,A.eU6,A.f1B],y.S)
A.f0J=x([1,134,252,255,255,128,128,128,128,128,128],y.t)
A.eRJ=x([213,62,250,255,255,128,128,128,128,128,128],y.t)
A.f5e=x([55,93,255,128,128,128,128,128,128,128,128],y.t)
A.eRW=x([A.f0J,A.eRJ,A.f5e],y.S)
A.eGr=x([A.eTj,A.eYs,A.eX6,A.eZn,A.eyX,A.esU,A.eRW,A.Ud],y.o)
A.eRL=x([202,24,213,235,186,191,220,160,240,175,255],y.t)
A.eJS=x([126,38,182,232,169,184,228,174,255,187,128],y.t)
A.eyZ=x([61,46,138,219,151,178,240,170,255,216,128],y.t)
A.eY3=x([A.eRL,A.eJS,A.eyZ],y.S)
A.eQS=x([1,112,230,250,199,191,247,159,255,255,128],y.t)
A.eB_=x([166,109,228,252,211,215,255,174,128,128,128],y.t)
A.eRp=x([39,77,162,232,172,180,245,178,255,255,128],y.t)
A.eXZ=x([A.eQS,A.eB_,A.eRp],y.S)
A.eR1=x([1,52,220,246,198,199,249,220,255,255,128],y.t)
A.eNx=x([124,74,191,243,183,193,250,221,255,255,128],y.t)
A.eOJ=x([24,71,130,219,154,170,243,182,255,255,128],y.t)
A.eXY=x([A.eR1,A.eNx,A.eOJ],y.S)
A.eOH=x([1,182,225,249,219,240,255,224,128,128,128],y.t)
A.f5a=x([149,150,226,252,216,205,255,171,128,128,128],y.t)
A.f7m=x([28,108,170,242,183,194,254,223,255,255,128],y.t)
A.f2B=x([A.eOH,A.f5a,A.f7m],y.S)
A.f7r=x([1,81,230,252,204,203,255,192,128,128,128],y.t)
A.eZ8=x([123,102,209,247,188,196,255,233,128,128,128],y.t)
A.f17=x([20,95,153,243,164,173,255,203,128,128,128],y.t)
A.eZd=x([A.f7r,A.eZ8,A.f17],y.S)
A.eQ8=x([1,222,248,255,216,213,128,128,128,128,128],y.t)
A.eRH=x([168,175,246,252,235,205,255,255,128,128,128],y.t)
A.eOO=x([47,116,215,255,211,212,255,255,128,128,128],y.t)
A.eN5=x([A.eQ8,A.eRH,A.eOO],y.S)
A.eQ3=x([1,121,236,253,212,214,255,255,128,128,128],y.t)
A.eR2=x([141,84,213,252,201,202,255,219,128,128,128],y.t)
A.eTa=x([42,80,160,240,162,185,255,205,128,128,128],y.t)
A.eP7=x([A.eQ3,A.eR2,A.eTa],y.S)
A.f5X=x([244,1,255,128,128,128,128,128,128,128,128],y.t)
A.e4K=x([238,1,255,128,128,128,128,128,128,128,128],y.t)
A.eU9=x([A.Uj,A.f5X,A.e4K],y.S)
A.egQ=x([A.eY3,A.eXZ,A.eXY,A.f2B,A.eZd,A.eN5,A.eP7,A.eU9],y.o)
A.eyY=x([A.eNn,A.eXX,A.eGr,A.egQ],y.g)
A.ezx=x([511,1023,2047,4095],y.t)
A.eK_=x([8,8,4,2],y.t)
A.egn=x([173,148,140],y.t)
A.egr=x([176,155,140,135],y.t)
A.efa=x([180,157,141,134,130],y.t)
A.enq=x([254,254,243,230,196,177,153,140,133,130,129],y.t)
A.eK1=x([A.egn,A.egr,A.efa,A.enq],y.S)
A.eNr=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095],y.t)
A.eNY=x([280,256,256,256,40],y.t)
A.Uk=x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390],y.t)
A.DC=x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],y.t)
A.eOd=x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],y.t)
A.DD=x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],y.t)
A.eOy=x([A.MS,A.C6,A.C7],C.I("x<JS>"))
A.Uq=x([B.cKf(),B.cK7(),B.cKm(),B.cKk(),B.cKh(),B.cKg(),B.cKi()],y.y)
A.Ga=new B.jh(0,"whiteIsZero")
A.fuU=new B.jh(1,"blackIsZero")
A.fv0=new B.jh(2,"rgb")
A.Gc=new B.jh(3,"palette")
A.fv1=new B.jh(4,"transparencyMask")
A.a7t=new B.jh(5,"cmyk")
A.fv2=new B.jh(6,"yCbCr")
A.fv3=new B.jh(7,"reserved7")
A.fv4=new B.jh(8,"cieLab")
A.fv5=new B.jh(9,"iccLab")
A.fuV=new B.jh(10,"ituLab")
A.fuW=new B.jh(11,"logL")
A.fuX=new B.jh(12,"logLuv")
A.fuY=new B.jh(13,"colorFilterArray")
A.fuZ=new B.jh(14,"linearRaw")
A.fv_=new B.jh(15,"depth")
A.Gb=new B.jh(16,"unknown")
A.ePx=x([A.Ga,A.fuU,A.fv0,A.Gc,A.fv1,A.a7t,A.fv2,A.fv3,A.fv4,A.fv5,A.fuV,A.fuW,A.fuX,A.fuY,A.fuZ,A.fv_,A.Gb],C.I("x<jh>"))
A.fuM=new B.Gj(0,"invalid")
A.a7r=new B.Gj(1,"uint")
A.bG=new B.Gj(2,"int")
A.t9=new B.Gj(3,"float")
A.eQ2=x([A.fuM,A.a7r,A.bG,A.t9],C.I("x<Gj>"))
A.eQ5=x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],y.t)
A.UB=x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],y.t)
A.eQz=x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],y.t)
A.dYZ=new B.qk(1,"rle")
A.dZ_=new B.qk(2,"zips")
A.dZ0=new B.qk(3,"zip")
A.dZ1=new B.qk(4,"piz")
A.dZ2=new B.qk(5,"pxr24")
A.dZ3=new B.qk(6,"b44")
A.dZ4=new B.qk(7,"b44a")
A.eQC=x([A.MT,A.dYZ,A.dZ_,A.dZ0,A.dZ1,A.dZ2,A.dZ3,A.dZ4],C.I("x<qk>"))
A.eT1=x([231,120,48,89,115,113,120,152,112],y.t)
A.egR=x([152,179,64,126,170,118,46,70,95],y.t)
A.eQy=x([175,69,143,80,85,82,72,155,103],y.t)
A.eyN=x([56,58,10,171,218,189,17,13,152],y.t)
A.eRm=x([114,26,17,163,44,195,21,10,173],y.t)
A.eRF=x([121,24,80,195,26,62,44,64,85],y.t)
A.eRg=x([144,71,10,38,171,213,144,34,26],y.t)
A.f_j=x([170,46,55,19,136,160,33,206,71],y.t)
A.eOf=x([63,20,8,114,114,208,12,9,226],y.t)
A.ePr=x([81,40,11,96,182,84,29,16,36],y.t)
A.e4Q=x([A.eT1,A.egR,A.eQy,A.eyN,A.eRm,A.eRF,A.eRg,A.f_j,A.eOf,A.ePr],y.S)
A.eNe=x([134,183,89,137,98,101,106,165,148],y.t)
A.eYT=x([72,187,100,130,157,111,32,75,80],y.t)
A.eRR=x([66,102,167,99,74,62,40,234,128],y.t)
A.esT=x([41,53,9,178,241,141,26,8,107],y.t)
A.ePe=x([74,43,26,146,73,166,49,23,157],y.t)
A.eOu=x([65,38,105,160,51,52,31,115,128],y.t)
A.eOB=x([104,79,12,27,217,255,87,17,7],y.t)
A.eQw=x([87,68,71,44,114,51,15,186,23],y.t)
A.eY1=x([47,41,14,110,182,183,21,17,194],y.t)
A.eUP=x([66,45,25,102,197,189,23,18,22],y.t)
A.f1e=x([A.eNe,A.eYT,A.eRR,A.esT,A.ePe,A.eOu,A.eOB,A.eQw,A.eY1,A.eUP],y.S)
A.eSR=x([88,88,147,150,42,46,45,196,205],y.t)
A.eRq=x([43,97,183,117,85,38,35,179,61],y.t)
A.eON=x([39,53,200,87,26,21,43,232,171],y.t)
A.eQj=x([56,34,51,104,114,102,29,93,77],y.t)
A.eRb=x([39,28,85,171,58,165,90,98,64],y.t)
A.eOn=x([34,22,116,206,23,34,43,166,73],y.t)
A.e4R=x([107,54,32,26,51,1,81,43,31],y.t)
A.f_v=x([68,25,106,22,64,171,36,225,114],y.t)
A.eNd=x([34,19,21,102,132,188,16,76,124],y.t)
A.f20=x([62,18,78,95,85,57,50,48,51],y.t)
A.eNH=x([A.eSR,A.eRq,A.eON,A.eQj,A.eRb,A.eOn,A.e4R,A.f_v,A.eNd,A.f20],y.S)
A.eR5=x([193,101,35,159,215,111,89,46,111],y.t)
A.eGq=x([60,148,31,172,219,228,21,18,111],y.t)
A.eyV=x([112,113,77,85,179,255,38,120,114],y.t)
A.f1X=x([40,42,1,196,245,209,10,25,109],y.t)
A.eQ0=x([88,43,29,140,166,213,37,43,154],y.t)
A.eOq=x([61,63,30,155,67,45,68,1,209],y.t)
A.eOV=x([100,80,8,43,154,1,51,26,71],y.t)
A.esX=x([142,78,78,16,255,128,34,197,171],y.t)
A.eQP=x([41,40,5,102,211,183,4,1,221],y.t)
A.eNU=x([51,50,17,168,209,192,23,25,82],y.t)
A.eND=x([A.eR5,A.eGq,A.eyV,A.f1X,A.eQ0,A.eOq,A.eOV,A.esX,A.eQP,A.eNU],y.S)
A.eOI=x([138,31,36,171,27,166,38,44,229],y.t)
A.eNy=x([67,87,58,169,82,115,26,59,179],y.t)
A.eWq=x([63,59,90,180,59,166,93,73,154],y.t)
A.f0N=x([40,40,21,116,143,209,34,39,175],y.t)
A.et1=x([47,15,16,183,34,223,49,45,183],y.t)
A.eIa=x([46,17,33,183,6,98,15,32,183],y.t)
A.f7t=x([57,46,22,24,128,1,54,17,37],y.t)
A.eOZ=x([65,32,73,115,28,128,23,128,205],y.t)
A.eRQ=x([40,3,9,115,51,192,18,6,223],y.t)
A.ePb=x([87,37,9,115,59,77,64,21,47],y.t)
A.eQO=x([A.eOI,A.eNy,A.eWq,A.f0N,A.et1,A.eIa,A.f7t,A.eOZ,A.eRQ,A.ePb],y.S)
A.f5U=x([104,55,44,218,9,54,53,130,226],y.t)
A.eAZ=x([64,90,70,205,40,41,23,26,57],y.t)
A.eWm=x([54,57,112,184,5,41,38,166,213],y.t)
A.eOp=x([30,34,26,133,152,116,10,32,134],y.t)
A.eTk=x([39,19,53,221,26,114,32,73,255],y.t)
A.eNS=x([31,9,65,234,2,15,1,118,73],y.t)
A.eQL=x([75,32,12,51,192,255,160,43,51],y.t)
A.eOt=x([88,31,35,67,102,85,55,186,85],y.t)
A.ePC=x([56,21,23,111,59,205,45,37,192],y.t)
A.ePK=x([55,38,70,124,73,102,1,34,98],y.t)
A.f6A=x([A.f5U,A.eAZ,A.eWm,A.eOp,A.eTk,A.eNS,A.eQL,A.eOt,A.ePC,A.ePK],y.S)
A.ePB=x([125,98,42,88,104,85,117,175,82],y.t)
A.eOx=x([95,84,53,89,128,100,113,101,45],y.t)
A.eRx=x([75,79,123,47,51,128,81,171,1],y.t)
A.eAW=x([57,17,5,71,102,57,53,41,49],y.t)
A.eVE=x([38,33,13,121,57,73,26,1,85],y.t)
A.f59=x([41,10,67,138,77,110,90,47,114],y.t)
A.eQD=x([115,21,2,10,102,255,166,23,6],y.t)
A.eNg=x([101,29,16,10,85,128,101,196,26],y.t)
A.eOR=x([57,18,10,102,102,213,34,20,43],y.t)
A.ePY=x([117,20,15,36,163,128,68,1,26],y.t)
A.eQt=x([A.ePB,A.eOx,A.eRx,A.eAW,A.eVE,A.f59,A.eQD,A.eNg,A.eOR,A.ePY],y.S)
A.eP8=x([102,61,71,37,34,53,31,243,192],y.t)
A.f4H=x([69,60,71,38,73,119,28,222,37],y.t)
A.ePc=x([68,45,128,34,1,47,11,245,171],y.t)
A.edF=x([62,17,19,70,146,85,55,62,70],y.t)
A.f7g=x([37,43,37,154,100,163,85,160,1],y.t)
A.f2E=x([63,9,92,136,28,64,32,201,85],y.t)
A.eYY=x([75,15,9,9,64,255,184,119,16],y.t)
A.eNu=x([86,6,28,5,64,255,25,248,1],y.t)
A.eUb=x([56,8,17,132,137,255,55,116,128],y.t)
A.ezS=x([58,15,20,82,135,57,26,121,40],y.t)
A.eRe=x([A.eP8,A.f4H,A.ePc,A.edF,A.f7g,A.f2E,A.eYY,A.eNu,A.eUb,A.ezS],y.S)
A.eRB=x([164,50,31,137,154,133,25,35,218],y.t)
A.eNt=x([51,103,44,131,131,123,31,6,158],y.t)
A.f2z=x([86,40,64,135,148,224,45,183,128],y.t)
A.eQx=x([22,26,17,131,240,154,14,1,209],y.t)
A.eGy=x([45,16,21,91,64,222,7,1,197],y.t)
A.f0O=x([56,21,39,155,60,138,23,102,213],y.t)
A.f6o=x([83,12,13,54,192,255,68,47,28],y.t)
A.eRS=x([85,26,85,85,128,128,32,146,171],y.t)
A.eQm=x([18,11,7,63,144,171,4,4,246],y.t)
A.eNI=x([35,27,10,146,174,171,12,26,128],y.t)
A.eQ9=x([A.eRB,A.eNt,A.f2z,A.eQx,A.eGy,A.f0O,A.f6o,A.eRS,A.eQm,A.eNI],y.S)
A.eXW=x([190,80,35,99,180,80,126,54,45],y.t)
A.f_i=x([85,126,47,87,176,51,41,20,32],y.t)
A.eVQ=x([101,75,128,139,118,146,116,128,85],y.t)
A.eYP=x([56,41,15,176,236,85,37,9,62],y.t)
A.eAJ=x([71,30,17,119,118,255,17,18,138],y.t)
A.eRd=x([101,38,60,138,55,70,43,26,142],y.t)
A.eQg=x([146,36,19,30,171,255,97,27,20],y.t)
A.eSO=x([138,45,61,62,219,1,81,188,64],y.t)
A.f1Y=x([32,41,20,117,151,142,20,21,163],y.t)
A.f_q=x([112,19,12,61,195,128,48,4,24],y.t)
A.eX5=x([A.eXW,A.f_i,A.eVQ,A.eYP,A.eAJ,A.eRd,A.eQg,A.eSO,A.f1Y,A.f_q],y.S)
A.eQM=x([A.e4Q,A.f1e,A.eNH,A.eND,A.eQO,A.f6A,A.eQt,A.eRe,A.eQ9,A.eX5],y.o)
A.yr=new B.ml(0,"none")
A.mM=new B.ml(1,"palette")
A.a7o=new B.ml(2,"rgb")
A.fuE=new B.ml(3,"gray")
A.fuF=new B.ml(4,"reserved4")
A.fuG=new B.ml(5,"reserved5")
A.fuH=new B.ml(6,"reserved6")
A.fuI=new B.ml(7,"reserved7")
A.fuJ=new B.ml(8,"reserved8")
A.mN=new B.ml(9,"paletteRle")
A.a7n=new B.ml(10,"rgbRle")
A.fuD=new B.ml(11,"grayRle")
A.eQU=x([A.yr,A.mM,A.a7o,A.fuE,A.fuF,A.fuG,A.fuH,A.fuI,A.fuJ,A.mN,A.a7n,A.fuD],C.I("x<ml>"))
A.eRw=x([B.cK_(),B.cK6(),B.cK8(),B.cK1(),B.cK4(),B.cKa(),B.cK3(),B.cK9(),B.cK0(),B.cK2()],y.y)
A.Dx=x([8,0,8,0],y.t)
A.eAY=x([5,3,5,3],y.t)
A.et_=x([3,5,3,5],y.t)
A.P2=x([0,8,0,8],y.t)
A.TV=x([4,4,4,4],y.t)
A.eyS=x([4,4,0,0],y.t)
A.UF=x([A.Dx,A.eAY,A.et_,A.P2,A.Dx,A.TV,A.eyS,A.P2],y.S)
A.UG=x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41],y.t)
A.wY=x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845],y.t)
A.UI=x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127],y.t)
A.UJ=x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],y.t)
A.wZ=x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567],y.t)
A.UK=x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232],y.t)
A.UT=x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],y.t)
A.rl=x([0,1,3,7,15,31,63,127,255],y.t)
A.eQ=x([255,255,255,255,255,255,255,255,255,255,255],y.t)
A.p5=x([A.eQ,A.eQ,A.eQ],y.S)
A.eQi=x([176,246,255,255,255,255,255,255,255,255,255],y.t)
A.f5w=x([223,241,252,255,255,255,255,255,255,255,255],y.t)
A.eN2=x([249,253,253,255,255,255,255,255,255,255,255],y.t)
A.eQJ=x([A.eQi,A.f5w,A.eN2],y.S)
A.ePw=x([255,244,252,255,255,255,255,255,255,255,255],y.t)
A.eP4=x([234,254,254,255,255,255,255,255,255,255,255],y.t)
A.V1=x([253,255,255,255,255,255,255,255,255,255,255],y.t)
A.eNq=x([A.ePw,A.eP4,A.V1],y.S)
A.f27=x([255,246,254,255,255,255,255,255,255,255,255],y.t)
A.eTW=x([239,253,254,255,255,255,255,255,255,255,255],y.t)
A.UV=x([254,255,254,255,255,255,255,255,255,255,255],y.t)
A.eYV=x([A.f27,A.eTW,A.UV],y.S)
A.Us=x([255,248,254,255,255,255,255,255,255,255,255],y.t)
A.eO6=x([251,255,254,255,255,255,255,255,255,255,255],y.t)
A.eRE=x([A.Us,A.eO6,A.eQ],y.S)
A.Di=x([255,253,254,255,255,255,255,255,255,255,255],y.t)
A.eRz=x([251,254,254,255,255,255,255,255,255,255,255],y.t)
A.eOk=x([A.Di,A.eRz,A.UV],y.S)
A.eyL=x([255,254,253,255,254,255,255,255,255,255,255],y.t)
A.ePp=x([250,255,254,255,254,255,255,255,255,255,255],y.t)
A.x2=x([254,255,255,255,255,255,255,255,255,255,255],y.t)
A.eQ1=x([A.eyL,A.ePp,A.x2],y.S)
A.eOQ=x([A.p5,A.eQJ,A.eNq,A.eYV,A.eRE,A.eOk,A.eQ1,A.p5],y.o)
A.egO=x([217,255,255,255,255,255,255,255,255,255,255],y.t)
A.eQd=x([225,252,241,253,255,255,254,255,255,255,255],y.t)
A.eWd=x([234,250,241,250,253,255,253,254,255,255,255],y.t)
A.f_s=x([A.egO,A.eQd,A.eWd],y.S)
A.DT=x([255,254,255,255,255,255,255,255,255,255,255],y.t)
A.eN6=x([223,254,254,255,255,255,255,255,255,255,255],y.t)
A.eGz=x([238,253,254,254,255,255,255,255,255,255,255],y.t)
A.eTd=x([A.DT,A.eN6,A.eGz],y.S)
A.ePa=x([249,254,255,255,255,255,255,255,255,255,255],y.t)
A.f2_=x([A.Us,A.ePa,A.eQ],y.S)
A.f_H=x([255,253,255,255,255,255,255,255,255,255,255],y.t)
A.eRy=x([247,254,255,255,255,255,255,255,255,255,255],y.t)
A.eRj=x([A.f_H,A.eRy,A.eQ],y.S)
A.eD9=x([252,255,255,255,255,255,255,255,255,255,255],y.t)
A.esV=x([A.Di,A.eD9,A.eQ],y.S)
A.V2=x([255,254,254,255,255,255,255,255,255,255,255],y.t)
A.eGw=x([A.V2,A.V1,A.eQ],y.S)
A.eT9=x([255,254,253,255,255,255,255,255,255,255,255],y.t)
A.Uw=x([250,255,255,255,255,255,255,255,255,255,255],y.t)
A.eD7=x([A.eT9,A.Uw,A.x2],y.S)
A.eyO=x([A.f_s,A.eTd,A.f2_,A.eRj,A.esV,A.eGw,A.eD7,A.p5],y.o)
A.eX7=x([186,251,250,255,255,255,255,255,255,255,255],y.t)
A.eNX=x([234,251,244,254,255,255,255,255,255,255,255],y.t)
A.eYX=x([251,251,243,253,254,255,254,255,255,255,255],y.t)
A.eOh=x([A.eX7,A.eNX,A.eYX],y.S)
A.eO9=x([236,253,254,255,255,255,255,255,255,255,255],y.t)
A.eT8=x([251,253,253,254,254,255,255,255,255,255,255],y.t)
A.ePO=x([A.Di,A.eO9,A.eT8],y.S)
A.eXT=x([254,254,254,255,255,255,255,255,255,255,255],y.t)
A.eO3=x([A.V2,A.eXT,A.eQ],y.S)
A.eZf=x([254,254,255,255,255,255,255,255,255,255,255],y.t)
A.eO7=x([A.DT,A.eZf,A.x2],y.S)
A.V3=x([A.eQ,A.x2,A.eQ],y.S)
A.eyM=x([A.eOh,A.ePO,A.eO3,A.eO7,A.V3,A.p5,A.p5,A.p5],y.o)
A.ePn=x([248,255,255,255,255,255,255,255,255,255,255],y.t)
A.eOw=x([250,254,252,254,255,255,255,255,255,255,255],y.t)
A.eNT=x([248,254,249,253,255,255,255,255,255,255,255],y.t)
A.ePS=x([A.ePn,A.eOw,A.eNT],y.S)
A.evA=x([255,253,253,255,255,255,255,255,255,255,255],y.t)
A.f0D=x([246,253,253,255,255,255,255,255,255,255,255],y.t)
A.eOj=x([252,254,251,254,254,255,255,255,255,255,255],y.t)
A.f0C=x([A.evA,A.f0D,A.eOj],y.S)
A.f7b=x([255,254,252,255,255,255,255,255,255,255,255],y.t)
A.eNQ=x([248,254,253,255,255,255,255,255,255,255,255],y.t)
A.eD6=x([253,255,254,254,255,255,255,255,255,255,255],y.t)
A.eRN=x([A.f7b,A.eNQ,A.eD6],y.S)
A.f6m=x([255,251,254,255,255,255,255,255,255,255,255],y.t)
A.eR6=x([245,251,254,255,255,255,255,255,255,255,255],y.t)
A.eRc=x([253,253,254,255,255,255,255,255,255,255,255],y.t)
A.eLO=x([A.f6m,A.eR6,A.eRc],y.S)
A.eN0=x([255,251,253,255,255,255,255,255,255,255,255],y.t)
A.ePz=x([252,253,254,255,255,255,255,255,255,255,255],y.t)
A.eY9=x([A.eN0,A.ePz,A.DT],y.S)
A.eD1=x([255,252,255,255,255,255,255,255,255,255,255],y.t)
A.f5C=x([249,255,254,255,255,255,255,255,255,255,255],y.t)
A.eOF=x([255,255,254,255,255,255,255,255,255,255,255],y.t)
A.edE=x([A.eD1,A.f5C,A.eOF],y.S)
A.f7h=x([255,255,253,255,255,255,255,255,255,255,255],y.t)
A.eO5=x([A.f7h,A.Uw,A.eQ],y.S)
A.eD5=x([A.ePS,A.f0C,A.eRN,A.eLO,A.eY9,A.edE,A.eO5,A.V3],y.o)
A.eZp=x([A.eOQ,A.eyO,A.eyM,A.eD5],y.g)
A.aaF=new B.kw(1,"rle8")
A.aaK=new B.kw(2,"rle4")
A.aaL=new B.kw(4,"jpeg")
A.aaM=new B.kw(5,"png")
A.aaN=new B.kw(7,"reserved7")
A.aaO=new B.kw(8,"reserved8")
A.aaP=new B.kw(9,"reserved9")
A.aaG=new B.kw(10,"reserved10")
A.aaH=new B.kw(11,"cmyk")
A.aaI=new B.kw(12,"cmykRle8")
A.aaJ=new B.kw(13,"cmykRle4")
A.UW=x([A.Hw,A.aaF,A.aaK,A.zs,A.aaL,A.aaM,A.zt,A.aaN,A.aaO,A.aaP,A.aaG,A.aaH,A.aaI,A.aaJ],C.I("x<kw>"))
A.DQ=x([0,128,192,224,240,248,252,254,255],y.t)
A.DR=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295],y.t)
A.a8c=new B.Gu(0,"predictor")
A.fx1=new B.Gu(1,"crossColor")
A.fx2=new B.Gu(2,"subtractGreen")
A.a8d=new B.Gu(3,"colorIndexing")
A.f1M=x([A.a8c,A.fx1,A.fx2,A.a8d],C.I("x<Gu>"))
A.eS=x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255],y.t)
A.f4E=x([B.cKb(),B.cK5(),B.cKl(),B.cKj(),B.cKd(),B.cKc(),B.cKe()],y.y)
A.V6=x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],y.t)
A.f4N=x([null,B.cKC(),B.cKD(),B.cKB()],C.I("x<~(w,w,w,w,w,e9)?>"))
A.V7=x([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15],y.t)
A.x3=x([0,36,72,109,145,182,218,255],y.t)
A.la=x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255],y.t)
A.ffy=new B.qT(0,"bitmap")
A.a4y=new B.qT(1,"grayscale")
A.ffz=new B.qT(2,"indexed")
A.a4z=new B.qT(3,"rgb")
A.a4A=new B.qT(4,"cmyk")
A.ffA=new B.qT(5,"multiChannel")
A.ffB=new B.qT(6,"duoTone")
A.a4B=new B.qT(7,"lab")
A.f5B=x([A.ffy,A.a4y,A.ffz,A.a4z,A.a4A,A.ffA,A.ffB,A.a4B],C.I("x<qT>"))
A.x4=x([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63],y.t)
A.enn=x([2,6,2,6],y.t)
A.eD3=x([6,2,6,2],y.t)
A.enl=x([2,2,6,6],y.t)
A.egN=x([1,3,3,9],y.t)
A.eyQ=x([4,0,12,0],y.t)
A.esY=x([3,1,9,3],y.t)
A.eJZ=x([8,8,0,0],y.t)
A.eyR=x([4,12,0,0],y.t)
A.egj=x([16,0,0,0],y.t)
A.ed7=x([12,4,0,0],y.t)
A.eD4=x([6,6,2,2],y.t)
A.et0=x([3,9,1,3],y.t)
A.ed6=x([12,0,4,0],y.t)
A.eN1=x([9,3,3,1],y.t)
A.dI=x([A.TV,A.enn,A.Dx,A.eD3,A.enl,A.egN,A.eyQ,A.esY,A.eJZ,A.eyR,A.egj,A.ed7,A.eD4,A.et0,A.ed6,A.eN1],y.S)
A.p6=x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1],y.t)
A.rI=new B.zA(0,"invalid")
A.a3X=new B.zA(1,"pbm")
A.a3Y=new B.zA(2,"pgm2")
A.EN=new B.zA(3,"pgm5")
A.a3Z=new B.zA(4,"ppm3")
A.EO=new B.zA(5,"ppm6")
A.G9=new B.py(0,"bilevel")
A.fuN=new B.py(1,"gray4bit")
A.fuO=new B.py(2,"gray")
A.fuP=new B.py(3,"grayAlpha")
A.fuQ=new B.py(4,"palette")
A.a7s=new B.py(5,"rgb")
A.fuR=new B.py(6,"rgba")
A.fuS=new B.py(7,"yCbCrSub")
A.ta=new B.py(8,"generic")
A.fuT=new B.py(9,"invalid")
A.tf=new B.O_(0,"undefined")
A.Gz=new B.O_(1,"lossy")
A.yB=new B.O_(2,"lossless")
A.fBt=new B.O_(3,"animated")})();(function staticFields(){$.c5_=null
$.cfp=!1
$.cfq=C.c([B.c6h(),B.cKn(),B.cKs(),B.cKt(),B.cKu(),B.cKv(),B.cKw(),B.cKx(),B.cKy(),B.cKz(),B.cKo(),B.cKp(),B.cKq(),B.cKr(),B.c6h(),B.c6h()],C.I("x<w(op,w,w)>"))})();(function lazyInitializers(){var x=a.lazy
x($,"cOx","aB6",()=>C.tv(511))
x($,"cOy","c09",()=>C.tv(511))
x($,"cOA","c0a",()=>C.cco(2041))
x($,"cOB","c0b",()=>C.cco(225))
x($,"cOz","nu",()=>C.tv(766))})()};
(a=>{a["YSz8fveXIQ174qHDdwsjIFeFfHA="]=a.current})($__dart_deferred_initializers__);