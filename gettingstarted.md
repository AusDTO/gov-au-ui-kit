![CircleCI build status](https://circleci.com/gh/AusDTO/gov-au-ui-kit.svg?style=shield)
# Getting Started

Start here if you are setting up a page for the first time. This guide provides information for setting the basic foundations to effectively use the CSS/SCSS framework.

### Features being used

- [Normalize](https://necolas.github.io/normalize.css/).
- [Bourbon](http://bourbon.io/), version 4.2.7.
- [Neat](http://neat.bourbon.io/), and settings for a grid framework with some good defaults.

For a full list of features please see the [CHANGELOG](CHANGELOG.md).

### Dependencies

We use Bourbon 4.2.7. We include its `.scss` files directly rather than calling it via its node (or gem) package. Bourbon and Neat live under `/assets/sass/vendor`.

Some of the key libraries we use are:
- `gulp ^3.9.1`
- `gulp-sass ^2.3.1`
- `kss ^3.0.0-beta.14`
- `sass-lint ^1.7.0`

`^` = compatible with version (see [semver](https://docs.npmjs.com/misc/semver#caret-ranges-123-025-004)).


### Browser support

Our components are built on a solid HTML foundation, opting on a [philosophy of progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement) (as opposed to [graceful degradation](https://en.wikipedia.org/wiki/Fault_tolerance)).

We intend to support Internet Explorer 8+.

We will provide precise version support information in the future.

### Get the framework

You can include the lean and frugal CSS/SCSS framework in your project in one of two ways:

**Link to as a precompiled minified file**

```
<link rel="stylesheet" type="text/css" href="https://gov-au-ui-kit.apps.staging.digital.gov.au/latest/ui-kit.min.css"/>
```

**Download and include the complete SCSS framework**

This way you can access framework's variables and mixins

```
@import url('https://gov-au-ui-kit.apps.staging.digital.gov.au/latest/_ui-kit.scss');
```


### Build the Guide yourself

We have a build process for the development of the framework which uses gulp on node.js.

To build it yourself, begin by installing the system dependencies:
- Node.js v5.0.0

Install node package dependencies:

```
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


### Releases

See [RELEASING.md](RELEASING.md) and [CHANGELOG.md](CHANGELOG.md).

We aim to provide stable, usable releases at the end of each sprint.

### Deprecation

We are wary about breaking changes. We will work to ensure we will gracefully deprecate any changes that cause things to break.

### Installer/wrapper

We may create an installer wrapper (likely node-based), or release via git submodules.
