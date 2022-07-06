import { Component, OnInit } from '@angular/core';
import * as data from "../../data/ut-services.json";

@Component({
  selector: 'app-services-section',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: any = (data as any).default;

  constructor() { }

  ngOnInit(): void {
    console.log(this.services)
  }

}
