import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import{ItemWrapper} from '../_Components/Common/ItemWrapper'
import {DataSection} from '../_Components/Common/DataSection'
import { ISingleUser } from '../../entities/user';
import defaultUser from '../../tools/userDefault';
//components
import { ProfileInfomation } from './profileComponents/ProfileInformation';
import { PanelInfomations } from './profileComponents/PanelInformations';
import { Proposals } from './profileComponents/Proposals';
import { InternalReviews } from './profileComponents/InternalReviews';
import { AmountOfFees } from './profileComponents/AmountOfFees';
import { PersonalInformation } from './profileComponents/PersonalInformation';

export const Profile:FC=()=> {
  const [user, setUser] = useState<ISingleUser>();
  return (
    <React.Fragment>
      <ItemWrapper>
        <DataSection>
          <PersonalInformation firstName="Leanne" lastName="Graham"/>
        </DataSection>
          <ProfileInfomation/>
        <DataSection>
          <PanelInfomations/>
        </DataSection>
        <DataSection>
          <Proposals/>
        </DataSection>
        <DataSection>
          <InternalReviews/>
        </DataSection>
        <DataSection>
          <AmountOfFees/>
        </DataSection>
      </ItemWrapper>
    </React.Fragment>
  );
}
