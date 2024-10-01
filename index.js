require('dotenv').config()
var udid = process.env.UDID;if(udid.length==46){udid+="o"}
let n,s,len,lenn,lenn2,l1l2v,l1l2vR,lndvR,lndvR1,lndv,fV,fV2,fV3,fV4,fv1,fv2,fv3,sv1,sv2,sv3,tv1,tv2,tv3,Fv1,Fv2,Fv3,fa,sa,ta,Fa;n=Number;s=String;
len=s(udid.length);lenn=len[0];lenn2=len[1];l1l2v=n(lenn)+n(lenn2);
lndvR=s(lenn)+"."+s(l1l2v);l1l2vR=n(lndvR);lndvR1=l1l2v*l1l2vR;lndv=s(lndvR1)
// GET DECIMAL VALUE USING UDID LENGTH
fV=n(lndv[0]);fv1=udid[fV];fv2=udid[fV+1];fv3=udid[fV+2];fa=[fv1,fv2,fv3]
fV2=n(lndv[1])+1;sv1=udid[fV2];sv2=udid[fV2+1];sv3=udid[fV2+2];sa=[sv1,sv2,sv3]
fV3=n(lndv[0])+9;tv1=udid[fV3];tv2=udid[fV3+1];tv3=udid[fV3+4];ta=[tv1,tv2,tv3]
fV4=n(lndv[3])+4;Fv1=udid[fV4];Fv2=udid[fV4+1];Fv3=udid[fV4+5];Fa=[Fv1,Fv2,Fv3]
// GET KEY VALUE
console.log(n('10'))