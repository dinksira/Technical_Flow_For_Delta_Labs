import { useState } from "react";
import { Info, Code2, Database, Server, Globe } from "lucide-react";

interface FlowNode {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  color: string;
  icon?: string;
  description?: string;
  tech?: string; // Technology/framework used
}

interface FlowArrow {
  from: { x: number; y: number };
  to: { x: number; y: number };
  label: string;
  color: string;
  dashed?: boolean;
}

export function FlowDiagram() {
  const [activeFlow, setActiveFlow] = useState<number | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Color scheme
  const colors = {
    user: "#10b981", // green
    ai: "#a855f7", // purple
    backend: "#3b82f6", // blue
    database: "#f97316", // orange
    frontend: "#14b8a6", // teal
  };

  // Define nodes for Flow 1: AI Routing (Page Navigation)
  const flow1Nodes: FlowNode[] = [
    {
      id: "user-chat",
      x: 50,
      y: 100,
      width: 140,
      height: 70,
      label: "User Chat Input",
      color: colors.user,
      icon: "💬",
      description: "User types navigation command",
      tech: "Browser",
    },
    {
      id: "ai-assistant-1",
      x: 250,
      y: 100,
      width: 140,
      height: 70,
      label: "AI Assistant",
      color: colors.ai,
      icon: "🤖",
      description: "Processes natural language",
      tech: "OpenAI API / LangChain",
    },
    {
      id: "backend-parse",
      x: 450,
      y: 100,
      width: 140,
      height: 70,
      label: "Backend Parser",
      color: colors.backend,
      icon: "⚙️",
      description: "System prompt → detectPage",
      tech: "Node.js + Express",
    },
    {
      id: "json-intent",
      x: 650,
      y: 100,
      width: 140,
      height: 70,
      label: "JSON Navigation",
      color: colors.backend,
      icon: "📄",
      description: "{ action: 'navigate', page: '...' }",
      tech: "REST API",
    },
    {
      id: "ai-navigate-event",
      x: 850,
      y: 100,
      width: 140,
      height: 70,
      label: "aiNavigate Event",
      color: colors.frontend,
      icon: "📡",
      description: "Event dispatched to frontend",
      tech: "Custom Events API",
    },
    {
      id: "router",
      x: 1050,
      y: 100,
      width: 140,
      height: 70,
      label: "Frontend Router",
      color: colors.frontend,
      icon: "🧭",
      description: "App.tsx listens & routes",
      tech: "React Router",
    },
    {
      id: "page-render",
      x: 1250,
      y: 100,
      width: 140,
      height: 70,
      label: "Page Render",
      color: colors.frontend,
      icon: "🖥️",
      description: "LandingPage, MySchool, etc.",
      tech: "React Components",
    },
  ];

  const flow1Arrows: FlowArrow[] = [
    {
      from: { x: 190, y: 135 },
      to: { x: 250, y: 135 },
      label: '"Go to offers"',
      color: colors.user,
    },
    {
      from: { x: 390, y: 135 },
      to: { x: 450, y: 135 },
      label: "Parse command",
      color: colors.ai,
    },
    {
      from: { x: 590, y: 135 },
      to: { x: 650, y: 135 },
      label: "detectPage()",
      color: colors.backend,
    },
    {
      from: { x: 790, y: 135 },
      to: { x: 850, y: 135 },
      label: "JSON response",
      color: colors.backend,
    },
    {
      from: { x: 990, y: 135 },
      to: { x: 1050, y: 135 },
      label: "dispatch()",
      color: colors.frontend,
    },
    {
      from: { x: 1190, y: 135 },
      to: { x: 1250, y: 135 },
      label: "setPage()",
      color: colors.frontend,
    },
  ];

  // Define nodes for Flow 2: Conditional Rendering
  const flow2Nodes: FlowNode[] = [
    {
      id: "user-ui-cmd",
      x: 50,
      y: 300,
      width: 140,
      height: 70,
      label: "User UI Command",
      color: colors.user,
      icon: "💬",
      description: '"Show bot chat"',
      tech: "Browser",
    },
    {
      id: "ai-assistant-2",
      x: 250,
      y: 300,
      width: 140,
      height: 70,
      label: "AI Assistant",
      color: colors.ai,
      icon: "🤖",
      description: "Parse component command",
      tech: "OpenAI API",
    },
    {
      id: "update-ui-json",
      x: 450,
      y: 300,
      width: 140,
      height: 70,
      label: "update_ui JSON",
      color: colors.backend,
      icon: "📄",
      description: "{ component: 'BotChat', visible: true }",
      tech: "Node.js",
    },
    {
      id: "ai-update-ui-event",
      x: 650,
      y: 300,
      width: 140,
      height: 70,
      label: "aiUpdateUI Event",
      color: colors.frontend,
      icon: "📡",
      description: "Event dispatched",
      tech: "EventEmitter",
    },
    {
      id: "ui-state",
      x: 850,
      y: 300,
      width: 140,
      height: 70,
      label: "UI State Store",
      color: colors.frontend,
      icon: "🗄️",
      description: "UIProvider / useState",
      tech: "React Context + Hooks",
    },
    {
      id: "conditional-render",
      x: 1050,
      y: 300,
      width: 140,
      height: 70,
      label: "Conditional Logic",
      color: colors.frontend,
      icon: "🔀",
      description: "{visible && <Component />}",
      tech: "React JSX",
    },
    {
      id: "components",
      x: 1050,
      y: 410,
      width: 340,
      height: 140,
      label: "Components",
      color: colors.frontend,
      icon: "🧩",
      description: "BotChat, VideoFeed, AudioFeed, Calculator, TopBar, Sidebars, SearchBar",
      tech: "React Functional Components",
    },
  ];

  const flow2Arrows: FlowArrow[] = [
    {
      from: { x: 190, y: 335 },
      to: { x: 250, y: 335 },
      label: '"Hide sidebar"',
      color: colors.user,
    },
    {
      from: { x: 390, y: 335 },
      to: { x: 450, y: 335 },
      label: "Interpret UI intent",
      color: colors.ai,
    },
    {
      from: { x: 590, y: 335 },
      to: { x: 650, y: 335 },
      label: "Generate JSON",
      color: colors.backend,
    },
    {
      from: { x: 790, y: 335 },
      to: { x: 850, y: 335 },
      label: "dispatch()",
      color: colors.frontend,
    },
    {
      from: { x: 990, y: 335 },
      to: { x: 1050, y: 335 },
      label: "setState()",
      color: colors.frontend,
    },
    {
      from: { x: 1120, y: 370 },
      to: { x: 1120, y: 410 },
      label: "Render/Hide",
      color: colors.frontend,
    },
  ];

  // Define nodes for Flow 3: Data Fetching
  const flow3Nodes: FlowNode[] = [
    {
      id: "user-data-cmd",
      x: 50,
      y: 650,
      width: 140,
      height: 70,
      label: "User Data Query",
      color: colors.user,
      icon: "💬",
      description: '"Show all schools"',
      tech: "Browser",
    },
    {
      id: "ai-assistant-3",
      x: 250,
      y: 650,
      width: 140,
      height: 70,
      label: "AI Assistant",
      color: colors.ai,
      icon: "🤖",
      description: "Parse data request",
      tech: "OpenAI API",
    },
    {
      id: "update-data-json",
      x: 450,
      y: 650,
      width: 140,
      height: 70,
      label: "update_data JSON",
      color: colors.backend,
      icon: "📄",
      description: "{ action: 'fetch', entity: 'schools' }",
      tech: "Express Routes",
    },
    {
      id: "ai-update-data-event",
      x: 650,
      y: 650,
      width: 140,
      height: 70,
      label: "aiUpdateData Event",
      color: colors.frontend,
      icon: "📡",
      description: "Event listener triggered",
      tech: "React useEffect",
    },
    {
      id: "api-call",
      x: 850,
      y: 650,
      width: 140,
      height: 70,
      label: "API Request",
      color: colors.backend,
      icon: "🌐",
      description: "GET /api/data",
      tech: "Axios / Fetch API",
    },
    {
      id: "mongodb",
      x: 850,
      y: 760,
      width: 140,
      height: 70,
      label: "MongoDB Query",
      color: colors.database,
      icon: "🗃️",
      description: "db.schools.find()",
      tech: "MongoDB + Mongoose",
    },
    {
      id: "api-response",
      x: 1050,
      y: 650,
      width: 140,
      height: 70,
      label: "API Response",
      color: colors.backend,
      icon: "📦",
      description: "JSON data returned",
      tech: "Express Response",
    },
    {
      id: "data-context",
      x: 1250,
      y: 650,
      width: 140,
      height: 70,
      label: "DataContext",
      color: colors.frontend,
      icon: "🗄️",
      description: "Global state updated",
      tech: "React Context API",
    },
    {
      id: "table-render",
      x: 1250,
      y: 760,
      width: 140,
      height: 70,
      label: "Table Render",
      color: colors.frontend,
      icon: "📊",
      description: "MySchoolPage, OffersTable",
      tech: "React .map()",
    },
  ];

  const flow3Arrows: FlowArrow[] = [
    {
      from: { x: 190, y: 685 },
      to: { x: 250, y: 685 },
      label: '"Fetch offers"',
      color: colors.user,
    },
    {
      from: { x: 390, y: 685 },
      to: { x: 450, y: 685 },
      label: "Interpret query",
      color: colors.ai,
    },
    {
      from: { x: 590, y: 685 },
      to: { x: 650, y: 685 },
      label: "Generate JSON",
      color: colors.backend,
    },
    {
      from: { x: 790, y: 685 },
      to: { x: 850, y: 685 },
      label: "dispatch()",
      color: colors.frontend,
    },
    {
      from: { x: 920, y: 720 },
      to: { x: 920, y: 760 },
      label: "Query DB",
      color: colors.backend,
    },
    {
      from: { x: 920, y: 830 },
      to: { x: 920, y: 870 },
      label: "Return data",
      color: colors.database,
      dashed: true,
    },
    {
      from: { x: 990, y: 685 },
      to: { x: 1050, y: 685 },
      label: "Response",
      color: colors.backend,
    },
    {
      from: { x: 1190, y: 685 },
      to: { x: 1250, y: 685 },
      label: "setData()",
      color: colors.frontend,
    },
    {
      from: { x: 1320, y: 720 },
      to: { x: 1320, y: 760 },
      label: "map() rows",
      color: colors.frontend,
    },
  ];

  const renderArrow = (arrow: FlowArrow, index: number) => {
    const { from, to, label, color, dashed } = arrow;
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;

    return (
      <g key={index}>
        <defs>
          <marker
            id={`arrowhead-${index}`}
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill={color} />
          </marker>
        </defs>
        <line
          x1={from.x}
          y1={from.y}
          x2={to.x}
          y2={to.y}
          stroke={color}
          strokeWidth="2"
          markerEnd={`url(#arrowhead-${index})`}
          strokeDasharray={dashed ? "5,5" : "0"}
        />
        <text
          x={midX}
          y={midY - 5}
          fill={color}
          fontSize="11"
          fontWeight="600"
          textAnchor="middle"
          className="select-none"
        >
          {label}
        </text>
      </g>
    );
  };

  const renderNode = (node: FlowNode) => {
    const isHovered = hoveredNode === node.id;
    return (
      <g
        key={node.id}
        onMouseEnter={() => setHoveredNode(node.id)}
        onMouseLeave={() => setHoveredNode(null)}
        className="cursor-pointer transition-all"
      >
        <rect
          x={node.x}
          y={node.y}
          width={node.width}
          height={node.height}
          fill={node.color}
          rx="8"
          stroke={isHovered ? "#1f2937" : "white"}
          strokeWidth={isHovered ? "3" : "2"}
          opacity={isHovered ? "1" : "0.9"}
        />
        <text
          x={node.x + node.width / 2}
          y={node.y + 25}
          fill="white"
          fontSize="14"
          fontWeight="700"
          textAnchor="middle"
          className="select-none"
        >
          {node.icon}
        </text>
        <text
          x={node.x + node.width / 2}
          y={node.y + 45}
          fill="white"
          fontSize="12"
          fontWeight="600"
          textAnchor="middle"
          className="select-none"
        >
          {node.label}
        </text>
        {/* Technology badge */}
        {node.tech && (
          <rect
            x={node.x + 5}
            y={node.y + node.height - 20}
            width={node.width - 10}
            height="16"
            fill="rgba(0,0,0,0.3)"
            rx="3"
          />
        )}
        {node.tech && (
          <text
            x={node.x + node.width / 2}
            y={node.y + node.height - 9}
            fill="white"
            fontSize="9"
            fontWeight="500"
            textAnchor="middle"
            className="select-none"
          >
            {node.tech}
          </text>
        )}
        {node.description && isHovered && (
          <g>
            <rect
              x={node.x}
              y={node.y + node.height + 5}
              width={node.width}
              height="30"
              fill="#1f2937"
              rx="4"
              opacity="0.95"
            />
            <text
              x={node.x + node.width / 2}
              y={node.y + node.height + 23}
              fill="white"
              fontSize="10"
              textAnchor="middle"
              className="select-none"
            >
              {node.description}
            </text>
          </g>
        )}
      </g>
    );
  };

  return (
    <div className="w-full min-h-screen p-8">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            AI-Integrated Web Application Architecture
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Technical flow diagram illustrating AI-driven navigation, UI control, and data management
          </p>
          
          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: colors.user }}></div>
              <span className="text-sm font-medium">User Layer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: colors.ai }}></div>
              <span className="text-sm font-medium">AI Assistant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: colors.backend }}></div>
              <span className="text-sm font-medium">Backend/API</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: colors.database }}></div>
              <span className="text-sm font-medium">Database</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: colors.frontend }}></div>
              <span className="text-sm font-medium">Frontend UI</span>
            </div>
          </div>

          {/* Flow selector */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setActiveFlow(activeFlow === 1 ? null : 1)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeFlow === 1
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-purple-400"
              }`}
            >
              Flow 1: AI Routing
            </button>
            <button
              onClick={() => setActiveFlow(activeFlow === 2 ? null : 2)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeFlow === 2
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-purple-400"
              }`}
            >
              Flow 2: UI Control
            </button>
            <button
              onClick={() => setActiveFlow(activeFlow === 3 ? null : 3)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeFlow === 3
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-purple-400"
              }`}
            >
              Flow 3: Data Fetching
            </button>
            <button
              onClick={() => setActiveFlow(null)}
              className="px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 transition-all"
            >
              Show All
            </button>
          </div>
        </div>

        {/* Main SVG Diagram */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 overflow-x-auto">
          <svg width="1450" height="920" className="mx-auto">
            {/* Flow 1: AI Routing (Page Navigation) */}
            {(activeFlow === null || activeFlow === 1) && (
              <g opacity={activeFlow === 1 || activeFlow === null ? 1 : 0.3}>
                <text x="50" y="60" fontSize="18" fontWeight="700" fill="#1f2937">
                  1. AI Routing & Page Navigation
                </text>
                <rect
                  x="40"
                  y="75"
                  width="1370"
                  height="120"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  rx="8"
                />
                {flow1Arrows.map((arrow, i) => renderArrow(arrow, `flow1-${i}`))}
                {flow1Nodes.map(renderNode)}
              </g>
            )}

            {/* Flow 2: Conditional Rendering */}
            {(activeFlow === null || activeFlow === 2) && (
              <g opacity={activeFlow === 2 || activeFlow === null ? 1 : 0.3}>
                <text x="50" y="260" fontSize="18" fontWeight="700" fill="#1f2937">
                  2. Conditional Rendering & Component Control
                </text>
                <rect
                  x="40"
                  y="275"
                  width="1370"
                  height="300"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  rx="8"
                />
                {flow2Arrows.map((arrow, i) => renderArrow(arrow, `flow2-${i}`))}
                {flow2Nodes.map(renderNode)}
              </g>
            )}

            {/* Flow 3: Data Fetching */}
            {(activeFlow === null || activeFlow === 3) && (
              <g opacity={activeFlow === 3 || activeFlow === null ? 1 : 0.3}>
                <text x="50" y="610" fontSize="18" fontWeight="700" fill="#1f2937">
                  3. Data Fetching & Table Population via AI Prompts
                </text>
                <rect
                  x="40"
                  y="625"
                  width="1370"
                  height="240"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  rx="8"
                />
                {flow3Arrows.map((arrow, i) => renderArrow(arrow, `flow3-${i}`))}
                {flow3Nodes.map(renderNode)}
                {/* Additional arrow for MongoDB response */}
                <g>
                  <line
                    x1={920}
                    y1={830}
                    x2={920}
                    y2={685}
                    stroke={colors.database}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    markerEnd="url(#arrowhead-return)"
                  />
                  <defs>
                    <marker
                      id="arrowhead-return"
                      markerWidth="10"
                      markerHeight="10"
                      refX="9"
                      refY="3"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3, 0 6" fill={colors.database} />
                    </marker>
                  </defs>
                </g>
              </g>
            )}
          </svg>
        </div>

        {/* Detailed Annotations */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: colors.ai }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🧭</span>
              <h3 className="font-bold text-lg">Flow 1: AI Routing</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              User sends natural language navigation commands through chat interface.
            </p>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>AI parses intent using system prompts</li>
              <li>Backend generates JSON navigation object</li>
              <li>Frontend router receives aiNavigate event</li>
              <li>App.tsx switches to target page component</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: colors.frontend }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🎛️</span>
              <h3 className="font-bold text-lg">Flow 2: UI Control</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              AI interprets component-specific commands to control UI visibility.
            </p>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Commands like "show bot chat" parsed by AI</li>
              <li>Global UI state store manages visibility</li>
              <li>aiUpdateUI events trigger state updates</li>
              <li>Components conditionally render based on state</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: colors.database }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📊</span>
              <h3 className="font-bold text-lg">Flow 3: Data Fetching</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              AI-driven data queries populate tables dynamically from database.
            </p>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>AI detects data request intent</li>
              <li>API calls triggered via aiUpdateData events</li>
              <li>MongoDB queries execute server-side</li>
              <li>DataContext updates, tables re-render</li>
            </ul>
          </div>
        </div>

        {/* Technical Notes */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Info className="size-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-blue-900 mb-2">Technical Implementation Notes</h4>
              <div className="text-sm text-blue-800 space-y-2">
                <p>
                  <strong>Event System:</strong> Custom events (aiNavigate, aiUpdateUI, aiUpdateData) enable 
                  decoupled communication between AI backend and React frontend.
                </p>
                <p>
                  <strong>State Management:</strong> Combination of React Context API (UIProvider, DataContext) 
                  and local useState hooks manage global and component-level state.
                </p>
                <p>
                  <strong>AI Processing Pipeline:</strong> Natural language → Intent detection → JSON generation → 
                  Event dispatch → State update → UI reaction.
                </p>
                <p>
                  <strong>Component Architecture:</strong> Modular components (BotChat, VideoFeed, TopBar, Sidebars) 
                  subscribe to global state for visibility and data updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack & Frameworks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend Technologies */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4" style={{ borderColor: colors.frontend }}>
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="size-6 text-teal-600" />
                <h3 className="font-bold text-lg">Frontend</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <div>
                    <strong>React 18.3</strong>
                    <p className="text-gray-600">UI library with functional components</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <div>
                    <strong>React Router</strong>
                    <p className="text-gray-600">Client-side routing & navigation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <div>
                    <strong>React Context API</strong>
                    <p className="text-gray-600">Global state management</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <div>
                    <strong>React Hooks</strong>
                    <p className="text-gray-600">useState, useEffect, useContext</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <div>
                    <strong>Axios / Fetch API</strong>
                    <p className="text-gray-600">HTTP client for API requests</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Backend Technologies */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4" style={{ borderColor: colors.backend }}>
              <div className="flex items-center gap-2 mb-4">
                <Server className="size-6 text-blue-600" />
                <h3 className="font-bold text-lg">Backend</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <div>
                    <strong>Node.js</strong>
                    <p className="text-gray-600">JavaScript runtime environment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <div>
                    <strong>Express.js</strong>
                    <p className="text-gray-600">Web application framework</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <div>
                    <strong>REST API</strong>
                    <p className="text-gray-600">RESTful API architecture</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <div>
                    <strong>Middleware</strong>
                    <p className="text-gray-600">CORS, body-parser, authentication</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <div>
                    <strong>EventEmitter</strong>
                    <p className="text-gray-600">Event-driven architecture</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Database Technologies */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4" style={{ borderColor: colors.database }}>
              <div className="flex items-center gap-2 mb-4">
                <Database className="size-6 text-orange-600" />
                <h3 className="font-bold text-lg">Database</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <div>
                    <strong>MongoDB</strong>
                    <p className="text-gray-600">NoSQL document database</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <div>
                    <strong>Mongoose</strong>
                    <p className="text-gray-600">ODM for MongoDB</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <div>
                    <strong>Schema Design</strong>
                    <p className="text-gray-600">Collections: schools, offers, users</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <div>
                    <strong>Query Methods</strong>
                    <p className="text-gray-600">find(), aggregate(), update()</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <div>
                    <strong>Indexing</strong>
                    <p className="text-gray-600">Performance optimization</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* AI & Integration Technologies */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4" style={{ borderColor: colors.ai }}>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="size-6 text-purple-600" />
                <h3 className="font-bold text-lg">AI & Integration</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <div>
                    <strong>OpenAI API</strong>
                    <p className="text-gray-600">GPT models for NLP</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <div>
                    <strong>LangChain</strong>
                    <p className="text-gray-600">AI orchestration framework</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <div>
                    <strong>System Prompts</strong>
                    <p className="text-gray-600">Intent detection & classification</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <div>
                    <strong>JSON Parsing</strong>
                    <p className="text-gray-600">Structured AI responses</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <div>
                    <strong>Custom Events</strong>
                    <p className="text-gray-600">AI-to-frontend communication</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Tools */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Additional Development Tools & Libraries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Build Tools</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Webpack / Vite</li>
                <li>• Babel</li>
                <li>• npm / yarn</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Testing</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Jest</li>
                <li>• React Testing Library</li>
                <li>• Supertest (API)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Styling</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• CSS3 / SCSS</li>
                <li>• CSS Modules</li>
                <li>• Tailwind (optional)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">DevOps</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Docker</li>
                <li>• MongoDB Atlas</li>
                <li>• PM2 / Nodemon</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}