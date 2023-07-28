import React, { useEffect,useState } from 'react'
import style from "./TrainList.module.css"
import Traintile from '../../Traintile'

const TrainList = () => {

  const callit = async()=>{
    const x = await fetch("http://localhost:8000/api/train/list",{
    method:"GET",
    mode:"cors",
    })
    const y = await x.json()
    console.log(y)
    setTlist(y)
  }
   
const [Tlist, setTlist] = useState([])

  useEffect(()=>{
    callit()
  },[])

  return (
    <div className='Trains'>
        <h1>TrainList</h1>
    <div className='Grids'>
        {
          Tlist?.map((obj)=>{
            return <Traintile obj={obj} show={false}/>
          })
        }
    </div>    
    </div>
  )
}

export default TrainList