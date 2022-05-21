import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css' 
import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import Services from "./sections/Services";
import About from "./sections/About";
import ScrollerTriggerProxy from "./components/ScrollerTriggerProxy";
import Features from "./sections/Features";
import Blogs from "./sections/Blogs";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";
import Contact from "./sections/Contact";

function App() {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
  
   setTimeout(() => {
     setLoaded(true);
   }, 5000);

  }, [])
  

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>
          {loaded ? null : <Loader />}
         </AnimatePresence>
          <ScrollerTriggerProxy />
          <AnimatePresence>
          <main className='App' data-scroll-container ref={containerRef}>
              <Home />
              <Services />
              <About />
              <Features />
              <Blogs />
              <Contact/>
              <Footer />
          </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
