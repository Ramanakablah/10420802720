import React, { useEffect, useState } from 'react'
import Traintile from '../../Traintile'

const TrainModel = () => {

  const [Obj, setObj] = useState({})
  const details = async(id)=>{
    const resp = await fetch(`http://localhost:8000/api/train/details/${id}`,{
      method:"GET",
      mode:"cors",
    })
    const data = await resp.json()
    console.log(data)
    setObj(data)
  }

  useEffect(()=>{
    const id = sessionStorage.getItem("trainNumber")
    details(id)
  },[])
  return (
    <div>
      <h1>Train Details</h1>
      <Traintile obj={Obj} show={true}/>
    </div>
  )
}

export default TrainModel