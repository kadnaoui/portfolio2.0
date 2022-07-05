import styled from "styled-components";

const Wrapper=styled.section`
@import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
width:100%;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
z-index: 1;
padding-block:10vh;
position: relative;
padding:6%;
.top{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:50vh;
    width:100%;
    margin-top: 5%;
    h1{
        height:100%;
        width:40%;
        display:flex;
        align-items:center;
        justify-content:center;
        font-family: 'Heebo', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 4vw;
        line-height: 6vw;
        text-align: center;
        text-transform: capitalize;
    }
    img{
        max-height:100%;
        max-width:60%;
        border-radius: 0.8vw;
    }
}
hr{
    width:100%;
    mix-blend-mode: normal;
    border-top: 0.2vw solid rgb(0,0,0,0.5);
    margin-block:7%;
}
.bottom{
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    height:60vh;  
    width:100%;
.description{
    width:70%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-evenly;
    h2{
font-family: 'Heebo', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 2vw;
line-height: 2.5vw;
margin-bottom:2vw;
    }
    p{
font-family: 'Quicksand', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 1.8vw;
line-height: 2vw;
color: #4D4C4C;
    }
}
.buttons{
    width:20%;
    height:100%;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    button{
        border: 0.5vh solid #000000;
        width:60%;
        height:fit-content;
        font-weight:500;
        font-weight: 400;
        font-size: 1.5vw;
        line-height: 2vw;
    }
    button:hover{
        color:white;
        background:black;
        transition: 0.2s ease-in
    }
}
   
}
@media (max-width: 640px) {

.top{
    flex-direction:column;
    margin-top:0;
    height:fit-content;
    h1{
        width:100%;
        height:fit-content;
        margin-block:5vh;
        font-size: 200%;
        line-height: 10vw;
    }
    img{
        max-width:100%;
    }
}
.bottom{
    flex-direction:column;
    align-items:center;
    .description{
        width:100%;
        h2,p{
            font-size: 200%;
    line-height: 10vw;
        }
    }
    .buttons{
        width:100%;
        button{
            width:60%;
            height:fit-content;
            font-weight:500;
            font-weight: 400;
            font-size: 200%;
            line-height: 10vw;
        }
    }
}
 }

`
export default Wrapper;