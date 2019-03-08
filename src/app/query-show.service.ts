import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//From HttpClientModule they are using the HttpClient component
import { environment } from 'src/environments/environment';
import{Iqueryshowdetails} from './iqueryshowdetails';
import{map} from 'rxjs/operators';

interface IQueryShowDetailsData
{
 // image:{medium: String},
  show:{
     name:String,
     language: String,
     //genres: String[],
     network:{name:String}
   },
    summary:String
}

@Injectable({
  providedIn: 'root'
})
export class QueryShowService {

  constructor(private httpClient: HttpClient)   {  }

  getCurrentShow(showname:String)
  {
    return this.httpClient.get<IQueryShowDetailsData[]>(`${environment.baseURL}api.tvmaze.com/search/shows?q=${showname}&appId=
    ${environment.appId}`).pipe(map(temp=> this.transformtoIShowDetails(temp)))

  }
  //private since it can be used internally
  private transformtoIShowDetails(temp:IQueryShowDetailsData[]): Iqueryshowdetails[]
  {
    let arr: Iqueryshowdetails[]=[];//<{image: String, name: String, language: String, genre: String[], network: String, summary: String}>;
    for(let i = 0;i < temp.length;i++)
    {
      //arr[i].image= temp[i].image.medium;
      arr[i].name= temp[i].show.name;
      arr[i].language= temp[i].show.language;
      arr[i].network= temp[i].show.network.name;
      arr[i].summary= temp[i].summary;
    }
    
    return arr;
   
  }
}
