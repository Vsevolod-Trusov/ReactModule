import React from 'react'
import { Box, Link } from '@mui/material';

const boxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems:'center',
  height: '100vh',

  borderRight: '1px solid #0b31be',
  outline: '1px solid #0b31be'
}

const linkSx = {
  width: '100%',
    padding: '1rem 0',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    outline: '1px solid #0b31be',

    '&:hover': {
    backgroundColor: '#ece9e9',
      transition: '.2s'
  }
}

const Navbar = () => {
  return (
    <Box
     sx={boxProps}
    >
      <Box sx={{
        width: '100%',

        backgroundColor: '#0b31be',
        color: '#fff'
      }}>
        <Box sx={{
          padding: '0.8rem 0',
          textAlign: 'center'
        }}>
          Menu
        </Box>
      </Box>

      <Link variant={'button'} underline={'none'}
            href={'/ReactModule/nodes'}
      sx={linkSx}>Nodes</Link>
    </Box>
  )
}

export default Navbar
