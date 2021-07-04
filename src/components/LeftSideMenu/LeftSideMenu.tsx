import React, {FC} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import {Icons} from '../../styledHelpers/Icons';
import Divider from '@material-ui/core/Divider';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
import {IState} from '../../reducers'
import {IUsersReducer} from '../../reducers/usersReducers'
import { IPhotosReducer } from '../../reducers/photosReducers';
//components
import { Profile, PersonalMenu, PersonalMenuItem, LeftMenu, MenuHeader } from '../_Components/LeftSideMenu';
//material icons
import AssignmentIcon from '@material-ui/icons/Assignment';
import WidgetsIcon from '@material-ui/icons/Widgets';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuItem: {
        marginRight:'40px',
        textDecoration:'none'
      },
  }),
);

export const LeftSideMenu:FC=()=>{

    const {usersList} = useSelector<IState,IUsersReducer>(globalState=>globalState.users)
    const {photosList} = useSelector<IState,IPhotosReducer>(globalState=>globalState.photos)
    const classes = useStyles();
    return (
        //karta z zdjęciem po lewej
    <LeftMenu>    
        <Card>
            <Profile>
                <MenuHeader>
                <Link to="/profile">
                <img src={photosList[0]?.url} alt='Profile' />
                <p >{usersList?.[0]?.name}</p>
                <p id="job">{usersList?.[0]?.company.name}</p>
                </Link>
                </MenuHeader>
                <Divider/>
                <PersonalMenu>
                <Link to='/test'>
                    <PersonalMenuItem>
                        <img src={Icons.networkIcon} alt="network icon"/>
                        <p>Your Network</p>
                        <img src={Icons.networkIcon} alt="network icon"/>
                    </PersonalMenuItem>
                    </Link>
                    <Link to='/'>
                    <PersonalMenuItem>
                        <img src={Icons.publicationsIcon} alt="publications icon"/>
                        <p>Your Publications</p>
                        <img src={Icons.plusIcon} alt="plus icon"/>
                    </PersonalMenuItem>
                    </Link>
                </PersonalMenu>
            </Profile>
                    <List>
                        <Link to='/'>
                            <ListItem button>
                                <AssignmentIcon className={classes.menuItem}/>
                                <ListItemText primary="Publications"/>
                            </ListItem>
                        </Link>
                        <Link to='/ecosystem'>
                            <ListItem button>
                                <WidgetsIcon className={classes.menuItem}/>
                                <ListItemText primary="Ecosystem"/>
                            </ListItem>
                        </Link>
                        <Link to='/entities'>
                            <ListItem button>
                                <AccountBalanceIcon className={classes.menuItem}/>
                                <ListItemText primary="Entities" />
                            </ListItem>
                        </Link>
                    </List>
        </Card>
    </LeftMenu>
    );
}