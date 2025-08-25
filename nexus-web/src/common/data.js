import profileAvatar from '../assets/img/avatar/profile.JPG'

export const josephData = {
  hero: {
    title: 'Nexus Arena',
    subtitle: 'Next‑gen competitive hub',
    cta: 'Enter Lobby',
  },
  
  character: {
    name: 'Joseph, the Creator',
    role: 'Lead Developer of Nexus',
    avatar: profileAvatar,
    bio: 'I am the head/lead developer of Nexus Arena.',
    top: true,
  },

  achievements: [
    'Sharpshooter',
    'Team Player',
    'Marathon Gamer',
    'Malupit',
  ],

  activity: [
    { action: 'Won a ranked match in Mobile Legends', when: '2m ago' },
    { action: 'Unlocked Epic Skin: Cyber Ronin', when: '1h ago' },
    { action: 'Joined Nexus Masters tournament', when: '3h ago' },
  ],

  news: [
    { title: 'Patch 2.4: Balance Updates and New Map', source: 'Nexus Wire', tag: 'Update' },
    { title: 'Esports Finals Schedule Announced', source: 'Nexus Esports' },
  ],

  stats: [
    { label: 'Level', value: 58 },
    { label: 'Wins', value: 342 },
    { label: 'Achievements', value: 47 },
  ],

  // New detailed stats for richer UI
  statDetails: [
    { label: 'K/D Ratio', value: 2.1, max: 3.0 },
    { label: 'Win Rate', value: 68, max: 100, unit: '%' },
    { label: 'Matches Played', value: 1204, max: 1500 },
    { label: 'MVPs', value: 132, max: 200 },
    { label: 'Avg Damage', value: 820, max: 1000 },
    { label: 'Objectives Secured', value: 74, max: 100, unit: '%' },
  ],

  games: [
    { id: 1, title: 'Mobile Legends: Bang Bang', genre: 'MOBA', top: true },
    { id: 2, title: 'Call of Duty: Mobile', genre: 'FPS & Battle Royale' },
    { id: 3, title: 'Quantum Siege', genre: 'Strategy' },
  ],
}

export const emptyData = {
  hero: { title: 'Loading...', subtitle: 'Please wait', cta: '...' },
  character: null,
  stats: [],
  games: [],
}

