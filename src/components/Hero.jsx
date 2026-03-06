import {useEffect, useState} from "react";
import {SampleCode} from "../Data/SampleCode.jsx";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({x:0, y:0});
    const [activeTab, setActiveTab] = useState("App.jsx");
    useEffect(() => {
        function handleMouseMove(e){
            setMousePosition({x: e.clientX, y: e.clientY});

        }
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [])
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20  px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-90"
            style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246, 0.15), transparent 100%)`
            }}/>

            <div className="max-w-7xl mx-auto text-center relative ">
                <div className="max-w-7xl mx-auto grid grid-cols-1  lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 text-center lg:text-left items-center relative">
                    <div>
                        <h1 className=" text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-1000">
                            <span className="block bg-gradient-to-r from-white via-blue-300 to-cyan-100 text-transparent bg-clip-text">Reliable</span>
                            <span className="block bg-gradient-to-r from-blue-700 via-cyan-300 to-blue-700 text-transparent bg-clip-text">Innovative</span>
                            <span className="block bg-gradient-to-r from-white via-blue-300 to-cyan-100 text-transparent bg-clip-text">Secure</span>

                        </h1>
                        <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/20 border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-1000 delay-300">
                            <span className="text-xs sm:text-sm text-blue-200">Introducing DevPro by Gedeon</span>
                        </div>
                        <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-1000 delay-400 leading-relaxed">
                            Computer Networks Project By Gedeon Fikru:
                        </p>
                        <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-1000 delay-400 leading-relaxed">
                            My speciality is in solving everyday problem using unique,
                            targeted solutions. Be ready to level raise your expectations
                            overcome boundaries and to go to the next level in your business.


                        </p>

                    </div>

                    <div className="relative order-2 w-full">
                        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm-rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
                            {/*IDE BODY*/}
                            <div className="bg-gray-800 backgdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[380px] lg:h-[450px] border-white/20">
                                {/*IDE HEADER*/}
                                <div className="flex items-center justify-between px-3 py-2 sm:py-2 bg-white/5 backdrop-blur-sm border-b border-white/10">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex items-center space-x-2">
                                            <div className={"w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/60"}></div>
                                            <div className={"w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/60"}></div>
                                            <div className={"w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/60"}></div>

                                        </div>
                                        <span className="text-xs sm:text-sm text-gray-300">DevPro BuildCode</span>
                                    </div>
                                </div>
                                <div className="p-0.5 sm:p-1 relative h-full">
                                {/*file tabs*/}
                                   <div className="flex space-x-1 sm:space-x-1.6  overflow-x-auto">
                                       <button
                                           onClick={() => setActiveTab("App.jsx")}
                                           className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border border-white/25 ${activeTab==="App.jsx"
                                           ? "bg-blue-500/30 text-white border-blue-400/20 hover:bg-blue-500/50"
                                           : "bg-white/5 text-gray-300 hover:bg-white/20" 
                                       }  transition-all duration-200 whitespace-nowrap`}>App.jsx</button>
                                       <button
                                           onClick={() => setActiveTab("Hero.jsx")}
                                           className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border border-white/25  ${activeTab==="Hero.jsx"
                                           ? "bg-blue-500/30 text-white border-blue-400/20 hover:bg-blue-500/50"
                                           : "bg-white/5 text-gray-300 hover:bg-white/20" 
                                       } transition-all duration-200 whitespace-nowrap`}>Hero.jsx</button>
                                       <button
                                           onClick={() => setActiveTab("Navbar.jsx")}
                                           className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border border-white/25  ${activeTab==="Navbar.jsx"
                                           ? "bg-blue-500/30 text-white border-blue-400/20 hover:bg-blue-500/50"
                                           : "bg-white/5 text-gray-300 hover:bg-white/20" 
                                       } transition-all duration-200 whitespace-nowrap`}>Navbar.jsx</button>
                                   </div>
                                    {/*displayed code content*/}
                                    <div className="relative overflow-hidden flex-grow">
                                        <SyntaxHighlighter
                                            language="javascript"
                                            style={atomDark}

                                            customStyle={{
                                                margin:0,
                                                padding: "1rem",
                                                borderRadius: "8px",
                                                fontSize: "11px",
                                                lineHeight: "1.4",
                                                backgroundColor: "transparent",
                                                border: "1px solid #3c3c3c",
                                                maxHeight: "calc(280px-100px)",

                                                height: "100%",
                                                overflowX: "auto",
                                                overflowY: "auto"

                                            }}
                                        >

                                            {SampleCode[activeTab]}
                                        </SyntaxHighlighter>
                                    </div>

                                </div>
                            </div>

                        </div>
                </div>
                </div>
            </div>

        </section>
    );
}