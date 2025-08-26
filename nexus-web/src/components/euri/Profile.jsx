import Container from "../../shared/Container"
import SectionHeader from "./SectionHeader"

export default function EuriProfile({ character }) {
  if (!character) return null

  return (
    <section className="mt-12">
      <SectionHeader title="Profile" />
      <Container className="bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#1E1B4B]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--electric-blue)]/10 to-transparent"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 1px, transparent 1px), radial-gradient(circle at 75% 75%, #06B6D4 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative p-8">
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="relative group">
              <div className="w-24 h-24 rounded-2xl overflow-hidden ring-3 ring-[var(--electric-blue)]/40 shadow-[0_0_30px_var(--electric-blue)]/30">
                {character.avatar ? (
                  <img 
                    src={character.avatar} 
                    alt={character.name}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-[var(--electric-blue)] to-[var(--cyan-glow)] flex items-center justify-center text-white font-bold text-2xl group-hover:scale-105 transition-transform">
                    {character.name.charAt(0)}
                  </div>
                )}
              </div>
              {character.top && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
              )}
            </div>

            {/* Character Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[var(--text-white)] mb-2">{character.name}</h2>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[var(--electric-blue)]/20 text-[var(--text-light)] text-sm font-medium border border-[var(--electric-blue)]/40">
                  {character.role}
                </span>
                <span className="px-2 py-1 rounded-full bg-[var(--cyan-glow)]/20 text-[var(--cyan-glow)] text-xs font-bold animate-pulse">
                  ELITE
                </span>
              </div>
              <p className="text-[var(--text-light)] text-sm leading-relaxed max-w-lg">
                {character.bio}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
