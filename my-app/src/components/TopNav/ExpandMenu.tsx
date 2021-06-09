import React,  { ChangeEvent, FC, useState } from 'react'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import {IState} from '../../reducers';
import {IUsersReducer} from '../../reducers/usersReducers'

//COMP0NENTS
import Avatar from '@material-ui/core/Avatar';
import { UserMenu,UserMenuItem, ScrollArea, LogoutBar, FilterBox } from '../_Components/TopNav/TopNav';
//ICONS
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import BusinessIcon from '@material-ui/icons/Business';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import GavelIcon from '@material-ui/icons/Gavel';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import LockIcon from '@material-ui/icons/Lock';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
 
export const ExpandMenu: FC = () => {

    const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);

    const [inputText,setInputText] = useState<string>('');
     const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
         const text = e.target.value;
         setInputText(text)
     }

    return(
        <UserMenu>
            <FilterBox>
                <input type="text" value={inputText} onChange={handleInputChange}   className="inputTopBarFilter" placeholder='Filter...'/>
            </FilterBox>
        <ScrollArea>
        <p>Platform</p>

        {"Home".toLowerCase().includes(inputText.toLowerCase()) &&
            <Link to="/">
                <UserMenuItem>
                    <HomeIcon/><p>Home</p>
                </UserMenuItem>
            </Link>
        }

        {"Publications".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
                <UserMenuItem>
                    <AssignmentIcon/><p>Publications</p>
                </UserMenuItem>
        </Link>
        }

        {"People".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
                <UserMenuItem>
                    <PeopleAltIcon/><p>People</p>
                </UserMenuItem>
        </Link>
        }
          
        {"Entities".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
            <UserMenuItem>
                <BusinessIcon/><p>Entities</p>
            </UserMenuItem>
        </Link>
        }

        {"Administration".toLowerCase().includes(inputText.toLowerCase()) &&   
        <Link to="/">
            <UserMenuItem>
                <SupervisorAccountIcon/><p>Administration</p>
            </UserMenuItem>
        </Link>
        }


        <p>Workspaces</p>

        {"client contract".toLowerCase().includes(inputText.toLowerCase()) && 
        <Link to="/">
            <UserMenuItem>
                <AssignmentIcon/><p>Client contract</p>
            </UserMenuItem>
        </Link>
        }

        {"Supplier contract".toLowerCase().includes(inputText.toLowerCase()) && 
        <Link to="/">
            <UserMenuItem>
                <AssignmentIcon/><p>Supplier contract</p>
            </UserMenuItem>
        </Link>
        }

        {"Corporate".toLowerCase().includes(inputText.toLowerCase()) && 
        <Link to="/">
            <UserMenuItem>
                <BusinessIcon/><p>Corporate</p>
            </UserMenuItem>
        </Link>
        }
               
        {"Group Norms".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
            <UserMenuItem>
                <GavelIcon/><p>Group Norms</p>
            </UserMenuItem>
        </Link>
        }

        {"Estate contracts".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
            <UserMenuItem>
                <AssignmentIcon/><p>Estate contracts</p>
            </UserMenuItem>
         </Link>
        }

        {"Commercial".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
            <UserMenuItem>
                <AssignmentIcon/><p>Commercial</p>
            </UserMenuItem>
        </Link>
        }

        {"Shops".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
            <UserMenuItem>
                <BusinessIcon/><p>Shops</p>
            </UserMenuItem>
        </Link>
        }

        {"Business".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
            <UserMenuItem>
                <BusinessIcon/><p>Business</p>
            </UserMenuItem>
        </Link>
         }

        {"Manager".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
            <UserMenuItem>
                <SupervisorAccountIcon/><p>Manager</p>
            </UserMenuItem>
        </Link>
        }

        {"Online".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
            <UserMenuItem>
                <BookmarkBorderIcon/><p>Online</p>
            </UserMenuItem>
        </Link>
        }
        </ScrollArea>
        <p>Account</p>
        <Link to='/profile'>
            <UserMenuItem>
                <Avatar alt='aaa' src={'https://source.unsplash.com/jBTMrR6Q334'} />
                    <div>
                    <p >{usersList?.[0]?.name}</p><p>See profile</p>
                    </div>
            </UserMenuItem>
        </Link>
        <Link to="/">
            <UserMenuItem>
                <LockIcon/><p>Privacy</p>
            </UserMenuItem>
        </Link>
        <Link to="/">
            <UserMenuItem>
            <SettingsIcon/><p>Settings</p>
            </UserMenuItem>   
        </Link>
        <LogoutBar>
            <Link to="/">
                <UserMenuItem>
                    <ExitToAppIcon/><p>Logout</p>
                </UserMenuItem>
            </Link>
        </LogoutBar>
        </UserMenu>
    );
};