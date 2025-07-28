import { createContext } from 'react';
import type { IMobileAuth } from '../types';

export interface OnboardingContextType {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  totalSteps: number;
  mobileAuth: IMobileAuth | null;
  setMobileAuth: (mobileAuth: IMobileAuth) => void;
  hasExpired: () => boolean;
  validateMobileAuth: () => boolean;
}

export const OnboardingContext = createContext<
  OnboardingContextType | undefined
>(undefined);
