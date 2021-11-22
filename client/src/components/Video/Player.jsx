import React, { useEffect } from 'react'
import { useParams } from 'react-router'
const Player = () => {
    const {id} = useParams();
    useEffect(()=>{
console.log(id)
    },[])
    return (
        <div>
              <video controls muted autoPlay crossOrigin="anonymous">
          <source src={`http://localhost:5000/playing/${id}`} type="video/mp4"></source>
      
        </video>
        </div>
    )
}

export default Player
