import {lazy, Suspense} from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Networking_concepts from "./components/Networking_concepts";
// import About_me from "./components/About_me";
// import Footer from "./components/Footer";
const Networking_concepts = lazy(() => import("./components/Networking_concepts"))
const About_me = lazy(() => import("./components/About_me"))
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import("./components/Footer"))

function App() {


  return (
    <div className="min-h-screen bg-slate-950 text-blue-300 overflow-hidden">

     <Navbar />
     <Hero />
     {/* <Networking_concepts />
     <About_me />
     <Footer /> */}
     <Suspense fallback={<div className='py-20 text-center text-blue-400'>Loading...</div>}>
      <Networking_concepts/>
      <About_me/>
      <Contact/>
      <Footer/>
     </Suspense>

  </div>
  );
}

export default App;
