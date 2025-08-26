// Game images
import unchartedImg from '../assets/img/games/uncharted.jpg'
import watchDogsImg from '../assets/img/games/Watch_Dogs_2.jpg'
import codImg from '../assets/img/games/cod.jpg'
import gtaImg from '../assets/img/games/Grand_Theft_Auto_V.png'
import warzoneImg from '../assets/img/games/Warzone.png'
import forzaImg from '../assets/img/games/forza.jpg'
import lostLegacyImg from '../assets/img/games/lost.jpg'

// Avatar
import jommAvatar from '../assets/img/avatar/jomm.jpg'
import josephAvatar from '../assets/img/avatar/profile.JPG'

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
    name: 'Jerome Benitez',
    ign: 'sgt.jom',
    team: 'ctOS',
    role: 'Professional Esports Player',
    avatar: jommAvatar,
    bio: 'Elite gaming operative specializing in competitive FPS and action games. Member of ctOS esports team with a focus on tactical gameplay and precision execution.',
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

  tournament: {
    title: 'Nexus Masters: Neon Cup',
    prizePool: '$25,000',
    startsAt: 'in 3 days',
  },

  stats: [
    { label: 'Games Owned', value: 24 },
    { label: 'Tournaments Won', value: 23 },
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

  friends: [
    { id: 1, name: 'Joseph', status: 'Online', avatar: josephAvatar },
    { id: 2, name: 'Kyros', status: 'In Match', avatar: '' },
    { id: 3, name: 'Euri', status: 'Online', avatar: '' },
    { id: 4, name: 'Bj', status: 'Away', avatar: '' },
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
