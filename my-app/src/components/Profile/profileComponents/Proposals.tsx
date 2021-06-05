
import React,{FC} from 'react';
import { ItemWrapper } from '../../_Components/Common/ItemWrapper';
import { DataSection } from '../../_Components/Common/DataSection';
import { Formik, Form, Field} from 'formik';

//components
import { ProfileDescrption } from '../../_Components/Profile/Profile';
import { ProposalsForm } from './Forms/ProposalForm';

export const Proposals:FC=()=> {
  return (
    <React.Fragment>
      <ItemWrapper>
          <h3>Proposals</h3>
    <DataSection>
      <ProfileDescrption>
        <h4>Name</h4>
        <h4>Entity</h4>
        <h4>Location</h4>
        <h4>Expertise</h4>
        <h4>Date</h4>
        <h4>Firm</h4>
      </ProfileDescrption>
        <ProposalsForm/>
        <ProposalsForm/>
        <ProposalsForm/>
    </DataSection>
      </ItemWrapper>
    </React.Fragment>
  );
}
