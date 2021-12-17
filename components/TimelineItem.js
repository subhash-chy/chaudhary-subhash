function TimelineItem() {
  return (
    <>
      {/* Odd */}
      {/* chng*/}
      <div className="flex items-center md:text-right">
        {/* chng */}
        <div className="max-w-lg flex items-center justify-start  md:flex-row-reverse">
          <div
            // chng
            id="dot1"
            className="shadow-glow bg-primary  rounded-full w-8 h-8  min-w-[2rem]"
          ></div>
          {/* chng */}
          <div className="flex items-center justify-start my-8 mx-8 flex-wrap md:flex-row-reverse">
            <p className="text-3xl font-bold">01</p>
            <h3 className="text-primary text-3xl font-bold w-full">
              First step
            </h3>
            <p className="mt-5 font-normal max-w-[90%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              ea doloremque accusamus numquam minima recusandae earum. Excepturi
              saepe ut quibusdam.
            </p>
          </div>
        </div>
      </div>

      {/* Even */}
      {/* <div className="flex items-center justify-end mt-10">
        <div className="max-w-lg flex items-center justify-start">
          <div
            id="dot2"
            className="green-dot shadow-glow bg-primary  rounded-full w-8 h-8  min-w-[2rem]"
          ></div>
          <div className="flex items-center justify-start my-8 mx-8 flex-wrap">
            <p className="text-3xl font-bold">02</p>
            <h3 className="text-primary text-3xl font-bold w-full">
              Second step
            </h3>
            <p className="mt-5 font-normal max-w-[90%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              ea doloremque accusamus numquam minima recusandae earum. Excepturi
              saepe ut quibusdam.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default TimelineItem;
