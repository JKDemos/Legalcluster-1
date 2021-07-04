import React,{FC} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import {useSelector} from 'react-redux'
import {IState} from '../../../../../reducers'
import {IUsersReducer} from '../../../../../reducers/usersReducers'
import {IPostsReducer} from '../../../../../reducers/postReducer'
import { IPhotosReducer } from '../../../../../reducers/photosReducers';

import { LastPublications, PublicationsAuthor, LastPublicationText } from '../../../../_Components/Publications/Publications';


const Styles = makeStyles({
  root: {
    backgroundImage: 'url("https://source.unsplash.com/cfE67Nz8E34")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding:'0px',
    margin:'0px',
    width:'300px',
    height:'300px',
    color:'white',
  },

  rootGradient:{
    background: 'linear-gradient(0deg, rgba(134,132,179,1) 0%, rgba(0,212,255,0) 100%)',
    width:'100%',
    height:'100%',
  },

  authorBox:{ 
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
  }
});

const LastPublication:FC=()=> {
  const classes = Styles();
  const {usersList} = useSelector<IState,IUsersReducer>(globalState=>globalState.users)
  const {postsList}=useSelector<IState,IPostsReducer>(globalState=>globalState.posts)
  const {photosList} = useSelector<IState,IPhotosReducer>(globalState=>globalState.photos)
  return(
    <LastPublications>
      <div className="backgroundImage"
        style={{
          backgroundImage:`url(${photosList?.[0]?.url})`,
          width:'100%',
          height:'100%',
          backgroundSize:'cover',
        }}
      >
      <LastPublicationText>
        <p>{postsList?.[1]?.body}</p>
        <PublicationsAuthor>
          <p>24 jan 2021</p>
          <Avatar alt="John Doe" src={photosList[1]?.url} />
          <p >{usersList?.[1]?.name}</p>
        </PublicationsAuthor>
        </LastPublicationText>
      </div>
    </LastPublications>
  )
}
export default LastPublication;