import jommAvatar from '../assets/img/avatar/jomm.jpg'
import josephAvatar from '../assets/img/avatar/profile.JPG'
import warzoneImg from '../assets/img/games/Warzone.png'
import forzaImg from '../assets/img/games/forza.jpg'
import gtaImg from '../assets/img/games/Grand_Theft_Auto_V.png'

export const kyrosData = {
  hero: {
    badge: 'Kyros • White Neon Theme',
    title: 'Elevate Your Play',
    subtitle:
      'A clean, modern, and futuristic dashboard for Kyros. Track your performance, discover new titles, and flex your achievements — all in a crisp white theme.',
    primaryCta: 'Enter Dashboard',
    secondaryCta: 'Browse Games',
  },
  
  stats: [
    { label: 'Win Rate', value: '68%' },
    { label: 'Avg. K/D', value: '2.1' },
    { label: 'Matches', value: '1,274' },
  ],

  featuredGames: [
    { id: 1, title: 'Warzone', tag: 'Top', image: warzoneImg },
    { id: 2, title: 'Forza Horizon', tag: 'Top', image: forzaImg },
    { id: 3, title: 'GTA V', tag: 'Top', image: gtaImg },
  ],

  achievements: [
    'Neon Master',
    'Tactician',
    'Speed Runner',
    'Top 1%'
  ],

  friends: [
    { id: 1, name: 'Jom', status: 'Online', avatar: jommAvatar },
    { id: 2, name: 'Joseph', status: 'In Match', avatar: josephAvatar },
    { id: 3, name: 'Euri', status: 'Offline', avatar: '' },
    { id: 4, name: 'BJ', status: 'Offline', avatar: '' },
  ],
  clips: [
    { id: 1, title: 'Insane clutch', duration: '0:17' },
    { id: 2, title: 'Drift montage', duration: '0:24' },
    { id: 3, title: 'Stealth takedowns', duration: '0:31' },
  ],
  activity: [
    { action: 'Unlocked ‘Neon Master’ badge', when: 'just now' },
    { action: 'Won 3 matches in a row', when: 'just now' },
    { action: 'New personal best K/D', when: 'just now' },
    { action: 'Completed weekly missions', when: 'just now' },
  ],
  news: [
    { title: 'Nexus Neon Cup announced', source: 'Nexus' },
    { title: 'Next‑gen update released', source: 'Patch Notes' },
    { title: 'Kyros featured creator', source: 'Spotlight' },
  ],
}


