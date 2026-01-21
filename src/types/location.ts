export interface Location {
    id: number;
    name: string;
    address: string;
    phone: string;
    totalAdmin: number;
    isActive: boolean;
    latitude: string;
    longitude: string;
    photoUrl: string;
}

export interface SuperadminLocationsData {
    totalLocation: number;
    totalActiveLocation: number;
    totalAdmin: number;
    totalNewTenantsThisMonth: number;
    locations: Location[];
}

export interface SuperadminLocationsResponse {
    status: string;
    message: string;
    data: SuperadminLocationsData;
}
export interface UpdateLocationRequest {
    name: string;
    address: string;
    phone: string;
    isActive: boolean;
    latitude: string;
    longitude: string;
    photo?: File; // For request
}
