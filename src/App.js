import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';
import Home from './pages/Intro';
import Skills from './pages/Skills.js';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import profile from "../src/assets/pro2.jpg"
import profile2 from "../src/assets/pro1.jpg"







function App() {



  return (
   <>
  
   <Header/>

   <Home     profile={profile} />
    <About profile={profile2} />
   <Skills/>
   <Projects/>
   <Contact/> 



  <Footer/>




  
   </>
  );
}

export default App;
