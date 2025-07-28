import { useState, useMemo } from 'react';
import type { ReactNode } from 'react';
import {
  OnboardingContext,
  type OnboardingContextType,
} from './OnboardingContext';
import { type IMobileAuth } from '../types';

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
  const [mobileAuth, setMobileAuth] = useState<IMobileAuth | null>(null);

  const hasExpired = () => {
    if (!mobileAuth) return true;
    return Date.now() > mobileAuth.expires;
  };

  const validateMobileAuth = () => {
    if (hasExpired()) {
      setCurrentStep(1);
      setMobileAuth(null);
      return false;
    }

    return true;
  };

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
      mobileAuth,
      setMobileAuth,
      hasExpired,
      validateMobileAuth,
    }),
    [currentStep, mobileAuth]
  );

  return <OnboardingContext value={value}>{children}</OnboardingContext>;
};
