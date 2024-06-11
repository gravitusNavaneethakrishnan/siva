// ----------------------------------------------------------------------

export function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

// ----------------------------------------------------------------------

const FONT_PRIMARY = 'Poppins'; // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  // h1: {
  //   fontWeight: 800,
  //   lineHeight: 80 / 64,
  //   fontSize: pxToRem(40),
  //   ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  // },
  h2: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontFamily: 'Poppins',
    fontWeight: 550,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  // body1: {
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(16),
  // },
  body2: {
    fontFamily: 'Poppins',
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    fontFamily: 'Poppins',
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
  //
  body1: {
    fontFamily: 'Poppins',
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ xs: 10, sm: 12, md: 14, lg: 16 }),
    // fontSize: '16px',
    fontWeight: '400',
  },
  body3: {
    fontFamily: 'Poppins',
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ xs: 10, sm: 12, md: 14, lg: 16 }),
    // fontSize: '16px',
    fontWeight: '400',
    letterSpacing: '0.5px'
  },
  title1: {
    fontFamily: 'Poppins',
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 18, md: 22, lg: 26 }),
    // fontSize: '32px',
    fontWeight: '600',
  },
  h1: {
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 56 }),
    // fontSize:'56px',
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  subbody: {
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 10, md: 12, lg: 16 }),
    // fontSize:'56px',
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  subbody1: {
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 16, md: 20, lg: 24 }),
    // fontSize:'56px',
    fontFamily: 'Poppins',
    fontWeight: '700',

  }
};

export default typography;
