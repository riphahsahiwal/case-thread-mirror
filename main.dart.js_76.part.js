((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={XV:function XV(d,e,f,g,h,i,j){var _=this
_.J=null
_.aj=d
_.aW=e
_.cG=f
_.cw=_.cT=null
_.eV=g
_.K$=h
_.dy=i
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},b5y:function b5y(d){this.a=d},
caJ(d,e){return new B.adk(e,d,null)},
adk:function adk(d,e,f){this.e=d
this.c=e
this.a=f}}
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
B.XV.prototype={
aim(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
slW(d){var x=this,w=x.aj
if(w===d)return
x.aj=d
if(x.aim(w)||x.aim(d))x.ak()
else{x.cw=x.cT=null
x.bi()}},
sfW(d){var x=this
if(x.aW.k(0,d))return
x.aW=d
x.J=x.cw=x.cT=null
x.bi()},
scp(d){var x=this
if(x.cG==d)return
x.cG=d
x.J=x.cw=x.cT=null
x.bi()},
d5(d){var x,w=this.K$
if(w!=null){x=w.aD(C.aR,C.ls,w.gcu())
switch(this.aj.a){case 6:return d.bt(new A.av(0,d.b,0,d.d).DI(x))
case 1:case 2:case 0:case 4:case 3:case 5:return d.DI(x)}}else return new A.R(A.S(0,d.a,d.b),A.S(0,d.c,d.d))},
dS(d,e){var x=this.K$
return x==null?null:x.ff(C.ls,e)},
c3(){var x,w,v=this,u=v.K$
if(u!=null){u.da(C.ls,!0)
switch(v.aj.a){case 6:u=y.a
x=u.a(A.U.prototype.gai.call(v))
w=new A.av(0,x.b,0,x.d).DI(v.K$.gG())
v.fy=u.a(A.U.prototype.gai.call(v)).bt(w)
break
case 1:case 2:case 0:case 4:case 3:case 5:v.fy=y.a.a(A.U.prototype.gai.call(v)).DI(v.K$.gG())
break}v.cw=v.cT=null}else{u=y.a.a(A.U.prototype.gai.call(v))
v.fy=new A.R(A.S(0,u.a,u.b),A.S(0,u.c,u.d))}},
a5z(){var x,w,v,u,t,s,r,q,p,o,n=this
if(n.cw!=null)return
x=n.K$
if(x==null){n.cT=!1
n.cw=A.eI()}else{w=n.J
if(w==null)w=n.J=n.aW
v=x.gG()
u=A.c5D(n.aj,v,n.gG())
x=u.b
t=u.a
s=v.a
r=v.b
q=w.AA(t,new A.X(0,0,0+s,0+r))
p=n.gG()
o=w.AA(x,new A.X(0,0,0+p.a,0+p.b))
p=q.a
n.cT=q.c-p<s||q.d-q.b<r
r=A.vM(o.a,o.b,0)
r.o4(x.a/t.a,x.b/t.b,1,1)
r.dI(-p,-q.b,0,1)
n.cw=r}},
amg(d,e){var x,w,v,u,t=this,s=t.cw
s.toString
x=A.ag6(s)
if(x==null){s=t.cx
s===$&&A.b()
w=t.cw
w.toString
v=A.jL.prototype.giI.call(t)
u=t.ch.a
return d.Fm(s,e,w,v,u instanceof A.wJ?u:null)}else t.mb(d,e.a0(0,x))
return null},
aZ(d,e){var x,w,v,u,t=this
if(t.K$==null||t.gG().gW(0)||t.K$.gG().gW(0))return
t.a5z()
x=t.cT
x.toString
if(x&&t.eV!==C.F){x=t.cx
x===$&&A.b()
w=t.gG()
v=t.ch
u=v.a
u=u instanceof A.IO?u:null
v.sbl(d.ql(x,e,new A.X(0,0,0+w.a,0+w.b),t.gb6w(),t.eV,u))}else t.ch.sbl(t.amg(d,e))},
es(d,e){var x,w=this
if(!w.gG().gW(0)){x=w.K$
x=x==null?null:x.gG().gW(0)
x=x===!0}else x=!0
if(x)return!1
w.a5z()
return d.U9(new B.b5y(w),e,w.cw)},
xh(d){return!this.gG().gW(0)&&!d.gG().gW(0)},
fL(d,e){var x
if(!(!this.gG().gW(0)&&!d.gG().gW(0)))e.a_g()
else{this.a5z()
x=this.cw
x.toString
e.hz(x)}}}
B.adk.prototype={
bf(d){var x=new B.XV(this.e,C.ag,A.en(d),C.F,null,new A.bt(),A.aY())
x.bb()
x.sbF(null)
return x},
bm(d,e){e.slW(this.e)
e.sfW(C.ag)
e.scp(A.en(d))
if(C.F!==e.eV){e.eV=C.F
e.bi()
e.bY()}}}
var z=a.updateTypes(["wJ?(vU,y)"])
B.b5y.prototype={
$2(d,e){return this.a.GV(d,e)},
$S:29};(function installTearOffs(){var x=a._instance_2u
x(B.XV.prototype,"gb6w","amg",0)})();(function inheritance(){var x=a.inherit
x(B.XV,A.M3)
x(B.b5y,A.dk)
x(B.adk,A.bT)})()
A.cD(b.typeUniverse,JSON.parse('{"XV":{"V":[],"bB":["V"],"U":[],"b5":[]},"adk":{"bT":[],"aW":[],"f":[]}}'))
var y={a:A.I("av")}};
(a=>{a["p/7KHjLnPKnkEyV2w2KokxjGGdU="]=a.current})($__dart_deferred_initializers__);