# gov-au-ui-kit
[![CircleCI](https://circleci.com/gh/AusDTO/gov-au-ui-kit.svg?style=svg)](https://circleci.com/gh/AusDTO/gov-au-ui-kit)

GOV.AU SCSS UI framework, using Bourbon and Neat.

The GOV.AU Design Guide will document this framework.

## Introduction

This is a framework building a standardised, accessible look and feel for GOV.AU projects.

The framework uses [Bourbon](https://github.com/thoughtbot/bourbon) (sass mixin library) and [Neat](https://github.com/thoughtbot/neat) (lightweight grid framework).

## Browser Support

The UI components are built on a solid HTML foundation, progressively enhanced to provide core experiences across browsers. All users get critical information and experiences. New browsers get the prettiest experiences, while older browsers get less pretty, but usable ones. If JavaScript fails, users will still get a robust HTML foundation.

## Development

We provide the scss files directly in `assets/sass`.

We also have a build process for the development of the framework which uses node.

### Dependencies

We use Bourbon 4.2.7, and we include its scss files directly rather than calling it via its node package. Bourbon and Neat live under `/assets/sass/vendor`.

- gulp ^3.9.1
- gulp-sass: ^2.3.1
- gulp-sass-lint: ^1.1.1
- gulp-cssnano: ^2.1.2
- gulp-sourcemaps: ^1.6.0
- gulp-rename: ^1.2.2
- sass-lint: ^1.7.0
- kss: ^3.0.0-beta.14

`^` = *compatible with version* (see [semver](https://docs.npmjs.com/misc/semver#caret-ranges-123-025-004)).

### Building

To just build the scss yourself, install the dependencies:

```
brew install npm
npm install
npm install -g gulp
```

And then run:

```
gulp
```

We have automated this, with a few additions:

- sass-lint for linting
- kss-node for auto-building a living style guide

This is available as a shell script at `bin/cibuild.sh`.

## Copyright & License

Copyright Digital Transformation Office. Licensed under the MIT license. See LICENSE file for more details.

## About the DTO

![](https://www.dto.gov.au/images/govt-crest.png "logo of the DTO")

UI-Kit is maintained and funded by the [Digital Transformation Office](https://www.dto.gov.au/).
