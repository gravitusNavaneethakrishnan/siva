import { Button, Grid, Stack, Typography } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

import backgroundImage from '../images/Hero_image.jpg';
import './Homepage.css';

const fontSize = "56px";


const centerStyle = {
  left: 0,
  right: 0,
};

const carouselStyle = {
  position: "relative",
  width: "100%",
  textAlign: "center",
  lineHeight: `calc(${fontSize} * 1.5)`,
  height: `calc(${fontSize} * 1.5)`
};

const changeOuterStyle = {
  top: 0,
  left: "46%",
  textAlign: "left",
  height: `calc(${fontSize} * 1.5)`,
  overflow: "hidden",
};

const changeInnerStyle = {
  position: "relative",
  animation: "rotate 8s ease-in-out infinite",
};

// const elementStyle = {
// color: '#FF8A00',
// display: "block",
// fontWeight: 700,
// fontSize: {
//   xs: "1rem",
//   sm: "1.5rem",
//   md: "2rem",
//   lg: "3rem",
//   xl: "4rem",
// },
// };

const keyframesRotate = {
  "0%, 20%": {
    transform: "translateY(0)"
  },
  "25%,45%": {
    transform: `translateY(calc(${fontSize} * -1.5))`
  },
  "50%,70%": {
    transform: `translateY(calc(${fontSize} * -3))`
  },
  // "75%,100%": {
  //   transform: `translateY(calc(${fontSize} * -4.5))`
  // },
  "100%": {
    transform: `translateY(calc(${fontSize} * -3))`
  }
};

const Homepage = () => {
  return (
    <>
      <Grid container
        pt={12} pb={{ xs: 16, lg: 12 }}
        alignItems={{ xs: 'start', lg: 'center' }}
        justifyContent={{ xs: 'center', lg: 'center' }}
        height={{ xs: '400px', lg: '730px' }}
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          // backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat', // Optional: adjust to your needs
          // backgroundPosition: 'right',
          '@media (min-width: 600px)': {
            backgroundSize: '100% auto',
          },
          '@media (min-width: 480px)': {
            backgroundSize: ' ',
          },
          '@media (min-width: 1280px)': {
            backgroundSize: '100% auto',
          },
          '@media (min-width: 768px)': {
            backgroundSize: '',
          },
        }}>
        <Stack alignItems='center' textAlign='center'>
          <Stack direction='row' spacing={4} alignItems='center' textAlign='center'>

            <Typography variant='h1' sx={{
              color: '#fff',
              fontSize: {
                xs: '1rem',   // For extra-small devices (phones)
                sm: '1.5rem', // For small devices (tablets)
                md: '2rem',   // For medium devices (desktops)
                lg: '3rem',   // For large devices (larger desktops)
                xl: '4rem',   // For extra-large devices (larger desktops)
              },
            }}>
              Hello I
            </Typography>


            <div className="frame">
              <div style={centerStyle} className="center">
                <div style={carouselStyle} className="carousel">
                  <div style={changeOuterStyle} className="change_outer">
                    <div style={changeInnerStyle} className="change_inner">
                      <div style={{
                        color: '#FF8A00',
                        display: "block",
                        fontWeight: 700,
                        fontSize: {
                          xs: "16px",
                          sm: "24px",
                          md: "32px",
                          lg: "56px",
                          xl: "64px",
                        },
                      }} className="element">
                        Design
                      </div>
                      <div style={{
                        color: '#FF8A00',
                        display: "block",
                        fontWeight: 700,
                        fontSize: {
                          xs: "16px",
                          sm: "24px",
                          md: "32px",
                          lg: "56px",
                          xl: "64px",
                        },
                      }} className="element">
                        Develop
                      </div>
                      <div style={{
                        color: '#FF8A00',
                        display: "block",
                        fontWeight: 700,
                        fontSize: {
                          xs: "16px",
                          sm: "24px",
                          md: "24px",
                          lg: "56px",
                          xl: "64px",
                        },
                      }} className="element">
                        Research
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <style>
                {`
        @keyframes rotate {
          ${Object.entries(keyframesRotate)
                    .map(
                      ([key, value]) =>
                        `${key} { ${Object.entries(value)
                          .map(([prop, val]) => `${prop}: ${val};`)
                          .join(" ")} }`
                    )
                    .join(" ")}
        }
        `}
              </style>
            </div>
            {/* <Typography variant='h1' sx={{ color: '#FF8A00' }}>
              design
            </Typography> */}
          </Stack>

          <Typography
            variant="h1"
            sx={{
              color: '#fff',
              fontSize: {
                xs: '1rem',   // For extra-small devices (phones)
                sm: '1.5rem', // For small devices (tablets)
                md: '2rem',   // For medium devices (desktops)
                lg: '3rem',   // For large devices (larger desktops)
                xl: '4rem',   // For extra-large devices (larger desktops)
              },
            }}
          >
            products & brands.
          </Typography>
          <Stack direction='row' spacing={2} pt={3}>
            <a
              href="/Sivakamu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download>
              <Button disableRipple variant='downloadresumebutton' >
                Download Resume
              </Button>
            </a>
            <ScrollLink
              to="project"
              spy
              smooth
              offset={-100}
              duration={500}>
              <Button disableRipple variant='viewprojectbutton' className='view-project-btn'>
                View Projects
              </Button>
            </ScrollLink>
          </Stack>
        </Stack>
      </Grid>
    </>
  )
}

export default Homepage;
