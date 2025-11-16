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
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <BrowserRouter>

      <div className="">
        {/* Canvas plein écran en fond */}
        <BackgroundCanvas />

        <div id="scroll-sections"
        ><Navbar />
          <Video />
          <Hero />
          <About />
         

          <section style={{ height: "100vh" }} >Section 2 </section>
          <section style={{ height: "100vh" }}>Section 3 </section>
          <section id="section-4"  style={{ height: "100vh" }}>
            	
	<div className="blueprint h-full" >
		
    </div>
             </section>
          <section style={{ height: "100vh" }}>Section 5 </section>
          <section style={{ height: "100vh" }}>Section 6</section>
           </div>
           <section style={{ height: "100vh" }} id="section-7" >Section 7</section>
            <section style={{ height: "100vh" }} id="section-8" >Section 8</section>
       

        <Footer />
        <ScrollToTopButton />



      </div>

      <ToastContainer theme="dark" />
    </BrowserRouter>
  );
}

export default App;
