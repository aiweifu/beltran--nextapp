"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function DashboardPage() {

  const router = useRouter();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push("/login");
    }

  }, [router]);

  const handleLogout = () => {

    localStorage.removeItem("user");

    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 relative overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-red-300 rounded-full blur-3xl opacity-20"></div>

      {/* Navbar */}
      <nav className="w-full bg-white shadow-md px-8 py-4 flex justify-between items-center relative z-10">

        <div>
          <h1 className="text-3xl font-extrabold text-orange-600">
            CASA AIREZA
          </h1>

          <p className="text-sm text-gray-500">
            Foods and Drinks Management System
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-semibold transition"
        >
          Logout
        </button>

      </nav>

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">

        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-8"
        >

          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome Back 👋
          </h2>

          {user && (
            <div className="space-y-2">

              <p className="text-lg text-gray-600">
                <span className="font-semibold text-orange-600">
                  Name:
                </span>{" "}
                {user.name}
              </p>

              <p className="text-lg text-gray-600">
                <span className="font-semibold text-orange-600">
                  Email:
                </span>{" "}
                {user.email}
              </p>

            </div>
          )}

        </motion.div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Total Orders */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-3xl shadow-lg p-6"
          >

            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Total Orders
            </h3>

            <p className="text-5xl font-extrabold text-orange-600">
              128
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Orders processed today
            </p>

          </motion.div>

          {/* Total Revenue */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-3xl shadow-lg p-6"
          >

            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Revenue
            </h3>

            <p className="text-5xl font-extrabold text-green-600">
              ₱24K
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Daily sales revenue
            </p>

          </motion.div>

          {/* Customers */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-3xl shadow-lg p-6"
          >

            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Customers
            </h3>

            <p className="text-5xl font-extrabold text-blue-600">
              86
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Active customers today
            </p>

          </motion.div>

          {/* Available Products */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-3xl shadow-lg p-6"
          >

            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Menu Items
            </h3>

            <p className="text-5xl font-extrabold text-red-500">
              45
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Available food & drinks
            </p>

          </motion.div>

        </div>

        {/* Quick Actions */}
        <div className="mt-10">

          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl shadow-lg p-6 cursor-pointer"
            >

              <h3 className="text-2xl font-bold text-orange-600 mb-3">
                Add Orders
              </h3>

              <p className="text-gray-600">
                Create and manage customer food orders.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl shadow-lg p-6 cursor-pointer"
            >

              <h3 className="text-2xl font-bold text-orange-600 mb-3">
                Manage Menu
              </h3>

              <p className="text-gray-600">
                Update food, drinks, and pricing information.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl shadow-lg p-6 cursor-pointer"
            >

              <h3 className="text-2xl font-bold text-orange-600 mb-3">
                View Reports
              </h3>

              <p className="text-gray-600">
                Monitor sales analytics and business performance.
              </p>

            </motion.div>

          </div>

        </div>

      </div>
    </div>
  );
}