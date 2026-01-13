export interface WeeklyRevenueItem {
    day: string;
    revenue: number;
}

export interface WeeklyRevenue {
    range: {
        start: string;
        end: string;
    };
    data: WeeklyRevenueItem[];
}

export interface WashingStatisticItem {
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

export interface SuperadminStatistics {
    date: string;
    totalTenant: number;
    totalAdmin: number;
    weeklyRevenue: WeeklyRevenue;
    todayWashingStatistics: WashingStatisticItem[];
    todayQueue: QueueItem[];
}

export interface SuperadminStatisticsResponse {
    status: string;
    message: string;
    data: SuperadminStatistics;
}
