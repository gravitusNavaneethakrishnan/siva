import { useEffect, useState } from 'react';
// @mui
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Drawer, IconButton, ListItem, Stack, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
// utils
import { bgBlur } from '../../../utils/cssStyles';
//
import Sivakamu from '../../../images/Sivakamu.svg';

// ----------------------------------------------------------------------

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

function Header() {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const toggleMobileDrawer = () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };

  useEffect(() => {
    scroll.scrollToTop({
      duration: 0,
    });
  }, []);

  return (
    <>
      <StyledRoot>
        <StyledToolbar>
          <ListItem>
            <ScrollLink spy
              smooth
              offset={-100}
              to="home"
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <img src={Sivakamu} alt='Sivakamu' />
            </ScrollLink>
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
              <ScrollLink
                spy
                smooth
                offset={-100}
                to="home"
                duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
                <Typography variant='body1' sx={{ color: '#E8E8E8' }}>
                  Home
                </Typography>
              </ScrollLink>
            </ListItem>
            <ListItem>
              <ScrollLink
                to="about"
                spy
                smooth
                offset={-100}
                duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
                <Typography variant='body1' sx={{ color: '#E8E8E8' }}>
                  About
                </Typography>
              </ScrollLink>
            </ListItem><ListItem>
              <ScrollLink
                to="service"
                spy
                smooth
                offset={-100}
                duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
                <Typography variant='body1' sx={{ color: '#E8E8E8' }}>
                  Disciplines
                </Typography>
              </ScrollLink>
            </ListItem>
            <ListItem>
              <ScrollLink
                to="project"
                spy
                smooth
                offset={-100}
                duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
                <Typography variant='body1' sx={{ color: '#E8E8E8' }}>
                  Projects
                </Typography>
              </ScrollLink>
            </ListItem>
            <ListItem>
              <ScrollLink
                to="contact"
                spy
                smooth
                offset={-100}
                duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
                <Typography variant='body1' sx={{ color: '#E8E8E8' }}>
                  Contact
                </Typography>
              </ScrollLink>
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
            <ScrollLink
              to="home"
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
              <Typography button onClick={toggleMobileDrawer} variant='body1' sx={{ color: '#E8E8E8' }}>
                Home
              </Typography>
            </ScrollLink>
          </ListItem>
          <ListItem>
            <ScrollLink
              to="about"
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
              <Typography button onClick={toggleMobileDrawer} variant='body1' sx={{ color: '#E8E8E8' }}>
                About
              </Typography>
            </ScrollLink>
          </ListItem><ListItem>
            <ScrollLink
              to="service"
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
              <Typography button onClick={toggleMobileDrawer} variant='body1' sx={{ color: '#E8E8E8' }}>
                Services
              </Typography>
            </ScrollLink>
          </ListItem>
          <ListItem>
            <ScrollLink
              to="project"
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
              <Typography button onClick={toggleMobileDrawer} variant='body1' sx={{ color: '#E8E8E8' }}>
                Projects
              </Typography>
            </ScrollLink>
          </ListItem>
          <ListItem>
            <ScrollLink
              to="contact"
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
              <Typography button onClick={toggleMobileDrawer} variant='body1' sx={{ color: '#E8E8E8' }}>
                Contact
              </Typography>
            </ScrollLink>
          </ListItem>
        </Stack>
      </Drawer>
    </>
  );
}

export default Header;
