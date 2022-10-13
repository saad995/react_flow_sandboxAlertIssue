import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  ControlButton
} from "react-flow-renderer";

const snapGrid = [20, 20];

const Flow = (props) => {
  const windowHeight = window.innerHeight;

  const divStyle = {
    width: "100%",
    height: windowHeight * 0.9
  };

  const [nodes, setNodes, onNodesChange] = useNodesState(props.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(props.edges);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  const addNode = useCallback(() => {
    setNodes((n) => {
      var newId;
      if (n.length > 0) {
        newId = n[n.length - 1].id + 1;
      } else {
        newId = 1;
      }
      return [
        ...n,
        {
          id: newId,
          type: "default",
          position: { x: 20, y: 10 },
          data: { label: "Enter title..." }
        }
      ];
    });
  }, [setNodes]);

  return (
    <div style={divStyle}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        snapToGrid={true}
        snapGrid={snapGrid}
        defaultZoom={1.5}
        fitView
        attributionPosition="bottom-left"
      >
        <Controls>
          <ControlButton onClick={addNode}></ControlButton>
        </Controls>
      </ReactFlow>
    </div>
  );
};

export default Flow;
