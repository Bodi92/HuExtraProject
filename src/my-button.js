import { LitElement, css, html } from 'lit'
 
class MyButton extends LitElement {
    static get properties () {
        return {
          buttonPrimary: { type: String },
          buttonPrimary: { type: String }
        }
      }
    
      constructor () {
        super()
      }
 
    render() {
        return html`
        <button class="primary"><slot>Primary Button</slot></button>
        <button class="secondary"><slot>Secondary Button</slot></button>
        `;
      }
 
    static get styles () {
     return css`
     button {
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      border: var(--border);
      border-radius: var(--border-radius);
      cursor: var(--cursor);
     }
     .primary {
        background-color: var(--primary-color);
      }
 
      .secondary {
        background-color: var(--secondary-color);
      }
      `
    }
}
window.customElements.define('my-button', MyButton)
  
