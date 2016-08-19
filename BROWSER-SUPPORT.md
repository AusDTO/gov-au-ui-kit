# Browser support matrix (draft)

The UI-Kit team needs to support all of our users, regardless of their device, web browser or other user agent.

The support levels will be revised when needed to better meet user needs.

We initially defined these levels using Australia.gov.au analytics data.

| Browser        | Device       | Minimum version | Support level   | Test status  |
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

There are other browsers that have full or functional support.

## Unsupported browsers
We don't list unsupported devices and browsers.

We are aiming for a solid HTML mobile-first foundation that provides functional support for the browsers and devices of all of our users.

## Functional support

* Accessible content.
* Users can complete critical tasks.
* Basic page design and layout, based on the simplest layout available to graphical browsers.
* Similar look and behaviour across all pages (performance will still vary across browsers).
* JavaScript and CSS not required.

As we perform browser testing we will provide component-specific documentation. This will specify what is critical and what provides advanced functionality.

## Full support

* All (or most) documented features.
* Advanced functionality and behaviour.

## Principles

1. Support basic access and functionality in the browsers and devices of all of our users.
2. Build a solid semantic HTML5 foundation &#8212; no CSS or JavaScript is required for basic content and functionality.
3. <a href="https://en.wikipedia.org/wiki/Progressive_enhancement" rel="external">Progressive enhancement</a> over <a href="https://en.wikipedia.org/wiki/Fault_tolerance" rel="external">graceful degradation</a> &#8212; building the basic foundation for the lowest common denominator then enhancing;  instead of a managed degraded experience for older browsers (fault tolerance).

We define 'support' as:
- making things usable before they go live
- improving and fixing issues found in production environments.

We didn't use a decision tree because:

- we can identify fully supported browsers and devices
- all other browsers and devices need graduated support.
