# gov-au-ui-core

GOV.AU SCSS UI framework, using Bourbon and Neat.

The GOV.AU Design Guide will document this framework.

## Introduction

This is a framework building a standardised, accessible look and feel for GOV.AU projects.

The framework uses [Bourbon](https://github.com/thoughtbot/bourbon) and [Neat](https://github.com/thoughtbot/neat).

## Using the UI framework

Temporary compiled CSS URL: http://content-style-guide.apps.staging.digital.gov.au/scss/styleguide.css

This version of the CSS has not yet been cleaned up fully. It also needs to be abstracted out of the content guide.

### Future

You will be able to the framework in one of two ways:

1. by inserting the compiled CSS into the HTML `head` of your project's app or website
2. by downloading the SCSS partials and integrating them into your codebase.

Option 1 is the easiest, and a slot-in approach. Ideally you should be inserting the CSS `link` as the first of any stylesheets.

Option 2 is likely what you want to do if you are building your own site or app. This way allows you to call any mixins, variables, etc. directly within your own custom stylesheet(s).

# About the DTO

![](https://www.dto.gov.au/images/govt-crest.png "logo of the DTO")

UI-core is maintained and funded by the [Digital Transformation Office](https://www.dto.gov.au/).

# README todos

- add requirements section (e.g. bourbon, neat, etc. and their versions)
- add installation section (installing dependencies & integrating into your project)
- document relationship to bitters & refills?
