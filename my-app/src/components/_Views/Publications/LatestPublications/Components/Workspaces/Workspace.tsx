import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { IWorkspace } from './IWorkspace';

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

const Workspace: React.FC<IWorkspace>=({workspaceType, clientType, clientCount}: IWorkspace)=> { 
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/cfE67Nz8E34"//"/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
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