export function computeShift(p, q) {
  const sq = Math.round(Math.sqrt(p));
  const rowShift = q % sq;
  const colShift = Math.floor(q / sq);
  const ringSteps = Math.min(q, p - q);
  const meshSteps = rowShift + colShift;

  const initial = Array.from({ length: p }, (_, i) => i);

  const afterRow = [...initial];
  for (let r = 0; r < sq; r++) {
    for (let c = 0; c < sq; c++) {
      const from = r * sq + c;
      const to = r * sq + ((c + rowShift) % sq);
      afterRow[to] = initial[from];
    }
  }

  const afterCol = [...afterRow];
  for (let c = 0; c < sq; c++) {
    for (let r = 0; r < sq; r++) {
      const from = r * sq + c;
      const to = ((r + colShift) % sq) * sq + c;
      afterCol[to] = afterRow[from];
    }
  }

  return { initial, afterRow, afterCol, rowShift, colShift, ringSteps, meshSteps, sq };
}