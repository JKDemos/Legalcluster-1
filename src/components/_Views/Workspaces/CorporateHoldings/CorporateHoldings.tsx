import React, {FC} from "react";
import { IPhotosReducer } from "../../../../reducers/photosReducers";
import { IState } from "../../../../reducers";
import {useSelector} from 'react-redux'
import { useParams } from 'react-router';

import { Banner, CorporateTextArea,IconContainer,TextContainer } from "../../../_Components/CorporateHoldings/CorporateHoldings";

export const CorporateHoldings:FC=()=>{
    const {photosList} = useSelector<IState,IPhotosReducer>(globalState=>globalState.photos)
    let { title , icon}:any = useParams()
    const iconPath='/icons/'+icon
    return(
    <Banner>
        <div className="backgroundImage"
        style={{
          backgroundImage:`url(${photosList?.[0]?.url})`,
          width:'100%',
          height:'100%',
          backgroundSize:'cover',
        }}
      >
        <CorporateTextArea>
          <IconContainer>
          <img src={iconPath} alt='icon'/>
          </IconContainer>
          <TextContainer>
            <h3>{title}</h3>
            <p>
                Workspace purpose and a bit of context. This much needed description is 
                here to remind people where they are if they are new or have poor memory
            </p>
            </TextContainer>
        </CorporateTextArea>
        </div>
    </Banner>
    )
}