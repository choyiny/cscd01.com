import { MarkdownComponent, injectContent } from "@analogjs/content";
import { Component, effect, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { LectureAttributes } from "../interfaces/file-attributes";
import { Meta, Title } from "@angular/platform-browser";
import { getMeta } from "../meta/route-meta";
import { SafePipe } from "../pipes/safe.pipe";

@Component({
  imports: [MarkdownComponent, SafePipe],
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
      @if (lecture(); as lecture) {
        <h1>
          Week {{ lecture.attributes.week }}: {{ lecture.attributes.title }}
        </h1>
        <p>{{ lecture.attributes.description }}</p>
        <analog-markdown [content]="lecture.content"></analog-markdown>
        @if (lecture.attributes.googleSlidesUrl) {
          <a [href]="lecture.attributes.googleSlidesUrl" target="_blank"
            >Lecture Slides</a
          >
        }
        @if (lecture.attributes.googleSlidesUrl) {
          <iframe
            [src]="lecture.attributes.googleSlidesUrl + 'embed' | safe"
            frameborder="0"
            width="100%"
            height="500"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          >
          </iframe>
        }
      }
    </div>
  `,
  providers: [Meta],
})
export default class LectureComponent {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  readonly lecture = toSignal(
    injectContent<LectureAttributes>({
      param: "lectureId",
      subdirectory: "lectures",
    }),
  );

  constructor() {
    effect(() => {
      const lecture = this.lecture();
      if (!lecture) {
        return;
      }
      const title = `Week ${lecture.attributes.week}: ${lecture.attributes.title}`;
      this.title.setTitle(title);
      getMeta({
        title,
        description: lecture.attributes.description,
      }).forEach((tag) => this.meta.updateTag(tag));
    });
  }
}
