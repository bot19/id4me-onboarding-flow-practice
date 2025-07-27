import { CheckIcon } from '@heroicons/react/20/solid';
import { classNames } from '../utils';

const steps = [
  { name: 'Step 1', status: 'complete' },
  { name: 'Step 2', status: 'current' },
  { name: 'Step 3', status: 'upcoming' },
];

export const ProgressIndicator = () => {
  return (
    <nav aria-label="Progress">
      <ol className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '',
              'relative'
            )}
          >
            {step.status === 'complete' ? (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="h-0.5 w-full bg-primary" />
                </div>
                <div
                  className="relative flex size-8 items-center justify-center rounded-full bg-primary"
                  aria-label={`${step.name} - status: ${step.status}`}
                >
                  <CheckIcon aria-hidden="true" className="size-5 text-white" />
                  <span className="sr-only">{step.name}</span>
                </div>
              </>
            ) : step.status === 'current' ? (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div
                  aria-current="step"
                  className="relative flex size-8 items-center justify-center rounded-full border-2 border-primary bg-white"
                  aria-label={`${step.name} - status: ${step.status}`}
                >
                  <span
                    aria-hidden="true"
                    className="size-2.5 rounded-full bg-primary"
                  />
                  <span className="sr-only">{step.name}</span>
                </div>
              </>
            ) : (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div
                  className="relative flex size-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white"
                  aria-label={`${step.name} - status: ${step.status}`}
                >
                  <span
                    aria-hidden="true"
                    className="size-2.5 rounded-full bg-transparent"
                  />
                  <span className="sr-only">{step.name}</span>
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
