import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav>
      <li>
        <span class="course">CSCD01</span> Fall 2023
      </li>

      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/overview">Overview</a>
      </li>
    </nav>
    <main>
      <router-outlet/>
    </main>
  `,
  styles: [
    `
    .course {
      color: var(--blue);
      font-weight: var(--bold);
    }

    main {
      max-width: 80%;
      margin: 0 auto;
    }

    a {
      transition-property: box-shadow;
      transition-duration: 150ms;
      transition-timing-function: cubic-bezier(0, 0, 0.4, 1);
      cursor: pointer;
      text-decoration: none;
      outline: transparent solid 2px;
      outline-offset: 2px;
      color: #E2E8F0;
      padding: 0.5rem;
      font-size: 0.875rem;
      font-weight: 500;
    }

    a:focus {
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
    }
    `,
  ],
})
export class AppComponent {}
