import { PlanTier } from "./types/subscription.types";

export interface PlanLimitConfig {
    credits: any;
    max_template_agents: number;
    max_custom_agents: number;
    external_integration: boolean;
    templates_enabled: boolean;
}

export const PLAN_LIMITS: Record<PlanTier, PlanLimitConfig> = {
    Basic: {
        max_template_agents: 9999,
        max_custom_agents: 3,
        external_integration: true,
        templates_enabled: true,

        credits: {
            monthly: 1800,
            rolloverCeiling: 2700,
        },
    },
    Standard: {
        max_template_agents: 9999,
        max_custom_agents: 10,
        external_integration: true,
        templates_enabled: true,

        credits: {
            monthly: 7000,
            rolloverCeiling: 12250,
        },
    },
    Professional: {
        max_template_agents: 9999,
        max_custom_agents: 25,
        external_integration: true,
        templates_enabled: true,
        credits: {
            monthly: 20000,
            rolloverCeiling: 40000,
        },
    },
    Enterprise: {
        max_template_agents: 9999,
        max_custom_agents: 9999,
        external_integration: true,
        templates_enabled: true,
        credits: {
            monthly: -1,
            rolloverCeiling: -1,
        },
    },
};
