import typography from "@tailwindcss/typography";


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            // '--tw-prose-body': theme('colors.white'),
            'blockquote p:first-of-type::before': null,
            'blockquote p:last-of-type::after': null,
            pre: {
              backgroundColor: theme('colors.neutral.100'),
              color: theme('colors.neutral.900'),
              border: `none`
            },
            code: {
              // fontFamily: 'serif',
              // backgroundColor: theme('colors.slate.100'),
              borderRadius: theme('borderRadius.sm'),
              padding: `${theme('padding.1')} ${theme('padding.1.5')}`,
              border: `none`
            },
            'code::before': {
              content: 'normal'
            },
            'code::after': {
              content: 'normal'
            }
          }
        }
      })
    },
  },
  darkMode: 'class',
  important: true, // Don't modify it, unless you know what you are doing !
  corePlugins: {
    preflight: false,
  },
  plugins: [typography],
}

