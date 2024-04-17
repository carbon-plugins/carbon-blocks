/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: 'class',
  content: [
		"./node_modules/@carbon-plugins/components/dist/**/*.{js,jsx,ts,tsx}",
    "./src/admin/**/*.{js,jsx,ts,tsx}"
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
				border: "hsl(var(--crbn-border))",
				input: "hsl(var(--crbn-input))",
				ring: "hsl(var(--crbn-ring))",
				background: "hsl(var(--crbn-background))",
				foreground: "hsl(var(--crbn-foreground))",
				primary: {
					DEFAULT: "hsl(var(--crbn-primary))",
					foreground: "hsl(var(--crbn-primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--crbn-secondary))",
					foreground: "hsl(var(--crbn-secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--crbn-destructive))",
					foreground: "hsl(var(--crbn-destructive-foreground))",
				},
				valid: {
					DEFAULT: "hsl(var(--crbn-valid))",
					foreground: "hsl(var(--crbn-valid-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--crbn-muted))",
					foreground: "hsl(var(--crbn-muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--crbn-accent))",
					foreground: "hsl(var(--crbn-accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--crbn-popover))",
					foreground: "hsl(var(--crbn-popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--crbn-card))",
					foreground: "hsl(var(--crbn-card-foreground))",
				},
				'blue': {
					50: "#F1F5FD",
					100: "#DFE9FA",
					200: "#9EC0F2",
					300: "#709FEA",
					400: "#4374E0",
					500: "#3A60D6",
					600: "#314EC4",
					700: "#2E409F",
					800: "#2A3A7E",
					900: "#151826",
				},
				"black": "#0A0D19",
				'grey': {
					900: "#151826",
				},
				"lightGrey": "#E4E5E9",
				"mediumGrey": "#A1A3AA",
				"grey": "#3E3E3E",
				"darkGrey": "#21242C",
				"darkGrey2": "#252A3E",
			},
			borderRadius: {
				lg: `var(--crbn-radius)`,
				md: `calc(var(--crbn-radius) - 2px)`,
				sm: "calc(var(--crbn-radius) - 4px)",
			},
			fontFamily: {
				sans: ["var(--crbn-font-sans)", ...fontFamily.sans],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--crbn-radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--crbn-radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
  },
  plugins: [require("tailwindcss-animate")],
}
