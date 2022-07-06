import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() { }

  scrollBased() {
    window.onscroll = function () { myFunction() };

    function myFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      } else {
      }
    }
  }
}
