export const API_URL_SEND_OTP = '/auth/sendOTP';
export const API_URL_VALIDATE_OTP = '/auth/validateOTP';

// const FIFTEEN_MINS_AS_MS = 15 * 60 * 1000;

interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  until?: string;
}

class MockApiService {
  async post<T = unknown>(
    url: string,
    payload: unknown
  ): Promise<ApiResponse<T>> {
    await new Promise(resolve => setTimeout(resolve, 500));

    switch (url) {
      case API_URL_SEND_OTP: {
        const { mobile } = payload as { mobile?: string };

        if (mobile === '0433222111') {
          return {
            success: false,
            error: 'Mobile already in use',
          } as ApiResponse<T>;
        }

        // simulate network/server error
        if (mobile === '0400000000') {
          return {
            success: false,
            error: 'Issue encountered, please try again later',
          } as ApiResponse<T>;
        }

        return {
          success: true,
          data: 'OTP sent successfully' as T,
        } as ApiResponse<T>;
      }

      case API_URL_VALIDATE_OTP: {
        const { otp } = payload as { otp?: string };

        if (otp === '000000') {
          return { success: false, error: 'Wrong OTP code' } as ApiResponse<T>;
        }

        return {
          success: true,
          data: 'OTP validated successfully' as T,
          // until: `${Date.now() + FIFTEEN_MINS_AS_MS}`,
        } as ApiResponse<T>;
      }

      default:
        return { success: false, error: 'Route not found' };
    }
  }
}

export const api = new MockApiService();
