import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) { 

    this.activatedRoute.params.subscribe( params => {
      console.log(params['id']);
      heroesService.getHeroe(params['id']);
    });
  }

}
