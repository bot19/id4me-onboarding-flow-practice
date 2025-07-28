import { z } from 'zod';

// mobile verification;
// TODO: bonus, strict AU mobile validation, eg: start 04..., +614...
export const MobileNumberSchema = z.object({
  mobile: z
    .string()
    .length(10, 'Mobile number must be exactly 10 digits')
    .regex(/^04/, 'Mobile number must start with 04'),
});
export type MobileNumberType = z.infer<typeof MobileNumberSchema>;

export const MobileOtpSchema = z.object({
  otp: z.string().length(6, 'OTP must be 6 digits'),
});
export type MobileOtpType = z.infer<typeof MobileOtpSchema>;

// personal details
export const UserDetailsSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  email: z.email({ message: 'Please enter a valid email address' }),
  dateOfBirth: z.date({ message: 'Please enter a valid date of birth' }),
  gender: z.enum(['male', 'female', 'other']).optional(),
});

// password
export const CreatePasswordSchema = z.object({
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(
      /[^A-Za-z0-9]/,
      'Password must contain at least one special character'
    ),
});

export const OnboardSchema = z.object({
  ...MobileNumberSchema.shape,
  ...UserDetailsSchema.shape,
  ...CreatePasswordSchema.shape,
});

export type OnboardType = z.infer<typeof OnboardSchema>;
