import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

people:any;
iconname= `people-circle` 

  constructor(private obtenserv2:SwapiService) { }

  ngOnInit() {
    this.people= this.obtenserv2.getSwapi(`people`);
  }

}
