# gov-au-ui-kit

GOV.AU SCSS UI framework, using Bourbon and Neat.

The GOV.AU Design Guide will document this framework.

## Introduction

This is a framework building a standardised, accessible look and feel for GOV.AU projects.

The framework uses [Bourbon](https://github.com/thoughtbot/bourbon) and [Neat](https://github.com/thoughtbot/neat).

## Development

We provide the SCSS files directly should you wish to `@import` them yourself.

We also have a build process for the development of the framework which uses node.

### Dependencies

We use Bourbon 4.2.7 (we include its SCSS files directly)

- gulp ^3.9.1
- gulp-sass: ^2.3.1
- sass-lint: ^1.7.0
- kss: ^2.4.0

`^` = compatible with version (see [semver](Compatible with version)).

### Building

To just build the SCSS yourself do:

```
brew install npm
npm install
npm install -g gulp
gulp
```

We have automated this, with a few additions:

- sass-lint for linting
- kss-node for the auto-building a living style guide

This is available as a shell script at `bin/cibuild.sh`.

## Copyright & License

Copyright Digital Transformation Office. Licensed under the MIT license. See LICENSE file for more details.

## About the DTO

![](https://www.dto.gov.au/images/govt-crest.png "logo of the DTO")

UI-Kit is maintained and funded by the [Digital Transformation Office](https://www.dto.gov.au/).
