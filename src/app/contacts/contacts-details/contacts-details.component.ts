import { Component, Output, EventEmitter, Input } from '@angular/core';
import { EmployeeContact } from '../../shared/employee-contact.model';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.css']
})
export class ContactsDetailsComponent {
  employeeName: string;
  selectedEmployee: EmployeeContact;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set employeeContact(value: EmployeeContact){
    if (value) { this.employeeName = value.name; }
    this.selectedEmployee = Object.assign({}, value);
  } 
}