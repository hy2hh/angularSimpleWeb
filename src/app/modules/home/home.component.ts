import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { HEROES } from '../mock-heroes';
import { HomeSubComponent } from './sub/home-sub.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  users: Object;
  count = 0;
  constructor(private data: DataService) { }

  ngOnInit() {
    console.log(this.data.getUsers());

    this.users = HEROES;
    console.log(this.users);
  }

  updatefromChild() {
    this.count++;
    console.log(this.count);
  }
}
