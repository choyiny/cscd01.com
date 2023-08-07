import { Component, Input } from '@angular/core';
import { CourseworkAttributes } from '../interfaces/file-attributes';
import { injectContentFiles } from '@analogjs/content';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgIf, RouterLink],
  selector: 'app-coursework-item',
  styles: [
    `
      .work-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 2em 0;
        border-bottom: 1px solid rgba(226, 232, 240, 0.16);
        text-decoration: none;
      }

      .work-item:hover {
        background-color: rgba(226, 232, 240, 0.16);
        cursor: pointer;
      }

      .work-details {
        flex: 8;
        padding: 0 1em;
      }

      .work-title {
        font-size: 1.5em;
      }

      .work-date {
        font-size: 13px;
        background-color: rgba(226, 232, 240, 0.16);
        color: white;
        padding: 5px 10px;
        border-radius: 3em;
        display: inline-block;
        margin: 0.5em 0;
      }
    `,
  ],
  template: `
    <a [routerLink]="'/work/' + work.slug" class="work-item" *ngIf="work">
      <div class="work-details">
        <div class="work-title">{{ work.attributes.title }}</div>
        <div class="work-date">
          Due on {{ getDateString(work.attributes.dueDate) }}
        </div>
      </div>
    </a>
  `,
})
class CourseworkItemComponent {
  @Input() work: CourseworkAttributes | undefined = undefined;

  getDateString(date: Date) {
    return new Date(date).toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
    });
  }
}

@Component({
  standalone: true,
  imports: [NgFor, CourseworkItemComponent],
  styles: [
    `
      .container {
        margin: 3em 0;
      }

      h1 {
        font-size: 30px;
        text-align: center;
        margin-bottom: 2em;
      }
    `,
  ],
  template: `
    <div class="container">
      <h1>Coursework</h1>
      <app-coursework-item
        *ngFor="let coursework of courseworkList"
        [work]="coursework"
      ></app-coursework-item>
    </div>
  `,
})
export default class WorkPage {
  readonly courseworkList = injectContentFiles<CourseworkAttributes>(
    (contentFile) => contentFile.filename.includes('/src/content/coursework'),
  ).sort((a, b) => {
    const aDate = new Date(a.attributes.dueDate);
    const bDate = new Date(b.attributes.dueDate);
    return aDate.getTime() - bDate.getTime();
  });
}
