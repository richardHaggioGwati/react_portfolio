import type { NextPage } from 'next'

import Nav from '../components/Nav';
import Leftbar from '../components/Leftbar'
import Rightbar from '../components/Rightbar'
import Footer from '../components/Footer'
import Box from '@mui/material/Box';

import Stack  from '@mui/material/Stack'

const Home: NextPage = () => {

  return (
    <Box>
      <Nav />
      <Stack direction={{xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent='space-between'>
        <Leftbar />
        <Rightbar />
     </Stack>
        <Footer />
    </Box>
  )
}

export default Home
