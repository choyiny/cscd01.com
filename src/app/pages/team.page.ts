import { Component } from "@angular/core";

@Component({
    standalone: true,
    template: `
        <header>
            <h1>Team</h1>
            <h6>The team behind the course.</h6>
        </header>

        <section>
            <h1>Instructors</h1>
            <ul>
            </ul>
        </section>
        <section>
            <h1>Teaching Assistants</h1>

        </section>
    `,
    styles: [
        `
        header {
            text-align: center;
        }

        header h1 {
            margin: 0;
        }
        header h6 {
            margin: 0;
        }
        `
    ]
  })
  export default class TeamPageComponent {}