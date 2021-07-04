import React , {FC} from 'react'
import { IEntity } from "./IEntity";
import {EntityCard, CompanyThumbnail, EntityDescription, EntityName, EntityAdress} from '../../../components/_Components/Common/Entity'

export const Entity:FC<IEntity>=({title,imageUrl,adress}:IEntity)=>{

    return(
    <EntityCard>
        <CompanyThumbnail>
            <img src={imageUrl} alt='company-logo'/>
        </CompanyThumbnail>
        <EntityDescription>
            <EntityName>
                <h3>{title}</h3>
            </EntityName>
            <EntityAdress>
                <p>{adress}</p>
            </EntityAdress>
        </EntityDescription>
    </EntityCard>
    )

}