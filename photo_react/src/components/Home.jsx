import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Place () {

  let navigate = useNavigate()

  const showPlace = (place) => {
    navigate(`/place/${place.id}`)
  }

  const [place, setPlace] = useState(null)

useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get('http://localhost:8000/')
  setPlace(response.data)

  }

  getData()

}, [])


if(!place) {
  return <h2>Loading Place</h2>
}else{
  return(
    <div className='container'>
    <div className="title">
      <h1>Place!</h1>
    </div>
    <div className='grid'>
      {
      place.map((place)=>(
      <div onClick={() => showPlace(place)} key={place.name}
      className='card'>
      <div className="previewText">
      <img className="Img" src={`${place.photo_url}`}  />
      <h2>{place.name}</h2>
      <h3>{place.location}</h3>
      <h3>{place.capacity}</h3>
      </div>
      </div>
      ))}
    </div>
    </div>
  )
}}
