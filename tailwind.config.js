export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // tailwind.config.js - Sky Blue Medical Color Palette
      colors: {
        primary: {
          DEFAULT: "#0EA5E9", // Beautiful sky blue - medical, clean, trustworthy
          light: "#7DD3FC", // Light sky blue for hover states
        },
        accent: {
          DEFAULT: "#06B6D4", // Complementary cyan - fresh and modern
          light: "#67E8F9", // Light cyan for accents
        },
        gray: {
          light: "#F8FAFC", // Very light blue-gray background
          medium: "#E2E8F0", // Soft gray for borders
          DEFAULT: "#64748B", // Balanced blue-gray for text
          dark: "#334155", // Dark blue-gray for headings
        },
        text: {
          DEFAULT: "#0F172A", // Deep navy for primary text
          light: "#64748B", // Blue-gray for secondary text
        },
        success: "#10B981", // Fresh green for success
        error: "#EF4444", // Clean red for errors
        warning: "#F59E0B", // Warm amber for warnings
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "slide-up": "slideUp 0.5s ease-in-out forwards",
        "slide-down": "slideDown 0.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
