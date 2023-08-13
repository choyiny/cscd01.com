import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { environment } from '../../environments/environment';
import { RouteMeta } from '@analogjs/router';
import { getRouteMeta } from '../meta/route-meta';

export const routeMeta: RouteMeta = getRouteMeta({
  partialTitle: 'Team',
  description: `Teaching Team for ${environment.courseCode} ${environment.courseTitle}`,
});

@Component({
  standalone: true,
  selector: 'app-member',
  template: `
    <h3>{{ name }}</h3>
    <p>{{ title }}</p>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        text-align: center;
      }

      p {
        margin: 0 8px 0 0;
      }
    `,
  ],
})
class MemberComponent {
  @Input() name = '';
  @Input() title = '';
}

@Component({
  standalone: true,
  template: `
    <header>
      <h1>Team</h1>
      <p>The team behind the course.</p>
    </header>

    <section>
      <h1>Instructors</h1>

      <ul>
        <li *ngFor="let instructor of instructors">
          <app-member
            [name]="instructor.name"
            [title]="instructor.title"
          ></app-member>
        </li>
      </ul>
    </section>
    <section style="display: none">
      <h1>Teaching Assistants</h1>

      <ul>
        <li>
          <app-member name="Teaching Assistant 1"></app-member>
        </li>
        <li>
          <app-member name="Teaching Assistant 2"></app-member>
        </li>
        <li>
          <app-member name="Teaching Assistant 3"></app-member>
        </li>
        <li>
          <app-member name="Teaching Assistant 4"></app-member>
        </li>
        <li>
          <app-member name="Teaching Assistant 5"></app-member>
        </li>
        <li>
          <app-member name="Teaching Assistant 6"></app-member>
        </li>
      </ul>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
        margin: 64px 0;
      }

      header {
        text-align: center;
      }

      h1 {
        font-size: 1.875rem;
      }

      h6 {
      }

      ul {
        list-style: none;
        display: flex;
        gap: 64px;
        flex-wrap: wrap;

        li {
          width: calc(50% - 64px);
        }
      }

      section {
        margin-bottom: 64px;

        h1 {
          margin-bottom: 32px;
        }
      }
    `,
  ],
  imports: [MemberComponent, NgFor],
})
export default class TeamPageComponent {
  instructors = environment.instructors;
}
