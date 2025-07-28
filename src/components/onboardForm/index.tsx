import { StepUserDetails } from './StepUserDetails';
import { StepCreatePassword } from './StepCreatePassword';
import { Success } from './Success';
import { useOnboarding } from '../../hooks/useOnboarding';

export const OnboardForm = () => {
  const { currentStep } = useOnboarding();

  return (
    <>
      <form method="POST">
        {currentStep === 2 && <StepUserDetails />}
        {currentStep === 3 && <StepCreatePassword />}
      </form>
      {currentStep === 4 && <Success />}
    </>
  );
};
