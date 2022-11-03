import { html, LitElement } from "lit";
import properties from "./properties";
import styles from "./styles";

export class UserProfiles extends LitElement {
  constructor() {
    super();
    this.profiles = [];
  }

  connectedCallback() {
    fetch("https://randomuser.me/api/?results=2", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        return data.results.map((d) => ({
          name: d.name.title + " " + d.name.first + " " + d.name.last,
          picture: d.picture.medium,
        }));
      })
      .then((profiles) => {
        this.profiles = profiles;
      });
    super.connectedCallback();
  }

  expandImage(profile){
      let notification = document.getElementById("notification");
      notification.style.display = "block"
      var image = document.createElement("img");
      image.src = profile.picture;
      notification.appendChild(image);
  }

  render() {
    return html`<ul>
      ${this.profiles.map(
        (profile) =>
          html`<li @click=${() => this.expandImage(profile)}>
            <img src="${profile.picture}" />${profile.name}
          </li>`
      )}
    </ul>`;
  }
}

UserProfiles.properties = properties;
UserProfiles.styles = styles;
