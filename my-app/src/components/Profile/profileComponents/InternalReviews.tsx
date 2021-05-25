import React,{FC} from 'react';
import { ItemWrapper } from '../../_Components/Common/ItemWrapper';
import { DataSection } from '../../_Components/Common/DataSection';

//components
import { ProfileDescrption } from '../../_Components/Profile/ProfileDescription';
import{InternalReviewsForm} from './Forms/InernalReviewsForm'

export const InternalReviews:FC=()=> {
  return (
    <React.Fragment>
      <ItemWrapper>
          <h3>Internal Reviews</h3>
    <DataSection>
      <ProfileDescrption>
        <h4>Name</h4>
        <h4>Entity</h4>
        <h4>Location</h4>
        <h4>Expertise</h4>
        <h4>Date</h4>
      </ProfileDescrption>
        <InternalReviewsForm/>
        <InternalReviewsForm/>
        <InternalReviewsForm/>
    </DataSection>
      </ItemWrapper>
    </React.Fragment>
  );
}
