import Container from "../../shared/Container"

export default function FriendsCard({ friends = [] }) {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'online': return 'bg-green-400'
      case 'in match': return 'bg-[#06B6D4]'
      case 'away': return 'bg-yellow-400'
      default: return 'bg-gray-500'
    }
  }

  return (
    <Container className="p-8 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-8 bg-gradient-to-b from-[#06B6D4] to-[#2563EB] rounded-full"></div>
        <h2 className="text-2xl font-bold text-white">Friends</h2>
        <div className="ml-auto px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-sm font-medium">
          {friends.filter(f => f.status.toLowerCase() === 'online').length} Online
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {friends.map((friend) => (
          <div key={friend.id} className="group p-4 rounded-xl bg-[#1E293B]/60 border border-[#334155]/40 hover:border-[#06B6D4]/50 hover:bg-[#1E293B]/80 transition-all duration-300 cursor-pointer">
            <div className="text-center">
              <div className="relative w-16 h-16 mx-auto mb-3">
                {friend.avatar ? (
                  <img 
                    src={friend.avatar} 
                    alt={friend.name}
                    className="w-full h-full rounded-full object-cover border-2 border-[#06B6D4]/30 group-hover:border-[#06B6D4]/60 transition-colors"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#06B6D4] to-[#2563EB] flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">
                    {friend.name.charAt(0)}
                  </div>
                )}
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full ${getStatusColor(friend.status)} border-2 border-[#0F172A] group-hover:scale-110 transition-transform`} />
              </div>
              <p className="text-white font-semibold group-hover:text-[#06B6D4] transition-colors">{friend.name}</p>
              <p className="text-[#94A3B8] text-xs mt-1">{friend.status}</p>
            </div>
            
            {/* Invite button on hover */}
            <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-full px-3 py-1 text-xs rounded-lg border border-[#06B6D4]/30 text-[#06B6D4] hover:bg-[#06B6D4]/10 hover:border-[#06B6D4] transition-all">
                Invite to Game
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
