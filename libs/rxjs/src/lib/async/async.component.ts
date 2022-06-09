import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { delay, firstValueFrom } from 'rxjs';
import { loadFromJS } from './xx';
@Component({
  selector: 'nv-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss'],
})
export class AsyncComponent {
  loading = false;

  todo = {};

  constructor(private httpClient: HttpClient) {}

  async load() {
    try {
      this.loading = true;
      this.todo = await firstValueFrom(
        this.httpClient
          .get('https://jsonplaceholder.typicode.com/todos/1')
          .pipe(delay(5000))
      );
      console.log('async/await');

      this.todo = await loadFromJS();
      this.loading = false;
    } catch (e) {
      this.loading = false;
    }
  }
}
