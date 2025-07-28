import { StepUserDetails } from './StepUserDetails';
import { StepCreatePassword } from './StepCreatePassword';
import { Success } from './Success';

interface OnboardFormProps {
  step: number;
}

export const OnboardForm = (props: OnboardFormProps) => {
  return (
    <>
      <form action="#" method="POST">
        {props.step === 2 && <StepUserDetails />}
        {props.step === 3 && <StepCreatePassword />}
      </form>
      {props.step === 4 && <Success />}
    </>
  );
};
