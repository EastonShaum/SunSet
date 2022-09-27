import React from 'react';
import { 
  Link, Redirect 
} from "react-router-dom";

import Footer from '../components/Footer';
import Pricing from './Pricing';
import SolarForm from './../components/Forms/Solar Form';
import Desktop from '../components/Desktop';

import {
  Grid,
  Box,
  Typography,
} from '@mui/material'

export default function Home({ page }) {
  
  return (
    <Box>
      <Grid
        justifyContent="center"
        sx={{
          width: '100%',
          padding: 0
        }}
      >
        <Grid >

          
          {/* <Box>This is the home page</Box> */}
          {/* <Link to="/form">Form page</Link> */}
          {/* <Link to="/pricing">Pricing </Link> */}
          {/* <Link to="/about">About page</Link> */}
          {/* <Link to="/contact">Contact page</Link> */}
          {/* <Link to="/404">404 page</Link> */}
        {/* <p> can I add to this?</p> */}

        <Desktop/>

        <SolarForm/>
        </Grid>
      </Grid>
      
    </Box>
  )
}