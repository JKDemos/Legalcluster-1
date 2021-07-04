import React,{FC} from 'react';
import {  Formik, Form, Field} from 'formik';

export const ProposalsForm:FC=()=> {
    return (
      <React.Fragment>
       <Formik
         initialValues={{
           friends: ['Name', 'Entity','Location','Expertise','Date','Firm'],
         }}
         onSubmit={values => {
           // same shape as initial values
           console.log(values);
         }}
       >
         <Form>
           <Field name="friends[0]" />
           <Field name="friends[1]" />
           <Field name="friends[2]" />
           <Field name="friends[3]" />
           <Field name="friends[4]" />
           <Field name="friends[5]" />
         </Form>
  
       </Formik>
      </React.Fragment>
    );
  }
  