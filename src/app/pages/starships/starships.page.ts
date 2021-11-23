import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.page.html',
  styleUrls: ['./starships.page.scss'],
})
export class StarshipsPage implements OnInit {

starships:any;
iconname=`rocket-outline`;

  constructor(private obtswserv3:SwapiService) { }

  ngOnInit() {
    this.starships= this.obtswserv3.getSwapi(`starships`)
  }

}
