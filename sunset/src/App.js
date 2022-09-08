import './App.css';
import React, { Component }  from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  HashRouter,
  Link,
  useRouteMatch,
  useParams 
} from 'react-router-dom';

import theme from './theme.js'

import {
  Grid,
  Box,
  Typography,
  Container,
  ThemeProvider,
  Button,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  OutlinedInput 
} from '@mui/material'

import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header'
import Sidenav from "./components/Sidenav";
import Forms from "./components/Forms"
import UnknownPage from './components/404';
import Layout from "./pages/Layout";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Pricing from './pages/Pricing';
import Form from "./pages/Form";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  return (
      <Box className="App">
        {/* <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* <header>
          <Sidenav />
          
            <Header />
          
        </header> */}
        {/* <Link to="/forms"></Link>

        <div className="App">
          <Button variant="contained" color="primary">
          <Link to="/Home"> Home page</Link>
           
          </Button>
        </div>

        <div className="App">
          <Button variant="contained" color="primary">
          <Link to="/"> 404</Link>
           
          </Button>
        </div>
        <FormControl>
          <InputLabel htmlFor="component-outlined">Email address</InputLabel>
          <OutlinedInput  id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl> */}

        {/* <Box sx={{
          px: 2,
          pt: '55px',
          zIndex: 1,
        }}> */}
          <Routes>
            {/* <Route path="/" element={<Layout />}> */}
              <Route index element={<Home />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/form" element={<Form />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            {/* </Route> */}
          </Routes>
        {/* </Box> */}
        {/* </ThemeProvider> */}
        {/* <footer>
          <Footer></Footer>
        </footer> */}
        
      </Box>
      
  );
}

export default App;
