import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'main',
    styles: [require('./main.component.scss').toString()],
    template: require('./main.component.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

}