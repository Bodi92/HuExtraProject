import { LitElement, html } from 'lit';
import { map } from 'rxjs/operators';
import { BirthdayService } from './service/BirthdayService';

export class BirthdayComponent extends LitElement {
  constructor() {
    super();
    this.birthdateService = new BirthdayService();
    this.daysUntilBirthday = 0;

    const observer = {
      next: (formattedResult) => {
        this.daysUntilBirthday = formattedResult;
        this.requestUpdate();
      },
      error: (err) => {
        console.error('Er is een fout opgetreden:', err);
      },
      complete: () => {
        console.log('De observable is voltooid');
      },
    };

    this.birthdateService.getBirthDateObservable()
      .pipe(
        map((days) => `Your birthday is in ${days} day(s).`)
      )
      .subscribe(observer);
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
    this.birthdateService.sendDataToObservable(birthdate);
  }
}

customElements.define('my-birthday', BirthdayComponent);
