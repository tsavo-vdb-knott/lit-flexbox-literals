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
  startAligned,
  endAligned,
  selfStretch,
  baseline,
  horizontalReverse,
  endJustified,
  flexFactor,
  flexFactorAuto,
  flex2,
  flex3,
  flex4,
  flex5,
  flex6,
  flex7,
  flex8,
  flex9,
  flex10,
  flex11,
  flex12,
  wrap,
  noWrap,
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
    width: 75%;
  }
  .container1 {
    ${displayFlex}
    ${startJustified}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }
  .container2 {
    ${displayFlex}
    ${endJustified}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }
  .container3 {
    ${displayFlex}
    ${centerJustified}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }
  .container4 {
    ${displayFlex}
    ${justified}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }
  .container5 {
    ${displayFlex}
    ${aroundJustified}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }
  .container6 {
    ${displayFlex}
    ${startAligned}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }
  .container7 {
    ${displayFlex}
    ${endAligned}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }
  .container8 {
    ${displayFlex}
    ${centerAligned}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }
  .container9 {
    ${displayFlex}
    ${selfStretch}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }
  .container10 {
    ${displayFlex}
    ${baseline}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }
  .container11 {
    ${displayFlex}
    ${selfStart}
    ${vertical}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }

  .container12 {
    ${displayFlex}
    ${endAligned}
    ${vertical}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }
  .container13 {
    ${displayFlex}
    ${selfCenter}
    ${centerAligned}
    ${vertical}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }
  .container14 {
    ${displayFlex}
    ${justified}
    ${vertical}
    border: 2px solid black;
    height: 500px;
    width: 25%;
  }
  .container15 {
    ${displayFlex}
    ${aroundJustified}
    ${vertical}
    border: 2px solid black;
    height: 500px;
    width: 25%;
  }
  .container16 {
    ${displayFlex}
    ${startAligned}
    ${vertical}
    border: 2px solid black;
    height: 400px;
    width: 25%;
  }
  .container17 {
    ${displayFlex}
    ${endAligned}
    ${vertical}
    border: 2px solid black;
    height: 400px;
    width: 25%;
  }
  .container18 {
    ${displayFlex}
    ${centerAligned}
    ${vertical}
    border: 2px solid black;
    height: 400px;
    width: 25%;
  }
  .container19 {
    ${displayFlex}
    ${startAligned}
    ${vertical}
    border: 2px solid black;
    height: 400px;
    width: 25%;
  }
  .container20 {
    ${displayFlex}
    ${startJustified}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }
  .container20 .item2 { 
    ${flexFactor}
    ${flexFactorAuto}
  }
  .container21 {
    ${displayFlex}
    ${startJustified}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }
  .container22 {
    ${displayFlex}
    ${endAligned}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }
  .container23 {
    ${displayFlex}
    ${startJustified}
    ${horizontal}
    height: 150px;
    width: 75%;
  }
  .container24 {
    ${displayFlex}
    ${endAligned}
    ${horizontal}
    height: 150px;
    width: 75%;
  }
  .mainContainer {
    border: 2px solid black;
    height: 300px;
  }
  .container25 {
    ${displayFlex}
    ${startJustified}
    ${centerAligned}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }
  .container26 {
    ${displayFlex}
    ${endJustified}
    ${centerAligned}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }
  .container27 {
    ${displayFlex}
    ${centerJustified}
    ${centerAligned}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 75%;
  }
  .container28 {
    ${displayFlex}
    ${startJustified}
    ${noWrap}
    ${horizontal}
    border: 2px solid black;
    height: 250px;
    width: 100%;
  }
  .container29 {
    ${displayFlex}
    ${startJustified}
    ${wrap}
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
    margin: 10px 10px 10px 10px;
  }
  .item2 {
    ${displayBlock}
    height: 50px;
    width: 50px;
    background-color: orange;
    margin: 10px 10px 10px 10px;
  }
  .item3 {
    ${displayBlock}
    ${flex2}
    height: 50px;
    width: auto;
    margin: 10px 10px 10px 10px;
  }
  .item4 {
    ${displayBlock}
    ${flex3}
    background-color: orange;
    height: 50px;
    width: 45px;
    margin: 10px 10px 10px 10px;
  }
  .item5 {
    ${displayBlock}
    ${flex4}
    background-color: orange;
    height: 50px;
    width: 45px;
    margin: 10px 10px 10px 10px;
  }
  .item6 {
    ${displayBlock}
    ${flex5}
    background-color: orange;
    height: 50px;
    width: 45px;
    margin: 10px 10px 10px 10px;
`;
