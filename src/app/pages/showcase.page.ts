import { MarkdownComponent, injectContent } from "@analogjs/content";
import { Component } from "@angular/core";
import { PostAttributes } from "../interfaces/file-attributes";
import { AsyncPipe } from "@angular/common";
import { environment } from "../../environments/environment";
import { RouteMeta } from "@analogjs/router";
import { getRouteMeta } from "../meta/route-meta";

export const routeMeta: RouteMeta = getRouteMeta({
  title: environment.fullTitle,
  description: environment.description,
});

@Component({
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe],
  styles: [
    `
      .container {
        margin-top: 3em;
      }

      .hero {
        text-align: center;
      }

      h1 {
        font-size: 30px;
      }

      p {
        color: #718096;
      }
    `,
  ],
  template: `
    <div class="container">
      <div class="hero">
        <h1>Showcase</h1>
        <p>
          Here are the open source contributions that past students of CSCD01
          have successfully made.
        </p>
      </div>
      @if (post$ | async; as post) {
        <analog-markdown [content]="post.content"></analog-markdown>
      }
    </div>
  `,
})
export default class ShowcasePage {
  post$ = injectContent<PostAttributes>({ customFilename: "showcase" });
}
