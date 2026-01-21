import { useQuery } from '@tanstack/react-query';
import { serviceService } from '@/services/serviceService';

export const useServices = (type?: string, enabled: boolean = true) => {
    return useQuery({
        queryKey: ['services', type],
        queryFn: async () => {
            const response = await serviceService.getServices(type);
            return response.data;
        },
        enabled: enabled,
    });
};
