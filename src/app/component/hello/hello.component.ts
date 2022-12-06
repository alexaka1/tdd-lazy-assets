import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <p>
      hello works!
    </p>
    <button routerLink="/admin">Admin</button>
  `,
  styles: [
  ]
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
