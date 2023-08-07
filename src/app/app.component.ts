import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgFor],
  template: `
    <nav>
      <li>
        <span class="course">CSCD01</span> Fall 2023
      </li>

      <li *ngFor="let item of navItems">
        <a class="nav-link" [routerLink]="item.path">{{ item.name }}</a>
      </li>
    </nav>
    <main>
      <router-outlet/>
    </main>
    <footer>
      <div class="footer-line">
        <p>© 2022 Aleksander Bodurri and Cho Yin Yong. Made with <a href="https://analogjs.org">Analog</a>.</p>
      </div>
    </footer>
  `,
  styles: [
    `
      footer {
        padding: 10px;
        background-color: rgb(23, 25, 35);
        display: flex;
        justify-content: center;
      }

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

      .nav-link {
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
export class AppComponent {
  navItems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Lectures',
      path: '/lectures',
    },
    {
      name: 'Coursework',
      path: '/work',
    },
    {
      name: 'Team',
      path: '/team',
    },
  ];
}
