import { OnboardForm } from '../components/onboardForm';
import { Logo } from '../ui';
import { StepOneAuth } from '../components/authenticate';
import { OnboardingProvider } from '../contexts/OnboardingProvider';
import { useOnboarding } from '../hooks/useOnboarding';

// TODO: fix app height re responsive
const OnboardingContent = () => {
  const { state } = useOnboarding();
  const { currentStep } = state;
  // add new hook for localStorage to manage formData persist (inc. mobile)

  return (
    <main className="flex min-h-full flex-col pt-12">
      <Logo />
      {currentStep === 1 && <StepOneAuth />}
      {currentStep > 1 && <OnboardForm />}
    </main>
  );
};

export const OnboardingPage = () => {
  return (
    <OnboardingProvider>
      <OnboardingContent />
    </OnboardingProvider>
  );
};
