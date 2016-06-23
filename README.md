# gov-au-ui-kit

[![CircleCI](https://circleci.com/gh/AusDTO/gov-au-ui-kit.svg?style=svg)](https://circleci.com/gh/AusDTO/gov-au-ui-kit)

## What is this?

gov-au-ui-kit is 3 things:

- draft design guide to build an accessible standardised look and feel for GOV.AU projects: http://gov-au-ui-kit.apps.staging.digital.gov.au/
- templates (to come)
- a lean and frugal CSS/SCSS framework (`assets/sass`) that you can
  - link to as a precompiled minified file:
  ```
  <link rel="stylesheet" type="text/css" href="//gov-au-ui-kit.apps.staging.digital.gov.au/latest/ui-kit.min.css"/>
  ```
  - download from https://gov-au-ui-kit.apps.staging.digital.gov.au/latest/_ui-kit.scss to use in your asset pipeline (this includes [Normalize](https://necolas.github.io/normalize.css/), [Bourbon](https://github.com/thoughtbot/bourbon) sass mixin library and the [Neat](https://github.com/thoughtbot/neat) lightweight grid framework).

Look at an [example page showing the full framework](https://gov-au-ui-kit.apps.staging.digital.gov.au/).

### Features & browser support

- Normalize (to make browsers render all elements more consistently).
- Lightweight extensible grid framework with some good defaults.
- Basic styling for content with some typographic defaults.
- Basic styling for UI elements (e.g. `input`).
- UI components build on solid HTML foundation. If JavaScript fails users will still get a robust HTML foundation.
- Progressively enhanced to provide core experiences across browsers. All users get critical information and an accessible site. Users with newer browsers get a better looking site.

## What this isn't

This is not yet a complete design system. This is the starting point that will develop with your help.

## Who is this for?

Teams building Australian Government sites. This was designed for GOV.AU teams, but we welcome use outside of federal government.

## How is this related to the Digital Service Standard?

The [Digital Service Standard](https://www.dto.gov.au/standard/) requires teams to [build services using common design patterns](https://www.dto.gov.au/standard/6-consistent-and-responsive/). This is draft work on the framework and guidance that will eventually become the design patterns for digital content.

You should use this with the [draft Content Style Guide](http://content-style-guide.apps.staging.digital.gov.au/) for Digital Transformation Office projects.

## <a name="building"></a>Build the scss yourself

Install dependencies:

```
gem install scss_lint scss_lint_reporter_checkstyle
brew install npm
npm install
npm install -g gulp
```

Run it:

```
gulp
```

We have automated this, with a few additions:

- `scss-lint` for [linting](https://en.wikipedia.org/wiki/Lint_(software))
- `kss-node` for auto-building a living style guide: http://warpspire.com/kss/

This is available as a shell script at `bin/cibuild.sh`.

### Errors

If you get `Fatal undefined` error, remember to set the Ruby version to 2.3.0. Most of us use rbenv:

```
$ rbenv local 2.3.0
```

or in rvm:

```
$ rvm use 2.3.0
```

### Dependencies

We use Bourbon 4.2.7. We include its scss files directly rather than calling it via its node package. Bourbon and Neat live under `/assets/sass/vendor`.

- "gulp": "^3.9.1",
- "gulp-autoprefixer": "^3.1.0",
- "gulp-cssnano": "^2.1.2",
- "gulp-gitversion": "^0.0.8",
- "gulp-html": "^0.4.4",
- "gulp-rename": "^1.2.2",
- "gulp-sass": "^2.3.1",
- "gulp-scss-lint": "^0.4.0",
- "gulp-sourcemaps": "^1.6.0",
- "gulp-util": "^3.0.7",
- "kss": "^3.0.0-beta.14",
- "sass-lint": "^1.7.0",
- "through2": "^2.0.1"

`^` = compatible with version (see [semver](https://docs.npmjs.com/misc/semver#caret-ranges-123-025-004)).

## Make gov-au-ui-kit better

- Create a new [GitHub issue](https://github.com/AusDTO/gov-au-ui-kit/issues/new), or comment on [existing issues](https://github.com/AusDTO/gov-au-ui-kit/issues).
- Contribute to this repository. You should understand the [Contributor Code of Conduct](https://github.com/AusDTO/gov-au-ui-kit/blob/master/code_of_conduct.md) and [our conventions](conventions.md), including [Block Element Modifier](http://getbem.com/), first.
- Contact us on slack in #govau-uikit.

## Roadmap

This framework is in active development.

Goal: build a lean and frugal CSS/SCSS framework to make building GOV.AU easier. It should:

- provide base consistency
- allow for easier rapid prototyping directly in the browser
- shouldn't get in the way of customised design needs.

**Releases:** see [RELEASING.md](RELEASING.md) and [CHANGELOG.md](CHANGELOG.md)

We aim to provide stable, usable releases at the end of each sprint.

We are wary about breaking changes. We will work to ensure we will gracefully deprecate any changes that cause things to break.

We may create an installer wrapper, or release via git submodules.

We have a build process for the development of the framework which uses gulp on node.js (see [Build the scss yourself](#building))

## Milestones

### 1st milestone

Meet the general look and feel of the gov.au alpha. This will allow us to establish the basics of the framework while meeting a relatively easily met static target.

We are focused on:

- provide UI styling for `input`, `label`, etc.
- styling for other buttons, next/previous, etc.
- some sane basics for high level block elements inc. `main`, `article`, `header`, and `footer`
- styling for primary and secondary `nav`
- styling for calendars.

### 2nd milestone

Iterate in 2 ways:

- look and feel under the direction of the designers from the GOV.AU Guides team
- styling for commonly used and requested things that builders from other Digital Transformation Office teams need.

## Copyright & license

Copyright Digital Transformation Office. [Licensed under the MIT license](https://github.com/AusDTO/gov-au-ui-kit/blob/master/LICENSE)).

This repository includes [Bourbon](http://bourbon.io/), [Neat](http://neat.bourbon.io/) and [Normalize.css](https://necolas.github.io/normalize.css/). All also use the MIT license.

![](https://www.dto.gov.au/images/govt-crest.png "logo of the DTO")

gov-au-ui-kit is maintained and funded by the [Digital Transformation Office](https://www.dto.gov.au/).
