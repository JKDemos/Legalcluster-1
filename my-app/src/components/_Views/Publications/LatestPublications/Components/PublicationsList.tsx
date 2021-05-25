import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';


import PublicationsItem from './PublicationsItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding:'0px',
      marginBottom:'20px',
      width: '900px',
      backgroundColor: theme.palette.background.paper,
    },
    publicationsListItem:{
      paddingTop:'0px',
      paddingBottom:'0px'
    }
  }),
);


export default function PublicationsList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List className={classes.root}>
        <ListItem className={classes.publicationsListItem}>
          <PublicationsItem/>
        </ListItem>
        <ListItem className={classes.publicationsListItem}>
          <PublicationsItem />
        </ListItem>
        <ListItem className={classes.publicationsListItem}>
          <PublicationsItem/>
        </ListItem>
      </List>
    </div>
  );
}