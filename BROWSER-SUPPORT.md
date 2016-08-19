# Browser support

This is a late working draft.

There are a lot of different browsers and devices.

The UI-Kit team wishes to support all users according to their needs, regardless of user agent or browser technologies.

## Guiding principles

UI-Kit’s browser support strategy is guided by 3 core philosophies:

1. support basic access and functionality in the browsers and devices of all users
2. build a solid, semantic HTML5 foundation
3. <a href="https://en.wikipedia.org/wiki/Progressive_enhancement" rel="external">progressive enhancement</a> over <a href="https://en.wikipedia.org/wiki/Fault_tolerance" rel="external">graceful degradation</a>.

We wish to avoid listing devices and/or browsers we provide no support for. We believe we can provide graduated functional support for almost all browsers and devices used by Australians.

For this reason we build on a solid HTML foundation. It ensures that if no CSS or JavaScript is run that the basic content and functionality of UI-Kit components remain accessible and working.

From there we opt to progressively improve the look, functionality, and accessibility of components depending on the capabilities of user devices and browsers.

From these principles we propose a loose two-tier approach:

1. Full support
2. Functional support

## Full support

The closest to intended experience:

* all (or most) features documented in GOV.AU UI-Kit
* advanced functionality and behaviour.

## Functional support

Usually a fallback, using the simplest layout available to most graphical browsers:

* accessible content
* functionality to complete critical user tasks
* basic page design and layout
* similar look and behaviour across all pages
* JavaScript not required.

Different browsers in this category may (will) have differing results, but core functionality must not be degraded.

## Defining functional support

The UI-Kit team will provide more verbose information against each component in the UI-Kit in our styleguide documentation.

These additions will document which features are permissible to be graduated in look, functionality, etc. by explicitly listing which parts of a feature must be maintained.

This work requires explicit browser testing and will always be constrained by the technical limitations of that browser and device.

## Which category?

Initially we considered composing a decision tree flow chart to guide.

We have shelved this because:

- the UI-Kit team feels confident in identifying full-support browsers and devices;
- all other browsers and devices still deserve graduated support

## Browser support matrix

We defined these levels initially using Australia.gov.au analytics data.

This table will be revised when needed to better meet user needs.

| Browser        | Device: OS      | Minimum Version | Support    | Tested   |
|----------------|-----------------|-----------------|------------|----------|
| Chrome         | Desktop: ?      | 49              | Full       | Tested   |
| Firefox        | Desktop: ?      | 40              | Full       | Tested   |
| Edge           | Desktop         | -               | Full       | Untested |
| IE             | Desktop         | 9+              | Full       | Untested |
| IE             | Desktop         | <9              | Functional | Untested |
| Safari         | Desktop         | 8               | Full       | Untested |
| iOS Safari     | iPhone?         | 8.4             | Full       | Untested |
| Chrome Android | ?               | 51              | Full       | Untested |
| IE Mobile      | ?               | 11              | Full       | Untested |
| UC Browser     | ?               | 10.X            | ?          | Untested |

There are other browsers with full support, and many more with functional support.

## Terms

Support
: In the context of this document, refers to both making things usable before they go live, as well as improving and fixing issues found in production environments.

Progressive enhancement
: A strategy in web design and development that emphasises building basic foundations first geared to the lowest common denominator of browser functionality, and then extending from there to add functionality and enhancements.

Graceful degradation
: A strategy in technology design and development that emphasises fault-tolerance, where older browsers would receive a managed degraded experience.

User agent (or software agent)
: Software acting on behalf of a user (eg a web browser).
