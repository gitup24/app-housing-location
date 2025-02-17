import { Component } from '@angular/core';
//5:39
import {HomeComponent} from "./home/home.component";
//5 3:8
import { RouterModule} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <!--<h1>Hello Universe!</h1>-->
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg"
             alt="logo" aria-hidden="true">
      </header>
      <!--4:40 child cpnt. Import suggéré-->
      <section class="content">
        <router-outlet></router-outlet>
        <!--<app-home></app-home>-->
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';
}
