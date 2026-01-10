import StatsCard from "@/components/StatsCard";
import LineAreaChart from "@/components/charts/LineAreaChart";
import BarChart from "@/components/charts/BarChart";
import { IconUser } from "@tabler/icons-react";
import VehicleStatusCard from "@/components/vehicle/VehicleStatusCard";

// Sample data untuk status vehicle
const mockVehicleData = [
  {
    plat: "D 1234 ABC",
    kategori: "mobil",
    jamBooking: "09:00",
    status: "SIAP_DIAMBIL",
  },
  {
    plat: "D 5678 XYZ",
    kategori: "motor",
    jamBooking: "09:30",
    status: "DIAMBIL",
  },
  {
    plat: "B 9012 DEF",
    kategori: "mobil",
    jamBooking: "10:00",
    status: "DICUCI",
  },
  {
    plat: "D 3456 GHI",
    kategori: "motor",
    jamBooking: "10:30",
    status: "DICUCI",
  },
];

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

const SuperadminDashboardPage = () => {
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
            {mockVehicleData.map((item) => (
              <VehicleStatusCard key={item.plat} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperadminDashboardPage;
