import { Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react'
import aboutimg from '../images/aboutimg.svg';

const Aboutpage = () => {
  return (
    <Grid container pl={{ md: 6, sm: 8, xs: 6, lg: 15 }}
      pt={{ md: 6, sm: 8, xs: 6, lg: 12 }}
      pb={{ md: 6, sm: 8, xs: 6, lg: 12 }}
    >
      <Grid container spacing={2} pt={8}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Stack direction="column" spacing={3} alignItems={{ md: 'center', lg: 'flex-start' }} >
            <Typography sx={{ color: '#E8E8E8' }} variant='h1'>
              Hi, I’m Sivakamu <br />
              Designer & Developer.
            </Typography>
            <Typography sx={{ color: '#E8E8E8' }} variant='body1'>
              I’m a UI/UX designer turned software developer with 3+ years of <br />
              experience. Producing high-quality UX design solutions through <br />
              wireframes, visual and graphic designs, flow diagrams, storyboards and <br />
              prototypes.
            </Typography>
            <Stack direction='row' spacing={3}>
              <Button disableRipple variant='aboutbutton'>
                UX Research
              </Button>
              <Button disableRipple variant='aboutbutton'>
                UI Design
              </Button>
            </Stack>
            <Button disableRipple variant='aboutbutton'>
              UI Develop
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}  >
          <Stack   >
            <img src={aboutimg} alt='aboutimg' width='100%' />
          </Stack>
        </Grid>
      </Grid>
    </Grid>


  )
}

export default Aboutpage;
