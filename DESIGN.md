---
name: Vibrant Neo-Fintech
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#4f4252'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#817283'
  outline-variant: '#d3c1d4'
  surface-tint: '#9425bc'
  primary: '#8408ac'
  on-primary: '#ffffff'
  primary-container: '#a033c7'
  on-primary-container: '#fce0ff'
  inverse-primary: '#eeb0ff'
  secondary: '#a900a9'
  on-secondary: '#ffffff'
  secondary-container: '#fe00fe'
  on-secondary-container: '#500050'
  tertiary: '#005d38'
  on-tertiary: '#ffffff'
  tertiary-container: '#00784a'
  on-tertiary-container: '#8fffbf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fad7ff'
  primary-fixed-dim: '#eeb0ff'
  on-primary-fixed: '#330045'
  on-primary-fixed-variant: '#76009b'
  secondary-fixed: '#ffd7f5'
  secondary-fixed-dim: '#ffabf3'
  on-secondary-fixed: '#380038'
  on-secondary-fixed-variant: '#810081'
  tertiary-fixed: '#59fead'
  tertiary-fixed-dim: '#31e193'
  on-tertiary-fixed: '#002111'
  on-tertiary-fixed-variant: '#005231'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  margin-page: 20px
  gutter-card: 16px
  padding-card-v: 24px
  padding-card-h: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The brand personality is energetic, youthful, and transparent. It is designed to feel less like a traditional bank and more like a lifestyle companion. The target audience consists of digital natives who value speed, clarity, and a bit of playfulness in their financial tools.

The design style is **Minimalist with High-Contrast Accents**. It relies on vast amounts of white space and a clean layout to reduce cognitive load, while using "Electric Purple" and "Vibrant Pink" to draw focus to actionable elements. The use of 3D-inspired illustrations and soft gradients adds a layer of modern warmth to an otherwise clinical fintech aesthetic.

## Colors

This design system uses a high-contrast palette to distinguish between structural elements and interactive zones.

- **Primary (Electric Purple):** Used for main CTAs, active navigation states, and branding moments.
- **Secondary (Vibrant Pink):** Reserved for alternative actions or "Add Money" flows to create high visual urgency.
- **Tertiary (Bright Green):** Specifically for positive financial trends, interest rates, and "Live" indicators.
- **Neutral/Background:** A mix of pure white (#ffffff) for cards and a very soft gray (#f8f9fa) for page backgrounds to create subtle depth without shadows.
- **Pastels:** Soft, desaturated versions of the primary and secondary colors are used as background washes for category tiles and rewards cards.

## Typography

The typography system uses **Plus Jakarta Sans** exclusively to maintain a friendly yet professional tone.

- **Headlines:** Use Bold (700) weights with tight letter-spacing for page titles like "Banking" or "Explore."
- **Currency:** Large amounts should be displayed in `display-lg` with a Semi-Bold weight to ensure immediate recognition.
- **Body:** Use Medium (500) weight for primary information and Regular (400) for secondary descriptions to maintain a clear hierarchy.
- **Captions:** Smaller labels used in chips or category names should use a slightly heavier weight (Semi-Bold) to remain legible at small scales.

## Layout & Spacing

The layout philosophy follows a **Fluid Mobile Grid** with heavy emphasis on vertical stacking and airy margins.

- **Margins:** Standard side margins are set to 20px to prevent content from touching the screen edges.
- **Rhythm:** A 4px/8px baseline grid drives the spacing between elements. 
- **Card Layouts:** Cards use generous internal padding (24px vertical) to feel "premium" and spacious.
- **Reflow:** On smaller devices, horizontal "Explore" tiles should transition into a scrollable carousel to maintain their aspect ratio and legibility.

## Elevation & Depth

This system avoids heavy shadows, opting instead for **Tonal Layering** and **Ghost Outlines**.

- **Surface Tiers:** The background is a very light neutral, while cards are pure white. This 1-step tonal shift creates depth without visual clutter.
- **Shadows:** When used, shadows must be "Extra-diffused" with an opacity no higher than 4%. They should feel like a soft ambient glow rather than a hard drop shadow.
- **Borders:** Secondary containers (like the search bar or small chips) use a 1px solid border in a very light gray (#eeeeee) instead of elevation.
- **Active State:** Active elements may use a subtle inner glow or a color fill to indicate depth change.

## Shapes

The shape language is dominated by **Pill-shaped (Round-Full)** geometry.

- **Buttons:** All primary and secondary buttons must be fully rounded (pill-shaped).
- **Cards:** Main surface containers use a `rounded-xl` (24px) radius to feel friendly and approachable.
- **Icons Containers:** Small action icons (like those in the "Recharge" section) are housed in circular or highly rounded soft-square containers.
- **Selection States:** Checkboxes and radio buttons should also lean towards rounded profiles to match the overall aesthetic.

## Components

- **Primary Buttons:** High-saturation Electric Purple or Vibrant Pink fills. Text is always white and centered. Pill-shaped only.
- **Action Chips:** Small, fully rounded badges used for "Live Now" or "0 Fee" indicators. They use a light tint of the status color for the background and a high-contrast version for the text.
- **Cards:** White surfaces with 24px corner radius. They should feature a clear header, a large value (like balance), and an optional footer action.
- **Category Tiles:** Fixed-ratio squares with a soft pastel background and a centered linear icon.
- **Input Fields:** Search bars and text inputs are pill-shaped with a light gray border or a very soft gray fill.
- **Bottom Navigation:** A floating or fixed bar with thin-stroke linear icons. The active state is indicated by a color shift to the primary brand purple.
- **Transaction List:** Clean, edge-to-edge items with a circular brand icon on the left and a right-aligned value. Use `body-md` for the date and `body-lg` for the merchant name.