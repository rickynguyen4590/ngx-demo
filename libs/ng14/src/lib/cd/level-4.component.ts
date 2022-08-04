import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
    standalone: true,
    selector: 'nv-cd-level-4',
    template: `{{text()}}`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CDComponentLevel4Component implements AfterViewInit{

    init$ = new BehaviorSubject(false);

    private cd = inject(ChangeDetectorRef);

    text() {
        console.log('Level 4');
        return 'Level 4';
    }

    ngAfterViewInit(): void {
        this.init$.next(true);
        // setInterval(() => {
        //     this.cd.markForCheck();
        // }, 3000);
    }
}