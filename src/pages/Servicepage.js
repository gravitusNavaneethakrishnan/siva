import { Card, Grid, Stack, Typography } from '@mui/material';
import React from 'react'
import Featuresimg1 from '../images/featuresimg_1.svg';
import Featuresimg2 from '../images/featuresimg_2.svg';
import Featuresimg3 from '../images/featuresimg_3.svg';

const Servicepage = () => {
  return (
    <>
      <Grid container pl={{ md: 6, sm: 8, xs: 6, lg: 25 }} pr={{ md: 6, sm: 8, xs: 6, lg: 25 }}
        pt={{ md: 6, sm: 8, xs: 6, lg: 12 }}
        pb={{ md: 6, sm: 8, xs: 6, lg: 12 }}
      >
        <Grid item sm={12} md={12} lg={12} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
          <Stack spacing={2}>
            <Typography variant='h1' sx={{ color: '#E8E8E8', textAlign: 'center', justifyContent: 'center' }}>
              Disciplines
            </Typography>
            <Typography variant='body1' sx={{ color: '#E8E8E8', textAlign: 'center', justifyContent: 'center' }}>
              I’m a UI/UX designer turned software developer with 3+ years of experience.
            </Typography>
          </Stack>
        </Grid>


        <Grid container spacing={2} pt={8}>

          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Stack alignItems={{ lg: 'start', md: 'start', sm: 'center', xs: 'center' }}>
              <Card sx={{
                width: '300px',
                height: '300px',
                borderRadius: '20px',
                background: 'linear-gradient(180deg, #3F008C 0%, #2D0056 125.89%)',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '16px',
                transition: 'transform 0.2s', // Add a smooth transition for the transform property
                ':hover': {
                  transform: 'scale(1.09)',
                },
              }}>
                <Stack pt={2} style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                  <img src={Featuresimg1} alt='featuresimg_1' />
                </Stack>
                <Stack spacing={1} pt={3}>
                  <Typography variant='title1' sx={{ color: '#E8E8E8' }}>
                    UI / UX Design
                  </Typography>
                  <Typography variant='body1' sx={{ color: '#E8E8E8' }}>
                    Leverage a human-centered design process to deliver an easy-to-use user interface and user experience.
                  </Typography>
                </Stack>

              </Card>
            </Stack>

          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} >
            <Stack alignItems={{ lg: 'center', md: 'end', sm: 'center', xs: 'center' }}>
              <Card sx={{
                width: '300px',
                height: '300px',
                borderRadius: '20px',
                background: 'linear-gradient(180deg, #3F008C 0%, #2D0056 125.89%)',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '16px',
                transition: 'transform 0.2s', // Add a smooth transition for the transform property
                ':hover': {
                  transform: 'scale(1.09)',
                },
              }}>
                <Stack pt={2} style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                  <img src={Featuresimg2} alt='featuresimg_1' />
                </Stack>
                <Stack spacing={1} pt={3}>
                  <Typography variant='title1' sx={{ color: '#E8E8E8' }}>
                    Static Websites
                  </Typography>
                  <Typography variant='body1' sx={{ color: '#E8E8E8' }}>
                    Creating website layout/user interfaces by using standard HTML/CSS<br /> practices.
                  </Typography>
                </Stack>

              </Card>
            </Stack>

          </Grid>

          <Grid item xs={12} sm={12} md={12} pt={{ md: 10 }} lg={4}  >
            <Stack alignItems={{ lg: 'end', md: 'center', sm: 'center', xs: 'center' }}>
              <Card sx={{
                width: '300px',
                height: '300px',
                borderRadius: '20px',
                background: 'linear-gradient(180deg, #3F008C 0%, #2D0056 125.89%)',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '16px',
                transition: 'transform 0.2s', // Add a smooth transition for the transform property
                ':hover': {
                  transform: 'scale(1.09)',
                },
              }}>
                <Stack pt={2} style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                  <img src={Featuresimg3} alt='featuresimg_1' />
                </Stack>
                <Stack spacing={1} pt={3}>
                  <Typography variant='title1' sx={{ color: '#E8E8E8' }}>
                    Branding
                  </Typography>
                  <Typography variant='body1' sx={{ color: '#E8E8E8' }}>
                    Conceptualizing visuals based on requirements. Creating images and layouts by hand or using design software.
                  </Typography>
                </Stack>

              </Card>
            </Stack>

          </Grid>
        </Grid>
      </Grid>

    </>
  )
}

export default Servicepage;
