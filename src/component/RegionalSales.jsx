    import React from "react";
    import firstImg from "../assets/analysis/analysis1st.png"
    import secImg from "../assets/analysis/analysis2nd.png"
    import thirdImg from "../assets/analysis/analysis3rd.png"
    import lastImg from "../assets/analysis/analysis4th.png"
function RegionalSales() {
  return (
    <div className="grid md:grid-cols-[17.8125rem_auto] gap-[1rem] bg-red-900">
      <div className="bg-black "></div>
      <div className="p-[1.25rem] bg-[#FFFFFF] rounded-[1.25rem] ">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
          <div>
            <h3 className="text-[1rem] text-[#2A2A2A] font-medium">
              Regional Sales
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-[1.5rem] mt-[1.875rem] text-[0.6875rem] text-[#8D9092] font-regular">
              <div className="flex items-center gap-2 mx-auto">
                <div className="p-1.5 rounded-full hover:cursor-pointer bg-[linear-gradient(180deg,#0DB4F3_0%,#737BFC_100%)]"></div>
                <h4>North America</h4>
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <div className="p-1.5 rounded-full hover:cursor-pointer bg-[linear-gradient(223.57deg,#4627EF_0%,#7679FC_100.48%)]"></div>
                <h4>Europe</h4>
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <div className="p-1.5 rounded-full hover:cursor-pointer bg-[linear-gradient(180deg,#02F1E2_0%,#0DB4F3_100%)]"></div>
                <h4>Asia Pacific</h4>
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <div className="p-1.5 rounded-full hover:cursor-pointer bg-[linear-gradient(180deg,#02F1E2_0%,#737BFC_100%)]"></div>
                <h4>Latin America</h4>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-between gap-[1.1875rem] text-[#14CA74] text-[0.875rem] font-regular">
            <div className="relative max-w-[6.6791rem] mx-auto max-h-[6.6791rem]">
                <img src={firstImg} className="w-full" alt="" />
                <div className="absolute top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h4>$52,340</h4>
                </div>
            </div>
            <div className="relative max-w-[6.6791rem] mx-auto max-h-[6.6791rem]">
                <img src={secImg} className="w-full" alt="" />
                <div className="absolute top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h4>$52,340</h4>
                </div>
            </div>
            <div className="relative max-w-[6.6791rem] mx-auto max-h-[6.6791rem]">
                <img src={thirdImg} className="w-full" alt="" />
                <div className="absolute top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h4>$52,340</h4>
                </div>
            </div>
            <div className="relative max-w-[6.6791rem] mx-auto max-h-[6.6791rem]">
                <img src={lastImg} className="w-full" alt="" />
                <div className="absolute top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h4>$52,340</h4>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegionalSales;
