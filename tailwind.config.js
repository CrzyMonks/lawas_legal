/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			// Law firm custom colors
  			// lawas: {
  			// 	heading: '#1A2B4B',  // Deep navy blue for headings
  			// 	body: '#2C3E50',     // Rich slate for body text
  			// 	button: '#0F4C81',   // Professional blue for buttons
  			// 	accent: '#C8A977',   // Gold accent color
  			// 	light: '#F8F9FA',    // Light background
  			// 	muted: '#E9ECEF',    // Muted background sections
  			// },
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			lawas: {
  				heading: '#2A2F81',    // Deep navy blue for background
  				body: '#2C3E50',       // Rich slate for body text
  				button: '#C8A977',     // Golden color for buttons (restored)
  				accent: '#FFFFFF',     // White for headings/text
  				light: '#F8F9FA',      // Light background
  				muted: '#E9ECEF',      // Muted background
  				overlay: '#1B2141/90', // Navy blue with opacity
				contact: '#1B2141',
				background: '#faf5ec'
  			},
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'fade-in': {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' },
  			},
  			pulse: {
  				'0%, 100%': { opacity: 0.2 },
  				'50%': { opacity: 0.5 },
  			},
  		},
  		animation: {
  			'fade-in': 'fade-in 0.3s ease-in-out',
  			pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
