import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(public httpCLient: HttpClient) {
  }

  getStaff() {
    return this.httpCLient.get('./ut-staff.json').subscribe(
      (data) => console.log(data)
    )
  }
}
