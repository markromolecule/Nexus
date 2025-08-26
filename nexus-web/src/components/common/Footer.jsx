export default function Footer({ theme = 'dark' }) {
  const isLight = theme === 'light'
  return (
    <footer className={`w-full pt-10 pb-10 border-t ${
      isLight
        ? 'border-[#E5E7EB] bg-white'
        : 'backdrop-blur-md border-[#1F2937] bg-gradient-to-r from-[#0B1220]/80 to-[#0B1220]/60'
    }`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-3">
            <div className={`h-10 w-10 rounded-lg ${isLight ? 'bg-gradient-to-r from-[#06B6D4] to-[#3B82F6]' : 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] shadow-[0_0_20px_#06B6D4]/30'}`} />
            <div>
              <div className={`text-sm font-medium ${isLight ? 'text-black' : 'text-white'}`}>Nexus Gaming</div>
              <div className={`text-xs mt-1 ${isLight ? 'text-black' : 'text-[#9CA3AF]'}`}>© {new Date().getFullYear()} All rights reserved</div>
              <p className={`text-xs mt-3 max-w-xs ${isLight ? 'text-black' : 'text-[#9CA3AF]'}`}>A futuristic hub for players, teams, and events. Join the arena and level up.</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className={`text-sm font-medium ${isLight ? 'text-black' : 'text-white'}`}>Follow</div>
            <div className="flex items-center gap-4">
              <a href="#" className={`text-sm transition ${isLight ? 'text-black hover:opacity-80' : 'text-[#9CA3AF] hover:text-white'}`}>Twitter</a>
              <a href="#" className={`text-sm transition ${isLight ? 'text-black hover:opacity-80' : 'text-[#9CA3AF] hover:text-white'}`}>Discord</a>
              <a href="#" className={`text-sm transition ${isLight ? 'text-black hover:opacity-80' : 'text-[#9CA3AF] hover:text-white'}`}>YouTube</a>
              <a href="#" className={`text-sm transition ${isLight ? 'text-black hover:opacity-80' : 'text-[#9CA3AF] hover:text-white'}`}>GitHub</a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className={`text-sm font-medium ${isLight ? 'text-black' : 'text-white'}`}>Links</div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#" className={`${isLight ? 'text-black hover:opacity-80' : 'text-[#9CA3AF] hover:text-white'} transition`}>About</a>
              <a href="#" className={`${isLight ? 'text-black hover:opacity-80' : 'text-[#9CA3AF] hover:text-white'} transition`}>Events</a>
              <a href="#" className={`${isLight ? 'text-black hover:opacity-80' : 'text-[#9CA3AF] hover:text-white'} transition`}>Rules</a>
              <a href="#" className={`${isLight ? 'text-black hover:opacity-80' : 'text-[#9CA3AF] hover:text-white'} transition`}>Resources</a>
              <a href="#" className={`${isLight ? 'text-black hover:opacity-80' : 'text-[#9CA3AF] hover:text-white'} transition`}>Contact</a>
            </div>
          </div>
        </div>

        <div className={`mt-8 pt-4 border-t text-center ${isLight ? 'border-[#E5E7EB]' : 'border-[#1F2937]'}`}>
          <p className={`text-xs ${isLight ? 'text-black' : 'text-[#6B7280]'}`}>Built with my friends :DD</p>
        </div>
      </div>
    </footer>
  )
}

