import {css} from 'lit-element';
import {
  displayBlock,
  displayFlex,
  vertical,
  centerAligned,
  centerJustified,
  startJustified,
  beteweenAlignedContent,
  aroundAlignedContent,
  aroundJustified,
  selfStart,
  selfEnd,
  justified,
  horizontal,
  verticalReverse,
  selfCenter,
} from '../../Literals';
export const styles = css`
  :host {
    ${displayBlock}
  }
  .demoGroup {
    ${displayFlex}
    ${vertical}
  }
  .container {
    ${displayFlex}
    ${centerAligned}
    ${centerJustified}
    ${vertical}
    border: 2px solid black;
    height: 250px;
    width: 100%;
  }
  .container1 {
    ${displayFlex}
    ${selfStart}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 100%;
  }
  .container2 {
    ${displayFlex}
    ${selfEnd}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 100%;
  }
  .container3 {
    ${displayFlex}
    ${selfCenter}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 100%;
  }
  .container4 {
    ${displayFlex}
    ${justified}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 100%;
  }
  .container5 {
    ${displayFlex}
    ${aroundJustified}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 100%;
  }
  .item {
    ${displayBlock}
    height: 50px;
    width: 50px;
    background-color: orange;
  }
  .item1 {
    ${displayBlock}
    height: 50px;
    width: 75px;
    background-color: orange;
    margin: 50px 50px 50px 50px;
  }
  .item2 {
    ${displayBlock}
    height: 50px;
    width: 50px;
    background-color: orange;
    margin: 50px 50px 50px 50px;
`;
