import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {

      styleOverrides: {
        downloadresumebutton: {
          borderRadius: '30px',
          background: 'linear-gradient(180deg, #1000CE 0%, #292929 100%)',
          height: '47px',
          color: ' #E8E8E8',
          textAlign: 'center',
          fontFamily: 'Libre Baskervville',
          fontSize: '16px',
          fontWeight: '400',
          maxWidth: '237px', // Set a maximum width to maintain responsiveness
          // Media query for screens wider than a certain breakpoint (e.g., 768px)
          '@media (min-width: 768px)': {
            width: '273px', // Adjust the width for larger screens
          },
          '@media (min-width: 600px)': {
            width: '180px', // Adjust the width for larger screens
          },
          '@media (min-width: 1200px)': {
            width: '273px', // Adjust the width for larger screens
          },
        },
        viewprojectbutton: {
          borderRadius: '30px',
          background: 'transparent',
          border: '2px solid #FFF',
          height: '47px',
          color: ' #E8E8E8',
          textAlign: 'center',
          fontFamily: 'Libre Baskervville',
          fontSize: '16px',
          fontWeight: '400',
          maxWidth: '237px', // Set a maximum width to maintain responsiveness
          // Media query for screens wider than a certain breakpoint (e.g., 768px)
          '@media (min-width: 768px)': {
            width: '273px', // Adjust the width for larger screens
          },
          '@media (min-width: 600px)': {
            width: '180px', // Adjust the width for larger screens
          },
          '@media (min-width: 1200px)': {
            width: '273px', // Adjust the width for larger screens
          },
        },
        aboutbutton: {
          borderRadius: '30px',
          background: '#121212',
          '&:hover': {
            background: '#121212',
          },
          height: '47px',
          color: ' #E8E8E8',
          textAlign: 'center',
          fontFamily: 'Libre Baskervville',
          fontSize: '16px',
          fontWeight: '400',
          maxWidth: '159px', // Set a maximum width to maintain responsiveness
          // Media query for screens wider than a certain breakpoint (e.g., 768px)
          '@media (min-width: 768px)': {
            width: '273px', // Adjust the width for larger screens
          },
          '@media (min-width: 600px)': {
            width: '140px', // Adjust the width for larger screens
          },
          '@media (min-width: 1200px)': {
            width: '159px', // Adjust the width for larger screens
          },
        },
        viewprojectmainbutton: {
          borderRadius: '30px',
          background: 'transparent',
          border: '2px solid #FFF',
          height: '40px',
          color: ' #E8E8E8',
          textAlign: 'center',
          fontFamily: 'Libre Baskervville',
          fontSize: '14px',
          fontWeight: '400',
          maxWidth: '190px', // Set a maximum width to maintain responsiveness
          // Media query for screens wider than a certain breakpoint (e.g., 768px)
          '@media (min-width: 768px)': {
            width: '190px', // Adjust the width for larger screens
          },
          '@media (min-width: 600px)': {
            width: '140px', // Adjust the width for larger screens
          },
          '@media (min-width: 1200px)': {
            width: '190px', // Adjust the width for larger screens
          },
        },
        sendbutton: {
          borderRadius: '30px',
          background: 'linear-gradient(180deg, #1000CE 0%, #292929 100%)',
          height: '40px',
          color: ' #E8E8E8',
          textAlign: 'center',
          fontFamily: 'Libre Baskervville',
          fontSize: '16px',
          fontWeight: '400',
          maxWidth: '143px', // Set a maximum width to maintain responsiveness
          // Media query for screens wider than a certain breakpoint (e.g., 768px)
          '@media (min-width: 768px)': {
            width: '143px', // Adjust the width for larger screens
          },
          '@media (min-width: 600px)': {
            width: '143px', // Adjust the width for larger screens
          },
          '@media (min-width: 1200px)': {
            width: '143px', // Adjust the width for larger screens
          },
        },
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          '&:hover': {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows.primary,
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
