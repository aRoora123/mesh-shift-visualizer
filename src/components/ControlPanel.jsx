import { useState } from "react";

export function ControlPanel({ p, q, setP, setQ, onRun }) {
  const [pErr, setPErr] = useState("");
  const [qErr, setQErr] = useState("");

  const validate = () => {
    let ok = true;
    const sq = Math.sqrt(p);
    if (p < 4 || p > 64 || !Number.isInteger(sq)) {
      setPErr("p must be a perfect square between 4 and 64");
      ok = false;
    } else setPErr("");

    if (q < 1 || q >= p) {
      setQErr("q must be between 1 and p−1");
      ok = false;
    } else setQErr("");

    if (ok) onRun();
  };

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #E5E7EB",
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <h3 style={{ fontSize: 14, marginBottom: 12 }}>Controls</h3>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-end" }}>
        <div>
          <label style={{ fontSize: 12, display: "block", marginBottom: 4 }}>
            p (4–64, perfect square)
          </label>
          <input
            type="number"
            value={p}
            onChange={(e) => setP(Number(e.target.value))}
            style={{ width: 80, padding: "4px 8px", border: "1px solid #ccc", borderRadius: 4 }}
          />
          {pErr && <div style={{ color: "red", fontSize: 11, marginTop: 2 }}>{pErr}</div>}
        </div>
        <div>
          <label style={{ fontSize: 12, display: "block", marginBottom: 4 }}>
            q (1 to p−1)
          </label>
          <input
            type="number"
            value={q}
            onChange={(e) => setQ(Number(e.target.value))}
            style={{ width: 80, padding: "4px 8px", border: "1px solid #ccc", borderRadius: 4 }}
          />
          {qErr && <div style={{ color: "red", fontSize: 11, marginTop: 2 }}>{qErr}</div>}
        </div>
        <button
          onClick={validate}
          style={{
            padding: "6px 20px",
            background: "#3B82F6",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          Run Shift
        </button>
      </div>
    </div>
  );
}