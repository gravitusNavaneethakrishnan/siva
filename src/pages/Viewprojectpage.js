import { AppBar, Stack, Grid, Typography, Box, Toolbar, ListItem, IconButton, Drawer } from '@mui/material';
import React, { useState } from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';
import CloseIcon from '@mui/icons-material/Close';
import sivakamu from '../images/Sivakamu.svg';
import img3 from '../images/img3.svg';
import { bgBlur } from '../utils/cssStyles';

const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  backgroundColor: '#000',
  [theme.breakpoints.up('lg')]: {
    // width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const Viewprojectpage = () => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const toggleMobileDrawer = () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };

  return (
    <>
      <StyledRoot>
        <StyledToolbar>
          <ListItem>
            <Stack component={RouterLink} to="/" duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <img src={sivakamu} alt='Sivakamu' />
            </Stack>
          </ListItem>
          <Box sx={{ flexGrow: 1 }} />
          <Stack
            direction='row'
            sx={{ display: { xs: 'none', lg: 'flex' } }}
            alignItems="center"
            spacing={{
              xs: 0.5,
              sm: 1,
            }}
          >
            <ListItem>
              <Typography component={RouterLink} to="/" variant='body1' sx={{ color: '#E8E8E8', cursor: 'pointer', textDecoration: 'none', }}>
                Home
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={RouterLink} to="/" variant='body1' sx={{ color: '#E8E8E8', cursor: 'pointer', textDecoration: 'none', }}>
                About
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={RouterLink} to="/" variant='body1' sx={{ color: '#E8E8E8', cursor: 'pointer', textDecoration: 'none', }}>
                Services
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={RouterLink} to="/" variant='body1' sx={{ color: '#E8E8E8', cursor: 'pointer', textDecoration: 'none', }}>
                Projects
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={RouterLink} to="/" variant='body1' sx={{ color: '#E8E8E8', cursor: 'pointer', textDecoration: 'none', }}>
                Contact
              </Typography>
            </ListItem>
          </Stack>
          {/* For mobile view, show a menu icon that opens the drawer */}

          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleMobileDrawer}
            sx={{ display: { xs: 'block', lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </StyledToolbar>
      </StyledRoot>

      <Drawer
        anchor="right"
        open={isMobileDrawerOpen}
        onClose={toggleMobileDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: '250px',
            backgroundColor: '#000', // Add the background color here
          },
        }}
      >
        <Stack alignItems='end' pt={2} pr={2}>
          <IconButton
            onClick={toggleMobileDrawer}
            color='#fff'
          >
            <CloseIcon />
          </IconButton>
        </Stack>

        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
          sx={{ mt: '20px', paddingLeft: '12px' }}
        >
          <ListItem>
            <Typography component={RouterLink} to="/" variant='body1' sx={{ color: '#E8E8E8', cursor: 'pointer', textDecoration: 'none', }}>
              Home
            </Typography>
          </ListItem>
          <ListItem>
            <Typography component={RouterLink} to="/" variant='body1' sx={{ color: '#E8E8E8', cursor: 'pointer', textDecoration: 'none', }}>
              About
            </Typography>
          </ListItem>
          <ListItem>
            <Typography component={RouterLink} to="/" variant='body1' sx={{ color: '#E8E8E8', cursor: 'pointer', textDecoration: 'none', }}>
              Services
            </Typography>
          </ListItem>
          <ListItem>
            <Typography component={RouterLink} to="/" variant='body1' sx={{ color: '#E8E8E8', cursor: 'pointer', textDecoration: 'none', }}>
              Projects
            </Typography>
          </ListItem>
          <ListItem>
            <Typography component={RouterLink} to="/" variant='body1' sx={{ color: '#E8E8E8', cursor: 'pointer', textDecoration: 'none', }}>
              Contact
            </Typography>
          </ListItem>
        </Stack>
      </Drawer>
      {/* <AppBar sx={{
      boxShadow: 'none',
      backgroundColor: '#000',
      height: '60px'
    }}>
      <Stack pt={1} pl={4} component={RouterLink} to="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
        <img src={sivakamu} alt='Sivakamu' width={120} />
      </Stack>
    </AppBar> */}
      <Grid pt={14} sx={{
        backgroundColor: '#DE9C4D'
      }}>
        <Stack pb={2} alignItems='center' justifyContent='center' textAlign='center' >
          <Typography variant='title1' sx={{ color: '#E8E8E8' }}>
            Gravitus Mobile App
          </Typography>
        </Stack>
      </Grid>
      <Grid pt={3} sx={{
        backgroundColor: '#000'
      }}>
        <Stack pb={3} spacing={3} alignItems='center' justifyContent='center' textAlign='center' >
          <img src={img3} alt='img3' />
          <Typography variant='body1' sx={{ color: '#E8E8E8' }}>
            Lorem ipsum dolor sit amet consectetur. Massa sit nunc curabitur<br /> molestie donec id eleifend
          </Typography>
        </Stack>
      </Grid>
      <Grid pt={3} pl={8} pr={15} pb={8} sx={{
        backgroundColor: '#000'
      }}>
        <Stack pb={3} spacing={3} alignItems='start' justifyContent='start' textAlign='start' >
          <Typography variant='body1' sx={{ color: '#E8E8E8' }}>
            Role:
            UX/UI Designer
          </Typography>
          <Typography variant='body1' sx={{ color: '#E8E8E8' }}>
            Tools:
            Figma, Adobe Photoshop, Adobe Illustrator, Iconify
          </Typography>
          <Typography variant='body1' sx={{ color: '#E8E8E8' }}>
            Timeline:
            6 Months (August 2021 - January 2022)
          </Typography>
          <Stack spacing={2} pt={3}>
            <Typography variant='subbody' sx={{ color: '#E8E8E8' }}>
              The Proposal
            </Typography>
            <Typography variant='body1' sx={{ color: '#E1E1E1' }} >
              Lorem ipsum dolor sit amet consectetur. Massa sit nunc curabitur molestie donec id eleifend Lorem ipsum dolor sit amet consectetur. Massa sit nunc curabitur molestie donec id eleifend Lorem ipsum dolor sit amet consectetur. Massa sit nunc curabitur molestie donec id eleifendLorem ipsum dolor sit amet consectetur. Massa sit nunc curabitur molestie donec id eleifend
            </Typography>
          </Stack>
          <Stack spacing={2} pt={3}>
            <Typography variant='subbody' sx={{ color: '#E8E8E8' }}>
              Key Objective
            </Typography>
            <Typography variant='body1' sx={{ color: '#E1E1E1' }} >
              Lorem ipsum dolor sit amet consectetur. Massa sit nunc curabitur molestie donec id eleifend Lorem ipsum dolor sit amet consectetur. Massa sit nunc curabitur molestie donec id eleifend Lorem ipsum dolor sit amet consectetur. Massa sit nunc curabitur molestie donec id eleifendLorem ipsum dolor sit amet consectetur. Massa sit nunc curabitur molestie donec id eleifend
            </Typography>
          </Stack>


        </Stack>
        <Stack pt={3} pb={3} spacing={3} alignItems='center' justifyContent='center' textAlign='center' >
          <img src={img3} alt='img3' />
        </Stack>
        <Stack spacing={2} pt={3}>
          <Typography variant='subbody' sx={{ color: '#E8E8E8' }}>
            Key Objective
          </Typography>
          <Typography variant='body1' sx={{ color: '#E1E1E1' }} >
            Lorem ipsum dolor sit amet consectetur. Massa sit nunc curabitur molestie donec id eleifend Lorem ipsum dolor sit amet consectetur. Massa sit nunc curabitur molestie donec id eleifend Lorem ipsum dolor sit amet consectetur. Massa sit nunc curabitur molestie donec id eleifendLorem ipsum dolor sit amet consectetur. Massa sit nunc curabitur molestie donec id eleifend
          </Typography>
        </Stack>
      </Grid>
    </>
  )
}

export default Viewprojectpage;
