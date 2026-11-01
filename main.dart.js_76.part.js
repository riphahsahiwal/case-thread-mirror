((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,B={
c8g(d){var x,w,v=new B.aFn()
if(!B.c0y(d))C.a8(C.bH("Not a bitmap file."))
d.d+=2
x=d.Z()
w=$.fy()
w.$flags&2&&C.u(w)
w[0]=x
x=$.jo()
d.d+=4
w[0]=d.Z()
v.b=x[0]
return v},
c0y(d){if(d.c-d.d<2)return!1
return C.bP(d,null,0).ad()===19778},
coC(d,e){var x,w,v,u,t=e==null?B.c8g(d):e,s=d.d,r=d.Z(),q=d.Z(),p=$.fy()
p.$flags&2&&C.u(p)
p[0]=q
q=$.jo()
x=q[0]
p[0]=d.Z()
q=q[0]
w=d.ad()
v=d.ad()
u=A.Uy[d.Z()]
d.Z()
p[0]=d.Z()
p[0]=d.Z()
p=d.Z()
d.Z()
s=new B.Cj(t,x,q,r,w,v,u,p,s)
s.aea(d,e)
return s},
kA:function kA(d,e){this.a=d
this.b=e},
aFn:function aFn(){this.b=$},
Cj:function Cj(d,e,f,g,h,i,j,k,l){var _=this
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
aaq:function aaq(d){this.a=$
this.b=null
this.c=d},
aFm:function aFm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKu:function aKu(d){this.a=$
this.b=null
this.c=d},
aK4:function aK4(){},
adc:function adc(d,e,f){this.a=d
this.b=e
this.c=f},
af1:function af1(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
K7:function K7(d,e){this.a=d
this.b=e},
Df:function Df(d,e){this.a=d
this.b=e},
add:function add(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
c9J(d,e,f,g){var x,w
switch(d.a){case 1:return new B.aUv(f,e)
case 2:return new B.af3(f,g==null?1:g,e)
case 3:return new B.af3(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new B.aUt(f,x,e)
w.aLw(e,f,x)
return w
case 5:return new B.aUu(f,g==null?16:g,e)
case 6:return new B.af1(f,g==null?32:g,!1,e)
case 7:return new B.af1(f,g==null?32:g,!0,e)
default:throw C.i(C.bH("Invalid compression type: "+d.j(0)))}},
qi:function qi(d,e){this.a=d
this.b=e},
aOK:function aOK(){},
aUs:function aUs(){},
crx(d,e,f,g){var x,w,v,u,t,s,r,q
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
for(q=0;q<16384;++q)r[q]=new B.ade()
B.cry(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw C.i(C.bH("Error in header for Huffman-encoded data (invalid number of bits)."))
B.cru(s,w,v,r)
B.crw(s,r,d,u,v,g,f)},
crw(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=C.c([0,0],y.t),n=f.d+D.f.av(g+7,8)
for(x=0;f.d<n;){B.c1n(o,f)
while(w=o[1],w>=14){v=e[D.f.j7(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=B.c1o(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw C.i(C.bH(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
for(;;){w=o[1]
if(!(w<s&&f.d<n))break
B.c1n(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.f.j7(o[0],w)&D.f.cN(1,s)-1)>>>0){o[1]=w
r=B.c1o(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw C.i(C.bH(p))}}}q=8-g&7
o[0]=D.f.R(o[0],q)
o[1]=o[1]-q
while(w=o[1],w>0){v=e[D.f.cE(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=B.c1o(v.b,h,o,f,j,x,i)}else throw C.i(C.bH(p))}if(x!==i)throw C.i(C.bH("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
c1o(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)B.c1n(f,g)
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
cru(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
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
cry(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=C.c([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw C.i(C.bH(s))
w=B.c9K(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw C.i(C.bH(s))
v=B.c9K(8,p,d)+6
if(f+v>x)throw C.i(C.bH(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw C.i(C.bH(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}B.crv(h)},
crv(d){var x,w,v,u,t,s=C.bm(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
c1n(d,e){d[0]=(d[0]<<8|e.bw())>>>0
d[1]=d[1]+8>>>0},
c9K(d,e,f){var x
while(x=e[1],x<d){e[0]=(e[0]<<8|J.A(f.a,f.d++))>>>0
e[1]=e[1]+8>>>0}x-=d
e[1]=x
return(D.f.j7(e[0],x)&D.f.cN(1,d)-1)>>>0},
ade:function ade(){this.b=this.a=0
this.c=null},
crz(d){var x=new B.adf(C.c([],y.m))
x.aed(d)
return x},
crA(d){var x=C.cd(d,!1,null,0)
if(x.Z()!==20000630)return!1
if(x.bw()!==2)return!1
if((x.pl()&4294967289)>>>0!==0)return!1
return!0},
adf:function adf(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
caT(d,e,f){var x=new B.af2(d,C.c([],y.Q),C.C(y.N,y.n),A.MF,e)
x.aLc(d,e,f)
return x},
U8:function U8(){},
aOM:function aOM(d,e){this.a=d
this.b=e},
af2:function af2(d,e,f,g,h){var _=this
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
aUt:function aUt(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
atn:function atn(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
aUu:function aUu(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
aUv:function aUv(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
af3:function af3(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
aOL:function aOL(){this.a=null},
cac(d){var x=new Uint8Array(d*3)
return new B.UD(B.csm(d),d,null,new C.qH(x,d,3))},
csl(d){return new B.UD(d.a,d.b,d.c,C.ccb(d.d))},
csm(d){var x
for(x=1;x<=8;++x)if(D.f.cN(1,x)>=d)return x
return 0},
UD:function UD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
UE:function UE(){},
af4:function af4(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
adY:function adY(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
aRI:function aRI(){var _=this
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
cat(d){var x,w,v,u,t,s,r
if(d.ad()!==0)return null
x=d.ad()
if(x>=3)return null
w=A.e3Q[x]
if(w===A.N7)return null
v=d.ad()
u=J.h3(v,y.Y)
for(t=0;t<v;++t){s=J.A(d.a,d.d++)
r=J.A(d.a,d.d++)
J.A(d.a,d.d++);++d.d
d.ad()
d.ad()
u[t]=new B.aeH(s,r,d.Z(),d.Z())}return new B.aTF(w,v,u)},
Kq:function Kq(d,e){this.a=d
this.b=e},
aTF:function aTF(d,e,f){this.c=d
this.d=e
this.e=f},
aeH:function aeH(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
aTD:function aTD(d,e,f,g,h,i,j,k,l){var _=this
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
aTE:function aTE(){this.b=this.a=null},
abs:function abs(d,e,f){this.e=d
this.f=e
this.r=f},
DI:function DI(){},
DJ:function DJ(d){this.a=d},
US:function US(d){this.a=d},
aUL:function aUL(){this.d=null},
z9:function z9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
aUO(){var x=C.bm(4,null,!1,y.r),w=C.c([],y.a),v=y.bT,u=J.tk(0,v)
v=J.tk(0,v)
return new B.aUN(new C.K5(C.C(y.N,y.P)),x,w,u,v,C.c([],y.E))},
aUN:function aUN(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
aUP:function aUP(d,e){this.a=d
this.b=e},
Pa:function Pa(d){this.a=d
this.b=0},
afn:function afn(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
aUR:function aUR(){this.b=this.a=0},
aUS:function aUS(){this.r=this.f=$},
afo:function afo(d,e,f,g,h,i,j,k){var _=this
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
Vn:function Vn(){},
zF:function zF(d,e){this.a=d
this.b=e},
EZ:function EZ(d){this.b=this.a=0
this.e=d},
b1t:function b1t(d){this.b=this.a=null
this.c=d},
b1u:function b1u(){},
ai5:function ai5(){this.b=this.a=null},
ai6:function ai6(){this.b=this.a=null},
tQ:function tQ(){},
ai8:function ai8(){this.b=this.a=null},
ai9:function ai9(){this.b=this.a=null},
aic:function aic(){this.b=this.a=null},
aid:function aid(){this.b=this.a=null},
Xu:function Xu(d){this.b=d},
aib:function aib(){this.b=$
this.c=null},
b3a:function b3a(){var _=this
_.w=_.r=_.f=_.e=$},
M4:function M4(d){this.a=d
this.c=null},
c2x(d){var x=new B.b3c(C.C(y.p,y.h))
x.aLI(d)
return x},
c2B(d,e,f,g){var x=d/255,w=e/255,v=f/255,u=g/255,t=w*(1-v),s=x*(1-u)
return D.m.F(D.m.au((2*x<v?2*w*x+t+s:u*v-2*(v-x)*(u-w)+t+s)*255,0,255))},
b3d(d,e){if(e===0)return 0
return D.f.F(D.f.au(D.m.F(255*(1-(1-d/255)/(e/255))),0,255))},
b3f(d,e){return D.f.F(D.f.au(d+e-255,0,255))},
c2D(d,e){return D.f.F(D.f.au(255-(255-e)*(255-d),0,255))},
b3e(d,e){if(e===255)return 255
return D.m.F(D.m.au(d/255/(1-e/255)*255,0,255))},
c2E(d,e){var x=d/255,w=e/255,v=1-w
return D.m.aM(255*(v*w*x+w*(1-v*(1-x))))},
c2z(d,e){var x=e/255,w=d/255
if(w<0.5)return D.m.aM(510*x*w)
else return D.m.aM(255*(1-2*(1-x)*(1-w)))},
c2F(d,e){if(e<128)return B.b3d(d,2*e)
else return B.b3e(d,2*(e-128))},
c2A(d,e){var x
if(e<128)return B.b3f(d,2*e)
else{x=2*(e-128)
return x+d>255?255:d+x}},
c2C(d,e){return e<128?Math.min(d,2*e):Math.max(d,2*(e-128))},
c2y(d,e){return D.m.aM(e+d-2*e*d/255)},
na(d,e,f){var x
if(d==null)x=0
else x=f===1?d[e]:(d[e]<<8|d[e+1])>>>8
return x},
ccS(b5,b6,b7,b8,b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=C.C(y.p,y.e)
for(x=b9.length,w=0;v=b9.length,w<v;b9.length===x||(0,C.F)(b9),++w){u=b9[w]
b4.l(0,u.a,u)}if(b6===8)t=1
else t=b6===16?2:-1
s=C.fR(b3,b3,D.av,0,D.bP,b8,b3,0,v,b3,D.av,b7,!1)
if(t===-1)throw C.i(C.bH("PSD: unsupported bit depth: "+C.r(b6)))
r=b4.h(0,0)
q=b4.h(0,1)
p=b4.h(0,2)
o=b4.h(0,-1)
n=C.c([0,0,0],y.t)
m=-t
for(x=s.a,x=x.gT(x),l=v>=5,k=v===4,j=v>=2,v=v>=4;x.q();){i=x.gI()
m+=t
switch(b5){case A.a4f:i.sa7(B.na(r.c,m,t))
i.sag(B.na(q.c,m,t))
i.sah(B.na(p.c,m,t))
i.sao(v?B.na(o.c,m,t):255)
if(i.gao()!==0){i.sa7((i.ga7()+i.gao()-255)*255/i.gao())
i.sag((i.gag()+i.gao()-255)*255/i.gao())
i.sah((i.gah()+i.gao()-255)*255/i.gao())}break
case A.a4h:h=B.na(r.c,m,t)
g=B.na(q.c,m,t)
f=B.na(p.c,m,t)
e=v?B.na(o.c,m,t):255
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
i.sao(e)
break
case A.a4e:a9=B.na(r.c,m,t)
e=j?B.na(o.c,m,t):255
i.sa7(a9)
i.sag(a9)
i.sah(a9)
i.sao(e)
break
case A.a4g:b0=B.na(r.c,m,t)
b1=B.na(q.c,m,t)
d=B.na(p.c,m,t)
b2=B.na(b4.h(0,k?-1:3).c,m,t)
e=l?B.na(o.c,m,t):255
B.ci3(255-b0,255-b1,255-d,255-b2,n)
i.sa7(n[0])
i.sag(n[1])
i.sah(n[2])
i.sao(e)
break
default:throw C.i(C.bH("Unhandled color mode: "+C.r(b5)))}}return s},
qS:function qS(d,e){this.a=d
this.b=e},
b3c:function b3c(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=_.w=$
_.y=null
_.z=d
_.as=$
_.ay=_.ax=_.at=null},
ai7:function ai7(d,e){this.a=d
this.b=e},
aia:function aia(d,e,f){var _=this
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
cvx(d,e){var x,w
switch(d){case"lsct":x=new B.aib()
w=e.c-e.d
x.b=e.Z()
if(w>=12){if(e.hh(4)!=="8BIM")C.a8(C.bH("Invalid key in layer additional data"))
x.c=e.hh(4)}if(w>=16)e.Z()
return x
default:return new B.Xu(e)}},
M5:function M5(){},
b3b:function b3b(){this.a=null},
aih:function aih(){},
wd:function wd(d,e,f){this.a=d
this.b=e
this.c=f},
kQ:function kQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xy:function Xy(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
M8:function M8(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
aig:function aig(){this.y=this.b=this.a=0},
we(d,e){return(A.x0[d>>>8]<<17|A.x0[e>>>8]<<16|A.x0[d&255]<<1|A.x0[e&255])>>>0},
pj:function pj(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
b3m:function b3m(){this.b=this.a=null},
alO:function alO(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
mq:function mq(d,e){this.a=d
this.b=e},
bgP:function bgP(){this.a=null
this.b=$},
bgZ:function bgZ(d){this.a=d
this.c=this.b=0},
alP:function alP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
c3p(d,e,f){var x=new B.bh0(e,f,d),w=y.I
x.e=C.bm(e,null,!1,w)
x.f=C.bm(e,null,!1,w)
return x},
bh0:function bh0(d,e,f){var _=this
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
alQ:function alQ(d,e,f,g){var _=this
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
Gq:function Gq(d,e){this.a=d
this.b=e},
je:function je(d,e){this.a=d
this.b=e},
pw:function pw(d,e){this.a=d
this.b=e},
bh1:function bh1(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
cbq(){return new B.aW4(new Uint8Array(4096))},
aW4:function aW4(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bh_:function bh_(){this.b=this.a=null
this.c=$},
c3A(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=C.bm(8,null,!1,y.ak),s=C.bm(4,null,!1,y.Z)
return new B.biM(d,e,new B.biS(),new B.biW(),new B.biO(x,w),new B.biY(v,u),t,s,new Uint8Array(4))},
ceO(d,e,f){if(f===0)if(d===0)return e===0?6:5
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
_.b8=$
_.b6=null
_.a2=_.D=$
_.a6=null
_.ab=$},
biZ:function biZ(){},
ceL(d){var x=new B.a_V(d)
x.b=254
x.c=0
x.d=-8
return x},
a_V:function a_V(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
dR(d,e,f){return D.f.iI(D.f.R(d+2*e+f+2,2),32)},
cyZ(d){var x,w=C.c([B.dR(J.A(d.a,d.d+-33),J.A(d.a,d.d+-32),J.A(d.a,d.d+-31)),B.dR(J.A(d.a,d.d+-32),J.A(d.a,d.d+-31),J.A(d.a,d.d+-30)),B.dR(J.A(d.a,d.d+-31),J.A(d.a,d.d+-30),J.A(d.a,d.d+-29)),B.dR(J.A(d.a,d.d+-30),J.A(d.a,d.d+-29),J.A(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.xd(x*32,4,w)},
cyR(d){var x=J.A(d.a,d.d+-33),w=J.A(d.a,d.d+-1),v=J.A(d.a,d.d+31),u=J.A(d.a,d.d+63),t=J.A(d.a,d.d+95),s=C.bP(d,null,0),r=s.Nn(),q=B.dR(x,w,v)
r.$flags&2&&C.u(r)
r[0]=16843009*q
s.d+=32
q=s.Nn()
r=B.dR(w,v,u)
q.$flags&2&&C.u(q)
q[0]=16843009*r
s.d+=32
r=s.Nn()
q=B.dR(v,u,t)
r.$flags&2&&C.u(r)
r[0]=16843009*q
s.d+=32
q=s.Nn()
r=B.dR(u,t,t)
q.$flags&2&&C.u(q)
q[0]=16843009*r},
cyP(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.A(d.a,d.d+(w-32))+J.A(d.a,d.d+(-1+w*32))
x=D.f.R(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.rD(v,u,u+4,x)}},
c3B(d,e){var x,w,v,u,t,s=255-J.A(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.A(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.nz()[v+J.A(d.a,d.d+(-32+u))]
J.bd(d.a,d.d+(x+u),t)}x+=32}},
cyX(d){B.c3B(d,4)},
cyY(d){B.c3B(d,8)},
cyW(d){B.c3B(d,16)},
cyV(d){var x,w=J.A(d.a,d.d+-1),v=J.A(d.a,d.d+31),u=J.A(d.a,d.d+63),t=J.A(d.a,d.d+95),s=J.A(d.a,d.d+-33),r=J.A(d.a,d.d+-32),q=J.A(d.a,d.d+-31),p=J.A(d.a,d.d+-30),o=J.A(d.a,d.d+-29)
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
cyU(d){var x,w=J.A(d.a,d.d+-32),v=J.A(d.a,d.d+-31),u=J.A(d.a,d.d+-30),t=J.A(d.a,d.d+-29),s=J.A(d.a,d.d+-28),r=J.A(d.a,d.d+-27),q=J.A(d.a,d.d+-26),p=J.A(d.a,d.d+-25)
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
cz0(d){var x=J.A(d.a,d.d+-1),w=J.A(d.a,d.d+31),v=J.A(d.a,d.d+63),u=J.A(d.a,d.d+-33),t=J.A(d.a,d.d+-32),s=J.A(d.a,d.d+-31),r=J.A(d.a,d.d+-30),q=J.A(d.a,d.d+-29),p=D.f.iI(D.f.R(u+t+1,1),32)
d.l(0,65,p)
d.l(0,0,p)
p=D.f.iI(D.f.R(t+s+1,1),32)
d.l(0,66,p)
d.l(0,1,p)
p=D.f.iI(D.f.R(s+r+1,1),32)
d.l(0,67,p)
d.l(0,2,p)
d.l(0,3,D.f.iI(D.f.R(r+q+1,1),32))
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
cz_(d){var x,w=J.A(d.a,d.d+-32),v=J.A(d.a,d.d+-31),u=J.A(d.a,d.d+-30),t=J.A(d.a,d.d+-29),s=J.A(d.a,d.d+-28),r=J.A(d.a,d.d+-27),q=J.A(d.a,d.d+-26),p=J.A(d.a,d.d+-25)
d.l(0,0,D.f.iI(D.f.R(w+v+1,1),32))
x=D.f.iI(D.f.R(v+u+1,1),32)
d.l(0,64,x)
d.l(0,1,x)
x=D.f.iI(D.f.R(u+t+1,1),32)
d.l(0,65,x)
d.l(0,2,x)
x=D.f.iI(D.f.R(t+s+1,1),32)
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
cyS(d){var x,w=J.A(d.a,d.d+-1),v=J.A(d.a,d.d+31),u=J.A(d.a,d.d+63),t=J.A(d.a,d.d+95)
d.l(0,0,D.f.iI(D.f.R(w+v+1,1),32))
x=D.f.iI(D.f.R(v+u+1,1),32)
d.l(0,32,x)
d.l(0,2,x)
x=D.f.iI(D.f.R(u+t+1,1),32)
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
cyQ(d){var x=J.A(d.a,d.d+-1),w=J.A(d.a,d.d+31),v=J.A(d.a,d.d+63),u=J.A(d.a,d.d+95),t=J.A(d.a,d.d+-33),s=J.A(d.a,d.d+-32),r=J.A(d.a,d.d+-31),q=J.A(d.a,d.d+-30),p=D.f.iI(D.f.R(x+t+1,1),32)
d.l(0,34,p)
d.l(0,0,p)
p=D.f.iI(D.f.R(w+x+1,1),32)
d.l(0,66,p)
d.l(0,32,p)
p=D.f.iI(D.f.R(v+w+1,1),32)
d.l(0,98,p)
d.l(0,64,p)
d.l(0,96,D.f.iI(D.f.R(u+v+1,1),32))
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
czb(d){var x
for(x=0;x<16;++x)d.pb(x*32,16,d,-32)},
cz9(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.A(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.rD(u,t,t+16,v)
x+=32}},
biQ(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.rD(w,v,v+16,d)}},
cz1(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.A(d.a,d.d+(-1+w*32))+J.A(d.a,d.d+(w-32))
B.biQ(D.f.R(x,5),d)},
cz3(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.A(d.a,d.d+(-1+w*32))
B.biQ(D.f.R(x,4),d)},
cz2(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.A(d.a,d.d+(w-32))
B.biQ(D.f.R(x,4),d)},
cz4(d){B.biQ(128,d)},
czc(d){var x
for(x=0;x<8;++x)d.pb(x*32,8,d,-32)},
cza(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.A(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.rD(u,t,t+8,v)
x+=32}},
biR(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.rD(w,v,v+8,d)}},
cz5(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.A(d.a,d.d+(w-32))+J.A(d.a,d.d+(-1+w*32))
B.biR(D.f.R(x,4),d)},
cz6(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.A(d.a,d.d+(w-32))
B.biR(D.f.R(x,3),d)},
cz7(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.A(d.a,d.d+(-1+w*32))
B.biR(D.f.R(x,3),d)},
cz8(d){B.biR(128,d)},
AY(d,e,f,g,h){var x=e+f+g*32,w=J.A(d.a,d.d+x)+D.f.R(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.l(0,x,w)},
biP(d,e,f,g,h){B.AY(d,0,0,e,f+g)
B.AY(d,0,1,e,f+h)
B.AY(d,0,2,e,f-h)
B.AY(d,0,3,e,f-g)},
cyT(){var x,w,v,u
if(!$.ceM){for(x=-255;x<=255;++x){w=$.aBu()
v=255+x
u=x<0?-x:x
w.$flags&2&&C.u(w)
w[v]=u
u=$.c_w()
w=D.f.R(w[v],1)
u.$flags&2&&C.u(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.c_x()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&C.u(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.c_y()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&C.u(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.nz()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&C.u(w)
w[255+x]=v}$.ceM=!0}},
biN:function biN(){},
cyO(){var x,w=J.iH(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new B.a_U(w)},
czr(){var x,w,v,u,t=new Uint8Array(3),s=J.iH(4,y.z)
for(x=y.V,w=0;w<4;++w){v=J.iH(8,x)
for(u=0;u<8;++u)v[u]=B.cyO()
s[w]=v}D.K.fu(t,0,3,255)
return new B.biX(t,s)},
biS:function biS(){this.c=null
this.d=$},
biW:function biW(){this.b=this.a=null},
biY:function biY(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
a_U:function a_U(d){this.a=d},
biX:function biX(d,e){this.a=d
this.b=e},
biO:function biO(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
GA:function GA(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
ams:function ams(){this.b=this.a=0},
amu:function amu(d,e,f){this.a=d
this.b=e
this.c=f},
amt:function amt(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
amv:function amv(d,e,f){this.a=d
this.b=e
this.c=f},
c3C(d,e){var x,w=C.c([],y.A),v=C.c([],y.F),u=new Uint32Array(2),t=new B.amq(d,u)
u=t.d=J.cl(D.bL.ga5(u),0,null)
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
return new B.a_W(t,e,w,v)},
AZ(d,e){return D.f.R(d+D.f.cN(1,e)-1,e)},
a_W:function a_W(d,e,f,g){var _=this
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
af9:function af9(d,e,f,g){var _=this
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
amq:function amq(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
biT:function biT(d,e){this.a=d
this.b=e},
biU(d,e,f){var x=d[e]
d.$flags&2&&C.u(d)
d[e]=(((x&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(x&16711935)+(f&16711935)&16711935)>>>0},
wV(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
GC(d){if(d<0)return 0
if(d>255)return 255
return d},
biV(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
czd(d,e,f){return 4278190080},
cze(d,e,f){return e},
czj(d,e,f){return d[f]},
czk(d,e,f){return d[f+1]},
czl(d,e,f){return d[f-1]},
czm(d,e,f){var x=d[f]
return B.wV(B.wV(e,d[f+1]),x)},
czn(d,e,f){return B.wV(e,d[f-1])},
czo(d,e,f){return B.wV(e,d[f])},
czp(d,e,f){return B.wV(d[f-1],d[f])},
czq(d,e,f){return B.wV(d[f],d[f+1])},
czf(d,e,f){var x=d[f-1],w=d[f],v=d[f+1]
return B.wV(B.wV(e,x),B.wV(w,v))},
czg(d,e,f){var x=d[f],w=d[f-1]
return B.biV(x>>>24,e>>>24,w>>>24)+B.biV(x>>>16&255,e>>>16&255,w>>>16&255)+B.biV(x>>>8&255,e>>>8&255,w>>>8&255)+B.biV(x&255,e&255,w&255)<=0?x:e},
czh(d,e,f){var x=d[f],w=d[f-1]
return(B.GC((e>>>24)+(x>>>24)-(w>>>24))<<24|B.GC((e>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|B.GC((e>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|B.GC((e&255)+(x&255)-(w&255)))>>>0},
czi(d,e,f){var x,w,v,u=d[f],t=d[f-1],s=B.wV(e,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(B.GC(u+D.f.av(u-(t>>>24),2))<<24|B.GC(x+D.f.av(x-(t>>>16&255),2))<<16|B.GC(w+D.f.av(w-(t>>>8&255),2))<<8|B.GC(v+D.f.av(v-(t&255),2)))>>>0},
GB:function GB(d,e){this.a=d
this.b=e},
amr:function amr(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
bju:function bju(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
a00:function a00(){},
afa:function afa(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=$
_.r=1
_.x=_.w=$},
caq(){var x=new Uint8Array(128),w=new Int16Array(128)
x=new B.aep(x,w,new Int16Array(128))
x.a5z(0)
return x},
csr(){var x,w=J.iH(5,y.x)
for(x=0;x<5;++x)w[x]=B.caq()
return new B.UJ(w)},
aep:function aep(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
UJ:function UJ(d){this.a=d},
Og:function Og(d,e){this.a=d
this.b=e},
amJ:function amJ(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
afb:function afb(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
bjv:function bjv(){this.b=this.a=null},
o8(d,e){return new B.agX(d,new Uint8Array(e))},
agX:function agX(d,e){this.a=0
this.b=d
this.c=e},
c1l(d){var x=new C.K5(C.C(y.N,y.P))
x.hT(d)
return x},
crB(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
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
if(a2){B.U9(a4[j],a4[h],v)
f=v[0]
e=v[1]
B.U9(a4[i],a4[g],v)
d=v[0]
a0=v[1]
B.U9(f,d,v)
a1=v[0]
u&2&&C.u(a4)
a4[j]=a1
a4[i]=v[1]
B.U9(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}else{B.Ua(a4[j],a4[h],v)
f=v[0]
e=v[1]
B.Ua(a4[i],a4[g],v)
d=v[0]
a0=v[1]
B.Ua(f,d,v)
a1=v[0]
u&2&&C.u(a4)
a4[j]=a1
a4[i]=v[1]
B.Ua(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){B.U9(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.u(a4)
a4[h]=a1}else{B.Ua(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.u(a4)
a4[h]=a1}u&2&&C.u(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){B.U9(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.u(a4)
a4[i]=n}else{B.Ua(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.u(a4)
a4[i]=n}u&2&&C.u(a4)
a4[j]=f}}w=x>>>1}},
U9(d,e,f){var x,w,v,u,t=$.lL()
t.$flags&2&&C.u(t)
t[0]=d
x=$.mC()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.f.R(v,1)
f[0]=u
f[1]=u-v},
Ua(d,e,f){var x=d-D.f.R(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
cin(d){var x,w,v,u,t,s,r,q,p,o,n=null
if(B.aUO().aA6(d))return new B.Vn()
x=new C.Xb(C.c1M())
if(x.F5(d))return x
w=new B.aRI()
w.f=C.cd(d,!1,n,0)
w.a=new B.adY(C.c([],y.b))
if(w.aiL())return w
v=new B.bjv()
if(v.F5(d))return v
u=new B.bh_()
if(u.a3T(C.cd(d,!1,n,0))!=null)return u
if(B.c2x(d).c===943870035)return new B.b3b()
if(B.crA(d))return new B.aOL()
if(B.c0y(C.cd(d,!1,n,0)))return new B.aaq(!1)
t=new B.bgP()
s=C.cd(d,!1,n,0)
r=t.a=new B.alO(A.yu)
r.hT(s)
if(r.ax_())return t
q=new B.aTE()
r=C.cd(d,!1,n,0)
q.a=r
r=B.cat(r)
q.b=r
if(r!=null)return q
p=new B.b3m()
if(p.iN(d)!=null)return p
o=new B.b1t(C.c([],y.s))
if(o.F5(d))return o
return n},
bWJ(d){var x=B.cin(d)
return x==null?null:x.mm(d,null)},
cIf(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if($.c4u==null){x=$.c4u=new Uint8Array(768)
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
a6[r]=a1-h}for(x=$.c4u,v=a5.$flags|0,w=0;w<64;++w){x.toString
u=D.f.R(a6[w]+8,4)
u=x[384+((u&2147483647)-((u&2147483648)>>>0))]
v&2&&C.u(a5)
a5[w]=u}},
cH2(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.r
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
r=C.fR(d6,d6,D.av,0,D.bP,s,d6,0,3,d6,D.av,t,!1)
r.e=C.U5(d8)
r.guf().h(0,d7).sfk(d6)
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
czC(d,e,f,g,h,i){B.czz(i,d,e,f,g,h,!0,i)},
czD(d,e,f,g,h,i){B.czA(i,d,e,f,g,h,!0,i)},
czB(d,e,f,g,h,i){B.czy(i,d,e,f,g,h,!0,i)},
Of(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.A(d.a,d.d+x)
v=J.A(e.a,e.d+x)
J.bd(f.a,f.d+x,w+v)}},
czz(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=C.cd(d,!1,v,u),r=C.cd(d,!1,v,u),q=C.bP(r,v,0)
if(h===0){r.l(0,0,J.A(s.a,s.d))
B.Of(C.bP(s,v,1),q,C.bP(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){B.Of(s,C.bP(q,v,x),r,1,!0)
B.Of(C.bP(s,v,1),q,C.bP(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
czA(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=C.cd(d,!1,x,w),t=C.cd(k,!1,x,w),s=C.bP(t,x,0)
if(h===0){t.l(0,0,J.A(u.a,u.d))
B.Of(C.bP(u,x,1),s,C.bP(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
while(h<v){B.Of(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
czy(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=C.cd(d,!1,s,r),o=C.cd(k,!1,s,r),n=C.bP(o,s,0)
if(h===0){o.l(0,0,J.A(p.a,p.d))
B.Of(C.bP(p,s,1),n,C.bP(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){B.Of(p,C.bP(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.A(n.a,n.d+(w-1))+J.A(n.a,n.d+v)-J.A(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.A(p.a,p.d+w)
J.bd(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
bWw(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
ci3(d,e,f,g,h){var x=1-g/255
h[0]=D.m.aM(255*(1-d/255)*x)
h[1]=D.m.aM(255*(1-e/255)*x)
h[2]=D.m.aM(255*(1-f/255)*x)}},A
J=c[1]
C=c[0]
D=c[2]
B=a.updateHolder(c[71],B)
A=c[177]
B.kA.prototype={
H(){return"BmpCompression."+this.b}}
B.aFn.prototype={}
B.Cj.prototype={
aea(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===A.zv||x===A.zw}else x=!0
if(x){x=q.as=d.Z()
w=B.bWw(x)
q.CW=w
v=D.f.eb(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.Z()
u=B.bWw(w)
q.cy=u
t=D.f.eb(w,u)
q.db=x?255/t:0
w=q.ax=d.Z()
u=B.bWw(w)
q.dx=u
s=D.f.eb(w,u)
q.dy=x?255/s:0
if(!o||q.r===A.zw){o=q.ay=d.Z()
x=B.bWw(o)
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
if(q.f<=8)q.bvD(d)},
gLP(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&C.b()
x=x===0}else x=!1
else x=!0
return x},
gaO(){return Math.abs(this.c)},
bvD(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.f.cN(1,s.f)
s.ch=new C.qH(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.A(d.a,d.d++)
v=J.A(d.a,d.d++)
u=J.A(d.a,d.d++)
t=J.A(d.a,d.d++)
s.ch.OT(x,u,v,w,t)}},
blt(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.bw()
for(v=7;v>=0;--v)e.$4(D.f.j7(w,v)&1,0,0,0)
return}else if(x===2){w=d.bw()
for(v=6;v>=0;v-=2)e.$4(D.f.j7(w,v)&2,0,0,0)}else if(x===4){w=d.bw()
e.$4(D.f.R(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.bw(),0,0,0)
return}}x=o.r
if(x===A.zv&&o.f===32){u=d.Z()
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
if(o.gLP())p=255
else{x=o.ay
x===$&&C.b()
t=o.fr
t===$&&C.b()
t=D.f.eb((u&x)>>>0,t)
x=o.fx
x===$&&C.b()
p=D.m.F(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===A.Hn){q=d.bw()
r=d.bw()
s=d.bw()
p=d.bw()
return e.$4(s,r,q,o.gLP()?255:p)}else if(t===24){q=d.bw()
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
if(o.gLP())p=255
else{x=o.ay
x===$&&C.b()
t=o.fr
t===$&&C.b()
t=D.f.eb((u&x)>>>0,t)
x=o.fx
x===$&&C.b()
p=D.m.F(t*x)}return e.$4(s,r,q,p)}else throw C.i(C.bH("Unsupported bitsPerPixel ("+t+") or compression ("+x.j(0)+")."))}},
gbJ(){return this.b}}
B.aaq.prototype={
iN(d){var x,w=null
if(!B.c0y(C.cd(d,!1,w,0)))return w
x=C.cd(d,!1,w,0)
this.a=x
return this.b=B.coC(x,w)},
i2(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new C.tg(f,f,f,f,0,D.bP,0,0)
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
else{if(v===2)s=D.kz
else if(v===4)s=D.kA
else s=D.av
r=s}q=x?f:e.ch
p=C.fR(f,f,r,0,D.bP,e.gaO(),f,0,t,q,D.av,w,!1)
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
if(h==null)h=new C.er()
while(n.a<i)e.blt(k,new B.aFm(n,g,i,e,h))}return p},
mm(d,e){if(this.iN(d)==null)return null
return this.i2(0)}}
B.aKu.prototype={}
B.aK4.prototype={}
B.adc.prototype={}
B.af1.prototype={
My(){return this.w},
pp(d,e,f,g,h){throw C.i(C.bH("B44 compression not yet supported."))},
G3(d,e,f){return this.pp(d,e,f,null,null)},
j(d){return C.r(this.r)+" "+this.x}}
B.K7.prototype={
H(){return"ExrChannelType."+this.b}}
B.Df.prototype={
H(){return"ExrChannelName."+this.b}}
B.add.prototype={
aLb(d){var x=this,w=d.N_()
x.a=w
if(w.length===0)return
x.c=A.eNG[d.Z()]
d.bw()
d.d+=3
x.f=d.Z()
x.r=d.Z()
w=x.a
if(w==="R"){x.w=!0
x.b=A.dYg}else if(w==="G"){x.w=!0
x.b=A.dYh}else if(w==="B"){x.w=!0
x.b=A.dYi}else if(w==="A"){x.w=!0
x.b=A.dYj}else{x.w=!1
x.b=A.dYk}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break}}}
B.qi.prototype={
H(){return"ExrCompressorType."+this.b}}
B.aOK.prototype={
pp(d,e,f,g,h){throw C.i(C.bH("Unsupported compression type"))},
G3(d,e,f){return this.pp(d,e,f,null,null)}}
B.aUs.prototype={}
B.ade.prototype={}
B.adf.prototype={
aed(d){var x,w,v,u,t=this,s=C.cd(d,!1,null,0)
if(s.Z()!==20000630)throw C.i(C.bH("File is not an OpenEXR image file."))
x=t.d=s.bw()
if(x!==2)throw C.i(C.bH("Cannot read version "+x+" image files."))
x=t.e=s.pl()
if((x&4294967289)>>>0!==0)throw C.i(C.bH("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=B.caT(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;;){v=B.caT(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw C.i(C.bH("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,C.F)(x),++u)x[u].bvC(s)
t.b8z(s)},
b8z(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,C.F)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.b8K(u,d)
else t.b8H(u,d)}},
b8K(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
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
e=new C.kK(h,0,f,0,!1)
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
if(b0==null)b0=new C.er()
h=a5.b
h===$&&C.b()
b0.l(0,h.a,a9)}else{h=a5.a
h===$&&C.b()
a8=b3.b
b1=a8!=null?a8.h(0,h):b2
if(b1!=null)b1.dB(a6,g,a9,0,0)}}}++a3;++g}}++o;++q}++r}},
b8H(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
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
m=$.fy()
m.$flags&2&&C.u(m)
m[0]=n
n=$.jo()
m[0]=t.Z()
l=t.hB(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.G3(l,0,p)
m=n.length
k=new C.kK(n,0,Math.min(m,m),0,!1)}else k=l
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
if(a2==null)a2=new C.er()
n=e.b
n===$&&C.b()
a2.l(0,n.a,a1)}else{n=e.a
n===$&&C.b()
m=a5.b
a3=m!=null?m.h(0,n):a4
if(a3!=null)a3.dB(a0,p,a1,0,0)}}}++h;++p}}},
gbJ(){return this.a},
gaO(){return this.b}}
B.U8.prototype={
aLc(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=C.C(y.N,y.u)
for(x=a2.e,w=y.t,v=a2.c,u=D.lD;;){t=a7.N_()
if(t.length===0)break
s=a7.N_()
r=a7.Z()
q=a7.hB(r)
a7.d=a7.d+(q.c-q.d)
x.l(0,t,new B.adc(t,s,r))
switch(t){case"channels":for(;;){p=new B.add()
p.aLb(q)
o=p.a
o===$&&C.b()
if(o.length===0)break
n=p.w
n===$&&C.b()
if(n){++a2.d
o=p.c
o===$&&C.b()
if(o===A.C4)u=D.lD
else u=o===A.C5?D.mr:D.ms}else{n=p.c
n===$&&C.b()
if(n===A.C4){n=a2.w
m=a2.x
a4.l(0,o,new C.Ku(new Uint16Array(n*m),n,m,1))}else if(n===A.C5){n=a2.w
m=a2.x
a4.l(0,o,new C.Kv(new Float32Array(n*m),n,m,1))}else if(n===A.ME){n=a2.w
m=a2.x
a4.l(0,o,new C.Kz(new Uint32Array(n*m),n,m,1))}}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a2.at=o
n=q.Z()
m=$.fy()
m.$flags&2&&C.u(m)
m[0]=n
n=$.BV()
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
case"compression":a2.ax=A.ePJ[J.A(q.a,q.d++)]
break
case"dataWindow":o=q.Z()
n=$.fy()
n.$flags&2&&C.u(n)
n[0]=o
o=$.jo()
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
n=$.fy()
n.$flags&2&&C.u(n)
n[0]=o
$.jo()
n[0]=q.Z()
n[0]=q.Z()
n[0]=q.Z()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.Z()
n=$.fy()
n.$flags&2&&C.u(n)
n[0]=o
$.BV()
break
case"screenWindowCenter":o=q.Z()
n=$.fy()
n.$flags&2&&C.u(n)
n[0]=o
$.BV()
n[0]=q.Z()
break
case"screenWindowWidth":o=q.Z()
n=$.fy()
n.$flags&2&&C.u(n)
n[0]=o
$.BV()
break
case"tiles":a2.dx=q.Z()
a2.dy=q.Z()
j=J.A(q.a,q.d++)
a2.fr=j&15
a2.fx=D.f.R(j,4)&15
break
case"type":i=q.N_()
if(i!=="deepscanline")if(i!=="deeptile")throw C.i(C.bH("EXR Invalid type: "+i))
break
default:break}}x=a2.w
a2.b=C.fR(a3,a3,u,0,D.bP,a2.x,a3,0,a2.d,a3,D.av,x,!1)
for(x=new C.dO(a4,a4.r,a4.e);x.q();){w=x.d
o=a2.b
o.toString
n=a4.h(0,w)
n.toString
o.aDg(w,n)}if(a2.db){x={}
w=a2.r
w===$&&C.b()
a2.id=a2.aOM(w[0],w[2],w[1],w[3])
w=a2.r
a2.k1=a2.aON(w[0],w[2],w[1],w[3])
if(a2.fr!==2)a2.k1=1
w=a2.id
w.toString
v=a2.r
a2.fy=a2.afs(w,v[0],v[2],a2.dx,a2.fx)
v=a2.k1
v.toString
w=a2.r
a2.go=a2.afs(v,w[1],w[3],a2.dy,a2.fx)
w=a2.aOI()
a2.k2=w
v=a2.dx
v.toString
v=w*v
a2.k3=v
a2.CW=B.c9J(a2.ax,a2,v,a2.dy)
x.a=x.b=0
v=a2.id
v.toString
w=a2.k1
w.toString
a2.ay=C.zg(v*w,new B.aOM(x,a2),!0,y.R)}else{x=a2.x
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
x=B.c9J(a2.ax,a2,d,a3)
a2.CW=x
x=a2.cx=x.My()
w=a2.ch
v=w.length
o=new Uint32Array(v)
a2.cy=o
for(--v,a0=0,a1=0;a1<=v;++a1){if(D.f.aC(a1,x)===0)a0=0
o[a1]=a0
a0+=w[a1]}x=D.f.eD(a2.x+x,x)
a2.ay=C.c([new Uint32Array(x-1)],y.w)}},
aOM(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.QF(w):u.PS(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.QF(v):u.PS(v))+1
break
default:throw C.i(C.bH("Unknown LevelMode format."))}return x},
aON(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.QF(w):u.PS(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.QF(v):u.PS(v))+1
break
default:throw C.i(C.bH("Unknown LevelMode format."))}return x},
QF(d){var x
for(x=0;d>1;){++x
d=D.f.R(d,1)}return x},
PS(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.f.R(d,1)}return x+w},
aOI(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&C.b()
v+=t}return v},
afs(d,e,f,g,h){var x,w,v,u,t,s,r=J.iH(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.f.cN(1,v)
t=D.f.eD(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.f.eD(s+g-1,g)}return r}}
B.af2.prototype={
bvC(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.aag()
v.$flags&2&&C.u(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.aag()
v.$flags&2&&C.u(v)
v[x]=u}}}}
B.aUt.prototype={
aLw(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.iH(t,y.bc)
for(x=0;x<t;++x)s[x]=new B.atn()
u.y=s
w=u.w
w.toString
v=D.f.av(w*u.x,2)
u.z=new Uint16Array(v)},
My(){return this.x},
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
a0=a3.b9W(i,d)
B.crx(a4,a4.Z(),a3.z,r)
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
B.crB(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.aNl(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=B.o8(!1,v*a3.x+73728)}v.a=0
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
v.iK(u[l])}}v=a3.r
return J.cl(D.K.ga5(v.c),0,v.a)},
G3(d,e,f){return this.pp(d,e,f,null,null)},
aNl(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&C.u(e)
e[w]=v}},
b9W(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&C.u(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&C.u(e)
e[u]=0}return w-1}}
B.atn.prototype={}
B.aUu.prototype={
My(){return this.x},
pp(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=D.na.zW(a0.eM()),d=f.y
if(d==null){d=f.w
d.toString
d=f.y=B.o8(!1,f.x*d)}d.a=0
x=C.c([0,0,0,0],y.t)
w=new Uint32Array(1)
v=J.cl(D.bL.ga5(w),0,null)
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
G3(d,e,f){return this.pp(d,e,f,null,null)}}
B.aUv.prototype={
My(){return 1},
pp(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=B.o8(!1,(h-d.d)*2)
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
t=$.mD()[0]
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
G3(d,e,f){return this.pp(d,e,f,null,null)},
j(d){return C.r(this.w)}}
B.af3.prototype={
My(){return this.x},
pp(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=D.na.zW(d.eM())
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
G3(d,e,f){return this.pp(d,e,f,null,null)},
j(d){return C.r(this.w)}}
B.aOL.prototype={
iN(d){var x=new B.adf(C.c([],y.m))
x.aed(d)
return this.a=x},
i2(d){var x=this.a
if(x==null)return null
return x.c[d].b},
mm(d,e){this.a=B.crz(d)
return this.i2(0)}}
B.UD.prototype={
bnB(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
abQ(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new C.qH(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.kN(u)
s=x.kM(u)
r=x.kL(u)
v.OT(u,t,s,r,u===q.c?0:255)}return v}}
B.UE.prototype={
aLf(d){var x,w,v,u,t,s,r=this
r.a=d.ad()
r.b=d.ad()
r.c=d.ad()
r.d=d.ad()
x=d.bw()
r.e=(x&64)!==0
if((x&128)!==0){r.f=B.cac(D.f.cN(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.A(d.a,d.d++)
t=J.A(d.a,d.d++)
s=J.A(d.a,d.d++)
v.d.n_(w,u,t,s)}}r.x=d.d-d.b}}
B.af4.prototype={}
B.adY.prototype={
gbJ(){return this.a},
gaO(){return this.b}}
B.aRI.prototype={
iN(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.f=C.cd(d,!1,null,0)
n.a=new B.adY(C.c([],y.b))
if(!n.aiL())return null
try{while(u=n.f,t=u.d,t<u.c){s=u.a
u.d=t+1
x=J.A(s,t)
switch(x){case 44:w=n.aoG()
if(w==null){u=n.a
return u}u=w
u.r=n.e
u.w=n.c
if(n.b!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new B.UD(t,s,r,new C.qH(new Uint8Array(C.b5(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.d}n.a.r.push(w)
break
case 33:u=n.f
v=J.A(u.a,u.d++)
if(J.o(v,255)){u=n.f
if(u.hh(J.A(u.a,u.d++))==="NETSCAPE2.0"){q=J.A(u.a,u.d++)
p=J.A(u.a,u.d++)
if(q===3&&p===1)n.r=u.ad()}else n.SV()}else if(J.o(v,249)){u=n.f
u.toString
n.b8v(u)}else n.SV()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
b8v(d){var x,w,v,u=this
d.bw()
x=d.bw()
u.e=d.ad()
u.d=d.bw()
d.bw()
u.c=D.f.R(x,2)&7
u.b=x&1
w=d.Pb(1,0)
if(J.A(w.a,w.d)===44){++d.d
v=u.aoG()
if(v==null)return
v.r=u.e
v.w=u.c
if(u.b!==0){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=B.csl(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
i2(d){var x,w,v,u=this,t=u.f
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
x=v.x
x===$&&C.b()
t.d=x
return u.aRz(v)},
mm(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.iN(a7)==null)return a6
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
k=C.fR(a6,a6,D.av,0,D.bP,r,a6,0,1,l.abQ(),D.av,t,!1)
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
if(r!=null)r.l9(0,new C.uS(t))}else if(t!==3)if(a8.f!=null){t=w.a
t=t==null?a6:t.gd8()
t.toString
f=C.C(x,x)
for(r=l.b,e=0;e<r;++e)f.l(0,e,l.bnB(t.kN(e),t.kM(e),t.kL(e),t.m0(e)))
t=k.a
d=t==null?a6:J.fz(t.ga5(t))
if(d==null){t=k.a
t=t==null?a6:t.ga5(t)
if(t==null)t=D.K.ga5(new Uint8Array(0))
d=J.fz(t)}t=w.a
a0=t==null?a6:J.fz(t.ga5(t))
if(a0==null){t=w.a
t=t==null?a6:t.ga5(t)
if(t==null)t=D.K.ga5(new Uint8Array(0))
a0=J.fz(t)}for(a1=d.length,t=d.$flags|0,a2=0;a2<a1;++a2){a3=f.h(0,a0[a2])
if(a3!==-1){a3.toString
t&2&&C.u(d)
d[a2]=a3}}}k.y=s.y
for(t=s.a,t=t.gT(t);t.q();){a4=t.gI()
if(a4.gao()!==0){r=a4.gj5()
q=a8.a
q===$&&C.b()
p=a4.gjn()
o=a8.b
o===$&&C.b()
k.yb(r+q,p+o,a4)}}v.l4(k)
w=k}return v},
aoG(){var x,w=this.f
if(w.d>=w.c)return null
x=new B.af4()
x.aLf(w);++this.f.d
this.SV()
return x},
aRz(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
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
D.bL.fu(x,0,4096,4098)
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
s=C.fR(m,m,D.av,0,D.bP,w,m,0,1,t.abQ(),D.av,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&C.b()
if(x){x=d.b
x===$&&C.b()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+A.e3N[q];o<w;o+=A.eJ5[q],++p){if(!n.aiM(r))return s
n.aqi(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.aiM(r))return s
n.aqi(s,o,t,r)}return s},
aqi(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.dB(x,e,w,0,0)}},
aiL(){var x,w,v,u,t,s=this,r=s.f.hh(6)
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
x.c=new C.uS(new Uint8Array(C.b5(C.c([s.f.bw()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=B.cac(D.f.cN(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
u=J.A(x.a,x.d++)
x=s.f
t=J.A(x.a,x.d++)
x=s.f
w=J.A(x.a,x.d++)
s.a.e.d.n_(v,u,t,w)}}s.a.toString
return!0},
aiM(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.aRM(d))return!1
if(x.as===0)x.SV()
return!0},
SV(){var x,w,v,u=this.f
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
aRM(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ay
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
w=u}}for(k=d.$flags|0;w<x;){s=l.ch=l.aRL()
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
t=l.a2_(v,s,t)
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
v=l.a2_(t,v,n)
o.$flags&2&&C.u(o)
o[q]=v}else{o===$&&C.b()
p.toString
v=l.a2_(t,p,n)
o.$flags&2&&C.u(o)
o[q]=v}}v=l.ch
v.toString
l.CW=v}}return!0},
aRL(){var x,w,v,u,t=this
if(t.cy>12)return null
while(x=t.ax,w=t.cy,x<w){x=t.aNT()
x.toString
w=t.at
v=t.ax
t.at=(w|D.f.cE(x,v))>>>0
t.ax=v+8}v=t.at
u=A.eMz[w]
t.at=D.f.eb(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
a2_(d,e,f){var x,w,v=0
for(;;){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
aNT(){var x,w,v=this,u=v.w,t=u[0],s=u.$flags|0
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
B.Kq.prototype={
H(){return"IcoType."+this.b}}
B.aTF.prototype={
gbJ(){return 0},
gaO(){return 0}}
B.aeH.prototype={}
B.aTD.prototype={
gaO(){return D.f.av(B.Cj.prototype.gaO.call(this),2)},
gLP(){return!(this.d===40&&this.f===32)&&B.Cj.prototype.gLP.call(this)}}
B.aTE.prototype={
iN(d){var x=C.cd(d,!1,null,0)
this.a=x
return this.b=B.cat(x)},
mm(d,e){var x,w,v,u=this
if(u.iN(d)==null)return null
x=u.b.e.length
if(x===1)return u.i2(0)
for(w=null,v=0;v<u.b.e.length;++v){e=u.i2(v)
if(e==null)continue
if(w==null){e.w=D.bP
w=e}else w.l4(e)}return w},
i2(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=this.a
if(a7!=null){x=this.b
x=x==null||a8>=x.d}else x=!0
if(x)return a6
w=this.b.e[a8]
x=a7.a
a7=a7.b+w.e
v=w.d
u=J.Ib(x,a7,a7+v)
t=new C.Xb(C.c1M())
y.D.a(u)
if(t.F5(u))return t.bR(u)
s=B.o8(!1,14)
s.iK(19778)
s.h3(v)
s.h3(0)
s.h3(0)
a7=C.cd(u,!1,a6,0)
x=B.c8g(C.cd(J.cl(D.K.ga5(s.c),0,s.a),!1,a6,0))
v=a7.d
r=a7.Z()
q=a7.Z()
p=$.fy()
p.$flags&2&&C.u(p)
p[0]=q
q=$.jo()
o=q[0]
p[0]=a7.Z()
q=q[0]
n=a7.ad()
m=a7.ad()
l=A.Uy[a7.Z()]
a7.Z()
p[0]=a7.Z()
p[0]=a7.Z()
p=a7.Z()
a7.Z()
k=new B.aTD(x,o,q,r,n,m,l,p,v)
k.aea(a7,x)
if(r!==40&&n!==1)return a6
j=p===0&&m<=8?40+4*D.f.cN(1,m):40+4*p
x.b=j
s.a-=4
s.h3(j)
i=C.cd(u,!1,a6,0)
h=new B.aKu(!0)
h.a=i
h.b=k
g=h.i2(0)
if(m>=32)return g
f=32-D.f.aC(o,32)
e=D.f.av(f===32?o:o+f,8)
for(a7=q<0,x=q===0,q=1/q<0,d=0;d<D.f.av(B.Cj.prototype.gaO.call(k),2);++d){if(!(x?q:a7))a0=d
else{v=g.a
v=v==null?a6:v.b
a0=(v==null?0:v)-1-d}a1=i.hB(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a6:v.cD(0,a0,a6)
if(a2==null)a2=new C.er()
for(a3=0;a3<o;){a4=J.A(a1.a,a1.d++)
a5=7
for(;;){if(!(a5>-1&&a3<o))break
if((a4&D.f.cE(1,a5))>>>0!==0)a2.sao(0)
a2.q();++a3;--a5}}}return g}}
B.abs.prototype={}
B.DI.prototype={}
B.DJ.prototype={}
B.US.prototype={}
B.aUL.prototype={}
B.z9.prototype={}
B.aUN.prototype={
aA6(d){var x,w,v,u,t,s=this,r=C.cd(d,!0,null,0)
s.a=r
x=r.Pb(2,0)
if(J.A(x.a,x.d)!==255||J.A(x.a,x.d+1)!==216)return!1
if(s.tE()!==216)return!1
w=s.tE()
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
break}w=s.tE()}return v&&u},
bvz(d){var x,w,v,u,t,s,r=this
r.a=C.cd(d,!0,null,0)
if(r.tE()!==216)return null
x=new B.aUR()
w=r.tE()
v=!1
u=!1
for(;;){if(w!==217){t=r.a
t=t.d<t.c}else t=!1
if(!t)break
switch(w){case 192:case 193:case 194:r.amz(w,r.amv())
v=!0
break
case 218:r.aoF()
u=!0
break
default:r.aoF()
break}w=r.tE()}t=r.d
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
p.b8o()
if(p.x.length!==1)throw C.i(C.bH("Only single frame JPEGs supported"))
for(x=p.Q,w=0;v=p.d,u=v.z,w<u.length;++w){t=v.y.h(0,u[w])
v=t.a
u=p.d
s=u.f
r=t.b
q=u.r
u=p.aO0(u,t)
v=v===1&&s===2?1:0
x.push(new B.abs(u,v,r===1&&q===2?1:0))}},
b8o(){var x,w,v,u,t=this
if(t.tE()!==216)throw C.i(C.bH("Start Of Image marker not found."))
x=t.tE()
for(;;){if(x!==217){w=t.a
w===$&&C.b()
w=w.d<w.c}else w=!1
if(!w)break
v=t.amv()
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:t.b8p(x,v)
break
case 219:t.b8t(v)
break
case 192:case 193:case 194:t.amz(x,v)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw C.i(C.bH("Unhandled frame type "+D.f.hw(x,16)))
case 196:t.b8s(v)
break
case 221:t.e=v.ad()
break
case 218:t.b8G(v)
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
break}x=t.tE()}},
aoF(){var x,w=this.a
w===$&&C.b()
x=w.ad()
if(x<2)throw C.i(C.bH("Invalid Block"))
w=this.a
w.d=w.d+(x-2)},
amv(){var x,w=this.a
w===$&&C.b()
x=w.ad()
if(x<2)throw C.i(C.bH("Invalid Block"))
return this.a.fZ(x-2)},
tE(){var x,w=this,v=w.a
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
b8u(d){if(d.Z()!==1165519206)return
if(d.ad()!==0)return
this.r.hT(d)},
b8p(d,e){var x,w,v,u,t=this,s=e
if(d===224){x=s
w=!1
if(J.A(x.a,x.d)===74){x=s
if(J.A(x.a,x.d+1)===70){x=s
if(J.A(x.a,x.d+2)===73){x=s
if(J.A(x.a,x.d+3)===70){x=s
x=J.A(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new B.aUS()
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
s.Pb(14+3*w*v,14)}}else if(d===225)t.b8u(s)
else if(d===238){x=s
w=!1
if(J.A(x.a,x.d)===65){x=s
if(J.A(x.a,x.d+1)===100){x=s
if(J.A(x.a,x.d+2)===111){x=s
if(J.A(x.a,x.d+3)===98){x=s
if(J.A(x.a,x.d+4)===101){x=s
x=J.A(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){t.c=new B.aUL()
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
x.d=J.A(w.a,w.d+11)}}else if(d===254)try{s.bvG()}catch(u){C.aF(u)}},
b8t(d){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=this.w;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
t=J.A(u,v)
s=D.f.R(t,4)
t&=15
if(t>=4)throw C.i(C.bH("Invalid number of quantization tables"))
v=w[t]
if(v==null){v=new Int16Array(64)
w[t]=v}for(u=s!==0,r=0;r<64;++r){q=u?d.ad():J.A(d.a,d.d++)
p=A.x6[r]
v.$flags&2&&C.u(v)
v[p]=q}}if(u)throw C.i(C.bH("Bad length for DQT block"))},
amz(d,e){var x,w,v,u,t,s,r,q=this
if(q.d!=null)throw C.i(C.bH("Duplicate JPG frame data found."))
x=q.d=new B.afn(C.C(y.p,y.c),C.c([],y.t))
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
q.d.y.l(0,u,new B.z9(s&15,t&15,x,r))}q.d.lX()
q.x.push(q.d)},
b8s(d){var x,w,v,u,t,s,r,q,p,o,n,m
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
m[s]=this.aO7(r,n)}},
b8G(d){var x,w,v,u,t,s,r,q=this,p=d.bw()
if(p<1||p>4)throw C.i(C.bH("Invalid SOS block"))
x=C.zg(p,new B.aUP(q,d),!0,y.c)
w=d.bw()
v=d.bw()
u=d.bw()
t=D.f.R(u,4)
s=q.a
s===$&&C.b()
r=q.d
t=new B.afo(s,r,x,q.e,w,v,t&15,u&15)
s=r.w
s===$&&C.b()
t.f=s
t.r=r.b
t.oK()},
aO7(d,e){var x,w,v,u,t,s,r,q,p,o,n=C.c([],y.G),m=16
for(;;){if(!(m>0&&d[m-1]===0))break;--m}x=y.T
n.push(new B.Pa(C.c([],x)))
w=n[0]
for(v=0,u=0;u<m;){for(t=0;t<d[u];++t){w=n.pop()
s=w.a
r=s.length
q=w.b
if(r<=q)D.i.su(s,q+1)
s[w.b]=new B.US(e[v])
while(s=w.b,s>0)w=n.pop()
w.b=s+1
n.push(w)
for(;n.length<=u;w=p){s=C.c([],x)
p=new B.Pa(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.i.su(r,o+1)
r[w.b]=new B.DJ(s)}++v}++u
if(u<m){s=C.c([],x)
p=new B.Pa(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.i.su(r,o+1)
r[w.b]=new B.DJ(s)
w=p}}return n[0].a},
aO0(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.e
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
B.cIf(k,j[p][l],u,v)
i=l<<3>>>0
for(h=0,g=0;g<8;++g){f=t[o+g]
for(n=0;n<8;++n,h=e){f.toString
e=h+1
k=u[h]
f.$flags&2&&C.u(f)
f[i+n]=k}}}}return t}}
B.Pa.prototype={}
B.afn.prototype={
lX(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=new C.dO(x,x.r,x.e);w.q();){v=x.h(0,w.d)
g.f=Math.max(g.f,v.a)
g.r=Math.max(g.r,v.b)}w=g.e
w.toString
g.w=D.m.dZ(w/8/g.f)
w=g.d
w.toString
g.x=D.m.dZ(w/8/g.r)
for(w=new C.dO(x,x.r,x.e),u=y.k,t=y.H;w.q();){s=x.h(0,w.d)
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
B.aUR.prototype={
gbJ(){return this.a},
gaO(){return this.b}}
B.aUS.prototype={}
B.afo.prototype={
oK(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.y,f=g.length,e=h.r
e.toString
if(e)if(h.Q===0)x=h.at===0?h.gaRt():h.gaRv()
else x=h.at===0?h.gaRk():h.gaRm()
else x=h.gaRq()
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
for(l=0;l<m;++l)for(k=0;k<n;++k)h.aRA(r,x,t,l,k)}++t;++q}}h.ch=0
j=J.A(w.a,w.d)
i=J.A(w.a,w.d+1)
if(j===255)if(i>=208&&i<=215)w.d+=2
else break}},
zc(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.f.j7(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.bw()
w.ay=x
if(x===255)if(v.bw()!==0)return null
w.ch=7
return D.f.R(w.ay,7)&1},
Iy(d){var x,w=new B.DJ(d)
while(x=this.zc(),x!=null){if(w instanceof B.DJ)w=w.a[x]
if(w instanceof B.US)return w.a}return null},
a3X(d){var x,w
for(x=0;d>0;){w=this.zc()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
Jb(d){var x
if(d==null)return 0
if(d===1)return this.zc()===1?1:-1
x=this.a3X(d)
if(x==null)return 0
if(x>=D.f.cE(1,d-1))return x
return x+D.f.cN(-1,d)+1},
aRr(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&C.b()
x=r.Iy(q)
w=x===0?0:r.Jb(x)
q=d.y
q===$&&C.b()
q+=w
d.y=q
e.$flags&2&&C.u(e)
e[0]=q
for(v=1;v<64;){q=d.x
q===$&&C.b()
u=r.Iy(q)
if(u==null)break
t=u&15
s=u>>>4
if(t===0){if(s<15)break
v+=16
continue}v+=s
t=r.Jb(t)
e[A.x6[v]]=t;++v}},
aRu(d,e){var x,w,v=d.w
v===$&&C.b()
x=this.Iy(v)
w=x===0?0:D.f.cN(this.Jb(x),this.ax)
v=d.y
v===$&&C.b()
v+=w
d.y=v
e.$flags&2&&C.u(e)
e[0]=v},
aRw(d,e){var x=e[0],w=this.zc()
w.toString
w=D.f.cN(w,this.ax)
e.$flags&2&&C.u(e)
e[0]=(x|w)>>>0},
aRl(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.CW
if(o>0){p.CW=o-1
return}x=p.Q
w=p.as
for(o=p.ax,v=e.$flags|0;x<=w;){u=d.x
u===$&&C.b()
u=p.Iy(u)
u.toString
t=u&15
s=u>>>4
if(t===0){if(s<15){o=p.a3X(s)
o.toString
p.CW=o+D.f.cN(1,s)-1
break}x+=16
continue}x+=s
r=A.x6[x]
u=p.Jb(t)
q=D.f.cN(1,o)
v&2&&C.u(e)
e[r]=u*q;++x}},
aRn(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.Q,n=p.as
A:for(x=p.ax,w=e.$flags|0,v=0;o<=n;){u=A.x6[o]
t=p.cx
switch(t){case 0:t=d.x
t===$&&C.b()
s=p.Iy(t)
if(s==null)throw C.i(C.bH("Invalid progressive encoding"))
r=s&15
v=s>>>4
if(r===0)if(v<15){t=p.a3X(v)
t.toString
p.CW=t+D.f.cN(1,v)
p.cx=4}else{p.cx=1
v=16}else{if(r!==1)throw C.i(C.bH("invalid ACn encoding"))
p.cy=p.Jb(r)
p.cx=v!==0?2:3}continue A
case 1:case 2:q=e[u]
if(q!==0){t=p.zc()
t.toString
t=D.f.cN(t,x)
w&2&&C.u(e)
e[u]=q+t}else{--v
if(v===0)p.cx=t===2?3:0}break
case 3:t=e[u]
if(t!==0){q=p.zc()
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
if(t!==0){q=p.zc()
q.toString
q=D.f.cN(q,x)
w&2&&C.u(e)
e[u]=t+q}break}++o}if(p.cx===4)if(--p.CW===0)p.cx=0},
aRA(d,e,f,g,h){var x,w,v=this.f
v===$&&C.b()
x=D.f.eD(f,v)*d.b+g
w=D.f.aC(f,v)*d.a+h
v=d.r
v===$&&C.b()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
B.Vn.prototype={
iN(d){C.cd(d,!0,null,0)
return B.aUO().bvz(d)},
mm(d,e){var x=B.aUO()
x.hT(d)
if(x.x.length!==1)throw C.i(C.bH("only single frame JPEGs supported"))
return B.cH2(x)},
bR(d){return this.mm(d,null)}}
B.zF.prototype={
H(){return"PnmFormat."+this.b}}
B.EZ.prototype={
gbJ(){return this.a},
gaO(){return this.b}}
B.b1t.prototype={
F5(d){var x
this.b=C.cd(d,!1,null,0)
x=this.QX()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
mm(d,e){if(this.iN(d)==null)return null
return this.i2(0)},
iN(d){var x,w,v=this
v.b=C.cd(d,!1,null,0)
x=v.QX()
if(x==="P1"){w=v.a=new B.EZ(A.rN)
w.e=A.a3C}else if(x==="P2"){w=v.a=new B.EZ(A.rN)
w.e=A.a3D}else if(x==="P5"){w=v.a=new B.EZ(A.rN)
w.e=A.EH}else if(x==="P3"){w=v.a=new B.EZ(A.rN)
w.e=A.a3E}else if(x==="P6"){w=v.a=new B.EZ(A.rN)
w.e=A.EI}else return v.b=null
w.a=v.IY()
w=v.a
w.toString
w.b=v.IY()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
i2(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===A.a3C){x=q.a
w=C.fR(r,r,D.eG,0,D.bP,q.b,r,0,1,r,D.av,x,!1)
for(q=w.a,q=q.gT(q);q.q();){v=q.gI()
if(s.QX()==="1")v.it(1,1,1)
else v.it(0,0,0)}return w}else if(x===A.a3D||x===A.EH){u=s.IY()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=C.fR(r,r,s.avn(u),0,D.bP,q,r,0,1,r,D.av,x,!1)
for(q=w.a,q=q.gT(q);q.q();){v=q.gI()
t=s.Sj(s.a.e,u)
v.it(t,t,t)}return w}else if(x===A.a3E||x===A.EI){u=s.IY()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=C.fR(r,r,s.avn(u),0,D.bP,q,r,0,3,r,D.av,x,!1)
for(q=w.a,q=q.gT(q);q.q();)q.gI().it(s.Sj(s.a.e,u),s.Sj(s.a.e,u),s.Sj(s.a.e,u))
return w}return r},
avn(d){if(d>255)return D.cO
if(d>15)return D.av
if(d>3)return D.kA
if(d>1)return D.kz
return D.eG},
Sj(d,e){if(d===A.EH||d===A.EI)return this.b.bw()
return this.IY()},
IY(){var x,w,v=this.QX()
if(J.aY(v)===0)return 0
try{x=C.fx(v,null)
return x}catch(w){return 0}},
QX(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.i.eg(x,0)
w=D.o.aK(t.bvF())
if(w.length===0)return""
while(D.o.bf(w,"#"))w=D.o.aK(this.b.ayI(70))
t=y.U
v=C.J(new C.al(C.c(w.split(" "),y.s),new B.b1u(),t),t.i("z.E"))
for(t=v.length,u=0;u<t;++u)if(D.o.bf(v[u],"#")){D.i.su(v,u)
break}D.i.L(x,v)
if(x.length===0)return""
return D.i.eg(x,0)}}
B.ai5.prototype={}
B.ai6.prototype={}
B.tQ.prototype={}
B.ai8.prototype={}
B.ai9.prototype={}
B.aic.prototype={}
B.aid.prototype={}
B.Xu.prototype={}
B.aib.prototype={}
B.b3a.prototype={
aLH(d){var x,w,v,u,t=this
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
B.M4.prototype={
ayE(d,e,f,g,h,i,j){if(d.c-d.d<2)return
if(h==null)h=d.ad()
switch(h){case 0:g.toString
this.b8F(d,e,f,g)
break
case 1:if(i==null)i=this.b8C(d,f)
g.toString
this.b8E(d,e,f,g,i,j)
break
default:throw C.i(C.bH("Unsupported compression: "+h))}},
bvE(d,e,f,g){return this.ayE(d,e,f,g,null,null,0)},
b8C(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.ad()
return w},
b8F(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.K.fu(x,0,w,255)
return}this.c=d.fZ(w).eM()},
b8E(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
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
this.aRF(s,x,v)
v+=e}},
aRF(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.A(t,u)
t=$.lM()
t.$flags&2&&C.u(t)
t[0]=u
s=$.mD()[0]
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
gbP(){return this.a}}
B.qS.prototype={
H(){return"PsdColorMode."+this.b}}
B.b3c.prototype={
aLI(d){var x,w,v=this
v.as=C.cd(d,!0,null,0)
v.b85()
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
w.b8A()
w.b8B()
w.b8D()
w.ay=w.ax=w.at=w.as=null
return!0},
atL(){if(!this.oK())return null
return this.bwf()},
bwf(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.y
if(d!=null)return d
d=f.a
d=C.fR(e,e,D.av,0,D.bP,f.b,e,0,4,e,D.av,d,!1)
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
if(m==null)m=new C.er()
l=D.m.F(m.ga7())
k=D.m.F(m.gag())
j=D.m.F(m.gah())
i=D.m.F(m.gao())
p.toString
if(p>=0&&p<f.a&&d&&s<f.b){n=w.b
n.toString
h=f.y.a
g=h==null?e:h.cD(n+o,q,e)
if(g==null)g=new C.er()
f.aNF(D.m.F(g.ga7()),D.m.F(g.gag()),D.m.F(g.gah()),D.m.F(g.gao()),l,k,j,i,u,v,g)}++o;++p}++r;++s}}++x}d=f.y
d.toString
return d},
aNF(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s=k/255*m
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
case 1768188278:u=B.b3d(d,h)
v=B.b3d(e,i)
w=B.b3d(f,j)
x=k
break
case 1818391150:u=B.b3f(d,h)
v=B.b3f(e,i)
w=B.b3f(f,j)
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
case 1935897198:u=B.c2D(d,h)
v=B.c2D(e,i)
w=B.c2D(f,j)
x=k
break
case 1684633120:u=B.b3e(d,h)
v=B.b3e(e,i)
w=B.b3e(f,j)
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
case 1870030194:u=B.c2B(d,h,g,k)
v=B.c2B(e,i,g,k)
w=B.c2B(f,j,g,k)
x=k
break
case 1934387572:u=B.c2E(d,h)
v=B.c2E(e,i)
w=B.c2E(f,j)
x=k
break
case 1749838196:u=B.c2z(d,h)
v=B.c2z(e,i)
w=B.c2z(f,j)
x=k
break
case 1984719220:u=B.c2F(d,h)
v=B.c2F(e,i)
w=B.c2F(f,j)
x=k
break
case 1816947060:u=B.c2A(d,h)
v=B.c2A(e,i)
w=B.c2A(f,j)
x=k
break
case 1884055924:u=B.c2C(d,h)
v=B.c2C(e,i)
w=B.c2C(f,j)
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
case 1936553316:u=B.c2y(d,h)
v=B.c2y(e,i)
w=B.c2y(f,j)
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
n.sao(D.m.F(g*t+x*s))},
b85(){var x,w,v=this,u=v.as
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
v.r=A.f4G[v.as.ad()]},
b8A(){var x,w,v,u,t,s,r=this,q=r.at
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
if(w===943868237)q.l(0,v,new B.ai7(v,t))}},
b8B(){var x,w,v,u,t,s,r,q,p,o=this,n=o.ax
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
t=$.mC()[0]
if(t<0)t=-t
for(v=y.N,u=y.O,s=y.v,r=0;r<t;++r){q=new B.aia(C.C(v,u),C.c([],n),C.c([],s))
q.aLJ(w)
o.w.push(q)}}for(r=0;n=o.w,r<n.length;++r)n[r].bvy(w,o)
x=o.ax.Z()
p=o.ax.fZ(x)
if(x>0){p.ad()
p.ad()
p.ad()
p.ad()
p.ad()
p.ad()
p.bw()}},
b8D(){var x,w,v,u,t,s,r=this,q=r.ay
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
s=new B.M4(s)
s.ayE(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=B.ccS(r.r,r.f,r.a,r.b,r.x)},
gbJ(){return this.a},
gaO(){return this.b}}
B.ai7.prototype={
gbP(){return this.a}}
B.aia.prototype={
aLJ(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a1.Z(),a0=$.fy()
a0.$flags&2&&C.u(a0)
a0[0]=d
d=$.jo()
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
v=$.mC()[0]
a1.Z()
e.as.push(new B.M4(v))}u=a1.Z()
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
if(t>0)new B.b3a().aLH(s.fZ(t))
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
a0.l(0,n,B.cvx(n,m))
if(n==="lrFX"){k=C.bP(o.a(a0.h(0,"lrFX")).b,null,0)
k.ad()
j=k.ad()
for(i=0;i<j;++i){k.hh(4)
h=k.hh(4)
g=k.Z()
if(h==="dsdw"){f=new B.ai6()
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
k.ad()}else if(h==="isdw"){f=new B.ai9()
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
k.ad()}else if(h==="oglw"){f=new B.aic()
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
k.ad()}}else if(h==="iglw"){f=new B.ai8()
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
k.ad()}}else if(h==="bevl"){f=new B.ai5()
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
k.ad()}}else if(h==="sofi"){f=new B.aid()
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
bvy(d,e){var x,w,v,u,t,s=this,r=0
for(;;){x=s.as
x===$&&C.b()
if(!(r<x.length))break
x=x[r]
w=s.e
w===$&&C.b()
v=s.f
v===$&&C.b()
x.bvE(d,w,v,e.f);++r}w=e.r
v=e.f
u=s.e
u===$&&C.b()
t=s.f
t===$&&C.b()
s.cx=B.ccS(w,v,u,t,x)}}
B.M5.prototype={}
B.b3b.prototype={
mm(d,e){var x,w,v,u=null,t=B.c2x(d)
this.a=t
x=1
if(x===1){t=t.atL()
return t}for(w=u,v=0;v<x;++v){t=this.a
e=t==null?u:t.atL()
if(e==null)continue
if(w==null){e.w=A.dYY
w=e}else w.l4(e)}return w},
iN(d){return this.a=B.c2x(d)}}
B.aih.prototype={}
B.wd.prototype={
aD(d,e){return new B.wd(this.a*e,this.b*e,this.c*e)},
a_(d,e){return new B.wd(this.a+e.a,this.b+e.b,this.c+e.c)},
a4(d,e){return new B.wd(this.a-e.a,this.b-e.b,this.c-e.c)}}
B.kQ.prototype={
aD(d,e){var x=this
return new B.kQ(x.a*e,x.b*e,x.c*e,x.d*e)},
a_(d,e){var x=this
return new B.kQ(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
a4(d,e){var x=this
return new B.kQ(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
B.Xy.prototype={
gbJ(){return this.a},
gaO(){return this.b}}
B.M8.prototype={
gaO(){return this.f},
gbJ(){return this.r}}
B.aig.prototype={
gbJ(){return this.a},
gaO(){return this.b}}
B.pj.prototype={
sKo(d){var x=this.a,w=this.b
x.$flags&2&&C.u(x)
x[w+1]=d},
NR(){var x=this.e,w=this.d
if(x)return new B.wd(A.lb[w>>>9],A.lb[w>>>4&31],A.eM[w&15])
else return new B.wd(A.eM[w>>>7&15],A.eM[w>>>3&15],A.x5[w&7])},
NT(){var x=this.e,w=this.d
if(x)return new B.kQ(A.lb[w>>>9],A.lb[w>>>4&31],A.eM[w&15],255)
else return new B.kQ(A.eM[w>>>7&15],A.eM[w>>>3&15],A.x5[w&7],A.x5[w>>>11&7])},
NS(){var x=this.r,w=this.f
if(x)return new B.wd(A.lb[w>>>10],A.lb[w>>>5&31],A.lb[w&31])
else return new B.wd(A.eM[w>>>8&15],A.eM[w>>>4&15],A.eM[w&15])},
NU(){var x=this.r,w=this.f
if(x)return new B.kQ(A.lb[w>>>10],A.lb[w>>>5&31],A.lb[w&31],255)
else return new B.kQ(A.eM[w>>>8&15],A.eM[w>>>4&15],A.eM[w&15],A.x5[w>>>12&7])},
Ic(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
qZ(){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sKo(x.Ic())
x.d=w>>>1&16383
x.sKo(x.Ic())
x.e=(w>>>15&1)===1
x.sKo(x.Ic())
x.f=w>>>16&32767
x.sKo(x.Ic())
x.r=(w>>>31&1)===1
x.sKo(x.Ic())}}
B.b3m.prototype={
iN(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.aRp(d)
if(x!=null){w.a=d
return w.b=x}}x=w.aRE(d)
if(x!=null){w.a=d
return w.b=x}x=w.aRC(d)
if(x!=null){w.a=d
return w.b=x}return null},
aRE(d){var x,w,v=C.cd(d,!1,null,0)
if(v.Z()!==52)return null
if(v.Z()!==55727696)return null
x=C.c([0,0,0,0],y.t)
w=new B.M8(x)
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
aRC(d){var x,w,v=C.cd(d,!1,null,0)
if(v.Z()!==52)return null
x=new B.Xy()
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
aRp(d){var x,w,v,u,t,s,r=null,q=d.length,p=C.cd(d,!1,r,0)
if(p.Z()!==0)return r
x=new B.aig()
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
if(u instanceof B.aig){u=u.a
x=v.b.gaO()
w=v.a
w.toString
return v.a0Z(u,x,w)}else if(u instanceof B.Xy){u=v.a
u.toString
return v.aRB(u)}else if(u instanceof B.M8){u=v.a
u.toString
return v.aRD(u)}return null},
mm(d,e){if(this.iN(d)==null)return null
return this.i2(0)},
aRB(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
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
switch(x.d&255){case 16:s=C.fR(k,k,D.av,0,D.bP,t,k,0,4,k,D.av,u,!1)
for(x=s.a,x=x.gT(x);x.q();){r=x.gI()
q=J.A(w.a,w.d++)
p=J.A(w.a,w.d++)
r.sa7(p&240)
r.sag((p&15)<<4)
r.sah(q&240)
r.sao((q&15)<<4)}return s
case 17:s=C.fR(k,k,D.av,0,D.bP,t,k,0,4,k,D.av,u,!1)
for(x=s.a,x=x.gT(x);x.q();){r=x.gI()
o=w.ad()
n=(o&1)!==0?255:0
r.sa7(o>>>8&248)
r.sag(o>>>3&248)
r.sah((o&62)<<2)
r.sao(n)}return s
case 18:s=C.fR(k,k,D.av,0,D.bP,t,k,0,4,k,D.av,u,!1)
for(x=s.a,x=x.gT(x);x.q();){r=x.gI()
r.sa7(J.A(w.a,w.d++))
r.sag(J.A(w.a,w.d++))
r.sah(J.A(w.a,w.d++))
r.sao(J.A(w.a,w.d++))}return s
case 19:s=C.fR(k,k,D.av,0,D.bP,t,k,0,3,k,D.av,u,!1)
for(x=s.a,x=x.gT(x);x.q();){r=x.gI()
o=w.ad()
r.sa7(o>>>8&248)
r.sag(o>>>3&252)
r.sah((o&31)<<3)}return s
case 20:s=C.fR(k,k,D.av,0,D.bP,t,k,0,3,k,D.av,u,!1)
for(x=s.a,x=x.gT(x);x.q();){r=x.gI()
o=w.ad()
r.sa7((o&31)<<3)
r.sag(o>>>2&248)
r.sah(o>>>7&248)}return s
case 21:s=C.fR(k,k,D.av,0,D.bP,t,k,0,3,k,D.av,u,!1)
for(x=s.a,x=x.gT(x);x.q();){r=x.gI()
r.sa7(J.A(w.a,w.d++))
r.sag(J.A(w.a,w.d++))
r.sah(J.A(w.a,w.d++))}return s
case 22:s=C.fR(k,k,D.av,0,D.bP,t,k,0,1,k,D.av,u,!1)
for(x=s.a,x=x.gT(x);x.q();)x.gI().sa7(J.A(w.a,w.d++))
return s
case 23:s=C.fR(k,k,D.av,0,D.bP,t,k,0,4,k,D.av,u,!1)
for(x=s.a,x=x.gT(x);x.q();){r=x.gI()
n=J.A(w.a,w.d++)
m=J.A(w.a,w.d++)
r.sa7(m)
r.sag(m)
r.sah(m)
r.sao(n)}return s
case 24:return k
case 25:return x.y===0?l.agX(u,t,w.eM()):l.a0Z(u,t,w.eM())}return k},
aRD(d){var x,w,v,u=this
if(!(u.b instanceof B.M8))return null
x=C.cd(d,!1,null,0)
w=x.d+=52
v=y.i.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.agX(v.r,v.f,x.eM())
case 3:return u.a0Z(v.r,v.f,x.eM())}return null},
agX(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=C.fR(b5,b5,D.av,0,D.bP,c6,b5,0,3,b5,D.av,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.lO(D.K.ga5(c7),0,null),c0=new B.pj(b9),c1=new B.pj(J.lO(D.K.ga5(c7),0,null)),c2=new B.pj(J.lO(D.K.ga5(c7),0,null)),c3=new B.pj(J.lO(D.K.ga5(c7),0,null)),c4=new B.pj(J.lO(D.K.ga5(c7),0,null))
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
j=c1.NR()
i=A.dK[r][0]
h=c2.NR()
g=A.dK[r][1]
f=c3.NR()
e=A.dK[r][2]
d=c4.NR()
a0=A.dK[r][3]
a1=c1.NS()
a2=A.dK[r][0]
a3=c2.NS()
a4=A.dK[r][1]
a5=c3.NS()
a6=A.dK[r][2]
a7=c4.NS()
a8=A.dK[r][3]
a9=A.Uh[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.f.R((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.f.R((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.f.R((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.dB(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
a0Z(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=C.fR(a4,a4,D.av,0,D.bP,b5,a4,0,4,a4,D.av,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.lO(D.K.ga5(b6),0,null),a9=new B.pj(a8),b0=new B.pj(J.lO(D.K.ga5(b6),0,null)),b1=new B.pj(J.lO(D.K.ga5(b6),0,null)),b2=new B.pj(J.lO(D.K.ga5(b6),0,null)),b3=new B.pj(J.lO(D.K.ga5(b6),0,null))
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
j=b0.NT()
i=A.dK[r][0]
h=b1.NT()
g=A.dK[r][1]
g=new B.kQ(j.a*i,j.b*i,j.c*i,j.d*i).a_(0,new B.kQ(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.NT()
i=A.dK[r][2]
i=g.a_(0,new B.kQ(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.NT()
g=A.dK[r][3]
f=i.a_(0,new B.kQ(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.NU()
h=A.dK[r][0]
i=b1.NU()
j=A.dK[r][1]
j=new B.kQ(g.a*h,g.b*h,g.c*h,g.d*h).a_(0,new B.kQ(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.NU()
h=A.dK[r][2]
h=j.a_(0,new B.kQ(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.NU()
j=A.dK[r][3]
e=h.a_(0,new B.kQ(i.a*j,i.b*j,i.c*j,i.d*j))
d=A.Uh[s+t&3]
j=d[0]
i=d[1]
a0=D.f.R(f.a*j+e.a*i,7)
a1=D.f.R(f.b*j+e.b*i,7)
a2=D.f.R(f.c*j+e.c*i,7)
a3=D.f.R(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.ic(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
B.alO.prototype={
hT(d){var x,w=this
if(d.c-d.d<18)return
w.a=d.bw()
w.b=d.bw()
x=d.bw()
w.c=x<12?A.eQ1[x]:A.yu
d.ad()
w.e=d.ad()
w.f=d.bw()
d.ad()
d.ad()
w.x=d.ad()
w.y=d.ad()
w.z=d.bw()
w.Q=d.bw()},
ax_(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===A.mM||w===A.mN){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0},
gbJ(){return this.x},
gaO(){return this.y}}
B.mq.prototype={
H(){return"TgaImageType."+this.b}}
B.bgP.prototype={
mm(d,e){if(this.iN(d)==null)return null
return this.i2(0)},
iN(d){var x,w,v,u,t=this
t.a=new B.alO(A.yu)
x=C.cd(d,!1,null,0)
t.b=x
w=x.fZ(18)
t.a.hT(w)
x=t.a
if(!x.ax_())return null
v=t.b
v.d+=x.a
u=x.c
if(u===A.mM||u===A.mN)x.as=v.fZ(x.e*D.f.R(x.f,3)).eM()
x=t.a
x.ax=t.b.d
return x},
i2(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===A.a6V)return x.agW()
else if(w===A.a6U||w===A.mN)return x.aRH()
else if(w===A.mM)return x.agW()
return null},
agS(d,e){var x,w,v,u,t,s,r,q=this,p=C.cd(d,!1,null,0),o=q.a.f
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
aRH(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=C.fR(i,i,D.av,0,D.bP,a0,i,0,a1,i,D.av,d,h===A.mM||h===A.mN)
h=x.a
if((h==null?i:h.gd8())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.gd8()
d.toString
j.agS(h,d)}w=x.gbJ()
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
agW(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
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
r=C.fR(h,h,D.av,0,D.bP,t,h,0,s,h,D.av,u,x===A.mM||x===A.mN)
x=i.a
u=x.c
if(u===A.mM||u===A.mN){x=x.as
x.toString
u=r.a
u=u==null?h:u.gd8()
u.toString
i.agS(x,u)}if(w===8)for(q=r.gaO()-1;q>=0;--q){p=0
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
B.bgZ.prototype={
hg(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.bw()}for(x=t.a,w=0;v=t.c,d>v;){w=D.f.cE(w,v)+(t.b&A.rp[v])
d-=v
t.c=8
t.b=J.A(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.bw()}x=D.f.cE(w,d)
v=t.b
u=t.c-d
w=x+(D.f.j7(v,u)&A.rp[d])
t.c=u}return w}}
B.alP.prototype={
j(d){var x=this,w=x.a,v=$.c_Q().h(0,w)
if(v!=null)return v.a+": "+x.b.j(0)+" "+x.c
return"<"+w+">: "+x.b.j(0)+" "+x.c},
mK(){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.fZ(x*(w!==D.an?D.nF[w.a]:0))
switch(w.a){case 1:return u.e=new C.qo(new Uint8Array(C.b5(v.fZ(x).eM())))
case 2:return u.e=new C.yR(x===0?"":v.hh(x-1))
case 7:return u.e=new C.qo(new Uint8Array(C.b5(v.fZ(x).eM())))
case 3:return u.e=C.caD(v,x)
case 4:return u.e=C.cay(v,x)
case 5:return u.e=C.caz(v,x)
case 11:return u.e=C.caF(v,x)
case 12:return u.e=C.cax(v,x)
case 6:return u.e=new C.tf(new Int8Array(C.b5(J.c08(D.K.ga5(v.eM()),0,x))))
case 8:return u.e=C.caC(v,x)
case 9:return u.e=C.caA(v,x)
case 10:return u.e=C.caB(v,x)
case 0:return null}}}
B.bh0.prototype={
blp(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.f.av(u.a+7,8)
for(w=0,v=0;v<g;++v){u.a0X(d,w,f)
w+=x}},
a0X(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){while(w){v=p.vK(10)
u=A.Um[v]
t=D.f.R(u,1)&15
if(t===12){u=A.x1[(v<<2&12|p.mb(2))>>>0]
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
p.w=0}break}while(!w){u=A.SI[p.mb(4)]
r=u>>>5&2047
q=!0
if(r===100){u=A.TW[p.vK(9)]
t=D.f.R(u,1)&15
r=D.f.R(u,5)&2047
if(t===12){p.jd(5)
u=A.x1[p.mb(4)]
s=D.f.R(u,1)
r=D.f.R(u,4)&4095
p.ni(d,e,f,r)
f+=r
p.jd(4-(s&7))}else if(t===15)throw C.i(C.bH("TIFFFaxDecoder2"))
else{p.ni(d,e,f,r)
f+=r
p.jd(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=A.SE[p.mb(2)]
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
blq(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.f.av(x+7,8)
v=C.bm(2,null,!1,y.I)
e.at=a3&1
e.as=a3>>>2&1
if(e.amx()!==1)throw C.i(C.bH("TIFFFaxDecoder3"))
e.a0X(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.amx()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
for(;;){r.toString
if(!(r<x))break
e.aiQ(q,p,v)
n=v[0]
m=v[1]
l=A.Ui[e.mb(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.ni(d,u,r,m-r)}e.jd(7-j)
r=m
q=r}else if(k===1){e.jd(7-j)
i=o+1
h=i+1
if(p){r+=e.Qc()
e.f[o]=r
g=e.Qb()
e.ni(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.Qb()
e.ni(d,u,r,g)
r+=g
e.f[o]=r
r+=e.Qc()
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
e.d=o+1}else e.a0X(d,u,a1)
u+=w}},
blv(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
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
a2.aiQ(p,o,v)
m=v[0]
l=v[1]
k=A.Ui[a2.mb(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.ni(a3,t,q,l-q)}a2.jd(7-i)
q=l
p=q}else if(j===1){a2.jd(7-i)
h=n+1
g=h+1
if(o){q+=a2.Qc()
r[n]=q
f=a2.Qb()
a2.ni(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.Qb()
a2.ni(a3,t,q,f)
q+=f
r[n]=q
q+=a2.Qc()
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
Qc(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.vK(10)
u=A.Um[v]
t=D.f.R(u,1)&15
if(t===12){u=A.x1[(v<<2&12|r.mb(2))>>>0]
s=D.f.R(u,1)
x+=D.f.R(u,4)&4095
r.jd(4-(s&7))}else if(t===0)throw C.i(C.bH("TIFFFaxDecoder0"))
else if(t===15)throw C.i(C.bH("TIFFFaxDecoder1"))
else{x+=D.f.R(u,5)&2047
r.jd(10-t)
if((u&1)===0)w=!1}}return x},
Qb(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=A.SI[r.mb(4)]
u=v>>>5&2047
if(u===100){v=A.TW[r.vK(9)]
t=D.f.R(v,1)&15
s=D.f.R(v,5)
if(t===12){r.jd(5)
v=A.x1[r.mb(4)]
s=D.f.R(v,1)
x+=D.f.R(v,4)&4095
r.jd(4-(s&7))}else if(t===15)throw C.i(C.bH("TIFFFaxDecoder2"))
else{x+=s&2047
r.jd(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=A.SE[r.mb(2)]
x+=v>>>5&2047
r.jd(2-(v>>>1&15))}else{x+=u
r.jd(4-(v>>>1&15))}w=!0}}return x},
amx(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.vK(12)!==1)throw C.i(C.bH("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.vK(x)!==0)throw C.i(C.bH(u))
if(x<4)if(v.vK(8)!==0)throw C.i(C.bH(u))
while(w=v.vK(8),w!==1)if(w!==0)throw C.i(C.bH(u))}if(v.at===0)return 1
else return v.mb(1)},
aiQ(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
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
r=A.pg[J.A(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=A.pg[J.A(u,x+j)&255]
else{t=A.pg[J.A(u,x+j)&255]
j=k.r
s=A.pg[J.A(j.a,j.d+(v+2))&255]}}}else throw C.i(C.bH("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.f.cE(r&A.rp[q],p)
l=D.f.eb(t&A.DN[n],8-n)
if(o!==0){l=D.f.cE(l,o)|D.f.eb(s&A.DN[o],8-o)
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
s=A.pg[J.A(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=A.pg[J.A(m.a,m.d+(v+1))&255]}}else throw C.i(C.bH("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.f.eb(s&A.rp[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.f.cE(s&A.rp[r],-p)|D.f.eb(t&A.DN[q],8-q))>>>0
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
B.alQ.prototype={
aLV(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=C.bP(d,g,0),e=d.ad()
for(x=h.a,w=0;w<e;++w){v=d.ad()
u=d.ad()
t=D.U4[u]
s=D.nF[u]
r=d.Z()
if(r*s>4)q=d.Z()
else{q=d.d
d.d=q+4}p=new B.alP(v,t,r,q,f)
x.l(0,v,p)
if(v===256){o=p.mK()
o=o==null?g:o.F(0)
h.b=o==null?0:o}else if(v===257){o=p.mK()
o=o==null?g:o.F(0)
h.c=o==null?0:o}else if(v===262){n=p.mK()
m=n==null?g:n.F(0)
if(m==null)m=17
if(m<17)h.d=A.eOE[m]
else h.d=A.G5}else if(v===259){o=p.mK()
o=o==null?g:o.F(0)
h.e=o==null?0:o}else if(v===258){o=p.mK()
o=o==null?g:o.F(0)
h.f=o==null?0:o}else if(v===277){o=p.mK()
o=o==null?g:o.F(0)
h.r=o==null?0:o}else if(v===317){o=p.mK()
o=o==null?g:o.F(0)
h.Q=o==null?0:o}else if(v===339){o=p.mK()
n=o==null?g:o.F(0)
h.x=A.eP7[n==null?0:n]}else if(v===320){n=p.mK()
if(n!=null){o=J.cnM(D.K.ga5(n.qx()))
h.id=o
h.k1=0
o=o.length/3|0
h.k2=o
h.k3=o*2}}}o=h.id
l=o!=null
if(l&&h.d===A.G6)h.r=1
if(h.b===0||h.c===0)return
if(l&&h.f===8){k=o.length
for(l=o.$flags|0,w=0;w<k;++w){j=o[w]
l&2&&C.u(o)
o[w]=j>>>8}}if(h.d===A.G4)h.z=!0
h.w=h.r
if(x.aE(324)){h.ay=h.CT(322)
h.ch=h.CT(323)
h.CW=h.Si(324)
h.cx=h.Si(325)}else{h.ay=h.Sh(322,h.b)
if(!x.aE(278))h.ch=h.Sh(323,h.c)
else{i=h.CT(278)
if(i===-1)h.ch=h.c
else h.ch=i}h.CW=h.Si(273)
h.cx=h.Si(279)}o=h.b
l=h.ay
h.cy=D.f.eD(o+l-1,l)
l=h.c
o=h.ch
h.db=D.f.eD(l+o-1,o)
h.dy=h.Sh(266,1)
h.fr=h.CT(292)
h.fx=h.CT(293)
h.CT(338)
switch(h.d.a){case 0:case 1:x=h.f
if(x===1&&h.r===1)h.y=A.G3
else if(x===4&&h.r===1)h.y=A.ftA
else if(D.f.aC(x,8)===0){x=h.r
if(x===1)h.y=A.ftB
else if(x===2)h.y=A.ftC
else h.y=A.te}break
case 2:if(D.f.aC(h.f,8)===0){x=h.r
if(x===3)h.y=A.a6Z
else if(x===4)h.y=A.ftE
else h.y=A.te}break
case 3:x=!1
if(h.r===1)if(h.id!=null){x=h.f
x=x===4||x===8||x===16}if(x)h.y=A.ftD
break
case 4:if(h.f===1&&h.r===1)h.y=A.G3
break
case 6:if(h.e===7&&h.f===8&&h.r===3)h.y=A.a6Z
else{if(x.aE(530)){n=x.h(0,530).mK()
h.as=n.F(0)
x=h.at=n.hi(0,1)}else x=h.at=h.as=2
o=h.as
o===$&&C.b()
if(o*x===1)h.y=A.te
else if(h.f===8&&h.r===3)h.y=A.ftF}break
case 5:if(D.f.aC(h.f,8)===0)h.y=A.te
x=h.r
if(x===4)h.w=3
else if(x===5)h.w=4
break
default:if(D.f.aC(h.f,8)===0)h.y=A.te
break}},
bR(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.x,d=e===A.td,a0=e===A.bG
e=g.f
if(e===1)x=D.eG
else if(e===2)x=D.kz
else{if(e===4)e=D.kA
else if(d&&e===16)e=D.lD
else if(d&&e===32)e=D.mr
else if(d&&e===64)e=D.nv
else if(a0&&e===8)e=D.nw
else if(a0&&e===16)e=D.nx
else if(a0&&e===32)e=D.ny
else if(e===16)e=D.cO
else e=e===32?D.ms:D.av
x=e}w=g.id!=null&&g.d===A.G6
v=w?3:g.w
e=g.b
u=C.fR(f,f,x,0,D.bP,g.c,f,0,v,f,x,e,w)
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
g.aRI(a1,u,h,j);++h;++i}++j}return u},
aRI(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.y===A.G3){a8.aRs(b0,b1,b2,b3)
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
v=B.cbq()
try{v.atK(C.bP(b0,x,0),w.a)}catch(o){}if(a8.Q===2)for(n=0;n<a8.ch;++n){m=a8.r
u=a8.ay
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.A(u.a,u.d+l)
j=w
i=a8.r
i=J.A(j.a,j.d+(l-i))
J.bd(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=C.cd(new Uint8Array(p),!1,a9,0)
a8.agV(b0,p,w.a)}else if(u===32946)w=C.cd(D.na.zW(b0.Nh(0,0,x)),!1,a9,0)
else if(u===8)w=C.cd(D.na.zW(b0.Nh(0,0,x)),!1,a9,0)
else if(u===6){a8.b1I(new B.Vn().bR(y.D.a(b0.Nh(0,0,x))),b1,s,q,a8.ay,a8.ch)
return}else throw C.i(C.bH("Unsupported Compression Type: "+u))
h=C.c([0,0,0],y.t)
for(g=q,f=0;f<a8.ch;++f,++g)for(e=s,d=0;d<a8.ay;++d,++e){u=w
if(u.d>=u.c||e>=a8.b||g>=a8.c)break
u=a8.r
if(u===1){u=a8.x
if(u===A.td){u=a8.f
if(u===32){u=w.Z()
r=$.fy()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.BV()[0]}else if(u===64)a0=w.Yi()
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
a0=$.mD()[0]}else{u=w
a0=J.A(u.a,u.d++)}else if(r===16)if(u===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.mC()[0]}else a0=w.ad()
else if(r===32)if(u===A.bG){u=w.Z()
r=$.fy()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.jo()[0]}else a0=w.Z()
else a0=0
if(a8.d===A.G4){u=b1.a
a1=u==null?a9:u.gbq()
a0=(a1==null?0:a1)-a0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kh(e,g,a0)}}}else if(u===2){u=a8.f
if(u===8){if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a2=$.mD()[0]}else{u=w
a2=J.A(u.a,u.d++)}if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mD()[0]}else{u=w
a3=J.A(u.a,u.d++)}}else if(u===16){if(a8.x===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a2=$.mC()[0]}else a2=w.ad()
if(a8.x===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mC()[0]}else a3=w.ad()}else if(u===32){if(a8.x===A.bG){u=w.Z()
r=$.fy()
r.$flags&2&&C.u(r)
r[0]=u
a2=$.jo()[0]}else a2=w.Z()
if(a8.x===A.bG){u=w.Z()
r=$.fy()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.jo()[0]}else a3=w.Z()}else{a2=0
a3=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.dB(e,g,a2,a3,0)}}else if(u===3){u=a8.x
if(u===A.td){u=a8.f
if(u===32){u=w.Z()
r=$.fy()
r.$flags&2&&C.u(r)
r[0]=u
u=$.BV()
a4=u[0]
r[0]=w.Z()
a5=u[0]
r[0]=w.Z()
a6=u[0]}else{a5=0
a6=0
if(u===64)a4=w.Yi()
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
a4=$.mD()[0]}else{u=w
a4=J.A(u.a,u.d++)}if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mD()[0]}else{u=w
a5=J.A(u.a,u.d++)}if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mD()[0]}else{u=w
a6=J.A(u.a,u.d++)}}else if(r===16){if(u===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.mC()[0]}else a4=w.ad()
if(a8.x===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mC()[0]}else a5=w.ad()
if(a8.x===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mC()[0]}else a6=w.ad()}else if(r===32){if(u===A.bG){u=w.Z()
r=$.fy()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.jo()[0]}else a4=w.Z()
if(a8.x===A.bG){u=w.Z()
r=$.fy()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.jo()[0]}else a5=w.Z()
if(a8.x===A.bG){u=w.Z()
r=$.fy()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.jo()[0]}else a6=w.Z()}else{a4=0
a5=0
a6=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.dB(e,g,a4,a5,a6)}}}else if(u>=4)if(a8.x===A.td){u=a8.f
if(u===32){u=w.Z()
r=$.fy()
r.$flags&2&&C.u(r)
r[0]=u
u=$.BV()
a4=u[0]
r[0]=w.Z()
a5=u[0]
r[0]=w.Z()
a6=u[0]
r[0]=w.Z()
a7=u[0]}else{a5=0
a6=0
a7=0
if(u===64)a4=w.Yi()
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
a4=$.mD()[0]}else{u=w
a4=J.A(u.a,u.d++)}if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mD()[0]}else{u=w
a5=J.A(u.a,u.d++)}if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mD()[0]}else{u=w
a6=J.A(u.a,u.d++)}if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a7=$.mD()[0]}else{u=w
a7=J.A(u.a,u.d++)}if(a8.r===5)if(a8.x===A.bG){u=w
u=J.A(u.a,u.d++)
r=$.lM()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mD()[0]}else{u=w
a3=J.A(u.a,u.d++)}}else if(u===16){if(a8.x===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.mC()[0]}else a4=w.ad()
if(a8.x===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mC()[0]}else a5=w.ad()
if(a8.x===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mC()[0]}else a6=w.ad()
if(a8.x===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a7=$.mC()[0]}else a7=w.ad()
if(a8.r===5)if(a8.x===A.bG){u=w.ad()
r=$.lL()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mC()[0]}else a3=w.ad()}else if(u===32){if(a8.x===A.bG){u=w.Z()
r=$.fy()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.jo()[0]}else a4=w.Z()
if(a8.x===A.bG){u=w.Z()
r=$.fy()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.jo()[0]}else a5=w.Z()
if(a8.x===A.bG){u=w.Z()
r=$.fy()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.jo()[0]}else a6=w.Z()
if(a8.x===A.bG){u=w.Z()
r=$.fy()
r.$flags&2&&C.u(r)
r[0]=u
a7=$.jo()[0]}else a7=w.Z()
if(a8.r===5)if(a8.x===A.bG){u=w.Z()
r=$.fy()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.jo()[0]}else a3=w.Z()}else{a4=0
a5=0
a6=0
a7=0}if(a8.d===A.a7_){B.ci3(a4,a5,a6,a7,h)
a4=h[0]
a5=h[1]
a6=h[2]
a7=a3}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.ic(e,g,a4,a5,a6,a7)}}}}else throw C.i(C.bH("Unsupported bitsPerSample: "+u))},
b1I(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.cD(v,x,null)
if(u==null)u=new C.er()
e.yb(v+f,w,u)}},
aRs(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cy
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
a0.agV(a3,q,x.a)}else if(r===5){x=C.cd(new Uint8Array(a2*u),!1,a1,0)
B.cbq().atK(C.bP(a3,s,0),x.a)
if(a0.Q===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.A(a2.a,a2.d+n)
r=x
m=a0.r
m=J.A(r.a,r.d+(n-m))
J.bd(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=C.cd(new Uint8Array(a2*u),!1,a1,0)
try{B.c3p(a0.dy,a0.ay,a0.ch).blp(x,a3,0,a0.ch)}catch(l){}}else if(r===3){x=C.cd(new Uint8Array(a2*u),!1,a1,0)
try{B.c3p(a0.dy,a0.ay,a0.ch).blq(x,a3,0,a0.ch,a0.fr)}catch(l){}}else if(r===4){x=C.cd(new Uint8Array(a2*u),!1,a1,0)
try{B.c3p(a0.dy,a0.ay,a0.ch).blv(x,a3,0,a0.ch,a0.fx)}catch(l){}}else if(r===8)x=C.cd(D.na.zW(a3.Nh(0,0,s)),!1,a1,0)
else if(r===32946)x=C.cd(D.na.zW(a3.Nh(0,0,s)),!1,a1,0)
else if(r===1)x=a3
else throw C.i(C.bH("Unsupported Compression Type: "+r))
k=new B.bgZ(x)
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
agV(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.c7(f),w=0,v=0;v<e;){u=w+1
t=J.A(d.a,d.d+w)
s=$.lM()
s.$flags&2&&C.u(s)
s[0]=t
r=$.mD()[0]
if(r>=0&&r<=127)for(t=r+1,w=u,q=0;q<t;++q,v=p,w=u){p=v+1
u=w+1
x.l(f,v,J.A(d.a,d.d+w))}else{t=r<=-1&&r>=-127
w=u+1
if(t){o=J.A(d.a,d.d+u)
for(t=-r+1,q=0;q<t;++q,v=p){p=v+1
x.l(f,v,o)}}}}},
Sh(d,e){var x=this.a
if(!x.aE(d))return e
x=x.h(0,d).mK()
x=x==null?null:x.F(0)
return x==null?0:x},
CT(d){return this.Sh(d,0)},
Si(d){var x,w=this.a
if(!w.aE(d))return null
x=w.h(0,d)
w=x.mK()
w.toString
return C.zg(x.c,w.guU(w),!0,y.p)}}
B.Gq.prototype={
H(){return"TiffFormat."+this.b}}
B.je.prototype={
H(){return"TiffPhotometricType."+this.b}}
B.pw.prototype={
H(){return"TiffImageType."+this.b}}
B.bh1.prototype={
gbJ(){return this.a},
gaO(){return this.b}}
B.aW4.prototype={
atK(d,e){var x,w,v,u,t,s,r=this
r.r=e
x=J.aY(e)
r.w=0
w=y.D.a(d.a)
r.e=w
r.f=w.length
r.b=d.d
if(w[0]===0&&w[1]===1)throw C.i(C.bH("Invalid LZW Data"))
r.akl()
r.d=r.c=0
v=r.a1X()
w=r.x
u=0
for(;;){if(!(v!==257&&r.w<x))break
if(v===256){r.akl()
v=r.a1X()
r.as=0
if(v===257)break
J.bd(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.aj5(v)
t=r.as
t===$&&C.b()
s=t-1
for(;s>=0;--s)J.bd(r.r,r.w++,w[s])
r.aeu(u,w[r.as-1])}else{r.aj5(u)
t=r.as
t===$&&C.b()
s=t-1
for(;s>=0;--s)J.bd(r.r,r.w++,w[s])
J.bd(r.r,r.w++,w[r.as-1])
r.aeu(u,w[r.as-1])}u=v}v=r.a1X()}},
aeu(d,e){var x,w=this,v=w.y
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
aj5(d){var x,w,v,u,t,s,r=this
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
a1X(){var x,w,v,u,t=this,s=t.b,r=t.f
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
return D.f.eb(t.c,s)&A.eyC[w-9]},
akl(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.bL.fu(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&C.u(x)
x[w]=w}v.a=9
v.Q=258}}
B.bh_.prototype={
iN(d){var x=this,w=C.cd(d,!1,null,0)
x.c=w
w=x.a3T(w)
x.a=w
if(w!=null)x.b=B.c1l(C.cd(d,!1,null,0))
return x.a},
i2(d){var x,w,v=this.a
if(v==null)return null
v=v.f[d]
x=this.c
x===$&&C.b()
w=v.bR(x)
v=this.b
if(v!=null)w.e=v
return w},
mm(d,e){var x=this,w=C.cd(d,!1,null,0)
x.c=w
w=x.a3T(w)
x.a=w
if(w==null)return null
return x.i2(0)},
a3T(d){var x,w,v,u,t,s,r,q,p,o=null,n=C.c([],y.L),m=new B.bh1(n),l=d.ad()
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
try{r=new B.alQ(C.C(v,s),A.G5,A.a6Y,A.ftG)
r.aLV(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.Z()
if(u!==0)x.d=u}return n.length!==0?m:o}}
B.biM.prototype={
KQ(){var x,w,v=this.a,u=v.pl()
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
if(!u.aVH())return t
x=u.b
w=x.a
u.d=C.fR(t,t,D.av,0,D.bP,x.b,t,0,4,t,D.av,w,!1)
u.b0Y()
if(!u.b6w())return t
x=x.w
if(x.length!==0){v=C.cd(new C.bG(x),!1,t,0)
x=u.d
x.toString
x.e=B.c1l(v)}return u.d},
aVH(){var x,w,v,u,t=this
if(!t.KQ())return!1
t.fr=B.czr()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new B.amu(v,u,new Int32Array(2))}x=t.r
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
x=B.ceL(v.hB(x))
t.c=x
v.d+=u.d
x.eh(1)
t.c.eh(1)
t.b6F(t.x,t.fr)
t.b6v()
if(!t.b6A(v))return!1
t.b6C()
t.c.eh(1)
t.b6B()
return!0},
b6F(d,e){var x,w,v,u=this,t=u.c
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
b6v(){var x,w,v,u=this,t=u.w,s=u.c
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
b6A(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&C.b()
p=D.f.cN(1,p.eh(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.Pb(3,v)
s=w+((J.A(t.a,t.d)|J.A(t.a,t.d+1)<<8|J.A(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new B.a_V(d.yr(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=B.ceL(d.yr(q-w,d.d-d.b+w))
return w<q},
b6C(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&C.b()
x=h.eh(7)
w=i.c.eh(1)!==0?i.c.Gp(4):0
v=i.c.eh(1)!==0?i.c.Gp(4):0
u=i.c.eh(1)!==0?i.c.Gp(4):0
t=i.c.eh(1)!==0?i.c.Gp(4):0
s=i.c.eh(1)!==0?i.c.Gp(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
j=A.DA[j]
k.$flags&2&&C.u(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=A.DB[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=A.DA[k]
j.$flags&2&&C.u(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=A.DB[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=A.DA[j]
k.$flags&2&&C.u(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=A.DB[j]}},
b6B(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&C.b()
s=t.fA(A.eYw[x][w][v][u])!==0?r.c.eh(8):A.ey2[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&C.u(t)
t[u]=s}t=r.c
t===$&&C.b()
t=t.eh(1)!==0
r.fx=t
if(t)r.fy=r.c.eh(8)},
b7N(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.b6
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
b0Y(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.a6=j
x=J.iH(4,y.K)
for(j=y.d,w=0;w<4;++w)x[w]=C.c([new B.GA(),new B.GA()],j)
m.D=x
j=m.at
j.toString
x=J.iH(j,y.bt)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new B.amv(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.b6
t.toString
s=A.CS[t]
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
o=A.CS[k]
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
for(v=0;v<n;++v)x[v]=new B.ams()
m.k3=x
k=m.at
k.toString
x=J.iH(k,y._)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new B.amt(j,new Uint8Array(16))}m.b8=x
k=m.at
k.toString
m.k4=C.bm(k,l,!1,y.B)
m.b7N()
B.cyT()
m.e=new B.biN()
return!0},
b6w(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
j.b6z()
if(!n)n=j.b6D(q,s)
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
j.b8U()
u=j.b6
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&C.b()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.aUE(k))return!1
u=++j.y2}return!0},
b8U(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.y2,a5=a2.ok
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
J.rD(t,q,q+21,127)
q=w.a
t=w.d+-33
J.rD(q,t,t+9,127)
t=v.a
q=v.d+-33
J.rD(t,q,q+9,127)}t=s.b
t===$&&C.b()
if(t){m=C.bP(x,a3,-16)
l=m.Nn()
if(a5){t=a2.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.rD(q,k,k+4,t)}else m.xd(0,4,a2.k2[u+1].a)}j=l[0]
l.$flags&2&&C.u(l)
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=C.bP(x,a3,A.UJ[i])
A.eQC[t[i]].$1(h)
n.toString
q=i*16
a2.ahn(n,new C.kK(o,q,Math.min(384,384),q,!1),h)}}else{t=B.ceO(u,a4,s.c[0])
t.toString
A.f3K[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=C.bP(x,a3,A.UJ[i])
n.toString
t=i*16
a2.ahn(n,new C.kK(o,t,Math.min(384,384),t,!1),h)}}t=s.f
t===$&&C.b()
q=B.ceO(u,a4,s.d)
q.toString
A.U1[q].$1(w)
A.U1[q].$1(v)
q=Math.min(384,384)
g=new C.kK(o,256,q,256,!1)
if((t&255)!==0){k=a2.e
if((t&170)!==0){k===$&&C.b()
k.t6(g,w)
k.t6(C.bP(g,a3,16),C.bP(w,a3,4))
f=C.bP(g,a3,32)
e=C.bP(w,a3,128)
k.t6(f,e)
k.t6(C.bP(f,a3,16),C.bP(e,a3,4))}else{k===$&&C.b()
k.azK(g,w)}}d=new C.kK(o,320,q,320,!1)
t=t>>>8
if((t&255)!==0){q=a2.e
if((t&170)!==0){q===$&&C.b()
q.t6(d,v)
q.t6(C.bP(d,a3,16),C.bP(v,a3,4))
t=C.bP(d,a3,32)
k=C.bP(v,a3,128)
q.t6(t,k)
q.t6(C.bP(t,a3,16),C.bP(k,a3,4))}else{q===$&&C.b()
q.azK(d,v)}}t=a2.ax
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
ahn(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&C.b()
x.Bp(e,f,!1)
break
case 2:this.e===$&&C.b()
w=J.A(e.a,e.d)+4
v=D.f.iI(D.f.R(J.A(e.a,e.d+4)*35468,16),32)
u=D.f.iI(D.f.R(J.A(e.a,e.d+4)*85627,16),32)
t=D.f.iI(D.f.R(J.A(e.a,e.d+1)*35468,16),32)
s=D.f.iI(D.f.R(J.A(e.a,e.d+1)*85627,16),32)
B.biP(f,0,w+u,s,t)
B.biP(f,1,w+v,s,t)
B.biP(f,2,w-v,s,t)
B.biP(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&C.b()
x.No(e,f)
break
default:break}},
aSQ(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
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
x.acJ(w,k,u+4)}if(j.c){x=m.e
x===$&&C.b()
k.toString
x.aEr(w,k,u)}if(e>0){x=m.e
x===$&&C.b()
k.toString
x.acK(w,k,u+4)}if(j.c){j=m.e
j===$&&C.b()
k.toString
j.aEs(w,k,u)}}else{t=m.R8
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
x.bo_(w,k,u,v,p)
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
j.byk(w,k,u,v,p)
t.toString
x=4*t
o=C.bP(r,l,x)
n=C.bP(q,l,x)
j.Cu(o,t,1,8,u,v,p)
j.Cu(n,t,1,8,u,v,p)}}},
aUg(){var x,w=this,v=w.ay
v===$&&C.b()
x=v
for(;;){v=w.CW
v.toString
if(!(x<v))break
w.aSQ(x,w.y2);++x}},
aUE(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b6
e.toString
x=A.CS[e]
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
if(d)g.aUg()
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
if(g.a6!=null&&o<n){m=g.xr=g.aRK(o,n-o)
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
g.b86(o-l,m-h,n-o)}if(e){e=g.p1
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
b86(d,e,f){if(e<=0||f<=0)return!1
this.aTw(d,e,f)
this.aTv(d,e,f)
return!0},
a0w(d){var x
if((d&-4194304)>>>0===0)x=D.f.R(d,14)
else x=d<0?0:255
return x},
TJ(d,e,f,g){var x=19077*d
g.l(0,0,this.a0w(x+26149*f+-3644112))
g.l(0,1,this.a0w(x-6419*e-13320*f+2229552))
g.l(0,2,this.a0w(x+33050*e+-4527440))},
Tm(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new B.biZ(),a0=b3-1,a1=D.f.R(a0,1),a2=d.$2(J.A(a7.a,a7.d),J.A(a8.a,a8.d)),a3=d.$2(J.A(a9.a,a9.d),J.A(b0.a,b0.d)),a4=D.f.R(3*a2+a3+131074,2)
f.TJ(J.A(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.l(0,3,255)
x=a6!=null
if(x){a4=D.f.R(3*a3+a2+131074,2)
w=J.A(a6.a,a6.d)
b2.toString
f.TJ(w,a4&255,a4>>>16,b2)
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
f.TJ(w,a4&255,a4>>>16,n)
n.l(0,3,255)
if(x){a4=D.f.R(3*a3+a2+131074,2)
a0=J.A(a6.a,a6.d+a0)
b2.toString
o=C.bP(b2,e,o)
f.TJ(a0,a4&255,a4>>>16,o)
o.l(0,3,255)}}},
aTv(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
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
q=q==null?null:q.cD(s,u,null);(q==null?new C.er():q).sao(r)}x.d=x.d+o.a}},
aTw(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=C.cd(J.cl(l.d.ga5(0),0,null),!1,k,d*j.a*4),h=l.to
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
if(d===0){l.Tm(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&C.b()
l.Tm(j,x,r,q,w,v,C.bP(i,k,-s),i,e)
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
l.Tm(C.bP(x,k,-n),x,r,q,w,v,C.bP(i,k,h),i,e)}j=x.d
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
l.ry.xd(0,t,v);--p}else if((u&1)===0)l.Tm(x,k,w,v,w,v,C.bP(i,k,s),k,e)
return p},
aRK(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.ab=new Uint8Array(n)
x=o.a6
w=new B.bju(x,m,l)
v=x.bw()
u=w.d=v&3
w.e=D.f.R(v,2)&3
w.f=D.f.R(v,4)&3
w.r=D.f.R(v,6)&3
if(w.gcU())if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new B.amJ(A.tj,C.c([],y.J))
t.a=m
t.b=l
n=C.c([],y.A)
u=C.c([],y.F)
s=new Uint32Array(2)
r=new B.amq(x,s)
s=r.d=J.cl(D.bL.ga5(s),0,null)
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
u=new B.af9(r,t,n,u)
u.db=m
w.x=u
u.HI(m,l,!0)
n=w.x
x=n.ax
if(x.length===1&&x[0].a===A.a7I&&n.b1q()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.cx=0
x=D.f.aC(p,4)
x=new Uint8Array(p+(4-x))
n.CW=x
n.ch=J.lO(D.K.ga5(x),0,null)}else{w.y=!1
w.x.aeD()}}else w.r=1
o.a2=w}n=o.a2
n===$&&C.b()
if(!n.w){x=o.ab
x===$&&C.b()
if(!n.KO(d,e,x))return null}n=o.ab
n===$&&C.b()
return C.cd(n,!1,null,d*m)},
b6D(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&C.b()
x=a1.dy[a3]
a3=a1.b8
a3===$&&C.b()
w=a3[a1.y1]
v=C.cd(w.a,!1,null,0)
a3=a1.k3
a3===$&&C.b()
u=a3[0]
v.bs7(0,v.c-v.d,0)
a3=w.b
a3===$&&C.b()
if(!a3){t=C.cd(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.a1R(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.beI(t,v)
else{q=D.f.R(J.A(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.bd(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.a1R(a5,o,i+(m&1),x.a,n,v)
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
for(g=0;g<2;++g){r=a1.a1R(a5,a2[2],i+(m&1),x.c,0,v)
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
beI(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
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
aVL(d,e){var x,w,v,u,t,s
if(d.fA(e[3])===0)x=d.fA(e[4])===0?2:3+d.fA(e[5])
else if(d.fA(e[6])===0)x=d.fA(e[7])===0?5+d.fA(159):7+2*d.fA(165)+d.fA(145)
else{w=d.fA(e[8])
v=2*w+d.fA(e[9+w])
u=A.eJ7[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.fA(u[s])
x+=3+D.f.cN(8,v)}return x},
a1R(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.fA(p[0])===0)return h
while(d.fA(p[1])===0){++h
p=e[A.Uv[h]].a[0]
if(h===16)return 16}x=h+1
w=e[A.Uv[x]].a
if(d.fA(p[2])===0){p=w[1]
v=1}else{v=this.aVL(d,p)
p=w[2]}u=A.ePG[h]
t=d.b
t===$&&C.b()
s=d.af2(D.f.R(t,1))
t=d.b
r=A.Ul[t]
d.b=A.Uk[t]
t=d.d
t===$&&C.b()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.bd(i.a,i.d+u,t*q)}return 16},
b6z(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.b8
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
r=A.ePU[l[j]][w]
q=A.Uc[o.c.fA(r[0])]
while(q>0)q=A.Uc[2*q+o.c.fA(r[q])]
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
B.a_V.prototype={
eh(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.f.cE(this.fA(128),w))>>>0
return x},
Gp(d){var x=this.eh(d)
return this.eh(1)===1?-x:x},
fA(d){var x,w=this,v=w.b
v===$&&C.b()
x=w.af2(D.f.R(v*d,8))
if(w.b<=126)w.bbZ()
return x},
af2(d){var x,w,v,u,t,s=this,r=s.d
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
bbZ(){var x,w=this,v=w.b
v===$&&C.b()
x=A.Ul[v]
w.b=A.Uk[v]
v=w.d
v===$&&C.b()
w.d=v-x}}
B.biN.prototype={
acK(d,e,f){var x,w=C.bP(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.ald(w,e,f))this.Qm(w,e)}},
acJ(d,e,f){var x,w=C.bP(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.ald(w,1,f))this.Qm(w,1)}},
aEs(d,e,f){var x,w,v=C.bP(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.acK(v,e,f)}},
aEr(d,e,f){var x,w=C.bP(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.acJ(w,e,f)}},
byk(d,e,f,g,h){var x,w,v=C.bP(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.Cu(v,e,1,16,f,g,h)}},
bo_(d,e,f,g,h){var x,w=C.bP(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.Cu(w,1,e,16,f,g,h)}},
Cv(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.bP(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.ale(h,e,a0,a1))if(this.ak5(h,e,a2))this.Qm(h,e)
else{s=J.A(h.a,h.d+x)
r=J.A(h.a,h.d+w)
q=J.A(h.a,h.d+v)
p=J.A(h.a,h.d)
o=J.A(h.a,h.d+e)
n=J.A(h.a,h.d+u)
m=$.c_x()
l=m[1020+3*(p-q)+m[1020+r-o]]
m=D.f.R(27*l+63,7)
k=(m&2147483647)-((m&2147483648)>>>0)
m=D.f.R(18*l+63,7)
j=(m&2147483647)-((m&2147483648)>>>0)
m=D.f.R(9*l+63,7)
i=(m&2147483647)-((m&2147483648)>>>0)
m=$.nz()[255+s+i]
J.bd(h.a,h.d+x,m)
m=$.nz()[255+r+j]
J.bd(h.a,h.d+w,m)
m=$.nz()[255+q+k]
J.bd(h.a,h.d+v,m)
m=$.nz()[255+p-k]
J.bd(h.a,h.d,m)
m=$.nz()[255+o-j]
J.bd(h.a,h.d+e,m)
m=$.nz()[255+n-i]
J.bd(h.a,h.d+u,m)}h.d+=f}},
Cu(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=C.bP(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.ale(k,e,h,i))if(this.ak5(k,e,j))this.Qm(k,e)
else{u=J.A(k.a,k.d+x)
t=J.A(k.a,k.d+w)
s=J.A(k.a,k.d)
r=J.A(k.a,k.d+e)
q=3*(s-t)
p=$.c_y()
o=D.f.R(q+4,3)
n=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.f.R(q+3,3)
m=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.f.R(n+1,1)
l=(o&2147483647)-((o&2147483648)>>>0)
o=$.nz()[255+u+l]
J.bd(k.a,k.d+x,o)
o=$.nz()[255+t+m]
J.bd(k.a,k.d+w,o)
o=$.nz()[255+s-n]
J.bd(k.a,k.d,o)
o=$.nz()[255+r-l]
J.bd(k.a,k.d+e,o)}k.d+=f}},
Qm(d,e){var x=J.A(d.a,d.d+-2*e),w=-e,v=J.A(d.a,d.d+w),u=J.A(d.a,d.d),t=J.A(d.a,d.d+e),s=3*(u-v)+$.c_x()[1020+x-t],r=$.c_y(),q=r[112+D.f.iI(D.f.R(s+4,3),32)],p=r[112+D.f.iI(D.f.R(s+3,3),32)]
d.l(0,w,$.nz()[255+v+p])
d.l(0,0,$.nz()[255+u-q])},
ak5(d,e,f){var x=J.A(d.a,d.d+-2*e),w=J.A(d.a,d.d+-e),v=J.A(d.a,d.d),u=J.A(d.a,d.d+e),t=$.aBu()
return t[255+x-w]>f||t[255+u-v]>f},
ald(d,e,f){var x=J.A(d.a,d.d+-2*e),w=J.A(d.a,d.d+-e),v=J.A(d.a,d.d),u=J.A(d.a,d.d+e)
return 2*$.aBu()[255+w-v]+$.c_w()[255+x-u]<=f},
ale(d,e,f,g){var x=J.A(d.a,d.d+-4*e),w=J.A(d.a,d.d+-3*e),v=J.A(d.a,d.d+-2*e),u=J.A(d.a,d.d+-e),t=J.A(d.a,d.d),s=J.A(d.a,d.d+e),r=J.A(d.a,d.d+2*e),q=J.A(d.a,d.d+3*e),p=$.aBu(),o=255+v
if(2*p[255+u-t]+$.c_w()[o-s]>f)return!1
return p[255+x-w]<=g&&p[255+w-v]<=g&&p[o-u]<=g&&p[255+q-r]<=g&&p[255+r-s]<=g&&p[255+s-t]<=g},
t6(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
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
B.AY(e,l,0,0,t+n)
B.AY(e,l,1,0,s+o)
B.AY(e,l,2,0,s-o)
B.AY(e,l,3,0,t-n);++w
l+=32}},
Bp(d,e,f){this.t6(d,e)
if(f)this.t6(C.bP(d,null,16),C.bP(e,null,4))},
No(d,e){var x,w,v=J.A(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)B.AY(e,0,w,x,v)},
azK(d,e){var x=this,w=null
if(J.A(d.a,d.d)!==0)x.No(d,e)
if(J.A(d.a,d.d+16)!==0)x.No(C.bP(d,w,16),C.bP(e,w,4))
if(J.A(d.a,d.d+32)!==0)x.No(C.bP(d,w,32),C.bP(e,w,128))
if(J.A(d.a,d.d+48)!==0)x.No(C.bP(d,w,48),C.bP(e,w,132))}}
B.biS.prototype={
P_(d){return this.c.$1$context(d)}}
B.biW.prototype={}
B.biY.prototype={}
B.a_U.prototype={}
B.biX.prototype={}
B.biO.prototype={}
B.GA.prototype={}
B.ams.prototype={}
B.amu.prototype={}
B.amt.prototype={}
B.amv.prototype={}
B.a_W.prototype={
KQ(){var x,w=this.b
if(w.hg(8)!==47)return!1
x=this.c
x.f=A.yE
x.a=w.hg(14)+1
x.b=w.hg(14)+1
x.d=w.hg(1)!==0
if(w.hg(3)!==0)return!1
return!0},
oK(){var x,w,v,u,t,s=this,r=null
s.e=0
if(!s.KQ())return r
x=s.c
s.HI(x.a,x.b,!0)
s.aeD()
w=x.a
s.d=C.fR(r,r,D.av,0,D.bP,x.b,r,0,4,r,D.av,w,!1)
w=s.ch
w.toString
v=x.a
u=x.b
if(!s.a0W(w,v,u,u,s.gb7W()))return r
x=x.w
if(x.length!==0){t=C.cd(new C.bG(x),!1,r,0)
x=s.d
x.toString
x.e=B.c1l(t)}return s.d},
aeD(){var x,w=this,v=w.c,u=v.a
v=u*v.b+u
x=new Uint32Array(v+u*16)
w.ch=x
w.CW=J.cl(D.bL.ga5(x),0,null)
w.cx=v
return!0},
b8L(d){var x,w,v,u=this,t=u.b,s=t.hg(2),r=u.ay,q=D.f.cN(1,s)
if((r&q)>>>0!==0)return!1
u.ay=(r|q)>>>0
x=new B.amr(A.a7H)
u.ax.push(x)
r=A.f0S[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.hg(3)+2
x.e=t
x.d=u.HI(B.AZ(x.b,t),B.AZ(x.c,x.e),!1)
break
case 3:w=t.hg(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=B.AZ(x.b,v)
x.e=v
x.d=u.HI(w,1,!1)
u.aTY(w,x)
break
case 2:break}return!0},
HI(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.hg(1)!==0;){t=C.c([u,v],w)
if(!p.b8L(t))throw C.i(C.bH("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.hg(1)!==0){s=x.hg(4)
if(!(s>=1&&s<=11))throw C.i(C.bH("Invalid Color Cache"))}else s=0
if(!p.b8y(u,v,s,f))throw C.i(C.bH("Invalid Huffman Codes"))
if(s>0){x=D.f.cN(1,s)
p.r=x
p.w=new B.biT(new Uint32Array(x),32-s)}else p.r=0
x=p.c
x.a=u
x.b=v
r=p.y
p.z=B.AZ(u,r)
p.x=r===0?4294967295:D.f.cN(1,r)-1
if(f){p.e=0
return null}q=new Uint32Array(u*v)
if(!p.a0W(q,u,v,v,null))throw C.i(C.bH("Failed to decode image data."))
p.e=0
return q},
a0W(a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=a0.e,a2=D.f.eD(a1,a9),a3=D.f.aC(a1,a9),a4=a0.aiK(a3,a2),a5=a0.e,a6=a9*b0,a7=a9*b1
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
if((a3&v)>>>0===0){p=a0.Ig(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(u.a>=32)u.zr()
r=a4.a
o=r[0].xv(u)
n=0
if(o<256){m=r[1].xv(u)
if(u.a>=32)u.zr()
l=C.cja(r[2].xv(u),o,m,r[3].xv(u))
a1&2&&C.u(a8)
a8[a5]=l;++a5;++a3
if(a3>=a9){++a2
if(D.f.aC(a2,16)===0&&t)b2.$1(a2)
if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.f.eb(j*506832829>>>0,r)
k&2&&C.u(q)
q[i]=j;++s}a3=n}}else if(o<280){h=a0.QO(o-256)
g=r[4].xv(u)
if(u.a>=32)u.zr()
f=a0.am6(a9,a0.QO(g))
if(a5<f||a6-a5<h)return!1
else{e=a5-f
for(d=0;d<h;++d){r=a8[e+d]
a1&2&&C.u(a8)
a8[a5+d]=r}a5+=h}a3+=h
while(a3>=a9){a3-=a9;++a2
if(D.f.aC(a2,16)===0&&t)b2.$1(a2)}if(a5<a7){if((a3&v)>>>0!==0){p=a0.Ig(a0.Q,a0.z,a0.y,a3,a2)
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
b1q(){var x,w,v,u
if(this.r>0)return!1
for(x=this.as,w=this.at,v=0;v<x;++v){u=w[v].a
if(u[1].f>1)return!1
if(u[2].f>1)return!1
if(u[3].f>1)return!1}return!0},
aU4(d){var x,w,v,u,t,s,r=this,q=r.f,p=d-q
if(p<=0)return
x=r.c
r.aeN(p,x.a*q)
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
aRo(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=o.e,m=D.f.eD(n,d),l=D.f.aC(n,d),k=o.aiK(l,m),j=o.e,i=d*e,h=d*f,g=o.x
n=o.b
for(;;){x=n.b
if(!(!(x.d>=x.c&&n.a>=64)&&j<h))break
if((l&g)>>>0===0){w=o.Ig(o.Q,o.z,o.y,l,m)
k=o.at[w]}if(n.a>=32)n.zr()
x=k.a
v=x[0].xv(n)
if(v<256){x=o.CW
x===$&&C.b()
x.$flags&2&&C.u(x)
x[j]=v;++j;++l
if(l>=d){++m
if(D.f.aC(m,16)===0)o.a1u(m)
l=0}}else if(v<280){u=o.QO(v-256)
t=x[4].xv(n)
if(n.a>=32)n.zr()
s=o.am6(d,o.QO(t))
if(j>=s&&i-j>=u)for(x=o.CW,r=0;r<u;++r){x===$&&C.b()
q=j+r
p=x[q-s]
x.$flags&2&&C.u(x)
x[q]=p}else{o.e=j
return!0}j+=u
l+=u
while(l>=d){l-=d;++m
if(D.f.aC(m,16)===0)o.a1u(m)}if(j<h&&(l&g)>>>0!==0){w=o.Ig(o.Q,o.z,o.y,l,m)
k=o.at[w]}}else return!1}o.a1u(m)
o.e=j
return!0},
a1u(d){var x,w,v,u=this,t=u.f,s=d-t,r=u.CW
r===$&&C.b()
x=C.cd(r,!1,null,u.c.a*t)
if(s>0){w=u.f
t=u.cy
t.toString
r=u.db
r.toString
v=C.cd(t,!1,null,r*w)
u.ax[0].biN(w,w+s,x,v)}u.f=d},
b7X(d){var x,w,v,u,t,s=this,r=s.c,q=r.a,p=s.f,o=d-p
if(o<=0)return
s.aeN(o,q*p)
q=s.cx
q.toString
x=s.f
w=q
v=0
for(;v<o;++v,++x)for(u=0;u<r.a;++u,++w){t=s.ch[w]
q=s.d.a
if(q!=null)q.ic(u,x,t>>>16&255,t>>>8&255,t&255,t>>>24&255)}s.f=d},
aeN(d,e){var x,w,v,u=this,t=u.ax,s=t.length,r=u.c.a,q=u.f,p=q+d,o=u.cx
o.toString
x=u.ch
x.toString
D.bL.cB(x,o,o+r*d,x,e)
for(w=e;v=s-1,s>0;w=o,s=v){r=t[v]
x=u.ch
x.toString
r.bqa(q,p,x,w,x,o)}},
b8y(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=1
if(g&&l.b.hg(1)!==0){x=l.b.hg(3)+2
w=B.AZ(d,x)
v=B.AZ(e,x)
u=w*v
t=l.HI(w,v,!1)
l.y=x
for(s=0;s<u;++s){r=t[s]>>>8&65535
t.$flags&2&&C.u(t)
t[s]=r
if(r>=k)k=r+1}}else t=null
q=J.iH(k,y.f)
for(p=0;p<k;++p)q[p]=B.csr()
for(o=f>0,s=0;s<k;++s)for(n=0;n<5;++n){m=A.eN5[n]
if(n===0&&o)m+=D.f.cN(1,f)
if(!l.b8w(m,q[s].a[n]))return!1}l.Q=t
l.as=k
l.at=q
return!0},
b8w(d,e){var x,w,v,u,t,s,r,q,p,o=this.b
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
u[1]=x}s=e.bi4(u,v,w,d,t)}else{r=new Int32Array(19)
q=o.hg(4)+4
if(q>19)return!1
u=new Int32Array(d)
for(p=0;p<q;++p)r[A.ePa[p]]=o.hg(3)
s=this.b8x(r,d,u)
if(s)s=e.asa(u,d)}return s},
b8x(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=B.caq()
if(!j.asa(d,19))return!1
x=this.b
if(x.hg(1)!==0){w=2+x.hg(2+2*x.hg(3))
if(w>e)return!1}else w=e
for(v=f.$flags|0,u=0,t=8;u<e;w=s){s=w-1
if(w===0)break
if(x.a>=32)x.zr()
r=j.xv(x)
if(r<16){q=u+1
v&2&&C.u(f)
f[u]=r
if(r!==0)t=r
u=q}else{p=r-16
o=A.emr[p]
n=A.es3[p]
m=x.hg(o)+n
if(u+m>e)return!1
else{l=r===16?t:0
for(;k=m-1,m>0;m=k,u=q){q=u+1
v&2&&C.u(f)
f[u]=l}}}}return!0},
QO(d){var x
if(d<4)return d+1
x=D.f.R(d-2,1)
return D.f.cN(2+(d&1),x)+this.b.hg(x)+1},
am6(d,e){var x,w
if(e>120)return e-120
else{x=A.eNl[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
aTY(d,e){var x,w,v,u,t,s,r=D.f.cN(1,D.f.fG(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.cl(D.bL.ga5(p),0,null)
w=J.cl(D.bL.ga5(q),0,null)
q[0]=e.d[0]
v=4*d
for(p=w.$flags|0,u=4;u<v;++u){t=x[u]
s=w[u-4]
p&2&&C.u(w)
w[u]=t+s&255}for(v=4*r;u<v;++u){p&2&&C.u(w)
w[u]=0}e.d=q
return!0},
Ig(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.f.R(h,f)+D.f.R(g,f)]},
aiK(d,e){var x=this,w=x.Ig(x.Q,x.z,x.y,d,e)
return x.at[w]}}
B.af9.prototype={
bni(d){return this.aU4(d)}}
B.amq.prototype={
ayp(){var x,w,v=this.a
if(v<32){x=this.c
w=D.f.eb(x[0],v)+((x[1]&A.DO[v])>>>0)*(A.DO[32-v]+1)}else{x=this.c
w=v===32?x[1]:D.f.eb(x[1],v-32)}return w},
hg(d){var x,w=this,v=w.b
if(!(v.d>=v.c&&w.a>=64)&&d<25){v=w.ayp()
x=A.DO[d]
w.a+=d
w.zr()
return(v&x)>>>0}else throw C.i(C.bH("Not enough data in input."))},
zr(){var x,w,v,u=this,t=u.b,s=u.c,r=s.$flags|0,q=t.c
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
B.GB.prototype={
H(){return"VP8LImageTransformType."+this.b}}
B.amr.prototype={
bqa(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.bh7(h,i,i+(e-d)*s)
break
case 0:t.buW(d,e,h,i)
if(e!==t.c){x=i-s
D.bL.cB(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.biO(d,e,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*B.AZ(s,t.e)
u=i+w*s-v
D.bL.cB(h,u,u+v,f,i)
t.asL(d,e,f,u,h,i)}else t.asL(d,e,f,g,h,i)
break}},
biN(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.f.fG(8,r),p=this.b,o=this.d
if(q<8){x=D.f.cN(1,r)-1
w=D.f.cN(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.A(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.bd(g.a,g.d,r>>>8&255);++g.d
u=D.f.R(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.A(f.a,f.d);++f.d
r=o[s]
J.bd(g.a,g.d,r>>>8&255);++g.d}},
asL(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.f.fG(8,p),n=this.b,m=this.d
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
biO(a2,a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b,e=g.e,d=D.f.cN(1,e)-1,a0=B.AZ(f,e),a1=D.f.R(a2,g.e)*a0
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
p=$.mD()
n=p[0]
o[0]=q
m=p[0]
l=$.aBx()
l.$flags&2&&C.u(l)
l[0]=n*m
k=$.c_C()
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
buW(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=this,n=o.b
if(d===0){B.biU(f,g,4278190080)
for(x=1;x<n;++x){w=g+x
B.biU(f,w,f[w-1])}g+=n;++d}w=o.e
v=D.f.cN(1,w)-1
u=B.AZ(n,w)
t=D.f.R(d,o.e)*u
for(s=d;s<e;){B.biU(f,g,f[g-n])
r=t+1
q=$.ceN[o.d[t]>>>8&15]
for(x=1;x<n;++x){if((x&v)>>>0===0){p=r+1
q=$.ceN[o.d[r]>>>8&15]
r=p}w=g+x
B.biU(f,w,q.$3(f,f[w-1],w-n))}g+=n;++s
if((s&v)>>>0===0)t+=u}},
bh7(d,e,f){var x,w,v,u
for(x=d.$flags|0;e<f;e=u){w=d[e]
v=w>>>8&255
u=e+1
x&2&&C.u(d)
d[e]=(w&4278255360|(w&16711935)+(v<<16|v)&16711935)>>>0}}}
B.bju.prototype={
gcU(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
KO(d,e,f){var x,w,v,u,t,s,r=this
if(!r.gcU())return!1
x=A.f3T[r.e]
if(r.d===0){w=r.b
v=d*w
u=r.a
D.K.cB(f,v,e*w,u.a,u.d-u.b+v)}else{w=d+e
u=r.x
u===$&&C.b()
u.cy=f
t=u.c
if(r.y)w=u.aRo(t.a,t.b,w)
else{s=u.ch
s.toString
u=u.a0W(s,t.a,t.b,w,u.gbnh())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,d,e,f)}if(r.f===1)if(!r.aSc(f,r.b,r.c,d,e))return!1
if(d+e===r.c)r.w=!0
return!0},
aSc(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
B.a00.prototype={
aLY(d,e){var x=this,w=d.bw()
x.r=0
x.f=(w&1)!==0
x.w=d.d-d.b
x.x=e-16}}
B.afa.prototype={}
B.aep.prototype={
a5z(d){var x,w=this
if(d===0)return!1
x=(d<<1>>>0)-1
w.e=x
x=new Int32Array(x<<1>>>0)
w.d=x
x[1]=-1
w.f=1
D.K.fu(w.a,0,128,255)
return!0},
asa(d,e){var x,w,v,u,t,s=this
for(x=0,w=0,v=0;v<e;++v)if(d[v]>0){++x
w=v}if(!s.a5z(x))return!1
if(x===1){if(w<0||w>=e)return!1
return s.a_V(w,0,0)}u=new Int32Array(e)
if(!s.b0M(d,e,u))return!1
for(v=0;v<e;++v){t=d[v]
if(t>0)if(!s.a_V(v,u[v],t))return!1}return s.f===s.e},
bi4(d,e,f,g,h){var x,w,v,u=this
if(!u.a5z(h))return!1
for(x=0;x<h;++x){w=e[x]
if(w!==-1){v=f[x]
if(v>=g)return u.f===u.e
if(!u.a_V(v,w,d[x]))return u.f===u.e}}return u.f===u.e},
xv(d){var x,w,v=this,u=d.ayp(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}x=v.c[s]
t+=7
u=u>>>7
do{w=v.d
w===$&&C.b()
x=x+w[(x<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.ali(x))
d.a=t
return v.d[x<<1>>>0]},
a_V(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
if(f<=7){x=l.anl(e,f)
for(w=D.f.cE(1,7-f),v=l.b,u=v.$flags|0,t=l.a,s=t.$flags|0,r=0;r<w;++r){q=(x|D.f.cE(r,f))>>>0
u&2&&C.u(v)
v[q]=d
s&2&&C.u(t)
t[q]=f}}else x=l.anl(D.f.j7(e,f-7),7)
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
w[x]=o}}if(l.b3t(o))l.b3u(o,0)
else if(l.ali(o))return!1
w=l.d
w===$&&C.b()
w.$flags&2&&C.u(w)
w[o<<1>>>0]=d
return!0},
anl(d,e){return D.f.eb((A.UK[d&15]<<4|A.UK[D.f.R(d,4)])>>>0,8-e)},
b3u(d,e){var x=this.d
x===$&&C.b()
x.$flags&2&&C.u(x)
x[(d<<1>>>0)+1]=e},
ali(d){var x=this.d
x===$&&C.b()
return x[(d<<1>>>0)+1]!==0},
b3t(d){var x=this.d
x===$&&C.b()
return x[(d<<1>>>0)+1]<0},
b0M(d,e,f){var x,w,v,u,t,s,r,q,p=new Int32Array(16),o=new Int32Array(16)
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
B.UJ.prototype={
h(d,e){return this.a[e]}}
B.Og.prototype={
H(){return"WebPFormat."+this.b}}
B.amJ.prototype={
gbJ(){return this.a},
gaO(){return this.b}}
B.afb.prototype={}
B.bjv.prototype={
F5(d){var x=C.cd(d,!1,null,0)
this.b=x
if(!this.aiH(x))return!1
return!0},
iN(d){var x,w=this,v=null,u=C.cd(d,!1,v,0)
w.b=u
if(!w.aiH(u))return v
u=new B.afb(A.tj,C.c([],y.J))
w.a=u
x=w.b
x.toString
if(!w.ar_(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!B.c3C(x,u).KQ())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!B.c3A(x,u).KQ())return v
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
return t.agT(s.yr(x,w),d)}w=x.f
if(w===A.yE){u=s.yr(x.ch,x.ay)
s=t.a
s.toString
return B.c3C(u,s).oK()}else if(w===A.Gr){u=s.yr(x.ch,x.ay)
s=t.a
s.toString
return B.c3A(u,s).oK()}return null},
mm(d,e){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.iN(d)==null)return o
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
q=q==null?o:q.gc5()
if(q==null)q=D.av
v=C.fR(o,o,q,t.y,D.bP,x,o,0,r,o,D.av,s,!1)
w=v}else{w=C.vz(w,!1,!1)
x=e.f
x===$&&C.b()
if(x){x=w.a
if(x!=null)x.l9(0,o)}}C.c57(w,t,D.zu,o,o,e.a,e.b,o,o,o,o)
v.l4(w)}return v},
agT(d,e){var x,w,v,u=null,t=C.c([],y.J),s=new B.afb(A.tj,t)
if(!this.ar_(d,s))return u
if(s.f===A.tj)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.x
t===$&&C.b()
x=w.w
x===$&&C.b()
return this.agT(d.yr(t,x),e)}else{v=d.yr(s.ch,s.ay)
t=s.f
if(t===A.yE)return B.c3C(v,s).oK()
else if(t===A.Gr)return B.c3A(v,s).oK()}return u},
aiH(d){if(d.hh(4)!=="RIFF")return!1
d.Z()
if(d.hh(4)!=="WEBP")return!1
return!0},
ar_(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=d.c,w=d.b;d.d<x;){v=d.hh(4)
u=d.Z()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.aWj(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=A.Gr
break
case"VP8L":e.ay=r
e.ch=u
e.f=A.yE
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.av(s)
o=p.gu(s)
p=p.gu(s)
s=new C.kK(s,0,Math.min(o,p),0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=A.fAd
n=d.Z()
s=new Uint8Array(4)
s[0]=n>>>8&255
s[1]=n>>>16&255
s[2]=n>>>24&255
s[3]=n&255
d.ad()
break
case"ANMF":if(!this.aVh(d,e,u))return!1
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
return e.f!==A.tj},
aWj(d,e){var x,w,v,u,t=d.bw()
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
aVh(d,e,f){var x=new B.afa(d.pl()*2,d.pl()*2,d.pl()+1,d.pl()+1,d.pl())
x.aLY(d,f)
if(x.r!==0)return!1
e.z.push(x)
return!0}}
B.agX.prototype={
b_(d){var x,w,v=this
if(v.a===v.c.length)v.aTX()
x=v.c
w=v.a++
x.$flags&2&&C.u(x)
x[w]=d&255},
jP(d){var x,w,v,u,t=this,s=J.aY(d)
while(x=t.a,w=x+s,v=t.c,u=v.length,w>u)t.ahR(w-u)
D.K.dC(v,x,w,d)
t.a+=s},
iK(d){var x=this
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
byQ(d){var x,w=this,v=new Float32Array(1)
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
byR(d){var x,w=this,v=new Float64Array(1)
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
ahR(d){var x,w,v,u
if(d!=null)x=d
else{w=this.c.length
x=w===0?8192:w*2}w=this.c
v=w.length
u=new Uint8Array(v+x)
D.K.dC(u,0,v,w)
this.c=u},
aTX(){return this.ahR(null)},
gu(d){return this.a}}
var z=a.updateTypes(["~(kK)","v(os,v,v)","~(z9,w<v>)","~(v,v,v,v,v,dZ)","~(v)","z9(v)"])
B.aFm.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.fC(x.ch.kN(d),x.ch.kM(d),x.ch.kL(d),x.ch.m0(d))}else w.fC(d,e,f,g)
w.q();++u.a}},
$S:1224}
B.aOM.prototype={
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
$S:1225}
B.aUP.prototype={
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
B.b1u.prototype={
$1(d){return d!==""},
$S:12}
B.biZ.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:123};(function installTearOffs(){var x=a._instance_2u,w=a._static_1,v=a._instance_1u,u=a.installStaticTearOff
var t
x(t=B.afo.prototype,"gaRq","aRr",2)
x(t,"gaRt","aRu",2)
x(t,"gaRv","aRw",2)
x(t,"gaRk","aRl",2)
x(t,"gaRm","aRn",2)
w(B,"cJu","cyZ",0)
w(B,"cJn","cyR",0)
w(B,"cJl","cyP",0)
w(B,"cJs","cyX",0)
w(B,"cJt","cyY",0)
w(B,"cJr","cyW",0)
w(B,"cJq","cyV",0)
w(B,"cJp","cyU",0)
w(B,"cJw","cz0",0)
w(B,"cJv","cz_",0)
w(B,"cJo","cyS",0)
w(B,"cJm","cyQ",0)
w(B,"cJH","czb",0)
w(B,"cJF","cz9",0)
w(B,"cJx","cz1",0)
w(B,"cJz","cz3",0)
w(B,"cJy","cz2",0)
w(B,"cJA","cz4",0)
w(B,"cJI","czc",0)
w(B,"cJG","cza",0)
w(B,"cJB","cz5",0)
w(B,"cJC","cz6",0)
w(B,"cJD","cz7",0)
w(B,"cJE","cz8",0)
v(B.a_W.prototype,"gb7W","b7X",4)
v(B.af9.prototype,"gbnh","bni",4)
u(B,"c5K",3,null,["$3"],["czd"],1,0)
u(B,"cJJ",3,null,["$3"],["cze"],1,0)
u(B,"cJO",3,null,["$3"],["czj"],1,0)
u(B,"cJP",3,null,["$3"],["czk"],1,0)
u(B,"cJQ",3,null,["$3"],["czl"],1,0)
u(B,"cJR",3,null,["$3"],["czm"],1,0)
u(B,"cJS",3,null,["$3"],["czn"],1,0)
u(B,"cJT",3,null,["$3"],["czo"],1,0)
u(B,"cJU",3,null,["$3"],["czp"],1,0)
u(B,"cJV",3,null,["$3"],["czq"],1,0)
u(B,"cJK",3,null,["$3"],["czf"],1,0)
u(B,"cJL",3,null,["$3"],["czg"],1,0)
u(B,"cJM",3,null,["$3"],["czh"],1,0)
u(B,"cJN",3,null,["$3"],["czi"],1,0)
u(B,"cJY",6,null,["$6"],["czC"],3,0)
u(B,"cJZ",6,null,["$6"],["czD"],3,0)
u(B,"cJX",6,null,["$6"],["czB"],3,0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(C.hy,[B.kA,B.K7,B.Df,B.qi,B.Kq,B.zF,B.qS,B.mq,B.Gq,B.je,B.pw,B.GB,B.Og])
x(C.D,[B.aFn,B.Cj,B.aK4,B.adc,B.aOK,B.add,B.ade,B.adf,B.U8,B.atn,B.UD,B.UE,B.adY,B.aTF,B.aeH,B.abs,B.DI,B.aUL,B.z9,B.aUN,B.Pa,B.afn,B.aUR,B.aUS,B.afo,B.tQ,B.M5,B.b3a,B.M4,B.b3c,B.ai7,B.aia,B.aih,B.Xy,B.M8,B.aig,B.pj,B.alO,B.bgZ,B.alP,B.bh0,B.alQ,B.bh1,B.aW4,B.biM,B.a_V,B.biN,B.biS,B.biW,B.biY,B.a_U,B.biX,B.biO,B.GA,B.ams,B.amu,B.amt,B.amv,B.a_W,B.amq,B.biT,B.amr,B.bju,B.a00,B.aep,B.UJ,B.amJ,B.agX])
x(C.ac4,[B.aaq,B.aOL,B.aRI,B.aTE,B.Vn,B.b1t,B.b3b,B.b3m,B.bgP,B.bh_,B.bjv])
x(C.cC,[B.aFm,B.aOM,B.aUP,B.b1u])
w(B.aKu,B.aaq)
w(B.aUs,B.aOK)
x(B.aUs,[B.af1,B.aUt,B.aUu,B.aUv,B.af3])
w(B.af2,B.U8)
w(B.af4,B.UE)
w(B.aTD,B.Cj)
x(B.DI,[B.DJ,B.US])
w(B.EZ,B.aK4)
x(B.tQ,[B.ai5,B.ai6,B.ai8,B.ai9,B.aic,B.aid])
x(B.M5,[B.Xu,B.aib])
x(B.aih,[B.wd,B.kQ])
w(B.biZ,C.dI)
w(B.af9,B.a_W)
w(B.afa,B.a00)
w(B.afb,B.amJ)})()
C.d1(b.typeUniverse,JSON.parse('{"af2":{"U8":[]},"af4":{"UE":[]},"DJ":{"DI":[]},"US":{"DI":[]},"ai5":{"tQ":[]},"ai6":{"tQ":[]},"ai8":{"tQ":[]},"ai9":{"tQ":[]},"aic":{"tQ":[]},"aid":{"tQ":[]},"Xu":{"M5":[]},"aib":{"M5":[]},"afa":{"a00":[]}}'))
C.Qq(b.typeUniverse,JSON.parse('{"aih":1}'))
var y=(function rtii(){var x=C.O
return{n:x("adc"),W:x("ade"),f:x("UJ"),x:x("aep"),Y:x("aeH"),P:x("mX"),u:x("k9"),k:x("DS"),E:x("y<abs>"),Q:x("y<add>"),m:x("y<U8>"),b:x("y<UE>"),A:x("y<UJ>"),g:x("y<w<w<w<v>>>>"),o:x("y<w<w<v>>>"),S:x("y<w<v>>"),X:x("y<M4>"),v:x("y<tQ>"),l:x("y<aia>"),s:x("y<f>"),L:x("y<alQ>"),d:x("y<GA>"),F:x("y<amr>"),J:x("y<a00>"),G:x("y<Pa>"),t:x("y<v>"),T:x("y<DI?>"),a:x("y<afn?>"),w:x("y<os?>"),y:x("y<~(kK)>"),c:x("z9"),H:x("w<DS>"),z:x("w<a_U>"),K:x("w<GA>"),e:x("M4"),h:x("ai7"),C:x("Xu"),O:x("M5"),M:x("Xy"),i:x("M8"),N:x("f"),j:x("alP"),R:x("os"),D:x("dZ"),V:x("a_U"),q:x("ams"),_:x("amt"),bt:x("amv"),U:x("al<f>"),bc:x("atn"),p:x("v"),r:x("af0?"),bT:x("w<DI?>?"),ac:x("dZ?"),ak:x("a_V?"),B:x("GA?"),Z:x("amu?"),I:x("v?")}})();(function constants(){var x=a.makeConstList
A.Hn=new B.kA(0,"none")
A.zv=new B.kA(3,"bitfields")
A.zw=new B.kA(6,"alphaBitfields")
A.dYg=new B.Df(0,"red")
A.dYh=new B.Df(1,"green")
A.dYi=new B.Df(2,"blue")
A.dYj=new B.Df(3,"alpha")
A.dYk=new B.Df(4,"other")
A.ME=new B.K7(0,"uint")
A.C4=new B.K7(1,"half")
A.C5=new B.K7(2,"float")
A.MF=new B.qi(0,"none")
A.dYY=new C.adK(1,"page")
A.N7=new B.Kq(2,"cur")
A.CS=x([0,2,8],y.t)
A.e3N=x([0,4,2,1],y.t)
A.dZ3=new B.Kq(0,"invalid")
A.dZ4=new B.Kq(1,"ico")
A.e3Q=x([A.dZ3,A.dZ4,A.N7],C.O("y<Kq>"))
A.SE=x([292,260,226,226],y.t)
A.emr=x([2,3,7],y.t)
A.SI=x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68],y.t)
A.es3=x([3,3,11],y.t)
A.DL=x([128,128,128,128,128,128,128,128,128,128,128],y.t)
A.TP=x([A.DL,A.DL,A.DL],y.S)
A.eJ1=x([253,136,254,255,228,219,128,128,128,128,128],y.t)
A.eNX=x([189,129,242,255,227,213,255,219,128,128,128],y.t)
A.eO3=x([106,126,227,252,214,209,255,255,128,128,128],y.t)
A.eR0=x([A.eJ1,A.eNX,A.eO3],y.S)
A.eRT=x([1,98,248,255,236,226,255,255,128,128,128],y.t)
A.ewx=x([181,133,238,254,221,234,255,154,128,128,128],y.t)
A.es9=x([78,134,202,247,198,180,255,219,128,128,128],y.t)
A.eVy=x([A.eRT,A.ewx,A.es9],y.S)
A.eFG=x([1,185,249,255,243,255,128,128,128,128,128],y.t)
A.eR5=x([184,150,247,255,236,224,128,128,128,128,128],y.t)
A.f0P=x([77,110,216,255,236,230,128,128,128,128,128],y.t)
A.eQf=x([A.eFG,A.eR5,A.f0P],y.S)
A.eQr=x([1,101,251,255,241,255,128,128,128,128,128],y.t)
A.eJ_=x([170,139,241,252,236,209,255,255,128,128,128],y.t)
A.eQB=x([37,116,196,243,228,255,255,255,128,128,128],y.t)
A.eC5=x([A.eQr,A.eJ_,A.eQB],y.S)
A.eOx=x([1,204,254,255,245,255,128,128,128,128,128],y.t)
A.f4c=x([207,160,250,255,238,128,128,128,128,128,128],y.t)
A.f3W=x([102,103,231,255,211,171,128,128,128,128,128],y.t)
A.eMI=x([A.eOx,A.f4c,A.f3W],y.S)
A.ezP=x([1,152,252,255,240,255,128,128,128,128,128],y.t)
A.f4C=x([177,135,243,255,234,225,128,128,128,128,128],y.t)
A.eQ0=x([80,129,211,255,194,224,128,128,128,128,128],y.t)
A.eR_=x([A.ezP,A.f4C,A.eQ0],y.S)
A.TV=x([1,1,255,128,128,128,128,128,128,128,128],y.t)
A.eTX=x([246,1,255,128,128,128,128,128,128,128,128],y.t)
A.ePr=x([255,128,128,128,128,128,128,128,128,128,128],y.t)
A.f6e=x([A.TV,A.eTX,A.ePr],y.S)
A.eMv=x([A.TP,A.eR0,A.eVy,A.eQf,A.eC5,A.eMI,A.eR_,A.f6e],y.o)
A.f10=x([198,35,237,223,193,187,162,160,145,155,62],y.t)
A.eJ0=x([131,45,198,221,172,176,220,157,252,221,1],y.t)
A.f0Z=x([68,47,146,208,149,167,221,162,255,223,128],y.t)
A.eOU=x([A.f10,A.eJ0,A.f0Z],y.S)
A.eVO=x([1,149,241,255,221,224,255,255,128,128,128],y.t)
A.eXB=x([184,141,234,253,222,220,255,199,128,128,128],y.t)
A.ePj=x([81,99,181,242,176,190,249,202,255,255,128],y.t)
A.f_0=x([A.eVO,A.eXB,A.ePj],y.S)
A.eYv=x([1,129,232,253,214,197,242,196,255,255,128],y.t)
A.f3E=x([99,121,210,250,201,198,255,202,128,128,128],y.t)
A.eR1=x([23,91,163,242,170,187,247,210,255,255,128],y.t)
A.ePx=x([A.eYv,A.f3E,A.eR1],y.S)
A.eNi=x([1,200,246,255,234,255,128,128,128,128,128],y.t)
A.eYn=x([109,178,241,255,231,245,255,255,128,128,128],y.t)
A.emo=x([44,130,201,253,205,192,255,255,128,128,128],y.t)
A.f_Q=x([A.eNi,A.eYn,A.emo],y.S)
A.ey0=x([1,132,239,251,219,209,255,165,128,128,128],y.t)
A.e3S=x([94,136,225,251,218,190,255,255,128,128,128],y.t)
A.eYV=x([22,100,174,245,186,161,255,199,128,128,128],y.t)
A.eQo=x([A.ey0,A.e3S,A.eYV],y.S)
A.eXA=x([1,182,249,255,232,235,128,128,128,128,128],y.t)
A.eQQ=x([124,143,241,255,227,234,128,128,128,128,128],y.t)
A.eNS=x([35,77,181,251,193,211,255,205,128,128,128],y.t)
A.eO8=x([A.eXA,A.eQQ,A.eNS],y.S)
A.f6f=x([1,157,247,255,236,231,255,255,128,128,128],y.t)
A.eMn=x([121,141,235,255,225,227,255,255,128,128,128],y.t)
A.eYt=x([45,99,188,251,195,217,255,224,128,128,128],y.t)
A.eA6=x([A.f6f,A.eMn,A.eYt],y.S)
A.e3T=x([1,1,251,255,213,255,128,128,128,128,128],y.t)
A.emx=x([203,1,248,255,255,128,128,128,128,128,128],y.t)
A.eXJ=x([137,1,177,255,224,255,128,128,128,128,128],y.t)
A.ezZ=x([A.e3T,A.emx,A.eXJ],y.S)
A.eX4=x([A.eOU,A.f_0,A.ePx,A.f_Q,A.eQo,A.eO8,A.eA6,A.ezZ],y.o)
A.eMV=x([253,9,248,251,207,208,255,192,128,128,128],y.t)
A.eTY=x([175,13,224,243,193,185,249,198,255,255,128],y.t)
A.f6b=x([73,17,171,221,161,179,236,167,255,234,128],y.t)
A.eSq=x([A.eMV,A.eTY,A.f6b],y.S)
A.eWn=x([1,95,247,253,212,183,255,255,128,128,128],y.t)
A.ePI=x([239,90,244,250,211,209,255,255,128,128,128],y.t)
A.f0O=x([155,77,195,248,188,195,255,255,128,128,128],y.t)
A.eXz=x([A.eWn,A.ePI,A.f0O],y.S)
A.eOA=x([1,24,239,251,218,219,255,205,128,128,128],y.t)
A.eUV=x([201,51,219,255,196,186,128,128,128,128,128],y.t)
A.ePH=x([69,46,190,239,201,218,255,228,128,128,128],y.t)
A.eWd=x([A.eOA,A.eUV,A.ePH],y.S)
A.eO_=x([1,191,251,255,255,128,128,128,128,128,128],y.t)
A.eQA=x([223,165,249,255,213,255,128,128,128,128,128],y.t)
A.eRd=x([141,124,248,255,255,128,128,128,128,128,128],y.t)
A.eYu=x([A.eO_,A.eQA,A.eRd],y.S)
A.eP0=x([1,16,248,255,255,128,128,128,128,128,128],y.t)
A.eMl=x([190,36,230,255,236,255,128,128,128,128,128],y.t)
A.eJ3=x([149,1,255,128,128,128,128,128,128,128,128],y.t)
A.ey1=x([A.eP0,A.eMl,A.eJ3],y.S)
A.eR3=x([1,226,255,128,128,128,128,128,128,128,128],y.t)
A.eTd=x([247,192,255,128,128,128,128,128,128,128,128],y.t)
A.f0H=x([240,128,255,128,128,128,128,128,128,128,128],y.t)
A.erZ=x([A.eR3,A.eTd,A.f0H],y.S)
A.f_P=x([1,134,252,255,255,128,128,128,128,128,128],y.t)
A.eQO=x([213,62,250,255,255,128,128,128,128,128,128],y.t)
A.f4j=x([55,93,255,128,128,128,128,128,128,128,128],y.t)
A.eR2=x([A.f_P,A.eQO,A.f4j],y.S)
A.eFx=x([A.eSq,A.eXz,A.eWd,A.eYu,A.ey1,A.erZ,A.eR2,A.TP],y.o)
A.eQR=x([202,24,213,235,186,191,220,160,240,175,255],y.t)
A.eIY=x([126,38,182,232,169,184,228,174,255,187,128],y.t)
A.ey3=x([61,46,138,219,151,178,240,170,255,216,128],y.t)
A.eXb=x([A.eQR,A.eIY,A.ey3],y.S)
A.eQ_=x([1,112,230,250,199,191,247,159,255,255,128],y.t)
A.eA5=x([166,109,228,252,211,215,255,174,128,128,128],y.t)
A.eQv=x([39,77,162,232,172,180,245,178,255,255,128],y.t)
A.eX6=x([A.eQ_,A.eA5,A.eQv],y.S)
A.eQ9=x([1,52,220,246,198,199,249,220,255,255,128],y.t)
A.eMF=x([124,74,191,243,183,193,250,221,255,255,128],y.t)
A.eNR=x([24,71,130,219,154,170,243,182,255,255,128],y.t)
A.eX5=x([A.eQ9,A.eMF,A.eNR],y.S)
A.eNP=x([1,182,225,249,219,240,255,224,128,128,128],y.t)
A.f4f=x([149,150,226,252,216,205,255,171,128,128,128],y.t)
A.f6r=x([28,108,170,242,183,194,254,223,255,255,128],y.t)
A.f1H=x([A.eNP,A.f4f,A.f6r],y.S)
A.f6w=x([1,81,230,252,204,203,255,192,128,128,128],y.t)
A.eYf=x([123,102,209,247,188,196,255,233,128,128,128],y.t)
A.f0d=x([20,95,153,243,164,173,255,203,128,128,128],y.t)
A.eYk=x([A.f6w,A.eYf,A.f0d],y.S)
A.ePd=x([1,222,248,255,216,213,128,128,128,128,128],y.t)
A.eQN=x([168,175,246,252,235,205,255,255,128,128,128],y.t)
A.eNW=x([47,116,215,255,211,212,255,255,128,128,128],y.t)
A.eMb=x([A.ePd,A.eQN,A.eNW],y.S)
A.eP8=x([1,121,236,253,212,214,255,255,128,128,128],y.t)
A.eQa=x([141,84,213,252,201,202,255,219,128,128,128],y.t)
A.eSh=x([42,80,160,240,162,185,255,205,128,128,128],y.t)
A.eOe=x([A.eP8,A.eQa,A.eSh],y.S)
A.f51=x([244,1,255,128,128,128,128,128,128,128,128],y.t)
A.e3O=x([238,1,255,128,128,128,128,128,128,128,128],y.t)
A.eTg=x([A.TV,A.f51,A.e3O],y.S)
A.efV=x([A.eXb,A.eX6,A.eX5,A.f1H,A.eYk,A.eMb,A.eOe,A.eTg],y.o)
A.ey2=x([A.eMv,A.eX4,A.eFx,A.efV],y.g)
A.eyC=x([511,1023,2047,4095],y.t)
A.eJ5=x([8,8,4,2],y.t)
A.efs=x([173,148,140],y.t)
A.efw=x([176,155,140,135],y.t)
A.eef=x([180,157,141,134,130],y.t)
A.emv=x([254,254,243,230,196,177,153,140,133,130,129],y.t)
A.eJ7=x([A.efs,A.efw,A.eef,A.emv],y.S)
A.eMz=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095],y.t)
A.eN5=x([280,256,256,256,40],y.t)
A.TW=x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390],y.t)
A.DA=x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],y.t)
A.eNl=x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],y.t)
A.DB=x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],y.t)
A.eNG=x([A.ME,A.C4,A.C5],C.O("y<K7>"))
A.U1=x([B.cJB(),B.cJt(),B.cJI(),B.cJG(),B.cJD(),B.cJC(),B.cJE()],y.y)
A.G4=new B.je(0,"whiteIsZero")
A.ftH=new B.je(1,"blackIsZero")
A.ftO=new B.je(2,"rgb")
A.G6=new B.je(3,"palette")
A.ftP=new B.je(4,"transparencyMask")
A.a7_=new B.je(5,"cmyk")
A.ftQ=new B.je(6,"yCbCr")
A.ftR=new B.je(7,"reserved7")
A.ftS=new B.je(8,"cieLab")
A.ftT=new B.je(9,"iccLab")
A.ftI=new B.je(10,"ituLab")
A.ftJ=new B.je(11,"logL")
A.ftK=new B.je(12,"logLuv")
A.ftL=new B.je(13,"colorFilterArray")
A.ftM=new B.je(14,"linearRaw")
A.ftN=new B.je(15,"depth")
A.G5=new B.je(16,"unknown")
A.eOE=x([A.G4,A.ftH,A.ftO,A.G6,A.ftP,A.a7_,A.ftQ,A.ftR,A.ftS,A.ftT,A.ftI,A.ftJ,A.ftK,A.ftL,A.ftM,A.ftN,A.G5],C.O("y<je>"))
A.ftz=new B.Gq(0,"invalid")
A.a6Y=new B.Gq(1,"uint")
A.bG=new B.Gq(2,"int")
A.td=new B.Gq(3,"float")
A.eP7=x([A.ftz,A.a6Y,A.bG,A.td],C.O("y<Gq>"))
A.ePa=x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],y.t)
A.Uc=x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],y.t)
A.ePG=x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],y.t)
A.dYl=new B.qi(1,"rle")
A.dYm=new B.qi(2,"zips")
A.dYn=new B.qi(3,"zip")
A.dYo=new B.qi(4,"piz")
A.dYp=new B.qi(5,"pxr24")
A.dYq=new B.qi(6,"b44")
A.dYr=new B.qi(7,"b44a")
A.ePJ=x([A.MF,A.dYl,A.dYm,A.dYn,A.dYo,A.dYp,A.dYq,A.dYr],C.O("y<qi>"))
A.eS8=x([231,120,48,89,115,113,120,152,112],y.t)
A.efW=x([152,179,64,126,170,118,46,70,95],y.t)
A.ePF=x([175,69,143,80,85,82,72,155,103],y.t)
A.exS=x([56,58,10,171,218,189,17,13,152],y.t)
A.eQs=x([114,26,17,163,44,195,21,10,173],y.t)
A.eQL=x([121,24,80,195,26,62,44,64,85],y.t)
A.eQm=x([144,71,10,38,171,213,144,34,26],y.t)
A.eZq=x([170,46,55,19,136,160,33,206,71],y.t)
A.eNn=x([63,20,8,114,114,208,12,9,226],y.t)
A.eOy=x([81,40,11,96,182,84,29,16,36],y.t)
A.e3V=x([A.eS8,A.efW,A.ePF,A.exS,A.eQs,A.eQL,A.eQm,A.eZq,A.eNn,A.eOy],y.S)
A.eMk=x([134,183,89,137,98,101,106,165,148],y.t)
A.eY_=x([72,187,100,130,157,111,32,75,80],y.t)
A.eQY=x([66,102,167,99,74,62,40,234,128],y.t)
A.erY=x([41,53,9,178,241,141,26,8,107],y.t)
A.eOl=x([74,43,26,146,73,166,49,23,157],y.t)
A.eNC=x([65,38,105,160,51,52,31,115,128],y.t)
A.eNJ=x([104,79,12,27,217,255,87,17,7],y.t)
A.ePD=x([87,68,71,44,114,51,15,186,23],y.t)
A.eX9=x([47,41,14,110,182,183,21,17,194],y.t)
A.eTW=x([66,45,25,102,197,189,23,18,22],y.t)
A.f0k=x([A.eMk,A.eY_,A.eQY,A.erY,A.eOl,A.eNC,A.eNJ,A.ePD,A.eX9,A.eTW],y.S)
A.eRY=x([88,88,147,150,42,46,45,196,205],y.t)
A.eQw=x([43,97,183,117,85,38,35,179,61],y.t)
A.eNV=x([39,53,200,87,26,21,43,232,171],y.t)
A.ePo=x([56,34,51,104,114,102,29,93,77],y.t)
A.eQi=x([39,28,85,171,58,165,90,98,64],y.t)
A.eNv=x([34,22,116,206,23,34,43,166,73],y.t)
A.e3W=x([107,54,32,26,51,1,81,43,31],y.t)
A.eZB=x([68,25,106,22,64,171,36,225,114],y.t)
A.eMj=x([34,19,21,102,132,188,16,76,124],y.t)
A.f16=x([62,18,78,95,85,57,50,48,51],y.t)
A.eMP=x([A.eRY,A.eQw,A.eNV,A.ePo,A.eQi,A.eNv,A.e3W,A.eZB,A.eMj,A.f16],y.S)
A.eQc=x([193,101,35,159,215,111,89,46,111],y.t)
A.eFw=x([60,148,31,172,219,228,21,18,111],y.t)
A.ey_=x([112,113,77,85,179,255,38,120,114],y.t)
A.f12=x([40,42,1,196,245,209,10,25,109],y.t)
A.eP5=x([88,43,29,140,166,213,37,43,154],y.t)
A.eNy=x([61,63,30,155,67,45,68,1,209],y.t)
A.eO2=x([100,80,8,43,154,1,51,26,71],y.t)
A.es1=x([142,78,78,16,255,128,34,197,171],y.t)
A.ePX=x([41,40,5,102,211,183,4,1,221],y.t)
A.eN1=x([51,50,17,168,209,192,23,25,82],y.t)
A.eML=x([A.eQc,A.eFw,A.ey_,A.f12,A.eP5,A.eNy,A.eO2,A.es1,A.ePX,A.eN1],y.S)
A.eNQ=x([138,31,36,171,27,166,38,44,229],y.t)
A.eMG=x([67,87,58,169,82,115,26,59,179],y.t)
A.eVw=x([63,59,90,180,59,166,93,73,154],y.t)
A.f_T=x([40,40,21,116,143,209,34,39,175],y.t)
A.es6=x([47,15,16,183,34,223,49,45,183],y.t)
A.eHg=x([46,17,33,183,6,98,15,32,183],y.t)
A.f6y=x([57,46,22,24,128,1,54,17,37],y.t)
A.eO6=x([65,32,73,115,28,128,23,128,205],y.t)
A.eQX=x([40,3,9,115,51,192,18,6,223],y.t)
A.eOi=x([87,37,9,115,59,77,64,21,47],y.t)
A.ePW=x([A.eNQ,A.eMG,A.eVw,A.f_T,A.es6,A.eHg,A.f6y,A.eO6,A.eQX,A.eOi],y.S)
A.f4Z=x([104,55,44,218,9,54,53,130,226],y.t)
A.eA4=x([64,90,70,205,40,41,23,26,57],y.t)
A.eVs=x([54,57,112,184,5,41,38,166,213],y.t)
A.eNx=x([30,34,26,133,152,116,10,32,134],y.t)
A.eSr=x([39,19,53,221,26,114,32,73,255],y.t)
A.eN_=x([31,9,65,234,2,15,1,118,73],y.t)
A.ePT=x([75,32,12,51,192,255,160,43,51],y.t)
A.eNB=x([88,31,35,67,102,85,55,186,85],y.t)
A.eOI=x([56,21,23,111,59,205,45,37,192],y.t)
A.eOQ=x([55,38,70,124,73,102,1,34,98],y.t)
A.f5F=x([A.f4Z,A.eA4,A.eVs,A.eNx,A.eSr,A.eN_,A.ePT,A.eNB,A.eOI,A.eOQ],y.S)
A.eOH=x([125,98,42,88,104,85,117,175,82],y.t)
A.eNF=x([95,84,53,89,128,100,113,101,45],y.t)
A.eQD=x([75,79,123,47,51,128,81,171,1],y.t)
A.eA1=x([57,17,5,71,102,57,53,41,49],y.t)
A.eUK=x([38,33,13,121,57,73,26,1,85],y.t)
A.f4e=x([41,10,67,138,77,110,90,47,114],y.t)
A.ePK=x([115,21,2,10,102,255,166,23,6],y.t)
A.eMm=x([101,29,16,10,85,128,101,196,26],y.t)
A.eNZ=x([57,18,10,102,102,213,34,20,43],y.t)
A.eP2=x([117,20,15,36,163,128,68,1,26],y.t)
A.ePA=x([A.eOH,A.eNF,A.eQD,A.eA1,A.eUK,A.f4e,A.ePK,A.eMm,A.eNZ,A.eP2],y.S)
A.eOf=x([102,61,71,37,34,53,31,243,192],y.t)
A.f3N=x([69,60,71,38,73,119,28,222,37],y.t)
A.eOj=x([68,45,128,34,1,47,11,245,171],y.t)
A.ecK=x([62,17,19,70,146,85,55,62,70],y.t)
A.f6l=x([37,43,37,154,100,163,85,160,1],y.t)
A.f1K=x([63,9,92,136,28,64,32,201,85],y.t)
A.eY4=x([75,15,9,9,64,255,184,119,16],y.t)
A.eMC=x([86,6,28,5,64,255,25,248,1],y.t)
A.eTi=x([56,8,17,132,137,255,55,116,128],y.t)
A.eyX=x([58,15,20,82,135,57,26,121,40],y.t)
A.eQl=x([A.eOf,A.f3N,A.eOj,A.ecK,A.f6l,A.f1K,A.eY4,A.eMC,A.eTi,A.eyX],y.S)
A.eQH=x([164,50,31,137,154,133,25,35,218],y.t)
A.eMB=x([51,103,44,131,131,123,31,6,158],y.t)
A.f1F=x([86,40,64,135,148,224,45,183,128],y.t)
A.ePE=x([22,26,17,131,240,154,14,1,209],y.t)
A.eFE=x([45,16,21,91,64,222,7,1,197],y.t)
A.f_U=x([56,21,39,155,60,138,23,102,213],y.t)
A.f5t=x([83,12,13,54,192,255,68,47,28],y.t)
A.eQZ=x([85,26,85,85,128,128,32,146,171],y.t)
A.ePs=x([18,11,7,63,144,171,4,4,246],y.t)
A.eMQ=x([35,27,10,146,174,171,12,26,128],y.t)
A.ePe=x([A.eQH,A.eMB,A.f1F,A.ePE,A.eFE,A.f_U,A.f5t,A.eQZ,A.ePs,A.eMQ],y.S)
A.eX3=x([190,80,35,99,180,80,126,54,45],y.t)
A.eZp=x([85,126,47,87,176,51,41,20,32],y.t)
A.eUW=x([101,75,128,139,118,146,116,128,85],y.t)
A.eXW=x([56,41,15,176,236,85,37,9,62],y.t)
A.ezO=x([71,30,17,119,118,255,17,18,138],y.t)
A.eQk=x([101,38,60,138,55,70,43,26,142],y.t)
A.ePl=x([146,36,19,30,171,255,97,27,20],y.t)
A.eRV=x([138,45,61,62,219,1,81,188,64],y.t)
A.f13=x([32,41,20,117,151,142,20,21,163],y.t)
A.eZx=x([112,19,12,61,195,128,48,4,24],y.t)
A.eWc=x([A.eX3,A.eZp,A.eUW,A.eXW,A.ezO,A.eQk,A.ePl,A.eRV,A.f13,A.eZx],y.S)
A.ePU=x([A.e3V,A.f0k,A.eMP,A.eML,A.ePW,A.f5F,A.ePA,A.eQl,A.ePe,A.eWc],y.o)
A.yu=new B.mq(0,"none")
A.mM=new B.mq(1,"palette")
A.a6V=new B.mq(2,"rgb")
A.ftr=new B.mq(3,"gray")
A.fts=new B.mq(4,"reserved4")
A.ftt=new B.mq(5,"reserved5")
A.ftu=new B.mq(6,"reserved6")
A.ftv=new B.mq(7,"reserved7")
A.ftw=new B.mq(8,"reserved8")
A.mN=new B.mq(9,"paletteRle")
A.a6U=new B.mq(10,"rgbRle")
A.ftq=new B.mq(11,"grayRle")
A.eQ1=x([A.yu,A.mM,A.a6V,A.ftr,A.fts,A.ftt,A.ftu,A.ftv,A.ftw,A.mN,A.a6U,A.ftq],C.O("y<mq>"))
A.eQC=x([B.cJl(),B.cJs(),B.cJu(),B.cJn(),B.cJq(),B.cJw(),B.cJp(),B.cJv(),B.cJm(),B.cJo()],y.y)
A.Du=x([8,0,8,0],y.t)
A.eA3=x([5,3,5,3],y.t)
A.es4=x([3,5,3,5],y.t)
A.OE=x([0,8,0,8],y.t)
A.Tw=x([4,4,4,4],y.t)
A.exX=x([4,4,0,0],y.t)
A.Uh=x([A.Du,A.eA3,A.es4,A.OE,A.Du,A.Tw,A.exX,A.OE],y.S)
A.Ui=x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41],y.t)
A.x0=x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845],y.t)
A.Uk=x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127],y.t)
A.Ul=x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],y.t)
A.x1=x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567],y.t)
A.Um=x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232],y.t)
A.Uv=x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],y.t)
A.rp=x([0,1,3,7,15,31,63,127,255],y.t)
A.eL=x([255,255,255,255,255,255,255,255,255,255,255],y.t)
A.pf=x([A.eL,A.eL,A.eL],y.S)
A.ePn=x([176,246,255,255,255,255,255,255,255,255,255],y.t)
A.f4B=x([223,241,252,255,255,255,255,255,255,255,255],y.t)
A.eM8=x([249,253,253,255,255,255,255,255,255,255,255],y.t)
A.ePR=x([A.ePn,A.f4B,A.eM8],y.S)
A.eOD=x([255,244,252,255,255,255,255,255,255,255,255],y.t)
A.eOb=x([234,254,254,255,255,255,255,255,255,255,255],y.t)
A.UE=x([253,255,255,255,255,255,255,255,255,255,255],y.t)
A.eMy=x([A.eOD,A.eOb,A.UE],y.S)
A.f1d=x([255,246,254,255,255,255,255,255,255,255,255],y.t)
A.eT2=x([239,253,254,255,255,255,255,255,255,255,255],y.t)
A.Ux=x([254,255,254,255,255,255,255,255,255,255,255],y.t)
A.eY1=x([A.f1d,A.eT2,A.Ux],y.S)
A.U3=x([255,248,254,255,255,255,255,255,255,255,255],y.t)
A.eNf=x([251,255,254,255,255,255,255,255,255,255,255],y.t)
A.eQK=x([A.U3,A.eNf,A.eL],y.S)
A.Df=x([255,253,254,255,255,255,255,255,255,255,255],y.t)
A.eQF=x([251,254,254,255,255,255,255,255,255,255,255],y.t)
A.eNs=x([A.Df,A.eQF,A.Ux],y.S)
A.exQ=x([255,254,253,255,254,255,255,255,255,255,255],y.t)
A.eOw=x([250,255,254,255,254,255,255,255,255,255,255],y.t)
A.x4=x([254,255,255,255,255,255,255,255,255,255,255],y.t)
A.eP6=x([A.exQ,A.eOw,A.x4],y.S)
A.eNY=x([A.pf,A.ePR,A.eMy,A.eY1,A.eQK,A.eNs,A.eP6,A.pf],y.o)
A.efT=x([217,255,255,255,255,255,255,255,255,255,255],y.t)
A.ePi=x([225,252,241,253,255,255,254,255,255,255,255],y.t)
A.eVj=x([234,250,241,250,253,255,253,254,255,255,255],y.t)
A.eZz=x([A.efT,A.ePi,A.eVj],y.S)
A.DQ=x([255,254,255,255,255,255,255,255,255,255,255],y.t)
A.eMc=x([223,254,254,255,255,255,255,255,255,255,255],y.t)
A.eFF=x([238,253,254,254,255,255,255,255,255,255,255],y.t)
A.eSk=x([A.DQ,A.eMc,A.eFF],y.S)
A.eOh=x([249,254,255,255,255,255,255,255,255,255,255],y.t)
A.f15=x([A.U3,A.eOh,A.eL],y.S)
A.eZN=x([255,253,255,255,255,255,255,255,255,255,255],y.t)
A.eQE=x([247,254,255,255,255,255,255,255,255,255,255],y.t)
A.eQp=x([A.eZN,A.eQE,A.eL],y.S)
A.eCf=x([252,255,255,255,255,255,255,255,255,255,255],y.t)
A.es_=x([A.Df,A.eCf,A.eL],y.S)
A.UF=x([255,254,254,255,255,255,255,255,255,255,255],y.t)
A.eFC=x([A.UF,A.UE,A.eL],y.S)
A.eSg=x([255,254,253,255,255,255,255,255,255,255,255],y.t)
A.U7=x([250,255,255,255,255,255,255,255,255,255,255],y.t)
A.eCd=x([A.eSg,A.U7,A.x4],y.S)
A.exT=x([A.eZz,A.eSk,A.f15,A.eQp,A.es_,A.eFC,A.eCd,A.pf],y.o)
A.eWe=x([186,251,250,255,255,255,255,255,255,255,255],y.t)
A.eN4=x([234,251,244,254,255,255,255,255,255,255,255],y.t)
A.eY3=x([251,251,243,253,254,255,254,255,255,255,255],y.t)
A.eNp=x([A.eWe,A.eN4,A.eY3],y.S)
A.eNh=x([236,253,254,255,255,255,255,255,255,255,255],y.t)
A.eSf=x([251,253,253,254,254,255,255,255,255,255,255],y.t)
A.eOT=x([A.Df,A.eNh,A.eSf],y.S)
A.eX0=x([254,254,254,255,255,255,255,255,255,255,255],y.t)
A.eNb=x([A.UF,A.eX0,A.eL],y.S)
A.eYm=x([254,254,255,255,255,255,255,255,255,255,255],y.t)
A.eNg=x([A.DQ,A.eYm,A.x4],y.S)
A.UG=x([A.eL,A.x4,A.eL],y.S)
A.exR=x([A.eNp,A.eOT,A.eNb,A.eNg,A.UG,A.pf,A.pf,A.pf],y.o)
A.eOu=x([248,255,255,255,255,255,255,255,255,255,255],y.t)
A.eNE=x([250,254,252,254,255,255,255,255,255,255,255],y.t)
A.eN0=x([248,254,249,253,255,255,255,255,255,255,255],y.t)
A.eOX=x([A.eOu,A.eNE,A.eN0],y.S)
A.euF=x([255,253,253,255,255,255,255,255,255,255,255],y.t)
A.f_J=x([246,253,253,255,255,255,255,255,255,255,255],y.t)
A.eNr=x([252,254,251,254,254,255,255,255,255,255,255],y.t)
A.f_I=x([A.euF,A.f_J,A.eNr],y.S)
A.f6g=x([255,254,252,255,255,255,255,255,255,255,255],y.t)
A.eMY=x([248,254,253,255,255,255,255,255,255,255,255],y.t)
A.eCc=x([253,255,254,254,255,255,255,255,255,255,255],y.t)
A.eQT=x([A.f6g,A.eMY,A.eCc],y.S)
A.f5r=x([255,251,254,255,255,255,255,255,255,255,255],y.t)
A.eQd=x([245,251,254,255,255,255,255,255,255,255,255],y.t)
A.eQj=x([253,253,254,255,255,255,255,255,255,255,255],y.t)
A.eKU=x([A.f5r,A.eQd,A.eQj],y.S)
A.eM6=x([255,251,253,255,255,255,255,255,255,255,255],y.t)
A.eOG=x([252,253,254,255,255,255,255,255,255,255,255],y.t)
A.eXh=x([A.eM6,A.eOG,A.DQ],y.S)
A.eC7=x([255,252,255,255,255,255,255,255,255,255,255],y.t)
A.f4H=x([249,255,254,255,255,255,255,255,255,255,255],y.t)
A.eNN=x([255,255,254,255,255,255,255,255,255,255,255],y.t)
A.ecJ=x([A.eC7,A.f4H,A.eNN],y.S)
A.f6m=x([255,255,253,255,255,255,255,255,255,255,255],y.t)
A.eNe=x([A.f6m,A.U7,A.eL],y.S)
A.eCb=x([A.eOX,A.f_I,A.eQT,A.eKU,A.eXh,A.ecJ,A.eNe,A.UG],y.o)
A.eYw=x([A.eNY,A.exT,A.exR,A.eCb],y.g)
A.aa9=new B.kA(1,"rle8")
A.aae=new B.kA(2,"rle4")
A.aaf=new B.kA(4,"jpeg")
A.aag=new B.kA(5,"png")
A.aah=new B.kA(7,"reserved7")
A.aai=new B.kA(8,"reserved8")
A.aaj=new B.kA(9,"reserved9")
A.aaa=new B.kA(10,"reserved10")
A.aab=new B.kA(11,"cmyk")
A.aac=new B.kA(12,"cmykRle8")
A.aad=new B.kA(13,"cmykRle4")
A.Uy=x([A.Hn,A.aa9,A.aae,A.zv,A.aaf,A.aag,A.zw,A.aah,A.aai,A.aaj,A.aaa,A.aab,A.aac,A.aad],C.O("y<kA>"))
A.DN=x([0,128,192,224,240,248,252,254,255],y.t)
A.DO=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295],y.t)
A.a7H=new B.GB(0,"predictor")
A.fvQ=new B.GB(1,"crossColor")
A.fvR=new B.GB(2,"subtractGreen")
A.a7I=new B.GB(3,"colorIndexing")
A.f0S=x([A.a7H,A.fvQ,A.fvR,A.a7I],C.O("y<GB>"))
A.eM=x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255],y.t)
A.f3K=x([B.cJx(),B.cJr(),B.cJH(),B.cJF(),B.cJz(),B.cJy(),B.cJA()],y.y)
A.UJ=x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],y.t)
A.f3T=x([null,B.cJY(),B.cJZ(),B.cJX()],C.O("y<~(v,v,v,v,v,dZ)?>"))
A.UK=x([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15],y.t)
A.x5=x([0,36,72,109,145,182,218,255],y.t)
A.lb=x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255],y.t)
A.feV=new B.qS(0,"bitmap")
A.a4e=new B.qS(1,"grayscale")
A.feW=new B.qS(2,"indexed")
A.a4f=new B.qS(3,"rgb")
A.a4g=new B.qS(4,"cmyk")
A.feX=new B.qS(5,"multiChannel")
A.feY=new B.qS(6,"duoTone")
A.a4h=new B.qS(7,"lab")
A.f4G=x([A.feV,A.a4e,A.feW,A.a4f,A.a4g,A.feX,A.feY,A.a4h],C.O("y<qS>"))
A.x6=x([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63],y.t)
A.ems=x([2,6,2,6],y.t)
A.eC9=x([6,2,6,2],y.t)
A.emq=x([2,2,6,6],y.t)
A.efS=x([1,3,3,9],y.t)
A.exV=x([4,0,12,0],y.t)
A.es2=x([3,1,9,3],y.t)
A.eJ4=x([8,8,0,0],y.t)
A.exW=x([4,12,0,0],y.t)
A.efo=x([16,0,0,0],y.t)
A.ecc=x([12,4,0,0],y.t)
A.eCa=x([6,6,2,2],y.t)
A.es5=x([3,9,1,3],y.t)
A.ecb=x([12,0,4,0],y.t)
A.eM7=x([9,3,3,1],y.t)
A.dK=x([A.Tw,A.ems,A.Du,A.eC9,A.emq,A.efS,A.exV,A.es2,A.eJ4,A.exW,A.efo,A.ecc,A.eCa,A.es5,A.ecb,A.eM7],y.S)
A.pg=x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1],y.t)
A.rN=new B.zF(0,"invalid")
A.a3C=new B.zF(1,"pbm")
A.a3D=new B.zF(2,"pgm2")
A.EH=new B.zF(3,"pgm5")
A.a3E=new B.zF(4,"ppm3")
A.EI=new B.zF(5,"ppm6")
A.G3=new B.pw(0,"bilevel")
A.ftA=new B.pw(1,"gray4bit")
A.ftB=new B.pw(2,"gray")
A.ftC=new B.pw(3,"grayAlpha")
A.ftD=new B.pw(4,"palette")
A.a6Z=new B.pw(5,"rgb")
A.ftE=new B.pw(6,"rgba")
A.ftF=new B.pw(7,"yCbCrSub")
A.te=new B.pw(8,"generic")
A.ftG=new B.pw(9,"invalid")
A.tj=new B.Og(0,"undefined")
A.Gr=new B.Og(1,"lossy")
A.yE=new B.Og(2,"lossless")
A.fAd=new B.Og(3,"animated")})();(function staticFields(){$.c4u=null
$.ceM=!1
$.ceN=C.c([B.c5K(),B.cJJ(),B.cJO(),B.cJP(),B.cJQ(),B.cJR(),B.cJS(),B.cJT(),B.cJU(),B.cJV(),B.cJK(),B.cJL(),B.cJM(),B.cJN(),B.c5K(),B.c5K()],C.O("y<v(os,v,v)>"))})();(function lazyInitializers(){var x=a.lazy
x($,"cNT","aBu",()=>C.tz(511))
x($,"cNU","c_w",()=>C.tz(511))
x($,"cNW","c_x",()=>C.cbP(2041))
x($,"cNX","c_y",()=>C.cbP(225))
x($,"cNV","nz",()=>C.tz(766))})()};
(a=>{a["u12HbSRZ3ruzYoBq5z0tXCOeo2E="]=a.current})($__dart_deferred_initializers__);