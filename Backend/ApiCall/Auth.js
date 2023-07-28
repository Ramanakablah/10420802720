const fs = require("fs")
const path = require("path")

const creds={
    companyName: "Train Central",
    clientID: "6f98fbd2-3de5-43a4-b47c-f596b1dea357",
    clientSecret: "MNryGcbEURdJEkhL",
    ownerName: "Raman",
    ownerEmail: "alexesramon0909@gmail.com",
    rollNo: "10420802720"
  }

function isTimestampPassed(timestamp) {
    const timestampInMilliseconds = timestamp * 1000;
  
    const currentTime = Date.now();
  
    return timestampInMilliseconds < currentTime;
  }

module.exports.Authit = async()=>{

    const data = fs.readFileSync(path.join(__dirname+"/Exp.txt"));
    console.log(Number(data.toString("utf-8")))
    let token = ''
    let time = Number(data.toString("utf-8"))
    if(isTimestampPassed(time)){
        console.log(time)
    const Auth = await fetch("http://20.244.56.144/train/auth",{
        method:'POST',
        body: JSON.stringify(creds)
    })

    const auths = await Auth.json();
    token = auths.access_token
    fs.writeFileSync(path.join(__dirname+"/Exp.txt"),`${auths.expires_in}`);
    fs.writeFileSync(path.join(__dirname+"/Token.txt"),token)
    return token
}
    else{
        let data = fs.readFileSync(path.join(__dirname+"/Token.txt"),token)

        return data.toString("utf-8")

    }

}