import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiMapPinAreaDuotone } from "react-icons/pi";

function WareHouse() {
  const warehouses = [
    {
      name: "Main Warehouse _MW-NY",
      location: "Dallas, TX",
      status: "Active",
      manager: "John Smith",
      products: 1250,
      lowStock: 23,
      capacity: "45%",
    },
    {
      name: "Houston Warehouse",
      location: "Houston, TX",
      status: "Active",
      manager: "John Smith",
      products: 150,
      lowStock: 3,
      capacity: "65%",
    },
    {
      name: "Dallas Warehouse",
      location: "Dallas, TX",
      status: "Maintenance",
      manager: "John Smith",
      products: 1260,
      lowStock: 23,
      capacity: "85%",
    },
    {
      name: "Houston Warehouse",
      location: "Houston, TX",
      status: "Active",
      manager: "John Smith",
      products: 150,
      lowStock: 3,
      capacity: "65%",
    },
  ];

  return (
    <div className="p-[2%] sm:p-[5%] flex flex-col gap-[20px]">
      {warehouses.map((item, index) => (
        <div
          key={index}
          className="bg-[#F4F4F480] px-[24px] py-[19px] border border-[#F9FAFC] rounded-[15px] text-[#2A2A2A] font-medium flex flex-col items-between"
        >
          {/* mainTitle */}
          <div className="flex flex-col sm:flex-row justify-between items-start mb-[25px]">
            {/* leftSide */}
            <div>
              <h4 className="text-[18px] mb-[7px]">{item.name}</h4>
              <p className="text-[#8D9092] text-[12px] font-regular flex items-center gap-2">
                <PiMapPinAreaDuotone className="text-[18px] hover:cursor-pointer" />
                {item.location}
              </p>
            </div>
            {/* rightSide */}
            <div className="flex sm:items-start self-end sm:self-start">
              <li className="bg-[#05C16833] border border-[#05C16833] text-[#14CA74] text-[10px] font-medium rounded-sm px-4 py-1 hover:cursor-pointer">
                {item.status}
              </li>
              <BsThreeDotsVertical className="text-[22px] hover:cursor-pointer" />
            </div>
          </div>
          {/* Detail */}
          <div className="grid gap-3 grid-cols-3 md:grid-cols-4 items-center mt-[25px] text-[14px] font-medium">
            {/* Manager */}
            <div className="col-span-auto md:col-span-1">
              <h5 className="text-[#2A2A2AB0]">Manager</h5>
              <h5 className="text-[#2A2A2A]">{item.manager}</h5>
            </div>

            {/* Products */}
            <div className="col-span-auto md:col-span-1">
              <h5 className="text-[#2A2A2AB0]">Products</h5>
              <h5 className="text-[#2A2A2A]">{item.products}</h5>
            </div>

            {/* Low Stock */}
            <div className="col-span-auto md:col-span-1">
              <h5 className="text-[#2A2A2AB0]">Low Stock</h5>
              <h5 className="text-red-500 font-semibold">{item.lowStock}</h5>
            </div>

            {/* Capacity */}
            <div className="col-span-4 md:col-span-1">
              <div className="flex justify-between items-center mb-1">
                <h5 className="text-[#2A2A2AB0]">Capacity</h5>
                <h5 className="text-[#2A2A2A]">{item.capacity}</h5>
              </div>
              <div className="w-full bg-[#E5E5E5] rounded-[20px] h-3">
                <div
                  className="bg-[#1D4ED8] h-3 rounded-[20px]"
                  style={{ width: item.capacity }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WareHouse;
