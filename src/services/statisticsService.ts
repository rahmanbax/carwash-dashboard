import apiClient from '@/api/apiClient';
import { SuperadminStatisticsResponse } from '@/types/statistics';
import { AdminStatsResponse } from '@/types/stats';

export const statisticsService = {
    getSuperadminStats: async (): Promise<SuperadminStatisticsResponse> => {
        const response = await apiClient.get<SuperadminStatisticsResponse>('/statistics/superadmin');
        return response.data;
    },
    getAdminStats: async (): Promise<AdminStatsResponse> => {
        const response = await apiClient.get<AdminStatsResponse>('/statistics/admin');
        return response.data;
    },
};
