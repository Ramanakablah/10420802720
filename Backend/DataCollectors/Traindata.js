const  {apiCall} =  require("../ApiCall/ApiCall");

module.exports.TrsainList=async (header)=>{
    const resp = await apiCall(
        "http://20.244.56.144/train/trains",
        "GET",
        header
        )
    return resp
}

module.exports.Trainsdetails=async (header,id)=>{
    const resp = await apiCall(
        `http://20.244.56.144/train/trains/${id}`,
        "GET",
        header
    )

    return resp
}
