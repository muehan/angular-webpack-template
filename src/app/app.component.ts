import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

  constructor(
  ) {}

  public ngOnInit() {
    console.log('Initial app load');
  }
}