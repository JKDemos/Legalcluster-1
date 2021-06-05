import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import{ItemWrapper} from '../_Components/Common/ItemWrapper'
import {DataSection} from '../_Components/Common/DataSection'
import { ISingleUser } from '../../entities/user';
//components
import  {ProfileInfomation}  from './profileComponents/ProfileInformation';
import { SkillInformation } from './profileComponents/SkillInformation';
import { PanelInfomations } from './profileComponents/PanelInformations';
import { Proposals } from './profileComponents/Proposals';
import { InternalReviews } from './profileComponents/InternalReviews';
import { AmountOfFees } from './profileComponents/AmountOfFees';

export const Profile:FC=()=> {
  const [user, setUser] = useState<ISingleUser>();
  return (
    <React.Fragment>
      <ItemWrapper>
          <ProfileInfomation title='aaa'/>
        <DataSection>
          <SkillInformation/>
        </DataSection>
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
