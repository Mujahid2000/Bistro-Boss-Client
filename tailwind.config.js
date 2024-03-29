/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/src/keep-preset.js";
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}

