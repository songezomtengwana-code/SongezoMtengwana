import { Component, OnInit } from '@angular/core';
import * as staff from '../../data/ut-staff.json'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  staffs: any = (staff as any).default;
  constructor() { }
  ngOnInit() {
    console.log(staff)
  }
  // @Input()
  // imgUrls: string;
  // _imgUrl: string;

  // get imgUrl(): string {
  //   if (!this._imgUrl) {
  //     this._imgUrl = this.imgUrls[0] ?? '/src/assets/genius platform.png'
  //   }
  //   return this._imgUrl;
  // }
}
