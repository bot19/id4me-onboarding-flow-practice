import { DevicePhoneMobileIcon } from '@heroicons/react/16/solid';

export const StepThree = () => {
  return (
    <form action="#" method="POST" className="space-y-6">
      <div>
        <label
          htmlFor="mobile"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Mobile number
        </label>
        <div className="mt-2 flex">
          <input
            id="mobile"
            name="mobile"
            type="text"
            required
            autoComplete="tel"
            placeholder="Enter mobile number"
            className="block w-full rounded-l-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 -mr-px"
          />
          <button
            type="button"
            className="flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 outline-1 -outline-offset-1 outline-gray-300 hover:bg-gray-50 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
          >
            <DevicePhoneMobileIcon
              aria-hidden="true"
              className="-ml-0.5 size-4 text-gray-400"
            />
            Send code
          </button>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm/6 font-medium text-gray-900"
          >
            OTP code
          </label>
          <div className="text-sm">
            <a
              href="https://www.google.com"
              className="font-semibold text-primary hover:text-primary"
            >
              Resend code?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
            id="otpCode"
            name="otpCode"
            type="text"
            required
            autoComplete="one-time-code"
            placeholder="Enter OTP code"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Verify
        </button>
      </div>
    </form>
  );
};
