import React,{FC} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { IWorkPost } from './IWorkPost';
import { WorkPostContainer, WorkPostTextArea,WorkPostHeader,WorkPostFooter } from '../../../../../_Components/WorkPages/WorkPost';

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
})
);
const WorkPost:FC<IWorkPost>=({id, body, author, imageUrl}: IWorkPost)=> {
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
  console.log({imageUrl})
  return(
    <WorkPostContainer>
      <div className={classes.newsContainer}>
        <div className={classes.textarea}>
          <WorkPostHeader>
            <h3>Post #{id}</h3>
          </WorkPostHeader>
          <WorkPostTextArea>
              <p>{body}</p>
          </WorkPostTextArea>
          <WorkPostFooter>
            <img src={imageUrl} alt="logo"/>
            <p>Subsid.corp.</p>
            <img src={imageUrl} alt="contact"/>
            <p>{client}</p>
            <p>Updated 3 days ago by {author}</p>
          </WorkPostFooter>
        </div>
      </div>
    </WorkPostContainer>
  );
}
export default WorkPost;