import { cn } from '../utils';

interface ButtonProps {
  disabled?: boolean;
  text: string;
  type: 'submit' | 'button';
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      className={cn(
        'flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer',
        props.disabled && 'disabled:cursor-not-allowed disabled:opacity-50'
      )}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};
