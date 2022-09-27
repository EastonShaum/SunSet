import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl, Button, MenuItem, InputLabel, Select } from '@mui/material';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';

export default function AddressForm2() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        No strings attached.
      </Typography>
      
      <form id="fs-frm" name="survey-form" accept-charset="utf-8" action="https://formspree.io/f/mrgdpweb" method="post">
  
  <Grid item xs={12} sm={6}>      
    <TextField fullWidth label="Full Name" variant="standard" type="text" name="Name" id="full-name" placeholder="First and Last" required="true"/>
  </Grid>
    <br/>
  <Grid item xs={12} sm={6}>        
    <TextField fullWidth label="Phone Number" variant="standard" type="phone" name="Phone Number" id="Phone-Number" placeholder="000-000-0000" required="true"/>
  </Grid>
  <br/>
  <Grid item xs={12}>        
  <TextField 
    fullWidth  
    label="How much is your monthly electricy bill?" 
    wrapped 
    variant="standard" 
    type="number" 
    name="Monthly electricty bill" 
    id="monthly-electricty" 
    placeholder="" 
    required="true"
    helperText="(On average and without Gas)"/>
  </Grid>
  <br/>
  <Grid item xs={12} sm={6}>        
    <TextField fullWidth wrapped label="What is the square footage of your home?" variant="standard" type="number" name="Square footage" id="square-footage" placeholder="  sq. ft" required="true"/>
  </Grid>
  <br/>

  <Grid item xs={12} sm={6}>
    <FormControl  variant="standard" sx={{ m: 1, width: 1 }}>
      <InputLabel  id="demo-simple-select-standard-label" >Do you own or rent your home?</InputLabel>
        <Select
          name="Own or rent home?" 
          id="own-or-rent" 
          required="true"
          labelId="demo-simple-select-standard-label"
          label=""
        >
          <MenuItem value="Own">I own my home</MenuItem>
          <MenuItem value="Rent To Buy">Renting but plan on buying</MenuItem>
          <MenuItem value="Rent">I am currently renting</MenuItem>
        </Select>
    </FormControl>
  </Grid>
  <br/>

  <Grid item xs={12} sm={6}>
    <FormControl  variant="standard" sx={{ m: 1, width: 1 }}>
      <InputLabel  id="demo-simple-select-standard-label" >Is there anything blocking your roof?</InputLabel>
        <Select
          name="Is the roof blocked?" id="blocked-roof" required="true"
          labelId="demo-simple-select-standard-label"
          label=""
        >
          <MenuItem value="No">No</MenuItem>
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
    </FormControl>
  </Grid>
  <br/>
  {/* Can add this quetion later if needed */}
  {/* <Grid item xs={12} sm={6}>
    <FormControl fullwidth variant="standard" sx={{ m: 1, width: 1 }}>
    <InputLabel id="demo-simple-select-standard-label">Are you most interested in saving money month to month, owning your own power, or other?</InputLabel>
        <Select
          name="buy-or-rent" id="buy-or-rent" required="true"
          labelId="demo-simple-select-standard-label"
          label=""
        >
          <MenuItem value="Saving money month to month">Saving money month to month</MenuItem>
          <MenuItem value="Owning your own power">Owning your own power</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
    </FormControl>
  </Grid>
  <br/> */}
  <FormControl fullwidth variant="standard" sx={{ m: 1, width: 1 }}>
    <TextField
          rows="2" 
          name="message" 
          id="message"
          label="Additional comments/questions"
          placeholder=""
          multiline
          variant="standard"
        />
    
  </FormControl>
  <br/>
  <Button variant="contained" type="submit" value="Send Responses"> Finish</Button>
</form>


      
    </React.Fragment>
  );
}