import {
  ContentFile,
  MarkdownComponent,
  injectContent,
} from '@analogjs/content';
import { Component, inject } from '@angular/core';
import { CourseworkAttributes } from '../interfaces/file-attributes';
import { AsyncPipe, NgIf } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { getMeta } from '../meta/route-meta';

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
      <ng-container *ngIf="handout">
        <h1>{{ handout.attributes.title }}</h1>
        <p>{{ handout.attributes.description }}</p>
        <analog-markdown [content]="handout.content"></analog-markdown>
      </ng-container>
    </div>
  `,
})
export default class CourseworkComponent {
  meta = inject(Meta);
  title = inject(Title);
  handout:
    | ContentFile<CourseworkAttributes | Record<string, never>>
    | undefined = undefined;

  constructor() {
    injectContent<CourseworkAttributes>({
      param: 'slug',
      subdirectory: 'coursework',
    }).subscribe((handout) => {
      this.setHandout(handout);
    });
  }

  setHandout(
    handout: ContentFile<CourseworkAttributes | Record<string, never>>,
  ) {
    this.handout = handout;
    this.title.setTitle(handout.attributes.title);
    const meta = getMeta({
      title: handout.attributes.title,
      description: handout.attributes.description,
    });
    meta.forEach((metaTag) => this.meta.updateTag(metaTag));
  }
}
