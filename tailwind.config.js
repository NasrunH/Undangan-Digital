/** @type {import('tailwindcss').Config} */
export default {
  // BAGIAN CONTENT INI YANG PALING PENTING
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ini artinya: "Baca semua file di dalam folder src DAN sub-foldernya"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}