import React from 'react';
import { 
  Link, Redirect 
} from "react-router-dom";

import Footer from '../components/Footer';
import Pricing from './Pricing';

import {
  Grid,
  Box,
  Typography,
} from '@mui/material'

export default function Home({ page }) {
  
  return (
    <Box
      // sx={{
      //   margin: 0,
      //   position: 'fixed',
      //   top: 0,
      //   right: 0,
      //   bottom: 0,
      //   left: 0,
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center'
      // }}
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

          
          <Box>This is the home page</Box>
          {/* <Link to="/form">Form page</Link> */}
          <Link to="/pricing">Pricing </Link>
          <Link to="/about">About page</Link>
          <Link to="/contact">Contact page</Link>
          <Link to="/404">404 page</Link>
        </Grid>
        <p> can I add to this?</p>
      </Grid>
      
    </Box>
  )
}