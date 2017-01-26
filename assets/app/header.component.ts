import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
    <div class="page-header large-font">
        <img src="{{imgUrl}}" class="header-image" />
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

    imgUrl:string = 'images/basketball-1.png';
}