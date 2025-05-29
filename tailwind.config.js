export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // tailwind.config.js - Purple Medical Color Palette
      colors: {
        primary: {
          DEFAULT: "#66328E", // New brand purple - professional, medical, trustworthy
          light: "#9B6BC7", // Light purple for hover states
          dark: "#4A1E6B", // Darker purple for emphasis
        },
        accent: {
          DEFAULT: "#8B5CF6", // Complementary violet - modern and sophisticated
          light: "#A78BFA", // Light violet for accents
          dark: "#7C3AED", // Darker violet for contrast
        },
        secondary: {
          DEFAULT: "#06B6D4", // Keeping cyan as secondary for medical freshness
          light: "#67E8F9", // Light cyan for secondary accents
        },
        gray: {
          light: "#FAFBFC", // Very light neutral background
          medium: "#E5E7EB", // Soft gray for borders
          DEFAULT: "#6B7280", // Balanced gray for text
          dark: "#374151", // Dark gray for headings
        },
        text: {
          DEFAULT: "#111827", // Deep charcoal for primary text
          light: "#6B7280", // Gray for secondary text
          purple: "#66328E", // Brand purple for special text
        },
        success: "#10B981", // Fresh green for success
        error: "#EF4444", // Clean red for errors
        warning: "#F59E0B", // Warm amber for warnings
        // Additional purple shades for more design flexibility
        purple: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#66328E", // Your brand color
          700: "#4A1E6B",
          800: "#3B1A56",
          900: "#2D1342",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "slide-up": "slideUp 0.5s ease-in-out forwards",
        "slide-down": "slideDown 0.5s ease-in-out forwards",
        "pulse-purple": "pulsePurple 2s ease-in-out infinite",
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
        pulsePurple: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(102, 50, 142, 0.7)",
          },
          "70%": {
            boxShadow: "0 0 0 10px rgba(102, 50, 142, 0)",
          },
        },
      },
      // Optional: Add some purple-specific gradients
      backgroundImage: {
        "gradient-purple": "linear-gradient(135deg, #66328E 0%, #8B5CF6 100%)",
        "gradient-purple-light":
          "linear-gradient(135deg, #9B6BC7 0%, #A78BFA 100%)",
      },
    },
  },
  plugins: [],
};
