import React, { useState } from "react";
import { IoIosArrowRoundBack, IoMdCheckmark } from "react-icons/io";
import { FaCheckCircle, FaLayerGroup, FaRegBell } from "react-icons/fa";
import profileImg from "../assets/profile-img/profileImg.png";
import userImg from "../assets/profile-img/user-profile.png";
import { CiEdit } from "react-icons/ci";
import { GiRecycle } from "react-icons/gi";
import { LuCirclePause } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import demiProduct from "../assets/Product/productimg.png";

function UserManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProductModel, setIsProductModel] = useState(false);

  const profileInfo = [
    { title: "E-mail", value: "john@example.com" },
    { title: "Phone", value: "(555) 123-4567" },
    { title: "Address", value: "New York, NY 10001 USA" },
  ];

  const summaryInfo = [
    { title: "Total Orders", value: "24", color: "#2A2A2A" },
    { title: "Last Order", value: "2024-01-15", color: "#2A2A2A" },
    { title: "Total Spent", value: "$45,230", color: "#14CA74" },
  ];
  const customerRole = [
    { title: "View Products" },
    { title: "Place Orders" },
    { title: "View Order History" },
  ];

  return (
    <>
      {/* user Management */}
      <div className="relative w-full bg-gray-900 flex flex-col gap-4">
        {/* profile data */}
        <div className="flex justify-between items-center">
          <div>
            <h6 className="text-[12px] text-[#9CA3AF] font-medium">
              Pages / Customer
            </h6>
            <h3 className="text-[20px] text-[#2A2A2A] font-medium pt-[4px]">
              User Management
            </h3>
          </div>
          <div className="flex justify-center items-center px-[11px] py-[8px] rounded-[24px] bg-[#FFFFFF] gap-2 shadow-xl">
            <div className="p-2 hover:cursor-pointer">
              <FaRegBell className="text-[#A3AED0] text-[16px]" />
            </div>
            <img
              src={profileImg}
              alt="profile-img"
              className="w-full hover:cursor-pointer"
            />
          </div>
        </div>

        <div className="px-[12px] sm:px-[24px] py-[19px] bg-[#FFFFFF] rounded-[15px] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="border border-[#1D4ED8] rounded-full hover:cursor-pointer p-[2px] sm:p-[3px]">
              <IoIosArrowRoundBack className="text-md text-[#1D4ED8]" />
            </div>
            <h3 className="text-[0.75rem] sm:text-[1.1875rem] text-[#2A2A2A]">
              User Details
            </h3>
          </div>

          {/* userinfo */}
          <div className="grid grid-cols-1 lg:grid-cols-[247px_auto] gap-3">
            {/* userProfileImg */}
            <div className="flex items-center justify-between lg:flex-col lg:items-between gap-4 p-[20px] bg-[#F4F4F480] border border-[#F9FAFC] rounded-[15px] flex-wrap md:flex-nowrap">
              <div className="w-full md:w-[30%] lg:w-full">
                <div className="rounded-full border border-[#1D4ED8] w-[82px] mx-auto md:mx-0 lg:mx-auto p-1">
                  <img src={userImg} className="w-full" alt="" />
                </div>
                <div className="p-5 text-center md:text-start lg:text-center">
                  <h4 className="text-[18px] font-medium text-[#2A2A2A]">
                    John Smith
                  </h4>
                  <p className="text-[#8D9092] text-[12px] font-regular">
                    alice.johnson@company.com
                  </p>
                </div>
              </div>
              <div className="my-5 w-full sm:w-[48%] md:w-[30%] lg:w-full">
                <div className="flex flex-col gap-[20px]">
                  <div className="flex justify-between items-center">
                    <h6 className="text-[#2A2A2AB0] text-[15px] font-medium">
                      Role:
                    </h6>
                    <h3 className="text-[14px] font-medium px-3 text-[#2A2A2A]">
                      Customer
                    </h3>
                  </div>
                  <div className="flex justify-between items-center">
                    <h6 className="text-[#2A2A2AB0] text-[15px] font-medium">
                      Status:
                    </h6>
                    <li className="bg-[#05C16833] text-center rounded-sm border-[0.62px] border-[#05C16833] font-medium text-[#14CA74] text-[10px] px-3 hover:cursor-pointer">
                      Active
                    </li>
                  </div>
                  <div className="flex justify-between items-center">
                    <h6 className="text-[#2A2A2AB0] text-[15px] font-medium">
                      Badge:
                    </h6>
                    <li className="bg-[#1D4ED833] text-center rounded-sm border-[0.62px] border-[#1D4ED833] font-medium text-[#14CA74] text-[10px] px-3 hover:cursor-pointer">
                      Verified
                    </li>
                  </div>
                  <div className="flex justify-between items-center">
                    <h6 className="text-[#2A2A2AB0] text-[15px] font-medium">
                      Member Since:
                    </h6>
                    <h3 className="text-[14px] font-medium text-[#2A2A2A]">
                      Jan 2023
                    </h3>
                  </div>
                </div>
              </div>
              <div className="my-5 w-full sm:w-[48%] md:w-[30%] lg:w-full">
                <div className="flex flex-col gap-[15px]">
                  <button className="bg-[#1D4ED8] text-white shadow-lg flex items-center justify-center rounded-md text-[14px] font-medium py-[14px] px-2 gap-2">
                    Edit Profile <CiEdit />
                  </button>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-[#1D4ED8] shadow-lg flex items-center justify-center rounded-md text-[14px] font-medium py-[14px] px-2 gap-2 border-[0.63px] border-[#1D4ED8]"
                  >
                    Change User Role <GiRecycle />
                  </button>
                  <button
                    onClick={() => setIsProductModel(true)}
                    className="bg-[#FF5A65] text-white shadow-lg flex items-center justify-center rounded-md text-[14px] font-medium py-[14px] px-2 gap-2"
                  >
                    Suspend Account <LuCirclePause />
                  </button>
                </div>
              </div>
            </div>

            {/* dailog Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-[#00000096] z-50">
                <div className="bg-[#FFFFFF] w-auto sm:w-[542px] rounded-lg shadow-lg p-6 relative flex flex-col gap-5">
                  <h3 className="text-[24px] font-medium text-[#2A2A2A]">
                    Change User Role
                  </h3>
                  {/* select */}
                  <div>
                    <h6 className="text-14px text-[#2A2A2A] mb-2">New Role</h6>
                    <select className="w-full bg-[#F9FAFB] border border-[#00000021] rounded-md px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-500">
                      <option>User</option>
                      <option>Admin</option>
                      <option>Editor</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="text-[#2A2A2A] text-[14px] font-medium mb-4">
                      Permission for Customer Role:
                    </h3>
                    <div className="flex flex-col gap-3">
                      {customerRole.map((item, index) => (
                        <div className="flex gap-3" key={index}>
                          <div className="p-[2px] bg-gradient-to-tr from-[#36DFF1] to-[#2764E7] rounded-sm hover:cursor-pointer flex items-center">
                            <IoMdCheckmark className="text-white text-[14px]" />
                          </div>
                          <h5 className="text-[14px] text-[#9CA3AF] font-regular ">
                            {item.title}
                          </h5>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-5 text-white text-[14px] rounded-md bg-[#FF5A65]"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="bg-[#1D4ED8] text-white shadow-lg flex items-center justify-center rounded-md text-[14px] font-medium py-3 px-5 gap-2 border-[0.63px] border-[#1D4ED8]"
                      >
                        Change User <GiRecycle />
                      </button>
                    </div>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* product Modal */}
            {isProductModel && (
              <div className="fixed inset-0 flex items-center justify-center bg-[#00000096] z-50 overflow-auto">
                <div className="bg-[#FFFFFF] w-[80%] sm:w-[80%] lg:w-[70%] h-auto rounded-lg shadow-lg p-5 md:p-10 relative flex flex-col gap-5">
                  <h3 className=" text-[14px] sm:text-[24px] font-medium text-[#2A2A2A] flex items-center gap-2">
                    <IoDocumentTextOutline className="text-[#1D4ED8] " /> Review Product: Wireless Headphones Pro
                  </h3>
                  {/* productImg section */}
                  <div className="sm:p-[19px] bg-[#F9F9F999] border border-[#8D90922B] rounded-[15px] flex flex-wrap md:flex-nowrap  gap-[22px] text-[14px] font-medium text-[#2A2A2A]">
                    <img
                      src={demiProduct}
                      className="max-w-[121px] h-auto mx-auto md:mx-0  bg-black"
                      alt="demiproduct"
                    />
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex gap-2">
                        <h5>Concrete Mix 80lb</h5>
                        <li className="text-[#FF5A65] text-[10px] border border-[#FF5A651A] bg-[#FF5A651A] px-1 rounded-sm">
                          High Priority
                        </li>
                      </div>
                      <h5 className="text-[12px] font-regular text-[#8D9092]">
                        WH-PRO-2024
                      </h5>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div>
                          <h4>AudioWorld</h4>
                          <h5 className="font-regular text-[#2A2A2AB0]">
                            Vendor{" "}
                          </h5>
                        </div>
                        <div>
                          <h4 className="text-[#14CA74]">$299.99</h4>
                          <h5 className="font-regular text-[#2A2A2AB0]">
                            Price
                          </h5>
                        </div>
                        <div>
                          <h4>2024-01-15</h4>
                          <h5 className="font-regular text-[#2A2A2AB0]">
                            Submitted
                          </h5>
                        </div>
                      </div>
                      <div className="bg-[#1D4ED80D] rounded-[10px] p-[8px] sm:p-[16px] border-s-[2px] border-[#1D4ED8]">
                        <h5 className="text-[#979797]">
                          “Premium Tile material with no scratch ability & easy
                          to use “
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:p-[24px] bg-[#F4F4F480] border border-[#F4F4F480] rounded-[15px]">
                    <h1 className="text-[18px] font-medium text-[#2A2A2A]">
                      Review Notes
                    </h1>
                    <textarea
                      className="bg-[#FFFFFF] p-[16px] text-[#2A2A2A] font-regular text-[14px] shadow-lg rounded-[15px]"
                      placeholder="1.4 MbInitial submission - all documents provided"
                    ></textarea>
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row justify-start gap-3">
                      <button
                        onClick={() => setIsProductModel(false)}
                        className="bg-[#1D4ED8] text-white shadow-lg flex items-center justify-center rounded-md text-[14px] font-medium py-3 px-5 gap-2 border-[0.63px] border-[#1D4ED8]"
                      >
                        Approve Product <FaCheckCircle />
                      </button>
                      <button
                        onClick={() => setIsProductModel(false)}
                        className="px-5 py-3 text-white text-[14px] rounded-md bg-[#FF5A65]"
                      >
                        Reject Product
                      </button>
                      <button
                        onClick={() => setIsProductModel(false)}
                        className="px-7 py-3 text-[#FF5A65] border-[2px] border-[#FF5A65] text-[14px] rounded-md"
                      >
                        Cancel
                      </button>
                    </div>
                    <button
                      onClick={() => setIsProductModel(false)}
                      className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* userPersonalData */}
            <div className="flex flex-col gap-[20px]">
              {/* profileinfo */}
              <div className="bg-[#F4F4F480] px-[24px] py-[20px] border-[0.6px] border-[#F9FAFC] rounded-[15px]">
                <h4 className="text-[18px] font-medium text-[#2A2A2A]">
                  Profile Information
                </h4>
                <div className="grid sm:grid-cols-3 gap-3 mt-[25px]">
                  {profileInfo.map((items, index) => (
                    <div key={index} className="text-[14px] font-medium">
                      <h4 className="text-[#2A2A2AB0]">{items.title}</h4>
                      <h4 className="text-[#2A2A2A]">{items.value}</h4>
                    </div>
                  ))}
                </div>
              </div>
              {/* Summary */}
              <div className="bg-[#F4F4F480] px-[24px] py-[20px] border-[0.6px] border-[#F9FAFC] rounded-[15px]">
                <h4 className="text-[18px] font-medium text-[#2A2A2A]">
                  Activity Summary
                </h4>
                <div className="grid sm:grid-cols-3 gap-3 mt-[25px]">
                  {summaryInfo.map((items, index) => (
                    <div key={index} className="text-[14px] font-medium">
                      <h4 className="text-[#2A2A2AB0]">{items.title}</h4>
                      <h4 style={{ color: items.color }}>{items.value}</h4>
                    </div>
                  ))}
                </div>
              </div>
              {/* Orders */}
              <div className="bg-[#F4F4F480] px-[12px] sm:px-[24px] py-[20px] border-[0.6px] border-[#F9FAFC] rounded-[15px]">
                <h4 className="text-[18px] font-medium text-[#2A2A2A]">
                  Order Items
                </h4>
                <div className="flex flex-col gap-[15px] pt-[25px]">
                  {/* Order Card */}
                  <div className="bg-[#FFFFFF] rounded-[15px] shadow-lg border border-[#8D90922B] px-[21px] py-[19px]">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                      <div className="flex items-center gap-3">
                        <FaLayerGroup className="text-[24px] text-[#1D4ED8]" />
                        <div className="text-[14px] font-medium">
                          <h5 className="text-[#2A2A2A]">ORD-001</h5>
                          <h4 className="text-[#2A2A2AB0]">Order ID</h4>
                        </div>
                      </div>
                      <div className="flex justify-between gap-3">
                        <div className="text-[14px] font-medium sm:mr-5">
                          <h5 className="text-[#2A2A2A]">03 × $4.50</h5>
                          <h4 className="text-[#2A2A2AB0]">Quantity</h4>
                        </div>
                        <div className="text-[14px] font-medium">
                          <h5 className="text-[#2A2A2A]">$2,250.00</h5>
                          <h4 className="text-[#2A2A2AB0]">Total Amount</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Another Order Card */}
                  <div className="bg-[#FFFFFF] rounded-[15px] shadow-lg border border-[#8D90922B] px-[21px] py-[19px]">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                      <div className="flex items-center gap-3">
                        <FaLayerGroup className="text-[24px] text-[#1D4ED8]" />
                        <div className="text-[14px] font-medium">
                          <h5 className="text-[#2A2A2A]">ORD-002</h5>
                          <h4 className="text-[#2A2A2AB0]">Order ID</h4>
                        </div>
                      </div>
                      <div className="flex justify-between gap-3">
                        <div className="text-[14px] font-medium sm:mr-5">
                          <h5 className="text-[#2A2A2A]">05 × $8.00</h5>
                          <h4 className="text-[#2A2A2AB0]">Quantity</h4>
                        </div>
                        <div className="text-[14px] font-medium">
                          <h5 className="text-[#2A2A2A]">$3,500.00</h5>
                          <h4 className="text-[#2A2A2AB0]">Total Amount</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserManagement;
