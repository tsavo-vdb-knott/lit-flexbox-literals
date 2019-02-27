import {LitElement, html} from 'lit-element';
import {styles} from './styles';

export class DemoComponent extends LitElement {
  constructor() {
    super();
  }
  static get is() {
    return 'demo-component';
  }
  static get styles() {
    return [styles];
  }
  render() {
    return html`
      <div class="demoGroup">
        <h1>Verticle Center Center</h1>
        <h2>One item center aligned and justified</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>centerAligned</li>
            <li>vertical</li>
            <li>centerJustified</li>
          </ul>
        </h3>
        <div class="container">
          <div class="item"></div>
        </div>
      </div>
      </br>
      </br>
      <div class="demoGroup">
        <h1>Top Left Start with Horizontal Flow.</h1>
        <h2>Justfy Content Flex Start</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>selfStart</li>
            <li>horizontal</li>
          </ul>
        </h3>
        <div class="container1">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item1"></div>
          <div class="item1"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>Aligned Left Start with Horizontal Flow.</h1>
        <h2>Justfy Content Flex End</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>selfEnd</li>
            <li>horizontal</li>
          </ul>
        </h3>
        <div class="container2">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item1"></div>
          <div class="item1"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>Top Center</h1>
        <h2>Justfy Content Center</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>selfCentered</li>
            <li>horizontal</li>
          </ul>
        </h3>
        <div class="container3">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item1"></div>
          <div class="item1"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>Space Between</h1>
        <h2>Equal space bwtween items</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>justified</li>
            <li>horizontal</li>
          </ul>
        </h3>
        <div class="container4">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item1"></div>
          <div class="item1"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>Space Around</h1>
        <h2>Equal space around items</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>AroundJustified</li>
            <li>horizontal</li>
          </ul>
        </h3>
        <div class="container5">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item1"></div>
          <div class="item1"></div>
        </div>
      </div>
    `;
  }
}

customElements.define(DemoComponent.is, DemoComponent);
