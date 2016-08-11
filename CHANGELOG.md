# UI Kit Changelog

## UI Kit "Kraken"

### `develop` as of 2016-08-08

#### Ui-kit changes

- Improved visibility of disabled text field inputs via greying-out.
- Refactored `_block-elements` partial, now named `_grid-layout` with `wrapper-padding` mixin.

#### Styleguide

- Updated markup documentation for skip links to use `nav` instead of `div` (does not break; targeted by the `.skip-to` class).
- Updated example pages `/examples` to better reflect GOV.AU layouts and highlight missing components.
- Updated documentation for `.local-nav` for `.is-active` and `.is-current` usage.
- Improvements to *§ Tables*.
- Code snippets displayed in `<pre>` elements now full-width.

#### Bugfixes

- Fixed [#170](https://github.com/AusDTO/gov-au-ui-kit/issues/170): Elaborate list view patterns have left alignment issues
- Fixed [#255](https://github.com/AusDTO/gov-au-ui-kit/issues/255): SVG's don't have `xml` tag

### 1.7.2 - 2016-08-02

UI-Kit changes:

- Style changes to Calendar Event Callout class `.callout--calendar-event` (documented under *§ Typography*).
- Hero content styles updated to reduce top and bottom padding.

Styleguide:

- Minor bugfixes (broken links, code blocks now have a height, etc.).

### 1.7.1 - 2016-08-01

Bugfixes:

- Fixed [#240](https://github.com/AusDTO/gov-au-ui-kit/issues/240): Menu toggles don't work in IE9.

### 1.7.0 - 2016-08-01

Styleguide:

- Added a disclaimer regarding accessibility and browser support.
- Updated Australian Coat of Arms image that appears in site footer

Bugfixes:

- Fixed [#232](https://github.com/AusDTO/gov-au-ui-kit/issues/232): local navigation mobile styling and chevron toggle displacement.
- Added a disclaimer regarding accessibility and browser support.
- Fixed [#230](https://github.com/AusDTO/gov-au-ui-kit/issues/230): Margins between vertical list items.
- Fixed [#203](https://github.com/AusDTO/gov-au-ui-kit/issues/203): Abstract style doesn't apply to nested paragraphs.
- Fixed [#227](https://github.com/AusDTO/gov-au-ui-kit/issues/227): No visual differentiation between h1 and .abstract on section page in mobile browser.

### 1.6.0 as of 2016-07-29

UI-Kit changes

- Added `.is-visuallyhidden` helper class to `_accessibility.scss` (`.visuallyhidden` to be deprecated in v2.0)
- Local navigation markup and style change
  - Now includes a semantically correct menu heading
  - Top level of navigation has new styles

Bugfixes:

- Fixed flexbox alignment on vertical list style final row.
- Fixed missing button styling for `input` of the types `submit` and `reset`.
- Fixed margin spacing after `.abstract` when used on a wrapping element.
- Fixed [#179](https://github.com/AusDTO/gov-au-ui-kit/issues/179): enlarges buttons at smaller breakpoints for easier clicking.
- Fixed [#165](https://github.com/AusDTO/gov-au-ui-kit/issues/165): default margins on buttons at mobile breakpoint.
- Header type and spacing fixes for `.site-title` and `.tagline`.
- Index links (`.index-links`) now support `ol`s.
- Removes further poor uses of `@extend` to clean up output CSS.

Styleguide:

- Typography section revised.

### 1.5.0 - 2016-07-28

#### UI-Kit changes

- Groups of links added (documented *§ Navigation*)
- Iconography (undocumented, experimental)
  -  Removed ui-kit-icons.css output file
  -  Added images.zip build output containing images used (`gulp build.prod`)

### 1.4.0 - 2016-07-27

#### UI-Kit changes

- Links and buttons:
  - Improved styling throughout, inc. on inverted colours (eg light text on darker bg).
  - Added `:focus` styles (identical to `:hover`).
  - Refactor of anchor styling into `_lists.scss` partial.
  - Adds an icon to anchors with `rel="external"`.
- Callouts: extends with a new class to highlight specific dates (`.callout--calendar-event`).
- Text input `type` `tel` support.
- New table style: calendar tables, for displaying a series of dates and their events (eg public holidays).
- Local nav (sidebar):
  - Now appears to the right of the main content space (not markup change required).
  - Toggle-able to the left (as previously) by applying `.sidebar-has-controls` to the `<main>` element.
- Typography overhaul:
  - Removes `margin-top` from most content elements (headings excluded).
  - Support for heading styles stripped back, now covering `h1` to `h4` and resized.
  - ‘Old’ headings retained and available when wrapped in a container with the class `.gov-speak` (demarcated for more complex typography, eg for annual reports).
  - Refactors numerous `@extends` to clean up CSS output + numerous minor code improvs.

#### Styleguide changes

Source references in the styleguide examples now link to the file & line in our GitHub repository. If you have feedback on our code please let get in touch. :)

We have also revised a number of our styleguide sections, simplifying them while adding explicit accessibility guidance under a common heading. Sections revised:

- Forms
- Accordions
- Tables

#### Other changes

Build environment:

- Compiles icons into separate SCSS partial (`assets/sass/ui-kit-icons.scss`) [undocumented, experimental]

### 1.3.0 - 2016-07-19

Adds or modifies:

- Colour palettes refactored to reflect updated colour usage (documented *§ Colours*)
- “See more” link styling (currently documented under *§ List views*).
- JS-powered smooth scrolling for anchors commencing with `#` locally on that page (documented *§ Navigation*).
- Vertical Lists now have an option to remove the top border (documented *§ List views*)
- Number support for `input`; make sure you use also use `type="number"`.
- Style changes to Local (primary) navigation.
- Style changes to the page footer.
- Accordions via the `details` and `summary` elements and documentation.
- Styling for keyboard (`kbd`) inline element (documented under *§ Typography*).
- Responsive video embeds (yet undocumented).
- UI Kit version number added to Guide home page.

Bugfixes:

- Fixed [#175](https://github.com/AusDTO/gov-au-ui-kit/issues/175) `gulp watch` or `serve` not picking up on asset changes
- Fixed [#171](https://github.com/AusDTO/gov-au-ui-kit/issues/171) Unused Open Sans weight 600
- Fixed [#156](https://github.com/AusDTO/gov-au-ui-kit/issues/156) Looping Gulp build [styleguide]
- Fixed [#159](https://github.com/AusDTO/gov-au-ui-kit/issues/159) Bouncing Local nav
- Fixed [#136](https://github.com/AusDTO/gov-au-ui-kit/issues/136) Guide home page Local nav active styles [styleguide]

### 1.2.0 - 2016-07-12

Adds or modifies:

- New & improved Table examples
- Minor style updates to List views
- Controls bar now includes a Contrast style
- Breadcrumbs now include an Inverted style
- Rename 'Primary navigation' to 'Local navigation'
- Global Navigation added
- Local navigation (ex. Primary navigation) has new JavaScript behaviour and changes to its markup pattern
- Updated instructions on how to include the CSS & JS Framework

Bugfixes:

- Fixed [#111](https://github.com/AusDTO/gov-au-ui-kit/issues/111) Single column layout width
- Fixed [#99](https://github.com/AusDTO/gov-au-ui-kit/issues/99) Breadcrumbs icon not showing up

### 1.1.0 - 2016-07-05

Adds or modifies:

- Forms
  - Added styled checkboxes and radio buttons
- Header and Footer
  - Ensured footer is pushed to the bottom of the screen even with short content
- List views
  - Added more styles for horizontal, vertical and small lists for use in main content area
- Tables
  - Added missing documentation on use of tables
- Navigation
  - Skip to main content links and documentation
- Font asset loading
  - Removed calling of webfonts via `@import`
  - Added [Google Web Font Loader](https://github.com/typekit/webfontloader) (see *&sect; Markup changes* below)
- Typography
  - Heading sizes scaled down
  - Added 700 font-weight to apply to some headings
  - Scale down body leading (`line-height`)
  - Increase spacing between list items
  - Added styles for `hr` element
- Responsive grid changes
  - Increased column gutter width
  - Increased number of columns for each breakpoint for more granular grid placements
  - Refactored responsive breakpoints to use `min-width` (mobile-first)

Bugfixes:

- Fixed [#122](https://github.com/AusDTO/gov-au-ui-kit/issues/122)
- Fixed [#102](https://github.com/AusDTO/gov-au-ui-kit/issues/102)

Markup changes:

- Add new `<script>` tag to load Google Web Font Loader into `<head>`

### 1.0.0 - 2016-06-30
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
