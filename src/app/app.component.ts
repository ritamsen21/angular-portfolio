import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header>
      <nav class="navbar">
        <a routerLink="/" routerLinkActive="active">Home</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
        <a routerLink="/skills" routerLinkActive="active">Skills</a>
        <a routerLink="/projects" routerLinkActive="active">Projects</a>
        <a routerLink="/contact" routerLinkActive="active">Contact</a>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <p>© 2025 Ritam Sen | Built with Angular</p>
    </footer>
  `,
  styles: [`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Poppins', sans-serif;
      background: #121212;
      color: white;
    }

    .navbar {
      display: flex;
      justify-content: center;
      padding: 15px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
    }

    .navbar a {
      color: white;
      text-decoration: none;
      margin: 0 15px;
      font-size: 18px;
      transition: color 0.3s;
    }

    .navbar a:hover,
    .navbar a.active {
      color: #007bff;
    }

    main {
      margin-top: 80px;
      padding: 20px;
      text-align: center;
    }

    footer {
      text-align: center;
      padding: 10px;
      background: rgba(255, 255, 255, 0.1);
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  `]
})
export class AppComponent { }
