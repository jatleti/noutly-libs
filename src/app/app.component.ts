import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'noutly-libs';

    value = 0;

    onValueChange($event: number) {
        this.value = $event;
    }
}
