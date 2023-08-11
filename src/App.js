import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';
import Home from './pages/Home/Intro';
import Skills from './pages/Skills/Skills.js';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
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
