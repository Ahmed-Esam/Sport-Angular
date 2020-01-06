import { ServersService } from './../../Servers/servers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { news } from '../../interface/news.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  
  constructor(private ser: ServersService,private route: ActivatedRoute) { }
  articles;
  news: any;
  // news: any = [];
  paramId;
IntializeId(){
  this.route.paramMap.subscribe(params => {
    this.paramId = params.get('id')
     console.log(this.paramId)
   });
}
  fetchApitest(id){

    return this.articles = this.ser.getArticles(id).subscribe((res:any) =>{
      this.news = res.data
      console.log(this.news)
      console.log(this.news.mainImage.imagesUrls.lowOriginal)

    })
  }


  ngOnInit() {
    this.IntializeId()
    this.fetchApitest(this.paramId)
  }

}
