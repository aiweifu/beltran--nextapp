"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col items-center justify-center overflow-hidden relative">

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-6 max-w-5xl z-10"
      >

        {/* Business Name */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
          Welcome to{" "}
          <span className="text-orange-600">
            CASA AIREZA
          </span>
          <br />
          Foods and Drinks
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Experience delicious meals, refreshing beverages, and a cozy dining atmosphere made for family, friends, and unforgettable moments.
        </p>

        {/* Login and Signup Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link href="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-orange-600 text-white rounded-full font-semibold shadow-lg hover:bg-orange-700 transition-colors"
            >
              Sign Up
            </motion.button>
          </Link>

          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:bg-gray-100 border border-gray-200 transition-colors"
            >
              Login
            </motion.button>
          </Link>

        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-bold text-orange-600 mb-2">
              Delicious Meals
            </h3>

            <p className="text-gray-600">
              Enjoy freshly prepared dishes made with quality ingredients and authentic flavors.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-bold text-orange-600 mb-2">
              Refreshing Drinks
            </h3>

            <p className="text-gray-600">
              Choose from a variety of beverages, coffees, fruit drinks, and signature refreshments.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-bold text-orange-600 mb-2">
              Cozy Ambiance
            </h3>

            <p className="text-gray-600">
              Relax in a warm and welcoming environment perfect for casual dining and gatherings.
            </p>
          </motion.div>

        </div>
      </motion.div>

      {/* Background Decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>

      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="absolute top-[40%] right-[20%] w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

    </div>
  );
}