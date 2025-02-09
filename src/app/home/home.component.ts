import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero animate-fade-in">
      <h1>Hi, I'm <span>Ritam Sen</span> 👋</h1>
      <p>Angular Developer | UI/UX Enthusiast | Frontend Specialist</p>
      <a href="#contact" class="btn">Contact Me</a>
    </section>
  `,
  styles: [`
    .hero {
      text-align: center;
      padding: 100px 20px;
    }

    .hero h1 {
      font-size: 40px;
      color: var(--primary-color);
    }

    .btn {
      padding: 10px 20px;
      background: var(--primary-color);
      color: white;
      border-radius: 8px;
      text-decoration: none;
      transition: 0.3s;
    }

    .btn:hover {
      background: darkblue;
    }
  `]
})
export class HomeComponent { }
