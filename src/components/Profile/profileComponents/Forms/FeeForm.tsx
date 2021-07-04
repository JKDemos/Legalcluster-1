import React,{FC, useState} from 'react';
import {  Formik, Form, Field} from 'formik';
import { useSelector } from 'react-redux';
import { IState } from '../../../../reducers';

export const FeeForm:FC=()=> {
    return (
      <React.Fragment>
       <Formik
         initialValues={{
           friends: ['Year', 'Cost center','Total amount','Expertise','Law firm'],
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
         </Form>
  
       </Formik>
      </React.Fragment>
    );
  }
