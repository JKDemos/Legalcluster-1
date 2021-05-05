import React, {FC,useEffect} from 'react';
import PrimaryAppSearchBar from './components/TopNav/TopNav'
import {LeftSideMenu} from './components/LeftSideMenu/LeftSideMenu';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {getUsers} from './actions/userActions'
import {getPhotos} from './actions/photoActions';
import {getPosts} from './actions/postActions'
import {getComments} from './actions/commentActions'

import {useDispatch} from 'react-redux'
//ROUTE COMPONENTS
import {LatestPublications} from './components/_Views/Publications/LatestPublications/LatestPublications';
import {Entities} from './components/_Views/Entities/Entities';
import {Ecosystem} from './components/_Views/Ecosystem/Ecosystem'

type GetUsers=ReturnType<typeof getUsers>
type GetPhotos=ReturnType<typeof getPhotos>
type GetPosts=ReturnType<typeof getPosts>
type GetComments=ReturnType<typeof getComments>

const Styles = makeStyles({
    content: {
      display:'flex',
      justifyContent:'center',
      padding:'0',
      marginLeft:'30px',
      marginTop:'10px',
    },
    page:{
        marginLeft:'30px',
        display:'flex',
    }
  });

const MainPage: FC =() => {

    const dispatch=useDispatch();
    useEffect(()=>{
       dispatch<GetUsers>(getUsers())
       dispatch<GetPhotos>(getPhotos()) 
       dispatch<GetPosts>(getPosts()) 
       dispatch<GetComments>(getComments())
    },[]);

    const classes=Styles();
    return (
        <>
        <Router>
        <PrimaryAppSearchBar/>
        <div className={classes.page}>
        <LeftSideMenu/>
        <div className={classes.content}>
                <Switch>
                    <Route path='/' exact component={LatestPublications}/>
                    <Route path='/entities' exact component={Entities}/>
                    <Route path='/ecosystem' exact component={Ecosystem}/>
                </Switch>
        </div>
        </div>
        </Router>
        </>
    );
    
}

export default MainPage