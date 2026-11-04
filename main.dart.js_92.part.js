((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,B={
cao(d){var x,w,v=new B.aFO()
if(!B.c2E(d))C.ab(C.bJ("Not a bitmap file."))
d.d+=2
x=d.Z()
w=$.fz()
w.$flags&2&&C.u(w)
w[0]=x
x=$.jq()
d.d+=4
w[0]=d.Z()
v.b=x[0]
return v},
c2E(d){if(d.c-d.d<2)return!1
return C.bS(d,null,0).ad()===19778},
cqU(d,e){var x,w,v,u,t=e==null?B.cao(d):e,s=d.d,r=d.Z(),q=d.Z(),p=$.fz()
p.$flags&2&&C.u(p)
p[0]=q
q=$.jq()
x=q[0]
p[0]=d.Z()
q=q[0]
w=d.ad()
v=d.ad()
u=A.UD[d.Z()]
d.Z()
p[0]=d.Z()
p[0]=d.Z()
p=d.Z()
d.Z()
s=new B.Cz(t,x,q,r,w,v,u,p,s)
s.aev(d,e)
return s},
kG:function kG(d,e){this.a=d
this.b=e},
aFO:function aFO(){this.b=$},
Cz:function Cz(d,e,f,g,h,i,j,k,l){var _=this
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
aaK:function aaK(d){this.a=$
this.b=null
this.c=d},
aFN:function aFN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKV:function aKV(d){this.a=$
this.b=null
this.c=d},
aKv:function aKv(){},
adv:function adv(d,e,f){this.a=d
this.b=e
this.c=f},
afk:function afk(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
Km:function Km(d,e){this.a=d
this.b=e},
Dv:function Dv(d,e){this.a=d
this.b=e},
adw:function adw(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
cbS(d,e,f,g){var x,w
switch(d.a){case 1:return new B.aUW(f,e)
case 2:return new B.afm(f,g==null?1:g,e)
case 3:return new B.afm(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new B.aUU(f,x,e)
w.aLW(e,f,x)
return w
case 5:return new B.aUV(f,g==null?16:g,e)
case 6:return new B.afk(f,g==null?32:g,!1,e)
case 7:return new B.afk(f,g==null?32:g,!0,e)
default:throw C.n(C.bJ("Invalid compression type: "+d.j(0)))}},
qp:function qp(d,e){this.a=d
this.b=e},
aPa:function aPa(){},
aUT:function aUT(){},
ctP(d,e,f,g){var x,w,v,u,t,s,r,q
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
s=C.bm(65537,0,!1,y.p)
r=J.iM(16384,y.W)
for(q=0;q<16384;++q)r[q]=new B.adx()
B.ctQ(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw C.n(C.bJ("Error in header for Huffman-encoded data (invalid number of bits)."))
B.ctM(s,w,v,r)
B.ctO(s,r,d,u,v,g,f)},
ctO(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=C.c([0,0],y.t),n=f.d+D.f.av(g+7,8)
for(x=0;f.d<n;){B.c3t(o,f)
while(w=o[1],w>=14){v=e[D.f.j8(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=B.c3u(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw C.n(C.bJ(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
for(;;){w=o[1]
if(!(w<s&&f.d<n))break
B.c3t(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.f.j8(o[0],w)&D.f.cN(1,s)-1)>>>0){o[1]=w
r=B.c3u(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw C.n(C.bJ(p))}}}q=8-g&7
o[0]=D.f.S(o[0],q)
o[1]=o[1]-q
while(w=o[1],w>0){v=e[D.f.cE(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=B.c3u(v.b,h,o,f,j,x,i)}else throw C.n(C.bJ(p))}if(x!==i)throw C.n(C.bJ("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
c3u(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)B.c3t(f,g)
x=f[1]-8
f[1]=x
w=D.f.j8(f[0],x)&255
if(i+w>j)throw C.n(C.bJ(s))
v=h[i-1]
for(x=h.$flags|0;u=w-1,w>0;w=u,i=t){t=i+1
x&2&&C.u(h)
h[i]=v}}else{if(i<j){h.toString
t=i+1
h.$flags&2&&C.u(h)
h[i]=d}else throw C.n(C.bJ(s))
i=t}return i},
ctM(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t,w=y.p;e<=f;++e){v=d[e]
u=v>>>6
t=v&63
if(D.f.fG(u,t)!==0)throw C.n(C.bJ(n))
if(t>14){s=g[D.f.eb(u,t-14)]
if(s.a!==0)throw C.n(C.bJ(n))
v=++s.b
r=s.c
if(r!=null){v=C.bm(v,0,!1,w)
s.c=v
for(q=s.b-1,p=0;p<q;++p)v[p]=r[p]}else s.c=C.c([0],x)
s.c[s.b-1]=e}else if(t!==0){v=14-t
o=D.f.cE(u,v)
for(p=D.f.cE(1,v);p>0;--p,++o){s=g[o]
if(s.a!==0||s.c!=null)throw C.n(C.bJ(n))
s.a=t
s.b=e}}}},
ctQ(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=C.c([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw C.n(C.bJ(s))
w=B.cbT(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw C.n(C.bJ(s))
v=B.cbT(8,p,d)+6
if(f+v>x)throw C.n(C.bJ(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw C.n(C.bJ(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}B.ctN(h)},
ctN(d){var x,w,v,u,t,s=C.bm(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
c3t(d,e){d[0]=(d[0]<<8|e.bx())>>>0
d[1]=d[1]+8>>>0},
cbT(d,e,f){var x
while(x=e[1],x<d){e[0]=(e[0]<<8|J.A(f.a,f.d++))>>>0
e[1]=e[1]+8>>>0}x-=d
e[1]=x
return(D.f.j8(e[0],x)&D.f.cN(1,d)-1)>>>0},
adx:function adx(){this.b=this.a=0
this.c=null},
ctR(d){var x=new B.ady(C.c([],y.m))
x.aey(d)
return x},
ctS(d){var x=C.cd(d,!1,null,0)
if(x.Z()!==20000630)return!1
if(x.bx()!==2)return!1
if((x.po()&4294967289)>>>0!==0)return!1
return!0},
ady:function ady(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
cd0(d,e,f){var x=new B.afl(d,C.c([],y.Q),C.C(y.N,y.n),A.MH,e)
x.aLC(d,e,f)
return x},
Uo:function Uo(){},
aPc:function aPc(d,e){this.a=d
this.b=e},
afl:function afl(d,e,f,g,h){var _=this
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
aUU:function aUU(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
atG:function atG(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
aUV:function aUV(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
aUW:function aUW(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
afm:function afm(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
aPb:function aPb(){this.a=null},
cck(d){var x=new Uint8Array(d*3)
return new B.UT(B.cuE(d),d,null,new C.qQ(x,d,3))},
cuD(d){return new B.UT(d.a,d.b,d.c,C.cej(d.d))},
cuE(d){var x
for(x=1;x<=8;++x)if(D.f.cN(1,x)>=d)return x
return 0},
UT:function UT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
UU:function UU(){},
afn:function afn(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
aeg:function aeg(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
aS8:function aS8(){var _=this
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
ccB(d){var x,w,v,u,t,s,r
if(d.ad()!==0)return null
x=d.ad()
if(x>=3)return null
w=A.e4b[x]
if(w===A.N9)return null
v=d.ad()
u=J.h4(v,y.Y)
for(t=0;t<v;++t){s=J.A(d.a,d.d++)
r=J.A(d.a,d.d++)
J.A(d.a,d.d++);++d.d
d.ad()
d.ad()
u[t]=new B.af_(s,r,d.Z(),d.Z())}return new B.aU5(w,v,u)},
KE:function KE(d,e){this.a=d
this.b=e},
aU5:function aU5(d,e,f){this.c=d
this.d=e
this.e=f},
af_:function af_(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
aU3:function aU3(d,e,f,g,h,i,j,k,l){var _=this
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
aU4:function aU4(){this.b=this.a=null},
abL:function abL(d,e,f){this.e=d
this.f=e
this.r=f},
DV:function DV(){},
DW:function DW(d){this.a=d},
V7:function V7(d){this.a=d},
aVb:function aVb(){this.d=null},
zn:function zn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
aVe(){var x=C.bm(4,null,!1,y.r),w=C.c([],y.a),v=y.bT,u=J.tu(0,v)
v=J.tu(0,v)
return new B.aVd(new C.Kk(C.C(y.N,y.P)),x,w,u,v,C.c([],y.E))},
aVd:function aVd(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
aVf:function aVf(d,e){this.a=d
this.b=e},
Po:function Po(d){this.a=d
this.b=0},
afG:function afG(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
aVh:function aVh(){this.b=this.a=0},
aVi:function aVi(){this.r=this.f=$},
afH:function afH(d,e,f,g,h,i,j,k){var _=this
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
VD:function VD(){},
zT:function zT(d,e){this.a=d
this.b=e},
Fc:function Fc(d){this.b=this.a=0
this.e=d},
b1W:function b1W(d){this.b=this.a=null
this.c=d},
b1X:function b1X(){},
aio:function aio(){this.b=this.a=null},
aip:function aip(){this.b=this.a=null},
u_:function u_(){},
air:function air(){this.b=this.a=null},
ais:function ais(){this.b=this.a=null},
aiv:function aiv(){this.b=this.a=null},
aiw:function aiw(){this.b=this.a=null},
XK:function XK(d){this.b=d},
aiu:function aiu(){this.b=$
this.c=null},
b3D:function b3D(){var _=this
_.w=_.r=_.f=_.e=$},
Mg:function Mg(d){this.a=d
this.c=null},
c4D(d){var x=new B.b3F(C.C(y.p,y.h))
x.aM7(d)
return x},
c4H(d,e,f,g){var x=d/255,w=e/255,v=f/255,u=g/255,t=w*(1-v),s=x*(1-u)
return D.m.F(D.m.au((2*x<v?2*w*x+t+s:u*v-2*(v-x)*(u-w)+t+s)*255,0,255))},
b3G(d,e){if(e===0)return 0
return D.f.F(D.f.au(D.m.F(255*(1-(1-d/255)/(e/255))),0,255))},
b3I(d,e){return D.f.F(D.f.au(d+e-255,0,255))},
c4J(d,e){return D.f.F(D.f.au(255-(255-e)*(255-d),0,255))},
b3H(d,e){if(e===255)return 255
return D.m.F(D.m.au(d/255/(1-e/255)*255,0,255))},
c4K(d,e){var x=d/255,w=e/255,v=1-w
return D.m.aM(255*(v*w*x+w*(1-v*(1-x))))},
c4F(d,e){var x=e/255,w=d/255
if(w<0.5)return D.m.aM(510*x*w)
else return D.m.aM(255*(1-2*(1-x)*(1-w)))},
c4L(d,e){if(e<128)return B.b3G(d,2*e)
else return B.b3H(d,2*(e-128))},
c4G(d,e){var x
if(e<128)return B.b3I(d,2*e)
else{x=2*(e-128)
return x+d>255?255:d+x}},
c4I(d,e){return e<128?Math.min(d,2*e):Math.max(d,2*(e-128))},
c4E(d,e){return D.m.aM(e+d-2*e*d/255)},
nc(d,e,f){var x
if(d==null)x=0
else x=f===1?d[e]:(d[e]<<8|d[e+1])>>>8
return x},
cf_(b5,b6,b7,b8,b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=C.C(y.p,y.e)
for(x=b9.length,w=0;v=b9.length,w<v;b9.length===x||(0,C.G)(b9),++w){u=b9[w]
b4.l(0,u.a,u)}if(b6===8)t=1
else t=b6===16?2:-1
s=C.fS(b3,b3,D.ax,0,D.bQ,b8,b3,0,v,b3,D.ax,b7,!1)
if(t===-1)throw C.n(C.bJ("PSD: unsupported bit depth: "+C.r(b6)))
r=b4.h(0,0)
q=b4.h(0,1)
p=b4.h(0,2)
o=b4.h(0,-1)
n=C.c([0,0,0],y.t)
m=-t
for(x=s.a,x=x.gU(x),l=v>=5,k=v===4,j=v>=2,v=v>=4;x.q();){i=x.gI()
m+=t
switch(b5){case A.a4k:i.sa7(B.nc(r.c,m,t))
i.sah(B.nc(q.c,m,t))
i.sai(B.nc(p.c,m,t))
i.sao(v?B.nc(o.c,m,t):255)
if(i.gao()!==0){i.sa7((i.ga7()+i.gao()-255)*255/i.gao())
i.sah((i.gah()+i.gao()-255)*255/i.gao())
i.sai((i.gai()+i.gao()-255)*255/i.gao())}break
case A.a4m:h=B.nc(r.c,m,t)
g=B.nc(q.c,m,t)
f=B.nc(p.c,m,t)
e=v?B.nc(o.c,m,t):255
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
i.sah(a8[1])
i.sai(a8[2])
i.sao(e)
break
case A.a4j:a9=B.nc(r.c,m,t)
e=j?B.nc(o.c,m,t):255
i.sa7(a9)
i.sah(a9)
i.sai(a9)
i.sao(e)
break
case A.a4l:b0=B.nc(r.c,m,t)
b1=B.nc(q.c,m,t)
d=B.nc(p.c,m,t)
b2=B.nc(b4.h(0,k?-1:3).c,m,t)
e=l?B.nc(o.c,m,t):255
B.ckf(255-b0,255-b1,255-d,255-b2,n)
i.sa7(n[0])
i.sah(n[1])
i.sai(n[2])
i.sao(e)
break
default:throw C.n(C.bJ("Unhandled color mode: "+C.r(b5)))}}return s},
r0:function r0(d,e){this.a=d
this.b=e},
b3F:function b3F(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=_.w=$
_.y=null
_.z=d
_.as=$
_.ay=_.ax=_.at=null},
aiq:function aiq(d,e){this.a=d
this.b=e},
ait:function ait(d,e,f){var _=this
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
cxQ(d,e){var x,w
switch(d){case"lsct":x=new B.aiu()
w=e.c-e.d
x.b=e.Z()
if(w>=12){if(e.hi(4)!=="8BIM")C.ab(C.bJ("Invalid key in layer additional data"))
x.c=e.hi(4)}if(w>=16)e.Z()
return x
default:return new B.XK(e)}},
Mh:function Mh(){},
b3E:function b3E(){this.a=null},
aiA:function aiA(){},
wp:function wp(d,e,f){this.a=d
this.b=e
this.c=f},
kW:function kW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XO:function XO(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
Mk:function Mk(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
aiz:function aiz(){this.y=this.b=this.a=0},
wq(d,e){return(A.x4[d>>>8]<<17|A.x4[e>>>8]<<16|A.x4[d&255]<<1|A.x4[e&255])>>>0},
po:function po(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
b3P:function b3P(){this.b=this.a=null},
am5:function am5(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
mv:function mv(d,e){this.a=d
this.b=e},
bhv:function bhv(){this.a=null
this.b=$},
bhF:function bhF(d){this.a=d
this.c=this.b=0},
am6:function am6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
c5w(d,e,f){var x=new B.bhH(e,f,d),w=y.I
x.e=C.bm(e,null,!1,w)
x.f=C.bm(e,null,!1,w)
return x},
bhH:function bhH(d,e,f){var _=this
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
am7:function am7(d,e,f,g){var _=this
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
GD:function GD(d,e){this.a=d
this.b=e},
jg:function jg(d,e){this.a=d
this.b=e},
pB:function pB(d,e){this.a=d
this.b=e},
bhI:function bhI(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
cdy(){return new B.aWv(new Uint8Array(4096))},
aWv:function aWv(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bhG:function bhG(){this.b=this.a=null
this.c=$},
c5H(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=C.bm(8,null,!1,y.ak),s=C.bm(4,null,!1,y.Z)
return new B.bjs(d,e,new B.bjy(),new B.bjC(),new B.bju(x,w),new B.bjE(v,u),t,s,new Uint8Array(4))},
cgZ(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
bjs:function bjs(d,e,f,g,h,i,j,k,l){var _=this
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
_.ac=$},
bjF:function bjF(){},
cgW(d){var x=new B.a0b(d)
x.b=254
x.c=0
x.d=-8
return x},
a0b:function a0b(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
dT(d,e,f){return D.f.iI(D.f.S(d+2*e+f+2,2),32)},
cBi(d){var x,w=C.c([B.dT(J.A(d.a,d.d+-33),J.A(d.a,d.d+-32),J.A(d.a,d.d+-31)),B.dT(J.A(d.a,d.d+-32),J.A(d.a,d.d+-31),J.A(d.a,d.d+-30)),B.dT(J.A(d.a,d.d+-31),J.A(d.a,d.d+-30),J.A(d.a,d.d+-29)),B.dT(J.A(d.a,d.d+-30),J.A(d.a,d.d+-29),J.A(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.xi(x*32,4,w)},
cBa(d){var x=J.A(d.a,d.d+-33),w=J.A(d.a,d.d+-1),v=J.A(d.a,d.d+31),u=J.A(d.a,d.d+63),t=J.A(d.a,d.d+95),s=C.bS(d,null,0),r=s.Nv(),q=B.dT(x,w,v)
r.$flags&2&&C.u(r)
r[0]=16843009*q
s.d+=32
q=s.Nv()
r=B.dT(w,v,u)
q.$flags&2&&C.u(q)
q[0]=16843009*r
s.d+=32
r=s.Nv()
q=B.dT(v,u,t)
r.$flags&2&&C.u(r)
r[0]=16843009*q
s.d+=32
q=s.Nv()
r=B.dT(u,t,t)
q.$flags&2&&C.u(q)
q[0]=16843009*r},
cB8(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.A(d.a,d.d+(w-32))+J.A(d.a,d.d+(-1+w*32))
x=D.f.S(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.rN(v,u,u+4,x)}},
c5I(d,e){var x,w,v,u,t,s=255-J.A(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.A(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.nB()[v+J.A(d.a,d.d+(-32+u))]
J.bd(d.a,d.d+(x+u),t)}x+=32}},
cBg(d){B.c5I(d,4)},
cBh(d){B.c5I(d,8)},
cBf(d){B.c5I(d,16)},
cBe(d){var x,w=J.A(d.a,d.d+-1),v=J.A(d.a,d.d+31),u=J.A(d.a,d.d+63),t=J.A(d.a,d.d+95),s=J.A(d.a,d.d+-33),r=J.A(d.a,d.d+-32),q=J.A(d.a,d.d+-31),p=J.A(d.a,d.d+-30),o=J.A(d.a,d.d+-29)
d.l(0,96,B.dT(v,u,t))
x=B.dT(w,v,u)
d.l(0,97,x)
d.l(0,64,x)
x=B.dT(s,w,v)
d.l(0,98,x)
d.l(0,65,x)
d.l(0,32,x)
x=B.dT(r,s,w)
d.l(0,99,x)
d.l(0,66,x)
d.l(0,33,x)
d.l(0,0,x)
x=B.dT(q,r,s)
d.l(0,67,x)
d.l(0,34,x)
d.l(0,1,x)
x=B.dT(p,q,r)
d.l(0,35,x)
d.l(0,2,x)
d.l(0,3,B.dT(o,p,q))},
cBd(d){var x,w=J.A(d.a,d.d+-32),v=J.A(d.a,d.d+-31),u=J.A(d.a,d.d+-30),t=J.A(d.a,d.d+-29),s=J.A(d.a,d.d+-28),r=J.A(d.a,d.d+-27),q=J.A(d.a,d.d+-26),p=J.A(d.a,d.d+-25)
d.l(0,0,B.dT(w,v,u))
x=B.dT(v,u,t)
d.l(0,32,x)
d.l(0,1,x)
x=B.dT(u,t,s)
d.l(0,64,x)
d.l(0,33,x)
d.l(0,2,x)
x=B.dT(t,s,r)
d.l(0,96,x)
d.l(0,65,x)
d.l(0,34,x)
d.l(0,3,x)
x=B.dT(s,r,q)
d.l(0,97,x)
d.l(0,66,x)
d.l(0,35,x)
x=B.dT(r,q,p)
d.l(0,98,x)
d.l(0,67,x)
d.l(0,99,B.dT(q,p,p))},
cBk(d){var x=J.A(d.a,d.d+-1),w=J.A(d.a,d.d+31),v=J.A(d.a,d.d+63),u=J.A(d.a,d.d+-33),t=J.A(d.a,d.d+-32),s=J.A(d.a,d.d+-31),r=J.A(d.a,d.d+-30),q=J.A(d.a,d.d+-29),p=D.f.iI(D.f.S(u+t+1,1),32)
d.l(0,65,p)
d.l(0,0,p)
p=D.f.iI(D.f.S(t+s+1,1),32)
d.l(0,66,p)
d.l(0,1,p)
p=D.f.iI(D.f.S(s+r+1,1),32)
d.l(0,67,p)
d.l(0,2,p)
d.l(0,3,D.f.iI(D.f.S(r+q+1,1),32))
d.l(0,96,B.dT(v,w,x))
d.l(0,64,B.dT(w,x,u))
p=B.dT(x,u,t)
d.l(0,97,p)
d.l(0,32,p)
p=B.dT(u,t,s)
d.l(0,98,p)
d.l(0,33,p)
p=B.dT(t,s,r)
d.l(0,99,p)
d.l(0,34,p)
d.l(0,35,B.dT(s,r,q))},
cBj(d){var x,w=J.A(d.a,d.d+-32),v=J.A(d.a,d.d+-31),u=J.A(d.a,d.d+-30),t=J.A(d.a,d.d+-29),s=J.A(d.a,d.d+-28),r=J.A(d.a,d.d+-27),q=J.A(d.a,d.d+-26),p=J.A(d.a,d.d+-25)
d.l(0,0,D.f.iI(D.f.S(w+v+1,1),32))
x=D.f.iI(D.f.S(v+u+1,1),32)
d.l(0,64,x)
d.l(0,1,x)
x=D.f.iI(D.f.S(u+t+1,1),32)
d.l(0,65,x)
d.l(0,2,x)
x=D.f.iI(D.f.S(t+s+1,1),32)
d.l(0,66,x)
d.l(0,3,x)
d.l(0,32,B.dT(w,v,u))
x=B.dT(v,u,t)
d.l(0,96,x)
d.l(0,33,x)
x=B.dT(u,t,s)
d.l(0,97,x)
d.l(0,34,x)
x=B.dT(t,s,r)
d.l(0,98,x)
d.l(0,35,x)
d.l(0,67,B.dT(s,r,q))
d.l(0,99,B.dT(r,q,p))},
cBb(d){var x,w=J.A(d.a,d.d+-1),v=J.A(d.a,d.d+31),u=J.A(d.a,d.d+63),t=J.A(d.a,d.d+95)
d.l(0,0,D.f.iI(D.f.S(w+v+1,1),32))
x=D.f.iI(D.f.S(v+u+1,1),32)
d.l(0,32,x)
d.l(0,2,x)
x=D.f.iI(D.f.S(u+t+1,1),32)
d.l(0,64,x)
d.l(0,34,x)
d.l(0,1,B.dT(w,v,u))
x=B.dT(v,u,t)
d.l(0,33,x)
d.l(0,3,x)
x=B.dT(u,t,t)
d.l(0,65,x)
d.l(0,35,x)
d.l(0,99,t)
d.l(0,98,t)
d.l(0,97,t)
d.l(0,96,t)
d.l(0,66,t)
d.l(0,67,t)},
cB9(d){var x=J.A(d.a,d.d+-1),w=J.A(d.a,d.d+31),v=J.A(d.a,d.d+63),u=J.A(d.a,d.d+95),t=J.A(d.a,d.d+-33),s=J.A(d.a,d.d+-32),r=J.A(d.a,d.d+-31),q=J.A(d.a,d.d+-30),p=D.f.iI(D.f.S(x+t+1,1),32)
d.l(0,34,p)
d.l(0,0,p)
p=D.f.iI(D.f.S(w+x+1,1),32)
d.l(0,66,p)
d.l(0,32,p)
p=D.f.iI(D.f.S(v+w+1,1),32)
d.l(0,98,p)
d.l(0,64,p)
d.l(0,96,D.f.iI(D.f.S(u+v+1,1),32))
d.l(0,3,B.dT(s,r,q))
d.l(0,2,B.dT(t,s,r))
p=B.dT(x,t,s)
d.l(0,35,p)
d.l(0,1,p)
p=B.dT(w,x,t)
d.l(0,67,p)
d.l(0,33,p)
p=B.dT(v,w,x)
d.l(0,99,p)
d.l(0,65,p)
d.l(0,97,B.dT(u,v,w))},
cBv(d){var x
for(x=0;x<16;++x)d.pd(x*32,16,d,-32)},
cBt(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.A(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.rN(u,t,t+16,v)
x+=32}},
bjw(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.rN(w,v,v+16,d)}},
cBl(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.A(d.a,d.d+(-1+w*32))+J.A(d.a,d.d+(w-32))
B.bjw(D.f.S(x,5),d)},
cBn(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.A(d.a,d.d+(-1+w*32))
B.bjw(D.f.S(x,4),d)},
cBm(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.A(d.a,d.d+(w-32))
B.bjw(D.f.S(x,4),d)},
cBo(d){B.bjw(128,d)},
cBw(d){var x
for(x=0;x<8;++x)d.pd(x*32,8,d,-32)},
cBu(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.A(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.rN(u,t,t+8,v)
x+=32}},
bjx(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.rN(w,v,v+8,d)}},
cBp(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.A(d.a,d.d+(w-32))+J.A(d.a,d.d+(-1+w*32))
B.bjx(D.f.S(x,4),d)},
cBq(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.A(d.a,d.d+(w-32))
B.bjx(D.f.S(x,3),d)},
cBr(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.A(d.a,d.d+(-1+w*32))
B.bjx(D.f.S(x,3),d)},
cBs(d){B.bjx(128,d)},
Bb(d,e,f,g,h){var x=e+f+g*32,w=J.A(d.a,d.d+x)+D.f.S(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.l(0,x,w)},
bjv(d,e,f,g,h){B.Bb(d,0,0,e,f+g)
B.Bb(d,0,1,e,f+h)
B.Bb(d,0,2,e,f-h)
B.Bb(d,0,3,e,f-g)},
cBc(){var x,w,v,u
if(!$.cgX){for(x=-255;x<=255;++x){w=$.aBR()
v=255+x
u=x<0?-x:x
w.$flags&2&&C.u(w)
w[v]=u
u=$.c1z()
w=D.f.S(w[v],1)
u.$flags&2&&C.u(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.c1A()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&C.u(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.c1B()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&C.u(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.nB()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&C.u(w)
w[255+x]=v}$.cgX=!0}},
bjt:function bjt(){},
cB7(){var x,w=J.iM(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new B.a0a(w)},
cBL(){var x,w,v,u,t=new Uint8Array(3),s=J.iM(4,y.z)
for(x=y.V,w=0;w<4;++w){v=J.iM(8,x)
for(u=0;u<8;++u)v[u]=B.cB7()
s[w]=v}D.K.fu(t,0,3,255)
return new B.bjD(t,s)},
bjy:function bjy(){this.c=null
this.d=$},
bjC:function bjC(){this.b=this.a=null},
bjE:function bjE(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
a0a:function a0a(d){this.a=d},
bjD:function bjD(d,e){this.a=d
this.b=e},
bju:function bju(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
GN:function GN(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
amK:function amK(){this.b=this.a=0},
amM:function amM(d,e,f){this.a=d
this.b=e
this.c=f},
amL:function amL(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
amN:function amN(d,e,f){this.a=d
this.b=e
this.c=f},
c5J(d,e){var x,w=C.c([],y.A),v=C.c([],y.F),u=new Uint32Array(2),t=new B.amI(d,u)
u=t.d=J.cn(D.bM.ga5(u),0,null)
x=d.bx()
u.$flags&2&&C.u(u)
u[0]=x
x=d.bx()
u.$flags&2&&C.u(u)
u[1]=x
x=d.bx()
u.$flags&2&&C.u(u)
u[2]=x
x=d.bx()
u.$flags&2&&C.u(u)
u[3]=x
x=d.bx()
u.$flags&2&&C.u(u)
u[4]=x
x=d.bx()
u.$flags&2&&C.u(u)
u[5]=x
x=d.bx()
u.$flags&2&&C.u(u)
u[6]=x
x=d.bx()
u.$flags&2&&C.u(u)
u[7]=x
return new B.a0c(t,e,w,v)},
Bc(d,e){return D.f.S(d+D.f.cN(1,e)-1,e)},
a0c:function a0c(d,e,f,g){var _=this
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
afs:function afs(d,e,f,g){var _=this
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
amI:function amI(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
bjz:function bjz(d,e){this.a=d
this.b=e},
bjA(d,e,f){var x=d[e]
d.$flags&2&&C.u(d)
d[e]=(((x&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(x&16711935)+(f&16711935)&16711935)>>>0},
x6(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
GP(d){if(d<0)return 0
if(d>255)return 255
return d},
bjB(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
cBx(d,e,f){return 4278190080},
cBy(d,e,f){return e},
cBD(d,e,f){return d[f]},
cBE(d,e,f){return d[f+1]},
cBF(d,e,f){return d[f-1]},
cBG(d,e,f){var x=d[f]
return B.x6(B.x6(e,d[f+1]),x)},
cBH(d,e,f){return B.x6(e,d[f-1])},
cBI(d,e,f){return B.x6(e,d[f])},
cBJ(d,e,f){return B.x6(d[f-1],d[f])},
cBK(d,e,f){return B.x6(d[f],d[f+1])},
cBz(d,e,f){var x=d[f-1],w=d[f],v=d[f+1]
return B.x6(B.x6(e,x),B.x6(w,v))},
cBA(d,e,f){var x=d[f],w=d[f-1]
return B.bjB(x>>>24,e>>>24,w>>>24)+B.bjB(x>>>16&255,e>>>16&255,w>>>16&255)+B.bjB(x>>>8&255,e>>>8&255,w>>>8&255)+B.bjB(x&255,e&255,w&255)<=0?x:e},
cBB(d,e,f){var x=d[f],w=d[f-1]
return(B.GP((e>>>24)+(x>>>24)-(w>>>24))<<24|B.GP((e>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|B.GP((e>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|B.GP((e&255)+(x&255)-(w&255)))>>>0},
cBC(d,e,f){var x,w,v,u=d[f],t=d[f-1],s=B.x6(e,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(B.GP(u+D.f.av(u-(t>>>24),2))<<24|B.GP(x+D.f.av(x-(t>>>16&255),2))<<16|B.GP(w+D.f.av(w-(t>>>8&255),2))<<8|B.GP(v+D.f.av(v-(t&255),2)))>>>0},
GO:function GO(d,e){this.a=d
this.b=e},
amJ:function amJ(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
bka:function bka(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
a0h:function a0h(){},
aft:function aft(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=$
_.r=1
_.x=_.w=$},
ccy(){var x=new Uint8Array(128),w=new Int16Array(128)
x=new B.aeI(x,w,new Int16Array(128))
x.a5W(0)
return x},
cuJ(){var x,w=J.iM(5,y.x)
for(x=0;x<5;++x)w[x]=B.ccy()
return new B.UZ(w)},
aeI:function aeI(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
UZ:function UZ(d){this.a=d},
Ou:function Ou(d,e){this.a=d
this.b=e},
an0:function an0(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
afu:function afu(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
bkb:function bkb(){this.b=this.a=null},
ob(d,e){return new B.ahf(d,new Uint8Array(e))},
ahf:function ahf(d,e){this.a=0
this.b=d
this.c=e},
c3r(d){var x=new C.Kk(C.C(y.N,y.P))
x.hT(d)
return x},
ctT(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
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
if(a2){B.Up(a4[j],a4[h],v)
f=v[0]
e=v[1]
B.Up(a4[i],a4[g],v)
d=v[0]
a0=v[1]
B.Up(f,d,v)
a1=v[0]
u&2&&C.u(a4)
a4[j]=a1
a4[i]=v[1]
B.Up(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}else{B.Uq(a4[j],a4[h],v)
f=v[0]
e=v[1]
B.Uq(a4[i],a4[g],v)
d=v[0]
a0=v[1]
B.Uq(f,d,v)
a1=v[0]
u&2&&C.u(a4)
a4[j]=a1
a4[i]=v[1]
B.Uq(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){B.Up(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.u(a4)
a4[h]=a1}else{B.Uq(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.u(a4)
a4[h]=a1}u&2&&C.u(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){B.Up(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.u(a4)
a4[i]=n}else{B.Uq(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.u(a4)
a4[i]=n}u&2&&C.u(a4)
a4[j]=f}}w=x>>>1}},
Up(d,e,f){var x,w,v,u,t=$.lO()
t.$flags&2&&C.u(t)
t[0]=d
x=$.mG()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.f.S(v,1)
f[0]=u
f[1]=u-v},
Uq(d,e,f){var x=d-D.f.S(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
ckz(d){var x,w,v,u,t,s,r,q,p,o,n=null
if(B.aVe().aAu(d))return new B.VD()
x=new C.Xr(C.c3T())
if(x.Fb(d))return x
w=new B.aS8()
w.f=C.cd(d,!1,n,0)
w.a=new B.aeg(C.c([],y.b))
if(w.aj8())return w
v=new B.bkb()
if(v.Fb(d))return v
u=new B.bhG()
if(u.a4f(C.cd(d,!1,n,0))!=null)return u
if(B.c4D(d).c===943870035)return new B.b3E()
if(B.ctS(d))return new B.aPb()
if(B.c2E(C.cd(d,!1,n,0)))return new B.aaK(!1)
t=new B.bhv()
s=C.cd(d,!1,n,0)
r=t.a=new B.am5(A.yz)
r.hT(s)
if(r.axn())return t
q=new B.aU4()
r=C.cd(d,!1,n,0)
q.a=r
r=B.ccB(r)
q.b=r
if(r!=null)return q
p=new B.b3P()
if(p.iN(d)!=null)return p
o=new B.b1W(C.c([],y.s))
if(o.Fb(d))return o
return n},
bYI(d){var x=B.ckz(d)
return x==null?null:x.mn(d,null)},
cKF(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if($.c6B==null){x=$.c6B=new Uint8Array(768)
for(w=-256;w<0;++w)x[256+w]=0
for(w=0;w<256;++w)x[256+w]=w
for(w=256;w<512;++w)x[256+w]=255}for(x=a6.$flags|0,w=0;w<64;++w){v=a4[w]
u=a3[w]
x&2&&C.u(a6)
a6[w]=v*u}for(t=0,w=0;w<8;++w,t+=8){v=1+t
u=a6[v]
if(u===0&&a6[2+t]===0&&a6[3+t]===0&&a6[4+t]===0&&a6[5+t]===0&&a6[6+t]===0&&a6[7+t]===0){v=D.f.S(5793*a6[t]+512,10)
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
continue}r=D.f.S(5793*a6[t]+128,8)
q=(r&2147483647)-((r&2147483648)>>>0)
r=4+t
p=D.f.S(5793*a6[r]+128,8)
o=(p&2147483647)-((p&2147483648)>>>0)
p=2+t
n=a6[p]
m=6+t
l=a6[m]
k=7+t
j=a6[k]
i=D.f.S(2896*(u-j)+128,8)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.f.S(2896*(u+j)+128,8)
g=(j&2147483647)-((j&2147483648)>>>0)
j=3+t
u=a6[j]<<4
f=(u&2147483647)-((u&2147483648)>>>0)
u=5+t
i=a6[u]<<4
e=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.S(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.S(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.S(n*3784+l*1567+128,8)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.f.S(n*1567-l*3784+128,8)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.f.S(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.f.S(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.f.S(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.f.S(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.f.S(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.f.S(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.S(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.f.S(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.f.S(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.f.S(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.f.S(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.f.S(f*4017-d*799+2048,12)
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
if(u===0&&a6[16+w]===0&&a6[24+w]===0&&a6[32+w]===0&&a6[40+w]===0&&a6[48+w]===0&&a6[56+w]===0){u=D.f.S(5793*a6[w]+8192,14)
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
continue}r=D.f.S(5793*a6[w]+2048,12)
q=(r&2147483647)-((r&2147483648)>>>0)
r=32+w
p=D.f.S(5793*a6[r]+2048,12)
o=(p&2147483647)-((p&2147483648)>>>0)
p=16+w
n=a6[p]
m=48+w
l=a6[m]
k=56+w
j=a6[k]
i=D.f.S(2896*(u-j)+2048,12)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.f.S(2896*(u+j)+2048,12)
g=(j&2147483647)-((j&2147483648)>>>0)
j=24+w
f=a6[j]
u=40+w
e=a6[u]
i=D.f.S(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.S(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.S(n*3784+l*1567+2048,12)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.f.S(n*1567-l*3784+2048,12)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.f.S(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.f.S(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.f.S(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.f.S(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.f.S(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.f.S(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.f.S(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.f.S(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.f.S(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.f.S(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.f.S(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.f.S(f*4017-d*799+2048,12)
f=(d&2147483647)-((d&2147483648)>>>0)
x&2&&C.u(a6)
a6[w]=q+s
a6[k]=q-s
a6[v]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[u]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(x=$.c6B,v=a5.$flags|0,w=0;w<64;++w){x.toString
u=D.f.S(a6[w]+8,4)
u=x[384+((u&2147483647)-((u&2147483648)>>>0))]
v&2&&C.u(a5)
a5[w]=u}},
cJr(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.r
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
r=C.fS(d6,d6,D.ax,0,D.bQ,s,d6,0,3,d6,D.ax,t,!1)
r.e=C.Ul(d8)
r.gui().h(0,d7).sfk(d6)
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
a0=D.f.S(a1+359*c0+128,8)
c1=D.f.au((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.f.S(a1-88*b9-183*c0+128,8)
c2=D.f.au((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.f.S(a1+454*b9+128,8)
c3=D.f.au((a0&2147483647)-((a0&2147483648)>>>0),0,255)
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
a1=255-D.f.au(D.m.F(a1+1.772*d5),0,255)}d0=D.f.S(d2*d4,8)
c1=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.f.S(d3*d4,8)
c2=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.f.S(a1*d4,8)
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
cBW(d,e,f,g,h,i){B.cBT(i,d,e,f,g,h,!0,i)},
cBX(d,e,f,g,h,i){B.cBU(i,d,e,f,g,h,!0,i)},
cBV(d,e,f,g,h,i){B.cBS(i,d,e,f,g,h,!0,i)},
Ot(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.A(d.a,d.d+x)
v=J.A(e.a,e.d+x)
J.bd(f.a,f.d+x,w+v)}},
cBT(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=C.cd(d,!1,v,u),r=C.cd(d,!1,v,u),q=C.bS(r,v,0)
if(h===0){r.l(0,0,J.A(s.a,s.d))
B.Ot(C.bS(s,v,1),q,C.bS(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){B.Ot(s,C.bS(q,v,x),r,1,!0)
B.Ot(C.bS(s,v,1),q,C.bS(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
cBU(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=C.cd(d,!1,x,w),t=C.cd(k,!1,x,w),s=C.bS(t,x,0)
if(h===0){t.l(0,0,J.A(u.a,u.d))
B.Ot(C.bS(u,x,1),s,C.bS(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
while(h<v){B.Ot(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
cBS(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=C.cd(d,!1,s,r),o=C.cd(k,!1,s,r),n=C.bS(o,s,0)
if(h===0){o.l(0,0,J.A(p.a,p.d))
B.Ot(C.bS(p,s,1),n,C.bS(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){B.Ot(p,C.bS(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.A(n.a,n.d+(w-1))+J.A(n.a,n.d+v)-J.A(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.A(p.a,p.d+w)
J.bd(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
bYv(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
ckf(d,e,f,g,h){var x=1-g/255
h[0]=D.m.aM(255*(1-d/255)*x)
h[1]=D.m.aM(255*(1-e/255)*x)
h[2]=D.m.aM(255*(1-f/255)*x)}},A
J=c[1]
C=c[0]
D=c[2]
B=a.updateHolder(c[76],B)
A=c[185]
B.kG.prototype={
H(){return"BmpCompression."+this.b}}
B.aFO.prototype={}
B.Cz.prototype={
aev(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===A.zB||x===A.zC}else x=!0
if(x){x=q.as=d.Z()
w=B.bYv(x)
q.CW=w
v=D.f.eb(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.Z()
u=B.bYv(w)
q.cy=u
t=D.f.eb(w,u)
q.db=x?255/t:0
w=q.ax=d.Z()
u=B.bYv(w)
q.dx=u
s=D.f.eb(w,u)
q.dy=x?255/s:0
if(!o||q.r===A.zC){o=q.ay=d.Z()
x=B.bYv(o)
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
if(q.f<=8)q.bwn(d)},
gLW(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&C.b()
x=x===0}else x=!1
else x=!0
return x},
gaO(){return Math.abs(this.c)},
bwn(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.f.cN(1,s.f)
s.ch=new C.qQ(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.A(d.a,d.d++)
v=J.A(d.a,d.d++)
u=J.A(d.a,d.d++)
t=J.A(d.a,d.d++)
s.ch.P0(x,u,v,w,t)}},
bma(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.bx()
for(v=7;v>=0;--v)e.$4(D.f.j8(w,v)&1,0,0,0)
return}else if(x===2){w=d.bx()
for(v=6;v>=0;v-=2)e.$4(D.f.j8(w,v)&2,0,0,0)}else if(x===4){w=d.bx()
e.$4(D.f.S(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.bx(),0,0,0)
return}}x=o.r
if(x===A.zB&&o.f===32){u=d.Z()
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
if(o.gLW())p=255
else{x=o.ay
x===$&&C.b()
t=o.fr
t===$&&C.b()
t=D.f.eb((u&x)>>>0,t)
x=o.fx
x===$&&C.b()
p=D.m.F(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===A.Hr){q=d.bx()
r=d.bx()
s=d.bx()
p=d.bx()
return e.$4(s,r,q,o.gLW()?255:p)}else if(t===24){q=d.bx()
r=d.bx()
return e.$4(d.bx(),r,q,255)}else if(t===16){u=d.ad()
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
if(o.gLW())p=255
else{x=o.ay
x===$&&C.b()
t=o.fr
t===$&&C.b()
t=D.f.eb((u&x)>>>0,t)
x=o.fx
x===$&&C.b()
p=D.m.F(t*x)}return e.$4(s,r,q,p)}else throw C.n(C.bJ("Unsupported bitsPerPixel ("+t+") or compression ("+x.j(0)+")."))}},
gbK(){return this.b}}
B.aaK.prototype={
iN(d){var x,w=null
if(!B.c2E(C.cd(d,!1,w,0)))return w
x=C.cd(d,!1,w,0)
this.a=x
return this.b=B.cqU(x,w)},
i2(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new C.tq(f,f,f,f,0,D.bQ,0,0)
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
t=s}if(x)r=D.ax
else if(v===1)r=D.eH
else{if(v===2)s=D.kz
else if(v===4)s=D.kA
else s=D.ax
r=s}q=x?f:e.ch
p=C.fS(f,f,r,0,D.bQ,e.gaO(),f,0,t,q,D.ax,w,!1)
for(o=p.gaO()-1,x=e.c,w=1/x<0,s=x<0,x=x===0;o>=0;--o){n={}
if(!(x?w:s))m=o
else{l=p.a
l=l==null?f:l.b
m=(l==null?0:l)-1-o}l=g.a
k=l.hC(u)
l.d=l.d+(k.c-k.d)
l=p.a
j=l==null
i=j?f:l.a
if(i==null)i=0
n.a=0
h=j?f:l.cD(0,m,f)
if(h==null)h=new C.es()
while(n.a<i)e.bma(k,new B.aFN(n,g,i,e,h))}return p},
mn(d,e){if(this.iN(d)==null)return null
return this.i2(0)}}
B.aKV.prototype={}
B.aKv.prototype={}
B.adv.prototype={}
B.afk.prototype={
MF(){return this.w},
pt(d,e,f,g,h){throw C.n(C.bJ("B44 compression not yet supported."))},
G9(d,e,f){return this.pt(d,e,f,null,null)},
j(d){return C.r(this.r)+" "+this.x}}
B.Km.prototype={
H(){return"ExrChannelType."+this.b}}
B.Dv.prototype={
H(){return"ExrChannelName."+this.b}}
B.adw.prototype={
aLB(d){var x=this,w=d.N6()
x.a=w
if(w.length===0)return
x.c=A.eO2[d.Z()]
d.bx()
d.d+=3
x.f=d.Z()
x.r=d.Z()
w=x.a
if(w==="R"){x.w=!0
x.b=A.dYq}else if(w==="G"){x.w=!0
x.b=A.dYr}else if(w==="B"){x.w=!0
x.b=A.dYs}else if(w==="A"){x.w=!0
x.b=A.dYt}else{x.w=!1
x.b=A.dYu}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break}}}
B.qp.prototype={
H(){return"ExrCompressorType."+this.b}}
B.aPa.prototype={
pt(d,e,f,g,h){throw C.n(C.bJ("Unsupported compression type"))},
G9(d,e,f){return this.pt(d,e,f,null,null)}}
B.aUT.prototype={}
B.adx.prototype={}
B.ady.prototype={
aey(d){var x,w,v,u,t=this,s=C.cd(d,!1,null,0)
if(s.Z()!==20000630)throw C.n(C.bJ("File is not an OpenEXR image file."))
x=t.d=s.bx()
if(x!==2)throw C.n(C.bJ("Cannot read version "+x+" image files."))
x=t.e=s.po()
if((x&4294967289)>>>0!==0)throw C.n(C.bJ("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=B.cd0(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;;){v=B.cd0(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw C.n(C.bJ("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,C.G)(x),++u)x[u].bwm(s)
t.b95(s)},
b95(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,C.G)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.b9g(u,d)
else t.b9d(u,d)}},
b9g(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
b3===$&&C.b()
x=(b3&16)!==0
b3=b4.b
b3.toString
w=b4.CW
v=b4.ay
u=C.bS(b5,b2,0)
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
i=u.hC(u.Z())
u.d=u.d+(i.c-i.d)
h=b4.dy
h.toString
g=j*h
f=b4.dx
f.toString
h=w.pt(i,k*f,g,f,h)
f=h.length
f=Math.min(f,f)
e=new C.kQ(h,0,f,0,!1)
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
a8=$.fQ
a9=(a8!=null?a8:C.hy())[h]
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
if(b0==null)b0=new C.es()
h=a5.b
h===$&&C.b()
b0.l(0,h.a,a9)}else{h=a5.a
h===$&&C.b()
a8=b3.b
b1=a8!=null?a8.h(0,h):b2
if(b1!=null)b1.dD(a6,g,a9,0,0)}}}++a3;++g}}++o;++q}++r}},
b9d(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
a5===$&&C.b()
x=(a5&16)!==0
a5=a6.b
a5.toString
w=a6.CW
v=a6.ay[0]
u=a6.cx
t=C.bS(a7,a4,0)
for(s=v.length,r=a6.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.Z()!==3.141592653589793)throw C.n(C.bJ("Invalid Image Data"))
n=t.Z()
m=$.fz()
m.$flags&2&&C.u(m)
m[0]=n
n=$.jq()
m[0]=t.Z()
l=t.hC(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.G9(l,0,p)
m=n.length
k=new C.kQ(n,0,Math.min(m,m),0,!1)}else k=l
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
m=$.fQ
a1=(m!=null?m:C.hy())[n]
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
if(a2==null)a2=new C.es()
n=e.b
n===$&&C.b()
a2.l(0,n.a,a1)}else{n=e.a
n===$&&C.b()
m=a5.b
a3=m!=null?m.h(0,n):a4
if(a3!=null)a3.dD(a0,p,a1,0,0)}}}++h;++p}}},
gbK(){return this.a},
gaO(){return this.b}}
B.Uo.prototype={
aLC(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=C.C(y.N,y.u)
for(x=a2.e,w=y.t,v=a2.c,u=D.lE;;){t=a7.N6()
if(t.length===0)break
s=a7.N6()
r=a7.Z()
q=a7.hC(r)
a7.d=a7.d+(q.c-q.d)
x.l(0,t,new B.adv(t,s,r))
switch(t){case"channels":for(;;){p=new B.adw()
p.aLB(q)
o=p.a
o===$&&C.b()
if(o.length===0)break
n=p.w
n===$&&C.b()
if(n){++a2.d
o=p.c
o===$&&C.b()
if(o===A.Ca)u=D.lE
else u=o===A.Cb?D.ms:D.mt}else{n=p.c
n===$&&C.b()
if(n===A.Ca){n=a2.w
m=a2.x
a4.l(0,o,new C.KI(new Uint16Array(n*m),n,m,1))}else if(n===A.Cb){n=a2.w
m=a2.x
a4.l(0,o,new C.KJ(new Float32Array(n*m),n,m,1))}else if(n===A.MG){n=a2.w
m=a2.x
a4.l(0,o,new C.KN(new Uint32Array(n*m),n,m,1))}}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a2.at=o
n=q.Z()
m=$.fz()
m.$flags&2&&C.u(m)
m[0]=n
n=$.C8()
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
case"compression":a2.ax=A.eQ6[J.A(q.a,q.d++)]
break
case"dataWindow":o=q.Z()
n=$.fz()
n.$flags&2&&C.u(n)
n[0]=o
o=$.jq()
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
$.jq()
n[0]=q.Z()
n[0]=q.Z()
n[0]=q.Z()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.Z()
n=$.fz()
n.$flags&2&&C.u(n)
n[0]=o
$.C8()
break
case"screenWindowCenter":o=q.Z()
n=$.fz()
n.$flags&2&&C.u(n)
n[0]=o
$.C8()
n[0]=q.Z()
break
case"screenWindowWidth":o=q.Z()
n=$.fz()
n.$flags&2&&C.u(n)
n[0]=o
$.C8()
break
case"tiles":a2.dx=q.Z()
a2.dy=q.Z()
j=J.A(q.a,q.d++)
a2.fr=j&15
a2.fx=D.f.S(j,4)&15
break
case"type":i=q.N6()
if(i!=="deepscanline")if(i!=="deeptile")throw C.n(C.bJ("EXR Invalid type: "+i))
break
default:break}}x=a2.w
a2.b=C.fS(a3,a3,u,0,D.bQ,a2.x,a3,0,a2.d,a3,D.ax,x,!1)
for(x=new C.dQ(a4,a4.r,a4.e);x.q();){w=x.d
o=a2.b
o.toString
n=a4.h(0,w)
n.toString
o.aDG(w,n)}if(a2.db){x={}
w=a2.r
w===$&&C.b()
a2.id=a2.aPe(w[0],w[2],w[1],w[3])
w=a2.r
a2.k1=a2.aPf(w[0],w[2],w[1],w[3])
if(a2.fr!==2)a2.k1=1
w=a2.id
w.toString
v=a2.r
a2.fy=a2.afN(w,v[0],v[2],a2.dx,a2.fx)
v=a2.k1
v.toString
w=a2.r
a2.go=a2.afN(v,w[1],w[3],a2.dy,a2.fx)
w=a2.aPa()
a2.k2=w
v=a2.dx
v.toString
v=w*v
a2.k3=v
a2.CW=B.cbS(a2.ax,a2,v,a2.dy)
x.a=x.b=0
v=a2.id
v.toString
w=a2.k1
w.toString
a2.ay=C.zt(v*w,new B.aPc(x,a2),!0,y.R)}else{x=a2.x
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
x=B.cbS(a2.ax,a2,d,a3)
a2.CW=x
x=a2.cx=x.MF()
w=a2.ch
v=w.length
o=new Uint32Array(v)
a2.cy=o
for(--v,a0=0,a1=0;a1<=v;++a1){if(D.f.aC(a1,x)===0)a0=0
o[a1]=a0
a0+=w[a1]}x=D.f.eD(a2.x+x,x)
a2.ay=C.c([new Uint32Array(x-1)],y.w)}},
aPe(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.QN(w):u.Q_(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.QN(v):u.Q_(v))+1
break
default:throw C.n(C.bJ("Unknown LevelMode format."))}return x},
aPf(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.QN(w):u.Q_(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.QN(v):u.Q_(v))+1
break
default:throw C.n(C.bJ("Unknown LevelMode format."))}return x},
QN(d){var x
for(x=0;d>1;){++x
d=D.f.S(d,1)}return x},
Q_(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.f.S(d,1)}return x+w},
aPa(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&C.b()
v+=t}return v},
afN(d,e,f,g,h){var x,w,v,u,t,s,r=J.iM(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.f.cN(1,v)
t=D.f.eD(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.f.eD(s+g-1,g)}return r}}
B.afl.prototype={
bwm(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.aaA()
v.$flags&2&&C.u(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.aaA()
v.$flags&2&&C.u(v)
v[x]=u}}}}
B.aUU.prototype={
aLW(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.iM(t,y.bc)
for(x=0;x<t;++x)s[x]=new B.atG()
u.y=s
w=u.w
w.toString
v=D.f.av(w*u.x,2)
u.z=new Uint16Array(v)},
MF(){return this.x},
pt(a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
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
if(j>=8192)throw C.n(C.bJ("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.fZ(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.A(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.bat(i,d)
B.ctP(a4,a4.Z(),a3.z,r)
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
B.ctT(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.aNM(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=B.ob(!1,v*a3.x+73728)}v.a=0
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
return J.cn(D.K.ga5(v.c),0,v.a)},
G9(d,e,f){return this.pt(d,e,f,null,null)},
aNM(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&C.u(e)
e[w]=v}},
bat(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&C.u(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&C.u(e)
e[u]=0}return w-1}}
B.atG.prototype={}
B.aUV.prototype={
MF(){return this.x},
pt(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=D.nc.A0(a0.eM()),d=f.y
if(d==null){d=f.w
d.toString
d=f.y=B.ob(!1,f.x*d)}d.a=0
x=C.c([0,0,0,0],y.t)
w=new Uint32Array(1)
v=J.cn(D.bM.ga5(w),0,null)
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
for(g=0;g<4;++g)f.y.b0(v[g])}break
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
for(g=0;g<2;++g)f.y.b0(v[g])}break
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
for(g=0;g<4;++g)f.y.b0(v[g])}break}}d=f.y
return J.cn(D.K.ga5(d.c),0,d.a)},
G9(d,e,f){return this.pt(d,e,f,null,null)}}
B.aUW.prototype={
MF(){return 1},
pt(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=B.ob(!1,(h-d.d)*2)
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
u=$.lP()
u.$flags&2&&C.u(u)
u[0]=v
t=$.mH()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.b0(J.A(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.b0(J.A(d.a,d.d++))}q=J.cn(D.K.ga5(g.c),0,g.a)
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
G9(d,e,f){return this.pt(d,e,f,null,null)},
j(d){return C.r(this.w)}}
B.afm.prototype={
MF(){return this.x},
pt(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=D.nc.A0(d.eM())
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
G9(d,e,f){return this.pt(d,e,f,null,null)},
j(d){return C.r(this.w)}}
B.aPb.prototype={
iN(d){var x=new B.ady(C.c([],y.m))
x.aey(d)
return this.a=x},
i2(d){var x=this.a
if(x==null)return null
return x.c[d].b},
mn(d,e){this.a=B.ctR(d)
return this.i2(0)}}
B.UT.prototype={
boj(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
ac9(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new C.qQ(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.kN(u)
s=x.kM(u)
r=x.kL(u)
v.P0(u,t,s,r,u===q.c?0:255)}return v}}
B.UU.prototype={
aLF(d){var x,w,v,u,t,s,r=this
r.a=d.ad()
r.b=d.ad()
r.c=d.ad()
r.d=d.ad()
x=d.bx()
r.e=(x&64)!==0
if((x&128)!==0){r.f=B.cck(D.f.cN(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.A(d.a,d.d++)
t=J.A(d.a,d.d++)
s=J.A(d.a,d.d++)
v.d.n0(w,u,t,s)}}r.x=d.d-d.b}}
B.afn.prototype={}
B.aeg.prototype={
gbK(){return this.a},
gaO(){return this.b}}
B.aS8.prototype={
iN(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.f=C.cd(d,!1,null,0)
n.a=new B.aeg(C.c([],y.b))
if(!n.aj8())return null
try{while(u=n.f,t=u.d,t<u.c){s=u.a
u.d=t+1
x=J.A(s,t)
switch(x){case 44:w=n.ap3()
if(w==null){u=n.a
return u}u=w
u.r=n.e
u.w=n.c
if(n.b!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new B.UT(t,s,r,new C.qQ(new Uint8Array(C.b5(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.d}n.a.r.push(w)
break
case 33:u=n.f
v=J.A(u.a,u.d++)
if(J.o(v,255)){u=n.f
if(u.hi(J.A(u.a,u.d++))==="NETSCAPE2.0"){q=J.A(u.a,u.d++)
p=J.A(u.a,u.d++)
if(q===3&&p===1)n.r=u.ad()}else n.T5()}else if(J.o(v,249)){u=n.f
u.toString
n.b91(u)}else n.T5()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
b91(d){var x,w,v,u=this
d.bx()
x=d.bx()
u.e=d.ad()
u.d=d.bx()
d.bx()
u.c=D.f.S(x,2)&7
u.b=x&1
w=d.Pj(1,0)
if(J.A(w.a,w.d)===44){++d.d
v=u.ap3()
if(v==null)return
v.r=u.e
v.w=u.c
if(u.b!==0){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=B.cuD(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
i2(d){var x,w,v,u=this,t=u.f
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
x=v.x
x===$&&C.b()
t.d=x
return u.aS4(v)},
mn(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
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
k=C.fS(a6,a6,D.ax,0,D.bQ,r,a6,0,1,l.ac9(),D.ax,t,!1)
t=a8.w
if(t===2){t=a5.a.c.a
t=!D.K.gW(t)?t[0]:0
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
if(r!=null)r.l9(0,new C.v4(t))}else if(t!==3)if(a8.f!=null){t=w.a
t=t==null?a6:t.gda()
t.toString
f=C.C(x,x)
for(r=l.b,e=0;e<r;++e)f.l(0,e,l.boj(t.kN(e),t.kM(e),t.kL(e),t.m0(e)))
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
for(t=s.a,t=t.gU(t);t.q();){a4=t.gI()
if(a4.gao()!==0){r=a4.gj6()
q=a8.a
q===$&&C.b()
p=a4.gjo()
o=a8.b
o===$&&C.b()
k.yg(r+q,p+o,a4)}}v.l4(k)
w=k}return v},
ap3(){var x,w=this.f
if(w.d>=w.c)return null
x=new B.afn()
x.aLF(w);++this.f.d
this.T5()
return x},
aS4(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.w==null){n.w=new Uint8Array(256)
n.x=new Uint8Array(4095)
n.y=new Uint8Array(4096)
n.z=new Uint32Array(4096)}x=n.Q=n.f.bx()
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
D.bM.fu(x,0,4096,4098)
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
s=C.fS(m,m,D.ax,0,D.bQ,w,m,0,1,t.ac9(),D.ax,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&C.b()
if(x){x=d.b
x===$&&C.b()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+A.e48[q];o<w;o+=A.eJs[q],++p){if(!n.aj9(r))return s
n.aqG(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.aj9(r))return s
n.aqG(s,o,t,r)}return s},
aqG(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.dD(x,e,w,0,0)}},
aj8(){var x,w,v,u,t,s=this,r=s.f.hi(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.f.ad()
x=s.a
x.toString
x.b=s.f.ad()
w=s.f.bx()
x=s.a
x.toString
x.c=new C.v4(new Uint8Array(C.b5(C.c([s.f.bx()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=B.cck(D.f.cN(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
u=J.A(x.a,x.d++)
x=s.f
t=J.A(x.a,x.d++)
x=s.f
w=J.A(x.a,x.d++)
s.a.e.d.n0(v,u,t,w)}}s.a.toString
return!0},
aj9(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.aSh(d))return!1
if(x.as===0)x.T5()
return!0},
T5(){var x,w,v,u=this.f
if(u.d>=u.c)return!0
x=u.bx()
for(;;){if(x!==0){u=this.f
u=u.d<u.c}else u=!1
if(!u)break
u=this.f
w=u.d+=x
if(w>=u.c)return!0
v=u.a
u.d=w+1
x=J.A(v,w)}return!0},
aSh(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ay
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
w=u}}for(k=d.$flags|0;w<x;){s=l.ch=l.aSg()
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
t=l.a2m(v,s,t)
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
v=l.a2m(t,v,n)
o.$flags&2&&C.u(o)
o[q]=v}else{o===$&&C.b()
p.toString
v=l.a2m(t,p,n)
o.$flags&2&&C.u(o)
o[q]=v}}v=l.ch
v.toString
l.CW=v}}return!0},
aSg(){var x,w,v,u,t=this
if(t.cy>12)return null
while(x=t.ax,w=t.cy,x<w){x=t.aOl()
x.toString
w=t.at
v=t.ax
t.at=(w|D.f.cE(x,v))>>>0
t.ax=v+8}v=t.at
u=A.eMW[w]
t.at=D.f.eb(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
a2m(d,e,f){var x,w,v=0
for(;;){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
aOl(){var x,w,v=this,u=v.w,t=u[0],s=u.$flags|0
if(t===0){t=v.f.bx()
s&2&&C.u(u)
u[0]=t
u=v.w
t=u[0]
if(t===0)return null
D.K.dE(u,1,1+t,v.f.fZ(t).eM())
u=v.w
x=u[1]
u.$flags&2&&C.u(u)
u[1]=2
u[0]=u[0]-1}else{w=u[1]
s&2&&C.u(u)
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
B.KE.prototype={
H(){return"IcoType."+this.b}}
B.aU5.prototype={
gbK(){return 0},
gaO(){return 0}}
B.af_.prototype={}
B.aU3.prototype={
gaO(){return D.f.av(B.Cz.prototype.gaO.call(this),2)},
gLW(){return!(this.d===40&&this.f===32)&&B.Cz.prototype.gLW.call(this)}}
B.aU4.prototype={
iN(d){var x=C.cd(d,!1,null,0)
this.a=x
return this.b=B.ccB(x)},
mn(d,e){var x,w,v,u=this
if(u.iN(d)==null)return null
x=u.b.e.length
if(x===1)return u.i2(0)
for(w=null,v=0;v<u.b.e.length;++v){e=u.i2(v)
if(e==null)continue
if(w==null){e.w=D.bQ
w=e}else w.l4(e)}return w},
i2(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=this.a
if(a7!=null){x=this.b
x=x==null||a8>=x.d}else x=!0
if(x)return a6
w=this.b.e[a8]
x=a7.a
a7=a7.b+w.e
v=w.d
u=J.Io(x,a7,a7+v)
t=new C.Xr(C.c3T())
y.D.a(u)
if(t.Fb(u))return t.bR(u)
s=B.ob(!1,14)
s.iK(19778)
s.h4(v)
s.h4(0)
s.h4(0)
a7=C.cd(u,!1,a6,0)
x=B.cao(C.cd(J.cn(D.K.ga5(s.c),0,s.a),!1,a6,0))
v=a7.d
r=a7.Z()
q=a7.Z()
p=$.fz()
p.$flags&2&&C.u(p)
p[0]=q
q=$.jq()
o=q[0]
p[0]=a7.Z()
q=q[0]
n=a7.ad()
m=a7.ad()
l=A.UD[a7.Z()]
a7.Z()
p[0]=a7.Z()
p[0]=a7.Z()
p=a7.Z()
a7.Z()
k=new B.aU3(x,o,q,r,n,m,l,p,v)
k.aev(a7,x)
if(r!==40&&n!==1)return a6
j=p===0&&m<=8?40+4*D.f.cN(1,m):40+4*p
x.b=j
s.a-=4
s.h4(j)
i=C.cd(u,!1,a6,0)
h=new B.aKV(!0)
h.a=i
h.b=k
g=h.i2(0)
if(m>=32)return g
f=32-D.f.aC(o,32)
e=D.f.av(f===32?o:o+f,8)
for(a7=q<0,x=q===0,q=1/q<0,d=0;d<D.f.av(B.Cz.prototype.gaO.call(k),2);++d){if(!(x?q:a7))a0=d
else{v=g.a
v=v==null?a6:v.b
a0=(v==null?0:v)-1-d}a1=i.hC(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a6:v.cD(0,a0,a6)
if(a2==null)a2=new C.es()
for(a3=0;a3<o;){a4=J.A(a1.a,a1.d++)
a5=7
for(;;){if(!(a5>-1&&a3<o))break
if((a4&D.f.cE(1,a5))>>>0!==0)a2.sao(0)
a2.q();++a3;--a5}}}return g}}
B.abL.prototype={}
B.DV.prototype={}
B.DW.prototype={}
B.V7.prototype={}
B.aVb.prototype={}
B.zn.prototype={}
B.aVd.prototype={
aAu(d){var x,w,v,u,t,s=this,r=C.cd(d,!0,null,0)
s.a=r
x=r.Pj(2,0)
if(J.A(x.a,x.d)!==255||J.A(x.a,x.d+1)!==216)return!1
if(s.tG()!==216)return!1
w=s.tG()
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
break}w=s.tG()}return v&&u},
bwj(d){var x,w,v,u,t,s,r=this
r.a=C.cd(d,!0,null,0)
if(r.tG()!==216)return null
x=new B.aVh()
w=r.tG()
v=!1
u=!1
for(;;){if(w!==217){t=r.a
t=t.d<t.c}else t=!1
if(!t)break
switch(w){case 192:case 193:case 194:r.amX(w,r.amT())
v=!0
break
case 218:r.ap2()
u=!0
break
default:r.ap2()
break}w=r.tG()}t=r.d
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
p.b8V()
if(p.x.length!==1)throw C.n(C.bJ("Only single frame JPEGs supported"))
for(x=p.Q,w=0;v=p.d,u=v.z,w<u.length;++w){t=v.y.h(0,u[w])
v=t.a
u=p.d
s=u.f
r=t.b
q=u.r
u=p.aOt(u,t)
v=v===1&&s===2?1:0
x.push(new B.abL(u,v,r===1&&q===2?1:0))}},
b8V(){var x,w,v,u,t=this
if(t.tG()!==216)throw C.n(C.bJ("Start Of Image marker not found."))
x=t.tG()
for(;;){if(x!==217){w=t.a
w===$&&C.b()
w=w.d<w.c}else w=!1
if(!w)break
v=t.amT()
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:t.b8W(x,v)
break
case 219:t.b9_(v)
break
case 192:case 193:case 194:t.amX(x,v)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw C.n(C.bJ("Unhandled frame type "+D.f.hx(x,16)))
case 196:t.b8Z(v)
break
case 221:t.e=v.ad()
break
case 218:t.b9c(v)
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
break}if(x!==0)throw C.n(C.bJ("Unknown JPEG marker "+D.f.hx(x,16)))
break}x=t.tG()}},
ap2(){var x,w=this.a
w===$&&C.b()
x=w.ad()
if(x<2)throw C.n(C.bJ("Invalid Block"))
w=this.a
w.d=w.d+(x-2)},
amT(){var x,w=this.a
w===$&&C.b()
x=w.ad()
if(x<2)throw C.n(C.bJ("Invalid Block"))
return this.a.fZ(x-2)},
tG(){var x,w=this,v=w.a
v===$&&C.b()
if(v.d>=v.c)return 0
do{do{x=w.a.bx()
if(x!==255){v=w.a
v=v.d<v.c}else v=!1}while(v)
v=w.a
if(v.d>=v.c)return x
do{x=w.a.bx()
if(x===255){v=w.a
v=v.d<v.c}else v=!1}while(v)
if(x===0){v=w.a
v=v.d<v.c}else v=!1}while(v)
return x},
b90(d){if(d.Z()!==1165519206)return
if(d.ad()!==0)return
this.r.hT(d)},
b8W(d,e){var x,w,v,u,t=this,s=e
if(d===224){x=s
w=!1
if(J.A(x.a,x.d)===74){x=s
if(J.A(x.a,x.d+1)===70){x=s
if(J.A(x.a,x.d+2)===73){x=s
if(J.A(x.a,x.d+3)===70){x=s
x=J.A(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new B.aVi()
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
s.Pj(14+3*w*v,14)}}else if(d===225)t.b90(s)
else if(d===238){x=s
w=!1
if(J.A(x.a,x.d)===65){x=s
if(J.A(x.a,x.d+1)===100){x=s
if(J.A(x.a,x.d+2)===111){x=s
if(J.A(x.a,x.d+3)===98){x=s
if(J.A(x.a,x.d+4)===101){x=s
x=J.A(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){t.c=new B.aVb()
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
x.d=J.A(w.a,w.d+11)}}else if(d===254)try{s.bwq()}catch(u){C.aF(u)}},
b9_(d){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=this.w;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
t=J.A(u,v)
s=D.f.S(t,4)
t&=15
if(t>=4)throw C.n(C.bJ("Invalid number of quantization tables"))
v=w[t]
if(v==null){v=new Int16Array(64)
w[t]=v}for(u=s!==0,r=0;r<64;++r){q=u?d.ad():J.A(d.a,d.d++)
p=A.xa[r]
v.$flags&2&&C.u(v)
v[p]=q}}if(u)throw C.n(C.bJ("Bad length for DQT block"))},
amX(d,e){var x,w,v,u,t,s,r,q=this
if(q.d!=null)throw C.n(C.bJ("Duplicate JPG frame data found."))
x=q.d=new B.afG(C.C(y.p,y.c),C.c([],y.t))
x.b=d===194
x.c=e.bx()
x=q.d
x.toString
x.d=e.ad()
x=q.d
x.toString
x.e=e.ad()
w=e.bx()
for(x=q.w,v=0;v<w;++v){u=J.A(e.a,e.d++)
t=J.A(e.a,e.d++)
s=D.f.S(t,4)
r=J.A(e.a,e.d++)
q.d.z.push(u)
q.d.y.l(0,u,new B.zn(s&15,t&15,x,r))}q.d.lX()
q.x.push(q.d)},
b8Z(d){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=this.z,v=this.y;u=d.d,u<x;){t=d.a
d.d=u+1
s=J.A(t,u)
r=new Uint8Array(16)
for(q=0,p=0;p<16;++p){r[p]=J.A(d.a,d.d++)
q+=r[p]}o=d.hC(q)
d.d=d.d+(o.c-o.d)
n=o.eM()
if((s&16)!==0){s-=16
m=v}else m=w
if(m.length<=s)D.i.su(m,s+1)
m[s]=this.aOA(r,n)}},
b9c(d){var x,w,v,u,t,s,r,q=this,p=d.bx()
if(p<1||p>4)throw C.n(C.bJ("Invalid SOS block"))
x=C.zt(p,new B.aVf(q,d),!0,y.c)
w=d.bx()
v=d.bx()
u=d.bx()
t=D.f.S(u,4)
s=q.a
s===$&&C.b()
r=q.d
t=new B.afH(s,r,x,q.e,w,v,t&15,u&15)
s=r.w
s===$&&C.b()
t.f=s
t.r=r.b
t.oL()},
aOA(d,e){var x,w,v,u,t,s,r,q,p,o,n=C.c([],y.G),m=16
for(;;){if(!(m>0&&d[m-1]===0))break;--m}x=y.T
n.push(new B.Po(C.c([],x)))
w=n[0]
for(v=0,u=0;u<m;){for(t=0;t<d[u];++t){w=n.pop()
s=w.a
r=s.length
q=w.b
if(r<=q)D.i.su(s,q+1)
s[w.b]=new B.V7(e[v])
while(s=w.b,s>0)w=n.pop()
w.b=s+1
n.push(w)
for(;n.length<=u;w=p){s=C.c([],x)
p=new B.Po(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.i.su(r,o+1)
r[w.b]=new B.DW(s)}++v}++u
if(u<m){s=C.c([],x)
p=new B.Po(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.i.su(r,o+1)
r[w.b]=new B.DW(s)
w=p}}return n[0].a},
aOt(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.e
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
B.cKF(k,j[p][l],u,v)
i=l<<3>>>0
for(h=0,g=0;g<8;++g){f=t[o+g]
for(n=0;n<8;++n,h=e){f.toString
e=h+1
k=u[h]
f.$flags&2&&C.u(f)
f[i+n]=k}}}}return t}}
B.Po.prototype={}
B.afG.prototype={
lX(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=new C.dQ(x,x.r,x.e);w.q();){v=x.h(0,w.d)
g.f=Math.max(g.f,v.a)
g.r=Math.max(g.r,v.b)}w=g.e
w.toString
g.w=D.m.dZ(w/8/g.f)
w=g.d
w.toString
g.x=D.m.dZ(w/8/g.r)
for(w=new C.dQ(x,x.r,x.e),u=y.k,t=y.H;w.q();){s=x.h(0,w.d)
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
k=J.iM(l,t)
for(j=0;j<l;++j){i=J.iM(m,u)
for(h=0;h<m;++h)i[h]=new Int32Array(64)
k[j]=i}s.e=p
s.f=n
s.r=k}}}
B.aVh.prototype={
gbK(){return this.a},
gaO(){return this.b}}
B.aVi.prototype={}
B.afH.prototype={
oL(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.y,f=g.length,e=h.r
e.toString
if(e)if(h.Q===0)x=h.at===0?h.gaRZ():h.gaS0()
else x=h.at===0?h.gaRQ():h.gaRS()
else x=h.gaRW()
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
for(l=0;l<m;++l)for(k=0;k<n;++k)h.aS5(r,x,t,l,k)}++t;++q}}h.ch=0
j=J.A(w.a,w.d)
i=J.A(w.a,w.d+1)
if(j===255)if(i>=208&&i<=215)w.d+=2
else break}},
zh(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.f.j8(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.bx()
w.ay=x
if(x===255)if(v.bx()!==0)return null
w.ch=7
return D.f.S(w.ay,7)&1},
IE(d){var x,w=new B.DW(d)
while(x=this.zh(),x!=null){if(w instanceof B.DW)w=w.a[x]
if(w instanceof B.V7)return w.a}return null},
a4j(d){var x,w
for(x=0;d>0;){w=this.zh()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
Jh(d){var x
if(d==null)return 0
if(d===1)return this.zh()===1?1:-1
x=this.a4j(d)
if(x==null)return 0
if(x>=D.f.cE(1,d-1))return x
return x+D.f.cN(-1,d)+1},
aRX(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&C.b()
x=r.IE(q)
w=x===0?0:r.Jh(x)
q=d.y
q===$&&C.b()
q+=w
d.y=q
e.$flags&2&&C.u(e)
e[0]=q
for(v=1;v<64;){q=d.x
q===$&&C.b()
u=r.IE(q)
if(u==null)break
t=u&15
s=u>>>4
if(t===0){if(s<15)break
v+=16
continue}v+=s
t=r.Jh(t)
e[A.xa[v]]=t;++v}},
aS_(d,e){var x,w,v=d.w
v===$&&C.b()
x=this.IE(v)
w=x===0?0:D.f.cN(this.Jh(x),this.ax)
v=d.y
v===$&&C.b()
v+=w
d.y=v
e.$flags&2&&C.u(e)
e[0]=v},
aS1(d,e){var x=e[0],w=this.zh()
w.toString
w=D.f.cN(w,this.ax)
e.$flags&2&&C.u(e)
e[0]=(x|w)>>>0},
aRR(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.CW
if(o>0){p.CW=o-1
return}x=p.Q
w=p.as
for(o=p.ax,v=e.$flags|0;x<=w;){u=d.x
u===$&&C.b()
u=p.IE(u)
u.toString
t=u&15
s=u>>>4
if(t===0){if(s<15){o=p.a4j(s)
o.toString
p.CW=o+D.f.cN(1,s)-1
break}x+=16
continue}x+=s
r=A.xa[x]
u=p.Jh(t)
q=D.f.cN(1,o)
v&2&&C.u(e)
e[r]=u*q;++x}},
aRT(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.Q,n=p.as
A:for(x=p.ax,w=e.$flags|0,v=0;o<=n;){u=A.xa[o]
t=p.cx
switch(t){case 0:t=d.x
t===$&&C.b()
s=p.IE(t)
if(s==null)throw C.n(C.bJ("Invalid progressive encoding"))
r=s&15
v=s>>>4
if(r===0)if(v<15){t=p.a4j(v)
t.toString
p.CW=t+D.f.cN(1,v)
p.cx=4}else{p.cx=1
v=16}else{if(r!==1)throw C.n(C.bJ("invalid ACn encoding"))
p.cy=p.Jh(r)
p.cx=v!==0?2:3}continue A
case 1:case 2:q=e[u]
if(q!==0){t=p.zh()
t.toString
t=D.f.cN(t,x)
w&2&&C.u(e)
e[u]=q+t}else{--v
if(v===0)p.cx=t===2?3:0}break
case 3:t=e[u]
if(t!==0){q=p.zh()
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
if(t!==0){q=p.zh()
q.toString
q=D.f.cN(q,x)
w&2&&C.u(e)
e[u]=t+q}break}++o}if(p.cx===4)if(--p.CW===0)p.cx=0},
aS5(d,e,f,g,h){var x,w,v=this.f
v===$&&C.b()
x=D.f.eD(f,v)*d.b+g
w=D.f.aC(f,v)*d.a+h
v=d.r
v===$&&C.b()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
B.VD.prototype={
iN(d){C.cd(d,!0,null,0)
return B.aVe().bwj(d)},
mn(d,e){var x=B.aVe()
x.hT(d)
if(x.x.length!==1)throw C.n(C.bJ("only single frame JPEGs supported"))
return B.cJr(x)},
bR(d){return this.mn(d,null)}}
B.zT.prototype={
H(){return"PnmFormat."+this.b}}
B.Fc.prototype={
gbK(){return this.a},
gaO(){return this.b}}
B.b1W.prototype={
Fb(d){var x
this.b=C.cd(d,!1,null,0)
x=this.R4()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
mn(d,e){if(this.iN(d)==null)return null
return this.i2(0)},
iN(d){var x,w,v=this
v.b=C.cd(d,!1,null,0)
x=v.R4()
if(x==="P1"){w=v.a=new B.Fc(A.rQ)
w.e=A.a3H}else if(x==="P2"){w=v.a=new B.Fc(A.rQ)
w.e=A.a3I}else if(x==="P5"){w=v.a=new B.Fc(A.rQ)
w.e=A.EM}else if(x==="P3"){w=v.a=new B.Fc(A.rQ)
w.e=A.a3J}else if(x==="P6"){w=v.a=new B.Fc(A.rQ)
w.e=A.EN}else return v.b=null
w.a=v.J3()
w=v.a
w.toString
w.b=v.J3()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
i2(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===A.a3H){x=q.a
w=C.fS(r,r,D.eH,0,D.bQ,q.b,r,0,1,r,D.ax,x,!1)
for(q=w.a,q=q.gU(q);q.q();){v=q.gI()
if(s.R4()==="1")v.it(1,1,1)
else v.it(0,0,0)}return w}else if(x===A.a3I||x===A.EM){u=s.J3()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=C.fS(r,r,s.avL(u),0,D.bQ,q,r,0,1,r,D.ax,x,!1)
for(q=w.a,q=q.gU(q);q.q();){v=q.gI()
t=s.Sr(s.a.e,u)
v.it(t,t,t)}return w}else if(x===A.a3J||x===A.EN){u=s.J3()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=C.fS(r,r,s.avL(u),0,D.bQ,q,r,0,3,r,D.ax,x,!1)
for(q=w.a,q=q.gU(q);q.q();)q.gI().it(s.Sr(s.a.e,u),s.Sr(s.a.e,u),s.Sr(s.a.e,u))
return w}return r},
avL(d){if(d>255)return D.cQ
if(d>15)return D.ax
if(d>3)return D.kA
if(d>1)return D.kz
return D.eH},
Sr(d,e){if(d===A.EM||d===A.EN)return this.b.bx()
return this.J3()},
J3(){var x,w,v=this.R4()
if(J.aY(v)===0)return 0
try{x=C.fy(v,null)
return x}catch(w){return 0}},
R4(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.i.eg(x,0)
w=D.n.aI(t.bwp())
if(w.length===0)return""
while(D.n.be(w,"#"))w=D.n.aI(this.b.az5(70))
t=y.U
v=C.J(new C.al(C.c(w.split(" "),y.s),new B.b1X(),t),t.i("z.E"))
for(t=v.length,u=0;u<t;++u)if(D.n.be(v[u],"#")){D.i.su(v,u)
break}D.i.J(x,v)
if(x.length===0)return""
return D.i.eg(x,0)}}
B.aio.prototype={}
B.aip.prototype={}
B.u_.prototype={}
B.air.prototype={}
B.ais.prototype={}
B.aiv.prototype={}
B.aiw.prototype={}
B.XK.prototype={}
B.aiu.prototype={}
B.b3D.prototype={
aM6(d){var x,w,v,u,t=this
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
B.Mg.prototype={
az1(d,e,f,g,h,i,j){if(d.c-d.d<2)return
if(h==null)h=d.ad()
switch(h){case 0:g.toString
this.b9b(d,e,f,g)
break
case 1:if(i==null)i=this.b98(d,f)
g.toString
this.b9a(d,e,f,g,i,j)
break
default:throw C.n(C.bJ("Unsupported compression: "+h))}},
bwo(d,e,f,g){return this.az1(d,e,f,g,null,null,0)},
b98(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.ad()
return w},
b9b(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.K.fu(x,0,w,255)
return}this.c=d.fZ(w).eM()},
b9a(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.K.fu(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.hC(h[w])
d.d=d.d+(s.c-s.d)
x=this.c
x.toString
this.aSa(s,x,v)
v+=e}},
aSa(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.A(t,u)
t=$.lP()
t.$flags&2&&C.u(t)
t[0]=u
s=$.mH()[0]
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
gbQ(){return this.a}}
B.r0.prototype={
H(){return"PsdColorMode."+this.b}}
B.b3F.prototype={
aM7(d){var x,w,v=this
v.as=C.cd(d,!0,null,0)
v.b8C()
if(v.c!==943870035)return
x=v.as.Z()
v.as.fZ(x)
x=v.as.Z()
v.at=v.as.fZ(x)
x=v.as.Z()
v.ax=v.as.fZ(x)
w=v.as
v.ay=w.fZ(w.c-w.d)},
oL(){var x,w=this
if(w.c===943870035){x=w.as
x===$&&C.b()
x=x==null}else x=!0
if(x)return!1
w.b96()
w.b97()
w.b99()
w.ay=w.ax=w.at=w.as=null
return!0},
au8(){if(!this.oL())return null
return this.bx_()},
bx_(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.y
if(d!=null)return d
d=f.a
d=C.fS(e,e,D.ax,0,D.bQ,f.b,e,0,4,e,D.ax,d,!1)
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
if(m==null)m=new C.es()
l=D.m.F(m.ga7())
k=D.m.F(m.gah())
j=D.m.F(m.gai())
i=D.m.F(m.gao())
p.toString
if(p>=0&&p<f.a&&d&&s<f.b){n=w.b
n.toString
h=f.y.a
g=h==null?e:h.cD(n+o,q,e)
if(g==null)g=new C.es()
f.aO7(D.m.F(g.ga7()),D.m.F(g.gah()),D.m.F(g.gai()),D.m.F(g.gao()),l,k,j,i,u,v,g)}++o;++p}++r;++s}}++x}d=f.y
d.toString
return d},
aO7(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s=k/255*m
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
case 1836411936:u=D.f.S(d*h,8)
v=D.f.S(e*i,8)
w=D.f.S(f*j,8)
x=k
break
case 1768188278:u=B.b3G(d,h)
v=B.b3G(e,i)
w=B.b3G(f,j)
x=k
break
case 1818391150:u=B.b3I(d,h)
v=B.b3I(e,i)
w=B.b3I(f,j)
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
case 1935897198:u=B.c4J(d,h)
v=B.c4J(e,i)
w=B.c4J(f,j)
x=k
break
case 1684633120:u=B.b3H(d,h)
v=B.b3H(e,i)
w=B.b3H(f,j)
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
case 1870030194:u=B.c4H(d,h,g,k)
v=B.c4H(e,i,g,k)
w=B.c4H(f,j,g,k)
x=k
break
case 1934387572:u=B.c4K(d,h)
v=B.c4K(e,i)
w=B.c4K(f,j)
x=k
break
case 1749838196:u=B.c4F(d,h)
v=B.c4F(e,i)
w=B.c4F(f,j)
x=k
break
case 1984719220:u=B.c4L(d,h)
v=B.c4L(e,i)
w=B.c4L(f,j)
x=k
break
case 1816947060:u=B.c4G(d,h)
v=B.c4G(e,i)
w=B.c4G(f,j)
x=k
break
case 1884055924:u=B.c4I(d,h)
v=B.c4I(e,i)
w=B.c4I(f,j)
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
case 1936553316:u=B.c4E(d,h)
v=B.c4E(e,i)
w=B.c4E(f,j)
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
n.sah(D.m.F(e*t+v*s))
n.sai(D.m.F(f*t+w*s))
n.sao(D.m.F(g*t+x*s))},
b8C(){var x,w,v=this,u=v.as
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
v.r=A.f52[v.as.ad()]},
b96(){var x,w,v,u,t,s,r=this,q=r.at
q.d=q.b
for(q=r.z;x=r.at,x.d<x.c;){w=x.Z()
v=r.at.ad()
x=r.at
u=J.A(x.a,x.d++)
t=r.at.hi(u)
if((u&1)===0)++r.at.d
u=r.at.Z()
x=r.at
s=x.hC(u)
x.d=x.d+(s.c-s.d)
if((u&1)===1)++r.at.d
if(w===943868237)q.l(0,v,new B.aiq(v,t))}},
b97(){var x,w,v,u,t,s,r,q,p,o=this,n=o.ax
n.d=n.b
x=n.Z()
if((x&1)!==0)++x
w=o.ax.fZ(x)
n=y.l
o.w=C.c([],n)
if(x>0){v=w.ad()
u=$.lO()
u.$flags&2&&C.u(u)
u[0]=v
t=$.mG()[0]
if(t<0)t=-t
for(v=y.N,u=y.O,s=y.v,r=0;r<t;++r){q=new B.ait(C.C(v,u),C.c([],n),C.c([],s))
q.aM8(w)
o.w.push(q)}}for(r=0;n=o.w,r<n.length;++r)n[r].bwi(w,o)
x=o.ax.Z()
p=o.ax.fZ(x)
if(x>0){p.ad()
p.ad()
p.ad()
p.ad()
p.ad()
p.ad()
p.bx()}},
b99(){var x,w,v,u,t,s,r=this,q=r.ay
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
s=new B.Mg(s)
s.az1(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=B.cf_(r.r,r.f,r.a,r.b,r.x)},
gbK(){return this.a},
gaO(){return this.b}}
B.aiq.prototype={
gbQ(){return this.a}}
B.ait.prototype={
aM8(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a1.Z(),a0=$.fz()
a0.$flags&2&&C.u(a0)
a0[0]=d
d=$.jq()
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
a0=$.lO()
a0.$flags&2&&C.u(a0)
a0[0]=d
v=$.mG()[0]
a1.Z()
e.as.push(new B.Mg(v))}u=a1.Z()
if(u!==943868237)throw C.n(C.bJ("Invalid PSD layer signature: "+D.f.hx(u,16)))
e.r=a1.Z()
e.w=a1.bx()
a1.bx()
e.y=a1.bx()
if(a1.bx()!==0)throw C.n(C.bJ("Invalid PSD layer data"))
t=a1.Z()
s=a1.fZ(t)
if(t>0){t=s.Z()
if(t>0){r=s.fZ(t)
d=r.d
r.Z()
r.Z()
r.Z()
r.Z()
r.bx()
r.bx()
if(r.c-d===20)r.d+=2
else{r.bx()
r.bx()
r.Z()
r.Z()
r.Z()
r.Z()}}t=s.Z()
if(t>0)new B.b3D().aM6(s.fZ(t))
t=s.bx()
e.Q=s.hi(t)
q=4-D.f.aC(t,4)-1
if(q>0)s.d+=q
for(d=s.c,a0=e.ay,p=e.cy,o=y.C;s.d<d;){u=s.Z()
if(u!==943868237)throw C.n(C.bJ("PSD invalid signature for layer additional data: "+D.f.hx(u,16)))
n=s.hi(4)
t=s.Z()
m=s.hC(t)
l=s.d+(m.c-m.d)
s.d=l
if((t&1)===1)s.d=l+1
a0.l(0,n,B.cxQ(n,m))
if(n==="lrFX"){k=C.bS(o.a(a0.h(0,"lrFX")).b,null,0)
k.ad()
j=k.ad()
for(i=0;i<j;++i){k.hi(4)
h=k.hi(4)
g=k.Z()
if(h==="dsdw"){f=new B.aip()
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
k.hi(8)
f.b=J.A(k.a,k.d++)!==0
J.A(k.a,k.d++)
J.A(k.a,k.d++)
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()}else if(h==="isdw"){f=new B.ais()
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
k.hi(8)
f.b=J.A(k.a,k.d++)!==0
J.A(k.a,k.d++)
J.A(k.a,k.d++)
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()}else if(h==="oglw"){f=new B.aiv()
p.push(f)
f.a=k.Z()
k.Z()
k.Z()
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
k.hi(8)
f.b=J.A(k.a,k.d++)!==0
J.A(k.a,k.d++)
if(f.a===2){k.ad()
k.ad()
k.ad()
k.ad()
k.ad()}}else if(h==="iglw"){f=new B.air()
p.push(f)
f.a=k.Z()
k.Z()
k.Z()
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()
k.hi(8)
f.b=J.A(k.a,k.d++)!==0
J.A(k.a,k.d++)
if(f.a===2){J.A(k.a,k.d++)
k.ad()
k.ad()
k.ad()
k.ad()
k.ad()}}else if(h==="bevl"){f=new B.aio()
p.push(f)
f.a=k.Z()
k.Z()
k.Z()
k.Z()
k.hi(8)
k.hi(8)
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
k.ad()}}else if(h==="sofi"){f=new B.aiw()
p.push(f)
f.a=k.Z()
k.hi(4)
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
bwi(d,e){var x,w,v,u,t,s=this,r=0
for(;;){x=s.as
x===$&&C.b()
if(!(r<x.length))break
x=x[r]
w=s.e
w===$&&C.b()
v=s.f
v===$&&C.b()
x.bwo(d,w,v,e.f);++r}w=e.r
v=e.f
u=s.e
u===$&&C.b()
t=s.f
t===$&&C.b()
s.cx=B.cf_(w,v,u,t,x)}}
B.Mh.prototype={}
B.b3E.prototype={
mn(d,e){var x,w,v,u=null,t=B.c4D(d)
this.a=t
x=1
if(x===1){t=t.au8()
return t}for(w=u,v=0;v<x;++v){t=this.a
e=t==null?u:t.au8()
if(e==null)continue
if(w==null){e.w=A.dZ7
w=e}else w.l4(e)}return w},
iN(d){return this.a=B.c4D(d)}}
B.aiA.prototype={}
B.wp.prototype={
aD(d,e){return new B.wp(this.a*e,this.b*e,this.c*e)},
a_(d,e){return new B.wp(this.a+e.a,this.b+e.b,this.c+e.c)},
a4(d,e){return new B.wp(this.a-e.a,this.b-e.b,this.c-e.c)}}
B.kW.prototype={
aD(d,e){var x=this
return new B.kW(x.a*e,x.b*e,x.c*e,x.d*e)},
a_(d,e){var x=this
return new B.kW(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
a4(d,e){var x=this
return new B.kW(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
B.XO.prototype={
gbK(){return this.a},
gaO(){return this.b}}
B.Mk.prototype={
gaO(){return this.f},
gbK(){return this.r}}
B.aiz.prototype={
gbK(){return this.a},
gaO(){return this.b}}
B.po.prototype={
sKv(d){var x=this.a,w=this.b
x.$flags&2&&C.u(x)
x[w+1]=d},
NZ(){var x=this.e,w=this.d
if(x)return new B.wp(A.ld[w>>>9],A.ld[w>>>4&31],A.eN[w&15])
else return new B.wp(A.eN[w>>>7&15],A.eN[w>>>3&15],A.x9[w&7])},
O0(){var x=this.e,w=this.d
if(x)return new B.kW(A.ld[w>>>9],A.ld[w>>>4&31],A.eN[w&15],255)
else return new B.kW(A.eN[w>>>7&15],A.eN[w>>>3&15],A.x9[w&7],A.x9[w>>>11&7])},
O_(){var x=this.r,w=this.f
if(x)return new B.wp(A.ld[w>>>10],A.ld[w>>>5&31],A.ld[w&31])
else return new B.wp(A.eN[w>>>8&15],A.eN[w>>>4&15],A.eN[w&15])},
O1(){var x=this.r,w=this.f
if(x)return new B.kW(A.ld[w>>>10],A.ld[w>>>5&31],A.ld[w&31],255)
else return new B.kW(A.eN[w>>>8&15],A.eN[w>>>4&15],A.eN[w&15],A.x9[w>>>12&7])},
Ii(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
r1(){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sKv(x.Ii())
x.d=w>>>1&16383
x.sKv(x.Ii())
x.e=(w>>>15&1)===1
x.sKv(x.Ii())
x.f=w>>>16&32767
x.sKv(x.Ii())
x.r=(w>>>31&1)===1
x.sKv(x.Ii())}}
B.b3P.prototype={
iN(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.aRV(d)
if(x!=null){w.a=d
return w.b=x}}x=w.aS9(d)
if(x!=null){w.a=d
return w.b=x}x=w.aS7(d)
if(x!=null){w.a=d
return w.b=x}return null},
aS9(d){var x,w,v=C.cd(d,!1,null,0)
if(v.Z()!==52)return null
if(v.Z()!==55727696)return null
x=C.c([0,0,0,0],y.t)
w=new B.Mk(x)
v.Z()
w.b=v.Z()
x[0]=v.bx()
x[1]=v.bx()
x[2]=v.bx()
x[3]=v.bx()
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
aS7(d){var x,w,v=C.cd(d,!1,null,0)
if(v.Z()!==52)return null
x=new B.XO()
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
aRV(d){var x,w,v,u,t,s,r=null,q=d.length,p=C.cd(d,!1,r,0)
if(p.Z()!==0)return r
x=new B.aiz()
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
if(u instanceof B.aiz){u=u.a
x=v.b.gaO()
w=v.a
w.toString
return v.a1l(u,x,w)}else if(u instanceof B.XO){u=v.a
u.toString
return v.aS6(u)}else if(u instanceof B.Mk){u=v.a
u.toString
return v.aS8(u)}return null},
mn(d,e){if(this.iN(d)==null)return null
return this.i2(0)},
aS6(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
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
switch(x.d&255){case 16:s=C.fS(k,k,D.ax,0,D.bQ,t,k,0,4,k,D.ax,u,!1)
for(x=s.a,x=x.gU(x);x.q();){r=x.gI()
q=J.A(w.a,w.d++)
p=J.A(w.a,w.d++)
r.sa7(p&240)
r.sah((p&15)<<4)
r.sai(q&240)
r.sao((q&15)<<4)}return s
case 17:s=C.fS(k,k,D.ax,0,D.bQ,t,k,0,4,k,D.ax,u,!1)
for(x=s.a,x=x.gU(x);x.q();){r=x.gI()
o=w.ad()
n=(o&1)!==0?255:0
r.sa7(o>>>8&248)
r.sah(o>>>3&248)
r.sai((o&62)<<2)
r.sao(n)}return s
case 18:s=C.fS(k,k,D.ax,0,D.bQ,t,k,0,4,k,D.ax,u,!1)
for(x=s.a,x=x.gU(x);x.q();){r=x.gI()
r.sa7(J.A(w.a,w.d++))
r.sah(J.A(w.a,w.d++))
r.sai(J.A(w.a,w.d++))
r.sao(J.A(w.a,w.d++))}return s
case 19:s=C.fS(k,k,D.ax,0,D.bQ,t,k,0,3,k,D.ax,u,!1)
for(x=s.a,x=x.gU(x);x.q();){r=x.gI()
o=w.ad()
r.sa7(o>>>8&248)
r.sah(o>>>3&252)
r.sai((o&31)<<3)}return s
case 20:s=C.fS(k,k,D.ax,0,D.bQ,t,k,0,3,k,D.ax,u,!1)
for(x=s.a,x=x.gU(x);x.q();){r=x.gI()
o=w.ad()
r.sa7((o&31)<<3)
r.sah(o>>>2&248)
r.sai(o>>>7&248)}return s
case 21:s=C.fS(k,k,D.ax,0,D.bQ,t,k,0,3,k,D.ax,u,!1)
for(x=s.a,x=x.gU(x);x.q();){r=x.gI()
r.sa7(J.A(w.a,w.d++))
r.sah(J.A(w.a,w.d++))
r.sai(J.A(w.a,w.d++))}return s
case 22:s=C.fS(k,k,D.ax,0,D.bQ,t,k,0,1,k,D.ax,u,!1)
for(x=s.a,x=x.gU(x);x.q();)x.gI().sa7(J.A(w.a,w.d++))
return s
case 23:s=C.fS(k,k,D.ax,0,D.bQ,t,k,0,4,k,D.ax,u,!1)
for(x=s.a,x=x.gU(x);x.q();){r=x.gI()
n=J.A(w.a,w.d++)
m=J.A(w.a,w.d++)
r.sa7(m)
r.sah(m)
r.sai(m)
r.sao(n)}return s
case 24:return k
case 25:return x.y===0?l.ahh(u,t,w.eM()):l.a1l(u,t,w.eM())}return k},
aS8(d){var x,w,v,u=this
if(!(u.b instanceof B.Mk))return null
x=C.cd(d,!1,null,0)
w=x.d+=52
v=y.i.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.ahh(v.r,v.f,x.eM())
case 3:return u.a1l(v.r,v.f,x.eM())}return null},
ahh(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=C.fS(b5,b5,D.ax,0,D.bQ,c6,b5,0,3,b5,D.ax,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.lR(D.K.ga5(c7),0,null),c0=new B.po(b9),c1=new B.po(J.lR(D.K.ga5(c7),0,null)),c2=new B.po(J.lR(D.K.ga5(c7),0,null)),c3=new B.po(J.lR(D.K.ga5(c7),0,null)),c4=new B.po(J.lR(D.K.ga5(c7),0,null))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=B.wq(v,x)<<1>>>0
c0.r1()
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=B.wq(l,p)<<1>>>0
c1.r1()
c2.b=B.wq(k,p)<<1>>>0
c2.r1()
c3.b=B.wq(l,o)<<1>>>0
c3.r1()
c4.b=B.wq(k,o)<<1>>>0
c4.r1()
j=c1.NZ()
i=A.dK[r][0]
h=c2.NZ()
g=A.dK[r][1]
f=c3.NZ()
e=A.dK[r][2]
d=c4.NZ()
a0=A.dK[r][3]
a1=c1.O_()
a2=A.dK[r][0]
a3=c2.O_()
a4=A.dK[r][1]
a5=c3.O_()
a6=A.dK[r][2]
a7=c4.O_()
a8=A.dK[r][3]
a9=A.Uk[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.f.S((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.f.S((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.f.S((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.dD(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
a1l(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=C.fS(a4,a4,D.ax,0,D.bQ,b5,a4,0,4,a4,D.ax,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.lR(D.K.ga5(b6),0,null),a9=new B.po(a8),b0=new B.po(J.lR(D.K.ga5(b6),0,null)),b1=new B.po(J.lR(D.K.ga5(b6),0,null)),b2=new B.po(J.lR(D.K.ga5(b6),0,null)),b3=new B.po(J.lR(D.K.ga5(b6),0,null))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=B.wq(v,x)<<1>>>0
a9.r1()
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=B.wq(l,p)<<1>>>0
b0.r1()
b1.b=B.wq(k,p)<<1>>>0
b1.r1()
b2.b=B.wq(l,o)<<1>>>0
b2.r1()
b3.b=B.wq(k,o)<<1>>>0
b3.r1()
j=b0.O0()
i=A.dK[r][0]
h=b1.O0()
g=A.dK[r][1]
g=new B.kW(j.a*i,j.b*i,j.c*i,j.d*i).a_(0,new B.kW(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.O0()
i=A.dK[r][2]
i=g.a_(0,new B.kW(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.O0()
g=A.dK[r][3]
f=i.a_(0,new B.kW(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.O1()
h=A.dK[r][0]
i=b1.O1()
j=A.dK[r][1]
j=new B.kW(g.a*h,g.b*h,g.c*h,g.d*h).a_(0,new B.kW(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.O1()
h=A.dK[r][2]
h=j.a_(0,new B.kW(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.O1()
j=A.dK[r][3]
e=h.a_(0,new B.kW(i.a*j,i.b*j,i.c*j,i.d*j))
d=A.Uk[s+t&3]
j=d[0]
i=d[1]
a0=D.f.S(f.a*j+e.a*i,7)
a1=D.f.S(f.b*j+e.b*i,7)
a2=D.f.S(f.c*j+e.c*i,7)
a3=D.f.S(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.ic(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
B.am5.prototype={
hT(d){var x,w=this
if(d.c-d.d<18)return
w.a=d.bx()
w.b=d.bx()
x=d.bx()
w.c=x<12?A.eQp[x]:A.yz
d.ad()
w.e=d.ad()
w.f=d.bx()
d.ad()
d.ad()
w.x=d.ad()
w.y=d.ad()
w.z=d.bx()
w.Q=d.bx()},
axn(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===A.mN||w===A.mO){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0},
gbK(){return this.x},
gaO(){return this.y}}
B.mv.prototype={
H(){return"TgaImageType."+this.b}}
B.bhv.prototype={
mn(d,e){if(this.iN(d)==null)return null
return this.i2(0)},
iN(d){var x,w,v,u,t=this
t.a=new B.am5(A.yz)
x=C.cd(d,!1,null,0)
t.b=x
w=x.fZ(18)
t.a.hT(w)
x=t.a
if(!x.axn())return null
v=t.b
v.d+=x.a
u=x.c
if(u===A.mN||u===A.mO)x.as=v.fZ(x.e*D.f.S(x.f,3)).eM()
x=t.a
x.ax=t.b.d
return x},
i2(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===A.a7_)return x.ahg()
else if(w===A.a6Z||w===A.mO)return x.aSc()
else if(w===A.mN)return x.ahg()
return null},
ahc(d,e){var x,w,v,u,t,s,r,q=this,p=C.cd(d,!1,null,0),o=q.a.f
if(o===16){o=q.b
o===$&&C.b()
x=o.ad()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<q.a.e;++s){e.qK(s,w)
e.qJ(s,v)
e.qI(s,u)
e.qH(s,t)}}else{r=o===32
for(s=0;s<q.a.e;++s){u=J.A(p.a,p.d++)
v=J.A(p.a,p.d++)
w=J.A(p.a,p.d++)
t=r?J.A(p.a,p.d++):255
e.qK(s,w)
e.qJ(s,v)
e.qI(s,u)
e.qH(s,t)}}},
aSc(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=C.fS(i,i,D.ax,0,D.bQ,a0,i,0,a1,i,D.ax,d,h===A.mN||h===A.mO)
h=x.a
if((h==null?i:h.gda())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.gda()
d.toString
j.ahc(h,d)}w=x.gbK()
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
ahg(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
g===$&&C.b()
x=i.a
g.d=x.ax
w=x.z
g=w===16
v=!0
if(!g)if(w!==32){u=x.c
if(u===A.mN||u===A.mO){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=C.fS(h,h,D.ax,0,D.bQ,t,h,0,s,h,D.ax,u,x===A.mN||x===A.mO)
x=i.a
u=x.c
if(u===A.mN||u===A.mO){x=x.as
x.toString
u=r.a
u=u==null?h:u.gda()
u.toString
i.ahc(x,u)}if(w===8)for(q=r.gaO()-1;q>=0;--q){p=0
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
B.bhF.prototype={
hh(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.bx()}for(x=t.a,w=0;v=t.c,d>v;){w=D.f.cE(w,v)+(t.b&A.rs[v])
d-=v
t.c=8
t.b=J.A(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.bx()}x=D.f.cE(w,d)
v=t.b
u=t.c-d
w=x+(D.f.j8(v,u)&A.rs[d])
t.c=u}return w}}
B.am6.prototype={
j(d){var x=this,w=x.a,v=$.c1V().h(0,w)
if(v!=null)return v.a+": "+x.b.j(0)+" "+x.c
return"<"+w+">: "+x.b.j(0)+" "+x.c},
mL(){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.fZ(x*(w!==D.ao?D.nG[w.a]:0))
switch(w.a){case 1:return u.e=new C.qx(new Uint8Array(C.b5(v.fZ(x).eM())))
case 2:return u.e=new C.z4(x===0?"":v.hi(x-1))
case 7:return u.e=new C.qx(new Uint8Array(C.b5(v.fZ(x).eM())))
case 3:return u.e=C.ccL(v,x)
case 4:return u.e=C.ccG(v,x)
case 5:return u.e=C.ccH(v,x)
case 11:return u.e=C.ccN(v,x)
case 12:return u.e=C.ccF(v,x)
case 6:return u.e=new C.tp(new Int8Array(C.b5(J.c2d(D.K.ga5(v.eM()),0,x))))
case 8:return u.e=C.ccK(v,x)
case 9:return u.e=C.ccI(v,x)
case 10:return u.e=C.ccJ(v,x)
case 0:return null}}}
B.bhH.prototype={
bm6(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.f.av(u.a+7,8)
for(w=0,v=0;v<g;++v){u.a1j(d,w,f)
w+=x}},
a1j(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){while(w){v=p.vN(10)
u=A.Up[v]
t=D.f.S(u,1)&15
if(t===12){u=A.x5[(v<<2&12|p.mc(2))>>>0]
s=D.f.S(u,1)
f+=D.f.S(u,4)&4095
p.je(4-(s&7))}else if(t===0)throw C.n(C.bJ("TIFFFaxDecoder0"))
else if(t===15)throw C.n(C.bJ("TIFFFaxDecoder1"))
else{f+=D.f.S(u,5)&2047
p.je(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}while(!w){u=A.SL[p.mc(4)]
r=u>>>5&2047
q=!0
if(r===100){u=A.TZ[p.vN(9)]
t=D.f.S(u,1)&15
r=D.f.S(u,5)&2047
if(t===12){p.je(5)
u=A.x5[p.mc(4)]
s=D.f.S(u,1)
r=D.f.S(u,4)&4095
p.nj(d,e,f,r)
f+=r
p.je(4-(s&7))}else if(t===15)throw C.n(C.bJ("TIFFFaxDecoder2"))
else{p.nj(d,e,f,r)
f+=r
p.je(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=A.SH[p.mc(2)]
r=u>>>5&2047
p.nj(d,e,f,r)
f+=r
p.je(2-(u>>>1&15))
p.f[p.d++]=f}else{p.nj(d,e,f,r)
f+=r
p.je(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
bm7(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.f.av(x+7,8)
v=C.bm(2,null,!1,y.I)
e.at=a3&1
e.as=a3>>>2&1
if(e.amV()!==1)throw C.n(C.bJ("TIFFFaxDecoder3"))
e.a1j(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.amV()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
for(;;){r.toString
if(!(r<x))break
e.ajd(q,p,v)
n=v[0]
m=v[1]
l=A.Ul[e.mc(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.nj(d,u,r,m-r)}e.je(7-j)
r=m
q=r}else if(k===1){e.je(7-j)
i=o+1
h=i+1
if(p){r+=e.Qk()
e.f[o]=r
g=e.Qj()
e.nj(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.Qj()
e.nj(d,u,r,g)
r+=g
e.f[o]=r
r+=e.Qk()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.nj(d,u,r,f-r)
e.je(7-j)}else throw C.n(C.bJ("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.a1j(d,u,a1)
u+=w}},
bmc(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
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
a2.ajd(p,o,v)
m=v[0]
l=v[1]
k=A.Ul[a2.mc(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.nj(a3,t,q,l-q)}a2.je(7-i)
q=l
p=q}else if(j===1){a2.je(7-i)
h=n+1
g=h+1
if(o){q+=a2.Qk()
r[n]=q
f=a2.Qj()
a2.nj(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.Qj()
a2.nj(a3,t,q,f)
q+=f
r[n]=q
q+=a2.Qk()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.nj(a3,t,q,e-q)
a2.je(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.mc(3)!==7)throw C.n(C.bJ("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){while(a2.mc(1)!==1)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.mc(1)===0
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
a2.nj(a3,t,q,1);++q
n=h}}}else throw C.n(C.bJ("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
Qk(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.vN(10)
u=A.Up[v]
t=D.f.S(u,1)&15
if(t===12){u=A.x5[(v<<2&12|r.mc(2))>>>0]
s=D.f.S(u,1)
x+=D.f.S(u,4)&4095
r.je(4-(s&7))}else if(t===0)throw C.n(C.bJ("TIFFFaxDecoder0"))
else if(t===15)throw C.n(C.bJ("TIFFFaxDecoder1"))
else{x+=D.f.S(u,5)&2047
r.je(10-t)
if((u&1)===0)w=!1}}return x},
Qj(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=A.SL[r.mc(4)]
u=v>>>5&2047
if(u===100){v=A.TZ[r.vN(9)]
t=D.f.S(v,1)&15
s=D.f.S(v,5)
if(t===12){r.je(5)
v=A.x5[r.mc(4)]
s=D.f.S(v,1)
x+=D.f.S(v,4)&4095
r.je(4-(s&7))}else if(t===15)throw C.n(C.bJ("TIFFFaxDecoder2"))
else{x+=s&2047
r.je(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=A.SH[r.mc(2)]
x+=v>>>5&2047
r.je(2-(v>>>1&15))}else{x+=u
r.je(4-(v>>>1&15))}w=!0}}return x},
amV(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.vN(12)!==1)throw C.n(C.bJ("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.vN(x)!==0)throw C.n(C.bJ(u))
if(x<4)if(v.vN(8)!==0)throw C.n(C.bJ(u))
while(w=v.vN(8),w!==1)if(w!==0)throw C.n(C.bJ(u))}if(v.at===0)return 1
else return v.mc(1)},
ajd(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
nj(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.f.S(s,3),p=s&7
if(p>0){x=D.f.cE(1,7-p)
w=J.A(d.a,d.d+q)
for(;;){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.l(0,q,w)}q=D.f.S(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.bd(d.a,d.d+q,255)
s+=8}while(s<r){q=D.f.S(s,3)
v=J.A(d.a,d.d+q)
t=D.f.cE(1,7-(s&7))
J.bd(d.a,d.d+q,(v|t)>>>0);++s}},
vN(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.r
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
r=A.pj[J.A(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=A.pj[J.A(u,x+j)&255]
else{t=A.pj[J.A(u,x+j)&255]
j=k.r
s=A.pj[J.A(j.a,j.d+(v+2))&255]}}}else throw C.n(C.bJ("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.f.cE(r&A.rs[q],p)
l=D.f.eb(t&A.DS[n],8-n)
if(o!==0){l=D.f.cE(l,o)|D.f.eb(s&A.DS[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
mc(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
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
s=A.pj[J.A(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=A.pj[J.A(m.a,m.d+(v+1))&255]}}else throw C.n(C.bJ("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.f.eb(s&A.rs[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.f.cE(s&A.rs[r],-p)|D.f.eb(t&A.DS[q],8-q))>>>0
m=n.x
m.toString
n.x=m+1
n.w=q}return o},
je(d){var x,w=this,v=w.w
v.toString
x=v-d
if(x<0){v=w.x
v.toString
w.x=v-1
w.w=8+x}else w.w=x}}
B.am7.prototype={
aMk(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=C.bS(d,g,0),e=d.ad()
for(x=h.a,w=0;w<e;++w){v=d.ad()
u=d.ad()
t=D.U7[u]
s=D.nG[u]
r=d.Z()
if(r*s>4)q=d.Z()
else{q=d.d
d.d=q+4}p=new B.am6(v,t,r,q,f)
x.l(0,v,p)
if(v===256){o=p.mL()
o=o==null?g:o.F(0)
h.b=o==null?0:o}else if(v===257){o=p.mL()
o=o==null?g:o.F(0)
h.c=o==null?0:o}else if(v===262){n=p.mL()
m=n==null?g:n.F(0)
if(m==null)m=17
if(m<17)h.d=A.eP0[m]
else h.d=A.Ga}else if(v===259){o=p.mL()
o=o==null?g:o.F(0)
h.e=o==null?0:o}else if(v===258){o=p.mL()
o=o==null?g:o.F(0)
h.f=o==null?0:o}else if(v===277){o=p.mL()
o=o==null?g:o.F(0)
h.r=o==null?0:o}else if(v===317){o=p.mL()
o=o==null?g:o.F(0)
h.Q=o==null?0:o}else if(v===339){o=p.mL()
n=o==null?g:o.F(0)
h.x=A.ePv[n==null?0:n]}else if(v===320){n=p.mL()
if(n!=null){o=J.cpZ(D.K.ga5(n.qA()))
h.id=o
h.k1=0
o=o.length/3|0
h.k2=o
h.k3=o*2}}}o=h.id
l=o!=null
if(l&&h.d===A.Gb)h.r=1
if(h.b===0||h.c===0)return
if(l&&h.f===8){k=o.length
for(l=o.$flags|0,w=0;w<k;++w){j=o[w]
l&2&&C.u(o)
o[w]=j>>>8}}if(h.d===A.G9)h.z=!0
h.w=h.r
if(x.aE(324)){h.ay=h.D0(322)
h.ch=h.D0(323)
h.CW=h.Sq(324)
h.cx=h.Sq(325)}else{h.ay=h.Sp(322,h.b)
if(!x.aE(278))h.ch=h.Sp(323,h.c)
else{i=h.D0(278)
if(i===-1)h.ch=h.c
else h.ch=i}h.CW=h.Sq(273)
h.cx=h.Sq(279)}o=h.b
l=h.ay
h.cy=D.f.eD(o+l-1,l)
l=h.c
o=h.ch
h.db=D.f.eD(l+o-1,o)
h.dy=h.Sp(266,1)
h.fr=h.D0(292)
h.fx=h.D0(293)
h.D0(338)
switch(h.d.a){case 0:case 1:x=h.f
if(x===1&&h.r===1)h.y=A.G8
else if(x===4&&h.r===1)h.y=A.fu9
else if(D.f.aC(x,8)===0){x=h.r
if(x===1)h.y=A.fua
else if(x===2)h.y=A.fub
else h.y=A.tg}break
case 2:if(D.f.aC(h.f,8)===0){x=h.r
if(x===3)h.y=A.a73
else if(x===4)h.y=A.fud
else h.y=A.tg}break
case 3:x=!1
if(h.r===1)if(h.id!=null){x=h.f
x=x===4||x===8||x===16}if(x)h.y=A.fuc
break
case 4:if(h.f===1&&h.r===1)h.y=A.G8
break
case 6:if(h.e===7&&h.f===8&&h.r===3)h.y=A.a73
else{if(x.aE(530)){n=x.h(0,530).mL()
h.as=n.F(0)
x=h.at=n.hj(0,1)}else x=h.at=h.as=2
o=h.as
o===$&&C.b()
if(o*x===1)h.y=A.tg
else if(h.f===8&&h.r===3)h.y=A.fue}break
case 5:if(D.f.aC(h.f,8)===0)h.y=A.tg
x=h.r
if(x===4)h.w=3
else if(x===5)h.w=4
break
default:if(D.f.aC(h.f,8)===0)h.y=A.tg
break}},
bR(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.x,d=e===A.tf,a0=e===A.bI
e=g.f
if(e===1)x=D.eH
else if(e===2)x=D.kz
else{if(e===4)e=D.kA
else if(d&&e===16)e=D.lE
else if(d&&e===32)e=D.ms
else if(d&&e===64)e=D.nw
else if(a0&&e===8)e=D.nx
else if(a0&&e===16)e=D.ny
else if(a0&&e===32)e=D.nz
else if(e===16)e=D.cQ
else e=e===32?D.mt:D.ax
x=e}w=g.id!=null&&g.d===A.Gb
v=w?3:g.w
e=g.b
u=C.fS(f,f,x,0,D.bQ,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.gda()
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
e.n0(k,t[l],t[m],t[n])}}j=0
i=0
for(;;){e=g.db
e===$&&C.b()
if(!(j<e))break
h=0
for(;;){e=g.cy
e===$&&C.b()
if(!(h<e))break
g.aSd(a1,u,h,j);++h;++i}++j}return u},
aSd(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.y===A.G8){a8.aRY(b0,b1,b2,b3)
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
v=B.cdy()
try{v.au7(C.bS(b0,x,0),w.a)}catch(o){}if(a8.Q===2)for(n=0;n<a8.ch;++n){m=a8.r
u=a8.ay
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.A(u.a,u.d+l)
j=w
i=a8.r
i=J.A(j.a,j.d+(l-i))
J.bd(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=C.cd(new Uint8Array(p),!1,a9,0)
a8.ahf(b0,p,w.a)}else if(u===32946)w=C.cd(D.nc.A0(b0.Np(0,0,x)),!1,a9,0)
else if(u===8)w=C.cd(D.nc.A0(b0.Np(0,0,x)),!1,a9,0)
else if(u===6){a8.b2d(new B.VD().bR(y.D.a(b0.Np(0,0,x))),b1,s,q,a8.ay,a8.ch)
return}else throw C.n(C.bJ("Unsupported Compression Type: "+u))
h=C.c([0,0,0],y.t)
for(g=q,f=0;f<a8.ch;++f,++g)for(e=s,d=0;d<a8.ay;++d,++e){u=w
if(u.d>=u.c||e>=a8.b||g>=a8.c)break
u=a8.r
if(u===1){u=a8.x
if(u===A.tf){u=a8.f
if(u===32){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.C8()[0]}else if(u===64)a0=w.YB()
else if(u===16){u=w.ad()
r=$.fQ
a0=(r!=null?r:C.hy())[u]}else a0=0
if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kh(e,g,a0)}}else{r=a8.f
if(r===8)if(u===A.bI){u=w
u=J.A(u.a,u.d++)
r=$.lP()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.mH()[0]}else{u=w
a0=J.A(u.a,u.d++)}else if(r===16)if(u===A.bI){u=w.ad()
r=$.lO()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.mG()[0]}else a0=w.ad()
else if(r===32)if(u===A.bI){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a0=$.jq()[0]}else a0=w.Z()
else a0=0
if(a8.d===A.G9){u=b1.a
a1=u==null?a9:u.gbq()
a0=(a1==null?0:a1)-a0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kh(e,g,a0)}}}else if(u===2){u=a8.f
if(u===8){if(a8.x===A.bI){u=w
u=J.A(u.a,u.d++)
r=$.lP()
r.$flags&2&&C.u(r)
r[0]=u
a2=$.mH()[0]}else{u=w
a2=J.A(u.a,u.d++)}if(a8.x===A.bI){u=w
u=J.A(u.a,u.d++)
r=$.lP()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mH()[0]}else{u=w
a3=J.A(u.a,u.d++)}}else if(u===16){if(a8.x===A.bI){u=w.ad()
r=$.lO()
r.$flags&2&&C.u(r)
r[0]=u
a2=$.mG()[0]}else a2=w.ad()
if(a8.x===A.bI){u=w.ad()
r=$.lO()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mG()[0]}else a3=w.ad()}else if(u===32){if(a8.x===A.bI){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a2=$.jq()[0]}else a2=w.Z()
if(a8.x===A.bI){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.jq()[0]}else a3=w.Z()}else{a2=0
a3=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.dD(e,g,a2,a3,0)}}else if(u===3){u=a8.x
if(u===A.tf){u=a8.f
if(u===32){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
u=$.C8()
a4=u[0]
r[0]=w.Z()
a5=u[0]
r[0]=w.Z()
a6=u[0]}else{a5=0
a6=0
if(u===64)a4=w.YB()
else if(u===16){u=w.ad()
r=$.fQ
a4=(r!=null?r:C.hy())[u]
u=w.ad()
r=$.fQ
a5=(r!=null?r:C.hy())[u]
u=w.ad()
r=$.fQ
a6=(r!=null?r:C.hy())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.dD(e,g,a4,a5,a6)}}else{r=a8.f
if(r===8){if(u===A.bI){u=w
u=J.A(u.a,u.d++)
r=$.lP()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.mH()[0]}else{u=w
a4=J.A(u.a,u.d++)}if(a8.x===A.bI){u=w
u=J.A(u.a,u.d++)
r=$.lP()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mH()[0]}else{u=w
a5=J.A(u.a,u.d++)}if(a8.x===A.bI){u=w
u=J.A(u.a,u.d++)
r=$.lP()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mH()[0]}else{u=w
a6=J.A(u.a,u.d++)}}else if(r===16){if(u===A.bI){u=w.ad()
r=$.lO()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.mG()[0]}else a4=w.ad()
if(a8.x===A.bI){u=w.ad()
r=$.lO()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mG()[0]}else a5=w.ad()
if(a8.x===A.bI){u=w.ad()
r=$.lO()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mG()[0]}else a6=w.ad()}else if(r===32){if(u===A.bI){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.jq()[0]}else a4=w.Z()
if(a8.x===A.bI){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.jq()[0]}else a5=w.Z()
if(a8.x===A.bI){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.jq()[0]}else a6=w.Z()}else{a4=0
a5=0
a6=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.dD(e,g,a4,a5,a6)}}}else if(u>=4)if(a8.x===A.tf){u=a8.f
if(u===32){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
u=$.C8()
a4=u[0]
r[0]=w.Z()
a5=u[0]
r[0]=w.Z()
a6=u[0]
r[0]=w.Z()
a7=u[0]}else{a5=0
a6=0
a7=0
if(u===64)a4=w.YB()
else if(u===16){u=w.ad()
r=$.fQ
a4=(r!=null?r:C.hy())[u]
u=w.ad()
r=$.fQ
a5=(r!=null?r:C.hy())[u]
u=w.ad()
r=$.fQ
a6=(r!=null?r:C.hy())[u]
u=w.ad()
r=$.fQ
a7=(r!=null?r:C.hy())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.ic(e,g,a4,a5,a6,a7)}}else{u=b1.a
a3=u==null?a9:u.gbq()
if(a3==null)a3=0
u=a8.f
if(u===8){if(a8.x===A.bI){u=w
u=J.A(u.a,u.d++)
r=$.lP()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.mH()[0]}else{u=w
a4=J.A(u.a,u.d++)}if(a8.x===A.bI){u=w
u=J.A(u.a,u.d++)
r=$.lP()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mH()[0]}else{u=w
a5=J.A(u.a,u.d++)}if(a8.x===A.bI){u=w
u=J.A(u.a,u.d++)
r=$.lP()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mH()[0]}else{u=w
a6=J.A(u.a,u.d++)}if(a8.x===A.bI){u=w
u=J.A(u.a,u.d++)
r=$.lP()
r.$flags&2&&C.u(r)
r[0]=u
a7=$.mH()[0]}else{u=w
a7=J.A(u.a,u.d++)}if(a8.r===5)if(a8.x===A.bI){u=w
u=J.A(u.a,u.d++)
r=$.lP()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mH()[0]}else{u=w
a3=J.A(u.a,u.d++)}}else if(u===16){if(a8.x===A.bI){u=w.ad()
r=$.lO()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.mG()[0]}else a4=w.ad()
if(a8.x===A.bI){u=w.ad()
r=$.lO()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.mG()[0]}else a5=w.ad()
if(a8.x===A.bI){u=w.ad()
r=$.lO()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.mG()[0]}else a6=w.ad()
if(a8.x===A.bI){u=w.ad()
r=$.lO()
r.$flags&2&&C.u(r)
r[0]=u
a7=$.mG()[0]}else a7=w.ad()
if(a8.r===5)if(a8.x===A.bI){u=w.ad()
r=$.lO()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.mG()[0]}else a3=w.ad()}else if(u===32){if(a8.x===A.bI){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a4=$.jq()[0]}else a4=w.Z()
if(a8.x===A.bI){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a5=$.jq()[0]}else a5=w.Z()
if(a8.x===A.bI){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a6=$.jq()[0]}else a6=w.Z()
if(a8.x===A.bI){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a7=$.jq()[0]}else a7=w.Z()
if(a8.r===5)if(a8.x===A.bI){u=w.Z()
r=$.fz()
r.$flags&2&&C.u(r)
r[0]=u
a3=$.jq()[0]}else a3=w.Z()}else{a4=0
a5=0
a6=0
a7=0}if(a8.d===A.a74){B.ckf(a4,a5,a6,a7,h)
a4=h[0]
a5=h[1]
a6=h[2]
a7=a3}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.ic(e,g,a4,a5,a6,a7)}}}}else throw C.n(C.bJ("Unsupported bitsPerSample: "+u))},
b2d(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.cD(v,x,null)
if(u==null)u=new C.es()
e.yg(v+f,w,u)}},
aRY(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cy
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
a0.ahf(a3,q,x.a)}else if(r===5){x=C.cd(new Uint8Array(a2*u),!1,a1,0)
B.cdy().au7(C.bS(a3,s,0),x.a)
if(a0.Q===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.A(a2.a,a2.d+n)
r=x
m=a0.r
m=J.A(r.a,r.d+(n-m))
J.bd(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=C.cd(new Uint8Array(a2*u),!1,a1,0)
try{B.c5w(a0.dy,a0.ay,a0.ch).bm6(x,a3,0,a0.ch)}catch(l){}}else if(r===3){x=C.cd(new Uint8Array(a2*u),!1,a1,0)
try{B.c5w(a0.dy,a0.ay,a0.ch).bm7(x,a3,0,a0.ch,a0.fr)}catch(l){}}else if(r===4){x=C.cd(new Uint8Array(a2*u),!1,a1,0)
try{B.c5w(a0.dy,a0.ay,a0.ch).bmc(x,a3,0,a0.ch,a0.fx)}catch(l){}}else if(r===8)x=C.cd(D.nc.A0(a3.Np(0,0,s)),!1,a1,0)
else if(r===32946)x=C.cd(D.nc.A0(a3.Np(0,0,s)),!1,a1,0)
else if(r===1)x=a3
else throw C.n(C.bJ("Unsupported Compression Type: "+r))
k=new B.bhF(x)
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
a2=k.hh(1)
u=a4.a
if(a2===0){if(u!=null)u.dD(e,g,i,0,0)}else if(u!=null)u.dD(e,g,h,0,0)}k.c=0}},
ahf(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.c7(f),w=0,v=0;v<e;){u=w+1
t=J.A(d.a,d.d+w)
s=$.lP()
s.$flags&2&&C.u(s)
s[0]=t
r=$.mH()[0]
if(r>=0&&r<=127)for(t=r+1,w=u,q=0;q<t;++q,v=p,w=u){p=v+1
u=w+1
x.l(f,v,J.A(d.a,d.d+w))}else{t=r<=-1&&r>=-127
w=u+1
if(t){o=J.A(d.a,d.d+u)
for(t=-r+1,q=0;q<t;++q,v=p){p=v+1
x.l(f,v,o)}}}}},
Sp(d,e){var x=this.a
if(!x.aE(d))return e
x=x.h(0,d).mL()
x=x==null?null:x.F(0)
return x==null?0:x},
D0(d){return this.Sp(d,0)},
Sq(d){var x,w=this.a
if(!w.aE(d))return null
x=w.h(0,d)
w=x.mL()
w.toString
return C.zt(x.c,w.guX(w),!0,y.p)}}
B.GD.prototype={
H(){return"TiffFormat."+this.b}}
B.jg.prototype={
H(){return"TiffPhotometricType."+this.b}}
B.pB.prototype={
H(){return"TiffImageType."+this.b}}
B.bhI.prototype={
gbK(){return this.a},
gaO(){return this.b}}
B.aWv.prototype={
au7(d,e){var x,w,v,u,t,s,r=this
r.r=e
x=J.aY(e)
r.w=0
w=y.D.a(d.a)
r.e=w
r.f=w.length
r.b=d.d
if(w[0]===0&&w[1]===1)throw C.n(C.bJ("Invalid LZW Data"))
r.akJ()
r.d=r.c=0
v=r.a2j()
w=r.x
u=0
for(;;){if(!(v!==257&&r.w<x))break
if(v===256){r.akJ()
v=r.a2j()
r.as=0
if(v===257)break
J.bd(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.ajt(v)
t=r.as
t===$&&C.b()
s=t-1
for(;s>=0;--s)J.bd(r.r,r.w++,w[s])
r.aeP(u,w[r.as-1])}else{r.ajt(u)
t=r.as
t===$&&C.b()
s=t-1
for(;s>=0;--s)J.bd(r.r,r.w++,w[s])
J.bd(r.r,r.w++,w[r.as-1])
r.aeP(u,w[r.as-1])}u=v}v=r.a2j()}},
aeP(d,e){var x,w=this,v=w.y
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
ajt(d){var x,w,v,u,t,s,r=this
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
a2j(){var x,w,v,u,t=this,s=t.b,r=t.f
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
return D.f.eb(t.c,s)&A.eyY[w-9]},
akJ(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.bM.fu(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&C.u(x)
x[w]=w}v.a=9
v.Q=258}}
B.bhG.prototype={
iN(d){var x=this,w=C.cd(d,!1,null,0)
x.c=w
w=x.a4f(w)
x.a=w
if(w!=null)x.b=B.c3r(C.cd(d,!1,null,0))
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
mn(d,e){var x=this,w=C.cd(d,!1,null,0)
x.c=w
w=x.a4f(w)
x.a=w
if(w==null)return null
return x.i2(0)},
a4f(d){var x,w,v,u,t,s,r,q,p,o=null,n=C.c([],y.L),m=new B.bhI(n),l=d.ad()
if(l!==18761&&l!==19789)return o
if(l===19789)d.e=!0
else d.e=!1
v=d.ad()
m.d=v
if(v!==42)return o
u=d.Z()
t=C.bS(d,o,0)
t.d=u
x=t
for(v=y.p,s=y.j;u!==0;){w=null
try{r=new B.am7(C.C(v,s),A.Ga,A.a72,A.fuf)
r.aMk(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.Z()
if(u!==0)x.d=u}return n.length!==0?m:o}}
B.bjs.prototype={
KX(){var x,w,v=this.a,u=v.po()
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
oL(){var x,w,v,u=this,t=null
if(!u.aWb())return t
x=u.b
w=x.a
u.d=C.fS(t,t,D.ax,0,D.bQ,x.b,t,0,4,t,D.ax,w,!1)
u.b1t()
if(!u.b72())return t
x=x.w
if(x.length!==0){v=C.cd(new C.bI(x),!1,t,0)
x=u.d
x.toString
x.e=B.c3r(v)}return u.d},
aWb(){var x,w,v,u,t=this
if(!t.KX())return!1
t.fr=B.cBL()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new B.amM(v,u,new Int32Array(2))}x=t.r
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
x=B.cgW(v.hC(x))
t.c=x
v.d+=u.d
x.eh(1)
t.c.eh(1)
t.b7b(t.x,t.fr)
t.b71()
if(!t.b76(v))return!1
t.b78()
t.c.eh(1)
t.b77()
return!0},
b7b(d,e){var x,w,v,u=this,t=u.c
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
b71(){var x,w,v,u=this,t=u.w,s=u.c
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
b76(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&C.b()
p=D.f.cN(1,p.eh(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.Pj(3,v)
s=w+((J.A(t.a,t.d)|J.A(t.a,t.d+1)<<8|J.A(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new B.a0b(d.yw(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=B.cgW(d.yw(q-w,d.d-d.b+w))
return w<q},
b78(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&C.b()
x=h.eh(7)
w=i.c.eh(1)!==0?i.c.Gv(4):0
v=i.c.eh(1)!==0?i.c.Gv(4):0
u=i.c.eh(1)!==0?i.c.Gv(4):0
t=i.c.eh(1)!==0?i.c.Gv(4):0
s=i.c.eh(1)!==0?i.c.Gv(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
j=A.DG[j]
k.$flags&2&&C.u(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=A.DH[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=A.DG[k]
j.$flags&2&&C.u(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=A.DH[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=A.DG[j]
k.$flags&2&&C.u(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=A.DH[j]}},
b77(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&C.b()
s=t.fA(A.eYT[x][w][v][u])!==0?r.c.eh(8):A.eyo[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&C.u(t)
t[u]=s}t=r.c
t===$&&C.b()
t=t.eh(1)!==0
r.fx=t
if(t)r.fy=r.c.eh(8)},
b8j(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.b6
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
if(r>0){n=r>4?D.f.S(o,2):D.f.S(o,1)
m=9-r
if(n>m)n=m}else n=o
if(n<1)n=1
p.b=n
p.a=2*o+n
if(o>=40)r=2
else r=o>=15?1:0
p.d=r}else p.a=0
p.c=q!==0}}}},
b1t(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.a6=j
x=J.iM(4,y.K)
for(j=y.d,w=0;w<4;++w)x[w]=C.c([new B.GN(),new B.GN()],j)
m.D=x
j=m.at
j.toString
x=J.iM(j,y.bt)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new B.amN(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.b6
t.toString
s=A.CY[t]
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
o=A.CY[k]
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
x=J.iM(n,y.q)
for(v=0;v<n;++v)x[v]=new B.amK()
m.k3=x
k=m.at
k.toString
x=J.iM(k,y._)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new B.amL(j,new Uint8Array(16))}m.b8=x
k=m.at
k.toString
m.k4=C.bm(k,l,!1,y.B)
m.b8j()
B.cBc()
m.e=new B.bjt()
return!0},
b72(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
j.b75()
if(!n)n=j.b79(q,s)
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
j.b9q()
u=j.b6
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&C.b()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.aV9(k))return!1
u=++j.y2}return!0},
b9q(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.y2,a5=a2.ok
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
x.pd(t-4,4,x,t+12)}for(r=-1;r<8;++r){t=r*32
q=t-4
t+=4
w.pd(q,4,w,t)
v.pd(q,4,v,t)}}else{for(r=0;r<16;++r)J.bd(x.a,x.d+(r*32-1),129)
for(r=0;r<8;++r){t=r*32-1
J.bd(w.a,w.d+t,129)
J.bd(v.a,v.d+t,129)}if(a5){J.bd(v.a,v.d+-33,129)
J.bd(w.a,w.d+-33,129)
J.bd(x.a,x.d+-33,129)}}t=a2.k2
t===$&&C.b()
p=t[u]
o=s.a
n=s.e
if(a5){x.xi(-32,16,p.a)
w.xi(-32,8,p.b)
v.xi(-32,8,p.c)}else if(u===0){t=x.a
q=x.d+-33
J.rN(t,q,q+21,127)
q=w.a
t=w.d+-33
J.rN(q,t,t+9,127)
t=v.a
q=v.d+-33
J.rN(t,q,q+9,127)}t=s.b
t===$&&C.b()
if(t){m=C.bS(x,a3,-16)
l=m.Nv()
if(a5){t=a2.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.rN(q,k,k+4,t)}else m.xi(0,4,a2.k2[u+1].a)}j=l[0]
l.$flags&2&&C.u(l)
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=C.bS(x,a3,A.UO[i])
A.eR_[t[i]].$1(h)
n.toString
q=i*16
a2.ahJ(n,new C.kQ(o,q,Math.min(384,384),q,!1),h)}}else{t=B.cgZ(u,a4,s.c[0])
t.toString
A.f46[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=C.bS(x,a3,A.UO[i])
n.toString
t=i*16
a2.ahJ(n,new C.kQ(o,t,Math.min(384,384),t,!1),h)}}t=s.f
t===$&&C.b()
q=B.cgZ(u,a4,s.d)
q.toString
A.U4[q].$1(w)
A.U4[q].$1(v)
q=Math.min(384,384)
g=new C.kQ(o,256,q,256,!1)
if((t&255)!==0){k=a2.e
if((t&170)!==0){k===$&&C.b()
k.t7(g,w)
k.t7(C.bS(g,a3,16),C.bS(w,a3,4))
f=C.bS(g,a3,32)
e=C.bS(w,a3,128)
k.t7(f,e)
k.t7(C.bS(f,a3,16),C.bS(e,a3,4))}else{k===$&&C.b()
k.aA7(g,w)}}d=new C.kQ(o,320,q,320,!1)
t=t>>>8
if((t&255)!==0){q=a2.e
if((t&170)!==0){q===$&&C.b()
q.t7(d,v)
q.t7(C.bS(d,a3,16),C.bS(v,a3,4))
t=C.bS(d,a3,32)
k=C.bS(v,a3,128)
q.t7(t,k)
q.t7(C.bS(t,a3,16),C.bS(k,a3,4))}else{q===$&&C.b()
q.aA7(d,v)}}t=a2.ax
t.toString
if(a4<t-1){D.K.cB(p.a,0,16,x.eM(),480)
D.K.cB(p.b,0,8,w.eM(),224)
D.K.cB(p.c,0,8,v.eM(),224)}a0=u*16
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
ahJ(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&C.b()
x.Bv(e,f,!1)
break
case 2:this.e===$&&C.b()
w=J.A(e.a,e.d)+4
v=D.f.iI(D.f.S(J.A(e.a,e.d+4)*35468,16),32)
u=D.f.iI(D.f.S(J.A(e.a,e.d+4)*85627,16),32)
t=D.f.iI(D.f.S(J.A(e.a,e.d+1)*35468,16),32)
s=D.f.iI(D.f.S(J.A(e.a,e.d+1)*85627,16),32)
B.bjv(f,0,w+u,s,t)
B.bjv(f,1,w+v,s,t)
B.bjv(f,2,w-v,s,t)
B.bjv(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&C.b()
x.Nw(e,f)
break
default:break}},
aTl(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
j===$&&C.b()
j=j[d]
j.toString
x=m.p1
x===$&&C.b()
w=C.bS(x,l,d*16)
v=j.b
u=j.a
if(u===0)return
if(m.b6===1){if(d>0){x=m.e
x===$&&C.b()
k.toString
x.ad3(w,k,u+4)}if(j.c){x=m.e
x===$&&C.b()
k.toString
x.aER(w,k,u)}if(e>0){x=m.e
x===$&&C.b()
k.toString
x.ad4(w,k,u+4)}if(j.c){j=m.e
j===$&&C.b()
k.toString
j.aES(w,k,u)}}else{t=m.R8
x=m.p2
x===$&&C.b()
s=d*8
r=C.bS(x,l,s)
x=m.p3
x===$&&C.b()
q=C.bS(x,l,s)
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
x.boI(w,k,u,v,p)
t.toString
o=C.bS(r,l,4)
n=C.bS(q,l,4)
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
j.bza(w,k,u,v,p)
t.toString
x=4*t
o=C.bS(r,l,x)
n=C.bS(q,l,x)
j.CB(o,t,1,8,u,v,p)
j.CB(n,t,1,8,u,v,p)}}},
aUM(){var x,w=this,v=w.ay
v===$&&C.b()
x=v
for(;;){v=w.CW
v.toString
if(!(x<v))break
w.aTl(x,w.y2);++x}},
aV9(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b6
e.toString
x=A.CY[e]
e=g.p4
e.toString
w=x*e
e=g.R8
e.toString
v=(x/2|0)*e
e=g.p1
e===$&&C.b()
u=-w
t=C.bS(e,f,u)
e=g.p2
e===$&&C.b()
s=-v
r=C.bS(e,f,s)
e=g.p3
e===$&&C.b()
q=C.bS(e,f,s)
p=g.y2
e=g.cx
e.toString
o=p*16
n=(p+1)*16
if(d)g.aUM()
if(p!==0){o-=x
g.to=C.bS(t,f,0)
g.x1=C.bS(r,f,0)
g.x2=C.bS(q,f,0)}else{g.to=C.bS(g.p1,f,0)
g.x1=C.bS(g.p2,f,0)
g.x2=C.bS(g.p3,f,0)}e=p<e-1
if(e)n-=x
m=g.as
m.toString
if(n>m)n=m
g.xr=null
if(g.a6!=null&&o<n){m=g.xr=g.aSf(o,n-o)
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
j*=D.f.S(k,1)
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
g.b8D(o-l,m-h,n-o)}if(e){e=g.p1
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
b8D(d,e,f){if(e<=0||f<=0)return!1
this.aU1(d,e,f)
this.aU0(d,e,f)
return!0},
a0T(d){var x
if((d&-4194304)>>>0===0)x=D.f.S(d,14)
else x=d<0?0:255
return x},
TU(d,e,f,g){var x=19077*d
g.l(0,0,this.a0T(x+26149*f+-3644112))
g.l(0,1,this.a0T(x-6419*e-13320*f+2229552))
g.l(0,2,this.a0T(x+33050*e+-4527440))},
Tx(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new B.bjF(),a0=b3-1,a1=D.f.S(a0,1),a2=d.$2(J.A(a7.a,a7.d),J.A(a8.a,a8.d)),a3=d.$2(J.A(a9.a,a9.d),J.A(b0.a,b0.d)),a4=D.f.S(3*a2+a3+131074,2)
f.TU(J.A(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.l(0,3,255)
x=a6!=null
if(x){a4=D.f.S(3*a3+a2+131074,2)
w=J.A(a6.a,a6.d)
b2.toString
f.TU(w,a4&255,a4>>>16,b2)
b2.l(0,3,255)}for(v=1;v<=a1;++v,a3=t,a2=u){u=d.$2(J.A(a7.a,a7.d+v),J.A(a8.a,a8.d+v))
t=d.$2(J.A(a9.a,a9.d+v),J.A(b0.a,b0.d+v))
s=a2+u+a3+t+524296
r=D.f.S(s+2*(u+a3),3)
q=D.f.S(s+2*(a2+t),3)
a4=D.f.S(r+a2,1)
p=D.f.S(q+u,1)
w=2*v
o=w-1
n=J.A(a5.a,a5.d+o)
m=a4&255
l=a4>>>16
k=o*4
j=C.bS(b1,e,k)
n=19077*n
i=n+26149*l+-3644112
if((i&-4194304)>>>0===0)h=D.f.S(i,14)
else h=i<0?0:255
J.bd(j.a,j.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.f.S(l,14)
else h=l<0?0:255
J.bd(j.a,j.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.f.S(n,14)
else h=n<0?0:255
J.bd(j.a,j.d+2,h)
J.bd(j.a,j.d+3,255)
n=J.A(a5.a,a5.d+w)
m=p&255
l=p>>>16
j=w*4
i=C.bS(b1,e,j)
n=19077*n
g=n+26149*l+-3644112
if((g&-4194304)>>>0===0)h=D.f.S(g,14)
else h=g<0?0:255
J.bd(i.a,i.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.f.S(l,14)
else h=l<0?0:255
J.bd(i.a,i.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.f.S(n,14)
else h=n<0?0:255
J.bd(i.a,i.d+2,h)
J.bd(i.a,i.d+3,255)
if(x){a4=D.f.S(q+a3,1)
p=D.f.S(r+t,1)
o=J.A(a6.a,a6.d+o)
n=a4&255
m=a4>>>16
b2.toString
k=C.bS(b2,e,k)
o=19077*o
l=o+26149*m+-3644112
if((l&-4194304)>>>0===0)h=D.f.S(l,14)
else h=l<0?0:255
J.bd(k.a,k.d,h)
m=o-6419*n-13320*m+2229552
if((m&-4194304)>>>0===0)h=D.f.S(m,14)
else h=m<0?0:255
J.bd(k.a,k.d+1,h)
o=o+33050*n+-4527440
if((o&-4194304)>>>0===0)h=D.f.S(o,14)
else h=o<0?0:255
J.bd(k.a,k.d+2,h)
J.bd(k.a,k.d+3,255)
w=J.A(a6.a,a6.d+w)
o=p&255
n=p>>>16
j=C.bS(b2,e,j)
w=19077*w
m=w+26149*n+-3644112
if((m&-4194304)>>>0===0)h=D.f.S(m,14)
else h=m<0?0:255
J.bd(j.a,j.d,h)
n=w-6419*o-13320*n+2229552
if((n&-4194304)>>>0===0)h=D.f.S(n,14)
else h=n<0?0:255
J.bd(j.a,j.d+1,h)
w=w+33050*o+-4527440
if((w&-4194304)>>>0===0)h=D.f.S(w,14)
else h=w<0?0:255
J.bd(j.a,j.d+2,h)
J.bd(j.a,j.d+3,255)}}if((b3&1)===0){a4=D.f.S(3*a2+a3+131074,2)
w=J.A(a5.a,a5.d+a0)
o=a0*4
n=C.bS(b1,e,o)
f.TU(w,a4&255,a4>>>16,n)
n.l(0,3,255)
if(x){a4=D.f.S(3*a3+a2+131074,2)
a0=J.A(a6.a,a6.d+a0)
b2.toString
o=C.bS(b2,e,o)
f.TU(a0,a4&255,a4>>>16,o)
o.l(0,3,255)}}},
aU0(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
if(o==null)return
x=C.bS(o,null,0)
if(d===0){w=f-1
v=d}else{v=d-1
x.d=x.d-p.b.a
w=f}o=p.Q
o.toString
u=p.as
if(o+d+f===u){u.toString
w=u-o-v}for(o=p.b,t=0;t<w;++t){for(u=t+v,s=0;s<e;++s){r=J.A(x.a,x.d+s)
q=p.d.a
q=q==null?null:q.cD(s,u,null);(q==null?new C.es():q).sao(r)}x.d=x.d+o.a}},
aU1(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=C.cd(J.cn(l.d.ga5(0),0,null),!1,k,d*j.a*4),h=l.to
h===$&&C.b()
x=C.bS(h,k,0)
h=l.x1
h===$&&C.b()
w=C.bS(h,k,0)
h=l.x2
h===$&&C.b()
v=C.bS(h,k,0)
u=d+f
t=D.f.S(e+1,1)
s=j.a*4
j=l.rx
j===$&&C.b()
r=C.bS(j,k,0)
j=l.ry
j===$&&C.b()
q=C.bS(j,k,0)
if(d===0){l.Tx(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&C.b()
l.Tx(j,x,r,q,w,v,C.bS(i,k,-s),i,e)
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
l.Tx(C.bS(x,k,-n),x,r,q,w,v,C.bS(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
j=l.Q
j.toString
h=l.as
h.toString
if(j+u<h){j=l.RG
j===$&&C.b()
j.xi(0,e,x)
l.rx.xi(0,t,w)
l.ry.xi(0,t,v);--p}else if((u&1)===0)l.Tx(x,k,w,v,w,v,C.bS(i,k,s),k,e)
return p},
aSf(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.ac=new Uint8Array(n)
x=o.a6
w=new B.bka(x,m,l)
v=x.bx()
u=w.d=v&3
w.e=D.f.S(v,2)&3
w.f=D.f.S(v,4)&3
w.r=D.f.S(v,6)&3
if(w.gcU())if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new B.an0(A.tl,C.c([],y.J))
t.a=m
t.b=l
n=C.c([],y.A)
u=C.c([],y.F)
s=new Uint32Array(2)
r=new B.amI(x,s)
s=r.d=J.cn(D.bM.ga5(s),0,null)
q=x.bx()
s.$flags&2&&C.u(s)
s[0]=q
q=x.bx()
s.$flags&2&&C.u(s)
s[1]=q
q=x.bx()
s.$flags&2&&C.u(s)
s[2]=q
q=x.bx()
s.$flags&2&&C.u(s)
s[3]=q
q=x.bx()
s.$flags&2&&C.u(s)
s[4]=q
q=x.bx()
s.$flags&2&&C.u(s)
s[5]=q
q=x.bx()
s.$flags&2&&C.u(s)
s[6]=q
x=x.bx()
s.$flags&2&&C.u(s)
s[7]=x
u=new B.afs(r,t,n,u)
u.db=m
w.x=u
u.HO(m,l,!0)
n=w.x
x=n.ax
if(x.length===1&&x[0].a===A.a7N&&n.b1W()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.cx=0
x=D.f.aC(p,4)
x=new Uint8Array(p+(4-x))
n.CW=x
n.ch=J.lR(D.K.ga5(x),0,null)}else{w.y=!1
w.x.aeY()}}else w.r=1
o.a2=w}n=o.a2
n===$&&C.b()
if(!n.w){x=o.ac
x===$&&C.b()
if(!n.KV(d,e,x))return null}n=o.ac
n===$&&C.b()
return C.cd(n,!1,null,d*m)},
b79(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&C.b()
x=a1.dy[a3]
a3=a1.b8
a3===$&&C.b()
w=a3[a1.y1]
v=C.cd(w.a,!1,null,0)
a3=a1.k3
a3===$&&C.b()
u=a3[0]
v.bsR(0,v.c-v.d,0)
a3=w.b
a3===$&&C.b()
if(!a3){t=C.cd(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.a2d(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.bfm(t,v)
else{q=D.f.S(J.A(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.bd(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.a2d(a5,o,i+(m&1),x.a,n,v)
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
for(g=0;g<2;++g){r=a1.a2d(a5,a2[2],i+(m&1),x.c,0,v)
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
bfm(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
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
u=D.f.S(v+s,3)
J.bd(e.a,e.d+p,u)
u=D.f.S(q+r,3)
J.bd(e.a,e.d+(p+16),u)
u=D.f.S(v-s,3)
J.bd(e.a,e.d+(p+32),u)
u=D.f.S(q-r,3)
J.bd(e.a,e.d+(p+48),u)
p+=64}},
aWf(d,e){var x,w,v,u,t,s
if(d.fA(e[3])===0)x=d.fA(e[4])===0?2:3+d.fA(e[5])
else if(d.fA(e[6])===0)x=d.fA(e[7])===0?5+d.fA(159):7+2*d.fA(165)+d.fA(145)
else{w=d.fA(e[8])
v=2*w+d.fA(e[9+w])
u=A.eJu[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.fA(u[s])
x+=3+D.f.cN(8,v)}return x},
a2d(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.fA(p[0])===0)return h
while(d.fA(p[1])===0){++h
p=e[A.UA[h]].a[0]
if(h===16)return 16}x=h+1
w=e[A.UA[x]].a
if(d.fA(p[2])===0){p=w[1]
v=1}else{v=this.aWf(d,p)
p=w[2]}u=A.eQ3[h]
t=d.b
t===$&&C.b()
s=d.afn(D.f.S(t,1))
t=d.b
r=A.Uo[t]
d.b=A.Un[t]
t=d.d
t===$&&C.b()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.bd(i.a,i.d+u,t*q)}return 16},
b75(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.b8
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
r=A.eQh[l[j]][w]
q=A.Uf[o.c.fA(r[0])]
while(q>0)q=A.Uf[2*q+o.c.fA(r[q])]
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
B.a0b.prototype={
eh(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.f.cE(this.fA(128),w))>>>0
return x},
Gv(d){var x=this.eh(d)
return this.eh(1)===1?-x:x},
fA(d){var x,w=this,v=w.b
v===$&&C.b()
x=w.afn(D.f.S(v*d,8))
if(w.b<=126)w.bcC()
return x},
afn(d){var x,w,v,u,t,s=this,r=s.d
r===$&&C.b()
if(r<0){x=s.a
w=x.c
v=x.d
if(w-v>=1){u=x.bx()
r=s.c
r===$&&C.b()
s.c=(u|r<<8)>>>0
r=s.d+8
s.d=r
t=r}else{if(v<w){r=x.bx()
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
if(D.f.j8(r,t)>d){x=s.b
x===$&&C.b()
w=d+1
s.b=x-w
s.c=r-D.f.cE(w,t)
return 1}else{s.b=d
return 0}},
bcC(){var x,w=this,v=w.b
v===$&&C.b()
x=A.Uo[v]
w.b=A.Un[v]
v=w.d
v===$&&C.b()
w.d=v-x}}
B.bjt.prototype={
ad4(d,e,f){var x,w=C.bS(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.alD(w,e,f))this.Qu(w,e)}},
ad3(d,e,f){var x,w=C.bS(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.alD(w,1,f))this.Qu(w,1)}},
aES(d,e,f){var x,w,v=C.bS(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.ad4(v,e,f)}},
aER(d,e,f){var x,w=C.bS(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.ad3(w,e,f)}},
bza(d,e,f,g,h){var x,w,v=C.bS(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.CB(v,e,1,16,f,g,h)}},
boI(d,e,f,g,h){var x,w=C.bS(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.CB(w,1,e,16,f,g,h)}},
CC(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.bS(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.alE(h,e,a0,a1))if(this.akt(h,e,a2))this.Qu(h,e)
else{s=J.A(h.a,h.d+x)
r=J.A(h.a,h.d+w)
q=J.A(h.a,h.d+v)
p=J.A(h.a,h.d)
o=J.A(h.a,h.d+e)
n=J.A(h.a,h.d+u)
m=$.c1A()
l=m[1020+3*(p-q)+m[1020+r-o]]
m=D.f.S(27*l+63,7)
k=(m&2147483647)-((m&2147483648)>>>0)
m=D.f.S(18*l+63,7)
j=(m&2147483647)-((m&2147483648)>>>0)
m=D.f.S(9*l+63,7)
i=(m&2147483647)-((m&2147483648)>>>0)
m=$.nB()[255+s+i]
J.bd(h.a,h.d+x,m)
m=$.nB()[255+r+j]
J.bd(h.a,h.d+w,m)
m=$.nB()[255+q+k]
J.bd(h.a,h.d+v,m)
m=$.nB()[255+p-k]
J.bd(h.a,h.d,m)
m=$.nB()[255+o-j]
J.bd(h.a,h.d+e,m)
m=$.nB()[255+n-i]
J.bd(h.a,h.d+u,m)}h.d+=f}},
CB(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=C.bS(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.alE(k,e,h,i))if(this.akt(k,e,j))this.Qu(k,e)
else{u=J.A(k.a,k.d+x)
t=J.A(k.a,k.d+w)
s=J.A(k.a,k.d)
r=J.A(k.a,k.d+e)
q=3*(s-t)
p=$.c1B()
o=D.f.S(q+4,3)
n=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.f.S(q+3,3)
m=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.f.S(n+1,1)
l=(o&2147483647)-((o&2147483648)>>>0)
o=$.nB()[255+u+l]
J.bd(k.a,k.d+x,o)
o=$.nB()[255+t+m]
J.bd(k.a,k.d+w,o)
o=$.nB()[255+s-n]
J.bd(k.a,k.d,o)
o=$.nB()[255+r-l]
J.bd(k.a,k.d+e,o)}k.d+=f}},
Qu(d,e){var x=J.A(d.a,d.d+-2*e),w=-e,v=J.A(d.a,d.d+w),u=J.A(d.a,d.d),t=J.A(d.a,d.d+e),s=3*(u-v)+$.c1A()[1020+x-t],r=$.c1B(),q=r[112+D.f.iI(D.f.S(s+4,3),32)],p=r[112+D.f.iI(D.f.S(s+3,3),32)]
d.l(0,w,$.nB()[255+v+p])
d.l(0,0,$.nB()[255+u-q])},
akt(d,e,f){var x=J.A(d.a,d.d+-2*e),w=J.A(d.a,d.d+-e),v=J.A(d.a,d.d),u=J.A(d.a,d.d+e),t=$.aBR()
return t[255+x-w]>f||t[255+u-v]>f},
alD(d,e,f){var x=J.A(d.a,d.d+-2*e),w=J.A(d.a,d.d+-e),v=J.A(d.a,d.d),u=J.A(d.a,d.d+e)
return 2*$.aBR()[255+w-v]+$.c1z()[255+x-u]<=f},
alE(d,e,f,g){var x=J.A(d.a,d.d+-4*e),w=J.A(d.a,d.d+-3*e),v=J.A(d.a,d.d+-2*e),u=J.A(d.a,d.d+-e),t=J.A(d.a,d.d),s=J.A(d.a,d.d+e),r=J.A(d.a,d.d+2*e),q=J.A(d.a,d.d+3*e),p=$.aBR(),o=255+v
if(2*p[255+u-t]+$.c1z()[o-s]>f)return!1
return p[255+x-w]<=g&&p[255+w-v]<=g&&p[o-u]<=g&&p[255+q-r]<=g&&p[255+r-s]<=g&&p[255+s-t]<=g},
t7(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
for(x=0,w=0,v=0;v<4;++v){u=x+8
t=J.A(d.a,d.d+x)+J.A(d.a,d.d+u)
s=J.A(d.a,d.d+x)-J.A(d.a,d.d+u)
u=x+4
r=D.f.S(J.A(d.a,d.d+u)*35468,16)
q=x+12
p=D.f.S(J.A(d.a,d.d+q)*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.f.S(J.A(d.a,d.d+u)*85627,16)
q=D.f.S(J.A(d.a,d.d+q)*35468,16)
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
r=D.f.S(u*35468,16)
q=j[w+12]
p=D.f.S(q*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.f.S(u*85627,16)
q=D.f.S(q*35468,16)
n=(u&2147483647)-((u&2147483648)>>>0)+((q&2147483647)-((q&2147483648)>>>0))
B.Bb(e,l,0,0,t+n)
B.Bb(e,l,1,0,s+o)
B.Bb(e,l,2,0,s-o)
B.Bb(e,l,3,0,t-n);++w
l+=32}},
Bv(d,e,f){this.t7(d,e)
if(f)this.t7(C.bS(d,null,16),C.bS(e,null,4))},
Nw(d,e){var x,w,v=J.A(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)B.Bb(e,0,w,x,v)},
aA7(d,e){var x=this,w=null
if(J.A(d.a,d.d)!==0)x.Nw(d,e)
if(J.A(d.a,d.d+16)!==0)x.Nw(C.bS(d,w,16),C.bS(e,w,4))
if(J.A(d.a,d.d+32)!==0)x.Nw(C.bS(d,w,32),C.bS(e,w,128))
if(J.A(d.a,d.d+48)!==0)x.Nw(C.bS(d,w,48),C.bS(e,w,132))}}
B.bjy.prototype={
P7(d){return this.c.$1$context(d)}}
B.bjC.prototype={}
B.bjE.prototype={}
B.a0a.prototype={}
B.bjD.prototype={}
B.bju.prototype={}
B.GN.prototype={}
B.amK.prototype={}
B.amM.prototype={}
B.amL.prototype={}
B.amN.prototype={}
B.a0c.prototype={
KX(){var x,w=this.b
if(w.hh(8)!==47)return!1
x=this.c
x.f=A.yJ
x.a=w.hh(14)+1
x.b=w.hh(14)+1
x.d=w.hh(1)!==0
if(w.hh(3)!==0)return!1
return!0},
oL(){var x,w,v,u,t,s=this,r=null
s.e=0
if(!s.KX())return r
x=s.c
s.HO(x.a,x.b,!0)
s.aeY()
w=x.a
s.d=C.fS(r,r,D.ax,0,D.bQ,x.b,r,0,4,r,D.ax,w,!1)
w=s.ch
w.toString
v=x.a
u=x.b
if(!s.a1i(w,v,u,u,s.gb8s()))return r
x=x.w
if(x.length!==0){t=C.cd(new C.bI(x),!1,r,0)
x=s.d
x.toString
x.e=B.c3r(t)}return s.d},
aeY(){var x,w=this,v=w.c,u=v.a
v=u*v.b+u
x=new Uint32Array(v+u*16)
w.ch=x
w.CW=J.cn(D.bM.ga5(x),0,null)
w.cx=v
return!0},
b9h(d){var x,w,v,u=this,t=u.b,s=t.hh(2),r=u.ay,q=D.f.cN(1,s)
if((r&q)>>>0!==0)return!1
u.ay=(r|q)>>>0
x=new B.amJ(A.a7M)
u.ax.push(x)
r=A.f1e[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.hh(3)+2
x.e=t
x.d=u.HO(B.Bc(x.b,t),B.Bc(x.c,x.e),!1)
break
case 3:w=t.hh(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=B.Bc(x.b,v)
x.e=v
x.d=u.HO(w,1,!1)
u.aUt(w,x)
break
case 2:break}return!0},
HO(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.hh(1)!==0;){t=C.c([u,v],w)
if(!p.b9h(t))throw C.n(C.bJ("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.hh(1)!==0){s=x.hh(4)
if(!(s>=1&&s<=11))throw C.n(C.bJ("Invalid Color Cache"))}else s=0
if(!p.b94(u,v,s,f))throw C.n(C.bJ("Invalid Huffman Codes"))
if(s>0){x=D.f.cN(1,s)
p.r=x
p.w=new B.bjz(new Uint32Array(x),32-s)}else p.r=0
x=p.c
x.a=u
x.b=v
r=p.y
p.z=B.Bc(u,r)
p.x=r===0?4294967295:D.f.cN(1,r)-1
if(f){p.e=0
return null}q=new Uint32Array(u*v)
if(!p.a1i(q,u,v,v,null))throw C.n(C.bJ("Failed to decode image data."))
p.e=0
return q},
a1i(a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=a0.e,a2=D.f.eD(a1,a9),a3=D.f.aC(a1,a9),a4=a0.aj7(a3,a2),a5=a0.e,a6=a9*b0,a7=a9*b1
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
if((a3&v)>>>0===0){p=a0.Im(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(u.a>=32)u.zw()
r=a4.a
o=r[0].xA(u)
n=0
if(o<256){m=r[1].xA(u)
if(u.a>=32)u.zw()
l=C.clm(r[2].xA(u),o,m,r[3].xA(u))
a1&2&&C.u(a8)
a8[a5]=l;++a5;++a3
if(a3>=a9){++a2
if(D.f.aC(a2,16)===0&&t)b2.$1(a2)
if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.f.eb(j*506832829>>>0,r)
k&2&&C.u(q)
q[i]=j;++s}a3=n}}else if(o<280){h=a0.QW(o-256)
g=r[4].xA(u)
if(u.a>=32)u.zw()
f=a0.amu(a9,a0.QW(g))
if(a5<f||a6-a5<h)return!1
else{e=a5-f
for(d=0;d<h;++d){r=a8[e+d]
a1&2&&C.u(a8)
a8[a5+d]=r}a5+=h}a3+=h
while(a3>=a9){a3-=a9;++a2
if(D.f.aC(a2,16)===0&&t)b2.$1(a2)}if(a5<a7){if((a3&v)>>>0!==0){p=a0.Im(a0.Q,a0.z,a0.y,a3,a2)
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
b1W(){var x,w,v,u
if(this.r>0)return!1
for(x=this.as,w=this.at,v=0;v<x;++v){u=w[v].a
if(u[1].f>1)return!1
if(u[2].f>1)return!1
if(u[3].f>1)return!1}return!0},
aUA(d){var x,w,v,u,t,s,r=this,q=r.f,p=d-q
if(p<=0)return
x=r.c
r.af7(p,x.a*q)
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
x=D.f.S(J.A(t.a,t.d+s),8)
q.$flags&2&&C.u(q)
q[u+s]=x&255}r.f=d},
aRU(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=o.e,m=D.f.eD(n,d),l=D.f.aC(n,d),k=o.aj7(l,m),j=o.e,i=d*e,h=d*f,g=o.x
n=o.b
for(;;){x=n.b
if(!(!(x.d>=x.c&&n.a>=64)&&j<h))break
if((l&g)>>>0===0){w=o.Im(o.Q,o.z,o.y,l,m)
k=o.at[w]}if(n.a>=32)n.zw()
x=k.a
v=x[0].xA(n)
if(v<256){x=o.CW
x===$&&C.b()
x.$flags&2&&C.u(x)
x[j]=v;++j;++l
if(l>=d){++m
if(D.f.aC(m,16)===0)o.a1R(m)
l=0}}else if(v<280){u=o.QW(v-256)
t=x[4].xA(n)
if(n.a>=32)n.zw()
s=o.amu(d,o.QW(t))
if(j>=s&&i-j>=u)for(x=o.CW,r=0;r<u;++r){x===$&&C.b()
q=j+r
p=x[q-s]
x.$flags&2&&C.u(x)
x[q]=p}else{o.e=j
return!0}j+=u
l+=u
while(l>=d){l-=d;++m
if(D.f.aC(m,16)===0)o.a1R(m)}if(j<h&&(l&g)>>>0!==0){w=o.Im(o.Q,o.z,o.y,l,m)
k=o.at[w]}}else return!1}o.a1R(m)
o.e=j
return!0},
a1R(d){var x,w,v,u=this,t=u.f,s=d-t,r=u.CW
r===$&&C.b()
x=C.cd(r,!1,null,u.c.a*t)
if(s>0){w=u.f
t=u.cy
t.toString
r=u.db
r.toString
v=C.cd(t,!1,null,r*w)
u.ax[0].bju(w,w+s,x,v)}u.f=d},
b8t(d){var x,w,v,u,t,s=this,r=s.c,q=r.a,p=s.f,o=d-p
if(o<=0)return
s.af7(o,q*p)
q=s.cx
q.toString
x=s.f
w=q
v=0
for(;v<o;++v,++x)for(u=0;u<r.a;++u,++w){t=s.ch[w]
q=s.d.a
if(q!=null)q.ic(u,x,t>>>16&255,t>>>8&255,t&255,t>>>24&255)}s.f=d},
af7(d,e){var x,w,v,u=this,t=u.ax,s=t.length,r=u.c.a,q=u.f,p=q+d,o=u.cx
o.toString
x=u.ch
x.toString
D.bM.cB(x,o,o+r*d,x,e)
for(w=e;v=s-1,s>0;w=o,s=v){r=t[v]
x=u.ch
x.toString
r.bqT(q,p,x,w,x,o)}},
b94(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=1
if(g&&l.b.hh(1)!==0){x=l.b.hh(3)+2
w=B.Bc(d,x)
v=B.Bc(e,x)
u=w*v
t=l.HO(w,v,!1)
l.y=x
for(s=0;s<u;++s){r=t[s]>>>8&65535
t.$flags&2&&C.u(t)
t[s]=r
if(r>=k)k=r+1}}else t=null
q=J.iM(k,y.f)
for(p=0;p<k;++p)q[p]=B.cuJ()
for(o=f>0,s=0;s<k;++s)for(n=0;n<5;++n){m=A.eNs[n]
if(n===0&&o)m+=D.f.cN(1,f)
if(!l.b92(m,q[s].a[n]))return!1}l.Q=t
l.as=k
l.at=q
return!0},
b92(d,e){var x,w,v,u,t,s,r,q,p,o=this.b
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
u[1]=x}s=e.biN(u,v,w,d,t)}else{r=new Int32Array(19)
q=o.hh(4)+4
if(q>19)return!1
u=new Int32Array(d)
for(p=0;p<q;++p)r[A.ePy[p]]=o.hh(3)
s=this.b93(r,d,u)
if(s)s=e.asy(u,d)}return s},
b93(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=B.ccy()
if(!j.asy(d,19))return!1
x=this.b
if(x.hh(1)!==0){w=2+x.hh(2+2*x.hh(3))
if(w>e)return!1}else w=e
for(v=f.$flags|0,u=0,t=8;u<e;w=s){s=w-1
if(w===0)break
if(x.a>=32)x.zw()
r=j.xA(x)
if(r<16){q=u+1
v&2&&C.u(f)
f[u]=r
if(r!==0)t=r
u=q}else{p=r-16
o=A.emN[p]
n=A.esp[p]
m=x.hh(o)+n
if(u+m>e)return!1
else{l=r===16?t:0
for(;k=m-1,m>0;m=k,u=q){q=u+1
v&2&&C.u(f)
f[u]=l}}}}return!0},
QW(d){var x
if(d<4)return d+1
x=D.f.S(d-2,1)
return D.f.cN(2+(d&1),x)+this.b.hh(x)+1},
amu(d,e){var x,w
if(e>120)return e-120
else{x=A.eNI[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
aUt(d,e){var x,w,v,u,t,s,r=D.f.cN(1,D.f.fG(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.cn(D.bM.ga5(p),0,null)
w=J.cn(D.bM.ga5(q),0,null)
q[0]=e.d[0]
v=4*d
for(p=w.$flags|0,u=4;u<v;++u){t=x[u]
s=w[u-4]
p&2&&C.u(w)
w[u]=t+s&255}for(v=4*r;u<v;++u){p&2&&C.u(w)
w[u]=0}e.d=q
return!0},
Im(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.f.S(h,f)+D.f.S(g,f)]},
aj7(d,e){var x=this,w=x.Im(x.Q,x.z,x.y,d,e)
return x.at[w]}}
B.afs.prototype={
bo0(d){return this.aUA(d)}}
B.amI.prototype={
ayN(){var x,w,v=this.a
if(v<32){x=this.c
w=D.f.eb(x[0],v)+((x[1]&A.DT[v])>>>0)*(A.DT[32-v]+1)}else{x=this.c
w=v===32?x[1]:D.f.eb(x[1],v-32)}return w},
hh(d){var x,w=this,v=w.b
if(!(v.d>=v.c&&w.a>=64)&&d<25){v=w.ayN()
x=A.DT[d]
w.a+=d
w.zw()
return(v&x)>>>0}else throw C.n(C.bJ("Not enough data in input."))},
zw(){var x,w,v,u=this,t=u.b,s=u.c,r=s.$flags|0,q=t.c
for(;;){if(!(u.a>=8&&t.d<q))break
x=J.A(t.a,t.d++)
w=s[0]
v=s[1]
r&2&&C.u(s)
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
B.bjz.prototype={}
B.GO.prototype={
H(){return"VP8LImageTransformType."+this.b}}
B.amJ.prototype={
bqT(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.bhO(h,i,i+(e-d)*s)
break
case 0:t.bvG(d,e,h,i)
if(e!==t.c){x=i-s
D.bM.cB(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.bjv(d,e,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*B.Bc(s,t.e)
u=i+w*s-v
D.bM.cB(h,u,u+v,f,i)
t.at8(d,e,f,u,h,i)}else t.at8(d,e,f,g,h,i)
break}},
bju(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.f.fG(8,r),p=this.b,o=this.d
if(q<8){x=D.f.cN(1,r)-1
w=D.f.cN(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.A(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.bd(g.a,g.d,r>>>8&255);++g.d
u=D.f.S(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.A(f.a,f.d);++f.d
r=o[s]
J.bd(g.a,g.d,r>>>8&255);++g.d}},
at8(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.f.fG(8,p),n=this.b,m=this.d
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
bjv(a2,a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b,e=g.e,d=D.f.cN(1,e)-1,a0=B.Bc(f,e),a1=D.f.S(a2,g.e)*a0
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
o=$.lP()
o.$flags&2&&C.u(o)
o[0]=p
p=$.mH()
n=p[0]
o[0]=q
m=p[0]
l=$.aBU()
l.$flags&2&&C.u(l)
l[0]=n*m
k=$.c1F()
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
bvG(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=this,n=o.b
if(d===0){B.bjA(f,g,4278190080)
for(x=1;x<n;++x){w=g+x
B.bjA(f,w,f[w-1])}g+=n;++d}w=o.e
v=D.f.cN(1,w)-1
u=B.Bc(n,w)
t=D.f.S(d,o.e)*u
for(s=d;s<e;){B.bjA(f,g,f[g-n])
r=t+1
q=$.cgY[o.d[t]>>>8&15]
for(x=1;x<n;++x){if((x&v)>>>0===0){p=r+1
q=$.cgY[o.d[r]>>>8&15]
r=p}w=g+x
B.bjA(f,w,q.$3(f,f[w-1],w-n))}g+=n;++s
if((s&v)>>>0===0)t+=u}},
bhO(d,e,f){var x,w,v,u
for(x=d.$flags|0;e<f;e=u){w=d[e]
v=w>>>8&255
u=e+1
x&2&&C.u(d)
d[e]=(w&4278255360|(w&16711935)+(v<<16|v)&16711935)>>>0}}}
B.bka.prototype={
gcU(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
KV(d,e,f){var x,w,v,u,t,s,r=this
if(!r.gcU())return!1
x=A.f4f[r.e]
if(r.d===0){w=r.b
v=d*w
u=r.a
D.K.cB(f,v,e*w,u.a,u.d-u.b+v)}else{w=d+e
u=r.x
u===$&&C.b()
u.cy=f
t=u.c
if(r.y)w=u.aRU(t.a,t.b,w)
else{s=u.ch
s.toString
u=u.a1i(s,t.a,t.b,w,u.gbo_())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,d,e,f)}if(r.f===1)if(!r.aSI(f,r.b,r.c,d,e))return!1
if(d+e===r.c)r.w=!0
return!0},
aSI(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
B.a0h.prototype={
aMn(d,e){var x=this,w=d.bx()
x.r=0
x.f=(w&1)!==0
x.w=d.d-d.b
x.x=e-16}}
B.aft.prototype={}
B.aeI.prototype={
a5W(d){var x,w=this
if(d===0)return!1
x=(d<<1>>>0)-1
w.e=x
x=new Int32Array(x<<1>>>0)
w.d=x
x[1]=-1
w.f=1
D.K.fu(w.a,0,128,255)
return!0},
asy(d,e){var x,w,v,u,t,s=this
for(x=0,w=0,v=0;v<e;++v)if(d[v]>0){++x
w=v}if(!s.a5W(x))return!1
if(x===1){if(w<0||w>=e)return!1
return s.a0h(w,0,0)}u=new Int32Array(e)
if(!s.b1h(d,e,u))return!1
for(v=0;v<e;++v){t=d[v]
if(t>0)if(!s.a0h(v,u[v],t))return!1}return s.f===s.e},
biN(d,e,f,g,h){var x,w,v,u=this
if(!u.a5W(h))return!1
for(x=0;x<h;++x){w=e[x]
if(w!==-1){v=f[x]
if(v>=g)return u.f===u.e
if(!u.a0h(v,w,d[x]))return u.f===u.e}}return u.f===u.e},
xA(d){var x,w,v=this,u=d.ayN(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}x=v.c[s]
t+=7
u=u>>>7
do{w=v.d
w===$&&C.b()
x=x+w[(x<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.alI(x))
d.a=t
return v.d[x<<1>>>0]},
a0h(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
if(f<=7){x=l.anJ(e,f)
for(w=D.f.cE(1,7-f),v=l.b,u=v.$flags|0,t=l.a,s=t.$flags|0,r=0;r<w;++r){q=(x|D.f.cE(r,f))>>>0
u&2&&C.u(v)
v[q]=d
s&2&&C.u(t)
t[q]=f}}else x=l.anJ(D.f.j8(e,f-7),7)
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
o+=t[s]+(D.f.j8(e,n)&1);--p
if(p===0){v&2&&C.u(w)
w[x]=o}}if(l.b4_(o))l.b40(o,0)
else if(l.alI(o))return!1
w=l.d
w===$&&C.b()
w.$flags&2&&C.u(w)
w[o<<1>>>0]=d
return!0},
anJ(d,e){return D.f.eb((A.UP[d&15]<<4|A.UP[D.f.S(d,4)])>>>0,8-e)},
b40(d,e){var x=this.d
x===$&&C.b()
x.$flags&2&&C.u(x)
x[(d<<1>>>0)+1]=e},
alI(d){var x=this.d
x===$&&C.b()
return x[(d<<1>>>0)+1]!==0},
b4_(d){var x=this.d
x===$&&C.b()
return x[(d<<1>>>0)+1]<0},
b1h(d,e,f){var x,w,v,u,t,s,r,q,p=new Int32Array(16),o=new Int32Array(16)
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
B.UZ.prototype={
h(d,e){return this.a[e]}}
B.Ou.prototype={
H(){return"WebPFormat."+this.b}}
B.an0.prototype={
gbK(){return this.a},
gaO(){return this.b}}
B.afu.prototype={}
B.bkb.prototype={
Fb(d){var x=C.cd(d,!1,null,0)
this.b=x
if(!this.aj4(x))return!1
return!0},
iN(d){var x,w=this,v=null,u=C.cd(d,!1,v,0)
w.b=u
if(!w.aj4(u))return v
u=new B.afu(A.tl,C.c([],y.J))
w.a=u
x=w.b
x.toString
if(!w.aro(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!B.c5J(x,u).KX())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!B.c5H(x,u).KX())return v
u=w.a
u.as=u.z.length
return u
case 0:throw C.n(C.bJ("Unknown format for WebP"))}},
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
return t.ahd(s.yw(x,w),d)}w=x.f
if(w===A.yJ){u=s.yw(x.ch,x.ay)
s=t.a
s.toString
return B.c5J(u,s).oL()}else if(w===A.Gw){u=s.yw(x.ch,x.ay)
s=t.a
s.toString
return B.c5H(u,s).oL()}return null},
mn(d,e){var x,w,v,u,t,s,r,q,p=this,o=null
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
r=t.gnT()
q=t.a
q=q==null?o:q.gc6()
if(q==null)q=D.ax
v=C.fS(o,o,q,t.y,D.bQ,x,o,0,r,o,D.ax,s,!1)
w=v}else{w=C.vL(w,!1,!1)
x=e.f
x===$&&C.b()
if(x){x=w.a
if(x!=null)x.l9(0,o)}}C.c7e(w,t,D.zA,o,o,e.a,e.b,o,o,o,o)
v.l4(w)}return v},
ahd(d,e){var x,w,v,u=null,t=C.c([],y.J),s=new B.afu(A.tl,t)
if(!this.aro(d,s))return u
if(s.f===A.tl)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.x
t===$&&C.b()
x=w.w
x===$&&C.b()
return this.ahd(d.yw(t,x),e)}else{v=d.yw(s.ch,s.ay)
t=s.f
if(t===A.yJ)return B.c5J(v,s).oL()
else if(t===A.Gw)return B.c5H(v,s).oL()}return u},
aj4(d){if(d.hi(4)!=="RIFF")return!1
d.Z()
if(d.hi(4)!=="WEBP")return!1
return!0},
aro(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=d.c,w=d.b;d.d<x;){v=d.hi(4)
u=d.Z()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.aWO(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=A.Gw
break
case"VP8L":e.ay=r
e.ch=u
e.f=A.yJ
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.av(s)
o=p.gu(s)
p=p.gu(s)
s=new C.kQ(s,0,Math.min(o,p),0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=A.fAZ
n=d.Z()
s=new Uint8Array(4)
s[0]=n>>>8&255
s[1]=n>>>16&255
s[2]=n>>>24&255
s[3]=n&255
d.ad()
break
case"ANMF":if(!this.aVM(d,e,u))return!1
break
case"ICCP":e.toString
m=d.hC(u)
d.d=d.d+(m.c-m.d)
m.eM()
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
return e.f!==A.tl},
aWO(d,e){var x,w,v,u,t=d.bx()
if((t&192)!==0)return!1
x=D.f.S(t,4)
w=D.f.S(t,1)
if((t&1)!==0)return!1
if(d.po()!==0)return!1
v=d.po()
u=d.po()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
aVM(d,e,f){var x=new B.aft(d.po()*2,d.po()*2,d.po()+1,d.po()+1,d.po())
x.aMn(d,f)
if(x.r!==0)return!1
e.z.push(x)
return!0}}
B.ahf.prototype={
b0(d){var x,w,v=this
if(v.a===v.c.length)v.aUs()
x=v.c
w=v.a++
x.$flags&2&&C.u(x)
x[w]=d&255},
jP(d){var x,w,v,u,t=this,s=J.aY(d)
while(x=t.a,w=x+s,v=t.c,u=v.length,w>u)t.aid(w-u)
D.K.dE(v,x,w,d)
t.a+=s},
iK(d){var x=this
if(x.b){x.b0(D.f.S(d,8)&255)
x.b0(d&255)
return}x.b0(d&255)
x.b0(D.f.S(d,8)&255)},
h4(d){var x=this
if(x.b){x.b0(D.f.S(d,24)&255)
x.b0(D.f.S(d,16)&255)
x.b0(D.f.S(d,8)&255)
x.b0(d&255)
return}x.b0(d&255)
x.b0(D.f.S(d,8)&255)
x.b0(D.f.S(d,16)&255)
x.b0(D.f.S(d,24)&255)},
bzG(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=J.cn(D.kI.ga5(v),0,null)
if(w.b){w.b0(x[3])
w.b0(x[2])
w.b0(x[1])
w.b0(x[0])
return}w.b0(x[0])
w.b0(x[1])
w.b0(x[2])
w.b0(x[3])},
bzH(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=J.cn(D.lJ.ga5(v),0,null)
if(w.b){w.b0(x[7])
w.b0(x[6])
w.b0(x[5])
w.b0(x[4])
w.b0(x[3])
w.b0(x[2])
w.b0(x[1])
w.b0(x[0])
return}w.b0(x[0])
w.b0(x[1])
w.b0(x[2])
w.b0(x[3])
w.b0(x[4])
w.b0(x[5])
w.b0(x[6])
w.b0(x[7])},
aid(d){var x,w,v,u
if(d!=null)x=d
else{w=this.c.length
x=w===0?8192:w*2}w=this.c
v=w.length
u=new Uint8Array(v+x)
D.K.dE(u,0,v,w)
this.c=u},
aUs(){return this.aid(null)},
gu(d){return this.a}}
var z=a.updateTypes(["~(kQ)","v(ow,v,v)","~(zn,w<v>)","~(v,v,v,v,v,e1)","~(v)","zn(v)"])
B.aFN.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.fC(x.ch.kN(d),x.ch.kM(d),x.ch.kL(d),x.ch.m0(d))}else w.fC(d,e,f,g)
w.q();++u.a}},
$S:1246}
B.aPc.prototype={
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
$S:1247}
B.aVf.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.bx(),r=t.bx()
t=this.a
if(!t.d.y.aE(s))throw C.n(C.bJ("Invalid Component in SOS block"))
x=t.d.y.h(0,s)
x.toString
w=D.f.S(r,4)&15
v=r&15
u=t.z
if(w<u.length){u=u[w]
u.toString
x.w=u}t=t.y
if(v<t.length){t=t[v]
t.toString
x.x=t}return x},
$S:z+5}
B.b1X.prototype={
$1(d){return d!==""},
$S:12}
B.bjF.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:113};(function installTearOffs(){var x=a._instance_2u,w=a._static_1,v=a._instance_1u,u=a.installStaticTearOff
var t
x(t=B.afH.prototype,"gaRW","aRX",2)
x(t,"gaRZ","aS_",2)
x(t,"gaS0","aS1",2)
x(t,"gaRQ","aRR",2)
x(t,"gaRS","aRT",2)
w(B,"cLU","cBi",0)
w(B,"cLN","cBa",0)
w(B,"cLL","cB8",0)
w(B,"cLS","cBg",0)
w(B,"cLT","cBh",0)
w(B,"cLR","cBf",0)
w(B,"cLQ","cBe",0)
w(B,"cLP","cBd",0)
w(B,"cLW","cBk",0)
w(B,"cLV","cBj",0)
w(B,"cLO","cBb",0)
w(B,"cLM","cB9",0)
w(B,"cM6","cBv",0)
w(B,"cM4","cBt",0)
w(B,"cLX","cBl",0)
w(B,"cLZ","cBn",0)
w(B,"cLY","cBm",0)
w(B,"cM_","cBo",0)
w(B,"cM7","cBw",0)
w(B,"cM5","cBu",0)
w(B,"cM0","cBp",0)
w(B,"cM1","cBq",0)
w(B,"cM2","cBr",0)
w(B,"cM3","cBs",0)
v(B.a0c.prototype,"gb8s","b8t",4)
v(B.afs.prototype,"gbo_","bo0",4)
u(B,"c7R",3,null,["$3"],["cBx"],1,0)
u(B,"cM8",3,null,["$3"],["cBy"],1,0)
u(B,"cMd",3,null,["$3"],["cBD"],1,0)
u(B,"cMe",3,null,["$3"],["cBE"],1,0)
u(B,"cMf",3,null,["$3"],["cBF"],1,0)
u(B,"cMg",3,null,["$3"],["cBG"],1,0)
u(B,"cMh",3,null,["$3"],["cBH"],1,0)
u(B,"cMi",3,null,["$3"],["cBI"],1,0)
u(B,"cMj",3,null,["$3"],["cBJ"],1,0)
u(B,"cMk",3,null,["$3"],["cBK"],1,0)
u(B,"cM9",3,null,["$3"],["cBz"],1,0)
u(B,"cMa",3,null,["$3"],["cBA"],1,0)
u(B,"cMb",3,null,["$3"],["cBB"],1,0)
u(B,"cMc",3,null,["$3"],["cBC"],1,0)
u(B,"cMn",6,null,["$6"],["cBW"],3,0)
u(B,"cMo",6,null,["$6"],["cBX"],3,0)
u(B,"cMm",6,null,["$6"],["cBV"],3,0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(C.hp,[B.kG,B.Km,B.Dv,B.qp,B.KE,B.zT,B.r0,B.mv,B.GD,B.jg,B.pB,B.GO,B.Ou])
x(C.D,[B.aFO,B.Cz,B.aKv,B.adv,B.aPa,B.adw,B.adx,B.ady,B.Uo,B.atG,B.UT,B.UU,B.aeg,B.aU5,B.af_,B.abL,B.DV,B.aVb,B.zn,B.aVd,B.Po,B.afG,B.aVh,B.aVi,B.afH,B.u_,B.Mh,B.b3D,B.Mg,B.b3F,B.aiq,B.ait,B.aiA,B.XO,B.Mk,B.aiz,B.po,B.am5,B.bhF,B.am6,B.bhH,B.am7,B.bhI,B.aWv,B.bjs,B.a0b,B.bjt,B.bjy,B.bjC,B.bjE,B.a0a,B.bjD,B.bju,B.GN,B.amK,B.amM,B.amL,B.amN,B.a0c,B.amI,B.bjz,B.amJ,B.bka,B.a0h,B.aeI,B.UZ,B.an0,B.ahf])
x(C.acn,[B.aaK,B.aPb,B.aS8,B.aU4,B.VD,B.b1W,B.b3E,B.b3P,B.bhv,B.bhG,B.bkb])
x(C.cA,[B.aFN,B.aPc,B.aVf,B.b1X])
w(B.aKV,B.aaK)
w(B.aUT,B.aPa)
x(B.aUT,[B.afk,B.aUU,B.aUV,B.aUW,B.afm])
w(B.afl,B.Uo)
w(B.afn,B.UU)
w(B.aU3,B.Cz)
x(B.DV,[B.DW,B.V7])
w(B.Fc,B.aKv)
x(B.u_,[B.aio,B.aip,B.air,B.ais,B.aiv,B.aiw])
x(B.Mh,[B.XK,B.aiu])
x(B.aiA,[B.wp,B.kW])
w(B.bjF,C.dH)
w(B.afs,B.a0c)
w(B.aft,B.a0h)
w(B.afu,B.an0)})()
C.cW(b.typeUniverse,JSON.parse('{"afl":{"Uo":[]},"afn":{"UU":[]},"DW":{"DV":[]},"V7":{"DV":[]},"aio":{"u_":[]},"aip":{"u_":[]},"air":{"u_":[]},"ais":{"u_":[]},"aiv":{"u_":[]},"aiw":{"u_":[]},"XK":{"Mh":[]},"aiu":{"Mh":[]},"aft":{"a0h":[]}}'))
C.QE(b.typeUniverse,JSON.parse('{"aiA":1}'))
var y=(function rtii(){var x=C.O
return{n:x("adv"),W:x("adx"),f:x("UZ"),x:x("aeI"),Y:x("af_"),P:x("mZ"),u:x("kd"),k:x("E4"),E:x("x<abL>"),Q:x("x<adw>"),m:x("x<Uo>"),b:x("x<UU>"),A:x("x<UZ>"),g:x("x<w<w<w<v>>>>"),o:x("x<w<w<v>>>"),S:x("x<w<v>>"),X:x("x<Mg>"),v:x("x<u_>"),l:x("x<ait>"),s:x("x<f>"),L:x("x<am7>"),d:x("x<GN>"),F:x("x<amJ>"),J:x("x<a0h>"),G:x("x<Po>"),t:x("x<v>"),T:x("x<DV?>"),a:x("x<afG?>"),w:x("x<ow?>"),y:x("x<~(kQ)>"),c:x("zn"),H:x("w<E4>"),z:x("w<a0a>"),K:x("w<GN>"),e:x("Mg"),h:x("aiq"),C:x("XK"),O:x("Mh"),M:x("XO"),i:x("Mk"),N:x("f"),j:x("am6"),R:x("ow"),D:x("e1"),V:x("a0a"),q:x("amK"),_:x("amL"),bt:x("amN"),U:x("al<f>"),bc:x("atG"),p:x("v"),r:x("afj?"),bT:x("w<DV?>?"),ac:x("e1?"),ak:x("a0b?"),B:x("GN?"),Z:x("amM?"),I:x("v?")}})();(function constants(){var x=a.makeConstList
A.Hr=new B.kG(0,"none")
A.zB=new B.kG(3,"bitfields")
A.zC=new B.kG(6,"alphaBitfields")
A.dYq=new B.Dv(0,"red")
A.dYr=new B.Dv(1,"green")
A.dYs=new B.Dv(2,"blue")
A.dYt=new B.Dv(3,"alpha")
A.dYu=new B.Dv(4,"other")
A.MG=new B.Km(0,"uint")
A.Ca=new B.Km(1,"half")
A.Cb=new B.Km(2,"float")
A.MH=new B.qp(0,"none")
A.dZ7=new C.ae2(1,"page")
A.N9=new B.KE(2,"cur")
A.CY=x([0,2,8],y.t)
A.e48=x([0,4,2,1],y.t)
A.dZd=new B.KE(0,"invalid")
A.dZe=new B.KE(1,"ico")
A.e4b=x([A.dZd,A.dZe,A.N9],C.O("x<KE>"))
A.SH=x([292,260,226,226],y.t)
A.emN=x([2,3,7],y.t)
A.SL=x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68],y.t)
A.esp=x([3,3,11],y.t)
A.DQ=x([128,128,128,128,128,128,128,128,128,128,128],y.t)
A.TS=x([A.DQ,A.DQ,A.DQ],y.S)
A.eJo=x([253,136,254,255,228,219,128,128,128,128,128],y.t)
A.eOj=x([189,129,242,255,227,213,255,219,128,128,128],y.t)
A.eOq=x([106,126,227,252,214,209,255,255,128,128,128],y.t)
A.eRo=x([A.eJo,A.eOj,A.eOq],y.S)
A.eSg=x([1,98,248,255,236,226,255,255,128,128,128],y.t)
A.ewT=x([181,133,238,254,221,234,255,154,128,128,128],y.t)
A.esv=x([78,134,202,247,198,180,255,219,128,128,128],y.t)
A.eVV=x([A.eSg,A.ewT,A.esv],y.S)
A.eG1=x([1,185,249,255,243,255,128,128,128,128,128],y.t)
A.eRt=x([184,150,247,255,236,224,128,128,128,128,128],y.t)
A.f1b=x([77,110,216,255,236,230,128,128,128,128,128],y.t)
A.eQD=x([A.eG1,A.eRt,A.f1b],y.S)
A.eQP=x([1,101,251,255,241,255,128,128,128,128,128],y.t)
A.eJm=x([170,139,241,252,236,209,255,255,128,128,128],y.t)
A.eQZ=x([37,116,196,243,228,255,255,255,128,128,128],y.t)
A.eCr=x([A.eQP,A.eJm,A.eQZ],y.S)
A.eOU=x([1,204,254,255,245,255,128,128,128,128,128],y.t)
A.f4z=x([207,160,250,255,238,128,128,128,128,128,128],y.t)
A.f4i=x([102,103,231,255,211,171,128,128,128,128,128],y.t)
A.eN4=x([A.eOU,A.f4z,A.f4i],y.S)
A.eAa=x([1,152,252,255,240,255,128,128,128,128,128],y.t)
A.f4Z=x([177,135,243,255,234,225,128,128,128,128,128],y.t)
A.eQo=x([80,129,211,255,194,224,128,128,128,128,128],y.t)
A.eRn=x([A.eAa,A.f4Z,A.eQo],y.S)
A.TY=x([1,1,255,128,128,128,128,128,128,128,128],y.t)
A.eUk=x([246,1,255,128,128,128,128,128,128,128,128],y.t)
A.ePP=x([255,128,128,128,128,128,128,128,128,128,128],y.t)
A.f6B=x([A.TY,A.eUk,A.ePP],y.S)
A.eMS=x([A.TS,A.eRo,A.eVV,A.eQD,A.eCr,A.eN4,A.eRn,A.f6B],y.o)
A.f1n=x([198,35,237,223,193,187,162,160,145,155,62],y.t)
A.eJn=x([131,45,198,221,172,176,220,157,252,221,1],y.t)
A.f1l=x([68,47,146,208,149,167,221,162,255,223,128],y.t)
A.ePh=x([A.f1n,A.eJn,A.f1l],y.S)
A.eWa=x([1,149,241,255,221,224,255,255,128,128,128],y.t)
A.eXY=x([184,141,234,253,222,220,255,199,128,128,128],y.t)
A.ePH=x([81,99,181,242,176,190,249,202,255,255,128],y.t)
A.f_n=x([A.eWa,A.eXY,A.ePH],y.S)
A.eYS=x([1,129,232,253,214,197,242,196,255,255,128],y.t)
A.f40=x([99,121,210,250,201,198,255,202,128,128,128],y.t)
A.eRp=x([23,91,163,242,170,187,247,210,255,255,128],y.t)
A.ePV=x([A.eYS,A.f40,A.eRp],y.S)
A.eNF=x([1,200,246,255,234,255,128,128,128,128,128],y.t)
A.eYK=x([109,178,241,255,231,245,255,255,128,128,128],y.t)
A.emK=x([44,130,201,253,205,192,255,255,128,128,128],y.t)
A.f0c=x([A.eNF,A.eYK,A.emK],y.S)
A.eym=x([1,132,239,251,219,209,255,165,128,128,128],y.t)
A.e4d=x([94,136,225,251,218,190,255,255,128,128,128],y.t)
A.eZh=x([22,100,174,245,186,161,255,199,128,128,128],y.t)
A.eQM=x([A.eym,A.e4d,A.eZh],y.S)
A.eXX=x([1,182,249,255,232,235,128,128,128,128,128],y.t)
A.eRd=x([124,143,241,255,227,234,128,128,128,128,128],y.t)
A.eOe=x([35,77,181,251,193,211,255,205,128,128,128],y.t)
A.eOv=x([A.eXX,A.eRd,A.eOe],y.S)
A.f6C=x([1,157,247,255,236,231,255,255,128,128,128],y.t)
A.eMK=x([121,141,235,255,225,227,255,255,128,128,128],y.t)
A.eYQ=x([45,99,188,251,195,217,255,224,128,128,128],y.t)
A.eAs=x([A.f6C,A.eMK,A.eYQ],y.S)
A.e4e=x([1,1,251,255,213,255,128,128,128,128,128],y.t)
A.emT=x([203,1,248,255,255,128,128,128,128,128,128],y.t)
A.eY5=x([137,1,177,255,224,255,128,128,128,128,128],y.t)
A.eAk=x([A.e4e,A.emT,A.eY5],y.S)
A.eXr=x([A.ePh,A.f_n,A.ePV,A.f0c,A.eQM,A.eOv,A.eAs,A.eAk],y.o)
A.eNh=x([253,9,248,251,207,208,255,192,128,128,128],y.t)
A.eUl=x([175,13,224,243,193,185,249,198,255,255,128],y.t)
A.f6y=x([73,17,171,221,161,179,236,167,255,234,128],y.t)
A.eSO=x([A.eNh,A.eUl,A.f6y],y.S)
A.eWK=x([1,95,247,253,212,183,255,255,128,128,128],y.t)
A.eQ5=x([239,90,244,250,211,209,255,255,128,128,128],y.t)
A.f1a=x([155,77,195,248,188,195,255,255,128,128,128],y.t)
A.eXW=x([A.eWK,A.eQ5,A.f1a],y.S)
A.eOX=x([1,24,239,251,218,219,255,205,128,128,128],y.t)
A.eVh=x([201,51,219,255,196,186,128,128,128,128,128],y.t)
A.eQ4=x([69,46,190,239,201,218,255,228,128,128,128],y.t)
A.eWA=x([A.eOX,A.eVh,A.eQ4],y.S)
A.eOm=x([1,191,251,255,255,128,128,128,128,128,128],y.t)
A.eQY=x([223,165,249,255,213,255,128,128,128,128,128],y.t)
A.eRB=x([141,124,248,255,255,128,128,128,128,128,128],y.t)
A.eYR=x([A.eOm,A.eQY,A.eRB],y.S)
A.ePo=x([1,16,248,255,255,128,128,128,128,128,128],y.t)
A.eMI=x([190,36,230,255,236,255,128,128,128,128,128],y.t)
A.eJq=x([149,1,255,128,128,128,128,128,128,128,128],y.t)
A.eyn=x([A.ePo,A.eMI,A.eJq],y.S)
A.eRr=x([1,226,255,128,128,128,128,128,128,128,128],y.t)
A.eTB=x([247,192,255,128,128,128,128,128,128,128,128],y.t)
A.f13=x([240,128,255,128,128,128,128,128,128,128,128],y.t)
A.esk=x([A.eRr,A.eTB,A.f13],y.S)
A.f0b=x([1,134,252,255,255,128,128,128,128,128,128],y.t)
A.eRb=x([213,62,250,255,255,128,128,128,128,128,128],y.t)
A.f4G=x([55,93,255,128,128,128,128,128,128,128,128],y.t)
A.eRq=x([A.f0b,A.eRb,A.f4G],y.S)
A.eFT=x([A.eSO,A.eXW,A.eWA,A.eYR,A.eyn,A.esk,A.eRq,A.TS],y.o)
A.eRe=x([202,24,213,235,186,191,220,160,240,175,255],y.t)
A.eJk=x([126,38,182,232,169,184,228,174,255,187,128],y.t)
A.eyp=x([61,46,138,219,151,178,240,170,255,216,128],y.t)
A.eXy=x([A.eRe,A.eJk,A.eyp],y.S)
A.eQn=x([1,112,230,250,199,191,247,159,255,255,128],y.t)
A.eAr=x([166,109,228,252,211,215,255,174,128,128,128],y.t)
A.eQT=x([39,77,162,232,172,180,245,178,255,255,128],y.t)
A.eXt=x([A.eQn,A.eAr,A.eQT],y.S)
A.eQx=x([1,52,220,246,198,199,249,220,255,255,128],y.t)
A.eN1=x([124,74,191,243,183,193,250,221,255,255,128],y.t)
A.eOd=x([24,71,130,219,154,170,243,182,255,255,128],y.t)
A.eXs=x([A.eQx,A.eN1,A.eOd],y.S)
A.eOb=x([1,182,225,249,219,240,255,224,128,128,128],y.t)
A.f4C=x([149,150,226,252,216,205,255,171,128,128,128],y.t)
A.f6O=x([28,108,170,242,183,194,254,223,255,255,128],y.t)
A.f23=x([A.eOb,A.f4C,A.f6O],y.S)
A.f6T=x([1,81,230,252,204,203,255,192,128,128,128],y.t)
A.eYC=x([123,102,209,247,188,196,255,233,128,128,128],y.t)
A.f0A=x([20,95,153,243,164,173,255,203,128,128,128],y.t)
A.eYH=x([A.f6T,A.eYC,A.f0A],y.S)
A.ePB=x([1,222,248,255,216,213,128,128,128,128,128],y.t)
A.eRa=x([168,175,246,252,235,205,255,255,128,128,128],y.t)
A.eOi=x([47,116,215,255,211,212,255,255,128,128,128],y.t)
A.eMy=x([A.ePB,A.eRa,A.eOi],y.S)
A.ePw=x([1,121,236,253,212,214,255,255,128,128,128],y.t)
A.eQy=x([141,84,213,252,201,202,255,219,128,128,128],y.t)
A.eSF=x([42,80,160,240,162,185,255,205,128,128,128],y.t)
A.eOB=x([A.ePw,A.eQy,A.eSF],y.S)
A.f5o=x([244,1,255,128,128,128,128,128,128,128,128],y.t)
A.e49=x([238,1,255,128,128,128,128,128,128,128,128],y.t)
A.eTE=x([A.TY,A.f5o,A.e49],y.S)
A.egg=x([A.eXy,A.eXt,A.eXs,A.f23,A.eYH,A.eMy,A.eOB,A.eTE],y.o)
A.eyo=x([A.eMS,A.eXr,A.eFT,A.egg],y.g)
A.eyY=x([511,1023,2047,4095],y.t)
A.eJs=x([8,8,4,2],y.t)
A.efO=x([173,148,140],y.t)
A.efS=x([176,155,140,135],y.t)
A.eeB=x([180,157,141,134,130],y.t)
A.emR=x([254,254,243,230,196,177,153,140,133,130,129],y.t)
A.eJu=x([A.efO,A.efS,A.eeB,A.emR],y.S)
A.eMW=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095],y.t)
A.eNs=x([280,256,256,256,40],y.t)
A.TZ=x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390],y.t)
A.DG=x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],y.t)
A.eNI=x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],y.t)
A.DH=x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],y.t)
A.eO2=x([A.MG,A.Ca,A.Cb],C.O("x<Km>"))
A.U4=x([B.cM0(),B.cLT(),B.cM7(),B.cM5(),B.cM2(),B.cM1(),B.cM3()],y.y)
A.G9=new B.jg(0,"whiteIsZero")
A.fug=new B.jg(1,"blackIsZero")
A.fun=new B.jg(2,"rgb")
A.Gb=new B.jg(3,"palette")
A.fuo=new B.jg(4,"transparencyMask")
A.a74=new B.jg(5,"cmyk")
A.fup=new B.jg(6,"yCbCr")
A.fuq=new B.jg(7,"reserved7")
A.fur=new B.jg(8,"cieLab")
A.fus=new B.jg(9,"iccLab")
A.fuh=new B.jg(10,"ituLab")
A.fui=new B.jg(11,"logL")
A.fuj=new B.jg(12,"logLuv")
A.fuk=new B.jg(13,"colorFilterArray")
A.ful=new B.jg(14,"linearRaw")
A.fum=new B.jg(15,"depth")
A.Ga=new B.jg(16,"unknown")
A.eP0=x([A.G9,A.fug,A.fun,A.Gb,A.fuo,A.a74,A.fup,A.fuq,A.fur,A.fus,A.fuh,A.fui,A.fuj,A.fuk,A.ful,A.fum,A.Ga],C.O("x<jg>"))
A.fu8=new B.GD(0,"invalid")
A.a72=new B.GD(1,"uint")
A.bI=new B.GD(2,"int")
A.tf=new B.GD(3,"float")
A.ePv=x([A.fu8,A.a72,A.bI,A.tf],C.O("x<GD>"))
A.ePy=x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],y.t)
A.Uf=x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],y.t)
A.eQ3=x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],y.t)
A.dYv=new B.qp(1,"rle")
A.dYw=new B.qp(2,"zips")
A.dYx=new B.qp(3,"zip")
A.dYy=new B.qp(4,"piz")
A.dYz=new B.qp(5,"pxr24")
A.dYA=new B.qp(6,"b44")
A.dYB=new B.qp(7,"b44a")
A.eQ6=x([A.MH,A.dYv,A.dYw,A.dYx,A.dYy,A.dYz,A.dYA,A.dYB],C.O("x<qp>"))
A.eSw=x([231,120,48,89,115,113,120,152,112],y.t)
A.egh=x([152,179,64,126,170,118,46,70,95],y.t)
A.eQ2=x([175,69,143,80,85,82,72,155,103],y.t)
A.eyd=x([56,58,10,171,218,189,17,13,152],y.t)
A.eQQ=x([114,26,17,163,44,195,21,10,173],y.t)
A.eR8=x([121,24,80,195,26,62,44,64,85],y.t)
A.eQK=x([144,71,10,38,171,213,144,34,26],y.t)
A.eZN=x([170,46,55,19,136,160,33,206,71],y.t)
A.eNK=x([63,20,8,114,114,208,12,9,226],y.t)
A.eOV=x([81,40,11,96,182,84,29,16,36],y.t)
A.e4g=x([A.eSw,A.egh,A.eQ2,A.eyd,A.eQQ,A.eR8,A.eQK,A.eZN,A.eNK,A.eOV],y.S)
A.eMH=x([134,183,89,137,98,101,106,165,148],y.t)
A.eYm=x([72,187,100,130,157,111,32,75,80],y.t)
A.eRl=x([66,102,167,99,74,62,40,234,128],y.t)
A.esj=x([41,53,9,178,241,141,26,8,107],y.t)
A.eOI=x([74,43,26,146,73,166,49,23,157],y.t)
A.eNZ=x([65,38,105,160,51,52,31,115,128],y.t)
A.eO5=x([104,79,12,27,217,255,87,17,7],y.t)
A.eQ0=x([87,68,71,44,114,51,15,186,23],y.t)
A.eXw=x([47,41,14,110,182,183,21,17,194],y.t)
A.eUj=x([66,45,25,102,197,189,23,18,22],y.t)
A.f0H=x([A.eMH,A.eYm,A.eRl,A.esj,A.eOI,A.eNZ,A.eO5,A.eQ0,A.eXw,A.eUj],y.S)
A.eSl=x([88,88,147,150,42,46,45,196,205],y.t)
A.eQU=x([43,97,183,117,85,38,35,179,61],y.t)
A.eOh=x([39,53,200,87,26,21,43,232,171],y.t)
A.ePM=x([56,34,51,104,114,102,29,93,77],y.t)
A.eQG=x([39,28,85,171,58,165,90,98,64],y.t)
A.eNS=x([34,22,116,206,23,34,43,166,73],y.t)
A.e4h=x([107,54,32,26,51,1,81,43,31],y.t)
A.eZY=x([68,25,106,22,64,171,36,225,114],y.t)
A.eMG=x([34,19,21,102,132,188,16,76,124],y.t)
A.f1t=x([62,18,78,95,85,57,50,48,51],y.t)
A.eNb=x([A.eSl,A.eQU,A.eOh,A.ePM,A.eQG,A.eNS,A.e4h,A.eZY,A.eMG,A.f1t],y.S)
A.eQA=x([193,101,35,159,215,111,89,46,111],y.t)
A.eFS=x([60,148,31,172,219,228,21,18,111],y.t)
A.eyl=x([112,113,77,85,179,255,38,120,114],y.t)
A.f1p=x([40,42,1,196,245,209,10,25,109],y.t)
A.ePt=x([88,43,29,140,166,213,37,43,154],y.t)
A.eNV=x([61,63,30,155,67,45,68,1,209],y.t)
A.eOp=x([100,80,8,43,154,1,51,26,71],y.t)
A.esn=x([142,78,78,16,255,128,34,197,171],y.t)
A.eQk=x([41,40,5,102,211,183,4,1,221],y.t)
A.eNo=x([51,50,17,168,209,192,23,25,82],y.t)
A.eN7=x([A.eQA,A.eFS,A.eyl,A.f1p,A.ePt,A.eNV,A.eOp,A.esn,A.eQk,A.eNo],y.S)
A.eOc=x([138,31,36,171,27,166,38,44,229],y.t)
A.eN2=x([67,87,58,169,82,115,26,59,179],y.t)
A.eVT=x([63,59,90,180,59,166,93,73,154],y.t)
A.f0f=x([40,40,21,116,143,209,34,39,175],y.t)
A.ess=x([47,15,16,183,34,223,49,45,183],y.t)
A.eHD=x([46,17,33,183,6,98,15,32,183],y.t)
A.f6V=x([57,46,22,24,128,1,54,17,37],y.t)
A.eOt=x([65,32,73,115,28,128,23,128,205],y.t)
A.eRk=x([40,3,9,115,51,192,18,6,223],y.t)
A.eOF=x([87,37,9,115,59,77,64,21,47],y.t)
A.eQj=x([A.eOc,A.eN2,A.eVT,A.f0f,A.ess,A.eHD,A.f6V,A.eOt,A.eRk,A.eOF],y.S)
A.f5l=x([104,55,44,218,9,54,53,130,226],y.t)
A.eAq=x([64,90,70,205,40,41,23,26,57],y.t)
A.eVP=x([54,57,112,184,5,41,38,166,213],y.t)
A.eNU=x([30,34,26,133,152,116,10,32,134],y.t)
A.eSP=x([39,19,53,221,26,114,32,73,255],y.t)
A.eNm=x([31,9,65,234,2,15,1,118,73],y.t)
A.eQg=x([75,32,12,51,192,255,160,43,51],y.t)
A.eNY=x([88,31,35,67,102,85,55,186,85],y.t)
A.eP4=x([56,21,23,111,59,205,45,37,192],y.t)
A.ePd=x([55,38,70,124,73,102,1,34,98],y.t)
A.f61=x([A.f5l,A.eAq,A.eVP,A.eNU,A.eSP,A.eNm,A.eQg,A.eNY,A.eP4,A.ePd],y.S)
A.eP3=x([125,98,42,88,104,85,117,175,82],y.t)
A.eO1=x([95,84,53,89,128,100,113,101,45],y.t)
A.eR0=x([75,79,123,47,51,128,81,171,1],y.t)
A.eAn=x([57,17,5,71,102,57,53,41,49],y.t)
A.eV6=x([38,33,13,121,57,73,26,1,85],y.t)
A.f4B=x([41,10,67,138,77,110,90,47,114],y.t)
A.eQ7=x([115,21,2,10,102,255,166,23,6],y.t)
A.eMJ=x([101,29,16,10,85,128,101,196,26],y.t)
A.eOl=x([57,18,10,102,102,213,34,20,43],y.t)
A.ePq=x([117,20,15,36,163,128,68,1,26],y.t)
A.ePY=x([A.eP3,A.eO1,A.eR0,A.eAn,A.eV6,A.f4B,A.eQ7,A.eMJ,A.eOl,A.ePq],y.S)
A.eOC=x([102,61,71,37,34,53,31,243,192],y.t)
A.f49=x([69,60,71,38,73,119,28,222,37],y.t)
A.eOG=x([68,45,128,34,1,47,11,245,171],y.t)
A.ed5=x([62,17,19,70,146,85,55,62,70],y.t)
A.f6I=x([37,43,37,154,100,163,85,160,1],y.t)
A.f26=x([63,9,92,136,28,64,32,201,85],y.t)
A.eYr=x([75,15,9,9,64,255,184,119,16],y.t)
A.eMZ=x([86,6,28,5,64,255,25,248,1],y.t)
A.eTG=x([56,8,17,132,137,255,55,116,128],y.t)
A.ezi=x([58,15,20,82,135,57,26,121,40],y.t)
A.eQJ=x([A.eOC,A.f49,A.eOG,A.ed5,A.f6I,A.f26,A.eYr,A.eMZ,A.eTG,A.ezi],y.S)
A.eR4=x([164,50,31,137,154,133,25,35,218],y.t)
A.eMY=x([51,103,44,131,131,123,31,6,158],y.t)
A.f21=x([86,40,64,135,148,224,45,183,128],y.t)
A.eQ1=x([22,26,17,131,240,154,14,1,209],y.t)
A.eG_=x([45,16,21,91,64,222,7,1,197],y.t)
A.f0g=x([56,21,39,155,60,138,23,102,213],y.t)
A.f5Q=x([83,12,13,54,192,255,68,47,28],y.t)
A.eRm=x([85,26,85,85,128,128,32,146,171],y.t)
A.ePQ=x([18,11,7,63,144,171,4,4,246],y.t)
A.eNc=x([35,27,10,146,174,171,12,26,128],y.t)
A.ePC=x([A.eR4,A.eMY,A.f21,A.eQ1,A.eG_,A.f0g,A.f5Q,A.eRm,A.ePQ,A.eNc],y.S)
A.eXq=x([190,80,35,99,180,80,126,54,45],y.t)
A.eZM=x([85,126,47,87,176,51,41,20,32],y.t)
A.eVi=x([101,75,128,139,118,146,116,128,85],y.t)
A.eYi=x([56,41,15,176,236,85,37,9,62],y.t)
A.eA9=x([71,30,17,119,118,255,17,18,138],y.t)
A.eQI=x([101,38,60,138,55,70,43,26,142],y.t)
A.ePJ=x([146,36,19,30,171,255,97,27,20],y.t)
A.eSi=x([138,45,61,62,219,1,81,188,64],y.t)
A.f1q=x([32,41,20,117,151,142,20,21,163],y.t)
A.eZU=x([112,19,12,61,195,128,48,4,24],y.t)
A.eWz=x([A.eXq,A.eZM,A.eVi,A.eYi,A.eA9,A.eQI,A.ePJ,A.eSi,A.f1q,A.eZU],y.S)
A.eQh=x([A.e4g,A.f0H,A.eNb,A.eN7,A.eQj,A.f61,A.ePY,A.eQJ,A.ePC,A.eWz],y.o)
A.yz=new B.mv(0,"none")
A.mN=new B.mv(1,"palette")
A.a7_=new B.mv(2,"rgb")
A.fu0=new B.mv(3,"gray")
A.fu1=new B.mv(4,"reserved4")
A.fu2=new B.mv(5,"reserved5")
A.fu3=new B.mv(6,"reserved6")
A.fu4=new B.mv(7,"reserved7")
A.fu5=new B.mv(8,"reserved8")
A.mO=new B.mv(9,"paletteRle")
A.a6Z=new B.mv(10,"rgbRle")
A.fu_=new B.mv(11,"grayRle")
A.eQp=x([A.yz,A.mN,A.a7_,A.fu0,A.fu1,A.fu2,A.fu3,A.fu4,A.fu5,A.mO,A.a6Z,A.fu_],C.O("x<mv>"))
A.eR_=x([B.cLL(),B.cLS(),B.cLU(),B.cLN(),B.cLQ(),B.cLW(),B.cLP(),B.cLV(),B.cLM(),B.cLO()],y.y)
A.DA=x([8,0,8,0],y.t)
A.eAp=x([5,3,5,3],y.t)
A.esq=x([3,5,3,5],y.t)
A.OH=x([0,8,0,8],y.t)
A.Tz=x([4,4,4,4],y.t)
A.eyi=x([4,4,0,0],y.t)
A.Uk=x([A.DA,A.eAp,A.esq,A.OH,A.DA,A.Tz,A.eyi,A.OH],y.S)
A.Ul=x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41],y.t)
A.x4=x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845],y.t)
A.Un=x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127],y.t)
A.Uo=x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],y.t)
A.x5=x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567],y.t)
A.Up=x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232],y.t)
A.UA=x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],y.t)
A.rs=x([0,1,3,7,15,31,63,127,255],y.t)
A.eM=x([255,255,255,255,255,255,255,255,255,255,255],y.t)
A.pi=x([A.eM,A.eM,A.eM],y.S)
A.ePL=x([176,246,255,255,255,255,255,255,255,255,255],y.t)
A.f4Y=x([223,241,252,255,255,255,255,255,255,255,255],y.t)
A.eMv=x([249,253,253,255,255,255,255,255,255,255,255],y.t)
A.eQe=x([A.ePL,A.f4Y,A.eMv],y.S)
A.eP_=x([255,244,252,255,255,255,255,255,255,255,255],y.t)
A.eOy=x([234,254,254,255,255,255,255,255,255,255,255],y.t)
A.UJ=x([253,255,255,255,255,255,255,255,255,255,255],y.t)
A.eMV=x([A.eP_,A.eOy,A.UJ],y.S)
A.f1A=x([255,246,254,255,255,255,255,255,255,255,255],y.t)
A.eTq=x([239,253,254,255,255,255,255,255,255,255,255],y.t)
A.UC=x([254,255,254,255,255,255,255,255,255,255,255],y.t)
A.eYo=x([A.f1A,A.eTq,A.UC],y.S)
A.U6=x([255,248,254,255,255,255,255,255,255,255,255],y.t)
A.eNC=x([251,255,254,255,255,255,255,255,255,255,255],y.t)
A.eR7=x([A.U6,A.eNC,A.eM],y.S)
A.Dl=x([255,253,254,255,255,255,255,255,255,255,255],y.t)
A.eR2=x([251,254,254,255,255,255,255,255,255,255,255],y.t)
A.eNP=x([A.Dl,A.eR2,A.UC],y.S)
A.eyb=x([255,254,253,255,254,255,255,255,255,255,255],y.t)
A.eOT=x([250,255,254,255,254,255,255,255,255,255,255],y.t)
A.x8=x([254,255,255,255,255,255,255,255,255,255,255],y.t)
A.ePu=x([A.eyb,A.eOT,A.x8],y.S)
A.eOk=x([A.pi,A.eQe,A.eMV,A.eYo,A.eR7,A.eNP,A.ePu,A.pi],y.o)
A.ege=x([217,255,255,255,255,255,255,255,255,255,255],y.t)
A.ePG=x([225,252,241,253,255,255,254,255,255,255,255],y.t)
A.eVG=x([234,250,241,250,253,255,253,254,255,255,255],y.t)
A.eZW=x([A.ege,A.ePG,A.eVG],y.S)
A.DV=x([255,254,255,255,255,255,255,255,255,255,255],y.t)
A.eMz=x([223,254,254,255,255,255,255,255,255,255,255],y.t)
A.eG0=x([238,253,254,254,255,255,255,255,255,255,255],y.t)
A.eSI=x([A.DV,A.eMz,A.eG0],y.S)
A.eOE=x([249,254,255,255,255,255,255,255,255,255,255],y.t)
A.f1s=x([A.U6,A.eOE,A.eM],y.S)
A.f_9=x([255,253,255,255,255,255,255,255,255,255,255],y.t)
A.eR1=x([247,254,255,255,255,255,255,255,255,255,255],y.t)
A.eQN=x([A.f_9,A.eR1,A.eM],y.S)
A.eCB=x([252,255,255,255,255,255,255,255,255,255,255],y.t)
A.esl=x([A.Dl,A.eCB,A.eM],y.S)
A.UK=x([255,254,254,255,255,255,255,255,255,255,255],y.t)
A.eFY=x([A.UK,A.UJ,A.eM],y.S)
A.eSE=x([255,254,253,255,255,255,255,255,255,255,255],y.t)
A.Ua=x([250,255,255,255,255,255,255,255,255,255,255],y.t)
A.eCz=x([A.eSE,A.Ua,A.x8],y.S)
A.eye=x([A.eZW,A.eSI,A.f1s,A.eQN,A.esl,A.eFY,A.eCz,A.pi],y.o)
A.eWB=x([186,251,250,255,255,255,255,255,255,255,255],y.t)
A.eNr=x([234,251,244,254,255,255,255,255,255,255,255],y.t)
A.eYq=x([251,251,243,253,254,255,254,255,255,255,255],y.t)
A.eNM=x([A.eWB,A.eNr,A.eYq],y.S)
A.eNE=x([236,253,254,255,255,255,255,255,255,255,255],y.t)
A.eSD=x([251,253,253,254,254,255,255,255,255,255,255],y.t)
A.ePg=x([A.Dl,A.eNE,A.eSD],y.S)
A.eXn=x([254,254,254,255,255,255,255,255,255,255,255],y.t)
A.eNy=x([A.UK,A.eXn,A.eM],y.S)
A.eYJ=x([254,254,255,255,255,255,255,255,255,255,255],y.t)
A.eND=x([A.DV,A.eYJ,A.x8],y.S)
A.UL=x([A.eM,A.x8,A.eM],y.S)
A.eyc=x([A.eNM,A.ePg,A.eNy,A.eND,A.UL,A.pi,A.pi,A.pi],y.o)
A.eOR=x([248,255,255,255,255,255,255,255,255,255,255],y.t)
A.eO0=x([250,254,252,254,255,255,255,255,255,255,255],y.t)
A.eNn=x([248,254,249,253,255,255,255,255,255,255,255],y.t)
A.ePk=x([A.eOR,A.eO0,A.eNn],y.S)
A.ev0=x([255,253,253,255,255,255,255,255,255,255,255],y.t)
A.f05=x([246,253,253,255,255,255,255,255,255,255,255],y.t)
A.eNO=x([252,254,251,254,254,255,255,255,255,255,255],y.t)
A.f04=x([A.ev0,A.f05,A.eNO],y.S)
A.f6D=x([255,254,252,255,255,255,255,255,255,255,255],y.t)
A.eNk=x([248,254,253,255,255,255,255,255,255,255,255],y.t)
A.eCy=x([253,255,254,254,255,255,255,255,255,255,255],y.t)
A.eRg=x([A.f6D,A.eNk,A.eCy],y.S)
A.f5O=x([255,251,254,255,255,255,255,255,255,255,255],y.t)
A.eQB=x([245,251,254,255,255,255,255,255,255,255,255],y.t)
A.eQH=x([253,253,254,255,255,255,255,255,255,255,255],y.t)
A.eLg=x([A.f5O,A.eQB,A.eQH],y.S)
A.eMt=x([255,251,253,255,255,255,255,255,255,255,255],y.t)
A.eP2=x([252,253,254,255,255,255,255,255,255,255,255],y.t)
A.eXE=x([A.eMt,A.eP2,A.DV],y.S)
A.eCt=x([255,252,255,255,255,255,255,255,255,255,255],y.t)
A.f53=x([249,255,254,255,255,255,255,255,255,255,255],y.t)
A.eO9=x([255,255,254,255,255,255,255,255,255,255,255],y.t)
A.ed4=x([A.eCt,A.f53,A.eO9],y.S)
A.f6J=x([255,255,253,255,255,255,255,255,255,255,255],y.t)
A.eNB=x([A.f6J,A.Ua,A.eM],y.S)
A.eCx=x([A.ePk,A.f04,A.eRg,A.eLg,A.eXE,A.ed4,A.eNB,A.UL],y.o)
A.eYT=x([A.eOk,A.eye,A.eyc,A.eCx],y.g)
A.aah=new B.kG(1,"rle8")
A.aam=new B.kG(2,"rle4")
A.aan=new B.kG(4,"jpeg")
A.aao=new B.kG(5,"png")
A.aap=new B.kG(7,"reserved7")
A.aaq=new B.kG(8,"reserved8")
A.aar=new B.kG(9,"reserved9")
A.aai=new B.kG(10,"reserved10")
A.aaj=new B.kG(11,"cmyk")
A.aak=new B.kG(12,"cmykRle8")
A.aal=new B.kG(13,"cmykRle4")
A.UD=x([A.Hr,A.aah,A.aam,A.zB,A.aan,A.aao,A.zC,A.aap,A.aaq,A.aar,A.aai,A.aaj,A.aak,A.aal],C.O("x<kG>"))
A.DS=x([0,128,192,224,240,248,252,254,255],y.t)
A.DT=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295],y.t)
A.a7M=new B.GO(0,"predictor")
A.fwp=new B.GO(1,"crossColor")
A.fwq=new B.GO(2,"subtractGreen")
A.a7N=new B.GO(3,"colorIndexing")
A.f1e=x([A.a7M,A.fwp,A.fwq,A.a7N],C.O("x<GO>"))
A.eN=x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255],y.t)
A.f46=x([B.cLX(),B.cLR(),B.cM6(),B.cM4(),B.cLZ(),B.cLY(),B.cM_()],y.y)
A.UO=x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],y.t)
A.f4f=x([null,B.cMn(),B.cMo(),B.cMm()],C.O("x<~(v,v,v,v,v,e1)?>"))
A.UP=x([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15],y.t)
A.x9=x([0,36,72,109,145,182,218,255],y.t)
A.ld=x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255],y.t)
A.ffh=new B.r0(0,"bitmap")
A.a4j=new B.r0(1,"grayscale")
A.ffi=new B.r0(2,"indexed")
A.a4k=new B.r0(3,"rgb")
A.a4l=new B.r0(4,"cmyk")
A.ffj=new B.r0(5,"multiChannel")
A.ffk=new B.r0(6,"duoTone")
A.a4m=new B.r0(7,"lab")
A.f52=x([A.ffh,A.a4j,A.ffi,A.a4k,A.a4l,A.ffj,A.ffk,A.a4m],C.O("x<r0>"))
A.xa=x([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63],y.t)
A.emO=x([2,6,2,6],y.t)
A.eCv=x([6,2,6,2],y.t)
A.emM=x([2,2,6,6],y.t)
A.egd=x([1,3,3,9],y.t)
A.eyg=x([4,0,12,0],y.t)
A.eso=x([3,1,9,3],y.t)
A.eJr=x([8,8,0,0],y.t)
A.eyh=x([4,12,0,0],y.t)
A.efK=x([16,0,0,0],y.t)
A.ecy=x([12,4,0,0],y.t)
A.eCw=x([6,6,2,2],y.t)
A.esr=x([3,9,1,3],y.t)
A.ecx=x([12,0,4,0],y.t)
A.eMu=x([9,3,3,1],y.t)
A.dK=x([A.Tz,A.emO,A.DA,A.eCv,A.emM,A.egd,A.eyg,A.eso,A.eJr,A.eyh,A.efK,A.ecy,A.eCw,A.esr,A.ecx,A.eMu],y.S)
A.pj=x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1],y.t)
A.rQ=new B.zT(0,"invalid")
A.a3H=new B.zT(1,"pbm")
A.a3I=new B.zT(2,"pgm2")
A.EM=new B.zT(3,"pgm5")
A.a3J=new B.zT(4,"ppm3")
A.EN=new B.zT(5,"ppm6")
A.G8=new B.pB(0,"bilevel")
A.fu9=new B.pB(1,"gray4bit")
A.fua=new B.pB(2,"gray")
A.fub=new B.pB(3,"grayAlpha")
A.fuc=new B.pB(4,"palette")
A.a73=new B.pB(5,"rgb")
A.fud=new B.pB(6,"rgba")
A.fue=new B.pB(7,"yCbCrSub")
A.tg=new B.pB(8,"generic")
A.fuf=new B.pB(9,"invalid")
A.tl=new B.Ou(0,"undefined")
A.Gw=new B.Ou(1,"lossy")
A.yJ=new B.Ou(2,"lossless")
A.fAZ=new B.Ou(3,"animated")})();(function staticFields(){$.c6B=null
$.cgX=!1
$.cgY=C.c([B.c7R(),B.cM8(),B.cMd(),B.cMe(),B.cMf(),B.cMg(),B.cMh(),B.cMi(),B.cMj(),B.cMk(),B.cM9(),B.cMa(),B.cMb(),B.cMc(),B.c7R(),B.c7R()],C.O("x<v(ow,v,v)>"))})();(function lazyInitializers(){var x=a.lazy
x($,"cQi","aBR",()=>C.tJ(511))
x($,"cQj","c1z",()=>C.tJ(511))
x($,"cQl","c1A",()=>C.cdX(2041))
x($,"cQm","c1B",()=>C.cdX(225))
x($,"cQk","nB",()=>C.tJ(766))})()};
(a=>{a["T2oMvZ85AXs6N6gNwB6t5dydyOM="]=a.current})($__dart_deferred_initializers__);