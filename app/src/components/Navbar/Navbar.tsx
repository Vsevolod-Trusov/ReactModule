import React from 'react'
import { Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { boxProps, headerContent, headerWrapper, linkSx } from './styled';


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Box
     sx={boxProps}
    >
      <Box sx={headerWrapper}>
        <Box sx={headerContent}>
          Menu
        </Box>
      </Box>

      <Link variant={'button'} underline={'none'}
            onClick={() => navigate('/ReactModule/nodes')}
      sx={linkSx}>Nodes</Link>
    </Box>
  )
}

export default Navbar
