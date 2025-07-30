import { Heading, ProgressIndicator, AnimatedContent } from '../../ui';
import { useEffect, useState } from 'react';
import { MobileNumberForm } from './MobileNumberForm';
import { OtpForm } from './OtpForm';
import type { AuthFormState } from './types';

const RESEND_CODE_WAIT_TIME = 15000;

// TODO: fix input-button thin border (right)
// TODO: input regex number only, better than type="number", as up/down value
// TODO: abstract card section?
export const StepOneAuth = () => {
  const [authFormState, setAuthFormState] =
    useState<AuthFormState>('mobile-invalid');

  useEffect(() => {
    if (authFormState === 'otp-sent') {
      setTimeout(() => {
        setAuthFormState('otp-retry');
      }, RESEND_CODE_WAIT_TIME);
    }
  }, [authFormState]);

  return (
    <div className="mt-10 min-w-[320px] xs:mx-auto xs:w-full xs:max-w-[480px]">
      <AnimatedContent
        stepKey="step-1"
        className="bg-white px-6 py-12 shadow-sm xs:rounded-lg xs:px-12"
      >
        <Heading text="Mobile verification" classes="mb-4" />

        <div className="mb-8 flex justify-center">
          <ProgressIndicator step={1} />
        </div>

        <div className="space-y-6">
          <MobileNumberForm
            authFormState={authFormState}
            onSuccess={() => setAuthFormState('otp-sent')}
          />

          <OtpForm authFormState={authFormState} />
        </div>
      </AnimatedContent>
    </div>
  );
};
