import React from 'react'
import {VideoContainer,VideoItem} from './VideoStyle';
import ant from '../../Image/ant.jpg';
import aven from '../../Image/aven.jpg';
import blackw from '../../Image/blacw.jpg';
import capm from '../../Image/capm.jpg'
import doc from '../../Image/doc.jpg'
import iron from '../../Image/iron.jpg'
import spi from '../../Image/spi.jpg'
import thor from '../../Image/thor.jpg'
import tr from '../../Image/tr.jpg'
const Video = () => {
    return (
       <VideoContainer>
     <VideoItem><img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="" /></VideoItem>
     <VideoItem><img src={ant} alt="" /></VideoItem>
     <VideoItem><img src={blackw} alt="" /></VideoItem>
     <VideoItem><img src={aven} alt="" /></VideoItem>
     <VideoItem><img src={capm} alt="" /></VideoItem>
     <VideoItem><img src={doc} alt="" /></VideoItem>
     <VideoItem><img src={iron} alt="" /></VideoItem>
     <VideoItem><img src={spi} alt="" /></VideoItem>
     <VideoItem><img src={thor} alt="" /></VideoItem>
     <VideoItem><img src={tr} alt="" /></VideoItem>
       </VideoContainer>
    )
}

export default Video
