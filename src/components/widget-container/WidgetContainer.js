import { html, LitElement } from "lit";
import styles from "./styles";

export class WidgetContainer extends LitElement {
  static properties = {
    fields: {
      type: Object,
      state: true,
    },
  };
  constructor() {
    super();
  }

  render() {
    return html`<div class="widget-container">
      <h1>Payment widget</h1>
      <payment-form></payment-form>
    </div>`;
  }
}

WidgetContainer.styles = styles;
