// import { DevicePhoneMobileIcon } from '@heroicons/react/16/solid';
import { Button, InputBasic, ProgressIndicator } from '../../ui';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  MobileNumberSchema,
  type MobileNumberType,
  MobileOtpSchema,
  type MobileOtpType,
} from '../../validators/onboard.validator';
import {
  api,
  API_URL_SEND_OTP,
  API_URL_VALIDATE_OTP,
} from '../../services/api';

import { useEffect, useState } from 'react';
import { useOnboarding } from '../../hooks/useOnboarding';
import type { IMobileAuth } from '../../types';

type AuthFormState = 'mobile-invalid' | 'otp-sent' | 'otp-retry';

const RESEND_CODE_WAIT_TIME = 15000;

// TODO: fix input-button thin border (right)
// TODO: what to do when going back to this step?
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
    <div className="mt-10 mb-16 min-w-[320px] xs:mx-auto xs:w-full xs:max-w-[480px]">
      <div className="bg-white px-6 py-12 shadow-sm xs:rounded-lg xs:px-12">
        <h2 className="mb-4 text-center text-2xl/9 font-bold tracking-tight text-secondary">
          Mobile verification
        </h2>

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
      </div>
    </div>
  );
};

interface MobileNumberFormProps {
  authFormState: AuthFormState;
  onSuccess: () => void;
}

const MobileNumberForm = (props: MobileNumberFormProps) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<MobileNumberType>({
    resolver: zodResolver(MobileNumberSchema),
  });

  const onSubmit: SubmitHandler<MobileNumberType> = async data => {
    console.log('MobileNumberForm onSubmit', data);
    try {
      const response = await api.post(API_URL_SEND_OTP, JSON.stringify(data));

      if (!response.success) {
        setError('mobile', {
          type: 'server',
          message: response.error,
        });
        return;
      }

      props.onSuccess();
    } catch {
      setError('mobile', {
        type: 'server',
        message: 'Network error. Please try again.',
      });
    }
  };

  return (
    <form onSubmit={e => void handleSubmit(onSubmit)(e)} className="space-y-6">
      <InputBasic
        autoComplete="tel"
        label="Mobile number"
        placeholder="Enter mobile number"
        type="number"
        disabled={isSubmitting || props.authFormState === 'otp-sent'}
        error={errors.mobile}
        {...register('mobile')}
      />

      <Button
        type="submit"
        text={
          isSubmitting
            ? 'Loading...'
            : props.authFormState === 'otp-sent'
              ? 'Resend code (wait 15s)'
              : 'Get code'
        }
        disabled={isSubmitting || props.authFormState === 'otp-sent'}
      />
    </form>
  );
};

interface OtpFormProps {
  authFormState: AuthFormState;
}

const OtpForm = (props: OtpFormProps) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<MobileOtpType>({
    resolver: zodResolver(MobileOtpSchema),
  });

  const { nextStep } = useOnboarding();

  const onSubmit: SubmitHandler<MobileOtpType> = async data => {
    try {
      const response = await api.post(
        API_URL_VALIDATE_OTP,
        JSON.stringify({ ...data, mobile: '0433222111' }) // TODO: mob from state
      );
      // TODO: use zod to parse response, ensure type correctness
      const responseJson = JSON.parse(
        response.response ?? '{}'
      ) as IMobileAuth & {
        data: string;
      };
      console.log('responseJson', responseJson);

      if (!response.success) {
        setError('otp', {
          type: 'server',
          message: response.error,
        });
        return;
      }

      // TODO: implement this properly
      console.log('setting mobile auth', responseJson);
      // setMobileAuth({
      //   expires: responseJson.expires,
      //   bearer: responseJson.bearer,
      // });
      nextStep();
    } catch (error) {
      console.error('OtpForm API error', error); // TODO: remove
      setError('otp', {
        type: 'server',
        message: 'Network error. Please try again.',
      });
    }
  };

  return (
    <form onSubmit={e => void handleSubmit(onSubmit)(e)} className="space-y-6">
      <InputBasic
        autoComplete="one-time-code"
        label="OTP code"
        placeholder="Enter OTP code"
        type="number"
        disabled={props.authFormState === 'mobile-invalid'}
        error={errors.otp}
        {...register('otp')}
      />

      <Button
        type="submit"
        text={isSubmitting ? 'Loading...' : 'Verify'}
        disabled={isSubmitting || props.authFormState === 'mobile-invalid'}
      />
    </form>
  );
};
