import jommAvatar from '../assets/img/avatar/jomm.jpg'
import josephAvatar from '../assets/img/avatar/profile.JPG'
import kyrosAvatar from '../assets/img/avatar/kyros.jpg'
// Fighting Games - Using actual game images
import streetFighterImg from '../assets/img/games/streetfighet.jpg' // Street Fighter 6
import tekkenImg from '../assets/img/games/tekken.jpg' // Tekken 8
import mortalKombatImg from '../assets/img/games/mortalkombat.jpg' // Mortal Kombat 1

export const kyrosData = {
  hero: {
    badge: 'Kyros • Fighting Game Master',
    title: 'Neon Combat Elite',
    subtitle:
      'Master of the fighting game arena with purple neon style. Dominate tournaments with precision combos and tactical mind games in the ultimate combat experience.',
    primaryCta: 'Enter Arena',
    secondaryCta: 'View Stats',
  },

  character: {
    name: 'Kyros Quirimit',
    ign: 'kyrosimp',
    team: 'Neon Fighters',
    role: 'Professional Fighting Game Player',
    avatar: kyrosAvatar,
    bio: 'Elite fighting game competitor specializing in technical combos and frame data mastery. Member of Neon Fighters team with expertise in Street Fighter, Tekken, and tournament-level play.',
    top: true,
  },
  
  stats: [
    { label: 'Tournament Wins', value: '47' },
    { label: 'Combo Accuracy', value: '94%' },
    { label: 'Ranked Matches', value: '3,284' },
  ],

  featuredGames: [
    { id: 1, title: 'Street Fighter 6', tag: 'Fighting', image: streetFighterImg },
    { id: 2, title: 'Tekken 8', tag: 'Fighting', image: tekkenImg },
    { id: 3, title: 'Mortal Kombat 1', tag: 'Fighting', image: mortalKombatImg },
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


