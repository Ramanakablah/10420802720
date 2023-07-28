const express = require("express")
const { TrsainList, Trainsdetails } = require("../DataCollectors/Traindata")
const { Authit } = require("../ApiCall/Auth")
const router = express.Router()

router.get("/list",async (req,res)=>{
   const authorization = await Authit()
   let resp = await TrsainList(
        {
        authorization:"Bearer "+authorization
        }
    )
    res.send(resp)
})

router.get("/details/:id",async (req,res)=>{
    const authorization = await Authit()
    let resp = await Trainsdetails({
        authorization:"Bearer "+authorization
        },
        req.params.id
    )
    res.send(resp)
})

module.exports = router