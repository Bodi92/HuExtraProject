import { LitElement, html } from 'lit';
import { map } from 'rxjs/operators';
import { BirthdateServer } from './service/BirthdayService';

export class BirthdayComponent extends LitElement {
  constructor() {
    super();
    this.birthdateServer = new BirthdateServer();
    this.daysUntilBirthday = 0;

    this.birthdateServer.getBirthDateObservable()
      .pipe(
        map((days) => `Your birthday is in ${days} day(s).`)
      )
      .subscribe({
        next: (formattedResult) => {
          this.daysUntilBirthday = formattedResult;
          this.requestUpdate();
        },
      });
  }

  render() {
    return html`
      <div>
        <label for="birthdate">Birthdate:</label>
        <input type="date" id="birthdate" @input=${this.updateBirthdate}>
      </div>

      <div>
        ${this.daysUntilBirthday || 'Enter your birthdate.'}
      </div>
    `;
  }

  updateBirthdate(event) {
    const birthdate = event.target.value;
    this.birthdateServer.sendDataToObservable(birthdate);
  }
}

customElements.define('my-birthday', BirthdayComponent);
