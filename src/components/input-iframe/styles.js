import { css } from "lit";

export default css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  div.label {
    line-height: 25px;
    font-size: 0.9rem;
    font-weight: 400;
  }
  div.input {
    height: 40px;
    border: 2px solid gray;
    border-radius: 8px;
    padding: 0 4px;
  }
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    outset: none;
  }
  div.error-message {
    line-height: 35px;
    color: #fa1616;
  }
`;
