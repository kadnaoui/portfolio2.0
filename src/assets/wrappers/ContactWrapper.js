import Styled from "styled-components"
const Wrapper=Styled.section`

height:91vh;
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
form{
    display: flex;
    flex-direction:column;
    margin-left:7vw;
    width:50vw;
    button{
        border: 0.5vh solid #000000;
        width:40%;
        margin:auto;
        font-weight:500;
    }
    button:hover{
        color:white;
        background:black;
        transition: 0.2s ease-in
    }
    h1{
        font-family: 'Heebo' , sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 5.32vh;
        line-height: 5.32vh;
    }
    h2{
        font-family: 'Heebo' , sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size:3vh;
        line-height: 4vh;
        margin-block:2vh;
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
 img{
    
justify-content:space-evenly;
height:80vh;
 }
}

@media (max-width: 900px) { 
    flex-direction:column;
    align-items:center;
    justify-content:center;
    form{
        width:70%;
        margin-left:4vw;
    }
    .img{
        width:100%;
        height:10vw;
        padding:auto;
        
        img{
             width:0%;
            visibility:hidden;
        }
    }

}
@media (max-width: 640px) {  
    
    padding-inline:4vw;
    form{
    width:100%;
    margin-inline:4vw;
} }

`
export default Wrapper