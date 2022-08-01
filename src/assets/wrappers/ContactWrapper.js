import Styled from "styled-components"
const Wrapper=Styled.section`
z-index: 1;
position: relative;
min-height:100vh;
height:fit-content;
width:100%;
display:flex;
align-items:center;
justify-content:space-evenly;
padding-top:10vh;
form{
    display: flex;
    flex-direction:column;
    margin-left:7vw;
    width:50vw;
    button{
        
        width:40%;
        margin:auto;
        font-weight:500;
    }
    button:hover{
       
        transition: 0.2s ease-in
    }
    h1{
        font-family: 'Heebo' , sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 5.32vh;
        line-height: 5.32vh;
        overflow-y:hidden;
    }
    h2{
        font-family: 'Heebo' , sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size:3vh;
        line-height: 4vh;
        margin-block:2vh;
        overflow-y:hidden;
    }
}
.errorMessage{
    color:red;
}

.img{
    display:flex;
    flex-direction:column;
    height:fit-content;
    align-items:center;
    justify-content:center;
    height:100%;
    img{
        height:80vh;
        background: white;
        margin-block: 1vh;
    }
 .icons{
    display:flex;
    justify-content:space-evenly;
    width:100%;
    svg{
        width:2vw;height:2vw;
        cursor:pointer;

    }
 }
}

@media (max-width: 932px) { 
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    form{
        width:70%;
        margin-left:0;
        height:90%;
        margin-top:3vh;
    }
    .img{
        width:100%;
        height:fit-content;
        padding:auto;
        height:10%;
        
        img{
           display:none;
        }
        .icons{
            bottom:0;
            margin-block:3vh;
            svg{
                width:3.5vw;
                height:3.5vw;
            }
         }
    }

}
@media (max-width: 640px) {  

padding-inline:4vw;
form{
    width:100%;
    margin-inline:4vw;
}
.img{

    .icons{
        svg{
            width:6vw;
            height:6vw;
        }
     }
}

}

`
export default Wrapper