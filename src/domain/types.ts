// JUDO Experience Shell v1.1 — Domain Types
// Per C-03 Data Architecture + COND-05 authored records

export type StudioId =
  | 'observatory'
  | 'stone-garden'
  | 'craftsman-workshop'
  | 'architect-studio'
  | 'strategy-room';

export type RuntimeStage = 'SHAPE' | 'ALIGN' | 'DESIGN' | 'CALIBRATE' | 'ACTIVATE' | 'LEARN';

export type CapabilityKey = 'SCOUT' | 'QDS' | 'STARDANCE' | 'DOCENTE' | 'VMG' | 'FUTURE_SERVICE';

export type StudioMaturity = 'detailed' | 'structural';

export type MetricIntent = 'up' | 'down' | 'neutral';

export type PanelKind = 'insights' | 'visualization' | 'health-gauge' | 'recent-briefs';

// --- Studio interfaces (matches COND-05 authored JSON schema) ---

export interface StudioAccent {
  primary: string;
  soft: string;
  highlight?: string;
}

export interface WorkflowStep {
  id: string;
  label: string;
  caption: string;
  mapsToStage?: RuntimeStage;
}

export interface StudioCapability {
  id: string;
  label: string;
  presentInStudio: boolean;
  description: string;
}

export interface StudioMetric {
  id: string;
  label: string;
  value: string;
  delta?: string;
  intent: MetricIntent;
}

export interface StudioPanel {
  id: string;
  kind: PanelKind;
  title: string;
  dataRef?: string;
}

export interface IntegrationSlot {
  id: string;
  capability: string;
  status: 'placeholder';
  label: string;
  description: string;
}

export interface Studio {
  id: StudioId;
  name: string;
  verb: string;
  tagline: string;
  purpose: string;
  bestFor: string[];
  accent: StudioAccent;
  maturity: StudioMaturity;
  heroImageRef: string;
  workflow: { steps: WorkflowStep[] };
  capabilities: StudioCapability[];
  metrics: StudioMetric[];
  panels: StudioPanel[];
  integrationSlots: IntegrationSlot[];
  // JXS v1.1.1 — use-case routing fields (static config only)
  useCases?: string[];
  exampleBriefs?: string[];
  loopPreview?: string;
  recommendedStart?: boolean;
  recommendedStartLabel?: string;
  structuralNote?: string;
  // JXS v1.1.3 — literal environment visual fields (static config only)
  visual?: {
    environmentImage: string;
    alt: string;
    objectPosition?: string;
    heroObjectPosition?: string;
    motif?: string;
  };
}

// --- Brief interfaces (matches COND-05 / F-01 corrected schema) ---

export interface LifecycleEntry {
  stage: RuntimeStage;
  studio: StudioId | string;
  actor: string;
  timestamp: string;
  note: string;
}

export interface BriefSignal {
  id: string;
  label: string;
  directed: boolean;
  note: string;
}

export interface CandidateBelief {
  id: string;
  statement: string;
  derivedFrom: string[];
}

export interface BriefEvidence {
  id: string;
  summary: string;
  sourceLabel: string;
  strength: 'strong' | 'moderate' | 'weak';
}

export interface ConfidenceFraming {
  level: string;
  rationale: string;
  isComputed: false;
}

export interface BriefGovernance {
  humanInCommand: true;
  lastActor: string;
}

export interface Brief {
  id: string;
  title: string;
  originStudio: StudioId | string;
  currentStage: RuntimeStage;
  lifecycle: LifecycleEntry[];
  signals: BriefSignal[];
  candidateBeliefs: CandidateBelief[];
  evidence: BriefEvidence[];
  confidence: ConfidenceFraming;
  decisionState: string | null;
  governance: BriefGovernance;
  integrationSlots: IntegrationSlot[];
}
