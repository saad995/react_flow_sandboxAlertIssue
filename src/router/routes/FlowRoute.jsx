import React from "react";
import Flow from "../../components/Flow";
import { useLoaderData } from "react-router-dom";

const FlowRoute = () => {
  const flow = useLoaderData();

  return (
    <div>
      <Flow nodes={flow.nodes} edges={flow.edges} />
    </div>
  );
};

export default FlowRoute;
