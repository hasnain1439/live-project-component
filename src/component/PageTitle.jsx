function PageTitle({ pageTitle, pageDes, pagePath }) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center font-regular border-b border-black py-6 lg:py-[2.625rem] gap-4">
      <div>
        <h3 className="text-[1.5rem] sm:text-[1.75rem] lg:text-[2.125rem] text-[#181C32]">
          {pageTitle}
        </h3>
        <h4 className="text-sm sm:text-base lg:text-[1rem] text-[#6E6E6E]">
          {pageDes}
        </h4>
      </div>
      <div className="text-sm sm:text-base lg:text-[1rem]  text-[#6E6E6E] font-regular">
        <h6>{pagePath}</h6>
      </div>
    </div>
  );
}

export default PageTitle;
