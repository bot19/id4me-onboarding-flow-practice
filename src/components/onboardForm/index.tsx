import { StepUserDetails } from './StepUserDetails';
import { StepCreatePassword } from './StepCreatePassword';
import { Success } from './Success';
import { useOnboarding } from '../../hooks/useOnboarding';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  OnboardSchema,
  type OnboardType,
  BackendSubmissionSchema,
} from '../../validators/onboard.validator';
import { FormProvider } from '../../contexts/FormProvider';
import { api, API_URL_CREATE_USER } from '../../services/api';
import { useState, useEffect } from 'react';
import { useFormPersistence } from '../../hooks/useFormPersistence';
import {
  FORM_STORAGE_KEYS,
  clearAllFormData,
  getMobileNumber,
} from '../../utils/formStorage';
import { useOnboardingPersistence } from '../../hooks/useOnboardingPersistence';

export const OnboardForm = () => {
  const { currentStep, nextStep } = useOnboarding();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [mobileNumber, setMobileNumber] = useState<string | null>(null);
  const { clearSavedState } = useOnboardingPersistence();

  const formMethods = useForm<OnboardType>({
    resolver: zodResolver(OnboardSchema),
    mode: 'onChange',
    shouldUnregister: false,
    shouldFocusError: false,
  });

  useFormPersistence(formMethods, FORM_STORAGE_KEYS.ONBOARDING);

  // Load mobile number from localStorage when component mounts
  useEffect(() => {
    const mobile = getMobileNumber();
    setMobileNumber(mobile);
  }, []);

  const onSubmit = async (data: OnboardType) => {
    setSubmitError(null); // Clear any previous errors

    if (!mobileNumber) {
      setSubmitError(
        'Mobile number not found. Please restart the verification process.'
      );
      return;
    }

    try {
      // Combine form data with mobile number for backend submission
      const submissionData = {
        ...data,
        mobile: mobileNumber,
      };
      console.log('submissionData', submissionData);

      // Validate data against backend schema
      const validationResult =
        BackendSubmissionSchema.safeParse(submissionData);

      if (!validationResult.success) {
        const firstError = validationResult.error.issues[0];
        setSubmitError(
          `Validation failed: ${firstError?.message ?? 'Invalid data'}`
        );
        return;
      }

      // Send to API
      const response = await api.post(
        API_URL_CREATE_USER,
        JSON.stringify(validationResult.data)
      );

      if (response.success) {
        console.log('User created successfully:', response.response);
        clearAllFormData(); // Clear all form data on successful acc creation
        clearSavedState(); // Clear onboarding state
        nextStep();
      } else {
        setSubmitError(
          response.error ?? 'An error occurred while creating your account'
        );
      }
    } catch {
      setSubmitError('An unexpected error occurred. Please try again.');
    }
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
        {currentStep === 3 && (
          <>
            {submitError && (
              <div className="rounded-md bg-red-50 p-4 mb-6">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      Submission Error
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      {submitError}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <StepCreatePassword />
          </>
        )}
      </form>
      {currentStep === 4 && <Success />}
    </FormProvider>
  );
};
