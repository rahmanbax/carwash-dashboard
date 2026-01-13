export interface WeeklyRevenue {
    range: {
        start: string;
        end: string;
    };
    data: {
        day: string;
        revenue: number;
    }[];
}

export interface WashingStatistic {
    time: string;
    value: number;
}

export interface QueueItem {
    bookingNumber: string;
    plate: string;
    type: string;
    queue_time: string;
    status: string;
}

export interface SuperAdminStats {
    date: string;
    totalTenant: number;
    totalAdmin: number;
    weeklyRevenue: WeeklyRevenue;
    todayWashingStatistics: WashingStatistic[];
    todayQueue: QueueItem[];
}

export interface StatsResponse {
    status: string;
    message: string;
    data: SuperAdminStats;
}
