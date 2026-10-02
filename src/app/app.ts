import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: false,
})
export class App {
  email = '';
  submitted = false;

  onSubmit(event: Event): void {
    event.preventDefault();

    const trimmed = this.email.trim();
    if (!trimmed || !trimmed.includes('@')) return;

    // TODO: wire to backend / Firebase / email service
    console.log('Signup:', trimmed);

    this.submitted = true;
    this.email = '';

    setTimeout(() => {
      this.submitted = false;
    }, 4000);
  }
}