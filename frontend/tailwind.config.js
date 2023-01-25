module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2dd4bf",

          secondary: "#10b981",

          accent: "#2dd4bf",

          neutral: "#2F2339",

          "bgiase-100": "#6b7280",

          info: "#22d3ee",

          success: "#84cc16",

          warning: "#facc15",

          error: "#dc2626",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
};
