import { RxCross2 } from "react-icons/rx";
import orderImg from "../../../assets/order-img/Rectangle 8.png";

function PurchasedItems() {
  const tableData = [
    {
      product: "Marble Slabs-White",
      image: orderImg, // replace with actual import if needed
      price: "$56.78",
      status: "In Stock",
      action: "Add to Cart",
    },
    {
      product: "Marble Slabs-White",
      image: orderImg,
      price: "$56.78",
      status: "In Stock",
      action: "Add to Cart",
    },
    {
      product: "Marble Slabs-White",
      image: orderImg,
      price: "$56.78",
      status: "In Stock",
      action: "Add to Cart",
    },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse">
        <thead className="border-b border-[#D5D5D5]">
          <tr className="text-[10px] sm:text-[14px] text-[#000000] font-semibold">
            <th className="text-start w-1/2 px-2 sm:px-1 py-3">Product</th>
            <th className="text-start w-1/6 px-2 sm:px-1 py-3">Unit Price</th>
            <th className="text-start w-1/6 px-2 sm:px-1 py-3">Stock Status</th>
            <th className="text-start w-1/6 px-2 sm:px-1 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((items, index) => (
            <tr className="border-b border-[#D5D5D5]" key={index}>
              <td className=" sm:px-4 py-3">
                <div className="flex items-center gap-[0.3125rem] sm:gap-[0.625rem]">
                  <RxCross2 className="text-gray-500 shrink-0 text-[10px] sm:text-[1.125rem]" />
                  <img
                    src={items.image}
                    className="max-w-[45px] sm:max-w-[80px] rounded-md object-cover"
                    alt="Order"
                  />
                  <h5 className="font-medium text-[0.625rem] text-[#2A2A2A]">
                    {items.product}
                  </h5>
                </div>
              </td>
              <td className=" sm:px-4 py-3 text-[#212529] text-[12px] sm:text-[1rem]">
                {items.price}
              </td>
              <td className=" sm:px-4 py-3 text-[#212529] text-[12px] sm:text-[1rem]">
                {items.status}
              </td>
              <td className="min-w-[80px]">
                <button
                  className=" text-[0.625rem] sm:text-[12px] border px-2 py-1 rounded hover:bg-gray-100"
                  type="button"
                >
                  {items.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default PurchasedItems;
