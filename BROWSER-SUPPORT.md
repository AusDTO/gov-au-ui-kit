# Cross browser support

This is a draft.

## Guiding principles

UI-Kit is guided by 3 core philosophies:

1. support basic access and functionality in the browsers and devices of all users
2. build a solid, semantic HTML5 foundation
3. <a href="https://en.wikipedia.org/wiki/Progressive_enhancement" rel="external">progressive enhancement</a> over <a href="https://en.wikipedia.org/wiki/Fault_tolerance" rel="external">graceful degradation</a>.

We wish to avoid listing devices and/or browsers we provide no support for.

Because this is hard we build on a solid HTML foundation to ensure that if no CSS or JavaScript is run that the basic content and functionality of UI-Kit components remain accessible and functional.

From there we opt to progressively improve the look, functionality, and accessibility of components depending on the capabilities of user devices and browsers.

From these principles we propose a loose two-tier approach:

1. Full support
2. Basic support

## Browser support matrix

We defined these levels initially using Australia.gov.au analytics data.

This table will be revised when needed to better meet user needs.

| Browser        | Device: OS      | Minimum Version | Support | Tested   |
|----------------|-----------------|-----------------|---------|----------|
| Chrome         | Desktop: ?      | 49              | Full    | Tested   |
| Firefox        | Desktop: ?      | 40              | Full    | Tested   |
| Edge           | Desktop         | -               | Full    | Untested |
| IE             | Desktop         | 9+              | Full    | Untested |
| IE             | Desktop         | <9              | Basic   | Untested |
| Safari         | Desktop         | 8               | Full    | Untested |
| iOS Safari     | iPhone?         | 8.4             | Full    | Untested |
| Chrome Android | ?               | 51              | Full    | Untested |
| IE Mobile      | ?               | 11              | Full    | Untested |
| UC Browser     | ?               | 10.X            | ?       | Untested |

There are other browsers with full support.

## Full support

The closest to intended experience:

* all (or most) features documented in GOV.AU UI-Kit
* advanced functionality and behaviour.

## Basic support

Usually a fallback, using the simplest layout available to most graphical browsers:

* accessible content
* functionality to complete critical user tasks
* basic page design and layout
* similar look and behaviour across all pages
* JavaScript not required.

## Decision tree

We propose composing a decision tree flow chart to guide which of the two categories a device and/or browser may fall into.

Outside of technical considerations (eg knowing which browser fully supports a given HTML/CSS/JS feature), we cannot currently provide an opening question because we do not have clarity on our user needs.

One proposed opening question is (shameless nicked from the BBC):

> Is this the main browser on a strategically supported platform?

Which raises the question: what is a strategically supported platform?
