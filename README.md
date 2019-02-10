# Flex Box Literals and Classes for LitElements

##### \*\*Ported from @polymer/iron-flex-layouts, Configured for LitElement, LitHtml, and Constructable Style Sheets\*\*

## Usage With Classes

```js
import {LitElement, html} from 'lit-element';
import {Layouts} from 'lit-flexbox-literals';

class MyElement extends LitElement {
  static get styles() {
    return [Layouts];
  }

  render() {
    return html`
      <div class="layout horizontal center-center"></div>
    `;
  }
}
```

## Usage With Literals

```js
import {LitElement, html, css} from 'lit-element';
import {
  displayFlex,
  horizontal,
  centerAligned,
  centerJustified,
} from 'lit-flexbox-literals';

class MyElement extends LitElement {
  static get styles() {
    return css`
        :host{
          ${displayFlex}
          ${horizontal}
          ${centerAligned}
          ${centerJustified}

        }

        div{
          ${displayFlex}
          ${horizontal}
          ${centerAligned}
          ${centerJustified}
        }
      `;
  }

  render() {
    return html`
      <div></div>
    `;
  }
}
```
