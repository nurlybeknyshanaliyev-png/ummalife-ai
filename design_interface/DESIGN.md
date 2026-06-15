---
name: UmmaLife AI Luminescence
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#3f4945'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#707975'
  outline-variant: '#bfc9c4'
  surface-tint: '#29695b'
  primary: '#00342b'
  on-primary: '#ffffff'
  primary-container: '#004d40'
  on-primary-container: '#7ebdac'
  inverse-primary: '#94d3c1'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#2b2e2d'
  on-tertiary: '#ffffff'
  tertiary-container: '#414443'
  on-tertiary-container: '#aeb1af'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#afefdd'
  primary-fixed-dim: '#94d3c1'
  on-primary-fixed: '#00201a'
  on-primary-fixed-variant: '#065043'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e1e3e1'
  tertiary-fixed-dim: '#c5c7c5'
  on-tertiary-fixed: '#191c1b'
  on-tertiary-fixed-variant: '#444746'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is centered on a "Luxury Modern Islamic" aesthetic. It bridges centuries of spiritual tradition with cutting-edge artificial intelligence. The personality is serene, authoritative, and sophisticated. It aims to evoke a sense of "Sakina" (tranquility) through expansive whitespace and "Noor" (light) through subtle glow effects and metallic accents.

The style is a fusion of **Minimalism** and **Modern Luxury**. It utilizes high-quality typography, a restricted but rich color palette, and premium tactile elements. The interface should feel like a digital sanctuary—clean, quiet, and highly intelligent.

## Colors

The palette is anchored by **Deep Emerald**, representing life and the Islamic heartland. **Matte Gold** is used sparingly for high-value interactions, premium features, and subtle ornamental borders, providing a sense of prestige.

- **Primary (Deep Emerald):** Used for main headers, primary buttons, and active states.
- **Secondary (Matte Gold):** Used for icons, accents, toggles, and premium badge outlines.
- **Surface (Clean White/Off-white):** The main background color to ensure maximum readability and a high-tech feel.
- **Neutral:** A deep charcoal, rather than pure black, used for body text to maintain softness.

## Typography

This design system utilizes **Manrope** for headlines to provide a structured, geometric, yet modern feel that conveys intelligence. **Plus Jakarta Sans** is used for body and labels; its slightly softer, rounded terminals make the AI interactions feel more approachable and welcoming.

Large headlines should use tighter letter spacing for a "display" look, while labels and captions should have increased letter spacing to maintain a premium, airy feel.

## Layout & Spacing

The layout follows a **Fluid Grid** model with generous margins to enforce the luxury feel.

- **Desktop:** 12-column grid with 24px gutters. Content is centered with a max-width of 1280px to prevent excessive line lengths.
- **Mobile:** 4-column grid with 20px side margins.
- **Rhythm:** Vertical spacing should prioritize large "stack" values (32px+) between major sections to create a sense of breathing room.
- **AI Chat Interface:** Use a centered narrow column (max 800px) even on desktop to maintain focus and intimacy.

## Elevation & Depth

Depth in this design system is achieved through **Tonal Layers** and **Ambient Shadows**.

1.  **Low Elevation (Cards):** Use a very soft, diffused shadow (0px 4px 20px rgba(0, 0, 0, 0.04)) against the white background.
2.  **Interactive States:** On hover, cards should slightly lift and gain a thin (1px) Matte Gold border to signify premium interactivity.
3.  **Overlays (Modals):** Use a heavy backdrop blur (20px) with a semi-transparent Deep Emerald tint (5% opacity) to keep the user grounded in the spiritual environment while focusing on the task at hand.

## Shapes

The shape language is defined by large, welcoming radii. Standard UI components (buttons, inputs) use a **0.5rem (8px)** base, but the defining "Premium" cards and containers utilize a much larger **1.5rem (24px)** radius. This creates a soft, organic feel that contrasts with the technical precision of the AI.

## Components

- **Buttons:** Primary buttons are solid Deep Emerald with white text. High-end "Action" buttons feature a subtle gold gradient transition on hover. All buttons use 12px padding vertically and 24px horizontally.
- **Premium Cards:** These are the centerpiece. Use 24px rounded corners, a 1px border in #D4AF37 (at 30% opacity), and a white background. Inside, use Deep Emerald for iconography.
- **Input Fields:** Use a light grey fill (#F2F4F2) with 12px rounded corners. The focus state replaces the grey border with a 1.5px Matte Gold outline.
- **Chips/Tags:** Used for "Topics" or "Dua categories." These should have 100px (pill) roundedness, a light emerald background, and Deep Emerald text.
- **AI Response Bubbles:** Distinct from standard cards; use a soft Deep Emerald tint for the AI's responses and a clean white with a gold outline for the user's input to differentiate the "source of knowledge."
- **Progress Indicators:** Use thin gold lines for spiritual goals (e.g., Quran reading progress) to make the achievement feel rewarding and precious.