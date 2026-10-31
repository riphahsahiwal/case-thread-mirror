((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,G,H,F,D,I,N,K,O,B={
abY(d,e,f){var w=0,v=A.m(x.I),u
var $async$abY=A.i(function(g,h){if(g===1)return A.j(h,v)
for(;;)switch(w){case 0:w=3
return A.e(A.cw("pdf",""),$async$abY)
case 3:w=4
return A.e(A.cw("pw",""),$async$abY)
case 4:u=new B.bMd(B.Zn(d.a,e,f)).cP()
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$abY,v)},
bMd:function bMd(d){this.a=d},
bMg:function bMg(d,e){this.a=d
this.b=e},
bMf:function bMf(d){this.a=d},
bMe:function bMe(d,e,f){this.a=d
this.b=e
this.c=f},
abX:function abX(d){this.a=d},
O4:function O4(d){this.a=d},
c_y:function c_y(){},
aei(d,e,f){return B.cvV(d,e,f)},
cvV(d,e,f){var w=0,v=A.m(x.H),u,t=2,s=[],r,q,p,o,n,m
var $async$aei=A.i(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:p={}
o=d.T(x.q).f
p.a=null
t=4
m=p
w=7
return A.e(e.X($.crB(),x.r).W5(f),$async$aei)
case 7:m.a=h
t=2
w=6
break
case 4:t=3
n=s.pop()
p=A.G(n)
if(x.L.b(p)){r=p
o.aS(A.bR(null,null,null,null,null,C.D,null,A.o(A.aC(r).a,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}else throw n
w=6
break
case 3:w=2
break
case 6:if(d.e==null){w=1
break}w=8
return A.e(A.eO(null,new B.aQg(p,f),d,!1,null,!0,!1,x.H),$async$aei)
case 8:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$aei,v)},
DV:function DV(d,e,f){this.d=d
this.e=e
this.a=f},
aQg:function aQg(d,e){this.a=d
this.b=e},
a3q:function a3q(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
bAP:function bAP(d){this.a=d},
bAQ:function bAQ(d){this.a=d},
bAU:function bAU(d){this.a=d},
bAT:function bAT(d){this.a=d},
bAV:function bAV(d){this.a=d},
bAS:function bAS(d){this.a=d},
bAW:function bAW(d){this.a=d},
bAX:function bAX(d,e){this.a=d
this.b=e},
bAR:function bAR(d,e){this.a=d
this.b=e},
HM:function HM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cno(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="Not recorded",d=y.g,a0="None recorded as of ",a1=new A.dM(""),a2=new B.c1c(a1,new B.c1d(new B.c1b()))
a1.a="---\n"
w=a3.c
v=w==null
u="case_ref: "+B.a9u(v?e:w)+"\n"
a1.a+=u
u=a3.b
t="title: "+B.a9u(u)+"\n"
a1.a+=t
t=a3.d
s="case_type: "+B.a9u(t)+"\n"
a1.a+=s
s=a3.e
r="status: "+B.a9u(s)+"\n"
a1.a+=r
r=a3.x
q="generated_at: "+B.rX(r)+"\n"
a1.a+=q
q="generated_by: "+B.a9u(a3.gFF())+"\n"
a1.a+=q
q="scope: "+B.a9u(d)+"\n"
q=(a1.a+=q)+("report_version: "+a3.dx+"\n")
a1.a=q
p=a3.a
q+="mode: "+p.b+"\n"
a1.a=q
q+="integrity_sha256: "+a3.dy+"\n"
a1.a=q
q+="---\n"
a1.a=q
q+="\n"
a1.a=q
u=q+("# "+u+"\n")
a1.a=u
u+="\n"
a1.a=u
u+=a3.as+"\n"
a1.a=u
a1.a=u+"\n"
u=x.s
q=A.c(["Field","Detail"],u)
o=x.E
a2.$2(q,A.c([A.c(["Case reference",v?e:w],u),A.c(["Case type",t],u),A.c(["Status",s],u),A.c(["Opened",B.rX(a3.r)],u),A.c(["Last activity",B.rX(a3.w)],u),A.c(["Prepared by",a3.gFF()],u),A.c(["Generated",B.rX(r)],u),A.c(["Scope",d],u)],o))
s=(a1.a+="## Summary\n")+"\n"
a1.a=s
s+=a3.at+"\n"
a1.a=s
s+="\n"
a1.a=s
s+="The summary is generated from structured case data, not by AI. AI-assisted findings appear only in section 3, labelled and attributed to the reviewer.\n"
a1.a=s
s+="\n"
a1.a=s
s+="## Findings at a glance\n"
a1.a=s
a1.a=s+"\n"
s=A.c(["Area","Recorded","State"],u)
t=A.c([],o)
for(w=a3.ax,n=0;n<6;++n){m=w[n]
t.push(A.c([m.a,m.b,m.c],u))}a2.$2(s,t)
B.cHA(a1,a3)
if(p===E.Fk){B.ckI(a1,a3)
w=a1.a
return w.charCodeAt(0)==0?w:w}a1.a=(a1.a+="## 1. People involved\n")+"\n"
w=a3.ay
if(w.length===0){w=a0+B.k0(r)+".\n"
a1.a=(a1.a+=w)+"\n"}else{v=A.c(["Name","Role","Joined","Approved","Recorded events"],u)
t=A.c([],o)
for(s=w.length,q=a3.id,n=0;n<w.length;w.length===s||(0,A.F)(w),++n){l=w[n]
p=B.rX(l.c)
k=l.e
if(k==null)k=l.w?"Created the case":e
else k=k+" on "+B.rX(l.f)
t.push(A.c([l.a,l.b,p,k,""+l.r+" of "+q],u))}a2.$2(v,t)}w=(a1.a+="## 2. Evidence register\n")+"\n"
a1.a=w
v=a3.ch
t=v.length
if(t===0){w=a0+B.k0(r)+".\n"
w=a1.a=(a1.a+=w)+"\n"}else for(n=0;n<v.length;v.length===t||(0,A.F)(v),++n){j=v[n]
w=A.c(["Ref","File","Version","Added"],u)
s=j.gaAR()
q=B.rX(j.e)
p=j.w
if(p==null)p=e
a2.$2(w,A.c([A.c([j.a,j.b+" ("+s+")","v"+j.c,q+" by "+p],u)],o))
w=j.d
s=a1.a
if(w!=null){w=s+("SHA-256: `"+w+"`\n")
a1.a=w
a1.a=w+"\n"}else{w=s+"SHA-256: Not recorded\n"
a1.a=w
a1.a=w+"\n"}w=j.gauN()+"\n"
w=(a1.a+=w)+"\n"
a1.a=w}w+="## 3. Analysis\n"
a1.a=w
a1.a=w+"\n"
w=A.c(["Area","Record","State"],u)
t=A.c([],o)
for(s=a3.cy,q=s.length,n=0;n<s.length;s.length===q||(0,A.F)(s),++n){m=s[n]
t.push(A.c([m.a,m.b,m.c],u))}a2.$2(w,t)
w=a3.db
if(w.length===0){w="AI-assisted findings: "+(a0+B.k0(r)+".")+"\n"
a1.a=(a1.a+=w)+"\n"}else{a1.a=(a1.a+="### AI-assisted findings, human reviewed\n")+"\n"
t=A.c(["Finding","Reviewer","Reviewed","Outcome","Source evidence"],u)
s=A.c([],o)
for(q=w.length,n=0;n<w.length;w.length===q||(0,A.F)(w),++n){i=w[n]
p=i.b
p=p==null?"":": "+p
k=i.d
if(k==null)k=e
h=B.rX(i.e)
g=i.f
g=g.length===0?e:C.h.b4(g,", ")
s.push(A.c([i.a+p,k,h,i.c,g],u))}a2.$2(t,s)}a1.a=(a1.a+="## 4. Tasks\n")+"\n"
w=a3.CW
if(w.length===0){w=a0+B.k0(r)+".\n"
a1.a=(a1.a+=w)+"\n"}else{t=A.c(["Ref","Task","Status","Assignee","Due","Created","Updated"],u)
s=A.c([],o)
for(q=w.length,n=0;n<w.length;w.length===q||(0,A.F)(w),++n){f=w[n]
p=f.d
if(p==null)p="Unassigned"
s.push(A.c([f.a,f.b,f.c,p,f.gavx(),B.rX(f.f),B.rX(f.r)],u))}a2.$2(t,s)}a1.a=(a1.a+="## 5. Timeline\n")+"\n"
w=a3.cx
if(w.length===0){w=a0+B.k0(r)+".\n"
a1.a=(a1.a+=w)+"\n"}else{t=A.c(["Time (UTC)","Actor","Event","Ref"],u)
s=A.c([],o)
for(r=w.length,n=0;n<w.length;w.length===r||(0,A.F)(w),++n){j=w[n]
q=B.rX(j.a)
p=j.d
if(p==null)p="\u2014"
s.push(A.c([q,j.b,j.c,p],u))}a2.$2(t,s)}a1.a=(a1.a+="## 6. References and definitions\n")+"\n"
a2.$2(A.c(["Term","Meaning"],u),A.c([A.c(["Evidence reference (E-001)",y.m],u),A.c(["Hash recorded",y.f],u),A.c(["AI-assisted",y.h],u),A.c(["Scope",y.F],u)],o))
w=v.length
if(w!==0){u=a1.a=(a1.a+="Evidence index:\n")+"\n"
for(n=0;n<w;++n){j=v[n]
u+="- "+j.a+": "+j.b+"\n"
a1.a=u}a1.a=u+"\n"}B.ckI(a1,a3)
w=a1.a
return w.charCodeAt(0)==0?w:w},
cHA(d,e){var w,v,u=(d.a+="## Final outcome\n")+"\n"
d.a=u
w=e.ok
if(w==null){u+=(e.k4?y.c:"Case is open. No closed summary yet.")+"\n"
d.a=u
d.a=u+"\n"
return}u="Generated by "+w.c+" on "+B.c_H(w.b)+" (UTC).\n"
d.a=(d.a+=u)+"\n"
v=w.gaAi()
if(v!=null)d.a=(d.a+=v+"\n")+"\n"
u=w.gaw1()+"\n"
d.a=(d.a+=u)+"\n"
if(e.a===E.mJ){B.c8H(d,"People named in the summary",w.gaze())
B.c8H(d,"Evidence listed in the summary",w.gavL())
B.c8H(d,"Major events in the summary",w.gavJ())}},
c8H(d,e,f){var w,v,u=f.length
if(u===0)return
w=d.a=(d.a+="**"+e+"**\n")+"\n"
for(v=0;v<u;++v){w+="- "+f[v]+"\n"
d.a=w}d.a=w+"\n"},
ckI(d,e){var w=(d.a+="## 7. Attestation and integrity\n")+"\n"
d.a=w
w+="| Field | Detail |\n"
d.a=w
d.a=w+"| --- | --- |\n"
w="| Prepared by | "+e.gFF()+" |\n"
d.a+=w
w="| Generated | "+B.rX(e.x)+" |\n"
w=(d.a+=w)+("| Report version | "+e.dx+" |\n")
d.a=w
w+="| Report SHA-256 | `"+e.dy+"` |\n"
d.a=w
w+="\n"
d.a=w
w+="To verify, recompute the SHA-256 over the canonical JSON (sorted keys, UTF-8, no whitespace) of the exported case data and compare it with the value above. A different value means the record changed after this report was generated.\n"
d.a=w
w+="\n"
d.a=w
w+="Prepared by: ______________________  Date: __________\n"
d.a=w
w+="\n"
d.a=w
w+="Reviewed by: ______________________  Date: __________\n"
d.a=w
w+="\n"
d.a=w
w+="Approved by: ______________________  Date: __________\n"
d.a=w
d.a=w+"\n"},
a9u(d){var w=A.cd("^[A-Za-z0-9 _.,/()-]+$",!0,!1)
if(w.b.test(d))return d
w=A.cz(d,"\\","\\\\")
return'"'+A.cz(w,'"','\\"')+'"'},
c1b:function c1b(){},
c1d:function c1d(d){this.a=d},
c1c:function c1c(d,e){this.a=d
this.b=e},
c1e:function c1e(){},
k0(d){var w
if(d==null)return"Not recorded"
w=d.d6()
return""+A.bG(w)+" "+C.eg[A.b7(w)-1]+" "+A.b0(w)+", "+C.n.bF(C.f.j(A.ez(w)),2,"0")+":"+C.n.bF(C.f.j(A.ix(w)),2,"0")+" UTC"},
cLm(d){var w=d.d6()
return""+A.bG(w)+" "+C.eg[A.b7(w)-1]+" "+A.b0(w)+", "+C.n.bF(C.f.j(A.ez(w)),2,"0")+":"+C.n.bF(C.f.j(A.ix(w)),2,"0")+":"+C.n.bF(C.f.j(A.MC(w)),2,"0")+" UTC"},
cmK(d,e){var w=d.d6(),v=e?""+A.bG(w)+" "+C.eg[A.b7(w)-1]+" "+A.b0(w):""+A.bG(w)+" "+C.eg[A.b7(w)-1]
return v+" "+C.n.bF(C.f.j(A.ez(w)),2,"0")+":"+C.n.bF(C.f.j(A.ix(w)),2,"0")+":"+C.n.bF(C.f.j(A.MC(w)),2,"0")},
rX(d){var w,v
if(d==null)return"Not recorded"
w=d.d6()
v=new B.c_G()
return""+A.b0(w)+"-"+A.q(v.$1(A.b7(w)))+"-"+A.q(v.$1(A.bG(w)))+"T"+A.q(v.$1(A.ez(w)))+":"+A.q(v.$1(A.ix(w)))+":"+A.q(v.$1(A.MC(w)))+"Z"},
c_H(d){var w
if(d==null)return"Not recorded"
w=d.d6()
return""+A.bG(w)+" "+C.pg[A.b7(w)-1]+" "+A.b0(w)},
cLk(d){var w
if(d==null)return"Not recorded"
w=d.d6()
return""+A.bG(w)+" "+C.eg[A.b7(w)-1]+" "+A.b0(w)},
cM9(d){var w
A:{if("academic"===d){w="Academic integrity"
break A}if("corporate"===d){w="Corporate & business"
break A}if("legal"===d){w="Legal / Investigative"
break A}if("medical"===d){w="Medical & healthcare"
break A}if("technical"===d){w="Technical & engineering"
break A}if(d==null){w="Not recorded"
break A}w=B.oR(d)
break A}return w},
oR(d){var w=A.cz(d,"_"," ")
return new A.dE(new A.ag(A.c(A.cz(w,"-"," ").split(" "),x.s),new B.c2R(),x.U),new B.c2S(),x.X).b4(0," ")},
c9E(d){var w=B.oR(d)
if(w.length===0)return w
return w[0].toLowerCase()+C.n.bY(w,1).toLowerCase()},
cnA(d){var w,v,u,t=x.s,s=A.c([],t)
for(w=d.length,v=0;v<w;v=u){u=v+32
s.push(C.n.a7(d,v,C.f.aw(u,0,w)))}return s.length===0?A.c([d],t):s},
cLl(d){if(d==null)return"Not recorded"
if(d<1024)return A.q(d)+" B"
if(d<1048576)return""+C.l.aM(d/1024)+" KB"
return C.l.aq(d/1048576,1)+" MB"},
cMr(d){var w
A:{w="Word document"
if("image/jpeg"===d){w="JPEG image"
break A}if("image/png"===d){w="PNG image"
break A}if("image/gif"===d){w="GIF image"
break A}if("image/webp"===d){w="WebP image"
break A}if("application/pdf"===d){w="PDF document"
break A}if("text/plain"===d){w="Plain text"
break A}if("application/msword"===d)break A
if("application/vnd.openxmlformats-officedocument.wordprocessingml.document"===d)break A
if(d==null){w="Not recorded"
break A}w=d
break A}return w},
c8p(d){var w,v,u,t,s
if(x.f.b(d)){w=d.gdh()
v=x.N
u=w.dY(w,new B.bXe(),v).eI(0)
C.h.lK(u)
v=A.D(v,x.Q)
for(w=u.length,t=0;t<u.length;u.length===w||(0,A.F)(u),++t){s=u[t]
v.l(0,s,B.c8p(d.h(0,s)))}return v}if(x.j.b(d)){w=[]
for(v=J.aJ(d);v.q();)w.push(B.c8p(v.gI()))
return w}return d},
cnq(d,e,f){var w=f.d6(),v=""+A.b0(w)+"-"+C.n.bF(C.f.j(A.b7(w)),2,"0")+"-"+C.n.bF(C.f.j(A.bG(w)),2,"0")
return(d!=null&&C.n.bh(d,"CT-")?d+"_case-report_"+v:"case-report_"+v)+e},
ld(d){if(d instanceof A.aE)return d
if(typeof d=="string"&&d.length!==0)return A.kI(d)
return null},
da(d){if(d==null)return null
if(typeof d=="string")return d.length===0?null:d
return J.be(d)},
bX1(d){var w
if(x.P.b(d))w=d
else w=x.f.b(d)?A.aM(d,x.N,x.z):C.dh
return w},
mL(d){var w,v,u,t,s,r
if(!x.j.b(d))return P.UZ
w=A.c([],x.Y)
for(v=J.aJ(d),u=x.f,t=x.N,s=x.z;v.q();){r=v.gI()
if(u.b(r))w.push(A.aM(r,t,s))}return w},
Zn(h9,i0,i1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3="generated_at",g4=null,g5="name",g6="status",g7="investigation_status",g8="evidence",g9="filename",h0="title",h1="contradictions",h2="Contradictions",h3="Investigation gaps",h4="source_evidence_ids",h5="Evidence added: ",h6="None recorded",h7=B.bX1(h9.h(0,"room")),h8=B.ld(h9.h(0,g3))
if(h8==null)h8=new A.aE(Date.now(),0,!1).d6()
w=B.bX1(h9.h(0,"generated_by"))
v=B.da(h7.h(0,"ref"))
if(v==null)v=i1.length<4?g4:"CT-"+C.n.a7(i1,0,4).toUpperCase()
u=B.da(h7.h(0,g5))
if(u==null)u="Untitled case"
t=B.da(h7.h(0,"case_type"))
s=B.cM9(t)
r=B.da(h7.h(0,g6))
q=B.oR(r==null?"active":r)
p=B.da(h7.h(0,g7))
if(p==null)p=B.da(h9.h(0,g7))
r=p==null
o=r?g4:B.oR(p)
n=B.ld(h7.h(0,"opened"))
m=B.ld(h7.h(0,"last_activity_at"))
l=B.da(h7.h(0,"institution"))
if(l!=null)k=C.n.aI("Case report "+(v==null?"":v)+" for "+l)
else if(t==="academic"){j=C.n.aI("Case report "+(v==null?"":v)+" for the academic integrity committee")
k=j}else{j=C.n.aI("Case report "+(v==null?"":v)+" \u2014 "+s+" case")
k=j}i=B.mL(h9.h(0,"members"))
j=A.c([],x.m)
for(h=i.length,g=0;g<i.length;i.length===h||(0,A.F)(i),++g){f=i[g]
e=B.da(f.h(0,g5))
if(e==null)e="Unnamed member"
d=B.da(f.h(0,"custom_role_label"))
if(d==null)d=B.da(f.h(0,"role_label"))
if(d==null){d=B.da(f.h(0,"role"))
d=B.oR(d==null?"member":d)}a0=B.ld(f.h(0,"joined"))
B.ld(f.h(0,"requested_at"))
a1=B.da(f.h(0,"approved_by"))
a2=B.ld(f.h(0,"approved_at"))
a3=A.dh(f.h(0,"event_count"))
a3=a3==null?g4:C.l.F(a3)
if(a3==null)a3=0
j.push(new B.akl(e,d,a0,a1,a2,a3,J.p(f.h(0,"is_owner"),!0)))}a4=B.mL(h9.h(0,g8))
a5=A.c([],x.v)
for(h=x.u,a6=0;a6<a4.length;++a6){a7=a4[a6]
e=B.da(a7.h(0,"ref"))
if(e==null)e="E-"+C.n.bF(C.f.j(a6+1),3,"0")
d=B.da(a7.h(0,g9))
if(d==null)d="Unnamed file"
a0=A.dh(a7.h(0,"version"))
a0=a0==null?g4:C.l.F(a0)
if(a0==null)a0=1
a1=B.da(a7.h(0,"sha256"))
a2=B.ld(a7.h(0,"uploaded"))
a3=B.da(a7.h(0,"mime_type"))
a8=A.dh(a7.h(0,"size_bytes"))
a8=a8==null?g4:C.l.F(a8)
a9=B.da(a7.h(0,"uploaded_by"))
b0=A.c([],h)
for(b1=B.mL(a7.h(0,"custody")),b2=b1.length,g=0;g<b1.length;b1.length===b2||(0,A.F)(b1),++g){b3=b1[g]
b4=B.ld(b3.h(0,"at"))
B.da(b3.h(0,"actor"))
b5=B.da(b3.h(0,"action"))
b0.push(new B.akk(b4,b5==null?"unknown":b5))}a5.push(new B.G7(e,d,a0,a1,a2,a3,a8,a9,b0,B.da(a7.h(0,"id"))))}h=x.N
e=x.g
d=A.D(h,e)
for(a0=a5.length,g=0;a1=a5.length,g<a1;a5.length===a0||(0,A.F)(a5),++g){a7=a5[g]
a1=a7.y
if(a1!=null)d.l(0,a1,a7)}a0=A.D(h,e)
for(g=0;a2=a5.length,g<a2;a5.length===a1||(0,A.F)(a5),++g){a7=a5[g]
a0.l(0,a7.b,a7)}e=A.D(h,e)
for(g=0;g<a5.length;a5.length===a2||(0,A.F)(a5),++g){a7=a5[g]
a1=a7.d
if(a1!=null)e.l(0,a1,a7)}b6=B.mL(h9.h(0,"tasks"))
a1=A.c([],x.i)
for(a6=0;a6<b6.length;a6=b7){b7=a6+1
a2=C.n.bF(C.f.j(b7),3,"0")
a3=B.da(b6[a6].h(0,h0))
if(a3==null)a3="Untitled task"
a8=B.da(b6[a6].h(0,g6))
a1.push(new B.AC("T-"+a2,a3,B.oR(a8==null?"open":a8),B.da(b6[a6].h(0,"assignee")),b6[a6].h(0,"due"),B.ld(b6[a6].h(0,"created_at")),B.ld(b6[a6].h(0,"updated_at"))))}a2=A.D(h,x.l)
for(a3=a1.length,g=0;g<a1.length;a1.length===a3||(0,A.F)(a1),++g){b8=a1[g]
a2.l(0,b8.b,b8)}b9=new B.b8M(h8)
c0=B.mL(h9.h(0,h1))
c1=B.mL(h9.h(0,"alibis"))
c2=B.mL(h9.h(0,"gaps"))
a3=A.K(b9.$3(h2,c0,new B.b8N()),x.k)
C.h.J(a3,b9.$3("Alibis",c1,new B.b8O()))
C.h.J(a3,b9.$3(h3,c2,new B.b8P()))
c3=A.c([],x.o)
for(a8=B.mL(h9.h(0,"ai_findings")),a9=a8.length,b0=x.s,b1=x.j,b2=x.F,g=0;g<a8.length;a8.length===a9||(0,A.F)(a8),++g){c4=a8[g]
b4=A.c([],b0)
if(b1.b(c4.h(0,h4)))for(b5=J.aJ(b1.a(c4.h(0,h4)));b5.q();){c5=b5.gI()
if(typeof c5=="string")b4.push(c5)}c6=A.c([],b0)
for(b5=b4.length,c7=0;c7<b4.length;b4.length===b5||(0,A.F)(b4),++c7){c8=d.h(0,b4[c7])
if(c8!=null)c6.push(c8.a)}if(c6.length===0){c9=B.da(c4.h(0,"input_ref"))
if(c9==null)c9=""
for(b4=A.cd("[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",!0,!1).pX(0,c9),b4=new A.xo(b4.a,b4.b,b4.c);b4.q();){c8=b4.d
d0=d.h(0,(c8==null?b2.a(c8):c8).b[0])
if(d0!=null&&!C.h.n(c6,d0.a))c6.push(d0.a)}}b4=B.da(c4.h(0,"kind"))
if(b4==null)b4="ai finding"
b4=A.cz(b4,"_"," ")
b4=A.cz(b4,"-"," ")
b5=B.da(c4.h(0,h0))
d1=B.da(c4.h(0,g6))
c3.push(new B.akj(b4.toLowerCase(),b5,B.oR(d1==null?"reviewed":d1),B.da(c4.h(0,"reviewed_by")),B.ld(c4.h(0,"reviewed_at")),c6))}d2=B.mL(h9.h(0,"timeline"))
d3=A.c([],x.h)
for(d=d2.length,a8=x.f,a9=x.P,b0=x.z,g=0;g<d2.length;d2.length===d||(0,A.F)(d2),++g){a7=d2[g]
d4=a7.h(0,"payload")
if(!a9.b(d4))d4=a8.b(d4)?A.aM(d4,h,b0):C.dh
d5=d4.h(0,"details")
if(!a9.b(d5))d5=a8.b(d5)?A.aM(d5,h,b0):C.dh
d6=B.da(d4.h(0,"summary"))
d7=B.da(d4.h(0,"agent_type"))
d8=B.da(a7.h(0,"subject"))
d9=B.ld(a7.h(0,"when"))
e0=B.da(a7.h(0,"actor"))
if(e0==null)e0="System"
e1=B.da(d5.h(0,g9))
e2=B.da(d5.h(0,"sha256"))
b1=e1==null
e3=!b1?a0.h(0,e1):g4
if(e3==null)e3=e2==null?g4:e.h(0,e2)
if(d7!=null){b1=A.cz(d7,"_"," ")
e4="AI finding reviewed: "+A.cz(b1,"-"," ").toLowerCase()
e5=e3==null?g4:e3.a}else{e5=g4
if(d6==="Room created")e4="Case opened"
else if(d6==="Evidence uploaded"){e6=b1?g8:e1
b1=e3==null
e4=b1?h5+e6:h5+e3.a+", "+e6
e5=b1?g4:e3.a}else if(d6==="Task created"||d6==="Task updated"){e7=B.da(d5.h(0,h0))
if(e7==null)e7=""
b1=e7.length===0
e8=b1?g4:a2.h(0,e7)
e9=B.da(d5.h(0,g6))
if(b1)e4=d6==null?"":d6
else{b1=e9!=null&&d6==="Task updated"
b2=A.q(d6)+": "
e4=b1?b2+e7+", status "+B.c9E(e9):b2+e7}e5=e8==null?g4:e8.a}else if(d6==="Join requested")e4="Access requested"
else if(d6==="Member approved")if(d8!=null)e4="Access approved for "+d8
else e4=d6==null?"Member approved":d6
else if(d6!=null){e5=e3==null?g4:e3.a
e4=d6}else{f0=B.da(a7.h(0,"type"))
e4=B.oR(f0==null?"event":f0)
e5=e3==null?g4:e3.a}}d3.push(new B.AD(d9,e0,e4,e5))}C.h.ed(d3,new B.b8Q())
h=A.aQ(x.S)
for(e=d3.length,g=0;g<d3.length;d3.length===e||(0,A.F)(d3),++g){d=d3[g].a
if(d!=null)h.B(0,A.b0(d.d6()))}h=h.a
e=new B.b8V()
f1=e.$1(c0)
f2=e.$1(c1)
f3=e.$1(c2)
f4=new A.ag(a1,new B.b8R(),x.e).gu(0)
e=new B.b8X()
d=c0.length
f5=d===0&&c1.length===0&&c2.length===0?"No contradictions, alibis or investigation gaps are recorded.":A.q(e.$3(d,"contradiction",h1))+", "+A.q(e.$3(c1.length,"alibi","alibis"))+" and "+A.q(e.$3(c2.length,"gap","gaps"))+" are recorded."
f6=o==null?"The investigation status has not been set.":"The investigation status is "+B.c9E(o)+"."
f7=B.bX1(h9.h(0,"closed_summary"))
f8=g4
if(f7.gbX(f7)){f9=B.ld(f7.h(0,g3))
if(f9!=null){d=B.bX1(f7.h(0,"summary_json"))
a0=B.da(f7.h(0,"generated_by_name"))
f8=new B.aJJ(d,f9,a0==null?"Not recorded":a0)}}r=r?g4:p.toLowerCase()
d=A.q(e.$3(j.length,"member","members"))
a0=A.q(e.$3(a5.length,"evidence item","evidence items"))
a2=A.q(e.$3(a1.length,"task","tasks"))
a8=A.q(e.$3(d3.length,"timeline event","timeline events"))
a9=B.c_H(n)
b0=new B.b8U()
e=e.$3(a5.length,"item","items")
if(a5.length===0)b1=h6
else b1=C.h.dX(a5,new B.b8S())?"Hash recorded":"Hash not recorded"
if(a5.length===0)b2=E.m5
else b2=C.h.dX(a5,new B.b8T())?E.m4:E.o9
b2=b0.$4("Evidence",e,b1,b2)
b1=c0.length
e=""+b1
b1=b1===0
if(b1)b4=h6
else b4=f1>0?A.q(f1)+" open":e+" recorded"
if(b1)b1=E.m5
else b1=f1>0?E.o9:E.m4
b1=b0.$4(h2,e,b4,b1)
b4=c1.length
e=""+b4
b4=b4===0
if(b4)b5=h6
else b5=f2>0?A.q(f2)+" open":e+" recorded"
if(b4)b4=E.m5
else b4=f2>0?E.o9:E.m4
b4=b0.$4("Alibis",e,b5,b4)
b5=c2.length
e=""+b5
b5=b5===0
if(b5)d1=h6
else d1=f3>0?A.q(f3)+" open":e+" recorded"
if(b5)b5=E.m5
else b5=f3>0?E.o9:E.m4
b5=b0.$4(h3,e,d1,b5)
d1=a1.length
e=d1===0
if(e)g0=h6
else g0=f4>0?""+f4+" open":"All complete"
if(e)e=E.m5
else e=f4>0?E.o9:E.m4
e=b0.$4("Tasks",""+d1,g0,e)
g0=j.length
d1=""+g0
g0=g0===0
g1=g0?h6:d1+" approved"
g2=A.c([b2,b1,b4,b5,e,b0.$4("Members",d1,g1,g0?E.m5:E.m4)],x.a)
e=B.da(w.h(0,g5))
b0=B.da(w.h(0,"role"))
b1=A.dh(h9.h(0,"report_version"))
b1=b1==null?g4:C.l.F(b1)
if(b1==null){b1=A.dh(h9.h(0,"version"))
b1=b1==null?g4:C.l.F(b1)}if(b1==null)b1=1
return new B.b8L(i0,u,v,s,q,n,m,h8,e,b0,k,"This report records "+d+", "+a0+", "+a2+" and "+a8+" for case "+u+", opened on "+a9+". "+f5+" "+f6,g2,j,a5,a1,d3,a3,c3,b1,A.Iq(C.lE.b9(C.bw.b9(C.aJ.jn(B.c8p(h9),g4))).a),h>1,j.length,a5.length,a1.length,d3.length,r==="closed",f8)},
cJj(d){var w,v=d==null?null:d.toLowerCase()
A:{if("open"===v||"conflict"===v||"pending"===v){w=E.o9
break A}if("resolved"===v||"verified"===v||"accepted"===v||"dismissed"===v){w=E.m4
break A}if("rejected"===v){w=E.fhQ
break A}w=E.m5
break A}return w},
akm:function akm(d,e){this.a=d
this.b=e},
c_G:function c_G(){},
c2R:function c2R(){},
c2S:function c2S(){},
bXe:function bXe(){},
akk:function akk(d,e){this.a=d
this.c=e},
akl:function akl(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h
_.r=i
_.w=j},
G7:function G7(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
AC:function AC(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
AD:function AD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Az:function Az(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
AB:function AB(d,e){this.a=d
this.b=e},
akj:function akj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
N2:function N2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aJJ:function aJJ(d,e,f){this.a=d
this.b=e
this.c=f},
aJM:function aJM(){},
aJL:function aJL(){},
aJK:function aJK(){},
b8L:function b8L(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i
_.w=j
_.x=k
_.y=l
_.z=m
_.as=n
_.at=o
_.ax=p
_.ay=q
_.ch=r
_.CW=s
_.cx=t
_.cy=u
_.db=v
_.dx=w
_.dy=a0
_.fr=a1
_.fx=a2
_.fy=a3
_.go=a4
_.id=a5
_.k4=a6
_.ok=a7},
b8M:function b8M(d){this.a=d},
b8N:function b8N(){},
b8O:function b8O(){},
b8P:function b8P(){},
b8Q:function b8Q(){},
b8V:function b8V(){},
b8W:function b8W(){},
b8R:function b8R(){},
b8X:function b8X(){},
b8U:function b8U(){},
b8S:function b8S(){},
b8T:function b8T(){}},E,P,Q,R,L
J=c[1]
A=c[0]
C=c[2]
M=c[53]
G=c[51]
H=c[41]
F=c[102]
D=c[70]
I=c[103]
N=c[100]
K=c[50]
O=c[166]
B=a.updateHolder(c[16],B)
E=c[165]
P=c[98]
Q=c[118]
R=c[167]
L=c[82]
B.bMd.prototype={
cP(){var w=0,v=A.m(x.I),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$cP=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:A.C("pw")
s=$.S4()
h=G
w=3
return A.e(s.eR("assets/fonts/Geist-Regular.ttf"),$async$cP)
case 3:r=h.aRX(e)
A.C("pw")
h=G
w=4
return A.e(s.eR("assets/fonts/Geist-Bold.ttf"),$async$cP)
case 4:q=h.aRX(e)
A.C("pw")
h=G
w=5
return A.e(s.eR("assets/fonts/Geist-SemiBold.ttf"),$async$cP)
case 5:p=h.aRX(e)
A.C("pw")
h=G
w=6
return A.e(s.eR("assets/fonts/GeistMono-Regular.ttf"),$async$cP)
case 6:o=h.aRX(e)
A.C("pw")
n=H.c7l(r,q,q,r)
A.C("pw")
s=t.a
m=s.gFF()
l=s.c
k=l==null
j=k?"Not recorded":l
i=H.c58(m,"CaseThread","CaseThread, case report, "+(k?"Not recorded":l),"CaseThread","Case report "+j+" for committee use",n,"Case report \u2014 "+s.b)
A.C("pw")
A.C("pdf")
A.C("pw")
i.a6u(G.cyq(new B.bMe(t,o,p),new B.bMf(t),new B.bMg(t,o),H.cvf(51,45.4,51,62.4),100,N.Ia))
u=i.iw()
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$cP,v)},
aP3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k="pw",j=null
A.C(k)
w=l.a
A.C(k)
A.C(k)
v=D.c9(w.b,H.c5(j,j,j,j,j,j,j,j,j,F.at,j,j,24,j,F.dX,j,!0,j,j,j,j))
A.C(k)
u=D.eB(j,4,j)
A.C(k)
A.C(k)
t=D.c9(w.as,H.c5(j,$.t3(),j,j,j,j,j,j,j,F.at,j,j,10.5,j,j,j,!0,j,j,j,j))
A.C(k)
s=D.eB(j,20,j)
r=l.b3E()
A.C(k)
q=D.eB(j,22,j)
p=l.a3q("Summary")
A.C(k)
A.C(k)
o=D.c9(w.at,H.c5(j,j,j,j,j,j,j,j,j,F.at,j,j,10,j,j,j,!0,j,j,j,j))
A.C(k)
n=D.eB(j,10,j)
m=l.aml("The summary is generated from structured case data, not by AI. AI-assisted findings appear only in section 3, labelled and attributed to the reviewer.")
A.C(k)
m=[v,u,t,s,r,q,p,o,n,m,D.eB(j,22,j),l.a3q("Findings at a glance"),l.aY8()]
C.h.J(m,l.aW5())
if(w.a===E.Fk){A.C(k)
m.push(D.eB(j,22,j))
C.h.J(m,l.afS(d))
return m}A.C(k)
w=D.eB(j,22,j)
v=l.z9("1","People involved")
u=l.b8w()
A.C(k)
u=[w,v,u,D.eB(j,22,j),l.z9("2","Evidence register")]
C.h.J(u,l.aVq(d))
A.C(k)
u.push(D.eB(j,22,j))
u.push(l.z9("3","Analysis"))
u.push(l.aOn())
C.h.J(u,l.aOg())
A.C(k)
u.push(D.eB(j,22,j))
u.push(l.z9("4","Tasks"))
u.push(l.bfE())
A.C(k)
u.push(D.eB(j,22,j))
u.push(l.z9("5","Timeline"))
u.push(l.bgg())
A.C(k)
u.push(D.eB(j,22,j))
u.push(l.z9("6","References and definitions"))
A.C(k)
v=G.me(108)
A.C(k)
v=A.Q([0,v,1,G.yX()],x.S,x.w)
A.C(k)
A.C(k)
w=D.c9("Evidence reference (E-001)",H.c5(j,j,j,j,j,j,j,j,j,F.at,j,j,8.5,j,j,j,!0,j,j,j,j))
A.C(k)
A.C(k)
t=D.c9(y.m,H.c5(j,j,j,j,j,j,j,j,j,F.at,j,j,8.5,j,j,j,!0,j,j,j,j))
A.C(k)
A.C(k)
s=D.c9("Hash recorded",H.c5(j,j,j,j,j,j,j,j,j,F.at,j,j,8.5,j,j,j,!0,j,j,j,j))
A.C(k)
A.C(k)
r=D.c9(y.f,H.c5(j,j,j,j,j,j,j,j,j,F.at,j,j,8.5,j,j,j,!0,j,j,j,j))
A.C(k)
A.C(k)
q=D.c9("AI-assisted",H.c5(j,j,j,j,j,j,j,j,j,F.at,j,j,8.5,j,j,j,!0,j,j,j,j))
A.C(k)
A.C(k)
p=D.c9(y.h,H.c5(j,j,j,j,j,j,j,j,j,F.at,j,j,8.5,j,j,j,!0,j,j,j,j))
A.C(k)
A.C(k)
o=D.c9("Scope",H.c5(j,j,j,j,j,j,j,j,j,F.at,j,j,8.5,j,j,j,!0,j,j,j,j))
A.C(k)
A.C(k)
u.push(l.Cs(v,E.eQX,A.c([[w,t],[s,r],[q,p],[o,D.c9(y.F,H.c5(j,j,j,j,j,j,j,j,j,F.at,j,j,8.5,j,j,j,!0,j,j,j,j))]],x.t)))
C.h.J(u,l.aVs())
A.C(k)
u.push(D.eB(j,22,j))
C.h.J(u,l.afS(d))
C.h.J(m,u)
return m},
a3q(d){var w,v="pw",u=null
A.C(v)
A.C(v)
w=G.DK(8,0,0,0)
A.C(v)
A.C(v)
A.C(v)
return D.u1(D.c9(d,H.c5(u,u,u,u,u,u,u,u,u,F.at,u,u,13,u,F.dX,u,!0,u,u,u,u)),w)},
z9(d,e){var w,v,u,t="pw",s=null
A.C(t)
A.C(t)
w=G.DK(8,0,0,0)
A.C(t)
A.C(t)
A.C(t)
A.C(t)
v=D.c9(d,H.c5(s,$.c3z(),s,s,s,s,s,s,s,F.at,s,s,13,s,F.dX,s,!0,s,s,s,s))
A.C(t)
u=D.eB(s,s,6)
A.C(t)
A.C(t)
A.C(t)
return D.u1(D.Gh(A.c([v,u,D.c9(e,H.c5(s,s,s,s,s,s,s,s,s,F.at,s,s,13,s,F.dX,s,!0,s,s,s,s))],x.p),I.nq,I.pq),w)},
aml(d){var w,v,u="pw",t=null
A.C(u)
A.C(u)
w=G.vu(12,8)
A.C(u)
v=$.c3A()
A.C(u)
A.C(u)
v=D.D7(G.abz(I.c2,G.yp($.c3z(),I.en,3),I.c2,I.c2),v,I.l1)
A.C(u)
A.C(u)
return D.yG(t,D.c9(d,H.c5(t,t,t,t,t,t,t,t,t,F.at,t,t,9,t,t,t,!0,t,t,t,t)),v,t,t,w,t)},
QV(){var w,v=null
A.C("pw")
w=B.k0(this.a.x)
A.C("pw")
return D.c9("None recorded as of "+w+".",H.c5(v,v,v,v,v,v,v,v,v,F.at,v,v,10,v,v,v,!0,v,v,v,v))},
aW5(){var w,v,u,t,s,r,q=this,p="pw",o=null
A.C(p)
w=[D.eB(o,22,o),q.a3q("Final outcome")]
v=q.a
u=v.ok
if(u==null){A.C(p)
v=v.k4?y.c:"Case is open. No closed summary yet."
A.C(p)
w.push(D.c9(v,H.c5(o,o,o,o,o,o,o,o,o,F.at,o,o,10,o,o,o,!0,o,o,o,o)))
return w}A.C(p)
t=u.c
s=B.c_H(u.b)
A.C(p)
w.push(D.c9("Generated by "+t+" on "+s+" (UTC).",H.c5(o,o,o,o,o,o,o,o,o,F.at,o,o,10,o,o,o,!0,o,o,o,o)))
r=u.gaAi()
if(r!=null){A.C(p)
w.push(D.eB(o,6,o))
A.C(p)
A.C(p)
w.push(D.c9(r,H.c5(o,o,o,o,o,o,o,o,o,F.at,o,o,10,o,o,o,!0,o,o,o,o)))}A.C(p)
w.push(D.eB(o,6,o))
A.C(p)
t=u.gaw1()
A.C(p)
w.push(D.c9(t,H.c5(o,o,o,o,o,o,o,o,o,F.at,o,o,10,o,o,o,!0,o,o,o,o)))
if(v.a===E.mJ){C.h.J(w,q.a4e("People named in the summary",u.gaze()))
C.h.J(w,q.a4e("Evidence listed in the summary",u.gavL()))
C.h.J(w,q.a4e("Major events in the summary",u.gavJ()))}return w},
a4e(d,e){var w,v,u,t,s,r,q=null,p="pw"
if(e.length===0)return C.pl
A.C(p)
w=D.eB(q,10,q)
A.C(p)
A.C(p)
A.C(p)
v=D.c9(d,H.c5(q,q,q,q,q,q,q,q,q,F.at,q,q,10,q,F.dX,q,!0,q,q,q,q))
A.C(p)
v=[w,v,D.eB(q,4,q)]
for(w=e.length,u=x.p,t=0;t<e.length;e.length===w||(0,A.F)(e),++t){s=e[t]
A.C(p)
A.C(p)
A.C(p)
A.C(p)
r=D.c9("\u2022  ",H.c5(q,q,q,q,q,q,q,q,q,F.at,q,q,10,q,q,q,!0,q,q,q,q))
A.C(p)
A.C(p)
A.C(p)
v.push(D.Gh(A.c([r,G.aQe(D.c9(s,H.c5(q,q,q,q,q,q,q,q,q,F.at,q,q,10,q,q,q,!0,q,q,q,q)),1)],u),I.lB,I.pq))}return v},
Cs(d,e,f){var w,v,u,t,s,r,q,p,o,n,m="pw",l=null
A.C(m)
A.C(m)
A.C(m)
w=G.yp($.caE(),I.en,1)
A.C(m)
w=G.c7f(G.yp($.RR(),I.en,0.5),w)
A.C(m)
A.C(m)
v=D.D7(l,$.c3A(),I.l1)
u=x.p
t=A.c([],u)
for(s=e.length,r=0;r<s;++r){q=e[r]
A.C(m)
A.C(m)
p=G.vu(8,5)
A.C(m)
A.C(m)
A.C(m)
t.push(D.u1(D.c9(q,H.c5(l,l,l,l,l,l,l,l,l,F.at,l,l,8.5,l,F.dX,l,!0,l,l,l,l)),p))}v=A.c([G.a_W(t,v,!0)],x.T)
for(t=f.length,r=0;r<f.length;f.length===t||(0,A.F)(f),++r){o=f[r]
A.C(m)
s=A.c([],u)
for(p=C.h.gV(o);p.q();){n=p.gI()
A.C(m)
A.C(m)
s.push(D.u1(n,G.vu(8,6)))}v.push(G.a_W(s,l,!1))}return G.bif(w,v,d)},
aSN(d,e){return this.Cs(null,d,e)},
Tw(d,e){var w,v,u,t=null,s="pw"
switch(e.a){case 0:w=$.cq7()
break
case 1:w=$.cq8()
break
case 2:w=$.cq6()
break
case 3:w=$.t3()
break
default:w=t}A.C(s)
A.C(s)
v=G.vu(7,2)
A.C(s)
u=$.c3A()
A.C(s)
A.C(s)
u=D.D7(G.abz(I.c2,G.yp(w,I.en,3),I.c2,I.c2),u,I.l1)
A.C(s)
A.C(s)
A.C(s)
return D.yG(t,D.c9(d,H.c5(t,w,t,t,t,t,t,t,t,F.at,t,t,8.5,t,F.dX,t,!0,t,t,t,t)),u,t,t,v,t)},
b3E(){var w,v,u,t,s,r,q,p,o,n=null,m="pw",l=this.a,k=l.c
if(k==null)k="Not recorded"
w=x.s
v=l.e
u=[A.c(["Case reference",k],w),A.c(["Case type",l.d],w),A.c(["Status",v],w),A.c(["Opened",B.k0(l.r)],w),A.c(["Last activity",B.k0(l.w)],w),A.c(["Prepared by",l.gFF()],w),A.c(["Generated",B.k0(l.x)],w),A.c(["Scope",y.g],w)]
A.C(m)
A.C(m)
A.C(m)
w=G.c7f(G.yp($.RR(),I.en,0.5),I.c2)
A.C(m)
l=G.me(119)
A.C(m)
l=A.Q([0,l,1,G.yX()],x.S,x.w)
k=A.c([],x.T)
for(t=x.p,s=0;s<8;++s){r=u[s]
A.C(m)
A.C(m)
A.C(m)
q=G.vu(8,6)
A.C(m)
p=r[0]
A.C(m)
A.C(m)
q=D.u1(D.c9(p,H.c5(n,$.t3(),n,n,n,n,n,n,n,F.at,n,n,8.5,n,F.dX,n,!0,n,n,n,n)),q)
A.C(m)
A.C(m)
p=G.vu(8,6)
if(r[0]==="Status"){o=r[1]
o=this.Tw(o,v.toLowerCase()==="active"?E.m4:E.m5)}else{A.C(m)
o=r[1]
A.C(m)
o=D.c9(o,H.c5(n,n,n,n,n,n,n,n,n,F.at,n,n,8.5,n,n,n,!0,n,n,n,n))}k.push(G.a_W(A.c([q,D.u1(o,p)],t),n,!1))}return G.bif(w,k,l)},
aY8(){var w,v,u,t,s=null,r="pw",q=A.c([],x.t)
for(w=this.a.ax,v=0;v<6;++v){u=w[v]
A.C(r)
A.C(r)
t=D.c9(u.a,H.c5(s,s,s,s,s,s,s,s,s,F.at,s,s,8.5,s,s,s,!0,s,s,s,s))
A.C(r)
A.C(r)
q.push([t,D.c9(u.b,H.c5(s,s,s,s,s,s,s,s,s,F.at,s,s,8.5,s,s,s,!0,s,s,s,s)),this.Tw(u.c,u.d)])}return this.aSN(E.eNA,q)},
b8w(){var w,v,u,t,s,r,q,p,o,n,m=null,l="pw",k=this.a,j=k.ay,i=j.length
if(i===0)return this.QV()
w=[]
for(k=k.id,v=x.p,u=0;u<j.length;j.length===i||(0,A.F)(j),++u){t=j[u]
A.C(l)
A.C(l)
s=G.DK(10,10,0,0)
A.C(l)
A.C(l)
A.C(l)
r=D.D7(G.abz(I.c2,G.yp($.RR(),I.en,2),I.c2,I.c2),m,I.l1)
A.C(l)
A.C(l)
A.C(l)
A.C(l)
A.C(l)
q=D.c9(t.a,H.c5(m,m,m,m,m,m,m,m,m,F.at,m,m,10,m,F.dX,m,!0,m,m,m,m))
A.C(l)
p=t.gbsQ()
A.C(l)
w.push(D.yG(m,D.Dn(A.c([q,D.c9(t.b+"\n"+p+"\n"+t.r+" of "+k+" recorded events",H.c5(m,$.t3(),m,m,m,m,m,m,m,F.at,m,m,9,m,m,m,!0,m,m,m,m))],v),I.lB),r,m,m,s,m))}o=[]
for(n=0;n<w.length;n+=2){A.C(l)
k=w[n]
j=n+1
if(j<w.length)j=w[j]
else{A.C(l)
j=D.yG(m,m,m,m,m,m,m)}o.push(G.a_W(A.c([k,j],v),m,!1))}A.C(l)
A.C(l)
k=G.yX()
A.C(l)
k=A.Q([0,k,1,G.yX()],x.S,x.w)
j=A.c([],x.T)
for(i=o.length,u=0;u<o.length;o.length===i||(0,A.F)(o),++u)j.push(o[u])
return G.bif(m,j,k)},
aVq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="pw",g=this.a.ch,f=g.length
if(f===0)return[this.QV()]
w=[]
for(v=x.p,u=x.t,t=x.S,s=x.w,r=0;r<g.length;g.length===f||(0,A.F)(g),++r){q=g[r]
A.C(h)
p=G.me(40)
A.C(h)
o=G.yX()
A.C(h)
n=G.me(62)
A.C(h)
n=A.Q([0,p,1,o,2,n,3,G.me(124)],t,s)
A.C(h)
A.C(h)
o=D.c9(q.a,H.c5(i,i,i,i,i,i,i,i,i,F.at,i,i,8.5,i,i,i,!0,i,i,i,i))
A.C(h)
A.C(h)
A.C(h)
A.C(h)
p=D.c9(q.b,H.c5(i,i,i,i,i,i,i,i,i,F.at,i,i,8.5,i,i,i,!0,i,i,i,i))
A.C(h)
m=q.gaAR()
A.C(h)
l=$.t3()
m=D.Dn(A.c([p,D.c9(m,H.c5(i,l,i,i,i,i,i,i,i,F.at,i,i,8,i,i,i,!0,i,i,i,i))],v),I.lB)
A.C(h)
A.C(h)
p=D.c9("v"+q.c,H.c5(i,i,i,i,i,i,i,i,i,F.at,i,i,8.5,i,i,i,!0,i,i,i,i))
A.C(h)
A.C(h)
A.C(h)
k=B.k0(q.e)
A.C(h)
k=D.c9(k,H.c5(i,i,i,i,i,i,i,i,i,F.at,i,i,8.5,i,i,i,!0,i,i,i,i))
A.C(h)
j=q.w
if(j==null)j="Not recorded"
A.C(h)
w.push(this.Cs(n,E.eQB,A.c([[o,m,p,D.Dn(A.c([k,D.c9("by "+j,H.c5(i,l,i,i,i,i,i,i,i,F.at,i,i,8,i,i,i,!0,i,i,i,i))],v),I.lB)]],u)))
A.C(h)
w.push(D.eB(i,4,i))
p=q.d
if(p!=null){A.C(h)
A.C(h)
A.C(h)
A.C(h)
A.C(h)
o=D.c9("SHA-256",H.c5(i,i,i,i,i,i,i,i,i,F.at,i,i,8.5,i,F.dX,i,!0,i,i,i,i))
A.C(h)
n=D.eB(i,i,8)
A.C(h)
p=C.h.b4(B.cnA(p),"\n")
A.C(h)
w.push(D.Gh(A.c([o,n,D.c9(p,H.c5(i,i,i,i,i,i,d,i,i,F.at,i,i,8,i,i,i,!0,i,i,i,i))],v),I.lB,I.pq))}else{A.C(h)
A.C(h)
A.C(h)
w.push(D.c9("SHA-256: Not recorded",H.c5(i,i,i,i,i,i,i,i,i,F.at,i,i,8.5,i,F.dX,i,!0,i,i,i,i)))}A.C(h)
w.push(D.eB(i,4,i))
A.C(h)
p=q.gauN()
A.C(h)
w.push(D.c9(p,H.c5(i,l,i,i,i,i,i,i,i,F.at,i,i,8.5,i,i,i,!0,i,i,i,i)))
A.C(h)
w.push(D.eB(i,12,i))}return w},
aOn(){var w,v,u,t,s,r,q,p="pw",o=null
A.C(p)
w=G.me(108)
A.C(p)
v=G.yX()
A.C(p)
v=A.Q([0,w,1,v,2,G.me(86)],x.S,x.w)
w=A.c([],x.t)
for(u=this.a.cy,t=u.length,s=0;s<u.length;u.length===t||(0,A.F)(u),++s){r=u[s]
A.C(p)
A.C(p)
q=D.c9(r.a,H.c5(o,o,o,o,o,o,o,o,o,F.at,o,o,8.5,o,o,o,!0,o,o,o,o))
A.C(p)
A.C(p)
w.push([q,D.c9(r.b,H.c5(o,o,o,o,o,o,o,o,o,F.at,o,o,8.5,o,o,o,!0,o,o,o,o)),this.Tw(r.c,r.d)])}return this.Cs(v,E.eNz,w)},
aOg(){var w,v,u,t,s,r,q,p,o,n,m,l,k="pw",j=null,i="Not recorded"
A.C(k)
w=[D.eB(j,10,j)]
v=this.a
u=v.db
if(u.length===0){A.C(k)
v=B.k0(v.x)
A.C(k)
w.push(D.c9("AI-assisted findings: "+("None recorded as of "+v+"."),H.c5(j,j,j,j,j,j,j,j,j,F.at,j,j,10,j,j,j,!0,j,j,j,j)))
return w}w.push(this.aml("AI-assisted findings, human reviewed. These are suggestions, not verified findings."))
A.C(k)
w.push(D.eB(j,8,j))
A.C(k)
v=G.yX()
A.C(k)
t=G.me(86)
A.C(k)
s=G.me(96)
A.C(k)
r=G.me(64)
A.C(k)
r=A.Q([0,v,1,t,2,s,3,r,4,G.me(52)],x.S,x.w)
s=A.c([],x.t)
for(v=u.length,q=0;q<u.length;u.length===v||(0,A.F)(u),++q){p=u[q]
t=p.b
t=t==null?"":": "+t
A.C(k)
A.C(k)
t=D.c9(p.a+t,H.c5(j,j,j,j,j,j,j,j,j,F.at,j,j,8.5,j,j,j,!0,j,j,j,j))
o=p.d
if(o==null)o=i
A.C(k)
A.C(k)
o=D.c9(o,H.c5(j,j,j,j,j,j,j,j,j,F.at,j,j,8.5,j,j,j,!0,j,j,j,j))
n=B.k0(p.e)
A.C(k)
A.C(k)
n=D.c9(n,H.c5(j,j,j,j,j,j,j,j,j,F.at,j,j,8.5,j,j,j,!0,j,j,j,j))
A.C(k)
A.C(k)
m=D.c9(p.c,H.c5(j,j,j,j,j,j,j,j,j,F.at,j,j,8.5,j,j,j,!0,j,j,j,j))
l=p.f
l=l.length===0?i:C.h.b4(l,", ")
A.C(k)
A.C(k)
s.push([t,o,n,m,D.c9(l,H.c5(j,j,j,j,j,j,j,j,j,F.at,j,j,8.5,j,j,j,!0,j,j,j,j))])}w.push(this.Cs(r,E.e53,s))
return w},
bfE(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j="pw",i=l.a.CW
if(i.length===0)return l.QV()
A.C(j)
w=G.me(40)
A.C(j)
v=G.yX()
A.C(j)
u=G.me(74)
A.C(j)
t=G.me(80)
A.C(j)
t=A.Q([0,w,1,v,2,u,3,t,4,G.me(68)],x.S,x.w)
u=A.c([],x.t)
for(w=i.length,v=x.p,s=0;s<i.length;i.length===w||(0,A.F)(i),++s){r=i[s]
A.C(j)
A.C(j)
q=D.c9(r.a,H.c5(k,k,k,k,k,k,k,k,k,F.at,k,k,8.5,k,k,k,!0,k,k,k,k))
A.C(j)
A.C(j)
A.C(j)
A.C(j)
p=D.c9(r.b,H.c5(k,k,k,k,k,k,k,k,k,F.at,k,k,8.5,k,k,k,!0,k,k,k,k))
A.C(j)
o=B.k0(r.f)
n=B.k0(r.r)
A.C(j)
n=D.Dn(A.c([p,D.c9("Created "+o+" \xb7 Updated "+n,H.c5(k,$.t3(),k,k,k,k,k,k,k,F.at,k,k,8,k,k,k,!0,k,k,k,k))],v),I.lB)
o=r.c
p=l.Tw(o,o.toLowerCase()==="done"?E.m4:E.o9)
o=r.d
if(o==null)o="Unassigned"
A.C(j)
A.C(j)
o=D.c9(o,H.c5(k,k,k,k,k,k,k,k,k,F.at,k,k,8.5,k,k,k,!0,k,k,k,k))
m=r.gavx()
A.C(j)
A.C(j)
u.push([q,n,p,o,D.c9(m,H.c5(k,k,k,k,k,k,k,k,k,F.at,k,k,8.5,k,k,k,!0,k,k,k,k))])}return l.Cs(t,E.eS0,u)},
bgg(){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="pw",i=this.a,h=i.cx
if(h.length===0)return this.QV()
A.C(j)
A.C(j)
w=G.DK(0,10,0,0)
A.C(j)
A.C(j)
A.C(j)
v=$.c3z()
u=D.D7(G.abz(I.c2,G.yp(v,I.en,2),I.c2,I.c2),k,I.l1)
A.C(j)
A.C(j)
t=x.p
s=A.c([],t)
for(r=h.length,i=i.fr,q=0;q<h.length;h.length===r||(0,A.F)(h),++q){p=h[q]
A.C(j)
A.C(j)
o=G.DK(8,0,0,0)
A.C(j)
A.C(j)
A.C(j)
A.C(j)
n=G.DK(0,0,6,2)
A.C(j)
A.C(j)
A.C("pdf")
A.C(j)
n=D.yG(k,k,D.D7(G.ct4(v,2),O.acU,I.acV),10,n,k,10)
A.C(j)
A.C(j)
m=p.a
m=m==null?"Not recorded":B.cmK(m,i)
A.C(j)
m=D.eB(D.c9(m,H.c5(k,$.t3(),k,k,k,k,k,k,k,F.at,k,k,8.5,k,k,k,!0,k,k,k,k)),k,108)
A.C(j)
A.C(j)
A.C(j)
l=G.aQe(D.c9(p.b,H.c5(k,k,k,k,k,k,k,k,k,F.at,k,k,8.5,k,k,k,!0,k,k,k,k)),3)
A.C(j)
A.C(j)
A.C(j)
l=A.c([n,m,l,G.aQe(D.c9(p.c,H.c5(k,k,k,k,k,k,k,k,k,F.at,k,k,8.5,k,k,k,!0,k,k,k,k)),6)],t)
n=p.d
if(n!=null){A.C(j)
A.C(j)
A.C(j)
l.push(D.eB(D.c9(n,H.c5(k,k,k,k,k,k,k,k,k,F.at,k,k,8.5,k,k,k,!0,k,k,k,k)),k,44))}s.push(D.u1(D.Gh(l,I.lB,I.pq),o))}return D.yG(k,D.Dn(s,I.lB),u,k,k,w,k)},
aVs(){var w,v,u,t,s=null,r="pw",q=this.a.ch
if(q.length===0)return C.pl
A.C(r)
w=D.eB(s,10,s)
A.C(r)
A.C(r)
v=D.c9("Evidence index",H.c5(s,s,s,s,s,s,s,s,s,F.at,s,s,10,s,s,s,!0,s,s,s,s))
A.C(r)
v=[w,v,D.eB(s,4,s)]
for(w=q.length,u=0;u<q.length;q.length===w||(0,A.F)(q),++u){t=q[u]
A.C(r)
A.C(r)
v.push(D.c9(t.a+": "+t.b,H.c5(s,s,s,s,s,s,s,s,s,F.at,s,s,8.5,s,s,s,!0,s,s,s,s)))}return v},
afS(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j="pw",i=null,h=k.z9("7","Attestation and integrity")
A.C(j)
A.C(j)
A.C(j)
w=G.c7f(G.yp($.RR(),I.en,0.5),I.c2)
A.C(j)
v=G.me(119)
A.C(j)
v=A.Q([0,v,1,G.yX()],x.S,x.w)
u=k.a
t=k.a0F("Prepared by",u.gFF())
s=k.a0F("Generated",B.cLm(u.x))
r=k.a0F("Report version",""+u.dx)
A.C(j)
A.C(j)
A.C(j)
q=G.vu(8,6)
A.C(j)
A.C(j)
A.C(j)
p=$.t3()
q=D.u1(D.c9("Report SHA-256",H.c5(i,p,i,i,i,i,i,i,i,F.at,i,i,8.5,i,F.dX,i,!0,i,i,i,i)),q)
A.C(j)
A.C(j)
o=G.vu(8,6)
A.C(j)
u=C.h.b4(B.cnA(u.dy),"\n")
A.C(j)
n=x.p
v=G.bif(w,A.c([t,s,r,G.a_W(A.c([q,D.u1(D.c9(u,H.c5(i,i,i,i,i,i,d,i,i,F.at,i,i,8,i,i,i,!0,i,i,i,i)),o)],n),i,!1)],x.T),v)
A.C(j)
o=D.eB(i,10,i)
A.C(j)
A.C(j)
u=D.c9("To verify, recompute the SHA-256 over the canonical JSON (sorted keys, UTF-8, no whitespace) of the exported case data and compare it with the value above. A different value means the record changed after this report was generated.",H.c5(i,i,i,i,i,i,i,i,i,F.at,i,i,10,i,i,i,!0,i,i,i,i))
A.C(j)
q=D.eB(i,28,i)
A.C(j)
n=A.c([],n)
for(m=0;m<3;++m){l=E.eOm[m]
A.C(j)
A.C(j)
A.C(j)
w=G.DK(0,0,22,0)
A.C(j)
t=G.DK(0,0,0,4)
A.C(j)
A.C(j)
A.C(j)
s=D.D7(G.abz(I.c2,I.c2,I.c2,G.yp($.caE(),I.en,1)),i,I.l1)
A.C(j)
A.C(j)
n.push(G.aQe(D.yG(i,D.c9(l,H.c5(i,p,i,i,i,i,i,i,i,F.at,i,i,8,i,i,i,!0,i,i,i,i)),s,i,w,t,i),1))}return[h,v,o,u,q,D.Gh(n,I.nq,I.pq)]},
a0F(d,e){var w,v,u="pw",t=null
A.C(u)
A.C(u)
A.C(u)
w=G.vu(8,6)
A.C(u)
A.C(u)
A.C(u)
w=D.u1(D.c9(d,H.c5(t,$.t3(),t,t,t,t,t,t,t,F.at,t,t,8.5,t,F.dX,t,!0,t,t,t,t)),w)
A.C(u)
A.C(u)
v=G.vu(8,6)
A.C(u)
A.C(u)
return G.a_W(A.c([w,D.u1(D.c9(e,H.c5(t,t,t,t,t,t,t,t,t,F.at,t,t,8.5,t,t,t,!0,t,t,t,t)),v)],x.p),t,!1)}}
B.abX.prototype={
gBt(){var w=A.a9(x.P.a(this.a.h(0,"room")).h(0,"name"))
return w==null?"":w}}
B.O4.prototype={
W5(d){return this.bpd(d)},
bpd(d){var w=0,v=A.m(x.c),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$W5=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=x.N
n=x.z
w=7
return A.e(r.a.d5("export_case_report",A.Q(["target_room",d],o,n),n),$async$W5)
case 7:q=f
n=A.aM(x.f.a(C.aJ.hQ(C.aJ.jn(q,null),null)),o,n)
u=new B.abX(n)
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.G(l)
o=A.aC(p)
throw A.n(o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$W5,v)},
$icdT:1}
B.DV.prototype={
Y(){return new B.a3q()}}
B.a3q.prototype={
yX(d){return this.bc1(d)},
bc1(d){var w=0,v=A.m(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m
var $async$yX=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(q.w){w=1
break}q.v(new B.bAP(q))
t=4
w=7
return A.e(d.$0(),$async$yX)
case 7:o=q.c
if(o!=null)A.ao(o,!1).by()
r.push(6)
w=5
break
case 4:t=3
m=s.pop()
o=A.G(m)
if(x.L.b(o)){p=o
o=q.c
if(o!=null)o.T(x.q).f.aS(A.bR(null,null,null,null,null,C.D,null,A.o(A.aC(p).a,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}else throw m
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.v(new B.bAQ(q))
w=r.pop()
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$yX,v)},
zt(d){return this.bdN(d)},
bdN(d){var w=0,v=A.m(x.H),u=this,t,s,r
var $async$zt=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:s=u.a
w=2
return A.e(B.abY(s.e,d,s.d),$async$zt)
case 2:r=f
w=3
return A.e(A.cw("printing",""),$async$zt)
case 3:A.C("printing")
s=new Uint8Array(A.b5(r))
t=u.a
t=B.Zn(t.e.a,E.mJ,t.d)
w=4
return A.e(M.czR(s,B.cnq(t.c,".pdf",t.x)),$async$zt)
case 4:return A.k(null,v)}})
return A.l($async$zt,v)},
JJ(){var w=0,v=A.m(x.H),u,t=this,s,r,q,p
var $async$JJ=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:p=t.a
p=B.Zn(p.e.a,E.mJ,p.d)
s=B.cnq(p.c,".md",p.x)
p=t.a
r=new Uint8Array(A.b5(C.bw.b9(B.cno(B.Zn(p.e.a,E.mJ,p.d)))))
w=3
return A.e(A.a9N(r,s,"text/markdown"),$async$JJ)
case 3:if(e){p=t.c
if(p!=null)p.T(x.q).f.aS(E.flH)
w=1
break}p=$.y8()
q=A.c([L.BJ(r,"text/markdown",null)],x.x)
w=4
return A.e(p.iz(L.B1(A.c([s],x.s),q,s)),$async$JJ)
case 4:case 1:return A.k(u,v)}})
return A.l($async$JJ,v)},
C(d){var w,v,u,t=this,s=null,r=t.a,q=B.Zn(r.e.a,E.mJ,r.d)
r=A.d(d).ok.w
r=A.o("Export case report",s,s,s,s,s,r==null?s:r.qa(C.ak,-0.3),s,s,s)
w=A.d(d).ok.Q
if(w==null)w=s
else w=w.U(A.d(d).ax.a===C.p?C.B:C.C)
w=A.o(""+q.fx+" members \xb7 "+q.fy+" evidence items \xb7 "+q.go+" tasks \xb7 "+q.id+" timeline events",s,s,s,s,s,w,s,s,s)
v=A.d(d).ok.Q
if(v==null)v=s
else v=v.U(A.d(d).ax.a===C.p?C.B:C.C)
u=x.n
v=A.c([r,C.bO,w,C.dC,A.o(y.g,s,s,s,s,s,v,s,s,s)],u)
if(t.w)C.h.J(v,A.c([C.Q,R.P5],u))
v.push(C.Q)
v.push(new B.HM(E.e0z,"Summary (PDF)","First page plus attestation \u2014 the committee handout",t.w,new B.bAU(t),E.fC9))
v.push(C.Q)
v.push(new B.HM(C.CK,"Full record (PDF)","Every section, numbered for citation",t.w,new B.bAV(t),E.fAY))
v.push(C.Q)
v.push(new B.HM(C.nN,"Markdown (save file)","Same facts as the PDF, as a .md file",t.w,new B.bAW(t),E.fAP))
v.push(C.Q)
v.push(new B.HM(E.e0G,"Markdown (copy)","Plain text \u2014 paste anywhere to file it",t.w,new B.bAX(t,d),E.fzC))
return A.f4(!0,A.eL(new A.Y(Q.B9,A.a2(v,C.b3,s,C.r,C.W,0,C.x),s),s,C.T,s,s,s,C.a6),!0,C.ab,!0,!0)}}
B.HM.prototype={
C(d){var w,v,u,t=this,s=null,r=t.f,q=r?s:t.r,p=A.b2(14),o=A.b2(14),n=A.bW(A.d(d).ax.a===C.p?C.aC:C.cs,C.P,1),m=A.d(d).ax.a===C.p?C.cP:C.cQ,l=A.d(d).ax.a===C.p?C.bD:C.a9
l=A.aT(t.c,l,s,s,22)
w=A.d(d).ok.z
w=w==null?s:w.cR(C.ak)
w=A.o(t.d,s,s,s,s,s,w,s,s,s)
v=A.d(d).ok.Q
if(v==null)v=s
else v=v.U(A.d(d).ax.a===C.p?C.B:C.C)
u=x.n
u=A.c([l,C.ls,A.aA(A.a2(A.c([w,C.dC,A.o(t.e,s,s,s,s,s,v,s,s,s)],u),C.S,s,C.r,C.u,0,C.x),1,s)],u)
if(r)u.push(C.m7)
else u.push(A.aT(C.r1,A.d(d).ax.a===C.p?C.B:C.C,s,s,20))
return A.ep(!1,p,!0,A.ar(s,A.an(u,C.y,s,C.r,C.u,0,s,s),C.F,s,s,new A.aB(m,s,n,o,s,s,C.X),s,s,s,s,C.aD,s,s,s),s,!0,!1,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s)},
gcw(){return this.d}}
B.akm.prototype={
H(){return"ReportMode."+this.b}}
B.akk.prototype={}
B.akl.prototype={
gbsQ(){var w=this,v=B.k0(w.c),u=w.e
if(u!=null)return"Joined "+v+" \xb7 Approved "+B.k0(w.f)+" by "+u
if(w.w)return"Joined "+v+" (created the case)"
return"Joined "+v}}
B.G7.prototype={
gaAR(){var w=B.cMr(this.f),v=B.cLl(this.r),u=w==="Not recorded"
if(u&&v==="Not recorded")return"Not recorded"
if(u)return v
if(v==="Not recorded")return w
return w+", "+v},
gauN(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.x
if(k.length===0)return"Chain of custody: not recorded in the audit log."
w=A.c([],x.s)
for(v=k.length,u=!1,t=!1,s=!1,r=!1,q=0;q<k.length;k.length===v||(0,A.F)(k),++q){p=k[q]
o=p.a
n=o==null?null:B.cmK(o,!1)
m=n==null?"":" "+n
o=p.c
switch(o){case"evidence_uploaded":if(!u){w.push("uploaded"+m)
u=!0}break
case"evidence_hash_verified":if(!t){w.push("hash verified"+m)
t=!0}break
case"evidence_versions_uploaded":if(!s){w.push("new version uploaded"+m)
s=!0}break
case"evidence_deleted":if(!r){w.push("deleted"+m)
r=!0}break
default:w.push(B.oR(o)+m)}}l=!r?" No downloads or deletions recorded.":""
return"Chain of custody: "+C.h.b4(w,", ")+"."+l},
gbE(){return this.y}}
B.AC.prototype={
gavx(){var w,v,u=this.e
if(u==null)return"Not set"
if(typeof u=="string"){w=A.cd("^\\d{4}-\\d{2}-\\d{2}$",!0,!1)
w=w.b.test(u)}else w=!1
if(w)return B.cLk(B.ld(u))
v=B.ld(u)
if(v!=null)return B.k0(v)
return J.be(u)},
gcw(){return this.b}}
B.AD.prototype={}
B.Az.prototype={}
B.AB.prototype={
H(){return"ReportStateKind."+this.b}}
B.akj.prototype={
gcw(){return this.b}}
B.N2.prototype={}
B.aJJ.prototype={
gaAi(){var w=this.a.h(0,"resolution")
if(typeof w!="string"||C.n.aI(w).length===0)return null
return w},
gaw1(){var w,v,u=this.a,t=B.mL(u.h(0,"people")).length
t=t===1?"1 entity":""+t+" entities"
w=B.mL(u.h(0,"evidence")).length
w=w===1?"1 evidence item":""+w+" evidence items"
v=B.mL(u.h(0,"major_events")).length
v=v===1?"1 recorded event":""+v+" recorded events"
u=B.mL(u.h(0,"contradictions")).length
u=u===1?"1 contradiction":""+u+" contradictions"
return"Snapshot figures: "+t+", "+w+", "+v+" and "+u+"."},
gaze(){var w=B.mL(this.a.h(0,"people")),v=A.a6(w).i("a7<1,f>")
w=A.K(new A.a7(w,new B.aJM(),v),v.i("ai.E"))
return w},
gavL(){var w=B.mL(this.a.h(0,"evidence")),v=A.a6(w).i("a7<1,f>")
w=A.K(new A.a7(w,new B.aJL(),v),v.i("ai.E"))
return w},
gavJ(){var w=B.mL(this.a.h(0,"major_events")),v=A.a6(w).i("a7<1,f>")
w=A.K(new A.a7(w,new B.aJK(),v),v.i("ai.E"))
return w}}
B.b8L.prototype={
gFF(){var w,v=this.y
if(v==null)v="Not recorded"
w=this.z
return w==null?v:v+", "+B.c9E(w)}}
var z=a.updateTypes(["eh(m7)","B(G7)","v<eh>(m7)","O4(al)","DV(M)","N<~>()","v<Az>(f,v<ad<f,@>>,f(ad<f,@>))","w(AD,AD)","B(AC)","N2(f,f,f,AB)"])
B.bMg.prototype={
$1(d){var w,v,u,t,s=null,r="pw",q=d.gaz5()===1?"CaseThread case report":"Case report: "+this.a.a.b
A.C(r)
A.C(r)
A.C(r)
A.C(r)
w=$.t3()
A.C(r)
v=D.c9(q,H.c5(s,w,s,s,s,s,s,s,s,F.at,s,s,8,s,s,s,!0,s,s,s,s))
A.C(r)
A.C(r)
u=x.p
w=D.Gh(A.c([v,D.c9("All times in UTC",H.c5(s,w,s,s,s,s,s,s,s,F.at,s,s,8,s,s,s,!0,s,s,s,s))],u),I.nq,I.zR)
A.C(r)
v=D.eB(s,6,s)
A.C(r)
t=G.cdz($.RR(),0.75)
A.C(r)
return D.Dn(A.c([w,v,t,D.eB(s,22,s)],u),I.nq)},
$S:z+0}
B.bMf.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n="pw"
A.C(n)
A.C(n)
w=G.cdz($.RR(),0.75)
A.C(n)
v=D.eB(o,6,o)
A.C(n)
A.C(n)
A.C(n)
u=this.a.a.c
if(u==null)u="Not recorded"
t=$.t3()
A.C(n)
u=D.c9("Case "+u,H.c5(o,t,o,o,o,o,o,o,o,F.at,o,o,8,o,o,o,!0,o,o,o,o))
A.C(n)
A.C(n)
s=D.c9("Confidential: for committee use only",H.c5(o,t,o,o,o,o,o,o,o,F.at,o,o,8,o,o,o,!0,o,o,o,o))
A.C(n)
r=d.gaz5()
q=d.gbw9()
A.C(n)
p=x.p
return D.Dn(A.c([w,v,D.Gh(A.c([u,s,D.c9("Page "+r+" of "+q,H.c5(o,t,o,o,o,o,o,o,o,F.at,o,o,8,o,o,o,!0,o,o,o,o))],p),I.nq,I.zR)],p),I.nq)},
$S:z+0}
B.bMe.prototype={
$1(d){var w,v,u,t=A.c([],x.p)
for(w=this.a.aP3(this.b,this.c),v=w.length,u=0;u<w.length;w.length===v||(0,A.F)(w),++u)t.push(w[u])
return t},
$S:z+2}
B.c_y.prototype={
$1(d){return new B.O4(d.S($.dB(),x.A))},
$S:z+3}
B.aQg.prototype={
$1(d){return new B.DV(this.b,this.a.a,null)},
$S:z+4}
B.bAP.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bAQ.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bAU.prototype={
$0(){var w=this.a
return w.yX(new B.bAT(w))},
$S:0}
B.bAT.prototype={
$0(){return this.a.zt(E.Fk)},
$S:2}
B.bAV.prototype={
$0(){var w=this.a
return w.yX(new B.bAS(w))},
$S:0}
B.bAS.prototype={
$0(){return this.a.zt(E.mJ)},
$S:2}
B.bAW.prototype={
$0(){var w=this.a
return w.yX(w.gbcc())},
$S:0}
B.bAX.prototype={
$0(){var w=this.a
w.yX(new B.bAR(w,this.b.T(x.q).f))},
$S:0}
B.bAR.prototype={
$0(){var w=0,v=A.m(x.H),u=this,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:t=u.a.a
w=2
return A.e(A.qy(new A.nT(B.cno(B.Zn(t.e.a,E.mJ,t.d)))),$async$$0)
case 2:u.b.aS(E.flE)
return A.k(null,v)}})
return A.l($async$$0,v)},
$S:2}
B.c1b.prototype={
$1(d){var w=A.cz(d,"|","\\|")
return A.cz(w,"\n"," ")},
$S:18}
B.c1d.prototype={
$1(d){return"| "+J.bX(d,this.a,x.N).b4(0," | ")+" |"},
$S:1187}
B.c1c.prototype={
$2(d,e){var w,v,u=this.a,t=this.b,s=A.q(t.$1(d))+"\n"
u.a+=s
s="| "+new A.a7(d,new B.c1e(),A.a6(d).i("a7<1,f>")).b4(0," | ")+" |\n"
s=u.a+=s
for(w=e.length,v=0;v<e.length;e.length===w||(0,A.F)(e),++v){s=A.q(t.$1(e[v]))+"\n"
s=u.a+=s}u.a=s+"\n"},
$S:1188}
B.c1e.prototype={
$1(d){return"---"},
$S:18}
B.c_G.prototype={
$1(d){return C.n.bF(C.f.j(d),2,"0")},
$S:56}
B.c2R.prototype={
$1(d){return d.length!==0},
$S:11}
B.c2S.prototype={
$1(d){return d[0].toUpperCase()+C.n.bY(d,1).toLowerCase()},
$S:18}
B.bXe.prototype={
$1(d){return J.be(d)},
$S:47}
B.aJM.prototype={
$1(d){var w,v=B.da(d.h(0,"name"))
if(v==null)v="Not recorded"
w=B.da(d.h(0,"type"))
return w==null?v:v+" \u2014 "+B.oR(w)},
$S:98}
B.aJL.prototype={
$1(d){var w=B.da(d.h(0,"filename"))
return w==null?"Not recorded":w},
$S:98}
B.aJK.prototype={
$1(d){var w,v,u,t=B.da(d.h(0,"summary"))
if(t==null||t.length===0){w=B.da(d.h(0,"type"))
v=B.oR(w==null?"event":w)}else v=t
u=B.ld(d.h(0,"occurred_at"))
return u==null?v:v+" ("+B.c_H(u)+")"},
$S:98}
B.b8M.prototype={
$3(d,e,f){var w,v,u,t,s,r
if(e.length===0)return A.c([new B.Az(d,"None recorded as of "+B.k0(this.a)+".","None recorded",E.m5)],x._)
w=A.c([],x._)
for(v=e.length,u=0;u<e.length;e.length===v||(0,A.F)(e),++u){t=e[u]
s=f.$1(t)
r=B.da(t.h(0,"status"))
w.push(new B.Az(d,s,B.oR(r==null?"open":r),B.cJj(B.da(t.h(0,"status")))))}return w},
$S:z+6}
B.b8N.prototype={
$1(d){var w,v,u,t=B.da(d.h(0,"detail"))
if(t==null)t="Not recorded"
w=B.da(d.h(0,"flagged_reason"))
v=B.da(d.h(0,"resolution"))
u=w!=null?t+(" (flagged: "+B.oR(w)+")"):t
return v!=null?u+(" Resolved: "+v):u},
$S:98}
B.b8O.prototype={
$1(d){var w,v,u,t,s,r=B.da(d.h(0,"claim"))
if(r==null)r="Not recorded"
w=B.ld(d.h(0,"window_start"))
v=B.ld(d.h(0,"window_end"))
u=w!=null&&v!=null?" (window: "+B.k0(w)+" \u2013 "+B.k0(v)+")":""
t=B.da(d.h(0,"verified_by"))
s=t==null?"":" Verified by "+t+"."
return r+u+"."+s},
$S:98}
B.b8P.prototype={
$1(d){var w,v=B.da(d.h(0,"description"))
if(v==null)v="Not recorded"
w=B.da(d.h(0,"gap_type"))
return w==null?v:v+" (type: "+B.oR(w)+")"},
$S:98}
B.b8Q.prototype={
$2(d,e){var w=d.a,v=e.a,u=w==null
if(u&&v==null)return 0
if(u)return 1
if(v==null)return-1
return w.bo(0,v)},
$S:z+7}
B.b8V.prototype={
$1(d){return new A.ag(d,new B.b8W(),A.a6(d).i("ag<1>")).gu(0)},
$S:1190}
B.b8W.prototype={
$1(d){var w=B.da(d.h(0,"status"))
return E.fjd.n(0,w==null?null:w.toLowerCase())},
$S:156}
B.b8R.prototype={
$1(d){return E.fj7.n(0,d.c.toLowerCase())},
$S:z+8}
B.b8X.prototype={
$3(d,e,f){return d===1?"1 "+e:""+d+" "+f},
$S:1191}
B.b8U.prototype={
$4(d,e,f,g){return new B.N2(d,e,f,g)},
$S:z+9}
B.b8S.prototype={
$1(d){return d.d!=null},
$S:z+1}
B.b8T.prototype={
$1(d){return d.d!=null},
$S:z+1};(function installTearOffs(){var w=a._instance_0u
w(B.a3q.prototype,"gbcc","JJ",5)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.E,[B.bMd,B.abX,B.O4,B.akk,B.akl,B.G7,B.AC,B.AD,B.Az,B.akj,B.N2,B.aJJ,B.b8L])
w(A.cg,[B.bMg,B.bMf,B.bMe,B.c_y,B.aQg,B.c1b,B.c1d,B.c1e,B.c_G,B.c2R,B.c2S,B.bXe,B.aJM,B.aJL,B.aJK,B.b8M,B.b8N,B.b8O,B.b8P,B.b8V,B.b8W,B.b8R,B.b8X,B.b8U,B.b8S,B.b8T])
v(B.DV,A.hG)
v(B.a3q,A.hq)
w(A.dg,[B.bAP,B.bAQ,B.bAU,B.bAT,B.bAV,B.bAS,B.bAW,B.bAX,B.bAR])
v(B.HM,A.a5)
w(A.dj,[B.c1c,B.b8Q])
w(A.fU,[B.akm,B.AB])})()
A.cC(b.typeUniverse,JSON.parse('{"O4":{"cdT":[]},"DV":{"O":[],"h":[]},"a3q":{"a_":["DV"]},"HM":{"a5":[],"h":[]}}'))
var y={f:"A SHA-256 fingerprint was stored when the file was added. Any change to the file changes the fingerprint.",h:"A suggestion produced by AI and then accepted or dismissed by a named reviewer. It is not a verified finding.",c:"Case is closed. No closed summary was recorded.",m:"Matches the evidence register (section 2) and timeline (section 5).",g:"Records visible to the preparer at the time of generation.",F:"The report lists only records the preparer is permitted to see. It may omit restricted items."}
var x=(function rtii(){var w=A.J
return{c:w("abX"),M:w("fc<f>"),L:w("aI"),r:w("cdT"),E:w("x<v<f>>"),t:w("x<v<@>>"),Y:w("x<ad<f,@>>"),o:w("x<akj>"),_:w("x<Az>"),u:w("x<akk>"),v:w("x<G7>"),a:w("x<N2>"),m:w("x<akl>"),i:w("x<AC>"),h:w("x<AD>"),s:w("x<f>"),T:w("x<a_V>"),p:w("x<eh>"),n:w("x<h>"),x:w("x<mG>"),j:w("v<@>"),I:w("v<w>"),P:w("ad<f,@>"),f:w("ad<@,@>"),X:w("dE<f,f>"),F:w("wL"),k:w("Az"),g:w("G7"),l:w("AC"),N:w("f"),A:w("h6"),w:w("GV"),O:w("L<f>"),e:w("ag<AC>"),U:w("ag<f>"),q:w("h8"),z:w("@"),S:w("w"),Q:w("E?"),H:w("~")}})();(function constants(){var w=a.makeConstList
E.e0z=new A.ah(62463,"MaterialIcons",null,!1)
E.e0G=new A.ah(63084,"MaterialIcons",null,!1)
E.e53=w(["Finding","Reviewer","Reviewed","Outcome","Source"],x.s)
E.eNz=w(["Area","Record","State"],x.s)
E.eNA=w(["Area","Recorded","State"],x.s)
E.eOm=w(["Prepared by, date","Reviewed by, date","Approved by, date"],x.s)
E.eQB=w(["Ref","File","Version","Added"],x.s)
E.eQX=w(["Term","Meaning"],x.s)
E.eS0=w(["Ref","Task","Status","Assignee","Due"],x.s)
E.Fk=new B.akm(0,"summary")
E.mJ=new B.akm(1,"full")
E.m4=new B.AB(0,"ok")
E.o9=new B.AB(1,"warn")
E.fhQ=new B.AB(2,"conflict")
E.m5=new B.AB(3,"none")
E.fbq={open:0,"in progress":1}
E.fj7=new A.fc(E.fbq,2,x.M)
E.fb3={open:0,conflict:1,pending:2}
E.fjd=new A.fc(E.fb3,3,x.M)
E.fuq=new A.a0("Markdown report copied.",null,null,null,null,null,null,null,null,null,null)
E.flE=new A.d8(E.fuq,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.D,null)
E.fsN=new A.a0("Markdown report downloaded.",null,null,null,null,null,null,null,null,null,null)
E.flH=new A.d8(E.fsN,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.D,null)
E.fzC=new A.L("export-option-markdown",x.O)
E.fAP=new A.L("export-option-markdown-save",x.O)
E.fAY=new A.L("export-option-pdf",x.O)
E.fC9=new A.L("export-option-pdf-summary",x.O)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cTn","caE",()=>{A.C("pdf")
return K.Fl("#172033")})
w($,"cTo","t3",()=>{A.C("pdf")
return K.Fl("#4F5B72")})
w($,"cTq","RR",()=>{A.C("pdf")
return K.Fl("#D3DAE6")})
w($,"cTr","c3A",()=>{A.C("pdf")
return K.Fl("#EEF2F9")})
w($,"cTl","c3z",()=>{A.C("pdf")
return K.Fl("#2E5FCC")})
w($,"cTp","cq7",()=>{A.C("pdf")
return K.Fl("#17724B")})
w($,"cTs","cq8",()=>{A.C("pdf")
return K.Fl("#8A5A0C")})
w($,"cTm","cq6",()=>{A.C("pdf")
return K.Fl("#A8323A")})
w($,"cWD","crB",()=>A.er(new B.c_y(),x.r))})()};
(a=>{a["L7+WGmGIu2TkzctwtkW5K0IycTQ="]=a.current})($__dart_deferred_initializers__);