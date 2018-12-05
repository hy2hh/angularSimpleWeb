import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links = ['/', '/about', '/contact'];
  activeLinks = this.links[0];
  constructor() { }

  ngOnInit() {
  }

}
