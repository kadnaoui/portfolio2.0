import Styled from "styled-components"
const Wrapper=Styled.section`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start;
z-index: 1;
padding-block:10vh;
position: relative;
.title{
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 900;
    font-size: 65px;
    line-height: 100px;
    color: #000000;
    width:100%;
    text-align:center;
    margin-block:5vh;
    
}
.projects{
    width:85%;
    display:flex;

    align-items:center;
    justify-content:space-evenly;
    flex-wrap:wrap;
}

.project{
width: 33vw;
height: 29vw;
border:0.3vw solid black;
padding:1vh;
margin:3vh;
img{
    max-width:100%;
    max-height:70%;
    margin:auto
}
h1{
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 900;
    font-size: 1.75vw;
    line-height: 2.2vw;
    color: #000000;
    width:100%;
    height:30%;
    display:flex;
    justify-content:center;
    align-items:center;
}

}
}

@media (max-width: 640px) {
    
    .projects{
        width:95%;
    }
    
    .project{
        width: 100%;
        height: 50vh;
    h1{
        font-size:5vw;
        line-height:6vw;
    }

}
}

`
export default Wrapper