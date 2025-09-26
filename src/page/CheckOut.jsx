import { Field, Form, Formik } from "formik";
import { FaAngleDown } from "react-icons/fa";
import product1 from "../assets/Product/product-img.png";
import appStore from "../assets/app/appstore.png";
import playstore from "../assets/app/playstore.png";
import PageTitle from "../component/PageTitle";

function CheckOut() {
  return (
    <div className="px-[5%]">
      <PageTitle
        pageTitle="Checkout"
        pageDes="This is the armor to survive the reality of everyday life."
        pagePath="Home / Checkout"
      />

      <Formik initialValues={{}} validationSchema={{}} onSubmit={{}}>
        <Form className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_21.25rem] gap-8 lg:gap-[3.75rem]">
            {/* Billing Address Section */}
            <div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center font-regular text-[#000000] gap-2">
                <h3 className="text-lg sm:text-xl lg:text-[1.5rem]">
                  Billing Address
                </h3>
                <div className="flex text-sm sm:text-base lg:text-[18px] gap-1">
                  <span>Already have an account?</span>
                  <a href="#" className="text-[#1D4ED8]">
                    Login
                  </a>
                </div>
              </div>

              {/* Fields */}
              <div className="flex flex-col gap-6 mt-8">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-[#181C32] font-semibold"
                  >
                    Enter Name
                  </label>
                  <Field
                    name="name"
                    placeholder="Enter Name"
                    className="px-4 py-2 text-sm sm:text-base border border-[#D4D4D4] outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[#181C32] font-semibold"
                  >
                    Email Address
                  </label>
                  <Field
                    name="email"
                    placeholder="Email Address"
                    className="px-4 py-2 text-sm sm:text-base border border-[#D4D4D4] outline-none"
                  />
                </div>

                {/* State & City */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex flex-col gap-2 flex-1">
                    <label
                      htmlFor="state"
                      className="text-[#181C32] font-semibold"
                    >
                      State
                    </label>
                    <Field
                      name="state"
                      placeholder="State"
                      className="px-4 py-2 text-sm sm:text-base border border-[#D4D4D4] outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label
                      htmlFor="city"
                      className="text-[#181C32] font-semibold"
                    >
                      Town/City
                    </label>
                    <Field
                      name="city"
                      placeholder="Town/City"
                      className="px-4 py-2 text-sm sm:text-base border border-[#D4D4D4] outline-none"
                    />
                  </div>
                </div>

                {/* Phone & Zip */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex flex-col gap-2 flex-1">
                    <label
                      htmlFor="phone"
                      className="text-[#181C32] font-semibold"
                    >
                      Phone Number
                    </label>
                    <Field
                      name="phone"
                      placeholder="Phone Number"
                      className="px-4 py-2 text-sm sm:text-base border border-[#D4D4D4] outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label
                      htmlFor="zip"
                      className="text-[#181C32] font-semibold"
                    >
                      Zip Code
                    </label>
                    <Field
                      name="zip"
                      placeholder="Zip Code"
                      className="px-4 py-2 text-sm sm:text-base border border-[#D4D4D4] outline-none"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="company"
                    className="text-[#181C32] font-semibold"
                  >
                    Company Name (Optional)
                  </label>
                  <Field
                    name="company"
                    placeholder="Company Name"
                    className="px-4 py-2 text-sm sm:text-base border border-[#D4D4D4] outline-none"
                  />
                </div>

                {/* Address */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="address"
                    className="text-[#181C32] font-semibold"
                  >
                    Street Address
                  </label>
                  <Field
                    name="address"
                    placeholder="Street Address"
                    className="px-4 py-2 text-sm sm:text-base border border-[#D4D4D4] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Review Summary Section */}
            <div className="bg-[#F7F7F9] p-5 lg:p-[1.875rem] font-regular">
              <h2 className="text-[#000000] text-base sm:text-lg lg:text-[1.125rem] py-4 border-b border-[#D5D5D5]">
                Review Summary
              </h2>

              {/* Order Detail */}
              <div className="flex flex-col py-6 gap-3 text-[#6E6E6E] text-sm sm:text-base font-regular">
                <div className="flex justify-between">
                  <span>Services</span>
                  <span>House Cleaning</span>
                </div>
                <div className="flex justify-between">
                  <span>Category</span>
                  <span>Cleaning</span>
                </div>
                <div className="flex justify-between">
                  <span>Time</span>
                  <span>10:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Date</span>
                  <span>Dec 23, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Working Hours</span>
                  <span>2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>House Cleaning</span>
                  <span>$125.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Promo</span>
                  <span>$125.00</span>
                </div>
                <div className="flex justify-between border-t border-b border-[#D5D5D5] py-4 font-semibold text-black">
                  <span>Total</span>
                  <span>$56.78</span>
                </div>
              </div>

              {/* Payment Method */}
              <div className="flex flex-col gap-3 py-4 text-sm sm:text-base font-medium">
                <div className="flex gap-2">
                  <Field
                    type="radio"
                    id="bank-transfer"
                    name="paymentMethod"
                    value="bank-transfer"
                  />
                  <label htmlFor="bank-transfer">Direct Bank Transfer</label>
                </div>
                <div className="flex gap-2">
                  <Field
                    type="radio"
                    id="paypal"
                    name="paymentMethod"
                    value="paypal"
                  />
                  <label htmlFor="paypal">Paypal</label>
                </div>
                <div className="flex gap-2">
                  <Field
                    type="radio"
                    id="payoneer"
                    name="paymentMethod"
                    value="payoneer"
                  />
                  <label htmlFor="payoneer">Payoneer</label>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-[#1D4ED8] w-full py-3 mt-6 text-white text-sm sm:text-base"
              >
                Place Order
              </button>
            </div>
          </div>
        </Form>
      </Formik>
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

export default CheckOut;
