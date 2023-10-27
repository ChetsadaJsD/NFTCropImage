import React, { useEffect, useState } from 'react'
import { ref, getDownloadURL, listAll } from 'firebase/storage'
import { storage } from '../component/firebase'
import {
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Container,
  Skeleton
} from '@mui/material'

export const ShowCropImageNft = () => {
  // Import your Firebase Storage instance (replace 'Storage' with your actual instance name)
  const imageListRef = ref(storage, 'images/')

  // Create a state variable to store the list of image URLs
  const [imageURLs, setImageURLs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    listAll(imageListRef)
      .then((result) => {
        // Map through the items and get the download URLs
        const promises = result.items.map((item) => getDownloadURL(item))
        return Promise.all(promises)
      })
      .then((urls) => {
        // Set the URLs in your state variable
        setImageURLs(urls)
        // Set loading to false once data is loaded
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching images: ', error)
        // Set loading to false in case of an error
        setLoading(false)
      })
  }, [])
  return (
    <>
      <Container maxWidth="lg">
        <>
          <Typography
            variant="h3"
            sx={{ textAlign: 'center', p: 4, fontWeight: 700 }}
          >
            รูปภาพที่ Crop แล้ว
          </Typography>
          {loading ? (
            // แสดง Skeleton ขณะโหลดข้อมูล
            <Skeleton animation="wave" width="100%" height={800} />
          ) : (
            <ImageList cols={3} gap={16}>
              {imageURLs.map((url, index) => (
                <ImageListItem key={index}>
                  <img src={url} alt={`Image ${index}`} />
                  <ImageListItemBar title={`Image ${index}`} />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </>
      </Container>
    </>
  )
}
