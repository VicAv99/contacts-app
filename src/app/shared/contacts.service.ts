import { Http, Headers } from '@angular/http'
import { Injectable } from '@angular/core';
import { EmployeeContact } from './employee-contact.model';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:3000/employee-contacts/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ContactsService {
  constructor(private http: Http) { }

  allContacts() {
    return this.http.get(BASE_URL)
      .map(res => res.json());
  }

  create(employeeContact: EmployeeContact) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(employeeContact), HEADER)
      .map(res => res.json());
  }

  update(employeeContact: EmployeeContact) {
    return this.http.patch(`${BASE_URL}${employeeContact.id}`, JSON.stringify(employeeContact), HEADER)
      .map(res => res.json());
  }

  delete(employeeContact: EmployeeContact) {
    return this.http.delete(`${BASE_URL}${employeeContact.id}`)
      .map(res => res.json());
  }
}
