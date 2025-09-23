import React from "react";
import profileImg from "../assets/profile-img/profileImg.png";
import { FaPlus, FaRegBell } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import userImg from "../assets/profile-img/user-profile.png";
import { FaLocationDot } from "react-icons/fa6";

function OrderFulfill() {
  const profileInfo = [
    { title: "Store Name", value: "Steel Supply Co", color: "#2A2A2A" },
    { title: "Total Amount", value: "$2,450.00", color: "#14CA74" },
    { title: "Items", value: "2 products", color: "#2A2A2A" },
  ];
  const shippingInfo = [
    { title: "Tracking Number", value: "TRK123456789" },
    { title: "Estimated Delivery", value: "2024-01-15" },
    { title: "Placed On", value: "2024-01-15" },
    { title: "Warehouse", value: "MW-NY" },
    { title: "Method", value: "Standard Shipping" },
    { title: "Placed On", value: "2024-01-15" },
  ];
  return (
    <div className="py-[1.125rem] bg-red-900 w-full">
      {/*Title of Page*/}
      <div className="flex justify-between items-center">
        <div>
          <h6 className="text-[0.75rem] text-[#9CA3AF] font-medium">px
            Pages / Customer
          </h6>
          <h3 className="text-[1.25rem] text-[#2A2A2A] font-medium pt-[0.25rem]">
            Orders & Fulfillment Management
          </h3>
        </div>
        <div className="flex justify-center items-center px-[0.6875rem] py-[0.5rem] rounded-[1.5rem] bg-[#FFFFFF] gap-2 shadow-xl me-3">
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
      {/*Description of Page*/}
      <div className="bg-[#FFFFFF] rounded-[1.25rem] p-[1.125rem] mt-[30px]">
        {/* Order Detail */}
        <div className="flex gap-1 sm:gap-2 items-start">
          <div className="border border-[#1D4ED8] mt-1 rounded-full hover:cursor-pointer p-[0.0625rem]">
            <IoIosArrowRoundBack className="text-md text-[#1D4ED8]" />
          </div>
          <div className="font-medium mb-auto">
            <h3 className="text-[1.25rem] sm:text-[1.1875rem] text-[#2A2A2A]">
              Order Details
            </h3>
          </div>
        </div>
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[247px_auto] gap-3 mt-[1.875rem]">
          {/* Left Section */}
          <div className="flex lg:flex-col flex-wrap lg:flex-nowrap gap-[0.9375rem] items-start">
            {/* Contact Card */}
            <div className="bg-[#F4F4F480] flex-1 basis-full sm:basis-[30%] md:basis-[48%] lg:w-full border border-[#F9FAFC] rounded-[0.9375rem] p-[1.3125rem] font-medium text-[#2A2A2A]">
              <h1 className="text-[1rem] mb-[1.25rem]">Customer Info:</h1>
              <div className="flex flex-col gap-[1.25rem]">
                <div className="flex gap-2 mt-[20px]">
                  <div className="w-[2.5rem] h-[2.5rem] hover:cursor-pointer">
                    <img src={userImg} className="w-full" alt="userImg" />
                  </div>
                  <div className="text-[0.75rem]">
                    <h5>Ahmad Ali</h5>
                    <h6 className="text-[#2A2A2A66]">@ahmad@gmail.com</h6>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[14px]">
                  <h5 className="text-[#2A2A2AB0]">Phone #:</h5>
                  <h5>+123 444 55556</h5>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-[#F4F4F480] flex-1 basis-full sm:basis-[30%] md:basis-[48%] lg:w-full border border-[#F9FAFC] rounded-[0.9375rem] p-[1.3125rem] font-medium text-[#2A2A2A]">
              <h1 className="text-[1rem] mb-[1.25rem]">Shipping Address:</h1>
              <div className="flex gap-3 pt-[1.25rem]">
                <FaLocationDot className="text-[#1D4ED8]" />
                <p className="text-[#2A2A2A99] text-[0.875rem]">
                  123 Oak Street Portland, OR 97201
                </p>
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-[#F4F4F480] flex-1 basis-full sm:basis-[30%] md:basis-[48%] lg:w-full border border-[#F9FAFC] rounded-[0.9375rem] p-[1.3125rem] font-medium text-[#2A2A2A]">
              <h1 className="text-[1rem] mb-[1.25rem]">Payment Info:</h1>
              <div className="flex flex-col gap-3 pt-[1.25rem] text-[0.875rem] font-medium text-[#2A2A2AB0]">
                <div className="flex justify-between items-center">
                  <h4>Method:</h4>
                  <h4 className="text-[#2A2A2A]">Credit Card</h4>
                </div>
                <div className="flex justify-between items-center">
                  <h4>Status:</h4>
                  <h4 className="bg-[#05C16833] text-[#14CA74] px-2 py-0.5 flex items-center gap-2 rounded">
                    <span className="p-0.5 bg-[#05C168] rounded-full"></span>
                    Paid
                  </h4>
                </div>
                <div className="flex justify-between items-center">
                  <h4>Total Amount:</h4>
                  <h4 className="text-[#14CA74]">$2,450.00</h4>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="my-5 basis-full sm:basis-full md:basis-[48%] lg:w-full flex-1">
              <div className="flex flex-col gap-[0.9375rem]">
                <button className="bg-[#1D4ED8] text-white shadow-md flex items-center justify-center rounded-md text-[0.875rem] font-medium py-[0.875rem] px-2 gap-2">
                  Marked as Shipped <FaPlus />
                </button>
                <button className="text-[#1D4ED8] shadow-md flex items-center justify-center rounded-md text-[0.875rem] font-medium py-[0.875rem] px-2 gap-2 border-[0.0394rem] border-[#1D4ED8]">
                  Send Tracking Number <FaPlus />
                </button>
                <button
                  // onClick={() => setIsProductModel(true)}
                  className="bg-[#FF5A65] text-white shadow-md flex items-center justify-center rounded-md text-[0.875rem] font-medium py-[0.875rem] px-2 gap-2"
                >
                  Cancel Order <FaPlus />
                </button>
              </div>
            </div>
          </div>

          {/* right Section */}
          <div className="lg:p-5 flex flex-col gap-[1.25rem]">
            {/* Order ID section */}
            <div className="bg-[#F4F4F480] px-[1.5rem] py-[1.25rem] border-[0.0375rem] border-[#F9FAFC] rounded-[0.9375rem]">
              <div className="flex justify-between items-center">
                <h4 className="text-[1.125rem] font-medium text-primary-950">
                  ORD-2024-001
                </h4>
                <h4 className="bg-[#05C16833] rounded-sm text-[#14CA74] px-2 py-0.5 flex items-center gap-2">
                  {" "}
                  <span className="p-0.5 bg-[#05C168] rounded-full "></span>{" "}
                  Paid
                </h4>
              </div>
              <div className="grid sm:grid-cols-3 gap-3 mt-[1.5625rem]">
                {profileInfo.map((items, index) => (
                  <div key={index} className="text-[0.875rem] font-medium">
                    <h4 className="text-[#2A2A2AB0]">{items.title}</h4>
                    <h4 style={{ color: items.color }}>{items.value}</h4>
                  </div>
                ))}
              </div>
            </div>
            {/* Shopping Info */}
            <div className="bg-[#F4F4F480] px-[1.5rem] py-[1.25rem] border-[0.0375rem] border-[#F9FAFC] rounded-[0.9375rem]">
              <h4 className="text-[1.125rem] font-medium text-primary-950">
                Shipping Information:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-[1.875rem] mt-[1.5625rem]">
                {shippingInfo.map((items, index) => (
                  <div key={index} className="text-[0.875rem] font-medium">
                    <h4 className="text-[#2A2A2AB0]">{items.title}</h4>
                    <h4>{items.value}</h4>
                  </div>
                ))}
              </div>
            </div>
            {/* Order Items */}
            <div className="bg-[#F4F4F480] px-[0.75rem] sm:px-[1.5rem] py-[1.25rem] border-[0.0375rem] border-[#F9FAFC] rounded-[0.9375rem]">
              <h4 className="text-[1.125rem] font-medium text-primary-950">
                Order Items
              </h4>
              <div className="flex flex-col gap-[0.9375rem] pt-[1.5625rem]">
                {/* Order Card */}
                <div className="bg-[#FFFFFF] rounded-[0.9375rem] shadow-[0px_0.625rem_0.625rem_0px_#0000000D] border border-[#8D90922B] px-[1.25rem] py-[1.25rem]">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div className="flex items-center gap-3">
                      {/* <OrderIcon className=" w-[1.875rem] h-[1.875rem] text-secondary-700" /> */}
                      <div className="text-[0.875rem] font-medium">
                        <h5 className="text-primary-950">ORD-001</h5>
                        <h4 className="text-[#2A2A2AB0]">Order ID</h4>
                      </div>
                    </div>
                    <div className="flex justify-between gap-3">
                      <div className="text-[0.875rem] font-medium sm:mr-5">
                        <h5 className="text-primary-950">03 × $4.50</h5>
                        <h4 className="text-[#2A2A2AB0]">Quantity</h4>
                      </div>
                      <div className="text-[0.875rem] font-medium">
                        <h5 className="text-primary-950">$2,250.00</h5>
                        <h4 className="text-[#2A2A2AB0]">Total Amount</h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2nd Order Card */}
                <div className="bg-[#FFFFFF] rounded-[0.9375rem] shadow-[0px_0.625rem_0.625rem_0px_#0000000D] border border-[#8D90922B] px-[1.25rem] py-[1.25rem]">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div className="flex items-center gap-3">
                      {/* <OrderIcon className=" w-[1.875rem] h-[1.875rem] text-secondary-700" /> */}
                      <div className="text-[0.875rem] font-medium">
                        <h5 className="text-primary-950">ORD-002</h5>
                        <h4 className="text-[#2A2A2AB0]">Order ID</h4>
                      </div>
                    </div>
                    <div className="flex justify-between gap-3">
                      <div className="text-[0.875rem] font-medium sm:mr-5">
                        <h5 className="text-primary-950">05 × $8.00</h5>
                        <h4 className="text-[#2A2A2AB0]">Quantity</h4>
                      </div>
                      <div className="text-[0.875rem] font-medium">
                        <h5 className="text-primary-950">$3,500.00</h5>
                        <h4 className="text-[#2A2A2AB0]">Total Amount</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-centertext-[1.125rem] font-medium mt-[0.9375rem]">
                <h4 className="text-[#2A2A2A]">Subtotal</h4>
                <h4 className="text-[#14CA74]">$2,450.00</h4>
              </div>
            </div>
            {/* Order Notes */}
            <div className="bg-[#F4F4F480] px-[0.75rem] sm:px-[1.5rem] py-[1.25rem] border-[0.0375rem] border-[#F9FAFC] rounded-[0.9375rem]">
              <h4 className="text-[1.125rem] font-medium text-primary-950">
                Order Notes
              </h4>
              <div className="w-full p-[1rem] bg-[#FFFFFF] rounded-[0.625rem] shadow-lg mt-[1.25rem] text-[0.875rem] text-[#2A2A2A80] outline-none">
                Customer requested expedited processing due to urgent need.
                Order is ready for shipment. Please process dispatch as soon as
                possible.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default OrderFulfill;
