import styled from "styled-components";

export const Home = styled.div`
/* margin-top:70px; */
margin-left:${props => (props.width <= 450 ? `0px` : `210px`)};


`;