export const boxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',

  borderRight: '1px solid #0b31be',
  outline: '1px solid #0b31be',
};

export const headerWrapper = {
  width: '100%',

  backgroundColor: '#0b31be',
  color: '#fff',
};

export const headerContent = {
  padding: '0.8rem 0',
  textAlign: 'center',
};

export const linkSx = {
  width: '100%',
  padding: '1rem 0',
  textAlign: 'center',
  fontFamily: 'Montserrat',
  outline: '1px solid #0b31be',

  '&:hover': {
    backgroundColor: '#ece9e9',
    transition: '.2s',
  },
};
