import { useMemo } from 'react';
import type { ReactNode } from 'react';
import {
  OnboardingContext,
  type OnboardingContextType,
} from './OnboardingContext';
import { useOnboardingPersistence } from '../hooks/useOnboardingPersistence';

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
  const { currentStep, setCurrentStep, mobileAuth, setMobileAuth } =
    useOnboardingPersistence(initialStep);

  const hasExpired = () => {
    if (!mobileAuth) return true;
    return Date.now() > mobileAuth.expires;
  };

  // TODO: might not use, possibly remove
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
      isFirstStep: currentStep === 1, // TODO: check if used
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
