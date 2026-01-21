"use client";

import StatsCard from "@/components/StatsCard";
import LineAreaChart from "@/components/charts/LineAreaChart";
import BarChart from "@/components/charts/BarChart";
import { IconUser } from "@tabler/icons-react";
import VehicleStatusCard from "@/components/vehicle/VehicleStatusCard";
import { useSuperadminStats } from "@/hooks/useSuperadminStats";
import DashboardSkeleton from "@/components/skeleton/DashboardSkeleton";



const SuperadminDashboardPage = () => {
  const { data: stats, isLoading } = useSuperadminStats();

  if (isLoading) return <DashboardSkeleton />;
  if (!stats) return <div>No data available</div>;

  // Transform weekly revenue for LineChart
  const transactionData = stats.weeklyRevenue.data.map((item: any) => ({
    name: item.day,
    value: item.revenue
  }));

  // Transform washing stats for BarChart
  const pencucianData = stats.todayWashingStatistics.map((item: any) => ({
    name: item.time,
    value: item.value
  }));

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <StatsCard
          label="Total Tenant"
          amount={stats.totalTenant}
          change={0}
          isChange={false}
          icon={<IconUser />}
        />
        <StatsCard
          label="Total Admin"
          amount={stats.totalAdmin}
          change={0}
          isChange={false}
          icon={<IconUser />}
        />
      </div>

      {/* Line Area Chart */}
      <LineAreaChart
        data={transactionData}
        title={`Pendapatan Minggu Ini`}
        height={350}
      />

      <div className="flex gap-4 w-full h-fit">
        {/* Bar Chart */}
        <BarChart
          data={pencucianData}
          title="Pencucian Hari Ini"
          height={350}
        />
        <div className="w-full bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">Antrian Kendaraan</h3>
          <div className="space-y-2 mt-6">
            {stats.todayQueue.length > 0 ? stats.todayQueue.map((item: any) => (
              <VehicleStatusCard
                key={item.bookingNumber}
                data={{
                  plat: item.plate,
                  kategori: item.type,
                  jamBooking: item.queue_time,
                  status: item.status
                }}
              />
            )) : (
              <div className="text-center text-gray-500 py-4">Tidak ada antrian</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperadminDashboardPage;
