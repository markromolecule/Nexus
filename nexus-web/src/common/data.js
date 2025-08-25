import profileAvatar from '../assets/img/avatar/profile.JPG'
import jommAvatar from '../assets/img/avatar/jomm.jpg'

// Game images
import unchartedImg from '../assets/img/games/uncharted.jpg'
import watchDogsImg from '../assets/img/games/Watch_Dogs_2.jpg'
import codImg from '../assets/img/games/cod.jpg'
import gtaImg from '../assets/img/games/Grand_Theft_Auto_V.png'
import warzoneImg from '../assets/img/games/Warzone.png'
import forzaImg from '../assets/img/games/forza.jpg'
import lostLegacyImg from '../assets/img/games/lost.jpg'

export const josephData = {
  hero: {
    title: 'Nexus Arena',
    subtitle: 'Next‑gen competitive hub',
    cta: 'Enter Lobby',
    // Optional: provide a video or gif URL to showcase in the hero media panel
    videoUrl: '',
    videoType: 'video/mp4',
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

export const jomData = {
  hero: {
    title: 'Jom Nexus',
    subtitle: 'Where innovation meets execution',
    cta: 'Start Building',
    // Optional: provide a video or gif URL to showcase in the hero media panel
    videoUrl: '',
    videoType: 'video/mp4',
    backgroundImage: lostLegacyImg,
  },
  
  character: {
    name: 'Sgt. Jom',
    role: 'Streamer & Esports Player',
    avatar: jommAvatar,
    bio: 'Grinding ranked matches, breaking speedrun records, and streaming the chaos. Always hunting for that perfect play.',
    top: true,
  },

  achievements: [
    'Uncharted Legend',
    'GTA Heist Master',
    'Warzone Champion',
    'Forza Speed Demon',
    'Watch Dogs Hacker',
    'Black Ops Elite',
    'Trophy Collector',
    'Perfect Driver',
  ],

  activity: [
    { action: 'Unlocked Uncharted 4 platinum trophy', when: '30m ago' },
    { action: 'Won 5 consecutive Warzone matches', when: '2h ago' },
    { action: 'Completed GTA V Diamond Casino Heist', when: '3h ago' },
    { action: 'Set new Forza Horizon lap record', when: '5h ago' },
    { action: 'Maxed out Watch Dogs hacking skills', when: '8h ago' },
    { action: 'Reached prestige in Black Ops 3', when: '1d ago' },
  ],

  news: [
    { title: 'Uncharted 4: A Thief\'s End Remastered Edition Coming Soon', source: 'PlayStation Blog', tag: 'Breaking', image: unchartedImg },
    { title: 'Grand Theft Auto V Gets New Online Heist DLC', source: 'Rockstar Games', tag: 'Trending', image: gtaImg },
    { title: 'Call of Duty: Black Ops 3 Zombies Chronicles Available', source: 'Activision', tag: 'New', image: codImg },
    { title: 'Watch Dogs 2 Free Weekend Event This Month', source: 'Ubisoft', image: watchDogsImg },
    { title: 'Forza Horizon 5 Hot Wheels Expansion Released', source: 'Xbox Wire', image: forzaImg },
  ],

  stats: [
    { label: 'Games Owned', value: 24 },
    { label: 'Hours Played', value: 1847 },
    { label: 'Achievements', value: 156 },
  ],

  // New detailed stats for richer UI
  statDetails: [
    { label: 'Win Rate', value: 94, max: 100, unit: '%' },
    { label: 'Completion Rate', value: 87, max: 100, unit: '%' },
    { label: 'Kill/Death Ratio', value: 1.42, max: 2.0 },
    { label: 'Trophy Collection', value: 89, max: 100, unit: '%' },
    { label: 'Skill Rating', value: 96, max: 100 },
    { label: 'Team Play Score', value: 92, max: 100, unit: '%' },
  ],

  games: [
    { id: 1, title: 'Uncharted 4: A Thief\'s End', genre: 'Action-Adventure', top: true, image: unchartedImg },
    { id: 2, title: 'Watch Dogs', genre: 'Open World Hacking', image: watchDogsImg },
    { id: 3, title: 'Call of Duty: Black Ops 3', genre: 'FPS Multiplayer', image: codImg },
    { id: 4, title: 'Grand Theft Auto V', genre: 'Open World Crime', top: true, image: gtaImg },
    { id: 5, title: 'Call of Duty: Warzone', genre: 'Battle Royale', image: warzoneImg },
    { id: 6, title: 'Forza Horizon', genre: 'Racing Simulation', image: forzaImg },
  ],
}

export const emptyData = {
  hero: { title: 'Loading...', subtitle: 'Please wait', cta: '...' },
  character: null,
  stats: [],
  games: [],
}

