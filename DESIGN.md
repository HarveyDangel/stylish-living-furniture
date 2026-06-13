---
name: Artisanal Hearth
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
  on-surface-variant: '#504441'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#827470'
  outline-variant: '#d4c3be'
  surface-tint: '#77574d'
  primary: '#442a22'
  on-primary: '#ffffff'
  primary-container: '#5d4037'
  on-primary-container: '#d4ada1'
  inverse-primary: '#e7bdb1'
  secondary: '#795900'
  on-secondary: '#ffffff'
  secondary-container: '#fec330'
  on-secondary-container: '#6f5100'
  tertiary: '#303221'
  on-tertiary: '#ffffff'
  tertiary-container: '#474836'
  on-tertiary-container: '#b6b7a0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#e7bdb1'
  on-primary-fixed: '#2c160e'
  on-primary-fixed-variant: '#5d4037'
  secondary-fixed: '#ffdfa0'
  secondary-fixed-dim: '#f8bd2a'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5c4300'
  tertiary-fixed: '#e4e4cc'
  tertiary-fixed-dim: '#c8c8b0'
  on-tertiary-fixed: '#1b1d0e'
  on-tertiary-fixed-variant: '#474836'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 64px
    fontWeight: '500'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-lg: 48px
  stack-md: 24px
  stack-sm: 12px
---

## Brand & Style

The design system is built on a foundation of **Modern Minimalism** infused with a **Tactile** warmth. It targets an audience that values slow living, craftsmanship, and the enduring quality of natural materials. The UI must evoke a sense of calm, spatial clarity, and quiet luxury—mimicking the experience of walking through a high-end, curated furniture gallery.

The aesthetic prioritizes generous white space to allow product photography to breathe, creating a "digital editorial" feel. High-quality imagery is the primary vehicle for storytelling, supported by a structured, systematic use of color and typography. Interactions should feel deliberate and smooth, avoiding excessive flash in favor of refined transitions that respect the user's focus.

## Colors

The palette is anchored in an earthy, sophisticated range that reflects natural wood and stone. 

- **Primary (Umbria):** A deep, warm brown used for key structural elements and heavy typography to suggest stability and heritage.
- **Secondary (Ochre Sun):** A soft, muted yellow reserved strictly for calls to action and critical highlights. It provides warmth without disrupting the premium atmosphere.
- **Tertiary (Ecru):** A soft beige used for background surfaces and subtle containment, preventing the interface from feeling clinical.
- **Neutrals:** "Deep Black" (#1A1A1A) provides crisp readability for body text, while "Bone White" (#FFFFFF) serves as the primary canvas.

## Typography

This design system employs a classic high-contrast pairing. **EB Garamond** is used for all display and headline roles, lending a literary, handcrafted authority to the brand. For functional interface elements and long-form reading, **Hanken Grotesk** offers a clean, contemporary contrast that ensures high legibility on all screen sizes.

When using headlines, prioritize optical kerning. Display sizes use slight negative letter-spacing to feel more cohesive, while small labels use increased tracking and uppercase styling to maintain a modern, architectural feel.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop to maintain the editorial integrity of the compositions, while transitioning to a fluid model for mobile devices. 

- **Grid:** A 12-column grid is used for desktop (1280px max-width) with wide 24px gutters to emphasize the feeling of space. 
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **White Space:** Use "Stack-LG" (48px) between major sections to prevent visual clutter.
- **Mobile:** Margins are reduced to 20px, and the grid collapses to 2 columns for product feeds to maximize image size.

## Elevation & Depth

To maintain a sophisticated aesthetic, this design system avoids heavy drop shadows. Instead, it utilizes **Ambient Depth** and **Tonal Layers**.

1.  **Level 0 (Base):** Bone White (#FFFFFF) or Ecru (#F5F5DC) for the main background.
2.  **Level 1 (Cards):** No shadow, but defined by a very fine 1px border in a light beige tint or a slight shift in background color.
3.  **Level 2 (Floating/Hover):** Extra-diffused, low-opacity shadows (e.g., `box-shadow: 0 12px 32px rgba(93, 64, 55, 0.08)`). The shadow color should be a tint of the primary Umber, not pure black, to keep the look warm and natural.
4.  **Overlays:** High-blur backdrop filters (10px - 15px) for modals and navigation drawers to maintain context while focusing the user's attention.

## Shapes

The shape language is **Soft** and architectural. While furniture often has organic curves, the interface should provide a structured frame. 

- Use **0.25rem (4px)** for standard components like input fields and small buttons.
- Use **0.5rem (8px)** for product cards and featured containers. 
- Avoid fully rounded "pill" shapes, as they lean too casual for this premium aesthetic. Sharp corners (0px) may be used for hero images to create a more "framed" art-gallery look.

## Components

- **Buttons:** Primary CTAs use the Ochre Sun background with Deep Black text. They should have a subtle hover state that slightly deepens the yellow. Secondary buttons are outlined in Umber with no fill.
- **Input Fields:** Use a "minimalist floating label" style. Only a bottom border or a very faint 4-sided border in light taupe.
- **Product Cards:** No borders. Use a full-bleed image on a subtle Ecru background. Product titles in EB Garamond (Headline-SM) and prices in Hanken Grotesk (Body-MD).
- **Chips/Filters:** Small, rectangular with a 2px radius. Active states use a solid Umber fill with white text.
- **Navigation:** Top-tier navigation uses Label-MD typography. Hover states should use a simple, thin underline transition rather than a color change.
- **Lists:** High-density lists (like a cart) should use fine 1px dividers in a light beige, ensuring the Umber text remains the focal point.