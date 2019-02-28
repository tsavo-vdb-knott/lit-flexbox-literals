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
        <h1>0. Verticle Center Center</h1>
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
        <h1>1. Justfy Content Flex Start</h1>
        <h2>Top Left Start with Horizontal Flow</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>startJustified</li>
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
        <h1>2. Justfy Content Flex End.</h1>
        <h2>Aligned Left Start with Horizontal Flow</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>endJustified</li>
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
        <h1>3. Justfy Content Center</h1>
        <h2>Top Center</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>centeredJustified</li>
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
        <h1>4. Space Between</h1>
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
        <h1>5. Space Around</h1>
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
        <h1>6. Align-Items Flex Start</h1>
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
        <h1>7. Align-Items Flex End</h1>
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
        <h1>8. Align-Items Center</h1>
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
        <h1>9. Align-Items Stretch</h1>
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
        <h1>10. Align-Items Baseline</h1>
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
        <h1>11. Justfy Content Flex Start</h1>
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
        <h1>12. Justfy Content Flex End</h1>
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
        <h1>13. Justify-Content Center Verticle</h1>
        <h2>Top Start with Verticle Flow</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>selfCentered</li>
            <li>centerAligned</li>
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
        <h1>14. Justify Content Space-between</h1>
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
        <h1>15. Justify Content Space-around</h1>
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
        <h1>16. Align-Items Flex Start</h1>
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
        <h1>17. Align-Items Flex End</h1>
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
      <div class="demoGroup">
        <h1>18. Align-Items Center</h1>
        <h2>Lines items in center of parent container</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>centerAligned</li>
            <li>vertical</li>
          </ul>
        </h3>
        <div class="container18">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item1"></div>
          <div class="item1"></div>
        </div>
      </div>
      </br>
      </br>
      <h1>Note: The spaces are created using an invisible div. each item including the invisible has a flex value</h1>
      <div class="demoGroup">
        <h1>19. Vertical Layout Option</h1>
        <h2>Vertical row with end item</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>startAligned</li>
            <li>vertical</li>
          </ul>
        </h3>
        <div class="container19">
          <div class="item4"></div>
          <div class="item4"></div>
          <div class="item5"></div>
          <div class="item3"></div>
          <div class="item4"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>20. Horizontal Layout Option</h1>
        <h2>Horizontal row with end item</h2>
        <h3>
          <ul><title>Parent Css</title>
            <li>displayFlex</li>
            <li>startJustified</li>
            <li>Horizontal</li>
          </ul>
          <ul><title>Child Css</title>
            <li>flexFactor</li>
            <li>flexAuto</li>
          </ul>
        </h3>
        <div class="container20">
          <div class="item4"></div>
          <div class="item4"></div>
          <div class="item6"></div>
          <div class="item5"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>21. Horizontal Layout Option</h1>
        <h2>Horizontal row with end item</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>startJustified</li>
            <li>horizontal</li>
          </ul>
        </h3>
        <div class="container21">
          <div class="item4"></div>
          <div class="item4"></div>
          <div class="item5"></div>
          <div class="item3"></div>
          <div class="item4"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>22. Horizontal Layout Option</h1>
        <h2>Horizontal row with start item</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>endAligned</li>
            <li>horizontal</li>
          </ul>
        </h3>
        <div class="container22">
          <div class="item4"></div>
          <div class="item3"></div>
          <div class="item5"></div>
          <div class="item4"></div>
          <div class="item4"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>23. Horizontal Layout Option</h1>
        <h2>Horizontal row with end item</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>startJustified</li>
            <li>Horizontal</li>
          </ul>
        </h3>
        <div class="mainContainer">
        <div class="container23">
          <div class="item1"></div>
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item2"></div>
        </div>
        <div class="container24">
          <div class="item1"></div>
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item2"></div>
        </div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>25. Justfy Content Flex Start Center Aligned</h1>
        <h2>Middle Left Start with Horizontal Flow</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>startJustified</li>
            <li>centerAligned</li>
            <li>horizontal</li>
          </ul>
        </h3>
        <div class="container25">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item1"></div>
          <div class="item1"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>26. Aligned Right  with Horizontal Flow.</h1>
        <h2>Justfy Content Flex End</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>endJustified</li>
            <li>centerAligned</li>
            <li>horizontal</li>
          </ul>
        </h3>
        <div class="container26">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item1"></div>
          <div class="item1"></div>
        </div>
      </div>
      <div class="demoGroup">
        <h1>27. Middle Center</h1>
        <h2>Justfy Content Center</h2>
        <h3>
          <ul>
            <li>displayFlex</li>
            <li>centeredJustified</li>
            <li>centerAligned</li>
            <li>horizontal</li>
          </ul>
        </h3>
        <div class="container27">
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
