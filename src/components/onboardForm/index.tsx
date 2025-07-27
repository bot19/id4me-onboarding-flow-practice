import { ProgressIndicator } from '../../ui';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';

const step = 2;

export const OnboardForm = () => {
  return (
    <div className="mt-10 mb-16 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <main className="bg-white px-6 py-12 shadow-sm sm:rounded-lg sm:px-12">
        <h2 className="mb-4 text-center text-2xl/9 font-bold tracking-tight text-secondary">
          Sign in to your account
        </h2>

        <div className="mb-8 flex justify-center">
          <ProgressIndicator step={step} />
        </div>

        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
      </main>
    </div>
  );
};

{
  /* <div>
<button
  type="button"
  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
>
  Contact sales
</button>
</div> */
}
