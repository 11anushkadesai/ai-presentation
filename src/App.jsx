import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FileUpload from './components/FileUploads'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import AboutSection from './components/About'
import KeyFeatures from './components/KeyFeatures'
import WhyChoose from './components/WhyChoose'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <div className='scroll-smooth'>
    {/* <Navbar/> */}
      <Intro/>
      <FileUpload />
      <AboutSection/>
      <KeyFeatures/>
      <WhyChoose/>
      <Footer/>
    </div>
   </>
  )
}

export default App
