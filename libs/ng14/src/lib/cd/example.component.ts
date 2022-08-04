import { CommonModule } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
    standalone: true,
    selector: 'nv-cd-child',
    template: `<p>X</p>`,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CDChildComponent implements AfterViewInit {
    init$ = new BehaviorSubject(false);

    ngAfterViewInit(): void {
        this.init$.next(true);
    }
}

@Component({
    standalone: true,
    selector: 'nv-cd-parent',
    template: `<p>Child status: {{child.init$ | async | json}}</p><nv-cd-child #child></nv-cd-child>`,
    imports: [CDChildComponent, CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CDParentComponent {
}