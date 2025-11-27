import type { ProjectProfile } from '../types/projects';
import { PROJECT_IMAGES } from '../constants/images';

const PROJECTS = {
  'bid-guardian': {
    id: 'bid-guardian',
    title: 'The Bid Guardian',
    subtitle: 'Anti-corruption signal analysis',
    shortDescription: 'Big smiles disappear when corrupt bids get caught instantly.',
    longDescription: `Every day, 8,500 bids flood the national Public Procurement Portal. Most people see paperwork.  The Big Guardian sees patterns.
 Its B200 cluster re-scores every single bid in real time — comparing proposals against years of historical performance, pricing behaviors, procurement cycles, and collusion fingerprints invisible to human review.
 When something smells coordinated, inflated, or pre-arranged, it doesn’t wait for an audit. It blocks or forces a re-bid on an average of $1.6M/day in rigged contracts.  Do the math: that’s $584M/year redirected back into clean, competitive spending.

It restores what corruption quietly kills: trust, competition, and the good bidders who stopped participating because the game felt fixed.

The Big Guardian doesn’t protect the system. 
It protects the nation behind it.`,
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
    title: 'Zero-Wrong-Cancer',
    subtitle: 'Precision oncology platform',
    shortDescription: 'No more guessing games with cancer treatment.',
    longDescription: `Multi-omics analysis with subcellular resolution, powered by next-gen spatial biology. Our platform integrates genomic, proteomic, and clinical data to deliver personalized cancer treatment plans with unprecedented accuracy. Advanced AI algorithms analyze tumor heterogeneity at single-cell resolution, identifying rare cell populations that drive treatment resistance. The system continuously learns from global treatment outcomes, refining its recommendations in real-time. Our network of leading cancer centers contributes anonymized data, creating a virtuous cycle of improvement. Patients benefit from reduced side effects and improved survival rates, while clinicians gain powerful decision-support tools. The platform's intuitive interface presents complex molecular data in actionable insights, enabling precision medicine at scale.`,
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
