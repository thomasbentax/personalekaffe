---
agent: agent
description: Bentax design guide — farver, typografi, spacing og komponenter. Aktivér når du bygger HTML/CSS UI til en Bentax-prototype.
---

# Bentax Design Guide

## Farver

| Navn | Hex | Brug |
|---|---|---|
| Primary (mørk teal) | `#103B3D` | Navbar, footer, primærknapper |
| Primary Dark | `#0D3133` | Hover på primærfarve |
| Secondary (varm beige) | `#D5CEC4` | Baggrunde, sekundære elementer |
| Accent (orange) | `#D56729` | Call-to-action, fremhævning |
| Accent WCAG AA | `#BA5A24` | Orange tekst på lys baggrund |
| Komplementær-2 (varm grå) | `#61605C` | Sekundære knapper |
| Grå 1 | `#333333` | Brødtekst |
| Grå 2 | `#444444` | Sekundær tekst |
| Grå 3 | `#999999` | Pladsholder, deaktiveret |
| Grå 4 | `#EEEEEE` | Baggrunde, dividers |

```css
:root {
  --bs-primary: #103B3D;
  --bs-primary-dark: #0D3133;
  --bs-secondary: #D5CEC4;
  --bs-complementary-1: #D56729;
  --bs-complementary-2: #61605C;
  --tint-wai: #BA5A24;
  --bs-gray-1: #333333;
  --bs-gray-2: #444444;
  --bs-gray-3: #999999;
  --bs-gray-4: #EEEEEE;
}
```

## Typografi

| Rolle | Font | Vægt |
|---|---|---|
| Overskrifter (h1–h6) | `"Roboto", sans-serif` | 700 |
| Display / store titler | `"Andada Pro", serif` | 700 |
| Brødtekst | `"Roboto", sans-serif` | 400 |
| Ikoner | `"Material Symbols Rounded"` | 300 |

**Skriftstørrelser (desktop):**

| Element | Størrelse |
|---|---|
| h1 | 3.375rem |
| h2 | 3rem |
| h3 | 2.5rem |
| h4 | 2rem |
| h5 / h6 | 1.25rem |
| Body stor | 1.25rem |
| Body standard | 1rem |
| Body lille | 0.875rem |

```css
:root {
  --heading-font-family: "Roboto", sans-serif;
  --display-font-family: "Andada Pro", serif;
  --bs-body-font-family: "Roboto", sans-serif;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
}
```

**Google Fonts (`<head>`):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Andada+Pro:wght@700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
```

## Logo

- Fil: `assets/img/logo-bentax.svg` (orange, relativ sti fra rod)
- HTML: `<img src="assets/img/logo-bentax.svg" alt="Bentax logo">`
- Placer altid på mørk teal (`#103B3D`) baggrund.

## Spacing

```css
:root {
  --spacer: 1rem;
  --gutter: calc(var(--spacer) * 2);
}
```

- `--spacer` multipla (0.5×–3×) — no arbitrary px.
- Section padding: `3rem` → `4.5rem` → `6rem`.

## Knapper

```css
:root {
  --btn-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
}
/* Fælles */
border-radius: 0.375rem;
transition: all 0.3s ease;

/* Primær */
.btn-primary { background: #103B3D; color: #fff; }
.btn-primary:hover { background: #0D3133; }

/* Accent / CTA */
.btn-accent { background: #D56729; color: #fff; }

/* Outline */
.btn-outline { border: 2px solid #103B3D; background: transparent; color: #103B3D; }
```

## Øvrige

- **Overgange:** `transition: all 0.3s ease`
- **Box-shadow:** `0px 0px 8px rgba(0, 0, 0, 0.16)`
- **Border-radius:** `0.375rem` standard, `50%` for runde elementer
- **Labels / pre-headings:** `text-transform: uppercase; letter-spacing: 0.25em`
- **Footer:** Altid `background: #103B3D`, hvid tekst
- **Prototype-banner:** `background: #c0392b`, hvid tekst, tekst: `"PROTOTYPE — IKKE PRODUKTION"`
