import { z } from 'zod';

// mobile verification; TODO: bonus - strict AU mobile number validation
export const step1Schema = z.object({
  phoneNumber: z
    .string()
    .min(10, 'Phone number must be at least 10 characters (eg: 0412345678)')
    .max(12, 'Phone number must be at most 12 characters (eg: +61412345678)'),
});

// personal details
export const step2Schema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  email: z.email({ message: 'Please enter a valid email address' }),
  dateOfBirth: z.date({ message: 'Please enter a valid date of birth' }),
  gender: z.enum(['male', 'female', 'other']).optional(),
});

// password
export const step3Schema = z.object({
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
