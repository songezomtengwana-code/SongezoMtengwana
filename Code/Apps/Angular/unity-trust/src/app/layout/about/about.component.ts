import { Component, OnInit } from '@angular/core';
import * as data from '../../data/unitytrust.json'


@Component({
  selector: 'app-about-section',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutdata: any = (data as any).default;

  constructor() { }
  ngOnInit(): void {
    console.log(this.aboutdata);
  }
}