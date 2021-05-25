import React,{FC, useState} from 'react';
import { ItemWrapper } from '../../_Components/Common/ItemWrapper';
import { DataSection } from '../../_Components/Common/DataSection';
import { Formik, Form, Field } from 'formik';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';

export const ProfileInfomation:FC=()=> {
  
  const [Expertise, setExpertise] = useState({value:'Merges and aquisition'});
  let [getSpeciality1, setSpeciality1] = useState('Cross border operations');
  let [getSpeciality2, setSpeciality2] = useState('Transactions over 500M$');
  let [getAdmission1, setAdmission1] = useState('Paris bar association');
  let [getAdmission2, setAdmission2] = useState('Tunisian bar association');
  let [getCountry, setCountry] = useState('Poland');
  
  return (
    <React.Fragment>
      <ItemWrapper>
    <DataSection>
        {/*-----------------------EXPERTISE FORM------------------------ */}
          <p>Expertise</p>
          <Formik
            initialValues={{ expertise:Expertise['value']}}
            onSubmit={(values, { setSubmitting }) => {
            //var formDataObj=JSON.parse(JSON.stringify(values, null, 2))
            //setExpertise((formDataObj)['expertise']);
            setExpertise(prevState=>{
              return{
                ...prevState,
                value:'aaa'
              }
            });

            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            }, 400);
       }}>

       {({ isSubmitting }) => (
         <Form>
            <Field type="text" name="expertise"/>
        </Form>
        )}
        </Formik>
        
        {/*-----------------------SPECIALITY FORM------------------------ */}
          <p>Specialities</p>
          <Formik
            initialValues={{ speciality1: getSpeciality1, speciality2: getSpeciality2}}
            onSubmit={(values, { setSubmitting }) => {
            var formDataObj=JSON.parse(JSON.stringify(values, null, 2))
            setSpeciality1((formDataObj)['speciality1']);
            setSpeciality2((formDataObj)['speciality2']);
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}>
          {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="speciality1" />
            <Field type="text" name="speciality2" />
          </Form>
        )}
        </Formik>

       {/*-----------------------ADMISSION FORM------------------------ */}
        <p>Admission to practice law</p>
          <Formik
            initialValues={{ Admission1:getAdmission1, Admission2:getAdmission2 }}
            onSubmit={(values, { setSubmitting }) => {
            var formDataObj=JSON.parse(JSON.stringify(values, null, 2))
            setAdmission1((formDataObj)['Admission1']);
            setAdmission2((formDataObj)['Admission2']);
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
            <Field type="text" name="Admission1" />
            <Field type="text" name="Admission2" />
        </Form>
        )}
        </Formik>

       {/*-----------------------COUNTRIES FORM------------------------ */}
          <p>Countries</p>
          <Formik
        initialValues={{ country:getCountry }}
        onSubmit={(values, { setSubmitting }) => {
          var formDataObj=JSON.parse(JSON.stringify(values, null, 2))
          setCountry((formDataObj)['country']);
          setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="text" name="country" />
         </Form>
       )}
     </Formik>

    </DataSection>
      </ItemWrapper>
    </React.Fragment>
  );
}
