import React, { Component }  from 'react';


import { 
    FormControl,
    Input,
    InputLabel,
    FormHelperText,
    OutlinedInput,  

} from '@mui/material';




export default function Form() {
    var Email = 

<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>

}