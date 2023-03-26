import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Card() {
    const [userlist,setlist]=useState()
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(Response=>setlist(Response.data))
    })
  return (
    <div>
      {userlist.map(e=><h1>{e.name}</h1>)}
  
    </div>
  )
}

export default Card
