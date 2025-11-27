import government from '../assets/images/government.jpg';
import defense from '../assets/images/defense.jpg';
import health from '../assets/images/health.jpg';
import finance from '../assets/images/finance.jpg';
import energy from '../assets/images/energy.jpg';
import infrastructure from '../assets/images/infrastructure.jpg';

export const PROJECT_IMAGES = {
  'bid-guardian': government,
  'counter-terror': defense,
  'zero-wrong-cancer': health,
  'fixed-income': finance,
  'refinery-margin': energy,
  'blackout-preventer': infrastructure,
} as const;

export const SOCIAL_ICONS = {
  x: '/src/assets/icons/x-twitter.svg',
  linkedin: '/src/assets/icons/linkedin.svg',
  youtube: '/src/assets/icons/youtube.svg',
  facebook: '/src/assets/icons/facebook.svg'
} as const;
