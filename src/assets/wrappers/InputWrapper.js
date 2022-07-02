import Styled from "styled-components"
const Wrapper=Styled.div`
label{
    
    font-weight:500;
}
input,textarea{
    width: 100%;
    height: 5.32vh;  
    border: 0.14vw solid #000000;
}
input,textarea::placeholder {padding-inline:3vh;
}

textarea{
    height:20vh;
    resize: none;
 }
 .error{
    
    border:0.14vw solid #ff0000; 
}
`
export default Wrapper