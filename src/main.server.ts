import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/AppComponent/app.component';
import { config } from './app/AppComponent/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;