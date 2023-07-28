import React from 'react'
import { useNavigate } from 'react-router-dom'

const Traintile = ({obj,show}) => {
    const navigate = useNavigate()
  return (
    <div className='Traintile' onClick={()=>{
        sessionStorage.setItem("trainNumber",obj?.trainNumber)
        setTimeout(()=>{
            navigate("/detail")
        },100)
    }}>
        <h1>{obj?.trainName}</h1>
        <h3>{obj?.trainNumber}</h3>
        <div className="Seats">
            <div className="Green"> <span> Sleeper seats : {obj?.seatsAvailable?.sleeper}</span> {show&&<span>{obj?.price?.sleeper} INR</span>}</div>
            <div className="Skyblue"><span> AC seats : {obj?.seatsAvailable?.AC}</span> {show&&<span>{obj?.price?.AC} INR</span>}</div>
        </div>
        <div className="Seats">
            <div className="Green">
                Departure: {obj?.departureTime?.Hours}:{obj?.departureTime?.Minutes}:{obj?.departureTime?.Seconds}
            </div>
            <div className="Red">
                Delay : {obj?.delayedBy}
            </div>
        </div>
    </div>
  )
}

export default Traintile