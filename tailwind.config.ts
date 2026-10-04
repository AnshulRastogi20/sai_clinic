import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: { DEFAULT: "1rem", md: "1.5rem", lg: "2rem" },
			screens: {
				"2xl": "1240px"
			}
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
					foreground: "hsl(var(--primary-foreground))"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))"
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))"
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))"
				},
				// Brand palette. Named so they never shadow Tailwind's default
				// scales (a flat `green` here used to wipe out green-500/600).
				ink: "#18241F",
				forest: {
					DEFAULT: "#1E4A3C",
					deep: "#13332A",
					soft: "#E3ECE7"
				},
				clay: {
					DEFAULT: "#B4532A",
					deep: "#93421F",
					soft: "#F5E4D9"
				},
				cream: "#FBF7F1",
				sand: "#F2EADF"
			},
			fontFamily: {
				display: ["Fraunces", "Georgia", "serif"],
				sans: ["Manrope", "system-ui", "sans-serif"]
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			boxShadow: {
				soft: "0 1px 2px rgba(24,36,31,0.04), 0 12px 32px -16px rgba(24,36,31,0.18)",
				lift: "0 2px 4px rgba(24,36,31,0.05), 0 24px 48px -20px rgba(24,36,31,0.28)"
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" }
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" }
				},
				"fade-up": {
					"0%": { transform: "translateY(16px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both"
			}
		}
	},
	plugins: [animate],
} satisfies Config;
