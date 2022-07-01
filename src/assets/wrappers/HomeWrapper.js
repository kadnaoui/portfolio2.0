import Styled from 'styled-components'

const Wrapper=Styled.section`
height:93vh;
width:100%;
@import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');


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
        font-size:6vw;
        border-radius:2vw;
        height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
        
        .type{
            font-family: 'Heebo', sans-serif;
            font-size:12vw;
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

`
export default Wrapper;