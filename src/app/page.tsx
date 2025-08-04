import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 flex flex-col">
      {/* Header with logo */}
      <header className="flex justify-center pt-8 pb-4">
        <div className="relative">
          <Image
            src="/ascol.png"
            alt="Ascol IT Club Logo"
            width={180}
            height={180}
            priority
            className="drop-shadow-lg"
          />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
              ASCOL IT CLUB
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">
              Under Construction
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-blue-700 max-w-2xl mx-auto leading-relaxed">
              We're working hard to bring you an amazing experience. Our website is currently under construction, but we'll be back soon with exciting updates!
            </p>
            <p className="text-base md:text-lg text-blue-600">
              Stay tuned for tech events, workshops, and more from the Ascol IT Club community.
            </p>
          </div>

          {/* Construction animation */}
          <div className="flex justify-center items-center space-x-2 py-8">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-sky-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-4 h-4 bg-cyan-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>

          {/* Coming soon message */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">
              🚀 Coming Soon
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-blue-700">
              <div className="space-y-2">
                <div className="text-lg font-medium">💻 Tech Events</div>
                <div className="text-sm">Workshops, hackathons, and seminars</div>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-medium">🤝 Community</div>
                <div className="text-sm">Connect with fellow tech enthusiasts</div>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-medium">📚 Resources</div>
                <div className="text-sm">Learning materials and tutorials</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3 text-blue-600 text-lg">
            <span>Powered by</span>
            <Image
              src="/kailash.png"
              alt="Kailash Cloud"
              width={120}
              height={45}
              className="drop-shadow-sm"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
