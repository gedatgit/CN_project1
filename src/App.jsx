import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Networking_concepts from "./components/Networking_concepts";
import About_me from "./components/About_me";
import Footer from "./components/Footer";

function App() {


  return (
    <div className="min-h-screen bg-slate-950 text-blue-300 overflow-hidden">

     <Navbar />
     <Hero />
     <Networking_concepts />
     <About_me />
     <Footer />

  </div>
  );
}

export default App;
