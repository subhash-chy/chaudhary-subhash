import Layout from "../components/Layout";
import Head from "next/head";
import Xarrow from "react-xarrows";
import TimelineItem from "../components/TimelineItem";
const primary = require("../styles/constants");

function myProjects() {
  const color = primary.primary;
  const lines = [
    {
      start: "dot1",
      end: "dot2",
      color: color,
      headSize: 0,
      strokeWidth: 2,
      curveness: 0.8,
      startAnchor: "middle",
      endAnchor: "middle",
      dashness: { animation: 0.4 },
    },
    // {
    //   start: "dot2",
    //   end: "dot3",
    //   color: color,
    //   headSize: 0,

    //   strokeWidth: 2,
    //   curveness: 0,
    //   startAnchor: "middle",
    //   endAnchor: "middle",
    // },
    // {
    //   start: "dot3",
    //   end: "dot4",
    //   color: color,
    //   headSize: 0,

    //   strokeWidth: 2,
    //   curveness: 0,
    //   startAnchor: "middle",
    //   endAnchor: "middle",
    // },
    // {
    //   start: "dot4",
    //   end: "dot5",
    //   color: color,
    //   headSize: 0,

    //   strokeWidth: 2,
    //   curveness: 0,
    //   startAnchor: "middle",
    //   endAnchor: "middle",
    // },
    // {
    //   start: "dot5",
    //   end: "dot6",
    //   color: color,
    //   headSize: 0,

    //   strokeWidth: 2,
    //   curveness: 0,
    //   startAnchor: "middle",
    //   endAnchor: "middle",
    // },
  ];

  return (
    <>
      <Head>
        <title>My-projects - Subash</title>
      </Head>
      <Layout>
        <div className="mt-12 mx-5">
          {/* Creating the line between dots */}
          {lines.map((line, i) => (
            <Xarrow key={i} {...line} />
          ))}

          {/* Odd */}
          {/* <div className="flex items-center md:text-right">
            <div className="max-w-lg flex items-center justify-start  md:flex-row-reverse">
              <div
                id="dot1"
                className="shadow-glow bg-primary  rounded-full w-8 h-8  min-w-[2rem]"
              ></div>
              <div className="flex items-center justify-start my-8 mx-8 flex-wrap md:flex-row-reverse">
                <p className="text-3xl font-bold">01</p>
                <h3 className="text-primary text-3xl font-bold w-full">
                  First step
                </h3>
                <p className="mt-5 font-normal max-w-[90%]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore ea doloremque accusamus numquam minima recusandae
                  earum. Excepturi saepe ut quibusdam.
                </p>
              </div>
            </div>
          </div> */}

          <TimelineItem />

          {/* Even */}
          <div className="flex items-center justify-end mt-10">
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore ea doloremque accusamus numquam minima recusandae
                  earum. Excepturi saepe ut quibusdam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default myProjects;

{
  /* <div className="roadmap-item-wrapper odd md:text-right">
<div className="roadmap-item md:flex-row-reverse">
  <div id="dot3" className="green-dot"></div>
  <div className="content md:flex-row-reverse">
    <p className="item-index">03</p>
    <h3 className="title">Third step</h3>
    <p className="description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Tempore ea doloremque accusamus numquam minima recusandae
      earum. Excepturi saepe ut quibusdam.
    </p>
  </div>
</div>
</div>
<div className="roadmap-item-wrapper even">
<div className="roadmap-item">
  <div id="dot4" className="green-dot"></div>
  <div className="content">
    <p className="item-index">04</p>
    <h3 className="title">Fourth step</h3>
    <p className="description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Tempore ea doloremque accusamus numquam minima recusandae
      earum. Excepturi saepe ut quibusdam.
    </p>
  </div>
</div>
</div>
<div className="roadmap-item-wrapper odd md:text-right">
<div className="roadmap-item md:flex-row-reverse md:justify-end ">
  <div id="dot5" className="green-dot"></div>
  <div className="content md:flex-row-reverse">
    <p className="item-index">05</p>
    <h3 className="title">Fifth step</h3>
    <p className="description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Tempore ea doloremque accusamus numquam minima recusandae
      earum. Excepturi saepe ut quibusdam.
    </p>
  </div>
</div>
</div>
<div className="roadmap-item-wrapper even">
<div className="roadmap-item">
  <div id="dot6" className="green-dot "></div>
  <div className="content">
    <p className="item-index">06</p>
    <h3 className="title">Sixth step</h3>
    <p className="description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Tempore ea doloremque accusamus numquam minima recusandae
      earum. Excepturi saepe ut quibusdam.
    </p>
  </div>
</div>
</div> */
}
