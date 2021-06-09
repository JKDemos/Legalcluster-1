import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { IWorkspace } from './IWorkspace';

import { WorkspaceIconContainer } from '../../../../../_Components/Other/Workspace';

const useStyles = makeStyles({
  root: {
    marginLeft:10,
    marginRight:10,
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Workspace: React.FC<IWorkspace>=({photoUrl,iconUrl,workspaceType, clientType, clientCount}: IWorkspace)=> { 
  const classes = useStyles();
  const iconAdress='../../../../../../icons/'+iconUrl
  console.log(iconAdress)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={photoUrl}//"/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <WorkspaceIconContainer>
            <img src={iconAdress} alt='icon'/>
          </WorkspaceIconContainer>
          <Typography gutterBottom variant="h5" component="h2">
            <p>{workspaceType}</p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>{clientType} {clientCount} users</p>
            <p>last updated 2 days ago</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default Workspace