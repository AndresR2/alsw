import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-planets',
  templateUrl: './descripcion-planets.page.html',
  styleUrls: ['./descripcion-planets.page.scss'],
})
export class DescripcionPlanetsPage implements OnInit {

  planets:any;

  constructor(private mirou:ActivatedRoute, private miSwapiService:SwapiService) { }

  ngOnInit() {
    this.mirou.paramMap.subscribe((params)=>{
      let id=params.get('id');
      console.log(id);
      this.planets = this.miSwapiService.getSwapi(`planets/${id}`).subscribe(data =>{
        this.planets =data;
        console.log(data);
      });

    });
  }

}
