import { AppBar, Box, Button, Drawer, Grid, IconButton, ListItem, Stack, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import promo1 from '../images/Gravitus_Web_Promo.png';
import img3 from '../images/Gravitus_web_promo1.jpg';
import sivakamu from '../images/Sivakamu.svg';
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

const GravitusWeb = () => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const toggleMobileDrawer = () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };

  return (
    <>
      <StyledRoot>
        <StyledToolbar>
          <ListItem>
            <Stack component={RouterLink} to="/Sivakamu" duration={10} style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <img src={sivakamu} alt='Sivakamu' />
            </Stack>
          </ListItem>
          <Box sx={{ flexGrow: 1 }} />
          <Stack
            direction='row'
            sx={{ display: { xs: 'none', lg: 'flex' } }}
            alignItems="end"
            spacing={{
              xs: 0.5,
              sm: 1,
            }}
          >
            <Button component={RouterLink} to="/Sivakamu" disableRipple variant='viewprojectbutton'>
              <Typography variant='body1' sx={{ color: '#E8E8E8', cursor: 'pointer', textDecoration: 'none', }}>
                Go to Home
              </Typography>
            </Button>


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
        <Grid pt={2} sx={{
          backgroundColor: 'transparent'
        }} >
          <Stack pb={2} alignItems='center' justifyContent='center' textAlign='center'>
            <Typography variant='title1' sx={{ color: '#E8E8E8' }}>
              Gravitus Website
            </Typography>
          </Stack>
        </Grid>
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
            <Typography component={RouterLink} to="/Sivakamu" variant='body1' sx={{ color: '#E8E8E8', cursor: 'pointer', textDecoration: 'none', }}>
              Go to Home
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

      <Grid pt={24} pl={{ xs: 2, sm: 4, md: 4, lg: 8 }} pr={{ xs: 2, sm: 4, md: 4, lg: 8 }} sx={{
        backgroundColor: '#000'
      }}>
        <Stack spacing={3} alignItems='center' justifyContent='center' textAlign='center' >
          <Box width={700} display='flex' alignItems='center' justifyContent='center' >
            <img src={promo1} alt='promo1' style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 30 }} />
          </Box>
          <Button disableRipple variant='downloadresumebutton'>
            <a href={process.env.REACT_APP_GRAVITUS_URL}
              style={{ color: '#E8E8E8', textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer">
              Go to Gravitus
            </a>
          </Button>
        </Stack>
      </Grid>
      <Grid pt={3} pl={{ xs: 2, sm: 4, md: 4, lg: 8 }} pr={{ xs: 2, sm: 4, md: 4, lg: 8 }} pb={8} sx={{
        backgroundColor: '#000'
      }}>
        <Stack spacing={3} alignItems='start' justifyContent='start' textAlign='start' >
          <Stack direction="row" spacing={2} justifyContent='center'>
            <Typography variant='body1' sx={{ color: '#E8E8E8' }}>
              Role:
            </Typography>
            <Typography variant='body1' sx={{ color: '#DE9C4D' }}>
              Front-End Developer
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} justifyContent='center'>
            <Typography variant='body1' sx={{ color: '#E8E8E8' }}>
              Framework & Tools:
            </Typography>
            <Typography variant='body1' sx={{ color: '#DE9C4D' }}>
              React js, HTML, CSS, Material UI, Redux Hooks, SWR, GITHUB, Postman, Figma, Iconify
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} justifyContent='center'>
            <Typography variant='body1' sx={{ color: '#E8E8E8' }}>
              Timeline:
            </Typography>
            <Typography variant='body1' sx={{ color: '#DE9C4D' }}>
              6 Months (May 2023 - December 2023)
            </Typography>
          </Stack>
          <Stack spacing={2} pt={3}>
            <Typography variant='h5' sx={{ color: '#E8E8E8' }}>
              The Proposal
            </Typography>
            <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
              We are thrilled to present our proposal to develop the Gravitus Crypto Exchange website.
              At Gravitus, we aim to merge innovation with security to provide users with a seamless and
              intuitive platform for trading digital assets.
            </Typography>
          </Stack>
          <Stack spacing={2} pt={3}>
            <Typography variant='h5' sx={{ color: '#E8E8E8' }}>
              Key Objective
            </Typography>
            <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
              The company currently has foundational features planned but requires a
              comprehensive website for crypto trading targeting a release date of January 2024.
              <br />
              <br />
              The product suite should include a user-friendly trading platform, secure data management features,
              an API for backend data handling, and real-time data provision through a game engine.
              <br />
              Alongside the website development, Gravitus Exchange will also need branding,
              logos, and a revamped design for a cohesive user experience.
            </Typography>
          </Stack>


        </Stack>
        <Stack pt={8} pb={8} spacing={3} alignItems='center' justifyContent='center' textAlign='center'>
          <Box width={{ xs: '90%', sm: '80%', md: 700 }} display='flex' alignItems='center' justifyContent='center' >
            <img src={img3} alt='img3' style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 30 }} />
          </Box>
        </Stack>
        <Stack spacing={2} >
          <Typography variant='h5' sx={{ color: '#E8E8E8' }}>
            Solution
          </Typography>
          <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
            Guiding a proficient technical team, I oversaw the end-to-end development of Gravitus Crypto Exchange,
            with a focus on front-end design, API integration, and implementing business logics. Throughout the project,
            I actively contributed to front-end development tasks, ensuring seamless user experiences. Simultaneously,
            I managed the coordination of API integration to enhance functionality.
            <br /><br />
            Additionally, I spearheaded efforts to establish a cohesive web presence and execute effective marketing campaigns,
            solidifying our brand identity. Furthermore, I played a pivotal role in shaping go-to-market strategies,
            Executive Summaries, Pitch Decks, and narratives aimed at engaging potential investors and stakeholders.
          </Typography>
        </Stack>
        <Stack spacing={2} pt={8}>
          <Typography variant='h5' sx={{ color: '#E8E8E8' }}>
            Design & Development Process
          </Typography>
          <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
            💭 Ideation & Solution Exploration
            <br />
            🎨 Visual Design & Prototype Development
            <br />
            💻 Front-End Development & Business Logic Integration
            <br />
            🛠️ Testing & Validation
            <br />
            🚀 Launch & Deployment
          </Typography>
        </Stack>
        <Stack spacing={2} pt={8}>
          <Typography variant='h5' sx={{ color: '#E8E8E8' }}>
            <i>Ideation & Solution Exploration </i>💭
          </Typography>
          <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
            Upon engagement with the founders of Gravitus Crypto Exchange,
            we embarked on brainstorming sessions to explore potential solutions for the platform.
          </Typography>
        </Stack>
        <Stack spacing={2} pt={8}>
          <Typography variant='h5' sx={{ color: '#E8E8E8' }}>
            <i>Visual Design & Prototype Development </i>🎨
          </Typography>
          <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
            With a deep understanding of user needs and market trends, we prioritized the creation of visually captivating UI designs
            and prototypes for the Gravitus Crypto Exchange website, ensuring a smooth and engaging user experience.
          </Typography>
        </Stack>
        <Stack spacing={2} pt={8}>
          <Typography variant='h5' sx={{ color: '#E8E8E8' }}>
            <i>Front-End Development & Business Logic Integration </i>💻
          </Typography>
          <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
            Following the approval of the UI designs, our focus shifted to front-end development.
            <br /><br />
            Leveraging React JS, Material UI, Redux hooks concepts, and SWR, we meticulously crafted the user interface to
            ensure a seamless and intuitive browsing experience. Incorporating features such as KYC verification,
            spot and peer-to-peer trading functionalities, and a secure wallet connection,
            we implemented robust business logics to enhance user interactions and security measures.
            Our development process prioritized performance optimization, scalability, and adherence to industry
            best practices to deliver a high-quality product.
          </Typography>
        </Stack>
        <Stack spacing={2} pt={8}>
          <Typography variant='h5' sx={{ color: '#E8E8E8' }}>
            <i>Testing & Validation </i>🛠️
          </Typography>
          <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
            After completing the front-end development, we conducted rigorous testing to validate
            the functionality and usability of the Gravitus Crypto Exchange website,
            ensuring a seamless user experience across different devices and browsers.
          </Typography>
        </Stack>
        <Stack spacing={2} pt={8}>
          <Typography variant='h5' sx={{ color: '#E8E8E8' }}>
            <i>Launch & Deployment </i>🚀
          </Typography>
          <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
            Once testing was successfully completed, we proceeded with the launch and
            deployment of the Gravitus Crypto Exchange website,
            ensuring a smooth transition and seamless user onboarding process.
          </Typography>
        </Stack>
        <Stack spacing={2} pt={8}>
          <Typography variant='h5' sx={{ color: '#DE9C4D' }}>
            Key Takeaways
          </Typography>
          <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
            ✨ Seamless Integration of Technologies: Successfully integrated React JS, Material UI, Redux hooks concepts, and SWR to create a robust and efficient user interface.
            <br /><br />
            🚀 Enhanced User Experience: Implemented features such as KYC verification, spot and peer-to-peer trading functionalities, and a secure wallet connection to enhance user interactions and ensure a secure trading environment.
            <br /><br />
            📈 Adherence to Best Practices: Prioritized performance optimization, scalability, and adherence to industry best practices throughout the development process to deliver a high-quality product.
            <br /><br />
            🤝 Collaborative Approach: Adopted a collaborative approach with the development team, ensuring effective communication and alignment of goals throughout the project lifecycle.
            <br /><br />
            🎯 Meeting Business Objectives: Successfully met the business objectives of Gravitus Exchange by delivering a user-friendly, secure, and feature-rich platform for cryptocurrency trading.
            <br /><br />
            📚 Continuous Learning and Improvement: Embraced a culture of continuous learning and improvement, staying updated with the latest technologies and incorporating feedback to enhance the platform's functionality and user experience.
          </Typography>
        </Stack>
        <Grid pt={10} sx={{
          backgroundColor: 'transparent'
        }} >
          <Stack pb={2} alignItems='center' justifyContent='center' textAlign='center'>
            <Typography variant='body3' sx={{ color: '#E8E8E8' }}>
              🌟 Thank you! Check out my other projects! 🌟
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default GravitusWeb;
