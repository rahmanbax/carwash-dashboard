import apiClient from '@/api/apiClient';
import { SuperadminStatisticsResponse } from '@/types/statistics';

export const statisticsService = {
    getSuperadminStats: async (): Promise<SuperadminStatisticsResponse> => {
        const response = await apiClient.get<SuperadminStatisticsResponse>('/statistics/superadmin');
        return response.data;
    },
};
