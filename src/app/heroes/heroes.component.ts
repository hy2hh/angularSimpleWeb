import { Component, OnInit } from '@angular/core';
import { Hero } from '../class/Hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  onSelected(hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }

  constructor(
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.getHeroes();
  }
}
