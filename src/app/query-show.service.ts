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
     genres: String[],
     network:{name:String},
     image:{medium: String},
     summary:String,
     previousepisode:String
   }
    
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
  //In this function, for summary the characters like <p>, </p>, <br>, </br> has been removed before displaying
  //The image variable checks for image being null and also medium being null
  private transformtoIShowDetails(temp:IQueryShowDetailsData[]): Iqueryshowdetails[]
  {
    let arr: Iqueryshowdetails[]=[];
    for(let i = 0;i < temp.length;i++)
    {
        var item: Iqueryshowdetails = {
        name: temp[i].show.name,
        language: temp[i].show.language?temp[i].show.language:"",
        network: temp[i].show.network?temp[i].show.network.name:"",
        summary: (temp[i].show.summary
        .replace(/<p>/g,"")
        .replace("</p>","")
        .replace("<b>","")
        .replace("</b>",""))?
        (temp[i].show.summary).replace("<p>","").replace("</p>","").replace("<b>","").replace("</b>",""):"",
        image: temp[i].show.image?(temp[i].show.image.medium?temp[i].show.image.medium:""):"",
        genres: [temp[i].show.genres[i]?temp[i].show.genres[i]:""]
      };
      arr.push(item);
    }
    return arr;
    }
      
  }

