/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Background layers ──────────────────────────
        navy: '#0A2E1F',           // bg-primary: deep emerald
        'navy-light': '#0F3D2A',   // bg-surface: emerald surface
        'navy-card': '#0F3D2A',
        'navy-border': '#1E4A35',  // border-subtle
        // ── Primary accent: gold (replaces cyan role) ──
        cyan: {
          DEFAULT: '#C98A0A',      // gold is the new primary accent
          dark: '#E8A820',
          glow: 'rgba(201,138,10,0.12)',
        },
        // ── Glow accent: cyan-green (use sparingly) ────
        glow: '#00E887',
        gold: '#C98A0A',
        'gold-light': '#E8A820',
        'gold-muted': 'rgba(201,138,10,0.1)',
        // ── Text ──────────────────────────────────────
        slate: {
          custom: '#8AADA0',
        },
      },
      fontFamily: {
        // font-sora class now loads Syne
        sora: ['Syne', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'float-slow': 'floatSlow 10s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'circuit-1': 'circuitFlow1 8s linear infinite',
        'circuit-2': 'circuitFlow2 10s linear infinite 1.5s',
        'circuit-3': 'circuitFlow3 12s linear infinite 3s',
        'node-pulse': 'nodePulse 2.5s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-25px) scale(1.03)' },
        },
        circuitFlow1: {
          '0%': { strokeDashoffset: '600' },
          '100%': { strokeDashoffset: '0' },
        },
        circuitFlow2: {
          '0%': { strokeDashoffset: '800' },
          '100%': { strokeDashoffset: '0' },
        },
        circuitFlow3: {
          '0%': { strokeDashoffset: '500' },
          '100%': { strokeDashoffset: '0' },
        },
        nodePulse: {
          '0%, 100%': { opacity: '0.3', r: '2' },
          '50%': { opacity: '1', r: '4' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'cyan-sm':    '0 0 15px rgba(201,138,10,0.25)',
        'cyan-md':    '0 0 30px rgba(201,138,10,0.35)',
        'cyan-lg':    '0 0 60px rgba(201,138,10,0.45)',
        'glow-sm':    '0 0 15px rgba(0,232,135,0.3)',
        'glow-md':    '0 0 30px rgba(0,232,135,0.4)',
        'card':       '0 4px 24px rgba(0,0,0,0.5)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.7)',
      },
      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [],
}
