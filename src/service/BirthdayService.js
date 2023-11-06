import { Subject } from "rxjs";

export class BirthdateServer {
  // Create a Subject to manage the observable
  _birthDateSubject = new Subject();

  // Send data to the observable
  sendDataToObservable(birthdate) {
    // Calculate the days until the next birthday
    const daysUntilBirthday = this.calculateDaysUntilBirthday(birthdate);
   
    // Emit the result to the observable
    this._birthDateSubject.next(daysUntilBirthday);
  }

  // Get the observable for external subscribers
  getBirthDateObservable() {
    // Return the observable part of the Subject to external subscribers
    return this._birthDateSubject.asObservable();
  }

  // Calculate the days until the next birthday
  calculateDaysUntilBirthday(birthdate) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdate);
    
    // Set the birthdate year to the current year
    birthdayDate.setFullYear(currentDate.getFullYear());
    
    // If the birthdate has already occurred this year, set it to next year
    if (birthdayDate < currentDate) {
      birthdayDate.setFullYear(currentDate.getFullYear() + 1);
    }
    
    // Calculate the time difference in milliseconds
    const timeDifference = birthdayDate.getTime() - currentDate.getTime();
    
    // Convert milliseconds to days and round up
    const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return days;
  }
}
