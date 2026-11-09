import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

/**
 * Tailwind dùng chung cho toàn app.
 * Giá trị gốc nằm ở src/styles/tokens.css – ở đây chỉ ánh xạ token → class.
 *
 * Màu chính:   bg-primary / text-primary   #357D64
 * Chữ:         text-ink                    #173B32
 * Nền kem:     bg-ivory                    #F7F8F2
 * Phông:       font-serif (tiêu đề, logo) · font-sans (nội dung)
 */

/** Thang màu primary – dùng thay cho emerald/green/teal mặc định để mọi sắc xanh đều đúng bộ nhận diện */
const primaryScale = {
  50: '#EEF6F2',
  100: '#D7EAE1',
  200: '#B1D5C4',
  300: '#85BBA3',
  400: '#5A9D83',
  500: '#43896F',
  600: '#357D64',
  700: '#2B6551',
  800: '#224F40',
  900: '#173B32',
  950: '#0F2822',
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        // vùng an toàn của thiết bị (styles/tokens.css)
        'safe-top': 'var(--safe-top)',
        'safe-bottom': 'var(--safe-bottom)',
        nav: 'var(--nav-height)',
      },
      fontFamily: {
        sans: ['var(--font-body)'],
        serif: ['var(--font-heading)'],
        display: ['var(--font-body)'],
        handwriting: ['var(--font-heading)'],
      },
      colors: {
        /* ---- token chính ---- */
        primary: { DEFAULT: 'var(--color-primary)', hover: 'var(--color-primary-hover)', soft: 'var(--color-primary-soft)', tint: 'var(--color-primary-tint)' },
        ink: { DEFAULT: 'var(--color-ink)', soft: 'var(--color-ink-soft)' },
        ivory: 'var(--color-bg)',
        muted: 'var(--color-muted)',
        line: 'var(--color-border)',
        gold: { DEFAULT: 'var(--color-gold)', soft: 'var(--color-gold-soft)' },

        emerald: primaryScale,
        green: primaryScale,
        teal: primaryScale,

        /* ---- bí danh từ thiết kế gốc (giữ để các màn cũ không vỡ), đã quy về bộ màu mới ---- */
        moss: { DEFAULT: '#173B32', dark: '#173B32', light: '#EBF1EE', accent: '#357D64' },
        brandBg: '#F7F8F2',
        brand: {
          DEFAULT: '#357D64',
          primary: '#357D64',
          secondary: '#357D64',
          light: '#F7F8F2',
          surface: '#F7F8F2',
          cream: '#F1F3E9',
          border: '#E3E6D3',
          pill: '#D3E6DE',
          accent: '#357D64',
          muted: '#7A8377',
          sage: '#558071',
          'sage-dark': '#4A7163',
          'sage-light': '#E4ECE9',
          'sage-card': '#EDF5F2',
          'sage-card-border': '#DAE6E1',
          'subtle-gray': '#69837A',
          dark: '#173B32',
          sageDark: '#477263',
          sageLight: '#789F91',
          text: '#173B32',
          statusGreen: '#EBF4F0',
          statusGreenText: '#357D64',
          card: '#FFFFFF',
          ivory: '#F7F8F2',
          darkSage: '#357D64',
          softSage: '#2B6551',
          lightSage: '#BFCDC7',
          leafAccent: '#598878',
        },
        'brand-soft': '#D3E6DE',
        'app-bg': '#F7F8F2',
        'outer-bg': '#F1F3E9',
        'muted-text': '#8A8F84',
        'card-border': '#E3E6D3',
      },
    },
  },
  plugins: [forms, containerQueries],
}
