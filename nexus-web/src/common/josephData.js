import profileAvatar from '../assets/img/avatar/profile.JPG'
import jommAvatar from '../assets/img/avatar/jomm.jpg'
import codImg from '../assets/img/games/cod.jpg'
import gtaImg from '../assets/img/games/Grand_Theft_Auto_V.png'
import warzoneImg from '../assets/img/games/Warzone.png'
import unchartedImg from '../assets/img/games/uncharted.jpg'
import watchDogsImg from '../assets/img/games/Watch_Dogs_2.jpg'
import forzaImg from '../assets/img/games/forza.jpg'

export const josephData = {
  hero: {
    title: 'Nexus Arena',
    subtitle: 'Next‑gen competitive hub',
    cta: 'Enter Lobby',
    videoUrl: '/image/hero.gif',
    videoType: 'image/gif',
  },
  
  character: {
    name: 'Joseph, the Creator',
    role: 'Lead Developer of Nexus',
    avatar: profileAvatar,
    bio: 'I am the head/lead developer of Nexus Arena. Passionate about creating immersive gaming experiences and building the next generation of competitive platforms.',
    top: true,
    level: 99,
    rank: 'Legendary',
    specialties: ['Full-Stack Development', 'Game Design', 'UI/UX', 'System Architecture'],
    stats: {
      coding: 95,
      gaming: 88,
      leadership: 92,
      creativity: 90
    }
  },

  characters: [
    {
      id: 1,
      name: 'Joseph, the Creator',
      role: 'Lead Developer',
      avatar: profileAvatar,
      bio: 'Head developer of Nexus Arena. Passionate about creating immersive gaming experiences.',
      top: true,
      level: 99,
      rank: 'Legendary',
      specialties: ['Full-Stack Development', 'Game Design', 'UI/UX', 'System Architecture'],
      stats: {
        coding: 95,
        gaming: 88,
        leadership: 92,
        creativity: 90
      }
    },
    {
      id: 2,
      name: 'Jom, the Strategist',
      role: 'Game Strategist',
      avatar: jommAvatar,
      bio: 'Master tactician and competitive gaming expert. Specializes in meta analysis and team coordination.',
      top: false,
      level: 87,
      rank: 'Elite',
      specialties: ['Strategy', 'Team Coordination', 'Meta Analysis', 'Competitive Play'],
      stats: {
        strategy: 94,
        teamwork: 89,
        analysis: 91,
        execution: 86
      }
    },
    {
      id: 3,
      name: 'Kyros, the Innovator',
      role: 'Creative Director',
      avatar: '',
      bio: 'Visionary designer pushing the boundaries of gaming aesthetics and user experience.',
      top: false,
      level: 82,
      rank: 'Master',
      specialties: ['Creative Design', 'User Experience', 'Visual Arts', 'Innovation'],
      stats: {
        creativity: 96,
        design: 93,
        innovation: 89,
        aesthetics: 91
      }
    }
  ],

  achievements: [
    'Sharpshooter',
    'Team Player',
    'Marathon Gamer',
    'Malupit',
    'Kupal',
    'Code Master',
    'Design Guru',
    'Team Leader'
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

  tournament: {
    title: 'Nexus Masters: Neon Cup',
    prizePool: '$25,000',
    startsAt: 'in 3 days',
  },

  stats: [
    { label: 'Level', value: 58 },
    { label: 'Wins', value: 342 },
    { label: 'Achievements', value: 47 },
  ],

  statDetails: [
    { label: 'K/D Ratio', value: 2.1, max: 3.0 },
    { label: 'Win Rate', value: 68, max: 100, unit: '%' },
    { label: 'Matches Played', value: 1204, max: 1500 },
    { label: 'MVPs', value: 132, max: 200 },
    { label: 'Avg Damage', value: 820, max: 1000 },
    { label: 'Objectives Secured', value: 74, max: 100, unit: '%' },
  ],

  friends: [
    { id: 1, name: 'Jom', status: 'Online', avatar: jommAvatar },
    { id: 2, name: 'Kyros', status: 'Online', avatar: '' },
    { id: 3, name: 'Euri', status: 'In Match', avatar: '' },
    { id: 4, name: 'Bj', status: 'Away', avatar: '' },
  ],

  games: [
    { id: 1, title: 'Call of Duty: WARZONE', genre: 'Battle Royale', top: true, image: warzoneImg },
    { id: 2, title: 'Call of Duty: Black Ops 3', genre: 'FPS Multiplayer', image: codImg },
    { id: 3, title: 'Grand Theft Auto V', genre: 'Open World Crime', image: gtaImg },
    { id: 4, title: 'Uncharted 4', genre: 'Action Adventure', image: unchartedImg },
    { id: 5, title: 'Watch Dogs 2', genre: 'Open World Hacker', image: watchDogsImg },
    { id: 6, title: 'Forza Horizon 5', genre: 'Racing', image: forzaImg },
  ],
}


