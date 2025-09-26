import { tableData } from "../../../data/Data";
import orderImg from "../../../assets/order-img/Rectangle 8.png";
function WishList() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-[1.25rem] sm:gap-[0px]">
      <div className="flex flex-col gap-[1rem]">
        {tableData.map((items, index) => (
          <div
            className="px-[1.875rem] py-[0.1875rem] flex items-center gap-[11px]"
            key={index}
          >
            <img
              src={orderImg}
              className="max-w-[4.0625rem] sm:max-w-[8.1875rem] "
              alt="order-img"
            />
            <div className="flex flex-col gap-1">
              <h5 className="text-[#2A2A2A] text-[0.875rem] font-medium">
                Order #ORD-001
              </h5>
              <h6 className="text-[1rem] text-[#6E6E6E] font-regular">
                Quantity: 02
              </h6>
              <h6 className="text-[#212529] font-medium text-[1rem]">$56.78</h6>
            </div>
          </div>
        ))}
      </div>
      <div className="flex sm:flex-col flex-wrap sm:flex-nowrap mx-auto max-w-[100%] sm:max-w-[21.25rem] gap-[1.1875rem]">
        <div className="p-[1.875rem] bg-[#F7F7F9] w-full font-regular">
          <h2 className="text-[1.125rem] text-[#000000] border-b border-[#D5D5D5] pb-[14px]">
            Shopping Information
          </h2>
          <div className="text-[1rem] text-[#6E6E6E] font-regular">
            <div className="flex justify-between items-center py-[0.625rem]">
              <h5>Carrier</h5>
              <h5>FedEx</h5>
            </div>
            <div className="flex justify-between items-center py-[0.625rem]">
              <h5>Shipping Method</h5>
              <h5>Standard</h5>
            </div>
            <div className="flex justify-between items-center py-[0.625rem]">
              <h5>Tracking Number</h5>
              <h5>11234***</h5>
            </div>
            <div className="flex justify-between items-center py-[0.625rem]">
              <h5>Estimated Delivery</h5>
              <h5>20-09-2025</h5>
            </div>
            <div className="flex justify-between items-center py-[0.625rem]">
              <h5>Weight</h5>
              <h5> 2.1 lbs</h5>
            </div>
            <div className="flex justify-between items-center py-[0.625rem]">
              <h5>Dimension</h5>
              <h5>12” x 12”</h5>
            </div>
          </div>
        </div>
        <div className="p-[1.875rem] bg-[#F7F7F9] w-full font-regular">
          <h2 className="text-[1.125rem] text-[#000000] border-b border-[#D5D5D5] pb-[14px]">
            Order Summary
          </h2>
          <div className="text-[1rem] text-[#6E6E6E] font-regular">
            <div className="flex justify-between items-center py-[0.625rem]">
              <h5>Sub- Total</h5>
              <h5>$ 40.00</h5>
            </div>
            <div className="flex justify-between items-center py-[0.625rem]">
              <h5>Shipping/ Freight</h5>
              <h5>$ 40.00</h5>
            </div>
            <div className="flex justify-between items-center py-[0.625rem]">
              <h5>Discount</h5>
              <h5>11234***</h5>
            </div>
            <div className="flex justify-between items-center py-[0.625rem]">
              <h5>Estimated Delivery</h5>
              <h5>-$ 40.00</h5>
            </div>
            <div className="flex justify-between items-center py-[1.5625rem] border-t border-#D5D5D5]">
              <h5>Total</h5>
              <h5>$56.78</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WishList;
