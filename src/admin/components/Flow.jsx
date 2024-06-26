import { useCallback } from 'react';
import './Flow.css';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';

const Flow = (props) => {
    const [nodes, setNodes, onNodesChange] = useNodesState(props.initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(props.initialEdges);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
    const proOptions = { hideAttribution: true };

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            proOptions={proOptions}
        >
            <MiniMap />
            <Controls />
            <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
    );
}
function zoomOut() {
    setTimeout(function () {
        document.getElementsByTagName("button")[6].click();
        document.getElementsByTagName("button")[6].click();
    }, 50);
}
zoomOut();
export default Flow;