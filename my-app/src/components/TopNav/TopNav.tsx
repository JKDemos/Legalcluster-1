import React from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Link} from 'react-router-dom';

//styled components
import { TopNav, LeftSide, CenterSide, RightSide } from '../_Components/TopNav/TopNav';
//DROPDOWN HOOK
import useDropdown from 'react-dropdown-hook'
import {ExpandMenu} from './ExpandMenu'

export default function PrimarySearchAppBar() {

  const [wrapperRef, dropdownOpen, toggleDropdown]=useDropdown();
  return (
    <TopNav>
        <LeftSide>
          <Link to="/">
            <h2>LOGO</h2>
          </Link>
          <IconButton color="inherit" onClick={toggleDropdown} >
            <HomeIcon />
            <p>Home</p>
            <ArrowDropDownIcon/>
          </IconButton>
          </LeftSide>
          <CenterSide>
            <InputBase
            placeholder="Search Legalcluster..."
            />
          </CenterSide>
          <RightSide>
            <IconButton color="inherit">
                <HomeIcon />
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
                <MailIcon />
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
                <NotificationsIcon />
            </IconButton>
            </RightSide>
        {
          dropdownOpen&&
          <ExpandMenu/>
        }
    </TopNav>
  );
}