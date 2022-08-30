import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import { Routes, Route, Link, Switch, useLocation } from 'react-router-dom';

import theme from './theme.js'

import {
  Grid,
  Box,
  Typography,
  ThemeProvider,
} from '@mui/material'

import CssBaseline from '@mui/material/CssBaseline';
//import Header from './components/Header'
//import Sidenav from "./components/Sidenav";
import UnknownPage from './components/404';

function App() {
  return (
      <Box className="App">
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Box sx={{
          px: 2,
          pt: '55px',
          zIndex: 1,
        }}>
          <Routes>
            <Route exact path="/" component={UnknownPage} ></Route>
            {/* <Route exact path="/new-recipe" component={NewRecipePage}></Route>
            <Route exact path="/recipe/:id" component={ViewRecipe}></Route>
            <Route exact path="/recipe/:id/edit" component={EditRecipe}></Route>
            <Route exact path="/my-kit" component={MyKit}></Route>
            <Route exact path="/discover" component={RecipeFeed}></Route>
            <Route exact path="/login" ><LoginSignup page={'login'} /></Route>
            <Route exact path="/signup" ><LoginSignup page={'signup'} /></Route> */}
            <Route component={UnknownPage}/>
          </Routes>
        </Box>
        </ThemeProvider>
      </Box>
  );
}

export default App;
