export default function FriendsCard({ friends = [] }) {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'online': return 'bg-green-400'
      case 'in match': return 'bg-blue-400'
      case 'away': return 'bg-yellow-400'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="p-8 bg-gradient-to-br from-black via-slate-900/90 to-black border border-white/20 backdrop-blur-sm shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
        <h2 className="text-2xl font-bold text-white">Friends</h2>
        <div className="ml-auto px-3 py-1 rounded-full bg-green-400/10 text-green-400 text-sm font-medium">
          {friends.filter(f => f.status.toLowerCase() === 'online').length} Online
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {friends.map((friend) => (
          <div key={friend.id} className="group p-4 rounded-xl bg-slate-800/40 border border-gray-700/50 hover:border-green-400/50 hover:bg-slate-800/60 transition-all duration-300 cursor-pointer">
            <div className="text-center">
              <div className="relative w-16 h-16 mx-auto mb-3">
                {friend.avatar ? (
                  <img 
                    src={friend.avatar} 
                    alt={friend.name}
                    className="w-full h-full rounded-full object-cover border-2 border-green-400/30 group-hover:border-green-400/60 transition-colors"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">
                    {friend.name.charAt(0)}
                  </div>
                )}
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full ${getStatusColor(friend.status)} border-2 border-slate-800 group-hover:scale-110 transition-transform`} />
              </div>
              <p className="text-white font-semibold group-hover:text-green-400 transition-colors">{friend.name}</p>
              <p className="text-gray-400 text-xs mt-1">{friend.status}</p>
            </div>
            
            {/* Invite button on hover */}
            <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-full px-3 py-1 text-xs rounded-lg border border-green-400/30 text-green-400 hover:bg-green-400/10 hover:border-green-400 transition-all font-mono">
                INVITE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
