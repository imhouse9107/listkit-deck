# Dark Presentation Deck Design Research
## Actionable CSS values from Stripe, Linear, Vercel, and Apple

---

## 1. EXACT COLOR PALETTES

### Vercel (Geist Design System)
The most documented system. Pure black + white foundation, restrained by design.

```css
/* Backgrounds */
--bg-primary: #000000;
--bg-surface: #0A0A0A;     /* gray-950: cards, elevated surfaces */
--bg-raised: #171717;       /* gray-900: secondary surfaces */
--bg-input: #262626;        /* gray-800: inputs, interactive areas */

/* Gray ramp (dark theme) */
--gray-100: #F7F7F7;
--gray-200: #E5E5E5;
--gray-300: #D4D4D4;
--gray-400: #A3A3A3;
--gray-500: #737373;
--gray-600: #525252;
--gray-700: #404040;
--gray-800: #262626;
--gray-900: #171717;
--gray-950: #0A0A0A;

/* Text */
--text-primary: #FFFFFF;
--text-secondary: #A3A3A3;  /* gray-400 */
--text-tertiary: #737373;   /* gray-500 */

/* Accents */
--accent-blue: #0070F3;
--accent-error: #EE0000;
--accent-warning: #F5A623;

/* Borders */
--border-default: 1px solid rgba(255, 255, 255, 0.08);
--border-strong: 1px solid rgba(255, 255, 255, 0.15);
```

### Stripe (Embedded Components Dark Theme)
Navy-tinted darks, not neutral grays. Feels warmer than Vercel.

```css
/* Backgrounds */
--bg-primary: #14171D;       /* navy-tinted dark */
--bg-offset: #1B1E25;        /* slightly lighter */
--bg-button: #2B3039;        /* interactive surfaces */

/* Text */
--text-primary: #C9CED8;     /* warm light gray, NOT pure white */
--text-secondary: #8C99AD;   /* muted blue-gray */
--text-action: #C9CED8;

/* Accents */
--accent-primary: #0085FF;   /* bright blue */
--accent-brand: #635BFF;     /* Stripe purple */

/* Borders */
--border-default: #2B3039;

/* Status colors */
--success: #3EAE20;
--danger: #F23154;
--warning: #F27400;
--badge-success-bg: #152207;
--badge-danger-bg: #420320;

/* Overlay */
--overlay: rgba(0, 0, 0, 0.5);
```

### Linear
Near-black base, purple accent. LCH color space for perceptual uniformity.

```css
/* Backgrounds (dark theme) */
--bg-primary: #121212;
--bg-surface: #1B1C1D;      /* alt background / cards */
--bg-input: #171717;

/* Text */
--text-primary: #CCCCCC;    /* NOT white, soft warm gray */
--text-secondary: #888888;   /* estimated from their muted approach */

/* Accent */
--accent: #848CD0;           /* muted lavender-purple */

/* Brand accent (light mode) */
--accent-light: #8327C9;     /* vibrant purple, used sparingly in dark */
```

### Apple
Pure black base (OLED-optimized), minimal color. Depth through elevation.

```css
/* Backgrounds */
--bg-primary: #000000;       /* true black */
--bg-elevated: #161618;      /* first elevation */
--bg-surface: #212124;       /* second elevation */

/* Text */
--text-primary: #F5F5F7;    /* Apple's signature off-white */
--text-secondary: #818181;   /* medium gray */
--text-tertiary: rgba(245, 245, 247, 0.3);

/* Key insight: Apple softens white to #F5F5F7 to reduce
   contrast fatigue. This is the single most impactful
   dark-mode text color trick. */
```

### Recommended palette for your deck
Combining the best of all four:

```css
:root {
  /* Backgrounds - Vercel's pure black base with elevation layers */
  --deck-bg: #000000;
  --deck-surface: #0A0A0A;
  --deck-card: #141414;
  --deck-elevated: #1A1A1A;

  /* Text - Apple's off-white for primary, Stripe's warm secondary */
  --deck-text: #F5F5F7;
  --deck-text-secondary: #A0A0A0;
  --deck-text-muted: #666666;

  /* Accent - pick ONE */
  --deck-accent: #0070F3;       /* Vercel blue */
  /* --deck-accent: #635BFF; */  /* Stripe purple */
  /* --deck-accent: #848CD0; */  /* Linear lavender */

  /* Borders */
  --deck-border: rgba(255, 255, 255, 0.08);
  --deck-border-hover: rgba(255, 255, 255, 0.15);
}
```

---

## 2. TYPOGRAPHY

### Font choices by company
- **Vercel:** Geist Sans + Geist Mono
- **Linear:** Inter + Inter Display (headings)
- **Apple:** SF Pro Display + SF Pro Text (or system-ui on web)
- **Stripe:** Custom system stack

### The exact hierarchy that works

```css
/* Type scale (Vercel's system, validated across all four) */
.display    { font-size: 64px; line-height: 1.1;  letter-spacing: -0.04em; font-weight: 700; }
.h1         { font-size: 48px; line-height: 1.15; letter-spacing: -0.03em; font-weight: 700; }
.h2         { font-size: 32px; line-height: 1.2;  letter-spacing: -0.02em; font-weight: 600; }
.h3         { font-size: 24px; line-height: 1.3;  letter-spacing: -0.01em; font-weight: 600; }
.body-lg    { font-size: 18px; line-height: 1.6;  letter-spacing: -0.01em; font-weight: 400; }
.body       { font-size: 16px; line-height: 1.6;  letter-spacing: 0;       font-weight: 400; }
.caption    { font-size: 14px; line-height: 1.5;  letter-spacing: 0;       font-weight: 400; }
.overline   { font-size: 12px; line-height: 1.5;  letter-spacing: 0.05em;  font-weight: 500; text-transform: uppercase; }

/* Font stack for your deck */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
```

### Critical typography rules for dark backgrounds
1. **Never go below font-weight 400** on dark backgrounds. Thin/light weights (100-300) become invisible.
2. **Negative letter-spacing on headings** (-0.02em to -0.04em) is what makes them feel premium.
3. **Line-height 1.1 for display, 1.6 for body.** Tight headings + generous body = professional rhythm.
4. **Use font-weight 600 (semibold) for H2/H3**, not bold (700). Subtler differentiation.
5. **Overline labels at 12px, uppercase, 0.05em tracking** create hierarchy without size.

---

## 3. GRADIENT TECHNIQUES

### Stripe's mesh gradient (the gold standard)
Stripe does NOT use CSS gradients. They use WebGL on a canvas element for performance.

```css
/* CSS variable colors that feed the WebGL shader */
#gradient-canvas {
  width: 100%;
  height: 100%;
  --gradient-color-1: #6ec3f4;  /* sky blue */
  --gradient-color-2: #3a3aff;  /* electric blue */
  --gradient-color-3: #ff61ab;  /* hot pink */
  --gradient-color-4: #E63946;  /* coral red */
}
```

For a presentation deck, you do not need WebGL. CSS approximations work well for static/subtle animation.

### CSS-only mesh gradient approximation

```css
.gradient-bg {
  background: #000000;
  position: relative;
  overflow: hidden;
}

.gradient-bg::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(110, 195, 244, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(99, 91, 255, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 60% 80%, rgba(255, 97, 171, 0.10) 0%, transparent 50%);
  filter: blur(60px);
  z-index: 0;
}
```

### Linear-style angular glow

```css
.linear-glow {
  background: #000000;
  position: relative;
}

.linear-glow::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: conic-gradient(
    from 0deg,
    #08AEEA,
    #2AF598,
    #FF5ACD,
    #08AEEA
  );
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.3;
  z-index: 0;
}
```

### Subtle top-glow (good for deck slides)

```css
.slide {
  background:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 112, 243, 0.15) 0%, transparent 100%),
    #000000;
}
```

### Animated gradient (subtle, performant)

```css
@keyframes gradient-shift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animated-gradient {
  background: linear-gradient(-45deg, #0A0A0A, #0F1922, #120F1F, #0A0A0A);
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
}
```

---

## 4. GLASSMORPHISM / CARD DESIGN

### The premium values (tested across all four companies)

```css
/* Premium glass card */
.card-glass {
  background: rgba(255, 255, 255, 0.03);     /* barely visible fill */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 32px;
}

/* Slightly more visible card (for content cards) */
.card-surface {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 32px;
}

/* Hover state */
.card-surface:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.12);
}
```

### What makes glass look cheap vs premium

| Cheap | Premium |
|-------|---------|
| `backdrop-filter: blur(40px)` | `backdrop-filter: blur(5px)` to `blur(12px)` |
| `background: rgba(255,255,255,0.3)` | `background: rgba(255,255,255,0.03)` to `0.05` |
| `border: 1px solid rgba(255,255,255,0.3)` | `border: 1px solid rgba(255,255,255,0.06)` |
| Colored/tinted glass fills | Neutral white-alpha fills only |
| Glass on flat backgrounds | Glass over gradients (needs variation behind it) |
| Rounded corners 20px+ | 8px to 12px radius |

### Vercel-style solid card (no glass)

```css
.card-vercel {
  background: #0A0A0A;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 24px;
  transition: border-color 150ms ease;
}

.card-vercel:hover {
  border-color: rgba(255, 255, 255, 0.15);
}
```

---

## 5. SPACING AND RHYTHM

### The system (base-4, used by Vercel)

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;
}
```

### Deck-specific spacing

```css
/* Slide padding */
.slide {
  padding: 64px 96px;           /* generous outer margins */
}

/* Section spacing */
.section + .section {
  margin-top: 96px;             /* 96-128px between major sections */
}

/* Heading to body gap */
.heading + .body {
  margin-top: 16px;             /* tight coupling */
}

/* Body to CTA gap */
.body + .cta {
  margin-top: 32px;
}

/* Card grid */
.card-grid {
  display: grid;
  gap: 24px;                    /* 24px between cards */
  grid-template-columns: repeat(3, 1fr);
}

/* Inside cards */
.card {
  padding: 32px;                /* 32px internal padding */
}
```

### The breathing room principle
- **Outer padding should be 2x-3x inner padding.** If card padding is 32px, slide padding should be 64-96px.
- **Vertical spacing between sections should be 3x-4x the spacing between elements within a section.** If heading-to-body is 16px, section-to-section is 64-96px.
- **Dark UIs need MORE whitespace than light UIs.** Add 25% more than feels right.

---

## 6. WHAT SEPARATES 6/10 FROM 10/10

### The 7 mistakes that make dark UIs look amateur

**1. Pure black (#000000) background with pure white (#FFFFFF) text**
Creates "halation" where white text bleeds into the black background. Apple is the only company that uses true black, and they offset it with #F5F5F7 text (not pure white). For a safer approach, use #0A0A0A with #F5F5F7.

**2. Too many accent colors**
Stripe, Vercel, and Linear all use ONE accent color max per viewport. Every additional color reduces perceived quality.

**3. Uniform surface colors (no elevation)**
Premium dark UIs have 3-4 background levels:
- Level 0: #000000 (page)
- Level 1: #0A0A0A (sections)
- Level 2: #141414 (cards)
- Level 3: #1A1A1A (overlays/modals)

**4. Borders that are too visible**
`rgba(255, 255, 255, 0.08)` is the sweet spot. Anything above 0.15 looks like a wireframe.

**5. Not enough spacing**
The #1 giveaway of amateur dark UI. Dark backgrounds amplify crowding. Apply the 25% rule: take what feels right, then add 25%.

**6. Thin font weights on dark backgrounds**
Font-weight 300 or less disappears. Minimum 400 for body, 600 for headings.

**7. Gradients that are too saturated**
Keep gradient opacity between 0.08 and 0.15 for ambient effects. Above 0.20 starts looking like a gaming website.

### The 5 things that make it 10/10

1. **Negative letter-spacing on headings** (-0.02em to -0.04em). Instant premium feel.
2. **One subtle gradient glow** behind the hero, not on every element.
3. **Micro-interactions on borders** (0.08 resting, 0.15 hover, 150ms transition).
4. **Consistent spacing scale** where every value is a multiple of 4 or 8.
5. **Type hierarchy doing the heavy lifting.** If your design looks good without any color or decoration, just in grayscale type on black, it is a 10/10 foundation.

---

## QUICK-START: FULL SLIDE TEMPLATE

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  /* Palette */
  --bg: #000000;
  --surface: #0A0A0A;
  --card: #141414;
  --text: #F5F5F7;
  --text-secondary: #A0A0A0;
  --text-muted: #666666;
  --accent: #0070F3;
  --border: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.15);

  /* Spacing */
  --slide-pad: 80px;
  --section-gap: 96px;
  --element-gap: 24px;

  /* Type */
  --font: 'Inter', -apple-system, system-ui, sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.slide {
  min-height: 100vh;
  padding: var(--slide-pad);
  position: relative;
}

/* Hero glow */
.slide--hero {
  background:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 112, 243, 0.12) 0%, transparent 100%),
    var(--bg);
}

.display {
  font-size: 64px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--text);
}

.subtitle {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-top: 16px;
  max-width: 600px;
}

.overline {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 12px;
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 32px;
  transition: border-color 150ms ease;
}

.card:hover {
  border-color: var(--border-hover);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: var(--element-gap);
}
```

---

## SOURCES
- Stripe Appearance API dark theme variables (docs.stripe.com)
- Vercel Geist Design System (vercel.com/geist/colors)
- Linear.style theme tokens (linear.style)
- Stripe gradient technique (kevinhufnagl.com)
- Vercel design system breakdown (seedflip.co)
- Apple dark mode palette (color-hex.com/color-palette/99159)
- 50 Shades of Dark Mode Gray (blog.karenying.com)
- Dark Mode Design That Doesn't Look AI (dev.to/raxxostudios)
- Linear style design origins and techniques (medium.com/design-bootcamp)
- Dark glassmorphism 2026 (medium.com/@developer_89726)
