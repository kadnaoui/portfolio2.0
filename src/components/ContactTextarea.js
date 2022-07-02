import React from "react";
import { useField, ErrorMessage } from "formik";
import Wrapper from "../assets/wrappers/InputWrapper";

const ContactTextarea = (props) => {
  const {id,label}=props;
  const [field,meta]=useField(props);
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <textarea
        className={` input ${meta.touched && meta.error && "error"}`}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="errorMessage"
      />
    </Wrapper>
  );
};

export default ContactTextarea;
