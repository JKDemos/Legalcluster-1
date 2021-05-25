import React,{FC} from 'react';
import { ItemWrapper } from '../../_Components/Common/ItemWrapper';
import { DataSection } from '../../_Components/Common/DataSection';
import { FlexRow } from '../../_Components/Common/FlexRow';
import Avatar from '@material-ui/core/Avatar';
import { Formik, Form, Field } from 'formik';

export const PanelInfomations:FC=()=> {
  return (
    <React.Fragment>
      <ItemWrapper>
        <DataSection>
          <h4>Panel informations</h4>
          <p>Hourly fee</p>
          <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="text" name="email" />
           <Field type="text" name="email" />
         </Form>
       )}
     </Formik>
          <p>Services & projects</p>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
            <Field type="text" name="email" />
        </Form>
        )}
        </Formik>
        <p>Internal correspondents</p>
        <FlexRow>
          <Avatar alt='aaa' src={'https://source.unsplash.com/jBTMrR6Q334'} />
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            }, 400);
            }}
            >
       {({ isSubmitting }) => (
         <Form>
            <Field type="text" name="email" />
            <Field type="text" name="email" />
        </Form>
        )}
        </Formik>
        </FlexRow>
    </DataSection>

      </ItemWrapper>
    </React.Fragment>
  );
}
