"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

type DataPoint = {
  name: string;
  value: number;
};

type BarChartProps = {
  data: DataPoint[];
  title?: string;
  subtitle?: string;
  color?: string;
  height?: number;
  showGrid?: boolean;
  formatValue?: (value: number) => string;
  horizontal?: boolean;
};

type CustomTooltipProps = {
  active?: boolean;
  payload?: { value: number; payload: DataPoint }[];
  label?: string;
  formatValue?: (value: number) => string;
};

// Custom Tooltip Component
const CustomTooltip = ({
  active,
  payload,
  formatValue,
}: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0].payload;
    return (
      <div className="bg-white px-3 py-2 shadow-lg rounded-lg border border-gray-200">
        <p className="text-sm text-gray-500">{name}</p>
        <p className="text-lg font-semibold text-gray-900">
          {formatValue ? formatValue(value) : value.toLocaleString("id-ID")}
        </p>
      </div>
    );
  }
  return null;
};

const BarChartComponent = ({
  data,
  title,
  subtitle,
  color = "#51a2ff",
  height = 300,
  showGrid = true,
  formatValue,
  horizontal = false,
}: BarChartProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 w-full">
      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          )}
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      )}

      {/* Chart */}
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          layout={horizontal ? "vertical" : "horizontal"}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />}

          {horizontal ? (
            <>
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 12 }}
                tickFormatter={(value) =>
                  formatValue
                    ? formatValue(value)
                    : value.toLocaleString("id-ID")
                }
              />
              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 12 }}
                width={80}
              />
            </>
          ) : (
            <>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 12 }}
                dx={-10}
                tickFormatter={(value) =>
                  formatValue
                    ? formatValue(value)
                    : value.toLocaleString("id-ID")
                }
              />
            </>
          )}

          <Tooltip
            content={<CustomTooltip formatValue={formatValue} />}
            cursor={{ fill: "#eff6ff" }}
          />

          <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={50}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
