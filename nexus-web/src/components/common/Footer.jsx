export default function Footer() {
  return (
    <footer className="w-full pt-10 pb-10 border-t border-[#1F2937] bg-gradient-to-r from-[#0B1220]/80 to-[#0B1220]/60 backdrop-blur-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#06B6D4] shadow-[0_0_20px_#06B6D4]/30" />
            <div>
              <div className="text-sm font-medium text-white">Nexus Gaming</div>
              <div className="text-xs text-[#9CA3AF] mt-1">© {new Date().getFullYear()} All rights reserved</div>
              <p className="text-xs text-[#9CA3AF] mt-3 max-w-xs">A futuristic hub for players, teams, and events. Join the arena and level up.</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium text-white">Follow</div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-[#9CA3AF] hover:text-white transition">Twitter</a>
              <a href="#" className="text-sm text-[#9CA3AF] hover:text-white transition">Discord</a>
              <a href="#" className="text-sm text-[#9CA3AF] hover:text-white transition">YouTube</a>
              <a href="#" className="text-sm text-[#9CA3AF] hover:text-white transition">GitHub</a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium text-white">Links</div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#" className="text-[#9CA3AF] hover:text-white transition">About</a>
              <a href="#" className="text-[#9CA3AF] hover:text-white transition">Events</a>
              <a href="#" className="text-[#9CA3AF] hover:text-white transition">Rules</a>
              <a href="#" className="text-[#9CA3AF] hover:text-white transition">Resources</a>
              <a href="#" className="text-[#9CA3AF] hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#1F2937] text-center">
          <p className="text-xs text-[#6B7280]">Built with my friends :DD</p>
        </div>
      </div>
    </footer>
  )
}

