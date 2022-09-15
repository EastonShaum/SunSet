import React from 'react';
import { 
  Link, Redirect 
} from "react-router-dom";



import {
  Grid,
  Box,
  Typography,
} from '@mui/material'


export default function Contact({ page }) {

    // const  { username: userParam } = useParams();
    // If loggedIn token returns the username that matches the userParam, user is redirected to the main page (/my-kit) file
    // console.log(Auth);
    
    return (
      <Box
        sx={{
          margin: 0,
          //position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Grid
          container
          justifyContent="center"
          sx={{
            width: '100%',
            padding: 2
          }}
        >
          <Grid item xs={12} sm={10} md={6} lg={4} xl={4}>
            <Box>This is the Contact page</Box>
            <Link to="/">Home page</Link>
            <Link to="/about">About page</Link>
          </Grid>
        </Grid>
      </Box>
    )
}