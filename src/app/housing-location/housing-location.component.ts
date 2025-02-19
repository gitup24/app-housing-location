import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!--<p>
      housing-location works!
    </p>-->
    <section class="listing">
    <img class="listing-photo">
      <h2 class="listing-heading"></h2>
      <p class="listing-location">
      </p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {

}
