import jommAvatar from '../assets/img/avatar/jomm.jpg'
import josephAvatar from '../assets/img/avatar/profile.JPG'
import euriAvatar from '../assets/img/avatar/euri.jpg'
import kyrosAvatar from '../assets/img/avatar/kyros.jpg'
import bjAvatar from '../assets/img/avatar/bj.jpg'
// Nintendo Switch Games - Using actual game images
import marioKartImg from '../assets/img/games/mario.jpg' // Mario Kart 8 Deluxe
import zelda from '../assets/img/games/zelda.jpg' // The Legend of Zelda
import smashBros from '../assets/img/games/smash bros.jpg' // Super Smash Bros Ultimate

export const euriData = {
  hero: {
    badge: 'Euri • Nintendo Switch Gamer',
    title: 'Portable Gaming Master',
    subtitle:
      'Experience gaming freedom with Euri\'s Nintendo Switch setup. From docked console gaming to handheld adventures, master every title with precision and joy.',
    primaryCta: 'Start Playing',
    secondaryCta: 'Browse Games',
  },

  character: {
    name: 'Euri Gene Jiao',
    ign: 'EuriGamer',
    team: 'Nintendo Elite',
    role: 'Nintendo Switch Pro Player',
    avatar: euriAvatar,
    bio: 'Professional Nintendo Switch competitor specializing in fighting games and platformers. Member of Nintendo Elite team with expertise in tournament-level Smash Bros and speedrunning.',
    top: true,
  },
  
  stats: [
    { label: 'Hours Played', value: '2,847' },
    { label: 'Games Owned', value: '156' },
    { label: 'Achievements', value: '892' },
  ],

  featuredGames: [
    { id: 1, title: 'Mario Kart 8 Deluxe', tag: 'Racing', image: marioKartImg },
    { id: 2, title: 'The Legend of Zelda', tag: 'Adventure', image: zelda },
    { id: 3, title: 'Super Smash Bros', tag: 'Fighting', image: smashBros },
  ],

  achievements: [
    'Electric Storm',
    'Digital Phantom',
    'Code Breaker',
    'Elite Tier'
  ],

  friends: [
    { id: 1, name: 'Kyros', status: 'Online', avatar: kyrosAvatar },
    { id: 2, name: 'Jom', status: 'In Match', avatar: jommAvatar },
    { id: 3, name: 'Joseph', status: 'Online', avatar: josephAvatar },
    { id: 4, name: 'BJ', status: 'Away', avatar: bjAvatar },
  ],
  clips: [
    { id: 1, title: 'Lightning reflexes', duration: '0:23' },
    { id: 2, title: 'Cyber takedown', duration: '0:18' },
    { id: 3, title: 'Perfect execution', duration: '0:29' },
  ],
  activity: [
    { action: 'Achieved \'Electric Storm\' badge', when: 'just now' },
    { action: 'Completed elite challenge', when: '2 min ago' },
    { action: 'New high score recorded', when: '5 min ago' },
    { action: 'Ranked up to Elite Tier', when: '12 min ago' },
  ],
  news: [
    { title: 'Nexus Electric Tournament', source: 'Nexus' },
    { title: 'Blue Lightning Update', source: 'Game Updates' },
    { title: 'Euri featured in spotlight', source: 'Community' },
  ],
}
