/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,tsx, ts}',
    './src/**/*.stories.{js,jsx,ts,tsx, mdx}',
    './src/components/*',
    './src/constants'],
  safelist: [
    {
      pattern: /^(?!(?:scroll|bottom)$)m\w?-/,
      variants: ['hover', 'active']
    }
  ],
  theme: {
    extend:{
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        'xxs': '.5rem'
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    colors: {
      grayscale: {
        light: {
          'white': '#FFFFFF',
          'body': '#F7F7FC',
          'body-border': '#D9DBE9',
          'placeholder': '#C4C4D4',
          'body-text': '#4C4C67',
          'header-text': '#14142A'
        },
        dark:{
          'body': '#1C1C22',
          'card': '#22222A',
          'input': '#2E2E38',
          'border': '#393946',
          'placeholder': '#8D8D91'
        }
      },
      primary: {
        '100': '#FCE8E8',
        '500': '#E74444',
        '600': '#B12B2B',
        '700': '#7E2A26'
      },
      information: {
        '100': '#F9ECEB',
        '500': '#2663D9',
        '600': '#1E4FAE',
        '700': '#173C82'
      },
      success: {
        '100': '#E6FEF7',
        '500': '#059669',
        '600': '#047857',
        '700': '#065F46'
      },
      error: {
        '100': '#FBE9E9',
        '500': '#DC2626',
        '600': '#B91C1C',
        '700': '#991B1B'
      },
      warning: {
        '100': '#FFF7E6',
        '500': '#CA8A04',
        '600': '#A16207',
        '700': '#854D0E'
      },
      'gray-light': '#d3dce6', // Does not exist in grayscale color scheme 
      'transparent': 'transparent',
      'checkbox-overflow': '#1C1C221A'
    },
    extend: {
      spacing: {
        '128': '24rem',
        '144': '27rem',
        '8xl': '96rem',
        '9xl': '128rem'
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        'title': '2rem',
        'title-mobile': '1.5rem'
      },
  
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  corePlugins: { preflight: false, }
}
