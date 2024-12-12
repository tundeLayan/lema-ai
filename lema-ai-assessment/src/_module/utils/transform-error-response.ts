import axios from 'axios';
import { TErrorResponse } from '../types/error-response';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const transformErrorResponse = (error: any): TErrorResponse => {
    if (axios.isAxiosError(error) && error.response) {
        const responseData = error.response.data as Partial<TErrorResponse>;

        const transformedError: TErrorResponse = {
            code: responseData.code ?? 'UNKNOWN_ERROR',
            error: responseData.error !== undefined ? responseData.error : true,
            message: responseData.message ?? 'An unknown error occurred',
        };

        if (responseData?.details) {
            transformedError.details = responseData.details;
        }

        return transformedError;
    }

    // Handle unexpected errors
    return {
        code: 'UNKNOWN_ERROR',
        error: true,
        message: 'An unknown error occurred',
    };
};
