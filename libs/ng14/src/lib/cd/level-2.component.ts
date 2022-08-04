import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CDComponentLevel3Component } from "./level-3.component";

@Component({
    standalone: true,
    selector: 'nv-cd-level-2',
    imports: [CDComponentLevel3Component],
    template: `{{text()}}<br/><nv-cd-level-3></nv-cd-level-3>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CDComponentLevel2Component {
    text() {
        console.log('Level 2');
        return 'Level 2';
    }
}