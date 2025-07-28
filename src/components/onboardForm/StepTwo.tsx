import { ChevronDownIcon } from '@heroicons/react/16/solid';

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const years = Array.from({ length: 100 }, (_, i) => 2025 - i);

export const StepTwo = () => {
  return (
    <form action="#" method="POST" className="space-y-6">
      <div>
        <div className="flex justify-between">
          <label
            htmlFor="fullName"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Full name
          </label>
          <span id="fullName-required" className="text-sm/6 text-gray-500">
            Required
          </span>
        </div>
        <div className="mt-2">
          <input
            id="fullName"
            name="fullName"
            type="text"
            maxLength={100}
            placeholder="Enter full name"
            aria-describedby="fullName-required"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary xs:text-sm/6"
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between">
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Email
          </label>
          <span id="email-required" className="text-sm/6 text-gray-500">
            Required
          </span>
        </div>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            aria-describedby="email-required"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary xs:text-sm/6"
          />
        </div>
      </div>

      <div>
        <fieldset>
          <div className="flex justify-between">
            <legend className="block text-sm/6 font-medium text-gray-900">
              Date of birth
            </legend>
            <span id="dob-required" className="text-sm/6 text-gray-500">
              Required
            </span>
          </div>

          <div className="mt-2 grid grid-cols-3">
            <div className="grid grid-cols-1 focus-within:relative">
              <select
                id="day"
                name="day"
                autoComplete="day"
                aria-label="Day"
                className="col-start-1 row-start-1 w-full appearance-none rounded-l-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary xs:text-sm/6"
              >
                <option value="">Day</option>
                {days.map(day => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 xs:size-4"
              />
            </div>

            <div className="grid grid-cols-1 focus-within:relative -mx-px">
              <select
                id="month"
                name="month"
                autoComplete="month"
                aria-label="Month"
                className="col-start-1 row-start-1 w-full appearance-none bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary xs:text-sm/6"
              >
                <option value="">Month</option>
                {months.map(month => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 xs:size-4"
              />
            </div>

            <div className="grid grid-cols-1 focus-within:relative">
              <select
                id="year"
                name="year"
                autoComplete="year"
                aria-label="Year"
                className="col-start-1 row-start-1 w-full appearance-none rounded-r-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary xs:text-sm/6"
              >
                <option value="">Year</option>
                {years.map(year => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 xs:size-4"
              />
            </div>
          </div>
        </fieldset>
      </div>

      <div>
        <fieldset>
          <label
            htmlFor="gender"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Gender
          </label>

          <div className="mt-2">
            <div className="grid grid-cols-1 focus-within:relative">
              <select
                id="gender"
                name="gender"
                autoComplete="gender"
                aria-label="Gender"
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary xs:text-sm/6"
              >
                <option value="">Prefer not to say</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 xs:size-4"
              />
            </div>
          </div>
        </fieldset>
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
            Next
          </button>
        </div>
      </div>
    </form>
  );
};
