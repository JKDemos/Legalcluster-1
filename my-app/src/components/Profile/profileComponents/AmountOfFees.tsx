import React,{FC} from 'react';
import { ItemWrapper } from '../../_Components/Common/ItemWrapper';
import { DataSection } from '../../_Components/Common/DataSection';

//components
import { ProfileDescrption } from '../../_Components/Profile/Profile';
import { FeeForm } from './Forms/FeeForm';

export const AmountOfFees:FC=()=> {
  return (
    <React.Fragment>
      <ItemWrapper>
          <h3>Amount of fees</h3>
    <DataSection>
      <ProfileDescrption>
        <h4>Name</h4>
        <h4>Entity</h4>
        <h4>Location</h4>
        <h4>Expertise</h4>
        <h4>Date</h4>
      </ProfileDescrption>
        <FeeForm/>
        <FeeForm/>
        <FeeForm/>
    </DataSection>
      </ItemWrapper>
    </React.Fragment>
  );
}
