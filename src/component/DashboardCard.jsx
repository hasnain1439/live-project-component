import React from "react";
import dashborardImg from "../assets/dashboard-img/dashboardImg.png";
import { FaStar } from "react-icons/fa";

function DashboardCard() {
  return (
    <div className="bg-[#F9FAFB] px-[19px] py-[12px] rounded-lg shadow-md border border-[#1D4ED824]">
      <div>
        <img src={dashborardImg} className="w-full" alt="dashboardimg" />
      </div>
      <div className="flex flex-col pt-[12px] gap-[6px]">
        <div className="flex justify-between align-center">
          <h3 className="text-[16px] font-semibold text-[#2A2A2A]">
            Steel I-Beams
          </h3>
          <div className="bg-[#FFFFFF] py-[4px] px-[10px] rounded-[45px] hover:cursor-pointer border border-[#1D4ED824]">
            <p className=" text-[#1D4ED8] font-semibold text-[10px] ">
              In Stock
            </p>
          </div>
        </div>
        <div className="flex justify-between align-center">
          <h3 className="text-[18px] text-[#14CA74] font-semibold">$ 45.00</h3>
          <div className="flex items-center gap-1">
            <FaStar className="text-[#FDC62F] text-[14px]" />
            <p className="text-[12px] text-[#2A2A2A80] font-regular">4.5</p>
          </div>
        </div>
        <div className="pt-[10px]"></div>
        <button
          type="button"
          className="bg-[#1D4ED8] rounded-md text-white font-semibold py-[14px]"
        >
          View Detail
        </button>
      </div>
    </div>
  );
}

export default DashboardCard;
