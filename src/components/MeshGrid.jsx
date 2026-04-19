export default function MeshGrid({ data, sq, label }) {
  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: 12, marginBottom: 6, color: "#666" }}>{label}</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${sq}, 48px)`,
          gap: 4,
          justifyContent: "center",
        }}
      >
        {data.map((val, i) => (
          <div
            key={i}
            style={{
              width: 48,
              height: 48,
              background: "#F3F4F6",
              color: "#111",
              borderRadius: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              border: "1px solid #ddd",
            }}
          >
            <span style={{ fontSize: 9, color: "#999" }}>n{i}</span>
            <strong>{val}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}