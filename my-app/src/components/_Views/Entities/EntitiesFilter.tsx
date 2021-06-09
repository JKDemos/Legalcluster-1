import React, {FC, useState} from 'react';
import {FlexRow} from '../../_Components/Common/DataLayouts';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textInput: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
}}));

export const EntityFilter:FC=()=>{
  const classes = useStyles();
    const [filterTarget, setFilterTarget] = useState('Company');
    const [filterCriteria, setFilterCriteria] = useState('Contains');
    const [filterCriteria2, setFilterCriteria2] = useState('In');
  

    return(
    <FlexRow>
        <CloseIcon/>
        <h3>Where</h3>
          <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterTarget}
          onChange={eveny=>{}}
        >
          <MenuItem value={10}>Company</MenuItem>
          <MenuItem value={20}>Status</MenuItem>
          <MenuItem value={30}>Contract</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterCriteria}
        >
          <MenuItem value={10}>Contains</MenuItem>
          <MenuItem value={20}>Is</MenuItem>
          <MenuItem value={30}>Ends before</MenuItem>
        </Select>
      </FormControl>

      <form className={classes.textInput} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Type..." variant="filled" />
      </form>

    </FlexRow>
    )
}