# Browser support

## Introduction

The UI-Kit team needs to support all of our users, regardless of their device, web browser or other user agent.

Alongside accessibility, extensive browser and device support is a legal requirement under the <a href="https://www.legislation.gov.au/Details/C2016C00763" rel="external">Disability Discrimination Act (1992)</a>, requiring equal access to information on laws and government programs.

## Browser support matrix

The support levels will be revised when needed to better meet user needs.

We initially defined these levels using analytics data of various major *.gov.au sites.

| Browser        | Device       | Minimum version    | Support level  | Test status  |
|----------------|-----------------|-----------------|----------------|--------------|
| Chrome         | Desktop: ?      | 49              | Advanced       | Tested       |
| Firefox        | Desktop: ?      | 40              | Advanced       | Tested       |
| Edge           | Desktop         | -               | Advanced       | Untested     |
| IE             | Desktop         | 9+              | Advanced       | Untested     |
| IE             | Desktop         | <9              | Functional     | Untested     |
| Safari         | Desktop         | 8               | Advanced       | Untested     |
| iOS Safari     | iPhone?         | 8.4             | Advanced       | Untested     |
| Chrome Android | ?               | 51              | Advanced       | Untested     |
| IE Mobile      | ?               | 11              | Advanced       | Untested     |
| UC Browser     | ?               | 10.X            | Functional     | Untested     |

There are other browsers that have full or functional support.

## Unsupported browsers

We don’t list unsupported devices and browsers.

We are aiming for a solid HTML mobile-first foundation that provides functional support for the browsers and devices of all of our users.

## Functional support

* Accessible content.
* Users can complete critical tasks.
* Basic page design and layout, based on the simplest layout available to graphical browsers.
* Similar look and behaviour across all pages (performance will still vary across browsers).
* JavaScript and CSS not necessarily required.

As we perform browser testing we will provide component-specific documentation. This will specify what is critical and what provides advanced functionality.

## Advanced support

* All (or most) documented features.
* Advanced functionality and behaviour.
* Advanced design.

## Principles

1. Support basic access and functionality in the browsers and devices of all of our users.
2. Build a solid semantic HTML5 foundation — no CSS or JavaScript is required for basic content and functionality.
3. <a href="https://en.wikipedia.org/wiki/Progressive_enhancement" rel="external">Progressive enhancement</a> over <a href="https://en.wikipedia.org/wiki/Fault_tolerance" rel="external">graceful degradation</a> — building the basic foundation for the lowest common denominator then enhancing;  instead of a managed degraded experience for older browsers (fault tolerance).

We define ‘support’ both as:

- making things usable before they go live
- improving and fixing issues found in production environments.

We didn’t use a decision tree because:

- we can identify fully supported browsers and devices
- all other browsers and devices need graduated support.
