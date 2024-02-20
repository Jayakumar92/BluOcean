import { post } from '@/services/apihelper'
import { useMutation, useQueryClient } from '@tanstack/react-query'
interface LoginResponse {
    success: boolean;
    error_message?: string;
    details?: any;
}

interface AddConversation {
    onSuccess?: (details: any) => void;
    onError?: (error: string) => void;
}


export function useAddConversation({ onSuccess, onError }: AddConversation) {

    const queryClient = useQueryClient()
    const addConversationApi = (params: any) => post('company/addConversationDetails', params, {});

    function handleSuccess(response: LoginResponse) {
        const { success, error_message, details } = response;
        if (success) {
            queryClient.invalidateQueries({ queryKey: ['conversation-details'] })
            if (onSuccess) onSuccess(details);
        } else {
            if (onError) onError(error_message || 'Unknown error');
        }
    }

    function handleError(error: any) {
        const { message } = error;
        if (onError) onError(message || 'Unknown error');
    }

    return useMutation({
        mutationKey: ["add-conversation"],
        mutationFn: addConversationApi,
        onSuccess: handleSuccess,
        onError: handleError
    });
}

