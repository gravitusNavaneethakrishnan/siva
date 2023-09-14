import React from 'react';
import { Grid, Stack, OutlinedInput, Button, Typography, FormHelperText } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { styled } from '@mui/material/styles';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import sideimgleft from '../images/sideimgleft.svg';
import sideimgright from '../images/sideimgright.svg';

const StyledTextarea = styled(TextareaAutosize)(({ theme, error }) => ({
  backgroundColor: '#131313',
  color: '#D0D0D0',
  fontSize: '24px',
  fontWeight: 400,
  height: '63px',
  maxWidth: '602px',
  '@media (min-width: 768px)': {
    width: '602px',
  },
  '@media (min-width: 600px)': {
    width: '502px',
  },
  '@media (min-width: 1200px)': {
    width: '602px',
  },
  padding: 12,
  borderRadius: '10px 10px 0 10px',
  border: `1px solid ${error ? 'red' : '#343434'}`,
  '&:focus': {
    borderColor: error ? 'red' : 'blue',
  },
  '&:focus-visible': {
    outline: 0,
  },
  '::placeholder': {
    fontSize: '16px',
    color: '#A0A0A0',
    fontWeight: 400,
    fontFamily: 'Baskervville',
  },
}));

const Contactpage = () => {
  return (
    <Grid
      pt={{ md: 6, sm: 8, xs: 6, lg: 12 }}
      pb={{ md: 6, sm: 8, xs: 6, lg: 12 }}
      justifyContent={{ lg: 'space-between', md: 'space-betwwen', sm: 'space-betwwen', xs: 'space-between' }}
      display={{ lg: 'flex', md: 'flex', sm: 'flex', xs: 'flex' }}
      flexDirection={{ xs: 'column', md: 'row' }} // Adjust the layout for small screens
    >
      <Grid item md={2} lg={2} textAlign='start' display={{ xs: 'none', md: 'block', sm: 'none', lg: 'block' }}>
        <img src={sideimgleft} alt='sideimgleft' width={120} />
      </Grid>

      <Grid item md={8} sm={12} xs={12}  lg={8} sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <Stack spacing={2}>
          <Typography variant='h1' sx={{ color: '#E8E8E8' }}>
            Contact Me
          </Typography>
        </Stack>
        <Grid pl={{sm:15,xs:10,}} pr={{sm:15,xs:10}} sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <Formik
            initialValues={{
              name: '',
              email: '',
              message: '',
              submit: null
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().max(255).required('Do not leave empty'),
              email: Yup.string().max(255).required('Do not leave empty'),
              message: Yup.string().max(255).required('Do not leave empty'),

            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
              try {
                setStatus({ success: false });
                setSubmitting(false);
              } catch (err) {
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
            }}
          >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
              <form noValidate onSubmit={handleSubmit}>
                {/* <Grid sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}> */}
                  <Stack spacing={1} pt={3}>
                    <OutlinedInput
                      id="name"
                      type="text"
                      value={values.name}
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Name"
                      fullWidth
                      error={Boolean(touched.name && errors.name)}
                      sx={{
                        backgroundColor: '#131313',
                        borderRadius: '10px',
                        color: '#D0D0D0',
                        fontSize: '24px',
                        fontWeight: 400,
                        height: '63px',
                        border: '1px solid #343434',
                        maxWidth: '602px',
                        '@media (min-width: 768px)': {
                          width: '602px',
                        },
                        '@media (min-width: 600px)': {
                          width: '502px',
                        },

                        '@media (min-width: 1200px)': {
                          width: '602px',
                        },
                      }}
                    />
                    {touched.name && errors.name && (
                      <FormHelperText error sx={{ color: 'red' }}>
                        {errors.name}
                      </FormHelperText>
                    )}
                  </Stack>

                  <Stack spacing={1} pt={3}>
                    <OutlinedInput
                      id="email"
                      type="email"
                      value={values.email}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Email"
                      fullWidth
                      error={Boolean(touched.email && errors.email)}
                      sx={{
                        backgroundColor: '#131313',
                        borderRadius: '10px',
                        color: '#D0D0D0',
                        fontSize: '24px',
                        fontWeight: 400,
                        height: '63px',
                        border: '1px solid #343434',
                        maxWidth: '602px',
                        '@media (min-width: 768px)': {
                          width: '602px',
                        },
                        '@media (min-width: 600px)': {
                          width: '502px',
                        },
                        '@media (min-width: 1200px)': {
                          width: '602px',
                        },
                      }}
                    />
                    {touched.email && errors.email && (
                      <FormHelperText error sx={{ color: 'red' }}>
                        {errors.email}
                      </FormHelperText>
                    )}
                  </Stack>

                  <Stack spacing={1} pt={3}>
                    <StyledTextarea
                      aria-label="minimum height"
                      minRows={3}
                      id="message"
                      type="message"
                      value={values.message}
                      name="message"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Message"
                      fullWidth
                      error={Boolean(touched.message && errors.message)}
                    />
                    {touched.message && errors.message && (
                      <FormHelperText error id="standard-weight-helper-text-email-login">
                        {errors.message}
                      </FormHelperText>
                    )}
                  </Stack>

                  <Stack pt={3}>
                    <Button variant='sendbutton' type="submit" isSubmitting>
                      send
                    </Button>
                  </Stack>
                 {/* </Grid> */}

              </form>
            )}
          </Formik>
        </Grid>

      </Grid>

      <Grid item pt={30} md={2} lg={2} textAlign='end' display={{ xs: 'none', md: 'block', sm: 'none',lg: 'block' }}>
        <img src={sideimgright} alt='sideimgright' width={120} />
      </Grid>
    </Grid>
  )
}

export default Contactpage;
