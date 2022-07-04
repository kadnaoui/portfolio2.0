import Styled from 'styled-components'

const Wrapper=Styled.section`
@import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');
height:100vh;
width:100%;
z-index: 1;
padding-top:10vh;
position: relative;
display:flex;
align-items:center;
justify-content:center;

.shape{
    width:50%;
    height:100%;
}
.text{
display:none;
}
.txt{
    width:50%;
    height:100%;
    margin-left:auto;
    display:flex;
    align-items:center;
    justify-content:center;
    h1{
        text-align:center;
        height:90%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-evenly;
        font-size:2.3vw;
        .typing{
            font-size:6vw; 
            height:9vw;
            color:blue;
        }

    }
}

@media (max-width: 768px) {

    display:block;
    .txt{
        display:none;
    }

    .shape{
        width:100%;
        height:100%;
    }
    .text{
    
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        h1{
            width:95%;
            padding-block:10%;
            font-size:5vw;
            border-radius:2vw;
            height: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
            
            .type{
                font-family: 'Heebo', sans-serif;
                font-size:10vw;
                width:95%;
                padding-block:10%;
                border-radius:2vw;
                height: 30%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background:rgb(0,0,0,0.8);
                color:white
            }
            
        }
    }

 }

@media (max-width: 540px) {


    .text{

        h1{

            font-size:6vw;
            border-radius:2vw;
            
            .type{
              
                font-size:12vw;
            
            }
            
        }
    }

 }


`
export default Wrapper;