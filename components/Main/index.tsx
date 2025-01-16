import { format } from "date-fns";
import { ChevronDown, MoreHorizontal, TrendingUp } from "lucide-react";

// const data = [
//   { name: "Jan", value: 193000 },
//   { name: "Feb", value: 180000 },
//   { name: "Mar", value: 160000 },
//   { name: "Apr", value: 190000 },
//   { name: "May", value: 170000 },
// ];

// const pieData = [
//   { name: "View Count", value: 68 },
//   { name: "Percentage", value: 16 },
//   { name: "Sales", value: 16 },
// ];

// const COLORS = ["#4ade80", "#fbbf24", "#22c55e"];

const transactions = [
  {
    name: "Premium T-Shirt",
    date: new Date(2024, 0, 12),
    status: "Completed",
    price: "$193,000",
    icon: "👕",
  },
  {
    name: "PlayStation 5",
    date: new Date(2024, 0, 12),
    status: "Pending",
    price: "$193,000",
    icon: "🎮",
  },
  {
    name: "Hoodie Gordrong",
    date: new Date(2024, 0, 12),
    status: "Pending",
    price: "$193,000",
    icon: "👕",
  },
  {
    name: "iPhone 15 Pro Max",
    date: new Date(2024, 0, 12),
    status: "Completed",
    price: "$193,000",
    icon: "📱",
  },
  {
    name: "Lotus",
    date: new Date(2024, 0, 12),
    status: "Completed",
    price: "$193,000",
    icon: "🌸",
  },
  {
    name: "Starbucks",
    date: new Date(2024, 0, 12),
    status: "Completed",
    price: "$193,000",
    icon: "☕",
  },
  {
    name: "Think Dentar T-Shirt",
    date: new Date(2024, 0, 12),
    status: "Completed",
    price: "$193,000",
    icon: "👕",
  },
];

function Main() {
  return (
    <main className="flex-1 px-8 py-5">
      <div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
            <p className="text-gray-500 text-sm">
              An easy way to manage sales with care and precision.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg">
            <span className="text-sm text-gray-600">
              January 2024 - May 2024
            </span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Stats Cards */}
          <div className="col-span-4">
            <div className="bg-white  p-6 rounded-2xl mb-6 border">
              <div className="flex justify-between items-start mb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="">Update</span>
                    <span className="text-xs">July 12th 2024</span>
                  </div>
                  <h3 className="font-medium">Sales revenue increased</h3>
                  <p className="text-sm ">40% in 1 week</p>
                </div>
                <button className="">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              <button className="text-[#49DE80] text-sm">
                See Statistics →
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-medium">Net Income</h3>
                <button className="text-gray-400">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              <div className="mb-4">
                <p className="text-3xl font-semibold mb-2">$193,000</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="flex items-center gap-1 text-green-500">
                    <TrendingUp size={16} />
                    +35%
                  </span>
                  <span className="text-gray-500">from last month</span>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Chart */}
          <div className="col-span-8 bg-white p-6 rounded-2xl border">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium">Revenue</h3>
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#4ade80]"></span>
                  Income
                </button>
                <button className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg text-sm">
                  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                  Expenses
                </button>
              </div>
            </div>
            <div className="h-[240px]">
              {/* <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} barSize={40}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                />
                <Bar dataKey="value" fill="#4ade80" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer> */}
            </div>
          </div>

          {/* Transactions */}
          <div className="col-span-8">
            <div className="bg-white p-6 rounded-2xl mb-6 border">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-medium">Transaction</h3>
                <button className="text-gray-400">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              <div className="space-y-4">
                {transactions.map((transaction, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{transaction.icon}</span>
                      <div>
                        <p className="font-medium">{transaction.name}</p>
                        <p className="text-sm text-gray-500">
                          {format(transaction.date, "MMM dd, yyyy")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <span className="text-gray-900">{transaction.price}</span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          transaction.status === "Completed"
                            ? "bg-green-50 text-green-600"
                            : "bg-yellow-50 text-yellow-600"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-medium">Sales Report</h3>
                <button className="text-gray-400">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Product Launched
                  </span>
                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-[#4ade80] rounded-full w-[25%]"></div>
                  </div>
                  <span className="text-sm font-medium">(233)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Original Product
                  </span>
                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-[#4ade80] rounded-full w-[15%]"></div>
                  </div>
                  <span className="text-sm font-medium">(33)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Product Sold</span>
                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-[#4ade80] rounded-full w-[45%]"></div>
                  </div>
                  <span className="text-sm font-medium">(463)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Card */}
          <div className="col-span-4">
            <div className="bg-white p-6 rounded-2xl mb-6 border">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-medium">Total View Performance</h3>
                <button className="text-gray-400">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              <div className="flex justify-center mb-4">
                <div className="w-48 h-48">
                  {/* <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x="50%"
                        dy="-0.5em"
                        className="text-xl font-semibold"
                      >
                        $65K
                      </tspan>
                      <tspan
                        x="50%"
                        dy="1.5em"
                        className="text-sm text-gray-500"
                      >
                        Total Goal
                      </tspan>
                    </text>
                  </PieChart>
                </ResponsiveContainer> */}
                </div>
              </div>
              <div className="flex justify-center gap-6 ">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#4ade80]"></span>
                  <span className="text-sm text-gray-600">View Count</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#fbbf24]"></span>
                  <span className="text-sm text-gray-600">Percentage</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#22c55e]"></span>
                  <span className="text-sm text-gray-600">Sales</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-medium">
                  Level up your sales managing to the next level.
                </h3>
                <button className="text-gray-400">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              <p className="text-gray-500 text-sm mb-6">
                An easy way to manage sales with care and precision.
              </p>
              <button className="w-full bg-[#4ade80] text-white py-2.5 rounded-lg font-medium">
                Update to Siohioma+
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
