import { EyeIcon } from '@heroicons/react/16/solid';
import {
  Button,
  Feedback,
  Heading,
  InputBasic,
  PasswordStrengthIndicator,
  ProgressIndicator,
} from '../../ui';
import { useOnboarding } from '../../hooks/useOnboarding';
import { useOnboardForm } from '../../hooks/useOnboardForm';

export const StepCreatePassword = () => {
  const { currentStep, prevStep, nextStep } = useOnboarding();
  const {
    register,
    trigger,
    formState: { errors },
  } = useOnboardForm();

  return (
    <div className="mt-10 mb-16 min-w-[320px] xs:mx-auto xs:w-full xs:max-w-[480px]">
      <div className="bg-white px-6 py-12 shadow-sm xs:rounded-lg xs:px-12">
        <Heading text="Create your password" classes="mb-4" />

        <div className="mb-8 flex justify-center">
          <ProgressIndicator step={currentStep} />
        </div>

        <div className="space-y-6">
          <Feedback />

          <InputBasic
            autoComplete="new-password"
            label="Create your password"
            requiredLabel
            placeholder="Enter password"
            type="password"
            error={errors.password}
            button="Show"
            buttonIcon={
              <EyeIcon
                aria-hidden="true"
                className="-ml-0.5 size-4 text-gray-400"
              />
            }
            {...register('password')}
          />

          <PasswordStrengthIndicator />

          <InputBasic
            autoComplete="confirm-new-password"
            label="Confirm your password"
            requiredLabel
            placeholder="Confirm password"
            type="password"
            error={errors.confirmPassword}
            button="Show"
            buttonIcon={
              <EyeIcon
                aria-hidden="true"
                className="-ml-0.5 size-4 text-gray-400"
              />
            }
            {...register('confirmPassword')}
          />

          <div className="grid grid-cols-4 gap-4">
            <Button
              colour="light"
              text="Back"
              type="button"
              onClick={prevStep}
            />

            <div className="col-span-3">
              <Button
                colour="primary"
                text="Submit"
                type="button"
                onClick={() => {
                  void trigger(['password', 'confirmPassword']).then(
                    isValid => {
                      if (isValid) {
                        nextStep();
                      }
                    }
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
