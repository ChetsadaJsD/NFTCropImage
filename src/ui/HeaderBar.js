import {
  LogoutSharp,
  Panorama,
  Article,
  ExpandMore,
  MenuOutlined
} from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  Menu,
  MenuItem,
  Tooltip,
  Stack,
  Zoom
} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//   import AuthContext from '../contexts/AuthContext'

//   import { LoginDialog } from './login-dialog'

export const HeaderBar = () => {
  // const { user, setToken, removeToken } = useContext(AuthContext)
  const theme = useTheme()
  const navigate = useNavigate()

  const [openLoginDialog, setOpenLoginDialog] = useState(false)

  const handleOpenLoginDialog = () => {
    setOpenLoginDialog(true)
  }
  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false)
  }

  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  // const logout = async () => {
  //   // setProject(null)
  //   // await setLogout({ variables: { _id: user?._id } })
  //   removeToken()
  //   // history.push('/:projectCode/login')
  //   navigate('/')
  // }
  // console.log(user);
  return (
    <AppBar
      position="static"
      sx={{
        background: 'white',
        paddingLeft: { lg: 10, xs: 5 },
        paddingRight: { lg: 0, xs: 5 }
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          variant="text"
          onClick={() => {
            navigate('/')
          }}
        >
          <Box
            component="img"
            src="/NimitrIcon.png"
            sx={{ width: '45px', height: '45px', borderRadius: '10px' }}
          />
        </IconButton>

        <Typography
          component="span"
          variant="h5"
          sx={{ flexGrow: 1, fontWeight: 700 }}
        >
          NIMITR
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Button
            onClick={() => {
              navigate('/CropImage')
            }}
            variant="text"
            sx={{
              flexGrow: 1,
              mr: 2,
              borderRadius: '10px',
              color: 'black',
              bgcolor: '#FFD102'
            }}
          >
            ตัดรูปภาพ
          </Button>
          <Button
            onClick={() => {
              navigate('/ShowImageCrop')
            }}
            variant="text"
            sx={{
              flexGrow: 1,
              mr: 2,
              borderRadius: '10px',
              color: 'black',
              bgcolor: '#FFD102'
            }}
          >
            รูปภาพที่ตัดแล้ว
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
