import './App.css'
import { IntroPage } from './page/IntroPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingLayout } from './ui/LandingLayout'
import CropImageNft from './page/CropImageNft'
import { ShowCropImageNft } from './page/ShowCropImageNft'

const App = () => (
  <Router>
    <LandingLayout>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/CropImage" element={<CropImageNft />} />
        <Route path="/ShowImageCrop" element={<ShowCropImageNft />} />
      </Routes>
    </LandingLayout>
  </Router>
)

export default App
