import { useQuery } from '@tanstack/react-query';
import { statisticsService } from '@/services/statisticsService';

export const useAdminStats = () => {
    return useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const response = await statisticsService.getAdminStats();
            return response.data;
        },
    });
};
