import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'ng13-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.scss']
})
export class Content2Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('Content 2 Init');
  }

  ngOnDestroy(): void {
    console.log('Content 2 destroy');
  }

}
