import type { ProjectProfile } from '../types/projects';
import { PROJECT_IMAGES } from '../constants/images';

const PROJECTS = {
  'bid-guardian': {
    id: 'bid-guardian',
    title: 'The Bid Guardian',
    subtitle: 'Anti-corruption signal analysis',
    shortDescription: 'The huge smiles of those who prefer to stay hidden disappear the moment their corrupt bids are caught.',
    longDescription: `Imagine a system that reads 8,500 government procurement bids a day, re-scoring each one through an advanced IT engine that compares proposals against years of pricing behavior, historical performance, procurement cycles, and collusion fingerprints. It intervenes the moment it detects a masked, inflated bid, redirecting the equivalent of $1B+ a year back into clean, competitive spending and reviving the trust corruption quietly suffocates—bringing back the honest bidders who walked away because the game felt rigged.`,
    image: PROJECT_IMAGES['bid-guardian'],
  },
  'counter-terror': {
    id: 'counter-terror',
    title: 'The Surprise Ditcher',
    subtitle: 'Continuous threat pattern analysis',
    shortDescription: 'Once the enemy no longer owns the unknown, their strategy and tactics stand stripped to the bone.',
    longDescription: `5,760 times per day, as patrols rotate, drones cycle overhead, and squads file routine field updates, an IT analysis engine in the defense network absorbs it all—radio logs, convoy manifests, sensor drift, micro-shifts in movement patterns—and recomposes the chaos into a live threat map; when it catches a roadside signature forming where none should, it quietly reroutes a convoy and dissolves an ambush before anyone in uniform realizes how close it came—the kind of silent vigilance that turns danger into just another ordinary shift.`,
    image: PROJECT_IMAGES['counter-terror'],
  },
  'zero-wrong-cancer': {
    id: 'zero-wrong-cancer',
    title: 'Zero-Wrong-Cancer Project',
    subtitle: 'Precision oncology platform',
    shortDescription: 'No more guessing games with cancer treatment.',
    longDescription: `Imagine training an AI model on decades of your own patient treatments—no external datasets, no shared weights, just the biological truth of your population—so every new case avoids treating the cancer instead of the person, giving toxic therapies with little chance of benefit, and sending patients down the wrong pathway because early characterization was incomplete; suddenly thousands would be spared chemotherapy that would never help them, hundreds would be reassigned to targeted and immune therapies with far higher predicted response, and treatment plans would achieve >94% concordance with tumor boards—triggering interdisciplinary reviews when they don’t.`,
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
