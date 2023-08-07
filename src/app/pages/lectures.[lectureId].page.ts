import { MarkdownComponent, injectContent } from '@analogjs/content';
import { Component } from '@angular/core';
import { PostAttributes } from '../interfaces/file-attributes';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe, NgIf],
  styles: [
    `
      .container {
        margin-top: 3em;
      }

      h1 {
        font-size: 30px;
      }
    `,
  ],
  template: `
    <div class="container">
      <ng-container *ngIf="post$ | async as post">
        <h1>Week {{ post.attributes.week }}: {{ post.attributes.title }}</h1>
        <p>{{ post.attributes.description }}</p>
        <analog-markdown [content]="post.content"></analog-markdown>
      </ng-container>
    </div>
  `,
})
export default class LectureComponent {
  post$ = injectContent<PostAttributes>({
    param: 'lectureId',
    subdirectory: 'lectures',
  });
}
