import { FaPencilAlt } from "react-icons/fa";
import scale from "../../../assets/order-icon/scale.svg";
import clock from "../../../assets/order-icon/clock.svg";
import location from "../../../assets/order-icon/lcoation.svg";
import camera from "../../../assets/order-icon/camera.svg";

function MyProject() {
  const projectData = [
    {
      title: "Kitchen Renovation",
      dimensions: "12' x 10' x 9'",
      area: "120 sq ft",
      date: "8/16/2025",
      quality: "High Quality",
      materials: ["Mosaic Tile Premium Collection", "Natural Stone Backsplash"],
      status: "Ready to Share",
      buttons: {
        primary: "View 3D Scan",
        secondary: "Share with Contractor",
      },
    },
    {
      title: "Kitchen Renovation",
      dimensions: "12' x 10' x 9'",
      area: "120 sq ft",
      date: "8/16/2025",
      quality: "High Quality",
      materials: ["Mosaic Tile Premium Collection", "Natural Stone Backsplash"],
      status: "Ready to Share",
      buttons: {
        primary: "View 3D Scan",
        secondary: "Find a Contractor",
      },
    },
    {
      title: "Kitchen Renovation",
      dimensions: "12' x 10' x 9'",
      area: "120 sq ft",
      date: "8/16/2025",
      quality: "High Quality",
      materials: ["Mosaic Tile Premium Collection", "Natural Stone Backsplash"],
      status: "Ready to Share",
      buttons: {
        primary: "View 3D Scan",
        secondary: "Shared",
      },
    },
    {
      title: "Kitchen Renovation",
      dimensions: "12' x 10' x 9'",
      area: "120 sq ft",
      date: "8/16/2025",
      quality: "High Quality",
      materials: ["Mosaic Tile Premium Collection", "Natural Stone Backsplash"],
      status: "Ready to Share",
      buttons: {
        primary: "View 3D Scan",
        secondary: "Share with Contractor",
      },
    },
  ];

  return (
    <div>
      <div className="flex gap-[0.5rem] text-[1rem] font-semibold pb-[2.6875rem]">
        <button
          type="button"
          className="px-[1.25rem] sm:px-[3.75rem] py-[0.8125rem] bg-[#1D4ED8] text-[#FFFFFF]"
        >
          Projects
        </button>
        <button
          type="button"
          className="px-[1.25rem] sm:px-[3.75rem] py-[0.8125rem] border border-[#D5D5D5]"
        >
          Material Library
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-[1.75rem]">
        {projectData.map((items, index) => (
          <div key={index} className="p-[1.8125rem] bg-[#F7F7F9] flex flex-col gap-[1.25rem]">
            {/* project title */}
            <div className="flex justify-between items-center font-regular">
              <h3 className="text-[0.75rem] sm:text-[1.125rem] text-[#2A2A2A]">
                {items.title}
              </h3>
              <button
                type="button"
                className="text-[0.875rem] text-[#FFFFFF] bg-[#1D4ED8] px-[0.625rem]  sm:px-[0.875rem] py-[0.3125rem] rounded-[0.1875rem]"
              >
                Ready to Share
              </button>
            </div>
            {/* values */}
            <div className="flex items-center flex-wrap gap-2 font-medium ">
              <div className="basis-[48%] flex items-center gap-[0.4375rem]">
                <div>
                  <img src={scale} width={12} height={12} alt="" />
                </div>
                <h1>{items.dimensions}</h1>
              </div>
              <div className="basis-[48%] flex items-center gap-[0.4375rem]">
                <div>
                  <img src={clock} width={12} height={12} alt="" />
                </div>
                <h1>{items.date}</h1>
              </div>
              <div className="basis-[48%] flex items-center gap-[0.4375rem]">
                <div>
                  <img src={location} width={12} height={12} alt="" />
                </div>
                <h1>{items.area}</h1>
              </div>
              <div className="basis-[48%] flex items-center gap-[0.4375rem]">
                <div>
                  <img src={camera} width={12} height={12} alt="" />
                </div>
                <h1>{items.quality} </h1>
              </div>
            </div>
            {/* Selected Materials: */}
            <div className="flex justify-between items-center font-regular">
              <h4 className="text-[#2A2A2A] text-[1.125rem]">
                Selected Materials:
              </h4>
              <h6 className="text-[#6E6E6E] text-[0.875rem]">2 times</h6>
            </div>
            <div className="flex flex-col items-start gap-[0.375rem] font-semibold text-[0.625rem] text-[#2A2A2A75]">
              <span className="bg-[#1D4ED80D] rounded-[2.8125rem] px-[0.625rem] py-[0.25rem]">
               {items.materials[0]}
              </span>
              <span className="bg-[#1D4ED80D] rounded-[2.8125rem] px-[0.625rem] py-[0.25rem]">
                {items.materials[1]}
              </span>
            </div>
            {/* button */}
            <div className="flex items-center gap-[0.3438rem] text-[0.6875rem] sm:text-[0.875rem]">
              <button
                typeof="button"
                className="px-[0.625rem] sm:px-[1rem] bg-[#1D4ED8] py-[0.8125rem] text-[#FFFFFF]"
              >
               {items.buttons.primary}
              </button>
              <button
                typeof="button"
                className="px-[0.625rem] sm:px-[1rem] border py-[0.8125rem]"
              >
                {items.buttons.secondary}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MyProject;
