import React from "react";
import DashboardCard from "./DashboardCard";
import { FaPlus, FaRegBell } from "react-icons/fa";
import profileImg from "../assets/profile-img/profileImg.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import productImg from "../assets/dashboard-img/dashboardImg.png";

function Dashborard() {
  const obj = [
    {
      title: "Name",
      description: "Steel I-Beams",
    },
    {
      title: "Product SKU",
      description: "SKU_*&&&",
    },
    {
      title: "Category",
      description: "Counter Slabs",
    },
    {
      title: "Brand Name",
      description: "A BC",
    },
  ];
  const obj2 = [
    {
      title: "Name",
      description: "123 Steel",
      color: "#2A2A2A",
    },
    {
      title: "Stock Quantity",
      description: "50 pieces",
      color: "#2A2A2A",
    },
    {
      title: "Price",
      description: "$2,450.00",
      color: "#14CA74",
    },
    {
      title: "Variant SKU",
      description: "ABC",
      color: "#2A2A2A",
    },
  ];
  return (
    <div className="p-[1.125rem]">
      <div className="flex justify-between items-center">
        <div>
          <h6 className="text-[0.75rem] text-[#9CA3AF] font-medium">
            Pages / Customer
          </h6>
          <h3 className="text-[1.25rem] text-[#2A2A2A] font-medium pt-[0.25rem]">
            Seller Dashboard
          </h3>
        </div>
        <div className="flex justify-center items-center px-[0.6875rem] py-[0.5rem] rounded-[1.5rem] bg-[#FFFFFF] gap-2 shadow-xl">
          <div className="p-2 hover:cursor-pointer">
            <FaRegBell className="text-[#A3AED0] text-[1rem]" />
          </div>
          <img
            src={profileImg}
            alt="profile-img"
            className="w-full hover:cursor-pointer"
          />
        </div>
      </div>
      <div className="w-full sm:p-5 bg-[#FFFFFF] rounded-md mt-[1.375rem] shadow-xl flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row sm:justify-between sm:items-start">
          <div className="flex justify-between sm:justify-center items-start gap-1 md:gap-[1.5rem] lg:gap-[2.0625rem]">
            <div className="flex gap-1 sm:gap-2 items-start">
              <div className="border border-[#1D4ED8] mt-1 rounded-full hover:cursor-pointer p-[0.0625rem]">
                <IoIosArrowRoundBack className="text-md text-[#1D4ED8]" />
              </div>
              <div className="font-medium mb-auto">
                <h3 className="text-[0.75rem] sm:text-[1.1875rem] text-[#2A2A2A]">
                  Steel I-Beams - Various Sizes
                </h3>
                <h5 className="text-[#2A2A2AB0]">D: #001</h5>
              </div>
            </div>
            <div className="bg-[#05C16833] px-[0.25rem] sm:px-[0.875rem] py-[0.125rem] border border-[#05C16833] rounded-[0.1875rem] sm:mt-2 ">
              <li className="text-[0.625rem] text-[#14CA74]">In-Stock</li>
            </div>
          </div>
          <button
            type="button"
            className="bg-[#4318FF] text-[#FFFFFF] rounded-md px-[0.625rem] sm:px-[1.625rem] py-[0.5rem] flex items-center gap-2 sm:gap-3 font-[500] text-[0.875rem] self-end mb-auto"
          >
            Edit Product <GoPlus className="text-[1.125rem]" />
          </button>
        </div>

        <div className="px-[1rem] sm:px-[1.5rem] py-[1.1875rem] bg-[#F4F4F480] border-[#F9FAFC] rounded-[0.9375rem]">
          <h4 className="text-[1.125rem] text-[#2A2A2A] font-[medium]">
            Images
          </h4>
          <div className="grid md:grid-cols-2 gap-[1.5625rem] pt-[1rem]">
            <img src={productImg} className="w-full" alt="" />
            <img src={productImg} className="w-full" alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-[1.625rem] bg-[#F4F4F480]  rounded-[0.9375rem] px-16px sm:px-[1.5rem] py-[0.625rem]">
          <h4 className="font-medium text-[1.125rem] text-[#2A2A2A]">
            Basic Information
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-3">
            {obj.map((items, index) => (
              <div key={index} className="flex flex-col gap-1">
                <h6 className="text-[0.875rem] text-[#2A2A2AB0] font-medium">
                  {items.title}
                </h6>
                <h6 className="text-[0.875rem] text-[#2A2A2A] font-medium">
                  {items.description}
                </h6>
              </div>
            ))}
          </div>
          <h4 className="font-medium text-[1.125rem] text-[#2A2A2A]">
            Description
          </h4>
          <div className="px-[1rem] py-[0.625rem] bg-[#FFFFFF] rounded-[0.625rem]">
            <p className="text-[0.875rem] font-medium text-[#979797]">
              High-quality steel I-beams from recent demolition project. Various
              sizes available.
            </p>
          </div>
        </div>

        <div className="px-16px sm:px-[1.5rem] py-[1.1875rem] bg-[#F4F4F480] rounded-[0.9375rem] ">
          <div className="flex items-start flex-col gap-[1.25rem]">
            <h4 className="font-medium text-[1.125rem] text-[#2A2A2A]">
              Product Variants
            </h4>
            <div className="bg-[#FFFFFFB2] p-[0.5rem] rounded-[0.9375rem] flex justify-center items-center gap-2">
              <p className="bg-[#FFFFF] text-[0.875rem] text-[#1D4ED8] font-medium shadow-lg px-1  rounded-[0.5rem] hover:cursor-pointer">
                Variant 1
              </p>
              <p className="bg-[#FFFFF] text-[0.875rem] text-[#8D9092] font-medium shadow-lg px-1  rounded-[0.5rem] hover:cursor-pointer">
                Variant 2
              </p>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-3">
                {obj2.map((items, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <h6 className="text-[0.875rem] text-[#2A2A2AB0] font-medium">
                      {items.title}
                    </h6>
                    <h6
                      className={`text-[0.875rem] font-medium`}
                      style={{ color: items.color }}
                    >
                      {items.description}
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashborard;
