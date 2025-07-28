import { DevicePhoneMobileIcon } from '@heroicons/react/16/solid';
import { InputBasic } from '../../ui';

// TODO: fix input-button thin border (right)
export const StepOne = () => {
  return (
    <>
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
    </>
  );
};
