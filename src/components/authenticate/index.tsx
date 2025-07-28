// import { DevicePhoneMobileIcon } from '@heroicons/react/16/solid';
import { InputBasic, ProgressIndicator } from '../../ui';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  MobileNumberSchema,
  type MobileNumberType,
} from '../../validators/onboard.validator';
import { api, API_URL_SEND_OTP } from '../../services/api';
import { cn } from '../../utils';

// TODO: fix input-button thin border (right)
export const StepOneAuth = () => {
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
          <MobileNumberForm />

          <form onSubmit={() => void 0} className="space-y-6">
            <InputBasic
              autoComplete="one-time-code"
              label="OTP code"
              name="otpCode"
              placeholder="Enter OTP code"
              required
              type="text"
            />

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const MobileNumberForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<MobileNumberType>({
    resolver: zodResolver(MobileNumberSchema),
  });

  const onSubmit: SubmitHandler<MobileNumberType> = async data => {
    try {
      const response = await api.post(API_URL_SEND_OTP, data);

      if (!response.success) {
        setError('mobile', {
          type: 'server',
          message: response.error,
        });
        return;
      }

      // Handle success
      console.log('Success:', response.data);
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
        disabled={isSubmitting}
        error={errors.mobile}
        {...register('mobile')}
      />

      <button
        type="submit"
        className={cn(
          'flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer',
          isSubmitting && 'disabled:cursor-not-allowed disabled:opacity-50'
        )}
        disabled={isSubmitting}
      >
        Get code
      </button>
    </form>
  );
};
