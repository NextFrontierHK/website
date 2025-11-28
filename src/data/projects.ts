import type { ProjectProfile } from '../types/projects';
import { PROJECT_IMAGES } from '../constants/images';

const PROJECTS = {
  'bid-guardian': {
    id: 'bid-guardian',
    title: 'Everyone knew corruption was there. No one could ever quite catch it.',
    subtitle: 'Government Agency Case-Study',
    shortDescription: 'Turns out the patterns weren’t invisible—just too complex for humans to see.',
    longDescription: `For decades, procurement teams lived with a quiet erosion that audits, reforms, and oversight committees could never truly arrest. The signals were buried in contradictions, timing anomalies, and years of fractured documentation—far beyond human pattern recognition. When the agency committed to Sovereign AI, it spent months rebuilding its data spine and political will. But once the system took hold, it exposed the concealed logic behind bad actors with a clarity no investigation had ever achieved. What had drained national capacity for generations finally reversed, and government spending began flowing exactly where it was meant to.`,
    image: PROJECT_IMAGES['bid-guardian'],
  },
  'counter-terror': {
    id: 'counter-terror',
    title: 'Modern threats kept changing faster than doctrine could adapt.',
    subtitle: 'Defense Case-Study',
    shortDescription: 'Predictability finally came from something that could learn as fast as the battlefield moved.',
    longDescription: `Across years of deployment, defense units faced a fog that no satellite feed or briefing could fully penetrate. Threats evolved, terrain shifted, and uncertainty multiplied until even seasoned commanders felt the limits of experience. Integrating Sovereign AI became a long, disciplined pursuit—new training cycles, restructured command rhythms, and systems built to ingest every signal in real time. Once operational, the intelligence began predicting threat patterns before they unfolded, shrinking mission time, tightening precision, and dramatically reducing unintended harm. For the first time in a generation, clarity outpaced chaos.`,
    image: PROJECT_IMAGES['counter-terror'],
  },
  'zero-wrong-cancer': {
    id: 'zero-wrong-cancer',
    title: 'Cancer didn’t lack clues—medicine just lacked a way to read them in time.',
    subtitle: 'Health Care Case-Study',
    shortDescription: 'An AI with decades of patient memory turned noise into life-saving patterns.',
    longDescription: `Hospitals had spent decades battling cancer with courage but without the deep historical perspective the disease demands. Tens of thousands of patient journeys lived inside medical archives, unreachable by human cognition alone. After a long, emotionally demanding integration of Sovereign AI, clinicians gained access to patterns shaped across generations: early markers, treatment trajectories, relapse fingerprints. Diagnostics sharpened, therapies aligned, and the burden of late-stage intervention eased. The shift wasn’t just clinical—it rewrote the tempo of survival.`,
    image: PROJECT_IMAGES['zero-wrong-cancer'],
  },
  'fixed-income': {
    id: 'fixed-income',
    title: 'Markets weren’t random. They were just too fast for humans to track.',
    subtitle: 'Financial Services Case-Study',
    shortDescription: 'One intelligence finally saw the repeating structure everyone else missed.',
    longDescription: `Years of volatility had convinced analysts that certain market moves were pure noise—unpredictable, unrepeatable, untradeable. But the firm suspected something deeper and committed to a multi-year rebuild around Sovereign AI: new data pipelines, new models, new thinking. When the system matured, it uncovered a recurring micro-pattern hiding beneath the chaos, one stable enough to anchor entire strategies. Overnight, uncertainty lost its grip. The firm didn’t just outperform competitors—it redefined what “predictable” meant in modern finance.`,
    image: PROJECT_IMAGES['fixed-income'],
  },
  'refinery-margin': {
    id: 'refinery-margin',
    title: 'Exploration had always been a gamble—educated, expensive, unavoidable.',
    subtitle: 'Energy Case-Study',
    shortDescription: 'The earth’s story was legible all along. It just took a new kind of reader.',
    longDescription: `Geologists had spent lifetimes stitching seismic signals into possibility maps, yet exploration remained half-science, half-luck. The industry’s long-term integration of Sovereign AI changed that trajectory. By unifying decades of subsurface studies and learning from every past success and failure, the system revealed where the earth would yield—and where it never would. Drilling campaigns became deliberate rather than hopeful, production stabilized, and entire energy portfolios steadied in the wake of unprecedented clarity. Guesswork faded into history.`,
    image: PROJECT_IMAGES['refinery-margin'],
  },
  'blackout-preventer': {
    id: 'blackout-preventer',
    title: 'A city can survive outages. But it can’t thrive with them.',
    subtitle: 'Mission-Critical Infrastructure Case-Study',
    shortDescription: 'Reliability came from seeing the grid not as equipment, but as a living organism.',
    longDescription: `For generations, outages were treated as the natural cost of a growing city—annoying, expensive, but expected. Yet each blackout carried invisible losses that quietly constrained economic potential. After multiple failed modernization attempts, the city committed to a deep integration of Sovereign AI: sensor upgrades, unified departments, and a single intelligence interpreting every electrical heartbeat. When the system matured, failure patterns became predictable, preventable, and—eventually—rare. What was once a civic burden became a civic advantage, and the city entered an era defined by stability rather than strain.`,
    image: PROJECT_IMAGES['blackout-preventer'],
  },
};

export const PROJECT_ORDER = Object.freeze([
  'bid-guardian',
  'counter-terror',
  'zero-wrong-cancer',
  'fixed-income',
  'refinery-margin',
  'blackout-preventer',
] as const);

export const projects: ProjectProfile[] = PROJECT_ORDER.map((id) => {
  const project = PROJECTS[id];
  if (!project) {
    throw new Error(`Project with id ${id} not found`);
  }
  return {
    id,
    title: project.title,
    subtitle: project.subtitle,
    shortDescription: project.shortDescription,
    longDescription: project.longDescription,
    image: project.image,
  };
});
