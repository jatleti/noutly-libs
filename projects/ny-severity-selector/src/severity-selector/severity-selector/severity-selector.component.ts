import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'ny-severoty-selector',
    templateUrl: './severity-selector.component.html',
    styleUrls: ['./severity-selector.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeveritySelectorComponent implements OnInit {
    @Input() min = 0;
    @Input() max = 10;
    @Input() step = 1;
    @Input() value = 0;
    @Input() ranges: any[] = [
        {min: 1, max: 3, text: 'Leve'},
        {min: 4, max: 7, text: 'Grave'},
        {min: 8, max: 10, text: 'Muy grave'},
    ];

    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    @Output() public valueChange = new EventEmitter<number>();

    changeValue() {
        this.valueChange.emit(this.value);
    }

    ngOnInit() {
        if (this.value < this.min) {
            this.value = this.min;
        }
        if (this.value > this.max) {
            this.value = this.max;
        }
        this.changeValue();
        const total = this.max - this.min;
        const dividers = total / this.step;
        this.numbers = [];
        for (let i = 0; i <= dividers; i++) {
            const num = this.min + i * this.step;
            // round to 2 decimal places
            this.numbers.push(Math.round(num * 100) / 100);
        }
    }

    getLeftPosition(i: number) {
        const total = this.max - this.min;
        const dividers = total / this.step;
        return (i / dividers) * 100;
    }

    getRangeWidth(min: number, max: number) {
        const total = this.max - this.min;
        const dividers = total / this.step;
        if (max > this.max) {
            max = this.max;
        }
        if (min < this.min) {
            min = this.min;
        }
        return ((max - min) / dividers) * 100;
    }

    getRangeLeftPosition(min: number) {
        const total = this.max - this.min;
        const dividers = total / this.step;
        const section = (min - this.min) / this.step;
        return (section / dividers) * 100;
    }
}
