import { Button, Grid, Stack, Typography } from '@mui/material';
import aboutimg from '../images/aboutimg.svg';

const Aboutpage = () => {
  return (
    <Grid container pl={{ md: 6, sm: 8, xs: 6, lg: 15 }}
      pt={{ md: 6, sm: 8, xs: 6, lg: 12 }}
      pb={{ md: 6, sm: 8, xs: 6, lg: 12 }}
    >
      <Grid container spacing={2} pt={8} >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Stack pr={5} direction="column" spacing={3} alignItems={{ md: 'center', lg: 'flex-start' }} >
            <Typography sx={{ color: '#E8E8E8' }} variant='h2'>
              Hi, I’m Sivakamu <br />
              Front-End Developer.
            </Typography>
            <Typography sx={{ color: '#E8E8E8' }} variant='body3'>
              👋 As I transitioned from UI/UX design,
              I've become a dedicated front-end developer focused on Flutter & ReactJS.
              Proficient in HTML, CSS, JS, and skilled in Riverpod for state management.
              With a strong foundation in Data Structures & Algorithms, I prioritize code efficiency.
              Excel in Firebase Cloud Messaging, committed to delivering top-notch user experiences through innovation.
              Let's connect and elevate your projects together !
            </Typography>
            <Stack direction='row' spacing={3}>
              <Button disableRipple variant='aboutbutton'>
                Flutter
              </Button>
              <Button disableRipple variant='aboutbutton'>
                React js
              </Button>
            </Stack>
            <Button disableRipple variant='aboutbutton'>
              UI/UX
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
