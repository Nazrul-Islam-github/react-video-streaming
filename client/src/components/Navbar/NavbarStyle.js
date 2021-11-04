import styled from 'styled-components';
export const Nav = styled.nav`
height: 70px;
/* background-color: #EEEEEE; */
width:100%;
display: flex;
border-bottom: 1px solid #aaa;
align-items: center;

`;

export const Menu = styled.div`
cursor: pointer;
margin-left: 2rem;
/* border: 1px solid red; */
margin-top: 5px;
`;

export const Logo = styled.div`
font-size: 25px;
font-family: 'Ubuntu', sans-serif;
padding: 0 12px 0px 15px;
color: #000;
width: 20%;
font-weight: bold;

`;
export const Navul = styled.ul`
display:flex;
list-style: none;
width: 30%;
/* border: 2px solid red; */
height: 100%;
align-items: center;
justify-content:right;
`;
export const Navitem = styled.li`
margin-left: 2rem;
font-family: 'Ubuntu', sans-serif;
font-size: 18px;
cursor: pointer;
transition: all .3s linear;
&:hover{
    color: rgba(0, 0, 0, 0.6);;
}
`;


export const SearchDiv = styled.div`
/* border: 2px solid red; */
position: relative;
input{
    display: inline-block;
    width: 380px;
    outline: none;
   
    height: 30px;
    padding: 0px 10px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    border-radius:3px;
    border: 2px solid #909090;
    &:focus{
        border: 2px solid #065fd4;
    }
}

button{
    outline: none;
    border: 1px solid gray;
    width: 45px;
    cursor: pointer;
    height: 34px;
    border:2px solid #909090 ;
position: absolute;
top: 0%;
right: 0%;
transition: all .3s linear;
&:hover{
background-color: rgba(0, 0, 0, 0.3);
}
}

`;


export const UserImg = styled.div`
img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 2rem;
}
`;