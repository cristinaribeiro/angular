import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordGenerator } from './features/password-generator/password-generator';

@Component({
  selector: 'app-root',
  imports: [PasswordGenerator],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ex1');
}
