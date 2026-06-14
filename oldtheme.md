@import "tailwindcss";

:root {
  --surface: #fcf9f8;
  --surface-dim: #dcd9d9;
  --surface-bright: #fcf9f8;
  --surface-container-lowest: #ffffff;
  --surface-container-low: #f6f3f2;
  --surface-container: #f0eded;
  --surface-container-high: #eae7e7;
  --surface-container-highest: #e5e2e1;
  --on-surface: #1c1b1b;
  --on-surface-variant: #504441;
  --inverse-surface: #313030;
  --inverse-on-surface: #f3f0ef;
  --outline: #827470;
  --outline-variant: #d4c3be;
  --surface-tint: #77574d;

  --primary: #442a22;
  --on-primary: #ffffff;
  --primary-container: #5d4037;
  --on-primary-container: #d4ada1;
  --inverse-primary: #e7bdb1;

  --secondary: #795900;
  --on-secondary: #ffffff;
  --secondary-container: #fec330;
  --on-secondary-container: #6f5100;

  --tertiary: #303221;
  --on-tertiary: #ffffff;
  --tertiary-container: #474836;
  --on-tertiary-container: #b6b7a0;

  --error: #ba1a1a;
  --on-error: #ffffff;
  --error-container: #ffdad6;
  --on-error-container: #93000a;

  --primary-fixed: #ffdbd0;
  --primary-fixed-dim: #e7bdb1;
  --on-primary-fixed: #2c160e;
  --on-primary-fixed-variant: #5d4037;

  --secondary-fixed: #ffdfa0;
  --secondary-fixed-dim: #f8bd2a;
  --on-secondary-fixed: #261a00;
  --on-secondary-fixed-variant: #5c4300;

  --tertiary-fixed: #e4e4cc;
  --tertiary-fixed-dim: #c8c8b0;
  --on-tertiary-fixed: #1b1d0e;
  --on-tertiary-fixed-variant: #474836;

  --background: #fcf9f8;
  --on-background: #1c1b1b;

  --surface-variant: #e5e2e1;

  --shadow-floating: 0 12px 32px rgba(93, 64, 55, 0.08);
}

@theme inline {
  --color-surface: var(--surface);
  --color-surface-dim: var(--surface-dim);
  --color-surface-bright: var(--surface-bright);
  --color-surface-container-lowest: var(--surface-container-lowest);
  --color-surface-container-low: var(--surface-container-low);
  --color-surface-container: var(--surface-container);
  --color-surface-container-high: var(--surface-container-high);
  --color-surface-container-highest: var(--surface-container-highest);
  --color-on-surface: var(--on-surface);
  --color-on-surface-variant: var(--on-surface-variant);
  --color-inverse-surface: var(--inverse-surface);
  --color-inverse-on-surface: var(--inverse-on-surface);
  --color-outline: var(--outline);
  --color-outline-variant: var(--outline-variant);
  --color-surface-tint: var(--surface-tint);
  --color-primary: var(--primary);
  --color-on-primary: var(--on-primary);
  --color-primary-container: var(--primary-container);
  --color-on-primary-container: var(--on-primary-container);
  --color-inverse-primary: var(--inverse-primary);
  --color-secondary: var(--secondary);
  --color-on-secondary: var(--on-secondary);
  --color-secondary-container: var(--secondary-container);
  --color-on-secondary-container: var(--on-secondary-container);
  --color-tertiary: var(--tertiary);
  --color-on-tertiary: var(--on-tertiary);
  --color-tertiary-container: var(--tertiary-container);
  --color-on-tertiary-container: var(--on-tertiary-container);
  --color-error: var(--error);
  --color-on-error: var(--on-error);
  --color-error-container: var(--error-container);
  --color-on-error-container: var(--on-error-container);
  --color-primary-fixed: var(--primary-fixed);
  --color-primary-fixed-dim: var(--primary-fixed-dim);
  --color-on-primary-fixed: var(--on-primary-fixed);
  --color-on-primary-fixed-variant: var(--on-primary-fixed-variant);
  --color-secondary-fixed: var(--secondary-fixed);
  --color-secondary-fixed-dim: var(--secondary-fixed-dim);
  --color-on-secondary-fixed: var(--on-secondary-fixed);
  --color-on-secondary-fixed-variant: var(--on-secondary-fixed-variant);
  --color-tertiary-fixed: var(--tertiary-fixed);
  --color-tertiary-fixed-dim: var(--tertiary-fixed-dim);
  --color-on-tertiary-fixed: var(--on-tertiary-fixed);
  --color-on-tertiary-fixed-variant: var(--on-tertiary-fixed-variant);
  --color-background: var(--background);
  --color-on-background: var(--on-background);
  --color-surface-variant: var(--surface-variant);

  --font-sans: var(--font-hanken-grotesk);
  --font-serif: var(--font-eb-garamond-sans);

  --radius-sm: 0.125rem;
  --radius: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
}

body {
  background: var(--background);
  color: var(--on-background);
  font-family: var(--font-hanken-grotesk), sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-eb-garamond-sans);
}

.display-lg {
  font-family: var(--font-eb-garamond-sans);
  font-size: 64px;
  font-weight: 500;
  line-height: 72px;
  letter-spacing: -0.02em;
}

.display-lg-mobile {
  font-family: var(--font-eb-garamond-sans);
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.01em;
}

.headline-md {
  font-family: var(--font-eb-garamond-sans);
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
}

.headline-sm {
  font-family: var(--font-eb-garamond-sans);
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
}

.body-lg {
  font-family: var(--font-hanken-grotesk);
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}

.body-md {
  font-family: var(--font-hanken-grotesk);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.label-md {
  font-family: var(--font-hanken-grotesk);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.05em;
}

.label-sm {
  font-family: var(--font-hanken-grotesk);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}
