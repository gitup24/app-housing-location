import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent} from "../housing-location/housing-location.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <!--6:40<p>
      home works!
    </p>-->
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="result">
      <!--add the housing location to the result section 8:32-->
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
