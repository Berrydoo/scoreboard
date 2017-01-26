import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
    <div class="page-header large-font">
        <img src="public/images/basketball-1.png" class="header-image" />
        Basketball Scoreboard
    </div>
    `,
    styles: [`
        .large-font {
          font-size:40px;
        }
        .header-image {
            width: 40px;
            height: 37px;
        }
    `]
})
export class HeaderComponent {

}