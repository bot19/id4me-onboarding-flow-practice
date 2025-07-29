import { AnimatedContent, Button, Heading } from '../../ui';
import { useOnboarding } from '../../hooks/useOnboarding';

export const Success = () => {
  const { dispatch } = useOnboarding();

  const handleGetStarted = () => {
    const confirmed = window.confirm(
      'Onboarding flow has been completed. Return to the beginning?'
    );

    if (confirmed) {
      dispatch({ type: 'RESET_TO_STEP_1' }); // Clear onboarding state when restarting
    }
  };

  return (
    <div className="mt-10 mb-16 min-w-[320px] xs:mx-auto xs:w-full xs:max-w-[480px]">
      <AnimatedContent
        stepKey="step-4"
        className="bg-white px-6 py-12 shadow-sm xs:rounded-lg xs:px-12"
      >
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
      </AnimatedContent>
    </div>
  );
};
