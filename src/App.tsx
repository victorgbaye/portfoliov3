// import Footer from './components/Footer';
import MouseTrail from './components/MouseTrail';
// import Navigation from './components/Navigation';
import About from './pages/About';
import ProjectDetails from './pages/ProjectDetails'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';
import Home from './pages/Home';


function App() {

  return (
    <>
    <MouseTrail/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/projects/projectDetails" element={<ProjectDetails/>}/>

        </Routes>
      </Router>
      {/* <Navigation/> */}
      {/* <Footer/> */}
    </>
  )
}

export default App
