import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { locationService } from "@/services/locationService";
import { UpdateLocationRequest } from "@/types/location";

export const useSuperadminLocations = () => {
    return useQuery({
        queryKey: ["superadmin-locations"],
        queryFn: async () => {
            const response = await locationService.getSuperadminLocations();
            return response.data;
        },
    });
};

export const useUpdateLocation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: { id: number; data: UpdateLocationRequest | FormData }) =>
            locationService.updateLocation(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["superadmin-locations"] });
        },
    });
};

export const useCreateLocation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: UpdateLocationRequest | FormData) =>
            locationService.createLocation(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["superadmin-locations"] });
        },
    });
};
export const useDeleteLocation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => locationService.deleteLocation(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["superadmin-locations"] });
        },
    });
};
