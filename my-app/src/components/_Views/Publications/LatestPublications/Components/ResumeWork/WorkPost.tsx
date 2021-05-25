import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { IWorkPost } from './IWorkPost';

const Styles= makeStyles((theme: Theme) =>
createStyles({
  newsContainer:{
    display:'flex',
    paddingTop:'0px',
    paddingBottom:'0px',
  },
  textarea:{
  },
  header:{
    fontWeignt:'bold',
    margin:'0px',
  },
  postContent:{

  },
  credits:{
    display:'flex',

    p:{
      paddingLeft:'10px',
    }
  },
  authorSmall: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
})
);
const WorkPost: React.FC<IWorkPost>=({userId, id, title, body}: IWorkPost)=> {
  var client:string;
  if(id%2===0){
    client='Supplier contract'
  }
  else if(id%3===0){
    client='Corporate contract'
  }
  else{
    client='Client contract'
  }
  const classes=Styles()
  return(
    <React.Fragment>
      <div className={classes.newsContainer}>
        <div className={classes.textarea}>
          <div className={classes.header}>
            <h3>Post #{id}</h3>
          </div>
          <div className={classes.postContent}>
              <p>{body}</p>
          </div>
          <div className={classes.credits}>
            <p>Subsid.corp.</p>
            <p>{client}</p>
            <p>last updated 3 days ago by John Doe</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default WorkPost;