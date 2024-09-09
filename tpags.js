var receiver = 743082610
var ulpid = "UMTFHINLGI"
const uinfo=[{user:"Nava",mainnum:743082610,lpid:"UMTFHINLGI",cid:true,tid:true},{user:"Mathu",mainnum:762670873,lpid:"XVSDSHIGLJ",cid:true,tid:true}]
const users=[{lpid:"XVSDSHIGLJ",cid:"UMTFHINLGI"}]
const cidv=[{lpid:"UMTFHINLGI",cid:256486780649079800000},{lpid:"XVSDSHIGLJ",cid:553939097816813700000}]
const tidv=[{lpid:"UMTFHINLGI",tid:"73ndansdu349987923DSJHJ98234njs"},{lpid:"XVSDSHIGLJ",tid:"gBzvFsZb6NBakRUdAap3sMLpmd9OfPyP20wjJwMr"}]

function GLPID(){
let numbr = uinfo.find(el => el.mainnum === receiver)// get lpid of reverr by mainnum
let LPID = numbr["lpid"]// store revser lpid
let Cid = numbr["cid"]// store cid bolean
let Tid = numbr["tid"]// store tid bolean
if(Cid){
    true
    let cidc = users.find(el => el.lpid === LPID)// cheack that reciver lpid in reciver pav database
    let rauc = users.find(el => el.cid === ulpid)//cheack cid bettween sender and reciver
    let rpai = rauc["lpid"]
    let CiD = cidv.find(el => el.lpid === rpai)
    let PaV = CiD["cid"]
    return PaV;
}else{
    false
    let TiD = tidv.find(el => el.lpid === LPID)
    let PaV = TiD["tid"]
    return PaV;
}}
let Cicw = GLPID()
const data = [Cicw,receiver]
module.exports = data
