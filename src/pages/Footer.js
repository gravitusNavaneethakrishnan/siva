import { Grid, Stack, Typography } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

import sivakamu from '../images/Sivakamu.svg';
import Behance from '../images/behance.svg';
import dribble from '../images/dribble.svg';
import Instagram from '../images/instagram.svg';
import Linkedin from '../images/linkedin.svg';

const Footer = () => {
  return (
    <Grid container pl={{ md: 6, sm: 8, xs: 6, lg: 8 }} pr={{ md: 6, sm: 8, xs: 6, lg: 8 }}
      pt={8} pb={3}
    >
      <Grid lg={6} xs={12} md={6}>
        <Stack spacing={8}>
          <img src={sivakamu} alt='sivakamu' width={120} />
          <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
            <Typography variant='body1' sx={{ color: '#D0D0D0' }}>
              Quick links
            </Typography>
            <ScrollLink
              to="home"
              spy
              smooth
              offset={-100}
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
              <Typography variant='body1' sx={{ color: '#E8E8E8' }}>
                Home
              </Typography>
            </ScrollLink>

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
          </Grid>
        </Stack>
      </Grid>
      <Grid pb={5} pl={{ lg: 20, md: 8 }} pt={{ lg: 0, md: 0, xs: 6, }} lg={6} xs={12} md={6} textAlign={{ lg: 'end', md: 'center' }} >
        <Stack spacing={1}>
          <Stack direction='row' spacing={5} justifyContent={{ lg: 'end', md: 'end' }} >
            <a href='https://www.linkedin.com/in/sivakamu-mariselvam-675968129/'>
              <img src={Linkedin} alt='Linkedin' />
            </a>
            <a href='https://dribbble.com/SivaMSK'>
              <img src={dribble} alt='dribble' />
            </a>
            <a href='https://www.behance.net/sivakamu'>
              <img src={Behance} alt='Behance' />
            </a>
            <a href='https://www.instagram.com/siva_msk7/'>
              <img src={Instagram} alt='Instagram' />
            </a>
          </Stack>
          <Typography pt={1} variant='subbody' sx={{ color: '#D0D0D0' }} textAlign={{ lg: 'end', md: 'end' }}>
            +91 6374185363
          </Typography>
          <Typography variant='subbody' sx={{ color: '#D0D0D0' }} textAlign={{ lg: 'end', md: 'end' }}>
            sivakamu.mariselvam@gmail.com
          </Typography>
        </Stack>
      </Grid>
      {/* <Divider pt={10} sx={{
        width: '100%',
        borderTop: '1px solid white ',
      }}>
      </Divider> */}
      {/* <Container >
        <Typography pt={5} textAlign='center' sx={{ color: theme.palette.mode === 'dark' ? 'text.white' : 'text.white' }}>
          &copy; 2023 Gravitus
        </Typography>
      </Container> */}
    </Grid>
  )
}

export default Footer;
