import Layout from "../Layout";

const primaryDark = require("../../styles/constants");
const cardDark = require("../../styles/constants");
const primary = require("../../styles/constants");

function SkeletonLoader() {
  return (
    <Layout>
      <div className=" flex items-center justify-center h-screen animate-pulse">
        <svg
          width="880"
          height="495"
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="skeleton_loader">
            <rect
              id="skeleton_bg"
              width="1920"
              height="1080"
              fill={primaryDark.primaryDark}
            />
            <circle
              id="skeleton_avatar"
              cx="170"
              cy="93"
              r="49"
              fill={cardDark.cardDark}
            />
            <g id="skeleton_text">
              <rect
                id="skeleton_author_name"
                x="242"
                y="70"
                width="475"
                height="47"
                rx="23.5"
                fill={cardDark.cardDark}
              />
              <rect
                id="Rectangle 7"
                x="1314"
                y="70"
                width="475"
                height="47"
                rx="23.5"
                fill={cardDark.cardDark}
              />
              <rect
                id="Rectangle 10"
                x="1314"
                y="505"
                width="475"
                height="47"
                rx="23.5"
                fill={cardDark.cardDark}
              />
              <rect
                id="Rectangle 8"
                x="1314"
                y="194"
                width="475"
                height="47"
                rx="23.5"
                fill={cardDark.cardDark}
              />
              <rect
                id="Rectangle 9"
                x="1314"
                y="279"
                width="249"
                height="47"
                rx="23.5"
                fill={cardDark.cardDark}
              />
              <rect
                id="Rectangle 11"
                x="1314"
                y="590"
                width="197"
                height="47"
                rx="23.5"
                fill={cardDark.cardDark}
              />
              <rect
                id="Rectangle 12"
                x="1314"
                y="675"
                width="401"
                height="47"
                rx="23.5"
                fill={cardDark.cardDark}
              />
              <rect
                id="Rectangle 13"
                x="1314"
                y="760"
                width="335"
                height="47"
                rx="23.5"
                fill={cardDark.cardDark}
              />
              <rect
                id="skeleton_post_title"
                x="121"
                y="241"
                width="955"
                height="47"
                rx="23.5"
                fill={cardDark.cardDark}
              />
              <rect
                id="Rectangle 3"
                x="775"
                y="70"
                width="301"
                height="47"
                rx="23.5"
                fill={cardDark.cardDark}
              />
              <rect
                id="Rectangle 5"
                x="121"
                y="326"
                width="301"
                height="47"
                rx="23.5"
                fill={cardDark.cardDark}
              />
              <rect
                id="Rectangle 6"
                x="121"
                y="447"
                width="955"
                height="578"
                fill={cardDark.cardDark}
              />
            </g>
            <g id="skeleton_img">
              <path
                id="Vector"
                d="M456 650.2C456 635.03 462.026 620.481 472.753 609.753C483.481 599.026 498.03 593 513.2 593H684.8C699.97 593 714.519 599.026 725.247 609.753C735.974 620.481 742 635.03 742 650.2V821.8C742 836.97 735.974 851.519 725.247 862.247C714.519 872.974 699.97 879 684.8 879H513.2C498.03 879 483.481 872.974 472.753 862.247C462.026 851.519 456 836.97 456 821.8V650.2Z"
                stroke={primary.primary}
                strokeOpacity="0.1"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M548.95 721.7C568.694 721.7 584.7 705.694 584.7 685.95C584.7 666.206 568.694 650.2 548.95 650.2C529.206 650.2 513.2 666.206 513.2 685.95C513.2 705.694 529.206 721.7 548.95 721.7Z"
                stroke={primary.primary}
                strokeOpacity="0.1"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_3"
                d="M635.122 744.88L513.2 879H686.702C701.368 879 715.433 873.174 725.804 862.803C736.174 852.433 742 838.368 742 823.702V821.8C742 815.136 739.498 812.576 734.993 807.643L677.364 744.794C674.678 741.865 671.411 739.527 667.771 737.93C664.131 736.333 660.199 735.513 656.224 735.521C652.249 735.529 648.32 736.365 644.687 737.977C641.053 739.588 637.796 741.939 635.122 744.88V744.88Z"
                stroke={primary.primary}
                strokeOpacity="0.1"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
    </Layout>
  );
}

export default SkeletonLoader;
