((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,B={
cbB(d){var x,w,v=new B.aGD()
if(!B.c3P(d))C.ab(C.bM("Not a bitmap file."))
d.d+=2
x=d.Z()
w=$.fI()
w.$flags&2&&C.u(w)
w[0]=x
x=$.jy()
d.d+=4
w[0]=d.Z()
v.b=x[0]
return v},
c3P(d){if(d.c-d.d<2)return!1
return C.bT(d,null,0).ad()===19778},
csc(d,e){var x,w,v,u,t=e==null?B.cbB(d):e,s=d.d,r=d.Z(),q=d.Z(),p=$.fI()
p.$flags&2&&C.u(p)
p[0]=q
q=$.jy()
x=q[0]
p[0]=d.Z()
q=q[0]
w=d.ad()
v=d.ad()
u=A.V6[d.Z()]
d.Z()
p[0]=d.Z()
p[0]=d.Z()
p=d.Z()
d.Z()
s=new B.CX(t,x,q,r,w,v,u,p,s)
s.aeW(d,e)
return s},
kC:function kC(d,e){this.a=d
this.b=e},
aGD:function aGD(){this.b=$},
CX:function CX(d,e,f,g,h,i,j,k,l){var _=this
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
abh:function abh(d){this.a=$
this.b=null
this.c=d},
aGC:function aGC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aLE:function aLE(d){this.a=$
this.b=null
this.c=d},
aLe:function aLe(){},
ae3:function ae3(d,e,f){this.a=d
this.b=e
this.c=f},
afT:function afT(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
KE:function KE(d,e){this.a=d
this.b=e},
DP:function DP(d,e){this.a=d
this.b=e},
ae4:function ae4(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
cd6(d,e,f,g){var x,w
switch(d.a){case 1:return new B.aVT(f,e)
case 2:return new B.afV(f,g==null?1:g,e)
case 3:return new B.afV(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new B.aVR(f,x,e)
w.aMw(e,f,x)
return w
case 5:return new B.aVS(f,g==null?16:g,e)
case 6:return new B.afT(f,g==null?32:g,!1,e)
case 7:return new B.afT(f,g==null?32:g,!0,e)
default:throw C.n(C.bM("Invalid compression type: "+d.j(0)))}},
qB:function qB(d,e){this.a=d
this.b=e},
aPU:function aPU(){},
aVQ:function aVQ(){},
cv6(d,e,f,g){var x,w,v,u,t,s,r,q
if(e===0){if(g!==0)throw C.n(C.bM("Incomplete huffman data"))
return}x=d.d
w=d.Z()
v=d.Z()
d.d+=4
u=d.Z()
t=!0
if(w<65537)t=v>=65537
if(t)throw C.n(C.bM("Invalid huffman table size"))
d.d+=4
s=C.bo(65537,0,!1,y.p)
r=J.jK(16384,y.W)
for(q=0;q<16384;++q)r[q]=new B.ae5()
B.cv7(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw C.n(C.bM("Error in header for Huffman-encoded data (invalid number of bits)."))
B.cv3(s,w,v,r)
B.cv5(s,r,d,u,v,g,f)},
cv5(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=C.c([0,0],y.t),n=f.d+D.f.ao(g+7,8)
for(x=0;f.d<n;){B.c4C(o,f)
while(w=o[1],w>=14){v=e[D.f.je(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=B.c4D(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw C.n(C.bM(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
for(;;){w=o[1]
if(!(w<s&&f.d<n))break
B.c4C(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.f.je(o[0],w)&D.f.cO(1,s)-1)>>>0){o[1]=w
r=B.c4D(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw C.n(C.bM(p))}}}q=8-g&7
o[0]=D.f.O(o[0],q)
o[1]=o[1]-q
while(w=o[1],w>0){v=e[D.f.cG(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=B.c4D(v.b,h,o,f,j,x,i)}else throw C.n(C.bM(p))}if(x!==i)throw C.n(C.bM("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
c4D(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)B.c4C(f,g)
x=f[1]-8
f[1]=x
w=D.f.je(f[0],x)&255
if(i+w>j)throw C.n(C.bM(s))
v=h[i-1]
for(x=h.$flags|0;u=w-1,w>0;w=u,i=t){t=i+1
x&2&&C.u(h)
h[i]=v}}else{if(i<j){h.toString
t=i+1
h.$flags&2&&C.u(h)
h[i]=d}else throw C.n(C.bM(s))
i=t}return i},
cv3(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t,w=y.p;e<=f;++e){v=d[e]
u=v>>>6
t=v&63
if(D.f.fN(u,t)!==0)throw C.n(C.bM(n))
if(t>14){s=g[D.f.eh(u,t-14)]
if(s.a!==0)throw C.n(C.bM(n))
v=++s.b
r=s.c
if(r!=null){v=C.bo(v,0,!1,w)
s.c=v
for(q=s.b-1,p=0;p<q;++p)v[p]=r[p]}else s.c=C.c([0],x)
s.c[s.b-1]=e}else if(t!==0){v=14-t
o=D.f.cG(u,v)
for(p=D.f.cG(1,v);p>0;--p,++o){s=g[o]
if(s.a!==0||s.c!=null)throw C.n(C.bM(n))
s.a=t
s.b=e}}}},
cv7(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=C.c([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw C.n(C.bM(s))
w=B.cd7(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw C.n(C.bM(s))
v=B.cd7(8,p,d)+6
if(f+v>x)throw C.n(C.bM(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw C.n(C.bM(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}B.cv4(h)},
cv4(d){var x,w,v,u,t,s=C.bo(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
c4C(d,e){d[0]=(d[0]<<8|e.bz())>>>0
d[1]=d[1]+8>>>0},
cd7(d,e,f){var x
while(x=e[1],x<d){e[0]=(e[0]<<8|J.A(f.a,f.d++))>>>0
e[1]=e[1]+8>>>0}x-=d
e[1]=x
return(D.f.je(e[0],x)&D.f.cO(1,d)-1)>>>0},
ae5:function ae5(){this.b=this.a=0
this.c=null},
cv8(d){var x=new B.ae6(C.c([],y.m))
x.aeZ(d)
return x},
cv9(d){var x=C.ck(d,!1,null,0)
if(x.Z()!==20000630)return!1
if(x.bz()!==2)return!1
if((x.po()&4294967289)>>>0!==0)return!1
return!0},
ae6:function ae6(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
ceg(d,e,f){var x=new B.afU(d,C.c([],y.Q),C.C(y.N,y.n),A.N5,e)
x.aMc(d,e,f)
return x},
UT:function UT(){},
aPW:function aPW(d,e){this.a=d
this.b=e},
afU:function afU(d,e,f,g,h){var _=this
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
aVR:function aVR(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
auf:function auf(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
aVS:function aVS(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
aVT:function aVT(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
afV:function afV(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
aPV:function aPV(){this.a=null},
cdB(d){var x=new Uint8Array(d*3)
return new B.Vn(B.cvX(d),d,null,new C.r1(x,d,3))},
cvW(d){return new B.Vn(d.a,d.b,d.c,C.cfy(d.d))},
cvX(d){var x
for(x=1;x<=8;++x)if(D.f.cO(1,x)>=d)return x
return 0},
Vn:function Vn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vo:function Vo(){},
afW:function afW(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
aeQ:function aeQ(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
aSZ:function aSZ(){var _=this
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
cdQ(d){var x,w,v,u,t,s,r
if(d.ad()!==0)return null
x=d.ad()
if(x>=3)return null
w=A.e4V[x]
if(w===A.Ny)return null
v=d.ad()
u=J.hf(v,y.Y)
for(t=0;t<v;++t){s=J.A(d.a,d.d++)
r=J.A(d.a,d.d++)
J.A(d.a,d.d++);++d.d
d.ad()
d.ad()
u[t]=new B.afA(s,r,d.Z(),d.Z())}return new B.aUW(w,v,u)},
KY:function KY(d,e){this.a=d
this.b=e},
aUW:function aUW(d,e,f){this.c=d
this.d=e
this.e=f},
afA:function afA(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
aUU:function aUU(d,e,f,g,h,i,j,k,l){var _=this
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
aUV:function aUV(){this.b=this.a=null},
ach:function ach(d,e,f){this.e=d
this.f=e
this.r=f},
Eg:function Eg(){},
Eh:function Eh(d){this.a=d},
VB:function VB(d){this.a=d},
aW8:function aW8(){this.d=null},
zx:function zx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
aWb(){var x=C.bo(4,null,!1,y.r),w=C.c([],y.a),v=y.bT,u=J.tH(0,v)
v=J.tH(0,v)
return new B.aWa(new C.KC(C.C(y.N,y.P)),x,w,u,v,C.c([],y.E))},
aWa:function aWa(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
aWc:function aWc(d,e){this.a=d
this.b=e},
PM:function PM(d){this.a=d
this.b=0},
age:function age(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
aWe:function aWe(){this.b=this.a=0},
aWf:function aWf(){this.r=this.f=$},
agf:function agf(d,e,f,g,h,i,j,k){var _=this
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
W9:function W9(){},
A5:function A5(d,e){this.a=d
this.b=e},
Fw:function Fw(d){this.b=this.a=0
this.e=d},
b32:function b32(d){this.b=this.a=null
this.c=d},
b33:function b33(){},
aiW:function aiW(){this.b=this.a=null},
aiX:function aiX(){this.b=this.a=null},
u7:function u7(){},
aiZ:function aiZ(){this.b=this.a=null},
aj_:function aj_(){this.b=this.a=null},
aj2:function aj2(){this.b=this.a=null},
aj3:function aj3(){this.b=this.a=null},
Yc:function Yc(d){this.b=d},
aj1:function aj1(){this.b=$
this.c=null},
b4F:function b4F(){var _=this
_.w=_.r=_.f=_.e=$},
MA:function MA(d){this.a=d
this.c=null},
c5O(d){var x=new B.b4H(C.C(y.p,y.h))
x.aMI(d)
return x},
c5S(d,e,f,g){var x=d/255,w=e/255,v=f/255,u=g/255,t=w*(1-v),s=x*(1-u)
return D.l.F(D.l.aw((2*x<v?2*w*x+t+s:u*v-2*(v-x)*(u-w)+t+s)*255,0,255))},
b4I(d,e){if(e===0)return 0
return D.f.F(D.f.aw(D.l.F(255*(1-(1-d/255)/(e/255))),0,255))},
b4K(d,e){return D.f.F(D.f.aw(d+e-255,0,255))},
c5U(d,e){return D.f.F(D.f.aw(255-(255-e)*(255-d),0,255))},
b4J(d,e){if(e===255)return 255
return D.l.F(D.l.aw(d/255/(1-e/255)*255,0,255))},
c5V(d,e){var x=d/255,w=e/255,v=1-w
return D.l.aM(255*(v*w*x+w*(1-v*(1-x))))},
c5Q(d,e){var x=e/255,w=d/255
if(w<0.5)return D.l.aM(510*x*w)
else return D.l.aM(255*(1-2*(1-x)*(1-w)))},
c5W(d,e){if(e<128)return B.b4I(d,2*e)
else return B.b4J(d,2*(e-128))},
c5R(d,e){var x
if(e<128)return B.b4K(d,2*e)
else{x=2*(e-128)
return x+d>255?255:d+x}},
c5T(d,e){return e<128?Math.min(d,2*e):Math.max(d,2*(e-128))},
c5P(d,e){return D.l.aM(e+d-2*e*d/255)},
nj(d,e,f){var x
if(d==null)x=0
else x=f===1?d[e]:(d[e]<<8|d[e+1])>>>8
return x},
cgf(b5,b6,b7,b8,b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=C.C(y.p,y.e)
for(x=b9.length,w=0;v=b9.length,w<v;b9.length===x||(0,C.F)(b9),++w){u=b9[w]
b4.l(0,u.a,u)}if(b6===8)t=1
else t=b6===16?2:-1
s=C.fZ(b3,b3,D.az,0,D.bR,b8,b3,0,v,b3,D.az,b7,!1)
if(t===-1)throw C.n(C.bM("PSD: unsupported bit depth: "+C.q(b6)))
r=b4.h(0,0)
q=b4.h(0,1)
p=b4.h(0,2)
o=b4.h(0,-1)
n=C.c([0,0,0],y.t)
m=-t
for(x=s.a,x=x.gV(x),l=v>=5,k=v===4,j=v>=2,v=v>=4;x.q();){i=x.gI()
m+=t
switch(b5){case A.a4M:i.sa8(B.nj(r.c,m,t))
i.sag(B.nj(q.c,m,t))
i.sah(B.nj(p.c,m,t))
i.sap(v?B.nj(o.c,m,t):255)
if(i.gap()!==0){i.sa8((i.ga8()+i.gap()-255)*255/i.gap())
i.sag((i.gag()+i.gap()-255)*255/i.gap())
i.sah((i.gah()+i.gap()-255)*255/i.gap())}break
case A.a4O:h=B.nj(r.c,m,t)
g=B.nj(q.c,m,t)
f=B.nj(p.c,m,t)
e=v?B.nj(o.c,m,t):255
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
a8=[D.l.F(D.l.aw(a5*255,0,255)),D.l.F(D.l.aw(a6*255,0,255)),D.l.F(D.l.aw(a7*255,0,255))]
i.sa8(a8[0])
i.sag(a8[1])
i.sah(a8[2])
i.sap(e)
break
case A.a4L:a9=B.nj(r.c,m,t)
e=j?B.nj(o.c,m,t):255
i.sa8(a9)
i.sag(a9)
i.sah(a9)
i.sap(e)
break
case A.a4N:b0=B.nj(r.c,m,t)
b1=B.nj(q.c,m,t)
d=B.nj(p.c,m,t)
b2=B.nj(b4.h(0,k?-1:3).c,m,t)
e=l?B.nj(o.c,m,t):255
B.clx(255-b0,255-b1,255-d,255-b2,n)
i.sa8(n[0])
i.sag(n[1])
i.sah(n[2])
i.sap(e)
break
default:throw C.n(C.bM("Unhandled color mode: "+C.q(b5)))}}return s},
re:function re(d,e){this.a=d
this.b=e},
b4H:function b4H(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=_.w=$
_.y=null
_.z=d
_.as=$
_.ay=_.ax=_.at=null},
aiY:function aiY(d,e){this.a=d
this.b=e},
aj0:function aj0(d,e,f){var _=this
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
cz4(d,e){var x,w
switch(d){case"lsct":x=new B.aj1()
w=e.c-e.d
x.b=e.Z()
if(w>=12){if(e.ho(4)!=="8BIM")C.ab(C.bM("Invalid key in layer additional data"))
x.c=e.ho(4)}if(w>=16)e.Z()
return x
default:return new B.Yc(e)}},
MB:function MB(){},
b4G:function b4G(){this.a=null},
aj7:function aj7(){},
wy:function wy(d,e,f){this.a=d
this.b=e
this.c=f},
kX:function kX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yg:function Yg(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
ME:function ME(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
aj6:function aj6(){this.y=this.b=this.a=0},
wz(d,e){return(A.x9[d>>>8]<<17|A.x9[e>>>8]<<16|A.x9[d&255]<<1|A.x9[e&255])>>>0},
py:function py(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
b4R:function b4R(){this.b=this.a=null},
amx:function amx(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
mA:function mA(d,e){this.a=d
this.b=e},
biK:function biK(){this.a=null
this.b=$},
biU:function biU(d){this.a=d
this.c=this.b=0},
amy:function amy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
c6E(d,e,f){var x=new B.biW(e,f,d),w=y.I
x.e=C.bo(e,null,!1,w)
x.f=C.bo(e,null,!1,w)
return x},
biW:function biW(d,e,f){var _=this
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
amz:function amz(d,e,f,g){var _=this
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
H_:function H_(d,e){this.a=d
this.b=e},
jn:function jn(d,e){this.a=d
this.b=e},
pO:function pO(d,e){this.a=d
this.b=e},
biX:function biX(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
ceN(){return new B.aXs(new Uint8Array(4096))},
aXs:function aXs(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
biV:function biV(){this.b=this.a=null
this.c=$},
c6P(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=C.bo(8,null,!1,y.ak),s=C.bo(4,null,!1,y.Z)
return new B.bkQ(d,e,new B.bkW(),new B.bl_(),new B.bkS(x,w),new B.bl1(v,u),t,s,new Uint8Array(4))},
cid(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
bkQ:function bkQ(d,e,f,g,h,i,j,k,l){var _=this
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
_.b7=$
_.b8=null
_.a4=_.D=$
_.a5=null
_.ab=$},
bl2:function bl2(){},
cia(d){var x=new B.a0A(d)
x.b=254
x.c=0
x.d=-8
return x},
a0A:function a0A(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
dV(d,e,f){return D.f.iQ(D.f.O(d+2*e+f+2,2),32)},
cCD(d){var x,w=C.c([B.dV(J.A(d.a,d.d+-33),J.A(d.a,d.d+-32),J.A(d.a,d.d+-31)),B.dV(J.A(d.a,d.d+-32),J.A(d.a,d.d+-31),J.A(d.a,d.d+-30)),B.dV(J.A(d.a,d.d+-31),J.A(d.a,d.d+-30),J.A(d.a,d.d+-29)),B.dV(J.A(d.a,d.d+-30),J.A(d.a,d.d+-29),J.A(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.xl(x*32,4,w)},
cCv(d){var x=J.A(d.a,d.d+-33),w=J.A(d.a,d.d+-1),v=J.A(d.a,d.d+31),u=J.A(d.a,d.d+63),t=J.A(d.a,d.d+95),s=C.bT(d,null,0),r=s.NH(),q=B.dV(x,w,v)
r.$flags&2&&C.u(r)
r[0]=16843009*q
s.d+=32
q=s.NH()
r=B.dV(w,v,u)
q.$flags&2&&C.u(q)
q[0]=16843009*r
s.d+=32
r=s.NH()
q=B.dV(v,u,t)
r.$flags&2&&C.u(r)
r[0]=16843009*q
s.d+=32
q=s.NH()
r=B.dV(u,t,t)
q.$flags&2&&C.u(q)
q[0]=16843009*r},
cCt(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.A(d.a,d.d+(w-32))+J.A(d.a,d.d+(-1+w*32))
x=D.f.O(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.t1(v,u,u+4,x)}},
c6Q(d,e){var x,w,v,u,t,s=255-J.A(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.A(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.nJ()[v+J.A(d.a,d.d+(-32+u))]
J.bg(d.a,d.d+(x+u),t)}x+=32}},
cCB(d){B.c6Q(d,4)},
cCC(d){B.c6Q(d,8)},
cCA(d){B.c6Q(d,16)},
cCz(d){var x,w=J.A(d.a,d.d+-1),v=J.A(d.a,d.d+31),u=J.A(d.a,d.d+63),t=J.A(d.a,d.d+95),s=J.A(d.a,d.d+-33),r=J.A(d.a,d.d+-32),q=J.A(d.a,d.d+-31),p=J.A(d.a,d.d+-30),o=J.A(d.a,d.d+-29)
d.l(0,96,B.dV(v,u,t))
x=B.dV(w,v,u)
d.l(0,97,x)
d.l(0,64,x)
x=B.dV(s,w,v)
d.l(0,98,x)
d.l(0,65,x)
d.l(0,32,x)
x=B.dV(r,s,w)
d.l(0,99,x)
d.l(0,66,x)
d.l(0,33,x)
d.l(0,0,x)
x=B.dV(q,r,s)
d.l(0,67,x)
d.l(0,34,x)
d.l(0,1,x)
x=B.dV(p,q,r)
d.l(0,35,x)
d.l(0,2,x)
d.l(0,3,B.dV(o,p,q))},
cCy(d){var x,w=J.A(d.a,d.d+-32),v=J.A(d.a,d.d+-31),u=J.A(d.a,d.d+-30),t=J.A(d.a,d.d+-29),s=J.A(d.a,d.d+-28),r=J.A(d.a,d.d+-27),q=J.A(d.a,d.d+-26),p=J.A(d.a,d.d+-25)
d.l(0,0,B.dV(w,v,u))
x=B.dV(v,u,t)
d.l(0,32,x)
d.l(0,1,x)
x=B.dV(u,t,s)
d.l(0,64,x)
d.l(0,33,x)
d.l(0,2,x)
x=B.dV(t,s,r)
d.l(0,96,x)
d.l(0,65,x)
d.l(0,34,x)
d.l(0,3,x)
x=B.dV(s,r,q)
d.l(0,97,x)
d.l(0,66,x)
d.l(0,35,x)
x=B.dV(r,q,p)
d.l(0,98,x)
d.l(0,67,x)
d.l(0,99,B.dV(q,p,p))},
cCF(d){var x=J.A(d.a,d.d+-1),w=J.A(d.a,d.d+31),v=J.A(d.a,d.d+63),u=J.A(d.a,d.d+-33),t=J.A(d.a,d.d+-32),s=J.A(d.a,d.d+-31),r=J.A(d.a,d.d+-30),q=J.A(d.a,d.d+-29),p=D.f.iQ(D.f.O(u+t+1,1),32)
d.l(0,65,p)
d.l(0,0,p)
p=D.f.iQ(D.f.O(t+s+1,1),32)
d.l(0,66,p)
d.l(0,1,p)
p=D.f.iQ(D.f.O(s+r+1,1),32)
d.l(0,67,p)
d.l(0,2,p)
d.l(0,3,D.f.iQ(D.f.O(r+q+1,1),32))
d.l(0,96,B.dV(v,w,x))
d.l(0,64,B.dV(w,x,u))
p=B.dV(x,u,t)
d.l(0,97,p)
d.l(0,32,p)
p=B.dV(u,t,s)
d.l(0,98,p)
d.l(0,33,p)
p=B.dV(t,s,r)
d.l(0,99,p)
d.l(0,34,p)
d.l(0,35,B.dV(s,r,q))},
cCE(d){var x,w=J.A(d.a,d.d+-32),v=J.A(d.a,d.d+-31),u=J.A(d.a,d.d+-30),t=J.A(d.a,d.d+-29),s=J.A(d.a,d.d+-28),r=J.A(d.a,d.d+-27),q=J.A(d.a,d.d+-26),p=J.A(d.a,d.d+-25)
d.l(0,0,D.f.iQ(D.f.O(w+v+1,1),32))
x=D.f.iQ(D.f.O(v+u+1,1),32)
d.l(0,64,x)
d.l(0,1,x)
x=D.f.iQ(D.f.O(u+t+1,1),32)
d.l(0,65,x)
d.l(0,2,x)
x=D.f.iQ(D.f.O(t+s+1,1),32)
d.l(0,66,x)
d.l(0,3,x)
d.l(0,32,B.dV(w,v,u))
x=B.dV(v,u,t)
d.l(0,96,x)
d.l(0,33,x)
x=B.dV(u,t,s)
d.l(0,97,x)
d.l(0,34,x)
x=B.dV(t,s,r)
d.l(0,98,x)
d.l(0,35,x)
d.l(0,67,B.dV(s,r,q))
d.l(0,99,B.dV(r,q,p))},
cCw(d){var x,w=J.A(d.a,d.d+-1),v=J.A(d.a,d.d+31),u=J.A(d.a,d.d+63),t=J.A(d.a,d.d+95)
d.l(0,0,D.f.iQ(D.f.O(w+v+1,1),32))
x=D.f.iQ(D.f.O(v+u+1,1),32)
d.l(0,32,x)
d.l(0,2,x)
x=D.f.iQ(D.f.O(u+t+1,1),32)
d.l(0,64,x)
d.l(0,34,x)
d.l(0,1,B.dV(w,v,u))
x=B.dV(v,u,t)
d.l(0,33,x)
d.l(0,3,x)
x=B.dV(u,t,t)
d.l(0,65,x)
d.l(0,35,x)
d.l(0,99,t)
d.l(0,98,t)
d.l(0,97,t)
d.l(0,96,t)
d.l(0,66,t)
d.l(0,67,t)},
cCu(d){var x=J.A(d.a,d.d+-1),w=J.A(d.a,d.d+31),v=J.A(d.a,d.d+63),u=J.A(d.a,d.d+95),t=J.A(d.a,d.d+-33),s=J.A(d.a,d.d+-32),r=J.A(d.a,d.d+-31),q=J.A(d.a,d.d+-30),p=D.f.iQ(D.f.O(x+t+1,1),32)
d.l(0,34,p)
d.l(0,0,p)
p=D.f.iQ(D.f.O(w+x+1,1),32)
d.l(0,66,p)
d.l(0,32,p)
p=D.f.iQ(D.f.O(v+w+1,1),32)
d.l(0,98,p)
d.l(0,64,p)
d.l(0,96,D.f.iQ(D.f.O(u+v+1,1),32))
d.l(0,3,B.dV(s,r,q))
d.l(0,2,B.dV(t,s,r))
p=B.dV(x,t,s)
d.l(0,35,p)
d.l(0,1,p)
p=B.dV(w,x,t)
d.l(0,67,p)
d.l(0,33,p)
p=B.dV(v,w,x)
d.l(0,99,p)
d.l(0,65,p)
d.l(0,97,B.dV(u,v,w))},
cCQ(d){var x
for(x=0;x<16;++x)d.pd(x*32,16,d,-32)},
cCO(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.A(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.t1(u,t,t+16,v)
x+=32}},
bkU(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.t1(w,v,v+16,d)}},
cCG(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.A(d.a,d.d+(-1+w*32))+J.A(d.a,d.d+(w-32))
B.bkU(D.f.O(x,5),d)},
cCI(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.A(d.a,d.d+(-1+w*32))
B.bkU(D.f.O(x,4),d)},
cCH(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.A(d.a,d.d+(w-32))
B.bkU(D.f.O(x,4),d)},
cCJ(d){B.bkU(128,d)},
cCR(d){var x
for(x=0;x<8;++x)d.pd(x*32,8,d,-32)},
cCP(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.A(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.t1(u,t,t+8,v)
x+=32}},
bkV(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.t1(w,v,v+8,d)}},
cCK(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.A(d.a,d.d+(w-32))+J.A(d.a,d.d+(-1+w*32))
B.bkV(D.f.O(x,4),d)},
cCL(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.A(d.a,d.d+(w-32))
B.bkV(D.f.O(x,3),d)},
cCM(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.A(d.a,d.d+(-1+w*32))
B.bkV(D.f.O(x,3),d)},
cCN(d){B.bkV(128,d)},
Bu(d,e,f,g,h){var x=e+f+g*32,w=J.A(d.a,d.d+x)+D.f.O(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.l(0,x,w)},
bkT(d,e,f,g,h){B.Bu(d,0,0,e,f+g)
B.Bu(d,0,1,e,f+h)
B.Bu(d,0,2,e,f-h)
B.Bu(d,0,3,e,f-g)},
cCx(){var x,w,v,u
if(!$.cib){for(x=-255;x<=255;++x){w=$.aCk()
v=255+x
u=x<0?-x:x
w.$flags&2&&C.u(w)
w[v]=u
u=$.c2L()
w=D.f.O(w[v],1)
u.$flags&2&&C.u(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.c2M()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&C.u(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.c2N()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&C.u(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.nJ()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&C.u(w)
w[255+x]=v}$.cib=!0}},
bkR:function bkR(){},
cCs(){var x,w=J.jK(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new B.a0z(w)},
cD5(){var x,w,v,u,t=new Uint8Array(3),s=J.jK(4,y.z)
for(x=y.V,w=0;w<4;++w){v=J.jK(8,x)
for(u=0;u<8;++u)v[u]=B.cCs()
s[w]=v}D.K.fC(t,0,3,255)
return new B.bl0(t,s)},
bkW:function bkW(){this.c=null
this.d=$},
bl_:function bl_(){this.b=this.a=null},
bl1:function bl1(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
a0z:function a0z(d){this.a=d},
bl0:function bl0(d,e){this.a=d
this.b=e},
bkS:function bkS(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
Ha:function Ha(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
anb:function anb(){this.b=this.a=0},
and:function and(d,e,f){this.a=d
this.b=e
this.c=f},
anc:function anc(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
ane:function ane(d,e,f){this.a=d
this.b=e
this.c=f},
c6R(d,e){var x,w=C.c([],y.A),v=C.c([],y.F),u=new Uint32Array(2),t=new B.an9(d,u)
u=t.d=J.ch(D.bM.ga0(u),0,null)
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
return new B.a0B(t,e,w,v)},
Bv(d,e){return D.f.O(d+D.f.cO(1,e)-1,e)},
a0B:function a0B(d,e,f,g){var _=this
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
ag0:function ag0(d,e,f,g){var _=this
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
an9:function an9(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
bkX:function bkX(d,e){this.a=d
this.b=e},
bkY(d,e,f){var x=d[e]
d.$flags&2&&C.u(d)
d[e]=(((x&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(x&16711935)+(f&16711935)&16711935)>>>0},
xg(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
Hc(d){if(d<0)return 0
if(d>255)return 255
return d},
bkZ(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
cCS(d,e,f){return 4278190080},
cCT(d,e,f){return e},
cCY(d,e,f){return d[f]},
cCZ(d,e,f){return d[f+1]},
cD_(d,e,f){return d[f-1]},
cD0(d,e,f){var x=d[f]
return B.xg(B.xg(e,d[f+1]),x)},
cD1(d,e,f){return B.xg(e,d[f-1])},
cD2(d,e,f){return B.xg(e,d[f])},
cD3(d,e,f){return B.xg(d[f-1],d[f])},
cD4(d,e,f){return B.xg(d[f],d[f+1])},
cCU(d,e,f){var x=d[f-1],w=d[f],v=d[f+1]
return B.xg(B.xg(e,x),B.xg(w,v))},
cCV(d,e,f){var x=d[f],w=d[f-1]
return B.bkZ(x>>>24,e>>>24,w>>>24)+B.bkZ(x>>>16&255,e>>>16&255,w>>>16&255)+B.bkZ(x>>>8&255,e>>>8&255,w>>>8&255)+B.bkZ(x&255,e&255,w&255)<=0?x:e},
cCW(d,e,f){var x=d[f],w=d[f-1]
return(B.Hc((e>>>24)+(x>>>24)-(w>>>24))<<24|B.Hc((e>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|B.Hc((e>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|B.Hc((e&255)+(x&255)-(w&255)))>>>0},
cCX(d,e,f){var x,w,v,u=d[f],t=d[f-1],s=B.xg(e,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(B.Hc(u+D.f.ao(u-(t>>>24),2))<<24|B.Hc(x+D.f.ao(x-(t>>>16&255),2))<<16|B.Hc(w+D.f.ao(w-(t>>>8&255),2))<<8|B.Hc(v+D.f.ao(v-(t&255),2)))>>>0},
Hb:function Hb(d,e){this.a=d
this.b=e},
ana:function ana(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
blv:function blv(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
a0G:function a0G(){},
ag1:function ag1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=$
_.r=1
_.x=_.w=$},
cdN(){var x=new Uint8Array(128),w=new Int16Array(128)
x=new B.afi(x,w,new Int16Array(128))
x.a6e(0)
return x},
cw1(){var x,w=J.jK(5,y.x)
for(x=0;x<5;++x)w[x]=B.cdN()
return new B.Vt(w)},
afi:function afi(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
Vt:function Vt(d){this.a=d},
OQ:function OQ(d,e){this.a=d
this.b=e},
ans:function ans(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
ag2:function ag2(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
blw:function blw(){this.b=this.a=null},
oi(d,e){return new B.ahP(d,new Uint8Array(e))},
ahP:function ahP(d,e){this.a=0
this.b=d
this.c=e},
c4A(d){var x=new C.KC(C.C(y.N,y.P))
x.i_(d)
return x},
cva(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
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
if(a2){B.UU(a4[j],a4[h],v)
f=v[0]
e=v[1]
B.UU(a4[i],a4[g],v)
d=v[0]
a0=v[1]
B.UU(f,d,v)
a1=v[0]
u&2&&C.u(a4)
a4[j]=a1
a4[i]=v[1]
B.UU(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}else{B.UV(a4[j],a4[h],v)
f=v[0]
e=v[1]
B.UV(a4[i],a4[g],v)
d=v[0]
a0=v[1]
B.UV(f,d,v)
a1=v[0]
u&2&&C.u(a4)
a4[j]=a1
a4[i]=v[1]
B.UV(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){B.UU(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.u(a4)
a4[h]=a1}else{B.UV(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.u(a4)
a4[h]=a1}u&2&&C.u(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){B.UU(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.u(a4)
a4[i]=n}else{B.UV(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.u(a4)
a4[i]=n}u&2&&C.u(a4)
a4[j]=f}}w=x>>>1}},
UU(d,e,f){var x,w,v,u,t=$.lT()
t.$flags&2&&C.u(t)
t[0]=d
x=$.mL()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.f.O(v,1)
f[0]=u
f[1]=u-v},
UV(d,e,f){var x=d-D.f.O(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
clQ(d){var x,w,v,u,t,s,r,q,p,o,n=null
if(B.aWb().aAX(d))return new B.W9()
x=new C.XU(C.c50())
if(x.F9(d))return x
w=new B.aSZ()
w.f=C.ck(d,!1,n,0)
w.a=new B.aeQ(C.c([],y.b))
if(w.ajy())return w
v=new B.blw()
if(v.F9(d))return v
u=new B.biV()
if(u.a4w(C.ck(d,!1,n,0))!=null)return u
if(B.c5O(d).c===943870035)return new B.b4G()
if(B.cv9(d))return new B.aPV()
if(B.c3P(C.ck(d,!1,n,0)))return new B.abh(!1)
t=new B.biK()
s=C.ck(d,!1,n,0)
r=t.a=new B.amx(A.yE)
r.i_(s)
if(r.axW())return t
q=new B.aUV()
r=C.ck(d,!1,n,0)
q.a=r
r=B.cdQ(r)
q.b=r
if(r!=null)return q
p=new B.b4R()
if(p.iT(d)!=null)return p
o=new B.b32(C.c([],y.s))
if(o.F9(d))return o
return n},
bZu(d){var x=B.clQ(d)
return x==null?null:x.mD(d,null)},
cLR(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if($.c7I==null){x=$.c7I=new Uint8Array(768)
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
a6[r]=a1-h}for(x=$.c7I,v=a5.$flags|0,w=0;w<64;++w){x.toString
u=D.f.O(a6[w]+8,4)
u=x[384+((u&2147483647)-((u&2147483648)>>>0))]
v&2&&C.u(a5)
a5[w]=u}},
cKA(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.r
if(d8.h(0,d7).a.aL(274)){x=d8.h(0,d7).geH()
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
r=C.fZ(d6,d6,D.az,0,D.bR,s,d6,0,3,d6,D.az,t,!1)
r.e=C.UQ(d8)
r.gum().h(0,d7).seH(d6)
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
e=n[D.f.fN(g,l)]
f=q-g
d=0
for(;;){a0=d9.d.e
a0.toString
if(!(d<a0))break
a1=e[D.f.fN(d,m)]
if(h){a0=r.a
if(a0!=null)a0.dG(p-d,g,a1,a1,a1)}else if(i){a0=r.a
if(a0!=null)a0.dG(p-d,f,a1,a1,a1)}else if(j){a0=r.a
if(a0!=null)a0.dG(d,f,a1,a1,a1)}else if(k){a0=r.a
if(a0!=null)a0.dG(g,d,a1,a1,a1)}else if(v){a0=r.a
if(a0!=null)a0.dG(f,d,a1,a1,a1)}else if(x){a0=r.a
if(a0!=null)a0.dG(f,p-d,a1,a1,a1)}else{a0=r.a
if(d8){if(a0!=null)a0.dG(g,p-d,a1,a1,a1)}else if(a0!=null)a0.dG(d,g,a1,a1,a1)}++d}++g}break
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
b1=D.f.fN(g,l)
b2=D.f.fN(g,a8)
b3=D.f.fN(g,b0)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
f=q-g
d=0
for(;;){a0=d9.d.e
a0.toString
if(!(d<a0))break
b6=D.f.fN(d,m)
b7=D.f.fN(d,a7)
b8=D.f.fN(d,a9)
a1=e[b6]<<8>>>0
b9=b4[b7]-128
c0=b5[b8]-128
a0=D.f.O(a1+359*c0+128,8)
c1=D.f.aw((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.f.O(a1-88*b9-183*c0+128,8)
c2=D.f.aw((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.f.O(a1+454*b9+128,8)
c3=D.f.aw((a0&2147483647)-((a0&2147483648)>>>0),0,255)
if(h){a0=r.a
if(a0!=null)a0.dG(p-d,g,c1,c2,c3)}else if(i){a0=r.a
if(a0!=null)a0.dG(p-d,f,c1,c2,c3)}else if(j){a0=r.a
if(a0!=null)a0.dG(d,f,c1,c2,c3)}else if(k){a0=r.a
if(a0!=null)a0.dG(g,d,c1,c2,c3)}else if(v){a0=r.a
if(a0!=null)a0.dG(f,d,c1,c2,c3)}else if(x){a0=r.a
if(a0!=null)a0.dG(f,p-d,c1,c2,c3)}else{a0=r.a
if(d8){if(a0!=null)a0.dG(g,p-d,c1,c2,c3)}else if(a0!=null)a0.dG(d,g,c1,c2,c3)}++d}++g}break
case 4:x=d9.c
if(x==null)throw C.n(C.bM("Unsupported color mode (4 components)"))
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
b1=D.f.fN(g,l)
b2=D.f.fN(g,a8)
b3=D.f.fN(g,b0)
c8=D.f.fN(g,c7)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
c9=c5[c8]
a0=q-g
d=0
for(;;){d0=d9.d.e
d0.toString
if(!(d<d0))break
b6=D.f.fN(d,m)
b7=D.f.fN(d,a7)
b8=D.f.fN(d,a9)
d1=D.f.fN(d,c6)
if(x){d2=e[b6]
d3=b4[b7]
a1=b5[b8]
d4=c9[d1]}else{a1=e[b6]
b9=b4[b7]
c0=b5[b8]
d4=c9[d1]
d0=c0-128
d2=255-D.f.aw(D.l.F(a1+1.402*d0),0,255)
d5=b9-128
d3=255-D.l.F(D.l.aw(a1-0.3441363*d5-0.71413636*d0,0,255))
a1=255-D.f.aw(D.l.F(a1+1.772*d5),0,255)}d0=D.f.O(d2*d4,8)
c1=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.f.O(d3*d4,8)
c2=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.f.O(a1*d4,8)
c3=(d0&2147483647)-((d0&2147483648)>>>0)
if(f){d0=r.a
if(d0!=null)d0.dG(p-d,g,c1,c2,c3)}else if(h){d0=r.a
if(d0!=null)d0.dG(p-d,a0,c1,c2,c3)}else if(i){d0=r.a
if(d0!=null)d0.dG(d,a0,c1,c2,c3)}else if(j){d0=r.a
if(d0!=null)d0.dG(g,d,c1,c2,c3)}else if(k){d0=r.a
if(d0!=null)d0.dG(a0,d,c1,c2,c3)}else if(v){d0=r.a
if(d0!=null)d0.dG(a0,p-d,c1,c2,c3)}else{d0=r.a
if(d8){if(d0!=null)d0.dG(g,p-d,c1,c2,c3)}else if(d0!=null)d0.dG(d,g,c1,c2,c3)}++d}++g}break
default:throw C.n(C.bM("Unsupported color mode"))}return r},
cDf(d,e,f,g,h,i){B.cDc(i,d,e,f,g,h,!0,i)},
cDg(d,e,f,g,h,i){B.cDd(i,d,e,f,g,h,!0,i)},
cDe(d,e,f,g,h,i){B.cDb(i,d,e,f,g,h,!0,i)},
OP(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.A(d.a,d.d+x)
v=J.A(e.a,e.d+x)
J.bg(f.a,f.d+x,w+v)}},
cDc(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=C.ck(d,!1,v,u),r=C.ck(d,!1,v,u),q=C.bT(r,v,0)
if(h===0){r.l(0,0,J.A(s.a,s.d))
B.OP(C.bT(s,v,1),q,C.bT(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){B.OP(s,C.bT(q,v,x),r,1,!0)
B.OP(C.bT(s,v,1),q,C.bT(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
cDd(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=C.ck(d,!1,x,w),t=C.ck(k,!1,x,w),s=C.bT(t,x,0)
if(h===0){t.l(0,0,J.A(u.a,u.d))
B.OP(C.bT(u,x,1),s,C.bT(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
while(h<v){B.OP(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
cDb(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=C.ck(d,!1,s,r),o=C.ck(k,!1,s,r),n=C.bT(o,s,0)
if(h===0){o.l(0,0,J.A(p.a,p.d))
B.OP(C.bT(p,s,1),n,C.bT(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){B.OP(p,C.bT(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.A(n.a,n.d+(w-1))+J.A(n.a,n.d+v)-J.A(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.A(p.a,p.d+w)
J.bg(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
bZh(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
clx(d,e,f,g,h){var x=1-g/255
h[0]=D.l.aM(255*(1-d/255)*x)
h[1]=D.l.aM(255*(1-e/255)*x)
h[2]=D.l.aM(255*(1-f/255)*x)}},A
J=c[1]
C=c[0]
D=c[2]
B=a.updateHolder(c[87],B)
A=c[212]
B.kC.prototype={
H(){return"BmpCompression."+this.b}}
B.aGD.prototype={}
B.CX.prototype={
aeW(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===A.zF||x===A.zG}else x=!0
if(x){x=q.as=d.Z()
w=B.bZh(x)
q.CW=w
v=D.f.eh(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.Z()
u=B.bZh(w)
q.cy=u
t=D.f.eh(w,u)
q.db=x?255/t:0
w=q.ax=d.Z()
u=B.bZh(w)
q.dx=u
s=D.f.eh(w,u)
q.dy=x?255/s:0
if(!o||q.r===A.zG){o=q.ay=d.Z()
x=B.bZh(o)
q.fr=x
r=D.f.eh(o,x)
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
if(q.f<=8)q.bx8(d)},
gM3(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&C.b()
x=x===0}else x=!1
else x=!0
return x},
gaR(){return Math.abs(this.c)},
bx8(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.f.cO(1,s.f)
s.ch=new C.r1(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.A(d.a,d.d++)
v=J.A(d.a,d.d++)
u=J.A(d.a,d.d++)
t=J.A(d.a,d.d++)
s.ch.Pi(x,u,v,w,t)}},
bn0(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.bz()
for(v=7;v>=0;--v)e.$4(D.f.je(w,v)&1,0,0,0)
return}else if(x===2){w=d.bz()
for(v=6;v>=0;v-=2)e.$4(D.f.je(w,v)&2,0,0,0)}else if(x===4){w=d.bz()
e.$4(D.f.O(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.bz(),0,0,0)
return}}x=o.r
if(x===A.zF&&o.f===32){u=d.Z()
x=o.as
x===$&&C.b()
t=o.CW
t===$&&C.b()
t=D.f.eh((u&x)>>>0,t)
x=o.cx
x===$&&C.b()
s=D.l.F(t*x)
x=o.at
x===$&&C.b()
t=o.cy
t===$&&C.b()
t=D.f.eh((u&x)>>>0,t)
x=o.db
x===$&&C.b()
r=D.l.F(t*x)
x=o.ax
x===$&&C.b()
t=o.dx
t===$&&C.b()
t=D.f.eh((u&x)>>>0,t)
x=o.dy
x===$&&C.b()
q=D.l.F(t*x)
if(o.gM3())p=255
else{x=o.ay
x===$&&C.b()
t=o.fr
t===$&&C.b()
t=D.f.eh((u&x)>>>0,t)
x=o.fx
x===$&&C.b()
p=D.l.F(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===A.HL){q=d.bz()
r=d.bz()
s=d.bz()
p=d.bz()
return e.$4(s,r,q,o.gM3()?255:p)}else if(t===24){q=d.bz()
r=d.bz()
return e.$4(d.bz(),r,q,255)}else if(t===16){u=d.ad()
x=o.as
x===$&&C.b()
t=o.CW
t===$&&C.b()
t=D.f.eh((u&x)>>>0,t)
x=o.cx
x===$&&C.b()
s=D.l.F(t*x)
x=o.at
x===$&&C.b()
t=o.cy
t===$&&C.b()
t=D.f.eh((u&x)>>>0,t)
x=o.db
x===$&&C.b()
r=D.l.F(t*x)
x=o.ax
x===$&&C.b()
t=o.dx
t===$&&C.b()
t=D.f.eh((u&x)>>>0,t)
x=o.dy
x===$&&C.b()
q=D.l.F(t*x)
if(o.gM3())p=255
else{x=o.ay
x===$&&C.b()
t=o.fr
t===$&&C.b()
t=D.f.eh((u&x)>>>0,t)
x=o.fx
x===$&&C.b()
p=D.l.F(t*x)}return e.$4(s,r,q,p)}else throw C.n(C.bM("Unsupported bitsPerPixel ("+t+") or compression ("+x.j(0)+")."))}},
gbM(){return this.b}}
B.abh.prototype={
iT(d){var x,w=null
if(!B.c3P(C.ck(d,!1,w,0)))return w
x=C.ck(d,!1,w,0)
this.a=x
return this.b=B.csc(x,w)},
i6(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new C.tD(f,f,f,f,0,D.bR,0,0)
x=g.a
x===$&&C.b()
w=e.a.b
w===$&&C.b()
x.d=w
v=e.f
w=e.b
u=D.f.ao(w*v+31,32)*4
x=g.c
if(x)t=4
else if(v===1||v===4||v===8)t=1
else{s=v===32?4:3
t=s}if(x)r=D.az
else if(v===1)r=D.eT
else{if(v===2)s=D.kF
else if(v===4)s=D.kG
else s=D.az
r=s}q=x?f:e.ch
p=C.fZ(f,f,r,0,D.bR,e.gaR(),f,0,t,q,D.az,w,!1)
for(o=p.gaR()-1,x=e.c,w=1/x<0,s=x<0,x=x===0;o>=0;--o){n={}
if(!(x?w:s))m=o
else{l=p.a
l=l==null?f:l.b
m=(l==null?0:l)-1-o}l=g.a
k=l.hL(u)
l.d=l.d+(k.c-k.d)
l=p.a
j=l==null
i=j?f:l.a
if(i==null)i=0
n.a=0
h=j?f:l.cF(0,m,f)
if(h==null)h=new C.ex()
while(n.a<i)e.bn0(k,new B.aGC(n,g,i,e,h))}return p},
mD(d,e){if(this.iT(d)==null)return null
return this.i6(0)}}
B.aLE.prototype={}
B.aLe.prototype={}
B.ae3.prototype={}
B.afT.prototype={
MM(){return this.w},
ps(d,e,f,g,h){throw C.n(C.bM("B44 compression not yet supported."))},
G9(d,e,f){return this.ps(d,e,f,null,null)},
j(d){return C.q(this.r)+" "+this.x}}
B.KE.prototype={
H(){return"ExrChannelType."+this.b}}
B.DP.prototype={
H(){return"ExrChannelName."+this.b}}
B.ae4.prototype={
aMb(d){var x=this,w=d.Nk()
x.a=w
if(w.length===0)return
x.c=A.eOL[d.Z()]
d.bz()
d.d+=3
x.f=d.Z()
x.r=d.Z()
w=x.a
if(w==="R"){x.w=!0
x.b=A.dZ7}else if(w==="G"){x.w=!0
x.b=A.dZ8}else if(w==="B"){x.w=!0
x.b=A.dZ9}else if(w==="A"){x.w=!0
x.b=A.dZa}else{x.w=!1
x.b=A.dZb}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break}}}
B.qB.prototype={
H(){return"ExrCompressorType."+this.b}}
B.aPU.prototype={
ps(d,e,f,g,h){throw C.n(C.bM("Unsupported compression type"))},
G9(d,e,f){return this.ps(d,e,f,null,null)}}
B.aVQ.prototype={}
B.ae5.prototype={}
B.ae6.prototype={
aeZ(d){var x,w,v,u,t=this,s=C.ck(d,!1,null,0)
if(s.Z()!==20000630)throw C.n(C.bM("File is not an OpenEXR image file."))
x=t.d=s.bz()
if(x!==2)throw C.n(C.bM("Cannot read version "+x+" image files."))
x=t.e=s.po()
if((x&4294967289)>>>0!==0)throw C.n(C.bM("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=B.ceg(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;;){v=B.ceg(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw C.n(C.bM("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,C.F)(x),++u)x[u].bx7(s)
t.b9Y(s)},
b9Y(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,C.F)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.ba8(u,d)
else t.ba5(u,d)}},
ba8(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
b3===$&&C.b()
x=(b3&16)!==0
b3=b4.b
b3.toString
w=b4.CW
v=b4.ay
u=C.bT(b5,b2,0)
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
if(x)if(u.Z()!==s)throw C.n(C.bM("Invalid Image Data"))
k=u.Z()
j=u.Z()
u.Z()
u.Z()
i=u.hL(u.Z())
u.d=u.d+(i.c-i.d)
h=b4.dy
h.toString
g=j*h
f=b4.dx
f.toString
h=w.ps(i,k*f,g,f,h)
f=h.length
f=Math.min(f,f)
e=new C.kO(h,0,f,0,!1)
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
a8=$.fX
a9=(a8!=null?a8:C.hI())[h]
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
b0=h==null?b2:h.cF(a6,g,b2)
if(b0==null)b0=new C.ex()
h=a5.b
h===$&&C.b()
b0.l(0,h.a,a9)}else{h=a5.a
h===$&&C.b()
a8=b3.b
b1=a8!=null?a8.h(0,h):b2
if(b1!=null)b1.dG(a6,g,a9,0,0)}}}++a3;++g}}++o;++q}++r}},
ba5(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
a5===$&&C.b()
x=(a5&16)!==0
a5=a6.b
a5.toString
w=a6.CW
v=a6.ay[0]
u=a6.cx
t=C.bT(a7,a4,0)
for(s=v.length,r=a6.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.Z()!==3.141592653589793)throw C.n(C.bM("Invalid Image Data"))
n=t.Z()
m=$.fI()
m.$flags&2&&C.u(m)
m[0]=n
n=$.jy()
m[0]=t.Z()
l=t.hL(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.G9(l,0,p)
m=n.length
k=new C.kO(n,0,Math.min(m,m),0,!1)}else k=l
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
m=$.fX
a1=(m!=null?m:C.hI())[n]
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
a2=n==null?a4:n.cF(a0,p,a4)
if(a2==null)a2=new C.ex()
n=e.b
n===$&&C.b()
a2.l(0,n.a,a1)}else{n=e.a
n===$&&C.b()
m=a5.b
a3=m!=null?m.h(0,n):a4
if(a3!=null)a3.dG(a0,p,a1,0,0)}}}++h;++p}}},
gbM(){return this.a},
gaR(){return this.b}}
B.UT.prototype={
aMc(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=C.C(y.N,y.u)
for(x=a2.e,w=y.t,v=a2.c,u=D.lT;;){t=a7.Nk()
if(t.length===0)break
s=a7.Nk()
r=a7.Z()
q=a7.hL(r)
a7.d=a7.d+(q.c-q.d)
x.l(0,t,new B.ae3(t,s,r))
switch(t){case"channels":for(;;){p=new B.ae4()
p.aMb(q)
o=p.a
o===$&&C.b()
if(o.length===0)break
n=p.w
n===$&&C.b()
if(n){++a2.d
o=p.c
o===$&&C.b()
if(o===A.Ch)u=D.lT
else u=o===A.Ci?D.mx:D.my}else{n=p.c
n===$&&C.b()
if(n===A.Ch){n=a2.w
m=a2.x
a4.l(0,o,new C.L_(new Uint16Array(n*m),n,m,1))}else if(n===A.Ci){n=a2.w
m=a2.x
a4.l(0,o,new C.L0(new Float32Array(n*m),n,m,1))}else if(n===A.N4){n=a2.w
m=a2.x
a4.l(0,o,new C.L4(new Uint32Array(n*m),n,m,1))}}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a2.at=o
n=q.Z()
m=$.fI()
m.$flags&2&&C.u(m)
m[0]=n
n=$.Cv()
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
case"compression":a2.ax=A.eQP[J.A(q.a,q.d++)]
break
case"dataWindow":o=q.Z()
n=$.fI()
n.$flags&2&&C.u(n)
n[0]=o
o=$.jy()
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
n=$.fI()
n.$flags&2&&C.u(n)
n[0]=o
$.jy()
n[0]=q.Z()
n[0]=q.Z()
n[0]=q.Z()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.Z()
n=$.fI()
n.$flags&2&&C.u(n)
n[0]=o
$.Cv()
break
case"screenWindowCenter":o=q.Z()
n=$.fI()
n.$flags&2&&C.u(n)
n[0]=o
$.Cv()
n[0]=q.Z()
break
case"screenWindowWidth":o=q.Z()
n=$.fI()
n.$flags&2&&C.u(n)
n[0]=o
$.Cv()
break
case"tiles":a2.dx=q.Z()
a2.dy=q.Z()
j=J.A(q.a,q.d++)
a2.fr=j&15
a2.fx=D.f.O(j,4)&15
break
case"type":i=q.Nk()
if(i!=="deepscanline")if(i!=="deeptile")throw C.n(C.bM("EXR Invalid type: "+i))
break
default:break}}x=a2.w
a2.b=C.fZ(a3,a3,u,0,D.bR,a2.x,a3,0,a2.d,a3,D.az,x,!1)
for(x=new C.dQ(a4,a4.r,a4.e);x.q();){w=x.d
o=a2.b
o.toString
n=a4.h(0,w)
n.toString
o.aEf(w,n)}if(a2.db){x={}
w=a2.r
w===$&&C.b()
a2.id=a2.aPP(w[0],w[2],w[1],w[3])
w=a2.r
a2.k1=a2.aPQ(w[0],w[2],w[1],w[3])
if(a2.fr!==2)a2.k1=1
w=a2.id
w.toString
v=a2.r
a2.fy=a2.agf(w,v[0],v[2],a2.dx,a2.fx)
v=a2.k1
v.toString
w=a2.r
a2.go=a2.agf(v,w[1],w[3],a2.dy,a2.fx)
w=a2.aPL()
a2.k2=w
v=a2.dx
v.toString
v=w*v
a2.k3=v
a2.CW=B.cd6(a2.ax,a2,v,a2.dy)
x.a=x.b=0
v=a2.id
v.toString
w=a2.k1
w.toString
a2.ay=C.ED(v*w,new B.aPW(x,a2),!0,y.R)}else{x=a2.x
w=a2.ch=new Uint32Array(x+1)
for(o=v.length,n=a2.r,m=a2.w,h=0;h<o;++h){g=v[h]
l=g.d
l===$&&C.b()
k=g.f
k===$&&C.b()
f=D.f.ev(l*m,k)
for(l=g.r,e=0;e<x;++e){n===$&&C.b()
k=n[1]
l===$&&C.b()
if(D.f.aF(e+k,l)===0)w[e]=w[e]+f}}for(d=0,e=0;e<x;++e)d=Math.max(d,w[e])
x=B.cd6(a2.ax,a2,d,a3)
a2.CW=x
x=a2.cx=x.MM()
w=a2.ch
v=w.length
o=new Uint32Array(v)
a2.cy=o
for(--v,a0=0,a1=0;a1<=v;++a1){if(D.f.aF(a1,x)===0)a0=0
o[a1]=a0
a0+=w[a1]}x=D.f.ev(a2.x+x,x)
a2.ay=C.c([new Uint32Array(x-1)],y.w)}},
aPP(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.R4(w):u.Qg(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.R4(v):u.Qg(v))+1
break
default:throw C.n(C.bM("Unknown LevelMode format."))}return x},
aPQ(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.R4(w):u.Qg(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.R4(v):u.Qg(v))+1
break
default:throw C.n(C.bM("Unknown LevelMode format."))}return x},
R4(d){var x
for(x=0;d>1;){++x
d=D.f.O(d,1)}return x},
Qg(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.f.O(d,1)}return x+w},
aPL(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&C.b()
v+=t}return v},
agf(d,e,f,g,h){var x,w,v,u,t,s,r=J.jK(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.f.cO(1,v)
t=D.f.ev(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.f.ev(s+g-1,g)}return r}}
B.afU.prototype={
bx7(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.ab_()
v.$flags&2&&C.u(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.ab_()
v.$flags&2&&C.u(v)
v[x]=u}}}}
B.aVR.prototype={
aMw(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.jK(t,y.bc)
for(x=0;x<t;++x)s[x]=new B.auf()
u.y=s
w=u.w
w.toString
v=D.f.ao(w*u.x,2)
u.z=new Uint16Array(v)},
MM(){return this.x},
ps(a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
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
n=D.f.ev(a5,v)
m=D.f.ev(x,v)
v=n*v<a5?0:1
v=m-n+v
o.c=v
u=p.r
u===$&&C.b()
n=D.f.ev(a6,u)
m=D.f.ev(w,u)
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
if(j>=8192)throw C.n(C.bM("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.fR(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.A(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.bbj(i,d)
B.cv6(a4,a4.Z(),a3.z,r)
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
B.cva(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.aOk(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=B.oi(!1,v*a3.x+73728)}v.a=0
for(;a6<=w;++a6)for(q=0;q<s;++q){v=a3.y
v===$&&C.b()
o=v[q]
v=o.e
v===$&&C.b()
if(D.f.aF(a6,v)!==0)continue
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
v.dt(u[l])}}v=a3.r
return J.ch(D.K.ga0(v.c),0,v.a)},
G9(d,e,f){return this.ps(d,e,f,null,null)},
aOk(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&C.u(e)
e[w]=v}},
bbj(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&C.u(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&C.u(e)
e[u]=0}return w-1}}
B.auf.prototype={}
B.aVS.prototype={
MM(){return this.x},
ps(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=D.ne.A_(a0.eB()),d=f.y
if(d==null){d=f.w
d.toString
d=f.y=B.oi(!1,f.x*d)}d.a=0
x=C.c([0,0,0,0],y.t)
w=new Uint32Array(1)
v=J.ch(D.bM.ga0(w),0,null)
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
if(D.f.aF(a2,s)!==0)continue
s=n.f
s===$&&C.b()
m=D.f.ev(a1,s)
l=D.f.ev(u,s)
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
return J.ch(D.K.ga0(d.c),0,d.a)},
G9(d,e,f){return this.ps(d,e,f,null,null)}}
B.aVT.prototype={
MM(){return 1},
ps(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=B.oi(!1,(h-d.d)*2)
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
u=$.lU()
u.$flags&2&&C.u(u)
u[0]=v
t=$.mM()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.aN(J.A(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.aN(J.A(d.a,d.d++))}q=J.ch(D.K.ga0(g.c),0,g.a)
p=q.length
for(h=q.$flags|0,o=1;o<p;++o){v=q[o-1]
u=q[o]
h&2&&C.u(q)
q[o]=v+u-128}h=i.r
if(h==null||h.length!==p)h=i.r=new Uint8Array(p)
v=D.f.ao(p+1,2)
for(n=0,m=0;;v=j,n=k){if(m<p){l=m+1
k=n+1
u=q[n]
h.$flags&2&&C.u(h)
h[m]=u}else break
if(l<p){m=l+1
j=v+1
h[l]=q[v]}else break}return h},
G9(d,e,f){return this.ps(d,e,f,null,null)},
j(d){return C.q(this.w)}}
B.afV.prototype={
MM(){return this.x},
ps(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=D.ne.A_(d.eB())
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
u=D.f.ao(t+1,2)
for(q=0,p=0;;u=m,q=n){if(p<t){o=p+1
n=q+1
r=k[q]
v.$flags&2&&C.u(v)
v[p]=r}else break
if(o<t){p=o+1
m=u+1
v[o]=k[u]}else break}return v},
G9(d,e,f){return this.ps(d,e,f,null,null)},
j(d){return C.q(this.w)}}
B.aPV.prototype={
iT(d){var x=new B.ae6(C.c([],y.m))
x.aeZ(d)
return this.a=x},
i6(d){var x=this.a
if(x==null)return null
return x.c[d].b},
mD(d,e){this.a=B.cv8(d)
return this.i6(0)}}
B.Vn.prototype={
bp8(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.b,w=this.d,v=-1,u=-1,t=0;t<x;++t){s=w.kW(t)
r=w.kV(t)
q=w.kU(t)
p=w.md(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
acz(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new C.r1(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.kW(u)
s=x.kV(u)
r=x.kU(u)
v.Pi(u,t,s,r,u===q.c?0:255)}return v}}
B.Vo.prototype={
aMf(d){var x,w,v,u,t,s,r=this
r.a=d.ad()
r.b=d.ad()
r.c=d.ad()
r.d=d.ad()
x=d.bz()
r.e=(x&64)!==0
if((x&128)!==0){r.f=B.cdB(D.f.cO(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.A(d.a,d.d++)
t=J.A(d.a,d.d++)
s=J.A(d.a,d.d++)
v.d.ni(w,u,t,s)}}r.x=d.d-d.b}}
B.afW.prototype={}
B.aeQ.prototype={
gbM(){return this.a},
gaR(){return this.b}}
B.aSZ.prototype={
iT(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.f=C.ck(d,!1,null,0)
n.a=new B.aeQ(C.c([],y.b))
if(!n.ajy())return null
try{while(u=n.f,t=u.d,t<u.c){s=u.a
u.d=t+1
x=J.A(s,t)
switch(x){case 44:w=n.apy()
if(w==null){u=n.a
return u}u=w
u.r=n.e
u.w=n.c
if(n.b!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new B.Vn(t,s,r,new C.r1(new Uint8Array(C.b5(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.d}n.a.r.push(w)
break
case 33:u=n.f
v=J.A(u.a,u.d++)
if(J.p(v,255)){u=n.f
if(u.ho(J.A(u.a,u.d++))==="NETSCAPE2.0"){q=J.A(u.a,u.d++)
p=J.A(u.a,u.d++)
if(q===3&&p===1)n.r=u.ad()}else n.Tn()}else if(J.p(v,249)){u=n.f
u.toString
n.b9U(u)}else n.Tn()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
b9U(d){var x,w,v,u=this
d.bz()
x=d.bz()
u.e=d.ad()
u.d=d.bz()
d.bz()
u.c=D.f.O(x,2)&7
u.b=x&1
w=d.PB(1,0)
if(J.A(w.a,w.d)===44){++d.d
v=u.apy()
if(v==null)return
v.r=u.e
v.w=u.c
if(u.b!==0){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=B.cvW(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
i6(d){var x,w,v,u=this,t=u.f
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
x=v.x
x===$&&C.b()
t.d=x
return u.aSP(v)},
mD(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.iT(a7)==null)return a6
x=a5.a.r.length
if(x===1)return a5.i6(0)
for(x=y.p,w=a6,v=w,u=0;t=a5.a.r,u<t.length;++u){a8=t[u]
s=a5.i6(u)
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
if(t){v.le(s)
w=s
continue}l=a8.f
if(!(l!=null)){t=a5.a.e
t.toString
l=t}t=o?a6:p.a
if(t==null)t=0
r=o?a6:p.b
if(r==null)r=0
k=C.fZ(a6,a6,D.az,0,D.bR,r,a6,0,1,l.acz(),D.az,t,!1)
t=a8.w
if(t===2){t=a5.a.c.a
t=!D.K.gW(t)?t[0]:0
r=l.d
j=r.kW(t)
i=r.kV(t)
h=r.kU(t)
g=t===l.c?0:255
t=new Uint8Array(4)
t[0]=j
t[1]=i
t[2]=h
t[3]=g
r=k.a
if(r!=null)r.lj(0,new C.vb(t))}else if(t!==3)if(a8.f!=null){t=w.a
t=t==null?a6:t.gde()
t.toString
f=C.C(x,x)
for(r=l.b,e=0;e<r;++e)f.l(0,e,l.bp8(t.kW(e),t.kV(e),t.kU(e),t.md(e)))
t=k.a
d=t==null?a6:J.fJ(t.ga0(t))
if(d==null){t=k.a
t=t==null?a6:t.ga0(t)
if(t==null)t=D.K.ga0(new Uint8Array(0))
d=J.fJ(t)}t=w.a
a0=t==null?a6:J.fJ(t.ga0(t))
if(a0==null){t=w.a
t=t==null?a6:t.ga0(t)
if(t==null)t=D.K.ga0(new Uint8Array(0))
a0=J.fJ(t)}for(a1=d.length,t=d.$flags|0,a2=0;a2<a1;++a2){a3=f.h(0,a0[a2])
if(a3!==-1){a3.toString
t&2&&C.u(d)
d[a2]=a3}}}k.y=s.y
for(t=s.a,t=t.gV(t);t.q();){a4=t.gI()
if(a4.gap()!==0){r=a4.gjc()
q=a8.a
q===$&&C.b()
p=a4.gjw()
o=a8.b
o===$&&C.b()
k.yf(r+q,p+o,a4)}}v.le(k)
w=k}return v},
apy(){var x,w=this.f
if(w.d>=w.c)return null
x=new B.afW()
x.aMf(w);++this.f.d
this.Tn()
return x},
aSP(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.w==null){n.w=new Uint8Array(256)
n.x=new Uint8Array(4095)
n.y=new Uint8Array(4096)
n.z=new Uint32Array(4096)}x=n.Q=n.f.bz()
w=D.f.cG(1,x)
n.dy=w;++w
n.dx=w
n.db=w+1;++x
n.cy=x
n.cx=D.f.cG(1,x)
n.ay=0
n.CW=4098
n.at=n.ax=0
x=n.w
x.toString
x.$flags&2&&C.u(x)
x[0]=0
x=n.z
x.toString
D.bM.fC(x,0,4096,4098)
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
s=C.fZ(m,m,D.az,0,D.bR,w,m,0,1,t.acz(),D.az,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&C.b()
if(x){x=d.b
x===$&&C.b()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+A.e4S[q];o<w;o+=A.eKa[q],++p){if(!n.ajz(r))return s
n.are(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.ajz(r))return s
n.are(s,o,t,r)}return s},
are(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.dG(x,e,w,0,0)}},
ajy(){var x,w,v,u,t,s=this,r=s.f.ho(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.f.ad()
x=s.a
x.toString
x.b=s.f.ad()
w=s.f.bz()
x=s.a
x.toString
x.c=new C.vb(new Uint8Array(C.b5(C.c([s.f.bz()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=B.cdB(D.f.cO(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
u=J.A(x.a,x.d++)
x=s.f
t=J.A(x.a,x.d++)
x=s.f
w=J.A(x.a,x.d++)
s.a.e.d.ni(v,u,t,w)}}s.a.toString
return!0},
ajz(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.aT1(d))return!1
if(x.as===0)x.Tn()
return!0},
Tn(){var x,w,v,u=this.f
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
aT1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ay
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
w=u}}for(k=d.$flags|0;w<x;){s=l.ch=l.aT0()
if(s==null)return!1
v=l.dx
if(s===v)return!1
t=l.dy
if(s===t){for(t=l.z,r=0;r<=4095;++r){t.toString
t.$flags&2&&C.u(t)
t[r]=4098}l.db=v+1
v=l.Q+1
l.cy=v
l.cx=D.f.cG(1,v)
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
t=l.a2y(v,s,t)
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
v=l.a2y(t,v,n)
o.$flags&2&&C.u(o)
o[q]=v}else{o===$&&C.b()
p.toString
v=l.a2y(t,p,n)
o.$flags&2&&C.u(o)
o[q]=v}}v=l.ch
v.toString
l.CW=v}}return!0},
aT0(){var x,w,v,u,t=this
if(t.cy>12)return null
while(x=t.ax,w=t.cy,x<w){x=t.aOU()
x.toString
w=t.at
v=t.ax
t.at=(w|D.f.cG(x,v))>>>0
t.ax=v+8}v=t.at
u=A.eNE[w]
t.at=D.f.eh(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
a2y(d,e,f){var x,w,v=0
for(;;){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
aOU(){var x,w,v=this,u=v.w,t=u[0],s=u.$flags|0
if(t===0){t=v.f.bz()
s&2&&C.u(u)
u[0]=t
u=v.w
t=u[0]
if(t===0)return null
D.K.dN(u,1,1+t,v.f.fR(t).eB())
u=v.w
x=u[1]
u.$flags&2&&C.u(u)
u[1]=2
u[0]=u[0]-1}else{w=u[1]
s&2&&C.u(u)
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
B.KY.prototype={
H(){return"IcoType."+this.b}}
B.aUW.prototype={
gbM(){return 0},
gaR(){return 0}}
B.afA.prototype={}
B.aUU.prototype={
gaR(){return D.f.ao(B.CX.prototype.gaR.call(this),2)},
gM3(){return!(this.d===40&&this.f===32)&&B.CX.prototype.gM3.call(this)}}
B.aUV.prototype={
iT(d){var x=C.ck(d,!1,null,0)
this.a=x
return this.b=B.cdQ(x)},
mD(d,e){var x,w,v,u=this
if(u.iT(d)==null)return null
x=u.b.e.length
if(x===1)return u.i6(0)
for(w=null,v=0;v<u.b.e.length;++v){e=u.i6(v)
if(e==null)continue
if(w==null){e.w=D.bR
w=e}else w.le(e)}return w},
i6(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=this.a
if(a7!=null){x=this.b
x=x==null||a8>=x.d}else x=!0
if(x)return a6
w=this.b.e[a8]
x=a7.a
a7=a7.b+w.e
v=w.d
u=J.IH(x,a7,a7+v)
t=new C.XU(C.c50())
y.D.a(u)
if(t.F9(u))return t.bR(u)
s=B.oi(!1,14)
s.dt(19778)
s.dk(v)
s.dk(0)
s.dk(0)
a7=C.ck(u,!1,a6,0)
x=B.cbB(C.ck(J.ch(D.K.ga0(s.c),0,s.a),!1,a6,0))
v=a7.d
r=a7.Z()
q=a7.Z()
p=$.fI()
p.$flags&2&&C.u(p)
p[0]=q
q=$.jy()
o=q[0]
p[0]=a7.Z()
q=q[0]
n=a7.ad()
m=a7.ad()
l=A.V6[a7.Z()]
a7.Z()
p[0]=a7.Z()
p[0]=a7.Z()
p=a7.Z()
a7.Z()
k=new B.aUU(x,o,q,r,n,m,l,p,v)
k.aeW(a7,x)
if(r!==40&&n!==1)return a6
j=p===0&&m<=8?40+4*D.f.cO(1,m):40+4*p
x.b=j
s.a-=4
s.dk(j)
i=C.ck(u,!1,a6,0)
h=new B.aLE(!0)
h.a=i
h.b=k
g=h.i6(0)
if(m>=32)return g
f=32-D.f.aF(o,32)
e=D.f.ao(f===32?o:o+f,8)
for(a7=q<0,x=q===0,q=1/q<0,d=0;d<D.f.ao(B.CX.prototype.gaR.call(k),2);++d){if(!(x?q:a7))a0=d
else{v=g.a
v=v==null?a6:v.b
a0=(v==null?0:v)-1-d}a1=i.hL(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a6:v.cF(0,a0,a6)
if(a2==null)a2=new C.ex()
for(a3=0;a3<o;){a4=J.A(a1.a,a1.d++)
a5=7
for(;;){if(!(a5>-1&&a3<o))break
if((a4&D.f.cG(1,a5))>>>0!==0)a2.sap(0)
a2.q();++a3;--a5}}}return g}}
B.ach.prototype={}
B.Eg.prototype={}
B.Eh.prototype={}
B.VB.prototype={}
B.aW8.prototype={}
B.zx.prototype={}
B.aWa.prototype={
aAX(d){var x,w,v,u,t,s=this,r=C.ck(d,!0,null,0)
s.a=r
x=r.PB(2,0)
if(J.A(x.a,x.d)!==255||J.A(x.a,x.d+1)!==216)return!1
if(s.tL()!==216)return!1
w=s.tL()
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
break}w=s.tL()}return v&&u},
bx4(d){var x,w,v,u,t,s,r=this
r.a=C.ck(d,!0,null,0)
if(r.tL()!==216)return null
x=new B.aWe()
w=r.tL()
v=!1
u=!1
for(;;){if(w!==217){t=r.a
t=t.d<t.c}else t=!1
if(!t)break
switch(w){case 192:case 193:case 194:r.ans(w,r.ano())
v=!0
break
case 218:r.apx()
u=!0
break
default:r.apx()
break}w=r.tL()}t=r.d
if(t!=null){s=t.e
s.toString
x.a=s
t=t.d
t.toString
x.b=t}t=r.d=null
D.i.a3(r.x)
return v&&u?x:t},
i_(d){var x,w,v,u,t,s,r,q,p=this
p.a=C.ck(d,!0,null,0)
p.b9N()
if(p.x.length!==1)throw C.n(C.bM("Only single frame JPEGs supported"))
for(x=p.Q,w=0;v=p.d,u=v.z,w<u.length;++w){t=v.y.h(0,u[w])
v=t.a
u=p.d
s=u.f
r=t.b
q=u.r
u=p.aP1(u,t)
v=v===1&&s===2?1:0
x.push(new B.ach(u,v,r===1&&q===2?1:0))}},
b9N(){var x,w,v,u,t=this
if(t.tL()!==216)throw C.n(C.bM("Start Of Image marker not found."))
x=t.tL()
for(;;){if(x!==217){w=t.a
w===$&&C.b()
w=w.d<w.c}else w=!1
if(!w)break
v=t.ano()
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:t.b9O(x,v)
break
case 219:t.b9S(v)
break
case 192:case 193:case 194:t.ans(x,v)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw C.n(C.bM("Unhandled frame type "+D.f.hG(x,16)))
case 196:t.b9R(v)
break
case 221:t.e=v.ad()
break
case 218:t.ba4(v)
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
break}if(x!==0)throw C.n(C.bM("Unknown JPEG marker "+D.f.hG(x,16)))
break}x=t.tL()}},
apx(){var x,w=this.a
w===$&&C.b()
x=w.ad()
if(x<2)throw C.n(C.bM("Invalid Block"))
w=this.a
w.d=w.d+(x-2)},
ano(){var x,w=this.a
w===$&&C.b()
x=w.ad()
if(x<2)throw C.n(C.bM("Invalid Block"))
return this.a.fR(x-2)},
tL(){var x,w=this,v=w.a
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
b9T(d){if(d.Z()!==1165519206)return
if(d.ad()!==0)return
this.r.i_(d)},
b9O(d,e){var x,w,v,u,t=this,s=e
if(d===224){x=s
w=!1
if(J.A(x.a,x.d)===74){x=s
if(J.A(x.a,x.d+1)===70){x=s
if(J.A(x.a,x.d+2)===73){x=s
if(J.A(x.a,x.d+3)===70){x=s
x=J.A(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new B.aWf()
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
s.PB(14+3*w*v,14)}}else if(d===225)t.b9T(s)
else if(d===238){x=s
w=!1
if(J.A(x.a,x.d)===65){x=s
if(J.A(x.a,x.d+1)===100){x=s
if(J.A(x.a,x.d+2)===111){x=s
if(J.A(x.a,x.d+3)===98){x=s
if(J.A(x.a,x.d+4)===101){x=s
x=J.A(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){t.c=new B.aW8()
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
x.d=J.A(w.a,w.d+11)}}else if(d===254)try{s.bxb()}catch(u){C.aF(u)}},
b9S(d){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=this.w;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
t=J.A(u,v)
s=D.f.O(t,4)
t&=15
if(t>=4)throw C.n(C.bM("Invalid number of quantization tables"))
v=w[t]
if(v==null){v=new Int16Array(64)
w[t]=v}for(u=s!==0,r=0;r<64;++r){q=u?d.ad():J.A(d.a,d.d++)
p=A.xg[r]
v.$flags&2&&C.u(v)
v[p]=q}}if(u)throw C.n(C.bM("Bad length for DQT block"))},
ans(d,e){var x,w,v,u,t,s,r,q=this
if(q.d!=null)throw C.n(C.bM("Duplicate JPG frame data found."))
x=q.d=new B.age(C.C(y.p,y.c),C.c([],y.t))
x.b=d===194
x.c=e.bz()
x=q.d
x.toString
x.d=e.ad()
x=q.d
x.toString
x.e=e.ad()
w=e.bz()
for(x=q.w,v=0;v<w;++v){u=J.A(e.a,e.d++)
t=J.A(e.a,e.d++)
s=D.f.O(t,4)
r=J.A(e.a,e.d++)
q.d.z.push(u)
q.d.y.l(0,u,new B.zx(s&15,t&15,x,r))}q.d.kJ()
q.x.push(q.d)},
b9R(d){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=this.z,v=this.y;u=d.d,u<x;){t=d.a
d.d=u+1
s=J.A(t,u)
r=new Uint8Array(16)
for(q=0,p=0;p<16;++p){r[p]=J.A(d.a,d.d++)
q+=r[p]}o=d.hL(q)
d.d=d.d+(o.c-o.d)
n=o.eB()
if((s&16)!==0){s-=16
m=v}else m=w
if(m.length<=s)D.i.su(m,s+1)
m[s]=this.aP8(r,n)}},
ba4(d){var x,w,v,u,t,s,r,q=this,p=d.bz()
if(p<1||p>4)throw C.n(C.bM("Invalid SOS block"))
x=C.ED(p,new B.aWc(q,d),!0,y.c)
w=d.bz()
v=d.bz()
u=d.bz()
t=D.f.O(u,4)
s=q.a
s===$&&C.b()
r=q.d
t=new B.agf(s,r,x,q.e,w,v,t&15,u&15)
s=r.w
s===$&&C.b()
t.f=s
t.r=r.b
t.oM()},
aP8(d,e){var x,w,v,u,t,s,r,q,p,o,n=C.c([],y.G),m=16
for(;;){if(!(m>0&&d[m-1]===0))break;--m}x=y.T
n.push(new B.PM(C.c([],x)))
w=n[0]
for(v=0,u=0;u<m;){for(t=0;t<d[u];++t){w=n.pop()
s=w.a
r=s.length
q=w.b
if(r<=q)D.i.su(s,q+1)
s[w.b]=new B.VB(e[v])
while(s=w.b,s>0)w=n.pop()
w.b=s+1
n.push(w)
for(;n.length<=u;w=p){s=C.c([],x)
p=new B.PM(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.i.su(r,o+1)
r[w.b]=new B.Eh(s)}++v}++u
if(u<m){s=C.c([],x)
p=new B.PM(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.i.su(r,o+1)
r[w.b]=new B.Eh(s)
w=p}}return n[0].a},
aP1(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.e
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
B.cLR(k,j[p][l],u,v)
i=l<<3>>>0
for(h=0,g=0;g<8;++g){f=t[o+g]
for(n=0;n<8;++n,h=e){f.toString
e=h+1
k=u[h]
f.$flags&2&&C.u(f)
f[i+n]=k}}}}return t}}
B.PM.prototype={}
B.age.prototype={
kJ(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=new C.dQ(x,x.r,x.e);w.q();){v=x.h(0,w.d)
g.f=Math.max(g.f,v.a)
g.r=Math.max(g.r,v.b)}w=g.e
w.toString
g.w=D.l.dT(w/8/g.f)
w=g.d
w.toString
g.x=D.l.dT(w/8/g.r)
for(w=new C.dQ(x,x.r,x.e),u=y.k,t=y.H;w.q();){s=x.h(0,w.d)
s.toString
r=g.e
r.toString
q=s.a
p=D.l.dT(D.l.dT(r/8)*q/g.f)
r=g.d
r.toString
o=s.b
n=D.l.dT(D.l.dT(r/8)*o/g.r)
m=g.w*q
l=g.x*o
k=J.jK(l,t)
for(j=0;j<l;++j){i=J.jK(m,u)
for(h=0;h<m;++h)i[h]=new Int32Array(64)
k[j]=i}s.e=p
s.f=n
s.r=k}}}
B.aWe.prototype={
gbM(){return this.a},
gaR(){return this.b}}
B.aWf.prototype={}
B.agf.prototype={
oM(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.y,f=g.length,e=h.r
e.toString
if(e)if(h.Q===0)x=h.at===0?h.gaSJ():h.gaSL()
else x=h.at===0?h.gaSA():h.gaSC()
else x=h.gaSG()
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
p=D.f.ev(t,v)
o=D.f.aF(t,v)
v=r.r
v===$&&C.b()
x.$2(r,v[p][o]);++t;++q}}else{q=0
for(;;){v=h.z
v.toString
if(!(q<v))break
for(s=0;s<f;++s){r=g[s]
n=r.a
m=r.b
for(l=0;l<m;++l)for(k=0;k<n;++k)h.aSQ(r,x,t,l,k)}++t;++q}}h.ch=0
j=J.A(w.a,w.d)
i=J.A(w.a,w.d+1)
if(j===255)if(i>=208&&i<=215)w.d+=2
else break}},
zf(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.f.je(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.bz()
w.ay=x
if(x===255)if(v.bz()!==0)return null
w.ch=7
return D.f.O(w.ay,7)&1},
IO(d){var x,w=new B.Eh(d)
while(x=this.zf(),x!=null){if(w instanceof B.Eh)w=w.a[x]
if(w instanceof B.VB)return w.a}return null},
a4A(d){var x,w
for(x=0;d>0;){w=this.zf()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
Jq(d){var x
if(d==null)return 0
if(d===1)return this.zf()===1?1:-1
x=this.a4A(d)
if(x==null)return 0
if(x>=D.f.cG(1,d-1))return x
return x+D.f.cO(-1,d)+1},
aSH(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&C.b()
x=r.IO(q)
w=x===0?0:r.Jq(x)
q=d.y
q===$&&C.b()
q+=w
d.y=q
e.$flags&2&&C.u(e)
e[0]=q
for(v=1;v<64;){q=d.x
q===$&&C.b()
u=r.IO(q)
if(u==null)break
t=u&15
s=u>>>4
if(t===0){if(s<15)break
v+=16
continue}v+=s
t=r.Jq(t)
e[A.xg[v]]=t;++v}},
aSK(d,e){var x,w,v=d.w
v===$&&C.b()
x=this.IO(v)
w=x===0?0:D.f.cO(this.Jq(x),this.ax)
v=d.y
v===$&&C.b()
v+=w
d.y=v
e.$flags&2&&C.u(e)
e[0]=v},
aSM(d,e){var x=e[0],w=this.zf()
w.toString
w=D.f.cO(w,this.ax)
e.$flags&2&&C.u(e)
e[0]=(x|w)>>>0},
aSB(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.CW
if(o>0){p.CW=o-1
return}x=p.Q
w=p.as
for(o=p.ax,v=e.$flags|0;x<=w;){u=d.x
u===$&&C.b()
u=p.IO(u)
u.toString
t=u&15
s=u>>>4
if(t===0){if(s<15){o=p.a4A(s)
o.toString
p.CW=o+D.f.cO(1,s)-1
break}x+=16
continue}x+=s
r=A.xg[x]
u=p.Jq(t)
q=D.f.cO(1,o)
v&2&&C.u(e)
e[r]=u*q;++x}},
aSD(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.Q,n=p.as
A:for(x=p.ax,w=e.$flags|0,v=0;o<=n;){u=A.xg[o]
t=p.cx
switch(t){case 0:t=d.x
t===$&&C.b()
s=p.IO(t)
if(s==null)throw C.n(C.bM("Invalid progressive encoding"))
r=s&15
v=s>>>4
if(r===0)if(v<15){t=p.a4A(v)
t.toString
p.CW=t+D.f.cO(1,v)
p.cx=4}else{p.cx=1
v=16}else{if(r!==1)throw C.n(C.bM("invalid ACn encoding"))
p.cy=p.Jq(r)
p.cx=v!==0?2:3}continue A
case 1:case 2:q=e[u]
if(q!==0){t=p.zf()
t.toString
t=D.f.cO(t,x)
w&2&&C.u(e)
e[u]=q+t}else{--v
if(v===0)p.cx=t===2?3:0}break
case 3:t=e[u]
if(t!==0){q=p.zf()
q.toString
q=D.f.cO(q,x)
w&2&&C.u(e)
e[u]=t+q}else{t=p.cy
t===$&&C.b()
t=D.f.cO(t,x)
w&2&&C.u(e)
e[u]=t
p.cx=0}break
case 4:t=e[u]
if(t!==0){q=p.zf()
q.toString
q=D.f.cO(q,x)
w&2&&C.u(e)
e[u]=t+q}break}++o}if(p.cx===4)if(--p.CW===0)p.cx=0},
aSQ(d,e,f,g,h){var x,w,v=this.f
v===$&&C.b()
x=D.f.ev(f,v)*d.b+g
w=D.f.aF(f,v)*d.a+h
v=d.r
v===$&&C.b()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
B.W9.prototype={
iT(d){C.ck(d,!0,null,0)
return B.aWb().bx4(d)},
mD(d,e){var x=B.aWb()
x.i_(d)
if(x.x.length!==1)throw C.n(C.bM("only single frame JPEGs supported"))
return B.cKA(x)},
bR(d){return this.mD(d,null)}}
B.A5.prototype={
H(){return"PnmFormat."+this.b}}
B.Fw.prototype={
gbM(){return this.a},
gaR(){return this.b}}
B.b32.prototype={
F9(d){var x
this.b=C.ck(d,!1,null,0)
x=this.Rn()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
mD(d,e){if(this.iT(d)==null)return null
return this.i6(0)},
iT(d){var x,w,v=this
v.b=C.ck(d,!1,null,0)
x=v.Rn()
if(x==="P1"){w=v.a=new B.Fw(A.rS)
w.e=A.a49}else if(x==="P2"){w=v.a=new B.Fw(A.rS)
w.e=A.a4a}else if(x==="P5"){w=v.a=new B.Fw(A.rS)
w.e=A.EZ}else if(x==="P3"){w=v.a=new B.Fw(A.rS)
w.e=A.a4b}else if(x==="P6"){w=v.a=new B.Fw(A.rS)
w.e=A.F_}else return v.b=null
w.a=v.Je()
w=v.a
w.toString
w.b=v.Je()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
i6(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===A.a49){x=q.a
w=C.fZ(r,r,D.eT,0,D.bR,q.b,r,0,1,r,D.az,x,!1)
for(q=w.a,q=q.gV(q);q.q();){v=q.gI()
if(s.Rn()==="1")v.iy(1,1,1)
else v.iy(0,0,0)}return w}else if(x===A.a4a||x===A.EZ){u=s.Je()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=C.fZ(r,r,s.awi(u),0,D.bR,q,r,0,1,r,D.az,x,!1)
for(q=w.a,q=q.gV(q);q.q();){v=q.gI()
t=s.SL(s.a.e,u)
v.iy(t,t,t)}return w}else if(x===A.a4b||x===A.F_){u=s.Je()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=C.fZ(r,r,s.awi(u),0,D.bR,q,r,0,3,r,D.az,x,!1)
for(q=w.a,q=q.gV(q);q.q();)q.gI().iy(s.SL(s.a.e,u),s.SL(s.a.e,u),s.SL(s.a.e,u))
return w}return r},
awi(d){if(d>255)return D.cV
if(d>15)return D.az
if(d>3)return D.kG
if(d>1)return D.kF
return D.eT},
SL(d,e){if(d===A.EZ||d===A.F_)return this.b.bz()
return this.Je()},
Je(){var x,w,v=this.Rn()
if(J.aY(v)===0)return 0
try{x=C.fH(v,null)
return x}catch(w){return 0}},
Rn(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.i.en(x,0)
w=D.n.aH(t.bxa())
if(w.length===0)return""
while(D.n.bh(w,"#"))w=D.n.aH(this.b.azB(70))
t=y.U
v=C.K(new C.ag(C.c(w.split(" "),y.s),new B.b33(),t),t.i("z.E"))
for(t=v.length,u=0;u<t;++u)if(D.n.bh(v[u],"#")){D.i.su(v,u)
break}D.i.J(x,v)
if(x.length===0)return""
return D.i.en(x,0)}}
B.aiW.prototype={}
B.aiX.prototype={}
B.u7.prototype={}
B.aiZ.prototype={}
B.aj_.prototype={}
B.aj2.prototype={}
B.aj3.prototype={}
B.Yc.prototype={}
B.aj1.prototype={}
B.b4F.prototype={
aMH(d){var x,w,v,u,t=this
d.ad()
d.ad()
d.ad()
d.ad()
x=D.f.ao(d.c-d.d,8)
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
B.MA.prototype={
azx(d,e,f,g,h,i,j){if(d.c-d.d<2)return
if(h==null)h=d.ad()
switch(h){case 0:g.toString
this.ba3(d,e,f,g)
break
case 1:if(i==null)i=this.ba0(d,f)
g.toString
this.ba2(d,e,f,g,i,j)
break
default:throw C.n(C.bM("Unsupported compression: "+h))}},
bx9(d,e,f,g){return this.azx(d,e,f,g,null,null,0)},
ba0(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.ad()
return w},
ba3(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.K.fC(x,0,w,255)
return}this.c=d.fR(w).eB()},
ba2(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.K.fC(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.hL(h[w])
d.d=d.d+(s.c-s.d)
x=this.c
x.toString
this.aSV(s,x,v)
v+=e}},
aSV(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.A(t,u)
t=$.lU()
t.$flags&2&&C.u(t)
t[0]=u
s=$.mM()[0]
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
gbE(){return this.a}}
B.re.prototype={
H(){return"PsdColorMode."+this.b}}
B.b4H.prototype={
aMI(d){var x,w,v=this
v.as=C.ck(d,!0,null,0)
v.b9u()
if(v.c!==943870035)return
x=v.as.Z()
v.as.fR(x)
x=v.as.Z()
v.at=v.as.fR(x)
x=v.as.Z()
v.ax=v.as.fR(x)
w=v.as
v.ay=w.fR(w.c-w.d)},
oM(){var x,w=this
if(w.c===943870035){x=w.as
x===$&&C.b()
x=x==null}else x=!0
if(x)return!1
w.b9Z()
w.ba_()
w.ba1()
w.ay=w.ax=w.at=w.as=null
return!0},
auI(){if(!this.oM())return null
return this.bxI()},
bxI(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.y
if(d!=null)return d
d=f.a
d=C.fZ(e,e,D.az,0,D.bR,f.b,e,0,4,e,D.az,d,!1)
f.y=d
d.a3(0)
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
m=n==null?e:n.cF(o,r,e)
if(m==null)m=new C.ex()
l=D.l.F(m.ga8())
k=D.l.F(m.gag())
j=D.l.F(m.gah())
i=D.l.F(m.gap())
p.toString
if(p>=0&&p<f.a&&d&&s<f.b){n=w.b
n.toString
h=f.y.a
g=h==null?e:h.cF(n+o,q,e)
if(g==null)g=new C.ex()
f.aOF(D.l.F(g.ga8()),D.l.F(g.gag()),D.l.F(g.gah()),D.l.F(g.gap()),l,k,j,i,u,v,g)}++o;++p}++r;++s}}++x}d=f.y
d.toString
return d},
aOF(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s=k/255*m
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
case 1768188278:u=B.b4I(d,h)
v=B.b4I(e,i)
w=B.b4I(f,j)
x=k
break
case 1818391150:u=B.b4K(d,h)
v=B.b4K(e,i)
w=B.b4K(f,j)
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
case 1935897198:u=B.c5U(d,h)
v=B.c5U(e,i)
w=B.c5U(f,j)
x=k
break
case 1684633120:u=B.b4J(d,h)
v=B.b4J(e,i)
w=B.b4J(f,j)
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
case 1870030194:u=B.c5S(d,h,g,k)
v=B.c5S(e,i,g,k)
w=B.c5S(f,j,g,k)
x=k
break
case 1934387572:u=B.c5V(d,h)
v=B.c5V(e,i)
w=B.c5V(f,j)
x=k
break
case 1749838196:u=B.c5Q(d,h)
v=B.c5Q(e,i)
w=B.c5Q(f,j)
x=k
break
case 1984719220:u=B.c5W(d,h)
v=B.c5W(e,i)
w=B.c5W(f,j)
x=k
break
case 1816947060:u=B.c5R(d,h)
v=B.c5R(e,i)
w=B.c5R(f,j)
x=k
break
case 1884055924:u=B.c5T(d,h)
v=B.c5T(e,i)
w=B.c5T(f,j)
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
case 1936553316:u=B.c5P(d,h)
v=B.c5P(e,i)
w=B.c5P(f,j)
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
n.sa8(D.l.F(d*t+u*s))
n.sag(D.l.F(e*t+v*s))
n.sah(D.l.F(f*t+w*s))
n.sap(D.l.F(g*t+x*s))},
b9u(){var x,w,v=this,u=v.as
u===$&&C.b()
v.c=u.Z()
u=v.as.ad()
v.d=u
if(u!==1){v.c=0
return}x=v.as.fR(6)
for(w=0;w<6;++w)if(J.A(x.a,x.d+w)!==0){v.c=0
return}v.e=v.as.ad()
v.b=v.as.Z()
v.a=v.as.Z()
v.f=v.as.ad()
v.r=A.f5O[v.as.ad()]},
b9Z(){var x,w,v,u,t,s,r=this,q=r.at
q.d=q.b
for(q=r.z;x=r.at,x.d<x.c;){w=x.Z()
v=r.at.ad()
x=r.at
u=J.A(x.a,x.d++)
t=r.at.ho(u)
if((u&1)===0)++r.at.d
u=r.at.Z()
x=r.at
s=x.hL(u)
x.d=x.d+(s.c-s.d)
if((u&1)===1)++r.at.d
if(w===943868237)q.l(0,v,new B.aiY(v,t))}},
ba_(){var x,w,v,u,t,s,r,q,p,o=this,n=o.ax
n.d=n.b
x=n.Z()
if((x&1)!==0)++x
w=o.ax.fR(x)
n=y.l
o.w=C.c([],n)
if(x>0){v=w.ad()
u=$.lT()
u.$flags&2&&C.u(u)
u[0]=v
t=$.mL()[0]
if(t<0)t=-t
for(v=y.N,u=y.O,s=y.v,r=0;r<t;++r){q=new B.aj0(C.C(v,u),C.c([],n),C.c([],s))
q.aMJ(w)
o.w.push(q)}}for(r=0;n=o.w,r<n.length;++r)n[r].bx3(w,o)
x=o.ax.Z()
p=o.ax.fR(x)
if(x>0){p.ad()
p.ad()
p.ad()
p.ad()
p.ad()
p.ad()
p.bz()}},
ba1(){var x,w,v,u,t,s,r=this,q=r.ay
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
s=new B.MA(s)
s.azx(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=B.cgf(r.r,r.f,r.a,r.b,r.x)},
gbM(){return this.a},
gaR(){return this.b}}
B.aiY.prototype={
gbE(){return this.a}}
B.aj0.prototype={
aMJ(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a1.Z(),a0=$.fI()
a0.$flags&2&&C.u(a0)
a0[0]=d
d=$.jy()
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
a0=$.lT()
a0.$flags&2&&C.u(a0)
a0[0]=d
v=$.mL()[0]
a1.Z()
e.as.push(new B.MA(v))}u=a1.Z()
if(u!==943868237)throw C.n(C.bM("Invalid PSD layer signature: "+D.f.hG(u,16)))
e.r=a1.Z()
e.w=a1.bz()
a1.bz()
e.y=a1.bz()
if(a1.bz()!==0)throw C.n(C.bM("Invalid PSD layer data"))
t=a1.Z()
s=a1.fR(t)
if(t>0){t=s.Z()
if(t>0){r=s.fR(t)
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
if(t>0)new B.b4F().aMH(s.fR(t))
t=s.bz()
e.Q=s.ho(t)
q=4-D.f.aF(t,4)-1
if(q>0)s.d+=q
for(d=s.c,a0=e.ay,p=e.cy,o=y.C;s.d<d;){u=s.Z()
if(u!==943868237)throw C.n(C.bM("PSD invalid signature for layer additional data: "+D.f.hG(u,16)))
n=s.ho(4)
t=s.Z()
m=s.hL(t)
l=s.d+(m.c-m.d)
s.d=l
if((t&1)===1)s.d=l+1
a0.l(0,n,B.cz4(n,m))
if(n==="lrFX"){k=C.bT(o.a(a0.h(0,"lrFX")).b,null,0)
k.ad()
j=k.ad()
for(i=0;i<j;++i){k.ho(4)
h=k.ho(4)
g=k.Z()
if(h==="dsdw"){f=new B.aiX()
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
k.ho(8)
f.b=J.A(k.a,k.d++)!==0
J.A(k.a,k.d++)
J.A(k.a,k.d++)
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()}else if(h==="isdw"){f=new B.aj_()
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
k.ho(8)
f.b=J.A(k.a,k.d++)!==0
J.A(k.a,k.d++)
J.A(k.a,k.d++)
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()}else if(h==="oglw"){f=new B.aj2()
p.push(f)
f.a=k.Z()
k.Z()
k.Z()
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
k.ho(8)
f.b=J.A(k.a,k.d++)!==0
J.A(k.a,k.d++)
if(f.a===2){k.ad()
k.ad()
k.ad()
k.ad()
k.ad()}}else if(h==="iglw"){f=new B.aiZ()
p.push(f)
f.a=k.Z()
k.Z()
k.Z()
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
k.ho(8)
f.b=J.A(k.a,k.d++)!==0
J.A(k.a,k.d++)
if(f.a===2){J.A(k.a,k.d++)
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()}}else if(h==="bevl"){f=new B.aiW()
p.push(f)
f.a=k.Z()
k.Z()
k.Z()
k.Z()
k.ho(8)
k.ho(8)
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
k.ad()}}else if(h==="sofi"){f=new B.aj3()
p.push(f)
f.a=k.Z()
k.ho(4)
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
bx3(d,e){var x,w,v,u,t,s=this,r=0
for(;;){x=s.as
x===$&&C.b()
if(!(r<x.length))break
x=x[r]
w=s.e
w===$&&C.b()
v=s.f
v===$&&C.b()
x.bx9(d,w,v,e.f);++r}w=e.r
v=e.f
u=s.e
u===$&&C.b()
t=s.f
t===$&&C.b()
s.cx=B.cgf(w,v,u,t,x)}}
B.MB.prototype={}
B.b4G.prototype={
mD(d,e){var x,w,v,u=null,t=B.c5O(d)
this.a=t
x=1
if(x===1){t=t.auI()
return t}for(w=u,v=0;v<x;++v){t=this.a
e=t==null?u:t.auI()
if(e==null)continue
if(w==null){e.w=A.dZP
w=e}else w.le(e)}return w},
iT(d){return this.a=B.c5O(d)}}
B.aj7.prototype={}
B.wy.prototype={
aE(d,e){return new B.wy(this.a*e,this.b*e,this.c*e)},
a1(d,e){return new B.wy(this.a+e.a,this.b+e.b,this.c+e.c)},
a7(d,e){return new B.wy(this.a-e.a,this.b-e.b,this.c-e.c)}}
B.kX.prototype={
aE(d,e){var x=this
return new B.kX(x.a*e,x.b*e,x.c*e,x.d*e)},
a1(d,e){var x=this
return new B.kX(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
a7(d,e){var x=this
return new B.kX(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
B.Yg.prototype={
gbM(){return this.a},
gaR(){return this.b}}
B.ME.prototype={
gaR(){return this.f},
gbM(){return this.r}}
B.aj6.prototype={
gbM(){return this.a},
gaR(){return this.b}}
B.py.prototype={
sKC(d){var x=this.a,w=this.b
x.$flags&2&&C.u(x)
x[w+1]=d},
Ob(){var x=this.e,w=this.d
if(x)return new B.wy(A.lj[w>>>9],A.lj[w>>>4&31],A.eX[w&15])
else return new B.wy(A.eX[w>>>7&15],A.eX[w>>>3&15],A.xf[w&7])},
Od(){var x=this.e,w=this.d
if(x)return new B.kX(A.lj[w>>>9],A.lj[w>>>4&31],A.eX[w&15],255)
else return new B.kX(A.eX[w>>>7&15],A.eX[w>>>3&15],A.xf[w&7],A.xf[w>>>11&7])},
Oc(){var x=this.r,w=this.f
if(x)return new B.wy(A.lj[w>>>10],A.lj[w>>>5&31],A.lj[w&31])
else return new B.wy(A.eX[w>>>8&15],A.eX[w>>>4&15],A.eX[w&15])},
Oe(){var x=this.r,w=this.f
if(x)return new B.kX(A.lj[w>>>10],A.lj[w>>>5&31],A.lj[w&31],255)
else return new B.kX(A.eX[w>>>8&15],A.eX[w>>>4&15],A.eX[w&15],A.xf[w>>>12&7])},
Ir(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
r7(){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sKC(x.Ir())
x.d=w>>>1&16383
x.sKC(x.Ir())
x.e=(w>>>15&1)===1
x.sKC(x.Ir())
x.f=w>>>16&32767
x.sKC(x.Ir())
x.r=(w>>>31&1)===1
x.sKC(x.Ir())}}
B.b4R.prototype={
iT(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.aSF(d)
if(x!=null){w.a=d
return w.b=x}}x=w.aSU(d)
if(x!=null){w.a=d
return w.b=x}x=w.aSS(d)
if(x!=null){w.a=d
return w.b=x}return null},
aSU(d){var x,w,v=C.ck(d,!1,null,0)
if(v.Z()!==52)return null
if(v.Z()!==55727696)return null
x=C.c([0,0,0,0],y.t)
w=new B.ME(x)
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
aSS(d){var x,w,v=C.ck(d,!1,null,0)
if(v.Z()!==52)return null
x=new B.Yg()
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
aSF(d){var x,w,v,u,t,s,r=null,q=d.length,p=C.ck(d,!1,r,0)
if(p.Z()!==0)return r
x=new B.aj6()
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
if((D.f.cO(64,s)&q)>>>0!==0){u=D.f.cO(16,t)
v=1
break}if((D.f.cO(128,s)&q)>>>0!==0){u=D.f.cO(16,t)
break}++t}if(t===10)return r}if((v+1)*2===4)return r
x.b=x.a=u
return x},
i6(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
if(u instanceof B.aj6){u=u.a
x=v.b.gaR()
w=v.a
w.toString
return v.a1y(u,x,w)}else if(u instanceof B.Yg){u=v.a
u.toString
return v.aSR(u)}else if(u instanceof B.ME){u=v.a
u.toString
return v.aST(u)}return null},
mD(d,e){if(this.iT(d)==null)return null
return this.i6(0)},
aSR(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
if(j<52||l.b==null)return k
x=l.b
x.toString
y.M.a(x)
w=C.ck(d,!1,k,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return k
u=x.a
t=x.b
if(u*t*x.f/8>j-52)return k
switch(x.d&255){case 16:s=C.fZ(k,k,D.az,0,D.bR,t,k,0,4,k,D.az,u,!1)
for(x=s.a,x=x.gV(x);x.q();){r=x.gI()
q=J.A(w.a,w.d++)
p=J.A(w.a,w.d++)
r.sa8(p&240)
r.sag((p&15)<<4)
r.sah(q&240)
r.sap((q&15)<<4)}return s
case 17:s=C.fZ(k,k,D.az,0,D.bR,t,k,0,4,k,D.az,u,!1)
for(x=s.a,x=x.gV(x);x.q();){r=x.gI()
o=w.ad()
n=(o&1)!==0?255:0
r.sa8(o>>>8&248)
r.sag(o>>>3&248)
r.sah((o&62)<<2)
r.sap(n)}return s
case 18:s=C.fZ(k,k,D.az,0,D.bR,t,k,0,4,k,D.az,u,!1)
for(x=s.a,x=x.gV(x);x.q();){r=x.gI()
r.sa8(J.A(w.a,w.d++))
r.sag(J.A(w.a,w.d++))
r.sah(J.A(w.a,w.d++))
r.sap(J.A(w.a,w.d++))}return s
case 19:s=C.fZ(k,k,D.az,0,D.bR,t,k,0,3,k,D.az,u,!1)
for(x=s.a,x=x.gV(x);x.q();){r=x.gI()
o=w.ad()
r.sa8(o>>>8&248)
r.sag(o>>>3&252)
r.sah((o&31)<<3)}return s
case 20:s=C.fZ(k,k,D.az,0,D.bR,t,k,0,3,k,D.az,u,!1)
for(x=s.a,x=x.gV(x);x.q();){r=x.gI()
o=w.ad()
r.sa8((o&31)<<3)
r.sag(o>>>2&248)
r.sah(o>>>7&248)}return s
case 21:s=C.fZ(k,k,D.az,0,D.bR,t,k,0,3,k,D.az,u,!1)
for(x=s.a,x=x.gV(x);x.q();){r=x.gI()
r.sa8(J.A(w.a,w.d++))
r.sag(J.A(w.a,w.d++))
r.sah(J.A(w.a,w.d++))}return s
case 22:s=C.fZ(k,k,D.az,0,D.bR,t,k,0,1,k,D.az,u,!1)
for(x=s.a,x=x.gV(x);x.q();)x.gI().sa8(J.A(w.a,w.d++))
return s
case 23:s=C.fZ(k,k,D.az,0,D.bR,t,k,0,4,k,D.az,u,!1)
for(x=s.a,x=x.gV(x);x.q();){r=x.gI()
n=J.A(w.a,w.d++)
m=J.A(w.a,w.d++)
r.sa8(m)
r.sag(m)
r.sah(m)
r.sap(n)}return s
case 24:return k
case 25:return x.y===0?l.ahL(u,t,w.eB()):l.a1y(u,t,w.eB())}return k},
aST(d){var x,w,v,u=this
if(!(u.b instanceof B.ME))return null
x=C.ck(d,!1,null,0)
w=x.d+=52
v=y.i.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.ahL(v.r,v.f,x.eB())
case 3:return u.a1y(v.r,v.f,x.eB())}return null},
ahL(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=C.fZ(b5,b5,D.az,0,D.bR,c6,b5,0,3,b5,D.az,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.lW(D.K.ga0(c7),0,null),c0=new B.py(b9),c1=new B.py(J.lW(D.K.ga0(c7),0,null)),c2=new B.py(J.lW(D.K.ga0(c7),0,null)),c3=new B.py(J.lW(D.K.ga0(c7),0,null)),c4=new B.py(J.lW(D.K.ga0(c7),0,null))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=B.wz(v,x)<<1>>>0
c0.r7()
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=B.wz(l,p)<<1>>>0
c1.r7()
c2.b=B.wz(k,p)<<1>>>0
c2.r7()
c3.b=B.wz(l,o)<<1>>>0
c3.r7()
c4.b=B.wz(k,o)<<1>>>0
c4.r7()
j=c1.Ob()
i=A.dM[r][0]
h=c2.Ob()
g=A.dM[r][1]
f=c3.Ob()
e=A.dM[r][2]
d=c4.Ob()
a0=A.dM[r][3]
a1=c1.Oc()
a2=A.dM[r][0]
a3=c2.Oc()
a4=A.dM[r][1]
a5=c3.Oc()
a6=A.dM[r][2]
a7=c4.Oc()
a8=A.dM[r][3]
a9=A.UP[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.f.O((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.f.O((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.f.O((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.dG(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
a1y(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=C.fZ(a4,a4,D.az,0,D.bR,b5,a4,0,4,a4,D.az,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.lW(D.K.ga0(b6),0,null),a9=new B.py(a8),b0=new B.py(J.lW(D.K.ga0(b6),0,null)),b1=new B.py(J.lW(D.K.ga0(b6),0,null)),b2=new B.py(J.lW(D.K.ga0(b6),0,null)),b3=new B.py(J.lW(D.K.ga0(b6),0,null))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=B.wz(v,x)<<1>>>0
a9.r7()
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=B.wz(l,p)<<1>>>0
b0.r7()
b1.b=B.wz(k,p)<<1>>>0
b1.r7()
b2.b=B.wz(l,o)<<1>>>0
b2.r7()
b3.b=B.wz(k,o)<<1>>>0
b3.r7()
j=b0.Od()
i=A.dM[r][0]
h=b1.Od()
g=A.dM[r][1]
g=new B.kX(j.a*i,j.b*i,j.c*i,j.d*i).a1(0,new B.kX(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.Od()
i=A.dM[r][2]
i=g.a1(0,new B.kX(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.Od()
g=A.dM[r][3]
f=i.a1(0,new B.kX(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.Oe()
h=A.dM[r][0]
i=b1.Oe()
j=A.dM[r][1]
j=new B.kX(g.a*h,g.b*h,g.c*h,g.d*h).a1(0,new B.kX(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.Oe()
h=A.dM[r][2]
h=j.a1(0,new B.kX(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.Oe()
j=A.dM[r][3]
e=h.a1(0,new B.kX(i.a*j,i.b*j,i.c*j,i.d*j))
d=A.UP[s+t&3]
j=d[0]
i=d[1]
a0=D.f.O(f.a*j+e.a*i,7)
a1=D.f.O(f.b*j+e.b*i,7)
a2=D.f.O(f.c*j+e.c*i,7)
a3=D.f.O(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.ii(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
B.amx.prototype={
i_(d){var x,w=this
if(d.c-d.d<18)return
w.a=d.bz()
w.b=d.bz()
x=d.bz()
w.c=x<12?A.eR7[x]:A.yE
d.ad()
w.e=d.ad()
w.f=d.bz()
d.ad()
d.ad()
w.x=d.ad()
w.y=d.ad()
w.z=d.bz()
w.Q=d.bz()},
axW(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===A.mQ||w===A.mR){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0},
gbM(){return this.x},
gaR(){return this.y}}
B.mA.prototype={
H(){return"TgaImageType."+this.b}}
B.biK.prototype={
mD(d,e){if(this.iT(d)==null)return null
return this.i6(0)},
iT(d){var x,w,v,u,t=this
t.a=new B.amx(A.yE)
x=C.ck(d,!1,null,0)
t.b=x
w=x.fR(18)
t.a.i_(w)
x=t.a
if(!x.axW())return null
v=t.b
v.d+=x.a
u=x.c
if(u===A.mQ||u===A.mR)x.as=v.fR(x.e*D.f.O(x.f,3)).eB()
x=t.a
x.ax=t.b.d
return x},
i6(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===A.a7z)return x.ahK()
else if(w===A.a7y||w===A.mR)return x.aSX()
else if(w===A.mQ)return x.ahK()
return null},
ahG(d,e){var x,w,v,u,t,s,r,q=this,p=C.ck(d,!1,null,0),o=q.a.f
if(o===16){o=q.b
o===$&&C.b()
x=o.ad()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<q.a.e;++s){e.qR(s,w)
e.qQ(s,v)
e.qP(s,u)
e.qO(s,t)}}else{r=o===32
for(s=0;s<q.a.e;++s){u=J.A(p.a,p.d++)
v=J.A(p.a,p.d++)
w=J.A(p.a,p.d++)
t=r?J.A(p.a,p.d++):255
e.qR(s,w)
e.qQ(s,v)
e.qP(s,u)
e.qO(s,t)}}},
aSX(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=C.fZ(i,i,D.az,0,D.bR,a0,i,0,a1,i,D.az,d,h===A.mQ||h===A.mR)
h=x.a
if((h==null?i:h.gde())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.gde()
d.toString
j.ahG(h,d)}w=x.gbM()
v=x.gaR()-1
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
if(f){n=d.ad()
q=n>>>7&248
m=n>>>2&248
l=(n&31)<<3
k=(n&32768)!==0?0:255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.ii(u,v,q,m,l,k)
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
if(d!=null)d.ii(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}}else if(h)for(p=0;p<s;++p){d=j.b
q=J.A(d.a,d.d++)
o=u+1
d=x.a
if(d!=null)d.kl(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else if(f)for(p=0;p<s;++p){n=j.b.ad()
k=(n&32768)!==0?0:255
o=u+1
d=x.a
if(d!=null)d.ii(u,v,n>>>7&248,n>>>2&248,(n&31)<<3,k)
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
if(d!=null)d.ii(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}if(u>=w){--v
if(v<0)break
u=0}}return x},
ahK(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
g===$&&C.b()
x=i.a
g.d=x.ax
w=x.z
g=w===16
v=!0
if(!g)if(w!==32){u=x.c
if(u===A.mQ||u===A.mR){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=C.fZ(h,h,D.az,0,D.bR,t,h,0,s,h,D.az,u,x===A.mQ||x===A.mR)
x=i.a
u=x.c
if(u===A.mQ||u===A.mR){x=x.as
x.toString
u=r.a
u=u==null?h:u.gde()
u.toString
i.ahG(x,u)}if(w===8)for(q=r.gaR()-1;q>=0;--q){p=0
for(;;){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
o=J.A(g.a,g.d++)
g=r.a
if(g!=null)g.kl(p,q,o);++p}}else if(g)for(q=r.gaR()-1;q>=0;--q){p=0
for(;;){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
n=i.b.ad()
m=(n&32768)!==0?0:255
g=r.a
if(g!=null)g.ii(p,q,n>>>7&248,n>>>2&248,(n&31)<<3,m);++p}}else for(q=r.gaR()-1;q>=0;--q){p=0
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
if(g!=null)g.ii(p,q,j,k,l,m);++p}}return r}}
B.biU.prototype={
hn(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.bz()}for(x=t.a,w=0;v=t.c,d>v;){w=D.f.cG(w,v)+(t.b&A.ru[v])
d-=v
t.c=8
t.b=J.A(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.bz()}x=D.f.cG(w,d)
v=t.b
u=t.c-d
w=x+(D.f.je(v,u)&A.ru[d])
t.c=u}return w}}
B.amy.prototype={
j(d){var x=this,w=x.a,v=$.c36().h(0,w)
if(v!=null)return v.a+": "+x.b.j(0)+" "+x.c
return"<"+w+">: "+x.b.j(0)+" "+x.c},
n2(){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.fR(x*(w!==D.ap?D.nM[w.a]:0))
switch(w.a){case 1:return u.e=new C.qI(new Uint8Array(C.b5(v.fR(x).eB())))
case 2:return u.e=new C.zc(x===0?"":v.ho(x-1))
case 7:return u.e=new C.qI(new Uint8Array(C.b5(v.fR(x).eB())))
case 3:return u.e=C.ce_(v,x)
case 4:return u.e=C.cdV(v,x)
case 5:return u.e=C.cdW(v,x)
case 11:return u.e=C.ce1(v,x)
case 12:return u.e=C.cdU(v,x)
case 6:return u.e=new C.tC(new Int8Array(C.b5(J.c3p(D.K.ga0(v.eB()),0,x))))
case 8:return u.e=C.cdZ(v,x)
case 9:return u.e=C.cdX(v,x)
case 10:return u.e=C.cdY(v,x)
case 0:return null}}}
B.biW.prototype={
bmX(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.f.ao(u.a+7,8)
for(w=0,v=0;v<g;++v){u.a1w(d,w,f)
w+=x}},
a1w(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){while(w){v=p.vV(10)
u=A.UU[v]
t=D.f.O(u,1)&15
if(t===12){u=A.xa[(v<<2&12|p.mp(2))>>>0]
s=D.f.O(u,1)
f+=D.f.O(u,4)&4095
p.ji(4-(s&7))}else if(t===0)throw C.n(C.bM("TIFFFaxDecoder0"))
else if(t===15)throw C.n(C.bM("TIFFFaxDecoder1"))
else{f+=D.f.O(u,5)&2047
p.ji(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}while(!w){u=A.Tf[p.mp(4)]
r=u>>>5&2047
q=!0
if(r===100){u=A.Ut[p.vV(9)]
t=D.f.O(u,1)&15
r=D.f.O(u,5)&2047
if(t===12){p.ji(5)
u=A.xa[p.mp(4)]
s=D.f.O(u,1)
r=D.f.O(u,4)&4095
p.nA(d,e,f,r)
f+=r
p.ji(4-(s&7))}else if(t===15)throw C.n(C.bM("TIFFFaxDecoder2"))
else{p.nA(d,e,f,r)
f+=r
p.ji(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=A.Tb[p.mp(2)]
r=u>>>5&2047
p.nA(d,e,f,r)
f+=r
p.ji(2-(u>>>1&15))
p.f[p.d++]=f}else{p.nA(d,e,f,r)
f+=r
p.ji(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
bmY(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.f.ao(x+7,8)
v=C.bo(2,null,!1,y.I)
e.at=a3&1
e.as=a3>>>2&1
if(e.anq()!==1)throw C.n(C.bM("TIFFFaxDecoder3"))
e.a1w(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.anq()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
for(;;){r.toString
if(!(r<x))break
e.ajD(q,p,v)
n=v[0]
m=v[1]
l=A.UQ[e.mp(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.nA(d,u,r,m-r)}e.ji(7-j)
r=m
q=r}else if(k===1){e.ji(7-j)
i=o+1
h=i+1
if(p){r+=e.QB()
e.f[o]=r
g=e.QA()
e.nA(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.QA()
e.nA(d,u,r,g)
r+=g
e.f[o]=r
r+=e.QB()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.nA(d,u,r,f-r)
e.ji(7-j)}else throw C.n(C.bM("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.a1w(d,u,a1)
u+=w}},
bn2(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.f.ao(x+7,8)
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
a2.ajD(p,o,v)
m=v[0]
l=v[1]
k=A.UQ[a2.mp(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.nA(a3,t,q,l-q)}a2.ji(7-i)
q=l
p=q}else if(j===1){a2.ji(7-i)
h=n+1
g=h+1
if(o){q+=a2.QB()
r[n]=q
f=a2.QA()
a2.nA(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.QA()
a2.nA(a3,t,q,f)
q+=f
r[n]=q
q+=a2.QB()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.nA(a3,t,q,e-q)
a2.ji(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.mp(3)!==7)throw C.n(C.bM("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){while(a2.mp(1)!==1)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.mp(1)===0
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
a2.nA(a3,t,q,1);++q
n=h}}}else throw C.n(C.bM("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
QB(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.vV(10)
u=A.UU[v]
t=D.f.O(u,1)&15
if(t===12){u=A.xa[(v<<2&12|r.mp(2))>>>0]
s=D.f.O(u,1)
x+=D.f.O(u,4)&4095
r.ji(4-(s&7))}else if(t===0)throw C.n(C.bM("TIFFFaxDecoder0"))
else if(t===15)throw C.n(C.bM("TIFFFaxDecoder1"))
else{x+=D.f.O(u,5)&2047
r.ji(10-t)
if((u&1)===0)w=!1}}return x},
QA(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=A.Tf[r.mp(4)]
u=v>>>5&2047
if(u===100){v=A.Ut[r.vV(9)]
t=D.f.O(v,1)&15
s=D.f.O(v,5)
if(t===12){r.ji(5)
v=A.xa[r.mp(4)]
s=D.f.O(v,1)
x+=D.f.O(v,4)&4095
r.ji(4-(s&7))}else if(t===15)throw C.n(C.bM("TIFFFaxDecoder2"))
else{x+=s&2047
r.ji(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=A.Tb[r.mp(2)]
x+=v>>>5&2047
r.ji(2-(v>>>1&15))}else{x+=u
r.ji(4-(v>>>1&15))}w=!0}}return x},
anq(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.vV(12)!==1)throw C.n(C.bM("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.vV(x)!==0)throw C.n(C.bM(u))
if(x<4)if(v.vV(8)!==0)throw C.n(C.bM(u))
while(w=v.vV(8),w!==1)if(w!==0)throw C.n(C.bM(u))}if(v.at===0)return 1
else return v.mp(1)},
ajD(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
nA(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.f.O(s,3),p=s&7
if(p>0){x=D.f.cG(1,7-p)
w=J.A(d.a,d.d+q)
for(;;){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.l(0,q,w)}q=D.f.O(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.bg(d.a,d.d+q,255)
s+=8}while(s<r){q=D.f.O(s,3)
v=J.A(d.a,d.d+q)
t=D.f.cG(1,7-(s&7))
J.bg(d.a,d.d+q,(v|t)>>>0);++s}},
vV(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.r
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
r=A.pl[J.A(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=A.pl[J.A(u,x+j)&255]
else{t=A.pl[J.A(u,x+j)&255]
j=k.r
s=A.pl[J.A(j.a,j.d+(v+2))&255]}}}else throw C.n(C.bM("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.f.cG(r&A.ru[q],p)
l=D.f.eh(t&A.E0[n],8-n)
if(o!==0){l=D.f.cG(l,o)|D.f.eh(s&A.E0[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
mp(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
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
s=A.pl[J.A(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=A.pl[J.A(m.a,m.d+(v+1))&255]}}else throw C.n(C.bM("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.f.eh(s&A.ru[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.f.cG(s&A.ru[r],-p)|D.f.eh(t&A.E0[q],8-q))>>>0
m=n.x
m.toString
n.x=m+1
n.w=q}return o},
ji(d){var x,w=this,v=w.w
v.toString
x=v-d
if(x<0){v=w.x
v.toString
w.x=v-1
w.w=8+x}else w.w=x}}
B.amz.prototype={
aMV(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=C.bT(d,g,0),e=d.ad()
for(x=h.a,w=0;w<e;++w){v=d.ad()
u=d.ad()
t=D.UC[u]
s=D.nM[u]
r=d.Z()
if(r*s>4)q=d.Z()
else{q=d.d
d.d=q+4}p=new B.amy(v,t,r,q,f)
x.l(0,v,p)
if(v===256){o=p.n2()
o=o==null?g:o.F(0)
h.b=o==null?0:o}else if(v===257){o=p.n2()
o=o==null?g:o.F(0)
h.c=o==null?0:o}else if(v===262){n=p.n2()
m=n==null?g:n.F(0)
if(m==null)m=17
if(m<17)h.d=A.ePK[m]
else h.d=A.Gp}else if(v===259){o=p.n2()
o=o==null?g:o.F(0)
h.e=o==null?0:o}else if(v===258){o=p.n2()
o=o==null?g:o.F(0)
h.f=o==null?0:o}else if(v===277){o=p.n2()
o=o==null?g:o.F(0)
h.r=o==null?0:o}else if(v===317){o=p.n2()
o=o==null?g:o.F(0)
h.Q=o==null?0:o}else if(v===339){o=p.n2()
n=o==null?g:o.F(0)
h.x=A.eQe[n==null?0:n]}else if(v===320){n=p.n2()
if(n!=null){o=J.crk(D.K.ga0(n.qE()))
h.id=o
h.k1=0
o=o.length/3|0
h.k2=o
h.k3=o*2}}}o=h.id
l=o!=null
if(l&&h.d===A.Gq)h.r=1
if(h.b===0||h.c===0)return
if(l&&h.f===8){k=o.length
for(l=o.$flags|0,w=0;w<k;++w){j=o[w]
l&2&&C.u(o)
o[w]=j>>>8}}if(h.d===A.Go)h.z=!0
h.w=h.r
if(x.aL(324)){h.ay=h.D0(322)
h.ch=h.D0(323)
h.CW=h.SK(324)
h.cx=h.SK(325)}else{h.ay=h.SJ(322,h.b)
if(!x.aL(278))h.ch=h.SJ(323,h.c)
else{i=h.D0(278)
if(i===-1)h.ch=h.c
else h.ch=i}h.CW=h.SK(273)
h.cx=h.SK(279)}o=h.b
l=h.ay
h.cy=D.f.ev(o+l-1,l)
l=h.c
o=h.ch
h.db=D.f.ev(l+o-1,o)
h.dy=h.SJ(266,1)
h.fr=h.D0(292)
h.fx=h.D0(293)
h.D0(338)
switch(h.d.a){case 0:case 1:x=h.f
if(x===1&&h.r===1)h.y=A.Gn
else if(x===4&&h.r===1)h.y=A.fvB
else if(D.f.aF(x,8)===0){x=h.r
if(x===1)h.y=A.fvC
else if(x===2)h.y=A.fvD
else h.y=A.tk}break
case 2:if(D.f.aF(h.f,8)===0){x=h.r
if(x===3)h.y=A.a7D
else if(x===4)h.y=A.fvF
else h.y=A.tk}break
case 3:x=!1
if(h.r===1)if(h.id!=null){x=h.f
x=x===4||x===8||x===16}if(x)h.y=A.fvE
break
case 4:if(h.f===1&&h.r===1)h.y=A.Gn
break
case 6:if(h.e===7&&h.f===8&&h.r===3)h.y=A.a7D
else{if(x.aL(530)){n=x.h(0,530).n2()
h.as=n.F(0)
x=h.at=n.hq(0,1)}else x=h.at=h.as=2
o=h.as
o===$&&C.b()
if(o*x===1)h.y=A.tk
else if(h.f===8&&h.r===3)h.y=A.fvG}break
case 5:if(D.f.aF(h.f,8)===0)h.y=A.tk
x=h.r
if(x===4)h.w=3
else if(x===5)h.w=4
break
default:if(D.f.aF(h.f,8)===0)h.y=A.tk
break}},
bR(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.x,d=e===A.tj,a0=e===A.bH
e=g.f
if(e===1)x=D.eT
else if(e===2)x=D.kF
else{if(e===4)e=D.kG
else if(d&&e===16)e=D.lT
else if(d&&e===32)e=D.mx
else if(d&&e===64)e=D.nz
else if(a0&&e===8)e=D.nA
else if(a0&&e===16)e=D.nB
else if(a0&&e===32)e=D.nC
else if(e===16)e=D.cV
else e=e===32?D.my:D.az
x=e}w=g.id!=null&&g.d===A.Gq
v=w?3:g.w
e=g.b
u=C.fZ(f,f,x,0,D.bR,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.gde()
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
e.ni(k,t[l],t[m],t[n])}}j=0
i=0
for(;;){e=g.db
e===$&&C.b()
if(!(j<e))break
h=0
for(;;){e=g.cy
e===$&&C.b()
if(!(h<e))break
g.aSY(a1,u,h,j);++h;++i}++j}return u},
aSY(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.y===A.Gn){a8.aSI(b0,b1,b2,b3)
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
else if(u===5){w=C.ck(new Uint8Array(p),!1,a9,0)
v=B.ceN()
try{v.auH(C.bT(b0,x,0),w.a)}catch(o){}if(a8.Q===2)for(n=0;n<a8.ch;++n){m=a8.r
u=a8.ay
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.A(u.a,u.d+l)
j=w
i=a8.r
i=J.A(j.a,j.d+(l-i))
J.bg(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=C.ck(new Uint8Array(p),!1,a9,0)
a8.ahJ(b0,p,w.a)}else if(u===32946)w=C.ck(D.ne.A_(b0.NB(0,0,x)),!1,a9,0)
else if(u===8)w=C.ck(D.ne.A_(b0.NB(0,0,x)),!1,a9,0)
else if(u===6){a8.b39(new B.W9().bR(y.D.a(b0.NB(0,0,x))),b1,s,q,a8.ay,a8.ch)
return}else throw C.n(C.bM("Unsupported Compression Type: "+u))
h=C.c([0,0,0],y.t)
for(g=q,f=0;f<a8.ch;++f,++g)for(e=s,d=0;d<a8.ay;++d,++e){u=w
if(u.d>=u.c||e>=a8.b||g>=a8.c)break
u=a8.r
if(u===1){u=a8.x
if(u===A.tj){u=a8.f
if(u===32){u=w.Z()
r=$.fI()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.Cv()[0]}else if(u===64)a0=w.YM()
else if(u===16){u=w.ad()
r=$.fX
a0=(r!=null?r:C.hI())[u]}else a0=0
if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kl(e,g,a0)}}else{r=a8.f
if(r===8)if(u===A.bH){u=w
u=J.A(u.a,u.d++)
r=$.lU()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.mM()[0]}else{u=w
a0=J.A(u.a,u.d++)}else if(r===16)if(u===A.bH){u=w.ad()
r=$.lT()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.mL()[0]}else a0=w.ad()
else if(r===32)if(u===A.bH){u=w.Z()
r=$.fI()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.jy()[0]}else a0=w.Z()
else a0=0
if(a8.d===A.Go){u=b1.a
a1=u==null?a9:u.gbs()
a0=(a1==null?0:a1)-a0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kl(e,g,a0)}}}else if(u===2){u=a8.f
if(u===8){if(a8.x===A.bH){u=w
u=J.A(u.a,u.d++)
r=$.lU()
r.$flags&2&&C.u(r)
r[0]=u
a2=$.mM()[0]}else{u=w
a2=J.A(u.a,u.d++)}if(a8.x===A.bH){u=w
u=J.A(u.a,u.d++)
r=$.lU()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mM()[0]}else{u=w
a3=J.A(u.a,u.d++)}}else if(u===16){if(a8.x===A.bH){u=w.ad()
r=$.lT()
r.$flags&2&&C.u(r)
r[0]=u
a2=$.mL()[0]}else a2=w.ad()
if(a8.x===A.bH){u=w.ad()
r=$.lT()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mL()[0]}else a3=w.ad()}else if(u===32){if(a8.x===A.bH){u=w.Z()
r=$.fI()
r.$flags&2&&C.u(r)
r[0]=u
a2=$.jy()[0]}else a2=w.Z()
if(a8.x===A.bH){u=w.Z()
r=$.fI()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.jy()[0]}else a3=w.Z()}else{a2=0
a3=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.dG(e,g,a2,a3,0)}}else if(u===3){u=a8.x
if(u===A.tj){u=a8.f
if(u===32){u=w.Z()
r=$.fI()
r.$flags&2&&C.u(r)
r[0]=u
u=$.Cv()
a4=u[0]
r[0]=w.Z()
a5=u[0]
r[0]=w.Z()
a6=u[0]}else{a5=0
a6=0
if(u===64)a4=w.YM()
else if(u===16){u=w.ad()
r=$.fX
a4=(r!=null?r:C.hI())[u]
u=w.ad()
r=$.fX
a5=(r!=null?r:C.hI())[u]
u=w.ad()
r=$.fX
a6=(r!=null?r:C.hI())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.dG(e,g,a4,a5,a6)}}else{r=a8.f
if(r===8){if(u===A.bH){u=w
u=J.A(u.a,u.d++)
r=$.lU()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.mM()[0]}else{u=w
a4=J.A(u.a,u.d++)}if(a8.x===A.bH){u=w
u=J.A(u.a,u.d++)
r=$.lU()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mM()[0]}else{u=w
a5=J.A(u.a,u.d++)}if(a8.x===A.bH){u=w
u=J.A(u.a,u.d++)
r=$.lU()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mM()[0]}else{u=w
a6=J.A(u.a,u.d++)}}else if(r===16){if(u===A.bH){u=w.ad()
r=$.lT()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.mL()[0]}else a4=w.ad()
if(a8.x===A.bH){u=w.ad()
r=$.lT()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mL()[0]}else a5=w.ad()
if(a8.x===A.bH){u=w.ad()
r=$.lT()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mL()[0]}else a6=w.ad()}else if(r===32){if(u===A.bH){u=w.Z()
r=$.fI()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.jy()[0]}else a4=w.Z()
if(a8.x===A.bH){u=w.Z()
r=$.fI()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.jy()[0]}else a5=w.Z()
if(a8.x===A.bH){u=w.Z()
r=$.fI()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.jy()[0]}else a6=w.Z()}else{a4=0
a5=0
a6=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.dG(e,g,a4,a5,a6)}}}else if(u>=4)if(a8.x===A.tj){u=a8.f
if(u===32){u=w.Z()
r=$.fI()
r.$flags&2&&C.u(r)
r[0]=u
u=$.Cv()
a4=u[0]
r[0]=w.Z()
a5=u[0]
r[0]=w.Z()
a6=u[0]
r[0]=w.Z()
a7=u[0]}else{a5=0
a6=0
a7=0
if(u===64)a4=w.YM()
else if(u===16){u=w.ad()
r=$.fX
a4=(r!=null?r:C.hI())[u]
u=w.ad()
r=$.fX
a5=(r!=null?r:C.hI())[u]
u=w.ad()
r=$.fX
a6=(r!=null?r:C.hI())[u]
u=w.ad()
r=$.fX
a7=(r!=null?r:C.hI())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.ii(e,g,a4,a5,a6,a7)}}else{u=b1.a
a3=u==null?a9:u.gbs()
if(a3==null)a3=0
u=a8.f
if(u===8){if(a8.x===A.bH){u=w
u=J.A(u.a,u.d++)
r=$.lU()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.mM()[0]}else{u=w
a4=J.A(u.a,u.d++)}if(a8.x===A.bH){u=w
u=J.A(u.a,u.d++)
r=$.lU()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mM()[0]}else{u=w
a5=J.A(u.a,u.d++)}if(a8.x===A.bH){u=w
u=J.A(u.a,u.d++)
r=$.lU()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mM()[0]}else{u=w
a6=J.A(u.a,u.d++)}if(a8.x===A.bH){u=w
u=J.A(u.a,u.d++)
r=$.lU()
r.$flags&2&&C.u(r)
r[0]=u
a7=$.mM()[0]}else{u=w
a7=J.A(u.a,u.d++)}if(a8.r===5)if(a8.x===A.bH){u=w
u=J.A(u.a,u.d++)
r=$.lU()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mM()[0]}else{u=w
a3=J.A(u.a,u.d++)}}else if(u===16){if(a8.x===A.bH){u=w.ad()
r=$.lT()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.mL()[0]}else a4=w.ad()
if(a8.x===A.bH){u=w.ad()
r=$.lT()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mL()[0]}else a5=w.ad()
if(a8.x===A.bH){u=w.ad()
r=$.lT()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mL()[0]}else a6=w.ad()
if(a8.x===A.bH){u=w.ad()
r=$.lT()
r.$flags&2&&C.u(r)
r[0]=u
a7=$.mL()[0]}else a7=w.ad()
if(a8.r===5)if(a8.x===A.bH){u=w.ad()
r=$.lT()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mL()[0]}else a3=w.ad()}else if(u===32){if(a8.x===A.bH){u=w.Z()
r=$.fI()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.jy()[0]}else a4=w.Z()
if(a8.x===A.bH){u=w.Z()
r=$.fI()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.jy()[0]}else a5=w.Z()
if(a8.x===A.bH){u=w.Z()
r=$.fI()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.jy()[0]}else a6=w.Z()
if(a8.x===A.bH){u=w.Z()
r=$.fI()
r.$flags&2&&C.u(r)
r[0]=u
a7=$.jy()[0]}else a7=w.Z()
if(a8.r===5)if(a8.x===A.bH){u=w.Z()
r=$.fI()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.jy()[0]}else a3=w.Z()}else{a4=0
a5=0
a6=0
a7=0}if(a8.d===A.a7E){B.clx(a4,a5,a6,a7,h)
a4=h[0]
a5=h[1]
a6=h[2]
a7=a3}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.ii(e,g,a4,a5,a6,a7)}}}}else throw C.n(C.bM("Unsupported bitsPerSample: "+u))},
b39(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.cF(v,x,null)
if(u==null)u=new C.ex()
e.yf(v+f,w,u)}},
aSI(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cy
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
if(r===32773){q=D.f.aF(a2,8)===0?D.f.ao(a2,8)*u:(D.f.ao(a2,8)+1)*u
x=C.ck(new Uint8Array(a2*u),!1,a1,0)
a0.ahJ(a3,q,x.a)}else if(r===5){x=C.ck(new Uint8Array(a2*u),!1,a1,0)
B.ceN().auH(C.bT(a3,s,0),x.a)
if(a0.Q===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.A(a2.a,a2.d+n)
r=x
m=a0.r
m=J.A(r.a,r.d+(n-m))
J.bg(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=C.ck(new Uint8Array(a2*u),!1,a1,0)
try{B.c6E(a0.dy,a0.ay,a0.ch).bmX(x,a3,0,a0.ch)}catch(l){}}else if(r===3){x=C.ck(new Uint8Array(a2*u),!1,a1,0)
try{B.c6E(a0.dy,a0.ay,a0.ch).bmY(x,a3,0,a0.ch,a0.fr)}catch(l){}}else if(r===4){x=C.ck(new Uint8Array(a2*u),!1,a1,0)
try{B.c6E(a0.dy,a0.ay,a0.ch).bn2(x,a3,0,a0.ch,a0.fx)}catch(l){}}else if(r===8)x=C.ck(D.ne.A_(a3.NB(0,0,s)),!1,a1,0)
else if(r===32946)x=C.ck(D.ne.A_(a3.NB(0,0,s)),!1,a1,0)
else if(r===1)x=a3
else throw C.n(C.bM("Unsupported Compression Type: "+r))
k=new B.biU(x)
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
a2=k.hn(1)
u=a4.a
if(a2===0){if(u!=null)u.dG(e,g,i,0,0)}else if(u!=null)u.dG(e,g,h,0,0)}k.c=0}},
ahJ(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.cg(f),w=0,v=0;v<e;){u=w+1
t=J.A(d.a,d.d+w)
s=$.lU()
s.$flags&2&&C.u(s)
s[0]=t
r=$.mM()[0]
if(r>=0&&r<=127)for(t=r+1,w=u,q=0;q<t;++q,v=p,w=u){p=v+1
u=w+1
x.l(f,v,J.A(d.a,d.d+w))}else{t=r<=-1&&r>=-127
w=u+1
if(t){o=J.A(d.a,d.d+u)
for(t=-r+1,q=0;q<t;++q,v=p){p=v+1
x.l(f,v,o)}}}}},
SJ(d,e){var x=this.a
if(!x.aL(d))return e
x=x.h(0,d).n2()
x=x==null?null:x.F(0)
return x==null?0:x},
D0(d){return this.SJ(d,0)},
SK(d){var x,w=this.a
if(!w.aL(d))return null
x=w.h(0,d)
w=x.n2()
w.toString
return C.ED(x.c,w.gv2(w),!0,y.p)}}
B.H_.prototype={
H(){return"TiffFormat."+this.b}}
B.jn.prototype={
H(){return"TiffPhotometricType."+this.b}}
B.pO.prototype={
H(){return"TiffImageType."+this.b}}
B.biX.prototype={
gbM(){return this.a},
gaR(){return this.b}}
B.aXs.prototype={
auH(d,e){var x,w,v,u,t,s,r=this
r.r=e
x=J.aY(e)
r.w=0
w=y.D.a(d.a)
r.e=w
r.f=w.length
r.b=d.d
if(w[0]===0&&w[1]===1)throw C.n(C.bM("Invalid LZW Data"))
r.alb()
r.d=r.c=0
v=r.a2v()
w=r.x
u=0
for(;;){if(!(v!==257&&r.w<x))break
if(v===256){r.alb()
v=r.a2v()
r.as=0
if(v===257)break
J.bg(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.ajT(v)
t=r.as
t===$&&C.b()
s=t-1
for(;s>=0;--s)J.bg(r.r,r.w++,w[s])
r.afg(u,w[r.as-1])}else{r.ajT(u)
t=r.as
t===$&&C.b()
s=t-1
for(;s>=0;--s)J.bg(r.r,r.w++,w[s])
J.bg(r.r,r.w++,w[r.as-1])
r.afg(u,w[r.as-1])}u=v}v=r.a2v()}},
afg(d,e){var x,w=this,v=w.y
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
ajT(d){var x,w,v,u,t,s,r=this
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
a2v(){var x,w,v,u,t=this,s=t.b,r=t.f
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
return D.f.eh(t.c,s)&A.ezH[w-9]},
alb(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.bM.fC(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&C.u(x)
x[w]=w}v.a=9
v.Q=258}}
B.biV.prototype={
iT(d){var x=this,w=C.ck(d,!1,null,0)
x.c=w
w=x.a4w(w)
x.a=w
if(w!=null)x.b=B.c4A(C.ck(d,!1,null,0))
return x.a},
i6(d){var x,w,v=this.a
if(v==null)return null
v=v.f[d]
x=this.c
x===$&&C.b()
w=v.bR(x)
v=this.b
if(v!=null)w.e=v
return w},
mD(d,e){var x=this,w=C.ck(d,!1,null,0)
x.c=w
w=x.a4w(w)
x.a=w
if(w==null)return null
return x.i6(0)},
a4w(d){var x,w,v,u,t,s,r,q,p,o=null,n=C.c([],y.L),m=new B.biX(n),l=d.ad()
if(l!==18761&&l!==19789)return o
if(l===19789)d.e=!0
else d.e=!1
v=d.ad()
m.d=v
if(v!==42)return o
u=d.Z()
t=C.bT(d,o,0)
t.d=u
x=t
for(v=y.p,s=y.j;u!==0;){w=null
try{r=new B.amz(C.C(v,s),A.Gp,A.a7C,A.fvH)
r.aMV(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.Z()
if(u!==0)x.d=u}return n.length!==0?m:o}}
B.bkQ.prototype={
L0(){var x,w,v=this.a,u=v.po()
if((u&1)!==0)return!1
if((u>>>1&7)>3)return!1
x=u>>>4&1
if(x===0)return!1
w=this.f
w.c=x
w.d=u>>>5
if(v.po()!==2752925)return!1
x=this.b
x.a=v.ad()
x.b=v.ad()
return!0},
oM(){var x,w,v,u=this,t=null
if(!u.aX7())return t
x=u.b
w=x.a
u.d=C.fZ(t,t,D.az,0,D.bR,x.b,t,0,4,t,D.az,w,!1)
u.b2o()
if(!u.b7U())return t
x=x.w
if(x.length!==0){v=C.ck(new C.bL(x),!1,t,0)
x=u.d
x.toString
x.e=B.c4A(v)}return u.d},
aX7(){var x,w,v,u,t=this
if(!t.L0())return!1
t.fr=B.cD5()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new B.and(v,u,new Int32Array(2))}x=t.r
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
x=B.cia(v.hL(x))
t.c=x
v.d+=u.d
x.eo(1)
t.c.eo(1)
t.b82(t.x,t.fr)
t.b7T()
if(!t.b7Y(v))return!1
t.b8_()
t.c.eo(1)
t.b7Z()
return!0},
b82(d,e){var x,w,v,u=this,t=u.c
t===$&&C.b()
t=t.eo(1)!==0
d.a=t
if(t){d.b=u.c.eo(1)!==0
if(u.c.eo(1)!==0){d.c=u.c.eo(1)!==0
for(t=d.d,x=0;x<4;++x){if(u.c.eo(1)!==0){w=u.c
v=w.eo(7)
w=w.eo(1)===1?-v:v}else w=0
t.$flags&2&&C.u(t)
t[x]=w}for(t=d.e,x=0;x<4;++x){if(u.c.eo(1)!==0){w=u.c
v=w.eo(6)
w=w.eo(1)===1?-v:v}else w=0
t.$flags&2&&C.u(t)
t[x]=w}}if(d.b)for(x=0;x<3;++x){t=e.a
w=u.c.eo(1)!==0?u.c.eo(8):255
t.$flags&2&&C.u(t)
t[x]=w}}else d.b=!1
return!0},
b7T(){var x,w,v,u=this,t=u.w,s=u.c
s===$&&C.b()
t.a=s.eo(1)!==0
t.b=u.c.eo(6)
t.c=u.c.eo(3)
s=u.c.eo(1)!==0
t.d=s
if(s)if(u.c.eo(1)!==0){for(s=t.e,x=0;x<4;++x)if(u.c.eo(1)!==0){w=u.c
v=w.eo(6)
w=w.eo(1)===1?-v:v
s.$flags&2&&C.u(s)
s[x]=w}for(s=t.f,x=0;x<4;++x)if(u.c.eo(1)!==0){w=u.c
v=w.eo(6)
w=w.eo(1)===1?-v:v
s.$flags&2&&C.u(s)
s[x]=w}}if(t.b===0)s=0
else s=t.a?1:2
u.b8=s
return!0},
b7Y(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&C.b()
p=D.f.cO(1,p.eo(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.PB(3,v)
s=w+((J.A(t.a,t.d)|J.A(t.a,t.d+1)<<8|J.A(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new B.a0A(d.yv(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=B.cia(d.yv(q-w,d.d-d.b+w))
return w<q},
b8_(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&C.b()
x=h.eo(7)
w=i.c.eo(1)!==0?i.c.Gw(4):0
v=i.c.eo(1)!==0?i.c.Gw(4):0
u=i.c.eo(1)!==0?i.c.Gw(4):0
t=i.c.eo(1)!==0?i.c.Gw(4):0
s=i.c.eo(1)!==0?i.c.Gw(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
j=A.DN[j]
k.$flags&2&&C.u(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=A.DO[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=A.DN[k]
j.$flags&2&&C.u(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=A.DO[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=A.DN[j]
k.$flags&2&&C.u(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=A.DO[j]}},
b7Z(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&C.b()
s=t.fG(A.eZD[x][w][v][u])!==0?r.c.eo(8):A.ez7[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&C.u(t)
t[u]=s}t=r.c
t===$&&C.b()
t=t.eo(1)!==0
r.fx=t
if(t)r.fy=r.c.eo(8)},
b9c(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.b8
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
b2o(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.a5=j
x=J.jK(4,y.K)
for(j=y.d,w=0;w<4;++w)x[w]=C.c([new B.Ha(),new B.Ha()],j)
m.D=x
j=m.at
j.toString
x=J.jK(j,y.bt)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new B.ane(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.b8
t.toString
s=A.D4[t]
r=s*u
q=(s/2|0)*j
m.p1=C.ck(new Uint8Array(16*u+r),!1,l,r)
j=m.R8
j.toString
m.p2=C.ck(new Uint8Array(8*j+q),!1,l,q)
j=m.R8
j.toString
m.p3=C.ck(new Uint8Array(8*j+q),!1,l,q)
j=k.a
m.RG=C.ck(new Uint8Array(j),!1,l,0)
p=k.a+1>>>1
m.rx=C.ck(new Uint8Array(p),!1,l,0)
m.ry=C.ck(new Uint8Array(p),!1,l,0)
k=m.b8
k.toString
o=A.D4[k]
if(k===2)m.ch=m.ay=0
else{k=m.y
k===$&&C.b()
k=D.f.ao(k-o,16)
m.ay=k
j=m.Q
j.toString
j=D.f.ao(j-o,16)
m.ch=j
if(k<0)m.ay=0
if(j<0)m.ch=0}k=m.as
k.toString
k=D.f.ao(k+15+o,16)
m.cx=k
j=m.z
j===$&&C.b()
j=D.f.ao(j+15+o,16)
m.CW=j
u=m.at
u.toString
if(j>u)m.CW=u
j=m.ax
j.toString
if(k>j)m.cx=j
n=u+1
x=J.jK(n,y.q)
for(v=0;v<n;++v)x[v]=new B.anb()
m.k3=x
k=m.at
k.toString
x=J.jK(k,y._)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new B.anc(j,new Uint8Array(16))}m.b7=x
k=m.at
k.toString
m.k4=C.bo(k,l,!1,y.B)
m.b9c()
B.cCx()
m.e=new B.bkR()
return!0},
b7U(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
t=j.b7
t===$&&C.b()
p=t[u]
if(w.b){u=j.c
u===$&&C.b()
u=u.fG(j.fr.a[0])
t=j.c
o=j.fr
j.k1=u===0?t.fG(o.a[1]):2+t.fG(o.a[2])}u=j.fx
u===$&&C.b()
if(u){u=j.c
u===$&&C.b()
t=j.fy
t===$&&C.b()
n=u.fG(t)!==0}else n=!1
j.b7X()
if(!n)n=j.b80(q,s)
else{r.a=q.a=0
u=p.b
u===$&&C.b()
if(!u)r.b=q.b=0
p.f=p.e=0}u=j.b8
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
D.K.fC(x,0,4,0)
j.y1=0
j.bai()
u=j.b8
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&C.b()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.aW0(k))return!1
u=++j.y2}return!0},
bai(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.y2,a5=a2.ok
a5===$&&C.b()
x=C.ck(a5,!1,a3,40)
w=C.ck(a2.ok,!1,a3,584)
v=C.ck(a2.ok,!1,a3,600)
a5=a4>0
u=0
for(;;){t=a2.at
t.toString
if(!(u<t))break
t=a2.b7
t===$&&C.b()
s=t[u]
if(u>0){for(r=-1;r<16;++r){t=r*32
x.pd(t-4,4,x,t+12)}for(r=-1;r<8;++r){t=r*32
q=t-4
t+=4
w.pd(q,4,w,t)
v.pd(q,4,v,t)}}else{for(r=0;r<16;++r)J.bg(x.a,x.d+(r*32-1),129)
for(r=0;r<8;++r){t=r*32-1
J.bg(w.a,w.d+t,129)
J.bg(v.a,v.d+t,129)}if(a5){J.bg(v.a,v.d+-33,129)
J.bg(w.a,w.d+-33,129)
J.bg(x.a,x.d+-33,129)}}t=a2.k2
t===$&&C.b()
p=t[u]
o=s.a
n=s.e
if(a5){x.xl(-32,16,p.a)
w.xl(-32,8,p.b)
v.xl(-32,8,p.c)}else if(u===0){t=x.a
q=x.d+-33
J.t1(t,q,q+21,127)
q=w.a
t=w.d+-33
J.t1(q,t,t+9,127)
t=v.a
q=v.d+-33
J.t1(t,q,q+9,127)}t=s.b
t===$&&C.b()
if(t){m=C.bT(x,a3,-16)
l=m.NH()
if(a5){t=a2.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.t1(q,k,k+4,t)}else m.xl(0,4,a2.k2[u+1].a)}j=l[0]
l.$flags&2&&C.u(l)
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=C.bT(x,a3,A.Vh[i])
A.eRI[t[i]].$1(h)
n.toString
q=i*16
a2.aia(n,new C.kO(o,q,Math.min(384,384),q,!1),h)}}else{t=B.cid(u,a4,s.c[0])
t.toString
A.f4S[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=C.bT(x,a3,A.Vh[i])
n.toString
t=i*16
a2.aia(n,new C.kO(o,t,Math.min(384,384),t,!1),h)}}t=s.f
t===$&&C.b()
q=B.cid(u,a4,s.d)
q.toString
A.Uz[q].$1(w)
A.Uz[q].$1(v)
q=Math.min(384,384)
g=new C.kO(o,256,q,256,!1)
if((t&255)!==0){k=a2.e
if((t&170)!==0){k===$&&C.b()
k.td(g,w)
k.td(C.bT(g,a3,16),C.bT(w,a3,4))
f=C.bT(g,a3,32)
e=C.bT(w,a3,128)
k.td(f,e)
k.td(C.bT(f,a3,16),C.bT(e,a3,4))}else{k===$&&C.b()
k.aAA(g,w)}}d=new C.kO(o,320,q,320,!1)
t=t>>>8
if((t&255)!==0){q=a2.e
if((t&170)!==0){q===$&&C.b()
q.td(d,v)
q.td(C.bT(d,a3,16),C.bT(v,a3,4))
t=C.bT(d,a3,32)
k=C.bT(v,a3,128)
q.td(t,k)
q.td(C.bT(t,a3,16),C.bT(k,a3,4))}else{q===$&&C.b()
q.aAA(d,v)}}t=a2.ax
t.toString
if(a4<t-1){D.K.cC(p.a,0,16,x.eB(),480)
D.K.cC(p.b,0,8,w.eB(),224)
D.K.cC(p.c,0,8,v.eB(),224)}a0=u*16
a1=u*8
for(r=0;r<16;++r){t=a2.p4
t.toString
q=a2.p1
q===$&&C.b()
q.pd(a0+r*t,16,x,r*32)}for(r=0;r<8;++r){t=a2.R8
t.toString
q=a2.p2
q===$&&C.b()
k=r*32
q.pd(a1+r*t,8,w,k)
t=a2.R8
t.toString
q=a2.p3
q===$&&C.b()
q.pd(a1+r*t,8,v,k)}++u}},
aia(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&C.b()
x.NI(e,f,!1)
break
case 2:this.e===$&&C.b()
w=J.A(e.a,e.d)+4
v=D.f.iQ(D.f.O(J.A(e.a,e.d+4)*35468,16),32)
u=D.f.iQ(D.f.O(J.A(e.a,e.d+4)*85627,16),32)
t=D.f.iQ(D.f.O(J.A(e.a,e.d+1)*35468,16),32)
s=D.f.iQ(D.f.O(J.A(e.a,e.d+1)*85627,16),32)
B.bkT(f,0,w+u,s,t)
B.bkT(f,1,w+v,s,t)
B.bkT(f,2,w-v,s,t)
B.bkT(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&C.b()
x.NJ(e,f)
break
default:break}},
aU2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
j===$&&C.b()
j=j[d]
j.toString
x=m.p1
x===$&&C.b()
w=C.bT(x,l,d*16)
v=j.b
u=j.a
if(u===0)return
if(m.b8===1){if(d>0){x=m.e
x===$&&C.b()
k.toString
x.adu(w,k,u+4)}if(j.c){x=m.e
x===$&&C.b()
k.toString
x.aFs(w,k,u)}if(e>0){x=m.e
x===$&&C.b()
k.toString
x.adv(w,k,u+4)}if(j.c){j=m.e
j===$&&C.b()
k.toString
j.aFt(w,k,u)}}else{t=m.R8
x=m.p2
x===$&&C.b()
s=d*8
r=C.bT(x,l,s)
x=m.p3
x===$&&C.b()
q=C.bT(x,l,s)
p=j.d
if(d>0){x=m.e
x===$&&C.b()
k.toString
s=u+4
x.CC(w,1,k,16,s,v,p)
t.toString
x.CC(r,1,t,8,s,v,p)
x.CC(q,1,t,8,s,v,p)}if(j.c){x=m.e
x===$&&C.b()
k.toString
x.bpx(w,k,u,v,p)
t.toString
o=C.bT(r,l,4)
n=C.bT(q,l,4)
x.CB(o,1,t,8,u,v,p)
x.CB(n,1,t,8,u,v,p)}if(e>0){x=m.e
x===$&&C.b()
k.toString
s=u+4
x.CC(w,k,1,16,s,v,p)
t.toString
x.CC(r,t,1,8,s,v,p)
x.CC(q,t,1,8,s,v,p)}if(j.c){j=m.e
j===$&&C.b()
k.toString
j.bzM(w,k,u,v,p)
t.toString
x=4*t
o=C.bT(r,l,x)
n=C.bT(q,l,x)
j.CB(o,t,1,8,u,v,p)
j.CB(n,t,1,8,u,v,p)}}},
aVD(){var x,w=this,v=w.ay
v===$&&C.b()
x=v
for(;;){v=w.CW
v.toString
if(!(x<v))break
w.aU2(x,w.y2);++x}},
aW0(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b8
e.toString
x=A.D4[e]
e=g.p4
e.toString
w=x*e
e=g.R8
e.toString
v=(x/2|0)*e
e=g.p1
e===$&&C.b()
u=-w
t=C.bT(e,f,u)
e=g.p2
e===$&&C.b()
s=-v
r=C.bT(e,f,s)
e=g.p3
e===$&&C.b()
q=C.bT(e,f,s)
p=g.y2
e=g.cx
e.toString
o=p*16
n=(p+1)*16
if(d)g.aVD()
if(p!==0){o-=x
g.to=C.bT(t,f,0)
g.x1=C.bT(r,f,0)
g.x2=C.bT(q,f,0)}else{g.to=C.bT(g.p1,f,0)
g.x1=C.bT(g.p2,f,0)
g.x2=C.bT(g.p3,f,0)}e=p<e-1
if(e)n-=x
m=g.as
m.toString
if(n>m)n=m
g.xr=null
if(g.a5!=null&&o<n){m=g.xr=g.aT_(o,n-o)
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
g.b9v(o-l,m-h,n-o)}if(e){e=g.p1
m=g.p4
m.toString
e.pd(u,w,t,16*m)
m=g.p2
u=g.R8
u.toString
m.pd(s,v,r,8*u)
u=g.p3
m=g.R8
m.toString
u.pd(s,v,q,8*m)}return!0},
b9v(d,e,f){if(e<=0||f<=0)return!1
this.aUL(d,e,f)
this.aUK(d,e,f)
return!0},
a15(d){var x
if((d&-4194304)>>>0===0)x=D.f.O(d,14)
else x=d<0?0:255
return x},
Ud(d,e,f,g){var x=19077*d
g.l(0,0,this.a15(x+26149*f+-3644112))
g.l(0,1,this.a15(x-6419*e-13320*f+2229552))
g.l(0,2,this.a15(x+33050*e+-4527440))},
TQ(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new B.bl2(),a0=b3-1,a1=D.f.O(a0,1),a2=d.$2(J.A(a7.a,a7.d),J.A(a8.a,a8.d)),a3=d.$2(J.A(a9.a,a9.d),J.A(b0.a,b0.d)),a4=D.f.O(3*a2+a3+131074,2)
f.Ud(J.A(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.l(0,3,255)
x=a6!=null
if(x){a4=D.f.O(3*a3+a2+131074,2)
w=J.A(a6.a,a6.d)
b2.toString
f.Ud(w,a4&255,a4>>>16,b2)
b2.l(0,3,255)}for(v=1;v<=a1;++v,a3=t,a2=u){u=d.$2(J.A(a7.a,a7.d+v),J.A(a8.a,a8.d+v))
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
j=C.bT(b1,e,k)
n=19077*n
i=n+26149*l+-3644112
if((i&-4194304)>>>0===0)h=D.f.O(i,14)
else h=i<0?0:255
J.bg(j.a,j.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.f.O(l,14)
else h=l<0?0:255
J.bg(j.a,j.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.f.O(n,14)
else h=n<0?0:255
J.bg(j.a,j.d+2,h)
J.bg(j.a,j.d+3,255)
n=J.A(a5.a,a5.d+w)
m=p&255
l=p>>>16
j=w*4
i=C.bT(b1,e,j)
n=19077*n
g=n+26149*l+-3644112
if((g&-4194304)>>>0===0)h=D.f.O(g,14)
else h=g<0?0:255
J.bg(i.a,i.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.f.O(l,14)
else h=l<0?0:255
J.bg(i.a,i.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.f.O(n,14)
else h=n<0?0:255
J.bg(i.a,i.d+2,h)
J.bg(i.a,i.d+3,255)
if(x){a4=D.f.O(q+a3,1)
p=D.f.O(r+t,1)
o=J.A(a6.a,a6.d+o)
n=a4&255
m=a4>>>16
b2.toString
k=C.bT(b2,e,k)
o=19077*o
l=o+26149*m+-3644112
if((l&-4194304)>>>0===0)h=D.f.O(l,14)
else h=l<0?0:255
J.bg(k.a,k.d,h)
m=o-6419*n-13320*m+2229552
if((m&-4194304)>>>0===0)h=D.f.O(m,14)
else h=m<0?0:255
J.bg(k.a,k.d+1,h)
o=o+33050*n+-4527440
if((o&-4194304)>>>0===0)h=D.f.O(o,14)
else h=o<0?0:255
J.bg(k.a,k.d+2,h)
J.bg(k.a,k.d+3,255)
w=J.A(a6.a,a6.d+w)
o=p&255
n=p>>>16
j=C.bT(b2,e,j)
w=19077*w
m=w+26149*n+-3644112
if((m&-4194304)>>>0===0)h=D.f.O(m,14)
else h=m<0?0:255
J.bg(j.a,j.d,h)
n=w-6419*o-13320*n+2229552
if((n&-4194304)>>>0===0)h=D.f.O(n,14)
else h=n<0?0:255
J.bg(j.a,j.d+1,h)
w=w+33050*o+-4527440
if((w&-4194304)>>>0===0)h=D.f.O(w,14)
else h=w<0?0:255
J.bg(j.a,j.d+2,h)
J.bg(j.a,j.d+3,255)}}if((b3&1)===0){a4=D.f.O(3*a2+a3+131074,2)
w=J.A(a5.a,a5.d+a0)
o=a0*4
n=C.bT(b1,e,o)
f.Ud(w,a4&255,a4>>>16,n)
n.l(0,3,255)
if(x){a4=D.f.O(3*a3+a2+131074,2)
a0=J.A(a6.a,a6.d+a0)
b2.toString
o=C.bT(b2,e,o)
f.Ud(a0,a4&255,a4>>>16,o)
o.l(0,3,255)}}},
aUK(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
if(o==null)return
x=C.bT(o,null,0)
if(d===0){w=f-1
v=d}else{v=d-1
x.d=x.d-p.b.a
w=f}o=p.Q
o.toString
u=p.as
if(o+d+f===u){u.toString
w=u-o-v}for(o=p.b,t=0;t<w;++t){for(u=t+v,s=0;s<e;++s){r=J.A(x.a,x.d+s)
q=p.d.a
q=q==null?null:q.cF(s,u,null);(q==null?new C.ex():q).sap(r)}x.d=x.d+o.a}},
aUL(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=C.ck(J.ch(l.d.ga0(0),0,null),!1,k,d*j.a*4),h=l.to
h===$&&C.b()
x=C.bT(h,k,0)
h=l.x1
h===$&&C.b()
w=C.bT(h,k,0)
h=l.x2
h===$&&C.b()
v=C.bT(h,k,0)
u=d+f
t=D.f.O(e+1,1)
s=j.a*4
j=l.rx
j===$&&C.b()
r=C.bT(j,k,0)
j=l.ry
j===$&&C.b()
q=C.bT(j,k,0)
if(d===0){l.TQ(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&C.b()
l.TQ(j,x,r,q,w,v,C.bT(i,k,-s),i,e)
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
l.TQ(C.bT(x,k,-n),x,r,q,w,v,C.bT(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
j=l.Q
j.toString
h=l.as
h.toString
if(j+u<h){j=l.RG
j===$&&C.b()
j.xl(0,e,x)
l.rx.xl(0,t,w)
l.ry.xl(0,t,v);--p}else if((u&1)===0)l.TQ(x,k,w,v,w,v,C.bT(i,k,s),k,e)
return p},
aT_(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.ab=new Uint8Array(n)
x=o.a5
w=new B.blv(x,m,l)
v=x.bz()
u=w.d=v&3
w.e=D.f.O(v,2)&3
w.f=D.f.O(v,4)&3
w.r=D.f.O(v,6)&3
if(w.gcW())if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new B.ans(A.tp,C.c([],y.J))
t.a=m
t.b=l
n=C.c([],y.A)
u=C.c([],y.F)
s=new Uint32Array(2)
r=new B.an9(x,s)
s=r.d=J.ch(D.bM.ga0(s),0,null)
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
u=new B.ag0(r,t,n,u)
u.db=m
w.x=u
u.HU(m,l,!0)
n=w.x
x=n.ax
if(x.length===1&&x[0].a===A.a8o&&n.b2T()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.cx=0
x=D.f.aF(p,4)
x=new Uint8Array(p+(4-x))
n.CW=x
n.ch=J.lW(D.K.ga0(x),0,null)}else{w.y=!1
w.x.afq()}}else w.r=1
o.a4=w}n=o.a4
n===$&&C.b()
if(!n.w){x=o.ab
x===$&&C.b()
if(!n.KZ(d,e,x))return null}n=o.ab
n===$&&C.b()
return C.ck(n,!1,null,d*m)},
b80(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&C.b()
x=a1.dy[a3]
a3=a1.b7
a3===$&&C.b()
w=a3[a1.y1]
v=C.ck(w.a,!1,null,0)
a3=a1.k3
a3===$&&C.b()
u=a3[0]
v.btG(0,v.c-v.d,0)
a3=w.b
a3===$&&C.b()
if(!a3){t=C.ck(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.a2p(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.bge(t,v)
else{q=D.f.O(J.A(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.bg(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.a2p(a5,o,i+(m&1),x.a,n,v)
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
m=D.f.fN(a4.a,a3)
l=D.f.fN(u.a,a3)
for(h=0,j=0;j<2;++j){i=l&1
for(g=0;g<2;++g){r=a1.a2p(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.A(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=(h<<2|a3)>>>0
v.d+=16}m=m>>>2
l=l>>>1|i<<5}d=(d|D.f.cO(h,4*a0))>>>0
e=(e|D.f.cO(m<<4>>>0,a0))>>>0
f=(f|D.f.cO(l&240,a0))>>>0}a4.a=e
u.a=f
w.e=k
w.f=d
if((d&43690)===0)x.toString
return(k|d)>>>0===0},
bge(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
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
J.bg(e.a,e.d+p,u)
u=D.f.O(q+r,3)
J.bg(e.a,e.d+(p+16),u)
u=D.f.O(v-s,3)
J.bg(e.a,e.d+(p+32),u)
u=D.f.O(q-r,3)
J.bg(e.a,e.d+(p+48),u)
p+=64}},
aXb(d,e){var x,w,v,u,t,s
if(d.fG(e[3])===0)x=d.fG(e[4])===0?2:3+d.fG(e[5])
else if(d.fG(e[6])===0)x=d.fG(e[7])===0?5+d.fG(159):7+2*d.fG(165)+d.fG(145)
else{w=d.fG(e[8])
v=2*w+d.fG(e[9+w])
u=A.eKc[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.fG(u[s])
x+=3+D.f.cO(8,v)}return x},
a2p(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.fG(p[0])===0)return h
while(d.fG(p[1])===0){++h
p=e[A.V3[h]].a[0]
if(h===16)return 16}x=h+1
w=e[A.V3[x]].a
if(d.fG(p[2])===0){p=w[1]
v=1}else{v=this.aXb(d,p)
p=w[2]}u=A.eQM[h]
t=d.b
t===$&&C.b()
s=d.afQ(D.f.O(t,1))
t=d.b
r=A.UT[t]
d.b=A.US[t]
t=d.d
t===$&&C.b()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.bg(i.a,i.d+u,t*q)}return 16},
b7X(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.b7
j===$&&C.b()
x=j[n]
n=o.c
n===$&&C.b()
n=n.fG(145)===0
x.b=n
if(!n){if(o.c.fG(156)!==0)w=o.c.fG(128)!==0?1:3
else w=o.c.fG(163)!==0?2:0
n=x.c
n.$flags&2&&C.u(n)
n[0]=w
l.toString
D.K.fC(l,m,m+4,w)
D.K.fC(k,0,4,w)}else{v=x.c
for(n=k.$flags|0,u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){j=m+s
r=A.eR_[l[j]][w]
q=A.UK[o.c.fG(r[0])]
while(q>0)q=A.UK[2*q+o.c.fG(r[q])]
w=-q
l.$flags&2&&C.u(l)
l[j]=w}p=u+4
l.toString
D.K.cC(v,u,p,l,m)
n&2&&C.u(k)
k[t]=w}}if(o.c.fG(142)===0)n=0
else if(o.c.fG(114)===0)n=2
else n=o.c.fG(183)!==0?1:3
x.d=n}}
B.a0A.prototype={
eo(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.f.cG(this.fG(128),w))>>>0
return x},
Gw(d){var x=this.eo(d)
return this.eo(1)===1?-x:x},
fG(d){var x,w=this,v=w.b
v===$&&C.b()
x=w.afQ(D.f.O(v*d,8))
if(w.b<=126)w.bdr()
return x},
afQ(d){var x,w,v,u,t,s=this,r=s.d
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
if(D.f.je(r,t)>d){x=s.b
x===$&&C.b()
w=d+1
s.b=x-w
s.c=r-D.f.cG(w,t)
return 1}else{s.b=d
return 0}},
bdr(){var x,w=this,v=w.b
v===$&&C.b()
x=A.UT[v]
w.b=A.US[v]
v=w.d
v===$&&C.b()
w.d=v-x}}
B.bkR.prototype={
adv(d,e,f){var x,w=C.bT(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.am7(w,e,f))this.QL(w,e)}},
adu(d,e,f){var x,w=C.bT(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.am7(w,1,f))this.QL(w,1)}},
aFt(d,e,f){var x,w,v=C.bT(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.adv(v,e,f)}},
aFs(d,e,f){var x,w=C.bT(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.adu(w,e,f)}},
bzM(d,e,f,g,h){var x,w,v=C.bT(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.CB(v,e,1,16,f,g,h)}},
bpx(d,e,f,g,h){var x,w=C.bT(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.CB(w,1,e,16,f,g,h)}},
CC(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.bT(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.am8(h,e,a0,a1))if(this.akV(h,e,a2))this.QL(h,e)
else{s=J.A(h.a,h.d+x)
r=J.A(h.a,h.d+w)
q=J.A(h.a,h.d+v)
p=J.A(h.a,h.d)
o=J.A(h.a,h.d+e)
n=J.A(h.a,h.d+u)
m=$.c2M()
l=m[1020+3*(p-q)+m[1020+r-o]]
m=D.f.O(27*l+63,7)
k=(m&2147483647)-((m&2147483648)>>>0)
m=D.f.O(18*l+63,7)
j=(m&2147483647)-((m&2147483648)>>>0)
m=D.f.O(9*l+63,7)
i=(m&2147483647)-((m&2147483648)>>>0)
m=$.nJ()[255+s+i]
J.bg(h.a,h.d+x,m)
m=$.nJ()[255+r+j]
J.bg(h.a,h.d+w,m)
m=$.nJ()[255+q+k]
J.bg(h.a,h.d+v,m)
m=$.nJ()[255+p-k]
J.bg(h.a,h.d,m)
m=$.nJ()[255+o-j]
J.bg(h.a,h.d+e,m)
m=$.nJ()[255+n-i]
J.bg(h.a,h.d+u,m)}h.d+=f}},
CB(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=C.bT(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.am8(k,e,h,i))if(this.akV(k,e,j))this.QL(k,e)
else{u=J.A(k.a,k.d+x)
t=J.A(k.a,k.d+w)
s=J.A(k.a,k.d)
r=J.A(k.a,k.d+e)
q=3*(s-t)
p=$.c2N()
o=D.f.O(q+4,3)
n=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.f.O(q+3,3)
m=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.f.O(n+1,1)
l=(o&2147483647)-((o&2147483648)>>>0)
o=$.nJ()[255+u+l]
J.bg(k.a,k.d+x,o)
o=$.nJ()[255+t+m]
J.bg(k.a,k.d+w,o)
o=$.nJ()[255+s-n]
J.bg(k.a,k.d,o)
o=$.nJ()[255+r-l]
J.bg(k.a,k.d+e,o)}k.d+=f}},
QL(d,e){var x=J.A(d.a,d.d+-2*e),w=-e,v=J.A(d.a,d.d+w),u=J.A(d.a,d.d),t=J.A(d.a,d.d+e),s=3*(u-v)+$.c2M()[1020+x-t],r=$.c2N(),q=r[112+D.f.iQ(D.f.O(s+4,3),32)],p=r[112+D.f.iQ(D.f.O(s+3,3),32)]
d.l(0,w,$.nJ()[255+v+p])
d.l(0,0,$.nJ()[255+u-q])},
akV(d,e,f){var x=J.A(d.a,d.d+-2*e),w=J.A(d.a,d.d+-e),v=J.A(d.a,d.d),u=J.A(d.a,d.d+e),t=$.aCk()
return t[255+x-w]>f||t[255+u-v]>f},
am7(d,e,f){var x=J.A(d.a,d.d+-2*e),w=J.A(d.a,d.d+-e),v=J.A(d.a,d.d),u=J.A(d.a,d.d+e)
return 2*$.aCk()[255+w-v]+$.c2L()[255+x-u]<=f},
am8(d,e,f,g){var x=J.A(d.a,d.d+-4*e),w=J.A(d.a,d.d+-3*e),v=J.A(d.a,d.d+-2*e),u=J.A(d.a,d.d+-e),t=J.A(d.a,d.d),s=J.A(d.a,d.d+e),r=J.A(d.a,d.d+2*e),q=J.A(d.a,d.d+3*e),p=$.aCk(),o=255+v
if(2*p[255+u-t]+$.c2L()[o-s]>f)return!1
return p[255+x-w]<=g&&p[255+w-v]<=g&&p[o-u]<=g&&p[255+q-r]<=g&&p[255+r-s]<=g&&p[255+s-t]<=g},
td(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
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
B.Bu(e,l,0,0,t+n)
B.Bu(e,l,1,0,s+o)
B.Bu(e,l,2,0,s-o)
B.Bu(e,l,3,0,t-n);++w
l+=32}},
NI(d,e,f){this.td(d,e)
if(f)this.td(C.bT(d,null,16),C.bT(e,null,4))},
NJ(d,e){var x,w,v=J.A(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)B.Bu(e,0,w,x,v)},
aAA(d,e){var x=this,w=null
if(J.A(d.a,d.d)!==0)x.NJ(d,e)
if(J.A(d.a,d.d+16)!==0)x.NJ(C.bT(d,w,16),C.bT(e,w,4))
if(J.A(d.a,d.d+32)!==0)x.NJ(C.bT(d,w,32),C.bT(e,w,128))
if(J.A(d.a,d.d+48)!==0)x.NJ(C.bT(d,w,48),C.bT(e,w,132))}}
B.bkW.prototype={
Pp(d){return this.c.$1$context(d)}}
B.bl_.prototype={}
B.bl1.prototype={}
B.a0z.prototype={}
B.bl0.prototype={}
B.bkS.prototype={}
B.Ha.prototype={}
B.anb.prototype={}
B.and.prototype={}
B.anc.prototype={}
B.ane.prototype={}
B.a0B.prototype={
L0(){var x,w=this.b
if(w.hn(8)!==47)return!1
x=this.c
x.f=A.yO
x.a=w.hn(14)+1
x.b=w.hn(14)+1
x.d=w.hn(1)!==0
if(w.hn(3)!==0)return!1
return!0},
oM(){var x,w,v,u,t,s=this,r=null
s.e=0
if(!s.L0())return r
x=s.c
s.HU(x.a,x.b,!0)
s.afq()
w=x.a
s.d=C.fZ(r,r,D.az,0,D.bR,x.b,r,0,4,r,D.az,w,!1)
w=s.ch
w.toString
v=x.a
u=x.b
if(!s.a1v(w,v,u,u,s.gb9k()))return r
x=x.w
if(x.length!==0){t=C.ck(new C.bL(x),!1,r,0)
x=s.d
x.toString
x.e=B.c4A(t)}return s.d},
afq(){var x,w=this,v=w.c,u=v.a
v=u*v.b+u
x=new Uint32Array(v+u*16)
w.ch=x
w.CW=J.ch(D.bM.ga0(x),0,null)
w.cx=v
return!0},
ba9(d){var x,w,v,u=this,t=u.b,s=t.hn(2),r=u.ay,q=D.f.cO(1,s)
if((r&q)>>>0!==0)return!1
u.ay=(r|q)>>>0
x=new B.ana(A.a8n)
u.ax.push(x)
r=A.f2_[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.hn(3)+2
x.e=t
x.d=u.HU(B.Bv(x.b,t),B.Bv(x.c,x.e),!1)
break
case 3:w=t.hn(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=B.Bv(x.b,v)
x.e=v
x.d=u.HU(w,1,!1)
u.aVg(w,x)
break
case 2:break}return!0},
HU(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.hn(1)!==0;){t=C.c([u,v],w)
if(!p.ba9(t))throw C.n(C.bM("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.hn(1)!==0){s=x.hn(4)
if(!(s>=1&&s<=11))throw C.n(C.bM("Invalid Color Cache"))}else s=0
if(!p.b9X(u,v,s,f))throw C.n(C.bM("Invalid Huffman Codes"))
if(s>0){x=D.f.cO(1,s)
p.r=x
p.w=new B.bkX(new Uint32Array(x),32-s)}else p.r=0
x=p.c
x.a=u
x.b=v
r=p.y
p.z=B.Bv(u,r)
p.x=r===0?4294967295:D.f.cO(1,r)-1
if(f){p.e=0
return null}q=new Uint32Array(u*v)
if(!p.a1v(q,u,v,v,null))throw C.n(C.bM("Failed to decode image data."))
p.e=0
return q},
a1v(a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=a0.e,a2=D.f.ev(a1,a9),a3=D.f.aF(a1,a9),a4=a0.ajx(a3,a2),a5=a0.e,a6=a9*b0,a7=a9*b1
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
if((a3&v)>>>0===0){p=a0.Iv(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(u.a>=32)u.zu()
r=a4.a
o=r[0].xB(u)
n=0
if(o<256){m=r[1].xB(u)
if(u.a>=32)u.zu()
l=C.cmC(r[2].xB(u),o,m,r[3].xB(u))
a1&2&&C.u(a8)
a8[a5]=l;++a5;++a3
if(a3>=a9){++a2
if(D.f.aF(a2,16)===0&&t)b2.$1(a2)
if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.f.eh(j*506832829>>>0,r)
k&2&&C.u(q)
q[i]=j;++s}a3=n}}else if(o<280){h=a0.Re(o-256)
g=r[4].xB(u)
if(u.a>=32)u.zu()
f=a0.amZ(a9,a0.Re(g))
if(a5<f||a6-a5<h)return!1
else{e=a5-f
for(d=0;d<h;++d){r=a8[e+d]
a1&2&&C.u(a8)
a8[a5+d]=r}a5+=h}a3+=h
while(a3>=a9){a3-=a9;++a2
if(D.f.aF(a2,16)===0&&t)b2.$1(a2)}if(a5<a7){if((a3&v)>>>0!==0){p=a0.Iv(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.f.eh(j*506832829>>>0,r)
k&2&&C.u(q)
q[i]=j;++s}}}else if(o<x){while(s<a5){r=a8[s]
i=D.f.eh(r*506832829>>>0,w.b)
q=w.a
q.$flags&2&&C.u(q)
q[i]=r;++s}r=w.a
q=r[o-280]
a1&2&&C.u(a8)
a8[a5]=q;++a5;++a3
if(a3>=a9){++a2
if(D.f.aF(a2,16)===0&&t)b2.$1(a2)
for(q=w.b,k=r.$flags|0;s<a5;){j=a8[s]
i=D.f.eh(j*506832829>>>0,q)
k&2&&C.u(r)
r[i]=j;++s}a3=n}}else return!1}if(t)b2.$1(a2)
if(r.d>=q&&u.a>=64&&a5<a6)return!1
a0.e=a5
return!0},
b2T(){var x,w,v,u
if(this.r>0)return!1
for(x=this.as,w=this.at,v=0;v<x;++v){u=w[v].a
if(u[1].f>1)return!1
if(u[2].f>1)return!1
if(u[3].f>1)return!1}return!0},
aVr(d){var x,w,v,u,t,s,r=this,q=r.f,p=d-q
if(p<=0)return
x=r.c
r.afA(p,x.a*q)
w=x.a
v=w*p
u=w*r.f
x=r.ch
x.toString
q=r.cx
q.toString
t=C.ck(x,!1,null,q)
for(s=0;s<v;++s){q=r.cy
q.toString
x=D.f.O(J.A(t.a,t.d+s),8)
q.$flags&2&&C.u(q)
q[u+s]=x&255}r.f=d},
aSE(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=o.e,m=D.f.ev(n,d),l=D.f.aF(n,d),k=o.ajx(l,m),j=o.e,i=d*e,h=d*f,g=o.x
n=o.b
for(;;){x=n.b
if(!(!(x.d>=x.c&&n.a>=64)&&j<h))break
if((l&g)>>>0===0){w=o.Iv(o.Q,o.z,o.y,l,m)
k=o.at[w]}if(n.a>=32)n.zu()
x=k.a
v=x[0].xB(n)
if(v<256){x=o.CW
x===$&&C.b()
x.$flags&2&&C.u(x)
x[j]=v;++j;++l
if(l>=d){++m
if(D.f.aF(m,16)===0)o.a22(m)
l=0}}else if(v<280){u=o.Re(v-256)
t=x[4].xB(n)
if(n.a>=32)n.zu()
s=o.amZ(d,o.Re(t))
if(j>=s&&i-j>=u)for(x=o.CW,r=0;r<u;++r){x===$&&C.b()
q=j+r
p=x[q-s]
x.$flags&2&&C.u(x)
x[q]=p}else{o.e=j
return!0}j+=u
l+=u
while(l>=d){l-=d;++m
if(D.f.aF(m,16)===0)o.a22(m)}if(j<h&&(l&g)>>>0!==0){w=o.Iv(o.Q,o.z,o.y,l,m)
k=o.at[w]}}else return!1}o.a22(m)
o.e=j
return!0},
a22(d){var x,w,v,u=this,t=u.f,s=d-t,r=u.CW
r===$&&C.b()
x=C.ck(r,!1,null,u.c.a*t)
if(s>0){w=u.f
t=u.cy
t.toString
r=u.db
r.toString
v=C.ck(t,!1,null,r*w)
u.ax[0].bkj(w,w+s,x,v)}u.f=d},
b9l(d){var x,w,v,u,t,s=this,r=s.c,q=r.a,p=s.f,o=d-p
if(o<=0)return
s.afA(o,q*p)
q=s.cx
q.toString
x=s.f
w=q
v=0
for(;v<o;++v,++x)for(u=0;u<r.a;++u,++w){t=s.ch[w]
q=s.d.a
if(q!=null)q.ii(u,x,t>>>16&255,t>>>8&255,t&255,t>>>24&255)}s.f=d},
afA(d,e){var x,w,v,u=this,t=u.ax,s=t.length,r=u.c.a,q=u.f,p=q+d,o=u.cx
o.toString
x=u.ch
x.toString
D.bM.cC(x,o,o+r*d,x,e)
for(w=e;v=s-1,s>0;w=o,s=v){r=t[v]
x=u.ch
x.toString
r.brK(q,p,x,w,x,o)}},
b9X(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=1
if(g&&l.b.hn(1)!==0){x=l.b.hn(3)+2
w=B.Bv(d,x)
v=B.Bv(e,x)
u=w*v
t=l.HU(w,v,!1)
l.y=x
for(s=0;s<u;++s){r=t[s]>>>8&65535
t.$flags&2&&C.u(t)
t[s]=r
if(r>=k)k=r+1}}else t=null
q=J.jK(k,y.f)
for(p=0;p<k;++p)q[p]=B.cw1()
for(o=f>0,s=0;s<k;++s)for(n=0;n<5;++n){m=A.eOa[n]
if(n===0&&o)m+=D.f.cO(1,f)
if(!l.b9V(m,q[s].a[n]))return!1}l.Q=t
l.as=k
l.at=q
return!0},
b9V(d,e){var x,w,v,u,t,s,r,q,p,o=this.b
if(o.hn(1)!==0){x=y.t
w=C.c([0,0],x)
v=C.c([0,0],x)
u=C.c([0,0],x)
t=o.hn(1)+1
w[0]=o.hn(o.hn(1)===0?1:8)
v[0]=0
x=t-1
u[0]=x
if(t===2){w[1]=o.hn(8)
v[1]=1
u[1]=x}s=e.bjC(u,v,w,d,t)}else{r=new Int32Array(19)
q=o.hn(4)+4
if(q>19)return!1
u=new Int32Array(d)
for(p=0;p<q;++p)r[A.eQh[p]]=o.hn(3)
s=this.b9W(r,d,u)
if(s)s=e.at5(u,d)}return s},
b9W(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=B.cdN()
if(!j.at5(d,19))return!1
x=this.b
if(x.hn(1)!==0){w=2+x.hn(2+2*x.hn(3))
if(w>e)return!1}else w=e
for(v=f.$flags|0,u=0,t=8;u<e;w=s){s=w-1
if(w===0)break
if(x.a>=32)x.zu()
r=j.xB(x)
if(r<16){q=u+1
v&2&&C.u(f)
f[u]=r
if(r!==0)t=r
u=q}else{p=r-16
o=A.enw[p]
n=A.et8[p]
m=x.hn(o)+n
if(u+m>e)return!1
else{l=r===16?t:0
for(;k=m-1,m>0;m=k,u=q){q=u+1
v&2&&C.u(f)
f[u]=l}}}}return!0},
Re(d){var x
if(d<4)return d+1
x=D.f.O(d-2,1)
return D.f.cO(2+(d&1),x)+this.b.hn(x)+1},
amZ(d,e){var x,w
if(e>120)return e-120
else{x=A.eOq[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
aVg(d,e){var x,w,v,u,t,s,r=D.f.cO(1,D.f.fN(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.ch(D.bM.ga0(p),0,null)
w=J.ch(D.bM.ga0(q),0,null)
q[0]=e.d[0]
v=4*d
for(p=w.$flags|0,u=4;u<v;++u){t=x[u]
s=w[u-4]
p&2&&C.u(w)
w[u]=t+s&255}for(v=4*r;u<v;++u){p&2&&C.u(w)
w[u]=0}e.d=q
return!0},
Iv(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.f.O(h,f)+D.f.O(g,f)]},
ajx(d,e){var x=this,w=x.Iv(x.Q,x.z,x.y,d,e)
return x.at[w]}}
B.ag0.prototype={
boQ(d){return this.aVr(d)}}
B.an9.prototype={
azi(){var x,w,v=this.a
if(v<32){x=this.c
w=D.f.eh(x[0],v)+((x[1]&A.E1[v])>>>0)*(A.E1[32-v]+1)}else{x=this.c
w=v===32?x[1]:D.f.eh(x[1],v-32)}return w},
hn(d){var x,w=this,v=w.b
if(!(v.d>=v.c&&w.a>=64)&&d<25){v=w.azi()
x=A.E1[d]
w.a+=d
w.zu()
return(v&x)>>>0}else throw C.n(C.bM("Not enough data in input."))},
zu(){var x,w,v,u=this,t=u.b,s=u.c,r=s.$flags|0,q=t.c
for(;;){if(!(u.a>=8&&t.d<q))break
x=J.A(t.a,t.d++)
w=s[0]
v=s[1]
r&2&&C.u(s)
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
B.bkX.prototype={}
B.Hb.prototype={
H(){return"VP8LImageTransformType."+this.b}}
B.ana.prototype={
brK(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.biF(h,i,i+(e-d)*s)
break
case 0:t.bws(d,e,h,i)
if(e!==t.c){x=i-s
D.bM.cC(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.bkk(d,e,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*B.Bv(s,t.e)
u=i+w*s-v
D.bM.cC(h,u,u+v,f,i)
t.atH(d,e,f,u,h,i)}else t.atH(d,e,f,g,h,i)
break}},
bkj(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.f.fN(8,r),p=this.b,o=this.d
if(q<8){x=D.f.cO(1,r)-1
w=D.f.cO(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.A(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.bg(g.a,g.d,r>>>8&255);++g.d
u=D.f.O(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.A(f.a,f.d);++f.d
r=o[s]
J.bg(g.a,g.d,r>>>8&255);++g.d}},
atH(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.f.fN(8,p),n=this.b,m=this.d
if(o<8){x=D.f.cO(1,p)-1
w=D.f.cO(1,o)-1
for(p=h.$flags|0,v=d;v<e;++v)for(u=0,t=0;t<n;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
q=m[u&w]
p&2&&C.u(h)
h[i]=q
u=D.f.fN(u,o)}}else for(p=h.$flags|0,v=d;v<e;++v)for(t=0;t<n;++t,i=r,g=s){r=i+1
s=g+1
q=m[f[g]>>>8&255]
p&2&&C.u(h)
h[i]=q}},
bkk(a2,a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b,e=g.e,d=D.f.cO(1,e)-1,a0=B.Bv(f,e),a1=D.f.O(a2,g.e)*a0
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
o=$.lU()
o.$flags&2&&C.u(o)
o[0]=p
p=$.mM()
n=p[0]
o[0]=q
m=p[0]
l=$.aCn()
l.$flags&2&&C.u(l)
l[0]=n*m
k=$.c2R()
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
bws(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=this,n=o.b
if(d===0){B.bkY(f,g,4278190080)
for(x=1;x<n;++x){w=g+x
B.bkY(f,w,f[w-1])}g+=n;++d}w=o.e
v=D.f.cO(1,w)-1
u=B.Bv(n,w)
t=D.f.O(d,o.e)*u
for(s=d;s<e;){B.bkY(f,g,f[g-n])
r=t+1
q=$.cic[o.d[t]>>>8&15]
for(x=1;x<n;++x){if((x&v)>>>0===0){p=r+1
q=$.cic[o.d[r]>>>8&15]
r=p}w=g+x
B.bkY(f,w,q.$3(f,f[w-1],w-n))}g+=n;++s
if((s&v)>>>0===0)t+=u}},
biF(d,e,f){var x,w,v,u
for(x=d.$flags|0;e<f;e=u){w=d[e]
v=w>>>8&255
u=e+1
x&2&&C.u(d)
d[e]=(w&4278255360|(w&16711935)+(v<<16|v)&16711935)>>>0}}}
B.blv.prototype={
gcW(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
KZ(d,e,f){var x,w,v,u,t,s,r=this
if(!r.gcW())return!1
x=A.f50[r.e]
if(r.d===0){w=r.b
v=d*w
u=r.a
D.K.cC(f,v,e*w,u.a,u.d-u.b+v)}else{w=d+e
u=r.x
u===$&&C.b()
u.cy=f
t=u.c
if(r.y)w=u.aSE(t.a,t.b,w)
else{s=u.ch
s.toString
u=u.a1v(s,t.a,t.b,w,u.gboP())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,d,e,f)}if(r.f===1)if(!r.aTq(f,r.b,r.c,d,e))return!1
if(d+e===r.c)r.w=!0
return!0},
aTq(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
B.a0G.prototype={
aMY(d,e){var x=this,w=d.bz()
x.r=0
x.f=(w&1)!==0
x.w=d.d-d.b
x.x=e-16}}
B.ag1.prototype={}
B.afi.prototype={
a6e(d){var x,w=this
if(d===0)return!1
x=(d<<1>>>0)-1
w.e=x
x=new Int32Array(x<<1>>>0)
w.d=x
x[1]=-1
w.f=1
D.K.fC(w.a,0,128,255)
return!0},
at5(d,e){var x,w,v,u,t,s=this
for(x=0,w=0,v=0;v<e;++v)if(d[v]>0){++x
w=v}if(!s.a6e(x))return!1
if(x===1){if(w<0||w>=e)return!1
return s.a0t(w,0,0)}u=new Int32Array(e)
if(!s.b2b(d,e,u))return!1
for(v=0;v<e;++v){t=d[v]
if(t>0)if(!s.a0t(v,u[v],t))return!1}return s.f===s.e},
bjC(d,e,f,g,h){var x,w,v,u=this
if(!u.a6e(h))return!1
for(x=0;x<h;++x){w=e[x]
if(w!==-1){v=f[x]
if(v>=g)return u.f===u.e
if(!u.a0t(v,w,d[x]))return u.f===u.e}}return u.f===u.e},
xB(d){var x,w,v=this,u=d.azi(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}x=v.c[s]
t+=7
u=u>>>7
do{w=v.d
w===$&&C.b()
x=x+w[(x<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.amc(x))
d.a=t
return v.d[x<<1>>>0]},
a0t(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
if(f<=7){x=l.aod(e,f)
for(w=D.f.cG(1,7-f),v=l.b,u=v.$flags|0,t=l.a,s=t.$flags|0,r=0;r<w;++r){q=(x|D.f.cG(r,f))>>>0
u&2&&C.u(v)
v[q]=d
s&2&&C.u(t)
t[q]=f}}else x=l.aod(D.f.je(e,f-7),7)
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
o+=t[s]+(D.f.je(e,n)&1);--p
if(p===0){v&2&&C.u(w)
w[x]=o}}if(l.b4U(o))l.b4V(o,0)
else if(l.amc(o))return!1
w=l.d
w===$&&C.b()
w.$flags&2&&C.u(w)
w[o<<1>>>0]=d
return!0},
aod(d,e){return D.f.eh((A.Vi[d&15]<<4|A.Vi[D.f.O(d,4)])>>>0,8-e)},
b4V(d,e){var x=this.d
x===$&&C.b()
x.$flags&2&&C.u(x)
x[(d<<1>>>0)+1]=e},
amc(d){var x=this.d
x===$&&C.b()
return x[(d<<1>>>0)+1]!==0},
b4U(d){var x=this.d
x===$&&C.b()
return x[(d<<1>>>0)+1]<0},
b2b(d,e,f){var x,w,v,u,t,s,r,q,p=new Int32Array(16),o=new Int32Array(16)
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
B.Vt.prototype={
h(d,e){return this.a[e]}}
B.OQ.prototype={
H(){return"WebPFormat."+this.b}}
B.ans.prototype={
gbM(){return this.a},
gaR(){return this.b}}
B.ag2.prototype={}
B.blw.prototype={
F9(d){var x=C.ck(d,!1,null,0)
this.b=x
if(!this.aju(x))return!1
return!0},
iT(d){var x,w=this,v=null,u=C.ck(d,!1,v,0)
w.b=u
if(!w.aju(u))return v
u=new B.ag2(A.tp,C.c([],y.J))
w.a=u
x=w.b
x.toString
if(!w.arY(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!B.c6R(x,u).L0())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!B.c6P(x,u).L0())return v
u=w.a
u.as=u.z.length
return u
case 0:throw C.n(C.bM("Unknown format for WebP"))}},
i6(d){var x,w,v,u,t=this,s=t.b
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
return t.ahH(s.yv(x,w),d)}w=x.f
if(w===A.yO){u=s.yv(x.ch,x.ay)
s=t.a
s.toString
return B.c6R(u,s).oM()}else if(w===A.GN){u=s.yv(x.ch,x.ay)
s=t.a
s.toString
return B.c6P(u,s).oM()}return null},
mD(d,e){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.iT(d)==null)return o
x=p.a.e
if(!x)return p.i6(0)
for(w=o,v=w,u=0;x=p.a,u<x.as;++u){e=x.z[u]
t=p.i6(u)
if(t==null)continue
t.y=e.e
if(v==null||w==null){x=p.a
s=x.a
x=x.b
r=t.go_()
q=t.a
q=q==null?o:q.gc3()
if(q==null)q=D.az
v=C.fZ(o,o,q,t.y,D.bR,x,o,0,r,o,D.az,s,!1)
w=v}else{w=C.vU(w,!1,!1)
x=e.f
x===$&&C.b()
if(x){x=w.a
if(x!=null)x.lj(0,o)}}C.c8n(w,t,D.zE,o,o,e.a,e.b,o,o,o,o)
v.le(w)}return v},
ahH(d,e){var x,w,v,u=null,t=C.c([],y.J),s=new B.ag2(A.tp,t)
if(!this.arY(d,s))return u
if(s.f===A.tp)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.x
t===$&&C.b()
x=w.w
x===$&&C.b()
return this.ahH(d.yv(t,x),e)}else{v=d.yv(s.ch,s.ay)
t=s.f
if(t===A.yO)return B.c6R(v,s).oM()
else if(t===A.GN)return B.c6P(v,s).oM()}return u},
aju(d){if(d.ho(4)!=="RIFF")return!1
d.Z()
if(d.ho(4)!=="WEBP")return!1
return!0},
arY(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=d.c,w=d.b;d.d<x;){v=d.ho(4)
u=d.Z()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.aXI(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=A.GN
break
case"VP8L":e.ay=r
e.ch=u
e.f=A.yO
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.aw(s)
o=p.gu(s)
p=p.gu(s)
s=new C.kO(s,0,Math.min(o,p),0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=A.fCm
n=d.Z()
s=new Uint8Array(4)
s[0]=n>>>8&255
s[1]=n>>>16&255
s[2]=n>>>24&255
s[3]=n&255
d.ad()
break
case"ANMF":if(!this.aWH(d,e,u))return!1
break
case"ICCP":e.toString
m=d.hL(u)
d.d=d.d+(m.c-m.d)
m.eB()
break
case"EXIF":e.toString
e.w=d.ho(u)
break
case"XMP ":e.toString
d.ho(u)
break
default:d.d=s+t
break}s=d.d
l=t-(s-w-r)
if(l>0)d.d=s+l}if(!e.d)e.d=e.at!=null
return e.f!==A.tp},
aXI(d,e){var x,w,v,u,t=d.bz()
if((t&192)!==0)return!1
x=D.f.O(t,4)
w=D.f.O(t,1)
if((t&1)!==0)return!1
if(d.po()!==0)return!1
v=d.po()
u=d.po()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
aWH(d,e,f){var x=new B.ag1(d.po()*2,d.po()*2,d.po()+1,d.po()+1,d.po())
x.aMY(d,f)
if(x.r!==0)return!1
e.z.push(x)
return!0}}
B.ahP.prototype={
aN(d){var x,w,v=this
if(v.a===v.c.length)v.aVf()
x=v.c
w=v.a++
x.$flags&2&&C.u(x)
x[w]=d&255},
i0(d){var x,w,v,u,t=this,s=J.aY(d)
while(x=t.a,w=x+s,v=t.c,u=v.length,w>u)t.aiG(w-u)
D.K.dN(v,x,w,d)
t.a+=s},
dt(d){var x=this
if(x.b){x.aN(D.f.O(d,8)&255)
x.aN(d&255)
return}x.aN(d&255)
x.aN(D.f.O(d,8)&255)},
dk(d){var x=this
if(x.b){x.aN(D.f.O(d,24)&255)
x.aN(D.f.O(d,16)&255)
x.aN(D.f.O(d,8)&255)
x.aN(d&255)
return}x.aN(d&255)
x.aN(D.f.O(d,8)&255)
x.aN(D.f.O(d,16)&255)
x.aN(D.f.O(d,24)&255)},
bAh(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=J.ch(D.lm.ga0(v),0,null)
if(w.b){w.aN(x[3])
w.aN(x[2])
w.aN(x[1])
w.aN(x[0])
return}w.aN(x[0])
w.aN(x[1])
w.aN(x[2])
w.aN(x[3])},
bAi(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=J.ch(D.m0.ga0(v),0,null)
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
aiG(d){var x,w,v,u
if(d!=null)x=d
else{w=this.c.length
x=w===0?8192:w*2}w=this.c
v=w.length
u=new Uint8Array(v+x)
D.K.dN(u,0,v,w)
this.c=u},
aVf(){return this.aiG(null)},
gu(d){return this.a}}
var z=a.updateTypes(["~(kO)","v(oD,v,v)","~(zx,w<v>)","~(v,v,v,v,v,e1)","~(v)","zx(v)"])
B.aGC.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.fI(x.ch.kW(d),x.ch.kV(d),x.ch.kU(d),x.ch.md(d))}else w.fI(d,e,f,g)
w.q();++u.a}},
$S:1213}
B.aPW.prototype={
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
$S:1214}
B.aWc.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.bz(),r=t.bz()
t=this.a
if(!t.d.y.aL(s))throw C.n(C.bM("Invalid Component in SOS block"))
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
B.b33.prototype={
$1(d){return d!==""},
$S:10}
B.bl2.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:85};(function installTearOffs(){var x=a._instance_2u,w=a._static_1,v=a._instance_1u,u=a.installStaticTearOff
var t
x(t=B.agf.prototype,"gaSG","aSH",2)
x(t,"gaSJ","aSK",2)
x(t,"gaSL","aSM",2)
x(t,"gaSA","aSB",2)
x(t,"gaSC","aSD",2)
w(B,"cNc","cCD",0)
w(B,"cN5","cCv",0)
w(B,"cN3","cCt",0)
w(B,"cNa","cCB",0)
w(B,"cNb","cCC",0)
w(B,"cN9","cCA",0)
w(B,"cN8","cCz",0)
w(B,"cN7","cCy",0)
w(B,"cNe","cCF",0)
w(B,"cNd","cCE",0)
w(B,"cN6","cCw",0)
w(B,"cN4","cCu",0)
w(B,"cNp","cCQ",0)
w(B,"cNn","cCO",0)
w(B,"cNf","cCG",0)
w(B,"cNh","cCI",0)
w(B,"cNg","cCH",0)
w(B,"cNi","cCJ",0)
w(B,"cNq","cCR",0)
w(B,"cNo","cCP",0)
w(B,"cNj","cCK",0)
w(B,"cNk","cCL",0)
w(B,"cNl","cCM",0)
w(B,"cNm","cCN",0)
v(B.a0B.prototype,"gb9k","b9l",4)
v(B.ag0.prototype,"gboP","boQ",4)
u(B,"c90",3,null,["$3"],["cCS"],1,0)
u(B,"cNr",3,null,["$3"],["cCT"],1,0)
u(B,"cNw",3,null,["$3"],["cCY"],1,0)
u(B,"cNx",3,null,["$3"],["cCZ"],1,0)
u(B,"cNy",3,null,["$3"],["cD_"],1,0)
u(B,"cNz",3,null,["$3"],["cD0"],1,0)
u(B,"cNA",3,null,["$3"],["cD1"],1,0)
u(B,"cNB",3,null,["$3"],["cD2"],1,0)
u(B,"cNC",3,null,["$3"],["cD3"],1,0)
u(B,"cND",3,null,["$3"],["cD4"],1,0)
u(B,"cNs",3,null,["$3"],["cCU"],1,0)
u(B,"cNt",3,null,["$3"],["cCV"],1,0)
u(B,"cNu",3,null,["$3"],["cCW"],1,0)
u(B,"cNv",3,null,["$3"],["cCX"],1,0)
u(B,"cNG",6,null,["$6"],["cDf"],3,0)
u(B,"cNH",6,null,["$6"],["cDg"],3,0)
u(B,"cNF",6,null,["$6"],["cDe"],3,0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(C.h6,[B.kC,B.KE,B.DP,B.qB,B.KY,B.A5,B.re,B.mA,B.H_,B.jn,B.pO,B.Hb,B.OQ])
x(C.E,[B.aGD,B.CX,B.aLe,B.ae3,B.aPU,B.ae4,B.ae5,B.ae6,B.UT,B.auf,B.Vn,B.Vo,B.aeQ,B.aUW,B.afA,B.ach,B.Eg,B.aW8,B.zx,B.aWa,B.PM,B.age,B.aWe,B.aWf,B.agf,B.u7,B.MB,B.b4F,B.MA,B.b4H,B.aiY,B.aj0,B.aj7,B.Yg,B.ME,B.aj6,B.py,B.amx,B.biU,B.amy,B.biW,B.amz,B.biX,B.aXs,B.bkQ,B.a0A,B.bkR,B.bkW,B.bl_,B.bl1,B.a0z,B.bl0,B.bkS,B.Ha,B.anb,B.and,B.anc,B.ane,B.a0B,B.an9,B.bkX,B.ana,B.blv,B.a0G,B.afi,B.Vt,B.ans,B.ahP])
x(C.acY,[B.abh,B.aPV,B.aSZ,B.aUV,B.W9,B.b32,B.b4G,B.b4R,B.biK,B.biV,B.blw])
x(C.ci,[B.aGC,B.aPW,B.aWc,B.b33])
w(B.aLE,B.abh)
w(B.aVQ,B.aPU)
x(B.aVQ,[B.afT,B.aVR,B.aVS,B.aVT,B.afV])
w(B.afU,B.UT)
w(B.afW,B.Vo)
w(B.aUU,B.CX)
x(B.Eg,[B.Eh,B.VB])
w(B.Fw,B.aLe)
x(B.u7,[B.aiW,B.aiX,B.aiZ,B.aj_,B.aj2,B.aj3])
x(B.MB,[B.Yc,B.aj1])
x(B.aj7,[B.wy,B.kX])
w(B.bl2,C.dn)
w(B.ag0,B.a0B)
w(B.ag1,B.a0G)
w(B.ag2,B.ans)})()
C.cD(b.typeUniverse,JSON.parse('{"afU":{"UT":[]},"afW":{"Vo":[]},"Eh":{"Eg":[]},"VB":{"Eg":[]},"aiW":{"u7":[]},"aiX":{"u7":[]},"aiZ":{"u7":[]},"aj_":{"u7":[]},"aj2":{"u7":[]},"aj3":{"u7":[]},"Yc":{"MB":[]},"aj1":{"MB":[]},"ag1":{"a0G":[]}}'))
C.a7u(b.typeUniverse,JSON.parse('{"aj7":1}'))
var y=(function rtii(){var x=C.J
return{n:x("ae3"),W:x("ae5"),f:x("Vt"),x:x("afi"),Y:x("afA"),P:x("n4"),u:x("kd"),k:x("Ep"),E:x("x<ach>"),Q:x("x<ae4>"),m:x("x<UT>"),b:x("x<Vo>"),A:x("x<Vt>"),g:x("x<w<w<w<v>>>>"),o:x("x<w<w<v>>>"),S:x("x<w<v>>"),X:x("x<MA>"),v:x("x<u7>"),l:x("x<aj0>"),s:x("x<f>"),L:x("x<amz>"),d:x("x<Ha>"),F:x("x<ana>"),J:x("x<a0G>"),G:x("x<PM>"),t:x("x<v>"),T:x("x<Eg?>"),a:x("x<age?>"),w:x("x<oD?>"),y:x("x<~(kO)>"),c:x("zx"),H:x("w<Ep>"),z:x("w<a0z>"),K:x("w<Ha>"),e:x("MA"),h:x("aiY"),C:x("Yc"),O:x("MB"),M:x("Yg"),i:x("ME"),N:x("f"),j:x("amy"),R:x("oD"),D:x("e1"),V:x("a0z"),q:x("anb"),_:x("anc"),bt:x("ane"),U:x("ag<f>"),bc:x("auf"),p:x("v"),r:x("afS?"),bT:x("w<Eg?>?"),ac:x("e1?"),ak:x("a0A?"),B:x("Ha?"),Z:x("and?"),I:x("v?")}})();(function constants(){var x=a.makeConstList
A.HL=new B.kC(0,"none")
A.zF=new B.kC(3,"bitfields")
A.zG=new B.kC(6,"alphaBitfields")
A.dZ7=new B.DP(0,"red")
A.dZ8=new B.DP(1,"green")
A.dZ9=new B.DP(2,"blue")
A.dZa=new B.DP(3,"alpha")
A.dZb=new B.DP(4,"other")
A.N4=new B.KE(0,"uint")
A.Ch=new B.KE(1,"half")
A.Ci=new B.KE(2,"float")
A.N5=new B.qB(0,"none")
A.dZP=new C.aeC(1,"page")
A.Ny=new B.KY(2,"cur")
A.D4=x([0,2,8],y.t)
A.e4S=x([0,4,2,1],y.t)
A.dZV=new B.KY(0,"invalid")
A.dZW=new B.KY(1,"ico")
A.e4V=x([A.dZV,A.dZW,A.Ny],C.J("x<KY>"))
A.Tb=x([292,260,226,226],y.t)
A.enw=x([2,3,7],y.t)
A.Tf=x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68],y.t)
A.et8=x([3,3,11],y.t)
A.DZ=x([128,128,128,128,128,128,128,128,128,128,128],y.t)
A.Um=x([A.DZ,A.DZ,A.DZ],y.S)
A.eK6=x([253,136,254,255,228,219,128,128,128,128,128],y.t)
A.eP1=x([189,129,242,255,227,213,255,219,128,128,128],y.t)
A.eP8=x([106,126,227,252,214,209,255,255,128,128,128],y.t)
A.eS7=x([A.eK6,A.eP1,A.eP8],y.S)
A.eT_=x([1,98,248,255,236,226,255,255,128,128,128],y.t)
A.exC=x([181,133,238,254,221,234,255,154,128,128,128],y.t)
A.ete=x([78,134,202,247,198,180,255,219,128,128,128],y.t)
A.eWF=x([A.eT_,A.exC,A.ete],y.S)
A.eGL=x([1,185,249,255,243,255,128,128,128,128,128],y.t)
A.eSc=x([184,150,247,255,236,224,128,128,128,128,128],y.t)
A.f1X=x([77,110,216,255,236,230,128,128,128,128,128],y.t)
A.eRl=x([A.eGL,A.eSc,A.f1X],y.S)
A.eRx=x([1,101,251,255,241,255,128,128,128,128,128],y.t)
A.eK4=x([170,139,241,252,236,209,255,255,128,128,128],y.t)
A.eRH=x([37,116,196,243,228,255,255,255,128,128,128],y.t)
A.eDa=x([A.eRx,A.eK4,A.eRH],y.S)
A.ePD=x([1,204,254,255,245,255,128,128,128,128,128],y.t)
A.f5k=x([207,160,250,255,238,128,128,128,128,128,128],y.t)
A.f53=x([102,103,231,255,211,171,128,128,128,128,128],y.t)
A.eNN=x([A.ePD,A.f5k,A.f53],y.S)
A.eAU=x([1,152,252,255,240,255,128,128,128,128,128],y.t)
A.f5K=x([177,135,243,255,234,225,128,128,128,128,128],y.t)
A.eR6=x([80,129,211,255,194,224,128,128,128,128,128],y.t)
A.eS6=x([A.eAU,A.f5K,A.eR6],y.S)
A.Us=x([1,1,255,128,128,128,128,128,128,128,128],y.t)
A.eV3=x([246,1,255,128,128,128,128,128,128,128,128],y.t)
A.eQy=x([255,128,128,128,128,128,128,128,128,128,128],y.t)
A.f7m=x([A.Us,A.eV3,A.eQy],y.S)
A.eNA=x([A.Um,A.eS7,A.eWF,A.eRl,A.eDa,A.eNN,A.eS6,A.f7m],y.o)
A.f28=x([198,35,237,223,193,187,162,160,145,155,62],y.t)
A.eK5=x([131,45,198,221,172,176,220,157,252,221,1],y.t)
A.f26=x([68,47,146,208,149,167,221,162,255,223,128],y.t)
A.eQ0=x([A.f28,A.eK5,A.f26],y.S)
A.eWU=x([1,149,241,255,221,224,255,255,128,128,128],y.t)
A.eYI=x([184,141,234,253,222,220,255,199,128,128,128],y.t)
A.eQq=x([81,99,181,242,176,190,249,202,255,255,128],y.t)
A.f08=x([A.eWU,A.eYI,A.eQq],y.S)
A.eZC=x([1,129,232,253,214,197,242,196,255,255,128],y.t)
A.f4M=x([99,121,210,250,201,198,255,202,128,128,128],y.t)
A.eS8=x([23,91,163,242,170,187,247,210,255,255,128],y.t)
A.eQD=x([A.eZC,A.f4M,A.eS8],y.S)
A.eOn=x([1,200,246,255,234,255,128,128,128,128,128],y.t)
A.eZu=x([109,178,241,255,231,245,255,255,128,128,128],y.t)
A.ent=x([44,130,201,253,205,192,255,255,128,128,128],y.t)
A.f0Y=x([A.eOn,A.eZu,A.ent],y.S)
A.ez5=x([1,132,239,251,219,209,255,165,128,128,128],y.t)
A.e4X=x([94,136,225,251,218,190,255,255,128,128,128],y.t)
A.f_1=x([22,100,174,245,186,161,255,199,128,128,128],y.t)
A.eRu=x([A.ez5,A.e4X,A.f_1],y.S)
A.eYH=x([1,182,249,255,232,235,128,128,128,128,128],y.t)
A.eRX=x([124,143,241,255,227,234,128,128,128,128,128],y.t)
A.eOX=x([35,77,181,251,193,211,255,205,128,128,128],y.t)
A.ePd=x([A.eYH,A.eRX,A.eOX],y.S)
A.f7n=x([1,157,247,255,236,231,255,255,128,128,128],y.t)
A.eNs=x([121,141,235,255,225,227,255,255,128,128,128],y.t)
A.eZA=x([45,99,188,251,195,217,255,224,128,128,128],y.t)
A.eBb=x([A.f7n,A.eNs,A.eZA],y.S)
A.e4Y=x([1,1,251,255,213,255,128,128,128,128,128],y.t)
A.enC=x([203,1,248,255,255,128,128,128,128,128,128],y.t)
A.eYQ=x([137,1,177,255,224,255,128,128,128,128,128],y.t)
A.eB3=x([A.e4Y,A.enC,A.eYQ],y.S)
A.eYa=x([A.eQ0,A.f08,A.eQD,A.f0Y,A.eRu,A.ePd,A.eBb,A.eB3],y.o)
A.eO_=x([253,9,248,251,207,208,255,192,128,128,128],y.t)
A.eV4=x([175,13,224,243,193,185,249,198,255,255,128],y.t)
A.f7j=x([73,17,171,221,161,179,236,167,255,234,128],y.t)
A.eTx=x([A.eO_,A.eV4,A.f7j],y.S)
A.eXt=x([1,95,247,253,212,183,255,255,128,128,128],y.t)
A.eQO=x([239,90,244,250,211,209,255,255,128,128,128],y.t)
A.f1W=x([155,77,195,248,188,195,255,255,128,128,128],y.t)
A.eYG=x([A.eXt,A.eQO,A.f1W],y.S)
A.ePG=x([1,24,239,251,218,219,255,205,128,128,128],y.t)
A.eW1=x([201,51,219,255,196,186,128,128,128,128,128],y.t)
A.eQN=x([69,46,190,239,201,218,255,228,128,128,128],y.t)
A.eXj=x([A.ePG,A.eW1,A.eQN],y.S)
A.eP4=x([1,191,251,255,255,128,128,128,128,128,128],y.t)
A.eRG=x([223,165,249,255,213,255,128,128,128,128,128],y.t)
A.eSk=x([141,124,248,255,255,128,128,128,128,128,128],y.t)
A.eZB=x([A.eP4,A.eRG,A.eSk],y.S)
A.eQ7=x([1,16,248,255,255,128,128,128,128,128,128],y.t)
A.eNq=x([190,36,230,255,236,255,128,128,128,128,128],y.t)
A.eK8=x([149,1,255,128,128,128,128,128,128,128,128],y.t)
A.ez6=x([A.eQ7,A.eNq,A.eK8],y.S)
A.eSa=x([1,226,255,128,128,128,128,128,128,128,128],y.t)
A.eUk=x([247,192,255,128,128,128,128,128,128,128,128],y.t)
A.f1P=x([240,128,255,128,128,128,128,128,128,128,128],y.t)
A.et3=x([A.eSa,A.eUk,A.f1P],y.S)
A.f0X=x([1,134,252,255,255,128,128,128,128,128,128],y.t)
A.eRV=x([213,62,250,255,255,128,128,128,128,128,128],y.t)
A.f5r=x([55,93,255,128,128,128,128,128,128,128,128],y.t)
A.eS9=x([A.f0X,A.eRV,A.f5r],y.S)
A.eGC=x([A.eTx,A.eYG,A.eXj,A.eZB,A.ez6,A.et3,A.eS9,A.Um],y.o)
A.eRY=x([202,24,213,235,186,191,220,160,240,175,255],y.t)
A.eK2=x([126,38,182,232,169,184,228,174,255,187,128],y.t)
A.ez8=x([61,46,138,219,151,178,240,170,255,216,128],y.t)
A.eYh=x([A.eRY,A.eK2,A.ez8],y.S)
A.eR5=x([1,112,230,250,199,191,247,159,255,255,128],y.t)
A.eBa=x([166,109,228,252,211,215,255,174,128,128,128],y.t)
A.eRB=x([39,77,162,232,172,180,245,178,255,255,128],y.t)
A.eYc=x([A.eR5,A.eBa,A.eRB],y.S)
A.eRf=x([1,52,220,246,198,199,249,220,255,255,128],y.t)
A.eNK=x([124,74,191,243,183,193,250,221,255,255,128],y.t)
A.eOW=x([24,71,130,219,154,170,243,182,255,255,128],y.t)
A.eYb=x([A.eRf,A.eNK,A.eOW],y.S)
A.eOU=x([1,182,225,249,219,240,255,224,128,128,128],y.t)
A.f5n=x([149,150,226,252,216,205,255,171,128,128,128],y.t)
A.f7z=x([28,108,170,242,183,194,254,223,255,255,128],y.t)
A.f2P=x([A.eOU,A.f5n,A.f7z],y.S)
A.f7E=x([1,81,230,252,204,203,255,192,128,128,128],y.t)
A.eZm=x([123,102,209,247,188,196,255,233,128,128,128],y.t)
A.f1l=x([20,95,153,243,164,173,255,203,128,128,128],y.t)
A.eZr=x([A.f7E,A.eZm,A.f1l],y.S)
A.eQk=x([1,222,248,255,216,213,128,128,128,128,128],y.t)
A.eRT=x([168,175,246,252,235,205,255,255,128,128,128],y.t)
A.eP0=x([47,116,215,255,211,212,255,255,128,128,128],y.t)
A.eNg=x([A.eQk,A.eRT,A.eP0],y.S)
A.eQf=x([1,121,236,253,212,214,255,255,128,128,128],y.t)
A.eRg=x([141,84,213,252,201,202,255,219,128,128,128],y.t)
A.eTo=x([42,80,160,240,162,185,255,205,128,128,128],y.t)
A.ePk=x([A.eQf,A.eRg,A.eTo],y.S)
A.f69=x([244,1,255,128,128,128,128,128,128,128,128],y.t)
A.e4T=x([238,1,255,128,128,128,128,128,128,128,128],y.t)
A.eUn=x([A.Us,A.f69,A.e4T],y.S)
A.eh_=x([A.eYh,A.eYc,A.eYb,A.f2P,A.eZr,A.eNg,A.ePk,A.eUn],y.o)
A.ez7=x([A.eNA,A.eYa,A.eGC,A.eh_],y.g)
A.ezH=x([511,1023,2047,4095],y.t)
A.eKa=x([8,8,4,2],y.t)
A.egx=x([173,148,140],y.t)
A.egB=x([176,155,140,135],y.t)
A.efk=x([180,157,141,134,130],y.t)
A.enA=x([254,254,243,230,196,177,153,140,133,130,129],y.t)
A.eKc=x([A.egx,A.egB,A.efk,A.enA],y.S)
A.eNE=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095],y.t)
A.eOa=x([280,256,256,256,40],y.t)
A.Ut=x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390],y.t)
A.DN=x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],y.t)
A.eOq=x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],y.t)
A.DO=x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],y.t)
A.eOL=x([A.N4,A.Ch,A.Ci],C.J("x<KE>"))
A.Uz=x([B.cNj(),B.cNb(),B.cNq(),B.cNo(),B.cNl(),B.cNk(),B.cNm()],y.y)
A.Go=new B.jn(0,"whiteIsZero")
A.fvI=new B.jn(1,"blackIsZero")
A.fvP=new B.jn(2,"rgb")
A.Gq=new B.jn(3,"palette")
A.fvQ=new B.jn(4,"transparencyMask")
A.a7E=new B.jn(5,"cmyk")
A.fvR=new B.jn(6,"yCbCr")
A.fvS=new B.jn(7,"reserved7")
A.fvT=new B.jn(8,"cieLab")
A.fvU=new B.jn(9,"iccLab")
A.fvJ=new B.jn(10,"ituLab")
A.fvK=new B.jn(11,"logL")
A.fvL=new B.jn(12,"logLuv")
A.fvM=new B.jn(13,"colorFilterArray")
A.fvN=new B.jn(14,"linearRaw")
A.fvO=new B.jn(15,"depth")
A.Gp=new B.jn(16,"unknown")
A.ePK=x([A.Go,A.fvI,A.fvP,A.Gq,A.fvQ,A.a7E,A.fvR,A.fvS,A.fvT,A.fvU,A.fvJ,A.fvK,A.fvL,A.fvM,A.fvN,A.fvO,A.Gp],C.J("x<jn>"))
A.fvA=new B.H_(0,"invalid")
A.a7C=new B.H_(1,"uint")
A.bH=new B.H_(2,"int")
A.tj=new B.H_(3,"float")
A.eQe=x([A.fvA,A.a7C,A.bH,A.tj],C.J("x<H_>"))
A.eQh=x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],y.t)
A.UK=x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],y.t)
A.eQM=x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],y.t)
A.dZc=new B.qB(1,"rle")
A.dZd=new B.qB(2,"zips")
A.dZe=new B.qB(3,"zip")
A.dZf=new B.qB(4,"piz")
A.dZg=new B.qB(5,"pxr24")
A.dZh=new B.qB(6,"b44")
A.dZi=new B.qB(7,"b44a")
A.eQP=x([A.N5,A.dZc,A.dZd,A.dZe,A.dZf,A.dZg,A.dZh,A.dZi],C.J("x<qB>"))
A.eTf=x([231,120,48,89,115,113,120,152,112],y.t)
A.eh0=x([152,179,64,126,170,118,46,70,95],y.t)
A.eQL=x([175,69,143,80,85,82,72,155,103],y.t)
A.eyX=x([56,58,10,171,218,189,17,13,152],y.t)
A.eRy=x([114,26,17,163,44,195,21,10,173],y.t)
A.eRR=x([121,24,80,195,26,62,44,64,85],y.t)
A.eRs=x([144,71,10,38,171,213,144,34,26],y.t)
A.f_x=x([170,46,55,19,136,160,33,206,71],y.t)
A.eOs=x([63,20,8,114,114,208,12,9,226],y.t)
A.ePE=x([81,40,11,96,182,84,29,16,36],y.t)
A.e5_=x([A.eTf,A.eh0,A.eQL,A.eyX,A.eRy,A.eRR,A.eRs,A.f_x,A.eOs,A.ePE],y.S)
A.eNp=x([134,183,89,137,98,101,106,165,148],y.t)
A.eZ6=x([72,187,100,130,157,111,32,75,80],y.t)
A.eS4=x([66,102,167,99,74,62,40,234,128],y.t)
A.et2=x([41,53,9,178,241,141,26,8,107],y.t)
A.ePr=x([74,43,26,146,73,166,49,23,157],y.t)
A.eOH=x([65,38,105,160,51,52,31,115,128],y.t)
A.eOO=x([104,79,12,27,217,255,87,17,7],y.t)
A.eQJ=x([87,68,71,44,114,51,15,186,23],y.t)
A.eYf=x([47,41,14,110,182,183,21,17,194],y.t)
A.eV2=x([66,45,25,102,197,189,23,18,22],y.t)
A.f1s=x([A.eNp,A.eZ6,A.eS4,A.et2,A.ePr,A.eOH,A.eOO,A.eQJ,A.eYf,A.eV2],y.S)
A.eT4=x([88,88,147,150,42,46,45,196,205],y.t)
A.eRC=x([43,97,183,117,85,38,35,179,61],y.t)
A.eP_=x([39,53,200,87,26,21,43,232,171],y.t)
A.eQv=x([56,34,51,104,114,102,29,93,77],y.t)
A.eRo=x([39,28,85,171,58,165,90,98,64],y.t)
A.eOA=x([34,22,116,206,23,34,43,166,73],y.t)
A.e50=x([107,54,32,26,51,1,81,43,31],y.t)
A.f_J=x([68,25,106,22,64,171,36,225,114],y.t)
A.eNo=x([34,19,21,102,132,188,16,76,124],y.t)
A.f2e=x([62,18,78,95,85,57,50,48,51],y.t)
A.eNU=x([A.eT4,A.eRC,A.eP_,A.eQv,A.eRo,A.eOA,A.e50,A.f_J,A.eNo,A.f2e],y.S)
A.eRi=x([193,101,35,159,215,111,89,46,111],y.t)
A.eGB=x([60,148,31,172,219,228,21,18,111],y.t)
A.ez4=x([112,113,77,85,179,255,38,120,114],y.t)
A.f2a=x([40,42,1,196,245,209,10,25,109],y.t)
A.eQc=x([88,43,29,140,166,213,37,43,154],y.t)
A.eOD=x([61,63,30,155,67,45,68,1,209],y.t)
A.eP7=x([100,80,8,43,154,1,51,26,71],y.t)
A.et6=x([142,78,78,16,255,128,34,197,171],y.t)
A.eR2=x([41,40,5,102,211,183,4,1,221],y.t)
A.eO6=x([51,50,17,168,209,192,23,25,82],y.t)
A.eNQ=x([A.eRi,A.eGB,A.ez4,A.f2a,A.eQc,A.eOD,A.eP7,A.et6,A.eR2,A.eO6],y.S)
A.eOV=x([138,31,36,171,27,166,38,44,229],y.t)
A.eNL=x([67,87,58,169,82,115,26,59,179],y.t)
A.eWD=x([63,59,90,180,59,166,93,73,154],y.t)
A.f10=x([40,40,21,116,143,209,34,39,175],y.t)
A.etb=x([47,15,16,183,34,223,49,45,183],y.t)
A.eIl=x([46,17,33,183,6,98,15,32,183],y.t)
A.f7G=x([57,46,22,24,128,1,54,17,37],y.t)
A.ePb=x([65,32,73,115,28,128,23,128,205],y.t)
A.eS3=x([40,3,9,115,51,192,18,6,223],y.t)
A.ePo=x([87,37,9,115,59,77,64,21,47],y.t)
A.eR1=x([A.eOV,A.eNL,A.eWD,A.f10,A.etb,A.eIl,A.f7G,A.ePb,A.eS3,A.ePo],y.S)
A.f66=x([104,55,44,218,9,54,53,130,226],y.t)
A.eB9=x([64,90,70,205,40,41,23,26,57],y.t)
A.eWz=x([54,57,112,184,5,41,38,166,213],y.t)
A.eOC=x([30,34,26,133,152,116,10,32,134],y.t)
A.eTy=x([39,19,53,221,26,114,32,73,255],y.t)
A.eO4=x([31,9,65,234,2,15,1,118,73],y.t)
A.eQZ=x([75,32,12,51,192,255,160,43,51],y.t)
A.eOG=x([88,31,35,67,102,85,55,186,85],y.t)
A.ePO=x([56,21,23,111,59,205,45,37,192],y.t)
A.ePW=x([55,38,70,124,73,102,1,34,98],y.t)
A.f6N=x([A.f66,A.eB9,A.eWz,A.eOC,A.eTy,A.eO4,A.eQZ,A.eOG,A.ePO,A.ePW],y.S)
A.ePN=x([125,98,42,88,104,85,117,175,82],y.t)
A.eOK=x([95,84,53,89,128,100,113,101,45],y.t)
A.eRJ=x([75,79,123,47,51,128,81,171,1],y.t)
A.eB6=x([57,17,5,71,102,57,53,41,49],y.t)
A.eVR=x([38,33,13,121,57,73,26,1,85],y.t)
A.f5m=x([41,10,67,138,77,110,90,47,114],y.t)
A.eQQ=x([115,21,2,10,102,255,166,23,6],y.t)
A.eNr=x([101,29,16,10,85,128,101,196,26],y.t)
A.eP3=x([57,18,10,102,102,213,34,20,43],y.t)
A.eQ9=x([117,20,15,36,163,128,68,1,26],y.t)
A.eQG=x([A.ePN,A.eOK,A.eRJ,A.eB6,A.eVR,A.f5m,A.eQQ,A.eNr,A.eP3,A.eQ9],y.S)
A.ePl=x([102,61,71,37,34,53,31,243,192],y.t)
A.f4V=x([69,60,71,38,73,119,28,222,37],y.t)
A.ePp=x([68,45,128,34,1,47,11,245,171],y.t)
A.edP=x([62,17,19,70,146,85,55,62,70],y.t)
A.f7t=x([37,43,37,154,100,163,85,160,1],y.t)
A.f2S=x([63,9,92,136,28,64,32,201,85],y.t)
A.eZb=x([75,15,9,9,64,255,184,119,16],y.t)
A.eNH=x([86,6,28,5,64,255,25,248,1],y.t)
A.eUp=x([56,8,17,132,137,255,55,116,128],y.t)
A.eA1=x([58,15,20,82,135,57,26,121,40],y.t)
A.eRr=x([A.ePl,A.f4V,A.ePp,A.edP,A.f7t,A.f2S,A.eZb,A.eNH,A.eUp,A.eA1],y.S)
A.eRN=x([164,50,31,137,154,133,25,35,218],y.t)
A.eNG=x([51,103,44,131,131,123,31,6,158],y.t)
A.f2N=x([86,40,64,135,148,224,45,183,128],y.t)
A.eQK=x([22,26,17,131,240,154,14,1,209],y.t)
A.eGJ=x([45,16,21,91,64,222,7,1,197],y.t)
A.f11=x([56,21,39,155,60,138,23,102,213],y.t)
A.f6B=x([83,12,13,54,192,255,68,47,28],y.t)
A.eS5=x([85,26,85,85,128,128,32,146,171],y.t)
A.eQz=x([18,11,7,63,144,171,4,4,246],y.t)
A.eNV=x([35,27,10,146,174,171,12,26,128],y.t)
A.eQl=x([A.eRN,A.eNG,A.f2N,A.eQK,A.eGJ,A.f11,A.f6B,A.eS5,A.eQz,A.eNV],y.S)
A.eY9=x([190,80,35,99,180,80,126,54,45],y.t)
A.f_w=x([85,126,47,87,176,51,41,20,32],y.t)
A.eW2=x([101,75,128,139,118,146,116,128,85],y.t)
A.eZ2=x([56,41,15,176,236,85,37,9,62],y.t)
A.eAT=x([71,30,17,119,118,255,17,18,138],y.t)
A.eRq=x([101,38,60,138,55,70,43,26,142],y.t)
A.eQs=x([146,36,19,30,171,255,97,27,20],y.t)
A.eT1=x([138,45,61,62,219,1,81,188,64],y.t)
A.f2b=x([32,41,20,117,151,142,20,21,163],y.t)
A.f_E=x([112,19,12,61,195,128,48,4,24],y.t)
A.eXi=x([A.eY9,A.f_w,A.eW2,A.eZ2,A.eAT,A.eRq,A.eQs,A.eT1,A.f2b,A.f_E],y.S)
A.eR_=x([A.e5_,A.f1s,A.eNU,A.eNQ,A.eR1,A.f6N,A.eQG,A.eRr,A.eQl,A.eXi],y.o)
A.yE=new B.mA(0,"none")
A.mQ=new B.mA(1,"palette")
A.a7z=new B.mA(2,"rgb")
A.fvs=new B.mA(3,"gray")
A.fvt=new B.mA(4,"reserved4")
A.fvu=new B.mA(5,"reserved5")
A.fvv=new B.mA(6,"reserved6")
A.fvw=new B.mA(7,"reserved7")
A.fvx=new B.mA(8,"reserved8")
A.mR=new B.mA(9,"paletteRle")
A.a7y=new B.mA(10,"rgbRle")
A.fvr=new B.mA(11,"grayRle")
A.eR7=x([A.yE,A.mQ,A.a7z,A.fvs,A.fvt,A.fvu,A.fvv,A.fvw,A.fvx,A.mR,A.a7y,A.fvr],C.J("x<mA>"))
A.eRI=x([B.cN3(),B.cNa(),B.cNc(),B.cN5(),B.cN8(),B.cNe(),B.cN7(),B.cNd(),B.cN4(),B.cN6()],y.y)
A.DH=x([8,0,8,0],y.t)
A.eB8=x([5,3,5,3],y.t)
A.et9=x([3,5,3,5],y.t)
A.Pb=x([0,8,0,8],y.t)
A.U3=x([4,4,4,4],y.t)
A.ez1=x([4,4,0,0],y.t)
A.UP=x([A.DH,A.eB8,A.et9,A.Pb,A.DH,A.U3,A.ez1,A.Pb],y.S)
A.UQ=x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41],y.t)
A.x9=x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845],y.t)
A.US=x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127],y.t)
A.UT=x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],y.t)
A.xa=x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567],y.t)
A.UU=x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232],y.t)
A.V3=x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],y.t)
A.ru=x([0,1,3,7,15,31,63,127,255],y.t)
A.eW=x([255,255,255,255,255,255,255,255,255,255,255],y.t)
A.pk=x([A.eW,A.eW,A.eW],y.S)
A.eQu=x([176,246,255,255,255,255,255,255,255,255,255],y.t)
A.f5J=x([223,241,252,255,255,255,255,255,255,255,255],y.t)
A.eNd=x([249,253,253,255,255,255,255,255,255,255,255],y.t)
A.eQX=x([A.eQu,A.f5J,A.eNd],y.S)
A.ePJ=x([255,244,252,255,255,255,255,255,255,255,255],y.t)
A.ePh=x([234,254,254,255,255,255,255,255,255,255,255],y.t)
A.Vc=x([253,255,255,255,255,255,255,255,255,255,255],y.t)
A.eND=x([A.ePJ,A.ePh,A.Vc],y.S)
A.f2l=x([255,246,254,255,255,255,255,255,255,255,255],y.t)
A.eU9=x([239,253,254,255,255,255,255,255,255,255,255],y.t)
A.V5=x([254,255,254,255,255,255,255,255,255,255,255],y.t)
A.eZ8=x([A.f2l,A.eU9,A.V5],y.S)
A.UB=x([255,248,254,255,255,255,255,255,255,255,255],y.t)
A.eOk=x([251,255,254,255,255,255,255,255,255,255,255],y.t)
A.eRQ=x([A.UB,A.eOk,A.eW],y.S)
A.Ds=x([255,253,254,255,255,255,255,255,255,255,255],y.t)
A.eRL=x([251,254,254,255,255,255,255,255,255,255,255],y.t)
A.eOx=x([A.Ds,A.eRL,A.V5],y.S)
A.eyV=x([255,254,253,255,254,255,255,255,255,255,255],y.t)
A.ePC=x([250,255,254,255,254,255,255,255,255,255,255],y.t)
A.xe=x([254,255,255,255,255,255,255,255,255,255,255],y.t)
A.eQd=x([A.eyV,A.ePC,A.xe],y.S)
A.eP2=x([A.pk,A.eQX,A.eND,A.eZ8,A.eRQ,A.eOx,A.eQd,A.pk],y.o)
A.egY=x([217,255,255,255,255,255,255,255,255,255,255],y.t)
A.eQp=x([225,252,241,253,255,255,254,255,255,255,255],y.t)
A.eWq=x([234,250,241,250,253,255,253,254,255,255,255],y.t)
A.f_G=x([A.egY,A.eQp,A.eWq],y.S)
A.E3=x([255,254,255,255,255,255,255,255,255,255,255],y.t)
A.eNh=x([223,254,254,255,255,255,255,255,255,255,255],y.t)
A.eGK=x([238,253,254,254,255,255,255,255,255,255,255],y.t)
A.eTr=x([A.E3,A.eNh,A.eGK],y.S)
A.ePn=x([249,254,255,255,255,255,255,255,255,255,255],y.t)
A.f2d=x([A.UB,A.ePn,A.eW],y.S)
A.f_V=x([255,253,255,255,255,255,255,255,255,255,255],y.t)
A.eRK=x([247,254,255,255,255,255,255,255,255,255,255],y.t)
A.eRv=x([A.f_V,A.eRK,A.eW],y.S)
A.eDk=x([252,255,255,255,255,255,255,255,255,255,255],y.t)
A.et4=x([A.Ds,A.eDk,A.eW],y.S)
A.Vd=x([255,254,254,255,255,255,255,255,255,255,255],y.t)
A.eGH=x([A.Vd,A.Vc,A.eW],y.S)
A.eTn=x([255,254,253,255,255,255,255,255,255,255,255],y.t)
A.UF=x([250,255,255,255,255,255,255,255,255,255,255],y.t)
A.eDi=x([A.eTn,A.UF,A.xe],y.S)
A.eyY=x([A.f_G,A.eTr,A.f2d,A.eRv,A.et4,A.eGH,A.eDi,A.pk],y.o)
A.eXk=x([186,251,250,255,255,255,255,255,255,255,255],y.t)
A.eO9=x([234,251,244,254,255,255,255,255,255,255,255],y.t)
A.eZa=x([251,251,243,253,254,255,254,255,255,255,255],y.t)
A.eOu=x([A.eXk,A.eO9,A.eZa],y.S)
A.eOm=x([236,253,254,255,255,255,255,255,255,255,255],y.t)
A.eTm=x([251,253,253,254,254,255,255,255,255,255,255],y.t)
A.eQ_=x([A.Ds,A.eOm,A.eTm],y.S)
A.eY6=x([254,254,254,255,255,255,255,255,255,255,255],y.t)
A.eOg=x([A.Vd,A.eY6,A.eW],y.S)
A.eZt=x([254,254,255,255,255,255,255,255,255,255,255],y.t)
A.eOl=x([A.E3,A.eZt,A.xe],y.S)
A.Ve=x([A.eW,A.xe,A.eW],y.S)
A.eyW=x([A.eOu,A.eQ_,A.eOg,A.eOl,A.Ve,A.pk,A.pk,A.pk],y.o)
A.ePA=x([248,255,255,255,255,255,255,255,255,255,255],y.t)
A.eOJ=x([250,254,252,254,255,255,255,255,255,255,255],y.t)
A.eO5=x([248,254,249,253,255,255,255,255,255,255,255],y.t)
A.eQ3=x([A.ePA,A.eOJ,A.eO5],y.S)
A.evK=x([255,253,253,255,255,255,255,255,255,255,255],y.t)
A.f0R=x([246,253,253,255,255,255,255,255,255,255,255],y.t)
A.eOw=x([252,254,251,254,254,255,255,255,255,255,255],y.t)
A.f0Q=x([A.evK,A.f0R,A.eOw],y.S)
A.f7o=x([255,254,252,255,255,255,255,255,255,255,255],y.t)
A.eO2=x([248,254,253,255,255,255,255,255,255,255,255],y.t)
A.eDh=x([253,255,254,254,255,255,255,255,255,255,255],y.t)
A.eS_=x([A.f7o,A.eO2,A.eDh],y.S)
A.f6z=x([255,251,254,255,255,255,255,255,255,255,255],y.t)
A.eRj=x([245,251,254,255,255,255,255,255,255,255,255],y.t)
A.eRp=x([253,253,254,255,255,255,255,255,255,255,255],y.t)
A.eLZ=x([A.f6z,A.eRj,A.eRp],y.S)
A.eNb=x([255,251,253,255,255,255,255,255,255,255,255],y.t)
A.ePM=x([252,253,254,255,255,255,255,255,255,255,255],y.t)
A.eYn=x([A.eNb,A.ePM,A.E3],y.S)
A.eDc=x([255,252,255,255,255,255,255,255,255,255,255],y.t)
A.f5P=x([249,255,254,255,255,255,255,255,255,255,255],y.t)
A.eOS=x([255,255,254,255,255,255,255,255,255,255,255],y.t)
A.edO=x([A.eDc,A.f5P,A.eOS],y.S)
A.f7u=x([255,255,253,255,255,255,255,255,255,255,255],y.t)
A.eOj=x([A.f7u,A.UF,A.eW],y.S)
A.eDg=x([A.eQ3,A.f0Q,A.eS_,A.eLZ,A.eYn,A.edO,A.eOj,A.Ve],y.o)
A.eZD=x([A.eP2,A.eyY,A.eyW,A.eDg],y.g)
A.aaO=new B.kC(1,"rle8")
A.aaT=new B.kC(2,"rle4")
A.aaU=new B.kC(4,"jpeg")
A.aaV=new B.kC(5,"png")
A.aaW=new B.kC(7,"reserved7")
A.aaX=new B.kC(8,"reserved8")
A.aaY=new B.kC(9,"reserved9")
A.aaP=new B.kC(10,"reserved10")
A.aaQ=new B.kC(11,"cmyk")
A.aaR=new B.kC(12,"cmykRle8")
A.aaS=new B.kC(13,"cmykRle4")
A.V6=x([A.HL,A.aaO,A.aaT,A.zF,A.aaU,A.aaV,A.zG,A.aaW,A.aaX,A.aaY,A.aaP,A.aaQ,A.aaR,A.aaS],C.J("x<kC>"))
A.E0=x([0,128,192,224,240,248,252,254,255],y.t)
A.E1=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295],y.t)
A.a8n=new B.Hb(0,"predictor")
A.fxR=new B.Hb(1,"crossColor")
A.fxS=new B.Hb(2,"subtractGreen")
A.a8o=new B.Hb(3,"colorIndexing")
A.f2_=x([A.a8n,A.fxR,A.fxS,A.a8o],C.J("x<Hb>"))
A.eX=x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255],y.t)
A.f4S=x([B.cNf(),B.cN9(),B.cNp(),B.cNn(),B.cNh(),B.cNg(),B.cNi()],y.y)
A.Vh=x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],y.t)
A.f50=x([null,B.cNG(),B.cNH(),B.cNF()],C.J("x<~(v,v,v,v,v,e1)?>"))
A.Vi=x([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15],y.t)
A.xf=x([0,36,72,109,145,182,218,255],y.t)
A.lj=x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255],y.t)
A.fg4=new B.re(0,"bitmap")
A.a4L=new B.re(1,"grayscale")
A.fg5=new B.re(2,"indexed")
A.a4M=new B.re(3,"rgb")
A.a4N=new B.re(4,"cmyk")
A.fg6=new B.re(5,"multiChannel")
A.fg7=new B.re(6,"duoTone")
A.a4O=new B.re(7,"lab")
A.f5O=x([A.fg4,A.a4L,A.fg5,A.a4M,A.a4N,A.fg6,A.fg7,A.a4O],C.J("x<re>"))
A.xg=x([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63],y.t)
A.enx=x([2,6,2,6],y.t)
A.eDe=x([6,2,6,2],y.t)
A.env=x([2,2,6,6],y.t)
A.egX=x([1,3,3,9],y.t)
A.ez_=x([4,0,12,0],y.t)
A.et7=x([3,1,9,3],y.t)
A.eK9=x([8,8,0,0],y.t)
A.ez0=x([4,12,0,0],y.t)
A.egt=x([16,0,0,0],y.t)
A.edh=x([12,4,0,0],y.t)
A.eDf=x([6,6,2,2],y.t)
A.eta=x([3,9,1,3],y.t)
A.edg=x([12,0,4,0],y.t)
A.eNc=x([9,3,3,1],y.t)
A.dM=x([A.U3,A.enx,A.DH,A.eDe,A.env,A.egX,A.ez_,A.et7,A.eK9,A.ez0,A.egt,A.edh,A.eDf,A.eta,A.edg,A.eNc],y.S)
A.pl=x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1],y.t)
A.rS=new B.A5(0,"invalid")
A.a49=new B.A5(1,"pbm")
A.a4a=new B.A5(2,"pgm2")
A.EZ=new B.A5(3,"pgm5")
A.a4b=new B.A5(4,"ppm3")
A.F_=new B.A5(5,"ppm6")
A.Gn=new B.pO(0,"bilevel")
A.fvB=new B.pO(1,"gray4bit")
A.fvC=new B.pO(2,"gray")
A.fvD=new B.pO(3,"grayAlpha")
A.fvE=new B.pO(4,"palette")
A.a7D=new B.pO(5,"rgb")
A.fvF=new B.pO(6,"rgba")
A.fvG=new B.pO(7,"yCbCrSub")
A.tk=new B.pO(8,"generic")
A.fvH=new B.pO(9,"invalid")
A.tp=new B.OQ(0,"undefined")
A.GN=new B.OQ(1,"lossy")
A.yO=new B.OQ(2,"lossless")
A.fCm=new B.OQ(3,"animated")})();(function staticFields(){$.c7I=null
$.cib=!1
$.cic=C.c([B.c90(),B.cNr(),B.cNw(),B.cNx(),B.cNy(),B.cNz(),B.cNA(),B.cNB(),B.cNC(),B.cND(),B.cNs(),B.cNt(),B.cNu(),B.cNv(),B.c90(),B.c90()],C.J("x<v(oD,v,v)>"))})();(function lazyInitializers(){var x=a.lazy
x($,"cRB","aCk",()=>C.tU(511))
x($,"cRC","c2L",()=>C.tU(511))
x($,"cRE","c2M",()=>C.cfa(2041))
x($,"cRF","c2N",()=>C.cfa(225))
x($,"cRD","nJ",()=>C.tU(766))})()};
(a=>{a["AUaWVCGddMvOiqm0l71ozRQgk6M="]=a.current})($__dart_deferred_initializers__);