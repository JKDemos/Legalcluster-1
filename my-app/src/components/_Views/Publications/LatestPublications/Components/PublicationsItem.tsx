import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {useSelector} from 'react-redux'
import {IState} from '../../../../../reducers'
import {IUsersReducer} from '../../../../../reducers/usersReducers'
import {IPhotoReducer} from '../../../../../reducers/photoReducers'
import {IPostsReducer} from '../../../../../reducers/postReducer'

const Styles= makeStyles((theme: Theme) =>
createStyles({
  newsContainer:{
    display:'flex',
    paddingTop:'0px',
    paddingBottom:'0px',
  },
  thumbnail:{
    backgroundImage: 'url("https://source.unsplash.com/cfE67Nz8E34")',
    width:'60px',
    height:'60px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    margin:'10px',
  },
  textarea:{
  },
  header:{
    fontWeignt:'bold',
    margin:'0px',
  },
  credits:{
    display:'flex',
  },
  authorSmall: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
})
);
export default function PublicationsItem() {
  const {usersList} = useSelector<IState,IUsersReducer>(globalState=>globalState.users)
  //const {photosList} = useSelector<IState,IPhotoReducer>(globalState=>globalState.photos)
  const {postsList}=useSelector<IState,IPostsReducer>(globalState=>globalState.posts)

  const classes=Styles()
  return (
    <React.Fragment>
      <div className={classes.newsContainer}>
        <div className={classes.thumbnail}>
        </div>
        <div className={classes.textarea}>
          <div className={classes.header}>
            <p>{postsList?.[0]?.title}</p>
          </div>
          <div className={classes.credits}>
            <p>24 jan 2021</p>
            <Avatar className={classes.authorSmall} alt="John Doe" src={"https://source.unsplash.com/jBTMrR6Q334"} />
            <p >{usersList?.[3]?.name}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}