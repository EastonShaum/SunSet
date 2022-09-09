import React from 'react';
import { useLocation } from 'react-router-dom';

//import { useDispatch } from "react-redux";
//import { sideNavVisible } from "../../utils/globalSlice.js"
import { Link } from "react-router-dom";

//import Auth from '../../utils/auth'

import {
  Box,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
} from '@mui/material'

import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';

import { MdMenu, MdAdd } from "react-icons/md";

export default function Header() {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Solar Mountain
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              to=""
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              to=""
              sx={{ my: 1, mx: 1.5 }}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.primary"
              to=""
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
         
        </Toolbar>
      </AppBar>
    </Box>
  )
}