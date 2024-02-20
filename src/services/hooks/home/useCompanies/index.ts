import { post } from '@/services/apihelper';
import { useQuery } from '@tanstack/react-query';

export function useCompanies(page_number: number) {
    const getCompanies = (params: any): Promise<any> => post('company/getCompanies', params, {});

    return useQuery({
        queryKey: ['get-companies', page_number],
        queryFn: () => getCompanies({ page_number }),
        select: (result) => page_number ? { ...result.details, companies: result.details?.data } : result.details,
        enabled: !!page_number,
    });
}

