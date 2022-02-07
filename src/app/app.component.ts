import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  includeAlphabethActive: boolean = false;
  includeNumericActive: boolean = false;
  includeSymbolActive: boolean = false;

  length: number = 0;
  password: string = '';

  modifyLetters() {
    this.includeAlphabethActive = !this.includeAlphabethActive;
  }
  modifyNumbers() {
    this.includeNumericActive = !this.includeNumericActive;
  }
  modifySymbols() {
    this.includeSymbolActive = !this.includeSymbolActive;
  }
  modifyLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      // debugger;
      this.length = parsedValue;
      console.log(parsedValue);
    }
  }
  buttonClick() {
    
    const letters = 'qwertyuioplkjhgfdsazxcvbnm';
    const numbers = '1234567890';
    const symbols = '@!£^+%&/()?';
    let createPassword = '';
    let generatedPassword = '';

    if (this.includeAlphabethActive) {
      createPassword += letters;
    }
    if (this.includeNumericActive) {
      createPassword += numbers;
    }
    if (this.includeSymbolActive) {
      createPassword += symbols;
    }

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * createPassword.length);
      generatedPassword += createPassword[index];
    }
    this.password = generatedPassword;
  }
}
