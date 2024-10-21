import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  display: string = '';
  operatorPressed: boolean = false;

  constructor() {}

  press(val: string) {
    if (this.operatorPressed && ['+', '-', '*', '/'].includes(val)) {
      return; // No permite dos operadores seguidos
    }
    this.display += val;
    this.operatorPressed = ['+', '-', '*', '/'].includes(val);
  }

  clear() {
    this.display = '';
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch (e) {
      this.display = 'Error';
    }
  }
}