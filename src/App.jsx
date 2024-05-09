import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Kelas from "./pages/Kelas";
import Testimonial from "./pages/Testimonial";
import FaqPage from "./pages/FaqPage";
import SyaratKetentuan from "./pages/SyaratKetentuan";

// import Footer from "./components/Footer";
import NavbarComponents from "./components/NavbarComponents";

function App() {
  return (
    <>
      <NavbarComponents />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/kelas" Component={Kelas} />
        <Route path="/testi" Component={Testimonial} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syarat-ketentuan" Component={SyaratKetentuan} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
