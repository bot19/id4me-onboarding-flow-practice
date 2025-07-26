import { ZodType } from 'zod';
import { CombinedOnboardSchema } from './validators/onboard.validator';

type FieldKeys = keyof typeof CombinedOnboardSchema;

// TODO: bonus - add icon
export interface FormStep {
  title: string;
  position: number;
  validationSchema: ZodType<unknown>;
  component: React.ReactElement;
  fields: FieldKeys[];
}
