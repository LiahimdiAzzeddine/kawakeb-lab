import {
  Navbar,
  Hero,
  About,
  Contact,
  Footer,
} from "./components";
import {
  ScrollToTopButton,
  Video,
} from "./components/sub-components";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackgroundCanvas from "./components/canvas/BackgroundCanvas";
import Projects from "./components/Projects";
import HypercasualGames from "./components/HypercasualGames";
import TeamMembers from "./components/TeamMembers";

function App() {
  return (
    <BrowserRouter>

      <div className="">
        {/* Canvas plein écran en fond */}
        <BackgroundCanvas />

        <div id="scroll-sections"
        >
          <Navbar />
          <Video />
           <div  id="section-1" >
          <Hero /> 
          <About /></div>
          <div className="blueprint h-full" id="section-2" >
          <TeamMembers/>
          </div>
          <Projects />
         
          
          
          <HypercasualGames /> 
        </div>
 <div  id="section-3" >
        <Contact /> 
         <Footer /></div>
        <ScrollToTopButton /> 
      </div>

      <ToastContainer theme="dark" />
    </BrowserRouter>
  );
}

export default App;
