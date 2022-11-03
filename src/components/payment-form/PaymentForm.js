import { LitElement, html } from "lit";
import properties from "./properties";
import styles from "./styles";

export class PaymentForm extends LitElement {
  constructor() {
    super();
    this.fields = {
      card: {
        valid: false,
        focused: false,
      },
      cvv: {
        valid: false,
        focused: false,
      },
      expiry: {
        valid: false,
        focused: false,
      },
    };
  }

  connectedCallback() {
    window.onmessage = (event) => {
      const data = event.data;

      switch (data.messageType) {
        case "event":
          if (data.data && data.data.eventName === "onfocus") {
            this.fields[data.from].focused = Boolean(data.data.value);
          }
          if (data.data && data.data.eventName === "onblur") {
            this.fields[data.from].focused = Boolean(!data.data.value);
          }
          break;
        case "validation":
          if (data.data) {
            this.fields[data.from].valid = Boolean(data.data.valid);
          }
          break;
      }

      this.fields = { ...this.fields };
    };
    super.connectedCallback();
  }

  render() {
    return html`<form>
      <input-iframe
        src="https://stvnganga.github.io/card?origin=${window.location.href}"
        label="Card number Input"
        focused="${this.fields.card.focused}"
        valid="${this.fields.card.valid}"
      ></input-iframe>
      <input-iframe
        src="https://stvnganga.github.io/cvv?origin=${window.location.href}"
        label="CVV Input"
        focused="${this.fields.cvv.focused}"
        valid="${this.fields.cvv.valid}"
      ></input-iframe>
      <input-iframe
        src="https://stvnganga.github.io/expiry?origin=${window.location.href}"
        label="Card expiry"
        focused="${this.fields.expiry.focused}"
        valid="${this.fields.expiry.valid}"
      ></input-iframe>
      <pay-button
        label="Pay"
        inputDataInValid="${!this.fields.expiry.valid ||
        !this.fields.cvv.valid ||
        !this.fields.card.valid}"
      ></pay-button>
    </form>`;
  }
}

PaymentForm.properties = properties;
PaymentForm.styles = styles;
