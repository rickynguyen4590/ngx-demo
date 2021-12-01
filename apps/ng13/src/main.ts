import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
const abc = async() => {
  await new Promise((resolve) => {
    console.log('123');
    setTimeout(resolve, 5000);
  });
  console.log(456);
};
abc().catch(e => console.log(e));
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
