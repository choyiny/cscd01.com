import { injectContentFiles } from '@analogjs/content';
import { Component } from '@angular/core';
import { LectureAttributes } from '../interfaces/post-attributes';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgFor],
  styles: [
    `
      .container {
        margin-top: 3em;
      }

      h1 {
        font-size: 30px;
        text-align: center;
      }

      .lecture-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 2em 0;
        padding-bottom: 2em;
        border-bottom: 1px solid rgba(226, 232, 240, 0.16);
      }

      .lecture-number {
        font-size: 2em;
        font-weight: bold;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .lecture-details {
        flex: 8;
      }

      .lecture-title {
        font-size: 1.5em;
      }

      .lecture-date {
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
    <div class="container">
      <h1>Course Schedule</h1>
      <div class="lecture-container">
        <div *ngFor="let post of posts" class="lecture-item">
          <div class="lecture-number">
            <span>{{ post.attributes.week }}</span>
          </div>
          <div class="lecture-details">
            <div class="lecture-title">{{ post.attributes.title }}</div>
            <div class="lecture-date">Week of {{ post.attributes.date }}</div>
            <div class="lecture-description">
              {{ post.attributes.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export default class SchedulePage {
  readonly posts = injectContentFiles<LectureAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/lectures/')
  ).sort((a, b) => a.attributes.week - b.attributes.week);
}
