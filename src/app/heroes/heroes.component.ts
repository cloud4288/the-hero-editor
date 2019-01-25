import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { componentHostSyntheticProperty } from '@angular/core/src/render3';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
