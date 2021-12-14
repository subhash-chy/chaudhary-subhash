import Layout from "../components/Layout";
import Head from "next/head";
import ReactFlow from "react-flow-renderer";

const elements = [
  {
    id: "interaction-1",
    type: "input",
    data: {
      label: <div className="w-96 h-96 bg-secondaryDark p-8">hello 1</div>,
    },
    position: { x: 250, y: 5 },
  },
  {
    id: "interaction-2",
    data: { label: "Node 2" },
    position: { x: 100, y: 100 },
  },
];

function myProjects() {
  return (
    <>
      <Head>
        <title>My-projects - Subash</title>
      </Head>
      <Layout>
        <div className="mt-12 mx-5">
          <div className="h-[50vh]">
            <ReactFlow
              elements={elements}
              elementsSelectable={false}
              nodesConnectable={true}
              nodesDraggable={false}
              zoomOnScroll={false}
              panOnScroll={true}
              panOnScrollMode={"none"}
              zoomOnDoubleClick={false}
              // onConnect={onConnect}
              // onElementClick={captureElementClick ? onElementClick : undefined}
              // onNodeDragStart={onNodeDragStart}
              // onNodeDragStop={onNodeDragStop}
              paneMoveable={false}
              // onPaneClick={captureZoomClick ? onPaneClick : undefined}
              // onPaneScroll={captureZoomScroll ? onPaneScroll : undefined}
              // onPaneContextMenu={captureZoomClick ? onPaneContextMenu : undefined}
              // onLoad={onLoad}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default myProjects;
