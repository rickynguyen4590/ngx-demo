import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'nv-standalone-component',
  templateUrl: './standalone-component.component.html',
  styleUrls: ['./standalone-component.component.scss'],
})
export class StandaloneComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
