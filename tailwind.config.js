module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'landscape-h-sm': {
          raw: '(orientation: landscape) and (min-height: 640px)',
        },
        'landscape-h-md': {
          raw: '(orientation: landscape) and (min-height: 768px)',
        },
        'landscape-h-lg': {
          raw: '(orientation: landscape) and (min-height: 1024px)',
        }
      },
      borderWidth: {
        '1': '1px',  // Default border-1
        '3': '3px',  // Custom border-3
        '6': '6px',  // Custom border-6
        '8': '8px',  // Custom border-6
        '10': '10px', // Custom border-10
        '12': '12px', // Custom border-xs
        'lg': '5px',   // Custom border-lg
        'custom-width': '0.75rem', // Custom border-custom-width
      },
      keyframes: {
        'spin-color': {
          '0%': { borderColor: '#B3001B', transform: 'rotate(0deg)' },
          '25%': { borderColor: '#EDEBD7' },
          '50%': { borderColor: '#B3001B', transform: 'rotate(180deg)' },
          '75%': { borderColor: '#EDEBD7' },
          '100%': { borderColor: '#B3001B', transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'spin-color': 'spin-color 3s infinite linear',
        'spin': 'spin 3s infinite linear'
      }
    }
  },
  plugins: [],
}
