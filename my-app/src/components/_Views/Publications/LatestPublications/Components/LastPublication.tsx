import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import {useSelector} from 'react-redux'
import {IState} from '../../../../../reducers'
import {IUsersReducer} from '../../../../../reducers/usersReducers'
import {IPostsReducer} from '../../../../../reducers/postReducer'

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

export default function LastPublication() {
  const classes = Styles();
  const {usersList} = useSelector<IState,IUsersReducer>(globalState=>globalState.users)
  const {postsList}=useSelector<IState,IPostsReducer>(globalState=>globalState.posts)
  return(
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root}>
      <div className={classes.rootGradient}>
      <p>{postsList?.[1]?.body}</p>
      <div className={classes.authorBox}>
        <p>24 jan 2021</p>
        <Avatar alt="John Doe" src={'https://source.unsplash.com/jBTMrR6Q334'} />
        <p >{usersList?.[1]?.name}</p>
      </div>
      </div>
      </Container>
    </React.Fragment>
  )
}