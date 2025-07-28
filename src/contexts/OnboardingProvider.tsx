import { useState, useMemo } from 'react';
import type { ReactNode } from 'react';
import {
  OnboardingContext,
  type OnboardingContextType,
} from './OnboardingContext';

interface OnboardingProviderProps {
  children: ReactNode;
  initialStep?: number;
  totalSteps?: number;
}

export const OnboardingProvider = ({
  children,
  initialStep = 1,
  totalSteps = 4,
}: OnboardingProviderProps) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  const value = useMemo<OnboardingContextType>(
    () => ({
      currentStep,
      nextStep,
      prevStep,
      goToStep,
      isFirstStep: currentStep === 1,
      isLastStep: currentStep === totalSteps,
      totalSteps,
    }),
    [currentStep]
  );

  return <OnboardingContext value={value}>{children}</OnboardingContext>;
};
