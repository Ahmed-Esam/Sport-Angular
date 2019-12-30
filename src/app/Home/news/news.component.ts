import { ServersService } from './../../Servers/servers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  constructor(private ser: ServersService,private route: ActivatedRoute) { }
  articles;
  news: any = [];;
  paramId;

  fetchApitest(){
    this.route.paramMap.subscribe(params => {
     this.paramId = params.get('id')
      console.log(this.paramId)
    });

    return this.articles = this.ser.getArticles(this.paramId).subscribe((res:any) =>{
      this.news = res.data
      console.log(this.news)
    })
  }


  ngOnInit() {
    this.fetchApitest()
  }

}
