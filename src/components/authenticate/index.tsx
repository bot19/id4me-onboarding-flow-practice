import { DevicePhoneMobileIcon } from '@heroicons/react/16/solid';
import { InputBasic, ProgressIndicator } from '../../ui';

// TODO: fix input-button thin border (right)
export const StepOneAuth = () => {
  return (
    <div className="mt-10 mb-16 min-w-[320px] xs:mx-auto xs:w-full xs:max-w-[480px]">
      <div className="bg-white px-6 py-12 shadow-sm xs:rounded-lg xs:px-12">
        <h2 className="mb-4 text-center text-2xl/9 font-bold tracking-tight text-secondary">
          Sign in to your account
        </h2>

        <div className="mb-8 flex justify-center">
          <ProgressIndicator step={1} />
        </div>

        <div className="space-y-6">
          <InputBasic
            autoComplete="tel"
            label="Mobile number"
            name="mobile"
            placeholder="Enter mobile number"
            required
            type="text"
            button="Send code"
            buttonIcon={
              <DevicePhoneMobileIcon
                aria-hidden="true"
                className="-ml-0.5 size-4 text-gray-400"
              />
            }
          />

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
        </div>
      </div>
    </div>
  );
};
