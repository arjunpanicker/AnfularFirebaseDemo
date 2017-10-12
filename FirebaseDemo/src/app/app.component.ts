import { Component, OnInit } from '@angular/core';

import { SharedService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor (private sharedService: SharedService) { }

  ngOnInit() {}

}
