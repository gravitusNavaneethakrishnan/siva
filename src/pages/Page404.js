import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box, Grid } from '@mui/material';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: '100%',
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
  backgroundColor: '#000'
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <>
      <Grid sx={{ color: '#000' }}>

        <Container>
          <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
            <Typography variant="h1" paragraph sx={{ color: '#E8E8E8' }}>
              Sorry, page not found!
            </Typography>

            <Typography variant='body1' sx={{ color: '#E8E8E8' }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
              spelling.
            </Typography>

            <Box
              component="img"
              src="/assets/illustrations/illustration_404.svg"
              sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
            />

            <Button to="/" size="large" variant="downloadresumebutton" component={RouterLink}>
              Go to Home
            </Button>
          </StyledContent>
        </Container>
      </Grid>

    </>
  );
}
