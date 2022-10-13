export async function flowRouteLoader({ params }) {
  const nodesTemp = [
    {
      id: "1",
      type: "input", // input node
      data: { label: "Input Node" },
      position: { x: 100, y: 0 }
    }
  ];
  const edgesTemp = [];
  const flow = { nodes: nodesTemp, edges: edgesTemp };
  return flow;
}
