import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';
import { Success } from './Success';

interface OnboardFormProps {
  step: number;
}

export const OnboardForm = (props: OnboardFormProps) => {
  return (
    <>
      <form action="#" method="POST">
        {props.step === 2 && <StepTwo />}
        {props.step === 3 && <StepThree />}
      </form>
      {props.step === 4 && <Success />}
    </>
  );
};
