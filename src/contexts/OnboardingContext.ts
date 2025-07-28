import { createContext } from 'react';

export interface OnboardingContextType {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  totalSteps: number;
}

export const OnboardingContext = createContext<
  OnboardingContextType | undefined
>(undefined);
