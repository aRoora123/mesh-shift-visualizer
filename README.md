# Mesh Circular Shift Visualizer

PDC Assignment 2 — 23F-0008 | Urwa Tehseen | Spring 2026

## Live Deployment URL
🔗 https://stackblitz.com/edit/vitejs-vite-f9zz2blq?file=README.md

## Working
Simulates and visualizes circular q-shift on a 2D mesh topology.
- Enter p (perfect square, 4–64) and q (1 to p−1)
- See before/after Stage 1/after Stage 2 grids
- Animate the two-stage shift step by step
- Complexity panel compares Mesh vs Ring steps with a bar chart

## Algorithm
```
Stage 1 (Row shift) = q mod √p   positions right
Stage 2 (Col shift) = ⌊q / √p⌋  positions down
```

## Project Structure
```
src/
├── components/
│   ├── MeshGrid.jsx        ← grid rendering
│   ├── ControlPanel.jsx    ← p/q inputs + validation
│   └── ComplexityPanel.jsx ← formula + bar chart
├── utils/
│   └── shiftLogic.js       ← pure shift algorithm
└── App.jsx
```

## Run Locally
```bash
npm install
npm run dev
```
