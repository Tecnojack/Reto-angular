import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  showHeader = false;

  constructor() { }
  setHeader(value) {
    this.showHeader = value;
  };
  getHeader() {
    return this.showHeader;
  };

}
