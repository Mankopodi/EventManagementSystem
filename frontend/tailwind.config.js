module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2dd4bf",

          secondary: "#6b7280",

          accent: "#2dd4bf",

          neutral: "#2F2339",

          "base-100": "#EBE7F3",

          info: "#22d3ee",

          success: "#84cc16",

          warning: "#fcd34d",

          error: "#dc2626",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
};
