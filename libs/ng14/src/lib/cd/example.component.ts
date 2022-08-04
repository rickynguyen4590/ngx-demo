import { CommonModule } from "@angular/common";
import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { PushModule } from '@ngrx/component';
import { BehaviorSubject } from "rxjs";

@Component({
    standalone: true,
    selector: 'nv-cd-child',
    template: `<p>{{text()}}</p>`,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CDChildComponent implements OnInit, AfterViewInit, AfterContentInit, OnChanges {
    init$ = new BehaviorSubject<boolean>(false);

    @Input() x: boolean | null = false;

    constructor() {
        this.init$.subscribe(x => { console.log('Status', x); });
    }

    ngOnChanges(): void {
        console.log('child: ngOnChanges');
    }

    ngOnInit() {
        this.init$.next(true);
        console.log('child: ngOnInit');
    }

    ngAfterContentInit(): void {
        this.init$.next(true);
        console.log('child: ngAfterContentInit');
    }

    ngAfterViewInit(): void {
        this.init$.next(true);
        console.log('child: ngAfterViewInit');
    }

    text() {
        console.log('child: CD');
        return ''
    }
}

@Component({
    standalone: true,
    selector: 'nv-cd-parent',
    template: `<p>Child status: {{child.init$ | async  | json}} {{text()}}</p><nv-cd-child #child [x]="child.init$ | async" ></nv-cd-child>`,
    imports: [CDChildComponent, CommonModule, PushModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CDParentComponent implements OnInit, AfterViewInit, AfterContentInit, OnChanges {
    @Input() y = false;

    cd = inject(ChangeDetectorRef);

    ngOnChanges(): void {
        console.log('parent: ngOnChanges');
    }

    ngOnInit() {
        console.log('parent: ngOnInit');
    }

    ngAfterContentInit(): void {
        console.log('parent: ngAfterContentInit');
    }

    ngAfterViewInit(): void {
        console.log('parent: ngAfterViewInit');
    }

    text() {
        console.log('parent: CD');
        return '';
    }
}