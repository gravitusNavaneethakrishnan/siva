import { AppBar, Box, Button, Drawer, Grid, IconButton, ListItem, Stack, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import img3 from '../images/Gravitus_App_Promo.jpg';
import promo2 from '../images/Gravitus_App_Promo2.jpg';
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
            <Stack component={RouterLink} to="/Sivakamu" duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }}>
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
              Gravitus Mobile App
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
        <Stack pb={3} spacing={3} alignItems='center' justifyContent='center' textAlign='center' >
          <Box width={{ xs: '90%', sm: '80%', md: 700 }} display='flex' alignItems='center' justifyContent='center' >
            <img src={img3} alt='img3' style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 30 }} />
          </Box>
        </Stack>
      </Grid>
      <Grid pt={3} pl={{ xs: 4, sm: 6, md: 8, lg: 32 }} pr={{ xs: 4, sm: 6, md: 8, lg: 32 }} pb={8} sx={{
        backgroundColor: '#000'
      }}>
        <Stack pb={3} spacing={3} alignItems='start' justifyContent='start' textAlign='start' >
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
              Flutter, Dart, Dio, Riverpod State management, Freezed Models, Flutter Secure Storage, Postman, Figma, Iconify
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} justifyContent='center'>
            <Typography variant='body1' sx={{ color: '#E8E8E8' }}>
              Timeline:
            </Typography>
            <Typography variant='body1' sx={{ color: '#DE9C4D' }}>
              5 Months (January 2024 - May 2024)
            </Typography>
          </Stack>
          <Stack spacing={2} pt={3}>
            <Typography variant='h5' sx={{ color: '#E8E8E8' }}>
              The Proposal
            </Typography>
            <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
              We are excited to introduce our proposal for developing the Gravitus Crypto Exchange
              mobile application. At Gravitus, our goal is to blend innovation with security, offering
              users a seamless and intuitive platform for trading digital assets. With our mobile app,
              built using Flutter technology, we aim to revolutionize cryptocurrency trading by providing
              a secure, user-friendly experience across both iOS and Android platforms.
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
        <Stack pt={8} pb={3} spacing={3} alignItems='center' justifyContent='center' textAlign='center' >
          <Box width={{ xs: '90%', sm: '80%', md: 700 }} display='flex' alignItems='center' justifyContent='center' >
            <img src={promo2} alt='Gravitus App Promo 2' style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 30 }} />
          </Box>
        </Stack>
        <Stack spacing={2} pt={8}>
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
            🔍 Research & Analysis
            <br />
            📔 Brand Identity Formation
            <br />
            🎨 Visual Design & Prototype Development
            <br />
            🏗️ Architecture & User Experience Planning
            <br />
            💻 Front-End Development & Business Logic Integration
            <br />
            🛠️ Testing & Handoff
            <br />
            🚀 Launch Strategy & Business Development
          </Typography>
        </Stack>
        <Stack spacing={2} pt={8}>
          <Typography variant='h5' sx={{ color: '#E8E8E8' }}>
            <i>Ideation & Solution Exploration </i>💭
          </Typography>
          <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
            Upon engagement with the founders of Gravitus Crypto Exchange,
            we embarked on brainstorming sessions to explore potential solutions for the mobile trading app.
          </Typography>
        </Stack>
        <Stack spacing={2} pt={8}>
          <Typography variant='h5' sx={{ color: '#E8E8E8' }}>
            <i>Research & Analysis </i>🔍
          </Typography>
          <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
            Collaborating closely with the team, we conducted extensive research to comprehend the challenges and
            opportunities within the cryptocurrency trading market. Leveraging my experience in marketing
            and advertising, I provided invaluable insights to inform our strategy.
          </Typography>
        </Stack>
        <Stack spacing={2} pt={8}>
          <Typography variant='h5' sx={{ color: '#E8E8E8' }}>
            <i>Brand Identity Formation </i>📔
          </Typography>
          <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
            Recognizing the significance of establishing a compelling brand identity,
            I collaborated with the team to create branding elements that resonated with our target audience.
          </Typography>
        </Stack>
        <Stack spacing={2} pt={8}>
          <Typography variant='h5' sx={{ color: '#E8E8E8' }}>
            <i>Visual Design & Prototype Development </i>🎨
          </Typography>
          <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
            With a deep understanding of user needs and market trends, we prioritized the creation of
            visually captivating UI designs and prototypes for the Gravitus Crypto Exchange mobile app,
            ensuring a smooth and engaging user experience.
          </Typography>
        </Stack>
        <Stack spacing={2} pt={8}>
          <Typography variant='h5' sx={{ color: '#E8E8E8' }}>
            <i>Architecture & User Experience Planning </i>🏗️
          </Typography>
          <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
            After solidifying the visual design, our focus shifted to crafting a user-centric architecture
            and intuitive design for the Gravitus Crypto Exchange mobile app. I spearheaded the development
            of a comprehensive UX Design Playbook and formulated a timeline and strategy to align with Gravitus' objectives.
          </Typography>
        </Stack>
        <Stack spacing={2} pt={8}>
          <Typography variant='h5' sx={{ color: '#E8E8E8' }}>
            <i>Front-End Development & Business Logic Integration</i> 💻
          </Typography>
          <Stack spacing={1} pl={2}>
            <Typography pb={4} variant='body3' sx={{ color: '#E1E1E1' }}>
              An integral part of our process involved front-end development
              using Flutter and Dart. We utilized Riverpod for efficient state management
              and Freezed models to ensure immutable data structures. The development process included:
            </Typography>

            <Stack spacing={1} pl={2}>
              <Typography variant='h6' sx={{ color: '#DE9C4D' }}>
                API Integration
              </Typography>
              <Typography variant='body3' sx={{ color: '#E1E1E1' }}>
                • Securely integrated APIs using the Dio package for efficient and
                effective network calls. Additionally, we used FlutterSecureStorage to
                manage sensitive data such as user authentication tokens.
              </Typography>

              <Typography variant='h6' sx={{ color: '#DE9C4D' }}>
                Navigation
              </Typography>
              <Typography variant='body3' sx={{ color: '#E1E1E1' }}>
                • Implemented GoRouter for streamlined and efficient navigation,
                enabling seamless transitions between different screens within the app.
              </Typography>

              <Typography variant='h6' sx={{ color: '#DE9C4D' }}>
                Real-Time Updates
              </Typography>
              <Typography variant='body3' sx={{ color: '#E1E1E1' }}>
                • Incorporated Socket.IO client for real-time data updates,
                ensuring users receive the latest market information instantly.
              </Typography>

              <Typography variant='h6' sx={{ color: '#DE9C4D' }}>
                In-App Web Views
              </Typography>
              <Typography variant='body3' sx={{ color: '#E1E1E1' }}>
                • Embedded web views to display dynamic content directly within the app,
                providing a seamless user experience.
              </Typography>

              <Typography variant='h6' sx={{ color: '#DE9C4D' }}>
                Custom UI Components
              </Typography>
              <Typography variant='body3' sx={{ color: '#E1E1E1' }}>
                • Developed a range of customized UI components including buttons, text fields,
                dropdowns, and checkboxes, tailored to the app’s specific requirements and
                ensuring consistency in design.
              </Typography>

              <Typography variant='h6' sx={{ color: '#DE9C4D' }}>
                Key Features Development
              </Typography>
              <Typography variant='body3' sx={{ color: '#E1E1E1' }}>
                • Focused on implementing core functionalities such as KYC verification,
                spot trading, peer-to-peer trading, and secure wallet connections.
                Each feature was meticulously developed to ensure robust performance, security, and user satisfaction.
              </Typography>
            </Stack>
            <Typography pt={4} variant='body3' sx={{ color: '#E1E1E1' }}>
              This comprehensive front-end development approach ensured that the Gravitus Crypto
              Exchange mobile app not only met the highest standards of functionality and security
              but also provided an intuitive and engaging user experience.
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} pt={8}>
          <Typography variant='h5' sx={{ color: '#E8E8E8' }}>
            <i>Testing & Handoff </i>🛠️
          </Typography>
          <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
            Finally, we conducted rigorous testing to validate the functionality and
            usability of the Gravitus Crypto Exchange mobile app before seamlessly handing it off for deployment.
          </Typography>
        </Stack>
        <Stack spacing={2} pt={8}>
          <Typography variant='h5' sx={{ color: '#E8E8E8' }}>
            <i>Launch Strategy & Business Development </i>🚀
          </Typography>
          <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
            In preparation for launch, I took the lead in crafting comprehensive go-to-market strategies and
            developing compelling business narratives aimed at attracting investors and stakeholders.
          </Typography>
        </Stack>
        <Stack spacing={2} pt={8}>
          <Typography variant='h5' sx={{ color: '#DE9C4D' }}>
            Key Takeaways
          </Typography>
          <Typography variant='body3' sx={{ color: '#E1E1E1' }} >
            🚀 Enhanced User Experience: The integration of intuitive navigation and
            real-time updates ensures users have a seamless and engaging experience.
            <br /><br />
            🔒 Robust Security: Implementing FlutterSecureStorage for sensitive data
            management and ensuring secure wallet connections fortified the app's security framework.
            <br /><br />
            📱 Cross-Platform Responsive Design: Utilizing customized UI components like buttons, text fields,
            and dropdowns, we achieved a consistent and visually appealing design that works
            seamlessly on both iOS and Android devices.
            <br /><br />
            ⚙️ Efficient State Management: Leveraging Riverpod for state management and
            Freezed models for immutable data structures contributed to a highly efficient and maintainable codebase.
            <br /><br />
            💡 Feature-Rich Application: Successfully developed key features such as
            spot trading and peer-to-peer trading, providing comprehensive functionality for users.
            Additional features include account verification, two-factor authentication (2FA), and KYC verification.
            <br /><br />
            📊 Seamless API Integration: Utilizing the Dio package for API integration ensured
            efficient network calls, enhancing the overall performance of the app.
            <br /><br />
            🌐 Real-Time Data: Incorporating Socket.IO client for real-time updates provided users with the
            latest market information instantly, making the app highly responsive and user-friendly.
            <br /><br />
            These takeaways highlight the strategic and technical accomplishments achieved during the
            front-end development of the Gravitus mobile app, underscoring the emphasis on user experience,
            security, and feature-rich functionality across both iOS and Android platforms.
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
