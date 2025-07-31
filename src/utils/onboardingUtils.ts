import type { IMobileAuth } from '../types';
import type { OnboardingAction } from '../contexts/onboardingReducer';
import { TOTAL_ONBOARDING_STEPS } from '../constants';

export const hasExpired = (mobileAuth: IMobileAuth | null): boolean => {
  if (!mobileAuth) return true;
  return Date.now() > mobileAuth.expires;
};

export const validateMobileAuth = (
  mobileAuth: IMobileAuth | null,
  dispatch: React.Dispatch<OnboardingAction>
): boolean => {
  if (hasExpired(mobileAuth)) {
    dispatch({ type: 'RESET_TO_STEP_1' });
    return false;
  }
  return true;
};

export const totalSteps = TOTAL_ONBOARDING_STEPS;
