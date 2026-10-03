export type ScreenId =
  | 'control-tower'
  | 'route-map'
  | 'shipments'
  | 'disruption-lab'
  | 'recovery-center'
  | 'quantum-lab'
  | 'audit-trail'
  | 'ask-fluxq';

export interface Consignment {
  id: string;
  manifest: string;
  route: string;
  dest: string;
  riskScore: number;
  slaBreachProb: number;
  penaltyExp: string;
  status: string;
  cargoValue: string;
  eta: string;
  origEta: string;
  delayMins: number;
  thermalLimit?: string;
  liveTemp?: string;
  passiveLife?: string;
  batch?: string;
  payload?: string;
}

export interface DisruptionEvent {
  id: string;
  name: string;
  type: string;
  epicenter: string;
  coords: string;
  impactRadiusKm: number;
  expectedDelayMins: number;
  affectedCount: number;
  highValueCount: number;
  status: string;
  windSpeed: string;
  precipitation: string;
  runwayRvr: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  timestamp: string;
  text?: string;
  isStructuredAssessment?: boolean;
  isImpactCascade?: boolean;
}
