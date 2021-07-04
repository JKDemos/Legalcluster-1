import React,{FC} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { IPublicationsItem } from './IPublicationsItem';
import { Publication,PublicationsHeader, PublicationThumbnail, PublicationsAuthor, PublicationsContent } from '../../../../_Components/Publications/Publications';

const PublicationsItem:FC<IPublicationsItem>=({imageUrl, author, post}:IPublicationsItem)=> {
  return (
    <Publication>
          <PublicationThumbnail>
            <img src={imageUrl} alt='thumbnaul'/>
          </PublicationThumbnail>
          <PublicationsContent>
          <PublicationsHeader>
            <p>{post}</p>
          </PublicationsHeader>
          <PublicationsAuthor>
            <p>24 jan 2021</p>
              <img src={imageUrl} alt='author'/>
            <p >{author}</p>
            </PublicationsAuthor>
        </PublicationsContent>
    </Publication>
  );
}
export default PublicationsItem