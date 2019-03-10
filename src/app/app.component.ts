import { Component } from '@angular/core';
import { QueryShowService } from './query-show.service';
import { Iqueryshowdetails } from './iqueryshowdetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TVMaze-Query-App';

  currentShow: Iqueryshowdetails[];
  constructor(private queryShowService: QueryShowService) {
  }
  doShowSearch(searchValue){
    
    const userInput = searchValue;
    this.queryShowService
    .getCurrentShow(userInput)
    .subscribe(
      data=> this.currentShow = data);
           
    }

  }


