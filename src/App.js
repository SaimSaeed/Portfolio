import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';
import Home from './pages/Intro';
import Skills from './pages/Skills.js';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import profile from "../src/assets/profile.JPG"




function App() {



  return (
   <>
  
   <Header/>

   <Home     profile={profile} />
   <About profile={profile} />
   <Skills/>
   <Projects/>
   <Contact/>



  <Footer/>




  
   </>
  );
}

export default App;
