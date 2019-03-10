import { Component, OnInit, Input } from '@angular/core';
import {Iqueryshowdetails} from '../iqueryshowdetails';
import { QueryShowService } from '../query-show.service';

@Component({
  selector: 'app-query-show-details',
  templateUrl: './query-show-details.component.html',
  styleUrls: ['./query-show-details.component.css']
})
export class QueryShowDetailsComponent implements OnInit {

  @Input() showTime: Iqueryshowdetails[];
  
  constructor(){}

  ngOnInit() {

    
  }
}
