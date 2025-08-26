import Container from "../../shared/Container"
import SectionHeader from "./SectionHeader"

export default function EuriFriends({ friends = [] }) {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'online': return 'bg-green-400'
      case 'in match': return 'bg-[var(--electric-blue)]'
      case 'away': return 'bg-yellow-400'
      default: return 'bg-gray-500'
    }
  }

  return (
    <section className="mt-12">
      <SectionHeader title="Friends" />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {(friends || []).map((friend) => (
          <Container key={friend.id} className="hover:shadow-[0_10px_30px_rgba(6,182,212,0.2)] transition-all cursor-pointer">
            <div className="p-4 text-center">
              <div className="relative w-16 h-16 mx-auto mb-3">
                {friend.avatar ? (
                  <img 
                    src={friend.avatar} 
                    alt={friend.name}
                    className="w-full h-full rounded-full object-cover border-2 border-[var(--electric-blue)]/30"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[var(--electric-blue)] to-[var(--cyan-glow)] flex items-center justify-center text-[var(--text-white)] font-bold text-lg">
                    {friend.name.charAt(0)}
                  </div>
                )}
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full ${getStatusColor(friend.status)} border-2 border-[var(--bg-black)]`} />
              </div>
              <p className="text-[var(--text-white)] font-semibold">{friend.name}</p>
              <p className="text-[var(--text-light)]/60 text-xs mt-1">{friend.status}</p>
            </div>
          </Container>
        ))}
      </div>
    </section>
  )
}
