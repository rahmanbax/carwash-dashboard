import { useQuery } from '@tanstack/react-query';
import { statisticsService } from '@/services/statisticsService';
import { SuperadminStatistics } from '@/types/statistics';

export const useSuperadminStats = () => {
    return useQuery({
        queryKey: ['superadmin-stats'],
        queryFn: async () => {
            const response = await statisticsService.getSuperadminStats();
            return response.data;
        },
        refetchInterval: 30000, // Refresh every 30 seconds
    });
};
