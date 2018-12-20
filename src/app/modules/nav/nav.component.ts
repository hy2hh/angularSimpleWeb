import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input()
  info;

  links = ['/', '/about', '/contact'];
  activeLinks = this.links[0];
  constructor() { }

  ngOnInit() {
    console.log(this.info);
  }

}
