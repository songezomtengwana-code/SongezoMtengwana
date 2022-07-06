import { Component, OnInit } from '@angular/core';
import * as data from "../../data/ut-about.json";


@Component({
  selector: 'app-contacts-section',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: any = (data as any).default;

  constructor() { }

  ngOnInit(): void {
    this.sendData();
  }

  sendData() {
    const conformation: string = "thank you for commenting";
    console.log(conformation);
    console.log('the contacts layout is running smoothily');
  }

}
