import { Field, Form, Formik } from "formik";

function MyProfile() {
  return (
    <Formik initialValues={{}} validationSchema={{}} onSubmit={{}}>
      <Form>
        <div className="flex flex-col gap-[1rem]">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[#181C32] font-semibold">
              Enter Name
            </label>
            <Field
              type="text"
              name="name"
              placeholder="Enter Name"
              className="px-4 py-2 text-sm sm:text-base border border-[#D4D4D4] outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[#181C32] font-semibold">
              Email Address
            </label>
            <Field
              type="email"
              name="email"
              placeholder="Enter Email Address "
              className="px-4 py-2 text-sm sm:text-base border border-[#D4D4D4] outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="mobile-number"
              className="text-[#181C32] font-semibold"
            >
              Mobile Number
            </label>
            <Field
              type="mobile-number"
              name="mobile-number"
              placeholder="Mobile Number "
              className="px-4 py-2 text-sm sm:text-base border border-[#D4D4D4] outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="birthday" className="text-[#181C32] font-semibold">
              Birthday
            </label>
            <Field
              type="birthday"
              name="birthday"
              placeholder="Birthday "
              className="px-4 py-2 text-sm sm:text-base border border-[#D4D4D4] outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="gender" className="text-[#181C32] font-semibold">
              Gender
            </label>
            <Field
              type="gender"
              name="gender"
              placeholder="Gender "
              className="px-4 py-2 text-sm sm:text-base border border-[#D4D4D4] outline-none"
            />
          </div>
          <div className="flex justify-end gap-[1.1875rem] text-[#FFFFFF] text-[0.75rem] sm:text-[1rem] font-regular">
            <button
              type="button"
              className="px-[1.25rem] sm:px-[4.625rem] py-[1rem] bg-[#1D4ED8] "
            >
              Change Password
            </button>
            <button
              type="button"
              className="px-[1.25rem] sm:px-[4.625rem] py-[1rem] bg-[#1D4ED8] "
            >
              Edit Profile
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
export default MyProfile;
