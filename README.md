# gov-au-ui-kit
[![CircleCI](https://circleci.com/gh/AusDTO/gov-au-ui-kit.svg?style=svg)](https://circleci.com/gh/AusDTO/gov-au-ui-kit)

GOV.AU SCSS UI framework, using Bourbon and Neat.

The GOV.AU Design Guide will document this framework.

## Introduction

This is a framework building a standardised, accessible look and feel for GOV.AU projects.

The framework uses [Bourbon](https://github.com/thoughtbot/bourbon) (sass mixin library) and [Neat](https://github.com/thoughtbot/neat) (lightweight grid framework).

## Development

We provide the scss files directly in `assets/sass`. We also have a build process for the development of the framework which uses gulp on node.js.

There is scss-lint validation which can also be [integrated in many text editors and IDEs](https://github.com/brigade/scss-lint/#editor-integration). We have also pulled in the KSS source in order to configure out build pipelines.

Contributors should be familar with the [Contributor Code of Conduct](https://github.com/AusDTO/gov-au-ui-kit/blob/master/code_of_conduct.md) and [Block Element Modifier conventions](http://getbem.com/)

### Dependencies

We use Bourbon 4.2.7, and we include its scss files directly rather than calling it via its node package. Bourbon and Neat live under `/assets/sass/vendor`.

- gulp ^3.9.1
- gulp-scss-lint: ^0.4.0
- gulp-cssnano: ^2.1.2
- gulp-sourcemaps: ^1.6.0
- gulp-rename: ^1.2.2
- kss: ^3.0.0-beta.14

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

- scss-lint for linting
- kss-node for auto-building a living style guide

This is available as a shell script at `bin/cibuild.sh`.

## Copyright & License

Copyright Digital Transformation Office. Licensed under the MIT license. See LICENSE file for more details.

## About the DTO

![](https://www.dto.gov.au/images/govt-crest.png "logo of the DTO")

UI-Kit is maintained and funded by the [Digital Transformation Office](https://www.dto.gov.au/).
