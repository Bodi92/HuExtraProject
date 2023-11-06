import { LitElement, html, css} from 'lit'


class Convertes extends LitElement {
    static get properties () {
        return {
          stringValue: { type: String, reflect: true},
          booleanValue: { type: String, reflect: true},
          numberValue: { type: String, reflect: true},
        }
      }

    constructor() {
        super();
        this.stringValue = "Hello Lit"
        this.booleanValue = false
        this.numberValue = 99
    }

  render() {
    return html`
      <div>
        <p>String Value: ${this.stringValue}</p>
      </div>
    `;
  }

  static styles = css`
    div {
      font-size: 16px;
      margin: 20px;
    }
  `;
}

customElements.define('my-converters', Convertes);