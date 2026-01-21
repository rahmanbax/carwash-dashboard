import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { adminService } from "@/services/adminService";
import { UpdateAdminRequest } from "@/types/admin";

export const useAdmins = () => {
    return useQuery({
        queryKey: ["admins"],
        queryFn: async () => {
            const response = await adminService.getAdmins();
            return response.data;
        },
    });
};

export const useUpdateAdmin = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: { id: number; data: UpdateAdminRequest }) =>
            adminService.updateAdmin(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admins"] });
        },
    });
};

export const useCreateAdmin = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: UpdateAdminRequest) => adminService.createAdmin(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admins"] });
        },
    });
};

