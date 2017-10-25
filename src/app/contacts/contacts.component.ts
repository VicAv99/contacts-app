import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../shared/contacts.service';
import { EmployeeContact } from '../shared/employee-contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  employeeContacts: EmployeeContact[];
  currentContact: EmployeeContact;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.getEmployeeContacts();
    this.resetCurrentContact();
  }

  getEmployeeContacts() {
    this.contactsService.allContacts()
      .subscribe(employeeContacts => this.employeeContacts = employeeContacts)
  }

  resetCurrentContact() {
    this.currentContact = {id: null, name: '', phone: '', email: '', address: ''};
  }

  select(employeeContact) {
    this.currentContact = employeeContact;
  }

  cancel(employeeContact) {
    this.resetCurrentContact();
    console.log('works?');
  }

  save(employeeContact) {
    if (!employeeContact.id) {
      this.create(employeeContact);
    } else {
      this.update(employeeContact);
    }
  }

  create(employeeContact) {
    this.contactsService.create(employeeContact)
      .subscribe(response => {
        this.getEmployeeContacts();
        this.resetCurrentContact();
        console.log('works??');
      });
  }

  update(employeeContact) {
    this.contactsService.update(employeeContact)
      .subscribe(response => {
        this.getEmployeeContacts();
        this.resetCurrentContact();
      });
  }

  delete(employeeContact) {
    this.contactsService.delete(employeeContact)
      .subscribe(response => {
        this.getEmployeeContacts();
        this.resetCurrentContact();
      });
  }
}
