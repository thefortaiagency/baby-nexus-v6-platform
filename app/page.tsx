'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Shield, Globe } from 'lucide-react'
import AIChatbot from '@/components/ai/AIChatbot'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl" />
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Baby NEXUS V6
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              The Next Evolution in AI-Powered Platforms
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Link
                href="/services"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all transform hover:scale-105"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold border border-white/20 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Revolutionary Features
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-b from-purple-900/30 to-purple-900/10 p-6 rounded-xl border border-purple-500/20 backdrop-blur-md">
            <Sparkles className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI-Powered</h3>
            <p className="text-gray-300">Advanced AI integration with OpenAI for intelligent interactions</p>
          </div>
          
          <div className="bg-gradient-to-b from-blue-900/30 to-blue-900/10 p-6 rounded-xl border border-blue-500/20 backdrop-blur-md">
            <Zap className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-300">Built with Next.js 14 for optimal performance and speed</p>
          </div>
          
          <div className="bg-gradient-to-b from-green-900/30 to-green-900/10 p-6 rounded-xl border border-green-500/20 backdrop-blur-md">
            <Shield className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Secure by Design</h3>
            <p className="text-gray-300">Enterprise-grade security with data protection built-in</p>
          </div>
          
          <div className="bg-gradient-to-b from-orange-900/30 to-orange-900/10 p-6 rounded-xl border border-orange-500/20 backdrop-blur-md">
            <Globe className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Global Ready</h3>
            <p className="text-gray-300">Deployed worldwide with automatic DNS and SSL</p>
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Experience Baby NEXUS V6 AI
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            Chat with our AI assistant powered by OpenAI
          </p>
          
          <AIChatbot />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-12 backdrop-blur-md border border-purple-500/20 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the revolution with Baby NEXUS V6 - where AI meets enterprise solutions
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link
              href="/about"
              className="bg-transparent text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}