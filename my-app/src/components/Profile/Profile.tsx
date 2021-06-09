import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import{ItemWrapper} from '../_Components/Common/ItemWrapper'
import {DataSection} from '../_Components/Common/DataSection'
import { ISingleUser } from '../../entities/user';
import { ProfileContainer } from '../_Components/Profile/Profile';
//components
import  {ProfileInfomation}  from './profileComponents/ProfileInformation';
import { SkillInformation } from './profileComponents/SkillInformation';
export const Profile:FC=()=> {
  const [user, setUser] = useState<ISingleUser>();
  return (
    <ProfileContainer>
          <ProfileInfomation title='aaa'/>
        <DataSection>
          <SkillInformation/>
        </DataSection>
    </ProfileContainer>
  );
}
