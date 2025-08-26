import jommAvatar from '../assets/img/avatar/jomm.jpg'
import josephAvatar from '../assets/img/avatar/profile.JPG'
import bjAvatar from '../assets/img/avatar/bj.jpg'
// PS Vita Games - Using actual game images
import personaImg from '../assets/img/games/persona.jpg' // Persona 4 Golden
import unchartedVita from '../assets/img/games/goldenabyss.png' // Uncharted Golden Abyss
import gravityRush from '../assets/img/games/gravity.png' // Gravity Rush

export const bjData = {
  hero: {
    badge: 'BJ • PS Vita Collector',
    title: 'Handheld Excellence',
    subtitle:
      'Master the art of portable gaming with BJ\'s PS Vita collection. From OLED screen perfection to dual analog precision, experience handheld gaming at its finest.',
    primaryCta: 'Power On',
    secondaryCta: 'Game Library',
  },

  character: {
    name: 'BJ Morta',
    ign: 'VitaMaster_BJ',
    team: 'Handheld Legends',
    role: 'PS Vita Champion',
    avatar: bjAvatar,
    bio: 'Professional handheld gaming specialist and PS Vita advocate. Member of Handheld Legends team, focusing on portable gaming excellence and rare game collecting.',
    top: true,
  },
  
  stats: [
    { label: 'Vita Games', value: '89' },
    { label: 'Trophies', value: '1,247' },
    { label: 'Remote Play', value: '340h' },
  ],

  featuredGames: [
    { id: 1, title: 'Persona 4 Golden', tag: 'JRPG', image: personaImg },
    { id: 2, title: 'Uncharted: Golden Abyss', tag: 'Adventure', image: unchartedVita },
    { id: 3, title: 'Gravity Rush', tag: 'Action', image: gravityRush },
  ],

  achievements: [
    'Royal Crown',
    'Strategic Mind',
    'Legend Slayer',
    'Crown Elite'
  ],

  friends: [
    { id: 1, name: 'Euri', status: 'Online', avatar: '' },
    { id: 2, name: 'Kyros', status: 'In Match', avatar: '' },
    { id: 3, name: 'Jom', status: 'Online', avatar: jommAvatar },
    { id: 4, name: 'Joseph', status: 'Away', avatar: josephAvatar },
  ],
  clips: [
    { id: 1, title: 'Royal victory', duration: '0:34' },
    { id: 2, title: 'Strategic mastery', duration: '0:21' },
    { id: 3, title: 'Crown moment', duration: '0:27' },
  ],
  activity: [
    { action: 'Unlocked \'Royal Crown\' achievement', when: 'just now' },
    { action: 'Won ranked match', when: '3 min ago' },
    { action: 'Completed royal quest', when: '8 min ago' },
    { action: 'Reached Crown Elite status', when: '15 min ago' },
  ],
  news: [
    { title: 'Royal Championship Series', source: 'Nexus' },
    { title: 'Crown Update Released', source: 'Patch Notes' },
    { title: 'BJ crowned player of the week', source: 'Spotlight' },
  ],
}
