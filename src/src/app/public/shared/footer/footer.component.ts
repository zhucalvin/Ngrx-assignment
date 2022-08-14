import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <small>&copy; {{ today | date: 'yyyy' }}. All rights reserved. </small>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {
  today: number = Date.now();
  
  constructor() { }

  ngOnInit(): void {
  }

}
