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
import { TopNav, LeftSide, CenterSide, RightSide,LogoContainer } from '../_Components/TopNav/TopNav';
//DROPDOWN HOOK
import useDropdown from 'react-dropdown-hook'
import {ExpandMenu} from './ExpandMenu'

export default function PrimarySearchAppBar() {

  const [wrapperRef, dropdownOpen, toggleDropdown]=useDropdown();
  return (
    <TopNav>
        <LeftSide>
          <Link to="/">
            <LogoContainer>
              <img src="/logo192.png"/>
            </LogoContainer>
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
          <Link to="/">
            <IconButton color="inherit">
                <HomeIcon />
            </IconButton>
            </Link>
            <Link to="/test">
            <IconButton color="inherit">
                <MailIcon />
            </IconButton>
            </Link>
            <Link to="/test">
            <IconButton color="inherit">
                <NotificationsIcon />
            </IconButton>
            </Link>
            </RightSide>
        {
          dropdownOpen&&
          <ExpandMenu/>
        }
    </TopNav>
  );
}