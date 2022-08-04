import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CDComponentLevel4Component } from "./level-4.component";

@Component({
    standalone: true,
    selector: 'nv-cd-level-3',
    template: `
    {{text()}}
    <br/>
    {{level4.init$ | async | json}}
    <br/>
    <nv-cd-level-4 #level4></nv-cd-level-4>
    `,
    imports: [CDComponentLevel4Component, CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CDComponentLevel3Component {
    text() {
        console.log('Level 3');
        return 'Level 3';
    }
}