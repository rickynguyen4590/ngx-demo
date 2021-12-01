import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const abc = async () => {
  console.log(123);
  await delay(100);
  console.log(456);
};
abc().catch((e) => console.log(e));
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
