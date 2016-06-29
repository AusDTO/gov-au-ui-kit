# UI Kit Changelog

## UI Kit "Kraken"

### 1.0.0 - 2016-06-29

Guide MVP is now live ([1]).

Adds:

- Style guide
  - Guide now uses UI Kit styles throughout
  - 'Last Updated' added to UI Kit documentation
- Buttons
  - Guidance on how to apply button styling to `button` and `a` elements
- Colours
  - Colour palette swatches
  - Contrast guidance and accessibility compliance
  - Contextual colours & usage guidance
- Grid
  - Guidance on grid settings and page layout
  - Description of responsive breakpoints
  - Debugging with `$visual-grid: true;`
  - Accessibility guidance
- Navigation
  - Primary navigation (vertical sidebar)
  - Breadcrumbs
- Typography
  - Body font changed to Open Sans ([2])
  - Guidance on font and heading sizes
  - Callouts & blockquotes
  - Badges

Markup changes:

- Badge ([3]) variants now use BEM classnames (eg `badge--beta`)
- Callout ([4]) variant now use BEM classname (eg `callout--warning`)

## UI Kit "Rugby"

### 0.0.1 2016-06-22

Adds:

- vertical nav + responsiveness
- breadcrumbs
- 'badges'
- page header styles

Markup changes:

- page header and footer are targeted by their ARIA roles respectively
- nav markup changes to support responsiveness

Bugfixes:

- responsive page/grid padding fixes for tablet-desktop
- fixed private `npm` dependency problem

---

[1]: https://gov-au-ui-kit.apps.staging.digital.gov.au/
[2]: https://www.google.com/fonts/specimen/Open+Sans
[3]: https://gov-au-ui-kit.apps.staging.digital.gov.au/section-typography.html#kssref-typography-4-horizontal-vertical-rhythm-3-badges
[4]: https://gov-au-ui-kit.apps.staging.digital.gov.au/section-typography.html#kssref-typography-4-horizontal-vertical-rhythm-2-callouts-warnings
