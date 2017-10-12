import { Component, OnInit } from '@angular/core';

import { AuthService } from '../_services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signout() {
    this.authService.logout()
      .then((res) => window.location.reload())
      .catch((res) => alert(res));
  }

}
