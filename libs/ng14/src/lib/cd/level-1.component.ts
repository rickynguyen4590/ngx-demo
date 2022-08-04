import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CDComponentLevel2Component } from "./level-2.component";

@Component({
    standalone: true,
    selector: 'nv-cd-level-1',
    imports: [CDComponentLevel2Component],
    template: `{{text()}}<br/><nv-cd-level-2></nv-cd-level-2>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CDComponentLevel1Component {
    text() {
        console.log('Level 1');
        return 'Level 1';
    }
}