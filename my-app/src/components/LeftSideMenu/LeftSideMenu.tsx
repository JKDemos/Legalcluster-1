import React, {FC} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import {Icons} from '../../styledHelpers/Icons';
import Divider from '@material-ui/core/Divider';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

import {useSelector} from 'react-redux'
import {IState} from '../../reducers'
import {IUsersReducer} from '../../reducers/usersReducers'
//Card
const Profile = styled.div`
justify-content:center;
text-align:center;
background:gray;
p{
    margin-top:5px;
    margin-bottom:10px;
}
img{
    margin-top:20px;
}
`
const PersonalMenu = styled.div`
`
const PersonalMenuItem = styled.div`
margin-top:10px;
margin-bottom:10px;
display:flex;
align-items:center;
justify-content:space-around;
img{
margin-right:8px;
margin-left:8px;
}
`
//Menu
const LeftMenu = styled.div`
width:300px;
margin-left:10px;
margin-top:10px;
`
export function LeftSideMenu() {

    const {usersList} = useSelector<IState,IUsersReducer>(globalState=>globalState.users)

    return (
        //karta z zdjęciem po lewej
    <LeftMenu>    
        <Card>
            <Profile>
                <Avatar alt='aaa' src={'https://source.unsplash.com/jBTMrR6Q334'} />
                <p >{usersList?.[0]?.name}</p>
                <p id="job">Job Title</p>
                <Divider/>
                <PersonalMenu>
                    <PersonalMenuItem>
                        <img src={Icons.networkIcon} alt="network icon"/>
                        <p>Your Network</p>
                        <img src={Icons.networkIcon} alt="network icon"/>
                    </PersonalMenuItem>
                    <PersonalMenuItem>
                        <img src={Icons.publicationsIcon} alt="publications icon"/>
                        <p>Your Publications</p>
                        <img src={Icons.plusIcon} alt="plus icon"/>
                    </PersonalMenuItem>
                </PersonalMenu>
            </Profile>
                    <List>
                            <ListItem button>
                                <Link to='/'>
                                <ListItemText primary="Publications" />
                                </Link>
                            </ListItem>
                            <ListItem button>
                                <Link to='/ecosystem'>
                                <ListItemText primary="Ecosystem" />
                                </Link>
                            </ListItem>
                            <ListItem button>
                                <Link to='/'>
                                <ListItemText primary="Entities" />
                                </Link>
                            </ListItem>
                    </List>
        </Card>
    </LeftMenu>
    );
}