import apiClient from "@/api/apiClient";
import { SuperadminLocationsResponse, UpdateLocationRequest } from "@/types/location";

export const locationService = {
    getSuperadminLocations: async (): Promise<SuperadminLocationsResponse> => {
        const response = await apiClient.get<SuperadminLocationsResponse>("/locations/superadmin");
        return response.data;
    },
    updateLocation: async (id: number, data: UpdateLocationRequest | FormData): Promise<any> => {
        const response = await apiClient.put(`/locations/${id}`, data);
        return response.data;
    },
    createLocation: async (data: UpdateLocationRequest | FormData): Promise<any> => {
        const response = await apiClient.post("/locations", data);
        return response.data;
    },
    deleteLocation: async (id: number): Promise<any> => {
        const response = await apiClient.delete(`/locations/${id}`);
        return response.data;
    },
};
