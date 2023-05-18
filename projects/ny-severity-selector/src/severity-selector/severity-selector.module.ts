import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SeveritySelectorComponent} from './severity-selector/severity-selector.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [SeveritySelectorComponent],
    imports: [CommonModule, FormsModule],
    exports: [SeveritySelectorComponent],
})
export class SeveritySelectorModule {}
