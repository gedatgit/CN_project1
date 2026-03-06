import { Github, Linkedin, Mail, ExternalLink, Code, Server, Globe, Shield } from 'lucide-react';

export default function About_me() {
  const skills = [
    { name: 'React', icon: Code, color: 'text-cyan-400' },
    { name: 'Networking', icon: Globe, color: 'text-blue-400' },
    { name: 'JavaScript', icon: Server, color: 'text-green-400' },
    { name: 'Security', icon: Shield, color: 'text-yellow-400' }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom duration-1000">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About This Project
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A React portfolio showcasing networking concepts and web development skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Project Overview */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm animate-in slide-in-from-bottom duration-1000 delay-300">
            <h3 className="text-2xl font-bold text-white mb-6">Project Overview</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400 font-semibold">📚</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Course</h4>
                  <p className="text-gray-400 text-sm">Computer Networking - Spring 2026</p>
                  <p className="text-gray-500 text-sm">Instructor: Roya Hosseini</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-semibold">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Objective</h4>
                  <p className="text-gray-400 text-sm">
                    Build a publicly accessible website demonstrating DNS, IP addressing,
                    HTTP/HTTPS protocols, and security implementations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 font-semibold">☁️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Deployment</h4>
                  <p className="text-gray-400 text-sm">
                    Hosted on: GitHub Pages<br/>
                    Framework: React + Vite<br/>
                    Security: HTTPS with Let's Encrypt
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm animate-in slide-in-from-bottom duration-1000 delay-400">
            <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-950/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <Icon className={`w-8 h-8 ${skill.color} mb-2 group-hover:scale-110 transition-transform`} />
                    <h4 className="font-semibold text-white">{skill.name}</h4>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800">
              <h4 className="font-semibold text-white mb-3">Additional Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['Tailwind CSS v4', 'Vite 7', 'DNS', 'TLS/SSL', 'GitHub Pages'].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Networking Evidence Summary */}
        <div className="bg-gradient-to-br from-blue-950/50 to-cyan-950/50 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm mb-12 animate-in slide-in-from-bottom duration-1000 delay-400">
          <h3 className="text-2xl font-bold text-white mb-6">Networking Evidence Demonstrated</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-4">
              <div className="text-3xl mb-2">🔍</div>
              <h4 className="font-semibold text-white mb-1">DNS Resolution</h4>
              <p className="text-sm text-gray-400">nslookup & dig outputs</p>
            </div>

            <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-4">
              <div className="text-3xl mb-2">📡</div>
              <h4 className="font-semibold text-white mb-1">IP Addressing</h4>
              <p className="text-sm text-gray-400">IPv4 & IPv6 records</p>
            </div>

            <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-4">
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="font-semibold text-white mb-1">HTTP/HTTPS</h4>
              <p className="text-sm text-gray-400">Headers & status codes</p>
            </div>

            <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-4">
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-semibold text-white mb-1">Security</h4>
              <p className="text-sm text-gray-400">HTTPS & security headers</p>
            </div>
          </div>
        </div>

        {/* Project Links */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm animate-in slide-in-from-bottom duration-1000 delay-400">
          <h3 className="text-2xl font-bold text-white mb-6">Project Links</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://github.com/gedatgit/CN_project1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-slate-950/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
              <div className="flex-1">
                <h4 className="font-semibold text-white">GitHub Repository</h4>
                <p className="text-sm text-gray-400">View source code</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors" />
            </a>

            <a
              href="https://gedatgit.github.io/CN_project1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-slate-950/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <Globe className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              <div className="flex-1">
                <h4 className="font-semibold text-white">Live Website</h4>
                <p className="text-sm text-gray-400">Visit deployment</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-800">
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="gfikru1@student.gsu.edu"
                className="flex items-center gap-2 px-4 py-2 bg-slate-950/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all text-gray-300 hover:text-white"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href="www.linkedin.com/in/gedeon-fikru-4b2914209"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-950/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all text-gray-300 hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href=" https://github.com/gedatgit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-950/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all text-gray-300 hover:text-white"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}