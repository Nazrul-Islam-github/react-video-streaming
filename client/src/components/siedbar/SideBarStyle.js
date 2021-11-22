import styled from 'styled-components';
export const Main = styled.div`
transition: all .3s linear;
width:200px;
min-height: 100vh;
max-height: 100vh;
background-color: #fff;
/* border: 1px solid red; */
color: rgb(26, 29, 32);
transition: all .3s linear;
position: absolute;
top: 70px;
left:${props => (props.toggleSideNav ? `0%` : `-35%`)};

overflow-x: hidden;
overflow-y: auto;
;
@media screen and (max-width:441px){
    width: 35%;
}


ul{
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: center;
    justify-content: center;
    width: 100%;


    li{
        cursor: pointer;
        font-size: 18px;
       /* margin-left: 1rem; */
        padding: .5rem 0rem;
        /* border: 1px solid red; */
        width: 100%;
        @media screen and (max-width:439px){
            font-size: 15px;
        }
       span{
        display: flex;
        align-items: center;
        color: rgb(26, 29, 32);
        margin-left: 1rem;
        @media screen and (max-width:439px){
            margin-left: 0rem;
        }
       }
        /* justify-content: center; */
        svg{
            margin-right: .5rem;
        }
        /* text-align:center; */
        font-family: "Roboto", "Arial", sans-serif;
        transition: all .3s linear;
        &:hover{
            background-color: rgb(214, 216, 218);;
        }
        a{
            text-decoration: none;
        }
    }
}
`;

export const Logo = styled.div`
img{
width: 200px;

}`;
