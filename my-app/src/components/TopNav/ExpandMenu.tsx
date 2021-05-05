import React,  { ChangeEvent, FC, useState } from 'react'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import {IState} from '../../reducers';
import {IUsersReducer} from '../../reducers/usersReducers'

//COMP0NENTS
import Avatar from '@material-ui/core/Avatar';
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
        <ul>
        <li><input type="text" value={inputText} onChange={handleInputChange}   className="inputTopBarFilter" placeholder='Filter...'/></li>
        <li id="group">Platform</li>

        {"Home".toLowerCase().includes(inputText.toLowerCase()) &&
            <Link to="/">
                <li><HomeIcon/><p>Home</p></li>

            </Link>
        }

        {"Publications".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
            <li><AssignmentIcon/><p>Publications</p></li>
        </Link>
        }

        {"People".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
        <li><PeopleAltIcon/><p>People</p></li>
        </Link>
        }
          
        {"Entities".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
        <li><BusinessIcon/><p>Entities</p></li>
        </Link>
        }

        {"Administration".toLowerCase().includes(inputText.toLowerCase()) &&   
        <Link to="/">
        <li><SupervisorAccountIcon/><p>Administration</p></li>
        </Link>
        }


        <li id="group">Workspaces</li>

        {"client contract".toLowerCase().includes(inputText.toLowerCase()) && 
        <Link to="/">
        <li><AssignmentIcon/><p>Client contract</p></li>
        </Link>
        }

        {"Supplier contract".toLowerCase().includes(inputText.toLowerCase()) && 
        <Link to="/">
        <li><AssignmentIcon/><p>Supplier contract</p></li>
        </Link>
        }

        {"Corporate".toLowerCase().includes(inputText.toLowerCase()) && 
        <Link to="/">
        <li><BusinessIcon/><p>Corporate</p></li>
        </Link>
        }
               
        {"Group Norms".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
        <li><GavelIcon/><p>Group Norms</p></li>
        </Link>
        }

        {"Estate contracts".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
        <li><AssignmentIcon/><p>Estate contracts</p></li>
        </Link>
        }

        {"Commercial".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
        <li><AssignmentIcon/><p>Commercial</p></li>
        </Link>
        }

        {"Shops".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
        <li><BusinessIcon/><p>Shops</p></li>
        </Link>
        }

        {"Business".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
        <li><BusinessIcon/><p>Business</p></li>
        </Link>
         }

        {"Manager".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
        <li><SupervisorAccountIcon/><p>Manager</p></li>
        </Link>
        }

        {"Online".toLowerCase().includes(inputText.toLowerCase()) &&
        <Link to="/">
        <li><BookmarkBorderIcon/><p>Online</p></li>
        </Link>
        }

        <li id="group">Account</li>
        <Link to="/">
            <li> <Avatar alt='aaa' src={'https://source.unsplash.com/jBTMrR6Q334'} />
            <div>
            <p >{usersList?.[0]?.name}</p><p>See profile</p>
            </div>
            </li>
        </Link>
        <Link to="/">
            <li><LockIcon/><p>Privacy</p></li>
        </Link>
        <Link to="/">
            <li id="Settings"><SettingsIcon/><p>Settings</p></li>
        </Link>
        <Link to="/">
            <li><ExitToAppIcon/><p>Logout</p></li> 
        </Link>
        </ul>
    );

};
/*
return(
        <ul>
            <li><input type="text" placeholder='Filter...'/></li>
            <li>Platform</li>
            <li><img src={Icons.house2Icon} alt="house icon"/><p>Home</p></li>
            <li><img src={Icons.house2Icon} alt="house icon"/><p>Publications</p></li>
            <li><img src={Icons.house2Icon} alt="house icon"/><p>People</p></li>
            <li><img src={Icons.house2Icon} alt="house icon"/><p>Entities</p></li>
            <li><img src={Icons.house2Icon} alt="house icon"/><p>Administration</p></li>
            <li>Workspaces</li>
            <li><img src={Icons.house2Icon} alt="house icon"/><p>Client contract</p></li>
            <li><img src={Icons.house2Icon} alt="house icon"/><p>Supplier contract</p></li>
            <li><img src={Icons.house2Icon} alt="house icon"/><p>Corporate</p></li>
            <li><img src={Icons.house2Icon} alt="house icon"/><p>Group Norms</p></li>
            <li><img src={Icons.house2Icon} alt="house icon"/><p>Real estate contracts</p></li>
            <li>Account</li>
            <li><img src={Icons.house2Icon} alt="house icon"/><p>name</p><p>See profile</p></li>
            <li><img src={Icons.house2Icon} alt="house icon"/><p>Privacy</p></li>
            <li><img src={Icons.house2Icon} alt="house icon"/><p>Settings</p></li>
            <li><img src={Icons.house2Icon} alt="house icon"/><p>Logout</p></li>
        </ul>
    );
*/