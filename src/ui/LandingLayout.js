import { Box, Grid } from '@mui/material'
import { HeaderBar } from './HeaderBar'

export const LandingLayout = ({ children }) => (
  <Grid sx={{ height: '100vh' }}>
    <HeaderBar />
    <Box component="main" sx={{ flexGrow: 1 }}>
      {children}
    </Box>
  </Grid>
)
