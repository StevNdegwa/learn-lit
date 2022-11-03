import { html, LitElement } from "lit";
import properties from "./properties";
import styles from "./styles";
import pay from "../../pay";

export class PayButton extends LitElement {
  constructor() {
    super();
  }

  handlePay() {
    pay({ fn: "Pay" });
  }

  render() {
    return html`<button
      @click=${this.handlePay}
      .disabled=${this.inputDataInValid}
    >
      ${this.label}
    </button>`;
  }
}

PayButton.properties = properties;
PayButton.styles = styles;
