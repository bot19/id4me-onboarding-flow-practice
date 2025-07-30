import {
  Button,
  Heading,
  InputBasic,
  InputSelect,
  ProgressIndicator,
  AnimatedContent,
} from '../../ui';
import { useOnboarding } from '../../hooks/useOnboarding';
import { useOnboardForm } from '../../hooks/useOnboardForm';
import { useEffect } from 'react';

const CONFIRM_MESSAGES = {
  GO_BACK_VERIFICATION:
    'Going back to mobile verification will require you to verify again before proceeding. Are you sure?',
} as const;

// TODO: set DoB picker to validate against age limit
export const StepUserDetails = () => {
  const { state, dispatch } = useOnboarding();
  const { currentStep } = state;
  const {
    register,
    trigger,
    setFocus,
    formState: { errors },
  } = useOnboardForm();

  // Focus the Full Name input when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setFocus('fullName');
    }, 100);

    return () => clearTimeout(timer);
  }, [setFocus]);

  return (
    <div className="mt-10 min-w-[320px] xs:mx-auto xs:w-full xs:max-w-[480px]">
      <AnimatedContent
        stepKey="step-2"
        className="bg-white px-6 py-12 shadow-sm xs:rounded-lg xs:px-12"
      >
        <Heading text="Sign in to your account" classes="mb-4" />

        <div className="mb-8 flex justify-center">
          <ProgressIndicator step={currentStep} />
        </div>

        <div className="space-y-6">
          <InputBasic
            autoComplete="name"
            label="Full name"
            requiredLabel
            placeholder="Enter full name"
            type="text"
            error={errors.fullName}
            {...register('fullName')}
          />

          <InputBasic
            autoComplete="email"
            label="Email"
            requiredLabel
            placeholder="you@example.com"
            type="email"
            error={errors.email}
            {...register('email')}
          />

          <InputBasic
            autoComplete="bday"
            label="Date of birth"
            requiredLabel
            placeholder=""
            type="date"
            error={errors.dateOfBirth}
            {...register('dateOfBirth')}
          />

          <InputSelect
            autoComplete="gender"
            label="Gender"
            options={[
              { value: '', label: 'Prefer not to say' },
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' },
            ]}
            error={errors.gender}
            {...register('gender')}
          />

          <div className="grid grid-cols-4 gap-4">
            <Button
              colour="light"
              text="Back"
              type="button"
              onClick={() => {
                const shouldGoBack = confirm(
                  CONFIRM_MESSAGES.GO_BACK_VERIFICATION
                );
                if (shouldGoBack) {
                  dispatch({ type: 'RESET_TO_STEP_1' });
                }
              }}
            />

            <div className="col-span-3">
              <Button
                colour="primary"
                text="Next"
                type="button"
                onClick={() => {
                  void trigger([
                    'fullName',
                    'email',
                    'dateOfBirth',
                    'gender',
                  ]).then(isValid => {
                    if (isValid) {
                      dispatch({ type: 'NEXT_STEP' });
                    }
                  });
                }}
              />
            </div>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
};
