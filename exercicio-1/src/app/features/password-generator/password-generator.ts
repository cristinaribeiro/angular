import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  imports: [FormsModule],
  templateUrl: './password-generator.html',
  styleUrl: './password-generator.css',
})
export class PasswordGenerator {
  passwordLength = 0;

  isUsingLetters = false;
  isUsingNumbers = false;
  isUsingSymbols = false;

  private letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private numbers = '0123456789';
  private symbols = '!@#$%&*()_-+=,<.>;:/?]}[{';

  generatedPassword = '';

  generatePassword() {
    let usedCharacters = '';

    if (this.isUsingLetters) usedCharacters += this.letters;
    if (this.isUsingNumbers) usedCharacters += this.numbers;
    if (this.isUsingSymbols) usedCharacters += this.symbols;

    let password = '';

    for (let i = 0; i < this.passwordLength; i++) {
      const randomChar = Math.floor(Math.random() * usedCharacters.length);
      password += usedCharacters[randomChar];
    }

    this.generatedPassword = password;
  }

  get isAtLeastOneSelected(): boolean {
    return this.isUsingLetters || this.isUsingNumbers || this.isUsingSymbols;
  }
}
