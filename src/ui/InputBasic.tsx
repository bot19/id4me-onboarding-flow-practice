import { cn } from '../utils';
import type { FieldError } from 'react-hook-form';

interface InputBasicProps {
  autoComplete: string;
  button?: string;
  buttonIcon?: React.ReactNode;
  buttonOnClick?: () => void;
  disabled?: boolean;
  error?: FieldError;
  label: string;
  name: string;
  placeholder: string;
  requiredLabel?: boolean;
  type: string;
  [key: string]: unknown; // Allow additional props to be passed through
}

export const InputBasic = ({
  button,
  buttonIcon,
  // buttonOnClick,
  disabled,
  error,
  label,
  name,
  placeholder,
  requiredLabel,
  type,
  autoComplete,
  ...inputProps
}: InputBasicProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={name}
          className="block text-sm/6 font-medium text-secondary"
        >
          {label}
        </label>
        {requiredLabel && (
          <span className="text-sm/6 text-gray-500">Required</span>
        )}
      </div>

      <div className="mt-2 flex">
        <input
          id={name}
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            'block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary xs:text-sm/6',
            button ? 'rounded-l-md' : 'rounded-md',
            error &&
              'text-red-900 outline-red-300 placeholder:text-red-300 focus:outline-red-600',
            disabled &&
              'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:outline-gray-200'
          )}
          {...inputProps}
        />
        {button && (
          <button
            type="button"
            className={cn(
              'flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 outline-1 -outline-offset-1 outline-gray-300 hover:bg-gray-50 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-primary cursor-pointer'
            )}
          >
            {buttonIcon}
            {button}
          </button>
        )}
      </div>
      {error && <p className="mt-2 text-sm/6 text-red-500">{error.message}</p>}
    </div>
  );
};
