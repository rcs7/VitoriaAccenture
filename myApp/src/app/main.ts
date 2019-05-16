import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Põe AppModule como sendo a class principal, lembrando que ele é o arquivo app.module.ts
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
