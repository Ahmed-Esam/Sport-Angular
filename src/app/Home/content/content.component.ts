import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../Servers/servers.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  constructor(private ser: ServersService ) {}
  albums;
  api: any = [];

  fetchApitest(){
    return this.albums = this.ser.getData().subscribe((res:any) =>{
      this.api = res.data.items
      console.log(this.api)
    })
  }



  ngOnInit() {
    this.fetchApitest()
    // console.log(this.albums)

  }

}
