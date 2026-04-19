export function ComplexityPanel({ p, q, rowShift, colShift, ringSteps, meshSteps }) {
  const sq = Math.round(Math.sqrt(p));
  const maxBar = Math.max(ringSteps, meshSteps, 1);

  return (
    <div
      style={{
        background: "#F9FAFB",
        border: "1px solid #E5E7EB",
        borderRadius: 8,
        padding: 16,
        marginTop: 16,
      }}
    >
      <h3 style={{ fontSize: 14, marginBottom: 12 }}>Complexity Panel</h3>

      <div style={{ fontSize: 13, marginBottom: 10, lineHeight: 1.8 }}>
        <div>
          Row shift: <strong>{rowShift}</strong>&nbsp; (q mod √p = {q} mod {sq})
        </div>
        <div>
          Col shift: <strong>{colShift}</strong>&nbsp; (⌊q/√p⌋ = ⌊{q}/{sq}⌋)
        </div>
        <div>
          Mesh steps: <strong>{meshSteps}</strong>
        </div>
        <div>
          Ring steps: <strong>{ringSteps}</strong>&nbsp; (min(q, p−q) = min({q},{p - q}))
        </div>
      </div>

      <div style={{ fontSize: 12, color: "#555", marginBottom: 10 }}>
        Formula: Mesh = (q mod √p) + ⌊q/√p⌋ &nbsp;|&nbsp; Ring = min(q, p−q)
      </div>

      {["Mesh", "Ring"].map((label, i) => {
        const val = i === 0 ? meshSteps : ringSteps;
        const color = i === 0 ? "#10B981" : "#EF4444";
        return (
          <div
            key={label}
            style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}
          >
            <span style={{ width: 36, fontSize: 12 }}>{label}</span>
            <div
              style={{
                height: 18,
                borderRadius: 4,
                width: `${(val / maxBar) * 200}px`,
                background: color,
                minWidth: 4,
                transition: "width 0.4s",
              }}
            />
            <span style={{ fontSize: 12, fontWeight: 600 }}>{val}</span>
          </div>
        );
      })}

      <p style={{ fontSize: 12, color: "#059669", marginTop: 8 }}>
        Mesh saves {ringSteps - meshSteps} step(s) vs ring.
      </p>
    </div>
  );
}