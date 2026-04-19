import { useState, useEffect } from "react";
import { computeShift } from "./utils/shiftLogic";
import MeshGrid from "./components/MeshGrid";
import { ControlPanel } from "./components/ControlPanel";
import { ComplexityPanel } from "./components/ComplexityPanel";

export default function App() {
  const [p, setP] = useState(16);
  const [q, setQ] = useState(6);
  const [result, setResult] = useState(null);
  const [stage, setStage] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleRun = () => {
    const res = computeShift(p, q);
    setResult(res);
    setStage(0);
    setAnimating(false);
  };

  useEffect(() => {
    handleRun();
  }, []);

  const animate = () => {
    if (animating) return;
    setAnimating(true);
    setStage(0);
    setTimeout(() => setStage(1), 800);
    setTimeout(() => setStage(2), 1800);
    setTimeout(() => setAnimating(false), 2000);
  };

  const stageLabels = [
    "Initial state",
    "After Stage 1 — Row shift →",
    "After Stage 2 — Col shift ↓ (Final)",
  ];

  const stageData = result
    ? [result.initial, result.afterRow, result.afterCol][stage]
    : [];

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "0 auto",
        padding: 24,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: 20, fontWeight: 600, marginBottom: 4 }}>
        Mesh Circular Shift Visualizer
      </h1>
      <p style={{ color: "#666", fontSize: 13, marginBottom: 20 }}>
        PDC Assignment 2 — 23F-0008
      </p>

      <ControlPanel p={p} q={q} setP={setP} setQ={setQ} onRun={handleRun} />

      {result && (
        <>
          {/* Before / After Stage 1 / Final — all three shown at once */}
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              marginBottom: 24,
              flexWrap: "wrap",
            }}
          >
            <MeshGrid
              data={result.initial}
              sq={result.sq}
              label="Before (initial)"
            />
            <MeshGrid
              data={result.afterRow}
              sq={result.sq}
              label={`After Stage 1 — row +${result.rowShift}`}
            />
            <MeshGrid
              data={result.afterCol}
              sq={result.sq}
              label={`After Stage 2 — col +${result.colShift} (Final)`}
            />
          </div>

          {/* Animation */}
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <button
              onClick={animate}
              disabled={animating}
              style={{
                padding: "8px 24px",
                background: animating ? "#9CA3AF" : "#8B5CF6",
                color: "white",
                border: "none",
                borderRadius: 6,
                cursor: animating ? "not-allowed" : "pointer",
                fontSize: 14,
              }}
            >
              {animating ? "Animating" : "▶ Animate Step-by-Step"}
            </button>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>
              {stageLabels[stage]}
            </p>
          </div>

          {/* Live animated grid */}
          <MeshGrid
            data={stageData}
            sq={result.sq}
            label={`Live: ${stageLabels[stage]}`}
          />

          <ComplexityPanel
            p={p}
            q={q}
            rowShift={result.rowShift}
            colShift={result.colShift}
            ringSteps={result.ringSteps}
            meshSteps={result.meshSteps}
          />
        </>
      )}
    </div>
  );
}