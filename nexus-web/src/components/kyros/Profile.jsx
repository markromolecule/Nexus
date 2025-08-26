import SectionHeader from './SectionHeader'

export default function KyrosProfile({ character }) {
  if (!character) return null

  return (
    <section className="mt-10">
      <SectionHeader label="Profile" accent="from-[#06B6D4] to-[#3B82F6]" />
      <div className="relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white/90 backdrop-blur-xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.4]">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#06B6D4]/5 to-transparent"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #06B6D4 1px, transparent 1px), radial-gradient(circle at 75% 75%, #3B82F6 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative p-8">
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="relative group">
              <div className="w-24 h-24 rounded-2xl overflow-hidden ring-3 ring-[#06B6D4]/30 shadow-[0_0_30px_#06B6D4]/20">
                {character.avatar ? (
                  <img 
                    src={character.avatar} 
                    alt={character.name}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-[#06B6D4] to-[#3B82F6] flex items-center justify-center text-white font-bold text-2xl">
                    {character.name.charAt(0)}
                  </div>
                )}
              </div>
              {character.top && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
              )}
            </div>

            {/* Character Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-2">{character.name}</h2>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#06B6D4]/20 to-[#3B82F6]/20 text-[#0F172A] text-sm font-medium border border-[#06B6D4]/30">
                  {character.role}
                </span>
                <span className="px-2 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs font-bold">
                  VERIFIED
                </span>
              </div>
              <p className="text-[#334155] text-sm leading-relaxed max-w-lg">
                {character.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
