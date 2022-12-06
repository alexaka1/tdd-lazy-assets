import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <p>hello works!</p>
    <button routerLink="/admin">Admin</button>
    <script>
      debugger;
      console.log('hello');
    </script>
  `,
  styles: [],
})
export class HelloComponent implements OnInit {
  ngOnInit() {
    // debugger;
    // console.log($!);
    console.log('hello ngoninit');
  }
}
