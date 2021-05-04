import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') private sidenav:MatSidenav;

  public itemCount = localStorage.getItem('itemCount');

  public toggle():void {
    this.sidenav.toggle();
  }

}