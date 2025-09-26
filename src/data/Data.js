import orderImg from "../assets/order-img/Rectangle 8.png"
export const tableData = [
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