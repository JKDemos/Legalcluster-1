import React,{FC} from 'react';
import { styled, makeStyles } from '@material-ui/core/styles';


import PublicationsList from './Components/PublicationsList';
import LastPublication from './Components/LastPublication';
import Workspaces from './Components/Workspaces'
import CustomPaginationActionsTable from './Components/ResumeWork/WorkPages'

const useStyles = makeStyles({
  PageContainer: {
   display:'flex',
   flexDirection:'column',
  },
  PublicationsContainer:{
    display:'flex',
    width:'1400px',
    flexDirection:'row',
  }
});
export const LatestPublications:FC=()=> {
  const classes = useStyles();
  return (
      <div className={classes.PageContainer}>
        <div className={classes.PublicationsContainer}>
          <LastPublication/>
          <PublicationsList/>
        </div>
        <Workspaces/>
        <CustomPaginationActionsTable/>
      </div>
  );
}