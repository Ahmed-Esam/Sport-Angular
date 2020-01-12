import { Component, OnInit, Input } from '@angular/core';
import { ServersService } from 'src/app/Servers/servers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ser:ServersService, private router:Router) { }

  //  serverName;
  // val;
  SeTests

  OnInput(value) {
    // this.serverName = value;
    this.SeTests =  value;
    console.log(this.SeTests)
    this.ser.getSearch(this.SeTests)

    this.router.navigate(["search", this.SeTests]);

  }


  ngOnInit() {

  }

}
