import type { ProjectProfile } from '../types/projects';
import { PROJECT_IMAGES } from '../constants/images';

const PROJECTS = {
  'bid-guardian': {
    id: 'bid-guardian',
    title: 'The Bid Guardian',
    subtitle: 'Anti-corruption signal analysis',
    shortDescription: 'Big smiles of those who prefer not to be identified disappear when their corrupt bids get caught instantly.',
    longDescription: `Imagine a system that reads 8,500 government procurement bids a day, re-scoring each one through an advanced IT engine that compares proposals against years of pricing behavior, historical performance, procurement cycles, and collusion fingerprints. It intervenes the moment it detects a masked, inflated bid, redirecting the equivalent of $1B+ a year back into clean, competitive spending and reviving the trust corruption quietly suffocates—bringing back the honest bidders who walked away because the game felt rigged.`,
    image: PROJECT_IMAGES['bid-guardian'],
  },
  'counter-terror': {
    id: 'counter-terror',
    title: 'Elite Counter-Terror Unit',
    subtitle: 'When edge becomes baseline',
    shortDescription: 'You wonder what happens when this edge becomes the new baseline.',
    longDescription: `Field-grade inference with mission profiles, denial-resilient comms, and rapid redeployment. Our elite unit operates at the intersection of human expertise and cutting-edge technology, specializing in high-risk counter-terrorism operations. The system integrates real-time satellite imagery, social media monitoring, and human intelligence into a unified operational picture. Advanced predictive analytics help anticipate threats before they materialize, while our rapid response teams maintain 24/7 readiness. The platform's encrypted communication channels ensure secure coordination across multiple agencies and international partners. Training simulations incorporate machine learning to adapt to emerging threats, while post-operation analytics provide continuous improvement.`,
    image: PROJECT_IMAGES['counter-terror'],
  },
  'zero-wrong-cancer': {
    id: 'zero-wrong-cancer',
    title: 'Zero-Wrong-Cancer Project',
    subtitle: 'Precision oncology platform',
    shortDescription: 'No more guessing games with cancer treatment.',
    longDescription: `Every new oncology case in the health system now runs through a private B200 cluster housed in an off-site sovereign-grade datacenter, isolated from public networks and built solely for clinical inference workloads.

The model is fully proprietary — trained only on the system’s multi-decade archive of pathology slides, diagnostic reports, longitudinal outcomes, and continuously streaming genomics from current patients.  No external datasets. No shared weights. Purely the biological patterns of the population it serves. 
In its first year of deployment, the platform produced shifts that oncologists immediately felt at the bedside:

• 1,617 patients avoided chemotherapy regimens that showed no projected therapeutic benefit.
 • 429 patients were reassigned to targeted agents and immunotherapies with a significantly higher predicted response profile.
 • Treatment recommendations showed >94% concordance with tumor boards, and non-concordant cases triggered documented interdisciplinary reviews.

Projected five-year survival improvement: +31%. Actuarial value of extended life-years: $1.9 billion annually.

When the final clinical validation and drift-monitoring data were delivered, the system’s CFO signed a 10-year contract extension on the spot — with a fountain pen and zero board discussion.

Because once cancer treatment becomes precise rather than probabilistic, the entire definition of “standard of care” shifts with it.`,
    image: PROJECT_IMAGES['zero-wrong-cancer'],
  },
  'fixed-income': {
    id: 'fixed-income',
    title: 'Inv. Bank Fixed-Income Desk',
    subtitle: 'Velocity without noise',
    shortDescription: 'When money moves this clean, everyone else looks slow.',
    longDescription: `Advanced event stream processing platform that normalizes and analyzes high-velocity financial data in real-time. Our proprietary algorithms detect microsecond-level market inefficiencies across global fixed-income markets, enabling lightning-fast trading decisions. The system processes millions of transactions per second with sub-millisecond latency, maintaining perfect synchronization across distributed data centers. Machine learning models continuously adapt to changing market conditions, identifying hidden patterns and opportunities. Built-in risk controls ensure compliance with regulatory requirements while maximizing execution quality. The platform's intuitive dashboard provides traders with real-time insights and predictive analytics. Our solution has been battle-tested in the most demanding trading environments, delivering consistent alpha generation with minimal drawdowns.`,

    image: PROJECT_IMAGES['fixed-income'],
  },
  'refinery-margin': {
    id: 'refinery-margin',
    title: 'Refinery Margin AI',
    subtitle: 'Margins that do not come back down',
    shortDescription: 'Hard to ignore when the margin jumps and never comes back down.',
    longDescription: `Comprehensive refinery optimization system that leverages AI to maximize margins while ensuring operational reliability. Our platform integrates real-time sensor data from thousands of points across the refining process, from crude intake to product distribution. Advanced machine learning models predict equipment degradation and recommend preventive maintenance, reducing unplanned downtime by up to 45%. The system continuously optimizes production schedules based on market prices, feedstock quality, and operational constraints. Environmental monitoring ensures compliance with emissions regulations while maintaining peak efficiency. Customizable dashboards provide operators with actionable insights and predictive analytics. The platform's robust architecture ensures 99.999% uptime, with automatic failover between geographically distributed data centers.`,

    image: PROJECT_IMAGES['refinery-margin'],
  },
  'blackout-preventer': {
    id: 'blackout-preventer',
    title: 'Blackout Preventer',
    subtitle: 'When the grid stops getting surprised',
    shortDescription: 'So absolutely wild what happens when the grid stops getting surprised.',
    longDescription: `Next-generation grid management system that prevents blackouts through predictive analytics and autonomous response capabilities. Our AI-powered platform analyzes real-time data from smart meters, weather satellites, and IoT sensors to forecast demand and generation with unprecedented accuracy. The system automatically detects potential grid instabilities and implements corrective actions within milliseconds, preventing cascading failures. Advanced machine learning models optimize power flow across the entire transmission network, reducing line losses by up to 18%. The platform integrates seamlessly with renewable energy sources, managing their intermittent nature through intelligent forecasting and storage coordination. Regulatory compliance is built into every decision, with comprehensive audit trails and reporting.`,

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
