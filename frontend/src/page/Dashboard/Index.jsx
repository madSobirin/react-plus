import React, { useState } from "react";

// Komponen Stat Card
const StatCard = ({ title, value, change, icon, color }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
        <p
          className={`text-sm mt-1 ${
            change >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {change >= 0 ? "↑" : "↓"} {Math.abs(change)}%
        </p>
      </div>
      <div className={`p-3 rounded-full ${color} bg-opacity-10`}>{icon}</div>
    </div>
  </div>
);

// Komponen Chart (placeholder)
const Chart = ({ title, children }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
      {children}
    </div>
  </div>
);

// Komponen Table
const DataTable = () => {
  const data = [
    {
      id: 1,
      name: "Marcus Bergson",
      date: "Nov 15, 2023",
      amount: "$80,000",
      status: "Paid",
      statusColor: "text-green-600",
    },
    {
      id: 2,
      name: "Jaydon Vaccaro",
      date: "Nov 15, 2023",
      amount: "$150,000",
      status: "Refund",
      statusColor: "text-red-600",
    },
    {
      id: 3,
      name: "Corey Schleifer",
      date: "Nov 14, 2023",
      amount: "$87,000",
      status: "Paid",
      statusColor: "text-green-600",
    },
    {
      id: 4,
      name: "Cooper Press",
      date: "Nov 14, 2023",
      amount: "$100,000",
      status: "Paid",
      statusColor: "text-green-600",
    },
    {
      id: 5,
      name: "Phillip Lubin",
      date: "Nov 13, 2023",
      amount: "$78,000",
      status: "Refund",
      statusColor: "text-red-600",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Recent Transactions
        </h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 text-sm font-medium text-gray-600">
                Name
              </th>
              <th className="text-left py-3 text-sm font-medium text-gray-600">
                Date
              </th>
              <th className="text-left py-3 text-sm font-medium text-gray-600">
                Amount
              </th>
              <th className="text-left py-3 text-sm font-medium text-gray-600">
                Status
              </th>
              <th className="text-left py-3 text-sm font-medium text-gray-600">
                Invoice
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 text-sm font-medium text-gray-900">
                  {item.name}
                </td>
                <td className="py-4 text-sm text-gray-600">{item.date}</td>
                <td className="py-4 text-sm font-medium text-gray-900">
                  {item.amount}
                </td>
                <td className={`py-4 text-sm font-medium ${item.statusColor}`}>
                  {item.status}
                </td>
                <td className="py-4">
                  <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ isOpen, onClose }) => (
  <>
    {/* Overlay untuk mobile */}
    {isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
    )}

    <div
      className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">Dashboard</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {[
            { name: "Dashboard", icon: "📊", active: true },
            { name: "Analytics", icon: "📈" },
            { name: "Customers", icon: "👥" },
            { name: "Products", icon: "🛍️" },
            { name: "Orders", icon: "📦" },
            { name: "Settings", icon: "⚙️" },
          ].map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                item.active
                  ? "bg-blue-50 text-blue-600 border border-blue-100"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <img
              className="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                John Doe
              </p>
              <p className="text-sm text-gray-500 truncate">
                admin@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700 mr-4"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-gray-900">
                Dashboard Overview
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 0 0-6 6v2.25l-2.47 2.47a.75.75 0 0 0 .53 1.28h15.88a.75.75 0 0 0 .53-1.28L16.5 12V9.75a6 6 0 0 0-6-6z"
                  />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Revenue"
              value="$45,231.89"
              change={12.5}
              icon="💰"
              color="bg-green-500"
            />
            <StatCard
              title="Subscriptions"
              value="+2,350"
              change={18.2}
              icon="📱"
              color="bg-blue-500"
            />
            <StatCard
              title="Sales"
              value="+12,234"
              change={-2.1}
              icon="🛒"
              color="bg-orange-500"
            />
            <StatCard
              title="Active Now"
              value="573"
              change={5.7}
              icon="👥"
              color="bg-purple-500"
            />
          </div>

          {/* Charts and Table Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Chart title="Revenue Overview">
              <p className="text-gray-500">Chart akan ditampilkan di sini</p>
            </Chart>
            <Chart title="User Engagement">
              <p className="text-gray-500">Chart akan ditampilkan di sini</p>
            </Chart>
          </div>

          {/* Recent Transactions */}
          <DataTable />
        </main>
      </div>
    </div>
  );
};

export default Index;
