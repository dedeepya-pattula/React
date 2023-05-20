import React, { useState, useCallback } from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  ConnectionLineType,
} from "react-flow-renderer";
import { nodes as initialNodes, edges as initialEdges } from "./Elements";
import { Button, Modal, Input, Form } from "antd";
import { Edge, Connection } from "react-flow-renderer/dist/esm/types";
import { WidthFull } from "@mui/icons-material";

function ReactFlowRenderer() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const onConnect = useCallback(
    (params: Edge<any> | Connection) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: ConnectionLineType.SmoothStep,
            animated: true,
            style: { stroke: "red" },
          },
          eds
        )
      ),
    [setEdges]
  );
  const getNodeId = () => Math.random();
  function onInit() {
    console.log("Logged");
  }
  // function displayCustomNamedNodeModal() {
  //   setIsModalVisible(true);
  // }
  // function handleCancel() {
  //   setIsModalVisible(false);
  // }
  // function handleOk(data: { nodeName: any; }) {
  //   onAdd(data.nodeName);
  //   setIsModalVisible(false);
  // }
  const onAdd = useCallback(
    (data: any) => {
      const newNode = {
        id: String(getNodeId()),
        data: { label: data },
        position: {
          x: 50,
          y: 0,
        },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes]
  );
  return (
    <div style={{ height: "105vh", margin: "-50px", width: "100vw"}}>
      {/* <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        <Form onFinish={handleOk} autoComplete="off" name="new node">
          <Form.Item label="Node Name" name="nodeName">
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal> */}
      {/* <Button type="primary" onClick={() => displayCustomNamedNodeModal()}>
        Add Custom Name Node
      </Button> */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={onInit}
        fitView
        attributionPosition="bottom-left"
        connectionLineType={ConnectionLineType.SmoothStep}
      />
    </div>
  );
}

export default ReactFlowRenderer;
