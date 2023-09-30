import Styled from "styled-components"
const Wrapper=Styled.section`
width:100%;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
    .right,.left{
        height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
    .right{
        width:40%;
        justify-content: flex-end;
        align-items: flex-start;
        img{
            max-width:80%;
            max-height:65%;
            margin-inline:auto;
        }
    }
.left{
    width:60%;
    justify-content: flex-end;
    h1{
        font-family:revert;  
        font-style: normal;
        font-weight: 900;
        font-size: 6vh;
        width:88%;
    }
  


    p{
        font-family:revert;  
        font-style: normal;
        font-weight: 400;
        font-size:2.8vh;
        margin-inline:6%;
    }
    .tools{
        padding-inline:6%;
        width:100%;
        h2{
        font-style: normal;
        font-weight: 900;
        font-size: 3vh;
        line-height:46px;
    }
    p{
        font-family:revert;  
        font-style: normal;
        font-weight: 400;
        font-size:2.8vh;
        margin:0;
    }
}
button{
    border: 0.5vh solid #000000;
    width:40%;
    font-weight:500;
    margin-block:3vw;
    padding: 8px;
    font-size: 24px;
}
button:hover{
    color:white;
    background:black;
    transition: 0.2s ease-in
}
}
@media (max-width: 824px) { 


  .left{
    h1{
    font-size:5vh;}
    p{
        font-size:2.4vh;}
} vh;}
  .left{.tools{
    h2{
        font-size:2.6vh;}
    p{
        font-size:2.4vh;}
  } }
}
@media (max-width: 734px) { 
    margin-top:5vh;
 flex-direction:column;
 height:fit-content;
 .left{
    order:2;
    width:100%;
    text-align:center;
    button{
        width: 70%;
        font-weight: 700;
        font-size: 3vh;
        margin-block: 8vw;
    }
 }
 .right{
    order:1;
    width:100%;
    min-height:50vh;
    margin-top:6vh;
    img{ margin:auto;}
    }

 }

  }
`
export default Wrapper
