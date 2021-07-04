import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-motel',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class MotelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
