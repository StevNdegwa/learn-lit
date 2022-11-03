import { LitElement, html, nothing } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import styles from "./styles";
import properties from "./properties";

export class InputIframe extends LitElement {
  constructor() {
    super();
    this.focused = false;
  }

  render() {
    const wrapperStyle = {
      borderColor: this.focused ? "blue" : "gray",
    };
    return html`
      <div class="label">${this.label}</div>
      <div class="input" style=${styleMap(wrapperStyle)}>
        <iframe src=${this.src}></iframe>
      </div>
      ${!this.valid && this.focused
        ? html`<div class="error-message">Invalid data</div>`
        : nothing}
    `;
  }
}

InputIframe.styles = styles;
InputIframe.properties = properties;
