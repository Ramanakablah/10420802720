module.exports.apiCall= async(url,method,header)=>{
    console.log(header)
    console.log(method,url)
    let resp = await fetch(url,{
        method:method,
        headers:header
    })
    const x = resp.json()
    return x
}