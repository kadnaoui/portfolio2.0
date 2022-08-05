import Styled from "styled-components"
const Wrapper=Styled.section`
width:100%;
height:fit-content;
min-height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start;
z-index: 1;
padding-block:10vh;
position: relative;
.title{
    font-family: 'Heebo', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 65px;
    line-height: 100px;
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
    .loading{
        width:20vw;
        height: 20vh;
    }
}

.project{
position: relative;
width: 33vw;
height: 29vw;
padding:1vh;
margin:3vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
text-align:center;
img{
    width:100%;
    height:100%;
    object-fit:cover;
    border: 0.5vh solid black;
    border-radius:2vh;
}
h1{
    position: absolute;
    font-family: 'Heebo', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 2vw;
    line-height: 2.2vw;
    width:90%;
    height:50%;
    top:25%;
    display:flex;
    justify-content:center;
    align-items:center;
    opacity: 0;
    transition: all 0.3s ease;
    color: #fff;
    background-color:rgba(0,0,0,0.8);
    border-radius:2vh;
    &:hover{
        opacity: 1;
    }
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
        font-size:10vw;
        line-height:12vw;
        opacity: 1;
    }

}
}

`
export default Wrapper