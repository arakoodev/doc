const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    fontFamily: {
      'sans': ['Archivo', 'system-ui', ],
      'serif': ['Tinos', 'Georgia',  ],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      "Quicksand": [ "Quicksand"],
      'display': ['Oswald', ],
      'body': ['"Open Sans"', ],
    }, 
    colors: {
      "bgLight": "#FAF7F5",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      zinc: colors.zinc,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      transparent: colors.transparent,
    }
  },
  plugins: [// Or with a custom prefix:
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
    
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: { preflight: false }
};