import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  shownav() {
    let navcontent = document.getElementById('navbar-content') as HTMLElement;
    navcontent.style.display = "flex"
  }

  closenav() {
    let navcontent = document.getElementById('navbar-content') as HTMLElement;
    navcontent.style.display = "none";
  }

}
