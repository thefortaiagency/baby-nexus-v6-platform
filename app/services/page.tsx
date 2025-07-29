export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid gap-6">
          <div className="bg-purple-900/20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">AI Integration</h2>
            <p>Seamlessly integrate AI into your existing workflows</p>
          </div>
          <div className="bg-blue-900/20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Custom Solutions</h2>
            <p>Tailored AI solutions for your specific needs</p>
          </div>
          <div className="bg-green-900/20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">24/7 Support</h2>
            <p>Round-the-clock assistance for all your needs</p>
          </div>
        </div>
      </div>
    </div>
  )
}