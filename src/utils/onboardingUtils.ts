import type { IMobileAuth } from '../types';
import type { OnboardingAction } from '../contexts/onboardingReducer';

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

export const totalSteps = 4; // Configuration constant
