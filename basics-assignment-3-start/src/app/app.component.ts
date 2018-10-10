import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggled = false;
  dates = [];
  onToggle() {
    this.dates.push(Date.now());
    this.toggled = true;
  }
  count5() {
    return this.dates.length > 3 ? true : false;
  }
}
