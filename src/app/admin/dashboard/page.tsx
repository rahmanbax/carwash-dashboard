import StatsCard from "@/components/StatsCard";
import LineAreaChart from "@/components/charts/LineAreaChart";
import BarChart from "@/components/charts/BarChart";
import { IconUser } from "@tabler/icons-react";
import VehicleStatusCard from "@/components/vehicle/VehicleStatusCard";

// Sample data untuk chart
const transactionData = [
  { name: "Senin", value: 450000 },
  { name: "Selasa", value: 100000 },
  { name: "Rabu", value: 380000 },
  { name: "Kamis", value: 320000 },
  { name: "Jumat", value: 500000 },
];

const pencucianData = [
  { name: "08:00", value: 3 },
  { name: "09:00", value: 2 },
  { name: "10:00", value: 1 },
  { name: "11:00", value: 2 },
  { name: "12:00", value: 4 },
];

const AdminDashboardPage = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <StatsCard
          label="Total Tenant"
          amount={10}
          change={0}
          isChange={true}
          icon={<IconUser />}
        />
        <StatsCard
          label="Total Tenant"
          amount={10}
          change={0}
          isChange={true}
          icon={<IconUser />}
        />
        <StatsCard
          label="Total Tenant"
          amount={10}
          isChange={false}
          icon={<IconUser />}
        />
      </div>

      {/* Line Area Chart */}
      <LineAreaChart
        data={transactionData}
        title="Pendapatan Minggu Ini"
        height={350}
      />

      <div className="flex gap-4 w-full">
        {/* Bar Chart */}
        <BarChart
          data={pencucianData}
          title="Pencucian Hari Ini"
          height={350}
        />
        <div className="w-full bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">Antrian Kendaraan</h3>
          <div className="flex gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
