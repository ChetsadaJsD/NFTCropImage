import { styled, TextField } from '@mui/material'

export const NimitrTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    height: '44px',
    '& fieldset': {
      borderRadius: '8px',
    },
    '& input': {
      borderRadius: '8px',
    },
  },
}))
