export const SampleCode = {
    "App.jsx": `
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";

export default function App() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      {/* Add more sections here */}
    </main>
  );
}`,

    "Hero.jsx": `
import { useState } from "react";

export default function Hero() {
  const [count, setCount] = useState(0);

  return (
    <section className="pt-20 text-center">
      <h1 className="text-4xl font-bold text-white">
        Build Faster with DevPro
      </h1>
      <button 
        onClick={() => setCount(count + 1)}
        className="mt-8 bg-blue-500 px-6 py-2 rounded-full"
      >
        Clicks: {count}
      </button>
    </section>
  );
}`,

    "Navbar.jsx": `
import { Menu, X } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-white/5">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded-lg" />
        <span className="font-bold text-white">DevPro</span>
      </div>
      <div className="hidden md:flex gap-6 text-gray-400">
        <a href="#home">Home</a>
        <a href="#docs">Docs</a>
      </div>
    </nav>
  );
}`
};