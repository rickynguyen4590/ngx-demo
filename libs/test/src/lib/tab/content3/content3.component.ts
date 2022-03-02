import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'ng13-content3',
  templateUrl: './content3.component.html',
  styleUrls: ['./content3.component.scss']
})
export class Content3Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('Content 3 Init');
  }

  ngOnDestroy(): void {
    console.log('Content 3 Destroy');
  }

}
