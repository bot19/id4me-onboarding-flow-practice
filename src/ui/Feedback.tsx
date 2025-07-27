import { InformationCircleIcon } from '@heroicons/react/20/solid';

export const Feedback = () => {
  return (
    <div className="rounded-md bg-blue-50 p-4">
      <div className="flex">
        <div className="shrink-0">
          <InformationCircleIcon
            aria-hidden="true"
            className="size-5 text-blue-400"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-blue-800">
            Password requirements
          </h3>
          <div className="mt-2 text-sm text-blue-700">
            <ul>
              <li>Must be at least 8 characters</li>
              <li>Must contain at least one uppercase letter</li>
              <li>Must contain at least one lowercase letter</li>
              <li>Must contain at least one number</li>
              <li>Must contain at least one special character</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
