import { cn } from '../utils';

interface InputBasicProps {
  autoComplete: string;
  button?: string;
  buttonIcon?: React.ReactNode;
  buttonOnClick?: () => void;
  label: string;
  name: string;
  placeholder: string;
  required: boolean;
  requiredLabel?: boolean;
  type: string;
}

export const InputBasic = (props: InputBasicProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={props.name}
          className="block text-sm/6 font-medium text-secondary"
        >
          {props.label}
        </label>
        {props.requiredLabel && (
          <span className="text-sm/6 text-gray-500">Required</span>
        )}
      </div>

      <div className="mt-2 flex">
        <input
          id={props.name}
          name={props.name}
          type={props.type}
          required={props.required}
          autoComplete={props.autoComplete}
          placeholder={props.placeholder}
          className={cn(
            'block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary xs:text-sm/6',
            props.button ? 'rounded-l-md' : 'rounded-md'
          )}
        />
        {props.button && (
          <button
            type="button"
            className="flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 outline-1 -outline-offset-1 outline-gray-300 hover:bg-gray-50 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-primary cursor-pointer"
          >
            {props.buttonIcon}
            {props.button}
          </button>
        )}
      </div>
    </div>
  );
};
