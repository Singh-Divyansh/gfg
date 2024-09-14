import React from "react";
import {
  BarChart,
  Wallet,
  HandCoins,
  BadgeIndianRupee
} from "lucide-react";
import Dashboard from "../Dashboard/Dashboard.jsx";

export function SidebarThree() {
  return (
    <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8 scale-105">
        <img
          src="https://cdn.dribbble.com/userupload/9208559/file/original-d0951d69b1eb4e46cf66caa8544f3f2a.jpg?resize=1024x768"
          className="h-30 w-30 rounded-3xl"
        />
      
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xl font-semibold uppercase text-gray-900">
              analytics
            </label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="/"
            >
              <BarChart className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-lg font-medium">Dashboard</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Wallet className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-lg font-medium">All Transactions</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <BadgeIndianRupee className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-lg font-medium">Income</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <HandCoins className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-lg font-medium">Expenses</span>
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}
