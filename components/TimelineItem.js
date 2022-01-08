function TimelineItem({ title, description, index }) {
  return (
    <>
      <div
        className={`flex items-center mt-12 ${
          index % 2 ? "justify-end" : "md:text-right"
        }`}
      >
        <div
          className={`max-w-lg flex items-center justify-start  ${
            index % 2 ? "" : "md:flex-row-reverse"
          }`}
        >
          <div
            id={`${index + 1}`}
            className="shadow-glow  bg-primary  rounded-full w-8 h-8  min-w-[2rem]"
          ></div>
          <div
            className={`flex items-center justify-start my-8 ml-8 md:mr-8 flex-wrap ${
              index % 2 ? "" : "md:flex-row-reverse"
            }`}
          >
            <p className="text-3xl font-bold">
              {index + 1 >= 10 ? null : 0}
              {index + 1}
            </p>
            <h3 className="text-primary text-3xl font-bold w-full">{title}</h3>
            <p className="mt-5 max-w-full md:max-w-[90%]">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimelineItem;
