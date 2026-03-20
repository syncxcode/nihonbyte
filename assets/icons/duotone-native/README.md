# NihonByte Duotone Native Icon Pack (v1)

Full-color SVG icons for a native Android-like look.

## Included

- Menu cards:
  - `menu-huruf-scroll.svg`
  - `menu-bentuk-kata-kerja.svg`
  - `menu-bentuk-kata-sifat.svg`
  - `menu-ungkapan.svg`
  - `menu-grammar-open-book.svg`
  - `menu-kotoba-tags.svg`
- Sidebar / bottom nav:
  - `nav-flashcard-stack.svg`
  - `nav-latihan-target.svg`
  - `nav-belajar-open-book.svg`
  - `nav-favorit-heart.svg`
  - `nav-dukung-hand-heart.svg`
  - `nav-dashboard-gauge.svg`

## Principles

- All icons are full-color/twotone in the SVG source.
- No forced black-only icon base.
- 64x64 viewBox for consistent scaling.

## Quick Web Usage

```html
<img src="./assets/icons/duotone-native/menu-grammar-open-book.svg" alt="Grammar" width="28" height="28">
```

## Android Export Notes

- Keep source SVG untouched.
- Convert via your preferred VectorDrawable pipeline at build time.
- Use 24dp for nav icons and 28dp for menu card icons.
