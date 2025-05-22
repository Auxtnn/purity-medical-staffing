import React from "react";
import { Hospital } from "lucide-react";

const PurityMedicalLogo = () => {
  return (
    <div className="">
      {/* Main Logo */}
      <div className="flex items-center space-x-4 group cursor-pointer">
        {/* Icon Container with animated gradient background */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary  to-accent  rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          <div className="relative bg-gradient-to-br from-primary  to-accent  p-4 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
            <Hospital size={20} className="text-white drop-shadow" />
          </div>
        </div>

        {/* Text Container */}
        <div className="s">
          <h1 className="text-lg font-bold bg-gradient-to-r from-primary  to-accent bg-clip-text text-transparent leading-tight">
            Purity
          </h1>
          <div className="flex items-center space-x-2">
            <span className="text-base font-semibold text-primary">
              Medical
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-pulse"></div>
            <span className="text-base font-semibold text-primary">
              Staffing
            </span>
          </div>
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

export default PurityMedicalLogo;
