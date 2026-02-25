/**
 * TypeScript types for the Subscription & Credits System
 * Supports the new Credits with Rollover business model
 */

export type PlanTier = "Basic" | "Standard" | "Professional" | "Enterprise";

export type BillingCycle = "mensal" | "trimestral" | "semestral" | "anual";

/**
 * Props for PlanSelector component
 */
export interface PlanSelectorProps {
    currentPlan: PlanTier;
    billingCycle: BillingCycle;
    onBillingCycleChange: (cycle: BillingCycle) => void;
    onSelectPlan: (planTier: PlanTier, billingCycle: BillingCycle) => void;
    isExpired: boolean;
    userId?: string;
    userEmail?: string;
}

