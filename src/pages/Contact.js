import React from 'react';
import * as Yup from 'yup';
import Form from '../components/Form';
import ContactInput from '../components/ContactInput'
import Wrapper from '../assets/wrappers/ContactWrapper';
import image from '../assets/cont.svg';
import ContactTextarea from '../components/ContactTextarea';
import {toast , ToastContainer} from'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const initialValues=  {
        Name: "",
        Email: "",
        Subject: "",
        Text: ""
      }
      const validationSchema=Yup.object({
        Name:Yup.string().min(5,'Name must have atleaste 5 caracters').required('Required'),
        Email:Yup.string().email('Invalid Email Format').required('Required'),
        Subject:Yup.string().required('Required'),
        Text: Yup.string().min(10,'Text Must atleast contain 10 caracters').required('Required')
      })
      const onSubmit=(values,{resetForm})=>{
        console.log(values);
        resetForm( { Name: "",
        Email: "",
        Subject: "",
        Text: ""})
        emailjs.send("service_bcskqwo","template_mj1fmbu",values,"user_AQSkmzrJvb1dD4QWoYIXk").then((result) => {
          console.log(result.text,values);
          toast.success('Your Email was sent Succesfully');
          resetForm({
            Name: "",
            Subject: "",
            Email: "",
            Text: ""
          });
      }, (error) => {
          console.log(error.text);
          toast.error('There was an error. Try Again!')
      });
      }
  return (
    <Wrapper>
        <Form initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
            <h1>Contact</h1>
            <h2>Feel free to contact me on the form below.</h2>
  <ContactInput id='Name' name='Name' label='Name' placeholder='Name' type='text' />
  <ContactInput id='Email' name='Email' label='Email' placeholder='Name' type='email'  />
  <ContactInput id='Subject' name='Subject' label='Subject' placeholder='Subject'type='text' />
  <ContactTextarea id='Text' name='Text' label='Text' placeholder='Text'  type='text' />
 <button type='submit' className='button' >Send</button>
  </Form>
  <div className="img">
  <img src={image} alt=''></img>
  {/* <div className="contact">
        <ImageP src={LinkedIn} style={'width:4vh;height:4vh;'}onClick={()=>window.open('https://www.linkedin.com/in/abderrahim-kadnaoui-9a71aa22a/', '_blank')}/>
        <ImageP src={Instagram}  style={'width:4vh;height:4vh;'}onClick={()=>window.open('https://www.instagram.com/abderrahimkadnaoui/', '_blank')}/>
      </div> */}
  </div>
  
  <ToastContainer/>
    </Wrapper>
  )
}

export default Contact