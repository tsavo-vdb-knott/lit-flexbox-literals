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
        <h1>Justfy Content Flex Start</h1>
        <h2>Top Left Start with Horizontal Flow</h2>
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
      <div class="demoGroup">
        <h1>Align-Items Flex Start</h1>
        <h2>Lines items along top of parent container</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>startAligned</li>
            <li>horizontal</li>
          </ul>
        </h3>
        <div class="container6">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item1"></div>
          <div class="item1"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>Align-Items Flex End</h1>
        <h2>Lines items along bottom of parent container</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>endAligned</li>
            <li>horizontal</li>
          </ul>
        </h3>
        <div class="container7">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item1"></div>
          <div class="item1"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>Align-Items Center</h1>
        <h2>Lines items in center of parent container</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>centerAligned</li>
            <li>horizontal</li>
          </ul>
        </h3>
        <div class="container8">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item1"></div>
          <div class="item1"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>Align-Items Stretch</h1>
        <h2>Stretches items to fill parent container</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>selfStretch</li>
            <li>horizontal</li>
          </ul>
        </h3>
        <div class="container9">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item1"></div>
          <div class="item1"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>Align-Items Baseline</h1>
        <h2>Aligns items with the baseline of the items text</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>baseline</li>
            <li>horizontal</li>
          </ul>
        </h3>
        <div class="container10">
          <div class="item1"><h4>text</h4></div>
          <div class="item2"><h7>text</h7></div>
          <div class="item1"><h4>text</h4></div>
          <div class="item1"><h6>text</h6></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>Justfy Content Flex Start</h1>
        <h2>Top Left Start with Verticle Flow</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>selfStart</li>
            <li>vertical</li>
          </ul>
        </h3>
        <div class="container11">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item1"></div>
          <div class="item1"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>Justfy Content Flex End</h1>
        <h2>Top Left Start with Verticle Flow</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>selfEnd</li>
            <li>vertical</li>
          </ul>
        </h3>
        <div class="container12">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item1"></div>
          <div class="item1"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>Align-Items Center Verticle</h1>
        <h2>Top Start with Verticle Flow</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>selfCentered</li>
            <li>vertical</li>
          </ul>
        </h3>
        <div class="container13">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item1"></div>
          <div class="item1"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>Justify Content Space-between</h1>
        <h2>Space-between items vertically</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>justified</li>
            <li>vertical</li>
          </ul>
        </h3>
        <div class="container14">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item1"></div>
          <div class="item1"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>Justify Content Space-around</h1>
        <h2>Space-around items vertically</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>aroundJustified</li>
            <li>vertical</li>
          </ul>
        </h3>
        <div class="container15">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item1"></div>
          <div class="item1"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>Align-Items Flex Start</h1>
        <h2>Lines items along left side of parent container</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>startAligned</li>
            <li>vertical</li>
          </ul>
        </h3>
        <div class="container16">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item1"></div>
          <div class="item1"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>Align-Items Flex End</h1>
        <h2>Lines items along right side of parent container</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>endAligned</li>
            <li>vertical</li>
          </ul>
        </h3>
        <div class="container17">
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
