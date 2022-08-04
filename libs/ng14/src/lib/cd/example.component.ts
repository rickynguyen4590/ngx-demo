import { CommonModule } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { PushModule } from '@ngrx/component';
import { BehaviorSubject, ReplaySubject, Subject } from "rxjs";

@Component({
    standalone: true,
    selector: 'nv-cd-child',
    template: `<p>X</p>`,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CDChildComponent implements OnInit, AfterViewInit {
    init$ = new BehaviorSubject<boolean>(false);

    constructor() {
        this.init$.subscribe(x => { console.log('Status', x); });
    }

    ngOnInit() {
        this.init$.next(true);
    }

    ngAfterViewInit(): void {
        return;
    }
}

@Component({
    standalone: true,
    selector: 'nv-cd-parent',
    template: `<p>Child status: {{child.init$ | async  | json}}</p><nv-cd-child #child></nv-cd-child>`,
    imports: [CDChildComponent, CommonModule, PushModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CDParentComponent {
}