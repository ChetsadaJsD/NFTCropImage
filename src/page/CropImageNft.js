import React, { useState, useRef } from 'react'
import {
  AddCircle as AddCircleIcon,
  Download as DownloadIcon,
  RemoveCircle as RemoveCircleIcon,
  AddPhotoAlternate as AddPhotoAlternateIcon,
  Crop as CropIcon,
  Backspace as BackspaceIcon,
  Psychology as PsychologyIcon,
  Publish
} from '@mui/icons-material'
import { FileItem } from '@dropzone-ui/react'
import { useNavigate } from 'react-router-dom'
import {
  Grid,
  Typography,
  Button,
  Container,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ButtonGroup,
  makeStyles,
  Tooltip
} from '@mui/material'
import axios from 'axios'
import { NimitrTextField } from '../ui/text-field'
import { useParams } from 'react-router'
import { storage } from '../component/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'
const initialNftMarkerState = {
  markerName: '',
  markerType: 'nft',
  markerPattern: '',
  markerUrl: ''
}

function CropImage() {
  const navigate = useNavigate()
  const [showCanvas, setShowCanvas] = useState(true) // State flag to control canvas visibility
  const [showInput, setShowInput] = useState(true)
  const [img, setImg] = useState(null)
  const [imageName, setImageName] = useState('')
  const [isSelecting, setIsSelecting] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [endX, setEndX] = useState(0)
  const [endY, setEndY] = useState(0)
  const [scaleFactor, setScaleFactor] = useState(1.0)
  const [cropSize] = useState(701)
  const params = useParams()

  const [generating, setGenerate] = useState(false)
  const [fileSelected, setFileSelected] = useState(false)

  const [, setFileUploaded] = useState('')

  const [showTextField, setShowTextField] = useState(false)
  const [contentNftMarkerState, setContentNftMarkerState] = useState({
    markerName: '',
    initialNftMarkerState
  })

  const handleChangeStateValue = (event) => {
    const { name, value } = event.target
    setContentNftMarkerState((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const [markerImage, setMarkerImages] = useState([])

  const updateMarkerImage = (incomingFiles) => {
    console.log(
      '🚀 ~ file: imageCrop.js:249 ~ updateMarkerImage ~ incomingFiles:',
      incomingFiles
    )

    if (incomingFiles.length > 0) {
      const base64Data = incomingFiles[0] // Get the Base64 data from the array
      // Handle the Base64 data accordingly
      const file = dataURLtoFile(base64Data, 'image.jpeg') // Convert to a File object
      setFileSelected(file)
    } else {
      setFileSelected(null)
    }
  }

  function dataURLtoFile(dataUrl, filename) {
    const arr = dataUrl.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], filename, { type: mime })
  }

  const canvasRef = useRef(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]

    if (file) {
      setFileSelected(true)
      console.log(
        '🚀 ~ file: imageCrop.js:242 ~ handleImageUpload ~ file:',
        file
      )
      const imageUrl = URL.createObjectURL(file)
      const newImg = new Image()
      newImg.crossOrigin = 'Anonymous'

      newImg.onload = () => {
        canvasRef.current.width = cropSize
        canvasRef.current.height = cropSize
        setScaleFactor(1.0)
        setImageName(file.name)
        setImg(newImg)
        drawImageWithZoom(newImg, canvasRef.current.getContext('2d'))
      }

      newImg.onerror = () => {
        alert('☠️ Error loading the image. Please check the file.')
      }

      newImg.src = imageUrl
      setShowInput(false)
      setShowCanvas(true)
    } else {
      setFileSelected(false)
    }
    setIsSelecting(false)
    setGenerate(false)
  }

  const handleSubmitCreateContent = async (e) => {
    const CONVERT = process.env.REACT_APP_GENERAT_NFT

    e.preventDefault()

    try {
      setGenerate(true)
      console.log('file in', fileSelected)

      if (fileSelected) {
        // Create a reference to the storage location
        const storageRef = ref(storage, `images/${fileSelected.name + v4()}`)

        // Set metadata for the file (content type)
        const metadata = {
          contentType: fileSelected.type
        }

        // Upload the file to Firebase Storage
        await uploadBytes(storageRef, fileSelected, metadata)

        // Get the download URL of the uploaded file
        const downloadURL = await getDownloadURL(storageRef)

        // Now you can use the downloadURL as needed
        console.log('Download URL:', downloadURL)

        // Continue with your API call and other logic
        const data = { imageUrl: downloadURL }

        // Make an API call with the downloadURL
        const convertResponse = await axios.post(CONVERT, data)

        // Check the response and continue with your logic
        console.log('Convert Response:', convertResponse.data)

        const markerPattern = convertResponse?.data?.result?.markerPatternURL
        console.log('Marker Pattern URL:', markerPattern)

        // The rest of your code to handle the responseMarkerContent
        const imgUrl = downloadURL
        // เรียกใช้งาน createNftMarkerMutation โดยใช้ imgUrl แทน markerUrl และไม่สร้างตัวแปร markerPattern
        const { data: responseMarkerContent } = {
          projectId: `${params?.projectId}`,
          name: contentNftMarkerState?.markerName,
          markerUrl: imgUrl,
          markerType: 'nft'
        }
        console.log(
          '🚀 ~ file: CropImageNft.js:191 ~ handleSubmitCreateContent ~ imgUrl:',
          imgUrl
        )

        if (responseMarkerContent) {
          setFileSelected(null)
          setFileUploaded(fileSelected.name)
          setGenerate(false)
          setDialogOpen(true)
          handleRefresh()
        }
      } else {
        console.log('No file selected')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setGenerate(false)
    }
  }

  const [dialogOpen, setDialogOpen] = useState(false)
  const handleCloseDialog = () => {
    setDialogOpen(false)
    handleRefresh()
  }

  const handleRefresh = () => {
    setContentNftMarkerState(initialNftMarkerState)
    // setMarkerImage([]);
    setFileSelected(null) // Reset selected file in Dropzone
    setShowTextField(null)
  }

  const drawImageWithZoom = (image, ctx) => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    const scaledWidth = image.width * scaleFactor
    const scaledHeight = image.height * scaleFactor

    ctx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      0,
      0,
      scaledWidth,
      scaledHeight
    )

    if (isSelecting) {
      const maxWidth = Math.min(image.width, 701)
      const maxHeight = Math.min(image.height, 701)

      let size = Math.min(endX - startX, endY - startY)
      size = Math.min(size, maxWidth, maxHeight)

      let x = startX + (endX - startX - size) / 2
      let y = startY + (endY - startY - size) / 2

      if (x < 0) x = 0
      if (y < 0) y = 0
      if (x + size > image.width) x = image.width - size
      if (y + size > image.height) y = image.height - size

      ctx.strokeStyle = '#FFD012'
      ctx.lineWidth = 2
      ctx.strokeRect(
        x * scaleFactor,
        y * scaleFactor,
        size * scaleFactor,
        size * scaleFactor
      )
    }
  }

  const handleCropButtonClick = () => {
    const size = Math.min(endX - startX, endY - startY)
    let x = startX + (endX - startX - size) / 2
    let y = startY + (endY - startY - size) / 2

    if (x < 0) x = 0
    if (y < 0) y = 0
    if (x + size > img.width) x = img.width - size
    if (y + size > img.height) y = img.height - size

    const croppedCanvas = document.createElement('canvas')
    croppedCanvas.width = cropSize
    croppedCanvas.height = cropSize
    const croppedCtx = croppedCanvas.getContext('2d')

    croppedCtx.drawImage(img, x, y, size, size, 0, 0, cropSize, cropSize)

    // // Display the cropped image
    // const croppedImage = document.getElementById("croppedImage");
    // croppedImage.src = croppedCanvas.toDataURL("image/jpeg");
    // croppedImage.style.display = "block";
    // Create a new image element for the cropped image
    const croppedImage = new Image()
    croppedImage.src = croppedCanvas.toDataURL('image/jpeg')
    console.log(
      '🚀 ~ file: imageCrop.js:209 ~ handleCropButtonClick ~ croppedImage.src:',
      croppedImage.src
    )

    // Update markerImage state
    setMarkerImages([...markerImage, croppedImage.src])
    console.log(
      '🚀 ~ file: imageCrop.js:208 ~ handleCropButtonClick ~ croppedImage:',
      croppedImage
    )
    console.log(
      '🚀 ~ file: imageCrop.js:208 ~ handleCropButtonClick ~ markerImage:',
      markerImage
    )
    updateMarkerImage([...markerImage, croppedImage.src])

    // Display the cropped image
    croppedImage.style.display = 'block'
    setIsSelecting(false)
    setShowCanvas(false)
    setGenerate(false)
    setShowTextField(true)
  }

  const handleZoomInClick = () => {
    setScaleFactor(scaleFactor * 1.1)
    drawImageWithZoom(img, canvasRef.current.getContext('2d'))
  }

  const handleZoomOutClick = () => {
    setScaleFactor(scaleFactor / 1.1)
    drawImageWithZoom(img, canvasRef.current.getContext('2d'))
  }

  const handleDownloadClick = () => {
    const croppedCanvas = document.createElement('canvas')
    croppedCanvas.width = cropSize
    croppedCanvas.height = cropSize
    const croppedCtx = croppedCanvas.getContext('2d')

    const size = Math.min(endX - startX, endY - startY)
    let x = startX + (endX - startX - size) / 2
    let y = startY + (endY - startY - size) / 2

    if (x < 0) x = 0
    if (y < 0) y = 0
    if (x + size > img.width) x = img.width - size
    if (y + size > img.height) y = img.height - size

    croppedCtx.drawImage(img, x, y, size, size, 0, 0, cropSize, cropSize)

    // Create a download link for the cropped canvas
    const link = document.createElement('a')
    link.href = croppedCanvas.toDataURL('image/jpeg')
    link.download = imageName
    link.click()
  }

  const handleClearCroppedImage = () => {
    setIsSelecting(false)

    // Clear the selected image file
    setImg(null)
    setFileSelected(null)
    setMarkerImages([])
    setShowInput(true)
    handleRefresh()
  }

  return (
    <>
      <Grid xs={12} sx={{ p: 1 }}>
        <Typography
          sx={{
            display: 'flex',
            justifyItems: 'center',
            alignSelf: 'center',
            fontWeight: 900,
            m: 1
          }}
        >
          NFT Marker
        </Typography>
        {showTextField && (
          <NimitrTextField
            margin="normal"
            required
            placeholder="กรุณาใส่ชื่อ Nft Marker"
            id="markerName"
            name="markerName"
            disableScroll
            value={contentNftMarkerState.markerName}
            onChange={handleChangeStateValue}
            sx={{
              '&.MuiFormControl-root': {
                mt: 0,
                width: '100%'
              }
            }}
          />
        )}
        <Typography
          sx={{
            justifyItems: 'center',
            alignSelf: 'center',
            fontWeight: 900,
            m: 1
          }}
        >
          Crop Image
        </Typography>
        {!img && showInput && (
          <Tooltip title="อัพโหลดรูปภาพ">
            <Button
              component="label"
              sx={{
                width: '100%',
                maxHeight: fileSelected ? 'initial' : 'auto',
                minHeight: fileSelected ? 'initial' : '536px',
                '@media (max-width: 768px)': {
                  minHeight: fileSelected ? 'initial' : '300px'
                },
                bgcolor: '#FFD102'
              }}
            >
              <AddPhotoAlternateIcon sx={{ color: 'black' }} />

              <input
                type="file"
                id="imageUpload"
                onChange={handleImageUpload}
                style={{ display: 'none', margin: '10px auto' }}
              />
            </Button>
          </Tooltip>
        )}
        {showCanvas ? (
          <Grid xs={12} sx={{ p: 1 }}>
            <canvas
              id="croppedCanvas"
              ref={canvasRef}
              sx={{ margin: '0 auto' }}
              onMouseDown={(e) => {
                setIsSelecting(true)
                setStartX(e.nativeEvent.offsetX / scaleFactor)
                setStartY(e.nativeEvent.offsetY / scaleFactor)
              }}
              onMouseMove={(e) => {
                if (!isSelecting) return
                setEndX(e.nativeEvent.offsetX / scaleFactor)
                setEndY(e.nativeEvent.offsetY / scaleFactor)
                drawImageWithZoom(img, canvasRef.current.getContext('2d'))
              }}
              onMouseUp={() => {
                setIsSelecting(false)
              }}
              onTouchStart={(e) => {
                const touch = e.touches[0]
                setIsSelecting(true)
                setStartX(touch.clientX / scaleFactor)
                setStartY(touch.clientY / scaleFactor)
              }}
              onTouchMove={(e) => {
                if (!isSelecting) return
                const touch = e.touches[0]
                setEndX(touch.clientX / scaleFactor)
                setEndY(touch.clientY / scaleFactor)
                drawImageWithZoom(img, canvasRef.current.getContext('2d'))
              }}
              onTouchEnd={() => {
                setIsSelecting(false)
              }}
              width={cropSize}
              height={cropSize}
              style={{
                maxWidth: '100%',
                display: img || fileSelected ? 'block' : 'none', // แสดงเมื่อมีไฟล์เข้า input
                background: '#FFD012'
              }}
            ></canvas>
          </Grid>
        ) : (
          <div>
            {/* Display cropped images */}
            <img id="croppedImage" />
            {markerImage.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Cropped ${index}`}
                style={{
                  width: '100%',
                  height: '100%',
                  margin: '5px'
                }}
              />
            ))}
          </div>
        )}
        <Grid
          container
          xs={12}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <ButtonGroup sx={{ width: '100%', bgcolor: '#FFD102' }}>
            <Tooltip title="ตัดภาพ">
              <Button
                onClick={handleCropButtonClick}
                disabled={!img || isSelecting || markerImage.length > 0}
                sx={{ width: '100%', bgcolor: '#FFD102' }}
              >
                <CropIcon sx={{ color: 'black' }} />
              </Button>
            </Tooltip>
            <Tooltip title="ลบรูปภาพ">
              <Button
                onClick={handleClearCroppedImage}
                sx={{ width: '100%', bgcolor: '#FFD102' }}
              >
                <BackspaceIcon sx={{ color: 'black' }} />
              </Button>
            </Tooltip>
            <Tooltip title="ซูมเข้า">
              <Button
                onClick={handleZoomInClick}
                sx={{ width: '100%' }}
                disabled={!img || isSelecting || markerImage.length > 0}
              >
                <AddCircleIcon sx={{ color: 'black' }} />
              </Button>
            </Tooltip>
            <Tooltip title="ซูมออก">
              <Button
                onClick={handleZoomOutClick}
                sx={{ width: '100%' }}
                disabled={!img || isSelecting || markerImage.length > 0}
              >
                <RemoveCircleIcon sx={{ color: 'black' }} />
              </Button>
            </Tooltip>
          </ButtonGroup>

          <Grid
            container
            xs={12}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              pt: 1
            }}
          >
            {' '}
            <Tooltip title="วิเคราะห์รูปภาพ">
              <Button
                onClick={handleSubmitCreateContent}
                disabled={
                  !fileSelected ||
                  !contentNftMarkerState?.markerName ||
                  generating
                }
                sx={{
                  fontWeight: 700,
                  width: '100%',
                  bgcolor: '#FFD102',
                  color: 'black'
                }}
              >
                {generating ? (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {' '}
                    <CircularProgress
                      size={40}
                      color="secondary"
                      style={{ marginRight: '10px' }}
                    />
                  </div>
                ) : (
                  'Generate'
                )}
                {!generating && <PsychologyIcon sx={{ color: 'black' }} />}
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>สร้าง NFT Maker เสร็จแล้ว</DialogTitle>
        <DialogContent>
          <Typography>ต้องการสร้าง NFT Maker เพิ่มหรือไม่</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              navigate(`/project/${params?.projectId}`)
            }}
          >
            ไม่ต้องการ
          </Button>
          <Button onClick={handleCloseDialog} color="primary">
            ต้องการ
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default CropImage
