import React from 'react'
import {Formik,Form} from 'formik'

const MyForm = ({children,initialValues,validationSchema,onSubmit}) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values,{resetForm})=>onSubmit(values,{resetForm})} >
{
 
  formik=>{
    return <Form>
        {children}
        </Form>
  }
}
</Formik>
  )
}

export default MyForm