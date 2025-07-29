import { useReducer, useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';
import { onboardingReducer, type OnboardingState } from './onboardingReducer';
import {
  OnboardingContext,
  type OnboardingContextType,
} from './OnboardingContext';
import { useOnboardingPersistence } from '../hooks/useOnboardingPersistence';

interface OnboardingProviderProps {
  children: ReactNode;
  initialStep?: number;
}

export const OnboardingProvider = ({
  children,
  initialStep = 1,
}: OnboardingProviderProps) => {
  const { currentStep, setCurrentStep, mobileAuth, setMobileAuth } =
    useOnboardingPersistence(initialStep);

  const initialState: OnboardingState = {
    currentStep,
    mobileAuth,
  };

  const [state, dispatch] = useReducer(onboardingReducer, initialState);

  // Sync state changes back to localStorage
  useEffect(() => {
    setCurrentStep(state.currentStep);
  }, [state.currentStep, setCurrentStep]);

  useEffect(() => {
    setMobileAuth(state.mobileAuth);
  }, [state.mobileAuth, setMobileAuth]);

  const value = useMemo<OnboardingContextType>(
    () => ({ state, dispatch }),
    [state, dispatch]
  );

  return <OnboardingContext value={value}>{children}</OnboardingContext>;
};
