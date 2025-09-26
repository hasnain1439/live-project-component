import { Field, Form, Formik } from "formik";
import PageTitle from "../../component/PageTitle";
import { useState } from "react";
import MyProfile from "./feture/MyProfile";
import MyProject from "./feture/MyProject";
import Order from "./feture/Order";
import WishList from "./feture/WishList";
import PurchasedItems from "./feture/PurchasedItems";
import product1 from "../../assets/Product/product-img.png";
import appStore from "../../assets/app/appstore.png";
import playstore from "../../assets/app/playstore.png";

function Account() {
  const [tabChanger, setTabChanger] = useState("profile");
  return (
    <div className="px-[5%]">
      <PageTitle
        pageTitle="Account"
        pageDes="This is the armor to survive the reality of everyday life."
        pagePath="Home / Checkout"
      />
      <div className="grid grid-cols-1 lg:grid-cols-[340px_auto] xl:lg:grid-cols-[23.125rem_auto] items-start gap-8 lg:gap-[2rem] py-[2.75rem]">
        {/* tabs */}
        <div className="border border-[#D5D5D5] p-[2.5625rem]">
          <div className="flex flex-col items-start gap-[0.625rem] text-[0.875rem] text-[#000000">
            <button
              type="button"
              className="pb-[1.125rem] border-b border-[#D5D5D5] w-full text-center lg:text-start"
              onClick={() => setTabChanger("profile")}
            >
              My Profile
            </button>
            <button
              type="button"
              className="pb-[1.125rem] border-b border-[#D5D5D5] w-full text-center lg:text-start"
              onClick={() => setTabChanger("project")}
            >
              My Projects
            </button>
            <button
              type="button"
              className="pb-[1.125rem] border-b border-[#D5D5D5] w-full text-center lg:text-start"
              onClick={() => setTabChanger("order")}
            >
              My Orders
            </button>
            <button
              type="button"
              className="pb-[1.125rem] border-b border-[#D5D5D5] w-full text-center lg:text-start"
              onClick={() => setTabChanger("wishlist")}
            >
              My Wishlist
            </button>
            <button
              type="button"
              className="pb-[1.125rem] border-b border-[#D5D5D5] w-full text-center lg:text-start"
              onClick={() => setTabChanger("purchased")}
            >
              Purchased Items
            </button>
          </div>
        </div>
        <div>
          {tabChanger === "profile" && <MyProfile />}
          {tabChanger === "project" && <MyProject />}
          {tabChanger === "order" && <Order />}
          {tabChanger === "wishlist" && <WishList />}
          {tabChanger === "purchased" && <PurchasedItems />}
        </div>
      </div>
      {/* APP Section */}
      <div className="py-[6.875rem]">
        <div className="p-[5%] bg-[#F7F7F9]">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="">
              <div className="text-center md:max-w-[390px] mx-auto  text-[#2A2A2A] text-regular">
                <h2 className="text-[1.7988rem]">
                  Make your online shop easier with our mobile app
                </h2>
                <p className="text-[13.54px] my-[1.1875rem]">
                  We offer high-quality films and the best documentary
                  selection, and the ability to browse alphabetically and by
                  genre
                </p>
                <div className="flex justify-center items-center gap-[0.75rem]">
                  <div className="max-w-[6.3125rem]">
                    <img src={playstore} className="w-full" alt="playstore" />
                  </div>
                  <div className="max-w-[6.3125rem]">
                    <img src={appStore} className="w-full" alt="appStore" />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[283px] mx-auto">
              <img src={product1} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Account;
