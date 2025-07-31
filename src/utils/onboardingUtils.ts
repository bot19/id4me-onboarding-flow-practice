import type { IMobileAuth } from '../types';
import { TOTAL_ONBOARDING_STEPS } from '../constants';

export const hasExpired = (mobileAuth: IMobileAuth | null): boolean => {
  if (!mobileAuth) return true;
  return Date.now() > mobileAuth.expires;
};

export const totalSteps = TOTAL_ONBOARDING_STEPS;
