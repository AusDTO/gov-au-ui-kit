# gov-au-ui-kit
[![CircleCI](https://circleci.com/gh/AusDTO/gov-au-ui-kit.svg?style=svg)](https://circleci.com/gh/AusDTO/gov-au-ui-kit)

GOV.AU SCSS UI framework, using Bourbon and Neat. It provides:

- normalize
- a lightweight, extensible grid framework, with some good defaults
- basic styling for content with some basic typographic defaults
- basic styling for UI elements (e.g. `input`).

The GOV.AU Design Guide will document this framework.

## Introduction

This is a framework building a standardised, accessible look and feel for GOV.AU projects.

The framework uses [Bourbon](https://github.com/thoughtbot/bourbon) (sass mixin library) and [Neat](https://github.com/thoughtbot/neat) (lightweight grid framework).

## Browser Support

The UI components are built on a solid HTML foundation, progressively enhanced to provide core experiences across browsers. All users get critical information and experiences. New browsers get the prettiest experiences, while older browsers get less pretty, but usable ones. If JavaScript fails, users will still get a robust HTML foundation.

## Development

This framework is in active development.

**Releases:** we are currently in pre-release stage (early June).

**Usage:** we have, and are seeking more early users. Contact us on slack:

- @maxious
- @klepas

### Assets

We provide the scss files directly in `assets/sass`.

We also have a build process for the development of the framework which uses gulp on node.js (see *§ Building* below).

### Roadmap

Goal: build a lean and frugal CSS/SCSS framework to make building gov.au easier. It should provide base consistency, allow for easier rapid prototyping directly in the browser, and shouldn't get in the way of customised design needs.

#### Releases

We want to provide stable, usable releases at the end of each sprint.

We are wary about the possibility of breaking changes, and will work to ensure if anything does change that can cause things to break that we will try to gracefully deprecate them.

We may investigate creating an installer wrapper, or releasing via git submodules.

#### Milestones

1st milestone is to meet the general look and feel of the gov.au alpha. This allows us to establish the basics of the framework while meeting a relatively-easily met, static target.

2nd milestone is to iterate from there in two ways:

1. iterate on the look and feel under the direction of the designers from the guides team
2. include styling for commonly used and requested things that builders from other teams need.

#### Immediate priorities

- provide UI styling for `input`, `label`, etc.
- styling for other buttons, next/previous, etc.
- some sane basics for high level block elements inc. `main`, `article`, `header`, and `footer`
- styling for primary and secondary `nav`
- styling for calendars.

### Contributing

We welcome contributions! Please talk to us about what you're building so that we can make it easier for you.

Therefore, if you:

- spot a bug
- see good reason to include something from your codebase in our framework
- have an itch you want to scratch.

... come and talk to us.

Contributors should be familiar with the [Contributor Code of Conduct](https://github.com/AusDTO/gov-au-ui-kit/blob/master/code_of_conduct.md) and [Block Element Modifier conventions](http://getbem.com/)

### Linting

There is `scss-lint` validation which can also be [integrated in many text editors and IDEs](https://github.com/brigade/scss-lint/#editor-integration). We have also pulled in the KSS source in order to configure out build pipelines.

### Dependencies

We use Bourbon 4.2.7, and we include its scss files directly rather than calling it via its node package. Bourbon and Neat live under `/assets/sass/vendor`.

- gulp `^3.9.1`
- gulp-scss-lint `^0.4.0`
- gulp-cssnano `^2.1.2`
- gulp-sourcemaps `^1.6.0`
- gulp-rename `^1.2.2`
- gulp-gitversion `^0.0.8`
- kss `^3.0.0-beta.14`

`^` = *compatible with version* (see [semver](https://docs.npmjs.com/misc/semver#caret-ranges-123-025-004)).

### Building

To just build the scss yourself, install the dependencies:

```
gem install scss_lint scss_lint_reporter_checkstyle
brew install npm
npm install
npm install -g gulp
```

And then run:

```
gulp
```

We have automated this, with a few additions:

- `scss-lint` for linting
- `kss-node` for auto-building a living style guide

This is available as a shell script at `bin/cibuild.sh`.

## Copyright & License

Copyright Digital Transformation Office. Licensed under the MIT license. See `LICENSE` file for more details.

This repo includes [Bourbon](http://bourbon.io/), [Neat](http://neat.bourbon.io/), and [Normalize.css](https://necolas.github.io/normalize.css/), which all also use the MIT license.

## About the DTO

![](https://www.dto.gov.au/images/govt-crest.png "logo of the DTO")

UI-Kit is maintained and funded by the [Digital Transformation Office](https://www.dto.gov.au/).
