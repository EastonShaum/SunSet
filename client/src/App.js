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
import Desktop from "./components/Desktop";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Pricing from './pages/Pricing';
import Form from "./pages/Form";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import SolarForm from './components/Forms/Solar Form';

function App() {
  return (
      <Box className="App">
        <Header />
          <Routes>
            <Route path="/desktop" element={<Desktop {...desktopData} />} />
            
           
              <Route index element={<Home />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/solarForm" element={<SolarForm />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
       
        <Footer/>
      </Box>
      
  );
}

export default App;



//Add all the data for the different page sizes and other stuff




const phoneData = {
  saveMoneyAndOwnY: "Save Money and Own Your Power Today Through",
  spanText1: "Solar Energy",
  spanText2: "",
  bookConsultation: "Book Consultation",
  spanText3: "Sign up for a ",
  spanText4: "FREE",
  spanText5: " consultation and find out how other homeowners are saving money through solar.",
  funnelPerson2Png1: "/img/funnel-person-2-png-1-1@2x.png",
  duringThisFreePre: "DURING THIS FREE PRESENTATION YOU WILL LEARN ABOUT",
  moneySymbolPaid1: "/img/money-symbol-paid-1-1@2x.png",
  costSavings: "Cost Savings",
  wellDiscussHowSo: "We’ll discuss how solar is used as a tool to save on monthly expenses and curb inflation.",
  overlapGroup1: "/img/marble-background-image-1-1@1x.png",
  businessManSuitPng1: "/img/business-man-suit-png-1-1@2x.png",
  spanText6: "Meet ",
  spanText7: "John",
  solarProfessional: "Solar Professional",
  line1: "/img/line-1-1@2x.png",
  x5YearsExperience: <React.Fragment>5+ years experience consulting solar.<br />Helped install over 100 systems in the Bay Area.<br />Saved customers an average of $1440 a year on their power bills.<br />Helped reduce over 100,000 lbs of CO2 emissions.<br />Helped customers be able to use an additional 15% extra electricity without additional cost.</React.Fragment>,
  spanText8: "Going ",
  spanText9: "Green",
  spanText10: " has never been this easy.",
  leaveYourInfoToScheduleACall: "Leave your Info to schedule a call.",
  spanText11: "    ",
  spanText12: "Name",
  email: "    Email",
  phone: "    Phone",
  message: "  Message",
  bookAConsultation: "Book a Consultation",
  solarPanelsWhiteBackground1: "/img/solar-panels-white-background-1-1@2x.png",
};

const desktopData = {
  saveMoneyAndOwnY: "Save Money and Own Your Power Today Through",
  solarEnergy: "Solar Energy",
  bookConsultation: "Book Consultation",
  spanText1: "Sign up for a ",
  spanText2: "FREE",
  spanText3: " consultation and find out how other homeowners are saving money through solar.",
  funnelPerson2Png1: "/img/funnel-person-2-png-1@1x.png",
  duringThisFreePre: "DURING THIS FREE PRESENTATION YOU WILL LEARN ABOUT",
  moneySymbolPaid1: "..static/img/money-symbol-paid-1@2x.png",
  iconKey: "/img/key-icon-1@2x.png",
  taxReceiptIcon1: "/img/tax-receipt-icon-1@2x.png",
  costSavings: "Cost Savings",
  ownership: "Ownership",
  taxSavings: "Tax Savings",
  wellDiscussHowSo: "We’ll discuss how solar is used as a tool to save on monthly expenses and curb inflation.",
  whyHomeownersAreC: "Why homeowners are choosing to own thier power vs purchase agreements.",
  marbleBackgroundImage1: "/img/marble-background-image-1@1x.png",
  spanText4: "Meet ",
  spanText5: "John",
  solarProfessional: "Solar Professional",
  line1: "/img/line-1@2x.png",
  x5YearsExperience: <React.Fragment>5+ years experience consulting solar.<br />Helped install over 100 systems in the Bay Area.<br />Saved customers an average of $1440 a year on their power bills.<br />Helped reduce over 100,000 lbs of CO2 emissions.<br />Helped customers be able to use an additional 15% extra electricity without additional cost.</React.Fragment>,
  businessManSuitPng1: "/img/business-man-suit-png-1@1x.png",
  howYouCanApplyYo: "How you can apply your tax credits for additional savings.",
  spanText6: "Going ",
  spanText7: "Green",
  spanText8: " has never been this easy.",
  solarPanelsWhiteBackground1: "",
};

const leadForm2Data = {
  className: "lead-form-2",
};

const largeTabletData = {
  saveMoneyAndOwnY: "Save Money and Own Your Power Today Through",
  solarEnergy: "Solar Energy",
  bookConsultation: "Book Consultation",
  spanText1: "Sign up for a ",
  spanText2: "FREE",
  spanText3: " consultation and find out how other homeowners are saving money through solar.",
  funnelPerson2Png1: "/img/funnel-person-2-png-1-2@1x.png",
  duringThisFreePre: "DURING THIS FREE PRESENTATION YOU WILL LEARN ABOUT",
  moneySymbolPaid1: "/img/money-symbol-paid-1-2@2x.png",
  iconKey: "/img/key-icon-1-1@2x.png",
  costSavings: "Cost Savings",
  ownership: "Ownership",
  wellDiscussHowSo: "We’ll discuss how solar is used as a tool to save on monthly expenses and curb inflation.",
  taxReceiptIcon1: "/img/tax-receipt-icon-1-1@2x.png",
  whyHomeownersAreC: "Why homeowners are choosing to own thier power vs purchase agreements.",
  taxSavings: "Tax Savings",
  howYouCanApplyYo: "How you can apply your tax credits for additional savings.",
  overlapGroup1: "/img/marble-background-image-1-2@1x.png",
  businessManSuitPng1: "/img/business-man-suit-png-1-2@1x.png",
  spanText4: "Meet ",
  spanText5: "John",
  solarProfessional: "Solar Professional",
  line1: "/img/line-1@2x.png",
  x5YearsExperience: <React.Fragment>5+ years experience consulting solar.<br />Helped install over 100 systems in the Bay Area.<br />Saved customers an average of $1440 a year on their power bills.<br />Helped reduce over 100,000 lbs of CO2 emissions.<br />Helped customers be able to use an additional 15% extra electricity without additional cost.</React.Fragment>,
  spanText6: "Going ",
  spanText7: "Green",
  spanText8: " has never been this easy.",
  solarPanelsWhiteBackground1: "/img/solar-panels-white-background-1-2@1x.png",
  leadFormProps: leadForm2Data,
};

const benefit22Data = {
  className: "benefit-2-1",
};

const benefit32Data = {
  className: "benefit-3-1",
};

const smallTabletData = {
  saveMoneyAndOwnY: "Save Money and Own Your Power Today Through",
  spanText1: "Solar Energy",
  spanText2: "",
  bookConsultation: "Book Consultation",
  spanText3: "Sign up for a ",
  spanText4: "FREE",
  spanText5: " consultation and find out how other homeowners are saving money through solar.",
  funnelPerson2Png1: "/img/funnel-person-2-png-1-1@2x.png",
  moneySymbolPaid1: "/img/money-symbol-paid-1-2@2x.png",
  costSavings: "Cost Savings",
  wellDiscussHowSo: "We’ll discuss how solar is used as a tool to save on monthly expenses and curb inflation.",
  overlapGroup1: "/img/marble-background-image-1-3@1x.png",
  businessManSuitPng1: "/img/business-man-suit-png-1-3@2x.png",
  spanText6: "Meet ",
  spanText7: "John",
  solarProfessional: "Solar Professional",
  line1: "/img/line-1-3@2x.png",
  x5YearsExperience: <React.Fragment>5+ years experience consulting solar.<br />Helped install over 100 systems in the Bay Area.<br />Saved customers an average of $1440 a year on their power bills.<br />Helped reduce over 100,000 lbs of CO2 emissions.<br />Helped customers be able to use an additional 15% extra electricity without additional cost.</React.Fragment>,
  spanText8: "Going ",
  spanText9: "Green",
  spanText10: " has never been this easy.",
  leaveYourInfoToScheduleACall: "Leave your Info to schedule a call.",
  spanText11: "    ",
  spanText12: "Name",
  email: "    Email",
  phone: "    Phone",
  message: "  Message",
  bookAConsultation: "Book a Consultation",
  solarPanelsWhiteBackground1: "/img/solar-panels-white-background-1-3@1x.png",
  benefit2Props: benefit22Data,
  benefit3Props: benefit32Data,
};













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
