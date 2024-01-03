const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.{md,mdx,tsx}"],
  jit: true,
  theme: {
    extend: {
      zIndex: {
        modal: 100,
      },
      colors: {
        discord: "#5865F2",
        twitter: "#00AAEC",
        refine: {
          red: "#FF4C4D",
          orange: "#FF9933",
          yellow: "#FFBF00",
          green: "#1FAD66",
          "green-alt": "#26D97F",
          cyan: "#0FBDBD",
          "cyan-alt": "#47EBEB",
          blue: "#0080FF",
          "blue-alt": "#6EB3F7",
          indigo: "#3333FF",
          "indigo-alt": "#8080FF",
          purple: "#8000FF",
          "purple-alt": "#B366FF",
          pink: "#ED5EC9",
          bg: "#0A0A29",
          kdb: "#DBDBF0",
          "bg-alt": "#262640",
          "link-dark": "#6EB3F7",
          "link-light": "#0080FF",
          "landing-tile-icon-border": "#4D4DB2",
          "landing-playground-border": "#4D4DB2",
          "landing-tile-image-border": "#272762",
          "landing-stats-fallback-bg": "#242442",
          "landing-footer-bg": "#0F0F3D",
          "landing-footer-border": "#2E2E78",
          "walkthrough-button-bg": "#4D4DB2",
          "walkthrough-button-alt-bg": "#474E6B",
          "pricing-table-alt-dark": "#181927",
          "pricing-table-alt": "#F4F8FB",
          "enterprise-table-alt-dark": "#1D1E30",
          "enterprise-table-alt": "#F4F8FB",
        },
        gray: {
          0: "#FFFFFF",
          50: "#F4F8FB",
          100: "#EDF2F7",
          200: "#DEE5ED",
          300: "#CFD7E2",
          400: "#A3ADC2",
          450: "#808080",
          500: "#6C7793",
          600: "#474E6B",
          700: "#303450",
          800: "#1D1E30",
          900: "#14141F",
          1000: "#000000",
        },

        "white-01": "#ffffffff",
        "white-02": "#ffffffe6",
        "white-03": "#ffffffc0",
        "white-04": "#ffffff80",
        "white-05": "#ffffff4c",
        "white-06": "#fff3",
        "white-07": "#ffffff28",
        "white-08": "#ffffff1e",
        "white-09": "#ffffff19",

        "gray-01": "#000000ff",
        "gray-02": "#1f1f1fff",
        "gray-03": "#5c5c5cff",
        "gray-04": "#999999ff",
        "gray-05": "#c2c2c2ff",
        "gray-06": "#d6d6d6ff",
        "gray-07": "#e0e0e0ff",
        "gray-08": "#ebebebff",
        "gray-09": "#f5f5f5ff",

        "grayBlue-01": "#0b0c0fff",
        "grayBlue-02": "#1d2129ff",
        "grayBlue-03": "#787e85ff",
        "grayBlue-04": "#a9aeb8ff",
        "grayBlue-05": "#bbc0c9ff",
        "grayBlue-06": "#c9cdd4ff",
        "grayBlue-07": "#dadee5ff",
        "grayBlue-08": "#e5e6ebff",
        "grayBlue-09": "#f2f3f5ff",

        "tech-purple-n-01": "#100974",
        "tech-purple-01": "#26189c",
        "tech-purple-02": "#422ec4",
        "tech-purple-03": "#654aec",
        "tech-purple-04": "#8368f0",
        "tech-purple-05": "#a087f4",
        "tech-purple-06": "#bca6f7",
        "tech-purple-07": "#d6c7fb",
        "tech-purple-08": "#f0e8ff",

        "tech-pink-n-01": "#790a5a",
        "tech-pink-01": "#a61d7a",
        "tech-pink-02": "#d2369c",
        "tech-pink-03": "#ff58be",
        "tech-pink-04": "#ff75c5",
        "tech-pink-05": "#ff92ce",
        "tech-pink-06": "#ffaed8",
        "tech-pink-07": "#ffcbe4",
        "tech-pink-08": "#ffe8f2",

        "blackAlpha-01": "rgba(0, 0, 0, 0.88)",
        "blackAlpha-02": "rgba(0, 0, 0, 0.64)",
        "blackAlpha-03": "rgba(0, 0, 0, 0.4)",
        "blackAlpha-04": "rgba(0, 0, 0, 0.24)",
        "blackAlpha-06": "rgba(0, 0, 0, 0.12)",
        "blackAlpha-05": "rgba(0, 0, 0, 0.16)",
        "blackAlpha-07": "rgba(0, 0, 0, 0.08)",
        "blackAlpha-08": "rgba(0, 0, 0, 0.04)",

        "blue-n-01": "#042379",
        "blue-01": "#0a39a6",
        "blue-02": "#1353d2",
        "blue-03": "#1e6fff",
        "blue-04": "#4690ff",
        "blue-05": "#6aa1ff",
        "blue-06": "#94bfff",
        "blue-07": "#bedaff",
        "blue-08": "#e8f4ff",

        "purple-n-01": "#2a0874",
        "purple-01": "#44159b",
        "purple-02": "#6227c3",
        "purple-03": "#863eea",
        "purple-04": "#9f5eee",
        "purple-05": "#b77ff2",
        "purple-06": "#cda1f7",
        "purple-07": "#e2c4fb",
        "purple-08": "#f5e8ff",

        "red-n-01": "#770813",
        "red-01": "#a1151e",
        "red-02": "#cb272d",
        "red-03": "#f53f3f",
        "red-04": "#f76560",
        "red-05": "#f98981",
        "red-06": "#fbaca3",
        "red-07": "#fdcdc5",
        "red-08": "#ffece8",

        "green-n-01": "#02672d",
        "green-01": "#048136",
        "green-02": "#079c3e",
        "green-03": "#0bb645",
        "green-04": "#2dc55b",
        "green-05": "#55d376",
        "green-06": "#81e297",
        "green-07": "#b2f0be",
        "green-08": "#e8ffec",

        "yellow-n-01": "#795d00",
        "yellow-01": "#a68501",
        "yellow-02": "#d2b002",
        "yellow-03": "#f8b804",
        "yellow-04": "#ffea32",
        "yellow-05": "#fff45f",
        "yellow-06": "#fffb8d",
        "yellow-07": "#ffffba",
        "yellow-08": "#fdffd6",

        "orange-n-01": "#792e00",
        "orange-01": "#a64500",
        "orange-02": "#d25f00",
        "orange-03": "#ff7d00",
        "orange-04": "#ff9a2e",
        "orange-05": "#ffb65d",
        "orange-06": "#ffcf8b",
        "orange-07": "#ffe4ba",
        "orange-08": "#fff7e8",

        "cyan-n-01": "#045677",
        "cyan-01": "#0c7ca1",
        "cyan-02": "#16a4cc",
        "cyan-03": "#24d1f6",
        "cyan-04": "#4adef8",
        "cyan-05": "#71eafa",
        "cyan-06": "#98f3fb",
        "cyan-07": "#c0fafd",
        "cyan-08": "#e8ffff",

        "brand-01": "#654aecff",
        "brand-02": "#ff58beff",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "5rem",
        "7xl": "7rem",
        title: "2.5rem",
        titleWeb: "5rem",
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.serif],
        disket: ["Disket Mono", ...defaultTheme.fontFamily.mono],
        inter: ["Inter", ...defaultTheme.fontFamily.serif],
        "jetBrains-mono": ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
        source: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        "ubuntu-mono": ["Ubuntu Mono", ...defaultTheme.fontFamily.mono],
        eurostile: ["Eurostile Becker", ...defaultTheme.fontFamily.sans],
        jetBrains: ["JetBrains Mono", ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        "showcase-highlight": [
          "0px 3px 7px rgba(108, 119, 147, 0.141)",

          "0px 13px 13px rgba(108, 119, 147, 0.141)",

          "0px 20px 18px rgba(108, 119, 147, 0.18)",

          "0px 34px 21px rgba(108, 119, 147, 0.2)",
          "0px 54px 23px rgba(108, 119, 147, 0)",
        ],
        "github-stars-glow": [
          "0px 0px 3px #FF993330",
          "0px 0px 6px #FF9933A0",
          "0px 0px 16px #FF9933A0",
          "0px 0px 16px #FF9933",
        ],
      },
      boxShadow: {
        modal: "4px 8px 16px rgba(42, 42, 66, 0.25)",
        tile: "6px 8px 16px 0 rgba(42, 42, 66, 0.4)",
        integrationTile: "3px 4px 8px 0 rgba(42, 42, 66, 0.25)",
        tagTile: "3px -2px 8px 0 rgba(42, 42, 66, 0.25)",
        startTiles: "4px 8px 16px rgba(42, 42, 66, 0.25)",
        menuItem: "2px 4px 8px rgba(36, 36, 54, 0.2)",
        "menu-dark": "0px 0px 0px 4px rgba(48, 52, 80, 0.25)",
        "menu-light": "0px 0px 0px 4px rgba(222, 229, 237, 0.25)",
        "landing-sweet-spot-code-dark":
          "0px 2.26915px 2.21381px 0px rgba(0, 0, 0, 0.07), 0px 5.45308px 5.32008px 0px rgba(0, 0, 0, 0.11), 0px 10.26767px 10.01724px 0px rgba(0, 0, 0, 0.13), 0px 18.31577px 17.86905px 0px rgba(0, 0, 0, 0.15), 0px 34.25764px 33.42209px 0px rgba(0, 0, 0, 0.19), 0px 82px 80px 0px rgba(0, 0, 0, 0.26)",
        "landing-sweet-spot-code-light":
          "0px 2.26915px 2.21381px 0px rgba(0, 0, 0, 0.02), 0px 5.45308px 5.32008px 0px rgba(0, 0, 0, 0.04), 0px 10.26767px 10.01724px 0px rgba(0, 0, 0, 0.04), 0px 18.31577px 17.86905px 0px rgba(0, 0, 0, 0.05), 0px 34.25764px 33.42209px 0px rgba(0, 0, 0, 0.06), 0px 82px 80px 0px rgba(0, 0, 0, 0.09)",
      },
      backgroundColor: {
        "landing-header-bg": "rgba(10, 10, 41, 0.70)",
        "landing-header-border": "rgba(48, 52, 80, 0.70)",
        "common-header-bg-dark": "rgba(29, 30, 48, 0.70)",
        "common-header-bg-light": "rgba(244, 248, 251, 0.85)",
      },
      backdropBlur: {
        "header-blur": "12px",
      },
      backgroundPosition: {
        "landing-wizard-option-right": "top -350px right -350px, center",
        "landing-wizard-option-left": "bottom -350px left -350px, center",
        "landing-wizard-side-left-position": "center left",
        "landing-wizard-side-right-position": "center right",
        "landing-sweet-spot-glow-position-lg":
          "center, calc(50% + 800px) calc(50% - 300px)",
        "landing-sweet-spot-glow-position-md":
          "center, calc(50% + 490px) calc(50% + 180px)",
        "landing-sweet-spot-glow-position-xs":
          "center, calc(50% - 30px) calc(50% + 300px)",
        "wheel-already-invented-position": "center",
      },
      backgroundSize: {
        "landing-wizard-option": "600px 600px, auto",
        "landing-wizard-side-size": "512px 512px",
        "landing-sweet-spot-glow-size-lg": "auto auto, 1600px 1600px",
        "landing-sweet-spot-glow-size-xs": "auto auto, 656px 656px",
        "wheel-already-invented-size": "100% 1px",
        "landing-github-stars-border-bg-size": "72px 72px",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        beat: "2s ease-in-out 1.5s infinite normal forwards running landing-hero-beat",
        "playground-slide-down": "playground-slide-down 45s linear infinite",
        "playground-slide-down-mobile":
          "playground-slide-down-mobile 45s linear infinite",
        "playground-slide-up": "playground-slide-up 45s linear infinite",
        "playground-slide-up-mobile":
          "playground-slide-up-mobile 45s linear infinite",
        "hackathon-button-bg":
          "hackathon-button-bg 2s ease-in-out infinite alternate",
        "walkthrough-bounce": "walkthrough-bounce 3s ease-in-out infinite",
        "top-announcement-glow":
          "top-announcement-glow 1s ease-in-out infinite alternate",
        "landing-hero-grid-beats":
          "landing-hero-grid-beats 2s ease-in-out infinite",
        "hero-logo-pulse": "hero-logo-pulse 4s ease-in-out infinite",
        "mini-bounce": "mini-bounce 3s ease-in-out infinite",
        "dot-waves": "dot-waves 2.5s linear infinite",
        "landing-packages-left": "landing-packages-left 65s linear infinite",
        "landing-packages-right": "landing-packages-right 60s linear infinite",
        "code-scroll": "code-scroll 25s linear infinite",
        "beam-spin": "beam-spin 3s linear 1 forwards",
        "landing-hero-beam-line":
          "landing-hero-beam-line 7.5s ease-in-out infinite",
        "landing-hero-beam-glow":
          "landing-hero-beam-glow 7.5s ease-in-out infinite",
        "landing-hero-beam-bottom":
          "landing-hero-beam-bottom 7.5s ease-in-out infinite",
        "showcase-bottom-fade-reveal":
          "showcase-bottom-fade-reveal 0.3s ease-in-out forwards",
        "opacity-reveal": "opacity-reveal 1s ease-in-out forwards",
        "wheel-already-invented-reveal":
          "wheel-already-invented-reveal 0.6s cubic-bezier(.23,.95,.64,1.24) forwards",
        "showcase-reveal": "showcase-reveal 0.3s ease-in-out forwards",
        "github-stars-border":
          "github-stars-border 10s linear infinite alternate",
        "github-stars-glow": "github-stars-glow 10s linear infinite alternate",
        "enterprise-iam-services-left":
          "enterprise-iam-services-left 40s linear infinite",
        "enterprise-iam-services-right":
          "enterprise-iam-services-right 40s linear infinite",
        "enterprise-data-source-left":
          "enterprise-data-source-left 25s linear infinite",
        "enterprise-data-source-right":
          "enterprise-data-source-right 25s linear infinite",
        "enterprise-table-left-to-right":
          "enterprise-table-left-to-right 0.3s ease-in-out forwards",
        "enterprise-table-right-to-left":
          "enterprise-table-right-to-left 0.3s ease-in-out forwards",
        "new-badge-border": "new-badge-border 4s linear infinite",
        reveal: "reveal 0.3s ease-in-out forwards",
      },
      keyframes: {
        reveal: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "code-scroll": {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-448px)",
          },
        },
        "walkthrough-bounce": {
          "0%": {
            transform: "translateY(4%)",
          },
          "50%": {
            transform: "none",
          },
          "100%": {
            transform: "translateY(4%)",
          },
        },
        "hackathon-button-bg": {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "100%": {
            backgroundPosition: "100% 0%",
          },
        },
        "landing-hero-beat": {
          "0%": {
            opacity: 0.4,
          },
          "5%": {
            opacity: 0.4,
          },
          "50%": {
            opacity: 1,
          },
          "95%": {
            opacity: 0.4,
          },
          "100%": {
            opacity: 0.4,
          },
        },
        "playground-slide-down-mobile": {
          "0%": {
            transform: "translateY(0px)",
          },
          "99.99%": {
            transform: "translateY(-1655px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        "playground-slide-down": {
          "0%": {
            transform: "translateY(0px)",
          },
          "99.99%": {
            transform: "translateY(-3329px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        "playground-slide-up-mobile": {
          "0%": {
            transform: "translateY(-1655px)",
          },
          "99.99%": {
            transform: "translateY(0px)",
          },
          "100%": {
            transform: "translateY(-1655px)",
          },
        },
        "playground-slide-up": {
          "0%": {
            transform: "translateY(-3328px)",
          },
          "99.99%": {
            transform: "translateY(0px)",
          },
          "100%": {
            transform: "translateY(-3328px)",
          },
        },
        "top-announcement-glow": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        "landing-hero-grid-beats": {
          "0%": {
            fillOpacity: 0,
          },
          "50%": {
            fillOpacity: 0.8,
          },
          "100%": {
            fillOpacity: 0,
          },
        },
        "hero-logo-pulse": {
          "0%": {
            fillOpacity: 1,
          },
          "50%": {
            fillOpacity: 0.75,
          },
          "100%": {
            fillOpacity: 1,
          },
        },
        "mini-bounce": {
          "0%": {
            transform: "translateY(0%)",
          },
          "50%": {
            transform: "translateY(-8%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        "dot-waves": {
          "0%": {
            transform: "scale(0)",
            opacity: 1,
          },
          "75%": {
            transform: "scale(2)",
            opacity: 0,
          },
          "100%": {
            transform: "scale(0)",
            opacity: 0,
          },
        },
        "landing-packages-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "landing-packages-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
        "beam-spin": {
          "0%": {
            transform:
              "translateX(-45px) translateY(-190px) translateZ(0) rotate(0deg)",
          },
          "100%": {
            transform:
              "translateX(-45px) translateY(-190px) translateZ(0) rotate(-360deg)",
          },
        },
        "landing-hero-beam-line": {
          "0%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
          },
        },
        "landing-hero-beam-glow": {
          "0%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.25,
          },
          "100%": {
            opacity: 1,
          },
        },
        "landing-hero-beam-bottom": {
          "0%": {
            opacity: 1,
            transform: "scaleX(1)",
          },
          "50%": {
            opacity: 0.5,
            transform: "scaleX(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "scaleX(1)",
          },
        },
        "showcase-bottom-fade-reveal": {
          "0%": {
            opacity: 0,
            transform: "translateY(96px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "opacity-reveal": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "wheel-already-invented-reveal": {
          "0%": {},
          "100%": {
            transform: "translateX(0)",
          },
        },
        "showcase-reveal": {
          "0%": {
            // transform: "translateY(-100px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        "github-stars-border": {
          "0%": {
            transform: "translateX(-72px)",
          },
          "100%": {
            transform: "translateX(216px)",
          },
        },

        "github-stars-glow": {
          "0%": {
            transform: "translateX(0) scale(0.5)",
          },
          "50%": {
            transform: "translateX(78px) scale(1)",
          },
          "100%": {
            transform: "translateX(156px) scale(0.5)",
          },
        },
        "enterprise-iam-services-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "enterprise-iam-services-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
        "enterprise-data-source-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "enterprise-data-source-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
        "enterprise-table-left-to-right": {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "enterprise-table-right-to-left": {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "new-badge-border": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
    screens: {
      ...defaultTheme.screens,
      "content-sm": "480px",
      "content-md": "656px",
      "content-2xl": "864px",
      "content-4xl": "1536px",
      "header-sm": "640px",
      "header-md": "1200px",
      "landing-content": "944px",
      "landing-xs": "360px",
      "landing-sm": "720px",
      "landing-md": "960px",
      "landing-lg": "1296px",
      "landing-xl": "1440px",
      "landing-footer": "1264px",
      "pricing-content-sm": "640px",
      "pricing-content": "960px",
      "blog-sm": "688px",
      "blog-md": "1000px",
      "blog-lg": "1280px",
      "blog-max": "1408px",
      "blog-xl": "1440px",
      "blog-2xl": "1584px",
      walkthrough: "976px",
      sm: "640px",
      lg: "960px",
      xl: "1440px",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addVariant }) => {
      addVariant("light", `[data-theme="light"] &`)
    }),
  ],
  corePlugins: {
    // preflight: false,
  },
}
