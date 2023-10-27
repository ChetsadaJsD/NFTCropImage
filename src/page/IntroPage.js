import { Redeem } from '@mui/icons-material'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import {
  Box,
  Divider,
  Typography,
  useTheme,
  Stack,
  Container,
  Grid,
  Button
} from '@mui/material'
import * as React from 'react'
// import { Link as RouteLink, useNavigate } from 'react-router-dom'
// import VideoCoverGrid from '../component/ui/videoDisplay'
// import AuthContext from '../contexts/AuthContext'
// import { useContext } from 'react'
// import FooterBox from '../component/ui/footer'

export const IntroPage = () => {
  //   const navigate = useNavigate()
  const theme = useTheme()
  //   const { user } = useContext(AuthContext)

  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{ minHeight: { xs: '400px', lg: '500px' } }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h1"
              color={'#FFD102'}
              sx={{
                mt: {
                  lg: 10,
                  md: 10,
                  xs: 10
                },
                fontWeight: 'bold',
                fontSize: {
                  lg: '12.5rem',
                  md: '10rem',
                  sm: '10rem',
                  xs: '6.5rem'
                },
                textShadow:
                  '2px 2px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              Nimitr
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: '3rem',
                  md: '2rem',
                  xs: '1.5rem'
                }
              }}
              gutterBottom
            >
              AR Web Application
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box
            alt="nimitr-webar"
            component="img"
            src="/title.gif"
            sx={{
              width: { lg: '600px', md: '400px', sm: '400px', xs: '100%' },
              height: { lg: '400px', md: '300px', sm: '300px', xs: 'px' },
              margin: '5px'
            }}
          />
        </Grid>
      </Grid>

      <Container maxWidth="lg">
        <Grid sx={{ textAlign: 'center', mt: { lg: 2, xs: 4 } }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{ textAlign: 'center' }}
          >
            <Grid item xs={12} md={6} lg={6} sx={{ p: 4 }}>
              <Typography
                variant="h5"
                fontWeight={700}
                sx={{ textAlign: { lg: 'start', md: 'start', xs: 'center' } }}
              >
                สร้างผลงาน AR ของคุณบนเว็บไซต์ของเรา
              </Typography>
              <Typography
                variant="body1"
                sx={{ textAlign: { lg: 'start', md: 'start', xs: 'center' } }}
              >
                คุณสามารถเพิ่มความน่าสนใจด้วยการจัดแสดงชิ้นงาน AR
                เราช่วยทำให้คุณ <br />
                ใช้งานได้ง่ายขึ้น
                เพียงไม่กี่ขั้นตอนก็สามารถนำเสนอชิ้นงานได้ทันที <br />
                เริ่มต้นใช้งานได้ฟรี
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 700,
                  mt: 2,
                  mb: 1,
                  textAlign: { xs: 'center' }
                }}
              >
                เริ่มต้นโปรเจกต์ได้ที่นี่
              </Typography>
              <Stack
                direction={{ xs: 'column' }}
                sx={{ alignItems: { xs: 'center' } }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Button
                    // component={RouteLink}
                    to="/login"
                    color="primary"
                    sx={{
                      color: 'black',
                      fontWeight: 700,
                      m: 2,
                      bgcolor: '#FFD102'
                    }}
                    startIcon={<ArrowCircleRightIcon />}
                  >
                    ลงชื่อเข้าใช้
                  </Button>
                  <Button
                    // component={RouteLink}
                    to="/register"
                    startIcon={<ArrowCircleRightIcon />}
                    color="primary"
                    sx={{ color: 'black', fontWeight: 700, bgcolor: '#FFD102' }}
                  >
                    สมัครสมาชิก
                  </Button>
                </Box>
              </Stack>
              <Stack
                direction={{ xs: 'column' }}
                sx={{ alignItems: { xs: 'center' } }}
              >
                <Box sx={{ textAlign: 'center', mt: 3 }}>
                  <Button
                    // component={RouteLink}
                    to="/payment"
                    color="primary"
                    sx={{ color: 'black', fontWeight: 700, bgcolor: '#FFD102' }}
                    startIcon={<Redeem />}
                  >
                    แพ็กเกจของเรา
                  </Button>
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6} lg={6} sx={{ p: 4 }}>
              <Typography
                variant="h5"
                fontWeight={700}
                sx={{ textAlign: { lg: 'start', md: 'start', xs: 'center' } }}
              >
                แสดงการนำเสนอแบบใหม่
              </Typography>
              <Typography
                variant="body1"
                sx={{ textAlign: { lg: 'start', md: 'start', xs: 'center' } }}
              >
                เปลี่ยนรูปแบบการแสดงผลงานของคุณด้วยรูปแบบการนำเสนอแบบใหม่ <br />
                ที่เป็นวีดีโอและโมเดล ทดลองได้ที่นี่ <br />
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                  mt: 2,
                  mb: 2,
                  textAlign: { lg: 'start', md: 'start', xs: 'center' }
                }}
              >
                ทดลองใช้ได้แล้วที่
              </Typography>
              <Stack
                direction={{ lg: 'row', md: 'row', xs: 'column' }}
                sx={{
                  alignItems: {
                    xs: 'center',
                    md: 'flex-start',
                    lg: 'flex-start'
                  }
                }}
              >
                <Box
                  component="img"
                  src="/qr_new.png"
                  sx={{
                    width: '150px',
                    height: '150px',
                    border: `1px solid ${'#FFD102'}`,
                    borderRadius: '10px',
                    mr: { xs: 0, md: 2, lg: 2 },
                    mb: { xs: 2, md: 0, lg: 0 }
                  }}
                />
                <Box
                  component="img"
                  src="/marker.png"
                  sx={{
                    width: '150px',
                    height: '150px',
                    border: `1px solid ${'#FFD102'}`,
                    borderRadius: '10px'
                  }}
                />
              </Stack>
            </Grid>
          </Grid>
          <Grid>
            <Divider
              variant="middle"
              sx={{ borderTop: '1px solid #bbb', borderRadius: '5px' }}
            />

            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Typography
                variant="h2"
                fontWeight={700}
                sx={{
                  mt: 5,
                  p: 2,
                  color: '#FFD102',
                  // เพิ่มการตกแต่งเพื่อเน้นข้อความ
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' // เงาในข้อความ
                }}
              >
                3 STEP
              </Typography>
              <Typography
                variant="body"
                fontWeight={700}
                sx={{
                  mt: 5,
                  p: 2,
                  fontSize: { xs: '22px', sm: '30px', md: '44px' }
                }}
              >
                ง่าย ๆ เพื่อสร้างสรรค์ผลงานของคุณ
              </Typography>
            </Stack>
            <Typography variant="body">
              แล้วการสร้าง AR ของคุณ จะไม่ใช่เรื่องยากอีกต่อไปด้วย NIMITR
              จะทำให้ไอเดียของคุณเป็นจริง
            </Typography>
            <Grid container direction="row" sx={{ mt: 5 }}>
              {/* step1 */}
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Box component="img" src="/step1Crop.png" />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  p: { lg: 6, xs: 2, sm: 4 },
                  border: `1px solid ${'#FFD102'}`,
                  borderRadius: '1px',
                  bgcolor: '#FFD102'
                }}
                container
                direction="row"
              >
                <Typography variant="h5">01 Choose Marker</Typography>
                <Typography variant="body" sx={{ mt: 2 }}>
                  เลือกมาร์คเกอร์ที่ต้องการใช้เป็นเป้าหมายในการแสดงวิดีโอหรือโมเดล
                </Typography>
              </Grid>
              {/* step2 */}
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: { xs: 'flex', sm: 'none' },
                  justifyContent: 'center'
                }}
              >
                <Box component="img" src="/step2Crop.png" />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  p: { lg: 6, xs: 2, sm: 4 },
                  border: `1px solid ${'#FFD102'}`,
                  borderRadius: '1px',
                  bgcolor: '#FFD102',
                  display: { xs: 'flex', sm: 'none' },
                  justifyContent: 'center'
                }}
                container
                direction="row"
              >
                <Typography variant="h5">02 Upload Media</Typography>
                <Typography variant="body" sx={{ mt: 2 }}>
                  อัปโหลดวิดีโอหรือโมเดล ที่ต้องการจะแสดงออกมา
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  p: { lg: 6, xs: 2, sm: 4 },
                  border: `1px solid ${'#FFD102'}`,
                  borderRadius: '1px',
                  bgcolor: '#FFD102',
                  display: { xs: 'none', sm: 'flex' }
                }}
                container
                direction="row"
              >
                <Typography variant="h5">02 Upload Media</Typography>
                <Typography variant="body" sx={{ mt: 2 }}>
                  อัปโหลดวิดีโอหรือโมเดล ที่ต้องการจะแสดงออกมา
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  justifyContent: 'center'
                }}
              >
                <Box component="img" src="/step2Crop.png" />
              </Grid>

              {/* step3 */}
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Box component="img" src="/step3Crop.png" margin="10px" />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  p: { lg: 6, xs: 2, sm: 4 },
                  border: `1px solid ${'#FFD102'}`,
                  borderRadius: '1px',
                  bgcolor: '#FFD102'
                }}
                container
                direction="row"
              >
                <Typography variant="h5">03 Enjoy!</Typography>
                <Typography variant="body" sx={{ mt: 2 }}>
                  เปิด Link ที่ได้มาจากโปรเจกต์ เพื่อเข้าใช้งานการแสดงผลได้เลย
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Grid container sx={{ mt: 10, bgcolor: '#2A2B2A' }}>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            sx={{
              textAlign: 'left',
              mt: 5,
              alignItems: 'top',
              justifyContent: 'center'
            }}
            paddingBottom="50px"
          >
            <Grid
              item
              xs={12}
              lg={12}
              sm={12}
              sx={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Stack direction="row" sx={{ justifyContent: 'center' }}>
                <Typography
                  variant="h4"
                  sx={{ color: 'white', textAlign: 'center', mr: 1 }}
                  fontWeight={700}
                >
                  ทำไมต้อง
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ color: '#FFE374', textAlign: 'center' }}
                  fontWeight={700}
                >
                  NIMITR
                </Typography>
              </Stack>
            </Grid>
            <Grid
              container
              item
              xs={12}
              lg={3}
              sm={12}
              sx={{
                mt: 10,
                bgcolor: '#FFE374',
                justifyContent: 'center',
                textAlign: 'center'
              }}
              paddingRight="30px"
            >
              <Grid item margin="20px">
                <img src="why1.png" height="auto" alt="nimitr-ar-why1" />
              </Grid>
              <Grid item padding="10px">
                <Divider
                  variant="middle"
                  sx={{ borderTop: '8px solid #2A2B2A', borderRadius: '5px' }}
                />
                <Typography variant="h5" sx={{ mt: 5 }} fontWeight={700}>
                  ปรับแก้เองได้
                </Typography>
                <Typography variant="body">
                  คอนเท้นไม่จำเจเพราะคุณสามารถจัดการมันได้เองอย่างอิสระ
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              item
              xs={12}
              lg={3}
              sm={12}
              sx={{
                mt: 10,
                bgcolor: '#FFF',
                justifyContent: 'center',
                textAlign: 'center'
              }}
              paddingRight="30px"
            >
              <Grid item margin="20px">
                <img src="why2.png" height="auto" alt="nimitr-ar-why2" />
              </Grid>
              <Grid item padding="10px">
                <Divider
                  variant="middle"
                  sx={{ borderTop: '8px solid #2A2B2A', borderRadius: '5px' }}
                />
                <Typography variant="h5" sx={{ mt: 5 }} fontWeight={700}>
                  ฟรี
                </Typography>
                <Typography variant="body">
                  เริ่มต้นใช้งานฟรีไม่มีค่าใช้จ่าย
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              item
              xs={12}
              lg={3}
              sm={12}
              sx={{
                mt: 10,
                bgcolor: '#FFE374',
                justifyContent: 'center',
                textAlign: 'center'
              }}
              paddingRight="30px"
            >
              <Grid item margin="20px">
                <img src="why3.png" height="auto" alt="nimitr-ar-why3" />
              </Grid>
              <Grid item padding="10px">
                <Divider
                  variant="middle"
                  sx={{ borderTop: '8px solid #2A2B2A', borderRadius: '5px' }}
                />
                <Typography variant="h5" sx={{ mt: 5 }} fontWeight={700}>
                  ง่ายและเร็ว
                </Typography>
                <Typography variant="body">
                  เราได้พัฒนาระบบมาอย่างดี
                  เพื่อให้คุณใช้งานด้วยขั้นตอนน้อยที่สุด
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      {/* <VideoCoverGrid />

      <FooterBox /> */}
    </Box>
  )
}
