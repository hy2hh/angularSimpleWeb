import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../class/Hero';


@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss']
})

export class HeroesDetailComponent implements OnInit {

  @Input()
  hero: Hero;

  constructor() {

  }

  ngOnInit() {
  }
}
