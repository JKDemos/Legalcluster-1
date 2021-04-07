import React, {FC} from 'react';
import {Icons} from '../../styledHelpers/Icons';
 
export const ExpandMenu: FC = () => {
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

};