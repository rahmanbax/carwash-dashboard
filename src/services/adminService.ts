import apiClient from "@/api/apiClient";
import { AdminManagementResponse, UpdateAdminRequest } from "@/types/admin";

export const adminService = {
    getAdmins: async (): Promise<AdminManagementResponse> => {
        const response = await apiClient.get<AdminManagementResponse>("/admins");
        return response.data;
    },
    updateAdmin: async (id: number, data: UpdateAdminRequest): Promise<any> => {
        const response = await apiClient.put(`/admins/${id}`, data);
        return response.data;
    },
    createAdmin: async (data: UpdateAdminRequest): Promise<any> => {
        const response = await apiClient.post("/admins", data);
        return response.data;
    },
};
