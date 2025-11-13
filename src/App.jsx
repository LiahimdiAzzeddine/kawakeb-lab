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

      <div className="relative z-0">
        {/* Canvas plein écran en fond */}
        <BackgroundCanvas />

        <div id="scroll-sections"
        ><Navbar />
          <Video />
          <Hero />
          <About />

          <section style={{ height: "100vh" }}>Section 2 — planète gauche</section>
          <section style={{ height: "100vh" }}>Section 3 — planète droite</section>
          <section style={{ height: "100vh" }}>Section 4 — Jupiter</section>
        </div>

        <Footer />
        <ScrollToTopButton />



      </div>

      <ToastContainer theme="dark" />
    </BrowserRouter>
  );
}

export default App;
