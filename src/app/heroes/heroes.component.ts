import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

//Test import mock data without service
// import { HEROES } from '../mock-heroes';

//Import service
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  //Test mock heroes without service
  //heroes = HEROES;

  //Hero Data Set Declaration to set by service
  heroes:Hero[];
  // selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  /** Get Heroes from service of mock data */
  getHeroes():void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  /** Add Hero */
  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => { 
        this.heroes.push(hero);
      });
  }

  /** Delete Hero */
  delete(hero:Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  // onSelect(hero:Hero): void{
  //   this.selectedHero = hero;
  // }
}
