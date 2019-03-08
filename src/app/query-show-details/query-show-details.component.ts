import { Component, OnInit } from '@angular/core';
import {Iqueryshowdetails} from '../iqueryshowdetails';
import { QueryShowService } from '../query-show.service';

@Component({
  selector: 'app-query-show-details',
  templateUrl: './query-show-details.component.html',
  styleUrls: ['./query-show-details.component.css']
})
export class QueryShowDetailsComponent implements OnInit {

  showTime: Iqueryshowdetails[];
  // console.log(showTime);

  constructor(private queryShowService: QueryShowService) {
     /*this.show={
      image:'//static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg',
      name: 'Secret City',
      language:'English',
      genre:'Thriller',
      network: 'NetFlix',
      summary: 'Secret City summary'
     };*/

   }

  ngOnInit() {

    this.queryShowService.getCurrentShow("Girls").subscribe(data=> this.showTime = data);
    
  }
}
