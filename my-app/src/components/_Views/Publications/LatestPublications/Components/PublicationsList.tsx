import React,{FC} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { IPhotosReducer } from '../../../../../reducers/photosReducers';
import { IPostsReducer } from '../../../../../reducers/postReducer';
import { IUsersReducer } from '../../../../../reducers/usersReducers';
import { FullWidthContainer } from '../../../../_Components/Common/DataLayouts';

import { IState } from '../../../../../reducers';
import {useSelector} from 'react-redux'

import PublicationsItem from './PublicationsItem';
import {PublicationsButton, LastPublicationsHeader } from '../../../../_Components/Publications/Publications'; 

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    publicationsListItem:{
      paddingTop:'0px',
      paddingBottom:'0px'
    }
  }),
);


const PublicationsList:FC=()=> {
  const classes = useStyles();
  const {usersList} = useSelector<IState,IUsersReducer>(globalState=>globalState.users)
  const {postsList}=useSelector<IState,IPostsReducer>(globalState=>globalState.posts)
  const {photosList} = useSelector<IState,IPhotosReducer>(globalState=>globalState.photos)

  return (
    <FullWidthContainer>
      <List>
        <LastPublicationsHeader>
          <h3>Lastest Publications</h3>
        </LastPublicationsHeader>
        <ListItem className={classes.publicationsListItem}>
          <PublicationsItem imageUrl={photosList[0]?.url} author={usersList?.[1]?.name} post={postsList?.[1]?.title}/>
        </ListItem>
        <ListItem className={classes.publicationsListItem}>
          <PublicationsItem imageUrl={photosList[1]?.url} author={usersList?.[2]?.name} post={postsList?.[2]?.title}/>
        </ListItem>
        <ListItem className={classes.publicationsListItem}>
          <PublicationsItem imageUrl={photosList[2]?.url} author={usersList?.[3]?.name} post={postsList?.[3]?.title}/>
        </ListItem>
        <PublicationsButton>
          <p>See more publications</p>
        </PublicationsButton>
      </List>
    </FullWidthContainer>
  );
}
export default PublicationsList;