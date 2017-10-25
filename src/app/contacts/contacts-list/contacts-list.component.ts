import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeContact } from '../../shared/employee-contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {
  @Input() employeeContacts: EmployeeContact[];  
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
