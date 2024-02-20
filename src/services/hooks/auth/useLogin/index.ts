import { post } from '@/services/apihelper'
import { useMutation } from '@tanstack/react-query'

interface LoginResponse {
    success: boolean;
    error_message?: string;
    details?: any;
}

interface UseLoginProps {
    onSuccess: (details: any) => void;
    onError: (error: string) => void;
}


export function useLogin({ onSuccess, onError }: UseLoginProps) {

    const proceedLogin = (params: any) => post('employee/memberLoginUsingPassword', params, {});

    function handleSuccess(response: LoginResponse) {
        const { success, error_message, details } = response;
        if (success) {
            onSuccess(details);
        } else {
            onError(error_message || 'Unknown error');
        }
    }

    function handleError(error: any) {
        const { message } = error;
        onError(message || 'Unknown error');
    }

    return useMutation({
        mutationKey: ["user-login"],
        mutationFn: proceedLogin,
        onSuccess: handleSuccess,
        onError: handleError
    });
}

