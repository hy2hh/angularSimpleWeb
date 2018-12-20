import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-sub',
  templateUrl: './home-sub.component.html',
  styleUrls: ['./home-sub.component.scss']
})

export class HomeSubComponent implements OnInit {
  @Input()
  parentInfomation;

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log(this.parentInfomation);
  }

  updateString(str) {
    console.log(str);
    this.change.emit(str);
  }

}
