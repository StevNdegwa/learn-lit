import { html, LitElement, nothing } from "lit";
import styles from "./styles";
import properties from "./properties";

export class FullscreenPopup extends LitElement {
  constructor() {
    super();
    this._isOpen = false;
    this.buttonLabel = "Toggle";
  }

  togglePopup() {
    this._isOpen = !this._isOpen;
  }

  showPopup() {
    if (this._isOpen) return;
  }

  render() {
    return html`
      <button @click="${this.togglePopup}">${this.buttonLabel}</button>
      ${this._isOpen
        ? html`<div class="page-overlay" @click="${this.togglePopup}"></div>
            <div class="popup-content">Popup content</div>`
        : nothing}
    `;
  }
}

FullscreenPopup.styles = styles;
FullscreenPopup.properties = properties;
