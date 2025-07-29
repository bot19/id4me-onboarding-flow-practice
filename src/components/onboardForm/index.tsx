import { StepUserDetails } from './StepUserDetails';
import { StepCreatePassword } from './StepCreatePassword';
import { Success } from './Success';
import { useOnboarding } from '../../hooks/useOnboarding';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  OnboardSchema,
  type OnboardType,
} from '../../validators/onboard.validator';
import { FormProvider } from '../../contexts/FormProvider';

export const OnboardForm = () => {
  const { currentStep } = useOnboarding();

  const formMethods = useForm<OnboardType>({
    resolver: zodResolver(OnboardSchema),
    mode: 'onChange',
    shouldUnregister: false,
    shouldFocusError: false,
  });

  const onSubmit = (data: OnboardType) => {
    console.log('Form submitted:', data);
    // Handle form submission
  };

  return (
    <FormProvider value={formMethods}>
      <form
        onSubmit={e => {
          e.preventDefault();
          void formMethods.handleSubmit(onSubmit)(e);
        }}
      >
        {currentStep === 2 && <StepUserDetails />}
        {currentStep === 3 && <StepCreatePassword />}
      </form>
      {currentStep === 4 && <Success />}
    </FormProvider>
  );
};
