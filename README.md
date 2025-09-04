# React Uncover Bab 1–10 — Proyek Demo
Proyek ini berisi contoh-contoh **Bab 1–10**: Pengenalan React, ES6, ReactDOM, JSX, Komponen, Props, Event, State, `useState`, dan `useRef`.

## Cara Menjalankan (Disarankan: Vite)
1. Pastikan Node.js terbaru terpasang (`node -v`).
2. Buka folder proyek ini di terminal, lalu:
   ```bash
   npm install
   npm run dev
   ```
3. Buka URL yang muncul (biasanya `http://localhost:5173`).

## Struktur
- `src/main.jsx` — Entry point: mounting dengan `ReactDOM.createRoot` (Bab 3).
- `src/App.jsx` — Navigator sederhana untuk melihat tiap materi (Bab 4–10).
- `src/components/*` — Komponen per topik:
  - `Intro.jsx` (Bab 1)
  - `ES6Demo.jsx` & `ES6Examples.js` (Bab 2)
  - `JSXExamples.jsx` (Bab 4)
  - `ComponentsDemo.jsx` (Bab 5)
  - `PropsDemo.jsx` (Bab 6)
  - `EventsDemo.jsx` (Bab 7)
  - `StateClassDemo.jsx` (Bab 8 — class `setState`)
  - `UseStateDemo.jsx` (Bab 9)
  - `UseRefDemo.jsx` (Bab 10)

## Catatan
- Proyek ini memakai React 18 dan Vite. Kode dilengkapi komentar singkat per konsep.
- Kamu bisa menghapus/menambah bagian sesuai kebutuhan belajar.