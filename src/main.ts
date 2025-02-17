import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from "@angular/router";
//5 5:45
import routeConfig from "./app/routes";
//5 1:04
bootstrapApplication(AppComponent, {
    providers: [
        //5 6:04 provideRouter([])
        provideRouter(routeConfig)
    ]
}).catch(err => console.error(err));
