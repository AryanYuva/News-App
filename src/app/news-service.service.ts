import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  ApiKey = "b03ea0cbed3042e4b8fab2535dbff80b";

  constructor(private http:HttpClient) { }

  initSources():Observable<any>{
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.ApiKey);
  }
  initArticles():Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.ApiKey);
  }
  getArticlesByID(source: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.ApiKey);
  }
}
