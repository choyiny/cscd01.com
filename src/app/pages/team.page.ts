import { Component, Input } from "@angular/core";

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
        `
    ]
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
            <h1>
                Instructors
            </h1>

            <ul>
                <li>
                    <app-member name="Cho Yin Yong" title="Engineering Manager, Verto Health"></app-member>
                </li>
                <li>
                    <app-member name="Aleksander Bodurri" title="Development Team Lead, Verto Health | Angular Team Member"></app-member>
                </li>
            </ul>
        </section>
        <section>
            <h1>
                Teaching Assistants
            </h1>

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
            font-size: 1.875rem
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
        `
    ],
    imports: [MemberComponent]
  })
  export default class TeamPageComponent {}
