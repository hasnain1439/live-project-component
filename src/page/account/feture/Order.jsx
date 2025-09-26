import orderImg from "../../../assets/order-img/Rectangle 8.png";

function Order() {
  const tableData = [
    {
      id: "ORD-001",
      image: orderImg, // replace with actual import if needed
      price: 120,
      qty: 2,
      status: "Active",
      textColor: "text-[#1D4ED8]",
      bgColor: "bg-[#1D4ED81A]",
    },
    {
      id: "ORD-002",
      image: orderImg,
      price: 250,
      qty: 1,
      status: "pending",
      textColor: "text-[#1D4ED8]",
      bgColor: "bg-[#1D4ED81A]",
    },
    {
      id: "ORD-003",
      image: orderImg,
      price: 90,
      qty: 5,
      status: "Received",
      textColor: "text-[#4CD964]",
      bgColor: "bg-[#4CD9641A]",
    },
  ];

  return (
    <table className="table-fixed w-full border-collapse">
      <thead className="border-b border-[#D5D5D5]">
        <tr className="text-[0.875rem] sm:text-[1.125rem] text-[#000000] font-semibold">
          <th className="text-start w-1/2 px-2 sm:px-4 py-3">Order</th>
          <th className="text-start w-1/6 px-2 sm:px-4 py-3">Price</th>
          <th className="text-start w-1/6 px-2 sm:px-4 py-3">Qty</th>
          <th className="text-start w-1/6 px-2 sm:px-4 py-3">Status</th>
        </tr>
      </thead>

      <tbody>
        {tableData.map((items, index) => (
          <tr className="border-b border-[#D5D5D5]" key={index}>
            <td className="px-2 sm:px-4 py-3">
              <div className="flex items-center gap-[0.625rem] sm:gap-[1.1875rem]">
                <img
                  src={items.image}
                  className="w-[6rem] max-w-[4.0625rem] sm:max-w-[8.1875rem] rounded-md object-cover"
                  alt="Order"
                />
                <h5 className="font-medium text-[0.75rem] text-[#2A2A2A]">{items.id}</h5>
              </div>
            </td>
            <td className="px-2 sm:px-4 py-3 text-[#212529] text-[0.875rem] sm:text-[1rem]">{items.price}</td>
            <td className="px-2 sm:px-4 py-3 text-[#212529] text-[0.875rem] sm:text-[1rem]">{items.qty}</td>
            <td className="px-2 sm:px-4 py-3">
              {" "}
              <span className={`${items.bgColor} ${items.textColor} text-[0.625rem] px-1.5 py-1 rounded-[2rem]  hover:cursor-pointer`}>
                {items.status}
              </span>{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Order;
