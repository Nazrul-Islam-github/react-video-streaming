import styled from "styled-components";
export const VideoContainer = styled.div`
background-color: aliceblue;
min-height: 100vh;
overflow: auto;
max-height: 100vh;
display: flex;
flex-wrap: wrap;
justify-content: start;

/* align-items: center; */


`;


export const VideoItem = styled.div`
width: 120px;
height: 120px;
/* overflow: hidden; */
border: 1px solid red;
margin:2rem;
img{
    width: 120px;
    height: 120px;
   
}

`