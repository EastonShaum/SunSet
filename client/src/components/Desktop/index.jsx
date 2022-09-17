import LeadForm from "../LeadForm";
import "./Desktop.css";


//Images
import funnelPerson2Png1 from '../../static/img/funnel-person-2-png-1-1@2x.png'
import solarPanelsWhite from '../../static/img/solar-panels-white-background-1-1@2x.png'
import marbleBackgroundImage1 from '../../static/img/marble-background-image-1-1@1x.png'
import businessManSuitPng1 from '../../static/img/business-man-suit-png-1-1@2x.png'
//import solarPanelsWhite from '../../static/img/solar-panels-white-background-1-1@2x.png'

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import KeyIcon from '@mui/icons-material/Key';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const cards = [1, 2, 3];

const theme = createTheme();

export default function Desktop(props) {
  const {
    saveMoneyAndOwnY,
    solarEnergy,
    bookConsultation,
    spanText1,
    spanText2,
    spanText3,
    duringThisFreePre,
    moneySymbolPaid1,
    iconKey,
    taxReceiptIcon1,
    costSavings,
    ownership,
    taxSavings,
    wellDiscussHowSo,
    whyHomeownersAreC,
    spanText4,
    spanText5,
    solarProfessional,
    line1,
    x5YearsExperience,
    howYouCanApplyYo,
    spanText6,
    spanText7,
    spanText8,
    solarPanelsWhiteBackground1,
  } = props;


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'primary.dark',
            pt: 8,
            pb: 6,
          }}
        >
          <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
          <Container maxWidth="sm">
          <Typography
              component="h4"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Save Money and Own Your Power Today Through
            </Typography>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Solar Energy
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Sign up for a FREE consultation and find out how other homeowners are saving money through solar.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
            </Stack>
            
          </Container>
          <Container>
            <img className="" src={funnelPerson2Png1} />
          </Container>
          </Stack>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}

          <Box text-align="center">
            <Typography gutterBottom variant="h5" component="h2">
              DURING THIS FREE PRESENTATION YOU WILL LEARN ABOUT
            </Typography>
          </Box>
          <br></br>
          <Grid container spacing={4}>
            
              <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <Box text-align="center">
                    <AttachMoneyIcon  sx={{ fontSize: 80 }} />
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cost Savings
                    </Typography>
                    <Typography>
                      We’ll discuss how solar is used as a tool to save on monthly expenses and curb inflation.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">View</Button>
                    <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>

              <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <Box text-align="center">
                    <KeyIcon sx={{ fontSize: 80 }} />
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Ownership
                    </Typography>
                    <Typography>
                      Why homeowners are choosing to own thier power vs purchase agreements.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    
                  </CardActions>
                </Card>
              </Grid>

              <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <Box text-align="center">
                    <ReceiptLongIcon  sx={{ fontSize: 80 }} />
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Tax Savings
                    </Typography>
                    <Typography>
                      How you can apply your tax credits for additional savings.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    
                  </CardActions>
                </Card>
              </Grid>

          </Grid>

          
        </Container>
        
      </main>
    </ThemeProvider>
  );
}


function Desktop1(props) {
  const {
    saveMoneyAndOwnY,
    solarEnergy,
    bookConsultation,
    spanText1,
    spanText2,
    spanText3,
    duringThisFreePre,
    moneySymbolPaid1,
    iconKey,
    taxReceiptIcon1,
    costSavings,
    ownership,
    taxSavings,
    wellDiscussHowSo,
    whyHomeownersAreC,
    marbleBackgroundImage1,
    spanText4,
    spanText5,
    solarProfessional,
    line1,
    x5YearsExperience,
    howYouCanApplyYo,
    spanText6,
    spanText7,
    spanText8,
    solarPanelsWhiteBackground1,
  } = props;

  return (
    <Box>
      <Grid>

      </Grid>
    <div className="container-center-horizontal">
      <div className="desktop screen">
        <div className="flex-col">
          <div className="overlap-group6-1">
            <div className="first-section-1"></div>
            <div className="save-money-and-own-y-1">{saveMoneyAndOwnY}</div>
            <div className="solar-energy-1">{solarEnergy}</div>
            <div className="overlap-group-2">
              <div className="book-consultation-1 valign-text-middle opensans-normal-navy-blue-24px">
                {bookConsultation}
              </div>
            </div>
            <p className="sign-up-for-a-free-c-1 valign-text-middle opensans-normal-white-16px">
              <span>
                <span className="opensans-normal-white-16px">{spanText1}</span>
                <span className="opensans-bold-white-16px">{spanText2}</span>
                <span className="opensans-normal-white-16px">{spanText3}</span>
              </span>
            </p>
            <img className="funnel-person-2-png-1-1" src={funnelPerson2Png1} />
          </div>
          <div className="during-this-free-pre-1 opensans-bold-black-32px">{duringThisFreePre}</div>
          <div className="flex-row">
            <Grid container spacing={8}>
              {/* <Card>
                <AttachMoneyIcon  sx={{ fontSize: 80 }} />
                <div className="cost-savings-1">{costSavings}</div>
                <div className="well-discuss-how-so-1">{wellDiscussHowSo}</div>
              </Card>

              <Card>
                <KeyIcon sx={{ fontSize: 80 }} />
                <div className="ownership-2">{ownership}</div>
                <div className="why-homeowners-are-c-2">{whyHomeownersAreC}</div>
              </Card>

              <Card>
                <ReceiptLongIcon  sx={{ fontSize: 80 }} />
                <div className="tax-savings-2">{taxSavings}</div>
                <div className="how-you-can-apply-yo-2">{howYouCanApplyYo}</div>
              </Card> */}

            </Grid>
          </div>
        </div>
        <div className="flex-row-1 opensans-semi-bold-navy-blue-28px">
          <div className="cost-savings-1">{costSavings}</div>
          <div className="ownership-2">{ownership}</div>
          <div className="tax-savings-2">{taxSavings}</div>
        </div>
        <div className="overlap-group8 opensans-normal-black-24px">
          <div className="well-discuss-how-so-1">{wellDiscussHowSo}</div>
          <div className="overlap-group7-1">
            <div className="why-homeowners-are-c-2">{whyHomeownersAreC}</div>
            <img className="marble-background-image-1" src={marbleBackgroundImage1} />
            <div className="meet-john-section-1">
              <h1 className="title">
                <span className="span0">{spanText4}</span>
                <span className="span1-2">{spanText5}</span>
              </h1>
              <div className="overlap-group1-2">
                <div className="solar-professional-1">{solarProfessional}</div>
                <img className="line-1-1" src={line1} />
              </div>
              <div className="x5-years-experience-1">{x5YearsExperience}</div>
            </div>
            <img className="business-man-suit-png-1-1" src={businessManSuitPng1} />
          </div>
          <div className="how-you-can-apply-yo-2">{howYouCanApplyYo}</div>
        </div>
        <div className="going-green-has-never-been-this-easy-1 opensans-normal-white-36px-2">
          <span className="opensans-normal-black-36px">{spanText6}</span>
          <span className="opensans-normal-forest-green-36px">{spanText7}</span>
          <span className="opensans-normal-black-36px">{spanText8}</span>
        </div>
        <LeadForm />
        <img className="solar-panels-white-background-1-1" src={solarPanelsWhite} />
      </div>
    </div>
    </Box>
  );
}

//export default Desktop;
