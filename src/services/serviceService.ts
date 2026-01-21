import apiClient from '@/api/apiClient';
import { ServiceResponse } from '@/types/service';

export const serviceService = {
    getServices: async (type?: string): Promise<ServiceResponse> => {
        const response = await apiClient.get<ServiceResponse>('/services', {
            params: type ? { type } : {}
        });
        return response.data;
    },
};
