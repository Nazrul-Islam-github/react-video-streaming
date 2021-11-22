import React, { useEffect, useState } from 'react'
import {VideoContainer,VideoItem} from './VideoStyle';
import {Link} from 'react-router-dom'
const Video = () => {
const [videos,setVideos]= useState();
const [host , setHost] = useState("http://192.168.225.72:5000")
useEffect(()=>{

const fetchVideos = async ()=>{
    try {
        const res =await fetch("http://192.168.225.72:5000/video")
        const video = await res.json();
        setVideos(video)
    } catch (error) {
        console.log(error)
    }
   
}
fetchVideos()
// eslint-disable-next-line 
},[])

    return (
       <VideoContainer>
{videos!=undefined && videos.length>0 ? videos.map(item=>
<Link key={item.id} to={`/watch/${item.url}`}> 

<VideoItem ><img src={`${host}/${item.thumbnail}`} alt="" />
<span>{item.video}</span>
</VideoItem>

</Link>):null}

    
    
       </VideoContainer>
    )
}

export default Video
