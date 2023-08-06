import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <nav>
      <li>
        <span class="course">CSCD01</span> Fall 2023
      </li>

      <li>
        <a routerLink="/">Home</a>
      </li>
      <li>
        <a routerLink="/schedule">Schedule</a>
      </li>
      <li>
        <a routerLink="/team">Team</a>
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
        max-width: 85%;
        margin: 0 auto;
      }

      @media (max-width: 768px) {
        main {
          max-width: 90%;
        }
      }

      a {
        transition-property: box-shadow;
        transition-duration: 150ms;
        transition-timing-function: cubic-bezier(0, 0, 0.4, 1);
        cursor: pointer;
        text-decoration: none;
        outline: transparent solid 2px;
        outline-offset: 2px;
        color: #e2e8f0;
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
