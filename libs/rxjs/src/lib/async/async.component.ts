import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, firstValueFrom } from 'rxjs';

@Component({
  selector: 'ng13-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
      debugger;
      this.loading = false;
    } catch (e) {
      this.loading = false;
    }
  }
}
