import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ServersService } from './../../Servers/servers.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { HeaderComponent } from 'src/app/layout/header/header.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // @Input() serverName
  // @ViewChild(HeaderComponent , {static : false}) Search : HeaderComponent
  Search;
  data: any;
  constructor(private ser:ServersService ,private route: ActivatedRoute, private router:Router) {
    route.params.subscribe(val => {
     this.ngOnInit();
    });
   }

  Keys;
  IntializeSearchParameter(){
    this.route.paramMap.subscribe(params => {
      this.Keys = params.get('name')
    });
  }
  getSearchs(query){
    return this.Search = this.ser.getSearch(query).subscribe((res:any) => {
      this.data = res.data
    })
  }



  ngOnInit() {
    // return this.ser.testName = this.getSearchs(this.KeyName);
    this.IntializeSearchParameter()
    this.getSearchs(this.Keys)
    //console.log(this.getSearchs(this.Keys))
  }

}
