import styled from 'styled-components';
export const Main = styled.div`
padding: 2rem 0rem;
width:100%;


`;


export const Form = styled.form`
display: flex;
flex-direction: column;
/* position: relative; */
/* border:1px solid red; */
/* height:200px; */
svg{
    cursor: pointer;
    position: absolute;
    top: 10px;
    /* border: 1px solid gray; */
    right:5px;
}

`;
export const InputGroup = styled.div`
/* border: 2px solid yellow; */
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 .5rem;
margin: .4rem 0rem;
input{
    width: 250px;
    height: 30px;
}

label{
    font-size:18px;
    font-family: "Roboto", "Arial", sans-serif;
}
`;
export const Submit = styled.button`
display: inline-block;
width:6rem;
/* margin-bottom: .5rem; */
height:2rem;
cursor: pointer;
font-family: "Roboto", "Arial", sans-serif;
font-size:16px;
border:1px solid tomato;
background: transparent;
`;


