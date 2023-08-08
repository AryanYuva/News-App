import { Component,OnInit } from '@angular/core';
import { NewsServiceService } from './news-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NewsApp';

  sources:any = [];
  trendingArticles:any = [];
  selectedNewsChannel: string = "Top 10 Trending News";

  constructor(private newsservice: NewsServiceService) {}

  getsource(){
    this.newsservice.initSources().subscribe((res)=>{
      this.sources=res.sources
    })
  }
  gettrending(){
    this.newsservice.initArticles().subscribe((res)=>{
      console.log(res);
      this.trendingArticles = res.articles
    })
  }

  searchSource(source:any){
    this.newsservice.getArticlesByID(source.id)
    .subscribe((res:any)=>{
      this.selectedNewsChannel = source.name
      this.trendingArticles = res.articles;
    })
  }
  ngOnInit(): void {
    this.getsource();
    this.gettrending();
  }
  
}