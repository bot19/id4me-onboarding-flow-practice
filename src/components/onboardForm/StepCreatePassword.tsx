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

// TODO: better way to submit from here.
export const StepCreatePassword = () => {
  const { currentStep, prevStep } = useOnboarding();
  const {
    register,
    trigger,
    formState: { errors, isSubmitting },
  } = useOnboardForm();

  return (
    <div className="mt-10 mb-16 min-w-[320px] xs:mx-auto xs:w-full xs:max-w-[480px]">
      <div className="bg-white px-6 py-12 shadow-sm xs:rounded-lg xs:px-12">
        <Heading text="Create your password" classes="mb-4" />

        <div className="mb-8 flex justify-center">
          <ProgressIndicator step={currentStep} />
        </div>

        <div className="space-y-6">
          <Feedback
            title="Password requirements"
            content={[
              'Must be at least 8 characters',
              'Must contain at least one uppercase letter',
              'Must contain at least one lowercase letter',
              'Must contain at least one number',
              'Must contain at least one special character',
            ]}
            type="info"
          />

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
              disabled={isSubmitting}
            />

            <div className="col-span-3">
              <Button
                colour="primary"
                text={isSubmitting ? 'Loading...' : 'Submit'}
                disabled={isSubmitting}
                type="button"
                onClick={() => {
                  void trigger(['password', 'confirmPassword']).then(
                    isValid => {
                      if (isValid) {
                        // Trigger the parent form's submit event
                        const form = document.querySelector('form');
                        if (form) {
                          form.requestSubmit();
                        }
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
