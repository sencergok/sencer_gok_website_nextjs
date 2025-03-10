/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
            color: "var(--foreground)",
            a: {
              color: "var(--primary)",
              "&:hover": {
                color: "var(--primary)",
              },
            },
            h1: {
              color: "var(--foreground)",
            },
            h2: {
              color: "var(--foreground)",
            },
            h3: {
              color: "var(--foreground)",
            },
            h4: {
              color: "var(--foreground)",
            },
            code: {
              color: "#e9e9f4", // Daha parlak bir metin rengi
              backgroundColor: "#282a36", // Daha koyu bir arkaplan
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
              fontWeight: "500",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
              fontSize: "0.875em",
              textShadow: "0 1px 0 rgba(0, 0, 0, 0.5)", // Metni daha okunaklı yapmak için gölge
            },
            "pre code": {
              color: "#f8f8f2 !important", // Pre tag içindeki kodlar için özel stil
              backgroundColor: "transparent !important", // Pre zaten arka plan içeriyor
              padding: "0",
              textShadow: "0 1px 0 rgba(0, 0, 0, 0.5)",
              fontSize: "0.9em",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
              lineHeight: "1.5",
            },
            pre: {
              backgroundColor: "#282a36 !important", // Prism veya highlight.js ile uyumlu koyu tema
              borderRadius: "0.375rem",
              padding: "1em",
              margin: "0.5em 0",
              overflow: "auto",
              border: "1px solid #44475a",
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

