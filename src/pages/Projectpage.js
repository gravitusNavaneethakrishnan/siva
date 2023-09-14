import React from 'react'
import { Button, Card, Grid, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import project1 from '../images/project1img.svg';
import project2 from '../images/project2img.svg';


const Projectpage = () => {
  return (
    <Grid container pl={{ md: 6, sm: 8, xs: 6, lg: 15 }} pr={{ md: 6, sm: 8, xs: 6, lg: 18 }}
      pt={{ md: 6, sm: 8, xs: 6, lg: 12 }}
      pb={{ md: 6, sm: 8, xs: 6, lg: 12 }}
    >
      <Grid item sm={12} md={12} lg={12} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
        <Stack spacing={2}>
          <Typography variant='h1' sx={{ color: '#E8E8E8', textAlign: 'center', justifyContent: 'center' }}>
            Featured Projects
          </Typography>
          <Typography variant='body1' sx={{ color: '#E8E8E8', textAlign: 'center', justifyContent: 'center' }}>
            I’m a UI/UX designer turned software developer with 3+ years of experience.
          </Typography>
        </Stack>
      </Grid>


      <Grid container spacing={2} pt={8}>

        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Stack alignItems={{ lg: 'start', md: 'center', sm: 'center', xs: 'center' }}>
            <Card sx={{
              maxWidth: '585px',
              maxHeight: '669px',
              borderRadius: '10px',
              background: '#282828',
              justifyContent: 'start',
              alignItems: 'start',
              textAlign: 'start',
              padding: '16px',
              '@media (min-width: 600px)': {
                width: '308px',
              },
              '@media (min-width: 1280px)': {
                width: '500px',
              },
              '@media (min-width: 768px)': {
                width: '560px',
              },
              '@media (min-height: 600px)': {
                height: '669px',
              },
              '@media (min-height: 1280px)': {
                height: '669px',
              },
              '@media (min-height: 768px)': {
                height: '669px',
              },
            }}>
              <Stack pt={2} sx={{
                justifyContent: 'start',
                alignItems: 'start',
                textAlign: 'start',
                transition: 'transform 0.2s',
                ':hover': {
                  transform: 'scale(1.03)',
                },
              }}>
                <img src={project1} alt='project1' />
              </Stack>
              <Stack spacing={1} pt={3}>
                <Typography variant='title1' sx={{ color: '#E8E8E8' }}>
                  Gravitus
                </Typography>
                <Typography variant='body1' sx={{ color: '#FFC47D' }}>
                  Ux designing, Developing, Flutter
                </Typography>
              </Stack>
              <Stack pt={2}>
                <Button component={RouterLink} to="/projectview" disableRipple variant='viewprojectmainbutton'>
                  View Projects
                </Button>
              </Stack>
            </Card>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Stack alignItems={{ lg: 'end', md: 'center', sm: 'center', xs: 'center' }}>
            <Card sx={{
              maxWidth: '585px',
              maxHeight: '669px',
              borderRadius: '10px',
              background: '#282828',
              justifyContent: 'start',
              alignItems: 'start',
              textAlign: 'start',
              padding: '16px',
              '@media (min-width: 600px)': {
                width: '308px',
              },
              '@media (min-width: 1280px)': {
                width: '500px',
              },
              '@media (min-width: 768px)': {
                width: '560px',
              },
              '@media (min-height: 600px)': {
                height: '669px',
              },
              '@media (min-height: 1280px)': {
                height: '669px',
              },
              '@media (min-height: 768px)': {
                height: '669px',
              },
            }}>
              <Stack pt={2} sx={{
                justifyContent: 'start',
                alignItems: 'start',
                textAlign: 'start',
                transition: 'transform 0.2s',
                ':hover': {
                  transform: 'scale(1.03)',
                },
              }}>
                <img src={project2} alt='project2' />
              </Stack>
              <Stack spacing={1} pt={3}>
                <Typography variant='title1' sx={{ color: '#E8E8E8' }}>
                  Gravitus
                </Typography>
                <Typography variant='body1' sx={{ color: '#FFC47D' }}>
                  Ux designing, Developing, Flutter
                </Typography>
              </Stack>
              <Stack pt={2}>
                <Button component={RouterLink} to="/projectview" disableRipple variant='viewprojectmainbutton'>
                  View Projects
                </Button>
              </Stack>
            </Card>
          </Stack>
        </Grid>


      </Grid>
    </Grid>

  )
}

export default Projectpage
