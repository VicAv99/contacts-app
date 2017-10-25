import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VenturPlex Contacts';
  links = [
    { path: '/home', icon: 'home', label: 'Home'},
    { path: '/contacts', icon: 'contacts', label: 'Contacts'},
    { path: '/emergency-contacts', icon: 'announcement', label: 'Emergency Contacts'}
  ];
}
