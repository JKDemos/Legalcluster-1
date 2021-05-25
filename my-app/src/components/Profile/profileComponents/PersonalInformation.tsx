import React,{FC, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { ItemWrapper } from '../../_Components/Common/ItemWrapper';

interface IPersonalInformation{
    firstName: string;
    lastName: string;
}

export const PersonalInformation: FC<IPersonalInformation>=({
    firstName,
    lastName,
    })=> {
    return(
    <ItemWrapper>
        <Avatar alt='aaa' src={'https://source.unsplash.com/jBTMrR6Q334'} />
        <p>{firstName} {lastName}</p>
        <p>New York</p>
        <p>Partner</p>
        <p>{firstName}{lastName}@gmail.com</p>
    </ItemWrapper>

    )
}