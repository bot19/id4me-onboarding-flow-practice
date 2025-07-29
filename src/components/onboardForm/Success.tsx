import { Button, Heading } from '../../ui';
import { useOnboarding } from '../../hooks/useOnboarding';
import { useOnboardingPersistence } from '../../hooks/useOnboardingPersistence';

export const Success = () => {
  const { goToStep } = useOnboarding();
  const { clearSavedState } = useOnboardingPersistence();

  const handleGetStarted = () => {
    const confirmed = window.confirm(
      'Onboarding flow has been completed. Return to the beginning?'
    );

    if (confirmed) {
      clearSavedState(); // Clear onboarding state when restarting
      goToStep(1);
    }
  };

  return (
    <div className="mt-10 mb-16 min-w-[320px] xs:mx-auto xs:w-full xs:max-w-[480px]">
      <div className="bg-white px-6 py-12 shadow-sm xs:rounded-lg xs:px-12">
        <Heading text="You've been onboarded!" classes="mb-4" />
        <p className="mb-8 text-center">
          Thanks for signing up! You can now use your account to access our
          services.
        </p>
        <Button
          text="Get Started"
          colour="primary"
          type="button"
          onClick={handleGetStarted}
        />
      </div>
    </div>
  );
};
