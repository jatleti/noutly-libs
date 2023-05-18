import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SeveritySelectorModule} from '../../projects/ny-severity-selector/src/severity-selector/severity-selector.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, SeveritySelectorModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
