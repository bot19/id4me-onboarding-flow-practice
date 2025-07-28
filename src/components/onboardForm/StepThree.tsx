import { EyeIcon } from '@heroicons/react/16/solid';
import { Feedback, ProgressBar, ProgressIndicator } from '../../ui';

export const StepThree = () => {
  return (
    <div className="mt-10 mb-16 min-w-[320px] xs:mx-auto xs:w-full xs:max-w-[480px]">
      <div className="bg-white px-6 py-12 shadow-sm xs:rounded-lg xs:px-12">
        <h2 className="mb-4 text-center text-2xl/9 font-bold tracking-tight text-secondary">
          Sign in to your account
        </h2>

        <div className="mb-8 flex justify-center">
          <ProgressIndicator step={2} />
        </div>

        <div className="space-y-6">
          <Feedback />

          <div>
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Create your password
            </label>
            <div className="mt-2 flex">
              <div className="-mr-px flex-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-l-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                />
              </div>
              <button
                type="button"
                className="flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 outline-1 -outline-offset-1 outline-gray-300 hover:bg-gray-50 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-primary cursor-pointer"
              >
                <EyeIcon
                  aria-hidden="true"
                  className="-ml-0.5 size-4 text-gray-400"
                />
                Show
              </button>
            </div>
          </div>

          <ProgressBar />

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Confirm your password
            </label>
            <div className="mt-2 flex">
              <div className="-mr-px flex-1">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-l-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                />
              </div>
              <button
                type="button"
                className="flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 outline-1 -outline-offset-1 outline-gray-300 hover:bg-gray-50 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-primary cursor-pointer"
              >
                <EyeIcon
                  aria-hidden="true"
                  className="-ml-0.5 size-4 text-gray-400"
                />
                Show
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <button
              type="button"
              className="flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
            >
              Back
            </button>

            <div className="col-span-3">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
