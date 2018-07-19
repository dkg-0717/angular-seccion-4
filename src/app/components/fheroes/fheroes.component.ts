import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fheroes',
  templateUrl: './fheroes.component.html'
})
export class FheroesComponent implements OnInit {

  heroe:Heroe[] = [];

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroesService.buscarHeroes(params['termino']);
    });
  }

}
