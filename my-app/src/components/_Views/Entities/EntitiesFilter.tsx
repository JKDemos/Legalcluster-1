import React, {FC, useState} from 'react';
import {FlexRow} from '../../_Components/Common/DataLayouts'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

export const EntityFilter:FC=()=>{
    const [age, setAge] = useState('');
    const handleChange = (event:any) => {
        setAge(event.target.value);
    }
    return(
    <FlexRow>
         <FormControl>
         <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </FlexRow>
    )
}