import React,{FC} from 'react';
import { ItemWrapper } from '../../_Components/Common/ItemWrapper';
import { DataSection } from '../../_Components/Common/DataSection';
import { FlexRow } from '../../_Components/Common/DataLayouts';
import Avatar from '@material-ui/core/Avatar';
import { Formik, Form, Field } from 'formik';
import { useFormik } from 'formik';

export const PanelInfomations:FC=()=> {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <React.Fragment>
      <ItemWrapper>
        <DataSection>
          <h4>Panel informations</h4>
          <p>Hourly fee</p>
        </DataSection>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
    
          <button type="submit">Submit</button>
        </form>
      </ItemWrapper>
    </React.Fragment>
  );
}
