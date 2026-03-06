import { useState } from 'react';
import { Copy, Check, Terminal, Globe, Lock, Shield } from 'lucide-react';

export default function Networking_concepts() {
  const [activeTab, setActiveTab] = useState('dns');
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(''), 2000);
  };

  const tabs = [
    { id: 'dns', label: 'DNS Resolution', icon: Globe },
    { id: 'ip', label: 'IP Addressing', icon: Terminal },
    { id: 'http', label: 'HTTP/HTTPS', icon: Lock },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  // Static networking data -
  const networkingData = {
    dns: {
      nslookup: `Server:         8.8.8.8
Address:        8.8.8.8#53

Non-authoritative answer:
Name:    https://github.com/gedatgit
Address: 185.199.108.153
Address: 185.199.109.153
Address: 185.199.110.153
Address: 185.199.111.153`
    },
    http: {
      headers: `HTTP/2 200
server: GitHub.com
content-type: text/html; charset=utf-8
strict-transport-security: max-age=31556952
x-content-type-options: nosniff
x-frame-options: deny
x-xss-protection: 1; mode=block
vary: Accept-Encoding
cache-control: max-age=600`
    }
  };

  return (
    <section id="networking" className="min-h-screen py-20 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom duration-1000">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Networking Concepts
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Evidence of DNS, IP addressing, HTTP/HTTPS protocols, and security implementation
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
          {/* DNS Tab */}
          {activeTab === 'dns' && (
            <div className="space-y-6 animate-in slide-in-from-bottom duration-1000">
              <h3 className="text-2xl font-bold text-white mb-4">DNS Resolution</h3>

              <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-blue-400">What is DNS?</h4>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  DNS (Domain Name System) translates human-readable domain names like
                  <span className="text-blue-400 font-mono mx-1">https://github.com/gedatgit</span>
                  into IP addresses that computers use to communicate. It's like the internet's phone book.
                </p>
              </div>

              <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-blue-400">nslookup Output</h4>
                  <button
                    onClick={() => copyToClipboard(networkingData.dns.nslookup, 'nslookup')}
                    className="flex items-center gap-2 px-3 py-1 bg-slate-800 text-gray-400 rounded hover:bg-slate-700 transition-colors"
                  >
                    {copied === 'nslookup' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copied === 'nslookup' ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm text-green-400 font-mono">
{networkingData.dns.nslookup}
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-5">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">A Record (IPv4)</h4>
                  <p className="text-gray-300 text-sm">Maps domain to IPv4 address</p>
                  <p className="text-blue-400 font-mono text-xs mt-2">185.199.108.153</p>
                </div>
                <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-5">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">AAAA Record (IPv6)</h4>
                  <p className="text-gray-300 text-sm">Maps domain to IPv6 address</p>
                  <p className="text-blue-400 font-mono text-xs mt-2">2606:50c0:8000::153</p>
                </div>
              </div>
            </div>
          )}

          {/* IP Addressing Tab */}
          {activeTab === 'ip' && (
            <div className="space-y-6 animate-in slide-in-from-bottom duration-1000">
              <h3 className="text-2xl font-bold text-white mb-4">IP Addressing</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-4">IPv4 Address</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-400">IP Address</p>
                      <p className="text-lg font-mono text-white">185.199.108.153</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Type</p>
                      <p className="text-gray-300">32-bit address (4 octets)</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Owner</p>
                      <p className="text-gray-300">GitHub Pages CDN</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Purpose</p>
                      <p className="text-gray-300">Load balancing across 4 IPs</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-4">IPv6 Address</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-400">IP Address</p>
                      <p className="text-lg font-mono text-white break-all">2606:50c0:8000::153</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Type</p>
                      <p className="text-gray-300">128-bit address</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Format</p>
                      <p className="text-gray-300">Hexadecimal groups</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Why it matters</p>
                      <p className="text-gray-300">IPv4 exhaustion → IPv6 adoption</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-6 overflow-x-auto">
                <h4 className="text-lg font-semibold text-white mb-4">IPv4 vs IPv6 Comparison</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 text-gray-400">Property</th>
                      <th className="text-left py-2 text-gray-400">IPv4</th>
                      <th className="text-left py-2 text-gray-400">IPv6</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-2">Address size</td>
                      <td className="py-2">32-bit</td>
                      <td className="py-2">128-bit</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2">Format</td>
                      <td className="py-2 font-mono text-xs">192.168.1.1</td>
                      <td className="py-2 font-mono text-xs">2001:db8::1</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2">Total addresses</td>
                      <td className="py-2">~4.3 billion</td>
                      <td className="py-2">~3.4 × 10³⁸</td>
                    </tr>
                    <tr>
                      <td className="py-2">DNS record</td>
                      <td className="py-2">A record</td>
                      <td className="py-2">AAAA record</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* HTTP/HTTPS Tab */}
          {activeTab === 'http' && (
            <div className="space-y-6 animate-in slide-in-from-bottom duration-1000">
              <h3 className="text-2xl font-bold text-white mb-4">HTTP vs HTTPS</h3>

              <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 text-gray-400">Property</th>
                      <th className="text-left py-3 text-gray-400">HTTP</th>
                      <th className="text-left py-3 text-gray-400">HTTPS</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3">Port</td>
                      <td className="py-3">80</td>
                      <td className="py-3 text-green-400 font-semibold">443 ✓</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3">Encryption</td>
                      <td className="py-3 text-red-400">❌ None (plaintext)</td>
                      <td className="py-3 text-green-400">✅ TLS/SSL</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3">Authentication</td>
                      <td className="py-3 text-red-400">❌ None</td>
                      <td className="py-3 text-green-400">✅ Certificate verified</td>
                    </tr>
                    <tr>
                      <td className="py-3">Data integrity</td>
                      <td className="py-3 text-red-400">❌ Can be modified</td>
                      <td className="py-3 text-green-400">✅ Tamper-proof</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-blue-400">Response Headers</h4>
                  <button
                    onClick={() => copyToClipboard(networkingData.http.headers, 'headers')}
                    className="flex items-center gap-2 px-3 py-1 bg-slate-800 text-gray-400 rounded hover:bg-slate-700 transition-colors"
                  >
                    {copied === 'headers' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copied === 'headers' ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm text-cyan-400 font-mono">
{networkingData.http.headers}
                </pre>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-semibold">200 OK</span>
                  </div>
                  <p className="text-gray-300 text-sm">Request succeeded</p>
                </div>
                <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-semibold">301 Redirect</span>
                  </div>
                  <p className="text-gray-300 text-sm">HTTP → HTTPS redirect</p>
                </div>
                <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs font-semibold">404 Not Found</span>
                  </div>
                  <p className="text-gray-300 text-sm">Page doesn't exist</p>
                </div>
                <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-semibold">500 Error</span>
                  </div>
                  <p className="text-gray-300 text-sm">Server error</p>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6 animate-in slide-in-from-bottom duration-1000">
              <h3 className="text-2xl font-bold text-white mb-4">Security Implementation</h3>

              <div className="bg-green-950/20 border border-green-500/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-green-400">HTTPS Enforcement</h4>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  GitHub Pages automatically provisions a TLS certificate via Let's Encrypt
                  and enforces HTTPS. All HTTP requests are permanently redirected to HTTPS
                  with a 301 status code.
                </p>
              </div>

              <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-4">Security Headers</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 pb-3 border-b border-slate-800">
                    <Shield className="w-5 h-5 text-green-400 mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-white">HSTS</p>
                      <code className="text-xs text-cyan-400">strict-transport-security: max-age=31556952</code>
                      <p className="text-sm text-gray-400 mt-1">Forces HTTPS for 1 year</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-3 border-b border-slate-800">
                    <Shield className="w-5 h-5 text-green-400 mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-white">X-Frame-Options</p>
                      <code className="text-xs text-cyan-400">x-frame-options: deny</code>
                      <p className="text-sm text-gray-400 mt-1">Prevents clickjacking via iframes</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-3 border-b border-slate-800">
                    <Shield className="w-5 h-5 text-green-400 mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-white">XSS Protection</p>
                      <code className="text-xs text-cyan-400">x-xss-protection: 1; mode=block</code>
                      <p className="text-sm text-gray-400 mt-1">Blocks cross-site scripting attacks</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-400 mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-white">MIME Sniffing</p>
                      <code className="text-xs text-cyan-400">x-content-type-options: nosniff</code>
                      <p className="text-sm text-gray-400 mt-1">Prevents MIME type attacks</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-4">TLS Certificate</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Issued by</p>
                    <p className="text-white">Let's Encrypt (trusted CA)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Protocol</p>
                    <p className="text-white">TLS 1.3</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Valid for</p>
                    <p className="text-white font-mono text-sm">yourusername.github.io</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Expiration</p>
                    <p className="text-white">Auto-renewed</p>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}