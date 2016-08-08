# `gov-au-ui-kit`

![CircleCI build status](https://circleci.com/gh/AusDTO/gov-au-ui-kit.svg?style=shield) ![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg) ![Current Release](https://img.shields.io/github/release/AusDTO/gov-au-ui-kit.svg?maxAge=2592000)

## Disclaimer
GOV-AU UI-Kit is currently in early draft release. You can help us build it by [contributing](CONTRIBUTING.md).

We are being guided by accessibility and browser support best practices. We are building on a solid HTML foundation and following a philosophy of [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement) over [graceful degradation](https://en.wikipedia.org/wiki/Fault_tolerance).

We will start structured and more thorough accessibility and cross browser testing of the framework soon. We will then document the level of accessibility and browser compatibility.

We intend to support Internet Explorer 8+.

## What is this?

UI Kit (`gov-au-ui-kit`) is 3 things:

1. a draft design guide to build an accessible standardised look and feel for GOV.AU projects: [gov-au-ui-kit.apps.staging.digital.gov.au](http://gov-au-ui-kit.apps.staging.digital.gov.au/)
2. common-use templates (to come)
3. a lean and frugal CSS & JS framework (found in `assets/`) that you can
include in your project:

**Link to precompiled minified files**

```
<link rel="stylesheet" type="text/css" href="https://gov-au-ui-kit.apps.staging.digital.gov.au/latest/ui-kit.min.css"/>
<script type="text/javascript" src="https://gov-au-ui-kit.apps.staging.digital.gov.au/latest/ui-kit.min.js"></script>
```

### Features

- [Normalize](https://necolas.github.io/normalize.css/).
- [Bourbon](http://bourbon.io/), version 4.2.7.
- [Neat](http://neat.bourbon.io/), and settings for a grid framework with some good defaults.
- Basic styling for content with some good typographic coverage.
- Basic styling for UI elements (eg `input`, `label`, etc).

For a full list of features please see the [CHANGELOG](CHANGELOG.md).

## What this isn't

This is not yet a complete design or design system. This is the starting point that will develop with your help.

## Who is this for?

Teams building Australian Government sites. This was designed for GOV.AU teams, but we welcome use outside of federal government.

## How is this related to the Digital Service Standard?

The [Digital Service Standard](https://www.dto.gov.au/standard/) requires teams to [build services using common design patterns](https://www.dto.gov.au/standard/6-consistent-and-responsive/). This is draft work on the framework and guidance that will eventually become the design patterns for digital content.

You should use this with the [draft **Content Style Guide**](http://content-style-guide.apps.staging.digital.gov.au/) for Digital Transformation Office projects.

## Build the Guide yourself

We have a build process for the development of the framework which uses gulp on node.js.

To build it yourself, begin by installing the system dependencies:
- Node.js v5.0.0

Install node package dependencies:

```
npm -g install gulp
npm install
```

Run a build:

```
gulp build
```

The compiled style guide can be found at `./build/index.html` and the UI Kit CSS
at `./build/latest/ui-kit.css`.

We have automated the build, with a few additions:

- `sass-lint` for [linting](https://en.wikipedia.org/wiki/Lint_(software)
- `cssnano` for [CSS compression](http://cssnano.co/)
- `autoprefixer` for adding [CSS vendor prefixes](https://autoprefixer.github.io/)
- `AusDTO/gulp-html` for [HTML validation](https://github.com/AusDTO/gulp-html)
- `kss` for auto-building a [living style guide](http://warpspire.com/kss/)

Our CI build is available as a shell script at `bin/cibuild.sh`.

### Dependencies

We use Bourbon 4.2.7. We include its `.scss` files directly rather than calling it via its node (or gem) package. Bourbon and Neat live under `/assets/sass/vendor`.

Some of the key libraries we use are:
- `gulp ^3.9.1`
- `gulp-sass ^2.3.1`
- `kss ^3.0.0-beta.14`
- `sass-lint ^1.7.0`

`^` = compatible with version (see [semver](https://docs.npmjs.com/misc/semver#caret-ranges-123-025-004)).

## Make gov-au-ui-kit better

- Create a new [GitHub issue](https://github.com/AusDTO/gov-au-ui-kit/issues/new), or comment on [existing issues](https://github.com/AusDTO/gov-au-ui-kit/issues).
- Contribute to this repository. Please see [CONTRIBUTING.md](CONTRIBUTING.md), [Contributor Code of Conduct](code_of_conduct.md) and [our code Conventions](conventions.md), (also see [Block Element Modifier](http://getbem.com/)), first.
- Contact us on slack in `#govau-guide`.

## Project goal

This framework is in active development.

Goal: build a lean and frugal CSS/SCSS framework to make building GOV.AU easier. It should:

- provide base consistency
- allow for easier rapid prototyping directly in the browser
- should not get in the way of customised design needs.

### Releases

See [RELEASING.md](RELEASING.md) and [CHANGELOG.md](CHANGELOG.md).

We aim to provide stable, usable releases at the end of each sprint.

### Deprecation

We are wary about breaking changes. We will work to ensure we will gracefully deprecate any changes that cause things to break.

### Installer/wrapper

We may create an installer wrapper (likely node-based), or release via git submodules.

## Milestones

### 1st general goal

Meet the general look and feel of the [gov.au alpha](http://gov.au/alpha), with room for some improvements.

This will allow us to establish the basics of the framework while meeting a relatively easily met static target.

We are focused on:

- establishing the basic framework
- provide UI styling for `input`, `label`, etc
- styling for other buttons, next/previous, etc
- some sane basics for high level block elements inc. `main`, `article`, `header`, and `footer`
- styling for primary and secondary `nav`.

### Future… (coming roadmap)

Iterate in 2 ways:

- look and feel under the direction of the designers from the GOV.AU Guides team
- styling for commonly used and requested things that builders from other Digital Transformation Office teams need, including:
  - styling for calendars
  - styling for common web application elements
  - extensive testing
  - templates.

## Copyright & license

Copyright Digital Transformation Office. [Licensed under the MIT license](https://github.com/AusDTO/gov-au-ui-kit/blob/master/LICENSE).

This repository includes [Bourbon](http://bourbon.io/), [Neat](http://neat.bourbon.io/) and [Normalize.css](https://necolas.github.io/normalize.css/). All also use the MIT license.

![](https://www.dto.gov.au/images/govt-crest.png "logo of the DTO")

gov-au-ui-kit is maintained and funded by the [Digital Transformation Office](https://www.dto.gov.au/).
