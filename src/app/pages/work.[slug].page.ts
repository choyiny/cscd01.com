import { MarkdownComponent, injectContent } from "@analogjs/content";
import { Component, effect, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { CourseworkAttributes } from "../interfaces/file-attributes";
import { DatePipe } from "@angular/common";
import { Meta, Title } from "@angular/platform-browser";
import { getMeta } from "../meta/route-meta";

@Component({
  imports: [MarkdownComponent, DatePipe],
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
      @if (handout(); as handout) {
        <h1>{{ handout.attributes.title }}</h1>
        <p>{{ handout.attributes.description }}</p>
        @if (handout.attributes.dueDate) {
          <p>Due Date: {{ handout.attributes.dueDate | date: "medium" }}</p>
        }
        <analog-markdown [content]="handout.content"></analog-markdown>
      }
    </div>
  `,
})
export default class CourseworkComponent {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  readonly handout = toSignal(
    injectContent<CourseworkAttributes>({
      param: "slug",
      subdirectory: "coursework",
    }),
  );

  constructor() {
    effect(() => {
      const handout = this.handout();
      if (!handout) {
        return;
      }
      this.title.setTitle(handout.attributes.title);
      getMeta({
        title: handout.attributes.title,
        description: handout.attributes.description,
      }).forEach((metaTag) => this.meta.updateTag(metaTag));
    });
  }
}
